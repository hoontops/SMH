package smh.ben.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.ben.service.BEN60320Service;

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
@RequestMapping(value = "/ben60320/")
public class BEN60320Controller extends AbstractWebController {

    @Autowired
    private BEN60320Service service;
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
    @RequestMapping(value = "gonList")
    public View gonList(UiMapDto dto, Model model) throws Exception {
        service.gonList(dto);
        return apply(dto, model);
    }
    
    
    @RequestMapping(value = "gonDetailList")
    public View gonDetailList(UiMapDto dto, Model model) throws Exception {
    	service.gonDetailList(dto);
    	return apply(dto, model);
    }
    
    @RequestMapping(value = "addDetail")
    public View addDetail(UiMapDto dto, Model model) throws Exception {
    	service.addDetail(dto);
    	return apply(dto, model);
    }
    
    @RequestMapping(value = "deleteGon")
    public View deleteGon(UiMapDto dto, Model model) throws Exception {
    	service.deleteGon(dto);
    	return apply(dto, model);
    }
    
    @RequestMapping(value = "insertGon")
    public View insertGon(UiMapDto dto, Model model) throws Exception {
    	service.insertGon(dto);
    	return apply(dto, model);
    }

}
