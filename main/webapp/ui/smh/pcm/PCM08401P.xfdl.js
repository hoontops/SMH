(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MTM00400P");
            this.set_titletext("포장실적조회_LotNo조회 팝업");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lotList", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFNM\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"UOMDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"M2QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PLANENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"R_PLANENDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"TXTPRODUCTDEFNAME2\" type=\"STRING\" size=\"256\"/><Column id=\"TXTPRODUCTDEFIDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TXTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"TXTPROCESSSEGMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_type", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"CODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchInit", this);
            obj._setContents("<ColumnInfo><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","20","20",null,"72","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_prodCodeName","309","10","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("품목 코드/명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFCODENAME");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn_search",null,null,"47","24","40","38",null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("SEARCH_BUTTON");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn_reset_ds_itemList",null,null,"24","24","10","38",null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_reset2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_item","0","10","99","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("9D8F62E6072F41CAB0AFA4149DEFF55A");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_lotNo","0","35","99","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("Lot No");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("873DD90A54B04DEDA6CAD3D47CE96684");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_lotNo","94","35","218","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_proc","309","35","99","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SpecClass004");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_proc","409","35","190","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_item","94","10","196","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn_item","290","10","22","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_prodCodeName","409","10","211","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn_proc","598","35","22","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch.addChild(obj.name, obj);

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
            obj.set_tooltiptext("CANCEL");
            this.addChild(obj.name, obj);

            obj = new Button("btn_apply",null,null,"70","28","btn_cancel:5","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("적용");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptext("APPLY");
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

            obj = new Static("Static02_01","395","92","50","34",null,null,null,null,null,null,this);
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

            obj = new Static("sta_title","20","92","80","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Lot No. 선택");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("SELECTLOTNO");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_lotList","sta_title:26","92","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_itemList","20","126",null,"306","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_lotList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"3\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPENAME\"/><Cell col=\"4\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"5\" text=\"Rev\" tooltiptext=\"INNERREVISION\"/><Cell col=\"6\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"7\" text=\"라우팅명\" tooltiptext=\"PROCESSDEFNAME\"/><Cell col=\"8\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"9\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"10\" text=\"Site 명\" tooltiptext=\"PLANTNAME\"/><Cell col=\"11\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell col=\"12\" text=\"Roll/Sheet\" tooltiptext=\"RTRSHT\"/><Cell col=\"13\" text=\"UOM 명\" tooltiptext=\"UOMDEFNAME\"/><Cell col=\"14\" text=\"수량\" tooltiptext=\"QTY\"/><Cell col=\"15\" text=\"수량(PCS)\" tooltiptext=\"PCSQTY\"/><Cell col=\"16\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell col=\"17\" text=\"M2 수량\" tooltiptext=\"M2QTY\"/><Cell col=\"18\" text=\"계획 종료일\" tooltiptext=\"PLANENDTIME\"/><Cell col=\"19\" text=\"잔여일수\" tooltiptext=\"LEFTDATE\"/><Cell col=\"20\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell col=\"21\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell col=\"22\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell col=\"23\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell col=\"24\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell col=\"25\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell col=\"26\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell col=\"27\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell col=\"28\" text=\"리드타임\" tooltiptext=\"LEADTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:LOTID\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:LOTTYPE\" textAlign=\"left\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PROCESSDEFNM\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:USERSEQUENCE\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:PLANTNAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:RTRSHT\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:UOMDEFNAME\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:QTY\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:PCSQTY\" textAlign=\"right\"/><Cell col=\"16\" text=\"bind:PANELQTY\" textAlign=\"right\"/><Cell col=\"17\" text=\"bind:M2QTY\" textAlign=\"right\"/><Cell col=\"18\" text=\"bind:R_PLANENDTIME\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:LEFTDATE\" textAlign=\"right\"/><Cell col=\"20\" text=\"bind:RECEIVEPCSQTY\" textAlign=\"right\"/><Cell col=\"21\" text=\"bind:RECEIVEPANELQTY\" textAlign=\"right\"/><Cell col=\"22\" text=\"bind:WORKSTARTPCSQTY\" textAlign=\"right\"/><Cell col=\"23\" text=\"bind:WORKSTARTPANELQTY\" textAlign=\"right\"/><Cell col=\"24\" text=\"bind:WORKENDPCSQTY\" textAlign=\"right\"/><Cell col=\"25\" text=\"bind:WORKENDPANELQTY\" textAlign=\"right\"/><Cell col=\"26\" text=\"bind:SENDPCSQTY\" textAlign=\"right\"/><Cell col=\"27\" text=\"bind:SENDPANELQTY\" textAlign=\"right\"/><Cell col=\"28\" text=\"bind:LEADTIME\" textAlign=\"right\"/></Band></Format></Formats>");
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
        this.addIncludeScript("PCM08401P.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM08401P.xfdl","lib::lib_mtm.xjs");
        this.registerScript("PCM08401P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Lot No 조회(포장실적조회)
         * 파일명 		: PCM08401P.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.03.15
         *
         * 설  명		: 포장실적 (Lot No 팝업)
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.15	김진현   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.divSearch.form;

        this.g_itemId = "";
        this.g_proc   = "";

        var lv_rtnCols;


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// 리턴 할 데이터 컬럼 값
        	lv_rtnCols = this.parent.arg_rtnCol;

        	this.nfn_formInit(obj);

        	// 품목유형코드 조회
        	//this.fn_initCombo();

        	// 검색조건의 자재명값 입력된 내용 설정
        	this.searchDiv.edt_lotNo.set_value(this.parent.arg_lotId);

        	// 값 존재 할 경우 바로 조회
        	if(!this.gfn_isNull(this.searchDiv.edt_lotNo.value))
        	{
        		//this.fn_search();
        	}
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_lotList.clearData(); 		//Target Dataset clear
        	this.ds_search.clearData(); 		//Search Condition Dataset clear

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID"			, this.gf_getEnterpriseId()); 	// ENTERPRISEID

        	// 품목명이 없으면 자재id 초기화
        	if(this.gfn_isNull(this.searchDiv.edt_item.value))
        	{
        		this.g_itemId = "";			//품목id
        	}
        	// 공정명이 없으면 자재id 초기화
        	if(this.gfn_isNull(this.searchDiv.edt_proc.value))
        	{
        		this.g_proc = "";			//공정id
        	}
        	this.ds_search.setColumn(0, "TXTPRODUCTDEFNAME2"		, this.g_itemId); 	// 품목
        	this.ds_search.setColumn(0, "TXTPRODUCTDEFIDNAME"		, this.searchDiv.edt_prodCodeName.value); 	// 품목 코드 명
        	this.ds_search.setColumn(0, "TXTLOTID"					, this.searchDiv.edt_lotNo.value); 	// lot no
        	this.ds_search.setColumn(0, "TXTPROCESSSEGMENT"			, this.g_proc); 	// 공정

        	var sSvcID 			= "selectLotIdList";
        	var sController 	= "/pcm08400/selectLotIdList.do";		// 다른쪽에서 생성 한것 가져다 활용(x) chk 박스 필요
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_lotList=output";
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

        		case "selectLotIdList":	//[메인조회] 품목코드 list

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

        	// 품목값 선택된값
        	var nItem = this.searchDiv.edt_item.value;
        	var nItemNm = nItem == "" ? "" : "TXTPRODUCTDEFNAME=" + nItem ;

        	// 공정값 선택된값
        	var nProc = this.searchDiv.edt_proc.value;
        	var nProcNm = nProc == "" ? "" : "PROCESSSEGMENT=" + nProc ;


        	if(popId=="P00153"){ 				// 품목 팝업
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME";

        		oArg.arg_searchStr = nItemNm;	// 품목명 값
        	} else if (popId=="P00154")			// 공정 팝업
        	{
        		oArg.arg_rtnCols = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";

        		oArg.arg_searchStr = nProcNm;	// 공정명 값
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }
        /*
         * 팝업 콜백
         */
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_ITEM")
        	{
        		this.searchDiv.edt_item.set_value(rtn[1]);
        		this.g_itemId = rtn[0];
        	} else if(sPopupId == "SCH_PROC")
        	{
        		this.searchDiv.edt_proc.set_value(rtn[1]);
        		this.g_proc = rtn[0];
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
         * 기능 : '자재그룹코드' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {
        	this.ds_searchInit.clearData();

        	// 조회 조건 설정
        	this.ds_searchInit.addRow();
        	this.ds_searchInit.setColumn(0, "CODECLASSID", "ProductDivision2"); 	//

        	// 제품구분 콤보 정보 조회
        	var sSvcID 			= "selectTypeList";
        	var sController 	= "/pcm08400/selectTypeList.do";
        	var sInDatasets 	= "INPUT=ds_searchInit";
        	var sOutDatasets 	= "ds_type=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        }

        /*
         * 적용 버튼 클릭시 해당 값 담는 함수
         */
        this.fn_selectData = function(rowPosition)
        {
        	var rtnArray = new Array();
        	for (var i = 1; i <= this.grd_itemList.getCellCount("Body"); i++)
        	{
        		var temp = this.grd_itemList.getCellProperty("Body", i, "text");

        		if(!this.gfn_isNull(temp)){
        			var colId = temp.replace("bind:", "");
        			rtnArray[i - 1] = this.ds_itemList.getColumn(this.ds_itemList.rowposition, colId);
        		}
        	}
        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        }

        /*
         * 선택된 값 담기
         */
        this.fn_selectData = function()
        {
        	var rtnArray = new Array();
        	var index = 0;
        	if (this.ds_lotList.getCaseCount("CHK=='1'")==0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}

        	for(var j=0; j<this.ds_lotList.rowcount; j++){
        		if(this.ds_lotList.getColumn(j,"CHK")!="1") continue;
        		var colArray = new Array();

        		var colIdList = lv_rtnCols.split("|");			// 리턴 값

        		for (var i = 0; i < colIdList.length; i++)
        		{
        			colArray[i] = this.ds_lotList.getColumn(j, colIdList[i]);
        		}
        		rtnArray[index] = colArray;
        		index++;
        	}
        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 자재명 입력 후 엔터 시 조회
         */
        this.divSearch01_edt_lotNo_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13)
        	{
        		this.fn_search();
        	}
        };

        /*
         * X 버튼 클릭시
         */
        this.btn_close_onclick = function(obj,e)
        {
        	this.opener.fv_rtnValue = "";
        	this.close();
        };

        /*
         * 취소 버튼 클릭시
         */
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.opener.fv_rtnValue = "";
        	this.close();
        };


        /*
         * 이벤트 : 그리드 선택값 리턴 처리(2차원 배열)
         */
        this.btn_apply_onclick = function(obj,e)
        {
        	this.fn_selectData();
        };

        /*
         * 더블 클릭시
         */
        this.grd_itemList_oncelldblclick = function(obj,e)
        {
        	if(e.row < 0 || e.col < 1) return;
        	this.ds_itemList.setColumn(e.row,"CHK","1");
        	this.fn_selectData();
        	return;
        };

        /*
         * 품목 팝업 호출
         */
        this.divSearch_btn_item_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType());

        	this.fn_openPop("SCH_ITEM","P00153", sArgs); //품목 코드 조회
        };
        /*
         * 공정 선택 팝업 호출
         */
        this.divSearch_btn_proc_onclick = function(obj,e)
        {
        	var sArgs = {};
        	this.fn_openPop("SCH_PROC","P00154", sArgs); //공정 조회
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.divSearch.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.divSearch.form.edt_lotNo.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.divSearch.form.btn_item.addEventHandler("onclick",this.divSearch_btn_item_onclick,this);
            this.divSearch.form.edt_prodCodeName.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.divSearch.form.btn_proc.addEventHandler("onclick",this.divSearch_btn_proc_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_apply.addEventHandler("onclick",this.btn_apply_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_itemList.addEventHandler("oncelldblclick",this.grd_itemList_oncelldblclick,this);
        };
        this.loadIncludeScript("PCM08401P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
