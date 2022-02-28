package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: BAS02000Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02000Service
* @Company: Built1
* @Create Date: 2021.3.23
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 23   sungmin.choe   최초  생성
 *
 *
*/
public interface BAS02000Service {

	/**
	* @fn 			: selectProductInfo
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectProductInfo
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 3. 23.       sungmin.choe      최초  생성
	 *
	*/
	public void selectProductInfo(UiMapDto dto) throws Exception;
	
	/**
	* @fn 			: selectApplicationList
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectApplicationList
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 3. 24.       sungmin.choe      최초  생성
	 *
	*/
	public void selectApplicationList(UiMapDto dto) throws Exception;
	
	/**
	* @fn 			: saveItemSpec
	* @brief 		: 함수 간략한 설명 
	* @Method Name : saveItemSpec
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 3. 24.       sungmin.choe      최초  생성
	 *
	*/
	public void saveItemSpec(UiMapDto dto) throws Exception;
	
	/**
	* @fn 			: GetPlatingTypeSegmentList
	* @brief 		: 함수 간략한 설명 
	* @Method Name : GetPlatingTypeSegmentList
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 3. 26.       sungmin.choe      최초  생성
	 *
	*/
	public void GetPlatingTypeSegmentList(UiMapDto dto) throws Exception;
	
	/**
	* @fn 			: GetPlatingTypeSegment
	* @brief 		: 함수 간략한 설명 
	* @Method Name : GetPlatingTypeSegment
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 3. 26.       sungmin.choe      최초  생성
	 *
	*/
	public void GetPlatingTypeSegment(UiMapDto dto) throws Exception;
	
	/**
	* @fn 			: GetPlatingTypeSegmentLInspist
	* @brief 		: 함수 간략한 설명 
	* @Method Name : GetPlatingTypeSegmentLInspist
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 3. 29.       sungmin.choe      최초  생성
	 *
	*/
	public void GetPlatingTypeSegmentLInspist(UiMapDto dto) throws Exception;
	
	/**
	* @fn 			: GetToolTypeByClassId
	* @brief 		: 함수 간략한 설명 
	* @Method Name : GetToolTypeByClassId
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 3. 30.       sungmin.choe      최초  생성
	 *
	*/
	public void GetToolTypeByClassId(UiMapDto dto) throws Exception;
	
	/**
	* @fn 			: GetToolByItemList1
	* @brief 		: 함수 간략한 설명 
	* @Method Name : GetToolByItemList1
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 3. 30.       sungmin.choe      최초  생성
	 *
	*/
	public void GetToolByItemList1(UiMapDto dto) throws Exception;
	
	/**
	* @fn 			: GetToolByItemList2
	* @brief 		: 함수 간략한 설명 
	* @Method Name : GetToolByItemList2
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 3. 30.       sungmin.choe      최초  생성
	 *
	*/
	public void GetToolByItemList2(UiMapDto dto) throws Exception;
	
	/**
	* @fn 			: GetToolByItemList3
	* @brief 		: 함수 간략한 설명 
	* @Method Name : GetToolByItemList3
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 3. 30.       sungmin.choe      최초  생성
	 *
	*/
	public void GetToolByItemList3(UiMapDto dto) throws Exception;
 }