(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("APR30120M");
            this.set_titletext("2차 평가");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","0","36",null,"154","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","27",null,null,"0","0",null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Name\" tooltiptext=\"Name\"/><Cell col=\"1\" text=\"Organization\" tooltiptext=\"Organization\"/><Cell col=\"2\" text=\"Job\" tooltiptext=\"Job\"/><Cell col=\"3\" text=\"Status\" tooltiptext=\"Status\"/><Cell col=\"4\" colspan=\"2\" text=\"Performance&#13;&#10;Appraisal\" tooltiptext=\"Performance Appraisal\"/><Cell col=\"6\" colspan=\"2\" text=\"Competence&#13;&#10;Appraisal\" tooltiptext=\"Competence Appraisal\"/><Cell col=\"8\" colspan=\"2\" text=\"Behavior&#13;&#10;Appraisal\" tooltiptext=\"Behavior Appraisal\"/><Cell col=\"10\" colspan=\"2\" text=\"2nd&#13;&#10;Appraisal\" tooltiptext=\"2nd Appraisal\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_cancel00",null,"4","60","20","66",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_text("목록");
            obj.set_tooltiptext("목록");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_save00",null,"4","60","20","0",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.div_00.addChild(obj.name, obj);

            obj = new Tab("div_work","0","190",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work);
            obj.set_text("Rating Guideline");
            obj.set_tooltiptext("Rating Guideline");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","42",null,null,"0","10",null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"Department\" tooltiptext=\"Department\"/><Cell col=\"1\" rowspan=\"2\" text=\"Head&#13;&#10;Count\" tooltiptext=\"Head Count\"/><Cell col=\"2\" colspan=\"2\" text=\"S\" tooltiptext=\"S\"/><Cell col=\"4\" colspan=\"2\" text=\"A\" tooltiptext=\"A\"/><Cell col=\"6\" colspan=\"2\" text=\"B\" tooltiptext=\"B\"/><Cell col=\"8\" colspan=\"2\" text=\"C &amp; D\" tooltiptext=\"C &amp; D\"/><Cell row=\"1\" col=\"2\" text=\"Guide Line\" tooltiptext=\"Guide Line\"/><Cell row=\"1\" col=\"3\" text=\"Current\" tooltiptext=\"Current\"/><Cell row=\"1\" col=\"4\" text=\"Guide Line\" tooltiptext=\"Guide Line\"/><Cell row=\"1\" col=\"5\" text=\"Current\" tooltiptext=\"Current\"/><Cell row=\"1\" col=\"6\" text=\"Guide Line\" tooltiptext=\"Guide Line\"/><Cell row=\"1\" col=\"7\" text=\"Current\" tooltiptext=\"Current\"/><Cell row=\"1\" col=\"8\" text=\"Guide Line\" tooltiptext=\"Guide Line\"/><Cell row=\"1\" col=\"9\" text=\"Current\" tooltiptext=\"Current\"/></Band></Format></Formats>");
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_subTitle01_00","0","5",null,"32","0",null,null,null,null,null,this.div_work.Tabpage1.form);
            obj.set_taborder("1");
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
            this.div_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","130","30",null,null,null,null,null,null,this.div_work.Tabpage1.form.div_subTitle01_00.form);
            obj.set_taborder("0");
            obj.set_text("Appraisal Distribute");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Appraisal Distribute");
            obj.set_border("0px none");
            this.div_work.Tabpage1.form.div_subTitle01_00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work);
            obj.set_text("Performance Appraisal");
            obj.set_tooltiptext("Performance Appraisal");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_basicInfo","0","5",null,"146","0",null,null,null,null,null,this.div_work.Tabpage2.form);
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

            obj = new Static("sta_site","0","0","120","144",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_text("Organization KPI");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("Organization KPI");
            obj.set_border("0px none");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","120","-1",null,null,"-2","0",null,null,null,null,this.div_work.Tabpage2.form.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Perspectives\" tooltiptext=\"Perspectives\"/><Cell col=\"1\" text=\"Department\" tooltiptext=\"Department\"/><Cell col=\"2\" text=\"Objectives\" tooltiptext=\"Objectives\"/><Cell col=\"3\" text=\"KPI\" tooltiptext=\"KPI\"/><Cell col=\"4\" text=\"Target\" tooltiptext=\"Target\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.div_work.Tabpage2.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Div("div_subTitle00","0","156",null,"63","0",null,null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("1");
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
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","120","61",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_subTitle00.form);
            obj.set_taborder("0");
            obj.set_text("Current Job\r\nDetails");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Current Job Details");
            obj.set_usedecorate("true");
            obj.set_border("0px none");
            this.div_work.Tabpage2.form.div_subTitle00.addChild(obj.name, obj);

            obj = new TextArea("txa_00","124","5","780","51",null,null,null,null,null,null,this.div_work.Tabpage2.form.div_subTitle00.form);
            obj.set_taborder("1");
            obj.set_value("현재 수행하고 있는 업무내용에 대해 등록합니다.");
            obj.set_enable("false");
            this.div_work.Tabpage2.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","224",null,null,"0","10",null,null,null,null,this.div_work.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"Type\" tooltiptext=\"Type\"/><Cell col=\"1\" text=\"Objectives\" tooltiptext=\"Objectives\"/><Cell col=\"2\" text=\"Detail Responsibilities\" tooltiptext=\"Detail Responsibilities\"/><Cell col=\"3\" text=\"Target/Planned Completion (Date)\" tooltiptext=\"Target/Planned Completion (Date)\"/><Cell col=\"4\" rowspan=\"2\" text=\"Weight&#13;&#10;(%)\" tooltiptext=\"Weight (%)\"/><Cell col=\"5\" rowspan=\"2\" text=\"Self-Comments\" tooltiptext=\"Self-Comments\"/><Cell col=\"6\" rowspan=\"2\" text=\"Part-Comments\" tooltiptext=\"Part-Comments\"/><Cell col=\"7\" rowspan=\"2\" text=\"1st-Comments\" tooltiptext=\"1st-Comments\"/><Cell row=\"1\" col=\"1\" text=\"KPIS\" tooltiptext=\"KPIS\"/><Cell row=\"1\" col=\"2\" text=\"Detail Accomplishments\" tooltiptext=\"Detail Accomplishments\"/><Cell row=\"1\" col=\"3\" text=\"Achieved/Actual Completion (Date)\" tooltiptext=\"Achieved/Actual Completion (Date)\"/></Band><Band id=\"body\"><Cell rowspan=\"2\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" rowspan=\"2\"/><Cell col=\"5\" rowspan=\"2\"/><Cell col=\"6\" rowspan=\"2\"/><Cell col=\"7\" rowspan=\"2\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"Sums\" tooltiptext=\"Sums\" textAlign=\"center\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.div_work.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work);
            obj.set_text("Competence Appraisal");
            obj.set_tooltiptext("Competence Appraisal");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","5",null,null,"0","10",null,null,null,null,this.div_work.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"530\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"Competences\" tooltiptext=\"Competences\"/><Cell col=\"1\" rowspan=\"2\" text=\"Definition\" tooltiptext=\"Definition\"/><Cell col=\"2\" rowspan=\"2\" text=\"Requirement&#13;&#10;Skill\" tooltiptext=\"Requirement Skill\"/><Cell col=\"3\" colspan=\"2\" text=\"Rating\" tooltiptext=\"Rating\"/><Cell row=\"1\" col=\"3\" text=\"Part Appraiser\" tooltiptext=\"Part Appraiser\"/><Cell row=\"1\" col=\"4\" text=\"1st Appraiser\" tooltiptext=\"1st Appraiser\"/></Band></Format></Formats>");
            this.div_work.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.div_work);
            obj.set_text("Behavior Appraisal");
            obj.set_tooltiptext("Behavior Appraisal");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","5",null,null,"0","10",null,null,null,null,this.div_work.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"140\"/><Column size=\"540\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"Type\" tooltiptext=\"Type\"/><Cell col=\"1\" text=\"Item\" tooltiptext=\"Item\"/><Cell col=\"2\" text=\"Question\" tooltiptext=\"Question\"/><Cell col=\"3\" text=\"Rating\" tooltiptext=\"Rating\"/></Band><Band id=\"summary\"><Cell colspan=\"3\" text=\"합계\" tooltiptext=\"합계\" textAlign=\"center\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.div_work.Tabpage4.addChild(obj.name, obj);
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
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_00.form.btn_cancel00.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_00.form.btn_save00.addEventHandler("onclick",this.fn_save,this);
            this.div_work.addEventHandler("onchanged",this.tab_work_onchanged,this);
            this.div_work.Tabpage1.form.div_subTitle01_00.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.Tabpage2.form.div_subTitle00.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
        };
        this.loadIncludeScript("APR30120M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
