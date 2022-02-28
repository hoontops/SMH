package com.nbdf.cmd.cm.cmsy.web;

import com.nbdf.cmd.cm.cmsy.service.CMSY02400Service;
import com.nbdf.commons.web.support.AbstractXWebController;
import org.springframework.stereotype.Controller;
import com.nbdf.commons.ui.vo.UiMapDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping; 
import org.springframework.web.servlet.View; 
/**
* @file: CMSY02400Controller.java
* @Package: com.nbdf.cmd.cm.cmsy.web;
* @Project name: IFC MES시스템 재구축
* @Type name: CMSY02400Controller
* @Company: 대륜E&S
* @Create Date: 2018.01.18 19:33:24
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일      수정자   수정내용
 *   ------------  ------  ----------
 *   2018.01.18.  JinSungHa   최초 생성
 **/

@Controller
@RequestMapping(value = "/cmsy02400/")
public class CMSY02400Controller extends AbstractXWebController {

    @Autowired
    private CMSY02400Service service;

    /**
     * @fn : saveCmdNotice
     * @brief : 공지사항 저장
     * @Method Name : saveCmdNotice
     * @remark 
     * @Create Date: 2018.01.18 19:33:24
     * @Author: JinSungHa
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      * 
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
     *   2018.01.18.  JinSungHa   최초 생성
      *
     **/
    @RequestMapping(value = "saveCmdNotice.do")
    public View saveCmdNotice(UiMapDto dto, Model model) throws Exception {
        service.saveCmdNotice(dto); 
        return apply(dto, model);
    }

    @RequestMapping(value = "saveCmdNoticeCfm.do")
    public View saveCmdNoticeCfm(UiMapDto dto, Model model) throws Exception {
        service.saveCmdNoticeCfm(dto); 
        return apply(dto, model);
    }
    /**
     * @fn : selectCmdNoticeList
     * @brief : 공지사항 (리스트) 조회
     * @Method Name : selectCmdNoticeList
     * @remark 
     * @Create Date: 2018.01.18 19:33:24
     * @Author: JinSungHa
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      * 
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
     *   2018.01.18.  JinSungHa   최초 생성
      *
     **/
    @RequestMapping(value = "selectCmdNoticeList.do")
    public View selectCmdNoticeList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdNoticeList(dto); 
        return apply(dto, model);
    }

    /**
     * @fn : selectCmdNoticeCfmList
     * @brief : 공지사항 확인 (리스트) 조회
     * @Method Name : selectCmdNoticeCfmList
     * @remark 
     * @Create Date: 2018.01.18 19:33:24
     * @Author: JinSungHa
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      * 
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
     *   2018.01.18.  JinSungHa   최초 생성
      *
     **/
    @RequestMapping(value = "selectCmdNoticeCfmList.do")
    public View selectCmdNoticeCfmList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdNoticeCfmList(dto); 
        return apply(dto, model);
    }

    /**
     * @fn : selectCmdNoticeJobList
     * @brief : 공지사항 업무 (리스트) 조회
     * @Method Name : selectCmdNoticeJobList
     * @remark 
     * @Create Date: 2018.01.18 19:33:24
     * @Author: JinSungHa
     * @File Version: v1.0
      *
      * << 개정이력(Modification Information) >>
      * 
      *     수정일      수정자   수정내용
      *   ------------  ------  ----------
     *   2018.01.18.  JinSungHa   최초 생성
      *
     **/
    @RequestMapping(value = "selectCmdNoticeJobList.do")
    public View selectCmdNoticeJobList(UiMapDto dto, Model model) throws Exception {
        service.selectCmdNoticeJobList(dto); 
        return apply(dto, model);
    }

}