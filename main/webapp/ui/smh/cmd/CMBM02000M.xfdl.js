(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMBM02000M");
            this.set_titletext("배치관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,637);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_batchCtrls", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CMD_JOB_GUBUNCD\" type=\"STRING\" size=\"5\"/><Column id=\"CMD_JOB_GUBUNNM\" type=\"STRING\" size=\"80\"/><Column id=\"BATCH_CD\" type=\"STRING\" size=\"10\"/><Column id=\"BAT_PGM_GUBUN\" type=\"STRING\" size=\"30\"/><Column id=\"BAT_PGM_GUBUN_NM\" type=\"STRING\" size=\"80\"/><Column id=\"BATCH_PROGRAM\" type=\"STRING\" size=\"60\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"240\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"10\"/><Column id=\"CREATION_DATE\" type=\"DATE\" size=\"0\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"10\"/><Column id=\"LAST_UPDATE_DATE\" type=\"DATE\" size=\"0\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"500\"/><Column id=\"ROW_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_batchParams", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"BATCH_CD\" type=\"STRING\" size=\"10\"/><Column id=\"PARAM_SEQ\" type=\"BIGDECIMAL\" size=\"0\"/><Column id=\"PARAM_PROMPT\" type=\"STRING\" size=\"30\"/><Column id=\"PARAM_PROMPT_EN\" type=\"STRING\" size=\"256\"/><Column id=\"REQUIRED_YN\" type=\"STRING\" size=\"1\"/><Column id=\"REQUIRED_YN_NM\" type=\"STRING\" size=\"10\"/><Column id=\"HIDE_YN\" type=\"STRING\" size=\"1\"/><Column id=\"HIDE_YN_NM\" type=\"STRING\" size=\"10\"/><Column id=\"PARAM_COLUMN_TYPE\" type=\"STRING\" size=\"8\"/><Column id=\"PARAM_COLUMN_TYPE_NM\" type=\"STRING\" size=\"80\"/><Column id=\"LIST_QUERY\" type=\"STRING\" size=\"4000\"/><Column id=\"DEFAULT_VALUE\" type=\"STRING\" size=\"500\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"10\"/><Column id=\"CREATION_DATE\" type=\"DATE\" size=\"0\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"10\"/><Column id=\"LAST_UPDATE_DATE\" type=\"DATE\" size=\"0\"/><Column id=\"ROW_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_requiredYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"value\">필수</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">옵션</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hideYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"value\">숨김</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"value\">표시</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"CMD_JOB_GUBUNCD\" type=\"STRING\" size=\"5\"/><Column id=\"BATCH_CD\" type=\"STRING\" size=\"10\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"240\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_batchResult", this);
            obj._setContents("<ColumnInfo><Column id=\"BATCH_CD\" type=\"STRING\" size=\"240\"/><Column id=\"BATCH_RUN_YN\" type=\"STRING\" size=\"240\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0%","36",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_srchBatchCd","340","10","140","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_inputmode("upper");
            obj.set_maxlength("10");
            obj.getSetter("lengthunit").set("ascii");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_srchJobGubunCd","95","10","150","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SystemWorkType,ALL,Y,Y");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("lbl_srchWrokClass","20","10","65","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("업무구분");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("lbl_srchBatchCd","265","10","65","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("배치코드");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_srchDescription","575","10","272","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_maxlength("30");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("lbl_srchDescription","500","10","65","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("프로그램명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","0%","0",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0%","-1",null,"43","97.8%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","0%","31",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","9.36%","0",null,null,"89.54%","0",null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","245","2","20","43",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","36.34%","1",null,null,"62.56%","-1",null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","52.86%","0",null,"43","44.93%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09","62.22%","-1",null,null,"36.67%","1",null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_batchCtrls","0%","122",null,"358","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_batchCtrls");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"220\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"업무구분\"/><Cell col=\"1\" displaytype=\"normal\" text=\"배치코드\"/><Cell col=\"2\" text=\"구분\"/><Cell col=\"3\" text=\"프로그램\"/><Cell col=\"4\" text=\"프로그램명\"/><Cell col=\"5\" text=\"등록자\"/></Band><Band id=\"body\"><Cell displaytype=\"combotext\" edittype=\"expr:comp.parent.nfn_isNull(ROW_ID)?&apos;combo&apos;:&apos;none&apos;\" text=\"bind:CMD_JOB_GUBUNCD\" combocodecol=\"C,SystemWorkType,SEL,Y,Y\" textAlign=\"left\" verticalAlign=\"middle\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"expr:comp.parent.nfn_isNull(ROW_ID)?&apos;text&apos;:&apos;none&apos;\" text=\"bind:BATCH_CD\" editlimit=\"10\" editautoselect=\"true\" editlengthunit=\"utf16\" textAlign=\"left\" verticalAlign=\"middle\"/><Cell col=\"2\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:BAT_PGM_GUBUN\" editlimit=\"-1\" combocodecol=\"C,CMD_BAT_PGM_GUBUN,SEL,Y,Y\" textAlign=\"left\" verticalAlign=\"middle\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"bind:BATCH_PROGRAM\" editlimit=\"60\" textAlign=\"left\" verticalAlign=\"middle\"/><Cell col=\"4\" displaytype=\"text\" edittype=\"text\" text=\"bind:DESCRIPTION\" editlimit=\"240\" textAlign=\"left\"/><Cell col=\"5\" displaytype=\"text\" text=\"bind:USER_NM\" textAlign=\"center\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0%","493","205","18",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("매개변수");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addBatchParam",null,"488","60","20","73",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("행추가");
            obj.set_cssclass("btn_DR_GridPlus");
            obj.set_tooltiptext("행추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delBatchPram",null,"488","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_DR_GridMinus");
            obj.set_tooltiptext("행삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_batchParams","0%","512",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_batchParams");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"210\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"순서\" textAlign=\"center\"/><Cell col=\"1\" text=\"변수명(한글)\"/><Cell col=\"2\" text=\"변수명(영문)\"/><Cell col=\"3\" text=\"필수여부\"/><Cell col=\"4\" text=\"숨김여부\"/><Cell col=\"5\" text=\"유형\"/><Cell col=\"6\" text=\"리스트 쿼리\"/><Cell col=\"7\" text=\"기본값\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" edittype=\"text\" text=\"bind:PARAM_SEQ\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"bind:PARAM_PROMPT\" editlimit=\"30\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" editfilter=\"none\" text=\"bind:PARAM_PROMPT_EN\" editautoselect=\"true\" textAlign=\"left\"/><Cell col=\"3\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:REQUIRED_YN\" combodataset=\"ds_requiredYn\" combocodecol=\"code\" combodatacol=\"value\" combodisplay=\"edit\" textAlign=\"left\"/><Cell col=\"4\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:HIDE_YN\" combodataset=\"ds_hideYn\" combocodecol=\"code\" combodatacol=\"value\" combodisplay=\"edit\" textAlign=\"left\"/><Cell col=\"5\" displaytype=\"combotext\" edittype=\"combo\" text=\"bind:PARAM_COLUMN_TYPE\" combocodecol=\"C,BatParamColumnType,SEL,Y,Y\" combodisplay=\"edit\" textAlign=\"left\" verticalAlign=\"middle\"/><Cell col=\"6\" displaytype=\"expr:PARAM_COLUMN_TYPE==&quot;LIST&quot;?&apos;text&apos;:&apos;normal&apos;\" edittype=\"expr:PARAM_COLUMN_TYPE==&quot;LIST&quot;?&apos;text&apos;:&apos;none&apos;\" text=\"bind:LIST_QUERY\" textAlign=\"left\"/><Cell col=\"7\" displaytype=\"text\" edittype=\"text\" text=\"bind:DEFAULT_VALUE\" editlimit=\"500\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addBatchCtrl",null,"99","60","20","73",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_cssclass("btn_DR_GridPlus");
            obj.set_tooltiptext("행추가");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","94","277","18",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("배치프로그램 현황");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_DR_GridSave");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0%","21",null,"15","1.09%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","0%","79",null,"15","87.17%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0%","112",null,"10","87.17%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"0","60","20","136",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"0","60","20","73",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("초기화");
            obj.set_cssclass("btn_DR_GridReset");
            obj.set_tooltiptext("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delBatchCtrl",null,"99","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_DR_GridMinus");
            obj.set_tooltiptext("행삭제");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser02",null,"0","61","29","227",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,637,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item5","div_search.form.edt_srchBatchCd","value","ds_EapInvoicesAll","VAT_REGISTRATION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_search.form.edt_srchDescription","value","ds_EapInvoicesAll","VAT_REGISTRATION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMBM02000M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 배치관리
         * 파일명 		: CMBM02000M.xfdl
         * 작성자 		: JYYOUN
         * 작성일 		: 2018.04.27
         *
         * 설  명		: 배치관련 프로그램과 해당 파라미터를 등록/수정/삭제하는 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2018.04.27	JYYOUN		최초작성
         * 2018.05.02    JYYOUN      업무구분코드 명칭변경(WrokClass→JobGubunCd)
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        // ▶ Form Load 시 적용되는 함수
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	// 그리드 소트 제외
        	this.grd_batchCtrls.removeEventHandler("onheadclick", this.nfn_grd_onheadclick, this);
        	this.grd_batchParams.removeEventHandler("onheadclick", this.nfn_grd_onheadclick, this);

        	// 엔터키 설정 함수(조회)
        //	this.gfn_setEnterSearch(this.div_search, "nfn_search"); //조건창 엔터키 설정
        //	this.gfn_setEnterSearch(this.div_search.form.cbo_srchJobGubunCd, "nfn_search"); //업무구분 엔터키 설정
        //	this.gfn_setEnterSearch(this.div_search.form.edt_srchBatchCd, "nfn_search"); //배치코드 엔터키 설정
        //	this.gfn_setEnterSearch(this.div_search.form.edt_srchDescription, "nfn_search"); //배치명 엔터키 설정

        	this.WebBrowser02.set_url(nexacro.getApplication().gv_host + "/html/serverIp.jsp");
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색(배치프로그램 리스트 검색)
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_batchCtrls.clearData(); //배치프로그램 리스트 데이터셋 초기화
        	this.ds_batchParams.clearData(); //배치프로그램 파라미터 데이터셋 초기화

        	this.ds_param.clearData(); //조회용 파라미터 초기화
        	nRow = this.ds_param.addRow(); //조회용 파라미터 추가

        	this.ds_param.setColumn(nRow, "CMD_JOB_GUBUNCD", this.div_search.form.cbo_srchJobGubunCd.value); //업무구분
        	this.ds_param.setColumn(nRow, "BATCH_CD", this.div_search.form.edt_srchBatchCd.value); //배치코드
        	this.ds_param.setColumn(nRow, "DESCRIPTION", this.div_search.form.edt_srchDescription.value); //배치프로그램명

        	var sSvcID = "selectBatchCtrlsList";
        	var sController = "/cmbm02000/selectBatchCtrlsList.do";
        	var sInDatasets = "INPUT=ds_param";
        	var sOutDatasets = "ds_batchCtrls=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectBatchCtrlsList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");
        };


        /*
         * 기능 : 검색 상세(배치프로그램 파라미터 검색)
         */
        this.fn_search2 = function ()
        {
        	// if(this.ds_batchParams.rowposition < 0) return;
        	this.ds_batchParams.clearData(); //배치프로그램 파라미터 데이터셋 초기화

        	this.ds_param.clearData(); //조회용 파라미터 초기화
        	nRow = this.ds_param.addRow(); //조회용 파라미터 추가

        	this.ds_param.setColumn(nRow, "BATCH_CD", this.ds_batchCtrls.getColumn(this.ds_batchCtrls.rowposition, "BATCH_CD"));

        	var sSvcID = "selectBatchParamsList";
        	var sController = "/cmbm02000/selectBatchParamsList.do";
        	var sInDatasets = "INPUT=ds_param";
        	var sOutDatasets = "ds_batchParams=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectBatchParamsList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");
        };

        // 배치 프로그램 실행 여부
        this.fn_batchRunYn = function ()
        {
        	this.ds_batchResult.clearData();
        	nRow = this.ds_batchResult.addRow();

        	this.ds_batchResult.setColumn(nRow, "BATCH_CD", this.ds_batchCtrls.getColumn(this.ds_batchCtrls.rowposition, "BATCH_CD"));

        	var sSvcID = "selectBatchProgramRunYn";
        	var sController = "/cmbm02000/selectBatchProgramRunYn.do";
        	var sInDatasets = "input=ds_batchResult";
        	var sOutDatasets = "ds_batchResult=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");
        };


        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	var bOK = this.gfn_Message("InfoPopupSave", null, "conf", "yesno");
        	if (bOK == false) return;

        	if (!this.gfn_dsIsUpdated(this.ds_batchCtrls)
        		 && !this.gfn_dsIsUpdated(this.ds_batchParams))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	// 배치정보 : 업무구분, 배치코드, 프로그램구분, 프로그램, 설명(프로그램명) 입력확인
        	if (!this.gfn_GridKeyCheck(this.grd_batchCtrls, ["CMD_JOB_GUBUNCD", "BATCH_CD", "BAT_PGM_GUBUN", "DESCRIPTION"]))
        	{
        		return;
        	}

        	// 파라미터정보 : 파라미터일련번호, 변수명(한글), 변수명(영문), 필수여부, 숨김필드, 타입 입력확인
        	if (!this.gfn_GridKeyCheck(this.grd_batchParams, ["PARAM_SEQ", "PARAM_PROMPT", "PARAM_PROMPT_EN", "REQUIRED_YN", "HIDE_YN", "PARAM_COLUMN_TYPE"]))
        	{
        		return;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveBatchCtrlsParams";
        	var sController = "/cmbm02000/saveBatchCtrlsParams.do";
        	var sInDatasets = "INPUT_H=ds_batchCtrls:U INPUT_L=ds_batchParams:U";
        	var sOutDatasets = "ds_result=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "saveBatchCtrlsParams");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	trace("errCD => " + errCD);
        	if (errCD < 0)
        	{
        		if (errCD = -500)
        		{
        			this.gfn_Message("중복된 자료가 존재합니다. 확인 후 다시 작업하시기 바랍니다.", null, "error", "ok");
        			return;
        		}

        		if (trId.substring(0, 6) == "select")
        		{
        			this.gfn_Message("ErrorOnSearch", trId + errMsg, "error", "ok");
        		}
        		else
        		{
        			this.gfn_Message("ErrorOnSave", trId + errMsg, "error", "ok");
        		}
        	}
        	else
        	{
        		if (trId == "selectCurrentSystemTime")
        		{
        			this.fv_currDate = this.ds_currentDate.getColumn(0, "TODATE");
        		}
        		else if (trId == "selectBatchCtrlsList")
        		{
        			if (this.ds_batchCtrls.rowcount == 0)
        			{
        				//this.gfn_Message("NoSaveData", null, "info", "ok"); //조회된 자료가 없습니다.
        			}
        			else
        			{
        				this.fn_search2();
        			}
        		}
        		else if (trId == "saveBatchCtrlsParams")
        		{
        			this.gfn_Message("SuccedSave", null, "info", "ok");
        			this.fn_search();
        		}
        		else if (trId == "selectBatchParamsList")
        		{
        			// 매개변수 데이터 조회 결과
        		}
        		else if (trId == "selectBatchProgramRunYn")
        		{
        			// 배치 프로그램 실행 여부
        			// Y - 삭제 불가
        			// N - 삭제 가능
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        // ▶ 업무구분 Keydown 이벤트
        this.div_search_cbo_srchJobGubunCd_onkeydown = function (obj, e)
        {
        	if (e.keycode == 13)
        	{
        		this.fn_search();
        	}
        };

        // ▶ 배치코드 Keydown 이벤트
        this.div_search_edt_srchBatchCd_onkeydown = function (obj, e)
        {
        	if (e.keycode == 13)
        	{
        		this.fn_search();
        	}
        };

        // ▶ 배치명 Keydown 이벤트
        this.div_search_edt_srchDescription_onkeydown = function (obj, e)
        {
        	if (e.keycode == 13)
        	{
        		this.fn_search();
        	}
        };

        // ▶ 초기화 버튼 클릭 이벤트
        this.div_search_btn_clear_onclick = function (obj, e)
        {
        	this.reload();
        };

        // ▶ 배치프로그램 행추가 버튼 클릭 이벤트
        this.btn_addBatchCtrl_onclick = function (obj, e)
        {
        	this.ds_batchParams.clearData();
        	var nRow = this.ds_batchCtrls.addRow();

        	this.ds_batchCtrls.setColumn(nRow, "CMD_JOB_GUBUNCD", this.div_search.form.cbo_srchJobGubunCd.value);
        	this.ds_batchCtrls.setColumn(nRow, "BAT_PGM_GUBUN", "SP");
        /*
        	if (!this.nfn_isNull(this.div_search.form.cbo_srchWrokClass.value))
        	{
        		this.ds_batchCtrls.setColumn(nRow, "WORK_CLASS", this.div_search.cbo_srchWrokClass.value);
        	}
        */
        };

        // ▶ 배치프로그램 행삭제 버튼 클릭 이벤트
        this.btn_delBatchCtrl_onclick = function (obj, e)
        {
        	// 배치 프로그램 실행 여부
        	this.fn_batchRunYn();

        	trace(this.ds_batchResult.getColumn(0, "BATCH_RUN_YN"));
        	if (this.ds_batchResult.getColumn(0, "BATCH_RUN_YN") == "Y")
        	{
        		this.gfn_Message("CannotDeleteUsedBatch", null, "info", "ok");
        		return;
        	}

        	// 매개변수 행의 갯수가 없으면 삭제 가능
        	if (this.ds_batchParams.rowcount == 0)
        	{
        		this.ds_batchCtrls.deleteRow(this.ds_batchCtrls.rowposition);
        	}
        	else
        	{
        		this.gfn_Message("DoAfterDeleteBecauseParameter", null, "info", "ok");
        		return;
        	}
        };


        // ▶ 배치 파라미터 행추가 버튼 클릭 이벤트
        this.btn_addBatchParam_onclick = function (obj, e)
        {
        	if (this.ds_batchCtrls.rowposition < 0 || this.nfn_isNull(this.ds_batchCtrls.getColumn(this.ds_batchCtrls.rowposition, "BATCH_CD")))
        	{
        		this.gfn_Message("NotSaveUnchanged", "BATCH_CD", "warning", "ok");//저장후 진행하세요
        		return;
        	}
        	var nRow = this.ds_batchParams.addRow();
        	this.ds_batchParams.setColumn(nRow, "BATCH_CD", this.ds_batchCtrls.getColumn(this.ds_batchCtrls.rowposition, "BATCH_CD")); //배치코드
        	this.ds_batchParams.setColumn(nRow, "REQUIRED_YN", "N"); //필수여부 : 'N' 설정
        	this.ds_batchParams.setColumn(nRow, "HIDE_YN", "N"); //숨김여부 : 'N' 설정
        	this.ds_batchParams.setColumn(nRow, "PARAM_COLUMN_TYPE", "CHAR"); //파라미터칼럼유형코드 : 'CHAR' 설정
        };

        // ▶ 배치 파라미터 행삭제 버튼 클릭 이벤트
        this.btn_delBatchPram_onclick = function (obj, e)
        {
        	this.ds_batchParams.deleteRow(this.ds_batchParams.rowposition);
        };

        // ▶ 배치프로그램 리스트 다른 셀 선택 이벤트
        this.grd_batchCtrls_onselectchanged = function (obj, e)
        {
        	this.ds_batchParams.clearData();
        	if (this.nfn_isNull(this.ds_batchCtrls.getColumn(this.ds_batchCtrls.rowposition, "BATCH_CD")))
        	{
        		return;
        	}
        	this.fn_search2();
        }
        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.edt_srchBatchCd.addEventHandler("onkeydown",this.div_search_edt_srchBatchCd_onkeydown,this);
            this.div_search.form.cbo_srchJobGubunCd.addEventHandler("onkeydown",this.div_search_cbo_srchJobGubunCd_onkeydown,this);
            this.div_search.form.edt_srchDescription.addEventHandler("onkeydown",this.div_search_edt_srchDescription_onkeydown,this);
            this.grd_batchCtrls.addEventHandler("onselectchanged",this.grd_batchCtrls_onselectchanged,this);
            this.Static00.addEventHandler("onclick",this.Static10_onclick,this);
            this.btn_addBatchParam.addEventHandler("onclick",this.btn_addBatchParam_onclick,this);
            this.btn_delBatchPram.addEventHandler("onclick",this.btn_delBatchPram_onclick,this);
            this.btn_addBatchCtrl.addEventHandler("onclick",this.btn_addBatchCtrl_onclick,this);
            this.Static02.addEventHandler("onclick",this.Static10_onclick,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.div_search_btn_clear_onclick,this);
            this.btn_delBatchCtrl.addEventHandler("onclick",this.btn_delBatchCtrl_onclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("CMBM02000M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
