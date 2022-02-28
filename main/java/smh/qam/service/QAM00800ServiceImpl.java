package smh.qam.service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file        : QAM00800ServiceImpl.java
* @Package     : smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM00800ServiceImpl
* @Company     : Built1
* @Create Date : 2021.04.26
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.04.26  yanghee.kim    최초  생성
*
*/
@Service
public class QAM00800ServiceImpl extends AbstractNbdfService implements QAM00800Service {

    public static final String NAMESPACE = "smh.qam.dao.QAM00800Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn          : selectIndependentInspResultList
    * @brief       : (Override method) 자주검사 결과조회
    * @Method Name : selectIndependentInspResultList
    * @remark      : 상세설명
* @see smh.qam.service.QAM00800Service#selectIndependentInspResultList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectIndependentInspResultList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectIndependentInspResultList", param));
    }

    /**
    * @fn          : selectIndependentInspResultDetailList
    * @brief       : (Override method) 자주검사 결과조회 상세
    * @Method Name : selectIndependentInspResultDetailList
    * @remark      : 상세설명
* @see smh.qam.service.QAM00800Service#selectIndependentInspResultDetailList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectIndependentInspResultDetailList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectIndependentInspResultDetailList", param));
    }
}