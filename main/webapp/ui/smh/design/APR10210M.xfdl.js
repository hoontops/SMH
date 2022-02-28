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
            obj = new Div("div_subTitle","0","152",null,"63","10",null,null,null,null,null,this);
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

            obj = new Div("div_subTitle01","0","220",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("4");
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
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","125","31",null,null,null,null,null,null,this.div_subTitle01.form);
            obj.set_taborder("0");
            obj.set_text("Object Setting");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Object Setting");
            this.div_subTitle01.addChild(obj.name, obj);

            obj = new Div("div_work","0","253",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","27",null,null,"0","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell displaytype=\"decoratetext\"/><Cell col=\"1\" text=\"Appraisal Year\" tooltiptext=\"Appraisal Year\" displaytype=\"decoratetext\"/><Cell col=\"2\" text=\"Appraisal Period\" tooltiptext=\"Appraisal Period\" displaytype=\"decoratetext\"/><Cell col=\"3\" text=\"Part Appraiser\" tooltiptext=\"Part Appraiser\" displaytype=\"decoratetext\"/><Cell col=\"4\" text=\"1st Appraiser\" tooltiptext=\"1st Appraiser\" displaytype=\"decoratetext\"/><Cell col=\"5\" text=\"2nd Appraiser\" tooltiptext=\"2nd Appraiser\"/><Cell col=\"6\" text=\"Status\" tooltiptext=\"Status\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_save00",null,"4","60","20","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("제출");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("제출");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_cancel00",null,"4","60","20","66",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("출력");
            obj.set_tooltiptext("출력");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_01","0","36",null,"111","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div_01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03","0","0",null,"111","0",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_helpInfoBg");
            obj.set_padding("15px");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_02_00","15","15",null,"20","14",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_helpInfoTxt");
            obj.set_text("Status \'Interim Reviewed(MGR)\'일 경우 최종 자기평가 가능합니다. (\'Appraisal Period\' Click)");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_02","15","35",null,"20","14",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_helpInfoTxt");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            obj.set_text("평가 제출은 해당 목록 Check 후 목록 오른편 상단의 \'제출(Submit)\' 버튼을 클릭합니다.");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_02_00","15","55",null,"20","14",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_text("제출(Submit)후에는 수정이 불가능합니다.");
            obj.set_cssclass("sta_WF_helpInfoTxt");
            obj.set_wordWrap("char");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_00_00_00_00_00_00","-1","0","100","15",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("4");
            obj.set_text("h15");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_00_00_00_00_00_00_01","-1","96","100","15",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("5");
            obj.set_text("h15");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_00_00_00_00_00_01","0","0","15","96",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("6");
            obj.set_text("h\r\n15");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_02_00_00","15","75",null,"20","14",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("7");
            obj.set_text("(<fc v=\'red\'>*</fc>)표시된 항목은 필수입력 항목입니다.");
            obj.set_cssclass("sta_WF_helpInfoTxt");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            this.div_01.addChild(obj.name, obj);
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
            this.div_subTitle01.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.btn_save00.addEventHandler("onclick",this.fn_save,this);
            this.div_work.form.btn_cancel00.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
        };
        this.loadIncludeScript("APR10210M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
