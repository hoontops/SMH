package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM00500Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : QAM00500Controller.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM00500Controller
* @Company     : Built1
* @Create Date : 2021.03.22
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.22  yanghee.kim    최초  생성
*
*/
@Controller
@RequestMapping(value = "/qam00500")
public class QAM00500Controller extends AbstractWebController {

    @Autowired
    private QAM00500Service service;

    /**
    * @fn          : selectQcOspRequestInspList
    * @brief       : 수입검사 의뢰 조회
    * @remark
    * @Create Date : 2021.03.22
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.22  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectQcOspRequestInspList.do")
    public View selectQcOspRequestInspList(UiMapDto dto, Model model) throws Exception {
        service.selectQcOspRequestInspList(dto);
        return apply(dto, model);
    }    
    
    /**
    * @fn          : saveQcOspRequestInsp
    * @brief       : 수입검사 의뢰 - 의뢰
    * @Method Name : saveQcOspRequestInsp
    * @remark
    * @Create Date : 2021.03.22
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.22  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveQcOspRequestInsp.do")
    public View saveQcOspRequestInsp(UiMapDto dto, Model model) throws Exception {
        service.saveQcOspRequestInsp(dto);
        return apply(dto, model);
    } 
    
    /**
    * @fn          : saveQcOspRequestInspCancel
    * @brief       : 수입검사 의뢰 - 의뢰취소
    * @Method Name : saveQcOspRequestInspCancel
    * @remark
    * @Create Date : 2021.03.23
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.23  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveQcOspRequestInspCancel.do")
    public View saveQcOspRequestInspCancel(UiMapDto dto, Model model) throws Exception {
        service.saveQcOspRequestInspCancel(dto);
        return apply(dto, model);
    }
}