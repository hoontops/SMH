package com.nbdf.commons.exception;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.ehcache.EhCacheCacheManager;

import com.nbdf.cmd.cm.cmsy.service.CMSY03200Service;
import com.nbdf.commons.util.SessionUtil;

/**
 * @Class BizException
 * @Description 비지니스 로직 에러
 * @Modification
 * 
 * @author
 * @version 1.0
 * @see
 * 
 *      (c) Copyright Built1 2014. All rights reserved.
 */
@SuppressWarnings("serial")
public class BizException extends RuntimeException {

    protected final Logger logger = LoggerFactory.getLogger(getClass());

    
    private static String makeMessage(String messageId, String args){
   	 /* comTrans.js에서 처리하도록 변경 2021-08-10
    	 String msg = "";
	   	 String[] arr = args.split(",");
    	 EhCacheCacheManager manager = (EhCacheCacheManager) SessionUtil.getBean("cacheManager");
	   	 String cacheName = "CmMsg_"+SessionUtil.getSessionValue("LANGUAGETYPE");
    	 if (manager != null) {
	   		 	 Cache cache = manager.getCache(cacheName);
		    	 if (cache != null && cache.get(cacheName) != null) {
		    		 List<Map<String, Object>> resultList = (List<Map<String, Object>>) cache.get(cacheName).get();
		    		 for (int i = 0; i < resultList.size(); i++) {
		    			  if(messageId.equals(resultList.get(i).get("MESSAGEID"))){
		    				  msg = (String) resultList.get(i).get("DESCRIPTION");
		    				  for(int j=0; j<arr.length; j++){
			    				  msg = msg.replaceAll("\\{"+j+"\\}", arr[j]);
		    				  }
		    				  return msg;
		    			  }
		    		 }
		    	 } 
	   	 }
	   	 if("".equals(msg) && !"".equals(args)) {
	   		return messageId + "|" + args;
	   	 }
	   	 */
	   	 if(!"".equals(args)) {
	   		 
	   		return messageId + "|" + args;
	   	 }
    	 return messageId;
    }
    
    public BizException() {
        super();
    }

    public BizException(String message) {
        super(message);
    }

    public BizException(String message, String args) {
    	super(makeMessage(message, args));
    }
}