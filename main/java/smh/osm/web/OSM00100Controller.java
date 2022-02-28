package smh.osm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.osm.service.OSM00100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
* @file: OSM00100Controller.java
* @Package: com.nbdf.cmd.cm.cmcm.web
* @Project name: IFC MES시스템 구축
* @Type name: OSM00100Controller
* @Company: Built1
* @Create Date: 2021. 3. 1. 오후 8:42:22
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 3. 1.    진성하     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/osm00100")
public class OSM00100Controller extends AbstractWebController {

    @Autowired
    private OSM00100Service service;

    /**
    * @fn : saveBasProductquotationsegment
    * @brief :  Claim공정별 기준금액
    * @Method Name : saveBasProductquotationsegment
    * @remark
    * @Create Date: 2021. 3. 6. 오후 3:34:33
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 6.     진성하     최초  생성
     *
    */
    @RequestMapping(value = "saveBasProductquotationsegment.do")
    public View saveBasProductquotationsegment(UiMapDto dto, Model model) throws Exception {
        service.saveBasProductquotationsegment(dto);
        return apply(dto, model);
    }

    /**
    * @fn : copyBasProductquotationsegment
    * @brief :  Claim공정별 기준금액 목사
    * @Method Name : copyBasProductquotationsegment
    * @remark
    * @Create Date: 2021. 3. 6. 오후 3:34:33
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 6.     진성하     최초  생성
     *
    */
    @RequestMapping(value = "copyBasProductquotationsegment.do")
    public View copyBasProductquotationsegment(UiMapDto dto, Model model) throws Exception {
        service.copyBasProductquotationsegment(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : selectBasProductquotationsegmentList
    * @brief : Claim공정별 기준금액
    * @Method Name : selectBasProductquotationsegmentList
    * @remark
    * @Create Date: 2021. 3. 10. 오후 4:58:04
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 10.       진성하     최초  생성
     *
    */
    @RequestMapping(value = "selectBasProductquotationsegmentList.do")
    public View selectBasProductquotationsegmentList(UiMapDto dto, Model model) throws Exception {
        service.selectBasProductquotationsegmentList(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : selectGetOutsourcedClaimBaseAmount
    * @brief : 환산금액
    * @Method Name : selectGetOutsourcedClaimBaseAmount
    * @remark
    * @Create Date: 2021. 3. 10. 오후 4:58:04
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 10.       진성하     최초  생성
     *
    */
    @RequestMapping(value = "selectGetOutsourcedClaimBaseAmountCopy.do")
    public View selectGetOutsourcedClaimBaseAmountCopy(UiMapDto dto, Model model) throws Exception {
        service.selectGetOutsourcedClaimBaseAmountCopy(dto);
        return apply(dto, model);
    }

    @RequestMapping(value = "selectGetOutsourcedClaimBaseAmount.do")
    public View selectGetOutsourcedClaimBaseAmount(UiMapDto dto, Model model) throws Exception {
        service.selectGetOutsourcedClaimBaseAmount(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : selectGetUomDefinitionListByOsp
    * @brief : 화폐단위
    * @Method Name : selectGetUomDefinitionListByOsp
    * @remark
    * @Create Date: 2021. 3. 10. 오후 4:58:04
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 3. 10.       진성하     최초  생성
     *
    */
    @RequestMapping(value = "selectGetUomDefinitionListByOsp.do")
    public View selectGetUomDefinitionListByOsp(UiMapDto dto, Model model) throws Exception {
        service.selectGetUomDefinitionListByOsp(dto);
        return apply(dto, model);
    }
    
 

}
