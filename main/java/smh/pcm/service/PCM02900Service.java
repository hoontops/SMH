package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM02900Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM02900Service
* @Company: Built1
* @Create Date: 2021.05.21
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.05.21.  김애리   최초  생성
 *
 *
*/
public interface PCM02900Service {

  
    /**
     * @brief : 상단 Lot 정보
     * @remark
     * @Create Date: 2021.05.21
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.21.       김애리     최초  생성
      *
     */
    public void selectLotInfoBylotID(UiMapDto dto) throws Exception;
    

    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.05.24
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.24.       김애리     최초  생성
      *
     */
    public void saveLotRework(UiMapDto dto) throws Exception;
    
 }