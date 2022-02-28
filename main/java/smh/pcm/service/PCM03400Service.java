package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;
/**
* @file			: PCM03400Service.java
* @Package		: smh.pcm.service  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: PCM03400Service    
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
public interface PCM03400Service {

  
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
	* @fn 			: selectBatchTrackOut
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
	public void selectBatchTrackOut(UiMapDto dto) throws Exception;
	
	/**
	* @fn 			: saveLotBatchTrackOut
	* @brief 		: 함수 간략한 설명 
	* @Method Name : saveLotBatchTrackOut
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
	public void saveLotBatchTrackOut(UiMapDto dto) throws Exception;
	
	/**
	* @fn 			: selectLotEquipmentList
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectLotEquipmentList
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 5. 27.       sungmin.choe      최초  생성
	 *
	*/
	public void selectLotEquipmentList(UiMapDto dto) throws Exception;
 }