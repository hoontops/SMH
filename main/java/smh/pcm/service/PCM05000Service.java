package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM05000Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM05000Service
* @Company: Built1
* @Create Date: 2021.04.01
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 1.  박대호   최초  생성
 *
 *
*/
public interface PCM05000Service {

  
    /**
     * @brief : 품목팝업 다건 조회 
     * @remark
     * @Create Date: 2021.04.01
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.01.       박대호     최초  생성
      *
     */
    public void selectPopupList(UiMapDto dto) throws Exception;
    /**
     * @brief : 재공현황 조회
     * @remark
     * @Create Date: 2021.04.02
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.02.       박대호     최초  생성
      *
     */
    public void selectWipListByProduct(UiMapDto dto) throws Exception;
    
 }