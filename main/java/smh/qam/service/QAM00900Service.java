package smh.qam.service;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : QAM00900Service.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM00900Service
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
public interface QAM00900Service {

    /**
    * @fn          : selectAbnormalOccurrenceList
    * @brief       : 공정검사 NCR
    * @remark
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
    public void selectAbnormalOccurrenceList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectAffectLotInspAbnormalPopupList
    * @brief       : 공정검사 NCR 팝업
    * @remark
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
    public void selectAffectLotInspAbnormalPopupList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectProcessSegmentByTclassList
    * @brief       : 대공정으로 표준공정 조회
    * @remark
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
    public void selectProcessSegmentByTclassList(UiMapDto dto) throws Exception;
    
    /**
    * @fn          : selectNGCountAbnormal
    * @brief       : 해당 기간안에 NG 발생한 Count를 가져온다
    * @remark
    * @Create Date : 2021.05.12
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.12  yanghee.kim    최초  생성
    *
    */
    public void selectNGCountAbnormal(UiMapDto dto) throws Exception;
}