var pForm = nexacro.Form.prototype;
/**********************************************************************************
 *  공통  상수 정의
 **********************************************************************************/
 
/* 상수 */
ct_txtPrefixFr = "{";
ct_txtPrefixTo = "}";
ct_MsgTitle = "알림";

ct_menuIdCol = "MENU_CD"; //아이디
ct_menuNameCol = "MENU_NM"; //명칭
ct_menuLvlCol = "MENU_LEVEL"; //레벨
ct_menuUrlCol = "MENU_LINK"; //페이지경로
ct_menuNaviCol = "MENU_NAVI"; //페이지경로
ct_menuAuthCol = "MENU_AUTH"; //메뉴에 대한 권한
ct_menuGidCol = "MENU_GRP"; 
ct_menuUseYnCol = "USE_YN";//메뉴 사용 유무
ct_menuRmCol = "MENU_RM";//메뉴 파라메터
ct_menuPopupYnCol = "POPUP_YN";//메뉴 사용 유무


/* 열린메뉴정보 칼럼 상수*/
ct_winIdCol = "WIN_ID"; //윈도우(프레임)아이디(열린 메뉴의 윈도우 아이디)
ct_titleCol = "TITLE"; //타이틀

/* 사용자정보 칼럼 상수*/
ct_userIdCol = "USER_NO"; //아이디
ct_userNameCol = "USER_NAME"; //이름

/* 도메인정보 칼럼 상수*/
ct_domainIdCol = "ID"; //도메인 아이디
ct_domainTextCol = "TEXT"; //Text
ct_domainLocale = "LOCALE";
//ct_domainGp = "MSG_GP"; //Text

/* 페이징 관련 컬럼 상수 */
ct_viewPage = "VIEWPAGE";
ct_rowCount = "ROWCOUNT";
ct_totalCount = "TOTALCOUNT";

/* 도메인 관련 상수 */
ct_localeKo = "KO";
ct_localeEn = "EN";

/* 공통처리에 사용할 컨트롤의 기능 플래그 설정 속성*/
ct_FlagProp = "userdata";

/* 공통처리에 사용할 기능플래그명 상수*/
/*20150420 사용안함. UI공통 주석처리 - 삭제 예정*/
// ct_ActionFlag = "A";
// ct_ResizeFlag = "R";
// ct_OriginPFlag = "ORP";

/* 공통처리에 사용할 컨트롤들의 기능 플래그(권한처리 시 사용)*/
ct_insertAct = "I"; //데이터 추가
ct_updateAct = "U"; //데이터 수정
ct_deleteAct = "D"; //데이터 삭제
ct_commitAct = "T"; //데이터 저장 (서버에 저장처리)
ct_outputAct = "P"; //데이터 프린트 또는 PC(파일)로 저장

// 그리드 클립보드 카피용 구분자
ct_separator = "	";

//아이디 저장 상수
ct_cookieSaveId = "CP_SAVEID";
ct_cookieSaveIdCheck = "CP_SAVEID_CHECKED";

ct_sheet = "Sheet";
ct_exportTimerId = 293322;
ct_importTimerId = 293221;
ct_fileStatus = "fileStatusLayer";

ct_first_row_empty = "";
ct_first_row_all = "= All =";
ct_first_row_select = "= Select =";

/* 그리드트리 강조색상지정 상수 */
// ct_treeFirst = "#dce985"; //트리 선택(selected)최상위레벨	//고객사요구에 따라 미사용처리
// ct_treeLast = "#faffcb"; //트리 선택(selected)최하위레벨	//ct_treeSelected로 변수명 변경
ct_treeSelected = "#faffcb"; //트리 선택(selected)된 row
ct_treeMouseover = "#d0f8e7"; //트리 마우스오버(mouseover)
ct_grdHighlight = "#ffdce6"; //데이터 특정 셀 또는 row강조
ct_grdSelected = "#fbefaf"; //데이터 선택(selected)된 row
ct_grdMouseover = "#e7f2f8"; //데이터 row 마우스오버(mouseover)
ct_grdSubtot = "#f7f7f7"; //소계row (헤더색상과 동일)
ct_grdSum = "#bcdaf6"; //합계row

ct_sessionChecked = false;
ct_lastTransTime = null;

ct_bigDataLimitCnt = 60000;	//대용량 엑셀다운로드 제한건수
//-------------------------------------------------------
// 프로젝트 참조 URL 및 Service : GET
//-------------------------------------------------------


//-------------------------------------------------------
// 프로젝트의 환경 설정 함수 : GET
//-------------------------------------------------------

//사용자 정보 
pForm.gf_getUserInfo = function (sColId)
{
	return nexacro.getApplication().gds_userInfo.getColumn(0, sColId);
}

//사용자,SSO_ID
pForm.gf_getId = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_id");
}

//사용자,SSO_ID
pForm.gf_getUserId = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_userId");
}
//사용자 계정(로그인ID) 
pForm.gf_getUserAcnt = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_userAcnt");
}
//로그인이력ID
pForm.gf_getLoginId = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_loginId");
}
//사용자 직위코드
pForm.gf_getJikwiCd = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_jikwiCd");
}
//사용자 직위명
pForm.gf_getJikwiNm = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_jikwiNm");
}
//사용자 직급코드
pForm.gf_getGlpsCd = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_glpsCd");
}
//사용자 직급명
pForm.gf_getGlpsNm = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_glpsNm");
}
//사용자 사내전화
pForm.gf_getCmpnPhnNo = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_cmpnPhnNo");
}
//사용자 휴대전화
pForm.gf_getMbphNo = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_mbphNo");
}
//사용자 사용자구분코드
pForm.gf_getUserGubunCd = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_userGubunCd");
}
//사용자 사용자구분명
pForm.gf_getUserGubunNm = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_userGubunNm");
}
//사용자 가입구분코드
pForm.gf_getJngCoursCd = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_jngCoursCd");
}
//사용자 가입구분구분명
pForm.gf_getJngCoursNm = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_jngCoursNm");
}
//사용자 이름
pForm.gf_getUserNm = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_userNm");
}
//사용자 이메일
pForm.gf_getEmailAddr = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_emailAddr");
}
//접속IP
pForm.gf_getIpAddr = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_ipAddr");
}
//로그인일시
pForm.gf_getLoginBeginTm = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_loginBeginTm");
}
//사용자 사용자 업무 리스트정보
pForm.gf_getUserJobList = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_userJobList");
}
//회사코드
pForm.gf_getCompanyCd = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_companyCd");
}
//회사명
pForm.gf_getCompanyNm = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_companyNm");
}
//세션GUID
pForm.gf_getSessionGuId = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_sessionGuId");
}
//SSO토큰ID
pForm.gf_getSsoTokenId = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_ssoTokenId");
}
//업무예비필드
pForm.gf_getJob = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_job");
}
//사용자 소속코드
pForm.gf_getUserBlgCd= function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_userBlgCd");
}
//사용자 부서코드
pForm.gf_getDeptCd = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_deptCd");
}
//사용자 부서명
pForm.gf_getDeptNm = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_deptNm");
}
//사용자 보안그룹코드
pForm.gf_getSecurityGroup = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_securityGroup");
}
//사용자 부서전화번호
pForm.gf_getDeptTelNo = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_deptTelNo");
}
//CTI ID
pForm.gf_getCtiId = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_ctiId");
}
//CTI 내선번호
pForm.gf_getCtiExtension = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_ctiExtension");
}
//CTI 내선번호
pForm.gf_getCtiPwd = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_ctiPwd");
}
//부서그룹
pForm.gf_getDeptGroup = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_deptGroup");
}

//Oz Export Url
pForm.gf_getOzExportUrl = function ()
{
	if(nexacro.getApplication().gv_runMode == "prod")
		return "http://report.daeryunens.com:20001/attach/";
	else
		return "http://10.5.10.31:8080/attach/";
}
//권한id
pForm.gf_getJobAuthIds = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_jobAuthIds");
}
//권한명
pForm.gf_getJobAuthNms = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_jobAuthNms");
}

//언어유형
pForm.gf_getLanguageType = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType");
}
//사이트유형
pForm.gf_getSiteType = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_siteType");
}
//회사ID
pForm.gf_getEnterpriseId = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId");
}
//PDA로긴유형
pForm.gf_getPdaWorkType = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_pdaWorkType");
}


pForm.gf_getPersonId = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_personId");
}




pForm.gf_getAssignmentId = function ()
{
	return nexacro.getApplication().gds_userInfo.getColumn(0,"gv_assignmentId");
}





