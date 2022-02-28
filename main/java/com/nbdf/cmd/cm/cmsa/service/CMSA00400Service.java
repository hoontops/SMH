package com.nbdf.cmd.cm.cmsa.service;

import java.util.List;
import java.util.Map;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * 지출결의서 입력
 *
 * @ClassName CMSA03000Service.java
 * @Description CMSA03000Service Class
 * @Modification-Information
 *
 * @author SICC 진성하
 * @since 2015. 3. 10.
 * @version 1.0
 * @see <pre>
 *  Copyright (C) 2015 by SICC, All right reserved.
 * </pre>
 */
public interface CMSA00400Service {
    /**
    * @fn : selectFndApplicationVlList
    * @brief : 동시작업 업무 조회
    * @Method Name : selectFndApplicationVlList
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
    public void selectFndApplicationVlList(UiMapDto dto) throws Exception;
    /**
    * @fn : selectFndConcurrentProgramsVlList
    * @brief : 동시작업 프로그램 조회
    * @Method Name : selectFndConcurrentProgramsVlList
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
    public void selectFndApplicationVlListForPrint(UiMapDto dto) throws Exception;
    /**
    * @fn : selectFndConcurrentProgramsVlList
    * @brief : 동시작업 프로그램 조회
    * @Method Name : selectFndConcurrentProgramsVlList
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
    public void selectFndConcurrentProgramsVlList(UiMapDto dto) throws Exception;

    /**
    * @fn : selectUserQryList
    * @brief : 사용자쿼리 조회
    * @Method Name : selectUserQryList
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
    public void selectUserQryList(UiMapDto dto) throws Exception;
    
    public List<Map<String, Object>> selectUserQryList(Map<String, Object> param) throws Exception;


    public void executeShell(UiMapDto dto) throws Exception;
    public void executeThreadShell(UiMapDto dto) throws Exception;

    public void ozExportThread(UiMapDto dto) throws Exception;
    public void ozExport(UiMapDto dto) throws Exception;
    public void ozExportReduce(UiMapDto dto) throws Exception;

}
