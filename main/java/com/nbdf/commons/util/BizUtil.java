package com.nbdf.commons.util;

import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.interceptor.SessionManager;
import com.nbdf.commons.ui.UiConstant;

import java.io.IOException;
import java.net.InetAddress;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.UnknownHostException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.math.NumberUtils;

import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformException;
import com.nexacro17.xapi.tx.PlatformType;



/**
* @file: BizUtil.java
* @Package: com.nbdf.commons.interceptor
* @Project name: IFC MES시스템 구축
* @Type name: BizUtil
* @Company: Built1
* @Create Date: 2015 2015. 3. 27. 오전 10:20:41
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 3. 27.        JinSungHa     최초  생성
 *
*/
public class BizUtil {

    /**
    * @fn : getServerMode
    * @brief : 실행되고 있는 서버 리턴
    *             local / dev / test /prod
    * @Method Name : getServerMode
    * @remark
    * @Create Date: 2015 2015. 9. 8. 오후 2:59:28
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 9. 8.        IMCS     최초  생성
     *
    */
    public static String getServerMode(){
    	/*
    	InetAddress local;
    	String ip = "";

    	try {
			local = InetAddress.getLocalHost();
        	ip = local.getHostAddress();
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		*/
        String serverMode = System.getProperty("SERVER_MODE");
        if(serverMode == null){
    		//if(ip.equals(NbdfConstants.PROD1_IP) || ip.equals(NbdfConstants.PROD2_IP)){
    		//	return "prod";
    		//}else{
    			return "local";
    		//}
        }
        return serverMode;
    }

    /**
    * @fn : isBatchServer
    * @brief : 배치 서버 우뮤를 파악
    * @Method Name : isBatchServer
    * @remark
    * @Create Date: 2015 2015. 11. 17. 오후 8:02:06
    * @Author: 진성하
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 11. 17.        진성하     최초  생성
     *
    */
    public static boolean isBatchServer(){
        String isBatchServer = System.getProperty("BATCH_SERVER");
        if("true".equalsIgnoreCase(isBatchServer)){
            return true;
        }
        return false;
    }

    /**
     *
    * @fn : isAbleLoginLess
    * @brief : 로그인 없이 가능한 서비스인지 체크
    * @Method Name : isAbleLoginLess
    * @remark
    * @Create Date: 2015 2015. 3. 27. 오전 10:19:44
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 27.        JinSungHa     최초  생성
     *
     */

    static String[]  isLoginPassUri = {
            "/login.scr", "/loginPost.scr", "/loginPost.do" , "/logout",     //업무단 로그인
            "/Login", "/Logout", "/Main", "/logout.scr",               //포털 솔루션 로그인
            "/comm/dnFile",               //파일다운로드
            "/comm/dnHlpImg","/comm/downImage" ,              //파일다운로드
            "/cmsa00300/selectEcmLookupValuesVList2.do",                     
            "/updateChangeUserPw.scr",             //로그인-패스워드 변경
            "/updateResetUserPw.scr",               //로그인-패스워드 초기화
            "/getLoginInfo.do",                       //크롬다운
            "/html/install.html","/html/install2.html",                               //Activex관련
            "/cmsy01100/updateCmdUsersPwdInit.do",        // 비밀번호 초기화
            "/cmcm01100/selectServerDbToday.do",   // DB서버시간 가져오기 (YYYYMMDD)
            "/cmcm01100/selectServerDbTime.do",     // DB서버시간 가져오기 (YYYYMMDDHH24MISS)
            "/cmsy00100/loginPost.do",     // loginPost
            "/cmsy01100/selectCmdUserDupCheck.do",     // 중복체크
            "/penc00010/selectCmMsg.do", "/cmsy01100/selectUserIdSeqence.do",    // 메시지
            "/cmsy01100/saveCmdUsersReq.do","/cmsa00400/selectUserQryList.do","/cmsa00400/selectUserQryList.do","/cmsa00100/selectCmdPopupList.do",
            "/cmsa00100/selectCmdPopupSrhCndClumList.do","/cmsa00100/selectCmdPopupPlsList.do","/cmsa00400/selectUserQryList.do",     // 사용자신청
            "/index.html"                                  //넥사크로 첫화면
           };   //로그인 없이 가능한 uri

    public static boolean isAbleLoginLess(String uri) {
        uri = ObjectUtil.toStrTrim(uri);    //null to empty

        for (int i = 0; i < isLoginPassUri.length; i++) {
            if (uri.indexOf(isLoginPassUri[i]) != -1 ) {
                return true;
            }
        }
        return false;
    }

    /**
     *
    * @fn : getCookieValue
    * @brief : 쿠키에서 해당 key값 조회
    * @Method Name : getCookieValue
    * @remark
    * @Create Date: 2015 2015. 3. 31. 오후 8:12:40
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 3. 31.        JinSungHa     최초  생성
     *
     */
    public static String getCookieValue(Cookie[] cookies, String key){
        if(cookies == null) return null;

        for(Cookie c : cookies){
            if(c.getName().equals(key)){
                return c.getValue();
            }
        }
        return null;
    }

    /**
     *
    * @throws ParseException
     * @fn : calcPassWordChangDay
    * @brief : 패스워드 변경일이 오늘과 며칠차이인지 계산
    * @Method Name : calcPassWordChangDay
    * @remark
    * @Create Date: 2015 2015. 4. 1. 오후 1:52:10
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 4. 1.        JinSungHa     최초  생성
     *
     */
    public strictfp static long calcPassWordChangDay(String pwdChangeDate) throws ParseException {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        Date pwdChangeDateD = sdf.parse(pwdChangeDate);
        Date toDay = new Date();

        long diff = toDay.getTime() - pwdChangeDateD.getTime();
        long diffDays = diff / (24 * 60 * 60 * 1000);

        return diffDays;
    }

    /**
     *
    * @throws Exception
     * @fn : getAuthTokenId
    * @brief : 세션의 SESSION_AUTH_TOKEN_ID생성 - UUID생성
    * @Method Name : getAuthTokenId
    * @remark
    * @Create Date: 2015 2015. 4. 1. 오후 7:12:42
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 4. 1.        JinSungHa     최초  생성
     *
     */
    public static String getAuthTokenId(String sessionId) throws Exception {
        sessionId = sessionId.replace("=", "PESEXCHANGE");
        return sessionId;
    }

    /**
     *
    * @fn : getBrowserName
    * @brief : 해당 userAgent 를 바탕으로 접속 브라우저명 전달
    * @Method Name : getBrowserName
    * @remark
    * @Create Date: 2015 2015. 4. 2. 오후 1:54:30
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 4. 2.        JinSungHa     최초  생성
     *
     */
    public static String getBrowserName(String ua) {
        String browser = "";
        if(ua.indexOf("Trident")>0 || ua.indexOf("MSIE")>0){
            browser = "Internet Explore";
        }else{
            browser = "Chrome";
        }
        return browser;
    }

    /**
     *
    * @fn : isPortalCal
    * @brief : 호출된 uri가 포털이면 true, 업무단이면 false 리턴
    * @Method Name : isPortalCal
    * @remark
    * @Create Date: 2015 2015. 4. 4. 오전 10:44:48
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 4. 4.        JinSungHa     최초  생성
     *
     */
    public static boolean isPortalCal(String ext, String uri) {
    	/* jsh 20171128
        if("scr".equalsIgnoreCase(ext)){        //확장자가 scr이면 포털 + 업무단 로그인
            if(uri.indexOf("/ifc") != -1){          //drens -> 업무단 로그인 uri
                return false;
            }
        }else{
            return false;
        }
        */
        return true;
    }

    /**
     *
    * @fn : calcSessionInvalidTime
    * @brief : 입력받은 날짜시각과 현재시각과의 분차이 계산
    * @Method Name : calcSessionInvalidTime
    * @remark
    * @Create Date: 2015 2015. 4. 18. 오후 3:43:26
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 4. 18.        JinSungHa     최초  생성
     *
     */
    public strictfp static long calcSessionInvalidTime(String lastCallTime14){

        if(ObjectUtil.toStrTrim(lastCallTime14).length() != 14 ){   //14자 yyyymmddhhmmss형태가 아니면 -1리턴
            return -1;
        }

        Calendar date1 = Calendar.getInstance();    //입력받은 시각
        Calendar date2 = Calendar.getInstance();    //현재 시각

        int year = NumberUtils.toInt(lastCallTime14.substring(0, 4));
        int month = NumberUtils.toInt(lastCallTime14.substring(4, 6)) -1;    //java 월은 0부터 시작
        int day = NumberUtils.toInt(lastCallTime14.substring(6, 8));
        int hourOfDay = NumberUtils.toInt(lastCallTime14.substring(8, 10));
        int minute = NumberUtils.toInt(lastCallTime14.substring(10, 12));
        int second = NumberUtils.toInt(lastCallTime14.substring(12));

        date1.set(year, month, day, hourOfDay, minute, second);

        long diffMinute = ((date2.getTimeInMillis() - date1.getTimeInMillis())/1000) / 60;    // 두 날짜의 분 차이 계산 (/1000 --> 초 , /60 --> 분)

        return diffMinute;
    }

    /**
     *
    * @fn : isAliveWASServer
    * @brief : 업무단에서 로그인시 서버가 살아있는지 여부
    * @Method Name : isAliveWASServer
    * @Create Date: 2015 2015. 9. 1. 오후 8:07:12
    * @Author: JinSungHa
    * @param: XXXXXXXX
    * @return: XXXXX
    * @throws : Exception
     */
    public static boolean isAliveWASServer(String envServer) {
        int result = 0;

        if("local".equals(envServer)){
            return false;   //local일경우 무조건 false리턴하도록(업무단 로컬로그인)
        }else if("dev".equals(envServer)){
        	return false;
        }else{  //운영 real
        	return false;
        }
    }

    /**
     *
    * @fn : httpCall
    * @brief : 해당 서버:PORT가 접속되는지 여부 확인
    * @Method Name : httpClient
    * @Create Date: 2015 2015. 9. 2. 오전 10:18:39
    * @Author: JinSungHa
    * @param: XXXXXXXX
    * @return: XXXXX
    * @throws : Exception
     */
    private static int httpCall(String host, int port){

        URL url;
        URLConnection conn;
        String totUrl = String.format("http://%s:%d", host,port);
        if(port == 8443){   //SSL
            totUrl = String.format("https://%s:%d", host,port);
        }

        try {
            url = new URL(totUrl);
            conn = url.openConnection();
            conn.setReadTimeout(2000);          //서버 접속까지 시간
            conn.setConnectTimeout(2000);   //서버 호출 후 대기시간

            conn.connect();             //접속

        } catch (MalformedURLException e) {
            return HttpServletResponse.SC_NOT_FOUND;
        } catch (IOException e) {
            return HttpServletResponse.SC_REQUEST_TIMEOUT;
        }

        return HttpServletResponse.SC_OK;
    }

    /**
     *
    * @fn : isFirstJobPage
    * @brief : 넥사크로 첫페이지 인지 여부확인
    * @Method Name : isFirstJobPage
    * @Create Date: 2015 2015. 9. 2. 오후 4:54:33
    * @Author: JinSungHa
    * @param: XXXXXXXX
    * @return: XXXXX
    * @throws : Exception
     */
    public static boolean isFirstJobPage(String uri) {
        String[] firstPageUri = {"/penc00010/selectGlovelValueInfo.do","/penc00010/selectGlovelValueInfoPda.do"};
        for (int i = 0; i < firstPageUri.length; i++) {
            if(uri.indexOf(firstPageUri[i]) != -1){
                return true;
            }
        }
        return false;
    }

    /**
    * @throws UnknownHostException
     * @fn : getClientIp
    * @brief : 요청한 사용자의 IP
    *             WebLogic / Jeus 의 Cleint IP 획득 방법이 다르다.
    * @Method Name : getClientIp
    * @remark
    * @Create Date: 2015 2015. 9. 6. 오전 10:17:44
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 9. 6.      진성하     최초  생성
     *
    */
    public static String getClientIp(HttpServletRequest request) throws UnknownHostException {
    	String clientIp;
    	if("local".equalsIgnoreCase(getServerMode())){
    		return InetAddress.getLocalHost().getHostAddress();
    	}else{
    		clientIp =  request.getHeader("Proxy-Client-IP");
    		if(clientIp == null || "".equals(clientIp)){
    			return  request.getRemoteAddr();
    		}
    	}
    	return clientIp;
    }

    /**
    * @fn : getUserId
    * @brief : 접속한 사용자의 포털  ID
    * @Method Name : getUserId
    * @remark
    * @Create Date: 2015 2015. 9. 6. 오전 10:52:08
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 9. 6.      진성하     최초  생성
     *
    */
    public static String getUserId(HttpServletRequest request){
//        int userId = 0;
        Map<String,String> sessionInfo = SessionManager.getInstance(System.getProperty("SERVER_MODE")).getSessionInfo(request);
//        userId = NumberUtils.toInt(ObjectUtil.toStrTrim(sessionInfo.get(ContextConstant.SESSION_USER_ID)));
        String userId = ObjectUtil.toStrTrim(sessionInfo.get(ContextConstant.SESSION_USER_ID));
        return userId;
    }

    /**
    * @fn : setSessionMap
    * @brief : SESSION에는 존재하나 넥사크로용 SESSIONMAP에 정보없을때 부어줌
    * @Method Name : setSessionMap
    * @remark
    * @Create Date: 2015 2015. 9. 8. 오후 2:57:49
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 9. 8.     진성하    최초  생성
     *
    */
    public static int setSessionMap(HttpServletRequest request, int loginStatus){
        if(loginStatus == 1){   //정상
        //SESSION에는 존재하나 넥사크로용 SESSIONMAP에 정보없을때 부어줌
            if(SessionManager.getInstance() != null){
                if(SessionManager.getInstance().getSessionMap() == null || SessionManager.getInstance().getSessionInfo(ContextConstant.SESSION_USER_ID) == null ){
                    SessionManager.getInstance().setSessionMap(SessionManager.getInstance().getSessionInfo(request));
                    }
                }
            }

        return loginStatus;
    }

    /**
    * @fn : setSessionCode
    * @brief : session 코드 값을 UI로 전달
    * @Method Name : setSessionCode
    * @remark
    * @Create Date: 2015 2015. 9. 7. 오후 2:35:45
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 9. 7.        진성하     최초  생성
     *
    */
    public static void setSessionCode(HttpServletResponse response, int sCode, String msg) throws PlatformException{
        VariableList variableList = new VariableList();
        variableList.add(UiConstant.ERROR_CODE, sCode);
        variableList.add(UiConstant.ERROR_MSG, msg);
        PlatformData data = new PlatformData();
        data.setVariableList(variableList);

        HttpPlatformResponse httpPlatformResponse = new HttpPlatformResponse(response, PlatformType.CONTENT_TYPE_SSV, "UTF-8");
        httpPlatformResponse.setCharset(PlatformType.DEFAULT_CHAR_SET);
        httpPlatformResponse.setData(data);
        httpPlatformResponse.sendData();
    }

    public static void doDispatcherForward(HttpServletRequest request, HttpServletResponse response, Map<String,Object> param) throws Exception {
        Map<String,Object> sessionMap = (Map<String, Object>) param.get("sessionMap");
        int loginStatus = (int) param.get("loginStatus");
        String serverMode = ObjectUtil.toStrTrim(param.get("serverMode"));

        String errMsg = "";

        if(loginStatus == 2){ //중복로그인되어 로그오프
//            String sessionIp = ObjectUtil.toStrTrim(sessionMap.get("CNCT_IP"));
//            errMsg = String.format("IP : %s 에서 동일한 아이디로 로그인되어, 로그아웃 되었습니다", sessionIp);
        }else if(loginStatus == 3){ //세션유지시간 만료
            errMsg = "장기간 미사용으로 인해 로그아웃 되었습니다.";
        }else if(loginStatus == -1){ //로그아웃 상태(로그인 필요)
            SessionManager.getInstance(serverMode).removeCookie(request, response);
            SessionManager.getInstance(serverMode).removeSession(request, response);
            errMsg = "로그인이 필요한 서비스입니다.5";
        }

        /*
         * CODE 넘기기(넥사로)
         * -1:로그아웃 상태(로그인 필요), 1:로그인 상태이며 정상, 2:로그인 상태이나 중복로그인 요청되어 로그오프됨, 3:로그인 세션유지시간 만료
         *  isAlivePes - true:경포살아있다. false:경포죽어있다.
         */

        //boolean isAlivePes = BizUtil.isAliveWASServer(serverMode); // 포 살아있는지 여부

        int code = 0;
        if (loginStatus == -1) {
            code = ContextConstant.SESSION_STATUS_LOGIN_NEED_ALIVE;
            errMsg += "\n다시 로그인해 주시기 바랍니다.";
        } else if (loginStatus == 2) {
//            code = ContextConstant.SESSION_STATUS_DUPLOGIN_ALIVE;
//            errMsg += "\n다시 로그인해 주시기 바랍니다.";
        } else if (loginStatus == 3) {
            code = ContextConstant.SESSION_STATUS_LONGTIME_ALIVE;
            errMsg += "\n다시 로그인해 주시기 바랍니다.";
        }
        setSessionCode(response, code, errMsg);
    }

    /**
    * @fn : setCookie
    * @brief : KEY 값, Value 값을 통해 쿠기 정보를 셋팅한다.
    * @Method Name : setCookie
    * @remark
    * @Create Date: 2015 2015. 9. 23. 오후 4:36:33
    * @Author: JinSungHa
    * @File Version: v1.0
     *
     * << 개정이력(Modification Information) >>
     *
     *     수정일          수정자   수정내용
     *   ------------  ------  ----------
     *   2015. 9. 23.    진성하     최초  생성
     *
    */
    public static void setCookie(HttpServletResponse response, String key, String value){
    	Cookie cookie = new Cookie(key, value);

    	cookie.setSecure(true);

        if (!SessionUtil.isSecure()) {
        	cookie.setSecure(false);
        }

        cookie.setPath("/");
        response.addCookie(cookie); //넥사크로 글로벌 변수를 위한 쿠키 세팅
    }

    public static String dnUrl(String jobCd){
    	if( "local".equals(getServerMode()) ){
    		return "/export/";
    	}
		return "/export/";
    }
}