(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM09300M");
            this.set_titletext("자재 사용 이력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_main", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSACTION_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"UOM\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSACTION_SOURCE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"WIP_ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"WIP_ITEM_CODE_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSACTION_QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ONHAND_QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TRANSACTION_TYPE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBINVENTORY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBINVENTORY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"P_ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_INBOUNDDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_INBOUNDDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_SUBINVENTORY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"P_SUBINVENTORY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONSUMENAME\" type=\"STRING\" size=\"256\"/><Column id=\"P_ITEM_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Combo("cbo_periodType","10","35","94","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("11");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("금주");
            obj.set_value("");
            obj.set_index("2");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_site","0","cbo_periodType:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("3");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("BB2F5FB0FA594AB1B2150B1B48275231");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_site","sta_site:5",null,"165","20",null,"sta_site:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("0");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","232","10","27",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_consumableLot","0","185","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("16");
            obj.set_text("자재 LOT No");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("055648C6043F4087B45C7A894C8A34BE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00","152","sta_consumableLot:0","45","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("8");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_searchClear","Static12_00_00_00_00_00:0","Static12_00_00_00_01_00_00:0","102","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_search","15","Static12_00_00_00_01_00_00:0","146","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("4");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("7");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_materialType","0","160","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("14");
            obj.set_text("자재구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DEBB30FD927B46B8A4D163F7D1013BBB");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_period","0","10","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("10");
            obj.set_text("처리일자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INSPECTIONDATETIMEVIEWDATE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Calendar("cal_endDt","cbo_periodType:5",null,null,"20","15","cbo_periodType:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Calendar("cal_startDt","sta_period:5",null,null,"20","15","sta_period:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_mtrNm","0","135","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("24");
            obj.set_text("자재명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MATERIALNAME");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_materialType","sta_materialType:5",null,"165","20",null,"sta_materialType:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("15");
            obj.set_codecolumn("C,MaterialType2,ALL,Y,A");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_consumableLot","sta_consumableLot:5",null,"165","20",null,"sta_consumableLot:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("17");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_whNm","0","sta_site:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("18");
            obj.set_text("창고 명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WAREHOUSENAME");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_whNm","sta_whNm:5",null,"143","20",null,"sta_whNm:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("19");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_whNm","edt_whNm:0",null,"22","20",null,"sta_whNm:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_consumableDftId","0","sta_whNm:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("21");
            obj.set_text("자재코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MATERIALDEF");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_consumableDftId","sta_consumableDftId:5",null,null,"20","37","sta_consumableDftId:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("22");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_consumableDftId","edt_consumableDftId:0",null,"22","20",null,"sta_consumableDftId:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_mtrNm","sta_mtrNm:5",null,"165","20",null,"sta_mtrNm:-22",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("25");
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

            obj = new Grid("grd_main","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_main");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"처리일자\" tooltiptext=\"CLOSEDATE\"/><Cell col=\"2\" text=\"자재 ID\"/><Cell col=\"3\" text=\"자재명\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" text=\"자재 LOT No\"/><Cell col=\"6\" text=\"사용된 Lot No\"/><Cell col=\"7\" text=\"사용된 품목코드\"/><Cell col=\"8\" text=\"사용된 품목명\"/><Cell col=\"9\" text=\"소모 수량\"/><Cell col=\"10\" text=\"현재 수량\"/><Cell col=\"11\" text=\"입출고유형\"/><Cell col=\"12\" text=\"창고코드\"/><Cell col=\"13\" text=\"창고명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:TRANSACTION_DATE\" displaytype=\"text\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"2\" text=\"bind:ITEM_CODE\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:ITEM_DESCRIPTION\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:UOM\"/><Cell col=\"5\" text=\"bind:LOT_NUMBER\"/><Cell col=\"6\" text=\"bind:TRANSACTION_SOURCE_NAME\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:WIP_ITEM_CODE\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:WIP_ITEM_CODE_DESC\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:TRANSACTION_QTY\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"mask\"/><Cell col=\"10\" text=\"bind:ONHAND_QTY\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"mask\"/><Cell col=\"11\" text=\"bind:TRANSACTION_TYPE_NAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:SUBINVENTORY_CODE\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:SUBINVENTORY_NAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_main",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subMainTitle","0","0","120","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("자재 사용 이력");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-SG-0610");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_main","120","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
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

            obj = new Static("sta_title","30","16","150","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("화면명");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.tab_page.form.cal_startDt","value","ds_search","P_INBOUNDDATE_PERIODFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.tab_page.form.cal_endDt","value","ds_search","P_INBOUNDDATE_PERIODTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.tab_page.form.cbo_site","value","ds_search","P_PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.tab_page.form.edt_whNm","value","ds_search","P_SUBINVENTORY_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.tab_page.form.cbo_materialType","value","ds_search","P_ITEM_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.tab_page.form.edt_consumableLot","value","ds_search","P_LOT_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.tab_page.form.edt_consumableDftId","value","ds_search","P_CONSUMABLEDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.tab_page.form.edt_mtrNm","value","ds_search","P_CONSUMENAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM09300M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM09300M.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PCM09300M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM09300M.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("PCM09300M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM09300M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 자재사용이력
         * 파일명 		: PCM09300M.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.03.18
         *
         * 설  명		:  조회/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.18	김진현   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_pcm.xjs"); /*include "lib::lib_pcm.xjs"*/;
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
         // this.gf_getEnterpriseId()
        // this.gf_getSiteType()
        // this.gf_getLanguageType()
        // this.gf_getUserId()
        // this.gf_getUserNm()

        this.searchDiv = this.tab_search.tab_page.form;
        this.whId = '';			// 창고id


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	console.log("PCM9300M");
        	// 초기화 (공통)
        	this.nfn_formInit(obj);

        	this.searchDiv.btn_edt_consumableDftId.addEventHandler( "onclick", this.fn_clickConsumableDftId, this );

        	// 검색조건 공통 콤보 설정
        	this.fn_initCombo();


        };

        this.fn_clickConsumableDftId = function()
        {
        	this.searchDiv.edt_consumableDftId.set_value("");
        	this.searchDiv.edt_mtrNm.set_value("");
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색(메인 -  고객정보 그리드)
         */
        this.fn_search = function (obj, e)
        {




        // 	var nPeriodfr = this.searchDiv.cal_startDt.value;
        // 	var nPeriodto = this.searchDiv.cal_endDt.value;


        	this.ds_main.clearData();

        	this.ds_search.setColumn(0, "P_ENTERPRISEID", this.gf_getEnterpriseId());

        // 	this.ds_search.setColumn(0, "P_INBOUNDDATE_PERIODFR", nPeriodfr); // 시작일
        // 	this.ds_search.setColumn(0, "P_INBOUNDDATE_PERIODTO", nPeriodto); // 종료일


        	this.ds_search.setColumn(0, "P_SUBINVENTORY_CODE", this.whId);


        	var sSvcID 			= "selectConsumableLotHistoryList";
        	var sController 	= "/pcm09300/selectConsumableLotHistoryList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_main=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

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
        	if (errCD != 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	switch(trId) {
        		case "selectTomPlantList":	//[조회조건] Site Callback
        			this.searchDiv.cbo_site.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.

        			this.searchDiv.cbo_materialType.set_value("RawMaterial");   // 자재구분
        			break;

        		case "selectConsumableLotHistoryList":	//[조회 결과] Site Callback
        			// 조회 조건 없는 경우 msg 출력
        			if(this.ds_main.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				return;
        			}
        			break;
        		default:
        	}
        };




        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;
            switch(sPopupId)
        	{
        		case "POPUP_PRODUCTDEFID" : //

        		    this.searchDiv.edt_productdefid.set_value(rtn[0]);
        			this.searchDiv.edt_productname.set_value(rtn[1]);
        		break;
        		case "WH_NM" :
        			this.searchDiv.edt_whNm.set_value(rtn[1]);
        			this.whId = rtn[0]; 		//HIDDEN 필드

        			break;
        		case "SCH_CONSUM_DFT_ID" :	// 자재코드 팝업 조회시

        			var nLen = rtn.length;
        			if(nLen != 0)
        			{
        				var nConsumableDftId = "";
        				var nConsumableDftNn   = "";
        				for(var i=0; i<nLen; i++)
        				{
        					nConsumableDftId += i==0? rtn[i][0] : ", " +rtn[i][0];	// 자재 코드
        					nConsumableDftNn   += i==0? rtn[i][1] : ", " +rtn[i][1]; // 자재 명
        				}
        				this.searchDiv.edt_consumableDftId.set_value(nConsumableDftId);
        				this.searchDiv.edt_mtrNm.set_value(nConsumableDftNn);
        			}
        			else
        			{
        				this.searchDiv.edt_consumableDftId.set_value("");
        				this.searchDiv.edt_mtrNm.set_value("");
        			}

        			break;
        // 		case "SCH_MTR_NM" :
        // //			this.mtrId = rtn[1];			// 자재 ID
        // //			this.searchDiv.edt_mtrNm.set_value(rtn[3]);			// 자재명
        //
        // 			// 자재버전 호출 함수
        // 			this.fn_getMtrVer();
        //
        // 			break;

        		default :
        			break;
        	}
        };

         /*
         * 기능(공통팝업) : 조회
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

        	oArg.arg_type = "BA";		// 단일 선택
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");

        	if(popId=="P00131"){ //창고
        		oArg.arg_searchStr   = "P_WAREHOUSENAME=" +this.nfn_nvl(this.searchDiv.edt_whNm.value,''); //조회조건의 창고
        		oArg.arg_rtnCols = "WAREHOUSEID|WAREHOUSENAME";
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
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
        	this.searchDiv.cbo_periodType.set_value("CUSTOM"); 			// 사용자 지정

        	this.searchDiv.cal_startDt.set_value(this.gfn_getFirstDate( this.gfn_today())); 						//오늘일자 (From)
        	this.searchDiv.cal_endDt.set_value(this.gfn_getFirstDate( this.gfn_addMonth(this.gfn_today(),1)));   	//오늘일자 (To)



        	this.fn_initSiteCombo();
        }


        /*
         * 기능 : 'Site' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());

        	this.tomfn_setCustomQueryCmb(this.searchDiv.cbo_site			// Object
        								, "selectTomPlantList,ALL,Y,A"  	// OPTION
        								, sArgs								// 추가 파라미터
        								, "fn_callBack"); 					//콜백함수 지정
        }

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.searchDiv.cal_startDt.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.searchDiv.cal_endDt.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        }



        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 기간 Type 콤보 변경시
         */
        this.tab_search_tab_page_cbo_periodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate(e.postvalue);
        	}
        };


        /*
         * 자재코드 팝업 클릭시
         */
        this.tab_search_tab_page_btn_consumableDftId_onclick = function(obj,e)
        {
        	var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        	var nSite 			= this.gf_getSiteType();		//Site

        	var popupId = "SCH_CONSUM_DFT_ID";
        	var oArg 	= {};
        	var opts 	= "width=850,height=500";

        	// 그리드 내 입력값 있으면
        	var nSearch = this.searchDiv.edt_consumableDftId.value;

        	if(!this.gfn_isNull(nSearch))
        	{
        		// 기입력된 값이 있으면
        		oArg.arg_consumDftId = nSearch;
        	}

        	oArg.arg_rtnCols = "CONSUMEDEF|CONSUMABLEDEFNAME";				// 리턴 받을값

        	this.gfn_openPopup(popupId,"pcm::PCM09300P.xfdl" ,oArg ,opts);
        };

        /*
         * 초기화 버튼 클릭시
         */
        this.fn_formInit = function(obj,e)
        {
        	// 검색조건 공통 콤보 설정
        	this.searchDiv.cbo_periodType.set_value("CUSTOM"); 			// 사용자 지정
        	this.searchDiv.cal_startDt.set_value(this.gfn_getFirstDate( this.gfn_today())); 						//오늘일자 (From)
        	this.searchDiv.cal_endDt.set_value(this.gfn_getFirstDate( this.gfn_addMonth(this.gfn_today(),1)));   	//오늘일자 (To)
        	this.searchDiv.cbo_site.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        	this.searchDiv.edt_whNm.set_value("");			// 창고명
        	this.whId = '';
        	this.searchDiv.edt_consumableDftId.set_value("");	// 자재코드
        	this.searchDiv.edt_mtrNm.set_value("");				// 자재명
        	this.searchDiv.cbo_materialType.set_value("RawMaterial");   // 자재구분
        	this.searchDiv.edt_consumableLot.set_value("");		// 자재 LOT 코드
        };

        this.tab_search_tab_page_btn_whNm_onclick = function(obj,e)
        {

        	var sArgs = {};
        	sArgs += this.gfn_setParam("P_PLANTID", this.searchDiv.cbo_site.value);
        	sArgs += this.gfn_setParam("USERID", this.gf_getUserId());

        	this.fn_openPop("WH_NM","P00131", sArgs); //작업장 조회
        };

        this.tab_search_tab_page_btn_productdefid_onclick = function(obj,e)
        {
        	var oArg = {};
        	oArg.arg_type        = "BA";
        	oArg.arg_popupCd     = "P00160";
        	oArg.arg_popupNm     = "품목 선택";
        	oArg.arg_rtnCols     = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        	oArg.arg_paramCols   = "P_POPTYPE";
        	oArg.arg_paramValues = "PRODUCTDEFINITION";
        	oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + this.searchDiv.edt_productdefid.value;
        	this.gfn_openPopup( "POPUP_PRODUCTDEFID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.tab_page.form.cbo_periodType.addEventHandler("onitemchanged",this.tab_search_tab_page_cbo_periodType_onitemchanged,this);
            this.tab_search.tab_page.form.btn_searchClear.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.tab_page.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.tab_page.form.cal_endDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.tab_page.form.cal_startDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.tab_page.form.cbo_materialType.addEventHandler("onsetfocus",this.tab_search_tab_page_cbo_mtrVer_onsetfocus,this);
            this.tab_search.tab_page.form.btn_whNm.addEventHandler("onclick",this.tab_search_tab_page_btn_whNm_onclick,this);
            this.tab_search.tab_page.form.btn_consumableDftId.addEventHandler("onclick",this.tab_search_tab_page_btn_consumableDftId_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("PCM09300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
