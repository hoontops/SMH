package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM03900Service.java
* @Package: smh.pcm.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM03900Service
* @Company: Built1
* @Create Date: 2021.05.21
* @Author: 박대호
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 5. 21.  박대호   최초  생성
 *
 *
*/
public interface PCM03900Service {

  
    /**
     * @brief : 재공현황 조회
     * @remark
     * @Create Date: 2021.05.21
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.21.       박대호     최초  생성
      *
     */
    public void selectWIPList(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 대상공정 콤보 조회
     * @remark
     * @Create Date: 2021.05.24
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.24.       박대호     최초  생성
      *
     */
    public void selectProcessPathByProductDefAndSequence(UiMapDto dto) throws Exception;

    /**
     * @brief : 대상공정 콤보 조회 4 Lot Routing
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
    public void selectProcessPathByProductDef4Lot(UiMapDto dto) throws Exception;
    
    /**
     * @brief : Step 콤보 조회
     * @remark
     * @Create Date: 2021.05.24
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.24.       박대호     최초  생성
      *
     */
    public void selectStepCboList(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 사유 콤보 조회
     * @remark
     * @Create Date: 2021.05.24
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.24.       박대호     최초  생성
      *
     */
    public void selectReasonCodeList(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 예약 Locking 저장
     * @remark
     * @Create Date: 2021.05.24
     * @Author: 박대호
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.24.       박대호     최초  생성
      *
     */
    public void saveLotLocking(UiMapDto dto) throws Exception;
    
 }