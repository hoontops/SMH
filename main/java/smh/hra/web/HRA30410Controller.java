package smh.hra.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.hra.service.HRA30410Service;


/**
* @file: HRA30410Controller.java
* @Package: smh.hra.web  
* @Project name: SM상선 myHR 시스템 구축
* @Type name: HRA30410Controller    
* @Company: Built1
* @Create Date: 2022.1.26
* @Author: 이정훈
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 26.    이정훈     최초  생성
 *
*/


@Controller
@RequestMapping(value = "/hra30410")
public class HRA30410Controller extends AbstractWebController {

	@Autowired
    private HRA30410Service service;


/**
 * @fn          : selectQnaList
 * @brief       :  qna신청내역 조회
 * @remark		:
 * @Create Date : 2022.01.25  
 * @Author      : 이정훈
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일         수정자        수정내용
 *   ----------  ------------  ----------
 *   2022. 1. 25.    이정훈     최초  생성
 *
 */   
    @RequestMapping(value = "selectQnaList.do")
    public View selectQnaList(UiMapDto dto, Model model) throws Exception {
        service.selectQnaList(dto);
        return apply(dto, model);
    }

/**
 * @fn          : selectQnaDetail
 * @brief       :  신청내역 상세조회
 * @remark		:
 * @Create Date : 2022.01.27  
 * @Author      : 이정훈
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일         수정자        수정내용
 *   ----------  ------------  ----------
 *   2022. 1. 27.    이정훈     최초  생성
 *
 */   

    @RequestMapping(value = "selectQnaDetail.do")
    public View selectQnaDetail(UiMapDto dto, Model model) throws Exception {
        service.selectQnaDetail(dto);
        return apply(dto, model);
    }
    

/**
 * @fn          : saveQna
 * @brief       : 상담신청/수정/삭제 
 * @remark		:
 * @Create Date : 2022. 1. 21.   
 * @Author      : 이정훈
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일         수정자        수정내용
 *   ----------  ------------  ----------
 *   2022. 1. 21.    이정훈     최초  생성
 *
 */   

    @RequestMapping(value = "saveQna.do")
    public View saveQna(UiMapDto dto, Model model) throws Exception {
        service.saveQna(dto);
        return apply(dto, model);
    }
    
    
}
