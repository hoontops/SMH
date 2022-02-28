package smh.qam.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.qam.service.QAM00700Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : QAM00700Controller.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : QAM00700Controller
* @Company     : Built1
* @Create Date : 2021.05.13
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.05.13  yanghee.kim    최초  생성
*
*/
@Controller
@RequestMapping(value = "/qam00700")
public class QAM00700Controller extends AbstractWebController {

    @Autowired
    private QAM00700Service service;

    /**
    * @fn          : selectProcessInspAbnormalList
    * @brief       : 수입검사 NCR
    * @remark
    * @Create Date : 2021.05.13
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.05.13  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectProcessInspAbnormalList.do")
    public View selectProcessInspAbnormalList(UiMapDto dto, Model model) throws Exception {
        service.selectProcessInspAbnormalList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : saveOSPInspectionCompanyAgree
    * @brief : 수입검사 NCR > 업체동의 저장
    * @remark
    * @Create Date: 2021.05.14
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.05.14.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "saveOSPInspectionCompanyAgree.do")
    public View saveOSPInspectionCompanyAgree(UiMapDto dto, Model model) throws Exception {
        service.saveOSPInspectionCompanyAgree(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectLotInfoByLotIDOSP
    * @brief : Lot정보 조회
    * @remark
    * @Create Date: 2021.05.14
    * @Author: 권혜영
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일      수정자   수정내용
    *   ------------  ------  ----------
    *   2021.05.14.       권혜영     최초  생성
    *
    */
    @RequestMapping(value = "selectLotInfoByLotIDOSP.do")
    public View selectLotInfoByLotIDOSP(UiMapDto dto, Model model) throws Exception {
        service.selectLotInfoByLotIDOSP(dto);
        return apply(dto, model);
    }

}