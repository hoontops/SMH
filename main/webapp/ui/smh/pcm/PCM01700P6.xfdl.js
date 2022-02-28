(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01700P6");
            this.set_titletext("CONSUMABLEDEFECTPROCESS");
            if (Form == this.constructor)
            {
                this._setFormPosition(556,194);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"REASONCODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reasonCode", this);
            obj._setContents("<ColumnInfo><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumableList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumableDefectList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REASONCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Button("btn_save",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptext("SAVE");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"70","28","btn_save:5","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_no");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","97","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02","20",null,null,"10","20","btn_close:0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Div("div_save","21","41","516","95",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("label00","0","0","23.15%","31",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("0");
            obj.set_text("자재 LOT");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("MATERIALLOT");
            this.div_save.addChild(obj.name, obj);

            obj = new Edit("edt_consumableLotId","124","5",null,"20","50",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("1");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_text("210115F002-1-FG00-002-001");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("label06","0","31","23.15%","31",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("2");
            obj.set_text("가용 수량");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("AVAILABLEQTY");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("label11","48.64%","31","22.96%","31",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("3");
            obj.set_text("불량 수량");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("DEFECTQTY");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("label16","0","label06:0","23.15%","31",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("4");
            obj.set_text("사유");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("REASON");
            this.div_save.addChild(obj.name, obj);

            obj = new Combo("cbo_reasonCode","label16:5","67","200","20",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_reasonCode");
            obj.set_codecolumn("REASONCODEID");
            obj.set_datacolumn("REASONCODENAME");
            this.div_save.addChild(obj.name, obj);

            obj = new Spin("spn_numCurrentQty","label06:5","36",null,"20","label11:5",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("6");
            this.div_save.addChild(obj.name, obj);

            obj = new Spin("spn_numDefectQty","label11:5","36",null,"20","17",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("7");
            this.div_save.addChild(obj.name, obj);

            obj = new Button("btn_close00",null,"6","25","25","9",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",556,194,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_save.form.edt_consumableLotId","value","ds_consumableList","CONSUMABLELOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_save.form.spn_numCurrentQty","value","ds_consumableList","AVAILABLEQTY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM01700P6.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01700P6.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PCM01700P6.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM01700P6.xfdl","lib::lib_mtm.xjs");
        this.registerScript("PCM01700P6.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 공통팝업
         * 파일명 		: PCM01700P4.xfdl
         * 작성자 		: 김성현
         * 작성일 		: 2021.04.27
         *
         * 설  명		: 공통팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.27	김성현   	최초작성
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

        this.consumableLotId = "";
        this.availableQty = -1;
        this.defectQty = -1;

        // this.gf_getEnterpriseId()
        // this.gf_getSiteType()
        // this.gf_getLanguageType()
        // this.gf_getUserId()
        // this.gf_getUserNm()


        var sAppName = nexacro.getApplication().id;
        sAppName = sAppName.toString().toUpperCase();




        // paging end
        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	console.log("PCM01700P6");

        	this.consumableLotId = this.parent.arg_consumableLotId;
        	this.availableQty    = this.parent.arg_availableQty;

        	trace("parentLotID======" + this.parent.arg_consumableLotId);
        	trace("consumableLotId======" + this.consumableLotId);
        	this.ds_consumableDefectList.clearData();
        	this.ds_consumableDefectList.addRow();
        	this.ds_consumableDefectList.copyData(this.parent.arg_ds_consumableDefectList);

        	this.ds_consumableList.clearData();
        	this.ds_consumableList.addRow();

        	this.div_save.form.edt_consumableLotId.set_value(this.consumableLotId);
        	this.div_save.form.spn_numCurrentQty.set_value(this.availableQty);

        	this.initCombo();
        // 	this.opener.fv_rtnValue = null;
        //
        // 	this.ds_lotInfo.clearData();
        // 	this.ds_lotInfo.copyData(this.parent.arg_ds_lotMessageInfo);
        //
        // 	this.ds_messageList.clearData();
        // 	this.ds_messageList.copyData(this.parent.arg_ds_messageList);
        };

        this.resultInfo = {
        		resultCd :	"FAIL"	//결과코드
        	  , defectQty : -1
        	  , dataset : this.ds_consumableDefectList
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
        		case "getReasonCodeByProcess":

        			console.log(this.ds_reasonCode.saveXML());


        			this.ds_consumableDefectList.filter("CONSUMABLELOTID = '" + this.consumableLotId + "'");


        			if(this.ds_consumableDefectList.getRowCount() > 0)
        			{
        				var defectQty  = nexacro.toNumber(this.nfn_nvl(this.ds_consumableDefectList.getColumn(0, "DEFECTQTY"), "0"));
        				var reasonCode = this.nfn_nvl(this.ds_consumableDefectList.getColumn(0, "REASONCODE"), "");

        				this.div_save.form.spn_numDefectQty.set_value(defectQty);
        				this.div_save.form.cbo_reasonCode.set_value(reasonCode);
        			}

        			this.ds_consumableDefectList.filter("");

        			break;
        		default:

        			break;
        	}
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.btn_save_onclick = function(obj,e)
        {
        	this.ds_consumableDefectList.filter("CONSUMABLELOTID = '" + this.consumableLotId + "'");

        	if (this.ds_consumableDefectList.getRowCount() > 0)
        	{
        		this.ds_consumableDefectList.setColumn(0, "DEFECTQTY" , this.div_save.form.spn_numDefectQty.value);
        		this.ds_consumableDefectList.setColumn(0, "REASONCODE", this.div_save.form.cbo_reasonCode.value);
        	}
        	else
        	{
        		var nRow = this.ds_consumableDefectList.addRow();

        		this.ds_consumableDefectList.setColumn(nRow, "DEFECTQTY" , this.div_save.form.edt_consumableLotId.value);
        		this.ds_consumableDefectList.setColumn(nRow, "DEFECTQTY" , this.div_save.form.spn_numDefectQty.value);
        		this.ds_consumableDefectList.setColumn(nRow, "REASONCODE", this.div_save.form.cbo_reasonCode.value);
        	}

        	this.defectQty  = nexacro.toNumber(this.nfn_nvl(this.div_save.form.spn_numDefectQty.value, "0"));
        	this.ds_consumableDefectList.filter("");


        	this.resultInfo.resultCd = "OK";
        	this.resultInfo.defectQty = this.defectQty;
        	this.resultInfo.dataset = this.ds_consumableDefectList;
        	this.opener.fv_rtnValue = this.resultInfo;
        	this.close();
        };

        this.btn_close_onclick = function (obj, e)
        {
        	this.resultInfo.resultCd = "CANCEL";
        	this.opener.fv_rtnValue = this.resultInfo;
        	this.close();
        };


        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
         this.initCombo = function()
        {
        	this.ds_param.clearData();
        	this.ds_param.addRow();
        	this.ds_param.setColumn(0, "REASONCODECLASSID", "ConsumableScrapCode");
        	this.ds_param.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_param.setColumn(0, "VERSION", "10001");

        	var sSvcID = "getReasonCodeByProcess";
        	var sController = "/pcm01700/getReasonCodeByProcess.do";
        	var sInDatasets = "INPUT=ds_param";
        	var sOutDatasets = "ds_reasonCode=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
            this.ds_consumableList.addEventHandler("onrowposchanged",this.ds_consumableList_onrowposchanged,this);
            this.ds_consumableList.addEventHandler("oncolumnchanged",this.ds_consumableList_oncolumnchanged,this);
        };
        this.loadIncludeScript("PCM01700P6.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
