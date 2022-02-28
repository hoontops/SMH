package smh.hra.service;

import java.util.List;
import java.util.Map;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file: HRA90110Service.java
* @Package: smh.hra.service  
* @Project name: SM 상선 myHR 고도화
* @Type name: HRA90110Service    
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
public interface HRA90110Service {

	public void selectOrgTree(UiMapDto dto) throws Exception;
	
	public void selectMembers(UiMapDto dto) throws Exception;
}
