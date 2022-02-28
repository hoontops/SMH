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

            
            // UI Components Initialize
            obj = new Button("btn_clear1",null,"8","60","20","76",null,null,null,null,null,this);
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

            obj = new Combo("cbo_messageclassid00","498","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,MsgGroup,ALL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_00_01_02","131","10","110","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_00","241","10","17","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_unit");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_00_01_02_00","258","10","110","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","131","35","491","20",null,null,null,null,null,null,this.div_search.form);
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

            obj = new Static("sta_cnt_ds_InputResultByDay","149","0","140","34",null,null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_del_line",null,"7","60","20","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_tooltiptext("행삭제");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"350\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"상태\" tooltiptext=\"상태\"/><Cell col=\"2\" text=\"등록일자\" tooltiptext=\"등록일자\"/><Cell col=\"3\" text=\"분류\" tooltiptext=\"분류\"/><Cell col=\"4\" text=\"제목\" tooltiptext=\"제목\"/><Cell col=\"5\" text=\"작성자\" tooltiptext=\"작성자\"/><Cell col=\"6\" text=\"상담자\" tooltiptext=\"상담자\"/></Band></Format></Formats>");
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

            obj = new Edit("edt_00","145","129","757","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("display");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_01","595","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("display");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_prevcareer","0","155","140","125",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("8");
            obj.set_text("상담내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("상담내용");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_prevcareer00","0","280","140","142",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("9");
            obj.set_text("<fc v=\'red\'>*</fc>답변내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("답변내용");
            obj.set_usedecorate("true");
            obj.set_border("0px none");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new TextArea("txa_00","146","160","757","114",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new TextArea("txa_00_00","146","285","757","132",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("11");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspector00","0","62","140","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("12");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("부서");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspector01","450","31","140","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("13");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("사번");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspector00_00","450","62","140","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("14");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("직급");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00","0","30",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00_00","0","61",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00_00_00","0","92",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00_00_00_00","0","123",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00_00_00_00_00","0","154",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00_00_00_00_00_00","0","279",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","145","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("21");
            obj.set_cssclass("display");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","595","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("22");
            obj.set_cssclass("display");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_01","145","67","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("23");
            obj.set_cssclass("display");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","595","67","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("24");
            obj.set_cssclass("display");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_01_00","145","98","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("25");
            obj.set_cssclass("display");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","595","98","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("26");
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
            obj = new BindItem("item1","div_work.Tabpage2.form.div_basicInfo.form.cal_certdate","value","ds_qamQcinspector","CERTDATE");
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
            this.btn_clear1.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_search.form.Static00.addEventHandler("onclick",this.div_search_Static00_onclick,this);
            this.div_search.form.cbo_messageclassid00.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_messageclassid00.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.addEventHandler("onchanged",this.tab_work_onchanged,this);
            this.div_work.Tabpage1.form.btn_del_line.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.Tabpage2.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_work.Tabpage2.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
        };
        this.loadIncludeScript("HRA30410M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
