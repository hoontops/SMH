package com.nbdf.cmd.cm.cmsy.service;


import java.util.Map;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * 메시지
 *
 * @ClassName CMSY03100Service.java
 * @Description CMSY03100Service Class
 * @Modification-Information
 *
 * @author Built1 진성하
 * @since 2015. 3. 10.
 * @version 1.0
 * @see <pre>
 *  Copyright (C) 2015 by Built1, All right reserved.
 * </pre>
 */
public interface CMSY03200Service {
    /**
    * @fn : selectCmdMessageList
    * @brief : 메시지리스트  조회
    * @Method Name : selectCmdMessageList
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
    public void selectCmdMessageList(UiMapDto dto) throws Exception;

    /**
    * @fn : saveCmdMessage
    * @brief : 메시지저장
    * @Method Name : saveCmdMessage
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
    public void saveCmdMessage(UiMapDto dto) throws Exception;


    /**
    * @fn : selectCmMsg
    * @brief : (넥사크로 공통모듈에서 사용)메시지 전체 조회
    * @Method Name : selectCmMsg
    * @remark
    * @Create Date: 2015 2015. 3. 13. 오후 4:05:00
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 13.       진성하     최초  생성
     *
    */
    public void selectCmMsg(UiMapDto dto) throws Exception;
}
