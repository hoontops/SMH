package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM04700Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM04700Service
* @Company: Built1
* @Create Date: 2021.05.17
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 05.17.  김애리   최초  생성
 *
 *
*/
public interface PCM04700Service {

	/**
     * @brief : PCNNO 팝업
     * @remark
     * @Create Date: 2021.05.17
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.17.       김애리     최초  생성
      *
     */
    public void selectPcnListForRC(UiMapDto dto) throws Exception;
    
	
    /**
     * @brief : LOT 적용 품목 조회
     * @remark
     * @Create Date: 2021.05.17
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.17.       김애리     최초  생성
      *
     */
    public void selectProductDefinitionList(UiMapDto dto) throws Exception;
    
    /**
     * @brief : LOT 적용 PCNNO 조회
     * @remark
     * @Create Date: 2021.05.17
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.17.       김애리     최초  생성
      *
     */
    public void selectPcnInfoForRC(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 적용이력 조회
     * @remark
     * @Create Date: 2021.05.17
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.17.       김애리     최초  생성
      *
     */
    public void selectRcApplyHistory(UiMapDto dto) throws Exception;

    /**
     * @brief : RC LOT 대상 목록
     * @remark
     * @Create Date: 2021.05.17
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.17.       김애리     최초  생성
      *
     */
    public void selectRcTargetLotList(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 
     * @remark
     * @Create Date: 2021.05.17
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.05.17.       김애리     최초  생성
      *
     */
    public void saveRCLot(UiMapDto dto) throws Exception;
    
 }