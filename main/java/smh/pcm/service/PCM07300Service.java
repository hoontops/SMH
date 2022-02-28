package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file			: PCM07300Service.java
* @Package		: smh.pcm.service  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: PCM07300Service    
* @Company		: Built1
* @Create Date	: 2021. 5. 20. 오후 7:58:26 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 5. 20.       sungmin.choe      최초  생성
 *
*/
public interface PCM07300Service {

	/**
	* @fn 			: selectCustomQuery
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectCustomQuery
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 5. 20.       sungmin.choe      최초  생성
	 *
	*/
	public void selectCustomQuery(UiMapDto dto) throws Exception;
	
	/**
	* @fn 			: selectWIPMultiStateList
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectWIPMultiStateList
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 5. 20.       sungmin.choe      최초  생성
	 *
	*/
	public void selectWIPMultiStateList(UiMapDto dto) throws Exception;    
  
	
	/**
	* @fn 			: saveMultiLotAccept
	* @brief 		: 함수 간략한 설명 
	* @Method Name : saveMultiLotAccept
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 5. 21.       sungmin.choe      최초  생성
	 *
	*/
	public void saveMultiLotAccept(UiMapDto dto) throws Exception;;
 }