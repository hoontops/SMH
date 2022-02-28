package smh.hra.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.hra.service.HRA30510Service;

/**
* @file: HRA30510Controller.java
* @Package: smh.hra.web  
* @Project name: SM상선 myHR Application 고도화
* @Type name: HRA30510Controller    
* @Company: Built1
* @Create Date: 2022. 2. 9. 오후 5:30:50 
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
@Controller
@RequestMapping(value = "/hra30510")
public class HRA30510Controller extends AbstractWebController {

	@Autowired
	private HRA30510Service service;
	
	/**
	* @fn : selectBoardList
	* @brief : 함수 간략한 설명 
	* @Method Name : selectBoardList
	* @remark
	* @Create Date: 2022. 2. 9. 오후 5:31:19 
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
	@RequestMapping(value = "selectBoardList.do")
	public View selectBoardList(UiMapDto dto, Model model) throws Exception {
		service.selectBoardList(dto);
		return apply(dto, model);
	}
	
    /**
    * @fn : selectBoardDetail
    * @brief : 함수 간략한 설명 
    * @Method Name : selectBoardDetail
    * @remark
    * @Create Date: 2022 2022. 2. 14. 오전 10:01:39 
    * @Author: 정우영
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2022. 2. 14.    정우영     최초  생성
     *
    */
    @RequestMapping(value = "selectBoardDetail.do")
    public View selectBoardDetail(UiMapDto dto, Model model) throws Exception {
        service.selectBoardDetail(dto);
        return apply(dto, model);
    }
    
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
    @RequestMapping(value = "updateViewCount.do")
    public View updateViewCount(UiMapDto dto, Model model) throws Exception {
        service.updateViewCount(dto);
        return apply(dto, model);
    }
	
	/**
	* @fn : saveBoard
	* @brief : 함수 간략한 설명 
	* @Method Name : saveBoard
	* @remark
	* @Create Date: 2022. 2. 9. 오후 5:31:43 
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
	@RequestMapping(value = "saveBoard.do")
	public View saveBoard(UiMapDto dto, Model model) throws Exception {
		service.saveBoard(dto);
		return apply(dto, model);
	}
	
}
