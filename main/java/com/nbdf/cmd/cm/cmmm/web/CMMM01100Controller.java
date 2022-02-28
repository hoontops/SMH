package com.nbdf.cmd.cm.cmmm.web;

import com.nbdf.cmd.cm.cmmm.service.CMMM01100Service;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractXWebController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.View;


/**
* @file: CMMM01100Controller.java
* @Package: com.nbdf.cmd.cm.cmmm.web
* @Project name: IFC MES시스템 구축
* @Type name: CMMM01100Controller
* @Company: Built1
* @Create Date: 2015 2015. 3. 13. 오후 3:37:36
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일      수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 13.       진성하     최초  생성
 *
*/
@Controller
@RequestMapping(value = "/cmmm01100")
public class CMMM01100Controller extends AbstractXWebController {

    @Autowired
    private CMMM01100Service service;


    /**
    * @fn : selectMsgList
    * @brief : 메시지 조회
    * @Method Name : selectMsgSearch
    * @remark
    * @Create Date: 2015 2015. 3. 13. 오후 4:03:37
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 13.       진성하     최초  생성
     *
    */
    @RequestMapping(value = "selectMsgList.do")
    public View selectMsgList(UiMapDto dto, Model model) throws Exception {
        service.selectMsgList(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectMsgSearch
    * @brief : 메시지 조건 조회
    * @Method Name : selectMsgSearch
    * @remark
    * @Create Date: 2015 2015. 3. 13. 오후 4:03:37
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 13.       진성하     최초  생성
     *
    */
    @RequestMapping(value = "selectMsgSearch.do")
    public View selectMsgSearch(UiMapDto dto, Model model) throws Exception {
    	service.selectMsgSearch(dto);
        return apply(dto, model);
    }


    /**
    * @fn : insertMsg
    * @brief : 메시지 저장
    * @Method Name : insertMsg
    * @remark
    * @Create Date: 2015 2015. 3. 13. 오후 6:36:41
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 13.       진성하     최초  생성
     *
    */
    @RequestMapping(value = "insertMsg.do")
    public View insertMsg(UiMapDto dto, Model model) throws Exception {
        service.insertMsg(dto);
        return apply(dto, model);
    }


    /**
    * @fn : updateMsg
    * @brief : 메시지 수정
    * @Method Name : updateMsg
    * @remark
    * @Create Date: 2015 2015. 3. 13. 오후 7:47:39
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 13.       진성하     최초  생성
     *
    */
    @RequestMapping(value = "updateMsg.do")
    public View updateMsg(UiMapDto dto, Model model) throws Exception {
        service.updateMsg(dto);
        return apply(dto, model);
    }

    /**
    * @fn : deleteMsg
    * @brief : 메시지 삭제
    * @Method Name : deleteMsg
    * @remark
    * @Create Date: 2015 2015. 3. 13. 오후 8:01:18
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 13.       진성하     최초  생성
     *
    */
    @RequestMapping(value = "deleteMsg.do")
    public View deleteMsg(UiMapDto dto, Model model) throws Exception {
        service.deleteMsg(dto);
        return apply(dto, model);
    }

    /**
    * @fn : selectCmMsg
    * @brief : 메시지 전체 조회(넥사크로에서 공통으로 사용)
    * @Method Name : selectCmMsg
    * @remark
    * @Create Date: 2015 2015. 3. 13. 오후 8:02:02
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일      수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 13.       진성하     최초  생성
     *   2015. 4. 09        진성하     파라미터 수정
    */
    @RequestMapping(value = "selectCmMsg.do")
    public View selectCmMsg(UiMapDto dto, Model model) throws Exception {
        service.selectCmMsg(dto);
        return apply(dto, model);
    }
}
