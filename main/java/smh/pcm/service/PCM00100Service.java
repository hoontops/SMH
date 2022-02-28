package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM00100Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM00100Service
* @Company: Built1
* @Create Date: 2021.2.15
* @Author: 방성혁
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 15.  방성혁   최초  생성
 *
 *
*/
public interface PCM00100Service {

    /**
    * @fn : SelectSalesOrderList
    * @brief : S/O 조회
    * @Method Name : SelectSalesOrderList
    * @remark
    * @Create Date: 2021.2.15
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.2.15.       방성혁     최초  생성
     *
    */
    public void selectSalesOrderList(UiMapDto dto) throws Exception;
    
    /**
    * @fn : selectSalesOrderDo
    * @brief : 수주배분리스트
    * @Method Name : selectSalesOrderDo
    * @remark
    * @Create Date: 2021.2.16
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.2.16.       방성혁     최초  생성
     *
    */
    public void selectSalesOrderDo(UiMapDto dto) throws Exception;   
    
    /**
     * @fn : selectProductVersionList
     * @brief : 제품 버젼 리스트
     * @Method Name : selectProductVersionList
     * @remark
     * @Create Date: 2021.2.18
     * @Author: 방성혁
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.2.18.       방성혁     최초  생성
      *
     */
     public void selectProductVersionList(UiMapDto dto) throws Exception;  
     
     /**
      * @fn : saveSalesOrderDo
      * @brief : 수주배분저장
      * @Method Name : saveSalesOrderDo
      * @remark
      * @Create Date: 2021.2.18
      * @Author: 방성혁
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021.2.18.       방성혁     최초  생성
       *
      */
      public void saveSalesOrderDo(UiMapDto dto) throws Exception;      
      
      /**
       * @fn : selectSalesOrderApproval
       * @brief : 수주배분리스트
       * @Method Name : selectSalesOrderApproval
       * @remark
       * @Create Date: 2021.2.18
       * @Author: 방성혁
       * @File Version: v1.0
        *
        * << 개정이력(Modification Information) >>
        *
        *     수정일      수정자   수정내용
        *   ------------  ------  ----------
        *   2021.2.18.       방성혁     최초  생성
        *
       */
       public void selectSalesOrderApproval(UiMapDto dto) throws Exception;            
    
  
 }