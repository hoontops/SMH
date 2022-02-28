package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM03800Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM03800Service
* @Company: Built1
* @Create Date: 2021.04.12
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 12.  박대호   최초  생성
 *
 *
*/
public interface PCM03800Service {

  
    /**
     * @brief : LOT Locking 해제 조회
     * @remark
     * @Create Date: 2021.04.12
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.12.       박대호     최초  생성
      *
     */
    public void selectLotLockingList(UiMapDto dto) throws Exception;
    /**
     * @brief : LOT Locking 해제
     * @remark
     * @Create Date: 2021.04.12
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.12.       박대호     최초  생성
      *
     */
    public void setReleaseLocking(UiMapDto dto) throws Exception;
    
 }