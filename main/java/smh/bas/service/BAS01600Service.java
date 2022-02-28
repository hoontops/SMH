package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file			: BAS01600Service.java
* @Package		: smh.bas.service  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: BAS01600Service    
* @Company		: Built1
* @Create Date	: 2021. 4. 09. 오전 11:22:35 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 4. 09.       sungmin.choe      최초  생성
 *
*/
public interface BAS01600Service {

	/**
	* @fn 			: selectActionList
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectActionList
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 4. 9.       sungmin.choe      최초  생성
	 *
	*/
	public void selectActionList(UiMapDto dto) throws Exception;
	
	/**
	* @fn 			: saveActionList
	* @brief 		: 함수 간략한 설명 
	* @Method Name : saveActionList
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 4. 9.       sungmin.choe      최초  생성
	 *
	*/
	public void saveActionList(UiMapDto dto) throws Exception;
 }