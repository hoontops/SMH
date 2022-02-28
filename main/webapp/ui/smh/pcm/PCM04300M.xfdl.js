(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM04300M");
            this.set_titletext("LOT 공정이동");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,757);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_WIP", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSID_R\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTROUTING\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHSTACK\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Target", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSID_R\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTROUTING\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHSTACK\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
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


            obj = new Dataset("ds_searchCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Change", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"FROMSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"TOSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENTS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Segment", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Resource", this);
            obj._setContents("<ColumnInfo><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_taborder("10");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staLOTID","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","108","35",null,"20","42",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_LOTID",null,"35","22","20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFID","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","60",null,"20","42",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"60","22","20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFVERSION","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFNAME","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
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

            obj = new Static("guidetip04",null,"230","45","20","96",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","256","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","250","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","250","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_hotkey("F2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staAREAID","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID","108","135",null,"20","42",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_AREAID",null,"135","22","20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTIONTYPE","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTIONTYPE","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staOWNTYPE","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
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

            obj = new Static("guidetip02",null,"0","45","10","96",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","96",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDIVISION","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDIVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDIVISION","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
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

            obj = new Grid("grdWIP","0","34",null,null,"0","319",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_WIP");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"30\" band=\"left\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" colspan=\"14\" text=\"제공현황\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPLIST\"/><Cell col=\"16\" rowspan=\"2\" text=\"Lot Routing&#13;&#10;적용여부\"/><Cell col=\"17\" colspan=\"2\" text=\"재공계\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPQTY\"/><Cell col=\"19\" colspan=\"2\" text=\"인수대기\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPRECEIVEQTY\"/><Cell col=\"21\" colspan=\"2\" text=\"작업시작\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPSTARTQTY\"/><Cell col=\"23\" colspan=\"2\" text=\"작업완료\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPSENDQTY\"/><Cell col=\"25\" colspan=\"2\" text=\"인계대기\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPSENDQTY\"/><Cell col=\"27\" colspan=\"4\" text=\"재공현황\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPLIST\"/><Cell row=\"1\" col=\"2\" text=\"재작업구분\" tooltiptext=\"REWORKTYPE\"/><Cell row=\"1\" col=\"3\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell row=\"1\" col=\"4\" text=\"품목코드\"/><Cell row=\"1\" col=\"5\" text=\"Rev.\"/><Cell row=\"1\" col=\"6\" text=\"품목명\"/><Cell row=\"1\" col=\"7\" text=\"공정수순\"/><Cell row=\"1\" col=\"8\" text=\"공정명\"/><Cell row=\"1\" col=\"9\" text=\"SIte ID\"/><Cell row=\"1\" col=\"10\" text=\"작업장\"/><Cell row=\"1\" col=\"11\" text=\"Roll/Sheet\"/><Cell row=\"1\" col=\"12\" text=\"Lot No.\"/><Cell row=\"1\" col=\"13\" text=\"Locking 여부\"/><Cell row=\"1\" col=\"14\" text=\"보류 여부\"/><Cell row=\"1\" col=\"15\" text=\"공정진행상태\" tooltiptext=\"PROCESSSTATE\"/><Cell row=\"1\" col=\"17\" text=\"수량\"/><Cell row=\"1\" col=\"18\" text=\"수량(PNL)\"/><Cell row=\"1\" col=\"19\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"20\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"21\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"22\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"23\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"24\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"25\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"26\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"27\" text=\"리드타임\"/><Cell row=\"1\" col=\"28\" text=\"LOT 투입일\"/><Cell row=\"1\" col=\"29\" text=\"납기일자\"/><Cell row=\"1\" col=\"30\" text=\"잔여일수\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:PROCESSCLASSID_R\"/><Cell col=\"3\" text=\"bind:LOTTYPE\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:USERSEQUENCE\"/><Cell col=\"8\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:PLANTID\"/><Cell col=\"10\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:RTRSHT\"/><Cell col=\"12\" text=\"bind:LOTID\"/><Cell col=\"13\" text=\"bind:ISLOCKING\"/><Cell col=\"14\" text=\"bind:ISHOLD\"/><Cell col=\"15\" text=\"bind:STATE\"/><Cell col=\"16\" text=\"bind:ISLOTROUTING\"/><Cell col=\"17\" text=\"bind:QTY\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"18\" textAlign=\"right\" text=\"bind:PANELQTY\" displaytype=\"mask\"/><Cell col=\"19\" text=\"bind:RECEIVEPCSQTY\" textAlign=\"right\" maskeditformat=\"#,###\" displaytype=\"mask\"/><Cell col=\"20\" text=\"bind:RECEIVEPANELQTY\" textAlign=\"right\" maskeditformat=\"#,###\" displaytype=\"mask\"/><Cell col=\"21\" text=\"bind:WORKSTARTPCSQTY\" textAlign=\"right\" maskeditformat=\"#,###\" displaytype=\"mask\"/><Cell col=\"22\" text=\"bind:WORKSTARTPANELQTY\" textAlign=\"right\" maskeditformat=\"#,###\" displaytype=\"mask\"/><Cell col=\"23\" text=\"bind:WORKENDPCSQTY\" textAlign=\"right\" maskeditformat=\"#,###\" displaytype=\"mask\"/><Cell col=\"24\" text=\"bind:WORKENDPANELQTY\" textAlign=\"right\" maskeditformat=\"#,###\" displaytype=\"mask\"/><Cell col=\"25\" text=\"bind:SENDPCSQTY\" textAlign=\"right\" maskeditformat=\"#,###\" displaytype=\"mask\"/><Cell col=\"26\" text=\"bind:SENDPANELQTY\" textAlign=\"right\" maskeditformat=\"#,###\" displaytype=\"mask\"/><Cell col=\"27\" text=\"bind:LEADTIME\" textAlign=\"right\"/><Cell col=\"28\" text=\"bind:LOTINPUTDATE\"/><Cell col=\"29\" text=\"bind:DELIVERYDATE\"/><Cell col=\"30\" text=\"bind:LEFTDATE\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle2","5",null,"108","34",null,"266",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("공정 이동 대상");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("TARGETMOVESEGMENT");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grdTarget","0",null,null,"266","280","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_Target");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"159\"/><Column size=\"80\"/><Column size=\"146\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"66\"/><Column size=\"110\"/><Column size=\"46\"/><Column size=\"196\"/><Column size=\"151\"/><Column size=\"55\"/><Column size=\"66\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"124\"/><Column size=\"72\"/><Column size=\"68\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"작업장\"/><Cell col=\"4\" text=\"수량\"/><Cell col=\"5\" text=\"수량(PNL)\"/><Cell col=\"6\" text=\"양산구분\"/><Cell col=\"7\" text=\"품목코드\"/><Cell col=\"8\" text=\"Rev\"/><Cell col=\"9\" text=\"품목명\"/><Cell col=\"10\" text=\"공정명\"/><Cell col=\"11\" text=\"Site ID\"/><Cell col=\"12\" text=\"Roll/Sheet\"/><Cell col=\"13\" text=\"Locking 여부\"/><Cell col=\"14\" text=\"보류 여부\"/><Cell col=\"15\" text=\"리드타임\"/><Cell col=\"16\" text=\"LOT 투입일\"/><Cell col=\"17\" text=\"납기일자\"/><Cell col=\"18\" text=\"잔여일수\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:LOTID\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\"/><Cell col=\"3\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:QTY\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:PANELQTY\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:LOTTYPE\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"8\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"9\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"10\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:PLANTID\"/><Cell col=\"12\" text=\"bind:RTRSHT\"/><Cell col=\"13\" text=\"bind:ISLOCKING\"/><Cell col=\"14\" text=\"bind:ISHOLD\"/><Cell col=\"15\" text=\"bind:LEADTIME\" textAlign=\"right\"/><Cell col=\"16\" text=\"bind:LOTINPUTDATE\"/><Cell col=\"17\" text=\"bind:DELIVERYDATE\"/><Cell col=\"18\" text=\"bind:LEFTDATE\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_Up","400",null,"24","23",null,"282",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_shuttleT");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_Down","364",null,"24","23",null,"282",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_shuttleB");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle3",null,null,"108","34","164","266",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("공정 변경");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("CHANGESEGMENT");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_reason",null,null,"277","264","1","2",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_text("div_00");
            obj.set_cssclass("div_WF_detail");
            this.div_work.addChild(obj.name, obj);

            obj = new TextArea("txt_COMMENTS",null,null,"256","172","8","2",null,null,null,null,this.div_work.form.div_reason.form);
            obj.set_taborder("2");
            this.div_work.form.div_reason.addChild(obj.name, obj);

            obj = new Static("staCOMMENTS",null,null,"93","20","189","180",null,null,null,null,this.div_work.form.div_reason.form);
            obj.set_taborder("3");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("COMMENT");
            this.div_work.form.div_reason.addChild(obj.name, obj);

            obj = new Combo("cbo_RESOURCE",null,null,"165","20","9","208",null,null,null,null,this.div_work.form.div_reason.form);
            obj.set_taborder("1");
            obj.set_codecolumn("RESOURCEID");
            obj.set_datacolumn("RESOURCENAME");
            obj.set_innerdataset("ds_Resource");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.div_work.form.div_reason.addChild(obj.name, obj);

            obj = new Combo("cbo_SEGMENT",null,null,"165","20","9","234",null,null,null,null,this.div_work.form.div_reason.form);
            obj.set_taborder("0");
            obj.set_codecolumn("PROCESSSEGMENTID");
            obj.set_datacolumn("PROCESSSEGMENTNAME_SEQ");
            obj.set_innerdataset("ds_Segment");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.div_work.form.div_reason.addChild(obj.name, obj);

            obj = new Static("staSEGMENT",null,null,"93","20","189","234",null,null,null,null,this.div_work.form.div_reason.form);
            obj.set_taborder("4");
            obj.set_text("대상 공정");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("TARGETSEGMENT");
            this.div_work.form.div_reason.addChild(obj.name, obj);

            obj = new Static("staRESOURCE",null,null,"93","20","186","214",null,null,null,null,this.div_work.form.div_reason.form);
            obj.set_taborder("5");
            obj.set_text("자원");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("RESOURCE");
            this.div_work.form.div_reason.addChild(obj.name, obj);

            obj = new Static("staWIP","0","0","89","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("재공현황");
            obj.set_tooltiptext("WIPLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_WIP","89","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdWIP",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,757,this,function(p){});
            obj.set_mobileorientation("landscape");
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

            obj = new BindItem("itemLOTTYPE","tab_search.Tabpage1.form.cbo_PRODUCTIONTYPE","value","ds_search","LOTTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemOWNTYPE","tab_search.Tabpage1.form.cbo_OWNTYPE","value","ds_search","OWNTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPROCESS","div_work.form.div_reason.form.cbo_SEGMENT","value","ds_Change","PROCESSSEGMENTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemRESOURCEID","div_work.form.div_reason.form.cbo_RESOURCE","value","ds_Change","RESOURCEID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemCOMMENTS","div_work.form.div_reason.form.txt_COMMENTS","value","ds_Change","COMMENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","tab_search.Tabpage1.form.cbo_PRODUCTDIVISION","value","ds_search","PRODUCTDIVISION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM04300M.xfdl","lib::lib_base.xjs");
        this.addIncludeScript("PCM04300M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM04300M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM04300M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: LOT 공정이동
         * 파일명 		: PCM04300M.xfdl
         * 작성자 		: 김애리
         * 작성일 		: 2021.4.21
         * AS-IS		: LotProcessPathChange
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.4.21	김애리   	최초작성
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

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.GetWipList();
        };

        this.GetWipList = function ()
        {
        	if(this.fn_searchValidate() == false) return;

        	if(this.ds_search.getColumn(0,"AREANAME") == "" ) this.ds_search.setColumn(0,"AREAID","");

        	this.ds_Target.clearData();
        	this.div_work.form.div_reason.form.cbo_SEGMENT.set_value("");
        	this.div_work.form.div_reason.form.cbo_RESOURCE.set_value("");
        	this.div_work.form.div_reason.form.txt_COMMENTS.set_value("");

        	var sSvcID = "selectWIPList";
        	var sController = "/pcm04300/selectWIPList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_WIP=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_searchValidate = function ()
        {
        	var component = this.tab_search.Tabpage1;
        	var strColIdList = "cbo_PLANTID";
        	var strColNmList = "SITE";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	return rtn;
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {

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
        	if(this.fn_saveValidate() == false) return;

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveMoveProcessPath";
        	var sController = "/pcm04300/saveMoveProcessPath.do";
        	var sInDatasets = "ds_search=ds_search ds_Target=ds_Target ds_Change=ds_Change";
        	var sOutDatasets = "";

        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        this.fn_saveValidate = function ()
        {
        	if(this.ds_Target.rowcount == 0){
        		this.gfn_Message("NoSaveData", null, "info", "ok");
        		return false;
        	}
        	var component = this.div_work.form.div_reason;
        	var strColIdList = "cbo_SEGMENT,cbo_RESOURCE";
        	var strColNmList = "TARGETSEGMENT,RESOURCE";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return false;

        	var strSequence = this.ds_Change.getColumn(0,"FROMSEQUENCE");
        	var strTargetSequence = this.ds_Change.getColumn(0,"TOSEQUENCE");

        	if(strTargetSequence == strSequence)
        	{
        		this.gfn_Message("SameMoveTargetSement", "", "warning", "ok"); //이동공정과 대상공정이 같습니다.
        		return false;
        	}

        	if (nexacro.toNumber(strSequence) > nexacro.toNumber(strTargetSequence))
        	{
        		var bRtn = this.gfn_confirm("ISPREVSEGMENT", "information", ""); //이전 공정을 선택하였습니다. 계속 진행하시겠습니까?
        		if(bRtn == false)  return false;
        	}


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
        		case "selectEcmLookupValuesVList2ds_CProductDivision2ALL" :
        		{
        			this.ds_search.setColumn(0,"PRODUCTDIVISION","");
        			break;
        		}
        		case "selectWIPList" :
        		{
        			if (this.ds_WIP.getRowCount() == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "error", "ok");
        				return;
        			};
        			break;
        		}
        		case "saveMoveProcessPath" :
        		{
        			this.gfn_Message("SuccessSave", "", "information", "ok");
        			this.GetWipList();
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
        		this.ds_search.setColumn(0,"AREAID",rtn[0]);
        		this.ds_search.setColumn(0,"AREANAME",rtn[1]);
        	}
        }
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.GetProcessSegment = function (ProductID, ProductVer, PlantID)
        {
        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "PRODUCTDEFID,PRODUCTDEFVERSION,PLANTID,LANGUAGETYPE");

        	this.ds_temp.setColumn(0, "PRODUCTDEFID", ProductID);
        	this.ds_temp.setColumn(0, "PRODUCTDEFVERSION", ProductVer);
        	this.ds_temp.setColumn(0, "PLANTID", PlantID);
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	var sSvcID = "selectProcessSegment";
        	var sController = "/pcm04300/selectProcessSegment.do";
        	var sInDatasets = "INPUT=ds_temp";
        	var sOutDatasets = "ds_Segment=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.GetProcessSegmentLot = function (ProcessID, ProcessVer, PlantID)
        {
        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "PROCESSDEFID,PROCESSDEFVERSION,PLANTID,LANGUAGETYPE");

        	this.ds_temp.setColumn(0, "PROCESSDEFID", ProcessID);
        	this.ds_temp.setColumn(0, "PROCESSDEFVERSION", ProcessVer);
        	this.ds_temp.setColumn(0, "PLANTID", PlantID);
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	var sSvcID = "selectProcessSegment4Lot";
        	var sController = "/pcm04300/selectProcessSegment4Lot.do";
        	var sInDatasets = "INPUT=ds_temp";
        	var sOutDatasets = "ds_Segment=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search_Tabpage1_btn_LOTID_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"LOTID",this.tab_search.Tabpage1.form.edt_LOTID.value);
        	this.pfn_openPopup_LOTID("SEARCH_LOTID", this.ds_search.getColumn(0,"LOTID"),"CA");
        };

        this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"PRODUCTDEFID",this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value);
        	this.openProduct_P00105("CA", this.ds_search,"Product");
        };

        this.tab_search_Tabpage1_btn_AREAID_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"AREAID",this.tab_search.Tabpage1.form.edt_AREAID.value);
        	this.openAREA_P00124("BA", this.ds_search);
        };

        this.div_work_form_btn_down_onclick = function(obj,e)
        {
        	var fRow = this.ds_WIP.findRow("CHK","1");

        	if(fRow < 0 )
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok"); //선택된 항목이 없습니다.
        		return;
        	}

        	if(this.ds_Target.rowcount > 0) // 공정 이동 대상에 row 가 없으면 freepass
        	{
        		if(this.ds_WIP.getColumn(fRow, "PRODUCTDEFID") != this.ds_Target.getColumn(0,"PRODUCTDEFID")){
        			this.gfn_Message("MixSelectProductDefID", "", "warning", "ok"); //다른 품목 ID는 선택할 수 없습니다.
        			return;
        		}

        		if(this.ds_WIP.getColumn(fRow, "PRODUCTDEFVERSION") != this.ds_Target.getColumn(0,"PRODUCTDEFVERSION")){
        			this.gfn_Message(" MixSelectProductDefVersion", "", "warning", "ok"); //다른 품목 Rev는 선택할 수 없습니다.
        			return;
        		}

        		if(this.ds_WIP.getColumn(fRow, "PLANTID") != this.ds_Target.getColumn(0,"PLANTID")){
        			this.gfn_Message("MixSelectPlantID", "", "warning", "ok"); // 다른 Site는 선택할 수 없습니다.
        			return;
        		}

        		if(this.ds_WIP.getColumn(fRow, "LOTTYPE") != this.ds_Target.getColumn(0,"LOTTYPE")){
        			this.gfn_Message("MixSelectLotType", "", "warning", "ok"); // 다른 양산형태는 선택할 수 없습니다.
        			return;
        		}

        		if(this.ds_WIP.getColumn(fRow, "USERSEQUENCE") != this.ds_Target.getColumn(0,"USERSEQUENCE")){
        			this.gfn_Message("MixProcessPath", "", "warning", "ok"); // 공정 수순은 같아야 합니다.
        			return;
        		}

        		if(this.ds_WIP.getColumn(fRow, "ISLOTROUTING") == "Y" && this.ds_Target.getColumn(0,"ISLOTROUTING") == "Y"){
        			this.gfn_Message("OnlyOneSampleLotCanMove", this.ds_WIP.getColumn(fRow, "LOTID"), "warning", "ok"); // 샘플라우팅을 사용중인 LOT은 한번에 한개만 공정이동 시킬 수 있습니다. {0}
        			return;
        		}
        	}

        	if(this.ds_Target.rowcount == 0) { //새롭게 추가되는 거라면 대상 공정 콤보 데이타 가져옴.

        		this.ds_Change.setColumn(0,"ENTERPRISEID",this.gf_getEnterpriseId());
        		this.ds_Change.setColumn(0, "PLANTID",this.ds_WIP.getColumn(fRow,"PLANTID"));
        		this.ds_Change.setColumn(0, "USERID", this.gf_getUserId());
        		this.ds_Change.setColumn(0, "FROMSEQUENCE", this.ds_WIP.getColumn(fRow,"USERSEQUENCE"));
        		if(this.ds_WIP.getColumn(fRow,"ISLOTROUTING") == "Y" )// Lot Routing 일 때 대상공정
        		{
        			this.GetProcessSegmentLot(this.ds_WIP.getColumn(fRow,"PROCESSDEFID")
        					, this.ds_WIP.getColumn(fRow,"PROCESSDEFVERSION"), this.ds_WIP.getColumn(fRow,"PLANTID"));
        		} else {
        			this.GetProcessSegment(this.ds_WIP.getColumn(fRow,"PRODUCTDEFID")
        					, this.ds_WIP.getColumn(fRow,"PRODUCTDEFVERSION"), this.ds_WIP.getColumn(fRow,"PLANTID"));
        		}
        	}

        	for(var i=this.ds_WIP.rowcount-1 ; i>= 0 ; i--)
        	{
        		if(this.ds_WIP.getColumn(i,"CHK")==1)
        		{
        			var addRow =  this.ds_Target.addRow();
        			var bSucc = this.ds_Target.copyRow(addRow,this.ds_WIP,i);
        			this.ds_Target.setColumn(addRow,"CHK","0");
        			this.ds_WIP.deleteRow(i);
        		}
        	}
        };

        this.div_work_form_btn_up_onclick = function(obj,e)
        {
        	var cnt = this.ds_Target.getCaseCount("CHK == '1'");

        	if(cnt == 0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok"); //선택된 항목이 없습니다.
        		return;
        	}

        	for(var i=this.ds_Target.rowcount-1 ; i>= 0 ; i--)
        	{
        		if(this.ds_Target.getColumn(i,"CHK")==1)
        		{
        			var addRow =  this.ds_WIP.addRow();
        			var bSucc = this.ds_WIP.copyRow(addRow,this.ds_Target,i);
        			this.ds_WIP.setColumn(addRow,"CHK","0");
        			this.ds_Target.deleteRow(i);
        		}
        	}

        	if(this.ds_Target.rowcount == 0) {
        		this.ds_Change.clearData();
        		this.ds_Change.addRow();
        	}

        };

        this.div_work_grdWIP_oncelldblclick = function(obj,e)
        {
        	this.ds_WIP.setColumn(e.row, "CHK", this.ds_WIP.getColumn(e.row, "CHK") != "1" ? "1" : "0" );
        };

        this.div_work_grdTarget_oncelldblclick = function(obj,e)
        {
        	this.ds_Target.setColumn(e.row, "CHK", this.ds_Target.getColumn(e.row, "CHK") != "1" ? "1" : "0" );
        };

        this.ds_WIP_cancolumnchange = function(obj,e)
        {
        	if(e.columnid != "CHK" || e.newvalue == "0" ) return; // check 될 때 만 validation

        	try{

        		//현재 선택한 것과 다른 제품ID 가 있는지.
        		if(this.ds_WIP.findRowExpr(this.gfnFormat("CHK=='1' && PRODUCTDEFID !='{0}'",this.ds_WIP.getColumn(e.row, "PRODUCTDEFID"))) > -1){
        			this.gfn_Message("MixSelectProductDefID", "", "warning", "ok"); //다른 품목 ID는 선택할 수 없습니다.
        			return false;
        		}

        		if(this.ds_WIP.findRowExpr(this.gfnFormat("CHK=='1' && PRODUCTDEFVERSION !='{0}'", this.ds_WIP.getColumn(e.row, "PRODUCTDEFVERSION"))) > -1){
        			this.gfn_Message("MixSelectProductDefVersion", "", "warning", "ok"); //다른 품목 Rev는 선택할 수 없습니다.
        			return false;
        		}
        		//조회 조건에서 거르는데 뭐하는 짓이래?

        		if(this.ds_WIP.findRowExpr(this.gfnFormat("CHK=='1' && PLANTID !='{0}'", this.ds_WIP.getColumn(e.row, "PLANTID"))) > -1){
        			this.gfn_Message("MixSelectPlantID", "", "warning", "ok"); // 다른 Site는 선택할 수 없습니다.
        			return false;
        		}

        		if(this.ds_WIP.findRowExpr(this.gfnFormat("CHK=='1' && LOTTYPE !='{0}'", this.ds_WIP.getColumn(e.row, "LOTTYPE"))) > -1){
        			this.gfn_Message("MixSelectLotType", "", "warning", "ok"); // 다른 양산형태는 선택할 수 없습니다.
        			return false;
        		}

        		if(this.ds_WIP.findRowExpr(this.gfnFormat("CHK=='1' && USERSEQUENCE !='{0}'", this.ds_WIP.getColumn(e.row, "USERSEQUENCE"))) > -1){
        			this.gfn_Message("MixProcessPath", "", "warning", "ok"); // 공정 수순은 같아야 합니다.
        			return false;
        		}

        		//재작업 체크
        		if(this.ds_WIP.getColumn(e.row,"REWORKDIVISION") == "Rework" && this.ds_WIP.getColumn(e.row,"PROCESSPATHSTACK").split(".").length > 1) {
        			this.gfn_Message("LotMoveCheckRework", "", "warning", "ok"); // 재작업중인 LOT은 공정이동 할 수 없습니다.
        			return false;
        		}

        		if(this.ds_WIP.findRowExpr("CHK=='1' && ISLOTROUTING =='Y'") > -1 ||
        				(this.ds_WIP.getColumn(e.row,"ISLOTROUTING")=='Y' && this.ds_WIP.findRow("CHK","1") > -1)  ) {
        			this.gfn_Message("OnlyOneSampleLotCanMove", this.ds_WIP.getColumn(e.row,"LOTID"), "warning", "ok"); // 샘플라우팅을 사용중인 LOT은 한번에 한개만 공정이동 시킬 수 있습니다. {0}
        			return false;
        		}


        	} catch(ec){
        			trace("ds_WIP_cancolumnchange ? " + ec.toString());
        	}

        };


        this.ds_Change_oncolumnchanged = function(obj,e)
        {
        	if(e.newrow < 0) return;
        	//대상공정 선택 변경 시

        	if(e.columnid == "PROCESSSEGMENTID" && this.nfn_isNull(e.newvalue) == false){
        		var nRow = this.ds_Target.rowcount == 1 ? 0 : this.ds_Target.rowposition;

        		this.ds_temp.clear();
        		this.pfn_DatasetAddColumn(this.ds_temp, "PRODUCTDEFID,PRODUCTDEFVERSION,PROCESSDEFID,PROCESSDEFVERSION,PROCESSSEGMENTID,LANGUAGETYPE");

        		this.ds_temp.setColumn(0, "PRODUCTDEFID", this.ds_Target.getColumn(nRow, "PRODUCTDEFID"));
        		this.ds_temp.setColumn(0, "PRODUCTDEFVERSION", this.ds_Target.getColumn(nRow, "PRODUCTDEFVERSION"));
        		this.ds_temp.setColumn(0, "PROCESSDEFID", this.ds_Target.getColumn(nRow, "PROCESSDEFID"));
        		this.ds_temp.setColumn(0, "PROCESSDEFVERSION", this.ds_Target.getColumn(nRow, "PROCESSDEFVERSION"));
        		this.ds_temp.setColumn(0, "PROCESSSEGMENTID", e.newvalue);
        		this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        		var sSvcID = "selectResourceByProductSegment";
        		var sController = "/pcm04300/selectResourceByProductSegment.do";
        		var sInDatasets = "INPUT=ds_temp";
        		var sOutDatasets = "ds_Resource=output";
        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        	} else if(e.columnid == "RESOURCEID"){

        	}
        };

        this.div_work_div_reason_cbo_SEGMENT_onitemchanged = function(obj,e)
        {
        	this.ds_Change.setColumn(0,"TOSEQUENCE",this.ds_Segment.getColumn(e.postindex, "USERSEQUENCE"));
        };

        this.div_work_div_reason_cbo_RESOURCE_onitemchanged = function(obj,e)
        {
        	this.ds_Change.setColumn(0,"AREAID",this.ds_Resource.getColumn(e.postindex, "AREAID"));
        };

        this.ds_search_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "PRODUCTDEFID")
        	{
        		this.ds_search.setColumn(0,"PRODUCTDEFVERSION","");
        		this.ds_search.setColumn(0,"PRODUCTDEFNAME","");
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_LOTID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_LOTID_onclick,this);
            this.tab_search.Tabpage1.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_AREAID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_AREAID_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_work.form.grdWIP.addEventHandler("onselectchanged",this.div_work_grd_basApproval_onselectchanged,this);
            this.div_work.form.grdWIP.addEventHandler("oncelldblclick",this.div_work_grdWIP_oncelldblclick,this);
            this.div_work.form.grdTarget.addEventHandler("onselectchanged",this.div_work_grd_basApproval_onselectchanged,this);
            this.div_work.form.grdTarget.addEventHandler("oncelldblclick",this.div_work_grdTarget_oncelldblclick,this);
            this.div_work.form.btn_Up.addEventHandler("onclick",this.div_work_form_btn_up_onclick,this);
            this.div_work.form.btn_Down.addEventHandler("onclick",this.div_work_form_btn_down_onclick,this);
            this.div_work.form.div_reason.form.cbo_RESOURCE.addEventHandler("onitemchanged",this.div_work_div_reason_cbo_RESOURCE_onitemchanged,this);
            this.div_work.form.div_reason.form.cbo_SEGMENT.addEventHandler("onitemchanged",this.div_work_div_reason_cbo_SEGMENT_onitemchanged,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
            this.ds_WIP.addEventHandler("cancolumnchange",this.ds_WIP_cancolumnchange,this);
            this.ds_Change.addEventHandler("oncolumnchanged",this.ds_Change_oncolumnchanged,this);
        };
        this.loadIncludeScript("PCM04300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
