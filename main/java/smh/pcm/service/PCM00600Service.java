package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * 
* @file: PCM00600Service.java
* @Package: smh.pcm.service  
* @Project name: IFC MES시스템 구축
* @Type name: PCM00600Service    
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
public interface PCM00600Service {
	

	/**
	 * 
	* @fn : selectPrintLotCardList
	* @brief :  CardList 조회
	* @Method Name : selectPrintLotCardList
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
	public void selectPrintLotCardList(UiMapDto dto) throws Exception;  
	
	/**
	 * 
	* @fn : selectLotInfoOnPrintLotCard
	* @brief : RD 해드 출력 조회 
	* @Method Name : selectLotInfoOnPrintLotCard
	* @remark
	* @Create Date: 2021 2021. 3. 25. 
	* @Author: JinSungHa
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2021. 3. 25.        장병곤     최초  생성
	 *
	 */
	public void selectLotInfoOnPrintLotCard(UiMapDto dto) throws Exception; 
	
	/**
	 * 
	* @fn : selectProcessResultAndRoutingForLotCardNormal
	* @brief : RD 바디 출력 조회
	* @Method Name : selectProcessResultAndRoutingForLotCardNormal
	* @remark
	* @Create Date: 2021 2021. 3. 25.
	* @Author: JinSungHa
	* @File Version: v1.0 
	 *
	 * << 개정이력(Modification Information) >>
	 *   
	 *     수정일          수정자   수정내용
	 *   ------------  ------  ----------
	 *   2021. 3. 25.        장병곤     최초  생성
	 *
	 */
	public void selectProcessResultAndRoutingForLotCardNormal(UiMapDto dto) throws Exception; 
}
