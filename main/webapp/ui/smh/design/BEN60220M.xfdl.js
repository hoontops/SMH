(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BEN60220M");
            this.set_titletext("자녀 학자금");
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
            obj.set_text("<fc v=\'red\'>*</fc>기준년도");
            obj.set_tooltiptext("기준년도");
            obj.set_usedecorate("true");
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
            obj.set_codecolumn("C,MsgGroup,ALL,Y,Y");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","247","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("상태");
            obj.set_tooltiptext("상태");
            obj.set_usedecorate("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_messageclassid00","329","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,MsgGroup,ALL,Y,Y");
            obj.set_index("-1");
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
            obj.set_text("자녀학자금 현황");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","60","20","66",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("출력");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("출력");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"7","60","20","0",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_tooltiptext("출력");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("자녀학자금 신청 내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("자녀학자금 신청 내역");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","68",null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"상태\" tooltiptext=\"상태\"/><Cell col=\"2\" text=\"신청일자\" tooltiptext=\"신청일자\"/><Cell col=\"3\" text=\"년도\" tooltiptext=\"년도\"/><Cell col=\"4\" text=\"분기\" tooltiptext=\"분기\"/><Cell col=\"5\" text=\"학력\" tooltiptext=\"학력\"/><Cell col=\"6\" text=\"학교\" tooltiptext=\"학교\"/><Cell col=\"7\" text=\"수혜자\" tooltiptext=\"수혜자\"/><Cell col=\"8\" text=\"관계\" tooltiptext=\"관계\"/><Cell col=\"9\" text=\"신청금액\" tooltiptext=\"신청금액\"/><Cell col=\"10\" text=\"승인금액\" tooltiptext=\"승인금액\"/></Band><Band id=\"summary\"><Cell colspan=\"9\" text=\"합계\" tooltiptext=\"합계\" textAlign=\"center\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band></Format></Formats>");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_InputResultByDay","219","0","140","34",null,null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_save00",null,"7","60","20","132",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_text("신규");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("신규");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static16","15",null,null,"24","15","34",null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("※ 임직원 자녀학자금 신청서 접수 마감일은 매월 10일 입니다. (기한내 신청서 및 관련증빙 필착요망)");
            obj.set_cssclass("sta_font_blue");
            obj.set_tooltiptext("※ 임직원 자녀학자금 신청서 접수 마감일은 매월 10일 입니다. (기한내 신청서 및 관련증빙 필착요망)");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static16_00","15",null,null,"24","15","10",null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("※ 자녀학자금 신청서, 등록금 고지서(또는 영수증 사본), 전 학생 성적증명서(대학생)를 제출바랍니다.");
            obj.set_cssclass("sta_font_blue");
            obj.set_tooltiptext("※ 자녀학자금 신청서, 등록금 고지서(또는 영수증 사본), 전 학생 성적증명서(대학생)를 제출바랍니다.");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work);
            obj.set_text("자녀학자금 신청");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","241","34",null,null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_text("수혜자녀 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("수혜자녀 정보");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"7","60","20","67",null,null,null,null,null,this.div_work.Tabpage3.form);
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

            obj = new Div("div_basicInfo","0","34",null,"63","0",null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_text("<fc v=\'red\'>*</fc>수혜자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("수혜자");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_area","580","0","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_text("<fc v=\'red\'>*</fc>학교");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("학교");
            obj.set_usedecorate("true");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid","290","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_text("전공");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("전공");
            obj.set_usedecorate("false");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspector","290","0","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_text("<fc v=\'red\'>*</fc>학력");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("학력");
            obj.set_usedecorate("true");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate","0","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_text("<fc v=\'red\'>*</fc>학년");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("학년");
            obj.set_usedecorate("true");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_enterdate","580","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("5");
            obj.set_text("학점");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("학점");
            obj.set_usedecorate("false");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00","415","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("6");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01","705","36","60","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_text("9928");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00","765","36","14","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("8");
            obj.set_text("/");
            obj.set_cssclass("sta_WF_unit");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01_00","779","36","60","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("9");
            obj.set_text("9928");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_inspectionclassid00","125","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("10");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_inspectionclassid00_00","415","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("11");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_inspectionclassid00_01","125","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("12");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","705","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("13");
            this.div_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_00","0","97","241","34",null,null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("4");
            obj.set_text("학자금 신청 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("학자금 신청 정보");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Div("div_basicInfo00","0","131",null,"156","0",null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("신청일자");
            obj.set_taborder("0");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid","290","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_text("<fc v=\'red\'>*</fc>분기");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("분기");
            obj.set_usedecorate("true");
            obj.set_taborder("1");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("sta_certdate","0","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_text("<fc v=\'red\'>*</fc>년도");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("년도");
            obj.set_usedecorate("true");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Calendar("cal_certdate","125","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Edit("edt_00","415","67","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_taborder("6");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00","125","67","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_taborder("7");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("sta_certdate00","0","62","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_text("입학금");
            obj.set_tooltiptext("입학금");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid00","290","62","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_taborder("15");
            obj.set_text("수업료");
            obj.set_tooltiptext("수업료");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("sta_enterdate00","580","62","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_text("학교운영비");
            obj.set_tooltiptext("학교운영비");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("sta_certdate00_00","0","93","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_text("학생회비");
            obj.set_tooltiptext("학생회비");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid00_00","290","93","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_text("육성회비");
            obj.set_tooltiptext("육성회비");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("sta_enterdate00_00","580","93","120","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_text("기타(입학축하금)");
            obj.set_tooltiptext("기타(입학축하금)");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("sta_enterdate00_00_00","0","124","700","31",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_text("합계");
            obj.set_tooltiptext("합계");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Combo("cmb_inspectionclassid00_00","125","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_taborder("17");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Combo("cmb_inspectionclassid00_00_00","415","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_taborder("18");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00","125","98","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_taborder("15");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","415","98","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_taborder("16");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Edit("edt_00_01","705","67","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_taborder("17");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","705","98","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_taborder("18");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","705","129","160","20",null,null,null,null,null,null,this.div_work.Tabpage3.form.div_basicInfo00.form);
            obj.set_taborder("19");
            obj.set_cssclass("display");
            this.div_work.Tabpage3.form.div_basicInfo00.addChild(obj.name, obj);

            obj = new Static("Static16","15","297",null,"24","15",null,null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("6");
            obj.set_text("※ 학교운영비는 고등학교에 한하여 지원가능.");
            obj.set_cssclass("sta_font_blue");
            obj.set_tooltiptext("※ 학교운영비는 고등학교에 한하여 지원가능.");
            this.div_work.Tabpage3.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","div_work.Tabpage3.form.div_basicInfo00.form.cal_certdate","value","ds_qamQcinspector","CERTDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_search.form.cbo_messageclassid.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_messageclassid.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_search.form.cbo_messageclassid00.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_messageclassid00.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.addEventHandler("onchanged",this.tab_work_onchanged,this);
            this.div_work.Tabpage2.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_work.Tabpage2.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.Tabpage2.form.btn_save00.addEventHandler("onclick",this.fn_save,this);
            this.div_work.Tabpage3.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.Tabpage3.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_work.Tabpage3.form.div_basicInfo.form.sta_inspector.addEventHandler("onclick",this.tab_work_Tabpage1_div_basicInfo_sta_inspector_onclick,this);
        };
        this.loadIncludeScript("BEN60220M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
