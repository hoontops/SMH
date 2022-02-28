package smh.pcm.service;

import com.nbdf.com.StringUtils;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.eclipse.core.internal.filesystem.local.Convert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMConstant.LotProcessState;
import smh.pcm.service.PCMConstant.LotState;
import smh.qam.service.QAMCommonService;

/**
 * @file: PCM01500ServiceImpl.java
* @Package: smh.bas.service
 * @Project name: IFC MES시스템 구축
 * @Type name: BAS01500ServiceImpl
 * @Company: Built1
 * @Create Date: 2021.2.1
 * @Author:
 * @File Version: v1.0
 *
 *       << 개정이력(Modification Information) >>
 *
 *       수정일 수정자 수정내용 ------------ ------ ---------- 2021. 3. 10. 김애리 최초 생성
 */
@Service
public class PCM01500ServiceImpl extends AbstractNbdfService implements PCM01500Service {

	public static final String NAMESAPCE = "smh.pcm.dao.PCM01500Dao";
	public static final String NAMESAPCECOM = "smh.pcm.dao.PCMCommonDao";

	@Autowired
	private GeneralDao generalDao;

	@Autowired 
    private QAMCommonService qamService;
	
	public static final String NAMESPACE1 = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";

	@Autowired
	private com.nbdf.cmd.cm.cmsy.service.CMSY03100Service serviceDictionary;

	/**
	 * @fn
	 * @brief : 입고검사 / 자주검사 리스트
	 * @remark
* @see smh.pcm.service.PCM01500Service#SelectLotInspectionList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void SelectLotInspectionList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);

		if (param.get("PRODUCTDEFID") != null) {
			String[] splitProductID = param.get("PRODUCTDEFID").toString().split(",");
			param.put("PRODUCTDEFID", splitProductID);
		}

		if (param.get("PROCESSSEGMENTID") != null) {
			String[] splitSegmentID = param.get("PROCESSSEGMENTID").toString().split(",");
			param.put("PROCESSSEGMENTID", splitSegmentID);
		}

		if (param.get("LOTID") != null) {
			String[] splitLotID = param.get("LOTID").toString().split(",");
			param.put("LOTID", splitLotID);
		}

		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectLotInspectionList", param));
	}

	/**
	 * @fn
	 * @brief : NCR 리스트
	 * @remark
* @see smh.pcm.service.PCM01500Service#SelectNcrStandardOfSelfInspection(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void SelectNcrStandardOfSelfInspection(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectNcrStandardOfSelfInspection", param));
	}

	/**
	 * @fn
	 * @brief : 불량 팝업 리스트
	 * @remark
* @see smh.pcm.service.PCM01500Service#SelectDefectCodeByProcess(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void SelectDefectCodeByProcess(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".SelectDefectCodeByProcess", param));
	}

	/**
	 * @fn
	 * @brief : 입고검사, 자주검사 등록
	 * @remark : 공정 인수 전 입고검사 결과를 등록하는 화면, 결과에 따라 NCR을 발행
* @see smh.pcm.service.PCM01500Service#saveLotIncommingInspection(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	public void saveLotIncommingInspection(UiMapDto dto) throws Exception {
		int result = 0;
		Map<String, Object> responseRow;
		List<Map<String, Object>> responseDt = new java.util.ArrayList<Map<String, Object>>();
		;

		DataSetMap paramMapSearch = getParametersDataSetMap(dto, "ds_search");
		DataSetMap paramMapLotList = getParametersDataSetMap(dto, "ds_LotList"); // dtInsResult
		DataSetMap paramMapLotQty = getParametersDataSetMap(dto, "ds_LotQty");
		DataSetMap paramMapInspection = getParametersDataSetMap(dto, "ds_InspectionList"); // dtInsDefect

		Map<String, Object> paramSearch = paramMapSearch.get(0);
		Map<String, Object> paramLotList = paramMapLotList.get(0);
		Map<String, Object> paramLotQty1 = paramMapLotQty.get(1);// PCS
		Map<String, Object> paramInspection; // insDefectRow

		String inspectionClassId = paramSearch.get("INSPECTIONCLASSID").toString();
		String enterpriseId = paramSearch.get("ENTERPRISEID").toString();
		String plantId = paramSearch.get("PLANTID").toString();
		String inspectionUser = paramSearch.get("INS_USERID").toString();
		Double inspectionQty = Double.parseDouble(paramLotQty1.get("INSPECTIONQTY").toString());
		Double defectQty = Double.parseDouble(paramLotQty1.get("DEFECTQTY").toString());
		String userId = paramSearch.get("CREATOR").toString(); // eleventh :
																// null?
		String reinspectReason = paramSearch.get("REINS_REASON").toString();
		String inspectionResult = "OK";
		String languageType = paramSearch.get("LANGUAGETYPE").toString();
		Double totalDefectQty = 0D;

		List<Map<String, Object>> systemDate = generalDao.addSelect(NAMESPACE1 + ".selectCurrentSystemTime", "");
		String sToday = systemDate.get(0).get("TODATE").toString();
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmmss");
		Date nowDate = dateFormat.parse(sToday);

		List<Map<String, Object>> lot = LotValidation(paramLotList.get("LOTID").toString(), inspectionClassId,
				languageType);
		String txnGroupHistKey = TxnHistKey.getTxnGroupHistKey();
		
		String maxDegree = getMaxDegree(paramLotList, inspectionClassId, lot.get(0));
		
		/**************************************************************
		 * INSPECTION DEFECT && LOT 처리 [S]
		 **************************************************************/
		for (int i = 0, n = paramMapInspection.size(); i < n; i++) {
			paramInspection = paramMapInspection.get(i);
			// 불량 total 수량
			totalDefectQty += Double.parseDouble(paramInspection.get("QTY").toString());

			if(totalDefectQty > 0) {
				// INSPECTION DEFECT 처리
				result += getInspectionDefectUpateData(dto, paramInspection, lot.get(0), inspectionClassId, nowDate, userId,
						inspectionQty, txnGroupHistKey, maxDegree);
			
				String actionType = "";
				Boolean isSendEmail = false;
				String decisionDegree = paramInspection.get("DECISIONDEGREE").toString();
				actionType = getActionTypeSelfAndFinish(paramInspection, inspectionClassId, decisionDegree, enterpriseId,
						plantId);
				if (!StringUtils.isEmpty(actionType)) {
					result++;
					//String actionType, Map<String, Object> map, String lotId, String abnocrType, String enterpriseId, String plantId, String inspDegree
					isSendEmail = qamService.doActionAndGetIsSendEmail(actionType, paramInspection, paramInspection.get("LOTID").toString(), inspectionClassId
							,enterpriseId, plantId, null);
					String lotLocking = "";
					// 2020-01-13 강유라 locking여부 다국어 적용
					String dictionaryname = serviceDictionary.selectDictionaryName("ISLOCKING");
					DecimalFormat df = new DecimalFormat("#,##0.00");
					if (isSendEmail == true) {
						lotLocking = actionType.contains("LockingLot") == true ? "Y" : "N";
						responseRow = new HashMap<String, Object>();
						responseRow.put("ISSENDEMAIL", isSendEmail);
						responseRow.put("ISLOCKING", lotLocking);
						responseRow.put("DEFECTCODENAME", paramInspection.get("DEFECTCODENAME") + "("
								+ inspectionQty.toString() + "/" + paramInspection.get("QTY") + "/"
								+ df.format(
										(Double.parseDouble(paramInspection.get("QTY").toString()) / inspectionQty) * 100)
								+ "/" + dictionaryname + ": " + lotLocking + ")");
	
						responseDt.add(responseRow);
					}
	
				}
			}

		} // INSPECTION DEFECT && LOT 처리 [E]

		/***********************************************************
		 * PCM_INSPECTIONWORKER, QAM_INSPECTIONRESULT , PCM_LOTWORKRESULT 처리
		 ***********************************************************/
		if (totalDefectQty > 0) {
			inspectionResult = "NG";
		}

		// PCM_INSPECTIONWORKER, QAM_INSPECTIONRESULT 처리
		result += getInspectionResultUpdateData(paramLotList, inspectionResult, inspectionClassId, enterpriseId,
				plantId, inspectionUser, nowDate, userId, inspectionQty, defectQty, reinspectReason, lot.get(0),
				txnGroupHistKey,maxDegree);
		// PCM_LOTWORKRESULT 처리
		result += getUpdateLotWorkResultData(paramMapLotList, inspectionResult, inspectionClassId, lot.get(0), userId);

		responseRow = new HashMap<String, Object>();
		responseRow.put("RESULTCNT", result);
		responseDt.add(responseRow);

		putDataSetMap(dto, responseDt);
	}

	
	private String getMaxDegree(Map<String, Object> paramLotList, String inspectionClassId, Map<String, Object> lot) {
		
		String lotId = paramLotList.get("LOTID").toString();
		
		String maxDegree = "1";
		String resourceType = inspectionClassId;
		// 검사 이력이 존재하면 Degree 차수를 + 1
		HashMap<String, Object> propertyMap = new HashMap<>();
		propertyMap.put("RESOURCEID", lotId);
		propertyMap.put("RESOURCETYPE", resourceType);
		propertyMap.put("INSPECTIONDEFID", inspectionClassId);
		propertyMap.put("INSPECTIONDEFVERSION", "*");
		propertyMap.put("PROCESSSEGMENTID", paramLotList.get("PROCESSSEGMENTID"));
		propertyMap.put("PROCESSSEGMENTVERSION", paramLotList.get("PROCESSSEGMENTVERSION"));

		// Get Max Degree
		List<Map<String, Object>> extInspectionDefectList = generalDao
				.addSelect(NAMESAPCE + ".selectMaxDegreeByInspection", propertyMap);
		if (extInspectionDefectList != null && !extInspectionDefectList.isEmpty()) {
			maxDegree = (String) extInspectionDefectList.get(0).get("DEGREE1");
			int iDegree = StringUtils.isEmpty(maxDegree) ? 0 : Integer.parseInt(maxDegree);
			iDegree += 1;
			maxDegree = Integer.toString(iDegree);
		}

		return maxDegree;
	}
	
	/**
	 * @param lot
	 * @fn
	 * @brief : PCM_INSPECTIONWORKER, QAM_INSPECTIONRESULT 처리
	 * @remark :
* @see smh.pcm.service.PCM01500Service#getInspectionResultUpdateData(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	private int getInspectionResultUpdateData(Map<String, Object> paramLotList, String inspectionResult,
			String inspectionClassId, String enterpriseId, String plantId, String inspectionUser, Date nowDate,
			String userId, Double inspectionQty, Double defectQty, String reinspectReason, Map<String, Object> lot,
			String txnGroupHistKey, String maxDegree) {
		// TODO Auto-generated method stub
		int result = 0;
		String lotId = lot.get("LOTID").toString();

		
		HashMap<String, Object> insResultMap = new HashMap<>();
		insResultMap.put("TXNGROUPHISTKEY", txnGroupHistKey);
		insResultMap.put("TXNHISTKEY", TxnHistKey.getTxnHistKey());
		insResultMap.put("RESOURCETYPE", inspectionClassId);
		insResultMap.put("RESOURCEID", lot.get("LOTID").toString());
		insResultMap.put("PROCESSRELNO", lot.get("PROCESSSEGMENTID").toString());
		insResultMap.put("INSPECTIONDEFID", inspectionClassId);
		insResultMap.put("INSPECTIONDEFVERSION", "*");
		insResultMap.put("DEGREE", maxDegree);
		insResultMap.put("ENTERPRISEID", enterpriseId);
		insResultMap.put("PLANTID", plantId);
		insResultMap.put("AREAID", lot.get("AREAID").toString());
		insResultMap.put("INSPECTIONTYPE", inspectionClassId);
		insResultMap.put("PRODUCTDEFID", lot.get("PRODUCTDEFID").toString());
		insResultMap.put("PRODUCTDEFVERSION", lot.get("PRODUCTDEFVERSION").toString());
		insResultMap.put("PROCESSDEFID", lot.get("PROCESSDEFID").toString());
		insResultMap.put("PROCESSDEFVERSION", lot.get("PROCESSDEFVERSION").toString());
		insResultMap.put("PROCESSSEGMENTID", lot.get("PROCESSSEGMENTID").toString());
		insResultMap.put("PROCESSSEGMENTVERSION", lot.get("PROCESSSEGMENTVERSION").toString());
		insResultMap.put("INSPECTIONQTY", (int) Math.round(inspectionQty));
		insResultMap.put("SAMPLEQTY", (int) Math.round(inspectionQty));
		insResultMap.put("SPECOUTQTY", (int) Math.round(defectQty));
		insResultMap.put("INSPECTIONRESULT", inspectionResult);
		insResultMap.put("INSPECTIONUSER", inspectionUser);
		insResultMap.put("INSPECTIONDATE", nowDate);
		insResultMap.put("WORKCOUNT", lot.get("WORKCOUNT").toString());
		insResultMap.put("MODIFIER", userId);
		insResultMap.put("CREATOR", userId);
		insResultMap.put("TXNID", "PCM01500Service");

		result += generalDao.insert(NAMESAPCE + ".insertQamInspectionResult", insResultMap);

		// PCM_INSPECTIONWORKER 처리
		result += getInspectionWokerUpdateData(inspectionUser, lotId, inspectionClassId, enterpriseId, plantId,
				maxDegree, lot, txnGroupHistKey, userId);
		return result;
	}

	/**
	 * @fn
	 * @brief : PCM_INSPECTIONWORKER 처리
	 * @remark :
* @see smh.pcm.service.PCM01500Service#getInspectionWokerUpdateData(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	private int getInspectionWokerUpdateData(String inspectionUser, String lotId, String inspectionClassId,
			String enterpriseId, String plantId, String maxDegree, Map<String, Object> lot, String txnGroupHistKey,
			String userId) {
		int result = 0;

		HashMap<String, Object> workerMap = new HashMap<>();
		workerMap.put("TXNGROUPHISTKEY", txnGroupHistKey);
		workerMap.put("TXNHISTKEY", TxnHistKey.getTxnHistKey());
		workerMap.put("RESOURCETYPE", inspectionClassId);
		workerMap.put("RESOURCEID", lot.get("LOTID").toString());
		workerMap.put("PROCESSRELNO", lot.get("PROCESSSEGMENTID").toString());
		workerMap.put("INSPECTIONDEFID", inspectionClassId);
		workerMap.put("DEGREE", maxDegree);
		workerMap.put("ENTERPRISEID", enterpriseId);
		workerMap.put("PLANTID", plantId);
		workerMap.put("WORKCOUNT", Double.parseDouble(lot.get("WORKCOUNT").toString()));
		workerMap.put("INSPECTIONUSER", inspectionUser);
		workerMap.put("PROCESSDEFID", lot.get("PROCESSDEFID").toString());
		workerMap.put("PROCESSDEFVERSION", lot.get("PROCESSDEFVERSION").toString());
		workerMap.put("PROCESSSEGMENTID", lot.get("PROCESSSEGMENTID").toString());
		workerMap.put("PROCESSSEGMENTVERSION", lot.get("PROCESSSEGMENTVERSION").toString());
		workerMap.put("MODIFIER", userId);
		workerMap.put("CREATOR", userId);

		result += generalDao.insert(NAMESAPCE + ".insertPcmInspectionWorker", workerMap);

		return result;
	}

	private int getUpdateLotWorkResultData(DataSetMap paramMapLotList, String inspectionResult,
			String inspectionClassId, Map<String, Object> lot, String userId) {

		int result = 0;

		HashMap<String, Object> lotWorkerMap = new HashMap<>();
		lotWorkerMap.put("LOTID", lot.get("LOTID").toString());
		lotWorkerMap.put("PROCESSSEGMENTID", lot.get("PROCESSSEGMENTID").toString());
		lotWorkerMap.put("WORKCOUNT", lot.get("WORKCOUNT").toString());

		if (inspectionClassId.equals("SelfInspectionTake")) {
			//lotWorkerMap.put("SELFTAKEINSPRESULT", inspectionResult.equals("OK") ? "Y" : "N"); 
			lotWorkerMap.put("SELFTAKEINSPRESULT", "Y");//전태선 과장님 요구 무조건 Y 로 함. 2021-05-14
		} else {
			//lotWorkerMap.put("SELFSHIPINSPRESULT", inspectionResult.equals("OK") ? "Y" : "N");
			lotWorkerMap.put("SELFSHIPINSPRESULT", "Y");//전태선 과장님 요구 무조건 Y 로 함. 2021-05-14
		}

		lotWorkerMap.put("MODIFIER", userId);

		result += generalDao.update(NAMESAPCE + ".updatePcmLotWorkResult", lotWorkerMap);

		return result;
	}

	private String getActionTypeSelfAndFinish(Map<String, Object> paramInspection, String inspectionClassId,
			String decisionDegree, String enterpriseId, String plantId) {
		HashMap<String, Object> propertyMap = new HashMap<>();
		propertyMap.put("INSPECTIONCLASSID", inspectionClassId);
		propertyMap.put("NCRDECISIONDEGREE", decisionDegree);
		propertyMap.put("ENTERPRISEID", enterpriseId);
		propertyMap.put("PLANTID", plantId);
		List<Map<String, Object>> ncrStandard = generalDao.addSelect(NAMESAPCE + ".SelectNCRCheckBasis", propertyMap);

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
			List<Map<String, Object>> actionTypeString = generalDao.addSelect(NAMESAPCE + ".selectInspResultActionType",
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

	/**
	 * @fn
	 * @brief : INSPECTION DEFECT 처리
	 * @remark :
* @see smh.pcm.service.PCM01500Service#getInspectionDefectUpateData(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	private int getInspectionDefectUpateData(UiMapDto dto, Map<String, Object> paramInspection, Map<String, Object> lot,
			String inspectionClassId, Date nowDate, String userId, Double inspectionQty, String txnGroupHistKey, String maxDegree) {

		int result = 0;
		String resourceType = inspectionClassId;
		String fileResourceId = "";
		if(paramInspection.get("IMAGERESOURCEID") != null) 
			fileResourceId = paramInspection.get("IMAGERESOURCEID").toString();

		HashMap<String, Object> defectMap = new HashMap<>();
		defectMap.put("TXNGROUPHISTKEY", txnGroupHistKey);
		defectMap.put("TXNHISTKEY", paramInspection.get("TXNHISTKEY").toString());
		defectMap.put("RESOURCETYPE", inspectionClassId);
		defectMap.put("RESOURCEID", paramInspection.get("LOTID").toString());
		defectMap.put("DEFECTCODE", paramInspection.get("DEFECTCODE").toString());
		defectMap.put("PROCESSRELNO", lot.get("PROCESSSEGMENTID").toString());
		defectMap.put("DEFECTQTY", paramInspection.get("QTY").toString());

		if(paramInspection.get("SPLITCONSUMABLEDEFIDVERSION") != null && StringUtils.isEmpty(paramInspection.get("SPLITCONSUMABLEDEFIDVERSION").toString())==false){
			String reasonProductDefId = paramInspection.get("SPLITCONSUMABLEDEFIDVERSION").toString().split("[|]")[0];
			String reasonProductDefVersion = paramInspection.get("SPLITCONSUMABLEDEFIDVERSION").toString().split("[|]")[1];
			
			defectMap.put("REASONCONSUMABLEDEFID", reasonProductDefId);
			defectMap.put("REASONCONSUMABLEDEFVERSION", reasonProductDefVersion);
			
		}		
		
		if(paramInspection.get("REASONCONSUMABLELOTID") != null) 
			defectMap.put("REASONCONSUMABLELOTID", paramInspection.get("REASONCONSUMABLELOTID").toString());
		if(paramInspection.get("REASONSEGMENTID") != null) 
			defectMap.put("REASONSEGMENTID", paramInspection.get("REASONPROCESSSEGMENTID").toString());
		if(paramInspection.get("REASONAREAID") != null) 
			defectMap.put("REASONAREAID", paramInspection.get("REASONAREAID").toString());
		
		defectMap.put("INSPECTIONQTY", inspectionQty);
		defectMap.put("SAMPLEQTY", inspectionQty);
		defectMap.put("FILERESOURCEID", fileResourceId);

		if (Double.parseDouble(paramInspection.get("QTY").toString()) > 0) {
			defectMap.put("INSPECTIONRESULT", "NG");
		} else {
			defectMap.put("INSPECTIONRESULT", "OK");
		}

		defectMap.put("QCSEGMENTID", paramInspection.get("QCSEGMENTID").toString());
		defectMap.put("DEGREE", maxDegree);
		defectMap.put("MODIFIER", userId);
		defectMap.put("CREATOR", userId);
		defectMap.put("TXNID", "PCM01500Service");

		result += generalDao.insert(NAMESAPCE + ".insertQamInspectiondefect", defectMap);

		return result;
	}

	private List<Map<String, Object>> LotValidation(String lotID, String inspectionClassId, String languageType)
			throws Exception {

		HashMap<String, Object> propertyMap = new HashMap<>();
		propertyMap.put("LOTID", lotID);
		List<Map<String, Object>> list = generalDao.addSelect(NAMESAPCECOM + ".selectPcmLotList", propertyMap);

		if (list == null || list.size() == 0) {
			throw new BizException("NotExistLot", lotID);
		}

		Map<String, Object> lotData = list.get(0);
		
		String lotState = list.get(0).get("LOTSTATE").toString();
		if (!lotState.equals(LotState.InProduction)) {
			String args = "InProduction LOT ID : " + lotID;
			throw new BizException("ValidLotState", args);
		}

		if (lotData.get("ISHOLD").toString().equals("Y")) {
			throw new BizException("InHoldState", lotID);
		}

		// Check Locking
		if(lotData.get("ISLOCKING").toString().equals("Y"))
		{
			// 해당 Lot이 Locking 상태입니다. {0}
			throw new BizException("InLockingState", lotID);
		}
					
		Map<String, Object> currStep = generalDao.selectOne(NAMESAPCE + ".selectStepInfo", propertyMap);
		
		String procState = list.get(0).get("PROCESSSTATE").toString();
		switch (inspectionClassId) {
		case "SelfInspectionTake":
			
				
//			if (!procState.equals(currStep.get("FIRSTSTEP").toString())) {
			if (!procState.equals(LotProcessState.WaitForReceive)) {
				// 해당 Lot이 인수 상태가 아닙니다.
				String dictionaryname = serviceDictionary
						.selectDictionaryName(LotProcessState.WaitForReceive.toUpperCase());

				String args = dictionaryname + ",LOT ID : " + lotID;
				throw new BizException("ValidLotState", args);
			}
			break;
		case "SelfInspectionShip":
			if (!procState.equals(currStep.get("LASTSTEP").toString())) {
				// 해당 Lot이 인계 상태가 아닙니다.
				String dictionaryname = serviceDictionary
						.selectDictionaryName(LotProcessState.WaitForSend.toUpperCase());

				String args = dictionaryname + ",LOT ID : " + lotID;
				throw new BizException("ValidLotState", args);
			}
			break;
		}

		return list;
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

}