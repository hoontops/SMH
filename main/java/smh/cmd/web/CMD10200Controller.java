package smh.cmd.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.cmd.service.CMD10200Service;


/**
* @file: CMD10200Controller.java
* @Package: smh.cmd.web  
* @Project name: SM상선 myHR 시스템 구축
* @Type name: cmd10200Controller    
* @Company: Built1
* @Create Date: 2022.2. 18
* @Author: 이정훈
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 2. 18.    이정훈     최초  생성
 *
*/


@Controller
@RequestMapping(value = "/cmd10200")
public class CMD10200Controller extends AbstractWebController {

	@Autowired
    private CMD10200Service service;


/**
 * @fn          : selectMyTodoList
 * @brief       : My To-Do List
 * @remark		:
 * @Create Date : 2022. 2. 21. 
 * @Author      : 이정훈
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일         수정자        수정내용
 *   ----------  ------------  ----------
 *   2022. 2. 21.    이정훈     최초  생성
 *
 */   
    @RequestMapping(value = "selectNoticeList.do")
    public View selectNoticeList(UiMapDto dto, Model model) throws Exception {
        service.selectNoticeList(dto);
        return apply(dto, model);
    }

     
    @RequestMapping(value = "selectLeadersTodoList.do")
    public View selectLeadersTodoList(UiMapDto dto, Model model) throws Exception {
        service.selectLeadersTodoList(dto);
        return apply(dto, model);
    }
    
    
    @RequestMapping(value = "selectNoticePageList.do")
    public View selectNoticePageList(UiMapDto dto, Model model) throws Exception {
        service.selectNoticePageList(dto);
        return apply(dto, model);
    }
    
}
