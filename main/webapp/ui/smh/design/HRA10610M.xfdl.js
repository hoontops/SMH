(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRA10610M");
            this.set_titletext("증명서 신청");
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
            obj.set_text("증명서종류");
            obj.set_tooltiptext("증명서종류");
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
            obj.set_taborder("2");
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
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","10.24%","1",null,null,"88.66%","-1",null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","25%","0",null,"43","72.8%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09","33.7%","-1",null,null,"65.2%","1",null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_messageclassid","103","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,MsgGroup,ALL,Y,Y");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"5","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"5","60","20","76",null,null,null,null,null,this);
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

            obj = new Tab("tab_work","0","88",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_work);
            obj.set_text("증명서신청 현황");
            this.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_operation00","272","-4","58","34",null,null,null,null,null,null,this.tab_work.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_text("<fc v=\"#f31d24\">0</fc>");
            obj.set_textAlign("left");
            this.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"4","60","20","66",null,null,null,null,null,this.tab_work.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("출력");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("출력");
            this.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"4","60","20","0",null,null,null,null,null,this.tab_work.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_tooltiptext("출력");
            this.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_operation","218","-4","51","34",null,null,null,null,null,null,this.tab_work.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : ");
            obj.set_textAlign("left");
            obj.set_tooltiptext("Count");
            this.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","-5","211","34",null,null,null,null,null,null,this.tab_work.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("증명서 신청 내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("증명서 신청 내역");
            this.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","27",null,null,"0","10",null,null,null,null,this.tab_work.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorhistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"상태\" tooltiptext=\"상태\"/><Cell col=\"2\" text=\"신청일자\" tooltiptext=\"신청일자\"/><Cell col=\"3\" text=\"증명서종류\" tooltiptext=\"증명서종류\"/><Cell col=\"4\" text=\"문서번호\" tooltiptext=\"문서번호\"/><Cell col=\"5\" text=\"신청매수\" tooltiptext=\"신청매수\"/><Cell col=\"6\" text=\"출력매수\" tooltiptext=\"출력매수\"/><Cell col=\"7\" text=\"제출처\" tooltiptext=\"제출처\"/></Band></Format></Formats>");
            this.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tab_work);
            obj.set_text("증명서 신청");
            this.tab_work.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","-5","241","34",null,null,null,null,null,null,this.tab_work.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_text("증명서 신청 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("증명서 신청 정보");
            this.tab_work.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"4","60","20","1",null,null,null,null,null,this.tab_work.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_tooltiptext("취소");
            this.tab_work.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"4","60","20","67",null,null,null,null,null,this.tab_work.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.tab_work.Tabpage3.addChild(obj.name, obj);

            obj = new Div("div_basicInfo","0","27",null,"94","0",null,null,null,null,null,this.tab_work.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.tab_work.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_site","0","0","120","31",null,null,null,null,null,null,this.tab_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("0");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_usedecorate("false");
            obj.set_tooltiptext("신청일자");
            this.tab_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_area","580","0","120","31",null,null,null,null,null,null,this.tab_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("1");
            obj.set_text("<fc v=\'red\'>*</fc>증명서종류");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("증명서종류");
            obj.set_usedecorate("true");
            this.tab_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspectionclassid","290","31","120","31",null,null,null,null,null,null,this.tab_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("2");
            obj.set_text("<fc v=\'red\'>*</fc>제출처");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("제출처");
            obj.set_usedecorate("true");
            this.tab_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_prevcareer","0","62","120","31",null,null,null,null,null,null,this.tab_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("3");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("비고");
            this.tab_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspector","290","0","120","31",null,null,null,null,null,null,this.tab_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("4");
            obj.set_text("문서번호");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("문서번호");
            this.tab_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_certdate","0","31","120","31",null,null,null,null,null,null,this.tab_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("5");
            obj.set_text("<fc v=\'red\'>*</fc>신청매수");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("신청매수");
            obj.set_usedecorate("true");
            this.tab_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Static("sta_enterdate","580","31","120","31",null,null,null,null,null,null,this.tab_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("6");
            obj.set_text("<fc v=\'red\'>*</fc>용도");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("용도");
            obj.set_usedecorate("true");
            this.tab_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_inspectionclassid","705","5","160","20",null,null,null,null,null,null,this.tab_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("7");
            this.tab_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_certdate","125","5","160","20",null,null,null,null,null,null,this.tab_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00","415","36","160","20",null,null,null,null,null,null,this.tab_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("9");
            this.tab_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","125","67","740","20",null,null,null,null,null,null,this.tab_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("10");
            this.tab_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_01","415","5","160","20",null,null,null,null,null,null,this.tab_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            this.tab_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00","125","36","160","20",null,null,null,null,null,null,this.tab_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("12");
            this.tab_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_00_01_00_00","705","36","160","20",null,null,null,null,null,null,this.tab_work.Tabpage3.form.div_basicInfo.form);
            obj.set_taborder("13");
            this.tab_work.Tabpage3.form.div_basicInfo.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_work.Tabpage3.form.div_basicInfo.form.cmb_inspectionclassid","value","ds_qamQcinspector","INSPECTIONCLASSID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_work.Tabpage3.form.div_basicInfo.form.cal_certdate","value","ds_qamQcinspector","CERTDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HRA10610M.xfdl", function() {

        this.tab_work_onchanged = function(obj,e)
        {
        	---9999
        };

        this.tab_work_Tabpage1_div_basicInfo_sta_inspector_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_search.form.cbo_messageclassid.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_messageclassid.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_work.addEventHandler("onchanged",this.tab_work_onchanged,this);
            this.tab_work.Tabpage2.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.tab_work.Tabpage2.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.tab_work.Tabpage3.form.btn_cancel.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.tab_work.Tabpage3.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.tab_work.Tabpage3.form.div_basicInfo.form.sta_inspector.addEventHandler("onclick",this.tab_work_Tabpage1_div_basicInfo_sta_inspector_onclick,this);
        };
        this.loadIncludeScript("HRA10610M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
