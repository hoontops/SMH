package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * 
* @file: PCM04900Service.java
* @Package: smh.pcm.service  
* @Project name: IFC MES시스템 구축
* @Type name: PCM04900Service    
* @Company: Built1
* @Create Date: 2021 2021. 3. 9.
* @Author: 장병곤
* @File Version: v1.0 
 *
 * << 개정이력(Modification Information) >>
 *   
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 9.        장병곤     최초  생성
 *
 */
public interface PCM04900Service {
	
	
	/**
	 * 
	* @fn : selectComboList
	* @brief : 콤보 조회
	* @Method Name : selectComboList
	* @remark
	* @Create Date: 2021 2021. 3. 9.
	* @Author: JinSungHa
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2021. 3. 9.        장병곤     최초  생성
	 *
	 */
	public void selectComboList(UiMapDto dto) throws Exception; 
	
	/**
	 * 
	* @fn : selectComboList
	* @brief : 콤보 조회
	* @Method Name : selectComboList
	* @remark
	* @Create Date: 2021 2021. 3. 9.
	* @Author: JinSungHa
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2021. 3. 9.        장병곤     최초  생성
	 *
	 */
	public void selectPopupList(UiMapDto dto) throws Exception;  

	/**
	 * 
	* @fn : selectWIPList
	* @brief : 재공 조회
	* @Method Name : selectWIPList
	* @remark
	* @Create Date: 2021 2021. 3. 9.
	* @Author: JinSungHa
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2021. 3. 9.        장병곤     최초  생성
	 *
	 */
	public void selectWIPList(UiMapDto dto) throws Exception;  
}
