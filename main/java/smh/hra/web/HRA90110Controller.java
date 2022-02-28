package smh.hra.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.hra.service.HRA90110Service;


/**
* @file: HRA90110Controller.java
* @Package: smh.hra.web  
* @Project name: SM상선 myHR 시스템 구축
* @Type name: HRA90110Controller    
* @Company: Built1
* @Create Date: 2022. 2. 18.
* @Author: 한만섭
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 2. 18.  한만섭     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/hra90110")
public class HRA90110Controller extends AbstractWebController {

	@Autowired
    private HRA90110Service service;
	
    @RequestMapping(value = "selectOrgTree.do")
    public View selectOrgTree(UiMapDto dto, Model model) throws Exception {
        service.selectOrgTree(dto);
        return apply(dto, model);
    }
	
    @RequestMapping(value = "selectMembers.do")
    public View selectMembers(UiMapDto dto, Model model) throws Exception {
        service.selectMembers(dto);
        return apply(dto, model);
    }
}
