package com.nbdf.cmd.cm.cmhm.web;

import com.nbdf.cmd.cm.cmhm.service.CMHM00100Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractXWebController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;

/**
* @file: CMHM00100Controller.java
* @Package: com.nbdf.cmd.cm.cmhm.web
* @Project name: IFC MES시스템 구축
* @Type name: CMHM00100Controller
* @Company: Built1
* @Create Date: 2015 2015. 3. 19. 오후 3:10:09
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 19.        진성하     최초  생성
 *
*/
/**
* @file: CMHM00100Controller.java
* @Package: com.nbdf.cmd.cm.cmhm.web
* @Project name: IFC MES시스템 구축
* @Type name: CMHM00100Controller
* @Company: Built1
* @Create Date: 2015. 4. 28. 오후 4:26:19
* @Author: JIn Sung Ha
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 4. 28.        JIn Sung Ha     최초  생성
 *
*/

@Controller
@RequestMapping(value = "/cmhm00100")
public class CMHM00100Controller extends AbstractXWebController {

    @Autowired
    private CMHM00100Service service;

    /**
    * @fn : selectHelpList
    * @brief : 도움말 조회
    * @Method Name : selectHelpList
    * @remark
    * @Create Date: 2015 2015. 3. 19. 오후 9:35:51
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 19.        진성하     최초  생성
     *
    */
    @RequestMapping(value = "selectManualMenuList.do")
    public View selectManualMenuList(UiMapDto dto, Model model) throws Exception {
        service.selectManualMenuList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectManualMenuDtlList
    * @brief : 도움말 상세조회
    * @Method Name : selectManualMenuDtlList
    * @remark
    * @Create Date: 2015 2015. 3. 25. 오전 10:24:19
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 25.        진성하     최초  생성
     *
    */
    @RequestMapping(value = "selectManualMenuDtlList.do")
    public View selectManualMenuDtlList(UiMapDto dto, Model model) throws Exception {
        service.selectManualMenuDtlList(dto);
        return apply(dto, model);
    }


}
