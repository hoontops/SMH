package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM05800Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05800Service
* @Company: Built1
* @Create Date: 2021.05.31
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 31.  박대호   최초  생성
 *
 *
*/
public interface PCM05800Service {

  
    /**
     * @brief : 재공현황 
     * @remark
     * @Create Date: 2021.05.31
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.31.       박대호     최초  생성
      *
     */
    public void selectWipListOfPhysicalCount(UiMapDto dto) throws Exception;
    /**
     * @brief : 재공현황 
     * @remark
     * @Create Date: 2021.05.31
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.31.       박대호     최초  생성
      *
     */
    public void saveWipSurveyLocking(UiMapDto dto) throws Exception;
    
 }