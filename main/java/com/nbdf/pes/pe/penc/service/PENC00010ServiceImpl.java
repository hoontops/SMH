package com.nbdf.pes.pe.penc.service;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.interceptor.SessionManager;
import com.nbdf.commons.ui.vo.DataSetMap;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.BizUtil;
import com.nbdf.commons.util.ObjectUtil;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.sql.Clob;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.Cache;
import org.springframework.cache.ehcache.EhCacheCacheManager;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;



/**
* @file: PENC00010ServiceImpl.java
* @Package: com.nbdf.pes.pe.penc.service
* @Project name: IFC MES시스템 구축
* @Type name: PENC00010ServiceImpl
* @Company: Built1
* @Create Date: 2015 2015. 4. 8. 오전 11:20:56
* @Author: JinSungHa
* @File Version: v1.0
 *
 * << 개정이력(Modification Information) >>
 *
 *     수정일          수정자   수정내용
 *   ------------  ------  ----------
 *   2015. 4. 8.        JinSungHa     최초  생성
 *
*/
@Service
public class PENC00010ServiceImpl extends AbstractNbdfService implements PENC00010Service {

    public static final String NAMESPACE = "com.nbdf.pes.pe.penc.dao.PENC00010Dao";

    @Value("#{commonsProp['env.session.time']?:30}")
    private long sessionLimitTime; // 세션만료시간(분단위)

    @Autowired
    private GeneralDao generalDao;


    /**
     *
    * @fn
    * @brief (Override method) (권한별)넥사크로 공통 메뉴트리 구성
    * @remark
    * - 해당 사용자의 권한메 맞는 GNB,LNB메뉴 생성
    * @see com.nbdf.pes.pe.penc.service.PENC00010Service#selectMenuAuthTree(com.nbdf.commons.ui.vo.UiMapDto)
     */
    @Override
    public void selectMenuAuthTree(UiMapDto dto, HttpServletRequest request) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

        List<Map<String, Object>> list = null;
        String userAcnt = ObjectUtil.toStrTrim(param.get("CREATED_BY"));    //로그인 후 사용자 ID
        String jobSysCd = ObjectUtil.toStrTrim(param.get("JOB_SYS_CD"));              //업무코드
        String useDept = ObjectUtil.toStrTrim(param.get("USE_DEPT"));                   //사용부서
        
        logger.debug(String.format("메뉴트리조회(selectMenuAuthTree) 필수 PARAM \nUSER_ACNT : %s, JOB_SYS_CD : %s, USE_DEPT : %s",userAcnt,jobSysCd,useDept));

        if(StringUtils.isEmpty(userAcnt) ){  //사용자 ID와 업무코드가 비었으면
            throw new BizException("조회 필수값이 없습니다. (USER_ID가 존재하지 않습니다)");
        }else{  //둘다 정보 있으면 사용자의 권한별 메뉴테이블 조회
        	list = generalDao.addSelect(NAMESPACE + ".selectMenuAuthTree", param);  //메뉴조회
        }
        //putDataSetMap(dto, list,"gdsLeftMenu");
        putDataSetMap(dto, list,"gds_menu");


    }

    /**
    *
   * @fn
   * @brief (Override method) (권한별)넥사크로 공통 top메뉴 구성
   * @remark
   * - 해당 사용자의 권한메 맞는 GNB,LNB메뉴 생성
   * @see com.nbdf.pes.pe.penc.service.PENC00010Service#selectMenuAuthTop(com.nbdf.commons.ui.vo.UiMapDto)
    */
   @Override
   public void selectMenuAuthTop(UiMapDto dto, HttpServletRequest request) throws Exception {
       Map<String, Object> param = getParametersMap(dto);

       List<Map<String, Object>> list = null;
       String userAcnt = ObjectUtil.toStrTrim(param.get("CREATED_BY"));    //로그인 후 사용자 ID
       if(StringUtils.isEmpty(userAcnt) ){  //사용자 ID가 비었으면
           throw new BizException("조회 필수값이 없습니다. (USER_ID가 존재하지 않습니다)");
       }else{  //둘다 정보 있으면 사용자의 권한별 메뉴테이블 조회
       	list = generalDao.addSelect(NAMESPACE + ".selectMenuAuthTop", param);  //메뉴조회
       }
       putDataSetMap(dto, list,"ds_topMenu");


   }
    @Override
    public Map<String,Object> selectSessionInfo(Map<String,Object> dto) throws Exception {
        Map<String,Object> map = generalDao.addSelectOneMap(NAMESPACE + ".selectGlovelValueInfo", dto);
        return map;
    }

    /**
     *
    * @fn
    * @brief (Override method) 넥사크로 글로벌변수 조회전달 및 SESSION생성
    * @remark
    * - 로그인 후 쿠키로 gv_loginInfo라는 키 생성
    * - 넥사크로 첫화면에서 해당 키값을 전달하여 DB(CMD_SESSIONS)에서 조회 후 DATA전달
    * - 서버에서 사용할 용도의 SESSION에 서버변수 설정
    * @see com.nbdf.pes.pe.penc.service.PENC00010Service#selectGlovelValueInfo(com.nbdf.commons.ui.vo.UiMapDto, javax.servlet.http.HttpServletRequest)
     */
    @Override
    public void selectGlovelValueInfo(UiMapDto dto, HttpServletRequest request) throws Exception {

        Map<String,Object> sessionMap = selectGlovelValueInfo(request);

        if(sessionMap==null || sessionMap.isEmpty()){
            throw new BizException("LoginInfoNotExists");	
        }else{
            putDataSetMap(dto, sessionMap, "gds_userInfo");
        }
    }

    @Override
    public Map<String,Object> selectGlovelValueInfo(HttpServletRequest request) throws Exception{
        Map<String,Object> rtnSessionMap = new HashMap<String,Object>();
		//logger.debug("COMPANY_CD1..."+SessionUtil.getSessionValue("COMPANY_CD"));
        Cookie[] cookies = request.getCookies();
        List<String> gv_loginInfoList = null;   //쿠키를 담은 list
        if(cookies!=null){
            gv_loginInfoList = new ArrayList<String>();
            for (int i = 0; i < cookies.length; i++) {
                if(ContextConstant.SESSION_LOGIN_INFO.equals(cookies[i].getName())){    //쿠키가 gv_loginInfo일때
                    logger.debug(ContextConstant.SESSION_LOGIN_INFO + "cookie value : " + cookies[i].getValue());
                    String cVal = ObjectUtil.toStrTrim(cookies[i].getValue());
                    cVal = cVal.replace("PESEXCHANGE", "=");
                    gv_loginInfoList.add(cVal);
                }
            }
        }
        
		//logger.debug("gv_loginInfoList-->"+gv_loginInfoList);
        boolean hasValidData = false;   //SESSION테이블에 해당 정보가 존재하는지 여부
        Map<String,Object> resultMap = new ConcurrentHashMap<String, Object>(); //CMD_SESSION의 결과
        if(gv_loginInfoList != null){
            for (String cookieValue : gv_loginInfoList) {
                Map<String,Object> param = new ConcurrentHashMap<String, Object>();
                param.put("SESSION_GUID", cookieValue);
                resultMap = selectSessionInfo(param);   //CMD_SESSION의 조회 결과

                logger.debug("resultMap-->"+resultMap);
                if(resultMap != null){

                    String sessionVldYn = ObjectUtil.toStrTrim(resultMap.get("SESSION_VLD_YN"));
                    String lstScrinUtTime = ObjectUtil.toStrTrim(resultMap.get("LST_SCRIN_UT_TIME"));
                    logger.debug(String.format("session map result [sessionVldYn : %s, lstScrinUtTime : %s] ", sessionVldYn, lstScrinUtTime));

                    if(lstScrinUtTime.length() == 14){
                        long lastCallTime = BizUtil.calcSessionInvalidTime(lstScrinUtTime); //마지막 호출 시간의 '분' 계산
                        logger.debug("lastCallTime-->"+lastCallTime);
                        logger.debug("sessionLimitTime-->"+sessionLimitTime);
                        if(lastCallTime < sessionLimitTime && "Y".equalsIgnoreCase(sessionVldYn)) {
                            hasValidData = true;
                            break;
                        }
                    }
                }
            }//end for
        }//end if

		if(hasValidData){   //정상적인 세션값이 존재한다
            Clob userCrtfcTknClob =  (Clob) resultMap.get("USER_CRTFC_TKN");
            //1. 넥사크로로 응답
            // CLOB to String
            String outStr = ObjectUtil.ClobConvertForString(userCrtfcTknClob);
        	logger.debug("outStr-->"+outStr);

            ObjectMapper mapper = new ObjectMapper();
            rtnSessionMap = mapper.readValue(outStr,  new TypeReference<ConcurrentHashMap<String,Object>>(){});

        	logger.debug("rtnSessionMap-->"+rtnSessionMap);
            //2. 서버 SESSION생성
            SessionManager.getInstance().setSessionFromMap(request, rtnSessionMap);

            // RETURN
            return rtnSessionMap;
        }

        return null;
    }

    @Override
    public void selectJobSysOrder(UiMapDto dto, HttpServletRequest request) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        String envServerDomain = "";
        String serverMode = BizUtil.getServerMode();
        if("dev".equalsIgnoreCase(serverMode) || "local".equalsIgnoreCase(serverMode)){  //개발,로컬
            envServerDomain = "http://mesdev.interflex.co.kr";
        }else{  //운영
        	envServerDomain = "https://172.16.4.220";	
        }
        param.put("ENV_SERVER_DOMAIN", envServerDomain);
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectJobSysOrder", param),"ds_jobIcon");
    }

    @Override
    public void updateJobSysOrder(UiMapDto dto, HttpServletRequest request) throws Exception {
        DataSetMap dsMap = getParametersDataSetMap(dto, "ds_input" );

        int totResult = 0;
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> dsParam = dsMap.get(i);
            dsParam = setWhoColumn(dsParam);

             int result = generalDao.addUpdate(NAMESPACE + ".updateJobSysOrder", dsParam);
             totResult += result;
        }
        logger.debug("updateJobSysOrder result :  " + totResult);

        if(totResult == dsMap.size()){
            putDataSetMap(dto, 1);
        }else{
            putDataSetMap(dto, 2);
        }
    }

    @Override
    public void selectMyWork(UiMapDto dto, HttpServletRequest request) throws Exception {
        Map<String, Object> param = getParametersMap(dto);
        List<Map<String, Object>> list = generalDao.addSelect(NAMESPACE + ".selectMyWork", param);
        putDataSetMap(dto, list);

    }

    @Override
    public void insertMyWork(UiMapDto dto, HttpServletRequest request) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

        param.put("CNCT_PORTAL_GUBUN", "B");    //업무에서 클릭시 B (경영포털에서 클릭시 G)

        String createdBy = ObjectUtil.toStrTrim(param.get("CREATED_BY"));
        String jobSysCd = ObjectUtil.toStrTrim(param.get("JOB_SYS_CD"));
        String myWorkCd = ObjectUtil.toStrTrim(param.get("MY_WORK_CD"));
        logger.debug(String.format("나의할일통계CONUTING (insertMyWork) 필수 PARAM \nCREATED_BY : %s, JOB_SYS_CD : %s, MY_WORK_CD : %s", createdBy, jobSysCd,myWorkCd ));

        int result = generalDao.addInsert(NAMESPACE + ".insertMyWork", param);
        logger.debug("insertMyWork result : " + result);

        putDataSetMap(dto, result);

    }

    /**
     *
    * @fn
    * @brief (Override method) 즐겨찾기 목록조회
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.pes.pe.penc.service.PENC00010Service#selectFavorites(com.nbdf.commons.ui.vo.UiMapDto, javax.servlet.http.HttpServletRequest)
     */
    @Override
    public void selectFavorites(UiMapDto dto, HttpServletRequest request) throws Exception {
        putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectFavorites", getParametersMap(dto)),"ds_myMenuInfo");
    }

    /**
     *
    * @fn
    * @brief (Override method) 즐겨찾기 저장
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.pes.pe.penc.service.PENC00010Service#insertFavorites(com.nbdf.commons.ui.vo.UiMapDto, javax.servlet.http.HttpServletRequest)
     */
    @Override
    public void insertFavorites(UiMapDto dto, HttpServletRequest request) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

        String favoritesMvmnUrl = ObjectUtil.toStrTrim(param.get("FAVORITES_MVMN_URL"));    //즐겨찾기 이동 URL
        String favoritesMenuId = ObjectUtil.toStrTrim(param.get("FAVORITES_MENU_ID"));        //즐겨찾기 메뉴ID
        String jobSysCd = ObjectUtil.toStrTrim(param.get("JOB_SYS_CD"));                            //업무시스템코드

        if(StringUtil.isEmpty(favoritesMvmnUrl)){
            throw new BizException("즐겨찾기 저장에 FAVORITES_MVMN_URL 항목이 입력되지 않았습니다.");
        }
        if(StringUtil.isEmpty(favoritesMenuId)){
            throw new BizException("즐겨찾기 저장에 FAVORITES_MENU_ID 항목이 입력되지 않았습니다.");
        }
        if(StringUtil.isEmpty(jobSysCd)){
            throw new BizException("즐겨찾기 저장에 JOB_SYS_CD 항목이 입력되지 않았습니다.");
        }

        //1. 보내준 PAGE_URL로 WEB_URL을 만든다.
        String makeFavoritesMvmnUrl = makeFavoritesMvmnUrl(jobSysCd, favoritesMvmnUrl);
        param.put("FAVORITES_MVMN_URL", makeFavoritesMvmnUrl);

        //2. 이미 해당 사용자의 즐겨찾기에 저장된 내용인지 체크한다.
        int searchCount = generalDao.addSelectCount(NAMESPACE + ".selectFavoritesIsExsist", param);
        if(searchCount == 0){
            int result = generalDao.addInsert(NAMESPACE + ".insertFavorites", param);
            logger.debug("insertFavorites result : " + result);
            putDataSetMap(dto, result);
        }else{
            logger.debug("insertFavorites result : is already exsist favorite menu !");
            putDataSetMap(dto, 3);
        }

    }

    /**
     *
    * @fn : makeFavoritesMvmnUrl
    * @brief : 즐겨찾기 저장시 실재 웹URL로 만든다
    * @Method Name : makeFavoritesMvmnUrl
    * @Create Date: 2015 2015. 9. 21. 오후 3:40:00
    * @Author: JinSungHa
    * @param: XXXXXXXX
    * @return: XXXXX
    * @throws : Exception
     */
    private String makeFavoritesMvmnUrl(String jobSysCd, String favoritesMvmnUrl) {

        String serverMode = BizUtil.getServerMode();
        boolean isFcm = true;
        String rtnWebUrl = "";
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
		if("10.5.10.181".equals(ip) || "10.5.10.182".equals(ip)){
            rtnWebUrl = "http://10.5.10.180";
		}else{
			if("dev".equalsIgnoreCase(serverMode)){  //개발
	            rtnWebUrl = "http://10.5.10.31:8080";
	        }else if("local".equalsIgnoreCase(serverMode)){    //로컬
	            rtnWebUrl = "http://localhost:8011";
	        }    
	    }
*/
        if("prod".equalsIgnoreCase(serverMode)){   //운영 
            rtnWebUrl = "http://mes.interflex.co.kr";
        }else if("dev".equalsIgnoreCase(serverMode)){  //개발
            rtnWebUrl = "http://mesdev.interflex.co.kr";
        }else if("local".equalsIgnoreCase(serverMode)){    //로컬
            rtnWebUrl = "http://localhost:8011";
        }else{  //기타
        	rtnWebUrl = "http://mes.interflex.co.kr";
        }
		
        rtnWebUrl = rtnWebUrl + favoritesMvmnUrl;

        return rtnWebUrl;
    }

    /**
     *
    * @fn
    * @brief (Override method) 즐겨찾기 순서변경
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.pes.pe.penc.service.PENC00010Service#updateFavorites(com.nbdf.commons.ui.vo.UiMapDto, javax.servlet.http.HttpServletRequest)
     */
    @Override
    public void updateFavorites(UiMapDto dto, HttpServletRequest request) throws Exception {
        DataSetMap dsMap = getParametersDataSetMap(dto, "ds_input");

        int totResult = 0;
        for (int i = 0, n = dsMap.size(); i < n; i++) {
            Map<String, Object> dsParam = dsMap.get(i);

            String favoritesId = ObjectUtil.toStrTrim(dsParam.get("FAVORITES_ID")); // 즐겨찾기ID

            if (StringUtils.isEmpty(favoritesId)) { // 즐겨찾기ID가 비었다면 업무명(대메뉴)이다.
                totResult++; // 클라이언트 응답을 위해 정상처리
                continue;   //update 처리 패스
            }

            dsParam = setWhoColumn(dsParam);

            int result = generalDao.addUpdate(NAMESPACE + ".updateFavorites", dsParam);
            logger.debug(i + " updateFavorites result : " + result);
            totResult += result;
        }
        logger.debug("updateFavorites result :  " + totResult);

        if (totResult == dsMap.size()) {
            putDataSetMap(dto, 1);  //성공
        } else {
            putDataSetMap(dto, 0);  //실패
        }

    }

    /**
    *
   * @fn
   * @brief (Override method) 즐겨찾기 자동로딩 변경
   * @remark
   * - 오버라이드 함수의 상세 설명
   * @see com.nbdf.pes.pe.penc.service.PENC00010Service#updateFavoritesAuto(com.nbdf.commons.ui.vo.UiMapDto, javax.servlet.http.HttpServletRequest)
    */
   @Override
   public void updateFavoritesAuto(UiMapDto dto, HttpServletRequest request) throws Exception {
       DataSetMap dsMap = getParametersDataSetMap(dto, "INPUT");

       int totResult = 0;
       for (int i = 0, n = dsMap.size(); i < n; i++) {
           Map<String, Object> dsParam = dsMap.get(i);

           int result = generalDao.addUpdate(NAMESPACE + ".updateFavoritesAuto", dsParam);
           logger.debug(i + " updateFavoritesAuto result : " + result);
           totResult += result;
       }
       logger.debug("updateFavoritesAuto result :  " + totResult);

       putDataSetMap(dto, totResult);  //성공

   }
    
    /**
     *
    * @fn
    * @brief (Override method) 즐겨찾기 삭제
    * @remark
    * - 오버라이드 함수의 상세 설명
    * @see com.nbdf.pes.pe.penc.service.PENC00010Service#deleteFavorites(com.nbdf.commons.ui.vo.UiMapDto, javax.servlet.http.HttpServletRequest)
     */
    @Override
    public void deleteFavorites(UiMapDto dto, HttpServletRequest request) throws Exception {
        Map<String, Object> param = getParametersMap(dto);

        String favoritesId = ObjectUtil.toStrTrim(param.get("FAVORITES_ID"));    //즐겨찾기ID

        logger.debug(String.format("즐겨찾기 삭제 (deleteFavorites) 필수 PARAM \n FAVORITES_ID : %s ", favoritesId));

        int result = generalDao.addDelete(NAMESPACE + ".deleteFavorites", param);
        logger.debug("deleteFavorites result : " + result);

        putDataSetMap(dto, result);
    }

    /**
    *
   * @fn
   * @brief (Override method) 즐겨찾기 전체삭제
   * @remark
   * - 오버라이드 함수의 상세 설명
   * @see com.nbdf.pes.pe.penc.service.PENC00010Service#deleteFavorites(com.nbdf.commons.ui.vo.UiMapDto, javax.servlet.http.HttpServletRequest)
    */
   @Override
   public void deleteFavoritesAll(UiMapDto dto, HttpServletRequest request) throws Exception {
       Map<String, Object> param = getParametersMap(dto);

       int result = generalDao.addDelete(NAMESPACE + ".deleteFavoritesAll", param);
       logger.debug("deleteFavoritesAll result : " + result);

       putDataSetMap(dto, result);
   }
    
    /**
     *
    * @fn
    * @brief (Override method) 조직변경
    * @remark
    * - 관리자(혹은 관내국재무)에서 자신의 조직을 변경하여 세션에 세팅한다.
    * @see com.nbdf.pes.pe.penc.service.PENC00010Service#updateAdminOrgInfo(com.nbdf.commons.ui.vo.UiMapDto, javax.servlet.http.HttpServletRequest)
     */
    @Override
    public void updateAdminOrgInfo(UiMapDto dto, HttpServletRequest request) throws Exception {

        SessionManager sessionManager = SessionManager.getInstance();

        Map<String,String> sessionMap = sessionManager.getSessionInfo(request);
        String gvUserId = sessionMap.get(ContextConstant.SESSION_USER_ID);  //로그인자의 ID
        Map<String, Object> param = getParametersMap(dto);
        String chgOfcCd = ObjectUtil.toStrTrim(param.get("CHG_OFC_CD"));    //변경하고자하는 조직코드

        logger.debug(String.format("조직변경 현재 포털 사용자 gvUserId : %s , 변경할 조직코드 : %s " , gvUserId, chgOfcCd));

        if(StringUtils.isEmpty(gvUserId) || StringUtils.isEmpty(chgOfcCd)){
            throw new BizException("사용자 포털 ID나 변경할 조직코드가 존재하지 않습니다.");
        }

        //1. 해당 사용자가 조직변경권한이 있는지 체크
        Map<String,Object> userDto = new HashMap<String,Object>();
        userDto.put("USER_ID", gvUserId);

        Map<String,Object> rtnMap = updateAdminOrgInfo(chgOfcCd, request);

        // RETURN
        putDataSetMap(dto, rtnMap);
    }

    /**
     *
    * @fn
    * @brief  조직변경 - 로직
    * @remark
    * @see com.nbdf.pes.pe.penc.service.PENC00010Service#updateAdminOrgInfo(com.nbdf.commons.ui.vo.UiMapDto, javax.servlet.http.HttpServletRequest)
     */
    public Map<String,Object> updateAdminOrgInfo(String chgOfcCd, HttpServletRequest request) throws Exception{
        SessionManager sessionManager = SessionManager.getInstance();

        Map<String,Object> rtnMap = new HashMap<String,Object>();

        sessionManager.setSessionFromMap(request, rtnMap);

        //4. 변경된 조직정보를 SESSION테이블에 UPDATE한다
        Map<String,Object> originalCookieInfo = selectGlovelValueInfo(request); //쿠키에서 가져온 원본세션정보
        if(originalCookieInfo != null){

            Set<String> set = rtnMap.keySet();
            Iterator<String> iter = set.iterator();

            while (iter.hasNext()) {    //변경할 정보만큼 loop
                String key = (String) iter.next();
                originalCookieInfo.put(key, rtnMap.get(key));   //원본정보에 변경정보(조직정보)를 update한다.
            }

        }

        return rtnMap;

    }


    /**
     *
    * @fn
    * @brief (Override method) 조직변경 원복
    * @remark
    * - 관리자에서 변경한 조직을 원래 자신의 정보로 원상복구한다.
    * @see com.nbdf.pes.pe.penc.service.PENC00010Service#updateAdminOrgInfo(com.nbdf.commons.ui.vo.UiMapDto, javax.servlet.http.HttpServletRequest)
     */
    @Override
    public void updateAdminOrgInfoRollBack(UiMapDto dto, HttpServletRequest request) throws Exception {
        SessionManager sessionManager = SessionManager.getInstance();

        Map<String,String> sessionMap = sessionManager.getSessionInfo(request);
        String gvUserId = sessionMap.get(ContextConstant.SESSION_USER_ID);  //로그인자의 ID

        logger.debug(String.format("조직변경원복 현재 포털 사용자 gvUserId : %s s " , gvUserId));

        if(StringUtils.isEmpty(gvUserId)){
            throw new BizException("사용자 포털 ID나 변경할 조직코드가 존재하지 않습니다.");
        }

        //1. 해당 사용자의 원래 조직코드 조회
        Map<String,Object> userDto = new HashMap<String,Object>();
        userDto.put("USER_ID", gvUserId);


        Map<String,Object> rtnMap = new HashMap<String,Object>();

        sessionManager.setSessionFromMap(request, rtnMap);

        //4. 변경된 조직정보를 SESSION테이블에 UPDATE한다
        Map<String,Object> originalCookieInfo = selectGlovelValueInfo(request); //쿠키에서 가져온 원본세션정보
        if(originalCookieInfo != null){

            Set<String> set = rtnMap.keySet();
            Iterator<String> iter = set.iterator();

            while (iter.hasNext()) {    //변경할 정보만큼 loop
                String key = (String) iter.next();
                originalCookieInfo.put(key, rtnMap.get(key));   //원본정보에 변경정보(조직정보)를 update한다.
            }

            ObjectMapper mapper = new ObjectMapper();
            String totSessionMapString = mapper.writeValueAsString(originalCookieInfo);
            originalCookieInfo.put(ContextConstant.SESSION_AUTH_TOKEN_ID, totSessionMapString); //변경정보가 포함된 전체 세션정보를 SESSION테이블에 UPDATE
        }


        // RETURN
        putDataSetMap(dto, rtnMap);

    }

    /**
    *
   * @fn
   * @brief (Override method) 회사권한 목록조회
   * @remark
   * - 오버라이드 함수의 상세 설명
   * @see com.nbdf.pes.pe.penc.service.PENC00010Service#selectCmdCompanyAltAuthList(com.nbdf.commons.ui.vo.UiMapDto, javax.servlet.http.HttpServletRequest)
    */
   @Override
   public void selectCmdCompanyAltAuthList(UiMapDto dto, HttpServletRequest request) throws Exception {
       putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectCmdCompanyAltAuthList", getParametersMap(dto)),"gds_companyAltAuth");
   }
   /**
   *
  * @fn
  * @brief (Override method) 회사 목록조회
  * @remark
  * - 오버라이드 함수의 상세 설명
  * @see com.nbdf.pes.pe.penc.service.PENC00010Service#selectUserCompanyList(com.nbdf.commons.ui.vo.UiMapDto, javax.servlet.http.HttpServletRequest)
   */
  @Override
  public void selectUserCompanyList(UiMapDto dto, HttpServletRequest request) throws Exception {
      putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectUserCompanyList", getParametersMap(dto)),"ds_result");
  }
    
  /**
  *
 * @fn
 * @brief (Override method) 회사권한 목록조회
 * @remark
 * - 오버라이드 함수의 상세 설명
 * @see com.nbdf.pes.pe.penc.service.PENC00010Service#selectCmdCompanyAltAuthList(com.nbdf.commons.ui.vo.UiMapDto, javax.servlet.http.HttpServletRequest)
  */
 @Override
 public void selectMenuUrlList(UiMapDto dto, HttpServletRequest request) throws Exception {
     putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectMenuUrlList", getParametersMap(dto)),"gds_menuUrl");
 }

	/**
	 *
	* @fn
	* @brief (Override method) 언어 목록조회
	* @remark
	* - 오버라이드 함수의 상세 설명
	* @see com.nbdf.pes.pe.penc.service.PENC00010Service#selectCmdDictionary(com.nbdf.commons.ui.vo.UiMapDto, javax.servlet.http.HttpServletRequest)
	 */
	@Override
	public void selectCmdDictionary(UiMapDto dto, HttpServletRequest request) throws Exception {
		 Map<String, Object> param = getParametersMap(dto);
	   	 String cacheName = "CmLang_"+param.get("SESSION_LANGUAGETYPE");
		 Cache cache = null;
	   	 List<Map<String, Object>> resultList = null;
	   	 EhCacheCacheManager manager = (EhCacheCacheManager) SessionUtil.getBean("cacheManager");
	   	 
	   	 if (manager != null) {
	    	 cache = manager.getCache(cacheName);
	    	 if (cache != null && cache.get(cacheName) != null) {
	    		 resultList = (List<Map<String, Object>>) cache.get(cacheName).get();
	    	 } 
	   	 }
	   	 int cnt = 0;
	   	 if(resultList != null)
	   		 cnt = generalDao.addSelectCount(NAMESPACE + ".selectCmdDictionaryCnt",param);
	   	 
	   	 if (resultList == null || (resultList != null && cnt != resultList.size())) {
	   		 resultList = generalDao.addSelect(NAMESPACE + ".selectCmdDictionary",param);
	   		 
	   		 if (cache != null) {
	   			 cache.put(cacheName, resultList);
	   		 }
	   	 }
	   	 
	   	 putDataSetMap(dto, resultList, "gds_cmdDictionary");
		
	}

	   /**
	   *
	  * @fn
	  * @brief (Override method) site 목록조회
	  * @remark
	  * - 오버라이드 함수의 상세 설명
	  * @see com.nbdf.pes.pe.penc.service.PENC00010Service#selectUserCompanyList(com.nbdf.commons.ui.vo.UiMapDto, javax.servlet.http.HttpServletRequest)
	   */
	  @Override
	  public void selectUserSiteType(UiMapDto dto, HttpServletRequest request) throws Exception {
	      putDataSetMap(dto, generalDao.addSelect(NAMESPACE + ".selectUserSiteType", getParametersMap(dto)),"ds_site");
	  }
 
}
