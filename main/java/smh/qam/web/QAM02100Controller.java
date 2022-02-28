package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM02100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : QAM02100Controller.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM02100Controller
* @Company     : Built1
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
@Controller
@RequestMapping(value = "/qam02100")
public class QAM02100Controller extends AbstractWebController {

    @Autowired
    private QAM02100Service service;

    /**
    * @fn          : selectGetDefectStatusList
    * @brief       : 불량현황 조회
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
    @RequestMapping(value = "selectGetDefectStatusList.do")
    public View selectGetDefectStatusList(UiMapDto dto, Model model) throws Exception {
        service.selectGetDefectStatusList(dto);
        return apply(dto, model);
    }
}