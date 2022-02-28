package smh.hra.service;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: HRA90210Service.java
* @Package: smh.hra.service  
* @Project name: SM 상선 myHR 고도화
* @Type name: HRA90210Service    
* @Company: Built1
* @Create Date: 2022. 2. 18.
* @Author: 한만섭
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2022. 2. 18.  한만섭     최초  생성
 *
 */
public interface HRA90210Service {

	public void selectMembers(UiMapDto dto) throws Exception;
	
}
