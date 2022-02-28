package smh.apr.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.nexacro17.xapi.data.DataSet;

import smh.commons.TxnHistKey;

/**
* @file: APR10410ServiceImpl.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR10410ServiceImpl
* @Company: Built1
* @Create Date: 2022.1.25
* @Author: 이정훈
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 25.   이정훈     최초  생성
*/
@Service 
public class APR10410ServiceImpl extends AbstractNbdfService implements APR10410Service {

    public static final String NAMESAPCE = "smh.apr.dao.APR10410Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
     * @fn
     * @brief (Override method) 
     * @remark 		
     * @see smh.apr.service.APR10410ServiceImpl#selectAppraisalInfo(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectAppraisalInfo(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectAppraisalInfo", param),"output1");
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectAppraisalList", param),"output2");
    }
//    /**
//     * @fn
//     * @brief (Override method) 
//     * @remark 		
//     * @see smh.apr.service.APR10410ServiceImpl#selectAppraisalHistoryDetailList(com.nbdf.commons.ui.vo.UiMapDto)
//     */
//    public void selectAppraisalHistoryDetailList(UiMapDto dto) throws Exception {
//    	Map<String, Object> param = getParametersMap(dto);
//    	putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectAppraisalHistoryDetailList", param));
//    }

    
}