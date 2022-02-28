package com.nbdf.cmd.cm.cmsy.service;


import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * 메시지
 *
 * @ClassName CMSY03400Service.java
 * @Description CMSY03400Service Class
 * @Modification-Information
 *
 * @author Built1 진성하
 * @since 2015. 3. 10.
 * @version 1.0
 * @see <pre>
 *  Copyright (C) 2015 by Built1, All right reserved.
 * </pre>
 */
public interface CMSY03400Service {
    /**
    * @fn : selectCmdUsersList
    * @brief : 메시지리스트  조회
    * @Method Name : selectCmdUsersList
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
    public void selectCmdUsersList(UiMapDto dto) throws Exception;

    /**
    * @fn : saveCmdUsers
    * @brief : 메시지저장
    * @Method Name : saveCmdUsers
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
    public void saveCmdUsers(UiMapDto dto) throws Exception;

    public void updateCmdUsersPwdInit(UiMapDto dto) throws Exception;
    public void updateCmdUsersApproval(UiMapDto dto) throws Exception;

}
