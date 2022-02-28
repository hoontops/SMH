package smh.pda.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM02700Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM02700Service
* @Company: Built1
* @Create Date: 2021.03.24
* @Author: 김기수
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 24.  김기수   최초  생성
 *
 *
*/
public interface PDA00600Service {

  
    public void selectLotInfoByProcess(UiMapDto dto) throws Exception;

    /**
     * @brief : 인수 취소
     * @remark
     * @Create Date: 2021.03.24
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
    public void selectLotListForSendCancel(UiMapDto dto) throws Exception;
    
    
    
    public void selectLotWorkCancelList(UiMapDto dto) throws Exception;
    
    public void selectWipTransAreaList(UiMapDto dto) throws Exception;

    public void selectLotListForWorkEndCancel(UiMapDto dto) throws Exception;
    
    public void selectAreaListByAuthorityList(UiMapDto dto) throws Exception;
    
   
    
 }