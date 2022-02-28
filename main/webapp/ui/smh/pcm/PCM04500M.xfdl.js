(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM04500M");
            this.set_titletext("LOT분할");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,757);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTPRODUCTTYPESTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTREASONCODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"UOMCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_wip", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSID_R\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTROUTING\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHSTACK\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pcmLot", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"UOM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uom", this);
            obj._setContents("<ColumnInfo><Column id=\"UOMDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UOMDEFNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_splitLot", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKROUTING\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVER\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNPATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNPROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNRESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNRESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reason", this);
            obj._setContents("<ColumnInfo><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_splitLotRtn", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKROUTING\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVER\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNPATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNPROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNRESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNRESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","2","64","285",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SITE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_plantid","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02","0","112","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREANAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_AREANAME","108","112",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_AREANAME",null,"111","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","295","107","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","295","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"30","15","387","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","40","15","387",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_AREANAME_id","108","385",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_visible("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"56","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00_00",null,"82","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","62",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"62","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00","0","62","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00_00","0","87","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID_nm","108","87",null,"20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_ISLOCKING","108","188","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_01_00","0","188","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("Locking 여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISLOCKING");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_01","0","36","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","108","36",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_LOTID",null,"36","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_01_00_00","0","137","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTPRODUCTTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_LOTPRODUCTTYPESTATUS","108","137","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_01_00_01","0","163","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("자사/외주구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("48DE73F771EB464BBB67974147C9F0B6");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_OWNTYPE","108","163","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_codecolumn("C,OwnType,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_ISHOLD","108","214","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_01_00_02","0","214","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_text("보류 여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISHOLD");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productdeftype","0","241","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("30");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_productdeftype","108","241","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
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

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
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

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
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

            obj = new Button("btn_save",null,"16","31","24","61",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","290","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","108","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("LOT 분할");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("LOTSPLIT");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_wip","sta_subTitle:20","0",null,"34","761",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","5",null,"48","34",null,"173",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("UOM");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("UOM");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_wip",null,"13","29","24","5",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_splitLot",null,null,"29","24","0","171",null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_splitLot","0",null,null,"170","0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_splitLot");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"97\"/><Column size=\"44\"/><Column size=\"249\"/><Column size=\"57\"/><Column size=\"49\"/><Column size=\"63\"/><Column size=\"117\"/><Column size=\"84\"/><Column size=\"66\"/><Column size=\"80\"/><Column size=\"192\"/><Column size=\"191\"/><Column size=\"191\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"품목코드\"/><Cell col=\"1\" text=\"Rev\"/><Cell col=\"2\" text=\"품목명\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"수량\"/><Cell col=\"5\" text=\"수량(PNL)\"/><Cell col=\"6\" text=\"분할사유\"/><Cell col=\"7\" text=\"재작업 라우팅\"/><Cell col=\"8\" text=\"라우팅ID\"/><Cell col=\"9\" text=\"공정ID\"/><Cell col=\"10\" text=\"공정명\"/><Cell col=\"11\" text=\"자원명\"/><Cell col=\"12\" text=\"반환자원명\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:UNIT\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:QTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:PANELQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:REASONCODEID\" textAlign=\"left\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_reason\" combocodecol=\"REASONCODEID\" combodatacol=\"REASONCODENAME\"/><Cell col=\"7\" text=\"재작업라우팅\" textAlign=\"left\" displaytype=\"buttoncontrol\" edittype=\"none\"/><Cell col=\"8\" text=\"bind:PROCESSDEFID\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:RESOURCENAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:RETURNRESOURCENAME\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_pcmLot","0",null,null,"139","0","211",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_binddataset("ds_pcmLot");
            obj.set_border("1px solid gray");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"77\"/><Column size=\"135\"/><Column size=\"78\"/><Column size=\"84\"/><Column size=\"75\"/><Column size=\"66\"/><Column size=\"80\"/><Column size=\"111\"/><Column size=\"64\"/><Column size=\"88\"/></Columns><Rows><Row size=\"23\"/><Row size=\"23\"/><Row size=\"23\"/><Row size=\"23\"/><Row size=\"23\"/><Row size=\"23\"/></Rows><Band id=\"body\"><Cell text=\"Lot No.\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:LOTID\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" font=\"normal 11px/normal &quot;Dotum,돋움,Arial&quot;\"/><Cell col=\"2\" text=\"from공정수순\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PROCESSPATHID\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" font=\"normal 11px/normal &quot;Dotum,돋움,Arial&quot;\"/><Cell col=\"4\" text=\"이전공정명\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PREVPROCESSSEGMENTNAME\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\"/><Cell col=\"6\" text=\"공정ID\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PROCESSSEGMENTID\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\"/><Cell col=\"8\" text=\"공정명\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:PROCESSSEGMENTNAME\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" font=\"normal 10px/normal &quot;Dotum,돋움,Arial&quot;\"/><Cell row=\"1\" border=\"1px solid gray\" background=\"#c3e6fd\" text=\"공정 Rev.\" textAlign=\"left\"/><Cell row=\"1\" col=\"1\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTVERSION\"/><Cell row=\"1\" col=\"2\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"후공정\"/><Cell row=\"1\" col=\"3\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:NEXTPROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"4\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"공정수순\"/><Cell row=\"1\" col=\"5\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:USERSEQUENCE\"/><Cell row=\"1\" col=\"6\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"품목코드\"/><Cell row=\"1\" col=\"7\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:PRODUCTDEFID\"/><Cell row=\"1\" col=\"8\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"Rev\"/><Cell row=\"1\" col=\"9\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTVERSION\"/><Cell row=\"2\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"품목명\"/><Cell row=\"2\" col=\"1\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:PRODUCTDEFNAME\" font=\"normal 11px/normal &quot;Dotum,돋움,Arial&quot;\"/><Cell row=\"2\" col=\"2\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"제품Type\"/><Cell row=\"2\" col=\"3\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:PRODUCTTYPE\"/><Cell row=\"2\" col=\"4\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"투입일자\"/><Cell row=\"2\" col=\"5\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:INPUTDATE\"/><Cell row=\"2\" col=\"6\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"S/O번호\"/><Cell row=\"2\" col=\"7\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:PRODUCTIONORDERID\"/><Cell row=\"2\" col=\"8\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"납기일\"/><Cell row=\"2\" col=\"9\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:DUEDATE\"/><Cell row=\"3\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"품목유형구분\"/><Cell row=\"3\" col=\"1\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:PRODUCTTYPE\"/><Cell row=\"3\" col=\"2\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"생산구분\"/><Cell row=\"3\" col=\"3\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:PRODUCTIONTYPE\"/><Cell row=\"3\" col=\"4\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"Locking 여부\"/><Cell row=\"3\" col=\"5\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:ISLOCKING\"/><Cell row=\"3\" col=\"6\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"작업장\"/><Cell row=\"3\" col=\"7\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:AREANAME\"/><Cell row=\"3\" col=\"8\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"고객명\"/><Cell row=\"3\" col=\"9\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:CUSTOMERNAME\"/><Cell row=\"4\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"단위\"/><Cell row=\"4\" col=\"1\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:UNIT\"/><Cell row=\"4\" col=\"2\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"DEFECTUNIT\"/><Cell row=\"4\" col=\"3\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:DEFECTUNIT\"/><Cell row=\"4\" col=\"4\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"수량(PNL)\"/><Cell row=\"4\" col=\"5\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:PNLQTY\"/><Cell row=\"4\" col=\"6\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"PANELPERQTY\"/><Cell row=\"4\" col=\"7\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:PANELPERQTY\"/><Cell row=\"4\" col=\"8\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"수량(PCS)\"/><Cell row=\"4\" col=\"9\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:PCSQTY\"/><Cell row=\"5\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"MM\"/><Cell row=\"5\" col=\"1\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:MM\" font=\"normal 12px/normal &quot;Dotum,돋움,Arial&quot;\"/><Cell row=\"5\" col=\"2\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"PCS/PNL\"/><Cell row=\"5\" col=\"3\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:PCSPNL\"/><Cell row=\"5\" col=\"4\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"공정구분\"/><Cell row=\"5\" col=\"5\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTTYPE\"/><Cell row=\"5\" col=\"6\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"작업단위\"/><Cell row=\"5\" col=\"7\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:STEPTYPE\" font=\"normal 11px/normal &quot;Dotum,돋움,Arial&quot;\"/><Cell row=\"5\" col=\"8\" border=\"1px solid gray\" background=\"#c3e6fd\" textAlign=\"left\" text=\"UOM\"/><Cell row=\"5\" col=\"9\" border=\"1px solid gray\" background=\"#ffffff\" textAlign=\"left\" text=\"bind:UOM\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Combo("cbo_UOM","78",null,"165","20",null,"179",null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_codecolumn("UOMDEFID");
            obj.set_innerdataset("ds_uom");
            obj.set_datacolumn("UOMDEFNAME");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_wip","0","37",null,null,"0","356",null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_binddataset("ds_wip");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"66\"/><Column size=\"110\"/><Column size=\"46\"/><Column size=\"260\"/><Column size=\"80\"/><Column size=\"141\"/><Column size=\"47\"/><Column size=\"128\"/><Column size=\"66\"/><Column size=\"215\"/><Column size=\"47\"/><Column size=\"68\"/><Column size=\"54\"/><Column size=\"96\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"124\"/><Column size=\"96\"/><Column size=\"68\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"15\" text=\"재공현황\"/><Cell col=\"15\" colspan=\"2\" text=\"재공계\"/><Cell col=\"17\" colspan=\"2\" text=\"인수대기\"/><Cell col=\"19\" colspan=\"2\" text=\"인수\"/><Cell col=\"21\" colspan=\"2\" text=\"작업시작\"/><Cell col=\"23\" colspan=\"2\" text=\"작업완료\"/><Cell col=\"25\" colspan=\"4\" text=\"재공현황\"/><Cell row=\"1\" text=\"재작업구분\"/><Cell row=\"1\" col=\"1\" text=\"양산구분\"/><Cell row=\"1\" col=\"2\" text=\"품목코드\"/><Cell row=\"1\" col=\"3\" text=\"Rev\"/><Cell row=\"1\" col=\"4\" text=\"품목명\"/><Cell row=\"1\" col=\"5\" text=\"공정수순\"/><Cell row=\"1\" col=\"6\" text=\"공정명\"/><Cell row=\"1\" col=\"7\" text=\"Site ID\"/><Cell row=\"1\" col=\"8\" text=\"작업장\"/><Cell row=\"1\" col=\"9\" text=\"Roll/Sheet\"/><Cell row=\"1\" col=\"10\" text=\"Lot No.\"/><Cell row=\"1\" col=\"11\" text=\"단위\"/><Cell row=\"1\" col=\"12\" text=\"Locking여부\"/><Cell row=\"1\" col=\"13\" text=\"보류여부\"/><Cell row=\"1\" col=\"14\" text=\"상태\"/><Cell row=\"1\" col=\"15\" text=\"수량\"/><Cell row=\"1\" col=\"16\" text=\"수량(PNL)\"/><Cell row=\"1\" col=\"17\" text=\"PCS\"/><Cell row=\"1\" col=\"18\" text=\"PNL\"/><Cell row=\"1\" col=\"19\" text=\"PCS\"/><Cell row=\"1\" col=\"20\" text=\"PNL\"/><Cell row=\"1\" col=\"21\" text=\"PCS\"/><Cell row=\"1\" col=\"22\" text=\"PNL\"/><Cell row=\"1\" col=\"23\" text=\"PCS\"/><Cell row=\"1\" col=\"24\" text=\"PNL\"/><Cell row=\"1\" col=\"25\" text=\"리드타임\"/><Cell row=\"1\" col=\"26\" text=\"LOT 투입일\"/><Cell row=\"1\" col=\"27\" text=\"납기일자\"/><Cell row=\"1\" col=\"28\" text=\"잔여일수\"/></Band><Band id=\"body\"><Cell text=\"bind:PROCESSCLASSID_R\"/><Cell col=\"1\" text=\"bind:LOTTYPE\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:USERSEQUENCE\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PLANTID\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:RTRSHT\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:UNIT\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:ISLOCKING\"/><Cell col=\"13\" text=\"bind:ISHOLD\"/><Cell col=\"14\" text=\"bind:STATE\" textAlign=\"left\" combocodecol=\"C,WipProcessState,,Y,N\" displaytype=\"normal\"/><Cell col=\"15\" text=\"bind:PCSQTY\" textAlign=\"right\"/><Cell col=\"16\" text=\"bind:PANELQTY\" textAlign=\"right\"/><Cell col=\"17\" text=\"bind:RECEIVEPCSQTY\" textAlign=\"right\"/><Cell col=\"18\" text=\"bind:RECEIVEPANELQTY\" textAlign=\"right\"/><Cell col=\"19\" text=\"bind:SENDPCSQTY\" textAlign=\"right\"/><Cell col=\"20\" text=\"bind:SENDPANELQTY\" textAlign=\"right\"/><Cell col=\"21\" text=\"bind:WORKSTARTPCSQTY\" textAlign=\"right\"/><Cell col=\"22\" text=\"bind:WORKSTARTPANELQTY\" textAlign=\"right\"/><Cell col=\"23\" text=\"bind:WORKENDPCSQTY\" textAlign=\"right\"/><Cell col=\"24\" text=\"bind:WORKENDPANELQTY\" textAlign=\"right\"/><Cell col=\"25\" text=\"bind:LEADTIME\" textAlign=\"right\"/><Cell col=\"26\" text=\"bind:LOTINPUTDATE\" displaytype=\"date\"/><Cell col=\"27\" text=\"bind:DELIVERYDATE\" displaytype=\"date\"/><Cell col=\"28\" text=\"bind:LEFTDATE\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,null,"26","24","55","171",null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_splitLot",null,null,"26","24","29","171",null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,757,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PCM04500M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: LOT 분할
         * 파일명 		: PCM04500.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.01.11
         *
         * 설  명		: LOT 분할 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.01.11	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";

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
        	//this.div_page.set_visible(true);

        	// paging
        	//this.fn_paging_onload(obj);
        	// paging end

        	//alert(this.nfn_getCurrentSystemTime(0,10));
        	this.tab_search.Tabpage1.form.cbo_plantid.set_value(this.gf_getSiteType());
        	this.tab_search.Tabpage1.form.cbo_LOTPRODUCTTYPESTATUS.set_value("Production");

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "UOMCLASSID", "Segment");

        	var sSvcID = "getUomDefinitionList";
        	var sController = "/pcm04500/selectGetUomDefinitionList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_uom=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "REASONCODECLASSID", "LotSplit");

        	var sSvcID = "selectGetReasonCodeList";
        	var sController = "/pcm04500/selectGetReasonCodeList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_reason=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	var component = this.tab_search.Tabpage1;
        	var strColIdList = "cbo_plantid,cbo_PRODUCTDEFTYPE";
        	var strColNmList = "SITE,PRODUCTDEFTYPE";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	this.ds_wip.clearData();
        	this.ds_pcmLot.clearData();
        	this.ds_splitLot.clearData();
        	this.ds_pcmLot.addRow();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cbo_plantid.value);
        	this.ds_search.setColumn(0, "LOTID", this.tab_search.Tabpage1.form.edt_LOTID.value);
        	this.ds_search.setColumn(0, "PRODUCTDEFID", this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value);
        	this.ds_search.setColumn(0, "AREAID", this.tab_search.Tabpage1.form.edt_AREANAME_id.value);
        	this.ds_search.setColumn(0, "LOTPRODUCTTYPESTATUS", this.tab_search.Tabpage1.form.cbo_LOTPRODUCTTYPESTATUS.value);
        	this.ds_search.setColumn(0, "OWNTYPE", this.tab_search.Tabpage1.form.cbo_OWNTYPE.value);
        	this.ds_search.setColumn(0, "ISHOLD", this.tab_search.Tabpage1.form.cbo_ISHOLD.value);
        	this.ds_search.setColumn(0, "ISLOCKING", this.tab_search.Tabpage1.form.cbo_ISLOCKING.value);
        	this.ds_search.setColumn(0, "PROCESSSTATE", "WaitForReceive,WaitForSend,Wait");
        	this.ds_search.setColumn(0, "PRODUCTDEFNAME", this.tab_search.Tabpage1.form.edt_PRODUCTDEFID_nm.value);
        	this.ds_search.setColumn(0, "PRODUCTDEFTYPE", this.tab_search.Tabpage1.form.cbo_productdeftype.value);

        	var sSvcID = "selectWIPList";
        	var sController = "/pcm04500/selectWIPList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_wip=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.tab_search_Tabpage1_cbo_period_onitemchanged();
        };

        /*
         * 기능 : 신규
         */
        this.fn_new = function(obj,e)
        {
        };

        /*
         * 기능 : 저장(승인)
         */
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_splitLot) )
        	{
        		this.gfn_Message("NoSaveData", null, "info", "ok");
        		return;
        	}
        /*
        	if(this.gfn_isNull(this.div_work.form.cbo_UOM.value)){
        		this.gfn_Message("SelectUOM", null, "info", "ok");
        		return;
        	}
        */
        	for(var i=0; i<this.ds_splitLot.rowcount; i++){
        		if(this.nfn_nvl(this.ds_splitLot.getColumn(i,"QTY"),0)==0 && this.nfn_nvl(this.ds_splitLot.getColumn(i,"PANELQTY"),0)==0){
        			this.gfn_Message("NotSplitQty", null, "info", "ok");
        			return;
        		}
        	}
        	var component = this.div_work.form.grd_splitLot;
        	var strColIdList = "REASONCODEID";
        	var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        	if (rtn == false) return;

        	// 분할수량 체크 :: 모 LOT 기준 자LOT의 총 수량 체크
        	var lotQty = 0;
        	var lotPnlQty = 0;
        	var totalQty = 0;
        	var totalPnlQty = 0;

        	//lotQty = decimal.Parse(grdLotInfo.GetFieldValue("PCSQTY").ToString());
        	lotQty = this.ds_pcmLot.getColumn(0,"PCSQTY");
        	lotPnlQty = this.ds_pcmLot.getColumn(0,"PNLQTY");
        	totalQty = this.ds_splitLot.getSum("QTY");
        	totalPnlQty = this.ds_splitLot.getSum("PANELQTY");

        	if (lotQty <= totalQty)
        	{
        		// 분할 수량
        		this.gfn_Message("SplitQtyLessThanParentQty", null, "info", "ok");	//throw MessageException.Create("SplitQtyLessThanParentQty");
        		return;
        	}

        	// 재작업 ROUTING인 경우 재작업 ROUTING 선택 및 작업장 설정 여부 체크
        	if(this.ds_splitLot.findRow("REASONCODEID","SplitRework") >= 0)
        	{
        		// PROCESSDEFID
        		if (this.ds_splitLot.getCaseCount("PROCESSDEFID=='' && REASONCODEID=='SplitRework'") > 0)
        		{
        			// 라우팅 정보를 찾을수 없습니다.({0})
        			this.gfn_Message("checkProcessDef", null, "info", "ok");	//throw MessageException.Create("checkProcessDef");
        			return;
        		}

        		//if (targetList.AsEnumerable().Count(r => string.IsNullOrWhiteSpace(r.Field<string>("RESOURCEID")) && r.Field<string>("REASONCODEID").Equals("SplitRework")) > 0)
        		if (this.ds_splitLot.getCaseCount("RESOURCEID=='' && REASONCODEID=='SplitRework'") > 0)
        		{
        			// 선택된 자원이 없습니다.
        			this.gfn_Message("NoResourceSelected", null, "info", "ok");	//throw MessageException.Create("NoResourceSelected");
        			return;
        		}
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveLotSplit";
        	var sController = "/pcm04500/saveLotSplit.do";
        	var sInDatasets = "INPUT=ds_splitLot:U";
        	var sOutDatasets = "ds_splitLotRtn=output";

        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delelete = function(obj,e)
        {
        };
        /*
         * 기능 : 도움말  => 공통 처리
         */
        this.fn_help = function(obj,e)
        {
        };

        /*
         * 기능 : 출력
         */
        this.fn_print = function(obj,e)
        {
        // 	var languageType 	= this.gf_getLanguageType();
        // 	var title 			= this.nfn_nvl(this.nfn_getDictionarynameUpper("LOTCARDPRINT"),"LOT Card 출력");
        // 	var LotID           = this.tab_search.Tabpage1.form.edt_LOTID.value;
        //
        // 	var oArg = {
        // 		sRptPath   : "/pcm/",
        // 		sRptName   : "PCM00600R.mrd",
        // 		strField   :   "[" + LotID
        // 					+ "][" + languageType
        // 					+ "][" + this.nfn_nvl(this.nfn_getDictionarynameUpper("NORMAL"),"정상")
        // 					+ "][]",
        // 		bModalless : false
        // 	};
        //
        // 	var sOption = "titletext="+title+",modeless=false";
        // 	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        ///////////////////////////////////////////////////////////////////////////////////////

        	var lot = [];
        	var wok = [];
        	var languageType 	= this.gf_getLanguageType();
        	var title 			= this.nfn_nvl(this.nfn_getDictionarynameUpper("LOTCARDPRINT"),"LOT Card 출력");

        // 	lot.push(this.ds_pcmLot.getColumn( 0, "LOTID" ) );
        // 	wok.push( this.ds_pcmLot.getColumn(0, "LOTID" ) + "| " );
        	for (var i = 0; i < this.ds_splitLotRtn.rowcount; i++)
        	{
        		lot.push(this.ds_splitLotRtn.getColumn( i, "LOTID" ) );
        		wok.push( this.ds_splitLotRtn.getColumn( i, "LOTID" ) + "| " );
        	}

        	var oArg = {
        		sRptPath   : "/pcm/",
        		sRptName   : "PCM00600R.mrd",
        		strField   :   "[" + lot
        					+ "][" + languageType
        					+ "][" + wok
        					+ "][" + lot
        					+ "]",
        		bModalless : false
        	};

        	var sOption = "titletext="+title+",modeless=false";
        	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
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
        	if (errCD < 0)
        	{
        		this.gfn_Message(errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "saveLotSplit")
        		{
        			this.gfn_Message("ProcessingSuccess", null, "info", "ok");
        trace("this.ds_splitLotRtn.saveXML()=============>"+this.ds_splitLotRtn.saveXML());
        			this.fn_print();
        			this.fn_search();
        		}
        		else if (trId == "selectLotInfoBylotID")
        		{
        			if(this.ds_pcmLot.rowcount==0){
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}
        			if(this.ds_pcmLot.getColumn(0,"ISLOCKING")=="Y"){
        				this.gfn_Message("LotIsLocking", null, "info", "ok");
        			}
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

        	if(sPopupId == "PRODUCTDEFID")
        	{
        		var str="";
        		var str_id="";
        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			trace(colArray);
        			var str0 = (i==0) ? "" : "," ;
        			str_id = str_id + str0 + colArray[0];
        			str = str + str0 + colArray[1];
        		}
        		this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.set_value(str_id);
        		//this.tab_search.Tabpage1.form.edt_PRODUCTDEFID_nm.set_value(str);
        		this.tab_search.Tabpage1.form.cbo_PRODUCTDEFVERSION.set_index(0);

        	}

        	if(sPopupId == "LOTID")
        	{
        		var str="";
        		var str_id="";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			trace(colArray);
        			var str0 = (i==0) ? "" : "," ;
        			str_id = str_id + str0 + colArray[0];
        		}
        		this.tab_search.Tabpage1.form.edt_LOTID.set_value(str_id);
        	}

        	if(sPopupId == "AREANAME")
        	{
        		var str="";
        		var str_id="";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			trace(colArray);
        			var str0 = (i==0) ? "" : "," ;
        			str_id = str_id + str0 + colArray[0];
        			str = str + str0 + colArray[1];
        		}
        		this.tab_search.Tabpage1.form.edt_AREANAME.set_value(str);
        		this.tab_search.Tabpage1.form.edt_AREANAME_id.set_value(str_id);
        	}
        	if(sPopupId == "GetReworkRouting")
        	{
        	trace("rtn-->"+rtn);
        		var nRow = this.ds_splitLot.rowposition;
        		this.ds_splitLot.setColumn(nRow,"PROCESSDEFID",rtn[0]);
        		this.ds_splitLot.setColumn(nRow,"PROCESSDEFVER",rtn[1]);
        		this.ds_splitLot.setColumn(nRow,"PROCESSSEGMENTID",rtn[2]);
        		this.ds_splitLot.setColumn(nRow,"PROCESSSEGMENTNAME",rtn[3]);
        		this.ds_splitLot.setColumn(nRow,"PROCESSPATHID",rtn[4]);
        		this.ds_splitLot.setColumn(nRow,"PATHSEQUENCE",rtn[5]);
        		this.ds_splitLot.setColumn(nRow,"RETURNPROCESSSEGMENTID",rtn[6]);
        		this.ds_splitLot.setColumn(nRow,"RETURNPATHSEQUENCE",rtn[7]);
        		this.ds_splitLot.setColumn(nRow,"REWORKTYPE",rtn[8]);
        		this.ds_splitLot.setColumn(nRow,"RESOURCEID",rtn[9]);
        		this.ds_splitLot.setColumn(nRow,"RESOURCENAME",rtn[10]);
        		this.ds_splitLot.setColumn(nRow,"RETURNRESOURCEID",rtn[11]);
        		this.ds_splitLot.setColumn(nRow,"RETURNRESOURCENAME",rtn[12]);
        		if(rtn[8]=="REWORK"){
        			this.ds_splitLot.setColumn(nRow,"RETURNPROCESSPATHID",rtn[13]);
        		}else{
        			this.ds_splitLot.setColumn(nRow,"RETURNPROCESSPATHID",rtn[13]);
        		}
        		this.ds_splitLot.setColumn(nRow,"RESOURCETYPE","RESOURCE");
        	}


        }
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search_Tabpage1_btn_LOTID_onclick = function(obj,e)
        {
        	var popupId = "LOTID";
        	var oArg = {};
        	oArg.arg_type = "CA";
        	oArg.arg_popupCd     = "P00159";
        	oArg.arg_popupNm     = "Lot No 조회";
        	oArg.arg_rtnCols     = "LOTID";
        	oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
        	oArg.arg_paramValues = "LOTID|" + this.gf_getLanguageType();
        	oArg.arg_searchStr   = "P_LOTID=" + this.tab_search.Tabpage1.form.edt_LOTID.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };

        this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	var popupId = "PRODUCTDEFID";
        	var oArg = {};
        	oArg.arg_type = "CA";
        	oArg.arg_popupCd     = "P00160";
        	oArg.arg_popupNm     = "품목 선택";
        	oArg.arg_rtnCols     = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        	oArg.arg_paramCols   = "P_POPTYPE";
        	oArg.arg_paramValues = "PRODUCTDEFINITION";
        	oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");

        };

        this.tab_search_Tabpage1_btn_AREANAME_onclick = function(obj,e)
        {
        	var popupId = "AREANAME";
        	var oArg = {};
        	oArg.arg_type = "CA";
        	oArg.arg_popupCd     = "P00157";
        	oArg.arg_popupNm     = "작업장 선택";
        	oArg.arg_rtnCols     = "AREAID|AREANAME";
        	oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE|P_USER|P_PLANTID";
        	oArg.arg_paramValues = "AREALISTBYAUTHORITY|" + this.gf_getLanguageType() + "|" + this.gf_getUserId() + "|"+ this.gf_getSiteType();
        	oArg.arg_searchStr   = "P_DICTIONARY=" + this.tab_search.Tabpage1.form.edt_AREANAME.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");

        };

        this.div_work_grd_wip_oncelldblclick = function(obj,e)
        {
        	if(this.ds_wip.getColumn(e.row,"REWORKDIVISION")=="Rework"){
        		this.gfn_Message("LotSplitCheckRework", null, "info", "ok");
        		return;
        	}
        	this.div_work.form.cbo_UOM.set_value("");
        	this.ds_pcmLot.clearData();
        	this.ds_splitLot.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "LOTID", this.ds_wip.getColumn(e.row,"LOTID"));

        	var sSvcID = "selectLotInfoBylotID";
        	var sController = "/pcm04500/selectLotInfoBylotID.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_pcmLot=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.div_work_cbo_UOM_onitemchanged = function(obj,e)
        {
        	if(e.postvalue=="PNL"){
        		this.div_work.form.grd_splitLot.setCellProperty("Body",4,"edittype","none");
        		this.div_work.form.grd_splitLot.setCellProperty("Body",5,"edittype","normal");
        	}else if(e.postvalue=="PCS"){
        		this.div_work.form.grd_splitLot.setCellProperty("Body",4,"edittype","normal");
        		this.div_work.form.grd_splitLot.setCellProperty("Body",5,"edittype","none");
        	}
        };

        this.div_work_btn_addRow_ds_splitLot_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.div_work.form.cbo_UOM.value)){
        		this.gfn_Message("SelectItem", "UOM", "info", "ok");
        		return;
        	}
        	var nRow = this.ds_splitLot.addRow();
        	this.ds_splitLot.setColumn(nRow,"PRODUCTDEFID",this.ds_pcmLot.getColumn(this.ds_pcmLot.rowposition,"PRODUCTDEFID"));
        	this.ds_splitLot.setColumn(nRow,"PRODUCTDEFVERSION",this.ds_pcmLot.getColumn(this.ds_pcmLot.rowposition,"PRODUCTDEFVERSION"));
        	this.ds_splitLot.setColumn(nRow,"PRODUCTDEFNAME",this.ds_pcmLot.getColumn(this.ds_pcmLot.rowposition,"PRODUCTDEFNAME"));
        	this.ds_splitLot.setColumn(nRow,"UNIT",this.div_work.form.cbo_UOM.value);
        	this.ds_splitLot.setColumn(nRow,"LOTID",this.ds_pcmLot.getColumn(this.ds_pcmLot.rowposition,"LOTID"));
        };

        this.div_work_grd_splitLot_oncellclick = function(obj,e)
        {
        	//if(!this.nfn_isEqualCol(obj,e.col,"REWORKROUTING")) return;
        	if(this.ds_splitLot.getColumn(e.row,"REASONCODEID")!="SplitRework") return;
        	if(e.col == 7){
        		var popupId = "GetReworkRouting";
        		var oArg = {};
        		oArg.ProductDefID = this.ds_pcmLot.getColumn(0,"PRODUCTDEFID");
        		oArg.ProductDefVersion     = this.ds_pcmLot.getColumn(0,"PRODUCTDEFVERSION");
        		oArg.ProductName     = this.ds_pcmLot.getColumn(0,"PRODUCTDEFNAME");
        		oArg.PathSequence     = this.ds_pcmLot.getColumn(0,"USERSEQUENCE");
        		oArg.ProcessSegmentId     = this.ds_pcmLot.getColumn(0,"PROCESSSEGMENTID");
        		oArg.LotId   = this.ds_pcmLot.getColumn(0,"LOTID");
        		this.gfn_openPopup(popupId,"pcm::PCM04501P.xfdl",oArg,"");
        	}
        };


        this.ds_splitLot_oncolumnchanged = function(obj,e)
        {
        	obj.set_enableevent(false);
        	if(e.columnid=="QTY"){
        		var lotQty = this.ds_pcmLot.getColumn(0,"PCSQTY");
        		var qty = e.newvalue;
        		var totalPnlQty = this.ds_splitLot.getSum("QTY");

        		if (lotQty <= totalPnlQty)
        		{
        			this.ds_splitLot.setColumn(e.row, "QTY", "");
        			this.ds_splitLot.setColumn(e.row, "PANELQTY", "");

        			// 분할 수량
        			this.gfn_Message("SplitQtyLessThanParentQty", null, "info", "ok");
        			return;
        		}
        		var panelPerQty = this.ds_pcmLot.getColumn(0,"PANELPERQTY");
        		var pnlQty = 0;
        		if (panelPerQty > 0)
        		{
        			pnlQty = nexacro.ceil(qty / panelPerQty);
        		}
        		this.ds_splitLot.setColumn(e.row, "PANELQTY", pnlQty);
        	}else if(e.columnid=="PANELQTY"){
        		var lotQty = this.ds_pcmLot.getColumn(0,"PNLQTY");
        		var pnlqty = e.newvalue;
        		var totalPnlQty = this.ds_splitLot.getSum("PANELQTY");

        		if (lotQty <= totalPnlQty)
        		{
        			this.ds_splitLot.setColumn(e.row, "QTY", "");
        			this.ds_splitLot.setColumn(e.row, "PANELQTY", "");

        			// 분할 수량
        			this.gfn_Message("SplitQtyLessThanParentQty", null, "info", "ok");
        			return;
        		}
        		var panelPerQty = this.ds_pcmLot.getColumn(0,"PANELPERQTY");
        		var qty = pnlqty * panelPerQty;
        		this.ds_splitLot.setColumn(e.row, "QTY", qty);

        	}else if(e.columnid=="REASONCODEID"){
        		if (e.newvalue=="SplitRework")
        		{
        			//GetReworkRouting();
        			this.div_work.form.grd_splitLot.setCellProperty("body",7,"edittype","button");

        			var popupId = "GetReworkRouting";
        			var oArg = {};
        			oArg.ProductDefID = this.ds_pcmLot.getColumn(0,"PRODUCTDEFID");
        			oArg.ProductDefVersion     = this.ds_pcmLot.getColumn(0,"PRODUCTDEFVERSION");
        			oArg.PathSequence     = this.ds_pcmLot.getColumn(0,"USERSEQUENCE");
        			oArg.ProcessSegmentId     = this.ds_pcmLot.getColumn(0,"PROCESSSEGMENTID");
        			oArg.LotId   = this.ds_pcmLot.getColumn(0,"LOTID");
        			this.gfn_openPopup(popupId,"pcm::PCM04501P.xfdl",oArg,"");

        		}
        		else
        		{
        			this.div_work.form.grd_splitLot.setCellProperty("body",7,"edittype","none");
        			this.ds_splitLot.setColumn(e.row, "PROCESSDEFID", "");
        			this.ds_splitLot.setColumn(e.row, "PROCESSDEFVER", "");
        			this.ds_splitLot.setColumn(e.row, "PROCESSSEGMENTID", "");
        			this.ds_splitLot.setColumn(e.row, "PROCESSSEGMENTNAME", "");
        			this.ds_splitLot.setColumn(e.row, "PROCESSPATHID", "");
        			this.ds_splitLot.setColumn(e.row, "REWORKTYPE", "");
        			this.ds_splitLot.setColumn(e.row, "RESOURCEID", "");
        			this.ds_splitLot.setColumn(e.row, "RESOURCENAME", "");
        			this.ds_splitLot.setColumn(e.row, "RETURNRESOURCEID", "");
        			this.ds_splitLot.setColumn(e.row, "RETURNRESOURCENAME", "");
        			this.ds_splitLot.setColumn(e.row, "RETURNPROCESSPATHID", "");
        		}
        	}
        	obj.set_enableevent(true);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_AREANAME.addEventHandler("onclick",this.tab_search_Tabpage1_btn_AREANAME_onclick,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick,this);
            this.tab_search.Tabpage1.form.cbo_ISLOCKING.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_ISLOCKING_onitemchanged,this);
            this.tab_search.Tabpage1.form.btn_LOTID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_LOTID_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_work.form.grd_splitLot.addEventHandler("onselectchanged",this.div_work_grd_basApproval_onselectchanged,this);
            this.div_work.form.grd_splitLot.addEventHandler("oncellclick",this.div_work_grd_splitLot_oncellclick,this);
            this.div_work.form.cbo_UOM.addEventHandler("onitemchanged",this.div_work_cbo_UOM_onitemchanged,this);
            this.div_work.form.grd_wip.addEventHandler("oncelldblclick",this.div_work_grd_wip_oncelldblclick,this);
            this.div_work.form.btn_addRow.addEventHandler("onclick",this.div_work_btn_addRow_ds_splitLot_onclick,this);
            this.ds_splitLot.addEventHandler("oncolumnchanged",this.ds_splitLot_oncolumnchanged,this);
        };
        this.loadIncludeScript("PCM04500M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
