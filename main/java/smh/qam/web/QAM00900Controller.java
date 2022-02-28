package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM00900Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : QAM00900Controller.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM00900Controller
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
@Controller
@RequestMapping(value = "/qam00900")
public class QAM00900Controller extends AbstractWebController {

    @Autowired
    private QAM00900Service service;

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
    @RequestMapping(value = "selectAbnormalOccurrenceList.do")
    public View selectAbnormalOccurrenceList(UiMapDto dto, Model model) throws Exception {
        service.selectAbnormalOccurrenceList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectAffectLotInspAbnormalPopupList.do")
    public View selectAffectLotInspAbnormalPopupList(UiMapDto dto, Model model) throws Exception {
        service.selectAffectLotInspAbnormalPopupList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectProcessSegmentByTclassList.do")
    public View selectProcessSegmentByTclassList(UiMapDto dto, Model model) throws Exception {
        service.selectProcessSegmentByTclassList(dto);
        return apply(dto, model);
    }
    
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
    @RequestMapping(value = "selectNGCountAbnormal.do")
    public View selectNGCountAbnormal(UiMapDto dto, Model model) throws Exception {
        service.selectNGCountAbnormal(dto);
        return apply(dto, model);
    }    
}