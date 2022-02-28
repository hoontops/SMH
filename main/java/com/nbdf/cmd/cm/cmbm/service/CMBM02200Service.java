package com.nbdf.cmd.cm.cmbm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: CMBM02200Service.java
* @Package: com.nbdf.cmd.cm.cmbm.service  
* @Project name: IFC MES시스템 재구축
* @Type name: CMBM02200Service    
* @Company: Built1
* @Create Date: 2018 2018. 10. 26. 오후 2:16:06 
* @Author: Jin Sung Ha
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2018. 10. 26.        Jin Sung Ha     최초  생성
 *
*/
public interface CMBM02200Service {

	/**
	* @fn : selectCmbmBatchCtrlAuth
	* @brief : 배치관리 권한등록 - 배치프로그램 - 조회
	* @Method Name : selectCmbmBatchCtrlAuth
	* @remark
	* @Create Date: 2018 2018. 10. 26. 오후 2:16:04 
	* @Author: Jin Sung Ha
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2018. 10. 26.        Jin Sung Ha     최초  생성
	 *
	*/
	public void selectCmbmBatchCtrlAuth(UiMapDto dto) throws Exception;    
    
    /**
    * @fn : saveCmdDynamicSqlAuth
    * @brief : 배치관리 권한등록 - 배치프로그램 - 저장
    * @Method Name : saveCmdDynamicSqlAuth
    * @remark
    * @Create Date: 2018 2018. 10. 26. 오후 2:16:01 
    * @Author: Jin Sung Ha
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 10. 26.        Jin Sung Ha     최초  생성
     *
    */
    public void saveCmbmBatchCtrlAuth(UiMapDto dto) throws Exception;
    
    /**
    * @fn : selectCmbmBatchCtrls
    * @brief : 배치 프로그램 목록 조회
    * @Method Name : selectCmbmBatchCtrls
    * @remark
    * @Create Date: 2018 2018. 10. 26. 오후 2:15:57 
    * @Author: Jin Sung Ha
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2018. 10. 26.        Jin Sung Ha     최초  생성
     *
    */
    public void selectCmbmBatchCtrls(UiMapDto dto) throws Exception;
}
