(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRA30210M");
            this.set_titletext("인사고충상담 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"HJSHR_COUNSELING_SEQ\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_counselingStatusList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSELOR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HJSHR_COUNSELING_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSELOR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CNAME\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_counselingStatusinfo", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSHR_COUNSELING_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSELOR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_CONTEXT\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSEL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSEL_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"OPEN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"NAMED_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSEL_CONTEXT\" type=\"STRING\" size=\"256\"/><Column id=\"ANSWER_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE1\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE2\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE3\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE4\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE5\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE6\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE7\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE8\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE9\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE10\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE11\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE12\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE13\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE14\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE15\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE16\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_LOGIN\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_clear",null,"8","60","20","76",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"8","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0.00%","36",null,"67","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_search");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","21","10","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("신청기간");
            obj.set_tooltiptext("신청기간");
            obj.set_usedecorate("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","388","10","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("상태");
            obj.set_tooltiptext("상태");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_01","21","35","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("제목");
            obj.set_tooltiptext("제목");
            obj.set_usedecorate("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_status","498","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,HJS_HR_HRA_COUNSEL_STATUS,ALL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_startDate","131","10","110","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","241","10","17","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_unit");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_endDate","258","10","110","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_subject","131","35","491","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_personId","859","40","41","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_background("yellow");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Tab("div_work","0","103",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work);
            obj.set_text("인사고충상담 현황");
            obj.set_tooltiptext("인사고충상담 현황");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("인사고충상담 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("인사고충상담 현황");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_counselingStatus","0","34",null,null,"0","10",null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_counselingStatusList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"460\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\" tooltiptext=\"상태\"/><Cell col=\"2\" text=\"신청일자\" tooltiptext=\"신청일자\"/><Cell col=\"3\" text=\"제목\" tooltiptext=\"제목\"/><Cell col=\"4\" text=\"작성자\" tooltiptext=\"작성자\"/><Cell col=\"5\" text=\"상담자\" tooltiptext=\"상담자\"/></Band><Band id=\"body\"><Cell text=\"bind:CHECK_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:STATUS_NAME\"/><Cell col=\"2\" text=\"bind:REQUEST_DATE\"/><Cell col=\"3\" text=\"bind:SUBJECT\" color=\"blue\"/><Cell col=\"4\" text=\"bind:NAME\"/><Cell col=\"5\" text=\"bind:CNAME\"/></Band></Format></Formats>");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_counselingStatusList","219","0","140","34",null,null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_statusApply",null,"7","60","20","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("접수");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("접수");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delLine",null,"7","60","20","66",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_tooltiptext("행삭제");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"7","60","20","132",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("출력");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("출력");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work);
            obj.set_text("인사고충상담 등록");
            obj.set_tooltiptext("인사고충상담 등록");
            obj.set_enable("true");
            obj.set_enableevent("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","241","34",null,null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("고충상담 내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("고충상담 내역");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_basicInfo","5","37",null,"483","-5",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detail_nobg");
            obj.set_text("");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","120","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("등록일자");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_prevcareer","0","124","120","164",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("12");
            obj.set_text("고충내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("고충내용");
            obj.set_usedecorate("false");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate","0","93","120","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("10");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("제목");
            obj.set_usedecorate("false");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_date","125","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            obj.set_enableevent("false");
            obj.set_enable("false");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_subject","125","98","777","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            obj.set_enableevent("false");
            obj.set_enable("false");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_site00","430","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("사번");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00","0","30",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","61",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new TextArea("txa_counselContext","125","129","777","153",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("13");
            obj.set_cssclass("display");
            obj.set_enableevent("false");
            obj.set_enable("false");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_site01","0","31","120","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("작성자");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate00","0","62","120","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("부서");
            obj.set_usedecorate("false");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_site00_00","430","62","120","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("8");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("직급");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","0","92",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00","0","123",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00","0","287",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_prevcareer00","0","288","120","194",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("14");
            obj.set_text("<fc v=\'red\'>*</fc>상담내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("상담내용");
            obj.set_usedecorate("true");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new TextArea("txa_content","125","293","777","183",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("15");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_writerName","125","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("display");
            obj.set_enableevent("false");
            obj.set_enable("false");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_orgName","125","67","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("display");
            obj.set_enableevent("false");
            obj.set_enable("false");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_jikwiName","554","67","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("9");
            obj.set_cssclass("display");
            obj.set_enableevent("false");
            obj.set_enable("false");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_writedId","554","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("display");
            obj.set_enableevent("false");
            obj.set_enable("false");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"7","60","20","66",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_tooltiptext("취소");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","60","20","0",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.div_work.Tabpage2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_work.Tabpage2.form.div_basicInfo.form.cal_date","value","ds_counselingStatusinfo","REQUEST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.Tabpage2.form.div_basicInfo.form.edt_writerName","value","ds_counselingStatusinfo","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.Tabpage2.form.div_basicInfo.form.edt_writedId","value","ds_counselingStatusinfo","EMPLOYEE_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_work.Tabpage2.form.div_basicInfo.form.edt_jikwiName","value","ds_counselingStatusinfo","GRADE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_work.Tabpage2.form.div_basicInfo.form.edt_subject","value","ds_counselingStatusinfo","SUBJECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_work.Tabpage2.form.div_basicInfo.form.txa_content","value","ds_counselingStatusinfo","COUNSEL_CONTEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_work.Tabpage2.form.div_basicInfo.form.edt_orgName","value","ds_counselingStatusinfo","ORG_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_work.Tabpage2.form.div_basicInfo.form.txa_counselContext","value","ds_counselingStatusinfo","REQUEST_CONTEXT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HRA30210M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: SM상선 myHR Application고도화 사업
         * 업무명 		: 인사고충상담 등록
         * 파일명 		: HRA30210M.xfdl
         * 작성자 		: 유성연
         * 작성일 		: 2022.01.20
         *
         * 설  명		: 인사고충상담 등록
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2022.01.20	유성연   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


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
        	//화면 초기화
        	this.nfn_formInit(obj);

        	var personId = this.gf_getPersonId();
        	this.div_search.form.edt_personId.set_value(personId);

        	this.fn_formInit();
        	this.fn_search();
        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/

         // 조건 초기화
        this.fn_searchClear = function(obj,e)
        {
        	 this.fn_formInit();
        };

        // 달력현재날짜로 초기화
        this.fn_formInit = function()
        {
        	this.fv_currDate = this.nfn_getCurrentSystemTime();
        	this.div_search.form.cal_startDate.set_value(this.gfn_getBeforeMonth());
        	this.div_search.form.cal_endDate.set_value(this.fv_currDate);
        } ;

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
            this.ds_counselingStatusList.clearData();					 //Target output Dataset clear
        	this.ds_search.clearData();
        	var row = this.ds_search.addRow();
        	this.ds_search.setColumn(row, "FROM_DATE", this.div_search.form.cal_startDate.value);
        	this.ds_search.setColumn(row, "TO_DATE", this.div_search.form.cal_endDate.value);
        	this.ds_search.setColumn(row, "STATUS", this.div_search.form.cbo_status.value);
        	this.ds_search.setColumn(row, "SUBJECT", this.div_search.form.edt_subject.value);
        	this.ds_search.setColumn(row, "PERSON_ID", this.div_search.form.edt_personId.value);

        //	trace(this.ds_search.saveXML("Dataset", "V"));
        	var sSvcID 			= "selectCounselingStatusList";
        	var sController 	= "/hra30210/selectCounselingStatusList.do" ;
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_counselingStatusList=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 상세
         */

        this.fn_searchDetail = function(obj,e)
        {
        	if (e.col == obj.getBindCellIndex("body", "SUBJECT"))
        	{
        		//Dataset clear
        		this.ds_counselingStatusinfo.clearData();
        		this.ds_search.clearData();
        		this.div_work.set_tabindex(1);

        	   // 상단의 dataset에서 원하는 값을 해당하는 로우에서 꺼내옴.
        		var counselingSeq = this.ds_counselingStatusList.getColumn(this.ds_counselingStatusList.rowposition, "HJSHR_COUNSELING_SEQ");

        		var nRow = this.ds_search.addRow();			//dataset에 row를 추가하고 데이터를 입력.

        		this.ds_search.setColumn(nRow, "HJSHR_COUNSELING_SEQ",  counselingSeq); //사용자Id DATA

        		var sSvcID 			= "selectCounselingStatusDetail"; 						// CallBack service name
        		var sController 	= "/hra30210/selectCounselingStatusDetail.do" ;			// CONTROLLER VALUE
        		var sInDatasets 	= "INPUT=ds_search";						   		// DB INPUT  DATA
        		var sOutDatasets 	= "ds_counselingStatusinfo=output";						// DB OUTPUT DATA
        		var sArgs 			= "";

        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        };


        /*
         * 기능 : 저장
         */
         this.fn_save = function(obj,e)
        {
            //데이터 미존재시 return
        	if (this.ds_counselingStatusinfo.rowcount < 1) return;
        	//변경된 데이터가 있는지 체크
        	if (!this.gfn_dsIsUpdated(this.ds_counselingStatusinfo))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}
        	var objDataset = "ds_counselingStatusinfo";
        	var strColIdList = "COUNSEL_CONTEXT";
        	var strColNmList = "상담내용"

        	var rtn = this.nfn_MandatoryCheckDs(objDataset, strColIdList, strColNmList);
        	if (rtn == false) return;
        	//---------------------
        	// 저장
        	// ':U'는 갱싱된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N'은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 저장하지않는 데이터세트는 Normal로 동작합니다.
        	// ---------------------
        	var sSvcID 			= "saveCounselingStatus";				// CallBack service name
        	var sController 	= "/hra30210/saveCounselingStatus.do";
        	var sInDatasets 	= "INPUT=ds_counselingStatusinfo:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	this.div_work.set_tabindex(1);

        	//trace(this.ds_counselingStatusinfo.saveXML("Dataset", "V"));
        };

        /*
         * 기능 : 행삭제
         */
        this.fn_delline = function(obj,e)
        {
        	//데이터 미존재시 return
        	if (this.ds_counselingStatusList.rowcount < 1) return;

        	//선택 대상중 상태가 "승인"인 데이터가 존재하면 오류 처리
        	var validCount = 0;
        	var inValidCount = 0;
        	var arrDelRow = []; //삭제대상 리스트
        	for (i=0; i< this.ds_counselingStatusList.getRowCount(); i++){
        		var checkYn = this.ds_counselingStatusList.getColumn(i, "CHECK_YN");
        		var status = this.ds_counselingStatusList.getColumn(i, "STATUS");

        		if (checkYn == "1" && status == "02") //체크대상 접수
        		{
        			inValidCount++;
        		}
        		else if (checkYn == "1" && status == "01") //체크대상 신청
        		{
        			validCount++;
        			arrDelRow.push(i);
        		}
        	}

        	if (inValidCount > 0)
        	{
        		this.gfn_Message("승인상태 내역은 삭제할 수 없습니다.", null, "info", "ok"); //접수 상태 내역은 삭제할 수 없습니다.
        		return;
        	}

        	if (validCount < 1)
        	{
        		this.gfn_Message("NoSelectData", null, "info", "ok");
        		return;
        	}

        	var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno"); //선택한 내역에 대해 삭제 작업을 수행할 예정입니다. 계속 진행하시겠습니까?
        	if (!bOK) return;

        	//선택된 행삭제

        		this.ds_counselingStatusList.deleteMultiRows(arrDelRow);

        		// -------------------------
        		// 저장
        		// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        		// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        		// -------------------------
        		var sSvcID 			= "saveCounselingStatus";
        		var sController 	= "/hra30210/saveCounselingStatus.do";
        		var sInDatasets 	= "INPUT= ds_counselingStatusList:U";
        		var sOutDatasets 	= "";
        		var sArgs 			= "";

        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
        * 기능: 출력버튼
        */
        this.fn_print = function(obj,e)
        {
        	//데이터가 없는 경우
        	if (this.ds_counselingStatusList.rowcount < 1){
        		this.gfn_Message("NoSelections", null, "info", "ok");
        		return;
        	}

           	// 체크된 대상이 존재하는지 확인
        	var checkCount = this.ds_counselingStatusList.getCaseCount("CHECK_YN == '1'");

        	//체크된 데이터가 없는 경우
        	if(checkCount == 0)
        	{
        		this.gfn_Message("NoSelections", null, "info", "ok");
        		return;
        	}
        	else if(checkCount > 1)
        	{
        		this.gfn_Message("한 건만 선택해주십시오.", null, "info", "ok");
        		return;
        	}

        	var nRow = this.ds_counselingStatusList.findRow("CHECK_YN", '1');
        	var counselingStatus = this.ds_counselingStatusList.getColumn(this.ds_counselingStatusList.rowposition, "STATUS");

        	// 접수건만 출력이 가능하도록
        	if(counselingStatus=="01"){
        		this.gfn_Message("신청건은 출력이 불가능합니다.", null, "info", "ok");
        		return;
        	}
        	else
        	{
        		//레포트 호출
        		alert("레포트 호출 미구현");
        	}
        };

        /*
         * 기능 : 취소버튼
         */
        this.fn_cancle = function(obj,e)
        {
        	//데이터 미존재시 return
        	if (this.ds_counselingStatusinfo.rowcount < 1) return;

        	this.div_work.Tabpage2.form.div_basicInfo.form.txa_context.set_value("");
        };

        /*
        * 기능 : 접수
        */
        this.fn_statusChange = function(obj,e)
        {
        	var validCount = 0;
        	var inValidCount = 0;
        	for(i=0;i<this.ds_counselingStatusList.getRowCount();i++){
        		var counselingStatus = this.ds_counselingStatusList.getColumn(i, "STATUS");
        		var checkYN = this.ds_counselingStatusList.getColumn(i, "CHECK_YN");
        		//체크된 대상중 상태가 신청인 경우 접수대상
        		if (counselingStatus=="01" && checkYN =="1") {
        			validCount++;
        		}
        		//체크된 대상중 상태가 접수인 경우 오류대상
        		else if (counselingStatus=="02" && checkYN =="1") {
        		    inValidCount++;
        			this.gfn_Message("신청건만 접수가 가능합니다.", null, "info", "ok");
        		}
        	}

         	//접수건이 있고 신청건이 없을경우
        	if(inValidCount>0) {
        		this.ds_counselingStatusList.setColumn(i, "STATUS", "01");
        		this.gfn_Message("NotExistList", "신청건", "info", "ok");
        	}
        	//신청건이 0일 경우
        	else if(validCount==0) {
        		this.gfn_Message("NotExistList", "신청건", "info", "ok");
        	}
        	else if(inValidCount>0 && validCount>0){
        		this.gfn_Message("신청건만 접수가 가능합니다.", null, "info", "ok");
        	}

        	//신청건이 0보다 클경우
         	for(i=0;i<this.ds_counselingStatusList.getRowCount();i++){
         		var counselingStatus = this.ds_counselingStatusList.getColumn(i, "STATUS");
        		var checkYN = this.ds_counselingStatusList.getColumn(i, "CHECK_YN");

        		//체크된 대상중 상태가 신청인 경우 접수대상
        		if (counselingStatus=="01" && checkYN =="1") {
        			this.ds_counselingStatusList.setColumn(i, "STATUS", "02");
        		}
        	}
        	var sSvcID 			= "saveChangeStatus";
        	var sController 	= "/hra30210/saveChangeStatus.do";
        	var sInDatasets 	= "INPUT= ds_counselingStatusList:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	//trace(this.ds_counselingStatusList.saveXML("Dataset", "V"));
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
                if (trId == "selectCounselingStatusList") //조회 service name
                {
        		 	if(this.ds_counselingStatusList.rowcount<1){
        				this.gfn_Message("NotExistList", "고충상담현황", "info", "ok");
        				return;
         	}

        	    }
        		else if(trId == "selectCounselingStatusDetail")	//상세조회
        		{
        			var status = this.ds_counselingStatusinfo.getColumn(this.ds_counselingStatusinfo.rowposition, "STATUS");
        			if(status == "01")
        			{
        				this.div_work.Tabpagee.form.btn_save.set_enable(true);
        			}
        			else if(status == "02")
        			{
        				this.div_work.Tabpage2.form.btn_save.set_enable(false);
        			}
        			this.div_work.Tabpagee.form.btn_cancel.set_enable(false);
        			this.div_work.set_tabindex(1);
        		}
        		else if (trId == "saveCounselingStatus")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.div_work.set_tabindex(0);
        			this.fn_search();
        		}
        		else if (trId == "saveChangeStatus")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.div_work.set_tabindex(0);
        			this.fn_search();
        		}
            }
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/


        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/






        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_clear.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_search.form.Static00.addEventHandler("onclick",this.div_search_Static00_onclick,this);
            this.div_search.form.cbo_status.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_status.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.addEventHandler("onchanged",this.tab_work_onchanged,this);
            this.div_work.Tabpage1.form.grd_counselingStatus.addEventHandler("oncellclick",this.fn_searchDetail,this);
            this.div_work.Tabpage1.form.btn_statusApply.addEventHandler("onclick",this.fn_statusChange,this);
            this.div_work.Tabpage1.form.btn_delLine.addEventHandler("onclick",this.fn_delline,this);
            this.div_work.Tabpage1.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_work.Tabpage2.form.div_basicInfo.form.sta_prevcareer.addEventHandler("onclick",this.div_work_Tabpage3_div_basicInfo_sta_prevcareer_onclick,this);
            this.div_work.Tabpage2.form.div_basicInfo.form.cal_date.addEventHandler("onchanged",this.div_work_Tabpage2_div_basicInfo_cal_date_onchanged,this);
            this.div_work.Tabpage2.form.div_basicInfo.form.txa_counselContext.addEventHandler("onchanged",this.div_work_Tabpage2_div_basicInfo_txa_00_00_onchanged,this);
            this.div_work.Tabpage2.form.div_basicInfo.form.sta_prevcareer00.addEventHandler("onclick",this.div_work_Tabpage3_div_basicInfo_sta_prevcareer_onclick,this);
            this.div_work.Tabpage2.form.div_basicInfo.form.txa_content.addEventHandler("onchanged",this.div_work_Tabpage2_div_basicInfo_txa_content_onchanged,this);
            this.div_work.Tabpage2.form.div_basicInfo.form.edt_writerName.addEventHandler("onchanged",this.div_work_Tabpage2_div_basicInfo_edt_writerName_onchanged,this);
            this.div_work.Tabpage2.form.div_basicInfo.form.edt_writedId.addEventHandler("onchanged",this.div_work_Tabpage2_div_basicInfo_edt_writedId_onchanged,this);
            this.div_work.Tabpage2.form.btn_cancel.addEventHandler("onclick",this.fn_cacnel,this);
            this.div_work.Tabpage2.form.btn_save.addEventHandler("onclick",this.fn_save,this);
        };
        this.loadIncludeScript("HRA30210M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
