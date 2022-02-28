package com.nbdf.cmd.cm.cmsy.service;


import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * 지출결의서 입력
 *
 * @ClassName CMSY01500Service.java
 * @Description CMSY01500Service Class
 * @Modification-Information
 *
 * @author Built1 진성하
 * @since 2017. 3. 10.
 * @version 1.0
 * @see <pre>
 *  Copyright (C) 2015 by Built1, All right reserved.
 * </pre>
 */
public interface CMSY01500Service {
    /**
    * @fn : selectCmdUsersList
    * @brief : 사용자리스트  조회
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
    * @fn : selectCmdUsersListExceptSelected
    * @brief : 사용자리스트  조회
    * @Method Name : selectCmdUsersListExceptSelected
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
    public void selectCmdUsersListExceptSelected(UiMapDto dto) throws Exception;
    /**
    * @fn : selectCmdUsersList
    * @brief : 권한리스트  조회
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
    public void selectCmdJobAuthMngList(UiMapDto dto) throws Exception;
    /**
    * @fn : selectCmdUserAuthMpngList
    * @brief : 권한사용자리스트  조회
    * @Method Name : selectCmdUserAuthMpngList
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
    public void selectCmdUserAuthMpngList(UiMapDto dto) throws Exception;
    /**
    * @fn : saveCmdUserAuthMpng
    * @brief : 권한사용자저장
    * @Method Name : saveCmdUserAuthMpng
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
    public void saveCmdUserAuthMpng(UiMapDto dto) throws Exception;
    /**
    * @fn : deleteCmdUserAuthMpng
    * @brief : 권한사용자 삭제
    * @Method Name : deleteCmdUserAuthMpng
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
    public void deleteCmdUserAuthMpng(UiMapDto dto) throws Exception;
    /**
    * @fn : saveCmdUserAuthMpngCopy
    * @brief : 권한사용자 복사
    * @Method Name : saveCmdUserAuthMpngCopy
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
    public void saveCmdUserAuthMpngCopy(UiMapDto dto) throws Exception;

 
}
