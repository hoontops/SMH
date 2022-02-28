(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRA30410M");
            this.set_titletext("HR Q&A (문의게시판)");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"HJSHR_COUNSELING_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selectQnaList", this);
            obj._setContents("<ColumnInfo><Column id=\"REQUEST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSEL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSEL_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSELOR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CNAME\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HJSHR_COUNSELING_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selectQnaDetailInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"REQUEST_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSELOR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_CONTEXT\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSEL_CONTEXT\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREA_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"COUNSEL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("신청기간");
            obj.set_tooltiptext("신청기간");
            obj.set_usedecorate("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","388","10","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("상태");
            obj.set_tooltiptext("상태");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_01","21","35","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("제목");
            obj.set_tooltiptext("제목");
            obj.set_usedecorate("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_status","498","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,HJS_HR_HRA_COUNSEL_STATUS,ALL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_startDate","131","10","110","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","241","10","17","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_unit");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_endDate","258","10","110","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_subject","131","35","491","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
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
            obj.set_text("HR Q&A 현황");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","141","34",null,null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("HR Q&A 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("HR Q&A 현황");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_selectQnaList","149","0","140","34",null,null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delline",null,"7","60","20","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_tooltiptext("행삭제");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_qnaList","0","34",null,null,"0","10",null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_selectQnaList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"350\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"상태\" tooltiptext=\"상태\"/><Cell col=\"2\" text=\"등록일자\" tooltiptext=\"등록일자\"/><Cell col=\"3\" text=\"분류\" tooltiptext=\"분류\"/><Cell col=\"4\" text=\"제목\" tooltiptext=\"제목\"/><Cell col=\"5\" text=\"작성자\" tooltiptext=\"작성자\"/><Cell col=\"6\" text=\"상담자\" tooltiptext=\"상담자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHECK_YN\"/><Cell col=\"1\" text=\"bind:STATUS_NAME\"/><Cell col=\"2\" text=\"bind:REQUEST_DATE\"/><Cell col=\"3\" text=\"bind:AREA_NAME\"/><Cell col=\"4\" text=\"bind:SUBJECT\" color=\"blue\"/><Cell col=\"5\" text=\"bind:NAME\"/><Cell col=\"6\" text=\"bind:CNAME\"/></Band></Format></Formats>");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work);
            obj.set_text("HR Q&A 등록");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","141","34",null,null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("HR Q&A 등록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("HR Q&A 등록");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_basicInfo","0","34",null,"424","0",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("3");
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

            obj = new Static("sta_site","0","0","140","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("등록일자");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_area","0","93","140","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_text("분류");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("분류");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid","0","124","140","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("제목");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspector","0","31","140","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("작성자");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate","450","93","140","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_text("상담자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("상담자");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_certdate","145","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_subject","145","129","757","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("display");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_prevcareer","0","155","140","125",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_text("상담내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("상담내용");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_reply","0","280","140","142",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("8");
            obj.set_text("<fc v=\'red\'>*</fc>답변내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("답변내용");
            obj.set_usedecorate("true");
            obj.set_border("0px none");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new TextArea("txa_context","146","160","757","114",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("9");
            obj.set_cssclass("display");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new TextArea("txa_answer","146","285","757","132",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("10");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspector00","0","62","140","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("11");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("부서");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspector01","450","31","140","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("12");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("사번");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspector00_00","450","62","140","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("13");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("직급");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00","0","30",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00_00","0","61",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00_00_00","0","92",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00_00_00_00","0","123",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00_00_00_00_00","0","154",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00_00_00_00_00_00","0","279",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_writer","145","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("20");
            obj.set_cssclass("display");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_employeeNo","595","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("21");
            obj.set_cssclass("display");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm","145","67","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("22");
            obj.set_cssclass("display");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_gradeNm","595","67","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("23");
            obj.set_cssclass("display");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_areaNm","145","98","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("24");
            obj.set_cssclass("display");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_counselor","595","98","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("25");
            obj.set_cssclass("display");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","60","20","1",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"7","60","20","67",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_tooltiptext("취소");
            this.div_work.Tabpage2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_work.Tabpage2.form.div_basicInfo.form.cal_certdate","value","ds_selectQnaDetailInfo","REQUEST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_work.Tabpage2.form.div_basicInfo.form.cal_certdate","accessibilityaction","ds_selectQnaDetailInfo","REQUEST_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.Tabpage2.form.div_basicInfo.form.edt_areaNm","value","ds_selectQnaDetailInfo","AREA_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_work.Tabpage2.form.div_basicInfo.form.edt_gradeNm","value","ds_selectQnaDetailInfo","GRADE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_work.Tabpage2.form.div_basicInfo.form.edt_deptNm","value","ds_selectQnaDetailInfo","ORG_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_work.Tabpage2.form.div_basicInfo.form.edt_employeeNo","value","ds_selectQnaDetailInfo","EMPLOYEE_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_work.Tabpage2.form.div_basicInfo.form.edt_counselor","value","ds_selectQnaDetailInfo","COUNSELOR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_work.Tabpage2.form.div_basicInfo.form.txa_context","value","ds_selectQnaDetailInfo","REQUEST_CONTEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_work.Tabpage2.form.div_basicInfo.form.txa_answer","value","ds_selectQnaDetailInfo","COUNSEL_CONTEXT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_work.Tabpage2.form.div_basicInfo.form.edt_subject","value","ds_selectQnaDetailInfo","SUBJECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_work.Tabpage2.form.div_basicInfo.form.edt_writer","value","ds_selectQnaDetailInfo","NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HRA30410M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: SM상선 myHR Application고도화 사업
         * 업무명 		: HR Q&A(문의게시판)
         * 파일명 		: HRA30410M.xfdl
         * 작성자 		: 이정훈
         * 작성일 		: 2022.01.26
         *
         * 설  명		: HR Q&A(문의게시판)
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2022.01.26	이정훈   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.personId;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	//화면 초기화
        	this.nfn_formInit(obj);

        	this.personId = this.gf_getPersonId(); 		 // 사용자계정
        	this.svrdate = this.gfn_svrToday();  		//오늘날짜
        	this.agoMonth = this.gfn_getBeforeMonth(); // 한달전날짜

        	this.fv_currDate = this.nfn_getCurrentSystemTime(); //오늘날짜
        	this.userAcnt = this.gf_getUserAcnt();			// 사용자사번

        	this.fn_formInit();
        	this.fn_search();
        };

        //필요한 데이터를 해당위치에 보여줌
        this.fn_formInit = function ()
        {
        	this.div_search.form.cal_startDate.set_value(this.agoMonth);
        	this.div_search.form.cal_endDate.set_value(this.fv_currDate);
        	this.div_search.form.edt_subject.set_value("");
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/

         // 조건 초기화
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        };


        /*
         * 기능 : 검색
         */

        this.fn_search = function (obj, e)
        {
        	this.ds_selectQnaList.clearData();					 //Target output Dataset clear
        	this.ds_search.clearData();							 //Search Condition Dataset clear

        	var nRow = this.ds_search.addRow();		      	//dataset에 row를 추가하고 데이터를 입력.
        	this.ds_search.setColumn(nRow, "FROM_DATE", this.agoMonth);
        	this.ds_search.setColumn(nRow, "TO_DATE", this.div_search.form.cal_endDate.value);
        	this.ds_search.setColumn(nRow, "STATUS", this.div_search.form.cbo_status.value);
        	this.ds_search.setColumn(nRow, "SUBJECT", this.div_search.form.edt_subject.value);
        	this.ds_search.setColumn(nRow, "PERSON_ID",  this.personId); //사용자 57268
        	this.ds_search.setColumn(nRow, "USERACNT",  this.userAcnt); //사용자 170052

        	var sSvcID 			= "selectQnaList"; 							 		// CallBack service name
        	var sController 	= "/hra30410/selectQnaList.do" ;			        // CONTROLLER VALUE
        	var sInDatasets 	= "INPUT=ds_search";						   			// DB INPUT  DATA
        	var sOutDatasets 	= "ds_selectQnaList=output";						    // DB OUTPUT DATA
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
        		this.ds_selectQnaDetailInfo.clearData();
        		this.ds_search.clearData();

        	   // 상단의 dataset에서 원하는 값을 해당하는 로우에서 꺼내옴.
        		var qnaSeq = this.ds_selectQnaList.getColumn(this.ds_selectQnaList.rowposition, "HJSHR_COUNSELING_SEQ");
        		var nRow = this.ds_search.addRow();			//dataset에 row를 추가하고 데이터를 입력.
        		this.ds_search.setColumn(nRow, "HJSHR_COUNSELING_SEQ",  qnaSeq); //사용자Id DATA

        		var sSvcID 			= "selectQnaDetail"; 						// CallBack service name
        		var sController 	= "/hra30410/selectQnaDetail.do" ;			// CONTROLLER VALUE
        		var sInDatasets 	= "INPUT=ds_search";						   		// DB INPUT  DATA
        		var sOutDatasets 	= "ds_selectQnaDetailInfo=output";						// DB OUTPUT DATA
        		var sArgs 			= "";

        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        };

        /*
         * 기능 : 저장
         */
         this.fn_save = function(obj,e)
        {
        	if (this.ds_selectQnaDetailInfo.rowcount < 1) return;

        	var objDataset = "ds_selectQnaDetailInfo";
        	var strColIdList = "COUNSEL_CONTEXT";
        	var strColNmList = "답변내용"

        	var rtn = this.nfn_MandatoryCheckDs(objDataset, strColIdList, strColNmList);
        	if (rtn == false) return;
        	//---------------------
        	// 저장											진행전
        	// ':U'는 갱싱된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N'은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 저장하지않는 데이터세트는 Normal로 동작합니다.
        	// ---------------------
        	var sSvcID 			= "saveQna";				// CallBack service name
        	var sController 	= "/hra30410/saveQna.do";
        	var sInDatasets 	= "INPUT=ds_selectQnaDetailInfo:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 행삭제
         */
        this.fn_delline = function(obj,e)
        {
        	//데이터 미존재시 return
        	if (this.ds_selectQnaList.rowcount < 1) return;

        	//선택 대상중 상태가 "승인"인 데이터가 존재하면 오류 처리
        	var validCount = 0;
        	var inValidCount = 0;
        	var arrDelRow = []; //삭제대상 리스트
        	for (i=0; i< this.ds_selectQnaList.getRowCount(); i++){

        		var checkYn = this.ds_selectQnaList.getColumn(i, "CHECK_YN");
        		var status = this.ds_selectQnaList.getColumn(i, "STATUS");

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
        		this.gfn_Message("접수상태 내역은 삭제할 수 없습니다.", null, "info", "ok"); //접수 상태 내역은 삭제할 수 없습니다.
        		return;
        	}

        	if (validCount < 1)
        	{
        		this.gfn_Message("SelectData", this.nfn_nvl(this.nfn_getDictionarynameUpper("HR Q&A 현황"),"HR Q&A 현황") , "info", "ok");
        		return;
        	}

        	var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno"); //선택한 내역에 대해 삭제 작업을 수행할 예정입니다. 계속 진행하시겠습니까?
        	if (!bOK) return;

        	//선택된 행삭제

        	this.ds_selectQnaList.deleteMultiRows(arrDelRow);

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveQna";
        	var sController 	= "/hra30410/saveQna.do";
        	var sInDatasets 	= "INPUT= ds_selectQnaList:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	this.gfn_Message("SuccessDelete", null, "info", "ok");

        };


        /*
         * 기능 : 신청버튼
         */
        this.fn_apply = function(obj,e)
        {
        };

        /*
         * 기능 : 취소버튼
         */
        this.fn_cancle = function(obj,e)
        {
        	var clearcom = '<fc v="red">*</fc>답변내용\n(0/ 1000)' ;

        	this.div_work.Tabpage2.form.div_basicInfo.form.txa_answer.set_value("");  //답변부분 초기화
        	this.div_work.Tabpage2.form.div_basicInfo.form.sta_reply.set_text(clearcom);

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
                if (trId == "selectQnaList") //조회 service name
                {
        			if(this.ds_selectQnaList.rowcount < 1 )
        			{
        				//trace("count: " + this.ds_counselingList.rowcount);
        				 this.gfn_Message("NotExistList", this.nfn_nvl(this.nfn_getDictionarynameUpper("HR Q&A 현황"),"HR Q&A 현황") , "info", "ok");
        			}
        	    }
        		else if(trId == "selectQnaDetail")	//상세조회
        		{
        			var status = this.ds_selectQnaDetailInfo.getColumn(this.ds_selectQnaDetailInfo.rowposition, "SUBJECT");
        			var counselContext = this.ds_selectQnaDetailInfo.getColumn(this.ds_selectQnaDetailInfo.rowposition, "COUNSEL_CONTEXT" ); // 답변내용유무

        			this.div_work.set_tabindex(1);
        		}
        		else if (trId == "saveQna")
        		{
        			this.div_work.set_tabindex(0);
        			this.fn_search();
        			this.gfn_Message("SuccessSave", null, "info", "ok");
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
        // 글자수 체크표기
        this.fn_textAreaMaxkey = function(obj,e)
        {
        	var strCnt = '<fc v="red">*</fc>답변내용\n('+ this.div_work.Tabpage2.form.div_basicInfo.form.txa_answer.text.length +'/ 1000)'
        	this.div_work.Tabpage2.form.div_basicInfo.form.sta_reply.set_text(strCnt);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_search.form.Static00.addEventHandler("onclick",this.div_search_Static00_onclick,this);
            this.div_search.form.cbo_status.addEventHandler("onitemchanged",this.changeEvent,this);
            this.div_search.form.cbo_status.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.Tabpage1.form.btn_delline.addEventHandler("onclick",this.fn_delline,this);
            this.div_work.Tabpage1.form.grd_qnaList.addEventHandler("oncellclick",this.fn_searchDetail,this);
            this.div_work.Tabpage2.form.div_basicInfo.form.txa_context.addEventHandler("onchanged",this.div_work_Tabpage2_div_basicInfo_txa_context_onchanged,this);
            this.div_work.Tabpage2.form.div_basicInfo.form.txa_answer.addEventHandler("onkeyup",this.fn_textAreaMaxkey,this);
            this.div_work.Tabpage2.form.div_basicInfo.form.sta_00_00_00_00_00_00_00.addEventHandler("onclick",this.div_work_Tabpage2_div_basicInfo_sta_00_00_00_00_00_00_00_onclick,this);
            this.div_work.Tabpage2.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_work.Tabpage2.form.btn_cancel.addEventHandler("onclick",this.fn_cancle,this);
        };
        this.loadIncludeScript("HRA30410M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
