package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * 
* @file: PCM03700Service.java
* @Package: smh.pcm.service  
* @Project name: 대륜E&S 빌링시스템 재구축
* @Type name: PCM03700Service    
* @Company: Built1
* @Create Date: 2021 2021. 4. 1. 오후 3:58:07 
* @Author: JinSungHa
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 1.        JinSungHa     최초  생성
 *
 */
public interface PCM03700Service {
	
	/**
	 * 
	* @fn : selectWIPLockList
	* @brief : 함수 간략한 설명 
	* @Method Name : selectWIPLockList
	* @remark
	* @Create Date: 2021 2021. 4. 1. 오후 3:57:51 
	* @Author: JinSungHa
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2021. 4. 1.        JinSungHa     최초  생성
	 *
	 */
	public void selectLockList(UiMapDto dto) throws Exception;  
	
	/**
	 * 
	* @fn : selectLotLockingCount
	* @brief : 함수 간략한 설명 
	* @Method Name : selectLotLockingCount
	* @remark
	* @Create Date: 2021 2021. 4. 1. 오후 3:57:55 
	* @Author: JinSungHa
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2021. 4. 1.        JinSungHa     최초  생성
	 *
	 */
	public void selectLotLocking(UiMapDto dto) throws Exception;  
	
	/**
	 * 
	* @fn : saveLotLocking
	* @brief : 함수 간략한 설명 
	* @Method Name : saveLotLocking
	* @remark
	* @Create Date: 2021 2021. 4. 2. 오전 9:54:12 
	* @Author: JinSungHa
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2021. 4. 2.        JinSungHa     최초  생성
	 *
	 */
	public void insertLotLocking(UiMapDto dto) throws Exception;  
}
