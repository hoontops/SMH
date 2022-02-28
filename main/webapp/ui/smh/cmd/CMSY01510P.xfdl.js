(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSY01510P");
            this.set_titletext("권한 복사");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(610,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmdUsers", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USER_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"PLATFORM_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PLATFORM_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","15","128","580","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_job","23","10","34","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_job00","167","10","42","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("사원명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static81","427","33","168","13",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("13");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static24","0","1","20","41",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static26","0","1","75","10",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static27","0","32","75","10",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static29","584","0","10","43",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static32","54","1","10","41",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_userNm","215","10",null,"20","274",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","206","1","10","41",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","156","1","10","41",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"10","60","20","65",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_DR_GridSearch");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"10","60","20","0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("복사");
            obj.set_cssclass("btn_DR_GridCopy");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_userAcnt","63","10",null,"20","426",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_page","169",null,"410","20",null,"43",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("common::com_paging.xfdl");
            obj.set_background("transparent");
            obj.set_color("rgba(68,68,68,1)");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","15","3","580","15",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","15","33","580","15",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","0","0","15","580",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","595","0","15","580",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","14","9","220","26",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("권한 복사");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","15","537","580","10",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","15","568","580","12",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("12");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","431","189","163","5",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","587","0","23","23",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_POP_Close");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","535","547","60","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.set_cssclass("btn_DR_GridCancel");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cmdUsers","16","194",null,"347","2.46%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_cmdUsers");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"121\"/><Column size=\"145\"/><Column size=\"174\"/><Column size=\"93\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" textAlign=\"center\"/><Cell col=\"1\" text=\"사번\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"계정\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:CHK\" textAlign=\"center\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:USER_ACNT\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:USER_NM\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:DEPT_CD\" calendardisplaynulltype=\"none\"/><Cell col=\"4\" text=\"bind:USER_ACNT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","16","175","140","21",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("To");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Div("div","15","64","324","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("sta_job","23","10","34","20",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("21");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.div.addChild(obj.name, obj);

            obj = new Static("sta_job00","167","10","42","20",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("22");
            obj.set_text("사원명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static24","0","1","20","41",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("24");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static26","0","1","75","10",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static27","0","32","75","10",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static29","584","0","10","43",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static32","54","1","10","41",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_userNm","215","10","89","20",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03","206","1","10","41",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("31");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static04","156","1","10","41",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("32");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_userAcnt","63","10","89","20",null,null,null,null,null,null,this.div.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static00","16","45","140","21",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("From");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",610,580,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_paging.xfdl");
        };
        
        // User Script
        this.registerScript("CMSY01510P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 권한복사(팝업)
         * 파일명 		: CMSY01510P.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2017.11.30
         *
         * 설  명		: 권한복사(팝업)
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2017.11.30	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/
        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";
        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.div.form.edt_userAcnt.set_value(this.parent.arg_userAcnt);
        	this.div.form.edt_userNm.set_value(this.parent.arg_userNm);
        	this.nfn_formInit(obj);
        	// 엔터키 설정 함수(조회)
        	this.gfn_setEnterSearch(this.div_search, "nfn_search");

        	this.fn_search();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_cmdUsers.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "USER_ACNT", this.div_search.form.edt_userAcnt.value);
        	this.ds_search.setColumn(0, "USER_NM", this.div_search.form.edt_userNm.value);
        	this.ds_search.setColumn(0, "USER_ID", this.parent.arg_userId);
        	this.ds_search.setColumn(0, "COMPANY_CD", this.parent.arg_companyCd);
        	this.ds_search.setColumn(0, "PLATFORM_FLAG", "W");

        	var sSvcID = "selectCmdUsersListExceptSelected";
        	var sController = "/cmsy01500/selectCmdUsersListExceptSelected.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_cmdUsers=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdUsersListExceptSelected");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	var bOK = nexacro.getApplication().confirm("저장하시겠습니까?");
        	if (bOK == false)
        	{
        		return;
        	}

        	if (this.ds_cmdUsers.getCaseCount("CHK=='1'") == 0)
        	{
        		this.gfn_Message("IMCMM0157", "복사할 대상을", "warning", "ok"); //복사할 대상을 선택하세요.
        		return;
        	}
        	this.ds_cmdUsers.addColumn("COMPANY_CD", "string");
        	for (var i = 0; i < this.ds_cmdUsers.rowcount; i++)
        	{
        		if (this.ds_cmdUsers.getColumn(i, "CHK") == "1")
        		{
        			this.ds_cmdUsers.setColumn(i, "USER_ID_FROM", this.parent.arg_userId);
        			this.ds_cmdUsers.setColumn(i, "COMPANY_CD", this.parent.arg_companyCd);
        		}
        	}
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveCmdUserAuthMpngCopy";
        	var sController = "/cmsy01500/saveCmdUserAuthMpngCopy.do";
        	var sInDatasets = "INPUT=ds_cmdUsers:U";
        	var sOutDatasets = "";

        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "saveCmdUserAuthMpngCopy");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		if (trId.substring(0, 6) == "select")
        		{
        			this.gfn_Message("SMCMM0005", trId + errMsg, "error", "ok");
        		}
        		else
        		{
        			this.gfn_Message("SMCMM0051", trId + errMsg, "error", "ok");
        		}
        	}
        	else
        	{
        		if (trId == "selectCmdUsersListExceptSelected")
        		{
        		}
        		else if (trId == "saveCmdUserAuthMpngCopy")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search();
        		}
        	}
        };


        this.btn_close_onclick = function (obj, e)
        {
        	this.gfn_popupClose("CLOSE");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.sta_job00.addEventHandler("onclick",this.Div04_sta_job00_onclick,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_search.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.Button00.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_cmdUsers.addEventHandler("onselectchanged",this.grd_cmdUsers_onselectchanged,this);
            this.Static02.addEventHandler("onclick",this.Static10_onclick,this);
            this.div.form.sta_job00.addEventHandler("onclick",this.Div04_sta_job00_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static10_onclick,this);
        };
        this.loadIncludeScript("CMSY01510P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
