(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM08600M");
            this.set_titletext("공정관리물류창고 출고");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_outsourcedWarehouseShipment", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ARRAYQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"OSPMM\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SENDUSER\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPOKCHECK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"P_SHIPOKCHECK\" type=\"STRING\" size=\"256\"/><Column id=\"P_AREAID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ARRAYQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"OSPMM\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SENDUSER\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPOKCHECK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
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

            obj = new Button("btn_save",null,"16","26","24","btn_help:7",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","112","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_OUTSOURCEDWAREHOUSESHIPMENT");
            obj.set_visible("true");
            obj.set_hotkey("");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            obj.set_text("물류창고 출고");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_lotNoSel",null,"15","68","24","156",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("Lot 선택");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","0","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","0","-1",null,"34","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("출고 입력");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("Div01","0","34",null,"67","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_area","124","5","200","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("3");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","118","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_lotNo","0","31","118","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_tooltiptext("LOTID");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_lotNo","sta_lotNo:6","36","222","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("200601F001-1-CL01-081-001");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Button("btnArea","edt_area:0","5","22","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_clear","359","32","100","28",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Grid("grd_outsourcedWarehouseShipment","0","132",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_outsourcedWarehouseShipment");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"34\"/><Column size=\"60\"/><Column size=\"121\"/><Column size=\"72\"/><Column size=\"100\"/><Column size=\"39\"/><Column size=\"146\"/><Column size=\"239\"/><Column size=\"56\"/><Column size=\"0\"/><Column size=\"153\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회사ID-----HIDDEN\"/><Cell col=\"1\" text=\"공장ID-----HIDDEN\"/><Cell col=\"2\" text=\"RECEIPTUSER-----HIDDEN\"/><Cell col=\"3\" text=\"SENDUSER-----HIDDEN\"/><Cell col=\"4\" text=\"RECEIPTSEQUENCE-----HIDDEN\"/><Cell col=\"5\" text=\"LOTHISTKEY-----HIDDEN\"/><Cell col=\"6\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"7\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"8\" text=\"양산구분\"/><Cell col=\"9\" text=\"입고일\"/><Cell col=\"10\" text=\"입고자명\"/><Cell col=\"11\" text=\"품목코드\"/><Cell col=\"12\" text=\"Rev.\"/><Cell col=\"13\" text=\"품목명\"/><Cell col=\"14\" text=\"Lot No.\"/><Cell col=\"15\" text=\"공정수순\"/><Cell col=\"16\" text=\"공정ID-----HIDDEN\"/><Cell col=\"17\" text=\"공정명\"/><Cell col=\"18\" text=\"작업장AREAID-----HIDDEN리\"/><Cell col=\"19\" text=\"작업장\"/><Cell col=\"20\" text=\"수량 (PCS)\"/><Cell col=\"21\" text=\"수량 (PNL)\"/><Cell col=\"22\" text=\"panelqty-----HIDDEN\"/><Cell col=\"23\" text=\"이전공정ID-----HIDDEN\"/><Cell col=\"24\" text=\"이전 공정명\"/><Cell col=\"25\" text=\"이전작업장PREVAREAID-----HIDDEN\"/><Cell col=\"26\" text=\"이전 작업장\"/></Band><Band id=\"body\"><Cell text=\"bind:ENTERPRISEID\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:PLANTID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:RECEIPTUSER\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:SENDUSER\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:RECEIPTSEQUENCE\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:LOTHISTKEY\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:CHK\" textAlign=\"left\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"7\" text=\"bind:CHK\" textAlign=\"left\" displaytype=\"checkboxcontrol\" combocodecol=\"C,YieldProdType,,Y,Y\" edittype=\"checkbox\"/><Cell col=\"8\" text=\"bind:LOTTYPE\" textAlign=\"left\" displaytype=\"combotext\" combocodecol=\"C,ProductionType,,Y,\"/><Cell col=\"9\" text=\"bind:RECEIPTDATE\" textAlign=\"left\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"10\" text=\"bind:RECEIPTUSERNAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:USERSEQUENCE\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:AREAID\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:PCSQTY\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"21\" text=\"bind:PANELQTY\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"22\" text=\"bind:OSPMM\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0.##\" textAlign=\"right\"/><Cell col=\"23\" text=\"bind:PREVPROCESSSEGMENTID\" textAlign=\"left\"/><Cell col=\"24\" text=\"bind:PREVPROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"25\" text=\"bind:PREVAREAID\" textAlign=\"left\"/><Cell col=\"26\" text=\"bind:PREVAREANAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_outsourcedWarehouseShipment",null,"103","29","24","7",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_outsourcedWarehouseShipment","131","97","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title0","1","97",null,"34","sta_cnt_ds_outsourcedWarehouseShipment:0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("물류창고 출고 목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("OUTSOURCEDWAREHOUSEWEARLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_outsourcedWarehouseShipment",null,"103","29","24","41",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_visible("true");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM08600M.xfdl","lib::lib_tom.xjs");
        this.registerScript("PCM08600M.xfdl", function() {
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
         * 2021.02.10	박현우   	최초작성(sample data : 200601F001-1-CL01-081-001)
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.div_work.form.Div01.form;

        this.fv_rtnValue = ""; //Lot No. 선택 팝업화면 리턴값 변수

        this.areaId = "";

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_initCombo();

        	//sample data : 200601F001-1-CL01-081-001

        	this.gfn_setEnterSearch(this.searchDiv, "nfn_search"); //Lot No. 엔터키 설정
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	var lotId = this.searchDiv.edt_lotNo.value;

        	if(this.nfn_isNull(this.areaId)){
        		this.gfn_Message("InputSomeThing", this.nfn_nvl(this.nfn_getDictionarynameUpper("WORKAREA"),"작업장"), "warning", "ok"); //작업장을(를) 입력 하세요
        		return;
        	}

        	if(this.nfn_isNull(lotId)){
        		this.gfn_Message("InputSomeThing", "Lot No.", "warning", "ok"); //Lot No.(를) 입력 하세요
        		this.fn_lotNoScanRready(); //scan READY
        		return;
        	}

        	var sRow = this.ds_outsourcedWarehouseShipment.findRowExpr("LOTID == '"+lotId + "'");
        	if(sRow > -1){
        		this.gfn_Message("ExistLot", lotId, "info", "ok"); //이미 추가 된 LOT 입니다. {0}
        		this.searchDiv.edt_lotNo.set_value('');
        		this.fn_lotNoScanRready(); //scan READY
        		return;
        	}

        	this.ds_temp.clearData();
        	this.ds_search.clearData();

        	this.ds_search.addRow();
        	//this.ds_search.setColumn(0, "P_AREAID", this.areaId); //작업장코드
        	this.ds_search.setColumn(0, "P_LOTID", this.searchDiv.edt_lotNo.value);
        	this.ds_search.setColumn(0, "P_PLANTID", this.gf_getSiteType());
        	this.ds_search.setColumn(0, "P_AREAID", this.areaId);
        	this.ds_search.setColumn(0, "P_SHIPOKCHECK", "Y");
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", "selectOutSourceWarehouseShipment");

        	var sSvcID 			= "selectOutSourceWarehouseShipment";
        	var sController 	= "/pcm08600/selectOutSourceWarehouseShipment.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_temp=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (this.ds_outsourcedWarehouseShipment.rowcount < 1)
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	//if (this.ds_outsourcedWarehouseShipment.getCaseCount("CHK=='1'")==0)
            //{
            //	this.gfn_Message("NoSelections", "", "warning", "ok");
            //	return;
            //}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveOutSourceWarehouseShipment";
        	var sController 	= "/pcm08600/saveOutSourceWarehouseShipment.do";
        	var sInDatasets 	= "INPUT=ds_outsourcedWarehouseShipment:U"; //수정된row만 서버 전송
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
        		this.ds_outsourcedWarehouseShipment.clearData(); //Target Dataset clear
        		this.fn_lotNoScanRready(); //scan READY
        		return;
        	}

        	switch(trId) {
        		case "selectTomPlantList":	//[조회조건] Site Callback
        			break;
        		case "selectOutSourceWarehouseShipment":	//공정관리물류창고입고 조회 callback
        			//alert(this.ds_temp.getRowCount());
        			if (this.ds_temp.getRowCount() > 0)
        			{
        				for(var k=0; k<this.ds_temp.getRowCount(); k++){
        					//###############################
        					//###############################
        					//###############################
        					//###############################
        					//###############################
        					var shipOkCheck = this.ds_temp.getColumn(k, "SHIPOKCHECK");
        					var areaId = this.ds_temp.getColumn(k, "AREAID");
        					var tempAreaId = this.areaId;
        					var tempName = this.ds_temp.getColumn(k, "AREANAME");
        					var lotId = this.ds_temp.getColumn(k, "LOTID");
        					if(shipOkCheck == 'OK'){ //출고일자가 없는 상태 인가 ?
        						//alert(areaId+'/'+tempAreaId);
        						if(areaId == tempAreaId)
        						{
        							var idx = this.ds_outsourcedWarehouseShipment.addRow();
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "ENTERPRISEID", 			this.ds_temp.getColumn(k, "ENTERPRISEID"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "PLANTID", 				this.ds_temp.getColumn(k, "PLANTID"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "LOTHISTKEY", 			this.ds_temp.getColumn(k, "LOTHISTKEY"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "RECEIPTSEQUENCE", 		this.ds_temp.getColumn(k, "RECEIPTSEQUENCE"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "LOTID", 				this.ds_temp.getColumn(k, "LOTID"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "LOTTYPE", 				this.ds_temp.getColumn(k, "LOTTYPE"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "PRODUCTDEFID", 			this.ds_temp.getColumn(k, "PRODUCTDEFID"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "PRODUCTDEFVERSION", 	this.ds_temp.getColumn(k, "PRODUCTDEFVERSION"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "PRODUCTDEFNAME", 		this.ds_temp.getColumn(k, "PRODUCTDEFNAME"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "PROCESSSEGMENTID", 		this.ds_temp.getColumn(k, "PROCESSSEGMENTID"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "PROCESSSEGMENTNAME", 	this.ds_temp.getColumn(k, "PROCESSSEGMENTNAME"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "USERSEQUENCE", 			this.ds_temp.getColumn(k, "USERSEQUENCE"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "PREVPROCESSSEGMENTID", 	this.ds_temp.getColumn(k, "PREVPROCESSSEGMENTID"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "PREVPROCESSSEGMENTNAME",this.ds_temp.getColumn(k, "PREVPROCESSSEGMENTNAME"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "AREAID", 				this.ds_temp.getColumn(k, "AREAID"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "AREANAME", 				this.ds_temp.getColumn(k, "AREANAME"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "PREVAREAID", 			this.ds_temp.getColumn(k, "PREVAREAID"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "PREVAREANAME", 			this.ds_temp.getColumn(k, "PREVAREANAME"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "PCSQTY", 				this.ds_temp.getColumn(k, "PCSQTY"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "ARRAYQTY", 				this.ds_temp.getColumn(k, "ARRAYQTY"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "PANELQTY", 				this.ds_temp.getColumn(k, "PANELQTY"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "OSPMM", 				this.ds_temp.getColumn(k, "OSPMM"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "LOTSTATE", 				this.ds_temp.getColumn(k, "LOTSTATE"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "PROCESSSTATE", 			this.ds_temp.getColumn(k, "PROCESSSTATE"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "ISHOLD", 				this.ds_temp.getColumn(k, "ISHOLD"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "ISLOCKING", 			this.ds_temp.getColumn(k, "ISLOCKING"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "OWNTYPE", 				this.ds_temp.getColumn(k, "OWNTYPE"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "RECEIPTDATE", 			this.ds_temp.getColumn(k, "RECEIPTDATE"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "RECEIPTUSER", 			this.ds_temp.getColumn(k, "RECEIPTUSER"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "RECEIPTUSERNAME", 		this.ds_temp.getColumn(k, "RECEIPTUSERNAME"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "SENDUSER", 				this.ds_temp.getColumn(k, "SENDUSER"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "SHIPOKCHECK", 			this.ds_temp.getColumn(k, "SHIPOKCHECK"));
        							this.ds_outsourcedWarehouseShipment.setColumn(idx, "CHK", 					this.ds_temp.getColumn(k, "CHK"));
        						}else{
        							this.gfn_Message("InValidOspData020", tempName, "info", "ok"); //입력한 Lot No해당하는  출고작업은 ({0})입니다.출고장을 다시확인해주세요
        							this.searchDiv.edt_lotNo.set_value('');
        							this.fn_lotNoScanRready(); //scan READY
        						}
        					}else{
        						this.gfn_Message("InValidOspData019", lotId, "info", "ok"); //Lot No ({0}) 가 물류 창고 출고 된 상태입니다.
        					}
        					//###############################
        					//###############################
        					//###############################
        					//###############################
        					//###############################
        				}
        			} else {
        				this.gfn_Message("InValidOspData003", lotId, "info", "ok"); //Lot No ({0})가 외주 창고 출고대상이 아니거나 이미 출고 처리된 상태입니다.
        			}
        			break;
        		case "saveOutSourceWarehouseShipment" : //저장 callback
        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장이 완료되었습니다.
        			this.ds_outsourcedWarehouseShipment.clearData(); //Target Dataset clear
        			this.fn_lotNoScanRready(); //scan READY
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

        	if(popId=="P00115"){ //작업장 조회
        		oArg.arg_searchStr = "P_AREANAME="+this.searchDiv.edt_area.value;//조회조건의 작업장
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        	}
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_AREA")
        	{
        		this.searchDiv.edt_area.set_value(rtn[1]);
        		this.areaId = rtn[0];

        	}else if(sPopupId == "SCH_LOTNO_SEL")
        	{
        		//this.gfn_Message("fn_popupAfter / SCH_LOTNO_SEL / callback sz :: "+rtn.length, null, "info", "ok");

        		//선택건 리턴 받아서 데이터셋에 추가
        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i]; //1개 row

        			//this.gfn_Message("LOTID :: "+colArray[7], null, "info", "ok");

        			if (this.ds_outsourcedWarehouseShipment.getCaseCount("LOTID == '"+colArray[7]+"'")==0) //popup list 값중 본화면Grid에 미존재건만 그리드에 추가 한다.
        			{
        				//this.gfn_Message("미발견 -> 추가 :: "+colArray[7], null, "info", "ok");
        				var idx = this.ds_outsourcedWarehouseShipment.addRow();

        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "ENTERPRISEID", 				colArray[0]);
        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "PLANTID", 					colArray[1]);
        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "RECEIPTUSER", 				colArray[2]);
        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "SENDUSER", 					colArray[3]);
        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "RECEIPTSEQUENCE", 			colArray[4]);

        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "LOTHISTKEY", 				colArray[5]);
        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "CHK", "0"); //미선택건으로
        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "LOTID", 					colArray[7]);
        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "RECEIPTDATE", 				colArray[8]);
        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "RECEIPTUSERNAME", 			colArray[9]);

        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "LOTTYPE", 					colArray[10]);
        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "PRODUCTDEFID", 				colArray[11]);
        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "PRODUCTDEFVERSION", 		colArray[12]);
        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "PRODUCTDEFNAME", 			colArray[13]);
        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "USERSEQUENCE", 				colArray[14]);

        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "PROCESSSEGMENTID", 			colArray[15]);
        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "PROCESSSEGMENTNAME", 		colArray[16]);
        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "AREAID", 					colArray[17]);
        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "AREANAME", 					colArray[18]);
        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "PREVPROCESSSEGMENTNAME", 	colArray[19]);

        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "PREVAREANAME", 				colArray[20]);
        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "PCSQTY", 					colArray[21]);
        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "PANELQTY", 					colArray[22]);
        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "OSPMM", 					colArray[23]);
        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "PREVPROCESSSEGMENTID", 		colArray[24]);

        				this.ds_outsourcedWarehouseShipment.setColumn(idx, "PREVAREAID", 				colArray[25]);

        			}else{
        				this.gfn_Message("이미 존재 :: "+colArray[7], null, "info", "ok");
        			}
        		}
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
        	this.div_work.form.btn_addRow_ds_outsourcedWarehouseShipment.enable = false;
        	this.div_work.form.btn_copyRow_ds_outsourcedWarehouseShipment.enable = false;
        }

        this.fn_lotNoScanRready = function ()
        {
        	this.searchDiv.edt_lotNo.set_value("");
        	this.searchDiv.edt_lotNo.setFocus();
        	//this.searchDiv.edt_lotNo.set_autoselect(true);	//전체선택된것 처럼 캐럿 모두 선택
        }

        /**************************************************************************
         * 8. 이벤트
        ***************************************************************************/
        /*
         * 기능 : Lot No. 버튼 클릭 : 'Lot No. 조회' 팝업 조회
         */
        this.div_work_btn_lotNoSel_onclick = function(obj,e)
        {
        	if(this.nfn_isNull(this.areaId)){
        		this.gfn_Message("InputSomeThing", this.nfn_nvl(this.nfn_getDictionarynameUpper("WORKAREA"),"작업장"), "warning", "ok"); //작업장을(를) 입력 하세요
        		return;
        	}

        	var popupId = "SCH_LOTNO_SEL";
        	var oArg = {};
        	var opts = "width=850,height=500";

        	oArg.arg_area = this.searchDiv.edt_area.value;
        	oArg.arg_areaId = this.areaId;

        	//alert(this.areaId);

        	this.gfn_openPopup(popupId,"pcm::PCM08600P.xfdl",oArg,opts);
        };

        /*
         * 기능 : Lot No. 입력 + 엔터 이벤트
         */
        this.div_work_Div01_edt_lotNo_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		this.fn_search();
        	}
        };

        /*
         * 기능 : 작업장 버튼 클릭 : '작업장' 공통팝업 조회
         */
        this.div_work_Div01_btnArea_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("P_ENTERPRISEID", 	this.gf_getEnterpriseId());
        	//sArgs += this.gfn_setParam("P_IOOWNTYPE", 		"N");
        	sArgs += this.gfn_setParam("P_PLANTID", 		this.gf_getSiteType());
        	sArgs += this.gfn_setParam("P_AREANAME", 		this.searchDiv.edt_area.value);
        	sArgs += this.gfn_setParam("LANGUAGETYPE", 		this.gf_getLanguageType());

        	this.fn_openPop("SCH_AREA","P00115", sArgs); //작업장 조회
        };

        this.div_work_Div01_cbo_site_onitemchanged = function(obj,e)
        {
        	this.div_work_Div01_btnArea_onclick();

        	this.searchDiv.edt_area.set_value('');
        };

        this.div_header_btn_reset2_onclick = function(obj,e)
        {
        	this.ds_outsourcedWarehouseShipment.clearData();
        	var strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.div_work.form.sta_cnt_ds_outsourcedWarehouseShipment.set_text(strCnt);

        	this.searchDiv.edt_area.set_value('');
        	this.searchDiv.edt_lotNo.set_value('');
        	this.areaId = '';
        };

        this.div_work_Div01_edt_area_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_work_Div01_btnArea_onclick();
        	}
        };

        this.fn_searchClear = function(obj,e)
        {
        	this.searchDiv.edt_area.set_value('');
        	this.searchDiv.edt_lotNo.set_value('');
        	this.areaId = '';
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_reset2.addEventHandler("onclick",this.div_header_btn_reset2_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_lotNoSel.addEventHandler("onclick",this.div_work_btn_lotNoSel_onclick,this);
            this.div_work.form.Div01.form.edt_area.addEventHandler("onkeydown",this.div_work_Div01_edt_area_onkeydown,this);
            this.div_work.form.Div01.form.edt_lotNo.addEventHandler("onkeydown",this.div_work_Div01_edt_lotNo_onkeydown,this);
            this.div_work.form.Div01.form.btnArea.addEventHandler("onclick",this.div_work_Div01_btnArea_onclick,this);
            this.div_work.form.Div01.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.div_work.form.btn_delRow_ds_outsourcedWarehouseShipment.addEventHandler("onclick",this.fn_delete,this);
        };
        this.loadIncludeScript("PCM08600M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
