package smh.tom.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.tom.service.TOM01000Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

@Controller
@RequestMapping(value = "/tom01000")
public class TOM01000Controller extends AbstractWebController {

    @Autowired
    private TOM01000Service service;
    
    //치공구 정보조회 : 상단 그리드
    @RequestMapping(value = "selectToolInformationListByToolList.do")
    public View selectToolInformationListByToolList(UiMapDto dto, Model model) throws Exception {
    	service.selectToolInformationListByToolList(dto);
        return apply(dto, model);
    }
    
    //치공구 정보조회 : 하단 변경사유 그리드
    @RequestMapping(value = "selectToolInformationReasonList.do")
    public View selectToolInformationReasonList(UiMapDto dto, Model model) throws Exception {
    	service.selectToolInformationReasonList(dto);
        return apply(dto, model);
    }
    
    //정보저장
    @RequestMapping(value = "saveInformationTool.do")
    public View saveInformationTool(UiMapDto dto, Model model) throws Exception {
    	service.saveInformationTool(dto);
        return apply(dto, model);
    }
}
