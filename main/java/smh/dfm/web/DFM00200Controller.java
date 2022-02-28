package smh.dfm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.dfm.service.DFM00200Service;

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
 * @Create Date	: 2021.05.21
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 05. 21.  김진현      최초  생성 
 */
@Controller
@RequestMapping(value = "/dfm00200")
public class DFM00200Controller extends AbstractWebController {

    @Autowired
    private DFM00200Service service;

    /**
     * @fn : selectDefectMapProductList
     * @brief : 2블럭 메인 조회시 lot정보 Line에서 가져옴
     * @remark
     * @Create Date: 2021. 05. 10
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 10.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectDefectMapProductList.do")
      public View selectDefectMapProductList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectMapProductList(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : selectItemRevList
     * @brief :  품목별 Defect Map - Rev 콤보값 조회
     * @remark
     * @Create Date: 2021. 05. 24
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 24.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectItemRevList.do")
      public View selectItemRevList(UiMapDto dto, Model model) throws Exception {
        service.selectItemRevList(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : selectFilterProcComboList
     * @brief :  품목별 Defect Map - 필터 공정 콤보 조회
     * @remark
     * @Create Date: 2021. 05. 24
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 24.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectFilterProcComboList.do")
      public View selectFilterProcComboList(UiMapDto dto, Model model) throws Exception {
        service.selectFilterProcComboList(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : selectNoInputMainList
     * @brief :  품목별 Defect Map - 필터 품목코드 미선택시 메인 조회
     * @remark
     * @Create Date: 2021. 05. 24
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 24.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectNoInputMainList.do")
      public View selectNoInputMainList(UiMapDto dto, Model model) throws Exception {
        service.selectNoInputMainList(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : selectInputMainList
     * @brief :  품목별 Defect Map - 품목코드 입력시 메인 조회
     * @remark
     * @Create Date: 2021. 05. 25
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 25.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectInputMainList.do")
      public View selectInputMainList(UiMapDto dto, Model model) throws Exception {
        service.selectInputMainList(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : selectDefectMapList
     * @brief :  품목별 Defect Map - 해석 (Raw Data, 차트, 이미지 조회)
     * @remark
     * @Create Date: 2021. 05. 25
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 25.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectDefectMapList.do")
      public View selectDefectMapList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectMapList(dto);
        return apply(dto, model);
      }
  	
    /**
     * @fn : selectProcDefectMapDefectImgPointList
     * @brief :  품목별 Defect Map - 필터 Layer 동적 이미지 포인트 정보 재조회
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
    @RequestMapping(value = "selectProcDefectMapDefectImgPointList.do")
      public View selectProcDefectMapDefectImgPointList(UiMapDto dto, Model model) throws Exception {
        service.selectProcDefectMapDefectImgPointList(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : selectProcDefectMapPanelFilterList
     * @brief :  품목별 Defect Map - 선택된 (이미지 설정된 Layer, Lot 정보에 따른 생성해야 할 판넬 정보 조회) 
     * @remark
     * @Create Date: 2021. 05. 31
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 31.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectProcDefectMapPanelFilterList.do")
      public View selectProcDefectMapPanelFilterList(UiMapDto dto, Model model) throws Exception {
        service.selectProcDefectMapPanelFilterList(dto);
        return apply(dto, model);
      }
    
  	
  	
  }


