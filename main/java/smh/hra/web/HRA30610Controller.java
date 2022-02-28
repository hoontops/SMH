package smh.hra.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.hra.service.HRA30610Service;

/**
* @file: HRA30610Controller.java
* @Package: smh.hra.web  
* @Project name: SM상선 myHR Application 고도화
* @Type name: HRA30610Controller    
* @Company: Built1
* @Create Date: 2022. 2. 10. 오후 1:42:40 
* @Author: 정우영
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일        수정자       수정내용
 *   ------------  ------  ----------
 *   2022. 2. 10.    정우영     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/hra30610")
public class HRA30610Controller extends AbstractWebController {
	
	@Autowired
	private HRA30610Service service;
	
	/**
	* @fn : selectFaqList
	* @brief : 함수 간략한 설명 
	* @remark
	* @Create Date: 2022. 2. 10. 오후 1:53:41 
	* @Author: 정우영
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일        수정자   수정내용
	 *   ------------  ------  ----------
	 *   2022. 2. 10.    정우영     최초  생성
	 *
	*/
	@RequestMapping(value = "selectFaqList.do")
	public View selectFaqList(UiMapDto dto, Model model) throws Exception {
		service.selectFaqList(dto);
		return apply(dto, model);
	}
	
	@RequestMapping(value = "selectFaqDetail.do")
	public View selectFaqDetail(UiMapDto dto, Model model) throws Exception {
		service.selectFaqDetail(dto);
		return apply(dto, model);
	}
	
    @RequestMapping(value = "insertViewCount.do")
    public View insertViewCount(UiMapDto dto, Model model) throws Exception {
        service.insertViewCount(dto);
        return apply(dto, model);
    }
	
	/**
	* @fn : saveFaq
	* @brief : 함수 간략한 설명 
	* @remark
	* @Create Date: 2022. 2. 10. 오후 4:30:48 
	* @Author: 정우영
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일         수정자   수정내용
	 *   ------------  ------  ----------
	 *   2022. 2. 10.     정우영     최초  생성
	 *
	*/
	@RequestMapping(value = "saveFaq.do")
	public View saveFaq(UiMapDto dto, Model model) throws Exception {
		service.saveFaq(dto);
		return apply(dto, model);
	}

}
