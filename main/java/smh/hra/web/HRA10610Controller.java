package smh.hra.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.hra.service.HRA10610Service;

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
@RequestMapping(value = "/hra10610")
public class HRA10610Controller extends AbstractWebController {

	@Autowired
    private HRA10610Service service;
	

	/**
	 * @fn          : selectVarificationLetterList
	 * @brief       : 증명서 신청내역 조회
	 * @remark
	 * @Create Date : 2022.01.19. 오후 4:46:20 
	 * @Author      : 정우영
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일         수정자        수정내용
	 *   ----------  ------------  ----------
	 *   2022.01.13.    정우영        최초  생성
	 *
	 */   
    @RequestMapping(value = "selectVarificationLetterList.do")
    public View selectVarificationLetterList(UiMapDto dto, Model model) throws Exception {
        service.selectVarificationLetterList(dto);
        return apply(dto, model);
    }
    
    
    /**
     * @fn          : saveVarificationLetterList
     * @brief       : 증명서 신청내역 등록/수정/삭제
     * @remark
     * @Create Date : 2022.01.19. 오후 4:46:20 
     * @Author      : 정우영
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일         수정자        수정내용
     *   ----------  ------------  ----------
     *   2022.01.13.    정우영        최초  생성
     *
     */    
    @RequestMapping(value = "saveVarificationLetter.do")
    public View saveVarificationLetter(UiMapDto dto, Model model) throws Exception {
    	service.saveVarificationLetter(dto);
    	return apply(dto, model);
    }
    
}
