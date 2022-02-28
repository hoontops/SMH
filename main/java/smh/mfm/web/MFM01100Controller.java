package smh.mfm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.mfm.service.MFM01100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: MFM00800Controller.java
 * @Package		: smh.mfm.web
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM00800Controller
 * @Company		: Built1
 * @Create Date	: 2021.04.15
 * @Author		: 박현우
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 04. 15.  박현우      최초  생성 
 */
@Controller
@RequestMapping(value = "/mfm01100")
public class MFM01100Controller extends AbstractWebController {

    @Autowired
    private MFM01100Service service;

    /**
     * @fn : selectProductPriorityList
     * @brief : 품목 List
     * @remark
     * @Create Date: 2021. 04. 15
     * @Author: 박현우
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 15.  박현우      최초  생성
     *
     */
  	@RequestMapping(value = "selectTackTimeList.do")
	  public View selectTackTimeList(UiMapDto dto, Model model) throws Exception {
	  	service.selectTackTimeList(dto);
	  	return apply(dto, model);
	  }
  	
  	@RequestMapping(value = "selectTactimeApplySTD.do")
	  public View selectTactimeApplySTD(UiMapDto dto, Model model) throws Exception {
	  	service.selectTactimeApplySTD(dto);
	  	return apply(dto, model);
	  }
  	
  	@RequestMapping(value = "saveTackTime.do")
    public View saveTackTime(UiMapDto dto, Model model) throws Exception {
    	service.saveTackTime(dto);
        return apply(dto, model);
    }
  }


