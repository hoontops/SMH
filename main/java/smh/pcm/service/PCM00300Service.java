package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM00300Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM00300Service
* @Company: Built1
* @Create Date: 2021.2.15
* @Author: 방성혁
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 22.  방성혁   최초  생성
 *
 *
*/
public interface PCM00300Service {

    /**
    * @fn : selectProductionOrderList
    * @brief : 제픔생산 계획 정보 조회
    * @Method Name : selectProductionOrderList
    * @remark
    * @Create Date: 2021.2.22
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.2.22.       방성혁     최초  생성
     *
    */
    public void selectProductionOrderList(UiMapDto dto) throws Exception;
    
    /**
    * @fn : selectLotListByProductionOrder
    * @brief :  LOT정보 조회
    * @Method Name : selectLotListByProductionOrder
    * @remark
    * @Create Date: 2021.2.22
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.2.22.       방성혁     최초  생성
     *
    */
    public void selectLotListByProductionOrder(UiMapDto dto) throws Exception;   
    
    /**
     * @fn : selectProductDefinitionListByProductionOrder
     * @brief : BOM 정보
     * @Method Name : selectProductDefinitionListByProductionOrder
     * @remark
     * @Create Date: 2021.2.22
     * @Author: 방성혁
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.2.22.       방성혁     최초  생성
      *
     */
     public void selectProductDefinitionListByProductionOrder(UiMapDto dto) throws Exception;  
     
   
     /**
      * @fn : selectLineNo
      * @brief : ㅣLINE 정보
      * @Method Name : selectLineNo
      * @remark
      * @Create Date: 2021.2.22
      * @Author: 방성혁
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021.2.22.       방성혁     최초  생성
       *
      */
      public void selectLineNo(UiMapDto dto) throws Exception;   
      
      /**
       * @fn : updateProductionOrder_IsSplit
       * @brief : 완료처리 완료해제
       * @Method Name : updateProductionOrder_IsSplit
       * @remark
       * @Create Date: 2021.2.22
       * @Author: 방성혁
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021.2.22.       방성혁     최초  생성
        *
       */
       public void updateProductionOrder_IsSplit(UiMapDto dto) throws Exception;   
       
       /**
        * @fn : getLotIdMaxSequence
        * @brief : 
        * @Method Name : getLotIdMaxSequence
        * @remark
        * @Create Date: 2021.2.22
        * @Author: 방성혁
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일      수정자   수정내용
         *   ------------  ------  ----------
         *   2021.2.22.       방성혁     최초  생성
         *
        */
        public void getLotIdMaxSequence(UiMapDto dto) throws Exception;   

        /**
         * @fn : SaveCreateLot
         * @brief : Lot 생성
         * @Method Name : SaveCreateLot
         * @remark
         * @Create Date: 2021.2.22
         * @Author: 방성혁
         * @File Version: v1.0
          *
          * << 개정이력(Modification Information) >>
          *
          *     수정일      수정자   수정내용
          *   ------------  ------  ----------
          *   2021.2.22.       방성혁     최초  생성
          *
         */
         public void saveCreateLot(UiMapDto dto) throws Exception;   
         
         /**
          * @fn : cancelCreateLot
          * @brief : Lot 생성 취소
          * @Method Name : cancelCreateLot
          * @remark
          * @Create Date: 2021.2.22
          * @Author: 방성혁
          * @File Version: v1.0
           *
           * << 개정이력(Modification Information) >>
           *
           *     수정일      수정자   수정내용
           *   ------------  ------  ----------
           *   2021.2.22.       방성혁     최초  생성
           *
          */
          public void cancelCreateLot(UiMapDto dto) throws Exception;  
          
          /**
           * @fn : getProductionOrderIdList
           * @brief : S/O 조회
           * @Method Name : getProductionOrderIdList
           * @remark
           * @Create Date: 2021.2.22
           * @Author: 방성혁
           * @File Version: v1.0
            *
            * << 개정이력(Modification Information) >>
            *
            *     수정일      수정자   수정내용
            *   ------------  ------  ----------
            *   2021.2.22.       방성혁     최초  생성
            *
           */
           public void getProductionOrderIdList(UiMapDto dto) throws Exception;           
 }