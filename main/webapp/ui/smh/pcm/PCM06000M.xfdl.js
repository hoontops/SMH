(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM06000M");
            this.set_titletext("공정 Roll Loss 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,757);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Product", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTCNT\" type=\"STRING\" size=\"256\"/><Column id=\"EACH_LOSSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"EACH_LOSSM\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEYAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTROLL\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPNL\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTM\" type=\"STRING\" size=\"256\"/><Column id=\"LOSSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"LOSSM\" type=\"STRING\" size=\"256\"/><Column id=\"RECOLOSSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"RECOLOSSM\" type=\"STRING\" size=\"256\"/><Column id=\"RECOLOSSRATE\" type=\"STRING\" size=\"256\"/><Column id=\"ROLLDEFECTPNL\" type=\"STRING\" size=\"256\"/><Column id=\"ROLLDEFECTPCS\" type=\"STRING\" size=\"256\"/><Column id=\"ROLLOSSDEFECTM\" type=\"STRING\" size=\"256\"/><Column id=\"ROLLLOSSDEFECTPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"ROLLLOSSDEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"DIFLOSS\" type=\"STRING\" size=\"256\"/><Column id=\"ETCDEFECTPCS\" type=\"STRING\" size=\"256\"/><Column id=\"ETCDEFECTPNL\" type=\"STRING\" size=\"256\"/><Column id=\"ETCM\" type=\"STRING\" size=\"256\"/><Column id=\"ETCLOSSPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"ETCLOSSRATE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALDEFECTPCS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALDEFECTPNL\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALDEFECTM\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALDEFECTPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALLOSSRATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Segment", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEYAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTROLL\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPNL\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTM\" type=\"STRING\" size=\"256\"/><Column id=\"LOSSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"LOSSM\" type=\"STRING\" size=\"256\"/><Column id=\"RECOLOSSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"RECOLOSSM\" type=\"STRING\" size=\"256\"/><Column id=\"RECOLOSSRATE\" type=\"STRING\" size=\"256\"/><Column id=\"ROLLDEFECTPCS\" type=\"STRING\" size=\"256\"/><Column id=\"ROLLDEFECTPNL\" type=\"STRING\" size=\"256\"/><Column id=\"ROLLOSSDEFECTM\" type=\"STRING\" size=\"256\"/><Column id=\"ROLLLOSSDEFECTPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"ROLLLOSSDEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"DIFLOSS\" type=\"STRING\" size=\"256\"/><Column id=\"ETCDEFECTPCS\" type=\"STRING\" size=\"256\"/><Column id=\"ETCDEFECTPNL\" type=\"STRING\" size=\"256\"/><Column id=\"ETCM\" type=\"STRING\" size=\"256\"/><Column id=\"ETCLOSSPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"ETCLOSSRATE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALDEFECTPCS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALDEFECTPNL\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALDEFECTM\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALDEFECTPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALLOSSRATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Lot", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\" prop=\"TEXT\" sumtext=\"LOT  계 :\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEYAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPNL\" type=\"STRING\" size=\"256\" prop=\"TEXT\" sumtext=\"\"/><Column id=\"INPUTM\" type=\"STRING\" size=\"256\" prop=\"TEXT\" sumtext=\"\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\" prop=\"TEXT\" sumtext=\"\"/><Column id=\"LOSSPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"LOSSM\" type=\"FLOAT\" size=\"256\"/><Column id=\"ROLLDEFECTPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"ROLLDEFECTPCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"ROLLOSSDEFECTM\" type=\"FLOAT\" size=\"256\"/><Column id=\"ROLLLOSSPRICE\" type=\"FLOAT\" size=\"256\"/><Column id=\"ROLLLOSSDEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"DIFLOSS\" type=\"FLOAT\" size=\"256\"/><Column id=\"ETCDEFECTPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"ETCDEFECTPCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"ETCDEFECTM\" type=\"FLOAT\" size=\"256\"/><Column id=\"ETCDEFECTPRICE\" type=\"FLOAT\" size=\"256\"/><Column id=\"ETCDEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTQTYPCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTQTYM\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTQTYPRICE\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTQTYRATE\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
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
            
            // UI Components Initialize
            obj = new Tab("tab_search","2","64","295",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("staPLANTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFID","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","85",null,"20","42",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"85","22","20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFVERSION","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFNAME","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"0","15","290","5",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","0","15","290",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"250","45","20","96",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","276","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","270","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","270","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_hotkey("F2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTIONTYPE","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTIONTYPE","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","96",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","96",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_STARTDT","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staSearchPeriod","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("C6A85700415446D89213292978260263");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PERIODTYPE","15","60","88","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_ENDDT","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_INPUTSTATE","108","235","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,InputState,,Y,Y");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staINPUTSTATE","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("RollCut완료기준");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ROLLCUTCOMPLBASE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDIVISION","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDIVISION","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDIVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staLOTID","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","108","160",null,"20","42",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_autoselect("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_LOTID",null,"160","22","20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","9","56","206","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","31","24","2",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","34",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("staGuide","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","40","16","145","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMain","0","0",null,null,"20","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("tpgRollLossByProduct",this.div_work.form.tabMain);
            obj.set_text("품목");
            this.div_work.form.tabMain.addChild(obj.name, obj);

            obj = new Static("subtitle1","0","0","313","34",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRollLossByProduct.form);
            obj.set_taborder("0");
            obj.set_text("품목별 ROLL LOSS 현황 (※ Roll Cut 완료 기준)");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("ROLLLOSSPERPRODUCT2");
            this.div_work.form.tabMain.tpgRollLossByProduct.addChild(obj.name, obj);

            obj = new Grid("grdRollLossByProduct","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabMain.tpgRollLossByProduct.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_Product");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"품목코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"Rev\"/><Cell col=\"3\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"4\" colspan=\"3\" text=\"투입량\" cssclass=\"cell_headMaster\" tooltiptext=\"ASSIGNEDUNITS\"/><Cell col=\"7\" colspan=\"2\" text=\"기준 LOSS/ROLL\" cssclass=\"cell_headMaster\" tooltiptext=\"BASICLOSSROLL\"/><Cell col=\"9\" colspan=\"3\" text=\"인정 LOSS\" cssclass=\"cell_headMaster\" tooltiptext=\"ADMITLOSS\"/><Cell col=\"12\" colspan=\"6\" text=\"ROLL LOSS(불량코드)\" cssclass=\"cell_headMaster\" tooltiptext=\"ROLLLOSSDEFECTCODE\"/><Cell col=\"18\" colspan=\"5\" text=\"기타 불량\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECTETC\"/><Cell col=\"23\" colspan=\"5\" text=\"ROLL 불량\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECTROLL\"/><Cell row=\"1\" col=\"4\" text=\"ROLL\" tooltiptext=\"ROLL\"/><Cell row=\"1\" col=\"5\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"6\" text=\"M\" tooltiptext=\"M\"/><Cell row=\"1\" col=\"7\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"8\" text=\"M\" tooltiptext=\"M\"/><Cell row=\"1\" col=\"9\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"10\" text=\"M\" tooltiptext=\"M\"/><Cell row=\"1\" col=\"11\" text=\"로스율\" tooltiptext=\"LOSSRATE\"/><Cell row=\"1\" col=\"12\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"13\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"14\" text=\"M\" tooltiptext=\"M\"/><Cell row=\"1\" col=\"15\" text=\"금액\"/><Cell row=\"1\" col=\"16\" text=\"로스율\" tooltiptext=\"LOSSRATE\"/><Cell row=\"1\" col=\"17\" text=\"LOSS\" tooltiptext=\"OVERLOSS\"/><Cell row=\"1\" col=\"18\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"19\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"20\" text=\"M\" tooltiptext=\"M\"/><Cell row=\"1\" col=\"21\" text=\"금액\" tooltiptext=\"WIPPRICE\"/><Cell row=\"1\" col=\"22\" text=\"로스율\" tooltiptext=\"LOSSRATE\"/><Cell row=\"1\" col=\"23\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"24\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"25\" text=\"M\"/><Cell row=\"1\" col=\"26\" text=\"금액\" tooltiptext=\"WIPPRICE\"/><Cell row=\"1\" col=\"27\" text=\"로스율\" tooltiptext=\"LOSSRATE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:INPUTROLL\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"5\" text=\"bind:INPUTPNL\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"6\" text=\"bind:INPUTM\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0.#\"/><Cell col=\"7\" text=\"bind:LOSSPNL\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"8\" text=\"bind:LOSSM\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0.###\"/><Cell col=\"9\" text=\"bind:RECOLOSSPNL\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"10\" text=\"bind:RECOLOSSM\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0.#\"/><Cell col=\"11\" text=\"bind:RECOLOSSRATE\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"12\" text=\"bind:ROLLDEFECTPNL\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"13\" text=\"bind:ROLLDEFECTPCS\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"14\" text=\"bind:ROLLOSSDEFECTM\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0.#\"/><Cell col=\"15\" text=\"bind:ROLLLOSSDEFECTPRICE\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"16\" text=\"bind:ROLLLOSSDEFECTRATE\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"17\" text=\"bind:DIFLOSS\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"18\" text=\"bind:ETCDEFECTPNL\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"19\" text=\"bind:ETCDEFECTPCS\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"20\" text=\"bind:ETCM\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"21\" text=\"bind:ETCLOSSPRICE\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"22\" text=\"bind:ETCLOSSRATE\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"23\" text=\"bind:TOTALDEFECTPNL\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"24\" text=\"bind:TOTALDEFECTPCS\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"25\" text=\"bind:TOTALDEFECTM\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0.#\"/><Cell col=\"26\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\" text=\"bind:TOTALDEFECTPRICE\"/><Cell col=\"27\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0.##\" text=\"bind:TOTALLOSSRATE\"/></Band></Format></Formats>");
            this.div_work.form.tabMain.tpgRollLossByProduct.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdRollLossByProduct",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabMain.tpgRollLossByProduct.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabMain.tpgRollLossByProduct.addChild(obj.name, obj);

            obj = new Tabpage("tpgRollLossBySegment",this.div_work.form.tabMain);
            obj.set_text("공정");
            this.div_work.form.tabMain.addChild(obj.name, obj);

            obj = new Grid("grdRollLossBySegment","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabMain.tpgRollLossBySegment.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_Segment");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"품목코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"Rev\"/><Cell col=\"3\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"4\" rowspan=\"2\" text=\"공정명\"/><Cell col=\"5\" rowspan=\"2\" text=\"공정수순\"/><Cell col=\"6\" colspan=\"3\" text=\"투입량\" cssclass=\"cell_headMaster\" tooltiptext=\"ASSIGNEDUNITS\"/><Cell col=\"9\" colspan=\"2\" text=\"기준 LOSS/ROLL\" cssclass=\"cell_headMaster\" tooltiptext=\"BASICLOSSROLL\"/><Cell col=\"11\" colspan=\"3\" text=\"인정 LOSS\" cssclass=\"cell_headMaster\" tooltiptext=\"ADMITLOSS\"/><Cell col=\"14\" colspan=\"6\" text=\"ROLL LOSS(불량코드)\" cssclass=\"cell_headMaster\" tooltiptext=\"ROLLLOSSDEFECTCODE\"/><Cell col=\"20\" colspan=\"5\" text=\"기타 불량\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECTETC\"/><Cell col=\"25\" colspan=\"5\" text=\"ROLL 불량\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECTROLL\"/><Cell row=\"1\" col=\"6\" text=\"ROLL\" tooltiptext=\"ROLL\"/><Cell row=\"1\" col=\"7\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"8\" text=\"M\" tooltiptext=\"M\"/><Cell row=\"1\" col=\"9\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"10\" text=\"M\" tooltiptext=\"M\"/><Cell row=\"1\" col=\"11\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"12\" text=\"M\" tooltiptext=\"M\"/><Cell row=\"1\" col=\"13\" text=\"로스율\" tooltiptext=\"LOSSRATE\"/><Cell row=\"1\" col=\"14\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"15\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"16\" text=\"M\" tooltiptext=\"M\"/><Cell row=\"1\" col=\"17\" text=\"금액\" tooltiptext=\"WIPPRICE\"/><Cell row=\"1\" col=\"18\" text=\"로스율\" tooltiptext=\"LOSSRATE\"/><Cell row=\"1\" col=\"19\" text=\"초과 LOSS\" tooltiptext=\"OVERLOSS\"/><Cell row=\"1\" col=\"20\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"21\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"22\" text=\"M\" tooltiptext=\"M\"/><Cell row=\"1\" col=\"23\" text=\"금액\" tooltiptext=\"WIPPRICE\"/><Cell row=\"1\" col=\"24\" text=\"로스율\" tooltiptext=\"LOSSRATE\"/><Cell row=\"1\" col=\"25\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"26\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"27\" text=\"M\" tooltiptext=\"M\"/><Cell row=\"1\" col=\"28\" text=\"금액\" tooltiptext=\"WIPPRICE\"/><Cell row=\"1\" col=\"29\" text=\"로스율\" tooltiptext=\"LOSSRATE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:USERSEQUENCE\"/><Cell col=\"6\" text=\"bind:INPUTROLL\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:INPUTPNL\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:INPUTM\" displaytype=\"mask\" maskeditformat=\"#,##0.#\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:LOSSPNL\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:LOSSM\" displaytype=\"mask\" maskeditformat=\"#,##0.###\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:RECOLOSSPNL\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:RECOLOSSM\" displaytype=\"mask\" maskeditformat=\"#,##0.#\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:RECOLOSSRATE\" displaytype=\"mask\" maskeditformat=\"#,##0.##\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:ROLLDEFECTPNL\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:ROLLDEFECTPCS\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"16\" text=\"bind:ROLLOSSDEFECTM\" displaytype=\"mask\" maskeditformat=\"#,##0.#\" textAlign=\"right\"/><Cell col=\"17\" text=\"bind:ROLLLOSSDEFECTPRICE\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"18\" text=\"bind:ROLLLOSSDEFECTRATE\" displaytype=\"mask\" maskeditformat=\"#,##0.##\" textAlign=\"right\"/><Cell col=\"19\" text=\"bind:DIFLOSS\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"20\" text=\"bind:ETCDEFECTPNL\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"21\" text=\"bind:ETCDEFECTPCS\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"22\" text=\"bind:ETCM\" displaytype=\"mask\" maskeditformat=\"#,##0.#\" textAlign=\"right\"/><Cell col=\"23\" text=\"bind:ETCLOSSRATE\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"24\" text=\"bind:ETCLOSSRATE\" displaytype=\"mask\" maskeditformat=\"#,##0.##\" textAlign=\"right\"/><Cell col=\"25\" text=\"bind:TOTALDEFECTPNL\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"26\" text=\"bind:TOTALDEFECTPCS\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"27\" text=\"bind:TOTALDEFECTM\" displaytype=\"mask\" maskeditformat=\"#,##0.#\" textAlign=\"right\"/><Cell col=\"28\" text=\"bind:TOTALDEFECTPRICE\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"29\" text=\"bind:TOTALLOSSRATE\" displaytype=\"mask\" maskeditformat=\"#,##0.##\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.form.tabMain.tpgRollLossBySegment.addChild(obj.name, obj);

            obj = new Static("subtitle1","0","0","149","34",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRollLossBySegment.form);
            obj.set_taborder("1");
            obj.set_text("공정별 Roll Loss 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("ROLLLOSSPERSEGMENT");
            this.div_work.form.tabMain.tpgRollLossBySegment.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdRollLossBySegment",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabMain.tpgRollLossBySegment.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabMain.tpgRollLossBySegment.addChild(obj.name, obj);

            obj = new Tabpage("tpgRollLossByLot",this.div_work.form.tabMain);
            obj.set_text("LOT");
            this.div_work.form.tabMain.addChild(obj.name, obj);

            obj = new Grid("grdRollLossByLot","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabMain.tpgRollLossByLot.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_Lot");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"91\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"인계 일자\"/><Cell col=\"2\" rowspan=\"2\" text=\"품목코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"Rev\"/><Cell col=\"4\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"5\" rowspan=\"2\" text=\"Lot No.\"/><Cell col=\"6\" rowspan=\"2\" text=\"공정수순\"/><Cell col=\"7\" rowspan=\"2\" text=\"공정명\"/><Cell col=\"8\" colspan=\"2\" text=\"투입량\" cssclass=\"cell_headMaster\" tooltiptext=\"ASSIGNEDUNITS\"/><Cell col=\"10\" colspan=\"2\" text=\"기준 LOSS/ROLL\" cssclass=\"cell_headMaster\" tooltiptext=\"BASICLOSSROLL\"/><Cell col=\"12\" colspan=\"6\" text=\"ROLL LOSS\" cssclass=\"cell_headMaster\" tooltiptext=\"31EA729BC9DA48CCA216824B8AE99611\"/><Cell col=\"18\" colspan=\"5\" text=\"기타 불량\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECTETC\"/><Cell col=\"23\" colspan=\"5\" text=\"ROLL LOSS + 불량합계\" cssclass=\"cell_headMaster\" tooltiptext=\"ROLLLOSSDEFECTSUM\"/><Cell col=\"28\" rowspan=\"2\" text=\"인수\" tooltiptext=\"83B2D0A7F59049FF8FA652630D133995\"/><Cell col=\"29\" rowspan=\"2\" text=\"인계\" tooltiptext=\"6BBBC425B6C14107AB0ACB4E7C266334\"/><Cell col=\"30\" rowspan=\"2\" text=\"인계시간\" tooltiptext=\"SENDLOTTIME\"/><Cell row=\"1\" col=\"8\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"9\" text=\"M\" tooltiptext=\"M\"/><Cell row=\"1\" col=\"10\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"11\" text=\"M\" tooltiptext=\"M\"/><Cell row=\"1\" col=\"12\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"13\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"14\" text=\"M\" tooltiptext=\"M\"/><Cell row=\"1\" col=\"15\" text=\"금액\" tooltiptext=\"WIPPRICE\"/><Cell row=\"1\" col=\"16\" text=\"로스율\" tooltiptext=\"LOSSRATE\"/><Cell row=\"1\" col=\"17\" text=\"초과 LOSS\" tooltiptext=\"OVERLOSS\"/><Cell row=\"1\" col=\"18\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"19\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"20\" text=\"M\" tooltiptext=\"M\"/><Cell row=\"1\" col=\"21\" text=\"금액\" tooltiptext=\"WIPPRICE\"/><Cell row=\"1\" col=\"22\" text=\"로스율\" tooltiptext=\"LOSSRATE\"/><Cell row=\"1\" col=\"23\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"24\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"25\" text=\"M\" tooltiptext=\"M\"/><Cell row=\"1\" col=\"26\" text=\"금액\" tooltiptext=\"WIPPRICE\"/><Cell row=\"1\" col=\"27\" text=\"로스율\" tooltiptext=\"LOSSRATE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"1\" text=\"bind:SENDDATE\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFVERSION\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"5\" text=\"bind:LOTID\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"6\" text=\"bind:USERSEQUENCE\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"7\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"8\" text=\"bind:INPUTPNL\" displaytype=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;normal&quot; : &quot;mask&quot;\" maskeditformat=\"#,##0\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"9\" text=\"bind:INPUTM\" displaytype=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;normal&quot; : &quot;mask&quot;\" maskeditformat=\"#,##0.#\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"10\" text=\"bind:LOSSPNL\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"11\" text=\"bind:LOSSM\" displaytype=\"mask\" maskeditformat=\"#,##0.###\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"12\" text=\"bind:ROLLDEFECTPNL\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"13\" text=\"bind:ROLLDEFECTPCS\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"14\" text=\"bind:ROLLOSSDEFECTM\" displaytype=\"mask\" maskeditformat=\"#,##0.#\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"15\" text=\"bind:ROLLLOSSPRICE\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"16\" text=\"bind:ROLLLOSSDEFECTRATE\" displaytype=\"mask\" maskeditformat=\"#,##0.##\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"17\" text=\"bind:DIFLOSS\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"18\" text=\"bind:ETCDEFECTPNL\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"19\" text=\"bind:ETCDEFECTPCS\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"20\" text=\"bind:ETCDEFECTM\" displaytype=\"mask\" maskeditformat=\"#,##0.#\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"21\" text=\"bind:ETCDEFECTPRICE\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"22\" text=\"bind:ETCDEFECTRATE\" displaytype=\"mask\" maskeditformat=\"#,##0.##\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"23\" text=\"bind:DEFECTQTYPNL\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"24\" text=\"bind:DEFECTQTYPCS\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"25\" text=\"bind:DEFECTQTYM\" displaytype=\"mask\" maskeditformat=\"#,##0.#\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"26\" text=\"bind:DEFECTQTYPRICE\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"27\" text=\"bind:DEFECTQTYRATE\" displaytype=\"mask\" maskeditformat=\"#,##0.##\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"28\" text=\"bind:INPUTPNL\" displaytype=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;normal&quot; : &quot;mask&quot;\" maskeditformat=\"#,##0\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"29\" text=\"bind:SENDPANELQTY\" displaytype=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;normal&quot; : &quot;mask&quot;\" maskeditformat=\"#,##0\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"30\" text=\"bind:SENDTIME\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/></Band></Format></Formats>");
            this.div_work.form.tabMain.tpgRollLossByLot.addChild(obj.name, obj);

            obj = new Static("subtitle1","0","0","149","34",null,null,null,null,null,null,this.div_work.form.tabMain.tpgRollLossByLot.form);
            obj.set_taborder("1");
            obj.set_text("LOT 별 Roll Loss 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("ROLLLOSSPERLOT");
            this.div_work.form.tabMain.tpgRollLossByLot.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdRollLossByLot",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabMain.tpgRollLossByLot.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabMain.tpgRollLossByLot.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,757,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("itemPERIOD_PERIODFR","tab_search.Tabpage1.form.cal_STARTDT","value","ds_search","PERIOD_PERIODFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPERIODTYPE","tab_search.Tabpage1.form.cbo_PERIODTYPE","value","ds_search","PERIODTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPERIOD_PERIODTO","tab_search.Tabpage1.form.cal_ENDDT","value","ds_search","PERIOD_PERIODTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPRODUCTIONTYPE","tab_search.Tabpage1.form.cbo_PRODUCTIONTYPE","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPRODUCTDEFID","tab_search.Tabpage1.form.edt_PRODUCTDEFID","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPRODUCTDEFVERSION","tab_search.Tabpage1.form.cbo_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPRODUCTDEFNAME","tab_search.Tabpage1.form.edt_PRODUCTDEFNAME","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPRODUCTDIVISION","tab_search.Tabpage1.form.cbo_PRODUCTDIVISION","value","ds_search","PRODUCTDIVISION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemINPUTSTATE","tab_search.Tabpage1.form.cbo_INPUTSTATE","value","ds_search","INPUTSTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPLANTID","tab_search.Tabpage1.form.cbo_PLANTID","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemLOTID","tab_search.Tabpage1.form.edt_LOTID","value","ds_search","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM06000M.xfdl","lib::lib_base.xjs");
        this.addIncludeScript("PCM06000M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM06000M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM06000M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 공정 Roll Loss 현황
         * 파일명 		: PCM06000M.xfdl
         * 작성자 		: 김애리
         * 작성일 		: 2021.6.3
         * AS-IS		: RollLossPerSegment
         * 설  명		: Roll Loss 현황을 조회한다.
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.6.3	김애리   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        // include "lib::comLib.xjs";
        this.executeIncludeScript("lib::lib_base.xjs"); /*include "lib::lib_base.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	//this.fn_initDatePicker(); //fn_callback 로 감.

        	this.ds_search.set_rowposition(0);
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "LANGUAGETYPE",this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "USERID", this.gf_getUserId());

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
        	if(this.fn_searchValidate() == false) return;
        	var tabName = this.div_work.form.tabMain.tabpages.get_id(this.div_work.form.tabMain.tabindex);

        	switch(tabName) {
        	case "tpgRollLossByProduct" :this.GetProduct(); break;
        	case "tpgRollLossBySegment" :this.GetSegment(); break;
        	case "tpgRollLossByLot" :this.GetLot(); break;
        	default:
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

        };

        /*
         * 기능 : work영역 초기화  => 공통처리
         */
        this.fn_reset = function(obj,e)
        {
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
        			this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        			break;
        		}
        		case "selectEcmLookupValuesVList2ds_CsearchPeriodType" :
        		{
        			this.fn_initDatePicker();
        			break;
        		}
        		case "selectEcmLookupValuesVList2ds_CProductionTypeALL" :
        		{
        			this.ds_search.setColumn(0,"PERIODTYPE","THISMONTH"); //fn_initDatePicker 에서 안되서 마지막 콤보 가져올 때....
        			break;
        		}
        		case "selectRollLossByLot" :
        		{
        			this.ds_Lot.set_keystring("G:+SENDDATE+PRODUCTDEFID+PRODUCTDEFVERSION+PRODUCTDEFNAME+LOTID");
        			break;
        		}
        		default:
        		}
        	}

        }


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SEARCH_PRODUCT")
        	{//PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME
        		this.setProduct_P00105(rtn, this.ds_cbo_ProdVersion, this.ds_search);
        	}
        }
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_initDatePicker = function ()
        {
        	this.basfn_getPeriodData("ds_periodType");
         	this.ds_search.setColumn(0,"PERIOD_PERIODFR",this.ds_periodType.getColumn(0,"THISMONTH_S"));
         	this.ds_search.setColumn(0,"PERIOD_PERIODTO",this.ds_periodType.getColumn(0,"THISMONTH_E"));
        	this.ds_search.setColumn(0,"PERIODTYPE","THISMONTH");

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

        this.GetProduct = function ()
        {
        	var sSvcID 			= "selectRollLossByProduct";
        	var sController 	= "/pcm06000/selectRollLossByProduct.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_Product=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.GetSegment = function ()
        {
        	var sController = "";
        	if(this.ds_search.getColumn(0,"INPUTSTATE") == "Input")
        		sController = "/pcm06000/selectRollLossBySegment_Input.do";
        	else
        		sController = "/pcm06000/selectRollLossBySegment_Complete.do";

        	var sSvcID 			= "selectRollLossBySegment";

        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_Segment=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.GetLot = function ()
        {
        	var sController = "";
        	if(this.ds_search.getColumn(0,"INPUTSTATE") == "Input")
        		sController = "/pcm06000/selectRollLossByLot_Input.do";
        	else
        		sController = "/pcm06000/selectRollLossByLot_Complete.do";

        	var sSvcID 			= "selectRollLossByLot";

        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_Lot=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_Tabpage1_cboPeriodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM")this.fn_setDate(e.postvalue);
        };

        this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"PRODUCTDEFID",this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value);
        	this.openProduct_P00105("CA", this.ds_search,"Product");
        };

        this.tab_search_Tabpage1_btn_LOTID_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"LOTID",this.tab_search.Tabpage1.form.edt_LOTID.value);
        	this.pfn_openPopup_LOTID("SEARCH_LOTID", this.ds_search.getColumn(0,"LOTID"),"CA");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.cal_STARTDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cbo_PERIODTYPE.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cboPeriodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.cal_ENDDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.btn_LOTID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_LOTID_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("PCM06000M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
