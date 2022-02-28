(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("APR20610M");
            this.set_titletext("업적평가-1차평가");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_search","0.00%","36",null,"67","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_search");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","21","10","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Name");
            obj.set_tooltiptext("Name");
            obj.set_usedecorate("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_messageclassid","131","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,MsgGroup,ALL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","275","10","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Department");
            obj.set_tooltiptext("Department");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_01","21","35","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Employee Number");
            obj.set_tooltiptext("Employee Number");
            obj.set_usedecorate("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","275","35","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Job");
            obj.set_tooltiptext("Job");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","529","10","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Grade");
            obj.set_tooltiptext("Grade");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","529","35","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Position");
            obj.set_tooltiptext("Position");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_00","131","35","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_cssclass("display");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","385","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_cssclass("display");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","385","35","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_cssclass("display");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_01","639","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","639","35","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            this.div_search.addChild(obj.name, obj);

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

            obj = new Button("btn_search00",null,"8","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","0","104",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Div("div_subTitle01","0",null,null,"32","0","140",null,null,null,null,this.div_work.form);
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
            obj.set_background("#f7f7f7");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","125","30",null,null,null,null,null,null,this.div_work.form.div_subTitle01.form);
            obj.set_taborder("0");
            obj.set_text("Overall Rating");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Overall Rating");
            obj.set_border("0px none");
            this.div_work.form.div_subTitle01.addChild(obj.name, obj);

            obj = new Div("div_subTitle00","0",null,null,"125","0","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
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
            obj.set_text("Part Appraiser\r\nOverall Rating");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Part Appraiser Opinion");
            obj.set_usedecorate("true");
            obj.set_border("0px none");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Static("Static30_00","258","0","125","61",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("1");
            obj.set_text("Part Appraiser\r\nOpinion");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Part Appraiser Opinion");
            obj.set_usedecorate("true");
            obj.set_border("0px none");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Static("Static30_01","0","62","125","61",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("2");
            obj.set_text("1st Appraiser\r\nOverall Rating");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("1st Appraiser Overall Rating");
            obj.set_usedecorate("true");
            obj.set_border("0px none");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Static("Static30_00_00","258","62","125","61",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("3");
            obj.set_text("1st Appraiser\r\nOpinion");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("1st Appraiser Opinion");
            obj.set_usedecorate("true");
            obj.set_border("0px none");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Edit("edt_00","129","21","124","20",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("4");
            obj.set_cssclass("display");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new TextArea("txa_00","387","5","515","51",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("5");
            obj.set_cssclass("display");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Combo("cbo_messageclassid","129","83","124","20",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,MsgGroup,ALL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new TextArea("txa_00_00","387","67","515","51",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("7");
            obj.set_value("Part Appraiser Opinion 등록합니다.");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Static("sta_00","0","61",null,"2","0",null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Button("btn_save00",null,"109","60","20","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_cancel00",null,"109","60","20","66",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("목록");
            obj.set_tooltiptext("목록");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_save00_00",null,"109","170","20","132",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("Organization Performance");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("Organization Performance");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","132",null,null,"0","177",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"40\"/><Column size=\"125\"/><Column size=\"125\"/><Column size=\"125\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"Type\" tooltiptext=\"Type\" displaytype=\"normal\"/><Cell col=\"1\" text=\"Objectives\" tooltiptext=\"Objectives\" displaytype=\"normal\"/><Cell col=\"2\" text=\"Detail Responsibilities\" tooltiptext=\"Detail Responsibilities\" displaytype=\"normal\"/><Cell col=\"3\" text=\"Target/Planned Completion (Date)\" tooltiptext=\"Target/Planned Completion (Date)\" displaytype=\"normal\"/><Cell col=\"4\" rowspan=\"2\" text=\"Weight&#13;&#10;(%)\" tooltiptext=\"Weight (%)\" displaytype=\"normal\"/><Cell col=\"5\" rowspan=\"2\" text=\"Self-Comments\" tooltiptext=\"Self-Comments\" displaytype=\"normal\"/><Cell col=\"6\" rowspan=\"2\" text=\"Part-Comments\"/><Cell col=\"7\" rowspan=\"2\" text=\"1st-Comments\" tooltiptext=\"1st-Comments\"/><Cell row=\"1\" col=\"1\" text=\"KPIs\" tooltiptext=\"KPIs\" displaytype=\"normal\"/><Cell row=\"1\" col=\"2\" text=\"Detail Accomplishments\" tooltiptext=\"Detail Accomplishments\" displaytype=\"normal\"/><Cell row=\"1\" col=\"3\" displaytype=\"normal\" text=\"Achieved/Actual Completion (Date)\" tooltiptext=\"Achieved/Actual Completion (Date)\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"Sums\" tooltiptext=\"Sums\" textAlign=\"center\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_subTitle00_00","0","4",null,"63","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
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

            obj = new Static("Static30","0","0","125","61",null,null,null,null,null,null,this.div_work.form.div_subTitle00_00.form);
            obj.set_taborder("0");
            obj.set_text("Current Job\r\nDetails");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Current Job Details");
            obj.set_usedecorate("true");
            obj.set_border("0px none");
            this.div_work.form.div_subTitle00_00.addChild(obj.name, obj);

            obj = new TextArea("txa_00","129","5","560","51",null,null,null,null,null,null,this.div_work.form.div_subTitle00_00.form);
            obj.set_taborder("1");
            obj.set_value("현재 수행하고 있는 업무내용에 대해 등록합니다.");
            obj.set_enable("false");
            this.div_work.form.div_subTitle00_00.addChild(obj.name, obj);

            obj = new Static("Static17","692","7","134","24",null,null,null,null,null,null,this.div_work.form.div_subTitle00_00.form);
            obj.set_taborder("2");
            obj.set_text("조직등급/점수");
            obj.set_cssclass("sta_font_gray");
            obj.set_textAlign("right");
            this.div_work.form.div_subTitle00_00.addChild(obj.name, obj);

            obj = new Static("Static17_00","692","30","134","24",null,null,null,null,null,null,this.div_work.form.div_subTitle00_00.form);
            obj.set_taborder("3");
            obj.set_text("피평가자/잔여점수");
            obj.set_cssclass("sta_font_gray");
            obj.set_textAlign("right");
            this.div_work.form.div_subTitle00_00.addChild(obj.name, obj);

            obj = new Static("Static16_01","832","7","70","24",null,null,null,null,null,null,this.div_work.form.div_subTitle00_00.form);
            obj.set_taborder("4");
            obj.set_text("S / 95");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.form.div_subTitle00_00.addChild(obj.name, obj);

            obj = new Static("Static16_01_00","832","30","70","24",null,null,null,null,null,null,this.div_work.form.div_subTitle00_00.form);
            obj.set_taborder("5");
            obj.set_text("4 / 0");
            obj.set_cssclass("sta_font_black");
            obj.set_textAlign("left");
            this.div_work.form.div_subTitle00_00.addChild(obj.name, obj);

            obj = new Div("div_subTitle01_00","0","72",null,"32","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
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

            obj = new Static("Static30","0","0","125","30",null,null,null,null,null,null,this.div_work.form.div_subTitle01_00.form);
            obj.set_taborder("0");
            obj.set_text("Objectives");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Objectives");
            obj.set_border("0px none");
            this.div_work.form.div_subTitle01_00.addChild(obj.name, obj);
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
            this.div_search.form.cbo_messageclassid.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_messageclassid.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.btn_search00.addEventHandler("onclick",this.fn_search,this);
            this.div_work.form.div_subTitle01.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_subTitle00.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_subTitle00.form.Static30_00.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_subTitle00.form.Static30_01.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_subTitle00.form.Static30_00_00.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_subTitle00.form.cbo_messageclassid.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_work.form.div_subTitle00.form.cbo_messageclassid.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_work.form.btn_save00.addEventHandler("onclick",this.fn_save,this);
            this.div_work.form.btn_cancel00.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.form.btn_save00_00.addEventHandler("onclick",this.fn_save,this);
            this.div_work.form.div_subTitle00_00.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_subTitle01_00.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
        };
        this.loadIncludeScript("APR20620M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
