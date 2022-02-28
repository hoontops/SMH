(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PDA00201P");
            this.set_titletext("채공 사유 입력");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,409);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dtStaying", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"STAYINGLOCKSTD\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTSTATESTAYINGTIMECNV\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_delayCode", this);
            obj._setContents("<ColumnInfo><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_body", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DELAYCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DELAYCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_worker", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"P_PARENTREASONCODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Button("btn_save",null,null,"90","38","115","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"90","38","20","10",null,null,null,null,this);
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

            obj = new Grid("grd_staying","0","94",null,"90","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_dtStaying");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"95\"/><Column size=\"97\"/><Column size=\"126\"/><Column size=\"143\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"채공기준 시간\" tooltiptext=\"STDSTAYINGTIME\" font=\"normal 14px/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"현상태 채공\" tooltiptext=\"STATEDELAYTIME\" font=\"normal 14px/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"이전스탭 완료시간\" tooltiptext=\"PRVSTEPCOMPTIME\" font=\"normal 14px/normal &quot;Arial&quot;\"/><Cell col=\"3\" text=\"현재시간\" tooltiptext=\"NOWTIME\" font=\"normal 14px/normal &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:STAYINGLOCKSTD\" font=\"normal 14px/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"bind:CURRENTSTATESTAYINGTIMECNV\" font=\"normal 14px/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"bind:CHECKTIME\" font=\"normal 14px/normal &quot;Arial&quot;\"/><Cell col=\"3\" text=\"bind:CUR_TIME\" font=\"normal 14px/normal &quot;Arial&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","0","29",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("div_00");
            obj.set_cssclass("div_guide");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","0","12",null,"20","0",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_text("공정 체공이 기준 시간을 넘었습니다. 체공 사유를 입력해 주세요");
            obj.set_cssclass("sta_WF_helpCheck");
            obj.set_font("normal 700 11pt/normal \"Arial\"");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_00_00_00_00_00_00_01","20","0","30","15",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("h15");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_00_00_00_00_00_00","20",null,"30","15",null,"0",null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_text("h15");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("title2","10","65","38","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_save","0","199",null,"152","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_delayCode","0","10","90","30",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("0");
            obj.set_text("체공사유");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_font("normal 14pt/normal \"Arial\"");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("sta_comment","0","45","90","30",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("1");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_font("normal 14pt/normal \"Arial\"");
            this.div_save.addChild(obj.name, obj);

            obj = new Combo("cbo_delayCode","95","10","280","30",null,null,null,null,null,null,this.div_save.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_delayCode");
            obj.set_codecolumn("REASONCODEID");
            obj.set_datacolumn("REASONCODENAME");
            obj.set_font("normal 14pt/normal \"Arial\"");
            obj.set_text("");
            obj.set_index("-1");
            this.div_save.addChild(obj.name, obj);

            obj = new TextArea("txt_comment","95","45",null,"95","0",null,null,null,null,null,this.div_save.form);
            obj.set_taborder("3");
            obj.set_font("normal 14pt/normal \"Arial\"");
            this.div_save.addChild(obj.name, obj);

            obj = new Static("Static02_02_00","30",null,null,"13","10","211",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("h13");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00",null,"0","35","35","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",450,409,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PDA00201P.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PDA00201P.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PDA00201P.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PDA00201P.xfdl","lib::lib_mtm.xjs");
        this.registerScript("PDA00201P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 공통팝업
         * 파일명 		: PDA00201P.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.06.04
         *
         * 설  명		: 공통팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.06.04	진성하   	최초작성
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




        			for (var i = 0; i < this.ds_resourceList.getRowCount(); i++)
        			{
        				if (this.ds_resourceList.getColumn(i, "ISPRIMARYRESOURCE") == "Y")
        				{
        					this.primaryResourceId = this.nfn_nvl(this.ds_resourceList.getColumn(i, "RESOURCEID"), "");
        					break;
        				}
        			}

        			break;
        		case "getReasonCodeByProcess":
        			if(this.ds_delayCode.getRowCount() > 0)
        				this.div_save.form.cbo_delayCode.set_index(0);
        			break;
        		case "insertabnormalOccurenceByDelayLot":


        			this.resultInfo.resultCd = "OK";
        			var retData = JSON.stringify(this.resultInfo);
        			this.opener.fv_rtnValue = retData;

        			this.gfn_Message("SuccedSave", null, "info", "ok");

        			this.close();

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
        	console.log("PCM01700P1");
        	this.opener.fv_rtnValue = null;

        	this.ds_dtStaying.clearData();
        	this.ds_dtStaying.copyData(this.parent.arg_ds_dtStaying);

        	this.initalizeDelayCombo();
        };


        this.initalizeDelayCombo = function ()
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "REASONCODECLASSID", "QCLockInWaitingTime");
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	var sSvcID 			= "getReasonCodeByProcess";
        	var sController 	= "/pcm01700/getReasonCodeByProcess.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_delayCode=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        this.resultInfo = {
        		resultCd :	"FAIL"	//결과코드
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/



        this.btn_close_onclick = function (obj, e)
        {
        	this.resultInfo.resultCd = "CANCEL";
        	var retData = JSON.stringify(this.resultInfo);
        	this.opener.fv_rtnValue = retData;
        	this.close();
        };

        this.saveValidation = function()
        {
        	if (this.nfn_isNull(this.div_save.form.cbo_delayCode.value))
        	{
        		//체공사유 선택은 필수입니다.
        		this.gfn_Message("NoExistDelayCode", null, "warning", "ok");
        		return;
        	}
        };

        this.btn_save_onclick = function(obj,e)
        {
        	this.saveValidation();

        	this.ds_body.clearData();
        	this.ds_body.addRow();

        	var checkTime = this.ds_dtStaying.getColumn(0, "CHECKTIME");
        	checkTime = nexacro.replaceAll(checkTime, "-","");
        	checkTime = nexacro.replaceAll(checkTime, " ","");
        	checkTime = nexacro.replaceAll(checkTime, ":","");

        	this.ds_body.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_body.setColumn(0, "PLANTID", this.gf_getSiteType() );
        	this.ds_body.setColumn(0, "USERID", this.gf_getUserId());
        	this.ds_body.setColumn(0, "LOTID", this.ds_dtStaying.getColumn(0, "LOTID"));
        	this.ds_body.setColumn(0, "DELAYCODE", this.div_save.form.cbo_delayCode.value);
        	this.ds_body.setColumn(0, "DELAYCOMMENT", this.div_save.form.txt_comment.value);
        	this.ds_body.setColumn(0, "CHECKTIME", checkTime);


        	var sSvcID = "insertabnormalOccurenceByDelayLot";
        	var sController = "/pcmWorkProcess/insertabnormalOccurenceByDelayLot.do";
        	var sInDatasets = "INPUT=ds_body";
        	var sOutDatasets = "ds_worker=output";
        	var sArgs = "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        };


        this.initalizeHoldCombo = function()
        {
        	this.ds_param.clearData();
        	this.ds_param.addRow();
        	this.ds_param.setColumn(0, "P_PARENTREASONCODECLASSID", "HoldCode");
        	this.ds_param.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("PDA00201P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
