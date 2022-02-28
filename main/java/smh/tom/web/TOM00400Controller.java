package smh.tom.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.tom.service.TOM00400Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

@Controller
@RequestMapping(value = "/tom00400")
public class TOM00400Controller extends AbstractWebController {

    @Autowired
    private TOM00400Service service;

    @RequestMapping(value = "selectNewSendToolListByToolList.do")
    public View selectNewSendToolListByToolList(UiMapDto dto, Model model) throws Exception {
    	service.selectNewSendToolListByToolList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectNewSendToolDetailListByToolList.do")
    public View selectNewSendToolDetailListByToolList(UiMapDto dto, Model model) throws Exception {
    	service.selectNewSendToolDetailListByToolList(dto);
        return apply(dto, model);
    }
    
    //수정출고 저장
    @RequestMapping(value = "saveSendToolGrid.do")
    public View saveSendToolGrid(UiMapDto dto, Model model) throws Exception {
    	service.saveSendToolGrid(dto);
        return apply(dto, model);
    }
}
