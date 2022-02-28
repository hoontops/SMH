package smh.tom.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.tom.service.TOM00300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

@Controller
@RequestMapping(value = "/tom00300")
public class TOM00300Controller extends AbstractWebController {

    @Autowired
    private TOM00300Service service;

    @RequestMapping(value = "selectGridReceiptInput.do")
    public View selectGridReceiptInput(UiMapDto dto, Model model) throws Exception {
    	service.selectGridReceiptInput(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectToolRequestReceipt.do")
    public View selectToolRequestReceipt(UiMapDto dto, Model model) throws Exception {
    	service.selectToolRequestReceipt(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectToolRequestListForReceiptByToolList.do")
    public View selectToolRequestListForReceiptByToolList(UiMapDto dto, Model model) throws Exception {
    	service.selectToolRequestListForReceiptByToolList(dto);
        return apply(dto, model);
    }
    
    //제작 입고 처리
    @RequestMapping(value = "saveToolMakeReceipt.do")
    public View saveToolMakeReceipt(UiMapDto dto, Model model) throws Exception {
    	service.saveToolMakeReceipt(dto);
        return apply(dto, model);
    }
    
    //제작 입고 취소 처리
    @RequestMapping(value = "saveToolMakeReceiptCancel.do")
    public View saveToolMakeReceiptCancel(UiMapDto dto, Model model) throws Exception {
    	service.saveToolMakeReceiptCancel(dto);
        return apply(dto, model);
    }
}
