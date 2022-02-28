package com.nbdf.cmd.cm.cmam.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.cmd.cm.cmam.service.CMAM00100Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractXWebController;


/***
* @file: CMAM00100Controller.java
* @Package: com.nbdf.cmd.cm.cmbs.web
* @Project name: IFC MES시스템 구축
* @Type name: CMAM00100Controller
* @Company: Jin Sung Ha
* @Create Date: 2015. 6. 23. 오전 9:12:16
* @Author: Jin Sung Ha
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2017. 12. 07.     Jin Sung Ha     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/cmam00100")
public class CMAM00100Controller extends AbstractXWebController{

    @Autowired
    private CMAM00100Service service;

    /**
    * @fn : selectAtchSrcKey
    * @brief : new AtchSrcKey 조회
    * @Method Name : selectAtchSrcKey
    * @Create Date: 2021. 6. 23. 오전 9:13:06
    * @Author: Jin Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "selectAtchSrcKey.do")
    public View selectAtchSrcKey(UiMapDto dto, Model model) throws Exception {
        service.selectAtchSrcKey(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveEmailSend
    * @brief : saveEmailSend
    * @Method Name : saveEmailSend
    * @Create Date: 2021. 6. 23. 오전 9:13:06
    * @Author: Jin Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "saveEmailSend.do")
    public View saveEmailSend(UiMapDto dto, Model model) throws Exception {
        service.saveEmailSend(dto);
        return apply(dto, model);
    }
 
    /**
    * @fn : selectCmdSndngLogsList
    * @brief : selectCmdSndngLogsList 조회
    * @Method Name : selectCmdSndngLogsList
    * @Create Date: 2021. 6. 23. 오전 9:13:06
    * @Author: Jin Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: View
    * @throws : Exception
    */
    @RequestMapping(value = "selectCmdSndngLogsList.do")
    public View selectCmdSndngLogsList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdSndngLogsList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectUserGroupUserList.do")
    public View selectUserGroupUserList(UiMapDto dto, Model model) throws Exception {
        service.selectUserGroupUserList(dto);
        return apply(dto, model);
    }
}