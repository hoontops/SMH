(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("APR90110M");
            this.set_titletext("부서인원배분");
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

            obj = new Button("btn_clear1",null,"8","60","20","76",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"8","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","36",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_search");
            obj.set_background("rgba(247,247,247,1)");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
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

            obj = new Static("Static00_00","265","10","120","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("<fc v=\'red\'>*</fc>Appraisal Sequence");
            obj.set_tooltiptext("Appraisal Sequence");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_messageclassid00","395","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,MsgGroup,ALL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","539","10","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Organization");
            obj.set_tooltiptext("Organization");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_messageclassid00_00","649","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,MsgGroup,ALL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_work","0","79",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","27",null,null,"0","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"180\"/><Column size=\"88\"/><Column size=\"88\"/><Column size=\"88\"/><Column size=\"88\"/><Column size=\"88\"/><Column size=\"88\"/><Column size=\"88\"/><Column size=\"70\"/></Columns><Rows><Row size=\"30\" band=\"head\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"Organization\" tooltiptext=\"Organization\"/><Cell col=\"2\" text=\"Total&#13;&#10;Count\"/><Cell col=\"3\" text=\"S&#13;&#10;Head Count\" tooltiptext=\"S&#13;&#10;Head Count\"/><Cell col=\"4\" text=\"A&#13;&#10;Head Count\" tooltiptext=\"A&#13;&#10;Head Count\"/><Cell col=\"5\" text=\"B&#13;&#10;Head Count\" tooltiptext=\"B&#13;&#10;Head Count\"/><Cell col=\"6\" text=\"C&#13;&#10;Head Count\" tooltiptext=\"C&#13;&#10;Head Count\"/><Cell col=\"7\" text=\"D&#13;&#10;Head Count\" tooltiptext=\"D&#13;&#10;Head Count\"/><Cell col=\"8\" text=\"Sum&#13;&#10;Head Count\" tooltiptext=\"Sum&#13;&#10;Head Count\"/><Cell col=\"9\" text=\"Gap\" tooltiptext=\"Gap\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_addLine",null,"4","60","20","132",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_tooltiptext("행추가");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delLine",null,"4","60","20","66",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_tooltiptext("행삭제");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"4","60","20","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_tooltiptext("저장");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"8","60","20","142",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("생성");
            obj.set_tooltiptext("생성");
            this.addChild(obj.name, obj);
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
            this.btn_clear1.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_search.form.cbo_messageclassid.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_messageclassid.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_search.form.cbo_messageclassid00.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_messageclassid00.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_search.form.cbo_messageclassid00_00.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_messageclassid00_00.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_work.form.btn_addLine.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.form.btn_delLine.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.form.btn_save.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.btn_new.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
        };
        this.loadIncludeScript("APR90110M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
