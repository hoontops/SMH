package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM09400Service;
import smh.tom.service.TOM01100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: PCM09400Controller.java
 * @Package		: smh.pcm.web
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM09400Controller
 * @Company		: Built1
 * @Create Date	: 2021.3.10
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 3. 10.  김진현      최초  생성 
 */
@Controller
@RequestMapping(value = "/pcm09400")
public class PCM09400Controller extends AbstractWebController {

    @Autowired
    private PCM09400Service service;

    /**
     * @fn : selectPcmProductItemGroupList
     * @brief : 포장사양관리 (품목코드) 조회
     * @remark
     * @Create Date: 2021. 3. 10
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 10.  김진현      최초  생성
     *
     */
    //품목 코드 조회 (포장사양관리)
  	@RequestMapping(value = "selectPcmProductItemGroupList.do")
	  public View selectPcmProductItemGroupList(UiMapDto dto, Model model) throws Exception {
	  	service.selectPcmProductItemGroupList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectCustomerList
     * @brief : 포장사양관리 (고객사) 조회
     * @remark
     * @Create Date: 2021. 3. 10
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 10.  김진현      최초  생성
     *
     */
    //고객사 코드 조회 (포장사양관리)
  	@RequestMapping(value = "selectCustomerList.do")
	  public View selectCustomerList(UiMapDto dto, Model model) throws Exception {
	  	service.selectCustomerList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectPackagProductMstList
     * @brief : 포장사양관리 (고객정보 메인 그리드) 조회
     * @remark
     * @Create Date: 2021. 3. 10
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 10.  김진현      최초  생성
     *
     */
    //고객정보 메인 그리드  조회 (포장사양관리)
  	@RequestMapping(value = "selectPackagProductMstList.do")
	  public View selectPackagProductMstList(UiMapDto dto, Model model) throws Exception {
	  	service.selectPackagProductMstList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectPackagProductSubList
     * @brief : 포장사양관리 (버튼 기준정보, 포장정보 sub 그리드) 조회
     * @remark
     * @Create Date: 2021. 3. 11
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 11.  김진현      최초  생성
     *
     */
    //고객정보 메인 그리드  조회 (포장사양관리)
  	@RequestMapping(value = "selectPackagProductSubList.do")
	  public View selectPackagProductSubList(UiMapDto dto, Model model) throws Exception {
	  	service.selectPackagProductSubList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectMstDataClassId
     * @brief : 포장사양관리 (품목유형코드) 조회
     * @remark
     * @Create Date: 2021. 3. 11
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 11.  김진현      최초  생성
     *
     */
    // 품목코드 팝업 품목유형코드  조회 
  	@RequestMapping(value = "selectMstDataClassId.do")
	  public View selectMstDataClassId(UiMapDto dto, Model model) throws Exception {
	  	service.selectMstDataClassId(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectPcmProductItemGroupListVer1
     * @brief : 포장사양관리 (품목유형코드 활용) 조회
     * @remark
     * @Create Date: 2021. 3. 11
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 11.  김진현      최초  생성
     *
     */
    // 품목코드 팝업 조회 (품목유형코드 활용) 조회 
  	@RequestMapping(value = "selectPcmProductItemGroupListVer1.do")
	  public View selectPcmProductItemGroupListVer1(UiMapDto dto, Model model) throws Exception {
	  	service.selectPcmProductItemGroupListVer1(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectPackagProductDupList
     * @brief : 저장전 db 중복 값 체크 및 next seq 조회
     * @remark
     * @Create Date: 2021. 3. 12
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 12.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectPackagProductDupList.do")
	  public View selectPackagProductDupList(UiMapDto dto, Model model) throws Exception {
	  	service.selectPackagProductDupList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : savePackagProductList
     * @brief : 저장
     * @remark
     * @Create Date: 2021. 3. 12
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 12.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "savePackagProductList.do")
	  public View savePackagProductList(UiMapDto dto, Model model) throws Exception {
	  	service.savePackagProductList(dto);
	  	return apply(dto, model);
	  }
  	
  	
  	/**
     * @fn : selectPackCustomerList
     * @brief : 고객사 정보 팝업 조회(조회조건) - 포장사양에 등록된 내용만
     * @remark
     * @Create Date: 2021. 04. 12
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 12.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectPackCustomerList.do")
	  public View selectPackCustomerList(UiMapDto dto, Model model) throws Exception {
	  	service.selectPackCustomerList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : savePackagMstChk
     * @brief :  포장기준정보관리 - Mst 고객사 코드 중복 체크
     * @remark
     * @Create Date: 2021. 07. 21
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 07. 21.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "savePackagMstChk.do")
      public View savePackagMstChk(UiMapDto dto, Model model) throws Exception {
        service.savePackagMstChk(dto);
        return apply(dto, model);
      }
  	
}
