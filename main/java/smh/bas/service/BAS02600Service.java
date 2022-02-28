package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file			: BAS02600Service.java
* @Package		: smh.bas.service  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: BAS01900Service    
* @Company		: Built1
* @Create Date	: 2021. 4. 07. 오전 11:22:35 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 4. 07.       sungmin.choe      최초  생성
 *
*/
public interface BAS02600Service {

	/**
	* @fn 			: selectItemHistoryList
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectItemHistoryList
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 4. 7.       sungmin.choe      최초  생성
	 *
	*/
	public void selectItemHistoryList(UiMapDto dto) throws Exception;
 }