package smh.hra.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : HRA30710Controller.java
* @Package     : smh.hra.service 
* @Project name: SM상선 myHR 시스템 구축
* @Type name   : HRA30710Controller    
* @Company     : Built1
* @Create Date : 2022.02.17. 오후 1:11:20 
* @Author      : yhee.kim
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일         수정자       수정내용
 *   ------------  ----------  ----------
 *   2022.02.17.   yhee.kim   최초  생성
 *
*/
public interface HRA30710Service {
		
	/**
	 * @fn          : selectFAQList
	 * @brief       : FAQ 내역 조회
	 * @remark
	 * @Create Date : 2022.01.19. 오후 4:46:20 
	 * @Author      : yhee.kim
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일         수정자        수정내용
	 *   ----------  ------------  ----------
	 *   2022.02.17.   yhee.kim     최초  생성
	 *
	 */ 
	public void selectFAQList(UiMapDto dto) throws Exception;

	/**
	 * @fn          : selectFAQInfo
	 * @brief       : FAQ 상세내역 조회
	 * @remark
	 * @Create Date : 2022.01.19. 오후 4:46:20 
	 * @Author      : yhee.kim
	 * @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일         수정자        수정내용
	 *   ----------  ------------  ----------
	 *   2022.02.17.   yhee.kim     최초  생성
	 *
	 */
	public void selectFAQInfo(UiMapDto dto) throws Exception;
}
