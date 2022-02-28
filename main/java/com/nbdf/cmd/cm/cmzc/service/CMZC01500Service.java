package com.nbdf.cmd.cm.cmzc.service;

//import java.util.List;
//import java.util.Map;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * 우편번호 관련
 *
 * @ClassName CMZC015000Service.java
 * @Description CMZC015000Service Class
 * @Modification-Information
 *
 * @author 통합경영관리시스템 LeeHeungKyu
 * @since 2015. 3. 27.
 * @version 1.0
 * @see <pre>
 *  Copyright (C) 2015 by Built1, All right reserved.
 * </pre>
 */
public interface CMZC01500Service {

     /**
      * @fn : selectZipsSidoList
      * @brief : 우편번호 시도 그룹 조회
      * @Method Name : selectZipsSidoList
      * @remark
      * @Create Date: 2015. 3. 27
      * @Author: 진성하
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일            수정자    수정내용
       *   ------------  ------  ----------
       *   2015. 3. 27.   진성하     최초  생성
       *
      */
      public void selectZipsSidoList(UiMapDto dto) throws Exception;

      /**
       * @fn : selectZipsSearchCount
       * @brief : 우편번호 검색 카운트
       * @Method Name : selectZipsSearchCount
       * @remark
       * @Create Date: 2015. 3. 27
       * @Author: 진성하
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일            수정자    수정내용
        *   ------------  ------  ----------
        *   2015. 3. 27.   진성하     최초  생성
        *
       */
       public void selectZipsSearchCount(UiMapDto dto) throws Exception;

      /**
       * @fn : selectZipsSearchList
       * @brief : 우편번호 검색 리스트
       * @Method Name : selectZipsSearchList
       * @remark
       * @Create Date: 2015. 3. 27
       * @Author: 진성하
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일            수정자    수정내용
        *   ------------  ------  ----------
        *   2015. 3. 27.   진성하     최초  생성
        *
       */
       public void selectZipsSearchList(UiMapDto dto) throws Exception;

       /**
        * @fn : selectMlbxSearchCount
        * @brief : 우편번호 사서함 검색 카운트
        * @Method Name : selectMlbxSearchCount
        * @remark
        * @Create Date: 2015. 12. 21
        * @Author: 진성하
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일            수정자    수정내용
         *   ------------  ------  ----------
         *   2015. 12. 21.   진성하     최초  생성
         *
        */
        public void selectMlbxSearchCount(UiMapDto dto) throws Exception;

       /**
        * @fn : selectMlbxSearchList
        * @brief : 우편번호 사서함  검색 리스트
        * @Method Name : selectMlbxSearchList
        * @remark
        * @Create Date: 2015. 12. 21
        * @Author: 진성하
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일            수정자    수정내용
         *   ------------  ------  ----------
         *   2015. 12. 21.   진성하     최초  생성
         *
        */
        public void selectMlbxSearchList(UiMapDto dto) throws Exception;

 }