package smh.pcm.service;

import java.math.BigDecimal;
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
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.LotProcessState;

import smh.pcm.service.PCMConstant.TransitType;
import smh.pcm.service.PCMConstant.TransitionId;

@Service
public class PCM07000ServiceImpl extends AbstractNbdfService implements PCM07000Service {
	
	public static final String NAMESAPCE1800 				= "smh.pcm.dao.PCM01800Dao";
	public static final String NAMESAPCE6900 				= "smh.pcm.dao.PCM06900Dao";
    public static final String NAMESAPCE 						= "smh.pcm.dao.PCM07000Dao";
    public static final String NAMESAPCEWIP 				= "smh.pcm.dao.PCMWipDao";
    public static final String NAMESAPCEWORKPROCESS 	= "smh.pcm.dao.PCMWorkProcessDao";
    public static final String NAMESAPCECOMMON 		= "smh.pcm.dao.PCMLotCommonDao";
    
    @Autowired
    private PCMWipService  wipService;
    
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn 			: selectLotInfo
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectLotInfo
    * @remark		: 상세설명
* @see smh.pcm.service.PCM07000Service#selectLotInfo(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectOtherInfo(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE6900 + ".selectCommentByProcess", param),			"output1");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE6900 + ".selectProcessSpecByProcess", param),			"output2");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE 	  + ".selectLotListForFinalInspection", param),		"output3");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE1800 + ".getEquipmentByArea", param),					"output4");
    }
    
    /**
    * @fn 			: selectCustomQuery
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectCustomQuery
    * @remark		: 상세설명
* @see smh.pcm.service.PCM07000Service#selectCustomQuery(com.nbdf.commons.ui.vo.UiMapDto)
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
    * @fn 			: saveFinalInspectionStart
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : saveFinalInspectionAccept
    * @remark		: 상세설명
* @see smh.pcm.service.PCM07000Service#saveFinalInspectionStart(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveFinalInspectionStart(UiMapDto dto) throws Exception {
    	int result = 0;
    	
    	DataSetMap 						dsLot 					= getParametersDataSetMap(dto, "INPUT1");
    	DataSetMap 						dsLotList 				= getParametersDataSetMap(dto, "INPUT2");
    	DataSetMap 						dsEquipmentList		= getParametersDataSetMap(dto, "INPUT3");
		Map<String, Object> 			param 				= dsLot.get(0);    	
    	String 							strUserId				= (String)param.get("USERID");
		String 							comment 			= StringUtil.Object2String(param.get("COMMENT"));		
		String								equipmentList		= "";
		
		for (int i = 0, n = dsEquipmentList.size(); i < n; i++) {
			Map<String, Object> eqData = dsEquipmentList.get(i);
			equipmentList += "," + eqData.get("EQUIPMENTID");
		}
		
		equipmentList = equipmentList.substring(1);
		
	   	 for (int i = 0, n = dsLotList.size(); i < n; i++) {
	         Map<String, Object> lotData = dsLotList.get(i);
	         String lotId 			= lotData.get("LOTID").toString();
	         String inspectUser = StringUtil.Object2String(lotData.get("INSPECTIONUSER"));
	          
	         Map<String, Object> 			lotMap 				= generalDao.addSelectOneMap(NAMESAPCE6900 + ".selectLotData", lotData);
	         String 							areaId					= (String)lotMap.get("AREAID");
	 		 String 							sToday   				= (String)lotMap.get("NOW");			//현재시각
	 		 SimpleDateFormat 				dateFormat 			= new SimpleDateFormat("yyyyMMddHHmmss");
	   	 	 Date 								now         			= dateFormat.parse(sToday);//현재시간 
	 		// 사용자별 작업장 통제
	 		if(!wipService.isAreaInAuthority(areaId, true)) {			
	 			throw new BizException("HasNoAuthorityOfArea", String.format("LotId=%s, AreaId=%s", lotId, areaId));	// 해당 작업장에 대한 권한이 없습니다. {0}
	 		}
	 		
			// Check Window Time
			wipService.executeCheckingWindowTimeNewTx(dto, lotMap, now);
			
			// 설비 이력 저장 
			this.saveLotEquipment(lotMap, equipmentList, now);
			
			String equipmentId = equipmentList.split(",")[0];
						
			// Track-In 처리
			lotMap = wipService.trackInLot(dto, lotMap, equipmentId, strUserId, now);
			
			// 특이사항 입력
			if (!comment.isEmpty())
				wipService.insertLotComment(dto, lotMap, comment, strUserId, TransitionId.TrackIn);
			
			// 검사원 정보 입력
			if(!"".equals(inspectUser)){
				this.getInspectionResultInsertData(lotId, lotMap, inspectUser, now);	
			}
			
			
			// 작업실적 입력
			wipService.saveLotWorkResult(dto, lotMap, TransitType.TrackInLot, strUserId, now, "", "");
	   	}   	 	
        putDataSetMap(dto, result);
    }
 
    /**
    * @fn 			: saveLotEquipment
    * @brief 		: 함수 간략한 설명 
    * @Method Name : saveLotEquipment
    * @remark		: 상세설명
    * @Author		: sungmin.choe
    * @File Version	: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일      수정자        수정내용
     *   ------------  ------       ----------
     *   2021. 4. 30.       sungmin.choe      최초  생성
     *
    */
    private void saveLotEquipment(Map<String, Object> lotMap, String equipmentList, Date time) throws Exception
	{
		Map<String, Object> param = new HashMap<>();
		//HashMap Copy
    	for (Map.Entry<String, Object> entry : lotMap.entrySet()) {
    		param.put(entry.getKey(), entry.getValue());
    	}
		param.put("EQUIPMENTID", equipmentList);
		
		List<Map<String, Object>> result = generalDao.addSelect(NAMESAPCECOMMON + ".GetNotExistsLotEquipment", param); 
				
		for (Map<String, Object> map : result)
		{
			Map<String, Object> eqParam = new HashMap<>();
			eqParam.put("LOTID", map.get("LOTID").toString());
			eqParam.put("TXNHISTKEY", map.get("TXNHISTKEY").toString());
		
			Map<String, Object> 	eqMap = generalDao.addSelectOneMap(NAMESAPCE + ".selectLotEquipmentData", eqParam);
			
			if (eqMap == null)
			{
				throw new BizException("InValidData003", String.format("LotId = %s, TxnHistKey = %s", map.get("LOTID").toString(), map.get("TXNHISTKEY").toString()));
			}
			
			generalDao.addUpdate(NAMESAPCE + ".deleteLotEquipmentData", eqParam);
		}
		
		for (String equipmentId : equipmentList.split(","))
		{
			Map<String, Object> lotEqParam = new HashMap<>();
			lotEqParam.put("LOTID",							lotMap.get("LOTID").toString());
			lotEqParam.put("EQUIPMENTID", 					equipmentId);
			lotEqParam.put("PROCESSSEGMENTID", 			lotMap.get("PROCESSSEGMENTID").toString());
			lotEqParam.put("PROCESSSEGMENTVERSION", lotMap.get("PROCESSSEGMENTVERSION").toString());
			lotEqParam.put("WORKCOUNT", 					lotMap.get("WORKCOUNT").toString());
						
			List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCECOMMON + ".selectLotEquipmentData", lotEqParam);
			Map<String, Object> equipParam = new HashMap<>();
			
			if (list.size() > 0)
			{
				equipParam = list.get(0);
				equipParam.put("PROCESSSTATE", 			lotMap.get("PROCESSSTATE").toString());
				equipParam.put("TRACKINTIME", 			time);
				equipParam.put("TXNID", 						this.getClass().getSimpleName());
				
				generalDao.addUpdate(NAMESAPCE + ".updateLotEquipmentData", equipParam);				
			} else {
				String txnHistKey = TxnHistKey.getTxnHistKey();
				equipParam = new HashMap<>();
				equipParam.put("LOTID", 							lotMap.get("LOTID").toString());
				equipParam.put("TXNHISTKEY", 					txnHistKey);
				equipParam.put("EQUIPMENTID", 				equipmentId);
				equipParam.put("PROCESSSTATE", 				lotMap.get("PROCESSSTATE").toString());
				equipParam.put("PROCESSSEGMENTID", 		lotMap.get("PROCESSSEGMENTID").toString());
				equipParam.put("PROCESSSEGMENTVERSION",	lotMap.get("PROCESSSEGMENTVERSION").toString());
				equipParam.put("WORKCOUNT", 					lotMap.get("WORKCOUNT").toString());
				equipParam.put("TRACKINTIME", 				time);
				equipParam.put("TXNID", 							this.getClass().getSimpleName());
				
				generalDao.addUpdate(NAMESAPCE + ".insertLotEquipmentData", equipParam);
			}
			
			Map<String, Object> eqParam = new HashMap<>();
			eqParam.put("EQUIPMENTID", equipmentId);
			Map<String, Object> eqData = generalDao.addSelectOneMap(NAMESAPCE + ".selectEquipmentData", eqParam);
			
			if (eqData == null)
			{
				throw new BizException("InValidData001", String.format("EquipmentId = %s", equipmentId));
			}
			
			eqData.put("STATE", PCMConstant.EquipmentState.Run);
			eqData.put("LASTTXNID", this.getClass().getSimpleName());
			
			generalDao.addUpdate(NAMESAPCE + ".updateEquipmentData", eqData);
		}
	}
    
    /**************************************************************************************
	* 검사원 정보 입력
	***************************************************************************************/
	private void getInspectionResultInsertData(String lotId, Map<String, Object> lotMap, String strInspectUser, Date now) throws Exception
	{
		// 검사 차수 조회
		HashMap<String, Object> propertyMap = new HashMap<>();
		propertyMap.put("RESOURCETYPE", 			"FinishInspection");
		propertyMap.put("INSPECTIONDEFID", 		"FinishInspection");
		propertyMap.put("RESOURCEID", 			lotId);
		propertyMap.put("ENTERPRISEID", 			lotMap.get("ENTERPRISEID").toString());
		propertyMap.put("PLANTID", 					lotMap.get("PLANTID").toString());
		propertyMap.put("PROCESSDEFID", 			lotMap.get("PROCESSDEFID").toString());
		propertyMap.put("PROCESSDEFVERSION", 	lotMap.get("PROCESSDEFVERSION").toString());
		propertyMap.put("PROCESSSEGMENTID", 	lotMap.get("PROCESSSEGMENTID").toString());
		
		List<Map<String, Object>> inspList = generalDao.addSelect(NAMESAPCE + ".GetInspectionDegreeInfo", propertyMap);
		String txnHistKey = TxnHistKey.getTxnHistKey();
		int degree = 1;
		if(inspList != null && !inspList.isEmpty() && inspList.size() > 0)
		{
			degree = Integer.parseInt(inspList.get(0).get("INSPDEGREE").toString());
		}
		
		//2021-08-02 재작업 관련 로직 추가
		BigDecimal bd = (BigDecimal)lotMap.get("WORKCOUNT");
		degree = degree + bd.intValue();
		 
		HashMap<String, Object> inspectionMap = new HashMap<>();
		inspectionMap.put("TXNHISTKEY", 					txnHistKey);
		inspectionMap.put("RESOURCETYPE", 				"FinishInspection");
		inspectionMap.put("INSPECTIONDEFID", 			"FinishInspection");
		inspectionMap.put("RESOURCEID", 					lotId);
		inspectionMap.put("PROCESSRELNO", 				lotMap.get("PROCESSSEGMENTID"));
		inspectionMap.put("ENTERPRISEID", 					lotMap.get("ENTERPRISEID"));
		inspectionMap.put("PLANTID", 						lotMap.get("PLANTID"));		
		inspectionMap.put("PRODUCTDEFID", 				lotMap.get("PRODUCTDEFID"));
		inspectionMap.put("PRODUCTDEFVERSION", 		lotMap.get("PRODUCTDEFVERSION"));
		inspectionMap.put("PROCESSDEFID", 				lotMap.get("PROCESSDEFID"));
		inspectionMap.put("PROCESSDEFVERSION", 		lotMap.get("PROCESSDEFVERSION"));
		inspectionMap.put("PROCESSSEGMENTID", 			lotMap.get("PROCESSSEGMENTID"));
		inspectionMap.put("PROCESSSEGMENTVERSION",	lotMap.get("PROCESSSEGMENTVERSION"));
		inspectionMap.put("DEGREE", 						String.valueOf(degree));
		inspectionMap.put("WORKCOUNT", 					lotMap.get("WORKCOUNT"));
		inspectionMap.put("INSPECTIONQTY", 				lotMap.get("QTY"));
		inspectionMap.put("AREAID", 							lotMap.get("AREAID"));
		
		//검사결과
		generalDao.addUpdate(NAMESAPCE + ".insertInspectionResult", inspectionMap);
		
		// 검사원 등록
		for (String inspector : strInspectUser.split(","))
		{
			HashMap<String, Object> inspectionWorkerMap = new HashMap<>();
			inspectionWorkerMap.put("TXNHISTKEY", 					TxnHistKey.getTxnHistKey());
			inspectionWorkerMap.put("RESOURCETYPE", 				"FinishInspection");
			inspectionWorkerMap.put("RESOURCEID", 					lotId);
			inspectionWorkerMap.put("PROCESSRELNO", 				lotMap.get("PROCESSSEGMENTID"));
			inspectionWorkerMap.put("INSPECTIONDEFID", 			"FinishInspection");			
			inspectionWorkerMap.put("DEGREE", 						String.valueOf(degree));			
			inspectionWorkerMap.put("ENTERPRISEID", 				lotMap.get("ENTERPRISEID"));
			inspectionWorkerMap.put("PLANTID", 						lotMap.get("PLANTID"));
			inspectionWorkerMap.put("INSPECTIONUSER", 			inspector);
			inspectionWorkerMap.put("PROCESSDEFID", 				lotMap.get("PROCESSDEFID"));
			inspectionWorkerMap.put("PROCESSDEFVERSION", 		lotMap.get("PROCESSDEFVERSION"));
			inspectionWorkerMap.put("PROCESSSEGMENTID", 		lotMap.get("PROCESSSEGMENTID"));
			inspectionWorkerMap.put("PROCESSSEGMENTVERSION",	lotMap.get("PROCESSSEGMENTVERSION"));
			inspectionWorkerMap.put("WORKCOUNT", 					lotMap.get("WORKCOUNT"));

			//검사원 저장
			generalDao.addUpdate(NAMESAPCE + ".insertInspectionWorker", inspectionWorkerMap);
		}
	}
}