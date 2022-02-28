(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PAY40110M");
            this.set_titletext("근태관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"CALENDER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"START_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPAY_WORK_APPLY_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_requestAttendanceList", this);
            obj._setContents("<ColumnInfo><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPLY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"CALENDER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CALENDER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPAY_WORK_APPLY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_requestAttendanceInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HJSPAY_WORK_APPLY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPLY_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ALTER_WORK_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"ANNUAL_LEAVE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CALENDER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CALENDER_TYPE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_TYPE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_LOCAL\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_DATES\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_yearHoliInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSPAY_EXCH_YEAR_HOLIDAY_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"YEARLY_GRANT_HOLIDAY_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGE_GRANT_HOLIDAY_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"YEARLY_USE_HOLIDAY_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGE_USE_HOLIDAY_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGE_HOLIDAY_TIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("sta_yyyymm","21","10","70","20",null,null,null,null,null,null,this.div_search.form);
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

            obj = new Static("Static07","23.79%","0",null,"43","74.01%",null,null,null,null,null,this.div_search.form);
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

            obj = new Combo("cbo_attendanceType","318","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,HJS_HR_ATTENDANCE_TYPE,ALL,Y,Y");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_attendanceType","236","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("근태유형");
            obj.set_tooltiptext("근태유형");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("cal_toDate","103","10","115","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_url("common::com_monthCalendar.xfdl");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"8","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"8","60","20","76",null,null,null,null,null,this);
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

            obj = new Tab("div_work","0","146",null,null,"10","-480",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage0",this.div_work);
            obj.set_text("근태신청현황");
            obj.set_tooltiptext("근태신청현황");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delLine",null,"7","60","20","66",null,null,null,null,null,this.div_work.Tabpage0.form);
            obj.set_taborder("0");
            obj.set_text("행삭제");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("행삭제");
            this.div_work.Tabpage0.addChild(obj.name, obj);

            obj = new Button("btn_retract",null,"7","60","20","0",null,null,null,null,null,this.div_work.Tabpage0.form);
            obj.set_taborder("1");
            obj.set_text("철회");
            obj.set_tooltiptext("철회");
            this.div_work.Tabpage0.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work.Tabpage0.form);
            obj.set_taborder("3");
            obj.set_text("근태신청 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("근태신청 현황");
            this.div_work.Tabpage0.addChild(obj.name, obj);

            obj = new Grid("grd_requestAttendanceList","0","34",null,null,"0","10",null,null,null,null,this.div_work.Tabpage0.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_requestAttendanceList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"160\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\" tooltiptext=\"상태\"/><Cell col=\"2\" text=\"신청일자\" tooltiptext=\"신청일자\"/><Cell col=\"3\" text=\"근태유형\" tooltiptext=\"근태유형\"/><Cell col=\"4\" text=\"시작일시\" tooltiptext=\"시작일시\"/><Cell col=\"5\" text=\"종료일시\" tooltiptext=\"종료일시\"/><Cell col=\"6\" text=\"신청일수 / 시간\" tooltiptext=\"신청일수 / 시간\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHECK_YN\"/><Cell col=\"1\" text=\"bind:STATUS_NAME\"/><Cell col=\"2\" text=\"bind:APPLY_DATE\"/><Cell col=\"3\" text=\"bind:CALENDER_NAME\"/><Cell col=\"4\" text=\"bind:START_DATE\"/><Cell col=\"5\" text=\"bind:END_DATE\"/><Cell col=\"6\" text=\"bind:REQUEST_DAY\"/></Band></Format></Formats>");
            this.div_work.Tabpage0.addChild(obj.name, obj);

            obj = new Button("btn_req",null,"7","60","20","132",null,null,null,null,null,this.div_work.Tabpage0.form);
            obj.set_taborder("4");
            obj.set_text("신청");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("신청");
            this.div_work.Tabpage0.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_requestAttendanceList","219","0","140","34",null,null,null,null,null,null,this.div_work.Tabpage0.form);
            obj.set_taborder("5");
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
            obj.set_taborder("3");
            obj.set_text("근태 신청 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("근태 신청 정보");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"7","60","20","66",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_tooltiptext("취소");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","60","20","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_basicInfo","0","34",null,"63","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("2");
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
            obj.set_taborder("4");
            obj.set_text("<fc v=\'red\'>*</fc>구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("구분");
            obj.set_usedecorate("true");
            this.div_work.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_requestDate","135","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_work.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_attendanceType","135","36","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,HJS_HR_ATTENDANCE_TYPE,SEL,Y,Y");
            obj.set_index("-1");
            this.div_work.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_site00","300","0","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("작성자");
            this.div_work.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_writerNm","435","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("display");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.div_work.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_alterWorkDay","300","31","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_text("<fc v=\'red\'>*</fc>대체근무일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("대체근무일");
            obj.set_enable("true");
            obj.set_visible("false");
            this.div_work.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_alterWorkDay","435","36","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_visible("false");
            this.div_work.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Div("div_00","0","96",null,"164","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_gubunDetail","0","0",null,"63","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line_notop");
            obj.set_text("");
            this.div_work.Tabpage1.form.div_00.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_gubunDetail.form);
            obj.set_taborder("0");
            obj.set_text("<fc v=\'red\'>*</fc>기간");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("기간");
            this.div_work.Tabpage1.form.div_00.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Calendar("cal_startDate","135","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_gubunDetail.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage1.form.div_00.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Static("Static16_01","271","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_gubunDetail.form);
            obj.set_taborder("2");
            obj.set_text("부터");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_00.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Calendar("cal_endDate","311","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_gubunDetail.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage1.form.div_00.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Static("Static16_01_00","447","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_gubunDetail.form);
            obj.set_taborder("4");
            obj.set_text("까지");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_00.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Edit("edt_totalDay","487","5","50","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_gubunDetail.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.div_work.Tabpage1.form.div_00.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","543","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_gubunDetail.form);
            obj.set_taborder("6");
            obj.set_text("일");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_00.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Static("sta_site00","0","31","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_gubunDetail.form);
            obj.set_taborder("7");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("내용");
            this.div_work.Tabpage1.form.div_00.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Edit("edt_contents","135","36","565","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_gubunDetail.form);
            obj.set_taborder("8");
            obj.set_textAlign("left");
            obj.set_maxlength("500");
            this.div_work.Tabpage1.form.div_00.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Div("div_textwrap","0","63",null,"95","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.div_work.Tabpage1.form.div_00.addChild(obj.name, obj);

            obj = new Static("Static16","15","3","800","58",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_textwrap.form);
            obj.set_taborder("0");
            obj.set_text("※ 입력 필수\r\n    - 대체근무 신청 시, 대체 근무에 따른 휴일을 기재하세요. (ex. 10/15 대휴 예정)\r\n    - 대체휴일 신청 시, 대체 휴일의 근거가 되는 대체 근무일자를  기재하세요. \r\n         (ex. 10/15 대체근무에 따른 대휴 신청)");
            obj.set_cssclass("sta_font_blue");
            this.div_work.Tabpage1.form.div_00.form.div_textwrap.addChild(obj.name, obj);

            obj = new Static("Static19","15","64","800","24",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_textwrap.form);
            obj.set_taborder("1");
            obj.set_text("※ 대체근무 / 대체휴일은 근무시작 최소 48시간 이전 신청 필수");
            obj.set_cssclass("sta_font_red");
            this.div_work.Tabpage1.form.div_00.form.div_textwrap.addChild(obj.name, obj);

            obj = new Div("div_comment","0","62",null,"63","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form);
            obj.set_taborder("2");
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

            obj = new TextArea("edt_comment","135","5","768","52",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_comment.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_00.form.div_comment.addChild(obj.name, obj);

            obj = new Div("div_01","0","259",null,"164","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_visible("false");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_textwrap","0","63",null,"95","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.div_work.Tabpage1.form.div_01.addChild(obj.name, obj);

            obj = new Static("Static16","15","3","800","58",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_textwrap.form);
            obj.set_taborder("0");
            obj.set_text("※ 입력 필수\r\n    - 대체근무 신청 시, 대체 근무에 따른 휴일을 기재하세요. (ex. 10/15 대휴 예정)\r\n    - 대체휴일 신청 시, 대체 휴일의 근거가 되는 대체 근무일자를  기재하세요. \r\n         (ex. 10/15 대체근무에 따른 대휴 신청)");
            obj.set_cssclass("sta_font_blue");
            this.div_work.Tabpage1.form.div_01.form.div_textwrap.addChild(obj.name, obj);

            obj = new Static("Static19","15","64","800","24",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_textwrap.form);
            obj.set_taborder("1");
            obj.set_text("※ 대체근무 / 대체휴일은 근무시작 최소 48시간 이전 신청 필수");
            obj.set_cssclass("sta_font_red");
            this.div_work.Tabpage1.form.div_01.form.div_textwrap.addChild(obj.name, obj);

            obj = new Div("div_gubunDetail","0","0",null,"63","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detail_line_notop");
            obj.set_text("");
            this.div_work.Tabpage1.form.div_01.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.form);
            obj.set_taborder("0");
            obj.set_text("<fc v=\'red\'>*</fc>기간");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("기간");
            this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Static("Static16_01","304","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.form);
            obj.set_taborder("1");
            obj.set_text("부터");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Static("Static16_01_00","513","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.form);
            obj.set_taborder("2");
            obj.set_text("까지");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Edit("edt_totalTime","553","5","50","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.form);
            obj.set_taborder("3");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","609","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.form);
            obj.set_taborder("4");
            obj.set_text("시간");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Calendar("cal_startDate","135","5","110","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new MaskEdit("edt_startTime","248","5","50","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.form);
            obj.set_taborder("6");
            obj.set_format("##:##");
            obj.set_type("string");
            this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Calendar("cal_endDate","344","5","110","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new MaskEdit("edt_endTime","457","5","50","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.form);
            obj.set_taborder("8");
            obj.set_format("##:##");
            obj.set_type("string");
            this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Static("sta_site00","0","31","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.form);
            obj.set_taborder("9");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("내용");
            this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Edit("edt_contents","135","36","565","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.form);
            obj.set_taborder("10");
            obj.set_textAlign("left");
            obj.set_maxlength("500");
            this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Div("div_comment","0","62",null,"63","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form);
            obj.set_taborder("1");
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

            obj = new TextArea("edt_comment","135","5","768","52",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_comment.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_01.form.div_comment.addChild(obj.name, obj);

            obj = new Div("div_02","0","430",null,"165","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_visible("false");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_gubunDetail","0","0",null,"63","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detail_line_notop");
            obj.set_text("");
            this.div_work.Tabpage1.form.div_02.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.form);
            obj.set_taborder("0");
            obj.set_text("<fc v=\'red\'>*</fc>기간");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("기간");
            this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Calendar("cal_startDate","135","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Static("Static16_01","271","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.form);
            obj.set_taborder("2");
            obj.set_text("부터");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Calendar("cal_endDate","311","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Static("Static16_01_00","447","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.form);
            obj.set_taborder("4");
            obj.set_text("까지");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","543","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.form);
            obj.set_taborder("5");
            obj.set_text("일");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Button("btn_apply","583","5","110","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.form);
            obj.set_taborder("6");
            obj.set_text("0.5일 신청");
            obj.set_tooltiptext("0.5일 신청");
            this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Static("sta_site00","0","31","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.form);
            obj.set_taborder("7");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("내용");
            this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Edit("edt_contents","135","36","565","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.form);
            obj.set_taborder("8");
            obj.set_textAlign("left");
            obj.set_maxlength("500");
            this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Edit("edt_totalDay","487","5","50","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Div("div_textwrap","0","63",null,"95","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.div_work.Tabpage1.form.div_02.addChild(obj.name, obj);

            obj = new Static("Static16","15","3","800","58",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_textwrap.form);
            obj.set_taborder("0");
            obj.set_text("※ 입력 필수\r\n    - 대체근무 신청 시, 대체 근무에 따른 휴일을 기재하세요. (ex. 10/15 대휴 예정)\r\n    - 대체휴일 신청 시, 대체 휴일의 근거가 되는 대체 근무일자를  기재하세요. \r\n         (ex. 10/15 대체근무에 따른 대휴 신청)");
            obj.set_cssclass("sta_font_blue");
            this.div_work.Tabpage1.form.div_02.form.div_textwrap.addChild(obj.name, obj);

            obj = new Static("Static19","15","64","800","24",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_textwrap.form);
            obj.set_taborder("1");
            obj.set_text("※ 대체근무 / 대체휴일은 근무시작 최소 48시간 이전 신청 필수");
            obj.set_cssclass("sta_font_red");
            this.div_work.Tabpage1.form.div_02.form.div_textwrap.addChild(obj.name, obj);

            obj = new Div("div_comment","0","62",null,"63","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form);
            obj.set_taborder("1");
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

            obj = new TextArea("edt_comment","135","5","768","52",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_comment.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_02.form.div_comment.addChild(obj.name, obj);

            obj = new Div("div_03","0","620",null,"225","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_visible("false");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_textwrap","0","125",null,"95","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.div_work.Tabpage1.form.div_03.addChild(obj.name, obj);

            obj = new Static("Static16","15","3","800","58",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_textwrap.form);
            obj.set_taborder("0");
            obj.set_text("※ 입력 필수\r\n    - 대체근무 신청 시, 대체 근무에 따른 휴일을 기재하세요. (ex. 10/15 대휴 예정)\r\n    - 대체휴일 신청 시, 대체 휴일의 근거가 되는 대체 근무일자를  기재하세요. \r\n         (ex. 10/15 대체근무에 따른 대휴 신청)");
            obj.set_cssclass("sta_font_blue");
            this.div_work.Tabpage1.form.div_03.form.div_textwrap.addChild(obj.name, obj);

            obj = new Static("Static19","15","64","800","24",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_textwrap.form);
            obj.set_taborder("1");
            obj.set_text("※ 대체근무 / 대체휴일은 근무시작 최소 48시간 이전 신청 필수");
            obj.set_cssclass("sta_font_red");
            this.div_work.Tabpage1.form.div_03.form.div_textwrap.addChild(obj.name, obj);

            obj = new Div("div_gubunDetail","0","0",null,"125","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detail_line_notop");
            obj.set_text("");
            this.div_work.Tabpage1.form.div_03.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.form);
            obj.set_taborder("0");
            obj.set_text("<fc v=\'red\'>*</fc>기간");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("기간");
            this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Calendar("cal_startDate","135","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Static("Static16_01","271","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.form);
            obj.set_taborder("2");
            obj.set_text("부터");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Calendar("cal_endDate","311","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Static("Static16_01_00","447","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.form);
            obj.set_taborder("4");
            obj.set_text("까지");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Edit("edt_totalDay","487","5","50","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","543","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.form);
            obj.set_taborder("6");
            obj.set_text("일");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Static("sta_site00","0","31","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.form);
            obj.set_taborder("7");
            obj.set_text("<fc v=\'red\'>*</fc>국내외구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("국내외구분");
            this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Static("sta_site00_00","0","62","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.form);
            obj.set_taborder("8");
            obj.set_text("출장지역");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("출장지역");
            this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Combo("cbo_businessDivision","135","36","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,HJS_HR_BUSINESS_TYPE,NAN,Y,Y");
            obj.set_text("");
            obj.set_index("-1");
            this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Edit("edt_businessArea","135","67","565","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.form);
            obj.set_taborder("10");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Static("sta_site00_01","0","93","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.form);
            obj.set_taborder("11");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("내용");
            this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Edit("edt_contents","135","98","565","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.form);
            obj.set_taborder("12");
            obj.set_textAlign("left");
            obj.set_maxlength("500");
            this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.addChild(obj.name, obj);

            obj = new Div("div_comment","0","124",null,"63","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form);
            obj.set_taborder("1");
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

            obj = new TextArea("edt_comment","135","5","768","52",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_comment.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.div_work.Tabpage1.form.div_03.form.div_comment.addChild(obj.name, obj);

            obj = new Div("div_basicInfo","0","83",null,"63","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_yearHoli","0","0","130","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_text("연차부여 일수");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("연차부여 일수");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_alterHoli","300","0","130","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_text("대휴부여 일수");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("대휴부여 일수");
            obj.set_usedecorate("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_yearHoliUsed","0","31","130","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_text("연차사용 일수");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("연차사용 일수");
            obj.set_usedecorate("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_outerLine","705","36","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("display");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_yearHoli","135","5","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("display");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_outerLine2","415","36","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("display");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_alterHoliUsed","300","31","130","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_text("대휴사용 일수");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("대휴사용 일수");
            obj.set_usedecorate("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_alterWorkTime","600","31","130","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_text("대체근무 시간");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("대체근무 시간");
            obj.set_usedecorate("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_yearHoliUsed","135","36","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("display");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_alterHoliUsed","435","36","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("9");
            obj.set_cssclass("display");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_alterHoli","435","5","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_alterWorkTime","735","36","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_enterdate00_00","600","0","130","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static13","922","313","240","207",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_visible("false");
            obj.set_background("blue");
            obj.set_padding("10px");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            obj.set_text("근태 신청 구분에 따른 div ID 참고\r\n\r\ndiv_00 : 연휴, 반휴(대체근무일 hide)\r\ndiv_01 : 대체근무, 외출(대체근무일 hide)\r\ndiv_02 : 대체휴일(대체근무일 show)\r\ndiv_03 : 출장(대체근무일 hide)\r\n\r\n\r\n화면 보기 설정에 따른 div ID 참고\r\n\r\n안내문구 Div : div_textwrap\r\nComment Div : div_comment");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_basicInfo.form.edt_yearHoli","value","ds_yearHoliInfo","YEARLY_GRANT_HOLIDAY_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_basicInfo.form.edt_alterHoli","value","ds_yearHoliInfo","EXCHANGE_GRANT_HOLIDAY_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_basicInfo.form.edt_yearHoliUsed","value","ds_yearHoliInfo","YEARLY_USE_HOLIDAY_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_basicInfo.form.edt_alterHoliUsed","value","ds_yearHoliInfo","EXCHANGE_USE_HOLIDAY_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_basicInfo.form.edt_alterWorkTime","value","ds_yearHoliInfo","EXCHANGE_HOLIDAY_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_work.Tabpage1.form.div_basicInfo.form.cal_requestDate","value","ds_requestAttendanceInfo","APPLY_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_work.Tabpage1.form.div_basicInfo.form.edt_writerNm","value","ds_requestAttendanceInfo","PERSON_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_work.Tabpage1.form.div_basicInfo.form.cbo_attendanceType","value","ds_requestAttendanceInfo","CALENDER_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_work.Tabpage1.form.div_00.form.div_gubunDetail.form.cal_startDate","value","ds_requestAttendanceInfo","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_work.Tabpage1.form.div_00.form.div_gubunDetail.form.cal_endDate","value","ds_requestAttendanceInfo","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_work.Tabpage1.form.div_00.form.div_gubunDetail.form.edt_contents","value","ds_requestAttendanceInfo","CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_work.Tabpage1.form.div_01.form.div_gubunDetail.form.edt_contents","value","ds_requestAttendanceInfo","CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_work.Tabpage1.form.div_01.form.div_gubunDetail.form.cal_startDate","value","ds_requestAttendanceInfo","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_work.Tabpage1.form.div_01.form.div_gubunDetail.form.edt_startTime","value","ds_requestAttendanceInfo","START_DATE_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_work.Tabpage1.form.div_01.form.div_gubunDetail.form.cal_endDate","value","ds_requestAttendanceInfo","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_work.Tabpage1.form.div_01.form.div_gubunDetail.form.edt_endTime","value","ds_requestAttendanceInfo","END_DATE_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_work.Tabpage1.form.div_02.form.div_gubunDetail.form.cal_startDate","value","ds_requestAttendanceInfo","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_work.Tabpage1.form.div_02.form.div_gubunDetail.form.cal_endDate","value","ds_requestAttendanceInfo","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_work.Tabpage1.form.div_02.form.div_gubunDetail.form.edt_contents","value","ds_requestAttendanceInfo","CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_work.Tabpage1.form.div_03.form.div_gubunDetail.form.cal_startDate","value","ds_requestAttendanceInfo","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_work.Tabpage1.form.div_03.form.div_gubunDetail.form.cal_endDate","value","ds_requestAttendanceInfo","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_work.Tabpage1.form.div_03.form.div_gubunDetail.form.cbo_businessDivision","value","ds_requestAttendanceInfo","BUSINESS_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_work.Tabpage1.form.div_03.form.div_gubunDetail.form.edt_businessArea","value","ds_requestAttendanceInfo","BUSINESS_LOCAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_work.Tabpage1.form.div_03.form.div_gubunDetail.form.edt_contents","value","ds_requestAttendanceInfo","CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_work.Tabpage1.form.div_00.form.div_comment.form.edt_comment","value","ds_requestAttendanceInfo","APPROVAL_CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_work.Tabpage1.form.div_01.form.div_comment.form.edt_comment","value","ds_requestAttendanceInfo","APPROVAL_CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_work.Tabpage1.form.div_02.form.div_comment.form.edt_comment","value","ds_requestAttendanceInfo","APPROVAL_CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_work.Tabpage1.form.div_03.form.div_comment.form.edt_comment","value","ds_requestAttendanceInfo","APPROVAL_CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_work.Tabpage1.form.div_basicInfo.form.cal_alterWorkDay","value","ds_requestAttendanceInfo","ALTER_WORK_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_work.Tabpage1.form.div_00.form.div_gubunDetail.form.edt_totalDay","value","ds_requestAttendanceInfo","REQUEST_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div_work.Tabpage1.form.div_03.form.div_gubunDetail.form.edt_totalDay","value","ds_requestAttendanceInfo","REQUEST_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_work.Tabpage1.form.div_02.form.div_gubunDetail.form.edt_totalDay","value","ds_requestAttendanceInfo","REQUEST_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_work.Tabpage1.form.div_01.form.div_gubunDetail.form.edt_totalTime","value","ds_requestAttendanceInfo","REQUEST_DAY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_monthCalendar.xfdl");
        };
        
        // User Script
        this.registerScript("PAY40110M.xfdl", function() {

        /***************************************************************************************
         * 시스템명 	: SM 상선 myHR 고도화
         * 업무명 		: 근태관리
         * 파일명 		: PAY40110M.xfdl
         * 작성자 		:
         * 작성일 		: 2022.01.24
         *
         * 설  명		:
         * 참  고       : 초기화버튼 id를 btn_clear1으로 변경
         *                  -> btn_clear를 id를 사용할 경우 공통 초기화로 인해 연차사용정보도 초기화됨
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2022.01.24	        	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate; //toDay

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	//화면 초기화(공통)
        	this.nfn_formInit(obj);

        	//조회조건 초기값 Setting
        	this.fn_formInit();

        	//구분별 div가 form 크기를 넘어서 스크롤바가 생겨서 강제로 사이즈 조정
        	this.div_work.set_bottom(0);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_search.clearData();         //Search Condition Dataset clear
        	var nRow = this.ds_search.addRow(); //dataset에 row를 추가하고 데이터를 입력.
        	this.ds_search.setColumn(nRow, "PERSON_ID",  this.gf_getPersonId()); //사용자Id DATA
        	this.ds_search.setColumn(nRow, "START_MONTH",  this.div_search.form.cal_toDate.form.msk_month.value); //사용자Id DATA
        	this.ds_search.setColumn(nRow, "CALENDER_TYPE",  this.div_search.form.cbo_attendanceType.value); //사용자Id DATA
            //trace(this.ds_search.saveXML("Dataset", "V"));
        	var sSvcID 			= "selectRequestAttendanceList"; 						// CallBack service name
        	var sController 	= "/pay40110/selectRequestAttendanceList.do" ;			// CONTROLLER VALUE
        	var sInDatasets 	= "INPUT=ds_search";						// DB INPUT  DATA
        	var sOutDatasets 	= "ds_yearHoliInfo=output ds_requestAttendanceList=output2";				    // DB OUTPUT DATA
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 신청버튼
         */
        this.fn_apply = function(obj,e)
        {
        	this.ds_requestAttendanceInfo.clearData();
        	var nRow = this.ds_requestAttendanceInfo.addRow();
        	this.div_work.set_tabindex(1);
        	this.div_work.Tabpage1.form.btn_save.set_enable(true);
        	this.div_work.Tabpage1.form.btn_cancel.set_enable(true);
        	this.div_work.Tabpage1.form.div_basicInfo.set_enable(true);
        	//신청시에는 연휴정보가 보이도록 함
        	this.fn_divControl("110");
        	this.fn_initialValue("110");//초기값입력
        	this.fn_divNoticeAbleControl("110", "10"); //연휴, 대기
        	this.div_work.Tabpage1.form.div_basicInfo.form.cbo_attendanceType.set_enable(true);
        	this.div_work.Tabpage1.form.div_basicInfo.form.cbo_attendanceType.set_index(0);
        	this.ds_requestAttendanceInfo.setColumn(nRow, "APPLY_DATE", this.gfn_today());
            this.ds_requestAttendanceInfo.setColumn(nRow, "PERSON_ID",  this.gf_getPersonId());
        	this.ds_requestAttendanceInfo.setColumn(nRow, "PERSON_NAME",  this.gf_getUserNm());
         	this.ds_requestAttendanceInfo.setColumn(nRow, "STATUS", "10"); //HJS_HR_APPROVAL_STATUS - 대기
        	this.ds_requestAttendanceInfo.setColumn(nRow, "OBJECT_VERSION_NUMBER", 1);
        };

        /*
         * 기능 : 삭제 버튼 클릭 이벤트
         */
        this.fn_delete = function(obj,e)
        {
        	//데이터 미존재시 return
        	if (this.ds_requestAttendanceList.rowcount < 1) return;

        	//선택 대상중 상태가 "승인"인 데이터가 존재하면 오류 처리
        	var validCount = 0;
        	var inValidCount = 0; //승인건수
        	var withdrawalCount = 0; //철회건수

        	for (i=0; i< this.ds_requestAttendanceList.getRowCount(); i++){
        		var checkYn = this.ds_requestAttendanceList.getColumn(i, "CHECK_YN");
        		var status = this.ds_requestAttendanceList.getColumn(i, "STATUS");
        		/*STATUS
        			10 : 대기
        			20 : 승인
        			30 : 철회대기
        			40 : 철회
        			50 : 반려
        		*/
        		if (checkYn == "1" && status == "20") //체크대상 중 승인
        		{
        			inValidCount++;
        		}
        		else if (checkYn == "1" && status == "30") //체크대상 중 철회대기
        		{
        			withdrawalCount++;
        		}
        		else if (checkYn == "1" && (status == "10"||status == "40"||status == "50")) //체크대상 중 대기,철회,반려
        		{
        			validCount++;
        		}
        	}

        	if (inValidCount > 0)
        	{
        		this.gfn_Message("ApprovalDeleteCheckByState", null, "info", "ok"); //승인 상태 내역은 삭제할 수 없습니다.
        		return;
        	}

        	if (validCount < 1 && withdrawalCount < 1)
        	{
        		this.gfn_Message("NoSelectData", null, "info", "ok");
        		return;
        	}

        	//(10 : 대기, 40 : 철회,50 : 반려) 일 경우는 삭제처리
        	var workMessage = "IsDeleted"; //선택한 내역에 대해 삭제 작업을 수행할 예정입니다. 계속 진행하시겠습니까?

        	//(30 : 철회대기)일 경우는
        	if(validCount==0 && withdrawalCount>0)
        	{
        		workMessage = "IsCancelCheck"; //근태 철회신청을 취소하시겠습니까?
        	}
        	else if (validCount>0 && withdrawalCount>0)
        	{
        		workMessage = "선택한 내역에 대해 삭제 및 철회신청을 하시겠습니까?"; //이사님 확인필요
        	}

        	var bOK = this.gfn_Message(workMessage, null, "conf", "yesno");
        	if (!bOK) return;

        	for (i=0; i< this.ds_requestAttendanceList.getRowCount(); i++){
        		var checkYn = this.ds_requestAttendanceList.getColumn(i, "CHECK_YN");
        		var status = this.ds_requestAttendanceList.getColumn(i, "STATUS");
        		/*STATUS
        			10 : 대기
        			20 : 승인
        			30 : 철회대기
        			40 : 철회
        			50 : 반려
        		*/
        		if (checkYn == "1" && status == "20") //체크대상 중 승인
        		{
        		}
        		else if (checkYn == "1" && status == "30") //체크대상 중 철회대기
        		{//상태값 [승인]으로 변경
        			this.ds_requestAttendanceList.setColumn(i, "STATUS", "20");
        		}
        		else if (checkYn == "1" && (status == "10"||status == "40"||status == "50")) //체크대상 중 대기,철회,반려
        		{
        			this.ds_requestAttendanceList.deleteRow(i);
        		}
        	}

        	// -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveStatus";
            var sController   = "/pay40110/saveStatus.do";
            var sInDatasets   = "INPUT=ds_requestAttendanceList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 이벤트 : 철회버튼
         */
        this.fn_retract = function(obj,e)
        {
        	//데이터 미존재시 return
        	if (this.ds_requestAttendanceList.rowcount < 1) return;

        	//선택 대상중 상태가 "승인"외인 데이터가 존재하면 오류 처리
        	var validCount = 0; //승인건수
        	var inValidCount = 0;

        	for (i=0; i< this.ds_requestAttendanceList.getRowCount(); i++){
        		var checkYn = this.ds_requestAttendanceList.getColumn(i, "CHECK_YN");
        		var status = this.ds_requestAttendanceList.getColumn(i, "STATUS");
        		/*STATUS
        			10 : 대기
        			20 : 승인
        			30 : 철회대기
        			40 : 철회
        			50 : 반려
        		*/
        		if (checkYn == "1" && status == "20") //체크대상 중 승인
        		{
        			validCount++;
        		}
        		else if (checkYn == "1" && status != "20") //체크대상 중 승인이 아닌 것
        		{
        			inValidCount++;
        		}
        	}

        	if (inValidCount > 0)
        	{
        		this.gfn_Message("CancelCheckByState", null, "info", "ok"); //승인상태가 아닌 근태는 철회할 수 없습니다
        		return;
        	}

        	if (validCount < 1)
        	{
        		this.gfn_Message("NoSelectData", null, "info", "ok");
        		return;
        	}

        	var bOK = this.gfn_Message("IsCancel", null, "conf", "yesno"); //선택한 내역에 대해 철회 작업을 수행할 예정입니다. 계속 진행하시겠습니까?
        	if (!bOK) return;

        	for (i=0; i< this.ds_requestAttendanceList.getRowCount(); i++){
        		var checkYn = this.ds_requestAttendanceList.getColumn(i, "CHECK_YN");
        		var status = this.ds_requestAttendanceList.getColumn(i, "STATUS");
        		/*STATUS
        			10 : 대기
        			20 : 승인
        			30 : 철회대기
        			40 : 철회
        			50 : 반려
        		*/
        		if (checkYn == "1" && status == "20") //체크대상 중 승인
        		{//상태값 철회대기로 변경
        			this.ds_requestAttendanceList.setColumn(i, "STATUS", "30");
        		}
        	}

        	// -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveStatus";
            var sController   = "/pay40110/saveStatus.do";
            var sInDatasets   = "INPUT=ds_requestAttendanceList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 취소버튼
         */
        this.fn_cancle = function(obj,e)
        {

        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function(obj,e)
        {
        	if (this.ds_requestAttendanceInfo.rowcount < 1) return;

        	//필수값 체크
        	var objDataset = "ds_requestAttendanceInfo";
        	var strColIdList = "CALENDER_TYPE,START_DATE,END_DATE";
        	var strColNmList = "구분,기간(시작일),기간(종료일)"

        	var calenderType = this.ds_requestAttendanceInfo.getColumn(this.ds_requestAttendanceInfo.rowposition, "CALENDER_TYPE");
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

        	var diffDay = this.gfn_diffDate2(this.ds_requestAttendanceInfo.getColumn(0, "START_DATE") , this.ds_requestAttendanceInfo.getColumn(0, "END_DATE"));
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
        		var sInDatasets 	= "INPUT=ds_requestAttendanceInfo";				// DB INPUT  DATA
        		var sOutDatasets 	= "ds_CloseYn=output";				    		// DB OUTPUT DATA
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        	else if (calenderType == "130")//반휴
        	{
        		//시작일자와 종료일자가 다를 경우
        		if(this.ds_requestAttendanceInfo.getColumn(0, "START_DATE") != this.ds_requestAttendanceInfo.getColumn(0, "END_DATE"))
        		{
        			//반휴신청시 시작일과 종료일은 같아야 합니다.
        			this.gfn_Message("ValidateHalfholidayRequest", null, "info", "ok");
        			return;
        		}
        		var diffDay  = this.fn_checkWorkDayCntWt(this.ds_requestAttendanceInfo, this.ds_requestAttendanceInfo.rowposition);
        		if(diffDay == 0)//공휴일에 반휴쓸경우
        		return;
        	}
        	else if(calenderType == "310")//대체근무
        	{
        		var startMM = this.ds_requestAttendanceInfo.getColumn(0, "START_DATE_TIME").substr(2,2);
        		var endMM = this.ds_requestAttendanceInfo.getColumn(0, "END_DATE_TIME").substr(2,2);
        		var contents = this.ds_requestAttendanceInfo.getColumn(0, "CONTENTS");

        		if((startMM != "00" && startMM != "30") || (endMM != "00" && endMM != "30"))
        		{
        			//분은 00, 30분만 등록할 수 있습니다.
        			this.gfn_Message("CheckTimeMinute", null, "info", "ok");
        			return;
        		}
        		if(this.nfn_isNull(contents))
        		{
        			//대체근무/대휴 신청할 때 내용을 반드시 등록하시기 바랍니다.
        			this.gfn_Message("ValidateSubstituteDayRequest", null, "info", "ok");
        			return;
        		}
        		//지정하신 일자의 대체근무/대체휴일에 동의하십니까? (동의: 확인,  미동의: 취소)
        		var bOK = this.gfn_Message("ValidateSubstituteDayConfirm", null, "conf", "yesno");
        		if (!bOK) return;
        	}
        	else if (calenderType == "140")//대체휴일
        	{
        		var contents = this.ds_requestAttendanceInfo.getColumn(0, "CONTENTS");
        		if(this.nfn_isNull(contents))
        		{
        			//신청할 때 내용을 반드시 등록하시기 바랍니다.
        			this.gfn_Message("ValidateAttendanceCommend", null, "info", "ok");
        			return;
        		}
        		//지정하신 일자의 대체근무/대체휴일에 동의하십니까? (동의: 확인,  미동의: 취소)
        		var bOK = this.gfn_Message("ValidateSubstituteDayConfirm", null, "conf", "yesno");
        		if (!bOK) return;
        	}
        	else if(calenderType == "190")//외출
        	{
        		var contents = this.ds_requestAttendanceInfo.getColumn(0, "CONTENTS");
        		if(this.nfn_isNull(contents))
        		{
        			//신청할 때 내용을 반드시 등록하시기 바랍니다.
        			this.gfn_Message("ValidateAttendanceCommend", null, "info", "ok");
        			return;
        		}
        	}
        	if(calenderType != "110")
        	{
        		//저장
        		this.fn_saveAttendance();
        	}


        };

        /*
         * 조회 조건 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        	this.div_search.form.cbo_attendanceType.set_index(0);
        };

        /*
         * 기능 : 취소
         */
        this.fn_cancel = function(obj,e)
        {
        	//데이터 미존재시 return
        	if (this.ds_requestAttendanceInfo.rowcount < 1) return;

            if (this.ds_requestAttendanceInfo.getRowType(this.ds_requestAttendanceInfo.rowposition) == 2) //추가된행의 경우
            {
        		this.ds_requestAttendanceInfo.clearData();
        		this.div_work.set_tabindex(0);
        	}
        };


        /*
         * 기능 : 0.5 버튼
         */
        this.fn_halfApply = function(obj,e)
        {
        	var nRow = this.ds_requestAttendanceInfo.rowposition;
        	var requestDay = this.ds_requestAttendanceInfo.getColumn(nRow,"REQUEST_DAY");
        	var startDate = this.ds_requestAttendanceInfo.getColumn(nRow,"START_DATE");
        	this.ds_requestAttendanceInfo.setColumn(nRow,"END_DATE", startDate);
        	//this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.form.edt_totalDay.value;

        	if (requestDay == 0.5)
        	{
        		var diffDay = this.fn_checkDiffDay(this.ds_requestAttendanceInfo, nRow, null);
                var aa = nexacro.toNumber(diffDay);
        		this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.form.edt_totalDay.set_value(diffDay);
        	}
        	else
        	{
        		this.ds_requestAttendanceInfo.setColumn(nRow, "REQUEST_DAY", 0.5);
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
                //조회조건 근태유형 COMBOBOX : ATTRIBUTE1 'Y'인 것만 대상
        		if (trId == "selectEcmLookupValuesVList2ds_CHJS_HR_ATTENDANCE_TYPEALL")
        		{
        			//기존 filter된 정보를 초기화 하여 재 filter
        			var attendanceType = "ATTRIBUTE1 == 'Y'||ATTRIBUTE1 == '전체'";
        			this.ds_CHJS_HR_ATTENDANCE_TYPEALL.filter("");
        			this.ds_CHJS_HR_ATTENDANCE_TYPEALL.filter(attendanceType);
        			//trace(this.ds_CHJS_HR_ATTENDANCE_TYPEALL.saveXML("Dataset", "V"));
        		}
        		//근태신청 탭 >> 근태신청 정보 >> 구분 COMBOBOX : ATTRIBUTE1 'Y'인 것만 대상
        		else if (trId == "selectEcmLookupValuesVList2ds_CHJS_HR_ATTENDANCE_TYPESEL")
        		{
        			//기존 filter된 정보를 초기화 하여 재 filter
        			this.ds_CHJS_HR_ATTENDANCE_TYPESEL.filter("");
        			this.ds_CHJS_HR_ATTENDANCE_TYPESEL.filter("ATTRIBUTE1 == 'Y'");
        		}
        		//근태신청 탭 >> 근태신청 정보 >> 국내외구분 COMBOBOX
        		else if (trId == "selectEcmLookupValuesVList2ds_CHJS_HR_BUSINESS_TYPENAN")
        		{
        			//기존 filter된 정보를 초기화 하여 재 filter
        			this.ds_CHJS_HR_BUSINESS_TYPENAN.filter("");
        			//null인 아닌 정보만 사용자에게 보여줌
        			var businessType = "!(LOOKUP_CODE == '' || LOOKUP_CODE == null || LOOKUP_CODE == undefined)";
        			this.ds_CHJS_HR_BUSINESS_TYPENAN.filter(businessType);
        		}
        		//조회 service name
                else if (trId == "selectRequestAttendanceList")
                {
        			if(this.ds_requestAttendanceList.rowcount < 1 )
        			{
        				this.gfn_Message("NotExistList", NULL , "info", "ok");
        			}

        			this.div_work.set_tabindex(0);

        	    }
        		else if(trId == "selectRequestAttendanceInfo") //인사고충상담 상세내역 조회
        		{
        			this.div_work.set_tabindex(1);

        			var calenderType = this.ds_requestAttendanceInfo.getColumn(this.ds_requestAttendanceInfo.rowposition, "CALENDER_TYPE");

        			this.fn_divControl(calenderType);

        			var status = this.ds_requestAttendanceInfo.getColumn(this.ds_requestAttendanceInfo.rowposition, "STATUS");

        			/*기 등록된건은 취소 불가능*/
        			this.div_work.Tabpage1.form.btn_cancel.set_enable(false);
        			this.div_work.Tabpage1.form.div_basicInfo.form.cbo_attendanceType.set_enable(false);
        			if (status != "10")
        			{
        				this.fn_divNoticeAbleControl(calenderType, status);
        			}

        			/*상태가 대기외일 경우는 수정 불가능*/
        			if (status == "10")
        			{
        				this.div_work.Tabpage1.form.btn_save.set_enable(true);
        			}
        			else
        			{
        				this.div_work.Tabpage1.form.btn_save.set_enable(false);
        			}
        		}
        		else if (trId == "saveAttendance") //인사고충상담 등록 탭 >> 저장
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.div_work.set_tabindex(0);
        			this.fn_search();
        		}
        		else if(trId == "selectCheckCloseYn")//마감여부체크
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
        			this.fn_saveAttendance();


        		}
            }
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/


        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 화면 로드 후 초기값 적용
         */
        this.fn_formInit = function ()
        {
            this.fv_currDate = this.nfn_getCurrentSystemTime();
        	this.div_search.form.cal_toDate.form.msk_month.set_value(this.fv_currDate.substring(0,6));
        };

        /*
         * 기능: 근태신청 구분값에 따라 보여지는 항목(DIV) 동적 호출
         */
        this.fn_divControl = function(pAttendanceType)
        {
        	var attendanceType = pAttendanceType;

        	this.div_work.Tabpage1.form.div_basicInfo.form.sta_alterWorkDay.set_visible(false);
        	this.div_work.Tabpage1.form.div_basicInfo.form.cal_alterWorkDay.set_visible(false);

        	if (attendanceType == "310" || attendanceType == "190" ) //대체근무(310), 외출(190) - div_01
        	{
        		this.div_work.Tabpage1.form.div_00.set_visible(false);
        		this.div_work.Tabpage1.form.div_01.set_visible(true);
        		this.div_work.Tabpage1.form.div_02.set_visible(false);
        		this.div_work.Tabpage1.form.div_03.set_visible(false);
        		this.div_work.Tabpage1.form.div_01.set_top("96");
        	}
        	else if (attendanceType == "140") //대체휴일(140) - div_02
        	{
        		this.div_work.Tabpage1.form.div_00.set_visible(false);
        		this.div_work.Tabpage1.form.div_01.set_visible(false);
        		this.div_work.Tabpage1.form.div_02.set_visible(true);
        		this.div_work.Tabpage1.form.div_03.set_visible(false);
        		this.div_work.Tabpage1.form.div_02.set_top("96");
        		this.div_work.Tabpage1.form.div_basicInfo.form.sta_alterWorkDay.set_visible(true);
        		this.div_work.Tabpage1.form.div_basicInfo.form.cal_alterWorkDay.set_visible(true);
        	}
        	else if (attendanceType == "150") //출장(150) - div_03
        	{
        		this.div_work.Tabpage1.form.div_00.set_visible(false);
        		this.div_work.Tabpage1.form.div_01.set_visible(false);
        		this.div_work.Tabpage1.form.div_02.set_visible(false);
        		this.div_work.Tabpage1.form.div_03.set_visible(true);
        		this.div_work.Tabpage1.form.div_03.set_top("96");
        		var rowType = this.ds_requestAttendanceInfo.getRowType(this.ds_requestAttendanceInfo.rowposition);
        		if (rowType == 2){ //추가된 행의 상태
        			this.div_work.Tabpage1.form.div_03.form.div_gubunDetail.form.cbo_businessDivision.set_value("10"); //국내
        		}
        	}
        	else  //나머지 근태구분 - div_00
        	{
        		this.div_work.Tabpage1.form.div_00.set_visible(true);
        		this.div_work.Tabpage1.form.div_01.set_visible(false);
        		this.div_work.Tabpage1.form.div_02.set_visible(false);
        		this.div_work.Tabpage1.form.div_03.set_visible(false);
        	}
        }

        /*
         * 기능: 상태값에 따라 div 수정 불가
         */
        this.fn_divNoticeAbleControl = function(pAttendanceType, pStatus)
        {
        	var attendanceType = pAttendanceType;
        	var status = pStatus;

        	if (attendanceType == "310" || attendanceType == "190" ) //대체근무(310), 외출(190) - div_01
        	{
        // 		this.div_work.Tabpage1.form.div_00.set_visible(false);
        // 		this.div_work.Tabpage1.form.div_01.set_visible(true);
        // 		this.div_work.Tabpage1.form.div_02.set_visible(false);
        // 		this.div_work.Tabpage1.form.div_03.set_visible(false);
        // 		this.div_work.Tabpage1.form.div_01.set_top("96");
        		if (status == "10") //대기
        		{
        			this.div_work.Tabpage1.form.div_01.set_enable(true);
        		}
        		else
        		{
        			this.div_work.Tabpage1.form.div_01.set_enable(false);
        		}
        	}
        	else if (attendanceType == "140") //대체휴일(140) - div_02
        	{
        // 		this.div_work.Tabpage1.form.div_00.set_visible(false);
        // 		this.div_work.Tabpage1.form.div_01.set_visible(false);
        // 		this.div_work.Tabpage1.form.div_02.set_visible(true);
        // 		this.div_work.Tabpage1.form.div_03.set_visible(false);
        // 		this.div_work.Tabpage1.form.div_02.set_top("96");
        // 		this.div_work.Tabpage1.form.div_basicInfo.form.sta_alterWorkDay.set_visible(true);
        // 		this.div_work.Tabpage1.form.div_basicInfo.form.cal_alterWorkDay.set_visible(true);
        		if (status == "10") //대기
        		{
        			this.div_work.Tabpage1.form.div_02.set_enable(true);
        		}
        		else
        		{
        			this.div_work.Tabpage1.form.div_02.set_enable(false);
        		}
        	}
        	else if (attendanceType == "150") //출장(150) - div_03
        	{
        // 		this.div_work.Tabpage1.form.div_00.set_visible(false);
        // 		this.div_work.Tabpage1.form.div_01.set_visible(false);
        // 		this.div_work.Tabpage1.form.div_02.set_visible(false);
        // 		this.div_work.Tabpage1.form.div_03.set_visible(true);
        // 		this.div_work.Tabpage1.form.div_03.set_top("96");
        		if (status == "10") //대기
        		{
        			this.div_work.Tabpage1.form.div_03.set_enable(true);
        		}
        		else
        		{
        			this.div_work.Tabpage1.form.div_03.set_enable(false);
        		}
        	}
        	else  //나머지 근태구분 - div_00
        	{
        // 		this.div_work.Tabpage1.form.div_00.set_visible(true);
        // 		this.div_work.Tabpage1.form.div_01.set_visible(false);
        // 		this.div_work.Tabpage1.form.div_02.set_visible(false);
        // 		this.div_work.Tabpage1.form.div_03.set_visible(false);
        		if (status == "10") //대기
        		{
        			this.div_work.Tabpage1.form.div_00.set_enable(true);
        		}
        		else
        		{
        			this.div_work.Tabpage1.form.div_00.set_enable(false);
        		}
        	}
        }

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
        * 기능 : 저장
        */
        this.fn_saveAttendance = function()
        {
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
         	var sSvcID 			= "saveAttendance";	// CallBack service name
         	var sController 	= "/pay40110/saveAttendance.do";
         	var sInDatasets 	= "INPUT=ds_requestAttendanceInfo:U";
         	var sOutDatasets 	= "";
         	var sArgs 			= "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        /*
         * 기능: 신청 시 초기값 입력
         */
        this.fn_initialValue = function(pAttendanceType)
        {
        	var attendanceType = pAttendanceType;

        	//디폴트 값 초기화
        	this.ds_requestAttendanceInfo.setColumn(0, "START_DATE", "");
        	this.ds_requestAttendanceInfo.setColumn(0, "END_DATE", "");
        	this.ds_requestAttendanceInfo.setColumn(0, "REQUEST_DAY", "");
        	this.ds_requestAttendanceInfo.setColumn(0, "CONTENTS", "");
        	this.ds_requestAttendanceInfo.setColumn(0, "START_DATE_TIME", "0000");
        	this.ds_requestAttendanceInfo.setColumn(0, "END_DATE_TIME", "0000");


        	if (attendanceType == "310" || attendanceType == "190" ) //대체근무(310), 외출(190) - div_01
        	{
        		//디폴트값 설정
        		this.ds_requestAttendanceInfo.setColumn(0, "REQUEST_DAY", "0.0");
        		if(attendanceType == "190")//외출
        		{
        			this.ds_requestAttendanceInfo.setColumn(0, "START_DATE", this.gfn_svrToday());
        			this.ds_requestAttendanceInfo.setColumn(0, "END_DATE", this.gfn_svrToday());
        		}
        		else//대체근무
        		{
        			this.ds_requestAttendanceInfo.setColumn(0, "START_DATE", this.gfn_addDate(this.gfn_svrToday(),2));
        			this.ds_requestAttendanceInfo.setColumn(0, "END_DATE", this.gfn_addDate(this.gfn_svrToday(),2));
        		}
        	}
        	else if (attendanceType == "140") //대체휴일(140) - div_02
        	{
        		//디폴트값 설정
        		this.ds_requestAttendanceInfo.setColumn(0, "START_DATE", this.gfn_addDate(this.gfn_svrToday(),2));
        		this.ds_requestAttendanceInfo.setColumn(0, "END_DATE", this.gfn_addDate(this.gfn_svrToday(),2));
        		this.ds_requestAttendanceInfo.setColumn(0, "REQUEST_DAY", "1");
        	}
        	else if (attendanceType == "150") //출장(150) - div_03
        	{
        		//디폴트값 설정
        		this.ds_requestAttendanceInfo.setColumn(0, "START_DATE", this.gfn_svrToday());
        		this.ds_requestAttendanceInfo.setColumn(0, "END_DATE", this.gfn_svrToday());
        		this.ds_requestAttendanceInfo.setColumn(0, "REQUEST_DAY", "1");
        	}
        	else  //나머지 근태구분 - div_00
        	{
        		//디폴트값 설정
        		this.ds_requestAttendanceInfo.setColumn(0, "START_DATE", this.gfn_svrToday());
        		this.ds_requestAttendanceInfo.setColumn(0, "END_DATE", this.gfn_svrToday());
        		this.ds_requestAttendanceInfo.setColumn(0, "REQUEST_DAY", "1");
        		if (attendanceType == "130")//반휴
        			this.ds_requestAttendanceInfo.setColumn(0, "REQUEST_DAY", "0.5");
        	}
        }
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 이벤트 : 근태신청 현황 Grid의 제목 cell click시에 인사고충상담 등록 탭으로 이동
         */
        this.div_work_Tabpage2_grd_counseling_oncellclick = function(obj,e)
        {
        	if (e.col == obj.getBindCellIndex("body", "STATUS_NAME"))
        	{
        		// 상단의 dataset에서 원하는 값을 해당하는 로우에서 꺼내옴.
        		var counselingSeq = this.ds_counselingList.getColumn(this.ds_counselingList.rowposition, "HJSHR_COUNSELING_SEQ");

        		this.ds_requestAttendanceInfo.clearData(); //Dataset clear
        		this.ds_search.clearData();
        		var nRow = this.ds_search.addRow();			//dataset에 row를 추가하고 데이터를 입력.
        		this.ds_search.setColumn(nRow, "HJSHR_COUNSELING_SEQ",  counselingSeq); //사용자Id DATA

        		var sSvcID 			= "selectCounselingDetail"; 				// CallBack service name
        		var sController 	= "/pay40110/selectCounselingDetail.do" ;   // CONTROLLER VALUE
        		var sInDatasets 	= "INPUT=ds_search";					    // DB INPUT  DATA
        		var sOutDatasets 	= "ds_requestAttendanceInfo=output";				// DB OUTPUT DATA
        		var sArgs 			= "";
        		//trace(this.ds_search.saveXML("Dataset", "V"));
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        };

        /*
         * 이벤트 : 근태신청 탭>> 구분값 변경시 호출
         */
        this.fn_attendanceType_onitemchanged = function(obj,e)
        {
        	var attendanceType = e.postvalue;
        	this.fn_divControl(attendanceType); //근태신청 구분값에 따라 보여지는 항목(DIV) 동적 호출
        };


        /*
         * 이벤트 : 근태신청시 값이 변경(Dataset)된 후 Validation 및 기타 Setting 작업 수행
         */
        this.ds_requestAttendanceInfo_oncolumnchanged = function(obj,e)
        {
            //기간(시작일), 기간(종료일) 변경시
        	if (e.columnid == "START_DATE" || e.columnid == "END_DATE" || e.columnid == "START_DATE_TIME" || e.columnid == "END_DATE_TIME")
        	{
        		var startDate = obj.getColumn(e.row, "START_DATE");
        		var endDate = obj.getColumn(e.row, "END_DATE");
        		var startDateTime = obj.getColumn(e.row, "START_DATE_TIME");
        		var endDateTime = obj.getColumn(e.row, "END_DATE_TIME");
        		var calenderType = obj.getColumn(e.row, "CALENDER_TYPE");
        		var calenderTypeName = this.div_work.Tabpage1.form.div_basicInfo.form.cbo_attendanceType.text;
        		var currDate = this.gfn_today();

        		//기간(시작일) 변경시
        		if (e.columnid == "START_DATE" && !this.gfn_isNull(startDate))
        		{
        // 			if (calenderType == "140" || calenderType == "310") // 대체휴일(140), 대체근무(310) 일 경우는 근무시작 최소 48시간 이전 신청 필수
        // 			{
        // 				var diffDay = this.fn_checkDiffDay(obj, e.row, "today"); //파라미터 dataset, rowposition
        // 				if (diffDay < 2)
        // 				{
        // 					this.gfn_Message(calenderTypeName +"은(는) 근무시작 최소 48시간 이전 신청하셔야 합니다.", null, "info", "ok");
        // 					return;
        // 				}
        // 			}
        		}

        		if (!this.gfn_isNull(startDate) && !this.gfn_isNull(endDate))
        		{
        			if (calenderType == "310" || calenderType == "190") //대체근무(310), 외출(190) 일 경우는 시간계산
        			{
        				//시간차 구해서 표시
        				var diffTime = nexacro.round(this.fn_checkDiffDay(obj, e.row, "today"),2);
        				if(diffTime > 8)	diffTime = 8;	//최대8시간
        				this.ds_requestAttendanceInfo.setColumn(0, "REQUEST_DAY", diffTime);
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
         * 기능 : 상세
         */

        this.fn_searchDetail = function(obj,e)
        {
        	if (e.col == obj.getBindCellIndex("body", "STATUS_NAME"))
        	{
        		//Dataset clear
        		this.ds_requestAttendanceInfo.clearData();
        		this.ds_search.clearData();

        	   // 상단의 dataset에서 원하는 값을 해당하는 로우에서 꺼내옴.
        		var requestAttendanceSeq = this.ds_requestAttendanceList.getColumn(this.ds_requestAttendanceList.rowposition, "HJSPAY_WORK_APPLY_SEQ");
        		var nRow = this.ds_search.addRow();			//dataset에 row를 추가하고 데이터를 입력.
        		this.ds_search.setColumn(nRow, "HJSPAY_WORK_APPLY_SEQ",  requestAttendanceSeq); //사용자Id DATA

        		var sSvcID 			= "selectRequestAttendanceInfo"; 						// CallBack service name
        		var sController 	= "/pay40110/selectRequestAttendanceInfo.do" ;			// CONTROLLER VALUE
        		var sInDatasets 	= "INPUT=ds_search";						   		// DB INPUT  DATA
        		var sOutDatasets 	= "ds_requestAttendanceInfo=output";						// DB OUTPUT DATA
        		var sArgs 			= "";
        		//trace(this.ds_search.saveXML("Dataset", "V"));
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.fn_searchClear,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.addEventHandler("onchanged",this.tab_work_onchanged,this);
            this.div_work.Tabpage0.form.btn_delLine.addEventHandler("onclick",this.fn_delete,this);
            this.div_work.Tabpage0.form.btn_retract.addEventHandler("onclick",this.fn_retract,this);
            this.div_work.Tabpage0.form.grd_requestAttendanceList.addEventHandler("oncellclick",this.fn_searchDetail,this);
            this.div_work.Tabpage0.form.btn_req.addEventHandler("onclick",this.fn_apply,this);
            this.div_work.Tabpage1.form.btn_cancel.addEventHandler("onclick",this.fn_cancel,this);
            this.div_work.Tabpage1.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_work.Tabpage1.form.div_basicInfo.form.cbo_attendanceType.addEventHandler("onitemchanged",this.fn_attendanceType_onitemchanged,this);
            this.div_work.Tabpage1.form.div_01.form.div_gubunDetail.form.edt_totalTime.addEventHandler("onchanged",this.div_work_Tabpage1_div_01_div_gubunDetail_edt_totalTime_onchanged,this);
            this.div_work.Tabpage1.form.div_02.form.div_gubunDetail.form.btn_apply.addEventHandler("onclick",this.fn_halfApply,this);
            this.ds_requestAttendanceInfo.addEventHandler("oncolumnchanged",this.ds_requestAttendanceInfo_oncolumnchanged,this);
        };
        this.loadIncludeScript("PAY40110M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
