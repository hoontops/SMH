package com.nbdf.cmd.cm.cmsa.service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.naming.NamingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.interceptor.SessionManager;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.BizUtil;
import com.nbdf.commons.util.DbUtil;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;



/**
* @file: CMSA00400ServiceImpl.java
* @Package: com.nbdf.ecm.cm.cmsa.service
* @Project name: 통합 경영관리시스템 재구축
* @Type name: CMSA00400ServiceImpl
* @Company: SICC
* @Create Date: 2015 2015. 3. 9. 오후 7:36:19
* @Author: XXXXXXXXXX
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일      수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 9.    진성하     최초  생성
 *
*/


@Service
public class CMSA00400ServiceImpl extends AbstractNbdfService implements CMSA00400Service, Runnable {

    public static final String NAMESPACE = "com.nbdf.cm.cmsa.dao.CMSA00400Dao";
    public static final String NAMESPACE2 = "com.drens.dr.drcr.dao.DRCR03060Dao";

    //private javax.sql.DataSource cp;
    private UiMapDto dto;
    private String workType;

    @Autowired
    private GeneralDao generalDao;

    /**
    * @fn
    * @brief (Override method)  동시작업 업무 조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA00400Service#selectFndApplicationVlList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectFndApplicationVlList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE+".selectFndApplicationVlList",param);

        putDataSetMap(dto, list);
    }
    /**
    * @fn
    * @brief (Override method)  보고서 업무 조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA00400Service#selectFndApplicationVlListForPrint(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectFndApplicationVlListForPrint(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE+".selectFndApplicationVlListForPrint",param);

        putDataSetMap(dto, list);
    }

    /**
    * @fn
    * @brief (Override method)  동시작업 프로그램 조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA00400Service#selectFndConcurrentProgramsVlList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectFndConcurrentProgramsVlList(UiMapDto dto) {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE+".selectFndConcurrentProgramsVlList",param);

        putDataSetMap(dto, list);
    }

    /**
    * @throws NamingException
     * @throws SQLException
     * @fn
    * @brief (Override method)  사용자쿼리 조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA00400Service#selectUserQryList(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void selectUserQryList(UiMapDto dto) throws NamingException, SQLException {
		String serverMode = BizUtil.getServerMode();
		//logger.error("serverMode-->"+serverMode);

        Connection con = null;
        Statement stmt = null;
        ResultSet rs = null;
        List<Map<String, Object>> list = null;

        Map<String, Object> param = getParametersMap(dto);
        String query = "";
        String condition = "";
        String orderby = "";
        
        String pageHeader = 
	        "SELECT	\n" 
	        +"Z.*	\n"
	        +"FROM	\n"
		    +"     (	\n"
		    +"       SELECT Y.*	\n"
		    +"            , ROWNUM RNUM	\n"
		    +"            , LAST_VALUE(ROWNUM) OVER (ORDER BY ROWNUM ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING) AS TOTAL_ROWS	\n"
		    +"         FROM	\n"
		    +"            (	\n";

        String pageBottom = 
	        "    ) Y	\n"
	        +"WHERE 1=1	\n"
	        +") Z	\n"
	        +"WHERE 1=1	\n";
        
        if(param.get("PAGE_NUMBER") != null){
        	int pageNumber = Integer.parseInt(String.valueOf(param.get("PAGE_NUMBER")+""));
        	int pageSize = Integer.parseInt(String.valueOf(param.get("PAGE_SIZE")+""));
        	pageBottom = pageBottom 
			   +"AND Z.RNUM > " + (pageNumber - 1) * pageSize   + "\n"
			   +"AND Z.RNUM <= " + pageNumber * pageSize ; 
        }
        
//		javax.naming.Context ctx;
//        ctx = new InitialContext();
//        cp = (javax.sql.DataSource) ctx.lookup("java:/comp/env/jdbc/dsdrens");
        try {
            con = DbUtil.getConnect("jdbc/dsifc");

            /* 
             * 최성민 추가
             */
            Map<String, String> sessionMap =SessionManager.getInstance().getSessionMap();
            
            String regExEnterpriseId = "\\#\\{"+ContextConstant.SESSION_ENTERPRISEID+"\\}";
        	String regExLanguage = "\\#\\{"+ContextConstant.SESSION_LANGUAGETYPE+"\\}";
        	String regExSiteId = "\\#\\{"+ContextConstant.SESSION_SITETYPE+"\\}";

        	String sEnterpriseId = "";
        	String sSiteId = "";
        	String sLanguage = "";
            if(sessionMap != null){
            	sEnterpriseId = "'"+(String) sessionMap.get("gv_enterpriseId")+"'";
            	sSiteId = "'"+(String) sessionMap.get("gv_siteType")+"'";
            	sLanguage = "'"+(String) sessionMap.get("gv_languageType")+"'";
            }
            /* 
             * 최성민 추가
             */
        	
            if(param.get("QUERY") != null) query = (String) param.get("QUERY");
            query = query.replaceAll(regExEnterpriseId, sEnterpriseId);
            query = query.replaceAll(regExLanguage, sLanguage);
            query = query.replaceAll(regExSiteId,sSiteId );            
            if(param.get("CONDITION") != null) condition = (String) param.get("CONDITION");
            condition = condition.replaceAll(regExEnterpriseId, sEnterpriseId);
            condition = condition.replaceAll(regExLanguage, sLanguage);
            condition = condition.replaceAll(regExSiteId, sSiteId);
            if(param.get("ORDERBY") != null) orderby = (String) param.get("ORDERBY");

            query = pageHeader + "\n" + query + "\n" + condition + "\n" + orderby + "\n" + pageBottom;
            
            logger.error("query::"+query);
            stmt = con.createStatement();
            rs = stmt.executeQuery(query);
            list = getRsToList(rs);
            rs.close();
            stmt.close();
            con.close();
        } catch (SQLException e) {
            if(rs != null) rs.close();
            if(stmt != null) stmt.close();
            if(con != null) con.close();
        } finally{
            if(rs != null) rs.close();
            if(stmt != null) stmt.close();
            if(con != null) con.close();
        }

        putDataSetMap(dto, list);
    }

    public List<Map<String, Object>> selectUserQryList(Map<String, Object> param) throws Exception {
		String serverMode = BizUtil.getServerMode();
		//logger.error("serverMode-->"+serverMode);

        Connection con = null;
        Statement stmt = null;
        ResultSet rs = null;
        List<Map<String, Object>> list = null;

        String query = "";
        String condition = "";
        String orderby = "";
        
        String pageHeader = 
	        "SELECT	\n" 
	        +"Z.*	\n"
	        +"FROM	\n"
		    +"     (	\n"
		    +"       SELECT Y.*	\n"
		    +"            , ROWNUM RNUM	\n"
		    +"            , LAST_VALUE(ROWNUM) OVER (ORDER BY ROWNUM ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING) AS TOTAL_ROWS	\n"
		    +"         FROM	\n"
		    +"            (	\n";

        String pageBottom = 
	        "    ) Y	\n"
	        +"WHERE 1=1	\n"
	        +") Z	\n"
	        +"WHERE 1=1	\n";
        
        if(param.get("PAGE_NUMBER") != null){
        	int pageNumber = Integer.parseInt(String.valueOf(param.get("PAGE_NUMBER")+""));
        	int pageSize = Integer.parseInt(String.valueOf(param.get("PAGE_SIZE")+""));
        	pageBottom = pageBottom 
			   +"AND Z.RNUM > " + (pageNumber - 1) * pageSize   + "\n"
			   +"AND Z.RNUM <= " + pageNumber * pageSize ; 
        }
        
//		javax.naming.Context ctx;
//        ctx = new InitialContext();
//        cp = (javax.sql.DataSource) ctx.lookup("java:/comp/env/jdbc/dsdrens");
        try {
            con = DbUtil.getConnect("jdbc/dsifc");

            /* 
             * 최성민 추가
             */
            Map<String, String> sessionMap =SessionManager.getInstance().getSessionMap();
            
            String regExEnterpriseId = "\\#\\{"+ContextConstant.SESSION_ENTERPRISEID+"\\}";
        	String regExLanguage = "\\#\\{"+ContextConstant.SESSION_LANGUAGETYPE+"\\}";
        	String regExSiteId = "\\#\\{"+ContextConstant.SESSION_SITETYPE+"\\}";

        	String sEnterpriseId = "";
        	String sSiteId = "";
        	String sLanguage = "";
            if(sessionMap != null){
            	sEnterpriseId = "'"+(String) sessionMap.get("gv_enterpriseId")+"'";
            	sSiteId = "'"+(String) sessionMap.get("gv_siteType")+"'";
            	sLanguage = "'"+(String) sessionMap.get("gv_languageType")+"'";
            }
            /* 
             * 최성민 추가
             */
        	
            if(param.get("QUERY") != null) query = (String) param.get("QUERY");
            query = query.replaceAll(regExEnterpriseId, sEnterpriseId);
            query = query.replaceAll(regExLanguage, sLanguage);
            query = query.replaceAll(regExSiteId,sSiteId );            
            if(param.get("CONDITION") != null) condition = (String) param.get("CONDITION");
            condition = condition.replaceAll(regExEnterpriseId, sEnterpriseId);
            condition = condition.replaceAll(regExLanguage, sLanguage);
            condition = condition.replaceAll(regExSiteId, sSiteId);
            if(param.get("ORDERBY") != null) orderby = (String) param.get("ORDERBY");

            query = pageHeader + "\n" + query + "\n" + condition + "\n" + orderby + "\n" + pageBottom;
            
            logger.error("query::"+query);
            stmt = con.createStatement();
            rs = stmt.executeQuery(query);
            list = getRsToList(rs);
            rs.close();
            stmt.close();
            con.close();
        } catch (SQLException e) {
            if(rs != null) rs.close();
            if(stmt != null) stmt.close();
            if(con != null) con.close();
        } finally{
            if(rs != null) rs.close();
            if(stmt != null) stmt.close();
            if(con != null) con.close();
        }

        return list;
    }    
    public List<Map<String, Object>> getRsToList(ResultSet rs) throws SQLException{
        List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
        while(rs.next()){
            Map<String, Object> map = new HashMap<String, Object>();
            ResultSetMetaData rsMD = rs.getMetaData();
            int rsMDCnt = rsMD.getColumnCount();
            for( int i = 1; i <= rsMDCnt ; i++){
                String column = rsMD.getColumnName(i);
                map.put(column, rs.getObject(column));
            }
            list.add(map);
        }
        return list;

    }

    /**
    * @fn
    * @brief (Override method)  보고서 업무 조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA00400Service#executeShell(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void executeShell(UiMapDto dto) {
    	Map<String, Object> param = getParametersMap(dto);
    	Runtime rt = Runtime.getRuntime();
    	String exeFile = param.get("EXE_PATH")+"";
    	System.out.println("exeFile: " + exeFile);
    	Process p;
    	             
    	try {
    	    p = rt.exec(exeFile);
    	    p.waitFor();
    	} catch (Exception e) {
    	    e.printStackTrace();
    	}

    	putDataSetMap(dto, 1);
    }

    /**
    * @fn
    * @brief (Override method)  보고서 업무 조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA00400Service#executeShell(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void ozExport(UiMapDto dto) {
    	
    	List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
    	
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        int id = 0;
        String popupCd = "";
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);    	
	    	String result = "";
	
	    	String		ozrName		= (String) param.get("OZR_NAME");
	    	String		odiName		= (String) param.get("ODI_NAME");
	    	String 		odiParams 	= (String) param.get("ODI_PARAMS");
	    	String 		ozrParams 	= (String) param.get("OZR_PARAMS");
	    	String		exportFormat	= (String) param.get("EXPORT_FORMAT");
	    	String		exportFileName	= (String) param.get("EXPORT_FILE_NAME");
	    	String      sParameters = "?ozrName="+ozrName+"&odiName="+odiName+"&odiParams="+odiParams+"&ozrParams="+ozrParams+"&exportFormat="+exportFormat+"&exportFileName="+exportFileName;
	    	String 		sUrl = "";
	    	String 		serverMode = BizUtil.getServerMode();
	    	if("prod".equals(serverMode)){
	    		sUrl = "https://report.daeryunens.com:20000/oz70report/jsp/oz_exportInJava.jsp"+sParameters;
	    	}else{
	    		sUrl = "http://10.5.10.31:8080/oz70/jsp/oz_exportInJava.jsp"+sParameters;
	    	}
	    	
	        URL url = null;
	        URLConnection urlConnection = null;
	        
	        try {
				url = new URL(sUrl);
				urlConnection = url.openConnection();
			} catch (MalformedURLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	        
	    	try (InputStream in = urlConnection.getInputStream();
	                ByteArrayOutputStream out2 = new ByteArrayOutputStream()) {
	            byte[] buf = new byte[1024 * 8];
	            int length = 0;
	            while ((length = in.read(buf)) != -1) {
	                out2.write(buf, 0, length);
	            }
	            
	            result = new String(out2.toByteArray(), "UTF-8").trim();
	            String[] arr_rslt = result.split("\\|"); 
	            if("Y".equals(arr_rslt[0])){
	                param.put("SUCC_YN", arr_rslt[0]);
	                param.put("FILE_PATH", arr_rslt[1]);
	                param.put("PAGE_CNT", arr_rslt[2]);
	                param.put("COMPLETED_TIME", arr_rslt[6]);
	            }else{
	                param.put("SUCC_YN", arr_rslt[0]);
	                param.put("ERR_DESC", arr_rslt[1]);
	            	
	            }
	            list.add(param);
	        } catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				
			}
        }	
        //logger.error("list-->"+list);
        putDataSetMap(dto, list);
    }
    /**
    * @fn
    * @brief (Override method)  보고서 업무 조회
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA00400Service#ozExportReduce(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void ozExportReduce(UiMapDto dto) {
    	
    	List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
    	
        DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");
        int id = 0;
        String popupCd = "";
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> param = dsMap.get(i);    	
	    	String result = "";
	
	    	String		ozrName		= (String) param.get("OZR_NAME");
	    	String		odiName		= (String) param.get("ODI_NAME");
	    	String 		odiParams 	= (String) param.get("ODI_PARAMS");
	    	String 		ozrParams 	= (String) param.get("OZR_PARAMS");
	    	String		exportFormat	= (String) param.get("EXPORT_FORMAT");
	    	String		exportFileName	= (String) param.get("EXPORT_FILE_NAME");
	    	String      sParameters = "?ozrName="+ozrName+"&odiName="+odiName+"&odiParams="+odiParams+"&ozrParams="+ozrParams+"&exportFormat="+exportFormat+"&exportFileName="+exportFileName;
	    	String 		sUrl = "";
	    	String 		serverMode = BizUtil.getServerMode();
	    	if("prod".equals(serverMode)){
	    		sUrl = "https://report.daeryunens.com:20000/oz70report/jsp/oz_exportInJava.jsp"+sParameters;
	    	}else{
	    		sUrl = "http://10.5.10.31:8080/oz70/jsp/oz_exportInJava.jsp"+sParameters;
	    	}
	    	
	        URL url = null;
	        URLConnection urlConnection = null;
	        
	        try {
				url = new URL(sUrl);
				urlConnection = url.openConnection();
			} catch (MalformedURLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	        
	    	try (InputStream in = urlConnection.getInputStream();
	                ByteArrayOutputStream out2 = new ByteArrayOutputStream()) {
	            byte[] buf = new byte[1024 * 8];
	            int length = 0;
	            while ((length = in.read(buf)) != -1) {
	                out2.write(buf, 0, length);
	            }
	            
	            result = new String(out2.toByteArray(), "UTF-8").trim();
	            String[] arr_rslt = result.split("\\|"); 
	            if("Y".equals(arr_rslt[0])){
	                param.put("FILE_CRT_YN", arr_rslt[0]);
	                param.put("FILE_PATH", arr_rslt[1]);
	                param.put("PAGE_CNT", arr_rslt[2]);
	                param.put("FILE_CRT_TIME", arr_rslt[6]);
	            }else{
	                param.put("FILE_CRT_YN", arr_rslt[0]);
	                param.put("ERR_DESC", arr_rslt[1]);
	            	
	            }
	            generalDao.addUpdate(NAMESPACE2 + ".mergeCrtFileRslt", param);
	            list.add(param);
	        } catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				
			}
        }	
        //logger.error("list-->"+list);
        putDataSetMap(dto, list);
    }      
    public void executeThreadShell(UiMapDto dto) {
        logger.debug("executeThreadShell start.....");
        this.dto = dto;
        Thread thr = new Thread(this);
        thr.start();
    }
    
    public void ozExportThread(UiMapDto dto) {
        logger.debug("ozExportThread start.....");
        this.dto = dto;
        this.workType = "OT";
        Thread thr = new Thread(this);
        thr.start();
    	
    }
    
    @Override
	public void run() {
    	if("OT".equals(this.workType)){
    		ozExportReduce(dto);
    	}else{
    		executeShell(dto);
    	}
	}
    
    
 }
