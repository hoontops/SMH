package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM05600Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05600Service
* @Company: Built1
* @Create Date: 2021.04.13
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 13.  박대호   최초  생성
 *
 *
*/
public interface PCM05600Service {

  
    /**
     * @brief : 중분류 조회
     * @remark
     * @Create Date: 2021.04.13
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.13.       박대호     최초  생성
      *
     */
    public void selectReasonCodeClassList(UiMapDto dto) throws Exception;
    /**
     * @brief : 사유 조회
     * @remark
     * @Create Date: 2021.04.13
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.13.       박대호     최초  생성
      *
     */
    public void selectTypeList(UiMapDto dto) throws Exception;
    /**
     * @brief : Locking 현황 조회
     * @remark
     * @Create Date: 2021.04.13
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.13.       박대호     최초  생성
      *
     */
    public void selectLockingStatus(UiMapDto dto) throws Exception;
    
 }