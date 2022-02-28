package com.nbdf.cmd.cm.cmbm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: CMBM00200Service.java
* @Package: com.drens.dr.CMBM.service  
* @Project name: IFC MES시스템 재구축
* @Type name: CMBM00200Service    
* @Company: Built1
* @Create Date: 2018 2018. 1. 24. 오후 3:46:54 
* @Author: Built1
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2018. 1. 24.        Built1     최초  생성
 *
*/
public interface CMBM00200Service {

	/**
	* @fn : selectCmdLookupTypeValuesList
	* @brief : 공통코드 조회
	* @Method Name : selectCmdLookupTypeValuesList
	* @remark
	* @Create Date: 2018 2018. 1. 24. 오후 3:46:49 
	* @Author: Built1
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2018. 1. 24.        Built1     최초  생성
	 *
	*/
	public void selectCmdLookupTypeValuesList(UiMapDto dto) throws Exception;
}
