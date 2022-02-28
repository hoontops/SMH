(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM05800M");
            this.set_titletext("재공 실사 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_main", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSID_R\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVETIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"SORTORDER\" type=\"STRING\" size=\"256\"/><Column id=\"REALWIPPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"REALWIPPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"REALWIPLOSSPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"REALWIPLOSSPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"REALWIPETCPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"REALWIPETCPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"REALWIPTOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOCKINGTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_ProdVersion", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFVERSIONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSIONNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_isWipSurvey", this);
            obj._setContents("<ColumnInfo><Column id=\"ISWIPSURVEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tab_page",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID","108","110",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("4");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTIONTYPE","108","edt_AREAID:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","10","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","cbo_PLANTID:5",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","108","edt_PRODUCTDEFID:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("2");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","cbo_PRODUCTDEFVERSION:5",null,"20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("3");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"cbo_PRODUCTIONTYPE:0","45","20","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("12");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","Static12_00_00_00_01_00_00:0","102","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_search","15","Static12_00_00_00_01_00_00:0","146","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_hotkey("F2");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("10");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("11");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","Static12_00_00_00_01_00_00:6","10","27",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("13");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PLANTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("14");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PLANT");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_AREAID","0","110","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("20");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTIONTYPE","0","sta_AREAID:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("19");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFID","0","sta_PLANTID:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("15");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"cbo_PLANTID:5","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFVERSION","0","sta_PRODUCTDEFID:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("17");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFNAME","0","sta_PRODUCTDEFVERSION:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("18");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_AREAID",null,"edt_PRODUCTDEFNAME:5","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","143","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_main",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subMainTitle","0","0","70","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("재공현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("WIPLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_main","sta_subMainTitle:2","0","138","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_WIPCHECKLIST",null,"6","105","21","btn_xlDn_grd_main:6",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("실사 리스트");
            obj.set_font("bold 9pt \"Dotum\"");
            obj.set_tooltiptext("WIPCHECKLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_WIPCHECKFINISH",null,"6","105","21","btn_WIPCHECKLIST:6",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("재공실사 완료");
            obj.set_font("bold 9pt \"Dotum\"");
            obj.set_tooltiptext("WIPCHECKFINISH");
            obj.set_enable("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_WIPCHECKSTART",null,"6","105","21","btn_WIPCHECKFINISH:6",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("재공실사 시작");
            obj.set_font("bold 9pt \"Dotum\"");
            obj.set_tooltiptext("WIPCHECKSTART");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_State","0","35","530","48",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_text("현재 인수 인계 Locking 상태 입니다.");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("ISLOCKWIPSURVEY");
            obj.set_font("normal 20pt/normal \"Arial\"");
            obj.set_color("RGB(253,5,1)");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_main","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_main");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"180\"/><Column size=\"200\"/><Column size=\"130\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell col=\"2\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell col=\"3\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell col=\"4\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"5\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"6\" text=\"LotNo\" tooltiptext=\"LOTID\"/><Cell col=\"7\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"8\" text=\"투입 PCS\" tooltiptext=\"INPUTPCS\"/><Cell col=\"9\" text=\"투입 PNL\" tooltiptext=\"INPUTPNL\"/><Cell col=\"10\" text=\"재공(PCS)\" tooltiptext=\"WIPPCS\"/><Cell col=\"11\" text=\"재공(PNL)\" tooltiptext=\"WIPPNL\"/><Cell col=\"12\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell col=\"13\" text=\"투입일자\" tooltiptext=\"INPUTDATE\"/><Cell col=\"14\" text=\"인수일시\" tooltiptext=\"RECEIVETIME\"/><Cell col=\"15\" text=\"작업시작시간\" tooltiptext=\"WORKSTARTTIME\"/><Cell col=\"16\" text=\"작업완료시간\" tooltiptext=\"WORKENDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTTYPE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:INPUTQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:INPUTPNLQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:QTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:PANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:MM\" textAlign=\"right\" displaytype=\"number\" edittype=\"none\" maskeditformat=\"000,000,000\" editautoselect=\"false\" maskeditautoselect=\"true\"/><Cell col=\"13\" text=\"bind:INPUTDATE\" textAlign=\"right\" displaytype=\"normal\" maskeditformat=\"000,000,000\" editautoselect=\"false\" maskeditautoselect=\"true\"/><Cell col=\"14\" text=\"bind:RECEIVETIME\" textAlign=\"right\" displaytype=\"normal\" maskeditformat=\"000,000,000\" editautoselect=\"false\" maskeditautoselect=\"true\"/><Cell col=\"15\" text=\"bind:WORKSTARTTIME\" textAlign=\"right\" displaytype=\"normal\" maskeditformat=\"000,000,000\" editautoselect=\"false\" maskeditautoselect=\"true\"/><Cell col=\"16\" text=\"bind:WORKENDTIME\" textAlign=\"right\" displaytype=\"normal\" maskeditformat=\"000,000,000\" editautoselect=\"false\" maskeditautoselect=\"true\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","31",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","150","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("화면명");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.tab_page.form.cbo_PLANTID","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.tab_page.form.cbo_PRODUCTIONTYPE","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.tab_page.form.edt_PRODUCTDEFID","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.tab_page.form.cbo_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.tab_page.form.edt_PRODUCTDEFNAME","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.tab_page.form.edt_AREAID","value","ds_search","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM05800M.xfdl","pcm::pcmCommon.xjs");
        this.addIncludeScript("PCM05800M.xfdl","lib::lib_bas.xjs");
        this.registerScript("PCM05800M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 재공 실사 관리
         * 파일명 		: PCM05800M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2021.05.31
         * 설  명		:  재공 실사 관리
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.31	박대호   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// 초기화 (공통)
        	this.nfn_formInit(obj);

        	// 검색조건 공통 콤보 설정
        	this.fn_initCombo();
        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색(메인 -  고객정보 그리드)
         */
        this.fn_search = function (obj, e)
        {

        	this.ds_main.clearData();

        	var sSvcID 			= "selectWipListOfPhysicalCount";
        	var sController 	= "/pcm05800/selectWipListOfPhysicalCount.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_main=output1 ds_isWipSurvey=output2";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {

        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
           this.fn_initCombo();
           this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        };

        /*
         * 기능 : 신규
         */
        this.fn_new = function(obj,e)
        {

        };


        /*
         * 기능 : 삭제
         */
        this.fn_delete = function(obj,e)
        {

        };
        /*
         * 기능 : 도움말  => 공통 처리
         */
        this.fn_help = function(obj,e)
        {

        };

        /*
         * 기능 : 출력
         */
        this.fn_print = function(obj,e)
        {

        };
        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}

        	switch(trId)
        	{
        		case "selectEcmLookupValuesVList2ds_CSiteTypeALL" :
        		{
        			this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        			break;
        		}
         		case "saveWipSurveyLocking" :
         		{
         			if(errCD == 0)
        			{
        				if(this.ds_search.getColumn( 0, "LOCKINGTYPE") == "Start")
        				{
        					this.fn_setState(true);
        				}
        				else
        				{
        					this.fn_setState(false);
        				}
        			}
        			break;
         		}
        		case "selectWipListOfPhysicalCount" :
        		{

        			if(this.ds_isWipSurvey.getColumn( 0, "ISWIPSURVEY") == "Y")
        			{
        				this.fn_setState(true);
        			}
        			else
        			{
        				this.fn_setState(false);
        			}
        			break;
        		}
        		default:
        		{
        		}
        		break;
        	}

        };




        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if (this.nfn_isNull(rtn))
        	{
        		return;
        	};

        	switch (sPopupId)
        	{
        		case "POPUP_PRODUCTDEFID" :
        		{//PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME

        			this.setProduct_ProdVersion(rtn, this.ds_cbo_ProdVersion, this.ds_search, "C");
        			rtn = this.gfn_split(rtn, ",");
        			if (rtn.length == 3)
        			{

        				this.tab_search.tab_page.form.edt_PRODUCTDEFID.set_value(rtn[0]);
        				this.tab_search.tab_page.form.edt_PRODUCTDEFNAME.set_value(rtn[2]);
        				this.ds_search.setColumn(0, "PRODUCTDEFVERSION", rtn[1]);
        			}
        			else
        			{
        				var valueId = [];
        				var valueName = [];
        				for (var i = 0; i < rtn.length; i++)
        				{
        					if ((i % 3) == 0)
        					{
        						valueId.push(rtn[i]);
        					}
        					else if ((i % 3) == 2)
        					{
        						valueName.push(rtn[i]);
        					}

        				}
        				this.tab_search.tab_page.form.edt_PRODUCTDEFID.set_value(valueId.join(","));
        				this.tab_search.tab_page.form.edt_PRODUCTDEFNAME.set_value("");
        				this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");

        			}
        		}
        		break;
        		case "POPUP_AREAID" :
        		{
        			rtn = this.gfn_split(rtn, ",");
        			if (rtn.length == 2)
        			{
        				this.tab_search.tab_page.form.edt_AREAID.set_value(rtn[1]);
        				this.ds_search.setColumn( 0, "AREAID",          rtn[0] );
        			}
        			else
        			{
        				var value = [];
        				var dsval = [];
        				for (var i = 0; i < rtn.length; i++)
        				{
        					if ((i % 2) == 0)
        					{
        						dsval.push(rtn[i]);
        					}
        					else
        					{
        						value.push(rtn[i]);
        					}
        				}

        				this.tab_search.tab_page.form.edt_AREAID.set_value(value.join(","));
        				this.ds_search.setColumn( 0, "AREAID",          dsval.join(",") );
        			}
        		}
        		break;
        	};
        };

         /*
         * 기능(공통팝업) : 조회
         */
        this.fn_openPop = function(svcId, popId, pArg)
        {

        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        	this.ds_cbo_ProdVersion.deleteAll();
        	this.AddAll(this.ds_cbo_ProdVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");
        	this.ds_search.setColumn(0, "PRODUCTDEFID", "");
        	this.ds_search.setColumn(0, "PRODUCTIONTYPE", "");
        	this.ds_search.setColumn(0, "AREAID", "");
        	this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        }
        /*
         * 기능 : 인수인계 상태 변경
         */
        this.fn_setState = function (flag)
        {
        	if(flag)
        	{
        		this.div_work.form.btn_WIPCHECKSTART.set_enable(false);
        		this.div_work.form.btn_WIPCHECKFINISH.set_enable(true);
        		this.div_work.form.grd_main.set_top(100);
        	}
        	else
        	{
        		this.div_work.form.btn_WIPCHECKSTART.set_enable(true);
        		this.div_work.form.btn_WIPCHECKFINISH.set_enable(false);
        		this.div_work.form.grd_main.set_top(34);
        	}
        }




        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        /*
         *	기능 : 품목코드 검색 버튼 클릭 시
         */
        this.tab_search_tab_page_btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	var oArg = {};

        	if (this.tab_search.tab_page.form.edt_PRODUCTDEFID.value != "")
        	{
        		oArg.arg_type        = "CA";
        	}
        	else
        	{
        		oArg.arg_type        = "C";
        	}
        	oArg.arg_popupCd     = "P00211";
        	oArg.arg_popupNm     = "품목 선택";
        	oArg.arg_rtnCols     = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME";
        	oArg.arg_paramCols   = "P_POPTYPE";
        	oArg.arg_paramValues = "PRODUCTDEFINITION";
        	oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + this.tab_search.tab_page.form.edt_PRODUCTDEFID.value;
        	this.gfn_openPopup( "POPUP_PRODUCTDEFID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };
        /*
         *	기능 : 작업장 검색 버튼 클릭 시
         */
        this.tab_search_tab_page_btn_AREAID_onclick = function(obj,e)
        {
        	var oArg = {};

        	if (this.tab_search.tab_page.form.edt_AREAID.value != "")
        	{
        		oArg.arg_type        = "CA";
        	}
        	else
        	{
        		oArg.arg_type        = "C";
        	}
        	oArg.arg_popupCd     = "P00157";
        	oArg.arg_popupNm     = "작업장 선택";
        	oArg.arg_rtnCols     = "AREAID|AREANAME";
        	oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE|P_USER|P_PLANTID";
        	oArg.arg_paramValues = "AREALISTBYAUTHORITY|" + this.gf_getLanguageType() + "|" + this.gf_getUserAcnt() + "|"+ this.ds_search.getColumn( 0, "PLANTID" );
        	oArg.arg_searchStr   = "P_DICTIONARY=" + this.tab_search.tab_page.form.edt_AREAID.value;
        	this.gfn_openPopup( "POPUP_AREAID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };
        /*
         *	기능 : 재공실사 시작 버튼 클릭 시
         */
        this.div_work_btn_WIPCHECKSTART_onclick = function(obj,e)
        {
        	if (this.ds_main.rowcount < 1)
         	{
         		this.gfn_Message("NoTakeOverLot", null, "warning", "ok");
         		return;
         	}

        	this.ds_search.setColumn(0,"LOCKINGTYPE",'Start');
        	var sSvcID 			= "saveWipSurveyLocking";
        	var sController 	= "/pcm05800/saveWipSurveyLocking.do";
        	var sInDatasets 	= "ds_search=ds_search";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };
        /*
         *	기능 : 재공실사 완료 버튼 클릭 시
         */
        this.div_work_btn_WIPCHECKFINISH_onclick = function(obj,e)
        {
        	if (this.ds_main.rowcount < 1)
         	{
         		this.gfn_Message("NoTakeOverLot", null, "warning", "ok");
         		return;
         	}
        	this.ds_search.setColumn(0,"LOCKINGTYPE",'Stop');
        	var sSvcID 			= "saveWipSurveyLocking";
        	var sController 	= "/pcm05800/saveWipSurveyLocking.do";
        	var sInDatasets 	= "ds_search=ds_search";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         *	기능 : 실사리스트 버튼 클릭 시
         */
        this.div_work_btn_WIPCHECKLIST_onclick = function(obj,e)
        {
        	if(this.ds_main.rowcount > 0)
        	{
        		var areaId = ""; //$3
        		var plantId = this.ds_search.getColumn(0, "PLANTID"); //$4
        		var lotType = this.ds_search.getColumn(0, "PRODUCTIONTYPE"); //$5
        		var productId = this.ds_search.getColumn(0, "PRODUCTDEFID"); //$6
        		var productRev = this.ds_search.getColumn(0, "PRODUCTDEFVERSION"); //$7
        		if(this.tab_search.tab_page.form.edt_AREAID.value != "")
        		{
        			areaId = this.ds_search.getColumn(0, "AREAID");
        		}

        		var oArg = {
        						sRptPath   : "/pcm/",
        						sRptName   : "PCM05800R.mrd",
        						strField   : "[" + this.gf_getUserId() + "][" + this.gf_getLanguageType() + "]"
        									  + "[" +  areaId +  "]"
        									  + "[" +  plantId +  "]"
        									  + "[" +  lotType +  "]"
        									  + "[" +  productId +  "]"
        									  + "[" +  productRev +  "]",
        						bModalless : false
        						};

        					var sOption = "titletext=공정별 재공실사 LIST ,modeless=false";
        					this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.tab_page.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.tab_page.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.tab_page.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_tab_page_btn_PRODUCTDEFID_onclick,this);
            this.tab_search.tab_page.form.btn_AREAID.addEventHandler("onclick",this.tab_search_tab_page_btn_AREAID_onclick,this);
            this.div_work.form.btn_WIPCHECKLIST.addEventHandler("onclick",this.div_work_btn_WIPCHECKLIST_onclick,this);
            this.div_work.form.btn_WIPCHECKFINISH.addEventHandler("onclick",this.div_work_btn_WIPCHECKFINISH_onclick,this);
            this.div_work.form.btn_WIPCHECKSTART.addEventHandler("onclick",this.div_work_btn_WIPCHECKSTART_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_main.addEventHandler("oncolumnchanged",this.ds_main_oncolumnchanged,this);
        };
        this.loadIncludeScript("PCM05800M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
