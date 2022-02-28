(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRA30710M");
            this.set_titletext("F.A.Q");
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
            obj.set_text("분류");
            obj.set_tooltiptext("분류");
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
            obj.set_taborder("4");
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
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","10.24%","1",null,null,"88.66%","-1",null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","213","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("제목");
            obj.set_tooltiptext("제목");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_00","293","10","300","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_00","103","10","110","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
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

            obj = new Div("div_work","0","78",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("F.A.Q 내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("F.A.Q 내역");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_InputResultByDay","219","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,"265","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"540\"/><Column size=\"140\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"분류\" tooltiptext=\"분류\"/><Cell col=\"1\" text=\"제목\" tooltiptext=\"제목\"/><Cell col=\"2\" text=\"날짜\" tooltiptext=\"날짜\"/><Cell col=\"3\" text=\"조회\" tooltiptext=\"조회\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_basicInfo","0","304",null,"338","0",null,null,null,null,null,this.div_work.form);
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
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","30",null,"2","0",null,null,null,null,null,this.div_work.form.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_site01","0","0","120","31",null,null,null,null,null,null,this.div_work.form.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("제목");
            this.div_work.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate00","0","31","120","31",null,null,null,null,null,null,this.div_work.form.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_text("파일첨부");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("파일첨부");
            obj.set_usedecorate("false");
            this.div_work.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","0","61",null,"2","0",null,null,null,null,null,this.div_work.form.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_prevcareer00","0","62","120","274",null,null,null,null,null,null,this.div_work.form.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("내용");
            obj.set_border("0px none");
            this.div_work.form.div_basicInfo.addChild(obj.name, obj);

            obj = new TextArea("txa_00_00_00","125","67","777","265",null,null,null,null,null,null,this.div_work.form.div_basicInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("display");
            this.div_work.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_01_00","125","5","674","20",null,null,null,null,null,null,this.div_work.form.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("display");
            this.div_work.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_01_00_00","125","36","674","20",null,null,null,null,null,null,this.div_work.form.div_basicInfo.form);
            obj.set_taborder("7");
            obj.set_cssclass("display");
            this.div_work.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Button("btn_download",null,"36","97","20","6",null,null,null,null,null,this.div_work.form.div_basicInfo.form);
            obj.set_taborder("8");
            obj.set_text("파일 다운로드");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("파일 다운로드");
            this.div_work.form.div_basicInfo.addChild(obj.name, obj);
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_search.form.Static00.addEventHandler("onclick",this.div_search_Static00_onclick,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.div_basicInfo.form.sta_prevcareer00.addEventHandler("onclick",this.div_work_Tabpage3_div_basicInfo_sta_prevcareer_onclick,this);
            this.div_work.form.div_basicInfo.form.btn_download.addEventHandler("onclick",this.fn_search,this);
        };
        this.loadIncludeScript("HRA30710M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
