package com.nbdf.commons.aop;


import java.util.HashMap;
import java.util.Map;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.ehcache.EhCacheCacheManager;
import org.springframework.util.StopWatch;

import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import smh.commons.TxnHistKey;

@Aspect
public class HistoryAdvice extends AbstractNbdfService{

//    @Value("#{Props['history.dao.method']}")
//    private String methods;

    @Autowired
    private GeneralDao generalDao;
	
	/** The Constant logger. */
	private static final Logger logger = LoggerFactory
			.getLogger(HistoryAdvice.class);

	public static final String NAMESPACE = "smh.com.dao.COM00100Dao";

    @Pointcut("execution(* com..*AbstractNbdfDao.*(..)) || execution(* egovframework..*EgovAbstractMapper.*(..))")
    public void pointCut() {}

	@Around("pointCut()")
	public Object AroundDaoMethodCall(ProceedingJoinPoint pjp) throws Throwable {
		
//		logger.error("current Method-->"+pjp
//				.getSignature().getDeclaringType().getSimpleName()
//				+ "." + pjp.getSignature().getName());
//		logger.error("current00-->"+pjp.toLongString());	
		
//		String currServiceMethod = pjp.getSignature().getDeclaringType().getSimpleName() + "." + pjp.getSignature().getName();
		
		String serviceMethod = historyDaoBefore(pjp);
		
		Object returnObj = pjp.proceed();
//		if(returnObj != null) {
//			 logger.error("returnObj.toString() : "+returnObj.toString());  
//        }
		
		if(!"-1".equals(serviceMethod)) historyDaoAfter(pjp,serviceMethod);
		return returnObj;
	}
	
	private String historyDaoBefore(ProceedingJoinPoint pjp) {
		String currDaoMethod = pjp.getSignature().getName();
		if(SessionUtil.getSessionValue("USER_ID")==null) return "-1";
		
		EhCacheCacheManager manager = (EhCacheCacheManager) SessionUtil.getBean("cacheManager");
		String cacheName = "HistoryAopInfo";
		String services = "";
		String daos = "";
		if (manager != null) {
 			 Cache cache = manager.getCache(cacheName);
			 if (cache != null && cache.get(cacheName) != null) {
				Map<String, Object> map = (Map<String, Object>) cache.get(cacheName).get();
				services = (String) map.get("SERVICES")+",";
				daos = (String) map.get("DAOS")+",";
			 } 
		}
//		logger.error("services-->"+services);
//		logger.error("daos-->"+daos);
		String queryId = "";
		String txnId = "";
		String serviceMethod = "";
		String strRtn = "";
		for (Object arg : pjp.getArgs()) {
//			logger.error("{}", arg);
			if (arg == null) {
				continue;
			}
			String argFullClassName = arg.getClass().getName();
//			logger.error("currDaoMethod-->"+currDaoMethod);
			if (argFullClassName.startsWith("org.springframework")) {
				continue;
			}
			if (arg instanceof String) {
				if(arg != null && !"".equals(arg)) {
//					logger.error("(String) arg::"+(String) arg);
					txnId = SessionUtil.getSessionValue("REQUESTURI") +"."+SessionUtil.getSessionValue("SERVICE_METHOD") +"."+ ((String) arg).substring(((String) arg).lastIndexOf(".")+1);
					//queryId = SessionUtil.getSessionValue("SERVICE_METHOD_TRACE") +"."+ ((String) arg).substring(((String) arg).lastIndexOf(".")+1);
					queryId = ((String) arg).substring(((String) arg).lastIndexOf(".")+1);
					logger.error("txnId::"+txnId);
//					logger.error("queryId::"+queryId);
					if(daos.indexOf(queryId+",")<0) strRtn = "-1";
	//				logger.error("queryId00-->"+daos.indexOf(queryId+","));
					if((queryId.toLowerCase().startsWith("insert") && queryId.toLowerCase().endsWith("history"))) {
						strRtn = "-1";
					}else if(currDaoMethod.toLowerCase().toLowerCase().indexOf("select")>=0 ) {	
						strRtn = "-1";
					} 
				}
			}	
			if (arg instanceof Map) {
//				logger.error("{}", arg);
				StopWatch stopWatch = new StopWatch("lasttxnid");
				stopWatch.start("lasttxnid");
				if(currDaoMethod.toLowerCase().endsWith("insert")||currDaoMethod.toLowerCase().endsWith("update")||currDaoMethod.toLowerCase().endsWith("delete")) {
					if((queryId.toLowerCase().startsWith("insert") && queryId.toLowerCase().endsWith("history"))) {
					}else {
						((Map<String, Object>) arg).put("TXNID", txnId);
						((Map<String, Object>) arg).put("LASTTXNID", ((Map<String, Object>) arg).get("TXNID"));
						if(((Map<String, Object>) arg).get("TXNHISTKEY")==null || "".equals(((Map<String, Object>) arg).get("TXNHISTKEY"))){
							((Map<String, Object>) arg).put("TXNHISTKEY", TxnHistKey.getTxnHistKey());
							if(((Map<String, Object>) arg).get("LASTTXNHISTKEY")==null || "".equals(((Map<String, Object>) arg).get("LASTTXNHISTKEY"))){
								((Map<String, Object>) arg).put("LASTTXNHISTKEY", ((Map<String, Object>) arg).get("TXNHISTKEY"));
							}	
						}
						if(((Map<String, Object>) arg).get("LASTTXNHISTKEY")==null || "".equals(((Map<String, Object>) arg).get("LASTTXNHISTKEY"))){
							((Map<String, Object>) arg).put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());
							if(((Map<String, Object>) arg).get("TXNHISTKEY")==null || "".equals(((Map<String, Object>) arg).get("TXNHISTKEY"))){
								((Map<String, Object>) arg).put("TXNHISTKEY", ((Map<String, Object>) arg).get("LASTTXNHISTKEY"));
							}
						}	
						if(((Map<String, Object>) arg).get("TXNID")!=null && !"".equals(((Map<String, Object>) arg).get("TXNID")) && ((Map<String, Object>) arg).get("TXNID_PREV")==null) {
							((Map<String, Object>) arg).put("TXNID_PREV", ((Map<String, Object>) arg).get("TXNID"));
						}	
	
						((Map<String, Object>) arg).put("LASTTXNUSER", SessionUtil.getSessionValue("USER_ID"));
						((Map<String, Object>) arg).put("TXNUSER", SessionUtil.getSessionValue("USER_ID"));
						
//						if(((Map<String, Object>) arg).get("TXNGROUPHISTKEY")==null || "".equals(((Map<String, Object>) arg).get("TXNGROUPHISTKEY"))) {
//							((Map<String, Object>) arg).put("TXNGROUPHISTKEY", SessionUtil.getSessionValue("REQUESTURI"));
//						}	
//						if(((Map<String, Object>) arg).get("LASTTXNGROUPHISTKEY")==null || "".equals(((Map<String, Object>) arg).get("LASTTXNGROUPHISTKEY"))) {
//							((Map<String, Object>) arg).put("LASTTXNGROUPHISTKEY", SessionUtil.getSessionValue("REQUESTURI"));
//						}	
					}
					logger.error("TXNID::"+((Map<String, Object>) arg).get("TXNID"));
				}
				
				setWhoCol(((Map<String, Object>) arg));
				stopWatch.stop();
				logger.trace(stopWatch.shortSummary());
//				logger.error("{}", arg);
//				serviceMethod = (String) ((Map<String, Object>) arg).get("SERVICE_METHOD");
//				if(((Map<String, Object>) arg).get("SERVICE_METHOD")==null) return "-1";
				serviceMethod = (String) SessionUtil.getSessionValue("SERVICE_METHOD");
//				logger.error("services:::"+ services);
//				logger.error("serviceMethod:::"+ serviceMethod);
				if(services.indexOf(serviceMethod+",") < 0) strRtn = "-1";	// return "-1";
//				logger.error("strRtn:::"+ strRtn);
			}

		}
		return strRtn;
	}	
	
	private void historyDaoAfter(ProceedingJoinPoint pjp, String serviceMethod) {
//		String currServiceMethod = pjp.getSignature().getName();
		String queryId = "";
		String queryIdHist = "";
		for (Object arg : pjp.getArgs()) {
			if (arg == null) {
				continue;
			}
			String argFullClassName = arg.getClass().getName();
			if (argFullClassName.startsWith("org.springframework")) {
				continue;
			}
			if (arg instanceof String) {
				//queryId = ((String) arg);
				//queryId = ((String) arg).substring(((String) arg).lastIndexOf(".")+1);
				if(arg != null && !"".equals(arg)) {
//					logger.error("(String) arg00::"+(String) arg);
					queryId = ((String) arg).substring(((String) arg).lastIndexOf(".")+1);
//					logger.error("queryId00::"+queryId);
					Map<String, Object> param = new HashMap<String, Object>();
					param.put("LOOKUP_TYPE", "COM_HISTORY_SAVE");
					
					if(queryId.endsWith("history")) break;	//insert history 제외
					
					param.put("MEANING", queryId);
					param.put("DESCRIPTION", serviceMethod);
					Map<String, Object> map = generalDao.addSelectOneMap(NAMESPACE +".selectLookupCodeHistory", param);
					if(map == null) break;
					queryIdHist = (String) map.get("LOOKUP_CODE");
				}
			}
			
			if (arg instanceof Map ) {
				logger.debug("{}", arg);
//				if(((Map<String, Object>) arg).get("TXNGROUPHISTKEY") == null) break;
				
				StopWatch stopWatch = new StopWatch("history");
				stopWatch.start("history");
//				((Map<String, Object>) arg).put("TXNUSER", ((Map<String, Object>) arg).get("CREATOR"));
//				((Map<String, Object>) arg).put("TXNHISTKEY", ((Map<String, Object>) arg).get("LASTTXNHISTKEY"));
//				((Map<String, Object>) arg).put("TXNID", ((Map<String, Object>) arg).get("LASTTXNID"));
				((Map<String, Object>) arg).put("TXNID", ((Map<String, Object>) arg).get("TXNID_PREV"));
//				logger.error("{}", arg);
				generalDao.addInsert(NAMESPACE +"."+ queryIdHist, (Map<String, Object>) arg);
				stopWatch.stop();
				logger.trace(stopWatch.shortSummary());
			}
		}
	}

}
