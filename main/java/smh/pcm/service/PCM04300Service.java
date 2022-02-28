package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM04300Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM04300Service
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
public interface PCM04300Service {

  
    /**
     * @brief : 재공 조회
     * @remark
     * @Create Date: 2021.04.20
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.20.       김애리     최초  생성
      *
     */
    public void selectWIPList(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 대상공정 조회
     * @remark
     * @Create Date: 2021.04.20
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.20.       김애리     최초  생성
      *
     */
    public void selectProcessSegment(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 대상공정 조회  4 Lot Routing
     * @remark
     * @Create Date: 2021.07.20
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.07.20.       김애리     최초  생성
      *
     */
    public void selectProcessSegment4Lot(UiMapDto dto) throws Exception;
    
    
    /**
     * @brief : 자원 조회
     * @remark
     * @Create Date: 2021.04.20
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.20.       김애리     최초  생성
      *
     */
    public void selectResourceByProductSegment(UiMapDto dto) throws Exception;
    

    /**
     * @brief : LOT 공정이동 저장
     * @remark
     * @Create Date: 2021.04.21
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.21.       김애리     최초  생성
      *
     */
    public void saveMoveProcessPath(UiMapDto dto) throws Exception;
    
    
 }