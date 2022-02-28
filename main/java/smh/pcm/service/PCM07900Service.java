package smh.pcm.service;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * @file		: PCM07900Service.java
 * @Package		: smh.pcm.service
 * @Project name: IFC MES시스템 구축
 * @Type name	: PCM07900Service
 * @Company		: Built1
 * @Create Date	: 2021.3.18
 * @Author		: 김진현
 * @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일               수정자         수정내용
 *   ------------  ------  ----------
 *   2021. 3. 18.  김진현      최초  생성 
 */
public interface PCM07900Service {
	
	/**
     * @fn : selectCustPartNmList
     * @brief : 고객파트명 팝업 (사양정보에 등록된 내용 조회) - 고객pn, 고객모델명
     * @Method Name : selectCustPartNmList
     * @remark
     * @Create Date: 2021.3.26
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.26.     김진현        최초  생성
      *
     */
	public void selectCustPartNmList(UiMapDto dto) throws Exception; 
	
	
	/**
     * @fn : selectPlantAllList
     * @brief : 포장 실적 등록 출고지 All
     * @Method Name : selectPlantAllList
     * @remark
     * @Create Date: 2021.3.26
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.26.     김진현        최초  생성
      *
     */
	public void selectPlantAllList(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectCustomerSampleList
     * @brief : 고객사 정보 팝업 조회(조회조건) - 포장 실적 등록 sample 추가
     * @Method Name : selectCustomerSampleList
     * @remark
     * @Create Date: 2021.3.26
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.26.     김진현        최초  생성
      *
     */
	public void selectCustomerSampleList(UiMapDto dto) throws Exception;
	
	
	/**
     * @fn : selectBtnAndHeadInfo
     * @brief : 고객사 값 변경시 (버튼 / 그리드 활성화 정보 조회)
     * @Method Name : selectBtnAndHeadInfo
     * @remark
     * @Create Date: 2021.3.26
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.26.     김진현        최초  생성
      *
     */
	public void selectBtnAndHeadInfo(UiMapDto dto) throws Exception;
	
	

	/**
     * @fn : selectPackDtlInfo
     * @brief : 그리드 고객모델명 팝업창
     * @Method Name : selectPackDtlInfo
     * @remark
     * @Create Date: 2021.3.29
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.29.     김진현        최초  생성
      *
     */
	public void selectPackDtlInfo(UiMapDto dto) throws Exception;
	
	
	/**
     * @fn : selectPackLotInfo
     * @brief : 포장실적등록 - LOT조회
     * @Method Name : selectPackLotInfo
     * @remark
     * @Create Date: 2021.3.29
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.29.     김진현        최초  생성
      *
     */
	public void selectPackLotInfo(UiMapDto dto) throws Exception;
	
	/**
     * @fn : savePackLabel
     * @brief : 포장실적등록 - main 등록 저장
     * @Method Name : savePackLabel
     * @remark
     * @Create Date: 2021.3.31
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.3.31.     김진현        최초  생성
      *
     */
	public void savePackLabel(UiMapDto dto) throws Exception;
	
	
	/**
     * @fn : selectPackLabelMainList
     * @brief : 포장실적등록 - Main조회
     * @Method Name : selectPackLabelMainList
     * @remark
     * @Create Date: 2021.4.1
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.4.1.     김진현        최초  생성
      *
     */
	public void selectPackLabelMainList(UiMapDto dto) throws Exception;
	
	
	/**
     * @fn : selectPackLabelSubList
     * @brief : 포장실적등록 - SUB(Line, Lot)조회
     * @Method Name : selectPackLabelSubList
     * @remark
     * @Create Date: 2021.4.1
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.4.1.     김진현        최초  생성
      *
     */
	public void selectPackLabelSubList(UiMapDto dto) throws Exception;
	
	
	/**
     * @fn : savePackLabelUpdate
     * @brief : 포장실적등록 - 일괄등록 저장
     * @Method Name : savePackLabelUpdate
     * @remark
     * @Create Date: 2021.4.1
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.4.1.     김진현        최초  생성
      *
     */
	public void savePackLabelUpdate(UiMapDto dto) throws Exception;
	
	
	/**
     * @fn : selectPackInvNoList
     * @brief : 포장실적등록 - Inv No
     * @Method Name : selectPackInvNoList
     * @remark
     * @Create Date: 2021.4.1
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.4.1.     김진현        최초  생성
      *
     */
	public void selectPackInvNoList(UiMapDto dto) throws Exception;
	
	
	/**
     * @fn : savePackInvNo
     * @brief : 포장실적등록 - Inv No 저장
     * @Method Name : savePackInvNo
     * @remark
     * @Create Date: 2021.4.1
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.4.1.     김진현        최초  생성
      *
     */
	public void savePackInvNo(UiMapDto dto) throws Exception;
	
	/**
     * @fn : deletePackInvNo
     * @brief : 포장실적등록 - Inv No 일괄 삭제 저장
     * @Method Name : deletePackInvNo
     * @remark
     * @Create Date: 2021.4.3
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.4.3.     김진현        최초  생성
      *
     */
	public void deletePackInvNo(UiMapDto dto) throws Exception;
	
	
	/**
     * @fn : savePackDnoUpdate
     * @brief : 포장실적등록 - DNO 생성/취소
     * @Method Name : savePackDnoUpdate
     * @remark
     * @Create Date: 2021.4.5
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.4.5.     김진현        최초  생성
      *
     */
	public void savePackDnoUpdate(UiMapDto dto) throws Exception;
	
	
	/**
     * @fn : getPackUserGroupUserList
     * @brief : 포장 작업자, 검자사 (포장관리자 권한 있는 사람만 조회)
     * @Method Name : getPackUserGroupUserList
     * @remark
     * @Create Date: 2021.04.24
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.04.24.     김진현        최초  생성
      *
     */
	public void getPackUserGroupUserList(UiMapDto dto) throws Exception;
	
	
	
	
	/*******************************************************************************
  	 *   [이미지 테스트 용 ↓]
  	 ********************************************************************************/
    
	
	
	
	/**
     * @fn : selectImageHandV
     * @brief : 가로 세로
     * @Method Name : selectImageHandV
     * @remark
     * @Create Date: 2021. 3. 18
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021. 3. 18.     긴진현        최초  생성
      *
     */
	public void selectImageHandV(UiMapDto dto) throws Exception;
	
	
	/**
     * @fn : selectChartTest
     * @brief : 가로 세로
     * @Method Name : selectChartTest
     * @remark
     * @Create Date: 2021. 3. 18
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021. 3. 18.     긴진현        최초  생성
      *
     */
	public void selectChartTest(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectImageBlob
     * @brief : blob
     * @Method Name : selectImageBlob
     * @remark
     * @Create Date: 2021. 3. 23
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021. 3. 23.     긴진현        최초  생성
      *
     */
	public void selectImageBlob(UiMapDto dto) throws Exception;
	
	/**
     * @fn : saveLabelCount
     * @brief : 라벨 출력 후 count 
     * @Method Name : saveLabelCount
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
	public void saveLabelCount(UiMapDto dto) throws Exception;
	
	/**
     * @fn : selectPackInvNoQtyList
     * @brief : 포장,라벨 출력 - 인보이스 등록 팝업 (등록시 양품수량 조회)
     * @Method Name : selectPackInvNoQtyList
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
    public void selectPackInvNoQtyList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectInspectXoutList
     * @brief : 검사번호로 XOUT 정보 조회
     * @Method Name : selectInspectXoutList
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
    public void selectInspectXoutList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectXoutPackInfoList
     * @brief : 검사번호로 XOUT 정보 조회 후 포장 기준 정보 조회
     * @Method Name : selectXoutPackInfoList
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
    public void selectXoutPackInfoList(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectXoutPackInfoPopList
     * @brief : 검사번호로 XOUT 정보 조회 후 고객모델명 정보 여러건인 경우 
     * @Method Name : selectXoutPackInfoPopList
     * @remark
     * @Create Date: 2021.06.11
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.06.11.     김진현        최초  생성
      *
     */
    public void selectXoutPackInfoPopList(UiMapDto dto) throws Exception;
	
    
    /**
     * @fn : selectXoutPackInspInfoPopList
     * @brief : 포장라벨 - 인수된 LOT에 해당하는 검사번호 조회
     * @Method Name : selectXoutPackInspInfoPopList
     * @remark
     * @Create Date: 2021.06.30
     * @Author: 김진현
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일                    수정자        수정내용
      *   ------------  ------  ----------
      *   2021.06.30.     김진현        최초  생성
      *
     */
    public void selectXoutPackInspInfoPopList(UiMapDto dto) throws Exception;
	
 }