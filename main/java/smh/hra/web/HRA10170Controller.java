package smh.hra.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.hra.service.HRA10170Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: HRA10610Controller.java
* @Package: smh.hra.web  
* @Project name: SM상선 myHR 시스템 구축
* @Type name: HRA10610Controller    
* @Company: Built1
* @Create Date: 2022. 1. 13. 오후 1:11:20 
* @Author: 정우영
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 13.        정우영     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/hra10170")
public class HRA10170Controller extends AbstractWebController {

	@Autowired
    private HRA10170Service service;
	

	/**
	 * @fn          : selectVarificationLetterList
	 * @brief       : 신상정보 Base Infomation
	 * @remark
	 * @Author      : 권택진
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일         수정자        수정내용
	 *   ----------  ------------  ----------
	 *   2022.01.27.    권택진        최초  생성
	 *
	 */   
    @RequestMapping(value = "selectDeptList.do")
    public View selectDeptList(UiMapDto dto, Model model) throws Exception {
        service.selectDeptList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectDeptMemnberList.do")
    public View selectDeptMemnberList(UiMapDto dto, Model model) throws Exception {
    	service.selectDeptMemnberList(dto);
    	return apply(dto, model);
    }
    
    
}
