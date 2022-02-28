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
* @file        : QAM02400ServiceImpl.java
* @Package     : smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM02400ServiceImpl
* @Company     : Built1
* @Create Date : 2021.06.13
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.06.13  yanghee.kim    최초  생성
*
*/
@Service
public class QAM02400ServiceImpl extends AbstractNbdfService implements QAM02400Service {

    public static final String NAMESAPCE = "smh.qam.dao.QAM02400Dao";
 
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn          : selectYieldRateByProductList
    * @brief       : (Override method) 품목별 수율현황 : 품목별 수율 조회
    * @Method Name : selectYieldRateByProductList
    * @remark      : 상세설명
* @see smh.qam.service.QAM02400Service#selectYieldRateByProductList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectYieldRateByProductList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectYieldRateByProductList", param));
    }

    /**
    * @fn          : selectDefectStatusByProductList
    * @brief       : (Override method) LOT별 수율현황 : LOT별 불량현황
    * @Method Name : selectDefectStatusByProductList
    * @remark      : 상세설명
* @see smh.qam.service.QAM02400Service#selectDefectStatusByProductList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectDefectStatusByProductList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDefectStatusByProductList", param));
    }

    /**
    * @fn          : slectDefectDetailByProductItem
    * @brief       : (Override method) 품목별 수율현황 : 불량 세부
    * @Method Name : selectDefectDetailByProductItem
    * @remark      : 상세설명
* @see smh.qam.service.QAM02400Service#electDefectDetailByProductItem(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectDefectDetailByProductList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectDefectDetailByProductList", param));
    }
}