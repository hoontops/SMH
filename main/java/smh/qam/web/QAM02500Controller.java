package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM02500Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : QAM02500Controller.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM02500Controller
* @Company     : Built1
* @Create Date : 2021.06.24
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.06.24  yanghee.kim    최초  생성
*
*/
@Controller
@RequestMapping(value = "/qam02500")
public class QAM02500Controller extends AbstractWebController {

    @Autowired
    private QAM02500Service service;

    /**
    * @fn          : selectYieldRateByDayList
    * @brief       : 일별 수율현황 : 일별 수율 조회
    * @remark
    * @Create Date : 2021.06.24
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.06.24  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectYieldRateByDayList.do")
    public View selectYieldRateByDayList(UiMapDto dto, Model model) throws Exception {
        service.selectYieldRateByDayList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectYieldRateWorstByDayList
    * @brief       : 일별 수율현황 : 일별 Worst
    * @remark
    * @Create Date : 2021.06.24
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.06.24  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectYieldRateWorstByDayList.do")
    public View selectYieldRateWorstByDayList(UiMapDto dto, Model model) throws Exception {
        service.selectYieldRateWorstByDayList(dto);
        return apply(dto, model);
    }
}