package com.nbdf.cmd.cm.cmmm.service;

import com.nbdf.commons.ui.vo.UiMapDto;


public interface CMMM01100Service {

    /**
    * @fn : selectMsgList
    * @brief : 메시지 전체 조회
    * @Method Name : selectMsgList
    * @remark
    * @Create Date: 2015 2015. 3. 13. 오후 4:05:45
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
    public void selectMsgList(UiMapDto dto) throws Exception;

    /**
    * @fn : selectMsgSearch
    * @brief : 메시지 조건 조회
    * @Method Name : selectMsgSearch
    * @remark
    * @Create Date: 2015 2015. 3. 13. 오후 4:05:45
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
    public void selectMsgSearch(UiMapDto dto) throws Exception;

    /**
    * @fn : insertMsg
    * @brief : 메시지 저장
    * @Method Name : insertMsg
    * @remark
    * @Create Date: 2015 2015. 3. 13. 오후 6:36:16
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
    public void insertMsg(UiMapDto dto) throws Exception;

    /**
    * @fn : updateMsg
    * @brief : 메시지 수정
    * @Method Name : updateMsg
    * @remark
    * @Create Date: 2015 2015. 3. 13. 오후 7:48:22
    * @Author: 메시지 수정
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 13.       진성하     최초  생성
     *
    */
    public void updateMsg(UiMapDto dto) throws Exception;

    /**
    * @fn : deleteMsg
    * @brief : 메시지 삭제
    * @Method Name : deleteMsg
    * @remark
    * @Create Date: 2015 2015. 3. 13. 오후 8:02:54
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
    public void deleteMsg(UiMapDto dto) throws Exception;


/*
    // 파일다운로드 (properties버튼을 클릭하였을 경우 호출됨)
    public void fileDown(UiMapDto dto);
*/
    // 메시지 전체 조회(넥사크로에서 공통으로 사용)
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
