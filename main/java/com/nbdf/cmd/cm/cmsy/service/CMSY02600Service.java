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
public interface CMSY02600Service {


    /**
     * @fn : saveCmdBoard
     * @brief : 게시판 저장
     * @Method Name : saveCmdBoard
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
    public void saveCmdBoard(UiMapDto dto) throws Exception; 

    public void saveCmdBoardCfm(UiMapDto dto) throws Exception;
    
    /**
     * @fn : selectCmdBoardList
     * @brief : 게시판 (리스트) 조회
     * @Method Name : selectCmdBoardList
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
    public void selectCmdBoardList(UiMapDto dto) throws Exception; 

    /**
     * @fn : selectCmdBoardCfmList
     * @brief : 게시판 확인 (리스트) 조회
     * @Method Name : selectCmdBoardCfmList
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
    public void selectCmdBoardCfmList(UiMapDto dto) throws Exception; 

    /**
     * @fn : selectCmdBoardJobList
     * @brief : 게시판 업무 (리스트) 조회
     * @Method Name : selectCmdBoardJobList
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
    public void selectCmdBoardJobList(UiMapDto dto) throws Exception; 

}