(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM08600P");
            this.set_titletext("물류창고출고 LOT NO 조회");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_outsourcedWarehouseShipment", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ARRAYQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"OSPMM\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SENDUSER\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPOKCHECK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"P_ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_RECEIPTDATEFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_RECEIPTDATETO\" type=\"STRING\" size=\"256\"/><Column id=\"P_SHIPOKCHECK\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch01","20","20",null,"92","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","79","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("0");
            obj.set_text("SITE");
            obj.set_cssclass("sta_WF_label");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("sta_receiptdate","309","10","79","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("1");
            obj.set_text("입고일");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("RECEIPTDATE");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.divSearch01.form);
            obj.set_taborder("3");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"47","24","40","10",null,null,null,null,this.divSearch01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Button("btnReset",null,null,"24","24","10","10",null,null,null,null,this.divSearch01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_reset2");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("sta_area","0","35","79","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("6");
            obj.set_text("외주작업장");
            obj.set_cssclass("sta_WF_label");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("sta_process","0","60","79","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("7");
            obj.set_text("공정명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STOPPROCESSSEGMENTNAME");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("sta_product","309","35","79","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("8");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("sta_lotNo","309","60","79","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("9");
            obj.set_text("LOT NO");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("edt_lotNo","382","60","217","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("10");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Button("btn_product","577","35","22","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("edt_product","382","35","195","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("11");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Calendar("cal_periodFr","382","10","100","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Calendar("cal_periodTo","499","10","100","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Button("btn_area","287","35","22","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("edt_area","89","35","198","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("sta_00","482","10","17","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("17");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_unit");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Combo("cbo_site","89","10","220","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("edt_process","89","60","198","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("19");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Button("btn_process","287","60","22","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"50","10","18","48",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Button("btn_apply",null,null,"70","28","btn_cancel:5","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("적용");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","115","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","395","112","50","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","82","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"42","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"-2","25","25","14",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("title0","20","112","130","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("물류창고 입고 목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("OUTSOURCEDWAREHOUSEWEARLIST");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_outsourcedWarehouseShipment","title0:0","112","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_outsourcedWarehouseShipment","20","146",null,null,"0","58",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_outsourcedWarehouseShipment");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"55\"/><Column size=\"192\"/><Column size=\"112\"/><Column size=\"65\"/><Column size=\"58\"/><Column size=\"100\"/><Column size=\"39\"/><Column size=\"100\"/><Column size=\"53\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회사ID---------HIDDEN\"/><Cell col=\"1\" text=\"공장ID---------HIDDEN\"/><Cell col=\"2\" text=\"RECEIPTUSER---------HIDDEN\"/><Cell col=\"3\" text=\"SENDUSER---------HIDDEN\"/><Cell col=\"4\" text=\"RECEIPTSEQUENCE---------HIDDEN\"/><Cell col=\"5\" text=\"LOTHISTKEY---------HIDDEN\"/><Cell col=\"6\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"7\" text=\"Lot No.\"/><Cell col=\"8\" text=\"입고일\"/><Cell col=\"9\" text=\"입고자명\"/><Cell col=\"10\" text=\"양산구분\"/><Cell col=\"11\" text=\"품목코드\"/><Cell col=\"12\" text=\"Rev\"/><Cell col=\"13\" text=\"품목명\"/><Cell col=\"14\" text=\"공정수순\"/><Cell col=\"15\" text=\"공정ID---------HIDDEN\"/><Cell col=\"16\" text=\"공정명\"/><Cell col=\"17\" text=\"작업장AREAID---------HIDDEN\"/><Cell col=\"18\" text=\"작업장\"/><Cell col=\"19\" text=\"이전 공정명\"/><Cell col=\"20\" text=\"이전 작업장\"/><Cell col=\"21\" text=\"수량 (PCS)\"/><Cell col=\"22\" text=\"수량 (PNL)\"/><Cell col=\"23\" text=\"panelqty---------HIDDEN\"/><Cell col=\"24\" text=\"이전공정ID---------HIDDEN\"/><Cell col=\"25\" text=\"이전작업장PREVAREAID---------HIDDEN\"/></Band><Band id=\"body\"><Cell text=\"bind:ENTERPRISEID\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:PLANTID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:RECEIPTUSER\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:SENDUSER\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:RECEIPTSEQUENCE\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:LOTHISTKEY\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:CHK\" textAlign=\"left\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"7\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:RECEIPTDATE\" textAlign=\"left\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"9\" text=\"bind:RECEIPTUSERNAME\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:LOTTYPE\" textAlign=\"left\" combocodecol=\"C,YieldProdType,,Y,Y\" displaytype=\"combotext\"/><Cell col=\"11\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:USERSEQUENCE\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:AREAID\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:PREVPROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:PREVAREANAME\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:PCSQTY\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"22\" text=\"bind:PANELQTY\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"23\" text=\"bind:OSPMM\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0.##\" textAlign=\"right\"/><Cell col=\"24\" text=\"bind:PREVPROCESSSEGMENTID\" textAlign=\"left\"/><Cell col=\"25\" text=\"bind:PREVAREAID\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,490,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM08600P.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM08600P.xfdl","lib::lib_tom.xjs");
        this.registerScript("PCM08600P.xfdl", function() {
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
        this.searchDiv = this.divSearch01.form;

        this.areaId = "";
        this.processId = "";
        this.productId = "";
        this.productVersion = "";

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_initCombo();

        	this.gfn_setEnterSearch(this.searchDiv.edt_lotNo, "nfn_search"); //Lot No. 엔터키 설정

        	this.searchDiv.cbo_site.value = this.parent.arg_siteId;
        	this.searchDiv.edt_area.set_value(this.parent.arg_area);
        	this.areaId = this.parent.arg_areaId;

        	//alert('---receive :: '+this.parent.arg_areaId);

        	this.searchDiv.cbo_site.enable = false;
        	this.searchDiv.edt_area.enable = false;

        	this.opener.fv_rtnValue = "";
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_outsourcedWarehouseShipment.clearData(); //Target Dataset clear
        	this.ds_search.clearData(); //Search Condition Dataset clear

        	//alert(this.areaId);

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "P_PLANTID", this.searchDiv.cbo_site.value); //Site코드
        	this.ds_search.setColumn(0, "P_AREAID", this.areaId); //작업장코드
        	this.ds_search.setColumn(0, "P_PROCESSSEGMENTID", this.processId); //공정코드
        	this.ds_search.setColumn(0, "P_PRODUCTDEFID", this.productId); //품목코드
        	this.ds_search.setColumn(0, "P_PRODUCTDEFVERSION", this.productVersion); //품목Ver.
        	this.ds_search.setColumn(0, "P_RECEIPTDATEFR", this.searchDiv.cal_periodFr.value); //입고일자(시작)
        	this.ds_search.setColumn(0, "P_RECEIPTDATETO", this.searchDiv.cal_periodTo.value); //입고일자(종료)
        	this.ds_search.setColumn(0, "P_SHIPOKCHECK", "Y");
        	this.ds_search.setColumn(0, "P_LOTID", this.searchDiv.edt_lotNo.value);
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", "selectOutSourceWarehouseShipment");

        	var sSvcID 			= "selectOutSourceWarehouseShipment";
        	var sController 	= "/pcm08600/selectOutSourceWarehouseShipment.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_outsourcedWarehouseShipment=output";
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
        			this.searchDiv.cbo_site.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        			break;
        		case "selectOutSourceWarehouseShipment":	//공정관리물류창고입고 조회 callback
        			if (this.ds_outsourcedWarehouseShipment.getRowCount() == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "error", "ok");
        			} else {
        			}
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

        	if(popId=="P00115"){ //외주작업장 조회
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        	} else if (popId=="P00114"){	//공정 조회
        		oArg.arg_searchStr = "PROCESSSEGMENTNAME="+this.searchDiv.edt_process.value;
        		oArg.arg_rtnCols = "PROCESSSEGMENTID|PROCESSSEGMENTNAME"; //공정ID/공정명
        	} else if (popId=="P00105"){	//품목 조회
        		oArg.arg_searchStr = "TXTPRODUCTDEFNAME="+this.searchDiv.edt_product.value;
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTIONTYPENM|PRODUCTDEFTYPENM|PRODUCTDEFVERSION"; //품목코드/품목명/생산구분/품목유형구분/Rev
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
        	}else if(sPopupId == "SCH_PROCESS")
        	{
        		this.searchDiv.edt_process.set_value(rtn[1]);
        		this.processId = rtn[0];
        	}else if(sPopupId == "SCH_PRODUCT")
        	{
        		this.searchDiv.edt_product.set_value(rtn[1]);
        		this.productId = rtn[0];
        		this.productVersion = rtn[4];
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

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.divSearch01_edt_lotNo_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		this.fn_search();
        	}
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };

        /*
         * 이벤트 : 조회조건에서 '작업장' 버튼 클릭 시
         */
        this.divSearch01_btn_area_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("P_ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("P_PLANTID", this.searchDiv.cbo_site.value);
        	sArgs += this.gfn_setParam("P_AREANAME", this.searchDiv.edt_area.value);
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.fn_openPop("SCH_AREA","P00115", sArgs); //작업장 조회
        };

        /*
         * 이벤트 : 조회조건에서 '공정' 버튼 클릭 시
         */
        this.divSearch01_btn_process_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PROCESSSEGMENTNAME", this.searchDiv.edt_process.value);
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.fn_openPop("SCH_PROCESS","P00114", sArgs); //공정 조회
        };

        /*
         * 이벤트 : 조회조건에서 '품목코드' 버튼 클릭 시
         */
        this.divSearch01_btn_product_onclick = function(obj,e)
        {
        	var sArgs = {};
        	this.fn_openPop("SCH_PRODUCT","P00105", sArgs); //품목코드 조회
        };


        /*
         * 이벤트 : 그리드 선택값 리턴 처리(2차원 배열)
         */
        this.btn_apply_onclick = function(obj,e)
        {
        	if (this.ds_outsourcedWarehouseShipment.getCaseCount("CHK=='1'")==0)
            {
            	this.gfn_Message("NoSelections", "", "warning", "ok");
            	return;
            }
        	var index = 0;
        	var rtnArray = new Array();
        	for(var j=0; j<this.ds_outsourcedWarehouseShipment.rowcount; j++){
        		var colArray = new Array();
        		if(this.ds_outsourcedWarehouseShipment.getColumn(j,"CHK") != "1") {//check 선택이 안됐으면 Skip
        			//this.gfn_Message("skip"+j, "", "warning", "ok");
        			continue;
        		}else{
        			//this.gfn_Message("sent"+j, "", "warning", "ok");
        		}
        		//for (var i = 0; i < this.grd_outsourcedWarehouseShipment.getCellCount("Body"); i++)
        		//{
        		//	var temp = this.grd_outsourcedWarehouseShipment.getCellProperty("Body", i, "text");
        		//	if(!this.gfn_isNull(temp)){
        		//		var colId = temp.replace("bind:", "");
        		//		//trace("i====" + i + " / value====[" + colId+"]"+this.ds_outsourcedWarehouseShipment.getColumn(this.ds_outsourcedWarehouseShipment.rowposition, colId));
        		//		colArray[i] = this.ds_outsourcedWarehouseShipment.getColumn(this.ds_outsourcedWarehouseShipment.rowposition, colId);
        		//		//alert(colArray[i]);
        		//	}
        		//}
        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "ENTERPRISEID", 		colArray[0]);
        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "PLANTID", 			colArray[1]);
        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "RECEIPTUSER", 		colArray[2]);
        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "SENDUSER", 			colArray[3]);
        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "RECEIPTSEQUENCE", 	colArray[4]);

        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "LOTHISTKEY", 		colArray[5]);
        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "CHK", "0"); //미선택건으로
        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "LOTID", 			colArray[7]);
        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "RECEIPTDATE", 		colArray[8]);
        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "RECEIPTUSERNAME", 	colArray[9]);

        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "LOTTYPE", 			colArray[10]);
        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "PRODUCTDEFID", 		colArray[11]);
        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "PRODUCTDEFVERSION", colArray[12]);
        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "PRODUCTDEFNAME", 	colArray[13]);
        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "USERSEQUENCE", 		colArray[14]);

        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "PROCESSSEGMENTID", 	colArray[15]);
        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "PROCESSSEGMENTNAME", colArray[16]);
        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "AREAID", 			colArray[17]);
        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "AREANAME", 			colArray[18]);
        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "PREVPROCESSSEGMENTNAME", colArray[19]);

        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "PREVAREANAME", 		colArray[20]);
        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "PCSQTY", 			colArray[21]);
        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "PANELQTY", 			colArray[22]);
        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "OSPMM", 			colArray[23]);
        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "PREVPROCESSSEGMENTID", colArray[24]);

        		//this.ds_outsourcedWarehouseShipment.setColumn(idx, "PREVAREAID", 		colArray[25]);

        		colArray[0] = this.ds_outsourcedWarehouseShipment.getColumn(j, "ENTERPRISEID");
        		colArray[1] = this.ds_outsourcedWarehouseShipment.getColumn(j, "PLANTID");
        		colArray[2] = this.ds_outsourcedWarehouseShipment.getColumn(j, "RECEIPTUSERNAME");
        		colArray[3] = this.ds_outsourcedWarehouseShipment.getColumn(j, "SENDUSER");
        		colArray[4] = this.ds_outsourcedWarehouseShipment.getColumn(j, "RECEIPTSEQUENCE");

        		colArray[5] = this.ds_outsourcedWarehouseShipment.getColumn(j, "LOTHISTKEY");
        		colArray[6] = '';
        		colArray[7] = this.ds_outsourcedWarehouseShipment.getColumn(j, "LOTID");	//화면에서 중복 체크 한다.
        		colArray[8] = this.ds_outsourcedWarehouseShipment.getColumn(j, "RECEIPTDATE");
        		colArray[9] = this.ds_outsourcedWarehouseShipment.getColumn(j, "RECEIPTUSERNAME");

        		colArray[10] = this.ds_outsourcedWarehouseShipment.getColumn(j, "LOTTYPE");
        		colArray[11] = this.ds_outsourcedWarehouseShipment.getColumn(j, "PRODUCTDEFID");
        		colArray[12] = this.ds_outsourcedWarehouseShipment.getColumn(j, "PRODUCTDEFVERSION");
        		colArray[13] = this.ds_outsourcedWarehouseShipment.getColumn(j, "PRODUCTDEFNAME");
        		colArray[14] = this.ds_outsourcedWarehouseShipment.getColumn(j, "USERSEQUENCE");

        		colArray[15] = this.ds_outsourcedWarehouseShipment.getColumn(j, "PROCESSSEGMENTID");
        		colArray[16] = this.ds_outsourcedWarehouseShipment.getColumn(j, "PROCESSSEGMENTNAME");
        		colArray[17] = this.ds_outsourcedWarehouseShipment.getColumn(j, "AREAID");
        		colArray[18] = this.ds_outsourcedWarehouseShipment.getColumn(j, "AREANAME");
        		colArray[19] = this.ds_outsourcedWarehouseShipment.getColumn(j, "PREVPROCESSSEGMENTNAME");

        		colArray[20] = this.ds_outsourcedWarehouseShipment.getColumn(j, "PREVAREANAME");
        		colArray[21] = this.ds_outsourcedWarehouseShipment.getColumn(j, "PCSQTY");
        		colArray[22] = this.ds_outsourcedWarehouseShipment.getColumn(j, "PANELQTY");
        		colArray[23] = this.ds_outsourcedWarehouseShipment.getColumn(j, "OSPMM");
        		colArray[24] = this.ds_outsourcedWarehouseShipment.getColumn(j, "PREVPROCESSSEGMENTID");

        		colArray[25] = this.ds_outsourcedWarehouseShipment.getColumn(j, "PREVAREANAME");

        		rtnArray[index] = colArray;
        		index++;
        	}
        	if(index>0){
        		this.opener.fv_rtnValue = rtnArray;
        	}else{
        		this.opener.fv_rtnValue = "";
        	}
        	this.close();
        };

        this.divSearch01_edt_product_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.divSearch01_btn_product_onclick();
        	}
        };

        this.divSearch01_edt_process_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.divSearch01_btn_process_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.divSearch01.form.btnSearch.addEventHandler("onclick",this.fn_search,this);
            this.divSearch01.form.edt_lotNo.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.divSearch01.form.btn_product.addEventHandler("onclick",this.divSearch01_btn_product_onclick,this);
            this.divSearch01.form.edt_product.addEventHandler("onkeydown",this.divSearch01_edt_product_onkeydown,this);
            this.divSearch01.form.btn_area.addEventHandler("onclick",this.divSearch01_btn_area_onclick,this);
            this.divSearch01.form.cbo_site.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cboSite_onitemchanged,this);
            this.divSearch01.form.edt_process.addEventHandler("onkeydown",this.divSearch01_edt_process_onkeydown,this);
            this.divSearch01.form.btn_process.addEventHandler("onclick",this.divSearch01_btn_process_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_apply.addEventHandler("onclick",this.btn_apply_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("PCM08600P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
