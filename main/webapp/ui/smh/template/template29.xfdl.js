(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template29");
            this.set_titletext("조회조건+그리드(달력)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCalendar", this);
            obj._setContents("<ColumnInfo><Column id=\"day0\" type=\"STRING\" size=\"256\"/><Column id=\"day1\" type=\"STRING\" size=\"256\"/><Column id=\"day2\" type=\"STRING\" size=\"256\"/><Column id=\"day3\" type=\"STRING\" size=\"256\"/><Column id=\"day4\" type=\"STRING\" size=\"256\"/><Column id=\"day5\" type=\"STRING\" size=\"256\"/><Column id=\"day6\" type=\"STRING\" size=\"256\"/><Column id=\"hol0\" type=\"STRING\" size=\"256\"/><Column id=\"hol1\" type=\"STRING\" size=\"256\"/><Column id=\"hol2\" type=\"STRING\" size=\"256\"/><Column id=\"hol3\" type=\"STRING\" size=\"256\"/><Column id=\"hol4\" type=\"STRING\" size=\"256\"/><Column id=\"hol5\" type=\"STRING\" size=\"256\"/><Column id=\"hol6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","31",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","62",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"16","26","24","93",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_del");
            obj.set_tooltiptext("Toolbar_Delete");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","124",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"16","26","24","155",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_com_new");
            obj.set_tooltiptext("Toolbar_New");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","131","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("설비PM실적목록");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Tab("tab_00","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_00);
            obj.set_text("Tabpage1");
            this.tab_00.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_00","108","10","165","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb00");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("보전구분");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02","0","60","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("게획월");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_01","108","35","165","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb01");
            obj.set_text("유효");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_02","108","60","165","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb02");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","175","102","36",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","175","146","36",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"155","45","20","91",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","181","10","27",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label03","0","85","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("공장");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label04","0","110","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("작업장 ID");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label05","0","135","103","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("설비");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_03","108","85","165","20",null,null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("3");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_00","108","110",null,"20","37",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"110","22","20","15",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_01","108","135",null,"20","37",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("6");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search01",null,"135","22","20","15",null,null,null,null,null,this.tab_00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","143","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","116","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("설비PM실적목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_00",null,"6","60","24","307",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("범례");
            obj.set_fittocontents("width");
            obj.set_textAlign("right");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_legend_Y",null,"8","57","20","240",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("Create");
            obj.set_background("#fffabe");
            obj.set_textAlign("center");
            obj.set_padding("0px 10px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_legend_B",null,"8","57","20","180",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("Start");
            obj.set_background("#c7e6f6");
            obj.set_textAlign("center");
            obj.set_padding("0px 10px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_legend_G",null,"8","57","20","120",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("Finish");
            obj.set_background("#c0e2c6");
            obj.set_textAlign("center");
            obj.set_padding("0px 10px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_legend_G2",null,"8","57","20","60",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("Skip");
            obj.set_background("#e4e5e6");
            obj.set_textAlign("center");
            obj.set_padding("0px 10px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_legend_R",null,"8","57","20","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_text("Delay");
            obj.set_background("#fac4c1");
            obj.set_textAlign("center");
            obj.set_padding("0px 10px");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grdCal","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_binddataset("dsCalendar");
            obj.set_selecttype("cell");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_calendar");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/><Column size=\"30\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"82\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"일요일\" expandchar=\"sunday\"/><Cell col=\"2\" colspan=\"2\" text=\"월요일\" expandchar=\"monday\"/><Cell col=\"4\" colspan=\"2\" text=\"화요일\" expandchar=\"tuesday\"/><Cell col=\"6\" colspan=\"2\" text=\"수요일\" expandchar=\"wednesday\"/><Cell col=\"8\" colspan=\"2\" text=\"목요일\" expandchar=\"thursday\"/><Cell col=\"10\" colspan=\"2\" text=\"금요일\" expandchar=\"friday\"/><Cell col=\"12\" colspan=\"2\" text=\"토요일\" expandchar=\"saturday\" border=\"1px solid #e8e8e8,0px none,1px solid #e8e8e8,1px solid #e8e8e8\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" colspan=\"2\"><Cell text=\"bind:day0\" color=\"red\"/><Cell col=\"1\" text=\"bind:hol0\" color=\"red\"/><Cell row=\"1\" colspan=\"2\"/></Cell><Cell col=\"2\" rowspan=\"2\" colspan=\"2\"><Cell text=\"bind:day1\"/><Cell col=\"1\" text=\"bind:hol1\"/><Cell row=\"1\" colspan=\"2\"/></Cell><Cell col=\"4\" rowspan=\"2\" colspan=\"2\" cssclass=\"cell_bg_yellow\"><Cell text=\"bind:day2\"/><Cell col=\"1\" text=\"bind:hol2\"/><Cell row=\"1\" colspan=\"2\"/></Cell><Cell col=\"6\" rowspan=\"2\" colspan=\"2\" cssclass=\"cell_bg_blue\"><Cell text=\"bind:day3\"/><Cell col=\"1\" text=\"bind:hol3\"/><Cell row=\"1\" colspan=\"2\"/></Cell><Cell col=\"8\" rowspan=\"2\" colspan=\"2\" cssclass=\"cell_bg_green\"><Cell text=\"bind:day4\"/><Cell col=\"1\" text=\"bind:hol4\"/><Cell row=\"1\" colspan=\"2\"/></Cell><Cell col=\"10\" rowspan=\"2\" colspan=\"2\" cssclass=\"cell_bg_gray\"><Cell text=\"bind:day5\"/><Cell col=\"1\" text=\"bind:hol5\"/><Cell row=\"1\" colspan=\"2\"/></Cell><Cell col=\"12\" rowspan=\"2\" colspan=\"2\" border=\"1px solid #e8e8e8,0px none,1px solid #e8e8e8,1px solid #e8e8e8\" cssclass=\"cell_bg_red\"><Cell text=\"bind:day6\" color=\"blue\"/><Cell col=\"1\" text=\"bind:hol6\" color=\"blue\"/><Cell row=\"1\" colspan=\"2\"/></Cell></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
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
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_new.addEventHandler("onclick",this.fn_new,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("template29.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
