package smh.dfm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: DFM00100Service.java
 * @Package		: smh.dfm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: DFM00100Service
 * @Company		: Built1
 * @Create Date	: 2021.05.10
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 05. 10.  김진현      최초  생성 
 */
public interface DFM00100Service {
	
	/**
     * @fn : selectDefectMapLotList
     * @brief : 2블럭 메인 조회시 lot정보 Line에서 가져옴
     * @Method Name : selectDefectMapLotList
     * @remark
     * @Create Date: 2021.05.10
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.10.     김진현        최초  생성
      *
     */
    public void selectDefectMapLotList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectProcComboList
     * @brief : Lot Defect Map 조회 - 필터 공정콤보 (lot에 해당하는 AOI이면서 층이 존재하는 공정만)
     * @Method Name : selectProcComboList
     * @remark
     * @Create Date: 2021.05.11
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.11.     김진현        최초  생성
      *
     */
    public void selectProcComboList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectDefectMapList
     * @brief : Lot Defect Map 조회 - RAW DATA 조회 (수정됨)
     * @Method Name : selectDefectMapList
     * @remark
     * @Create Date: 2021.05.11
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.11.     김진현        최초  생성
      *
     */
    public void selectDefectMapList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectLayerImageInfo
     * @brief : Lot Defect Map 조회 - 이미지 Layer C,S면 조회(BLOB TYPE)
     * @Method Name : selectLayerImageInfo
     * @remark
     * @Create Date: 2021.05.13
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.13.     김진현        최초  생성
      *
     */
    public void selectLayerImageInfo(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectDefectMapLayerFilterList
     * @brief : Lot Defect Map 조회 - 필터 적용 후 Point 정보 재조회
     * @Method Name : selectDefectMapLayerFilterList
     * @remark
     * @Create Date: 2021.05.14
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.14.     김진현        최초  생성
      *
     */
    public void selectDefectMapLayerFilterList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectDefectMapPanelFilterList
     * @brief : Lot Defect Map 조회 - 선택된 (이미지 설정된 Layer 정보에 따른 생성해야 할 판넬 정보 조회)
     * @Method Name : selectDefectMapPanelFilterList
     * @remark
     * @Create Date: 2021.05.15
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.15.     김진현        최초  생성
      *
     */
    public void selectDefectMapPanelFilterList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectDefectMapDivList
     * @brief : AOI Defect Map 그리드 조회
     * @Method Name : selectDefectMapDivList
     * @remark
     * @Create Date: 2021.06.18
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.06.18.     김진현        최초  생성
      *
     */
    public void selectDefectMapDivList(UiMapDto dto) throws Exception;
	
	
 }