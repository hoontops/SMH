package smh.apr.service;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : APR90110Controller.java
* @Package     : smh.apr.web  
* @Project name: SM상선 myHR 시스템 구축
* @Type name   : APR90110Controller    
* @Company     : Built1
* @Create Date : 2022.02.22. 오후 1:11:20 
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
public interface APR90110Service {

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
	public void selectOrganizationList(UiMapDto dto) throws Exception;
	
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
	public void selectAppraisalHeadcountList(UiMapDto dto) throws Exception;

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
	public void saveAppraisalHeadcount(UiMapDto dto) throws Exception;
	
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
	public void createAppraisalHeadcount(UiMapDto dto) throws Exception;	
 }