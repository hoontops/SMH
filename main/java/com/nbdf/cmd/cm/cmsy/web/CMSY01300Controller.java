package com.nbdf.cmd.cm.cmsy.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nbdf.cmd.cm.cmsy.service.CMSY01300Service;

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
@RequestMapping(value = "/cmsy01300/")
public class CMSY01300Controller extends AbstractWebController {

    @Autowired
    private CMSY01300Service service;
    /**
    * @fn : selectCmdJobAuthMngList
    * @brief : 팝업리스트  조회
    * @Method Name : selectCmdJobAuthMngList
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
    * @fn : saveCmdJobAuthMng
    * @brief : 팝업저장
    * @Method Name : saveCmdJobAuthMng
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
    @RequestMapping("saveCmdJobAuthMng")
    public View saveCmdJobAuthMng(UiMapDto dto, Model model) throws Exception {
        service.saveCmdJobAuthMng(dto);
        return apply(dto, model);
    }
    /**
    * @fn : deleteCmdJobAuthMng
    * @brief : 팝업 삭제
    * @Method Name : deleteCmdJobAuthMng
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
    @RequestMapping("deleteCmdJobAuthMng")
    public View deleteCmdJobAuthMng(UiMapDto dto, Model model) throws Exception {
        service.deleteCmdJobAuthMng(dto);
        return apply(dto, model);
    }


}
