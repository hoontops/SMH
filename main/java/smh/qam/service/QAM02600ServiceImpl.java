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
* @file        : QAM02600ServiceImpl.java
* @Package     : smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM02600ServiceImpl
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
public class QAM02600ServiceImpl extends AbstractNbdfService implements QAM02600Service {

    public static final String NAMESPACE = "smh.qam.dao.QAM02600Dao";
 
    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn          : selectDefectStatusByDefectList
    * @brief       : (Override method) 불량별 현황 조회
    * @Method Name : selectDefectStatusByDefectList
    * @remark      : 상세설명
* @see smh.qam.service.QAM02600Service#selectDefectStatusByDefectList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectDefectStatusByDefectList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDefectStatusByDefectList", param));
    }
 
    /**
    * @fn          : selectDefectStatusByProductList
    * @brief       : (Override method) 불량별 현황>>품목별 현황(팝업) 조회
    * @Method Name : selectDefectStatusByProductList
    * @remark      : 상세설명
* @see smh.qam.service.QAM02600Service#selectDefectStatusByProductList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectDefectStatusByProductList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDefectStatusByProductList", param));
    }

}