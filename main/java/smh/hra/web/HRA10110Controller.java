package smh.hra.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.hra.service.HRA10110Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: HRA10610Controller.java
* @Package: smh.hra.web  
* @Project name: SM상선 myHR 시스템 구축
* @Type name: HRA10610Controller    
* @Company: Built1
* @Create Date: 2022. 1. 13. 오후 1:11:20 
* @Author: 정우영
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 13.        정우영     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/hra10110")
public class HRA10110Controller extends AbstractWebController {

	@Autowired
    private HRA10110Service service;
	

	/**
	 * @fn          : selectVarificationLetterList
	 * @brief       : 신상정보 Base Infomation
	 * @remark
	 * @Author      : 권택진
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일         수정자        수정내용
	 *   ----------  ------------  ----------
	 *   2022.01.27.    권택진        최초  생성
	 *
	 */   
    @RequestMapping(value = "selectBaseInfo.do")
    public View selectBaseInfo(UiMapDto dto, Model model) throws Exception {
        service.selectBaseInfo(dto);
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectHumanInfo.do")
    public View selectHumanInfo(UiMapDto dto, Model model) throws Exception {
    	service.selectHumanInfo(dto);
    	return apply(dto, model);
    }
    
    @RequestMapping(value = "selectEducationInfo.do")
    public View selectEducationInfo(UiMapDto dto, Model model) throws Exception {
    	service.selectEducationInfo(dto);
    	return apply(dto, model);
    }
    
    @RequestMapping(value = "selectFamilyInfo.do")
    public View selectFamilyInfo(UiMapDto dto, Model model) throws Exception {
    	service.selectFamilyInfo(dto);
    	return apply(dto, model);
    }
    
    @RequestMapping(value = "selectForLanguageInfo.do")
    public View selectForLanguageInfo(UiMapDto dto, Model model) throws Exception {
    	service.selectForLanguageInfo(dto);
    	return apply(dto, model);
    }
    
    @RequestMapping(value = "selectCertificate.do")
    public View selectCertificate(UiMapDto dto, Model model) throws Exception {
    	service.selectCertificate(dto);
    	return apply(dto, model);
    }
    
    
    @RequestMapping(value = "selectPassport.do")
    public View selectPassport(UiMapDto dto, Model model) throws Exception {
    	service.selectPassport(dto);
    	return apply(dto, model);
    }
    
    @RequestMapping(value = "selectOrderRecord.do")
    public View selectOrderRecord(UiMapDto dto, Model model) throws Exception {
    	service.selectOrderRecord(dto);
    	return apply(dto, model);
    }
    
    @RequestMapping(value = "selectWorkExperience.do")
    public View selectWorkExperience(UiMapDto dto, Model model) throws Exception {
    	service.selectWorkExperience(dto);
    	return apply(dto, model);
    }
    
    @RequestMapping(value = "selectJobExperience.do")
    public View selectJobExperience(UiMapDto dto, Model model) throws Exception {
    	service.selectJobExperience(dto);
    	return apply(dto, model);
    }
    
    @RequestMapping(value = "selectWorkRating.do")
    public View selectWorkRating(UiMapDto dto, Model model) throws Exception {
    	service.selectWorkRating(dto);
    	return apply(dto, model);
    }
    
    @RequestMapping(value = "selectEducationCarrerInfo.do")
    public View selectEducationCarrerInfo(UiMapDto dto, Model model) throws Exception {
    	service.selectEducationCarrerInfo(dto);
    	return apply(dto, model);
    }
    
    
    @RequestMapping(value = "selectOtherCompany.do")
    public View selectOtherCompany(UiMapDto dto, Model model) throws Exception {
    	service.selectOtherCompany(dto);
    	return apply(dto, model);
    }
    
    @RequestMapping(value = "insertds_humanInfo.do")
    public View insertds_humanInfo(UiMapDto dto, Model model) throws Exception {
    	service.insertds_humanInfo(dto);
    	return apply(dto, model);
    }
    
    @RequestMapping(value = "insertds_familyInfo.do")
    public View insertds_familyInfo(UiMapDto dto, Model model) throws Exception {
    	service.insertds_familyInfo(dto);
    	return apply(dto, model);
    }
    
    @RequestMapping(value = "insertds_passport.do")
    public View insertds_passport(UiMapDto dto, Model model) throws Exception {
    	service.insertds_passport(dto);
    	return apply(dto, model);
    }
    
    
    @RequestMapping(value = "deleteds_familyInfo.do")
    public View deleteds_familyInfo(UiMapDto dto, Model model) throws Exception {
    	service.deleteds_familyInfo(dto);
    	return apply(dto, model);
    }
    
    
    @RequestMapping(value = "deleteds_passport.do")
    public View deleteds_passport(UiMapDto dto, Model model) throws Exception {
    	service.deleteds_passport(dto);
    	return apply(dto, model);
    }
    
}
