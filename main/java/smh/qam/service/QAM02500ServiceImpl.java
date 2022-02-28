package smh.qam.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.interceptor.SessionManager;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file        : QAM02500ServiceImpl.java
* @Package     : smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM02500ServiceImpl
* @Company     : Built1
* @Create Date : 2021.06.24
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.06.24  yanghee.kim    최초  생성
*
*/
@Service
public class QAM02500ServiceImpl extends AbstractNbdfService implements QAM02500Service {

    public static final String NAMESPACE = "smh.qam.dao.QAM02500Dao";
 
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn          : selectYieldRateByDayList
    * @brief       : (Override method) 일별 수율현황 : 일별 수율 조회
    * @Method Name : selectYieldRateByDayList
    * @remark      : 상세설명
* @see smh.qam.service.QAM02500Service#selectYieldRateByDayList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectYieldRateByDayList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectYieldRateByDayList", param));
    }
 
    /**
    * @fn          : selectYieldRateWorstByDayList
    * @brief       : (Override method) 일별 수율현황 : 일별 Worst
    * @Method Name : selectYieldRateWorstByDayList
    * @remark      : 상세설명
* @see smh.qam.service.QAM02500Service#selectYieldRateWorstByDayList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectYieldRateWorstByDayList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectYieldRateWorstByDayList", param));
    }

}