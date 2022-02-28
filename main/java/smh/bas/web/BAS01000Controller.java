package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS01000Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS01000Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS01000Controller
* @Company: IFC
* @Create Date: 2021.4.6
* @Author: 유창균
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 6.    유창균     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas01000")
public class BAS01000Controller extends AbstractWebController {

    @Autowired
    private BAS01000Service service;

    /**
    * @fn : selectBasCustomerList
    * @brief : 고객 정보 조회
    * @remark
    * @Create Date: 2021. 4. 6
    * @Author:  유창균
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 6.     유창균     최초  생성
     *
    */
    @RequestMapping(value = "selectBasCustomerList.do")
    public View selectBasCustomerList(UiMapDto dto, Model model) throws Exception {
        service.selectBasCustomerList(dto);
        return apply(dto, model);
    } 
    
}
