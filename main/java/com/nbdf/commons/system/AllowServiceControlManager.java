package com.nbdf.commons.system;

import com.nbdf.commons.system.schema.ServiceField;
import com.nbdf.commons.util.DateUtil;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AllowServiceControlManager {

	protected static Logger logger = LoggerFactory.getLogger(IpControlManager.class);
	
	public static boolean isAllowService(HttpServletRequest request,  HttpServletResponse response) throws Exception {
		if( SystemControlManager.getSystemControlMap(request.getRequestURI()) !=null){
			ServiceField sField = (ServiceField) SystemControlManager.getSystemControlMap(request.getRequestURI());
			
			if( DateUtil.isExpiredDate(sField)) {
				SystemControlManager.setByPass();
			}
		}
		return true;
	}
}
	 