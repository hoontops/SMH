package smh.apr.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

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
public class APR20310ServiceImpl extends AbstractNbdfService implements APR20310Service {

    public static final String NAMESAPCE = "smh.apr.dao.APR20310Dao";
    public static final String NAMESAPCE2 = "smh.apr.dao.APR10110Dao";
    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 역량평가 대상자 조회
     * @remark 
     * @see smh.apr.service.APR20310ServiceImpl#selectAbilityUserList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectAbilityUserList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectAbilityUserList", param));
    }
    /**
     * @fn
     * @brief (Override method) 평가표 조회
     * @remark 
     * @see smh.apr.service.APR20310ServiceImpl#selectAbilityTableList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectAbilityTableList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        List<Map<String, Object>> tableList = generalDao.addSelect(NAMESAPCE + ".selectAbilityTableList", param);
        if(tableList.size() > 0) {
        	Map<String, Object> MasterSeq = tableList.get(0);
        	param.put("HJSPFM_COMP_GOAL_MASTER_SEQ",  MasterSeq.get("HJSPFM_COMP_GOAL_MASTER_SEQ"));
        	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectAbilityTableMaster", param),"output1");
        }
        putDataSetMap(dto, tableList,"output2");
    }
    /**
     * @fn
     * @brief (Override method) 평가표 상세 조회
     * @remark 
     * @see smh.apr.service.APR20310ServiceImpl#selectRequirementList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectRequirementList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectRequirementList", param));
    }
    /**
     * @fn
     * @brief (Override method) Rating 조회
     * @remark 
     * @see smh.apr.service.APR20310ServiceImpl#selectRatingList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectRatingList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectRatingList", param));
    }
    /**
     * @fn
     * @brief (Override method) 파트장업적평가 저장
     * @remark 
     * @see smh.apr.service.APR20310ServiceImpl#updateAbilityTable(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void updateAbilityTable(UiMapDto dto) throws Exception {
    	DataSetMap paramMapMaster = getParametersDataSetMap(dto, "ds_abilityTableMaster");
    	DataSetMap paramMapDetail = getParametersDataSetMap(dto, "ds_abilityTableList");
    	Map<String, Object> master = getParametersMap(dto);
        Map<String, Object> detail = getParametersMap(dto);
        int result = 0;
        if(paramMapMaster.size() > 0) {
        	master = paramMapMaster.get(0);
            int masterType = getRowType(master);
            if (masterType == DataSet.ROW_TYPE_UPDATED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".updateAbilityTableMaster", master);
            }
        }
        for (int i = 0, n = paramMapDetail.size(); i < n; i++) {
        	detail = paramMapDetail.get(i);
            int type = getRowType(detail);
            
            if (type == DataSet.ROW_TYPE_UPDATED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".updateAbilityTableList", detail);
            } 
        }
        putDataSetMap(dto, result);
    }
    /**
     * @fn
     * @brief (Override method) 제출 시 Rating 입력여부 확인
     * @remark 
     * @see smh.apr.service.APR20310ServiceImpl#selectRatingExists(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectRatingExists(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        
        List<Map<String, Object>> resultList = generalDao.addSelect(NAMESAPCE + ".selectRatingDetailCount", param);
        if(resultList.size() > 0) {
        	if(generalDao.addSelect(NAMESAPCE + ".selectRatingExists", param).size() > 0) {
        		resultList.get(0).put("PASS_FLAG", "PASS");
        	} else {
        		resultList.get(0).put("PASS_FLAG", "FAIL");
        	}
        }
        putDataSetMap(dto, resultList);
    }

    /**
     * @fn
     * @brief (Override method) 제출
     * @remark 
     * @see smh.apr.service.APR20310ServiceImpl#updateAppraisalMaster(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void updateAppraisalMaster(UiMapDto dto) throws Exception {
    	Map<String, Object> param = getParametersMap(dto);
    	int result = 0;
    	result += generalDao.addUpdate(NAMESAPCE2 + ".updateAppraisalMaster", param);
    	putDataSetMap(dto, result);
    }
}