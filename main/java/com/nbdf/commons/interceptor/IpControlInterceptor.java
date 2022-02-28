package com.nbdf.commons.interceptor;

import com.nbdf.commons.system.IpControlManager;
import com.nbdf.commons.system.SystemControlManager;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
 
public class IpControlInterceptor extends HandlerInterceptorAdapter {
    protected Logger logger = LoggerFactory.getLogger(getClass());

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
    	/*
    	logger.debug("a1111");
    	if( SystemControlManager.isEmptyMap()){
    		return true;
    	}
    	
    	logger.debug("a1112");
    	if (SystemControlManager.isOffService()){
    		return true;
    	}
    	
    	logger.debug("a1113");
    	if( SystemControlManager.isByPass() ) {
    		return true;
    	}
    	*/
    	logger.debug("a1114");
    	return IpControlManager.isAllowIp(request, response);
    }
}