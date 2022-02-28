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
            this.set_titletext("재작업 라우팅 선택");
            this.set_tooltiptext("SELECTREWORKROUTING");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ReworkRouting", this);
            obj._setContents("<ColumnInfo><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CurrentRouting", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVELOTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"STARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENDLOTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SENDLOTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Resource", this);
            obj._setContents("<ColumnInfo><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ResourceReturn", this);
            obj._setContents("<ColumnInfo><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20","6",null,"31","68.00%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("재작업 라우팅 선택");
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

            obj = new Static("StaticDurableName","38.19%","10","75","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DURABLEDEFNAME");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID",null,"10","192","20","678",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME",null,"10","406","20","105",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("StaticDurableID00","0","9","75","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DURABLEDEFID");
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

            obj = new Div("div_1","20","110","486",null,null,"57",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("div_00");
            obj.set_cssclass("div_WF_detail");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ReworkRouting","6","105",null,null,"7","1",null,null,null,null,this.div_1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_ReworkRouting");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"71\"/><Column size=\"170\"/><Column size=\"214\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공정순서\"/><Cell col=\"1\" text=\"공정수순\"/><Cell col=\"2\" text=\"공정명\"/><Cell col=\"3\" text=\"자원명\"/></Band><Band id=\"body\"><Cell text=\"bind:PATHSEQUENCE\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:RESOURCENAME\" edittype=\"normal\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_1.addChild(obj.name, obj);

            obj = new Combo("cbo_Resource","88","9","165","20",null,null,null,null,null,null,this.div_1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("RESOURCEID");
            obj.set_innerdataset("ds_Resource");
            obj.set_datacolumn("RESOURCENAME");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.div_1.addChild(obj.name, obj);

            obj = new Static("StaticDurableID00","9","8","75","20",null,null,null,null,null,null,this.div_1.form);
            obj.set_taborder("2");
            obj.set_text("대상 자원");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("TARGETRESOURCE");
            this.div_1.addChild(obj.name, obj);

            obj = new Static("StaticDurableID00_00","-1","74","107","20",null,null,null,null,null,null,this.div_1.form);
            obj.set_taborder("3");
            obj.set_text("재작업 라우팅");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("TARGETRESOURCE");
            this.div_1.addChild(obj.name, obj);

            obj = new Static("sta_title","5","36",null,"31","35.95%",null,null,null,null,null,this.div_1.form);
            obj.set_taborder("4");
            obj.set_text("재작업 라우팅");
            obj.set_cssclass("sta_WF_subTitle3");
            obj.set_tooltiptext("SELECTREWORKROUTING");
            this.div_1.addChild(obj.name, obj);

            obj = new Edit("edt_REWORKROUTING","108","74",null,"20","228",null,null,null,null,null,this.div_1.form);
            obj.set_taborder("5");
            this.div_1.addChild(obj.name, obj);

            obj = new Button("btn_REWORKROUTING",null,"74","22","20","206",null,null,null,null,null,this.div_1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.div_1.addChild(obj.name, obj);

            obj = new Edit("edt_RoutingVersion","282","74",null,"20","156",null,null,null,null,null,this.div_1.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.div_1.addChild(obj.name, obj);

            obj = new CheckBox("ckb_PRODUCTROUTING","340","74","120","20",null,null,null,null,null,null,this.div_1.form);
            obj.set_taborder("8");
            obj.set_text("품목 라우팅");
            obj.set_tooltiptext("PRODUCTROUTING");
            this.div_1.addChild(obj.name, obj);

            obj = new Edit("edt_REWORKNUMBER","298","44",null,"20","38",null,null,null,null,null,this.div_1.form);
            obj.set_taborder("9");
            obj.set_visible("false");
            this.div_1.addChild(obj.name, obj);

            obj = new Div("div_2",null,"110","470",null,"20","57",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("div_00");
            obj.set_cssclass("div_WF_detail");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CurrentRouting","6","66",null,null,"7","0",null,null,null,null,this.div_2.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_CurrentRouting");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"38\"/><Column size=\"85\"/><Column size=\"310\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공정순서\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"공정명\"/></Band><Band id=\"body\"><Cell text=\"bind:PATHSEQUENCE\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_2.addChild(obj.name, obj);

            obj = new Combo("cbo_ResourceReturn","88","9","165","20",null,null,null,null,null,null,this.div_2.form);
            obj.set_taborder("1");
            obj.set_codecolumn("RESOURCEID");
            obj.set_innerdataset("ds_ResourceReturn");
            obj.set_datacolumn("RESOURCENAME");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.div_2.addChild(obj.name, obj);

            obj = new Static("StaticDurableID00","9","8","75","20",null,null,null,null,null,null,this.div_2.form);
            obj.set_taborder("2");
            obj.set_text("대상 자원");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("TARGETRESOURCE");
            this.div_2.addChild(obj.name, obj);

            obj = new Static("sta_title","7","33",null,"31","32.26%",null,null,null,null,null,this.div_2.form);
            obj.set_taborder("3");
            obj.set_text("재작업 후 공정");
            obj.set_cssclass("sta_WF_subTitle3");
            obj.set_tooltiptext("SELECTREWORKROUTING");
            this.div_2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PCM04501P.xfdl", function() {
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

        	this.div_search.form.edt_PRODUCTDEFID.set_value(this.parent.ProductDefID);
        	this.div_search.form.edt_PRODUCTDEFNAME.set_value(this.parent.ProductName);
        	this.fn_SearchCurrentRouting();
        	this.fn_RefreshResourceReturn();
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
        	if(this.ds_wip.rowcount==0){
        		this.gfn_Message("NoSaveData", null, "info", "ok");
        		return;
        	}
        	var component = this.div_work.form.div_reason;
        	var strColIdList = "txa_comment";
        	var strColNmList = "UNIQUENESS";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	for(var i=0; i<this.ds_wip.rowcount;i++){
        		this.ds_wip.setColumn(i,"RELEASECOMMENTS",this.div_work.form.div_reason.form.txa_comment.value);
        	}
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveReleaseLotHold";
        	var sController = "/pcm04500/saveReleaseLotHold.do";
        	var sInDatasets = "INPUT=ds_wip:U";
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
        		this.gfn_Message(errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "saveReleaseLotHold")
        		{
        			this.gfn_Message("ProcessingSuccess", null, "info", "ok");
        			this.fn_search();
        		}
        		else if (trId == "GetCurrentRoutingByLot")
        		{
        			this.ds_CurrentRouting.setColumn(0,"CHK","1");
        			this.fn_RefreshResource();
        			this.fn_RefreshResourceReturn();

        		}
        		else if (trId == "SelectReworkRoutingResource")
        		{
        			if(this.ds_Resource.rowcount==2){
        				this.div_1.form.cbo_Resource.set_index(1);
        			}else{
        				var nRow = this.ds_Resource.findRow("ISPRIMARYRESOURCE","Y");
        				this.div_1.form.cbo_Resource.set_index(nRow);
        			}
        		}
        		else if (trId == "GetProcessPathList")
        		{
        			this.fn_RefreshResource();
        		}
        		else if (trId == "SelectReworkRoutingResource10002")
        		{
        			//this.fn_RefreshResourceReturn();
        		}
        		else if (trId == "GetProductRoutingPreviousProcessPaths")
        		{
        			this.div_1.form.ckb_PRODUCTROUTING.set_enable(true);
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
        	if(sPopupId == "REWORKROUTING")
        	{
        		this.div_1.form.edt_REWORKNUMBER.set_value(rtn[0]);
        		this.div_1.form.edt_REWORKROUTING.set_value(rtn[2]);
        		this.div_1.form.edt_RoutingVersion.set_value(rtn[1]);

        		this.div_1.form.cbo_Resource.set_enable(true);
        		this.div_2.form.cbo_ResourceReturn.set_enable(true);

        		this.fn_RefreshReworkRoutingPath(rtn[0],rtn[1]);
        		//this.fn_RefreshResource();
        		//this.fn_RefreshResourceReturn();
        	}


        }
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_RefreshResource = function()
        {
        	if(this.ds_ReworkRouting.rowcount==0){
        		this.div_1.form.cbo_Resource.set_value("");
        		this.div_1.form.cbo_Resource.set_enable(false);
        		this.div_1.form.ckb_PRODUCTROUTING.set_enable(true);
        	}else{
        		if(this.div_1.form.ckb_PRODUCTROUTING.value=="1"){
        			if(this.ds_ReworkRouting.rowcount==0){
        				this.div_1.form.cbo_Resource.set_value("");
        				this.div_1.form.cbo_Resource.set_enable(false);
        			}else{
        				this.ds_search.clearData();
        				this.ds_search.addRow();
        				this.ds_search.setColumn(0, "PRODUCTDEFID", this.parent.ProductDefID);
        				this.ds_search.setColumn(0, "PRODUCTDEFVERSION", this.parent.ProductDefVersion);
        				this.ds_search.setColumn(0, "PROCESSDEFID", this.ds_ReworkRouting.getColumn(0,"PROCESSDEFID"));
        				this.ds_search.setColumn(0, "PROCESSDEFVERSION", this.ds_ReworkRouting.getColumn(0,"PROCESSDEFVERSION"));
        				this.ds_search.setColumn(0, "PROCESSPATHID", this.ds_ReworkRouting.getColumn(0,"PROCESSPATHID"));
        				this.ds_search.setColumn(0, "PROCESSDEFTYPE", "Main");

        				var sSvcID = "SelectReworkRoutingResource10002";
        				var sController = "/pcm04500/SelectReworkRoutingResource10002.do";
        				var sInDatasets = "INPUT=ds_search";
        				var sOutDatasets = "ds_Resource=output";
        				var sArgs = "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        			}
        		}else{
        				this.ds_search.clearData();
        				this.ds_search.addRow();
        				this.ds_search.setColumn(0, "PRODUCTDEFID", this.parent.ProductDefID);
        				this.ds_search.setColumn(0, "PRODUCTDEFVERSION", this.parent.ProductDefVersion);
        				this.ds_search.setColumn(0, "PROCESSDEFID", this.ds_ReworkRouting.getColumn(0,"PROCESSDEFID"));
        				this.ds_search.setColumn(0, "PROCESSDEFVERSION", this.ds_ReworkRouting.getColumn(0,"PROCESSDEFVERSION"));
        				this.ds_search.setColumn(0, "PROCESSDEFTYPE", "Rework");

        				var sSvcID = "SelectReworkRoutingResource10002";
        				var sController = "/pcm04500/SelectReworkRoutingResource10002.do";
        				var sInDatasets = "INPUT=ds_search";
        				var sOutDatasets = "ds_Resource=output";
        				var sArgs = "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        		}
        	}
        };

        this.fn_RefreshReworkRoutingPath = function(ProcessDefid, ProcessDefVersion)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PROCESSDEFID", ProcessDefid);
        	this.ds_search.setColumn(0, "PROCESSDEFVERSION", ProcessDefVersion);
        	this.ds_search.setColumn(0, "PROCESSDEFTYPE", "Rework");

        	var sSvcID = "GetProcessPathList";
        	var sController = "/pcm04500/GetProcessPathList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_ReworkRouting=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_SearchCurrentRouting = function()
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "LOTID", this.parent.LotId);

        	var sSvcID = "GetCurrentRoutingByLot";
        	var sController = "/pcm04500/GetCurrentRoutingByLot.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_CurrentRouting=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        this.fn_RefreshResourceReturn = function()
        {
        	if(this.ds_CurrentRouting.rowcount==0 || this.div_1.form.ckb_PRODUCTROUTING.value=="1"){
        		this.div_2.form.cbo_ResourceReturn.set_value("");
        		this.div_2.form.cbo_ResourceReturn.set_enable(true);
        	}else{
        		if(this.ds_CurrentRouting.findRow("CHK","1")<0){
        			this.div_2.form.cbo_ResourceReturn.set_value("");
        			this.div_2.form.cbo_ResourceReturn.set_enable(false);

        		}else{

        			this.ds_search.clearData();
        			this.ds_search.addRow();
        			this.ds_search.setColumn(0, "PRODUCTDEFID", this.parent.ProductDefID);
        			this.ds_search.setColumn(0, "PRODUCTDEFVERSION", this.parent.ProductDefVersion);
        			this.ds_search.setColumn(0, "PROCESSDEFID", this.ds_CurrentRouting.lookup("CHK","1","PROCESSDEFID"));
        			this.ds_search.setColumn(0, "PROCESSDEFVERSION", this.ds_CurrentRouting.lookup("CHK","1","PROCESSDEFVERSION"));
        			this.ds_search.setColumn(0, "PROCESSPATHID", this.ds_CurrentRouting.lookup("CHK","1","PROCESSPATHID"));

        			var sSvcID = "SelectReworkRoutingResource";
        			var sController = "/pcm04500/SelectReworkRoutingResource.do";
        			var sInDatasets = "INPUT=ds_search";
        			var sOutDatasets = "ds_ResourceReturn=output";
        			var sArgs = "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        		}
        	}

        };

        this.fn_SearchRoutings = function()
        {
        	this.ds_CurrentRouting.clearData();
        	this.ds_ReworkRouting.clearData();
        	this.div_1.form.edt_REWORKROUTING.set_enable(true);
        	this.div_1.form.btn_REWORKROUTING.set_enable(true);
        	if(this.div_1.form.ckb_PRODUCTROUTING.value=="1"){
        		this.div_1.form.edt_REWORKNUMBER.set_value("");
        		this.div_1.form.edt_REWORKROUTING.set_value("");
        		this.div_1.form.edt_RoutingVersion.set_value("");
        		this.div_1.form.edt_REWORKROUTING.set_enable(false);
        		this.div_1.form.btn_REWORKROUTING.set_enable(false);

        		this.ds_search.clearData();
        		this.ds_search.addRow();
        		this.ds_search.setColumn(0, "LOTID", this.parent.LotId);

        		var sSvcID = "GetProductRoutingPreviousProcessPaths";
        		var sController = "/pcm04500/GetProductRoutingPreviousProcessPaths.do";
        		var sInDatasets = "INPUT=ds_search";
        		var sOutDatasets = "ds_ReworkRouting=output";
        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	}else{
        		//this.div_1.form.ckb_PRODUCTROUTING.set_enable(false);
        		this.fn_SearchCurrentRouting();
        		//this.fn_RefreshResource();
        		//this.fn_RefreshResourceReturn();
        	}

        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.btn_sel_onclick = function(obj,e)
        {

        	if(this.gfn_isNull(this.parent.LotId)){
        		this.gfn_Message("NotExistLot", "", "info", "ok");// 해당 Lot이 존재하지 않습니다. {0}
        		return;
        	}
        	if(this.div_1.form.ckb_PRODUCTROUTING.value!="1"){
        		if(this.gfn_isNull(this.div_1.form.edt_REWORKNUMBER.value)){
        			this.gfn_Message("ReworkRoutingValidation", "", "info", "ok");// 재작업 라우팅을 선택 해주세요.
        			this.div_1.form.edt_REWORKNUMBER.setFocus();
        			return;
        		}
        		if(this.ds_CurrentRouting.findRow("CHK","1")<0){
        			this.gfn_Message("ReturnProcessPathValidation", "", "info", "ok");// 재작업 후 공정을 선택 해주세요.
        			return;
        		}

        		if(this.gfn_isNull(this.div_2.form.cbo_ResourceReturn.value) || !this.div_2.form.cbo_ResourceReturn.enable){
        			this.gfn_Message("NoResourceSelected", "", "info", "ok");// 선택된 자원이 없습니다.
        			this.div_2.form.cbo_ResourceReturn.setFocus();
        			return;
        		}
        	}else{
        		if(this.ds_ReworkRouting.rowcount==0){
        			this.gfn_Message("StartProcessPathValidation", "", "info", "ok");// 시작 공정을 선택 해주세요.
        			return;
        		}
        		if(this.gfn_isNull(this.div_1.form.cbo_Resource.value) || !this.div_1.form.cbo_Resource.enable){
        			this.gfn_Message("NoResourceSelected", "", "info", "ok");// 선택된 자원이 없습니다.
        			this.div_1.form.cbo_Resource.setFocus();
        			return;
        		}
        	}

        	var	ProcessDefId              ;
        	var	ProcessDefVersion         ;
        	var	ProcessSegmentId          ;
        	var	ProcessSegmentName        ;
        	var	ProcessPathId             ;
        	var	UserSequence              ;
        	var	PathSequence              ;
        	var	ResourceId                ;
        	var	ResourceName              ;
        		// Return 공정
        	var	ReturnProcessSegmentId    ;
        	var	ReturnPathSequence        ;
        	var	ReturnPathId              ;
        	var	ReturnResourceId          ;
        	var	ReturnResourceName        ;

        	var	ReworkType                ;

        	// 품목 Routing 인경우
        	if(this.div_1.form.ckb_PRODUCTROUTING.value=="1")
        	{
        		ProcessPathId = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSPATHID");
        		UserSequence = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"USERSEQUENCE");
        		PathSequence = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PATHSEQUENCE");
        		ProcessDefId = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSDEFID");
        		ProcessDefVersion = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSDEFVERSION");
        		ProcessSegmentId = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSSEGMENTID");
        		ProcessSegmentName = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSSEGMENTNAME");
        		ResourceId = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"RESOURCEID");
        		ResourceName = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"RESOURCENAME");
        		ReworkType = "PRODUCT";
        	}
        	else
        	{
        		ProcessDefId = this.div_1.form.edt_REWORKNUMBER.value;
        		ProcessDefVersion = this.div_1.form.edt_RoutingVersion.value;
        		ProcessSegmentId = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSSEGMENTID");
        		ProcessSegmentName = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSSEGMENTNAME");
        		ProcessPathId = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PROCESSPATHID");
        		UserSequence = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"USERSEQUENCE");
        		PathSequence = this.ds_ReworkRouting.getColumn(this.ds_ReworkRouting.rowposition,"PATHSEQUENCE");

        		// Return 공정
        		ReturnProcessSegmentId = this.ds_CurrentRouting.lookup("CHK","1","PROCESSSEGMENTID");
        		ReturnPathSequence = this.ds_CurrentRouting.lookup("CHK","1","PATHSEQUENCE");
        		ReturnPathId = this.ds_CurrentRouting.lookup("CHK","1","PROCESSPATHID");
        		ReturnResourceId = this.div_2.form.cbo_ResourceReturn.value;
        		ReturnResourceName = this.div_2.form.cbo_ResourceReturn.text;

        		ReworkType = "REWORK";
        	}
        	ResourceId = this.div_1.form.cbo_Resource.value;
        	ResourceName = this.div_1.form.cbo_Resource.text;


        	var rtnArray = new Array();
        	rtnArray[0] = ProcessDefId;
        	rtnArray[1] = ProcessDefVersion;
        	rtnArray[2] = ProcessSegmentId;
        	rtnArray[3] = ProcessSegmentName;
        	rtnArray[4] = ProcessPathId;
        	rtnArray[5] = PathSequence;
        	rtnArray[6] = ReturnProcessSegmentId;
        	rtnArray[7] = ReturnPathSequence;
        	rtnArray[8] = ReworkType;
        	rtnArray[9] = ResourceId;
        	rtnArray[10] = ResourceName;
        	rtnArray[11] = ReturnResourceId;
        	rtnArray[12] = ReturnResourceName
        	if(ReworkType == "REWORK"){
        		rtnArray[13] = ReturnPathId;
        	}else{
        		rtnArray[13] = ProcessPathId;
        	}

        	this.opener.fv_rtnValue = rtnArray;
        	this.close();

        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.div_1_edt_REWORKROUTING_onchanged = function(obj,e)
        {
        	if(this.gfn_isNull(e.postvalue) && this.div_1.form.ckb_PRODUCTROUTING.value!="1"){
        		this.ds_ReworkRouting.clearData();
        		this.div_1.form.cbo_Resource.set_value("");
        		this.div_1.form.cbo_Resource.set_enable(false);
        	}
        };

        this.div_1_btn_REWORKROUTING_onclick = function(obj,e)
        {
        	var popupId = "REWORKROUTING";
        	var oArg = {};
        	oArg.LotId   = this.parent.LotId;
        	this.gfn_openPopup(popupId,"pcm::PCM04502P.xfdl",oArg,"");

        };

        /*
        this.div_1_grd_ReworkRouting_onselectchanged = function(obj:nexacro.Grid,e:nexacro.GridSelectEventInfo)
        {
        	this.fn_RefreshResource();
        	this.fn_RefreshResourceReturn();
        };
        */

        this.div_2_grd_CurrentRouting_oncellclick = function(obj,e)
        {
        	if(this.nfn_isEqualCol(obj,e.col,"CHK")){
        		var val = this.ds_CurrentRouting.getColumn(e.row,"CHK");
        		if(val=="1"){
        			for(var i=0; i<e.row; i++) this.ds_CurrentRouting.setColumn(i,"CHK","0");
        			for(var i=e.row+1; i<this.ds_CurrentRouting.rowcount; i++) this.ds_CurrentRouting.setColumn(i,"CHK","0");
        			/*
        			var nRow = this.ds_CurrentRouting.findRow("CHK","1",0,e.row-1);
        			if(nRow>=0){
        				this.ds_CurrentRouting.setColumn(nRow,"CHK","0");
        			}else{
        				var nRow = this.ds_CurrentRouting.findRow("CHK","1",e.row+1,this.ds_CurrentRouting.rowcount-1);
        				this.ds_CurrentRouting.setColumn(nRow,"CHK","0");
        			}
        			if(this.ds_CurrentRouting.getColumn(e.row,"DISPLAYSEQUENCE") != "1"){
        				this.ds_CurrentRouting.getColumn(e.row,"CHK","1");
        			}else{
        				this.ds_CurrentRouting.getColumn(e.row,"CHK","0");
        			}
        			*/
        			this.fn_RefreshResource();
        			this.fn_RefreshResourceReturn();

        		}
        	}

        };

        this.div_1_grd_ReworkRouting_oncellclick = function(obj,e)
        {
        	this.fn_RefreshResource();
            this.fn_RefreshResourceReturn();
        };

        this.div_1_ckb_PRODUCTROUTING_onchanged = function(obj,e)
        {
        	this.fn_SearchRoutings();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_sel.addEventHandler("onclick",this.btn_sel_onclick,this);
            this.div_1.form.grd_ReworkRouting.addEventHandler("onselectchanged",this.div_1_grd_ReworkRouting_onselectchanged,this);
            this.div_1.form.grd_ReworkRouting.addEventHandler("oncellclick",this.div_1_grd_ReworkRouting_oncellclick,this);
            this.div_1.form.edt_REWORKROUTING.addEventHandler("onchanged",this.div_1_edt_REWORKROUTING_onchanged,this);
            this.div_1.form.btn_REWORKROUTING.addEventHandler("onclick",this.div_1_btn_REWORKROUTING_onclick,this);
            this.div_1.form.ckb_PRODUCTROUTING.addEventHandler("onchanged",this.div_1_ckb_PRODUCTROUTING_onchanged,this);
            this.div_1.form.edt_REWORKNUMBER.addEventHandler("onchanged",this.div_1_edt_REWORKROUTING_onchanged,this);
            this.div_2.form.grd_CurrentRouting.addEventHandler("onselectchanged",this.div_work_grd_basApproval_onselectchanged,this);
            this.div_2.form.grd_CurrentRouting.addEventHandler("oncellclick",this.div_2_grd_CurrentRouting_oncellclick,this);
        };
        this.loadIncludeScript("PCM04501P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
