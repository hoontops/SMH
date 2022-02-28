package com.nbdf.cmd.cm.cmsy.web;

import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nbdf.cmd.cm.cmsy.service.CMSY01400Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: CMSY01400Controller.java
* @Package: com.nbdf.cmd.cm.cmsy.web
* @Project name: IFC MES시스템 구축
* @Type name: CMSY01400Controller
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
@RequestMapping(value = "/cmsy01400/")
public class CMSY01400Controller extends AbstractWebController {

    @Autowired
    private CMSY01400Service service;
    /**
    * @fn : selectCmdJobAuthMenuMpngList
    * @brief : 팝업리스트  조회
    * @Method Name : selectCmdJobAuthMenuMpngList
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
    @RequestMapping(value = "selectCmdJobAuthMenuMpngList")
    public View selectCmdJobAuthMenuMpngList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdJobAuthMenuMpngList(dto);
        return apply(dto, model);
    }
    /**
    * @fn : saveCmdJobAuthMenuMpng
    * @brief : 팝업저장
    * @Method Name : saveCmdJobAuthMenuMpng
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
    @RequestMapping("saveCmdJobAuthMenuMpng")
    public View saveCmdJobAuthMenuMpng(UiMapDto dto, Model model) throws Exception {
        service.saveCmdJobAuthMenuMpng(dto);
        return apply(dto, model);
    }
    /**
    * @fn : deleteCmdJobAuthMenuMpng
    * @brief : 팝업 삭제
    * @Method Name : deleteCmdJobAuthMenuMpng
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
    @RequestMapping("deleteCmdJobAuthMenuMpng")
    public View deleteCmdJobAuthMenuMpng(UiMapDto dto, Model model) throws Exception {
        service.deleteCmdJobAuthMenuMpng(dto);
        return apply(dto, model);
    }


}
