package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM08100Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM08100Service
* @Company: Built1
* @Create Date: 2021.04.30
* @Author: 김기수
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 30.  김기수   최초  생성
 *
 *
*/
public interface PCM08100Service {

  
    /**
     * @brief : 포장 인계 등록
     * @remark
     * @Create Date: 2021.04.30
     * @Author: 김기수
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.24.       김기수     최초  생성
      *
     */
    public void selectLotBoxPackingSendList(UiMapDto dto) throws Exception;
    
    public void selectPackingSendList(UiMapDto dto) throws Exception;
    
    public void selectSendLotDetail(UiMapDto dto) throws Exception;
    
    public void saveSendPackingLot(UiMapDto dto) throws Exception;
    
   
    
 }