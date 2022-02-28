package com.nbdf.pes.pe.pelh.service;

import com.nbdf.commons.interceptor.ContextConstant;
import com.nbdf.commons.interceptor.SessionManager;
import com.nbdf.commons.ui.vo.UiMapDto;
import com.nbdf.commons.util.BizUtil;
import com.nbdf.commons.util.ObjectUtil;
import com.nbdf.commons.util.SessionUtil;
import com.nbdf.commons.util.StringUtil;
import com.nbdf.commons.web.support.AbstractNbdfService;
import com.nbdf.commons.web.support.GeneralDao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

/**
 * @file: PENC00010ServiceImpl.java
 * @Package: com.nbdf.pes.pe.pelh.service
 * @Project name: IFC MES시스템 구축
 * @Type name: PENC00010ServiceImpl
 * @Company: Built1
 * @Create Date: 2015 2015. 3. 27. 오전 9:38:54
 * @Author: JinSungHa
 * @File Version: v1.0
 *
 *       << 개정이력(Modification Information) >>
 *
 *       수정일 수정자 수정내용 ------------ ------ ---------- 2015. 3. 27. JinSungHa 최초
 *       생성
 *
 */
@Service
public class PELH00010ServiceImpl extends AbstractNbdfService implements PELH00010Service {

	@Value("#{commonsProp['env.session.time']?:30}")
	private long sessionLimitTime; // 세션만료시간(분단위)

	public static final String NAMESAPCE = "com.nbdf.pes.pe.pelh.dao.PELH00010Dao";

	@Value("#{commonsProp['env.duplicateLogin.check']?:false}")
	private boolean duplicateLoginCheck; // 중복로그인 체크할지 여부 true : 체크함, false :
											// 허용함

	@Value("#{commonsProp['env.server']?:'local'}")
	private String envServer; // 서버종류(local,dev,prod,vera)

	@Autowired
	private GeneralDao generalDao;

	/**
	 *
	 * @fn
	 * @brief (Override method) 로그인 사용자 정보 조회
	 * @remark - 오버라이드 함수의 상세 설명
	 * @see com.nbdf.pes.pe.pelh.service.PELH00010Service#selectUserInfoList(java.util.Map)
	 */
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

		List<Map<String, Object>> list = generalDao.selectList(NAMESAPCE + ".selectUserInfoList", dto);

		logger.debug("list" + list);

		return list;
	}

	/**
	 *
	 * @fn
	 * @brief (Override method) 로그인 사용자 정보 조회
	 * @remark - 오버라이드 함수의 상세 설명
	 * @see com.nbdf.pes.pe.pelh.service.PELH00010Service#selectUserInfoSSOList(java.util.Map)
	 */
	@Override
	public List<Map<String, Object>> selectUserInfoSSOList(String sessionUserId, Map<String, Object> dto)
			throws Exception {
		logger.debug("{}", dto);

		if (!StringUtils.isEmpty(sessionUserId)) {
			logger.debug(" == 로그인 상태로 REDIRECT됨 ==");
			dto.put("SESSION_USER_ID", sessionUserId);
		}

		List<Map<String, Object>> list = generalDao.selectList(NAMESAPCE + ".selectUserInfoSSOList", dto);

		logger.debug("list" + list);

		return list;
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
//		sessionMap.put("USER_ACNT", dto.get(ContextConstant.SESSION_USER_ACNT));

		return generalDao.addUpdate(NAMESAPCE + ".mergeSessionInfo", sessionMap);
	}

	/**
	 *
	 * @fn
	 * @brief (Override method) 세션테이블을 조회하여 동일한 사용자가 접속중인지 체크
	 * @remark - {"Y/N","기존사용자의 접속IP"}
	 * @see com.nbdf.pes.pe.pelh.service.PELH00010Service#selectSessionInfo(java.util.Map)
	 */
	@Override
	public String[] selectIsExistDuplicatedSession(Map<String, Object> dto) throws Exception {
		String[] str = { "N", "" };
		// [참고]dto : pes_portal_user 정보 + CNCT_IP(현재 접속한 IP)

		Map<String, String> sessionInfoMap = generalDao.selectOne(NAMESAPCE + ".selectSessionInfo", dto);
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
	 * @brief (Override method) 로그인 진행
	 * @remark - 로그인 진행하여 가능한지 여부등의 코드정보를 담아 Model로 리턴
	 * @see com.nbdf.pes.pe.pelh.service.PELH00010Service#checkLogin(org.springframework.ui.Model,
	 *      java.util.Map, boolean, javax.servlet.http.HttpServletRequest,
	 *      javax.servlet.http.HttpServletResponse)
	 */
	@Override
	public Model saveCheckLogin(Model model, Map<String, Object> userLoginMap, boolean isPortal,
			HttpServletRequest request, HttpServletResponse response) throws Exception {

		String reqLoginId = ObjectUtil.toStrTrim(userLoginMap.get("USER_ACNT"));
		String reqLoginPwOrg = ObjectUtil.toStrTrim(userLoginMap.get("USER_PWD_ORG"));
		String reqLoginPw = ObjectUtil.toStrTrim(userLoginMap.get("USER_PWD"));
        String kickBeforeUser = ObjectUtil.toStrTrim(userLoginMap.get("kickBeforeUser")); // 기존
																							// 사용자의
																							// 접속을
																							// 종료하고
																							// 로그인
																							// 할
																							// 여부

		logger.debug("\n\n\n envServer : " + envServer);

		SessionManager sessionManager = SessionManager.getInstance(envServer);
		Map<String, String> sessionInfo = sessionManager.getSessionInfo(request);
		String sessionUserId = ObjectUtil.toStrTrim(sessionInfo.get(ContextConstant.SESSION_USER_ID));
		logger.debug("sessionUserId-->"+sessionUserId);
		List<Map<String, Object>> userMapList = selectUserInfoList(sessionUserId, userLoginMap);
		logger.debug("userMapList-->"+userMapList);
		
		if (userMapList == null || userMapList.size() < 1) { // 사용자 정보 불일치
			model.addAttribute("code", "IMPELH0001");

			// 로그인 실패 카운트 증가
			int result = generalDao.update(NAMESAPCE + ".updatePwdErrCnt", userLoginMap);

			int pwdErrCnt = NumberUtils.toInt(ObjectUtil.toStrTrim(generalDao.selectOne(NAMESAPCE + ".selectPwdErrCnt", userLoginMap)), 0);
			logger.debug("login fail count : " + pwdErrCnt);

			if (result > 0) {// 수정이 이루어 졌다.
				if (pwdErrCnt < 5) {
					model.addAttribute("msg",
							String.format("해당 사용자가 존재하지 않거나, 로그인 정보가 일치하지 않습니다. [로그인 실패 : %d 회]", pwdErrCnt));
				} else {
					Map<String, Object> map = new HashMap<String, Object>();
					map.put("USE_YN", "N");
					map.put("USER_ACNT", reqLoginId);
					model.addAttribute("msg", "비밀번호 5회 이상 오류로, 로그인이 차단되었습니다.\n1시간 후에 재시도 하시기 바랍니다.");
				}
			} else {
				model.addAttribute("msg", "해당 사용자가 존재하지 않거나, 로그인 정보가 일치하지 않습니다.");
			}

			return model;

		} else {
			// 사용자 있음
			if (userMapList.size() > 1) { // 동일 사용자가 2명이상일 경우
				model.addAttribute("code", "IMPELH0002");
				model.addAttribute("msg", "");

				model.addAttribute("loginId", reqLoginId);
				model.addAttribute("loginPw", reqLoginPw);

				return model;

			} else { // 1명일 경우
				Map<String, Object> userMap = userMapList.get(0);

				String 		serverMode = BizUtil.getServerMode();
				logger.debug("bonsaYn serverMode-->"+serverMode);
				if("dev".equalsIgnoreCase(serverMode) || "local".equalsIgnoreCase(serverMode)){
					logger.debug("dev... local " + serverMode);
				}else{	
					// 본사직원일 경우 로긴화면 로그인 불가 (sso로그인 만 허용)
					String bonsaYn = ObjectUtil.toStrTrim(userMap.get("BONSA_YN"));
					logger.debug("*************** bonsaYn : " + bonsaYn);
					if ("Y".equalsIgnoreCase(bonsaYn)) {
						logger.debug("본사 사용자 ");
						model.addAttribute("code", "IMPELH0009");
						model.addAttribute("msg", "본사직원입니다. 하이페리온을 통하여 로그인 하시기 바랍니다");
	
						return model;
					}
				}
				// 사용중지 상태인지 체크
				String useYn = ObjectUtil.toStrTrim(userMap.get("USE_YN"));
				logger.debug("*************** useYn : " + useYn);
				if ("N".equalsIgnoreCase(useYn)) {
					logger.debug("사용중지 사용자");
					model.addAttribute("code", "IMPELH0003");
					model.addAttribute("msg", "현재 계정이 사용중지 상태입니다. 관리자에게 문의해주시기 바랍니다");

					return model;
				}

				// 비밀번호 오류 횟수 체크
				int pwdErrCnt = NumberUtils.toInt(ObjectUtil.toStrTrim(userMap.get("PWD_ERR_CNT")));
				int elapsedHour = NumberUtils.toInt(ObjectUtil.toStrTrim(userMap.get("ELAPSED_HOUR")));
				if (pwdErrCnt > 5 && elapsedHour < 1) {
					logger.debug(String.format("비밀번호 오류 횟수 : %d 회", pwdErrCnt));
					model.addAttribute("code", "IMPELH0004");
					model.addAttribute("msg", "비밀번호 5회 오류로, 로그인이 차단되었습니다. 1시간 후에 재시도 하시기 바랍니다.");

					return model;
				}

				// 90일간 로그인 이력없다면 사용중지
				String lastLoginDate = ObjectUtil.toStrTrim(userMap.get("LAST_LGN_DTM"));
				if (!StringUtil.isEmpty(lastLoginDate)) { // 로그인 이력이 있다.
					long lastUpdateDateDiff = BizUtil.calcPassWordChangDay(lastLoginDate);
					if (lastUpdateDateDiff > 90) { // 최종수정일이 90일이 넘은 사용자를 대상으로
													// 조회
						model.addAttribute("code", "IMPELH0005");
						model.addAttribute("msg", "90일 이상 로그인을 하지 않아, 로그인이 차단되었습니다. 관리자에게 문의해주시기 바랍니다");

						return model;
					}
				}

				// 비밀번호 변경일 체크
				String pwdChangeDate = ObjectUtil.toStrTrim(userMap.get("PWD_CHANGE_DATE")); // 변경일8자리
				if (pwdChangeDate != null && pwdChangeDate.length() == 8) {
					long diffDays = BizUtil.calcPassWordChangDay(pwdChangeDate);
					logger.debug(String.format("비밀번호 변경후 지난기간 : %d 일", diffDays));

					if (diffDays > 90) { // 변경일 90일 초과
						model.addAttribute("code", "IMPELH0006");
						model.addAttribute("msg", "비밀번호 변경일 90일이 경과하였습니다. 비밀번호 재설정을 해주시기 바랍니다");
						model.addAttribute("loginId", reqLoginId);
						model.addAttribute("userId", ObjectUtil.toStrTrim(userMap.get("USER_ID")));
						return model;
					}
				}

				String userId = ObjectUtil.toStrTrim(userMap.get("USER_ID")); // 사용자 ID

				// 사용자가 로그인이 가능한지 체크(기존 로그인자 유무 체크)
				String ip = BizUtil.getClientIp(request);
				//jsh 201711
				if (duplicateLoginCheck) { // 중복로그인을 체크한다면
					userMap.put("CNCT_IP", ip); // 조회된 사용자에 ip추가하여 조회(동일 사용자 유무
												// 체크)
					String[] isExistDuplicatedSession = selectIsExistDuplicatedSession(userMap);
					if (!"Y".equals(kickBeforeUser)) { // 기존 사용자를 로그오프시킬지 여부
						if ("Y".equals(isExistDuplicatedSession[0])) {
							model.addAttribute("code", "IMPELH0007");
							model.addAttribute("msg",
									String.format("IP : %s 에서\n 이미 동일한 사용자가 접속중입니다. 기존 사용자를 로그오프한 뒤, 로그인을 진행하시겠습니까?",
											isExistDuplicatedSession[1]));
							model.addAttribute("loginId", reqLoginId);
							model.addAttribute("loginPw", reqLoginPwOrg);

							return model;
						}
					}
				}
				
				// 관리자가 비밀번호 초기화 한경우 변경화면 이동
				String userPwd = ObjectUtil.toStrTrim(userMap.get("USER_PWD")); // 포털
																				// 사용자
																				// ID
				if (ObjectUtil.encodeSHA256("1111").equals(userPwd)) {
					model.addAttribute("code", "IMPELH0008");
					model.addAttribute("msg", "비밀번호가 초기화된 상태입니다. \n비밀번호를 재설정해주시기 바랍니다.");
					model.addAttribute("userId", ObjectUtil.toStrTrim(userMap.get("USER_ID")));
					model.addAttribute("loginId", ObjectUtil.toStrTrim(userMap.get("USER_ACNT")));

					return model;
				}
				logger.debug("sessionInfo.get(ContextConstant.SESSION_USER_ID)-->"+sessionInfo.get(ContextConstant.SESSION_USER_ID));
				// 세션이 비어있다면 다음 진행
				if (StringUtils.isEmpty(sessionInfo.get(ContextConstant.SESSION_USER_ID))) {
					logger.debug("session is empty");
					// 기존 남아있는 잔재 제거
					sessionManager.removeCookie(request, response);

					// 1-1 사용자의 업무 목록 조회
					List<Map<String, String>> userJobList = null;	//generalDao.selectList(NAMESAPCE + ".selectUserJobList",	userMap);

					// 1-1 사용자의 권한 목록 조회
					List<Map<String, Object>> userAuthList = generalDao.selectList(NAMESAPCE + ".selectUserAuthList", userMap);

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

					int lgnLogResult = generalDao.insert(NAMESAPCE + ".insertLgnLog", loginLogMap);
					long LGN_LOG_ID = NumberUtils.toLong(ObjectUtil.toStrTrim(loginLogMap.get("LGN_LOG_ID")));
					logger.debug("lgnLogResult : " + lgnLogResult + " / LGN_LOG_ID : " + LGN_LOG_ID);
					loginLogMap.put("LGN_LOG_ID", LGN_LOG_ID);

					// 1-5. 로그인후 세션정보 세팅
					logger.debug("로그인후 세션정보 세팅....");
					logger.debug("userMap-->"+userMap);
					logger.debug("userJobList-->"+userJobList);
					logger.debug("userAuthList-->"+userAuthList);
					logger.debug("loginLogMap-->"+loginLogMap);
					logger.debug("isPortal-->"+isPortal);
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
					int pwdErrCntResult = generalDao.update(NAMESAPCE + ".updatePwdErrCntInit", loginLogMap);
					logger.debug("updatePwdErrCntInit result : " + pwdErrCntResult);

					// 1-8. 로그인 성공 후 로그인 이력테이블 정리(로그아웃 안한 상태로 브라우저의 쿠키를 정리한 경우
					// 이력테이블에 로그아웃으로 갱신)
					int updateLgnLogint = generalDao.update(NAMESAPCE + ".updateLgnLogInit", sMap);
					logger.debug("updateLgnLogInit result : " + updateLgnLogint);

				}
			}
		}

		return model;
	}

	/**
	 *
	 * @fn
	 * @brief (Override method) 로그인 진행
	 * @remark - 로그인 진행하여 가능한지 여부등의 코드정보를 담아 Model로 리턴
	 * @see com.nbdf.pes.pe.pelh.service.PELH00010Service#checkLogin(org.springframework.ui.Model,
	 *      java.util.Map, boolean, javax.servlet.http.HttpServletRequest,
	 *      javax.servlet.http.HttpServletResponse)
	 */
	@Override
	public Model saveCheckLoginSSO(Model model, Map<String, Object> userLoginMap, boolean isPortal,
			HttpServletRequest request, HttpServletResponse response) throws Exception {

		String reqLoginId = ObjectUtil.toStrTrim(userLoginMap.get("USER_ACNT"));
		String kickBeforeUser = ObjectUtil.toStrTrim(userLoginMap.get("kickBeforeUser")); // 기존
																							// 사용자의
																							// 접속을
																							// 종료하고
																							// 로그인
																							// 할
																							// 여부
		logger.debug("\n\n\n envServer : " + envServer);

		SessionManager sessionManager = SessionManager.getInstance(envServer);
		Map<String, String> sessionInfo = sessionManager.getSessionInfo(request);
		String sessionUserId = ObjectUtil.toStrTrim(sessionInfo.get(ContextConstant.SESSION_USER_ID));
		logger.debug("sessionUserId-->"+sessionUserId);
		List<Map<String, Object>> userMapList = selectUserInfoSSOList(sessionUserId, userLoginMap);
		logger.debug("userMapList-->"+userMapList);

		if (userMapList == null || userMapList.size() < 1) { // 사용자 정보 불일치
/*
			model.addAttribute("code", "IMPELH0001");

			// 로그인 실패 카운트 증가
			int result = generalDao.update(NAMESAPCE + ".updatePwdErrCnt", userLoginMap);
			// int pwdErrCnt =
			// NumberUtils.toInt(ObjectUtil.toStrTrim(userLoginMap.get("PWD_ERR_CNT")));

			int pwdErrCnt = NumberUtils
					.toInt(ObjectUtil.toStrTrim(generalDao.selectOne(NAMESAPCE + ".selectPwdErrCnt", userLoginMap)), 0);
			logger.debug("login fail count : " + pwdErrCnt);

			if (result > 0) {// 수정이 이루어 졌다.
				if (pwdErrCnt < 5) {
					model.addAttribute("msg",
							String.format("해당 사용자가 존재하지 않거나, 로그인 정보가 일치하지 않습니다. [로그인 실패 : %d 회]", pwdErrCnt));
				} else {
					Map<String, Object> map = new HashMap<String, Object>();
					map.put("USE_YN", "N");
					map.put("USER_ACNT", reqLoginId);
					// generalDao.update(NAMESAPCE + ".updatePortalUserUseYN" ,
					// map); //사용여부 수정 --> 사용중지 / 2015.8.7 수정 패스워드 오류횟수 초과는 사용중지
					// 시키지 않는다.
					model.addAttribute("msg", "비밀번호 5회 이상 오류로, 로그인이 차단되었습니다.\n관리자에게 문의해주시기 바랍니다");
				}
			} else {
				model.addAttribute("msg", "해당 사용자가 존재하지 않거나, 로그인 정보가 일치하지 않습니다.");
			}
*/
			model.addAttribute("code", "IMPELH0001");
			model.addAttribute("msg", "해당 사용자가 존재하지 않습니다.");
			return model;

		} else {
			// 사용자 있음
			if (userMapList.size() > 1) { // 동일 사용자가 2명이상일 경우
				model.addAttribute("code", "IMPELH0002");
				model.addAttribute("msg", "");
				// model.addAttribute("userMapList", userMapList);

				model.addAttribute("loginId", reqLoginId);

				return model;

			} else { // 1명일 경우
				Map<String, Object> userMap = userMapList.get(0);

				// 사용중지 상태인지 체크
				String useYn = ObjectUtil.toStrTrim(userMap.get("USE_YN"));
				logger.debug("*************** useYn : " + useYn);
				if ("N".equalsIgnoreCase(useYn)) {
					logger.debug("사용중지 사용자");
					model.addAttribute("code", "IMPELH0003");
					model.addAttribute("msg", "현재 계정이 사용중지 상태입니다. 관리자에게 문의해주시기 바랍니다");

					return model;
				}
/*
				// 비밀번호 오류 횟수 체크
				int pwdErrCnt = NumberUtils.toInt(ObjectUtil.toStrTrim(userMap.get("PWD_ERR_CNT")));
				if (pwdErrCnt > 5) {
					logger.debug(String.format("비밀번호 오류 횟수 : %d 회", pwdErrCnt));
					model.addAttribute("code", "IMPELH0004");
					model.addAttribute("msg", "비밀번호 5회 오류로, 로그인이 차단되었습니다.\n관리자에게 문의해주시기 바랍니다.");

					return model;
				}
*/

				String userId = ObjectUtil.toStrTrim(userMap.get("USER_ID")); // 사용자 ID

				// 사용자가 로그인이 가능한지 체크(기존 로그인자 유무 체크)
				String ip = BizUtil.getClientIp(request);
				//jsh 201711
				/*
				if (duplicateLoginCheck) { // 중복로그인을 체크한다면
					userMap.put("CNCT_IP", ip); // 조회된 사용자에 ip추가하여 조회(동일 사용자 유무
												// 체크)
					String[] isExistDuplicatedSession = selectIsExistDuplicatedSession(userMap);
					if (!"Y".equals(kickBeforeUser)) { // 기존 사용자를 로그오프시킬지 여부
						if ("Y".equals(isExistDuplicatedSession[0])) {
							model.addAttribute("code", "IMPELH0007");
							model.addAttribute("msg",
									String.format("IP : %s 에서\n 이미 동일한 사용자가 접속중입니다. 기존 사용자를 로그오프한 뒤, 로그인을 진행하시겠습니까?",
											isExistDuplicatedSession[1]));
							model.addAttribute("loginId", reqLoginId);

							return model;
						}
					}
				}
				*/
				logger.debug("sessionInfo.get(ContextConstant.SESSION_USER_ID)-->"+sessionInfo.get(ContextConstant.SESSION_USER_ID));
				// 세션이 비어있다면 다음 진행
				if (StringUtils.isEmpty(sessionInfo.get(ContextConstant.SESSION_USER_ID))) {
					logger.debug("session is empty");
					// 기존 남아있는 잔재 제거
					sessionManager.removeCookie(request, response);

					// 1-1 사용자의 업무 목록 조회
					List<Map<String, String>> userJobList = null;	//generalDao.selectList(NAMESAPCE + ".selectUserJobList",	userMap);

					// 1-1 사용자의 권한 목록 조회
					List<Map<String, Object>> userAuthList = generalDao.selectList(NAMESAPCE + ".selectUserAuthList", userMap);

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
					loginLogMap.put("LGN_GUBUN", "G"); //그룹웨어
					int lgnLogResult = generalDao.insert(NAMESAPCE + ".insertLgnLog", loginLogMap);
					long LGN_LOG_ID = NumberUtils.toLong(ObjectUtil.toStrTrim(loginLogMap.get("LGN_LOG_ID")));
					logger.debug("lgnLogResult : " + lgnLogResult + " / LGN_LOG_ID : " + LGN_LOG_ID);
					loginLogMap.put("LGN_LOG_ID", LGN_LOG_ID);

					// 1-5. 로그인후 세션정보 세팅
					logger.debug("로그인후 세션정보 세팅....");
					logger.debug("userMap-->"+userMap);
					logger.debug("loginLogMap-->"+loginLogMap);
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
					/*
					int pwdErrCntResult = generalDao.update(NAMESAPCE + ".updatePwdErrCntInit", loginLogMap);
					logger.debug("updatePwdErrCntInit result : " + pwdErrCntResult);
					*/
					
					// 1-8. 로그인 성공 후 로그인 이력테이블 정리(로그아웃 안한 상태로 브라우저의 쿠키를 정리한 경우
					// 이력테이블에 로그아웃으로 갱신)
					int updateLgnLogint = generalDao.update(NAMESAPCE + ".updateLgnLogInit", sMap);
					logger.debug("updateLgnLogInit result : " + updateLgnLogint);

				}
			}
		}

		return model;
	}
	
	/**
	 *
	 * @fn
	 * @brief (Override method) 회사변경으로 인한 session 재생성
	 * @remark - 로그인 진행하여 가능한지 여부등의 코드정보를 담아 Model로 리턴
	 * @see com.nbdf.pes.pe.pelh.service.PELH00010Service#reLogin(org.springframework.ui.Model,
	 *      java.util.Map, boolean, javax.servlet.http.HttpServletRequest,
	 *      javax.servlet.http.HttpServletResponse)
	 */
	@Override
	public Model saveReLogin(Model model, UiMapDto dto, HttpServletRequest request, HttpServletResponse response) throws Exception {
		
        Map<String, Object> userLoginMap = getParametersMap(dto);
        
        userLoginMap.put("USER_ACNT", SessionUtil.getSessionValue("USER_ACNT"));
        userLoginMap.put("SESSION_COMPANY_CD", userLoginMap.get("COMPANY_CD"));

		logger.debug("\n\n\n envServer : " + envServer);

		SessionManager sessionManager = SessionManager.getInstance(envServer);
		Map<String, String> sessionInfo = sessionManager.getSessionInfo(request);
		String sessionUserId = ObjectUtil.toStrTrim(sessionInfo.get(ContextConstant.SESSION_USER_ID));
		List<Map<String, Object>> userMapList = selectUserInfoList(sessionUserId, userLoginMap);
		logger.debug("userMapList-->"+userMapList);

		Map<String, Object> userMap = userMapList.get(0);
		String userId = ObjectUtil.toStrTrim(userMap.get("USER_ID")); // 사용자 ID
		logger.debug("userMap-->"+userMap);


		// 사용자가 로그인이 가능한지 체크(기존 로그인자 유무 체크)
		String ip = BizUtil.getClientIp(request);

		// 기존 남아있는 잔재 제거
		sessionManager.removeCookie(request, response);

		// 1-1 사용자의 업무 목록 조회
		List<Map<String, String>> userJobList = null;	//generalDao.selectList(NAMESAPCE + ".selectUserJobList",	userMap);
		logger.debug("userJobList-->"+userJobList);

		// 1-1 사용자의 권한 목록 조회
		List<Map<String, Object>> userAuthList = generalDao.selectList(NAMESAPCE + ".selectUserAuthList", userMap);

		// 1-2 (로그인이력) 클라이언트 접속 브라우져 조회
		String browser = request.getHeader("User-Agent");

		// 1-3 로그인 로그 저장
		Map<String, Object> loginLogMap = new HashMap<String, Object>(); // 로그인
																			// 이력정보
																			// 맵
		loginLogMap.put("USER_ID", userId);
		loginLogMap.put("USER_ACNT", SessionUtil.getSessionValue("USER_ACNT"));
		loginLogMap.put("CNCT_IP", ip);
		loginLogMap.put("LOUT_DTM", "");
		loginLogMap.put("CNCT_BRWSR", browser);
		loginLogMap.put("LGN_GUBUN", "B"); 

		int lgnLogResult = generalDao.insert(NAMESAPCE + ".insertLgnLog", loginLogMap);
		long LGN_LOG_ID = NumberUtils.toLong(ObjectUtil.toStrTrim(loginLogMap.get("LGN_LOG_ID")));
		logger.debug("lgnLogResult : " + lgnLogResult + " / LGN_LOG_ID : " + LGN_LOG_ID);
		loginLogMap.put("LGN_LOG_ID", LGN_LOG_ID);

		// 1-5. 로그인후 세션정보 세팅
		logger.debug("로그인후 세션정보 세팅....");
		logger.debug("userMap-->"+userMap);
		logger.debug("userJobList-->"+userJobList);
		logger.debug("userAuthList-->"+userAuthList);
		logger.debug("loginLogMap-->"+loginLogMap);
		Object[] sessionMapNew = sessionManager.makeSessionInfoMapNew(userMap, userJobList, userAuthList,
				loginLogMap, request, true);
		logger.debug("sessionMapNew-->"+sessionMapNew);
		Map<String, Object> sMap = (Map<String, Object>) sessionMapNew[0]; // 세션맵에
																			// 들어갈
		logger.debug("sMap-->"+sMap);
																			// 정보
		Map<String, String> cMap = (Map<String, String>) sessionMapNew[1]; // 쿠키에
																			// 들어갈
																			// 정보(gv_loginInfo=sessionMap조회key)
		logger.debug("cMap-->"+cMap);
		sessionManager.setCookieSessionInfo(request, response, cMap);
		SessionUtil.setSessionValue("COMPANY_CD", userLoginMap.get("COMPANY_CD")); // 회사코드
		logger.debug("setCookieSessionInfo..."+SessionUtil.getSessionValue("COMPANY_CD"));
		return model;
	}

	/**
	 *
	 * @fn
	 * @brief (Override method) 로그아웃시 로그아웃시간 업데이트
	 * @remark - 오버라이드 함수의 상세 설명
	 * @see com.nbdf.pes.pe.pelh.service.PELH00010Service#updateLgnLog(java.util.Map)
	 */
	@Override
	public int updateLgnLog(Map<String, String> dto) throws Exception {
		logger.debug("{}", dto);
		return generalDao.update(NAMESAPCE + ".updateLgnLog", dto);
	}

	/**
	 *
	 * @fn
	 * @brief (Override method) 로그아웃 세션정보 수정
	 * @remark - 로그아웃 정보를 CMD_SESSIONS에 UPDATE처리한다.
	 * @see com.nbdf.pes.pe.pelh.service.PELH00010Service#updateSessionLogout(java.util.Map)
	 */
	@Override
	public int updateSessionLogout(Map<String, String> sessionInfo) throws Exception {
		logger.debug("{}", sessionInfo);
		return generalDao.update(NAMESAPCE + ".updateSessionLogout", sessionInfo);
	}

	/**
	 *
	 * @fn
	 * @brief (Override method) 비밀번호 변경
	 * @remark - 오버라이드 함수의 상세 설명
	 * @see com.nbdf.pes.pe.pelh.service.PELH00010Service#updateUserPw(java.util.Map)
	 */
	@Override
	public int updateChangeUserPw(Map<String, Object> dto) throws Exception {
		logger.debug("{}", dto);
		// 1. 이전 비밀번호 일치여부 검사
		List<Map<String, Object>> list = generalDao.selectList(NAMESAPCE + ".selectUserInfoList", dto);
		if (list == null || list.size() == 0) { // 이전비밀번호 불일치
			logger.debug("비밀번호 변경 : 이전비밀번호 불일치");
			return -1;
		}
		
		int existCnt = generalDao.selectOne(NAMESAPCE + ".selectExistPwd", dto);
		if(existCnt > 0){
			logger.debug("이전에 사용하던 비밀번호와 동일 ");
			return -3;
		}
		
		// 2. 비밀번호 유효한지 재검증
		/*
		 * if(비밀번호 정규식처리){ logger.debug("비밀번호 변경 : 유효성 검증 실패"); return -2; }
		 */

		// PW암호화적용 예정
		String encReqLoginPw = ObjectUtil.toStrTrim(dto.get("NEW_USER_PWD"));
		dto.put("NEW_USER_PWD", encReqLoginPw);
		
		generalDao.update(NAMESAPCE + ".insertCmdPwdAltHst", dto);	//JSH 20181012
		// 3. 비밀번호 수정
		return generalDao.update(NAMESAPCE + ".updateChangeUserPw", dto);
	}

	/**
	 *
	 * @fn
	 * @brief (Override method) 비밀번호 초기화 변경
	 * @remark - 관리자가 초기화한 비밀번호를 변경한다.
	 * @see com.nbdf.pes.pe.pelh.service.PELH00010Service#updateResetUserPw(java.util.Map)
	 */
	public int updateResetUserPw(Map<String, Object> dto) throws Exception {
		logger.debug("{}", dto);
		// 1. 사용자 정보 확인
		List<Map<String, Object>> userMapList = generalDao.selectList(NAMESAPCE + ".selectUserInfoList", dto);
		if (userMapList == null || userMapList.size() == 0) {
			return 0; // SESSION_USER_ID들어가기 때문에 발생하면 안됨
		}

		Map<String, Object> userMap = userMapList.get(0);
		String userNm = ObjectUtil.toStrTrim(userMap.get("USER_NM"));
		String userAcnt = ObjectUtil.toStrTrim(userMap.get("USER_ACNT"));

		logger.debug("USER_NM : " + userNm);
		logger.debug("USER_ACNT : " + userAcnt);
		if (!userNm.equals(ObjectUtil.toStrTrim(dto.get("USER_NM")))
				|| !userAcnt.equals(ObjectUtil.toStrTrim(dto.get("USER_ACNT")))) {
			return -1;
		}

		// 2. 비밀번호 유효한지 재검증
		/*
		 * if(비밀번호 정규식처리){ logger.debug("비밀번호 변경 : 유효성 검증 실패"); return -2; }
		 */

		// PW암호화적용 20150828
		String encReqLoginPw = ObjectUtil.toStrTrim(dto.get("NEW_USER_PWD"));
		dto.put("NEW_USER_PWD", encReqLoginPw);

		// 3. 비밀번호 수정
		return generalDao.update(NAMESAPCE + ".updateChangeUserPw", dto);
	}

	@Override
	public void nexaLogout(UiMapDto dto) throws Exception {
		int result = ContextConstant.SESSION_STATUS_LOGIN_NEED_DIE;

		putDataSetMap(dto, result);

	}


}
