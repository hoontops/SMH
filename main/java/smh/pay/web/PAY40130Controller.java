package smh.pay.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;
import smh.pay.service.PAY40130Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;



@Controller
@RequestMapping(value = "/pay40130/")
public class PAY40130Controller extends AbstractWebController {

    @Autowired
    private PAY40130Service service;
    /**
    * @file: PAY40130Controller.java
    * @Project name: myHR 시스템
    * @Type name: PAY40130Controller
    * @Create Date: 2022.01.20
    * @Author: 유성연
     *
     * << 개정이력(Modification Information) >>
     *
     *   수정일          수정자    수정내용
     *   ------------  ------  ----------
     *   2022.01.20    유성연    최초  생성
     *
    */
    @RequestMapping(value = "selectPayCalendarList")
    public View selectPayCalendarList(UiMapDto dto, Model model) throws Exception {
        service.selectPayCalendarList(dto);
        return apply(dto, model);
        }
    /**
     * @fn          : saveCalendarList
     * @brief       : 출근현황 등록/수정/
     * @remark
     * @Create Date : 2022.01.26. 
     * @Author      : 유성연
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일         수정자        수정내용
     *   ----------  ------------  ----------
     *   2022.01.26.    유성연        최초  생성
     *
     */    
    @RequestMapping(value = "saveCalendarList.do")
    public View saveCalendarList(UiMapDto dto, Model model) throws Exception {
    	service.saveCalendarList(dto);
    	return apply(dto, model);
    }
}

