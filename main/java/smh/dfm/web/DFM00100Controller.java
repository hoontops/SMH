package smh.dfm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.dfm.service.DFM00100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: MFM01600Controller.java
 * @Package		: smh.mfm.web
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM01600Controller
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
@RequestMapping(value = "/dfm00100")
public class DFM00100Controller extends AbstractWebController {

    @Autowired
    private DFM00100Service service;

    /**
     * @fn : selectDefectMapLotList
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
    @RequestMapping(value = "selectDefectMapLotList.do")
      public View selectDefectMapLotList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectMapLotList(dto);
        return apply(dto, model);
      }
  	
    /**
     * @fn : selectProcComboList
     * @brief : Lot Defect Map 조회 - 필터 공정콤보 (lot에 해당하는 AOI이면서 층이 존재하는 공정만)
     * @remark
     * @Create Date: 2021. 05. 11
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 11.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectProcComboList.do")
      public View selectProcComboList(UiMapDto dto, Model model) throws Exception {
        service.selectProcComboList(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : selectDefectMapList
     * @brief : Lot Defect Map 조회 - RAW DATA 조회 (수정됨)
     * @remark
     * @Create Date: 2021. 05. 11
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 11.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectDefectMapList.do")
      public View selectDefectMapList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectMapList(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : selectLayerImageInfo
     * @brief : Lot Defect Map 조회 - 이미지 Layer C,S면 조회(BLOB TYPE)
     * @remark
     * @Create Date: 2021. 05. 13
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 13.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectLayerImageInfo.do")
      public View selectLayerImageInfo(UiMapDto dto, Model model) throws Exception {
        service.selectLayerImageInfo(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : selectDefectMapLayerFilterList
     * @brief : Lot Defect Map 조회 - 필터 적용 후 Point 정보 재조회
     * @remark
     * @Create Date: 2021. 05. 14
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 14.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectDefectMapLayerFilterList.do")
      public View selectDefectMapLayerFilterList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectMapLayerFilterList(dto);
        return apply(dto, model);
      }
      


    /**
     * @fn : selectDefectMapPanelFilterList
     * @brief : Lot Defect Map 조회 - 선택된 (이미지 설정된 Layer 정보에 따른 생성해야 할 판넬 정보 조회)
     * @remark
     * @Create Date: 2021. 05. 15
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 05. 15.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectDefectMapPanelFilterList.do")
      public View selectDefectMapPanelFilterList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectMapPanelFilterList(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : selectDefectMapDivList
     * @brief :  AOI Defect Map 그리드 조회
     * @remark
     * @Create Date: 2021. 06. 18
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 06. 18.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectDefectMapDivList.do")
      public View selectDefectMapDivList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectMapDivList(dto);
        return apply(dto, model);
      }
	  
  	
  	
  }


