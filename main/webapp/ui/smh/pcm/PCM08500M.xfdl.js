(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM08500M");
            this.set_titletext("공정관리물류창고 입고");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_outsourcedWarehouseWear", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"OSPRECEIPTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LOTHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"OSPMM\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCESTART\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCEEND\" type=\"STRING\" size=\"256\"/><Column id=\"WEAROKCHECK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTHISTKEYOLT\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"OSPRECEIPTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LOTHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"OSPMM\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCESTART\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCEEND\" type=\"STRING\" size=\"256\"/><Column id=\"WEAROKCHECK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTHISTKEYOLT\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
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

            obj = new Button("btn_save",null,"16","26","24","94",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","112","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_OUTSOURCEDWAREHOUSEWEAR");
            obj.set_visible("true");
            obj.set_hotkey("");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            obj.set_text("물류창고 입고");
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

            obj = new Div("div_work","0","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","0","0",null,"34","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("입고 입력");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("Div01","0","34",null,"32","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","9.47%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("Site ID");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PLANTID");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_lotNo","25.00%","0","9.47%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_tooltiptext("LOTID");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_site","sta_site:5","5","95","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_lotNo","sta_lotNo:5","5","250","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("200601F001-1-CL01-081-001");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00_00","0","66",null,"32","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("물류창고 입고 목록  <fc v=\"#f31d24\">0</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("OUTSOURCEDWAREHOUSEWEARLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_outsourcedWarehouseWear","0","99",null,null,"0","1",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_outsourcedWarehouseWear");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"34\"/><Column size=\"205\"/><Column size=\"82\"/><Column size=\"99\"/><Column size=\"41\"/><Column size=\"218\"/><Column size=\"50\"/><Column size=\"0\"/><Column size=\"155\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회사ID-----HIDDEN\"/><Cell col=\"1\" text=\"공장ID-----HIDDEN\"/><Cell col=\"2\" text=\"OSPRECEIPTUSER-----HIDDEN\"/><Cell col=\"3\" text=\"LOTHISTKEY-----HIDDEN\"/><Cell col=\"4\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"5\" text=\"Lot No.\"/><Cell col=\"6\" text=\"양산구분\"/><Cell col=\"7\" text=\"품목코드\"/><Cell col=\"8\" text=\"Rev.\"/><Cell col=\"9\" text=\"품목명\"/><Cell col=\"10\" text=\"공정수순\"/><Cell col=\"11\" text=\"공정ID-----HIDDEN\"/><Cell col=\"12\" text=\"공정명\"/><Cell col=\"13\" text=\"작업장AREAID-----HIDDEN\"/><Cell col=\"14\" text=\"작업장\"/><Cell col=\"15\" text=\"이전공정ID-----HIDDEN\"/><Cell col=\"16\" text=\"이전공정명\"/><Cell col=\"17\" text=\"이전작업장PREVAREAID-----HIDDEN\"/><Cell col=\"18\" text=\"이전작업장\"/><Cell col=\"19\" text=\"수량(PCS)\"/><Cell col=\"20\" text=\"수량(PNL)\"/><Cell col=\"21\" text=\"panelqty-----HIDDEN\"/><Cell col=\"22\" text=\"이전공정ID-----HIDDEN\"/><Cell col=\"23\" text=\"PATHSEQUENCEEND-----HIDDEN\"/></Band><Band id=\"body\"><Cell text=\"bind:ENTERPRISEID\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:PLANTID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:OSPRECEIPTUSER\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:LOTHISTKEY\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CHK\" textAlign=\"left\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"5\" text=\"bind:LOTID\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:LOTTYPE\" textAlign=\"left\" combocodecol=\"C,ProductionType,,Y,\" displaytype=\"combotext\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:USERSEQUENCE\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"13\" text=\"bind:AREAID\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:PREVPROCESSSEGMENTID\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:PREVPROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:PREVAREAID\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:PREVAREANAME\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:PCSQTY\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"20\" text=\"bind:PANELQTY\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"21\" text=\"bind:OSPMM\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0.##\" textAlign=\"right\"/><Cell col=\"22\" text=\"bind:PATHSEQUENCESTART\" textAlign=\"left\"/><Cell col=\"23\" text=\"bind:PATHSEQUENCEEND\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_outsourcedWarehouseWear",null,"72","29","24","6",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_outsourcedWarehouseWear",null,"72","29","24","41",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
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
        this.addIncludeScript("PCM08500M.xfdl","lib::lib_tom.xjs");
        this.registerScript("PCM08500M.xfdl", function() {
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
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.div_work.form.Div01.form;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_initCombo();

        	this.gfn_setEnterSearch(this.searchDiv.edt_lotNo, "nfn_search"); //Lot No. 엔터키 설정
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

        	if(this.nfn_isNull(lotId)){
        		this.gfn_Message("InputSomeThing", "Lot No.", "warning", "ok"); //Lot No.(를) 입력 하세요
        		this.fn_lotNoScanRready(); //scan READY
        		return;
        	}

        	var sRow = this.ds_outsourcedWarehouseWear.findRowExpr("LOTID == '"+lotId + "'");
        	if(sRow > -1){
        		this.gfn_Message("ExistLot", lotId, "info", "ok"); //이미 추가 된 LOT 입니다. {0}
        		this.searchDiv.edt_lotNo.set_value('');
        		this.fn_lotNoScanRready(); //scan READY
        		return;
        	}

        	this.ds_temp.clearData();
        	this.ds_search.clearData();

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_PLANTID", this.searchDiv.cbo_site.value); //Site코드
        	this.ds_search.setColumn(0, "P_LOTID", this.searchDiv.edt_lotNo.value);
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", "selectOutSourceWarehouseWare");

        	var sSvcID 			= "selectOutSourceWarehouseWare";
        	var sController 	= "/pcm08500/selectOutSourceWarehouseWare.do";
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
        	if (this.ds_outsourcedWarehouseWear.rowcount < 1)
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveOutSourceWarehouseWare";
        	var sController 	= "/pcm08500/saveOutSourceWarehouseWare.do";
        	var sInDatasets 	= "INPUT=ds_outsourcedWarehouseWear:U"; //수정된row만 서버 전송
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
        		this.ds_outsourcedWarehouseWear.clearData(); //Target Dataset clear
        		this.fn_lotNoScanRready(); //scan READY
        		return;
        	}

        	switch(trId) {
        		case "selectTomPlantList":	//[조회조건] Site Callback
        			this.searchDiv.cbo_site.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        			this.fn_lotNoScanRready(); //scan READY
        			break;
        		case "selectOutSourceWarehouseWare":	//공정관리물류창고입고 조회 callback
        			if (this.ds_temp.getRowCount() > 0)
        			{
        				var wareOkCheck = this.ds_temp.getColumn(this.ds_temp.rowposition, "WEAROKCHECK");
        				var lotId = this.ds_temp.getColumn(this.ds_temp.rowposition, "LOTID");
        				if(wareOkCheck == 'OK'){
        					var idx = this.ds_outsourcedWarehouseWear.addRow();
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "CHK", 						this.ds_temp.getColumn(this.ds_temp.rowposition, "CHK"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "ENTERPRISEID", 				this.ds_temp.getColumn(this.ds_temp.rowposition, "ENTERPRISEID"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "PLANTID", 					this.ds_temp.getColumn(this.ds_temp.rowposition, "PLANTID"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "OSPRECEIPTUSER", 			this.ds_temp.getColumn(this.ds_temp.rowposition, "OSPRECEIPTUSER"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "LOTHISTKEY", 				this.ds_temp.getColumn(this.ds_temp.rowposition, "LOTHISTKEY"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "LOTID", 					this.ds_temp.getColumn(this.ds_temp.rowposition, "LOTID"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "LOTTYPE", 					this.ds_temp.getColumn(this.ds_temp.rowposition, "LOTTYPE"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "PRODUCTDEFID", 				this.ds_temp.getColumn(this.ds_temp.rowposition, "PRODUCTDEFID"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "PRODUCTDEFVERSION", 		this.ds_temp.getColumn(this.ds_temp.rowposition, "PRODUCTDEFVERSION"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "PRODUCTDEFNAME", 			this.ds_temp.getColumn(this.ds_temp.rowposition, "PRODUCTDEFNAME"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "USERSEQUENCE", 				this.ds_temp.getColumn(this.ds_temp.rowposition, "USERSEQUENCE"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "PROCESSSEGMENTID", 			this.ds_temp.getColumn(this.ds_temp.rowposition, "PROCESSSEGMENTID"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "PROCESSSEGMENTNAME", 		this.ds_temp.getColumn(this.ds_temp.rowposition, "PROCESSSEGMENTNAME"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "AREAID", 					this.ds_temp.getColumn(this.ds_temp.rowposition, "AREAID"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "AREANAME", 					this.ds_temp.getColumn(this.ds_temp.rowposition, "AREANAME"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "PREVPROCESSSEGMENTID", 		this.ds_temp.getColumn(this.ds_temp.rowposition, "PREVPROCESSSEGMENTID"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "PREVPROCESSSEGMENTNAME", 	this.ds_temp.getColumn(this.ds_temp.rowposition, "PREVPROCESSSEGMENTNAME"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "PREVAREAID", 				this.ds_temp.getColumn(this.ds_temp.rowposition, "PREVAREAID"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "PREVAREANAME", 				this.ds_temp.getColumn(this.ds_temp.rowposition, "PREVAREANAME"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "PCSQTY", 					this.ds_temp.getColumn(this.ds_temp.rowposition, "PCSQTY"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "PANELQTY", 					this.ds_temp.getColumn(this.ds_temp.rowposition, "PANELQTY"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "OSPMM", 					this.ds_temp.getColumn(this.ds_temp.rowposition, "OSPMM"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "PATHSEQUENCESTART", 		this.ds_temp.getColumn(this.ds_temp.rowposition, "PATHSEQUENCESTART"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "PATHSEQUENCEEND", 			this.ds_temp.getColumn(this.ds_temp.rowposition, "PATHSEQUENCEEND"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "WEAROKCHECK", 				this.ds_temp.getColumn(this.ds_temp.rowposition, "WEAROKCHECK"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "LOTHISTKEYOLT", 			this.ds_temp.getColumn(this.ds_temp.rowposition, "LOTHISTKEYOLT"));
        					this.ds_outsourcedWarehouseWear.setColumn(idx, "WORKCOUNT", 				this.ds_temp.getColumn(this.ds_temp.rowposition, "WORKCOUNT"));
        				}else{
        					this.gfn_Message("InValidOspData018", lotId, "info", "ok"); //Lot No ({0}) 가 물류 창고 입고 된 상태입니다.
        				}
        			} else {
        				this.gfn_Message("InValidOspData002", lotId, "info", "ok"); //Lot No ({0}) 가 외주 창고 입고 대상이 아닙니다.
        			}
        			break;
        		case "saveOutSourceWarehouseWare" : //저장 callback
        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장이 완료되었습니다.
        			this.ds_outsourcedWarehouseWear.clearData(); //Target Dataset clear
        			this.fn_lotNoScanRready(); //scan READY
        			break;
        		default:
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
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
        	this.fn_initSiteCombo();
        }

        /*
         * 기능 : 'Site' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());

        	this.tomfn_setCustomQueryCmb(this.searchDiv.cbo_site // Object
        								, "selectTomPlantList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack"); //콜백함수 지정
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
        this.div_work_Div01_edt_lotNo_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		this.fn_search();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.Div01.form.edt_lotNo.addEventHandler("onkeydown",this.div_work_Div01_edt_lotNo_onkeydown,this);
            this.div_work.form.btn_delRow_ds_outsourcedWarehouseWear.addEventHandler("onclick",this.fn_delete,this);
        };
        this.loadIncludeScript("PCM08500M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
