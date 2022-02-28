package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS04100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : BAS04100Controller.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS04100Controller
* @Company     : Built1
* @Create Date : 2021.03.10
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.10  yanghee.kim    최초  생성
*
*/
@Controller
@RequestMapping(value = "/bas04100")
public class BAS04100Controller extends AbstractWebController {

    @Autowired
    private BAS04100Service service;

    /**
    * @fn          : selectInspectionclassList
    * @brief       : 검사정의 조회
    * @remark
    * @Create Date : 2021.03.10
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.10  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectInspectionclassList.do")
    public View selectInspectionclassList(UiMapDto dto, Model model) throws Exception {
        service.selectInspectionclassList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : selectProcesssegmentclassLList
    * @brief       : 검사통제 - 대공정 조회
    * @remark
    * @Create Date : 2021.03.10
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.10  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectProcesssegmentclassLList.do")
    public View selectProcesssegmentclassLList(UiMapDto dto, Model model) throws Exception {
        service.selectProcesssegmentclassLList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectProcesssegmentclassMList
    * @brief       : 검사통제 - 중공정 조회
    * @remark
    * @Create Date : 2021.03.10
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.10  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectProcesssegmentclassMList.do")
    public View selectProcesssegmentclassMList(UiMapDto dto, Model model) throws Exception {
        service.selectProcesssegmentclassMList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : selectProcesssegmentclassList
    * @brief       : 검사통제 - 공정 조회
    * @remark
    * @Create Date : 2021.03.10
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.10  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectProcesssegmentclassList.do")
    public View selectProcesssegmentclassList(UiMapDto dto, Model model) throws Exception {
        service.selectProcesssegmentclassList(dto);
        return apply(dto, model);
    } 
    
    /**
    * @fn          : selectProcessInspectionclassList
    * @brief       : 검사통제 - 검사종류 조회
    * @remark
    * @Create Date : 2021.03.10
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.10  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectProcessInspectionclassList.do")
    public View selectProcessInspectionclassList(UiMapDto dto, Model model) throws Exception {
        service.selectProcessInspectionclassList(dto);
        return apply(dto, model);
    } 

    /**
    * @fn          : saveInspectionclass
    * @brief       : 검사정의 수정
    * @Method Name : saveInspectionclass
    * @remark
    * @Create Date : 2021.03.10
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.10  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveInspectionclass.do")
    public View saveInspectionclass(UiMapDto dto, Model model) throws Exception {
        service.saveInspectionclass(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : saveInspectionsegmentrel
    * @brief       : 검사 공정 - 통제 정보 등록/수정 Call
    * @Method Name : saveInspectionsegmentrel
    * @remark
    * @Create Date : 2021.03.11
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.11  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveInspectionsegmentrel.do")
    public View saveInspectionsegmentrel(UiMapDto dto, Model model) throws Exception {
        service.saveInspectionsegmentrel(dto);
        return apply(dto, model);
    }
}