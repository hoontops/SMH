package smh.cmd.service;

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
public interface CMD10200Service {
	

	
/**
* @fn : selectNoticeList
* @brief : 조회
* @remark
* @Create Date: 2022. 2. 21. 
* @Author: 이정훈
* @File Version: v1.0 
*
* << 개정이력(Modification Information) >>
*   
*     수정일         수정자   수정내용
*   ------------  ------  ----------
*  2022. 2. 21.    이정훈   최초생성
*
*/
	public void selectNoticeList(UiMapDto dto) throws Exception;
	

/**
* @fn : selectLeadersTodoList
* @brief : 조회
* @remark
* @Create Date: 2022. 2. 21. 
* @Author: 이정훈
* @File Version: v1.0 
*
* << 개정이력(Modification Information) >>
*   
*     수정일         수정자   수정내용
*   ------------  ------  ----------
*  2022. 2. 21.    이정훈   최초생성
*
*/
	public void selectLeadersTodoList(UiMapDto dto) throws Exception;

/**
* @fn : selectNoticePageList
* @brief : 조회
* @remark
* @Create Date: 2022. 2. 23. 
* @Author: 이정훈
* @File Version: v1.0 
*
* << 개정이력(Modification Information) >>
*   
*     수정일         수정자   수정내용
*   ------------  ------  ----------
*  2022. 2. 21.    이정훈   최초생성
*
*/
	public void selectNoticePageList(UiMapDto dto) throws Exception;
	

}
