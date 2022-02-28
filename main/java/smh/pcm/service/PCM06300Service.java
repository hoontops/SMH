package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM06300Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM06300Service
* @Company: Built1
* @Create Date: 2021.04.14
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 14.  박대호   최초  생성
 *
 *
*/
public interface PCM06300Service {

  
    /**
     * @brief : 보류현황 조회
     * @remark
     * @Create Date: 2021.04.14
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.14.       박대호     최초  생성
      *
     */
    public void selectLotHoldResult(UiMapDto dto) throws Exception;
    
    
 }