(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COSA00200");
            this.set_titletext("보고서 실행");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,782);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_profile", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROFILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"P_PORTAL_USER_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"P_ACCT_DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"P_JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"P_OUT_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_yn", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"desc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"desc\">Y</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"desc\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_program", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_CONCURRENT_PROGRAM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONCURRENT_PROGRAM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXECUTE_METHOD\" type=\"STRING\" size=\"256\"/><Column id=\"EXECUTION_METHOD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_SHORT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"REQUEST_GROUP_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"APPLICATION_SHORT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONCURRENT_PROGRAM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PORTAL_USER_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORG_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMB_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENABLED_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"P_PORTAL_USER_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"P_ACCT_DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"P_JOB_SYS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qry", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"QUERY\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_recv", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"P_PORTAL_USER_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"P_LEDGER_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"P_ORG_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"P_JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"P_WAIT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"P_WAIT_SECOND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"X_REQ_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"X_REQ_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"X_REQ_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"LOOKUP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOOKUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEANING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_acctGubun", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"LOOKUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEANING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COLUMN_SEQ_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_LEFT_PROMPT\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE_SET\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULT_TYPE_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULT_VALUE2\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULT_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUIRED_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAY_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"FLEX_VALUE_SET_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ID_COLUMN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"QRY\" type=\"STRING\" size=\"2000\"/><Column id=\"VALIDATION_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE_COLUMN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_TABLE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ADDITIONAL_WHERE_CLAUSE\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_QRY\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROFILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"P_PORTAL_USER_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"P_ACCT_DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"P_JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"P_OUT_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"FORMAT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_application", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"REQUEST_GROUP\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REQUEST_GROUP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_GROUP_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"APPLICATION_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"APPLICATION_SHORT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"LOOKUP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOOKUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEANING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_send", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"P_PORTAL_USER_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"P_ACCT_DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"P_FND_INITIALIZE\" type=\"STRING\" size=\"256\"/><Column id=\"P_JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"P_WAIT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"P_WAIT_SECOND\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"X_REQ_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"X_REQ_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"X_REQ_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ecmRpstAuth", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RPST_AUTH_ID\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"JOB_SYS_CD\" size=\"256\" type=\"STRING\"/><Column id=\"ERP_AUTH_ID\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"USE_YN\" size=\"256\" type=\"STRING\"/><Column id=\"ACCT_GUBUN_ID\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"APPLICATION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESPONSIBILITY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RESPONSIBILITY_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ACCT_DIV_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmbFilter", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"LOOKUP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOOKUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEANING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_print",null,"0","64","24","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("출력");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_tooltiptext("실행");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0%","12",null,"18","87.17%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("보고서 실행");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0%","127",null,"18","87.17%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("실행조건 입력");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0%","31",null,"89","1.09%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","27","146","31",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_text("업무영역");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","0","56","146","31",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_text("프로그램명");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_application","150","32","571","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("25");
            obj.set_type("filter");
            obj.set_innerdataset("ds_application");
            obj.set_codecolumn("REQUEST_GROUP_ID");
            obj.set_datacolumn("REQUEST_GROUP");
            obj.set_border("1px solid rgba(170,170,170,1)");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_program","150","61","571","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("26");
            obj.set_innerdataset("ds_program");
            obj.set_codecolumn("CONCURRENT_PROGRAM_NAME");
            obj.set_datacolumn("USER_CONCURRENT_PROGRAM_NAME");
            obj.set_type("filter");
            obj.set_border("1px solid rgba(170,170,170,1)");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"7","65","21","66",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("27");
            obj.set_text("조회");
            obj.set_cssclass("btn_CRUD_Search");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_acctGubun","150","5","268","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_codecolumn("AD,ALL,A,ORG_ID");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static42","0%","-2","146","31",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("29");
            obj.set_text("회계구분");
            obj.set_cssclass("sta_WF_Label2");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"7","52","21","10",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("30");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_basic");
            obj.set_tooltiptext("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_rexpert","0%","286",null,"490","0.87%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_url("common::com_report.xfdl");
            obj.set_text("리포트");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result","0.11%","147",null,null,"0.98%","500",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_result");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"332\"/><Column size=\"160\"/><Column size=\"128\"/><Column size=\"0\"/><Column size=\"62\"/><Column size=\"62\"/><Column size=\"123\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"실행조건\"/><Cell col=\"2\" text=\"값 입력(선택)\"/><Cell col=\"3\" text=\"기본값\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"필수여부\"/><Cell col=\"6\" text=\"숨김여부\"/><Cell col=\"7\" text=\"타입\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:FORM_LEFT_PROMPT\"/><Cell col=\"2\" displaytype=\"expr:VALUE_SET==&apos;KP_DEPT&apos;?&quot;normal&quot; : FORMAT_TYPE==&apos;X&apos;?&quot;date&quot; : (VALIDATION_TYPE==&apos;F&apos; &amp;&amp; DEFAULT_VALUE2 !=&apos;MFG_ORGANIZATION_ID&apos;)||VALIDATION_TYPE==&apos;I&apos; ? &quot;combo&quot; : &quot;normal&quot;\" edittype=\"expr:VALUE_SET==&apos;KP_DEPT&apos;?&quot;normal&quot; : FORMAT_TYPE==&apos;X&apos;?&quot;date&quot; : (VALIDATION_TYPE==&apos;F&apos; &amp;&amp; DEFAULT_VALUE2 !=&apos;MFG_ORGANIZATION_ID&apos;)||VALIDATION_TYPE==&apos;I&apos; ? &quot;combo&quot; : &quot;normal&quot;\" text=\"bind:VALUE\" expandimage=\"URL(&apos;image::btn_find_d.png&apos;)\" combodataset=\"ds_cmb\" combocodecol=\"LOOKUP_CODE\" combodatacol=\"MEANING\" combodisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" text=\"bind:DEFAULT_VALUE\"/><Cell col=\"4\" text=\"bind:DEFAULT_VALUE2\"/><Cell col=\"5\" displaytype=\"checkbox\" text=\"bind:REQUIRED_FLAG\" textAlign=\"center\"/><Cell col=\"6\" displaytype=\"checkbox\" text=\"bind:DISPLAY_FLAG\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:DEFAULT_TYPE_DESC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,782,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cbo_acctGubun","value","ds_lookupTypes","JOB_SYS_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_report.xfdl");
        };
        
        // User Script
        this.registerScript("CMSA00600M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 동시작업 실행
         * 파일명 		: cmsa00400.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2017.03.18
         *
         * 설  명		: 공통코드 조회/수정/삭제/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2017.03.31	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";
        // include "lib::comRexpert.xjs";//리포트 전용 라이브러리 include 처리

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        var fv_currDate;
        var sql = "";

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	fv_currDate = this.nfn_getCurrentSystemTime(0);

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENABLED_FLAG", "Y");
        	var sSvcID = "selectAcctGubunList";
        	var sController = "/cmsa00300/selectAcctGubunList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_acctGubun=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectAcctGubunList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	// this.nfn_formInit(obj);
        	// 엔터키 설정 함수(조회)
        	this.gfn_setEnterSearch(this.div_search, "fn_fcm_search");

        	var sSvcID = "selectFndApplicationVlList";
        	var sController = "/cmsa00400/selectFndApplicationVlListForPrint.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_application=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectFndApplicationVlListForPrint");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	this.nfn_InsSelAllInDs(this.div_search.form.cbo_program, "전체");

        	var sSvcID = "selectEcmRpstAuthList";
        	var sController = "/cmac00100/selectEcmRpstAuthList.do";
        	var sInDatasets = "";
        	var sOutDatasets = "ds_ecmRpstAuth=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectEcmRpstAuthList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	var component = this.div_search;
        	var strColIdList = "cbo_acctGubun,cbo_application,cbo_program";
        	var strColNmList = "회계구분,업무영역,프로그램명";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false)
        	{
        		return;
        	}

        	var nRow = this.ds_program.findRow("CONCURRENT_PROGRAM_NAME", this.div_search.form.cbo_program.value);

        	this.ds_result.clearData();
        	this.ds_cmb.clearData();
        	this.ds_cmb00.clearData();
        	this.ds_cmbFilter.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "APPLICATION_SHORT_NAME", this.ds_program.getColumn(nRow, "APPLICATION_SHORT_NAME"));
        	this.ds_search.setColumn(0, "CONCURRENT_PROGRAM_NAME", this.ds_program.getColumn(nRow, "CONCURRENT_PROGRAM_NAME"));
        	this.ds_search.setColumn(0, "PORTAL_USER_ID", this.nfn_getSessionVal("gv_portalId")); //61);
        	this.ds_search.setColumn(0, "ORG_ID", this.div_search.form.cbo_acctGubun.value);
        	this.ds_search.setColumn(0, "JOB_SYS_CD", this.JOB_SYS_CD);
        	this.ds_search.setColumn(0, "P_PORTAL_USER_ID", this.nfn_getSessionVal("gv_portalId")); //61);
        	this.ds_search.setColumn(0, "P_ACCT_DIV_CD", this.ACCT_DIV_CD);
        	this.ds_search.setColumn(0, "P_JOB_SYS_CD", this.JOB_SYS_CD);

        	var sSvcID = "selectfndDescrFlexColUsageVlList";
        	var sController = "/cmsa00400/selectfndDescrFlexColUsageVlList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_result=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectfndDescrFlexColUsageVlList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	var component = this.div_search;
        	var strColIdList = "cbo_application,cbo_program";
        	var strColNmList = "업무영역,프로그램명";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false)
        	{
        		return;
        	}

        	for (var i = 0; i < this.ds_result.rowcount; i++)
        	{
        		if (this.ds_result.getColumn(i, "REQUIRED_FLAG") == "1" && this.gfn_isNull(this.ds_result.getColumn(i, "DEFAULT_VALUE")))
        		{
        			// 실행값을 입력하세요
        			this.ds_result.set_rowposition(i);
        			this.gfn_Message("IMFCM0001", "실행값", "info", "ok");
        			return;
        		}
        	}

        	var nRow = this.ds_program.findRow("CONCURRENT_PROGRAM_NAME", this.div_search.form.cbo_program.value);

        	this.ds_send.clearData();
        	this.ds_send.addRow();
        	this.ds_send.setColumn(0, "P_PORTAL_USER_ID", this.nfn_getSessionVal("gv_portalId")); //61);	//	this.nfn_getSessionVal("gv_portalId"));
        	this.ds_send.setColumn(0, "P_ACCT_DIV_CD", this.div_search.form.cbo_acctGubun.value);
        	this.ds_send.setColumn(0, "P_JOB_SYS_CD", this.JOB_SYS_CD);
        	this.ds_send.setColumn(0, "P_FND_INITIALIZE", "Y");
        	this.ds_send.setColumn(0, "P_WAIT_YN", "N");
        	this.ds_send.setColumn(0, "P_WAIT_SECOND", 0);
        	// (this.ds_program.getColumn(nRow,"APPLICATION_SHORT_NAME"));
        	this.ds_send.setColumn(0, "APPLICATION", this.ds_program.getColumn(nRow, "APPLICATION_SHORT_NAME"));
        	this.ds_send.setColumn(0, "PROGRAM", this.ds_program.getColumn(nRow, "CONCURRENT_PROGRAM_NAME"));
        	this.ds_send.setColumn(0, "DESCRIPTION", this.ds_program.getColumn(nRow, "CONCURRENT_PROGRAM_NAME"));

        	for (var i = 0; i < this.ds_result.rowcount; i++)
        	{
        		if (this.nfn_getCntOfColNm(this.ds_send, "ARGUMENT" + (i + 1)) == 0)
        		{
        			this.ds_send.addColumn("ARGUMENT" + (i + 1), "string");
        		}
        		this.ds_send.addColumn("ARGUMENT" + (i + 1), "string");
        		this.ds_send.setColumn(0, "ARGUMENT" + (i + 1), this.ds_result.getColumn(i, "VALUE"));
        	}

        	var sSvcID = "executeEcmConcurrentPkgRequest";
        	var sController = "/cmsa00400/executeEcmConcurrentPkgRequest.do";
        	var sInDatasets = "INPUT=ds_send:U";
        	var sOutDatasets = "ds_recv=output";

        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "executeEcmConcurrentPkgRequest");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 초기화
         */
        this.div_search_btn_clear_onclick = function (obj, e)
        {
        	this.div_search.form.cbo_acctGubun.set_value(null);
        	this.div_search.form.cbo_application.set_value(null);
        	this.div_search.form.cbo_program.set_value(null);
        	this.ds_result.clearData();
        };



        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		if (trId.substring(0, 6) == "select")
        		{
        			this.gfn_Message("SMCMM0005", trId + errMsg, "error", "ok");
        		}
        		else
        		{
        			this.gfn_Message("EMFCM0001", trId + errMsg, "error", "ok");
        		}
        	}
        	else
        	{
        		if (trId == "selectFndApplicationVlList")
        		{
        			this.nfn_InsSelAllInDs(this.div_search.form.cbo_application, "선택");
        		}
        		else if (trId == "selectAcctGubunList")
        		{
        			this.nfn_InsSelAllInDs(this.div_search.form.cbo_acctGubun, "선택");
        		}
        		else if (trId == "selectFndConcurrentProgramsVlList")
        		{
        			this.nfn_InsSelAllInDs(this.div_search.form.cbo_program, "선택");
        		}
        		else if (trId == "selectfndDescrFlexColUsageVlList")
        		{
        			// 정상적으로 조회된 후 set_cssclass
        			this.div_search.form.cbo_acctGubun.set_cssclass("essential");
        			this.div_search.form.cbo_application.set_cssclass("essential");
        			this.div_search.form.cbo_program.set_cssclass("essential");
        			trace(this.ds_result.saveXML());
        			this.fn_setRowQry();
        			// trace("after fn_setRowQry-->"+this.ds_result.saveXML());
        		}
        		else if (trId.indexOf("selectDefaultValue") > -1)
        		{
        			var defaultValue = this.ds_recvValue.getColumn(0, "DEFAULT_VALUE");
        			var row = nexacro.toNumber(trId.substring(18));
        			var validationType = this.ds_result.getColumn(row, "VALIDATION_TYPE");
        			var defaultType = this.ds_result.getColumn(row, "DEFAULT_TYPE");
        			var defaultValue2 = this.ds_result.getColumn(row, "DEFAULT_VALUE2");
        			var valueSet = this.ds_result.getColumn(row, "VALUE_SET");

        			// if(validationType=='F'||(defaultType=='P' && defaultValue2=='MFG_ORGANIZATION_ID')||(validationType=='I' && valueSet !="KP_DEPT")){
        			if (validationType == 'F' || (validationType == 'I' && valueSet != "KP_DEPT") || (defaultType == 'P' && defaultValue2 != "MFG_ORGANIZATION_ID"))
        			{
        				this.ds_cmbFilter.filter("");
        				var cmbRow = this.ds_cmbFilter.findRowExpr("LOOKUP_CODE=='" + defaultValue + "' || MEANING=='" + defaultValue + "'");
        				trace("row-->" + row + "cmbRow-->" + cmbRow + " LOOKUP_CODE=='" + defaultValue + "' || MEANING=='" + defaultValue + "'");
        				if (cmbRow < 0)
        				{
        					// 콤보에 값이 없으면 skip;
        					this.ds_result.setColumn(row, "DEFAULT_VALUE", defaultValue);
        				}
        				else
        				{
        					this.ds_result.setColumn(row, "VALUE", this.ds_cmbFilter.getColumn(cmbRow, "LOOKUP_CODE"));
        					this.ds_result.setColumn(row, "DEFAULT_VALUE", this.ds_cmbFilter.getColumn(cmbRow, "LOOKUP_CODE"));
        				}
        			}
        			else
        			{
        				this.ds_result.setColumn(row, "DEFAULT_VALUE", defaultValue);
        				this.ds_result.setColumn(row, "VALUE", defaultValue);
        			}
        			// trace("selectDefaultValue-->"+this.ds_cmb.saveXML());
        		}
        		else if (trId.indexOf("selectMakeCCmbOne") > -1)
        		{
        			var row = nexacro.toNumber(trId.substring(17));
        			// var sql = this.ds_result.getColumn(row,"ROW_QRY");
        			this.ds_cmbFilter.filter("");
        			// if(this.ds_cmbFilter.findRow("LOOKUP_TYPE",this.ds_result.getColumn(row,"VALUE_SET"))>-1){
        			this.ds_cmb.filter("LOOKUP_TYPE=='" + this.ds_result.getColumn(row, "VALUE_SET") + "'");
        			this.ds_cmb.deleteAll();
        			this.ds_cmb.appendData(this.ds_cmb00, true);

        			this.ds_cmbFilter.filter("LOOKUP_TYPE=='" + this.ds_result.getColumn(row, "VALUE_SET") + "'");
        			this.ds_cmbFilter.deleteAll();
        			this.ds_cmbFilter.appendData(this.ds_cmb00, true);
        			// }
        			this.fn_setDefaultValue(row);


        			// this.fn_setDefaultValueUpperRow(row);
        			/*
        			 }else if(trId.indexOf("selectMakeCmb")>-1){
        			 var row = nexacro.toNumber(trId.substring(13));
        			 this.fn_setDefaultValue(row);
        			 //}else if(trId.substring(0,22) == "selectUserQryListValue"){
        			 //	this.ds_result.setColumn(parseInt(trId.substring(22)),"DEFAULT_VALUE",this.ds_recvValue.getColumn(0,"DEFAULT_VALUE"));
        			 //	this.ds_result.setColumn(parseInt(trId.substring(22)),"VALUE",this.ds_recvValue.getColumn(0,"DEFAULT_VALUE"));
        			 */
        		}
        		else if (trId == "executeEcmConcurrentPkgRequest")
        		{
        			if (this.ds_recv.getColumn(0, "X_REQ_STATUS") == 'E')
        			{
        				this.gfn_Message("SMCMM0012", new Array("프로시져 실행 ", this.ds_recv.getColumn(0, "X_REQ_MSG")), "error", "ok");
        			}
        			else
        			{
        				this.gfn_Message("IMCMM0005", null, "info", "ok");
        			}
        			// trace(this.ds_recv.saveXML());
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/
        // 팝업 Callback
        this.fn_popupAfter = function (sPopupId, Variant)
        {
        	if (sPopupId == "P00143")
        	{
        		if (this.nfn_isNull(this.fv_rtnValue))
        		{
        			return;
        		}
        		trace("this.fv_rtnValue-->" + this.fv_rtnValue);
        		// this.ds_result.setColumn(this.ds_result.rowposition,"DEFAULT_VALUE",this.fv_rtnValue[1]);
        		this.ds_result.setColumn(this.ds_result.rowposition, "VALUE", this.fv_rtnValue[1]);
        	}
        };

        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/
        this.fn_setRowQry = function ()
        {
        	var j = 0;
        	var k = 0;
        	var rowQry = "";
        	var value = "";
        	var defaultValue = "";
        	var defaultValue2 = "";
        	for (var i = 0; i < this.ds_result.rowcount; i++)
        	{
        		var valueSet = this.ds_result.getColumn(i, "VALUE_SET");
        		defaultValue2 = this.ds_result.getColumn(i, "DEFAULT_VALUE2");
        		valueSet = valueSet.toUpperCase();
        		rowQry = "";
        		if (this.ds_result.getColumn(i, "VALIDATION_TYPE") == "F")
        		{
        			if (valueSet == "ECM_ACCT_DIV_CD")
        			{
        				this.ds_result.setColumn(i, "DEFAULT_VALUE", this.ACCT_DIV_CD);
        			}
        			if (valueSet == "ECM_ACCT_ORG_ID")
        			{
        				this.ds_result.setColumn(i, "DEFAULT_VALUE", this.ORG_ID);
        			}
        			if (valueSet == "ECM_PORTAL_USER")
        			{
        				this.ds_result.setColumn(i, "DEFAULT_VALUE", this.nfn_getSessionVal("gv_portalId"));
        			}

        			rowQry = this.ds_result.getColumn(i, "QRY");
        			this.ds_result.setColumn(i, "ROW_QRY", rowQry);
        		}
        		else if (this.ds_result.getColumn(i, "DEFAULT_TYPE") == "P" && this.ds_result.getColumn(i, "DEFAULT_VALUE2") == "MFG_ORGANIZATION_ID")
        		{
        			// rowQry = "SELECT '"+ this.ds_result.getColumn(i,"VALUE_SET") +"' AS LOOKUP_TYPE, TO_CHAR(ORGANIZATION_ID) AS LOOKUP_CODE,ORGANIZATION_NAME AS MEANING "
        			// + " FROM ORG_ORGANIZATION_DEFINITIONS WHERE OPERATING_UNIT ="+this.ds_ADSEL.lookup("ACCT_DIV_CD",this.div_search.cbo_acctGubun.value,"ORG_ID");
        			// this.ds_result.setColumn(i,"ROW_QRY",rowQry);
        		}
        		else if (this.ds_result.getColumn(i, "VALIDATION_TYPE") == "I" && valueSet != "KP_DEPT")
        		{
        			rowQry = "SELECT '" + this.ds_result.getColumn(i, "VALUE_SET") + "' AS LOOKUP_TYPE, TO_CHAR(FFVV.FLEX_VALUE) AS LOOKUP_CODE,FFVV.DESCRIPTION AS MEANING "
        				 + " FROM FND_FLEX_VALUE_SETS FFVS,FND_FLEX_VALUES_VL FFVV "
        				 + " WHERE FFVS.FLEX_VALUE_SET_ID = FFVV.FLEX_VALUE_SET_ID "
        				 + " AND TRUNC(SYSDATE) BETWEEN NVL(FFVV.start_date_active,TRUNC(SYSDATE)) AND NVL(FFVV.end_date_active,TRUNC(SYSDATE)) "
        				 + " AND FFVV.ENABLED_FLAG = 'Y'"
        				 + " AND FFVS.FLEX_VALUE_SET_NAME = '" + this.ds_result.getColumn(i, "VALUE_SET") + "'";
        			this.ds_result.setColumn(i, "ROW_QRY", rowQry);
        			if (valueSet == "KP_COMPANY")
        			{
        				this.ds_result.setColumn(i, "DEFAULT_VALUE", this.ACCT_DIV_CD);
        			}
        			if (valueSet == "KP_GL_LEDGER")
        			{
        				this.ds_result.setColumn(i, "DEFAULT_VALUE", this.LEDGER_ID);
        			}
        			if (valueSet == "KP_LEDGER_GF")
        			{
        				this.ds_result.setColumn(i, "DEFAULT_VALUE", this.LEDGER_ID);
        			}
        		}
        		else if (this.ds_result.getColumn(i, "FORMAT_TYPE") == "X")
        		{
        			if (this.ds_result.getColumn(i, "DEFAULT_TYPE") == "S")
        			{
        				value = this.ds_result.getColumn(i, "VALUE");
        				value = nexacro.replaceAll(value, "/", "");
        				this.ds_result.setColumn(i, "VALUE", value);
        				this.ds_result.setColumn(i, "DEFAULT_VALUE", value);
        				this.ds_result.setColumn(i, "DEFAULT_VALUE2", value);
        			}
        			else if (this.ds_result.getColumn(i, "DEFAULT_TYPE") == "D")
        			{
        				this.ds_result.setColumn(i, "VALUE", fv_currDate.substring(0, 8));
        				this.ds_result.setColumn(i, "DEFAULT_VALUE", fv_currDate.substring(0, 8));
        				this.ds_result.setColumn(i, "DEFAULT_VALUE2", fv_currDate.substring(0, 8));
        			}
        		}
        		else if (this.ds_result.getColumn(i, "VALIDATION_TYPE") == "N" && defaultValue2 != "MFG_ORGANIZATION_ID")
        		{
        			var endUserColumnName = this.ds_result.getColumn(i, "END_USER_COLUMN_NAME");
        			switch (endUserColumnName)
        			{
        				case "I_PORTAL_USER_ID":
        					this.ds_result.setColumn(i, "DEFAULT_VALUE", this.nfn_getSessionVal("gv_portalId"));
        					this.ds_result.setColumn(i, "VALUE", this.nfn_getSessionVal("gv_portalId"));
        					break;
        				case "I_ERP_USER_ID":
        					this.ds_result.setColumn(i, "DEFAULT_VALUE", this.nfn_getSessionVal("gv_erpId"));
        					this.ds_result.setColumn(i, "VALUE", this.nfn_getSessionVal("gv_erpId"));
        					break;
        				case "I_ERP_RESP_ID":
        					this.ds_result.setColumn(i, "DEFAULT_VALUE", this.RESPONSIBILITY_ID);
        					this.ds_result.setColumn(i, "VALUE", this.RESPONSIBILITY_ID);
        					break;
        				case "I_ERP_RESP_APPL_ID":
        					this.ds_result.setColumn(i, "DEFAULT_VALUE", this.APPLICATION_ID);
        					this.ds_result.setColumn(i, "VALUE", this.APPLICATION_ID);
        					break;
        				case "p_portal_user_id":
        					this.ds_result.setColumn(i, "DEFAULT_VALUE", this.nfn_getSessionVal("gv_portalId"));
        					this.ds_result.setColumn(i, "VALUE", this.nfn_getSessionVal("gv_portalId"));
        					break;
        				case "p_company":
        					this.ds_result.setColumn(i, "DEFAULT_VALUE", this.ACCT_DIV_CD);
        					this.ds_result.setColumn(i, "VALUE", this.ACCT_DIV_CD);
        					break;
        			}
        		}
        		else if (this.ds_result.getColumn(i, "DEFAULT_TYPE") == "P")
        		{
        			if (this.ds_result.getColumn(i, "VALUE") == "fnd_profile.value('GL_SET_OF_BKS_ID')")
        			{
        				this.ds_result.setColumn(i, "VALUE", this.LEDGER_ID);
        				this.ds_result.setColumn(i, "DEFAULT_VALUE", this.LEDGER_ID);
        				// this.ds_result.setColumn(i,"DEFAULT_VALUE2",this.LEDGER_ID);
        			}
        			else if (this.ds_result.getColumn(i, "VALUE") == "fnd_profile.value('ORG_ID')")
        			{
        				this.ds_result.setColumn(i, "VALUE", this.ORG_ID);
        				this.ds_result.setColumn(i, "DEFAULT_VALUE", this.ORG_ID);
        				// this.ds_result.setColumn(i,"DEFAULT_VALUE2",this.ORG_ID);
        			}
        			else if (this.ds_result.getColumn(i, "VALUE") == "GL_SET_OF_BKS_ID")
        			{
        				this.ds_result.setColumn(i, "VALUE", this.LEDGER_ID);
        				this.ds_result.setColumn(i, "DEFAULT_VALUE", this.LEDGER_ID);
        				// this.ds_result.setColumn(i,"DEFAULT_VALUE2",this.LEDGER_ID);
        			}
        			else
        			{
        			}
        		}
        		defaultValue = this.ds_result.getColumn(i, "DEFAULT_VALUE");
        		if (!this.gfn_isNull(defaultValue))
        		{
        			if (defaultValue.toUpperCase().indexOf("SELECT") < 0)
        			{
        				this.ds_result.setColumn(i, "VALUE", defaultValue);
        			}
        			else
        			{
        				defaultValue = nexacro.replaceAll(defaultValue, ":$PROFILES$.XLA_APPL_ID:NULL", "NULL");
        				defaultValue = nexacro.replaceAll(defaultValue, ":$PROFILES$.RESP_APPL_ID", "" + this.APPLICATION_ID);
        				defaultValue = nexacro.replaceAll(defaultValue, ":$PROFILES$.GL_SET_OF_BKS_ID", "" + this.LEDGER_ID);

        				trace("defaultValue-->" + defaultValue);
        				this.ds_result.setColumn(i, "DEFAULT_VALUE", defaultValue);
        				// this.ds_result.setColumn(i,"DEFAULT_VALUE2",defaultValue);
        				// if(defaultValue.indexOf(":")<0) this.fn_setDefaultValue(i);
        			}
        		}

        		if (!this.gfn_isNull(rowQry) && rowQry.indexOf(":$") < 0)
        		{
        			type = "A";
        			this.fn_setRow(i);
        		}
        	}
        };

        this.fn_setDefaultValue = function (row)
        {
        	var j = 0;
        	var sql = this.ds_result.getColumn(row, "DEFAULT_VALUE2");
        	var defaultValue = this.ds_result.getColumn(row, "DEFAULT_VALUE");

        	var validationType = this.ds_result.getColumn(row, "VALIDATION_TYPE");
        	var defaultType = this.ds_result.getColumn(row, "DEFAULT_TYPE");
        	var defaultValue2 = this.ds_result.getColumn(row, "DEFAULT_VALUE2");
        	var valueSet = this.ds_result.getColumn(row, "VALUE_SET");
        	if (!this.gfn_isNull(defaultValue) && defaultValue.toUpperCase().indexOf("SELECT") < 0 && !this.gfn_isNull(sql) && sql.toUpperCase().indexOf(":$") < 0)
        	{
        		if (validationType == 'F' || (validationType == 'I' && valueSet != "KP_DEPT") || (defaultType == 'P' && defaultValue2 != "MFG_ORGANIZATION_ID"))
        		{
        			this.ds_cmbFilter.filter("");
        			var cmbRow = this.ds_cmbFilter.findRowExpr("LOOKUP_CODE=='" + defaultValue + "' || MEANING=='" + defaultValue + "'");
        			trace("row-->" + row + "cmbRow-->" + cmbRow + " LOOKUP_CODE=='" + defaultValue + "' || MEANING=='" + defaultValue + "'");
        			if (cmbRow < 0)
        			{
        				// 콤보에 값이 없으면 skip;
        				this.ds_result.setColumn(row, "DEFAULT_VALUE", defaultValue);
        			}
        			else
        			{
        				this.ds_result.setColumn(row, "VALUE", this.ds_cmbFilter.getColumn(cmbRow, "LOOKUP_CODE"));
        				this.ds_result.setColumn(row, "DEFAULT_VALUE", this.ds_cmbFilter.getColumn(cmbRow, "LOOKUP_CODE"));
        			}
        		}
        		else
        		{
        			this.ds_result.setColumn(row, "DEFAULT_VALUE", defaultValue);
        			this.ds_result.setColumn(row, "VALUE", defaultValue);
        		}
        		return;
        	}

        	if (row == 0 && !this.gfn_isNull(defaultValue) && defaultValue.toUpperCase().indexOf("SELECT") < 0)
        	{
        		return;
        	}
        	if (!this.gfn_isNull(defaultValue) && defaultValue.toUpperCase().indexOf("SELECT") < 0 && sql.toUpperCase().indexOf(":$") < 0)
        	{
        		return;
        	}
        	if (this.gfn_isNull(sql) || sql.toUpperCase().indexOf("SELECT") < 0)
        	{
        		return;
        	}

        	for (var i = 0; i <= row; i++)
        	{
        		var value = this.nfn_FormatNull(this.ds_result.getColumn(i, "VALUE"));
        		var valueSet = this.nfn_FormatNull(this.ds_result.getColumn(i, "VALUE_SET"));
        		trace("i-->" + i + "  fn_setDefaultValue   :$FLEX$." + valueSet + "-->" + value);
        		if (this.gfn_isNull(value) && sql.indexOf(":$FLEX$." + valueSet) > -1)
        		{
        			this.ds_result.set_rowposition(i);
        			this.ds_cmb.filter("LOOKUP_TYPE=='" + this.ds_result.getColumn(i, "VALUE_SET") + "'");
        			if (type == "B")
        			{
        				alert("값을 입력하세요");
        			}
        			return;
        		}
        		sql = nexacro.replaceAll(sql, ":$FLEX$." + valueSet + ":NULL", "'" + value + "'");
        		this.ds_cmbFilter.filter("LOOKUP_TYPE=='" + valueSet + "'");
        		sql = nexacro.replaceAll(sql, ":$FLEX$." + valueSet + ".VALUE", "'" + this.ds_cmbFilter.lookup("LOOKUP_CODE", value, "MEANING") + "'");
        		sql = nexacro.replaceAll(sql, ":$FLEX$." + valueSet + ".ID", "'" + value + "'");
        		sql = nexacro.replaceAll(sql, ":$FLEX$." + valueSet, "'" + value + "'");
        		sql = nexacro.replaceAll(sql, ":$PROFILES$.XLA_APPL_ID:NULL", "NULL");
        		sql = nexacro.replaceAll(sql, ":$PROFILES$.RESP_APPL_ID", "" + this.APPLICATION_ID);
        		sql = nexacro.replaceAll(sql, ":$PROFILES$.GL_SET_OF_BKS_ID", "" + this.LEDGER_ID);
        	}
        	// this.ds_cmb.filter("LOOKUP_TYPE=='"+this.ds_result.getColumn(this.ds_result.rowposition,"VALUE_SET")+"'");
        	sql = "SELECT (" + sql + ")  AS DEFAULT_VALUE FROM DUAL";
        	trace("sql-->" + sql);
        	if (sql.indexOf(":$") > -1)
        	{
        		return;
        	}

        	this.ds_qry.clearData();
        	this.ds_qry.addRow();
        	this.ds_qry.setColumn(0, "QUERY", sql);

        	var sSvcID = "selectDefaultValue" + row;
        	var sController = "/cmsa00400/selectUserQryList.do";
        	var sInDatasets = "INPUT=ds_qry";
        	var sOutDatasets = "ds_recvValue=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectUserQryList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs); //, "", "", false, "");
        };
        /*
         this.fn_setDefaultValueUpperRow = function(currow)
         {
         var value = this.nfn_FormatNull(this.ds_result.getColumn(currow,"VALUE"));
         var valueSet = this.nfn_FormatNull(this.ds_result.getColumn(currow,"VALUE_SET"));
         if(this.gfn_isNull(value)) return;
         for(var row=currow+1; row<this.ds_result.rowcount; row++){
         var sql = this.ds_result.getColumn(row,"DEFAULT_VALUE2");
         var defaultValue = this.ds_result.getColumn(row,"DEFAULT_VALUE");
         if(this.gfn_isNull(sql)) continue;
         if(sql.toUpperCase().indexOf("SELECT")<0){
         this.ds_result.setColumn(row,"VALUE",defaultValue);
         continue;
         }
         sql = nexacro.replaceAll(sql,":$FLEX$."+valueSet+":NULL", "'" + value + "'");
         this.ds_cmb.filter("LOOKUP_TYPE=='"+this.ds_result.getColumn(row,"VALUE_SET")+"'");
         sql = nexacro.replaceAll(sql,":$FLEX$."+valueSet+".VALUE", "'" + this.ds_cmb.lookup("LOOKUP_CODE",value,"MEANING") + "'");
         this.ds_cmb.filter("LOOKUP_TYPE=='"+this.ds_result.getColumn(this.ds_result.rowposition,"VALUE_SET")+"'");
         sql = nexacro.replaceAll(sql,":$FLEX$."+valueSet+".ID", "'" + value + "'");
         sql = nexacro.replaceAll(sql,":$FLEX$."+valueSet, "'" + value + "'");
         sql = nexacro.replaceAll(sql,":$PROFILES$.XLA_APPL_ID:NULL", "NULL");
         sql = nexacro.replaceAll(sql,":$PROFILES$.RESP_APPL_ID", ""+this.APPLICATION_ID);
         sql = nexacro.replaceAll(sql,":$PROFILES$.GL_SET_OF_BKS_ID",""+this.LEDGER_ID);

         sql = "SELECT ("+sql+")  AS DEFAULT_VALUE FROM DUAL";
         trace("UpperRow sql-->"+row+"--"+sql);
         if(sql.indexOf(":$") > -1) return;
         this.ds_qry.clearData();
         this.ds_qry.addRow();
         this.ds_qry.setColumn(0,"QUERY",sql);

         var sSvcID        = "selectDefaultValue"+row;
         var sController   = "/cmsa00400/selectUserQryList.do";
         var sInDatasets   = "INPUT=ds_qry";
         var sOutDatasets  = "ds_recvValue=output";
         var sArgs = "";
         sArgs += this.gfn_setParam("method","selectUserQryList");
         this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);//, "", "", false, "");
         }
         }

         this.fn_isExistInPrev = function(row)
         {
         if(row==0) return -1;
         var valueSet = this.ds_result.getColumn(row,"VALUE_SET");
         var rowQry = this.ds_result.getColumn(row,"ROW_QRY");
         if(this.gfn_isNull(rowQry)) return 0;
         for(var i=0; i< row; i++){
         var valueSetCurr = this.ds_result.getColumn(i,"VALUE_SET");
         if(valueSet == valueSetCurr) return 0;
         }
         return -1;
         }
         */
        /*
         this.fn_makeCmb = function(row)
         {
         var j=0;
         var sql = "";
         for(var i=0; i<= row; i++){
         var rowQry = this.ds_result.getColumn(i,"ROW_QRY");
         var valueSet = this.ds_result.getColumn(i,"VALUE_SET");
         if(this.fn_isExistInPrev(row) == 0){
         }else{
         if(!this.gfn_isNull(rowQry)){
         sql = sql + (j==0?"":" UNION ALL ") + rowQry;
         j++;
         }
         }
         }
         if(row>0){
         for(var i=row-1; i>= 0; i--){
         var value = this.nfn_FormatNull(this.ds_result.getColumn(i,"VALUE"));
         var valueSet = this.nfn_FormatNull(this.ds_result.getColumn(i,"VALUE_SET"));
         trace("i-->"+i+"  :$FLEX$."+valueSet+"-->"+value);
         if(this.gfn_isNull(value) && sql.indexOf(":$FLEX$."+valueSet)>-1){
         this.ds_result.set_rowposition(i);
         alert("값을 입력하세요");
         return -1;
         }
         sql = nexacro.replaceAll(sql,":$FLEX$."+valueSet+":NULL", "'" + value + "'");
         sql = nexacro.replaceAll(sql,":$FLEX$."+valueSet+".VALUE", "'" + this.ds_cmb.lookup("LOOKUP_CODE",value,"MEANING") + "'");
         sql = nexacro.replaceAll(sql,":$FLEX$."+valueSet+".ID", "'" + value + "'");
         sql = nexacro.replaceAll(sql,":$FLEX$."+valueSet, "'"+value+"'");
         }
         }
         trace(sql);
         sql = nexacro.replaceAll(sql,":$PROFILES$.XLA_APPL_ID:NULL", "NULL");
         sql = nexacro.replaceAll(sql,":$PROFILES$.RESP_APPL_ID", this.APPLICATION_ID);
         sql = nexacro.replaceAll(sql,":$PROFILES$.GL_SET_OF_BKS_ID",this.LEDGER_ID);

         trace("sql00-->"+sql);
         if(this.gfn_isNull(sql) || sql.indexOf(":$") > -1) return -1;
         var validationType = this.ds_result.getColumn(row,"VALIDATION_TYPE");
         var defaultType = this.ds_result.getColumn(row,"DEFAULT_TYPE");
         var defaultValue2 = this.ds_result.getColumn(row,"DEFAULT_VALUE2");
         var valueSet = this.ds_result.getColumn(row,"VALUE_SET");

         //	if(validationType=='F'||(defaultType=='P' && defaultValue2=='MFG_ORGANIZATION_ID')||(validationType=='I' && valueSet !="KP_DEPT")){
         if(validationType=='F'||(validationType=='I' && valueSet !="KP_DEPT")){
         sql = "SELECT LOOKUP_TYPE,LOOKUP_CODE,MEANING FROM ("+sql+") ORDER BY LOOKUP_TYPE,MEANING"
         this.ds_qry.clearData();
         this.ds_qry.addRow();
         this.ds_qry.setColumn(0,"QUERY",sql);

         var sSvcID        = "selectMakeCmb"+row;
         var sController   = "/cmsa00400/selectUserQryList.do";
         var sInDatasets   = "INPUT=ds_qry";
         var sOutDatasets  = "ds_cmb=output";
         var sArgs = "";
         sArgs += this.gfn_setParam("method","selectUserQryList");
         this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");
         }
         return 0;
         }
         */
        this.fn_makeCmbOne = function (row)
        {
        	var j = 0;
        	var sql = this.ds_result.getColumn(row, "ROW_QRY");
        	if (sql.indexOf(":$FLEX$.") > -1)
        	{
        		if (row > 0)
        		{
        			for (var i = row - 1; i >= 0; i--)
        			{
        				var value = this.nfn_FormatNull(this.ds_result.getColumn(i, "VALUE"));
        				var valueSet = this.nfn_FormatNull(this.ds_result.getColumn(i, "VALUE_SET"));
        				trace("i-->" + i + "  :$FLEX$." + valueSet + "-->" + value);
        				if (this.gfn_isNull(value) && sql.indexOf(":$FLEX$." + valueSet) > -1)
        				{
        					this.ds_result.set_rowposition(i);
        					this.ds_cmb.filter("LOOKUP_TYPE=='" + this.ds_result.getColumn(i, "VALUE_SET") + "'");
        					alert("값을 입력하세요");
        					return -1;
        				}
        				sql = nexacro.replaceAll(sql, ":$FLEX$." + valueSet + ":NULL", "'" + value + "'");
        				sql = nexacro.replaceAll(sql, ":$FLEX$." + valueSet + ".VALUE", "'" + this.ds_cmb.lookup("LOOKUP_CODE", value, "MEANING") + "'");
        				sql = nexacro.replaceAll(sql, ":$FLEX$." + valueSet + ".ID", "'" + value + "'");
        				sql = nexacro.replaceAll(sql, ":$FLEX$." + valueSet, "'" + value + "'");
        			}
        		}
        	}
        	sql = nexacro.replaceAll(sql, ":$PROFILES$.XLA_APPL_ID:NULL", "NULL");
        	sql = nexacro.replaceAll(sql, ":$PROFILES$.RESP_APPL_ID", this.APPLICATION_ID);
        	sql = nexacro.replaceAll(sql, ":$PROFILES$.GL_SET_OF_BKS_ID", this.LEDGER_ID);

        	trace("sql00-->" + sql);
        	if (this.gfn_isNull(sql) || sql.indexOf(":$") > -1)
        	{
        		return -1;
        	}
        	var validationType = this.ds_result.getColumn(row, "VALIDATION_TYPE");
        	var defaultType = this.ds_result.getColumn(row, "DEFAULT_TYPE");
        	var defaultValue2 = this.ds_result.getColumn(row, "DEFAULT_VALUE2");
        	var valueSet = this.ds_result.getColumn(row, "VALUE_SET");

        	// if(validationType=='F'||(defaultType=='P' && defaultValue2=='MFG_ORGANIZATION_ID')||(validationType=='I' && valueSet !="KP_DEPT")){
        	if (validationType == 'F' || (validationType == 'I' && valueSet != "KP_DEPT") || (defaultType == 'P' && defaultValue2 != "MFG_ORGANIZATION_ID"))
        	{
        		sql = "SELECT LOOKUP_TYPE,LOOKUP_CODE,MEANING FROM (" + sql + ") ORDER BY LOOKUP_TYPE,MEANING";
        		this.ds_qry.clearData();
        		this.ds_qry.addRow();
        		this.ds_qry.setColumn(0, "QUERY", sql);

        		var sSvcID = "selectMakeCCmbOne" + row;
        		var sController = "/cmsa00400/selectUserQryList.do";
        		var sInDatasets = "INPUT=ds_qry";
        		var sOutDatasets = "ds_cmb00=output";
        		var sArgs = "";
        		sArgs += this.gfn_setParam("method", "selectUserQryList");
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs); //, "", "", false, "");
        	}
        	// return 0;
        };

        this.fn_setRow = function (row)
        {
        	var defaultValue = this.ds_result.getColumn(row, "DEFAULT_VALUE");
        	var valueSet = this.ds_result.getColumn(row, "VALUE_SET");
        	var validationType = this.ds_result.getColumn(row, "VALIDATION_TYPE");
        	var defaultType = this.ds_result.getColumn(row, "DEFAULT_TYPE");
        	var defaultValue2 = this.ds_result.getColumn(row, "DEFAULT_VALUE2");
        	/*
        	 if(!this.gfn_isNull(defaultValue) &&!this.gfn_isNull(defaultValue2) && defaultValue2.indexOf(":$")<0){
        	 if(validationType=='F'||(validationType=='I' && valueSet !="KP_DEPT")||(defaultType=='P' && defaultValue2 !="MFG_ORGANIZATION_ID")){
        	 var cmbRow = this.ds_cmbFilter.findRowExpr("LOOKUP_CODE=='"+defaultValue+"' || MEANING=='"+defaultValue+"'");
        	 trace("row00-->"+row+"cmbRow-->"+cmbRow+" LOOKUP_CODE=='"+defaultValue+"' || MEANING=='"+defaultValue+"'");
        	 if(cmbRow <0){//콤보에 값이 없으면 skip;
        	 this.ds_result.setColumn(row,"DEFAULT_VALUE",defaultValue);
        	 }else{
        	 this.ds_result.setColumn(row,"VALUE",this.ds_cmbFilter.getColumn(cmbRow,"LOOKUP_CODE"));
        	 this.ds_result.setColumn(row,"DEFAULT_VALUE",this.ds_cmbFilter.getColumn(cmbRow,"LOOKUP_CODE"));
        	 }
        	 }else{
        	 this.ds_result.setColumn(row,"VALUE", defaultValue);
        	 }
        	 }
        	 */
        	// if(validationType=='F'||(defaultType=='P' && defaultValue2=='MFG_ORGANIZATION_ID')||(validationType=='I' && valueSet !="KP_DEPT")){
        	if (validationType == 'F' || (validationType == 'I' && valueSet != "KP_DEPT") || (defaultType == 'P' && defaultValue2 != "MFG_ORGANIZATION_ID"))
        	{
        		// trace("ds_cmb-->"+this.ds_cmb.saveXML());
        		var sql = this.ds_result.getColumn(row, "ROW_QRY");
        		this.ds_cmbFilter.filter("");
        		if (this.ds_cmbFilter.findRow("LOOKUP_TYPE", valueSet) < 0 || sql.indexOf(":$FLEX$.") > -1)
        		{
        			this.ds_cmb.filter("LOOKUP_TYPE=='" + valueSet + "'");
        			this.fn_makeCmbOne(row);
        			return;
        		}
        		else
        		{
        			this.ds_cmb.filter("LOOKUP_TYPE=='" + valueSet + "'");
        			this.fn_setDefaultValue(row);
        		}
        		/*
        		 if(rslt==0){
        		 trace("LOOKUP_TYPE=='"+this.ds_result.getColumn(row,"VALUE_SET")+"'");
        		 this.ds_cmb.filter("LOOKUP_TYPE=='"+this.ds_result.getColumn(row,"VALUE_SET")+"'");
        		 return;
        		 }
        		 */
        	}
        	else
        	{
        		this.fn_setDefaultValue(row);
        		// this.fn_setDefaultValueUpperRow(row);
        	}
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.grd_result_oncellclick = function (obj, e)
        {
        	if (this.nfn_isEqualCol(obj, e.cell, "VALUE"))
        	{
        		type = "B";
        		this.fn_setRow(e.row);
        	}
        };

        this.ds_result_onvaluechanged = function (obj, e)
        {
        	if (e.newvalue == e.oldvalue)
        	{
        		return;
        	}
        	// if(e.columnid=="DEFAULT_VALUE"){
        	// this.ds_result.setColumn(e.row,"VALUE",e.newvalue);
        	// }
        	if (e.columnid == "VALUE")
        	{
        		if (e.newvalue == null)
        		{
        			return;
        		}
        		for (var i = e.row + 1; i < obj.rowcount; i++)
        		{
        			var rowQry = this.ds_result.getColumn(i, "ROW_QRY");
        			var validationType = this.ds_result.getColumn(i, "VALIDATION_TYPE");
        			var valueSet = this.ds_result.getColumn(i, "VALUE_SET");
        			var defaultType = this.ds_result.getColumn(i, "DEFAULT_TYPE");
        			var defaultValue2 = this.ds_result.getColumn(i, "DEFAULT_VALUE2");

        			if (validationType == 'F' || (validationType == 'I' && valueSet != "KP_DEPT") || (defaultType == 'P' && defaultValue2 != "MFG_ORGANIZATION_ID"))
        			{
        				if (!this.gfn_isNull(rowQry) && rowQry.indexOf(":$FLEX$.") > -1)
        				{
        					this.ds_result.setColumn(i, "VALUE", "");
        				}
        			}
        		}
        	}
        };

        this.div_search_cbo_acctGubun_onitemchanged = function (obj, e)
        {
        	this.ds_result.clearData();

        	var nRow = e.postindex;
        	this.ACCT_DIV_CD = this.ds_acctGubun.getColumn(nRow, "ACCT_DIV_CD"); //회계구분코드 가져오기
        	this.ACCT_GUBUN_ID = this.ds_acctGubun.getColumn(nRow, "ACCT_GUBUN_ID"); //회계구분ID 가져오기
        	this.LEDGER_ID = this.ds_acctGubun.getColumn(nRow, "LEDGER_ID"); //LEDGER ID(SetOfBooksId) 가져오기
        	this.ORG_ID = this.ds_acctGubun.getColumn(nRow, "ORG_ID"); //ORG_ID 가져오기

        	trace("this.ACCT_DIV_CD-->" + this.ACCT_DIV_CD);
        	trace("this.ACCT_GUBUN_ID-->" + this.ACCT_GUBUN_ID);
        	trace("this.LEDGER_ID-->" + this.LEDGER_ID);
        	trace("this.ORG_ID-->" + this.ORG_ID);
        };

        this.div_search_cbo_application_onitemchanged = function (obj, e)
        {
        	var jobSysCd = this.ds_application.lookup("REQUEST_GROUP_ID", e.postvalue, "APPLICATION_SHORT_NAME");
        	this.ds_ecmRpstAuth.filter("JOB_SYS_CD=='" + jobSysCd + "'");
        	this.JOB_SYS_CD = jobSysCd;
        	this.RESPONSIBILITY_ID = this.ds_ecmRpstAuth.lookup("ACCT_GUBUN_ID", this.ACCT_GUBUN_ID, "RESPONSIBILITY_ID"); //RESPONSIBILITY_ID 가져오기
        	this.APPLICATION_ID = this.ds_ecmRpstAuth.lookup("ACCT_GUBUN_ID", this.ACCT_GUBUN_ID, "APPLICATION_ID"); //APPLICATION_ID 가져오기

        	trace("this.JOB_SYS_CD-->" + this.JOB_SYS_CD);
        	trace("this.ACCT_DIV_CD-->" + this.ACCT_DIV_CD);
        	trace("this.ACCT_GUBUN_ID-->" + this.ACCT_GUBUN_ID);
        	trace("this.LEDGER_ID-->" + this.LEDGER_ID);
        	trace("this.ORG_ID-->" + this.ORG_ID);
        	trace("this.RESPONSIBILITY_ID-->" + this.RESPONSIBILITY_ID);
        	trace("this.APPLICATION_ID-->" + this.APPLICATION_ID);

        	this.ds_result.clearData();
        	var requestGroupId = this.div_search.form.cbo_application.value;
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "REQUEST_GROUP_ID", requestGroupId);

        	var sSvcID = "selectFndConcurrentProgramsVlList";
        	var sController = "/cmsa00400/selectFndConcurrentProgramsVlList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_program=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectFndConcurrentProgramsVlList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.div_search_cbo_program_onitemchanged = function (obj, e)
        {
        	this.ds_result.clearData();
        };

        this.grd_result_onexpandup = function (obj, e)
        {
        	if (this.nfn_isEqualCol(obj, e.col, "VALUE"))
        	{
        		var oArg = null;
        		this.gfn_openPopup("P00143", "ecmcm::CMPU00100P.xfdl", oArg, "");
        	}
        };


        this.fn_print = function (obj, e)
        {
        	var component = this.div_search;
        	var strColIdList = "cbo_application,cbo_program";
        	var strColNmList = "업무영역,프로그램명";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false)
        	{
        		return;
        	}

        	if (!this.gfn_GridKeyCheck(this.grd_result, ["DEFAULT_VALUE"]))
        	{
        		return;
        	}

        	this.ds_list.clearData();
        	this.ds_list.addRow();
        	for (var i = 0; i < this.ds_result.rowcount; i++)
        	{
        		var nRow = this.ds_list.addRow();
        		this.ds_list.setColumn(nRow, "code", this.ds_result.getColumn(i, "END_USER_COLUMN_NAME"));
        		this.ds_list.setColumn(nRow, "value", this.ds_result.getColumn(i, "VALUE"));
        	}

        	var reportPath = "/crf/fcm/" + this.div_search.form.cbo_program.value + ".crf";
        	trace(this.ds_list.saveXML());

        	// rexpert OofData 생성
        	var strField = this.gfn_fieldData(this.ds_list, "code", "value");
        	/* crf 확장자 파일은 'crf/프로젝트명(ex:cmd)/업무명/파일명.crf' 형식으로 처리 */
        	var strXML = this.gfn_getOofSqlData(reportPath, strField, "report", "DFCM");
        	var oArg = {
        		arg1 : "Rexpert modeless 실행 샘플",
        		strXML : strXML
        	};

        	// 사이즈 조절이 필요할 때는 autosize옵션과 함께 width, height 값으로 처리.
        	var sOption = "autosize=false,width=1200,height=900,titletext=Rexpert샘플,modeless=true";

        	this.gfn_rexpertPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.Static00.addEventHandler("onclick",this.Static10_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static10_onclick,this);
            this.div_search.form.cbo_application.addEventHandler("onitemchanged",this.div_search_cbo_application_onitemchanged,this);
            this.div_search.form.cbo_program.addEventHandler("onitemchanged",this.div_search_cbo_program_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_search.form.cbo_acctGubun.addEventHandler("onitemchanged",this.div_search_cbo_acctGubun_onitemchanged,this);
            this.div_search.form.btn_clear.addEventHandler("onclick",this.div_search_btn_clear_onclick,this);
            this.grd_result.addEventHandler("oncellclick",this.grd_result_oncellclick,this);
            this.grd_result.addEventHandler("onexpandup",this.grd_result_onexpandup,this);
            this.ds_result.addEventHandler("onvaluechanged",this.ds_result_onvaluechanged,this);
        };
        this.loadIncludeScript("CMSA00600M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
