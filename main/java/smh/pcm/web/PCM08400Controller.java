package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM08400Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: PCM08400Controller.java
 * @Package		: smh.pcm.web
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM08400Controller
 * @Company		: Built1
 * @Create Date	: 2021.3.15
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 3. 15.  김진현      최초  생성 
 */
@Controller
@RequestMapping(value = "/pcm08400")
public class PCM08400Controller extends AbstractWebController {

    @Autowired
    private PCM08400Service service;

    /**
     * @fn : selectPlantList
     * @brief : 포장 실적 조회 (site 콤보) 조회
     * @remark
     * @Create Date: 2021. 3. 15
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 15.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectPlantList.do")
	  public View selectPlantList(UiMapDto dto, Model model) throws Exception {
	  	service.selectPlantList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectTypeList
     * @brief : 제품 구분 조회(포장 실적 조회 - 품목코드 팝업)
     * @remark
     * @Create Date: 2021. 3. 15
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 15.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectTypeList.do")
	  public View selectTypeList(UiMapDto dto, Model model) throws Exception {
	  	service.selectTypeList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectProductDefinitionList
     * @brief : 품목코드 팝업 조회(포장 실적 조회)
     * @remark
     * @Create Date: 2021. 3. 15
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 15.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectProductDefinitionList.do")
	  public View selectProductDefinitionList(UiMapDto dto, Model model) throws Exception {
	  	service.selectProductDefinitionList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectAreaListByAuthorityList
     * @brief : 작업장ID 조회(사용자 권한별)
     * @remark
     * @Create Date: 2021. 3. 15
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 15.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectAreaListByAuthorityList.do")
	  public View selectAreaListByAuthorityList(UiMapDto dto, Model model) throws Exception {
	  	service.selectAreaListByAuthorityList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectLotIdList
     * @brief : Lot No 팝업 메인 조회(포장 실적 조회)
     * @remark
     * @Create Date: 2021. 3. 15
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 15.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectLotIdList.do")
	  public View selectLotIdList(UiMapDto dto, Model model) throws Exception {
	  	service.selectLotIdList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectProductionOrderIdListOfLotInput
     * @brief : 포장실적 조회 - Lot No - 품목 팝업 조회 
     * @remark
     * @Create Date: 2021. 3. 15
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 15.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectProductionOrderIdListOfLotInput.do")
	  public View selectProductionOrderIdListOfLotInput(UiMapDto dto, Model model) throws Exception {
	  	service.selectProductionOrderIdListOfLotInput(dto);	  	
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectProcessSegmentList
     * @brief : 포장 실적 조회 (Lot No. 선택 팝업의 공정 팝업)
     * @remark
     * @Create Date: 2021. 3. 16
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 16.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectProcessSegmentList.do")
	  public View selectProcessSegmentList(UiMapDto dto, Model model) throws Exception {
	  	service.selectProcessSegmentList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : SelectPackingFinishedList
     * @brief : 포장 실적 조회 (포장 작업 리스트 - 메인조회)
     * @remark
     * @Create Date: 2021. 3. 16
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 16.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "SelectPackingFinishedList.do")
	  public View SelectPackingFinishedList(UiMapDto dto, Model model) throws Exception {
	  	service.SelectPackingFinishedList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : SelectPackingLotList
     * @brief : 포장 실적 조회 (포장 작업 리스트 - 상세조회)
     * @remark
     * @Create Date: 2021. 3. 16
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 16.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "SelectPackingLotList.do")
	  public View SelectPackingLotList(UiMapDto dto, Model model) throws Exception {
	  	service.SelectPackingLotList(dto);
	  	return apply(dto, model);
	  }
  	
  	/******************************************************************************************
  	 *  재포장 완료 조회
  	 ******************************************************************************************/
  	
  	/**
     * @fn : selectRePackCompList
     * @brief : 재포장 완료 조회 list
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
  	@RequestMapping(value = "selectRePackCompList.do")
	  public View selectRePackCompList(UiMapDto dto, Model model) throws Exception {
	  	service.selectRePackCompList(dto);
	  	return apply(dto, model);
	  }
  	
  	
  	
  }


