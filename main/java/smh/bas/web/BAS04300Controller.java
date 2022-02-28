package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS04300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : BAS04300Controller.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS04300Controller
* @Company     : Built1
* @Create Date : 2021.03.16
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.16  yanghee.kim    최초  생성
*
*/
@Controller
@RequestMapping(value = "/bas04300")
public class BAS04300Controller extends AbstractWebController {

    @Autowired
    private BAS04300Service service;

    /**
    * @fn          : selectInspClassIdList
    * @brief       : 검사종류 조회(조회조건)
    * @remark
    * @Create Date : 2021.03.16
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.16  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectInspClassIdList.do")
    public View selectInspClassIdList(UiMapDto dto, Model model) throws Exception {
        service.selectInspClassIdList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectInspDefinitionList
    * @brief       : 설비 불량코드 연계정보 조회
    * @remark
    * @Create Date : 2021.03.16
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.16  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectInspDefinitionList.do")
    public View selectInspDefiList(UiMapDto dto, Model model) throws Exception {
        service.selectInspDefinitionList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectInspMethodItemList
    * @brief       : 설비 불량코드 연계정보 조회
    * @remark
    * @Create Date : 2021.03.16
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.16  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectInspMethodItemList.do")
    public View selectInspMethodItemList(UiMapDto dto, Model model) throws Exception {
        service.selectInspMethodItemList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectImportInspTreeList
    * @brief       : 수입(원자재),수입(원자재가공품) Tree조회
    * @remark
    * @Create Date : 2021.03.17
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.17  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectImportInspTreeList.do")
    public View selectImportInspTreeList(UiMapDto dto, Model model) throws Exception {
        service.selectImportInspTreeList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : selectInspClassMatList
    * @brief       : 수입(원자재),수입(원자재가공품) 자재분류 리스트 조회
    * @remark
    * @Create Date : 2021.03.17
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.17  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectInspClassMatList.do")
    public View selectInspClassMatList(UiMapDto dto, Model model) throws Exception {
        service.selectInspClassMatList(dto);
        return apply(dto, model);
    }  

    /**
    * @fn          : selectReliabilityInspTreeList
    * @brief       : 신뢰성 검증  Tree조회
    * @remark
    * @Create Date : 2021.03.17
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.17  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectReliabilityInspTreeList.do")
    public View selectReliabilityInspTreeList(UiMapDto dto, Model model) throws Exception {
        service.selectReliabilityInspTreeList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : selectReliabilityClassList
    * @brief       : 신뢰성 검증 검사그룹리스트 조회
    * @remark
    * @Create Date : 2021.03.17
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.17  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectReliabilityClassList.do")
    public View selectReliabilityClassList(UiMapDto dto, Model model) throws Exception {
        service.selectReliabilityClassList(dto);
        return apply(dto, model);
    }
        
    /**
    * @fn          : selectReliabilityItemList
    * @brief       : 신뢰성 검증 검사항목 리스트 조회
    * @remark
    * @Create Date : 2021.03.17
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.17  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectReliabilityItemList.do")
    public View selectReliabilityItemList(UiMapDto dto, Model model) throws Exception {
        service.selectReliabilityItemList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : saveInspDefinition
    * @brief       : 검사방법목록 등록/수정 Call
    * @Method Name : saveInspDefinition
    * @remark
    * @Create Date : 2021.03.16
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.16  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveInspDefinition.do")
    public View saveInspDefinition(UiMapDto dto, Model model) throws Exception {
        service.saveInspDefinition(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : saveImportInsp
    * @brief       : 수입(원자재),수입(원자재가공품) 등록/수정 Call
    * @Method Name : saveImportInsp
    * @remark
    * @Create Date : 2021.03.17
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.17  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveImportInsp.do")
    public View saveImportInsp(UiMapDto dto, Model model) throws Exception {
        service.saveImportInsp(dto);
        return apply(dto, model);
    }   
    
    /**
    * @fn          : saveReliabilityInsp
    * @brief       : 신뢰성 검증 등록/수정 Call
    * @Method Name : saveImportInsp
    * @remark
    * @Create Date : 2021.03.17
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.17  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveReliabilityInsp.do")
    public View saveReliabilityInsp(UiMapDto dto, Model model) throws Exception {
        service.saveReliabilityInsp(dto);
        return apply(dto, model);
    }
}