package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM05700Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05700Service
* @Company: Built1
* @Create Date: 2021.05.12
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 12.  박대호   최초  생성
 *
 *
*/
public interface PCM05700Service {

  
    /**
     * @brief : 체공Lot탭 조회 
     * @remark
     * @Create Date: 2021.05.12
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.12.       박대호     최초  생성
      *
     */
    public void selectDelayLotList(UiMapDto dto) throws Exception;
    /**
     * @brief : 체공이력 탭 조회 
     * @remark
     * @Create Date: 2021.05.12
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.12.       박대호     최초  생성
      *
     */
    public void selectDelayList(UiMapDto dto) throws Exception;
    /**
     * @brief : 체공사유 조회 
     * @remark
     * @Create Date: 2021.05.13
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.13.       박대호     최초  생성
      *
     */
    public void selectReasonCodeByProcess(UiMapDto dto) throws Exception;
    /**
     * @brief : 체공사유 저장 
     * @remark
     * @Create Date: 2021.05.13
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.13.       박대호     최초  생성
      *
     */
    public void saveAbnormalOccurenceByDelayLot(UiMapDto dto) throws Exception;
    
 }