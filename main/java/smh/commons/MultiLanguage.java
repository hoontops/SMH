package smh.commons;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.Cache;
import org.springframework.cache.ehcache.EhCacheCacheManager;

import com.nbdf.commons.util.SessionUtil;

public class MultiLanguage {
	private static final Logger logger = LoggerFactory
			.getLogger(MultiLanguage.class);

	public static String getMessage(String messageId) {
	   	 String msg = "";
	   	 EhCacheCacheManager manager = (EhCacheCacheManager) SessionUtil.getBean("cacheManager");
		   	 String cacheName = "CmMsg_"+SessionUtil.getSessionValue("LANGUAGETYPE");
	   	 if (manager != null) {
		   		 	 Cache cache = manager.getCache(cacheName);
			    	 if (cache != null && cache.get(cacheName) != null) {
			    		 List<Map<String, Object>> resultList = (List<Map<String, Object>>) cache.get(cacheName).get();
			    		 for (int i = 0; i < resultList.size(); i++) {
			    			  if(messageId.equals(resultList.get(i).get("MESSAGEID"))){
			    				  msg = (String) resultList.get(i).get("DESCRIPTION");
			    				  return msg;
			    			  }
			    		 }
			    	 } 
		   	 }
		   	 
	   	 return messageId;
	}
	
	public static String getMessage(String messageId, String args) {
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
		   	 
	   	 return messageId;
	}

	public static String getMessage(String messageId, String langType , String args) {
	   	 String msg = "";
	   	 String[] arr = args.split(",");
	   	 EhCacheCacheManager manager = (EhCacheCacheManager) SessionUtil.getBean("cacheManager");
		   	 String cacheName = "CmMsg_"+langType;
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
		   	 
	   	 return messageId;
	}
	
}
