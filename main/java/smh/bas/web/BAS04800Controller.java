package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS04800Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : BAS04800Controller.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS04800Controller
* @Company     : Built1
* @Create Date : 2021.03.24
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.24  yanghee.kim    최초  생성
*
*/
@Controller
@RequestMapping(value = "/bas04800")
public class BAS04800Controller extends AbstractWebController {

    @Autowired
    private BAS04800Service service;

    /**
    * @fn          : selectGetSelfInspectionList
    * @brief       : 기준정보 > 품질관리 > 자주검사기준정보 > 자주검사기준정보 조회
    * @remark
    * @Create Date : 2021.04.09
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.09  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectGetSelfInspectionList.do")
    public View selectGetSelfInspectionList(UiMapDto dto, Model model) throws Exception {
        service.selectGetSelfInspectionList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : selectGetSelfInspectionPopup
    * @brief       : 기준정보 > 품질관리 > 자주검사 > 자주검사 리스트
    * @remark
    * @Create Date : 2021.04.09
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.09  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectGetSelfInspectionPopup.do")
    public View selectGetSelfInspectionPopup(UiMapDto dto, Model model) throws Exception {
        service.selectGetSelfInspectionPopup(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : selectInspectionPointByRelInfo
    * @brief       : 기준정보 > 품질관리 > 자주검사 > 검사Point 조회(팝업)
    * @remark
    * @Create Date : 2021.04.10
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.10  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectInspectionPointByRelInfo.do")
    public View selectInspectionPointByRelInfo(UiMapDto dto, Model model) throws Exception {
        service.selectInspectionPointByRelInfo(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : saveInspectionitemrel
    * @brief       : 품질 기준 정보의 검사 종류, 검사 정의, 검사 통제를 관리한다.
    * @Method Name : saveInspectionitemrel
    * @remark
    * @Create Date : 2021.04.09
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.09  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveInspectionitemrel.do")
    public View saveInspectionitemrel(UiMapDto dto, Model model) throws Exception {
        service.saveInspectionitemrel(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : saveBasInspectionPoint
    * @brief       : 기준정보 > 품질관리 > 자주검사 > 검사Point 저장(팝업)
    * @Method Name : saveBasInspectionPoint
    * @remark
    * @Create Date : 2021.04.10
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.10  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveBasInspectionPoint.do")
    public View saveBasInspectionPoint(UiMapDto dto, Model model) throws Exception {
        service.saveBasInspectionPoint(dto);
        return apply(dto, model);
    }
}