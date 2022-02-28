package com.nbdf.cmd.cm.cmsl.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * 다양한 SQL(Dynamic SQL) 관련
 *
 * @ClassName CMSL01000Service.java
 * @Description CMSL01000Service Class
 * @Modification-Information
 *
 * @author 통합경영관리시스템 LeeHeungKyu
 * @since 2015. 5. 02.
 * @version 1.0
 * @see <pre>
 *  Copyright (C) 2015 by Built1, All right reserved.
 * </pre>
 */
public interface CMSL01000Service {

    /**
     * @fn : selectSqlListCount
     * @brief : 다양한SQL 목록 - 검색 카운트
     * @Method Name : selectSqlListCount
     * @remark
     * @Create Date: 2015. 5. 02
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일            수정자    수정내용
      *   ------------  ------  ----------
      *   2015. 5. 02.   진성하     최초  생성
      *
     */
     public void selectSqlListCount(UiMapDto dto) throws Exception;

    /**
     * @fn : selectSqlList
     * @brief : 다양한SQL 목록 - 검색 리스트
     *             1. 초기 또는 [조회] 버튼 클릭시 호출
     * @Method Name : selectSqlList
     * @remark
     * @Create Date: 2015. 5. 02
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일            수정자    수정내용
      *   ------------  ------  ----------
      *   2015. 5. 02.   진성하     최초  생성
      *
     */
    public void selectSqlList(UiMapDto dto) throws Exception;

    /**
     * @fn : selectSqlParamList
     * @brief : 다양한SQL상세 - 파라미터 조회 리스트
     *             1. 다양한SQL상세 클릭시 호출
     * @Method Name : selectSqlParamList
     * @remark
     * @Create Date: 2015. 5. 06
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일            수정자    수정내용
      *   ------------  ------  ----------
      *   2015. 5. 06.   진성하     최초  생성
      *
     */
    public void selectSqlParamList(UiMapDto dto) throws Exception;

    /**
     * @fn : selectSqlAuthList
     * @brief : 다양한SQL상세 - SQL 업무권한 조회 리스트
     *             1. 다양한SQL상세 클릭시 호출
     * @Method Name : selectSqlAuthList
     * @remark
     * @Create Date: 2015. 11. 19
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일            수정자    수정내용
      *   ------------  ------  ----------
      *   2015. 11. 19.   진성하     최초  생성
      *
     */
    public void selectSqlAuthList(UiMapDto dto) throws Exception;

    /**
     * @fn : selectSqlColmList
     * @brief : 다양한SQL상세 - SQL 컬럼설정 조회 리스트
     *             1. 다양한SQL(상세 클릭,수정화면,컬럼 설정 팝업)에서 호출
     * @Method Name : selectSqlColmList
     * @remark
     * @Create Date: 2015. 11. 26
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일            수정자    수정내용
      *   ------------  ------  ----------
      *   2015. 11. 26.   진성하     최초  생성
      *
     */
    public void selectSqlColmList(UiMapDto dto) throws Exception;

    /**
     * @fn : selectDynamicSqlList
     * @brief :Dynamic SQL 조회 리스트
     *             1. 다양한SQL파라미터 팝업, 다양한조회, 등록, 수정 화면에서 호출
     * @Method Name : selectDynamicSqlList
     * @remark
     * @Create Date: 2015. 5. 26
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일            수정자    수정내용
      *   ------------  ------  ----------
      *   2015. 5. 26.   진성하     최초  생성
      *
     */
    public void selectDynamicSqlList(UiMapDto dto) throws Exception;

    /**
     * @fn : selectDynamicSqlListNoPage
     * @brief :Dynamic SQL 조회 리스트(엑셀 NoPage용)
     *             1. 다양한SQL파라미터 팝업, 다양한조회, 등록, 수정 화면에서 호출
     * @Method Name : selectDynamicSqlListNoPage
     * @remark
     * @Create Date: 2015. 7. 27
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일            수정자    수정내용
      *   ------------  ------  ----------
      *   2015. 7. 27.   진성하     최초  생성
      *
     */
    public void selectDynamicSqlListNoPage(UiMapDto dto) throws Exception;

    /**
     * @fn : insertSqlParam
     * @brief :Dynamic SQL 등록(SQL+파라미터)
     *             1. Dynamic SQL 등록 화면에서 호출
     * @Method Name : insertSqlParam
     * @remark
     * @Create Date: 2015. 5. 28
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일            수정자    수정내용
      *   ------------  ------  ----------
      *   2015. 5. 28.   진성하     최초  생성
      *
     */
    public void insertSqlParam(UiMapDto dto) throws Exception;

    /**
     * @fn : updateSqlParam
     * @brief :Dynamic SQL 수정(SQL+파라미터)
     *             1. Dynamic SQL 수정 화면에서 호출
     * @Method Name : updateSqlParam
     * @remark
     * @Create Date: 2015. 6. 01
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일            수정자    수정내용
      *   ------------  ------  ----------
      *   2015. 6. 01.   진성하     최초  생성
      *
     */
    public void updateSqlParam(UiMapDto dto) throws Exception;


    /**
     * @fn : deleteSqlParam
     * @brief :Dynamic SQL삭제
     *             1. Dynamic SQL 상세 화면에서 호출
     * @Method Name : deleteSqlParam
     * @remark
     * @Create Date: 2015. 5. 30
     * @Author: 진성하
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일            수정자    수정내용
      *   ------------  ------  ----------
      *   2015. 5. 30.   진성하     최초  생성
      *
     */
    public void deleteSqlParam(UiMapDto dto) throws Exception;

    /**
    * @fn : selectDefVal
    * @brief : SEQ_ID 로 DEF_VAL 가져오기
    * @Method Name : selectDefVal
    * @remark
    * @Create Date: 2016 2016. 3. 25. 오후 12:40:41
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2016. 3. 25    고 건     최초 생성
     *
    */
    public void selectDefVal(UiMapDto dto) throws Exception;
}
