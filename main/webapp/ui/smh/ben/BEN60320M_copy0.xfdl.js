(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BEN60320M");
            this.set_titletext("경조금");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_gonList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"GON_GUBUN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GON_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"PAYMENT_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CON_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"LINE_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GON_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"HJSBEN_EXPENSES_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GON_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detailSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSBEN_EXPENSES_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gonDeatilList", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSBEN_EXPENSES_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GON_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"GON_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"GON_GUBUN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TELEPHONE\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FLOWER_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"LINE_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"RELATIONSHIP\" type=\"STRING\" size=\"256\"/><Column id=\"RELATIONSHIP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PAYMENT_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"SUBMIT_PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"CON_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REASION_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gonSupport", this);
            obj._setContents("<ColumnInfo><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GON_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"GON_GUBUN_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gonSupportResult", this);
            obj._setContents("<ColumnInfo><Column id=\"SUPPORT_MONEY\" type=\"STRING\" size=\"256\"/><Column id=\"FLOWER_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("경조구분");
            obj.set_tooltiptext("경조구분");
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

            obj = new Static("Static07","25%","0",null,"43","72.8%",null,null,null,null,null,this.div_search.form);
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

            obj = new Combo("cbo_messageclassid","103","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,HJS_BEN_경조금지급기준,ALL,Y,Y");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_messageclassid00","329","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,HJS_HR_APPROVAL_STATUS,ALL,Y,Y");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","247","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("상태");
            obj.set_tooltiptext("상태");
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

            obj = new Tab("div_work","0","78",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work);
            obj.set_text("경조금 현황");
            obj.set_tooltiptext("경조금 현황");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"7","60","20","66",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("출력");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("출력");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_delLine",null,"7","60","20","0",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_tooltiptext("출력");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("경조금 신청 내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("경조금 신청 내역");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","68",null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_gonList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"신청일자\"/><Cell col=\"3\" text=\"구분\"/><Cell col=\"4\" text=\"경조일자\"/><Cell col=\"5\" text=\"승인일자\"/><Cell col=\"6\" text=\"회사지원금\"/><Cell col=\"7\" text=\"지급일자\"/><Cell col=\"8\" text=\"내용\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:STATUS_NAME\"/><Cell col=\"2\" text=\"bind:REQUEST_DATE\"/><Cell col=\"3\" text=\"bind:GON_GUBUN_NAME\"/><Cell col=\"4\" text=\"bind:GON_DATE\"/><Cell col=\"5\" text=\"bind:PAYMENT_DATE\"/><Cell col=\"6\" text=\"bind:AMOUNT\"/><Cell col=\"7\" text=\"bind:CON_DATE\"/><Cell col=\"8\" text=\"bind:LINE_CONTENTS\"/></Band></Format></Formats>");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"7","60","20","132",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("신규");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("신규");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static16","15",null,null,"24","15","34",null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_text("※ 해당 경조금 신청서를 출력하여 주십시오.");
            obj.set_cssclass("sta_font_blue");
            obj.set_tooltiptext("※ 해당 경조금 신청서를 출력하여 주십시오.");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static16_00","15",null,null,"24","15","10",null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("※ 관련 증빙서류와 출력하신 경조금 신청서를 인사총무팀으로 송부하여 주시기 바랍니다.");
            obj.set_cssclass("sta_font_blue");
            obj.set_tooltiptext("※ 관련 증빙서류와 출력하신 경조금 신청서를 인사총무팀으로 송부하여 주시기 바랍니다.");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_InputResultByDay","219","0","140","34",null,null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work);
            obj.set_text("경조금 신청");
            obj.set_tooltiptext("경조금 신청");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","241","34",null,null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_text("경조금 신청 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("경조금 신청 정보");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"7","60","20","66",null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_tooltiptext("취소");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","60","20","0",null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Div("div_basicInfo","0","34",null,"156","0",null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_WF_detail_line");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("신청일자");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid","290","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_text("<fc v=\'red\'>*</fc>경조일자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("경조일자");
            obj.set_usedecorate("true");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_prevcareer","0","62","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_text("<fc v=\'red\'>*</fc>대상자성명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("대상자성명");
            obj.set_usedecorate("true");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate","0","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_text("<fc v=\'red\'>*</fc>경조구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("경조구분");
            obj.set_usedecorate("true");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_enterdate","580","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_text("<fc v=\'red\'>*</fc>긴급연락처");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("긴급연락처");
            obj.set_usedecorate("true");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_certdate","125","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00","705","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_text("tesetsetset");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_prevcareer00","0","124","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_text("경조내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("경조내용");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","125","129","740","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("8");
            obj.set_accessibilityrole("edit");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_01","125","67","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("9");
            obj.set_tooltiptype("default");
            obj.set_value(" ");
            obj.set_text(" ");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid00","290","62","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("10");
            obj.set_text("<fc v=\'red\'>*</fc>관계");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("관계");
            obj.set_usedecorate("true");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_01_00","125","98","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("tsetsetset");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid00_00","290","93","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("12");
            obj.set_text("조화환 지원여부");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("조화환 지원여부");
            obj.set_usedecorate("true");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_01","415","98","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("13");
            obj.set_accessibilityrole("edit");
            obj.set_cssclass("display");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_prevcareer01","0","93","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("14");
            obj.set_text("회사지원금");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("회사지원금");
            obj.set_cssclass("sta_WF_detailLabel");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_certdate00","415","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_messageclassid","125","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("16");
            obj.set_codecolumn("C,HJS_BEN_경조금지급기준,,Y,Y");
            obj.set_index("-1");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_messageclassid00","415","67","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("17");
            obj.set_codecolumn("C,HJS_HR_CONTACT_TYPE,,Y,Y");
            obj.set_index("-1");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Button("btn_cancel00",null,"7","60","20","132",null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("4");
            obj.set_text("출력");
            obj.set_tooltiptext("출력");
            this.div_work.Tabpage3.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","div_work.Tabpage3.form.div_basicInfo.form.edt_00_01_00_01","value","ds_gonDeatilList","OBJECT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_work.Tabpage3.form.div_basicInfo.form.edt_00_01_00_00","value","ds_gonDeatilList","TELEPHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_work.Tabpage3.form.div_basicInfo.form.cal_certdate","value","ds_gonDeatilList","REQUEST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.Tabpage3.form.div_basicInfo.form.cal_certdate00","value","ds_gonDeatilList","GON_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_work.Tabpage3.form.div_basicInfo.form.edt_00_01_00_01_00","value","ds_gonDeatilList","AMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.Tabpage3.form.div_basicInfo.form.edt_00_00_01","value","ds_gonDeatilList","FLOWER_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_work.Tabpage3.form.div_basicInfo.form.edt_00_00_00","value","ds_gonDeatilList","LINE_CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BEN60320M_copy0.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: 경조금
         * 업무명 		: 경조금 신청 및 현황
         * 파일명 		: BEN60320M.xfdl
         * 작성자 		: 권택진
         * 설  명		: 경조금 현황 및 경조금 신청
         *---------------------------------------------------------------------------------------
         * 변경일		변경자			변경내역
         *---------------------------------------------------------------------------------------
         * 2022.01.19	권택진			최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
         //전역변수 선언
        var rowData;
        var flag;
        var chkCount;

        //person_id 저장
        var personId = this.gf_getPersonId();


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/

        this.fn_init = function (obj, e)
        {

        	this.nfn_formInit(obj);
        	this.applyDefault();
        };

        /**************************************************************************
         * 4. 이벤트 영역
         ***************************************************************************/


        //************************************************
        // 경조금현황검색
        //************************************************
        this.fn_search = function(obj,e)
        {

        	trace("search===============================")
        	this.ds_gonList.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PERSON_ID", personId);
        	this.ds_search.setColumn(0, "GON_GUBUN", this.div_search.form.cbo_messageclassid.value);
        	this.ds_search.setColumn(0, "STATUS", this.div_search.form.cbo_messageclassid00.value);


        	var sSvcID = "gonList";
        	var sController = "/ben60320/gonList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_gonList=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	flag = "";

        };

        //************************************************
        // 신규신청탭 클릭
        //************************************************
        this.fn_apply = function(obj,e)
        {
        	flag = "apply";
        	this.div_work.set_tabindex(1);
        };


        //************************************************
        // 그리드 셀클릭 - 상세정보 진입
        //************************************************
        this.fn_cellClick = function(obj,e)
        {
          trace("row select");
          trace(" col : ", e.col);
          trace(" row : ", e.row);

          var col = e.col;

          //클릭 시 체크박스컬럼은 제외
          if(col != 0) {
        	  flag = "select";
        	  rowData = this.ds_gonList.getColumn(e.row, "HJSBEN_EXPENSES_SEQ")

        	  trace("  rowData  : " +  rowData);
        	  this.div_work.set_tabindex(1);
          }

        };



        //************************************************
        // 경조금 신청 - 저장
        //************************************************
        this.fn_save = function(obj,e)
        {
        	var bOK = this.gfn_Message("InfoPopupSave", null, "conf", "yesno");
        	if (bOK == false) return;


        	this.ds_gonDeatilList.setColumn(0, "PERSON_ID",personId);
        	this.ds_gonDeatilList.setColumn(0, "GON_GUBUN",this.div_work.Tabpage3.form.div_basicInfo.form.cbo_messageclassid.value);
        	this.ds_gonDeatilList.setColumn(0, "RELATIONSHIP",this.div_work.Tabpage3.form.div_basicInfo.form.cbo_messageclassid00.text);

        	this.ds_gonDeatilList.setColumn(0, "REQUEST_DATE",this.div_work.Tabpage3.form.div_basicInfo.form.cal_certdate.value);
        	this.ds_gonDeatilList.setColumn(0, "GON_DATE",this.div_work.Tabpage3.form.div_basicInfo.form.cal_certdate00.value);
        	this.ds_gonDeatilList.setColumn(0, "OBJECT_NAME",this.div_work.Tabpage3.form.div_basicInfo.form.edt_00_01_00_01.value);
        	this.ds_gonDeatilList.setColumn(0, "TELEPHONE",this.div_work.Tabpage3.form.div_basicInfo.form.edt_00_01_00_00.value);
        	this.ds_gonDeatilList.setColumn(0, "AMOUNT",this.div_work.Tabpage3.form.div_basicInfo.form.edt_00_01_00_01_00.value);
        	this.ds_gonDeatilList.setColumn(0, "FLOWER_FLAG",this.div_work.Tabpage3.form.div_basicInfo.form.edt_00_00_01.value);
        	this.ds_gonDeatilList.setColumn(0, "LINE_CONTENTS",this.div_work.Tabpage3.form.div_basicInfo.form.edt_00_00_00.value);

        	trace("****************************************************************");
        	trace(this.ds_gonDeatilList.getColumn(0,"OBJECT_NAME"));
        	trace(this.ds_gonDeatilList.getColumn(0,"LINE_CONTENTS"));
        	trace(this.ds_gonDeatilList.getColumn(0,"OBJECT_NAME"));
        	trace(this.ds_gonDeatilList.getColumn(0,"RELATIONSHIP"));


        	trace("=======personId : "+ personId)

        	var sSvcID = "insertGon";
        	var sController = "/ben60320/insertGon.do";
        	var sInDatasets = "INPUT=ds_gonDeatilList:U";
        	var sOutDatasets = "ds_gonDeatilList=output";

        	var sArgs = "";
        	/*sArgs += this.gfn_setParam("method", "saveCmdDictionary");*/

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        };

        // ************************
        // 경조금 현황 - 행삭제
        // ************************
        this.fn_delete = function(obj,e)
        {
        	//선택한 내역에 대해 삭제 작업을 수행할 예정입니다. 계속 진행하시겠습니까?
        	var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        	if (bOK == false) return;


        	var chk = false;
        	var applyChk = [];
        	for (var i = this.ds_gonList.getRowCount(); i>=0; i--) {
        			if ( this.ds_gonList.getColumn(i,"CHK") == 1 ) {
        				trace("*************************CHK : "+ i);

        				var status = this.ds_gonList.getColumn(i,"STATUS")

        				//승인상태 빼고 모두 삭제가능
        				if(status != "20") {

        					applyChk.push(i)

        					chk = true;

        				}
        				else {
        					//승인상태가 선택돼있을 경우 리턴
        					this.gfn_Message("ApprovalDeleteCheckByState", "", "error", "ok");

        					return;
        				}

        			if(!chk) {
        				//체크없을 시 에러문구 출력
        				this.gfn_Message("CHECKREMOVETOOLDATA", "", "error", "ok");
        			}
        		}
        	}

        	//화면 행 삭제
        	for(i=0; i<applyChk.length; i++) {

        		this.ds_gonList.deleteRow(applyChk[i]);


        	}

        	var sSvcID = "deleteGon";
        	var sController = "/ben60320/deleteGon.do";
        	var sInDatasets = "INPUT=ds_gonList:U";
        	var sOutDatasets = "ds_gonList=output";

        	var sArgs = "";
        	/*sArgs += this.gfn_setParam("method", "saveCmdDictionary");*/

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        };


        //************************************************
        // Tab Page 변경 시(탭 페이지화면 로드 될 때)
        //************************************************
        this.tab_work_onchanged = function(obj,e)
        {


        	// dataset 현재 row
        	var selRow = this.ds_gonList.rowposition

        	trace("===selRow : "+ selRow);

        	// 선택 row 신청 상태 가져오기
        	var status = this.ds_gonList.getColumn(selRow,"STATUS");

        	trace(" =====flag : " + flag)
        	trace(" =====status: " + status);

        	//경조금 신청 탭 일경우
        	if (e.postindex == 1) {

        		//상세내역클릭경우 상세정보 뿌려주기
        		if (flag == "select") {

        			// 신청상태 == 대기일 경우 수정가능
        			if(status == "10") {



        				//입력창 활성화
        				this.div_work.Tabpage3.form.div_basicInfo.set_enable( true );

        				this.ds_gonDeatilList.clearData();

        				this.ds_detailSearch.clearData();
        				this.ds_detailSearch.addRow();
        				this.ds_detailSearch.setColumn(0, "HJSBEN_EXPENSES_SEQ", rowData);

        				var sSvcID = "gonDetailList";
        				var sController = "/ben60320/gonDetailList.do";
        				var sInDatasets = "INPUT=ds_detailSearch";
        				var sOutDatasets = "ds_gonDeatilList=output";
        				var sArgs = "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        			}

        			//대기아닐경우
        			else {

        				//입력창 비활성화
        				this.div_work.Tabpage3.form.div_basicInfo.set_enable( false );


        				this.ds_gonDeatilList.clearData();

        				this.ds_detailSearch.clearData();
        				this.ds_detailSearch.addRow();
        				this.ds_detailSearch.setColumn(0, "HJSBEN_EXPENSES_SEQ", rowData);

        				var sSvcID = "gonDetailList";
        				var sController = "/ben60320/gonDetailList.do";
        				var sInDatasets = "INPUT=ds_detailSearch";
        				var sOutDatasets = "ds_gonDeatilList=output";
        				var sArgs = "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        			}

        		}
        		//상세내역 조회가 아닌경우 초기화
        		else {

        			this.div_work.Tabpage3.form.div_basicInfo.set_enable( true );

        			this.ds_gonDeatilList.clearData();
        			this.ds_gonDeatilList.addRow();


        			var today = new nexacro.Date();

        			var year = today.getFullYear();
        			var month = today.getMonth()+1;
        			var date = today.getDate();

        			//var inputDay = year + "-" + month + "-" + date;
        			var inputDay =  year + "-" + month + "-" + date;
        			trace(" ***********************requestDay : " + inputDay);

        			this.ds_gonDeatilList.setColumn(0, "REQUEST_DATE",inputDay);
        			this.ds_gonDeatilList.setColumn(0, "AMOUNT","500000");
        			this.ds_gonDeatilList.setColumn(0, "FLOWER_FLAG","Y");

        			this.div_work.Tabpage3.form.div_basicInfo.form.cbo_messageclassid.set_value("352");
        			this.div_work.Tabpage3.form.div_basicInfo.form.cbo_messageclassid00.set_value("01");
        			this.div_work.Tabpage3.form.div_basicInfo.form.edt_00_01_00_01.set_value("");
        			this.div_work.Tabpage3.form.div_basicInfo.form.edt_00_00_00.set_value("");
        			this.div_work.Tabpage3.form.div_basicInfo.form.cal_certdate00.set_value("");
        			this.div_work.Tabpage3.form.div_basicInfo.form.edt_00_01_00_00.set_value("");


        			trace("value set 완료");

        		}
        	}

        	//화면 진입 성공 후 플래그 초기화
        	status = "";
        	flag = "";
        };

        //************************************************
        // 경조금 신청 - 경조구분 선택시
        //************************************************
        this.Combo01_onitemchanged = function(obj,e)
        {
        	this.ds_gonSupport.clearData();
        	this.ds_gonSupport.addRow();
        	this.ds_gonSupport.setColumn(0, "PERSON_ID", personId);
        	this.ds_gonSupport.setColumn(0, "GON_GUBUN", this.div_work.Tabpage3.form.div_basicInfo.form.cbo_messageclassid.value);
        	this.ds_gonSupport.setColumn(0, "GON_GUBUN_NAME", this.div_work.Tabpage3.form.div_basicInfo.form.cbo_messageclassid.text);


        	var sSvcID = "addDetail";
        	var sController = "/ben60320/addDetail.do";
        	var sInDatasets = "INPUT=ds_gonSupport";
        	var sOutDatasets = "ds_gonSupportResult=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };


        //************************************************
        // 기능 : 검색조건 초기화
        //************************************************
        this.fn_searchClear = function(obj,e)
        {

        	this.div_search.form.cbo_messageclassid.set_text("전체");
        	this.div_search.form.cbo_messageclassid00.set_text("전체");

        	trace("초기화 완료!")
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
        		if (trId == "gonList")
        		{
        // 			this.div_page.set_visible(true);
        // 			this.div_page.form.setPage(this.ds_cmdDictionary.getColumn(0, "TOTAL_ROWS"));

        			var cnt = this.ds_gonList.getRowCount();
        			this.div_work.Tabpage2.form.sta_cnt_ds_InputResultByDay.set_text("Count : " + '<fc v="#f31d24">'+cnt+'</fc>')

        		}
        		if (trId == "addDetail")
        		{
        			trace("detail !!!!!!!!!!!!!!!!!!!!! complete!!!!!!!!!!!!!");
        			trace(this.ds_gonSupportResult.getColumn(0,"SUPPORT_MONEY"));
        			trace(this.ds_gonSupportResult.getColumn(0,"FLOWER_FLAG"));

        			var supportMoney = this.ds_gonSupportResult.getColumn(0,"SUPPORT_MONEY")
        			var flower_flag = this.ds_gonSupportResult.getColumn(0,"FLOWER_FLAG")

        			this.div_work.Tabpage3.form.div_basicInfo.form.edt_00_01_00_01_00.set_value(supportMoney);
        			this.div_work.Tabpage3.form.div_basicInfo.form.edt_00_00_01.set_value(flower_flag);
        		}
        		if (trId == "insertGon")
        		{
        			trace("insert !!!!!!!!!!!!!!!!!!!!! complete!!!!!!!!!!!!!");
        			this.gfn_Message("SuccedSave", null, "info","ok");

        			this.div_work.set_tabindex(0);
        			this.fn_search();
        		}
        		if (trId == "deleteGon")
        		{
        			trace("deleteGon !!!!!!!!!!!!!!!!!!!!! complete!!!!!!!!!!!!!");
        			this.gfn_Message("SuccedSave", null, "info","ok");

        			//this.div_work.set_tabindex(0);
        			this.fn_search();
        		}

        	}
        };








        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.cbo_messageclassid.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_messageclassid.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_search.form.cbo_messageclassid00.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_messageclassid00.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.fn_searchClear,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.addEventHandler("onchanged",this.tab_work_onchanged,this);
            this.div_work.Tabpage2.form.btn_print.addEventHandler("onclick",this.fn_save,this);
            this.div_work.Tabpage2.form.btn_delLine.addEventHandler("onclick",this.fn_delete,this);
            this.div_work.Tabpage2.form.grd_qamQcinspectorhistory.addEventHandler("oncellclick",this.fn_cellClick,this);
            this.div_work.Tabpage2.form.btn_new.addEventHandler("onclick",this.fn_apply,this);
            this.div_work.Tabpage3.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.Tabpage3.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_work.Tabpage3.form.div_basicInfo.form.cal_certdate.addEventHandler("onchanged",this.div_work_Tabpage3_div_basicInfo_cal_certdate_onchanged,this);
            this.div_work.Tabpage3.form.div_basicInfo.form.edt_00_01_00_00.addEventHandler("onchanged",this.div_work_Tabpage3_div_basicInfo_edt_00_01_00_00_onchanged,this);
            this.div_work.Tabpage3.form.div_basicInfo.form.edt_00_01_00_01.addEventHandler("onchanged",this.div_work_Tabpage3_div_basicInfo_edt_00_01_00_01_onchanged,this);
            this.div_work.Tabpage3.form.div_basicInfo.form.edt_00_01_00_01_00.addEventHandler("onchanged",this.div_work_Tabpage3_div_basicInfo_edt_00_01_00_01_00_onchanged,this);
            this.div_work.Tabpage3.form.div_basicInfo.form.cal_certdate00.addEventHandler("onchanged",this.div_work_Tabpage3_div_basicInfo_cal_certdate00_onchanged,this);
            this.div_work.Tabpage3.form.div_basicInfo.form.cbo_messageclassid.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_work.Tabpage3.form.div_basicInfo.form.cbo_messageclassid.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_work.Tabpage3.form.div_basicInfo.form.cbo_messageclassid00.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_work.Tabpage3.form.btn_cancel00.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.ds_gonList.addEventHandler("canrowposchange",this.ds_gonList_canrowposchange,this);
        };
        this.loadIncludeScript("BEN60320M_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
