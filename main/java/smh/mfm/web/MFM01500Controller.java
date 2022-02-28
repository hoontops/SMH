package smh.mfm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.mfm.service.MFM01500Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: MFM01500Controller.java
 * @Package		: smh.mfm.web
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM01500Controller
 * @Company		: Built1
 * @Create Date	: 2021. 05. 24
 * @Author		: 김성현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 05. 24  김성현      최초  생성 
 */
@Controller
@RequestMapping(value = "/mfm01500")
public class MFM01500Controller extends AbstractWebController {

    @Autowired
    private MFM01500Service service;

    /**
     * @fn : selectProductKind
     * @brief : 
     * @remark
     * @Create Date: 2021. 05. 24
     * @Author: 김성현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 24  김성현      최초  생성
     *
     */
  	@RequestMapping(value = "selectProductKind.do")
	  public View selectProductKind(UiMapDto dto, Model model) throws Exception {
	  	service.selectProductKind(dto);
	  	return apply(dto, model);
	  }
  	
  	/*
    * @fn : selectProductKind
    * @brief :  품목별
    * @remark 
    * @Create Date: 2021. 05. 24
    * @Author: 김성현
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일               수정자         수정내용
    *   ------------  ------  ----------
    *   2021. 05. 24  김성현      최초  생성
    *
    */
 	@RequestMapping(value = "selectItemGrpProductdefList.do")
	  public View selectItemGrpProductdefList(UiMapDto dto, Model model) throws Exception {
	  	service.selectItemGrpProductdefList(dto);
	  	return apply(dto, model);
	  }
    
    
  	/*
    * @fn : selectProductKind
    * @brief : 제품군별
    * @remark
    * @Create Date: 2021. 05. 24
    * @Author: 김성현
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일               수정자         수정내용
    *   ------------  ------  ----------
    *   2021. 05. 24  김성현      최초  생성
    *
    */
 	@RequestMapping(value = "selectProductGrpProductdefList.do")
	  public View selectProductGrpProductdefList(UiMapDto dto, Model model) throws Exception {
	  	service.selectProductGrpProductdefList(dto);
	  	return apply(dto, model);
	  }
 	
  	///
 	
	/*
     * @fn : selectProductKind
     * @brief :  품목별
     * @remark 
     * @Create Date: 2021. 05. 24
     * @Author: 김성현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 24  김성현      최초  생성
     *
     */
  	@RequestMapping(value = "selectItemGrpProductdefDetailList.do")
 	  public View selectItemGrpProductdefDetailList(UiMapDto dto, Model model) throws Exception {
 	  	service.selectItemGrpProductdefDetailList(dto);
 	  	return apply(dto, model);
 	  }
     
     
   	/*
     * @fn : selectProductKind
     * @brief : 제품군별
     * @remark
     * @Create Date: 2021. 05. 24
     * @Author: 김성현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 24  김성현      최초  생성
     *
     */
  	@RequestMapping(value = "selectProductGrpProductdefDetailList.do")
 	  public View selectProductGrpProductdefDetailList(UiMapDto dto, Model model) throws Exception {
 	  	service.selectProductGrpProductdefDetailList(dto);
 	  	return apply(dto, model);
 	  }
  	
  }


