package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM02300Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : QAM02300Controller.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM02300Controller
* @Company     : Built1
* @Create Date : 2021.06.01
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.06.01  yanghee.kim    최초  생성
*
*/
@Controller
@RequestMapping(value = "/qam02300")
public class QAM02300Controller extends AbstractWebController {

    @Autowired
    private QAM02300Service service;

    /**
    * @fn          : selectYieldRateByLOTList
    * @brief       : LOT별 수율현황 : LOT별 수율 조회
    * @remark
    * @Create Date : 2021.06.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.06.01  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectYieldRateByLOTList.do")
    public View selectYieldRateByLOTList(UiMapDto dto, Model model) throws Exception {
        service.selectYieldRateByLOTList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectDefectStatusByLOTList
    * @brief       : LOT별 수율현황 : LOT별 불량현황
    * @remark
    * @Create Date : 2021.06.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.06.01  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectDefectStatusByLOTList.do")
    public View selectDefectStatusByLOTList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectStatusByLOTList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectDefectDetailByLOTList
    * @brief       : LOT별 수율현황 : 불량 세부
    * @remark
    * @Create Date : 2021.06.01
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.06.01  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectDefectDetailByLOTList.do")
    public View selectDefectDetailByLOTList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectDetailByLOTList(dto);
        return apply(dto, model);
    }
}