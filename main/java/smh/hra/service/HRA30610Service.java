package smh.hra.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: HRA30610Service.java
* @Package: smh.hra.service  
* @Project name: SM상선 myHR Application 고도화
* @Type name: HRA30610Service    
* @Company: Built1
* @Create Date: 2022. 2. 10. 오후 1:56:27 
* @Author: 정우영
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일         수정자       수정내용
 *   ------------  ------  ----------
 *   2022. 2. 10.     정우영     최초  생성
 *
*/
public interface HRA30610Service {
	
	/**
	* @fn : selectFaqList
	* @brief : 함수 간략한 설명 
	* @Method Name : selectFaqList
	* @remark
	* @Create Date: 2022. 2. 10. 오후 1:58:44 
	* @Author: 정우영
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일         수정자   수정내용
	 *   ------------  ------  ----------
	 *   2022. 2. 10.    정우영     최초  생성
	 *
	*/
	public void selectFaqList(UiMapDto dto) throws Exception;
	
	public void selectFaqDetail(UiMapDto dto) throws Exception;
	
	public void insertViewCount(UiMapDto dto) throws Exception;
	
	/**
	* @fn : saveFaq
	* @brief : 함수 간략한 설명 
	* @remark
	* @Create Date: 2022. 2. 10. 오후 4:32:03 
	* @Author: 정우영
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일         수정자   수정내용
	 *   ------------  ------  ----------
	 *   2022. 2. 10.     정우영     최초  생성
	 *
	*/
	public void saveFaq(UiMapDto dto) throws Exception;
}
