package smh.ben.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: BEN60210Service.java
* @Package: smh.ben.service  
* @Project name: SM상선 myHR Application 고도화
* @Type name: BEN60210Service    
* @Company: Built1
* @Create Date: 2022. 2. 4. 오전 11:13:43 
* @Author: 정우영
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일           수정자       수정내용
 *   ------------  ------  ----------
 *   2022. 2. 4.       정우영     최초  생성
 *
*/
public interface BEN60210Service {
	
	/**
	* @fn : selectSchoolExpenseList
	* @brief : 함수 간략한 설명 
	* @Method Name : selectSchoolExpenseList
	* @remark
	* @Create Date: 2022 2022. 2. 4. 오전 11:14:06 
	* @Author: 정우영
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2022. 2. 4.        정우영     최초  생성
	 *
	*/
	public void selectSchoolExpenseList(UiMapDto dto) throws Exception;
	
	/**
	* @fn : selectChildrenList
	* @brief : 함수 간략한 설명 
	* @Method Name : selectChildrenList
	* @remark
	* @Create Date: 2022 2022. 2. 7. 오후 2:43:25 
	* @Author: user
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2022. 2. 7.        정우영     최초  생성
	 *
	*/
	public void selectChildrenList(UiMapDto dto) throws Exception;
	
	/**
	* @fn : selectSchoolExpenseDetail
	* @brief : 함수 간략한 설명 
	* @Method Name : selectSchoolExpenseDetail
	* @remark
	* @Create Date: 2022 2022. 2. 4. 오전 11:18:15 
	* @Author: 정우영
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2022. 2. 4.        정우영     최초  생성
	 *
	*/
	public void selectSchoolExpenseDetail(UiMapDto dto) throws Exception;
	
	/**
	* @fn : saveSchoolExpense
	* @brief : 함수 간략한 설명 
	* @Method Name : saveSchoolExpense
	* @remark
	* @Create Date: 2022 2022. 2. 4. 오전 11:14:25 
	* @Author: 정우영
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2022. 2. 4.        정우영     최초  생성
	 *
	*/
	public void saveSchoolExpense(UiMapDto dto) throws Exception;

}
