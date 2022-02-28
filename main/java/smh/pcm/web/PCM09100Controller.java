package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM09100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: PCM09100Controller.java
 * @Package		: smh.pcm.web
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM08700Controller
 * @Company		: Built1
 * @Create Date	: 2021.2.1
 * @Author		: 박현우
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 2. 10.  박현우      최초  생성 
 */
@Controller
@RequestMapping(value = "/pcm09100")
public class PCM09100Controller extends AbstractWebController {

    @Autowired
    private PCM09100Service service;

    @RequestMapping(value = "selectConsumableRequestStateList.do")
    public View selectConsumableRequestStateList(UiMapDto dto, Model model) throws Exception {
    	service.selectConsumableRequestStateList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectConsumableLotByInboundNoList.do")
    public View selectConsumableLotByInboundNoList(UiMapDto dto, Model model) throws Exception {
    	service.selectConsumableLotByInboundNoList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "saveInputLot.do")
    public View saveInputLot(UiMapDto dto, Model model) throws Exception {
	  	service.saveInputLot(dto);
	  	return apply(dto, model);
    }
    
    private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}
