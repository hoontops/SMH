package com.nbdf.commons.interceptor;

import com.nbdf.cmd.cm.cmsm.service.CMSM02000Service;
import com.nbdf.commons.util.BizUtil;
import com.nbdf.commons.util.DateUtil;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.util.TxUtil;
import com.nbdf.pes.pe.penc.service.PENC00010Service;

import java.net.InetAddress;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

/**
* @file: sessionInterceptor.java
* @Package: com.nbdf.commons.interceptor
* @Project name: IFC MES시스템 구축
* @Type name: sessionInterceptor
* @Company: Built1
* @Create Date: 2015 2015. 3. 27. 오전 9:48:05
* @Author: JinSungHa
* @File Version: v1.0
 *@info 로그인 여부 체크등 세션처리 Interceptor
 *
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 03. 27. JinSungHa     최초  생성
 *   2015. 10. 29. 진성하                   로그 선언부 정리
 *
*/
public class SessionInterceptor extends HandlerInterceptorAdapter {

    protected Logger logger = LoggerFactory.getLogger(getClass());

    @Value("#{commonsProp['env.duplicateLogin.check']?:false}")
    private boolean duplicateLoginCheck;

    @Autowired
    private CMSM02000Service cmsm02000service;

    @Autowired
    private PENC00010Service penc00010service;

    /**
     *
    * @fn
    * @brief (Override method) interceptor의 전처리기
    * @remark
    * @see org.springframework.web.servlet.handler.HandlerInterceptorAdapter#preHandle(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse, java.lang.Object)
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
    	TxUtil.setTxId(request);
    	logger.info("{} Start...", request.getServletPath());
    	
//        SessionUtil.setSessionValue(ContextConstant.SESSION_IP_ADDR, BizUtil.getClientIp(request));// 사용자 IP
//        SessionUtil.setSessionValue(ContextConstant.SESSION_BROWSER, request.getHeader("User-Agent"));// 사용자 IP

    	if(request.getRequestURI().indexOf("/comm/downFile/")>-1  && request.getParameter("gvUserId") != null){
            if(SessionUtil.getSessionValue("USER_ID") == null){
                SessionUtil.setSessionValue("USER_ID", request.getParameter("gvUserId")); //jsh 20160520
                SessionUtil.setSessionValue("LGN_LOG_ID", -1); //jsh 20160520
            }
            return true;    //jsh 20160520 포털에서 업무파일다운로드 시 세션체크 안함
        }
        if(BizUtil.isAbleLoginLess(request.getRequestURI())){ return true; } /* 로그인이 필요없는 서비스 ByPass */
        SessionUtil.setSessionValue("REQUESTURI", request.getRequestURI());
        String serverMode = BizUtil.getServerMode();
        logger.info("serverMode::"+serverMode);

        if(BizUtil.isFirstJobPage(request.getRequestURI())){
            if("prod".equalsIgnoreCase(BizUtil.getServerMode())){
                BizUtil.setCookie(response, "JOB_SERVER", InetAddress.getLocalHost().getHostName());

            }

            Map<String,Object> sessionMapByCookie = penc00010service.selectGlovelValueInfo(request); //쿠키에서 로그인 정보조회
            //logger.error("sessionMapByCookie-->"+sessionMapByCookie);    
            
            if(sessionMapByCookie == null || sessionMapByCookie.isEmpty()){ //해당 쿠키의 로그인정보가 세션테이블에 없다.
                if("local".equalsIgnoreCase(serverMode)){
                	//request.setAttribute("msg", "로그인이 필요한 서비스 입니다.3");
                    request.setAttribute("nextUri", request.getRequestURI());
                    SessionManager.getInstance(serverMode).removeCookie(request, response);
                    SessionManager.getInstance(serverMode).removeSession(request, response);
                    //BizUtil.setSessionCode(response, 9999, "로그인이 필요한 서비스입니다.3");
                }else{
                    //request.setAttribute("msg", "로그인이 필요한 서비스 입니다.4");
                    request.setAttribute("nextUri", request.getRequestURI());
                    SessionManager.getInstance(serverMode).removeCookie(request, response);
                    SessionManager.getInstance(serverMode).removeSession(request, response);
                    //BizUtil.setSessionCode(response, 9999, "로그인이 필요한 서비스입니다.4");
                }
                return false;
            }
            SessionUtil.setSessionValue("ID", sessionMapByCookie.get("gv_id")); // ID
            SessionUtil.setSessionValue("USER_ID", sessionMapByCookie.get("gv_userId")); // 사용자 ID
            SessionUtil.setSessionValue("LGN_LOG_ID", sessionMapByCookie.get("gv_loginId")); // 로그인이력 ID
            SessionUtil.setSessionValue("CNCT_IP", sessionMapByCookie.get("gv_ipAddr")); // 사용자 IP
            SessionUtil.setSessionValue("USER_ACNT", sessionMapByCookie.get("gv_userId")); // 로긴id
            SessionUtil.setSessionValue("SITETYPE", sessionMapByCookie.get("gv_siteType")); // SITE
            SessionUtil.setSessionValue("LANGUAGETYPE", sessionMapByCookie.get("gv_languageType")); // LANG
            SessionUtil.setSessionValue("ENTERPRISEID", sessionMapByCookie.get("gv_enterpriseId")); // enterpriseId
            SessionUtil.setSessionValue("EMAILADDR", sessionMapByCookie.get("gv_emailAddr")); // enterpriseId
            SessionUtil.setSessionValue("PERSONID", sessionMapByCookie.get("gv_personId")); // personId
            return true;
        }
		
        int sessionCode = BizUtil.setSessionMap(request, cmsm02000service.checkSessionStatus(BizUtil.getUserId(request), BizUtil.getClientIp(request)));

        if( sessionCode == 1){
            return cmsm02000service.updateSessionInfo( SessionManager.getInstance().convertSessionInfoForDB(request, SessionManager.getInstance(serverMode).getSessionInfo(request)));
        }else if( sessionCode == 2 && !duplicateLoginCheck){
            return true;
        }else{
        	/*jsh 201711*/
            Map<String,Object> sessionMap=null;

//            if( BizUtil.getUserId(request) > 0 ){
            if( StringUtil.isEmpty(BizUtil.getUserId(request)) ){
            	sessionMap = cmsm02000service.selectSessionInfo(BizUtil.getUserId(request));
            }

            Map<String,Object> param = new HashMap<String,Object>();
            param.put("serverMode", serverMode);
            param.put("loginStatus", cmsm02000service.checkSessionStatus(BizUtil.getUserId(request), BizUtil.getClientIp(request)));
            param.put("sessionMap", sessionMap);
            BizUtil.doDispatcherForward(request,response, param);
            return false;
            
        }
    }
    /**
     * postHandler
     *
     * @param request
     * @return void
     */
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView mav) throws Exception {
        logger.debug("# session INTERCEPTOR postHandle!!");

        // 시스템 세팅관련
        request.setAttribute("brw_title", "MES시스템"); // title
        request.setAttribute("toDay", DateUtil.dateUtiltoday("yyyy.MM.dd"));
        request.setAttribute("toDayYoil", DateUtil.getDayOfTheWeek(new Date()));

        String contextPath = request.getContextPath();
        String servletPath = request.getServletPath();
        String uri = request.getRequestURI();

        String reqURLDomain = request.getRequestURL().toString();
        reqURLDomain = reqURLDomain.replace(uri, "");


        request.setAttribute("contextPath", contextPath);   // 없음(/)
        request.setAttribute("servletPath", servletPath);       //솔루션과 merge후 web.xml설정( /pes)
        request.setAttribute("reqURLDomain", reqURLDomain);

    }

    /**
     * afterCompletion
     *
     * @param request
     * @return void
     */
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
    }
}