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
* @file: APR10210ServiceImpl.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR10210ServiceImpl
* @Company: Built1
* @Create Date: 2022.1.26
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 26.   박대호     최초  생성
*/
@Service 
public class APR10210ServiceImpl extends AbstractNbdfService implements APR10210Service {

    public static final String NAMESAPCE = "smh.apr.dao.APR10210Dao";

    @Autowired
    private GeneralDao generalDao;


    /**
     * @fn
     * @brief (Override method) 업적평가 본인평가 Detail 조회
     * @remark 
     * @see smh.apr.service.APR10210ServiceImpl#selectSelfEvaluationListDetail(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectSelfEvaluationListDetail(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> masterList = generalDao.addSelect(NAMESAPCE + ".selectSelfEvaluationListMaster", param);
        
        if(masterList.size() > 0) {
            Map<String, Object> master = masterList.get(0);
            
            if (master != null)
    		{
            	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectSelfEvaluationListDetail", master),"output2");
    		}
        }
     
        putDataSetMap(dto, masterList,"output1");
    } 
    /**
     * @fn
     * @brief (Override method) 업적평가 본인평가 수정
     * @remark 
     * @see smh.apr.service.APR10210ServiceImpl#saveSelfEvaluationList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void saveSelfEvaluationList(UiMapDto dto) throws Exception {

        DataSetMap paramMapDetail = getParametersDataSetMap(dto, "ds_evaluationDetail");
        Map<String, Object> param;
        
        int result = 0;
        for (int i = 0, n = paramMapDetail.size(); i < n; i++) {
            param = paramMapDetail.get(i);
            
            int type = getRowType(param);
            if (type == DataSet.ROW_TYPE_UPDATED) {
            	result += generalDao.addUpdate(NAMESAPCE + ".updateSelfAprDetail", param);
            } 
        }
        putDataSetMap(dto, result);
    }
}