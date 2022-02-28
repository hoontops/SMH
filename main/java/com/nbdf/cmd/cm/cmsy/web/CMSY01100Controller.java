package com.nbdf.cmd.cm.cmsy.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nbdf.cmd.cm.cmsy.service.CMSY01100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: CMSA01100Controller.java
* @Package: com.nbdf.cmd.cm.cmsy.web
* @Project name: IFC MES시스템 구축
* @Type name: CMSA01100Controller
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
@RequestMapping(value = "/cmsy01100/")
public class CMSY01100Controller extends AbstractWebController {

	
    @Autowired
    private CMSY01100Service service;
    /**
    * @fn : selectCmdUsersList
    * @brief : 사용자리스트  조회
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
    
    @RequestMapping(value = "selectCmdUsers")
    public View selectCmdUsers(UiMapDto dto, Model model) throws Exception {
        service.selectCmdUsers(dto);
        return apply(dto, model);
    }
    
    @RequestMapping("selectCmdPlantList")
    public View selectCmdPlantList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdPlantList(dto);
        return apply(dto, model);
    }

    @RequestMapping(value = "selectCmdUserDupCheck")
    public View selectCmdUserDupCheck(UiMapDto dto, Model model) throws Exception {
        service.selectCmdUserDupCheck(dto);
        return apply(dto, model);
    }
    /**
    * @fn : selectCmdUserJobList
    * @brief : 사용자엄무리스트  조회
    * @Method Name : selectCmdUserJobList
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
    @RequestMapping(value = "selectCmdUserJobList")
    public View selectCmdUserJobList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdUserJobList(dto);
        return apply(dto, model);
    }
    /**
    * @fn : saveCmdUsers
    * @brief : 사용자저장
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
    @RequestMapping("saveCmdUsersReq")
    public View saveCmdUsersReq(UiMapDto dto, Model model) throws Exception {
        service.saveCmdUsers(dto);
        return apply(dto, model);
    }
    /**
    * @fn : deleteCmdUsers
    * @brief : 사용자 삭제
    * @Method Name : deleteCmdUsers
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
    @RequestMapping("deleteCmdUsers")
    public View deleteCmdUsers(UiMapDto dto, Model model) throws Exception {
        service.deleteCmdUsers(dto);
        return apply(dto, model);
    }

    @RequestMapping("selectCmdJobGubunList")
    public View selectCmdJobGubunList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdJobGubunList(dto);
        return apply(dto, model);
    }

    @RequestMapping("updateCmdUsersPwdInit")
    public View updateCmdUsersPwdInit(UiMapDto dto, Model model) throws Exception {
        service.updateCmdUsersPwdInit(dto);
        return apply(dto, model);
    }
    @RequestMapping("updateChangeUserPw")
    public View updateChangeUserPw(UiMapDto dto, Model model) throws Exception {
        service.updateChangeUserPw(dto);
        return apply(dto, model);
    }
    @RequestMapping("updateCmdUsersPwdUnlock")
    public View updateCmdUsersPwdUnlock(UiMapDto dto, Model model) throws Exception {
        service.updateCmdUsersPwdUnlock(dto);
        return apply(dto, model);
    }

    @RequestMapping("selectUserIdSeqence")
    public View selectUserIdSeqence(UiMapDto dto, Model model) throws Exception {
        service.selectUserIdSeqence(dto);
        return apply(dto, model);
    }

}
