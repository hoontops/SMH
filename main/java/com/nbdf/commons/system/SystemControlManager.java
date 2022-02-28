package com.nbdf.commons.system;

import static com.nbdf.commons.system.CommonConstant.BY_PASS_SYSTEM_CONTROL;
import com.nbdf.commons.system.schema.ServiceField;
import com.nbdf.commons.util.SessionUtil;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class SystemControlManager {

	private static boolean offService = true;
	public static ConcurrentHashMap<String,Object> systemControlMap = new ConcurrentHashMap<String,Object>();
	
	public static void clearMap(){
		systemControlMap.clear();
	}
 
    public static void setSystemControlMap(String key, Object value){
    	systemControlMap.put(key, value);
    }

	public static Object getSystemControlMap(String key){
		return systemControlMap.get(key);
	}
	 
	public static Map<String,Object>  getSystemControlMap(){
		return systemControlMap;
	}
	
	public static boolean isOffService() {
		return offService;
	}
	
	public static boolean isEmptyMap() {
		if( systemControlMap.size() == 0 ) {
			return true;
		}
		return false;
	}
	
	public static String rtnMsg(ServiceField serviceField){
		if("".equals( serviceField.getMessage() ) || ( serviceField.getMessage() == null ) ) {
			return CommonConstant.REPAIR_MSG;
		}
		return serviceField.getMessage();
	}
	
	public static void setOffService(boolean isOff) {
		offService = isOff;
	}
	
	public static void setByPass() {
		SessionUtil.getRequest().setAttribute(BY_PASS_SYSTEM_CONTROL, true);
	}
	
	public static boolean isByPass(){
		if( (Boolean) SessionUtil.getRequest().getAttribute(BY_PASS_SYSTEM_CONTROL) == null )  {
			return false;
		}
		return true;
	}
}
