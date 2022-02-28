package com.nbdf.commons.interceptor;

import java.io.IOException;
import java.net.UnknownHostException;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nbdf.commons.util.BizUtil;
import com.nbdf.commons.util.DateUtil;
import com.nbdf.commons.util.ObjectUtil;
import com.nbdf.commons.util.SessionUtil;

/**
* @file: SessionManager.java
* @Package: com.nbdf.commons.interceptor
* @Project name: IFC MES시스템 구축
* @Type name: SessionManager
* @Company: Built1
* @Create Date: 2015 2015. 3. 30. 오후 3:46:51
* @Author: JinSungHa
* @File Version: v1.0
* @info 로그인 후 세션관련 정보 조회
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 30.        JinSungHa     최초  생성
 *
*/
//@Service
public class SessionManager {

    protected Logger logger = LoggerFactory.getLogger(getClass());

    private static SessionManager userSessionManager = new SessionManager();

    private SessionManager() {
    }

    @SuppressWarnings("unchecked")
	public Map<String, String> getSessionMap() {
        return (Map<String, String>) SessionUtil.getSessionValue("__SESSION_MAP__");
    }

    public Object getSessionInfo(Object obj) {
        return getSessionMap().get(obj);
    }

    public void setSessionMap(Map<String, String> sessionMap) {
    	SessionUtil.setSessionValue("__SESSION_MAP__", sessionMap);
    }

    public static SessionManager getInstance() {
        return userSessionManager;
    }

    public static SessionManager getInstance(String envServer) {
        return getInstance();
    }

    //로그인 후 세션정보 세팅
    public void setCookieSessionInfo(HttpServletRequest request, HttpServletResponse response, Map<String,String> userMap){
        logger.error("setCookieSessionInfo !!! ");

        if (userMap == null) {
            logger.debug("userMap == null");
        	return;
        }

        for (String key : userMap.keySet()) {
            Cookie cookie = new Cookie(key, ObjectUtil.toStrTrim(userMap.get(key)));
            
           	cookie.setSecure(true);
           	
           	if (!request.isSecure()) {
               	cookie.setSecure(false);
           	}

           	cookie.setPath("/");    //모든경로에서 접근 가능하도록

            String serverMode = BizUtil.getServerMode();
            if("dev".equalsIgnoreCase(serverMode)){   //로컬이 아니면(개발,운영) 쿠키에 도메인 설정
                cookie.setDomain("mesdev.interflex.co.kr");	
            }else if("prod".equalsIgnoreCase(serverMode)){
            	cookie.setDomain("mes.interflex.co.kr");	
            }

            response.addCookie(cookie); //넥사크로 글로벌 변수를 위한 쿠키 세팅
            logger.debug("addCookie(cookie)");
            
        }
    }

    //세션정보 단일로 넣기
    public void setSessionInfo(String key, String value){
        Map<String,String> sessionMap = SessionManager.getInstance().getSessionMap();

        if( sessionMap != null){
            sessionMap.put(key, value);
        }
    }

    //세션정보 조회
    public Map<String,String> getSessionInfo(HttpServletRequest request){
    	Map<String,String> sessionMap = (Map<String,String>) request.getSession().getAttribute("__SESSION_MAP__");
    	
    	if (sessionMap == null) {
    		sessionMap = new HashMap<String, String>();
    		request.getSession().setAttribute("__SESSION_MAP__", sessionMap);
    	}
    	
    	return sessionMap;
    }

    //로그아웃시 쿠키정보 제거
    public void removeCookie(HttpServletRequest request, HttpServletResponse response) throws UnknownHostException{
        logger.debug("removeSessionInfo !!! ");

        String serverMode = BizUtil.getServerMode();

        if (request.getCookies() == null) {
        	return;
        }

        for (Cookie cookie : request.getCookies()) {
            logger.debug("remove cookie! name : " + cookie.getName() + " / value : " + cookie.getValue());

            if (ContextConstant.SESSION_LOGIN_INFO.equals(cookie.getName()) || "gv_loginTime".equals(cookie.getName())){
                logger.debug(String.format("remove cookie %s !!!!", cookie.getName()));

               	cookie.setSecure(true);
               	
               	if (!request.isSecure()) {
                   	cookie.setSecure(false);
               	}
               	/*
                if(!"local".equalsIgnoreCase(serverMode)){   //로컬이 아니면(개발,운영) - 쿠키에 도메인 설정
                    cookie.setDomain("bl.daeryunens.com");
                    //cookie.setDomain("10.5.10.180");
                }
				*/
                if("dev".equalsIgnoreCase(serverMode)){   //로컬이 아니면(개발,운영) 쿠키에 도메인 설정
                    cookie.setDomain("mesdev.interflex.co.kr");	
                }else if("prod".equalsIgnoreCase(serverMode)){
                	cookie.setDomain("mes.interflex.co.kr");	
                	//cookie.setDomain("10.5.10.31");	
                }
                
                cookie.setPath("/");
                cookie.setMaxAge(0);
                response.addCookie(cookie);
            }else{
                continue;
            }
        }
    }

    public void removeSession(HttpServletRequest request, HttpServletResponse response) {
        request.getSession().invalidate();
    }

    // 리다이렉트기능
    static public void doRedirect(HttpServletRequest request, HttpServletResponse response, String url) throws IOException {
        String redirect = request.getContextPath() + url;
        response.sendRedirect(redirect);
    }

    static public void doRedirect(HttpServletResponse response, String url) throws IOException {
        response.sendRedirect(url);
    }

    // Forward 기능
    public static void doDispatcherForward(HttpServletRequest request, HttpServletResponse response, String goUri) throws ServletException, IOException {
        RequestDispatcher dispatcher = request.getRequestDispatcher(goUri);
        dispatcher.forward(request, response);
    }

    /**
    * @fn : convertSessionInfoForDB
    * @brief : 데이터베이스에 저장하기 위해 Map정보를 수정하여 리턴
    * @Method Name : convertSessionInfoForDB
    * @Create Date: 2015 2015. 4. 7. 오후 4:31:52
    * @Author: 진성하
    * @param: HttpServletRequest request, Map<String,String> sessionInfo
    * @return: Map<String,String>
    * @throws : Exception
    */
    public Map<String,String> convertSessionInfoForDB(HttpServletRequest request, Map<String, String> sessionInfo) throws Exception {

        sessionInfo.put("USER_ID", sessionInfo.get("gv_userId") );        /* 최초생성자(CREATED BY), 최종수정자(LAST_UPDATED_BY) */
        sessionInfo.put("LAST_UPDATE_LOGIN", sessionInfo.get("gv_loginId") );    /* 최종수정자의 ID(LAST_UPDATE_LOGIN) */
        sessionInfo.put("LST_SCRIN_REQ_URI", request.getRequestURI());            /* 마지막에 호출한  URL정보 */
        sessionInfo.put("SESSION_GUID", sessionInfo.get("gv_sessionGuId") );
        sessionInfo.put("CNCT_IP", sessionInfo.get("gv_ipAddr") );
        sessionInfo.put("USER_CRTFC_TKN", sessionInfo.get("gv_authTokenId"));
        sessionInfo.put("SSO_CRTFC_TKN", sessionInfo.get("gv_ssoTokenId"));

        return sessionInfo;
    }

    /**
    * @fn : sessionNullCheck
    * @brief : Map 객체 Null 체크
    *             Null 인 경우 1을 리턴 받아 증가
    * @Method Name : sessionNullCheck
    * @Create Date: 2015 2015. 4. 7. 오후 9:24:05
    * @Author: 진성하
    * @param: HttpServletRequest request, Map<String, String> sessionInfo
    * @return: Interger
    * @throws : Exception
    */
    public int sessionNullCheck(HttpServletRequest request, Map<String, String> sessionInfo) throws Exception {
        return ObjectUtil.isNullCheck(sessionInfo.get("gv_loginId"));

    }

    //입력받은 파라미터를 DB SESSION TABLE에 저장 및 쿠키에 넘겨줄 난수key생성
    public Object[] makeSessionInfoMapNew(Map<String, Object> userMap, List<Map<String, String>> userJobList, List<Map<String, Object>> userAuthList,
            Map<String, Object> loginLogMap, HttpServletRequest request, boolean isPortal) throws Exception {
    	logger.error("userMap-->"+userMap);
        Object[] rtnObj = new Object[2];

        ObjectMapper mapper = new ObjectMapper();
        
        Map<String,String> cookieMap = new ConcurrentHashMap<String,String>();    //넥사크로에 전달할 글로벌변수를 담은 맵
        Map<String,String> sessionMap = new ConcurrentHashMap<String,String>();   //DB에 들어갈 세션정보를 담은 맵
        //사용자정보
        sessionMap.put(ContextConstant.SESSION_SSO_USER_ID, ObjectUtil.toStrTrim(userMap.get("IM_USER_CD")));   //SSO코드
        sessionMap.put(ContextConstant.SESSION_ID, ObjectUtil.toStrTrim(userMap.get("ID"))); //사용자ID
        sessionMap.put(ContextConstant.SESSION_USER_ID, ObjectUtil.toStrTrim(userMap.get("USER_ID"))); //사용자ID
        sessionMap.put(ContextConstant.SESSION_USER_ACNT, ObjectUtil.toStrTrim(userMap.get("USER_ID")));  //계정
        sessionMap.put(ContextConstant.SESSION_JIKWI_CD, ObjectUtil.toStrTrim(userMap.get("JIKWI_CD")));    //직위
        sessionMap.put(ContextConstant.SESSION_JIKWI_NM, ObjectUtil.toStrTrim(userMap.get("JIKWI_NM")));
        sessionMap.put(ContextConstant.SESSION_CLPS_CD, ObjectUtil.toStrTrim(userMap.get("CLPS_CD")));  //직책
        sessionMap.put(ContextConstant.SESSION_CLPS_NM, ObjectUtil.toStrTrim(userMap.get("CLPS_NM")));
        sessionMap.put(ContextConstant.SESSION_CMPN_PHN_NO, ObjectUtil.toStrTrim(userMap.get("CMPN_PHN_NO")));
        sessionMap.put(ContextConstant.SESSION_MBPH_NO, ObjectUtil.toStrTrim(userMap.get("MBPH_NO")));
        sessionMap.put(ContextConstant.SESSION_USER_NM, ObjectUtil.toStrTrim(userMap.get("USER_NM")));
        sessionMap.put(ContextConstant.SESSION_EMAIL, ObjectUtil.toStrTrim(userMap.get("EMAIL_ADDR")));
        sessionMap.put(ContextConstant.SESSION_DEPT_CD, ObjectUtil.toStrTrim(userMap.get("DEPT_CD")));
        sessionMap.put(ContextConstant.SESSION_DEPT_NM, ObjectUtil.toStrTrim(userMap.get("DEPT_NM")));

        sessionMap.put(ContextConstant.SESSION_SITETYPE, ObjectUtil.toStrTrim(userMap.get("LOGIN_SITETYPE")));
        sessionMap.put(ContextConstant.SESSION_LANGUAGETYPE, ObjectUtil.toStrTrim(userMap.get("LOGIN_LANGUAGETYPE")));
        sessionMap.put(ContextConstant.SESSION_ENTERPRISEID, ObjectUtil.toStrTrim(userMap.get("ENTERPRISEID")));

        //로그인 정보
        sessionMap.put(ContextConstant.SESSION_LGN_ID, ObjectUtil.toStrTrim(loginLogMap.get("LGN_LOG_ID")));     //로그인ID
        sessionMap.put(ContextConstant.SESSION_IP_ADDR, ObjectUtil.toStrTrim(loginLogMap.get("CNCT_IP")));        //접속IP
        sessionMap.put(ContextConstant.SESSION_LGN_TM, DateUtil.dateUtiltoday("yyyy/MM/dd HH:mm:ss"));

        sessionMap.put(ContextConstant.SESSION_PDA_TYPE, ObjectUtil.toStrTrim(userMap.get("PDA_WORKTYPE")));     //로그인ID
        
        

        sessionMap.put(ContextConstant.SESSION_PERSON_ID, ObjectUtil.toStrTrim(userMap.get("PERSON_ID")));     // PERSON_ID

        sessionMap.put(ContextConstant.SESSION_ASSIGNMENT_ID, ObjectUtil.toStrTrim(userMap.get("ASSIGNMENT_ID")));     // ASSIGNMENT_ID
        
        
        
        
        //접속 및 요청정보
        sessionMap.put("REQ_URI", request.getRequestURI() );  /* 요청 URL */
        sessionMap.put("REQ_FULL_URL", request.getRequestURL().toString()  );  /* 요청 전체 URL */
        sessionMap.put("REQ_FULL_URL", request.getRequestURL().toString()  );  /* 요청 전체 URL */
        
        String authIds = "";
        String authNms = "";
        for(int i=0; i < userAuthList.size(); i++) {
           	authIds = authIds + (i==0?"":",") + userAuthList.get(i).get("JOB_AUTH_ID");
           	authNms = authNms + (i==0?"":",") + userAuthList.get(i).get("AUTH_NM");
        }
        sessionMap.put(ContextConstant.SESSION_AUTH_IDS, ObjectUtil.toStrTrim(authIds));
        sessionMap.put(ContextConstant.SESSION_AUTH_NMS, ObjectUtil.toStrTrim(authNms));

        //SESSION정보
        String sessionId = request.getSession().getId();
        //TODO STRESS TEST관련
        if("stresstest1".equals(ObjectUtil.toStrTrim(userMap.get("USER_ACNT")))){
            sessionId = "stresstest1";
        }

        if("stresstest2".equals(ObjectUtil.toStrTrim(userMap.get("USER_ACNT")))){
            sessionId = "stresstest2";
        }

        sessionMap.put(ContextConstant.SESSION_GUID, sessionId);
        sessionMap.put(ContextConstant.SESSION_SSO_TOKEN_ID, ""); //TODO SSO

        //1.KEY값 생성
        sessionMap.put(ContextConstant.SESSION_AUTH_TOKEN_ID, "ok");    //[없으면 업무단 로그인 안됨]재귀적으로 gv_authTokenId여부를 체크함
        String gv_loginInfo = BizUtil.getAuthTokenId(sessionId); //sessionId.replace(=,임의문자)
        String gv_loginTime = DateUtil.format(new Date(), "yyyyMMddHHmmss"); //오늘날짜시간_sessionId

        String totSessionMapString = mapper.writeValueAsString(sessionMap);
        sessionMap.put(ContextConstant.SESSION_AUTH_TOKEN_ID, totSessionMapString);
        logger.debug("totSessionMapString : " + totSessionMapString);
        logger.debug("totSessionMapString len : " + totSessionMapString.getBytes("UTF-8").length);

        cookieMap.put(ContextConstant.SESSION_LOGIN_INFO, gv_loginInfo);
        cookieMap.put("gv_loginTime", gv_loginTime);    //추후 사용에 대비

        //2. 넥사용 SESSION MAP에 담기
        SessionManager.getInstance().setSessionMap(sessionMap);

        //3. SESSION에 정보 세팅
        HttpSession session = request.getSession();
        Iterator<String> keys = sessionMap.keySet().iterator();
        while(keys.hasNext()){
            String key = keys.next();
            Object value = sessionMap.get(key);
            session.setAttribute(key, value);
        }

        rtnObj[0] = sessionMap;
        rtnObj[1] = cookieMap;

        return rtnObj;
    }

 
    /**
     *
    * @fn : setSessionFromMap
    * @brief : MAP정보를 SESSION에 담는다
    * @Method Name : setSessionFromMap
    * @remark
    * @Create Date: 2015 2015. 6. 26. 오전 10:10:09
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 6. 26.        JinSungHa     최초  생성
     *
     */
    public void setSessionFromMap(HttpServletRequest request, Map<String,Object> dto){
        HttpSession session = request.getSession();
        Map<String,String> sessionMapForNexa = new ConcurrentHashMap<String,String>();

        if(dto!=null){
            Iterator<String> keys = dto.keySet().iterator();
            while(keys.hasNext()){
                String key = keys.next();
                Object value = dto.get(key);
                session.setAttribute(key, value);
                sessionMapForNexa.put(key, ObjectUtil.toStrTrim(value));
            }

            SessionManager.getInstance().setSessionMap(sessionMapForNexa);
        }
    }
}
