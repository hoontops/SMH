package com.nbdf.commons.interceptor;

import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

/**
* @file: LocaleInterceptor.java
* @Package: com.nbdf.commons.interceptor
* @Project name: IFC MES시스템 구축
* @Type name: LocaleInterceptor
* @Company: Built1
* @Create Date: 2015 2015. 3. 27. 오전 9:48:05
* @Author: YbYoon
* @File Version: v1.0
 *@info ERP Locale 설정 Interceptor
 *
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 11. 11. 진성하   최초 작성
 *
*/
public class LocaleInterceptor extends HandlerInterceptorAdapter {
    protected Logger logger = LoggerFactory.getLogger(getClass());

    /**
     *
    * @fn
    * @brief (Override method) interceptor의 전처리기
    * @remark
    * @see org.springframework.web.servlet.handler.HandlerInterceptorAdapter#preHandle(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse, java.lang.Object)
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Locale.setDefault(Locale.KOREA);
        return true;
        }
}