package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : BAS04800Service.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS04800Service
* @Company     : Built1
* @Create Date : 04.09
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   04.09  yanghee.kim    최초  생성
*
*/
public interface BAS04800Service {

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
    public void selectGetSelfInspectionList(UiMapDto dto) throws Exception;

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
    public void selectGetSelfInspectionPopup(UiMapDto dto) throws Exception;

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
    public void selectInspectionPointByRelInfo(UiMapDto dto) throws Exception;

    /**
    * @fn          : saveInspectionitemrel
    * @brief       : 품질 기준 정보의 검사 종류, 검사 정의, 검사 통제를 관리한다.
    * @Method Name : saveInspectionitemrel
    * @remark      : 상세설명
    * @Create Date : 04.09
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   04.09  yanghee.kim    최초  생성
    *
    */
    public void saveInspectionitemrel(UiMapDto dto) throws Exception;
    
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
    public void saveBasInspectionPoint(UiMapDto dto) throws Exception;
}