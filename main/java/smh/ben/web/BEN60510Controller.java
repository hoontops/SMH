package smh.ben.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.ben.service.BEN60510Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file         : BEN60510Controller.java
* @Package      : smh.ben.web  
* @Project name : SM상선 myHR 고도화
* @Type name    : BEN60510Controller    
* @Company      : Built1
* @Create Date  : 2022 2022. 1. 27. 오후 1:47:29 
* @Author       : Administrator
* @File Version : v1.0 
*
* << 개정이력(Modification Information) >>
* 수정일             수정자             수정내용
* ------------     ------------     ------------
* 2022. 1. 27.       Administrator      최초생성
*/
@Controller
@RequestMapping(value = "/ben60510/")
public class BEN60510Controller extends AbstractWebController {
	
    @Autowired
    private BEN60510Service service;
    
    
    /**
    * @fn           : selectCreditUnionList
    * @brief        : 함수 간략한 설명
    * @Method Name  : selectCreditUnionList
    * @Create Date  : 2022 2022. 1. 27. 오후 1:47:53
    * @Author       : Administrator
    * @File Version : v1.0
    *
    * << 개정이력(Modification Information) >>
    * 수정일             수정자             수정내용
    * ------------     ------------     ------------
    * 2022. 1. 27.       Administrator      최초생성
    */
    @RequestMapping(value = "selectCreditUnionList")
    public View selectCreditUnionList(UiMapDto dto, Model model) throws Exception {
        service.selectCreditUnionList(dto);
        return apply(dto, model);
    }
}
