(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PAY40240M");
            this.set_titletext("팀원 근태 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_attendanceStatusList", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"YEARLY_GRANT_HOLIDAY_DAY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YEARLY_USE_HOLIDAY_DAY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EXCHANGE_GRANT_HOLIDAY_DAY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EXCHANGE_USE_HOLIDAY_DAY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DAY_120\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DAY_150\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DAY_310\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DAY_510\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DAY_520\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGANIZATION_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0.00%","36",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_search");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","21","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("조회년월");
            obj.set_tooltiptext("조회년월");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","0%","0",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0%","-1",null,"43","97.83%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","0%",null,null,"10","76.88%","0",null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","10.24%","1",null,null,"88.66%","-1",null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","213","10","17","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_unit");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","400","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("부서");
            obj.set_tooltiptext("부서");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_organizationName","480","11","140","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_orgName","620","11","22","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("cal_startDate","98","11","165","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_url("common::com_monthCalendar.xfdl");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("cal_endDate","268","11","165","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_url("common::com_monthCalendar.xfdl");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_personId","668","11","31","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_background("aqua");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_organizationId","699","11","140","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"8","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"8","60","20","76",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0.00%","27",null,"9","1.09%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","0","78",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","161","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("팀원 근태 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("팀원 근태 현황");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_attendanceStatusList","169","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_payStatus","0","34",null,null,"0","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_attendanceStatusList");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서\" tooltiptext=\"부서\"/><Cell col=\"1\" text=\"직급\" tooltiptext=\"직급\"/><Cell col=\"2\" text=\"사번\" tooltiptext=\"사번\"/><Cell col=\"3\" text=\"성명\" tooltiptext=\"성명\"/><Cell col=\"4\" text=\"연휴부여\" tooltiptext=\"연휴부여\"/><Cell col=\"5\" text=\"연휴사용\" tooltiptext=\"연휴사용\"/><Cell col=\"6\" text=\"대휴부여\" tooltiptext=\"대휴부여\"/><Cell col=\"7\" text=\"대휴사용\" tooltiptext=\"대휴사용\"/><Cell col=\"8\" text=\"청휴\" tooltiptext=\"청휴\"/><Cell col=\"9\" text=\"출장\" tooltiptext=\"출장\"/><Cell col=\"10\" text=\"대체근무&#13;&#10;시간\" tooltiptext=\"대체근무시간\"/><Cell col=\"11\" text=\"지각/조퇴\" tooltiptext=\"지각/조퇴\"/><Cell col=\"12\" text=\"결근\" tooltiptext=\"결근\"/></Band><Band id=\"body\"><Cell text=\"bind:ORG_NAME\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:GRADE_NAME\"/><Cell col=\"2\" text=\"bind:EMPLOYEE_NUMBER\"/><Cell col=\"3\" text=\"bind:EMP_NAME\"/><Cell col=\"4\" text=\"bind:YEARLY_GRANT_HOLIDAY_DAY\"/><Cell col=\"5\" text=\"bind:YEARLY_USE_HOLIDAY_DAY\"/><Cell col=\"6\" text=\"bind:EXCHANGE_GRANT_HOLIDAY_DAY\"/><Cell col=\"7\" text=\"bind:EXCHANGE_USE_HOLIDAY_DAY\"/><Cell col=\"8\" text=\"bind:DAY_120\"/><Cell col=\"9\" text=\"bind:DAY_150\"/><Cell col=\"10\" text=\"bind:DAY_310\"/><Cell col=\"11\" text=\"bind:DAY_510\"/><Cell col=\"12\" text=\"bind:DAY_520\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_monthCalendar.xfdl");
        };
        
        // User Script
        this.registerScript("PAY40240M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 팀원근태 현황
         * 파일명 		: pay40240.xfdl
         *
         * 설  명		: 팀원 근태현황 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.01.20	유성연   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/


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
        	 this.monthClear();
        	 var personId = this.gf_getPersonId();
        	 this.div_search.form.edt_personId.set_value(personId);
        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        // 조회 조건 초기화
        this.fn_searchClear = function(obj,e)
        {
        	 this.monthClear();
        };


        this.monthClear = function()
        {
        	this.div_search.form.cal_startDate.form.msk_month.set_value(this.gfn_getYearMonth());
        	this.div_search.form.cal_endDate.form.msk_month.set_value(this.gfn_getYearMonth());
        }


        // 검색 기능
        this.fn_search = function (obj, e)
        {
        	// 팀원 근태 현황 데이터셋 삭제
        	this.ds_attendanceStatusList.clearData();

        // 	trace("FROM_DATE       => " + this.div_search.form.cal_startDate.form.msk_month.value);
        // 	trace("TO_DATE         => " + this.div_search.form.cal_endDate.form.msk_month.value);
        // 	trace("ORGANIZATION_ID => " + this.div_search.form.edt_organizationId.value);
        // 	trace("PERSON_ID       => " + this.gf_getPersonId());

        	// 검색조건 삭제 및 한행 추가
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();

        	// 검색조건 각 항목별 값 할당
         	this.ds_search.setColumn(nRow, "FROM_DATE",       this.div_search.form.cal_startDate.form.msk_month.value);
         	this.ds_search.setColumn(nRow, "TO_DATE",         this.div_search.form.cal_endDate.form.msk_month.value);
         	this.ds_search.setColumn(nRow, "ORGANIZATION_ID", this.div_search.form.edt_organizationId.value);
         	this.ds_search.setColumn(nRow, "PERSON_ID",       this.gf_getPersonId()); // 로그인 개인ID("57055");

        	//trace(this.ds_search.saveXML("ds_search", "nomal"));

        	// 팀원 근태 현황 조회
        	var sSvcID       = "selectPayAttendanceStatusList.do";
        	var sController  = "/pay40240/selectPayAttendanceStatusList.do";
        	var sInDatasets  = "INPUT=ds_search";
        	var sOutDatasets = "ds_attendanceStatusList=output";
        	var sArgs        = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        //************************************************
        // 기능 : 팝업호출
        //************************************************
        this.fn_pupUp = function(obj,e)
        {
        	var oArg = {};

        	this.div_search.form.edt_organizationId.set_value("");

        	if (this.div_search.form.edt_organizationName.value != "")
        	{
        		oArg.arg_type        = "BA";
        	}
        	else
        	{
        		oArg.arg_type        = "B";
        	}
        	oArg.arg_popupCd     = "P00210";
        	oArg.arg_popupNm     = "부서 검색";
        	oArg.arg_rtnCols     = "ORG_ID|ORG_NAME";
        	oArg.arg_paramCols   = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr   = "DEPT_NM=" + this.div_search.form.edt_organizationName.value;
        	this.gfn_openPopup( "POPUP_ORGANIZATION", "cmd::CMSA00100P.xfdl", oArg, "width=700,height=500");
        };

        //************************************************
        // 기능 : 팝업 CallBack
        //************************************************
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	// 부서 팝업에서 선택한 부서ID 및 부서명을 조회조건에 매핑
        	if(sPopupId == "POPUP_ORGANIZATION")
        	{
        		this.div_search.form.edt_organizationId.set_value(rtn[0]);
        		this.div_search.form.edt_organizationName.set_value(rtn[1]);
        	}
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
                if (trId == "selectPayAttendanceStatusList") //조회 service name
        		{
        				if(this.ds_attendanceStatusList.rowcount<1){
        					this.gfn_Message("NotExistList", "팀원현황", "info", "ok");
        					return;
        			}
        	    }
            }
        };

        this.fn_organizationName_changed = function(obj,e)
        {
        	// 부서명이 공백이면 부서ID값을 clear
        	if ( this.gfn_isNull(obj.value) )
        		this.div_search.form.edt_organizationId.set_value("");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.Static00.addEventHandler("onclick",this.div_search_Static00_onclick,this);
            this.div_search.form.edt_organizationName.addEventHandler("onchanged",this.fn_organizationName_changed,this);
            this.div_search.form.btn_orgName.addEventHandler("onclick",this.fn_pupUp,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("PAY40240M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
