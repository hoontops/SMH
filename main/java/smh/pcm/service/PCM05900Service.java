package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM05900Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05900Service
* @Company: Built1
* @Create Date: 2021.05.17
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 17.  박대호   최초  생성
 *
 *
*/
public interface PCM05900Service {

  
    /**
     * @brief : 재공현황 조회 
     * @remark
     * @Create Date: 2021.05.17
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.17.       박대호     최초  생성
      *
     */
    public void selectprogressperproduct(UiMapDto dto) throws Exception;
   
    /**
     * @brief : 재공현황 하단그리드 조회 
     * @remark
     * @Create Date: 2021.05.18
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.18.       박대호     최초  생성
      *
     */
    public void selectProgressPerProductWipList(UiMapDto dto) throws Exception;
    /**
     * @brief : 실적현황 조회 
     * @remark
     * @Create Date: 2021.05.18
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.18.       박대호     최초  생성
      *
     */
    public void selectProgressPerProductResultList(UiMapDto dto) throws Exception;
    
 }