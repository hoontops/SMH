(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM04501P");
            this.set_titletext("재작업 라우팅");
            this.set_tooltiptext("REWORKROUTING");
            if (Form == this.constructor)
            {
                this._setFormPosition(770,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ProcessDef", this);
            obj._setContents("<ColumnInfo><Column id=\"REWORKNUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOPPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ProcessPath", this);
            obj._setContents("<ColumnInfo><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKNUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILTERPLANT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20","6",null,"31","68.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("재작업 라우팅");
            obj.set_cssclass("sta_WF_subTitle3");
            obj.set_tooltiptext("SELECTREWORKROUTING");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"0","25","25","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","20","58",null,"42","20",null,null,null,null,null,this);
            obj.set_taborder("2");
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

            obj = new Static("StaticDurableName","36.13%","10","75","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("재작업명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("REWORKNAME");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_REWORKNUMBER",null,"10","132","20","498",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_REWORKNAME",null,"10","286","20","95",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("StaticDurableID00","0","9","75","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("재작업번호");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("REWORKNUMBER");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"47","24","16","7",null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,null,"70","28","18","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","38","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","115","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","476","100","50","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","110","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"99","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"50","10","18","48",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_sel",null,null,"70","28","95","20",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ProcessDef","21","134",null,null,"20","310",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("ds_ProcessDef");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"71\"/><Column size=\"105\"/><Column size=\"161\"/><Column size=\"171\"/><Column size=\"74\"/><Column size=\"70\"/><Column size=\"74\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공정순서\"/><Cell col=\"1\" text=\"재작업번호\"/><Cell col=\"2\" text=\"재작업버전\"/><Cell col=\"3\" text=\"재작업명\"/><Cell col=\"4\" text=\"설명\"/><Cell col=\"5\" text=\"적용구분\"/><Cell col=\"6\" text=\"재작업구분\"/><Cell col=\"7\" text=\"대공정\"/></Band><Band id=\"body\"><Cell text=\"bind:PATHSEQUENCE\"/><Cell col=\"1\" text=\"bind:REWORKNUMBER\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:REWORKVERSION\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:REWORKNAME\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:DESCRIPTION\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:APPLICATIONTYPE\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:REWORKTYPE\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:TOPPROCESSSEGMENTNAME\" edittype=\"none\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00","26","102",null,"31","67.40%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("라우팅 목록");
            obj.set_cssclass("sta_WF_subTitle3");
            obj.set_tooltiptext("ROUTINGLIST");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ProcessPath","21","434",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("ds_ProcessPath");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"87\"/><Column size=\"164\"/><Column size=\"179\"/><Column size=\"285\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공정순서\"/><Cell col=\"1\" text=\"공정수순\"/><Cell col=\"2\" text=\"공정ID\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"특기사항\"/></Band><Band id=\"body\"><Cell text=\"bind:PATHSEQUENCE\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" textAlign=\"left\"/><Cell col=\"2\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:COMMENT\" edittype=\"normal\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00","26","402",null,"31","66.62%",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_subTitle3");
            obj.set_tooltiptext("PROCESSCHANGETYPE");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",770,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PCM04502P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 재작업 라우팅 선택
         * 파일명 		: PCM04501.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.01.11
         *
         * 설  명		: 재작업 라우팅 선택 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.01.11	진성하   	최초작성
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
        	this.fn_search();
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
        	this.ds_ProcessDef.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "LOTID", this.parent.LotId);
        	this.ds_search.setColumn(0, "REWORKNUMBER", this.div_search.form.edt_REWORKNUMBER.value);
        	this.ds_search.setColumn(0, "REWORKNAME", this.div_search.form.edt_REWORKNAME.value);
        	this.ds_search.setColumn(0, "FILTERPLANT", "Y");

        	var sSvcID = "SelectReworkRouting";
        	var sController = "/pcm04500/SelectReworkRouting.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_ProcessDef=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.tab_search_Tabpage1_cbo_period_onitemchanged();
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
        		this.gfn_Message(errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "saveReleaseLotHold")
        		{
        			this.gfn_Message("ProcessingSuccess", null, "info", "ok");
        			this.fn_search();
        		}
        		else if (trId == "selectLotInfoBylotID")
        		{
        			if(this.ds_pcmLot.rowcount==0){
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}
        			if(this.ds_pcmLot.getColumn(0,"ISLOCKING")=="Y"){
        				this.gfn_Message("LotIsLocking", null, "info", "ok");
        			}
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

        this.grd_ProcessDef_onselectchanged = function(obj,e)
        {
        	this.ds_ProcessPath.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "LOTID", this.parent.LotId);
        	this.ds_search.setColumn(0, "PROCESSDEFID", this.ds_ProcessDef.getColumn(e.row,"REWORKNUMBER"));
        	this.ds_search.setColumn(0, "PROCESSDEFVERSION", this.ds_ProcessDef.getColumn(e.row,"REWORKVERSION"));

        	var sSvcID = "GetProcessPathList10005";
        	var sController = "/pcm04500/GetProcessPathList10005.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_ProcessPath=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.btn_sel_onclick = function(obj,e)
        {
        	this.opener.fv_rtnValue = null;
        	var rtnArray = new Array();
        	rtnArray[0] = this.ds_ProcessDef.getColumn(this.ds_ProcessDef.rowposition,"REWORKNUMBER");
        	rtnArray[1] = this.ds_ProcessDef.getColumn(this.ds_ProcessDef.rowposition,"REWORKVERSION");
        	rtnArray[2] = this.ds_ProcessDef.getColumn(this.ds_ProcessDef.rowposition,"REWORKNAME");
        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.div_search.form.btnSearch.addEventHandler("onclick",this.fn_search,this);
            this.btnCancel.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_sel.addEventHandler("onclick",this.btn_sel_onclick,this);
            this.grd_ProcessDef.addEventHandler("onselectchanged",this.grd_ProcessDef_onselectchanged,this);
            this.grd_ProcessPath.addEventHandler("onselectchanged",this.div_work_grd_basApproval_onselectchanged,this);
        };
        this.loadIncludeScript("PCM04502P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
