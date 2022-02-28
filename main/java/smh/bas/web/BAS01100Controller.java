package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS01100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS01100Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS01100Controller
* @Company: IFC
* @Create Date: 2021.4.12
* @Author: 유창균
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 12.    유창균     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas01100")
public class BAS01100Controller extends AbstractWebController {

    @Autowired
    private BAS01100Service service;

    /**
    * @fn : selectBasVendorList
    * @brief : 업체 정보 조회
    * @remark
    * @Create Date: 2021. 4. 12
    * @Author:  유창균
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 12.     유창균     최초  생성
     *
    */
    @RequestMapping(value = "selectBasVendorList.do")
    public View selectBasVendorList(UiMapDto dto, Model model) throws Exception {
        service.selectBasVendorList(dto);
        return apply(dto, model);
    } 
    
}
