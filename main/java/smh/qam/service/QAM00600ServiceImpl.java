package smh.qam.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import egovframework.rte.fdl.string.EgovObjectUtil;

import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import smh.commons.TxnHistKey;
import smh.pcm.service.PCMWipService;
import smh.pcm.service.PCMConstant.AreaOwnType;
import smh.pcm.service.PCMConstant.LotState;
import smh.pcm.service.PCMConstant.TransitType;
import smh.pcm.service.PCMOspService;

/**
 * @file : QAM00600ServiceImpl.java
 * @Package : smh.qam.service
 * @Project name: IFC MES시스템 구축
 * @Type name : QAM00600ServiceImpl
 * @Company : Built1
 * @Create Date : 2021.03.26
 * @Author : yanghee.kim
 * @File Version: v1.0
 *
 *       << 개정이력(Modification Information) >>
 *
 *       수정일 수정자 수정내용 
 *---------- ------------ ---------- 
 * 2021.03.26 yanghee.kim
 *       최초 생성
 *
 */
@Service
public class QAM00600ServiceImpl extends AbstractNbdfService implements QAM00600Service {

	public static final String NAMESPACE = "smh.qam.dao.QAM00600Dao";
	public static final String NAMEQAM01900 = "smh.qam.dao.QAM01900Dao";
	public static final String NAMEPOP = "smh.qam.dao.QAMPopupDao";	
	public static final String NAMESPACE1 = "com.nbdf.cmd.cm.cmsa.dao.CMSA00302Dao";
	public static final String NAMEQAM01100 = "smh.qam.dao.QAM01100Dao";

	@Autowired
	private GeneralDao generalDao;
	@Autowired
	private QAMCommonService qamService;
	@Autowired
	private QAMInspectionResultServiceImpl qamRsltService;
	@Autowired
	private PCMWipService wipService;
	@Autowired
	private PCMOspService ospService;
	@Autowired
	private QAM01100Service qam01100Service;
	
	private String gLotId;// resourceId - LotId
	private String gProcessrelNo;// processrelNo - LotHistkey + Degree
	private String gResourceType = "ProcessInspection";// resourceType
	private String gToAreaId;// 다음 작업장
	private String gToResourceId;// 다음 자원
	private Double gDefectQty;
	private Double gDefectQtyPnl;
	private String gAbnormalNO;// 이상발생 시퀀스
	private String gAbnormalType = "ProcessInspection";// 이상발생 타입
	private String gDegree = null;
	private String gTxnGroupHistKey; //
	
	private String gEnterpriseId = "";
	private String gPlantId = "";
	private String gActionType = "";
	private Boolean gIsSendEmail = false;
  	
	/**
	 * @fn : selectQcOspRequestInspRsltList
	 * @brief : (Override method) (결과등록)외주입고품 조회
	 * @Method Name : selectQcOspRequestInspRsltList
	 * @remark : 상세설명
* @see smh.qam.service.QAM00600Service#selectQcOspRequestInspRsltList(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	@Override
	public void selectQcOspRequestInspRsltList(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectQcOspRequestInspRsltList", param));
	}

	/**
	 * @fn : selectComboItemLIst
	 * @brief : (Override method) 콤보 Item 조회
	 * @Method Name : selectComboItemLIst
	 * @remark : 상세설명
* @see smh.qam.service.QAM00600Service#selectComboItemLIst(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	@Override
	public void selectComboItemLIst(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMEPOP + ".selectCodeList", param), "output1");
		putDataSetMap(dto, generalDao.addSelect(NAMEPOP + ".selectGetDefectReasonConsumableLot", param), "output2");
	}

	/**
	 * @fn : selectLotInfoByLotIDOSP
	 * @brief : (Override method)Lot정보 조회
	 * @Method Name : selectLotInfoByLotIDOSP
	 * @remark : 상세설명
* @see smh.qam.service.QAM00600Service#selectLotInfoByLotIDOSP(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	@Override
	public void selectLotInfoByLotIDOSP(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectProcessDefTypeByProcess", param), "output1");
		
		List<Map<String, Object>> lotList = generalDao.addSelect(NAMESPACE + ".selectLotInfoByLotIDOSP", param);
		putDataSetMap(dto, lotList, "output2");
		
		String strProcessSegmentId = (String) lotList.get(0).get("PROCESSSEGMENTID");		
		param.put("PROCESSSEGMENTID", strProcessSegmentId);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectAQLBasisInfo", param), "output3");
		
		String strProductDefId = (String) lotList.get(0).get("PRODUCTDEFID");		
		param.put("PRODUCTDEFID", strProductDefId);
		putDataSetMap(dto, generalDao.addSelect(NAMEQAM01100 + ".selectQamLotByLotId", param), "output4");
	}

	/**
	 * @fn : selectOSPInspectionAll
	 * @brief : (Override method)탭 조회
	 * @Method Name : selectOSPInspectionAll
	 * @remark : 상세설명
* @see smh.qam.service.QAM00600Service#selectOSPInspectionAll(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	@Override
	public void selectOSPInspectionAll(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectOSPInspectionExterior", param), "output1");
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectOSPInspectionMeasure", param), "output2");
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectOSPMeasureByInspItem", param), "output3");
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectOSPInspDefect", param), "output4");
		
	}

	/**
	 * @fn : selectOSPInspectionExterior
	 * @brief : (Override method)탭1. 외관검사 및 탭3. 불량(폐기) 처리 조회
	 * @Method Name : selectOSPInspectionExterior
	 * @remark : 상세설명
* @see smh.qam.service.QAM00600Service#selectOSPInspectionExterior(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	@Override
	public void selectOSPInspectionExterior(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectOSPInspectionExterior", param));
	}

	/**
	 * @fn : selectOSPInspectionMeasure
	 * @brief : (Override method) 탭2. 측정검사 조회
	 * @Method Name : selectAQLCheckBasisInfo
	 * @remark : 상세설명
* @see smh.qam.service.QAM00600Service#selectOSPInspectionMeasure(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	@Override
	public void selectOSPInspectionMeasure(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectOSPInspectionMeasure", param), "output1");
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectOSPMeasureByInspItem", param), "output2");
	}

	/**
	 * @fn : selectAQLCheckBasisInfo
	 * @brief : (Override method) AQL 기준(구분자, LOT 수량, 불량수량, 불량율 , DEFID, SPC LEVEL,
	 *        DEF LEVEL)
	 * @Method Name : selectAQLCheckBasisInfo
	 * @remark : 상세설명
* @see smh.qam.service.QAM00600Service#selectAQLCheckBasisInfo(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	@Override
	public void selectAQLCheckBasisInfo(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectAQLCheckBasisInfo", param));
	}

	/**
	 * @fn : selectAQLActionGradeInfo
	 * @brief : (Override method) AQL 인터락 qcGrade 조회
	 * @Method Name : selectAQLActionGradeInfo
	 * @remark : 상세설명
* @see smh.qam.service.QAM00600Service#selectAQLActionGradeInfo(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	@Override
	public void selectAQLActionGradeInfo(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectAQLActionGradeInfo", param));
	}

	/**
	 * @fn : selectQcGradeAndResultAQLTypeInfo
	 * @brief : (Override method) AQL관련 정보 보회
	 * @Method Name : selectQcGradeAndResultAQLTypeInfo
	 * @remark : 상세설명
* @see smh.qam.service.QAM00600Service#selectQcGradeAndResultAQLTypeInfo(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	@Override
	public void selectQcGradeAndResultAQLTypeInfo(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectAQLCheckBasisInfo", param), "output");
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectAQLActionGradeInfo", param), "output1");
	}

	/**
	 * @fn : selectNCRCheckBasisInfo
	 * @brief : (Override method) AQL관련 정보 보회
	 * @Method Name : selectNCRCheckBasisInfo
	 * @remark : 상세설명
* @see smh.qam.service.QAM00600Service#selectNCRCheckBasisInfo(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	@Override
	public void selectNCRCheckBasisInfo(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectNCRCheckBasisInfo", param));
	}
	
	/**
	 * @fn : selectMeasureInfo
	 * @brief : (Override method) 품질규격검사 대상여부
	 * @Method Name : selectMeasureInfo
	 * @remark : 상세설명
* @see smh.qam.service.QAM00600Service#selectMeasureInfo(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	@Override
	public void selectMeasureInfo(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectMeasureInfo", param));
	}
	
	/**
	 * @fn : selectIsLockingInfo
	 * @brief : (Override method) 판정듭급에 따른 조치등급의 Action
	 * @Method Name : selectIsLockingInfo
	 * @remark : 상세설명
* @see smh.qam.service.QAM00600Service#selectIsLockingInfo(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	@Override
	public void selectIsLockingInfo(UiMapDto dto) throws Exception {
		Map<String, Object> param = getParametersMap(dto);
		putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectIsLockingInfo", param));
	}

	/**
	 * @fn : saveOSPInspectionAccept
	 * @brief : (Override method) 입고요청
	 * @Method Name : saveOSPInspectionAccept
	 * @remark : 상세설명
* @see smh.qam.service.QAM00600Service#saveOSPInspectionAccept(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	@Override
	public void saveOSPInspectionAccept(UiMapDto dto) throws Exception {
		DataSetMap paramMap = getParametersDataSetMap(dto);
        Map<String, Object> param;

        int result = 0;

        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            int type = getRowType(param);
            
            if ("1".equals(param.get("CHK")))
            {
	            if (type == DataSet.ROW_TYPE_INSERTED) {                
	            } else if (type == DataSet.ROW_TYPE_UPDATED) {	            	
	                result += updateQcosprequestinspection(param);
	            } else if (type == DataSet.ROW_TYPE_DELETED) {
	            }
        	}
        }

        putDataSetMap(dto, result);
	}
	
    /**
    * @fn          : updateQcosprequestinspection
    * @brief       : (Override method) 입고일자 수정
    * @Method Name : updateQcosprequestinspection
    * @remark      : 상세설명
    * @see
    */
    private int updateQcosprequestinspection(Map<String, Object> param) throws Exception{
        Map<String, Object> paramMap = new HashMap<String, Object>();

        //HashMap Copy
        for (Map.Entry<String, Object> entry : param.entrySet()) {
            paramMap.put(entry.getKey(), entry.getValue());
        }
        String lotId      = (String)paramMap.get("LOTID");
        String lotHistKey = (String)paramMap.get("LOTHISTKEY");
        String degree	  = (String) paramMap.get("DEGREE");
        
        Map<String, Object> receiveMap = new HashMap<String, Object>();
        receiveMap = generalDao.addSelectOneMap(NAMESPACE + ".selectQcOSPRequestInspChk", paramMap);
        
        if (receiveMap == null )
        {
            throw new BizException("InValidData001", String.format("LotId = %s", lotId)+", "
                                                    +String.format("LotHistKey = %s", lotHistKey));
        }
        
        String receivingDate = (String) receiveMap.get("RECEIVINGDATE");
        if (!EgovObjectUtil.isNull(receivingDate))
        {
        	throw new BizException("InputedReceivingdate", String.format("LotId = %s", lotId)+", "
                                                          +String.format("Degree = %s", degree));
        }
        
        return generalDao.addUpdate(NAMESPACE + ".updateQcOspRequestInspRslt", paramMap);
    }	
	/**
	 * @fn : saveQcOspRequestInspRslt
	 * @brief : (Override method) 검사결과 등록
	 * @Method Name : saveQcOspRequestInspRslt
	 * @remark : 상세설명
* @see smh.qam.service.QAM00600Service#saveQcOspRequestInspRslt(com.nbdf.commons.ui.vo.UiMapDto)
	 */
	@Override
	public void saveQcOspRequestInspRslt(UiMapDto dto) throws Exception {
//		Map<String, Object> param;
		Map<String, Object> resultParam = new HashMap<String, Object>();
//		Map<String, Object> responseRow;
		List<Map<String, Object>> responseDt = new java.util.ArrayList<Map<String, Object>>();

		DataSetMap resultMap   = getParametersDataSetMap(dto, "ds_inspectionResultInfo"); // dt
		DataSetMap exteriorMap = getParametersDataSetMap(dto, "ds_OSPInspectionExterior"); // dt2
		DataSetMap measureMap  = getParametersDataSetMap(dto, "ds_OSPMeasureByInspItem"); // dt3
		DataSetMap defectMap   = getParametersDataSetMap(dto, "ds_OSPInspDefect"); // dt4
		DataSetMap measureImgMap = getParametersDataSetMap(dto, "ds_OSPInspectionMeasure"); // dt5
		resultParam = resultMap.get(0); // row

		gLotId="";// resourceId - LotId
		gProcessrelNo="";// processrelNo - LotHistkey + Degree
		gToAreaId="";// 다음 작업장
		gToResourceId="";// 다음 자원
		gDefectQty=0D;
		gDefectQtyPnl=0D;
		gAbnormalNO="";// 이상발생 시퀀스
		gDegree = null;
		gActionType = "";
		gIsSendEmail = false;		

		//주석처리 txnInfo.setTxnTime(now);
		//주석처리 txnInfo.setTxnUser(txnData.get("user"));
		Date nowDate  = qamService.getCurrentSystemTime("yyyyMMddHHmmss");
		String userId = (String)resultParam.get("CREATOR");
		String state  = (String) resultParam.get("STATE");
		gEnterpriseId = (String) SessionUtil.getSessionValue("ENTERPRISEID"); // enterpriseId
		gPlantId      = (String) SessionUtil.getSessionValue("SITETYPE"); // plantId		
		gTxnGroupHistKey = TxnHistKey.getTxnGroupHistKey();
	
		if ("added".equals(state)) 
		{
			gLotId        = (String) resultParam.get("RESOURCEID"); // gLotId
			gProcessrelNo = (String) resultParam.get("PROCESSRELNO"); // _processrelNo
			gDefectQty    = Double.parseDouble(resultParam.get("DEFECTQTYSUM").toString()); // _gDefectQty
			gDefectQtyPnl = Double.parseDouble(resultParam.get("DEFECTQTYSUMPNL").toString()); // _gDefectQtyPNL
			gToAreaId     = (String) resultParam.get("AREAID"); // _toAreaId
			gToResourceId = (String) resultParam.get("TORESOURCEID"); // gToResourceId
			gDegree       = (String) resultParam.get("DEGREE"); // _degree
						
			Map<String, Object> selectParam = new HashMap<String, Object>();
			selectParam.put("LOTID", gLotId);
					
			String txnHistKey = "";
			// 1.검사정보 저장
			txnHistKey = qamRsltService.saveInspectionResult(resultParam, gResourceType, gTxnGroupHistKey);
            
			String isSend = StringUtil.Object2String(resultParam.get("ISSEND"));
			logger.error("***** qam00600 start >> gLotId::"+gLotId+"- isSend::"+isSend+ "- qcGrade::"+(String) resultParam.get("QCGRADE")+"- inspectionResult::"+resultParam.get("INSPECTIONRESULT"));
			
			//!인계처리(무검사)
			if (!"HandOverProcessNon".equals(isSend))
			{
				String inspectionQty = (String) resultParam.get("INSPECTIONQTY");
				String exteriorNG = qamRsltService.saveInspectionDefect(exteriorMap, gLotId, gProcessrelNo, gResourceType, gDegree, gTxnGroupHistKey, true, inspectionQty, "Exterior");
				Map<String, String> inspItemIdAndValue = qamRsltService.saveItemRsltAndImgSeparate(measureMap, measureImgMap, gLotId, gResourceType, gDegree, gTxnGroupHistKey);
				qamRsltService.saveInspectionDefect(defectMap, gLotId, gProcessrelNo, gResourceType, gDegree, gTxnGroupHistKey, true, inspectionQty, "");
				//1-0. 계측값 등록 함수 호출 (2021.06.25)
				qam01100Service.saveQamMeasureValue(measureImgMap, measureMap, resultMap); //측정항목, 측정값, LOT정보
				// 1-1.이상발생의 경우 저장
				if ("NG".equals(resultParam.get("INSPECTIONRESULT")))
				{
					// 모든검사 Sample인경우 NCR하지 않음
					String lotType = generalDao.addSelectOne(NAMESPACE + ".selectLotTypeInfo", selectParam);
					
					// actionType을 얻는다.
					gActionType = qamService.getActionType(gEnterpriseId, gPlantId, (String) resultParam.get("QCGRADE"));

					// actionType으로 action 취한다.
					gIsSendEmail = qamService.doActionAndGetIsSendEmail(gActionType, resultParam, gLotId, gAbnormalType, gEnterpriseId, gPlantId, null);

					// action 중 Email 전송이 있을경우 ture를 화면에 반환 해준다.
					Map<String, Object> isSendEmailDt = new HashMap<String, Object>();
					String isSendEmail = "0";
					if (gIsSendEmail == true)
					{
						isSendEmail = "1";
					}
				
					isSendEmailDt.put("ISSENDEMAIL", isSendEmail);
					isSendEmailDt.put("EXTERIORNG", exteriorNG);

					String measureNG = "";
					for (String key : inspItemIdAndValue.keySet()) {
						measureNG += inspItemIdAndValue.get(key) + "\r\n";
					}

					isSendEmailDt.put("MEASURENG", measureNG);
					responseDt.add(isSendEmailDt);
				}
			}

			// 2.Defect Lot Split
			Double splitQty = 0.0;
			Double splitPanelQty = 0.0;

			// 기존 Lot
			Map<String, Object> lotMap = generalDao.addSelectOneMap(NAMEQAM01900 + ".selectPcmLotInfo", selectParam);
			logger.error("***** qam00600 gActionType::"+gActionType+"- qty::"+Double.parseDouble(lotMap.get("QTY").toString())+"- resourceId::"+gToResourceId+"- areaid::"+gToAreaId);
			
			if ("HandOverProcess".equals(isSend) || "HandOverProcessNon".equals(isSend)) 
		    {
				//인계처리
				if ("HandOverProcess".equals(isSend))
				{
					if (defectMap != null && defectMap.size() > 0 && gDefectQty > 0)
					{
						splitQty = gDefectQty;
						splitPanelQty = gDefectQtyPnl;
                        saveDefectLotSplit(dto, lotMap, defectMap, splitQty, splitPanelQty);
					}
				}

				// 모 lot은 진행
				// 전수불량 locking 걸지 않음, 인계 처리하지 않음
				// actionType locking일때 인계 처리하지 않음
				if (!gActionType.contains("LockingLot") && Double.parseDouble(lotMap.get("QTY").toString()) > 0)
				{
					// Check Window Time
					Map<String, Object> wLotMap = wipService.validateLotInfo(gLotId);
					wipService.executeCheckingWindowTimeNewTx(dto, wLotMap, nowDate);

					// 인계 작업실적
					Map<String, Object> wRsltMap = new HashMap<String, Object>();
					wRsltMap = wipService.saveLotWorkResult(dto, wLotMap, TransitType.SendLot, userId, nowDate, gToResourceId, gToAreaId);
	
					// Get Current Area
					String currentArea = (String) lotMap.get("AREAID");
					String currentPlant = (String) lotMap.get("PLANTID");
					String currentFactory = (String) lotMap.get("FACTORYID");

					selectParam.put("AREAID", currentArea);
					String originArea = generalDao.addSelectOne(NAMESPACE + ".selectAreaOwnTypeInfo", selectParam);
					
					logger.error("***** qam00600 currentArea::"+currentArea+"- currentPlant::"+currentPlant+"- currentFactory::"+currentFactory+"- originArea::"+originArea);
					
					if (originArea == null)
					{
						// 해당 작업장이 존재하지 않습니다. {0}
						throw new BizException("NotExistArea", String.format("AreaId = %s", currentArea));
					}

					//자사가 아닐경우 예산통제 Call
					if (!AreaOwnType.OurCompany.equals(originArea))
					{
						Map<String, Object> ospParam = new HashMap<String, Object>();
				        ospParam.put("LOT_NAME",  wRsltMap.get("LOTID")); //LotID
				        ospParam.put("SOP_CODE",  wRsltMap.get("PROCESSSEGMENTID")); //공정코드
				        ospParam.put("RSC_CODE",  wRsltMap.get("RESOURCEID")); //자원코드
				        ospParam.put("ITEM_CODE", wRsltMap.get("PRODUCTDEFID")); //품목코드
				        ospParam.put("STEP_ID",   "인계"); //한글로 넘겨야 함				        
						
						//checkpoint
						generalDao.selectList(NAMESPACE + ".selectOSMContrlYn", ospParam);
					    if("E".equals(ospParam.get("CTRL_YN")))
					    {
					        throw new BizException((String)ospParam.get("ERR_MSG"));
					    }
					    else
					    {
					    	if("Y".equals(ospParam.get("CTRL_YN"))) //외주비 집행통제로 처리불가
					    	{
					    		throw new BizException((String)ospParam.get("ERR_MSG")); 	 
					    	}else if("".equals(StringUtil.Object2String(ospParam.get("CTRL_YN")))){
					    		throw new BizException("OspBudgetFail"); 
					    	}
					    }					     
					}

					
					// Update Send Time, Send User
					lotMap = UpdateLotSend(lotMap, userId, nowDate);

					// DispatchLot
					lotMap = wipService.validateLotInfo(gLotId);
					lotMap = wipService.dispatchLot(dto, lotMap, gToAreaId, gToResourceId);

					// Update Lot Work Count
					lotMap = wipService.saveLotWorkCount(dto, lotMap);

					// 재작업
					// lot인계시===============================================================================
					String lotHistKey = "";

                    boolean isReturn = saveReworkReturnOSPInspection(lotMap); //다음공정 실적 입력해주지않음 lotHistKey 필요

					selectParam.put("AREAID", gToAreaId);
					Map<String, Object> areaMap = new HashMap<String, Object>();
					areaMap = generalDao.addSelectOneMap(NAMESPACE + ".selectAreaInfo", selectParam);
					
					if (areaMap == null)
					{
						// 해당 작업장이 존재하지 않습니다. {0}
						throw new BizException("NotExistArea", String.format("AreaId = %s", gToAreaId));
					}

					lotMap = generalDao.addSelectOneMap(NAMEQAM01900 + ".selectPcmLotInfo", selectParam);
					String lastTxnHistKey = StringUtil.Object2String(lotMap.get("LASTTXNHISTKEYV"));
					lotMap.put("LASTTXNHISTKEY", lastTxnHistKey);					
					
					// Check Move Area from Outside Area to Outside Area
					String lotState = StringUtil.Object2String(lotMap.get("LOTSTATE"));
					String ownType  = StringUtil.Object2String(areaMap.get("OWNTYPE"));
					String nextPlant = StringUtil.Object2String(areaMap.get("PLANTID"));

					//2021.05.15 TOBE Add 외주여부 조회
					String isOSPInspControl = qamService.getLotIsOSPInspControl((String) lotMap.get("LOTID"));	
					
					// plant 외주창고 관리여부 조회
					selectParam.put("PLANTID", resultParam.get("PLANTID"));					
					String IsOspWarehouse = generalDao.addSelectOne(NAMESPACE + ".selectPlantIsOSPWareHouseOperateInfo", selectParam);
					
					logger.error("***** qam00600 lotState::"+lotState+"- currentArea::"+currentArea+"- gToAreaId::"+gToAreaId+"- Lot AreaId::"+(String) lotMap.get("AREAID"));
					logger.error("***** qam00600 currentPlant::"+currentPlant+"- nextPlant::"+nextPlant+"- Lot PlantId::"+(String) lotMap.get("PLANTID"));
					logger.error("***** qam00600 isOSPInspControl:"+isOSPInspControl+"- IsOspWarehouse:"+IsOspWarehouse);
					
					// if not Finished that Lot State then Outside Check Logic
					if (!LotState.Finished.equals(lotState)) 
					{
						// 작업장이 동일한 경우 SendLot 호출 안함
						if (!currentArea.equals(gToAreaId))
						{								
							//2021.05.15 TOBE Modify 
							//현재는 외주작업장인 경우만 해당이 되었으나 향후에는 자사작업장도 포함될 예정이므로 
							//체크로직을 해당 LOT이 투입된 작업장의 자사구분 = ‘사외외주’인 경우에서 
							//     	 해당 LOT의 작업장자원정보(BAS_RESOURCE) 의 외주검사여부=‘Y’ 인 경우로 변경
							
							//if (AreaOwnType.OutsideOSP.equals(ownType) || !nextPlant.equals(currentPlant))
							if ("Y".equals(isOSPInspControl) || !nextPlant.equals(currentPlant))
							{
								String nextAreaId = "";
								String nextPlantId = "";

								//2021.05.15 TOBE Modify
								//if (AreaOwnType.OutsideOSP.equals(ownType))
								if ("Y".equals(isOSPInspControl))
									nextAreaId = gToAreaId;
								else
									nextAreaId = (String) lotMap.get("AREAID");

								if (!nextPlant.equals(currentPlant))
									nextPlantId = nextPlant;
								else
									nextPlantId = (String) lotMap.get("PLANTID");
								
								lotMap = wipService.sendLot(gLotId, nextAreaId, nextPlantId);

								if (!nextPlant.equals(currentPlant)) {
                                    saveLotPlantTransit(lotMap, lastTxnHistKey, userId, nowDate);
								}
							}
						}
						/*2021.07.13 TOBE Add 
						 * 외주창고에서 외주창고로 인계되는 경우도 수입검사의뢰대상일 경우는 인터플렉스에 왔다가 다시 가는 경우이므로 입고처리가 되여야 함.
						 * 외주창고 입고처리 대상은 LOTSTATE가 'InTransit'여야 가능하므로 상태를 변경해줘야 함*/
						else
						{
							if ("Y".equals(isOSPInspControl) && "Y".equals(IsOspWarehouse))
							{
								if (nextPlant.equals(currentPlant))
								{								
									lotMap = wipService.sendLot(gLotId, currentArea, currentPlant);
								}
							}
						}//if (!currentArea.equals(gToAreaId))
					}//if (!LotState.Finished.equals(lotState)) 

					// 재작업 로직 추가하면서 변경 SaveLotWorkResultForNextProcessImpl
					Map<String, Object> paramworkResult = new HashMap<String, Object>();
					paramworkResult.put("ENTERPRISEID",          lotMap.get("ENTERPRISEID"));
					paramworkResult.put("PLANTID",               lotMap.get("PLANTID"));
					paramworkResult.put("LOTID",                 gLotId);
					paramworkResult.put("PROCESSSEGMENTID",      lotMap.get("PROCESSSEGMENTID"));
					paramworkResult.put("PROCESSSEGMENTVERSION", lotMap.get("PROCESSSEGMENTVERSION"));
					paramworkResult.put("WORKCOUNT",             lotMap.get("WORKCOUNT"));

					List<Map<String,Object>> workResult = generalDao.addSelect(NAMEQAM01900 + ".getLotWorkResultByTrackIn",	paramworkResult);

					if (workResult.size() < 1)
					{
						lotHistKey = wipService.saveLotWorkResultForNextProcess(dto, lotMap, (String) lotMap.get("LASTTXNHISTKEY"));
					}

					// 인계하려는 Area가 외주 이고, plant 외주창고 관리하는 경우 입고 처리
					/*2021.05.15 TOBE Modify 
					 * 현재는 외주작업장인 경우만 해당이 되었으나 향후에는 자사작업장도 포함될 예정이므로 
					 * 체크로직을 해당 LOT이 투입된 작업장의 자사구분 = ‘사외외주’인 경우에서 
					 *        해당 LOT의 작업장자원정보(BAS_RESOURCE) 의 외주검사여부=‘Y’ 인 경우로 변경*/
					//if (AreaOwnType.OutsideOSP.equals(ownType) && "Y".equals(IsOspWarehouse))
					if ("Y".equals(isOSPInspControl) && "Y".equals(IsOspWarehouse))
					{                       
						ospService.OspreciptsendlotCreate((String) resultParam.get("ENTERPRISEID"), (String) resultParam.get("PLANTID"), gLotId, lotHistKey, userId);
					}

					// Lot History Previous Plant & Previous Area Update (임시)
                    saveLotHistory(lastTxnHistKey, gLotId, currentPlant, currentFactory, currentArea);
				}//gActionType
				logger.error("***** qam00600 end >> gLotId::"+gLotId );
			} //ISSEND
			else if ("ReceivingCancel".equals(isSend))
			{// 의뢰취소

				if (defectMap != null && defectMap.size() > 0 && gDefectQty > 0)
				{
					splitQty = gDefectQty;
					splitPanelQty = gDefectQtyPnl;
                    saveDefectLotSplit(dto, lotMap, defectMap, splitQty, splitPanelQty);
				}
			}
		}
		else if ("modified".equals(state))
		{
			qamRsltService.saveInspectionResult(resultParam, gResourceType, gTxnGroupHistKey);
		}

		putDataSetMap(dto, responseDt);

	}

	/**
	 * @fn : getAbnormalNO
	 * @brief : (Override method) 이상발생번호 채번
	 * @Method Name : getAbnormalNO
	 * @remark : 상세설명
* @see smh.qam.service.QAM00600Service#getAbnormalNO
	 */
	public void getAbnormalNO() throws Exception
	{
		String sequence = qamService.createAbnormalNO();
		gAbnormalNO = sequence;
	}

	/**
	 * @fn : UpdateLotSend
	 * @brief : (Override method) Update Lot Send Time, Send User
	 * @Method Name : UpdateLotSend
	 * @remark : 상세설명
* @see smh.qam.service.QAM00600Service#UpdateLotSend
	 */
	private Map<String, Object> UpdateLotSend(Map<String, Object> param, String userId, Date time) throws Exception
	{
		int result = 0;
		Map<String, Object> histLotMap = new HashMap<String, Object>();
		histLotMap = generalDao.addSelectOneMap(NAMEQAM01900 + ".selectPcmLotInfo", param);

		param.put("SENDTIME", time);
		param.put("SENDUSER", userId);
		param.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
		result+= generalDao.addUpdate(NAMESPACE + ".updatePcmLotSendInspRslt", param);
		
        if(result > 0)
        { 
            histLotMap.put("TXNHISTKEY", param.get("LASTTXNHISTKEY"));
            histLotMap.put("SENDTIME", param.get("SENDTIME"));
            histLotMap.put("SENDUSER", param.get("SENDUSER"));			  
            generalDao.addUpdate(NAMESPACE + ".insertPcmLothistoryOSPInspRslt", histLotMap);
        }
		 
		return param;
	}

	/**
	 * @fn : saveLotHistory
	 * @brief : (Override method) 
	 * @Method Name : saveLotHistory
	 * @remark : asis ==> SaveLotHistory
* @see smh.qam.service.QAM00600Service#saveLotHistory
	 */	
	private void saveLotHistory(String txnHistKey, String lotId, String plantId, String factoryId, String areaId) throws Exception
	{
		Map<String, Object> histMap = new HashMap<String, Object>();
		histMap.put("TXNHISTKEY", txnHistKey);
		histMap.put("LOTID",      lotId);
		
		histMap = generalDao.addSelectOneMap(NAMEQAM01900 + ".selectPcmLotHistoryInfo", histMap);
		
		histMap.put("PREVPLANTID", plantId);
		histMap.put("PREVFACTORYID", factoryId);
		histMap.put("PREVAREAID", areaId);
				
		generalDao.addUpdate(NAMESPACE + ".updatePcmLotHistorySaveLotHistoryInspRslt", histMap);
	}

	/**
	 * @fn : saveDefectLotSplit
	 * @brief : (Override method) 
	 * @Method Name : saveDefectLotSplit
	 * @remark : asis ==> SaveDefectLotSplit
* @see smh.qam.service.QAM00600Service#saveDefectLotSplit
	 */	
	private void saveDefectLotSplit(UiMapDto dto, Map<String, Object> lotParam ,DataSetMap defectList, Double splitQty, Double splitPanelQty ) throws Exception
	{
		Map<String, Object> wLotMap = wipService.validateLotInfo(gLotId);				
		Map<String, Object> defectLotMap = wipService.splitDefectLot(dto, gLotId, splitQty, splitQty);
		
		String childLotId = (String) defectLotMap.get("LOTID");

		//2021.06.08 TOBE Add saveLot에서 수행하는데 wip에서 사용해야 해서 여기에서 panelPerQty 반영 및 반영한 정보를 splitLotMap에 반영		
		updateLotPanelPerQty(childLotId, StringUtil.Object2Double(wLotMap.get("PANELPERQTY")));	
		defectLotMap = wipService.validateLotInfo(childLotId);
		
		// SplitLot Lot Locking 처리
		wipService.saveLotLocking(dto, (String) defectLotMap.get("LOTID"), "QCLockInProcess", "LockProcessNonconfirm", "", (String) SessionUtil.getSessionValue("USER_ID"), (String) SessionUtil.getSessionValue("LANGUAGETYPE"));

		lotParam = generalDao.addSelectOneMap(NAMEQAM01900 + ".selectPcmLotInfo", lotParam);
		
		// Defect Lot 작업실적 입력
		wipService.saveDefectLotWorkResult(dto, lotParam, defectLotMap, splitQty);
				
		lotParam = saveLot(gLotId, childLotId, splitPanelQty);
		
		defectLotMap = generalDao.addSelectOneMap(NAMEQAM01900 + ".selectPcmLotInfo", defectLotMap);
		
		wipService.saveLotDefect(dto, defectLotMap, defectList, TransitType.SendLot);
	}
    	
    /**
     * @fn          : updateLotPanelPerQty
     * @brief       : (Override method) Parent Lot의 PanelPerQty를 Child Lot의 PanelPerQty에 반영
     * @Method Name : updateMergeLot
     * @remark      : 상세설명
     * @see
     */
     private int updateLotPanelPerQty(String lotId, double panelPerQty) throws Exception
     {
         int result = 0;
         Map<String, Object> lotMap = new HashMap<String, Object>();
         lotMap.put("LOTID",          lotId);  
         lotMap.put("PANELPERQTY",    panelPerQty); 
         lotMap.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
         result += generalDao.addUpdate(NAMESPACE + ".updatePcmLotPanelPerQtyInspRslt", lotMap);
         
         lotMap = generalDao.addSelectOneMap(NAMEQAM01900 + ".selectPcmLotInfo", lotMap);
         
         /*checkpoint history 생성*/
         if (result > 0)
         {
         	 lotMap.put("TXNHISTKEY", lotMap.get("LASTTXNHISTKEY"));         	
             generalDao.addUpdate(NAMESPACE + ".insertPcmLothistoryOSPInspRslt", lotMap);
         }
         
         return result;         
     }
     
	/**
	 * @fn : saveLot
	 * @brief : (Override method) Parent Lot, Child Lot Update Data
	 * @Method Name : saveLot
	 * @remark : asis ==> SaveLot
* @see smh.qam.service.QAM00600Service#saveLot
	 */	
	private Map<String, Object> saveLot(String lotId, String childLotId, Double splitPanelQty) throws Exception
	{ 
	    int result =0;
	    Map<String, Object> wLotMap = wipService.validateLotInfo(lotId);
	    Map<String, Object> wLotHistMap = new HashMap<String, Object>(); //history
	    wLotHistMap.putAll(wLotMap);
	    
	    Map<String, Object> param = new HashMap<String, Object>(); 
	    param.put("PRODUCTDEFID",      wLotMap.get("PRODUCTDEFID"));
	    param.put("PRODUCTDEFVERSION", wLotMap.get("PRODUCTDEFVERSION"));
	    
	    param = generalDao.addSelectOneMap(NAMESPACE + ".selectBasProductdefinitionInfo", param);
	    
	    if (param == null)
	    { 
	    	throw new BizException("InValidData001",String.format("ProductDefId = %s, ProductDefVersion = %s", wLotMap.get("PRODUCTDEFID"), wLotMap.get("PRODUCTDEFVERSION")));
    	}
	    
	    // Get Array Per Quantity 
	    double arrayPerQty = StringUtil.Object2Double(param.get("PCSARY"));
	    
	    wLotMap.put("PCSQTY", wLotMap.get("QTY"));
	    wLotMap.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
	    
	    double qty = StringUtil.Object2Double(wLotMap.get("QTY")); 
	    double panelPerQty = StringUtil.Object2Double(wLotMap.get("PANELPERQTY"));
	    
	    if (arrayPerQty > 0)
	        wLotMap.put("ARRAYQTY", qty/ arrayPerQty);
	    
	    if (panelPerQty > 0)
	        wLotMap.put("PANELQTY", Math.ceil(qty/panelPerQty));
	    
	    if (qty <= 0)
	    {
	    	wLotMap.put("LOTSTATE", LotState.Terminated);            
	    }	      
	      
	    Map<String, Object> cLotMap = wipService.validateLotInfo(childLotId);
	    Map<String, Object> cLotHistMap = new HashMap<String, Object>(); //history
	    cLotHistMap.putAll(cLotMap);
	    
	    cLotMap.put("LOTCREATEDTYPE", "Defect");
	    cLotMap.put("ISLOCKING",      "Y");
	    cLotMap.put("ISDEFECTED",     "Y");
	    cLotMap.put("QTY",            (double)0);
	    cLotMap.put("DEFECTQTY",      cLotMap.get("CREATEDQTY"));
	    cLotMap.put("PCSQTY",         (double)0);
	    cLotMap.put("ARRAYQTY",       (double)0);
	    
	    /*2021.08.13 TOBE Modify ERP시스템에서 필요한 정보로 화면에서 넘어온 값을 저장
        cLotMap.put("PANELQTY",       (double)0);
	     */	    
	    cLotMap.put("PANELQTY",       splitPanelQty);
	    cLotMap.put("PANELPERQTY",    panelPerQty);
	    cLotMap.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
	    
	    result += generalDao.addUpdate(NAMESPACE + ".updatePcmLotSaveLotInspRslt", wLotMap);
	    result += generalDao.addUpdate(NAMESPACE + ".updatePcmLotSaveLotChildInspRslt", cLotMap);
	    
        /*checkpoint history 생성*/
        if (result > 0)
        {
        	cLotMap.put("TXNHISTKEY",    cLotMap.get("LASTTXNHISTKEY"));
        	cLotMap.put("PREVDEFECTQTY", cLotHistMap.get("DEFECTQTY")); //이전 불량수량
        	cLotMap.put("PREVPCSQTY",    cLotHistMap.get("PCSQTY")); //이전 PCS 수량
        	cLotMap.put("PREVARRAYQTY",  cLotHistMap.get("ARRAYQTY")); //이전 작업장 ID
        	cLotMap.put("PREVPANELQTY",  cLotHistMap.get("PANELQTY"));//이전 PNL수량
        	cLotMap.put("PREVPANELQTY",  cLotHistMap.get("PANELQTY"));//이전 PNL수량

            generalDao.addUpdate(NAMESPACE + ".insertPcmLothistoryOSPInspRslt", cLotMap);
        }
        
	    //wLotMap를 리턴해야해서  wLotHistMap에 변경정보를 담아서 history 생성
        if (qty <= 0)
	    {	
        	Map<String, Object> histMap = new HashMap<String, Object>(); //history
        	histMap.putAll(wLotMap);        	
        	histMap.put("TXNHISTKEY",    histMap.get("LASTTXNHISTKEY"));	
        	histMap.put("PREVPCSQTY",    wLotHistMap.get("PCSQTY")); //이전 PCS 수량
        	histMap.put("PREVARRAYQTY",  wLotHistMap.get("ARRAYQTY")); //이전 작업장 ID
        	histMap.put("PREVPANELQTY",  wLotHistMap.get("PANELQTY"));//이전 PNL수량
        	histMap.put("PREVLOTSTATE",  wLotHistMap.get("LOTSTATE")); //이전 LOT 공정진행 상태
	    	
	    	generalDao.addUpdate(NAMESPACE + ".insertPcmLothistoryOSPInspRslt", histMap);  	      
	    }
	      
	    return wLotMap;
	}


	/**
	 * @fn : saveLotPlantTransit
	 * @brief : (Override method) Lot Plant Transit Insert Data
	 * @Method Name : saveLotPlantTransit
	 * @remark : asis ==> SaveLotPlantTransit
* @see smh.qam.service.QAM00600Service#saveLotPlantTransit
	 */		
	private void saveLotPlantTransit(Map<String, Object> lotParam, String lastTxnHistKey, String userId, Date time) throws Exception
	{
        Map<String, Object> lotPlantTransitMap = new HashMap<String, Object>();
        String txnHistKey = TxnHistKey.getTxnHistKey();
        String lotId = (String) lotParam.get("LOTID");        
        lotPlantTransitMap.put("LOTID", lotId);
        lotPlantTransitMap.put("TXNHISTKEY", txnHistKey);

        lotPlantTransitMap = generalDao.addSelectOneMap(NAMEQAM01900 + ".selectMtmLotPlantTransitInfo", lotPlantTransitMap);
		
		if (lotPlantTransitMap != null)
		{
			throw new BizException("InValidData002", String.format("TxnHistKey = %s, LotId = %s", txnHistKey, lotId));
		}

        Map<String, Object> lotHistoryMap = new HashMap<String, Object>();
        lotHistoryMap.put("LOTID",                  lotParam.get("LOTID"));
        lotHistoryMap.put("TXNHISTKEY",             lastTxnHistKey);

        lotHistoryMap = generalDao.addSelectOneMap(NAMEQAM01900 + ".selectPcmLotHistoryInfo", lotHistoryMap);

        lotPlantTransitMap.put("LOTID",             	lotId);
        lotPlantTransitMap.put("TXNHISTKEY",        	txnHistKey);
        lotPlantTransitMap.put("ENTERPRISEID",      	lotParam.get("ENTERPRISEID"));
        lotPlantTransitMap.put("PLANTID",           	lotParam.get("PLANTID"));
        lotPlantTransitMap.put("PREVPRODUCTIONORDERID", lotParam.get("PRODUCTIONORDERID"));
        lotPlantTransitMap.put("PREVLINENO",        	lotParam.get("LINENO"));
        lotPlantTransitMap.put("PREVPLANTID",       	StringUtil.Object2String(lotHistoryMap.get("PREVPLANTID"))==""?lotParam.get("PLANTID"):lotHistoryMap.get("PREVPLANTID")); 
        lotPlantTransitMap.put("FACTORYID",         	lotParam.get("FACTORYID"));
        lotPlantTransitMap.put("AREAID",            	lotParam.get("AREAID"));
        lotPlantTransitMap.put("PREVAREAID",        	StringUtil.Object2String(lotHistoryMap.get("PREVAREAID"))==""?lotParam.get("AREAID"):lotHistoryMap.get("PREVPLANTID"));
        lotPlantTransitMap.put("PROCESSDEFID",      	lotParam.get("PROCESSDEFID"));
        lotPlantTransitMap.put("PROCESSDEFVERSION", 	lotParam.get("PROCESSDEFVERSION"));
        lotPlantTransitMap.put("PROCESSSEGMENTID",  	lotParam.get("PROCESSSEGMENTID"));
        lotPlantTransitMap.put("PREVPROCESSSEGMENTID", 	lotHistoryMap.get("PREVPROCESSSEGMENTID"));
        lotPlantTransitMap.put("SENDUSER",          	lotHistoryMap.get("SENDUSER"));
        lotPlantTransitMap.put("SENDDATE",          	lotHistoryMap.get("SENDDATE"));
        lotPlantTransitMap.put("TRANSITSTATUS",     	"WaitShip");

        generalDao.addUpdate(NAMEQAM01900 + ".insertMtmLotPlantTransitDefectCancel", lotPlantTransitMap);
	}

	/**
	 * @fn : saveReworkReturnOSPInspection
	 * @brief : (Override method) 
	 * @Method Name : saveReworkReturnOSPInspection
	 * @remark : asis ==> SaveReworkReturnDataOSPInspection
* @see smh.qam.service.QAM00600Service#saveLotPlantTransit
	 */	
	private boolean saveReworkReturnOSPInspection(Map<String, Object> lotParam ) throws Exception
	{
		Map<String, Object> lotMap = new HashMap<String, Object>();
		lotMap.put("LOTID",                     lotParam.get("LOTID"));
		boolean returnResult = false;
		int result = 0;
		Map<String, Object> reworkMap = new HashMap<String, Object>();
		reworkMap.put("LOTID",                     lotParam.get("LOTID"));
		reworkMap.put("FROMPROCESSSEGMENTID",      lotParam.get("PROCESSSEGMENTID"));
		reworkMap.put("FROMPROCESSSEGMENTVERSION", lotParam.get("PROCESSSEGMENTVERSION"));
		reworkMap.put("MOVESTATE",                 "Move");
		
		reworkMap = generalDao.addSelectOneMap(NAMESPACE + ".selectPcmReworkReturn", reworkMap);
	    
		if (reworkMap != null)
		{
			//checkpoint history 생성을 위해 현재 Lot 상태 Copy
	        Map<String, Object> histLotMap = new HashMap<String, Object>();
	        histLotMap.putAll(lotParam);  
	        lotMap.put("PROCESSSTATE", reworkMap.get("TOPROCESSSTATE"));
	        lotMap.put("WORKCOUNT",    reworkMap.get("WORKCOUNT"));
			
			//재작업후 출하 인수대기로 돌아오는 경우 isRework "Y"로 update
			Map<String, Object> processMap = new HashMap<String, Object>();			
			processMap.put("PROCESSSEGMENTID",      reworkMap.get("TOPROCESSSEGMENTID"));
			processMap.put("PROCESSSEGMENTVERSION", reworkMap.get("TOPROCESSSEGMENTVERSION"));

			processMap = generalDao.addSelectOneMap(NAMESPACE + ".selectBasProcessSegment", processMap);
			
			//출하검사, 출하검사(SMT)
			if(StringUtil.Object2Double(reworkMap.get("WORKCOUNT")) > 0
			   && (  "7030".equals(StringUtil.Object2String(processMap.get("PROCESSSEGMENTCLASSID"))) 
				   ||"7536".equals(StringUtil.Object2String(processMap.get("PROCESSSEGMENTCLASSID")))))
			{
				lotMap.put("ISREWORK" ,"Y");
			}			
	        
			lotMap.put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());			
			result += generalDao.addUpdate(NAMESPACE + ".updatePcmLotSaveReworkReturnInspRslt", lotMap);

	        /*checkpoint history 생성*/			
	        if (result > 0)
	        {
	        	lotMap.put("TXNHISTKEY",       lotMap.get("LASTTXNHISTKEY"));
	        	lotMap.put("PREVPROCESSSTATE", histLotMap.get("PROCESSSTATE")); //이전 LOT 공정진행 상태	        	

	            generalDao.addUpdate(NAMESPACE + ".insertPcmLothistoryOSPInspRslt", lotMap);
	        }
	        
			reworkMap.put("MOVESTATE", "End");			
			generalDao.addUpdate(NAMESPACE + ".updatePcmReworkReturnSaveReworkReturnInspRslt", reworkMap);
			
			returnResult = true;
		}		
		
		return returnResult;
	}
}