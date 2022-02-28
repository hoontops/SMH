(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MFM00100P");
            this.set_titletext("주차 선택 팝업");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_weekList", this);
            obj._setContents("<ColumnInfo><Column id=\"YEARMONTH\" type=\"STRING\" size=\"256\"/><Column id=\"YEARWEEK\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TXT_WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_term", this);
            obj._setContents("<ColumnInfo><Column id=\"YEARMONTH\" type=\"STRING\" size=\"256\"/><Column id=\"YEARWEEK\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","20","20",null,"42","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_type","0","10","80","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("주차 년월");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("PRODUCTDIVISION");
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

            obj = new Button("btn_search",null,"8","47","24","40",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("SEARCH_BUTTON");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn_reset_ds_itemList",null,"8","24","24","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_reset2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_itemCodeNm","308","10","80","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("주차");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("TXTPRODUCTDEFNAME");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_week","398","10","111","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("cal_periodFr","83","10","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("cal_periodTo","201","10","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static11","184","11","17","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_unit");
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

            obj = new Static("Static02_01","395","62","50","34",null,null,null,null,null,null,this);
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

            obj = new Static("sta_title","20","62","80","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("주차 선택");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("SELECTPRODUCTDEFID");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_weekList","sta_title:0","62","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_weekLList","20","96",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_weekList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"0\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"년월\"/><Cell col=\"1\" text=\"YEARWEEK\"/><Cell col=\"2\" text=\"주차\"/></Band><Band id=\"body\"><Cell text=\"bind:YEARMONTH\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:YEARWEEK\"/><Cell col=\"2\" text=\"bind:WEEK\" textAlign=\"left\"/></Band></Format></Formats>");
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
        this.addIncludeScript("MFM00100P.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("MFM00100P.xfdl","lib::lib_mtm.xjs");
        this.registerScript("MFM00100P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 공정 부하 기준 정보 (품목 팝업)
         * 파일명 		: MFM00200.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.04.19
         *
         * 설  명		: 공정부하기준정보 품목팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.19	김진현   	최초작성
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

        var lv_rtnCols;

        var p_week = '';

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// 그리드 리턴 받을 값
        	lv_rtnCols = this.parent.arg_rtnCols;

        	//this.p_week 	= this.nfn_nvl(this.parent.arg_week, "");	//의뢰일자

        	this.nfn_formInit(obj);

        	this.fn_initCombo();

        	this.fn_defaultTerm();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_weekList.clearData(); 		//Target Dataset clear

        	this.ds_search.clearData(); 		//Search Condition Dataset clear
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "FROM_DATE"				, this.searchDiv.cal_periodFr.value);
        	this.ds_search.setColumn(0, "TO_DATE"				, this.searchDiv.cal_periodTo.value);
        	this.ds_search.setColumn(0, "TXT_WEEK"	    		, this.searchDiv.edt_week.value);
        	this.ds_search.setColumn(0, "SQL_ID" 				, "selectSalespoforcastWeekoftheyearList");

        	var sSvcID 			= "selectSalespoforcastWeekoftheyearList";
        	var sController 	= "/tomCommon/selectSalespoforcastWeekoftheyearList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_weekList=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_defaultTerm = function (obj, e)
        {
        	this.ds_term.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "SQL_ID" 				, "selectWeekDefaultTerm");

        	var sSvcID 			= "selectWeekDefaultTerm";
        	var sController 	= "/tomCommon/selectWeekDefaultTerm.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_term=output";
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
        		case "selectSalespoforcastWeekoftheyearList":
        			break;
        		case "selectWeekDefaultTerm":
        			this.searchDiv.cal_periodFr.set_value(this.ds_term.getColumn(this.ds_term.rowposition, "START_DATE"));
        			this.searchDiv.cal_periodTo.set_value(this.ds_term.getColumn(this.ds_term.rowposition, "END_DATE"));
        			//this.searchDiv.edt_week.set_value(this.p_week);
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
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        }

        /*
         * 선택된 값 담기
         */
        this.fn_selectData = function()
        {
        	var rtnArray = new Array();
        	rtnArray[0] = this.ds_weekList.getColumn(this.ds_weekList.rowposition, "YEARWEEK");
        	rtnArray[1] = this.ds_weekList.getColumn(this.ds_weekList.rowposition, "WEEK");
        	rtnArray[2] = this.ds_weekList.getColumn(this.ds_weekList.rowposition, "YEAR");
        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 주차 입력 후 엔터 시 조회
         */
        this.divSearch_edt_week_onkeydown = function(obj,e)
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
         * 이벤트 : 그리드 선택값 리턴 처리
         */
        this.btn_apply_onclick = function(obj,e)
        {
        	this.fn_selectData();
        };

        this.grd_weekLList_oncelldblclick = function(obj,e)
        {
        	this.fn_selectData();
        };

        this.fn_changeCustom = function(obj,e)
        {
        	this.fn_search();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.divSearch.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.divSearch.form.edt_week.addEventHandler("onkeydown",this.divSearch_edt_week_onkeydown,this);
            this.divSearch.form.cal_periodFr.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.divSearch.form.cal_periodTo.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_apply.addEventHandler("onclick",this.btn_apply_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_weekLList.addEventHandler("oncelldblclick",this.grd_weekLList_oncelldblclick,this);
        };
        this.loadIncludeScript("MFM00100P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
