package smh.dfm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.dfm.service.DFM00400Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
 * @file		: MFM00400Controller.java
 * @Package		: smh.mfm.web
 * @Project name: IFC MES시스템 구축
 * @Type name	: MFM00400Controller
 * @Company		: Built1
 * @Create Date	: 2021.06.01
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 06. 01.  김진현      최초  생성 
 */
@Controller
@RequestMapping(value = "/dfm00400")
public class DFM00400Controller extends AbstractWebController {

    @Autowired
    private DFM00400Service service;



/**
     * @fn : selectDefectMapLotList
     * @brief :  Layer별 불량 현황 - [필터 - Lot No]
     * @remark
     * @Create Date: 2021. 06. 01
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 06. 01.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectDefectMapLotList.do")
      public View selectDefectMapLotList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectMapLotList(dto);
        return apply(dto, model);
      }
    /**
     * @fn : selectDefectMapProductList
     * @brief :  Layer별 불량 현황 - [필터 - 품목코드]
     * @remark
     * @Create Date: 2021. 06. 02
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 06. 02.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectDefectMapProductList.do")
      public View selectDefectMapProductList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectMapProductList(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : selectProductDefVersionByRate
     * @brief :  Layer별 불량 현황 - [필터 - 품목 Rev]
     * @remark
     * @Create Date: 2021. 06. 02
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 06. 02.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectProductDefVersionByRate.do")
      public View selectProductDefVersionByRate(UiMapDto dto, Model model) throws Exception {
        service.selectProductDefVersionByRate(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : selectLayerByProductdef
     * @brief :  Layer별 불량 현황 - [필터 - Layer 팝업]
     * @remark
     * @Create Date: 2021. 06. 02
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 06. 02.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectLayerByProductdef.do")
      public View selectLayerByProductdef(UiMapDto dto, Model model) throws Exception {
        service.selectLayerByProductdef(dto);
        return apply(dto, model);
      }
    
    /**
     * @fn : selectDefectRateByLayerList
     * @brief :  Layer별 불량 현황 - [메인 조회 raw data]
     * @remark
     * @Create Date: 2021. 06. 02
     * @Author: 김진현
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일               수정자         수정내용
     *   ------------  ------  ----------
     *   2021. 06. 02.  김진현      최초  생성
     *
     */
    @RequestMapping(value = "selectDefectRateByLayerList.do")
      public View selectDefectRateByLayerList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectRateByLayerList(dto);
        return apply(dto, model);
      }
    
  	
  	
  }


