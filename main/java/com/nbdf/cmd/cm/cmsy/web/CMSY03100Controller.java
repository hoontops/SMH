package com.nbdf.cmd.cm.cmsy.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nbdf.cmd.cm.cmsy.service.CMSY03100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: CMSY03100Controller.java
* @Package: com.nbdf.cmd.cm.cmsy.web
* @Project name: IFC MES시스템 구축
* @Type name: CMSY03100Controller
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
@RequestMapping(value = "/cmsy03100/")
public class CMSY03100Controller extends AbstractWebController {

    @Autowired
    private CMSY03100Service service;
    /**
    * @fn : selectCmdDictionaryList
    * @brief : 사전리스트  조회
    * @Method Name : selectCmdDictionaryList
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
    @RequestMapping(value = "selectCmdDictionaryList")
    public View selectCmdDictionaryList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdDictionaryList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveCmdDictionary
    * @brief : 사전저장
    * @Method Name : saveCmdDictionary
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
    @RequestMapping("saveCmdDictionary")
    public View saveCmdDictionary(UiMapDto dto, Model model) throws Exception {
        service.saveCmdDictionary(dto);
        return apply(dto, model);
    }


}
