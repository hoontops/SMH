package smh.apr.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: APR10110Service.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR10110Service
* @Company: Built1
* @Create Date: 2022.1.13
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 13.   박대호   최초  생성
 *
 *
*/
public interface APR10110Service {

    /**
    * @fn : selectAppraisalUserInfo
    * @brief : 로그인 피평가자 개인정보
    * @Method Name : selectAppraisalUserInfo
    * @remark
    * @Create Date: 2022.1.13
    * @Author: 박대호
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2022.1.13.    박대호     최초  생성
     *
    */
    public void selectAppraisalUserInfo(UiMapDto dto) throws Exception;

    /**
     * @fn : selectEvaluationList
     * @brief : 업적평가 피평가자
     * @Method Name : selectEvaluationList
     * @remark
     * @Create Date: 2022.1.13
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2022.1.13.    박대호     최초  생성
      *
     */
     public void selectEvaluationList(UiMapDto dto) throws Exception;
     

      /**
       * @fn : selectEvaluationListDetail
       * @brief : 업적평가 목표등록 Detail 조회
       * @Method Name : selectEvaluationListDetail
       * @remark
       * @Create Date: 2022.1.14
       * @Author: 박대호
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2022.1.14.    박대호     최초  생성
        *
       */
       public void selectEvaluationListDetail(UiMapDto dto) throws Exception;
       
       /**
        * @fn : selectKpiList
        * @brief : KPI팝업 조회
        * @Method Name : selectKpiList
        * @remark
        * @Create Date: 2022.1.17
        * @Author: 박대호
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일      수정자   수정내용
         *   ------------  ------  ----------
         *   2022.1.17.    박대호     최초  생성
         *
        */
        public void selectKpiList(UiMapDto dto) throws Exception;
        /**
         * @fn : saveEvaluationList
         * @brief : 업적평가-목표등록 저장 수정 삭제
         * @Method Name : saveEvaluationList
         * @remark
         * @Create Date: 2022.1.18
         * @Author: 박대호
         * @File Version: v1.0
          *
          * << 개정이력(Modification Information) >>
          *
          *     수정일      수정자   수정내용
          *   ------------  ------  ----------
          *   2022.1.18.    박대호     최초  생성
          *
         */
         public void saveEvaluationList(UiMapDto dto) throws Exception;
         /**
          * @fn : selectCheckAppraisalPeriod
          * @brief : 상태에 따른 평가기간 Check
          * @Method Name : selectCheckAppraisalPeriod
          * @remark
          * @Create Date: 2022.1.20
          * @Author: 박대호
          * @File Version: v1.0
           *
           * << 개정이력(Modification Information) >>
           *
           *     수정일      수정자   수정내용
           *   ------------  ------  ----------
           *   2022.1.20.    박대호     최초  생성
           *
          */
          public void selectCheckAppraisalPeriod(UiMapDto dto) throws Exception;
          /**
           * @fn : saveSubmitMaster
           * @brief : 업적평가 목표설정 제출
           * @Method Name : saveSubmitMaster
           * @remark
           * @Create Date: 2022.1.20
           * @Author: 박대호
           * @File Version: v1.0
            *
            * << 개정이력(Modification Information) >>
            *
            *     수정일      수정자   수정내용
            *   ------------  ------  ----------
            *   2022.1.20.    박대호     최초  생성
            *
           */
           public void saveSubmitMaster(UiMapDto dto) throws Exception;
           /**
            * @fn : selectCheckAppraisalPeriod
            * @brief : 상태에 따른 평가기간 List Check
            * @Method Name : selectCheckAppraisalPeriod
            * @remark
            * @Create Date: 2022.2.24
            * @Author: 박대호
            * @File Version: v1.0
             *
             * << 개정이력(Modification Information) >>
             *
             *     수정일      수정자   수정내용
             *   ------------  ------  ----------
             *   2022.2.24.    박대호     최초  생성
             *
            */
            public void selectCheckAppraisalPeriodList(UiMapDto dto) throws Exception;
            /**
             * @fn : saveSubmitMasterList
             * @brief : 업적평가 목표설정 List 제출
             * @Method Name : saveSubmitMasterList
             * @remark
             * @Create Date: 2022.2.24
             * @Author: 박대호
             * @File Version: v1.0
              *
              * << 개정이력(Modification Information) >>
              *
              *     수정일      수정자   수정내용
              *   ------------  ------  ----------
              *   2022.2.24.    박대호     최초  생성
              *
             */
             public void saveSubmitMasterList(UiMapDto dto) throws Exception;
            
 }