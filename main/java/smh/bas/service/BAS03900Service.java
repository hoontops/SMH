package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : BAS03900Service.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS03900Service
* @Company     : Built1
* @Create Date : 2021.03.04
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.04  yanghee.kim    최초  생성
*
*/
public interface BAS03900Service {

    /**
    * @fn          : selectDefectcoderelList
    * @brief       : 불량코드 조회
    * @Method Name : selectDefectcoderelList
    * @remark
    * @Create Date : 2021.03.04
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.04  yanghee.kim    최초  생성
    *
    */
    public void selectDefectcoderelList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectDefectcodeList
    * @brief       : 불량유형 조회
    * @Method Name : selectDefectcodeList
    * @remark
    * @Create Date : 2021.03.05
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.05  yanghee.kim    최초  생성
    *
    */
    public void selectDefectcodeList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectQcsegmentList
    * @brief       : 품질공정 조회
    * @Method Name : selectQcsegmentList
    * @remark
    * @Create Date : 2021.03.08
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.08  yanghee.kim    최초  생성
    *
    */
    public void selectQcsegmentList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectQcsegmentrelList
    * @brief       : 중공정 조회
    * @Method Name : selectQcsegmentrelList
    * @remark
    * @Create Date : 2021.03.08
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.08  yanghee.kim    최초  생성
    *
    */
    public void selectQcsegmentrelList(UiMapDto dto) throws Exception;

    /**
    * @fn          : saveDefectcoderel
    * @brief       : 불량코드  등록/수정 Call
    * @Method Name : saveDefectcoderel
    * @remark      : 상세설명
    * @Create Date : 2021.03.05
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.05  yanghee.kim    최초  생성
    *
    */
    public void saveDefectcoderel(UiMapDto dto) throws Exception;

    /**
    * @fn          : saveDefectcode
    * @brief       : 불량유형  등록/수정 Call
    * @Method Name : saveDefectcode
    * @remark      : 상세설명
    * @Create Date : 2021.03.08
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.08  yanghee.kim    최초  생성
    *
    */
    public void saveDefectcode(UiMapDto dto) throws Exception;

    /**
    * @fn          : saveQcsegment
    * @brief       : 품질공정 등록/수정 Call
    * @Method Name : saveQcsegment
    * @remark      : 상세설명
    * @Create Date : 2021.03.08
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.08  yanghee.kim    최초  생성
    *
    */
    public void saveQcsegment(UiMapDto dto) throws Exception;

    /**
    * @fn          : saveQcsegmentrel
    * @brief       : 중공정 등록/수정 Call
    * @Method Name : saveQcsegmentrel
    * @remark
    * @Create Date : 2021.03.08
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.08  yanghee.kim    최초  생성
    *
    */
    public void saveQcsegmentrel(UiMapDto dto) throws Exception;
}