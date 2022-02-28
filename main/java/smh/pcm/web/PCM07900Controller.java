package smh.pcm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.pcm.service.PCM07900Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: PCM07900Controller.java
 * @Package		: smh.pcm.web
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM07900Controller
 * @Company		: Built1
 * @Create Date	: 2021.3.18
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 3. 18.  김진현      최초  생성 
 */
@Controller
@RequestMapping(value = "/pcm07900")
public class PCM07900Controller extends AbstractWebController {

	@Autowired
    private PCM07900Service service;


  	/**
     * @fn : selectCustPartNmList
     * @brief : 고객파트명 팝업 (사양정보에 등록된 내용 조회) - 고객pn, 고객모델명
     * @remark
     * @Create Date: 2021. 3. 26
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 26.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectCustPartNmList.do")
	  public View selectCustPartNmList(UiMapDto dto, Model model) throws Exception {
	  	service.selectCustPartNmList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectPlantAllList
     * @brief : 포장 실적 등록 출고지 All
     * @remark
     * @Create Date: 2021. 3. 26
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 26.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectPlantAllList.do")
	  public View selectPlantAllList(UiMapDto dto, Model model) throws Exception {
	  	service.selectPlantAllList(dto);
	  	return apply(dto, model);
	  }
	  
  	
  	/**
     * @fn : selectCustomerSampleList
     * @brief : 고객사 정보 팝업 조회(조회조건) - 포장 실적 등록 sample 추가
     * @remark
     * @Create Date: 2021. 3. 26
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 26.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectCustomerSampleList.do")
	  public View selectCustomerSampleList(UiMapDto dto, Model model) throws Exception {
	  	service.selectCustomerSampleList(dto);
	  	return apply(dto, model);
	  }
  	
  	
  	/**
     * @fn : selectBtnAndHeadInfo
     * @brief : 고객사 값 변경시 (버튼 / 그리드 활성화 정보 조회)
     * @remark
     * @Create Date: 2021. 3. 26
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 26.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectBtnAndHeadInfo.do")
	  public View selectBtnAndHeadInfo(UiMapDto dto, Model model) throws Exception {
	  	service.selectBtnAndHeadInfo(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectPackDtlInfo
     * @brief : 그리드 고객모델명 팝업창
     * @remark
     * @Create Date: 2021. 3. 29
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 29.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectPackDtlInfo.do")
	  public View selectPackDtlInfo(UiMapDto dto, Model model) throws Exception {
	  	service.selectPackDtlInfo(dto);
	  	return apply(dto, model);	  	
	  }
  	
  	
  	
  	/**
     * @fn : selectPackLotInfo
     * @brief : 포장실적등록 - LOT조회
     * @remark
     * @Create Date: 2021. 3. 29
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 29.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectPackLotInfo.do")
	  public View selectPackLotInfo(UiMapDto dto, Model model) throws Exception {
	  	service.selectPackLotInfo(dto);
	  	return apply(dto, model);
	  }
  	
  	
  	/**
     * @fn : savePackLabel
     * @brief : 포장실적등록 - main 등록 저장
     * @remark
     * @Create Date: 2021. 3. 31
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 31.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "savePackLabel.do")
	  public View savePackLabel(UiMapDto dto, Model model) throws Exception {
	  	service.savePackLabel(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectPackLabelMainList
     * @brief : 포장실적등록 - Main조회
     * @remark
     * @Create Date: 2021. 4. 1
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 4. 1.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectPackLabelMainList.do")
	  public View selectPackLabelMainList(UiMapDto dto, Model model) throws Exception {
	  	service.selectPackLabelMainList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectPackLabelSubList
     * @brief : 포장실적등록 - SUB(Line, Lot)조회
     * @remark
     * @Create Date: 2021. 4. 1
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 4. 1.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectPackLabelSubList.do")
	  public View selectPackLabelSubList(UiMapDto dto, Model model) throws Exception {
	  	service.selectPackLabelSubList(dto);
	  	return apply(dto, model);
	  }
  	
  	
  	/**
     * @fn : savePackLabelUpdate
     * @brief : 포장실적등록 - 일괄등록 저장
     * @remark
     * @Create Date: 2021. 4. 1
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 4. 1.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "savePackLabelUpdate.do")
	  public View savePackLabelUpdate(UiMapDto dto, Model model) throws Exception {
	  	service.savePackLabelUpdate(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectPackInvNoList
     * @brief : 포장실적등록 - Inv No
     * @remark
     * @Create Date: 2021. 4. 1
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 4. 1.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectPackInvNoList.do")
	  public View selectPackInvNoList(UiMapDto dto, Model model) throws Exception {
	  	service.selectPackInvNoList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : savePackInvNo
     * @brief : 포장실적등록 - Inv No 저장
     * @remark
     * @Create Date: 2021. 4. 1
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 4. 1.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "savePackInvNo.do")
	  public View savePackInvNo(UiMapDto dto, Model model) throws Exception {
	  	service.savePackInvNo(dto);
	  	return apply(dto, model);
	  }
  	
  	
  	/**
     * @fn : deletePackInvNo
     * @brief : 포장실적등록 - Inv No 일괄 삭제 저장
     * @remark
     * @Create Date: 2021. 4. 3
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 4. 3.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "deletePackInvNo.do")
	  public View deletePackInvNo(UiMapDto dto, Model model) throws Exception {
	  	service.deletePackInvNo(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : savePackDnoUpdate
     * @brief : 포장실적등록 - DNO 생성/취소
     * @remark
     * @Create Date: 2021. 4. 5
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 4. 5.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "savePackDnoUpdate.do")
	  public View savePackDnoUpdate(UiMapDto dto, Model model) throws Exception {
	  	service.savePackDnoUpdate(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : getPackUserGroupUserList
     * @brief : 포장 작업자, 검자사 (포장관리자 권한 있는 사람만 조회)
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
  	@RequestMapping(value = "getPackUserGroupUserList.do")
	  public View getPackUserGroupUserList(UiMapDto dto, Model model) throws Exception {
	  	service.getPackUserGroupUserList(dto);
	  	return apply(dto, model);
	  }
	  
  	
  	
  	/*******************************************************************************
  	 *   [이미지 테스트 용 ↓]
  	 ********************************************************************************/
	
	
	
	/**
     * @fn : selectConsumableDefList
     * @brief : 자재품목ID선택 조회
     * @remark
     * @Create Date: 2021. 3. 18
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 18.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectImageHandV.do")
	  public View selectImageHandV(UiMapDto dto, Model model) throws Exception {
  		
  		System.out.println(" #####[controller 호출]#### --> : ");
  		service.selectImageHandV(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectChartTest
     * @brief : 자재품목ID선택 조회
     * @remark
     * @Create Date: 2021. 3. 18
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 18.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectChartTest.do")
	  public View selectChartTest(UiMapDto dto, Model model) throws Exception {
  		
  		service.selectChartTest(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectImageBlob
     * @brief : blob
     * @remark
     * @Create Date: 2021. 3. 23
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 3. 23.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectImageBlob.do")
	  public View selectImageBlob(UiMapDto dto, Model model) throws Exception {
  		
  		service.selectImageBlob(dto);
	  	return apply(dto, model);
	  }
  	
  	
  	/**
     * @fn : saveLabelCount
     * @brief : 라벨 출력 후 count 
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
  	@RequestMapping(value = "saveLabelCount.do")
	  public View saveLabelCount(UiMapDto dto, Model model) throws Exception {
	  	service.saveLabelCount(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectPackInvNoQtyList
     * @brief :  포장,라벨 출력 - 인보이스 등록 팝업 (등록시 양품수량 조회)
     * @remark
     * @Create Date: 2021. 05. 28
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 28.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectPackInvNoQtyList.do")
      public View selectPackInvNoQtyList(UiMapDto dto, Model model) throws Exception {
        service.selectPackInvNoQtyList(dto);
        return apply(dto, model);
      }
    
    
    /**
     * @fn : selectInspectXoutList
     * @brief :  검사번호로 XOUT 정보 조회
     * @remark
     * @Create Date: 2021. 06. 10
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 06. 10.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectInspectXoutList.do")
      public View selectInspectXoutList(UiMapDto dto, Model model) throws Exception {
        service.selectInspectXoutList(dto);
        return apply(dto, model);
      }
  	
    
    /**
     * @fn : selectXoutPackInfoList
     * @brief :  검사번호로 XOUT 정보 조회 후 포장 기준 정보 조회
     * @remark
     * @Create Date: 2021. 06. 10
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 06. 10.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectXoutPackInfoList.do")
      public View selectXoutPackInfoList(UiMapDto dto, Model model) throws Exception {
        service.selectXoutPackInfoList(dto);
        return apply(dto, model);
      }
  	
    
    /**
     * @fn : selectXoutPackInfoPopList
     * @brief :  검사번호로 XOUT 정보 조회 후 고객모델명 정보 여러건인 경우 
     * @remark
     * @Create Date: 2021. 06. 11
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 06. 11.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectXoutPackInfoPopList.do")
      public View selectXoutPackInfoPopList(UiMapDto dto, Model model) throws Exception {
        service.selectXoutPackInfoPopList(dto);
        return apply(dto, model);
      }
    
    
    /**
     * @fn : selectXoutPackInspInfoPopList
     * @brief :  포장라벨 - 인수된 LOT에 해당하는 검사번호 조회
     * @remark
     * @Create Date: 2021. 06. 30
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 06. 30.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectXoutPackInspInfoPopList.do")
      public View selectXoutPackInspInfoPopList(UiMapDto dto, Model model) throws Exception {
        service.selectXoutPackInspInfoPopList(dto);
        return apply(dto, model);
      }
      
  	
    
  	 
  	
}
