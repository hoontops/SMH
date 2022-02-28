(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRA30310M");
            this.set_titletext("HR Q&A (인사문의)");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_subTitle","0","36",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","115","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("성명");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname","118","5","172","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_value("성명");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("성명");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00","300","0","115","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("부서");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname00","418","5","172","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_value("부서");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("부서");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_00","600","0","115","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("4");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("직급");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname00_00","718","5","172","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_value("직급");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("직급");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Tab("div_work","0","68",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"450\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"상태\" tooltiptext=\"상태\"/><Cell col=\"2\" text=\"등록일자\" tooltiptext=\"등록일자\"/><Cell col=\"3\" text=\"분류\" tooltiptext=\"분류\"/><Cell col=\"4\" text=\"제목\" tooltiptext=\"제목\"/><Cell col=\"5\" text=\"상담자\" tooltiptext=\"상담자\"/></Band></Format></Formats>");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_del_line00",null,"7","60","20","66",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("신청");
            obj.set_tooltiptext("신청");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work);
            obj.set_text("HR Q&A 등록");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","60","20","0",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"7","60","20","66",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_tooltiptext("취소");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","141","34",null,null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("HR Q&A 등록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("HR Q&A 등록");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_basicInfo","0","34",null,"342","0",null,null,null,null,null,this.div_work.Tabpage2.form);
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

            obj = new Static("sta_area","0","31","140","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_text("<fc v=\'red\'>*</fc>분류");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("분류");
            obj.set_usedecorate("true");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid","0","62","140","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_text("<fc v=\'red\'>*</fc>제목");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("제목");
            obj.set_usedecorate("true");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspector","450","0","140","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("작성자");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate","450","31","140","31",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_text("<fc v=\'red\'>*</fc>상담자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("상담자");
            obj.set_usedecorate("true");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_inspectionclassid","145","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("5");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_certdate","145","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00","145","67","757","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("7");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_01","595","5","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("display");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_prevcareer","0","93","140","155",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("9");
            obj.set_text("<fc v=\'red\'>*</fc>상담내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("상담내용");
            obj.set_usedecorate("true");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_prevcareer00","0","248","140","92",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("10");
            obj.set_text("답변내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("답변내용");
            obj.set_usedecorate("true");
            obj.set_border("0px none");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_inspectionclassid00","595","36","160","20",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("11");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new TextArea("txa_00","146","98","757","144",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("12");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new TextArea("txa_00_00","146","253","757","82",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("13");
            obj.set_cssclass("display");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00_00","0","30",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00_00_00","0","61",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00_00_00_00","0","92",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00_00_00_00_00_00_00","0","247",null,"2","0",null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_work.Tabpage2.form.div_basicInfo.form.cmb_inspectionclassid","value","ds_qamQcinspector","INSPECTIONCLASSID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.Tabpage2.form.div_basicInfo.form.cal_certdate","value","ds_qamQcinspector","CERTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.Tabpage2.form.div_basicInfo.form.cmb_inspectionclassid00","value","ds_qamQcinspector","INSPECTIONCLASSID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HRA30310M.xfdl", function() {

        this.div_subTitle_Static30_onclick = function(obj,e)
        {

        };

        this.div_subTitle_Static30_00_onclick = function(obj,e)
        {

        };

        this.div_subTitle_edt_insepctionclassname_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_subTitle.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_subTitle.form.edt_insepctionclassname.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_subTitle.form.Static30_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_work.addEventHandler("onchanged",this.tab_work_onchanged,this);
            this.div_work.Tabpage1.form.btn_del_line.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.Tabpage1.form.btn_del_line00.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.Tabpage2.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_work.Tabpage2.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("HRA30310M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
