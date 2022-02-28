(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DFM00400P");
            this.set_titletext("Layer별 불량 현황 - Lot No Popup");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_itemList", this);
            obj._setContents("<ColumnInfo><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONPERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONPERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mstDataClass", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchInit", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMOWNER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","20","34",null,"72","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_mstDataClassId","291","10","89","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("기간(To)");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DATETO");
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

            obj = new Static("sta_lotNo","0","35","79","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("54C33732C27844B298AB8C7EA28109AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_lotNo","86","35","200","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn_reset_search",null,null,"24","24","10","38",null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_reset2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_itemId","291","35","79","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("F112527EF89E45D8BA876725E97E3B30");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_itemId","382","35","217","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_prodType","0","10","79","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("기간(From)");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DATEFROM");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("div_dateFrom","86","10","200","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_url("common::com_calendar.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("div_dateTo","382","10","217","21",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_url("common::com_calendar.xfdl");
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

            obj = new Static("Static02","395","0","50","20",null,null,null,null,null,null,this);
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

            obj = new Static("Static02_01","395","106","50","34",null,null,null,null,null,null,this);
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

            obj = new Static("sta_title","20","106","80","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("ITEMID");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_itemList","sta_title:0","106","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_itemList","20","140",null,"306","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_itemList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"220\"/><Column size=\"150\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"품목코드\"/><Cell col=\"3\" text=\"품목명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:P_LOTID\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:P_PRODUCTDEFID\" textAlign=\"left\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"bind:P_PRODUCTDEFNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_popupTitle","2.50%","0","245","34",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Lot List");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("GRIDLOTLIST");
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
            this._addPreloadList("fdl","common::com_calendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("DFM00400P.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("DFM00400P.xfdl","lib::lib_mtm.xjs");
        this.registerScript("DFM00400P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Layer별 불량 현황 - Lot No Popup
         * 파일명 		: DFM00400P.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.06.01
         *
         * 설  명		: Layer별 불량 현황 - Lot No Popup
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.06.01	김진현   	최초작성
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


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.divSearch.form.edt_lotNo.set_value(this.parent.arg_lotNo);

        	// 검색조건 달력 설정
        	this.fn_setDate(this.parent.arg_periodfr, this.parent.arg_periodto);

        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {

        	var nPeriodfr = this.divSearch.form.div_dateFrom.form.calStart.value;
        	var nPeriodto = this.divSearch.form.div_dateTo.form.calStart.value;




        	// 날짜체크
        	if( nPeriodfr  > nPeriodto )
        	{
        		this.gfn_Message("ValidateDate", "", "warning", "ok");//시작 일자는 종료일자보다 작아야합니다.
        		this.opener.fv_rtnValue = "";
        		this.close();
        		return false;
        	}
        	var nPeriodfr8 = nPeriodfr.substr(0,8);
        	var nPeriodto8 = nPeriodto.substr(0,8);

        	// 날짜 체크
        	if(!this.gfn_isDate(nPeriodfr8) || !this.gfn_isDate(nPeriodto8))
        	{
        		this.gfn_Message("ValidateMWONONEDATE", "", "warning", "ok");//잘못된날짜데이터입니다.
        		this.opener.fv_rtnValue = "";
        		this.close();
        		return;
        	}

        	this.ds_itemList.clearData(); //Target Dataset clear
        	this.ds_search.clearData(); 		//Search Condition Dataset clear

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID"			, this.gf_getEnterpriseId()); 					// ENTERPRISEID
        	this.ds_search.setColumn(0, "P_LOTID"				, this.divSearch.form.edt_lotNo.value); 					// Lot
        	this.ds_search.setColumn(0, "P_PRODUCTDEFID"		, this.divSearch.form.edt_itemId.value); 					// 품목
        	this.ds_search.setColumn(0,"P_CONPERIOD_PERIODFR"	, nPeriodfr.substr(0,14)); 	// 시작일
        	this.ds_search.setColumn(0,"P_CONPERIOD_PERIODTO"	, nPeriodto.substr(0,14)); 	// 종료일

        	var sSvcID 			= "selectDefectMapLotList";
        	var sController 	= "/dfm00400/selectDefectMapLotList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_itemList=output";
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

        		case "selectDefectMapLotList":		//[메인 조회] 자재그룹코드 Callback
        			if (this.ds_itemList.getRowCount() == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "error", "ok");
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

        }

        this.fn_popupAfter = function(sPopupId, Variant)
        {


        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
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

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
         /*
          * 조회기간 콤보 변경시
          */
        this.fn_setDate = function(nDf, nDt)
        {
        	var val = "thisweek";//this.tab_search.tab_search01.form.cbo_period.value; //var val = e.postvalue

        	if(this.gfn_isNull(val)) return;

        	var sDate 		= this.nfn_getCurrentSystemTime(0,0,val);
        	var arrDate 	= sDate.split(",");
        	var sDateFrom 	= arrDate[1];
        	var sDateTo 	= arrDate[2];
        	var sTime 		= "0830";

        	var dateFrom 	= this.divSearch.form.div_dateFrom.form.calStart.value;
        	var dateTo 		= this.divSearch.form.div_dateTo.form.calStart.value;

        	if(!this.gfn_isNull(dateFrom) && dateTo.length>=12){
        		sTime = dateTo.substring(8,12);
        	}

        	this.divSearch.form.div_dateFrom.form.calStart.set_value(sDateFrom+sTime);
        	if(!this.gfn_isNull(nDf))
        	{
        		this.divSearch.form.div_dateFrom.form.calStart.set_value(nDf);
        	}
        	// from
        	if(!this.gfn_isNull(dateTo) && dateTo.length==12){
        		sTime = dateTo.substring(8,12);
        	}
        	this.divSearch.form.div_dateTo.form.calStart.set_value(sDateTo+sTime);
        	// to
        	if(!this.gfn_isNull(nDt))
        	{
        		this.divSearch.form.div_dateTo.form.calStart.set_value(nDt);
        	}

        	this.fn_search();
        };





        /*
         * Lot No / 품목코드 입력 후 엔터 시 조회
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
         * 이벤트 : 그리드 선택값 리턴 처리(2차원 배열) -> 단일 선택
         */
        this.btn_apply_onclick = function(obj,e)
        {

        	if (this.ds_itemList.getRowCount() == 0)
            {
            	this.gfn_Message("NoSelections", "", "warning", "ok");
            	return;
            }
        	// 선택된 값을 담는다.
        	this.fn_selectData(this.ds_itemList.rowposition);	// 체크박스 아님

        };

        /*
         * 그리드 셀 더블 클릭시
         */
        this.grd_consumalbe_oncelldblclick = function(obj,e)
        {
        	if(e.row < 0 || e.col < 1) return;
        	this.fn_selectData(e.row);
        };

        /*
         * 조회 조건 초기화
         */
        this.divSearch_btn_reset_search_onclick = function(obj,e)
        {
        	this.divSearch.form.edt_itemId.set_value("");
        	this.divSearch.form.edt_lotNo.set_value("");
        	this.fn_setDate ();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.divSearch.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.divSearch.form.edt_lotNo.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.divSearch.form.btn_reset_search.addEventHandler("onclick",this.divSearch_btn_reset_search_onclick,this);
            this.divSearch.form.edt_itemId.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.divSearch.form.div_dateFrom.addEventHandler("onkeydown",this.fn_preiodChang,this);
            this.divSearch.form.div_dateTo.addEventHandler("onkeydown",this.fn_preiodChang,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_apply.addEventHandler("onclick",this.btn_apply_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_itemList.addEventHandler("oncelldblclick",this.grd_consumalbe_oncelldblclick,this);
        };
        this.loadIncludeScript("DFM00400P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
