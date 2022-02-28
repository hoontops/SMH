(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM00910M");
            this.set_titletext("자재 인수");
            if (Form == this.constructor)
            {
                this._setFormPosition(1290,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_matrialDischarge", this);
            obj._setContents("<ColumnInfo><Column id=\"REQUESTID\" type=\"STRING\" size=\"256\"/><Column id=\"INBOUNDNO\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"REQDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKRECEIVE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUENUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_WARESHOUSE\" type=\"STRING\" size=\"256\"/><Column id=\"P_AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_REQUESTNO\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONSUMERELEASESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTNO\" type=\"STRING\" size=\"256\"/><Column id=\"INBOUNDNO\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSACTIONSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"INQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEUSER\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHALFPRODUCT\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_siteId","115","10","158","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_type("filter");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_term","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_warehouse","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("창고");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_warehouse",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_warehouse","115","85",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","222","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","17","222","145","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"202","45","20","86",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","162","228","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType","17","60","93","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("사용자정의");
            obj.set_value("");
            obj.set_index("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodFr","115","35",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodTo","115","60",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_dischageStatus","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("불출상태");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_dischageStatus","115","185","158","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_codecolumn("C,ConsumableReleaseState,ALL,Y,Y");
            obj.set_type("filter");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_materialDefId","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("자재코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_materialDefId","115","160",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_materialDefId",null,"160","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_resource","309","16","79","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("자원명");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_resourceName","382","16","195","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_resource00","312","10","79","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("자원명");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_resourceName00","385","10","195","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_requestNo","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("청구번호");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_requestNo","115","110","158","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_lotNo","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("Lot No");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_lotNo","115","135","158","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","270","34",null,null,null,null,null,null,this);
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

            obj = new Grid("grd_processSegment","0","34",null,"49.79%","2",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_matrialDischarge");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"84\"/><Column size=\"0\"/><Column size=\"95\"/><Column size=\"0\"/><Column size=\"250\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"118\"/><Column size=\"100\"/><Column size=\"118\"/><Column size=\"0\"/><Column size=\"118\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"청구번호\"/><Cell col=\"2\" text=\"INBOUNDNO---HIDDEN\"/><Cell col=\"3\" text=\"자재 ID\"/><Cell col=\"4\" text=\"CONSUMABLEDEFVERSION---HIDDEN\"/><Cell col=\"5\" text=\"자재명\"/><Cell col=\"6\" text=\"WAREHOUSEID---HIDDEN\"/><Cell col=\"7\" text=\"창고 ID\"/><Cell col=\"8\" text=\"창고명\"/><Cell col=\"9\" text=\"AREAID---HIDDEN\"/><Cell col=\"10\" text=\"청구수량\"/><Cell col=\"11\" text=\"인수수량\"/><Cell col=\"12\" text=\"잔량\"/><Cell col=\"13\" text=\"입고일\"/><Cell col=\"14\" text=\"요청자\"/><Cell col=\"15\" text=\"요청일\"/><Cell col=\"16\" text=\"CHECKRECEIVE---HIDDEN\"/><Cell col=\"17\" text=\"불출번호\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:REQUESTID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:INBOUNDNO\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:CONSUMABLEDEFID\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:CONSUMABLEDEFVERSION\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:WAREHOUSEID\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:WAREHOUSEID\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:WAREHOUSENAME\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:AREAID\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:CHARGEQTY\" textAlign=\"right\" displaytype=\"number\" maskeditformat=\"#,##0.000000000\"/><Cell col=\"11\" text=\"bind:ISSUEQTY\" textAlign=\"right\" displaytype=\"number\" maskeditformat=\"#,##0.000000000\"/><Cell col=\"12\" text=\"bind:LEFTQTY\" textAlign=\"right\" displaytype=\"number\" maskeditformat=\"#,##0.000000000\"/><Cell col=\"13\" text=\"bind:RECEIPTDATE\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:REQUESTUSER\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:REQDATE\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:CHECKRECEIVE\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:ISSUENUM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title2","2","grd_processSegment:0","90","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("자재 LOT 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_lotInfo","title2:20","grd_processSegment:0","150","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_lotInfo","0","sta_cnt_ds_lotInfo:0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_lotInfo");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"35\"/><Column size=\"88\"/><Column size=\"0\"/><Column size=\"250\"/><Column size=\"178\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"38\"/><Column size=\"85\"/><Column size=\"100\"/><Column size=\"118\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"청구번호---HIDDEN\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"자재 ID\"/><Cell col=\"3\" text=\"자재품목명---HIDDEN\"/><Cell col=\"4\" text=\"자재명\"/><Cell col=\"5\" text=\"자재 LOT No\"/><Cell col=\"6\" text=\"창고명---HIDDEN\"/><Cell col=\"7\" text=\"작업장명---HIDDEN\"/><Cell col=\"8\" text=\"창고 ID\"/><Cell col=\"9\" text=\"창고명\"/><Cell col=\"10\" text=\"단위\"/><Cell col=\"11\" text=\"인수 수량\"/><Cell col=\"12\" text=\"인수자\"/><Cell col=\"13\" text=\"인수일\"/><Cell col=\"14\" text=\"반제품입고여부\"/><Cell col=\"15\" text=\"ISHALFPRODUCT---HIDDEN\"/></Band><Band id=\"body\"><Cell text=\"bind:INBOUNDNO\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:CHK\" textAlign=\"left\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"bind:CONSUMABLEDEFID\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:CONSUMABLEDEFVERSION\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:CONSUMABLELOTID\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:AREAID\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:WAREHOUSEID\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:WAREHOUSEID\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:WAREHOUSENAME\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:UNIT\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:INQTY\" textAlign=\"right\" maskeditformat=\"#,##0.000000000\"/><Cell col=\"12\" text=\"bind:RECEIVEUSER\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:RECEIVEDATE\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:RECEIVEDATE\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:ISHALFPRODUCT\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title0","1","0","101","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("불출 요청 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_matrialDischarge","title0:20","0","87","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
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

            obj = new Button("btn_save",null,"16","26","24","95",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","133","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_text("자재 인수");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
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
        this.addIncludeScript("PCM09100M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM09100M.xfdl","lib::lib_tom.xjs");
        this.registerScript("PCM09100M.xfdl", function() {
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

        this.warehouseId = ''; //창고Id(조회조건)

        //저장위치기억변수
        this.oldRequestId = '';
        this.oldConsumableDefId = '';

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
         * 기능 : 검색 (상단 조회)
         */
        this.fn_search = function (obj, e)
        {
        	//작업장명이 공백이면 작업장Id 공백 처리
        	if(this.searchDiv.edt_warehouse.value=='' || this.warehouseId =='') {
        		alert('창고를 선택 바랍니다.');
        		this.warehouseId = '';
        		this.searchDiv.edt_warehouse.setFocus();
        		return;
        	}

        	this.ds_matrialDischarge.clearData();
        	this.ds_lotInfo.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "P_PLANTID", 				this.gf_getEnterpriseId());

        	this.ds_search.setColumn(0, "P_AREAID", 				""); //작업장Id
        	this.ds_search.setColumn(0, "P_WARESHOUSE",				this.nfn_nvl(this.warehouseId, "")); //창고
        	this.ds_search.setColumn(0, "P_CONSUMABLEDEFID", 		this.nfn_nvl(this.edt_materialDefId, "")); //자재코드
        	this.ds_search.setColumn(0, "P_REQUESTNO", 				this.nfn_nvl(this.searchDiv.edt_requestNo.value, "")); //청구번호
        	this.ds_search.setColumn(0, "P_LOTID", 					this.nfn_nvl(this.searchDiv.edt_lotNo.value, "")); //LOT번호
        	this.ds_search.setColumn(0, "P_CONSUMERELEASESTATE", 	this.nfn_nvl(this.searchDiv.cbo_dischageStatus.value, "")); //불출상태
        	this.ds_search.setColumn(0, "P_PERIOD_PERIODFR", 		this.nfn_nvl(this.searchDiv.cal_periodFr.value, "")); //시작일자
        	this.ds_search.setColumn(0, "P_PERIOD_PERIODTO", 		this.nfn_nvl(this.searchDiv.cal_periodTo.value, "")); //종료일자
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectConsumableRequestStateList");

        	var sSvcID 			= "selectConsumableRequestStateList";
        	var sController 	= "/pcm09100/selectConsumableRequestStateList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_matrialDischarge=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 (의뢰Lot 조회)
         */
        this.fn_detailSearch = function ()
        {
        	var chkCnt1 = this.ds_matrialDischarge.getCaseCount("CHK=='1'");
        	var multiProductDefId = '';
        	var temp1 = '';
        	var temp2 = '';
        	var temp3 = '';
        	var chkStr = '';
        	var sz1 = this.ds_matrialDischarge.rowcount;
        	var cnt1 = 0;

        	for(var i=0;i<sz1;i++)
        	{
        		chkStr = this.nfn_nvl(this.ds_matrialDischarge.getColumn(i, "CHK"));
        		if(chkStr == '1'){ //선택된ROW라면
        			temp1 = this.nfn_nvl(this.ds_matrialDischarge.getColumn(i, "REQUESTID"));
        			temp2 = this.nfn_nvl(this.ds_matrialDischarge.getColumn(i, "CONSUMABLEDEFID"));
        			temp3 = this.nfn_nvl(this.ds_matrialDischarge.getColumn(i, "WAREHOUSEID"));
        			if(cnt1<chkCnt1-1){
        				multiProductDefId = multiProductDefId + temp1+"|"+temp2+"|"+temp3+",";
        			}else{
        				multiProductDefId = multiProductDefId + temp1+"|"+temp2+"|"+temp3;
        			}
        			cnt1 = cnt1 + 1;
        		}
        	}

        	if(multiProductDefId==''){
        		temp1 = this.nfn_nvl(this.ds_matrialDischarge.getColumn(this.ds_matrialDischarge.rowposition, "REQUESTID"));
        		temp2 = this.nfn_nvl(this.ds_matrialDischarge.getColumn(this.ds_matrialDischarge.rowposition, "CONSUMABLEDEFID"));
        		temp3 = this.nfn_nvl(this.ds_matrialDischarge.getColumn(this.ds_matrialDischarge.rowposition, "WAREHOUSEID"));
        		multiProductDefId = temp1+"|"+temp2+"|"+temp3;
        	}

        	this.ds_lotInfo.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "P_PLANTID", 				this.nfn_nvl(this.searchDiv.cbo_siteId.value, "")); //사이트ID

        	this.ds_search.setColumn(0, "P_PRODUCTDEFID",			multiProductDefId);

        	//this.ds_search.setColumn(0, "P_REQUESTNO", 				this.nfn_nvl(this.ds_matrialDischarge.getColumn(this.ds_matrialDischarge.rowposition, "REQUESTID"), "")); //청구번호
        	//this.ds_search.setColumn(0, "P_CONSUMABLEDEFID",		this.nfn_nvl(this.ds_matrialDischarge.getColumn(this.ds_matrialDischarge.rowposition, "CONSUMABLEDEFID"), "")); //자재ID
        	//this.ds_search.setColumn(0, "P_CONSUMABLEDEFVERSION",	this.nfn_nvl(this.ds_matrialDischarge.getColumn(this.ds_matrialDischarge.rowposition, "CONSUMABLEDEFVERSION"), ""));
        	//this.ds_search.setColumn(0, "P_WAREHOUSEID",			this.nfn_nvl(this.ds_matrialDischarge.getColumn(this.ds_matrialDischarge.rowposition, "WAREHOUSEID"), ""));

        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectConsumableLotByInboundNoList");

        	var sSvcID 			= "selectConsumableLotByInboundNoList";
        	var sController 	= "/pcm09100/selectConsumableLotByInboundNoList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_lotInfo=output";
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
        	if(!this.gfn_dsIsUpdated(this.ds_lotInfo)){ //변경데이터 확인
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	//Save master pos
        	this.oldRequestId = this.ds_matrialDischarge.getColumn(this.ds_matrialDischarge.rowposition, "REQUESTID"); //상단 저장위치
        	this.oldConsumableDefId = this.ds_matrialDischarge.getColumn(this.ds_matrialDischarge.rowposition, "CONSUMABLEDEFID");

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveInputLot";
        	var sController 	= "/pcm09100/saveInputLot.do";
        	var sInDatasets 	= "INPUT=ds_lotInfo:U";
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
        			break;
        		case "selectPeriodQueryCmb": //[조회조건] Period dataset Callback
        			this.fn_setDate("THISMONTH");
        			break;
        		case "selectConsumableRequestStateList": //[상단]그리드 CALLBACK
        			if (this.ds_matrialDischarge.rowcount > 0)
        			{
        				if(this.oldRequestId != '' && this.oldConsumableDefId != ''){//save pos restore
        					var restorePos = this.ds_matrialDischarge.findRowExpr("REQUESTID=='" + this.oldRequestId + "' && CONSUMABLEDEFID=='" + this.oldConsumableDefId + "'");
        					this.ds_matrialDischarge.set_rowposition(restorePos);
        					this.oldRequestId  = "";
        					this.oldConsumableDefId  = "";
        				}else{
        					this.ds_matrialDischarge.set_rowposition(0);
        				}

        				this.btnControl();

        				this.fn_detailSearch();
        			}
        			break;
        		case "selectConsumableLotByInboundNoList": //[하단]그리드 CALLBACK
        			if (this.ds_lotInfo.rowcount > 0)
        			{
        				var sz = this.ds_lotInfo.rowcount;
        				//alert(sz);
        				var lotId = '';
        				for(var i=0;i<sz;i++){
        					lotId = this.nfn_nvl(this.ds_lotInfo.getColumn(i, "CONSUMABLELOTID"),'');
        					//alert(lotId);
        					if(lotId=='*'){
        						//alert('DELETE LOT :: '+this.nfn_nvl(this.ds_lotInfo.getColumn(i, "CONSUMABLELOTID"),''));
        						this.ds_lotInfo.deleteRow(i);
        					}
        				}
        			}
        			break;
        		case "saveInputLot":
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

        	if(popId=="P00131"){ //창고
        		oArg.arg_searchStr   = "P_WAREHOUSENAME=" +this.nfn_nvl(this.searchDiv.edt_warehouse.value,''); //조회조건의 창고
        		oArg.arg_rtnCols = "WAREHOUSEID|WAREHOUSENAME";
        	}else if(popId=="P00162"){ //자재코드
        		oArg.arg_searchStr   = "MATERIAL=" +this.nfn_nvl(this.searchDiv.edt_materialDefId.value,''); //조회조건의 자재코드
        		oArg.arg_rtnCols = "CONSUMABLENUM";
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_WAREHOUSE") //창고
        	{
        		this.searchDiv.edt_warehouse.set_value(rtn[1]);
        		this.warehouseId = rtn[0]; //HIDDEN 필드
        		this.searchDiv.edt_warehouse.set_value(rtn[1]);
        	} else if(sPopupId == "SCH_MATRIALDEF") //자재코드
        	{
        		this.searchDiv.edt_materialDefId.set_value(rtn[0]);
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

        this.orderBtnControlPrepare = function(pRow)
        {
        	this.ds_matrialDischarge.set_rowposition(pRow);
        	//this.orderBtnControl();
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

        //창고 : 공통 팝업
        this.tab_search_Tabpage1_btn_warehouse_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("P_PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("USERID", this.gf_getUserId());

        	this.fn_openPop("SCH_WAREHOUSE","P00131", sArgs); //작업장 조회
        };

        //자재코드 : 공통 팝업
        this.tab_search_Tabpage1_btn_materialDefId_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("VALIDSTATE", "Valid");
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.fn_openPop("SCH_MATRIALDEF","P00162", sArgs); //자재 조회
        };

        this.btnControl = function()
        {
        }

        //조회조건 : 창고 엔터
        this.tab_search_Tabpage1_edt_warehouse_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_warehouse_onclick();
        	}
        };

        //조회조건 : 자재코드 엔터
        this.tab_search_Tabpage1_edt_materialDefId_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_materialDefId_onclick();
        	}
        };

        //조회조건 Clear
        this.fn_searchClear = function(obj,e)
        {
        	this.searchDiv.cbo_siteId.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.

        	this.warehouseId = '';

        	this.searchDiv.cbo_periodType.set_value("THISMONTH"); // 금월
        	this.fn_setDate("THISMONTH");
        };

        //reset
        this.div_header_btn_reset2_onclick = function(obj,e)
        {
        	this.ds_matrialDischarge.clearData();
        	this.ds_lotInfo.clearData();

        	var strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.div_work.form.sta_cnt_ds_matrialDischarge.set_text(strCnt);
        	strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.div_work.form.sta_cnt_ds_lotInfo.set_text(strCnt);
        };

        this.div_work_grd_request_oncellclick = function(obj,e)
        {
        	this.fn_detailSearch();
        };

        this.div_work_grd_requestDetail_oncellclick = function(obj,e)
        {
        	var btnIsEnable = this.div_header.form.btn_save.enable;
        	var selVal = this.nfn_nvl(this.ds_lotInfo.getColumn(this.ds_lotInfo.rowposition, "RECEIVEUSER"),'');
        	if(selVal==''){
        		this.headerDiv.btn_save.set_enable(true);
        	}else{
        		this.headerDiv.btn_save.set_enable(btnIsEnable);
        		this.ds_lotInfo.setColumn(this.ds_lotInfo.rowposition, "CHK", "0"); //체크박스 무효화 한다.
        	}
        };

        this.tab_search_Tabpage1_cbo_dischageStatus_onitemchanged = function(obj,e)
        {
        };

        /*
        this.div_work_CheckBox00_onchanged = function(obj:nexacro.CheckBox,e:nexacro.CheckBoxChangedEventInfo)
        {
        	var sz1 = this.ds_matrialDischarge.rowcount;
        	var sz2 = this.ds_lotInfo.rowcount;

        	var isChecked = this.div_work.form.chk_allInsu.isChecked();
        	if(isChecked){
        		for(var i=0;i<sz1;i++){
        			this.ds_matrialDischarge.setColumn(i, "CHK", "1");
        		}
        		for(var K=0;K<sz2;K++){
        			this.ds_lotInfo.setColumn(K, "CHK", "1");
        		}
        	}else{
        		for(var i=0;i<sz1;i++){
        			this.ds_matrialDischarge.setColumn(i, "CHK", "0");
        		}
        		for(var K=0;K<sz2;K++){
        			this.ds_lotInfo.setColumn(K, "CHK", "0");
        		}
        	}
        };
        */

        this.div_work_grd_processSegment_onkeyup = function(obj,e)
        {
        	this.orderBtnControlPrepare(e.row);
        	this.fn_detailSearch();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_warehouse.addEventHandler("onclick",this.tab_search_Tabpage1_btn_warehouse_onclick,this);
            this.tab_search.Tabpage1.form.edt_warehouse.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_warehouse_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.cbo_periodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_periodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.cal_periodFr.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cal_periodTo.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.edt_materialDefId.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_materialDefId_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_materialDefId.addEventHandler("onclick",this.tab_search_Tabpage1_btn_materialDefId_onclick,this);
            this.div_work.form.grd_processSegment.addEventHandler("oncellclick",this.div_work_grd_request_oncellclick,this);
            this.div_work.form.grd_processSegment.addEventHandler("onkeyup",this.div_work_grd_processSegment_onkeyup,this);
            this.div_work.form.grd_lotInfo.addEventHandler("oncellclick",this.div_work_grd_requestDetail_oncellclick,this);
            this.div_work.form.grd_lotInfo.addEventHandler("oncloseup",this.div_work_grd_detail_oncloseup,this);
            this.div_work.form.grd_lotInfo.addEventHandler("onexpandup",this.div_work_grd_detail_onexpandup,this);
            this.div_header.form.btn_reset2.addEventHandler("onclick",this.div_header_btn_reset2_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("PCM09100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
