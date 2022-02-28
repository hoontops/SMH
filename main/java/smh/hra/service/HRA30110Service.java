package smh.hra.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: HRA10610Service.java
* @Package: smh.hra.service  
* @Project name: SM 상선 myHR 고도화
* @Type name: HRA30110Service    
* @Company: Built1
* @Create Date: 2022. 1. 19. 
* @Author: 이정훈
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022.1.19       이정훈   최초생성
 *
*/
public interface HRA30110Service {
	

	
/**
* @fn : selectCounselingList
* @brief : 조회
* @remark
* @Create Date: 2022. 1. 19. 
* @Author: 이정훈
* @File Version: v1.0 
*
* << 개정이력(Modification Information) >>
*   
*     수정일         수정자   수정내용
*   ------------  ------  ----------
*   2022. 1. 13.   이정훈   최초생성
*
*/
	public void selectCounselingList(UiMapDto dto) throws Exception;
	

/**
* @fn : selectCounselingDetail
* @brief : 상세조회
* @remark
* @Create Date: 2022. 1. 19. 
* @Author: 이정훈
* @File Version: v1.0 
*
* << 개정이력(Modification Information) >>
*   
*     수정일         수정자   수정내용
*   ------------  ------  ----------
*   2022. 1. 13.   이정훈   최초생성
*
*/
	public void selectCounselingDetail(UiMapDto dto) throws Exception;

	
/**
* @fn : saveCounseling
* @brief : 신청/수정/삭제 
* @remark
* @Create Date: 2022. 1. 21. 
* @Author: 이정훈
* @File Version: v1.0 
*
* << 개정이력(Modification Information) >>
*   
*     수정일         수정자   수정내용
*   ------------  ------  ----------
*   2022. 1. 13.   이정훈   최초생성
*
*/
	public void saveCounseling(UiMapDto dto) throws Exception;
	
	
	

}
