package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file			: PCM07200Service.java
* @Package		: smh.pcm.service  
* @Project 	: 인터플렉스 MES 구축
* @Type name	: PCM07200Service    
* @Company		: Built1
* @Create Date	: 2021. 4. 27. 오후 7:58:26 
* @Author		: 진성하
* @File Version	: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일      수정자        수정내용
 *   ------------  ------       ----------
 *   2021. 4. 27.       진성하      최초  생성
 *
*/
public interface PCM07200Service {

  
	/**
	* @fn 			: selectLotInfo
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectLotInfo
	* @remark		: 상세설명
	* @Author		: 진성하
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 4. 27.       진성하      최초  생성
	 *
	*/
	
	public void SelectLotInfoByProcess(UiMapDto dto) throws Exception;

//	public void selectOtherInfo(UiMapDto dto) throws Exception;	
	/**
	* @fn 			: SelectLotListForFinalInspection
	* @brief 		: 함수 간략한 설명 
	* @Method Name : SelectLotListForFinalInspection
	* @remark		: 상세설명
	* @Author		: 진성하
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 4. 27.       진성하      최초  생성
	 *
	*/
//	public void SelectLotListForFinalInspection(UiMapDto dto) throws Exception;
	
	public void saveXout(UiMapDto dto) throws Exception;;

	/**
	* @fn 			: saveFinalInspectionSend
	* @brief 		: 함수 간략한 설명 
	* @Method Name : saveFinalInspectionSend
	* @remark		: 상세설명
	* @Author		: 진성하
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 4. 28.       진성하      최초  생성
	 *
	*/
	public void saveFinalInspectionSend(UiMapDto dto) throws Exception;;
 }