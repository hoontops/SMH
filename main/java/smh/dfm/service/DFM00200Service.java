package smh.dfm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: DFM00200Service.java
 * @Package		: smh.dfm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: DFM00200Service
 * @Company		: Built1
 * @Create Date	: 2021.05.21
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 05. 21.  김진현      최초  생성 
 */
public interface DFM00200Service {
	
	/**
     * @fn : selectDefectMapProductList
     * @brief : 품목별 Defect Map 조회 (필터 - 품목코드 팝업)
     * @Method Name : selectDefectMapProductList
     * @remark
     * @Create Date: 2021.05.21
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.21.     김진현        최초  생성
      *
     */
    public void selectDefectMapProductList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectItemRevList
     * @brief : 품목별 Defect Map - Rev 콤보값 조회
     * @Method Name : selectItemRevList
     * @remark
     * @Create Date: 2021.05.24
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.24.     김진현        최초  생성
      *
     */
    public void selectItemRevList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectFilterProcComboList
     * @brief : 품목별 Defect Map - 필터 공정 콤보 조회
     * @Method Name : selectFilterProcComboList
     * @remark
     * @Create Date: 2021.05.24
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.24.     김진현        최초  생성
      *
     */
    public void selectFilterProcComboList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectNoInputMainList
     * @brief : 품목별 Defect Map - 필터 품목코드 미선택시 메인 조회
     * @Method Name : selectNoInputMainList
     * @remark
     * @Create Date: 2021.05.24
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.24.     김진현        최초  생성
      *
     */
    public void selectNoInputMainList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectInputMainList
     * @brief : 품목별 Defect Map - 품목코드 입력시 메인 조회
     * @Method Name : selectInputMainList
     * @remark
     * @Create Date: 2021.05.25
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.25.     김진현        최초  생성
      *
     */
    public void selectInputMainList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectDefectMapList
     * @brief : 품목별 Defect Map - 해석 (Raw Data, 차트, 이미지 조회)
     * @Method Name : selectDefectMapList
     * @remark
     * @Create Date: 2021.05.25
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.25.     김진현        최초  생성
      *
     */
    public void selectDefectMapList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectProcDefectMapDefectImgPointList
     * @brief : 품목별 Defect Map - 필터 Layer 동적 이미지 포인트 정보 재조회
     * @Method Name : selectProcDefectMapDefectImgPointList
     * @remark
     * @Create Date: 2021.05.28
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.28.     김진현        최초  생성
      *
     */
    public void selectProcDefectMapDefectImgPointList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectProcDefectMapPanelFilterList
     * @brief : 품목별 Defect Map - 선택된 (이미지 설정된 Layer, Lot 정보에 따른 생성해야 할 판넬 정보 조회) 
     * @Method Name : selectProcDefectMapPanelFilterList
     * @remark
     * @Create Date: 2021.05.31
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.05.31.     김진현        최초  생성
      *
     */
    public void selectProcDefectMapPanelFilterList(UiMapDto dto) throws Exception;
    
    
	
 }