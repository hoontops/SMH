package smh.mfm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.mfm.service.MFM00900Service;

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
@RequestMapping(value = "/mfm00900")
public class MFM00900Controller extends AbstractWebController {

    @Autowired
    private MFM00900Service service;

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
  	@RequestMapping(value = "selectDispatchingItemList.do")
	  public View selectDispatchingItemList(UiMapDto dto, Model model) throws Exception {
	  	service.selectDispatchingItemList(dto);
	  	return apply(dto, model);
	  }
  	
  	@RequestMapping(value = "selectPriorityOfDispatchingItemList.do")
	  public View selectPriorityOfDispatchingItemList(UiMapDto dto, Model model) throws Exception {
	  	service.selectPriorityOfDispatchingItemList(dto);
	  	return apply(dto, model);
	  }
  	
  	@RequestMapping(value = "selectLotListSetDispatchingItemSimulation.do")
	  public View selectLotListSetDispatchingItemSimulation(UiMapDto dto, Model model) throws Exception {
	  	service.selectLotListSetDispatchingItemSimulation(dto);
	  	return apply(dto, model);
	  }
  	
  	@RequestMapping(value = "saveDispatching.do")
    public View saveDispatching(UiMapDto dto, Model model) throws Exception {
    	service.saveDispatching(dto);
        return apply(dto, model);
    }
  }


