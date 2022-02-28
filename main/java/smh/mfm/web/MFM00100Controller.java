package smh.mfm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.mfm.service.MFM00100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: MFM00200Controller.java
 * @Package		: smh.mfm.web
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM00200Controller
 * @Company		: Built1
 * @Create Date	: 2021.04.15
 * @Author		: 박현우
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 04. 15.  김진현      최초  생성 
 */
@Controller
@RequestMapping(value = "/mfm00100")
public class MFM00100Controller extends AbstractWebController {

    @Autowired
    private MFM00100Service service;

    /**
     * @fn : selectWorkOrderPlanList
     * @brief : 수주계획 조회
     * @remark
     * @Create Date: 2021. 04. 15
     * @Author: 박현우
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 15.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectProductPlanList.do")
	  public View selectProductPlanList(UiMapDto dto, Model model) throws Exception {
	  	service.selectProductPlanList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectProductPlanForPivotList
     * @brief : 피벗 List
     * @remark
     * @Create Date: 2021. 04. 15
     * @Author: 박현우
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 15.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectProductPlanForPivotList.do")
	  public View selectProductPlanForPivotList(UiMapDto dto, Model model) throws Exception {
	  	service.selectProductPlanForPivotList(dto);
	  	return apply(dto, model);
	  }
  	
  	@RequestMapping(value = "saveProductPlanUpload.do")
	  public View saveProductPlanUpload(UiMapDto dto, Model model) throws Exception {
	  	service.saveProductPlanUpload(dto);
	  	return apply(dto, model);
	  }
  	
  	@RequestMapping(value = "saveProductPlanConfirm.do")
	  public View saveProductPlanConfirm(UiMapDto dto, Model model) throws Exception {
	  	service.saveProductPlanConfirm(dto);
	  	return apply(dto, model);
	  }
  }


