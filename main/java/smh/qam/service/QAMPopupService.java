package smh.qam.service;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

import com.nbdf.commons.ui.vo.UiMapDto;


/**
* @file        : QAMPopupService.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAMPopupService
* @Company     : Built1
* @Create Date : 2021.03.22
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.22  yanghee.kim    최초  생성
*
*/
public interface QAMPopupService {

    /**
    * @fn          : selectDefectcodePopup
    * @brief       : 불량유형 조회(팝업)
    * @Method Name : selectDefectcodePopup
    * @remark
    * @Create Date : 2021.03.04
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.04  yanghee.kim    최초  생성
    *
    */
    public void selectDefectcodePopup(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectQcsegmentidPopup
    * @brief       : 품질공정 조회(팝업)
    * @Method Name : selectQcsegmentidPopup
    * @remark
    * @Create Date : 2021.03.04
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.04  yanghee.kim    최초  생성
    *
    */
    public void selectQcsegmentidPopup(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectProcesssegmentclassPopup
    * @brief       : 공정그룹 조회(팝업)
    * @Method Name : selectProcesssegmentclassPopup
    * @remark
    * @Create Date : 2021.03.08
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.08  yanghee.kim    최초  생성
    *
    */
    public void selectProcesssegmentclassPopup(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectInspmethodPopup
    * @brief       : 검사방법목록 조회(팝업)
    * @Method Name : selectInspmethodPopup
    * @remark
    * @Create Date : 2021.03.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.13  yanghee.kim    최초  생성
    *
    */
    public void selectInspmethodPopup(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectInspitemPopup
    * @brief       : 검사항목목록 조회(팝업)
    * @Method Name : selectInspitemPopup
    * @remark
    * @Create Date : 2021.03.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.13  yanghee.kim    최초  생성
    *
    */
    public void selectInspitemPopup(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectEquipmentPopup
    * @brief       : 설비 조회(팝업)
    * @remark
    * @Create Date : 2021.03.19
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.19  yanghee.kim    최초  생성
    *
    */
	public void selectEquipmentPopup(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectVendorList
    * @brief       : 거래처 조회(팝업)
    * @remark
    * @Create Date : 2021.03.23
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.23  yanghee.kim    최초  생성
    *
    */
    public void selectVendorList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectProductDefPopup
    * @brief       : 품목코드 조회(팝업)
    * @remark
    * @Create Date : 2021.03.24
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.24  yanghee.kim    최초  생성
    *
    */
    public void selectProductDefPopup(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectCodeList
    * @brief       : 코드 조회
    * @remark
    * @Create Date : 2021.03.29
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.29  yanghee.kim    최초  생성
    *
    */
    public void selectCodeList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectProcessSegmentClassList
    * @brief       : 공정 조회
    * @remark
    * @Create Date : 2021.03.29
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.29  yanghee.kim    최초  생성
    *
    */
    public void selectProcessSegmentClassList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectOSPInspectionDefectCodeToInspList
    * @brief       : 불량코드 조회(팝업)
    * @remark
    * @Create Date : 2021.03.29
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.29  yanghee.kim    최초  생성
    *
    */
    public void selectOSPInspectionDefectCodeToInspList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectTransitAreaList
    * @brief       : 작업장 조회
    * @remark
    * @Create Date : 2021.03.30
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.30  yanghee.kim    최초  생성
    *
    */
    public void selectTransitAreaList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectDefectCodeByProcessList
    * @brief       : 불량코드 조회(팝업)
    * @remark
    * @Create Date : 2021.03.31
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.31  yanghee.kim    최초  생성
    *
    */
    public void selectDefectCodeByProcessList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectGetReasonConsumableList
    * @brief       : 원인품목 조회(팝업)
    * @remark
    * @Create Date : 2021.03.31
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.31  yanghee.kim    최초  생성
    *
    */
    public void selectGetReasonConsumableList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectGetDefectReasonConsumableLot
    * @brief       : 원인 자재 LOTID 조회(팝업)
    * @remark
    * @Create Date : 2021.03.31
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.31  yanghee.kim    최초  생성
    *
    */
    public void selectGetDefectReasonConsumableLot(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectGetDefectReasonProcesssegment
    * @brief       : 원인공정 조회(팝업)
    * @remark
    * @Create Date : 2021.03.31
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.31  yanghee.kim    최초  생성
    *
    */
    public void selectGetDefectReasonProcesssegment(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectUserList
    * @brief       : 사용자 조회(팝업)
    * @remark
    * @Create Date : 2021.04.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.01  yanghee.kim    최초  생성
    *
    */
    public void selectUserList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectAuthorityUserUseAreaList
    * @brief       : 작업장 조회
    * @remark
    * @Create Date : 2021.04.06
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.06  yanghee.kim    최초  생성
    *
    */
    public void selectAuthorityUserUseAreaList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectProductListByQcmList
    * @brief       : 품목 조회
    * @remark
    * @Create Date : 2021.04.06
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.06  yanghee.kim    최초  생성
    *
    */
    public void selectProductListByQcmList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectDefectAreaList
    * @brief       : 인수인계작업장 조회
    * @remark
    * @Create Date : 2021.04.06
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.06  yanghee.kim    최초  생성
    *
    */
    public void selectDefectAreaList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectUserAuthorityPlantList
    * @brief       : plantId 조회
    * @remark
    * @Create Date : 2021.04.07
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.07  yanghee.kim    최초  생성
    *
    */
    public void selectUserAuthorityPlantList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectGetUserAuthorityPlantList
    * @brief       : plantId 조회
    * @remark
    * @Create Date : 2021.04.07
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.07  yanghee.kim    최초  생성
    *
    */
    public void selectGetUserAuthorityPlantList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectAreaListByQcmList
    * @brief       : 작업장 리스트 조회
    * @remark
    * @Create Date : 2021.04.11
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.11  yanghee.kim    최초  생성
    *
    */
    public void selectAreaListByQcmList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectDefectAndQcsegmentList
    * @brief       : Process 4-Step Detail User Control에서 불량 탭의 불량코드 팝업 데이터를 조회 한다.
    * @remark
    * @Create Date : 2021.04.12
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.12  yanghee.kim    최초  생성
    *
    */
    public void selectDefectAndQcsegmentList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectSmallProcesssegmentListByQcmList
    * @brief       : 표준공정 리스트를 조회한다.
    * @remark
    * @Create Date : 2021.04.21
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.21  yanghee.kim    최초  생성
    *
    */
    public void selectSmallProcesssegmentListByQcmList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectAreaList
    * @brief       : 작업장 리스트를 조회한다.
    * @remark
    * @Create Date : 2021.05.04
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.04  yanghee.kim    최초  생성
    *
    */
    public void selectAreaList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectTwoProcessSegmentClassList
    * @brief       : 공정 조회(대공정, 중공정)
    * @remark
    * @Create Date : 2021.05.08
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.08  yanghee.kim    최초  생성
    *
    */
    public void selectTwoProcessSegmentClassList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectLotProcessDefectList
    * @brief       : LOTID의 공정이력에 대한 불량코드 내역
    * @remark
    * @Create Date : 2021.05.14
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.14  yanghee.kim    최초  생성
    *
    */
    public void selectLotProcessDefectList(UiMapDto dto) throws Exception;


    /**
    * @fn          : selectProcessSegmentByYieldList
    * @brief       : 검사공정지정
    * @remark
    * @Create Date : 2021.05.30
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.30  yanghee.kim    최초  생성
    *
    */
    public void selectProcessSegmentByYieldList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectProductListByYieldStatusList
    * @brief       : 품목 리스트
    * @remark
    * @Create Date : 2021.05.30
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.30  yanghee.kim    최초  생성
    *
    */
    public void selectProductListByYieldStatusList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectYieldLotList
    * @brief       : LOT 리스트
    * @remark
    * @Create Date : 2021.05.30
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.30  yanghee.kim    최초  생성
    *
    */
    public void selectYieldLotList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectYieldRootLotList
    * @brief       : Root LOT 리스트
    * @remark
    * @Create Date : 2021.05.30
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.30  yanghee.kim    최초  생성
    *
    */
    public void selectYieldRootLotList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectProductionOrderIdList
    * @brief       : S/O번호
    * @remark
    * @Create Date : 2021.05.30
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.30  yanghee.kim    최초  생성
    *
    */
    public void selectProductionOrderIdList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectCustomerByYieldList
    * @brief       : 고객정보
    * @remark
    * @Create Date : 2021.05.30
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.30  yanghee.kim    최초  생성
    *
    */
    public void selectCustomerByYieldList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectMutiComboList
    * @brief       : Site리스트(멀티콤보용)
    * @remark
    * @Create Date : 2021.05.31
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.31  yanghee.kim    최초  생성
    *
    */
    public void selectMultiComboList(UiMapDto dto) throws Exception;

    /**
    * @fn          : selectSiteWorkTime
    * @brief       : Site 작업시작시간 조회
    * @remark
    * @Create Date : 2021.07.07
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.07.07  yanghee.kim    최초  생성
    *
    */
    public void selectSiteWorkTime(UiMapDto dto) throws Exception;



    // ------------------------------------------------------------
 	// [권혜영] 추가 함수
 	// ------------------------------------------------------------

    /**
     * @fn : selectCapacityTypeList
     * @brief : 자격구분 정보 조회
     * @Method Name : selectCapacityTypeList
     * @remark
     * @Create Date: 2021.4.5
     * @Author: 권혜영
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021.4.5.       권혜영     최초  생성
      *
     */
     public void selectCapacityTypeList(UiMapDto dto) throws Exception;

 	/**
     * @fn          : selectQamCustomQuery
     * @brief       :  (공통 넥사크로 Lookup API 방식)
     * @Method Name : selectQamCustomQuery
     * @remark
     * @Create Date : 2021.04.19
     * @Author      : 권혜영
     * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일         수정자        수정내용
     *   ----------  ------------  ----------
     *   2021.04.19  권혜영    최초  생성
     *
     */
     public void selectQamCustomQuery(UiMapDto dto) throws Exception;

    /**
	* @fn : selectUserListByInspector
	* @brief : 작업장에 매핑된 유저정보를 조회 조회
	* @Method Name : selectUserListByInspector
	* @remark
	* @Create Date: 2021.04.26
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.04.26.       권혜영     최초  생성
	*
	*/
	public void selectUserListByInspector(UiMapDto dto) throws Exception;

	/**
	* @fn : selectTxnHistKey
	* @brief : TXN HistKey 조회 조회
	* @Method Name : selectTxnHistKey
	* @remark
	* @Create Date: 2021.04.29
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.04.29.       권혜영     최초  생성
	*
	*/
	public void selectTxnHistKey(UiMapDto dto) throws Exception;

	/**
	* @fn : selectDefectCodeList
	* @brief : 불량코드 리스트 조회
	* @Method Name : selectDefectCodeList
	* @remark
	* @Create Date: 2021.05.04
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.04.       권혜영     최초  생성
	*
	*/
	public void selectDefectCodeList(UiMapDto dto) throws Exception;

	/**
	* @fn : selectAtchFiles
	* @brief : 첨부파일 정보 조회 조회
	* @Method Name : selectAtchFiles
	* @remark
	* @Create Date: 2021.05.06
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.06.       권혜영     최초  생성
	*
	*/
	public void selectAtchFiles(UiMapDto dto) throws Exception;
	
	/**
	* @fn : selectPlantListByQcm
	* @brief : site 조회 
	* @Method Name : selectPlantListByQcm
	* @remark
	* @Create Date: 2021.05.13
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.05.13.       권혜영     최초  생성
	*
	*/
	public void selectPlantListByQcm(UiMapDto dto) throws Exception;
	
	/**
	* @fn : selectProcessSegmentList
	* @brief : 표준공정 조회
	* @Method Name : selectProcessSegmentList
	* @remark
	* @Create Date: 2021.06.02
	* @Author: 권혜영
	* @File Version: v1.0
	*
	* << 개정이력(Modification Information) >>
	*
	*     수정일      수정자   수정내용
	*   ------------  ------  ----------
	*   2021.06.02.       권혜영     최초  생성
	*
	*/
	public void selectProcessSegmentList(UiMapDto dto) throws Exception;

}