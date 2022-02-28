(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("APR10210M");
            this.set_titletext("업적평가-본인평가");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_subTitle","0","36",null,"63","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","125","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("0");
            obj.set_text("Name");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Name");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname","128","5","162","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_value("성명");
            obj.set_enable("false");
            obj.set_cssclass("display");
            obj.set_text("성명");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00","300","0","125","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("2");
            obj.set_text("Department");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Department");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname00","428","5","162","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_value("부서");
            obj.set_enable("false");
            obj.set_cssclass("display");
            obj.set_text("부서");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_00","600","0","125","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("4");
            obj.set_text("Grade");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Grade");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname00_00","728","5","162","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_value("직급");
            obj.set_enable("false");
            obj.set_cssclass("display");
            obj.set_text("직급");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_01","0","31","125","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("6");
            obj.set_text("Employee Number");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Employee Number");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname01","128","36","162","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_value("사번");
            obj.set_enable("false");
            obj.set_cssclass("display");
            obj.set_text("사번");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_01","300","31","125","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("8");
            obj.set_text("Job");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Job");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname00_01","428","36","162","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_value("업무");
            obj.set_enable("false");
            obj.set_cssclass("display");
            obj.set_text("업무");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_00_00","600","31","125","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("10");
            obj.set_text("Position");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Position");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname00_00_00","728","36","162","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_cssclass("display");
            obj.set_text("직급");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","0","100",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","132",null,null,"0","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"260\"/><Column size=\"260\"/><Column size=\"50\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"Type\" tooltiptext=\"Type\" displaytype=\"decoratetext\"/><Cell col=\"1\" text=\"Objectives\" tooltiptext=\"Objectives\" displaytype=\"decoratetext\"/><Cell col=\"2\" text=\"Detail Responsibilities\" tooltiptext=\"Detail Responsibilities\" displaytype=\"decoratetext\"/><Cell col=\"3\" text=\"Target/Planned Completion (Date)\" tooltiptext=\"Target/Planned Completion (Date)\" displaytype=\"decoratetext\"/><Cell col=\"4\" rowspan=\"2\" text=\"Weight&#13;&#10;(%)\" tooltiptext=\"Weight (%)\" displaytype=\"decoratetext\"/><Cell col=\"5\" rowspan=\"2\" text=\"Self-Comments\" tooltiptext=\"Self-Comments\"/><Cell row=\"1\" col=\"1\" text=\"KPIs\" tooltiptext=\"KPIs\"/><Cell row=\"1\" col=\"2\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;Detail Accomplishments\" tooltiptext=\"Detail Accomplishments\" displaytype=\"decoratetext\"/><Cell row=\"1\" col=\"3\" displaytype=\"decoratetext\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;Achieved/Actual Completion (Date)\" tooltiptext=\"Achieved/Actual Completion (Date)\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"Sums\" tooltiptext=\"Sums\" textAlign=\"center\"/><Cell col=\"4\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_save00",null,"109","60","20","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_cancel00",null,"109","60","20","66",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("목록");
            obj.set_tooltiptext("목록");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_save00_00",null,"109","170","20","132",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("Organization Performance");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("Organization Performance");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_subTitle00","0","4",null,"63","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_detail_nobg");
            obj.set_text("");
            obj.set_async("true");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","125","61",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("0");
            obj.set_text("Current Job\r\nDetails");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Current Job Details");
            obj.set_usedecorate("true");
            obj.set_border("0px none");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new TextArea("txa_00","129","5","773","51",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("1");
            obj.set_value("현재 수행하고 있는 업무내용에 대해 등록합니다.");
            obj.set_enable("false");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Div("div_subTitle01","0","72",null,"32","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_detail_nobg");
            obj.set_text("");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            obj.set_background("#f7f7f7");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","125","30",null,null,null,null,null,null,this.div_work.form.div_subTitle01.form);
            obj.set_taborder("0");
            obj.set_text("Objectives");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Objectives");
            obj.set_border("0px none");
            this.div_work.form.div_subTitle01.addChild(obj.name, obj);
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
            this.div_subTitle.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_subTitle.form.edt_insepctionclassname.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_subTitle.form.Static30_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_subTitle.form.Static30_01.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_subTitle.form.edt_insepctionclassname01.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_subTitle.form.Static30_00_01.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_subTitle.form.Static30_00_00_00.addEventHandler("onclick",this.div_subTitle_Static30_00_00_00_onclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.btn_save00.addEventHandler("onclick",this.fn_save,this);
            this.div_work.form.btn_cancel00.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.form.btn_save00_00.addEventHandler("onclick",this.fn_save,this);
            this.div_work.form.div_subTitle00.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_subTitle01.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
        };
        this.loadIncludeScript("APR10220M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
