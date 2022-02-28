(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMLM01140M");
            this.set_titletext("메뉴 이용로그 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mLog", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RNUM\" type=\"INT\" size=\"10\"/><Column id=\"PORTAL_USER_ID\" type=\"INT\" size=\"10\"/><Column id=\"CREATE_USER_NM\" type=\"STRING\" size=\"100\"/><Column id=\"MENU_COURS_NM\" type=\"STRING\" size=\"4000\"/><Column id=\"CNCT_IP\" type=\"STRING\" size=\"50\"/><Column id=\"LGN_DTM\" type=\"STRING\" size=\"50\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"3\"/><Column id=\"JOB_SYS_NM\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jobSysNm", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mLogCount", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mLogExcel", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SQL_NAME\" type=\"string\" size=\"32\"/><Column id=\"IVL_INFO_LOG_ID\" type=\"bigdecimal\" size=\"16\"/><Column id=\"REQ_FULL_URL\" type=\"string\" size=\"32\"/><Column id=\"PORTAL_USER_ID\" type=\"bigdecimal\" size=\"16\"/><Column id=\"LGN_LOG_ID\" type=\"bigdecimal\" size=\"16\"/><Column id=\"PGM_NM\" type=\"string\" size=\"32\"/><Column id=\"QRY_CND\" type=\"string\" size=\"32\"/><Column id=\"LGN_IP\" type=\"string\" size=\"32\"/><Column id=\"RM\" type=\"string\" size=\"32\"/><Column id=\"REQ_URI\" type=\"string\" size=\"32\"/><Column id=\"QRY_RSLT_CNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"SAVE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"SQL_SNTENC\" type=\"string\" size=\"32\"/><Column id=\"FILE_SIZE\" type=\"bigdecimal\" size=\"16\"/><Column id=\"JOB_SYS_CD\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","36",null,"67","0",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","20","35","98","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("페이지당 검색수");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            obj.set_textAlign("right");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","97","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            obj.set_textAlign("right");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static24","264","35","98","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("검색기준");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            obj.set_textAlign("right");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbo_search","372","35","110","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_cbo_search_innerdataset = new nexacro.NormalDataset("Div00_form_cbo_search_innerdataset", obj);
            Div00_form_cbo_search_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">MENU_NM</Col><Col id=\"datacolumn\">메뉴명</Col></Row><Row><Col id=\"codecolumn\">USER_NM</Col><Col id=\"datacolumn\">사용자명</Col></Row><Row><Col id=\"codecolumn\">CNCT_IP</Col><Col id=\"datacolumn\">접속IP</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_cbo_search_innerdataset);
            obj.set_text("전체");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_search","485","35","114","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_maxlength("50");
            obj.getSetter("lengthunit").set("utf8");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"8","58","20","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_CRUD_Search");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mLog","0","137",null,null,"0","160",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_readonly("true");
            obj.set_autoenter("none");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("none");
            obj.set_binddataset("ds_mLog");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_font("9pt \"Dotum\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"0\"/><Column size=\"93\"/><Column size=\"149\"/><Column size=\"354\"/><Column size=\"123\"/><Column size=\"115\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"요청URI\"/><Cell col=\"2\" text=\"사용자\"/><Cell col=\"3\" text=\"메뉴 접근시간\"/><Cell col=\"4\" text=\"메뉴 경로\"/><Cell col=\"5\" text=\"로그인 시간\"/><Cell col=\"6\" text=\"로그인 IP\"/><Cell col=\"7\" text=\"요청전체URL\"/><Cell col=\"8\" text=\"저장파일명\"/><Cell col=\"9\" text=\"파일사이즈\"/></Band><Band id=\"body\"><Cell text=\"bind:RNUM\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:REQ_URI\"/><Cell col=\"2\" text=\"bind:CREATE_USER_NM\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"3\" text=\"bind:CREATION_DATE\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:MENU_COURS_NM\"/><Cell col=\"5\" text=\"bind:LGN_DTM\"/><Cell col=\"6\" text=\"bind:CNCT_IP\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"7\" text=\"bind:REQ_FULL_URL\"/><Cell col=\"8\" text=\"bind:SAVE_FILE_NM\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"9\" text=\"bind:FILE_SIZE\" textAlign=\"center\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excelDn",null,"0","110","20","140",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("파일다운로드");
            obj.set_cssclass("btn_File_Down");
            obj.set_tooltiptext("파일다운로드");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("sta_totCnt",null,"114","66","21","27",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("0");
            obj.set_readonly("true");
            obj.getSetter("mask").set("#,###");
            obj.set_background("rgba(255,255,255,1)");
            obj.set_border("1px none rgba(204,204,204,1)");
            obj.set_textAlign("right");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","304",null,"313","10",null,"150",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Div("div_page","35.00%",null,"494","20",null,"130",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_url("common::com_paging.xfdl");
            obj.set_background("transparent");
            obj.set_color("rgba(68,68,68,1)");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","304",null,"313","20",null,"130",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("페이징처리영역");
            obj.set_visible("false");
            obj.set_background("lightskyblue");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","304",null,"313","10",null,"120",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","10","576","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static12",null,"21","170","5","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static81",null,"97","168","13","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("13");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","0","103","168","15",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","821","27","20","41",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static79",null,"27","118","10","11",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static08",null,"58","118","10","11",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static07",null,"23","10","53","11",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1","36","20","63",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","1","58","130","10",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","1","89","130","10",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","115","59","10","41",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_count","127","72","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var cmb_count_innerdataset = new nexacro.NormalDataset("cmb_count_innerdataset", obj);
            cmb_count_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">30</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row><Row><Col id=\"codecolumn\">500</Col><Col id=\"datacolumn\">500</Col></Row></Rows>");
            obj.set_innerdataset(cmb_count_innerdataset);
            obj.set_text("10");
            obj.set_value("10");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_count",null,"114","31","21","104",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("(조회");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static27",null,"114","19","21","10",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("건)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static25",null,"134","170","5","10",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","237","47","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("div_startDay","127","47","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_font("9pt \"Dotum\"");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_dateformat("yyyy.MM.dd");
            this.addChild(obj.name, obj);

            obj = new Calendar("div_endDay","257","47","110","20",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_font("9pt \"Dotum\"");
            obj.set_editformat("yyyy.MM.dd");
            obj.set_dateformat("yyyy.MM.dd");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mLog_excel","0","410",null,"120","0",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_tabstop("false");
            obj.set_binddataset("ds_mLogExcel");
            obj.set_readonly("true");
            obj.set_cellsizingtype("col");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_font("9pt \"Dotum\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"88\"/><Column size=\"0\"/><Column size=\"93\"/><Column size=\"149\"/><Column size=\"354\"/><Column size=\"123\"/><Column size=\"115\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"업무시스템명\"/><Cell col=\"2\" text=\"요청URI\"/><Cell col=\"3\" text=\"사용자\"/><Cell col=\"4\" text=\"메뉴 접근시간\"/><Cell col=\"5\" text=\"메뉴 경로\"/><Cell col=\"6\" text=\"로그인 시간\"/><Cell col=\"7\" text=\"로그인 IP\"/><Cell col=\"8\" text=\"요청전체URL\"/><Cell col=\"9\" text=\"저장파일명\"/><Cell col=\"10\" text=\"파일사이즈\"/></Band><Band id=\"body\"><Cell text=\"bind:RNUM\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:JOB_SYS_NM\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:REQ_URI\"/><Cell col=\"3\" text=\"bind:CREATE_USER_NM\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:CREATION_DATE\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"5\" text=\"bind:MENU_COURS_NAME\"/><Cell col=\"6\" text=\"bind:LGN_DTM\"/><Cell col=\"7\" text=\"bind:CNCT_IP\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"8\" text=\"bind:REQ_FULL_URL\"/><Cell col=\"9\" text=\"bind:SAVE_FILE_NM\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"10\" text=\"bind:FILE_SIZE\" textAlign=\"center\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,530,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","div_startDay","value","ds_param","PRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_endDay","value","ds_param","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_paging.xfdl");
        };
        
        // User Script
        this.registerScript("CMLM01140M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: 대륜E&S 빌링시스템
         * 업무명 		: 메뉴 이용로그 조회
         * 파일명 		: CMLM01140M.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2017.10.0
         *
         * 설  명		: 업무 메뉴별 실시간 등록된 로그 목록 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2017.10.06	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/
        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        //include "lib::comLib.xjs"
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.div_page.set_visible(true);
        this.LIST_COUNT = this.cmb_count.value; //[페이징] 한페이지에 보여질 목록 건수
        this.PAGE_COUNT = 100; //[페이징] 페이지 표시 개수
        this.page;
        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.gfn_formOnLoad(obj);
        	this.fn_paging_onload(obj);

        	// excel import Grid는 초기에는 일단 안보이게...
        	this.grd_mLog_excel.set_visible(false);

        	this.div_startDay.set_value(this.gfn_addDate(this.gfn_today(), -3)); //-3일전
        	this.div_endDay.set_value(this.gfn_today()); //오늘일자
        };

        this.fn_paging_onload = function (obj)
        {
        	this.page = Eco.XComp.getUserProperty(obj, "pageNum"); //페이지 넘버 클릭시 페이지 값 전달위한 프로퍼티 세팅,
        	if (Eco.isEmpty(this.page))
        	{
        		this.page = 1;
        	}
        	// 값이 null 일때 1페이지
        	this.div_page.form.initPaging(this.LIST_COUNT, this.PAGE_COUNT, this.onChangePage, this); //디비전 속 페이지
        	this.div_page.form.setCurrentPage(this.page); //디비전 속 페이지
        };
        // 카운트 조회
        this.fn_logCount = function ()
        {
        	var div_startDay = this.div_startDay.value;
        	var div_endDay = this.div_endDay.value;
        	var cnd = this.Div00.form.cbo_search.value;
        	var text = this.Div00.form.edt_search.value;
        	if (div_startDay == "undefined" || div_startDay == undefined || div_startDay == null)
        	{
        		div_startDay = "";
        	}
        	if (div_endDay == "undefined" || div_endDay == undefined || div_endDay == null)
        	{
        		div_endDay = "";
        	}
        	if (text == "undefined" || text == null)
        	{
        		text = "";
        	}

        	var sSvcID = "selectJobMenuLogsCount";
        	var sController = "/cmlm01100/selectJobMenuLogsCount.do";
        	var sInDatasets = "";
        	var sOutDatasets = "ds_mLogCount=ds_output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", sSvcID);
        	sArgs += this.gfn_setParam("CND", cnd);
        	sArgs += this.gfn_setParam("TEXT", text);
        	sArgs += this.gfn_setParam("START_DATEC", div_startDay);
        	sArgs += this.gfn_setParam("END_DATEC", div_endDay);

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, false);
        };

        /**************************************************************************
         * 4. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_Search = function (flag)
        {
        	var div_startDay = this.div_startDay.value;
        	var div_endDay = this.div_endDay.value;
        	var cnd = this.Div00.form.cbo_search.value;
        	var text = this.Div00.form.edt_search.value;
        	if (div_startDay == "undefined" || div_startDay == undefined || div_startDay == null)
        	{
        		div_startDay = "";
        	}
        	if (div_endDay == "undefined" || div_endDay == undefined || div_endDay == null)
        	{
        		div_endDay = "";
        	}

        	trace('div_startDay=' + div_startDay + ', div_endDay=' + div_endDay);
        	if (text == "undefined" || text == null)
        	{
        		text = "";
        	}
        	/*
        	if (cnd != null && cnd != "")
        	{
        		var len = this.gfn_getLengthB(text);
        		if (len > 0 && len < 4)
        		{
        			this.gfn_Message("CheckStringLimit", "", "info"); //{0}자 이상이어야 합니다.
        			this.Div00.form.edt_search.set_cssclass("enabled_error");
        			this.Div00.form.edt_search.setFocus();
        			return;
        		}
        	}
        	*/
        	if (text != '' && cnd == '')
        	{
        		this.gfn_Message("IMCMM0252", "", "info"); //검색 기준을 선택하여 주십시오.
        		this.Div00.form.cbo_search.set_cssclass("enabled_error");
        		this.Div00.form.cbo_search.setFocus();
        		return;
        	}
        /*
        	if (div_startDay == '')
        	{
        		this.gfn_Message("IMCMM0209", "조회기간", "info"); //{0}의 시작일자가 필요합니다.
        		this.div_startDay.set_cssclass("enabled_error");
        		this.div_startDay.setFocus();
        		return;
        	}
        	if (div_endDay == '')
        	{
        		this.gfn_Message("IMCMM0210", "조회기간", "info"); //{0}의 종료일자가 필요합니다.
        		this.div_endDay.set_cssclass("enabled_error");
        		this.div_endDay.setFocus();
        		return;
        	}
        	if (div_startDay != '')
        	{
        		if (div_startDay > this.gfn_today())
        		{
        			this.gfn_Message("IMCMD0032", "조회기간", "info"); //{0} 시작일의 날짜가 잘못되었습니다.\n(미래날짜는 사용불가)
        			this.div_startDay.set_cssclass("enabled_error");
        			this.div_startDay.setFocus();
        			return;
        		}
        	}
        	if (div_endDay != '')
        	{
        		if (div_endDay > this.gfn_today())
        		{
        			this.gfn_Message("IMCMD0033", "조회기간", "info"); //{0} 종료일의 날짜가 잘못되었습니다.\n(미래날짜는 사용불가)
        			this.div_endDay.set_cssclass("enabled_error");
        			this.div_endDay.setFocus();
        			return;
        		}
        	}
        	*/
        	if (div_startDay > div_endDay)
        	{
        		this.gfn_Message("CheckStartEndDate", "조회기간", "info"); //{0} 종료일은 시작일보다 빠를 수 없습니다.
        		this.div_endDay.set_cssclass("enabled_error");
        		this.div_endDay.setFocus();
        		return;
        	}
        	// 시작일과 종료일의 일수 차이
        	var diff_day = this.gfn_diffDate2(div_startDay.toString(), div_endDay.toString());
        	trace('# gfn_diffDate2 = ' + diff_day);
        	if (Number(diff_day) > 7)
        	{
        		// 조회기간의 날짜 범위는 {0}일 이내로 제한 됩니다.
        		this.gfn_Message("DateLimit", "7", "info");
        		return;
        	}

        	this.fn_logCount(); //전체 카운트부터 가져옴.

        	var nFistPage;
        	var nLastPage;
        	if (this.page == 1)
        	{
        		nFistPage = 1;
        		nLastPage = this.page + parseInt(this.cmb_count.value) - 1;
        		// trace('his.page == 1 nLastPage=' + nLastPage);
        	}
        	else
        	{
        		nFistPage = (parseInt(this.cmb_count.value) * (this.page - 1)) + 1;
        		nLastPage = Number(nFistPage) + Number(this.cmb_count.value) - 1;
        		// trace('else nLastPage=' + nLastPage);
        	}
        	if (flag == "excel")
        	{
        		// 엑셀파일로 다운로드 저장시(옵션)
        		var sSvcID = "selectJobMenuLogsListExcel";
        		var nFistPage = 1;
        		var nLastPage = this.ds_mLogCount.getColumn(0, "CNT");
        		var sOutDatasets = "ds_mLogExcel=ds_output";
        	}
        	else
        	{
        		var sSvcID = "selectJobMenuLogsList";
        		var sOutDatasets = "ds_mLog=ds_mLog ds_mLogCount=ds_mLogCount";
        	}
        	var sController = "/cmlm01100/selectJobMenuLogsList.do";

        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", sSvcID);

        	sArgs += this.gfn_setParam("CND", cnd);
        	sArgs += this.gfn_setParam("TEXT", text);
        	sArgs += this.gfn_setParam("P_START", nFistPage);
        	sArgs += this.gfn_setParam("P_END", nLastPage);
        	sArgs += this.gfn_setParam("START_DATEC", div_startDay);
        	sArgs += this.gfn_setParam("END_DATEC", div_endDay);
        	if (flag == "excel")
        	{
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, false); //sync모드(잠시만 기다리세요.안나옴)
        	}
        	else
        	{
        		this.gfn_transaction(sSvcID, sController, "", sOutDatasets, sArgs);
        	}
        };

        this.fn_callBack = function (strSvcId, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode < 0)
        	{
        		return this.gfn_alert(strErrorMsg);
        	}

        	if (strSvcId == "selectJobMenuLogsCount")
        	{
        		this.div_page.set_visible(true);
        		var totCnt = this.ds_mLogCount.getColumn(0, "CNT");
        		// trace('*** fn_callBack() selectJobMenuLogsCount = ' + totCnt);
        		this.div_page.form.setPage(this.ds_mLogCount.getColumn(0, "CNT"));
        		this.sta_totCnt.set_value(this.ds_mLogCount.getColumn(0, "CNT"));
        		if (totCnt < LIST_COUNT)
        		{
        			this.page = 1;
        		}
        	}
        };
        /**************************************************************************
         * 5. 기타 함수 시작
         **************************************************************************/
        this.fn_searchEtr = function (obj, e)
        {
        	if (e.keycode == 13)
        	{
        		this.fn_Search('');
        	}
        };

        /* 엑셀 다운로드 버튼 클릭 */
        this.btn_exceldn_onclick = function (obj, e)
        {
        	if (this.grd_mLog.rowcount == 0)
        	{
        		// {엑셀}파일로 저장할 자료가 없습니다.
        		this.gfn_Message("IMCMM0250", "엑셀", "info");
        		return;
        	}
        	var file_name = "MENU_LOG_" + this.gfn_today();
        	if (this.gfn_Message("IMCMM0199", "엑셀파일로", "conf"))
        	{
        		// {0} 다운로드 하시겠습니까?
        		this.fn_Search("excel");
        		this.gfn_export_excel("grd_mLog_excel", "업무 이용로그", file_name); //엑셀저장시에는 별도의 dataSet+Grid
        	}
        };
        /**************************************************************************
         * 7. 페이징
         ***************************************************************************/
        /* 조회시 항상 1페이지 호출 */
        this.fn_setPageInit = function ()
        {
        	this.page = 1;
        	this.div_page.form.initPaging(this.LIST_COUNT, this.PAGE_COUNT, this.onChangePage, this);
        };

        /* 페이지 변경 시 호출됨 */
        this.onChangePage = function (page)
        {
        	Eco.XComp.setUserProperty(this, "pageNum", page);
        	this.page = page;
        	this.div_page.form.setCurrentPage(page);
        	trace('page = ' + page);
        	this.fn_Search("");
        };

        /* 콤보 박스 변경시 */
        this.cmb_count_onitemchanged = function (obj, e)
        {
        	this.LIST_COUNT = obj.value; //페이지당 조회 건수 변경 발생시 paging 화면 reload 처리
        	this.div_page.form.fn_reload(); //paging화면 초기함수 호출
        	this.fn_paging_onload(this);
        };

        this.cho_jobSys_onitemchanged = function (obj, e)
        {
        	this.page = 1;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Div00.form.edt_search.addEventHandler("onkeydown",this.fn_searchEtr,this);
            this.btn_search.addEventHandler("onclick",this.fn_Search,this);
            this.btn_excelDn.addEventHandler("onclick",this.btn_exceldn_onclick,this);
            this.Static18.addEventHandler("onclick",this.Static18_onclick,this);
            this.cmb_count.addEventHandler("onitemchanged",this.cmb_count_onitemchanged,this);
            this.div_startDay.addEventHandler("onchanged",this.fn_preDateChanged,this);
            this.div_startDay.addEventHandler("oneditclick",this.cal_logStrt_oneditclick,this);
            this.div_endDay.addEventHandler("onchanged",this.fn_postDateChanged,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("CMLM01140M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
