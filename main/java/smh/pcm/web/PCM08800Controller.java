package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM08800Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: PCM08700Controller.java
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
@RequestMapping(value = "/pcm08800")
public class PCM08800Controller extends AbstractWebController {

    @Autowired
    private PCM08800Service service;

    //물류창고 출고 조회 발행
    @RequestMapping(value = "selectIssueOutboundWarehouseList.do")
    public View selectIssueOutboundWarehouseList(UiMapDto dto, Model model) throws Exception {
    	service.selectIssueOutboundWarehouseList(dto);
        return apply(dto, model);
    }
    
    //선택 건 출고전표 발행
    @RequestMapping(value = "saveIssueOutboundWarehouse.do")
    public View saveIssueOutboundWarehouse(UiMapDto dto, Model model) throws Exception {
    	log("////////////////////////////////////////////////////////////////[web]saveIssueOutboundWarehouse");
	  	service.updateIssueOutboundWarehouse(dto);
	  	return apply(dto, model);
    }
    
    private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}
