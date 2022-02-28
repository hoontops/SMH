package smh.osm.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: OSM00600Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: OSM00600Service
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
public interface OSM00600Service {

    /**
    * @fn : selectGetOutsourcedClaimPeriod
    * @brief : Claim 비용 마감 전송  조회
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
    * @fn : selectGetOutsourcedClaimClosureStatusIf
    * @brief : Claim마감내역 조회
    * @Method Name : selectGetOutsourcedClaimClosureStatusIf
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
     public void selectGetOutsourcedClaimClosureStatusIf(UiMapDto dto) throws Exception;
     
     
     /**
      * @fn : saveCloseProcess
      * @brief : Claim 마감 전송 - Detail 저장
      * @Method Name : saveCloseProcess
      * @remark
      * @Create Date: 2021.06.25
      * @Author: 김진현
      * @File Version: v1.0
       *
       * << 개정이력(Modification Information) >>
       *
       *     수정일                    수정자        수정내용
       *   ------------  ------  ----------
       *   2021.06.25.     김진현        최초  생성
       *
      */
     public void saveCloseProcess(UiMapDto dto) throws Exception;
    
       
       /**
	    * @fn : selectGetOutsourcedClaimClosureStatusIfSandDetail
	    * @brief : Claim 마감 전송 - Claim 비용 분항 /감면 Detail 조회
	    * @Method Name : selectGetOutsourcedClaimClosureStatusIfSandDetail
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
	   public void selectGetOutsourcedClaimClosureStatusIfSandDetail(UiMapDto dto) throws Exception;
	   
	   
	   /**
	     * @fn : saveErpProcess
	     * @brief : Claim 마감 전송 - ERP 전송
	     * @Method Name : saveErpProcess
	     * @remark
	     * @Create Date: 2021.06.25
	     * @Author: 김진현
	     * @File Version: v1.0
	      *
	      * << 개정이력(Modification Information) >>
	      *
	      *     수정일                    수정자        수정내용
	      *   ------------  ------  ----------
	      *   2021.06.25.     김진현        최초  생성
	      *
	     */
	    public void saveErpProcess(UiMapDto dto) throws Exception;
           
 }