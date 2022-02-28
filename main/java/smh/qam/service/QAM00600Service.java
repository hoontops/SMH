package smh.qam.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : QAM00600Service.java
* @Package     : smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM00600Service
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
public interface QAM00600Service {

    /**
    * @fn          : selectQcOspRequestInspRsltList
    * @brief       : 의뢰)외주입고품 조회
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
    public void selectQcOspRequestInspRsltList(UiMapDto dto) throws Exception;

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
    public void selectComboItemLIst(UiMapDto dto) throws Exception;

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
    public void selectLotInfoByLotIDOSP(UiMapDto dto) throws Exception;

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
    public void selectOSPInspectionAll(UiMapDto dto) throws Exception;

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
    public void selectOSPInspectionExterior(UiMapDto dto) throws Exception;

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
    public void selectOSPInspectionMeasure(UiMapDto dto) throws Exception;

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
    public void selectAQLCheckBasisInfo(UiMapDto dto) throws Exception;

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
    public void selectAQLActionGradeInfo(UiMapDto dto) throws Exception;

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
    public void selectQcGradeAndResultAQLTypeInfo(UiMapDto dto) throws Exception;

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
    public void selectMeasureInfo(UiMapDto dto) throws Exception;

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
    public void selectNCRCheckBasisInfo(UiMapDto dto) throws Exception;

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
    public void selectIsLockingInfo(UiMapDto dto) throws Exception;
    
    /**
    * @fn          : saveOSPInspectionAccept
    * @brief       : (결과등록)외주입고품 입고
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
    public void saveOSPInspectionAccept(UiMapDto dto) throws Exception;
    
    /**
    * @fn          : saveQcOspRequestInspRslt
    * @brief       : (결과등록)외주입고품 의뢰
    * @Method Name : saveQcOspRequestInspRslt
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
    public void saveQcOspRequestInspRslt(UiMapDto dto) throws Exception;
}