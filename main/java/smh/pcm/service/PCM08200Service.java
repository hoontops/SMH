package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM08100Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM08100Service
* @Company: Built1
* @Create Date: 2021.05.13
* @Author: 김기수
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 13.  김기수   최초  생성
 *
 *
*/
public interface PCM08200Service {

  
    /**
     * @brief : 포장 인계 취소
     * @remark
     * @Create Date: 2021.05.13
     * @Author: 김기수
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.13.       김기수     최초  생성
      *
     */
    public void selectPackingLot(UiMapDto dto) throws Exception;
    
    public void selectLotListForBoxSendCancel(UiMapDto dto) throws Exception;
    
    public void selectLotListForBoxSendCancelBoxNo(UiMapDto dto) throws Exception;
    
    public void savePcmSendCancelLotForBoxPacking(UiMapDto dto) throws Exception;
    
 }