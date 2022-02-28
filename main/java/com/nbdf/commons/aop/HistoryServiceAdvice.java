package com.nbdf.commons.aop;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.Cache;
import org.springframework.cache.ehcache.EhCacheCacheManager;
import org.springframework.util.StopWatch;

import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
//import com.nbdf.commons.web.support.GeneralDao;
import com.nbdf.commons.web.support.GeneralDao;

import smh.commons.TxnHistKey;

@Aspect
public class HistoryServiceAdvice extends AbstractNbdfService{

//    @Value("#{Props['history.service.method']}")
//    private String methods;

    @Autowired
    private GeneralDao generalDao;

    /** The Constant logger. */
    private static final Logger logger = LoggerFactory
			.getLogger(HistoryServiceAdvice.class);

	public static final String NAMESPACE = "smh.com.dao.COM00100Dao";

	@Pointcut("execution(* com..*ServiceImpl.*(..)) || execution(* smh..*ServiceImpl.*(..))")
    public void pointCut() {}

	@Around("pointCut()")
	public Object aroundMethodCall(ProceedingJoinPoint pjp) throws Throwable {
		
//		logger.debug("current ControllerMethod-->"+pjp
//				.getSignature().getDeclaringType().getSimpleName()
//				+ "." + pjp.getSignature().getName());
//		String currServiceMethod = pjp.getSignature().getDeclaringType().getSimpleName() + "." + pjp.getSignature().getName();
		lasttxnidBefore(pjp);
		Object returnObj = pjp.proceed();
		lasttxnidAfter(pjp);
		return returnObj;
	}
	private void lasttxnidBefore(JoinPoint pjp) {
		String currServiceMethod = pjp.toShortString().replace("(..))", "");
		currServiceMethod = currServiceMethod.replace("execution(", "");
        SessionUtil.setSessionValue("PREV_SERVICE_METHOD_TRACE", SessionUtil.getSessionValue("SERVICE_METHOD_TRACE")); // Catch a mouse
        SessionUtil.setSessionValue("SERVICE_METHOD_TRACE", currServiceMethod); // Catch a mouse
        SessionUtil.setSessionValue("SERVICE_METHOD", currServiceMethod); // Catch a mouse
        if(SessionUtil.getSessionValue("SITETYPE")!=null) {
	        Map<String, Object> paramSample2step = new HashMap<String, Object>();
	        paramSample2step.put("SESSION_SITETYPE",SessionUtil.getSessionValue("SITETYPE"));
	        Map<String, Object> mapSample2step = generalDao.addSelectOneMap(NAMESPACE + ".selectBasPlantSample2step",paramSample2step);
	        if(mapSample2step != null)
	        	SessionUtil.setSessionValue("SAMPLE2STEP", mapSample2step.get("SAMPLE2STEP")); // Catch a mouse
        }
//		logger.error("currServiceMethod-->"+currServiceMethod);	//CMSY00100ServiceImpl.loginPost(..)
		EhCacheCacheManager manager = (EhCacheCacheManager) SessionUtil.getBean("cacheManager");
		String cacheName = "HistoryAopInfo";
		String services = "";
		String daos = "";
		if (manager != null) {
			 Cache cache = manager.getCache(cacheName);
			 if (cache != null && cache.get(cacheName) != null) {
				Map<String, Object> map = (Map<String, Object>) cache.get(cacheName).get();
				if(map==null || map.get("SERVICES")==null) {
					Map<String, Object> param = new HashMap<String, Object>();
					param.put("LOOKUP_TYPE","COM_HISTORY_SAVE");
					List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectLookupCodeHistory",param);
					for(int j=0; j<list.size(); j++) {
						services = services + (j==0?"":",") + list.get(j).get("DESCRIPTION");
						daos = daos + (j==0?"":",") + list.get(j).get("MEANING");
					}
					map.put("SERVICES",services);
					map.put("DAOS",daos);
					cache = manager.getCache(cacheName);
					cache.put(cacheName, map);
				}else {
					services = (String) map.get("SERVICES");
					daos = (String) map.get("DAOS");
				}
//				logger.error("services0-->"+services);
//				logger.error("daos0-->"+daos);
			 }else {
				Map<String, Object> param = new HashMap<String, Object>();
				Map<String, Object> map = new HashMap();
				param.put("LOOKUP_TYPE","COM_HISTORY_SAVE");
				List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectLookupCodeHistory",param);
				for(int j=0; j<list.size(); j++) {
					services = services + (j==0?"":",") + list.get(j).get("DESCRIPTION");
					daos = daos + (j==0?"":",") + list.get(j).get("MEANING");
				}
				map.put("SERVICES",services);
				map.put("DAOS",daos);
				cache = manager.getCache(cacheName);
				cache.put(cacheName, map);
//				logger.error("services-->"+services);
//				logger.error("daos-->"+daos);
			 }
			 
					
		}
//		logger.error("services-->"+services);
		for (Object arg : pjp.getArgs()) {
			if (arg == null) {
				continue;
			}
			String argFullClassName = arg.getClass().getName();
			if (argFullClassName.startsWith("org.springframework")) {
				continue;
			}
			if (arg instanceof UiMapDto) {
				logger.debug("{}", arg);
				Map<String, DataSetMap> inDataset = ((UiMapDto) arg).getInDataSetMap();
				Iterator<String> iter = inDataset.keySet().iterator(); 
				String txngrouphistkey = TxnHistKey.getTxnGroupHistKey();
				DataSetMap dsMap = null;
				while(iter.hasNext()) { 
					String key = iter.next(); 
					dsMap = getParametersDataSetMap((UiMapDto) arg, key);
					logger.debug("txngrouphistkey-->"+txngrouphistkey);
					logger.debug("key-->"+key);
					if(dsMap != null){
						logger.debug("dsMap.size()-->"+dsMap.size());
				        for (int i = 0, n = dsMap.size(); i < n; i++) {
				        	if(dsMap.get(i).get("TXNGROUPHISTKEY") ==null ) dsMap.get(i).put("TXNGROUPHISTKEY", txngrouphistkey);
				            setWhoCol(dsMap.get(i));
		            		if(services.indexOf(currServiceMethod+",") >= 0) {
					            dsMap.get(i).put("SERVICE_METHOD", currServiceMethod);
			            	}
				        }
					}
				}
				StopWatch stopWatch = new StopWatch("lasttxnid");
				stopWatch.start("lasttxnid");

				stopWatch.stop();
				logger.trace(stopWatch.shortSummary());
			}
		}

	}	
	private void lasttxnidAfter(JoinPoint pjp) {
		SessionUtil.setSessionValue("SERVICE_METHOD_TRACE", SessionUtil.getSessionValue("PREV_SERVICE_METHOD_TRACE"));
		SessionUtil.setSessionValue("SERVICE_METHOD", SessionUtil.getSessionValue("PREV_SERVICE_METHOD_TRACE"));
	}	
}
