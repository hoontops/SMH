package smh.pcm.service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Stack;
import java.util.regex.Pattern;

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
import smh.pcm.service.PCMConstant.AreaOwnType;
import smh.pcm.service.PCMConstant.LotProcessState;
import smh.pcm.service.PCMConstant.LotState;
import smh.pcm.service.PCMConstant.TransitType;
import smh.qam.service.QAMInspectionResultServiceImpl;

@Service
public class PCM09600ServiceImpl extends AbstractNbdfService implements PCM09600Service {

    public static final String NAMESPACE = "smh.pcm.dao.PCM09600Dao";
    public static final String NAMESPACEWIP = "smh.pcm.dao.PCMWipDao";
    public static final String NAMESPACECOM 		= "smh.pcm.dao.PCMCommonDao";
	public static final String NAMEQAM01900 = "smh.qam.dao.QAM01900Dao";
    public static final String NAMESENDLOT = "smh.pcm.dao.PCMSendLotDao";
    public static final String NAMEQAM01300 = "smh.qam.dao.QAM01300Dao";
    public static final String NAMECMSA00302     = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";
    public static final String NAMESPACEWORKPROCESS      = "smh.pcm.dao.PCMWorkProcessDao";
    public static final String NAMESPACE_RL = "smh.pcm.dao.PCMReworkLotDao";
    public static final String NAMEPCM9700 = "smh.pcm.dao.PCM09700Dao";

    @Autowired
    private PCMWipService  wipService;
    
    @Autowired
    private PCMWorkProcessService  workProcessService;
    
    @Autowired
    private PCMReworkLotService  reworkLotService;

    @Autowired
    private PCMSendLotService  sendLotService;

    @Autowired
    private GeneralDao generalDao;
	@Autowired
	private QAMInspectionResultServiceImpl qamRsltService;
    /**
    * @fn 			: selectCustomQuery
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectCustomQuery
    * @remark		: 상세설명
* @see smh.pcm.service.PCM09600Service#selectCustomQuery(com.nbdf.commons.ui.vo.UiMapDto)
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
        	putDataSetMap(dto, generalDao.addSelect(NAMESPACE + "."+sqlId, param));

        	if("selectLotInfoByProcess".equals(sqlId)) { //LOT정보조회시 인계작업장콤보 조회
        		List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + "."+sqlId, param);  //output
        		if(list.size()>0) {
        			//연계사업장 콤보        			
        	        String stepType = (String) list.get(0).get("STEPTYPE");
        	        if ((stepType+",").indexOf("WaitForSend,") <0)
        	        {
	        			param.put("PROCESSSEGMENTID", list.get(0).get("NEXTPROCESSSEGMENTID"));
	        			param.put("PROCESSSEGMENTVERSION", list.get(0).get("NEXTPROCESSSEGMENTVERSION"));
	        			param.put("RESOURCETYPE", "Resource");        		
	        			putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".GetTransitAreaList", param), "output1");
        	        }
        			//품목별 검사자할당
        			param.put("RESOURCETYPE", "Product");
        			param.put("INSPECTIONTYPE", "ShipmentInspection");
        			param.put("RESOURCEID", list.get(0).get("PRODUCTDEFID"));
        			param.put("RESOURCEVERSION", list.get(0).get("PRODUCTDEFVERSION"));
        			//품목에 해당하는 기준이 있는경우
            		List<Map<String, Object>> degreeList = generalDao.addSelect(NAMESPACE + ".GetInspectorDegreeByInspType", param);
        			putDataSetMap(dto, degreeList, "output2");
        			
        			if(degreeList.size() == 0) {//품목에 해당하는 기준이 없을 경우 => 공통기준 적용
            			param.put("RESOURCEID", "*");
            			param.put("RESOURCEVERSION", "*");
            			putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".GetInspectorDegreeByInspType", param), "output2");
        			}
        			
        	        putDataSetMap(dto, generalDao.addSelect(NAMESPACECOM + ".selectReasonConsumableList", param),				"output3");
        	        putDataSetMap(dto, generalDao.addSelect(NAMESPACECOM + ".selectDefectReasonConsumableLot", param),		"output4");
        	        putDataSetMap(dto, generalDao.addSelect(NAMESPACECOM + ".selectDefectReasonProcesssegment", param),		"output5");
        			
        		}	
        	}
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }        
    }
    
    /**
    * @fn 			: selectLotInfo
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : selectLotInfo
    * @remark		: 상세설명
* @see smh.pcm.service.PCM09600Service#selectLotInfo(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectOtherInfo(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        param.put("PROCESSSTATE","Run");
		List<Map<String, Object>> output1 = generalDao.addSelect(NAMESPACE + ".SelectLotListForShipmentInspection", param);
        putDataSetMap(dto, output1,"output1");
			param.put("PRODUCTDEFID", (String)output1.get(0).get("PRODUCTDEFID"));
			param.put("PRODUCTDEFVERSION", (String)output1.get(0).get("PRODUCTDEFVERSION"));
			param.put("LOTID", output1.get(0).get("RESOURCEID"));
      	putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".SelectLotMessageShipmentInsp", param),	"output4");
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".SelectWeekInfoByLotId", param),		"output2"); 
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".SelectProductChangeHistoryTab", param),		"output3");
    }
  	
	// Lot Equipment Insert/Update Data
	private void SaveLotEquipment(Map<String, Object> ld, String equipmentList, Date time, Double lotQty) throws Exception
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
			
			led = generalDao.addSelectOneMap(NAMEPCM9700 + ".selectPcmLotequipment", led);
			if (led == null)
			{
				throw new BizException("InValidData003", String.format("LotId = %s TxnHistKey = %s", map.get("LOTID").toString(), map.get("TXNHISTKEY").toString()));
			}
			
			generalDao.addDelete(NAMEPCM9700 + ".deletePcmLotequipment", led);
		}
		
		
		for (String equipmentId : equipmentList.split(","))
		{
			Map<String, Object> led = new HashMap<String, Object>(); 	
			led.put("LOTID", lotId);
			led.put("EQUIPMENTID", equipmentId);
			led.put("PROCESSSEGMENTID", ld.get("PROCESSSEGMENTID"));
			led.put("PROCESSSEGMENTVERSION", ld.get("PROCESSSEGMENTVERSION"));
			led.put("WORKCOUNT", ld.get("WORKCOUNT"));
			
			List<Map<String, Object>> list = generalDao.addSelect(NAMEPCM9700 + ".selectPcmLotequipmentList",led);
			if (list.size() > 0)
			{
				led = list.get(0);
				led.put("PROCESSSTATE",ld.get("PROCESSSTATE"));
				led.put("TRACKOUTTIME",time);
				//led.put("Lotqty",ld.get("Qty"));
				led.put("LOTQTY",lotQty);
				generalDao.addUpdate(NAMEPCM9700 + ".updatePcmLotequipment",led);
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
				//led.put("WORKCOUNT",ld.get("WORKCOUNT"));
				//led.put("Lotqty(ld.get("Qty"));
				led.put("LOTQTY",lotQty);
				generalDao.addUpdate(NAMESPACEWIP + ".insertPcmLotequipment",led);
				
			}
			
			Map<String, Object> ed = new HashMap<String, Object>(); 
			ed.put("EQUIPMENTID",equipmentId);
			
			ed = generalDao.addSelectOneMap(NAMEPCM9700 + ".selectBasEquipment", ed);
			
			if (ed == null)
			{
				throw new BizException("InValidData001", String.format("EquipmentId = %s", equipmentId));
			}
			ed.put("STATE","Idle");
			generalDao.addUpdate(NAMEPCM9700 + ".updateBasEquipment",ed);
		}
	}
  	
    /**
    * @fn 		: saveShipmentInspection
    * @brief 		: (Override method) 함수 간략한 설명
    * @Method Name : saveShipmentInspection
    * @remark	: 상세설명
* @see smh.pcm.service.PCM09600Service#saveFinalInspectionAccept(com.nbdf.commons.ui.vo.UiMapDto)
    */
	@Override
    public void saveShipmentInspection(UiMapDto dto) throws Exception {
    	String _abnormalNO;// 이상발생 시퀀스
    	String _abnormalType = "ShipmentInspection";// 이상발생 타입
    	String _enterpriseId ="";
    	String _plantId ="";
    	String _aqlOrNcr ="";

    	Boolean _isSendEmail = false;
    	
  		 
 		 //String sToday      =  this.getToDate();
 		List<Map<String, Object>> systemDate = generalDao.addSelect(NAMECMSA00302 + ".selectCurrentSystemTime", "");
 		String sToday = systemDate.get(0).get("TODATE").toString();
 		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");

 	     // Worker List
   	 //현재시간
 		 Date now = new Date();
   	 	 Date 	nowDate 	= new Date(); 

		Map<String, String> lotIdHistKeyMap = new HashMap<String, String>();//inspectionDefect 저장시 groupHistKey 전달위한 맵
		Map<String, String> lotIdResultMap = new HashMap<String, String>();//NCR 발행 : 결과NG인것만 체크하기위한 맵
    	
		Map<String, Object> resultParam = new HashMap<String, Object>();

		DataSetMap lotList   = getParametersDataSetMap(dto, "ds_lotSplitList");
		DataSetMap defectlist = getParametersDataSetMap(dto, "ds_lotSplitDetailList"); 
		DataSetMap messagelist  = getParametersDataSetMap(dto, "ds_message"); 
		DataSetMap defectToSplit   = getParametersDataSetMap(dto, "ds_inspectionList");
    	DataSetMap 	body				= getParametersDataSetMap(dto, "ds_body");
		List<Map<String, Object>> responseDt = new java.util.ArrayList<Map<String, Object>>();
    	String 							strUserId					= (String)SessionUtil.getSessionValue(ContextConstant.SESSION_USER_ID);
        String 							enterpriseId			= (String)SessionUtil.getSessionValue(ContextConstant.SESSION_ENTERPRISEID);
        String 							plantId				= (String)SessionUtil.getSessionValue(ContextConstant.SESSION_SITETYPE);
        String 							languageType		= (String)SessionUtil.getSessionValue(ContextConstant.SESSION_LANGUAGETYPE);

    	// 재작업라우팅 적용시 필요한 데이터 / 2020-03-07 유태근
    	String _reworkProcessDefId = ""; // 재작업 라우팅 ID
    	String _reworkProcessDefVersion = ""; // 재작업 라우팅 Version
    	String _reworkPathId = ""; // 재작업 라우팅 상세정의 ID
    	String _reworkResourceId = ""; // 재작업 라우팅 상세 정의에 대한 자원 ID
    	String _reworkAreaId = ""; // 재작업 라우팅 상세 정의에 대한 작업장 ID
    	String _reworkProcessSegmentId = ""; // 재작업 라우팅 상세 정의에 대한 공정 ID
    	String _reworkProcessSegmentversion = ""; // 재작업 라우팅 상세 정의에 대한 공정 Version
    	String _reworkUserSequence = ""; // 재작업 라우팅 상세 정의에 대한 공정 Version
    	
		//Key 정보
		String _strLotId;//LotId
		String _strProcessRelNo = "*";//*
		String _strResourceType = "ShipmentInspection";//resourceType
		String _groupTxnHistKey;
		
		//기본정보 - sf_inspectionResult
		//String strParentLotId;
		_enterpriseId = (String)body.get(0).get("ENTERPRISEID");
		_plantId = (String)body.get(0).get("PLANTID");
		_aqlOrNcr = (String)body.get(0).get("AQLORNCR");
		String strInspector = (String)body.get(0).get("INSPECTIONUSER");
		String strTransitAreaId = (String)body.get(0).get("AREAID");
		String strResoureceId = (String)body.get(0).get("RESOURCEID");
		
		String strInspectionDate = sToday;

		String strInspectionDefId = (String)body.get(0).get("INSPECTIONDEFID");
		Double lotQty  =0.0;

		// 2020-03-07 유태근 NG난 Lot들에 대한 재작업라우팅 정의
		_reworkProcessDefId = (String)body.get(0).get("reworkprocessdefid"); 
		_reworkProcessDefVersion = (String)body.get(0).get("reworkprocessdefversion");  
		_reworkPathId = (String)body.get(0).get("reworkpathid"); 
		_reworkResourceId = (String)body.get(0).get("reworkresourceid");  
		_reworkAreaId = (String)body.get(0).get("reworkareaid"); 
		_reworkProcessSegmentId =(String)body.get(0).get("reworkreporocesssegmentid"); 
		_reworkProcessSegmentversion =(String)body.get(0).get("reworkreporocesssegmentversion"); 
		_reworkUserSequence =(String)body.get(0).get("reworkreusersequence"); 
   
		//LotMessage 저장
		getUpsertLotMessage(messagelist);

		Map<String, Object> row   = null;
		String txnHistKey = "";
    	String pattern = "^[0-9]*$"; //숫자만
		
 		for(int i = 0; i < lotList.size(); i++)
 		{	
 			row = lotList.get(i);
			_strLotId  =(String)row.get("RESOURCEID");
			
			_groupTxnHistKey = TxnHistKey.getTxnGroupHistKey();
			lotIdHistKeyMap.put(_strLotId, _groupTxnHistKey);
			lotIdResultMap.put(_strLotId,(String)row.get("INSPECTIONRESULT"));
			
			String degree = (String)row.get("DEGREE");
			String prevProcessPathId="";
			String prevAreaId="";
			String prevProcessSegmentId ="";
			String prevProcessSegmentVersion ="";
			String prevResourceId = "";
			String userSequence ="";
			String rootLotId = "";

			// 기존 Lot
			Map<String, Object> lotData = wipService.validateLotInfo(_strLotId);
			
			// 1.검사정보 저장
			qamRsltService.saveInspectionResultWithLotData(row, lotData, _strResourceType, _groupTxnHistKey,strInspector, strTransitAreaId, prevAreaId,strInspectionDate, strInspectionDefId, _aqlOrNcr ,degree);
			this.saveLotWorker(dto, lotData, strInspector);

			Boolean hasDefect = false;
			Map<String, Object> defectQtyRow = null;
			
			//불량폐기 처리 결과 갯수를 구하여 불량 처리
			if(defectToSplit != null && defectToSplit.size() > 0)
			{
				Map<String, Object> defectRow = null;
				
				for(int j=0 ; j < defectToSplit.size(); j++)
				{
					defectRow = defectToSplit.get(j);
					if(defectRow.get("RESOURCEID").equals(_strLotId))
					{//불량 폐기 처리 데이타가 있을 때
						hasDefect = true;						
						defectQtyRow = defectRow;
						break;
					}
				}
				
				if(hasDefect == true)
				{
					Double defectQtySum =Double.parseDouble(String.valueOf(defectQtyRow.get("DEFECTQTYSUM")));

						String childLotId = "";
						String splitSerialNo = "";
						String maxSequence ="";

//						Map<String, Object> splitLotMap = new HashMap<>();
//						splitLotMap.put("LOTID", splitSerialNo);

						Map<String, Object> paramDefect = new HashMap<String, Object>();
						paramDefect.put("ROOTLOTID", lotData.get("ROOTLOTID"));
						rootLotId = StringUtil.Object2String(lotData.get("ROOTLOTID"));

						if (Pattern.matches(pattern, _strLotId.substring(0, 1)) == false) {  //MES LOT 불량분할
							maxSequence = generalDao.addSelectOne(NAMESPACEWIP + ".selectMaxDefectMaxSequence", paramDefect);
						}
						else 
						{
							maxSequence = generalDao.addSelectOne(NAMESPACEWIP + ".selectMigMaxDefectMaxSequence", paramDefect);
						}

//						List<Map<String, Object>> resultMap =  generalDao.addSelect(NAMESPACE+".GetDefectLotMaxSequence", splitLotMap);
//						
//						char serialChar;
//						int serialNo = 0;
//						
//						if (resultMap.size() > 0)
//						{
//							String lastSerial = resultMap.get(0).get("LASTID").toString();
//							
//							serialChar = lastSerial.substring(0, 1).toCharArray()[0];
//							serialNo = Integer.parseInt(lastSerial.substring(1, 3)) + 1;
//							
//							if (serialNo > 99)
//							{
//								serialChar++;
//								serialNo = 1;
//							}
//						}
//						else
//						{
//							serialChar = 'A';
//							serialNo = 1;
//						}

						String serialChar;
						int serialNo = 0;

						if (maxSequence != null) {
							if( maxSequence.substring(0, 1).equals("Z"))
							{
								//throw new BizException("불량LOT을 더이상 생성할수 없습니다.");
								throw new BizException("LOTCannotCreated");
							}
							if (Pattern.matches(pattern, _strLotId.substring(0, 1)) == false) {
								serialChar = maxSequence.substring(0, 1);
								serialNo = Integer.parseInt(maxSequence.substring(1)) + 1;
								
								if(serialNo == 100)
								{
									serialChar = StringUtil.nextAlphabet(maxSequence.substring(0, 1));
									serialNo = 1;
								}
								
							}
							else 
							{
								serialChar =  StringUtil.nextAlphabet(maxSequence.substring(0, 1));
							}
						} else {
							serialChar = "A";
							serialNo = 1;
						}

						if (Pattern.matches(pattern, _strLotId.substring(0, 1)) == false) {  //MES LOT 불량분할
							childLotId = _strLotId.substring(0, _strLotId.length() - 3) + String.format("%s%02d", String.valueOf(serialChar), serialNo);
						} else {   //ERP LOT 불량분할
							childLotId = rootLotId +String.format("%s", String.valueOf(serialChar));
						}
						
						if(childLotId.length() > 30) {
							throw new BizException("OverQty", String.format("childLotId = %s", childLotId));
						}
//					Map<String,Object> defectLot = wipService.splitLot(dto, lotData, childLotId, defectQtySum, defectQtySum,"Y");
					Map<String,Object> defectLot = this.splitLot(dto, lotData, childLotId, defectQtySum, defectQtySum,TransitType.SendLot);

					// SplitLot Lot Locking 처리
					wipService.saveLotLocking(dto, (String) defectLot.get("LOTID"), "QCLockInShipment", "LockShipmentNonconfirm", "", strUserId, languageType);
					
					// 3. Split된 LOT에 불량 데이터 저장
					// -----------------------------------
					lotData = wipService.validateLotInfo(_strLotId);
					// Defect Lot 작업실적 입력
					wipService.saveDefectLotWorkResult(dto,lotData, defectLot, defectQtySum);
					
					lotData = this.saveLot(_strLotId, childLotId);
//					defectLot = defectLot.selectOne();
					// Lot Defect 처리
					// -----------------------------------					
					qamRsltService.saveLotDefectMultiLot(defectLot, defectToSplit, TransitType.SendLot, _strLotId,_groupTxnHistKey);
				}	
			}
			
	 		 wipService.executeCheckingWindowTimeNewTx(dto, lotData, now);
	 		 
	         List<Map<String, Object>> prevList = new ArrayList<Map<String,Object>>();
			
	 		// --------------------------------------------------------------------------------------
	 		// [출하검사의 이전공정 (최종검사) 정보를 조회] execute Query
	 		// --------------------------------------------------------------------------------------
			HashMap<String, Object> paramMap = new HashMap<>();
			paramMap.put("LOTID", _strLotId);
			paramMap.put("ENTERPRISEID", lotData.get("ENTERPRISEID"));
			paramMap.put("PLANTID", lotData.get("PLANTID"));
			paramMap.put("PROCESSSEGMENTCLASSTYPE", "FinishInspection");
			//자동 발행시 최종검사에 대한 정보
	         
	 		prevList = generalDao.addSelect(NAMEQAM01300 + ".selectPrevCauseData", paramMap);
	 		
			//최종검사로 공정 이동시 필요
			if(prevList != null && !prevList.isEmpty() && prevList.size() > 0)
			{
				prevProcessPathId = prevList.get(0).get("PROCESSPATHID") == null ? null : prevList.get(0).get("PROCESSPATHID").toString();
				prevAreaId = prevList.get(0).get("PREVAREAID") == null ? null : prevList.get(0).get("PREVAREAID").toString();
				prevProcessSegmentId = prevList.get(0).get("PREVPROCESSSEGMENTID") == null ? null : prevList.get(0).get("PREVPROCESSSEGMENTID").toString(); 
				prevProcessSegmentVersion = prevList.get(0).get("PREVPROCESSSEGMENTVERSION") == null ? null : prevList.get(0).get("PREVPROCESSSEGMENTVERSION").toString(); 
				prevResourceId = prevList.get(0).get("RESOURCEID") == null ? null : prevList.get(0).get("RESOURCEID").toString(); 
				userSequence = prevList.get(0).get("USERSEQUENCE") == null ? null : prevList.get(0).get("USERSEQUENCE").toString();
			}
			else
			{
				//2020-03-23 강유라 영풍 - 재작업 선택 / 인터 예전 실적확인 (실적있는지 유효성 검사)
				throw new BizException("NoFinishInspectionWorkResult", String.format("LotId = %s", _strLotId));
			}
	 		
			//검사 결과가 NG인 경우-----------------------------------------------------------
			//2020-01-08 전수 불량인 경우 진행 X
			if(row.get("INSPECTIONRESULT").equals("NG") && StringUtil.Object2Double(lotData.get("QTY")) > 0)
			{		
				String equipmentId = "";
				
				// 가상설비 조회
				HashMap<String, Object> eMap = new HashMap<>();
				eMap.put("LOTID", _strLotId);
				
				List<Map<String, Object>> equipList = generalDao.addSelect(NAMESPACE + ".GetBOREquipmentByLotId", eMap);
				
				if(equipList != null && !equipList.isEmpty() && equipList.size() > 0)
				{
					equipmentId = equipList.get(0).get("EQUIPMENTID").toString();
				}
				
				lotData = wipService.trackOutLot(dto, lotData, equipmentId, strUserId, now);

				lotData.put("TRACKINUSER", strUserId);
				lotData.put("TRACKINTIME", now);

				// 설비 이력 저장 
				this.SaveLotEquipment(lotData, equipmentId, nowDate, Double.parseDouble(String.valueOf(lotData.get("QTY"))));

				// 작업실적 입력
				wipService.saveLotWorkResult(dto, lotData, TransitType.TrackOutLot, strUserId, now,strResoureceId,strTransitAreaId);
				
				Map<String,Object> wrd  = wipService.saveLotWorkResult(dto, lotData, TransitType.SendLot, strUserId,now,strResoureceId,strTransitAreaId);
//				lotData = UpdateLotSend(lotData, strUserId, now);

				lotData.put("SENDTIME", now);
				lotData.put("SENDUSER", strUserId);
				lotData.put("LASTTXNID", this.getClass().getSimpleName());
				lotData.put("PROCESSSTATE", LotProcessState.WaitForReceive);

				// 현재 작업장
				String currentArea = (String) lotData.get("AREAID");
				
				// 현재 Site
				String currentPlant = (String) lotData.get("PLANTID");
				
				// Get Current Factory
				String currentFactory = (String) lotData.get("FACTORYID");
				
				// 예산 통제 API 호출
				Map<String, Object> originArea = new HashMap<String, Object>(); 
				originArea.put("AREAID",currentArea);
				originArea = generalDao.addSelectOneMap(NAMESPACE_RL + ".selectBasArea",originArea);
				if (originArea == null)
				{
					// 해당 작업장이 존재하지 않습니다. {0}
					throw new BizException("NotExistArea", String.format("AreaId = %s", lotData.get("AREAID")));
				}
				
				Map<String, Object> repositionInfo = new HashMap<String, Object>();
				repositionInfo.put("LOTID",_strLotId);
				repositionInfo.put("DESTPROCESSPATHID",prevProcessPathId);
				repositionInfo.put("AREAID",prevAreaId);
				repositionInfo.put("RESOURCEID", prevResourceId);

				Map<String, Object> factoryLotData = reworkLotService.repositionSegment(prevProcessPathId, repositionInfo, _strLotId, lotData);//String strPathId, Map<String, Object> paramChange, String lotID, Map<String, Object> lotData
//				lotData.setProcesssegmentid(reLotdata.getProcesssegmentid());
//				lotData.setProcesssegmentversion(reLotdata.getProcesssegmentversion());
//				lotData.setUsersequence(reLotdata.getUsersequence());
//				lotData.setAreaid(reLotdata.getAreaid());				
//				lotData.setProcesspathstack(reLotdata.getProcesspathstack());
//				lotData.update();
//				// 실적 데이터 생성
//				lotKey.setLotid(_strLotId);				
//				lotData = lotData.selectOne();

				lotData = wipService.validateLotInfo(_strLotId);
				
				String lastTxnHistKey = (String)lotData.get("LASTTXNHISTKEY");
				
				// Update Lot Work Count
				lotData = wipService.saveLotWorkCount(dto, lotData); // WorkCount 증가
				
				// 예산 통제 API 호출
				Map<String, Object> prevArea = new HashMap<String, Object>(); 
				prevArea.put("AREAID",prevAreaId);
				prevArea = generalDao.addSelectOneMap(NAMESPACE_RL + ".selectBasArea",prevArea);
				if (prevArea == null)
				{
					// 해당 작업장이 존재하지 않습니다. {0}
					throw new BizException("NotExistArea", String.format("AreaId = %s", lotData.get("AREAID")));
				}

				String ownType = (String)prevArea.get("OWNTYPE");;
				String prevPlantId = (String)prevArea.get("PLANTID");//인계할 작업장의 plant
				
				String lotState = (String)lotData.get("LOTSTATE");

				// 인계할 곳이 외주 이거나 현재 plant와 다른경우
				// if not Finished that Lot State then Outside Check Logic
				if (!lotState.equals(LotState.Finished))
				{
					// 작업장이 동일한 경우 SendLot 호출 안함
					if (!currentArea.equals(prevArea))
					{
						// Check Outside Area
						if (ownType.equals(AreaOwnType.OutsideOSP) || !prevPlantId.equals(currentPlant))
						{
							String nextAreaId = "";
							String nextPlantId = "";
							
							if (ownType.equals(AreaOwnType.OutsideOSP))
								nextAreaId = prevAreaId;
							else
								nextAreaId = (String)lotData.get("AREAID");
							
							if (!prevPlantId.equals(currentPlant))
								nextPlantId = prevPlantId;
							else
								nextPlantId = (String)lotData.get("PLANTID");
							
							lotData = wipService.sendLot(_strLotId, nextAreaId, nextPlantId);
							
							if (!prevPlantId.equals(currentPlant))
							{
								sendLotService.SaveLotPlantTransit(lotData, lastTxnHistKey, strUserId, now);
							}
						}
					}
				}
				
				String lotHistKey = "";
				
				// Insert Work Result by Next Process Segment
				if (lotState.equals(LotState.InProduction) || lotState.equals(LotState.InTransit))
				{
					Double Createdqty = Double.parseDouble(lotData.get("CREATEDQTY").toString());
					wipService.saveLotWorkResultForCurrentProcess(dto,lotData, Createdqty, nowDate);	
				}
				// Lot History Previous Plant & Previous Area Update (임시)
				wipService.saveLotHistory(dto, lastTxnHistKey, _strLotId, currentPlant, currentFactory, currentArea);
				
			} 
			else 	if(row.get("INSPECTIONRESULT").equals("OK") && StringUtil.Object2Double(lotData.get("QTY")) > 0)
			{	
				String equipmentId = "";
				
				// 가상설비 조회
				HashMap<String, Object> eMap = new HashMap<>();
				eMap.put("LOTID", _strLotId);
				
				List<Map<String, Object>> equipList = generalDao.addSelect(NAMESPACE + ".GetBOREquipmentByLotId", eMap);

				if(equipList != null && !equipList.isEmpty() && equipList.size() > 0)
				{
					equipmentId = equipList.get(0).get("EQUIPMENTID").toString();
				}
				//선택한 인계 작업장으로 인계  -- 출하검사 Run -> WaitForSend 
				// Track-Out 처리
				lotData = wipService.trackOutLot(dto, lotData, equipmentId, strUserId, now);
				
				lotData.put("TRACKINUSER", strUserId);
				lotData.put("TRACKINTIME", now);
				
				// 설비 이력 저장 
				this.SaveLotEquipment(lotData, equipmentId, nowDate, Double.parseDouble(String.valueOf(lotData.get("QTY"))));
				
				// 작업실적 입력
				wipService.saveLotWorkResult(dto, lotData, TransitType.TrackOutLot, strUserId, now,strResoureceId,strTransitAreaId);
				
		        String stepType = (String)row.get("STEPTYPE");		        
		        if (stepType != null &&  (stepType+",").indexOf("WaitForSend,")<0)
				{//3Step일때 자동 인계처리
					
					if(strTransitAreaId == "")
					{
						// Lot 상태를 확인하여 주세요.
						// 해당 작업장이 존재하지 않습니다. {0}
						throw new BizException("InValidData001", "");
					}
					
					Map<String,Object> wrd  = wipService.saveLotWorkResult(dto, lotData, TransitType.SendLot, strUserId,now,strResoureceId,strTransitAreaId);
					
					// Get Current Area
					String currentArea = (String)lotData.get("AREAID");
					
					// 현재 Site
					String currentPlant = (String) lotData.get("PLANTID");
					
					// Get Current Factory
					String currentFactory = (String) lotData.get("FACTORYID");
					
					// 예산 통제 API 호출
					Map<String, Object> originArea = new HashMap<String, Object>(); 
					originArea.put("AREAID",currentArea);
					originArea = generalDao.addSelectOneMap(NAMESPACE_RL + ".selectBasArea",originArea);
					if (originArea == null)
					{
						// 해당 작업장이 존재하지 않습니다. {0}
						throw new BizException("NotExistArea", String.format("AreaId = %s", lotData.get("AREAID")));
					}
					
					// Update Send Time, Send User
					lotData.put("SENDTIME", now);
					lotData.put("SENDUSER", strUserId);
					lotData.put("LASTTXNID", this.getClass().getSimpleName());
					
					lotData = wipService.dispatchLot(dto, lotData, strTransitAreaId, strResoureceId);
					
					String lastTxnHistKey = (String)lotData.get("LASTTXNHISTKEY");
					
					// Update Lot Work Count
					//lot = UpdateLotWorkCount(lot);
					lotData = wipService.saveLotWorkCount(dto,lotData);
					
					// 예산 통제 API 호출
					Map<String, Object> area = new HashMap<String, Object>(); 
					area.put("AREAID",strTransitAreaId);
					area = generalDao.addSelectOneMap(NAMESPACE_RL + ".selectBasArea",originArea);
					if (area == null)
					{
						// 해당 작업장이 존재하지 않습니다. {0}
						throw new BizException("NotExistArea", String.format("AreaId = %s", lotData.get("AREAID")));
					}
					
					String lotState = (String)lotData.get("LOTSTATE");
					
					String lotHistKey = "";

					String ownType = (String)area.get("OWNTYPE");;
					String nextPlant = (String)area.get("PLANTID");//인계할 작업장의 plant
					
					// if not Finished that Lot State then Outside Check Logic
					if (!lotState.equals(LotState.Finished))
					{
						// 작업장이 동일한 경우 SendLot 호출 안함
						if (!currentArea.equals(strTransitAreaId))
						{
							// Check Outside Area
							if (ownType.equals(AreaOwnType.OutsideOSP) || !nextPlant.equals(currentPlant))
							{
								
								String nextAreaId = "";
								String nextPlantId = "";

								if (ownType.equals(AreaOwnType.OutsideOSP))
									nextAreaId = strTransitAreaId;
								else
									nextAreaId = (String)lotData.get("AREAID");
								
								if (!nextPlant.equals(currentPlant))
									nextPlantId = nextPlant;
								else
									nextPlantId = (String)lotData.get("PLANTID");

								lotData = wipService.sendLot(_strLotId, nextAreaId, nextPlantId);
								
								if (!nextPlant.equals(currentPlant))
								{
									sendLotService.SaveLotPlantTransit(lotData, lastTxnHistKey, strUserId, now);
								}
							}
						}
					}
					
				// Insert Work Result by Next Process Segment
					if (lotState.equals(LotState.InProduction) || lotState.equals(LotState.InTransit))
					{
						wipService.saveLotWorkResultForNextProcess(dto,lotData, lastTxnHistKey);	
					}
					// Lot History Previous Plant & Previous Area Update (임시)
					wipService.saveLotHistory(dto, lastTxnHistKey, _strLotId, currentPlant, currentFactory, currentArea);
				}
			}
 
			Map<String, Object> dataMap = new HashMap<String, Object>();
			//인터플렉스 : 자동 CAR, NCR 자동 발행--------------------
			if(_enterpriseId.equals("INTERFLEX"))
			{
				//CAR 발행 1순번 ct_carrequest (이상발생 상태 update)---------mapData 확인 후 수정
				dataMap = new HashMap<String, Object>();
				dataMap.put("CARREQUESTDATE", strInspectionDate);
				dataMap.put("ISREQUESTMEASURES", "True");
				dataMap.put("CHARGERID", strUserId);
				dataMap.put("STATE", "CARRequestCompleted");
				dataMap.put("PLANTID", _plantId);
				dataMap.put("ENTERPRISEID", _enterpriseId);								
				dataMap.put("AREAID", prevAreaId);								
				dataMap.put("PROCESSSEGMENTID", prevProcessSegmentId);								
				dataMap.put("PROCESSSEGMENTVERSION", prevProcessSegmentVersion);								
				dataMap.put("USERSEQUENCE", userSequence);								
			}
				
			//검사
		responseDt = qamRsltService.saveInspectionDefectAndNCR(defectlist, lotData, _strLotId,_strProcessRelNo, _strResourceType, "SpillShipmentInspection",lotIdHistKeyMap, dataMap, _groupTxnHistKey,responseDt, true);
		
		//불량폐기처리 대상
		qamRsltService.saveInspectionDefectDisposal(defectToSplit, _strLotId, _strProcessRelNo, _strResourceType,lotIdHistKeyMap, _groupTxnHistKey, true);
 		}	

		putDataSetMap(dto, responseDt);
	}

	private void getUpsertLotMessage(DataSetMap dsMessage) throws Exception
	{
		Map<String, Object> lotData = new HashMap<String,Object>();
		
        for (int i = 0, len = dsMessage.size(); i < len; i++)
        {
			lotData = wipService.validateLotInfo((String)dsMessage.get(i).get("RESOURCEID"));
        	ExecuteLotMessageInsert(dsMessage.get(i), lotData);
        }
	}

	/************************************************************************************************
	 * PCM_LOTMESSAGE Insert 작업 실행
	 ************************************************************************************************/
	private int ExecuteLotMessageInsert(Map<String, Object> paramMessage,Map<String, Object> pcmLot ) {
		int result = 0;
		HashMap<String, Object> propertyMap = new HashMap();
		
		propertyMap.put("LOTID", pcmLot.get("LOTID"));
    	propertyMap.put("PRODUCTDEFID", pcmLot.get("PRODUCTDEFID"));
    	propertyMap.put("PRODUCTDEFVERSION", pcmLot.get("PROCESSDEFVERSION"));
    	propertyMap.put("PROCESSSEGMENTID", paramMessage.get("PROCESSSEGMENTID"));
    	propertyMap.put("PROCESSSEGMENTVERSION", paramMessage.get("PROCESSSEGMENTVERSION"));
		
    	List<Map<String, Object>> lotMessageList = generalDao.addSelect(NAMESPACE + ".selectLotMessageSequence", propertyMap);
    	int seq = 1;
		if(lotMessageList != null && !lotMessageList.isEmpty())
		{
			//같은 조건이 있다면 seq + 1
			String strSeq = lotMessageList.get(0).get("MAX").toString();							
			seq = StringUtils.isEmpty(strSeq) ? 0 : Integer.parseInt(strSeq);
			seq += 1;
		}
		
		propertyMap.put("SEQUENCE", seq);
		propertyMap.put("PROCESSSEGMENTVERSION", "*");
		propertyMap.put("ENTERPRISEID", pcmLot.get("ENTERPRISEID"));
		propertyMap.put("PLANTID", pcmLot.get("PLANTID"));
		propertyMap.put("AREAID", pcmLot.get("AREAID"));
		propertyMap.put("PROCESSDEFID", pcmLot.get("PROCESSDEFID"));
		propertyMap.put("PROCESSDEFVERSION", pcmLot.get("PROCESSDEFVERSION"));
		propertyMap.put("USERSEQUENCE", pcmLot.get("USERSEQUENCE"));
		propertyMap.put("SHOWTYPE", paramMessage.get("SHOWPOPUP"));
		propertyMap.put("TITLE", paramMessage.get("TITLE"));
		propertyMap.put("MESSAGE", paramMessage.get("CONTENTS"));
		propertyMap.put("ISREAD", "N");
		propertyMap.put("CREATOR", paramMessage.get("CREATOR"));
		propertyMap.put("VALIDSTATE", "Valid");
		propertyMap.put("WORKCOUNT", pcmLot.get("WORKCOUNT"));
		propertyMap.put("REGPROCESSSEGMENTID", pcmLot.get("PROCESSSEGMENTID"));
		propertyMap.put("REGPROCESSSEGMENTVERSION", pcmLot.get("PROCESSSEGMENTVERSION"));
		propertyMap.put("MESSAGE_PROCESSSTATE", paramMessage.get("MSGPROCSTATE"));
		propertyMap.put("LASTTXNHISTKEY",  TxnHistKey.getTxnHistKey());
		
		result += generalDao.insert(NAMESPACE + ".insertPcmLotmessage", propertyMap);
		
		return result;
		
	}
	
	
	private Map<String, Object> saveLot(String lotId, String childLotId)  throws Exception
	{
		Map<String, Object> pld = wipService.validateLotInfo(lotId);
		
		Map<String, Object> pd = generalDao.addSelectOneMap(NAMESPACE + ".selectBasProductdefinition",pld);
		
		if (pd == null)
		{
			throw new BizException("InValidData001", String.format("ProductDefId = %s, ProductDefVersion = %s", pld.get("PRODUCTDEFID"), pld.get("PRODUCTDEFVERSION")));
		}
		
		// Get Array Per Quantity
		Double arrayPerQty = StringUtil.Object2Double(pd.get("PCSARY"));	
		pld.put("PCSQTY",pld.get("QTY"));
		
		if (arrayPerQty > 0)
			pld.put("ARRAYQTY",Double.parseDouble(String.valueOf(pld.get("QTY"))) / arrayPerQty);
		
		if (Double.parseDouble(pld.get("PANELPERQTY").toString()) > 0)
			pld.put("PANELQTY",Math.ceil(Double.parseDouble(String.valueOf(pld.get("QTY"))) / Double.parseDouble(String.valueOf(pld.get("PANELPERQTY")))));
		
		if (Double.parseDouble(pld.get("QTY").toString()) <= 0)
		{
			pld.put("PREVLOTSTATE", pld.get("LOTSTATE"));//Lot History Update 시 반영됨. 
			pld.put("LOTSTATE",LotState.Terminated);
		}
		
		Map<String, Object> cld = wipService.validateLotInfo(childLotId);
		cld.put("LOTCREATEDTYPE","Defect");
		cld.put("ISLOCKING","Y");
		cld.put("ISDEFECTED","Y");
		cld.put("QTY",(double)0);
		cld.put("DEFECTQTY",cld.get("Createdqty"));
		cld.put("PCSQTY",(double)0);
		cld.put("ARRAYQTY",(double)0);
		cld.put("PANELQTY",(double)0);
		cld.put("PANELPERQTY",pld.get("PANELPERQTY"));
		
		generalDao.addUpdate(NAMESPACEWIP + ".updatePcmLot",pld);
		generalDao.addInsert(NAMESPACEWIP + ".insertPcmLothistory", pld);
		generalDao.addUpdate(NAMESPACEWIP + ".updatePcmLot",cld);
		generalDao.addInsert(NAMESPACEWIP + ".insertPcmLothistory", cld);
		
		return pld;	
	}	
	
	public Map<String, Object> splitLot(UiMapDto dto, Map<String, Object> lotInfo, String childLotId, double childQty, double splitQty, String isDefected) throws Exception {

		Map<String, Object> uptLot = new HashMap<>();
		Map<String, Object> childLot = new HashMap<>();
		Map<String, Object> upHisLot = new HashMap<>();
		Map<String, Object> lotGeneal = new HashMap<>();
		Map<String, Object> childLotGeneal = new HashMap<>();
		Map<String, Object> paramLrl = new HashMap<>();
		Map<String, Object> plocking = new HashMap<>();
		Map<String, Object> clocking = new HashMap<>();
		Map<String, Object> psd = new HashMap<>();
		Map<String, Object> psc = new HashMap<>();

		double mainLotQty = 0;
		double childLotCreateQty = 0;
		double childLotQty = 0;
		double scrappedQty = 0;

		// uptLot = lotInfo;
		uptLot   = wipService.validateLotInfo(StringUtil.Object2String(lotInfo.get("LOTID")));
		
		childLotCreateQty = childQty;
		childLotQty = splitQty;
		mainLotQty = StringUtil.Object2Double(uptLot.get("QTY")) - childLotQty;
		
		uptLot.put("CHILDLOTID", childLotId);
		uptLot.put("PREVQTY", uptLot.get("QTY"));
		uptLot.put("DEFECTQTY", childLotId);
		uptLot.put("QTY", mainLotQty);
		uptLot.put("DEFECTQTY", childLotQty);
		
		
		uptLot.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		uptLot.put("TXNHISTKEY", uptLot.get("LASTTXNHISTKEY"));

		generalDao.addUpdate(NAMESPACEWIP + ".updatePcmLot", uptLot);
		generalDao.addInsert(NAMESPACEWIP + ".insertPcmLothistory", uptLot);

		// MAIM LOT 추적 이력 정보 등록
		int lotGeneaCnt = generalDao.addInsert(NAMESPACEWIP + ".selectPcmLotgenealCnt", uptLot);
		String depth = lotGeneaCnt == 0 ? "0" : String.valueOf(lotGeneaCnt);

		lotGeneal.put("LOTID"                 , uptLot.get("LOTID"));
		lotGeneal.put("ENTERPRISEID"          , uptLot.get("ENTERPRISEID"));
		lotGeneal.put("PLANTID"               , uptLot.get("PLANTID"));
		lotGeneal.put("AREAID"                , uptLot.get("AREAID"));
		lotGeneal.put("PRODUCTDEFID"          , uptLot.get("PRODUCTDEFID"));
		lotGeneal.put("PRODUCTDEFVERSION"     , uptLot.get("PRODUCTDEFVERSION"));
		lotGeneal.put("PROCESSDEFID"          , uptLot.get("PROCESSDEFID"));
		lotGeneal.put("PROCESSDEFVERSION"     , uptLot.get("PROCESSDEFVERSION"));
		lotGeneal.put("PROCESSPATHID"         , uptLot.get("PROCESSPATHSTACK"));
		lotGeneal.put("USERSEQUENCE"          , uptLot.get("USERSEQUENCE"));
		lotGeneal.put("PROCESSSEGMENTID"      , uptLot.get("PROCESSSEGMENTID"));
		lotGeneal.put("PROCESSSEGMENTVERSION" , uptLot.get("PROCESSSEGMENTVERSION"));
		lotGeneal.put("ROOTLOTID"             , uptLot.get("ROOTLOTID"));
		lotGeneal.put("DEPTH"                 , depth);
		lotGeneal.put("CREATEDQTY"            , uptLot.get("CREATEDQTY"));
		lotGeneal.put("QTY"                   , uptLot.get("QTY"));
		lotGeneal.put("SOURCELOTID"           , uptLot.get("PARENTLOTID"));
		lotGeneal.put("DESTINATIONLOTID"      , childLotId);
		lotGeneal.put("PROCESSSTATE"          , uptLot.get("PROCESSSTATE"));
		lotGeneal.put("WORKCOUNT"             , uptLot.get("WORKCOUNT"));
		lotGeneal.put("LOTCREATETYPE"         , "SplitLot");

		generalDao.addInsert(NAMESPACEWIP + ".insertPcmLotgeneal", lotGeneal);

		// Child LOT 등록
		childLot.put("LOTID"                  , childLotId);
		childLot.put("LINENO"                 , uptLot.get("LINENO"));
		childLot.put("LOTNAME"                , childLotId);
		childLot.put("DESCRIPTION"            , uptLot.get("DESCRIPTION"));
		childLot.put("ENTERPRISEID"           , uptLot.get("ENTERPRISEID"));
		childLot.put("PLANTID"                , uptLot.get("PLANTID"));
		childLot.put("AREAID"                 , uptLot.get("AREAID"));
		childLot.put("RESOURCEID"             , uptLot.get("RESOURCEID"));
		childLot.put("LOCATIONID"             , uptLot.get("LOCATIONID"));
		childLot.put("ORIGINALPLANTID"        , uptLot.get("ORIGINALPLANTID"));
		childLot.put("RAWMATERIALID"          , uptLot.get("RAWMATERIALID"));
		childLot.put("ROOTLOTID"              , uptLot.get("ROOTLOTID"));
		childLot.put("LOTTYPE"                , uptLot.get("LOTTYPE"));
		childLot.put("HASSUBLOT"              , uptLot.get("HASSUBLOT"));
		childLot.put("PRODUCTDEFID"           , uptLot.get("PRODUCTDEFID"));
		childLot.put("PRODUCTDEFVERSION"      , uptLot.get("PRODUCTDEFVERSION"));
		childLot.put("PROCESSDEFID"           , uptLot.get("PROCESSDEFID"));
		childLot.put("PROCESSDEFVERSION"      , uptLot.get("PROCESSDEFVERSION"));
		childLot.put("PROCESSPATHSTACK"       , uptLot.get("PROCESSPATHSTACK"));
		childLot.put("USERSEQUENCE"           , uptLot.get("USERSEQUENCE"));
		childLot.put("PROCESSSEGMENTID"       , uptLot.get("PROCESSSEGMENTID"));
		childLot.put("PROCESSSEGMENTVERSION"  , uptLot.get("PROCESSSEGMENTVERSION"));
		childLot.put("PRODUCTIONORDERID"      , uptLot.get("PRODUCTIONORDERID"));
		childLot.put("PRIORITY"               , uptLot.get("PRIORITY"));
		childLot.put("DUEDATE"                , uptLot.get("DUEDATE"));
		childLot.put("TRACKINTIME"            , uptLot.get("TRACKINTIME"));
		childLot.put("TRACKINUSER"            , uptLot.get("TRACKINUSER"));
		childLot.put("TRACKOUTUSER"           , uptLot.get("TRACKOUTUSER"));
		childLot.put("TRACKOUTTIME"           , uptLot.get("TRACKOUTTIME"));
		childLot.put("LOTSTATE"               , uptLot.get("LOTSTATE"));
		childLot.put("PROCESSSTATE"           , uptLot.get("PROCESSSTATE"));
		childLot.put("WEEK"                   , uptLot.get("WEEK"));
		childLot.put("ISHOLD"                 , "N");
		childLot.put("ISREWORK"               , uptLot.get("ISREWORK"));
		childLot.put("DEFECTQTY"              , childLotQty);
		childLot.put("CARRIERID"              , "");
		childLot.put("CHILDLOTID"             , "");
		childLot.put("CREATEDQTY"             , childQty);
		childLot.put("EQUIPMENTID"            , "");
		childLot.put("LOTGROUPID"             , "");
		childLot.put("PARENTLOTID"            , lotInfo.get("LOTID"));
		childLot.put("QTY"                    , childQty);
		childLot.put("RECIPEDEFID"            , "");
		childLot.put("RECIPEDEFVERSION"       , "");
		childLot.put("WORKCOUNT"              , 0);
		childLot.put("REWORKCOUNT"            , 0);
		childLot.put("TOTALREWORKCOUNT"       , 0);
		childLot.put("ROOTLOTSTARTDATE"       , uptLot.get("ROOTLOTSTARTDATE"));
		childLot.put("SUBPROCESSDEFID"        , uptLot.get("SUBPROCESSDEFID"));
		childLot.put("SUBPROCESSDEFVERSION"   , uptLot.get("SUBPROCESSDEFVERSION"));
		childLot.put("STARTEDDATE"            , uptLot.get("STARTEDDATE"));
		childLot.put("STARTEDUSER"            , uptLot.get("STARTEDUSER"));
		childLot.put("ISFIRSTCREATELOT"       , "N");
		childLot.put("LOTINPUTQTY"            , null);
		childLot.put("ISHOLD"                 , "N");
		childLot.put("ISLOCKING"              , "N");
		childLot.put("ISDEFECTED"             , isDefected);
		childLot.put("ISSHRINKTEST"           , "N");
		childLot.put("DEFECTUNIT"             , uptLot.get("DEFECTUNIT"));
		childLot.put("UNIT"                   , uptLot.get("UNIT"));
		childLot.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		childLot.put("TXNHISTKEY", childLot.get("LASTTXNHISTKEY"));

		generalDao.addInsert(NAMESPACEWIP + ".insertPcmLot", childLot);
		generalDao.addInsert(NAMESPACEWIP + ".insertPcmLothistory", childLot);

		// CHILD LOT 추적 이력 정보 등록
		int childLotGeneaCnt = generalDao.addInsert(NAMESPACEWIP + ".selectPcmLotgenealCnt", childLot);
		String childDepth = childLotGeneaCnt == 0 ? "0" : String.valueOf(childLotGeneaCnt);

		childLotGeneal.put("LOTID"                 , childLot.get("LOTID"));
		childLotGeneal.put("ENTERPRISEID"          , childLot.get("ENTERPRISEID"));
		childLotGeneal.put("PLANTID"               , childLot.get("PLANTID"));
		childLotGeneal.put("AREAID"                , childLot.get("AREAID"));
		childLotGeneal.put("PRODUCTDEFID"          , childLot.get("PRODUCTDEFID"));
		childLotGeneal.put("PRODUCTDEFVERSION"     , childLot.get("PRODUCTDEFVERSION"));
		childLotGeneal.put("PROCESSDEFID"          , childLot.get("PROCESSDEFID"));
		childLotGeneal.put("PROCESSDEFVERSION"     , childLot.get("PROCESSDEFVERSION"));
		childLotGeneal.put("PROCESSPATHID"         , childLot.get("PROCESSPATHSTACK"));
		childLotGeneal.put("USERSEQUENCE"          , childLot.get("USERSEQUENCE"));
		childLotGeneal.put("PROCESSSEGMENTID"      , childLot.get("PROCESSSEGMENTID"));
		childLotGeneal.put("PROCESSSEGMENTVERSION" , childLot.get("PROCESSSEGMENTVERSION"));
		childLotGeneal.put("ROOTLOTID"             , childLot.get("ROOTLOTID"));
		childLotGeneal.put("DEPTH"                 , childDepth);
		childLotGeneal.put("CREATEDQTY"            , childLot.get("CREATEDQTY"));
		childLotGeneal.put("QTY"                   , childLot.get("QTY"));
		childLotGeneal.put("SOURCELOTID"           , childLot.get("PARENTLOTID"));
		childLotGeneal.put("PROCESSSTATE"          , childLot.get("PROCESSSTATE"));
		childLotGeneal.put("WORKCOUNT"             , childLot.get("WORKCOUNT"));
		childLotGeneal.put("LOTCREATETYPE"         , "SplitLot");

		generalDao.addInsert(NAMESPACEWIP + ".insertPcmLotgeneal", childLotGeneal);
		
		if (mainLotQty <= 0) {
			uptLot.put("PREVLOTSTATE", uptLot.get("LOTSTATE"));
			uptLot.put("LOTSTATE", LotState.Terminated);
		}

		uptLot.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		uptLot.put("TXNHISTKEY", uptLot.get("LASTTXNHISTKEY"));

		generalDao.addUpdate(NAMESPACEWIP + ".updatePcmLot", uptLot);
		generalDao.addInsert(NAMESPACEWIP + ".insertPcmLothistory", uptLot);
		

		
		String pattern = "^[0-9]*$"; // 숫자만
		String chData  = "";
		
	    if (Pattern.matches(pattern, childLotId.substring(0, 1)) == false) {
			   
		   chData = childLotId.substring(childLotId.length() - 3, childLotId.length() - 2);
	    }
	    else {
		   
		   chData = childLotId.substring(childLotId.length() - 1);
	    }
	    
		if (Pattern.matches(pattern, chData) == true) 
		{	
			paramLrl.put("LOTID"         , uptLot.get("LOTID"));
			paramLrl.put("LOCKINGSTATUS" , "Created");
	
			List<Map<String, Object>> LotreservelockingInfo = generalDao
					.addSelect(NAMESPACEWIP + ".selectPcmLotreservelocking", paramLrl);
			
			for (int k = 0; k < LotreservelockingInfo.size(); k++) {
				plocking = LotreservelockingInfo.get(k);
	
				clocking.put("LOTID", childLotId);
				clocking.put("ENTERPRISEID"         , plocking.get("ENTERPRISEID"));
				clocking.put("PLANTID"              , plocking.get("PLANTID"));
				clocking.put("PROCESSDEFID"         , plocking.get("PROCESSDEFID"));
				clocking.put("PROCESSDEFVERSION"    , plocking.get("PROCESSDEFVERSION"));
				clocking.put("PROCESSSEGMENTID"     , plocking.get("PROCESSSEGMENTID"));
				clocking.put("PROCESSSEGMENTVERSION", plocking.get("PROCESSSEGMENTVERSION"));
				clocking.put("LOCKINGTYPE"          , plocking.get("LOCKINGTYPE"));
				clocking.put("LOCKINGCODE"          , plocking.get("LOCKINGCODE"));
				clocking.put("LOCKINGSTATUS"        , plocking.get("LOCKINGSTATUS"));
				clocking.put("COMMENTS"             , plocking.get("COMMENTS"));
				clocking.put("DESCRIPTION"          , plocking.get("DESCRIPTION"));
				clocking.put("LOCKING_PROCESSSTATE", plocking.get("LOCKING_PROCESSSTATE"));
	
				generalDao.addInsert(NAMESPACEWIP + ".insertPcmLotreservelocking", clocking);
	
			}
		}

		psd.put("PROCESSSEGMENTID", uptLot.get("PROCESSSEGMENTID"));
		psd.put("PROCESSSEGMENTVERSION", uptLot.get("PROCESSSEGMENTVERSION"));

		Map<String, Object> processsegmentInfo = generalDao.addSelectOneMap(NAMESPACECOM + ".selectBasProcesssegment",	psd);

		String processSegmentClassId_Middle = StringUtil.Object2String(processsegmentInfo.get("PROCESSSEGMENTCLASSID"));

		psc.put("PROCESSSEGMENTCLASSID", processSegmentClassId_Middle);
		Map<String, Object> processsegmentclassInfo = generalDao
				.addSelectOneMap(NAMESPACECOM + ".selectBasProcesssegmentclass", psc);

		String processSegmentClassId = StringUtil
				.Object2String(processsegmentclassInfo.get("PARENTPROCESSSEGMENTCLASSID"));

		if (!processSegmentClassId.equals("80") && !isDefected.equals("Y")) {
			this.copyLotRouting(dto, StringUtil.Object2String(lotInfo.get("LOTID")), childLotId);
		}

		return wipService.validateLotInfo(childLotId);
	}
	
	private void copyLotRouting(UiMapDto dto, String lotId, String childLotId) throws Exception {
		Map<String, Object> lotInfo = wipService.validateLotInfo(lotId);
		Map<String, Object> childLotInfo = wipService.validateLotInfo(childLotId);
		Map<String, Object> paramDef = new HashMap<>();

		paramDef.put("PROCESSDEFID", lotInfo.get("PROCESSDEFID"));
		paramDef.put("PROCESSDEFVERSION", lotInfo.get("PROCESSDEFVERSION"));

		Map<String, Object> processdefinitionInfo = generalDao
				.addSelectOneMap(NAMESPACECOM + ".selectBasProcessdefinition", paramDef);

		if (processdefinitionInfo == null || "Y".equals(childLotInfo.get("ISDEFECTED"))
				|| (!"Lot".equals(processdefinitionInfo.get("PROCESSDEFTYPE"))
						&& !"MIG".equals(lotInfo.get("DESCRIPTION"))
						&& !lotId.equals(processdefinitionInfo.get("PROCESSDEFID")))) {
			return;
		}

		Map<String, Object> map = new HashMap<>();
		map.put("P_LOTID", lotId);
		map.put("P_CHILDLOTID", childLotId);
		//부모랑 버젼은 같음
		map.put("P_PROCESSDEFVERSION", childLotInfo.get("PROCESSDEFVERSION"));
				
		//ROUTING 정의 복사
		generalDao.addInsert(NAMESPACEWIP + ".insertBasProcessDefinitionCopy", map);
		
		//ROUTING PATH 복제
		generalDao.addInsert(NAMESPACEWIP + ".insertBasProcessPathCopy", map);
		
		//BILLOFMATERIAL 복제
		generalDao.addInsert(NAMESPACEWIP + ".insertBasBillOfMaterialCopy", map);
		
		//BILLOFRESOURCE 복제
		generalDao.addInsert(NAMESPACEWIP + ".insertBasBillOfResourceCopy", map);
		
		//PCM_LOTWORKRESULT 업데이트
		generalDao.addInsert(NAMESPACEWIP + ".updatePcmLotworkresultCopy", map);
		
		
		Map<String, Object> paramPath = new HashMap<>();

		paramPath.put("PROCESSDEFID"      , childLotId);
		paramPath.put("PROCESSDEFVERSION" , childLotInfo.get("PROCESSDEFVERSION"));
		paramPath.put("PROCESSSEGMENTID"  , childLotInfo.get("PROCESSSEGMENTID"));
		
		Map<String, Object> newProcessPathData = generalDao.addSelectOneMap(NAMESPACECOM + ".selectBasProcesspathList", paramPath);
		
		childLotInfo.put("PROCESSDEFID", childLotId);
		
		Stack<String> stack = StringUtil.convertStringToStack(childLotInfo.get("PROCESSPATHSTACK").toString(), ".");
		stack.set(0, newProcessPathData.get("PROCESSPATHID").toString());
			
		childLotInfo.put("PROCESSPATHID", StringUtil.Object2String(newProcessPathData.get("PROCESSPATHID")));
		childLotInfo.put("PROCESSPATHSTACK", StringUtil.convertStackToString(stack, "."));
		childLotInfo.put("USERSEQUENCE", newProcessPathData.get("USERSEQUENCE"));
		
		childLotInfo.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		childLotInfo.put("TXNHISTKEY", childLotInfo.get("LASTTXNHISTKEY"));
		
		generalDao.addUpdate(NAMESPACEWIP + ".updatePcmLot", childLotInfo);
		generalDao.addInsert(NAMESPACEWIP + ".insertPcmLothistory", childLotInfo);

		// 현재공정 실적의 공정정보 업데이트
		
		Map<String, Object> param = new HashMap<>();
		param.put("LOTID"             , childLotId);
		param.put("PROCESSSEGMENTID"  , childLotInfo.get("PROCESSSEGMENTID"));
		param.put("WORKCOUNT"         , childLotInfo.get("WORKCOUNT"));
		param.put("PROCESSDEFID"      , childLotInfo.get("PROCESSDEFID"));
		param.put("PROCESSDEFVERSION" , childLotInfo.get("PROCESSDEFVERSION"));
		param.put("USERSEQUENCE"      , childLotInfo.get("USERSEQUENCE"));
		param.put("PROCESSPATHID"     , StringUtil.convertStringToStack(childLotInfo.get("PROCESSPATHSTACK").toString(), ".").peek());
		param.put("PROCESSPATHSTACK"  , childLotInfo.get("PROCESSPATHSTACK"));

		generalDao.update(NAMESPACEWIP + ".updateLotworkresult", param);		
	}

	private void saveLotWorker(UiMapDto dto, Map<String, Object> lotInfo, String userList)  throws Exception
	{
		Map<String, Object> paramLotWork     = new HashMap<>();
		Map<String, Object> paramUser        = new HashMap<>();
		int result = 0;
		
		for (String userId : userList.split(","))
		{
			paramLotWork.put("LOTID", lotInfo.get("LOTID"));
			paramLotWork.put("TXNHISTKEY", TxnHistKey.getTxnHistKey());
			Map<String, Object> LotWorkInfo =  generalDao.addSelectOneMap(NAMESPACECOM + ".selectPcmLotworker", paramLotWork);
			
			if (LotWorkInfo != null)
			{
				throw new BizException("InValidData002", String.format("TxnHistKey = %s LotId = %s", TxnHistKey.getTxnHistKey(), lotInfo.get("LOTID")));
			}else {
				LotWorkInfo = new HashMap<String, Object>();
			}
			
			Map<String, Object> processDefInfo = wipService.getProcessDefinitionInfo(lotInfo);
			
			String processDefId      = StringUtil.Object2String(processDefInfo.get("PROCESSDEFID")) ;
			String processDefVersion = StringUtil.Object2String(processDefInfo.get("PROCESSDEFVERSION")) ;
			
			String processPathId = StringUtil.Object2String(wipService.processPathInfo(lotInfo, processDefId, processDefVersion).get("PROCESSPATHID"));
			
			LotWorkInfo.put("LOTID", lotInfo.get("LOTID"));
			LotWorkInfo.put("ENTERPRISEID"          , lotInfo.get("ENTERPRISEID"));
			LotWorkInfo.put("PLANTID"               , lotInfo.get("PLANTID"));
			LotWorkInfo.put("AREAID"                , lotInfo.get("AREAID"));
			LotWorkInfo.put("PRODUCTDEFID"          , lotInfo.get("PRODUCTDEFID"));
			LotWorkInfo.put("PRODUCTDEFVERSION"     , lotInfo.get("PRODUCTDEFVERSION"));
			LotWorkInfo.put("PROCESSDEFID"          , lotInfo.get("PROCESSDEFID"));
			LotWorkInfo.put("PROCESSDEFVERSION"     , lotInfo.get("PROCESSDEFVERSION"));
			LotWorkInfo.put("PROCESSPATHID"         , processPathId);
			LotWorkInfo.put("USERSEQUENCE"          , lotInfo.get("USERSEQUENCE"));
			LotWorkInfo.put("PROCESSSEGMENTID"      , lotInfo.get("PROCESSSEGMENTID"));
			LotWorkInfo.put("PROCESSSEGMENTVERSION" , lotInfo.get("PROCESSSEGMENTVERSION"));
			LotWorkInfo.put("WORKCOUNT"             , lotInfo.get("WORKCOUNT"));
			LotWorkInfo.put("USERID"                , userId);
			
			paramUser.put("USER_ID", userId);
			Map<String, Object> usersInfo =  generalDao.addSelectOneMap(NAMESPACECOM + ".selectCmdUsers", paramUser);
			
			if(usersInfo == null)
			{
				LotWorkInfo.put("WORKERNAME"        , userId);
			}
			else
			{
				LotWorkInfo.put("WORKERNAME"        , usersInfo.get("USER_NM"));
			}
			
			result +=  generalDao.addUpdate(NAMESPACEWIP + ".insertPcmLotworker", LotWorkInfo);
		}
		
		putDataSetMap(dto, result);
		
	}
}