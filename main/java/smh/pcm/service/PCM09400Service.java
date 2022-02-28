package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: PCM09400Service.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM09400Service
 * @Company		: Built1
 * @Create Date	: 2021.3.10
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 3. 10.  김진현      최초  생성 
 */
public interface PCM09400Service {
	
	/**
     * @fn : selectPcmProductItemGroupList
     * @brief : 포장 사양 관리 (품목코드 팝업)조회
     * @Method Name : selectPcmProductItemGroupList
     * @remark
     * @Create Date: 2021.3.10
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.10.     긴진현        최초  생성
      *
     */
	public void selectPcmProductItemGroupList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectCustomerList
     * @brief : 포장 사양 관리 (고객사 팝업)조회
     * @Method Name : selectCustomerList
     * @remark
     * @Create Date: 2021.3.10
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.10.     긴진현        최초  생성
      *
     */
	public void selectCustomerList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectPackagProductMstList
     * @brief : 포장 사양 관리 (고객 정보 메인 그리드)조회
     * @Method Name : selectPackagProductMstList
     * @remark
     * @Create Date: 2021.3.10
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.10.     김진현        최초  생성
      *
     */
	public void selectPackagProductMstList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectPackagProductSubList
     * @brief : 포장사양관리 (버튼 기준정보, 포장정보 sub 그리드) 조회
     * @Method Name : selectPackagProductSubList
     * @remark
     * @Create Date: 2021.3.11
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.11.     김진현        최초  생성
      *
     */
	public void selectPackagProductSubList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectMstDataClassId
     * @brief : 포장사양관리 (품목유형코드) 조회
     * @Method Name : selectMstDataClassId
     * @remark
     * @Create Date: 2021.3.11
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.11.     김진현        최초  생성
      *
     */
	public void selectMstDataClassId(UiMapDto dto) throws Exception;
	
	
	/**
     * @fn : selectPcmProductItemGroupListVer1
     * @brief : 품목코드 팝업 조회 (품목유형코드 활용) 조회 
     * @Method Name : selectPcmProductItemGroupListVer1
     * @remark
     * @Create Date: 2021.3.11
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.11.     김진현        최초  생성
      *
     */
	public void selectPcmProductItemGroupListVer1(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectPackagProductDupList
     * @brief : 저장전 db 중복 값 체크 및 next seq 조회
     * @Method Name : selectPackagProductDupList
     * @remark
     * @Create Date: 2021.3.11
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.12.     김진현        최초  생성
      *
     */
	public void selectPackagProductDupList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : savePackagProductList
     * @brief : 저장
     * @Method Name : savePackagProductList
     * @remark
     * @Create Date: 2021.3.11
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.12.     김진현        최초  생성
      *
     */
	public void savePackagProductList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectPackCustomerList
     * @brief : 고객사 정보 팝업 조회(조회조건) - 포장사양에 등록된 내용만 
     * @Method Name : selectPackCustomerList
     * @remark
     * @Create Date: 2021.04.12
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.12.     김진현        최초  생성
      *
     */
	public void selectPackCustomerList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : savePackagMstChk
     * @brief : 포장기준정보관리 - Mst 고객사 코드 중복 체크
     * @Method Name : savePackagMstChk
     * @remark
     * @Create Date: 2021. 07. 21
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021. 07. 21.     김진현        최초  생성
      *
     */
    public void savePackagMstChk(UiMapDto dto) throws Exception;
	
	
 }