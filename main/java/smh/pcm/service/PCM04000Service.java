package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM04000Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM04000Service
* @Company: Built1
* @Create Date: 2021.05.24
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 24.  박대호   최초  생성
 *
 *
*/
public interface PCM04000Service {

  
    /**
     * @brief : 재공현황 조회
     * @remark
     * @Create Date: 2021.05.24
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.24.       박대호     최초  생성
      *
     */
    public void selectLotLockingReserve(UiMapDto dto) throws Exception;
    /**
     * @brief : 예약 Locking 해제 저장
     * @remark
     * @Create Date: 2021.05.25
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.25.       박대호     최초  생성
      *
     */
    public void saveLotLockingReserveData(UiMapDto dto) throws Exception;
    
 }