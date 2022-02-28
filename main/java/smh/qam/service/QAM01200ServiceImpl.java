package smh.qam.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.DateUtil;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.util.StringUtils;

import smh.pcm.service.PCMOspService;
import smh.pcm.service.PCMWipService;


/**
* @file: QAM01200ServiceImpl.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM01200ServiceImpl
* @Company: Built1
* @Create Date: 2021.4.5
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.4.5.       권혜영     최초  생성
*/
@Service
public class QAM01200ServiceImpl extends AbstractNbdfService implements QAM01200Service {

    public static final String NAMESAPCE = "smh.qam.dao.QAM01200Dao";
    public static final String NAMESAPCE_PCM = "smh.pcm.dao.PCMCommonDao";
    public static final String NAMESAPCE_QAM = "smh.qam.dao.QAMCommonDao";
    public static final String NAMESAPCE_QAM_POP = "smh.qam.dao.QAMPopupDao";
    public static final String NAMESPACE_QAM00600 = "smh.qam.dao.QAM00600Dao";
    @Autowired
    private GeneralDao generalDao;
    
    @Autowired 
    private PCMWipService wipService;
    
    @Autowired
    private QAMCommonService qamService;
    
    @Autowired 
    private PCMOspService pcmOspService;


    /**
     * @fn
     * @brief (Override method) 품질규격 이상발생 정보 조회
     * @remark 
     * @see smh.qam.service.QAM01200Service#selectQualitySpecificationIssueList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectQualitySpecificationIssueList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQualitySpecificationIssueList", param));
    }
    
    /**
     * @fn
     * @brief (Override method)품질규격 이상발생 affectLot 조회
     * @remark 
     * @see smh.qam.service.QAM01200Service#selectQualitySpecIssueAffectLot(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectQualitySpecIssueAffectLot(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectQualitySpecIssueAffectLot", param));
    }
    
    /**
     * @fn
     * @brief (Override method) CAR 접수 순번에 따른 마지막차수를 조회
     * @remark 
     * @see smh.qam.service.QAM01200Service#selectSequenceDegree(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectSequenceDegree(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectSequenceDegree", param));
    }
    
    /**
     * @fn
     * @brief (Override method) CAR 접수 순번에 따른 상태를 조회
     * @remark 
     * @see smh.qam.service.QAM01200Service#selectSequenceState(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectSequenceState(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectSequenceState", param));
    }
    
    /**
     * @fn
     * @brief (Override method) CAR 요청정보를 조회
     * @remark 
     * @see smh.qam.service.QAM01200Service#selectCarRequest(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectCarRequest(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        String sqlId = (String)param.get("SQL_ID");

        if(!StringUtils.isEmpty(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + "."+sqlId, param));
        } else {
            putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCarRequest", param));
        }
    }
    
    /**
     * @fn
     * @brief (Override method) CAR 접수정보를 조회
     * @remark 
     * @see smh.qam.service.QAM01200Service#selectCarReceipt(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectCarReceipt(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCarReceipt", param));
    }
    
    /**
     * @fn
     * @brief (Override method) CAR 승인정보를 조회
     * @remark 
     * @see smh.qam.service.QAM01200Service#selectCarApproval(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectCarApproval(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCarAcceptHistory", param), "ds_acceptHistory");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCarEstimateHistory", param), "ds_estimateHistory");
    }
    
    /**
     * @fn
     * @brief (Override method) CAR 유효성평가정보를 조회
     * @remark 
     * @see smh.qam.service.QAM01200Service#selectCarValidation(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectCarValidation(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCarValidation", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 해당 기간안에 스펙아웃이 발생한 Count 조회
     * @remark 
     * @see smh.qam.service.QAM01200Service#selectConcurrenceCount(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectConcurrenceCount(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectConcurrenceCount", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 품질이상발생 CAR 저장
     * @remark 
     * @see smh.qam.service.QAM01200Service#saveQamCarAllState(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveQamCarAllState(UiMapDto dto) throws Exception {

    	Map<String, Object> retMap = new HashMap<String, Object>();
    	
    	//dataset을 add 후 저장하므로, 모든 data는 insert로 들어옴.
    	DataSetMap affectDt = getParametersDataSetMap(dto, "ds_qamIssueAffectLot");
    	DataSetMap requestDt = getParametersDataSetMap(dto, "ds_request");
    	DataSetMap receiptDt = getParametersDataSetMap(dto, "ds_receipt");
    	DataSetMap acceptDt = getParametersDataSetMap(dto, "ds_approval");
    	DataSetMap validationDt = getParametersDataSetMap(dto, "ds_evaluation");

    	DataSetMap mainDt = getParametersDataSetMap(dto, "ds_mainList"); // 기본 등록 값	
    	DataSetMap claimInfoDt = getParametersDataSetMap(dto, "ds_claimInfoList");  // 클레임정보
    	
    	Map<String, Object> param;
    	
    	int result = 0;
    	
    	//=====================================================================================================================
		//공정 수입 검사  - 클레임정보	
		//=====================================================================================================================
		if(claimInfoDt != null) {
			for (int i = 0, n = claimInfoDt.size(); i < n; i++) {
        		param = claimInfoDt.get(i);
        		int type = getRowType(param);
        		if (type == DataSet.ROW_TYPE_INSERTED) {

        			Map<String, Object> abnormalMap = new HashMap<String, Object>();
        			abnormalMap.put("ABNOCRNO", param.get("ABNOCRNO"));
        			abnormalMap.put("ABNOCRTYPE", param.get("ABNOCRTYPE"));
        			abnormalMap.put("ISCLAIMPROCESS", param.get("ISCLAIMPROCESS"));
        			abnormalMap.put("CLAIMSCRAPAMT", param.get("CLAIMSCRAPAMT"));
        			abnormalMap.put("CLAIMETCAMT", param.get("CLAIMETCAMT"));
        			
        			result += generalDao.addUpdate(NAMESAPCE_QAM + ".updateQamAbnormalOccurrence", abnormalMap);
        			
        			//처리 하지 않음 (2021.05.17 요청)
        			// 기타 비용 변경 시
        			/*if("Y".equals(StringUtil.Object2String(param.get("ISCHANGED")))) {
        				// ------------------------------------------------------------
                		// [이상발생정보 Data] make Query parameters && execute query
                		// ------------------------------------------------------------
        				Map<String, Object> abnormalOccurrenceParam = new HashMap<String, Object>();
                    	abnormalOccurrenceParam.put("ABNOCRNO", param.get("ABNOCRNO"));
                    	abnormalOccurrenceParam.put("ABNOCRTYPE", param.get("ABNOCRTYPE"));
                    	
                    	Map<String, Object> abnormaloccurrenceData = generalDao.addSelectOneMap(NAMESAPCE_QAM + ".selectQamAbnormalOccurrenceInfo", abnormalOccurrenceParam);
                    	
                    	if(abnormaloccurrenceData == null) {
                    		throw new BizException("InValidData001", String.format("AbnormalNO = %s, AbnormalType = %s", param.get("ABNOCRNO"), param.get("ABNOCRTYPE")));
                    	}
                    	
        				// ------------------------------------------------------------
            			// [Area Data] execute query
            			// ------------------------------------------------------------
                		Map<String, Object> areaParamMap = new HashMap<String, Object>();
                		areaParamMap.put("VERSION", "10003");
                		areaParamMap.put("AREAID", abnormaloccurrenceData.get("AREAID"));
                		
            	 		Map<String, Object> areaMap = generalDao.addSelectOneMap(NAMESAPCE_QAM_POP + ".selectAreaList", areaParamMap);
            	 		
            	 		String strenterpriseid = StringUtil.Object2String(param.get("ENTERPRISEID"));
            	 		String strplantid = StringUtil.Object2String(param.get("PLANTID"));
            	 		String strclaimdate = DateUtil.today("yyyy-MM-dd");
            			String strclaimtype = "Etc";
            			String strclaimdepartment = StringUtil.Object2String(param.get("DEPTCD"));
            			String strclaimuser = StringUtil.Object2String(param.get("USERID"));
            			String strareaid = StringUtil.Object2String(areaMap.get("AREAID"));
            			String strvendorid = StringUtil.Object2String(areaMap.get("VENDORID"));
            			String strproductdefid = StringUtil.Object2String(abnormaloccurrenceData.get("PRODUCTDEFID"));
            			String strproductdefversion = StringUtil.Object2String(abnormaloccurrenceData.get("PROCESSDEFVERSION"));
            			String stretclotid = StringUtil.Object2String(abnormaloccurrenceData.get("LOTID"));
            			Double dblamount =Double.parseDouble(StringUtil.Object2String(param.get("AMOUNT")));
            			String strrelkeyno = StringUtil.Object2String(param.get("ABNOCRNO")) + "-" + StringUtil.Object2String(param.get("ABNOCRTYPE"));
            			
            			// 2021.05.17 추후 구현 예정.
            	 		String claimReturn  = pcmOspService.OspEtcClaimAmountCreate(
            	 				strenterpriseid, strplantid, strclaimdate, strclaimtype, strclaimdepartment,
            	 				strclaimuser, strareaid, strvendorid, strproductdefid, strproductdefversion, stretclotid, dblamount, strrelkeyno);
            	 		
            	 		String claimResult = "";
            			String claimMessageId = "";
            			
//            	 		if(claimReturn != null) {
//            	 			String claimResult = claimReturn.split("-")[0];
//                			String claimMessageId = claimReturn.split("-")[1];
//            	 		}
//            			claimResult = "false";
//            			if("false".equals(claimResult)) {
//            				retMap.put("MESSAGEID", claimMessageId);
//            			}
        			}*/
        		}
			}
		}
		
    	//========================================================
		//CAR 요청 저장
		//========================================================
    	if(requestDt != null) {
        	for (int i = 0, n = requestDt.size(); i < n; i++) {
        		param = requestDt.get(i);
        		int type = getRowType(param);
        		if (type == DataSet.ROW_TYPE_INSERTED) {
        			result += generalDao.addUpdate(NAMESAPCE + ".insertQamCarrequest", param);
        			
        			// 1순번이라면 이상발생정보 테이블 업데이트
        			if("1".equals(param.get("SEQUENCE"))) {
        				
        				Map<String, Object> abnormalMap = new HashMap<String, Object>();
        				abnormalMap.put("ABNOCRNO", param.get("ABNOCRNO"));
        				abnormalMap.put("ABNOCRTYPE", param.get("ABNOCRTYPE"));
        				abnormalMap.put("STATE", param.get("STATE"));
        				
        				result += generalDao.addUpdate(NAMESAPCE_QAM + ".updateQamAbnormalOccurrence", abnormalMap);
        			}
        		}
        	}
        }
    	
    	//========================================================
		//CAR 접수 저장
		//========================================================
    	if(receiptDt != null) {
        	for (int i = 0, n = receiptDt.size(); i < n; i++) {
        		param = receiptDt.get(i);
        		int type = getRowType(param);
        		if (type == DataSet.ROW_TYPE_INSERTED) {
        			
        			// CAR 요청정보 테이블 Update (AS-IS : getRequestUpdateReceCmop)
        			result += generalDao.addUpdate(NAMESAPCE + ".updateQamCarrequestState", param);
        			
        			// 1순번이라면 이상발생정보 테이블 업데이트
        			if("1".equals(param.get("SEQUENCE"))) {
        				
        				Map<String, Object> abnormalMap = new HashMap<String, Object>();
        				abnormalMap.put("ABNOCRNO", param.get("ABNOCRNO"));
        				abnormalMap.put("ABNOCRTYPE", param.get("ABNOCRTYPE"));
        				abnormalMap.put("STATE", param.get("STATE"));
        				
        				result += generalDao.addUpdate(NAMESAPCE_QAM + ".updateQamAbnormalOccurrence", abnormalMap);
        				
        			}
        			//접수테이블 1차수 증가
        			result += generalDao.addUpdate(NAMESAPCE + ".deleteQamCarapproval", param);
        			
        			param.put("DEGREE", Integer.parseInt(StringUtil.Object2String(param.get("DEGREE")))+ 1);
        			result += generalDao.addUpdate(NAMESAPCE + ".insertQamCarapproval", param);
        			
        		} 
        	}
        }
    	
    	//========================================================
		//CAR 승인 저장
		//========================================================
    	if(acceptDt != null) {
        	for (int i = 0, n = acceptDt.size(); i < n; i++) {
        		param = acceptDt.get(i);
        		int type = getRowType(param);
        		if (type == DataSet.ROW_TYPE_INSERTED) {
        			
    				param.put("VALIDSTATE", "Valid");
    				
        			// 승인여부가 Y라면 상태를 승인완료상태로 저장
        			if("Y".equals(param.get("ACTIONRESULT"))) {
        				param.put("STATE", "CARApprovalCompleted");
        			} 
        			// 승인여부가 N이라면 상태를 요청완료상태로 저장
        			else {
        				param.put("STATE", "CARRequestCompleted");
        				param.put("LASTTXNCOMMENT", "History");
        				param.put("TXNCOMMENT", "History");
        			}
        			
        			result += generalDao.addUpdate(NAMESAPCE + ".updateQamCarrequestState", param);
        			

        			// ------------------------------------------------------------
        			// [Car 승인정보] execute query (history 에 insert 하기 위해서 select 해옴) -> 새로운 차수는 조회없이,,
        			// ------------------------------------------------------------
        	 		//Map<String, Object> carapprovalData = generalDao.addSelectOneMap(NAMESAPCE + ".selectQamCarapproval", param);
        	 		//carapprovalData.putAll(param);
        	 		
    				result += generalDao.addUpdate(NAMESAPCE + ".updateQamCarapproval", param);
        			
        			// 1순번이라면 이상발생정보 테이블 업데이트
        			if("1".equals(param.get("SEQUENCE"))) {
        				
        				Map<String, Object> abnormalMap = new HashMap<String, Object>();
        				abnormalMap.put("ABNOCRNO", param.get("ABNOCRNO"));
        				abnormalMap.put("ABNOCRTYPE", param.get("ABNOCRTYPE"));
        				abnormalMap.put("STATE", param.get("STATE"));
        				abnormalMap.put("LASTTXNCOMMENT", "");
        				
        				result += generalDao.addUpdate(NAMESAPCE_QAM + ".updateQamAbnormalOccurrence", abnormalMap);
        				
        			}
        		}
        	}
        }
    	//========================================================
		//CAR 유효성 평가 저장
		//========================================================
    	if(validationDt != null) {
        	for (int i = 0, n = validationDt.size(); i < n; i++) {
        		param = validationDt.get(i);
        		int type = getRowType(param);
        		if (type == DataSet.ROW_TYPE_INSERTED) {
        			
        			// 마감여부가 Y라면 상태를 유효성평가 완료상태로 저장
        			if("Y".equals(param.get("ISCLOSE"))) {
        				param.put("STATE", "ValidityEvaluationCompleted");
        				param.put("CLOSEDATE", DateUtil.getNowDateTime());
        				
        				result += generalDao.addUpdate(NAMESAPCE + ".updateQamCarrequestState", param);
        			} 
        			// 마감여부가 N이라면 상태를 요청완료상태로 저장
        			else {
        				param.put("STATE", "CARRequestCompleted");
        				result += generalDao.addUpdate(NAMESAPCE + ".updateQamCarrequestState", param);

        				// 접수승인 테이블 유효성평가 NG로 박기
        				param.put("ACTIONRESULT", "Y");
        				param.put("REFUSEREASON", "VALIDATIONNG");
        				param.put("LASTTXNCOMMENT", "History");
        				param.put("TXNCOMMENT", "History");
        				
        				// ------------------------------------------------------------
            			// [Car 승인정보] execute query (history 에 insert 하기 위해서 select 해옴)
            			// ------------------------------------------------------------
            	 		Map<String, Object> carapprovalData = generalDao.addSelectOneMap(NAMESAPCE + ".selectQamCarapproval", param);
            	 		carapprovalData.putAll(param);
        				
        				result += generalDao.addUpdate(NAMESAPCE + ".updateQamCarapproval", carapprovalData);
        			}
        			
        			// 1순번이라면 이상발생정보 테이블 업데이트
        			if("1".equals(param.get("SEQUENCE"))) {
        				
        				Map<String, Object> abnormalMap = new HashMap<String, Object>();
        				abnormalMap.put("ABNOCRNO", param.get("ABNOCRNO"));
        				abnormalMap.put("ABNOCRTYPE", param.get("ABNOCRTYPE"));
        				abnormalMap.put("STATE", param.get("STATE"));
        				abnormalMap.put("LASTTXNCOMMENT", "");
        				
        				result += generalDao.addUpdate(NAMESAPCE_QAM + ".updateQamAbnormalOccurrence", abnormalMap);
        				
        			}
        			param.put("DESCRIPTION", param.get("DEGREE"));
        			
        			List<Map<String, Object>> list =  generalDao.addSelect(NAMESAPCE + ".selectQamEstimatevalidityList", param);
        			if(list != null && list.size() > 0) {
        				result += generalDao.addUpdate(NAMESAPCE + ".updateQamEstimatevalidity", param);
        			} else {
            			result += generalDao.addUpdate(NAMESAPCE + ".insertQamEstimatevalidity", param);
        			}
        		}
        	}
        }
    	
    	//========================================================
		//AffectLot 저장 //lot 해체 처리 ---> khyed
		//========================================================
    	if(affectDt != null) {

    		String userId = SessionUtil.getUserId();
    		String languageType = StringUtil.Object2String(SessionUtil.getSessionValue("LANGUAGETYPE"));
    		int sequence = 0;
    		
    		String reasonCodeClassId = "", reasonCode = "", comment = "", lotId = "";
    		
    		for (int i = 0, n = affectDt.size(); i < n; i++) {
        		
        		param = affectDt.get(i);
        		int type = getRowType(param);
        		lotId = StringUtil.Object2String(param.get("LOTID"));
        		
        		
        		//첫번째 로우일 경우에만 가져오면 됨
        		if(i == 0) {
        			// ------------------------------------------------------------
        			// [reasonCodeClassId, reasonCode, comment] make Query parameters
        			// ------------------------------------------------------------
//        			Map<String, String> resonMap = retReasonInfo(StringUtil.Object2String(param.get("ABNOCRTYPE")), StringUtil.Object2String(param.get("ABNOCRNO")));
//        			reasonCodeClassId = resonMap.get("reasonCodeClassId");
//        			reasonCode = resonMap.get("reasonCode");
//        			comment = resonMap.get("comment");
        			
        			reasonCodeClassId = "QCLockInQuality";
    				reasonCode = selectReasonCode(StringUtil.Object2String(param.get("ABNOCRTYPE")), StringUtil.Object2String(param.get("ABNOCRNO")));
    				comment = "SaveQualityInspectionNCRIssue"; 
        			
        			if (type == DataSet.ROW_TYPE_INSERTED) {
        				sequence = qamService.selectAffectLotSequence(param);
        			}
        		}
        		
        		// ------------------------------------------------------------
    			// [Lot Data] execute query
    			// ------------------------------------------------------------
        		Map<String, Object> lotParamMap = new HashMap<String, Object>();
        		lotParamMap.put("LOTID", param.get("LOTID"));
    	 		Map<String, Object> lotMap = generalDao.addSelectOneMap(NAMESAPCE_PCM + ".selectPcmLotList", lotParamMap);
    	 		
        		
        		if (type == DataSet.ROW_TYPE_INSERTED) {
        			
        			// ------------------------------------------------------------
        			// [AffectLot Data] make Query parameters
        			// ------------------------------------------------------------
        			param.put("SEQUENCE", sequence);
        			param.put("REASONCODEID", reasonCode);
        			param.put("AFFECTEDDATE", DateUtil.getNowDateTime());
        			
        			param.put("PROCESSDEFID", lotMap.get("PROCESSDEFID"));
        			param.put("PROCESSDEFVERSION", lotMap.get("PROCESSDEFVERSION"));
        			param.put("PROCESSSEGMENTID", lotMap.get("PROCESSSEGMENTID"));
        			param.put("PROCESSSEGMENTVERSION", lotMap.get("PROCESSSEGMENTVERSION"));
        			param.put("USERSEQUENCE", lotMap.get("USERSEQUENCE"));
        			param.put("PRODUCTDEFID", lotMap.get("PRODUCTDEFID"));
        			param.put("PRODUCTDEFVERSION", lotMap.get("PRODUCTDEFVERSION"));
        			param.put("AREAID", lotMap.get("AREAID"));
        			
        			// ------------------------------------------------------------
        			// Lot Locking process
        			// ------------------------------------------------------------
        			if("Y".equals(param.get("ISLOCKING"))) {
        				String lockingTxnHistKey = wipService.saveLotLocking(dto, lotId, reasonCodeClassId, reasonCode, comment, userId, languageType);
        				param.put("LOCKINGTXNHISTKEY", lockingTxnHistKey);
        				
        			} else if("N".equals(param.get("ISLOCKING")) && "Y".equals(lotMap.get("ISLOCKING"))) {
        				wipService.saveLotLockingRelease(lotId, StringUtil.Object2String(param.get("LOCKINGTXNHISTKEY")), reasonCode, comment);
        				updateLotWorkResult(param);
        			}
        			
        			// ------------------------------------------------------------
        			// [AffectLot Data] execute Query
        			// ------------------------------------------------------------
        			result += generalDao.addUpdate(NAMESAPCE_QAM + ".insertQamAffectlot", param);
        			sequence++;
        			
        		} else if (type == DataSet.ROW_TYPE_UPDATED) {
        			
        			// ------------------------------------------------------------
        			// Lot Locking process
        			// ------------------------------------------------------------
        			if("Y".equals(param.get("ISLOCKING")) && !"Y".equals(param.get("PREV_ISLOCKING")) 
        					&& !"RawInspection".equals(param.get("ABNOCRTYPE")) && !"ArrivalRawMaterialInspection".equals(param.get("ABNOCRTYPE")) ) {
        				//2020-01-07 이미 락킹처리시 재 락킹 하지않음
        				String lockingTxnHistKey = wipService.saveLotLocking(dto, lotId, reasonCodeClassId, reasonCode, comment, userId, languageType);
        				param.put("LOCKINGTXNHISTKEY", lockingTxnHistKey);
        				
        			} else if("N".equals(param.get("ISLOCKING")) && "Y".equals(lotMap.get("ISLOCKING"))) {
        				wipService.saveLotLockingRelease(lotId, StringUtil.Object2String(param.get("LOCKINGTXNHISTKEY")), "LockReleaseQC", comment);
        				updateLotWorkResult(param);
        			}
        			
        			// ------------------------------------------------------------
        			// [AffectLot Data] execute Query
        			// ------------------------------------------------------------
        			result += generalDao.addUpdate(NAMESAPCE_QAM + ".updateQamAffectlot", param);
        		}
        	}
        }
    	putDataSetMap(dto, retMap);
    }
    
    public Map<String, String> retReasonInfo(String abnocrtype, String abnocrno) {
    	Map<String, String> retMap = new HashMap<String, String>();
    	String reasonCodeClassId = "", reasonCode = "", comment = "";
    	
    	switch (abnocrtype) {
			case "ChemicalAnalysisInspection": // 약품분석
				reasonCodeClassId = "QCLockInChemical";
				reasonCode = "LockChemicalDrugConcent";
				comment = "SaveChamiclAnalysis";
				break;
				
			case "ReliabilityRegular": // 신뢰성 검증(정기)
				reasonCodeClassId = "QCLockInReliabilityRegular";
				reasonCode = "LockReliablRegNonconfirm";
				comment = "SaveReliabilityRegular";
				break;		
				
			case "ProcessInspection": // 공정수입
				reasonCodeClassId = "QCLockInProcess";
				reasonCode = "LockProcessNonconfirm";
				comment = "SaveOSPInspection";
				break;			
				
			case "SpillShipmentInspection": // 출하검사 (유출공정)
				reasonCodeClassId = "QCLockInShipment";
				reasonCode = "LockShipmentNonconfirm";
				comment = "SaveShipmentInspection";
				break;	
				
			case "ReasonShipmentInspection": // 출하검사 (원인공정)
				reasonCodeClassId = "QCLockInShipment";
				reasonCode = "LockShipmentNonconfirm";
				comment = "SaveShipmentInspNCRIssue";
				break;	
				
			case "SelfInspectionTake": // 자주검사 (입고)
				reasonCodeClassId = "QCLockInSelfFinalExamination";
				reasonCode = "LockSelfExamNonconfirm";
				comment = "SaveSelfInspectionTakeNCRIssue";
				break;	
				
			case "SelfInspectionShip": // 자주검사 (출하)
				reasonCodeClassId = "QCLockInSelfFinalExamination";
				reasonCode = "LockSelfExamNonconfirm";
				comment = "SaveSelfInspectionShipNCRIssue";
				break;	
				
			case "FinishInspection": // 최종검사 
				reasonCodeClassId = "QCLockInSelfFinalExamination";
				reasonCode = "LockFinalExamNonconfirm";
				comment = "SaveFinishInspectionNCRIssue";
				break;	
				
			case "QualityStandardInspection": // 품질규격
				reasonCodeClassId = "QCLockInQuality";
				reasonCode = selectReasonCode(abnocrtype, abnocrno);
				comment = "SaveQualityInspectionNCRIssue";
				break;	
    	}
    	retMap.put("reasonCodeClassId", reasonCodeClassId);
    	retMap.put("reasonCode", reasonCode);
    	retMap.put("comment", comment);
    	return retMap;
    }
    
    // 이상발생 테이블에 등록된 이상발생 사유코드 검색 함수
 	private String selectReasonCode(String abnormalNo, String abnormalType)  {
 		Map<String, Object> param = new HashMap<>();
 		param.put("ABNOCRNO", abnormalNo);
 		param.put("ABNOCRTYPE", abnormalType);
 		
 		List<Map<String, Object>> list =  generalDao.addSelect(NAMESAPCE + ".selectAbnormalReasonCode", param);

 		if(list != null && list.size() > 0) {
 			return StringUtil.Object2String(list.get(0).get("REASONCODEID"));
 			
 		} else {
 			return "";
 		}
 	}
 	
 	/* PCM_LOTWORKRESULT에 규격등록 검사결과 업데이트 (AS-IS : SetUpdateLotWorkResult)
 	 * 2021.07.30 수입검사 NCR 추가
 	 */
 	public void updateLotWorkResult(Map<String, Object> map) {
 		Map<String, Object> paramMap = new HashMap<String, Object>();
 		Map<String, Object> lotWorkResultMap = new HashMap<String, Object>();
 		Map<String, Object> updateMap = new HashMap<String, Object>();
        
 		Boolean isUpdate = false;
 		
 		if("QualityStandardInspection".equals(StringUtil.Object2String(map.get("ABNOCRTYPE")))
		   ||"ProcessInspection".equals(StringUtil.Object2String(map.get("ABNOCRTYPE"))) /*2021.07.30 TOBE Add 수입검사 추가*/
				) {			
			
 			isUpdate = true;
 			
			paramMap.put("LOTID", map.get("LOTID"));
	 		Map<String, Object> lotMap = generalDao.addSelectOneMap(NAMESAPCE_PCM + ".selectPcmLotList", paramMap);
	 		
	 		if(lotMap != null) {

	 			paramMap.put("PRODUCTDEFID", lotMap.get("PRODUCTDEFID"));
	 	 		paramMap.put("PRODUCTDEFVERSION", lotMap.get("PRODUCTDEFVERSION"));
	 	 		paramMap.put("PROCESSSEGMENTID", lotMap.get("PROCESSSEGMENTID"));
	 	 		paramMap.put("WORKCOUNT", lotMap.get("WORKCOUNT"));
	 	 		
	 	 		List<Map<String, Object>> lotWorkResultList = generalDao.addSelect(NAMESAPCE_PCM + ".selectPcmLotworkresultList", paramMap);
	 	 		
	 	 		if(lotWorkResultList != null) {
	 	 			lotWorkResultMap = lotWorkResultList.get(0); 	 	 			

	 	 			/*2021.07.30 TOBE Add 수입검사 NCR에서 Locking 초기화할 경우 계측검사 필수인 경우만 수행*/
	 	 			if ("ProcessInspection".equals(StringUtil.Object2String(map.get("ABNOCRTYPE")))){
		 	 			
		 	 			Map<String, Object> measureMap = new HashMap<String, Object>();
		 	 			measureMap = generalDao.addSelectOneMap(NAMESPACE_QAM00600 + ".selectMeasureInfo", lotMap);
		 	 			
		 	 			if (!"Y".equals(measureMap.get("OPERATIONREQUIRED")))
		 				{
		 	 				isUpdate = false;
		 	 			}		 					
		 	 		}
		 	 		
		 	 		if (isUpdate)
		 	 		{
		 	 			String result = "Y".equals(StringUtil.Object2String(map.get("ISLOCKING"))) ? "N" : "Y";
	
		 	 			updateMap.put("TXNHISTKEY", lotWorkResultMap.get("TXNHISTKEY"));
		 	 			updateMap.put("LOTID", lotWorkResultMap.get("LOTID"));
		 	 			updateMap.put("MEASUREINSPRESULT", result);
		 	 		
		 	 			generalDao.addUpdate(NAMESAPCE_PCM + ".updateCtLotworkresultKey", updateMap);
		 	 		}
	 	 		}
	 		}
		}
 	}    
 	
 	/**
     * @fn
     * @brief (Override method) AffectLot을 수동추가하기위한 Lot조회
     * @remark 
     * @see smh.qam.service.QAM01200Service#selectLotToAddAffectLot(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotToAddAffectLot(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotToAddAffectLot", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 품질규격 측정항목의 파일 리스트 조회
     * @remark 
     * @see smh.qam.service.QAM01200Service#selectOperationInspMeasureImage(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectOperationInspMeasureImage(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectOperationInspMeasureImage", param));
    }

}