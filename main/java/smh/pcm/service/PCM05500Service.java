package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM05500Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05500Service
* @Company: Built1
* @Create Date: 2021.05.10
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 10.  박대호   최초  생성
 *
 *
*/
public interface PCM05500Service {

  
    /**
     * @brief : 품목텝 조회 
     * @remark
     * @Create Date: 2021.05.10
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.10.       박대호     최초  생성
      *
     */
    public void selectWipAgingList(UiMapDto dto) throws Exception;
   
    
 }