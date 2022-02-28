package com.nbdf.commons.vo;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * @Class RequestContextVo
 * @Description RequestContextVo 클래스
 * @Modification
 * 
 * @author
 * @version 1.0
 * @see
 */
@SuppressWarnings("serial")
public class RequestContextVo extends BaseVo {

    private HttpServletRequest request;

    private Map<String, Object> _context = new HashMap<String, Object>();

    /**
     * 요청 주소
     */
    private String requestURL;

    /**
     * 요청 주소(이미지를 삭제한 주소)
     */
    private String requestURI;

    /**
     * 요청 메소드
     */
    private String requestMethod;

    /**
     * 접속 아이피
     */
    private String remoteAddr;

    /**
     * 요청 시간 (ms)
     */
    private long requestTime;

    public RequestContextVo() {
    	super();
        setRequestTime(System.currentTimeMillis());
    }

    public RequestContextVo(HttpServletRequest request) {
        super();
        this.request = request;
        initialize();
    }

    public RequestContextVo(HttpServletRequest request, String uri) {
        this(request);
        setRequestURI(uri);
    }

    private final void initialize() {
        if (request == null)
            return;
        setRemoteAddr(request.getRemoteAddr());
        setRequestURL(request.getRequestURL().toString());
        setRequestMethod(request.getMethod());
    }

    /**
     * @return the sessionId 세션 아이디
     */
    public String getSessionId() {
        String sessionId = null;
        HttpSession session = getSession();
        if (session != null) {
            sessionId = session.getId();
        }
        return sessionId;
    }

    /**
     * @return HttpSession
     */
    public HttpSession getSession() {
        return request == null ? null : request.getSession();
    }

    /**
     * @return the requestURL 요청 URL
     */
    public String getRequestURL() {
        return requestURL;
    }

    /**
     * @param requestURL
     *            the requestURL to set
     */
    public void setRequestURL(String requestURL) {
        this.requestURL = requestURL;
    }

    /**
     * @return the requestURI 요청 URI
     */
    public String getRequestURI() {
        return requestURI;
    }

    /**
     * @param requestURI
     *            the requestURI to set
     */
    public void setRequestURI(String requestURI) {
        this.requestURI = requestURI;
    }

    /**
     * @return the requestMethod 요청 메소드
     */
    public String getRequestMethod() {
        return requestMethod;
    }

    /**
     * @param requestMethod
     *            the requestMethod to set
     */
    public void setRequestMethod(String requestMethod) {
        this.requestMethod = requestMethod;
    }

    /**
     * @return the remoteAddr 원격 주소
     */
    public String getRemoteAddr() {
        return remoteAddr;
    }

    /**
     * @param remoteAddr
     *            the remoteAddr to set
     */
    public void setRemoteAddr(String remoteAddr) {
        this.remoteAddr = remoteAddr;
    }

    /**
     * @return the requestTime 요청 시간
     */
    public long getRequestTime() {
        return requestTime;
    }

    /**
     * @param requestTime
     *            the requestTime to set
     */
    public void setRequestTime(long requestTime) {
        this.requestTime = requestTime;
    }

    /**
     * context 정보에 key 값으로 입력하기
     * 
     * @param key
     * @param value
     */
    public void put(String key, Object value) {
        _context.put(key, value);
    }

    /**
     * context 정보에서 key에 해당하는 가져오기
     * 
     * @param key
     * @return
     */
    public Object get(String key) {
        return _context.get(key);
    }

}
