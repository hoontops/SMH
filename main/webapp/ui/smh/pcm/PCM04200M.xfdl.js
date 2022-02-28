(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM04200M");
            this.set_titletext("LOT보류해제");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,757);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTPRODUCTTYPESTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTREASONCODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_wip", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDTOPCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDMIDDLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDCODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDUSER\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"HOLDSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"RELEASECOMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"RELEASEUSER\" type=\"STRING\" size=\"256\"/><Column id=\"RELEASEDATE\" type=\"DATE\" size=\"256\"/><Column id=\"TXNGROUPHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pcmLothold", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDTOPCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDMIDDLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDCODE\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDUSER\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"HOLDSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"RELEASECOMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"RELEASEUSER\" type=\"STRING\" size=\"256\"/><Column id=\"RELEASEDATE\" type=\"DATE\" size=\"256\"/><Column id=\"TXNGROUPHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDTOPCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDMIDDLECLASS\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDREASON\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ELAPSEDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rev", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"desc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\"/><Col id=\"desc\">전체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basReasoncodeclass", this);
            obj._setContents("<ColumnInfo><Column id=\"REASONCODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTREASONCODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basReasoncode", this);
            obj._setContents("<ColumnInfo><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQUENCE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("label02","0","137","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREANAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_AREANAME","108","137",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_AREANAME",null,"136","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
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

            obj = new Combo("cbo_PRODUCTDEFVERSION","108","87","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_codecolumn("code");
            obj.set_innerdataset("ds_rev");
            obj.set_datacolumn("desc");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_01","0","87","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("Rev");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFVERSION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","62",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"62","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00","0","62","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00_00","0","112","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID_nm","108","112",null,"20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFTYPE","108","187","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_01_00","0","187","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDIVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_01","0","36","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","108","36",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_LOTID",null,"36","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_01_00_00","0","162","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_LOTPRODUCTTYPESTATUS","108","162","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_01_00_01","0","213","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_text("자사/외주구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("48DE73F771EB464BBB67974147C9F0B6");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_OWNTYPE","108","213","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_codecolumn("C,OwnType,ALL,Y,Y");
            obj.set_text("IFC");
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

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_wip","0","34",null,null,"0","319",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_wip");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"66\"/><Column size=\"110\"/><Column size=\"196\"/><Column size=\"80\"/><Column size=\"151\"/><Column size=\"55\"/><Column size=\"146\"/><Column size=\"66\"/><Column size=\"80\"/><Column size=\"214\"/><Column size=\"47\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"128\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" colspan=\"11\" text=\"보류목록\"/><Cell col=\"12\" colspan=\"2\" text=\"재공계\"/><Cell col=\"14\" colspan=\"6\" text=\"보류정보\"/><Cell col=\"20\" colspan=\"4\" text=\"재공현황\"/><Cell row=\"1\" col=\"1\" text=\"양산구분\"/><Cell row=\"1\" col=\"2\" text=\"품목코드\"/><Cell row=\"1\" col=\"3\" text=\"품목명\"/><Cell row=\"1\" col=\"4\" text=\"공정수순\"/><Cell row=\"1\" col=\"5\" text=\"공정명\"/><Cell row=\"1\" col=\"6\" text=\"Site ID\"/><Cell row=\"1\" col=\"7\" text=\"작업장\"/><Cell row=\"1\" col=\"8\" text=\"Roll/Sheet\"/><Cell row=\"1\" col=\"9\" text=\"공정진행상태\"/><Cell row=\"1\" col=\"10\" text=\"Lot No.\"/><Cell row=\"1\" col=\"11\" text=\"단위\"/><Cell row=\"1\" col=\"12\" text=\"수량\"/><Cell row=\"1\" col=\"13\" text=\"수량(PNL)\"/><Cell row=\"1\" col=\"14\" text=\"보류 여부\"/><Cell row=\"1\" col=\"15\" text=\"보유 분류\"/><Cell row=\"1\" col=\"16\" text=\"보류 사유\"/><Cell row=\"1\" col=\"17\" text=\"보류 설정자\"/><Cell row=\"1\" col=\"18\" text=\"보류설정일\"/><Cell row=\"1\" col=\"19\" text=\"경과시간\"/><Cell row=\"1\" col=\"20\" text=\"리드타임\"/><Cell row=\"1\" col=\"21\" text=\"LOT 투입일\"/><Cell row=\"1\" col=\"22\" text=\"납기일자\"/><Cell row=\"1\" col=\"23\" text=\"잔여일수\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:LOTTYPE\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"4\" text=\"bind:USERSEQUENCE\"/><Cell col=\"5\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PLANTID\"/><Cell col=\"7\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:RTRSHT\"/><Cell col=\"9\" text=\"bind:PROCESSSTATE\"/><Cell col=\"10\" text=\"bind:LOTID\"/><Cell col=\"11\" text=\"bind:UNIT\"/><Cell col=\"12\" text=\"bind:QTY\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:PANELQTY\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:ISHOLD\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:HOLDTOPCLASS\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:HOLDREASON\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:HOLDUSER\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:HOLDDATE\" textAlign=\"center\"/><Cell col=\"19\" text=\"bind:ELAPSEDTIME\" textAlign=\"right\" maskeditformat=\"###0.##\" displaytype=\"mask\"/><Cell col=\"20\" text=\"bind:LEADTIME\"/><Cell col=\"21\" text=\"bind:LOTINPUTDATE\" edittype=\"none\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"22\" text=\"bind:DELIVERYDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"23\" text=\"bind:LEFTDATE\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","108","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("보류목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("HOLDLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_wip","sta_subTitle:20","0",null,"34","761",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","5",null,"108","34",null,"266",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("보류해제");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("RELEASEHOLD");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_pcmLothold","sta_subTitle00:20",null,null,"34","761","266",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basApproval",null,"6","29","24","5",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basApprovaltransaction",null,null,"29","24","285","270",null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_pcmLothold","0",null,null,"266","280","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_pcmLothold");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"67\"/><Column size=\"97\"/><Column size=\"147\"/><Column size=\"66\"/><Column size=\"143\"/><Column size=\"53\"/><Column size=\"84\"/><Column size=\"66\"/><Column size=\"80\"/><Column size=\"183\"/><Column size=\"52\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"양산구분\"/><Cell col=\"2\" text=\"품목코드\"/><Cell col=\"3\" text=\"품목명\"/><Cell col=\"4\" text=\"공정수순\"/><Cell col=\"5\" text=\"공정명\"/><Cell col=\"6\" text=\"Site ID\"/><Cell col=\"7\" text=\"작업장\"/><Cell col=\"8\" text=\"Roll/Sheet\"/><Cell col=\"9\" text=\"공정진행상태\"/><Cell col=\"10\" text=\"Lot No.\"/><Cell col=\"11\" text=\"단위\"/><Cell col=\"12\" text=\"리드타임\"/><Cell col=\"13\" text=\"LOT 투입일\"/><Cell col=\"14\" text=\"납기일자\"/><Cell col=\"15\" text=\"잔여일수\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:LOTTYPE\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"4\" text=\"bind:USERSEQUENCE\"/><Cell col=\"5\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"6\" text=\"bind:PLANTID\"/><Cell col=\"7\" text=\"bind:AREANAME\"/><Cell col=\"8\" text=\"bind:RTRSHT\"/><Cell col=\"9\" text=\"bind:PROCESSSTATE\"/><Cell col=\"10\" text=\"bind:LOTID\"/><Cell col=\"11\" text=\"bind:UNIT\"/><Cell col=\"12\" text=\"bind:LEADTIME\"/><Cell col=\"13\" text=\"bind:LOTINPUTDATE\"/><Cell col=\"14\" text=\"bind:DELIVERYDATE\"/><Cell col=\"15\" text=\"bind:LEFTDATE\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_Up","400",null,"24","23",null,"282",null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_shuttleT");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static01","36.50%","428","58","15",null,null,null,null,null,null,this.div_work.form);
            obj.set_text("h15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            obj.set_taborder("9");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_Down","364",null,"24","23",null,"282",null,null,null,null,this.div_work.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_shuttleB");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static00","36.50%","390","58","15",null,null,null,null,null,null,this.div_work.form);
            obj.set_text("h15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            obj.set_taborder("11");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00_00",null,null,"108","34","164","266",null,null,null,null,this.div_work.form);
            obj.set_taborder("12");
            obj.set_text("해제사유");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("RELEASEREASON");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_reason",null,null,"277","264","1","2",null,null,null,null,this.div_work.form);
            obj.set_taborder("13");
            obj.set_text("div_00");
            obj.set_cssclass("div_WF_detail");
            this.div_work.addChild(obj.name, obj);

            obj = new TextArea("txa_comment",null,null,"256","232","8","2",null,null,null,null,this.div_work.form.div_reason.form);
            obj.set_taborder("0");
            this.div_work.form.div_reason.addChild(obj.name, obj);

            obj = new Static("label00_01_00_01_00",null,null,"93","20","189","236",null,null,null,null,this.div_work.form.div_reason.form);
            obj.set_taborder("1");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("UNIQUENESS");
            this.div_work.form.div_reason.addChild(obj.name, obj);
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
        this.registerScript("PCM04200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: LOT보류해제
         * 파일명 		: PCM04100.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.01.11
         *
         * 설  명		: LOT보류해제 기능 제공
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
        	this.tab_search.Tabpage1.form.cbo_PRODUCTDEFVERSION.set_index(0);
        	this.tab_search.Tabpage1.form.cbo_plantid.set_value(this.gf_getSiteType());

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
        	var strColIdList = "cbo_plantid";
        	var strColNmList = "SITE";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	this.ds_wip.clearData();
        	this.ds_pcmLothold.clearData();
        	this.div_work.form.div_reason.form.txa_comment.set_value("");

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cbo_plantid.value);
        	this.ds_search.setColumn(0, "LOTID", this.tab_search.Tabpage1.form.edt_LOTID.value);
        	this.ds_search.setColumn(0, "PRODUCTDEFID", this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value);
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", this.tab_search.Tabpage1.form.cbo_PRODUCTDEFVERSION.value);
        	this.ds_search.setColumn(0, "PRODUCTNAME", this.tab_search.Tabpage1.form.edt_PRODUCTDEFID_nm.value);
        	this.ds_search.setColumn(0, "LOTPRODUCTTYPESTATUS", this.tab_search.Tabpage1.form.cbo_LOTPRODUCTTYPESTATUS.value);
        	this.ds_search.setColumn(0, "PRODUCTDEFTYPE", this.tab_search.Tabpage1.form.cbo_PRODUCTDEFTYPE.value);
        	this.ds_search.setColumn(0, "OWNTYPE", this.tab_search.Tabpage1.form.cbo_OWNTYPE.value);
        	this.ds_search.setColumn(0, "AREAID", this.tab_search.Tabpage1.form.edt_AREANAME_id.value);
        	this.ds_search.setColumn(0, "PARENTREASONCODECLASSID", "HoldCode");

        	var sSvcID = "selectLotHoldList";
        	var sController = "/pcm04200/selectLotHoldList.do";
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
        	if(this.ds_pcmLothold.rowcount==0){
        		this.gfn_Message("NoSaveData", null, "info", "ok");
        		return;
        	}
        	var component = this.div_work.form.div_reason;
        	var strColIdList = "txa_comment";
        	var strColNmList = "UNIQUENESS";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	for(var i=0; i<this.ds_pcmLothold.rowcount;i++){
        		this.ds_pcmLothold.setColumn(i,"RELEASECOMMENTS",this.div_work.form.div_reason.form.txa_comment.value);
        	}
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveReleaseLotHold";
        	var sController = "/pcm04200/saveReleaseLotHold.do";
        	var sInDatasets = "INPUT=ds_pcmLothold:U";
        	var sOutDatasets = "";

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
        		if (trId == "saveReleaseLotHold")
        		{
        			this.gfn_Message("ProcessingSuccess", null, "info", "ok");
        			this.fn_search();
        		}
        		else if (trId == "selectEcmLookupValuesVList2ds_CValidState")
        		{
        			this.tab_search.Tabpage1.form.cbo_validstate.set_index(0);
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
        		this.ds_rev.clearData();
        		var nRow = this.ds_rev.addRow();
        		this.ds_rev.setColumn(nRow,"desc","전체");
        		var str="";
        		var str_id="";
        		this.ds_rev.clearData();
        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			trace(colArray);
        			var str0 = (i==0) ? "" : "," ;
        			str_id = str_id + str0 + colArray[0];
        			str = str + str0 + colArray[1];
        			if(this.ds_rev.findRow("code",colArray[2])<0){
        				var nRow = this.ds_rev.addRow();
        				this.ds_rev.setColumn(nRow,"code",colArray[2]);
        				this.ds_rev.setColumn(nRow,"desc",colArray[2]);
        			}
        		}
        		this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.set_value(str_id);
        		this.tab_search.Tabpage1.form.edt_PRODUCTDEFID_nm.set_value(str);
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

        this.div_work_form_btn_down_onclick = function(obj,e)
        {
        	for(var i=this.ds_wip.rowcount - 1; i>=0; i--){
        		if(this.ds_wip.getColumn(i,"CHK")=="1"){
        			var toRow = this.ds_pcmLothold.insertRow(0);
        			this.ds_pcmLothold.copyRow(toRow,this.ds_wip,i);
        			this.ds_pcmLothold.setColumn(toRow,"CHK","0");
        			this.ds_wip.deleteRow(i);
        		}
        	}

        };

        this.div_work_form_btn_up_onclick = function(obj,e)
        {
        	for(var i=this.ds_pcmLothold.rowcount - 1; i>=0; i--){
        		if(this.ds_pcmLothold.getColumn(i,"CHK")=="1"){
        			var toRow = this.ds_wip.addRow();
        			this.ds_wip.copyRow(toRow,this.ds_pcmLothold,i);
        			this.ds_pcmLothold.deleteRow(i);
        		}
        	}

        };

        this.div_work_cbo_reasoncodeclassid_onitemchanged = function(obj,e)
        {
        	this.ds_basReasoncode.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "REASONCODECLASSID", e.postvalue);

        	var sSvcID = "selectBasReasonCodeList";
        	var sController = "/pcm04200/selectBasReasonCodeList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_basReasoncode=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
            this.tab_search.Tabpage1.form.btn_LOTID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_LOTID_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_work.form.grd_wip.addEventHandler("onselectchanged",this.div_work_grd_basApproval_onselectchanged,this);
            this.div_work.form.grd_wip.addEventHandler("oncellclick",this.div_work_grd_pcmLothold_oncellclick,this);
            this.div_work.form.grd_pcmLothold.addEventHandler("onselectchanged",this.div_work_grd_basApproval_onselectchanged,this);
            this.div_work.form.btn_Up.addEventHandler("onclick",this.div_work_form_btn_up_onclick,this);
            this.div_work.form.btn_Down.addEventHandler("onclick",this.div_work_form_btn_down_onclick,this);
        };
        this.loadIncludeScript("PCM04200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
