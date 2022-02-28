(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01700P4");
            this.set_titletext("Lot 메시지 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(556,644);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_messageList", this);
            obj.set_useclientlayout("true");
            obj.set_enableevent("true");
            obj._setContents("<ColumnInfo><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"WRITEPROCESSSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"ISREAD\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"256\"/><Column id=\"SHOWTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGEDROW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_changedList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREAD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","82","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"100","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","97","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Div("div_save","20","395","516","191",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","0","10","55","20",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("TITLE");
            obj.set_textAlign("left");
            this.div_save.addChild(obj.name, obj);

            obj = new Edit("edt_title","sta_title:5","10",null,"20","10",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("샘플");
            this.div_save.addChild(obj.name, obj);

            obj = new WebBrowser("WebMessage","9","33",null,null,"9","5",null,null,null,null,this.div_save.form);
            obj.set_taborder("2");
            obj.set_useurlhistory("true");
            obj.set_enable("true");
            obj.set_accessibilitydesclevel("all");
            obj.set_accessibilityenable("true");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static02_02","20","div_save:0",null,"10","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Div("div_save00","21","21","516","157",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("label00","0","0","23.15%","31",null,null,null,null,null,null,this.div_save00.form);
            obj.set_taborder("0");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("LOTID");
            this.div_save00.addChild(obj.name, obj);

            obj = new Edit("edt_00","124","5",null,"20","0",null,null,null,null,null,this.div_save00.form);
            obj.set_taborder("1");
            obj.set_value("210115F002-1-FG00-002-001");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("210115F002-1-FG00-002-001");
            this.div_save00.addChild(obj.name, obj);

            obj = new Static("label06","0","31","23.15%","31",null,null,null,null,null,null,this.div_save00.form);
            obj.set_taborder("2");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("ITEMCODE");
            this.div_save00.addChild(obj.name, obj);

            obj = new Edit("edt_01","124","36",null,"20","0",null,null,null,null,null,this.div_save00.form);
            obj.set_taborder("3");
            obj.set_value("1025362J1");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("1025362J1");
            this.div_save00.addChild(obj.name, obj);

            obj = new Static("label11","0","62","23.15%","31",null,null,null,null,null,null,this.div_save00.form);
            obj.set_taborder("4");
            obj.set_text("Rev");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_save00.addChild(obj.name, obj);

            obj = new Edit("edt_02","124","67",null,"20","0",null,null,null,null,null,this.div_save00.form);
            obj.set_taborder("5");
            obj.set_value("제품");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("제품");
            this.div_save00.addChild(obj.name, obj);

            obj = new Static("label16","0","93","23.15%","31",null,null,null,null,null,null,this.div_save00.form);
            obj.set_taborder("6");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("CONTROLLABEL");
            this.div_save00.addChild(obj.name, obj);

            obj = new Edit("edt_03","124","98",null,"20","0",null,null,null,null,null,this.div_save00.form);
            obj.set_taborder("7");
            obj.set_value("PCS");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("PCS");
            this.div_save00.addChild(obj.name, obj);

            obj = new Static("label16_00","0","124","22.96%","31",null,null,null,null,null,null,this.div_save00.form);
            obj.set_taborder("8");
            obj.set_text("공정명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("CONTROLLABEL");
            this.div_save00.addChild(obj.name, obj);

            obj = new Edit("edt_03_00","124","129",null,"20","0",null,null,null,null,null,this.div_save00.form);
            obj.set_taborder("9");
            obj.set_value("PCS");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("PCS");
            this.div_save00.addChild(obj.name, obj);

            obj = new Grid("grd_messageList","20","div_save00:13","516","191",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autoenter("none");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_messageList");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"1\" text=\"입력공정\" tooltiptext=\"WRITEPROCESSSEGMENT\"/><Cell col=\"2\" text=\"제목\" tooltiptext=\"TITLE\"/><Cell col=\"3\" text=\"읽음\" tooltiptext=\"ISREAD\"/></Band><Band id=\"body\"><Cell text=\"bind:CREATOR\"/><Cell col=\"1\" text=\"bind:WRITEPROCESSSEGMENT\"/><Cell col=\"2\" text=\"bind:TITLE\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:ISREAD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","76","178","50","13",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("h13");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",556,644,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_save00.form.edt_00","value","ds_lotInfo","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_save00.form.edt_01","value","ds_lotInfo","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_save00.form.edt_02","value","ds_lotInfo","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_save00.form.edt_03","value","ds_lotInfo","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_save00.form.edt_03_00","value","ds_lotInfo","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM01700P4.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01700P4.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PCM01700P4.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM01700P4.xfdl","lib::lib_mtm.xjs");
        this.registerScript("PCM01700P4.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 공통팝업
         * 파일명 		: PCM01700P4.xfdl
         * 작성자 		: 김성현
         * 작성일 		: 2021.04.06
         *
         * 설  명		: 공통팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.06	김성현   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_pcm.xjs"); /*include "lib::lib_pcm.xjs"*/;
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.primaryResourceId = "";
        this.fv_content = ""; //html view용
        var jobCd = nexacro.getApplication().id;
        var pUrl = nexacro.getApplication().gv_host + "/" + jobCd.toLowerCase() + "/richtexteditor/preview.html";

        this.previewUrl = pUrl;

        // this.gf_getEnterpriseId()
        // this.gf_getSiteType()
        // this.gf_getLanguageType()
        // this.gf_getUserId()
        // this.gf_getUserNm()


        var sAppName = nexacro.getApplication().id;
        sAppName = sAppName.toString().toUpperCase();


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
        		case "getTransitAreaList":


        			break;
        		default:

        			break;
        	}
        };

        // paging end
        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	console.log("PCM01700P4");
        	this.opener.fv_rtnValue = null;

        	this.ds_lotInfo.clearData();
        	this.ds_lotInfo.copyData(this.parent.arg_ds_lotMessageInfo);

        	this.ds_messageList.clearData();
        	this.ds_messageList.copyData(this.parent.arg_ds_messageList);

        	this.div_save.form.WebMessage.set_url(this.previewUrl);
        };

        this.resultInfo = {
        		resultCd :	"FAIL"	//결과코드
        	  , dataset : this.ds_changedList
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/



        this.btn_close_onclick = function (obj, e)
        {
        	var parentDs = this.opener.ds_body;

        	for(var i=0; i <this.ds_messageList.rowcount;i++){
        		if(//this.ds_messageList.getColumn(i, "CHANGEDROW")=="Y"			&&
        		this.ds_messageList.getColumn(i, "ISREAD")=="Y"){
        			var nRow = parentDs.addRow();
        			parentDs.setColumn(nRow, "LOTID", 					this.ds_lotInfo.getColumn(0, "LOTID"));
        			parentDs.setColumn(nRow, "PRODUCTDEFID", 			this.ds_lotInfo.getColumn(0, "PRODUCTDEFID"));
        			parentDs.setColumn(nRow, "PRODUCTDEFVERSION", 		this.ds_lotInfo.getColumn(0, "PRODUCTDEFVERSION"));
        			parentDs.setColumn(nRow, "PROCESSSEGMENTID", 		this.ds_lotInfo.getColumn(0, "PROCESSSEGMENTID"));
        			parentDs.setColumn(nRow, "PROCESSSEGMENTVERSION", 	this.ds_lotInfo.getColumn(0, "PROCESSSEGMENTVERSION"));
        			parentDs.setColumn(nRow, "ISREAD", 					"Y");
        			parentDs.setColumn(nRow, "SEQUENCE", 				this.ds_messageList.getColumn(i, "SEQUENCE"));
        		}
        	}

        	var resultInfo = {
        		 resultCd 	: "OK"
        	};

        	this.opener.fv_rtnValue = resultInfo;
        	this.close();
        };

        this.fn_getMessage = function(row)
        {
        	var dsObj = this.ds_messageList;
        	this.fv_content = dsObj.getColumn(row, "MESSAGE");
        	this.div_save.form.edt_title.set_value(dsObj.getColumn(row, "TITLE"));
        	var v2 = this.div_save.form.WebMessage.getProperty("document").getProperty("body");
        	v2.setProperty( "innerHTML", this.fv_content);
        	this.div_save.form.WebMessage.setProperty( "document", v2);
        }

        this.grd_messageList_oncellclick = function(obj,e)
        {
        	var dsObj = this.ds_messageList;
        	var isRead = this.nfn_nvl(dsObj.getColumn(e.row, "ISREAD"), "N");
        	if(isRead == "N")
        	{
        		dsObj.setColumn(e.row, "ISREAD", "Y");
        		dsObj.setColumn(e.row, "CHANGEDROW", "Y");
        	}
        	this.fn_getMessage(e.row);
        };


        this.div_save_WebMessage_onloadcompleted = function(obj,e)
        {
        	this.setTimer(9, 100);
        };

        this.PCM01700P4_ontimer = function(obj,e)
        {
        	if (e.timerid == 9)
        	{
        		this.grd_messageList.selectCell(0, 0);
        		this.grd_messageList_oncellclick(this.grd_messageList, {col:0});

        		var dsObj = this.ds_messageList;
        		this.fv_content = dsObj.getColumn(0, "MESSAGE");
        		this.div_save.form.WebMessage.callMethod("setContent", this.fv_content);

        		this.killTimer( 9 );

        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.addEventHandler("ontimer",this.PCM01700P4_ontimer,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.div_save.form.WebMessage.addEventHandler("onloadcompleted",this.div_save_WebMessage_onloadcompleted,this);
            this.grd_messageList.addEventHandler("oncellclick",this.grd_messageList_oncellclick,this);
            this.grd_messageList.addEventHandler("onselectchanged",this.grd_messageList_onselectchanged,this);
        };
        this.loadIncludeScript("PCM01700P4.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
