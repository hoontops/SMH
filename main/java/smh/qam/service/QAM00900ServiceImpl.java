package smh.qam.service;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
* @file        : QAM00900ServiceImpl.java
* @Package     : smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM00900ServiceImpl
* @Company     : Built1
* @Create Date : 2021.05.04
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.05.04  yanghee.kim    최초  생성
*
*/
@Service
public class QAM00900ServiceImpl extends AbstractNbdfService implements QAM00900Service {

    public static final String NAMESPACE = "smh.qam.dao.QAM00900Dao";

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn          : selectAbnormalOccurrenceList
    * @brief       : (Override method) 공정검사 NCR
    * @Method Name : selectAbnormalOccurrenceList
    * @remark      : 상세설명
* @see smh.qam.service.QAM00900Service#selectAbnormalOccurrenceList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectAbnormalOccurrenceList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectAbnormalOccurrenceList", param));
    }

    /**
    * @fn          : selectAffectLotInspAbnormalPopupList
    * @brief       : (Override method) 공정검사 NCR 팝업
    * @Method Name : selectAffectLotInspAbnormalPopupList
    * @remark      : 상세설명
* @see smh.qam.service.QAM00900Service#selectAffectLotInspAbnormalPopupList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectAffectLotInspAbnormalPopupList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectAffectLotInspAbnormalPopupList", param));
    }

    /**
    * @fn          : selectProcessSegmentByTclassList
    * @brief       : (Override method) 대공정으로 표준공정 조회
    * @Method Name : selectProcessSegmentByTclassList
    * @remark      : 상세설명
* @see smh.qam.service.QAM00900Service#selectProcessSegmentByTclassList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectProcessSegmentByTclassList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectProcessSegmentByTclassList", param));
    }

    /**
    * @fn          : selectNGCountAbnormal
    * @brief       : (Override method) 해당 기간안에 NG 발생한 Count를 가져온다
    * @Method Name : selectNGCountAbnormal
    * @remark      : 상세설명
* @see smh.qam.service.QAM00900Service#selectNGCountAbnormal(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectNGCountAbnormal(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectNGCountAbnormal", param));
    }
}