package com.nbdf.commons.interceptor;

public interface ContextConstant {
    static final String JOB_PART_LOGIN_URI  = "/smh/login.scr";   //업무단 로그인 페이지 URI
    
    //넥사크로 호출시 응답코드 정의
    static final int SESSION_STATUS_OK = 9000;
    static final int SESSION_STATUS_LOGIN_NEED_ALIVE = 9001;
    static final int SESSION_STATUS_LOGIN_NEED_DIE = 9002;
    static final int SESSION_STATUS_DUPLOGIN_ALIVE = 9003;
    static final int SESSION_STATUS_DUPLOGIN_DIE = 9004;
    static final int SESSION_STATUS_LONGTIME_ALIVE = 9005;
    static final int SESSION_STATUS_LONGTIME_DIE = 9006;

    ///////////////////////////////////////////////////////////////////////////
    //Biz세션관련
    ///////////////////////////////////////////////////////////////////////////
    //SESSION등록 정보 관련(2015.03.27 장문규 추가)
    static final String SESSION_LOGIN_INFO                 = "gv_loginInfo";         //쿠키로 생성할 유일한 key값

    static final String SESSION_SSO_USER_ID                 = "gv_ssoUserId";         //SSO_ID
    static final String SESSION_ID                     		= "gv_id";           // ID
    static final String SESSION_USER_ID                     = "gv_userId";           //사용자 ID
    static final String SESSION_LGN_ID                          = "gv_loginId";                 //로그인 이력 ID
    static final String SESSION_USER_ACNT                    = "gv_userAcnt";              //사용자 계정(로그인ID)   TT
    static final String SESSION_JIKWI_CD                       = "gv_jikwiCd";              //직위코드   TT
    static final String SESSION_JIKWI_NM                       = "gv_jikwiNm";              //직위명   TT
    static final String SESSION_CLPS_CD                        = "gv_glpsCd";              //직급코드   TT
    static final String SESSION_CLPS_NM                        = "gv_glpsNm";              //직급명   TT
    static final String SESSION_CMPN_PHN_NO                 = "gv_cmpnPhnNo";              //사내전화
    static final String SESSION_MBPH_NO                        = "gv_mbphNo";              //휴대전화   TT

    static final String SESSION_USER_NM                        = "gv_userNm";              //사용자 이름
    static final String SESSION_EMAIL                            = "gv_emailAddr";               //사용자 이메일
    static final String SESSION_IP_ADDR                          = "gv_ipAddr";                         //접속 IP
    static final String SESSION_BROWSER                      = "gv_browser";               //browser
    static final String SESSION_LGN_TM                           = "gv_loginBeginTm";               //로그인 일시

    static final String SESSION_GUID                                = "gv_sessionGuId";               //세션값(JSESSION ID)
    static final String SESSION_AUTH_TOKEN_ID                 = "gv_authTokenId";               //인증토큰
    static final String SESSION_SSO_TOKEN_ID                   = "gv_ssoTokenId";               //SSO ID
    static final String SESSION_JOB                                  = "gv_job";               //예비필드(업무에서 필요시 사용)

    static final String SESSION_DEPT_CD                      = "gv_deptCd";               //사용자소속코드
    static final String SESSION_DEPT_NM                      = "gv_deptNm";               //사용자소속코드

    static final String SESSION_SITETYPE                      = "gv_siteType";               //사용자 SITE
    static final String SESSION_LANGUAGETYPE                      = "gv_languageType";               //사용자 LANGUAGE
    static final String SESSION_ENTERPRISEID                      = "gv_enterpriseId";               //사용자 회사
    static final String SESSION_AUTH_IDS                      = "gv_jobAuthIds";               //권한id
    static final String SESSION_AUTH_NMS                      = "gv_jobAuthNms";               //권한명
    static final String SESSION_PDA_TYPE                      = "gv_pdaWorkType";               //권한명
    static final String SESSION_PERSON_ID                      = "gv_personId";               //gv_personId
    static final String SESSION_ASSIGNMENT_ID                      = "gv_assignmentId";               //gv_assignmentId
    
}