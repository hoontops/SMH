package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM02200Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM02200Service
* @Company: Built1
* @Create Date: 2021.04.16
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 16.  김애리   최초  생성
 *
 *
*/
public interface PCM02200Service {

  
    /**
     * @brief : 상단 LOT INFO
     * @remark
     * @Create Date: 2021.04.16
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.16.       김애리     최초  생성
      *
     */
    public void selectLotInfoBylotIDbyAreaAuthority(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 작업 설비
     * @remark
     * @Create Date: 2021.04.16
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.16.       김애리     최초  생성
      *
     */
    public void selectEquipmentInfoByLotID4Run(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 변경 가능 설비
     * @remark
     * @Create Date: 2021.04.16
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.16.       김애리     최초  생성
      *
     */
    public void selectEquipmentInfoByLotID4Change(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 작업 치공구
     * @remark
     * @Create Date: 2021.04.16
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.16.       김애리     최초  생성
      *
     */
    public void selectDurableInfoByLotID4Run(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 변경 가능 치공구
     * @remark
     * @Create Date: 2021.04.16
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.16.       김애리     최초  생성
      *
     */
    public void selectDurableInfoByLotID4Change(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 설비가동현황 탭 저장
     * @remark
     * @Create Date: 2021.04.16
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.16.       김애리     최초  생성
      *
     */
    public void saveChangeEquipment(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 치공구현황 탭 저장
     * @remark
     * @Create Date: 2021.04.16
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.16.       김애리     최초  생성
      *
     */
    public void saveChangeDurable(UiMapDto dto) throws Exception;
  
 }