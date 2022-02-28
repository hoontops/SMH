package smh.pcm.service;

import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.com.StringUtils;
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
import smh.pcm.service.PCMConstant.TransitionId;
import smh.qam.service.QAMCommonService;

@Service
public class PCM07100ServiceImpl extends AbstractNbdfService implements PCM07100Service {
	
	public static final String NAMESAPCE1500 				= "smh.pcm.dao.PCM01500Dao";
	public static final String NAMESAPCE1800 				= "smh.pcm.dao.PCM01800Dao";
	public static final String NAMESAPCE6900 				= "smh.pcm.dao.PCM06900Dao";
	public static final String NAMESAPCE7000 				= "smh.pcm.dao.PCM07000Dao";
    public static final String NAMESAPCE 						= "smh.pcm.dao.PCM07100Dao";
    public static final String NAMESAPCEWIP 				= "smh.pcm.dao.PCMWipDao";
    public static final String NAMESAPCEWORKPROCESS 	= "smh.pcm.dao.PCMWorkProcessDao";
    public static final String NAMESAPCECOMMON 		= "smh.pcm.dao.PCMLotCommonDao";
    
    @Autowired
    private PCMWipService  wipService;
    
    @Autowired
    private QAMCommonService  qcmService;
    
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn 			: selectLotInfo
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectLotInfo
    * @remark		: 상세설명
* @see smh.pcm.service.PCM07100Service#selectLotInfo(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectOtherInfo(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE6900 + ".selectCommentByProcess", param),				"output1");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE6900 + ".selectProcessSpecByProcess", param),				"output2");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE7000 + ".selectLotListForFinalInspection", param),			"output3");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE1800 + ".getEquipmentByArea", param),						"output4");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE1500 + ".SelectNcrStandardOfSelfInspection", param),		"output5");
    }

    @Override
    public void selectLotInfoByProcess(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);        
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE6900 + ".selectLotInfoByProcess", param));        
    }
    
    /**
    * @fn 			: selectCustomQuery
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectCustomQuery
    * @remark		: 상세설명
* @see smh.pcm.service.PCM07100Service#selectCustomQuery(com.nbdf.commons.ui.vo.UiMapDto)
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
    * @fn 			: saveFinalInspectionComplete
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : saveFinalInspectionAccept
    * @remark		: 상세설명
* @see smh.pcm.service.PCM07100Service#saveFinalInspectionComplete(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void saveFinalInspectionComplete(UiMapDto dto) throws Exception {
    	int result = 0;
    	
    	DataSetMap 						dsLot 					= getParametersDataSetMap(dto, "INPUT1");
    	DataSetMap 						dsLotList 				= getParametersDataSetMap(dto, "INPUT2");
    	DataSetMap 						dsEquipmentList		= getParametersDataSetMap(dto, "INPUT3");
    	DataSetMap 						dsDefecList			= getParametersDataSetMap(dto, "INPUT4");
    	DataSetMap 						dsDefectLot			= getParametersDataSetMap(dto, "INPUT5");
    	DataSetMap 						dsTransit				= getParametersDataSetMap(dto, "INPUT6");
    	
		Map<String, Object> 			param 				= dsLot.get(0);
		Map<String, Object> 			transitParam 			= dsTransit.get(0);    
    	String 							strUserId				= (String)param.get("USERID");
		String 							comment 			= StringUtil.Object2String(param.get("COMMENT"));
		String 							strTransitArea 		= (String)transitParam.get("TRANSITAREA");
		String			 					strResource 			= (String)transitParam.get("RESOURCEID");
		String								equipmentList		= "";
		Double 							lotQty 				= 0.0;
		
		List<Map<String, Object>>	defectList 			= new ArrayList<Map<String, Object>>();
		
		for (int i = 0, n = dsEquipmentList.size(); i < n; i++) {
			Map<String, Object> eqData = dsEquipmentList.get(i);
			equipmentList += "," + eqData.get("EQUIPMENTID");
		}
		
		equipmentList = equipmentList.substring(1);
		
	   	 for (int i = 0, n = dsLotList.size(); i < n; i++) {
	         Map<String, Object> lotData = dsLotList.get(i);
	         String lotId 			= lotData.get("LOTID").toString();
	         String inspectUser = lotData.get("INSPECTIONUSER").toString();
	         lotData.put("ENTERPRISEID", (String)SessionUtil.getSessionValue(ContextConstant.SESSION_ENTERPRISEID));
	         lotData.put("PLANTID", (String)SessionUtil.getSessionValue(ContextConstant.SESSION_SITETYPE));
	         lotData.put("LANGUAGETYPE", (String)SessionUtil.getSessionValue(ContextConstant.SESSION_LANGUAGETYPE));
	         
	         
	         Map<String, Object> 			lotMap 				= generalDao.addSelectOneMap(NAMESAPCE6900 + ".selectLotData", lotData);
	         String 							areaId					= (String)lotMap.get("AREAID");
	 		 String 							sToday   				= (String)lotMap.get("NOW");			//현재시각
	 		 SimpleDateFormat 				dateFormat 			= new SimpleDateFormat("yyyyMMddHHmmss");
	   	 	 Date 								now         			= dateFormat.parse(sToday);//현재시간
	   	 	Map<String, Object> 			txnInfo = new HashMap<>();
	   	 	 
	   	 	// 보류 여부 체크
	 		String isHold = (String)lotMap.get("ISHOLD");
	 		
	 		if ("Y".equals(isHold))
	 		{
	 			// 보류 상태의 Lot 입니다.
	 			throw new BizException("LotIsHold", String.format("LotId = %s", lotMap.get("LOTID")));
	 		}
	 		
	 		// 작업 완료 가능 상태인지 체크
	 		if (!wipService.validateProcessState(lotMap, TransitType.TrackOutLot))
	 		{
	 			// Lot이 작업 완료 가능 상태가 아닙니다. {0}
	 			throw new BizException("LotStateIsNotAvailableTrackOut", String.format("LotId = %s", lotMap.get("LOTID")));
	 		}
	 		
	 		// 작업자 선택 여부 체크
	 		if (strUserId.isEmpty())
	 		{
	 			// 작업자가 선택되지 않았습니다.
	 			throw new BizException("NoSelectWorker");
	 		}
	   	 	 
	   	 	 
	 		// 사용자별 작업장 통제
	 		if(!wipService.isAreaInAuthority(areaId, true)) {			
	 			throw new BizException("HasNoAuthorityOfArea", String.format("LotId=%s, AreaId=%s", lotMap.get("LOTID"), areaId));	// 해당 작업장에 대한 권한이 없습니다. {0}
	 		}
	 		
	 		
	 		lotQty =StringUtil.Object2Double(lotMap.get("QTY"));
			//2019-12-10 강유라 불량 처리 전의 lot수량을 검사수량으로 사용
	 		Double inspectQty = StringUtil.Object2Double(lotMap.get("QTY"));
	 		txnInfo.put("TXNUSER", strUserId);
	 		txnInfo.put("TXNTIME", now);
	 		
			// 검사원 정보 수정
			int inspDegree = getInspectionResultInsertData(lotId, lotMap, inspectUser, txnInfo, now);
	 		
			//강유라 12-12 인계여부 확인 위해 Map에 LotId, actionType 담아 체크
			Map<String,String> checkMap = new HashMap<String, String>();
			
			// Defect 정보가 있을 경우 Split 실행
			for(int j = 0; j< dsDefectLot.size(); j++)
			{
				Map<String, Object> defectParam = dsDefectLot.get(j);
				
				String parentLotid = (String)defectParam.get("LOTID");
				
				if(!lotId.equals(parentLotid)) continue;
				
				Double splitQty = StringUtil.Object2Double(defectParam.get("DEFECTQTY"));

				Double Panelperqty = StringUtil.Object2Double(lotMap.get("PANELPERQTY"));
				
				// Split 공통함수 호출로 Split
				Map<String, Object> splitLot = wipService.splitDefectLot(dto,lotId, splitQty, splitQty,  "Y", TransitType.TrackOutLot);
				
				splitLot.put("LOTCREATEDTYPE", 	"Defect");
				splitLot.put("PROCESSSTATE", 		LotProcessState.WaitForSend);
				splitLot.put("CREATEDQTY", 		splitQty);
				splitLot.put("UNIT", 					"PCS");
				splitLot.put("QTY", 					0.0);
				splitLot.put("PCSQTY", 				0.0);
				splitLot.put("PANELQTY", 			0.0);
				splitLot.put("PANELPERQTY", 		Panelperqty);		//20210526 AS-IS에는 없음, Defect Lot의 PanelPerQty 는 모Lot의 PanelPerQty로 Update
				splitLot.put("DEFECTQTY", 			splitQty);
				splitLot.put("ISDEFECTED", 			"Y");
				splitLot.put("LASTTXNTIME", 		now);
				splitLot.put("LASTTXNUSER", 		strUserId);
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
				lotMap.put("LASTTXNTIME", 		now);
				lotMap.put("LASTTXNUSER", 		strUserId);
				
				generalDao.addUpdate(NAMESAPCE + ".updateParentLot", lotMap);
				
		    	//최종 lotData History Insert
		    	generalDao.addInsert(NAMESAPCEWIP + ".insertPcmLothistory", lotMap);

		    	// Lot Locking 처리
				wipService.saveLotLocking(dto, (String)splitLot.get("LOTID"), "QCLockInSelfFinalExamination", "LockFinalExamNonconfirm", "", strUserId, (String)SessionUtil.getSessionValue(ContextConstant.SESSION_LANGUAGETYPE));
				
				// 2. Split된 LOT에 불량 데이터 저장
				// -----------------------------------
				// Lot Defect 처리
				// -----------------------------------
				DataSetMap defect = this.setDefectList(dsDefecList, lotId, j);
				
				wipService.saveLotDefect(dto, splitLot, (DataSetMap)defect, TransitType.TrackOutLot);
				
				// Defect Lot 작업실적 입력
				wipService.saveDefectLotWorkResult(dto, lotMap, splitLot, splitQty);

				// 검사 Defect 정보 추가
				//2019-12-10 강유라 getInspectionDefectInsertData에  responseDt파라미터 추가
				defectList = this.getInspectionDefectInsertData(lotId, lotMap, inspectQty, defect, inspDegree, checkMap,txnInfo, now, defectList);
				
			}
	 		
			lotData 	= generalDao.addSelectOneMap(NAMESAPCE6900 + ".selectLotData", lotData);
			
			// Track-Out 처리
			if(StringUtil.Object2Double(lotData.get("QTY")) > 0)
			{	
				
				// 설비 이력 저장 
				this.saveLotEquipment(lotData, equipmentList, now, lotQty);
				
				String equipmentId = equipmentList.split(",")[0];
				
				lotData.put("TRANSACTIONID", this.getClass().getSimpleName());				
				
				// Check Window Time
				wipService.executeCheckingWindowTimeNewTx(dto, lotData, now);
			
				wipService.trackOutLot(dto, lotData, equipmentId, strUserId, now);
				
				lotData.put("TRACKINUSER", 	strUserId);
				lotData.put("TRACKINTIME",	now);
				generalDao.addUpdate(NAMESAPCE + ".updateTrackinLot", lotData);
			
				// 작업자 이력 
				SaveLotWorker(lotData, inspectUser);
				
				// 작업실적 입력
				wipService.saveLotWorkResult(dto, lotData, TransitType.TrackOutLot, strUserId, now, "", "");
				
				// Insert Lot Comment
				if (!comment.isEmpty())
					wipService.insertLotComment(dto, lotData, comment, strUserId, TransitionId.TrackOut);
				
				
				// 2019-12-12 강유라 actionType 체크 하여 locking 걸리지 않은 lot만 인계처리
				// Map에 lotId 값 없는경우
				if(!checkMap.containsKey(lotId))
				{
					// ProcessState Step Type 체크하여 작업완료에서 완성되는 경우 Dispatch 실행
					Map<String, Object> segmentParam = new HashMap<>();
					Map<String, Object> segmentData = new HashMap<>();
					segmentParam.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
					segmentParam.put("PROCESSSEGMENTVERSION", lotData.get("PROCESSSEGMENTVERSION"));
					
					segmentData 	= generalDao.addSelectOneMap(NAMESAPCE + ".selectProcesssegment", segmentParam);
					
					String stepType = wipService.getStepTypeByLot(lotData);
					List<String> stepList = Arrays.asList(stepType.split(","));
					
					if(segmentData != null && !stepList.contains("WaitForSend"))
					{
						if("".equals(strTransitArea))
						{
							// Lot 상태를 확인하여 주세요.
							throw new BizException("InValidData001");
						}
						lotData = wipService.dispatchLot(dto,lotData, strTransitArea, strResource);
						
						wipService.saveLotWorkResult(dto, lotData, TransitType.SendLot, strUserId, now, strResource, strTransitArea);
						
						lotData = this.UpdateLotSend(lotData, strUserId, now);
					}
				}
			}
	   	}
	   	 
	   	
	   	putDataSetMap(dto, defectList, "output");        
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
    private void saveLotEquipment(Map<String, Object> lotMap, String equipmentList, Date time, double lotQty) throws Exception
	{
		Map<String, Object> param = new HashMap<>();
		//HashMap Copy
    	for (Map.Entry<String, Object> entry : lotMap.entrySet()) {
    		param.put(entry.getKey(), entry.getValue());
    	}
		
		for (String equipmentId : equipmentList.split(","))
		{
			Map<String, Object> lotEqParam = new HashMap<>();
			lotEqParam.put("LOTID",							lotMap.get("LOTID").toString());
			lotEqParam.put("EQUIPMENTID", 					equipmentId);
			lotEqParam.put("PROCESSSEGMENTID", 			lotMap.get("PROCESSSEGMENTID").toString());
			lotEqParam.put("PROCESSSEGMENTVERSION", lotMap.get("PROCESSSEGMENTVERSION").toString());
			lotEqParam.put("WORKCOUNT", 					lotMap.get("WORKCOUNT").toString());
						
			List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCECOMMON + ".selectLotEquipmentDataFinal", lotEqParam);
			Map<String, Object> equipParam = new HashMap<>();
			
			if (list.size() > 0)
			{
				equipParam = list.get(0);
				
				if(equipParam.get("TRACKOUTTIME")==null){
					equipParam.put("TRACKOUTTIME", 			time);	
				}
				equipParam.put("PROCESSSTATE", 			lotMap.get("PROCESSSTATE"));
				equipParam.put("LOTQTY",			 				lotQty);
				equipParam.put("TXNID", 						this.getClass().getSimpleName());
				
				generalDao.addUpdate(NAMESAPCE + ".updateLotEquipmentData", equipParam);				
			} else {
				String txnHistKey = TxnHistKey.getTxnHistKey();
				equipParam = new HashMap<>();
				equipParam.put("LOTID", 							lotMap.get("LOTID"));
				equipParam.put("TXNHISTKEY", 					txnHistKey);
				equipParam.put("EQUIPMENTID", 				equipmentId);
				equipParam.put("PROCESSSTATE", 				lotMap.get("PROCESSSTATE"));
				equipParam.put("PROCESSSEGMENTID", 		lotMap.get("PROCESSSEGMENTID"));
				equipParam.put("PROCESSSEGMENTVERSION",	lotMap.get("PROCESSSEGMENTVERSION"));
				equipParam.put("WORKCOUNT", 					lotMap.get("WORKCOUNT"));
				equipParam.put("TRACKINTIME", 				time);
				equipParam.put("TRACKOUTTIME", 				time);
				equipParam.put("LOTQTY",			 				lotQty);
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
			
			eqData.put("STATE", PCMConstant.EquipmentState.Idle);
			eqData.put("LASTTXNID", this.getClass().getSimpleName());
			
			generalDao.addUpdate(NAMESAPCE + ".updateEquipmentData", eqData);
		}
	}
    
    /**************************************************************************************
	* 검사원 정보 입력
	***************************************************************************************/
	private int getInspectionResultInsertData(String lotId, Map<String, Object> lotMap, String strInspectUser, Map<String, Object> txnInfo, Date now) throws Exception
	{
		// 검사 차수 조회
		HashMap<String, Object> degreeMap = new HashMap<>();
		degreeMap.put("RESOURCETYPE", 			"FinishInspection");
		degreeMap.put("INSPECTIONDEFID", 		"FinishInspection");
		degreeMap.put("RESOURCEID", 			lotId);
		degreeMap.put("ENTERPRISEID", 			lotMap.get("ENTERPRISEID").toString());
		degreeMap.put("PLANTID", 					lotMap.get("PLANTID").toString());
		degreeMap.put("PROCESSDEFID", 			lotMap.get("PROCESSDEFID").toString());
		degreeMap.put("PROCESSDEFVERSION", 	lotMap.get("PROCESSDEFVERSION").toString());
		degreeMap.put("PROCESSSEGMENTID", 	lotMap.get("PROCESSSEGMENTID").toString());
		degreeMap.put("WORKCOUNT", 				lotMap.get("WORKCOUNT").toString());
		
		List<Map<String, Object>> degreeList = generalDao.addSelect(NAMESAPCE + ".GetInspectionDegreeInfo", degreeMap);
		String txnHistKey = TxnHistKey.getTxnHistKey();
		int degree = 1;
		if(degreeList != null && !degreeList.isEmpty() && degreeList.size() > 0)
		{
			degree = Integer.parseInt(degreeList.get(0).get("INSPDEGREE").toString());
		}
		//2021-08-02 재작업 관련 로직 추가
		BigDecimal bd = (BigDecimal)lotMap.get("WORKCOUNT");
		degree = degree + bd.intValue();
		
		HashMap<String, Object> propertyMap = new HashMap<>();
		propertyMap.put("TXNHISTKEY", 					txnHistKey);
		propertyMap.put("RESOURCETYPE", 				"FinishInspection");
		propertyMap.put("INSPECTIONDEFID", 			"FinishInspection");
		propertyMap.put("RESOURCEID", 					lotId);
		propertyMap.put("ENTERPRISEID", 					lotMap.get("ENTERPRISEID"));
		propertyMap.put("PLANTID", 						lotMap.get("PLANTID"));		
		propertyMap.put("PROCESSDEFID", 				lotMap.get("PROCESSDEFID"));
		propertyMap.put("PROCESSDEFVERSION", 		lotMap.get("PROCESSDEFVERSION"));
		propertyMap.put("PROCESSSEGMENTID", 			lotMap.get("PROCESSSEGMENTID"));		
		propertyMap.put("INSPDEGREE", 						String.valueOf(degree));
		
		List<Map<String, Object>> inspList = generalDao.addSelect(NAMESAPCE + ".GetInspectionResultInfo", propertyMap);
		
		HashMap<String, Object> inspMap = new HashMap<>();
		
		if(inspList != null && !inspList.isEmpty() && inspList.size() > 0){
			Map<String, Object> inspExMap = inspList.get(0);
			inspMap.put("TXNHISTKEY", 					inspExMap.get("TXNHISTKEY"));
			inspMap.put("RESOURCETYPE", 				"FinishInspection");
			inspMap.put("RESOURCEID", 					lotId);
			inspMap.put("PROCESSRELNO", 				lotMap.get("PROCESSSEGMENTID"));
			
			Map<String, Object> 	inspResult 			= generalDao.addSelectOneMap(NAMESAPCE + ".selectInspResultData", inspMap);
			
			inspResult.put("INSPECTIONDATE", 			now);
			inspResult.put("AREAID", 						lotMap.get("AREAID").toString());
//			inspResult.put("TXNID", 						txnInfo.get("TXNID").toString());
			inspResult.put("TXNUSER", 					txnInfo.get("TXNUSER").toString());
			inspResult.put("TXNTIME", 					txnInfo.get("TXNTIME"));
			
			//검사결과
			generalDao.addUpdate(NAMESAPCE + ".updateInspectionResult", inspResult);
		} else {
			inspMap.put("TXNHISTKEY", 					txnHistKey);
			inspMap.put("RESOURCETYPE", 				"FinishInspection");
			inspMap.put("INSPECTIONDEFID", 			"FinishInspection");
			inspMap.put("RESOURCEID", 					lotId);
			inspMap.put("PROCESSRELNO", 				lotMap.get("PROCESSSEGMENTID"));
			inspMap.put("INSPECTIONDATE", 			now);
			inspMap.put("ENTERPRISEID", 				lotMap.get("ENTERPRISEID"));
			inspMap.put("PLANTID", 						lotMap.get("PLANTID"));		
			inspMap.put("PRODUCTDEFID", 				lotMap.get("PRODUCTDEFID"));
			inspMap.put("PRODUCTDEFVERSION", 		lotMap.get("PRODUCTDEFVERSION"));
			inspMap.put("PROCESSDEFID", 				lotMap.get("PROCESSDEFID"));
			inspMap.put("PROCESSDEFVERSION", 		lotMap.get("PROCESSDEFVERSION"));
			inspMap.put("PROCESSSEGMENTID", 			lotMap.get("PROCESSSEGMENTID"));
			inspMap.put("PROCESSSEGMENTVERSION",	lotMap.get("PROCESSSEGMENTVERSION"));
			inspMap.put("DEGREE", 						String.valueOf(degree));
			inspMap.put("WORKCOUNT", 					lotMap.get("WORKCOUNT"));
			inspMap.put("INSPECTIONQTY", 				lotMap.get("QTY"));
			inspMap.put("AREAID", 							lotMap.get("AREAID"));
			//검사결과
			generalDao.addUpdate(NAMESAPCE + ".insertInspectionResult", inspMap);
		}
		
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
		return degree;
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
	* 검사 Defect 데이터 저장
	* 수정 이력 : 2019-12-10 강유라 IDataTable responseDt, Double lotQty 파라미터 추가, IDataTable 반환
	* 						  NCR 기준 적용 추가
	* 		   2019-12-12 강유라 Map<String,String> checkMap 파라미터 추가
	 * @throws Throwable 
	***************************************************************************************/
	private List<Map<String, Object>> getInspectionDefectInsertData(String lotId, Map<String, Object> lotData, Double lotQty, DataSetMap list, int inspDegree, Map<String,String> checkMap, Map<String, Object> txnInfo, Date now, List<Map<String, Object>> defectList) throws Exception
	{
		// 검사 정보
		HashMap<String, Object> propertyMap = new HashMap<>();
		propertyMap.put("RESOURCETYPE", "FinishInspection");
		propertyMap.put("RESOURCEID", lotId);
		propertyMap.put("INSPECTIONDEFID", "FinishInspection");
		propertyMap.put("ENTERPRISEID", lotData.get("ENTERPRISEID"));
		propertyMap.put("PLANTID", lotData.get("PLANTID"));
		propertyMap.put("PRODUCTDEFID", lotData.get("PRODUCTDEFID"));
		propertyMap.put("PRODUCTDEFVERSION", lotData.get("PRODUCTDEFVERSION"));
		propertyMap.put("PROCESSDEFID", lotData.get("PROCESSDEFID"));
		propertyMap.put("PROCESSDEFVERSION", lotData.get("PROCESSDEFVERSION"));
		propertyMap.put("PROCESSSEGMENTID", lotData.get("PROCESSSEGMENTID"));
		propertyMap.put("INSPDEGREE", inspDegree);
		propertyMap.put("WORKCOUNT", lotData.get("WORKCOUNT"));
		
		List<Map<String, Object>> inspList = generalDao.addSelect(NAMESAPCE + ".GetInspectionResultInfo", propertyMap);
		
		if(inspList != null && !inspList.isEmpty() && inspList.size() > 0)
		{
			//화면에 반활 할 row
			Map<String, Object> responseRow;	
			
			for(int i = 0; i< list.size(); i++)
			{
				HashMap<String, Object> row = (HashMap<String, Object>) list.get(i);
				HashMap<String, Object> defectResult = (HashMap<String, Object>) list.get(i);
				responseRow = new HashMap<String, Object>();
				String txnHistKey = TxnHistKey.getTxnHistKey();
				
				defectResult.put("TXNHISTKEY", txnHistKey);
				defectResult.put("RESOURCETYPE","FinishInspection");
				defectResult.put("RESOURCEID",lotId);
				defectResult.put("PROCESSRELNO",lotData.get("PROCESSSEGMENTID"));
				defectResult.put("DEFECTCODE",row.get("DEFECTCODE"));
			
				defectResult.put("DEGREE",String.valueOf(inspDegree));
				//defectResult.setWorkcount(lotData.getWorkcount());
				defectResult.put("DEFECTQTY",row.get("QTY"));
				defectResult.put("QCSEGMENTID",row.get("QCSEGMENTID"));
				defectResult.put("REASONSEGMENTID",row.get("REASONSEGMENTID"));
				defectResult.put("REASONCONSUMABLELOTID",row.get("REASONCONSUMABLELOTID"));
				defectResult.put("REASONAREAID",row.get("REASONAREAID"));
				defectResult.put("FILERESOURCEID",row.get("IMAGERESOURCEID"));
				
				defectResult.put("TXNTIME",txnInfo.get("TXNTIME"));
				defectResult.put("TXNUSER",txnInfo.get("TXNUSER"));
				
				generalDao.addUpdate(NAMESAPCE + ".insertInspectionDefect", defectResult);
				
				//2020-03-03 강유라 영풍의 경우 양산/ 시양산 만 NCR 적용
				switch(lotData.get("ENTERPRISEID").toString())
				{
					default:
						
						//2019-12-10 강유라 NCR 기준 적용 추가
						//DataRow의 DecisionDegree로 판정 및 actionType 반환
						String actionType = this.getActionTypeSelfAndFinish(row, "FinishInspection", row.get("DECISIONDEGREE").toString(), lotData.get("ENTERPRISEID").toString(), lotData.get("PLANTID").toString());
						
						if(!StringUtil.isNullOrEmpty(actionType))
						{
							//2019-12-12 강유라 actionType에 LockingLot 이 있는지 체크
							if(actionType.contains("LockingLot"))
							{
								//lot별로 여러 불량코드 검사 => 
								//이미 LockingLot actionType을 반환한 불량 코드가 있다면 또 넣지 않음.
								if(!checkMap.containsKey(lotId))
								{
									checkMap.put(lotId, actionType);
								}
							}
							
							String strInspDegree = String.valueOf(inspDegree);
							Boolean isSendEmail = qcmService.doActionAndGetIsSendEmail(actionType, row, lotId, "FinishInspection", lotData.get("ENTERPRISEID").toString(), lotData.get("PLANTID").toString(), strInspDegree);
							
							if(isSendEmail == true)
							{		
								Double defectQty = Double.parseDouble(row.get("QTY").toString());
								String defectRate = ((double)Math.round(defectQty/lotQty * 100.0))+"%";
								int	lotQtyInt = Integer.parseInt(String.valueOf(Math.round(lotQty)));
								int	defectQtyInt = Integer.parseInt(String.valueOf(Math.round(defectQty)));

								responseRow.put("LOTID", lotId);
								responseRow.put("DEFECTINFO", row.get("DEFECTCODENAME")+"-"+ row.get("QCSEGMENTNAME")+"("+(lotQtyInt+"/"+defectQtyInt+"/"+defectRate)+")");
								responseRow.put("ISSENDEMAIL", isSendEmail);
								defectList.add(responseRow);
							}
						}
				}
			}
		}
		
		return defectList;
	}

	private String getActionTypeSelfAndFinish(Map<String, Object> paramInspection, String inspectionClassId,
			String decisionDegree, String enterpriseId, String plantId) {
		HashMap<String, Object> propertyMap = new HashMap<>();
		propertyMap.put("INSPECTIONCLASSID", inspectionClassId);
		propertyMap.put("NCRDECISIONDEGREE", decisionDegree);
		propertyMap.put("ENTERPRISEID", enterpriseId);
		propertyMap.put("PLANTID", plantId);
		List<Map<String, Object>> ncrStandard = generalDao.addSelect(NAMESAPCE1500 + ".SelectNCRCheckBasis", propertyMap);

		String qcGrade = null;
		String actionType = null;

		if (ncrStandard == null || ncrStandard.size() == 0) {
			String args = paramInspection.get("DEFECTCODE") + "," + paramInspection.get("QCSEGMENTID");
			throw new BizException("NoNCRStandardException", args);// "판정조건이
																	// 없습니다.(불량코드:{0},품질공정
																	// 코드 :{1})"
		}

		for (int i = 0, n = ncrStandard.size(); i < n; i++) {
			Map<String, Object> ncrRow = ncrStandard.get(i);
			String qtyOrRate = ncrRow.get("QTYORRATE").toString();
			Boolean isMatching = false;
			if (qtyOrRate.equals("RATE")) {// 불량율로 판정일 경우
				isMatching = IsMatchingSelfAndFinishRate(paramInspection, ncrRow);
			} else if (qtyOrRate.equals("QTY")) {// 불량 수량으로 판정일 경우
				isMatching = IsMatchingSelfAndFinishQTY(paramInspection, ncrRow);

			}

			if (isMatching == true) {
				qcGrade = ncrRow.get("QCGRADE").toString();
				break;
			}

		}

		if (qcGrade != null && !StringUtils.isEmpty(qcGrade)) {
			actionType = GetActionType(enterpriseId, plantId, qcGrade);
		}

		return actionType;
	}

	private String GetActionType(String enterpriseId, String plantId, String qcGrade) {
		String actionType = null;

		if (qcGrade != null && !StringUtils.isEmpty(qcGrade)) {
			Map<String, Object> param = new HashMap<>();
			param.put("ENTERPRISEID", enterpriseId);
			param.put("PLANTID", plantId);
			param.put("QCGRADE", qcGrade);

			// NCR 기준을 조회
			List<Map<String, Object>> actionTypeString = generalDao.addSelect(NAMESAPCE1500 + ".selectInspResultActionType",
					param); // QueryProvider.select("GetInspResultActionType" ,
							// "10001" , param);

			if (actionTypeString != null && actionTypeString.size() > 0
					&& actionTypeString.get(0).get("ACTIONTYPE") != null) {
				actionType = actionTypeString.get(0).get("ACTIONTYPE").toString();
			} else {
				// "조치등급이 없습니다.(조치등급:{0})"
				throw new BizException("NoQCGradeExceptionItem", qcGrade);
			}
		}

		return actionType;
	}
	
	private Boolean IsMatchingSelfAndFinishQTY(Map<String, Object> paramInspection,
			Map<String, Object> ncrStandardRow) {
		Boolean isMatching = false;

		// NCR기준 조건
		String ngCondition = ncrStandardRow.get("NGCONDITION").toString();
		// 기준
		int ngQuantity = 0;

		if (ncrStandardRow.get("NGQUANTITY") != null
				&& !StringUtils.isEmpty(ncrStandardRow.get("NGQUANTITY").toString())) {
			ngQuantity = Integer.valueOf(ncrStandardRow.get("NGQUANTITY").toString()).intValue();
		}

		// 입력값
		Double specOutQty = Double.valueOf(paramInspection.get("QTY").toString()).doubleValue();

		if (specOutQty > 0.0) {
			switch (ngCondition) {

			case "EQ":// 동일
				if (ngQuantity == specOutQty) {
					isMatching = true;
				} else {
					isMatching = false;
				}
				break;

			case "GE":// 이상
				if (ngQuantity <= specOutQty) {
					isMatching = true;

				} else {
					isMatching = false;
				}
				break;

			case "GT":// 초과
				if (ngQuantity < specOutQty) {
					isMatching = true;

				} else {
					isMatching = false;
				}
				break;

			case "LE":// 이하
				if (ngQuantity >= specOutQty) {
					isMatching = true;

				} else {
					isMatching = false;
				}
				break;

			case "LT":// 미만
				if (ngQuantity > specOutQty) {
					isMatching = true;

				} else {
					isMatching = false;
				}
				break;
			}

		}
		return isMatching;
	}
	
	private Boolean IsMatchingSelfAndFinishRate(Map<String, Object> paramInspection,
			Map<String, Object> ncrStandardRow) {
		Boolean isMatching = false;
		// NCR기준 조건
		String ngCondition = ncrStandardRow.get("NGCONDITION").toString();
		// 기준
		Double fromNGRate = 0.0;
		if (ncrStandardRow.get("FROMNGRATE") != null
				&& !StringUtils.isEmpty(ncrStandardRow.get("FROMNGRATE").toString())) {
			fromNGRate = Double.valueOf(ncrStandardRow.get("FROMNGRATE").toString()).doubleValue();
		}

		Double toNGRate = 0.0;
		if (ncrStandardRow.get("TONGRATE") != null && !StringUtils.isEmpty(ncrStandardRow.get("TONGRATE").toString())) {
			toNGRate = Double.valueOf(ncrStandardRow.get("TONGRATE").toString()).doubleValue();
		}

		// 입력값
		Double defectRate = Double.parseDouble(paramInspection.get("DEFECTRATE").toString().replace("%", ""));

		if (defectRate > 0.0) {
			switch (ngCondition) {

			case "BT":// 사이 (초과, 미만)
				if (fromNGRate <= defectRate && defectRate < toNGRate) {
					isMatching = true;
				} else {
					isMatching = false;
				}
				break;

			case "EQ":// 동일 ******from / to 정해지면 수정 가능성 있음
				if (toNGRate == defectRate) {
					isMatching = true;
				} else {
					isMatching = false;
				}
				break;

			case "GE":// 이상 ******from / to 정해지면 수정 가능성 있음
				if (toNGRate <= defectRate) {
					isMatching = true;

				} else {
					isMatching = false;
				}
				break;

			case "GT":// 초과 ******from / to 정해지면 수정 가능성 있음
				if (toNGRate < defectRate) {
					isMatching = true;

				} else {
					isMatching = false;
				}
				break;

			case "LE":// 이하 ******from / to 정해지면 수정 가능성 있음
				if (toNGRate >= defectRate) {
					isMatching = true;

				} else {
					isMatching = false;
				}
				break;

			case "LT":// 미만 ******from / to 정해지면 수정 가능성 있음
				if (toNGRate > defectRate) {
					isMatching = true;

				} else {
					isMatching = false;
				}
				break;
			}

		}
		return isMatching;
	}
	
	/**************************************************************************************
	* Lot 정보 업데이트
	***************************************************************************************/
	private Map<String, Object> UpdateLotSend(Map<String, Object> ld, String userId, Date time) throws Exception
	{
		ld.put("SENDTIME",time);
		ld.put("SENDUSER",userId);
		ld.put("LASTTXNID",this.getClass().getSimpleName());
		
		generalDao.addUpdate(NAMESAPCE + ".updateSendLot", ld);
		
		return ld;
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