package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM07800Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM07800Service
* @Company: Built1
* @Create Date: 2021.04.27
* @Author: 김기수
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 27.  김기수   최초  생성
 *
 *
*/
public interface PCM07800Service {

  
    /**
     * @brief : 포장 인수 등록
     * @remark
     * @Create Date: 2021.03.24
     * @Author: 김기수
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.27.       김기수     최초  생성
      *
     */
    public void selectLotWorkPacking(UiMapDto dto) throws Exception;
    
    
    
    public void savePcmBoxPackingAccept(UiMapDto dto) throws Exception;
    
   
    
 }