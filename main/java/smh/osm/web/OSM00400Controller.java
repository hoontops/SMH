package smh.osm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.osm.service.OSM00400Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
* @file: OSM00400Controller.java
* @Package: com.nbdf.cmd.cm.cmcm.web
* @Project name: IFC MES시스템 구축
* @Type name: OSM00400Controller
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
@RequestMapping(value = "/osm00400")
public class OSM00400Controller extends AbstractWebController {

    @Autowired
    private OSM00400Service service;

    /**
    * @fn : saveOsmOspclaim
    * @brief :  Claim 대상 감면 관리
    * @Method Name : saveOsmOspclaim
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
    @RequestMapping(value = "saveOsmOspclaim.do")
    public View saveOsmOspclaim(UiMapDto dto, Model model) throws Exception {
        service.saveOsmOspclaim(dto);
        return apply(dto, model);
    }

    
    /**
    * @fn : selectOsmOspclaimList
    * @brief : Claim 대상 감면 관리
    * @Method Name : selectOsmOspclaimList
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
    @RequestMapping(value = "selectOsmOspclaimList.do")
    public View selectOsmOspclaimList(UiMapDto dto, Model model) throws Exception {
        service.selectOsmOspclaimList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectGetFactoryListByCsm
    * @brief : 공장
    * @Method Name : selectGetFactoryListByCsm
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
    @RequestMapping(value = "selectGetFactoryListByCsm.do")
    public View selectGetFactoryListByCsm(UiMapDto dto, Model model) throws Exception {
        service.selectGetFactoryListByCsm(dto);
        return apply(dto, model);
    }
 
}
