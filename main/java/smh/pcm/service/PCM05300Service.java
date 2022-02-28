package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM05300Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05300Service
* @Company: Built1
* @Create Date: 2021.05.10
* @Author: 방성혁
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 10.  방성혁   최초  생성
 *
 *
*/
public interface PCM05300Service {

  
    /**
     * @brief : LOT별 이상발생 현황 조회
     * @remark
     * @Create Date: 2021.05.10
     * @Author: 방성혁
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *        수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.10.   방성혁     최초  생성
      *
     */
    public void selectAbnormalOccurenceList(UiMapDto dto) throws Exception;
   
    
 }