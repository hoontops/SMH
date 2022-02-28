package com.nbdf.cmd.cm.cmsm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

import java.util.Map;

/**
 * 로그인 세션 인증 관련
 *
 * @ClassName CMSM02000Service.java
 * @Description CMSM02000Service Class
 * @Modification-Information
 *
 * @author 통합경영관리시스템 LeeHeungKyu
 * @since 2015. 3. 25.
 * @version 1.0
 * @see <pre>
 *  Copyright (C) 2015 by Built1, All right reserved.
 * </pre>
 */
public interface CMSM02000Service {

     /**
      * @fn : selectSessionInfo
      * @brief : 세션정보 조회
      * @Method Name : selectSessionInfo
      * @remark
      * @Create Date: 2015 2015. 3. 25
      * @Author: 진성하
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일            수정자    수정내용
       *   ------------  ------  ----------
       *   2015. 3. 25.   진성하     최초  생성
       *
      */
      public void selectSessionList(UiMapDto dto) throws Exception;
      //public List<Map<String, Object>> selectSessionInfo(int lgnSessionId, int userId) throws Exception;

      /**
       * @fn : checkSessionValid
       * @brief : 세션/인증 유효성여부 체크
       * @Method Name : checkSessionValid
       * @remark
       * @Create Date: 2015 2015. 3. 25
       * @Author: 진성하
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일            수정자    수정내용
        *   ------------  ------  ----------
        *   2015. 3. 25.   진성하     최초  생성
        *
       */
      public boolean checkSessionValid(Map<String,String> sessionInfo) throws Exception;

      /**
       * @fn : insertSessionInfo
       * @brief : 세션/인증 저장
       * @Method Name : insertSessionInfo
       * @remark
       * @Create Date: 2015 2015. 3. 25
       * @Author: 진성하
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일            수정자    수정내용
        *   ------------  ------  ----------
        *   2015. 3. 25.   진성하     최초  생성
        *
       */
      public int insertSessionInfo (UiMapDto dto) throws Exception;

      /**
       * @fn : updateSessionInfo
       * @brief :  세션/인증 갱신(수정)
       * @Method Name : updateSessionInfo
       * @remark
       * @Create Date: 2015 2015. 3. 25
       * @Author: 진성하
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일            수정자    수정내용
        *   ------------  ------  ----------
        *   2015. 3. 25.   진성하     최초  생성
        *
       */
      public boolean updateSessionInfo (Map<String,String> sessionInfo) throws Exception;

      /**
       *
      * @fn : checkSessionStatus
      * @brief : 요청한 사용자(user_id)의 세션상태 리턴
      * @Method Name : checkSessionStatus
      * @remark
      * @Create Date: 2015 2015. 3. 27. 오후 2:58:51
      * @Author: JinSungHa
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일          수정자   수정내용
       *   ------------  ------  ----------
       *   2015. 3. 27.        JinSungHa     최초  생성
       *
       */
      public int checkSessionStatus(String userId, String ip) throws Exception;

      /**
    * @fn : getPortalUerId
    * @brief : Cookie 정보 gv_LoginInfo 전달 받아 조회
    * @Method Name : getPortalUerId
    * @remark
    * @Create Date: 2015 2015. 9. 24. 오후 8:30:26
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 9. 24.        IMCS     최초  생성
     *
    */
    public Map<String, Object> getPortalUerId(Map<String, Object> gvLoginInfo) throws Exception;


      /**
       *
      * @fn : selectSessionInfo
      * @brief : 해당 사용자의 세션정보 조회
      * @Method Name : selectSessionInfo
      * @remark
      * @Create Date: 2015 2015. 4. 24. 오후 1:51:06
      * @Author: JinSungHa
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일          수정자   수정내용
       *   ------------  ------  ----------
       *   2015. 4. 24.        JinSungHa     최초  생성
       *
       */
      public Map<String, Object> selectSessionInfo(String userId) throws Exception;

      /**
       *
      * @fn : selectSessionInfo
      * @brief : 요청한 dto에 부합되는 세션정보 조회
      * @Method Name : selectSessionInfo
      * @remark
      * @Create Date: 2015 2015. 6. 25. 오후 1:43:07
      * @Author: JinSungHa
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일          수정자   수정내용
       *   ------------  ------  ----------
       *   2015. 6. 25.        JinSungHa     최초  생성
       *
       */
      public Map<String, Object> selectSessionInfo(Map<String, Object> dto) throws Exception;

 }