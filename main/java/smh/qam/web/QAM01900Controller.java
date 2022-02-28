package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM01900Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : QAM01900Controller.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM01900Controller
* @Company     : Built1
* @Create Date : 2021.04.19
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.04.19  yanghee.kim    최초  생성
*
*/
@Controller
@RequestMapping(value = "/qam01900")
public class QAM01900Controller extends AbstractWebController {

    @Autowired
    private QAM01900Service service;

    /**
    * @fn          : selectLotDefectCodeList
    * @brief       : 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량취소 - 불량LOT
    * @remark
    * @Create Date : 2021.04.19
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.19  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectLotDefectCodeList.do")
    public View selectLotDefectCodeList(UiMapDto dto, Model model) throws Exception {
        service.selectLotDefectCodeList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectProductRoutingPreviousProcessPathsList
    * @brief       : 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량취소 - 라우팅
    * @remark
    * @Create Date : 2021.04.19
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.19  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectProductRoutingPreviousProcessPathsList.do")
    public View selectProductRoutingPreviousProcessPathsList(UiMapDto dto, Model model) throws Exception {
        service.selectProductRoutingPreviousProcessPathsList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectIsAllQtyDefectLot
    * @brief       : 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량취소 - 해당 Lot의 취소수량을 받아와 완불처리 됬는지 판별
    * @remark
    * @Create Date : 2021.04.19
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.19  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectIsAllQtyDefectLot.do")
    public View selectIsAllQtyDefectLot(UiMapDto dto, Model model) throws Exception {
        service.selectIsAllQtyDefectLot(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectTotalLotDefectInfo
    * @brief       : 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량취소 - 해당 Lot의 불량 총수량
    * @remark
    * @Create Date : 2021.04.19
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.19  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectTotalLotDefectInfo.do")
    public View selectTotalLotDefectInfo(UiMapDto dto, Model model) throws Exception {
        service.selectTotalLotDefectInfo(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectCurrentRoutingByLotList
    * @brief       : 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량취소 > 라우팅선택 > 재작업 후 공정
    * @remark
    * @Create Date : 2021.04.23
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.23  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectCurrentRoutingByLotList.do")
    public View selectCurrentRoutingByLotList(UiMapDto dto, Model model) throws Exception {
        service.selectCurrentRoutingByLotList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectTransitAreaList
    * @brief       : 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량취소 > 라우팅선택 > 재작업 후 공정
    * @remark
    * @Create Date : 2021.04.23
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.23  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectTransitAreaList.do")
    public View selectTransitAreaList(UiMapDto dto, Model model) throws Exception {
        service.selectTransitAreaList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectDefectCancelHistoryList
    * @brief       : 품질관리 > 불량품 관리 > 불량품 폐기취소 > 내역조회
    * @remark
    * @Create Date : 2021.04.23
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.23  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectDefectCancelHistoryList.do")
    public View selectDefectCancelHistoryList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectCancelHistoryList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectDefectCancelReworkRoutingList
    * @brief       : 품질관리 > 불량품 관리 > 불량품 폐기취소 > 내역조회 > 공정순서
    * @remark
    * @Create Date : 2021.04.23
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.23  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectDefectCancelReworkRoutingList.do")
    public View selectDefectCancelReworkRoutingList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectCancelReworkRoutingList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectReworkRoutingList
    * @brief       : 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량내역 > 라우팅선택 > 재작업 라우팅
    * @remark
    * @Create Date : 2021.04.25
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.25  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectReworkRoutingList.do")
    public View selectReworkRoutingList(UiMapDto dto, Model model) throws Exception {
        service.selectReworkRoutingList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectProcessPathList
    * @brief       : 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량내역 > 라우팅선택 > 재작업 라우팅
    * @remark
    * @Create Date : 2021.04.25
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.25  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectProcessPathList.do")
    public View selectProcessPathList(UiMapDto dto, Model model) throws Exception {
        service.selectProcessPathList(dto);
        return apply(dto, model);
    }
    /**
    * @fn          : saveLotDefectCancel
    * @brief       : 품질관리 > 불량품 관리 > 불량품 폐기취소 > 불량취소
    * @Method Name : saveLotDefectCancel
    * @remark
    * @Create Date : 2021.04.19
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.19  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveLotDefectCancel.do")
    public View saveLotDefectCancel(UiMapDto dto, Model model) throws Exception {
        service.saveLotDefectCancel(dto);
        return apply(dto, model);
    }
}