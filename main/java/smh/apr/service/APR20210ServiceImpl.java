package smh.apr.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

/**
* @file: APR20210ServiceImpl.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR20210ServiceImpl
* @Company: Built1
* @Create Date: 2022.2.3
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 2. 3.   박대호     최초  생성
*/
@Service 
public class APR20210ServiceImpl extends AbstractNbdfService implements APR20210Service {

    public static final String NAMESAPCE = "smh.apr.dao.APR20210Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 업적평가-파트장평가 수정
     * @remark 
     * @see smh.apr.service.APR20210ServiceImpl#updatePartEvaluation(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void updatePartEvaluation(UiMapDto dto) throws Exception {
    	
    	DataSetMap paramMapMaster = getParametersDataSetMap(dto, "ds_evaluationHeader");
    	DataSetMap paramMapDetail = getParametersDataSetMap(dto, "ds_evaluationDetail");
    	Map<String, Object> master = getParametersMap(dto);
        Map<String, Object> detail = getParametersMap(dto);
        int result = 0;
        System.out.println("-----------------------" + paramMapMaster);
        if(paramMapMaster.size() > 0) {
        	master = paramMapMaster.get(0);
            int masterType = getRowType(master);
            if (masterType == DataSet.ROW_TYPE_UPDATED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".updatePartEvaluationMaster", master);
            	result += generalDao.addUpdate(NAMESAPCE + ".updatePartEvaluationAppraisalMaster", master);
            }
        }
        for (int i = 0, n = paramMapDetail.size(); i < n; i++) {
        	detail = paramMapDetail.get(i);
            int type = getRowType(detail);
            
            if (type == DataSet.ROW_TYPE_UPDATED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".updatePartEvaluationDetail", detail);
            } 
        }
    	
    	
        putDataSetMap(dto, result);
    }
    /**
     * @fn
     * @brief (Override method) 업적평가-피평가자 등급조회
     * @remark 
     * @see smh.apr.service.APR20210ServiceImpl#selectPerformanceRating(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectPerformanceRating(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectPerformanceRating", param));
    }
}