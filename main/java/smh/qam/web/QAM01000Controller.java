package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM01000Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : QAM01000Controller.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM01000Controller
* @Company     : Built1
* @Create Date : 2021.05.03
* @Author      : 권혜영
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.05.03  권혜영    최초  생성
*
*/
@Controller
@RequestMapping(value = "/qam01000")
public class QAM01000Controller extends AbstractWebController {

    @Autowired
    private QAM01000Service service;

    /**
    * @fn          : selectFinalInspectionResultList
    * @brief       : 최종검사 결과조회
    * @remark
    * @Create Date : 2021.05.03
    * @Author      : 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.03  권혜영    최초  생성
    *
    */
    @RequestMapping(value = "selectFinalInspectionResultList.do")
    public View selectFinalInspectionResultList(UiMapDto dto, Model model) throws Exception {
        service.selectFinalInspectionResultList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectFinalInspectionResultDetailList
    * @brief       : 최종검사 결과조회 상세
    * @remark
    * @Create Date : 2021.05.03
    * @Author      : 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.03  권혜영    최초  생성
    *
    */
    @RequestMapping(value = "selectFinalInspectionResultDetailList.do")
    public View selectFinalInspectionResultDetailList(UiMapDto dto, Model model) throws Exception {
        service.selectFinalInspectionResultDetailList(dto);
        return apply(dto, model);
    }
}