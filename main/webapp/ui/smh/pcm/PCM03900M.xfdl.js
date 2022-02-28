(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM03900M");
            this.set_titletext("예약 Locking");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"STEP\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENTS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_wiplist", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTROUTING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lockingList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"LOCKINGTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOCKINGREASON\" type=\"STRING\" size=\"256\"/><Column id=\"LOCKINGUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LOCKINGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTROUTING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_cbo_Targetsegment", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCbo", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTROUTING\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_Step", this);
            obj._setContents("<ColumnInfo><Column id=\"STEPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_ReasonCode", this);
            obj._setContents("<ColumnInfo><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static01","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("1");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","58","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("화면명");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:20","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","26",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","15","290",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            obj.set_taborder("11");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01",null,"0","15","290","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            obj.set_taborder("12");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            obj.set_taborder("13");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            obj.set_taborder("14");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_PLANTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("PLANT");
            obj.set_taborder("15");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","sta_PLANTID:5",null,"165","20",null,"sta_PLANTID:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_LOTID","0","sta_PLANTID:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            obj.set_taborder("16");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","sta_LOTID:5",null,null,"20","37","sta_LOTID:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_LOTID",null,null,"22","20","15","sta_LOTID:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFID","0","sta_LOTID:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            obj.set_taborder("17");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","sta_PRODUCTDEFID:5",null,null,"20","37","sta_PRODUCTDEFID:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,null,"22","20","15","sta_PRODUCTDEFID:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFNAME","0","sta_PRODUCTDEFID:30","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            obj.set_taborder("18");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","sta_PRODUCTDEFNAME:5",null,null,"20","15","sta_PRODUCTDEFNAME:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_AREAID","0","sta_PRODUCTDEFNAME:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            obj.set_taborder("19");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID","sta_AREAID:5",null,null,"20","37","sta_AREAID:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_AREAID",null,null,"22","20","15","sta_AREAID:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTIONTYPE","0","sta_AREAID:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            obj.set_taborder("20");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTIONTYPE","sta_PRODUCTIONTYPE:5",null,"165","20",null,"sta_PRODUCTIONTYPE:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDIVISION","0","sta_PRODUCTIONTYPE:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("THEPRODUCTTYPE");
            obj.set_taborder("21");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDIVISION","sta_PRODUCTDIVISION:5",null,"165","20",null,"sta_PRODUCTDIVISION:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_OWNTYPE","0","sta_PRODUCTDIVISION:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("자사/외주구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("48DE73F771EB464BBB67974147C9F0B6");
            obj.set_taborder("22");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_OWNTYPE","sta_OWNTYPE:5",null,"165","20",null,"sta_OWNTYPE:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,OwnType,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static04",null,"230","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            obj.set_taborder("23");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","Static04:0","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_cssclass("btn_SA_search");
            obj.set_hotkey("F2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static05","161",null,"10","27",null,"btn_search:-32",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            obj.set_taborder("24");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","Static04:0","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_cssclass("btn_SA_reset");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFVERSION","0","sta_PRODUCTDEFID:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","sta_PRODUCTDEFVERSION:5","edt_PRODUCTDEFID:5","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","130","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("재공현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("WIPLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_wiplist",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_wiplist","0","staTitle:5",null,null,"0","50.14%",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("none");
            obj.set_binddataset("ds_wiplist");
            obj.set_cellclickbound("control");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"67\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" colspan=\"11\" text=\"재공현황\" tooltiptext=\"WIPLIST\"/><Cell col=\"13\" rowspan=\"2\" text=\"Lot Routing&#13;&#10;적용여부\" tooltiptext=\"ISLOTROUTING\"/><Cell col=\"14\" colspan=\"2\" text=\"재공계\" tooltiptext=\"WIPQTY\"/><Cell col=\"16\" colspan=\"2\" text=\"인수대기\" tooltiptext=\"WAITFORRECEIVE\"/><Cell col=\"18\" colspan=\"2\" text=\"인수\" tooltiptext=\"ACCEPT\"/><Cell col=\"20\" colspan=\"2\" text=\"작업시작\" tooltiptext=\"WORKSTART\"/><Cell col=\"22\" colspan=\"2\" text=\"작업완료\" tooltiptext=\"WORKEND\"/><Cell col=\"24\" colspan=\"4\" text=\"재공현황\" tooltiptext=\"WIPLIST\"/><Cell row=\"1\" col=\"2\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell row=\"1\" col=\"3\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell row=\"1\" col=\"4\" tooltiptext=\"INNERREVISION\" text=\"Rev.\"/><Cell row=\"1\" col=\"5\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell row=\"1\" col=\"6\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"7\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"8\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell row=\"1\" col=\"9\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell row=\"1\" col=\"10\" text=\"Roll/Sheet\" tooltiptext=\"RTRSHT_WORDWRAP\"/><Cell row=\"1\" col=\"11\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell row=\"1\" col=\"12\" text=\"단위\" tooltiptext=\"UNIT\"/><Cell row=\"1\" col=\"14\" text=\"수량\" tooltiptext=\"OSPDAY26QTY\"/><Cell row=\"1\" col=\"15\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell row=\"1\" col=\"16\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"17\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"18\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"19\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"20\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"21\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"22\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"23\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell row=\"1\" col=\"24\" text=\"리드타임\" tooltiptext=\"LEADTIME\"/><Cell row=\"1\" col=\"25\" text=\"LOT 투입일\" tooltiptext=\"LOTINPUTDATE\"/><Cell row=\"1\" col=\"26\" text=\"납기일자\" tooltiptext=\"DELIVERYDATE\"/><Cell row=\"1\" col=\"27\" text=\"잔여일수\" tooltiptext=\"LEFTDATE\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:LOTTYPE\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"6\" text=\"bind:USERSEQUENCE\"/><Cell col=\"7\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"8\" text=\"bind:PLANTID\"/><Cell col=\"9\" textAlign=\"left\" text=\"bind:AREANAME\"/><Cell col=\"10\" text=\"bind:RTRSHT\"/><Cell col=\"11\" textAlign=\"left\" text=\"bind:LOTID\"/><Cell col=\"12\" text=\"bind:UNIT\"/><Cell col=\"13\" text=\"bind:ISLOTROUTING\"/><Cell col=\"14\" textAlign=\"right\" displaytype=\"number\" text=\"bind:QTY\"/><Cell col=\"15\" textAlign=\"right\" displaytype=\"number\" text=\"bind:PANELQTY\"/><Cell col=\"16\" textAlign=\"right\" displaytype=\"number\" text=\"bind:SENDPCSQTY\"/><Cell col=\"17\" textAlign=\"right\" displaytype=\"number\" text=\"bind:SENDPANELQTY\"/><Cell col=\"18\" textAlign=\"right\" displaytype=\"number\" text=\"bind:RECEIVEPCSQTY\"/><Cell col=\"19\" textAlign=\"right\" displaytype=\"number\" text=\"bind:RECEIVEPANELQTY\"/><Cell col=\"20\" textAlign=\"right\" displaytype=\"number\" text=\"bind:WORKSTARTPCSQTY\"/><Cell col=\"21\" textAlign=\"right\" displaytype=\"number\" text=\"bind:WORKSTARTPANELQTY\"/><Cell col=\"22\" textAlign=\"right\" displaytype=\"number\" text=\"bind:WORKENDPCSQTY\"/><Cell col=\"23\" textAlign=\"right\" displaytype=\"number\" text=\"bind:WORKENDPANELQTY\"/><Cell col=\"24\" textAlign=\"right\" displaytype=\"number\" text=\"bind:LEADTIME\"/><Cell col=\"25\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" text=\"bind:LOTINPUTDATE\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"26\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" text=\"bind:DELIVERYDATE\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"27\" displaytype=\"number\" text=\"bind:LEFTDATE\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static00","40%","grd_wiplist:0","58","15",null,null,null,null,null,null,this.div_work.form);
            obj.set_text("h15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_Down","40%","Static00:0","24","23",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_shuttleB");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_Up","btn_Down:10","Static00:0","24","23",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_shuttleT");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static01","40%","btn_Down:0","58","15",null,null,null,null,null,null,this.div_work.form);
            obj.set_text("h15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("staTitle1","0","Static00:5","117","34","841",null,null,null,null,null,this.div_work.form);
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("TARGETLOCKING");
            obj.set_text("Locking 대상");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("grd_list3",null,"Static01:1","290",null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.getSetter("tabindex").set("0");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_PROCESSSEGMENTID","0","10","103","20",null,null,null,null,null,null,this.div_work.form.grd_list3.form);
            obj.set_text("대상 공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("TARGETSEGMENT");
            this.div_work.form.grd_list3.addChild(obj.name, obj);

            obj = new Combo("cbo_PROCESSSEGMENTID","sta_PROCESSSEGMENTID:5",null,"165","20",null,"sta_PROCESSSEGMENTID:-20",null,null,null,null,this.div_work.form.grd_list3.form);
            obj.set_taborder("1");
            obj.set_codecolumn("PROCESSSEGMENTID");
            obj.set_innerdataset("ds_cbo_Targetsegment");
            obj.set_datacolumn("PROCESSSEGMENTNAME");
            obj.set_text("");
            obj.set_index("0");
            this.div_work.form.grd_list3.addChild(obj.name, obj);

            obj = new Combo("cbo_REASONCODE","108","85","165","20",null,null,null,null,null,null,this.div_work.form.grd_list3.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_cbo_ReasonCode");
            obj.set_codecolumn("REASONCODEID");
            obj.set_datacolumn("REASONCODENAME");
            obj.set_text("");
            obj.set_index("0");
            this.div_work.form.grd_list3.addChild(obj.name, obj);

            obj = new Static("sta_comments","0","cbo_REASONCODE:5",null,"20","10",null,null,null,null,null,this.div_work.form.grd_list3.form);
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("UNIQUENESS");
            this.div_work.form.grd_list3.addChild(obj.name, obj);

            obj = new TextArea("txa_COMMENTS","10","sta_comments:5",null,null,"10","10",null,null,null,null,this.div_work.form.grd_list3.form);
            obj.set_taborder("5");
            this.div_work.form.grd_list3.addChild(obj.name, obj);

            obj = new Combo("cbo_STEP","108","cbo_PROCESSSEGMENTID:5","165","20",null,null,null,null,null,null,this.div_work.form.grd_list3.form);
            obj.set_taborder("4");
            obj.set_codecolumn("STEPCODE");
            obj.set_innerdataset("ds_cbo_Step");
            obj.set_datacolumn("STEPNAME");
            obj.set_text("");
            obj.set_index("0");
            this.div_work.form.grd_list3.addChild(obj.name, obj);

            obj = new Static("sta_STEP","0","sta_PROCESSSEGMENTID:5","103","20",null,null,null,null,null,null,this.div_work.form.grd_list3.form);
            obj.set_text("Step");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("5");
            this.div_work.form.grd_list3.addChild(obj.name, obj);

            obj = new Combo("cbo_REASONCODECLASS","108","cbo_STEP:5","165","20",null,null,null,null,null,null,this.div_work.form.grd_list3.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,LockingReasonCode,,Y,Y");
            obj.set_text("");
            obj.set_index("0");
            this.div_work.form.grd_list3.addChild(obj.name, obj);

            obj = new Static("sta_REASONCODECLASS","0","sta_STEP:5","103","20",null,null,null,null,null,null,this.div_work.form.grd_list3.form);
            obj.set_text("분류");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("7");
            obj.set_tooltiptext("CLASSIFICATION");
            this.div_work.form.grd_list3.addChild(obj.name, obj);

            obj = new Static("sta_REASONCODE","0","sta_REASONCODECLASS:5","103","20",null,null,null,null,null,null,this.div_work.form.grd_list3.form);
            obj.set_text("사유");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("9");
            obj.set_tooltiptext("PCRNO");
            this.div_work.form.grd_list3.addChild(obj.name, obj);

            obj = new Grid("grd_lockingList","0","staTitle1:0",null,null,"grd_list3:10","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_lockingList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell col=\"3\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell col=\"4\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"5\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"6\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"7\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"8\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell col=\"9\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell col=\"10\" text=\"Roll/Sheet\" tooltiptext=\"RTRSHT_WORDWRAP\"/><Cell col=\"11\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"12\" text=\"단위\" tooltiptext=\"UNIT\"/><Cell col=\"13\" text=\"리드타임\" tooltiptext=\"LEADTIME\"/><Cell col=\"14\" text=\"LOT 투입일\" tooltiptext=\"LOTINPUTDATE\"/><Cell col=\"15\" text=\"납기일자\" tooltiptext=\"DELIVERYDATE\"/><Cell col=\"16\" text=\"잔여일수\" tooltiptext=\"LEFTDATE\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:LOTTYPE\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:USERSEQUENCE\"/><Cell col=\"7\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:PLANTID\"/><Cell col=\"9\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:RTRSHT\"/><Cell col=\"11\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:UNIT\"/><Cell col=\"13\" text=\"bind:LEADTIME\" textAlign=\"left\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:LOTINPUTDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"15\" text=\"bind:DELIVERYDATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"16\" text=\"bind:LEFTDATE\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_wiplist","staTitle:-60","1","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("11");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("staTitle1_00",null,"Static00:5","117",null,"grd_list3:-119","grd_list3:0",null,null,null,null,this.div_work.form);
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("LOCKINGCODE");
            obj.set_text("Locking 사유");
            obj.set_taborder("12");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_lockingList","staTitle1:-11","Static00:5","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("12");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

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

            obj = new BindItem("item1","tab_search.Tabpage1.form.edt_LOTID","value","ds_search","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.Tabpage1.form.edt_PRODUCTDEFID","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.Tabpage1.form.edt_PRODUCTDEFNAME","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.Tabpage1.form.edt_AREAID","value","ds_search","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.Tabpage1.form.cbo_PRODUCTIONTYPE","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.Tabpage1.form.cbo_PRODUCTDIVISION","value","ds_search","PRODUCTDIVISION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.Tabpage1.form.cbo_OWNTYPE","value","ds_search","OWNTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_work.form.grd_list3.form.cbo_PROCESSSEGMENTID","value","ds_search","PROCESSSEGMENTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_search.Tabpage1.form.cbo_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_work.form.grd_list3.form.cbo_STEP","value","ds_search","STEP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_work.form.grd_list3.form.cbo_REASONCODECLASS","value","ds_search","REASONCODECLASSID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_work.form.grd_list3.form.cbo_REASONCODE","value","ds_search","REASONCODEID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_work.form.grd_list3.form.txa_COMMENTS","value","ds_search","COMMENTS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM03900M.xfdl","lib::lib_base.xjs");
        this.addIncludeScript("PCM03900M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM03900M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM03900M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 예약 Locking
         * 파일명 		: PCM03900M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2021.05.21
         *
         * 설  명		:  예약 Locking 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.21	박대호   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_base.xjs"); /*include "lib::lib_base.xjs"*/;	//기준관리 공통 라이브러리 include
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
        	// 초기화 (공통)
        	this.nfn_formInit(obj);

        	this.fn_initCombo();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색(메인 -  고객정보 그리드)
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_wiplist.clearData();
        	this.ds_lockingList.clearData();
        	this.fn_countSearch();

        	var sSvcID 			= "selectWIPList";
        	var sController 	= "/pcm03900/selectWIPList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_wiplist=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
         	if (!this.gfn_dsIsUpdated(this.ds_lockingList) )
         	{
         		this.gfn_Message("NoSaveData", null, "warning", "ok");
         		return;
         	}
        	var component = this.div_work.form.grd_list3;
        	//대상공정
        	var strColIdList = "cbo_PROCESSSEGMENTID";
        	var strColNmList = "TARGETSEGMENT";
        	var result = this.nfn_MandatoryCheck(component, strColIdList, strColNmList)
        	if(result != true)	return;
        	//Step
        	strColIdList = "cbo_STEP";
        	strColNmList = "STEPCODECLASSID";
        	result = this.nfn_MandatoryCheck(component, strColIdList, strColNmList)
        	if(result != true)	return;
        	//분류
        	strColIdList = "cbo_REASONCODECLASS";
        	strColNmList = "CLASSIFICATION";
        	result = this.nfn_MandatoryCheck(component, strColIdList, strColNmList)
        	if(result != true)	return;
        	//사유
        	strColIdList = "cbo_REASONCODE";
        	strColNmList = "PCRNO";
        	result = this.nfn_MandatoryCheck(component, strColIdList, strColNmList)
        	if(result != true)	return;
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
         	var sSvcID = "saveLotLocking";
         	var sController = "/pcm03900/saveLotLocking.do";
         	var sInDatasets = "ds_search=ds_search ds_lockingList=ds_lockingList:A";
         	var sOutDatasets = "";

         	var sArgs = "";
         	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_initCombo();
        	this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        };

        /*
         * 기능 : 신규
         */
        this.fn_new = function(obj,e)
        {

        };


        /*
         * 기능 : 삭제
         */
        this.fn_delete = function(obj,e)
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
        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	switch(trId)
        	{
        		case "selectEcmLookupValuesVList2ds_CSiteTypeALL" :
        		{
        			this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        			this.getReasonCode();
        			break;
        		}
        		case "saveLotLocking" :
        		{
        			if(errCD == 0)
        			{
        				this.gfn_Message("정상적으로 등록 되었습니다.", "", "information", "ok");
        				this.ds_lockingList.clearData();
        				this.fn_search();
        			}
        			else
        			{
        				this.gfn_Message("에러가 발생하였습니다.", "", "error", "ok");
        			}
        			this.fn_countSearch();
        			break;
        		}
        		default:
        		{
        		}
        		break;
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
        	switch (sPopupId)
        	{
        		case "POPUP_LOTID" :
        		{
        			this.tab_search.Tabpage1.form.edt_LOTID.set_value(rtn);
        		}
        		break;
        		case "POPUP_PRODUCTDEFID" :
        		{//PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME
        			this.setProduct_ProdVersion(rtn, this.ds_cbo_ProdVersion, this.ds_search, "C");
        			rtn = this.gfn_split(rtn, ",");
        			if (rtn.length == 3)
        			{
        				this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.set_value(rtn[0]);
        				this.tab_search.Tabpage1.form.edt_PRODUCTDEFNAME.set_value(rtn[2]);
        				this.ds_search.setColumn(0, "PRODUCTDEFVERSION", rtn[1]);
        			}
        			else
        			{
        				var valueId = [];
        				var valueName = [];
        				for (var i = 0; i < rtn.length; i++)
        				{
        					if ((i % 3) == 0)
        					{
        						valueId.push(rtn[i]);
        					}
        					else if ((i % 3) == 2)
        					{
        						valueName.push(rtn[i]);
        					}

        				}
        				this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.set_value(valueId.join(","));
        				this.tab_search.Tabpage1.form.edt_PRODUCTDEFNAME.set_value("");
        				this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");
        			}
        		}
        		break;
        		case "POPUP_AREAID" :
        		{
        			rtn = this.gfn_split(rtn, ",");
        			this.tab_search.Tabpage1.form.edt_AREAID.set_value(rtn[1]);
        			this.ds_search.setColumn( 0, "AREAID",          rtn[0] );
        		}
        		break;
        	}

        };
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        this.fn_initCombo = function ()
        {
        	this.ds_cbo_ProdVersion.deleteAll();
        	this.AddAll(this.ds_cbo_ProdVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");
        	this.ds_search.setColumn(0, "PRODUCTDEFID", "");
        	this.ds_search.setColumn(0,"PRODUCTIONTYPE","Production");
        	this.ds_search.setColumn(0,"PRODUCTDIVISION","Product");

        	this.ds_search.setColumn(0, "PROCESSSEGMENTID", "");
        	this.ds_search.setColumn(0, "STEP", "");
        	this.ds_search.setColumn(0, "REASONCODECLASSID", "LotLockinETC");
        	this.ds_search.setColumn(0, "REASONCODEID", "");
        	this.ds_search.setColumn(0, "COMMENTS", "");
        	this.getReasonCode();
        };

        //그리드 카운터 조회
        this.fn_countSearch = function ()
        {
        	this.div_work.form.sta_cnt_ds_wiplist.set_text( "Count : <fc v='#f31d24'>" + this.ds_wiplist.getRowCount() + "</fc>");
        	this.div_work.form.sta_cnt_ds_lockingList.set_text( "Count : <fc v='#f31d24'>" + this.ds_lockingList.getRowCount() + "</fc>");
        };
        //대상공정 콤보조회
        this.getTargetsegment = function ()
        {
        	this.ds_cbo_Targetsegment.clearData();


        	var sSvcID 			= "selectProcessPathByProductDefAndSequence";
        	var sController 	= "/pcm03900/selectProcessPathByProductDefAndSequence.do";
        	if(this.ds_searchCbo.getColumn(0,"ISLOTROUTING") == "Y") sController 	= "/pcm03900/selectProcessPathByProductDef4Lot.do";
        	var sInDatasets 	= "INPUT=ds_searchCbo";
        	var sOutDatasets 	= "ds_cbo_Targetsegment=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        this.getReasonCode = function()
        {
        	this.ds_cbo_ReasonCode.clearData();

        	var sSvcID 			= "selectReasonCodeList";
        	var sController 	= "/pcm03900/selectReasonCodeList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_cbo_ReasonCode=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        /*
         *	기능 : LotNo 검색 버튼 클릭 시
         */
        this.tab_search_Tabpage1_btn_LOTID_onclick = function(obj,e)
        {
        	var oArg = {};
        	if (this.tab_search.Tabpage1.form.edt_LOTID.value != undefined)
        	{
        		oArg.arg_type        = "CA";
        	}
        	else
        	{
        		oArg.arg_type        = "C";
        	}
        	oArg.arg_popupCd     = "P00159";
        	oArg.arg_popupNm     = "Lot No 조회";
        	oArg.arg_rtnCols     = "LOTID";
        	oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
        	oArg.arg_paramValues = "LOTID|" + this.gf_getLanguageType();
        	oArg.arg_searchStr   = "P_LOTID=" + this.tab_search.Tabpage1.form.edt_LOTID.value;
        	this.gfn_openPopup( "POPUP_LOTID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };
        /*
         *	기능 : 품목 검색 버튼 클릭 시
         */
        this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	var oArg = {};

        	if (this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value != undefined)
        	{
        		oArg.arg_type        = "CA";
        	}
        	else
        	{
        		oArg.arg_type        = "C";
        	}
        	oArg.arg_popupCd     = "P00211";
        	oArg.arg_popupNm     = "품목 선택";
        	oArg.arg_rtnCols     = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME";
        	oArg.arg_paramCols   = "P_POPTYPE";
        	oArg.arg_paramValues = "PRODUCTDEFINITION";
        	oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value;
        	this.gfn_openPopup( "POPUP_PRODUCTDEFID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");

        };
        /*
         *	기능 : 작업장 검색 버튼 클릭 시
         */
        this.tab_search_Tabpage1_btn_AREAID_onclick = function(obj,e)
        {
        	var oArg = {};
        	if (this.tab_search.Tabpage1.form.edt_AREAID.value != undefined)
        	{
        		oArg.arg_type        = "BA";
        	}
        	else
        	{
        		oArg.arg_type        = "B";
        	}
        	oArg.arg_popupCd     = "P00157";
        	oArg.arg_popupNm     = "작업장 선택";
        	oArg.arg_rtnCols     = "AREAID|AREANAME";
        	oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE|P_USER|P_PLANTID";
        	oArg.arg_paramValues = "AREALISTBYAUTHORITY|" + this.gf_getLanguageType() + "|" + this.gf_getUserAcnt() + "|"+ this.ds_search.getColumn( 0, "PLANTID" );
        	oArg.arg_searchStr   = "P_DICTIONARY=" + this.tab_search.Tabpage1.form.edt_AREAID.value;
        	this.gfn_openPopup( "POPUP_AREAID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };
        /*
         *	기능 : 아래이동 화살표 클릭 시
         */
        this.div_work_form_btn_down_onclick = function(obj,e)
        {
         	var chk = false;
         	for (var i = 0; i < this.ds_wiplist.rowcount; i++)
         	{
         		if (this.ds_wiplist.getColumn( i, "CHK" ) == true)
         		{
         			chk = true;
         			break;
         		}
         	};

         	if (!chk)
         	{
         		return;
         	};

        	//재공현황내에서 겹치는ID비교
        	for (var i = 0; i < this.ds_wiplist.rowcount; i++)
        	{
        		if (this.ds_wiplist.getColumn( i, "CHK" ) == true)
        		{
        			for (var r = 0; r < this.ds_wiplist.rowcount; r++)
        			{
        				if (this.ds_wiplist.getColumn(r, "CHK") == true)
        				{
        					if(this.ds_wiplist.getColumn(i, "PRODUCTDEFID") != this.ds_wiplist.getColumn(r, "PRODUCTDEFID"))
        					{
        						// 다른 품목 ID는 선택할 수 없습니다.
        						this.gfn_Message("MixSelectProductDefID", null, "info");
        						return;
        					}
        					if(this.ds_wiplist.getColumn(i, "PRODUCTDEFVERSION") != this.ds_wiplist.getColumn(r, "PRODUCTDEFVERSION"))
        					{
        						// 다른 품목 버전은 선택할 수 없습니다.
        						this.gfn_Message("MixSelectProductDefVersion", null, "info");
        						return;
        					}
        // 					if(i==r) continue;  //ds_wiplist_cancolumnchange 에서 빠짐....
        // 					if(this.ds_wiplist.getColumn(i, "ISLOTROUTING") == "Y" && this.ds_wiplist.getColumn(r, "ISLOTROUTING") == "Y")
        // 					{
        // 						// LOT Routing 적용 LOT은 하나만 선택할 수 있습니다.
        // 						this.gfn_Message("NoMoreOnesLotRouting", null, "info");
        // 						this.ds_wiplist.setColumn(e.row, "CHK", false);
        // 						return;
        // 					}
        				}
        			}
        		}
        	}

         	//Locking 대상 데이터 체크
        	if(this.ds_lockingList.rowcount > 0)
        	{
        		for (var i = 0; i < this.ds_wiplist.rowcount; i++)
        		{
        			if (this.ds_wiplist.getColumn( i, "CHK" ) == true)
        			{

        				//Locking 대상과 겹치는 ID비교
        				if(this.ds_lockingList.getColumn(0, "PRODUCTDEFID") != this.ds_wiplist.getColumn(i, "PRODUCTDEFID"))
        				{
        					// 다른 품목 ID는 선택할 수 없습니다.
        					this.gfn_Message("MixSelectProductDefID", null, "info");
        					return;
        				}
        				if(this.ds_lockingList.getColumn(0, "PRODUCTDEFVERSION") != this.ds_wiplist.getColumn(i, "PRODUCTDEFVERSION"))
        				{
        					// 다른 품목 버전은 선택할 수 없습니다.
        					this.gfn_Message("MixSelectProductDefVersion", null, "info");
        					return;
        				}
        				if(this.ds_lockingList.getColumn(0, "ISLOTROUTING") == "Y" || this.ds_wiplist.getColumn(i, "ISLOTROUTING") == "Y")
        				{
        					// LOT Routing 적용 LOT은 하나만 선택할 수 있습니다.
        					this.gfn_Message("NoMoreOnesLotRouting", null, "info");
        					return;
        				}
        			}
        		};
        	}
        	this.ds_searchCbo.clearData();
        	this.ds_searchCbo.addRow();
         	for (var i = 0; i < this.ds_wiplist.getRowCount(); i++)
         	{
         		if (this.ds_wiplist.getColumn( i, "CHK") == true)
         		{
        			this.ds_searchCbo.setColumn(0, "PLANTID", this.ds_wiplist.getColumn(i, "PLANTID"));
        			this.ds_searchCbo.setColumn(0, "PRODUCTDEFID", this.ds_wiplist.getColumn(i, "PRODUCTDEFID"));
        			this.ds_searchCbo.setColumn(0, "PRODUCTDEFVERSION", this.ds_wiplist.getColumn(i, "PRODUCTDEFVERSION"));
        			this.ds_searchCbo.setColumn(0, "PROCESSDEFID", this.ds_wiplist.getColumn(i, "PROCESSDEFID"));
        			this.ds_searchCbo.setColumn(0, "PROCESSDEFVERSION", this.ds_wiplist.getColumn(i, "PROCESSDEFVERSION"));
        			this.ds_searchCbo.setColumn(0, "ISLOTROUTING", this.ds_wiplist.getColumn(i, "ISLOTROUTING"));
        			this.ds_searchCbo.setColumn(0, "USERSEQUENCE", this.ds_wiplist.getColumn(i, "USERSEQUENCE"));
         			this.ds_lockingList.copyRow(this.ds_lockingList.addRow(), this.ds_wiplist, i);
         			this.ds_lockingList.setColumn( (this.ds_lockingList.getRowCount() - 1), "CHK",  "" );
         		}
         	};

         	for (var i = this.ds_wiplist.getRowCount(); i >= 0; i--)
         	{
         		if (this.ds_wiplist.getColumn( i, "CHK") == true)
         		{
         			this.ds_wiplist.deleteRow( i );
         		}
         	};
        	this.fn_countSearch();
        	this.getTargetsegment();
        };
        /*
         *	기능 : 위이동 화살표 클릭 시
         */
        this.div_work_btn_Up_onclick = function(obj,e)
        {
        	var chk = false;
        	for (var i = 0; i < this.ds_lockingList.rowcount; i++)
        	{
        		if (this.ds_lockingList.getColumn( i, "CHK" ) == true)
        		{
        			chk = true;
        			break;
        		}
        	};

        	if (!chk)
        	{
        		return;
        	}

        	for(var i=this.ds_lockingList.rowcount-1 ; i>= 0 ; i--)
        	{
        		if (this.ds_lockingList.getColumn( i, "CHK") == true)
        		{
        			this.ds_lockingList.setColumn( i, "CHK",  false );
        			this.ds_wiplist.copyRow(this.ds_wiplist.addRow(), this.ds_lockingList, i);
        			this.ds_lockingList.deleteRow( i );
        		}
        	}

        // 	for (var i = 0; i < this.ds_lockingList.getRowCount(); i++)
        // 	{
        // 		if (this.ds_lockingList.getColumn( i, "CHK") == true)
        // 		{
        // 			this.ds_lockingList.setColumn( i, "CHK",  false );
        // 			this.ds_wiplist.copyRow(this.ds_wiplist.addRow(), this.ds_lockingList, i);
        //
        // 		}
        // 	};
        //
        // 	for (var i = this.ds_lockingList.getRowCount(); i >= 0; i--)
        // 	{
        // 		if (this.ds_lockingList.getColumn( i, "CHK") == true)
        // 		{
        // 			this.ds_lockingList.deleteRow( i );
        // 		}
        // 	};
        	this.fn_countSearch();

        };
        /*
         *	기능 : 체크박스 체크 이벤트
         */
        this.ds_wiplist_cancolumnchange = function(obj,e)
        {
        	if(e.columnid != "CHK" || e.newvalue == "0" ) return; // check 될 때 만 validation

        	try{

        			//현재 선택한 것과 다른 제품ID 가 있는지.
        			if(this.ds_wiplist.findRowExpr(this.gfnFormat("CHK=='1' && PRODUCTDEFID !='{0}'",this.ds_wiplist.getColumn(e.row, "PRODUCTDEFID"))) > -1){
        				this.gfn_Message("MixSelectProductDefID", "", "warning", "ok"); //다른 품목 ID는 선택할 수 없습니다.
        				return false;
        			}

        			if(this.ds_wiplist.findRowExpr(this.gfnFormat("CHK=='1' && PRODUCTDEFVERSION !='{0}'", this.ds_wiplist.getColumn(e.row, "PRODUCTDEFVERSION"))) > -1){
        				this.gfn_Message("MixSelectProductDefVersion", "", "warning", "ok"); //다른 품목 Rev는 선택할 수 없습니다.
        				return false;
        			}


        			if(this.ds_wiplist.findRowExpr("CHK==true && ISLOTROUTING=='Y'") > -1
        				|| (this.ds_wiplist.getColumn(e.row, "ISLOTROUTING") == "Y" && this.ds_wiplist.findRowExpr("CHK==true") > -1) )
        			{
        				this.gfn_Message("NoMoreOnesLotRouting", "", "warning", "ok"); // LOT Routing 적용 LOT은 하나만 선택할 수 있습니다.
        				return false;
        			}

        		} catch(ec){
        			trace("ds_wiplist_cancolumnchange ? " + ec.toString());
        	}
        };

        /*
         *	기능 : 대상공정콤보 선택이벤트
         */
        this.div_work_grd_list3_cbo_PROCESSSEGMENTID_onitemchanged = function(obj,e)
        {
        	this.ds_cbo_Step.clearData();

        	var sSvcID 			= "selectStepCboList";
        	var sController 	= "/pcm03900/selectStepCboList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_cbo_Step=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        /*
         *	기능 : 분류콤보 선택이벤트
         */
        this.div_work_grd_list3_cbo_REASONCODECLASS_onitemchanged = function(obj,e)
        {
        	this.getReasonCode();
        };


        this.ds_search_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "PRODUCTDEFID" && e.newvalue == "")
        	{
        		this.ds_search.setColumn(0,"PRODUCTDEFVERSION","");
        		this.ds_search.setColumn(0,"PRODUCTDEFNAME","");
        		this.ds_cbo_ProdVersion.clearData();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tabpage1.form.btn_LOTID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_LOTID_onclick,this);
            this.tab_search.Tabpage1.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick,this);
            this.tab_search.Tabpage1.form.btn_AREAID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_AREAID_onclick,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.div_work.form.grd_wiplist.addEventHandler("oncellclick",this.div_work_grd_wiplist_oncellclick,this);
            this.div_work.form.btn_Down.addEventHandler("onclick",this.div_work_form_btn_down_onclick,this);
            this.div_work.form.btn_Up.addEventHandler("onclick",this.div_work_btn_Up_onclick,this);
            this.div_work.form.grd_list3.form.cbo_PROCESSSEGMENTID.addEventHandler("onitemchanged",this.div_work_grd_list3_cbo_PROCESSSEGMENTID_onitemchanged,this);
            this.div_work.form.grd_list3.form.cbo_REASONCODE.addEventHandler("canitemchange",this.div_work_grd_list3_cbo_lockclass_canitemchange,this);
            this.div_work.form.grd_list3.form.cbo_REASONCODECLASS.addEventHandler("onitemchanged",this.div_work_grd_list3_cbo_REASONCODECLASS_onitemchanged,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
            this.ds_wiplist.addEventHandler("cancolumnchange",this.ds_wiplist_cancolumnchange,this);
        };
        this.loadIncludeScript("PCM03900M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
