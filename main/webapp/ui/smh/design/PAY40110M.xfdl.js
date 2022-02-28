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

            obj = new Combo("cbo_messageclassid00","293","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,MsgGroup,ALL,Y,Y");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","211","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("근태유형");
            obj.set_tooltiptext("근태유형");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_monthFrom","101","10","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_url("common::com_monthCalendar.xfdl");
            obj.set_text("____-__");
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

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Tab("div_work","0","146",null,null,"10","0",null,null,null,null,this);
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

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work.Tabpage0.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"160\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"상태\" tooltiptext=\"상태\"/><Cell col=\"2\" text=\"신청일자\" tooltiptext=\"신청일자\"/><Cell col=\"3\" text=\"근태유형\" tooltiptext=\"근태유형\"/><Cell col=\"4\" text=\"시작일시\" tooltiptext=\"시작일시\"/><Cell col=\"5\" text=\"종료일시\" tooltiptext=\"종료일시\"/><Cell col=\"6\" text=\"신청일수 / 시간\" tooltiptext=\"신청일수 / 시간\"/></Band></Format></Formats>");
            this.div_work.Tabpage0.addChild(obj.name, obj);

            obj = new Button("btn_req",null,"7","60","20","132",null,null,null,null,null,this.div_work.Tabpage0.form);
            obj.set_taborder("4");
            obj.set_text("신청");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("신청");
            this.div_work.Tabpage0.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_InputResultByDay","219","0","140","34",null,null,null,null,null,null,this.div_work.Tabpage0.form);
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
            obj.set_taborder("1");
            obj.set_text("<fc v=\'red\'>*</fc>구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("구분");
            obj.set_usedecorate("true");
            this.div_work.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_certdate","135","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_work.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_messageclassid","135","36","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,MsgGroup,ALL,Y,Y");
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

            obj = new Edit("edt_00_00_01","435","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("display");
            obj.set_textAlign("center");
            this.div_work.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_site00_00","300","31","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_text("<fc v=\'red\'>*</fc>대체근무일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("대체근무일");
            this.div_work.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_certdate00_00","435","36","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage1.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Div("div_00","0","96",null,"164","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("4");
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
            obj.set_text("<fc v=\'red\'>*</fc>기간");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("기간");
            this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Calendar("cal_certdate","135","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("Static16_01","271","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("2");
            obj.set_text("부터");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Calendar("cal_certdate00","311","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("Static16_01_00","447","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("4");
            obj.set_text("까지");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","487","5","50","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","543","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("6");
            obj.set_text("일");
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

            obj = new Edit("edt_00_00_00","135","36","565","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.form);
            obj.set_taborder("8");
            obj.set_textAlign("center");
            this.div_work.Tabpage1.form.div_00.form.div_basicInfo00.addChild(obj.name, obj);

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

            obj = new TextArea("txa_00","135","5","768","52",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_00.form.div_comment.form);
            obj.set_taborder("2");
            this.div_work.Tabpage1.form.div_00.form.div_comment.addChild(obj.name, obj);

            obj = new Div("div_01","0","96",null,"164","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_background("#ffffff");
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

            obj = new Div("div_basicInfo00_00","0","0",null,"63","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detail_line_notop");
            obj.set_text("");
            this.div_work.Tabpage1.form.div_01.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("0");
            obj.set_text("<fc v=\'red\'>*</fc>기간");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("기간");
            this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Static("Static16_01","304","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("1");
            obj.set_text("부터");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Static("Static16_01_00","513","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("2");
            obj.set_text("까지");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","553","5","50","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("3");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","609","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("4");
            obj.set_text("시간");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_00_01_01","135","5","110","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_00","248","5","50","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("6");
            obj.set_format("##:##");
            obj.set_type("string");
            this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_00_01_01_00","344","5","110","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new MaskEdit("mae_00_00_00","457","5","50","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("8");
            obj.set_format("##:##");
            obj.set_type("string");
            this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Static("sta_site00","0","31","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("9");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("내용");
            this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","135","36","565","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.form);
            obj.set_taborder("10");
            obj.set_textAlign("center");
            this.div_work.Tabpage1.form.div_01.form.div_basicInfo00_00.addChild(obj.name, obj);

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

            obj = new TextArea("txa_00","135","5","768","52",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_01.form.div_comment.form);
            obj.set_taborder("2");
            this.div_work.Tabpage1.form.div_01.form.div_comment.addChild(obj.name, obj);

            obj = new Div("div_02","0","96",null,"165","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_basicInfo00_01","0","0",null,"63","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detail_line_notop");
            obj.set_text("");
            this.div_work.Tabpage1.form.div_02.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("0");
            obj.set_text("<fc v=\'red\'>*</fc>기간");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("기간");
            this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Calendar("cal_certdate","135","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Static("Static16_01","271","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("2");
            obj.set_text("부터");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Calendar("cal_certdate00","311","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Static("Static16_01_00","447","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("4");
            obj.set_text("까지");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","487","5","50","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","543","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("6");
            obj.set_text("일");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Button("btn_cancel","583","5","110","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("7");
            obj.set_text("0.5일 신청");
            obj.set_tooltiptext("0.5일 신청");
            this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Static("sta_site00","0","31","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("8");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("내용");
            this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","135","36","565","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form);
            obj.set_taborder("9");
            obj.set_textAlign("center");
            this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.addChild(obj.name, obj);

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

            obj = new TextArea("txa_00","135","5","768","52",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_02.form.div_comment.form);
            obj.set_taborder("2");
            this.div_work.Tabpage1.form.div_02.form.div_comment.addChild(obj.name, obj);

            obj = new Div("div_03","0","96",null,"225","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_background("#ffffff");
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

            obj = new Div("div_basicInfo00_02","0","0",null,"125","0",null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detail_line_notop");
            obj.set_text("");
            this.div_work.Tabpage1.form.div_03.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("0");
            obj.set_text("<fc v=\'red\'>*</fc>기간");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("기간");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Calendar("cal_certdate","135","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Static("Static16_01","271","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("2");
            obj.set_text("부터");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Calendar("cal_certdate00","311","5","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Static("Static16_01_00","447","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("4");
            obj.set_text("까지");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","487","5","50","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_enable("false");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","543","5","40","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("6");
            obj.set_text("일");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Static("sta_site00","0","31","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("7");
            obj.set_text("<fc v=\'red\'>*</fc>국내외구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("국내외구분");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Static("sta_site00_00","0","62","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("8");
            obj.set_text("출장지역");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("출장지역");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Combo("cbo_messageclassid","135","36","130","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,MsgGroup,ALL,Y,Y");
            obj.set_index("-1");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","135","67","565","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("10");
            obj.set_textAlign("center");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Static("sta_site00_01","0","93","130","31",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("11");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("내용");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","135","98","565","20",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form);
            obj.set_taborder("12");
            obj.set_textAlign("center");
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.addChild(obj.name, obj);

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

            obj = new TextArea("txa_00","135","5","768","52",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_03.form.div_comment.form);
            obj.set_taborder("2");
            this.div_work.Tabpage1.form.div_03.form.div_comment.addChild(obj.name, obj);

            obj = new Div("div_basicInfo","0","83",null,"63","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","130","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_text("연차부여 일수");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("연차부여 일수");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid","300","0","130","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_text("대휴부여 일수");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("대휴부여 일수");
            obj.set_usedecorate("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate","0","31","130","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_text("연차사용 일수");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("연차사용 일수");
            obj.set_usedecorate("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00","705","36","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("display");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","135","5","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("display");
            obj.set_textAlign("center");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00_01","415","36","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("display");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid00","300","31","130","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_text("대휴사용 일수");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("대휴사용 일수");
            obj.set_usedecorate("true");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_enterdate00","600","31","130","31",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_text("대체근무 시간");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("대체근무 시간");
            obj.set_usedecorate("false");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","135","36","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("display");
            obj.set_textAlign("center");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","435","36","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("9");
            obj.set_cssclass("display");
            obj.set_textAlign("center");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_01","435","5","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            obj.set_textAlign("center");
            this.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","735","36","160","20",null,null,null,null,null,null,this.div_basicInfo.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            obj.set_textAlign("center");
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
            obj = new BindItem("item0","div_work.Tabpage1.form.div_basicInfo.form.cal_certdate","value","ds_qamQcinspector","CERTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_work.Tabpage1.form.div_basicInfo.form.cal_certdate00_00","value","ds_qamQcinspector","CERTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.Tabpage1.form.div_00.form.div_basicInfo00.form.cal_certdate","value","ds_qamQcinspector","CERTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.Tabpage1.form.div_00.form.div_basicInfo00.form.cal_certdate00","value","ds_qamQcinspector","CERTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form.cal_certdate","value","ds_qamQcinspector","CERTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form.cal_certdate00","value","ds_qamQcinspector","CERTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form.cal_certdate","value","ds_qamQcinspector","CERTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form.cal_certdate00","value","ds_qamQcinspector","CERTDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_monthCalendar.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_search.form.cbo_messageclassid00.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_messageclassid00.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.addEventHandler("onchanged",this.tab_work_onchanged,this);
            this.div_work.Tabpage0.form.btn_delLine.addEventHandler("onclick",this.fn_save,this);
            this.div_work.Tabpage0.form.btn_retract.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.Tabpage0.form.btn_req.addEventHandler("onclick",this.fn_save,this);
            this.div_work.Tabpage1.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.Tabpage1.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_work.Tabpage1.form.div_basicInfo.form.cbo_messageclassid.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_work.Tabpage1.form.div_basicInfo.form.cbo_messageclassid.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_work.Tabpage1.form.div_02.form.div_basicInfo00_01.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form.cbo_messageclassid.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_work.Tabpage1.form.div_03.form.div_basicInfo00_02.form.cbo_messageclassid.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
        };
        this.loadIncludeScript("PAY40110M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
