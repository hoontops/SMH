package com.nbdf.commons.aop;

import java.math.BigDecimal;
import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.aspectj.lang.ProceedingJoinPoint;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StopWatch;

import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.interceptor.SessionManager;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;
import com.nexacro17.xapi.data.DataSet;

public class PiLogAdvice extends AbstractNbdfService{

    @Autowired
    private GeneralDao generalDao;

    private String pgmGb;
	private String pgmNm;
	private String workGb;
	private String workTgColumn;
	private String inputs;
	
	/** The Constant logger. */
	private static final Logger logger = LoggerFactory
			.getLogger(PiLogAdvice.class);
	
    public static final String NAMESPACE = "com.drens.dr.drbm.dao.DRBM00100Dao";

	
	public Object aroundMethodCall(ProceedingJoinPoint pjp) throws Throwable {
		
		logger.info("current ControllerMethod-->"+pjp
				.getSignature().getDeclaringType().getSimpleName()
				+ "." + pjp.getSignature().getName());
		String currControllerMethod = pjp.getSignature().getDeclaringType().getSimpleName() + "." + pjp.getSignature().getName();
		
		if("DRCC01000Controller.selectCounselNotiYn".equals(currControllerMethod)) return pjp.proceed();
		
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("LOOKUP_CODE", currControllerMethod);
		Map<String, Object> map = generalDao.selectOne(NAMESPACE +".selectLookupCodeForPiLog", param);
		
		if (map != null){
			if(map.get("ATTRIBUTE2") == null) return pjp.proceed();

			this.pgmGb = (String) map.get("MEANING");
			this.pgmNm = (String) map.get("DESCRIPTION");
			this.workGb = (String) map.get("ATTRIBUTE1");
			this.workTgColumn = (String) map.get("ATTRIBUTE2");
			this.inputs = (String) map.get("ATTRIBUTE3");
			piLogBefore(pjp);
		}	
		return pjp.proceed();
	}

	private void piLogBefore(ProceedingJoinPoint pjp) {
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

				StopWatch stopWatch = new StopWatch("pilog");
				stopWatch.start("pilog");
				
				DataSetMap dsMap = null;
				
				Map<String, Object> m = ((UiMapDto) arg).getInVariableMap();
				//logger.error("m-->"+m);
				insertPiLogHistoryM(m);
				dsMap = getParametersDataSetMap((UiMapDto) arg);
				//logger.error("dsMap-->"+dsMap);
				insertPiLogHistory(dsMap);

				stopWatch.stop();
				logger.trace(stopWatch.shortSummary());
			}
		}
	}	

	private void insertPiLogHistory(DataSetMap dsMap) {
		if(dsMap == null) return;
		
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> m = dsMap.get(i);
		
            insertPiLogHistoryM(m);
        }		
	}	

	private void insertPiLogHistoryM(Map<String, Object> m) {
		if(m == null) return;
	
		Map<String, Object> param = new HashMap<String, Object>();

		String workMan = (String)SessionManager.getInstance().getSessionInfo(ContextConstant.SESSION_USER_ACNT)
					   +"("+(String)SessionManager.getInstance().getSessionInfo(ContextConstant.SESSION_USER_NM)+")";
		String ipAddress = (String)SessionManager.getInstance().getSessionInfo(ContextConstant.SESSION_IP_ADDR);
		
		String workTarget = "";
		String workTargetCol = "";
		
		//logger.error("m-->"+m);
		String[] arrWorkTgCols = this.workTgColumn.split(",");
		
		int j = 0;
		Format formatter = new SimpleDateFormat("yyyyMMdd");
		int size = arrWorkTgCols.length;
		for(int i=0; i<arrWorkTgCols.length; i++){
			
			String keyNm = "";
			String keyVal = "";
			int k = 0;
			Iterator<String> iterator = m.keySet().iterator();
			while(iterator.hasNext()) {
				
	            keyNm = (String) iterator.next();
	    		//logger.error("keyNm-->"+keyNm);
	            if(keyNm.equals(arrWorkTgCols[i])){
					int type = getRowType(m);
					if("저장".equals(workGb) && type == DataSet.ROW_TYPE_DELETED){
						workGb = "삭제";
					}

	        		//logger.error("keyNm00-->"+keyNm);
	        		if(size == 1){
	            		if(m.get(keyNm) instanceof Date){
	            			workTarget = formatter.format(m.get(keyNm));
	            		}else if(m.get(keyNm) instanceof BigDecimal){
	            			BigDecimal bd = BigDecimal.valueOf((long) m.get(keyNm));
	            			workTarget = bd.toString();
	            		}else{
	            			workTarget = (String) m.get(keyNm);
	            		}
		            	workTargetCol = keyNm;
	            	}else{
	            		keyVal = "";
	            		if(m.get(keyNm) instanceof Date){
	            			keyVal = formatter.format(m.get(keyNm));
	            		}else if(m.get(keyNm) instanceof BigDecimal){
	            			BigDecimal bd = BigDecimal.valueOf((long) m.get(keyNm));
	            			keyVal = bd.toString();
	            		}else{
	            			keyVal = (String) m.get(keyNm);
	            		}

	        			workTarget += (j==0?"":",") + keyNm + ":" + keyVal;
	            		workTargetCol += (j==0?"":",") + keyNm; 
	            		k++;
	            	}
                    j++;
	            }
	        }
            if("".equals(keyVal) && size >1 && k==0){
    			workTarget += (j==0?"":",") + arrWorkTgCols[i] + ":" ;
        		workTargetCol += (j==0?"":",") + arrWorkTgCols[i]; 
            }

		}

		param.put("PGM_GB", this.pgmGb);
		param.put("PGM_NAME", this.pgmNm);
		param.put("WORK_GB", workGb);
		param.put("IP_ADDRESS", ipAddress);
		param.put("WORK_MAN", workMan);
		param.put("WORK_TARGET", workTarget);
		param.put("WORK_TARGET_COL", workTargetCol);
		
		if(!StringUtils.isEmpty(workTarget)) 
			generalDao.addInsert(NAMESPACE +".insertPiLogHistory", param);
			
    }		
}
