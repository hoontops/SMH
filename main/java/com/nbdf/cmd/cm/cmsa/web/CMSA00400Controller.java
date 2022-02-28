package com.nbdf.cmd.cm.cmsa.web;


import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractWebController;
import com.nbdf.cmd.cm.cmsa.service.CMSA00400Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: CMSA00400Controller.java
* @Package: imcs.ecm.cm.cmsa.web
* @Project name: 통합 경영관리시스템 재구축
* @Type name: CMSA00400Controller
* @Company: SICC
* @Create Date: 2015 2015. 3. 2. 오후 8:42:22
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 2.    진성하     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/cmsa00400/")
public class CMSA00400Controller extends AbstractWebController {

    @Autowired
    private CMSA00400Service service;

    /**
    * @fn : selectFndApplicationVlList
    * @brief : 동시작업 업무 조회
    * @Method Name : selectFndApplicationVlList
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
    @RequestMapping(value = "selectFndApplicationVlList")
    public View selectFndApplicationVlList(UiMapDto dto, Model model) throws Exception {
        service.selectFndApplicationVlList(dto);
        return apply(dto, model);
    }
    /**
    * @fn : selectFndApplicationVlListForPrint
    * @brief : 보고서 조회
    * @Method Name : selectFndApplicationVlListForPrint
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
    @RequestMapping(value = "selectFndApplicationVlListForPrint")
    public View selectFndApplicationVlListForPrint(UiMapDto dto, Model model) throws Exception {
        service.selectFndApplicationVlListForPrint(dto);
        return apply(dto, model);
    }
    /**
    * @fn : selectFndConcurrentProgramsVlList
    * @brief : 동시작업 프로그램 조회
    * @Method Name : selectFndConcurrentProgramsVlList
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
    @RequestMapping(value = "selectFndConcurrentProgramsVlList")
    public View selectFndConcurrentProgramsVlList(UiMapDto dto, Model model) throws Exception {
        service.selectFndConcurrentProgramsVlList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectFreeQueryList
    * @brief : 사용자 쿼리 조회
    * @Method Name : selectFreeQueryList
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
    @RequestMapping(value = "selectUserQryList")
    public View selectUserQryList(UiMapDto dto, Model model) throws Exception {
        service.selectUserQryList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : executeShell
    * @brief : exe 실행
    * @Method Name : executeShell
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
    @RequestMapping(value = "executeShell")
    public View executeShell(UiMapDto dto, Model model) throws Exception {
        service.executeThreadShell(dto);
        return apply(dto, model);
    }

    /**
    * @fn : ozExport
    * @brief : ozExport
    * @Method Name : ozExport
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
    @RequestMapping(value = "ozExport.do")
    public View ozExport(UiMapDto dto, Model model) throws Exception {
        service.ozExport(dto);
        return apply(dto, model);
    }

    /**
    * @fn : ozExport
    * @brief : ozExport
    * @Method Name : ozExport
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
    @RequestMapping(value = "ozExportThread.do")
    public View ozExportThread(UiMapDto dto, Model model) throws Exception {
        service.ozExportThread(dto);
        return apply(dto, model);
    }
}
