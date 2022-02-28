(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TOM00800M");
            this.set_titletext("치공구 이동 출고");
            if (Form == this.constructor)
            {
                this._setFormPosition(1290,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_tab1", this);
            obj._setContents("<ColumnInfo><Column id=\"SENDDATE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLMOVETYPEID\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLMOVETYPE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLNUMBER\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SENDPLANTID\" size=\"256\" type=\"STRING\"/><Column id=\"SENDPLANT\" size=\"256\" type=\"STRING\"/><Column id=\"SENDAREAID\" size=\"256\" type=\"STRING\"/><Column id=\"SENDAREA\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTPLANTID\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTPLANT\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTAREAID\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTAREA\" size=\"256\" type=\"STRING\"/><Column id=\"ISMOIDFY\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTDATE\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTUSERID\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTUSER\" size=\"256\" type=\"STRING\"/><Column id=\"SENDUSERID\" size=\"256\" type=\"STRING\"/><Column id=\"SENDUSER\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLTYPEID\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLTYPE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLFORMCODE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLFORM\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLKINDID\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLKIND\" size=\"256\" type=\"STRING\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"SENDDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"SENDDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVER\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_TY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTLOGINID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMOVETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISRECEIPT\" type=\"STRING\" size=\"256\"/><Column id=\"TOPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"TOAREAID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tab2", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"TOOLNUMBER\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPLANTID\" size=\"256\" type=\"STRING\"/><Column id=\"SENDPLANT\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTPLANTID\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTAREAID\" size=\"256\" type=\"STRING\"/><Column id=\"RECEIPTAREA\" size=\"256\" type=\"STRING\"/><Column id=\"SENDAREAID\" size=\"256\" type=\"STRING\"/><Column id=\"SENDAREA\" size=\"256\" type=\"STRING\"/><Column id=\"PRODUCTDEFID\" size=\"256\" type=\"STRING\"/><Column id=\"PRODUCTDEFVERSION\" size=\"256\" type=\"STRING\"/><Column id=\"PRODUCTDEFNAME\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLTYPEID\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLTYPE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLFORMCODE\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLFORM\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLKINDID\" size=\"256\" type=\"STRING\"/><Column id=\"TOOLKIND\" size=\"256\" type=\"STRING\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMOVETYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMOVETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_search);
            obj.set_text("Tabpage2");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_sendSite2","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("출고Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_sendSiteId2","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_sendArea2","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("출고작업장");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("AREANAME");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_sendArea2","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_sendArea2",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_toolMoveType2","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("이동구분");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_toolMoveType2","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,ToolMoveType,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_product","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_product","108","60",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("9");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_product",null,"60","22","20","15",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"130","45","20","90",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_search2","16","150","146","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("guidetip05","162","156","10","27",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("13");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_clear","172","150","102","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_receiptSite2","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("15");
            obj.set_text("입고Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_receiptSiteId2","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("16");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_sendSite","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("출고Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_sendSiteId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_term","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("출고일");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodFr","108","85",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType","10","110","94","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("사용자정의");
            obj.set_value("");
            obj.set_index("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodTo","108","110",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_sendArea","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("출고작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREANAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_sendArea","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_sendArea",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_toolMoveType","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("이동구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_toolMoveType","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_codecolumn("C,ToolMoveType,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_toolCode","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("Tool 코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_toolCode","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"230","45","20","90",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","16","250","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","162","259","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","172","250","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_isReceipt","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("입고여부");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_isReceipt","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_receiptSite","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("입고Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_receiptSiteId","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_receiptArea","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("입고작업장");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_receiptArea","108","210",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_receiptArea",null,"210","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","160","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Tab("tabHistory","0","31",null,null,"2","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tabHistory);
            obj.set_text("이동출고");
            obj.set_tooltiptext("TOOLUSESTATUS");
            this.div_work.form.tabHistory.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_toolMakingStatics",null,"6","29","24","5",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabHistory.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_toolMakingStatics","0","34",null,null,"1","0",null,null,null,null,this.div_work.form.tabHistory.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_tab2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"130\"/><Column size=\"70\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"108\"/><Column size=\"142\"/><Column size=\"142\"/><Column size=\"100\"/><Column size=\"57\"/><Column size=\"241\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"Tool 코드\"/><Cell col=\"2\" text=\"TOOL 구분\"/><Cell col=\"3\" text=\"TOOL 형식\"/><Cell col=\"4\" text=\"TOOL 종류\"/><Cell col=\"5\" text=\"출고SITE---HIDDEN\"/><Cell col=\"6\" text=\"SENDPLANT---HIDDEN\"/><Cell col=\"7\" text=\"출고작업장---HIDDEN\"/><Cell col=\"8\" text=\"SENDAREA---HIDDEN\"/><Cell col=\"9\" text=\"ISMODIFY---HIDDEN\"/><Cell col=\"10\" text=\"치공구명\" cssclass=\"cell\"/><Cell col=\"11\" text=\"출고작업장\" cssclass=\"cell\"/><Cell col=\"12\" text=\"입고작업장\" cssclass=\"cell_point\"/><Cell col=\"13\" text=\"품목코드\"/><Cell col=\"14\" text=\"품목 Rev.\"/><Cell col=\"15\" text=\"품목명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" textAlign=\"left\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:TOOLNUMBER\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:TOOLTYPE\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:TOOLFORM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TOOLKIND\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:SENDPLANTID\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:SENDPLANT\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:SENDAREAID\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:SENDAREA\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:ISMODIFY\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" expandshow=\"hide\"/><Cell col=\"11\" text=\"bind:SENDAREA\" textAlign=\"left\" expandshow=\"hide\"/><Cell col=\"12\" text=\"bind:RECEIPTAREA\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" displaytype=\"text\" edittype=\"text\"/><Cell col=\"13\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tabHistory.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_tab2","8","-3",null,"34","871",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tabHistory.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tabHistory);
            obj.set_text("치공구 이동출고현황");
            obj.set_tooltiptext("TOOLHISTORY");
            this.div_work.form.tabHistory.addChild(obj.name, obj);

            obj = new Grid("grd_toolMaking","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabHistory.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_tab1");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"118\"/><Column size=\"0\"/><Column size=\"65\"/><Column size=\"126\"/><Column size=\"246\"/><Column size=\"75\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"65\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"65\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"출고일자\"/><Cell col=\"2\" text=\"이동구분아이디---HIDDEN\"/><Cell col=\"3\" text=\"이동구분\"/><Cell col=\"4\" text=\"Tool 코드\"/><Cell col=\"5\" text=\"치공구명\"/><Cell col=\"6\" text=\"TOOL 구분\"/><Cell col=\"7\" text=\"TOOL 형식\"/><Cell col=\"8\" text=\"TOOL 종류\"/><Cell col=\"9\" text=\"출고SITE아이디---HIDDEN\"/><Cell col=\"10\" text=\"출고 Site\"/><Cell col=\"11\" text=\"출고작업장아이디---HIDDEN\"/><Cell col=\"12\" text=\"출고 작업장\"/><Cell col=\"13\" text=\"입고SITE아이디---HIDDEN\"/><Cell col=\"14\" text=\"입고 Site\"/><Cell col=\"15\" text=\"입고작업장아이디---HIDDEN\"/><Cell col=\"16\" text=\"입고 작업장\"/><Cell col=\"17\" text=\"의뢰자이이디---HIDDEN\"/><Cell col=\"18\" text=\"입고자\"/><Cell col=\"19\" text=\"출고자아이디---HIDDEN\"/><Cell col=\"20\" text=\"출고자\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" textAlign=\"left\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"bind:SENDDATE\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:TOOLMOVETYPEID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:TOOLMOVETYPE\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:TOOLNUMBER\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:TOOLNAME\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:TOOLTYPE\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:TOOLFORM\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:TOOLKIND\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:SENDPLANTID\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:SENDPLANT\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:SENDAREAID\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:SENDAREA\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:RECEIPTPLANTID\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:RECEIPTPLANT\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:RECEIPTAREAID\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:RECEIPTAREA\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:RECEIPTUSERID\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:RECEIPTUSER\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:SENDUSERID\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:SENDUSER\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tabHistory.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_tab1","8","-3",null,"34","844",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tabHistory.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_toolMaking",null,"6","29","24","5",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabHistory.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset2",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
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
            obj.set_enable("true");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","124",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","133","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_text("치공구 이동 출고");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1290,750,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TOM00800M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("TOM00800M.xfdl","lib::lib_tom.xjs");
        this.registerScript("TOM00800M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 치공구 현황 조회
         * 파일명 		: TOM01100M.xfdl
         * 작성자 		: 박현우
         * 작성일 		: 2021.02.01
         *
         * 설  명		: 치공구 현황 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.10	박현우   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.Tabpage1.form; //2번째탭
        this.searchDiv2 = this.tab_search.Tabpage2.form; //1번째탭
        this.tabDiv = this.div_work.form;
        this.headerDiv = this.div_header.form; //저장영역

        this.sendAreaId = ''; //tab0:출고작업장Id(조회조건)
        this.receiptAreaId = ''; //tab0:입고작업장Id(조회조건)

        this.sendAreaId2 = ''; //tab1:출고작업장Id(조회조건)
        this.productId = ''; //tab1:제품Id(조회조건)
        this.productVer = ''; //tab1:제품Ver(조회조건)

        this.fv_rtnValue = ''; //팝업화면 리턴값 변수

        //공통팝업:검색키구별값
        this.areaKeyType = '1'; //1:TAB1:출고작업장, 2:TAB1:입고작업장, 3:TAB2:출고작업장, 4:Grid:입고작업장
        this.gridAreaName = '';

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_initCombo();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : TAB1 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_tab1.clearData(); //첫번째 탭은 데이터 초기화 한다.

        	//출고작업장명이 공백이면 출고작업장Id 공백 처리
        	if(this.searchDiv.edt_sendArea.value=='') {
        		this.sendAreaId = '';
        	}

        	//입고작업장명이 공백이면 입고작업장Id 공백 처리
        	if(this.searchDiv.edt_receiptArea.value=='') {
        		this.receiptAreaId = '';
        	}

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "PLANTID", 					this.nfn_nvl(this.searchDiv.cbo_sendSiteId.value, "")); //출고Site
        	this.ds_search.setColumn(0, "AREAID", 					this.nfn_nvl(this.sendAreaId, "")); //출고작업장Id
        	this.ds_search.setColumn(0, "TOOLMOVETYPE", 			this.nfn_nvl(this.searchDiv.cbo_toolMoveType.value, "")); //이동구분
        	this.ds_search.setColumn(0, "SENDDATE_PERIODFR", 		this.nfn_nvl(this.searchDiv.cal_periodFr.value, "")); //시작일자
        	this.ds_search.setColumn(0, "SENDDATE_PERIODTO", 		this.nfn_nvl(this.searchDiv.cal_periodTo.value, "")); //종료일자
        	this.ds_search.setColumn(0, "DURABLELOTID", 			this.nfn_nvl(this.searchDiv.edt_toolCode.value, "")); //TOOL코드
        	this.ds_search.setColumn(0, "ISRECEIPT", 				this.nfn_nvl(this.searchDiv.cbo_isReceipt.value, "")); //입고여부
        	this.ds_search.setColumn(0, "TOPLANTID", 				this.nfn_nvl(this.searchDiv.cbo_receiptSiteId.value, "")); //입고Site
        	this.ds_search.setColumn(0, "TOAREAID", 				this.nfn_nvl(this.receiptAreaId, "")); //입고작업장Id
        	this.ds_search.setColumn(0, "CURRENTLOGINID", 			this.tomfn_getUserId()); //사용자Id
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectMoveToolStatusListByToolList");

        	var sSvcID 			= "selectMoveToolStatusListByToolList";
        	var sController 	= "/tom00800/selectMoveToolStatusListByToolList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_tab1=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : TAB2 검색
         */
        this.fn_search2 = function (obj, e)
        {
        	this.ds_tab2.clearData(); //첫번째 탭은 데이터 초기화 한다.

        	//출고작업장명이 공백이면 출고작업장Id 공백 처리
        	if(this.sendAreaId2=='') {
        		this.sendAreaId2 = '';
        		alert('출고작업장을 입력 바랍니다.');
        		return;
        	}

        	//품목코드명이 공백이면 코드/버젼 공백 처리
        	if(this.searchDiv2.edt_product.value=='') {
        		this.productId = '';
        		this.productVer = '';
        	}

        	//입고Site 필수 입력 체크
        	if(this.nfn_nvl(this.searchDiv2.cbo_toolMoveType2.value, "")=='' || this.nfn_nvl(this.searchDiv2.cbo_receiptSiteId2.value, "")=='') {
        		this.gfn_Message("ValidateToolMoveTypeStatus", "", "warning", "ok");
        		return;
        	}

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 			this.nfn_nvl(this.gf_getEnterpriseId(), ""));
        	this.ds_search.setColumn(0, "PLANTID", 					this.nfn_nvl(this.searchDiv2.cbo_sendSiteId2.value, "")); //출고Site
        	this.ds_search.setColumn(0, "AREAID", 					this.nfn_nvl(this.sendAreaId2, "")); //출고작업장Id
        	this.ds_search.setColumn(0, "TOOLMOVETYPE", 			this.nfn_nvl(this.searchDiv2.cbo_toolMoveType2.value, "")); //이동구분(서버에서 사용 안함)
        	this.ds_search.setColumn(0, "PRODUCTDEFID", 			this.nfn_nvl(this.productId, "")); //품목코드
        	this.ds_search.setColumn(0, "CURRENTLOGINID", 			this.tomfn_getUserId()); //사용자Id
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectMoveToolInputListByToolList");

        	var sSvcID 			= "selectMoveToolInputListByToolList";
        	var sController 	= "/tom00800/selectMoveToolInputListByToolList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_tab2=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	//1. 변경 데이터 존재 확인
        	if(!this.gfn_dsIsUpdated(this.ds_tab2)){ //변경데이터 확인
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	//입고Site 필수 입력 체크
        	if(this.nfn_nvl(this.searchDiv2.cbo_toolMoveType2.value, "")=='' || this.nfn_nvl(this.searchDiv2.cbo_receiptSiteId2.value, "")=='') {
        		this.gfn_Message("ValidateToolMoveTypeStatus", "", "warning", "ok");
        		return;
        	}

        	//var component = this.gridDiv.grd_head;
        	//var strColIdList = "REPAIRRESULT";

        	/* 그리드 필수 입력 체크 */
        	//if(!this.nfn_MandatoryCheckGrid(component, strColIdList)) return;

        	var chkVal = '0';
        	var tempAreaId = '';
        	var nSelCnt = 0;
        	var nFirstRow = 0;
        	for(var i=0; i<this.ds_tab2.rowcount; i++){
        		chkVal = this.ds_tab2.getColumn(i, "CHK");
        		if(chkVal=='1'){
        			tempAreaId = this.nfn_nvl(this.ds_tab2.getColumn(i, "RECEIPTAREAID"));
        			if(tempAreaId=='' || tempAreaId=='X'){
        				if(nFirstRow==0){
        					nFirstRow = i;
        				}
        			}else{
        				nSelCnt = nSelCnt + 1;
        			}
        		}
        	}
        	if(nSelCnt==0){
        		this.gfn_Message("ValidMoveToolSelectRequier", "", "warning", "ok");
        		this.ds_tab2.set_rowposition(nFirstRow);
        		return;
        	}

        	var receiptAreaId = "";
        	var receiptSiteId2 = this.nfn_nvl(this.searchDiv2.cbo_receiptSiteId2.value, ""); //조회조건의 입고site를 수정된row에 set 한다.
        	var toolMoveType2 = this.nfn_nvl(this.searchDiv2.cbo_toolMoveType2.value, ""); //조회조건의 이동구분
        	for(var j=0; j<this.ds_tab2.rowcount; j++){
        		chkVal = this.ds_tab2.getColumn(j, "CHK");
        		if(chkVal=='1'){
        			receiptAreaId = this.nfn_nvl(this.ds_tab2.getColumn(j, "RECEIPTAREAID"),"");//입고작업장Id가 존재하는건만 입고사이트를 세팅 한다.
        			if(receiptAreaId != ''){
        				this.ds_tab2.setColumn(j, "RECEIPTPLANTID", receiptSiteId2); //입고사이트
        				this.ds_tab2.setColumn(j, "TOOLMOVETYPEID", toolMoveType2); //이동구분
        				this.ds_tab2.setColumn(j, "TOOLMOVETYPE", toolMoveType2); //이동구분
        			}
        		}
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveMoveSendTool";
        	var sController 	= "/tom00800/saveMoveSendTool.do";
        	var sInDatasets 	= "INPUT=ds_tab2:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        };

        /*
         * 기능 : 복사
         */
        this.fn_copy = function(obj,e)
        {
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD != 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	switch(trId) {
        		case "selectTomPlantList":	//[조회조건] Site Callback
        			this.searchDiv.cbo_sendSiteId.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        			this.searchDiv.cbo_receiptSiteId.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        			this.searchDiv2.cbo_sendSiteId2.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        			this.searchDiv2.cbo_receiptSiteId2.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        			this.searchDiv2.cbo_toolMoveType2.set_value("Move"); //세션사용자PlantId를 가져온다.
        			this.tab_search.set_tabindex(0);
        			//this.headerDiv.btn_cancel.set_visible(false);
        			//this.headerDiv.btn_save.set_enable(true);
        			break;
        		case "selectPeriodQueryCmb": //[조회조건] Period dataset Callback
        			this.fn_setDate("THISMONTH");
        			break;
        		case "selectMoveToolStatusListByToolList": //[TAB0]그리드 CALLBACK
        			this.fn_search2();
        			break;
        		case "selectMoveToolInputListByToolList": //[TAB1]그리드 CALLBACK
        			break;
        		case "saveMoveSendTool": //출고처리callback
        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장이 완료되었습니다.
        			this.fn_search();
        			break;
        		//case "saveMoveSendToolCancel": //출고취소처리callback
        		//	this.gfn_Message("SuccessSave", null, "info", "ok"); //저장이 완료되었습니다.
        		//	this.fn_search();
        		//	break;
        		default:
        	}
        };

        this.fn_callBack2 = function (trId, errCD, errMsg)
        {
        	this.searchDiv.cbo_receiptSiteId.set_value("");
        };
        this.fn_callBack3 = function (trId, errCD, errMsg)
        {
        	this.searchDiv.cbo_sendSiteId2.set_value("");
        };
        this.fn_callBack4 = function (trId, errCD, errMsg)
        {
        	this.searchDiv.cbo_receiptSiteId2.set_value("");
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        /*
         * 기능(공통팝업) : '작업장' Text 조회
         */
        this.fn_openPop = function(svcId, popId, pArg)
        {
        	// gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
        	//-----------------
        	// arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅
        	// popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        	// popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        	// rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        	// paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        	// paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        	// searchStr   : 팝업 조회조건 콤보값 = 조회 값

        	var popupId = svcId;
        	var oArg = {};
        	var opts = "width=650,height=500";

        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");
        	oArg.arg_searchStr = "";

        	if(popId=="P00063"){ //작업장조회 조회
        		if(this.areaKeyType=='1'){
        			oArg.arg_searchStr = "AREANAME="+this.nfn_nvl(this.searchDiv.edt_sendArea.value, "");//조회조건의 TAB1 : 출고작업장 엔터
        		}else if(this.areaKeyType=='2'){
        			oArg.arg_searchStr = "AREANAME="+this.nfn_nvl(this.searchDiv.edt_receiptArea.value, "");//조회조건의 TAB1 : 입고작업장 엔터
        		}else if(this.areaKeyType=='3'){
        			oArg.arg_searchStr = "AREANAME="+this.nfn_nvl(this.searchDiv2.edt_sendArea2.value, "");//조회조건의 TAB2 : 출고작업장 엔터
        		}else if(this.areaKeyType=='4'){
        			oArg.arg_searchStr = "AREANAME="+this.gridAreaName;//그리드의 입고작업장 엔터
        		}
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        	}else if(popId=="P00126"){ //품목코드 조회
        		oArg.arg_searchStr = "PRODUCTDEFID="+this.searchDiv2.edt_product.value;//조회조건의 품목명
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_AREA_0_1") //TAB0 : 출고작업장
        	{
        		this.searchDiv.edt_sendArea.set_value(rtn[1]);
        		this.sendAreaId = rtn[0];
        	}else if(sPopupId == "SCH_AREA_0_2") //TAB0 : 입고작업장
        	{
        		this.searchDiv.edt_receiptArea.set_value(rtn[1]);
        		this.receiptAreaId = rtn[0];
        	}else if(sPopupId == "SCH_AREA_1_1") //TAB1 : 출고작업장
        	{
        		this.searchDiv2.edt_sendArea2.set_value(rtn[1]);
        		this.sendAreaId2 = rtn[0];
        	}else if(sPopupId == "SCH_PRODUCT") //TAB1 : 품목
        	{
        		this.searchDiv2.edt_product.set_value(rtn[1]);
        		this.productId = rtn[0]; //HIDDEN 필드
        		this.productVer = rtn[2]; //HIDDEN 필드
        	}else if(sPopupId == "SCH_AREA_GRID") //TAB2 : 그리드 입고작업장
        	{
        		this.ds_tab2.setColumn(this.ds_tab2.rowposition, "RECEIPTAREAID", rtn[0]);
        		this.ds_tab2.setColumn(this.ds_tab2.rowposition, "RECEIPTAREA", rtn[1]);
        		var tempSendAreaId = this.nfn_nvl(this.ds_tab2.getColumn(this.ds_tab2.rowposition, "SENDAREAID")); //출고작업장ID
        		if(tempSendAreaId == rtn[0]){
        			alert('출고작업장 과 입고작업장이 동일 합니다. 재입력 바랍니다.');
        			this.ds_tab2.setColumn(this.ds_tab2.rowposition, "RECEIPTAREAID", "");
        			this.ds_tab2.setColumn(this.ds_tab2.rowposition, "RECEIPTAREA", "");
        			return;
        		}
        	}
        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        	this.tomfn_getPeriodData("ds_periodType","","fn_callBack");
        	this.searchDiv.cbo_periodType.set_value("THISMONTH"); // 금월

        	this.fn_initSiteCombo(); //tab0 : 출고site
        	this.fn_initSiteCombo2(); //tab0 : 입고site
        	this.fn_initSiteCombo3(); //tab1 : 출고site
        	this.fn_initSiteCombo4(); //tab1 : 입고site
        }

        /*
         * 기능 : 'TAB0 : 출고 Site' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());

        	this.tomfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cbo_sendSiteId // Object
        								, "selectTomPlantList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack"); //콜백함수 지정
        }

        /*
         * 기능 : 'TAB0 : 입고 Site' 콤보 조회
         */
        this.fn_initSiteCombo2 = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());

        	this.tomfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cbo_receiptSiteId // Object
        								, "selectTomPlantList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack2"); //콜백함수 지정
        }

        /*
         * 기능 : 'TAB1 : 출고 Site' 콤보 조회
         */
        this.fn_initSiteCombo3 = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());

        	this.tomfn_setCustomQueryCmb(this.tab_search.Tabpage2.form.cbo_sendSiteId2 // Object
        								, "selectTomPlantList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack3"); //콜백함수 지정
        }

        /*
         * 기능 : 'TAB1 : 입고 Site' 콤보 조회
         */
        this.fn_initSiteCombo4 = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());

        	this.tomfn_setCustomQueryCmb(this.tab_search.Tabpage2.form.cbo_receiptSiteId2 // Object
        								, "selectTomPlantList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack4"); //콜백함수 지정
        }

        /*
         * 기능 : 'TAB2' : 그리드 '입고작업장' 콤보 조회
         */
        this.fn_areaSelectPop = function ()
        {
        	//입고사이트 선택여부 파악
        	var inputSite = this.nfn_nvl(this.searchDiv2.cbo_receiptSiteId2.value,'');
        	if(inputSite==''){
        		alert('입고사이트를 선택 바랍니다.');
        		return;
        	}

        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv2.cbo_receiptSiteId2.value);
        	sArgs += this.gfn_setParam("CURRENTLOGINID", this.gf_getUserAcnt()); //로그인 ID
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.areaKeyType = '4';

        	this.fn_openPop("SCH_AREA_GRID","P00063", sArgs); //입고작업장 조회
        }

        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function ()
        {
        	this.searchDiv.cbo_periodType.set_value("CUSTOM");
        }

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.searchDiv.cal_periodFr.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.searchDiv.cal_periodTo.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_Tabpage1_cbo_periodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate(e.postvalue);
        	}
        };

        this.tab_onchanged = function(obj,e)
        {
        	var tabIdx = this.tabDiv.tabHistory.tabindex;
        	if(tabIdx==0){
        		this.tab_search.set_tabindex(0);
        		//this.headerDiv.btn_cancel.set_visible(true);
        		//this.headerDiv.btn_save.set_enable(false);
        	}else{
        		this.tab_search.set_tabindex(1);
        		//this.headerDiv.btn_cancel.set_visible(false);
        		//this.headerDiv.btn_save.set_enable(true);
        	}
        };

        //[tab0 : 출고작업장]
        this.tab_search_Tabpage1_btn_sendArea_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_sendSiteId.value);
        	sArgs += this.gfn_setParam("CURRENTLOGINID", this.gf_getUserAcnt()); //로그인 ID
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.areaKeyType = '1';

        	this.fn_openPop("SCH_AREA_0_1","P00063", sArgs); //TAB0 출고 작업장 조회
        };

        //[tab0 : 입고작업장]
        this.tab_search_Tabpage1_btn_receiptArea_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_receiptSiteId.value);
        	sArgs += this.gfn_setParam("CURRENTLOGINID", this.gf_getUserAcnt()); //로그인 ID
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.areaKeyType = '2';

        	this.fn_openPop("SCH_AREA_0_2","P00063", sArgs); //TAB0 입고 작업장 조회
        };

        //[tab1 : 출고작업장]
        this.tab_search_Tabpage2_btn_sendArea2_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_sendSiteId.value);
        	sArgs += this.gfn_setParam("CURRENTLOGINID", this.gf_getUserAcnt()); //로그인 ID
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.areaKeyType = '3';

        	this.fn_openPop("SCH_AREA_1_1","P00063", sArgs); //TAB1 출고 작업장 조회
        };

        ////[tab1 : 품목코드]
        this.tab_search_Tabpage1_btn_product_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv2.cbo_sendSiteId2.value); //출고작업장Id
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("P_PRODUCTDEFTYPE", "Product");

        	this.fn_openPop("SCH_PRODUCT","P00126", sArgs); //품목코드 조회
        };

        this.div_work_tabHistory_Tabpage2_grd_toolMakingStatics_oncloseup = function(obj,e)
        {
        	this.grd_toolMakingStatics.updateToDataset();
        };

        this.div_work_tabHistory_Tabpage2_grd_toolMakingStatics_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.col, "RECEIPTAREA")) {
        		this.gridAreaName = '';
        		this.fn_areaSelectPop();
        	}
        };

        /*
         * 이동 출고 취소
         */
        /*
        this.div_header_btn_cancel_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        {
        	//1. 변경 데이터 존재 확인
        	if(!this.gfn_dsIsUpdated(this.ds_tab1)){ //변경데이터 확인
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	//var component = this.gridDiv.grd_head;
        	//var strColIdList = "REPAIRRESULT";

        	//if(!this.nfn_MandatoryCheckGrid(component, strColIdList)) return;

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveMoveSendToolCancel";
        	var sController 	= "/tom00800/saveMoveSendToolCancel.do";
        	var sInDatasets 	= "INPUT=ds_tab1:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        */

        this.div_header_btn_delete_onclick = function(obj,e)
        {
        };

        this.div_work_tabHistory_Tabpage2_btn_delRow_ds_tab2_onclick = function(obj,e)
        {
        };

        //TAB1 : 출고작업장
        this.tab_search_Tabpage1_edt_sendArea_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.areaKeyType = "1";
        		this.tab_search_Tabpage1_btn_sendArea_onclick();
        	}
        };

        //TAB1 : 입고작업장
        this.tab_search_Tabpage1_edt_receiptArea_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.areaKeyType = "2";
        		this.tab_search_Tabpage1_btn_receiptArea_onclick();
        	}
        };

        this.fn_searchClear = function(obj,e)
        {
        	this.searchDiv.cbo_sendSiteId.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        	this.searchDiv.cbo_receiptSiteId.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        	this.searchDiv2.cbo_sendSiteId2.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        	this.searchDiv2.cbo_receiptSiteId2.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.

        	this.sendAreaId = ''; //tab0:출고작업장Id(조회조건)
        	this.receiptAreaId = ''; //tab0:입고작업장Id(조회조건)

        	this.sendAreaId2 = ''; //tab1:출고작업장Id(조회조건)
        	this.productId = ''; //tab1:제품Id(조회조건)
        	this.productVer = ''; //tab1:제품Ver(조회조건)
        };

        //TAB2:출고작업장
        this.tab_search_Tabpage2_edt_sendArea2_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.areaKeyType = "3";
        		this.tab_search_Tabpage2_btn_sendArea2_onclick();
        	}
        };

        //TAB2:품목코드
        this.tab_search_Tabpage2_edt_product_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_product_onclick();
        	}
        };

        this.div_header_btn_reset2_onclick = function(obj,e)
        {
        	this.ds_tab1.clearData();
        	this.ds_tab2.clearData();
        	var strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.tabDiv.tabHistory.Tabpage1.form.sta_cnt_ds_tab1.set_text(strCnt);
        	strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.tabDiv.tabHistory.Tabpage2.form.sta_cnt_ds_tab2.set_text(strCnt);
        };

        this.tab_search_Tabpage2_cbo_toolMoveType2_onitemchanged = function(obj,e)
        {
        	//이동이면 IFC만 조회되게 처리 : IFC 선택하고 Enable=false
        	var toolMoveType = this.searchDiv2.cbo_toolMoveType2.value;
        	if(toolMoveType == 'Move') { //이동
        		//IFC 선택되게 하고, Enable=false
        		this.searchDiv2.cbo_receiptSiteId2.set_value("IFC");
        		this.searchDiv2.cbo_receiptSiteId2.enable = false;
        	}else{ //전체선택 또는 이관
        		//전체 선택되게 하고, Enable=true
        		this.searchDiv2.cbo_receiptSiteId2.set_index(0); //전체선택에 위치하게 세팅
        		this.searchDiv2.cbo_receiptSiteId2.enable = true;
        	}
        };

        this.div_work_tabHistory_Tabpage2_grd_toolMakingStatics_onkeyup = function(obj,e)
        {
        	if(e.keycode==13){
        		this.areaKeyType = '4';
        		this.gridAreaName = this.nfn_nvl(this.ds_tab2.getColumn(this.ds_tab2.rowposition, "RECEIPTAREA"));
        		this.fn_areaSelectPop();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.tab_search.Tabpage2.form.edt_sendArea2.addEventHandler("onkeydown",this.tab_search_Tabpage2_edt_sendArea2_onkeydown,this);
            this.tab_search.Tabpage2.form.btn_sendArea2.addEventHandler("onclick",this.tab_search_Tabpage2_btn_sendArea2_onclick,this);
            this.tab_search.Tabpage2.form.cbo_toolMoveType2.addEventHandler("onitemchanged",this.tab_search_Tabpage2_cbo_toolMoveType2_onitemchanged,this);
            this.tab_search.Tabpage2.form.edt_product.addEventHandler("onkeydown",this.tab_search_Tabpage2_edt_product_onkeydown,this);
            this.tab_search.Tabpage2.form.btn_product.addEventHandler("onclick",this.tab_search_Tabpage1_btn_product_onclick,this);
            this.tab_search.Tabpage2.form.btn_search2.addEventHandler("onclick",this.fn_search2,this);
            this.tab_search.Tabpage2.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage2.form.cbo_receiptSiteId2.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_siteId_onitemchanged,this);
            this.tab_search.Tabpage1.form.cbo_sendSiteId.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_siteId_onitemchanged,this);
            this.tab_search.Tabpage1.form.cal_periodFr.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cbo_periodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_periodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.cal_periodTo.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.edt_sendArea.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_sendArea_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_sendArea.addEventHandler("onclick",this.tab_search_Tabpage1_btn_sendArea_onclick,this);
            this.tab_search.Tabpage1.form.cbo_toolMoveType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_siteId_onitemchanged,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.cbo_isReceipt.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_siteId_onitemchanged,this);
            this.tab_search.Tabpage1.form.cbo_receiptSiteId.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_siteId_onitemchanged,this);
            this.tab_search.Tabpage1.form.edt_receiptArea.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_receiptArea_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_receiptArea.addEventHandler("onclick",this.tab_search_Tabpage1_btn_receiptArea_onclick,this);
            this.div_work.form.tabHistory.addEventHandler("onchanged",this.tab_onchanged,this);
            this.div_work.form.tabHistory.Tabpage2.form.grd_toolMakingStatics.addEventHandler("oncloseup",this.div_work_tabHistory_Tabpage2_grd_toolMakingStatics_oncloseup,this);
            this.div_work.form.tabHistory.Tabpage2.form.grd_toolMakingStatics.addEventHandler("onexpandup",this.div_work_tabHistory_Tabpage2_grd_toolMakingStatics_onexpandup,this);
            this.div_work.form.tabHistory.Tabpage2.form.grd_toolMakingStatics.addEventHandler("onkeyup",this.div_work_tabHistory_Tabpage2_grd_toolMakingStatics_onkeyup,this);
            this.div_work.form.tabHistory.Tabpage1.form.grd_toolMaking.addEventHandler("oncloseup",this.div_work_tabHistory_Tabpage1_grd_toolMaking_oncloseup,this);
            this.div_work.form.tabHistory.Tabpage1.form.grd_toolMaking.addEventHandler("onexpandup",this.div_work_tabHistory_Tabpage1_grd_toolMaking_onexpandup,this);
            this.div_header.form.btn_reset2.addEventHandler("onclick",this.div_header_btn_reset2_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_delete.addEventHandler("onclick",this.div_header_btn_delete_onclick,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("TOM00800M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
