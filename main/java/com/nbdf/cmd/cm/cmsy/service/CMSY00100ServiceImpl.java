package com.nbdf.cmd.cm.cmsy.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.nbdf.commons.exception.BizException;
import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.interceptor.SessionManager;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.BizUtil;
import com.nbdf.commons.util.ObjectUtil;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.GeneralDao;
import com.nbdf.commons.web.support.AbstractNbdfService;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;



/**
* @file: CMSY01100ServiceImpl.java
* @Package: com.nbdf.cmd.cm.cmsy.service
* @Project name: IFC MES시스템 구축
* @Type name: CMSY01100ServiceImpl
* @Company: Built1
* @Create Date: 2015 2015. 3. 9. 오후 7:36:19
* @Author: JinSungHa
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
public class CMSY00100ServiceImpl extends AbstractNbdfService implements CMSY00100Service {

    public static final String NAMESPACE = "com.nbdf.cmd.cm.cmsy.dao.CMSY00100Dao";
    public static final String NAMESAPCE_EDA = "smh.pda.dao.EDA00200Dao";

	@Value("#{commonsProp['env.session.time']?:30}")
	private long sessionLimitTime; // 세션만료시간(분단위)

	@Value("#{commonsProp['env.duplicateLogin.check']?:false}")
	private boolean duplicateLoginCheck; // 중복로그인 체크할지 여부 true : 체크함, false :

	@Value("#{commonsProp['env.server']?:'local'}")
	private String envServer; // 서버종류(local,dev,prod,vera)


    @Autowired
    private GeneralDao generalDao;


    /**
    * @throws Exception 
     * @fn
    * @brief (Override method)  비번 초기화
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#loginPost(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void loginPost(UiMapDto dto, HttpServletRequest request, HttpServletResponse response) throws Exception {
    	String rstMsg = "";
        Map<String, Object> rtnMap = new HashMap<String, Object>();
    	
        Map<String, Object> param = getParametersMap(dto);
        if("ERP".equals(param.get("WORKTYPE"))) {
        	loginPostEda(dto, request, response);
        	return;
        }
		String reqLoginId = ObjectUtil.toStrTrim(param.get("USER_ID"));
		String reqLoginPwOrg = ObjectUtil.toStrTrim(param.get("USER_PWD_ORG"));
		String reqLoginPw = ObjectUtil.encodeSHA256(ObjectUtil.toStrTrim(param.get("USER_PWD")));
		String kickBeforeUser = ObjectUtil.toStrTrim(param.get("kickBeforeUser")); // 기존 사용자의 접속을 종료하고 로그인 할 여부

		logger.debug("\n\n\n envServer : " + envServer);

		SessionManager sessionManager = SessionManager.getInstance(envServer);
		Map<String, String> sessionInfo = sessionManager.getSessionInfo(request);
		String sessionUserId = ObjectUtil.toStrTrim(sessionInfo.get(ContextConstant.SESSION_USER_ID));
//		logger.error("sessionUserId-->"+sessionUserId);
//		param.put("USER_ID",sessionUserId);
		param.put("USER_ID", reqLoginId);
		param.put("USER_PWD", reqLoginPw);
        param.put("USER_PWD_ORG", reqLoginPw);
        
		List<Map<String, Object>> userMapList = selectUserInfoList(sessionUserId, param);
		logger.debug("userMapList-->"+userMapList);
		
		if (userMapList == null || userMapList.size() < 1) { // 사용자 정보 불일치
			
			// 로그인 실패 카운트 증가			   	
			int result = generalDao.update(NAMESPACE + ".updatePwdErrCnt", param);

			int pwdErrCnt = NumberUtils.toInt(ObjectUtil.toStrTrim(generalDao.selectOne(NAMESPACE + ".selectPwdErrCnt", param)), 0);
			logger.debug("login fail count : " + pwdErrCnt);

			if (result > 0) {// 수정이 이루어 졌다.
				if (pwdErrCnt < 5) {
					rstMsg = "LoginInfoNotCorrectCnt";//String.format("해당 사용자가 존재하지 않거나, 로그인 정보가 일치하지 않습니다. [로그인 실패 : %d 회]", pwdErrCnt);
					throw new BizException(rstMsg,""+pwdErrCnt);
				} else {
					Map<String, Object> map = new HashMap<String, Object>();
					map.put("USE_YN", "N");
					map.put("USER_ACNT", reqLoginId);
					rstMsg = "CannotLoginFail5";//"비밀번호 5회 이상 오류로, 로그인이 차단되었습니다.\n1시간 후에 재시도 하시기 바랍니다.";
					throw new BizException(rstMsg);
				}
			} else {
				rstMsg = "LoginInfoNotCorrect";//"해당 사용자가 존재하지 않거나, 로그인 정보가 일치하지 않습니다.";
				throw new BizException(rstMsg);
			}

		} else {
			// 사용자 있음
			if (userMapList.size() > 1) { // 동일 사용자가 2명이상일 경우
				rstMsg = "SameUserMoreThan2";//"동일사용자가 2명이상 존재합니다.";
				throw new BizException(rstMsg);

			} else { // 1명일 경우
				Map<String, Object> userMap = userMapList.get(0);

				// 사용중지 상태인지 체크
				String useYn = ObjectUtil.toStrTrim(userMap.get("USE_YN"));
				logger.debug("*************** useYn : " + useYn);
				if ("N".equalsIgnoreCase(useYn)) {
					logger.debug("사용중지 사용자");
					rstMsg = "CurrentAccountSuspended";//"현재 계정이 사용중지 상태입니다. 관리자에게 문의해주시기 바랍니다.";
					throw new BizException(rstMsg);
				}

				// 비밀번호 오류 횟수 체크
				int pwdErrCnt = NumberUtils.toInt(ObjectUtil.toStrTrim(userMap.get("PWD_ERR_CNT")));
				int elapsedHour = NumberUtils.toInt(ObjectUtil.toStrTrim(userMap.get("ELAPSED_HOUR")));
				if (pwdErrCnt > 5 && elapsedHour < 1) {
					logger.debug(String.format("비밀번호 오류 횟수 : %d 회", pwdErrCnt));
					rstMsg = "CannotLoginFail5";//"비밀번호 5회 오류로, 로그인이 차단되었습니다. 1시간 후에 재시도 하시기 바랍니다.";
					throw new BizException(rstMsg);
				}

				// 90일간 로그인 이력없다면 사용중지
				/*
				 * String lastLoginDate = ObjectUtil.toStrTrim(userMap.get("LAST_LGN_DTM")); if
				 * (!StringUtil.isEmpty(lastLoginDate)) { // 로그인 이력이 있다. long lastUpdateDateDiff
				 * = BizUtil.calcPassWordChangDay(lastLoginDate); if (lastUpdateDateDiff > 90) {
				 * // 최종수정일이 90일이 넘은 사용자를 대상으로 // 조회 rstMsg =
				 * "CannotLoginIn90Days";//"90일 이상 로그인을 하지 않아, 로그인이 차단되었습니다. 관리자에게 문의해주시기 바랍니다."
				 * ; throw new BizException(rstMsg); } }
				 */

				// 비밀번호 변경일 체크
				/*
				String pwdChangeDate = ObjectUtil.toStrTrim(userMap.get("PWD_CHANGE_DATE")); // 변경일8자리
				if (pwdChangeDate != null && pwdChangeDate.length() == 8) {
					long diffDays = BizUtil.calcPassWordChangDay(pwdChangeDate);
					logger.debug(String.format("비밀번호 변경후 지난기간 : %d 일", diffDays));

					if (diffDays > 90) { // 변경일 90일 초과
						rstMsg = "비밀번호 변경일 90일이 경과하였습니다. 비밀번호 재설정을 해주시기 바랍니다.";
						throw new BizException(rstMsg);
					}
				}
				*/
				//사이트 권한 여부
				if(userMap.get("SITETYPE")==null){
					rstMsg = "NotHaveSiteAuthority";//"사이트 권한이 없습니다.";
					throw new BizException(rstMsg);
				}
				//사이트 권한 여부
				if(userMap.get("RETR_DATE")!=null){
					rstMsg = "CannotLoginRetire";
					throw new BizException(rstMsg);
				}
					
				String userId = ObjectUtil.toStrTrim(userMap.get("USER_ID")); // 사용자 ID
				
				// 사용자가 로그인이 가능한지 체크(기존 로그인자 유무 체크)
				String ip = BizUtil.getClientIp(request);
						
				//jsh 201711
				if (duplicateLoginCheck) { // 중복로그인을 체크한다면
					userMap.put("CNCT_IP", ip); // 조회된 사용자에 ip추가하여 조회(동일 사용자 유무
												// 체크)
					String[] isExistDuplicatedSession = selectIsExistDuplicatedSession(param);
					if (!"Y".equals(kickBeforeUser)) { // 기존 사용자를 로그오프시킬지 여부
						if ("Y".equals(isExistDuplicatedSession[0])) {
							rtnMap.put("LOGIN_ID", reqLoginId);
							rtnMap.put("LOGIN_PW", reqLoginPwOrg);
							rtnMap.put("MSG", String.format("IP : %s 에서\n 이미 동일한 사용자가 접속중입니다. 기존 사용자를 로그오프한 뒤, 로그인을 진행하시겠습니까?",
									isExistDuplicatedSession[1]));
					        putDataSetMap(dto, rtnMap);

						}
					}
				}
				
				// 관리자가 비밀번호 초기화 한경우 변경화면 이동
				String userPwd = ObjectUtil.toStrTrim(userMap.get("USER_PWD")); // 포털
																				// 사용자
																				// ID
/*
				if (ObjectUtil.encodeSHA256("a123456!").equals(userPwd)) {
					rstMsg = "비밀번호가 초기화된 상태입니다. \n비밀번호를 재설정해주시기 바랍니다.";
					throw new BizException(rstMsg);
				}
*/				
				logger.debug("sessionInfo.get(ContextConstant.SESSION_USER_ID)-->"+sessionInfo.get(ContextConstant.SESSION_USER_ID));
				// 세션이 비어있다면 다음 진행
				if (StringUtils.isEmpty(sessionInfo.get(ContextConstant.SESSION_USER_ID))) {
					logger.debug("session is empty");
					// 기존 남아있는 잔재 제거
//					sessionManager.removeCookie(request, response);

					// 1-1 사용자의 업무 목록 조회
					List<Map<String, String>> userJobList = null;	//generalDao.selectList(NAMESPACE + ".selectUserJobList",	userMap);

					// 1-1 사용자의 권한 목록 조회
					List<Map<String, Object>> userAuthList = generalDao.selectList(NAMESPACE + ".selectUserAuthList", userMap);

					// 1-2 (로그인이력) 클라이언트 접속 브라우져 조회
					String browser = request.getHeader("User-Agent");

					// 1-3 로그인 로그 저장
					Map<String, Object> loginLogMap = new HashMap<String, Object>(); // 로그인
																						// 이력정보
																						// 맵
					loginLogMap.put("USER_ID", userId);
					loginLogMap.put("USER_ACNT", reqLoginId);
					loginLogMap.put("CNCT_IP", ip);
					loginLogMap.put("LOUT_DTM", "");
					loginLogMap.put("CNCT_BRWSR", browser);
					loginLogMap.put("LGN_GUBUN", "B"); // 로그인한
																				// 방법코드
																				// (G:그룹웨어에서
																				// SSO연동,
																				// B:업무단에서
																				// 바로
																				// 로그인)

					int lgnLogResult = generalDao.insert(NAMESPACE + ".insertLgnLog", loginLogMap);
					long LGN_LOG_ID = NumberUtils.toLong(ObjectUtil.toStrTrim(loginLogMap.get("LGN_LOG_ID")));
					logger.debug("lgnLogResult : " + lgnLogResult + " / LGN_LOG_ID : " + LGN_LOG_ID);
					loginLogMap.put("LGN_LOG_ID", LGN_LOG_ID);

					// 1-5. 로그인후 세션정보 세팅
					logger.debug("로그인후 세션정보 세팅....");
					logger.debug("userMap-->"+userMap);
					logger.debug("userJobList-->"+userJobList);
					logger.debug("userAuthList-->"+userAuthList);
					logger.debug("loginLogMap-->"+loginLogMap);
					boolean isPortal = true;
					Object[] sessionMapNew = sessionManager.makeSessionInfoMapNew(userMap, userJobList, userAuthList,
							loginLogMap, request, isPortal);
					Map<String, Object> sMap = (Map<String, Object>) sessionMapNew[0]; // 세션맵에
																						// 들어갈
																						// 정보
					Map<String, String> cMap = (Map<String, String>) sessionMapNew[1]; // 쿠키에
																						// 들어갈
																						// 정보(gv_loginInfo=sessionMap조회key)
					logger.debug("cMap-->"+cMap);
					sessionManager.setCookieSessionInfo(request, response, cMap);

					// 1-6. 공통 세션테이블에 MERGE(UPDATE or INSERT) -->
					
					// makeSessionInfo에서 처리함
					int mergeResult = saveMergeSessionInfo(sMap, request);
					logger.debug("mergeSessionInfo result : " + mergeResult);

					// 1-7. 로그인 성공 후 에러초기화(비밀번호 에러 카운트:0)
					int pwdErrCntResult = generalDao.update(NAMESPACE + ".updatePwdErrCntInit", loginLogMap);
					logger.debug("updatePwdErrCntInit result : " + pwdErrCntResult);

					// 1-8. 로그인 성공 후 로그인 이력테이블 정리(로그아웃 안한 상태로 브라우저의 쿠키를 정리한 경우
					// 이력테이블에 로그아웃으로 갱신)
					int updateLgnLogint = generalDao.update(NAMESPACE + ".updateLgnLogInit", sMap);
					logger.debug("updateLgnLogInit result : " + updateLgnLogint);

				}
			}
		}
    }
    
    /**
    * @throws Exception 
     * @fn
    * @brief (Override method)  비번 초기화
    * @remark
    *  1. [조회] 버튼 클릭시 호출
    * @see com.nbdf.ecm.cm.cmsa.service.CMSA01000Service#loginPostTop(com.nbdf.commons.ui.vo.UiMapDto)
    */
    public void loginPostTop(UiMapDto dto, HttpServletRequest request, HttpServletResponse response) throws Exception {
    	String rstMsg = "";
        Map<String, Object> rtnMap = new HashMap<String, Object>();
    	
        Map<String, Object> param = getParametersMap(dto);
		SessionManager sessionManager = SessionManager.getInstance(envServer);
		Map<String, String> sessionInfo = sessionManager.getSessionInfo(request);
		String sessionUserId = ObjectUtil.toStrTrim(sessionInfo.get(ContextConstant.SESSION_USER_ID));
		logger.debug("sessionUserId-->"+sessionUserId);
		List<Map<String, Object>> userMapList = selectUserInfoList(sessionUserId, param);
		logger.debug("userMapList-->"+userMapList);
		
		if (userMapList == null || userMapList.size() < 1) { // 사용자 정보 불일치
			rstMsg = "LoginInfoNotCorrect";//"해당 사용자가 존재하지 않거나, 로그인 정보가 일치하지 않습니다.";
			throw new BizException(rstMsg);
		} else {
			Map<String, Object> userMap = userMapList.get(0);
			String userId = sessionUserId; // 사용자 ID

			// 사용자가 로그인이 가능한지 체크(기존 로그인자 유무 체크)
			String ip = BizUtil.getClientIp(request);
					
			logger.debug("sessionInfo.get(ContextConstant.SESSION_USER_ID)-->"+sessionInfo.get(ContextConstant.SESSION_USER_ID));
			// 세션이 비어있다면 다음 진행
				// 기존 남아있는 잔재 제거
//					sessionManager.removeCookie(request, response);

			// 1-1 사용자의 업무 목록 조회
			List<Map<String, String>> userJobList = null;	//generalDao.selectList(NAMESPACE + ".selectUserJobList",	userMap);

			// 1-1 사용자의 권한 목록 조회
			List<Map<String, Object>> userAuthList = generalDao.selectList(NAMESPACE + ".selectUserAuthList", userMap);

			// 1-2 (로그인이력) 클라이언트 접속 브라우져 조회
			String browser = request.getHeader("User-Agent");

			// 1-3 로그인 로그 저장
			Map<String, Object> loginLogMap = new HashMap<String, Object>(); // 로그인
																				// 이력정보
																				// 맵
			loginLogMap.put("USER_ID", sessionInfo.get(ContextConstant.SESSION_USER_ID));
			loginLogMap.put("USER_ACNT", sessionInfo.get(ContextConstant.SESSION_USER_ACNT));
			loginLogMap.put("CNCT_IP", sessionInfo.get(ContextConstant.SESSION_IP_ADDR));
			loginLogMap.put("LOUT_DTM", "");
			loginLogMap.put("CNCT_BRWSR", browser);
			loginLogMap.put("LGN_GUBUN", "B"); // 로그인한 방법코드(G:그룹웨어에서 SSO연동, B:업무단에서)

			int lgnLogResult = generalDao.insert(NAMESPACE + ".insertLgnLog", loginLogMap);
			long LGN_LOG_ID = NumberUtils.toLong(ObjectUtil.toStrTrim(loginLogMap.get("LGN_LOG_ID")));
			logger.debug("lgnLogResult : " + lgnLogResult + " / LGN_LOG_ID : " + LGN_LOG_ID);
			loginLogMap.put("LGN_LOG_ID", LGN_LOG_ID);

			// 1-5. 로그인후 세션정보 세팅
			boolean isPortal = true;
			Object[] sessionMapNew = sessionManager.makeSessionInfoMapNew(userMap, userJobList, userAuthList,
					loginLogMap, request, isPortal);
			Map<String, Object> sMap = (Map<String, Object>) sessionMapNew[0]; // 세션맵에
																				// 들어갈
																				// 정보
			Map<String, String> cMap = (Map<String, String>) sessionMapNew[1]; // 쿠키에
																				// 들어갈
																				// 정보(gv_loginInfo=sessionMap조회key)
			logger.debug("cMap-->"+cMap);
			sessionManager.setCookieSessionInfo(request, response, cMap);

			// 1-6. 공통 세션테이블에 MERGE(UPDATE or INSERT) -->
			// makeSessionInfo에서 처리함
			int mergeResult = saveMergeSessionInfo(sMap, request);
			logger.debug("mergeSessionInfo result : " + mergeResult);

			// 1-8. 로그인 성공 후 로그인 이력테이블 정리(로그아웃 안한 상태로 브라우저의 쿠키를 정리한 경우
			// 이력테이블에 로그아웃으로 갱신)
			int updateLgnLogint = generalDao.update(NAMESPACE + ".updateLgnLogInit", sMap);
			logger.debug("updateLgnLogInit result : " + updateLgnLogint);

		}
    }

    public void loginPostEda(UiMapDto dto, HttpServletRequest request, HttpServletResponse response) throws Exception {
    	String rstMsg = "";
        Map<String, Object> rtnMap = new HashMap<String, Object>();
    	
        Map<String, Object> param = getParametersMap(dto);
		SessionManager sessionManager = SessionManager.getInstance(envServer);
		generalDao.addSelect(NAMESAPCE_EDA + ".selectLogin", param);
        if("N".equals(param.get("CHECK"))) {
        	throw new BizException("LoginInfoNotExists");
        }
		Map<String, String> sessionInfo = sessionManager.getSessionInfo(request);
		String sessionUserId = (String) param.get("USER_ID");//ObjectUtil.toStrTrim(sessionInfo.get(ContextConstant.SESSION_USER_ID));
//		logger.debug("sessionUserId-->"+sessionUserId);
//		param.put("EDA_USER_ID", param.get("USER_ID"));
//		List<Map<String, Object>> userMapList = selectUserInfoListEda(sessionUserId, param);
//		logger.debug("userMapList-->"+userMapList);
//		
//		if (userMapList == null || userMapList.size() < 1) { // 사용자 정보 불일치
//			rstMsg = "LoginInfoNotCorrect";//"해당 사용자가 존재하지 않거나, 로그인 정보가 일치하지 않습니다.";
//			throw new BizException(rstMsg);
//		} else {
			Map<String, Object> userMap = new HashMap<String, Object>();	//userMapList.get(0);
			userMap.put("ID", param.get("S_ID")); //사용자ID
			userMap.put("USER_ID", param.get("USER_ID")); //사용자ID
			userMap.put("USER_ACNT", param.get("USER_ID"));  //계정
			userMap.put("USER_NM", param.get("USER_NAME"));
	        
			userMap.put("LOGIN_SITETYPE", "IFC");
			userMap.put("SITETYPE", "IFC");
			userMap.put("PDA_WORKTYPE", param.get("WORKTYPE"));
			userMap.put("LOGIN_LANGUAGETYPE", "ko-KR");
			userMap.put("ENTERPRISEID", "INTERFLEX");


			String userId = sessionUserId; // 사용자 ID

			// 사용자가 로그인이 가능한지 체크(기존 로그인자 유무 체크)
			String ip = BizUtil.getClientIp(request);
					
//			logger.debug("sessionInfo.get(ContextConstant.SESSION_USER_ID)-->"+sessionInfo.get(ContextConstant.SESSION_USER_ID));
			// 세션이 비어있다면 다음 진행
				// 기존 남아있는 잔재 제거
//					sessionManager.removeCookie(request, response);

			// 1-1 사용자의 업무 목록 조회
			List<Map<String, String>> userJobList = null;	//generalDao.selectList(NAMESPACE + ".selectUserJobList",	userMap);

			// 1-1 사용자의 권한 목록 조회
			List<Map<String, Object>> userAuthList = generalDao.selectList(NAMESPACE + ".selectUserAuthList", userMap);

			// 1-2 (로그인이력) 클라이언트 접속 브라우져 조회
			String browser = request.getHeader("User-Agent");

//			// 1-3 로그인 로그 저장
			Map<String, Object> loginLogMap = new HashMap<String, Object>(); // 로그인
																				// 이력정보
																				// 맵
			loginLogMap.put("USER_ID", param.get("USER_ID"));
			loginLogMap.put("USER_ACNT", param.get("USER_ID"));
			loginLogMap.put("CNCT_IP", BizUtil.getClientIp(request));
			loginLogMap.put("LOUT_DTM", "");
			loginLogMap.put("CNCT_BRWSR", browser);
			loginLogMap.put("LGN_GUBUN", "P"); // 로그인한 방법코드(G:그룹웨어에서 SSO연동, B:업무단에서)

			int lgnLogResult = generalDao.insert(NAMESPACE + ".insertLgnLog", loginLogMap);
			long LGN_LOG_ID = NumberUtils.toLong(ObjectUtil.toStrTrim(loginLogMap.get("LGN_LOG_ID")));
			logger.debug("lgnLogResult : " + lgnLogResult + " / LGN_LOG_ID : " + LGN_LOG_ID);
			loginLogMap.put("LGN_LOG_ID", LGN_LOG_ID);

			// 1-5. 로그인후 세션정보 세팅
			boolean isPortal = true;
			Object[] sessionMapNew = sessionManager.makeSessionInfoMapNew(userMap, userJobList, userAuthList,
					loginLogMap, request, isPortal);
			Map<String, Object> sMap = (Map<String, Object>) sessionMapNew[0]; // 세션맵에
																				// 들어갈
																				// 정보
			Map<String, String> cMap = (Map<String, String>) sessionMapNew[1]; // 쿠키에
																				// 들어갈
																				// 정보(gv_loginInfo=sessionMap조회key)
			logger.debug("cMap-->"+cMap);
			sessionManager.setCookieSessionInfo(request, response, cMap);

			// 1-6. 공통 세션테이블에 MERGE(UPDATE or INSERT) -->
			// makeSessionInfo에서 처리함
			int mergeResult = saveMergeSessionInfo(sMap, request);
			logger.debug("mergeSessionInfo result : " + mergeResult);

			// 1-8. 로그인 성공 후 로그인 이력테이블 정리(로그아웃 안한 상태로 브라우저의 쿠키를 정리한 경우
			// 이력테이블에 로그아웃으로 갱신)
//			int updateLgnLogint = generalDao.update(NAMESPACE + ".updateLgnLogInit", sMap);
//			logger.debug("updateLgnLogInit result : " + updateLgnLogint);

//		}
    }
        
	@Override
	public List<Map<String, Object>> selectUserInfoList(String sessionUserId, Map<String, Object> dto)
			throws Exception {
		logger.debug("{}", dto);

		if (!StringUtils.isEmpty(sessionUserId)) {
			logger.debug(" == 로그인 상태로 REDIRECT됨 ==");
			dto.put("SESSION_USER_ID", sessionUserId);
		}

		// PW암호화적용 20150828
		String reqPw = ObjectUtil.toStrTrim(dto.get("USER_PWD"));
		if (!"1111".equals(reqPw)) {
			// 포탈접속 여부 체크 20170916
			String isPortal = ObjectUtil.toStrTrim(dto.get("isPortal"));
			if (isPortal != null && "Y".equalsIgnoreCase(isPortal)) {
				dto.put("USER_PWD", ObjectUtil.toStrTrim(dto.get("USER_PWD")));
			} else {
				String encReqLoginPw = ObjectUtil.toStrTrim(dto.get("USER_PWD"));
				dto.put("USER_PWD", encReqLoginPw);
			}
		}

		List<Map<String, Object>> list = generalDao.selectList(NAMESPACE + ".selectUserInfoList", dto);

//		logger.error("list-->" + list);

		return list;
	}   
	
	public List<Map<String, Object>> selectUserInfoListEda(String sessionUserId, Map<String, Object> dto)
			throws Exception {
		logger.debug("{}", dto);

		if (!StringUtils.isEmpty(sessionUserId)) {
			logger.debug(" == 로그인 상태로 REDIRECT됨 ==");
			dto.put("SESSION_USER_ID", sessionUserId);
		}

		List<Map<String, Object>> list = generalDao.selectList(NAMESPACE + ".selectUserInfoList", dto);

//		logger.error("list-->" + list);

		return list;
	}  
	@Override
	public String[] selectIsExistDuplicatedSession(Map<String, Object> dto) throws Exception {
		String[] str = { "N", "" };
		// [참고]dto : pes_portal_user 정보 + CNCT_IP(현재 접속한 IP)

		Map<String, String> sessionInfoMap = generalDao.selectOne(NAMESPACE + ".selectSessionInfo", dto);
		if (sessionInfoMap == null) { // null일 경우 한번도 접속안한 사용자
			return str;
		}

		String sessionIp = sessionInfoMap.get("CNCT_IP"); // 세션의 IP
		String clientIp = ObjectUtil.toStrTrim(dto.get("CNCT_IP")); // 로그인한 IP
		String lstScrinUtTime = ObjectUtil.toStrTrim(sessionInfoMap.get("LST_SCRIN_UT_TIME")); // 마지막
																								// 서버
																								// 호출
																								// 시각

		// 해당 세션정보가 30분이 지났으면 로그아웃상태로 간주
		if (lstScrinUtTime.length() == 14) {
			long lastCallTime = BizUtil.calcSessionInvalidTime(lstScrinUtTime); // 마지막
																				// 호출
																				// 시간의
																				// '분'
																				// 계산
			if (lastCallTime > sessionLimitTime) {
				return str;
			}
		}

		// 세션유지중인데 접속한 IP가 다르면
		if ("Y".equalsIgnoreCase(sessionInfoMap.get("SESSION_VLD_YN")) && !(sessionIp.equals(clientIp))) {
			str[0] = "Y";
			str[1] = sessionIp;
			return str; // 동일한 사용자가 접속중이다.
		}

		return str;
	}

	/**
	 *
	 * @fn
	 * @brief (Override method) 공통 세션 테이블에 정보갱신
	 * @remark - 오버라이드 함수의 상세 설명
	 * @see com.nbdf.pes.pe.pelh.service.PELH00010Service#mergeSessionInfo(java.util.Map)
	 */
	@Override
	public int saveMergeSessionInfo(Map<String, Object> dto, HttpServletRequest request) throws Exception {

		Map<String, Object> sessionMap = new HashMap<String, Object>();
		sessionMap.put("USER_ID", dto.get(ContextConstant.SESSION_USER_ID));
		sessionMap.put("LGN_LOG_ID", dto.get(ContextConstant.SESSION_LGN_ID));
		sessionMap.put("SESSION_GUID", dto.get(ContextConstant.SESSION_GUID));
		sessionMap.put("USER_CRTFC_TKN", dto.get(ContextConstant.SESSION_AUTH_TOKEN_ID));
		sessionMap.put("SSO_CRTFC_TKN", dto.get(ContextConstant.SESSION_SSO_TOKEN_ID));
		sessionMap.put("CNCT_IP", dto.get(ContextConstant.SESSION_IP_ADDR));
		sessionMap.put("LST_SCRIN_REQ_URI", request.getRequestURI());
		sessionMap.put("DUP_LGN_TIME", "");
		sessionMap.put("SESSION_VLD_YN", "Y");
		sessionMap.put("USER_ACNT", dto.get(ContextConstant.SESSION_USER_ACNT));
		
		generalDao.addUpdate(NAMESPACE + ".deleteSession", sessionMap);
		
		return generalDao.addUpdate(NAMESPACE + ".mergeSessionInfo", sessionMap);
	}


}
