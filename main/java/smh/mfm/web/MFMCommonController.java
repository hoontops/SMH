package smh.mfm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.mfm.service.MFMCommonService;


/**
* @file			: MFMommonController.java
* @Package		: smh.mfm.web  
* @Project 		: 인터플렉스 MES 구축
* @Type name	: TOMCommonController    
* @Company		: Built1
* @Create Date	: 2021. 2. 2. 오후 4:32:54 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 2. 2.       박현우      최초  생성 
 *
*/
@Controller
@RequestMapping(value = "/mfmCommon")
public class MFMCommonController extends AbstractWebController {

	@Autowired
	private MFMCommonService service;
	
	@RequestMapping(value = "selectMfmCustomQuery.do")
    public View selectTomCustomQuery(UiMapDto dto, Model model) throws Exception {
        service.selectMfmCustomQuery(dto);
        return apply(dto, model);
    }
	
	@RequestMapping(value = "selectDayDulationList.do")
	  public View selectDayDulationList(UiMapDto dto, Model model) throws Exception {
	  	service.selectDayDulationList(dto);
	  	return apply(dto, model);
	  }
	
	@RequestMapping(value = "selectItemGroupName.do")
	  public View selectItemGroupName(UiMapDto dto, Model model) throws Exception {
	  	service.selectItemGroupName(dto);
	  	return apply(dto, model);
	  }
	
	private void log(String message){
    	System.out.println("////////////////////////////////////////////////////////////////"+message);
    }
}
