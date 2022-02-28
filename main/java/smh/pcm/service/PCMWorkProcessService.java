package smh.pcm.service;

import java.util.Map;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCMWorkProcessService.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCMWorkProcessService
* @Company: Built1
* @Create Date: 2021.04.05
* @Author: 방성혁
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일              수정자      수정내용
 *   ------------  ------  ----------
 *   2021. 04. 05.  방성혁   최초  생성
 *
 *
*/
public interface PCMWorkProcessService {
	
	/**
	* @fn : saveReceiveLot
	* @brief : 인수등록
	* @Method Name : saveReceiveLot
	* @remark
	* @Create Date: 2021.04.05
	* @Author: 방성혁
	* @File Version: v1.0
	 *
	 * << 개정이력(Modification Information) >>
	 *
	 *     수정일      수정자   수정내용
	 *   ------------  ------  ----------
	 *   2021.04.05.       방성혁     최초  생성
	 *
	*/
	public void saveReceiveLot(UiMapDto dto) throws Exception;
	
   /**
	 * @fn : saveTrackInLot
	 * @brief : 작업시작
	 * @Method Name : saveTrackInLot
	 * @remark
	 * @Create Date: 2021.04.05
	 * @Author: 방성혁
	 * @File Version: v1.0
	  *
	  * << 개정이력(Modification Information) >>
	  *
	  *     수정일      수정자   수정내용
	  *   ------------  ------  ----------
	  *   2021.04.05.       방성혁     최초  생성
	  *
	 */
	public void saveTrackInLot(UiMapDto dto) throws Exception;
	 
	 /**
	  * @fn : saveTrackOutLot
	  * @brief : 작업완료
	  * @Method Name : saveTrackOutLot
	  * @remark
	  * @Create Date: 2021.04.05
	  * @Author: 방성혁
	  * @File Version: v1.0
	   *
	   * << 개정이력(Modification Information) >>
	   *
	   *     수정일      수정자   수정내용
	   *   ------------  ------  ----------
	   *   2021.04.05.       방성혁     최초  생성
	   *
	  */
	 public void saveTrackOutLot(UiMapDto dto) throws Exception;   
	  
	  /**
	   * @fn : saveSendLot
	   * @brief : 인계등록
	   * @Method Name : saveSendLot
	   * @remark
	   * @Create Date: 2021.04.05
	   * @Author: 방성혁
	   * @File Version: v1.0
	    *
	    * << 개정이력(Modification Information) >>
	    *
	    *     수정일      수정자   수정내용
	    *   ------------  ------  ----------
	    *   2021.04.05.       방성혁     최초  생성
	    *
	   */
	public void saveSendLot(UiMapDto dto) throws Exception;  
	
	
	public void saveLotResourceId(UiMapDto dto) throws Exception;
	
	
	  /**
	   * @fn : insertabnormalOccurenceByDelayLot
	   * @brief : 체공 이상발생 등록
	   * @Method Name : insertabnormalOccurenceByDelayLot
	   * @remark
	   * @Create Date: 2021.04.05
	   * @Author: 방성혁
	   * @File Version: v1.0
	    *
	    * << 개정이력(Modification Information) >>
	    *
	    *     수정일      수정자   수정내용
	    *   ------------  ------  ----------
	    *   2021.04.05.       방성혁     최초  생성
	    *
	   */
	public void insertabnormalOccurenceByDelayLot(UiMapDto dto) throws Exception;  	
	
 }