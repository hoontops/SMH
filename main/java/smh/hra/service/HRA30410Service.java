package smh.hra.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: HRA30410Service.java
* @Package: smh.hra.service  
* @Project name: SM 상선 myHR 고도화
* @Type name: HRA30410Service    
* @Company: Built1
* @Create Date: 2022. 1. 26. 
* @Author: 이정훈
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022.1.26       이정훈   최초생성
 *
*/
public interface HRA30410Service {
	

	
/**
* @fn : selectQnaList
* @brief : 조회
* @remark
* @Create Date: 2022. 1. 26. 
* @Author: 이정훈
* @File Version: v1.0 
*
* << 개정이력(Modification Information) >>
*   
*     수정일         수정자   수정내용
*   ------------  ------  ----------
*   2022. 1. 26.   이정훈   최초생성
*
*/
	public void selectQnaList(UiMapDto dto) throws Exception;
	

/**
* @fn : selectQnaDetail
* @brief : 상세조회
* @remark
* @Create Date: 2022. 1. 27. 
* @Author: 이정훈
* @File Version: v1.0 
*
* << 개정이력(Modification Information) >>
*   
*     수정일         수정자   수정내용
*   ------------  ------  ----------
*   2022. 1. 27.   이정훈   최초생성
*
*/
	public void selectQnaDetail(UiMapDto dto) throws Exception;

	
/**
* @fn : saveQna
* @brief : 신청/수정/삭제   --- 업데이트
* @remark
* @Create Date: 2022. 1. 28. 
* @Author: 이정훈
* @File Version: v1.0 
*
* << 개정이력(Modification Information) >>
*   
*     수정일         수정자   수정내용
*   ------------  ------  ----------
*   2022. 1. 28.   이정훈   최초생성
*
*/
	public void saveQna(UiMapDto dto) throws Exception;
	
	
	

}
