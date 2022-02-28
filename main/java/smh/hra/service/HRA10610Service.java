package smh.hra.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: HRA10610Service.java
* @Package: smh.hra.service  
* @Project name: SM 상선 myHR 고도화
* @Type name: HRA10610Service    
* @Company: Built1
* @Create Date: 2022. 1. 13. 오전 11:48:49 
* @Author: 정우영
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 13.        정우영     최초  생성
 *
*/
public interface HRA10610Service {
	
	
	/**
	* @fn : selectVarificationLetterList
	* @brief : 함수 간략한 설명 
	* @remark
	* @Create Date: 2022. 1. 13. 오전 11:48:56 
	* @Author: 정우영
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2022. 1. 13.        정우영     최초  생성
	 *
	*/
	public void selectVarificationLetterList(UiMapDto dto) throws Exception;

	
	/**
	    * @fn          : saveVarificationLetter
	    * @brief       : 증명서 신청내역 등록/수정/삭제
	    * @remark
	    * @Create Date : 2022.01.13. 오후 1:11:20 
	    * @Author      : 정우영
	    * @File Version: v1.0
	    *
	    * << 개정이력(Modification Information) >>
	    *
	    *     수정일         수정자        수정내용
	    *   ----------  ------------  ----------
	    *   2022.01.13.    정우영        최초  생성
	    *
	    */
	public void saveVarificationLetter(UiMapDto dto) throws Exception;

}
