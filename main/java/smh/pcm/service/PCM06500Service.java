package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM06500Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM06500Service
* @Company: Built1
* @Create Date: 2021.06.15
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.06.15.  김애리   최초  생성
 *
 *
*/
public interface PCM06500Service {

  
	/**
     * @brief :  Window Time Lot 조회 
     * @remark
     * @Create Date: 2021.06.15
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.06.15.       김애리     최초  생성
      *
     */
	public void selectWindowTimeLotList(UiMapDto dto) throws Exception;
	
    
 }