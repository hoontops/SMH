(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BEN60110M");
            this.set_titletext("단체상해보험");
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

            obj = new Div("div_work","0","36",null,"274","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("단체상해보험 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("단체상해보험 정보");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_subTitle","0","34",null,"63","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","115","31",null,null,null,null,null,null,this.div_work.form.div_subTitle.form);
            obj.set_taborder("0");
            obj.set_text("<fc v=\'red\'>*</fc>기준년도");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("기준년도");
            obj.set_usedecorate("true");
            this.div_work.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname","118","5","172","20",null,null,null,null,null,null,this.div_work.form.div_subTitle.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("성명");
            this.div_work.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00","300","0","115","31",null,null,null,null,null,null,this.div_work.form.div_subTitle.form);
            obj.set_taborder("2");
            obj.set_text("승인상태");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("승인상태");
            this.div_work.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname00","418","5","172","20",null,null,null,null,null,null,this.div_work.form.div_subTitle.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("부서");
            this.div_work.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_01","0","31","115","31",null,null,null,null,null,null,this.div_work.form.div_subTitle.form);
            obj.set_taborder("4");
            obj.set_text("생명보험(기본)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("생명보험(기본)");
            obj.set_usedecorate("true");
            obj.set_visible("true");
            this.div_work.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname01","118","36","172","20",null,null,null,null,null,null,this.div_work.form.div_subTitle.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("성명");
            this.div_work.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_00","300","31","115","31",null,null,null,null,null,null,this.div_work.form.div_subTitle.form);
            obj.set_taborder("6");
            obj.set_text("암보험(기본)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("암보험(기본)");
            this.div_work.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_insepctionclassname00_00","418","36","172","20",null,null,null,null,null,null,this.div_work.form.div_subTitle.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("부서");
            this.div_work.form.div_subTitle.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","60","20","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_tooltiptext("저장");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"7","60","20","66",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_tooltiptext("취소");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_00","0","97","211","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("추가 상세보험 신청");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("추가 상세보험 신청");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_subTitle00","0","131",null,"94","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","135","31",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("0");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("신청일자");
            obj.set_usedecorate("true");
            obj.set_visible("true");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Static("Static30_00","454","31","135","31",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("1");
            obj.set_text("배우자(사망/암)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("배우자(사망/암)");
            obj.set_visible("true");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Static("Static30_01","0","31","135","31",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("2");
            obj.set_text("생명보험(본인)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("생명보험(본인)");
            obj.set_usedecorate("true");
            obj.set_visible("true");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Static("Static30_00_00","454","62","135","31",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("3");
            obj.set_text("수술특약(본인)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("수술특약(본인)");
            obj.set_visible("true");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Static("Static30_01_00","0","62","135","31",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("4");
            obj.set_text("2대 질병특약(본인)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("2대 질병특약(본인)");
            obj.set_usedecorate("true");
            obj.set_visible("true");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Calendar("cal_00","138","5","160","20",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Combo("cbo_messageclassid","138","36","160","20",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,MsgGroup,ALL,Y,Y");
            obj.set_index("-1");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Combo("cbo_messageclassid00","138","67","160","20",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,MsgGroup,ALL,Y,Y");
            obj.set_index("-1");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Combo("cbo_messageclassid01","592","36","160","20",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,MsgGroup,ALL,Y,Y");
            obj.set_index("-1");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Combo("cbo_messageclassid00_00","592","67","160","20",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,MsgGroup,ALL,Y,Y");
            obj.set_index("-1");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","301","36","140","20",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","301","67","140","20",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_01","755","36","140","20",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("12");
            obj.set_cssclass("display");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","755","67","140","20",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("13");
            obj.set_cssclass("display");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);
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
            this.div_work.form.div_subTitle.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_subTitle.form.edt_insepctionclassname.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_subTitle.form.Static30_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_work.form.div_subTitle.form.Static30_01.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_subTitle.form.edt_insepctionclassname01.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_work.form.div_subTitle.form.Static30_00_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_work.form.btn_save.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.div_work.form.div_subTitle00.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_subTitle00.form.Static30_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_work.form.div_subTitle00.form.Static30_01.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_subTitle00.form.Static30_00_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_work.form.div_subTitle00.form.Static30_01_00.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_subTitle00.form.cbo_messageclassid.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_work.form.div_subTitle00.form.cbo_messageclassid.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_work.form.div_subTitle00.form.cbo_messageclassid00.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_work.form.div_subTitle00.form.cbo_messageclassid00.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_work.form.div_subTitle00.form.cbo_messageclassid01.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_work.form.div_subTitle00.form.cbo_messageclassid01.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_work.form.div_subTitle00.form.cbo_messageclassid00_00.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_work.form.div_subTitle00.form.cbo_messageclassid00_00.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
        };
        this.loadIncludeScript("BEN60110M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
