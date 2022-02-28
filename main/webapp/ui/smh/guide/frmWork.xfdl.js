(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmWork");
            this.set_titletext("work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,757);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divWork","10","47",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Div00");
            obj.set_formscrollbarsize("10");
            obj.set_url("template::template01.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","10","0",null,"47","10",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_padding("9px 0px 0px 30px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","16","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_00","47","36","60","10",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchClose","-10","-8","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_searchClose");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"16","31","24","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("초기화");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02",null,"16","51","24","284",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("확장3");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn_01",null,"16","51","24","335",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확장2");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00",null,"16","51","24","386",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확장1");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnHelp",null,"16","26","24","72",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("도움말");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"16","31","24","98",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_com_del");
            obj.set_tooltiptext("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnSav",null,"16","31","24","129",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"16","31","24","160",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_com_new");
            obj.set_tooltiptext("신규");
            this.addChild(obj.name, obj);

            obj = new Button("btnPrint",null,"16","31","24","41",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("인쇄");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,"16","31","24","253",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_com_confirm");
            obj.set_tooltiptext("확인");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","16","90","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("업무화면명");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite_S","170","-4","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_favorite_S");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"16","31","24","222",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_com_cancel");
            obj.set_tooltiptext("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btnReturn",null,"16","31","24","191",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("btn_com_return");
            obj.set_tooltiptext("반려");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,757,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","template::template01.xfdl");
        };
        
        // User Script
        this.registerScript("frmWork.xfdl", function() {
        this.application = null;
        this.fvWinId = null;
        this.fvMenuNM = null;
        this.fvFormURL = null;

        this.frmWork_onload = function(obj,e)
        {
        	this.application = nexacro.getApplication();

        	var objOwnerFrame = this.getOwnerFrame();

        	this.fvWinId   = objOwnerFrame.param.FORM_ID;
        	this.fvMenuNM = objOwnerFrame.param.MENU_NM;
        	this.fvFormURL = objOwnerFrame.param.FORM_URL;

        	this.divWork.set_url(this.fvFormURL);
        	this.divWork.form.resetScroll();
        };

        this.frmWork_onactivate = function(obj,e)
        {
        	this.application.MdiFrame.form.fn_ActiveTabPage(this.fvWinId);
            this.divWork.form.resetScroll();
        	return;
        };

        this.frmWork_onclose = function(obj,e)
        {
        	this.application.MdiFrame.form.fn_DeleteTabpage(this.fvWinId);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmWork_onload,this);
            this.addEventHandler("onactivate",this.frmWork_onactivate,this);
            this.addEventHandler("onclose",this.frmWork_onclose,this);
        };
        this.loadIncludeScript("frmWork.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
