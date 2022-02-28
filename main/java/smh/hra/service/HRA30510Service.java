package smh.hra.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file: HRA30510Service.java
* @Package: smh.hra.service  
* @Project name: SM상선 myHR Application 고도화
* @Type name: HRA30510Service    
* @Company: Built1
* @Create Date: 2022. 2. 9. 오후 5:33:17 
* @Author: 정우영
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자       수정내용
 *   ------------  ------  ----------
 *   2022. 2. 9.     정우영     최초  생성
 *
*/
public interface HRA30510Service {

	/**
	* @fn : selectBoardList
	* @brief : 함수 간략한 설명 
	* @Method Name : selectBoardList
	* @remark
	* @Create Date: 2022. 2. 9. 오후 5:35:02 
	* @Author: 정우영
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2022. 2. 9.     정우영     최초  생성
	 *
	*/
	public void selectBoardList(UiMapDto dto) throws Exception;
	
	/**
	* @fn : selectBoardDetail
	* @brief : 함수 간략한 설명 
	* @Method Name : selectBoardDetail
	* @remark
	* @Create Date: 2022 2022. 2. 14. 오전 9:58:39 
	* @Author: 정우영
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2022. 2. 14.        정우영     최초  생성
	 *
	*/
	public void selectBoardDetail(UiMapDto dto) throws Exception;
	
	/**
	* @fn          : updateViewCount
	* @brief       : 게시판 조회수 업데이트
	* @Method Name : updateViewCount
	* @remark
	* @Create Date : 2022 2022. 2. 17. 오전 9:58:42 
	* @Author      : 정우영
	* @File Version: v1.0 
    *
	* << 개정이력(Modification Information) >>
	*   
	*     수정일          수정자   수정내용
	*   ------------  ------  ----------
	*   2022. 2. 17.   정우영     최초  생성
	*
	*/
	public void updateViewCount(UiMapDto dto) throws Exception;
	
	/**
	* @fn : saveBoard
	* @brief : 함수 간략한 설명 
	* @Method Name : saveBoard
	* @remark
	* @Create Date: 2022. 2. 9. 오후 5:35:28 
	* @Author: 정우영
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2022. 2. 9.     정우영     최초  생성
	 *
	*/
	public void saveBoard(UiMapDto dto) throws Exception;
	
}
