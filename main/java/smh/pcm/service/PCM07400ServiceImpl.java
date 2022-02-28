package smh.pcm.service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.LotProcessState;
import smh.pcm.service.PCMConstant.TransitType;

@Service
public class PCM07400ServiceImpl extends AbstractNbdfService implements PCM07400Service {

    public static final String NAMESAPCE 						= "smh.pcm.dao.PCM07400Dao";
    public static final String NAMESAPCEWIP 				= "smh.pcm.dao.PCMWipDao";
    public static final String NAMESAPCEWORKPROCESS 	= "smh.pcm.dao.PCMWorkProcessDao";
    public static final String NAMESAPCE6900 				= "smh.pcm.dao.PCM06900Dao";
    public static final String NAMESAPCE7000 				= "smh.pcm.dao.PCM07000Dao";
    
    @Autowired
    private PCMWipService  wipService;
    
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn 			: selectWIPMultiStateList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectWIPMultiStateList
    * @remark		: 상세설명
* @see smh.pcm.service.PCM07400Service#selectWIPMultiStateList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectWIPMultiStateList(UiMapDto dto) throws Exception{
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectWIPMultiStateList", param));        
    }
    

    /**
    * @fn 			: selectCustomQuery
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectCustomQuery
    * @remark		: 상세설명
* @see smh.pcm.service.PCM07400Service#selectCustomQuery(com.nbdf.commons.ui.vo.UiMapDto)
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
    * @fn 			: saveMultiLotStart
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : saveMultiLotStart
    * @remark		: 상세설명
* @see smh.pcm.service.PCM07400Service#saveMultiLotStart(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveMultiLotStart(UiMapDto dto) throws Exception {
    	DataSetMap 						dsLotList				= getParametersDataSetMap(dto, "INPUT1");
    	DataSetMap 						dsEquipmentList		= getParametersDataSetMap(dto, "INPUT2");
    	DataSetMap 						dsDefecList			= getParametersDataSetMap(dto, "INPUT3");
    	DataSetMap 						dsDefectLot			= getParametersDataSetMap(dto, "INPUT4");
    	
    	String 							userId					= (String)SessionUtil.getSessionValue(ContextConstant.SESSION_USER_ID);
        String 							enterpriseId			= (String)SessionUtil.getSessionValue(ContextConstant.SESSION_ENTERPRISEID);
        String 							plantId				= (String)SessionUtil.getSessionValue(ContextConstant.SESSION_SITETYPE);
        String 							languageType		= (String)SessionUtil.getSessionValue(ContextConstant.SESSION_LANGUAGETYPE);
        String								equipmentList		= "";
        Double 							lotQty 				= 0.0;
        
		for (int i = 0, n = dsEquipmentList.size(); i < n; i++) {
			Map<String, Object> eqData = dsEquipmentList.get(i);
			equipmentList += "," + eqData.get("EQUIPMENTID");
		}
		
		equipmentList = equipmentList.substring(1);
		
	   	 for (int i = 0, n = dsLotList.size(); i < n; i++) {
	         Map<String, Object> lotData = dsLotList.get(i);
	         String lotId 			= 				lotData.get("LOTID").toString();
	         lotData.put("ENTERPRISEID", 		enterpriseId);
	         lotData.put("PLANTID", 			plantId);
	         lotData.put("LANGUAGETYPE", 	languageType);
	         
	         Map<String, Object> 			lotMap 				= generalDao.addSelectOneMap(NAMESAPCE6900 + ".selectLotData", lotData);
	         String 							areaId					= (String)lotMap.get("AREAID");
	 		 String 							sToday   				= (String)lotMap.get("NOW");			//현재시각
	 		 String 							isHold 				= (String)lotMap.get("ISHOLD");		//보류여부
	 		 SimpleDateFormat 				dateFormat 			= new SimpleDateFormat("yyyyMMddHHmmss");
	   	 	 Date 								nowDate         			= dateFormat.parse(sToday);//현재시간
	   	 	 
	   	 	 // Check Window Time
			wipService.executeCheckingWindowTimeNewTx(dto, lotMap, nowDate);
			
	   	 	// 보류 여부 체크
	  		if ("Y".equals(isHold)){	
	  			throw new BizException("LotIsHold", String.format("LotId = %s", lotId)); // 보류 상태의 Lot 입니다.
	  		}
	  		
	  		// 인수 가능 상태 확인
	  		if (!wipService.validateProcessState(lotMap, TransitType.TrackInLot)){
	  			throw new BizException("LotStateIsNotAvailableTrackIn", String.format("LotId = %s", lotId)); // Lot이 인수 가능 상태가 아닙니다. {0}
	  		}
	  		
	  		// 사용자별 작업장 통제
	 		if(!wipService.isAreaInAuthority(areaId, true)) {			
	 			throw new BizException("HasNoAuthorityOfArea", String.format("LotId=%s, AreaId=%s", lotId, areaId));	// 해당 작업장에 대한 권한이 없습니다. {0}
	 		}
	   	 	 
			// Insert Lot Worker
	 		// 2021-08-12 전태선 과장 요청,  다중분할 작업시작에서 작업자 넣지 않도록 처리
//			this.SaveLotWorker(lotMap, userId);
			
	 		// 설비 이력 저장 
	 		this.saveLotEquipment(lotMap, equipmentList, nowDate);
	 		
	 		String equipmentId = equipmentList.split(",")[0];
	        
	 		lotMap = wipService.trackInLot(dto, lotMap, equipmentId, userId, nowDate);

	 		this.UpdateLotTrackIn(lotMap, userId, nowDate);
	 		
	 		lotQty =StringUtil.Object2Double(lotMap.get("QTY"));
	 		
	 		// Defect 정보가 있을 경우 Split 실행
			for(int j = 0; j< dsDefectLot.size(); j++)
			{
				Map<String, Object> 	defectParam 	= dsDefectLot.get(j);				
				String 					parentLotid 	= (String)defectParam.get("LOTID");
				Double 					splitQty 		= StringUtil.Object2Double(defectParam.get("DEFECTQTY"));
				Double 					Panelperqty 	= StringUtil.Object2Double(lotMap.get("PANELPERQTY"));
				
				if(!lotId.equals(parentLotid)) continue;
				
				// Split 공통함수 호출로 Split
				Map<String, Object> splitLot = wipService.splitDefectLot(dto,lotId, splitQty, splitQty,  "Y", TransitType.TrackInLot);
				
				splitLot.put("LOTCREATEDTYPE", 	"Defect");
				splitLot.put("PROCESSSTATE", 		LotProcessState.Wait); //2021-07-16 작업시작시 불량은 DEFECT LOT의 상태를 인수(Wait)으로 표시되도록, 전태선 과장 요청
				splitLot.put("CREATEDQTY", 		splitQty);
				splitLot.put("UNIT", 					"PCS");
				splitLot.put("QTY", 					0.0);
				splitLot.put("PCSQTY", 				0.0);
				splitLot.put("PANELQTY", 			0.0);
				splitLot.put("PANELPERQTY", 		Panelperqty);		//20210526 AS-IS에는 없음, Defect Lot의 PanelPerQty 는 모Lot의 PanelPerQty로 Update
				splitLot.put("DEFECTQTY", 			splitQty);
				splitLot.put("ISDEFECTED", 			"Y");
				splitLot.put("LASTTXNTIME", 		nowDate);
				splitLot.put("LASTTXNUSER", 		userId);
				splitLot.put("WEEK", 				lotMap.get("WEEK"));
				splitLot.put("LOTID", 				splitLot.get("LOTID"));
				
				generalDao.addUpdate(NAMESAPCE + ".updateSplitLot", splitLot);			
				
				lotQty = lotQty - splitQty;
				
				
				
				// 모 Lot 수량정보 Update				
				lotMap.put("PCSQTY", lotQty);
				if(Panelperqty != null && Panelperqty > 0.0)
				{
					lotMap.put("PANELQTY", Math.ceil((lotQty) / Panelperqty));					
				}
				lotMap.put("PCSQTY", lotQty);
				lotMap.put("LASTTXNTIME", 		nowDate);
				lotMap.put("LASTTXNUSER", 		userId);
				
				generalDao.addUpdate(NAMESAPCE + ".updateParentLot", lotMap);
				
		    	//최종 lotData History Insert
		    	generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lotMap);

		    	// Lot Locking 처리
				wipService.saveLotLocking(dto, (String)splitLot.get("LOTID"), "QCLockInSelfFinalExamination", "LockFinalExamNonconfirm", "", userId, (String)SessionUtil.getSessionValue(ContextConstant.SESSION_LANGUAGETYPE));
				
				// 2. Split된 LOT에 불량 데이터 저장
				// -----------------------------------
				// Lot Defect 처리
				// -----------------------------------
				DataSetMap defect = this.setDefectList(dsDefecList, lotId, j);
				
				wipService.saveLotDefect(dto, splitLot, (DataSetMap)defect, TransitType.TrackInLot);
				
				// Defect Lot 작업실적 입력
				wipService.saveDefectLotWorkResult(dto, lotMap, splitLot, splitQty);
			}
	 				
			// Insert Lot Work Result
			wipService.saveLotWorkResult(dto, lotMap, TransitType.TrackInLot, userId, nowDate, "", "");
	   	 }	 
    }

    // Update Lot Track In Time, Track In User
    private void UpdateLotTrackIn(Map<String, Object> lotMap, String userId, Date time) throws Exception
   	{
   		Map<String, Object> param = new HashMap<>();
   		//HashMap Copy
       	for (Map.Entry<String, Object> entry : lotMap.entrySet()) {
       		param.put(entry.getKey(), entry.getValue());
       	}
   		param.put("TRACKINTIME", time);
   		param.put("TRACKINUSER", userId);
   		param.put("LASTTXNID", this.getClass().getSimpleName());		
   		generalDao.addUpdate(NAMESAPCE + ".updateLotTrackIn", param);
   	}
       
    
    private void saveLotEquipment(Map<String, Object> lotMap, String equipmentList, Date time) throws Exception
	{
		Map<String, Object> param = new HashMap<>();
		//HashMap Copy
    	for (Map.Entry<String, Object> entry : lotMap.entrySet()) {
    		param.put(entry.getKey(), entry.getValue());
    	}
		param.put("EQUIPMENTID", equipmentList);
		
		List<Map<String, Object>> result = generalDao.addSelect(NAMESAPCEWORKPROCESS + ".getNotExistsLotEquipment", param); 
				
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
						
			List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCE7000 + ".selectLotEquipmentData", lotEqParam);
			Map<String, Object> equipParam = new HashMap<>();
			
			if (list.size() > 0)
			{
				equipParam = list.get(0);
				equipParam.put("PROCESSSTATE", 			lotMap.get("PROCESSSTATE").toString());
				equipParam.put("TRACKINTIME", 			time);
				
				
				generalDao.addUpdate(NAMESAPCE7000 + ".updateLotEquipmentData", equipParam);				
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
				
				
				generalDao.addUpdate(NAMESAPCE7000 + ".insertLotEquipmentData", equipParam);
			}
			
			Map<String, Object> eqParam = new HashMap<>();
			eqParam.put("EQUIPMENTID", equipmentId);
			Map<String, Object> eqData = generalDao.addSelectOneMap(NAMESAPCE7000 + ".selectEquipmentData", eqParam);
			
			if (eqData == null)
			{
				throw new BizException("InValidData001", String.format("EquipmentId = %s", equipmentId));
			}
			
			eqData.put("STATE", "Run");
			eqData.put("LASTTXNID", this.getClass().getSimpleName());
			
			generalDao.addUpdate(NAMESAPCE7000 + ".updateEquipmentData", eqData);
		}
	}
    
	/**************************************************************************************
	* Lot별로 DEFECTCODE 재조합
	***************************************************************************************/
	private DataSetMap setDefectList(DataSetMap defect, String lotId, Integer z) throws Exception
	{
		DataSetMap defectList = new DataSetMap();
		
		for(int i = 0; i < defect.size(); i++)
		{
			Map<String, Object> pmap = defect.get(i);
			
			if(!lotId.equals(pmap.get("LOTID"))) continue;
			
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("LOTID", lotId);
			map.put("DEFECTCODE", pmap.get("DEFECTCODE"));
			map.put("QCSEGMENTID", pmap.get("QCSEGMENTID"));
			map.put("PNLQTY", pmap.get("PNLQTY"));
			map.put("QTY", pmap.get("QTY"));
			map.put("REASONCONSUMABLEDEFID", pmap.get("REASONCONSUMABLEDEFID"));
			map.put("REASONCONSUMABLELOTID", pmap.get("REASONCONSUMABLELOTID"));
			map.put("REASONSEGMENTID", pmap.get("REASONPROCESSSEGMENTID"));
			map.put("REASONAREAID", pmap.get("REASONAREAID"));
			//2019-12-10 강유라 DEFECTCODENAME, QCSEGMENTNAME, DECISIONDEGREE 추가
			map.put("DEFECTCODENAME", pmap.get("DEFECTCODENAME"));
			map.put("QCSEGMENTNAME", pmap.get("QCSEGMENTNAME"));
			map.put("DECISIONDEGREE", pmap.get("DECISIONDEGREE"));
			map.put("DEFECTRATE", pmap.get("DEFECTRATE"));
			
			map.put("REASONCODEID", pmap.get("REASONCODEID"));
			map.put("FILEPATH", pmap.get("FILEPATH"));
			map.put("FILEEXT", pmap.get("FILEEXT"));
			map.put("IMAGERESOURCEID", pmap.get("IMAGERESOURCEID"));
			
			map.put("REASONCONSUMABLEDEFVERSION", pmap.get("REASONCONSUMABLEDEFVERSION"));
			defectList.add(map);
		}
		
		return defectList;
	}

	/**************************************************************************************
	* 작업자 저장
	***************************************************************************************/
	private void SaveLotWorker(Map<String, Object> ld, String userList) throws Exception
	{
		String lotId = ld.get("LOTID").toString();
		
		for (String userId : userList.split(","))
		{
			String txnHistKey = TxnHistKey.getTxnHistKey();
			Map<String, Object> propertyMap = new HashMap<>();
			Map<String, Object> lwd = new HashMap<>();
			
			propertyMap.put("TXNHISTKEY", txnHistKey);
			propertyMap.put("LOTID", lotId);
			
			lwd 	= generalDao.addSelectOneMap(NAMESAPCE6900 + ".selectLotData", propertyMap);
			
			if (lwd != null)
			{
				throw new BizException("InValidData002", String.format("TxnHistKey = %s, LotId = %s", txnHistKey, lotId));
			}
			
			Map<String, Object> processDefInfo = wipService.getProcessDefinitionInfo(ld);
			
			String processDefId = processDefInfo.get("PROCESSDEFID").toString();
			String processDefVersion = processDefInfo.get("PROCESSDEFVERSION").toString();
			
			Map<String, Object> processPathInfo = wipService.processPathInfo(ld, processDefId, processDefVersion);
			
			String processPathId = processPathInfo.get("PROCESSPATHID").toString();
			
			lwd = new HashMap<>();
			lwd.put("TXNHISTKEY", 					txnHistKey);
			lwd.put("LOTID", 							lotId);
			lwd.put("ENTERPRISEID", 					ld.get("ENTERPRISEID").toString());
			lwd.put("PLANTID", 							ld.get("PLANTID").toString());
			lwd.put("AREAID", 							ld.get("AREAID").toString());
			lwd.put("PRODUCTDEFID", 					ld.get("PRODUCTDEFID").toString());
			lwd.put("PRODUCTDEFVERSION", 		ld.get("PRODUCTDEFVERSION").toString());
			lwd.put("PROCESSDEFID", 					ld.get("PROCESSDEFID").toString());
			lwd.put("PROCESSDEFVERSION", 			ld.get("PROCESSDEFVERSION").toString());
			lwd.put("PROCESSPATHID", 				processPathId);
			lwd.put("USERSEQUENCE", 				ld.get("USERSEQUENCE").toString());
			lwd.put("PROCESSSEGMENTID", 			ld.get("PROCESSSEGMENTID").toString());
			lwd.put("PROCESSSEGMENTVERSION", 	ld.get("PROCESSSEGMENTVERSION").toString());
			lwd.put("WORKCOUNT", 					ld.get("WORKCOUNT").toString());
			
			Map<String, Object> userMap 			= new HashMap<>();
			userMap.put("USERID", userId);
			Map<String, Object> user 				= generalDao.addSelectOneMap(NAMESAPCE + ".selectUser", userMap);
			
			if (user == null){
				lwd.put("WORKERNAME", 					userId);	
			} else {
				lwd.put("USERID", 							userId);	
			}
			
			generalDao.addUpdate(NAMESAPCE + ".insertPcmLotworker", lwd);
		}
	}
}