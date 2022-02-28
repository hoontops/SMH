package smh.hra.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: HRA10170Service.java
* @Package: smh.hra.service  
* @Project name: SM 상선 myHR 고도화
* @Type name: HRA10170Service    
* @Company: Built1
* @Create Date: 2022. 1. 13. 오전 11:48:49 
* @Author: 권택진
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 13.     권택진     최초  생성
 *
*/
public interface HRA10170Service {
	
	
	/**
	 * @fn          : selectVarificationLetterList
	 * @brief       : 신상정보 Base Infomation
	 * @remark
	 * @Author      : 권택진
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일         수정자        수정내용
	 *   ----------  ------------  ----------
	 *   2022.01.27.    권택진        최초  생성
	 *
	 */   
	public void selectDeptList(UiMapDto dto) throws Exception;
	
	public void selectDeptMemnberList(UiMapDto dto) throws Exception;
	

	

}
