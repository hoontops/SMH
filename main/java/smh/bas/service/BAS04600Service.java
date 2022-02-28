package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : BAS04600Service.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS04600Service
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
public interface BAS04600Service {

    /**
    * @fn          : selectShipmentInspectionList
    * @brief       : 출하 검사기준 정보 조회
    * @Method Name : selectShipmentInspectionList
    * @remark
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
    public void selectShipmentInspectionList(UiMapDto dto) throws Exception;
    
    /**
    * @fn          : saveShipmentInspection
    * @brief       : 출하 검사기준 정보 등록/수정/삭제 Call
    * @Method Name : saveShipmentInspection
    * @remark      : 상세설명
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
    public void saveShipmentInspection(UiMapDto dto) throws Exception;
}