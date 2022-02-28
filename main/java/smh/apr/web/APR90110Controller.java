package smh.apr.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.apr.service.APR90110Service;


/**
* @file        : APR90110Controller.java
* @Package     : smh.apr.web  
* @Project name: SM상선 myHR 시스템 구축
* @Type name   : APR90110Controller    
* @Company     : Built1
* @Create Date : 2022.02.17. 오후 1:11:20 
* @Author      : yhee.kim
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일         수정자       수정내용
 *   ------------  ----------  ----------
 *   2022.02.22.   yhee.kim   최초  생성
 *
*/
@Controller
@RequestMapping(value = "/apr90110")
public class APR90110Controller extends AbstractWebController {

    @Autowired
    private APR90110Service service;

	/**
	 * @fn          : selectOrganizationList
	 * @brief       : 조직정보 조회
	 * @remark
	 * @Create Date : 2022.02.22. 오전 10:55:20 
	 * @Author      : yhee.kim
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일         수정자        수정내용
	 *   ----------  ------------  ----------
	 *   2022.02.22.   yhee.kim     최초  생성
	 *
	 */   
    @RequestMapping(value = "selectOrganizationList.do")
    public View selectOrganizationList(UiMapDto dto, Model model) throws Exception {
        service.selectOrganizationList(dto);
        return apply(dto, model);
    }

	/**
	 * @fn          : selectAppraisalHeadcountList
	 * @brief       : 부서인원배분 정보 조회
	 * @remark
	 * @Create Date : 2022.02.22. 오전 10:55:20 
	 * @Author      : yhee.kim
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일         수정자        수정내용
	 *   ----------  ------------  ----------
	 *   2022.02.22.   yhee.kim     최초  생성
	 *
	 */   
    @RequestMapping(value = "selectAppraisalHeadcountList.do")
    public View selectAppraisalHeadcountList(UiMapDto dto, Model model) throws Exception {
        service.selectAppraisalHeadcountList(dto);
        return apply(dto, model);
    }

	/**
	 * @fn          : saveAppraisalHeadcount
	 * @brief       : 부서인원배분 정보 등록/수정/삭제
	 * @remark
	 * @Create Date : 2022.02.22. 오전 10:55:20 
	 * @Author      : yhee.kim
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일         수정자        수정내용
	 *   ----------  ------------  ----------
	 *   2022.02.22.   yhee.kim     최초  생성
	 *
	 */     
    @RequestMapping(value = "saveAppraisalHeadcount.do")
    public View saveAppraisalHeadcount(UiMapDto dto, Model model) throws Exception {
        service.saveAppraisalHeadcount(dto);
        return apply(dto, model);
    }

	/**
	 * @fn          : createAppraisalHeadcount
	 * @brief       : 부서인원배분 정보 생성
	 * @remark
	 * @Create Date : 2022.02.22. 오전 10:55:20 
	 * @Author      : yhee.kim
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일         수정자        수정내용
	 *   ----------  ------------  ----------
	 *   2022.02.22.   yhee.kim     최초  생성
	 *
	 */  
    @RequestMapping(value = "createAppraisalHeadcount.do")
    public View createAppraisalHeadcount(UiMapDto dto, Model model) throws Exception {
        service.createAppraisalHeadcount(dto);
        return apply(dto, model);
    }

}
