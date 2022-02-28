package smh.ben.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.ben.service.BEN60210Service;

/**
* @file: BEN60210Controller.java
* @Package: smh.ben.web  
* @Project name: SM상선 myHR Application 고도화
* @Type name: BEN60210Controller    
* @Company: Built1
* @Create Date: 2022. 2. 4. 오전 11:04:56 
* @Author: 정우영
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일           수정자       수정내용
 *   ------------  ------  ----------
 *   2022. 2. 4.       user     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/ben60210")
public class BEN60210Controller extends AbstractWebController {
	
	@Autowired
	private BEN60210Service service;
	
	/**
	* @fn : selectSchoolExpenseList
	* @brief : 자녀 학자금 신청 내역 조회
	* @Method Name : selectSchoolExpenseList
	* @remark
	* @Create Date: 2022 2022. 2. 4. 오전 11:08:15 
	* @Author: 정우영
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2022. 2. 4.        user     최초  생성
	 *
	*/
	@RequestMapping(value = "selectSchoolExpenseList.do")
	public View selectSchoolExpenseList(UiMapDto dto, Model model) throws Exception {
		service.selectSchoolExpenseList(dto);
		return apply(dto, model);
	}
	
    /**
    * @fn : selectChildrenList
    * @brief : 자녀 List 조회 
    * @Method Name : selectChildrenList
    * @remark
    * @Create Date: 2022 2022. 2. 7. 오후 2:42:39 
    * @Author: user
    * @File Version: v1.0 
     *
     * << 개정이력(Modification Information) >>
     *   
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2022. 2. 7.        정우영     최초  생성
     *
    */
    @RequestMapping(value = "selectChildrenList.do")
    public View selectChildrenList(UiMapDto dto, Model model) throws Exception {
        service.selectChildrenList(dto);
        return apply(dto, model);
    }
	
	/**
	 * @fn          : selectSchoolExpenseListDetail
	 * @brief       : 자녀 학자금 신청 상세내역 조회
	 * @remark
	 * @Create Date: 2022 2022. 2. 4. 오전 11:18:15 
	 * @Author      : 정우영
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일         수정자        수정내용
	 *   ----------  ------------  ----------
	 *   2022.02.04.    정우영        최초  생성
	 *
	 */   
    
    @RequestMapping(value = "selectSchoolExpenseDetail.do")
    public View selectSchoolExpenseDetail(UiMapDto dto, Model model) throws Exception {
        service.selectSchoolExpenseDetail(dto);
        return apply(dto, model);
    }
	
	/**
	* @fn : saveSchoolExpense
	* @brief : 자녀 학자금 신청 저장 
	* @Method Name : saveSchoolExpense
	* @remark
	* @Create Date: 2022 2022. 2. 4. 오전 11:11:11 
	* @Author: user
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2022. 2. 4.        user     최초  생성
	 *
	*/
	@RequestMapping(value = "saveSchoolExpense.do")
	public View saveSchoolExpense(UiMapDto dto, Model model) throws Exception {
		service.saveSchoolExpense(dto);
		return apply(dto, model);
	}
}
