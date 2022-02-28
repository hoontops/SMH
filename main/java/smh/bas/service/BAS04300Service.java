package smh.bas.service;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : BAS04300Service.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS04300Service
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
public interface BAS04300Service {

    /**
    * @fn          : selectInspClassIdList
    * @brief       : 검사종류 조회(조회조건)
    * @Method Name : selectInspClassIdList
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
    public void selectInspClassIdList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectInspDefinitionList
    * @brief       : 검사방법 조회
    * @Method Name : selectInspDefinitionList
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
    public void selectInspDefinitionList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectInspMethodItemList
    * @brief       : 검사항목 조회
    * @Method Name : selectInspMethodItemList
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
    public void selectInspMethodItemList(UiMapDto dto) throws Exception;

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
    public void selectImportInspTreeList(UiMapDto dto) throws Exception;
    
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
    public void selectInspClassMatList(UiMapDto dto) throws Exception;

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
    public void selectReliabilityInspTreeList(UiMapDto dto) throws Exception;
    
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
    public void selectReliabilityClassList(UiMapDto dto) throws Exception;
    
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
    public void selectReliabilityItemList(UiMapDto dto) throws Exception;

    /**
    * @fn          : saveInspDefinition
    * @brief       : 검사방법목록 등록/수정 Call
    * @Method Name : saveInspDefinition
    * @remark      : 상세설명
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
    public void saveInspDefinition(UiMapDto dto) throws Exception;
    
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
    public void saveImportInsp(UiMapDto dto) throws Exception;
        
    /**
    * @fn          : saveReliabilityInsp
    * @brief       : 신뢰성 검증 등록/수정 Call
    * @Method Name : saveReliabilityInsp
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
    public void saveReliabilityInsp(UiMapDto dto) throws Exception;
}