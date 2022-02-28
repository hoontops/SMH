package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS00200Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS00200Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00200Controller
* @Company: Built1
* @Create Date: 2021.2.1
* @Author: sungmin.choe
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 16.    sungmin.choe     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas00200")
public class BAS00200Controller extends AbstractWebController {

    @Autowired
    private BAS00200Service service;

    /**
    * @fn : selectBasSite
    * @brief : Site 조회
    * @remark
    * @Create Date: 2021. 2. 16
    * @Author: sungmin.choe
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 2. 16.       sungmin.choe     최초  생성
     *
    */
    @RequestMapping(value = "selectBasSiteList.do")
    public View selectBasSiteList(UiMapDto dto, Model model) throws Exception {
        service.selectBasSiteList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveBasSite
    * @brief : Site 정보 저장
    * @remark
    * @Create Date: 2021. 2. 16
    * @Author: sungmin.choe
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 2. 16.       sungmin.choe     최초  생성
     *
    */
    @RequestMapping(value = "saveBasSite.do")
    public View saveBasSite(UiMapDto dto, Model model) throws Exception {
    	
        service.saveBasSite(dto);
        return apply(dto, model);
    }

}
