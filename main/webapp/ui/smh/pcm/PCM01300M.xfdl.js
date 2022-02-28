(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01300M");
            this.set_titletext("투입율 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDAY\" type=\"STRING\" size=\"256\"/><Column id=\"LOWLOTINPUTTYPECODE\" type=\"STRING\" size=\"256\"/><Column id=\"LOWPRODUCTIONTYPECODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("ds_inputRateStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"INPUTDAY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTTYPECODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPECODE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANQTY_PNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"PLANQTY_PCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"PLANQTY_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"INPUTQTY_PNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"INPUTQTY_PCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"INPUTQTY_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTQTY_PNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTQTY_PCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTQTY_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTRATIO_PNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTRATIO_PCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTRATIO_AMOUNT\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputDaySummary", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANQTY_PNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"PLANQTY_PCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"PLANQTY_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"INPUTQTY_PNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"INPUTQTY_PCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"INPUTQTY_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTQTY_PNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTQTY_PCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTQTY_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTRATIO_PNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTRATIO_PCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTRATIO_AMOUNT\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputDaySummaryByProduct", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTINPUTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANQTY_PNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"PLANQTY_PCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"PLANQTY_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"INPUTQTY_PNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"INPUTQTY_PCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"INPUTQTY_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTQTY_PNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTQTY_PCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTQTY_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTRATIO_PNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTRATIO_PCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTRATIO_AMOUNT\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputLotRateByProduct", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTINPUTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANQTY_PNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"PLANQTY_PCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"PLANQTY_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"INPUTQTY_PNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"INPUTQTY_PCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"INPUTQTY_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTQTY_PNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTQTY_PCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTQTY_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTRATIO_PNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTRATIO_PCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTRATIO_AMOUNT\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputLotRateByCustomer", this);
            obj._setContents("<ColumnInfo><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANQTY_PNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"PLANQTY_PCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"PLANQTY_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"INPUTQTY_PNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"INPUTQTY_PCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"INPUTQTY_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTQTY_PNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTQTY_PCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTQTY_AMOUNT\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTRATIO_PNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTRATIO_PCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"OVERINPUTRATIO_AMOUNT\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
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

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","302","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","272","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_text("Routing 자원/치공구/외주단가 등록");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
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

            obj = new Static("guidetip04",null,"205","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","231","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTIONTYPE","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTIONTYPE","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPLANTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PLANT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staLOTINPUTTYPE","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("투입구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTINPUTTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_LOTINPUTTYPE","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,LotInputType,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staSearchPeriod","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("C6A85700415446D89213292978260263");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_STARTDT","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_ENDDT","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PERIODTYPE","15","60","88","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFID","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","0","15","290",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"0","15","290","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","225","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","225","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFVERSION","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFNAME","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_Main","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            obj.set_positionstep("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_Main);
            obj.set_text("투입일");
            obj.set_tooltiptext("INPUTDATE");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","89","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("투입율현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("INPUTRATESTATUS");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grdInputDaySummaryByProduct","0","492",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_inputDaySummaryByProduct");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" colspan=\"3\" suppressalign=\"first\"/><Cell col=\"4\" colspan=\"3\" tooltiptext=\"ORDERQTY\" text=\"수주량\"/><Cell col=\"7\" colspan=\"3\" tooltiptext=\"GROUPINPUTQTY\" text=\"투입량\"/><Cell col=\"10\" colspan=\"3\" text=\"과투입량\" tooltiptext=\"OVERINPUTQTY\"/><Cell col=\"13\" colspan=\"3\" tooltiptext=\"OVERINPUTRATE\" text=\"과투입율(%)\"/><Cell row=\"1\" text=\"No\"/><Cell row=\"1\" col=\"1\" tooltiptext=\"ITEMCODE\" text=\"품목코드\"/><Cell row=\"1\" col=\"2\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell row=\"1\" col=\"3\" tooltiptext=\"ITEMNAME\" text=\"품목명\"/><Cell row=\"1\" col=\"4\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"5\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"6\" tooltiptext=\"OSPDAY04AMOUNT\" text=\"금액\"/><Cell row=\"1\" col=\"7\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"8\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"9\" tooltiptext=\"OSPDAY04AMOUNT\" text=\"금액\"/><Cell row=\"1\" col=\"10\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"11\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"12\" tooltiptext=\"OSPDAY04AMOUNT\" text=\"금액\"/><Cell row=\"1\" col=\"13\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"14\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"15\" tooltiptext=\"OSPDAY04AMOUNT\" text=\"금액\"/></Band><Band id=\"body\"><Cell cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\" calendardateformat=\"ddd\" displaytype=\"normal\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:PLANQTY_PNL\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"5\" text=\"bind:PLANQTY_PCS\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"6\" text=\"bind:PLANQTY_AMOUNT\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"7\" text=\"bind:INPUTQTY_PNL\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"8\" text=\"bind:INPUTQTY_PCS\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"9\" text=\"bind:INPUTQTY_AMOUNT\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"10\" text=\"bind:OVERINPUTQTY_PNL\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"11\" text=\"bind:OVERINPUTQTY_PCS\" maskeditformat=\"###,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:OVERINPUTQTY_AMOUNT\" maskeditformat=\"###,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"13\" displaytype=\"normal\" maskeditformat=\"###,##0.00\" maskeditpostfixtext=\"%\" textAlign=\"right\" expr=\"nexacro.round((INPUTQTY_PNL /PLANQTY_PNL-1) *100, 2) + &apos;%&apos;== &quot;Infinity%&quot;?&quot;&quot;:nexacro.round((INPUTQTY_PNL /PLANQTY_PNL-1) *100, 2) + &apos;%&apos;\"/><Cell col=\"14\" displaytype=\"normal\" maskeditformat=\"###,##0.00\" maskeditpostfixtext=\"%\" textAlign=\"right\" expr=\"nexacro.round((INPUTQTY_PCS /PLANQTY_PCS-1) *100, 2) + &apos;%&apos;== &quot;Infinity%&quot;?&quot;&quot;:nexacro.round((INPUTQTY_PCS /PLANQTY_PCS-1) *100, 2) + &apos;%&apos;\"/><Cell col=\"15\" displaytype=\"normal\" maskeditformat=\"###,##0.00\" maskeditpostfixtext=\"%\" textAlign=\"right\" expr=\"nexacro.round((INPUTQTY_AMOUNT /PLANQTY_AMOUNT-1) *100, 2) + &apos;%&apos;== &quot;Infinity%&quot;?&quot;&quot;:nexacro.round((INPUTQTY_AMOUNT /PLANQTY_AMOUNT-1) *100, 2) + &apos;%&apos;\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"합계\" tooltiptext=\"TOTALAMOUNT\"/><Cell col=\"4\" expr=\"dataset.getSum(&quot;PLANQTY_PNL&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"5\" expr=\"dataset.getSum(&quot;PLANQTY_PCS&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"6\" expr=\"dataset.getSum(&quot;PLANQTY_AMOUNT&quot;)\" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"7\" expr=\"dataset.getSum(&quot;INPUTQTY_PNL&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"8\" expr=\"dataset.getSum(&quot;INPUTQTY_PCS&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"9\" expr=\"dataset.getSum(&quot;INPUTQTY_AMOUNT&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"10\" expr=\"dataset.getSum(&quot;OVERINPUTQTY_PNL&quot;)\" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"11\" expr=\"dataset.getSum(&quot;OVERINPUTQTY_PCS&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"12\" expr=\"dataset.getSum(&quot;OVERINPUTQTY_AMOUNT&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"13\" expr=\"nexacro.round((dataset.getSum(&quot;INPUTQTY_PNL&quot;) /dataset.getSum(&quot;PLANQTY_PNL&quot;) -1) *100, 2) + &apos;%&apos;== &quot;NaN%&quot;?&quot;&quot;:nexacro.round((dataset.getSum(&quot;INPUTQTY_PNL&quot;) /dataset.getSum(&quot;PLANQTY_PNL&quot;) -1) *100, 2) + &apos;%&apos;\"/><Cell col=\"14\" expr=\"nexacro.round((dataset.getSum(&quot;INPUTQTY_PCS&quot;) /dataset.getSum(&quot;PLANQTY_PCS&quot;) -1) *100, 2) + &apos;%&apos;== &quot;NaN%&quot;?&quot;&quot;:nexacro.round((dataset.getSum(&quot;INPUTQTY_PCS&quot;) /dataset.getSum(&quot;PLANQTY_PCS&quot;) -1) *100, 2) + &apos;%&apos;\"/><Cell col=\"15\" expr=\"nexacro.round((dataset.getSum(&quot;INPUTQTY_AMOUNT&quot;) /dataset.getSum(&quot;PLANQTY_AMOUNT&quot;) -1) *100, 2) + &apos;%&apos;== &quot;NaN%&quot;?&quot;&quot;:nexacro.round((dataset.getSum(&quot;INPUTQTY_AMOUNT&quot;) /dataset.getSum(&quot;PLANQTY_AMOUNT&quot;) -1) *100, 2) + &apos;%&apos;\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grdInputDaySummary","0","295",null,null,"0","grdInputDaySummaryByProduct:34",null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_inputDaySummary");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" colspan=\"2\" suppressalign=\"first\"/><Cell col=\"3\" colspan=\"3\" tooltiptext=\"ORDERQTY\" text=\"수주량\"/><Cell col=\"6\" colspan=\"3\" tooltiptext=\"GROUPINPUTQTY\" text=\"투입량\"/><Cell col=\"9\" colspan=\"3\" text=\"과투입량\" tooltiptext=\"OVERINPUTQTY\"/><Cell col=\"12\" colspan=\"3\" tooltiptext=\"OVERINPUTRATE\" text=\"과투입율(%)\"/><Cell row=\"1\" text=\"No\"/><Cell row=\"1\" col=\"1\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell row=\"1\" col=\"2\" tooltiptext=\"LOTINPUTTYPE\" text=\"투입구분\"/><Cell row=\"1\" col=\"3\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"4\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"5\" tooltiptext=\"OSPDAY04AMOUNT\" text=\"금액\"/><Cell row=\"1\" col=\"6\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"7\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"8\" tooltiptext=\"OSPDAY04AMOUNT\" text=\"금액\"/><Cell row=\"1\" col=\"9\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"10\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"11\" tooltiptext=\"OSPDAY04AMOUNT\" text=\"금액\"/><Cell row=\"1\" col=\"12\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"13\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"14\" tooltiptext=\"OSPDAY04AMOUNT\" text=\"금액\"/></Band><Band id=\"body\"><Cell cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PRODUCTIONTYPE\" calendardateformat=\"ddd\" displaytype=\"normal\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:LOTINPUTTYPE\" textAlign=\"center\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:PLANQTY_PNL\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"4\" text=\"bind:PLANQTY_PCS\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"5\" text=\"bind:PLANQTY_AMOUNT\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"6\" text=\"bind:INPUTQTY_PNL\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"7\" text=\"bind:INPUTQTY_PCS\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"8\" text=\"bind:INPUTQTY_AMOUNT\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"9\" text=\"bind:OVERINPUTQTY_PNL\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"10\" text=\"bind:OVERINPUTQTY_PCS\" maskeditformat=\"###,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:OVERINPUTQTY_AMOUNT\" maskeditformat=\"###,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"12\" displaytype=\"normal\" maskeditformat=\"###,##0.00\" maskeditpostfixtext=\"%\" textAlign=\"right\" expr=\"nexacro.round((INPUTQTY_PNL /PLANQTY_PNL-1) *100, 2) + &apos;%&apos;== &quot;Infinity%&quot;?&quot;&quot;:nexacro.round((INPUTQTY_PNL /PLANQTY_PNL-1) *100, 2) + &apos;%&apos;\"/><Cell col=\"13\" maskeditpostfixtext=\"%\" maskeditformat=\"###,##0.00\" displaytype=\"normal\" textAlign=\"right\" expr=\"nexacro.round((INPUTQTY_PCS /PLANQTY_PCS-1) *100, 2) + &apos;%&apos;== &quot;Infinity%&quot;?&quot;&quot;:nexacro.round((INPUTQTY_PCS /PLANQTY_PCS-1) *100, 2) + &apos;%&apos;\"/><Cell col=\"14\" textAlign=\"right\" displaytype=\"normal\" maskeditformat=\"###,##0.00\" maskeditpostfixtext=\"%\" expr=\"nexacro.round((INPUTQTY_AMOUNT /PLANQTY_AMOUNT-1) *100, 2) + &apos;%&apos; == &quot;Infinity%&quot;?&quot;&quot;:nexacro.round((INPUTQTY_AMOUNT /PLANQTY_AMOUNT-1) *100, 2) + &apos;%&apos;\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"합계\" tooltiptext=\"TOTALAMOUNT\"/><Cell col=\"3\" expr=\"dataset.getSum(&quot;PLANQTY_PNL&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"4\" expr=\"dataset.getSum(&quot;PLANQTY_PCS&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"5\" expr=\"dataset.getSum(&quot;PLANQTY_AMOUNT&quot;)\" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"6\" expr=\"dataset.getSum(&quot;INPUTQTY_PNL&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"7\" expr=\"dataset.getSum(&quot;INPUTQTY_PCS&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"8\" expr=\"dataset.getSum(&quot;INPUTQTY_AMOUNT&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"9\" expr=\"dataset.getSum(&quot;OVERINPUTQTY_PNL&quot;)\" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"10\" expr=\"dataset.getSum(&quot;OVERINPUTQTY_PCS&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"11\" expr=\"dataset.getSum(&quot;OVERINPUTQTY_AMOUNT&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"12\" expr=\"nexacro.round((dataset.getSum(&quot;INPUTQTY_PNL&quot;) /dataset.getSum(&quot;PLANQTY_PNL&quot;) -1) *100, 2) + &apos;%&apos;== &quot;NaN%&quot;?&quot;&quot;:nexacro.round((dataset.getSum(&quot;INPUTQTY_PNL&quot;) /dataset.getSum(&quot;PLANQTY_PNL&quot;) -1) *100, 2) + &apos;%&apos;\"/><Cell col=\"13\" expr=\"nexacro.round((dataset.getSum(&quot;INPUTQTY_PCS&quot;) /dataset.getSum(&quot;PLANQTY_PCS&quot;) -1) *100, 2) + &apos;%&apos;== &quot;NaN%&quot;?&quot;&quot;:nexacro.round((dataset.getSum(&quot;INPUTQTY_PCS&quot;) /dataset.getSum(&quot;PLANQTY_PCS&quot;) -1) *100, 2) + &apos;%&apos;\"/><Cell col=\"14\" expr=\"nexacro.round((dataset.getSum(&quot;INPUTQTY_AMOUNT&quot;) /dataset.getSum(&quot;PLANQTY_AMOUNT&quot;) -1) *100, 2) + &apos;%&apos;== &quot;NaN%&quot;?&quot;&quot;:nexacro.round((dataset.getSum(&quot;INPUTQTY_AMOUNT&quot;) /dataset.getSum(&quot;PLANQTY_AMOUNT&quot;) -1) *100, 2) + &apos;%&apos;\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grdInputRateStatus","0","34",null,null,"0","grdInputDaySummary:34",null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_inputRateStatus");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" colspan=\"3\" suppressalign=\"first\"/><Cell col=\"4\" colspan=\"3\" tooltiptext=\"ORDERQTY\" text=\"수주량\"/><Cell col=\"7\" colspan=\"3\" tooltiptext=\"GROUPINPUTQTY\" text=\"투입량\"/><Cell col=\"10\" colspan=\"3\" text=\"과투입량\" tooltiptext=\"OVERINPUTQTY\"/><Cell col=\"13\" colspan=\"3\" tooltiptext=\"OVERINPUTRATE\" text=\"과투입율(%)\"/><Cell row=\"1\" text=\"No\"/><Cell row=\"1\" col=\"1\" tooltiptext=\"INPUTDAY\" text=\"투입일\"/><Cell row=\"1\" col=\"2\" text=\"투입구분\" tooltiptext=\"LOTINPUTTYPE\"/><Cell row=\"1\" col=\"3\" tooltiptext=\"PRODUCTIONTYPE\" text=\"생산구분\"/><Cell row=\"1\" col=\"4\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"5\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"6\" tooltiptext=\"OSPDAY04AMOUNT\" text=\"금액\"/><Cell row=\"1\" col=\"7\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"8\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"9\" tooltiptext=\"OSPDAY04AMOUNT\" text=\"금액\"/><Cell row=\"1\" col=\"10\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"11\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"12\" tooltiptext=\"OSPDAY04AMOUNT\" text=\"금액\"/><Cell row=\"1\" col=\"13\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"14\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"15\" tooltiptext=\"OSPDAY04AMOUNT\" text=\"금액\"/></Band><Band id=\"body\"><Cell cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:INPUTDAY\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:LOTINPUTTYPE\" calendardateformat=\"ddd\" displaytype=\"normal\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:PRODUCTIONTYPE\" textAlign=\"center\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:PLANQTY_PNL\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"5\" text=\"bind:PLANQTY_PCS\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"6\" text=\"bind:PLANQTY_AMOUNT\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"7\" text=\"bind:INPUTQTY_PNL\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"8\" text=\"bind:INPUTQTY_PCS\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"9\" text=\"bind:INPUTQTY_AMOUNT\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"10\" text=\"bind:OVERINPUTQTY_PNL\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"11\" text=\"bind:OVERINPUTQTY_PCS\" maskeditformat=\"###,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:OVERINPUTQTY_AMOUNT\" maskeditformat=\"###,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"13\" displaytype=\"normal\" maskeditpostfixtext=\"%\" textAlign=\"right\" expr=\"nexacro.round((INPUTQTY_PNL /PLANQTY_PNL-1) *100, 2) + &apos;%&apos; == &quot;Infinity%&quot;?&quot;&quot;:nexacro.round((INPUTQTY_PNL /PLANQTY_PNL-1) *100, 2) + &apos;%&apos;\"/><Cell col=\"14\" maskeditformat=\"###,##0.00\" maskeditpostfixtext=\"%\" displaytype=\"normal\" textAlign=\"right\" expr=\"nexacro.round((INPUTQTY_PCS /PLANQTY_PCS-1) *100, 2) + &apos;%&apos; == &quot;Infinity%&quot;?&quot;&quot;:nexacro.round((INPUTQTY_PCS /PLANQTY_PCS-1) *100, 2) + &apos;%&apos;\"/><Cell col=\"15\" textAlign=\"right\" displaytype=\"normal\" maskeditformat=\"###,##0.00\" maskeditpostfixtext=\"%\" expr=\"nexacro.round((INPUTQTY_AMOUNT /PLANQTY_AMOUNT-1) *100, 2) + &apos;%&apos;== &quot;Infinity%&quot;?&quot;&quot;:nexacro.round((INPUTQTY_AMOUNT /PLANQTY_AMOUNT-1) *100, 2) + &apos;%&apos;\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"합계\" tooltiptext=\"TOTALAMOUNT\"/><Cell col=\"4\" expr=\"dataset.getSum(&quot;PLANQTY_PNL&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"5\" expr=\"dataset.getSum(&quot;PLANQTY_PCS&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"6\" expr=\"dataset.getSum(&quot;PLANQTY_AMOUNT&quot;)\" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"7\" expr=\"dataset.getSum(&quot;INPUTQTY_PNL&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"8\" expr=\"dataset.getSum(&quot;INPUTQTY_PCS&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"9\" expr=\"dataset.getSum(&quot;INPUTQTY_AMOUNT&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"10\" expr=\"dataset.getSum(&quot;OVERINPUTQTY_PNL&quot;)\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"11\" expr=\"dataset.getSum(&quot;OVERINPUTQTY_PCS&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"12\" expr=\"dataset.getSum(&quot;OVERINPUTQTY_AMOUNT&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"13\" expr=\"nexacro.round((dataset.getSum(&quot;INPUTQTY_PNL&quot;) /dataset.getSum(&quot;PLANQTY_PNL&quot;) -1) *100, 2) + &apos;%&apos;== &quot;NaN%&quot;?&quot;&quot;:nexacro.round((dataset.getSum(&quot;INPUTQTY_PNL&quot;) /dataset.getSum(&quot;PLANQTY_PNL&quot;) -1) *100, 2) + &apos;%&apos;\"/><Cell col=\"14\" expr=\"nexacro.round((dataset.getSum(&quot;INPUTQTY_PCS&quot;) /dataset.getSum(&quot;PLANQTY_PCS&quot;) -1) *100, 2) + &apos;%&apos;== &quot;NaN%&quot;?&quot;&quot;:nexacro.round((dataset.getSum(&quot;INPUTQTY_PCS&quot;) /dataset.getSum(&quot;PLANQTY_PCS&quot;) -1) *100, 2) + &apos;%&apos;\"/><Cell col=\"15\" expr=\"nexacro.round((dataset.getSum(&quot;INPUTQTY_AMOUNT&quot;) /dataset.getSum(&quot;PLANQTY_AMOUNT&quot;) -1) *100, 2) + &apos;%&apos;== &quot;NaN%&quot;?&quot;&quot;:nexacro.round((dataset.getSum(&quot;INPUTQTY_AMOUNT&quot;) /dataset.getSum(&quot;PLANQTY_AMOUNT&quot;) -1) *100, 2) + &apos;%&apos;\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_inputRateStatus","staTitle:0","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdInputRateStatus",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","261","89","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("SUMMARY");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("SUMMARYGROUP");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_inputDaySummary","89","261","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdInputDaySummary",null,null,"29","24","0","grdInputDaySummary:3",null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02_01_00",null,"261","45","34","503",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02_01_00_00",null,"458","45",null,"493","174",null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staTitle00_00","0","458","110","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("일자별 상세내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("DAILYDETAIL");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_inputDaySummaryByProduct","110","458","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdInputDaySummaryByProduct",null,"grdInputDaySummary:5","29","24","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_Main);
            obj.set_text("모델별");
            obj.set_tooltiptext("BYMODEL");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","89","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("투입율현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("INPUTRATESTATUS");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_inputLotRateByProduct","staTitle:0","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdInputLotRateByProduct",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grdInputLotRateByProduct","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_inputLotRateByProduct");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"140\"/><Column size=\"280\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" colspan=\"3\" suppressalign=\"first\"/><Cell col=\"4\" colspan=\"3\" tooltiptext=\"ORDERQTY\" text=\"수주량\"/><Cell col=\"7\" colspan=\"3\" tooltiptext=\"GROUPINPUTQTY\" text=\"투입량\"/><Cell col=\"10\" colspan=\"3\" text=\"과투입량\" tooltiptext=\"OVERINPUTQTY\"/><Cell col=\"13\" colspan=\"3\" tooltiptext=\"OVERINPUTRATE\" text=\"과투입율(%)\"/><Cell row=\"1\" text=\"No\"/><Cell row=\"1\" col=\"1\" tooltiptext=\"LOTINPUTTYPE\" text=\"투입구분\"/><Cell row=\"1\" col=\"2\" text=\"품목코드\" tooltiptext=\"ITEMID\"/><Cell row=\"1\" col=\"3\" tooltiptext=\"ITEMNAME\" text=\"품목명\"/><Cell row=\"1\" col=\"4\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"5\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"6\" tooltiptext=\"OSPDAY04AMOUNT\" text=\"금액\"/><Cell row=\"1\" col=\"7\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"8\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"9\" tooltiptext=\"OSPDAY04AMOUNT\" text=\"금액\"/><Cell row=\"1\" col=\"10\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"11\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"12\" tooltiptext=\"OSPDAY04AMOUNT\" text=\"금액\"/><Cell row=\"1\" col=\"13\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"14\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"15\" tooltiptext=\"OSPDAY04AMOUNT\" text=\"금액\"/></Band><Band id=\"body\"><Cell cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:LOTINPUTTYPE\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\" calendardateformat=\"ddd\" displaytype=\"normal\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"center\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:PLANQTY_PNL\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"5\" text=\"bind:PLANQTY_PCS\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"6\" text=\"bind:PLANQTY_AMOUNT\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"7\" text=\"bind:INPUTQTY_PNL\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"8\" text=\"bind:INPUTQTY_PCS\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"9\" text=\"bind:INPUTQTY_AMOUNT\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"10\" text=\"bind:OVERINPUTQTY_PNL\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"11\" text=\"bind:OVERINPUTQTY_PCS\" maskeditformat=\"###,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:OVERINPUTQTY_AMOUNT\" maskeditformat=\"###,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"13\" displaytype=\"normal\" maskeditformat=\"###,##0.00\" maskeditpostfixtext=\"%\" textAlign=\"right\" expr=\"nexacro.round((INPUTQTY_PNL /PLANQTY_PNL-1) *100, 2) + &apos;%&apos;== &quot;Infinity%&quot;?&quot;&quot;:nexacro.round((INPUTQTY_PNL /PLANQTY_PNL-1) *100, 2) + &apos;%&apos;\"/><Cell col=\"14\" maskeditformat=\"###,##0.00\" maskeditpostfixtext=\"%\" displaytype=\"normal\" textAlign=\"right\" expr=\"nexacro.round((INPUTQTY_PCS /PLANQTY_PCS-1) *100, 2) + &apos;%&apos;== &quot;Infinity%&quot;?&quot;&quot;:nexacro.round((INPUTQTY_PCS /PLANQTY_PCS-1) *100, 2) + &apos;%&apos;\"/><Cell col=\"15\" textAlign=\"right\" displaytype=\"normal\" maskeditformat=\"###,##0.00\" maskeditpostfixtext=\"%\" expr=\"nexacro.round((INPUTQTY_AMOUNT /PLANQTY_AMOUNT-1) *100, 2) + &apos;%&apos;== &quot;Infinity%&quot;?&quot;&quot;:nexacro.round((INPUTQTY_AMOUNT /PLANQTY_AMOUNT-1) *100, 2) + &apos;%&apos;\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"합계\" tooltiptext=\"TOTALAMOUNT\"/><Cell col=\"4\" expr=\"dataset.getSum(&quot;PLANQTY_PNL&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"5\" expr=\"dataset.getSum(&quot;PLANQTY_PCS&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"6\" expr=\"dataset.getSum(&quot;PLANQTY_AMOUNT&quot;)\" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"7\" expr=\"dataset.getSum(&quot;INPUTQTY_PNL&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"8\" expr=\"dataset.getSum(&quot;INPUTQTY_PCS&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"9\" expr=\"dataset.getSum(&quot;INPUTQTY_AMOUNT&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"10\" expr=\"dataset.getSum(&quot;OVERINPUTQTY_PNL&quot;)\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"11\" expr=\"dataset.getSum(&quot;OVERINPUTQTY_PCS&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"12\" expr=\"dataset.getSum(&quot;OVERINPUTQTY_AMOUNT&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"13\" expr=\"nexacro.round((dataset.getSum(&quot;INPUTQTY_PNL&quot;) /dataset.getSum(&quot;PLANQTY_PNL&quot;) -1) *100, 2) + &apos;%&apos;== &quot;NaN%&quot;?&quot;&quot;:nexacro.round((dataset.getSum(&quot;INPUTQTY_PNL&quot;) /dataset.getSum(&quot;PLANQTY_PNL&quot;) -1) *100, 2) + &apos;%&apos;\"/><Cell col=\"14\" expr=\"nexacro.round((dataset.getSum(&quot;INPUTQTY_PCS&quot;) /dataset.getSum(&quot;PLANQTY_PCS&quot;) -1) *100, 2) + &apos;%&apos;== &quot;NaN%&quot;?&quot;&quot;:nexacro.round((dataset.getSum(&quot;INPUTQTY_PCS&quot;) /dataset.getSum(&quot;PLANQTY_PCS&quot;) -1) *100, 2) + &apos;%&apos;\"/><Cell col=\"15\" expr=\"nexacro.round((dataset.getSum(&quot;INPUTQTY_AMOUNT&quot;) /dataset.getSum(&quot;PLANQTY_AMOUNT&quot;) -1) *100, 2) + &apos;%&apos;== &quot;NaN%&quot;?&quot;&quot;:nexacro.round((dataset.getSum(&quot;INPUTQTY_AMOUNT&quot;) /dataset.getSum(&quot;PLANQTY_AMOUNT&quot;) -1) *100, 2) + &apos;%&apos;\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab_Main);
            obj.set_text("고객사별");
            obj.set_tooltiptext("BYCOMPANY");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","89","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("투입율현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("INPUTRATESTATUS");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_inputLotRateByCustomer","staTitle:0","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdInputLotRateByCustomer",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grdInputLotRateByCustomer","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_inputLotRateByCustomer");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" suppressalign=\"first\"/><Cell col=\"2\" colspan=\"3\" tooltiptext=\"ORDERQTY\" text=\"수주량\"/><Cell col=\"5\" colspan=\"3\" tooltiptext=\"GROUPINPUTQTY\" text=\"투입량\"/><Cell col=\"8\" colspan=\"3\" text=\"과투입량\" tooltiptext=\"OVERINPUTQTY\"/><Cell col=\"11\" colspan=\"3\" tooltiptext=\"OVERINPUTRATE\" text=\"과투입율(%)\"/><Cell row=\"1\" text=\"No\"/><Cell row=\"1\" col=\"1\" tooltiptext=\"CUSTOMERNAME\" text=\"고객명\"/><Cell row=\"1\" col=\"2\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"3\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"4\" tooltiptext=\"OSPDAY04AMOUNT\" text=\"금액\"/><Cell row=\"1\" col=\"5\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"6\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"7\" tooltiptext=\"OSPDAY04AMOUNT\" text=\"금액\"/><Cell row=\"1\" col=\"8\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"9\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"10\" tooltiptext=\"OSPDAY04AMOUNT\" text=\"금액\"/><Cell row=\"1\" col=\"11\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"12\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"13\" tooltiptext=\"OSPDAY04AMOUNT\" text=\"금액\"/></Band><Band id=\"body\"><Cell cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CUSTOMERNAME\" textAlign=\"center\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:PLANQTY_PNL\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"3\" text=\"bind:PLANQTY_PCS\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"4\" text=\"bind:PLANQTY_AMOUNT\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"5\" text=\"bind:INPUTQTY_PNL\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"6\" text=\"bind:INPUTQTY_PCS\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"7\" text=\"bind:INPUTQTY_AMOUNT\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"8\" text=\"bind:OVERINPUTQTY_PNL\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"9\" text=\"bind:OVERINPUTQTY_PCS\" maskeditformat=\"###,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:OVERINPUTQTY_AMOUNT\" maskeditformat=\"###,###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"11\" displaytype=\"normal\" maskeditformat=\"###,##0.00\" maskeditpostfixtext=\"%\" textAlign=\"right\" expr=\"nexacro.round((INPUTQTY_PNL /PLANQTY_PNL-1) *100, 2) + &apos;%&apos;== &quot;Infinity%&quot;?&quot;&quot;:nexacro.round((INPUTQTY_PNL /PLANQTY_PNL-1) *100, 2) + &apos;%&apos;\"/><Cell col=\"12\" maskeditformat=\"###,##0.00\" maskeditpostfixtext=\"%\" displaytype=\"normal\" textAlign=\"right\" expr=\"nexacro.round((INPUTQTY_PCS /PLANQTY_PCS-1) *100, 2) + &apos;%&apos;== &quot;Infinity%&quot;?&quot;&quot;:nexacro.round((INPUTQTY_PCS /PLANQTY_PCS-1) *100, 2) + &apos;%&apos;\"/><Cell col=\"13\" textAlign=\"right\" displaytype=\"normal\" maskeditformat=\"###,##0.00\" maskeditpostfixtext=\"%\" expr=\"nexacro.round((INPUTQTY_AMOUNT /PLANQTY_AMOUNT-1) *100, 2) + &apos;%&apos;== &quot;Infinity%&quot;?&quot;&quot;:nexacro.round((INPUTQTY_AMOUNT /PLANQTY_AMOUNT-1) *100, 2) + &apos;%&apos;\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\" tooltiptext=\"TOTALAMOUNT\"/><Cell col=\"2\" expr=\"dataset.getSum(&quot;PLANQTY_PNL&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"3\" expr=\"dataset.getSum(&quot;PLANQTY_PCS&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"4\" expr=\"dataset.getSum(&quot;PLANQTY_AMOUNT&quot;)\" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"5\" expr=\"dataset.getSum(&quot;INPUTQTY_PNL&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"6\" expr=\"dataset.getSum(&quot;INPUTQTY_PCS&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"7\" expr=\"dataset.getSum(&quot;INPUTQTY_AMOUNT&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"8\" expr=\"dataset.getSum(&quot;OVERINPUTQTY_PNL&quot;)\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"9\" expr=\"dataset.getSum(&quot;OVERINPUTQTY_PCS&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"10\" expr=\"dataset.getSum(&quot;OVERINPUTQTY_AMOUNT&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"11\" expr=\"nexacro.round((dataset.getSum(&quot;INPUTQTY_PNL&quot;) /dataset.getSum(&quot;PLANQTY_PNL&quot;) -1) *100, 2) + &apos;%&apos;== &quot;NaN%&quot;?&quot;&quot;:nexacro.round((dataset.getSum(&quot;INPUTQTY_PNL&quot;) /dataset.getSum(&quot;PLANQTY_PNL&quot;) -1) *100, 2) + &apos;%&apos;\"/><Cell col=\"12\" expr=\"nexacro.round((dataset.getSum(&quot;INPUTQTY_PCS&quot;) /dataset.getSum(&quot;PLANQTY_PCS&quot;) -1) *100, 2) + &apos;%&apos;== &quot;NaN%&quot;?&quot;&quot;:nexacro.round((dataset.getSum(&quot;INPUTQTY_PCS&quot;) /dataset.getSum(&quot;PLANQTY_PCS&quot;) -1) *100, 2) + &apos;%&apos;\"/><Cell col=\"13\" expr=\"nexacro.round((dataset.getSum(&quot;INPUTQTY_AMOUNT&quot;) /dataset.getSum(&quot;PLANQTY_AMOUNT&quot;) -1) *100, 2) + &apos;%&apos;== &quot;NaN%&quot;?&quot;&quot;:nexacro.round((dataset.getSum(&quot;INPUTQTY_AMOUNT&quot;) /dataset.getSum(&quot;PLANQTY_AMOUNT&quot;) -1) *100, 2) + &apos;%&apos;\"/></Band></Format></Formats>");
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

            obj = new BindItem("item8","tab_search.Tabpage1.form.cbo_PRODUCTIONTYPE","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab_search.Tabpage1.form.cbo_LOTINPUTTYPE","value","ds_search","LOTINPUTTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab_search.Tabpage1.form.cbo_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab_search.Tabpage1.form.edt_PRODUCTDEFNAME","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM01300M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01300M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM01300M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 투입율 현황 조회
         * 파일명 		: PCM01300M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2021.3.24
         *
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.3.24	박대호   	최초작성
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
        	case 0 : this.GetInputLotRateByInputDate();
        		break;
        	case 1 : this.GetInputLotRateByProduct();
        		break;
        	case 2 : this.GetInputLotRateByCustomer();
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
        	this.fn_initDatePicker();
        	this.fn_initCombo();
        	this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
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
        			break;
         		}
        		case "selectInputLotRateByInputDate" :
        		{
        			this.sleep(100);
        			this.GetInputDateSummary();
        			break;
        		}
        		case "selectInputLotRateByInputDateSummaryByLotInputType" :
        		{
        			this.sleep(100);
        			this.GetInputDateSummaryByProduct(0);
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

        	if(sPopupId == "POPUP_PRODUCTDEFID")
        	{//PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME
        		this.setProduct_ProdVersion(rtn, this.ds_cbo_ProdVersion, this.ds_search, "B");
        		this.ds_search.setColumn(0,"PRODUCTDEFID",rtn[0]);
        		this.ds_search.setColumn(0,"PRODUCTDEFNAME",rtn[2]);
        		this.ds_search.setColumn(0,"PRODUCTDEFVERSION",rtn[1]);
        	}
        };

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
        	this.ds_cbo_ProdVersion.deleteAll();
        	this.AddAll(this.ds_cbo_ProdVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");
        	this.ds_search.setColumn(0, "PRODUCTDEFID", "");
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

        /*
         *	투입일 탭 투입율현황 조회
         */
        this.GetInputLotRateByInputDate = function ()
        {
        	//투입율현황
        	this.ds_inputRateStatus.clearData();

        	if(this.fn_searchValidate() == false) return;

        	var sSvcID 			= "selectInputLotRateByInputDate";
        	var sController 	= "/pcm01300/selectInputLotRateByInputDate.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_inputRateStatus=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        }
        /*
         *	투입일 탭 SUMMARY 조회
         */
        this.GetInputDateSummary = function ()
        {
        	this.ds_inputDaySummary.clearData();
        	//SUMMARY
         	if(this.fn_searchValidate() == false) return;

         	var sSvcID 			= "selectInputLotRateByInputDateSummaryByLotInputType";
         	var sController 	= "/pcm01300/selectInputLotRateByInputDateSummaryByLotInputType.do";
         	var sInDatasets 	= "INPUT=ds_search";
         	var sOutDatasets 	= "ds_inputDaySummary=output";
         	var sArgs 			= "";
         	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };
        /*
         *	일자별 상세내역 조회
         */
        this.GetInputDateSummaryByProduct = function (rowNo)
        {
         	this.ds_inputDaySummaryByProduct.clearData();

        	this.ds_search.setColumn(0,"INPUTDAY", this.ds_inputRateStatus.getColumn(rowNo, "INPUTDAY"));
        	this.ds_search.setColumn(0,"LOWLOTINPUTTYPECODE",this.ds_inputRateStatus.getColumn(rowNo, "LOTINPUTTYPECODE"));
        	this.ds_search.setColumn(0,"LOWPRODUCTIONTYPECODE",this.ds_inputRateStatus.getColumn(rowNo, "PRODUCTIONTYPECODE"));

         	if(this.fn_searchValidate() == false) return;

         	var sSvcID 			= "selectInputLotRateByInputDateSummaryByProduct";
         	var sController 	= "/pcm01300/selectInputLotRateByInputDateSummaryByProduct.do";
         	var sInDatasets 	= "INPUT=ds_search";
         	var sOutDatasets 	= "ds_inputDaySummaryByProduct=output";
         	var sArgs 			= "";
         	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         *	품목별 투입율 탭 조회
         */
        this.GetInputLotRateByProduct = function ()
        {
         	this.ds_inputDaySummaryByProduct.clearData();

         	if(this.fn_searchValidate() == false) return;

         	var sSvcID 			= "selectInputLotRateByProduct";
         	var sController 	= "/pcm01300/selectInputLotRateByProduct.do";
         	var sInDatasets 	= "INPUT=ds_search";
         	var sOutDatasets 	= "ds_inputLotRateByProduct=output";
         	var sArgs 			= "";
         	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         *	고객별 투입율 탭 조회
         */
        this.GetInputLotRateByCustomer = function ()
        {
         	this.ds_inputLotRateByCustomer.clearData();

         	if(this.fn_searchValidate() == false) return;

         	var sSvcID 			= "selectInputLotRateByCustomer";
         	var sController 	= "/pcm01300/selectInputLotRateByCustomer.do";
         	var sInDatasets 	= "INPUT=ds_search";
         	var sOutDatasets 	= "ds_inputLotRateByCustomer=output";
         	var sArgs 			= "";
         	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        /*
         *	기능 : 기간 콤보박스 변경시
         */
        this.tab_search_Tabpage1_cboPeriodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM")this.fn_setDate(e.postvalue);
        };



        this.div_work_tab_Main_onchanged = function(obj,e)
        {
        	switch(e.postindex) {
        	case 0:
        		this.ds_search.setColumn(0,"PRODUCTDIVISION","Product");
        		this.tab_search.Tabpage1.form.cbo_PRODUCTDIVISION.set_enable(false);
        		this.GetInputLotRateByInputDate();
        		break;
        	case 1:
        		this.ds_search.setColumn(0,"PRODUCTDIVISION","Product");
        		this.tab_search.Tabpage1.form.cbo_PRODUCTDIVISION.set_enable(false);
        		this.GetInputLotRateByProduct();
        		break;
        	case 2:
        		this.tab_search.Tabpage1.form.cbo_PRODUCTDIVISION.set_enable(true);
        		this.GetInputLotRateByCustomer();
        		break;
        	default:
        	}
        };


        this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	var oArg = {};

        	if (this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value != "")
        	{
        		oArg.arg_type        = "BA";
        	}
        	else
        	{
        		oArg.arg_type        = "B";
        	}
        	oArg.arg_popupCd     = "P00160";
        	oArg.arg_popupNm     = "품목 선택";
        	oArg.arg_rtnCols     = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME";
        	oArg.arg_paramCols   = "P_POPTYPE";
        	oArg.arg_paramValues = "PRODUCTDEFINITION";
        	oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value;
        	this.gfn_openPopup( "POPUP_PRODUCTDEFID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };

        /*
         *	기능 : 투입현황 선택 변경 시
         */
        this.ds_inputRateStatus_onrowposchanged = function(obj,e)
        {
        	if(this.ds_inputRateStatus.getRowCount() > 0)
        	{
        		this.GetInputDateSummaryByProduct(e.newrow);
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tabpage1.form.cal_STARTDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cal_ENDDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cbo_PERIODTYPE.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cboPeriodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_work.form.tab_Main.addEventHandler("onchanged",this.div_work_tab_Main_onchanged,this);
            this.ds_inputRateStatus.addEventHandler("onrowposchanged",this.ds_inputRateStatus_onrowposchanged,this);
        };
        this.loadIncludeScript("PCM01300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
