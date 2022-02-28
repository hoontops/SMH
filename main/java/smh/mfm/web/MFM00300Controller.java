package smh.mfm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.mfm.service.MFM00300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: MFM00300Controller.java
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
@RequestMapping(value = "/mfm00300")
public class MFM00300Controller extends AbstractWebController {

    @Autowired
    private MFM00300Service service;

    /**
     * @fn : selectDaySegmentLoad
     * @brief : 공정 부하 예측
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
  	@RequestMapping(value = "selectDaySegmentLoad.do")
	  public View selectDaySegmentLoad(UiMapDto dto, Model model) throws Exception {
	  	service.selectDaySegmentLoad(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : saveProcGrpList
     * @brief : 공정 부하 예측 : 확정
     * @remark
     * @Create Date: 2021. 04. 18
     * @Author: 박현우
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 18.  박현우      최초  생성
     *
     */
  	@RequestMapping(value = "saveDaySegmentLoadConfirm.do")
	  public View saveDaySegmentLoadConfirm(UiMapDto dto, Model model) throws Exception {
	  	service.saveDaySegmentLoadConfirm(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : saveProcGrpList
     * @brief : 공정 부하 예측 : 저장
     * @remark
     * @Create Date: 2021. 04. 18
     * @Author: 박현우
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 18.  박현우      최초  생성
     *
     */
  	@RequestMapping(value = "saveDaySegmentLoad.do")
	  public View saveDaySegmentLoad(UiMapDto dto, Model model) throws Exception {
	  	service.saveDaySegmentLoad(dto);
	  	return apply(dto, model);
	  }
  	
  	
  }


