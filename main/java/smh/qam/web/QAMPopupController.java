package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAMPopupService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : QAMPopupController.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAMPopupController
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
@Controller
@RequestMapping(value = "/qampopup")
public class QAMPopupController extends AbstractWebController {

    @Autowired
    private QAMPopupService service;

    /**
    * @fn          : selectDefectcodePopup
    * @brief       : 불량유형 조회(팝업)
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
    @RequestMapping(value = "selectDefectcodePopup.do")
    public View selectDefectcodePopup(UiMapDto dto, Model model) throws Exception {
        service.selectDefectcodePopup(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectQcsegmentidPopup
    * @brief       : 품질공정 조회(팝업)
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
    @RequestMapping(value = "selectQcsegmentidPopup.do")
    public View selectQcsegmentidPopup(UiMapDto dto, Model model) throws Exception {
        service.selectQcsegmentidPopup(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectProcesssegmentclassPopup
    * @brief       : 공정그룹 조회(팝업)
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
    @RequestMapping(value = "selectProcesssegmentclassPopup.do")
    public View selectProcesssegmentclassPopup(UiMapDto dto, Model model) throws Exception {
        service.selectProcesssegmentclassPopup(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectEquipmentPopup.do")
    public View selectEquipmentPopup(UiMapDto dto, Model model) throws Exception {
        service.selectEquipmentPopup(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectInspmethodPopup
    * @brief       : 검사방법목록  조회(팝업)
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
    @RequestMapping(value = "selectInspmethodPopup.do")
    public View selectInspmethodPopup(UiMapDto dto, Model model) throws Exception {
        service.selectInspmethodPopup(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectInspitemPopup
    * @brief       : 검사항목목록  조회(팝업)
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
    @RequestMapping(value = "selectInspitemPopup.do")
    public View selectInspitemPopup(UiMapDto dto, Model model) throws Exception {
        service.selectInspitemPopup(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectVendorList.do")
    public View selectVendorList(UiMapDto dto, Model model) throws Exception {
        service.selectVendorList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectProductDefPopup.do")
    public View selectProductDefPopup(UiMapDto dto, Model model) throws Exception {
        service.selectProductDefPopup(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectCodeList.do")
    public View selectCodeList(UiMapDto dto, Model model) throws Exception {
        service.selectCodeList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectProcessSegmentClassList.do")
    public View selectProcessSegmentClassList(UiMapDto dto, Model model) throws Exception {
        service.selectProcessSegmentClassList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectOSPInspectionDefectCodeToInspList.do")
    public View selectOSPInspectionDefectCodeToInspList(UiMapDto dto, Model model) throws Exception {
        service.selectOSPInspectionDefectCodeToInspList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectTransitAreaList.do")
    public View selectTransitAreaList(UiMapDto dto, Model model) throws Exception {
        service.selectTransitAreaList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectDefectCodeByProcessList.do")
    public View selectDefectCodeByProcessList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectCodeByProcessList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectGetReasonConsumableList.do")
    public View selectGetReasonConsumableList(UiMapDto dto, Model model) throws Exception {
        service.selectGetReasonConsumableList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectGetDefectReasonConsumableLot.do")
    public View selectGetDefectReasonConsumableLot(UiMapDto dto, Model model) throws Exception {
        service.selectGetDefectReasonConsumableLot(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectGetDefectReasonProcesssegment.do")
    public View selectGetDefectReasonProcesssegment(UiMapDto dto, Model model) throws Exception {
        service.selectGetDefectReasonProcesssegment(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectUserList.do")
    public View selectUserList(UiMapDto dto, Model model) throws Exception {
        service.selectUserList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectAuthorityUserUseAreaList.do")
    public View selectAuthorityUserUseAreaList(UiMapDto dto, Model model) throws Exception {
        service.selectAuthorityUserUseAreaList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectProductListByQcmList.do")
    public View selectProductListByQcmList(UiMapDto dto, Model model) throws Exception {
        service.selectProductListByQcmList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectDefectAreaList.do")
    public View selectDefectAreaList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectAreaList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectUserAuthorityPlantList.do")
    public View selectUserAuthorityPlantList(UiMapDto dto, Model model) throws Exception {
        service.selectUserAuthorityPlantList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectGetUserAuthorityPlantList.do")
    public View selectGetUserAuthorityPlantList(UiMapDto dto, Model model) throws Exception {
        service.selectGetUserAuthorityPlantList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectAreaListByQcmList.do")
    public View selectAreaListByQcmList(UiMapDto dto, Model model) throws Exception {
        service.selectAreaListByQcmList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectDefectAndQcsegmentList.do")
    public View selectDefectAndQcsegmentList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectAndQcsegmentList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectSmallProcesssegmentListByQcmList.do")
    public View selectSmallProcesssegmentListByQcmList(UiMapDto dto, Model model) throws Exception {
        service.selectSmallProcesssegmentListByQcmList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectAreaList.do")
    public View selectAreaList(UiMapDto dto, Model model) throws Exception {
        service.selectAreaList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectTwoProcessSegmentClassList
    * @brief       : 공정 조회공정 조회(대공정, 중공정)
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
    @RequestMapping(value = "selectTwoProcessSegmentClassList.do")
    public View selectTwoProcessSegmentClassList(UiMapDto dto, Model model) throws Exception {
        service.selectTwoProcessSegmentClassList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectLotProcessDefectList.do")
    public View selectLotProcessDefectList(UiMapDto dto, Model model) throws Exception {
        service.selectLotProcessDefectList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectProcessSegmentByYieldList.do")
    public View selectProcessSegmentByYieldList(UiMapDto dto, Model model) throws Exception {
        service.selectProcessSegmentByYieldList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectProductListByYieldStatusList.do")
    public View selectProductListByYieldStatusList(UiMapDto dto, Model model) throws Exception {
        service.selectProductListByYieldStatusList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectYieldLotList.do")
    public View selectYieldLotList(UiMapDto dto, Model model) throws Exception {
        service.selectYieldLotList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectYieldRootLotList.do")
    public View selectYieldRootLotList(UiMapDto dto, Model model) throws Exception {
        service.selectYieldRootLotList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectProductionOrderIdList.do")
    public View selectProductionOrderIdList(UiMapDto dto, Model model) throws Exception {
        service.selectProductionOrderIdList(dto);
        return apply(dto, model);
    }

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
    @RequestMapping(value = "selectCustomerByYieldList.do")
    public View selectCustomerByYieldList(UiMapDto dto, Model model) throws Exception {
        service.selectCustomerByYieldList(dto);
        return apply(dto, model);
    }


    /**
    * @fn          : selectMultiComboList
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
    @RequestMapping(value = "selectMultiComboList.do")
    public View selectMultiComboList(UiMapDto dto, Model model) throws Exception {
        service.selectMultiComboList(dto);
        return apply(dto, model);
    }


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
    @RequestMapping(value = "selectSiteWorkTime.do")
    public View selectSiteWorkTime(UiMapDto dto, Model model) throws Exception {
        service.selectSiteWorkTime(dto);
        return apply(dto, model);
    }


    // ------------------------------------------------------------
 	// [권혜영] 추가 함수
 	// ------------------------------------------------------------

    /**
     * @fn : selectBasAreaTreeList
     * @brief : 작업장 트리 정보 조회
     * @remark
     * @Create Date: 2021. 4. 5
     * @Author: 권혜영
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      *
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
      *   2021. 4. 5.       권혜영     최초  생성
      *
     */
     @RequestMapping(value = "selectCapacityTypeList.do")
     public View selectCapacityTypeList(UiMapDto dto, Model model) throws Exception {
         service.selectCapacityTypeList(dto);
         return apply(dto, model);
     }

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
      @RequestMapping(value = "selectQamCustomQuery.do")
      public View selectQamCustomQuery(UiMapDto dto, Model model) throws Exception {
          service.selectQamCustomQuery(dto);
          return apply(dto, model);
      }

    /**
    * @fn : selectUserListByInspector
    * @brief : 작업장에 매핑된 유저정보를 조회 조회
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
    @RequestMapping(value = "selectUserListByInspector.do")
    public View selectUserListByInspector(UiMapDto dto, Model model) throws Exception {
        service.selectUserListByInspector(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectTxnHistKey
    * @brief : TXN HistKey 조회
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
    @RequestMapping(value = "selectTxnHistKey.do")
    public View selectTxnHistKey(UiMapDto dto, Model model) throws Exception {
        service.selectTxnHistKey(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectDefectCodeList
    * @brief : 불량코드 리스트 조회
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
    @RequestMapping(value = "selectDefectCodeList.do")
    public View selectDefectCodeList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectCodeList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectAtchFiles
    * @brief : 첨부파일 정보 조회 조회
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
    @RequestMapping(value = "selectAtchFiles.do")
    public View selectAtchFiles(UiMapDto dto, Model model) throws Exception {
        service.selectAtchFiles(dto);
        return apply(dto, model);
    }

    /**
     * @fn : selectPlantListByQcm
     * @brief : site 조회 
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
     @RequestMapping(value = "selectPlantListByQcm.do")
     public View selectPlantListByQcm(UiMapDto dto, Model model) throws Exception {
         service.selectPlantListByQcm(dto);
         return apply(dto, model);
     }
     
    /**
    * @fn : selectProcessSegmentList
    * @brief : 표준공정 조회
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
    @RequestMapping(value = "selectProcessSegmentList.do")
    public View selectProcessSegmentList(UiMapDto dto, Model model) throws Exception {
        service.selectProcessSegmentList(dto);
        return apply(dto, model);
    }

}