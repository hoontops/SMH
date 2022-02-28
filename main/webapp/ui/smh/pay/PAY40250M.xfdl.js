(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PAY40250M");
            this.set_titletext("팀원 출근 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGANIZATION_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_HjspayCalendar", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"WORK_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORGANIZATION_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ATTENDANCE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"LATE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"LATE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CALENDAR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CALENDAR_TYPE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SHOW_COMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ATTENDANCE_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_PERSON_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"HJSPAY_CALENDAR_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"COMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPAY_CALENDAR_SEQ_PK\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LATE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENTS_SCR\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE1\" type=\"STRING\" size=\"256\"/><Column id=\"LATE_CODE_ACTION_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lookupCodeLate", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"NAME\"/></Row><Row><Col id=\"CODE\">510</Col><Col id=\"NAME\">지각</Col></Row><Row><Col id=\"CODE\">520</Col><Col id=\"NAME\">결근</Col></Row><Row><Col id=\"CODE\">530</Col><Col id=\"NAME\">조퇴</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0.00%","36",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_search");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","21","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("기간");
            obj.set_tooltiptext("기간");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","0%","0",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0%","-1",null,"43","97.83%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
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
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","10.24%","1",null,null,"88.66%","-1",null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","338","0","20","43",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","360","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("부서");
            obj.set_tooltiptext("부서");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_organizationName","440","10","120","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("Button02","560","10","22","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_finder");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","602","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("성명");
            obj.set_tooltiptext("성명");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_empName","682","10","120","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_fromDate","103","10","110","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","213","10","17","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_unit");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_toDate","230","10","110","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_personId","802","10","52","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_enable("false");
            obj.set_background("aqua");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_organizationId","852","10","52","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_visible("false");
            obj.set_enable("false");
            obj.set_background("aquamarine");
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

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("팀원 출근 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("팀원 출근 현황");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","60","20","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_tooltiptext("저장");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_attendanceTeamList","0","34",null,null,"0","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_HjspayCalendar");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"60\"/><Column size=\"130\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"출근일자\" tooltiptext=\"출근일자\"/><Cell col=\"1\" text=\"요일\" tooltiptext=\"요일\"/><Cell col=\"2\" text=\"부서\" tooltiptext=\"부서\"/><Cell col=\"3\" text=\"직급\" tooltiptext=\"직급\"/><Cell col=\"4\" text=\"사번\" tooltiptext=\"사번\"/><Cell col=\"5\" text=\"성명\" tooltiptext=\"성명\"/><Cell col=\"6\" text=\"출근시각\" tooltiptext=\"출근시각\"/><Cell col=\"7\" text=\"지각여부\" tooltiptext=\"지각여부\"/><Cell col=\"8\" text=\"지각여부(DB)\"/><Cell col=\"9\" text=\"key\"/><Cell col=\"10\" text=\"근태유형\" tooltiptext=\"근태유형\"/><Cell col=\"11\" text=\"비고\" tooltiptext=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:WORK_DATE\"/><Cell col=\"1\" text=\"bind:WEEK_DAY\"/><Cell col=\"2\" text=\"bind:ORG_NAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:GRADE_NAME\"/><Cell col=\"4\" text=\"bind:EMPLOYEE_NUMBER\"/><Cell col=\"5\" text=\"bind:EMP_NAME\"/><Cell col=\"6\" text=\"bind:ATTENDANCE_TIME\"/><Cell col=\"7\" text=\"bind:LATE_CODE\" displaytype=\"combotext\" edittype=\"expr:dataset.getColumn(currow, &quot;LATE_CODE_ACTION_YN&quot;)==&quot;Y&quot;?&apos;combo&apos;:&apos;none&apos;\" combocodecol=\"CODE\" combodataset=\"ds_lookupCodeLate\" combodatacol=\"NAME\"/><Cell col=\"8\" text=\"bind:LATE_YN\"/><Cell col=\"9\" text=\"bind:HJSPAY_CALENDAR_SEQ_PK\"/><Cell col=\"10\" text=\"bind:CALENDAR_TYPE_NAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:COMMENTS_SCR\" textAlign=\"left\" displaytype=\"text\" edittype=\"text\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_HjspayCalendar","219","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
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

        };
        
        // User Script
        this.registerScript("PAY40250M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: SM상선 myHR 고도화
         * 업무명 		: 팀원근태 현황
         * 파일명 		: pay40250.xfdl
         * 설  명		: 팀원 출근 현황을 조회 및 지각정보를 수정하는 화면
                          Grid의 edittype => dataset.getColumn(currow, "LATE_CODE_ACTION_YN")=="Y"?'combo':'none'
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.23	권택진   	최초작성
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	 this.nfn_formInit(obj);
        	 this.div_search.form.edt_personId.set_value(this.gf_getPersonId());

        	 // 본 화면 검색조건 초기값 설정
        	 this.fn_formInit();
        };


        /*
         * 공통 화면 초기화 후 본 화면에서 초기값 설정
         */
        this.fn_formInit = function ()
        {
        	// 현재일자 (From, To)
        	this.div_search.form.cal_fromDate.set_value(this.gfn_today());
        	this.div_search.form.cal_toDate.set_value(this.gfn_today());
        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
         /*
         * 조회
         */
         this.fn_search = function (obj, e)
        {
        	// 팀원 근태 현황 데이터셋 삭제
        	this.ds_HjspayCalendar.clearData();

        	// 검색조건 삭제 및 한행 추가
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();

        	// 검색조건 각 항목별 값 할당
         	this.ds_search.setColumn(nRow, "FROM_DATE",       this.div_search.form.cal_fromDate.value);
         	this.ds_search.setColumn(nRow, "TO_DATE",         this.div_search.form.cal_toDate.value);
         	this.ds_search.setColumn(nRow, "ORGANIZATION_ID", this.div_search.form.edt_organizationId.value);
         	this.ds_search.setColumn(nRow, "PERSON_ID",       this.gf_getPersonId()); // 로그인 개인ID("57055");
        	this.ds_search.setColumn(nRow, "EMP_NAME",        this.div_search.form.edt_empName.value);

        	// trace(this.ds_search.saveXML());

        	// 팀원 근태 현황 조회
        	var sSvcID       = "selectHjspayCalendarList.do";
        	var sController  = "/pay40250/selectHjspayCalendarList.do";
        	var sInDatasets  = "INPUT=ds_search";
        	var sOutDatasets = "ds_HjspayCalendar=output";
        	var sArgs        = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_HjspayCalendar) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	// trace(this.ds_HjspayCalendar.saveXML("Dataset", "V"));

        	// ------------------------------------------------------------------------------------------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// ------------------------------------------------------------------------------------------------------------
        	var sSvcID 			= "saveHjspayCalendar";
        	var sController 	= "/pay40250/saveHjspayCalendar.do";
        	var sInDatasets 	= "INPUT=ds_HjspayCalendar:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


         /*
         * 팝업 호출 : 부서
         */
        this.fn_pupUp = function(obj,e)
        {
        	var oArg = {};

        	// 부서 팝업 호출되면 기존 부서ID Clear
        	this.div_search.form.edt_organizationId.set_value("");

        	oArg.arg_type = (this.div_search.form.edt_organizationName.value) != "" ? "BA" : "B";

        	oArg.arg_popupCd     = "P00210";
        	oArg.arg_popupNm     = "부서 검색";
        	oArg.arg_rtnCols     = "ORG_ID|ORG_NAME";
        	oArg.arg_paramCols   = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr   = "DEPT_NM=" + this.div_search.form.edt_organizationName.value;
        	this.gfn_openPopup( "POPUP_ORGANIZATION", "cmd::CMSA00100P.xfdl", oArg, "width=700,height=500");
        };


        /*
         * 팝업 CallBack : 부서
         */
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


        this.fn_searchClear = function()
        {
        	this.fn_formInit();
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
        		// 서비스ID : 조회
                if (trId == "selectHjspayCalendarList")
        		{
        				if(this.ds_attendanceStatusList.rowcount<1){
        					this.gfn_Message("NotExistList", "팀원출근현황", "info", "ok");
        					return;
        			}
        	    }

        		// 서비스ID : 저장
        		if (trId == "saveHjspayCalendar")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search();
        		}
            }
        };


        /**************************************************************************
         * 6. 기타 이벤트
         ***************************************************************************/
        /*
         부서명 공백일 경우 부서ID Clear
         */
        this.fn_organizationName_changed = function(obj,e)
        {
        	if ( this.gfn_isNull(obj.value) )
        		this.div_search.form.edt_organizationId.set_value("");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.edt_organizationName.addEventHandler("onchanged",this.fn_organizationName_changed,this);
            this.div_search.form.Button02.addEventHandler("onclick",this.fn_pupUp,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.btn_save.addEventHandler("onclick",this.fn_save,this);
        };
        this.loadIncludeScript("PAY40250M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
