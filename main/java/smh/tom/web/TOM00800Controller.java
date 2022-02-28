package smh.tom.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.tom.service.TOM00800Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

@Controller
@RequestMapping(value = "/tom00800")
public class TOM00800Controller extends AbstractWebController {

    @Autowired
    private TOM00800Service service;

    @RequestMapping(value = "selectMoveToolStatusListByToolList.do")
    public View selectMoveToolStatusListByToolList(UiMapDto dto, Model model) throws Exception {
    	service.selectMoveToolStatusListByToolList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectMoveToolInputListByToolList.do")
    public View selectMoveToolInputListByToolList(UiMapDto dto, Model model) throws Exception {
    	service.selectMoveToolInputListByToolList(dto);
        return apply(dto, model);
    }
    
    //이동 출고
    @RequestMapping(value = "saveMoveSendTool.do")
    public View saveMoveSendTool(UiMapDto dto, Model model) throws Exception {
    	service.saveMoveSendTool(dto);
        return apply(dto, model);
    }
    
    //이동 출고 취소
    //@RequestMapping(value = "saveMoveSendToolCancel.do")
    //public View saveMoveSendToolCancel(UiMapDto dto, Model model) throws Exception {
    //	service.saveMoveSendToolCancel(dto);
    //    return apply(dto, model);
    //}
}
