package smh.ben.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.ben.service.BEN60110Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file         : BEN60110Controller.java
* @Package      : smh.ben.web  
* @Project name : SM상선 myHR 고도화
* @Type name    : BEN60110Controller    
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
@RequestMapping(value = "/ben60110/")
public class BEN60110Controller extends AbstractWebController {
	
    @Autowired
    private BEN60110Service service;
    
    
    /**
    * @fn           : selectAddInsuraceList
    * @brief        : 단체상해보험 데이터 조회
    * @Method Name  : selectAddInsuraceList
    * @Create Date  : 2022 2022. 1. 27. 오후 1:47:53
    * @Author       : Administrator
    * @File Version : v1.0
    *
    * << 개정이력(Modification Information) >>
    * 수정일             수정자             수정내용
    * ------------     ------------     ------------
    * 2022. 1. 27.       Administrator      최초생성
    */
    @RequestMapping(value = "selectAddInsuraceList")
    public View selectAddInsuraceList(UiMapDto dto, Model model) throws Exception {
        service.selectAddInsuraceList(dto);
        return apply(dto, model);
    }
    
    
    /**
    * @fn           : saveAddInsurace
    * @brief        : 단체상해보험 데이터 저장
    * @Method Name  : saveAddInsurace
    * @Create Date  : 2022 2022. 1. 28. 오후 2:15:12
    * @Author       : Administrator
    * @File Version : v1.0
    *
    * << 개정이력(Modification Information) >>
    * 수정일             수정자             수정내용
    * ------------     ------------     ------------
    * 2022. 1. 28.       Administrator      최초생성
    */
    @RequestMapping(value = "saveAddInsurace")
    public View saveAddInsurace(UiMapDto dto, Model model) throws Exception {
        service.saveAddInsurace(dto);
        return apply(dto, model);
    }
}
