(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PAY40210M");
            this.set_titletext("근태승인");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"COND_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGANIZATION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORGANIZATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_attendanceApproveList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"APPLY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"CALENDER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"CALENDER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPAY_WORK_APPLY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"ALTER_WORK_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_LOCAL\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_attendanceApproveDetail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HJSPAY_WORK_APPLY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPLY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CALENDER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CALENDER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"ALTER_WORK_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_LOCAL\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_attendanceApproveInstead", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"APPLY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CALENDER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CALENDER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"ALTER_WORK_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_LOCAL\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_employeeList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"DIFFDAY\" type=\"STRING\" size=\"256\"/><Column id=\"DIFFTIME\" type=\"STRING\" size=\"256\"/><Column id=\"HOLIDAY_DAY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CloseYn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"APPLY_YYYY\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSE_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("조회년월");
            obj.set_tooltiptext("조회년월");
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

            obj = new Static("Static07","191","0",null,"43","697",null,null,null,null,null,this.div_search.form);
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

            obj = new Static("Static00_00_00","212","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("부서");
            obj.set_tooltiptext("부서");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_organization","292","10","120","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_organization","412","10","22","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_finder");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","454","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("상태");
            obj.set_tooltiptext("상태");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_status","534","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_codecolumn("C,HJS_HR_APPROVAL_STATUS,ALL,Y,Y");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_condDate","101","10","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_url("common::com_monthCalendar.xfdl");
            obj.set_text("____-__");
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

            obj = new Button("btn_favorite","sta_title:2","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Tab("div_work","0","78",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage0",this.div_work);
            obj.set_text("근태신청내역");
            obj.set_tooltiptext("근태신청내역");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_listApproval",null,"7","60","20","66",null,null,null,null,null,this.div_work.Tabpage0.form);
            obj.set_taborder("0");
            obj.set_text("승인");
            obj.set_tooltiptext("승인");
            this.div_work.Tabpage0.addChild(obj.name, obj);

            obj = new Button("btn_listReturn",null,"7","60","20","0",null,null,null,null,null,this.div_work.Tabpage0.form);
            obj.set_taborder("1");
            obj.set_text("반려");
            obj.set_tooltiptext("반려");
            this.div_work.Tabpage0.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work.Tabpage0.form);
            obj.set_taborder("3");
            obj.set_text("근태신청내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("근태신청내역");
            this.div_work.Tabpage0.addChild(obj.name, obj);

            obj = new Grid("grd_attendanceApproveList","0","34",null,null,"0","10",null,null,null,null,this.div_work.Tabpage0.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_attendanceApproveList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"상태\" tooltiptext=\"상태\"/><Cell col=\"2\" text=\"신청일자\" tooltiptext=\"신청일자\"/><Cell col=\"3\" text=\"부서\" tooltiptext=\"부서\"/><Cell col=\"4\" text=\"직급\" tooltiptext=\"직급\"/><Cell col=\"5\" text=\"사번\" tooltiptext=\"사번\"/><Cell col=\"6\" text=\"성명\" tooltiptext=\"성명\"/><Cell col=\"7\" text=\"승인권자\" tooltiptext=\"승인권자\"/><Cell col=\"8\" text=\"근태유형\" tooltiptext=\"근태유형\"/><Cell col=\"9\" text=\"시작일자\" tooltiptext=\"시작일자\"/><Cell col=\"10\" text=\"종료일자\" tooltiptext=\"종료일자\"/><Cell col=\"11\" text=\"일수/시간\" tooltiptext=\"일수/시간\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:STATUS_NAME\"/><Cell col=\"2\" text=\"bind:APPLY_DATE\"/><Cell col=\"3\" text=\"bind:ORG_NAME\"/><Cell col=\"4\" text=\"bind:GRADE_NAME\"/><Cell col=\"5\" text=\"bind:EMPLOYEE_NUMBER\"/><Cell col=\"6\" text=\"bind:EMP_NAME\"/><Cell col=\"7\" text=\"bind:MGR_NAME\"/><Cell col=\"8\" text=\"bind:CALENDER_NAME\"/><Cell col=\"9\" text=\"bind:START_DATE\" calendardateformat=\"yyyy-MM-dd HH:mm\"/><Cell col=\"10\" text=\"bind:END_DATE\" calendardateformat=\"yyyy-MM-dd HH:mm\"/><Cell col=\"11\" text=\"bind:REQUEST_DAY\"/></Band></Format></Formats>");
            this.div_work.Tabpage0.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_attendanceApproveList","219","0","140","34",null,null,null,null,null,null,this.div_work.Tabpage0.form);
            obj.set_taborder("4");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.Tabpage0.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work);
            obj.set_text("근태신청");
            obj.set_tooltiptext("근태신청");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","241","34",null,null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("근태 신청 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("근태 신청 정보");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_basicInfo","0","34",null,"63","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("신청일자");
            this.div_work.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate","0","31","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("구분");
            this.div_work.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_applyDate","135","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_calenderName","135","36","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,HJS_HR_ATTENDANCE_TYPE,SEL,Y,Y");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_index("-1");
            this.div_work.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_site00","300","0","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("작성자");
            this.div_work.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_empName","435","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_alterWorkDay","300","31","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_text("대체근무일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("대체근무일");
            this.div_work.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_alterWorkDay","435","36","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Div("div_00","0","96",null,"164","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_basicInfo00","0","0",null,"63","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line_notop");
            obj.set_text("");
            this.div_work.Tabpage1.form.div_00.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("0");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("기간");
            this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Calendar("cal_startDate0","135","5","100","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("Static16_01","241","5","27","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("2");
            obj.set_text("부터");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Calendar("cal_endDate0","281","5","100","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("Static16_01_00","387","5","27","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("4");
            obj.set_text("까지");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Edit("edt_requestDay0","430","5","30","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","466","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("6");
            obj.set_text("일간)");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("sta_site00","0","31","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("7");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("내용");
            this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Edit("edt_approvalContents0","135","36","565","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("8");
            obj.set_textAlign("left");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_00","423","5","10","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("9");
            obj.set_text("(");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Div("div_comment","0","62",null,"63","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line_notop");
            obj.set_text("");
            this.div_work.Tabpage1.form.div_00.addChild(obj.name, obj);

            obj = new Static("sta_site00","0","0","130","62",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_comment.form);
            obj.set_taborder("6");
            obj.set_text("Comment");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("Comment");
            this.div_work.Tabpage1.form.div_00.form.div_comment.addChild(obj.name, obj);

            obj = new Static("sta_00","130","0",null,"61","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_comment.form);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            this.div_work.Tabpage1.form.div_00.form.div_comment.addChild(obj.name, obj);

            obj = new TextArea("txa_00","135","5","768","52",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_comment.form);
            obj.set_taborder("2");
            this.div_work.Tabpage1.form.div_00.form.div_comment.addChild(obj.name, obj);

            obj = new Div("div_01","0","216",null,"164","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_visible("false");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_basicInfo00_00","0","0",null,"63","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line_notop");
            obj.set_text("");
            this.div_work.Tabpage1.form.div_01.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("0");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("기간");
            this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Static("Static16_01","294","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("1");
            obj.set_text("부터");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Static("Static16_01_00","493","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("2");
            obj.set_text("까지");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Edit("edt_requestDay1","533","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("3");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","579","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("4");
            obj.set_text("시간");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_startDate1","135","5","100","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_00","238","5","50","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("6");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_endDate1","334","5","100","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_00_00","437","5","50","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("8");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Static("sta_site00","0","31","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("9");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("내용");
            this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Edit("edt_approvalContents1","135","36","565","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("10");
            obj.set_textAlign("left");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Div("div_comment","0","62",null,"63","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line_notop");
            obj.set_text("");
            this.div_work.Tabpage1.form.div_01.addChild(obj.name, obj);

            obj = new Static("sta_site00","0","0","130","62",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_comment.form);
            obj.set_taborder("6");
            obj.set_text("Comment");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("Comment");
            this.div_work.Tabpage1.form.div_01.form.div_comment.addChild(obj.name, obj);

            obj = new Static("sta_00","130","0",null,"61","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_comment.form);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            this.div_work.Tabpage1.form.div_01.form.div_comment.addChild(obj.name, obj);

            obj = new TextArea("txa_00","135","5","768","52",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_comment.form);
            obj.set_taborder("2");
            this.div_work.Tabpage1.form.div_01.form.div_comment.addChild(obj.name, obj);

            obj = new Div("div_02","0","346",null,"165","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_visible("false");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_basicInfo00_01","0","0",null,"63","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line_notop");
            obj.set_text("");
            this.div_work.Tabpage1.form.div_02.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("0");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("기간");
            this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Static("sta_site00","0","31","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("1");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("내용");
            this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Edit("edt_approvalContents2","135","36","565","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("2");
            obj.set_textAlign("left");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Calendar("cal_startDate2","135","5","100","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Static("Static16_01","241","5","27","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("4");
            obj.set_text("부터");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Calendar("cal_endDate2","281","5","100","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Static("Static16_01_00","387","5","27","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("6");
            obj.set_text("까지");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_00","423","5","10","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("7");
            obj.set_text("(");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Edit("edt_requestDay2","430","5","30","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("8");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","466","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("9");
            obj.set_text("일간)");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Div("div_comment","0","62",null,"63","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line_notop");
            obj.set_text("");
            this.div_work.Tabpage1.form.div_02.addChild(obj.name, obj);

            obj = new Static("sta_site00","0","0","130","62",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_comment.form);
            obj.set_taborder("6");
            obj.set_text("Comment");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("Comment");
            this.div_work.Tabpage1.form.div_02.form.div_comment.addChild(obj.name, obj);

            obj = new Static("sta_00","130","0",null,"61","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_comment.form);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            this.div_work.Tabpage1.form.div_02.form.div_comment.addChild(obj.name, obj);

            obj = new TextArea("txa_00","135","5","768","52",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_comment.form);
            obj.set_taborder("2");
            this.div_work.Tabpage1.form.div_02.form.div_comment.addChild(obj.name, obj);

            obj = new Div("div_03","0","466",null,"225","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_visible("false");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_basicInfo00_02","0","0",null,"125","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line_notop");
            obj.set_text("");
            this.div_work.Tabpage1.form.div_03.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("0");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("기간");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Static("sta_site00","0","31","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("1");
            obj.set_text("국내외구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("국내외구분");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Static("sta_site00_00","0","62","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("2");
            obj.set_text("출장지역");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("출장지역");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Combo("cbo_messageclassid","135","36","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,HJS_HR_BUSINESS_TYPE,NAN,Y,Y");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_index("-1");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","135","67","565","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("4");
            obj.set_textAlign("center");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Static("sta_site00_01","0","93","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("5");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("내용");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Edit("edt_approvalContents3","135","98","565","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("6");
            obj.set_textAlign("left");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Calendar("cal_startDate3","135","5","100","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Static("Static16_01","241","5","27","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("8");
            obj.set_text("부터");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Calendar("cal_endDate3","281","5","100","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Static("Static16_01_00","387","5","27","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("10");
            obj.set_text("까지");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_00","423","5","10","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("11");
            obj.set_text("(");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Edit("edt_requestDay3","430","5","30","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_initvalueid("edt_requestDay3");
            obj.set_taborder("12");
            obj.set_textAlign("center");
            obj.set_enable("false");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","466","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("13");
            obj.set_text("일간)");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Div("div_comment","0","124",null,"63","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line_notop");
            obj.set_text("");
            this.div_work.Tabpage1.form.div_03.addChild(obj.name, obj);

            obj = new Static("sta_site00","0","0","130","62",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_comment.form);
            obj.set_taborder("6");
            obj.set_text("Comment");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("Comment");
            this.div_work.Tabpage1.form.div_03.form.div_comment.addChild(obj.name, obj);

            obj = new Static("sta_00","130","0",null,"61","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_comment.form);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            this.div_work.Tabpage1.form.div_03.form.div_comment.addChild(obj.name, obj);

            obj = new TextArea("txa_00","135","5","768","52",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_comment.form);
            obj.set_taborder("2");
            this.div_work.Tabpage1.form.div_03.form.div_comment.addChild(obj.name, obj);

            obj = new Button("btn_approval",null,"7","60","20","66",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("승인");
            obj.set_tooltiptext("승인");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_returned",null,"7","60","20","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("반려");
            obj.set_tooltiptext("반려");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_list",null,"7","60","20","132",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("목록");
            obj.set_tooltiptext("목록");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work);
            obj.set_text("근태신청(대리)");
            obj.set_tooltiptext("근태신청(대리)");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","241","34",null,null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("근태 신청 (대리)");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("근태 신청 정보");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"7","60","20","66",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_tooltiptext("취소");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","60","20","0",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_basicInfo","0","34",null,"63","0",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","130","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("신청일자");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate","0","31","130","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_text("<fc v=\'red\'>*</fc>구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("구분");
            obj.set_usedecorate("true");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_applyDate","135","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_calenderName","135","36","130","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,HJS_HR_ATTENDANCE_TYPE,SEL,Y,Y");
            obj.set_text("");
            obj.set_index("-1");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_site00","300","0","130","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("작성자");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_empName","435","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_alterWorkDay","300","31","130","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_text("<fc v=\'red\'>*</fc>대체근무일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("대체근무일");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_alterWorkDay","435","36","130","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_site00_01","600","0","130","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("8");
            obj.set_text("<fc v=\'red\'>*</fc>성명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("작성자");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_personId","735","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("9");
            obj.set_codecolumn("PERSON_ID");
            obj.set_innerdataset("ds_employeeList");
            obj.set_datacolumn("EMP_NAME");
            obj.set_index("-1");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Div("div_00","0","96",null,"164","0",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_basicInfo00","0","0",null,"63","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line_notop");
            obj.set_text("");
            this.div_work.Tabpage2.form.div_00.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","130","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("0");
            obj.set_text("<fc v=\'red\'>*</fc>기간");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("기간");
            this.div_work.Tabpage2.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Calendar("cal_startDate0","135","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage2.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("Static16_01","271","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("2");
            obj.set_text("부터");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage2.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Calendar("cal_endDate0","311","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage2.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("Static16_01_00","447","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("4");
            obj.set_text("까지");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage2.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Edit("edt_requestDay0","487","5","50","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.div_work.Tabpage2.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","543","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("6");
            obj.set_text("일");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage2.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("sta_site00","0","31","130","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("7");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("내용");
            this.div_work.Tabpage2.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Edit("edt_approvalContents0","135","36","565","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("8");
            obj.set_textAlign("left");
            this.div_work.Tabpage2.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Div("div_01","0","166",null,"164","0",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_visible("false");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_basicInfo00_00","0","0",null,"63","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line_notop");
            obj.set_text("");
            this.div_work.Tabpage2.form.div_01.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","130","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("0");
            obj.set_text("<fc v=\'red\'>*</fc>기간");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("기간");
            this.div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Static("Static16_01","304","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("1");
            obj.set_text("부터");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Static("Static16_01_00","513","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("2");
            obj.set_text("까지");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Edit("edt_requestDay1","553","5","50","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("3");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","609","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("4");
            obj.set_text("시간");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_startDate1","135","5","110","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_00","248","5","50","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("6");
            obj.set_format("##:##");
            obj.set_type("string");
            this.div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_endDate1","344","5","110","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_00_00","457","5","50","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("8");
            obj.set_format("##:##");
            obj.set_type("string");
            this.div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Static("sta_site00","0","31","130","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("9");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("내용");
            this.div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Edit("edt_approvalContents1","135","36","565","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("10");
            obj.set_textAlign("left");
            this.div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Div("div_02","0","236",null,"165","0",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_visible("false");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_basicInfo00_01","0","0",null,"63","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_02.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line_notop");
            obj.set_text("");
            this.div_work.Tabpage2.form.div_02.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","130","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("0");
            obj.set_text("<fc v=\'red\'>*</fc>기간");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("기간");
            this.div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Calendar("cal_startDate2","135","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Static("Static16_01","271","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("2");
            obj.set_text("부터");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Calendar("cal_endDate2","311","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Static("Static16_01_00","447","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("4");
            obj.set_text("까지");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Edit("edt_requestDay2","487","5","50","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","543","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("6");
            obj.set_text("일");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Button("btn_apply","583","5","110","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("7");
            obj.set_text("0.5일 신청");
            obj.set_tooltiptext("0.5일 신청");
            this.div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Static("sta_site00","0","31","130","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("8");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("내용");
            this.div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Edit("edt_approvalContents2","135","36","565","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("9");
            obj.set_textAlign("left");
            this.div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Div("div_03","0","296",null,"225","0",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_visible("false");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_basicInfo00_02","0","0",null,"125","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_03.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line_notop");
            obj.set_text("");
            this.div_work.Tabpage2.form.div_03.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","130","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("0");
            obj.set_text("<fc v=\'red\'>*</fc>기간");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("기간");
            this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Calendar("cal_startDate3","135","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Static("Static16_01","271","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("2");
            obj.set_text("부터");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Calendar("cal_endDate3","311","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Static("Static16_01_00","447","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("4");
            obj.set_text("까지");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Edit("edt_requestDay3","487","5","50","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","543","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("6");
            obj.set_text("일");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Static("sta_site00","0","31","130","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("7");
            obj.set_text("<fc v=\'red\'>*</fc>국내외구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("국내외구분");
            this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Static("sta_site00_00","0","62","130","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("8");
            obj.set_text("출장지역");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("출장지역");
            this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Combo("cbo_messageclassid","135","36","130","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,HJS_HR_BUSINESS_TYPE,NAN,Y,Y");
            obj.set_index("-1");
            this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Edit("edt_businessArea","135","67","565","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("10");
            obj.set_textAlign("left");
            this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Static("sta_site00_01","0","93","130","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("11");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("내용");
            this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Edit("edt_approvalContents3","135","98","565","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("12");
            obj.set_textAlign("left");
            this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Static("Static13","922","213","240","147",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("false");
            obj.set_background("blue");
            obj.set_padding("10px");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            obj.set_text("근태 신청 구분에 따른 div ID 참고\r\n(근태신청/근태신청(대리) 동일)\r\n\r\ndiv_00 : 연휴, 반휴(대체근무일 hide)\r\ndiv_01 : 대체근무, 외출(대체근무일 hide)\r\ndiv_02 : 대체휴일(대체근무일 show)\r\ndiv_03 : 출장(대체근무일 hide)");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cbo_status","value","ds_search","STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_organization","value","ds_search","ORGANIZATION_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.Tabpage1.form.div_basicInfo.form.cal_applyDate","value","ds_attendanceApproveDetail","APPLY_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_work.Tabpage1.form.div_basicInfo.form.edt_empName","value","ds_attendanceApproveDetail","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_work.Tabpage1.form.div_basicInfo.form.cbo_calenderName","value","ds_attendanceApproveDetail","CALENDER_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_work.Tabpage1.form.div_00.form.div_basicInfo00.form.edt_approvalContents0","value","ds_attendanceApproveDetail","CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_work.Tabpage1.form.div_00.form.div_basicInfo00.form.cal_startDate0","value","ds_attendanceApproveDetail","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_work.Tabpage1.form.div_00.form.div_basicInfo00.form.cal_endDate0","value","ds_attendanceApproveDetail","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form.edt_approvalContents1","value","ds_attendanceApproveDetail","CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form.cal_startDate2","value","ds_attendanceApproveDetail","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form.cal_endDate3","value","ds_attendanceApproveDetail","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form.cal_startDate3","value","ds_attendanceApproveDetail","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form.cal_startDate1","value","ds_attendanceApproveDetail","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form.cal_endDate1","value","ds_attendanceApproveDetail","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form.cal_endDate2","padding","ds_attendanceApproveDetail","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form.cal_endDate1","padding","ds_attendanceApproveDetail","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form.cal_endDate3","padding","ds_attendanceApproveDetail","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form.edt_approvalContents2","value","ds_attendanceApproveDetail","CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form.edt_approvalContents3","value","ds_attendanceApproveDetail","CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form.cal_endDate2","value","ds_attendanceApproveDetail","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_work.Tabpage1.form.div_00.form.div_basicInfo00.form.edt_requestDay0","value","ds_attendanceApproveDetail","REQUEST_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form.edt_requestDay1","value","ds_attendanceApproveDetail","REQUEST_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form.edt_requestDay2","value","ds_attendanceApproveDetail","REQUEST_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form.edt_requestDay3","value","ds_attendanceApproveDetail","REQUEST_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_work.Tabpage1.form.div_basicInfo.form.cal_alterWorkDay","value","ds_attendanceApproveDetail","ALTER_WORK_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form.cbo_messageclassid","value","ds_attendanceApproveDetail","BUSINESS_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form.edt_00_00_00","value","ds_attendanceApproveDetail","BUSINESS_LOCAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form.mae_00_00","value","ds_attendanceApproveDetail","START_DATE_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form.mae_00_00_00","value","ds_attendanceApproveDetail","END_DATE_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_work.Tabpage2.form.div_basicInfo.form.cal_applyDate","value","ds_attendanceApproveInstead","APPLY_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_work.Tabpage2.form.div_basicInfo.form.edt_empName","value","ds_attendanceApproveInstead","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_work.Tabpage2.form.div_basicInfo.form.cbo_calenderName","value","ds_attendanceApproveInstead","CALENDER_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_work.Tabpage2.form.div_00.form.div_basicInfo00.form.cal_startDate0","value","ds_attendanceApproveInstead","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_work.Tabpage2.form.div_00.form.div_basicInfo00.form.cal_endDate0","value","ds_attendanceApproveInstead","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_work.Tabpage2.form.div_00.form.div_basicInfo00.form.edt_requestDay0","value","ds_attendanceApproveInstead","REQUEST_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div_work.Tabpage2.form.div_00.form.div_basicInfo00.form.edt_approvalContents0","value","ds_attendanceApproveInstead","CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.form.cal_startDate1","value","ds_attendanceApproveInstead","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.form.cal_endDate1","value","ds_attendanceApproveInstead","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.form.mae_00_00","value","ds_attendanceApproveInstead","START_DATE_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.form.mae_00_00_00","value","ds_attendanceApproveInstead","END_DATE_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.form.edt_requestDay1","value","ds_attendanceApproveInstead","REQUEST_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.form.cal_startDate2","value","ds_attendanceApproveInstead","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.form.cal_endDate2","value","ds_attendanceApproveInstead","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.form.edt_requestDay2","value","ds_attendanceApproveInstead","REQUEST_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.form.edt_approvalContents2","value","ds_attendanceApproveInstead","CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.form.cal_startDate3","value","ds_attendanceApproveInstead","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.form.cal_endDate3","value","ds_attendanceApproveInstead","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.form.edt_requestDay3","value","ds_attendanceApproveInstead","REQUEST_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.form.cbo_messageclassid","value","ds_attendanceApproveInstead","BUSINESS_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.form.edt_approvalContents3","value","ds_attendanceApproveInstead","CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","div_work.Tabpage1.form.div_00.form.div_comment.form.txa_00","value","ds_attendanceApproveDetail","APPROVAL_CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","div_work.Tabpage1.form.div_01.form.div_comment.form.txa_00","value","ds_attendanceApproveDetail","APPROVAL_CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","div_work.Tabpage1.form.div_02.form.div_comment.form.txa_00","value","ds_attendanceApproveDetail","APPROVAL_CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","div_work.Tabpage1.form.div_03.form.div_comment.form.txa_00","value","ds_attendanceApproveDetail","APPROVAL_CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","div_work.Tabpage2.form.div_basicInfo.form.cbo_personId","value","ds_attendanceApproveInstead","PERSON_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","div_work.Tabpage2.form.div_01.form.div_basicInfo00_00.form.edt_approvalContents1","value","ds_attendanceApproveInstead","CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.form.edt_businessArea","value","ds_attendanceApproveInstead","BUSINESS_LOCAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","div_work.Tabpage2.form.div_basicInfo.form.cal_alterWorkDay","value","ds_attendanceApproveInstead","ALTER_WORK_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_monthCalendar.xfdl");
        };
        
        // User Script
        this.registerScript("PAY40210M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	:
         * 업무명 		: 근태승인
         * 파일명 		: PAY40210M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2022.2.14
         * 설  명		: 근태승인
         *---------------------------------------------------------------------------------------
         * 변경일		변경자			변경내역
         *---------------------------------------------------------------------------------------
         * 2022.02.14	박대호			최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /*===============================================================================
        == apr설명. (apr) 공통함수 목록
        ===============================================================================
        ● fn_initInfo                              : 초기값 세팅
        ● fn_attendanceApproveList                 : 근태승인내역 조회
        ● fn_tabDetailDisplay                		: 상세탭 화면변경
        ● fn_tabDetailData                			: 상세탭 데이터입력
        ● fn_tabInsteadDisplay            			: 근태신청 화면변경
        ● fn_employeeList       					: 근태 대리신청 성명조회
        ● fn_tabInsteadData       					: 근태신청 기초데이터
        ● fn_saveEmployee       					: 근태 대리신청 저장

        */

        /**************************************************************************
         * 1. 필수 include
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
        	this.fn_initInfo();
        	this.fn_employeeList();
        };

        /*******************************************************************************
         * fn_initInfo
         * 기능 : 초기값 세팅
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_initInfo = function ()
        {
        	this.div_search.form.div_condDate.form.fn_initMonthCal(obj, this.gfn_getYearMonth(), null, this.ds_search, "COND_DATE");
        	this.ds_attendanceApproveInstead.setColumn(0, "APPLY_DATE", this.gfn_today());
        	this.ds_attendanceApproveInstead.setColumn(0, "EMP_NAME", this.gf_getUserNm());
        }
        /*******************************************************************************
         * fn_attendanceApproveList
         * 기능 : 근태승인내역 조회
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_attendanceApproveList = function ()
        {
        	if(!this.nfn_isNull(this.ds_search.getColumn(0, "STATUS")))
        	{
        		if(this.ds_search.getColumn(0, "STATUS") == "10" || this.ds_search.getColumn(0, "STATUS") == "30")
        		{
        			this.ds_search.setColumn(0, "ATTRIBUTE6", "N");
        		}
        		else
        		{
        			this.ds_search.setColumn(0, "ATTRIBUTE6", "Y");
        		}
        	}
        	else
        	{
        		this.ds_search.setColumn(0, "ATTRIBUTE6", "");
        	}
        	if(this.nfn_isNull(this.ds_search.getColumn(0, "ORGANIZATION_NAME")))
        	{
        		this.ds_search.setColumn(0,"ORGANIZATION_ID","");
        	}
        	var sSvcID = "selectAttendanceApproveList";
        	var sController = "/pay40210/selectAttendanceApproveList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_attendanceApproveList=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        }

        /*******************************************************************************
         * fn_employeeList
         * 기능 : 근태 대리신청 성명조회
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_employeeList = function ()
        {
        	var sSvcID = "selectEmployeeList";
        	var sController = "/pay40210/selectEmployeeList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_employeeList=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        }
        /*******************************************************************************
         * fn_saveEmployee
         * 기능 : 근태 대리신청 저장
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_saveEmployee = function()
        {
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
         	var sSvcID 			= "saveAttendanceApprove";	// CallBack service name
         	var sController 	= "/pay40210/saveEmployee.do";
         	var sInDatasets 	= "INPUT=ds_attendanceApproveInstead:A";
         	var sOutDatasets 	= "";
         	var sArgs 			= "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
         /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.fn_attendanceApproveList();
        };


        /*
        * 기능 : 검색 초기화
        */
        this.fn_searchClear = function(obj,e)
        {

        };

        /*
        * 기능 : 저장
        */
        this.fn_save = function()
        {
        	if (this.ds_attendanceApproveInstead.rowcount < 1) return;

        	//필수값 체크
        	var objDataset = "ds_attendanceApproveInstead";
        	var strColIdList = "CALENDER_TYPE,START_DATE,END_DATE";
        	var strColNmList = "구분,기간(시작일),기간(종료일)"

        	var calenderType = this.ds_attendanceApproveInstead.getColumn(0, "CALENDER_TYPE");
        	if (calenderType == "140") //대체휴일
        	{
        		strColIdList = strColIdList+",ALTER_WORK_DAY,START_DATE,END_DATE";
        		strColNmList = strColNmList+",대체근무일,기간(시작일),기간(종료일)";
        	}
        	else if (calenderType == "310" || calenderType == "190") // 대체근무, 외출
        	{
        		strColIdList = strColIdList+",START_DATE_TIME,END_DATE_TIME";
        		strColNmList = strColNmList+",시간(시작),시간(종료)";
        	}
            else if (calenderType == "150") // 출장
        	{
        		strColIdList = strColIdList+",START_DATE,END_DATE,BUSINESS_TYPE";
        		strColNmList = strColNmList+",기간(시작일),기간(종료일),국내외구분";
        	}
            var rtn = this.nfn_MandatoryCheckDs(objDataset, strColIdList, strColNmList);
        	if (rtn == false) return;

        	var diffDay = this.gfn_diffDate2(this.ds_attendanceApproveInstead.getColumn(0, "START_DATE") , this.ds_attendanceApproveInstead.getColumn(0, "END_DATE"));
        	if (diffDay < 0)
        	{
        		//기간설정이 잘못 되었습니다. 다시 기간설정을 하여 주시기 바랍니다.
        		this.gfn_Message("ValidateStartEndDate", null, "info", "ok");
        		return;
        	}

        	if(calenderType == "110")//연휴
        	{
        		var sSvcID 			= "selectCheckCloseYn"; 						// CallBack service name
        		var sController 	= "/pay40110/selectCheckCloseYn.do" ;			// CONTROLLER VALUE
        		var sInDatasets 	= "INPUT=ds_attendanceApproveInstead";				// DB INPUT  DATA
        		var sOutDatasets 	= "ds_CloseYn=output";				    		// DB OUTPUT DATA
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        	else if (calenderType == "130")//반휴
        	{
        		//시작일자와 종료일자가 다를 경우
        		if(this.ds_attendanceApproveInstead.getColumn(0, "START_DATE") != this.ds_attendanceApproveInstead.getColumn(0, "END_DATE"))
        		{
        			//반휴신청시 시작일과 종료일은 같아야 합니다.
        			this.gfn_Message("ValidateHalfholidayRequest", null, "info", "ok");
        			return;
        		}
        		var diffDay  = this.fn_checkWorkDayCntWt(this.ds_attendanceApproveInstead, 0);
        		if(diffDay == 0)//공휴일에 반휴쓸경우
        		return;
        	}
        	else if(calenderType == "310")//대체근무
        	{
        		var startMM = this.ds_attendanceApproveInstead.getColumn(0, "START_DATE_TIME").substr(2,2);
        		var endMM = this.ds_attendanceApproveInstead.getColumn(0, "END_DATE_TIME").substr(2,2);
        		var contents = this.ds_attendanceApproveInstead.getColumn(0, "CONTENTS");

        		if((startMM != "00" && startMM != "30") || (endMM != "00" && endMM != "30"))
        		{
        			//분은 00, 30분만 등록할 수 있습니다.
        			this.gfn_Message("CheckTimeMinute", null, "info", "ok");
        			return;
        		}
        // 		if(this.nfn_isNull(contents))
        // 		{
        // 			//대체근무/대휴 신청할 때 내용을 반드시 등록하시기 바랍니다.
        // 			this.gfn_Message("ValidateSubstituteDayRequest", null, "info", "ok");
        // 			return;
        // 		}
        		//지정하신 일자의 대체근무/대체휴일에 동의하십니까? (동의: 확인,  미동의: 취소)
        		var bOK = this.gfn_Message("ValidateSubstituteDayConfirm", null, "conf", "yesno");
        		if (!bOK) return;
        	}
        	else if (calenderType == "140")//대체휴일
        	{
        		var contents = this.ds_attendanceApproveInstead.getColumn(0, "CONTENTS");
        // 		if(this.nfn_isNull(contents))
        // 		{
        // 			//신청할 때 내용을 반드시 등록하시기 바랍니다.
        // 			this.gfn_Message("ValidateAttendanceCommend", null, "info", "ok");
        // 			return;
        // 		}
        		//지정하신 일자의 대체근무/대체휴일에 동의하십니까? (동의: 확인,  미동의: 취소)
        		var bOK = this.gfn_Message("ValidateSubstituteDayConfirm", null, "conf", "yesno");
        		if (!bOK) return;
        	}
        	else if(calenderType == "190")//외출
        	{
        		var contents = this.ds_attendanceApproveInstead.getColumn(0, "CONTENTS");
        // 		if(this.nfn_isNull(contents))
        // 		{
        // 			//신청할 때 내용을 반드시 등록하시기 바랍니다.
        // 			this.gfn_Message("ValidateAttendanceCommend", null, "info", "ok");
        // 			return;
        // 		}
        	}
        	if(calenderType != "110")
        	{
        		//저장
        		this.fn_saveEmployee();
        	}
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
         trace('fn_callBack trId ?' + trId);
         	if (errCD < 0)
         	{
         		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
         	}
        	else
        	{
        		switch(trId)
        		{

        			case "selectAttendanceApproveList" :
         			{
        				this.notFoundView(this.div_work.Tabpage0.form.grd_attendanceApproveList);
        				break;
        			}
        			case "saveAttendanceApprove" :
        			{
        				this.gfn_Message("SuccessSave", null, "info","ok");
        				this.div_work.set_tabindex(0);
        				this.fn_attendanceApproveList();
        				break;
        			}
        			case "selectCheckCloseYn" :
        			{
        				for(var i = 0; i < this.ds_CloseYn.rowcount; i++)
        				{
        					if(this.ds_CloseYn.getColumn(i, "CLOSE_FLAG") == "1")
        					{
        						//[{0}]년도 연차가 이미 마감되었습니다. 담당자에게 문의하여 주시기 바랍니다.
        						this.gfn_Message("ValidateAnnualLeaveClosed",this.ds_CloseYn.getColumn(i, "APPLY_YYYY"), "info","ok");
        						return;
        					}
        				}
        				//저장
        				this.fn_saveEmployee();
        			}

        			default:
        		}
        	}
        };
        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
         /*
         *	기능 : 팝업 관련
         */
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "POPUP_ORGANIZATION")
        	{
        		this.ds_search.setColumn(0,"ORGANIZATION_ID",rtn[0]);
        		this.ds_search.setColumn(0,"ORGANIZATION_NAME",rtn[1]);
        	}
        };
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*******************************************************************************
         * fn_list
         * 기능 : 목록으로 이동
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_list = function ()
        {
        	this.div_work.set_tabindex(0);
        };

        /*******************************************************************************
         * fn_tabDetailDisplay
         * 기능 : 상세탭 화면변경
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_tabDetailDisplay = function (calenderType)
        {

        	this.div_work.Tabpage1.form.div_basicInfo.form.sta_alterWorkDay.set_visible(false);
        	this.div_work.Tabpage1.form.div_basicInfo.form.cal_alterWorkDay.set_visible(false);

        	if (calenderType == "310" || calenderType == "190" ) //대체근무(310), 외출(190) - div_01
        	{
        		this.div_work.Tabpage1.form.div_00.set_visible(false);
        		this.div_work.Tabpage1.form.div_01.set_visible(true);
        		this.div_work.Tabpage1.form.div_02.set_visible(false);
        		this.div_work.Tabpage1.form.div_03.set_visible(false);
        		this.div_work.Tabpage1.form.div_01.set_top("96");
        	}
        	else if (calenderType == "140") //대체휴일(140) - div_02
        	{
        		this.div_work.Tabpage1.form.div_00.set_visible(false);
        		this.div_work.Tabpage1.form.div_01.set_visible(false);
        		this.div_work.Tabpage1.form.div_02.set_visible(true);
        		this.div_work.Tabpage1.form.div_03.set_visible(false);
        		this.div_work.Tabpage1.form.div_02.set_top("96");
        		this.div_work.Tabpage1.form.div_basicInfo.form.sta_alterWorkDay.set_visible(true);
        		this.div_work.Tabpage1.form.div_basicInfo.form.cal_alterWorkDay.set_visible(true);
        	}
        	else if (calenderType == "150") //출장(150) - div_03
        	{
        		this.div_work.Tabpage1.form.div_00.set_visible(false);
        		this.div_work.Tabpage1.form.div_01.set_visible(false);
        		this.div_work.Tabpage1.form.div_02.set_visible(false);
        		this.div_work.Tabpage1.form.div_03.set_visible(true);
        		this.div_work.Tabpage1.form.div_03.set_top("96");
        	}
        	else  //나머지 근태구분 - div_00
        	{
        		this.div_work.Tabpage1.form.div_00.set_visible(true);
        		this.div_work.Tabpage1.form.div_01.set_visible(false);
        		this.div_work.Tabpage1.form.div_02.set_visible(false);
        		this.div_work.Tabpage1.form.div_03.set_visible(false);
        	}
        }
        /*******************************************************************************
         * fn_tabInsteadDisplay
         * 기능 : 근태신청 화면변경
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_tabInsteadDisplay = function (calenderType)
        {

        	this.div_work.Tabpage2.form.div_basicInfo.form.sta_alterWorkDay.set_visible(false);
        	this.div_work.Tabpage2.form.div_basicInfo.form.cal_alterWorkDay.set_visible(false);

        	if (calenderType == "310" || calenderType == "190" ) //대체근무(310), 외출(190) - div_01
        	{
        		this.div_work.Tabpage2.form.div_00.set_visible(false);
        		this.div_work.Tabpage2.form.div_01.set_visible(true);
        		this.div_work.Tabpage2.form.div_02.set_visible(false);
        		this.div_work.Tabpage2.form.div_03.set_visible(false);
        		this.div_work.Tabpage2.form.div_01.set_top("96");
        	}
        	else if (calenderType == "140") //대체휴일(140) - div_02
        	{
        		this.div_work.Tabpage2.form.div_00.set_visible(false);
        		this.div_work.Tabpage2.form.div_01.set_visible(false);
        		this.div_work.Tabpage2.form.div_02.set_visible(true);
        		this.div_work.Tabpage2.form.div_03.set_visible(false);
        		this.div_work.Tabpage2.form.div_02.set_top("96");
        		this.div_work.Tabpage2.form.div_basicInfo.form.sta_alterWorkDay.set_visible(true);
        		this.div_work.Tabpage2.form.div_basicInfo.form.cal_alterWorkDay.set_visible(true);
        	}
        	else if (calenderType == "150") //출장(150) - div_03
        	{
        		this.div_work.Tabpage2.form.div_00.set_visible(false);
        		this.div_work.Tabpage2.form.div_01.set_visible(false);
        		this.div_work.Tabpage2.form.div_02.set_visible(false);
        		this.div_work.Tabpage2.form.div_03.set_visible(true);
        		this.div_work.Tabpage2.form.div_03.set_top("96");
        	}
        	else  //나머지 근태구분 - div_00
        	{
        		this.div_work.Tabpage2.form.div_00.set_visible(true);
        		this.div_work.Tabpage2.form.div_01.set_visible(false);
        		this.div_work.Tabpage2.form.div_02.set_visible(false);
        		this.div_work.Tabpage2.form.div_03.set_visible(false);
        	}
        }
        /*******************************************************************************
         * fn_tabInsteadData
         * 기능 : 근태신청 기초데이터
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_tabInsteadData = function (calenderType)
        {

        	//디폴트 값 초기화
        	this.ds_attendanceApproveInstead.setColumn(0, "START_DATE", "");
        	this.ds_attendanceApproveInstead.setColumn(0, "END_DATE", "");
        	this.ds_attendanceApproveInstead.setColumn(0, "REQUEST_DAY", "");
        	this.ds_attendanceApproveInstead.setColumn(0, "CONTENTS", "");
        	this.ds_attendanceApproveInstead.setColumn(0, "START_DATE_TIME", "0000");
        	this.ds_attendanceApproveInstead.setColumn(0, "END_DATE_TIME", "0000");

        	if (calenderType == "310" || calenderType == "190" ) //대체근무(310), 외출(190) - div_01
        	{
        		if(calenderType == "190")//외출
        		{
        			this.ds_attendanceApproveInstead.setColumn(0, "START_DATE", this.gfn_svrToday());
        			this.ds_attendanceApproveInstead.setColumn(0, "END_DATE", this.gfn_svrToday());
        		}
        		else//대체근무
        		{
        			this.ds_attendanceApproveInstead.setColumn(0, "START_DATE", this.gfn_addDate(this.gfn_svrToday(),2));
        			this.ds_attendanceApproveInstead.setColumn(0, "END_DATE", this.gfn_addDate(this.gfn_svrToday(),2));
        		}
        	}
        	else if (calenderType == "140") //대체휴일(140) - div_02
        	{
        		this.ds_attendanceApproveInstead.setColumn(0, "START_DATE", this.gfn_addDate(this.gfn_svrToday(),2));
        		this.ds_attendanceApproveInstead.setColumn(0, "END_DATE", this.gfn_addDate(this.gfn_svrToday(),2));
        		this.ds_attendanceApproveInstead.setColumn(0, "REQUEST_DAY", "1");
        	}
        	else if (calenderType == "150") //출장(150) - div_03
        	{
        		this.ds_attendanceApproveInstead.setColumn(0, "START_DATE", this.gfn_svrToday());
        		this.ds_attendanceApproveInstead.setColumn(0, "END_DATE", this.gfn_svrToday());
        		this.ds_attendanceApproveInstead.setColumn(0, "REQUEST_DAY", "1");
        	}
        	else  //나머지 근태구분 - div_00
        	{
        		this.ds_attendanceApproveInstead.setColumn(0, "START_DATE", this.gfn_svrToday());
        		this.ds_attendanceApproveInstead.setColumn(0, "END_DATE", this.gfn_svrToday());
        		this.ds_attendanceApproveInstead.setColumn(0, "REQUEST_DAY", "1");
        		if (calenderType == "130")//반휴
        			this.ds_attendanceApproveInstead.setColumn(0, "REQUEST_DAY", "0.5");
        	}
        }
        /*******************************************************************************
         * fn_tabDetailData
         * 기능 : 상세탭 데이터입력
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_tabDetailData = function (calenderType)
        {
        	this.ds_attendanceApproveDetail.clearData();
        	this.ds_attendanceApproveDetail.addRow();
        	var row = this.ds_attendanceApproveList.rowposition;
        	this.ds_attendanceApproveDetail.setColumn(0,"HJSPAY_WORK_APPLY_SEQ",this.ds_attendanceApproveList.getColumn(row, "HJSPAY_WORK_APPLY_SEQ"));//근태신청 Key
        	this.ds_attendanceApproveDetail.setColumn(0,"PERSON_ID",this.ds_attendanceApproveList.getColumn(row, "PERSON_ID"));//PERSONID
        	this.ds_attendanceApproveDetail.setColumn(0,"APPLY_DATE",this.ds_attendanceApproveList.getColumn(row, "APPLY_DATE"));//신청일자
        	this.ds_attendanceApproveDetail.setColumn(0,"EMP_NAME",this.ds_attendanceApproveList.getColumn(row, "EMP_NAME"));
        	this.ds_attendanceApproveDetail.setColumn(0,"CALENDER_TYPE",this.ds_attendanceApproveList.getColumn(row, "CALENDER_TYPE"));//근태구분 CODE
        	this.ds_attendanceApproveDetail.setColumn(0,"START_DATE",this.ds_attendanceApproveList.getColumn(row, "START_DATE").substring(0, 10));//근태일자(From)
        	this.ds_attendanceApproveDetail.setColumn(0,"END_DATE",this.ds_attendanceApproveList.getColumn(row, "END_DATE").substring(0, 10));//근태일자(To)
        	this.ds_attendanceApproveDetail.setColumn(0,"CONTENTS",this.ds_attendanceApproveList.getColumn(row, "CONTENTS"));//신청내용
        	this.ds_attendanceApproveDetail.setColumn(0,"APPROVAL_CONTENTS",this.ds_attendanceApproveList.getColumn(row, "APPROVAL_CONTENTS"));//승인내용
        	this.ds_attendanceApproveDetail.setColumn(0,"REQUEST_DAY",this.ds_attendanceApproveList.getColumn(row, "REQUEST_DAY"));//근태신청일수/시간
        	this.ds_attendanceApproveDetail.setColumn(0,"STATUS_CODE",this.ds_attendanceApproveList.getColumn(row, "STATUS_CODE"));//상태
        	this.ds_attendanceApproveDetail.setColumn(0,"MGR_PERSON_ID",this.ds_attendanceApproveList.getColumn(row, "MGR_PERSON_ID"));//승인자 PERSON ID
        	this.ds_attendanceApproveDetail.setColumn(0,"OBJECT_VERSION_NUMBER",this.ds_attendanceApproveList.getColumn(row, "OBJECT_VERSION_NUMBER"));//OBJECT_VERSION_NUMBER
        	this.ds_attendanceApproveDetail.setColumn(0,"ALTER_WORK_DAY",this.ds_attendanceApproveList.getColumn(row, "ALTER_WORK_DAY"));
        	this.ds_attendanceApproveDetail.setColumn(0,"BUSINESS_TYPE",this.ds_attendanceApproveList.getColumn(row, "BUSINESS_TYPE"));
        	this.ds_attendanceApproveDetail.setColumn(0,"BUSINESS_LOCAL",this.ds_attendanceApproveList.getColumn(row, "BUSINESS_LOCAL"));

        	if(this.ds_attendanceApproveList.getColumn(row, "START_DATE").length > 15)
        	{
        		this.ds_attendanceApproveDetail.setColumn(0,"START_DATE_TIME",this.ds_attendanceApproveList.getColumn(row, "START_DATE").substring(11, 16));//시작시간
        		this.ds_attendanceApproveDetail.setColumn(0,"END_DATE_TIME",this.ds_attendanceApproveList.getColumn(row, "END_DATE").substring(11, 16));//종료시간
        	}

        }
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        /*
        * 기능 : 부서검색 버튼 이벤트
        */
        this.div_search_btn_organization_onclick = function(obj,e)
        {
        	var oArg = {};

        	if (this.div_search.form.edt_organization.value != "")
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
        	oArg.arg_searchStr   = "DEPT_NM=" + this.div_search.form.edt_organization.value;
        	this.gfn_openPopup( "POPUP_ORGANIZATION", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };
        /*
        * 기능 : 셀선택 이벤트
        */
        this.div_work_Tabpage0_grd_attendanceApproveList_oncellclick = function(obj,e)
        {
        	if(this.ds_attendanceApproveList.getRowCount() > 0 && e.cell != 0)
        	{
        		this.div_work.set_tabindex(1);
        		this.fn_tabDetailDisplay(this.ds_attendanceApproveList.getColumn(this.ds_attendanceApproveList.rowposition, "CALENDER_TYPE"));
        		this.fn_tabDetailData(this.ds_attendanceApproveList.getColumn(this.ds_attendanceApproveList.rowposition, "CALENDER_TYPE"));
        	}
        };

        /*
        * 기능 : 구분변경 이벤트
        */
        this.div_work_Tabpage2_div_basicInfo_cbo_calenderName_onitemchanged = function(obj,e)
        {
        	this.fn_tabInsteadDisplay(this.ds_attendanceApproveInstead.getColumn(0, "CALENDER_TYPE"));
        	this.fn_tabInsteadData(this.ds_attendanceApproveInstead.getColumn(0, "CALENDER_TYPE"));
        };

        /*
        * 기능 : 0.5일신청 버튼 이벤트
        */
        this.div_work_Tabpage2_div_02_div_basicInfo00_01_btn_apply_onclick = function(obj,e)
        {
        	var startDate = this.ds_attendanceApproveInstead.getColumn(0,"START_DATE");
        	this.ds_attendanceApproveInstead.setColumn(0,"END_DATE", startDate);
        	this.ds_attendanceApproveInstead.setColumn(0, "REQUEST_DAY", 0.5);
        };
        /*
        * 기능 : 기간 변경 이벤트
        */
        this.ds_attendanceApproveInstead_oncolumnchanged = function(obj,e)
        {
        	//기간(시작일), 기간(종료일) 변경시
        	if (e.columnid == "START_DATE" || e.columnid == "END_DATE" || e.columnid == "START_DATE_TIME" || e.columnid == "END_DATE_TIME")
        	{
        		var startDate = obj.getColumn(e.row, "START_DATE");
        		var endDate = obj.getColumn(e.row, "END_DATE");
        		var startDateTime = obj.getColumn(e.row, "START_DATE_TIME");
        		var endDateTime = obj.getColumn(e.row, "END_DATE_TIME");
        		var calenderType = obj.getColumn(e.row, "CALENDER_TYPE");
        		if (!this.gfn_isNull(startDate) && !this.gfn_isNull(endDate))
        		{
        			if (calenderType == "310" || calenderType == "190") //대체근무(310), 외출(190) 일 경우는 시간계산
        			{
        				//시간차 구해서 표시
        				var diffTime = nexacro.round(this.fn_checkDiffDay(obj, e.row, "today"),2);
        				if(diffTime > 8)	diffTime = 8;	//최대8시간
        				this.ds_attendanceApproveInstead.setColumn(0, "REQUEST_DAY", diffTime);
        			}
        			else if (calenderType == "130" ) //반휴(130)
        			{
        				obj.set_enableevent(false);
        				obj.setColumn(e.row, "REQUEST_DAY", "0.5");		//0.5 고정
        				obj.set_enableevent(true);
        			}
        			//가족돌봄휴가(158), 생리휴가(160), 연휴(110), 예비군훈련(170), 대체휴일(140)
        			else if (calenderType == "158" || calenderType == "160" || calenderType == "110" || calenderType == "170" || calenderType == "140")
        			{
        			//checkPoint wt
        				var diffDay  = this.fn_checkWorkDayCntWt(obj, e.row);
        				obj.set_enableevent(false);
        				obj.setColumn(e.row, "REQUEST_DAY", diffDay);
        				obj.set_enableevent(true);
        			}
        			else //연차포함 기타일 경우는 일자
        			{
        				var diffDay = this.gfn_diffDate2(startDate, endDate)
        				diffDay= diffDay+1; //당일도 포함되어야 하므로 1일 추가
        				obj.set_enableevent(false);
        				obj.setColumn(e.row, "REQUEST_DAY", diffDay);
        				obj.set_enableevent(true);
        			}
        		}
        	}
        };

        /*
         * 기능 : 근태신청 입력기간에 따른 일차차이 호출
         * 파라미터 : pDataset     > 데이터셋
         *             pRowPosition > 행의 위치
         * 리턴값 : 차이날짜
         */
        this.fn_checkDiffDay = function(pDataset, pRowPosition, pFlag)
        {
        	var nRow = pRowPosition;
        	var objDataset = pDataset;

        	//대체근무, 대체휴일 신청시 최소 48시간 이전 신청을 체크하기 위해 오늘 날짜를 넘김
        	if (pFlag == "today")
        	{
        		var startDate = objDataset.getColumn(nRow, "START_DATE");
        		var startDateTime = objDataset.getColumn(nRow, "START_DATE_TIME");
        		var endDate = objDataset.getColumn(nRow, "END_DATE");
        		var endDateTime = objDataset.getColumn(nRow, "END_DATE_TIME");
        	}
        	else{
        		var startDate = objDataset.getColumn(nRow, "START_DATE");
        		var startDateTime = objDataset.getColumn(nRow, "START_DATE_TIME");
        		var endDate = objDataset.getColumn(nRow, "END_DATE");
        		var endDateTime = objDataset.getColumn(nRow, "END_DATE_TIME");
        	}

        	this.ds_result.clearData();
        	var nRow = this.ds_result.addRow();
        	this.ds_result.setColumn(nRow, "START_DATE", startDate);
        	this.ds_result.setColumn(nRow, "START_DATE_TIME", startDateTime );
        	this.ds_result.setColumn(nRow, "END_DATE", endDate);
        	this.ds_result.setColumn(nRow, "END_DATE_TIME", endDateTime );

        	var sSvcID 			= "selectDiffDay"; 						// CallBack service name
        	var sController 	= "/pay40110/selectDiffDay.do" ;			// CONTROLLER VALUE
        	var sInDatasets 	= "INPUT=ds_result";						// DB INPUT  DATA
        	var sOutDatasets 	= "ds_result=output";				    // DB OUTPUT DATA
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, ""); //동기식

        	if (pFlag == "today")
        	{
        		var diffday = this.ds_result.getColumn(this.ds_result.rowposition, "DIFFTIME");
        	}
        	else
        	{
        		var diffday = this.ds_result.getColumn(this.ds_result.rowposition, "DIFFDAY");
        	}
        	return diffday;

        }
        /*
         * 기능 : 근태신청 입력기간에 따른 일차차이 호출
         * 파라미터 : pDataset     > 데이터셋
         *             pRowPosition > 행의 위치
         * 리턴값 : 차이날짜
         */
        this.fn_checkWorkDayCntWt = function(pDataset, pRowPosition)
        {
        	var nRow = pRowPosition;
        	var objDataset = pDataset;

        	var startDate = objDataset.getColumn(nRow, "START_DATE");
        	var endDate = objDataset.getColumn(nRow, "END_DATE");


        	this.ds_result.clearData();
        	var nRow = this.ds_result.addRow();
        	this.ds_result.setColumn(nRow, "START_DATE", startDate);
        	this.ds_result.setColumn(nRow, "END_DATE", endDate);

        	var sSvcID 			= "selectWorkDayCntWt"; 						// CallBack service name
        	var sController 	= "/pay40110/selectWorkDayCntWt.do" ;			// CONTROLLER VALUE
        	var sInDatasets 	= "INPUT=ds_result";						// DB INPUT  DATA
        	var sOutDatasets 	= "ds_result=output";				    // DB OUTPUT DATA
        	var sArgs 			= "";
        	trace(this.ds_result.saveXML("Dataset", "V"));
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, ""); //동기식

        	var holiday = this.ds_result.getColumn(this.ds_result.rowposition, "HOLIDAY_DAY");

        	return holiday;

        }
        /*
        * 기능 : 상세 승인 버튼 이벤트
        */
        this.div_work_Tabpage1_btn_approval_onclick = function(obj,e)
        {
        	this.ds_attendanceApproveDetail.setColumn(0,"CHECK_FLAG", "Y");//처리여부(상세화면: Y, 다중처리: N)
        	this.ds_attendanceApproveDetail.setColumn(0,"MGR_PERSON_ID",this.gf_getPersonId());//승인자 PERSON ID
        	// -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveAttendanceApprove";
            var sController   = "/pay40210/saveAttendanceApprove.do";
            var sInDatasets   = "INPUT=ds_attendanceApproveDetail:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        /*
        * 기능 : 상세 반려 버튼 이벤트
        */
        this.div_work_Tabpage1_btn_returned_onclick = function(obj,e)
        {
        	this.ds_attendanceApproveDetail.setColumn(0,"MGR_PERSON_ID",this.gf_getPersonId());//승인자 PERSON ID
        	// -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveAttendanceApprove";
            var sController   = "/pay40210/saveAttendanceApproveReturn.do";
            var sInDatasets   = "INPUT=ds_attendanceApproveDetail:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
        * 기능 : 근태신청내역 승인 버튼 이벤트
        */
        this.div_work_Tabpage0_btn_listApproval_onclick = function(obj,e)
        {
        	var chk = 0;
        	for(var i = 0; i < this.ds_attendanceApproveList.rowcount; i++)
        	{
        		if(this.ds_attendanceApproveList.getColumn(i,"CHK")=="1")
        		{
        			chk++;
        			this.ds_attendanceApproveList.setColumn(0,"MGR_PERSON_ID",this.gf_getPersonId());//승인자 PERSON ID
        		}
        	}
        	//승인할 내역 체크 했는지 확인
        	if(chk < 1)	return;

        	if(chk == 1)//단일
        	{
        		for(var i = 0; i < this.ds_attendanceApproveList.rowcount; i++)
        		{
        			if(this.ds_attendanceApproveList.getColumn(i,"CHK")=="1")
        			{
        				this.ds_attendanceApproveList.setColumn(0,"CHECK_FLAG", "Y");//처리여부(상세화면: Y, 다중처리: N)
        			}
        		}
        	}
        	else //다중
        	{
        		for(var i = 0; i < this.ds_attendanceApproveList.rowcount; i++)
        		{
        			if(this.ds_attendanceApproveList.getColumn(i,"CHK")=="1")
        			{
        				this.ds_attendanceApproveList.setColumn(0,"CHECK_FLAG", "N");//처리여부(상세화면: Y, 다중처리: N)
        			}
        		}
        	}

        	// -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveAttendanceApprove";
            var sController   = "/pay40210/saveAttendanceApproveList.do";
            var sInDatasets   = "ds_attendanceApproveList=ds_attendanceApproveList:A";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        /*
        * 기능 : 근태신청내역 반려 버튼 이벤트
        */
        this.div_work_Tabpage0_btn_listReturn_onclick = function(obj,e)
        {
        	var chk = 0;
        	for(var i = 0; i < this.ds_attendanceApproveList.rowcount; i++)
        	{
        		if(this.ds_attendanceApproveList.getColumn(i,"CHK")=="1")
        		{
        			chk++;
        			this.ds_attendanceApproveList.setColumn(0,"MGR_PERSON_ID",this.gf_getPersonId());//승인자 PERSON ID
        		}
        	}
        	//반려할 내역 체크 했는지 확인
        	if(chk < 1)	return;
        	// -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveAttendanceApprove";
            var sController   = "/pay40210/saveAttendanceApproveReturnList.do";
            var sInDatasets   = "ds_attendanceApproveList=ds_attendanceApproveList:A";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        /*
        * 기능 : 근태신청(대리) 취소
        */
        this.div_search_btn_clear1_onclick = function(obj,e)
        {
        	this.ds_attendanceApproveInstead.clearData();
        	this.ds_attendanceApproveInstead.addRow();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.btn_organization.addEventHandler("onclick",this.div_search_btn_organization_onclick,this);
            this.div_search.form.cbo_status.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_status.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.addEventHandler("onchanged",this.tab_work_onchanged,this);
            this.div_work.Tabpage0.form.btn_listApproval.addEventHandler("onclick",this.div_work_Tabpage0_btn_listApproval_onclick,this);
            this.div_work.Tabpage0.form.btn_listReturn.addEventHandler("onclick",this.div_work_Tabpage0_btn_listReturn_onclick,this);
            this.div_work.Tabpage0.form.grd_attendanceApproveList.addEventHandler("oncellclick",this.div_work_Tabpage0_grd_attendanceApproveList_oncellclick,this);
            this.div_work.Tabpage1.form.div_basicInfo.form.cbo_calenderName.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_work.Tabpage1.form.div_basicInfo.form.cbo_calenderName.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form.cbo_messageclassid.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form.cbo_messageclassid.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_work.Tabpage1.form.btn_approval.addEventHandler("onclick",this.div_work_Tabpage1_btn_approval_onclick,this);
            this.div_work.Tabpage1.form.btn_returned.addEventHandler("onclick",this.div_work_Tabpage1_btn_returned_onclick,this);
            this.div_work.Tabpage1.form.btn_list.addEventHandler("onclick",this.fn_list,this);
            this.div_work.Tabpage2.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.Tabpage2.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_work.Tabpage2.form.div_basicInfo.form.cbo_calenderName.addEventHandler("onitemchanged",this.div_work_Tabpage2_div_basicInfo_cbo_calenderName_onitemchanged,this);
            this.div_work.Tabpage2.form.div_basicInfo.form.cbo_personId.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_work.Tabpage2.form.div_basicInfo.form.cbo_personId.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_work.Tabpage2.form.div_02.form.div_basicInfo00_01.form.btn_apply.addEventHandler("onclick",this.div_work_Tabpage2_div_02_div_basicInfo00_01_btn_apply_onclick,this);
            this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.form.cbo_messageclassid.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_work.Tabpage2.form.div_03.form.div_basicInfo00_02.form.cbo_messageclassid.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.ds_attendanceApproveInstead.addEventHandler("oncolumnchanged",this.ds_attendanceApproveInstead_oncolumnchanged,this);
        };
        this.loadIncludeScript("PAY40210M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
