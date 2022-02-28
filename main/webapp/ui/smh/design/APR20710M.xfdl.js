(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("APR20710M");
            this.set_titletext("역량평가-1차 평가");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_search","0.00%","175",null,"67","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_search");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","21","10","90","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("<fc v=\'red\'>*</fc>Appraisal Year");
            obj.set_tooltiptext("Appraisal Year");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_messageclassid","121","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,MsgGroup,ALL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","265","10","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Appraisal Status");
            obj.set_tooltiptext("Appraisal Status");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_messageclassid00","375","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,MsgGroup,ALL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_01","21","35","90","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Department");
            obj.set_tooltiptext("Department");
            obj.set_usedecorate("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_messageclassid01","121","35","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,MsgGroup,ALL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","265","35","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Appraisee Name");
            obj.set_tooltiptext("Appraisee Name");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_messageclassid00_00","375","35","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,MsgGroup,ALL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"152","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"152","60","20","76",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.addChild(obj.name, obj);

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

            obj = new Div("div_work","0","243",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","27",null,null,"0","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"Appraisal Period\" tooltiptext=\"Appraisal Period\"/><Cell col=\"2\" text=\"Department\" tooltiptext=\"Department\"/><Cell col=\"3\" text=\"Grade\" tooltiptext=\"Grade\"/><Cell col=\"4\" text=\"Job\" tooltiptext=\"Job\"/><Cell col=\"5\" text=\"Name\" tooltiptext=\"Name\"/><Cell col=\"6\" text=\"Status\" tooltiptext=\"Status\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"4","60","20","1",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("제출");
            obj.set_tooltiptext("제출");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_01","0","36",null,"111","10",null,null,null,null,null,this);
            obj.set_taborder("7");
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
            obj.set_text("Status \'Self Assessed\' 또는 \'Part Appraised\'일 경우 평가 가능합니다. (\'Appraisal Period\' Click)");
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
            this.div_search.form.Static00.addEventHandler("onclick",this.div_search_Static00_onclick,this);
            this.div_search.form.cbo_messageclassid.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_messageclassid.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_search.form.cbo_messageclassid00.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_messageclassid00.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_search.form.cbo_messageclassid01.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_messageclassid01.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_search.form.cbo_messageclassid00_00.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_messageclassid00_00.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
        };
        this.loadIncludeScript("APR20710M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
