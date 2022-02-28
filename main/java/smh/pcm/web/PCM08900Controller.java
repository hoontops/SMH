package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM08900Service;
import smh.pcm.service.PCMCommonService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: PCM08900Controller.java
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
@RequestMapping(value = "/pcm08900")
public class PCM08900Controller extends AbstractWebController {

    @Autowired
    private PCM08900Service service;
    
    @Autowired
    private PCMCommonService comService;

    //외주창고입출고현황(수입검사의뢰)
    @RequestMapping(value = "selectOutboundwarehouseStatusInspectList.do")
    public View selectOutboundwarehouseStatusInspectList(UiMapDto dto, Model model) throws Exception {
    	service.selectOutboundwarehouseStatusInspectList(dto);
    	//String lastno = comService.selectMaxOutboundNo("INTERFLEX","IFC","20210605");
    	//log("lastno :: "+lastno);
        return apply(dto, model);
    }
    
    private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}
