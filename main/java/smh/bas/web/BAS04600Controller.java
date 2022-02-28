package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS04600Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file        : BAS04600Controller.java
* @Package     : smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name   : BAS04600Controller
* @Company     : Built1
* @Create Date : 2021.03.24
* @Author      : yanghee.kim
* @File Version: v1.0
*
* << 개정이력(Modification Information) >>
*
*     수정일         수정자        수정내용
*   ----------  ------------  ----------
*   2021.03.24  yanghee.kim    최초  생성
*
*/
@Controller
@RequestMapping(value = "/bas04600")
public class BAS04600Controller extends AbstractWebController {

    @Autowired
    private BAS04600Service service;

    /**
    * @fn          : selectShipmentInspectionList
    * @brief       : 출하 검사기준 정보 조회
    * @remark
    * @Create Date : 2021.03.24
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.24  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "selectShipmentInspectionList.do")
    public View selectShipmentInspectionList(UiMapDto dto, Model model) throws Exception {
        service.selectShipmentInspectionList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn          : saveShipmentInspection
    * @brief       : 출하 검사기준 정보 등록/수정/삭제 Call
    * @Method Name : saveShipmentInspection
    * @remark
    * @Create Date : 2021.03.24
    * @Author      : yanghee.kim
    * @File Version: v1.0
    *
    * << 개정이력(Modification Information) >>
    *
    *     수정일         수정자        수정내용
    *   ----------  ------------  ----------
    *   2021.03.24  yanghee.kim    최초  생성
    *
    */
    @RequestMapping(value = "saveShipmentInspection.do")
    public View saveShipmentInspection(UiMapDto dto, Model model) throws Exception {
        service.saveShipmentInspection(dto);
        return apply(dto, model);
    }   
}