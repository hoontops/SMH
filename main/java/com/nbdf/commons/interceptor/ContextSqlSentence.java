package com.nbdf.commons.interceptor;

import com.nbdf.commons.util.SessionUtil;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;


//public interface ContextSqlSentence {
public class ContextSqlSentence implements java.io.Serializable {
    private static final long serialVersionUID = -3179517192256653676L;
    public static String sqlSentence = "select * from dual";
    public static String qryCnd        = "COMMONS";
    public static String qryRsltCnt    = "0";

    private static Map<String, Object> sqlMap = new ConcurrentHashMap<String, Object>(); 
    
    public static String getSqlSentence() {
    	String sql = (String) sqlMap.get(SessionUtil.getSessionId());
    	
    	if (sql == null) {
    		sql = sqlSentence;
    	} else {
        	sqlMap.remove(SessionUtil.getSessionId());
    	}

    	return sql;
    }
    
    public static void setSqlSentence(String sqlSentence) {
    	sqlMap.put(SessionUtil.getSessionId(), sqlSentence);
    }
    
    public String getQryCnd() {
        return qryCnd;
    }
    
    public void setQryCnd(String qryCnd) {
        this.qryCnd = qryCnd;
    }
    
    public String getQryRsltCnt() {
        return qryRsltCnt;
    }

    public void setQryRsltCnt(String qryRsltCnt) {
        this.qryRsltCnt = qryRsltCnt;
    }
}