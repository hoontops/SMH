package com.nbdf.cmd.cm.cmtt.web;

import com.nbdf.cmd.cm.cmtt.service.CMTT0100Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: CMTT0100Controller.java
* @Package: com.nbdf.cmd.cm.cmtt.web
* @Project name: IFC MES시스템 구축
* @Type name: CMTT0100Controller
* @Company: Built1
* @Create Date: 2015. 5. 6. 오전 10:00:38
* @Author: JIn Sung Ha
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 5. 6.        JIn Sung Ha     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/cmtt01000")
public class CMTT0100Controller extends AbstractWebController {

    @Autowired
    private CMTT0100Service service;

    /**
    * @fn : submitEmail
    * @brief : EMAIL발송 테스트
    * @Method Name : submitEmail
    * @Create Date: 2015. 5. 6. 오전 10:00:43
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "submitEmail.do")
    public View submitEmail(UiMapDto dto, Model model) throws Exception {
        service.submitEmail(dto);
        return apply(dto, model);
    }

    /**
    * @fn : submitSms
    * @brief : SMS발송 테스트
    * @Method Name : submitSms
    * @Create Date: 2015. 5. 6. 오전 10:01:19
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "submitSms.do")
    public View submitSms(UiMapDto dto, Model model)  throws Exception{
        service.submitSms(dto);
        return apply(dto, model);
    }

    /**
    * @fn : maskingSample
    * @brief : maskingSample
    * @Method Name : submitEmail
    * @Create Date: 2015. 5. 6. 오전 10:00:43
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "maskingSample.do")
    public View maskingSample(UiMapDto dto, Model model) throws Exception {
        service.maskingSample(dto);
        return apply(dto, model);
    }
    
    
    @RequestMapping(value = "insertSms.do")
    public View insertSms(UiMapDto dto, Model model) throws Exception {
        service.insertSms(dto);
        return apply(dto, model);
    }
}