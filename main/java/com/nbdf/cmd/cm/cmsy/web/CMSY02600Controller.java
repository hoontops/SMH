package com.nbdf.cmd.cm.cmsy.web;

import com.nbdf.cmd.cm.cmsy.service.CMSY02600Service;
import com.nbdf.commons.web.support.AbstractXWebController;
import org.springframework.stereotype.Controller;
import com.nbdf.commons.ui.vo.UiMapDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping; 
import org.springframework.web.servlet.View; 
/**
* @file: CMSY02600Controller.java
* @Package: com.nbdf.cmd.cm.cmsy.web;
* @Project name: IFC MES시스템 재구축
* @Type name: CMSY02600Controller
* @Company: 대륜E&S
* @Create Date: 2018.06.08 15:45:06
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일      수정자   수정내용
 *   ------------  ------  ----------
 *   2018.06.08.  JinSungHa   최초 생성
 **/

@Controller
@RequestMapping(value = "/cmsy02600/")
public class CMSY02600Controller extends AbstractXWebController {

    @Autowired
    private CMSY02600Service service;

    /**
     * @fn : saveCmdBoard
     * @brief : 게시판 저장
     * @Method Name : saveCmdBoard
     * @remark 
     * @Create Date: 2018.06.08 15:45:06
     * @Author: JinSungHa
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      * 
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
     *   2018.06.08.  JinSungHa   최초 생성
      *
     **/
    @RequestMapping(value = "saveCmdBoard.do")
    public View saveCmdBoard(UiMapDto dto, Model model) throws Exception {
        service.saveCmdBoard(dto); 
        return apply(dto, model);
    }

    /**
     * @fn : selectCmdBoardList
     * @brief : 게시판 (리스트) 조회
     * @Method Name : selectCmdBoardList
     * @remark 
     * @Create Date: 2018.06.08 15:45:06
     * @Author: JinSungHa
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      * 
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
     *   2018.06.08.  JinSungHa   최초 생성
      *
     **/
    @RequestMapping(value = "selectCmdBoardList.do")
    public View selectCmdBoardList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdBoardList(dto); 
        return apply(dto, model);
    }

    /**
     * @fn : selectCmdBoardCfmList
     * @brief : 게시판확인 (리스트) 조회
     * @Method Name : selectCmdBoardCfmList
     * @remark 
     * @Create Date: 2018.06.08 15:45:06
     * @Author: JinSungHa
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      * 
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
     *   2018.06.08.  JinSungHa   최초 생성
      *
     **/
    @RequestMapping(value = "selectCmdBoardCfmList.do")
    public View selectCmdBoardCfmList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdBoardCfmList(dto); 
        return apply(dto, model);
    }

    /**
     * @fn : selectCmdBoardJobList
     * @brief : 게시판업무 (리스트) 조회
     * @Method Name : selectCmdBoardJobList
     * @remark 
     * @Create Date: 2018.06.08 15:45:06
     * @Author: JinSungHa
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      * 
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
     *   2018.06.08.  JinSungHa   최초 생성
      *
     **/
    @RequestMapping(value = "selectCmdBoardJobList.do")
    public View selectCmdBoardJobList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdBoardJobList(dto); 
        return apply(dto, model);
    }

}