package com.nbdf.pes.pe.penc.web;


import com.nbdf.cmd.cm.cmsy.service.CMSY03200Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nbdf.pes.pe.penc.service.PENC00010Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;



/**
* @file: PENC00010Controller.java
* @Package: com.nbdf.pes.pe.penc.web
* @Project name: IFC MES시스템 구축
* @Type name: PENC00010Controller
* @Company: Built1
* @Create Date: 2015 2015. 4. 8. 오전 11:22:41
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
@Controller
@RequestMapping(value = "/penc00010/")
public class PENC00010Controller extends AbstractWebController {

    @Autowired
    private PENC00010Service service;
    
    @Autowired
    private CMSY03200Service cmService;
//    private CMMM01100Service cmService;

    /**
     *
    * @fn : selectMenuAuthTree
    * @brief : (권한별)넥사크로 공통 메뉴트리 구성
    * @Method Name : selectMenuAuthTree
    * @remark
    * @Create Date: 2015 2015. 4. 8. 오전 11:22:44
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
    @RequestMapping(value = "selectMenuAuthTree.do")
    public View selectMenuAuthTree(UiMapDto dto, Model model, HttpServletRequest request, HttpServletResponse response) throws Exception {
        service.selectMenuAuthTree(dto, request);
        return apply(dto, model);
    }

    /**
     *
    * @fn : selectGlovelValueInfo
    * @brief : 로그인 후 넥사크로 글로벌 변수 전달 및 SESSION생성
    * @Method Name : selectGlovelValueInfo
    * @remark
    * @Create Date: 2015 2015. 6. 7. 오후 2:21:27
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 6. 7.        JinSungHa     최초  생성
     *   2015. 12. 12.    진성하           메시지 조회 추가
     *
     */
    @RequestMapping(value = "selectGlovelValueInfo.do")
    public View selectGlovelValueInfo(UiMapDto dto, Model model, HttpServletRequest request) throws Exception {
        service.selectGlovelValueInfo(dto, request);
        cmService.selectCmMsg(dto);
        service.selectFavorites(dto, request);
       	service.selectMenuAuthTree(dto, request);	//	selectMenuAuthTop(dto, request);	
       	service.selectCmdDictionary(dto, request);	
       	service.selectUserSiteType(dto, request);	
        return apply(dto, model);
    }

    @RequestMapping(value = "selectGlovelValueInfoPda.do")
    public View selectGlovelValueInfoPda(UiMapDto dto, Model model, HttpServletRequest request) throws Exception {
        service.selectGlovelValueInfo(dto, request);
        cmService.selectCmMsg(dto);
        service.selectUserSiteType(dto, request);	
        return apply(dto, model);
    }
    
    @RequestMapping(value = "selectCmMsg.do")
    public View selectCmMsg(UiMapDto dto, Model model, HttpServletRequest request) throws Exception {
        cmService.selectCmMsg(dto);
        return apply(dto, model);
    }

    /**
     *
    * @fn : selectJobSysOrder
    * @brief : 자신의 업무 순서지정
    * @Method Name : selectJobSysOrder
    * @remark
    * @Create Date: 2015 2015. 6. 8. 오후 5:39:51
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 6. 8.        JinSungHa     최초  생성
     *
     */
    @RequestMapping(value = "selectJobSysOrder.do")
    public View selectJobSysOrder(UiMapDto dto, Model model, HttpServletRequest request) throws Exception {
        service.selectJobSysOrder(dto, request);
        return apply(dto, model);
    }

    /**
     *
    * @fn : updateJobSysOrder
    * @brief : 업무화면에서 업무아이콘 순서바꾸기 적용
    * @Method Name : updateJobSysOrder
    * @remark
    * @Create Date: 2015 2015. 6. 7. 오후 2:43:41
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
    @RequestMapping(value = "updateJobSysOrder.do")
    public View updateJobSysOrder(UiMapDto dto, Model model, HttpServletRequest request) throws Exception {
        service.updateJobSysOrder(dto, request);
        return apply(dto, model);
    }


    /**
    *
   * @fn : selectMyWork
   * @brief : 나의 할일 목록 조회
   * @Method Name : selectMyWork
   * @remark
   * @Create Date: 2015 2015. 7. 25. 오후 5:39:51
   * @Author: JinSungHa
   * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일          수정자   수정내용
    *   ------------  ------  ----------
    *   2015. 7. 25.        JinSungHa     최초  생성
    *
    */
   @RequestMapping(value = "selectMyWork.do")
   public View selectMyWork(UiMapDto dto, Model model, HttpServletRequest request) throws Exception {
       service.selectMyWork(dto, request);
       return apply(dto, model);
   }

   /**
   *
  * @fn : insertMyWork
  * @brief : 나의할일 클릭시 로그 쌓기
  * @Method Name : insertMyWork
  * @remark
  * @Create Date: 2015 2015. 6. 7. 오후 2:43:41
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
  @RequestMapping(value = "insertMyWork.do")
  public View insertMyWork(UiMapDto dto, Model model, HttpServletRequest request) throws Exception {
      service.insertMyWork(dto, request);
      return apply(dto, model);
  }
  
  
    /**
     * 
    * @fn : selectFavorites
    * @brief : 즐겨찾기 목록조회 
    * @Method Name : selectFavorites
    * @Create Date: 2015 2015. 8. 20. 오후 5:23:26 
    * @Author: JinSungHa
    * @param: XXXXXXXX
    * @return: XXXXX
    * @throws : Exception
     */
    @RequestMapping(value = "selectFavorites.do")
    public View selectFavorites(UiMapDto dto, Model model, HttpServletRequest request) throws Exception {
          service.selectFavorites(dto, request);
          return apply(dto, model);
    }

    /**
     * 
    * @fn : insertFavorites
    * @brief : 즐겨찾기 저장
    * @Method Name : insertFavorites
    * @Create Date: 2015 2015. 8. 20. 오후 5:34:24 
    * @Author: JinSungHa
    * @param: XXXXXXXX
    * @return: XXXXX
    * @throws : Exception
     */
    @RequestMapping(value = "insertFavorites.do")
    public View insertFavorites(UiMapDto dto, Model model, HttpServletRequest request) throws Exception {
          service.insertFavorites(dto, request);
          return apply(dto, model);
    }
    
    /**
     * 
    * @fn : updateFavorites
    * @brief : 즐겨찾기 순서 수정
    * @Method Name : updateFavorites
    * @Create Date: 2015 2015. 8. 20. 오후 5:35:14 
    * @Author: JinSungHa
    * @param: XXXXXXXX
    * @return: XXXXX
    * @throws : Exception
     */
    @RequestMapping(value = "updateFavorites.do")
    public View updateFavorites(UiMapDto dto, Model model, HttpServletRequest request) throws Exception {
          service.updateFavorites(dto, request);
          return apply(dto, model);
    }
    
    /**
     * 
    * @fn : updateFavoritesAuto
    * @brief : 즐겨찾기 자동로딩 수정
    * @Method Name : updateFavoritesAuto
    * @Create Date: 2015 2015. 8. 20. 오후 5:35:14 
    * @Author: JinSungHa
    * @param: XXXXXXXX
    * @return: XXXXX
    * @throws : Exception
     */
    @RequestMapping(value = "updateFavoritesAuto.do")
    public View updateFavoritesAuto(UiMapDto dto, Model model, HttpServletRequest request) throws Exception {
          service.updateFavoritesAuto(dto, request);
          return apply(dto, model);
    }
    /**
     * 
    * @fn : deleteFavorites
    * @brief : 즐겨찾기 삭제
    * @Method Name : deleteFavorites
    * @Create Date: 2015 2015. 8. 20. 오후 6:08:02 
    * @Author: JinSungHa
    * @param: XXXXXXXX
    * @return: XXXXX
    * @throws : Exception
     */
    @RequestMapping(value = "deleteFavorites.do")
    public View deleteFavorites(UiMapDto dto, Model model, HttpServletRequest request) throws Exception {
          service.deleteFavorites(dto, request);
          return apply(dto, model);
    }
    
    /**
     * 
    * @fn : deleteFavoritesAll
    * @brief : 즐겨찾기 삭제
    * @Method Name : deleteFavoritesAll
    * @Create Date: 2021. 1. 20. 오후 6:08:02 
    * @Author: JinSungHa
    * @param: XXXXXXXX
    * @return: XXXXX
    * @throws : Exception
     */
    @RequestMapping(value = "deleteFavoritesAll.do")
    public View deleteFavoritesAll(UiMapDto dto, Model model, HttpServletRequest request) throws Exception {
          service.deleteFavoritesAll(dto, request);
          return apply(dto, model);
    }
    

    /**
     * 
    * @fn : 세션 - 조직정보변경
    * @brief : (관내국재무,예산업무에서) 권한있는 사용자가 조직정보를 갱신하기 위한 기능
    * @Method Name : updateAdminOrgInfo
    * @Create Date: 2015 2015. 8. 26. 오후 1:44:48 
    * @Author: JinSungHa
    * @param: XXXXXXXX
    * @return: XXXXX
    * @throws : Exception
     */
    @RequestMapping(value = "updateAdminOrgInfo.do")
    public View updateAdminOrgInfo(UiMapDto dto, Model model, HttpServletRequest request) throws Exception {
        service.updateAdminOrgInfo(dto, request);
        return apply(dto, model);
    }
    
    /**
     * 
    * @fn : 세션 - 조직정보변경 원복
    * @brief : (관내국재무,예산업무에서) 권한있는 사용자가 조직정보를 갱신하기 한 뒤 다시 자신의 조직으로 갱신
    * @Method Name : updateAdminOrgInfoRollBack
    * @Create Date: 2015 2015. 8. 26. 오후 1:44:48 
    * @Author: JinSungHa
    * @param: XXXXXXXX
    * @return: XXXXX
    * @throws : Exception
     */
    @RequestMapping(value = "updateAdminOrgInfoRollBack.do")
    public View updateAdminOrgInfoRollBack(UiMapDto dto, Model model, HttpServletRequest request) throws Exception {
        service.updateAdminOrgInfoRollBack(dto, request);
        return apply(dto, model);
    }
    
    /**
    *
   * @fn : selectUserCompanyList
   * @brief : 사용자 회사 목록
   * @Method Name : selectUserCompanyList
   * @remark
   * @Create Date: 2015 2015. 6. 8. 오후 5:39:51
   * @Author: JinSungHa
   * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일          수정자   수정내용
    *   ------------  ------  ----------
    *   2015. 6. 8.        JinSungHa     최초  생성
    *
    */
   @RequestMapping(value = "selectUserCompanyList.do")
   public View selectUserCompanyList(UiMapDto dto, Model model, HttpServletRequest request) throws Exception {
       service.selectUserCompanyList(dto, request);
       return apply(dto, model);
   }
    

}
