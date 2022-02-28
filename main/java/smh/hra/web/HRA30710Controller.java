package smh.hra.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.hra.service.HRA30710Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : HRA30710Controller.java
* @Package     : smh.hra.web  
* @Project name: SM상선 myHR 시스템 구축
* @Type name   : HRA30710Controller    
* @Company     : Built1
* @Create Date : 2022.02.17. 오후 1:11:20 
* @Author      : yhee.kim
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일         수정자       수정내용
 *   ------------  ----------  ----------
 *   2022.02.17.   yhee.kim   최초  생성
 *
*/
@Controller
@RequestMapping(value = "/hra30710")
public class HRA30710Controller extends AbstractWebController {

	@Autowired
    private HRA30710Service service;
	
	/**
	 * @fn          : selectFAQList
	 * @brief       : FAQ 내역 조회
	 * @remark
	 * @Create Date : 2022.01.19. 오후 4:46:20 
	 * @Author      : yhee.kim
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일         수정자        수정내용
	 *   ----------  ------------  ----------
	 *   2022.02.17.   yhee.kim     최초  생성
	 *
	 */   
    @RequestMapping(value = "selectFAQList.do")
    public View selectFAQList(UiMapDto dto, Model model) throws Exception {
        service.selectFAQList(dto);
        return apply(dto, model);
    }

	/**
	 * @fn          : selectFAQInfo
	 * @brief       : FAQ 상세내역 조회
	 * @remark
	 * @Create Date : 2022.01.19. 오후 4:46:20 
	 * @Author      : yhee.kim
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일         수정자        수정내용
	 *   ----------  ------------  ----------
	 *   2022.02.17.   yhee.kim     최초  생성
	 *
	 */   
    @RequestMapping(value = "selectFAQInfo.do")
    public View selectFAQInfo(UiMapDto dto, Model model) throws Exception {
        service.selectFAQInfo(dto);
        return apply(dto, model);
    }
}
