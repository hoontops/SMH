(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSA00800M");
            this.set_titletext("보고서 실행(전체)");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
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


            obj = new Dataset("ds_program", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BIZ_TYPE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RPT_SET_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RPT_SET_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RPT_SET_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"APPLICATION_ID\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_search", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"REQUEST_GROUP_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"APPLICATION_SHORT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONCURRENT_PROGRAM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PORTAL_USER_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORG_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMB_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENABLED_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"P_PORTAL_USER_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"P_ACCT_DIV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"P_JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_SET_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"APPLICATION_ID\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_reportSet", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"RPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RPT_PGM_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RPT_SET_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"APPLICATION_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result1", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"COL_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"COL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PAR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DFT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DFT_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"PAR_LABEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0%","3",null,"21","87.17%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("보고서 실행");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","138","118","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("실행조건 입력");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","31",null,"100","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","40","69","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("업무영역");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","20","71","79","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("보고서세트");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"7","58","21","65",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_CRUD_Search");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static42","20","9","69","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("회계구분");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_visible("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"7","52","21","10",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_basic");
            obj.set_tooltiptext("초기화");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static22","98.9%","0",null,"43","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","0","0","200","10",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static69","99","0","10",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","0","31","200","10",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09","0","62","200","10",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static10","0","0","20",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0",null,"200","10",null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_application","109","41","570","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_codecolumn("APPLICATION_SHORT_NAME");
            obj.set_cssclass("essential");
            obj.set_innerdataset("ds_application");
            obj.set_datacolumn("REQUEST_GROUP");
            obj.set_type("dropdown");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_program","109","71","570","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_program");
            obj.set_codecolumn("RPT_SET_ID");
            obj.set_datacolumn("RPT_SET_NAME");
            obj.set_cssclass("essential");
            obj.set_type("dropdown");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static33","21","9","10","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_text("*");
            obj.set_color("rgba(212,75,65,1)");
            obj.set_font("bold 9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","21","40","10","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_text("*");
            obj.set_color("rgba(212,75,65,1)");
            obj.set_font("bold 9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","21","69","10","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_text("*");
            obj.set_color("rgba(212,75,65,1)");
            obj.set_font("bold 9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_acctGubun","109","10","269","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_acctGubun");
            obj.set_codecolumn("LOOKUP_CODE");
            obj.set_datacolumn("MEANING");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05",null,"0","10",null,"0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","21",null,"10","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","130",null,"12","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","167",null,"10","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result","0%","165",null,"193","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_result");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"384\"/><Column size=\"104\"/><Column size=\"180\"/><Column size=\"62\"/><Column size=\"62\"/><Column size=\"123\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"실행조건\"/><Cell col=\"2\" text=\"값 선택\"/><Cell col=\"3\" text=\"실행조건값\"/><Cell col=\"4\" text=\"필수여부\"/><Cell col=\"5\" text=\"숨김여부\"/><Cell col=\"6\" text=\"타입\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:FORM_LEFT_PROMPT\"/><Cell col=\"2\" displaytype=\"expr:VALUE_SET==&apos;KP_DEPT&apos;?&quot;normal&quot; : FORMAT_TYPE==&apos;X&apos;?&quot;date&quot; : VALIDATION_TYPE==&apos;F&apos;||(DEFAULT_TYPE==&apos;P&apos; &amp;&amp; DEFAULT_VALUE2==&apos;MFG_ORGANIZATION_ID&apos;)||VALIDATION_TYPE==&apos;I&apos; ? &quot;combo&quot; : &quot;normal&quot;\" edittype=\"expr:VALUE_SET==&apos;KP_DEPT&apos;?&quot;none&quot; : FORMAT_TYPE==&apos;X&apos;?&quot;date&quot; : VALIDATION_TYPE==&apos;F&apos;||(DEFAULT_TYPE==&apos;P&apos; &amp;&amp; DEFAULT_VALUE2==&apos;MFG_ORGANIZATION_ID&apos;)||VALIDATION_TYPE==&apos;I&apos; ? &quot;combo&quot; : &quot;normal&quot;\" text=\"bind:DEFAULT_VALUE\" expandimage=\"URL(&apos;image::btn_find_d.png&apos;)\" combodataset=\"ds_cmb\" combocodecol=\"LOOKUP_CODE\" combodatacol=\"MEANING\" combodisplay=\"display\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" text=\"bind:VALUE\"/><Cell col=\"4\" displaytype=\"checkbox\" text=\"bind:REQUIRED_FLAG\" textAlign=\"center\"/><Cell col=\"5\" displaytype=\"checkbox\" text=\"bind:DISPLAY_FLAG\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:DEFAULT_TYPE_DESC\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","372","117","21",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("보고서 선택");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result00","0","399",null,"220","10",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("ds_reportSet");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"384\"/><Column size=\"400\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"선택\"/><Cell col=\"1\" text=\"보고서명\"/><Cell col=\"2\" text=\"실행조건값\"/><Cell col=\"3\" text=\"출력\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:USE_FLAG\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:RPT_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:VALUE\" textAlign=\"left\"/><Cell col=\"3\" expandimage=\"URL(&apos;image::btn_WF_TabIcon1_N.png&apos;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0.11%","358",null,"15","1.2%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"0","64","21","10",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("전체출력");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_tooltiptext("전체출력");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_result01","0","166",null,"193","10",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_binddataset("ds_result1");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"384\"/><Column size=\"104\"/><Column size=\"200\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"실행조건\"/><Cell col=\"2\" text=\"값 선택\"/><Cell col=\"3\" text=\"기본값\"/><Cell col=\"4\" text=\"실행조건값\"/></Band><Band id=\"body\"><Cell text=\"bind:COL_SEQ\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PAR_LABEL\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"normal\" expandimage=\"URL(&apos;image::btn_find_d.png&apos;)\" combodataset=\"ds_cmb\" combocodecol=\"LOOKUP_CODE\" combodatacol=\"MEANING\" combodisplay=\"display\" calendardisplaynulltype=\"none\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:DFT_VALUE\" textAlign=\"left\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,530,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_search.form.cbo_application","value","ds_lookupTypes","JOB_SYS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cbo_program","value","ds_lookupTypes","JOB_SYS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_search.form.cbo_acctGubun","value","ds_lookupTypes","JOB_SYS_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMSA00800M.xfdl", function() {
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
        	var strColIdList = "cbo_application,cbo_program";
        	var strColNmList = "업무영역,프로그램명";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false)
        	{
        		return;
        	}

        	var nRow = this.ds_program.findRow("RPT_SET_ID", this.div_search.form.cbo_program.value);

        	this.ds_result.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "APPLICATION_ID", this.ds_program.getColumn(nRow, "APPLICATION_ID"));
        	this.ds_search.setColumn(0, "REQUEST_SET_ID", this.ds_program.getColumn(nRow, "RPT_SET_ID"));

        	var sSvcID = "selectReportSetInput";
        	var sController = "/cmsa00400/selectReportSetInput.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_result1=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectReportSetInput");
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
        	this.ds_send.setColumn(0, "P_PORTAL_USER_ID", 61); //this.nfn_getSessionVal("gv_portalId"));
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
        			this.fn_setRowQry();
        			// trace(this.ds_result.saveXML());
        		}
        		else if (trId.indexOf("selectDefaultValue") > -1)
        		{
        			var value = this.ds_recvValue.getColumn(0, "VALUE");
        			var row = nexacro.toNumber(trId.substring(18));
        			var validationType = this.ds_result.getColumn(row, "VALIDATION_TYPE");
        			var defaultType = this.ds_result.getColumn(row, "DEFAULT_TYPE");
        			var defaultValue2 = this.ds_result.getColumn(row, "DEFAULT_VALUE2");
        			var valueSet = this.ds_result.getColumn(this.ds_result.rowposition, "VALUE_SET");

        			if (validationType == 'F' || (defaultType == 'P' && defaultValue2 == 'MFG_ORGANIZATION_ID') || (validationType == 'I' && valueSet != "KP_DEPT"))
        			{
        				var cmbRow = this.ds_cmb.findRowExpr("LOOKUP_CODE=='" + value + "' || MEANING=='" + value + "'");
        				trace("row-->" + row + " LOOKUP_CODE=='" + value + "' || MEANING=='" + value + "'");
        				if (cmbRow < 0)
        				{
        					// 콤보에 값이 없으면 skip;
        				}
        				else
        				{
        					this.ds_result.setColumn(row, "DEFAULT_VALUE", this.ds_cmb.getColumn(cmbRow, "LOOKUP_CODE"));
        					this.ds_result.setColumn(row, "VALUE", this.ds_cmb.getColumn(cmbRow, "LOOKUP_CODE"));
        				}
        			}
        			else
        			{
        				this.ds_result.setColumn(row, "VALUE", value);
        				this.ds_result.setColumn(row, "DEFAULT_VALUE", value);
        			}
        		}
        		else if (trId.indexOf("selectMakeCmb") > -1)
        		{
        			var row = nexacro.toNumber(trId.substring(13));
        			this.fn_setDefaultValue(row);
        		}
        		else if (trId.substring(0, 22) == "selectUserQryListValue")
        		{
        			this.ds_result.setColumn(parseInt(trId.substring(22)), "VALUE", this.ds_recvValue.getColumn(0, "VALUE"));
        			this.ds_result.setColumn(parseInt(trId.substring(22)), "DEFAULT_VALUE", this.ds_recvValue.getColumn(0, "VALUE"));
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
        		else if (trId == "selectReportSetInput")
        		{
        			if (this.ds_result1.rowcount < 1)
        			{
        				alert("조회된 자료가 없습니다.");
        				return;
        			}
        			this.reportSetSearch();
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
        		trace("this.fv_rtnValue[1]-->" + this.fv_rtnValue[1]);
        		this.ds_result.setColumn(this.ds_result.rowposition, "DEFAULT_VALUE", this.fv_rtnValue[2]);
        		this.ds_result.setColumn(this.ds_result.rowposition, "VALUE", this.fv_rtnValue[1]);
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

        	this.ds_list.clearData();
        	this.ds_list.addRow();
        	for (var i = 0; i < this.ds_result.rowcount; i++)
        	{
        		var nRow = this.ds_list.addRow();
        		this.ds_list.setColumn(nRow, "code", this.ds_result.getColumn(i, "END_USER_COLUMN_NAME"));
        		this.ds_list.setColumn(nRow, "value", this.ds_result.getColumn(i, "VALUE"));
        	}

        	var reportPath = "/crf/fcm/" + this.div_search.form.cbo_program.value + ".crf";
        	trace("reportPath-->" + reportPath);
        	trace(this.ds_list.saveXML());

        	/* modal
        	 //rexpert OofData 생성
        	 var strField= this.gfn_fieldData(this.ds_list, "code", "value");

        	 var strXML = this.gfn_getOofSqlData(reportPath, strField, "report", "DFCM");

        	 var oArg = {arg1:"Rexpert modal", strXML:strXML};
        	 //(oArg[1]);

        	 var sOption = "titletext=Rexpert modal,modeless=false";

        	 this.gfn_rexpertPopup("rexpertViewer", "common::com_report.xfdl", oArg, sOption);
        	 */
        	// modalless 형식
        	// rexpert OofData 생성
        	var strField = this.gfn_fieldData(this.ds_list, "code", "value");
        	var strXML = this.gfn_getOofSqlData(reportPath, strField, "report", "DFCM");

        	var oArg = {
        		arg1 : "Rexpert modeless",
        		strXML : strXML
        	};

        	// 사이즈 조절이 필요할 때는 autosize옵션과 함께 width, height 값으로 처리.
        	var sOption = "autosize=false,width=1200,height=900,titletext=Rexpert modeless,modeless=true";

        	this.gfn_rexpertPopup("rexpertViewer", "common::com_report.xfdl", oArg, sOption);
        };



        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/
        this.fn_setRowQry = function ()
        {
        	var j = 0;
        	var k = 0;
        	var rowQry = "";
        	for (var i = 0; i < this.ds_result.rowcount; i++)
        	{
        		var valueSet = this.ds_result.getColumn(i, "VALUE_SET");
        		valueSet = valueSet.toUpperCase();
        		if (this.ds_result.getColumn(i, "VALIDATION_TYPE") == "F")
        		{
        			rowQry = this.ds_result.getColumn(i, "QRY");
        			this.ds_result.setColumn(i, "ROW_QRY", rowQry);
        		}
        		else if (this.ds_result.getColumn(i, "DEFAULT_TYPE") == "P" && this.ds_result.getColumn(i, "DEFAULT_VALUE2") == "MFG_ORGANIZATION_ID")
        		{
        			rowQry = "SELECT '" + this.ds_result.getColumn(i, "VALUE_SET") + "' AS LOOKUP_TYPE, TO_CHAR(ORGANIZATION_ID) AS LOOKUP_CODE,ORGANIZATION_NAME AS MEANING "
        				 + " FROM ORG_ORGANIZATION_DEFINITIONS WHERE OPERATING_UNIT =" + this.ds_ADSEL.lookup("ACCT_DIV_CD", this.div_search.form.cbo_acctGubun.value, "ORG_ID");
        			this.ds_result.setColumn(i, "ROW_QRY", rowQry);
        		}
        		else if (this.ds_result.getColumn(i, "VALIDATION_TYPE") == "I")
        		{
        			rowQry = "SELECT '" + this.ds_result.getColumn(i, "VALUE_SET") + "' AS LOOKUP_TYPE, TO_CHAR(FFVV.FLEX_VALUE) AS LOOKUP_CODE,FFVV.DESCRIPTION AS MEANING "
        				 + " FROM FND_FLEX_VALUE_SETS FFVS,FND_FLEX_VALUES_VL FFVV "
        				 + " WHERE FFVS.FLEX_VALUE_SET_ID = FFVV.FLEX_VALUE_SET_ID "
        				 + " AND TRUNC(SYSDATE) BETWEEN NVL(FFVV.start_date_active,TRUNC(SYSDATE)) AND NVL(FFVV.end_date_active,TRUNC(SYSDATE)) "
        				 + " AND FFVV.ENABLED_FLAG = 'Y'"
        				 + " AND FFVS.FLEX_VALUE_SET_NAME = '" + this.ds_result.getColumn(i, "VALUE_SET") + "'";
        			this.ds_result.setColumn(i, "ROW_QRY", rowQry);
        		}
        		else if (this.ds_result.getColumn(i, "DEFAULT_TYPE") == "P")
        		{
        			if (this.ds_result.getColumn(i, "DEFAULT_VALUE") == "fnd_profile.value('GL_SET_OF_BKS_ID')")
        			{
        				this.ds_result.setColumn(i, "DEFAULT_VALUE", this.LEDGER_ID);
        				this.ds_result.setColumn(i, "VALUE", this.LEDGER_ID);
        				// this.ds_result.setColumn(i,"DEFAULT_VALUE2",this.LEDGER_ID);
        			}
        			else if (this.ds_result.getColumn(i, "DEFAULT_VALUE") == "fnd_profile.value('ORG_ID')")
        			{
        				this.ds_result.setColumn(i, "DEFAULT_VALUE", this.ORG_ID);
        				this.ds_result.setColumn(i, "VALUE", this.ORG_ID);
        				// this.ds_result.setColumn(i,"DEFAULT_VALUE2",this.ORG_ID);
        			}
        			else if (this.ds_result.getColumn(i, "DEFAULT_VALUE") == "GL_SET_OF_BKS_ID")
        			{
        				this.ds_result.setColumn(i, "DEFAULT_VALUE", this.LEDGER_ID);
        				this.ds_result.setColumn(i, "VALUE", this.LEDGER_ID);
        				// this.ds_result.setColumn(i,"DEFAULT_VALUE2",this.LEDGER_ID);
        			}
        			else
        			{
        			}
        		}
        		var value = this.ds_result.getColumn(i, "VALUE");
        		if (!this.gfn_isNull(value))
        		{
        			if (value.toUpperCase().indexOf("SELECT") < 0)
        			{
        				this.ds_result.setColumn(i, "DEFAULT_VALUE", this.ds_result.getColumn(i, "VALUE"));
        			}
        			else
        			{
        				value = nexacro.replaceAll(value, ":$PROFILES$.XLA_APPL_ID:NULL", "NULL");
        				value = nexacro.replaceAll(value, ":$PROFILES$.RESP_APPL_ID", this.APPLICATION_ID);
        				value = nexacro.replaceAll(value, ":$PROFILES$.GL_SET_OF_BKS_ID", this.LEDGER_ID);
        				if (value.indexOf(":") < 0)
        				{
        					this.fn_setDefaultValue(i);
        				}
        			}
        		}
        	}
        };

        this.fn_setDefaultValue = function (row)
        {
        	var j = 0;
        	var sql = this.ds_result.getColumn(row, "VALUE");
        	if (this.gfn_isNull(sql) || sql.toUpperCase().indexOf("SELECT") < 0)
        	{
        		return;
        	}
        	for (var i = 0; i <= row; i++)
        	{
        		var value = this.nfn_FormatNull(this.ds_result.getColumn(i, "DEFAULT_VALUE"));
        		var valueSet = this.nfn_FormatNull(this.ds_result.getColumn(i, "VALUE_SET"));
        		trace("i-->" + i + "  fn_setDefaultValue   :$FLEX$." + valueSet + "-->" + value);
        		if (this.gfn_isNull(value) && sql.indexOf(":$FLEX$." + valueSet) > -1)
        		{
        			this.ds_result.set_rowposition(i);
        			alert("값을 입력하세요");
        			return;
        		}
        		sql = nexacro.replaceAll(sql, ":$FLEX$." + valueSet + ":NULL", "'" + value + "'");
        		this.ds_cmb.filter("LOOKUP_TYPE=='" + valueSet + "'");
        		sql = nexacro.replaceAll(sql, ":$FLEX$." + valueSet + ".VALUE", "'" + this.ds_cmb.lookup("LOOKUP_CODE", value, "MEANING") + "'");
        		sql = nexacro.replaceAll(sql, ":$FLEX$." + valueSet + ".ID", "'" + value + "'");
        		sql = nexacro.replaceAll(sql, ":$FLEX$." + valueSet, "'" + value + "'");
        		sql = nexacro.replaceAll(sql, ":$PROFILES$.XLA_APPL_ID:NULL", "NULL");
        		sql = nexacro.replaceAll(sql, ":$PROFILES$.RESP_APPL_ID", this.APPLICATION_ID);
        		sql = nexacro.replaceAll(sql, ":$PROFILES$.GL_SET_OF_BKS_ID", this.LEDGER_ID);
        	}
        	this.ds_cmb.filter("");
        	sql = "SELECT (" + sql + ")  AS VALUE FROM DUAL";
        	trace("sql-->" + sql);
        	if (sql.indexOf(":") > -1)
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
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");
        };
        this.fn_makeCmb = function (row)
        {
        	var j = 0;
        	var sql = "";
        	for (var i = 0; i <= row; i++)
        	{
        		var rowQry = this.ds_result.getColumn(i, "ROW_QRY");
        		if (!this.gfn_isNull(rowQry) && sql.indexOf(rowQry) < 0)
        		{
        			sql = sql + (j == 0 ? "" : " UNION ALL ") + rowQry;
        			j++;
        		}
        	}

        	if (row > 0)
        	{
        		for (var i = row - 1; i >= 0; i--)
        		{
        			var value = this.nfn_FormatNull(this.ds_result.getColumn(i, "DEFAULT_VALUE"));
        			var valueSet = this.nfn_FormatNull(this.ds_result.getColumn(i, "VALUE_SET"));
        			trace("i-->" + i + "  :$FLEX$." + valueSet + "-->" + value);
        			if (this.gfn_isNull(value) && sql.indexOf(":$FLEX$." + valueSet) > -1)
        			{
        				this.ds_result.set_rowposition(i);
        				alert("값을 입력하세요");
        				return -1;
        			}
        			sql = nexacro.replaceAll(sql, ":$FLEX$." + valueSet + ":NULL", "'" + value + "'");
        			sql = nexacro.replaceAll(sql, ":$FLEX$." + valueSet + ".VALUE", "'" + this.ds_cmb.lookup("LOOKUP_CODE", value, "MEANING") + "'");
        			sql = nexacro.replaceAll(sql, ":$FLEX$." + valueSet + ".ID", "'" + value + "'");
        			sql = nexacro.replaceAll(sql, ":$FLEX$." + valueSet, "'" + value + "'");
        		}
        	}
        	trace(sql);
        	sql = nexacro.replaceAll(sql, ":$PROFILES$.XLA_APPL_ID:NULL", "NULL");
        	sql = nexacro.replaceAll(sql, ":$PROFILES$.RESP_APPL_ID", this.APPLICATION_ID);
        	sql = nexacro.replaceAll(sql, ":$PROFILES$.GL_SET_OF_BKS_ID", this.LEDGER_ID);

        	trace("sql00-->" + sql);
        	if (this.gfn_isNull(sql))
        	{
        		return -1;
        	}
        	var validationType = this.ds_result.getColumn(row, "VALIDATION_TYPE");
        	var defaultType = this.ds_result.getColumn(row, "DEFAULT_TYPE");
        	var defaultValue2 = this.ds_result.getColumn(row, "DEFAULT_VALUE2");
        	if (validationType == 'F' || (defaultType == 'P' && defaultValue2 == 'MFG_ORGANIZATION_ID') || (validationType == 'I' && valueSet != "KP_DEPT"))
        	{
        		sql = "SELECT LOOKUP_TYPE,LOOKUP_CODE,MEANING FROM (" + sql + ") ORDER BY LOOKUP_TYPE,MEANING";
        		this.ds_qry.clearData();
        		this.ds_qry.addRow();
        		this.ds_qry.setColumn(0, "QUERY", sql);

        		var sSvcID = "selectMakeCmb" + row;
        		var sController = "/cmsa00400/selectUserQryList.do";
        		var sInDatasets = "INPUT=ds_qry";
        		var sOutDatasets = "ds_cmb=output";
        		var sArgs = "";
        		sArgs += this.gfn_setParam("method", "selectUserQryList");
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");
        	}
        	return 0;
        };
        // 보고서 세트 그리드 조회
        this.reportSetSearch = function (row)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "APPLICATION_SHORT_NAME", this.div_search.form.cbo_application.value);
        	this.ds_search.setColumn(0, "REQUEST_SET_ID", this.div_search.form.cbo_program.value);
        	var sSvcID = "selectReportSet";
        	var sController = "/cmsa00400/selectReportSet.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_reportSet=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectReportSet");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.grd_result_oncellclick = function (obj, e)
        {
        	if (this.nfn_isEqualCol(obj, e.cell, "DEFAULT_VALUE"))
        	{
        		var value = this.ds_result.getColumn(e.row, "VALUE");
        		var valueSet = this.ds_result.getColumn(this.ds_result.rowposition, "VALUE_SET");
        		if (!this.gfn_isNull(value) && value.indexOf(":") < 0 && valueSet != "KP_DEPT")
        		{
        			this.ds_result.setColumn(e.row, "DEFAULT_VALUE", value);
        		}
        		var validationType = this.ds_result.getColumn(this.ds_result.rowposition, "VALIDATION_TYPE");
        		var defaultType = this.ds_result.getColumn(this.ds_result.rowposition, "DEFAULT_TYPE");
        		var defaultValue2 = this.ds_result.getColumn(this.ds_result.rowposition, "DEFAULT_VALUE2");

        		if (validationType == 'F' || (defaultType == 'P' && defaultValue2 == 'MFG_ORGANIZATION_ID') || (validationType == 'I' && valueSet != "KP_DEPT"))
        		{
        			var rslt = this.fn_makeCmb(e.row);
        			if (rslt == 0)
        			{
        				this.ds_cmb.filter("LOOKUP_TYPE=='" + this.ds_result.getColumn(this.ds_result.rowposition, "VALUE_SET") + "'");
        			}
        		}
        		else
        		{
        			this.fn_setDefaultValue(e.row);
        		}
        	}
        };

        this.ds_result_onvaluechanged = function (obj, e)
        {
        	if (e.newvalue == e.oldvalue)
        	{
        		return;
        	}
        	if (e.columnid == "DEFAULT_VALUE")
        	{
        		if (e.newvalue == null)
        		{
        			return;
        		}
        		this.ds_result.setColumn(e.row, "VALUE", e.newvalue);
        		for (var i = e.row + 1; i < obj.rowcount; i++)
        		{
        			this.ds_result.setColumn(i, "DEFAULT_VALUE", null);
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

        	this.RESPONSIBILITY_ID = nexacro.getApplication().gds_ecmRpstAuth.lookup("ACCT_GUBUN_ID", this.ACCT_GUBUN_ID, "RESPONSIBILITY_ID"); //RESPONSIBILITY_ID 가져오기
        	this.APPLICATION_ID = nexacro.getApplication().gds_ecmRpstAuth.lookup("ACCT_GUBUN_ID", this.ACCT_GUBUN_ID, "APPLICATION_ID"); //APPLICATION_ID 가져오기

        	this.GRRSP_PTY_REGSTR = this.ds_acctGubun.getColumn(nRow, "GRRSP_PTY_REGSTR"); //국유재산
        	this.GDS_AST_REGSTR = this.ds_acctGubun.getColumn(nRow, "GDS_AST_REGSTR"); //물품자산

        	trace("this.ACCT_DIV_CD-->" + this.ACCT_DIV_CD);
        	trace("this.ACCT_GUBUN_ID-->" + this.ACCT_GUBUN_ID);
        	trace("this.LEDGER_ID-->" + this.LEDGER_ID);
        	trace("this.ORG_ID-->" + this.ORG_ID);
        	trace("this.RESPONSIBILITY_ID-->" + this.RESPONSIBILITY_ID);
        	trace("this.APPLICATION_ID-->" + this.APPLICATION_ID);
        	trace("this.GRRSP_PTY_REGSTR-->" + this.GRRSP_PTY_REGSTR);
        	trace("this.GDS_AST_REGSTR-->" + this.GDS_AST_REGSTR);
        };

        this.div_search_cbo_application_onitemchanged = function (obj, e)
        {
        	var jobSysCd = this.ds_application.lookup("REQUEST_GROUP_ID", e.postvalue, "APPLICATION_SHORT_NAME");
        	nexacro.getApplication().gds_ecmRpstAuth.filter("JOB_SYS_CD=='" + jobSysCd + "'");

        	this.JOB_SYS_CD = jobSysCd;
        	this.RESPONSIBILITY_ID = nexacro.getApplication().gds_ecmRpstAuth.lookup("ACCT_GUBUN_ID", this.ACCT_GUBUN_ID, "RESPONSIBILITY_ID"); //RESPONSIBILITY_ID 가져오기
        	this.APPLICATION_ID = nexacro.getApplication().gds_ecmRpstAuth.lookup("ACCT_GUBUN_ID", this.ACCT_GUBUN_ID, "APPLICATION_ID"); //APPLICATION_ID 가져오기

        	trace("this.ACCT_DIV_CD-->" + this.ACCT_DIV_CD);
        	trace("this.ACCT_GUBUN_ID-->" + this.ACCT_GUBUN_ID);
        	trace("this.LEDGER_ID-->" + this.LEDGER_ID);
        	trace("this.ORG_ID-->" + this.ORG_ID);
        	trace("this.RESPONSIBILITY_ID-->" + this.RESPONSIBILITY_ID);
        	trace("this.APPLICATION_ID-->" + this.APPLICATION_ID);
        	nexacro.getApplication().gds_ecmRpstAuth.filter("");
        	this.ds_result.clearData();
        	var applicationShortName = this.div_search.form.cbo_application.value;
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "APPLICATION_SHORT_NAME", applicationShortName);

        	var sSvcID = "selectReportSetList";
        	var sController = "/cmsa00400/selectReportSetList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_program=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectReportSetList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.div_search_cbo_program_onitemchanged = function (obj, e)
        {
        	this.ds_result.clearData();
        };


        this.grd_result_onexpandup = function (obj, e)
        {
        	if (this.nfn_isEqualCol(obj, e.col, "DEFAULT_VALUE"))
        	{
        		var popupCd = "P00143";
        		var popupNm = "";
        		var rtnCols = "OFFICE_CODE|OFFICE_NAME";
        		var paramCols = "";
        		var paramValues = "";
        		var searchStr = "";

        		var oArg = {
        			arg_popupCd : popupCd,
        			arg_popupNm : popupNm,
        			arg_rtnCols : rtnCols,
        			arg_paramCols : paramCols,
        			arg_paramValues : paramValues,
        			arg_searchStr : searchStr
        		};
        		this.gfn_openPopup("P00143", "ecmcm::CMPU00100P.xfdl", oArg, "");
        	}
        }

        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.Static00.addEventHandler("onclick",this.Static10_onclick,this);
            this.Static01.addEventHandler("onclick",this.Static10_onclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_search.form.btn_clear.addEventHandler("onclick",this.div_search_btn_clear_onclick,this);
            this.div_search.form.cbo_application.addEventHandler("onitemchanged",this.div_search_cbo_application_onitemchanged,this);
            this.div_search.form.cbo_program.addEventHandler("onitemchanged",this.div_search_cbo_program_onitemchanged,this);
            this.div_search.form.cbo_acctGubun.addEventHandler("onitemchanged",this.div_search_cbo_acctGubun_onitemchanged,this);
            this.grd_result.addEventHandler("oncellclick",this.grd_result_oncellclick,this);
            this.grd_result.addEventHandler("onexpandup",this.grd_result_onexpandup,this);
            this.Static04.addEventHandler("onclick",this.Static10_onclick,this);
            this.grd_result00.addEventHandler("oncellclick",this.grd_result_oncellclick,this);
            this.grd_result00.addEventHandler("onexpandup",this.grd_result_onexpandup,this);
            this.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.grd_result01.addEventHandler("oncellclick",this.grd_result_oncellclick,this);
            this.grd_result01.addEventHandler("onexpandup",this.grd_result_onexpandup,this);
            this.ds_result.addEventHandler("onvaluechanged",this.ds_result_onvaluechanged,this);
        };
        this.loadIncludeScript("CMSA00800M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
