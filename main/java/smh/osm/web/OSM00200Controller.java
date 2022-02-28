package smh.osm.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.osm.service.OSM00200Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
* @file: OSM00200Controller.java
* @Package: com.nbdf.cmd.cm.cmcm.web
* @Project name: IFC MES시스템 구축
* @Type name: OSM00200Controller
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
@RequestMapping(value = "/osm00200")
public class OSM00200Controller extends AbstractWebController {

    @Autowired
    private OSM00200Service service;

    /**
    * @fn : saveOsmOspetcclaimamount
    * @brief :  Claim 기타비용 등록
    * @Method Name : saveOsmOspetcclaimamount
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
    @RequestMapping(value = "saveOsmOspetcclaimamount.do")
    public View saveOsmOspetcclaimamount(UiMapDto dto, Model model) throws Exception {
        service.saveOsmOspetcclaimamount(dto);
        return apply(dto, model);
    }

    
    /**
    * @fn : selectOsmOspetcclaimamountList
    * @brief : Claim 기타비용 등록
    * @Method Name : selectOsmOspetcclaimamountList
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
    @RequestMapping(value = "selectOsmOspetcclaimamountList.do")
    public View selectOsmOspetcclaimamountList(UiMapDto dto, Model model) throws Exception {
        service.selectOsmOspetcclaimamountList(dto);
        return apply(dto, model);
    }
 
    /**
    * @fn : selectGetAreaidPopupListByOsp
    * @brief : 작업장
    * @Method Name : selectGetAreaidPopupListByOsp
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
    @RequestMapping(value = "selectGetAreaidPopupListByOsp.do")
    public View selectGetAreaidPopupListByOsp(UiMapDto dto, Model model) throws Exception {
        service.selectGetAreaidPopupListByOsp(dto);
        return apply(dto, model);
    }
    
    /**
     * @fn : selectGetVendorListByOsp
     * @brief : 협력사
     * @Method Name : selectGetVendorListByOsp
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
     @RequestMapping(value = "selectGetVendorListByOsp.do")
     public View selectGetVendorListByOsp(UiMapDto dto, Model model) throws Exception {
         service.selectGetVendorListByOsp(dto);
         return apply(dto, model);
     }
 
}
