package smh.osm.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: OSM00500Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: OSM00500Service
* @Company: Built1
* @Create Date: 2021. 3. 1. 오전 11:35:30
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 1.   진성하   최초  생성
 *
 *
*/
public interface OSM00500Service {

    /**
    * @fn : selectGetOutsourcedClaimPeriod
    * @brief : Claim 마감 현황  조회
    * @Method Name : selectGetOutsourcedClaimPeriod
    * @remark
    * @Create Date: 2021. 3. 6. 오후 3:33:03
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 6.     진성하     최초  생성
     *
    */
    public void selectGetOutsourcedClaimPeriod(UiMapDto dto) throws Exception;
    /**
    * @fn : selectGetOutsourcedClaimClosureStatus
    * @brief : Claim마감내역 조회
    * @Method Name : selectGetOutsourcedClaimClosureStatus
    * @remark
    * @Create Date: 2021. 3. 6. 오후 3:33:03
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 6.     진성하     최초  생성
     *
    */
     public void selectGetOutsourcedClaimClosureStatus(UiMapDto dto) throws Exception;
    
     /**
      * @fn : selectGetOutsourcedClaimClosureStatusDetail
      * @brief : Claim마감내역 조회
      * @Method Name : selectGetOutsourcedClaimClosureStatusDetail
      * @remark
      * @Create Date: 2021. 3. 6. 오후 3:33:03
      * @Author: 진성하
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일      수정자   수정내용
       *   ------------  ------  ----------
       *   2021. 3. 6.     진성하     최초  생성
       *
      */
       public void selectGetOutsourcedClaimClosureStatusDetail(UiMapDto dto) throws Exception;
       
       /**
        * @fn : selectGetChkOspClose
        * @brief : Claim 마감 현황 - 확정전 확정 가능한지 체크
        * @Method Name : selectGetChkOspClose
        * @remark
        * @Create Date: 2021.06.23
        * @Author: 김진현
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일                    수정자        수정내용
         *   ------------  ------  ----------
         *   2021.06.23.     김진현        최초  생성
         *
        */
       public void selectGetChkOspClose(UiMapDto dto) throws Exception;
       
       /**
        * @fn : saveConfProcess
        * @brief : Claim 마감 현황 - 확정 저장
        * @Method Name : saveConfProcess
        * @remark
        * @Create Date: 2021.06.23
        * @Author: 김진현
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일                    수정자        수정내용
         *   ------------  ------  ----------
         *   2021.06.23.     김진현        최초  생성
         *
        */
       public void saveConfProcess(UiMapDto dto) throws Exception;
       
       /**
        * @fn : selectGetChkOspCloseCancel
        * @brief : Claim 마감 현황 - 확정 취소 체크
        * @Method Name : selectGetChkOspCloseCancel
        * @remark
        * @Create Date: 2021.06.24
        * @Author: 김진현
        * @File Version: v1.0
         *
         * << 개정이력(Modification Information) >>
         *
         *     수정일                    수정자        수정내용
         *   ------------  ------  ----------
         *   2021.06.24.     김진현        최초  생성
         *
        */
       public void selectGetChkOspCloseCancel(UiMapDto dto) throws Exception;
      
 }