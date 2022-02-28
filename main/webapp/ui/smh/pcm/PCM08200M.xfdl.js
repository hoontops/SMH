(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM08200M");
            this.set_titletext("포장인계취소");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pcmLotCancel", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DOCUMENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"BOXNO\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SENDTIME\" type=\"DATETIME\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"ONHANDQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNM\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"BOXNO\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"-9",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","163","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search1","15","163","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"59","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","69","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"28","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","169","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"3","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductDefId","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productDefId","108","8","143","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnProductId",null,"8","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staLotId","0","34","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_SearchPeriod","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("C6A85700415446D89213292978260263");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_STARTDT","108","59","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PERIODTYPE","15","84","88","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_ENDDT","108","84","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_01",null,"79","45","5","92",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staDocumentNo","1","109","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DOCUMENTNO");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_documentNo","108","109","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_01_00_00",null,"153","45","10","94",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_01_00",null,"104","45","5","92",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_01_01",null,"54","45","5","90",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staDocumentNo00","1","133","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("BOX No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_boxNo","108","133","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_01_00_00",null,"128","45","5","90",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","108","35","143","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnLotId",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","281","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"23","-60",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","112","-63","101","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","108","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("LOT 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("GRIDLOTLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_pcmLotCancel","sta_subTitle:17","0",null,"34","762",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_pcmLotList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_pcmLotList","0","34",null,null,"0","60",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_pcmLotCancel");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"180\"/><Column size=\"110\"/><Column size=\"210\"/><Column size=\"140\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"262\"/><Column size=\"133\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"2\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"3\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell col=\"4\" text=\"전표번호\" tooltiptext=\"DOCUMENTNO\"/><Cell col=\"5\" text=\"인계수량\" tooltiptext=\"QTY\"/><Cell col=\"6\" text=\"재고수량\"/><Cell col=\"7\" text=\"작업자\" tooltiptext=\"WORKER\"/><Cell col=\"8\" text=\"인계 일시\" tooltiptext=\"SENDTIME\" suppressalign=\"first\"/><Cell col=\"9\" tooltiptext=\"WAREHOUSENAME\" text=\"창고명\"/><Cell col=\"10\" text=\"취소사유\" tooltiptext=\"REASONCANCEL\"/><Cell col=\"11\" text=\"BOX No.\" tooltiptext=\"BOXNO\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"bind:LOTID\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:DOCUMENTNO\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:QTY\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:ONHANDQTY\"/><Cell col=\"7\" text=\"bind:WORKERNAME\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:SENDTIME\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\"/><Cell col=\"9\" text=\"bind:WAREHOUSENAME\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:REASONCANCEL\" textAlign=\"left\" edittype=\"text\" displaytype=\"normal\"/><Cell col=\"11\" text=\"bind:BOXNO\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","22",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","3",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","29",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","55",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","100","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("Enterprise 정의");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-SD-0121");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:10","16","24","24",null,null,null,null,null,null,this.div_header.form);
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

            obj = new Button("btn_save",null,"16","26","24","93",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("8");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.Tabpage1.form.cal_STARTDT","value","ds_search","PERIOD_PERIODFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.Tabpage1.form.cbo_PERIODTYPE","value","ds_search","PERIODTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.Tabpage1.form.cal_ENDDT","value","ds_search","PERIOD_PERIODTO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM08200M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM08200M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM08200M.xfdl", function() {

        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 포장 인계 취소
         * 파일명 		: PCM08200M.xfdl
         * 작성자 		: 김기수
         * 작성일 		: 2021.05.12
         *
         * 설  명		: 공정관리 - 포장관리 - 포장 인계 취소
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.12	김기수   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_formInit();
        };

        this.fn_formInit = function()
        {
        	this.fn_initDatePicker();
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID",this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "USERID" , nexacro.getApplication().gds_userInfo.getColumn(0,"gv_userAcnt"));

        };



        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	vBoxNo = this.tab_search.Tabpage1.form.edt_boxNo.value;
        	if(this.nfn_isNull(vBoxNo))
        	{
        		this.fn_LotCanCelList();
        	}
        	else
        	{
        		this.fn_LotCanCelListBox(vBoxNo);
        	}
        };

        this.fn_LotCanCelList = function()
        {
        	if(this.fn_searchValidate() == false) return;

        	this.ds_pcmLotCancel.clearData();

        	var sSvcID 			= "selectLotListForBoxSendCancel";
        	var sController 	= "/pcm08200/selectLotListForBoxSendCancel.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_pcmLotCancel=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_LotCanCelListBox = function(vBoxNo)
        {
        	if(this.fn_searchValidate() == false) return;

        	this.ds_pcmLotCancel.clearData();

        	this.ds_search.setColumn(0,"BOXNO",vBoxNo);

        	var sSvcID 			= "selectLotListForBoxSendCancelBoxNo";
        	var sController 	= "/pcm08200/selectLotListForBoxSendCancelBoxNo.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_pcmLotCancel=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        this.fn_searchValidate = function ()
        {
        };


        /*

         * 기능 : 저장
         */
        this.fn_save = function(obj,e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_pcmLotCancel) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}


        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "savePcmSendCancelLotForBoxPacking";
        	var sController 	= "/pcm08200/savePcmSendCancelLotForBoxPacking.do";
        	var sInDatasets 	= "ds_pcmLotCancel=ds_pcmLotCancel:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */



        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		switch(trId) {
        			case "savePcmSendCancelLotForBoxPacking" :
        			{
        				this.gfn_Message("SuccessSave", null, "info", "ok");
        				this.fn_formInit();
        				this.fn_LotCanCelList();
        				break;
        			}
        			default :
        		}
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        /*
         *	기능 : 팝업 관련
         */
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	switch(sPopupId) {
        	case "SEARCH_PRODUCTD":
        	{
        		this.tab_search.Tabpage1.form.edt_productDefId.set_value(rtn[0]);
        		this.ds_search.setColumn(0,"PRODUCTDEFID",rtn[0]);
        		this.ds_search.setColumn(0,"PRODUCTDEFVERSION",rtn[2]);
        		this.ds_search.setColumn(0,"PRODUCTDEFNAME",rtn[1]);
        		break;
        	}
        	case "SEARCH_LOTID":
        	{
        		this.tab_search.Tabpage1.form.edt_lotId.set_value(rtn[0]);
        		this.ds_search.setColumn(0,"LOTID",rtn[0]);
        		break;
        	}
        	default:
        	}

        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/


        this.tab_search_Tabpage1_btnProductId_onclick = function(obj,e)
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
        	var popupId = "SEARCH_PRODUCTD";
        	var oArg = {};



        	var pPRODUCTDEFID = this.tab_search.Tabpage1.form.edt_productDefId.value;

        	var pPRODUCTDIVISION ="Product";
        	if(this.nfn_isNull(pPRODUCTDEFID)) {
        		pPRODUCTDEFID="";
        	}

        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00105";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues ="";
        	oArg.arg_searchStr = "TXTPRODUCTDEFNAME=" + pPRODUCTDEFID + "|PRODUCTDIVISION=" +pPRODUCTDIVISION;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        };


        this.tab_search_Tabpage1_edt_PRODUCTDEFID_onkeydown = function(obj,e)
        {
        	if (e.keycode != 13) return;

        	this.ds_search.setColumn(0,"PRODUCTDEFID",obj.value);
        	this.tab_search_Tabpage1_btnProductId_onclick();
        };

         this.fn_initDatePicker = function ()
        {
        	this.basfn_getPeriodData("ds_periodType");
         	this.ds_search.setColumn(0,"PERIOD_PERIODFR",this.ds_periodType.getColumn(0,"THISMONTH_S"));
         	this.ds_search.setColumn(0,"PERIOD_PERIODTO",this.ds_periodType.getColumn(0,"THISMONTH_E"));
        	this.ds_search.setColumn(0,"PERIODTYPE","THISWEEK");
        	this.fn_setDate("THISWEEK");

        };
        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.ds_search.setColumn(0,"PERIOD_PERIODFR",this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.ds_search.setColumn(0,"PERIOD_PERIODTO",this.ds_periodType.getColumn(0,periodType+"_E"));
        };
        this.tab_search_Tabpage1_btnLotId_onclick = function(obj,e)
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
        	var popupId = "SEARCH_LOTID";
        	var oArg = {};



        	var pLotId = this.tab_search.Tabpage1.form.edt_lotId.value;
        	var langType = this.ds_search.getColumn(0,"LANGUAGETYPE");

        	if(this.nfn_isNull(pLotId)) {
        		pLotId="";
        	}

        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00268";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "LOTID";
        	oArg.arg_paramCols = "LOTID";
        	oArg.arg_paramValues ="";
        	oArg.arg_searchStr = "LOTID=" + pLotId ;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        };

        this.tab_search_Tabpage1_edt_LOTID_onkeydown = function(obj,e)
        {
        	if (e.keycode != 13) return;

        	this.ds_search.setColumn(0,"LOTID",obj.value);
        	this.tab_search_Tabpage1_btnLotId_onclick();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage1.form.btn_search1.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.edt_productDefId.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_PRODUCTDEFID_onkeydown,this);
            this.tab_search.Tabpage1.form.btnProductId.addEventHandler("onclick",this.tab_search_Tabpage1_btnProductId_onclick,this);
            this.tab_search.Tabpage1.form.cal_STARTDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cbo_PERIODTYPE.addEventHandler("onitemchanged",this.tab_search_tab_page_cbo_PERIODTYPE_onitemchanged,this);
            this.tab_search.Tabpage1.form.cal_ENDDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.edt_lotId.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_LOTID_onkeydown,this);
            this.tab_search.Tabpage1.form.btnLotId.addEventHandler("onclick",this.tab_search_Tabpage1_btnLotId_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
        };
        this.loadIncludeScript("PCM08200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
