package smh.hra.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.hra.service.HRA30110Service;


/**
* @file: HRA30110Controller.java
* @Package: smh.hra.web  
* @Project name: SM상선 myHR 시스템 구축
* @Type name: HRA30110Controller    
* @Company: Built1
* @Create Date: 2022.1.19
* @Author: 이정훈
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 19.    이정훈     최초  생성
 *
*/


@Controller
@RequestMapping(value = "/hra30110")
public class HRA30110Controller extends AbstractWebController {

	@Autowired
    private HRA30110Service service;


/**
 * @fn          : selectCounselingList
 * @brief       :  신청내역 조회
 * @remark		:
 * @Create Date : 2022.01.19  
 * @Author      : 이정훈
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일         수정자        수정내용
 *   ----------  ------------  ----------
 *   2022. 1. 19.    이정훈     최초  생성
 *
 */   
    @RequestMapping(value = "selectCounselingList.do")
    public View selectCounselingList(UiMapDto dto, Model model) throws Exception {
        service.selectCounselingList(dto);
        return apply(dto, model);
    }

/**
 * @fn          : selectCounselingDetail
 * @brief       :  신청내역 상세조회
 * @remark		:
 * @Create Date : 2022.01.19  
 * @Author      : 이정훈
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일         수정자        수정내용
 *   ----------  ------------  ----------
 *   2022. 1. 19.    이정훈     최초  생성
 *
 */   

    @RequestMapping(value = "selectCounselingDetail.do")
    public View selectCounselingDetail(UiMapDto dto, Model model) throws Exception {
        service.selectCounselingDetail(dto);
        return apply(dto, model);
    }
    

/**
 * @fn          : saveCounseling
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

    @RequestMapping(value = "saveCounseling.do")
    public View saveCounseling(UiMapDto dto, Model model) throws Exception {
        service.saveCounseling(dto);
        return apply(dto, model);
    }
    
    
}
