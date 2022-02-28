package smh.pcm.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
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
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.*;

@Service
public class PCM09700ServiceImpl extends AbstractNbdfService implements PCM09700Service {

    public static final String NAMESPACE7300 = "smh.pcm.dao.PCM07300Dao";
    public static final String NAMESPACE = "smh.pcm.dao.PCM09700Dao";
    public static final String NAMESPACEWIP = "smh.pcm.dao.PCMWipDao";
    public static final String NAMESPACE6900 = "smh.pcm.dao.PCM06900Dao";
    public static final String NAMESPACE7200 = "smh.pcm.dao.PCM07200Dao";
    public static final String NAMESPACE1800 = "smh.pcm.dao.PCM01800Dao";
    public static final String NAMESPACE_RL = "smh.pcm.dao.PCMReworkLotDao";
    public static final String NAMESPACECOM 		= "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESPACEWORKPROCESS 	= "smh.pcm.dao.PCMWorkProcessDao";
    public static final String NAMESAPCECOMMON 		= "smh.pcm.dao.PCMLotCommonDao";
    
    @Autowired
    private PCMWipService  wipService;

    @Autowired
    private PCMLotCommonService commonService;
    
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn 			: selectWIPMultiStateList
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectWIPMultiStateList
    * @remark		: 상세설명
* @see smh.pcm.service.PCM09700Service#selectWIPMultiStateList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectWIPMultiStateList(UiMapDto dto) throws Exception{
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE7300 + ".selectWIPMultiStateList", param)); 
    }
    
    @Override
    public void GetEquipmentByArea(UiMapDto dto) throws Exception{
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE1800 + ".getEquipmentByArea1", param)); 
        
    }

    /**
    * @fn 			: selectCustomQuery
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectCustomQuery
    * @remark		: 상세설명
* @see smh.pcm.service.PCM09700Service#selectCustomQuery(com.nbdf.commons.ui.vo.UiMapDto)
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
        	putDataSetMap(dto, generalDao.addSelect(NAMESPACE7300 + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }        
    }
    
    /**
    * @fn 			: SaveMultiLotWorkEnd
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : SaveMultiLotWorkEnd
    * @remark		: 상세설명
* @see smh.pcm.service.PCM09700Service#SaveMultiLotWorkEnd(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveMultiLotWorkEnd(UiMapDto dto) throws Exception {
    	DataSetMap 						dsLotList				= getParametersDataSetMap(dto, "lotlist");
    	DataSetMap 						defectList				= getParametersDataSetMap(dto, "defectList");
    	DataSetMap 						defectLot				= getParametersDataSetMap(dto, "defectLot");
    	DataSetMap 						body				= getParametersDataSetMap(dto, "body");
    	String 							userId					= (String)SessionUtil.getSessionValue(ContextConstant.SESSION_USER_ID);
        String 							enterpriseId			= (String)SessionUtil.getSessionValue(ContextConstant.SESSION_ENTERPRISEID);
        String 							plantId				= (String)SessionUtil.getSessionValue(ContextConstant.SESSION_SITETYPE);
        String 							languageType		= (String)SessionUtil.getSessionValue(ContextConstant.SESSION_LANGUAGETYPE);

		Date now = new Date();
	   	 for (int i = 0, n = dsLotList.size(); i < n; i++) {
	         Map<String, Object> lotData = dsLotList.get(i);
	         String lotId 			= 				lotData.get("LOTID").toString();
	         
	         lotData.put("ENTERPRISEID", 		enterpriseId);
	         lotData.put("PLANTID", 			plantId);
	         lotData.put("LANGUAGETYPE", 	languageType);
	         
	         Map<String, Object> 			lotMap 				= generalDao.addSelectOneMap(NAMESPACE6900 + ".selectLotData", lotData);
	         String 							areaId					= (String)lotMap.get("AREAID");
	 		 String 							sToday   				= (String)lotMap.get("NOW");			//현재시각
	 		 String 							isHold 				= (String)lotMap.get("ISHOLD");		//보류여부
	 		 SimpleDateFormat 				dateFormat 			= new SimpleDateFormat("yyyyMMddHHmmss");
	   	 	 Date 								nowDate         			= dateFormat.parse(sToday);//현재시간
	   	 	 
	 		Map<String, Object> txnInfo = new HashMap<String, Object>();
			txnInfo.put("TXNUSER",userId);
			txnInfo.put("TXNTIME",nowDate);

			wipService.executeCheckingWindowTimeNewTx(dto, lotMap, nowDate);
	         
	   	 	// 보류 여부 체크
	  		if ("Y".equals(isHold)){	
	  			throw new BizException("LotIsHold", String.format("LotId = %s", lotId)); // 보류 상태의 Lot 입니다.
	  		}
	  		
	  		// 인수 가능 상태 확인
	  		if (!wipService.validateProcessState(lotMap, TransitType.TrackOutLot)){
	  			throw new BizException("LotStateIsNotAvailableReceive", String.format("LotId = %s", lotId)); // Lot이 인수 가능 상태가 아닙니다. {0}
	  		}
	  		
	  		// 사용자별 작업장 통제
	 		if(!wipService.isAreaInAuthority(areaId, true)) {			
	 			throw new BizException("HasNoAuthorityOfArea", String.format("LotId=%s, AreaId=%s", lotId, areaId));	// 해당 작업장에 대한 권한이 없습니다. {0}
	 		}
	   	 	 
			// Insert Lot Worker
			SaveLotWorker(lotMap, userId);

			double lotQty = Double.parseDouble(String.valueOf(lotMap.get("QTY")));
			
			String equipmentList = (String) body.get(0).get("EQUIPMENTLIST");
			
			// 설비 이력 저장 
			SaveLotEquipment(lotMap, equipmentList, nowDate, lotQty);
			
			String equipmentId = equipmentList.split(",")[0];
			
//			TransactionUtils.setTransactionId(txnInfo, "trackOut");
			
			lotData = wipService.trackOutLot(dto, lotMap, equipmentId, userId, nowDate);
			
			lotData = UpdateLotTrackOut(lotMap, userId, nowDate);
			
			// 1. Defect Lot Split
			//String defectLotId = "";
	
			// Defect 정보가 있을 경우 Split 실행
			for(int k = 0; k< defectLot.size(); k++)
			{
				Map<String, Object> drow = defectLot.get(k);
				
				String parentLotid = (String) drow.get("LOTID");
				
				if(!lotId.equals(parentLotid)) continue;
				
				Double splitQty = Double.parseDouble(String.valueOf( drow.get("DEFECTQTY")));
				
				// Split 공통함수 호출로 Split// UiMapDto dto, String lotId, double childQty, double splitQty, String isDefected, String transitType
				Map<String, Object> splitLot = wipService.splitDefectLot(dto, lotId, splitQty, splitQty, "Y", TransitType.TrackOutLot);
				
				splitLot.put("LOTCREATEDTYPE","Defect");
				//splitLot.put("Processstate",CommonConstant.LotProcessState.Run);
				splitLot.put("PROCESSSTATE",lotData.get("PROCESSSTATE"));
				splitLot.put("CREATEDQTY",splitQty);
				splitLot.put("UNIT","PCS");
				splitLot.put("QTY",0.0);
				splitLot.put("PCSQTY",0.0);
				splitLot.put("PANELQTY",0.0);
				splitLot.put("DEFECTQTY",splitQty);
				splitLot.put("ISDEFECTED","Y");
				splitLot.put("LASTTXNUSER",userId);
				splitLot.put("WEEK",lotData.get("WEEK"));
				splitLot.put("PANELPERQTY", 		lotData.get("PANELPERQTY"));		//20210526 AS-IS에는 없음, Defect Lot의 PanelPerQty 는 모Lot의 PanelPerQty로 Update
				
				generalDao.addUpdate(NAMESPACE_RL + ".updatePcmLot",splitLot);
				
				// 모 Lot 수량정보 Update
				// null이면 업데이트 안친다(wipservice.splitlot에서 넣어준값)
				lotData.put("DEFECTQTY",splitQty);
				lotData.put("PCSQTY",Double.parseDouble(String.valueOf(lotData.get("QTY"))) - splitQty);
				lotData.put("PANELQTY",Math.ceil((Double.parseDouble(String.valueOf(lotData.get("QTY"))) - splitQty) / Double.parseDouble(String.valueOf(lotData.get("PANELPERQTY")))));
				lotData.put("LASTTXNUSER",userId);
				generalDao.addUpdate(NAMESPACE_RL + ".updatePcmLot",lotData);
				
				// Lot Locking 처리
				wipService.saveLotLocking(dto, (String)splitLot.get("LOTID"), "QCLockInSelfFinalExamination", "LockFinalExamNonconfirm", "", userId, languageType);
				
				// 2. Split된 LOT에 불량 데이터 저장
				// -----------------------------------
				// Lot Defect 처리
				// -----------------------------------
				DataSetMap defect = setDefectList(defectList, lotId);
				
				//UiMapDto dto, Map<String, Object> lotInfo, DataSetMap defectList, String transitType
				wipService.saveLotDefect(dto, splitLot, defect, TransitType.TrackOutLot);
				
				// Defect Lot 작업실적 입력
				//UiMapDto dto,Map<String, Object> lotInfo, Map<String, Object> childLotInfo, double defectQty
				wipService.saveDefectLotWorkResult(dto, lotMap, splitLot, splitQty);
			}
			String toResourceId  = ""; 
			String toAreaId = "";
			// Insert Lot Work Result
			wipService.saveLotWorkResult(dto, lotData, TransitType.TrackOutLot, userId, nowDate, toResourceId , toAreaId);
		}
    } 

	// Lot Equipment Insert/Update Data
	@SuppressWarnings("static-access")
	private void SaveLotEquipment(Map<String, Object> ld, String equipmentList, Date time, double lotQty) throws Exception
	{
		String lotId = (String) ld.get("LOTID");
		
		Map<String, Object> param = new HashMap<>();
		param.put("LOTID", lotId);
		param.put("EQUIPMENTID", equipmentList);
		param.put("PROCESSSEGMENTID", ld.get("PROCESSSEGMENTID"));
		param.put("PROCESSSEGMENTVERSION", ld.get("PROCESSSEGMENTVERSION"));
		param.put("WORKCOUNT", ld.get("WORKCOUNT"));
		
		List<Map<String, Object>> result = generalDao.addSelect(NAMESPACEWORKPROCESS + ".getNotExistsLotEquipment", param); 
		
		
		for (Map<String, Object> map : result)
		{
			Map<String, Object> led = new HashMap<String, Object>(); 
			led.put("LOTID",map.get("LOTID"));
			led.put("TXNHISTKEY",map.get("TXNHISTKEY"));
			
			led = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmLotequipment", led);
			if (led == null)
			{
				throw new BizException("InValidData003", String.format("LotId = %s TxnHistKey = %s", map.get("LOTID").toString(), map.get("TXNHISTKEY").toString()));
			}
			
			generalDao.addDelete(NAMESPACE + ".deletePcmLotequipment", led);
		}
		
		
		for (String equipmentId : equipmentList.split(","))
		{
			Map<String, Object> led = new HashMap<String, Object>(); 	
			led.put("LOTID", lotId);
			led.put("EQUIPMENTID", equipmentId);
			led.put("PROCESSSEGMENTID", ld.get("PROCESSSEGMENTID"));
			led.put("PROCESSSEGMENTVERSION", ld.get("PROCESSSEGMENTVERSION"));
			led.put("WORKCOUNT", ld.get("WORKCOUNT"));
			
			List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectPcmLotequipmentList",led);
			if (list.size() > 0)
			{
				led = list.get(0);
				led.put("PROCESSSTATE",ld.get("PROCESSSTATE"));
				led.put("TRACKOUTTIME",time);
				//led.put("Lotqty",ld.get("Qty"));
				led.put("LOTQTY",lotQty);
				generalDao.addUpdate(NAMESPACE + ".updatePcmLotequipment",led);
			}
			else
			{
				String txnHistKey = TxnHistKey.getTxnHistKey();
				
				led = new HashMap<String, Object>(); 
				led.put("LOTID",lotId);
				led.put("TXNHISTKEY",txnHistKey);
				led.put("EQUIPMENTID",equipmentId);
				led.put("PROCESSSTATE",ld.get("PROCESSSTATE"));
				led.put("PROCESSSEGMENTID",ld.get("PROCESSSEGMENTID"));
				led.put("PROCESSSEGMENTVERSION",ld.get("PROCESSSEGMENTVERSION"));
				led.put("WORKCOUNT",ld.get("WORKCOUNT"));
				led.put("TRACKOUTTIME",time);
				led.put("WORKCOUNT",ld.get("WORKCOUNT"));
				//led.put("Lotqty(ld.get("Qty"));
				led.put("LOTQTY",lotQty);
//				generalDao.addUpdate(NAMESPACE + ".insertPcmLotequipment",led);
				generalDao.addUpdate(NAMESPACEWIP + ".insertPcmLotequipment",led);				
			}
			
			Map<String, Object> ed = new HashMap<String, Object>(); 
			ed.put("EQUIPMENTID",equipmentId);
			
			ed = generalDao.addSelectOneMap(NAMESPACE + ".selectBasEquipment", ed);
			
			if (ed == null)
			{
				throw new BizException("InValidData001", String.format("EquipmentId = %s", equipmentId));
			}
			
			
			ed.put("STATE","Idle");
			generalDao.addUpdate(NAMESPACE + ".updateBasEquipment",ed);
		}
	}
	
	// Save Lot Worker
	private void SaveLotWorker(Map<String, Object> ld, String userList) throws Exception
	{
		String lotId = (String) ld.get("LOTID");
		
		for (String userId : userList.split(","))
		{
			String txnHistKey = TxnHistKey.getTxnHistKey();
			
			Map<String, Object> lwd = new HashMap<String, Object>(); 
			lwd.put("TXNHISTKEY",txnHistKey);
			lwd.put("LOTID",lotId);
			
			lwd = generalDao.addSelectOneMap(NAMESPACE+".selectPcmLotworker", lwd);
			
			if (lwd != null)
			{
				throw new BizException("InValidData002", String.format("TxnHistKey = %s LotId = %s", txnHistKey, lotId));
			}
			
			Map<String, Object> processDefInfo = wipService.getProcessDefinitionInfo(ld);
			
			String processDefId = processDefInfo.get("PROCESSDEFID").toString();
			String processDefVersion = processDefInfo.get("PROCESSDEFVERSION").toString();
			
			String processPathId = commonService.GetProcessPathId(ld, processDefId, processDefVersion);
			
			lwd = new HashMap<String, Object>(); 
			lwd.put("TXNHISTKEY",txnHistKey);
			lwd.put("LOTID",lotId);
			lwd.put("ENTERPRISEID",ld.get("ENTERPRISEID"));
			lwd.put("PLANTID",ld.get("PLANTID"));
			lwd.put("AREAID",ld.get("AREAID"));
			lwd.put("PRODUCTDEFID",ld.get("PRODUCTDEFID"));
			lwd.put("PRODUCTDEFVERSION",ld.get("PRODUCTDEFVERSION"));
			lwd.put("PROCESSDEFID",ld.get("PROCESSDEFID"));
			lwd.put("PROCESSDEFVERSION",ld.get("PROCESSDEFVERSION"));
			lwd.put("PROCESSPATHID",processPathId);
			lwd.put("USERSEQUENCE",ld.get("USERSEQUENCE"));
			lwd.put("PROCESSSEGMENTID",ld.get("PROCESSSEGMENTID"));
			lwd.put("PROCESSSEGMENTVERSION",ld.get("PROCESSSEGMENTVERSION"));
			lwd.put("WORKCOUNT",ld.get("WORKCOUNT"));
			
			Map<String, Object> ud = new HashMap<String, Object>(); 
			ud.put("USER_ID",userId);
			ud = generalDao.addSelectOneMap(NAMESPACE+".selectCmdUsers", ud);
			if (ud == null)
				lwd.put("WORKERNAME",userId);
			else
				lwd.put("USERID",userId);
			
			generalDao.addInsert(NAMESPACE+".insertPcmLotworker", lwd);
		}
	}  
	
	// Update Lot Track In Time, Track In User
	private Map<String, Object> UpdateLotTrackOut(Map<String, Object> ld, String userId, Date time) throws Exception
	{
		ld.put("TRACKINTIME",time);
		ld.put("TRACKINUSER",userId);
		ld.put("LASTTXNID",this.getClass().getSimpleName());
		ld.put("PROCESSSTATE","WaitForSend");
		
		generalDao.addUpdate(NAMESPACE_RL + ".updatePcmLot",ld);
		
		return ld;
	}
	/**************************************************************************************
	* Lot별로 DEFECTCODE 재조합
	***************************************************************************************/
	private DataSetMap setDefectList(DataSetMap defect, String lotId) throws Exception
	{
		
		DataSetMap defectList = new DataSetMap();
		for(int i = 0; i < defect.size(); i++)
		{
			Map<String, Object> row = defect.get(i);
			
			if(!lotId.equals(row.get("LOTID"))) continue;

			Map<String, Object> map = new HashMap<String, Object>();
			
			map.put("LOTID", lotId);
			map.put("DEFECTCODE", row.get("DEFECTCODE"));
			map.put("QCSEGMENTID", row.get("QCSEGMENTID"));
			map.put("PNLQTY", row.get("PNLQTY"));
			map.put("QTY", row.get("QTY"));
			map.put("REASONCONSUMABLEDEFID", row.get("REASONCONSUMABLEDEFID"));
			map.put("REASONCONSUMABLELOTID", row.get("REASONCONSUMABLELOTID"));
			map.put("REASONSEGMENTID", row.get("REASONPROCESSSEGMENTID"));
			map.put("REASONAREAID", row.get("REASONAREAID"));
			
			defectList.add(map);
		}
		
		return defectList;
	}
	
}