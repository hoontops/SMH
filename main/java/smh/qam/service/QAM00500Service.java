package smh.qam.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : QAM00500Service.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM00500Service
* @Company     : Built1
* @Create Date : 2021.03.22
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.22  yanghee.kim    최초  생성
*
*/
public interface QAM00500Service {

    /**
    * @fn          : selectQcOspRequestInspList
    * @brief       : 수입검사 의뢰 조회
    * @remark
    * @Create Date : 2021.03.22
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.22  yanghee.kim    최초  생성
    *
    */
	public void selectQcOspRequestInspList(UiMapDto dto) throws Exception;
   
    /**
    * @fn          : saveQcOspRequestInsp
    * @brief       : 수입검사 의뢰 - 의뢰
    * @Method Name : saveQcOspRequestInsp
    * @remark      : 상세설명
    * @Create Date : 2021.03.22
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.22  yanghee.kim    최초  생성
    *
    */
    public void saveQcOspRequestInsp(UiMapDto dto) throws Exception;
    
    /**
    * @fn          : saveQcOspRequestInspCancel
    * @brief       : 수입검사 의뢰 - 의뢰취소
    * @Method Name : saveQcOspRequestInspCancel
    * @remark      : 상세설명
    * @Create Date : 2021.03.23
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.23  yanghee.kim    최초  생성
    *
    */
    public void saveQcOspRequestInspCancel(UiMapDto dto) throws Exception;    
}