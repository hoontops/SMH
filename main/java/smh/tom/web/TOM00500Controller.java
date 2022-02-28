package smh.tom.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.tom.service.TOM00500Service;

@Controller
@RequestMapping(value = "/tom00500")
public class TOM00500Controller extends AbstractWebController {

    @Autowired
    private TOM00500Service service;

    @RequestMapping(value = "selectToolRepairSendListByToolList.do")
    public View selectToolRepairSendListByToolList(UiMapDto dto, Model model) throws Exception {
    	service.selectToolRepairSendListByToolList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectToolRepairLotListForRepairByToolList.do")
    public View selectToolRepairLotListForRepairByToolList(UiMapDto dto, Model model) throws Exception {
    	service.selectToolRepairLotListForRepairByToolList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectToolRequestListForRepairByToolList.do")
    public View selectToolRequestListForRepairByToolList(UiMapDto dto, Model model) throws Exception {
    	service.selectToolRequestListForRepairByToolList(dto);
        return apply(dto, model);
    }
    
    //수리출고 저장
    @RequestMapping(value = "saveSendToolGrid.do")
    public View saveSendToolGrid(UiMapDto dto, Model model) throws Exception {
    	service.saveSendToolGrid(dto);
        return apply(dto, model);
    }
}
