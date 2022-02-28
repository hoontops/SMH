package com.nbdf.cmd.cm.cmsm.web;

import com.nbdf.cmd.cm.cmsm.service.CMSM02000Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: CMSM02000Controller.java
* @Package: com.nbdf.cmd.cm.cmsm.web
* @Project name: IFC MES시스템 구축
* @Type name: CMSM02000Controller
* @Company: Built1
* @Create Date: 2015 2015. 3. 25.
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일           수정자     수정내용
 *   ------------  ------  ----------
 *   2015. 3. 16.   진성하     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/cmsm02000")
public class CMSM02000Controller extends AbstractWebController {

    @Autowired
    private CMSM02000Service service;

    /**
    * @fn : selectSessionList
    * @brief : 세션/인증 목록에서 조회시 사용
    * @Method Name : selectSessionList
    * @Create Date: 2015. 4. 21. 오전 9:51:20
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto, Model model
    * @return: VIEW
    * @throws : Exception
    */
    @RequestMapping(value = "selectSessionList.do")
    public View selectSessionList(UiMapDto dto, Model model) throws Exception {
        service.selectSessionList(dto);
        return apply(dto, model);
    }


}
