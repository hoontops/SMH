package smh.apr.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: APR20310Service.java
* @Package: smh.apr.service
* @Project name: 
* @Type name: APR20310Service
* @Company: Built1
* @Create Date: 2022.2.10
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 2. 10.   박대호   최초  생성
 *
 *
*/
public interface APR20310Service {

    /**
    * @fn : selectAbilityUserList
    * @brief : 역량평가 대상자 조회
    * @Method Name : selectAbilityUserList
    * @remark
    * @Create Date: 2022.2.10
    * @Author: 박대호
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2022.2.10.    박대호     최초  생성
     *
    */
    public void selectAbilityUserList(UiMapDto dto) throws Exception;

    /**
     * @fn : selectAbilityTableList
     * @brief : 평가표 조회
     * @Method Name : selectAbilityTableList
     * @remark
     * @Create Date: 2022.2.10
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2022.2.10.    박대호     최초  생성
      *
     */
     public void selectAbilityTableList(UiMapDto dto) throws Exception;
     /**
      * @fn : selectRequirementList
      * @brief : 평가표 상세조회
      * @Method Name : selectRequirementList
      * @remark
      * @Create Date: 2022.2.10
      * @Author: 박대호
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2022.2.10.    박대호     최초  생성
       *
      */
      public void selectRequirementList(UiMapDto dto) throws Exception;
      /**
       * @fn : selectRatingList
       * @brief : Rating조회
       * @Method Name : selectRatingList
       * @remark
       * @Create Date: 2022.2.11
       * @Author: 박대호
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2022.2.11.    박대호     최초  생성
        *
       */
       public void selectRatingList(UiMapDto dto) throws Exception;
       /**
        * @fn : updateAbilityTable
        * @brief : 파트장평가 저장
        * @Method Name : updateAbilityTable
        * @remark
        * @Create Date: 2022.2.11
        * @Author: 박대호
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일      수정자   수정내용
         *   ------------  ------  ----------
         *   2022.2.11.    박대호     최초  생성
         *
        */
        public void updateAbilityTable(UiMapDto dto) throws Exception;
        /**
         * @fn : selectRatingExists
         * @brief : 제출 시 Rating 입력여부 확인
         * @Method Name : selectRatingExists
         * @remark
         * @Create Date: 2022.2.14
         * @Author: 박대호
         * @File Version: v1.0
          *
          * << 개정이력(Modification Information) >>
          *
          *     수정일      수정자   수정내용
          *   ------------  ------  ----------
          *   2022.2.14.    박대호     최초  생성
          *
         */
         public void selectRatingExists(UiMapDto dto) throws Exception;
         /**
          * @fn : updateAppraisalMaster
          * @brief : 제출
          * @Method Name : updateAppraisalMaster
          * @remark
          * @Create Date: 2022.2.14
          * @Author: 박대호
          * @File Version: v1.0
           *
           * << 개정이력(Modification Information) >>
           *
           *     수정일      수정자   수정내용
           *   ------------  ------  ----------
           *   2022.2.14.    박대호     최초  생성
           *
          */
          public void updateAppraisalMaster(UiMapDto dto) throws Exception;
         
 }