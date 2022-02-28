(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM02800M");
            this.set_titletext("인수 작업장 변경");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"P_AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"P_AREANM\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTNM\" type=\"STRING\" size=\"256\"/><Column id=\"P_USERID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dtWipTransAreaList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTCREATEDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_TransArea", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTCREATEDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cboTargetArea", this);
            obj._setContents("<ColumnInfo><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dtWipTransAreaDisctintList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTCREATEDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dataTable", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTCREATEDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dtWipTransAreaListTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTCREATEDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dataInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSRESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"UISEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_worker", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_TransAreaTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTCREATEDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_print:0",null,null,null,null,null,this.div_header.form);
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

            obj = new Static("sta_title","30","16","133","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_text("인수 작업장 변경");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
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
            obj.set_text("S/O 수주 배분");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_lotId","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","30","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"30","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_LotType","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_ProductdefId","0","sta_LotType:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_ProductName","0","sta_ProductdefId:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_Area","0","sta_lotId:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_processsegmentid","0","sta_Area:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("18");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_ProductDefType","0","sta_ProductName:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_lotid",null,null,"22","20","15","sta_lotId:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_OwnType","0","sta_ProductDefType:5","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("자사/외주구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_productdefid",null,null,"22","20","15","sta_ProductdefId:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdefid","sta_ProductdefId:5",null,null,"20","37","sta_ProductdefId:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_areaid",null,null,"22","20","15","sta_Area:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_areaid","sta_Area:5",null,"143","20",null,"sta_Area:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_lottype","sta_LotType:5",null,"165","20",null,"sta_LotType:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,OSPProductionType,ALL,Y,Y");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_productdeftype","sta_ProductDefType:5",null,"165","20",null,"sta_ProductDefType:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_ownType","sta_OwnType:5",null,"165","20",null,"sta_OwnType:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,OwnType,ALL,Y,Y");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_processsegmentid","sta_processsegmentid:5",null,null,"20","37","sta_processsegmentid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_processsegmentid",null,null,"22","20","15","sta_processsegmentid:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_lotid","sta_lotId:5",null,"143","20",null,"sta_lotId:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productname","sta_ProductName:5",null,"165","20",null,"sta_ProductName:-20",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static04","152","sta_OwnType:0","45","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","Static04:0","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static05","161",null,"10","27",null,"btn_search:-32",null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clearCustom","171","Static04:0","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Div("div",null,"74.29%","258",null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_text("div_00");
            obj.set_cssclass("div_WF_detail");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label00","0","10","35%","20",null,null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("0");
            obj.set_text("대상 자원");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Combo("cbo_TargetArea","label00:10","10",null,"20","10",null,null,null,null,null,this.div_work.form.div.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cboTargetArea");
            obj.set_codecolumn("RESOURCEID");
            obj.set_datacolumn("RESOURCENAME");
            this.div_work.form.div.addChild(obj.name, obj);

            obj = new Grid("grd_TransArea","0","74.29%",null,null,"div:10","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_TransArea");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"양산구분\" tooltiptext=\"LOTTYPE\"/><Cell col=\"3\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"4\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell col=\"6\" text=\"공정진행상태\" tooltiptext=\"PROCESSSTATE\"/><Cell col=\"7\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"8\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"9\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell col=\"10\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell col=\"11\" text=\"Roll/Sheet\" tooltiptext=\"RTRSHT\"/><Cell col=\"12\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"13\" text=\"단위\" tooltiptext=\"UNIT\"/><Cell col=\"14\" text=\"Locking 여부\" tooltiptext=\"ISLOCKING\"/><Cell col=\"15\" text=\"보류 여부\" tooltiptext=\"ISHOLD\"/><Cell col=\"16\" text=\"수량\" tooltiptext=\"QTY\"/><Cell col=\"17\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell col=\"18\" text=\"PCS\" tooltiptext=\"SENDPCSQTY\"/><Cell col=\"19\" text=\"PNL\" tooltiptext=\"SENDPANELQTY\"/><Cell col=\"20\" text=\"PCS\" tooltiptext=\"RECEIVEPCSQTY\"/><Cell col=\"21\" text=\"PNL\" tooltiptext=\"RECEIVEPANELQTY\"/><Cell col=\"22\" text=\"PCS\" tooltiptext=\"WORKSTARTPCSQTY\"/><Cell col=\"23\" text=\"PNL\" tooltiptext=\"WORKSTARTPANELQTY\"/><Cell col=\"24\" text=\"PCS\" tooltiptext=\"WORKENDPCSQTY\"/><Cell col=\"25\" text=\"PNL\" tooltiptext=\"WORKENDPANELQTY\"/><Cell col=\"26\" text=\"리드타임\" tooltiptext=\"LEADTIME\"/><Cell col=\"27\" text=\"LOT 투입일\" tooltiptext=\"LOTINPUTDATE\"/><Cell col=\"28\" text=\"납기일자\" tooltiptext=\"DELIVERYDATE\"/><Cell col=\"29\" text=\"잔여일수\" tooltiptext=\"LEFTDATE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:LOTTYPE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"6\" text=\"bind:PROCESSSTATE\"/><Cell col=\"7\" text=\"bind:USERSEQUENCE\"/><Cell col=\"8\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"9\" text=\"bind:PLANTID\"/><Cell col=\"10\" text=\"bind:AREANAME\"/><Cell col=\"11\" text=\"bind:RTRSHT\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:LOTID\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:UNIT\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:ISLOCKING\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:ISHOLD\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:QTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"17\" text=\"bind:PANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"18\" text=\"bind:SENDPCSQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"19\" text=\"bind:SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"20\" text=\"bind:RECEIVEPCSQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"21\" text=\"bind:RECEIVEPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"22\" text=\"bind:WORKSTARTPCSQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"23\" text=\"bind:WORKSTARTPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"24\" text=\"bind:WORKENDPCSQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"25\" text=\"bind:WORKENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"26\" text=\"bind:LEADTIME\" textAlign=\"right\"/><Cell col=\"27\" text=\"bind:LOTINPUTDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"center\"/><Cell col=\"28\" text=\"bind:DELIVERYDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\"/><Cell col=\"29\" text=\"bind:LEFTDATE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_Wip","0","34",null,null,"0","grd_TransArea:54",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_dtWipTransAreaList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"130\"/><Column size=\"70\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" colspan=\"14\" text=\"재공현황\" cssclass=\"cell_headMaster\"/><Cell col=\"16\" colspan=\"2\" text=\"재공계\" cssclass=\"cell_headMaster\"/><Cell col=\"18\" colspan=\"2\" text=\"인수대기\" cssclass=\"cell_headMaster\"/><Cell col=\"20\" colspan=\"2\" text=\"인수\" cssclass=\"cell_headMaster\"/><Cell col=\"22\" colspan=\"2\" text=\"작업시작\" cssclass=\"cell_headMaster\"/><Cell col=\"24\" colspan=\"2\" text=\"작업완료\" cssclass=\"cell_headMaster\"/><Cell col=\"26\" colspan=\"4\" text=\"재공현황\" cssclass=\"cell_headMaster\"/><Cell row=\"1\" col=\"2\" text=\"양산구분\" tooltiptext=\"LOTTYPE\"/><Cell row=\"1\" col=\"3\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell row=\"1\" col=\"4\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell row=\"1\" col=\"5\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell row=\"1\" col=\"6\" text=\"공정진행상태\" tooltiptext=\"PROCESSSTATE\"/><Cell row=\"1\" col=\"7\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"8\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"9\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell row=\"1\" col=\"10\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell row=\"1\" col=\"11\" text=\"Roll/Sheet\" tooltiptext=\"RTRSHT\"/><Cell row=\"1\" col=\"12\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell row=\"1\" col=\"13\" text=\"단위\" tooltiptext=\"UNIT\"/><Cell row=\"1\" col=\"14\" text=\"Locking 여부\" tooltiptext=\"ISLOCKING\"/><Cell row=\"1\" col=\"15\" text=\"보류 여부\" tooltiptext=\"ISHOLD\"/><Cell row=\"1\" col=\"16\" text=\"수량\" tooltiptext=\"QTY\"/><Cell row=\"1\" col=\"17\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell row=\"1\" col=\"18\" text=\"PCS\" tooltiptext=\"SENDPCSQTY\"/><Cell row=\"1\" col=\"19\" text=\"PNL\" tooltiptext=\"SENDPANELQTY\"/><Cell row=\"1\" col=\"20\" text=\"PCS\" tooltiptext=\"RECEIVEPCSQTY\"/><Cell row=\"1\" col=\"21\" text=\"PNL\" tooltiptext=\"RECEIVEPANELQTY\"/><Cell row=\"1\" col=\"22\" text=\"PCS\" tooltiptext=\"WORKSTARTPCSQTY\"/><Cell row=\"1\" col=\"23\" text=\"PNL\" tooltiptext=\"WORKSTARTPANELQTY\"/><Cell row=\"1\" col=\"24\" text=\"PCS\" tooltiptext=\"WORKENDPCSQTY\"/><Cell row=\"1\" col=\"25\" text=\"PNL\" tooltiptext=\"WORKENDPANELQTY\"/><Cell row=\"1\" col=\"26\" text=\"리드타임\" tooltiptext=\"LEADTIME\"/><Cell row=\"1\" col=\"27\" text=\"LOT 투입일\" tooltiptext=\"LOTINPUTDATE\"/><Cell row=\"1\" col=\"28\" text=\"납기일자\" tooltiptext=\"DELIVERYDATE\"/><Cell row=\"1\" col=\"29\" text=\"잔여일수\" tooltiptext=\"LEFTDATE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:LOTTYPE\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"6\" text=\"bind:PROCESSSTATE\"/><Cell col=\"7\" text=\"bind:USERSEQUENCE\"/><Cell col=\"8\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"9\" text=\"bind:PLANTID\"/><Cell col=\"10\" text=\"bind:AREANAME\"/><Cell col=\"11\" text=\"bind:RTRSHT\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:LOTID\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:UNIT\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:ISLOCKING\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:ISHOLD\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:QTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"17\" text=\"bind:PANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"18\" text=\"bind:SENDPCSQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"19\" text=\"bind:SENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"20\" text=\"bind:RECEIVEPCSQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"21\" text=\"bind:RECEIVEPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"22\" text=\"bind:WORKSTARTPCSQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"23\" text=\"bind:WORKSTARTPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"24\" text=\"bind:WORKENDPCSQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"25\" text=\"bind:WORKENDPANELQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"26\" text=\"bind:LEADTIME\" textAlign=\"right\"/><Cell col=\"27\" text=\"bind:LOTINPUTDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"center\"/><Cell col=\"28\" text=\"bind:DELIVERYDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\"/><Cell col=\"29\" text=\"bind:LEFTDATE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("suTitle0","0","0","100","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("재공현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_DataUp","37.79%","grd_Wip:15","24","24",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_shuttleT");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_DataDown",null,"grd_Wip:15","23","24","btn_DataUp:10",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_shuttleB");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("suTitle1","0",null,"100","34",null,"grd_TransArea:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("대상 LOT");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("suTitle2",null,null,"258","34","0","div:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_text("작업장 변경");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_dtWipTransAreaList","suTitle0:20","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_TransArea","suTitle1:20",null,"140","34",null,"grd_TransArea:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","tab_search.Tabpage1.form.edt_productdefid","value","ds_search","P_PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.Tabpage1.form.cbo_lottype","value","ds_search","P_LOTTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.Tabpage1.form.cbo_productdeftype","value","ds_search","P_PRODUCTDEFTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.Tabpage1.form.cbo_ownType","value","ds_search","P_OWNTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","tab_search.Tabpage1.form.edt_productname","value","ds_search","P_PRODUCTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.Tabpage1.form.edt_areaid","value","ds_search","P_AREANM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.Tabpage1.form.edt_lotid","value","ds_search","P_LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.Tabpage1.form.edt_processsegmentid","value","ds_search","P_PROCESSSEGMENTNM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM02800M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM02800M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM02800M.xfdl", function() {
        	/***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 자주검사
         * 파일명 		: PCM02800M.xfdl
         * 작성자 		: 이용국
         * 작성일 		: 2021.8.01
         *
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.8.01	이용국   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
         this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
         this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통

         // this.gf_getEnterpriseId()
        // this.gf_getSiteType()
        // this.gf_getLanguageType()
        // this.gf_getUserId()
        // this.gf_getUserNm()


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
         this.g_areaId = "";
         this.buttonState = "";
         this.resourceId = "";
         this.IsSaved = true;
         this.autoSearch = false;
         this.productNameSearch = false;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {

        	console.log("PCM02800M");

        	this.nfn_formInit(obj);

        	//this.tab_search.Tabpage1.form.edt_AREAID.removeEventHandler("onkeydown", this.gfn_setEnterKeyEvent , this);

        	this.tab_search.Tabpage1.form.btn_edt_lotid.addEventHandler("onclick", this.fn_XBtnLotid, this);
        	this.tab_search.Tabpage1.form.btn_edt_areaid.addEventHandler("onclick", this.fn_XBtnAreanm, this);
        	this.tab_search.Tabpage1.form.btn_edt_processsegmentid.addEventHandler("onclick", this.fn_XBtnProcesssegmentnm, this);
        	this.tab_search.Tabpage1.form.btn_edt_productdefid.addEventHandler("onclick", this.fn_XBtnProductdefid, this);

        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	this.ds_search.setColumn(0, "P_USERID",  this.gf_getUserId());
        	this.ds_search.setColumn(0, "P_PLANTID", this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LANGUAGETYPE",  this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "VERSION",  "10002");


        // 	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        // 	this.ds_search.setColumn(0, "PLANTID",this.gf_getSiteType());
        // 	this.ds_search.setColumn(0, "LANGUAGETYPE",this.gf_getLanguageType());
        // 	this.ds_search.setColumn(0, "INSPECTIONCLASSID", "SelfInspectionShip");//자주검사(입고)
        // 	this.ds_search.setColumn(0, "INS_USERID", this.gf_getUserId());
        // 	this.ds_search.setColumn(0, "INS_USERNAME", this.gf_getUserNm());

        	this.fn_initParam();
        	//this.fn_initCombo();

        	this.tab_search.Tabpage1.form.cbo_lottype.set_value("Production");
        	this.tab_search.Tabpage1.form.cbo_productdeftype.set_value("Product");
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
         this.fn_XBtnLotid = function ()
         {
        	this.ds_search.setColumn(0, "P_LOTID", "");
         };

         this.fn_XBtnAreanm = function ()
         {
        	this.ds_search.setColumn(0, "P_AREANM", "");
        	this.ds_search.setColumn(0, "P_AREAID", "");
         };

         this.fn_XBtnProcesssegmentnm = function ()
         {
         	this.ds_search.setColumn(0, "P_PROCESSSEGMENTNM", "");
        	this.ds_search.setColumn(0, "P_PROCESSSEGMENTID", "");
         };

         this.fn_XBtnProductdefid = function ()
         {
        	this.ds_search.setColumn(0, "P_PRODUCTDEFID", "");
        	this.ds_search.setColumn(0, "P_PRODUCTNAME", "");
         };



        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {

        	this.autoSearch = false;

        // 	//초기화
        // 	this.grdWIP.View.ClearDatas();;
        // 	this.grdTransArea.View.ClearDatas();
        // 	this.cboTargetArea.Editor.DataSource = null;

        // 	//Lot
        // 	CommonFunction.AddConditionLotPopup("P_LOTID", 0.1, true, Conditions);
        // 	//품목코드
        // 	InitializeCondition_ProductPopup();
        // 	//CommonFunction.AddConditionProductPopup("P_PRODUCTDEFID", 0.5, true, Conditions);
        // 	//작업장
        // 	CommonFunction.AddConditionAreaByAuthorityPopup("P_AREAID", 0.7, true, Conditions,false,true);
        // 	//작업공정
        // 	CommonFunction.AddConditionProcessSegmentPopup("P_PROCESSSEGMENT", 0.9, true, Conditions);

        	this.ds_dtWipTransAreaList.clearData();
        	this.ds_dtWipTransAreaListTemp.clearData();
        	this.ds_dtWipTransAreaDisctintList.clearData();
        	this.ds_TransArea.clearData();
        	this.ds_TransAreaTemp.clearData();
        	this.ds_dataTable.clearData();
        	this.ds_cboTargetArea.clearData();

        	this.ds_dtWipTransAreaList.set_enableevent(true);
        	this.ds_dtWipTransAreaListTemp.set_enableevent(true);
        	this.ds_dtWipTransAreaDisctintList.set_enableevent(true);
        	this.ds_TransArea.set_enableevent(true);
        	this.ds_TransAreaTemp.set_enableevent(true);
        	this.ds_dataTable.set_enableevent(true);


        	this.ds_search.setColumn(0, "P_USERID",  this.gf_getUserId());
        	this.ds_search.setColumn(0, "P_PLANTID", this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LANGUAGETYPE",  this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "VERSION",  "10002");

        	var sSvcID 			= "selectWipTransAreaList";
        	var sController 	= "/pcm02800/selectWipTransAreaList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_dtWipTransAreaList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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

        	switch(trId) {
        		case "selectWipTransAreaList":

        			if(this.ds_dtWipTransAreaList.getRowCount() == 0)
        			{
        				//조회할 데이터가 없습니다.
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        			}

        			break;

        		case "getTransAreaList":

        			if(this.ds_cboTargetArea.getRowCount() > 0)
        			{
        				this.div_work.form.div.form.cbo_TargetArea.set_index(0);
        			}

        			break;

        		case "saveChangeArea":

        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장되었습니다.

        			this.fn_search();

        			break;
        		default:

        			break;
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {

        	var rtn = this.fv_rtnValue;
        	if (this.nfn_isNull(rtn))
        	{
        		return;
        	};

        	switch (sPopupId)
        	{
        		case "POPUP_PRODUCTDEFID" : //
        		{
        			var code = "";
        			var name = "";
        			for(var i = 0; i < rtn.length; i++)
        			{
        				code += this.nfn_nvl(rtn[i][0], "") + ",";
        				name += this.nfn_nvl(rtn[i][1], "") + ",";
        			}

        			if (code.length > 0)
        				code = code.substring(0, code.length - 1);

        			if (name.length > 0)
        				name = name.substring(0, name.length - 1);

        		    this.tab_search.Tabpage1.form.edt_productdefid.set_value(code);
        			this.tab_search.Tabpage1.form.edt_productname.set_value(name);
        			//this.tab_search.Tabpage1.form.cbo_productdefversion.set_value(rtn[2]); //Rev

        			//if(this.autoSearch) this.fn_search();
        		}
        		break;
        		case "POPUP_LOTID" :
        		{

        			var code = "";
        			var name = "";
        			for(var i = 0; i < rtn.length; i++)
        			{
        				code += this.nfn_nvl(rtn[i][0], "") + ",";
        				name += this.nfn_nvl(rtn[i][1], "") + ",";
        			}

        			if (code.length > 0)
        				code = code.substring(0, code.length - 1);

        			if (name.length > 0)
        				name = name.substring(0, name.length - 1);

        			this.tab_search.Tabpage1.form.edt_lotid.set_value(code);
        		}
        		break;
        		case "POPUP_AREAID" :
        		{
        			rtn = this.gfn_split(rtn, ",");
        			if (rtn.length == 2)
        			{
        				this.tab_search.Tabpage1.form.edt_areaid.set_value(rtn[1]);
        				this.ds_search.setColumn( 0, "P_AREAID",          rtn[0] );
        			}
        			else
        			{
        				var value = [];
        				var dsval = [];
        				for (var i = 0; i < rtn.length; i++)
        				{
        					if ((i % 2) == 0)
        					{
        						dsval.push(rtn[i]);
        					}
        					else
        					{
        						value.push(rtn[i]);
        					}
        				}

        				this.tab_search.Tabpage1.form.edt_areaid.set_value(value.join(","));
        				this.ds_search.setColumn( 0, "P_AREAID",          dsval.join(",") );
        			}

        			//if(this.autoSearch) this.fn_search();

        		}
        		break;
        		case "POPUP_PROCESSSEGMENTID" :
        		{
        			var code = "";
        			var name = "";
        			for(var i = 0; i < rtn.length; i++)
        			{
        				code += this.nfn_nvl(rtn[i][0], "") + ",";
        				name += this.nfn_nvl(rtn[i][1], "") + ",";
        			}

        			if (code.length > 0)
        				code = code.substring(0, code.length - 1);

        			if (name.length > 0)
        				name = name.substring(0, name.length - 1);

        			this.tab_search.Tabpage1.form.edt_processsegmentid.set_value( name);
        			this.ds_search.setColumn( 0, "P_PROCESSSEGMENTID",           code );

        			//if(this.autoSearch) this.fn_search();
        		}
        		break;
        		default:
        		{
        		}
        		break;
        	};

        	// trace( 'xml ?' +  this.ds_search.saveXML());
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        this.fn_clearCustom = function()
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	this.ds_search.setColumn(0, "P_USERID",  this.gf_getUserId());
        	this.ds_search.setColumn(0, "P_PLANTID", this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LANGUAGETYPE",  this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "VERSION",  "10002");

        	this.tab_search.Tabpage1.form.edt_areaid.set_value("");

        	this.g_areaId = "";
        	this.buttonState = "";
        	this.resourceId = "";
        	this.IsSaved = true;

            this.tab_search.Tabpage1.form.cbo_lottype.set_value("Production");
        	this.tab_search.Tabpage1.form.cbo_productdeftype.set_value("Product");

        // 	this.ds_dtWipTransAreaList.clearData();
        // 	this.ds_dtWipTransAreaListTemp.clearData();
        // 	this.ds_dtWipTransAreaDisctintList.clearData();
        // 	this.ds_TransArea.clearData();
        // 	this.ds_TransAreaTemp.clearData();
        // 	this.ds_dataTable.clearData();
        //
        // 	this.ds_dtWipTransAreaList.set_enableevent(true);
        // 	this.ds_dtWipTransAreaListTemp.set_enableevent(true);
        // 	this.ds_dtWipTransAreaDisctintList.set_enableevent(true);
        // 	this.ds_TransArea.set_enableevent(true);
        // 	this.ds_TransAreaTemp.set_enableevent(true);
        // 	this.ds_dataTable.set_enableevent(true);

        };

        /*
         *	화면 호출시 셋팅된 argument 가 존재하면 가져온다.
         */
        this.fn_initParam = function()
        {
        	var sArgName = this.gfn_getFrameAguments("menuName");
        	if(sArgName == "LotIncommingInspection") {
        		trace("argument :" + sArgName);

        		var sArgArr = this.gfn_getFrameAguments("objList");

        		//P_AREAID, P_PROCESSSEGMENTID, P_PRODUCTDEFID, P_LOTID
        	}
        }

        this.fn_initCombo = function ()
        {
        	this.AddAll(this.ds_cbo_ProdVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");
        };


        this.tab_search_Tabpage1_btn_popup_onclick = function(obj, e)
        {

        	// gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
        	//-----------------
        	// arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅 : C:
        	// popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        	// popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        	// rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        	// paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        	// paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        	// searchStr   : 팝업 조회조건 콤보값 = 조회 값
        	var oArg = {};
        	switch(obj.name)
        	{
        		case "btn_productdefid" :
        		{
        			oArg.arg_type        = "CA";
        			oArg.arg_popupCd     = "P00160";
        			oArg.arg_popupNm     = "품목 선택";
        			oArg.arg_rtnCols     = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        			oArg.arg_paramCols   = "P_POPTYPE";
        			oArg.arg_paramValues = "PRODUCTDEFINITION";
        // 			if(this.productNameSearch)
        // 				oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + this.tab_search.Tabpage1.form.edt_productname.value;
        // 			else
        				oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + this.tab_search.Tabpage1.form.edt_productdefid.value;
        			this.productNameSearch = false;
        			this.gfn_openPopup( "POPUP_PRODUCTDEFID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        		}
        		break;
        		case "btn_lotid" :
        		{
        			oArg.arg_type        = "CA";
        			oArg.arg_popupCd     = "P00159";
        			oArg.arg_popupNm     = "Lot No 조회";
        			oArg.arg_rtnCols     = "LOTID";
        			oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
        			oArg.arg_paramValues = "LOTID|" + this.gf_getLanguageType();
        			oArg.arg_searchStr   = "P_LOTID=" + this.tab_search.Tabpage1.form.edt_lotid.value;
        			this.gfn_openPopup( "POPUP_LOTID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        		}
        		break;
        		case "btn_areaid" :
        		{
        			oArg.arg_type        = "CA";
        			oArg.arg_popupCd     = "P00157";
        			oArg.arg_popupNm     = "작업장 선택";
        			oArg.arg_rtnCols     = "AREAID|AREANAME";
        			oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE|P_USER|P_PLANTID";
        			oArg.arg_paramValues = "AREALISTBYAUTHORITY|" + this.gf_getLanguageType() + "|" + this.gf_getUserAcnt() + "|"+ this.ds_search.getColumn( 0, "P_PLANTID" );
        			oArg.arg_searchStr   = "P_DICTIONARY=" + this.tab_search.Tabpage1.form.edt_areaid.value;
        			this.gfn_openPopup( "POPUP_AREAID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        		}
        		break;
        		case "btn_processsegmentid" :
        		{
        			oArg.arg_type        = "CA";
        			oArg.arg_popupCd     = "P00156";
        			oArg.arg_popupNm     = "공정 선택";
        			oArg.arg_rtnCols     = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        			oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
        			oArg.arg_paramValues = "PROCESSSEGMENT|" + this.gf_getLanguageType();
        			oArg.arg_searchStr   = "P_PROCESSSEGMENT=" +this.tab_search.Tabpage1.form.edt_processsegmentid.value;
        			this.gfn_openPopup( "POPUP_PROCESSSEGMENTID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        		}
        		break;
        		default :
        		{
        		}
        		break;
        	};
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/




        // this.tab_search_Tabpage1_edt_AREAID_onkeydown = function(obj:nexacro.Edit,e:nexacro.KeyEventInfo)
        // {
        // 	if (e.keycode != 13) return;
        //
        // 	this.ds_search.setColumn(0,"AREAID",obj.value);
        // 	this.openAREA_P00124("BA", this.ds_search);
        // };



        this.div_work_tab_Main_Tabpage1_cbo_Image_onitemchanged = function(obj,e)
        {
        	var atchFileGuid = e.postvalue;
        	var upUrl = nexacro.getEnvironment().services["svcurl"].url +"/comm/downImage/" + atchFileGuid + ".do";
        	this.div_work.form.tab_Main.Tabpage1.form.imageViewer.set_image(upUrl);
        };

        this.div_work_btn_DataDown_onclick = function(obj,e)
        {
        	this.buttonState = "Down";

        	var chk = false;
        	for (var i = 0; i < this.ds_dtWipTransAreaList.rowcount; i++)
        	{
        		if (this.ds_dtWipTransAreaList.getColumn( i, "CHK" ) == true)
        		{
        			chk = true;
        			break;
        		}
        	};

        	if (!chk)
        	{
        		this.gfn_Message("NoSelections", "", "error", "ok");
        		return;
        	};


        	if(this.checkedValidation()) return;

        	//작업장 조회
        	if(this.ds_TransArea.getRowCount() <= 0)
        	{
        		this.setComboData();
        	}
        	else
        	{
        		//작업장 조회

        		this.ds_dtWipTransAreaList.set_enableevent(false);
        		this.ds_dtWipTransAreaList.filter("CHK == '1'");
        		this.ds_dtWipTransAreaListTemp.clearData();
        		this.ds_dtWipTransAreaListTemp.copyData(this.ds_dtWipTransAreaList, true);
        		this.ds_dtWipTransAreaList.filter("");
        		this.ds_dtWipTransAreaList.set_enableevent(true);

        		this.ds_dtWipTransAreaDisctintList.clearData();
        		this.ds_dtWipTransAreaDisctintList.copyData(this.ds_dtWipTransAreaListTemp);



        //
        // 		this.ds_dtWipTransAreaDisctintList.filter("");
        // 	this.gf_distincDsFilter(this.ds_dtWipTransAreaDisctintList, "PRODUCTDEFVERSION");
        //
        // 	//품목버전
        // 	var productDefVerCount = this.ds_dtWipTransAreaDisctintList.getRowCount();


        		this.gf_distincDsFilter(this.ds_dtWipTransAreaDisctintList, "PRODUCTDEFID");
        		var productDefid 		= this.ds_dtWipTransAreaDisctintList.getColumn(0, "PRODUCTDEFID");
        		this.ds_dtWipTransAreaDisctintList.filter("");
        		this.gf_distincDsFilter(this.ds_dtWipTransAreaDisctintList, "PRODUCTDEFVERSION");
        		var productDefVersion 	= this.ds_dtWipTransAreaDisctintList.getColumn(0, "PRODUCTDEFVERSION");
        		this.ds_dtWipTransAreaDisctintList.filter("");
        		this.gf_distincDsFilter(this.ds_dtWipTransAreaDisctintList, "PROCESSSEGMENTID");
        		var processsegmentId    = this.ds_dtWipTransAreaDisctintList.getColumn(0, "PROCESSSEGMENTID");
        		this.ds_dtWipTransAreaDisctintList.filter("");
        		this.gf_distincDsFilter(this.ds_dtWipTransAreaDisctintList, "PROCESSSEGMENTVERSION");
        		var processsegmentVersion    = this.ds_dtWipTransAreaDisctintList.getColumn(0, "PROCESSSEGMENTVERSION");
        		this.ds_dtWipTransAreaDisctintList.filter("");
        		this.gf_distincDsFilter(this.ds_dtWipTransAreaDisctintList, "USERSEQUENCE");
        		var userSequence        = this.ds_dtWipTransAreaDisctintList.getColumn(0, "USERSEQUENCE");
        		this.ds_dtWipTransAreaDisctintList.filter("");
        		this.gf_distincDsFilter(this.ds_dtWipTransAreaDisctintList, "PLANTID");
        		var plantId             = this.ds_dtWipTransAreaDisctintList.getColumn(0, "PLANTID");
        		this.ds_dtWipTransAreaDisctintList.filter("");
        		this.gf_distincDsFilter(this.ds_dtWipTransAreaDisctintList, "LOTTYPE");
        		var lotType             = this.ds_dtWipTransAreaDisctintList.getColumn(0, "LOTTYPE");
        		this.ds_dtWipTransAreaDisctintList.filter("");

        		this.ds_TransArea.filter("");

        		var productDefidRow       = this.ds_TransArea.findRowExpr("PRODUCTDEFID == '"+productDefid + "'");
        		var productDefVersionRow  = this.ds_TransArea.findRowExpr("PRODUCTDEFVERSION == '"+productDefVersion + "'");

        		if(productDefidRow == -1 || productDefVersionRow == -1)
        		{
        			//같은 품목끼리만 작업장 변경이 가능합니다.
        			this.gfn_Message("NotAddTransAreaList", [this.nfn_getDictionarynameUpper("PRODUCTDEF"), this.nfn_getDictionarynameUpper("PRODUCTDEFVERSION")], "warning", "ok");
        			return;
        		}

        		var processsegmentIdRow       = this.ds_TransArea.findRowExpr("PROCESSSEGMENTID == '"+processsegmentId + "'");
        		var processsegmentVersionRow  = this.ds_TransArea.findRowExpr("PROCESSSEGMENTVERSION == '"+processsegmentVersion + "'");

        		if(processsegmentIdRow == -1 || processsegmentVersionRow == -1)
        		{
        			//같은 공정끼리만 작업장 변경이 가능합니다.
        			this.gfn_Message("NotAddTransAreaList", [this.nfn_getDictionarynameUpper("PROCESSSEGMENT"), this.nfn_getDictionarynameUpper("PROCESSSEGMENTVERSION")], "warning", "ok");
        			return;
        		}

        		var userSequenceRow  = this.ds_TransArea.findRowExpr("USERSEQUENCE == '"+userSequence + "'");

        		if (userSequenceRow == -1)
        		{
        			//같은 수순끼리만 작업장 변경이 가능합니다.
        			this.gfn_Message("NotAddTransAreaList", [this.nfn_getDictionarynameUpper("USERSEQUENCE")], "warning", "ok");
        			return;
        		}

        		var plantIdRow  = this.ds_TransArea.findRowExpr("PLANTID == '"+plantId + "'");

        		if (plantIdRow == -1)
        		{
        			//같은 Site끼리만 작업장 변경이 가능합니다.
        			this.gfn_Message("NotAddTransAreaList", [this.nfn_getDictionarynameUpper("SITE")], "warning", "ok");
        			return;
        		}

        		var lotTypeRow  = this.ds_TransArea.findRowExpr("LOTTYPE == '"+lotType + "'");

        		if (lotTypeRow == -1)
        		{
        			//같은 양산구분끼리만 작업장 변경이 가능합니다.
        			this.gfn_Message("NotAddTransAreaList", [this.nfn_getDictionarynameUpper("PRODUCTIONTYPE")], "warning", "ok");
        			return;
        		}

        		this.setComboData();
        	} // if else 작업장 조회 end


        };

        this.gf_distincDsFilter = function(objDs, sColID)
        {
        	var arrArgs	= sColID.split(",");
        	var sFilterExpr		= "";
        	var sFindRowExpr	= "";

        	for (var i=0; i<arrArgs.length; i++)
        	{
        		if (objDs.getColumnInfo(arrArgs[i]) == null) continue;

        		sFindRowExpr	+= (sFindRowExpr) ? " && " : "";
        		sFindRowExpr	+= "" + arrArgs[i] + "=='\" + " + arrArgs[i] + " + \"'";
        	}

        	if (sFindRowExpr) {
        		sFilterExpr	= "rowidx==dataset.findRowExpr(\"" + sFindRowExpr + "\")";
        	}
        	objDs.filter(sFilterExpr);
        };

        this.checkedValidation  = function()
        {
        	this.ds_dtWipTransAreaList.set_enableevent(false);
        	this.ds_dtWipTransAreaList.filter("CHK == '1'");
        	this.ds_dtWipTransAreaListTemp.clearData();
        	this.ds_dtWipTransAreaListTemp.copyData(this.ds_dtWipTransAreaList, true);
        	this.ds_dtWipTransAreaList.filter("");
        	this.ds_dtWipTransAreaList.set_enableevent(true);


        	this.ds_dtWipTransAreaDisctintList.clearData();
        	this.ds_dtWipTransAreaDisctintList.copyData(this.ds_dtWipTransAreaListTemp);

        	this.gf_distincDsFilter(this.ds_dtWipTransAreaDisctintList, "PRODUCTDEFID");

        	//품목코드
        	var productDefIdCount = this.ds_dtWipTransAreaDisctintList.getRowCount();

        	if (productDefIdCount > 1)
        	{
        		//같은 품목끼리만 선택하여 주십시오.
        		//grdWIP.View.CheckedAll(false);
        		this.gfn_Message("MixSelectProductDefID", null, "warning", "ok");
        		return true;
        	}

        	this.ds_dtWipTransAreaDisctintList.filter("");
        	this.gf_distincDsFilter(this.ds_dtWipTransAreaDisctintList, "PRODUCTDEFVERSION");

        	//품목버전
        	var productDefVerCount = this.ds_dtWipTransAreaDisctintList.getRowCount();
        	if (productDefVerCount > 1)
        	{
        		//같은 품목버전끼리만 선택하여 주십시오.
        		//grdWIP.View.CheckedAll(false);
        		this.gfn_Message("MixSelectProductDefVersion", null, "warning", "ok");
        		return true;
        	}

        	this.ds_dtWipTransAreaDisctintList.filter("");
        	this.gf_distincDsFilter(this.ds_dtWipTransAreaDisctintList, "PROCESSSEGMENTID");

        	//공정ID
        	var processsegmentIdCount = this.ds_dtWipTransAreaDisctintList.getRowCount();
        	if (processsegmentIdCount > 1)
        	{
        		//같은 공정, 버전끼리만 선택하여 주십시오.
        		//grdWIP.View.CheckedAll(false);
        		this.gfn_Message("MixSelectProcesssegmentname", null, "warning", "ok");
        		return true;
        	}

        	this.ds_dtWipTransAreaDisctintList.filter("");
        	this.gf_distincDsFilter(this.ds_dtWipTransAreaDisctintList, "PROCESSSEGMENTVERSION");

        	//공정버전
        	var processsegmentVerCount = this.ds_dtWipTransAreaDisctintList.getRowCount();
        	if (processsegmentVerCount > 1)
        	{
        		//같은 공정, 버전끼리만 선택하여 주십시오.
        		//grdWIP.View.CheckedAll(false);
        		this.gfn_Message("MixSelectProcesssegmentname", null, "warning", "ok");
        		return true;
        	}

        	this.ds_dtWipTransAreaDisctintList.filter("");
        	this.gf_distincDsFilter(this.ds_dtWipTransAreaDisctintList, "USERSEQUENCE");

        	//공정수순
        	var usersequenceCount = this.ds_dtWipTransAreaDisctintList.getRowCount();
        	if (usersequenceCount > 1)
        	{
        		//같은 수순끼리만 선택하여 주십시오
        		//grdWIP.View.CheckedAll(false);
        		this.gfn_Message("MixProcessPath", null, "warning", "ok");
        		return true;
        	}

        	this.ds_dtWipTransAreaDisctintList.filter("");
        	this.gf_distincDsFilter(this.ds_dtWipTransAreaDisctintList, "PLANTID");

        	//Plant Id
        	var plantIdCount = this.ds_dtWipTransAreaDisctintList.getRowCount();
        	if (plantIdCount > 1)
        	{
        		//같은 Site끼리만 선택하여 주십시오
        		//grdWIP.View.CheckedAll(false);
        		this.gfn_Message("MixSelectPlantID", null, "warning", "ok");
        		return true;
        	}

        	this.ds_dtWipTransAreaDisctintList.filter("");
        	this.gf_distincDsFilter(this.ds_dtWipTransAreaDisctintList, "LOTTYPEID");

        	//LOT Type
        	var lotTypeCount = this.ds_dtWipTransAreaDisctintList.getRowCount();
        	if (lotTypeCount > 1)
        	{
        		//같은 양산구분끼리만 선택하여 주십시오
        		//grdWIP.View.CheckedAll(false);
        		this.gfn_Message("MixSelectLotType", null, "warning", "ok");
        		return true;
        	}


        	return false;
        };

        this.setComboData  = function()
        {
        // 		var row 	= this.ds_TransArea.insertRow(this.ds_TransArea.rowcount+1);
        // 		this.ds_TransArea.setRowType(row, Dataset.ROWTYPE_INSERT);
        // 		this.ds_TransArea.copyRow(row,this.ds_dtWipTransAreaList, i);
        // 		this.ds_TransArea.setColumn(row, "CHK",  "0" );
        //
        //
        // 		for (var i = this.ds_dtWipTransAreaList.getRowCount(); i >= 0; i--)
        // 		{
        // 			if (this.ds_dtWipTransAreaList.getColumn( i, "CHK") == true)
        // 			{
        // 				this.ds_dtWipTransAreaList.deleteRow( i );
        // 			}
        // 		};

        	this.ds_dataTable.clearData();

        	if (this.ds_TransArea.getRowCount() == 0 && this.buttonState == "Down")
        	{
        		this.ds_dtWipTransAreaList.set_enableevent(false);
        		this.ds_dtWipTransAreaList.filter("CHK == '1'");
        		this.ds_dataTable.copyData(this.ds_dtWipTransAreaList, true);
        		this.ds_dtWipTransAreaList.filter("");
        		this.ds_dtWipTransAreaList.set_enableevent(true);
        	}
        	else
        	{
        		if(this.ds_TransArea.rowcount > 0)
        			this.ds_dataTable.copyData(this.ds_TransArea);
        	}


        	switch (this.buttonState)
        	{
        		case "Up":



        			//Up 버튼 눌렀을 때 체크 안된(제외 할) LOT만 조회

        			//대상 Lot에 데이터가 없으면 조회X

        			this.ds_TransArea.set_enableevent(false);
        			this.ds_TransArea.filter("CHK=='1'");

        			this.ds_TransAreaTemp.clearData();
        			this.ds_TransAreaTemp.copyData(this.ds_TransArea, true);

        			for(var i = 0; i < this.ds_TransAreaTemp.rowcount; i++)
        			{
        				var nRow = this.ds_dtWipTransAreaList.addRow();
        				this.ds_dtWipTransAreaList.copyRow(nRow, this.ds_TransAreaTemp, i);
        			}


        			this.ds_TransArea.filter("");


        			for (var i = this.ds_TransArea.rowcount-1; i > -1; i--)
        			{
        				if (this.ds_TransArea.getColumn( i, "CHK") == "1")
        				{
        					this.ds_TransArea.deleteRow( i );
        				}
        			}


        			for (var i = 0; i < this.ds_TransArea.rowcount; i++)
        			{
        				if(this.nfn_nvl(this.ds_TransArea.getColumn(i, "CHK"), "") != "1")
        					this.resourceId += this.nfn_nvl(this.ds_TransArea.getColumn(i, "RESOURCEID"), "") + ",";
        			}



        			this.ds_TransArea.set_enableevent(true);

        			break;
        		case "Down":

        			this.ds_TransArea.filter("");
        			this.ds_dtWipTransAreaList.filter("");

        			if (this.ds_TransArea.rowcount > 1)
        			{
        				for (var i = 0; i < this.ds_TransArea.rowcount; i++)
        				{
        					this.resourceId += this.nfn_nvl(this.ds_TransArea.getColumn(i, "RESOURCEID"), "") + ",";
        				}
        			}


        			this.ds_dtWipTransAreaList.set_enableevent(false);
        			this.ds_dtWipTransAreaList.filter("CHK == '1'");

        			this.ds_dtWipTransAreaListTemp.clearData();
        			this.ds_dtWipTransAreaListTemp.copyData(this.ds_dtWipTransAreaList, true);

        			for(var i = 0; i < this.ds_dtWipTransAreaListTemp.rowcount; i++)
        			{
        				var nRow = this.ds_TransArea.addRow();
        				this.ds_TransArea.copyRow(nRow, this.ds_dtWipTransAreaListTemp, i);
        			}



        			for (var i = 0; i < this.ds_dtWipTransAreaList.getRowCount(); i++)
        			{
        				this.resourceId += this.nfn_nvl(this.ds_dtWipTransAreaList.getColumn(i, "RESOURCEID"), "") + ",";
        			};

        			this.ds_dtWipTransAreaList.filter("");


        			for (var i = this.ds_dtWipTransAreaList.rowcount-1; i > -1; i--)
        			{
        				if (this.ds_dtWipTransAreaList.getColumn( i, "CHK") == "1")
        				{
        					this.ds_dtWipTransAreaList.deleteRow( i );
        				}
        			}

        			this.ds_dtWipTransAreaList.set_enableevent(true);

        			break;
        	}


        	var sta_cnt_ds_TransAreaTxt = 'Count : <fc v="#f31d24">' + this.ds_TransArea.rowcount + '</fc>';
        	this.div_work.form.sta_cnt_ds_TransArea.set_text(sta_cnt_ds_TransAreaTxt);

        	if(this.ds_TransArea.rowcount == 0)
        	{
        		this.ds_cboTargetArea.clearData();
        		return;
        	}

        	var processDefid 			= "";
        	var processDefversion 		= "";
        	var Productdefid 			= "";
        	var Productdefversion 		= "";
        	var subprocessDefid     	= this.nfn_nvl(this.ds_dataTable.getColumn(0, "SUBPROCESSDEFID"), "");
        	var subprocessDefversion    = this.nfn_nvl(this.ds_dataTable.getColumn(0, "SUBPROCESSDEFVERSION"), "");
        	var lotCreateType           = this.nfn_nvl(this.ds_dataTable.getColumn(0, "LOTCREATEDTYPE"), "");


        	if (this.nfn_isNull(subprocessDefid) && lotCreateType != "Return")
        	{
        		processDefid 		= this.nfn_nvl(this.ds_dataTable.getColumn(0, "PROCESSDEFID"), "");
        		processDefversion 	= this.nfn_nvl(this.ds_dataTable.getColumn(0, "PROCESSDEFVERSION"), "");
        		Productdefid 		= this.nfn_nvl(this.ds_dataTable.getColumn(0, "PRODUCTDEFID"), "");
        		Productdefversion 	= this.nfn_nvl(this.ds_dataTable.getColumn(0, "PRODUCTDEFVERSION"), "");
        	}
        	else if (!this.nfn_isNull(subprocessDefid))
        	{
        		processDefid = subprocessDefid;
        		processDefversion = subprocessDefversion;
        	}
        	else if (lotCreateType == "Return")
        	{
        		processDefid      = this.nfn_nvl(this.ds_dataTable.getColumn(0, "PROCESSDEFID"), "");
        		processDefversion = this.nfn_nvl(this.ds_dataTable.getColumn(0, "PROCESSDEFVERSION"), "");
        	}

        	this.ds_param.clearData();
        	this.ds_param.addRow();


        	if (this.resourceId.length > 0)
        		this.resourceId = this.resourceId.substring(0, this.resourceId.length - 1);

        	this.ds_param.setColumn(0, "PLANTID", this.nfn_nvl(this.ds_dataTable.getColumn(0, "PLANTID"), ""));
        	this.ds_param.setColumn(0, "RESOURCEID", this.resourceId);
        	this.ds_param.setColumn(0, "LOTID", this.nfn_nvl(this.ds_dataTable.getColumn(0, "LOTID"), ""));


        	if (!this.nfn_isNull(Productdefid))
        	{
        		this.ds_param.setColumn(0, "PRODUCTDEFID", Productdefid);
        		this.ds_param.setColumn(0, "PRODUCTDEFVERSION", Productdefversion);
        	}

        	this.ds_param.setColumn(0, "PROCESSSEGMENTID", this.nfn_nvl(this.ds_dataTable.getColumn(0, "PROCESSSEGMENTID"), ""));
        	this.ds_param.setColumn(0, "PROCESSSEGMENTVERSION", this.nfn_nvl(this.ds_dataTable.getColumn(0, "PROCESSSEGMENTVERSION"), ""));
        	this.ds_param.setColumn(0, "PROCESSDEFID", processDefid);
        	this.ds_param.setColumn(0, "PROCESSDEFVERSION", processDefversion);
        	this.ds_param.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_param.setColumn(0, "VERSION", "10021");

        	this.resourceId = "";

        	//InitializeComboBox
        	//콤보박스 ds_param
        	var sSvcID 			= "getTransAreaList";
        	var sController 	= "/pcm02800/getTransAreaList.do";
        	var sInDatasets 	= "INPUT=ds_param";
        	var sOutDatasets 	= "ds_cboTargetArea=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        this.div_work_btn_DataUp_onclick = function(obj,e)
        {
        	this.buttonState = "Up";

        	this.setComboData();

        // 	if(this.ds_TransArea.rowposition >=0){
        // 		var uomClassId = this.ds_TransArea.getColumn(this.ds_TransArea.rowposition, "UOMCLASSID");
        // 		var uomDefId = this.ds_TransArea.getColumn(this.ds_TransArea.rowposition, "UOMDEFID");
        // 		var sRow 	= this.ds_dtWipTransAreaList.findRowExpr("UOMCLASSID == '"+uomClassId
        // 													+"'&& UOMDEFID=='" + uomDefId +"'");
        // 		//이미 존재하지 않을 경우에만 위로 복사
        // 		if(sRow<0){
        // 			var row 	= this.ds_dtWipTransAreaList.insertRow(this.ds_dtWipTransAreaList.rowposition+1);
        // 			var bSucc 	= this.ds_dtWipTransAreaList.copyRow(row,this.ds_TransArea,this.ds_TransArea.rowposition);
        // 		}
        // 		this.ds_TransArea.deleteRow(this.ds_TransArea.rowposition);
        // 	} else {
        // 		this.gfn_Message("NoSelections", "", "warning", "ok");
        // 		return;
        // 	}
        };


        this.fn_onValidateContent = function()
        {
        	if (this.ds_TransArea.rowcount < 1 || this.ds_cboTargetArea.rowcount < 1)
        	{
        		//저장할 데이터가 존재하지 않습니다.
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return true;
        	}


        	if(this.div_work.form.div.form.cbo_TargetArea.index == -1)
        	{
        		//대상 작업장이 선택되지 않았습니다.
        		this.gfn_Message("NoSelectTargetArea", null, "warning", "ok");
        		return true;
        	}

        	return false;
        };

        this.fn_save = function(obj,e)
        {
        	//메인 저장시
        	if(this.fn_onValidateContent()) return;


        	var rRow = this.ds_cboTargetArea.findRowExpr("RESOURCEID =='" + this.div_work.form.div.form.cbo_TargetArea.value + "'");

        	var resource = this.nfn_nvl(this.ds_cboTargetArea.getColumn(rRow, "RESOURCE"), "");
        	var transResourceId = resource.split('|')[0];
        	var transAreaId     = resource.split('|')[1];



        	this.ds_dataInfo.clearData();
        	this.ds_dataInfo.addRow();
        	this.ds_dataInfo.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_dataInfo.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_dataInfo.setColumn(0, "TRANSRESOURCEID", transResourceId);
        	this.ds_dataInfo.setColumn(0, "TRANSAREAID", transAreaId);
        	//{ "transAreaList" , dt },
        	this.ds_dataInfo.setColumn(0, "UISEGMENT", this.ds_TransArea.getColumn(0, "PROCESSSEGMENTID"));


        	var sSvcID = "saveChangeArea";
        	var sController = "/pcm02800/saveChangeArea.do";
        	var sInDatasets = "ds_dataInfo=ds_dataInfo:A ds_transAreaList=ds_TransArea:A";
        	var sOutDatasets = "ds_worker";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };


        this.ds_search_oncolumnchanged = function(obj,e)
        {
        	var oldvalue = this.nfn_nvl(e.oldvalue , "");
        	var newvalue = this.nfn_nvl(e.newvalue , "");

        	if(e.columnid == "P_AREANM")
        	{
        		if(newvalue.trim() == "")
        		{
        			this.g_areaId = "";
        			this.ds_search.setColumn( 0, "P_AREAID",   "" );
        		}
        		else if(oldvalue.trim() != newvalue.trim())
        		{
        			this.autoSearch = true;
        			//this.tab_search_Tabpage1_btn_popup_onclick(this.tab_search.Tabpage1.form.btn_areaid);
        		}
        	}
        	else if(e.columnid == "P_PROCESSSEGMENTNM")
        	{
        		if(newvalue.trim() == "")
        		{
        			this.ds_search.setColumn( 0, "P_PROCESSSEGMENTID",   "" );
        		}
        		else if(oldvalue.trim() != newvalue.trim())
        		{
        			this.autoSearch = true;
        			//this.tab_search_Tabpage1_btn_popup_onclick(this.tab_search.Tabpage1.form.btn_processsegmentid);
        		}
        	}
        	else if(e.columnid == "P_PRODUCTDEFID")
        	{
        		if(newvalue.trim() == "")
        		{
        			this.ds_search.setColumn( 0, "P_PRODUCTNAME",   "" );
        		}
        		else if(oldvalue.trim() != newvalue.trim())
        		{
        			this.autoSearch = true;
        			//this.tab_search_Tabpage1_btn_popup_onclick(this.tab_search.Tabpage1.form.btn_productdefid);
        		}
        	}
        // 	else if(e.columnid == "P_PRODUCTNAME")
        // 	{
        // 		if(newvalue.trim() == "")
        // 		{
        // 			this.ds_search.setColumn( 0, "P_PRODUCTDEFID",   "" );
        // 		}
        // 		else if(oldvalue.trim() == "" && newvalue.trim() != "")
        // 		{
        // 			this.autoSearch = true;
        // 			this.productNameSearch = true;
        // 			this.tab_search_Tabpage1_btn_popup_onclick(this.tab_search.Tabpage1.form.btn_productdefid);
        // 		}
        // 	}
        };



        this.Edit_onkillfocus = function(obj,e)
        {
        	if(!this.nfn_isNull(obj.value)){
        		obj.set_value(obj.value.trim());
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tabpage1.form.btn_lotid.addEventHandler("onclick",this.tab_search_Tabpage1_btn_popup_onclick,this);
            this.tab_search.Tabpage1.form.btn_productdefid.addEventHandler("onclick",this.tab_search_Tabpage1_btn_popup_onclick,this);
            this.tab_search.Tabpage1.form.edt_productdefid.addEventHandler("onkillfocus",this.Edit_onkillfocus,this);
            this.tab_search.Tabpage1.form.btn_areaid.addEventHandler("onclick",this.tab_search_Tabpage1_btn_popup_onclick,this);
            this.tab_search.Tabpage1.form.edt_areaid.addEventHandler("onkillfocus",this.Edit_onkillfocus,this);
            this.tab_search.Tabpage1.form.edt_processsegmentid.addEventHandler("onkillfocus",this.Edit_onkillfocus,this);
            this.tab_search.Tabpage1.form.btn_processsegmentid.addEventHandler("onclick",this.tab_search_Tabpage1_btn_popup_onclick,this);
            this.tab_search.Tabpage1.form.edt_lotid.addEventHandler("onkillfocus",this.Edit_onkillfocus,this);
            this.tab_search.Tabpage1.form.edt_productname.addEventHandler("onkillfocus",this.Edit_onkillfocus,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_clearCustom.addEventHandler("onclick",this.fn_clearCustom,this);
            this.div_work.form.btn_DataUp.addEventHandler("onclick",this.div_work_btn_DataUp_onclick,this);
            this.div_work.form.btn_DataDown.addEventHandler("onclick",this.div_work_btn_DataDown_onclick,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("PCM02800M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
