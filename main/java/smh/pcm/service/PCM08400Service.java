package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: PCM08400Service.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM08400Service
 * @Company		: Built1
 * @Create Date	: 2021.3.15
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 3. 15.  김진현      최초  생성 
 */
public interface PCM08400Service {
	
	/**
     * @fn : selectPlantList
     * @brief : 포장 실적 관리 (Site 콤보)조회
     * @Method Name : selectPlantList
     * @remark
     * @Create Date: 2021.3.15
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.15.     김진현        최초  생성
      *
     */
	public void selectPlantList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectTypeList
     * @brief : 제품 구분 조회(포장 실적 조회 - 품목코드 팝업)
     * @Method Name : selectTypeList
     * @remark
     * @Create Date: 2021.3.15
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.15.     김진현        최초  생성
      *
     */
	public void selectTypeList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectProductDefinitionList
     * @brief : 품목코드 팝업 조회(포장 실적 조회)
     * @Method Name : selectProductDefinitionList
     * @remark
     * @Create Date: 2021.3.15
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.15.     김진현        최초  생성
      *
     */
	public void selectProductDefinitionList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectAreaListByAuthorityList
     * @brief : 작업장ID 조회(사용자 권한별)
     * @Method Name : selectAreaListByAuthorityList
     * @remark
     * @Create Date: 2021.3.15
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.15.     김진현        최초  생성
      *
     */
	public void selectAreaListByAuthorityList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectLotIdList
     * @brief : Lot No 팝업 메인 조회(포장 실적 조회)
     * @Method Name : selectLotIdList
     * @remark
     * @Create Date: 2021.3.15
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.15.     김진현        최초  생성
      *
     */
	public void selectLotIdList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectProductionOrderIdListOfLotInput
     * @brief : 포장실적 조회 - Lot No - 품목 팝업 조회 
     * @Method Name : selectProductionOrderIdListOfLotInput
     * @remark
     * @Create Date: 2021.3.15
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.15.     김진현        최초  생성
      *
     */
	public void selectProductionOrderIdListOfLotInput(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectProcessSegmentList
     * @brief : 포장 실적 조회 (Lot No. 선택 팝업의 공정 팝업)
     * @Method Name : selectProcessSegmentList
     * @remark
     * @Create Date: 2021.3.16
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.16.     김진현        최초  생성
      *
     */
	public void selectProcessSegmentList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : SelectPackingFinishedList
     * @brief : 포장 실적 조회 (포장 작업 리스트 - 메인조회)
     * @Method Name : SelectPackingFinishedList
     * @remark
     * @Create Date: 2021.3.16
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.16.     김진현        최초  생성
      *
     */
	public void SelectPackingFinishedList(UiMapDto dto) throws Exception;
	
	
	/**
     * @fn : SelectPackingLotList
     * @brief : 포장 실적 조회 (포장 작업 리스트 - 상세조회)
     * @Method Name : SelectPackingLotList
     * @remark
     * @Create Date: 2021.3.16
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.16.     김진현        최초  생성
      *
     */
	public void SelectPackingLotList(UiMapDto dto) throws Exception;
	
	/******************************************************************************************
  	 *  재포장 완료 조회
  	 ******************************************************************************************/
	/**
     * @fn : selectRePackCompList
     * @brief : 재포장 완료 조회 list
     * @Method Name : selectRePackCompList
     * @remark
     * @Create Date: 2021.04.13
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.13.     김진현        최초  생성
      *
     */
	public void selectRePackCompList(UiMapDto dto) throws Exception;
	
 }