package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM01200Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM01200Service
* @Company: Built1
* @Create Date: 2021.04.12
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 12.  박대호   최초  생성
 *
 *
*/
public interface PCM01200Service {

  
    /**
     * @brief : 미투입 List 탭 조회 
     * @remark
     * @Create Date: 2021.04.12
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.12.       박대호     최초  생성
      *
     */
    public void selectNotInputList(UiMapDto dto) throws Exception;
  
    
    /**
     * @brief : 미투입 자재 소요 탭 조회 
     * @remark
     * @Create Date: 2021.04.12
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.12.       박대호     최초  생성
      *
     */
    public void selectNotInputMaterialRequirementByMainBase(UiMapDto dto) throws Exception;
    /**
     * @brief : 미투입 자재 소요 탭 디테일 조회 
     * @remark
     * @Create Date: 2021.04.12
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.12.       박대호     최초  생성
      *
     */
    public void selectNotInputMaterialRequirementByConsumable(UiMapDto dto) throws Exception;
    /**
     * @brief : 미투입 자재 소요 탭 머지 전체조회 
     * @remark
     * @Create Date: 2021.04.16
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.16.       박대호     최초  생성
      *
     */
    public void selectNotInputMaterialRequirementByConsumableTotalList(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 미투입(수주별) List 탭 조회 
     * @remark
     * @Create Date: 2021.04.12
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.12.       박대호     최초  생성
      *
     */
    public void selectNotInputListBySalseOrder(UiMapDto dto) throws Exception;
    
 }