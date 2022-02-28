package com.nbdf.commons.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.support.RequestContextUtils;

/**
* @file: SessionUtil.java
* @Package: com.nbdf.commons.util
* @Project name: IFC MES시스템 구축
* @Type name: SessionUtil
* @Company: Built1
* @Create Date: 2015 2015. 11. 29. 오후 5:03:48
* @Author: 진성하
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 11. 29.        진성하     최초  생성
 *
*/
public class SessionUtil {
    public static String getUserId(){
   		return (String) getSessionValue("USER_ID");
    }

    public static String getLngLogId(){
   		return (String) getSessionValue("LGN_LOG_ID");
    }

    public static String getUserIp(){
        return (String) getSessionValue("CNCT_IP");
    }

    public static Object getSessionValue(String key) {
    	if (getRequest() != null) {
    		return getSession().getAttribute(key);
    	} else {
    		return null;
    	}
    }

    public static void setSessionValue(String key, Object value) {
    	if (getRequest() != null) {
    		getSession().setAttribute(key, value);
    	}
    }

    public static HttpServletRequest getRequest() {
    	if ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes() == null) {
    		return null;
    	}

        return ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
    }

    private static HttpSession getSession() {
    	if (getRequest() != null) {
    		return getRequest().getSession();
    	}

    	return null;
    }

    public static boolean isSecure() {
    	if (getRequest() != null) {
            return getRequest().isSecure();
    	}

    	return false;
    }

    public static ApplicationContext getApplicationContext() throws IllegalStateException {
        return RequestContextUtils.getWebApplicationContext(getRequest());
    }

    public static Object getBean(String beanName) throws BeansException {
        return getApplicationContext().getBean(beanName);
    }

    public static String getSessionId() {
    	if (getRequest() != null) {
    		return getRequest().getSession().getId();
    	}

    	return "";
    }

    public static boolean isSelectPersonalInfo() {
    	if (getRequest() != null) {
    		return getSessionValue("__IS_SELECT_PERSONAL_INFO__") != null;
    	} else {
    		return false;
    	}
    }

    public static void removeSelectPersonalInfo() {
    	if (getRequest() != null) {
    		getSession().removeAttribute("__IS_SELECT_PERSONAL_INFO__");
    	}
    }

    public static void setSelectPersonalInfo() {
    	setSessionValue("__IS_SELECT_PERSONAL_INFO__", true);
    }

    public static String getExportPath() {
        //return getRequest().getRealPath("/")+"/export/";
        return getRequest().getSession().getServletContext().getRealPath("/")+"/export/";   // jsh 20161005
    }
}