package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS03900Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : BAS03900Controller.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS03900Controller
* @Company     : Built1
* @Create Date : 2021.03.04
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.04  yanghee.kim    최초  생성
*
*/
@Controller
@RequestMapping(value = "/bas03900")
public class BAS03900Controller extends AbstractWebController {

    @Autowired
    private BAS03900Service service;

    /**
    * @fn          : selectDefectcoderelList
    * @brief       : 불량코드 조회
    * @remark
    * @Create Date : 2021.03.04
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.04  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectDefectcoderelList.do")
    public View selectDefectcoderelList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectcoderelList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectDefectcodeList
    * @brief       : 불량유형 조회
    * @remark
    * @Create Date : 2021.03.05
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.05  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectDefectcodeList.do")
    public View selectDefectcodeList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectcodeList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectQcsegmentList
    * @brief       : 품질공정 조회
    * @remark
    * @Create Date : 2021.03.08
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.08  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectQcsegmentList.do")
    public View selectQcsegmentList(UiMapDto dto, Model model) throws Exception {
        service.selectQcsegmentList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectQcsegmentrelList
    * @brief       : 중공정 조회
    * @remark
    * @Create Date : 2021.03.08
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.08  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectQcsegmentrelList.do")
    public View selectQcsegmentrelList(UiMapDto dto, Model model) throws Exception {
        service.selectQcsegmentrelList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : saveDefectcoderel
    * @brief       : 불량코드  등록/수정 Call
    * @Method Name : saveDefectcoderel
    * @remark
    * @Create Date : 2021.03.05
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.05  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveDefectcoderel.do")
    public View saveDefectcoderel(UiMapDto dto, Model model) throws Exception {
        service.saveDefectcoderel(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : saveDefectcode
    * @brief       : 불량유형  등록/수정 Call
    * @Method Name : saveDefectcode
    * @remark
    * @Create Date : 2021.03.08
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.08  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveDefectcode.do")
    public View saveDefectcode(UiMapDto dto, Model model) throws Exception {
        service.saveDefectcode(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : saveQcsegment
    * @brief       : 품질공정 등록/수정 Call
    * @Method Name : saveQcsegment
    * @remark
    * @Create Date : 2021.03.08
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.08  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveQcsegment.do")
    public View saveQcsegment(UiMapDto dto, Model model) throws Exception {
        service.saveQcsegment(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : saveQcsegmentrel
    * @brief       : 중공정 등록/수정 Call
    * @Method Name : saveQcsegmentrel
    * @remark
    * @Create Date : 2021.03.08
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.08  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveQcsegmentrel.do")
    public View saveQcsegmentrel(UiMapDto dto, Model model) throws Exception {
        service.saveQcsegmentrel(dto);
        return apply(dto, model);
    }
}