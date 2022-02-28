(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM03000M");
            this.set_titletext("메시지 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search1", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDIVISION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search2", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search3", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ProductDefInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEF\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SegmentInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME_MIDDLE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME_TOP\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_WIP", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search1Copy", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDIVISION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search2Copy", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search3Copy", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_TargetWip", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_ProdVersion1", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFVERSIONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSIONNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_Message1", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MSGPROCSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"SHOWPOPUP\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SHOWPOPUP\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Message2", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MSGPROCSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"SHOWPOPUP\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SHOWPOPUP\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Message3", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MSGPROCSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"SHOWPOPUP\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SHOWPOPUP\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ProductDefInfoSelect", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEF\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","31",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","62",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","302","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","272","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("메시지 관리");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
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

            obj = new Static("staPRODUCTDEFID","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","10",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"10","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"0","15","290","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","0","15","290",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"105","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","131","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","125","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","125","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_hotkey("F2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFVERSION","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_innerdataset("ds_cbo_ProdVersion1");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFNAME","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDIVISION","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDIVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDIVISION","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,ProductDivision2,,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_search);
            obj.set_text("Tabpage2");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("staPROCSEGMENT","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("OPERATION");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_PROCSEGMENT","108","10",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_PROCSEGMENT",null,"10","22","20","15",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"0","15","290","0",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"30","45","20","91",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_search","15","50","146","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","56","10","27",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","50","102","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","0","15","290",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tab_search);
            obj.set_text("Tabpage3");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"225","45","20","91",null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","251","10","27",null,null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_PROCSEGMENT",null,"135","22","20","15",null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Static("staLOTTYPE","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("5");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","108","10",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("6");
            obj.set_autoselect("true");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_PROCSEGMENT","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("7");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Static("staPROCSEGMENT","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("8");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("OPERATION");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Static("staLOTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("9");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Combo("cbo_LOTTYPE","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("10");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_LOTID",null,"10","22","20","15",null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFID","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("12");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","60",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("13");
            obj.set_autoselect("true");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"60","22","20","15",null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","0","15","290",null,null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("15");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"0","15","290","0",null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("16");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","245","102","36",null,null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_search","15","245","146","36",null,null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFVERSION","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("19");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("20");
            obj.set_enable("false");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFNAME","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("21");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDIVISION","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("22");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDIVISION");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDIVISION","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("23");
            obj.set_codecolumn("C,ProductDivision2,,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Static("staAREAID","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("24");
            obj.set_text("작업장 코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("25");
            obj.set_autoselect("true");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_AREAID",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Combo("cbo_OWNTYPE","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("27");
            obj.set_codecolumn("C,OwnType,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Static("staOWNTYPE","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("28");
            obj.set_text("자사/외주구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("48DE73F771EB464BBB67974147C9F0B6");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFVERSION","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage3.form);
            obj.set_taborder("29");
            obj.set_enable("false");
            this.tab_search.Tabpage3.addChild(obj.name, obj);

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
            obj.set_text("품목");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","89","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("품목 리스트   ");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("GRIDPRODUCTLIST");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Div("divMsgInfo","0","55.26%",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staSENDSEGMENT","0","5","100","20",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.form);
            obj.set_taborder("1");
            obj.set_text("전달 공정");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            obj.set_tooltiptext("SENDSEGMENT");
            this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.addChild(obj.name, obj);

            obj = new Static("staMSGPROCSTATE","50%","5","100","20",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.form);
            obj.set_taborder("2");
            obj.set_text("공정진행상태");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("PROCESSSTATE");
            this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.addChild(obj.name, obj);

            obj = new CheckBox("chk_SHOWPOPUP","105","30","122","20",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.form);
            obj.set_taborder("0");
            obj.set_text("팝업으로 보여주기");
            obj.set_value("Y");
            obj.set_tooltiptext("CHKPOPUPVIEW");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.addChild(obj.name, obj);

            obj = new Button("btn_SENDSEGMENT",null,"5","22","20","staMSGPROCSTATE:0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.addChild(obj.name, obj);

            obj = new Edit("edt_SENDSEGMENT","staSENDSEGMENT:5","5",null,"20","btn_SENDSEGMENT:0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.form);
            obj.set_taborder("3");
            this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_MSGPROCSTATE","staMSGPROCSTATE:5","5",null,"20","5",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,4Step,SEL,Y,Y");
            this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.addChild(obj.name, obj);

            obj = new Static("staTitle","0","55","100","20",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.form);
            obj.set_taborder("6");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("TITLE");
            this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.addChild(obj.name, obj);

            obj = new Edit("edt_Title","105","55",null,"20","5",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.form);
            obj.set_taborder("7");
            this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.addChild(obj.name, obj);

            obj = new Div("div_edit","5","80",null,null,"5","5",null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.form);
            obj.set_taborder("8");
            obj.set_text("div_00");
            this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.addChild(obj.name, obj);

            obj = new Grid("grdProductDefInfo","0","34",null,null,"0","divMsgInfo:34",null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_ProductDefInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"350\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"2\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"3\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:PRODUCTDEFNAME\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_ProductDefInfo","staTitle:0","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdProductDefInfo",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staTitle2","8",null,"84","34",null,"divMsgInfo:3",null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("메시지 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_Main);
            obj.set_text("공정");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","117","34","841",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("표준공정 리스트   ");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Div("divMsgInfo","0","55.26%",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("staMSGPROCSTATE","0.00%","5","100","20",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form.divMsgInfo.form);
            obj.set_taborder("1");
            obj.set_text("공정진행상태");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("PROCESSSTATE");
            this.div_work.form.tab_Main.Tabpage2.form.divMsgInfo.addChild(obj.name, obj);

            obj = new CheckBox("chk_SHOWPOPUP","105","30","122","20",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form.divMsgInfo.form);
            obj.set_taborder("0");
            obj.set_text("팝업으로 보여주기");
            obj.set_value("true");
            obj.set_tooltiptext("CHKPOPUPVIEW");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.div_work.form.tab_Main.Tabpage2.form.divMsgInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_MSGPROCSTATE","staMSGPROCSTATE:5","5","200","20",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form.divMsgInfo.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,4Step,SEL,Y,Y");
            this.div_work.form.tab_Main.Tabpage2.form.divMsgInfo.addChild(obj.name, obj);

            obj = new Static("staTitle","0","55","100","20",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form.divMsgInfo.form);
            obj.set_taborder("3");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("TITLE");
            this.div_work.form.tab_Main.Tabpage2.form.divMsgInfo.addChild(obj.name, obj);

            obj = new Edit("edt_Title","105","55",null,"20","5",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form.divMsgInfo.form);
            obj.set_taborder("4");
            this.div_work.form.tab_Main.Tabpage2.form.divMsgInfo.addChild(obj.name, obj);

            obj = new Div("div_edit","5","80",null,null,"5","5",null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form.divMsgInfo.form);
            obj.set_taborder("5");
            obj.set_text("div_00");
            this.div_work.form.tab_Main.Tabpage2.form.divMsgInfo.addChild(obj.name, obj);

            obj = new Grid("grdSegmentInfo","0","34",null,null,"0","divMsgInfo:34",null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_SegmentInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"35\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"대공정\" tooltiptext=\"LARGEPROCESSSEGMENT\"/><Cell col=\"3\" text=\"중공정\" tooltiptext=\"MIDDLEPROCESSSEGMENT\"/><Cell col=\"4\" text=\"공정 코드\" tooltiptext=\"PROCESSSEGMENTID\"/><Cell col=\"5\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" textAlign=\"center\" text=\"bind:PROCESSSEGMENTCLASSNAME_TOP\"/><Cell col=\"3\" textAlign=\"center\" text=\"bind:PROCESSSEGMENTCLASSNAME_MIDDLE\"/><Cell col=\"4\" textAlign=\"center\" text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTNAME\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_SegmentInfo","staTitle:0","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdSegmentInfo",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("staTitle2","0",null,"84","34",null,"divMsgInfo:0",null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("메시지 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab_Main);
            obj.set_text("LOT");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Div("divMsgInfo",null,"55.26%","500",null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("10");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("staSENDSEGMENT","0","5","100","20",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.form);
            obj.set_taborder("1");
            obj.set_text("전달 공정");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            obj.set_tooltiptext("SENDSEGMENT");
            this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.addChild(obj.name, obj);

            obj = new Static("staMSGPROCSTATE","50%","5","100","20",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.form);
            obj.set_taborder("2");
            obj.set_text("공정진행상태");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("PROCESSSTATE");
            this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.addChild(obj.name, obj);

            obj = new CheckBox("chk_SHOWPOPUP","105","30","122","20",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.form);
            obj.set_taborder("0");
            obj.set_text("팝업으로 보여주기");
            obj.set_value("true");
            obj.set_tooltiptext("CHKPOPUPVIEW");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.addChild(obj.name, obj);

            obj = new Button("btn_SENDSEGMENT",null,"5","22","20","staMSGPROCSTATE:0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.addChild(obj.name, obj);

            obj = new Edit("edt_SENDSEGMENT","staSENDSEGMENT:5","5",null,"20","btn_SENDSEGMENT:0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.form);
            obj.set_taborder("3");
            this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_MSGPROCSTATE","staMSGPROCSTATE:5","5",null,"20","5",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,4Step,SEL,Y,Y");
            this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.addChild(obj.name, obj);

            obj = new Static("staTitle","0","55","100","20",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.form);
            obj.set_taborder("6");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("TITLE");
            this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.addChild(obj.name, obj);

            obj = new Edit("edt_Title","105","55",null,"20","5",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.form);
            obj.set_taborder("7");
            this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.addChild(obj.name, obj);

            obj = new Div("div_edit","5","80",null,null,"5","5",null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.form);
            obj.set_taborder("8");
            obj.set_text("div_00");
            this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.addChild(obj.name, obj);

            obj = new Grid("grdTargetWip","0","55.26%",null,null,"510","0.00%",null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("7");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_TargetWip");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"35\" band=\"left\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" colspan=\"13\" text=\"재공현황\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPLIST\"/><Cell col=\"15\" colspan=\"2\" text=\"재공계\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPQTY\"/><Cell col=\"17\" colspan=\"2\" text=\"인수대기\" cssclass=\"cell_headMaster\" tooltiptext=\"WAITFORRECEIVE\"/><Cell col=\"19\" colspan=\"2\" text=\"인수\" cssclass=\"cell_headMaster\" tooltiptext=\"ACCEPT\"/><Cell col=\"21\" colspan=\"2\" text=\"작업시작\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPSTARTQTY\"/><Cell col=\"23\" colspan=\"2\" text=\"작업완료\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPENDQTY\"/><Cell col=\"25\" colspan=\"4\" text=\"재공현황\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPLIST\"/><Cell row=\"1\" col=\"2\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell row=\"1\" col=\"3\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell row=\"1\" col=\"4\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell row=\"1\" col=\"5\" text=\"품목명\"/><Cell row=\"1\" col=\"6\" text=\"공정수순\"/><Cell row=\"1\" col=\"7\" text=\"공정명\"/><Cell row=\"1\" col=\"8\" text=\"Site ID\"/><Cell row=\"1\" col=\"9\" text=\"작업장\"/><Cell row=\"1\" col=\"10\" text=\"Roll/Sheet\"/><Cell row=\"1\" col=\"11\" text=\"Lot No.\"/><Cell row=\"1\" col=\"12\" text=\"단위\"/><Cell row=\"1\" col=\"13\" text=\"Locking 여부\"/><Cell row=\"1\" col=\"14\" text=\"보류 여부\"/><Cell row=\"1\" col=\"15\" text=\"수량\"/><Cell row=\"1\" col=\"16\" text=\"수량(PNL)\"/><Cell row=\"1\" col=\"17\" text=\"PCS\"/><Cell row=\"1\" col=\"18\" text=\"PNL\"/><Cell row=\"1\" col=\"19\" text=\"PCS\"/><Cell row=\"1\" col=\"20\" text=\"PNL\"/><Cell row=\"1\" col=\"21\" text=\"PCS\"/><Cell row=\"1\" col=\"22\" text=\"PNL\"/><Cell row=\"1\" col=\"23\" text=\"PCS\"/><Cell row=\"1\" col=\"24\" text=\"PNL\"/><Cell row=\"1\" col=\"25\" text=\"리드타임\"/><Cell row=\"1\" col=\"26\" text=\" LOT 투입일\"/><Cell row=\"1\" col=\"27\" text=\"납기일자\"/><Cell row=\"1\" col=\"28\" text=\"잔여일수\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:LOTTYPE\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"6\" text=\"bind:USERSEQUENCE\"/><Cell col=\"7\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"8\" text=\"bind:PLANTID\"/><Cell col=\"9\" text=\"bind:AREANAME\"/><Cell col=\"10\" text=\"bind:RTRSHT\"/><Cell col=\"11\" text=\"bind:LOTID\"/><Cell col=\"12\" text=\"bind:UNIT\"/><Cell col=\"13\" text=\"bind:ISLOCKING\"/><Cell col=\"14\" text=\"bind:ISHOLD\"/><Cell col=\"15\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:QTY\"/><Cell col=\"16\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:PANELQTY\"/><Cell col=\"17\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:SENDPCSQTY\"/><Cell col=\"18\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:SENDPANELQTY\"/><Cell col=\"19\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:RECEIVEPCSQTY\"/><Cell col=\"20\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:RECEIVEPANELQTY\"/><Cell col=\"21\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:WORKSTARTPCSQTY\"/><Cell col=\"22\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:WORKSTARTPANELQTY\"/><Cell col=\"23\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:WORKENDPCSQTY\"/><Cell col=\"24\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:WORKENDPANELQTY\"/><Cell col=\"25\" text=\"bind:LEADTIME\"/><Cell col=\"26\" text=\"bind:LOTINPUTDATE\"/><Cell col=\"27\" text=\"bind:DELIVERYDATE\"/><Cell col=\"28\" text=\"bind:LEFTDATE\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("staTitle2","grdTargetWip:10",null,"84","34",null,"divMsgInfo:0",null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("9");
            obj.set_text("메시지 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","66","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("제공현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grdWIP","0","34",null,null,"0","grdTargetWip:52",null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_WIP");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"35\" band=\"left\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" colspan=\"13\" text=\"재공현황\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPLIST\"/><Cell col=\"15\" colspan=\"2\" text=\"재공계\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPQTY\"/><Cell col=\"17\" colspan=\"2\" text=\"인수대기\" cssclass=\"cell_headMaster\" tooltiptext=\"WAITFORRECEIVE\"/><Cell col=\"19\" colspan=\"2\" text=\"인수\" cssclass=\"cell_headMaster\" tooltiptext=\"ACCEPT\"/><Cell col=\"21\" colspan=\"2\" text=\"작업시작\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPSTARTQTY\"/><Cell col=\"23\" colspan=\"2\" text=\"작업완료\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPENDQTY\"/><Cell col=\"25\" colspan=\"4\" text=\"재공현황\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPLIST\"/><Cell row=\"1\" col=\"2\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell row=\"1\" col=\"3\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell row=\"1\" col=\"4\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell row=\"1\" col=\"5\" text=\"품목명\"/><Cell row=\"1\" col=\"6\" text=\"공정수순\"/><Cell row=\"1\" col=\"7\" text=\"공정명\"/><Cell row=\"1\" col=\"8\" text=\"Site ID\"/><Cell row=\"1\" col=\"9\" text=\"작업장\"/><Cell row=\"1\" col=\"10\" text=\"Roll/Sheet\"/><Cell row=\"1\" col=\"11\" text=\"Lot No.\"/><Cell row=\"1\" col=\"12\" text=\"단위\"/><Cell row=\"1\" col=\"13\" text=\"Locking 여부\"/><Cell row=\"1\" col=\"14\" text=\"보류 여부\"/><Cell row=\"1\" col=\"15\" text=\"수량\"/><Cell row=\"1\" col=\"16\" text=\"수량(PNL)\"/><Cell row=\"1\" col=\"17\" text=\"PCS\"/><Cell row=\"1\" col=\"18\" text=\"PNL\"/><Cell row=\"1\" col=\"19\" text=\"PCS\"/><Cell row=\"1\" col=\"20\" text=\"PNL\"/><Cell row=\"1\" col=\"21\" text=\"PCS\"/><Cell row=\"1\" col=\"22\" text=\"PNL\"/><Cell row=\"1\" col=\"23\" text=\"PCS\"/><Cell row=\"1\" col=\"24\" text=\"PNL\"/><Cell row=\"1\" col=\"25\" text=\"리드타임\"/><Cell row=\"1\" col=\"26\" text=\" LOT 투입일\"/><Cell row=\"1\" col=\"27\" text=\"납기일자\"/><Cell row=\"1\" col=\"28\" text=\"잔여일수\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:LOTTYPE\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"6\" text=\"bind:USERSEQUENCE\"/><Cell col=\"7\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"8\" text=\"bind:PLANTID\"/><Cell col=\"9\" text=\"bind:AREANAME\"/><Cell col=\"10\" text=\"bind:RTRSHT\"/><Cell col=\"11\" text=\"bind:LOTID\"/><Cell col=\"12\" text=\"bind:UNIT\"/><Cell col=\"13\" text=\"bind:ISLOCKING\"/><Cell col=\"14\" text=\"bind:ISHOLD\"/><Cell col=\"15\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:QTY\"/><Cell col=\"16\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:PANELQTY\"/><Cell col=\"17\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:SENDPCSQTY\"/><Cell col=\"18\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:SENDPANELQTY\"/><Cell col=\"19\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:RECEIVEPCSQTY\"/><Cell col=\"20\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:RECEIVEPANELQTY\"/><Cell col=\"21\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:WORKSTARTPCSQTY\"/><Cell col=\"22\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:WORKSTARTPANELQTY\"/><Cell col=\"23\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:WORKENDPCSQTY\"/><Cell col=\"24\" maskeditformat=\"#,###\" displaytype=\"mask\" textAlign=\"right\" text=\"bind:WORKENDPANELQTY\"/><Cell col=\"25\" text=\"bind:LEADTIME\"/><Cell col=\"26\" text=\"bind:LOTINPUTDATE\"/><Cell col=\"27\" text=\"bind:DELIVERYDATE\"/><Cell col=\"28\" text=\"bind:LEFTDATE\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_WIP","staTitle:0","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdWIP",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_suttleUp","23.80%","grdWIP:15","24","24",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_shuttleT");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_suttleDown",null,"grdWIP:15","24","24","btn_suttleUp:10",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_shuttleB");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"367","58","15","705",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("6");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("staTitle3","0",null,"69","34",null,"grdTargetWip:0",null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("8");
            obj.set_text("대상 LOT");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

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
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.Tabpage1.form.edt_PRODUCTDEFID","value","ds_search1","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.Tabpage1.form.cbo_PRODUCTDEFVERSION","value","ds_search1","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.Tabpage1.form.edt_PRODUCTDEFNAME","value","ds_search1","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.Tabpage1.form.cbo_PRODUCTDIVISION","value","ds_search1","PRODUCTDIVISION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.Tabpage2.form.edt_PROCSEGMENT","value","ds_search2","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.Tabpage3.form.edt_LOTID","value","ds_search3","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.Tabpage3.form.edt_AREAID","value","ds_search3","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.Tabpage3.form.edt_PRODUCTDEFID","value","ds_search3","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab_search.Tabpage3.form.edt_PRODUCTDEFNAME","value","ds_search3","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_search.Tabpage3.form.edt_PROCSEGMENT","value","ds_search3","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab_search.Tabpage3.form.cbo_LOTTYPE","value","ds_search3","LOTTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","tab_search.Tabpage3.form.cbo_PRODUCTDIVISION","value","ds_search3","PRODUCTDIVISION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","tab_search.Tabpage3.form.cbo_OWNTYPE","value","ds_search3","OWNTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_work.form.tab_Main.Tabpage1.form.divMsgInfo.form.edt_SENDSEGMENT","value","ds_Message1","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_work.form.tab_Main.Tabpage1.form.divMsgInfo.form.cbo_MSGPROCSTATE","value","ds_Message1","MSGPROCSTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_work.form.tab_Main.Tabpage1.form.divMsgInfo.form.chk_SHOWPOPUP","value","ds_Message1","SHOWPOPUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_work.form.tab_Main.Tabpage1.form.divMsgInfo.form.edt_Title","value","ds_Message1","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_work.form.tab_Main.Tabpage2.form.divMsgInfo.form.cbo_MSGPROCSTATE","value","ds_Message2","MSGPROCSTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_work.form.tab_Main.Tabpage2.form.divMsgInfo.form.chk_SHOWPOPUP","value","ds_Message2","SHOWPOPUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_work.form.tab_Main.Tabpage2.form.divMsgInfo.form.edt_Title","value","ds_Message2","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_work.form.tab_Main.Tabpage3.form.divMsgInfo.form.edt_SENDSEGMENT","value","ds_Message3","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_work.form.tab_Main.Tabpage3.form.divMsgInfo.form.cbo_MSGPROCSTATE","value","ds_Message3","MSGPROCSTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_work.form.tab_Main.Tabpage3.form.divMsgInfo.form.chk_SHOWPOPUP","value","ds_Message3","SHOWPOPUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_work.form.tab_Main.Tabpage3.form.divMsgInfo.form.edt_Title","value","ds_Message3","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_search.Tabpage3.form.edt_PRODUCTDEFVERSION","value","ds_search3","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM03000M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM03000M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM03000M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 메시지 관리
         * 파일명 		: PCM03000M.xfdl
         * 작성자 		: 김애리
         * 작성일 		: 2021.3.29
         * AS-IS		: LotMessage
         * 설  명		: 품목, 공정, 제공 별로 메시지를 등록한다.
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.3.29	김애리   	최초작성
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
         this.arrStep3 = []; //세번 째 탭 전달 공정

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	//this.ds_search1.set_rowposition(0);
        	this.ds_search1.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search1.setColumn(0, "PLANTID",this.gf_getSiteType());
        	this.ds_search1.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	//this.ds_search2.set_rowposition(0);
        	this.ds_search2.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search2.setColumn(0, "PLANTID",this.gf_getSiteType());
        	this.ds_search2.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	//this.ds_search3.set_rowposition(0);
        	this.ds_search3.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search3.setColumn(0, "PLANTID",this.gf_getSiteType());
        	this.ds_search3.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.fn_initCombo();

        	this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.form.div_edit.set_url("common::richtexteditor_s.xfdl");
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
        	case 0 : this.GetProductDefInfo();
        		break;
        	case 1 : this.GetSegmentInfo();
        		break;
        	case 2 : this.GetWIP();
        		break;
        	}
        };

        this.fn_searchValidate = function ()
        {
        	var component = this.tab_search.Tabpage3;
        	var strColIdList = "edt_PRODUCTDEFID";
        	var strColNmList = "PRODUCTDEFID";
        	return this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        };

        /*
        * 기능 : 검색 초기화
        */
        this.fn_searchClear = function(obj,e)
        {
        	this.ds_search1.copyData(this.ds_search1Copy);
        	this.ds_search2.copyData(this.ds_search2Copy);
        	this.ds_search3.copyData(this.ds_search3Copy);
        };


        this.fn_save = function (obj, e)
        {
        	if(this.fn_saveValueSetting() == false) return false;
        	if(this.fn_saveValidate() == false) return;

        	var sSvcID 			= "";
        	var sController 	= "";
        	var sInDatasets 	= "";

        	this.ds_TargetWip
        	switch(this.div_work.form.tab_Main.tabindex) {
        	case 0:
        		var nRow = this.ds_ProductDefInfo.rowcount == 1 ? 0 : this.ds_ProductDefInfo.rowposition;
        		this.ds_ProductDefInfoSelect.clearData();
        		var addRow =  this.ds_ProductDefInfoSelect.addRow();
        		var bSucc = this.ds_ProductDefInfoSelect.copyRow(addRow,this.ds_ProductDefInfo,nRow);

        		sSvcID 			= "saveProductDefInfo";
        		sController 	= "/pcm03000/saveProductDefInfo.do";
        		sInDatasets 	= "ds_ProductDefInfo=ds_ProductDefInfoSelect ds_Message=ds_Message1";
        		break;
        	case 1:
        		sSvcID 			= "saveSegmentInfo";
        		sController 	= "/pcm03000/saveSegmentInfo.do";
        		sInDatasets 	= "ds_SegmentInfo=ds_SegmentInfo ds_Message=ds_Message2";
        		break;
        	case 2:
        		sSvcID 			= "saveTargetWip";
        		sController 	= "/pcm03000/saveTargetWip.do";
        		sInDatasets 	= "ds_TargetWip=ds_TargetWip ds_Message=ds_Message3";
        		break;
        	default:
        	}

        // 	var sSvcID 			= "saveBillOfDurableList";
        // 	var sController 	= "/pcm00200/saveUnitPrice.do";
        // 	var sInDatasets 	= "INPUT=ds_unitPrice:A";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         *	저장 Transaction 호출 전에 데이터 설정 및 가공 처리 사항에 대해 기술
         */
        this.fn_saveValueSetting = function()
        {
        	switch(this.div_work.form.tab_Main.tabindex) {
        	case 0:
        		var contents = this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.form.div_edit.form.getContent();
        		this.ds_Message1.setColumn(0,"CONTENTS",contents);
        		break;
        	case 1:
        		var contents = this.div_work.form.tab_Main.Tabpage2.form.divMsgInfo.form.div_edit.form.getContent();
        		this.ds_Message2.setColumn(0,"CONTENTS",contents);
        		break;
        	case 2:
        		var contents = this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.form.div_edit.form.getContent();
        		this.ds_Message3.setColumn(0,"CONTENTS",contents);
        		break;
        	default:
        	}

        	return true;
        };

        this.fn_saveValidate = function ()
        {
        	var ds_Valid;
        	switch(this.div_work.form.tab_Main.tabindex) {
        	case 0:
        		if(this.ds_ProductDefInfo.rowposition < 0) {
        			this.gfn_Message("NoSelections", null, "warning", "ok");//선택된 항목이 없습니다.
        			return false;
        		}
        		if(this.nfn_isNull(this.ds_Message1.getColumn(0,"PROCESSSEGMENTID")) )
        		{
        			this.gfn_Message("NOFRPROCESS", null, "warning", "ok");//전달 공정이 선택되지 않았습니다.
        			return false;
        		}
        		ds_Valid = this.ds_Message1;

        		break;
        	case 1:
        		if(this.ds_SegmentInfo.findRow("CHK","1") < 0) {
        			this.gfn_Message("NoSelections", null, "warning", "ok");//선택된 항목이 없습니다.
        			return false;
        		}
        		if(this.nfn_isNull(this.ds_Message2.getColumn(0,"TITLE")))
        		{
        			this.gfn_Message("NoTitle", null, "warning", "ok");//제목을 넣어주세요
        			return false;
        		}
        		ds_Valid = this.ds_Message2;
        		break;
        	case 2:
        		if(this.ds_TargetWip.rowcount == 0) {
        			this.gfn_Message("NoSelections", null, "warning", "ok");//선택된 항목이 없습니다.
        			return false;
        		}
        		if(this.nfn_isNull(this.ds_Message3.getColumn(0,"PROCESSSEGMENTID")) )
        		{
        			this.gfn_Message("NOFRPROCESS", null, "warning", "ok");//전달 공정이 선택되지 않았습니다.
        			return false;
        		}
        		ds_Valid = this.ds_Message3;
        		break;
        	default:
        	}

        	if(this.nfn_isNull(ds_Valid.getColumn(0,"TITLE")))
        	{
        		this.gfn_Message("NoTitle", null, "warning", "ok");//제목을 넣어주세요
        		return false;
        	}

        	if(this.nfn_isNull(ds_Valid.getColumn(0,"CONTENTS")))
        	{
        		this.gfn_Message("NoMessageContents", null, "warning", "ok");//메시지를 넣어주세요.
        		return false;
        	}

        	if(this.nfn_isNull(ds_Valid.getColumn(0,"MSGPROCSTATE")))
        	{
        		this.gfn_Message("NoSelectProecessStep", null, "warning", "ok");//공정 진행 상태가 선택되지 않았습니다.
        		return false;
        	}
        	switch(this.div_work.form.tab_Main.tabindex) {
        	case 0:
        		var step = this.ds_Message1.getColumn(0,"MSGPROCSTATE");
        		var processStep = this.ds_Message1.getColumn(0,"STEPTYPE");

        		if(processStep.split(",").indexOf(step) < 0)
        		{
        			this.gfn_Message("NoStep4Proecss", null, "warning", "ok");//선택한 공정에 해당 STEP 이 없습니다.
        			return false;
        		}
        		break;
        	case 1:
        		for(var i=0 ; i<this.ds_SegmentInfo.rowcount ; i++)
        		{
        			if(this.ds_SegmentInfo.getColumn(i,"CHK") == "1")
        			{
        				var step = this.ds_Message2.getColumn(0,"MSGPROCSTATE");
        				if(this.ds_SegmentInfo.getColumn(i,"STEPTYPE").split(",").indexOf(step) < 0)
        				{
        					this.gfn_Message("NoStep4Proecss", null, "warning", "ok");//선택한 공정에 해당 STEP 이 없습니다.
        					return false;
        				}
        			}
        		}
        		break;
        	case 2:
        		for(var i=0 ; i<this.arrStep3.length ; i++)
        		{
        			var step = this.ds_Message3.getColumn(0,"MSGPROCSTATE");
        			if(this.arrStep3[i].split(",").indexOf(step) < 0)
        			{
        				this.gfn_Message("NoStep4Proecss", null, "warning", "ok");//선택한 공정에 해당 STEP 이 없습니다.
        				return false;
        			}
        		}
        		break;
        	default:
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
        		case "saveProductDefInfo" :
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.ds_Message1.clearData();
        			this.ds_Message1.addRow();
        			this.ds_Message1.setColumn(0,"SHOWPOPUP","N");
        			this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.form.div_edit.form.setContent("");
        			break;
        		}
        		case "saveSegmentInfo" :
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.ds_Message2.clearData();
        			this.ds_Message2.addRow();
        			this.ds_Message2.setColumn(0,"SHOWPOPUP","N");
        			this.div_work.form.tab_Main.Tabpage2.form.divMsgInfo.form.div_edit.form.setContent("");
        			break;
        		}
        		case "saveTargetWip" :
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.ds_Message3.clearData();
        			this.ds_Message3.addRow();
        			this.ds_Message3.setColumn(0,"SHOWPOPUP","N");
        			this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.form.div_edit.form.setContent("");
        			break;
        		}
        		case "selectEcmLookupValuesVList2ds_C4StepSEL" :
        		{
        			this.ds_search1Copy.copyData(this.ds_search1);
        			this.ds_search2Copy.copyData(this.ds_search2);
        			this.ds_search3Copy.copyData(this.ds_search3);
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
        		if(this.tab_search.tabindex == 0)
        			this.setProduct_P00105(rtn, this.ds_cbo_ProdVersion1, this.ds_search1);
        		else if(this.tab_search.tabindex == 2){
        			this.ds_search3.setColumn(0,"PRODUCTDEFID", rtn[0]);
        			this.ds_search3.setColumn(0,"PRODUCTDEFVERSION", rtn[1]);
        			this.ds_search3.setColumn(0,"PRODUCTDEFNAME", rtn[2]);
        		}
        	} else if (sPopupId == "SEARCH_AREA")
        	{//AREAID|AREANAME
        		this.ds_search3.setColumn(0,"AREAID",rtn[0]);
        		this.ds_search3.setColumn(0,"AREANAME",rtn[1]);
        	} else if (sPopupId == "SEARCH_PROCESSPATH")
        	{//PROCESSSEGMENTID|PROCESSSEGMENTNAME|STEPTYPE

        		this.ds_Message1.setColumn(0,"PROCESSSEGMENTID", rtn[0]);
        		this.ds_Message1.setColumn(0,"PROCESSSEGMENTNAME", rtn[1]);
        		this.ds_Message1.setColumn(0,"STEPTYPE", rtn[2]);

        	}else if (sPopupId == "SEARCH_PROCESSPATH3") //메시지 정보에 전달 공정
        	{//PROCESSSEGMENTID|PROCESSSEGMENTNAME|STEPTYPE
        		var arrID = [];
        		var arrName = [];
        		var arrStep = [];
        		for(var i=0; i<rtn.length; i++)
        		{
        			var colArray = rtn[i];
        			arrID.push(colArray[0]);
        			arrName.push(colArray[1]);
        			arrStep.push(colArray[2]);
        		}

        		this.arrStep3 = arrStep;
        		this.ds_Message3.setColumn(0,"PROCESSSEGMENTID",arrID.join(","));
        		this.ds_Message3.setColumn(0,"PROCESSSEGMENTNAME", arrName.join(","));

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
        			if(this.tab_search.tabindex == 1){
        				this.ds_search2.setColumn(0,"PROCESSSEGMENTID",arrCode.join(","));
        				this.ds_search2.setColumn(0,"PROCESSSEGMENTNAME",arrName.join(","));
        			} else {
        				this.ds_search3.setColumn(0,"PROCESSSEGMENTID",arrCode.join(","));
        				this.ds_search3.setColumn(0,"PROCESSSEGMENTNAME",arrName.join(","));
        			}

        		}
        	}else if (sPopupId == "SEARCH_LOTID")
        	{
        		this.ds_search3.setColumn(0,"LOTID", rtn[0]);
        	}
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_initCombo = function ()
        {

        };

        this.GetProductDefInfo = function()
        {
        	this.ds_ProductDefInfo.clearData();
        	this.ds_Message1.clearData();
        	this.ds_Message1.addRow();
        	this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.form.div_edit.form.setContent("");

        	var sSvcID 			= "selectProductDefinitionList";
        	var sController 	= "/pcm03000/selectProductDefinitionList.do";
        	var sInDatasets 	= "INPUT=ds_search1";
        	var sOutDatasets 	= "ds_ProductDefInfo=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.GetSegmentInfo = function()
        {
        	if(this.ds_search2.getColumn(0,"PROCESSSEGMENTID") == "" ) this.ds_search2.setColumn(0,"PROCESSSEGMENTID",this.ds_search2.getColumn(0,"PROCESSSEGMENTNAME"));
        	if(this.ds_search2.getColumn(0,"PROCESSSEGMENTNAME") == "" ) this.ds_search2.setColumn(0,"PROCESSSEGMENTID","");

        	this.ds_SegmentInfo.clearData();
        	this.ds_Message2.clearData();
        	this.ds_Message2.addRow();
        	this.div_work.form.tab_Main.Tabpage2.form.divMsgInfo.form.div_edit.form.setContent("");

        	var sSvcID 			= "selectProcessSegmentList";
        	var sController 	= "/pcm03000/selectProcessSegmentList.do";
        	var sInDatasets 	= "INPUT=ds_search2";
        	var sOutDatasets 	= "ds_SegmentInfo=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.GetWIP = function ()
        {
        	this.ds_WIP.clearData();
        	this.ds_TargetWip.clearData();
        	this.ds_Message3.clearData();
        	this.ds_Message3.addRow();
        	this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.form.div_edit.form.setContent("");
        	//if(this.fn_searchValidate() == false) return;

        	var sSvcID 			= "selectWipLotMessageList";
        	var sController 	= "/pcm03000/selectWipLotMessageList.do";
        	var sInDatasets 	= "INPUT=ds_search3";
        	var sOutDatasets 	= "ds_WIP=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.mfn_OpenProcSegment = function ()
        {
        	var popupId = "SEARCH_SEGMENT";
        	var oArg = {};
        	if(this.tab_search.tabindex == 1)
        	{
        		oArg.plantID = this.pfn_allTrim(this.ds_search2.getColumn(0,"PLANTID"));
        		oArg.process = this.pfn_allTrim(this.ds_search2.getColumn(0,"PROCESSSEGMENTNAME"));
        	} else {
        		oArg.plantID = this.pfn_allTrim(this.ds_search3.getColumn(0,"PLANTID"));
        		oArg.process = this.pfn_allTrim(this.ds_search3.getColumn(0,"PROCESSSEGMENTNAME"));
        	}
        	oArg.ds_result = this.ds_Process;

        	this.gfn_openPopup(popupId,"pcm::PCM00800P.xfdl",oArg,"width=800,height=600");
        };



        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.div_work_tab_Main_onchanged = function(obj,e)
        {
        	this.tab_search.set_tabindex(e.postindex);
        	if(e.postindex == 1 && this.gfn_isNull(this.div_work.form.tab_Main.Tabpage2.form.divMsgInfo.form.div_edit.url))
          		this.div_work.form.tab_Main.Tabpage2.form.divMsgInfo.form.div_edit.set_url("common::richtexteditor_s.xfdl");
          	else if (e.postindex == 2 && this.gfn_isNull(this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.form.div_edit.url))
          		this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.form.div_edit.set_url("common::richtexteditor_s.xfdl");

        };

        //////////////////////////////////////////////////////////////////////////
        // 조회 조건 이벤트들 [S]
        //////////////////////////////////////////////////////////////////////////
        this.tab_search_Tabpage1_btnITEMID_onclick = function(obj,e)
        {
        	this.ds_search1.setColumn(0,"PRODUCTDEFID",this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value);
        	this.openProduct_P00105("CA", this.ds_search1,"Product");
        };

        this.tab_search_Tabpage1_btn_PROCSEGMENT_onclick = function(obj,e)
        {
        	this.mfn_OpenProcSegment();
        };

        this.tab_search_Tabpage3_btnITEMID_onclick = function(obj,e)
        {
        	this.ds_search3.setColumn(0,"PRODUCTDEFID",this.tab_search.Tabpage3.form.edt_PRODUCTDEFID.value);
        	this.openProduct_P00105("BA", this.ds_search3,"Product");
        };

        this.btn_suttleDown_onclick = function(obj,e)
        {
        	for(var i=this.ds_WIP.rowcount-1 ; i>= 0 ; i--)
        	{
        		if(this.ds_WIP.getColumn(i,"CHK")==1)
        		{
        			var addRow =  this.ds_TargetWip.addRow();
        			var bSucc = this.ds_TargetWip.copyRow(addRow,this.ds_WIP,i);
        			this.ds_WIP.deleteRow(i);
        		}
        	}
        };

        this.btn_suttleUp_onclick = function(obj,e)
        {
        	for(var i=this.ds_TargetWip.rowcount-1 ; i>= 0 ; i--)
        	{
        		if(this.ds_TargetWip.getColumn(i,"CHK")==1)
        		{
        			var addRow =  this.ds_WIP.addRow();
        			var bSucc = this.ds_WIP.copyRow(addRow,this.ds_TargetWip,i);
        			this.ds_TargetWip.deleteRow(i);
        		}
        	}
        };

        this.div_work_tab_Main_Tabpage1_divMsgInfo_btn_SENDSEGMENT_onclick = function(obj,e)
        {
        	var nRow = this.ds_ProductDefInfo.rowcount == 1 ? 0 : this.ds_ProductDefInfo.rowposition;

        	var processDefId = this.ds_ProductDefInfo.getColumn(nRow,"PRODUCTDEFID");
        	var processDefVer = this.ds_ProductDefInfo.getColumn(nRow,"PRODUCTDEFVERSION");

        	var popupId = "SEARCH_PROCESSPATH";

        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00199";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "PROCESSSEGMENTID|PROCESSSEGMENTNAME|STEPTYPE";
        	oArg.arg_paramCols = "PRODUCTDEFID|PRODUCTDEFVERSION";
        	oArg.arg_paramValues = processDefId + "|" + processDefVer;
        	oArg.arg_searchStr =  "";

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };

        /*
         *	메시지 정보에 전달 공정 선택시
         */
        this.div_work_tab_Main_Tabpage3_divMsgInfo_btn_SENDSEGMENT_onclick = function(obj,e)
        {
        	if(this.ds_TargetWip.rowcount == 0 )
        	{
        		this.gfn_Message("NoSelectTargetLot", "", "warning", "ok"); //대상 Lot 을 선택하여 주십시오.
        		return ;
        	}
        	var nRow = this.ds_TargetWip.rowcount == 1 ? 0 : this.ds_TargetWip.rowposition;

        	var processDefId = this.ds_TargetWip.getColumn(nRow,"PRODUCTDEFID");
        	var processDefVer = this.ds_TargetWip.getColumn(nRow,"PRODUCTDEFVERSION");

        // 	var processDefId = this.pfn_allTrim(this.ds_search3.getColumn(0,"PRODUCTDEFID"));
        // 	var processDefVer = this.pfn_allTrim(this.ds_search3.getColumn(0,"PRODUCTDEFVERSION"));
        //
        	var popupId = "SEARCH_PROCESSPATH3";

        	var oArg = {};
        	oArg.arg_type = "CA";
        	oArg.arg_popupCd = "P00199";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "PROCESSSEGMENTID|PROCESSSEGMENTNAME|STEPTYPE";
        	oArg.arg_paramCols = "PRODUCTDEFID|PRODUCTDEFVERSION";
        	oArg.arg_paramValues = processDefId + "|" + processDefVer;
        	oArg.arg_searchStr =  "";

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };


        this.tab_search_Tabpage1_btn_LOTID_onclick = function(obj,e)
        {
        	this.ds_search3.setColumn(0,"LOTID",this.tab_search.Tabpage3.form.edt_LOTID.value);
        	this.pfn_openPopup_LOTID("SEARCH_LOTID", this.ds_search3.getColumn(0,"LOTID"),"BA");
        };

        this.tab_search_Tabpage3_btn_AREAID_onclick = function(obj,e)
        {
        	this.ds_search3.setColumn(0,"AREAID",this.tab_search.Tabpage3.form.edt_AREAID.value);
        	this.openAREA_P00124("BA", this.ds_search3);
        };


        this.tab_search_Tabpage3_btn_PROCSEGMENT_onclick = function(obj,e)
        {
        	this.mfn_OpenProcSegment();
        };

        this.div_work_tab_Main_Tabpage3_grdWIP_oncelldblclick = function(obj,e)
        {
        	this.ds_WIP.setColumn(e.row, "CHK", this.ds_WIP.getColumn(e.row, "CHK") != "1" ? "1" : "0" );
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tabpage1.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_Tabpage1_btnITEMID_onclick,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage2.form.btn_PROCSEGMENT.addEventHandler("onclick",this.tab_search_Tabpage1_btn_PROCSEGMENT_onclick,this);
            this.tab_search.Tabpage2.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage2.form.btn_clear.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage3.form.btn_PROCSEGMENT.addEventHandler("onclick",this.tab_search_Tabpage3_btn_PROCSEGMENT_onclick,this);
            this.tab_search.Tabpage3.form.btn_LOTID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_LOTID_onclick,this);
            this.tab_search.Tabpage3.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_Tabpage3_btnITEMID_onclick,this);
            this.tab_search.Tabpage3.form.btn_clear.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage3.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage3.form.btn_AREAID.addEventHandler("onclick",this.tab_search_Tabpage3_btn_AREAID_onclick,this);
            this.div_work.form.tab_Main.addEventHandler("onchanged",this.div_work_tab_Main_onchanged,this);
            this.div_work.form.tab_Main.Tabpage1.form.divMsgInfo.form.btn_SENDSEGMENT.addEventHandler("onclick",this.div_work_tab_Main_Tabpage1_divMsgInfo_btn_SENDSEGMENT_onclick,this);
            this.div_work.form.tab_Main.Tabpage3.form.divMsgInfo.form.btn_SENDSEGMENT.addEventHandler("onclick",this.div_work_tab_Main_Tabpage3_divMsgInfo_btn_SENDSEGMENT_onclick,this);
            this.div_work.form.tab_Main.Tabpage3.form.grdWIP.addEventHandler("oncelldblclick",this.div_work_tab_Main_Tabpage3_grdWIP_oncelldblclick,this);
            this.div_work.form.tab_Main.Tabpage3.form.btn_suttleUp.addEventHandler("onclick",this.btn_suttleUp_onclick,this);
            this.div_work.form.tab_Main.Tabpage3.form.btn_suttleDown.addEventHandler("onclick",this.btn_suttleDown_onclick,this);
        };
        this.loadIncludeScript("PCM03000M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
