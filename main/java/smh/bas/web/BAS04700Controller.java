package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS04700Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : BAS04700Controller.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS04700Controller
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
@RequestMapping(value = "/bas04700")
public class BAS04700Controller extends AbstractWebController {

    @Autowired
    private BAS04700Service service;

    /**
    * @fn          : selectQcOperationInspectionItemList
    * @brief       : 탭1. 계측검사 - 제품정보 조회
    * @remark
    * @Create Date : 2021.03.30
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일                           수정자                   수정내용
    *   ----------  ------------  ----------
    *   2021.03.30  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectQcOperationInspectionItemList.do")
    public View selectQcOperationInspectionItemList(UiMapDto dto, Model model) throws Exception {
        service.selectQcOperationInspectionItemList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : selectQcOperationInspectionList
    * @brief       : 탭1. 계측검사 - 검사정보 조회
    * @remark
    * @Create Date : 2021.03.30
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일                           수정자                   수정내용
    *   ----------  ------------  ----------
    *   2021.03.30  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectQcOperationInspectionList.do")
    public View selectQcOperationInspectionList(UiMapDto dto, Model model) throws Exception {
        service.selectQcOperationInspectionList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : selectQcOSPInspectionList
    * @brief       : 탭2. 공정수입검사 조회
    * @remark
    * @Create Date : 2021.03.30
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일                           수정자                   수정내용
    *   ----------  ------------  ----------
    *   2021.03.30  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectQcOSPInspectionList.do")
    public View selectQcOSPInspectionList(UiMapDto dto, Model model) throws Exception {
        service.selectQcOSPInspectionList(dto);
        return apply(dto, model);
    }    

    /**
    * @fn          : selectSpecDetailPopUp
    * @brief       : 규격조회(팝업)
    * @remark
    * @Create Date : 2021.03.30
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일                           수정자                   수정내용
    *   ----------  ------------  ----------
    *   2021.03.30  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectSpecDetailPopUp.do")
    public View selectSpecDetailPopUp(UiMapDto dto, Model model) throws Exception {
        service.selectSpecDetailPopUp(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : saveInspectionitemrel
    * @brief       : 품질 기준 정보의 검사 종류, 검사 정의, 검사 통제를 관리한다.
    * @Method Name : saveInspectionitemrel
    * @remark
    * @Create Date : 2021.03.30
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일                           수정자                   수정내용
    *   ----------  ------------  ----------
    *   2021.03.30  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveInspectionitemrel.do")
    public View saveInspectionitemrel(UiMapDto dto, Model model) throws Exception {
        service.saveInspectionitemrel(dto);
        return apply(dto, model);
    }   
}