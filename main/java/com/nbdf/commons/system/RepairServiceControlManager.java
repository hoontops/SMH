package com.nbdf.commons.system;

import com.nbdf.commons.system.schema.ServiceField;
import com.nbdf.commons.util.BizUtil;
import com.nbdf.commons.util.DateUtil;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class RepairServiceControlManager {

	protected static Logger logger = LoggerFactory.getLogger(IpControlManager.class);
	
	public static boolean isRepairService(HttpServletRequest request,  HttpServletResponse response) throws Exception {
		logger.debug("b1111");
		//if( SystemControlManager.getSystemControlMap(request.getRequestURI()) != null){
			logger.debug("b1111");
			
			ServiceField sField = (ServiceField) SystemControlManager.getSystemControlMap(request.getRequestURI());
			logger.debug("b11112");
			if( DateUtil.isExpiredDate(sField)) {
				return true;
			}
			
			logger.debug("b11113");
			BizUtil.setSessionCode(response, CommonConstant.RETURN_CODE, SystemControlManager.rtnMsg(sField));
			return false;
		//}
		//return true;
	}
}
	 