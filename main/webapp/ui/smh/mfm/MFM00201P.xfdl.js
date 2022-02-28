(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MFM00201P");
            this.set_titletext("공정 부하 기준 정보_표준공정팝업");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_standardList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME_MIDDLE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME_TOP\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID_MIDDLE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_midProc", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchInit", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","20","20",null,"42","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_midProcess","0","10","80","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("중공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("OPERATIONSUBCLASS");
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

            obj = new Combo("cbo_midProcess","88","10","200","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_innerdataset("ds_midProc");
            obj.set_codecolumn("PROCESSSEGMENTCLASSID");
            obj.set_datacolumn("PROCESSSEGMENTCLASSNAME");
            obj.set_displayrowcount("15");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn_reset_ds_standardList",null,"8","24","24","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_reset2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_proc","301","10","99","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSCHANGETYPE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_proc","403","10","200","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
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

            obj = new Static("sta_title","20","62","120","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("표준공정 선택");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("SELECTSTANDARDPROCESSID");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_standardList","sta_title:0","62","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_itemList","20","96",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_standardList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"200\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"공정 ID\" tooltiptext=\"PROCID\"/><Cell col=\"3\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"left\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
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
        this.addIncludeScript("MFM00201P.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("MFM00201P.xfdl","lib::lib_mtm.xjs");
        this.registerScript("MFM00201P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 공정 부하 기준 정보 (표준공정 팝업)
         * 파일명 		: MFM00201P.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.04.19
         *
         * 설  명		: 공정부하기준정보 표준공정 팝업
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


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// 그리드 리턴 받을 값
        	lv_rtnCols = this.parent.arg_rtnCols;

        	this.nfn_formInit(obj);

        	// 중공정 콤보 조회
        	this.fn_initCombo();

        	// 검색조건의 자재명값 입력된 내용 설정
        	this.searchDiv.edt_proc.set_value(this.parent.arg_standardId);

        	// 값 존재 할 경우 바로 조회

        	this.fn_search();


        	// 값없는 경우 전체 조회
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_standardList.clearData(); 		//Target Dataset clear
        	this.ds_search.clearData(); 		//Search Condition Dataset clear

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PROCESSSEGMENTCLASSTYPE"		, "MiddleProcessSegmentClass");
        	this.ds_search.setColumn(0, "PROCESSSEGMENTCLASSID_MIDDLE"	, this.searchDiv.cbo_midProcess.value);
        	this.ds_search.setColumn(0, "PROCESSSEGMENT"				, this.searchDiv.edt_proc.value);



        	var sSvcID 			= "selectProcessSegmentList";
        	var sController 	= "/mfm00200/selectProcessSegmentList.do";		// 다른쪽에서 생성 한것 가져다 활용(x) chk 박스 필요
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_standardList=output";
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
        		case "selectProcessSegmentClassByTypeList":				//[조회조건] 중공정 Callback
        			this.ds_midProc.insertRow(0);
        			this.ds_midProc.setColumn(0,"PROCESSSEGMENTCLASSID","");
        			this.ds_midProc.setColumn(0,"PROCESSSEGMENTCLASSNAME" ,this.nfn_getDictionaryname("ALLVIEWS",true));
        			this.searchDiv.cbo_midProcess.set_value("");
        			break;
        		case "selectProcessSegmentList":	//[메인조회] 표준공정 list

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
        	this.ds_searchInit.setColumn(0, "PROCESSSEGMENTCLASSTYPE", "MiddleProcessSegmentClass"); 	//

        	// 제품구분 콤보 정보 조회
        	var sSvcID 			= "selectProcessSegmentClassByTypeList";
        	var sController 	= "/mfm00200/selectProcessSegmentClassByTypeList.do";
        	var sInDatasets 	= "INPUT=ds_searchInit";
        	var sOutDatasets 	= "ds_midProc=output";
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
        			rtnArray[i - 1] = this.ds_standardList.getColumn(this.ds_standardList.rowposition, colId);
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
        	if (this.ds_standardList.getCaseCount("CHK=='1'")==0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}

        	for(var j=0; j<this.ds_standardList.rowcount; j++){
        		if(this.ds_standardList.getColumn(j,"CHK")!="1") continue;
        		var colArray = new Array();

        		var colIdList = lv_rtnCols.split("|");			// 리턴 값

        		for (var i = 0; i < colIdList.length; i++)
        		{
        			colArray[i] = this.ds_standardList.getColumn(j, colIdList[i]);
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
        	this.ds_standardList.setColumn(e.row,"CHK","1");
        	this.fn_selectData();
        	return;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.divSearch.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.divSearch.form.edt_proc.addEventHandler("onkeydown",this.divSearch01_edt_lotNo_onkeydown,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_apply.addEventHandler("onclick",this.btn_apply_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_itemList.addEventHandler("oncelldblclick",this.grd_itemList_oncelldblclick,this);
        };
        this.loadIncludeScript("MFM00201P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
