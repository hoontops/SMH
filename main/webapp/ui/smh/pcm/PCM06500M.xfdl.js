(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM06500M");
            this.set_titletext("Window Time Lot 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,757);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WIPPROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("ds_TimeLotList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENTINBOUNDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALLEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVE_WAITING_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVE_WAITING_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKIN_WAITING_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKIN_WAITING_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVE_EQUIPMENT\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUT_WAITING_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUT_WAITING_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTART_EQUIPMENT\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_WAITING_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_WAITING_MINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"WIPPROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"FROMUSERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"FROMPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"FROMPROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"TOUSERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"TOPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOPROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ELAPSEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SETTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WTIMELIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"OCCURETIME\" type=\"STRING\" size=\"256\"/><Column id=\"WTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WTIMETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_grdMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"GRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GRD_NM\">grdTimeLotList</Col><Col id=\"MENU_NM\">Lot 이력조회</Col><Col id=\"FUNC\">mfn_gotoLot</Col><Col id=\"DICTIONARYID\">MENU_PG-SG-0340</Col></Row><Row><Col id=\"MENU_NM\">품목 상세 현황</Col><Col id=\"FUNC\">mfn_gotoItem</Col><Col id=\"GRD_NM\">grdTimeLotList</Col><Col id=\"DICTIONARYID\">MENU_PG-SG-0625</Col></Row><Row><Col id=\"GRD_NM\">grdTimeLotList</Col><Col id=\"MENU_NM\">Lot Defect Map 조회</Col><Col id=\"FUNC\">mfn_gotoDefectMap</Col><Col id=\"DICTIONARYID\">MENU_DEFECTMAPBYLOT</Col></Row></Rows>");
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
            obj.set_taborder("16");
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
            obj.set_taborder("17");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","85",null,"20","42",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"85","22","20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
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
            obj.set_taborder("19");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFNAME","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"0","15","290","5",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","0","15","290",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"355","45","20","96",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","381","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","375","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","375","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_hotkey("F2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTIONTYPE","0","285","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTIONTYPE","108","285","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","96",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","96",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
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
            obj.set_taborder("28");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("C6A85700415446D89213292978260263");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PERIODTYPE","15","60","88","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
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

            obj = new Combo("cbo_PRODUCTDIVISION","108","310","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDIVISION","0","310","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDIVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCUSTOMER","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("고객");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CUSTOMER");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_CUSTOMER","108","160",null,"20","42",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_CUSTOMER",null,"160","22","20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staLOTID","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("33");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","108","185",null,"20","42",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_LOTID",null,"185","22","20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staAREAID","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("35");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID","108","210",null,"20","42",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_AREAID",null,"210","22","20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPROCSEGMENT","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("37");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("OPERATION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PROCSEGMENT","108","235",null,"20","42",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PROCSEGMENT",null,"235","22","20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staRTRSHT","0","335","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("39");
            obj.set_text("RTR/SHT");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_RTRSHT","108","335","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_codecolumn("C,RTRSHT,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staWIPPROCESSSTATE","0","260","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("40");
            obj.set_text("작업상태");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_WIPPROCESSSTATE","108","260","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_codecolumn("C,WipProcessState,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
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

            obj = new Div("div_work","300","47",null,null,"20","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","161","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("Window Time Lot 조회");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("WINDOWTIMELOTSEARCH");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grdTimeLotList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_TimeLotList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"45\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"51\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"양산구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"품목코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"4\" rowspan=\"2\" text=\"Lot No.\"/><Cell col=\"5\" rowspan=\"2\" text=\"From 공정수순\" wordWrap=\"char\"/><Cell col=\"6\" rowspan=\"2\" text=\"From 공정명\" wordWrap=\"char\"/><Cell col=\"7\" rowspan=\"2\" text=\"From 공정진행상태\" wordWrap=\"char\"/><Cell col=\"8\" rowspan=\"2\" text=\"TO 공정수순\" wordWrap=\"char\"/><Cell col=\"9\" rowspan=\"2\" text=\"TO 공정명\" wordWrap=\"char\"/><Cell col=\"10\" rowspan=\"2\" text=\"TO 공정진행상태\" wordWrap=\"char\"/><Cell col=\"11\" rowspan=\"2\" text=\"시작시간\"/><Cell col=\"12\" rowspan=\"2\" text=\"기준시간(분)\"/><Cell col=\"13\" rowspan=\"2\" text=\"제한시간\"/><Cell col=\"14\" rowspan=\"2\" text=\"실행시간\"/><Cell col=\"15\" rowspan=\"2\" text=\"실행시간(분)\"/><Cell col=\"16\" rowspan=\"2\" text=\"잔여시간(분)\"/><Cell col=\"17\" rowspan=\"2\" text=\"W-Type\"/><Cell col=\"18\" rowspan=\"2\" text=\"작업장\"/><Cell col=\"19\" rowspan=\"2\" text=\"Roll/Sheet\"/><Cell col=\"20\" rowspan=\"2\" text=\"UOM\"/><Cell col=\"21\" colspan=\"3\" text=\"재공계\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPQTY\"/><Cell col=\"24\" rowspan=\"2\" text=\"공정 입고일\"/><Cell col=\"25\" rowspan=\"2\" text=\"공정L/T(일)\"/><Cell col=\"26\" rowspan=\"2\" text=\"투입일자\"/><Cell col=\"27\" rowspan=\"2\" text=\"전제L/T(일)\"/><Cell col=\"28\" rowspan=\"2\" text=\"납기일\"/><Cell col=\"29\" rowspan=\"2\" text=\"잔여일수\"/><Cell row=\"1\" col=\"21\" text=\"수량\"/><Cell row=\"1\" col=\"22\" text=\"수량(PNL)\"/><Cell row=\"1\" col=\"23\" text=\"MM\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTTYPE\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:LOTID\"/><Cell col=\"5\" text=\"bind:FROMUSERSEQUENCE\"/><Cell col=\"6\" text=\"bind:FROMPROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:FROMPROCESSSTATE\"/><Cell col=\"8\" text=\"bind:TOUSERSEQUENCE\"/><Cell col=\"9\" text=\"bind:TOPROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:TOPROCESSSTATE\"/><Cell col=\"11\" text=\"bind:SETTIME\" tooltiptext=\"STARTTIME\"/><Cell col=\"12\" text=\"bind:WTIMELIMIT\" tooltiptext=\"STDTIMEPERMINUTE\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:OCCURETIME\" tooltiptext=\"LIMITTIME\"/><Cell col=\"14\" text=\"bind:WTIME\" tooltiptext=\"EXECUTETIME\"/><Cell col=\"15\" text=\"bind:ELAPSEDTIME\" tooltiptext=\"EXECUTETIMEPERMINUTE\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"16\" text=\"bind:LEFTTIME\" tooltiptext=\"LEFTTIME_MINUTE\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"17\" text=\"bind:WTIMETYPE\"/><Cell col=\"18\" text=\"bind:AREANAME\"/><Cell col=\"19\" text=\"bind:RTRSHT\"/><Cell col=\"20\" text=\"bind:UNIT\" tooltiptext=\"UOM\"/><Cell col=\"21\" text=\"bind:QTY\" maskeditformat=\"#,##0\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"22\" text=\"bind:PANELQTY\" maskeditformat=\"#,##0\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"23\" text=\"bind:MM\" maskeditformat=\"#,##0.00\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"24\" text=\"bind:SEGMENTINBOUNDTIME\"/><Cell col=\"25\" text=\"bind:SEGMENT_LEADTIME\" maskeditformat=\"#,##0.##\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"26\" text=\"bind:LOTSTARTDATE\" tooltiptext=\"INPUTDATE\"/><Cell col=\"27\" text=\"bind:TOTALLEADTIME\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"28\" text=\"bind:DUEDATE\"/><Cell col=\"29\" text=\"bind:LEFTDATE\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_TimeLotList","sta_subTitle:5","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdTimeLotList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);
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

            obj = new BindItem("itemPLANTID","tab_search.Tabpage1.form.cbo_PLANTID","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemCUSTOMERNAME","tab_search.Tabpage1.form.edt_CUSTOMER","value","ds_search","CUSTOMERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemLOTID","tab_search.Tabpage1.form.edt_LOTID","value","ds_search","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemAREANAME","tab_search.Tabpage1.form.edt_AREAID","value","ds_search","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPROCESSSEGMENTNAME","tab_search.Tabpage1.form.edt_PROCSEGMENT","value","ds_search","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemWIPPROCESSSTATE","tab_search.Tabpage1.form.cbo_WIPPROCESSSTATE","value","ds_search","WIPPROCESSSTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemRTRSHT","tab_search.Tabpage1.form.cbo_RTRSHT","value","ds_search","RTRSHT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM06500M.xfdl","lib::lib_base.xjs");
        this.addIncludeScript("PCM06500M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM06500M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM06500M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		:
         * 파일명 		: PCM06500M.xfdl
         * 작성자 		: 김애리
         * 작성일 		: 2021.6.15
         * AS-IS		: LotWindowTime
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.6.15	김애리   	최초작성
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
        	this.ds_search.setColumn(0, "PLANTID",this.gf_getSiteType());
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");
        	this.ds_search.setColumn(0, "LANGUAGETYPE",this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "USERID", this.gf_getUserId());

        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.GetLotList();
        };

        this.fn_searchValidate = function ()
        {
        	var component = this.tab_search.Tabpage1;
        	var strColIdList = "cbo_PLANTID";
        	var strColNmList = "SITE";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	return rtn;
        };

        this.GetLotList = function ()
        {
        	if(this.fn_searchValidate() == false) return;

        	if(this.ds_search.getColumn(0,"AREANAME") == "" ) this.ds_search.setColumn(0,"AREAID","");

        	var sSvcID = "selectWindowTimeLotList";
        	var sController = "/pcm06500/selectWindowTimeLotList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_TimeLotList=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
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
        			this.ds_search.setColumn(0,"PERIODTYPE","THISWEEK"); //fn_initDatePicker 에서 안되서 마지막 콤보 가져올 때....
        			break;
        		}
        		case "selectEcmLookupValuesVList2ds_COwnTypeALL" :
        		{
        			this.ds_searchCopy.copyData(this.ds_search);
        			break;
        		}
        		case "selectWIPList" :
        		{
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
        	} else if (sPopupId == "SEARCH_LOTID")
        	{//LOTID
        		this.ds_search.setColumn(0,"LOTID",rtn.join(","));
        	} else if (sPopupId == "SEARCH_AREA")
        	{//AREAID|AREANAME
        		var arrCode = [];
        		var arrName = [];
        		for(var i=0; i<rtn.length; i++)
        		{
        			var colArray = rtn[i];
        			arrCode.push(colArray[0]);
        			arrName.push(colArray[1]);
        		}
        		this.ds_search.setColumn(0,"AREAID",arrCode.join(","));
        		this.ds_search.setColumn(0,"AREANAME",arrName.join(","));

        	} else if (sPopupId == "SEARCH_CUSTOMER")
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
        }
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

        this.mfn_OpenProcSegment = function ()
        {
        	var popupId = "SEARCH_SEGMENT";
        	var oArg = {};

        	oArg.plantID = this.pfn_allTrim(this.ds_search.getColumn(0,"PLANTID"));
        	oArg.process = this.pfn_allTrim(this.ds_search.getColumn(0,"PROCESSSEGMENTNAME"));
        	oArg.ds_result = this.ds_Process;

        	this.gfn_openPopup(popupId,"pcm::PCM00800P.xfdl",oArg,"width=800,height=600");
        };

        /*
         *	Locking 현황 Context Menu : Lot 이력조회
         */
        this.mfn_gotoLot = function ()
        {
        	var mRow = this.ds_TimeLotList.rowcount == 1 ? 0 : this.ds_TimeLotList.rowposition;

        	var sUrl = "pcm::PCM03100M.xfdl";
        	// arryList 타입전달 예)
        	var objArgs = {
        		menuName : "LotHistory",
        		objList : ["LOTID", this.ds_TimeLotList.getColumn(mRow, "LOTID")]
        	};

        	var bReload = true;
        	this.gfn_goPage(sUrl, objArgs, bReload);
        };

        /*
         *	Context Menu : 품목 상세 현황
         */
        this.mfn_gotoItem = function ()
        {
        	var mRow = this.ds_TimeLotList.rowcount == 1 ? 0 : this.ds_TimeLotList.rowposition;

        	var sUrl = "pcm::PCM05100M.xfdl";
        	// arryList 타입전달 예)
        	var objArgs = {
        		menuName : "PCM06500",
        		objList : [
        					this.ds_search.getColumn(0, "PERIODTYPE"),
        					this.ds_search.getColumn(0, "PERIOD_PERIODFR"),//조회시작일
        					this.ds_search.getColumn(0, "PERIOD_PERIODTO"),//조회종료일
        					this.ds_TimeLotList.getColumn(mRow, "PRODUCTDEFID"),//품목코드
        					this.ds_TimeLotList.getColumn(mRow, "PRODUCTDEFNAME"),//품목명
        					this.ds_TimeLotList.getColumn(mRow, "PRODUCTDEFVERSION")//Rev.
        					]
        	};

        	var bReload = true;
        	this.gfn_goPage(sUrl, objArgs, bReload);
        };

        this.mfn_gotoDefectMap = function ()
        {
        	var mRow = this.ds_TimeLotList.rowcount == 1 ? 0 : this.ds_TimeLotList.rowposition;
        	var sUrl = "dfm::DFM00100M.xfdl";
        	// arryList 타입전달 예)
        	var objArgs = {
        		menuName : "PCM06500M",
        		objList :  [this.SelectRow2JsonString(this.ds_TimeLotList)]
        	};

        	var bReload = true;
        	this.gfn_goPage(sUrl, objArgs, bReload);
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

        this.tab_search_Tabpage1_btn_CUSTOMER_onclick = function(obj,e)
        {
        	var popupId = "SEARCH_CUSTOMER";
        	var oArg = {};
        	oArg.arg_type = "CA";
        	oArg.arg_popupCd = "P00042";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "CUSTOMERID|CUSTOMERNAME";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "";

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };

        this.ds_search_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "CUSTOMERNAME" && e.newvalue == "") this.ds_search.setColumn(0,"CUSTOMERID","");
        	if(e.columnid == "AREANAME" && e.newvalue == "") this.ds_search.setColumn(0,"AREAID","");
        	if(e.columnid == "PROCESSSEGMENTNAME" && e.newvalue == "") this.ds_search.setColumn(0,"PROCESSSEGMENTID","");
        };

        this.tab_search_Tabpage1_btn_LOTID_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"LOTID",this.tab_search.Tabpage1.form.edt_LOTID.value);
        	this.pfn_openPopup_LOTID("SEARCH_LOTID", this.ds_search.getColumn(0,"LOTID"),"CA");
        };

        this.tab_search_Tabpage1_btn_AREAID_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"AREAID",this.tab_search.Tabpage1.form.edt_AREAID.value);
        	var txtSearchStr = "";
        	if(!this.nfn_isNull(this.ds_search.getColumn(0,"AREAID")))
        		txtSearchStr = "AREAIDNAME=" + this.ds_search.getColumn(0,"AREAID");

        	var popupId = "SEARCH_AREA";
        	var oArg = {};
        	oArg.arg_type = "CA";
        	oArg.arg_popupCd = "P00267";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "AREAID|AREANAME";
        	oArg.arg_paramCols = "PLANTID|LANGUAGETYPE";
        	oArg.arg_paramValues = this.gf_getSiteType() + "|" + this.gf_getLanguageType();
        	oArg.arg_searchStr = txtSearchStr;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };


        this.tab_search_Tabpage1_btn_PROCSEGMENT_onclick = function(obj,e)
        {
        	this.mfn_OpenProcSegment();
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
            this.tab_search.Tabpage1.form.btn_CUSTOMER.addEventHandler("onclick",this.tab_search_Tabpage1_btn_CUSTOMER_onclick,this);
            this.tab_search.Tabpage1.form.btn_LOTID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_LOTID_onclick,this);
            this.tab_search.Tabpage1.form.btn_AREAID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_AREAID_onclick,this);
            this.tab_search.Tabpage1.form.btn_PROCSEGMENT.addEventHandler("onclick",this.tab_search_Tabpage1_btn_PROCSEGMENT_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
            this.ds_TimeLotList.addEventHandler("cancolumnchange",this.ds_WIP_cancolumnchange,this);
        };
        this.loadIncludeScript("PCM06500M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
