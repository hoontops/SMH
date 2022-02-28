package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM01800Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : QAM01800Controller.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM01800Controller
* @Company     : Built1
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
@Controller
@RequestMapping(value = "/qam01800")
public class QAM01800Controller extends AbstractWebController {

    @Autowired
    private QAM01800Service service;

    /**
    * @fn          : selectGetInboundDefectLotList
    * @brief       : 인수처리한 불량 Lot을 조회한다.(불량품 원인판정화면)
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
    @RequestMapping(value = "selectGetInboundDefectLotList.do")
    public View selectGetInboundDefectLotList(UiMapDto dto, Model model) throws Exception {
        service.selectGetInboundDefectLotList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectGetDefectLotDefectCodeList
    * @brief       : 인수처리한 불량 Lot별 불량코드를 조회한다.
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
    @RequestMapping(value = "selectGetDefectLotDefectCodeList.do")
    public View selectGetDefectLotDefectCodeList(UiMapDto dto, Model model) throws Exception {
        service.selectGetDefectLotDefectCodeList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectGetDefectCodeOutboundList
    * @brief       : 불량코드별 반출정보를 조회한다.
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
    @RequestMapping(value = "selectGetDefectCodeOutboundList.do")
    public View selectGetDefectCodeOutboundList(UiMapDto dto, Model model) throws Exception {
        service.selectGetDefectCodeOutboundList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : saveLotDefectConfirm
    * @brief       : 품질관리 - 불량관리 - 불량품 원인판정
    * @Method Name : saveLotDefectConfirm
    * @remark
    * @Create Date : 2021.04.15
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.15  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveLotDefectConfirm.do")
    public View saveLotDefectConfirm(UiMapDto dto, Model model) throws Exception {
        service.saveLotDefectConfirm(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : saveLotDefectHold
    * @brief       : 품질관리 - 불량관리 - 불량품 원인판정
    * @Method Name : saveLotDefectHold
    * @remark
    * @Create Date : 2021.04.15
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.15  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveLotDefectHold.do")
    public View saveLotDefectHold(UiMapDto dto, Model model) throws Exception {
        service.saveLotDefectHold(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : saveLotDefectMakeup
    * @brief       : 품질관리 - 불량관리 - 불량품 원인판정 - 불량내역조정
    * @Method Name : saveLotDefectMakeup
    * @remark
    * @Create Date : 2021.04.15
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.15  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveLotDefectMakeup.do")
    public View saveLotDefectMakeup(UiMapDto dto, Model model) throws Exception {
        service.saveLotDefectMakeup(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : saveLotDefectOutbound
    * @brief       : 품질관리 - 불량관리 - 불량품 원인판정 - 불량반출
    * @Method Name : saveLotDefectOutbound
    * @remark
    * @Create Date : 2021.04.15
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.15  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveLotDefectOutbound.do")
    public View saveLotDefectOutbound(UiMapDto dto, Model model) throws Exception {
        service.saveLotDefectOutbound(dto);
        return apply(dto, model);
    }

}