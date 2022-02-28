package smh.hra.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.hra.service.HRA10610Service;
import smh.hra.service.HRA30310Service;

/**
* @file: HRA30310Controller.java
* @Package: smh.hra.web  
* @Project name: SM상선 myHR 시스템 구축
* @Type name: HRA30310Controller    
* @Company: Built1
* @Create Date: 2022. 1. 21. 오후 4:00:00 
* @Author: 정우영
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 21.    정우영     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/hra30310")
public class HRA30310Controller extends AbstractWebController {
	
	@Autowired
    private HRA30310Service service;

	/**
	 * @fn          : selectQnaList
	 * @brief       : HR Q&A 리스트 조회
	 * @remark
	 * @Create Date: 2022. 1. 21. 오후 4:00:00 
	 * @Author      : 정우영
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일         수정자        수정내용
	 *   ----------  ------------  ----------
	 *   2022.01.21.    정우영        최초  생성
	 *
	 */   
    @RequestMapping(value = "selectQnaList.do")
    public View selectQnaList(UiMapDto dto, Model model) throws Exception {
        service.selectQnaList(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn          : saveQnA
     * @brief       : HR Q&A 신청내역 등록/수정/삭제
     * @remark
     * @Create Date : 2022.01.21. 오후 4:46:20 
     * @Author      : 정우영
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일         수정자        수정내용
     *   ----------  ------------  ----------
     *   2022.01.21.    정우영        최초  생성
     *
     */    
    @RequestMapping(value = "saveQnA.do")
    public View saveQnA(UiMapDto dto, Model model) throws Exception {
    	service.saveQnA(dto);
    	return apply(dto, model);
    }
}
