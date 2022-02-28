package smh.mfm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.mfm.service.MFM00400Service;
import smh.mfm.service.MFM00401Service;

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
 *   2021. 04. 15.  박현우      최초  생성 
 */
@Controller
@RequestMapping(value = "/mfm00401")
public class MFM00401Controller extends AbstractWebController {

    @Autowired
    private MFM00401Service service;

    /**
     * @fn : selectdaysegmentloadtotalList
     * @brief : 종합 List
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
  	@RequestMapping(value = "selectdaysegmentloadtotalList.do")
	  public View selectdaysegmentloadtotalList(UiMapDto dto, Model model) throws Exception {
	  	service.selectdaysegmentloadtotalList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectdaysegmentloadDetailList
     * @brief : 상세 List
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
  	@RequestMapping(value = "selectdaysegmentloadDetailList.do")
	  public View selectdaysegmentloadDetailList(UiMapDto dto, Model model) throws Exception {
	  	service.selectdaysegmentloadDetailList(dto);
	  	return apply(dto, model);
	  }
  }


