package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM00500Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM00500Service
* @Company: Built1
* @Create Date: 2021.03.08
* @Author: 방성혁
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 03. 08.  방성혁   최초  생성
 *
 *
*/
public interface PCM00500Service {

    /**
    * @fn : selectNotInputProductDefId
    * @brief : PO 및 품목으로 미투입된 품목을 조회
    * @Method Name : selectNotInputProductDefId
    * @remark
    * @Create Date: 2021.03.08
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.03.08.       방성혁     최초  생성
     *
    */
    public void selectNotInputProductDefId(UiMapDto dto) throws Exception;
    
    /**
    * @fn : getProductionOrderIdListOfLotInput
    * @brief :  LOT 투입 화면에서 검색조건의 S/O번호 팝업 정보를 조회
    * @Method Name : getProductionOrderIdListOfLotInput
    * @remark
    * @Create Date: 2021.03.08
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.03.08.       방성혁     최초  생성
     *
    */
    public void getProductionOrderIdListOfLotInput(UiMapDto dto) throws Exception;   
    
    /**
     * @fn : selectNotInputLotListByProductDefId
     * @brief :  선택한 품목의 LOT 리스트 조회
     * @Method Name : selectNotInputLotListByProductDefId
     * @remark
     * @Create Date: 2021.03.08
     * @Author: 방성혁
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.08.       방성혁     최초  생성
      *
     */
     public void selectNotInputLotListByProductDefId(UiMapDto dto) throws Exception;  
     
     /**
      * @fn : getLotInputAreaList
      * @brief :  투입 작업장 조회
      * @Method Name : getLotInputAreaList
      * @remark
      * @Create Date: 2021.03.08
      * @Author: 방성혁
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021.03.08.       방성혁     최초  생성
       *
      */
      public void getLotInputAreaList(UiMapDto dto) throws Exception;  

      /**
       * @fn : selectExpectedCompleteDate
       * @brief :  예상완료일 조회
       * @Method Name : selectExpectedCompleteDate
       * @remark
       * @Create Date: 2021.03.08
       * @Author: 방성혁
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021.03.08.       방성혁     최초  생성
        *
       */
      public void selectExpectedCompleteDate(UiMapDto dto) throws Exception; 
       
       /**
        * @fn : inputLot
        * @brief :  LOT 투입
        * @Method Name : inputLot
        * @remark
        * @Create Date: 2021.03.10
        * @Author: 방성혁
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일      수정자   수정내용
         *   ------------  ------  ----------
         *   2021.03.10.       방성혁     최초  생성
         *
        */
      public void saveInputLot(UiMapDto dto) throws Exception;       
 }