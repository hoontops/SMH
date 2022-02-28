package com.nbdf.cmd.cm.cmsy.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nbdf.pes.pe.penc.service.PENC00010Service;
import com.nbdf.cmd.cm.cmsy.service.CMSY00100Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: CMSY01100Controller.java
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
@RequestMapping(value = "/cmsy00100/")
public class CMSY00100Controller extends AbstractWebController {

    @Autowired
    private CMSY00100Service service;
    
    @Autowired
    private PENC00010Service servicePenc;
    /**
    * @fn : loginPost
    * @brief : 로그인 버튼 클릭
    * @Method Name : loginPost
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

    @RequestMapping("loginPost.do")
    public View loginPost(UiMapDto dto, Model model, HttpServletRequest request, HttpServletResponse response ) throws Exception {
        service.loginPost(dto, request, response);
        return apply(dto, model);
    }

    @RequestMapping("loginPostTop.do")
    public View loginPostTop(UiMapDto dto, Model model, HttpServletRequest request, HttpServletResponse response ) throws Exception {
        service.loginPostTop(dto, request, response);
        return apply(dto, model);
    }

    @RequestMapping("getLoginInfo.do")
    public View getLoginInfo(UiMapDto dto, Model model, HttpServletRequest request, HttpServletResponse response ) throws Exception {
    	servicePenc.selectGlovelValueInfo(dto, request);
        return apply(dto, model);
    }
    
}

