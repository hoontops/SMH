package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM02400Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : QAM02400Controller.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM02400Controller
* @Company     : Built1
* @Create Date : 2021.06.13
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.06.13  yanghee.kim    최초  생성
*
*/
@Controller
@RequestMapping(value = "/qam02400")
public class QAM02400Controller extends AbstractWebController {

    @Autowired
    private QAM02400Service service;

    /**
    * @fn          : selectYieldRateByProductList
    * @brief       : 품목별 수율현황 : 품목별 수율 조회
    * @remark
    * @Create Date : 2021.06.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.06.13  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectYieldRateByProductList.do")
    public View selectYieldRateByProductList(UiMapDto dto, Model model) throws Exception {
        service.selectYieldRateByProductList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectDefectStatusByProductList
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
    @RequestMapping(value = "selectDefectStatusByProductList.do")
    public View selectDefectStatusByProductList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectStatusByProductList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectDefectDetailByProductList
    * @brief       : 품목별 수율현황 : 불량 세부
    * @remark
    * @Create Date : 2021.06.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.06.13  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectDefectDetailByProductList.do")
    public View selectDefectDetailByProductList(UiMapDto dto, Model model) throws Exception {
        service.selectDefectDetailByProductList(dto);
        return apply(dto, model);
    }
}