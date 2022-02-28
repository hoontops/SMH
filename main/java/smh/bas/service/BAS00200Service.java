package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: BAS00200Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00200Service
* @Company: Built1
* @Create Date: 2021.2.16
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 16   sungmin.choe   최초  생성
 *
 *
*/
public interface BAS00200Service {

    /**
    * @fn : selectBasSiteList
    * @brief : 회사 정보 조회
    * @Method Name : selectBasSiteList
    * @remark
    * @Create Date: 2021.2.16
    * @Author: sungmin.choe
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.2.16.       sungmin.choe     최초  생성
     *
    */
    public void selectBasSiteList(UiMapDto dto) throws Exception;

    /**
    * @fn : saveBasSite
    * @brief : 회사 정보 저장
    * @Method Name : saveBasSite
    * @remark
    * @Create Date: 2021.2.16
    * @Author: sungmin.choe
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *  2021.2.16.     sungmin.choe     최초  생성
     *
    */
    public void saveBasSite(UiMapDto dto) throws Exception;

 
 }