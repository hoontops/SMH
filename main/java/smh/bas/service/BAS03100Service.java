package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: BAS03100Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS03100Service
* @Company: Built1
* @Create Date: 2021.2.3
* @Author: 방성혁
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 3.  방성혁   최초  생성
 *
 *
*/
public interface BAS03100Service {

    /**
    * @fn : selectRoutionRollLossList
    * @brief : 품목 리스트
    * @Method Name : selectRoutionRollLossList
    * @remark
    * @Create Date: 2021.2.4
    * @Author: 방성혁
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.2.3.       방성혁     최초  생성
     *
    */
    public void selectRoutionRollLossList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectRoutionRollLossList
     * @brief : 공정별 Loss
     * @Method Name : selectRoutionRollLossList
     * @remark
     * @Create Date: 2021.2.4
     * @Author: 방성혁
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.2.3.       방성혁     최초  생성
      *
     */
     public void selectRolllossOperationList(UiMapDto dto) throws Exception;

  
     /**
      * @fn : saveRolllossOperation
      * @brief : 공정별 Loss 정보 저장
      * @Method Name : saveBasEnterprise
      * @remark
      * @Create Date: 2021.2.9
      * @Author: 방성혁
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *  2021.2.9.     방성혁     최초  생성
       *
      */
      public void saveRolllossOperation(UiMapDto dto) throws Exception;
 
 }