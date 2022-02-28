(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OSM00301P");
            this.set_titletext("CLAIM 마감기간");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(680,490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSEYM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basPeriod", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PERIODID\" type=\"STRING\" size=\"256\"/><Column id=\"FACTORYID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDATE\" type=\"DATE\" size=\"256\"/><Column id=\"ENDDATE\" type=\"DATE\" size=\"256\"/><Column id=\"STARTTIME\" type=\"DATE\" size=\"256\"/><Column id=\"ENDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"MAJORSTARTDATE\" type=\"DATE\" size=\"256\"/><Column id=\"MAJORENDDATE\" type=\"DATE\" size=\"256\"/><Column id=\"MAJORSTARTTIME\" type=\"DATE\" size=\"256\"/><Column id=\"MAJORENDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","118",null,"34","700",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("공정별 Claim기준금액");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","20","61",null,"42","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
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

            obj = new Button("btnSearch",null,null,"47","24","39","8",null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"0","18",null,"86","0",null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("w\r\n18");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("StaticDurableName","30.88%","10","75","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("마감년도");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CLOSEYM");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_PLANTID",null,"10","92","20","468",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("StaticDurableID00","10","9","75","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DURABLEDEFID");
            this.div_search.addChild(obj.name, obj);

            obj = new Spin("spn_CLOSEYM","289","10","90","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","117","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","236","103","50","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","103","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"92","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"50","10","20","49",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","20",null,"31","78.68%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("CLAIM 마감기간");
            obj.set_cssclass("sta_WF_subTitle3");
            obj.set_tooltiptext("CLAIMCLOSEPERIODPOPUP");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"6","25","25","4",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_basPeriod","19","137",null,null,"20","62",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_basPeriod");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"50\"/><Column size=\"124\"/><Column size=\"142\"/><Column size=\"248\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공정순서\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"기간명\"/><Cell col=\"3\" text=\"마감상태\"/><Cell col=\"4\" text=\"설명\"/></Band><Band id=\"body\"><Cell text=\"bind:PATHSEQUENCE\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"expr:comp.parent.gfn_isNull(dataset.getColumn(currow,&quot;PERIODID&quot;))?&quot;checkbox&quot;:&quot;none&quot;\"/><Cell col=\"2\" text=\"bind:PERIODNAME\" expandshow=\"expr:comp.parent.gfn_isNull(dataset.getColumn(currow,&quot;PERIODID&quot;))?&quot;show&quot;:&quot;hide&quot;\" expandimage=\"url(&apos;theme://images/btn_WF_Calendar.png&apos;)\" displaytype=\"mask\" edittype=\"expr:comp.parent.gfn_isNull(dataset.getColumn(currow,&quot;PERIODID&quot;))?&quot;mask&quot;:&quot;none&quot;\" textAlign=\"left\" maskeditformat=\"####-##\" editautoselect=\"false\" maskeditautoselect=\"true\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:PERIODSTATE\" textAlign=\"center\" displaytype=\"combotext\" combocodecol=\"C,PeriodState,,Y,N\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:DESCRIPTION\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_basPeriod","sta_title:15","23",null,"24","390",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basPeriod",null,"109","29","24","25",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","512",null,"70","28",null,"20",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("저장");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptext("SAVE");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRow_ds_basPeriod",null,"109","26","24","80",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_basPeriod",null,"109","26","24","54",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",680,490,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OSM00301P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: CLAIM 마감기간
         * 파일명 		: OSM00301P.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.04.11
         *
         * 설  명		: CLAIM 마감기간
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.11	진성하   	최초작성
         * 2021.06.24   김진현     그리드 마감상태 수정 불가
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	//this.div_page.set_visible(true);

        	// paging
        	//this.fn_paging_onload(obj);
        	// paging end
        	this.fv_currDate = this.nfn_getCurrentSystemTime();
        	this.div_search.form.spn_CLOSEYM.set_value(this.fv_currDate.substring(0,4));
        	this.div_search.form.edt_PLANTID.set_value(this.parent.arg_palntid);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	var component = this.div_search;
        	var strColIdList = "edt_PLANTID,cbo_CLOSEYM";
        	var strColNmList = "PLANTID,CLOSEYM";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	this.ds_basPeriod.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PERIODTYPE", "Claim");
        	this.ds_search.setColumn(0, "PLANTID", this.div_search.form.edt_PLANTID.value);
        	this.ds_search.setColumn(0, "CLOSEYM", this.div_search.form.spn_CLOSEYM.value);

        	var sSvcID = "selectBasPeriodList";
        	var sController = "/osm00300/selectBasPeriodList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_basPeriod=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
         * 기능 : 저장(승인)
         */
        this.fn_save = function (obj, e)
        {

        	if (!this.gfn_dsIsUpdated(this.ds_basPeriod) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	if (!this.gfn_GridKeyCheck(this.grd_basPeriod, ["PERIODNAME"])) return;

        	for(var i=0; i<this.ds_basPeriod.rowcount; i++){
        		if(this.ds_basPeriod.findRow("PERIODNAME",this.ds_basPeriod.getColumn(i,"PERIODNAME"),i+1)>0){
        			this.gfn_Message("InValidOspData007", this.ds_basPeriod.getColumn(i,"PERIODNAME"), "warning", "ok");//중복된 ({0})가 존재합니다.
        			return;
        		}
        	}



        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveBasPeriod";
        	var sController = "/osm00300/saveBasPeriod.do";
        	var sInDatasets = "INPUT=ds_basPeriod:U";
        	var sOutDatasets = "";

        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 기능 : 삭제
         */
        this.fn_delelete = function(obj,e)
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

        /*
         * 기능 : work영역 초기화  => 공통처리
         */
        this.fn_reset = function(obj,e)
        {
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		// (21.06.24) - 추가
        		if (trId == "saveBasPeriod")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        				return;
        			} else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        				return;
        			}
        		} else {
        			this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        			return;
        		}
        		return;



        	}
        	else
        	{
        		if (trId == "saveBasPeriod")
        		{
        			this.gfn_Message("ProcessingSuccess", null, "info", "ok");
        			this.fn_search();
        		}
        		else if (trId == "selectBasPeriodList")
        		{

        		}
        	}

        }


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        }

        /* 월력 값 변경시 호출되는 callBack 함수 */
        this.fn_monthCallback = function (svcId, retVal)
        {
        	trace("from object id : " + svcId + ", return value : " + retVal);
        	if (svcId.substring(0, 15) == "pdivComCalMonth")
        	{
        		if (!this.gfn_isNull(retVal))
        		{
        			var arr = svcId.split(".");
        			trace(retVal);
        			// 리턴값
        			// [0] : 선택한 년월
        			// [1] : 월 시작일
        			// [2] : 월 종료일
        			// [3] : 변경전 년월 값
        			this.ds_basPeriod.setColumn(this.ds_basPeriod.rowposition, arr[1], retVal[0]);
        		}
        	}
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        /* Grid의 expand 영역에서 마우스 왼쪽 버튼이 UP 될때 발생 */
        this.grd_basPeriod_onexpandup = function(obj,e)
        {
        	// 기준 위치

        	/* Form 에서 Grid Cell 기준으로 위치얻기 */
        	var objRect = obj.getCellRect(e.row, e.cell);

        	/* cell 기준 position으로 클라이언트 기준 X, Y 좌표를 스크린 기준 기준으로 바꾸어 위치얻기 */
        	var nLeft = system.clientToScreenX(obj, objRect.left);
        	var nTop = system.clientToScreenY(obj, objRect.bottom);

        	/* 스크린 기준 X, Y 좌표를 클라이언트 기준으로 바꾸어 위치얻기 */
        	nLeft = system.screenToClientX(nexacro.getApplication().mainframe, nLeft);
        	nTop = system.screenToClientY(nexacro.getApplication().mainframe, nTop);

        	// 전달 값
        	var sYearMonth = this.ds_basPeriod.getColumn(e.row, e.cell);
        	var colId = obj.getCellProperty("Body", e.cell, "text");
        	colId = colId.replace("bind:", "");
        	// 일자 선택 팝업창
        	this.gfn_popupCalMonth(colId, nLeft, nTop, sYearMonth);
        };

        this.btn_addRow_ds_basPeriod_onclick = function(obj,e)
        {
        	var nRow = this.ds_basPeriod.rowposition;
        	this.ds_basPeriod.setColumn(nRow,"PLANTID",this.div_search.form.edt_PLANTID.value);
        	this.ds_basPeriod.setColumn(nRow,"PERIODSTATE","Open");
        	this.ds_basPeriod.setColumn(nRow,"PERIODTYPE","Claim");
        	this.ds_basPeriod.setColumn(nRow,"VALIDSTATE","Valid");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.btnSearch.addEventHandler("onclick",this.fn_search,this);
            this.btnCancel.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_basPeriod.addEventHandler("onexpandup",this.grd_basPeriod_onexpandup,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.btn_addRow_ds_basPeriod.addEventHandler("onclick",this.btn_addRow_ds_basPeriod_onclick,this);
            this.btn_delRow_ds_basPeriod.addEventHandler("onclick",this.div_work_btn_delRow_onclick,this);
        };
        this.loadIncludeScript("OSM00301P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
