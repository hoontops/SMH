package smh.dfm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: DFM00400Service.java
 * @Package		: smh.dfm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: DFM00200Service
 * @Company		: Built1
 * @Create Date	: 2021.06.01
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 06. 01.  김진현      최초  생성 
 */
public interface DFM00400Service {
	
	/**
     * @fn : selectDefectMapLotList
     * @brief : Layer별 불량 현황 - [필터 - Lot No] 
     * @Method Name : selectDefectMapLotList
     * @remark
     * @Create Date: 2021.06.01
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.06.01.     김진현        최초  생성
      *
     */
    public void selectDefectMapLotList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectDefectMapProductList
     * @brief : Layer별 불량 현황 - [필터 - 품목코드] 
     * @Method Name : selectDefectMapProductList
     * @remark
     * @Create Date: 2021.06.02
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.06.02.     김진현        최초  생성
      *
     */
    public void selectDefectMapProductList(UiMapDto dto) throws Exception;
    
    
    /**
     * @fn : selectProductDefVersionByRate
     * @brief : Layer별 불량 현황 - [필터 - 품목 Rev] 
     * @Method Name : selectProductDefVersionByRate
     * @remark
     * @Create Date: 2021.06.02
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.06.02.     김진현        최초  생성
      *
     */
    public void selectProductDefVersionByRate(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectLayerByProductdef
     * @brief : Layer별 불량 현황 - [필터 - Layer 팝업]
     * @Method Name : selectLayerByProductdef
     * @remark
     * @Create Date: 2021.06.02
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.06.02.     김진현        최초  생성
      *
     */
    public void selectLayerByProductdef(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectDefectRateByLayerList
     * @brief : Layer별 불량 현황 - [메인 조회 raw data]
     * @Method Name : selectDefectRateByLayerList
     * @remark
     * @Create Date: 2021.06.02
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.06.02.     김진현        최초  생성
      *
     */
    public void selectDefectRateByLayerList(UiMapDto dto) throws Exception;
    
	
 }