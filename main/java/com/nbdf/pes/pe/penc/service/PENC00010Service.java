package com.nbdf.pes.pe.penc.service;

import com.nbdf.commons.ui.vo.UiMapDto;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
* @file: PENC00010Service.java
* @Package: com.nbdf.pes.pe.penc.service
* @Project name: IFC MES시스템 구축
* @Type name: PENC00010Service
* @Company: Built1
* @Create Date: 2015 2015. 4. 8. 오전 11:19:45
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 4. 8.        JinSungHa     최초  생성
 *
*/
public interface PENC00010Service {


     /**
      *
     * @fn : selectMenuAuthTree
     * @brief : (권한별)넥사크로 공통 메뉴트리 구성
     * @Method Name : selectCmCode
     * @remark
     * @Create Date: 2015 2015. 4. 8. 오전 11:20:01
     * @Author: JinSungHa
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일          수정자   수정내용
      *   ------------  ------  ----------
      *   2015. 4. 8.        JinSungHa     최초  생성
      *
      */
     public void selectMenuAuthTree(UiMapDto dto, HttpServletRequest request) throws Exception;

     /**
     *
    * @fn : selectMenuAuthTree
    * @brief : (권한별)넥사크로 공통 메뉴트리 구성
    * @Method Name : selectCmCode
    * @remark
    * @Create Date: 2015 2015. 4. 8. 오전 11:20:01
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 4. 8.        JinSungHa     최초  생성
     *
     */
    public void selectMenuAuthTop(UiMapDto dto, HttpServletRequest request) throws Exception;
     
     /**
      *
     * @fn : selectGlovelValueInfo
     * @brief : 넥사크로 글로벌 변수 전달 및 SESSION생성
     * @Method Name : selectGlovelValueInfo
     * @remark
     * @Create Date: 2015 2015. 6. 7. 오후 2:23:30
     * @Author: JinSungHa
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일          수정자   수정내용
      *   ------------  ------  ----------
      *   2015. 6. 7.        JinSungHa     최초  생성
      *
      */
    public void selectGlovelValueInfo(UiMapDto dto, HttpServletRequest request) throws Exception;
    
    public Map<String,Object> selectGlovelValueInfo(HttpServletRequest request) throws Exception;

    public Map<String,Object> selectSessionInfo(Map<String,Object> dto) throws Exception;

    public void selectJobSysOrder(UiMapDto dto, HttpServletRequest request) throws Exception;

    public void updateJobSysOrder(UiMapDto dto, HttpServletRequest request) throws Exception;

    public void selectMyWork(UiMapDto dto, HttpServletRequest request) throws Exception;

    public void insertMyWork(UiMapDto dto, HttpServletRequest request) throws Exception;

    public void selectFavorites(UiMapDto dto, HttpServletRequest request) throws Exception;

    public void insertFavorites(UiMapDto dto, HttpServletRequest request) throws Exception;

    public void updateFavorites(UiMapDto dto, HttpServletRequest request) throws Exception;

    public void updateFavoritesAuto(UiMapDto dto, HttpServletRequest request) throws Exception;

    public void deleteFavorites(UiMapDto dto, HttpServletRequest request) throws Exception;
    public void deleteFavoritesAll(UiMapDto dto, HttpServletRequest request) throws Exception;

    public void updateAdminOrgInfo(UiMapDto dto, HttpServletRequest request) throws Exception;

    public void updateAdminOrgInfoRollBack(UiMapDto dto, HttpServletRequest request) throws Exception;

    public void selectCmdCompanyAltAuthList(UiMapDto dto, HttpServletRequest request) throws Exception;
    
    public void selectUserCompanyList(UiMapDto dto, HttpServletRequest request) throws Exception;

    public void selectMenuUrlList(UiMapDto dto, HttpServletRequest request) throws Exception;
    
    public void selectCmdDictionary(UiMapDto dto, HttpServletRequest request) throws Exception;
    public void selectUserSiteType(UiMapDto dto, HttpServletRequest request) throws Exception;

}
