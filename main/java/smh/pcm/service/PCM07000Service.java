package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file			: PCM07000Service.java
* @Package		: smh.pcm.service  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: PCM07000Service    
* @Company		: Built1
* @Create Date	: 2021. 4. 27. 오후 7:58:26 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 4. 27.       sungmin.choe      최초  생성
 *
*/
public interface PCM07000Service {

  
	/**
	* @fn 			: selectOtherInfo
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectOtherInfo
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 4. 27.       sungmin.choe      최초  생성
	 *
	*/
	public void selectOtherInfo(UiMapDto dto) throws Exception;
	
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
	 *   2021. 4. 27.       sungmin.choe      최초  생성
	 *
	*/
	public void selectCustomQuery(UiMapDto dto) throws Exception;
    
  
	/**
	* @fn 			: saveFinalInspectionStart
	* @brief 		: 함수 간략한 설명 
	* @Method Name : saveFinalInspectionStart
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 4. 28.       sungmin.choe      최초  생성
	 *
	*/
	public void saveFinalInspectionStart(UiMapDto dto) throws Exception;;
 }