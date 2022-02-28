package smh.qam.service;

import com.nbdf.com.StringUtils;
import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.interceptor.SessionManager;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

import egovframework.rte.fdl.string.EgovObjectUtil;
import smh.commons.TxnHistKey;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file        : QAM02100ServiceImpl.java
* @Package     : smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM02100ServiceImpl
* @Company     : Built1
* @Create Date : 2021.04.21
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.04.21  yanghee.kim    최초  생성
*
*/
@Service
public class QAM02100ServiceImpl extends AbstractNbdfService implements QAM02100Service {

    public static final String NAMESPACE = "smh.qam.dao.QAM02100Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn          : selectGetDefectStatusList
    * @brief       : (Override method) 불량현황 조회
    * @Method Name : selectGetDefectStatusList
    * @remark      : 상세설명
* @see smh.qam.service.QAM02100Service#selectGetDefectStatusList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectGetDefectStatusList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectGetDefectStatusList", param));
    }
}