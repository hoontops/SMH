package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: BAS02400Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02400Service
* @Company: Built1
* @Create Date: 2021.3.31
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 31   sungmin.choe   최초  생성
 *
 *
*/
public interface BAS02400Service {

	/**
	* @fn 			: selectSaleOrderApprovalSearch
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectSaleOrderApprovalSearch
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 3. 31.       sungmin.choe      최초  생성
	 *
	*/
	public void selectSaleOrderApprovalSearch(UiMapDto dto) throws Exception;
	
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
	 *   2021. 4. 2.       sungmin.choe      최초  생성
	 *
	*/
	public void selectCustomQuery(UiMapDto dto) throws Exception;
	
	/**
	* @fn 			: saveSalesOrderApproval
	* @brief 		: 함수 간략한 설명 
	* @Method Name : saveSalesOrderApproval
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 4. 2.       sungmin.choe      최초  생성
	 *
	*/
	public void saveSalesOrderApproval(UiMapDto dto) throws Exception;
	
	/**
	* @fn 			: saveApprovalSalesOrderApproval
	* @brief 		: 함수 간략한 설명 
	* @Method Name : saveApprovalSalesOrderApproval
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 4. 2.       sungmin.choe      최초  생성
	 *
	*/
	public void saveApprovalSalesOrderApproval(UiMapDto dto) throws Exception;
	
	/**
	* @fn 			: saveCancelSalesOrderApproval
	* @brief 		: 함수 간략한 설명 
	* @Method Name : saveCancelSalesOrderApproval
	* @remark		: 상세설명
	* @Author		: sungmin.choe
	* @File Version	: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일      수정자        수정내용
	 *   ------------  ------       ----------
	 *   2021. 4. 2.       sungmin.choe      최초  생성
	 *
	*/
	public void saveCancelSalesOrderApproval(UiMapDto dto) throws Exception;
 }