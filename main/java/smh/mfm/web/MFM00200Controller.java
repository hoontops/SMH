package smh.mfm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.mfm.service.MFM00200Service;

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
@RequestMapping(value = "/mfm00200")
public class MFM00200Controller extends AbstractWebController {

    @Autowired
    private MFM00200Service service;

    /**
     * @fn : selectLoadSegmentListByTypeList
     * @brief : 대/중/소 공정그룹조회
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
  	@RequestMapping(value = "selectLoadSegmentListByTypeList.do")
	  public View selectLoadSegmentListByTypeList(UiMapDto dto, Model model) throws Exception {
	  	service.selectLoadSegmentListByTypeList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectLoadSegmentList
     * @brief : 대/중/소 공정그룹조회 List
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
  	@RequestMapping(value = "selectLoadSegmentList.do")
	  public View selectLoadSegmentList(UiMapDto dto, Model model) throws Exception {
	  	service.selectLoadSegmentList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : saveProcGrpList
     * @brief : 대/중/소 저장(등록,수정,삭제)
     * @remark
     * @Create Date: 2021. 04. 18
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 18.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "saveProcGrpList.do")
	  public View saveProcGrpList(UiMapDto dto, Model model) throws Exception {
	  	service.saveProcGrpList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectUserList
     * @brief : 공정 부하 기준 정보 - 담당자 팝업
     * @remark
     * @Create Date: 2021. 04. 19
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 19.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectUserList.do")
	  public View selectUserList(UiMapDto dto, Model model) throws Exception {
	  	service.selectUserList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectProdDefIdList
     * @brief : 공정 부하 기준 정보 - 품목 팝업
     * @remark
     * @Create Date: 2021. 04. 19
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 19.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectProdDefIdList.do")
	  public View selectProdDefIdList(UiMapDto dto, Model model) throws Exception {
	  	service.selectProdDefIdList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectProduDefListForOwnerMapping
     * @brief : 공정 부하 기준 정보 - 담당자 맵핑 List 조회
     * @remark
     * @Create Date: 2021. 04. 19
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 19.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectProduDefListForOwnerMapping.do")
	  public View selectProduDefListForOwnerMapping(UiMapDto dto, Model model) throws Exception {
	  	service.selectProduDefListForOwnerMapping(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : saveLoadSegmentRel
     * @brief : 공정 부하 기준 정보 - 담당자,표준공정맵핑,부하량 저장
     * @remark
     * @Create Date: 2021. 04. 19
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 19.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "saveLoadSegmentRel.do")
	  public View saveLoadSegmentRel(UiMapDto dto, Model model) throws Exception {
	  	service.saveLoadSegmentRel(dto);
	  	return apply(dto, model);
	  }
	  
  	
  	/**
     * @fn : selectProcessSegmentList
     * @brief : 공정 부하 기준 정보 - [표준공정 맵핑] - 표준공정팝업
     * @remark
     * @Create Date: 2021. 04. 19
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 19.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectProcessSegmentList.do")
	  public View selectProcessSegmentList(UiMapDto dto, Model model) throws Exception {
	  	service.selectProcessSegmentList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectProcessSegmentClassByTypeList
     * @brief : 공정 부하 기준 정보 - [표준공정 맵핑] - 표준공정팝업 - 중공정
     * @remark
     * @Create Date: 2021. 04. 19
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 19.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectProcessSegmentClassByTypeList.do")
	  public View selectProcessSegmentClassByTypeList(UiMapDto dto, Model model) throws Exception {
	  	service.selectProcessSegmentClassByTypeList(dto);
	  	return apply(dto, model);
	  }
  	

  	/**
     * @fn : selectLoadSegmentRelList
     * @brief : 공정 부하 기준 정보 - [표준공정 맵핑] - 표준공정List 조회
     * @remark
     * @Create Date: 2021. 04. 20
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 20.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectLoadSegmentRelList.do")
	  public View selectLoadSegmentRelList(UiMapDto dto, Model model) throws Exception {
	  	service.selectLoadSegmentRelList(dto);
	  	return apply(dto, model);
	  }
	  
  	/**
     * @fn : selectProductSegmentMappingList
     * @brief : 공정 부하 기준 정보 - [부하량 기준정보] - 부하량 기준정보 List 조회
     * @remark
     * @Create Date: 2021. 04. 20
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 20.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectProductSegmentMappingList.do")
	  public View selectProductSegmentMappingList(UiMapDto dto, Model model) throws Exception {
	  	service.selectProductSegmentMappingList(dto);
	  	return apply(dto, model);
	  }
  	
  	
  	/**
     * @fn : selectProdGrp
     * @brief :  공정부하기준정보 - 담당자 필터 품목그룹
     * @remark
     * @Create Date: 2021. 07. 27
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 07. 27.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectProdGrp.do")
      public View selectProdGrp(UiMapDto dto, Model model) throws Exception {
        service.selectProdGrp(dto);
        return apply(dto, model);
      }
  	
  	
  }


