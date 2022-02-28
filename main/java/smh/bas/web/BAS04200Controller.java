package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS04200Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : BAS04200Controller.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS04200Controller
* @Company     : Built1
* @Create Date : 2021.03.13
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.13  yanghee.kim    최초  생성
*
*/
@Controller
@RequestMapping(value = "/bas04200")
public class BAS04200Controller extends AbstractWebController {

    @Autowired
    private BAS04200Service service;
    
    /**
    * @fn          : selectInspitemList
    * @brief       : 검사항목목록 조회
    * @remark
    * @Create Date : 2021.03.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.13  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectInspitemList.do")
    public View selectInspitemList(UiMapDto dto, Model model) throws Exception {
        service.selectInspitemList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectLookInspmethodList
    * @brief       : 검사방법목록 조회
    * @remark
    * @Create Date : 2021.03.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.13  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectLookInspmethodList.do")
    public View selectLookInspmethodList(UiMapDto dto, Model model) throws Exception {
        service.selectLookInspmethodList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : selectInspitemmethodTreeList
    * @brief       : 감사방법별 검사항목 등록 - 트리 조회
    * @remark
    * @Create Date : 2021.03.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.13  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectInspitemmethodTreeList.do")
    public View selectInspitemmethodTreeList(UiMapDto dto, Model model) throws Exception {
        service.selectInspitemmethodTreeList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectInspmethodList
    * @brief       : 감사방법별 검사항목 등록 - 검사방법 조회
    * @remark
    * @Create Date : 2021.03.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.13  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectInspmethodList.do")
    public View selectInspmethodList(UiMapDto dto, Model model) throws Exception {
        service.selectInspmethodList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectInspmethoditemList
    * @brief       : 감사방법별 검사항목 등록 - 검사항목 조회
    * @remark
    * @Create Date : 2021.03.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.13  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectInspmethoditemList.do")
    public View selectInspmethoditemList(UiMapDto dto, Model model) throws Exception {
        service.selectInspmethoditemList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : saveInspitem
    * @brief       : 검사항목목록 등록/수정 Call
    * @Method Name : saveInspitem
    * @remark
    * @Create Date : 2021.03.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.13  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveInspitem.do")
    public View saveInspitem(UiMapDto dto, Model model) throws Exception {
        service.saveInspitem(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : saveLookInspmethod
    * @brief       : 검사방법목록 등록/수정 Call
    * @Method Name : saveLookInspmethod
    * @remark
    * @Create Date : 2021.03.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.13  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveLookInspmethod.do")
    public View saveLookInspmethod(UiMapDto dto, Model model) throws Exception {
        service.saveLookInspmethod(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : saveInspmethod
    * @brief       : 감사방법별 검사항목 등록 - 검사방법 등록/수정 Call
    * @Method Name : saveInspmethod
    * @remark
    * @Create Date : 2021.03.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.13  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveInspmethod.do")
    public View saveInspmethod(UiMapDto dto, Model model) throws Exception {
        service.saveInspmethod(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : saveInspmethoditem
    * @brief       : 감사방법별 검사항목 등록 - 검사항목 등록/수정 Call
    * @Method Name : saveInspmethoditem
    * @remark
    * @Create Date : 2021.03.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.13  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveInspmethoditem.do")
    public View saveInspmethoditem(UiMapDto dto, Model model) throws Exception {
        service.saveInspmethoditem(dto);
        return apply(dto, model);
    }
}