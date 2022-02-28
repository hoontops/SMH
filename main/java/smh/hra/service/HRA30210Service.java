package smh.hra.service;

import com.nbdf.commons.ui.vo.UiMapDto;


public interface HRA30210Service {
	

	/**
	* @fn: selectCounselingStatusList
	* @Package: smh.hra.web  
	* @Project name: SM상선 myHR 시스템 구축  
	* @Type name: HRA30210service
	* @Company: Built1
	* @Create Date: 2022.01.26.
	* @Author: 유성연
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2022.01.26.    유성연     최초  생성
	 *
	*/
	public void selectCounselingStatusList(UiMapDto dto) throws Exception;

	public void selectCounselingStatusDetail(UiMapDto dto) throws Exception;
	
	public void saveCounselingStatus(UiMapDto dto) throws Exception;
	
	public void saveChangeStatus(UiMapDto dto) throws Exception;
}
