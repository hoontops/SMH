package com.nbdf.cmd.cm.cmsa.service;


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
public interface CMSA00100Service {
    /**
    * @fn : selectCmdPopupList
    * @brief : 팝업리스트  조회
    * @Method Name : selectCmdPopupList
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
    public void selectCmdPopupList(UiMapDto dto) throws Exception;
    /**
    * @fn : saveCmdPopup
    * @brief : 팝업저장
    * @Method Name : saveCmdPopup
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
    public void saveCmdPopup(UiMapDto dto) throws Exception;
    /**
    * @fn : deleteCmdPopup
    * @brief : 팝업 삭제
    * @Method Name : deleteCmdPopup
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
    public void deleteCmdPopup(UiMapDto dto) throws Exception;
    /**
    * @fn : selectCmdPopupPlsList
    * @brief : 조회 컬럼 조회
    * @Method Name : selectCmdPopupPlsList
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
    public void selectCmdPopupPlsList(UiMapDto dto) throws Exception;
    /**
    * @fn : selectCmdPopupSrhCndClumList
    * @brief : 조회조건 컬럼 조회
    * @Method Name : selectCmdPopupSrhCndClumList
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
    public void selectCmdPopupSrhCndClumList(UiMapDto dto) throws Exception;

    /**
    * @fn : saveFavoriteActive
    * @brief : 활동코드 [즐겨찾기] 저장
    * @Method Name : saveFavoriteActive
    * @remark
    * @Create Date: 2016 2016. 4. 28. 오후 3:41:07
    * @Author: 심병석
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2016. 4. 28.        심병석     최초  생성
     *
    */
    public void saveFavoriteActive(UiMapDto dto) throws Exception;

    public void selectDsCommomPoup(UiMapDto dto) throws Exception;
}
