package smh.mfm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.mfm.service.MFM01400Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: MFM01400Controller.java
 * @Package		: smh.mfm.web
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM01400Controller
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
@RequestMapping(value = "/mfm01400")
public class MFM01400Controller extends AbstractWebController {

    @Autowired
    private MFM01400Service service;

    /**
     * @fn : SelectWorkDoneQtyMainList
     * @brief : 주요 공정 실적 현황판 - main(left, right) 조회
     * @remark
     * @Create Date: 2021. 04. 26
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 04. 26.  김진현      최초  생성
     *
     */
  	@RequestMapping(value = "selectWorkDoneQtyMainList.do")
	  public View selectWorkDoneQtyMainList(UiMapDto dto, Model model) throws Exception {
	  	service.selectWorkDoneQtyMainList(dto);
	  	return apply(dto, model);
	  }
  	
  	/**
     * @fn : selectWorkDoneQtyDetailList
     * @brief :  주요 공정 실적 현황판 - 상세 내용 조회 (그리드 + 헤더)
     * @remark
     * @Create Date: 2021. 05. 18
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 18.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectWorkDoneQtyDetailList.do")
      public View selectWorkDoneQtyDetailList(UiMapDto dto, Model model) throws Exception {
        service.selectWorkDoneQtyDetailList(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : selectWorkDoneSummaryLeftList
     * @brief :  주요 공정 실적 현황판 - 상세 내용 조회 (그리드 + 헤더)
     * @remark
     * @Create Date: 2021. 05. 18
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 18.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectWorkDoneSummaryLeftList.do")
      public View selectWorkDoneSummaryLeftList(UiMapDto dto, Model model) throws Exception {
        service.selectWorkDoneSummaryLeftList(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : selectWorkDoneSummaryRightList
     * @brief :  주요 공정 실적 현황판 - 상세 내용 조회 (그리드 + 헤더) - 작업장 소계
     * @remark
     * @Create Date: 2021. 05. 21
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 21.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectWorkDoneSummaryRightList.do")
      public View selectWorkDoneSummaryRightList(UiMapDto dto, Model model) throws Exception {
        service.selectWorkDoneSummaryRightList(dto);
        return apply(dto, model);
      }
    

/**
     * @fn : selectWorkDoneINPUTSTATUSDetail
     * @brief :  주요 공정 실적 현황판 - 상세 내용 조회 (투입현황)
     * @remark
     * @Create Date: 2021. 05. 21
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 21.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectWorkDoneINPUTSTATUSDetail.do")
      public View selectWorkDoneINPUTSTATUSDetail(UiMapDto dto, Model model) throws Exception {
        service.selectWorkDoneINPUTSTATUSDetail(dto);
        return apply(dto, model);
      }
    
    
    /**
     * @fn : selectWorkDoneNOTINPUTSTATUSDetail
     * @brief :  주요 공정 실적 현황판 - 미투입현황 상세조회
     * @remark
     * @Create Date: 2021. 07. 14
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 07. 14.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectWorkDoneNOTINPUTSTATUSDetail.do")
      public View selectWorkDoneNOTINPUTSTATUSDetail(UiMapDto dto, Model model) throws Exception {
        service.selectWorkDoneNOTINPUTSTATUSDetail(dto);
        return apply(dto, model);
      }
  	
	  
  	
  	
  }


