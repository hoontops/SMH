package com.nbdf.cmd.cm.cmlm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

import java.util.Map;

public interface CMLM01100Service {

    /**
    * @fn : selectLogList
    * @brief : 로그 조회
    * @Method Name : selectLogList
    * @remark
    * @Create Date: 2015. 3. 16. 오후 3:17:18
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 16.        진성하     최초  생성
     *   2015.10. 02.    진성하     업무 메뉴별 로그 등록 추가
     *
    */
    public void selectLogList(UiMapDto dto) throws Exception;

    /**
    * @fn : insertLog
    * @brief : 로그 저장
    * @Method Name : insertLog
    * @remark
    * @Create Date: 2015 2015. 3. 16. 오후 3:17:27
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 16.        진성하     최초  생성
     *
    */
    public void insertLog(Map map) throws Exception;

    public void insertJobMenuLogs(UiMapDto dto) throws Exception;

    public void selectJobMenuLogsCount(UiMapDto dto) throws Exception;

    public void selectJobMenuLogsList(UiMapDto dto) throws Exception;

    public void selectSmsLogList(UiMapDto dto) throws Exception;

    public void selectSmsSumList(UiMapDto dto) throws Exception;

    public void selectEmailLogList(UiMapDto dto) throws Exception;

    public void selectEmailSumList(UiMapDto dto) throws Exception;


}
