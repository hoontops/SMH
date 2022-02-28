package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM08300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: PCM08300Controller.java
 * @Package		: smh.pcm.web
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM08300Controller
 * @Company		: Built1
 * @Create Date	: 2021.04.15
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 04. 15.  김진현      최초  생성 
 */
@Controller
@RequestMapping(value = "/pcm08300")
public class PCM08300Controller extends AbstractWebController {

    @Autowired
    private PCM08300Service service;

    /**
     * @fn : selectRePackList
     * @brief : 재포장 등록 List 조회
     * @remark
     * @Create Date: 2021. 04. 15
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 15.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectRePackList.do")
	  public View selectRePackList(UiMapDto dto, Model model) throws Exception {
	  	service.selectRePackList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : saveRePackList
     * @brief : 재포장 등록 List 재포장완료 
     * @remark
     * @Create Date: 2021. 04. 15
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 15.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "saveRePackList.do")
	  public View saveRePackList(UiMapDto dto, Model model) throws Exception {
	  	service.saveRePackList(dto);
	  	return apply(dto, model);
	  }
  	
  	
  	
  }


