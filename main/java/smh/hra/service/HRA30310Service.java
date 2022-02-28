package smh.hra.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: HRA30310Service.java
* @Package: smh.hra.service  
* @Project name: SM 상선 myHR 고도화
* @Type name: HRA30310Service    
* @Company: Built1
* @Create Date: 2022. 1. 13. 오전 4:00:00 
* @Author: 정우영
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 1. 21.        정우영     최초  생성
 *
*/
public interface HRA30310Service {
	
	/**
	* @fn : selectQnaList
	* @brief : 함수 간략한 설명 
	* @remark
	* @Create Date: 2022. 1. 21. 오전 4:00:00 
	* @Author: 정우영
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2022. 1. 21.        정우영     최초  생성
	 *
	*/
	public void selectQnaList(UiMapDto dto) throws Exception;
	
	/**
	    * @fn          : saveQnA
	    * @brief       : HR Q&A 신청내역 등록/수정/삭제
	    * @remark
	    * @Create Date : 2022.01.21. 오후 4:11:20 
	    * @Author      : 정우영
	    * @File Version: v1.0
	    *
	    * << 개정이력(Modification Information) >>
	    *
	    *     수정일         수정자        수정내용
	    *   ----------  ------------  ----------
	    *   2022.01.21.    정우영        최초  생성
	    *
	    */
	public void saveQnA(UiMapDto dto) throws Exception;
}
