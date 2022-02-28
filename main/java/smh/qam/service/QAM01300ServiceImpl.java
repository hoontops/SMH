package smh.qam.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;


/**
* @file: QAM01300ServiceImpl.java
* @Package: smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name: QAM01300ServiceImpl
* @Company: Built1
* @Create Date: 2021.05.07
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.05.07.       권혜영     최초  생성
*/
@Service
public class QAM01300ServiceImpl extends AbstractNbdfService implements QAM01300Service {

    public static final String NAMESAPCE = "smh.qam.dao.QAM01300Dao";
    public static final String NAMESAPCE_QAM = "smh.qam.dao.QAMCommonDao";
    public static final String NAMESAPCE_PCM = "smh.pcm.dao.PCMCommonDao";

    @Autowired
    private GeneralDao generalDao;
    
    @Autowired
    private QAMCommonService qamService;
    
    /**
     * @fn
     * @brief (Override method) 출하검사 이력 조회
     * @remark 
     * @see smh.qam.service.QAM01300Service#selectShipmentInspHistory(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectShipmentInspHistoryList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectShipmentInspHistoryList", param));
    }
    
    /**
     * @fn
     * @brief (Override method) NCR 최종 발행
     * @remark 
     * @see smh.qam.service.QAM01300Service#selectDefectToNCRShipmentList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectDefectToNCRShipmentList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDefectToNCRShipmentList", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 그룹코드 수정, 등록, 삭제 기능
     * @remark - 출하 검사 NCR 정보 수정, 등록, 삭제 트랜젝션 처리 -> 항상 ROW_TYPE_UPDATED 로 넘어옴
     * @see smh.bas.service.BAS05300Service#saveShipmentInspNCRIssue(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void saveShipmentInspNCRIssue(UiMapDto dto) throws Exception {
    	DataSetMap finishIssueDt = getParametersDataSetMap(dto, "ds_qamFinishIssue");
    	DataSetMap causeProcessSegmentIssueDt = getParametersDataSetMap(dto, "ds_qamCauseProcessSegmentIssue");
    	DataSetMap paramMap = null;
    	
        Map<String, Object> param = new HashMap<String, Object>();
        List<Map<String, Object>> prevList = new ArrayList<Map<String,Object>>();
        
        String prevAreaId="";
		String prevProcessSegmentId ="";
		String prevProcessSegmentVersion ="";
		String userSequence ="";

 		
		// --------------------------------------------------------------------------------------
		// make Query parameters 
		// --------------------------------------------------------------------------------------
		if(finishIssueDt != null && finishIssueDt.size() > 0) {
			paramMap = finishIssueDt;
			param = finishIssueDt.get(0);
			
		} else if(causeProcessSegmentIssueDt != null && causeProcessSegmentIssueDt.size() > 0) {
			paramMap = causeProcessSegmentIssueDt;
			param = causeProcessSegmentIssueDt.get(0);
			
		}
		
		// ------------------------------------------------------------
		// [Lot Data] execute query
		// ------------------------------------------------------------
		Map<String, Object> lotParamMap = new HashMap<String, Object>();
		lotParamMap.put("LOTID", param.get("RESOURCEID"));
 		Map<String, Object> lotMap = generalDao.addSelectOneMap(NAMESAPCE_PCM + ".selectPcmLotList", lotParamMap);
 		
		// --------------------------------------------------------------------------------------
		// [출하검사의 이전공정 (최종검사) 정보를 조회] execute Query
		// --------------------------------------------------------------------------------------
		prevList = generalDao.addSelect(NAMESAPCE + ".selectPrevCauseData", param);
		
		if(prevList != null && !prevList.isEmpty() && prevList.size() > 0) {
			prevAreaId = prevList.get(0).get("PREVAREAID") == null ? "" :prevList.get(0).get("PREVAREAID").toString();
			prevProcessSegmentId = prevList.get(0).get("PREVPROCESSSEGMENTID") == null? "" :prevList.get(0).get("PREVPROCESSSEGMENTID").toString();
			prevProcessSegmentVersion = prevList.get(0).get("PREVPROCESSSEGMENTVERSION") == null ? "" : prevList.get(0).get("PREVPROCESSSEGMENTVERSION").toString();
			userSequence = prevList.get(0).get("USERSEQUENCE") == null? "" :prevList.get(0).get("USERSEQUENCE").toString();
		}
		
		// ------------------------------------------------------------
		// [NCR Data] execute Query
		// ------------------------------------------------------------
        int result = 0;
        for (int i = 0, n = paramMap.size(); i < n; i++) {
            param = paramMap.get(i);
            
            if(StringUtil.isNullOrEmpty(param.get("ABNOCRNO"))) {
            	
            	DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern("yyyyMMdd");
            	String abnormalNO = qamService.createSequence("AbnormalSequence", LocalDate.now().format(dateFormat));
            	String abnormalType = StringUtil.Object2String(param.get("PROCESSSEGMENTCLASSTYPE"));
            			
        		// ------------------------------------------------------------
        		// [이상발생정보 Data] make Query parameters && execute query
        		// ------------------------------------------------------------
            	Map<String, Object> abnormalOccurrenceParam = new HashMap<String, Object>();
            	abnormalOccurrenceParam.put("ABNOCRNO", abnormalNO);
            	abnormalOccurrenceParam.put("ABNOCRTYPE", abnormalType);
            	
            	Map<String, Object> abnormaloccurrenceData = generalDao.addSelectOneMap(NAMESAPCE_QAM + ".selectQamAbnormalOccurrenceInfo", abnormalOccurrenceParam);
            	
            	if(abnormaloccurrenceData != null) {
            		throw new BizException("InValidData002", String.format("AbnormalNO = %s, AbnormalType = %s", abnormalNO, abnormalType ));
            	}
            	
            	param.put("ABNOCRNO", abnormalNO);
            	param.put("ABNOCRTYPE", abnormalType);
            	
            	param.put("LOTID", param.get("RESOURCEID"));
            	param.put("PROCESSRELNO", param.get("DEGREE"));
  
            	param.put("PROCESSSEGMENTID", prevProcessSegmentId);
            	param.put("PROCESSSEGMENTVERSION", prevProcessSegmentVersion);
            	param.put("USERSEQUENCE", userSequence);
            	param.put("AREAID", prevAreaId);

            	param.put("PRODUCTDEFID", lotMap.get("PRODUCTDEFID"));
            	param.put("PRODUCTDEFVERSION", lotMap.get("PRODUCTDEFVERSION"));
            	
            	param.put("PROCESSSEGMENTCLASSID", StringUtil.isNullOrEmpty(param.get("PROCESSSEGMENTCLASSID"))?"*":param.get("PROCESSSEGMENTCLASSID"));
            	param.put("CHILDEQUIPMENTID", StringUtil.isNullOrEmpty(param.get("CHILDEQUIPMENTID"))?"*":param.get("CHILDEQUIPMENTID"));
            	param.put("CONSUMABLEDEFID", StringUtil.isNullOrEmpty(param.get("PROCESSSEGMENTCLASSID"))?"*":param.get("CONSUMABLEDEFID"));
            	param.put("CONSUMABLEDEFVERSION", StringUtil.isNullOrEmpty(param.get("CONSUMABLEDEFVERSION"))?"*":param.get("CONSUMABLEDEFVERSION"));
            	
            	param.put("REASONCODEID", "LockShipmentNonconfirm");
            	
            	
            	param.put("NCRISSUEDATE", qamService.getCurrentSystemTime("yyyyMMddHHmmss"));
        		param.put("ISNCRISSUE", "Y");
        		param.put("VALIDSTATE", "Valid");
        		
        		//2020-01-22 
    			if(abnormalType.equals("SpillShipmentInspection"))
    			{//유출공정 -> 최종정보
    				param.put("REASONCONSUMABLEDEFID", lotMap.get("PRODUCTDEFID"));
    				param.put("REASONCONSUMABLEDEFVERSION", lotMap.get("PRODUCTDEFVERSION"));
    				param.put("REASONCONSUMABLELOTID", param.get("RESOURCEID"));
    				param.put("REASONSEGMENTID", prevProcessSegmentId);
    				param.put("REASONAREAID", prevAreaId);
    			}
    			else if(abnormalType.equals("ReasonShipmentInspection"))
    			{//원인공정 -> 입력정보

            		param.put("REASONCONSUMABLEDEFID", StringUtil.isNullOrEmpty(param.get("REASONCONSUMABLEDEFID"))?null:param.get("REASONCONSUMABLEDEFID"));
            		param.put("REASONCONSUMABLEDEFVERSION", StringUtil.isNullOrEmpty(param.get("REASONCONSUMABLEDEFVERSION"))?null:param.get("REASONCONSUMABLEDEFVERSION"));
            		param.put("REASONCONSUMABLELOTID", StringUtil.isNullOrEmpty(param.get("REASONCONSUMABLELOTID"))?null:param.get("REASONCONSUMABLELOTID"));
            		param.put("REASONSEGMENTID", StringUtil.isNullOrEmpty(param.get("REASONSEGMENTID"))?null:param.get("REASONSEGMENTID"));
            		param.put("REASONAREAID", StringUtil.isNullOrEmpty(param.get("REASONAREAID"))?null:param.get("REASONAREAID"));
    			}
        		
            	result += generalDao.addUpdate(NAMESAPCE_QAM + ".insertQamAbnormaloccurrence", param);
            }
            else {
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
            	
            	Map<String, Object> abnormalMap = new HashMap<String, Object>();
            	abnormalMap.put("ABNOCRNO", param.get("ABNOCRNO"));
				abnormalMap.put("ABNOCRTYPE", param.get("ABNOCRTYPE"));
				//abnormalMap.put("DESCRIPTION", param.get("DESCRIPTION")); //화면단에서 값이 넘어오지 않음 (AS-IS 상에 JAVA에만 있음)
				
            	result += generalDao.addUpdate(NAMESAPCE_QAM + ".updateQamAbnormalOccurrence", abnormalMap);
            }
        }
        
        putDataSetMap(dto, result);
    }
    
    /**
     * @fn
     * @brief (Override method) 출하검사 이력조회 > Lot 상세 정보를 조회
     * @remark 
     * @see smh.qam.service.QAM01300Service#selectLotInfoByProcessShipment(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotInfoByProcessShipment(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotInfoByProcessShipment", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 출하검사 결과 이력 detail 그리드
     * @remark 
     * @see smh.qam.service.QAM01300Service#selectShipmentInspHistoryDetailExterior(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectShipmentInspHistoryDetailExterior(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectShipmentInspHistoryDetailExterior", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 출하검사 LotId 로 LotMessage 공정
     * @remark 
     * @see smh.qam.service.QAM01300Service#selectLotMessageShipmentInsp(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectLotMessageShipmentInsp(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectLotMessageShipmentInsp", param));
    }

}