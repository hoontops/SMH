package smh.pcm.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.LotProcessState;
import smh.pcm.service.PCMConstant.TransitType;


@Service
public class PCM06900ServiceImpl extends AbstractNbdfService implements PCM06900Service {

    public static final String NAMESAPCE = "smh.pcm.dao.PCM06900Dao";
    public static final String NAMESAPCEWIP = "smh.pcm.dao.PCMWipDao";
    
    @Autowired
    private PCMWipService  wipService;
    
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn 			: selectLotInfo
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectLotInfo
    * @remark		: 상세설명
* @see smh.pcm.service.PCM06900Service#selectLotInfo(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectOtherInfo(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCommentByProcess", param),		"output1");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectProcessSpecByProcess", param),	"output2");
    }
    

    /**
    * @fn 			: selectCustomQuery
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectCustomQuery
    * @remark		: 상세설명
* @see smh.pcm.service.PCM06900Service#selectCustomQuery(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCustomQuery(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        Map<String, Object> paramArgs = dto.getInVariableMap();        
        String sqlId = (String)param.get("SQL_ID");
        
        if(!"".equals(sqlId) && sqlId != null){
        	//Arguments를 Param에 추가
        	for (Map.Entry<String, Object> entry : paramArgs.entrySet()) {        	    
        	    param.put(entry.getKey(), entry.getValue());
        	}
        	
        	//추가 배열파라미터가 존재하면 배열형태로 param에 바인딩
        	String addParam = (String)param.get("ADD_PARAM");
        	if(!"".equals(addParam) && addParam != null){
        		param.put("ADD_LIST", addParam.split("\\|"));
        	}
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }        
    }
    
    /**
    * @fn 			: saveFinalInspectionAccept
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : saveFinalInspectionAccept
    * @remark		: 상세설명
* @see smh.pcm.service.PCM06900Service#saveFinalInspectionAccept(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveFinalInspectionAccept(UiMapDto dto) throws Exception {
    	int result = 0;
    	
    	DataSetMap 						dsLot 					= getParametersDataSetMap(dto, "INPUT1");
    	DataSetMap 						dsSplit 				= getParametersDataSetMap(dto, "INPUT2");    	
		List<Map<String, Object>> 	responseDt 			= new java.util.ArrayList<Map<String, Object>>();
		Map<String, Object> 			param 				= dsLot.get(0);    	
    	String 							strUserId				= (String)param.get("USERID");
		String 							unit 					= (String)param.get("SPLITUNIT");
		String 							lotId 					= (String)param.get("LOTID");		
		Double 							panelperqty 			= Double.parseDouble(param.get("PANELPERQTY").toString());
		
		//기본 Validation Check		
		Map<String, Object> 			lotMap 				= generalDao.addSelectOneMap(NAMESAPCE + ".selectLotData", param);
		String 							areaId					= (String)lotMap.get("AREAID");
		String 							subprocessDefId	= (String)lotMap.get("SUBPROCESSDEFID");
		String 							sToday   				= (String)lotMap.get("NOW");			//현재시각
		String 							isHold 				= (String)lotMap.get("ISHOLD");		//보류여부
		String 							defectUnit 			= (String)lotMap.get("DEFECTUNIT");
		String								printLotId				= "";
		Double 							lotQty 				= Double.parseDouble(lotMap.get("QTY").toString());
		SimpleDateFormat 				dateFormat 			= new SimpleDateFormat("yyyyMMddHHmmss");
   	 	Date 								now         			= dateFormat.parse(sToday);//현재시간
    	
		if(lotMap == null || lotMap.size()<1){
			throw new BizException("NotExistLot", String.format("LotId = %s", lotId));
		}
		
		// 보류 여부 체크
 		if ("Y".equals(isHold)){	
 			throw new BizException("LotIsHold", String.format("LotId = %s", lotId)); // 보류 상태의 Lot 입니다.
 		}
 		
 		// 인수 가능 상태 확인
 		if (!wipService.validateProcessState(lotMap, TransitType.ReceiveLot)){
 			throw new BizException("LotStateIsNotAvailableReceive", String.format("LotId = %s", lotId)); // Lot이 인수 가능 상태가 아닙니다. {0}
 		}
 		
 		// 작업자 선택 여부 체크
 		if (strUserId.isEmpty()){
 			throw new BizException("NoSelectWorker"); // 작업자가 선택되지 않았습니다.
 		}
 		
 		// 사용자별 작업장 통제
		if(!wipService.isAreaInAuthority(areaId, true)) {			
			throw new BizException("HasNoAuthorityOfArea", String.format("LotId=%s, AreaId=%s", lotId, areaId));	// 해당 작업장에 대한 권한이 없습니다. {0}
		}
				
		if("".equals(defectUnit) && "PCS".equals(unit)){
			defectUnit = unit;
		}
		
    	for (int i = 0, n = dsSplit.size(); i < n; i++) {
            Map<String, Object> splitData = dsSplit.get(i);
            String isParent = (String)splitData.get("ISPARENT");
            String splitLotId = (String)splitData.get("LOTID");
            String splitUnit = (String)splitData.get("UNIT");
            
            // 원본 LOT 인경우 SKIP
			if("Y".equals(isParent) || splitLotId.equals(lotId)) continue;
			
			String childLotId = "";
			Double splitQty = 0.0;			
			splitQty = Double.parseDouble(splitData.get("QTY").toString());
			
			// Split 공통함수 호출로 Split 
			Map<String, Object> splitLot = wipService.splitLot(dto, lotId, splitQty, splitQty, TransitType.ReceiveLot);
			childLotId = (String)splitLot.get("LOTID");
			printLotId += ","+childLotId;	//LOT CARD 출력용 LOTID 변수
			
			// Response LotId List
			Map<String, Object> chdMap = new HashMap<String, Object>();
			chdMap.put("LOTID", childLotId);
			responseDt.add(chdMap);
			
			splitLot.put("LOTCREATEDTYPE", 	"FinalInspect");
			splitLot.put("PROCESSSTATE", 		LotProcessState.Wait);
			splitLot.put("CREATEDQTY", 		splitQty);
			splitLot.put("UNIT", 					splitUnit);
			splitLot.put("QTY", 					splitQty);
			splitLot.put("PCSQTY", 				splitQty);
			splitLot.put("WEEK",					lotMap.get("WEEK"));
			splitLot.put("LASTTXNTIME",		now);
			splitLot.put("RECEIVETIME",		now);
			splitLot.put("MODIFIEDTIME",		now);
			splitLot.put("RESOURCEID",			param.get("RESOURCEID"));
			splitLot.put("PANELPERQTY",		param.get("PANELPERQTY"));
			
			if(panelperqty != null && panelperqty > 0.0)
			{	
				splitLot.put("PANELQTY", Math.ceil((splitQty) / panelperqty));
			}
			
			splitLot.put("LASTTXNHISTKEY",TxnHistKey.getTxnHistKey());
			generalDao.addUpdate(NAMESAPCE + ".updateSplitLot", splitLot);		
			splitLot.put("TXNHISTKEY", splitLot.get("LASTTXNHISTKEY"));
			generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", splitLot);
			
			lotQty = lotQty - splitQty;
			
			lotMap.put("PCSQTY", 			lotQty);
			lotMap.put("PANELQTY", 		Math.ceil((lotQty) / panelperqty));
			lotMap.put("LASTTXNTIME",	now);
			lotMap.put("MODIFIEDTIME",	now);
			
			//lotData Update (History는 최종 1번만)
			generalDao.addUpdate(NAMESAPCE + ".updateLot", lotMap);
			
			// 작업실적 입력 
			wipService.saveSplitLotWorkResult(lotMap, splitLot, splitQty);
			// 인수실적 등록
			wipService.saveLotWorkResult(dto, splitLot, TransitType.ReceiveLot, strUserId, now, "", "");
			
			//2020-03-16 강유라
			// 부모 LOT 이 재작업 상태이면 부모LOT의 ct_reworkreturn 정보 복사
			if(!StringUtils.isEmpty(subprocessDefId))
			{
				CopyReworkReturnData(lotId, childLotId);
			}
        }
    	
    	// Check Window Time
    	wipService.executeCheckingWindowTimeNewTx(dto, lotMap, now);
    	
		// 부모 LOt정보 Update
		// Lot 인수완료로 변경 :: 추후 API 호출로 변경 필요
    	lotMap.put("PROCESSSTATE", 		LotProcessState.Wait);
    	lotMap.put("RECEIVETIME", 		now);
    	lotMap.put("LASTTXNTIME", 		now);    	
    	generalDao.addUpdate(NAMESAPCE + ".updateLotFinal", lotMap);
    	
    	//최종 lotData History Insert
    	generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lotMap);
		
		// 작업실적 입력
		wipService.saveLotWorkResult(dto, lotMap, TransitType.ReceiveLot, strUserId, now, "", "");    	
				
        putDataSetMap(dto, result);
    	// 모LOT 수량이 변경되었을 경우 Lot Card 출력을 위해 저장
		if(dsSplit.size() > 0)
		{
			Map<String, Object> 	printParam 			= new HashMap<String, Object>();
			printParam.put("LOTID", printLotId.substring(1,printLotId.length()));
			putDataSetMap(dto, generalDao.addSelect(NAMESAPCE+".selectLotCardList",printParam),		"output");
		}
    }
 
	private void CopyReworkReturnData(String parentLotId, String childLotId) throws Exception
	{
		Map<String, Object> parentReturnParam = new HashMap<String, Object>();
		Map<String, Object> childReturnParam = new HashMap<String, Object>();
		
		parentReturnParam.put("LOTID", parentLotId);
		
		Map<String, Object> 	parentReturnData 				= generalDao.addSelectOneMap(NAMESAPCE + ".selectReturnData", parentReturnParam);
		
		if(parentReturnData==null){return;}
		
		childReturnParam.put("LOTID", childLotId);
		
		Map<String, Object> 	childReturnData 				= generalDao.addSelectOneMap(NAMESAPCE + ".selectReturnData", parentReturnParam);
		
		if(childReturnData == null)
		{
			Map<String, Object> newChildReturnData = new HashMap<String, Object>();
			//HashMap Copy
	    	for (Map.Entry<String, Object> entry : parentReturnData.entrySet()) {
	    		newChildReturnData.put(entry.getKey(), entry.getValue());
	    	}	    	
	    	newChildReturnData.put("LOTID", childLotId);	    	
	    	newChildReturnData.put("LASTTXNHISTKEY",TxnHistKey.getTxnHistKey());
	    	generalDao.addUpdate(NAMESAPCE + ".insertReworkReturnChildLot", newChildReturnData);
	    	generalDao.addInsert(NAMESAPCE + ".insertPcmReworkReturnhistory", newChildReturnData);
		}
		else
		{
			//HashMap Copy
	    	for (Map.Entry<String, Object> entry : parentReturnData.entrySet()) {
	    		childReturnData.put(entry.getKey(), entry.getValue());
	    	}	    	
	    	childReturnData.put("LOTID", childLotId);
	    	childReturnData.put("LASTTXNHISTKEY",TxnHistKey.getTxnHistKey());
	    	generalDao.addUpdate(NAMESAPCE + ".updateReworkReturnChildLot", childReturnData);
	    	generalDao.addInsert(NAMESAPCE + ".insertPcmReworkReturnhistory", childReturnData);
		}
	}
    
}