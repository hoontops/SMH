package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM01400Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM01400Service
* @Company: Built1
* @Create Date: 2021.05.27
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 27.  박대호   최초  생성
 *
 *
*/
public interface PCM01400Service {

  
    /**
     * @brief : 모델수주 진척현황 조회
     * @remark
     * @Create Date: 2021.05.27
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.27.       박대호     최초  생성
      *
     */
    public void selectSalseOrderStausPerProduct(UiMapDto dto) throws Exception;
  
    
 }