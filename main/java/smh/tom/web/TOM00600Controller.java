package smh.tom.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.tom.service.TOM00600Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

@Controller
@RequestMapping(value = "/tom00600")
public class TOM00600Controller extends AbstractWebController {

    @Autowired
    private TOM00600Service service;

    @RequestMapping(value = "selectRegistToolRepairListForResultByToolList.do")
    public View selectRegistToolRepairListForResultByToolList(UiMapDto dto, Model model) throws Exception {
    	service.selectRegistToolRepairListForResultByToolList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "saveToolRegistRepairResult.do")
    public View saveToolRegistRepairResult(UiMapDto dto, Model model) throws Exception {
    	service.saveToolRegistRepairResult(dto);
        return apply(dto, model);
    }
}
