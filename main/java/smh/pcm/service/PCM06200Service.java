package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM06200Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM06200Service
* @Company: Built1
* @Create Date: 2021.04.20
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 20.  박대호   최초  생성
 *
 *
*/
public interface PCM06200Service {

  
    /**
     * @brief : 일별 탭 조회 
     * @remark
     * @Create Date: 2021.04.20
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.20.       박대호     최초  생성
      *
     */
    public void selectWorkIncommingResultByDate(UiMapDto dto) throws Exception;
   
    /**
     * @brief : 품목 탭 조회 
     * @remark
     * @Create Date: 2021.04.20
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.20.       박대호     최초  생성
      *
     */
    public void selectWorkIncommingResultByProduct(UiMapDto dto) throws Exception;
    /**
     * @brief : LOT 탭 조회 
     * @remark
     * @Create Date: 2021.04.20
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.20.       박대호     최초  생성
      *
     */
    public void selectWorkIncommingResultByLot(UiMapDto dto) throws Exception;

 }