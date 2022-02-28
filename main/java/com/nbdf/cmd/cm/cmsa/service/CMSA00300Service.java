package com.nbdf.cmd.cm.cmsa.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * 지출결의서 입력
 *
 * @ClassName CMSA03000Service.java
 * @Description CMSA03000Service Class
 * @Modification-Information
 *
 * @author Built1 진성하
 * @since 2017. 3. 10.
 * @version 1.0
 * @see <pre>
 *  Copyright (C) 2017 by Built1, All right reserved.
 * </pre>
 */
public interface CMSA00300Service {
    /**
    * @fn : selectEcmLookupValuesList
    * @brief : 공통코드 유형 조회
    * @Method Name : selectEcmLookupValuesList
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
    public void selectEcmLookupValuesList(UiMapDto dto) throws Exception;
    /**
    * @fn : selectEcmLookupValuesVList
    * @brief : 공통코드 유형 VIEW 조회
    * @Method Name : selectEcmLookupValuesVList
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
    public void selectEcmLookupValuesVList(UiMapDto dto) throws Exception;
    /**
    * @fn : saveEcmLookupTypes
    * @brief : 공통코드 저장
    * @Method Name : saveEcmLookupTypes
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
    public void saveEcmLookupTypes(UiMapDto dto) throws Exception;
    /**
    * @fn : deleteEcmLookupTypes
    * @brief : 공통코드 삭제
    * @Method Name : deleteEcmLookupTypes
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
    public void deleteEcmLookupTypes(UiMapDto dto) throws Exception;
    /**
    * @fn : selectEcmLookupTypesList
    * @brief : 공통코드 조회(팝업용)
    * @Method Name : selectEcmLookupTypesList
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
    public void selectEcmLookupTypesList(UiMapDto dto) throws Exception;
    /**
    * @fn : selectEcmLookupTypesVList
    * @brief : 공통코드 조회(팝업용)
    * @Method Name : selectEcmLookupTypesVList
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
    public void selectEcmLookupTypesVList(UiMapDto dto) throws Exception;
    /**
    * @fn : selectEcmLookupValuesList2
    * @brief : 공통코드 조회
    * @Method Name : selectEcmLookupValuesList2
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
    public void selectEcmLookupValuesList2(UiMapDto dto) throws Exception;
    /**
    * @fn : selectEcmLookupValuesVList2
    * @brief : 공통코드 조회
    * @Method Name : selectEcmLookupValuesVList2
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
    public void selectEcmLookupValuesVList2(UiMapDto dto) throws Exception;
    /**
    * @fn : selectYearList
    * @brief : 년도리스트  조회
    * @Method Name : selectYearList
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
    public void selectYearList(UiMapDto dto) throws Exception;
    /**
    * @fn : selectCurrentSystemTime
    * @brief : 현재 일시분초 조회
    * @Method Name : selectCurrentSystemTime
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
    public void selectCurrentSystemTime(UiMapDto dto) throws Exception;
    /**
    * @fn : selectSystemDate
    * @brief : 현재 일시분초 조회
    * @Method Name : selectSystemDate
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
    public void selectSystemDate(UiMapDto dto) throws Exception;
    /**
    * @fn : selectCmdCmCdsList
    * @brief : 포탈 공통코드 조회
    * @Method Name : selectCmdCmCdsList
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
    public void selectCmdCmCdsList(UiMapDto dto) throws Exception;

    /**
    * @fn : selectAcctGubunList
    * @brief : 권한별 회계구분 조회
    * @Method Name : selectAcctGubunList
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
    public void selectAcctGubunList(UiMapDto dto) throws Exception;

    /**
    * @fn : selectAccountGubunInformation
    * @brief : 회계구분 조회
    * @Method Name : selectAccountGubunInformation
    * @remark
    * @Create Date: 2015 2015. 3. 10. 오후 5:00:21
    * @Author: polaroid
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 10.       polaroid     최초  생성
     *
    */
    public void selectAccountGubunInformation(UiMapDto dto) throws Exception;
}
