package com.nbdf.cmd.cm.cmsy.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nbdf.cmd.cm.cmsy.service.CMSY03400Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: CMSY03400Controller.java
* @Package: com.nbdf.cmd.cm.cmsy.web
* @Project name: IFC MES시스템 구축
* @Type name: CMSY03400Controller
* @Company: Built1
* @Create Date: 2015 2015. 3. 2. 오후 8:42:22
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 2.    진성하     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/cmsy03400/")
public class CMSY03400Controller extends AbstractWebController {

    @Autowired
    private CMSY03400Service service;
    /**
    * @fn : selectCmdUsersList
    * @brief : 사용자 신청리스트  조회
    * @Method Name : selectCmdUsersList
    * @remark
    * @Create Date: 2015 2015. 3. 10. 오후 4:58:04
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 10.       진성하     최초  생성
     *
    */
    @RequestMapping(value = "selectCmdUsersList")
    public View selectCmdUsersList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdUsersList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveCmdUsers
    * @brief : 사용자 신청저장
    * @Method Name : saveCmdUsers
    * @remark
    * @Create Date: 2015 2015. 3. 10. 오후 4:58:04
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 10.       진성하     최초  생성
     *
    */
    @RequestMapping("saveCmdUsers")
    public View saveCmdUsers(UiMapDto dto, Model model) throws Exception {
        service.saveCmdUsers(dto);
        return apply(dto, model);
    }

    @RequestMapping("updateCmdUsersPwdInit")
    public View updateCmdUsersPwdInit(UiMapDto dto, Model model) throws Exception {
        service.updateCmdUsersPwdInit(dto);
        return apply(dto, model);
    }
    @RequestMapping("updateCmdUsersApproval")
    public View updateCmdUsersApproval(UiMapDto dto, Model model) throws Exception {
        service.updateCmdUsersApproval(dto);
        return apply(dto, model);
    }

}
