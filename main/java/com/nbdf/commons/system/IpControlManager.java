package com.nbdf.commons.system;

import com.nbdf.commons.util.BizUtil;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class IpControlManager extends SystemControlManager{
	
	protected static Logger logger = LoggerFactory.getLogger(IpControlManager.class);
	
	public static boolean isAllowIp(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logger.debug("isAllowIp call");
		if( SystemControlManager.isByPass() ) {
			logger.debug("isAllowIp ByPass");
			return true;
		}
		
		String clientIp = BizUtil.getClientIp(request);
		/*
		if( SystemControlManager.getSystemControlMap(clientIp) == null ) {
			if(SystemControlManager.getSystemControlMap(clientIp.substring(0, clientIp.lastIndexOf("."))) != null) {
				logger.debug("isAllowIp pass {} " , clientIp);
				 return true;
			}
			BizUtil.setSessionCode(response, CommonConstant.RETURN_CODE, CommonConstant.IP_CONTROL_MSG);
			return false;	 
		}
		*/
		return true;
	}
}
