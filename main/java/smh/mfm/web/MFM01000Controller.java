package smh.mfm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.mfm.service.MFM01000Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: MFM01000Controller.java
 * @Package		: smh.mfm.web
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM01000Controller
 * @Company		: Built1
 * @Create Date	: 2021.05.21
 * @Author		: 김기수
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 05. 21.  김기수      최초  생성 
 */
@Controller
@RequestMapping(value = "/mfm01000")
public class MFM01000Controller extends AbstractWebController {

    @Autowired
    private MFM01000Service service;

    /**
     * @fn : selectDeliveryList
     * @brief : Lot별 납기 진척 현황
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
  	@RequestMapping(value = "selectDeliveryList.do")
	  public View selectDeliveryList(UiMapDto dto, Model model) throws Exception {
	  	service.selectDeliveryList(dto);
	  	return apply(dto, model);
	  }
  	

  	
  	@RequestMapping(value = "saveDeliveryDate.do")
    public View saveDeliveryDate(UiMapDto dto, Model model) throws Exception {
    	service.saveDeliveryDate(dto);
        return apply(dto, model);
    }
  }


