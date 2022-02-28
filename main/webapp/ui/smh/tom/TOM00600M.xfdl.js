(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TOM00600M");
            this.set_titletext("치공구 수리결과 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1290,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_toolRepairResult", this);
            obj._setContents("<ColumnInfo><Column id=\"SENDDATE\" size=\"256\" type=\"STRING\"/><Column id=\"SENDSEQUENCE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLREPAIRTYPEID\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLREPAIRTYPE\" size=\"256\" type=\"STRING\"/><Column id=\"REQUESTDATE\" size=\"256\" type=\"STRING\"/><Column id=\"REQUESTSEQUENCE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLMAKETYPEID\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLMAKETYPE\" size=\"256\" type=\"STRING\"/><Column id=\"NEXTDURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNUMBER\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLNAME\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLNUMBER3\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTDURABLELOTID3\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTAREAID\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTAREA\" size=\"256\" type=\"STRING\"/><Column id=\"ISMODIFY\" size=\"256\" type=\"STRING\"/><Column id=\"REPAIRFINISHDATE2\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRFINISHDATE\" size=\"256\" type=\"STRING\"/><Column id=\"REPAIRFINISHERID\" size=\"256\" type=\"STRING\"/><Column id=\"REPAIRFINISHER\" size=\"256\" type=\"STRING\"/><Column id=\"REPAIRDESCRIPTION\" size=\"256\" type=\"STRING\"/><Column id=\"REPAIRRESULTCOMMENT\" size=\"256\" type=\"STRING\"/><Column id=\"PRODUCTDEFID\" size=\"256\" type=\"STRING\"/><Column id=\"PRODUCTDEFNAME\" size=\"256\" type=\"STRING\"/><Column id=\"WEIGHT\" size=\"256\" type=\"STRING\"/><Column id=\"HORIZONTAL\" size=\"256\" type=\"STRING\"/><Column id=\"VERTICAL\" size=\"256\" type=\"STRING\"/><Column id=\"THEIGHT\" size=\"256\" type=\"STRING\"/><Column id=\"POLISHTHICKNESS\" size=\"256\" type=\"STRING\"/><Column id=\"TOTALPOLISHTHICKNESS\" size=\"256\" type=\"STRING\"/><Column id=\"ORIGINTHICKNESS\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLTHICKNESSLIMIT\" size=\"256\" type=\"STRING\"/><Column id=\"CREATEDTHICKNESS\" size=\"256\" type=\"STRING\"/><Column id=\"REQUESTDATE\" size=\"256\" type=\"STRING\"/><Column id=\"REQUESTSEQUENCE\" size=\"256\" type=\"STRING\"/><Column id=\"REQUESTUSERID\" size=\"256\" type=\"STRING\"/><Column id=\"REQUESTUSER\" size=\"256\" type=\"STRING\"/><Column id=\"ISUPDATE\" size=\"256\" type=\"STRING\"/><Column id=\"VENDORID\" size=\"256\" type=\"STRING\"/><Column id=\"MAKEVENDOR\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLFORMCODE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLFORM\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLCATEGORYID\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLCATEGORY\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLCATEGORYDETAILID\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLCATEGORYDETAIL\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLDETAILID\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLDETAIL\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_SENDDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_SENDDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLREGISTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTLOGINID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"P_TOOLNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_siteId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_term","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("출고기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodFr","108","110",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType","11","135","94","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("사용자정의");
            obj.set_value("");
            obj.set_index("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodTo","108","135",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_area","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("입고작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREANAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_area","108","60",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"60","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_product","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_product",null,"185","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_product","108","185",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_toolCode","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("Tool 코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_toolCode","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"205","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","225","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","231","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","225","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_manufactId","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("제작업체");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_vendor","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_vendor",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_condition","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("수리결과");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_condition","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_codecolumn("C,ToolResultType,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","260","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_toolRepairResult","155","0","150","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title0","1","0","144","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("치공구 수리결과 목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_head","0","34",null,null,"2","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_toolRepairResult");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"41\"/><Column size=\"118\"/><Column size=\"59\"/><Column size=\"50\"/><Column size=\"85\"/><Column size=\"54\"/><Column size=\"0\"/><Column size=\"50\"/><Column size=\"0\"/><Column size=\"131\"/><Column size=\"131\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"72\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"57\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"59\"/><Column size=\"118\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"출고일\"/><Cell col=\"2\" text=\"출고순번\"/><Cell col=\"3\" text=\"수리구분\"/><Cell col=\"4\" text=\"의뢰일\"/><Cell col=\"5\" text=\"의뢰순번\"/><Cell col=\"6\" text=\"제작구분아이디---HIDDEN\"/><Cell col=\"7\" text=\"제작구분\"/><Cell col=\"8\" text=\"Tool번호---HIDDEN\"/><Cell col=\"9\" text=\"Tool 코드\"/><Cell col=\"10\" text=\"이전 Tool 코드\"/><Cell col=\"11\" text=\"Tool명칭---HIDDEN\"/><Cell col=\"12\" text=\"입고작업장아이디---HIDDEN\"/><Cell col=\"13\" text=\"Tool구분아이디---HIDDEN\"/><Cell col=\"14\" text=\"TOOL 구분\"/><Cell col=\"15\" text=\"Tool유형아이디---HIDDEN\"/><Cell col=\"16\" text=\"TOOL 유형\"/><Cell col=\"17\" text=\"Tool유형아이디---HIDDEN\"/><Cell col=\"18\" text=\"TOOL 종류\"/><Cell col=\"19\" text=\"품목코드\"/><Cell col=\"20\" text=\"품목 Rev.\"/><Cell col=\"21\" text=\"품목명\"/><Cell col=\"22\" text=\"제작업체\"/><Cell col=\"23\" text=\"입고작업장\"/><Cell col=\"24\" text=\"수리요청사항\"/><Cell col=\"25\" text=\"수리결과\" cssclass=\"cell_point\"/><Cell col=\"26\" text=\"연마여부\" tooltiptext=\"POLISH\" cssclass=\"cell_point\"/><Cell col=\"27\" text=\"수리완료일\"/><Cell col=\"28\" text=\"수리자아이디---HIDDEN\"/><Cell col=\"29\" text=\"수리완료자\"/><Cell col=\"30\" text=\"무게---HIDDEN\"/><Cell col=\"31\" text=\"가로---HIDDEN\"/><Cell col=\"32\" text=\"세로---HIDDEN\"/><Cell col=\"33\" text=\"높이---HIDDEN\"/><Cell col=\"34\" text=\"연마후두께---HIDDEN\"/><Cell col=\"35\" text=\"연마전두께---HIDDEN\"/><Cell col=\"36\" text=\"연마전두께---HIDDEN\"/><Cell col=\"37\" text=\"두께기준---HIDDEN\"/><Cell col=\"38\" text=\"두께기준---HIDDEN\"/><Cell col=\"39\" text=\"의뢰자---HIDDEN\"/><Cell col=\"40\" text=\"의뢰자---HIDDEN\"/><Cell col=\"41\" text=\"제작업체---HIDDEN\"/><Cell col=\"42\" text=\"VENDORID---HIDDEN\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" textAlign=\"left\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:SENDDATE\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:SENDSEQUENCE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:TOOLREPAIRTYPE\" textAlign=\"center\" displaytype=\"text\" edittype=\"none\" combocodecol=\"C,ToolRepairType,ALL,Y,Y\"/><Cell col=\"4\" text=\"bind:REQUESTDATE\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:REQUESTSEQUENCE\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:TOOLMAKETYPEID\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:TOOLMAKETYPE\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:TOOLNUMBER\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:NEXTDURABLELOTID3\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:TOOLNUMBER3\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:TOOLNAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:RECEIPTAREAID\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:TOOLCATEGORYID\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:TOOLTYPE\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:TOOLCATEGORYDETAILID\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:TOOLFORM\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:TOOLDETAILID\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:TOOLKIND\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:PRODUCTDEFID\" textAlign=\"center\"/><Cell col=\"20\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"center\"/><Cell col=\"21\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"22\" text=\"bind:MAKEVENDOR\" textAlign=\"left\"/><Cell col=\"23\" text=\"bind:RECEIPTAREA\" textAlign=\"left\"/><Cell col=\"24\" text=\"bind:REPAIRDESCRIPTION\" textAlign=\"left\"/><Cell col=\"25\" text=\"bind:REPAIRRESULT\" textAlign=\"left\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"26\" text=\"bind:ISPOLISH\" textAlign=\"left\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"27\" text=\"bind:REPAIRFINISHDATE2\" textAlign=\"left\"/><Cell col=\"28\" text=\"bind:REPAIRFINISHERID\" textAlign=\"left\"/><Cell col=\"29\" text=\"bind:REPAIRFINISHER\" textAlign=\"center\"/><Cell col=\"30\" text=\"bind:WEIGHT\" textAlign=\"left\"/><Cell col=\"31\" text=\"bind:HORIZONTAL\" textAlign=\"left\"/><Cell col=\"32\" text=\"bind:VERTICAL\" textAlign=\"left\"/><Cell col=\"33\" text=\"bind:THEIGHT\" textAlign=\"left\"/><Cell col=\"34\" text=\"bind:POLISHTHICKNESS\" textAlign=\"left\"/><Cell col=\"35\" text=\"bind:TOTALPOLISHTHICKNESS\" textAlign=\"left\"/><Cell col=\"36\" text=\"bind:ORIGINTHICKNESS\" textAlign=\"left\"/><Cell col=\"37\" text=\"bind:TOOLTHICKNESSLIMIT\" textAlign=\"left\"/><Cell col=\"38\" text=\"bind:CREATEDTHICKNESS\" textAlign=\"left\"/><Cell col=\"39\" text=\"bind:REQUESTUSER\" textAlign=\"left\"/><Cell col=\"40\" text=\"bind:REQUESTUSERID\" textAlign=\"left\"/><Cell col=\"41\" text=\"bind:MAKEVENDOR\" textAlign=\"left\"/><Cell col=\"42\" text=\"bind:VENDORID\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_toolRepairResult",null,"5","26","24","6",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_visible("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset2",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
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
            obj.set_enable("true");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","124",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","170","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_text("치공구 수리결과 등록");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1290,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TOM00600M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("TOM00600M.xfdl","lib::lib_tom.xjs");
        this.registerScript("TOM00600M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 치공구 현황 조회
         * 파일명 		: TOM01100M.xfdl
         * 작성자 		: 박현우
         * 작성일 		: 2021.02.01
         *
         * 설  명		: 치공구 현황 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.10	박현우   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.Tabpage1.form;
        this.headerDiv = this.div_header.form; //저장영역
        this.gridDiv = this.div_work.form; //저장영역

        this.productId = ''; //제품Id(조회조건)
        this.productVer = ''; //제품Ver(조회조건)
        this.areaId = ''; //작업장Id(조회조건)
        this.vendorId = ''; //제작업체Id(조회조건)

        this.fv_rtnValue = ''; //팝업화면 리턴값 변수

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_initCombo();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_toolRepairResult.clearData();

        	//제작업체명이 공백이면 제작처Id 공백 처리
        	if(this.searchDiv.edt_vendor.value=='') {
        		this.vendorId = '';
        	}

        	//작업장명이 공백이면 작업장Id 공백 처리
        	if(this.searchDiv.edt_area.value=='') {
        		this.areaId = '';
        	}

        	//품목코드명이 공백이면 코드/버젼 공백 처리
        	if(this.searchDiv.edt_product.value=='') {
        		this.productId = '';
        		this.productVer = '';
        	}

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "P_PLANTID", 				this.nfn_nvl(this.searchDiv.cbo_siteId.value, ""));
        	this.ds_search.setColumn(0, "PRODUCTDEFID", 			this.nfn_nvl(this.productId, "")); //품목Id
        	this.ds_search.setColumn(0, "P_TOOLNO", 				this.nfn_nvl(this.searchDiv.edt_toolCode.value, "")); //TOOL코드
        	this.ds_search.setColumn(0, "VENDORID", 				this.nfn_nvl(this.vendorId, "")); //제작업체
        	this.ds_search.setColumn(0, "AREAID", 					this.nfn_nvl(this.areaId, "")); //작업장Id
        	this.ds_search.setColumn(0, "TOOLREGISTTYPE", 			this.nfn_nvl(this.searchDiv.cbo_condition.value, "")); //수리결과
        	this.ds_search.setColumn(0, "P_SENDDATE_PERIODFR", 		this.nfn_nvl(this.searchDiv.cal_periodFr.value, "")); //시작일자
        	this.ds_search.setColumn(0, "P_SENDDATE_PERIODTO", 		this.nfn_nvl(this.searchDiv.cal_periodTo.value, "")); //종료일자
        	this.ds_search.setColumn(0, "CURRENTLOGINID", 			this.tomfn_getUserId()); //사용자Id
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectRegistToolRepairListForResultByToolList");

        	var sSvcID 			= "selectRegistToolRepairListForResultByToolList";
        	var sController 	= "/tom00600/selectRegistToolRepairListForResultByToolList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_toolRepairResult=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	//1. 변경 데이터 존재 확인
        	if(!this.gfn_dsIsUpdated(this.ds_toolRepairResult)){ //변경데이터 확인
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	var component = this.gridDiv.grd_head;
        	var strColIdList = "REPAIRRESULT";

        	/* 그리드 필수 입력 체크 */
        	if(!this.nfn_MandatoryCheckGrid(component, strColIdList)) return;

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveToolRegistRepairResult";
        	var sController 	= "/tom00600/saveToolRegistRepairResult.do";
        	var sInDatasets 	= "INPUT=ds_toolRepairResult:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        };

        /*
         * 기능 : 복사
         */
        this.fn_copy = function(obj,e)
        {
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD != 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	switch(trId) {
        		case "selectTomPlantList":	//[조회조건] Site Callback
        			this.searchDiv.cbo_siteId.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        			this.gridDiv.btn_delRow_ds_toolRepairResult.set_visible(false);
        			break;
        		case "selectPeriodQueryCmb": //[조회조건] Period dataset Callback
        			this.fn_setDate("THISMONTH");
        			break;
        		case "selectRegistToolRepairListForResultByToolList": //[상단]그리드 CALLBACK
        			break;
        		case "saveToolRegistRepairResult":
        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장이 완료되었습니다.
        			this.fn_search();
        			break;
        		default:
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        /*
         * 기능(공통팝업) : '작업장' Text 조회
         */
        this.fn_openPop = function(svcId, popId, pArg)
        {
        	// gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
        	//-----------------
        	// arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅
        	// popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        	// popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        	// rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        	// paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        	// paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        	// searchStr   : 팝업 조회조건 콤보값 = 조회 값

        	var popupId = svcId;
        	var oArg = {};
        	var opts = "width=650,height=500";

        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");
        	oArg.arg_searchStr = "";

        	if(popId=="P00126"){ //품목코드 조회
        		oArg.arg_searchStr = "PRODUCTDEFID="+this.searchDiv.edt_product.value;//조회조건의 품목명
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        	}else if(popId=="P00063"){ //작업장조회 조회
        		oArg.arg_searchStr = "AREANAME="+this.searchDiv.edt_area.value;//조회조건의 작업장
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        	}else if(popId=="P00145"){ //거래처(협력업체) 조회
        		oArg.arg_searchStr = "VENDORNAME="+this.searchDiv.edt_vendor.value;//조회조건의 협력업체
        		oArg.arg_rtnCols = "VENDORID|VENDORNAME";
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_PRODUCT")
        	{
        		this.searchDiv.edt_product.set_value(rtn[1]);
        		this.productId = rtn[0]; //HIDDEN 필드
        		this.productVer = rtn[2]; //HIDDEN 필드
        	} else if(sPopupId == "SCH_AREA")
        	{
        		this.searchDiv.edt_area.set_value(rtn[1]);
        		this.areaId = rtn[0];
        	} else if(sPopupId == "SCH_VENDOR") //제작업체
        	{
        		this.searchDiv.edt_vendor.set_value(rtn[1]);
        		this.vendorId = rtn[0]; //HIDDEN 필드
        	}
        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        	this.tomfn_getPeriodData("ds_periodType","","fn_callBack");
        	this.searchDiv.cbo_periodType.set_value("THISMONTH"); // 금월

        	this.fn_initSiteCombo();
        }

        /*
         * 기능 : 'Site' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());

        	this.tomfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cbo_siteId // Object
        								, "selectTomPlantList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack"); //콜백함수 지정
        }

        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function ()
        {
        	this.searchDiv.cbo_periodType.set_value("CUSTOM");
        }

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.searchDiv.cal_periodFr.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.searchDiv.cal_periodTo.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_Tabpage1_cbo_periodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate(e.postvalue);
        	}
        };

        this.tab_search_Tabpage1_btn_vendor_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);

        	this.fn_openPop("SCH_VENDOR","P00145", sArgs); //제작처(협력업체) 조회
        };

        this.tab_search_Tabpage1_btn_area_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("CURRENTLOGINID", this.gf_getUserAcnt()); //로그인 ID
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.fn_openPop("SCH_AREA","P00063", sArgs); //작업장 조회
        };

        this.tab_search_Tabpage1_btn_product_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("P_PRODUCTDEFTYPE", "Product");

        	this.fn_openPop("SCH_PRODUCT","P00126", sArgs); //품목코드 조회
        };

        this.ds_toolRepairResult_oncolumnchanged = function(obj,e)
        {
        	var isPolish = this.nfn_nvl(this.ds_toolRepairResult.getColumn(this.ds_toolRepairResult.rowposition, "ISPOLISH"));
        	if(isPolish==1){//연마구분 체크된 상태면
        		this.ds_toolRepairResult.setColumn(this.ds_toolRepairResult.rowposition, "TOOLREPAIRTYPEID", "Repair");
        	}
        };

        this.tab_search_Tabpage1_edt_vendor_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_vendor_onclick();
        	}
        };

        this.tab_search_Tabpage1_edt_area_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_area_onclick();
        	}
        };

        this.tab_search_Tabpage1_edt_product_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_product_onclick();
        	}
        };

        this.fn_searchClear = function(obj,e)
        {
        	this.searchDiv.cbo_siteId.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.

        	this.searchDiv.cbo_periodType.set_value("THISMONTH"); // 금월
        	this.fn_setDate("THISMONTH");

        	this.productId = ''; //제품Id(조회조건)
        	this.productVer = ''; //제품Ver(조회조건)
        	this.areaId = ''; //작업장Id(조회조건)
        	this.vendorId = ''; //제작업체Id(조회조건)
        };
        this.div_header_btn_reset2_onclick = function(obj,e)
        {
        	this.ds_toolRepairResult.clearData();
        	var strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.gridDiv.sta_cnt_ds_toolRepairResult.set_text(strCnt);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.tab_search.Tabpage1.form.cbo_siteId.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_siteId_onitemchanged,this);
            this.tab_search.Tabpage1.form.cal_periodFr.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cbo_periodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_periodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.cal_periodTo.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.edt_area.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_area_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_area.addEventHandler("onclick",this.tab_search_Tabpage1_btn_area_onclick,this);
            this.tab_search.Tabpage1.form.btn_product.addEventHandler("onclick",this.tab_search_Tabpage1_btn_product_onclick,this);
            this.tab_search.Tabpage1.form.edt_product.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_product_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.edt_vendor.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_vendor_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_vendor.addEventHandler("onclick",this.tab_search_Tabpage1_btn_vendor_onclick,this);
            this.tab_search.Tabpage1.form.cbo_condition.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_siteId_onitemchanged,this);
            this.div_work.form.grd_head.addEventHandler("oncellclick",this.div_work_grd_request_oncellclick,this);
            this.div_header.form.btn_reset2.addEventHandler("onclick",this.div_header_btn_reset2_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_toolRepairResult.addEventHandler("oncolumnchanged",this.ds_toolRepairResult_oncolumnchanged,this);
        };
        this.loadIncludeScript("TOM00600M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
