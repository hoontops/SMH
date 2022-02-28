package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM04800Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM04800Service
* @Company: Built1
* @Create Date: 2021.03.09
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 09.  김애리   최초  생성
 *
 *
*/
public interface PCM04800Service {

  
    /**
     * @brief : 상단 Lot 정보
     * @remark
     * @Create Date: 2021.04.26
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.26.       김애리     최초  생성
      *
     */
    public void selectLotInfoBylotID(UiMapDto dto) throws Exception;
    

    /**
     * @brief : 좌측 Routing 그리드
     * @remark
     * @Create Date: 2021.04.26
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.26.       김애리     최초  생성
      *
     */
    public void selectLotRouting(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 자원 탭 그리드
     * @remark
     * @Create Date: 2021.04.26
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.26.       김애리     최초  생성
      *
     */
    public void selectLotRoutingResource(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 자재 탭 그리드
     * @remark
     * @Create Date: 2021.04.26
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.26.       김애리     최초  생성
      *
     */
    public void selectLotRoutingMaterial(UiMapDto dto) throws Exception;
   
    
    /**
     * @brief : 치공구 탭 그리드
     * @remark
     * @Create Date: 2021.04.26
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.26.       김애리     최초  생성
      *
     */
    public void selectLotRoutingDurable(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 자원 팝업 
     * @remark
     * @Create Date: 2021.05.06
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.06.       김애리     최초  생성
      *
     */
    public void selectLotResource(UiMapDto dto) throws Exception;
    
    /**
     * @brief : Lot Routing 저장. 
     * @remark : asis - SaveSampleRouting
     * @Create Date: 2021.05.07
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.07.       김애리     최초  생성
      *
     */
    public void saveLotRouting(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : Rev. 변경
     * @remark : 
     * @Create Date: 2021.05.28
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.28.       김애리     최초  생성
      *
     */
    public void saveChangeVersion(UiMapDto dto) throws Exception;
 }