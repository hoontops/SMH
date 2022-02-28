(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM04700M");
            this.set_titletext("RC LOT 적용");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search1", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PCNNO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search2", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PCNNO\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_ProdVersion", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFVERSIONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSIONNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_WIP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"WIPPROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"RCRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_RCLot", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"WIPPROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"RCRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ApplyHistory", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PCNNO\" type=\"STRING\" size=\"256\"/><Column id=\"APPLYTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RCPRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"RCPRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGESTATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTUSERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTPNLQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_PcnInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PCNNO\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"IMPLEMENTATIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RCPRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"RCPRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"APPLYYN\" type=\"STRING\" size=\"256\"/><Column id=\"APPLYSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTCARDPRINTED\" type=\"STRING\" size=\"256\"/><Column id=\"ISSENDEMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"RC_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RC_APPLYYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search1Copy", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PCNNO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search2Copy", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PCNNO\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODSEL\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","110","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("R/C LOT 적용");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("staPCNNO","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("PCN No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PCNNO");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PCNNO","108","10",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PCNNO",null,"10","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFID","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"0","15","130","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","0","15","130",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"55","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","81","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","75","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","75","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_search);
            obj.set_text("Tabpage2");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("staPCNNO","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("PCN No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PCNNO");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_PCNNO","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("1");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_PCNNO",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFID","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","110",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"110","22","20","15",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"0","15","130","0",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","0","15","130",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"130","45","20","91",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","156","10","27",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","150","102","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_search","15","150","146","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("12");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("13");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("staSearchPeriod","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("14");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Calendar("cal_STARTDT","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("15");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Calendar("cal_ENDDT","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("16");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_PERIODTYPE","15","85","88","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("17");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("");
            obj.set_value("CUSTOM");
            obj.set_index("-1");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("18");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("staPLANTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("19");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMain","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("tpgRcLotApply",this.div_work.form.tabMain);
            obj.set_text("LOT 적용");
            this.div_work.form.tabMain.addChild(obj.name, obj);

            obj = new Div("divDetail","0","10",null,"63","0",null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.form.tabMain.tpgRcLotApply.addChild(obj.name, obj);

            obj = new Static("staPcnNo","0","0","12.57%","31",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("관리번호");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staProductDef","0","31","12.57%","31",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staRequestDate","28.24%","0","12.55%","31",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("요청일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staChangeDate","52.09%","0","12.55%","31",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("변경일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staAPPLY","68.03%","31","12.40%","31",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("적용여부");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edt_PcnNo","staPcnNo:5","5",null,"20","staRequestDate:5",null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            obj.set_text("IFC2021021800001");
            this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edt_ProductDefVersion","45.59%","36","40","20",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_text("FA1");
            this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edt_ProductDefId","34.12%","36",null,"20","edt_ProductDefVersion:5",null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_text("2025149S1CL00011");
            this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edt_ProductDefName","staProductDef:5","36",null,"20","edt_ProductDefId:3",null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.set_text("AMB638RD01 DIGITIZER(2L)-(1L)CL-1-IFV직납");
            this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.addChild(obj.name, obj);

            obj = new Static("sta_MOVE","edt_ProductDefVersion:0","36","20","20",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("▶");
            obj.set_cssclass("sta_WF_unit");
            this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edt_APPLYSEQ","84.84%","36","4.5%","20",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edt_APPLYYN","staAPPLY:8","36",null,"20","edt_APPLYSEQ:3",null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.addChild(obj.name, obj);

            obj = new Combo("cbo_RcProductDefVersion",null,"36","65","20","staAPPLY:5",null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.form);
            obj.set_taborder("12");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edt_RcProductDefId","sta_MOVE:0","36",null,"20","cbo_RcProductDefVersion:5",null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.set_text("2025149S1CL00011");
            this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edt_RequestDate","staRequestDate:5","5",null,"20","staChangeDate:5",null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.form);
            obj.set_taborder("14");
            obj.set_enable("false");
            obj.set_text("IFC2021021800001");
            this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edt_ChangeDate","staChangeDate:5","5","10.35%","20",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_text("IFC2021021800001");
            this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdWIP","0","107",null,null,"0","325",null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_WIP");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" colspan=\"10\" text=\"재공현황\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPLIST\"/><Cell col=\"12\" colspan=\"2\" text=\"재공계\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPQTY\"/><Cell col=\"14\" text=\"Locking\" cssclass=\"cell_headMaster\" tooltiptext=\"LOCKING\"/><Cell col=\"15\" text=\"보류\" cssclass=\"cell_headMaster\" tooltiptext=\"HOLD\"/><Cell row=\"1\" col=\"2\" text=\"생산구분\"/><Cell row=\"1\" col=\"3\" text=\"품목코드\"/><Cell row=\"1\" col=\"4\" text=\"Rev\"/><Cell row=\"1\" col=\"5\" text=\"Lot No.\"/><Cell row=\"1\" col=\"6\" text=\"품목명\"/><Cell row=\"1\" col=\"7\" text=\"공정수순\"/><Cell row=\"1\" col=\"8\" text=\"공정명\"/><Cell row=\"1\" col=\"9\" text=\"Site ID\"/><Cell row=\"1\" col=\"10\" text=\"작업장\"/><Cell row=\"1\" col=\"11\" text=\"상태\"/><Cell row=\"1\" col=\"12\" text=\"수량\"/><Cell row=\"1\" col=\"13\" text=\"수량(PNL)\"/><Cell row=\"1\" col=\"14\" text=\"Locking여부\"/><Cell row=\"1\" col=\"15\" text=\"보류여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:PRODUCTIONTYPE\" combocodecol=\"C,ProductionType,SEL,Y,N\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"bind:LOTID\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"7\" text=\"bind:USERSEQUENCE\"/><Cell col=\"8\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"9\" text=\"bind:PLANTID\"/><Cell col=\"10\" text=\"bind:AREANAME\"/><Cell col=\"11\" text=\"bind:WIPPROCESSSTATE\"/><Cell col=\"12\" text=\"bind:QTY\"/><Cell col=\"13\" text=\"bind:PANELQTY\"/><Cell col=\"14\" text=\"bind:ISLOCKING\"/><Cell col=\"15\" text=\"bind:ISHOLD\"/></Band></Format></Formats>");
            this.div_work.form.tabMain.tpgRcLotApply.addChild(obj.name, obj);

            obj = new Static("title0","-1","73","131","34",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form);
            obj.set_taborder("2");
            obj.set_text("R/C LOT 대상 목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("RCTARGETLIST");
            this.div_work.form.tabMain.tpgRcLotApply.addChild(obj.name, obj);

            obj = new Button("btn_suttleUp","38.85%","grdWIP:15","24","24",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_shuttleT");
            this.div_work.form.tabMain.tpgRcLotApply.addChild(obj.name, obj);

            obj = new Button("btn_suttleDown",null,"grdWIP:15","24","24","btn_suttleUp:10",null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_shuttleB");
            this.div_work.form.tabMain.tpgRcLotApply.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_WIP","title0:0","73","140","34",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form);
            obj.set_taborder("5");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabMain.tpgRcLotApply.addChild(obj.name, obj);

            obj = new Div("div_RCApply",null,"btn_suttleUp:15","258",null,"0","10",null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form);
            obj.set_taborder("6");
            obj.set_text("div_00");
            obj.set_cssclass("div_WF_detail");
            this.div_work.form.tabMain.tpgRcLotApply.addChild(obj.name, obj);

            obj = new Static("staRcProduct","0","10","44.14%","20",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.form);
            obj.set_taborder("5");
            obj.set_text("R/C 품목코드");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("RCPRODUCTDEFID");
            this.div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.addChild(obj.name, obj);

            obj = new Static("staRcRev","0","35","44.14%","20",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.form);
            obj.set_taborder("6");
            obj.set_text("R/C 품목 Rev.");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.addChild(obj.name, obj);

            obj = new Static("staPcnNo2","0","60","44.14%","20",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.form);
            obj.set_taborder("7");
            obj.set_text("PCN No.");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("PCNNO");
            this.div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.addChild(obj.name, obj);

            obj = new Static("staPrintLotCard","0","85","44.14%","20",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.form);
            obj.set_taborder("8");
            obj.set_text("Lot Card 출력");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("LOTCARDPRINT");
            this.div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.addChild(obj.name, obj);

            obj = new Static("staSendEmail","0","110","44.14%","20",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.form);
            obj.set_taborder("9");
            obj.set_text("R/C Mail 발송");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("SENDRCMAIL");
            this.div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.addChild(obj.name, obj);

            obj = new Edit("edt_RcProduct","staRcProduct:10","10",null,"20","5",null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            obj.set_text("2025149S1CL00011");
            this.div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.addChild(obj.name, obj);

            obj = new Edit("edt_RcRev","122","35","70","20",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.set_text("FA2");
            this.div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.addChild(obj.name, obj);

            obj = new Edit("edt_PcnNo2","122","60",null,"20","5",null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_text("IFC2021021800001");
            this.div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.addChild(obj.name, obj);

            obj = new CheckBox("chk_PrintLotCard","122","85","22","21",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.form);
            obj.set_taborder("3");
            obj.set_value("true");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.addChild(obj.name, obj);

            obj = new CheckBox("chk_SendEmail","122","110","22","21",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.form);
            obj.set_taborder("4");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.addChild(obj.name, obj);

            obj = new Grid("grdRCLot","0","btn_suttleDown:15",null,null,"div_RCApply:10","10",null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form);
            obj.set_taborder("7");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_RCLot");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"R/C\"/><Cell col=\"3\" text=\"생산구분\"/><Cell col=\"4\" text=\"품목코드\"/><Cell col=\"5\" text=\"Rev\"/><Cell col=\"6\" text=\"Lot No.\"/><Cell col=\"7\" text=\"품목명\"/><Cell col=\"8\" text=\"공정수순\"/><Cell col=\"9\" text=\"공정명\"/><Cell col=\"10\" text=\"Site ID\"/><Cell col=\"11\" text=\"작업장\"/><Cell col=\"12\" text=\"상태\"/><Cell col=\"13\" text=\"수량\"/><Cell col=\"14\" text=\"수량(PNL)\"/><Cell col=\"15\" text=\"Locking 여부\"/><Cell col=\"16\" text=\"보류 여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:RCRESULT\"/><Cell col=\"3\" text=\"bind:PRODUCTIONTYPE\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"6\" text=\"bind:LOTID\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"8\" text=\"bind:USERSEQUENCE\"/><Cell col=\"9\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"10\" text=\"bind:PLANTID\"/><Cell col=\"11\" text=\"bind:AREANAME\"/><Cell col=\"12\" text=\"bind:WIPPROCESSSTATE\"/><Cell col=\"13\" text=\"bind:QTY\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"14\" text=\"bind:PANELQTY\" maskeditformat=\"#,###\" displaytype=\"mask\"/><Cell col=\"15\" text=\"bind:ISLOCKING\"/><Cell col=\"16\" text=\"bind:ISHOLD\"/></Band></Format></Formats>");
            this.div_work.form.tabMain.tpgRcLotApply.addChild(obj.name, obj);

            obj = new Static("title1","0",null,"98","34",null,"grdRCLot:1",null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form);
            obj.set_taborder("8");
            obj.set_text("R/C 적용 LOT");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("RCAPPLYLIST");
            this.div_work.form.tabMain.tpgRcLotApply.addChild(obj.name, obj);

            obj = new Static("title2","grdRCLot:10",null,"67","34",null,"grdRCLot:1",null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form);
            obj.set_taborder("9");
            obj.set_text("Rev 적용");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("REVAPPLY");
            this.div_work.form.tabMain.tpgRcLotApply.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdWIP",null,"79","29","24","0",null,null,null,null,null,this.div_work.form.tabMain.tpgRcLotApply.form);
            obj.set_initvalueid("x");
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabMain.tpgRcLotApply.addChild(obj.name, obj);

            obj = new Tabpage("tpgApplyHistor",this.div_work.form.tabMain);
            obj.set_text("적용이력");
            this.div_work.form.tabMain.addChild(obj.name, obj);

            obj = new Static("subtitle","0","0","66","34",null,null,null,null,null,null,this.div_work.form.tabMain.tpgApplyHistor.form);
            obj.set_taborder("0");
            obj.set_text("적용이력");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("APPLYHISTORY");
            this.div_work.form.tabMain.tpgApplyHistor.addChild(obj.name, obj);

            obj = new Grid("grdApplyHistory","0","34",null,null,"0","10",null,null,null,null,this.div_work.form.tabMain.tpgApplyHistor.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_ApplyHistory");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"PCN No.\"/><Cell col=\"2\" rowspan=\"2\" text=\"적용일시\"/><Cell col=\"3\" rowspan=\"2\" text=\"Lot No.\"/><Cell col=\"4\" colspan=\"9\" text=\"변경 LOT\" cssclass=\"cell_headMaster\" tooltiptext=\"CHANGEDLOT\"/><Cell col=\"13\" colspan=\"6\" text=\"현재공\" cssclass=\"cell_headMaster\" tooltiptext=\"CURRENTWIP\"/><Cell row=\"1\" col=\"4\" text=\"품목코드\"/><Cell row=\"1\" col=\"5\" text=\"Rev\"/><Cell row=\"1\" col=\"6\" text=\"R/C 품목코드\"/><Cell row=\"1\" col=\"7\" text=\"R/C품목 Rev.\"/><Cell row=\"1\" col=\"8\" text=\"공정수순\"/><Cell row=\"1\" col=\"9\" text=\"공정명\"/><Cell row=\"1\" col=\"10\" text=\"Site ID\"/><Cell row=\"1\" col=\"11\" text=\"작업장\"/><Cell row=\"1\" col=\"12\" text=\"변경상태\"/><Cell row=\"1\" col=\"13\" text=\"공정수순\"/><Cell row=\"1\" col=\"14\" text=\"공정ID\"/><Cell row=\"1\" col=\"15\" text=\"공정 Rev.\"/><Cell row=\"1\" col=\"16\" text=\"공정명\"/><Cell row=\"1\" col=\"17\" text=\"PCS\"/><Cell row=\"1\" col=\"18\" text=\"PNL\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PCNNO\"/><Cell col=\"2\" text=\"bind:APPLYTIME\"/><Cell col=\"3\" text=\"bind:LOTID\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"6\" text=\"bind:RCPRODUCTDEFID\"/><Cell col=\"7\" text=\"bind:RCPRODUCTDEFVERSION\"/><Cell col=\"8\" text=\"bind:USERSEQUENCE\"/><Cell col=\"9\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"10\" text=\"bind:PLANTID\"/><Cell col=\"11\" text=\"bind:AREANAME\"/><Cell col=\"12\" text=\"bind:CHANGESTATENAME\"/><Cell col=\"13\" text=\"bind:LOTUSERSEQUENCE\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"14\" text=\"bind:LOTPROCESSSEGMENTID\" tooltiptext=\"PROCESSSEGMENTID\"/><Cell col=\"15\" text=\"bind:LOTPROCESSSEGMENTVERSION\" tooltiptext=\"PROCESSSEGMENTVERSION\"/><Cell col=\"16\" text=\"bind:LOTPROCESSSEGMENTNAME\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"17\" text=\"bind:LOTPCSQTY\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"18\" text=\"bind:LOTPNLQTY\" displaytype=\"mask\" maskeditformat=\"#,##0\"/></Band></Format></Formats>");
            this.div_work.form.tabMain.tpgApplyHistor.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdApplyHistory",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabMain.tpgApplyHistor.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabMain.tpgApplyHistor.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","281","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건                                          ");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,747,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("itemS1_PCNNO","tab_search.Tabpage1.form.edt_PCNNO","value","ds_search1","PCNNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemS1_PRODUCTDEFID","tab_search.Tabpage1.form.edt_PRODUCTDEFID","value","ds_search1","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemS2_PERIODTYPE","tab_search.Tabpage2.form.cbo_PERIODTYPE","value","ds_search2","PERIODTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemS2_PERIOD_PERIODFR","tab_search.Tabpage2.form.cal_STARTDT","value","ds_search2","PERIOD_PERIODFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemS2_PERIOD_PERIODTO","tab_search.Tabpage2.form.cal_ENDDT","value","ds_search2","PERIOD_PERIODTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemS2_PLANTID","tab_search.Tabpage2.form.cbo_PLANTID","value","ds_search2","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemD_PCNNO","div_work.form.tabMain.tpgRcLotApply.form.divDetail.form.edt_PcnNo","value","ds_PcnInfo","PCNNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemD_REQUESTDATE","div_work.form.tabMain.tpgRcLotApply.form.divDetail.form.edt_RequestDate","value","ds_PcnInfo","REQUESTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemD_IMPLEMENTATIONDATE","div_work.form.tabMain.tpgRcLotApply.form.divDetail.form.edt_ChangeDate","value","ds_PcnInfo","IMPLEMENTATIONDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemD_PRODUCTDEFNAME","div_work.form.tabMain.tpgRcLotApply.form.divDetail.form.edt_ProductDefName","value","ds_PcnInfo","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemD_PRODUCTDEFID","div_work.form.tabMain.tpgRcLotApply.form.divDetail.form.edt_ProductDefId","value","ds_PcnInfo","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemD_PRODUCTDEFVERSION","div_work.form.tabMain.tpgRcLotApply.form.divDetail.form.edt_ProductDefVersion","value","ds_PcnInfo","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemD_RCPRODUCTDEFID","div_work.form.tabMain.tpgRcLotApply.form.divDetail.form.edt_RcProductDefId","value","ds_PcnInfo","RCPRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemD_RCPRODUCTDEFVERSION","div_work.form.tabMain.tpgRcLotApply.form.divDetail.form.cbo_RcProductDefVersion","value","ds_PcnInfo","RCPRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.form.edt_PcnNo2","value","ds_PcnInfo","PCNNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.form.edt_RcProduct","value","ds_PcnInfo","RCPRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.form.edt_RcRev","value","ds_PcnInfo","RCPRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemD_ISLOTCARDPRINTED","div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.form.chk_PrintLotCard","value","ds_PcnInfo","ISLOTCARDPRINTED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemD_ISSENDEMAIL","div_work.form.tabMain.tpgRcLotApply.form.div_RCApply.form.chk_SendEmail","value","ds_PcnInfo","ISSENDEMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemD_RC_CNT","div_work.form.tabMain.tpgRcLotApply.form.divDetail.form.edt_APPLYSEQ","value","ds_PcnInfo","RC_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemD_RC_APPLYYN","div_work.form.tabMain.tpgRcLotApply.form.divDetail.form.edt_APPLYYN","value","ds_PcnInfo","RC_APPLYYN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemS2_PCNNO","tab_search.Tabpage2.form.edt_PCNNO","value","ds_search2","PCNNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemS2_PRODUCTDEFID","tab_search.Tabpage2.form.edt_PRODUCTDEFID","value","ds_search2","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM04700M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM04700M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM04700M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: R/C LOT 적용
         * 파일명 		: PCM04700M.xfdl
         * 작성자 		: 김애리
         * 작성일 		: 2021.5.17
         * AS-IS		: RCLotApply
         * 설  명		: 품목 Routing 에  rev 을 변경
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.5.17	김애리   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.InitTabPage1 = false;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.ds_search1.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search1.setColumn(0, "PLANTID",this.gf_getSiteType());
        	this.ds_search1.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.ds_search2.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search2.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	switch(this.div_work.form.tabMain.tabindex) {
        	case 0 :
        		{
        			if(this.nfn_isNull(this.ds_search1.getColumn(0,"PCNNO"))) this.GetProductDefinitionList();
        			else this.GetPcnInfoForRC();
        			break;
        		}
        	case 1 : this.GetRcApplyHistory();
        		break;
        	}
        };

        this.fn_searchValidate = function ()
        {

        };

        /*
        * 기능 : 검색 초기화
        */
        this.fn_searchClear = function(obj,e)
        {
        	this.ds_search1.copyData(this.ds_search1Copy);
        	this.ds_search2.copyData(this.ds_search2Copy);
        };


        this.fn_save = function (obj, e)
        {
        	if(this.fn_saveValidate() == false) return;

        	var sSvcID 			= "saveRCLot";
        	var sController 	= "/pcm04700/saveRCLot.do";
        	var sInDatasets 	= "ds_PcnInfo=ds_PcnInfo ds_RCLot=ds_RCLot";
        	var sOutDatasets 	= "ds_result=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         *	저장 Transaction 호출 전에 데이터 설정 및 가공 처리 사항에 대해 기술
         */
        this.fn_saveValidate = function()
        {
        	if(this.ds_RCLot.rowcount == 0){
        		this.gfn_Message("NoSaveData", null, "info", "ok");
        		return false;
        	}
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
        		return;
        	}

        	{
        		switch(trId) {
        		case "selectEcmLookupValuesVList2ds_CSiteTypeALL" :
        		{
        			this.ds_search2.setColumn(0,"PLANTID",this.gf_getSiteType());
        			break;
        		}
        		case "selectEcmLookupValuesVList2ds_CsearchPeriodType" :
        		{
        			this.fn_initDatePicker();
        			break;
        		}
        		case "selectPcnInfoForRC" :
        		{
        			this.GetRcTargetLotList();
        			break;
        		}
        		case "selectProductVersion" :
        		{
        			if(this.nfn_isNull(this.ds_search1.getColumn(0,"PCNNO"))){
        				if(this.ds_PcnInfo.getColumn(0,"PRODUCTDEFVERSION").substring(0,2) == "FA") //일단 rework 고려 안함.
        				{
        					var verNo = nexacro.toNumber(this.ds_PcnInfo.getColumn(0,"PRODUCTDEFVERSION").replace("FA",""));
        					for(var i=this.ds_cbo_ProdVersion.rowcount-1; i>=0; i--){
        						var codeVerNo = nexacro.toNumber(this.ds_cbo_ProdVersion.getColumn(i,"PRODUCTDEFVERSIONCODE").replace("FA",""));
        						if(codeVerNo >= verNo) this.ds_cbo_ProdVersion.deleteRow(i);
        					}
        					this.ds_PcnInfo.setColumn(0,"RCPRODUCTDEFVERSION",this.ds_cbo_ProdVersion.getColumn(0,"PRODUCTDEFVERSIONCODE"));
        					this.GetRcTargetLotList();
        				}
        			} else {
        				this.ds_cbo_ProdVersion.clearData();
        				this.ds_cbo_ProdVersion.addRow();
        				this.ds_cbo_ProdVersion.setColumn(0,"PRODUCTDEFVERSIONCODE",this.ds_PcnInfo.getColumn(0,"RCPRODUCTDEFVERSION"));
        				this.ds_cbo_ProdVersion.setColumn(0,"PRODUCTDEFVERSIONNAME",this.ds_PcnInfo.getColumn(0,"RCPRODUCTDEFVERSION"));
        					//var fRow = this.ds_cbo_ProdVersion.findRow("PRODUCTDEFVERSIONCODE",this.ds_PcnInfo.getColumn(0,"PRODUCTDEFVERSION"));
        					//this.ds_cbo_ProdVersion.deleteRow(fRow);
        			}
        			break;
        		}
        		case "selectRcTargetLotList" :
        		{
        			trace(this.ds_WIP.saveXML());
        			break;
        		}
        		case "saveRCLot" :
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			trace(this.ds_result.saveXML());

        			if(this.ds_PcnInfo.getColumn(0,"ISLOTCARDPRINTED") == 1)
        			{
        				var fRow = this.ds_result.findRow("RCRESULTID","PASS");
        				if(fRow > -1){
        					var arrLotIDS = [];
        					for(var i=0;i<this.ds_result.rowcount;i++){
        						if(this.ds_result.getColumn(i,"RCRESULTID") == "PASS") arrLotIDS.push(this.ds_result.getColumn(i,"LOTID"));
        					}
        					this.mfn_PrintLotCard(arrLotIDS.join(","));
        				}
        			}
        			this.ds_RCLot.clearData();
        			this.ds_PcnInfo.setColumn(0,"ISSENDEMAIL","0");
        			break;
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
        		if(this.tab_search.tabindex == 0){
        			this.ds_search1.setColumn(0,"PRODUCTDEFID",rtn[0]);
         			this.ds_search1.setColumn(0,"PRODUCTDEFVERSION",rtn[1]);
        		} else {
        			this.ds_search2.setColumn(0,"PRODUCTDEFID",rtn[0]);
         			this.ds_search2.setColumn(0,"PRODUCTDEFVERSION",rtn[1]);
        		}
        	} else if(sPopupId == "SEARCH_PCNNO")
        	{//PCNNO|PRODUCTDEFID|PRODUCTDEFVERSION|RCPRODUCTDEFID|RCPRODUCTDEFVERSION
        		if(this.tab_search.tabindex == 0){
        			this.ds_search1.setColumn(0,"PCNNO",rtn[0]);
        		} else {
        			this.ds_search2.setColumn(0,"PCNNO",rtn[0]);
        		}
        	}
        };


        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_initCombo = function ()
        {

        };

        this.mfn_PrintLotCard = function (LotID)
        {
        	var languageType 	= this.gf_getLanguageType();
        	var title 			= this.nfn_nvl(this.nfn_getDictionarynameUpper("LOTCARDPRINT"),"LOT Card 출력");


        	var oArg = {
        		sRptPath   : "/pcm/",
        		sRptName   : "PCM00600R.mrd",
        		strField   :   "[" + LotID
        					+ "][" + languageType
        					+ "][" + this.nfn_nvl(this.nfn_getDictionarynameUpper("NORMAL"),"정상")
        					+ "][]",
        		bModalless : false
        	};

        	var sOption = "titletext="+title+",modeless=false";
        	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        };

        this.GetPcnInfoForRC = function()
        {
        	this.ds_WIP.clearData();
        	this.ds_RCLot.clearData();
        	this.ds_PcnInfo.clearData();

        	var sSvcID 			= "selectPcnInfoForRC";
        	var sController 	= "/pcm04700/selectPcnInfoForRC.do";
        	var sInDatasets 	= "INPUT=ds_search1";
        	var sOutDatasets 	= "ds_PcnInfo=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.form.cbo_RcProductDefVersion.set_enable(false);
        };

        this.GetProductDefinitionList = function()
        {
        	this.ds_WIP.clearData();
        	this.ds_RCLot.clearData();
        	this.ds_PcnInfo.clearData();

        	var sSvcID 			= "selectProductDefinitionList";
        	var sController 	= "/pcm04700/selectProductDefinitionList.do";
        	var sInDatasets 	= "INPUT=ds_search1";
        	var sOutDatasets 	= "ds_PcnInfo=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.form.cbo_RcProductDefVersion.set_enable(true);
        };


        this.GetRcTargetLotList = function ()
        {
        	this.ds_WIP.clearData();
        	this.ds_RCLot.clearData();

        	var sSvcID 			= "selectRcTargetLotList";
        	var sController 	= "/pcm04700/selectRcTargetLotList.do";
        	var sInDatasets 	= "INPUT=ds_PcnInfo";
        	var sOutDatasets 	= "ds_WIP=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        this.GetRcApplyHistory = function()
        {
        	this.ds_ApplyHistory.clearData();

        	var sSvcID 			= "selectRcApplyHistory";
        	var sController 	= "/pcm04700/selectRcApplyHistory.do";
        	var sInDatasets 	= "INPUT=ds_search2";
        	var sOutDatasets 	= "ds_ApplyHistory=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_initDatePicker = function ()
        {
        	this.basfn_getPeriodData("ds_periodType");
         	this.ds_search2.setColumn(0,"PERIOD_PERIODFR",this.ds_periodType.getColumn(0,"THISWEEK_S"));
         	this.ds_search2.setColumn(0,"PERIOD_PERIODTO",this.ds_periodType.getColumn(0,"THISWEEK_E"));
        	this.ds_search2.setColumn(0,"PERIODTYPE","THISWEEK");


        };


        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function ()
        {
        	this.tab_search.Tabpage2.form.cbo_PERIODTYPE.set_value("CUSTOM");
        };


        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.ds_search2.setColumn(0,"PERIOD_PERIODFR",this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.ds_search2.setColumn(0,"PERIOD_PERIODTO",this.ds_periodType.getColumn(0,periodType+"_E"));
        };



        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.div_work_tabMain_onchanged = function(obj,e)
        {
        	this.tab_search.set_tabindex(e.postindex);
        	if(this.InitTabPage1 == false)
        	{//tab 에 둔거는 자꾸 init 할 때 설정이 바뀐다. 강제 설정
        		this.InitTabPage1 = true;
        		this.ds_search2.setColumn(0,"PERIODTYPE","THISWEEK");
        	}
        };


        this.tab_search_Tabpage1_cboPeriodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM")this.fn_setDate(e.postvalue);
        };

        this.ds_PcnInfo_oncolumnchanged = function(obj,e)
        {

        };

        this.ds_PcnInfo_onload = function(obj,e)
        {
        	if(e.reason == 0)//Dataset의 Load가 완료되었을 때
        	{


        		if(this.ds_PcnInfo.rowcount == 0) this.ds_cbo_ProdVersion.clearData();
        		else {
        			if(this.nfn_isNull(this.ds_PcnInfo.getColumn(0,"PCNNO")) && this.ds_PcnInfo.getColumn(0,"PRODUCTDEFVERSION")=="FA1") {
        				//품목 코드로 조회하는 것 중에 FA1보다 낮은 버전으로 RC 할일은 없음.
        				this.ds_cbo_ProdVersion.clearData();
        				this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.form.cbo_RcProductDefVersion.set_enable(false);

        			} else {
        				this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.form.cbo_RcProductDefVersion.set_enable(true);
        				this.ds_temp.clear();
        				this.pfn_DatasetAddColumn(this.ds_temp, "PRODUCTDEFID,ENTERPRISEID");

        				this.ds_temp.setColumn(0, "PRODUCTDEFID", this.ds_PcnInfo.getColumn(0, "PRODUCTDEFID"));
        				this.ds_temp.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());

        				this.pfn_CostomQuerySync(this.ds_temp , this.ds_cbo_ProdVersion, "selectProductVersion");
        			}
        		}
        	}
        };


        this.tab_search_Tabpage1_btn_PCNNO_onclick = function(obj,e)
        {
        	this.ds_search1.setColumn(0,"PCNNO",this.tab_search.Tabpage1.form.edt_PCNNO.value);
        	var pcnNo = this.ds_search1.getColumn(0,"PCNNO");
        	var pcnNoCondition = pcnNo == "" ? "" : "CHANGEPOINTNO=" + pcnNo + "|";

        	var popupId = "SEARCH_PCNNO";
        	var pPRODUCTDIVISION = "";
        	var oArg = {};
        	oArg.arg_type = "D";
        	oArg.arg_popupCd = "P00277";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "PCNNO|PRODUCTDEFID|PRODUCTDEFVERSION|RCPRODUCTDEFID|RCPRODUCTDEFVERSION";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = pcnNoCondition + "PRODUCTDIVISION=Product";

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };

        this.tab_search_Tabpage2_btn_PCNNO_onclick = function(obj,e)
        {
        	this.ds_search2.setColumn(0,"PCNNO",this.tab_search.Tabpage2.form.edt_PCNNO.value);
        	var pcnNo = this.ds_search2.getColumn(0,"PCNNO");
        	var pcnNoCondition = pcnNo == "" ? "" : "CHANGEPOINTNO=" + pcnNo + "|";

        	var popupId = "SEARCH_PCNNO";
        	var pPRODUCTDIVISION = "";
        	var oArg = {};
        	oArg.arg_type = "D";
        	oArg.arg_popupCd = "P00277";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "PCNNO";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = pcnNoCondition + "PRODUCTDIVISION=Product";

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };

        this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	this.ds_search1.setColumn(0,"PRODUCTDEFID",this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value);
        	this.openProduct_P00105("BA", this.ds_search1,"Product");
        };



        this.tab_search_Tabpage2_btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	this.ds_search2.setColumn(0,"PRODUCTDEFID",this.tab_search.Tabpage2.form.edt_PRODUCTDEFID.value);
        	this.openProduct_P00105("BA", this.ds_search2,"Product");
        };

        this.div_work_tabMain_tpgRcLotApply_divDetail_cbo_RcProductDefVersion_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "" || this.ds_PcnInfo.rowcount == 0) return;
        	this.GetRcTargetLotList();
        };

        this.div_work_tabMain_tpgRcLotApply_btn_suttleDown_onclick = function(obj,e)
        {
        	var cnt = this.ds_WIP.getCaseCount("CHK == '1'");

        	if(cnt == 0)
        	{
        		this.gfn_Message("NoSelectedLot", "", "warning", "ok"); //선택된 LOT이 없습니다.
        		return;
        	}
        	for(var i=this.ds_WIP.rowcount-1 ; i>= 0 ; i--)
        	{
        		if(this.ds_WIP.getColumn(i,"CHK")==1)
        		{
        			var addRow =  this.ds_RCLot.addRow();
        			var bSucc = this.ds_RCLot.copyRow(addRow,this.ds_WIP,i);
        			this.ds_RCLot.setColumn(addRow,"CHK","0");
        			this.ds_WIP.deleteRow(i);
        		}
        	}
        };

        this.div_work_tabMain_tpgRcLotApply_btn_suttleUp_onclick = function(obj,e)
        {
        	var cnt = this.ds_RCLot.getCaseCount("CHK == '1'");

        	if(cnt == 0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok"); //선택된 항목이 없습니다.
        		return;
        	}

        	for(var i=this.ds_RCLot.rowcount-1 ; i>= 0 ; i--)
        	{
        		if(this.ds_RCLot.getColumn(i,"CHK")==1)
        		{
        			var addRow =  this.ds_WIP.addRow();
        			var bSucc = this.ds_WIP.copyRow(addRow,this.ds_RCLot,i);
        			this.ds_WIP.setColumn(addRow,"CHK","0");
        			this.ds_RCLot.deleteRow(i);
        		}
        	}

        };

        this.div_work_tabMain_tpgRcLotApply_grdWIP_oncelldblclick = function(obj,e)
        {
        	this.ds_WIP.setColumn(e.row, "CHK", this.ds_WIP.getColumn(e.row, "CHK") != "1" ? "1" : "0" );
        };

        this.div_work_tabMain_tpgRcLotApply_grdRCLot_oncelldblclick = function(obj,e)
        {
        	this.ds_RCLot.setColumn(e.row, "CHK", this.ds_RCLot.getColumn(e.row, "CHK") != "1" ? "1" : "0" );
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tabpage1.form.btn_PCNNO.addEventHandler("onclick",this.tab_search_Tabpage1_btn_PCNNO_onclick,this);
            this.tab_search.Tabpage1.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage2.form.btn_PCNNO.addEventHandler("onclick",this.tab_search_Tabpage2_btn_PCNNO_onclick,this);
            this.tab_search.Tabpage2.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_Tabpage2_btn_PRODUCTDEFID_onclick,this);
            this.tab_search.Tabpage2.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage2.form.cal_STARTDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage2.form.cal_ENDDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage2.form.cbo_PERIODTYPE.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cboPeriodType_onitemchanged,this);
            this.div_work.form.tabMain.addEventHandler("onchanged",this.div_work_tabMain_onchanged,this);
            this.div_work.form.tabMain.tpgRcLotApply.form.divDetail.form.cbo_RcProductDefVersion.addEventHandler("onitemchanged",this.div_work_tabMain_tpgRcLotApply_divDetail_cbo_RcProductDefVersion_onitemchanged,this);
            this.div_work.form.tabMain.tpgRcLotApply.form.grdWIP.addEventHandler("oncelldblclick",this.div_work_tabMain_tpgRcLotApply_grdWIP_oncelldblclick,this);
            this.div_work.form.tabMain.tpgRcLotApply.form.btn_suttleUp.addEventHandler("onclick",this.div_work_tabMain_tpgRcLotApply_btn_suttleUp_onclick,this);
            this.div_work.form.tabMain.tpgRcLotApply.form.btn_suttleDown.addEventHandler("onclick",this.div_work_tabMain_tpgRcLotApply_btn_suttleDown_onclick,this);
            this.div_work.form.tabMain.tpgRcLotApply.form.grdRCLot.addEventHandler("oncelldblclick",this.div_work_tabMain_tpgRcLotApply_grdRCLot_oncelldblclick,this);
            this.ds_PcnInfo.addEventHandler("oncolumnchanged",this.ds_PcnInfo_oncolumnchanged,this);
            this.ds_PcnInfo.addEventHandler("onload",this.ds_PcnInfo_onload,this);
        };
        this.loadIncludeScript("PCM04700M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
