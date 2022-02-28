(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM00800P");
            this.set_titletext("공정 선택");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
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
            obj._setContents("<ColumnInfo><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_List", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME_MIDDLE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME_TOP\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Result", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME_MIDDLE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME_TOP\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","20","51",null,"42","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("StaticProductCode","0","10","75","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("중공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MIDDLEPROCESSSEGMENT");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("StaticProductDefVersion","45%","10","75","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("OPERATION");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("guidetipT","66","0","50","10",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("guidetipB","70",null,"48","10",null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"47","24","39","8",null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnReset",null,null,"24","24","10","8",null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_reset2");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("guidetip",null,"0","18",null,"86","0",null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("w\r\n18");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_ProcessSegment","StaticProductDefVersion:10","10",null,"20","guidetip:0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_MIDPROCESS","StaticProductCode:0","10",null,"20","StaticProductDefVersion:0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_cmb");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("제품");
            obj.set_value("");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","20","118",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("공정 목록  <fc v=\"#f31d24\">0</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Grid("grdResult","20","152",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_binddataset("ds_List");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"대공정\"/><Cell col=\"3\" text=\"중공정\"/><Cell col=\"4\" text=\"공정ID\"/><Cell col=\"5\" text=\"공정명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTCLASSNAME_TOP\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTCLASSNAME_MIDDLE\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"5\" text=\"bind:PROCESSSEGMENTNAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"70","28","95","20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Static("guidetip","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,null,"50","20","117","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("guidetipM","236","118","50","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("guidetipL","0","103","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("guidetipR",null,"92","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("guidetip01",null,null,"50","10","20","48",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","20",null,"31","34.50%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("공정선택");
            obj.set_cssclass("sta_WF_subTitle3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"16","25","25","20",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.edt_ProcessSegment","value","ds_search","PROCESSSEGMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cbo_MIDPROCESS","value","ds_search","PROCESSSEGMENTCLASSID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM00800P.xfdl","lib::lib_bas.xjs");
        this.registerScript("PCM00800P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 공정 선택
         * 파일명 		: PCM00800P.xfdl
         * 작성자 		: 김애리
         * 작성일 		: 2021.3.10
         *
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.3.10	김애리   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
         var plantID;
         var process;

         //응답결과
        this.resultInfo = {
        		resultCd :	"FAIL"	//결과코드
        };

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	plantID = this.parent.plantID;
        	process = this.parent.process; //멀티라 일단 안 가져옴.
        	this.ds_Result = this.parent.ds_result;

        	this.ds_search.setColumn(0, "PROCESSSEGMENT", process);

        	//중공정 조회
        	this.basfn_setCustomQueryCmb(this.div_search.form.cbo_MIDPROCESS // Object
        								, "selectProcessAList,ALL,Y,A" // OPTION
        								, this.gfn_setParam("PROCESSSEGMENTCLASSTYPE", "MiddleProcessSegmentClass")
        								 +this.gfn_setParam("PARENTPROCESSSEGMENTCLASSID", "")
        								 +this.gfn_setParam("PROCESSSEGMENTCLASSID", process)
        								,false);	  // bAsync

        	if(process != "" ) {
        		this.div_search.form.edt_ProcessSegment.set_value(process);
        		this.getSegment();
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
        	this.getSegment();
        };

        this.getSegment = function() {
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID", plantID);
        	this.ds_search.setColumn(0, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));
        	this.ds_search.setColumn(0, "PARENTPROCESSSEGMENTCLASSID", "");
        	this.ds_search.setColumn(0, "SQL_ID", "selectProcessMenuList");

        	if(this.ds_search.getColumn(0,"PROCESSSEGMENT") != this.div_search.form.edt_ProcessSegment.value)
        	this.ds_search.setColumn(0,"PROCESSSEGMENT",this.div_search.form.edt_ProcessSegment.value) ;

        trace(this.ds_search.saveXML());
        	this.ds_List.clearData();
        	this.ds_Result.clearData();

        	var sSvcID 			= "selectCategoryList";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_List=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

         /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        trace('fn_callBack trId ?' + trId);
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		switch(trId) {
        		case "selectCategoryList":
        		{
        trace(this.ds_List.saveXML());
        			break;
        		}
        		}

        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/



        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/



        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btnCancel_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btnConfirm_onclick = function(obj,e)
        {
        	if(this.ds_List.getCaseCount("CHK == 1") <=0)
        	{
        		this.gfn_Message("NoSelections", null, "info", "ok");
        		return;
        	}

        	this.resultInfo.resultCd = "OK";
        	var retData = JSON.stringify(this.resultInfo);
        	this.ds_List.filter("CHK == 1");
        	this.ds_Result.copyData(this.ds_List, true);
        //trace(this.ds_result.saveXML());
        	this.opener.fv_rtnValue = retData;
        	this.close();
        };


        this.Edit_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) this.fn_search();
        };

        this.grdResult_oncelldblclick = function(obj,e)
        {
        	if(e.row >= 0) this.ds_List.setColumn(e.row, "CHK", "1");
        	this.resultInfo.resultCd = "OK";
        	var retData = JSON.stringify(this.resultInfo);
        	this.ds_List.filter("CHK == 1");
        	this.ds_Result.copyData(this.ds_List, true);
        //trace(this.ds_result.saveXML());
        	this.opener.fv_rtnValue = retData;
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.div_search.form.btnSearch.addEventHandler("onclick",this.fn_search,this);
            this.div_search.form.edt_ProcessSegment.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.grdResult.addEventHandler("oncelldblclick",this.grdResult_oncelldblclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.ds_temp.addEventHandler("onrowposchanged",this.ds_tree_onrowposchanged,this);
        };
        this.loadIncludeScript("PCM00800P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
