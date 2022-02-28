package smh.ben.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.ben.service.BEN60410Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: CMSY03200Controller.java
* @Package: com.nbdf.cmd.cm.cmsy.web
* @Project name: IFC MES시스템 구축
* @Type name: CMSY03200Controller
* @Company: Built1
* @Create Date: 2015 2015. 3. 2. 오후 8:42:22
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 2.    진성하     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/ben60410/")
public class BEN60410Controller extends AbstractWebController {

    @Autowired
    private BEN60410Service service;
    /**
    * @file: PAY50110Controller.java
    * @Project name: myHR 시스템
    * @Type name: PAY50110Controller
    * @Create Date: 2021.12.01
    * @Author: 권택진
     *
     * << 개정이력(Modification Information) >>
     *
     *   수정일          수정자    수정내용
     *   ------------  ------  ----------
     *   2021.12.01    권택진    최초  생성
     *
    */
    @RequestMapping(value = "adjLifeExpenseList")
    public View adjLifeExpenseList(UiMapDto dto, Model model) throws Exception {
        service.adjLifeExpenseList(dto);
        return apply(dto, model);
    }
    
    
    @RequestMapping(value = "adjLifeExpenseDetail")
    public View adjLifeExpenseDetail(UiMapDto dto, Model model) throws Exception {
    	service.adjLifeExpenseDetail(dto);
    	return apply(dto, model);
    }
    
    @RequestMapping(value = "adjLifeCheckList")
    public View adjLifeCheckList(UiMapDto dto, Model model) throws Exception {
    	service.adjLifeCheckList(dto);
    	return apply(dto, model);
    }
    
    @RequestMapping(value = "selectEmpList")
    public View selectEmpList(UiMapDto dto, Model model) throws Exception {
    	service.selectEmpList(dto);
    	return apply(dto, model);
    }
    
    @RequestMapping(value = "deleteAdjLife")
    public View deleteAdjLife(UiMapDto dto, Model model) throws Exception {
    	service.deleteAdjLife(dto);
    	return apply(dto, model);
    }
    
    @RequestMapping(value = "insertAdjLife")
    public View insertAdjLife(UiMapDto dto, Model model) throws Exception {
    	service.insertAdjLife(dto);
    	return apply(dto, model);
    }
    
    

}
