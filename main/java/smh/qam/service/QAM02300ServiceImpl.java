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
* @file        : QAM02300ServiceImpl.java
* @Package     : smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM02300ServiceImpl
* @Company     : Built1
* @Create Date : 2021.06.01
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.06.01  yanghee.kim    최초  생성
*
*/
@Service
public class QAM02300ServiceImpl extends AbstractNbdfService implements QAM02300Service {

    public static final String NAMESPACE = "smh.qam.dao.QAM02300Dao";
 
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn          : selectYieldRateByLOTList
    * @brief       : (Override method) LOT별 수율현황 : LOT별 수율 조회
    * @Method Name : selectYieldRateByLOTList
    * @remark      : 상세설명
* @see smh.qam.service.QAM02300Service#selectYieldRateByLOTList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectYieldRateByLOTList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectYieldRateByLOTList", param));
    }
 
    /**
    * @fn          : selectDefectStatusByLOTList
    * @brief       : (Override method) LOT별 수율현황 : LOT별 불량현황
    * @Method Name : selectDefectStatusByLOTList
    * @remark      : 상세설명
* @see smh.qam.service.QAM02300Service#selectDefectStatusByLOTList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectDefectStatusByLOTList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDefectStatusByLOTList", param));
    }

    /**
    * @fn          : selectDefectDetailByLOT
    * @brief       : (Override method) LOT별 수율현황 : 불량 세부
    * @Method Name : electDefectDetailByLOT
    * @remark      : 상세설명
* @see smh.qam.service.QAM02300Service#electDefectDetailByLOT(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectDefectDetailByLOTList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDefectDetailByLOTList", param));
    }
}