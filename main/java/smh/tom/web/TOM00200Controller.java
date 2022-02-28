package smh.tom.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.tom.service.TOM00200Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

@Controller
@RequestMapping(value = "/tom00200")
public class TOM00200Controller extends AbstractWebController {

    @Autowired
    private TOM00200Service service;

    @RequestMapping(value = "selectRequestToolMakingRegister.do")
    public View selectRequestToolMakingRegister(UiMapDto dto, Model model) throws Exception {
    	service.selectRequestToolMakingRegister(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectRequestToolMakingRegisterDetail.do")
    public View selectRequestToolMakingRegisterDetail(UiMapDto dto, Model model) throws Exception {
    	service.selectRequestToolMakingRegisterDetail(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectRequestToolMakingRegisterDetailSub.do")
    public View selectRequestToolMakingRegisterDetailSub(UiMapDto dto, Model model) throws Exception {
    	service.selectRequestToolMakingRegisterDetailSub(dto);
        return apply(dto, model);
    }
    
    //tool 정보 그리드 정보 저장
    @RequestMapping(value = "saveToolRequestDetail.do")
    public View saveToolRequestDetail(UiMapDto dto, Model model) throws Exception {
    	service.saveToolRequestDetail(dto);
        return apply(dto, model);
    }
    
    //내역 등록 취소
    @RequestMapping(value = "saveRequestCancel.do")
    public View saveRequestCancel(UiMapDto dto, Model model) throws Exception {
    	service.saveRequestCancel(dto);
        return apply(dto, model);
    }
}
