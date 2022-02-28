package com.nbdf.cmd.cm.cmcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: CMD00100Service.java
* @Package: com.nbdf.cmd.cm.cmcm.service
* @Project name: IFC MES시스템 구축
* @Type name: CMD00100Service
* @Company: Built1
* @Create Date: 2021. 3. 1. 오전 11:35:30
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 1.   진성하   최초  생성
 *
 *
*/
public interface CMD00100Service {

    /**
    * @fn : selectBasIdclassList
    * @brief : ID 패턴 그룹 조회
    * @Method Name : selectBasIdclassList
    * @remark
    * @Create Date: 2021. 3. 6. 오후 3:33:03
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 6.     진성하     최초  생성
     *
    */
    public void selectBasIdclassList(UiMapDto dto) throws Exception;

    /**
    * @fn : saveBasIdclass
    * @brief : ID 패턴 그룹 저장
    * @Method Name : saveBasIdclass
    * @remark
    * @Create Date: 2021. 3. 6. 오후 3:33:03
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 6.     진성하     최초  생성
     *
    */
    public void saveBasIdclass(UiMapDto dto) throws Exception;

    /**
    * @fn : saveBasIddefinition
    * @brief : ID 정의  저장
    * @Method Name : saveBasIddefinition
    * @remark
    * @Create Date: 2021. 3. 6. 오후 3:33:03
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 6.     진성하     최초  생성
     *
    */
    public void saveBasIddefinition(UiMapDto dto) throws Exception;

    /**
    * @fn : selectBasIdclassserialList
    * @brief : ID패턴 및 Prefix별 일련번호 정보 조회
    * @Method Name : selectBasIdclassserialList
    * @remark
    * @Create Date: 2021. 3. 6. 오후 3:33:03
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 6.     진성하     최초  생성
     *
    */
    public void selectBasIdclassserialList(UiMapDto dto) throws Exception;


    
 }