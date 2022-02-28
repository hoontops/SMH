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
* @file: APR20610ServiceImpl.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR20610ServiceImpl
* @Company: Built1
* @Create Date: 2022.2.7
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 2. 7.   박대호     최초  생성
*/
@Service 
public class APR20610ServiceImpl extends AbstractNbdfService implements APR20610Service {

    public static final String NAMESAPCE = "smh.apr.dao.APR20610Dao";
    
    @Autowired
    private GeneralDao generalDao;

  
    /**
     * @fn
     * @brief (Override method) 업적평가-1차평가자 수정
     * @remark 
     * @see smh.apr.service.APR20610ServiceImpl#update1stEvaluation(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void update1stEvaluation(UiMapDto dto) throws Exception {
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
            	Map<String, Object> rank = generalDao.addSelect(NAMESAPCE + ".select1stEvaluationRank", master).get(0);
            	master.put("STEP_VALUE",  rank.get("STEP_VALUE"));
            	result += generalDao.addUpdate(NAMESAPCE + ".update1stEvaluationMaster", master);
            	result += generalDao.addUpdate(NAMESAPCE + ".update1stEvaluationAppraisalMaster", master);
            }
        }
        for (int i = 0, n = paramMapDetail.size(); i < n; i++) {
        	detail = paramMapDetail.get(i);
            int type = getRowType(detail);
            
            if (type == DataSet.ROW_TYPE_UPDATED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".update1stEvaluationDetail", detail);
            } 
        }
    	
    	
        putDataSetMap(dto, result);
    }
    
}