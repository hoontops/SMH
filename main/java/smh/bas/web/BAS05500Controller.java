package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS05500Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS05500Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS05500Controller
* @Company: IFC
* @Create Date: 2021.4.20
* @Author: 유창균
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 15.    유창균     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas05500")
public class BAS05500Controller extends AbstractWebController {

    @Autowired
    private BAS05500Service service;

    /**
    * @fn : selectBasExchangeList
    * @brief : 창고 정보 조회
    * @remark
    * @Create Date: 2021. 4. 20
    * @Author:  유창균
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 20.     유창균     최초  생성
     *
    */
    @RequestMapping(value = "selectBasExchangeList.do")
    public View selectBasExchangeList(UiMapDto dto, Model model) throws Exception {
        service.selectBasExchangeList(dto);
        return apply(dto, model);
    } 
    
}
