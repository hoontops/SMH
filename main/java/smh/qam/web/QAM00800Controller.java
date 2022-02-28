package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM00800Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : QAM00800Controller.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM00800Controller
* @Company     : Built1
* @Create Date : 2021.04.26
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.04.26  yanghee.kim    최초  생성
*
*/
@Controller
@RequestMapping(value = "/qam00800")
public class QAM00800Controller extends AbstractWebController {

    @Autowired
    private QAM00800Service service;

    /**
    * @fn          : selectIndependentInspResultList
    * @brief       : 자주검사 결과조회
    * @remark
    * @Create Date : 2021.04.26
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.26  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectIndependentInspResultList.do")
    public View selectIndependentInspResultList(UiMapDto dto, Model model) throws Exception {
        service.selectIndependentInspResultList(dto);
        return apply(dto, model);
    }

    /**
    * @fn          : selectIndependentInspResultDetailList
    * @brief       : 자주검사 결과조회 상세
    * @remark
    * @Create Date : 2021.04.26
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.04.26  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectIndependentInspResultDetailList.do")
    public View selectIndependentInspResultDetailList(UiMapDto dto, Model model) throws Exception {
        service.selectIndependentInspResultDetailList(dto);
        return apply(dto, model);
    }
}