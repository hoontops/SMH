package smh.apr.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;

/**
* @file: APR10110ServiceImpl.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR10110ServiceImpl
* @Company: Built1
* @Create Date: 2022.1.13
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 13.   박대호     최초  생성
*/
@Service 
public class APR10110ServiceImpl extends AbstractNbdfService implements APR10110Service {

    public static final String NAMESAPCE = "smh.apr.dao.APR10110Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 로그인 피평가자 개인정보
     * @remark 
     * @see smh.apr.service.APR10110ServiceImpl#selectAppraisalUserInfo(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectAppraisalUserInfo(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectAppraisalUserInfo", param));
    }

    /**
     * @fn
     * @brief (Override method) 업적평가 피평가자
     * @remark 
     * @see smh.apr.service.APR10110ServiceImpl#selectEvaluationList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectEvaluationList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectEvaluationList", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 업적평가 목표등록 Detail 조회
     * @remark 
     * @see smh.apr.service.APR10110ServiceImpl#selectEvaluationListDetail(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectEvaluationListDetail(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> masterList = generalDao.addSelect(NAMESAPCE + ".selectEvaluationListMaster", param);
        
        if(masterList.size() > 0) {
            Map<String, Object> master = masterList.get(0);
            
            if (master != null)
    		{
            	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectEvaluationListDetail", master),"output2");
    		}
        }
     
        putDataSetMap(dto, masterList,"output1");
    }
    /**
     * @fn
     * @brief (Override method) KPI팝업 조회
     * @remark 
     * @see smh.apr.service.APR10110ServiceImpl#selectKpiList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectKpiList(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectKpiList", param));
    }
    /**
     * @fn
     * @brief (Override method) 업적평가 목표설정 수정 삭제
     * @remark 
     * @see smh.apr.service.APR10110ServiceImpl#saveEvaluationList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveEvaluationList(UiMapDto dto) throws Exception {
    	
    	DataSetMap paramMapHeader = getParametersDataSetMap(dto, "ds_evaluationHeader");
    	Map<String, Object> paramHeader;
    	paramHeader = paramMapHeader.get(0);
    	
    	List<Map<String, Object>> masterList = generalDao.addSelect(NAMESAPCE + ".selectEvaluationListMaster", paramHeader);
    	if (masterList.size() < 1) {//등록된 마스터가 없으면 새로 저장
    		Map<String, Object> MasterSeq = generalDao.addSelect(NAMESAPCE + ".selectAprMasterSeq", paramHeader).get(0);
    		paramHeader.put("HJSPFM_PER_OBJECT_MASTER_SEQ",  MasterSeq.get("NEXTVAL"));
    		generalDao.addUpdate(NAMESAPCE + ".insertAprMaster", paramHeader);
    	}
    	int headerType = getRowType(paramHeader);
    	if (headerType == DataSet.ROW_TYPE_UPDATED) {
    		generalDao.addUpdate(NAMESAPCE + ".updateAprMaster", paramHeader);
    	}
        DataSetMap paramMapDetail = getParametersDataSetMap(dto, "ds_evaluationDetail");
        Map<String, Object> param;
        
        int result = 0;
        for (int i = 0, n = paramMapDetail.size(); i < n; i++) {
            param = paramMapDetail.get(i);
            
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_INSERTED) {
            	Map<String, Object> DetailSeq = generalDao.addSelect(NAMESAPCE + ".selectAprDetailSeq", param).get(0);
            	param.put("HJSPFM_PER_OBJECT_DETAIL_SEQ",  DetailSeq.get("NEXTVAL"));
            	param.put("HJSPFM_PER_OBJECT_MASTER_SEQ",  paramHeader.get("HJSPFM_PER_OBJECT_MASTER_SEQ"));
            	System.out.println("insertAprDetail param : " + param);
            	result += generalDao.addUpdate(NAMESAPCE + ".insertAprDetail", param);
            } else if (type == DataSet.ROW_TYPE_UPDATED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".updateAprDetail", param);
            } else if (type == DataSet.ROW_TYPE_DELETED) {
            	result += generalDao.addDelete(NAMESAPCE + ".deleteAprDetail", param);
            }
            
            
        }
        
        
        putDataSetMap(dto, result);
    }
    /**
     * @fn
     * @brief (Override method) 상태에 따른 평가기간 Check
     * @remark 
     * @see smh.apr.service.APR10110ServiceImpl#selectCheckAppraisalPeriod(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectCheckAppraisalPeriod(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectCheckAppraisalPeriod", param));
    }
    
    
    /**
     * @fn
     * @brief (Override method) 업적평가 목표설정 제출
     * @remark 
     * @see smh.apr.service.APR10110ServiceImpl#saveSubmitMaster(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveSubmitMaster(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	int result = 0;
    	result += generalDao.addUpdate(NAMESAPCE + ".updateAppraisalMaster", param);
    	result += generalDao.addUpdate(NAMESAPCE + ".updatePersonObjectMaster", param);
    	putDataSetMap(dto, result);
    }
    /**
     * @fn
     * @brief (Override method) 상태에 따른 평가기간 List Check
     * @remark 
     * @see smh.apr.service.APR10110ServiceImpl#selectCheckAppraisalPeriodList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectCheckAppraisalPeriodList(UiMapDto dto) throws Exception {
    	DataSetMap paramList = getParametersDataSetMap(dto, "ds_appraisalPeriod");
        Map<String, Object> param;
        List<Map<String, Object>> resultList = new ArrayList<Map<String, Object>>(); 
        for (int i = 0, n = paramList.size(); i < n; i++) {
            param = paramList.get(i);
            resultList.add(generalDao.addSelect(NAMESAPCE + ".selectCheckAppraisalPeriod", param).get(0));
        }
        putDataSetMap(dto, resultList);
    }
    /**
     * @fn
     * @brief (Override method) 업적평가 목표설정 List제출
     * @remark 
     * @see smh.apr.service.APR10110ServiceImpl#saveSubmitMasterList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveSubmitMasterList(UiMapDto dto) throws Exception {
    	DataSetMap paramList = getParametersDataSetMap(dto, "ds_submit");
    	Map<String, Object> param;
    	int result = 0;
    	for (int i = 0, n = paramList.size(); i < n; i++) {
    		param = paramList.get(i);
    		result += generalDao.addUpdate(NAMESAPCE + ".updateAppraisalMaster", param);
        	result += generalDao.addUpdate(NAMESAPCE + ".updatePersonObjectMaster", param);
    	}
    	
    	putDataSetMap(dto, result);
    }
}