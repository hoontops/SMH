package smh.mfm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.mfm.service.MFM00500Service;

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
@RequestMapping(value = "/mfm00500")
public class MFM00500Controller extends AbstractWebController {

    @Autowired
    private MFM00500Service service;

    /**
     * @fn : selectLoadPredictionPerRecordTotalList
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
  	@RequestMapping(value = "selectLoadPredictionPerRecordTotalList.do")
	  public View selectLoadPredictionPerRecordTotalList(UiMapDto dto, Model model) throws Exception {
	  	service.selectLoadPredictionPerRecordTotalList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectLoadPredictionPerRecordList
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
  	@RequestMapping(value = "selectLoadPredictionPerRecordList.do")
	  public View selectLoadPredictionPerRecordList(UiMapDto dto, Model model) throws Exception {
	  	service.selectLoadPredictionPerRecordList(dto);
	  	return apply(dto, model);
	  }
  }


