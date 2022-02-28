package com.nbdf.cmd.cm.cmbm.web;

import com.nbdf.cmd.cm.cmbm.service.CMBM00200Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractXWebController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: CMBM00200Controller.java
* @Package: com.drens.dr.CMBM.web  
* @Project name: IFC MES시스템 재구축
* @Type name: CMBM00200Controller    
* @Company: Built1
* @Create Date: 2018 2018. 1. 24. 오후 3:45:44 
* @Author: Built1
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2018. 1. 24.        Built1     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/cmbm00200")
public class CMBM00200Controller extends AbstractXWebController{

    @Autowired
    private CMBM00200Service service;

 
    /**
    * @fn : selectCmdLookupTypeValuesList
    * @brief : 공통코드 조회
    * @Method Name : selectCmdLookupTypeValuesList
    * @remark
    * @Create Date: 2018 2018. 1. 24. 오후 3:45:54 
    * @Author: Built1
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 1. 24.        Built1     최초  생성
     *
    */
    @RequestMapping(value = "selectCmdLookupTypeValuesList.do")
    public View selectCmdLookupTypeValuesList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdLookupTypeValuesList(dto);
        return apply(dto, model);
    }
}
