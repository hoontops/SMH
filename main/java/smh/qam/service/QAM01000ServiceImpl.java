package smh.qam.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

/**
* @file        : QAM01000ServiceImpl.java
* @Package     : smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM01000ServiceImpl
* @Company     : Built1
* @Create Date : 2021.05.03
* @Author      : 권혜영
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.05.03  권혜영    최초  생성
*
*/
@Service
public class QAM01000ServiceImpl extends AbstractNbdfService implements QAM01000Service {

    public static final String NAMESAPCE = "smh.qam.dao.QAM01000Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn          : selectFinalInspectionResultList
    * @brief       : (Override method) 최종검사 결과조회
    * @Method Name : selectFinalInspectionResultList
    * @remark      : 상세설명
* @see smh.qam.service.QAM01000Service#selectFinalInspectionResultList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectFinalInspectionResultList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectFinalInspectionResultList", param));
    }

    /**
    * @fn          : selectFinalInspectionResultDetailList
    * @brief       : (Override method) 최종검사 결과조회 상세
    * @Method Name : selectFinalInspectionResultDetailList
    * @remark      : 상세설명
* @see smh.qam.service.QAM01000Service#selectFinalInspectionResultDetailList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectFinalInspectionResultDetailList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESAPCE + ".selectFinalInspectionResultDetailList", param));
    }
}