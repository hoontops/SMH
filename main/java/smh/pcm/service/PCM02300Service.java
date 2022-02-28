package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM02300Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM02300Service
* @Company: Built1
* @Create Date: 2021.04.28
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021.04.28.  김애리   최초  생성
 *
 *
*/
public interface PCM02300Service {

  
    /**
     * @brief : 상단 Roll Lot 정보
     * @remark
     * @Create Date: 2021.04.28
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.28.       김애리     최초  생성
      *
     */
    public void selectRollLotList(UiMapDto dto) throws Exception;
    

    /**
     * @brief : 사용가능 Roll Lot 팝업
     * @remark
     * @Create Date: 2021.04.28
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.28.       김애리     최초  생성
      *
     */
    public void selectConsumableLotListForRollLot(UiMapDto dto) throws Exception;
    
    /**
     * @brief : Lot No 채번
     * @remark
     * @Create Date: 2021.04.28
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.28.       김애리     최초  생성
      *
     */
    public void selectLotIdMaxSequence(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 화면 중간에, Roll lot 유효성 체크 그리드
     * @remark
     * @Create Date: 2021.04.28
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.28.       김애리     최초  생성
      *
     */
    public void selectConsumableLotInfo(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 화면 하단 왼쪽 , 자재 투입 내역 
     * @remark
     * @Create Date: 2021.04.28
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.28.       김애리     최초  생성
      *
     */
    public void selectCreatedListByRollLotSplit(UiMapDto dto) throws Exception;
   
    
    /**
     * @brief : 화면 하단 오른쪽 , ROLL LOT 투입 분할 이력 
     * @remark
     * @Create Date: 2021.04.28
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.28.       김애리     최초  생성
      *
     */
    public void selectCreatedLotListByRollLotSplit(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 저장.
     * @remark
     * @Create Date: 2021.04.28
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.04.28.       김애리     최초  생성
      *
     */
    public void saveRollLotSplit(UiMapDto dto) throws Exception;
    
 }