package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: BAS04400Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS04400Service
* @Company: Built1
* @Create Date: 2021.4.13
* @Author: 권혜영
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.4.13.   권혜영   최초  생성
 *
 *
*/
public interface BAS04400Service {
    
	/**
	    * @fn : selectBasQcgradeList
	 * @brief : 조치등급 조회
	 * @Method Name : selectBasQcgradeList
	 * @remark
	 * @Create Date: 2021.4.13
	 * @Author: 권혜영
	 * @File Version: v1.0
	  *
	  * << 개정이력(Modification Information) >>
	  *
	  *     수정일      수정자   수정내용
	  *   ------------  ------  ----------
	  *   2021.4.13.       권혜영     최초  생성
	  *
	 */
	 public void selectBasQcgradeList(UiMapDto dto) throws Exception;
 
	/**
	    * @fn : selectBasQcinterlockList
    * @brief : 품질 InterLock 등급정보 조회
    * @Method Name : selectBasQcinterlockList
    * @remark
    * @Create Date: 2021.4.13
    * @Author: 권혜영
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021.4.13.       권혜영     최초  생성
     *
    */
    public void selectBasQcinterlockList(UiMapDto dto) throws Exception;

    
    /**
     * @fn : selectBasQcinterlockactionList
     * @brief : 품질 InterLock Action 정보 조회
     * @Method Name : selectBasQcinterlockactionList
     * @remark
     * @Create Date: 2021.4.13
     * @Author: 권혜영
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.4.13.       권혜영     최초  생성
      *
     */
     public void selectBasQcinterlockactionList(UiMapDto dto) throws Exception;

     /**
      * @fn : saveBasQcinterlock
      * @brief : 품질 InterLock 등급정보 저장 / 품질 InterLock Action 정보 저장
      * @Method Name : saveBasQcinterlock
      * @remark
      * @Create Date: 2021.4.13
      * @Author: 권혜영
      * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *  2021.4.13.       권혜영     최초  생성
      *
      */
     public void saveBasQcinterlock(UiMapDto dto) throws Exception;
	    
 }