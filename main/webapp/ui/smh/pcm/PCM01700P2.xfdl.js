(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01700P2");
            this.set_titletext("자원정보 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(456,170);
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
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resourceList", this);
            obj._setContents("<ColumnInfo><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DATACOLUMN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Button("btn_confirm",null,null,"70","28","81","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"70","28","5","20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","97","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02","20",null,null,"10","20","48",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Div("div_title","20","20","416","55",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("div_00");
            obj.set_cssclass("div_guide");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","12","376","40",null,null,null,null,null,null,this.div_title.form);
            obj.set_taborder("0");
            obj.set_text("현재 공정에서 사용되는 자원 정보가 없습니다. \r\n현재 공정에서 사용할 자원을 선택하시기 바랍니다.\r\n");
            obj.set_color("red");
            obj.set_cssclass("sta_WF_helpCheck");
            this.div_title.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_00_00_00_00_00_00_01","20","0","30","15",null,null,null,null,null,null,this.div_title.form);
            obj.set_taborder("1");
            obj.set_text("h15");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.div_title.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_00_00_00_00_00_00","20",null,"30","15",null,"0",null,null,null,null,this.div_title.form);
            obj.set_taborder("2");
            obj.set_text("h15");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.div_title.addChild(obj.name, obj);

            obj = new Div("div_main","20","71","416","42",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta__resource","0","10","100","20",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("0");
            obj.set_text("자원");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_color("red");
            this.div_main.addChild(obj.name, obj);

            obj = new Combo("cbo_resource","105","10","200","20",null,null,null,null,null,null,this.div_main.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_resourceList");
            obj.set_codecolumn("RESOURCEID");
            obj.set_datacolumn("RESOURCENAME");
            this.div_main.addChild(obj.name, obj);

            obj = new Button("btn_close00",null,"0","25","25","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",456,170,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM01700P2.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01700P2.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PCM01700P2.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM01700P2.xfdl","lib::lib_mtm.xjs");
        this.registerScript("PCM01700P2.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 공통팝업
         * 파일명 		: PCM01700P2.xfdl
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
        this.lv_lotId = "";
        this.lv_processSegmentId = "";
        this.lv_areaId = "";
        this.primaryResourceId = "";


        var sAppName = nexacro.getApplication().id;
        sAppName = sAppName.toString().toUpperCase();

        this.resultInfo = {
        		resultCd :	"FAIL"	//결과코드
        	  , resourceId : "" //
        };

        // paging end
        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.opener.fv_rtnValue = null;

        	this.lv_lotId = this.parent.arg_lotId;
        	this.lv_processSegmentId = this.parent.arg_processSegmentId;
        	this.lv_areaId = this.parent.arg_areaId;


        	// 현재 공정에서 사용할 자원을 선택하시기 바랍니다.

        	//this.div_title.form.sta_title.set_text(this.nfn_getDictionarynameUpper("SELECTRESOURCEFORCURRENTPROCESS"));

        	this.ds_param.clearData();
        	this.ds_param.addRow();

        	this.ds_param.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_param.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_param.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_param.setColumn(0, "LOTID", this.lv_lotId);
        	this.ds_param.setColumn(0, "PROCESSSEGMENTID", this.lv_processSegmentId);
        	this.ds_param.setColumn(0, "RESOURCETYPE", "Resource");
        	this.ds_param.setColumn(0, "AREAID", this.lv_areaId);
        	this.ds_param.setColumn(0, "VERSION", "10031");


        	var sSvcID = "getTransitAreaList";
        	var sController = "/pcm01700/getTransitAreaList.do";
        	var sInDatasets = "INPUT=ds_param";
        	var sOutDatasets = "ds_resourceList=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

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
        	case "getTransitAreaList":

        		for (var i = 0; i < this.ds_resourceList.getRowCount(); i++)
        		{
        			if (this.nfn_nvl(this.ds_resourceList.getColumn(i, "ISPRIMARYRESOURCE"), "") == "Y")
        			{
        				this.primaryResourceId = this.ds_resourceList.getColumn(i, "RESOURCEID");
        				break;
        			}
        		}


        		this.div_main.form.cbo_resource.set_index(0);

        		break;

        	default:
        	}
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.btn_confirm_onclick = function(obj,e)
        {
        	if (this.ds_resourceList.getRowCount() == 0)
        	{
        		return;
        	}

        	this.resultInfo.resultCd = "OK";
        	this.resultInfo.resourceId = this.div_main.form.cbo_resource.value;
        	//var retData = JSON.stringify(this.resultInfo);
        	this.opener.fv_rtnValue = this.resultInfo;//retData;
        	this.close();
        };

        this.btn_close_onclick = function (obj, e)
        {
        	this.resultInfo.resultCd = "Cancel";
        	//var retData = JSON.stringify(this.resultInfo);
        	this.opener.fv_rtnValue = this.resultInfo;//rretData;
        	this.close();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("PCM01700P2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
