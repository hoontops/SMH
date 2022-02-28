(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMD00100M");
            this.set_titletext("ID Serial관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basIdclass", this);
            obj._setContents("<ColumnInfo><Column id=\"IDCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"IDCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LENGTH\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"IDCLASSID\">1</Col></Row><Row><Col id=\"IDCLASSID\">2</Col></Row><Row><Col id=\"IDCLASSID\">3</Col></Row><Row><Col id=\"IDCLASSID\">4</Col></Row><Row><Col id=\"IDCLASSID\">5</Col></Row><Row><Col id=\"IDCLASSID\">6</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basIdclassserial", this);
            obj._setContents("<ColumnInfo><Column id=\"IDCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PREFIX\" type=\"STRING\" size=\"256\"/><Column id=\"LASTSERIALNO\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basIddefinition", this);
            obj._setContents("<ColumnInfo><Column id=\"IDDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"IDCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"IDDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"IDDEFCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"IDDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LENGTH\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FORMAT\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPTIONCHARS\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("Combo00","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,ValidState,SEL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("ID 그룹");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_00","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","75","107","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","75","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"30","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","40","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"55","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","81","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_work","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_work);
            obj.set_text("ID그룹");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Grid("grd_basIdclass","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_basIdclass");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"104\"/><Column size=\"164\"/><Column size=\"208\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID 그룹\"/><Cell col=\"1\" text=\"ID 그룹명\"/><Cell col=\"2\" text=\"설명\"/><Cell col=\"3\" text=\"전체길이\"/><Cell col=\"4\" text=\"유효상태\"/><Cell col=\"5\" text=\"생성자\"/><Cell col=\"6\" text=\"생성일\"/><Cell col=\"7\" text=\"수정자\"/><Cell col=\"8\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:IDCLASSID\"/><Cell col=\"1\" text=\"bind:IDCLASSNAME\"/><Cell col=\"2\" text=\"bind:DESCRIPTION\"/><Cell col=\"3\" text=\"bind:LENGTH\"/><Cell col=\"4\" text=\"bind:VALIDSTATE\"/><Cell col=\"5\" text=\"bind:CREATOR\"/><Cell col=\"6\" text=\"bind:CREATEDTIME\"/><Cell col=\"7\" text=\"bind:MODIFIER\"/><Cell col=\"8\" text=\"bind:MODIFIEDTIME\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","141","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("ID 그룹 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            this.div_work.form.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_addRow_ds_basIdclass",null,"6","26","24","111",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_basIdclass",null,"6","26","24","85",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_copyRow_ds_basIdclass",null,"6","27","24","58",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.form.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basIdclass",null,"6","29","24","29",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_work);
            obj.set_text("ID정의");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Grid("grd_basIddefinition","1","34",null,null,"1","354",null,null,null,null,this.div_work.form.tab_work.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_basIddefinition");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"132\"/><Column size=\"234\"/><Column size=\"116\"/><Column size=\"80\"/><Column size=\"115\"/><Column size=\"135\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID 정의\"/><Cell col=\"1\" text=\"ID 정의명\"/><Cell col=\"2\" text=\"ID 타입\"/><Cell col=\"3\" text=\"전체길이\"/><Cell col=\"4\" text=\"포맷\"/><Cell col=\"5\" text=\"ID 구분\"/><Cell col=\"6\" text=\"ID 순서\"/><Cell col=\"7\" text=\"유효상태\"/></Band><Band id=\"body\"><Cell text=\"bind:IDDEFID\"/><Cell col=\"1\" text=\"bind:IDDEFNAME\"/><Cell col=\"2\" text=\"bind:IDDEFTYPE\"/><Cell col=\"3\" text=\"bind:LENGTH\"/><Cell col=\"4\" text=\"bind:FORMAT\"/><Cell col=\"5\" text=\"bind:IDDEFCATEGORY\"/><Cell col=\"6\" text=\"bind:SEQUENCE\"/><Cell col=\"7\" text=\"bind:VALIDSTATE\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_basIdclassserial00","1",null,null,"311","1","1",null,null,null,null,this.div_work.form.tab_work.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_basIdclassserial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID Serial No\"/><Cell col=\"1\" text=\"생성자\"/><Cell col=\"2\" text=\"생성일\"/></Band><Band id=\"body\"><Cell text=\"bind:LASTSERIALNO\"/><Cell col=\"1\" text=\"bind:CREATOR\"/><Cell col=\"2\" text=\"bind:CREATEDTIME\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_basIdclassserial",null,"343","29","24","5",null,null,null,null,null,this.div_work.form.tab_work.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","7","2","141","28",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("코드 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            this.div_work.form.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_00","8",null,"141","28",null,"315",null,null,null,null,this.div_work.form.tab_work.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("ID Serial 이력");
            obj.set_cssclass("sta_WF_subTitle");
            this.div_work.form.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"5","26","24","116",null,null,null,null,null,this.div_work.form.tab_work.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"5","26","24","90",null,null,null,null,null,this.div_work.form.tab_work.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_copy",null,"5","27","24","63",null,null,null,null,null,this.div_work.form.tab_work.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.form.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basIddefinition",null,"5","29","24","34",null,null,null,null,null,this.div_work.form.tab_work.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"5","29","24","5",null,null,null,null,null,this.div_work.form.tab_work.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","206","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","31",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","62",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"16","26","24","93",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_del");
            obj.set_tooltiptext("Toolbar_Delete");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","124",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"16","26","24","155",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_com_new");
            obj.set_tooltiptext("Toolbar_New");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","130","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","100","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("화면명");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("template00.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: ID Serial 관리
         * 파일명 		: CMD00100.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.01.11
         *
         * 설  명		: ID Serial 조회/수정/삭제/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.01.11	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	//this.div_page.set_visible(true);

        	// paging
        	//this.fn_paging_onload(obj);
        	// paging end
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function(obj,e)
        {
        	alert(0);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        };

        /*
         * 기능 : 신규
         */
        this.fn_new = function(obj,e)
        {
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function(obj,e)
        {
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delelete = function(obj,e)
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

        /*
         * 기능 : work영역 초기화  => 공통처리
         */
        this.fn_reset = function(obj,e)
        {
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        }


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/


        this.div_work_tab_Tabpage1_btn_xlDn_grd_basIdclass_onclick = function(obj,e)
        {
        	var sName = "grd_basIdclass";
        	// 저장될 엑셀명
        	var file_name = "공통코드";
        	this.gfn_export_excel(sName, "Sheet1", file_name, "EXCEL");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_new.addEventHandler("onclick",this.fn_new,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("template00.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
