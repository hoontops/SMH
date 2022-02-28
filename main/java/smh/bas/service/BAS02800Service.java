package smh.bas.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: BAS02800Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS02800Service
* @Company: Built1
* @Create Date: 2021.3.31
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 02   sungmin.choe   최초  생성
 *
 *
*/
public interface BAS02800Service {

	/**
	* @fn 			: selectDurableList
	* @brief 		: 함수 간략한 설명 
	* @Method Name : selectDurableList
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
	public void selectDurableList(UiMapDto dto) throws Exception;
 }