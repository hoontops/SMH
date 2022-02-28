(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM07902P");
            this.set_titletext("포장라벨_최종검사x_out조회팝업");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_inpXoutSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"P_INSPECT_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_xoutPackInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","20","20",null,"42","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_lotNo","7","10","122","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("LOT NO");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("FA86A9C9F16342AAA010D3B8F2CE9944");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_lotNo","sta_lotNo:5","10","240","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_text("210125S-BI-31");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,null,"47","24","10","8",null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("조회");
            obj.set_tooltiptext("SEARCHAPPROVALUSER");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","395","64","50","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","66","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"42","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"-2","25","25","14",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","62","150","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("INSPECTIONNUMLIST");
            obj.set_text("검사번호 리스트");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_xoutPackInfo","sta_title:0","62","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_main","20","98",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_xoutPackInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"120\"/><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사번호\" tooltiptext=\"INSPECTIONNUM\"/><Cell col=\"2\" text=\"LOT NO\" tooltiptext=\"LOTNO\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INSP_NO\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:LOTID\" displaytype=\"normal\" edittype=\"none\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","115","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_apply",null,null,"70","28","95","20",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("적용");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptext("APPLY");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            obj.set_tooltiptext("CANCEL");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"50","10","18","48",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
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
        this.addIncludeScript("PCM07902P.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM07902P.xfdl","lib::lib_mtm.xjs");
        this.registerScript("PCM07902P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 포장 인수된 Lot중 최종검사x-out 정보 있는 검사번호,lot만 조회
         * 파일명 		: PCM07902P.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.06.30
         *
         * 설  명		: 포장라벨 - 인수된 lot에 해당하는 검사번호 조회 팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.06.30	김진현   	최초작성
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
        this.searchDiv = this.div_search.form;

        var lv_rtnCols;

        this.parentDc;			// 화면에서 넘어온 주차정보

        this.v_popType;			// 화면에서 호출시 type (R/S) -> 등록 조회 구분


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// 공통 기능 호출
        	this.nfn_formInit(obj);

        	// 넘겨받은 필수값
        	//trace(" ### [arg_Ent] : "+this.parent.arg_Ent);
        	//trace(" ### [arg_Plant] : "+this.parent.arg_Plant);
        	//trace(" ### [arg_CustId] : "+this.parent.arg_CustId);
        	//trace(" ### [arg_ProdId] : "+this.parent.arg_ProdId);
        	//trace(" ### [arg_Rev] : "+this.parent.arg_Rev);
        	// 그리드 리턴 받을 값
        	//lv_rtnCols = this.parent.arg_rtnCols;

        	//this.div_search.form.edt_itemCode.set_value(this.parent.arg_ProdId);
        	this.fn_search();



        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_inpXoutSearch.clearData(); 		//Target Dataset clear
        	this.ds_xoutPackInfo.clearData(); 		//Target Dataset clear

        	var nAdd = this.ds_inpXoutSearch.addRow();

        	//this.ds_inpXoutSearch.setColumn(nAdd, "P_PRODUCTDEFID"		, this.parent.arg_ProdId);
        	//this.ds_inpXoutSearch.setColumn(nAdd, "P_PRODUCTDEFVERSION"	, this.parent.arg_Rev);
        	this.ds_inpXoutSearch.setColumn(nAdd, "ENTERPRISEID"		, this.parent.arg_Ent);
        	this.ds_inpXoutSearch.setColumn(nAdd, "PLANTID"				, this.parent.arg_Plant);
        	this.ds_inpXoutSearch.setColumn(nAdd, "CUSTOMERID"			, this.parent.arg_CustId);

        	this.ds_inpXoutSearch.setColumn(nAdd, "LOTID"				, this.gfn_trim(this.searchDiv.edt_lotNo.value)); 		// LOT NO

        	// 조회 (고객정보 MST 조회)실행
        	var sSvcID 			= "selectXoutPackInspInfoPopList";
        	var sController 	= "/pcm07900/selectXoutPackInspInfoPopList.do";
        	var sInDatasets 	= "INPUT=ds_inpXoutSearch";
        	var sOutDatasets 	= "ds_xoutPackInfo=output";
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
        		return;
        	}

        	switch(trId) {

        		case "selectXoutPackInspInfoPopList":	// 고객모델명 List 조회 후
        				// 테스트 데이터
        				/*
        				trace(" ====> : "+this.ds_xoutPackInfo.saveXML());
        				var nAdd = this.ds_xoutPackInfo.addRow();
        				this.ds_xoutPackInfo.setColumn(nAdd,"LOTID","20210622001");
        				this.ds_xoutPackInfo.setColumn(nAdd,"PRODUCTDEFID","");
        				this.ds_xoutPackInfo.setColumn(nAdd,"PRODUCTDEFVERSION","");
        				this.ds_xoutPackInfo.setColumn(nAdd,"INSP_NO","TEST_LOT_001");
        				*/
        				var nCnt = this.ds_xoutPackInfo.rowcount;
        				if(nCnt == 0)
        				{
        					// 조회 조건 없는 경우 msg 출력
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
         * 취소 버튼 클릭시
         */
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.opener.fv_rtnValue = "";
        	this.close();
        };

        /*
         * 적용 버튼 클릭시 해당 값 담는 함수
         */
        this.fn_selectData = function()
        {

        	var rtnArray = new Array();
        	for (var i = 1; i <= this.grd_main.getCellCount("Body"); i++)
        	{
        		var temp = this.grd_main.getCellProperty("Body", i, "text");
        		if(!this.gfn_isNull(temp)){
        			var colId = temp.replace("bind:", "");
        			rtnArray[i - 1] = this.ds_xoutPackInfo.getColumn(this.ds_xoutPackInfo.rowposition, colId);
        		}
        	}

        	this.opener.fv_rtnValue = rtnArray;
        	this.close();


        	/*
        	var rtnArray = new Array();
        	var index = 0;

        	var colArray = new Array();

        	var colIdList = lv_rtnCols.split("|");			// 리턴 값

        	for (var i = 0; i < colIdList.length; i++)
        	{
        		colArray[i] = this.ds_xoutPackInfo.getColumn(this.ds_xoutPackInfo.rowposition, colIdList[i]);
        	}
        	rtnArray[index] = colArray;



        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        	*/


        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * X 버튼 클릭시
         */
        this.btn_close_onclick = function(obj,e)
        {
        	this.opener.fv_rtnValue = "";
        	this.close();
        };

        /*
         * 그리드 더블 클릭 적용
         */
        this.grd_main_oncelldblclick = function(obj,e)
        {
        	if(e.row < 0 || e.col < 1) return;
        	this.fn_selectData(e.row);
        };

        /*
         * 이벤트 : 그리드 선택값 리턴 처리(2차원 배열)
         */
        this.btn_apply_onclick = function(obj,e)
        {

        	if (this.ds_xoutPackInfo.getRowCount() == 0)
            {
            	this.gfn_Message("NoSelections", "", "warning", "ok");
            	return;
            }
        	// 선택된 값을 담는다.
        	this.fn_selectData(this.ds_xoutPackInfo.rowposition);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_main.addEventHandler("oncelldblclick",this.grd_main_oncelldblclick,this);
            this.btn_apply.addEventHandler("onclick",this.btn_apply_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
        };
        this.loadIncludeScript("PCM07902P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
