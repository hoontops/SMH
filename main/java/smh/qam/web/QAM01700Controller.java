package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM01700Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : QAM01700Controller.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM01700Controller
* @Company     : Built1
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
@Controller
@RequestMapping(value = "/qam01700")
public class QAM01700Controller extends AbstractWebController {

    @Autowired
    private QAM01700Service service;

    /**
    * @fn          : selectGetDefectLotList
    * @brief       : 불량 LOT 조회
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
    @RequestMapping(value = "selectGetDefectLotList.do")
    public View selectGetDefectLotList(UiMapDto dto, Model model) throws Exception {
        service.selectGetDefectLotList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectGetInboundDefectLotList
    * @brief       : 인수처리한 불량 LOT 조회
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
    @RequestMapping(value = "selectGetInboundDefectLotList.do")
    public View selectGetInboundDefectLotList(UiMapDto dto, Model model) throws Exception {
        service.selectGetInboundDefectLotList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectGetDefectLotDefectCodeInfo
    * @brief       : LOT별 불량
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
    @RequestMapping(value = "selectGetDefectLotDefectCodeInfo.do")
    public View selectGetDefectLotDefectCodeInfo(UiMapDto dto, Model model) throws Exception {
        service.selectGetDefectLotDefectCodeInfo(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectGetInbountDefectLotStateList
    * @brief       : LOT 상태확인
    * @Method Name : selectGetInbountDefectLotStateList
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
    @RequestMapping(value = "selectGetInbountDefectLotStateList.do")
    public View selectGetInbountDefectLotStateList(UiMapDto dto, Model model) throws Exception {
        service.selectGetInbountDefectLotStateList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : saveLotDefectInbound
    * @brief       : 불량품 인수
    * @Method Name : saveLotDefectInbound
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
    @RequestMapping(value = "saveLotDefectInbound.do")
    public View saveLotDefectInbound(UiMapDto dto, Model model) throws Exception {
        service.saveLotDefectInbound(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : saveLotDefectInboundCancel
    * @brief       : 불량품 인수취소
    * @Method Name : saveLotDefectInboundCancel
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
    @RequestMapping(value = "saveLotDefectInboundCancel.do")
    public View saveLotDefectInboundCancel(UiMapDto dto, Model model) throws Exception {
        service.saveLotDefectInboundCancel(dto);
        return apply(dto, model);
    }
}