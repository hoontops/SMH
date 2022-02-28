package smh.hra.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: HRA20110Service.java
* @Package: smh.hra.service  
* @Project name: SM상선 myHR Application 고도화
* @Type name: HRA20110Service    
* @Company: Built1
* @Create Date: 2022. 2. 9. 오후 1:29:41 
* @Author: 정우영
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자       수정내용
 *   ------------  ------  ----------
 *   2022. 2. 9.     정우영     최초  생성
 *
*/
public interface HRA20110Service {

	/**
	* @fn : selectStaffList
	* @brief : 함수 간략한 설명 
	* @Method Name : selectStaffList
	* @remark
	* @Create Date: 2022. 2. 9. 오후 1:30:51 
	* @Author: 정우영
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2022. 2. 9.     정우영     최초  생성
	 *
	*/	
	public void selectStaffList(UiMapDto dto) throws Exception;
	
}
