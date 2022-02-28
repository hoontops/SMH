(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSL02200M");
            this.set_titletext("다양한 쿼리 권한등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,637);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"JOB_AUTH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PLATFORM_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmdJobAuthMng", this);
            obj._setContents("<ColumnInfo><Column id=\"JOB_AUTH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmdDynamicSqlAuth", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLATFORM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_AUTH_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","28",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_authNm","94","10","214","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","16","12","73","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_text("권한명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","10.68%","40",null,"43","88.22%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","0%","0",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","84","0","10",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0%","-1",null,"43","97.8%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("34");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0%","75","140","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("권한정보");
            obj.set_cssclass("sta_WF_subTitle3");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","60","21","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_DR_GridSave");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static06",null,"26","10","42","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","98.91%","0",null,"1856","0%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0%","21",null,"7","1.09%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0%","91",null,"8","87.17%",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cmdJobAuthMng","0","96","218",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_cmdJobAuthMng");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"210\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"권한명\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:AUTH_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cmdDynamicSqlAuth","220","96",null,null,"8","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_cmdDynamicSqlAuth");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"260\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"업무구분\"/><Cell col=\"1\" rowspan=\"2\" text=\"프로그램\"/><Cell col=\"2\" rowspan=\"2\" text=\"프로그램명\"/><Cell col=\"3\" text=\"사용여부\"/><Cell row=\"1\" col=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell text=\"bind:BUSINESS_TYPE_NM\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PROGRAM_CD\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PROGRAM_NM\" textAlign=\"left\"/><Cell col=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:USE_YN\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"0","60","21","140",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_DR_GridSearch");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"0","60","21","75",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_DR_GridReset");
            obj.set_tooltiptext("초기화");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","24.13%","91",null,"8","63.04%",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","223","75","234","21",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("다양한 쿼리 프로그램");
            obj.set_cssclass("sta_WF_subTitle3");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totCnt2",null,"72","120","21","8",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("(조회  0 건)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("bottom");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_totCnt1","93","72","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("(조회  0 건)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("bottom");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,637,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item5","div_search.form.edt_authNm","cssclass","ds_result","POPUP_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMSL02200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	    : 대륜E&S 빌링시스템
         * 업무명 		: 다양한 쿼리 권한등록
         * 파일명 		: CMSL02200M.xfdl
         * 작성자 		: Jin Sung Ha
         * 작성일 		: 2021.10.25
         *
         * 설  명		: 다양한 쿼리관리를 위한 권한을 등록하고 관리하는 화면입니다.
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		        변경내역
         *---------------------------------------------------------------------------------------
         * 2021.10.25	Jin Sung Ha   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;


        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	// 엔터키 설정 함수(조회)
        //	this.gfn_setEnterSearch(this.div_search, "nfn_search");
        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        // 권한정보 조회
        this.fn_search = function (obj, e)
        {
        	this.ds_cmdJobAuthMng.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLATFORM_FLAG", "W");
        	this.ds_search.setColumn(0, "AUTH_NM", this.div_search.form.edt_authNm.value);
        	this.ds_search.setColumn(0, "USE_YN", "Y");

        	var sSvcID = "selectCmdJobAuthMngList";
        	var sController = "/cmsy01300/selectCmdJobAuthMngList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_cmdJobAuthMng=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", sSvcID);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");
        };


        // 다양한 쿼리 프로그램 조회
        this.fn_search2 = function (obj, e)
        {
        	this.ds_cmdDynamicSqlAuth.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLATFORM_FLAG", "W");
        	this.ds_search.setColumn(0, "JOB_AUTH_ID", this.ds_cmdJobAuthMng.getColumn(this.ds_cmdJobAuthMng.rowposition, "JOB_AUTH_ID"));

        	var sSvcID = "selectCmdDynamicSqlAuth";
        	var sController = "/cmsl02200/selectCmdDynamicSqlAuth.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_cmdDynamicSqlAuth=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", sSvcID);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        // 저장 버튼
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_cmdDynamicSqlAuth))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	var chkCnt = 0;
        	var jobAuthId = this.ds_cmdJobAuthMng.getColumn(this.ds_cmdJobAuthMng.rowposition, "JOB_AUTH_ID");
        	// trace("jobAuthId => " + jobAuthId);

        	for (var i = 0; i < this.ds_cmdDynamicSqlAuth.rowcount; i++)
        	{
        		// 수정된 데이터는 다양한 쿼리 등록 테이블에 저장(insert, update)
        		if (this.ds_cmdDynamicSqlAuth.getRowType(i) == Dataset.ROWTYPE_UPDATE)
        		{
        			this.ds_cmdDynamicSqlAuth.setColumn(i, "PLATFORM_TYPE", "W");
        			this.ds_cmdDynamicSqlAuth.setColumn(i, "JOB_AUTH_ID", jobAuthId);
        		}
        	}

        	var bOK = this.gfn_Message("InfoPopupSave", null, "conf", "yesno");
        	if (bOK == false) return;
        	// trace(this.ds_cmdDynamicSqlAuth.saveXML());

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveCmdDynamicSqlAuth";
        	var sController = "/cmsl02200/saveCmdDynamicSqlAuth.do";
        	var sInDatasets = "INPUT=ds_cmdDynamicSqlAuth:U";
        	var sOutDatasets = "";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", sSvcID);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        // 초기화 버튼
        this.fn_clear = function (obj, e)
        {
        	this.reload();
        };



        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		// 조회 버튼
        		if (trId == "selectCmdJobAuthMngList")
        		{
        			this.sta_totCnt1.set_text("(조회  " + this.nfn_appendComma(this.ds_cmdJobAuthMng.rowcount) + " 건)");
        		}

        		else if (trId == "selectCmdDynamicSqlAuth")
        		{
        			this.sta_totCnt2.set_text("(조회  " + this.nfn_appendComma(this.ds_cmdDynamicSqlAuth.rowcount) + " 건)");
        		}
        		else if (trId == "saveCmdJobAuthMenuMpng")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search2();
        		}
        		// 저장 버튼
        		else if (trId == "saveCmdDynamicSqlAuth")
        		{
        			// 다양한 쿼리 프로그램 조회
        			this.fn_search2();
        		}
        	}
        };


        this.grd_cmdJobAuthMng_onselectchanged = function (obj, e)
        {
        	// 다양한 쿼리 프로그램 조회
        	this.fn_search2();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.Static02.addEventHandler("onclick",this.Static10_onclick,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.grd_cmdJobAuthMng.addEventHandler("onselectchanged",this.grd_cmdJobAuthMng_onselectchanged,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.fn_clear,this);
            this.Static01.addEventHandler("onclick",this.Static10_onclick,this);
            this.ds_cmdDynamicSqlAuth.addEventHandler("onvaluechanged",this.ds_cmdJobAuthMenuMpng_onvaluechanged,this);
        };
        this.loadIncludeScript("CMSL02200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
