package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;
/**
* @file			: PCM03300Service.java
* @Package		: smh.pcm.service  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: PCM03300Service    
* @Company		: Built1
* @Create Date	: 2021. 5. 25. 오후 12:22:41 
* @Author		: sungmin.choe
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 5. 25.       sungmin.choe      최초  생성
 *
*/
public interface PCM03300Service {

  
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
	* @fn 			: selectBatchTrackIn
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectBatchTrackIn
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 5. 25.       sungmin.choe      최초  생성
	 *
	*/
	public void selectBatchTrackIn(UiMapDto dto) throws Exception;
	
	/**
	* @fn 			: saveLotBatchTrackIn
	* @brief 		: 함수 간략한 설명 
	* @Method Name : saveLotBatchTrackIn
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 5. 25.       sungmin.choe      최초  생성
	 *
	*/
	public void saveLotBatchTrackIn(UiMapDto dto) throws Exception;
 }