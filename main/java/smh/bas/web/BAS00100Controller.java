package smh.bas.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;

import smh.bas.service.BAS00100Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: BAS00100Controller.java
* @Package: smh.bas.service
* @Project name: IFC MES시스템 구축
* @Type name: BAS00100Controller
* @Company: Built1
* @Create Date: 2021.2.1
* @Author: 최성민
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2021. 2. 1.    최성민     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/bas00100")
public class BAS00100Controller extends AbstractWebController {

    @Autowired
    private BAS00100Service service;

    /**
    * @fn : selectBasEnterprise
    * @brief : Enterprise 조회
    * @remark
    * @Create Date: 2021. 2. 1
    * @Author: 최성민
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 2. 1.       최성민     최초  생성
     *
    */
    @RequestMapping(value = "selectBasEnterpriseList.do")
    public View selectBasEnterpriseList(UiMapDto dto, Model model) throws Exception {
        service.selectBasEnterpriseList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : saveBasEnterprise
    * @brief : Enterprise 정보 저장
    * @remark
    * @Create Date: 2021. 2. 1
    * @Author: 최성민
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2021. 2. 1.       최성민     최초  생성
     *
    */
    @RequestMapping(value = "saveBasEnterprise.do")
    public View saveBasEnterprise(UiMapDto dto, Model model) throws Exception {
    	
        service.saveBasEnterprise(dto);
        return apply(dto, model);
    }

}
