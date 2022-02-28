package com.nbdf.commons.aop;


import java.util.Map;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StopWatch;

import com.nbdf.commons.web.support.AbstractNbdfService;

import smh.commons.TxnHistKey;

@Aspect
public class LasttxnidAdvice extends AbstractNbdfService{

	/** The Constant logger. */
	private static final Logger logger = LoggerFactory
			.getLogger(LasttxnidAdvice.class);

//    @Pointcut("execution(* com..*ServiceImpl.*(..)) or execution(* smh..*ServiceImpl.*(..))")
    @Pointcut("execution(* com..*AbstractNbdfDao.*(..))")
    public void pointCut() {}

	/*
	@Before("pointCut()")
	public void beforeMethodCall(JoinPoint pjp) throws Throwable {
		
		logger.debug("current ControllerMethod-->"+pjp
				.getSignature().getDeclaringType().getSimpleName()
				+ "." + pjp.getSignature().getName());
		String currServiceMethod = pjp.getSignature().getDeclaringType().getSimpleName() + "." + pjp.getSignature().getName();
		lasttxnidBefore(pjp);
	}
*/
	@Before("pointCut()")
	public void beforeDaoMethodCall(JoinPoint pjp) throws Throwable {
		
		logger.error("current Method-->"+pjp
				.getSignature().getDeclaringType().getSimpleName()
				+ "." + pjp.getSignature().getName());
		String currServiceMethod = pjp.getSignature().getDeclaringType().getSimpleName() + "." + pjp.getSignature().getName();
		lasttxnidDaoBefore(pjp);
	}
/*	
	private void lasttxnidBefore(JoinPoint pjp) {
		String currServiceMethod = pjp.getSignature().getName();

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

				StopWatch stopWatch = new StopWatch("lasttxnid");
				stopWatch.start("lasttxnid");
				
				DataSetMap dsMap = null;
				
				dsMap = getParametersDataSetMap((UiMapDto) arg);
				logger.error("dsMap-->"+dsMap);
				if(dsMap != null){
			        for (int i = 0, n = dsMap.size(); i < n; i++) {
			            dsMap.get(i).put("LASTTXNID", currServiceMethod);
			        }
				}

				stopWatch.stop();
				logger.trace(stopWatch.shortSummary());
			}
		}
	}	
*/
	private void lasttxnidDaoBefore(JoinPoint pjp) {
		String currServiceMethod = pjp.getSignature().getName();
		String transId = "";
		for (Object arg : pjp.getArgs()) {
			if (arg == null) {
				continue;
			}
			String argFullClassName = arg.getClass().getName();
			if (argFullClassName.startsWith("org.springframework")) {
				continue;
			}
			if (arg instanceof String) {
				transId = ((String) arg).substring(((String) arg).lastIndexOf(".")+1);
				if(transId.indexOf("select")>=0) break;
			}	
			if (arg instanceof Map) {
				logger.debug("{}", arg);

				StopWatch stopWatch = new StopWatch("lasttxnid");
				stopWatch.start("lasttxnid");
				
				((Map<String, Object>) arg).put("LASTTXNID", transId);
				((Map<String, Object>) arg).put("LASTTXNHISTKEY", TxnHistKey.getTxnHistKey());

				stopWatch.stop();
				logger.trace(stopWatch.shortSummary());
			}
		}
	}		
}
