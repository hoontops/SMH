package smh.mtm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.mtm.service.MTM00100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: MTM00100Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: MTM00100Controller
* @Company: IFC
* @Create Date: 2021.4.28
* @Author: 유창균
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 4. 28.    유창균     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/mtm00100")
public class MTM00100Controller extends AbstractWebController {

    @Autowired
    private MTM00100Service service;

    /**
    * @fn : selectMtmMaterialManagementList
    * @brief : 마스터품목(자재)
    * @remark
    * @Create Date: 2021. 4. 28
    * @Author:  유창균
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 4. 28.     유창균     최초  생성
     *
    */
    @RequestMapping(value = "selectMtmMaterialManagementList.do")
    public View selectMtmMaterialManagementList(UiMapDto dto, Model model) throws Exception {
        service.selectMtmMaterialManagementList(dto);
        return apply(dto, model);
    } 
    
    @RequestMapping(value = "selectMtmMaterialDetail.do")
    public View selectMtmMaterialDetail(UiMapDto dto, Model model) throws Exception {
        service.selectMtmMaterialDetail(dto);
        return apply(dto, model);
    } 
    
    
}
