package com.nbdf.cmd.cm.cmsy.service;


import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * 사용자별 Site 권한
 *
 * @ClassName CMSY03300Service.java
 * @Description CMSY03300Service Class
 * @Modification-Information
 *
 * @author Built1 진성하
 * @since 2015. 3. 10.
 * @version 1.0
 * @see <pre>
 *  Copyright (C) 2015 by Built1, All right reserved.
 * </pre>
 */
public interface CMSY03300Service {
    /**
    * @fn : selectCmdPlantuserList
    * @brief : 사용자별 Site 권한리스트  조회
    * @Method Name : selectCmdPlantuserList
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
    public void selectCmdPlantuserList(UiMapDto dto) throws Exception;

    /**
    * @fn : saveCmdPlantuser
    * @brief : 사용자별 Site 권한저장
    * @Method Name : saveCmdPlantuser
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
    public void saveCmdPlantuser(UiMapDto dto) throws Exception;


}
