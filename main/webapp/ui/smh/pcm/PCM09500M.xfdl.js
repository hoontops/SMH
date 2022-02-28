(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM09500M");
            this.set_titletext("재공 실사 조정 처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UOM\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_WIP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSID_R\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTROUTING\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHSTACK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_TargetAll", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSID_R\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTROUTING\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHSTACK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_TargetLot", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSID_R\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTROUTING\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHSTACK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_DefectList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"IMGBUTTONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_UOM", this);
            obj._setContents("<ColumnInfo><Column id=\"UOMDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UOMDEFNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ReasonConsumableList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ReasonConsumableLot", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ReasonProcessSegment", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("sta_title","30","16","155","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("재공 실사 조정 처리");
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

            obj = new Tab("tab_search","0","64","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("staPLANTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staLOTID","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staISHOLD","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("보류 여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISHOLD");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_LOTID",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staISLOCKING","0","260","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("Locking 여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISLOCKING");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_ISHOLD","108","235","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_ISLOCKING","108","260","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFID","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","60",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"60","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFVERSION","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFNAME","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"0","15","290","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","0","15","290",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"280","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","306","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","300","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","300","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_hotkey("F2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staAREAID","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_AREAID",null,"135","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTIONTYPE","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
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

            obj = new Static("staOWNTYPE","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_text("자사/외주구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("48DE73F771EB464BBB67974147C9F0B6");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_OWNTYPE","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,OwnType,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDIVISION","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDIVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDIVISION","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdWIP","0","34",null,"38%","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_WIP");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"30\" band=\"left\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" colspan=\"13\" text=\"제공현황\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPLIST\"/><Cell col=\"15\" colspan=\"2\" text=\"재공계\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPQTY\"/><Cell col=\"17\" colspan=\"2\" text=\"인수대기\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPRECEIVEQTY\"/><Cell col=\"19\" colspan=\"2\" text=\"작업시작\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPSTARTQTY\"/><Cell col=\"21\" colspan=\"2\" text=\"작업완료\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPSENDQTY\"/><Cell col=\"23\" colspan=\"2\" text=\"인계대기\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPSENDQTY\"/><Cell col=\"25\" colspan=\"4\" text=\"재공현황\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPLIST\"/><Cell row=\"1\" col=\"2\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell row=\"1\" col=\"3\" text=\"품목코드\"/><Cell row=\"1\" col=\"4\" text=\"Rev.\"/><Cell row=\"1\" col=\"5\" text=\"품목명\"/><Cell row=\"1\" col=\"6\" text=\"공정수순\"/><Cell row=\"1\" col=\"7\" text=\"공정명\"/><Cell row=\"1\" col=\"8\" text=\"SIte ID\"/><Cell row=\"1\" col=\"9\" text=\"작업장\"/><Cell row=\"1\" col=\"10\" text=\"Roll/Sheet\"/><Cell row=\"1\" col=\"11\" text=\"Lot No.\"/><Cell row=\"1\" col=\"12\" text=\"단위\"/><Cell row=\"1\" col=\"13\" text=\"Locking 여부\"/><Cell row=\"1\" col=\"14\" text=\"보류 여부\"/><Cell row=\"1\" col=\"15\" text=\"수량\"/><Cell row=\"1\" col=\"16\" text=\"수량(PNL)\"/><Cell row=\"1\" col=\"17\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"18\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"19\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"20\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"21\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"22\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"23\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"24\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"25\" text=\"리드타임\"/><Cell row=\"1\" col=\"26\" text=\"LOT 투입일\"/><Cell row=\"1\" col=\"27\" text=\"납기일자\"/><Cell row=\"1\" col=\"28\" text=\"잔여일수\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:LOTTYPE\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:USERSEQUENCE\"/><Cell col=\"7\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:PLANTID\"/><Cell col=\"9\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:RTRSHT\"/><Cell col=\"11\" text=\"bind:LOTID\"/><Cell col=\"12\" text=\"bind:UNIT\"/><Cell col=\"13\" text=\"bind:ISLOCKING\"/><Cell col=\"14\" text=\"bind:ISHOLD\"/><Cell col=\"15\" text=\"bind:QTY\" textAlign=\"right\"/><Cell col=\"16\" textAlign=\"right\" text=\"bind:PANELQTY\"/><Cell col=\"17\" text=\"bind:RECEIVEPCSQTY\" textAlign=\"right\"/><Cell col=\"18\" text=\"bind:RECEIVEPANELQTY\" textAlign=\"right\"/><Cell col=\"19\" text=\"bind:WORKSTARTPCSQTY\" textAlign=\"right\"/><Cell col=\"20\" text=\"bind:WORKSTARTPANELQTY\" textAlign=\"right\"/><Cell col=\"21\" text=\"bind:WORKENDPCSQTY\" textAlign=\"right\"/><Cell col=\"22\" text=\"bind:WORKENDPANELQTY\" textAlign=\"right\"/><Cell col=\"23\" text=\"bind:SENDPCSQTY\" textAlign=\"right\"/><Cell col=\"24\" text=\"bind:SENDPANELQTY\" textAlign=\"right\"/><Cell col=\"25\" text=\"bind:LEADTIME\" textAlign=\"right\"/><Cell col=\"26\" text=\"bind:LOTINPUTDATE\"/><Cell col=\"27\" text=\"bind:DELIVERYDATE\"/><Cell col=\"28\" text=\"bind:LEFTDATE\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tabDefect","0","grdWIP:19",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tabDefect);
            obj.set_text("완불처리");
            this.div_work.form.tabDefect.addChild(obj.name, obj);

            obj = new Div("divDefect","0","10",null,"32","0",null,null,null,null,null,this.div_work.form.tabDefect.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.form.tabDefect.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staDefectCode","0","0","12.55%","31",null,null,null,null,null,null,this.div_work.form.tabDefect.Tabpage1.form.divDefect.form);
            obj.set_taborder("0");
            obj.set_text("불량 코드");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tabDefect.Tabpage1.form.divDefect.addChild(obj.name, obj);

            obj = new Button("btn_DefectCode","31.38%","5","22","20",null,null,null,null,null,null,this.div_work.form.tabDefect.Tabpage1.form.divDefect.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tabDefect.Tabpage1.form.divDefect.addChild(obj.name, obj);

            obj = new Edit("edt_DefectCode","staDefectCode:5","5",null,"20","btn_DefectCode:0",null,null,null,null,null,this.div_work.form.tabDefect.Tabpage1.form.divDefect.form);
            obj.set_taborder("1");
            this.div_work.form.tabDefect.Tabpage1.form.divDefect.addChild(obj.name, obj);

            obj = new Static("staCREATEDTIME","btn_DefectCode:10","0","12.03%","31",null,null,null,null,null,null,this.div_work.form.tabDefect.Tabpage1.form.divDefect.form);
            obj.set_taborder("3");
            obj.set_text("처리일시");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tabDefect.Tabpage1.form.divDefect.addChild(obj.name, obj);

            obj = new Div("div_calendar","staCREATEDTIME:5","5","135","21",null,null,null,null,null,null,this.div_work.form.tabDefect.Tabpage1.form.divDefect.form);
            obj.set_taborder("4");
            obj.set_url("common::com_calendar.xfdl");
            this.div_work.form.tabDefect.Tabpage1.form.divDefect.addChild(obj.name, obj);

            obj = new Static("staTargetAll","0","42",null,"34","0",null,null,null,null,null,this.div_work.form.tabDefect.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("불량처리 대상");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("TARGETDEFECT");
            this.div_work.form.tabDefect.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grdTargetAll","0","76",null,null,"0","0",null,null,null,null,this.div_work.form.tabDefect.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_TargetAll");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"30\" band=\"left\"/><Column size=\"150\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Lot No.\"/><Cell col=\"3\" text=\"공정수순\"/><Cell col=\"4\" text=\"작업장\"/><Cell col=\"5\" text=\"수량\"/><Cell col=\"6\" text=\"수량(PNL)\"/><Cell col=\"7\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell col=\"8\" text=\"품목코드\"/><Cell col=\"9\" text=\"Rev.\"/><Cell col=\"10\" text=\"품목명\"/><Cell col=\"11\" text=\"공정명\"/><Cell col=\"12\" text=\"Site ID\"/><Cell col=\"13\" text=\"Roll/Sheet\"/><Cell col=\"14\" text=\"단위\"/><Cell col=\"15\" text=\"Locking 여부\"/><Cell col=\"16\" text=\"보류 여부\"/><Cell col=\"17\" text=\"리드타임\"/><Cell col=\"18\" text=\"LOT 투입일\"/><Cell col=\"19\" text=\"납기일자\"/><Cell col=\"20\" text=\"잔여일수\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:LOTID\"/><Cell col=\"3\" text=\"bind:USERSEQUENCE\"/><Cell col=\"4\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:QTY\" maskeditformat=\"#,###\" displaytype=\"mask\"/><Cell col=\"6\" text=\"bind:PANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"7\" text=\"bind:LOTTYPE\"/><Cell col=\"8\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"9\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"10\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:PLANTID\"/><Cell col=\"13\" text=\"bind:RTRSHT\"/><Cell col=\"14\" text=\"bind:UNIT\"/><Cell col=\"15\" text=\"bind:ISLOCKING\"/><Cell col=\"16\" text=\"bind:ISHOLD\"/><Cell col=\"17\" text=\"bind:LEADTIME\"/><Cell col=\"18\" text=\"bind:LOTINPUTDATE\"/><Cell col=\"19\" text=\"bind:DELIVERYDATE\"/><Cell col=\"20\" text=\"bind:LEFTDATE\"/></Band></Format></Formats>");
            this.div_work.form.tabDefect.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tabDefect);
            obj.set_text("LOT별 불량");
            this.div_work.form.tabDefect.addChild(obj.name, obj);

            obj = new Div("divUom","0","10",null,"32","0",null,null,null,null,null,this.div_work.form.tabDefect.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.form.tabDefect.Tabpage2.addChild(obj.name, obj);

            obj = new Static("staUom","0","0","12.55%","31",null,null,null,null,null,null,this.div_work.form.tabDefect.Tabpage2.form.divUom.form);
            obj.set_taborder("0");
            obj.set_text("UOM");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tabDefect.Tabpage2.form.divUom.addChild(obj.name, obj);

            obj = new Combo("cbo_Uom","staUom:5","5","200","20",null,null,null,null,null,null,this.div_work.form.tabDefect.Tabpage2.form.divUom.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_UOM");
            obj.set_codecolumn("UOMDEFID");
            obj.set_datacolumn("UOMDEFNAME");
            this.div_work.form.tabDefect.Tabpage2.form.divUom.addChild(obj.name, obj);

            obj = new Static("staCREATEDTIME","cbo_Uom:10","0","12.03%","31",null,null,null,null,null,null,this.div_work.form.tabDefect.Tabpage2.form.divUom.form);
            obj.set_taborder("2");
            obj.set_text("처리일시");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tabDefect.Tabpage2.form.divUom.addChild(obj.name, obj);

            obj = new Div("div_calendar","staCREATEDTIME:5","5","135","21",null,null,null,null,null,null,this.div_work.form.tabDefect.Tabpage2.form.divUom.form);
            obj.set_taborder("3");
            obj.set_url("common::com_calendar.xfdl");
            this.div_work.form.tabDefect.Tabpage2.form.divUom.addChild(obj.name, obj);

            obj = new Static("staTargetLot","0","42",null,"34","665",null,null,null,null,null,this.div_work.form.tabDefect.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("불량처리 대상");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabDefect.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_addRow_ds_DefectList",null,"48","29","24","29",null,null,null,null,null,this.div_work.form.tabDefect.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            obj.set_enable("false");
            this.div_work.form.tabDefect.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_DefectList",null,"48","29","24","0",null,null,null,null,null,this.div_work.form.tabDefect.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tabDefect.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grdTargetLot","0","76","293",null,null,"0",null,null,null,null,this.div_work.form.tabDefect.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_TargetLot");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"150\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Lot No.\"/><Cell col=\"3\" text=\"공정수순\"/><Cell col=\"4\" text=\"작업장\" textAlign=\"left\"/><Cell col=\"5\" text=\"수량(PCS)\"/><Cell col=\"6\" text=\"수량(PNL)\"/><Cell col=\"7\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell col=\"8\" text=\"품목코드\"/><Cell col=\"9\" text=\"Rev\"/><Cell col=\"10\" text=\"품목명\"/><Cell col=\"11\" text=\"공정명\"/><Cell col=\"12\" text=\"Site ID\"/><Cell col=\"13\" text=\"Roll/Sheet\"/><Cell col=\"14\" text=\"단위\"/><Cell col=\"15\" text=\"Locking 여부\"/><Cell col=\"16\" text=\"보류 여부\"/><Cell col=\"17\" text=\"리드타임\"/><Cell col=\"18\" text=\"LOT 투입일\"/><Cell col=\"19\" text=\"납기일자\"/><Cell col=\"20\" text=\"잔여일수\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:LOTID\"/><Cell col=\"3\" text=\"bind:USERSEQUENCE\"/><Cell col=\"4\" text=\"bind:AREANAME\"/><Cell col=\"5\" text=\"bind:QTY\"/><Cell col=\"6\" text=\"bind:PANELQTY\"/><Cell col=\"7\" text=\"bind:LOTTYPE\"/><Cell col=\"8\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"9\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"10\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:PLANTID\"/><Cell col=\"13\" text=\"bind:RTRSHT\"/><Cell col=\"14\" text=\"bind:UNIT\"/><Cell col=\"15\" text=\"bind:ISLOCKING\"/><Cell col=\"16\" text=\"bind:ISHOLD\"/><Cell col=\"17\" text=\"bind:LEADTIME\"/><Cell col=\"18\" text=\"bind:LOTINPUTDATE\"/><Cell col=\"19\" text=\"bind:DELIVERYDATE\"/><Cell col=\"20\" text=\"bind:LEFTDATE\"/></Band></Format></Formats>");
            this.div_work.form.tabDefect.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grdDefectList","grdTargetLot:10","76",null,null,"0","0",null,null,null,null,this.div_work.form.tabDefect.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_DefectList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"불량 코드\" cssclass=\"cell_point\" tooltiptext=\"DEFECTCODE\"/><Cell col=\"1\" text=\"불량코드 명\" tooltiptext=\"DEFECTNAME\"/><Cell col=\"2\" text=\"품질공정\" tooltiptext=\"QCSEGMENT\"/><Cell col=\"3\" text=\"수량(PNL)\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"수량(PCS)\" cssclass=\"cell_point\"/><Cell col=\"5\" text=\"불량율\"/><Cell col=\"6\" text=\"원인품목\" tooltiptext=\"REASONCONSUMABLEDEFID\"/><Cell col=\"7\" text=\"원인 LOTID\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell col=\"8\" text=\"원인 공정\" tooltiptext=\"REASONPROCESSSEGMENTID\"/><Cell col=\"9\" text=\"원인 작업장\" tooltiptext=\"REASONAREAID\"/><Cell col=\"10\" text=\"비고\" tooltiptext=\"DESCRIPTION\"/></Band><Band id=\"body\"><Cell text=\"bind:SEGMENT_DEFECTCODE\" textAlign=\"left\" expandshow=\"show\"/><Cell col=\"1\" text=\"bind:SEGMENT_DEFECTNAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:QCSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PNLQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0.00\" maskeditautoselect=\"true\"/><Cell col=\"4\" text=\"bind:QTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0\" maskeditautoselect=\"true\"/><Cell col=\"5\" text=\"bind:DEFECTRATE\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0.00\"/><Cell col=\"6\" text=\"bind:CONSUMABLEDEFNAME\" expandshow=\"show\"/><Cell col=\"7\" text=\"bind:REASONCONSUMABLELOTID\" combodataset=\"ds_ReasonConsumableLot\" combocodecol=\"CONSUMABLELOTID\" combodatacol=\"CONSUMABLELOTID\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"8\" text=\"bind:REASONPROCESSSEGMENTNAME\" expandshow=\"show\"/><Cell col=\"9\" text=\"bind:REASONAREANAME\"/><Cell col=\"10\" text=\"bind:DESCRIPTION\" edittype=\"normal\" textAlign=\"left\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" maskeditformat=\"#,##0.00\"/><Cell col=\"4\" maskeditformat=\"#,##0\" displaytype=\"mask\" expr=\"expr:dataset.getSum(&quot;QTY&quot;) \"/><Cell col=\"5\" expandchar=\"%\" expandsize=\"24\" maskeditformat=\"#,##0.00\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;DEFECTRATE&quot;)\" maskedittype=\"number\" maskeditpostfixtext=\" %\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band></Format></Formats>");
            this.div_work.form.tabDefect.Tabpage2.addChild(obj.name, obj);

            obj = new Static("staDefectList","grdTargetLot:10","42",null,"34","96",null,null,null,null,null,this.div_work.form.tabDefect.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("불량");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabDefect.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_suttleUp","50.42%","grdWIP:15","24","23",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_shuttleT");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_suttleDown",null,"grdWIP:15","23","24","btn_suttleUp:10",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_shuttleB");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("staWIP","0","0","89","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("재공현황");
            obj.set_tooltiptext("WIPLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_WIP","89","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_ReasonConsumableList","553","779","450","221",null,null,null,null,null,null,this);
            obj.set_text("pdv_00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ReasonConsumableList","0","0",null,null,"0","0",null,null,null,null,this.pdv_ReasonConsumableList.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_ReasonConsumableList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"106\"/><Column size=\"72\"/><Column size=\"163\"/><Column size=\"101\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자재ID\"/><Cell col=\"1\" text=\"자재버전\"/><Cell col=\"2\" text=\"자재명\"/><Cell col=\"3\" text=\"자재유형\"/></Band><Band id=\"body\"><Cell text=\"bind:LOTID\"/><Cell col=\"1\" text=\"bind:CONSUMABLEDEFVERSION\"/><Cell col=\"2\" text=\"bind:CONSUMABLEDEFNAME\"/><Cell col=\"3\" text=\"bind:MATERIALTYPE\"/></Band></Format></Formats>");
            this.pdv_ReasonConsumableList.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_ReasonProcessSegment","863","789","450","221",null,null,null,null,null,null,this);
            obj.set_text("pdv_00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ReasonProcessSegment","0","0",null,null,"0","0",null,null,null,null,this.pdv_ReasonProcessSegment.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_ReasonProcessSegment");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"88\"/><Column size=\"177\"/><Column size=\"77\"/><Column size=\"101\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공정ID\"/><Cell col=\"1\" text=\"공정명\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"작업장\"/></Band><Band id=\"body\"><Cell text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\"/><Cell col=\"3\" text=\"bind:AREANAME\"/></Band></Format></Formats>");
            this.pdv_ReasonProcessSegment.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","281","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("itemPLANTID","tab_search.Tabpage1.form.cbo_PLANTID","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemLOTID","tab_search.Tabpage1.form.edt_LOTID","value","ds_search","LOTID");
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

            obj = new BindItem("itemAREANAME","tab_search.Tabpage1.form.edt_AREAID","value","ds_search","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPRODUCTIONTYPE","tab_search.Tabpage1.form.cbo_PRODUCTIONTYPE","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPRODUCTDIVISION","tab_search.Tabpage1.form.cbo_PRODUCTDIVISION","value","ds_search","PRODUCTDIVISION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemOWNTYPE","tab_search.Tabpage1.form.cbo_OWNTYPE","value","ds_search","OWNTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemISHOLD","tab_search.Tabpage1.form.cbo_ISHOLD","value","ds_search","ISHOLD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemISLOCKING","tab_search.Tabpage1.form.cbo_ISLOCKING","value","ds_search","ISLOCKING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemSDEFECTNAME","div_work.form.tabDefect.Tabpage1.form.divDefect.form.edt_DefectCode","value","ds_search","SEGMENT_DEFECTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemUOM","div_work.form.tabDefect.Tabpage2.form.divUom.form.cbo_Uom","value","ds_search","UOM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_calendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PCM09500M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM09500M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM09500M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: LOT 불량처리
         * 파일명 		: PCM04400M.xfdl
         * 작성자 		: 김애리
         * 작성일 		: 2021.4.8
         * AS-IS		: LotDefect
         * 설  명		: LotDefect 와 같으나, 불량 처리 일시를 정해서 할 수 있음.
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.4.8	김애리   	최초작성
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
        //두번째 탭 불량 그리드
        this.Defect = {
        		pcsPnl :    0   		//기준 (PCS / PNL) 수량
        	  , SelectedLotId : "" 		//Selected Lot ID
        	  , qty : 0					//제공 수량.
         };

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
        	this.ds_TargetAll.clearData();
        	this.ds_TargetLot.clearData();
        	this.ds_DefectList.clearData();
        	this.pfn_CostomQuery(this.ds_search, this.ds_WIP, "selectWIPList");
        };

        this.fn_searchValidate = function ()
        {
        	var component = this.tab_search.Tabpage1;
        	var strColIdList = "cbo_PLANTID";
        	var strColNmList = "PLANTID";
        	return this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        };

        /*
        * 기능 : 검색 초기화
        */
        this.fn_searchClear = function(obj,e)
        {
        	this.ds_search.copyData(this.ds_searchCopy);
        };

        this.fn_save = function (obj, e)
        {
        	if(this.fn_saveValidate() == false) return;

        	if(this.div_work.form.tabDefect.tabindex == 0){

        		var createdTime = this.div_work.form.tabDefect.Tabpage1.form.divDefect.form.div_calendar.form.calStart.text + ":00";
        		this.ds_search.setColumn(0,"CREATEDTIME",createdTime);

        		var sSvcID 			= "saveDefectAll";
        		var sController 	= "/pcm04400/saveDefectAll.do";
        		var sInDatasets 	= "ds_search=ds_search ds_TargetAll=ds_TargetAll";

        	} else {
        		var createdTime = this.div_work.form.tabDefect.Tabpage2.form.divUom.form.div_calendar.form.calStart.text + ":00";
        		this.ds_search.setColumn(0,"CREATEDTIME",createdTime);

        		var sSvcID 			= "saveDefectLot";
        		var sController 	= "/pcm04400/saveDefectLot.do";
        		var sInDatasets 	= "ds_search=ds_search ds_TargetLot=ds_TargetLot ds_DefectList=ds_DefectList";
        	}

        	var sOutDatasets 	= "ds_result=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_saveValidate = function ()
        {
        	if(this.div_work.form.tabDefect.tabindex == 0){
        		if(this.ds_TargetAll.rowcount == 0)
        		{
        			this.gfn_Message("NoSaveData", "", "warning", "ok");
        			return false;
        		}
        		if(this.nfn_isNull(this.ds_search.getColumn(0,"DEFECTCODE")) || this.ds_search.getColumn(0,"DEFECTCODE") == "")
        		{
        			this.gfn_Message("NoDefectCode", "", "warning", "ok"); // 불량코드를 선택하여 주십시오.
        			return false;
        		}

        	} else {
        		if(this.ds_DefectList.rowcount == 0)
        		{
        			this.gfn_Message("NoSaveData", "", "warning", "ok");
        			return false;
        		}
        		var defectQty = this.ds_DefectList.getSum("QTY");

        		if(defectQty <=0)
        		{
        			// 불량수량은 0이상이어야 합니다.
        			throw MessageException.Create("DefectQtyValidation");
        			return false;
        		}

        		this.ds_search.setColumn(0,"DEFECTQTY",defectQty);

        		for(var i=0;i<this.ds_DefectList.rowcount;i++)
        		{
        			if(this.ds_DefectList.getColumn(i,"QTY") == 0 ){
        				var arg = this.ds_DefectList.getColumn(i,"SEGMENT_DEFECTCODE");
        				this.gfn_Message("InputDefectQty", arg, "warning", "ok");//불량 수량을 입력하시기 바랍니다. Defect Code : {0}
        				return false;
        			}
        		}

        		if(this.nfn_isNull(this.ds_search.getColumn(0,"UOM")) || this.ds_search.getColumn(0,"UOM") == "")
        		{
        			this.gfn_Message("SelectUOM", "", "warning", "ok"); // UOM을 선택하여 주십시오.
        			return false;
        		}

        	}
        	return true;
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
        		case "selectEcmLookupValuesVList2ds_COwnTypeALL" :
        		{
        			this.ds_searchCopy.copyData(this.ds_search);
        			break;
        		}
        		case "selectUomDefinitionList" :
        		{
        			this.AddSelect(this.ds_UOM, "UOMDEFID","UOMDEFNAME");
        			this.ds_search.setColumn(0,"UOM","");
        		}
        		case "selectDefectReasonProcesssegment" :
        		{
        			var arrSeg = [];
        			for(var i=0;i<this.ds_ReasonProcessSegment.rowcount;i++)
        			{
        				arrSeg.push(this.ds_ReasonProcessSegment.getColumn(i,"PROCESSSEGMENTID"));
        			}
        			this.DefectSegments = arrSeg.join(',');
        			break;
        		}
        		case "saveDefectAll" :
        		{
        			this.gfn_Message("SuccessSave", "", "information", "ok");
        			this.ds_TargetAll.clearData();
        			this.pfn_CostomQuery(this.ds_search, this.ds_WIP, "selectWIPList");
        			break;
        		}
        		case "saveDefectLot" :
        		{
        			this.gfn_Message("SuccessSave", "", "information", "ok");
        			this.ds_TargetLot.clearData();
        			this.ds_DefectList.clearData();
        			this.pfn_CostomQuery(this.ds_search, this.ds_WIP, "selectWIPList");
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
        		this.setProduct_P00105(rtn, this.ds_cbo_ProdVersion, this.ds_search);
        	} else if (sPopupId == "SEARCH_LOTID")
        	{//LOTID
        		this.ds_search.setColumn(0,"LOTID",rtn.join(","));
        	} else if (sPopupId == "SEARCH_AREA")
        	{//AREAID|AREANAME
        		this.ds_search.setColumn(0,"AREAID",rtn[0]);
        		this.ds_search.setColumn(0,"AREANAME",rtn[1]);
        	}else if (sPopupId == "SEARCH_DEFECT1") //완불처리 탭에 불량코드 콤보
        	{//DEFECTCODE|DEFECTCODENAME|SEGMENT_DEFECTCODE|SEGMENT_DEFECTNAME|QCSEGMENTID
        		this.ds_search.setColumn(0,"DEFECTCODE",rtn[0]);
        		this.ds_search.setColumn(0,"DEFECTCODENAME",rtn[1]);
        		this.ds_search.setColumn(0,"SEGMENT_DEFECTCODE",rtn[2]);
        		this.ds_search.setColumn(0,"SEGMENT_DEFECTNAME",rtn[3]);
        		this.ds_search.setColumn(0,"QCSEGMENTID",rtn[4]);

        	}else if (sPopupId == "SEARCH_DEFECT")
        	{//DEFECTCODE|DEFECTCODENAME|QCSEGMENTID|QCSEGMENTNAME|DECISIONDEGREE|SEGMENT_DEFECTCODE|SEGMENT_DEFECTNAME
        		var nRow = this.ds_DefectList.rowcount == 1 ? 0 : this.ds_DefectList.rowposition;
        		this.ds_DefectList.setColumn(nRow,"DEFECTCODE",rtn[0]);
        		this.ds_DefectList.setColumn(nRow,"DEFECTCODENAME",rtn[1]);
        		this.ds_DefectList.setColumn(nRow,"QCSEGMENTID",rtn[2]);
        		this.ds_DefectList.setColumn(nRow,"QCSEGMENTNAME",rtn[3]);
        		this.ds_DefectList.setColumn(nRow,"DECISIONDEGREE",rtn[4]);
        		this.ds_DefectList.setColumn(nRow,"SEGMENT_DEFECTCODE",rtn[5]);
        		this.ds_DefectList.setColumn(nRow,"SEGMENT_DEFECTNAME",rtn[6]);

        	}
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        this.fn_initCombo = function ()
        {
        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "UOMCLASSID");
        	this.ds_temp.setColumn(0, "UOMCLASSID", "Segment");

        	this.pfn_CostomQuery(this.ds_temp, this.ds_UOM, "selectUomDefinitionList");
        };


        /*
         *	최하단 불량 검사 그리드에 원인품목 리스트를 다시 읽어옴.
         */
        this.GetReasonConsumableList = function ()
        {
        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");

        	this.ds_temp.setColumn(0, "LOTID", this.ds_TargetLot.getColumn(this.ds_TargetLot.rowposition, "LOTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.pfn_CostomQuery(this.ds_temp, this.ds_ReasonConsumableList, "selectReasonConsumableList");

        };

        /*
         *	최하단 불량 검사 그리드에 원인자재LOT 리스트를 다시 읽어옴.
         */
        this.GetDefectReasonConsumableLot = function ()
        {
        	this.ds_ReasonConsumableLot.filter("");

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");

        	this.ds_temp.setColumn(0, "LOTID", this.ds_TargetLot.getColumn(this.ds_TargetLot.rowposition, "LOTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.pfn_CostomQuery(this.ds_temp, this.ds_ReasonConsumableLot, "selectDefectReasonConsumableLot");
        };

        /*
         *	최하단 불량 검사 그리드에 원인공정 리스트를 다시 읽어옴.
         */
        this.GetDefectReasonProcesssegment = function ()
        {
        	this.ds_ReasonProcessSegment.filter("");

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");

        	this.ds_temp.setColumn(0, "LOTID", this.ds_TargetLot.getColumn(this.ds_TargetLot.rowposition, "LOTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.pfn_CostomQuery(this.ds_temp, this.ds_ReasonProcessSegment, "selectDefectReasonProcesssegment");
        };


        this.mfn_OpenDefectPopup = function ()
        {
        	var mRow = this.ds_TargetLot.rowcount == 1 ? 0 : this.ds_TargetLot.rowposition;
        	var nRow = this.ds_DefectList.rowcount == 1 ? 0 : this.ds_DefectList.rowposition;

        	var popupId = "SEARCH_DEFECT";
        	var lotID = this.ds_TargetLot.getColumn(mRow, "LOTID");
        	var defectID = this.ds_DefectList.getColumn(nRow,"DEFECTCODE");
        	var qcSegmentID = this.ds_DefectList.getColumn(nRow,"QCSEGMENTID");
        	var language = this.gf_getLanguageType();

        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00166";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "DEFECTCODE|DEFECTCODENAME|QCSEGMENTID|QCSEGMENTNAME|DECISIONDEGREE|SEGMENT_DEFECTCODE|SEGMENT_DEFECTNAME";
        	oArg.arg_paramCols = "LOTID|SEGMENTID|LANGUAGETYPE";
        	oArg.arg_paramValues = lotID + "|" + this.DefectSegments+"|"+this.gf_getLanguageType();
        	oArg.arg_searchStr = defectID == "" ? "" : "DEFECTCODENAME=" + defectID + "|QCSEGMENTIDNAME="+qcSegmentID;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };

        this.defectProcessListControl_SetResultData = function (lotId,pcsQty, pcsPnl)
        {
        	this.Defect.SelectedLotId = lotId;
        	this.Defect.pcsPnl = pcsPnl;
        	this.Defect.qty = pcsQty;
        };

        /*
         *	불량 검사 그리드에서 수량(PNL) 변경 시
         */
        this.mfn_defectChangePnlQty = function (pnlQty)
        {
        	this.ds_DefectList.set_enableevent(false);
        	try{
        		var nRow = this.ds_DefectList.rowcount == 1 ? 0 : this.ds_DefectList.rowposition;

        		var pcsQty = (pnlQty * this.Defect.pcsPnl);
        		this.ds_DefectList.setColumn(nRow, "QTY", pcsQty);
        		defectiveRate = (pcsQty/this.Defect.qty )*100;   // ( defect 의 pcs 수량 / 제공 수량) * 100
        		this.ds_DefectList.setColumn(nRow,"DEFECTRATE",defectiveRate);
        	}
        	catch(ec){
        		trace("mfn_defectChangePnlQty ? " + ec.toString());
        	}

        	this.ds_DefectList.set_enableevent(true);
        };

        /*
         *	불량 검사 그리드에서 수량(PCS) 변경 시
         */
        this.mfn_defectChangePcsQty = function (pcsQty)
        {
        	this.ds_DefectList.set_enableevent(false);
        	try{
        		var nRow = this.ds_DefectList.rowcount == 1 ? 0 : this.ds_DefectList.rowposition;

        		var pnlQty = (pcsQty / this.Defect.pcsPnl);
        		this.ds_DefectList.setColumn(nRow, "PNLQTY", nexacro.ceil(pnlQty));

        		defectiveRate = (pcsQty/this.Defect.qty)*100;  // ( defect 의 pcs 수량 / 제공 수량) * 100
        		this.ds_DefectList.setColumn(nRow,"DEFECTRATE",defectiveRate);

        	}
        	catch(ec){
        		trace("mfn_defectChangePcsQty ? " + ec.toString());
        	}
        	this.ds_DefectList.set_enableevent(true);

        };

        /*
         *	완불처리 불량 코드 팝업
         */
        this.mfn_OpenDefectPopup1 = function ()
        {
        	var popupId = "SEARCH_DEFECT1";
        	var defectID = this.div_work.form.tabDefect.Tabpage1.form.divDefect.form.edt_DefectCode.value;
        	var language = this.gf_getLanguageType();

        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00221";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "DEFECTCODE|DEFECTCODENAME|SEGMENT_DEFECTCODE|SEGMENT_DEFECTNAME|QCSEGMENTID";
        	oArg.arg_paramCols = "LANGUAGETYPE";
        	oArg.arg_paramValues = this.gf_getLanguageType();
        	oArg.arg_searchStr = defectID == "" ? "" : "DEFECTCODENAME=" + defectID ;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_Tabpage1_btn_LOTID_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"LOTID",this.tab_search.Tabpage1.form.edt_LOTID.value);
        	this.pfn_openPopup_LOTID("SEARCH_LOTID", this.ds_search.getColumn(0,"LOTID"),"C");
        };

        this.tab_search_Tabpage1_btnITEMID_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"PRODUCTDEFID",this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value);
        	this.openProduct_P00105("C", this.ds_search,"Product");
        };

        this.btn_AREAID_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"AREAID",this.tab_search.Tabpage1.form.edt_AREAID.value);
        	this.openAREA_P00124("BA", this.ds_search);
        };

        this.div_work_tabDefect_Tabpage1_divDefect_btn_DefectCode_onclick = function(obj,e)
        {
        	this.mfn_OpenDefectPopup1();
        };


        this.div_work_tabDefect_Tabpage1_divDefect_edt_DefectCode_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) this.mfn_OpenDefectPopup1();

        };

        this.div_work_btn_suttleDown_onclick = function(obj,e)
        {
        	var cnt = this.ds_WIP.getCaseCount("CHK == '1'");

        	if(cnt == 0)
        	{
        		this.gfn_Message("NoSelectedLot", "", "warning", "ok"); //선택된 LOT이 없습니다.
        		return;
        	}

        	if(this.div_work.form.tabDefect.tabindex == 0){
        		for(var i=this.ds_WIP.rowcount-1 ; i>= 0 ; i--)
        		{
        			if(this.ds_WIP.getColumn(i,"CHK")==1)
        			{
        				var addRow =  this.ds_TargetAll.addRow();
        				var bSucc = this.ds_TargetAll.copyRow(addRow,this.ds_WIP,i);
        				this.ds_TargetAll.setColumn(addRow,"CHK","0");
        				this.ds_WIP.deleteRow(i);
        			}
        		}
        	} else {
        		if(this.ds_TargetLot.rowcount > 0 ) {
        			this.gfn_Message("SelectOnlyOneLot", "", "warning", "ok");// 한 개의 Lot만 선택하세요.
        			return;
        		}

        		if(cnt > 1)
        		{
        			this.gfn_Message("SelectOnlyOneLot", "", "warning", "ok");
        			return;
        		}

        		var nRow = this.ds_WIP.findRow("CHK","1");

        		var addRow =  this.ds_TargetLot.addRow();
        		var bSucc = this.ds_TargetLot.copyRow(addRow,this.ds_WIP,nRow);
        		this.ds_TargetLot.setColumn(addRow,"CHK","0");
        		this.ds_WIP.deleteRow(nRow);

        		//최하단 불량 검사 그리드에 원인품목 리스트를 다시 읽어옴.
        		this.GetReasonConsumableList();
        		this.GetDefectReasonConsumableLot();
        		this.GetDefectReasonProcesssegment();

        		//불량은 하나 미리 추가해 놓는다.
        		this.ds_DefectList.clearData();
        		this.ds_DefectList.addRow();
        		this.div_work.form.tabDefect.Tabpage2.form.btn_addRow_ds_DefectList.set_enable(true);

        		var lotId = this.ds_TargetLot.getColumn(0, "LOTID");
        		var pcsQty = nexacro.toNumber( this.ds_TargetLot.getColumn(0, "QTY"));
        		var pcsPnl = nexacro.toNumber( this.ds_TargetLot.getColumn(0, "PANELPERQTY"));

        		this.defectProcessListControl_SetResultData(lotId,pcsQty, pcsPnl);

        		this.ds_ReasonProcessSegment.filter("");

        	}
        };

        this.div_work_btn_suttleUp_onclick = function(obj,e)
        {
        	if(this.div_work.form.tabDefect.tabindex == 0){
        		var cnt = this.ds_TargetAll.getCaseCount("CHK == '1'");

        		if(cnt == 0)
        		{
        			this.gfn_Message("NoSelections", "", "warning", "ok"); //선택된 항목이 없습니다.
        			return;
        		}

        		for(var i=this.ds_TargetAll.rowcount-1 ; i>= 0 ; i--)
        		{
        			if(this.ds_TargetAll.getColumn(i,"CHK")==1)
        			{
        				var addRow =  this.ds_WIP.addRow();
        				var bSucc = this.ds_WIP.copyRow(addRow,this.ds_TargetAll,i);
        				this.ds_WIP.setColumn(addRow,"CHK","0");
        				this.ds_TargetAll.deleteRow(i);
        			}
        		}
        	} else {
        		var cnt = this.ds_TargetLot.getCaseCount("CHK == '1'");

        		if(cnt == 0)
        		{
        			this.gfn_Message("NoSelections", "", "warning", "ok"); //선택된 항목이 없습니다.
        			return;
        		}

        		var addRow =  this.ds_WIP.addRow();
        		var bSucc = this.ds_WIP.copyRow(addRow,this.ds_TargetLot,0);
        		this.ds_WIP.setColumn(addRow,"CHK","0");
        		this.ds_TargetLot.clearData();
        		this.ds_DefectList.clearData();
        		this.div_work.form.tabDefect.Tabpage2.form.btn_addRow_ds_DefectList.set_enable(false);

        	}
        };

        this.div_work_tabDefect_Tabpage2_grdDefectList_onexpandup = function(obj,e)
        {
        	if(e.row <0) return;
        	if (this.nfn_isEqualCol(obj, e.col, "SEGMENT_DEFECTCODE"))
        	{
        		this.mfn_OpenDefectPopup();
        	}
        	else if (this.nfn_isEqualCol(obj, e.col, "CONSUMABLEDEFNAME"))
        	{
        		this.pdv_ReasonConsumableList.show();
        		this.pdv_ReasonConsumableList.trackPopup(e.screenx, e.screeny-70,  this.pdv_ReasonConsumableList.width, this.pdv_ReasonConsumableList.height, "fn_Callback_pdv_ReasonConsumableList");
        	} else if (this.nfn_isEqualCol(obj, e.col, "REASONPROCESSSEGMENTNAME"))
        	{
        		this.ds_ReasonProcessSegment.filter("");
        		if(this.nfn_isNull(this.ds_DefectList.getColumn(e.row,"REASONCONSUMABLELOTID"))==false && this.ds_DefectList.getColumn(e.row,"REASONCONSUMABLELOTID") != ""){
        			this.ds_ReasonProcessSegment.filter("LOTID == '" + this.ds_DefectList.getColumn(e.row,"REASONCONSUMABLELOTID") + "'")
        			trace(this.ds_ReasonProcessSegment.saveXML());
        		}
        		this.pdv_ReasonProcessSegment.show();
        		this.pdv_ReasonProcessSegment.trackPopup(e.screenx, e.screeny-70,  this.pdv_ReasonProcessSegment.width, this.pdv_ReasonProcessSegment.height, "fn_Callback_pdv_ReasonProcessSegment");
        	}
        };


        /*
         *	원인 품목 셀 팝업 그리드 활성화
         */
        this.pdv_ReasonConsumableList_grd_ReasonConsumableList_oncelldblclick = function(obj,e)
        {
        	//값 받아서 처리 로직 넣으세요
        	var idver = this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"SPLITCONSUMABLEDEFIDVERSION");
        	var prodName = this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"CONSUMABLEDEFNAME");
        	var prodID = this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"CONSUMABLEDEFID");
        	var prodVer = this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"CONSUMABLEDEFVERSION");

        	this.ds_DefectList.setColumn(this.ds_DefectList.rowposition,"SPLITCONSUMABLEDEFIDVERSION",idver);
        	this.ds_DefectList.setColumn(this.ds_DefectList.rowposition,"CONSUMABLEDEFNAME",prodName);
        	this.ds_DefectList.setColumn(this.ds_DefectList.rowposition,"REASONCONSUMABLEDEFID",prodID);
        	this.ds_DefectList.setColumn(this.ds_DefectList.rowposition,"REASONCONSUMABLEDEFVERSION",prodVer);

        	this.pdv_ReasonConsumableList.closePopup();
        };

        /*
         *	원인 공정 셀 팝업 그리드 활성화
         */
        this.pdv_ReasonProcessSegment_grd_ReasonProcessSegment_oncelldblclick = function(obj,e)
        {
        	var segName = this.ds_ReasonProcessSegment.getColumn(this.ds_ReasonProcessSegment.rowposition,"PROCESSSEGMENTNAME");
        	var segID = this.ds_ReasonProcessSegment.getColumn(this.ds_ReasonProcessSegment.rowposition,"PROCESSSEGMENTID");
        	var aeraID = this.ds_ReasonProcessSegment.getColumn(this.ds_ReasonProcessSegment.rowposition,"AREAID");
        	var aeraName = this.ds_ReasonProcessSegment.getColumn(this.ds_ReasonProcessSegment.rowposition,"AREANAME");

        	this.ds_DefectList.setColumn(this.ds_DefectList.rowposition,"REASONPROCESSSEGMENTID",segID);
        	this.ds_DefectList.setColumn(this.ds_DefectList.rowposition,"REASONPROCESSSEGMENTNAME",segName);
        	this.ds_DefectList.setColumn(this.ds_DefectList.rowposition,"REASONAREAID",aeraID);
        	this.ds_DefectList.setColumn(this.ds_DefectList.rowposition,"REASONAREANAME",aeraName);

        	this.pdv_ReasonProcessSegment.closePopup();
        };


        this.ds_DefectList_oncolumnchanged = function(obj,e)
        {

        	switch(e.columnid) {
        	case "SPLITCONSUMABLEDEFIDVERSION":
        		this.ds_ReasonConsumableLot.filter("");
        		this.ds_ReasonConsumableLot.filter("SPLITCONSUMABLEDEFIDVERSION == '" + e.newvalue + "'")
        		break;
        	case "REASONPROCESSSEGMENTNAME" :
        		this.ds_ReasonProcessSegment.filter("");
        		this.ds_ReasonProcessSegment.filter("LOTID == '" + e.newvalue + "'")
        		break;
        	case "PNLQTY" :
        		if(e.newvalue < 0 ) return;
        		this.mfn_defectChangePnlQty(e.newvalue);
        		break;
        	case "QTY" :
        		if(e.newvalue < 0 ) return;
        		this.mfn_defectChangePcsQty(e.newvalue);
        		break;
        	default:
        	}
        };

        this.div_work_grdWIP_oncelldblclick = function(obj,e)
        {
        	this.ds_WIP.setColumn(e.row, "CHK", this.ds_WIP.getColumn(e.row, "CHK") != "1" ? "1" : "0" );
        };

        this.ds_DefectList_onrowsetchanged = function(obj,e)
        {
        	if(e.reason == 12) //Dataset.REASON_APPEND - 12 Dataset이 추가되었 때
        	{
        		this.ds_ReasonProcessSegment.filter("");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tabpage1.form.btn_LOTID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_LOTID_onclick,this);
            this.tab_search.Tabpage1.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_Tabpage1_btnITEMID_onclick,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_AREAID.addEventHandler("onclick",this.btn_AREAID_onclick,this);
            this.div_work.form.grdWIP.addEventHandler("oncelldblclick",this.div_work_grdWIP_oncelldblclick,this);
            this.div_work.form.tabDefect.Tabpage1.form.divDefect.form.btn_DefectCode.addEventHandler("onclick",this.div_work_tabDefect_Tabpage1_divDefect_btn_DefectCode_onclick,this);
            this.div_work.form.tabDefect.Tabpage1.form.divDefect.form.edt_DefectCode.addEventHandler("onkeydown",this.div_work_tabDefect_Tabpage1_divDefect_edt_DefectCode_onkeydown,this);
            this.div_work.form.tabDefect.Tabpage2.form.grdDefectList.addEventHandler("onexpandup",this.div_work_tabDefect_Tabpage2_grdDefectList_onexpandup,this);
            this.div_work.form.btn_suttleUp.addEventHandler("onclick",this.div_work_btn_suttleUp_onclick,this);
            this.div_work.form.btn_suttleDown.addEventHandler("onclick",this.div_work_btn_suttleDown_onclick,this);
            this.pdv_ReasonConsumableList.form.grd_ReasonConsumableList.addEventHandler("oncelldblclick",this.pdv_ReasonConsumableList_grd_ReasonConsumableList_oncelldblclick,this);
            this.pdv_ReasonProcessSegment.form.grd_ReasonProcessSegment.addEventHandler("oncelldblclick",this.pdv_ReasonProcessSegment_grd_ReasonProcessSegment_oncelldblclick,this);
            this.ds_DefectList.addEventHandler("oncolumnchanged",this.ds_DefectList_oncolumnchanged,this);
            this.ds_DefectList.addEventHandler("onrowsetchanged",this.ds_DefectList_onrowsetchanged,this);
        };
        this.loadIncludeScript("PCM09500M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
