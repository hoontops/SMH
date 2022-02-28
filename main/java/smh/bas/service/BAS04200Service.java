package smh.bas.service;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : BAS04200Service.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS04200Service
* @Company     : Built1
* @Create Date : 2021.03.13
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.13  yanghee.kim    최초  생성
*
*/
public interface BAS04200Service {
 
    /**
    * @fn          : selectInspitemList
    * @brief       : 검사항목목록 조회
    * @Method Name : selectInspitemList
    * @remark
    * @Create Date : 2021.03.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.13  yanghee.kim    최초  생성
    *
    */
    public void selectInspitemList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectLookInspmethodList
    * @brief       : 검사방법목록 조회
    * @Method Name : selectLookInspmethodList
    * @remark
    * @Create Date : 2021.03.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.13  yanghee.kim    최초  생성
    *
    */
    public void selectLookInspmethodList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectInspitemmethodTreeList
    * @brief       : 감사방법별 검사항목 등록 - 트리 조회
    * @Method Name : selectInspitemmethodTreeList
    * @remark
    * @Create Date : 2021.03.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.13  yanghee.kim    최초  생성
    *
    */
    public void selectInspitemmethodTreeList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectInspmethodList
    * @brief       : 감사방법별 검사항목 등록 - 검사방법 조회
    * @Method Name : selectInspmethodList
    * @remark
    * @Create Date : 2021.03.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.13  yanghee.kim    최초  생성
    *
    */
    public void selectInspmethodList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectInspmethoditemList
    * @brief       : 감사방법별 검사항목 등록 - 검사항목 조회
    * @Method Name : selectInspmethoditemList
    * @remark
    * @Create Date : 2021.03.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.13  yanghee.kim    최초  생성
    *
    */
    public void selectInspmethoditemList(UiMapDto dto) throws Exception;

    /**
    * @fn          : saveInspitem
    * @brief       : 검사항목목록 등록/수정 Call
    * @Method Name : saveInspitem
    * @remark      : 상세설명
    * @Create Date : 2021.03.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.13  yanghee.kim    최초  생성
    *
    */
    public void saveInspitem(UiMapDto dto) throws Exception;

    /**
    * @fn          : saveLookInspmethod
    * @brief       : 검사방법목록 등록/수정 Call
    * @Method Name : saveLookInspmethod
    * @remark      : 상세설명
    * @Create Date : 2021.03.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.13  yanghee.kim    최초  생성
    *
    */
    public void saveLookInspmethod(UiMapDto dto) throws Exception;

    /**
    * @fn          : saveInspmethod
    * @brief       : 감사방법별 검사항목 등록 - 검사방법 등록/수정 Call
    * @Method Name : saveInspmethod
    * @remark
    * @Create Date : 2021.03.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.13  yanghee.kim    최초  생성
    *
    */
    public void saveInspmethod(UiMapDto dto) throws Exception;

    /**
    * @fn          : saveInspmethoditem
    * @brief       : 감사방법별 검사항목 등록 - 검사항목 등록/수정 Call
    * @Method Name : saveInspmethoditem
    * @remark
    * @Create Date : 2021.03.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.13  yanghee.kim    최초  생성
    *
    */
    public void saveInspmethoditem(UiMapDto dto) throws Exception;
}