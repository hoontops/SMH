package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM00600Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : QAM00600Controller.java
* @Package     : smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM00600Controller
* @Company     : Built1
* @Create Date : 2021.03.26
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.26  yanghee.kim    최초  생성
*
*/
@Controller
@RequestMapping(value = "/qam00600")
public class QAM00600Controller extends AbstractWebController {

    @Autowired
    private QAM00600Service service;

    /**
    * @fn          : selectQcOspRequestInspRsltList
    * @brief       : (결과등록)외주입고품 조회
    * @remark
    * @Create Date : 2021.03.26
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.26  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectQcOspRequestInspRsltList.do")
    public View selectQcOspRequestInspRsltList(UiMapDto dto, Model model) throws Exception {
        service.selectQcOspRequestInspRsltList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectComboItemLIst
    * @brief       : 콤보 Item 조회
    * @remark
    * @Create Date : 2021.03.29
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.29  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectComboItemLIst.do")
    public View selectComboItemLIst(UiMapDto dto, Model model) throws Exception {
        service.selectComboItemLIst(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectLotInfoByLotIDOSP
    * @brief       : Lot정보 조회
    * @remark
    * @Create Date : 2021.03.29
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.29  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectLotInfoByLotIDOSP.do")
    public View selectLotInfoByLotIDOSP(UiMapDto dto, Model model) throws Exception {
        service.selectLotInfoByLotIDOSP(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectOSPInspectionAll
    * @brief       : 탭 조회
    * @remark
    * @Create Date : 2021.03.29
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.29  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectOSPInspectionAll.do")
    public View selectOSPInspectionAll(UiMapDto dto, Model model) throws Exception {
        service.selectOSPInspectionAll(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectOSPInspectionExterior
    * @brief       : 탭1. 외관검사 조회
    * @remark
    * @Create Date : 2021.03.29
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.29  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectOSPInspectionExterior.do")
    public View selectOSPInspectionExterior(UiMapDto dto, Model model) throws Exception {
        service.selectOSPInspectionExterior(dto);
        return apply(dto, model);
    }


    /**
    * @fn          : selectOSPInspectionMeasure
    * @brief       : 탭2. 측정검사 조회
    * @remark
    * @Create Date : 2021.03.29
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.29  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectOSPInspectionMeasure.do")
    public View selectOSPInspectionMeasure(UiMapDto dto, Model model) throws Exception {
        service.selectOSPInspectionMeasure(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectAQLCheckBasisInfo
    * @brief       : AQL 기준(구분자, LOT 수량, 불량수량, 불량율 , DEFID, SPC LEVEL, DEF LEVEL)
    * @remark
    * @Create Date : 2021.03.29
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.29  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectAQLCheckBasisInfo.do")
    public View selectAQLCheckBasisInfo(UiMapDto dto, Model model) throws Exception {
        service.selectAQLCheckBasisInfo(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectQcGradeAndResultAQLTypeInfo
    * @brief       : AQL관련 정보 보회
    * @remark
    * @Create Date : 2021.04.02
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.02  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectQcGradeAndResultAQLTypeInfo.do")
    public View selectQcGradeAndResultAQLTypeInfo(UiMapDto dto, Model model) throws Exception {
        service.selectQcGradeAndResultAQLTypeInfo(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectAQLActionGradeInfo
    * @brief       : AQL 인터락 qcGrade 조회
    * @remark
    * @Create Date : 2021.04.02
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.02  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectAQLActionGradeInfo.do")
    public View selectAQLActionGradeInfo(UiMapDto dto, Model model) throws Exception {
        service.selectAQLActionGradeInfo(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectNCRCheckBasisInfo
    * @brief       : NCR 기준(구분자, LOT 수량, 뿔량수량, 불량율 , DEFID, SPC LEVEL, DEF LEVEL
    * @remark
    * @Create Date : 2021.04.02
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.02  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectNCRCheckBasisInfo.do")
    public View selectNCRCheckBasisInfo(UiMapDto dto, Model model) throws Exception {
        service.selectNCRCheckBasisInfo(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectMeasureInfo
    * @brief       : 품질규격검사 대상여부
    * @remark
    * @Create Date : 2021.06.29
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.06.29  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectMeasureInfo.do")
    public View selectMeasureInfo(UiMapDto dto, Model model) throws Exception {
        service.selectMeasureInfo(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectIsLockingInfo
    * @brief       : 판정듭급에 따른 조치등급의 Action
    * @remark
    * @Create Date : 2021.07.12
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.07.12  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectIsLockingInfo.do")
    public View selectIsLockingInfo(UiMapDto dto, Model model) throws Exception {
        service.selectIsLockingInfo(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : saveOSPInspectionAccept
    * @brief       : (결과등록)외주입고품 의뢰
    * @Method Name : saveOSPInspectionAccept
    * @remark      : 상세설명
    * @Create Date : 2021.03.26
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.26  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveOSPInspectionAccept.do")
    public View saveOSPInspectionAccept(UiMapDto dto, Model model) throws Exception {
        service.saveOSPInspectionAccept(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : saveQcOspRequestInspRslt
    * @brief       : (결과등록)외주입고품 의뢰
    * @Method Name : saveQcOspRequestInspRslt
    * @remark
    * @Create Date : 2021.03.26
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.26  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveQcOspRequestInspRslt.do")
    public View saveQcOspRequestInspRslt(UiMapDto dto, Model model) throws Exception {
        service.saveQcOspRequestInspRslt(dto);
        return apply(dto, model);
    }
}