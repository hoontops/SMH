package smh.tom.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.tom.service.TOM00700Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

@Controller
@RequestMapping(value = "/tom00700")
public class TOM00700Controller extends AbstractWebController {

    @Autowired
    private TOM00700Service service;

    @RequestMapping(value = "selectReceiptToolRepairListForReceiptByToolList.do")
    public View selectReceiptToolRepairListForReceiptByToolList(UiMapDto dto, Model model) throws Exception {
    	service.selectReceiptToolRepairListForReceiptByToolList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectRepairToolResultLotListForReceiptByToolList.do")
    public View selectRepairToolResultLotListForReceiptByToolList(UiMapDto dto, Model model) throws Exception {
    	service.selectRepairToolResultLotListForReceiptByToolList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectRepairToolResultListForReceiptByToolList.do")
    public View selectRepairToolResultListForReceiptByToolList(UiMapDto dto, Model model) throws Exception {
    	service.selectRepairToolResultListForReceiptByToolList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "saveToolRepairReceipt.do")
    public View saveToolRepairReceipt(UiMapDto dto, Model model) throws Exception {
    	service.saveToolRepairReceipt(dto);
        return apply(dto, model);
    }
}
