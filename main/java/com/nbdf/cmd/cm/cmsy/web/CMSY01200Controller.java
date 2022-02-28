package com.nbdf.cmd.cm.cmsy.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nbdf.cmd.cm.cmsy.service.CMSY01200Service;

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
@RequestMapping(value = "/cmsy01200/")
public class CMSY01200Controller extends AbstractWebController {

    @Autowired
    private CMSY01200Service service;
    /**
    * @fn : selectCmdJobMenuMngList
    * @brief : 팝업리스트  조회
    * @Method Name : selectCmdJobMenuMngList
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
    @RequestMapping(value = "selectCmdJobMenuMngList")
    public View selectCmdJobMenuMngList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdJobMenuMngList(dto);
        return apply(dto, model);
    }
    /**
    * @fn : saveCmdJobMenuMng
    * @brief : 팝업저장
    * @Method Name : saveCmdJobMenuMng
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
    @RequestMapping("saveCmdJobMenuMng")
    public View saveCmdJobMenuMng(UiMapDto dto, Model model) throws Exception {
        service.saveCmdJobMenuMng(dto);
        return apply(dto, model);
    }
    /**
    * @fn : deleteCmdJobMenuMng
    * @brief : 팝업 삭제
    * @Method Name : deleteCmdJobMenuMng
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
    @RequestMapping("deleteCmdJobMenuMng")
    public View deleteCmdJobMenuMng(UiMapDto dto, Model model) throws Exception {
        service.deleteCmdJobMenuMng(dto);
        return apply(dto, model);
    }


}
