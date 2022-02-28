package com.nbdf.cmd.cm.cmsy.service;

import com.nbdf.commons.ui.vo.UiMapDto;
/**
 * null
 * 
 * @ClassName CMSY02400Service.java 
 * @Description CMSY02400Service.class 
 * @Modification-Information 
 * @author JinSungHa 
 * @since 2018.01.18 
 * @version 1.0 
 * @see <pre> 
 * Copyright (C) 2018 by Built1, All right reserved.
 * </pre> 
 */
public interface CMSY02400Service {


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
    public void saveCmdNotice(UiMapDto dto) throws Exception; 

    public void saveCmdNoticeCfm(UiMapDto dto) throws Exception;
    
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
    public void selectCmdNoticeList(UiMapDto dto) throws Exception; 

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
    public void selectCmdNoticeCfmList(UiMapDto dto) throws Exception; 

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
    public void selectCmdNoticeJobList(UiMapDto dto) throws Exception; 

}