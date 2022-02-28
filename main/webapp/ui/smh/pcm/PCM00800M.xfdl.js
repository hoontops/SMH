(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM00800M");
            this.set_titletext("투입 실적 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDIVISION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_InputResultByDay", this);
            obj._setContents("<ColumnInfo><Column id=\"INPUTDAY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"STACKPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"STACKPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"STACKMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"STACKPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Product", this);
            obj._setContents("<ColumnInfo><Column id=\"INPUTDAY\" type=\"STRING\" size=\"256\"/><Column id=\"SPECAPPROVALDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALESORDERDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTCREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTLT\" type=\"STRING\" size=\"256\"/><Column id=\"SALESORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPRICE_BARE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPRICE_SMT\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPRICE_ETC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Lot", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"SALESORDERDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALESORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERGROUP\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SALESCHARGE\" type=\"STRING\" size=\"256\"/><Column id=\"SALESCHARGENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECIFICATIONCHARGE\" type=\"STRING\" size=\"256\"/><Column id=\"SPECIFICATIONCHARGENAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PCSMM\" type=\"STRING\" size=\"256\"/><Column id=\"UNITPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSY\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEXAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEYAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PNL\" type=\"STRING\" size=\"256\"/><Column id=\"M2\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERPNL\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"STARTAREA\" type=\"STRING\" size=\"256\"/><Column id=\"STARTSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"STARTRESOURCE\" type=\"STRING\" size=\"256\"/><Column id=\"ISAMPLE\" type=\"STRING\" size=\"256\"/><Column id=\"ERP_INPUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECAPPROVALDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SPECAPPROVALTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTMI\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_ProdVersion", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFVERSIONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSIONNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRODUCTDEFVERSIONCODE\"/><Col id=\"PRODUCTDEFVERSIONNAME\">전체조회</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Process", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME_MIDDLE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME_TOP\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODSEL\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDIVISION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_print:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","302","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","272","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_text("Routing 자원/치공구/외주단가 등록");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"330","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","356","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PROCSEGMENT",null,"210","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staEXCHANGETYPE","0","285","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("환율구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ExchangeType2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTIONTYPE","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","108","160",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PROCSEGMENT","108","210",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCUSTOMER","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("고객");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CUSTOMER");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPROCSEGMENT","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("OPERATION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staLOTID","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTIONTYPE","108","235","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_CUSTOMER","108","185",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPLANTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PLANT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staLOTINPUTTYPE","0","260","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("투입구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTINPUTTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_LOTINPUTTYPE","108","260","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_codecolumn("C,LotInputType,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_EXCHANGETYPE","108","285","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_codecolumn("C,ExchangeType2,SEL,Y,N");
            obj.set_innerdataset("");
            obj.set_enable("false");
            obj.set_text("");
            obj.set_value("PLAN");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_CUSTOMER",null,"185","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_LOTID",null,"160","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staSearchPeriod","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("C6A85700415446D89213292978260263");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_STARTDT","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_ENDDT","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PERIODTYPE","15","60","88","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFID","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","0","15","290",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"0","15","290","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","350","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","350","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_hotkey("F2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFVERSION","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("33");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFNAME","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("35");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDIVISION","0","310","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("36");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDIVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDIVISION","108","310","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("37");
            obj.set_codecolumn("C,ProductDivision2,,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_Main","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_Main);
            obj.set_text("투입실적");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","89","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("투입실적");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("INPUTRESULT");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grdInputResultByDay","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_InputResultByDay");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"87\"/><Column size=\"59\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"투입일\"/><Cell col=\"2\" text=\"요일\"/><Cell col=\"3\" text=\"투입수량(PCS)\"/><Cell col=\"4\" text=\"투입수량(PNL)\"/><Cell col=\"5\" text=\"투입수량(MM)\"/><Cell col=\"6\" text=\"투입금액\"/><Cell col=\"7\" text=\"누적수량(PCS)\"/><Cell col=\"8\" text=\"누적수량(PNL)\"/><Cell col=\"9\" text=\"누적수량(MM)\"/><Cell col=\"10\" text=\"누적금액\"/></Band><Band id=\"body\"><Cell cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:INPUTDAY\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:INPUTDAY\" calendardateformat=\"ddd\" displaytype=\"date\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:INPUTPCSQTY\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:INPUTPNLQTY\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"5\" text=\"bind:INPUTMMQTY\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"6\" text=\"bind:INPUTPRICE\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"7\" text=\"bind:STACKPCSQTY\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"8\" text=\"bind:STACKPNLQTY\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"9\" text=\"bind:STACKMMQTY\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"10\" text=\"bind:STACKPRICE\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_InputResultByDay","staTitle:0","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdInputResultByDay",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_Main);
            obj.set_text("품목별 투입실적");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","117","34","841",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("품목별 투입실적   ");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grdProduct","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_Product");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"230\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"투입일\"/><Cell col=\"2\" text=\"수주입력시간\" tooltiptext=\"SALSEORDERINPUTTIME\"/><Cell col=\"3\" text=\"사양결제시간\"/><Cell col=\"4\" text=\"LOT생성시간\"/><Cell col=\"5\" text=\"투입시간\"/><Cell col=\"6\" text=\"수주번호\"/><Cell col=\"7\" text=\"고객명\"/><Cell col=\"8\" text=\"양산구분\"/><Cell col=\"9\" text=\"투입구분\"/><Cell col=\"10\" text=\"품목코드\"/><Cell col=\"11\" text=\"Rev.\"/><Cell col=\"12\" text=\"품목명\"/><Cell col=\"13\" text=\"투입수량(PCS)\"/><Cell col=\"14\" text=\"투입수량(PNL)\"/><Cell col=\"15\" text=\"투입수량(MM)\"/><Cell col=\"16\" text=\"투입금액\"/><Cell col=\"17\" text=\"BARE금액\"/><Cell col=\"18\" text=\"SMT금액\"/><Cell col=\"19\" text=\"ECT금액\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INPUTDAY\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:SALESORDERDATE\" tooltiptext=\"SALSEORDERINPUTTIME\"/><Cell col=\"3\" text=\"bind:SPECAPPROVALDATE\"/><Cell col=\"4\" text=\"bind:LOTCREATEDTIME\"/><Cell col=\"5\" text=\"bind:INPUTTIME\"/><Cell col=\"6\" text=\"bind:SALESORDERID\"/><Cell col=\"7\" text=\"bind:CUSTOMERNAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:LOTTYPENAME\" combocodecol=\"C,ProductionType,ALL,Y,Y\" displaytype=\"combotext\"/><Cell col=\"9\" text=\"bind:LOTINPUTTYPE\" combocodecol=\"C,LotInputType,ALL,Y,Y\" displaytype=\"combotext\"/><Cell col=\"10\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"11\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"12\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" wordWrap=\"char\"/><Cell col=\"13\" text=\"bind:INPUTPCSQTY\" maskeditformat=\"#,###\"/><Cell col=\"14\" text=\"bind:INPUTPNLQTY\" maskeditformat=\"#,###\"/><Cell col=\"15\" text=\"bind:INPUTMMQTY\" maskeditformat=\"#,###.##\"/><Cell col=\"16\" text=\"bind:INPUTPRICE\" maskeditformat=\"#,###\"/><Cell col=\"17\" text=\"bind:INPUTPRICE_BARE\" maskeditformat=\"#,###\"/><Cell col=\"18\" text=\"bind:INPUTPRICE_SMT\" maskeditformat=\"#,###\"/><Cell col=\"19\" text=\"bind:INPUTPRICE_ETC\" maskeditformat=\"#,###\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" text=\"합계\" tooltiptext=\"TOTALAMOUNT\"/><Cell col=\"13\" expr=\"expr:dataset.getSum(&quot;INPUTPCSQTY&quot;) \" maskeditformat=\"#,###\" displaytype=\"mask\"/><Cell col=\"14\" expr=\"dataset.getSum(&quot;INPUTPNLQTY&quot;) \" maskeditformat=\"#,###\" displaytype=\"mask\"/><Cell col=\"15\" expr=\"dataset.getSum(&quot;INPUTMMQTY&quot;) \" maskeditformat=\"#,###.##\" displaytype=\"mask\"/><Cell col=\"16\" expr=\"dataset.getSum(&quot;INPUTPRICE&quot;) \" maskeditformat=\"#,###\" displaytype=\"mask\"/><Cell col=\"17\" expr=\"dataset.getSum(&quot;INPUTPRICE_BARE&quot;) \" maskeditformat=\"#,###\" displaytype=\"mask\"/><Cell col=\"18\" expr=\"dataset.getSum(&quot;INPUTPRICE_SMT&quot;) \" maskeditformat=\"#,###\" displaytype=\"mask\"/><Cell col=\"19\" expr=\"dataset.getSum(&quot;INPUTPRICE_ETC&quot;) \" maskeditformat=\"#,###\" displaytype=\"mask\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_Product","staTitle:0","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdProduct",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab_Main);
            obj.set_text("LOT별 투입실적");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","115","34","843",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("LOT별 투입실적   ");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grdLot","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_Lot");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"260\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"118\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"104\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"240\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Site\" tooltiptext=\"PLANTID\"/><Cell col=\"2\" text=\"작업구분\" tooltiptext=\"JOBTYPE\"/><Cell col=\"3\" text=\"투입구분\"/><Cell col=\"4\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell col=\"5\" text=\"Rev.\"/><Cell col=\"6\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"7\" text=\"Lot No.\"/><Cell col=\"8\" text=\"수주일\"/><Cell col=\"9\" text=\"수주번호\"/><Cell col=\"10\" text=\"라인\"/><Cell col=\"11\" text=\"고객사\" tooltiptext=\"COMPANYCLIENT\"/><Cell col=\"12\" text=\"고객그룹\"/><Cell col=\"13\" text=\"LA\"/><Cell col=\"14\" text=\"TYPE\" tooltiptext=\"C38BC56010114ACC8EE2E27ADFB3C102\"/><Cell col=\"15\" text=\"영업담당\"/><Cell col=\"16\" text=\"사양담당\"/><Cell col=\"17\" text=\"작업\" tooltiptext=\"110\"/><Cell col=\"18\" text=\"납기일\" tooltiptext=\"DUEDATE\"/><Cell col=\"19\" text=\"합수\" tooltiptext=\"SUMMARY\"/><Cell col=\"20\" text=\"산출수\" tooltiptext=\"CALCULATION\"/><Cell col=\"21\" text=\"단가\"/><Cell col=\"22\" text=\"ASSY\"/><Cell col=\"23\" text=\"PNL_SIZE(X)\"/><Cell col=\"24\" text=\"PNL_SIZE(Y)\"/><Cell col=\"25\" text=\"PCS\"/><Cell col=\"26\" text=\"PNL\"/><Cell col=\"27\" text=\"M2\"/><Cell col=\"28\" text=\"금액\" tooltiptext=\"AMOUNTS\"/><Cell col=\"29\" text=\"수주PCS\" tooltiptext=\"ORDERPCS\"/><Cell col=\"30\" text=\"수주PNL\" tooltiptext=\"ORDERPNL\"/><Cell col=\"31\" text=\"수주M2\" tooltiptext=\"ORDERMMQTY\"/><Cell col=\"32\" text=\"투입작업장\" tooltiptext=\"INPUTAREA\"/><Cell col=\"33\" text=\"투입공정\" tooltiptext=\"INPUTSEGMENT\"/><Cell col=\"34\" text=\"투입자원\" tooltiptext=\"INPUTRESOURCE\"/><Cell col=\"35\" text=\"샘플\" tooltiptext=\"2A68C06D6E114A4C8E8FAE102A347517\"/><Cell col=\"36\" text=\"수주입력시간\" tooltiptext=\"SALSEORDERINPUTTIME\"/><Cell col=\"37\" text=\"수주배분일\" tooltiptext=\"SALSEORDERDATE\"/><Cell col=\"38\" text=\"수주배분시간\" tooltiptext=\"SALSEORDERTIME\"/><Cell col=\"39\" text=\"사양결재일\" tooltiptext=\"SPECAPPROVALDATE2\"/><Cell col=\"40\" text=\"결재시간\" tooltiptext=\"APPROVALTIME\"/><Cell col=\"41\" text=\"투입일\" tooltiptext=\"INPUTDAY\"/><Cell col=\"42\" text=\"투입시간\" tooltiptext=\"INPUTTIME\"/><Cell col=\"43\" text=\"투입LT\" tooltiptext=\"INPUTLT\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PLANTID\"/><Cell col=\"2\" text=\"bind:PRODUCTIONTYPE\" combocodecol=\"C,ProductionType,ALL,Y,N\" displaytype=\"combotext\"/><Cell col=\"3\" text=\"bind:LOTINPUTTYPE\" combocodecol=\"C,LotInputType,ALL,Y,N\" displaytype=\"combotext\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:SALESORDERDATE\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"9\" text=\"bind:SALESORDERID\"/><Cell col=\"10\" text=\"bind:LINENO\"/><Cell col=\"11\" text=\"bind:CUSTOMERNAME\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:CUSTOMERGROUP\"/><Cell col=\"13\" text=\"bind:LAYER\"/><Cell col=\"14\" text=\"bind:PRODUCTTYPE\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:SALESCHARGENAME\"/><Cell col=\"16\" text=\"bind:SPECIFICATIONCHARGENAME\"/><Cell col=\"17\" text=\"bind:JOBTYPE\" displaytype=\"combotext\" combocodecol=\"C,JobType,ALL,Y,Y\"/><Cell col=\"18\" text=\"bind:DELIVERYDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"19\" text=\"bind:PCSPNL\" textAlign=\"right\"/><Cell col=\"20\" text=\"bind:PCSMM\" textAlign=\"right\"/><Cell col=\"21\" text=\"bind:UNITPRICE\" textAlign=\"right\"/><Cell col=\"22\" text=\"bind:ASSY\" textAlign=\"center\"/><Cell col=\"23\" text=\"bind:PNLSIZEXAXIS\" textAlign=\"right\"/><Cell col=\"24\" text=\"bind:PNLSIZEYAXIS\" textAlign=\"right\"/><Cell col=\"25\" text=\"bind:PCSQTY\" textAlign=\"right\"/><Cell col=\"26\" text=\"bind:PNL\" textAlign=\"right\"/><Cell col=\"27\" text=\"bind:M2\" textAlign=\"right\"/><Cell col=\"28\" text=\"bind:INPUTPRICE\" textAlign=\"right\"/><Cell col=\"29\" text=\"bind:ORDERQTY\" textAlign=\"right\"/><Cell col=\"30\" text=\"bind:ORDERPNL\" textAlign=\"right\"/><Cell col=\"31\" text=\"bind:ORDERMMQTY\" textAlign=\"right\"/><Cell col=\"32\" text=\"bind:STARTAREA\" textAlign=\"left\"/><Cell col=\"33\" text=\"bind:STARTSEGMENT\" textAlign=\"left\"/><Cell col=\"34\" text=\"bind:STARTRESOURCE\" textAlign=\"left\"/><Cell col=\"35\" text=\"bind:ISAMPLE\"/><Cell col=\"36\" text=\"bind:ERP_INPUTTIME\"/><Cell col=\"37\" text=\"bind:CREATEDDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"38\" text=\"bind:CREATEDTIME\"/><Cell col=\"39\" text=\"bind:SPECAPPROVALDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"40\" text=\"bind:SPECAPPROVALTIME\"/><Cell col=\"41\" text=\"bind:LOTSTARTDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"42\" text=\"bind:LOTSTARTTIME\"/><Cell col=\"43\" text=\"bind:LOTSTARTMI\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\" tooltiptext=\"TOTALAMOUNT\" text=\"합계\"/><Cell col=\"25\" expr=\"expr:dataset.getSum(&quot;PCSQTY&quot;) \" maskeditformat=\"#,##0\" displaytype=\"mask\"/><Cell col=\"26\" expr=\"expr:dataset.getSum(&quot;PNL&quot;) \" maskeditformat=\"#,##0\" displaytype=\"mask\"/><Cell col=\"27\" expr=\"expr:dataset.getSum(&quot;M2&quot;) \" maskeditformat=\"#,##0.##\" displaytype=\"mask\"/><Cell col=\"28\" expr=\"expr:dataset.getSum(&quot;INPUTPRICE&quot;) \" maskeditformat=\"#,##0.##\" displaytype=\"mask\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/><Cell col=\"33\"/><Cell col=\"34\"/><Cell col=\"35\"/><Cell col=\"36\"/><Cell col=\"37\"/><Cell col=\"38\"/><Cell col=\"39\"/><Cell col=\"40\"/><Cell col=\"41\"/><Cell col=\"42\"/><Cell col=\"43\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_Lot","staTitle:0","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdLot",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","281","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.Tabpage1.form.cbo_PLANTID","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.Tabpage1.form.cbo_PERIODTYPE","value","ds_search","PERIODTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.Tabpage1.form.cal_STARTDT","value","ds_search","PERIOD_PERIODFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.Tabpage1.form.cal_ENDDT","value","ds_search","PERIOD_PERIODTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.Tabpage1.form.edt_PRODUCTDEFID","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.Tabpage1.form.edt_LOTID","value","ds_search","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.Tabpage1.form.edt_CUSTOMER","value","ds_search","CUSTOMERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.Tabpage1.form.edt_PROCSEGMENT","value","ds_search","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_search.Tabpage1.form.cbo_PRODUCTIONTYPE","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab_search.Tabpage1.form.cbo_LOTINPUTTYPE","value","ds_search","LOTINPUTTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_search.Tabpage1.form.cbo_EXCHANGETYPE","value","ds_search","EXCHANGETYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab_search.Tabpage1.form.cbo_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab_search.Tabpage1.form.edt_PRODUCTDEFNAME","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","tab_search.Tabpage1.form.cbo_PRODUCTDIVISION","value","ds_search","PRODUCTDIVISION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM00800M.xfdl","lib::lib_bas.xjs");
        this.registerScript("PCM00800M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 투입 실적 조회
         * 파일명 		: PCM00800M.xfdl
         * 작성자 		: 김애리
         * 작성일 		: 2021.3.8
         * AS-IS		: InputLotRecord
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.3.8	김애리   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	//this.fn_initDatePicker(); //fn_callback 로 감.

        	this.ds_search.set_rowposition(0);
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");

        	this.fn_initCombo();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	switch(this.div_work.form.tab_Main.tabindex) {
        	case 0 : this.GetInputResultByDay();
        		break;
        	case 1 : this.GetProductList();
        		break;
        	case 2 : this.GetLotList();
        		break;
        	}
        };

        this.fn_searchValidate = function ()
        {
        	return true;
        };

        /*
        * 기능 : 검색 초기화
        */
        this.fn_searchClear = function(obj,e)
        {
        	this.ds_search.copyData(this.ds_searchCopy);
        	this.fn_initDatePicker();
        };

         /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        trace('fn_callBack trId ?' + trId);
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}

        	{
        		switch(trId) {
        		case "selectEcmLookupValuesVList2ds_CSiteTypeALL" :
        		{
        			this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        			break;
        		}
        		case "selectEcmLookupValuesVList2ds_CsearchPeriodType" :
        		{
        			this.fn_initDatePicker();
        			break;
        		}
        		case "selectEcmLookupValuesVList2ds_CExchangeType2SEL" :
        		{
        			this.ds_search.setColumn(0,"EXCHANGETYPE","PLAN");
        			break;
        		}
        		case "selectEcmLookupValuesVList2ds_CProductDivision2" :
        		{
        			this.ds_search.setColumn(0,"PRODUCTDIVISION","Product");
        			this.tab_search.Tabpage1.form.cbo_PRODUCTDIVISION.set_enable(false);
        			break;
        		}
        		case "selectProductVersion" :
        		{
        			//trace(this.ds_cbo_ProdVersion.saveXML());
        			this.ds_cbo_ProdVersion.insertRow(0);
        			this.ds_cbo_ProdVersion.setColumn(0,"PRODUCTDEFVERSIONCODE","");
        			this.ds_cbo_ProdVersion.setColumn(0,"PRODUCTDEFVERSIONNAME","전체조회");
        			this.ds_search.setColumn(0,"PRODUCTDEFVERSION", "");
        			break;
        		}
        		case "selectInputResultByInputDay" :
        		{
        			trace(this.ds_InputResultByDay.saveXML());
        			break;
        		}
        		case "selectEcmLookupValuesVList2ds_CJobTypeALL" :
        		{
        			this.ds_searchCopy.copyData(this.ds_search);
        		}
        		default:
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        /*
         *	기능 : 팝업 관련
         */
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SEARCH_PRODUCT")
        	{//PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME
        		this.ds_search.setColumn(0,"PRODUCTDEFID",rtn[0]);
        		this.ds_search.setColumn(0,"PRODUCTDEFNAME",rtn[2]);
        		this.GetProductVersion();
        	} else if (sPopupId == "SEARCH_LOTID")
        	{//LOTID
        		this.ds_search.setColumn(0,"LOTID",rtn.join(","));
        	}else if (sPopupId == "SEARCH_CUSTOMER")
        	{//CUSTOMERID|CUSTOMERNAME
        		var arrCode = [];
        		var arrName = [];
        		for(var i=0; i<rtn.length; i++)
        		{
        			var colArray = rtn[i];
        			arrCode.push(colArray[0]);
        			arrName.push(colArray[1]);
        		}
        		this.ds_search.setColumn(0,"CUSTOMERID",arrCode.join(","));
        		this.ds_search.setColumn(0,"CUSTOMERNAME",arrName.join(","));
        	}else if (sPopupId == "SEARCH_PROCESS")
        	{//PROCESSSEGMENTID
        		this.ds_search.setColumn(0,"PROCSEGMENT",rtn[0]);
        	}else if (sPopupId == "SEARCH_SEGMENT")
        	{
        		var resultInfo = JSON.parse(rtn);
        		if(resultInfo.resultCd == "OK")
        		{
        			var arrCode = [];
        			var arrName = [];
        			for(var i=0;i<this.ds_Process.rowcount;i++)
        			{
        				arrCode.push(this.ds_Process.getColumn(i,"PROCESSSEGMENTID"));
        				arrName.push(this.ds_Process.getColumn(i,"PROCESSSEGMENTNAME"));
        			}
        			this.ds_search.setColumn(0,"PROCESSSEGMENTID",arrCode.join(","));
        			this.ds_search.setColumn(0,"PROCESSSEGMENTNAME",arrName.join(","));

        		}
        	}
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_initDatePicker = function ()
        {
        	this.basfn_getPeriodData("ds_periodType");
         	this.ds_search.setColumn(0,"PERIOD_PERIODFR",this.ds_periodType.getColumn(0,"THISWEEK_S"));
         	this.ds_search.setColumn(0,"PERIOD_PERIODTO",this.ds_periodType.getColumn(0,"THISWEEK_E"));
        	this.ds_search.setColumn(0,"PERIODTYPE","THISWEEK");

        };

        this.fn_initCombo = function ()
        {

        };

        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function ()
        {
        	this.tab_search.Tabpage1.form.cbo_PERIODTYPE.set_value("CUSTOM");
        }

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.ds_search.setColumn(0,"PERIOD_PERIODFR",this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.ds_search.setColumn(0,"PERIOD_PERIODTO",this.ds_periodType.getColumn(0,periodType+"_E"));
        }



        this.GetProductVersion = function ()
        {
        	this.ds_cbo_ProdVersion.clearData();

        		var sSvcID 			= "selectProductVersion";
        		var sController 	= "/pcm00800/selectProductVersion.do";
        		var sInDatasets 	= "INPUT=ds_search";
        		var sOutDatasets 	= "ds_cbo_ProdVersion=output";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         *	투입 실적 탭 조회
         */
        this.GetInputResultByDay = function ()
        {
        	this.ds_InputResultByDay.clearData();

        	if(this.fn_searchValidate() == false) return;

        	var sSvcID 			= "selectInputResultByInputDay";
        	var sController 	= "/pcm00800/selectInputResultByInputDay.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_InputResultByDay=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         *	품목별 투입실적 탭 조회
         */
        this.GetProductList = function ()
        {
        	this.ds_Product.clearData();

        	if(this.fn_searchValidate() == false) return;

        	var sSvcID 			= "selectInputResultbyProduct";
        	var sController 	= "/pcm00800/selectInputResultbyProduct.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_Product=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         *	Lot 별 투입실적 탭 조회
         */
        this.GetLotList = function ()
        {
        	this.ds_Lot.clearData();

        	if(this.fn_searchValidate() == false) return;

        	var sSvcID 			= "selectInputResultByLot";
        	var sController 	= "/pcm00800/selectInputResultByLot.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_Lot=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        /*
         *	기능 : 품목코드 검색 버튼 클릭 시
         */
        this.tab_search_Tabpage1_cboPeriodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM")this.fn_setDate(e.postvalue);
        };

        this.tab_search_Tabpage1_btnITEMID_onclick = function(obj,e)
        {

        	var popupId = "SEARCH_PRODUCT";
        	var pPRODUCTDIVISION = "Product";
        	var pPlantID = this.ds_search.getColumn(0,"PLANTID");
        	var processDefId = this.ds_search.getColumn(0,"PRODUCTDEFID");
        	var prductIDCondition = processDefId == "" ? "" : "TXTPRODUCTDEFNAME=" + processDefId + "|";

        	var oArg = {};
        	oArg.arg_type = "B";
        	oArg.arg_popupCd = "P00105";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME";
        	oArg.arg_paramCols = "PLANTID";
        	oArg.arg_paramValues = pPlantID;
        	oArg.arg_searchStr = prductIDCondition + "PRODUCTDIVISION=" + pPRODUCTDIVISION;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };

        this.tab_search_Tabpage1_btn_LOTID_onclick = function(obj,e)
        {
        	var popupId = "SEARCH_LOTID";
        	var oArg = {};
        	oArg.arg_type = "C";
        	oArg.arg_popupCd = "P00133";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "LOTID";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "";

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };

        this.tab_search_Tabpage1_btn_CUSTOMER_onclick = function(obj,e)
        {
        	var popupId = "SEARCH_CUSTOMER";
        	var oArg = {};
        	oArg.arg_type = "C";
        	oArg.arg_popupCd = "P00042";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "CUSTOMERID|CUSTOMERNAME";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "";

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };


        this.tab_search_Tabpage1_btn_PROCSEGMENT_onclick = function(obj,e)
        {
        	var popupId = "SEARCH_SEGMENT";
        	var oArg = {};

        	oArg.plantID = this.pfn_allTrim(this.ds_search.getColumn(0,"PLANTID"));
        	oArg.process = this.pfn_allTrim(this.ds_search.getColumn(0,"PROCESSSEGMENTID"));
        	oArg.ds_result = this.ds_Process;
        	this.gfn_openPopup(popupId,"pcm::PCM00800P.xfdl",oArg,"width=800,height=600");
        };

        this.div_work_tab_Main_onchanged = function(obj,e)
        {
        	switch(e.postindex) {
        	case 0:
        		this.ds_search.setColumn(0,"PRODUCTDIVISION","Product");
        		this.tab_search.Tabpage1.form.cbo_PRODUCTDIVISION.set_enable(false);
        		this.GetInputResultByDay();
        		break;
        	case 1:
        		this.ds_search.setColumn(0,"PRODUCTDIVISION","Product");
        		this.tab_search.Tabpage1.form.cbo_PRODUCTDIVISION.set_enable(false);
        		this.GetProductList();
        		break;
        	case 2:
        		this.tab_search.Tabpage1.form.cbo_PRODUCTDIVISION.set_enable(true);
        		this.GetLotList();
        		break;
        	default:
        	}
        };

        this.ds_search_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "CUSTOMERNAME" && e.newvalue == "") this.ds_search.setColumn(0,"CUSTOMERID","");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tabpage1.form.btn_PROCSEGMENT.addEventHandler("onclick",this.tab_search_Tabpage1_btn_PROCSEGMENT_onclick,this);
            this.tab_search.Tabpage1.form.btn_CUSTOMER.addEventHandler("onclick",this.tab_search_Tabpage1_btn_CUSTOMER_onclick,this);
            this.tab_search.Tabpage1.form.btn_LOTID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_LOTID_onclick,this);
            this.tab_search.Tabpage1.form.cal_STARTDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cal_ENDDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cbo_PERIODTYPE.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cboPeriodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_Tabpage1_btnITEMID_onclick,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_work.form.tab_Main.addEventHandler("onchanged",this.div_work_tab_Main_onchanged,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("PCM00800M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
