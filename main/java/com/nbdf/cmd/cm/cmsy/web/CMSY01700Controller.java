package com.nbdf.cmd.cm.cmsy.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nbdf.cmd.cm.cmsy.service.CMSY01700Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: CMSY01700Controller.java
* @Package: com.nbdf.cmd.cm.cmsy.web
* @Project name: IFC MES시스템 구축
* @Type name: CMSY01700Controller
* @Company: Built1
* @Create Date: 2017. 10. 2. 오후 8:42:22
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2017. 10. 2.    진성하     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/cmsy01700/")
public class CMSY01700Controller extends AbstractWebController {

    @Autowired
    private CMSY01700Service service;
    /**
    * @fn : selectCmdCompanyAltAuthList
    * @brief : 사용자리스트  조회
    * @Method Name : selectCmdCompanyAltAuthList
    * @remark
    * @Create Date: 2015 2015. 3. 10. 오후 4:58:04
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 10.       진성하     최초  생성
     *
    */
    @RequestMapping(value = "selectCmdCompanyAltAuthList")
    public View selectCmdCompanyAltAuthList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdCompanyAltAuthList(dto);
        return apply(dto, model);
    }
    /**
    * @fn : selectCmdUserCompanyMpngList
    * @brief : 사용자리스트  조회
    * @Method Name : selectCmdUserCompanyMpngList
    * @remark
    * @Create Date: 2015 2015. 3. 10. 오후 4:58:04
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 10.       진성하     최초  생성
     *
    */
    @RequestMapping(value = "selectCmdUserCompanyMpngList")
    public View selectCmdUserCompanyMpngList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdUserCompanyMpngList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectCmdUserCompanyMpngListMulti
    * @brief : 사용자리스트  조회
    * @Method Name : selectCmdUserCompanyMpngListMulti
    * @remark
    * @Create Date: 2015 2015. 3. 10. 오후 4:58:04
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 10.       진성하     최초  생성
     *
    */
    @RequestMapping(value = "selectCmdUserCompanyMpngListMulti")
    public View selectCmdUserCompanyMpngListMulti(UiMapDto dto, Model model) throws Exception {
        service.selectCmdUserCompanyMpngListMulti(dto);
        return apply(dto, model);
    }
    
    /**
    * @fn : saveCmdUserCompanyMpng
    * @brief : 권한사용자저장
    * @Method Name : saveCmdUserCompanyMpng
    * @remark
    * @Create Date: 2015 2015. 3. 10. 오후 4:58:04
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 10.       진성하     최초  생성
     *
    */
    @RequestMapping("saveCmdUserCompanyMpng")
    public View saveCmdUserCompanyMpng(UiMapDto dto, Model model) throws Exception {
        service.saveCmdUserCompanyMpng(dto);
        return apply(dto, model);
    }


}
