package smh.mfm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.mfm.service.MFM01600Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: MFM01600Controller.java
 * @Package		: smh.mfm.web
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM01600Controller
 * @Company		: Built1
 * @Create Date	: 2021.04.24
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 04. 24.  김진현      최초  생성 
 */
@Controller
@RequestMapping(value = "/mfm01600")
public class MFM01600Controller extends AbstractWebController {

    @Autowired
    private MFM01600Service service;

    
    /**
     * @fn : SelectWorkDoneProductRelList
     * @brief : 주요 품목 재공 실적_기준정보화면 - [메인조회]
     * @remark
     * @Create Date: 2021. 04. 24
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 24.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectProductKind.do")
	  public View selectProductKind(UiMapDto dto, Model model) throws Exception {
	  	service.selectProductKind(dto);
	  	return apply(dto, model);
	  }
  	
    /**
     * @fn : SelectWorkDoneProductRelList
     * @brief : 주요 품목 재공 실적_기준정보화면 - [메인조회]
     * @remark
     * @Create Date: 2021. 04. 24
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 24.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectWorkDoneProductRelList.do")
	  public View selectWorkDoneProductRelList(UiMapDto dto, Model model) throws Exception {
	  	service.selectWorkDoneProductRelList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : SaveWorkDoneProductRel
     * @brief : 주요 품목 재공 실적_기준정보화면 - [메인저장]
     * @remark
     * @Create Date: 2021. 04. 24
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 24.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "saveWorkDoneProductRel.do")
	  public View saveWorkDoneProductRel(UiMapDto dto, Model model) throws Exception {
	  	service.saveWorkDoneProductRel(dto);
	  	return apply(dto, model);
	  }
  	
	  
  	
  	
  }


