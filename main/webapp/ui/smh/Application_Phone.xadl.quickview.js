(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
		
            // global dataset
            obj = new Dataset("gdsOpenList", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_EX_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsLeftMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">0000</Col><Col id=\"UP_MENU_CD\">0</Col><Col id=\"MENU_LVL\">0</Col><Col id=\"MENU_NM\">업무화면예시</Col></Row><Row><Col id=\"MENU_CD\">0001</Col><Col id=\"UP_MENU_CD\">0000</Col><Col id=\"MENU_NM\">화면예시1</Col><Col id=\"PGM_PATH\">Base</Col><Col id=\"PGM_ID\">work01.xfdl</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">0002</Col><Col id=\"UP_MENU_CD\">0000</Col><Col id=\"MENU_NM\">화면예시2</Col><Col id=\"PGM_PATH\">Base</Col><Col id=\"PGM_ID\">work02.xfdl</Col><Col id=\"MENU_LVL\">1</Col></Row><Row><Col id=\"MENU_CD\">0003</Col><Col id=\"UP_MENU_CD\">0000</Col><Col id=\"MENU_NM\">화면예시3</Col><Col id=\"PGM_PATH\">Base</Col><Col id=\"PGM_ID\">work03.xfdl</Col><Col id=\"MENU_LVL\">1</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"8\"/><Column id=\"UP_MENU_CD\" type=\"STRING\" size=\"8\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"50\"/><Column id=\"MENU_LEVEL\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"200\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"200\"/><Column id=\"WINID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_openMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_myMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_TOP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_OPTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ARGS\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_EXTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_RM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_AUTH_TMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_userInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"gv_ssoUserId\" type=\"string\" size=\"32\"/><Column id=\"gv_id\" type=\"STRING\" size=\"256\"/><Column id=\"gv_loginId\" type=\"STRING\" size=\"256\"/><Column id=\"gv_userId\" type=\"STRING\" size=\"256\"/><Column id=\"gv_jikwiCd\" type=\"STRING\" size=\"256\"/><Column id=\"gv_jikwiNm\" type=\"STRING\" size=\"256\"/><Column id=\"gv_glpsCd\" type=\"STRING\" size=\"256\"/><Column id=\"gv_glpsNm\" type=\"STRING\" size=\"256\"/><Column id=\"gv_cmpnPhnNo\" type=\"STRING\" size=\"256\"/><Column id=\"gv_mbphNo\" type=\"STRING\" size=\"256\"/><Column id=\"gv_userGubunCd\" type=\"STRING\" size=\"256\"/><Column id=\"gv_userGubunNm\" type=\"STRING\" size=\"256\"/><Column id=\"gv_jngCoursCd\" type=\"STRING\" size=\"256\"/><Column id=\"gv_jngCoursNm\" type=\"STRING\" size=\"256\"/><Column id=\"gv_userNm\" type=\"STRING\" size=\"256\"/><Column id=\"gv_emailAddr\" type=\"STRING\" size=\"256\"/><Column id=\"gv_userJobList\" type=\"STRING\" size=\"256\"/><Column id=\"gv_jobGubunCds\" type=\"STRING\" size=\"256\"/><Column id=\"gv_jobGubunNms\" type=\"STRING\" size=\"256\"/><Column id=\"gv_ipAddr\" type=\"STRING\" size=\"256\"/><Column id=\"gv_loginBeginTm\" type=\"STRING\" size=\"256\"/><Column id=\"gv_authTotInfo\" type=\"STRING\" size=\"256\"/><Column id=\"gv_companyCd\" type=\"STRING\" size=\"256\"/><Column id=\"gv_companyNm\" type=\"STRING\" size=\"256\"/><Column id=\"gv_sessionGuId\" type=\"STRING\" size=\"256\"/><Column id=\"gv_authTokenId\" type=\"STRING\" size=\"256\"/><Column id=\"gv_ssoTokenId\" type=\"STRING\" size=\"256\"/><Column id=\"gv_job\" type=\"STRING\" size=\"256\"/><Column id=\"gv_userBlgCd\" type=\"STRING\" size=\"256\"/><Column id=\"gv_deptCd\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_URI\" type=\"STRING\" size=\"256\"/><Column id=\"gv_securityGroup\" type=\"STRING\" size=\"256\"/><Column id=\"gv_deptTelNo\" type=\"STRING\" size=\"256\"/><Column id=\"gv_ctiId\" type=\"STRING\" size=\"256\"/><Column id=\"gv_ctiExtension\" type=\"STRING\" size=\"256\"/><Column id=\"gv_deptNm\" type=\"STRING\" size=\"256\"/><Column id=\"gv_ctiPwd\" type=\"STRING\" size=\"256\"/><Column id=\"gv_deptGroup\" type=\"STRING\" size=\"256\"/><Column id=\"gv_siteType\" type=\"STRING\" size=\"256\"/><Column id=\"gv_languageType\" type=\"STRING\" size=\"256\"/><Column id=\"gv_pdaWorkType\" type=\"STRING\" size=\"256\"/><Column id=\"gv_personId\" type=\"STRING\" size=\"256\"/><Column id=\"gv_assignmentId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"gv_ssoUserId\"/><Col id=\"gv_languageType\">ko-KR</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_menuSet", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SET_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SET_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID_SET\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM_SET\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SET_SEQ\">1</Col><Col id=\"SET_NM\">메뉴2</Col><Col id=\"MENU_ID_SET\">84130</Col><Col id=\"MENU_NM_SET\">템플릿1</Col></Row><Row><Col id=\"SET_SEQ\">3</Col><Col id=\"SET_NM\">에유</Col><Col id=\"MENU_ID_SET\">84130</Col><Col id=\"MENU_NM_SET\">템플릿1</Col></Row><Row><Col id=\"SET_SEQ\">5</Col><Col id=\"SET_NM\">기초공사재료신청</Col><Col id=\"MENU_ID_SET\">84130,84132,84131,84133</Col><Col id=\"MENU_NM_SET\">템플릿1,템플릿2,템플릿3,템플릿4</Col></Row><Row><Col id=\"SET_SEQ\">6</Col><Col id=\"SET_NM\">메뉴3</Col><Col id=\"MENU_ID_SET\">83248,83247,83383,84123,84125,84128,84130</Col><Col id=\"MENU_NM_SET\">고객불만목록,인증문서,고객불만진행조회,외주출하지시내역,외주상차지시편성,파일럿,템플릿1</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_comCode", this);
            obj._setContents("<ColumnInfo><Column id=\"TYPE_CD\" type=\"string\" size=\"255\"/><Column id=\"CD_TYPE_NAME\" type=\"string\" size=\"255\"/><Column id=\"CD_VAL\" type=\"string\" size=\"255\"/><Column id=\"CD_NM\" type=\"string\" size=\"255\"/><Column id=\"CLASS1_CD\" type=\"string\" size=\"255\"/><Column id=\"CLASS1_NAME1\" type=\"string\" size=\"255\"/><Column id=\"CLASS2_CD\" type=\"string\" size=\"255\"/><Column id=\"CLASS2_NAME1\" type=\"string\" size=\"255\"/><Column id=\"CLASS3_CD\" type=\"string\" size=\"255\"/><Column id=\"CLASS3_NAME1\" type=\"string\" size=\"255\"/><Column id=\"DEL_YN\" type=\"string\" size=\"255\"/><Column id=\"SORT_SEQ\" type=\"string\" size=\"255\"/><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_comCodeParam", this);
            obj._setContents("<ColumnInfo><Column id=\"TYPE_CD\" type=\"string\" size=\"255\"/><Column id=\"CLASS1_CD\" type=\"string\" size=\"255\"/><Column id=\"CLASS2_CD\" type=\"string\" size=\"255\"/><Column id=\"CLASS3_CD\" type=\"string\" size=\"255\"/><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_pageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PAGE_LINE\" type=\"STRING\" size=\"256\"/><Column id=\"CURR_PAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PAGE_LINE\"/><Col id=\"CURR_PAGE\"/></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_period", this);
            obj._setContents("<ColumnInfo><Column id=\"lang_cd\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"desc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">today</Col><Col id=\"desc\">금일</Col><Col id=\"lang_cd\">ko-KR</Col></Row><Row><Col id=\"lang_cd\">ko-KR</Col><Col id=\"desc\">전일</Col><Col id=\"code\">yesterday</Col></Row><Row><Col id=\"lang_cd\">ko-KR</Col><Col id=\"desc\">금주</Col><Col id=\"code\">thisweek</Col></Row><Row><Col id=\"lang_cd\">ko-KR</Col><Col id=\"desc\">전주</Col><Col id=\"code\">lastweek</Col></Row><Row><Col id=\"lang_cd\">ko-KR</Col><Col id=\"desc\">금월</Col><Col id=\"code\">thismonth</Col></Row><Row><Col id=\"lang_cd\">ko-KR</Col><Col id=\"desc\">전월</Col><Col id=\"code\">lastmonth</Col></Row><Row><Col id=\"desc\">사용자정의</Col><Col id=\"lang_cd\">ko-KR</Col></Row><Row><Col id=\"lang_cd\">en-US</Col><Col id=\"code\">today</Col><Col id=\"desc\">Today</Col></Row><Row><Col id=\"lang_cd\">en-US</Col><Col id=\"code\">yesterday</Col><Col id=\"desc\">Yesterday</Col></Row><Row><Col id=\"lang_cd\">en-US</Col><Col id=\"code\">thisweek</Col><Col id=\"desc\">This Week</Col></Row><Row><Col id=\"lang_cd\">en-US</Col><Col id=\"code\">lastweek</Col><Col id=\"desc\">Last Week</Col></Row><Row><Col id=\"lang_cd\">en-US</Col><Col id=\"code\">thismonth</Col><Col id=\"desc\">This Month</Col></Row><Row><Col id=\"lang_cd\">en-US</Col><Col id=\"code\">lastmonth</Col><Col id=\"desc\">Last Month</Col></Row><Row><Col id=\"desc\">User Definition</Col><Col id=\"lang_cd\">en-US</Col></Row><Row><Col id=\"code\">today</Col><Col id=\"desc\">Today</Col><Col id=\"lang_cd\">zh-CN</Col></Row><Row><Col id=\"code\">yesterday</Col><Col id=\"desc\">Yesterday</Col><Col id=\"lang_cd\">zh-CN</Col></Row><Row><Col id=\"code\">thisweek</Col><Col id=\"desc\">This Week</Col><Col id=\"lang_cd\">zh-CN</Col></Row><Row><Col id=\"code\">lastweek</Col><Col id=\"desc\">Last Week</Col><Col id=\"lang_cd\">zh-CN</Col></Row><Row><Col id=\"code\">thismonth</Col><Col id=\"desc\">This Month</Col><Col id=\"lang_cd\">zh-CN</Col></Row><Row><Col id=\"code\">lastmonth</Col><Col id=\"desc\">Last Month</Col><Col id=\"lang_cd\">zh-CN</Col></Row><Row><Col id=\"desc\">User Definition</Col><Col id=\"lang_cd\">zh-CN</Col></Row><Row><Col id=\"code\">today</Col><Col id=\"desc\">Today</Col><Col id=\"lang_cd\">vi-VN</Col></Row><Row><Col id=\"code\">yesterday</Col><Col id=\"desc\">Yesterday</Col><Col id=\"lang_cd\">vi-VN</Col></Row><Row><Col id=\"code\">thisweek</Col><Col id=\"desc\">This Week</Col><Col id=\"lang_cd\">vi-VN</Col></Row><Row><Col id=\"code\">lastweek</Col><Col id=\"desc\">Last Week</Col><Col id=\"lang_cd\">vi-VN</Col></Row><Row><Col id=\"code\">thismonth</Col><Col id=\"desc\">This Month</Col><Col id=\"lang_cd\">vi-VN</Col></Row><Row><Col id=\"code\">lastmonth</Col><Col id=\"desc\">Last Month</Col><Col id=\"lang_cd\">vi-VN</Col></Row><Row><Col id=\"desc\">User Definition</Col><Col id=\"lang_cd\">vi-VN</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_message", this);
            obj._setContents("");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"_chk\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_TOP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_OPTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ARGS\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STAT\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_USER\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_EXTP\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_RM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">1000</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">운영관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\"/><Col id=\"MENU_SEQ\">49</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\"/><Col id=\"UPDATE_USER\"/><Col id=\"UPDATE_DT\"/><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\"/><Col id=\"PAGE_EXTP\"/><Col id=\"MENU_AUTH\"/></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">100010</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">공통코드관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">2.01208E+16</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01209E+16</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">100011</Col><Col id=\"PGM_ID\">CMCM01100M</Col><Col id=\"MENU_NM\">공통코드관리</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">100010</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">2.01208E+16</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01209E+16</Col><Col id=\"PAGE_URL\">cmcm::CMCM01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">100020</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">메시지 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">2.01208E+16</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01209E+16</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">100021</Col><Col id=\"PGM_ID\">CMMM01100M</Col><Col id=\"MENU_NM\">메시지 목록</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">100020</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">2.01208E+16</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01209E+16</Col><Col id=\"PAGE_URL\">cmmm::CMMM01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">100022</Col><Col id=\"PGM_ID\">CMMM01300M</Col><Col id=\"MENU_NM\">메시지 등록</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">100020</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">2.01208E+16</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01209E+16</Col><Col id=\"PAGE_URL\">cmmm::CMMM01300M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">100030</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">도움말관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">2.01208E+16</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01209E+16</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ID\">100031</Col><Col id=\"PGM_ID\">CMHM01100M</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">2.01208E+16</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01209E+16</Col><Col id=\"PAGE_URL\">cmhm::CMHM01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"MENU_NM\">도움말 목록</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">100030</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col></Row><Row><Col id=\"MENU_ID\">100032</Col><Col id=\"MENU_NM\">도움말 등록</Col><Col id=\"PGM_ID\">CMHM01300M</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">100030</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">2.01208E+16</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01209E+16</Col><Col id=\"PAGE_URL\">cmhm::CMHM01300M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">100040</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">다양한SQL관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">1000</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">2.01208E+16</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01209E+16</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">100041</Col><Col id=\"PGM_ID\">CMSL01100M</Col><Col id=\"MENU_NM\">다양한SQL 목록</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">100040</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">2.01208E+16</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01209E+16</Col><Col id=\"PAGE_URL\">cmsl::CMSL01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">100042</Col><Col id=\"PGM_ID\">CMSL01300M</Col><Col id=\"MENU_NM\">다양한SQL 등록</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_GRP\">1000</Col><Col id=\"MENU_TOP\">100040</Col><Col id=\"MENU_SEQ\">17</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">test</Col><Col id=\"CREATE_DT\">2.01208E+16</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01209E+16</Col><Col id=\"PAGE_URL\">cmsl::CMSL01300M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">3000</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">작업/모니터링</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_GRP\">3000</Col><Col id=\"MENU_TOP\">3000</Col><Col id=\"MENU_SEQ\">51</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">300010</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">시스템로그</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">3000</Col><Col id=\"MENU_TOP\">3000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_AUTH\">1111</Col><Col id=\"MENU_ID\">300012</Col><Col id=\"PGM_ID\">CMLM01100M</Col><Col id=\"MENU_NM\">시스템로그 목록</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">3000</Col><Col id=\"MENU_TOP\">300011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmlm::CMLM01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_AUTH\">1111</Col><Col id=\"MENU_ID\">300013</Col><Col id=\"PGM_ID\">CMLM01110M</Col><Col id=\"MENU_NM\">WAS로그 목록</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">3000</Col><Col id=\"MENU_TOP\">300011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmlm::CMLM01110M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">300014</Col><Col id=\"PGM_ID\">CMLM01120M</Col><Col id=\"MENU_NM\">SMS로그 목록</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">3000</Col><Col id=\"MENU_TOP\">300011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmlm::CMLM01120M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">300015</Col><Col id=\"PGM_ID\">CMLM01130M</Col><Col id=\"MENU_NM\">EMAIL로그 목록</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">3000</Col><Col id=\"MENU_TOP\">300011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmlm::CMLM01130M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">5000</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">조직관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">5000</Col><Col id=\"MENU_SEQ\">51</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">500010</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">조직 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">5000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">500011</Col><Col id=\"PGM_ID\">CMOG01100M</Col><Col id=\"MENU_NM\">조직목록</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG01100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">500012</Col><Col id=\"PGM_ID\">CMOG01200M</Col><Col id=\"MENU_NM\">조직 등록</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG01200M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">500013</Col><Col id=\"PGM_ID\">CMOG01300M</Col><Col id=\"MENU_NM\">조직 수정</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG01300M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">500014</Col><Col id=\"PGM_ID\">CMOG01400M</Col><Col id=\"MENU_NM\">조직 상세</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG01400M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직 기본화면</Col><Col id=\"PGM_ID\">CMOG01500P</Col><Col id=\"MENU_ID\">500015</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG01500P.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직 상세화면</Col><Col id=\"PGM_ID\">CMOG01510P</Col><Col id=\"MENU_ID\">500016</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG01510P.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직매핑 목록</Col><Col id=\"PGM_ID\">CMOG02100M</Col><Col id=\"MENU_ID\">500017</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG02100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직매핑 연계결과 목록</Col><Col id=\"PGM_ID\">CMOG02110M</Col><Col id=\"MENU_ID\">500018</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG02110M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직매핑 등록</Col><Col id=\"PGM_ID\">CMOG02200M</Col><Col id=\"MENU_ID\">500019</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG02200M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직매핑 수정</Col><Col id=\"PGM_ID\">CMOG02300M</Col><Col id=\"MENU_ID\">500020</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG02300M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직매핑 상세</Col><Col id=\"PGM_ID\">CMOG02400M</Col><Col id=\"MENU_ID\">500021</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG02400M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직부가정보 목록</Col><Col id=\"PGM_ID\">CMOG03100M</Col><Col id=\"MENU_ID\">500022</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG03100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직부가정보 등록</Col><Col id=\"PGM_ID\">CMOG03200P</Col><Col id=\"MENU_ID\">500023</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG03200P.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직부가정보 수정</Col><Col id=\"PGM_ID\">CMOG03300P</Col><Col id=\"MENU_ID\">500024</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG03300P.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직부가정보 상세</Col><Col id=\"PGM_ID\">CMOG03400P</Col><Col id=\"MENU_ID\">500025</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG03400P.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직부가정보 속성관리</Col><Col id=\"PGM_ID\">CMOG03500M</Col><Col id=\"MENU_ID\">500026</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG03500M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직기본 변경 목록</Col><Col id=\"PGM_ID\">CMOG04100M</Col><Col id=\"MENU_ID\">500027</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG04100M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직등급 변경 목록</Col><Col id=\"PGM_ID\">CMOG04110M</Col><Col id=\"MENU_ID\">500028</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG04110M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직부가정보 변경 목록</Col><Col id=\"PGM_ID\">CMOG04120M</Col><Col id=\"MENU_ID\">500029</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG04120M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_NM\">조직변경 예약목록</Col><Col id=\"PGM_ID\">CMOG04130M</Col><Col id=\"MENU_ID\">500030</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">5000</Col><Col id=\"MENU_TOP\">500011</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">cmog::CMOG04130M.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">4000</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">개발가이드 참조</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">4000</Col><Col id=\"MENU_SEQ\">51</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400010</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">GUIDE</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">4000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400012</Col><Col id=\"PGM_ID\">Guide_01</Col><Col id=\"MENU_NM\">Guide_01</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_01.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400013</Col><Col id=\"PGM_ID\">Guide_02</Col><Col id=\"MENU_NM\">Guide_02</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_02.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400014</Col><Col id=\"PGM_ID\">Guide_03</Col><Col id=\"MENU_NM\">Guide_03</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_03.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400015</Col><Col id=\"PGM_ID\">Guide_04</Col><Col id=\"MENU_NM\">Guide_04</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_04.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400016</Col><Col id=\"PGM_ID\">Guide_05</Col><Col id=\"MENU_NM\">Guide_05</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_05.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400017</Col><Col id=\"PGM_ID\">Guide_06</Col><Col id=\"MENU_NM\">Guide_06</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_06.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400018</Col><Col id=\"PGM_ID\">Guide_07</Col><Col id=\"MENU_NM\">Guide_07</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_07.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400019</Col><Col id=\"PGM_ID\">Guide_08</Col><Col id=\"MENU_NM\">Guide_08</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400010</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">guide::Guide_08.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400020</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">TEMPLATE</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">4000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400021</Col><Col id=\"PGM_ID\">TemplateGuide_001</Col><Col id=\"MENU_NM\">조회_그리드</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_001.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400022</Col><Col id=\"PGM_ID\">TemplateGuide_002</Col><Col id=\"MENU_NM\">조회_게시판형</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_002.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400023</Col><Col id=\"PGM_ID\">TemplateGuide_003</Col><Col id=\"MENU_NM\">조회_분리형</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_003.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400024</Col><Col id=\"PGM_ID\">TemplateGuide_004</Col><Col id=\"MENU_NM\">입력_일반형</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_004.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400025</Col><Col id=\"PGM_ID\">TemplateGuide_005</Col><Col id=\"MENU_NM\">입력_탭형</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_005.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400026</Col><Col id=\"PGM_ID\">TemplateGuide_006</Col><Col id=\"MENU_NM\">그래프</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_006.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400027</Col><Col id=\"PGM_ID\">TemplateGuide_007</Col><Col id=\"MENU_NM\">메세지</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_007.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400028</Col><Col id=\"PGM_ID\">TemplateGuide_008</Col><Col id=\"MENU_NM\">통계_그래프</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_008.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"PGM_ID\">TemplateGuide_009</Col><Col id=\"MENU_ID\">400029</Col><Col id=\"_chk\"/><Col id=\"MENU_NM\">통계_표</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::TemplateGuide_009.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"PGM_ID\">PopUp_001</Col><Col id=\"MENU_ID\">400031</Col><Col id=\"_chk\"/><Col id=\"MENU_NM\">조회(PopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUp_001.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"PGM_ID\">PopUp_002</Col><Col id=\"MENU_ID\">400032</Col><Col id=\"_chk\"/><Col id=\"MENU_NM\">입력(PopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUp_002.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"PGM_ID\">PopUp_003</Col><Col id=\"MENU_ID\">400033</Col><Col id=\"_chk\"/><Col id=\"MENU_NM\">도움말(PopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUp_003.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400034</Col><Col id=\"PGM_ID\">PopUp_004</Col><Col id=\"MENU_NM\">메세지(PopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUp_004.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400035</Col><Col id=\"PGM_ID\">PopUpMD_001</Col><Col id=\"MENU_NM\">조회(MDPopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUpMD_001.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400036</Col><Col id=\"PGM_ID\">PopUpMD_002</Col><Col id=\"MENU_NM\">입력(MDPopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUpMD_002.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400037</Col><Col id=\"PGM_ID\">PopUpMD_003</Col><Col id=\"MENU_NM\">도움말(MDPopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUpMD_003.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"MENU_ID\">400038</Col><Col id=\"PGM_ID\">PopUpMD_004</Col><Col id=\"MENU_NM\">메세지(MDPopUp)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400020</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">template::PopUpMD_004.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"_chk\"/></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">400040</Col><Col id=\"PGM_ID\"/><Col id=\"MENU_NM\">SAMPLE</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">4000</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\"/><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"_chk\"/><Col id=\"MENU_ID\">400041</Col><Col id=\"PGM_ID\">Sample01</Col><Col id=\"MENU_NM\">Sample01-팝업오픈</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample01.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400042</Col><Col id=\"PGM_ID\">Sample02</Col><Col id=\"MENU_NM\">Sample02-RD호출</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample02.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400043</Col><Col id=\"PGM_ID\">Sample03</Col><Col id=\"MENU_NM\">Sample03-엑셀 import/export</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample03.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400044</Col><Col id=\"PGM_ID\">Sample04</Col><Col id=\"MENU_NM\">Sample04-Grid 필수값체크</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample04.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400045</Col><Col id=\"PGM_ID\">Sample05</Col><Col id=\"MENU_NM\">Sample05-Transaction(paging)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample05.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400046</Col><Col id=\"PGM_ID\">Sample10</Col><Col id=\"MENU_NM\">Sample10-GridSort/전체선택</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample10.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400047</Col><Col id=\"PGM_ID\">Sample11</Col><Col id=\"MENU_NM\">Sample11-파일업/다운로드</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample11.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400048</Col><Col id=\"PGM_ID\">Sample13</Col><Col id=\"MENU_NM\">Sample13-RichTextEditor</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample13.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"_chk\">[Undefined]</Col><Col id=\"MENU_ID\">400120</Col><Col id=\"PGM_ID\">Sample20</Col><Col id=\"MENU_NM\">Sample20-월선택</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample20.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400051</Col><Col id=\"PGM_ID\">Sample31</Col><Col id=\"MENU_NM\">Sample31-mis-sample</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample31.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400052</Col><Col id=\"PGM_ID\">Sample97</Col><Col id=\"MENU_NM\">Sample97-공통함수</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample97.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400053</Col><Col id=\"PGM_ID\">Sample98</Col><Col id=\"MENU_NM\">Sample98-RD호출(html5)</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample98.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row><Row><Col id=\"MENU_ID\">400054</Col><Col id=\"PGM_ID\">Sample99</Col><Col id=\"MENU_NM\">Sample99-New Form</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"MENU_GRP\">4000</Col><Col id=\"MENU_TOP\">400030</Col><Col id=\"MENU_SEQ\">30</Col><Col id=\"MENU_OPTP\">MAIN</Col><Col id=\"MENU_ARGS\"/><Col id=\"MENU_STAT\">VIEW</Col><Col id=\"MENU_DESC\"/><Col id=\"CREATE_USER\">admin</Col><Col id=\"CREATE_DT\">2.01501E+13</Col><Col id=\"UPDATE_USER\">test</Col><Col id=\"UPDATE_DT\">2.01501E+13</Col><Col id=\"PAGE_URL\">sample::Sample99.xfdl</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"PAGE_EXTP\">FORM</Col><Col id=\"MENU_AUTH\">1111</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_url", this);
            obj._setContents("<ColumnInfo><Column id=\"RUN_MODE\" type=\"STRING\" size=\"256\"/><Column id=\"IFC\" type=\"STRING\" size=\"256\"/><Column id=\"REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"RFN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_session", this);
            obj._setContents("<ColumnInfo><Column id=\"gv_ofcClassCd\" type=\"string\" size=\"32\"/><Column id=\"gv_jobSysCds\" type=\"string\" size=\"32\"/><Column id=\"gv_ofcAddr\" type=\"string\" size=\"32\"/><Column id=\"gv_userNm\" type=\"string\" size=\"32\"/><Column id=\"gv_authCodes\" type=\"string\" size=\"32\"/><Column id=\"gv_emailAddr\" type=\"string\" size=\"32\"/><Column id=\"gv_currAuthCode\" type=\"string\" size=\"32\"/><Column id=\"gv_ofcNm\" type=\"string\" size=\"32\"/><Column id=\"gv_authNames\" type=\"string\" size=\"32\"/><Column id=\"gv_ofcId\" type=\"string\" size=\"32\"/><Column id=\"gv_jobSysNms\" type=\"string\" size=\"32\"/><Column id=\"gv_erpId\" type=\"string\" size=\"32\"/><Column id=\"gv_agfcGubunNm\" type=\"string\" size=\"32\"/><Column id=\"gv_agfcGubunCd\" type=\"string\" size=\"32\"/><Column id=\"gv_upperOfcCd\" type=\"string\" size=\"32\"/><Column id=\"gv_ofcCd\" type=\"string\" size=\"32\"/><Column id=\"gv_orgGubunCd\" type=\"string\" size=\"32\"/><Column id=\"gv_deptGubunCd\" type=\"string\" size=\"32\"/><Column id=\"gv_ofctelNo\" type=\"string\" size=\"32\"/><Column id=\"gv_userId\" type=\"string\" size=\"32\"/><Column id=\"gv_portalId\" type=\"string\" size=\"32\"/><Column id=\"gv_acctGubuns\" type=\"string\" size=\"32\"/><Column id=\"gv_upperOfcNm\" type=\"string\" size=\"32\"/><Column id=\"gv_currJobSysCd\" type=\"STRING\" size=\"256\"/><Column id=\"gv_currJobSysNm\" type=\"STRING\" size=\"256\"/><Column id=\"gv_personId\" type=\"STRING\" size=\"256\"/><Column id=\"gv_assignmentId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"gv_ofcClassCd\">4</Col><Col id=\"gv_jobSysCds\">ETX</Col><Col id=\"gv_ofcAddr\">서울특별시 도봉구 노해로 150 (쌍문동) </Col><Col id=\"gv_userNm\">테스트사용자</Col><Col id=\"gv_authCodes\">FCM001,FCM002,FCM003,FCM004</Col><Col id=\"gv_emailAddr\">sunghajin@built1.com</Col><Col id=\"gv_currAuthCode\">FCM001</Col><Col id=\"gv_ofcNm\">서울삼각산동(취)</Col><Col id=\"gv_authNames\">세출관리자,수입관리자,물품관리자,국유재산관리자</Col><Col id=\"gv_ofcId\">1373</Col><Col id=\"gv_jobSysNms\">부가세</Col><Col id=\"gv_erpId\">1104</Col><Col id=\"gv_agfcGubunNm\">서울지방우정청</Col><Col id=\"gv_agfcGubunCd\">10</Col><Col id=\"gv_upperOfcCd\">1000204C</Col><Col id=\"gv_ofcCd\">10002290</Col><Col id=\"gv_orgGubunCd\">ORG600</Col><Col id=\"gv_deptGubunCd\">DEPT_CCM</Col><Col id=\"gv_ofctelNo\">02-3499-3600</Col><Col id=\"gv_userId\">testuser</Col><Col id=\"gv_portalId\">-1</Col><Col id=\"gv_acctGubuns\">{&quot;FCM001&quot;:&quot;71,72,75,76&quot;,&quot;FCM002&quot;:&quot;71,72&quot;,&quot;FCM003&quot;:&quot;71,72,75&quot;,&quot;FCM004&quot;:&quot;71,72,76&quot;}</Col><Col id=\"gv_upperOfcNm\">서울도봉우체국 (총괄국합산)</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_time", this);
            obj._setContents("<ColumnInfo><Column id=\"TODAY\" type=\"STRING\" size=\"8\"/><Column id=\"TODAY_TIME\" type=\"STRING\" size=\"14\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_cmdDictionary", this);
            obj._setContents("<ColumnInfo><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_cmPopup", this);
            obj._setContents("<ColumnInfo><Column id=\"QRY_TY\" type=\"STRING\" size=\"256\"/><Column id=\"QRY_URL\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_date", this);
            obj._setContents("<ColumnInfo><Column id=\"TODAY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_menuUrl", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("gv_viewType","login");
            this._addVariable("gv_menuType","default");
            this._addVariable("gv_locale","KO");
            this._addVariable("gv_formUrl","");
            this._addVariable("gv_frameWidth","1280");
            this._addVariable("gv_frameHeight","800");
            this._addVariable("gv_initWidth","1264");
            this._addVariable("gv_initHeight","788");
            this._addVariable("gv_menuAuth","2");
            this._addVariable("gv_host","http://localhost/");
            this._addVariable("gv_copyCnt","0");
            this._addVariable("gv_runMode","dev");
            this._addVariable("gv_quickView","quick");
            this._addVariable("gv_lrgeMenuId","");
            this._addVariable("gv_languageType","ko-KR");
            this._addVariable("gv_siteType","C");
            this._addVariable("gv_userDevice","pc");
            this._addVariable("gv_pdaWorkType","");
            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Phone");
            this.set_screenid("pda");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","480","768",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("FullFrame");
            mainframe.set_showcascadetitletext("true");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler
        this.registerScript("Application_Phone.xadl", function() {
        this.gv_arrClipboard = ""; //클립보드 저장용 글로벌 변수

        this.gv_frameWidth = 1280; //화면 넓이
        TOBE = nexacro;

        this.Application_onload = function(obj,e)
        {
        	this.gdsUrlSetting();

        	var appUrl = nexacro.getApplication().xadl;
        	var appUrlSplit = appUrl.split("/");
        	var protocol = appUrlSplit[0];
        	var jobSysCd = "IFC";	//appUrlSplit[3];
        	var serverNm = appUrlSplit[2];
        	nexacro.getApplication().gv_quickView = "app";
        	this.runModeSetting(serverNm);
        	this.afn_setServiceUrl(jobSysCd);
        	var sLoginInfo = nexacro._getCookie("gv_loginInfo");

        	var userDevice = "";
        	var device = "win16|win32|win64|mac|macintel";
        	nexacro.getApplication().gv_userDevice = "mobile";

        };

        // 브라우저의 뒤로가기, 앞으로가기 실행시 호출됨
        this.onChangeHistory = function (hash, data)
        {
        	if (hash == "")
        	{
        		// 초기화면
        		this.div_work.set_url("");
        	}
        	else
        	{
        		// hash id 를 확인하여 필요한 처리를 진행한다.
        		var temp = hash.split(":");
        		var type = temp[0];

        		if (type == "menu")
        		{
        			var menuId = temp[1];

        			this.goMenu(menuId, data);
        		}
        	}
        };
        this.gdsUrlSetting = function ()
        {
        	nexacro.getApplication().gds_url.loadXML(efn_setUrl());
        	//trace(nexacro.getApplication().gds_url.saveXML());
        };

        this.runModeSetting = function (serverNm)
        {
        	//if (serverNm.indexOf("172.16.4.222") > -1 || serverNm.indexOf("mesdev") > -1)
        	if (serverNm.indexOf("mesdev") > -1)
        	{
        		nexacro.getApplication().gv_runMode = "dev";
        	}
        	else if (serverNm.indexOf("local") > -1)
        	{
        		nexacro.getApplication().gv_runMode = "local";
        	}
        	else
        	{
        		nexacro.getApplication().gv_runMode = "prod";
        	}
        };

        /**
         * @class 요청한 시스템ID로 default 서비스 url 설정
         * @param  {String} sAppNm - appication 명
         * @param  {String} sCommand - application ID
         * @return N/A
         */
        this.afn_setServiceUrl = function (sCommand)
        {
        	var sUrl = nexacro.getApplication().gds_url.lookup("RUN_MODE", nexacro.getApplication().gv_runMode, sCommand.toString().toUpperCase());
        	//efn_setRexpert(sCommand.toString().toUpperCase());

        	nexacro.getApplication().gv_host = sUrl;
        	nexacro.getEnvironment().services["svcurl"].url = sUrl;

        	trace("==================================================================");
        	trace(" [(1)접속 모드]    : " + nexacro.getApplication().gv_runMode);
        	trace(" [(2)접속URL 정보] : " + nexacro.getApplication().gv_host);
        	trace("♧================================================================");

        };

        this.afn_GetMessage = function ()
        {
        	var sSvcID = "selectCmMsg";
        	var sController = nexacro.getApplication().gv_host + "/cmmm01100/selectCmMsg.do";
        	var sOutDatasets = "ds_message=ds_output";
        	var sArgs = "method='selectCmMsg'";
        	var sCallbackFunc = "afn_Callback";

        	this.transaction(sSvcID, sController, "", sOutDatasets, sArgs, sCallbackFunc);
        };

        this.afn_Callback = function (strSvcId, nErrorCode, strErrorMsg)
        {
        /*
        	if (nErrorCode < 0)
        	{
        		alert(strErrorMsg);
        		return;
        	}
        */
        	switch (strSvcId)
        	{
        	/*
        		case "menu":
        			if (nexacro.getApplication().gds_Menu.rowcount <= 0)
        			{
        				return;
        			}
        			break;
        		case "mymenu":
        			break;
        		case "userSearch":
        			break;
        		case "selectCmMsg":
        			break;
        		case "selectCmMenu":
        			//trace(nexacro.getApplication().gds_userInfo.saveXML());

        			break;
        		*/

        	}
        };

        this.afn_logout = function ()
        {
        	nexacro.getApplication().exit();
        };

        this.mainframe_onsize = function(obj,e)
        {
        	trace("this.gv_frameWidth-->"+this.gv_frameWidth);
        	trace("e.cx-->"+e.cx);
        	// 최저 width(1280) 확인
        	if (e.cx < this.gv_frameWidth)
        	{
        		obj.set_width(this.gv_frameWidth);
        	}
        	if (e.cx < 1530)
        	{
        		var strSeparatesize = "0,*";
        		gv_appBodySubFrameSet.set_separatesize(strSeparatesize);
        		gv_appLeftFrame.form.fn_leftShowHide(false);
        	}else{
        		var strSeparatesize = "251,*";
        		gv_appBodySubFrameSet.set_separatesize(strSeparatesize);
        		gv_appLeftFrame.form.fn_leftShowHide(true);
        	}
        };

        /**
         * application 로딩시 사용자 정의 화면 호출
         * @param  {string} sFormId - frame Form 아이디
         * @return N/A
         * @example
         * @memberOf public
         */
        this.av_sLoadFrame = ""; //application 초기 로딩시 사용
        this.afn_completeLoadForm = function (sFormId)
        {
        	if (sFormId && sFormId !== null)
        	{
        		this.av_sLoadFrame = this.av_sLoadFrame + "&&" + sFormId;
        	}
        	// trace("this.av_sLoadFrame-->"+this.av_sLoadFrame);
        	// if(this.av_sLoadFrame.indexOf("leftFrame") > -1)	gv_appLeftFrame.form.fn_myMenuAutoLoading();
        	/*
        	 * application 로딩시 메뉴 호출이 발생될 때
        	 * 메뉴 적용 시점 문제 발생. main, tabFrame 과 workTopFrame 폼 로딩 이후 메뉴 호출 처리
        	 */
        	if (this.av_sLoadFrame && this.av_sLoadFrame.indexOf("workTopFrame") > -1
        		 && this.av_sLoadFrame.indexOf("tabFrame") > -1
        		 && this.av_sLoadFrame.indexOf("main") > -1)
        	{
        		var key = "formUrl";
        		var location = window.location.search;
        		var objRegExp = new RegExp('[\\?&]' + key + '=([^&#]*)', "gi");
        		var results = objRegExp.exec(location);

        		if (results)
        		{
        			var splitResult = results[1].split("@");
        			if ((splitResult.length > 1) && (splitResult[1] == "new"))
        			{
        				var sMenuId = nexacro.getApplication().gds_menu.lookup("PAGE_URL", splitResult[0], "MENU_ID");
        				if (this.gfn_isNull(sMenuId))
        				{
        					trace("sMenuId in null");
        					return;
        				}
        				gv_appMainFrame.form.gfn_newPopup(sMenuId);
        			}
        			else
        			{
        				gv_appMainFrame.form.gfn_goPage(splitResult[0]);
        			}
        		}
        		this.av_sLoadFrame = "";
        		// gv_appLeftFrame.form.fn_myMenuAutoLoading();
        	}
        };

        this.Application_onerror = function(obj,e)
        {
        	trace("application_onerror > e.errorcode=[" + e.errorcode + "] e.errormsg=[" + e.errormsg + "] e.statuscode=[" + e.statuscode + "]");
        	var arrMsg = e.errormsg.split(")");

        	// 사용자가 통신중에 ESC키 발생시
        	if (e.errorcode == -2147418039)
        	{
        		return true;
        		// 사용자가 통신중에 ESC키로 통신중단을 막을때 주석해제한다.
        	}

        	// Network이 연결이 끊어진경우
        	if (e.errorcode = -2147418085)
        	{
        		if (e.statuscode == 10060)
        		{
        			trace("application_onerror : 서버와의 통신이 원활하지 않습니다.");
        		}
        		else if (e.statuscode == 0)
        		{
        			// timeout
        			trace("application_onerror : timeout 이 발생했습니다.");
        		}
        		else if (e.statuscode == 404)
        		{
        			// 404 에러시 처리 방안
        			trace("application_onerror : 404 에러가  발생했습니다.");
        			nexacro.getApplication().mainframe.ChildFrame0.form.div_work.set_url("frame::workFrameNofile.xfdl");
        		}
        		else if (e.statuscode == 408)
        		{
        			// 408 Request Timeout
        			trace("application_onerror : 408 Request Timeout 가 발생했습니다.");
        		}
        		else if (e.statuscode == 500)
        		{
        			// 500 에러시 처리 방안
        			trace("application_onerror : 500 에러 가 발생했습니다.");
        		}
        		else if (e.statuscode == 503)
        		{
        			// Service Unavaliable
        			alert("System is unavailable. Please reconnect after a while.");
        		}
        		else if (e.statuscode == 504)
        		{
        			// Gateway timeout
        			alert("System is unavailable. Please reconnect after a while.");
        		}
        		else if (e.statuscode == 12029)
        		{
        			alert("No response from the server. Again in a few minutes, please login.");
        			// application.exit();
        		}
        		else
        		{
        			// 미등록 오류 발생시.
        			trace("application_onerror : 미등록 오류 발생했습니다. = " + e.statuscode + ":" + e.errormsg);
        		}
        	}
        };


        });
		this.checkLicense("");
        
        this.loadPreloadList();

    };
}
)();
