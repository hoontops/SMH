package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : BAS04000Service.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS04000Service
* @Company     : Built1
* @Create Date : 2021.03.09
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.09  yanghee.kim    최초  생성
*
*/
public interface BAS04000Service {

    /**
    * @fn          : selectEquipmentdefectcodeList
    * @brief       : 설비 불량코드 연계정보 조회
    * @Method Name : selectEquipmentdefectcodeList
    * @remark
    * @Create Date : 2021.03.09
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.09  yanghee.kim    최초  생성
    *
    */
    public void selectEquipmentdefectcodeList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectDefectItemList
    * @brief       : 불량항목 리스트 조회
    * @remark
    * @Create Date : 2021.03.19
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.19  yanghee.kim    최초  생성
    *
    */
    public void selectDefectItemList(UiMapDto dto) throws Exception;
    
    /**
    * @fn          : saveEquipmentdefectcode
    * @brief       : 설비 불량코드 연계정보 등록/수정/삭제 Call
    * @Method Name : saveEquipmentdefectcode
    * @remark      : 상세설명
    * @Create Date : 2021.03.09
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.09  yanghee.kim    최초  생성
    *
    */
    public void saveEquipmentdefectcode(UiMapDto dto) throws Exception;
    
    /**
    * @fn          : saveDefectItem
    * @brief       : 불량항목 리스트  등록/수정 Call
    * @Method Name : saveDefectItem
    * @remark
    * @Create Date : 2021.03.19
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.19  yanghee.kim    최초  생성
    *
    */
    public void saveDefectItem(UiMapDto dto) throws Exception;    
}