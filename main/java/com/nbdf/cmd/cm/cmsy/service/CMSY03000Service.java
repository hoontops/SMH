package com.nbdf.cmd.cm.cmsy.service;


import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * 지출결의서 입력
 *
 * @ClassName CMSA00100Service.java
 * @Description CMSA00100Service Class
 * @Modification-Information
 *
 * @author Built1 진성하
 * @since 2015. 3. 10.
 * @version 1.0
 * @see <pre>
 *  Copyright (C) 2015 by Built1, All right reserved.
 * </pre>
 */
public interface CMSY03000Service {
    /**
    * @fn : selectCmdDeptsList
    * @brief : 사용자리스트  조회
    * @Method Name : selectCmdDeptsList
    * @remark
    * @Create Date: 2015 2015. 3. 10. 오후 5:00:21
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 10.       진성하     최초  생성
     *
    */
    public void selectCmdDeptsList(UiMapDto dto) throws Exception;

    /**
    * @fn : saveCmdDepts
    * @brief : 사용자저장
    * @Method Name : saveCmdDepts
    * @remark
    * @Create Date: 2015 2015. 3. 10. 오후 5:00:21
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 10.       진성하     최초  생성
     *
    */
    public void saveCmdDepts(UiMapDto dto) throws Exception;


 
}
