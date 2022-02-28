package smh.tom.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.tom.service.TOM00900Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

@Controller
@RequestMapping(value = "/tom00900")
public class TOM00900Controller extends AbstractWebController {

    @Autowired
    private TOM00900Service service;

    @RequestMapping(value = "selectMoveToolReceiptListByToolList.do")
    public View selectMoveToolReceiptListByToolList(UiMapDto dto, Model model) throws Exception {
    	service.selectMoveToolReceiptListByToolList(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectMoveToolReceiptListByToolResultList.do")
    public View selectMoveToolReceiptListByToolResultList(UiMapDto dto, Model model) throws Exception {
    	service.selectMoveToolReceiptListByToolResultList(dto);
        return apply(dto, model);
    }
    
    //이동 입고
    @RequestMapping(value = "saveMoveReceiptTool.do")
    public View saveMoveReceiptTool(UiMapDto dto, Model model) throws Exception {
    	service.saveMoveReceiptTool(dto);
        return apply(dto, model);
    }
    
    //이동 출고 취소
    @RequestMapping(value = "saveMoveSendToolCancel.do")
    public View saveMoveSendToolCancel(UiMapDto dto, Model model) throws Exception {
    	service.saveMoveSendToolCancel(dto);
        return apply(dto, model);
    }
}
