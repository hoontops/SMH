(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01700P3");
            this.set_titletext("ProductRevisionInputPopup");
            this.set_background("red");
            if (Form == this.constructor)
            {
                this._setFormPosition(456,260);
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
            obj._setContents("<ColumnInfo><Column id=\"POPUP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORDERBY\" type=\"STRING\" size=\"256\"/><Column id=\"MDL\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popup", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"POPUP_ID\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"POPUP_CD\" size=\"256\" type=\"STRING\"/><Column id=\"POPUP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"QRY_URL\" size=\"256\" type=\"STRING\"/><Column id=\"MTH\" size=\"256\" type=\"STRING\"/><Column id=\"DEL_YN\" size=\"256\" type=\"STRING\"/><Column id=\"CREATED_BY\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"CREATION_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATED_BY\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"LAST_UPDATE_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"LAST_UPDATED_LOGIN\" size=\"256\" type=\"BIGDECIMAL\"/><Column id=\"QRY_TY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resourceList", this);
            obj._setContents("<ColumnInfo><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DATACOLUMN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_worker", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_workerResult", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_printLotCard", this);
            obj._setContents("<ColumnInfo><Column id=\"ISPRINTLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","-8","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"10","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_printRCLotCard",null,null,"147","28","0","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("변경 Lot Card 출력");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","97","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02","20",null,null,"10","20","48",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Div("div_title","0","20",null,null,"0","130",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div_00");
            obj.set_background("red");
            obj.set_cssclass("div_guide");
            this.addChild(obj.name, obj);

            obj = new Static("sta_productRevisionInputContext","20","5",null,"88","20",null,null,null,null,null,this.div_title.form);
            obj.set_taborder("0");
            obj.set_text("변경 Lot Card의 \'품목 Barcode\' 를 스캔 하십시오. 변경 Lot Card가 없는 경우 출력/교체 후 재 진행 하시기 바랍니다.");
            obj.set_color("White");
            obj.set_background("red");
            obj.set_font("bold 14pt/normal \"Tahoma\"");
            obj.set_wordWrap("char");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_font_white");
            this.div_title.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_00_00_00_00_00_00_01","20","0","30","15",null,null,null,null,null,null,this.div_title.form);
            obj.set_taborder("1");
            obj.set_text("h15");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.div_title.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_00_00_00_00_00_00","20",null,"30","15",null,"-110",null,null,null,null,this.div_title.form);
            obj.set_taborder("2");
            obj.set_text("h15");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.div_title.addChild(obj.name, obj);

            obj = new Div("div_main","20","131",null,"73","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("red");
            obj.set_cssclass("div_WF_detail");
            this.addChild(obj.name, obj);

            obj = new Static("sta_productRevisionInputTop","3.14%","10","24.15%","20",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_text("품목 Rev");
            obj.set_color("white");
            obj.set_background("red");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_font_white");
            this.div_main.addChild(obj.name, obj);

            obj = new Edit("edt_productRevisionInput","sta_productRevisionInputTop:5","10",null,"48","5",null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_imemode("none");
            this.div_main.addChild(obj.name, obj);

            obj = new Static("sta_productRevisionInputBottom","3.14%","37","24.15%","20",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("2");
            obj.set_text("(Barcode Scan)");
            obj.set_color("white");
            obj.set_background("red");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_font_white");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"70","28","btn_printRCLotCard:5","20",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",456,260,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM01700P3.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01700P3.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PCM01700P3.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM01700P3.xfdl","lib::lib_mtm.xjs");
        this.registerScript("PCM01700P3.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 공통팝업
         * 파일명 		: PCM01700P3.xfdl
         * 작성자 		: 김성현
         * 작성일 		: 2021.04.07
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
        this.lv_lotId = "";
        this.lv_productRevision = "";

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

        		var primaryResourceId = "";


        		for (var i = 0; i < this.ds_resourceList.getRowCount(); i++)
        		{
        			if (this.ds_resourceList.getColumn(i, "ISPRIMARYRESOURCE") == "Y")
        			{
        				primaryResourceId = this.ds_resourceList.getColumn(i, "RESOURCEID");
        				break;
        			}
        		}

        		break;
        	case "savePrintLotCard":

        		this.resultInfo.resultCd = "OK";
        		var retData = JSON.stringify(this.resultInfo);
        		this.opener.fv_rtnValue = retData;
        		this.close();

        		break;
        	default:
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

            switch(sPopupId)
        	{
        		case "reportViewer" :
        			this.ds_worker.clearData();
        			this.ds_worker.addRow();
        			this.ds_worker.setColumn(0, "LOTID", this.lv_lotId);

        			var sSvcID = "savePrintLotCard";
        			var sController = "/pcm01700/savePrintLotCard.do";
        			var sInDatasets = "INPUT=ds_worker";
        			var sOutDatasets = "ds_workerResult=output";
        			var sArgs = "";

        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        			break;

        		default :
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
        	console.log("PCM01700P3");
        	this.lv_lotId = this.parent.arg_lotId;
        	this.lv_productRevision = this.parent.arg_productRevision;

        	var text = this.nfn_nvl(this.nfn_getDictionaryname("PRODUCTREVISIONINPUTPOPUP"), "");

        	this.div_title.form.sta_productRevisionInputContext.set_text(this.nfn_nvl(this.nfn_getDictionarynameUpper("InputProductRevision"), ""));
        	this.div_main.form.sta_productRevisionInputTop.set_text(this.nfn_nvl(this.nfn_getDictionarynameUpper("PRODUCTREVISIONINPUT"), ""));
        	this.div_main.form.sta_productRevisionInputBottom.set_text(this.nfn_nvl(this.nfn_getDictionarynameUpper("PRODUCTREVISIONBARCODE"), ""));
        	this.btn_printRCLotCard.set_text(this.nfn_nvl(this.nfn_getDictionarynameUpper("PRINTRCLOTCARD"), ""));

        	this.div_main.form.edt_productRevisionInput.setFocus();


        };



        this.resultInfo = {
        		resultCd :	"FAIL"	//결과코드
        	  , resourceId : "" //
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/


        this.div_main_edt_productRevisionInput_onkeydown = function(obj,e)
        {

        	if (e.keycode == 13)
        	{
        		this.setTimer( 1000, 1000 );


        	}
        };

        this.btn_printRCLotCard_onclick = function(obj,e)
        {

        	var lotId 			= this.lv_lotId;
        	var workTypeName	=this.nfn_nvl(this.nfn_getDictionarynameUpper("NORMAL"),"정상");
        	var languageType 	= this.gf_getLanguageType();
        	var title 			= this.nfn_nvl(this.nfn_getDictionarynameUpper("LOTCARDPRINT"),"LOT Card 출력");


        	var oArg = {
        		sRptPath   : "/pcm/",
        		sRptName   : "PCM00600R.mrd",
        		strField   :   "[" + lotId
        					+ "][" + languageType
        					+ "][" + workTypeName
        					+ "][]",
        		bModalless : false
        	};
        	trace("oArg==>"+oArg.strField);
        	var sOption = "titletext="+title+",modeless=false";
        	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption, "reportViewer");

        };

        this.resultInfo = {
        		resultCd :	"FAIL"	//결과코드
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.resultInfo.resultCd = "CANCEL";
        	var retData = JSON.stringify(this.resultInfo);
        	this.opener.fv_rtnValue = retData;
        	this.close();
        };

        this.PCM01700P3_ontimer = function(obj,e)
        {
        	var id = e.timerid;
        	if (id == 1000)
        	{
        		this.killTimer(id);
        		if (this.lv_productRevision != this.div_main.form.edt_productRevisionInput.value)
        		{
        			// 스캔 한 품목 Revision과 현재 Lot의 품목 Revision이 일치하지 않습니다. 변경 Lot Card를 출력하시기 바랍니다.
        			this.gfn_Message("PleasePrintRCLotCard", null, "warning", "ok")
        			this.div_main.form.edt_productRevisionInput.set_value("");
        			return;
        		}

        		var lotId 			= this.lv_lotId;
        		this.ds_printLotCard.clearData();
        		this.ds_printLotCard.addRow();
        		this.ds_printLotCard.setColumn(0,"LOTID",lotId);
        		this.ds_printLotCard.setColumn(0,"ISPRINTLOTCARD","Y");

        		var sSvcID 			= "savePrintLotCard";
        		var sController 	= "/pcm01700/savePrintLotCard.do";
        		var sInDatasets 	= "ds_worker=ds_printLotCard";
        		var sOutDatasets 	= "";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.addEventHandler("ontimer",this.PCM01700P3_ontimer,this);
            this.btn_printRCLotCard.addEventHandler("onclick",this.btn_printRCLotCard_onclick,this);
            this.div_main.form.edt_productRevisionInput.addEventHandler("onkeydown",this.div_main_edt_productRevisionInput_onkeydown,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("PCM01700P3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
