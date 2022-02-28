package com.nbdf.cmd.cm.cmsy.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nbdf.cmd.cm.cmsy.service.CMSY03000Service;

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
@RequestMapping(value = "/cmsy03000/")
public class CMSY03000Controller extends AbstractWebController {

    @Autowired
    private CMSY03000Service service;
    /**
    * @fn : selectCmdDeptsList
    * @brief : 사용자리스트  조회
    * @Method Name : selectCmdDeptsList
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
    @RequestMapping(value = "selectCmdDeptsList")
    public View selectCmdDeptsList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdDeptsList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveCmdDepts
    * @brief : 사용자저장
    * @Method Name : saveCmdDepts
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
    @RequestMapping("saveCmdDepts")
    public View saveCmdDepts(UiMapDto dto, Model model) throws Exception {
        service.saveCmdDepts(dto);
        return apply(dto, model);
    }


}
