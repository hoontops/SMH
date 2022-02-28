package com.nbdf.commons.interceptor;

import com.nbdf.commons.system.RepairServiceControlManager;
import com.nbdf.commons.system.SystemControlManager;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
 
public class RepairServiceInterceptor extends HandlerInterceptorAdapter {
    protected Logger logger = LoggerFactory.getLogger(getClass());
 
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
    	/*
    	if( SystemControlManager.isEmptyMap()){
    		return true;
    	}
    	
    	if (SystemControlManager.isOffService()){
    		return true;
    	}
    	*/
    	return RepairServiceControlManager.isRepairService(request, response);
    }
}