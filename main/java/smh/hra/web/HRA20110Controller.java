package smh.hra.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.hra.service.HRA20110Service;

/**
* @file: HRA20110Controller.java
* @Package: smh.hra.web  
* @Project name: SM상선 myHR Application 고도화
* @Type name: HRA20110Controller    
* @Company: Built1
* @Create Date: 2022. 2. 9. 오후 12:28:47 
* @Author: 정우영
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일         수정자       수정내용
 *   ------------  ------  ----------
 *   2022. 2. 9.    정우영     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/hra20110")
public class HRA20110Controller extends AbstractWebController {

	@Autowired
	private HRA20110Service service;
	
	/**
	* @fn : selectStaffList
	* @brief : 함수 간략한 설명 
	* @Method Name : selectStaffList
	* @remark
	* @Create Date: 2022. 2. 9. 오후 1:27:45 
	* @Author: 정우영
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2022. 2. 9.     정우영     최초  생성
	 *
	*/
	
    @RequestMapping(value = "selectStaffList.do")
    public View selectStaffList(UiMapDto dto, Model model) throws Exception {
    	service.selectStaffList(dto);
    	return apply(dto, model);
    }
	
}
