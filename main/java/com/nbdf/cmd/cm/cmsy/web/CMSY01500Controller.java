package com.nbdf.cmd.cm.cmsy.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nbdf.cmd.cm.cmsy.service.CMSY01500Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: CMSY01500Controller.java
* @Package: com.nbdf.cmd.cm.cmsy.web
* @Project name: IFC MES시스템 구축
* @Type name: CMSY01500Controller
* @Company: Built1
* @Create Date: 2017. 10. 2. 오후 8:42:22
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2017. 10. 2.    진성하     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/cmsy01500/")
public class CMSY01500Controller extends AbstractWebController {

    @Autowired
    private CMSY01500Service service;
    /**
    * @fn : selectCmdUserAuthMpngList
    * @brief : 사용자리스트  조회
    * @Method Name : selectCmdUserAuthMpngList
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
    @RequestMapping(value = "selectCmdJobAuthMngList")
    public View selectCmdJobAuthMngList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdJobAuthMngList(dto);
        return apply(dto, model);
    }
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
    /**
    * @fn : selectCmdUsersListExceptSelected
    * @brief : 사용자리스트  조회(선택 유저, 기권한 유저 제외)
    * @Method Name : selectCmdUsersListExceptSelected
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
    @RequestMapping(value = "selectCmdUsersListExceptSelected")
    public View selectCmdUsersListExceptSelected(UiMapDto dto, Model model) throws Exception {
        service.selectCmdUsersListExceptSelected(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectCmdUserAuthMpngList
    * @brief : 권한사용자리스트  조회
    * @Method Name : selectCmdUserAuthMpngList
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
    @RequestMapping(value = "selectCmdUserAuthMpngList")
    public View selectCmdUserAuthMpngList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdUserAuthMpngList(dto);
        return apply(dto, model);
    }
    /**
    * @fn : saveCmdUserAuthMpng
    * @brief : 권한사용자저장
    * @Method Name : saveCmdUserAuthMpng
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
    @RequestMapping("saveCmdUserAuthMpng")
    public View saveCmdUserAuthMpng(UiMapDto dto, Model model) throws Exception {
        service.saveCmdUserAuthMpng(dto);
        return apply(dto, model);
    }
    /**
    * @fn : deleteCmdUserAuthMpng
    * @brief : 권한사용자 삭제
    * @Method Name : deleteCmdUserAuthMpng
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
    @RequestMapping("deleteCmdUserAuthMpng")
    public View deleteCmdUserAuthMpng(UiMapDto dto, Model model) throws Exception {
        service.deleteCmdUserAuthMpng(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveCmdUserAuthMpngCopy
    * @brief : 권한사용자 복사
    * @Method Name : saveCmdUserAuthMpngCopy
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
    @RequestMapping("saveCmdUserAuthMpngCopy")
    public View saveCmdUserAuthMpngCopy(UiMapDto dto, Model model) throws Exception {
        service.saveCmdUserAuthMpngCopy(dto);
        return apply(dto, model);
    }

}
