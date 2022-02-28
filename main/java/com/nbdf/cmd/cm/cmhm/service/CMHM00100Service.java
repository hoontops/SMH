package com.nbdf.cmd.cm.cmhm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: CMHM00100Service.java
* @Project name: IFC MES시스템 구축
* @Type name: CMHM00100Service
* @Company: Built1
* @Create Date: 2015. 4. 29. 오후 8:31:15
* @Author: JIn Sung Ha
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 4. 29.        JIn Sung Ha     최초  생성
 *
*/
public interface CMHM00100Service {


    /**
    * @fn : selectManualMenuList
    * @brief : 도움말 조회
    * @Method Name : selectManualMenuList
    * @remark
    * @Create Date: 2015 2015. 3. 19. 오후 9:43:05
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 19.        진성하     최초  생성
     *
    */
    public void selectManualMenuList(UiMapDto dto) throws Exception;


    /**
    * @fn : selectManualMenuDtlList
    * @brief : 도움말 상세 조회
    * @Method Name : selectManualMenuDtlList
    * @Create Date: 2015. 4. 28. 오후 4:04:09
    * @Author: JIn Sung Ha
    * @param: UiMapDto dto
    * @return: void
    * @throws : Exception
    */
    public void selectManualMenuDtlList(UiMapDto dto) throws Exception;

}    