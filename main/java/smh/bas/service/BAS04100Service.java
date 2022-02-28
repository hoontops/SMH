package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : BAS04100Service.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS04100Service
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
public interface BAS04100Service {

    /**
    * @fn          : selectInspectionclassList
    * @brief       : 검사정의 조회
    * @Method Name : selectInspectionclassList
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
    public void selectInspectionclassList(UiMapDto dto) throws Exception;
    
    /**
    * @fn          : selectProcesssegmentclassLList
    * @brief       : 검사통제 - 대공정 조회
    * @Method Name : selectProcesssegmentclassLList
    * @remark      : 상세설명
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
    public void selectProcesssegmentclassLList(UiMapDto dto) throws Exception;
    
    /**
    * @fn          : selectProcesssegmentclassMList
    * @brief       : 검사통제 - 중공정 조회
    * @Method Name : selectProcesssegmentclassMList
    * @remark      : 상세설명
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
    public void selectProcesssegmentclassMList(UiMapDto dto) throws Exception;
    
    /**
    * @fn          : selectProcesssegmentclassList
    * @brief       : 검사통제 - 공정 조회
    * @Method Name : selectProcesssegmentclassList
    * @remark      : 상세설명
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
    public void selectProcesssegmentclassList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectProcessInspectionclassList
    * @brief       : 검사통제 - 검사종류 조회
    * @Method Name : selectProcessInspectionclassList
    * @remark      : 상세설명
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
    public void selectProcessInspectionclassList(UiMapDto dto) throws Exception;
    

    /**
    * @fn          : saveInspectionclass
    * @brief       : 검사정의 수정
    * @Method Name : saveInspectionclass
    * @remark      : 상세설명
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
    public void saveInspectionclass(UiMapDto dto) throws Exception;
    

    /**
    * @fn          : saveInspectionsegmentrel
    * @brief       : 검사 공정 - 통제 정보 등록/수정 Call
    * @Method Name : saveInspectionsegmentrel
    * @remark      : 검사 공정 - 통제 정보 저장
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
    public void saveInspectionsegmentrel(UiMapDto dto) throws Exception;
}