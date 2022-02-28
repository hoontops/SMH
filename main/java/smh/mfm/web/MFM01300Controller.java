package smh.mfm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.mfm.service.MFM01300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: MFM01300Controller.java
 * @Package		: smh.mfm.web
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM01300Controller
 * @Company		: Built1
 * @Create Date	: 2021.04.21
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 04. 21.  김진현      최초  생성 
 */
@Controller
@RequestMapping(value = "/mfm01300")
public class MFM01300Controller extends AbstractWebController {

    @Autowired
    private MFM01300Service service;

    /**
     * @fn : selectWorkDoneSegmentListByTypeList
     * @brief : 주요공정 실적 현황판  - [대/중공정그룹 필터] - 대/중/ 주요공정그룹조회
     * @remark
     * @Create Date: 2021. 04. 21
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 21.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectWorkDoneSegmentListByTypeList.do")
	  public View selectWorkDoneSegmentListByTypeList(UiMapDto dto, Model model) throws Exception {
	  	service.selectWorkDoneSegmentListByTypeList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : SelectWorkDonedSegmentList
     * @brief : 주요공정 실적 현황판  - 대/중 주요공정그룹조회 List
     * @remark
     * @Create Date: 2021. 04. 21
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 21.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectWorkDoneSegmentList.do")
	  public View selectWorkDoneSegmentList(UiMapDto dto, Model model) throws Exception {
	  	service.selectWorkDoneSegmentList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : saveProcGrpList
     * @brief : 대/중 저장(등록,수정,삭제)
     * @remark
     * @Create Date: 2021. 04. 21
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 21.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "saveProcGrpList.do")
	  public View saveProcGrpList(UiMapDto dto, Model model) throws Exception {
	  	service.saveProcGrpList(dto);
	  	return apply(dto, model);
	  }
  	
  	
  	/**
     * @fn : SelectWorkDoneSegmentRelList
     * @brief : 주요 공정 실적 현황판 - [표준공정 맵핑] - 표준공정List 조회
     * @remark
     * @Create Date: 2021. 04. 21
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 21.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectWorkDoneSegmentRelList.do")
	  public View selectWorkDoneSegmentRelList(UiMapDto dto, Model model) throws Exception {
	  	service.selectWorkDoneSegmentRelList(dto);
	  	return apply(dto, model);
	  }
  	
  	
  	/**
     * @fn : saveWorkDoneSegmentRel
     * @brief : 주요 공정 실적 현황판 - [표준공정 맵핑] - 표준공정List 저장
     * @remark
     * @Create Date: 2021. 04. 21
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 21.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "saveWorkDoneSegmentRel.do")
	  public View saveWorkDoneSegmentRel(UiMapDto dto, Model model) throws Exception {
	  	service.saveWorkDoneSegmentRel(dto);
	  	return apply(dto, model);
	  }
  	
  	
  	
	  
  	
  	
  }


