package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
* @file:PCM01500Service.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: PCM01500Service
* @Company: Built1
* @Create Date: 2021.03.12
* @Author: 김애리
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 12.  김애리   최초  생성
 *
 *
*/
public interface PCM01500Service {

  
    /**
     * @brief : 입고검사 / 자주검사 리스트 
     * @remark
     * @Create Date: 2021.03.12
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.12.       김애리     최초  생성
      *
     */
    public void SelectLotInspectionList(UiMapDto dto) throws Exception;
    
    /**
     * @brief : NCR 리스트 
     * @remark
     * @Create Date: 2021.03.16
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.16.       김애리     최초  생성
      *
     */
    public void SelectNcrStandardOfSelfInspection(UiMapDto dto) throws Exception;
    
  
    /**
     * @brief : 불량 팝업 리스트
     * @remark
     * @Create Date: 2021.03.18
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.18.       김애리     최초  생성
      *
     */
    public void SelectDefectCodeByProcess(UiMapDto dto) throws Exception;
    
    /**
     * @brief : 입고검사, 자주검사 등록 
     * @remark : 공정 인수 전 입고검사 결과를 등록하는 화면, 결과에 따라 NCR을 발행
     * @Create Date: 2021.03.23
     * @Author: 김애리
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.03.23.       김애리     최초  생성
      *
     */
	public void saveLotIncommingInspection(UiMapDto dto) throws Exception;
    
 }