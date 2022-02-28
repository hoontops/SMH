package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : BAS04700Service.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS04700Service
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
public interface BAS04700Service {

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
    public void selectQcOperationInspectionItemList(UiMapDto dto) throws Exception;

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
    public void selectQcOperationInspectionList(UiMapDto dto) throws Exception;
    
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
    public void selectQcOSPInspectionList(UiMapDto dto) throws Exception;

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
    public void selectSpecDetailPopUp(UiMapDto dto) throws Exception;

    /**
    * @fn          : saveInspectionitemrel
    * @brief       : 품질 기준 정보의 검사 종류, 검사 정의, 검사 통제를 관리한다.
    * @Method Name : saveInspectionitemrel
    * @remark      : 상세설명
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
    public void saveInspectionitemrel(UiMapDto dto) throws Exception;
}