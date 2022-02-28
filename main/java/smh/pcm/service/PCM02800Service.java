package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM02800Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM02800Service
* @Company: Built1
* @Create Date: 2021.04.19
* @Author: 김성현
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *    2021.04.19.  김성현   최초  생성
 *
 *
*/
public interface PCM02800Service {

	
	
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void selectWipTransAreaList(UiMapDto dto) throws Exception;

    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김성현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김성현     최초  생성
      *
     */
    public void getTransAreaList(UiMapDto dto) throws Exception;
    
	   /**
	    * @fn : savePrintLotCard
	    * @brief : Lot Card 출력 저장
	    * @Method Name : savePrintLotCard
	    * @remark
	    * @Create Date: 2021. 04. 02
	    * @Author: 
	    * @File Version: v1.0 
	    *
	    * << 개정이력(Modification Information) >>
	    *   
	    *     수정일                수정자      수정내용
	    *   ------------  ------  ----------
	    *   2021. 5. 04.   김성현     최초  생성
	    *
	   */
	public void saveChangeArea(UiMapDto dto) throws Exception;
	
	
 }