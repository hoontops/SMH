package com.nbdf.cmd.cm.cmsy.service;


import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.nbdf.commons.ui.vo.UiMapDto;

/**
 * 지출결의서 입력
 *
 * @ClassName CMSA00100Service.java
 * @Description CMSA00100Service Class
 * @Modification-Information
 *
 * @author Built1 진성하
 * @since 2015. 3. 10.
 * @version 1.0
 * @see <pre>
 *  Copyright (C) 2015 by Built1, All right reserved.
 * </pre>
 */
public interface CMSY00100Service {

    public void loginPost(UiMapDto dto, HttpServletRequest request, HttpServletResponse response) throws Exception;
    public void loginPostTop(UiMapDto dto, HttpServletRequest request, HttpServletResponse response) throws Exception;

    public List<Map<String, Object>> selectUserInfoList(String sessionPortalId, Map<String, Object> paramMap) throws Exception;

    public String[] selectIsExistDuplicatedSession(Map<String, Object> dto) throws Exception;

    public int saveMergeSessionInfo(Map<String, Object> dto, HttpServletRequest request) throws Exception;
    
        
}
