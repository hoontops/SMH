package smh.qam.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.commons.TxnHistKey;

/**
* @file        : QAMPopupServiceImpl.java
* @Package     : smh.qam.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAMPopupServiceImpl
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
@Service
public class QAMPopupServiceImpl extends AbstractNbdfService implements QAMPopupService {

    public static final String NAMESPACE = "smh.qam.dao.QAMPopupDao";
    public static final String NAMESPACE_CMF = "smh.qam.dao.CMFM01000Dao";

    @Autowired
    private GeneralDao generalDao;
    
    /**
    * @fn          : selectDefectcodePopup
    * @brief       : (Override method) 불량유형 조회(팝업)
    * @Method Name : selectDefectcodePopup
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectDefectcodePopup(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectDefectcodePopup(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDefectcodePopup", param));
    }

    /**
    * @fn          : selectQcsegmentidPopup
    * @brief       : (Override method) 품질공정 조회(팝업)
    * @Method Name : selectQcsegmentidPopup
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectQcsegmentidPopup(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectQcsegmentidPopup(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectQcsegmentidPopup", param));
    }

    /**
    * @fn          : selectProcesssegmentclassPopup
    * @brief       : (Override method) 공정그룹 조회(팝업)
    * @Method Name : selectProcesssegmentclassPopup
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectProcesssegmentclassPopup(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectProcesssegmentclassPopup(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectProcesssegmentclassPopup", param));
    }

    /**
    * @fn          : selectInspmethodPopup
    * @brief       : (Override method) 검사방법목록  조회(팝업)
    * @Method Name : selectInspitemList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectInspmethodPopup(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectInspmethodPopup(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectInspmethodPopup", param));
    }

    /**
    * @fn          : selectInspitemPopup
    * @brief       : (Override method) 검사항목목록 조회(팝업)
    * @Method Name : selectInspitemPopup
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectInspitemPopup(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectInspitemPopup(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectInspitemPopup", param));
    }

    /**
    * @fn          : selectEquipmentPopup
    * @brief       : (Override method) 설비 조회(팝업)
    * @Method Name : selectEquipmentdefectcodeList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectEquipmentPopup(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectEquipmentPopup(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectEquipmentPopup", param));
    }

    /**
    * @fn          : selectProductDefPopup
    * @brief       : (Override method) 품목코드 조회(팝업)
    * @Method Name : selectProductDefPopup
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectProductDefPopup(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectProductDefPopup(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectProductDefPopup", param));
    }

    /**
    * @fn          : selectVendorList
    * @brief       : (Override method) 거래처 조회(팝업)
    * @Method Name : selectVendorList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectVendorList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectVendorList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectVendorList", param));
    }

    /**
    * @fn          : selectCodeList
    * @brief       : (Override method) 코드 조회
    * @Method Name : selectCodeList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectCodeList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectCodeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectCodeList", param));
    }

    /**
    * @fn          : selectProcessSegmentClassList
    * @brief       : (Override method) 공정 리스트를 조회한다.
    * @Method Name : selectProcessSegmentClassList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectProcessSegmentClassList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectProcessSegmentClassList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectProcessSegmentClassList", param));
    }

    /**
    * @fn          : selectOSPInspectionDefectCodeToInspList
    * @brief       : (Override method) 불량코드 조회(팝업)
    * @Method Name : selectOSPInspDefectCodeList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectOSPInspectionDefectCodeToInspList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectOSPInspectionDefectCodeToInspList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectOSPInspectionDefectCodeToInspList", param));
    }

    /**
    * @fn          : selectTransitAreaList
    * @brief       : (Override method) 작업장 조회
    * @Method Name : selectTransitAreaList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectTransitAreaList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectTransitAreaList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectTransitAreaList", param));
    }

    /**
    * @fn          : selectDefectCodeByProcessList
    * @brief       : (Override method) 불량코드 조회(팝업)
    * @Method Name : selectDefectCodeByProcessList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectDefectCodeByProcessList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectDefectCodeByProcessList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDefectCodeByProcessList", param));
    }

    /**
    * @fn          : selectGetReasonConsumableList
    * @brief       : (Override method) 원인품목 조회(팝업)
    * @Method Name : selectGetReasonConsumableList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectGetReasonConsumableList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectGetReasonConsumableList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectGetReasonConsumableList", param));
    }

    /**
    * @fn          : selectGetDefectReasonConsumableLot
    * @brief       : (Override method) 원인 자재 LOTID 조회(팝업)
    * @Method Name : selectGetDefectReasonConsumableLot
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectGetDefectReasonConsumableLot(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectGetDefectReasonConsumableLot(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectGetDefectReasonConsumableLot", param));
    }

    /**
    * @fn          : selectGetDefectReasonProcesssegment
    * @brief       : (Override method) 원인공정 조회(팝업)
    * @Method Name : selectGetDefectReasonProcesssegment
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectGetDefectReasonProcesssegment(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectGetDefectReasonProcesssegment(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectGetDefectReasonProcesssegment", param));
    }

    /**
    * @fn          : selectUserList
    * @brief       : (Override method) 사용자 조회(팝업)
    * @Method Name : selectUserList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectUserList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectUserList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectUserList", param));
    }

    /**
    * @fn          : selectAuthorityUserUseAreaList
    * @brief       : (Override method) 작업장 조회
    * @Method Name : selectAuthorityUserUseAreaList
    * @remark      : 해당 유저의 통제권한에 따라 작업장을 조회한다.(제한관리자 - 작업장이 매핑된 작업장만, 현장관리자와 생산관리자 - 전부)
* @see smh.qam.service.QAMPopupService#selectAuthorityUserUseAreaList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectAuthorityUserUseAreaList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectAuthorityUserUseAreaList", param));
    }

    /**
    * @fn          : selectProductListByQcmList
    * @brief       : (Override method) 품목 조회
    * @Method Name : selectProductListByQcmList
    * @remark      : 해당 유저의 통제권한에 따라 작업장을 조회한다.(제한관리자 - 작업장이 매핑된 작업장만, 현장관리자와 생산관리자 - 전부)
* @see smh.qam.service.QAMPopupService#selectProductListByQcmList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectProductListByQcmList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectProductListByQcmList", param));
    }

    /**
    * @fn          : selectDefectAreaList
    * @brief       : (Override method) 인수인계작업장 조회
    * @Method Name : selectDefectAreaList
    * @remark      : 불량을 인수할 수 있는 작업장을 검색한다.(불량보관처)
* @see smh.qam.service.QAMPopupService#selectDefectAreaList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectDefectAreaList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDefectAreaList", param));
    }

    /**
    * @fn          : selectUserAuthorityPlantList
    * @brief       : (Override method) plantId 조회
    * @Method Name : selectUserAuthorityPlantList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectUserAuthorityPlantList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectUserAuthorityPlantList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectUserAuthorityPlantList", param));
    }
    
    /**
    * @fn          : selectGetUserAuthorityPlantList
    * @brief       : (Override method) plantId 조회
    * @Method Name : selectGetUserAuthorityPlantList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectGetUserAuthorityPlantList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectGetUserAuthorityPlantList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectGetUserAuthorityPlantList", param));
    }

    /**
    * @fn          : selectAreaListByQcmList
    * @brief       : (Override method) 작업장 리스트 조회
    * @Method Name : selectAreaListByQcmList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectAreaListByQcmList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectAreaListByQcmList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectAreaListByQcmList", param));
    }

    /**
    * @fn          : selectDefectAndQcsegmentList
    * @brief       : (Override method) Process 4-Step Detail User Control에서 불량 탭의 불량코드 팝업 데이터를 조회 한다.
    * @Method Name : selectDefectAndQcsegmentList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectDefectAndQcsegmentList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectDefectAndQcsegmentList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDefectAndQcsegmentList", param));
    }

    /**
    * @fn          : selectSmallProcesssegmentListByQcmList
    * @brief       : (Override method) 표준공정 리스트를 조회한다.
    * @Method Name : selectSmallProcesssegmentListByQcmList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectSmallProcesssegmentListByQcmList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectSmallProcesssegmentListByQcmList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectSmallProcesssegmentListByQcmList", param));
    }    

    /**
    * @fn          : selectAreaList
    * @brief       : (Override method) 작업장 리스트를 조회한다.
    * @Method Name : selectAreaList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectAreaList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectAreaList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectAreaList", param));
    }

    /**
    * @fn          : selectTwoProcessSegmentClassList
    * @brief       : (Override method) 공정 리스트를 조회한다.
    * @Method Name : selectTwoProcessSegmentClassList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectTwoProcessSegmentClassList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectTwoProcessSegmentClassList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        param.put("PROCESSSEGMENTCLASSTYPE", "TopProcessSegmentClass");
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectProcessSegmentClassList", param), "output1");
        param.put("PROCESSSEGMENTCLASSTYPE", "MiddleProcessSegmentClass");
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectProcessSegmentClassList", param), "output2");
    }
    
    /**
    * @fn          : selectLotProcessDefectList
    * @brief       : (Override method) LOTID의 공정이력에 대한 불량코드 내역
    * @Method Name : selectLotProcessDefectList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectLotProcessDefectList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectLotProcessDefectList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectLotProcessDefectList", param));
    }

    /**
    * @fn          : selectProcessSegmentByYieldList
    * @brief       : (Override method) 검사공정지정
    * @Method Name : selectProcessSegmentByYieldList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectProcessSegmentByYieldList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectProcessSegmentByYieldList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectProcessSegmentByYieldList", param));
    }

    /**
    * @fn          : selectProductListByYieldStatusList
    * @brief       : (Override method) 픔목 리스트
    * @Method Name : selectProductListByYieldStatusList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectProductListByYieldStatusList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectProductListByYieldStatusList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectProductListByYieldStatusList", param));
    }

    /**
    * @fn          : selectYieldLotList
    * @brief       : (Override method) LOT 리스트
    * @Method Name : selectYieldLotList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectYieldLotList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectYieldLotList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectYieldLotList", param));
    }

    /**
    * @fn          : selectYieldRootLotList
    * @brief       : (Override method) Root LOT 리스트
    * @Method Name : selectYieldRootLotList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectYieldRootLotList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectYieldRootLotList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectYieldRootLotList", param));
    }

    /**
    * @fn          : selectProductionOrderIdList
    * @brief       : (Override method) S/O번호
    * @Method Name : selectProductionOrderIdList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectProductionOrderIdList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectProductionOrderIdList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectProductionOrderIdList", param));
    }

    /**
    * @fn          : selectCustomerByYieldList
    * @brief       : (Override method) 고객정보
    * @Method Name : selectCustomerByYieldList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectCustomerByYieldList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectCustomerByYieldList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectCustomerByYieldList", param));
    }

    /**
    * @fn          : selectMultiComboList
    * @brief       : (Override method) Site리스트(멀티콤보용)
    * @Method Name : selectMultiComboList
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectMultiComboList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectMultiComboList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectMultiComboList", param));
    }

    /**
    * @fn          : selectSiteWorkTime
    * @brief       : (Override method) Site 작업시작시간 조회
    * @Method Name : selectSiteWorkTime
    * @remark      : 상세설명
* @see smh.qam.service.QAMPopupService#selectSiteWorkTime(com.nbdf.commons.ui.vo.UiMapDto)
    */
    @Override
    public void selectSiteWorkTime(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectSiteWorkTime", param));
    }







    // ------------------------------------------------------------
 	// [권혜영] 추가 함수
 	// ------------------------------------------------------------


    /**
    * @fn          : selectCapacityTypeList
    * @brief       : (Override method) 자격구분 정보 조회
    * @Method Name : selectCapacityTypeList
    * @remark
* @see smh.qam.service.QAMPopupService#selectCapacityTypeList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectCapacityTypeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectGetCapacityTypeList", param));
    }

    /**
     * @fn		:selectQamCustomQuery
     * @brief (Override method) (공통 넥사크로 Lookup API 방식)
     * @remark 
     * @see smh.tom.service.QAMPopupService#selectQamCustomQuery(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectQamCustomQuery(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        String sqlId = (String)param.get("SQL_ID");
        
        if(!"".equals(sqlId)){
        	putDataSetMap(dto, generalDao.addSelect(NAMESPACE + "."+sqlId, param));
        } else {
        	throw new BizException("Error : Not Exists SQL_ID");
        }        
    }

    /**
     * @fn
     * @brief (Override method) 작업장에 매핑된 유저정보를 조회
     * @remark 
     * @see smh.qam.service.QAMPopupService#selectUserListByInspector(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectUserListByInspector(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectUserListByInspector", param));
    }
    
    /**
     * @fn
     * @brief (Override method) TXN HistKey 조회
     * @remark 
     * @see smh.qam.service.QAMPopupService#selectTxnHistKey(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectTxnHistKey(UiMapDto dto) throws Exception {
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("TXNHISTKEY", TxnHistKey.getTxnHistKey());
        
        putDataSetMap(dto, map);
    }
    
    /**
     * @fn
     * @brief (Override method) 불량코드 리스트
     * @remark 
     * @see smh.qam.service.QAMPopupService#selectDefectCodeList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectDefectCodeList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectDefectCodeList", param));
    }
    
    /**
     * @fn
     * @brief (Override method) 첨부파일 정보 조회
     * @remark 
     * @see smh.qam.service.QAMPopupService#selectAtchFiles(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectAtchFiles(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectAtchFiles", param));
    }
    
    /**
     * @fn
     * @brief (Override method) site 조회
     * @remark 
     * @see smh.qam.service.QAMPopupService#selectPlantListByQcm(com.nbdf.commons.ui.vo.UiMapDto)
     */
    public void selectPlantListByQcm(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectPlantListByQcm", param));
    }
        
    /**
     * @fn
     * @brief (Override method) 표준공정
     * @remark 
     * @see smh.qam.service.QAMPopupService#selectProcessSegmentList(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectProcessSegmentList(UiMapDto dto) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectProcessSegmentList", param));
    }

}