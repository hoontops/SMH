package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: BAS00100Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00100Service
* @Company: Built1
* @Create Date: 2021.2.1
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 1.   진성하   최초  생성
 *
 *
*/
public interface BAS00100Service {

    /**
    * @fn : selectBasEnterpriseList
    * @brief : 회사 정보 조회
    * @Method Name : selectBasEnterpriseList
    * @remark
    * @Create Date: 2021.2.1
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.2.1.       진성하     최초  생성
     *
    */
    public void selectBasEnterpriseList(UiMapDto dto) throws Exception;

    /**
    * @fn : saveBasEnterprise
    * @brief : 회사 정보 저장
    * @Method Name : saveBasEnterprise
    * @remark
    * @Create Date: 2021.2.1
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *  2021.2.1.     진성하     최초  생성
     *
    */
    public void saveBasEnterprise(UiMapDto dto) throws Exception;

 
 }