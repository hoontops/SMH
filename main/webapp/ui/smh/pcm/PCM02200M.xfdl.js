(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM02200M");
            this.set_titletext("설비 추가/변경");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_LotInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_EquipmentsRun", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ISRUNNING\" type=\"STRING\" size=\"256\"/><Column id=\"ISCOMPLETED\" type=\"STRING\" size=\"256\"/><Column id=\"ISRUNNING_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"ISCOMPLETED_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROLMODE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEREQUIRED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_DurableRun", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCOMPLETED\" type=\"STRING\" size=\"256\"/><Column id=\"ISRUNNING\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_EquipmentsChange", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ISRUNNING\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROLMODE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEREQUIRED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_DurableChange", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_WorkingEquipment", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ISRUNNING\" type=\"STRING\" size=\"256\"/><Column id=\"ISCOMPLETED\" type=\"STRING\" size=\"256\"/><Column id=\"ISRUNNING_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"ISCOMPLETED_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROLMODE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEREQUIRED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_DurableRun2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCOMPLETED\" type=\"STRING\" size=\"256\"/><Column id=\"ISRUNNING\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_DurableChange2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("");
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

            obj = new Static("sta_title","30","16","106","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("포장사양관리");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
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

            obj = new Div("div_work","0","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","10",null,"42","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_search");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("staLOTID","0","10","5.5%","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("2");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("3");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"9","24","24","10",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_reset2");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","staLOTID:10","10","200","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("0");
            obj.set_text("1025149H4");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Grid("grdLotInfo","0","52",null,"106","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj.set_cssclass("grd_detail_Master");
            obj.set_selecttype("cell");
            obj.set_scrollbartype("none");
            obj.set_scrolltype("none");
            obj.set_binddataset("ds_LotInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"87\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"102\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"21\"/><Row size=\"21\"/><Row size=\"21\"/><Row size=\"21\"/><Row size=\"21\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_head\" text=\"Lot No.\" wordWrap=\"char\" textAlign=\"left\"/><Cell col=\"1\" textAlign=\"left\" text=\"bind:LOTID\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"이전공정명\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PREVPROCESSSEGMENTNAME\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:PREVPROCESSSEGMENTNAME\"/><Cell col=\"4\" cssclass=\"cell_head\" text=\"공정명\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"6\" cssclass=\"cell_head\" text=\"후공정\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"NEXTPROCESSSEGMENTNAME \"/><Cell col=\"7\" textAlign=\"left\" text=\"bind:NEXTPROCESSSEGMENTNAME\"/><Cell col=\"8\" cssclass=\"cell_head\" text=\"공정수순\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"USERSEQUENCE \"/><Cell col=\"9\" textAlign=\"left\" text=\"bind:USERSEQUENCE\"/><Cell row=\"1\" cssclass=\"cell_head\" text=\"품목코드\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"ITEMID\"/><Cell row=\"1\" col=\"1\" textAlign=\"left\" text=\"bind:PRODUCTDEFID\"/><Cell row=\"1\" col=\"2\" cssclass=\"cell_head\" text=\"품목명\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"ITEMNAME\"/><Cell row=\"1\" col=\"3\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_head\" text=\"투입일자\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"INPUTDATE\"/><Cell row=\"1\" col=\"5\" textAlign=\"left\" text=\"bind:INPUTDATE\"/><Cell row=\"1\" col=\"6\" cssclass=\"cell_head\" text=\"S/O번호\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PRODUCTIONORDERID \"/><Cell row=\"1\" col=\"7\" textAlign=\"left\" text=\"bind:PRODUCTIONORDERID\"/><Cell row=\"1\" col=\"8\" cssclass=\"cell_head\" text=\"납기일\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"DUEDATE \"/><Cell row=\"1\" col=\"9\" textAlign=\"left\" text=\"bind:DUEDATE\"/><Cell row=\"2\" cssclass=\"cell_head\" text=\"품목유형구분\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PRODUCTDEFTYPE\"/><Cell row=\"2\" col=\"1\" textAlign=\"left\" text=\"bind:PRODUCTDEFTYPE\"/><Cell row=\"2\" col=\"2\" cssclass=\"cell_head\" text=\"생산구분\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell row=\"2\" col=\"3\" textAlign=\"left\" text=\"bind:PRODUCTIONTYPE\"/><Cell row=\"2\" col=\"4\" cssclass=\"cell_head\" text=\"Locking 여부\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"ISLOCKING \"/><Cell row=\"2\" col=\"5\" textAlign=\"left\" text=\"bind:ISLOCKING\"/><Cell row=\"2\" col=\"6\" cssclass=\"cell_head\" text=\"작업장\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"AREA \"/><Cell row=\"2\" col=\"7\" textAlign=\"left\" text=\"bind:AREANAME\"/><Cell row=\"2\" col=\"8\" cssclass=\"cell_head\" text=\"고객명\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"CUSTOMERNAME \"/><Cell row=\"2\" col=\"9\" textAlign=\"left\" text=\"bind:CUSTOMERNAME\"/><Cell row=\"3\" cssclass=\"cell_head\" text=\"단위\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"UNIT\"/><Cell row=\"3\" col=\"1\" textAlign=\"left\" text=\"bind:UNIT\"/><Cell row=\"3\" col=\"2\" cssclass=\"cell_head\" text=\"수량(PNL)\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PANELQTY\"/><Cell row=\"3\" col=\"3\" textAlign=\"left\" text=\"bind:PNLQTY\"/><Cell row=\"3\" col=\"4\" cssclass=\"cell_head\" text=\"수량(PCS)\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PCSQTY \"/><Cell row=\"3\" col=\"5\" textAlign=\"left\" text=\"bind:PCSQTY\"/><Cell row=\"3\" col=\"6\" cssclass=\"cell_head\" text=\"MM\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"MM\"/><Cell row=\"3\" col=\"7\" textAlign=\"left\" text=\"bind:MM\"/><Cell row=\"3\" col=\"8\" cssclass=\"cell_head\" text=\"재작업 여부\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"ISREWORK \"/><Cell row=\"3\" col=\"9\" textAlign=\"left\" text=\"bind:ISREWORK\"/><Cell row=\"4\" cssclass=\"cell_head\" text=\"보류 여부\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"ISHOLD\"/><Cell row=\"4\" col=\"1\" textAlign=\"left\" text=\"bind:ISHOLD\"/><Cell row=\"4\" col=\"2\" cssclass=\"cell_head\" text=\"자원 ID\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"RESOURCEID \"/><Cell row=\"4\" col=\"3\" textAlign=\"left\" text=\"bind:RESOURCEID\"/><Cell row=\"4\" col=\"4\" text=\" \" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\" \"/><Cell row=\"4\" col=\"5\" textAlign=\"left\" text=\"bind:PNLQTY\"/><Cell row=\"4\" col=\"6\" text=\" \" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\" \"/><Cell row=\"4\" col=\"7\" textAlign=\"left\" text=\"bind:PCSQTY\"/><Cell row=\"4\" col=\"8\" text=\" \" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\" \"/><Cell row=\"4\" col=\"9\" textAlign=\"left\" text=\"bind:PCSQTY\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tabControl","0","158",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("tpgEquipment",this.div_work.form.tabControl);
            obj.set_text("설비가동현황");
            obj.set_tooltiptext("EQUIPMENTUSESTATUS");
            this.div_work.form.tabControl.addChild(obj.name, obj);

            obj = new Static("staEquipmentsRun","0","0","56","34",null,null,null,null,null,null,this.div_work.form.tabControl.tpgEquipment.form);
            obj.set_taborder("0");
            obj.set_text("작업설비");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.form.tabControl.tpgEquipment.addChild(obj.name, obj);

            obj = new Grid("grdEquipmentsRun","0","34","550","150",null,null,null,null,null,null,this.div_work.form.tabControl.tpgEquipment.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_EquipmentsRun");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\"/><Column size=\"80\"/><Column size=\"195\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"완료\" tooltiptext=\"COMPLETE\"/><Cell col=\"1\" text=\"설비코드\" tooltiptext=\"EQUIPMENTCODE\"/><Cell col=\"2\" text=\"설비명\" tooltiptext=\"EQUIPMENTNAME\"/><Cell col=\"3\" text=\"작업시작시간\" tooltiptext=\"WORKSTARTTIME\"/><Cell col=\"4\" text=\"작업완료일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:ISCOMPLETED\"/><Cell col=\"1\" text=\"bind:EQUIPMENTID\"/><Cell col=\"2\" text=\"bind:EQUIPMENTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:TRACKINTIME\"/><Cell col=\"4\" text=\"bind:TRACKOUTTIME\"/></Band></Format></Formats>");
            this.div_work.form.tabControl.tpgEquipment.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_EquipmentsRun","staEquipmentsRun:10","0","140","34",null,null,null,null,null,null,this.div_work.form.tabControl.tpgEquipment.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabControl.tpgEquipment.addChild(obj.name, obj);

            obj = new Grid("grdDurableRun","grdEquipmentsRun:10","34",null,"150","0",null,null,null,null,null,this.div_work.form.tabControl.tpgEquipment.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_DurableRun");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\" band=\"left\"/><Column size=\"80\"/><Column size=\"195\"/><Column size=\"130\"/><Column size=\"195\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"작업중\" tooltiptext=\"ISRUNNING\"/><Cell col=\"1\" text=\"설비코드\" tooltiptext=\"EQUIPMENTCODE\"/><Cell col=\"2\" text=\"설비명\" tooltiptext=\"EQUIPMENTNAME\"/><Cell col=\"3\" text=\"Tool No.\" tooltiptext=\"DURABLELOTID\"/><Cell col=\"4\" text=\"치공구 명\" tooltiptext=\"DURABLEDEFNAME\"/><Cell col=\"5\" text=\"작업시작시간\" tooltiptext=\"WORKSTARTTIME\"/><Cell col=\"6\" text=\"작업완료시간\" tooltiptext=\"WORKENDDATE\"/><Cell col=\"7\" text=\"사용타수\" tooltiptext=\"USEDCOUNT\"/><Cell col=\"8\" text=\"누적타수\" tooltiptext=\"TOTALUSEDCOUNT\"/><Cell col=\"9\" text=\"보증타수\" tooltiptext=\"USEDLIMIT\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:ISRUNNING\" cssclass=\"expr:ISCOMPLETED == &quot;1&quot; ? &quot;cell_gray&quot; : &quot;&quot;\"/><Cell col=\"1\" text=\"bind:EQUIPMENTID\" cssclass=\"expr:ISCOMPLETED == &quot;1&quot; ? &quot;cell_gray&quot; : &quot;&quot;\"/><Cell col=\"2\" text=\"bind:EQUIPMENTNAME\" textAlign=\"left\" cssclass=\"expr:ISCOMPLETED == &quot;1&quot; ? &quot;cell_gray&quot; : &quot;&quot;\"/><Cell col=\"3\" text=\"bind:DURABLELOTID\" cssclass=\"expr:ISCOMPLETED == &quot;1&quot; ? &quot;cell_gray&quot; : &quot;&quot;\"/><Cell col=\"4\" text=\"bind:DURABLEDEFNAME\" textAlign=\"left\" cssclass=\"expr:ISCOMPLETED == &quot;1&quot; ? &quot;cell_gray&quot; : &quot;&quot;\"/><Cell col=\"5\" text=\"bind:WORKSTARTTIME\" cssclass=\"expr:ISCOMPLETED == &quot;1&quot; ? &quot;cell_gray&quot; : &quot;&quot;\"/><Cell col=\"6\" text=\"bind:WORKENDTIME\" cssclass=\"expr:ISCOMPLETED == &quot;1&quot; ? &quot;cell_gray&quot; : &quot;&quot;\"/><Cell col=\"7\" text=\"bind:USEDCOUNT\" cssclass=\"expr:ISCOMPLETED == &quot;1&quot; ? &quot;cell_gray&quot; : &quot;&quot;\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:TOTALUSEDCOUNT\" cssclass=\"expr:ISCOMPLETED == &quot;1&quot; ? &quot;cell_gray&quot; : &quot;&quot;\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:USEDLIMIT\" cssclass=\"expr:ISCOMPLETED == &quot;1&quot; ? &quot;cell_gray&quot; : &quot;&quot;\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.form.tabControl.tpgEquipment.addChild(obj.name, obj);

            obj = new Grid("grdEquipmentsChange","0","218","550",null,null,"0",null,null,null,null,this.div_work.form.tabControl.tpgEquipment.form);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_EquipmentsChange");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"195\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"설비코드\" tooltiptext=\"EQUIPMENTCODE\"/><Cell col=\"3\" text=\"설비명\" tooltiptext=\"EQUIPMENTNAME\"/><Cell col=\"4\" text=\"작업시작시간\" tooltiptext=\"WORKSTARTTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:EQUIPMENTID\"/><Cell col=\"3\" text=\"bind:EQUIPMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TRACKINTIME\"/></Band></Format></Formats>");
            this.div_work.form.tabControl.tpgEquipment.addChild(obj.name, obj);

            obj = new Static("staEquipmentsChange","0","184","98","34",null,null,null,null,null,null,this.div_work.form.tabControl.tpgEquipment.form);
            obj.set_taborder("5");
            obj.set_text("변경 가능 설비  ");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.form.tabControl.tpgEquipment.addChild(obj.name, obj);

            obj = new Grid("grdDurableChange","grdEquipmentsChange:10","218",null,null,"0","0",null,null,null,null,this.div_work.form.tabControl.tpgEquipment.form);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_DurableChange");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"30\" band=\"left\"/><Column size=\"80\"/><Column size=\"195\"/><Column size=\"130\"/><Column size=\"195\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"설비코드\" tooltiptext=\"EQUIPMENTCODE\"/><Cell col=\"3\" text=\"설비명\" tooltiptext=\"EQUIPMENTNAME\"/><Cell col=\"4\" text=\"Tool No.\" tooltiptext=\"DURABLELOTID\"/><Cell col=\"5\" text=\"치공구 명\" tooltiptext=\"DURABLEDEFNAME\"/><Cell col=\"6\" text=\"작업시작시간\" tooltiptext=\"WORKSTARTTIME\"/><Cell col=\"7\" text=\"사용타수\" tooltiptext=\"USEDCOUNT\"/><Cell col=\"8\" text=\"누적타수\" tooltiptext=\"TOTALUSEDCOUNT\"/><Cell col=\"9\" text=\"보증타수\" tooltiptext=\"USEDLIMIT\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:EQUIPMENTID\"/><Cell col=\"3\" text=\"bind:EQUIPMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:DURABLELOTID\"/><Cell col=\"5\" text=\"bind:DURABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:WORKSTARTTIME\"/><Cell col=\"7\" text=\"bind:USEDCOUNT\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:TOTALUSEDCOUNT\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:USEDLIMIT\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.form.tabControl.tpgEquipment.addChild(obj.name, obj);

            obj = new Static("staDurableRun","grdEquipmentsRun:10","0","84","34",null,null,null,null,null,null,this.div_work.form.tabControl.tpgEquipment.form);
            obj.set_taborder("7");
            obj.set_text("치공구내역   ");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("TOOLREQUESTSTATUS");
            this.div_work.form.tabControl.tpgEquipment.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_DurableRun","staDurableRun:0","0","140","34",null,null,null,null,null,null,this.div_work.form.tabControl.tpgEquipment.form);
            obj.set_taborder("8");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabControl.tpgEquipment.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_EquipmentsChange","staEquipmentsChange:0","184","140","34",null,null,null,null,null,null,this.div_work.form.tabControl.tpgEquipment.form);
            obj.set_taborder("9");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabControl.tpgEquipment.addChild(obj.name, obj);

            obj = new Static("staDurableChange","grdEquipmentsChange:10","184","117","34",null,null,null,null,null,null,this.div_work.form.tabControl.tpgEquipment.form);
            obj.set_taborder("10");
            obj.set_text("변경 가능 치공구  ");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.form.tabControl.tpgEquipment.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_DurableChange","staDurableChange:0","184","140","34",null,null,null,null,null,null,this.div_work.form.tabControl.tpgEquipment.form);
            obj.set_taborder("11");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabControl.tpgEquipment.addChild(obj.name, obj);

            obj = new Tabpage("tpgDurable",this.div_work.form.tabControl);
            obj.set_text("치공구현황");
            obj.set_tooltiptext("TOOLINFORMATIONLIST");
            this.div_work.form.tabControl.addChild(obj.name, obj);

            obj = new Static("staEquipmentsRun","0","0","56","34",null,null,null,null,null,null,this.div_work.form.tabControl.tpgDurable.form);
            obj.set_taborder("0");
            obj.set_text("작업설비");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.form.tabControl.tpgDurable.addChild(obj.name, obj);

            obj = new Grid("grdWorkingEquipment","0","34","400",null,null,"0",null,null,null,null,this.div_work.form.tabControl.tpgDurable.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_WorkingEquipment");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"195\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"설비코드\" tooltiptext=\"EQUIPMENTCODE\"/><Cell col=\"1\" text=\"설비명\" tooltiptext=\"EQUIPMENTNAME\"/><Cell col=\"2\" text=\"작업시작시간\" tooltiptext=\"WORKSTARTTIME\"/></Band><Band id=\"body\"><Cell text=\"bind:EQUIPMENTID\"/><Cell col=\"1\" text=\"bind:EQUIPMENTNAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:TRACKINTIME\"/></Band></Format></Formats>");
            this.div_work.form.tabControl.tpgDurable.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_WorkingEquipment","66","0","140","34",null,null,null,null,null,null,this.div_work.form.tabControl.tpgDurable.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabControl.tpgDurable.addChild(obj.name, obj);

            obj = new Grid("grdDurableRun2","grdWorkingEquipment:10","34",null,"150","0",null,null,null,null,null,this.div_work.form.tabControl.tpgDurable.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_DurableRun2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"45\" band=\"left\"/><Column size=\"80\"/><Column size=\"195\"/><Column size=\"130\"/><Column size=\"195\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"완료\" tooltiptext=\"COMPLETE\"/><Cell col=\"1\" text=\"설비코드\" tooltiptext=\"EQUIPMENTCODE\"/><Cell col=\"2\" text=\"설비명\" tooltiptext=\"EQUIPMENTNAME\"/><Cell col=\"3\" text=\"Tool No.\" tooltiptext=\"DURABLELOTID\"/><Cell col=\"4\" text=\"치공구 명\" tooltiptext=\"DURABLEDEFNAME\"/><Cell col=\"5\" text=\"작업시작시간\" tooltiptext=\"WORKSTARTTIME\"/><Cell col=\"6\" text=\"작업완료시간\" tooltiptext=\"WORKENDDATE\"/><Cell col=\"7\" text=\"사용타수\" tooltiptext=\"USEDCOUNT\"/><Cell col=\"8\" text=\"누적타수\" tooltiptext=\"TOTALUSEDCOUNT\"/><Cell col=\"9\" text=\"보증타수\" tooltiptext=\"USEDLIMIT\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:ISCOMPLETED\"/><Cell col=\"1\" text=\"bind:EQUIPMENTID\"/><Cell col=\"2\" text=\"bind:EQUIPMENTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:DURABLELOTID\"/><Cell col=\"4\" text=\"bind:DURABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:WORKSTARTTIME\"/><Cell col=\"6\" text=\"bind:WORKENDTIME\"/><Cell col=\"7\" text=\"bind:USEDCOUNT\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:TOTALUSEDCOUNT\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:USEDLIMIT\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.form.tabControl.tpgDurable.addChild(obj.name, obj);

            obj = new Grid("grdDurableChange2","grdWorkingEquipment:10","218",null,null,"0","0",null,null,null,null,this.div_work.form.tabControl.tpgDurable.form);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_DurableChange2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"30\" band=\"left\"/><Column size=\"80\"/><Column size=\"195\"/><Column size=\"130\"/><Column size=\"195\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"설비코드\" tooltiptext=\"EQUIPMENTCODE\"/><Cell col=\"3\" text=\"설비명\" tooltiptext=\"EQUIPMENTNAME\"/><Cell col=\"4\" text=\"Tool No.\" tooltiptext=\"DURABLELOTID\"/><Cell col=\"5\" text=\"치공구 명\" tooltiptext=\"DURABLEDEFNAME\"/><Cell col=\"6\" text=\"작업시작시간\" tooltiptext=\"WORKSTARTTIME\"/><Cell col=\"7\" text=\"사용타수\" tooltiptext=\"USEDCOUNT\"/><Cell col=\"8\" text=\"누적타수\" tooltiptext=\"TOTALUSEDCOUNT\"/><Cell col=\"9\" text=\"보증타수\" tooltiptext=\"USEDLIMIT\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:EQUIPMENTID\"/><Cell col=\"3\" text=\"bind:EQUIPMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:DURABLELOTID\"/><Cell col=\"5\" text=\"bind:DURABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:WORKSTARTTIME\"/><Cell col=\"7\" text=\"bind:USEDCOUNT\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:TOTALUSEDCOUNT\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:USEDLIMIT\" maskeditformat=\"#,##0\" displaytype=\"mask\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.form.tabControl.tpgDurable.addChild(obj.name, obj);

            obj = new Static("staDurableRun2","grdWorkingEquipment:10","0","84","34",null,null,null,null,null,null,this.div_work.form.tabControl.tpgDurable.form);
            obj.set_taborder("5");
            obj.set_text("치공구내역   ");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("TOOLREQUESTSTATUS");
            this.div_work.form.tabControl.tpgDurable.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_DurableRun2","staDurableRun2:0","0","140","34",null,null,null,null,null,null,this.div_work.form.tabControl.tpgDurable.form);
            obj.set_taborder("6");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabControl.tpgDurable.addChild(obj.name, obj);

            obj = new Static("staDurableChange2","grdWorkingEquipment:10","184","112","34",null,null,null,null,null,null,this.div_work.form.tabControl.tpgDurable.form);
            obj.set_taborder("7");
            obj.set_text("변경 가능 치공구  ");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.form.tabControl.tpgDurable.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_DurableChange2","staDurableChange2:0","184","140","34",null,null,null,null,null,null,this.div_work.form.tabControl.tpgDurable.form);
            obj.set_taborder("8");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabControl.tpgDurable.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM02200M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM02200M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM02200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 작업중인 LOT의 설비 또는 치공구를 추가/교체 한다.
         * 파일명 		: PCM02200M.xfdl
         * 작성자 		: 김애리
         * 작성일 		: 2021.4.16
         * AS-IS		: ChangeLotEquipment
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.4.16	김애리   	최초작성
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
        	this.ds_search.setColumn(0, "PLANTID",this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LOTID", "");
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

        	this.GetLotInfo();

        };

        this.fn_searchValidate = function ()
        {
        	var component = this.div_work.form.div_search;
        	var strColIdList = "edt_LOTID";
        	var strColNmList = "LOTID";
        	return this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        };


        /*
        * 기능 : 검색 초기화
        */
        this.fn_searchClear = function(obj,e)
        {
        	this.ds_search.setColumn(0,"LOTID","");
        };

        this.fn_save = function (obj, e)
        {
        	if(this.fn_saveValidate() == false) return;
        	if(this.div_work.form.tabControl.tabindex == 0){

        trace(this.ds_DurableRun.saveXML());
        		var sSvcID 			= "saveChangeEquipment";
        		var sController 	= "/pcm02200/saveChangeEquipment.do";
        		var sInDatasets 	= "ds_search=ds_search ds_EquipmentsRun=ds_EquipmentsRun ds_EquipmentsChange=ds_EquipmentsChange "
        							+ "ds_DurableRun=ds_DurableRun ds_DurableChange=ds_DurableChange ds_LotInfo=ds_LotInfo";
        	} else { //치공구 현황 탭
        		var sSvcID 			= "saveChangeDurable";
        		var sController 	= "/pcm02200/saveChangeDurable.do";
        		var sInDatasets 	= "ds_search=ds_search ds_DurableRun2=ds_DurableRun2 ds_DurableChange2=ds_DurableChange2 ds_LotInfo=ds_LotInfo";
        	}

        	var sOutDatasets 	= "ds_result=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_saveValidate = function ()
        {
        	if(this.div_work.form.tabControl.tabindex == 0){

        //trace(this.ds_EquipmentsRun.saveXML());
        		if(this.ds_EquipmentsRun.findRow("ISCOMPLETED","1") < 0 && this.ds_EquipmentsChange.findRow("CHK","1") < 0  )
        		{
        			this.gfn_Message("NoSaveData", "", "warring", "ok");//저장할 데이터가 존재하지 않습니다.
        			return false;
        		}
        		// 변경 설비 검사.
        		var ds_eqpTemp =  new Dataset();
        		ds_eqpTemp.set_name("ds_eqpTemp");

        		ds_eqpTemp.copyData(this.ds_EquipmentsChange);
        		ds_eqpTemp.filter("DURABLEREQUIRED == 'Y' && CHK == '1'");
        		trace(ds_eqpTemp.saveXML());
        		if(ds_eqpTemp.rowcount > 0) {
        			for(var i=0;i<ds_eqpTemp.rowcount;i++)
        			{
        				var eqpID = ds_eqpTemp.getColumn(i,"EQUIPMENTID");//선택한 변경 설비 아이디가 변경 치공구에서 선택 됐는지...
        				var fRow = this.ds_DurableChange.findRowExpr( "EQUIPMENTID == $0 && CHK == '1'", 0, -1, [eqpID] );
        				if(fRow < 0) {
        					this.gfn_Message("CheckRequireDurable", "", "information", "ok"); // 필수 치공구를 입력 하지 않았습니다.
        					//this.removeChild("ds_eqpTemp");
        					ds_eqpTemp.destroy();
        					return false;
        				}
        			}
        		}

        		// 작업 중인 설비 검사.
        		ds_eqpTemp.filter("");
        		ds_eqpTemp.copyData(this.ds_EquipmentsRun); //가동 장비에 치공구 여부가 'Y' 이고 완료 된 것 중에
        		ds_eqpTemp.filter("DURABLEREQUIRED == 'Y' && ISCOMPLETED == '1'");
        		if(ds_eqpTemp.rowcount > 0) {
        			for(var i=0;i<ds_eqpTemp.rowcount;i++)
        			{
        				var eqpID = ds_eqpTemp.getColumn(i,"EQUIPMENTID");
        				var fRow = this.ds_DurableRun.findRowExpr( "EQUIPMENTID", eqpID);
        				if(fRow < 0) {
        					this.gfn_Message("CheckRequireDurable", "", "information", "ok"); // 필수 치공구를 입력 하지 않았습니다.
        					//this.removeChild("ds_eqpTemp");
        					ds_eqpTemp.destroy();
        					return false;
        				}
        			}
        		}

        		//this.removeChild("ds_eqpTemp");
        		ds_eqpTemp.destroy();

        	} else { //치공구 현황 탭
        		if(this.ds_DurableRun2.findRow("ISCOMPLETED","1") < 0 && this.ds_DurableChange2.findRow("CHK","1") < 0  )
        		{
        			this.gfn_Message("NoSaveData", "", "warring", "ok");//저장할 데이터가 존재하지 않습니다.
        			return false;
        		}

        		if(this.ds_WorkingEquipment.rowcount == 0)
        		{
        			this.gfn_Message("NoCompleteEquipment", "", "warring", "ok"); //작업 완료 할 설비가 필요합니다.
        			return false;
        		}

        		var fRow = this.ds_DurableRun2.findRow("ISCOMPLETED","1");
        		if(fRow < 0)
        		{
        			this.gfn_Message("NotExistsEndDurable", "", "information", "ok");// 작업완료할 치공구를 선택하여 주십시오.
        			return false;
        		}

        		fRow = this.ds_DurableChange2.findRow("CHK","1");
        		if(fRow < 0)
        		{
        			this.gfn_Message("NoSelectChangeDurable", "", "information", "ok");// 변경할 치공구를 선택하여 주십시오.
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
        		case "selectLotInfoBylotIDbyAreaAuthority" :
        		{
        			if(this.div_work.form.tabControl.tabindex == 0)
        			{
        				this.GetEquipmentTab();
        			} else {
        				this.GetDurableTabEquipment();
        			}
        			break;
        		}
        		case "selectEquipmentTab" :
        		{
        			//trace(this.ds_EquipmentsRun.saveXML());
        			break;
        		}
        		case "saveChangeEquipment" :
        		{
        			this.gfn_Message("SuccessSave", "", "information", "ok");
        			this.GetEquipmentTab();
        			break;
        		}
        		case "saveChangeDurable" :
        		{
        			this.gfn_Message("SuccessSave", "", "information", "ok");
        			this.GetDurableTabEquipment();
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
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        this.GetLotInfo = function ()
        {
        	if(this.fn_searchValidate() == false) return;
        	this.ds_search.setColumn(0,"LOTID",this.div_work.form.div_search.form.edt_LOTID.value);

        	var sSvcID 			= "selectLotInfoBylotIDbyAreaAuthority";
        	var sController 	= "/pcm02200/selectLotInfoBylotIDbyAreaAuthority.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_LotInfo=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.GetEquipmentTab = function ()
        {
        	this.ds_EquipmentsRun.set_enableevent(true);
        	this.ds_EquipmentsChange.set_enableevent(true);
        	this.ds_DurableChange.set_enableevent(true);

        	this.ds_search.setColumn(0,"EQUIPMENTID","");
        	this.ds_EquipmentsRun.clearData();
        	this.ds_EquipmentsChange.clearData();
        	this.ds_DurableRun.clearData();
        	this.ds_DurableChange.clearData();

        	var sSvcID 			= "selectEquipmentTab";
        	var sController 	= "/pcm02200/selectEquipmentTab.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_EquipmentsRun=ds_EquipmentsRun ds_EquipmentsChange=ds_EquipmentsChange ds_DurableRun=ds_DurableRun ds_DurableChange=ds_DurableChange";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.GetDurableTabEquipment = function ()
        {
        	this.ds_WorkingEquipment.clearData();
        	this.ds_DurableRun2.clearData();
        	this.ds_DurableChange2.clearData();

        	var sSvcID 			= "selectDurableTabEquipment";
        	var sController 	= "/pcm02200/selectDurableTabEquipment.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_WorkingEquipment=ds_EquipmentsRun";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.GetDurableTabDurable = function ()
        {
        	var nRow = this.ds_WorkingEquipment.rowcount == 1 ? 0 : this.ds_WorkingEquipment.rowposition;
        	this.ds_search.setColumn(0,"EQUIPMENTID",this.ds_WorkingEquipment.getColumn(nRow, "EQUIPMENTID"));

        	this.ds_DurableRun2.set_enableevent(true);
        	this.ds_DurableChange2.set_enableevent(true);
        	this.ds_DurableRun2.clearData();
        	this.ds_DurableChange2.clearData();


        	var sSvcID 			= "selectDurableTabDurable";
        	var sController 	= "/pcm02200/selectDurableTabDurable.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_DurableRun2=ds_DurableRun ds_DurableChange2=ds_DurableChange";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.GetCurrDate = function ()
        {
        	var currDate = this.nfn_getCurrentSystemTime();

        	currDate = currDate.substr(0, 4)+'-'+ currDate.substr(4, 2)+'-'+ currDate.substr(6, 2)+' '+
        		       currDate.substr(8, 2)+':'+ currDate.substr(10, 2)+':'+ currDate.substr(12, 2);

        	return currDate;
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.div_work_div_search_edt_LOTID_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13){
        		this.GetLotInfo();
        	}
        };

        this.ds_WorkingEquipment_onrowposchanged = function(obj,e)
        {
        trace('ds_WorkingEquipment_onrowposchanged');
        	if(e.newrow < 0) return;

        	this.GetDurableTabDurable();
        };

        this.div_work_tabControl_onchanged = function(obj,e)
        {
        	if(e.postindex == 0) this.GetEquipmentTab();
        	else this.GetDurableTabEquipment();
        };

        /*
         *	가동 설비 체크 시, 가동 치공구 작업완료 셋팅
         */
        this.ds_EquipmentsRun_oncolumnchanged = function(obj,e)
        {
        	if(e.row < 0) return;
        	if(e.columnid == "ISCOMPLETED")
        	{
        		try{
        			this.ds_EquipmentsRun.set_enableevent(false);
        			this.ds_DurableRun.set_enableevent(false);

        			if(e.newvalue == 1)
        			{
        				var currDate = this.GetCurrDate(); //this.Date2String(new nexacro.Date(),2);
        				this.ds_EquipmentsRun.setColumn(e.row, "TRACKOUTTIME" , currDate);
        				for(var i=0;i<this.ds_DurableRun.rowcount;i++)
        				{
        					var eqpID = this.ds_EquipmentsRun.getColumn(e.row, "EQUIPMENTID");
        					if(this.ds_DurableRun.getColumn(i,"EQUIPMENTID") == eqpID)
        					{
        						this.ds_DurableRun.setColumn(i,"WORKENDTIME",currDate);
        						this.ds_DurableRun.setColumn(i,"ISCOMPLETED","1");
        					}
        				}
        			}
        			else
        			{
        				this.ds_EquipmentsRun.setColumn(e.row, "TRACKOUTTIME" , null); // server 에서 NULL 넣어야 함.
        				for(var i=0;i<this.ds_DurableRun.rowcount;i++)
        				{
        					var eqpID = this.ds_EquipmentsRun.getColumn(e.row, "EQUIPMENTID");
        					if(this.ds_DurableRun.getColumn(i,"EQUIPMENTID") == eqpID)
        					{
        						this.ds_DurableRun.setColumn(i,"WORKENDTIME",null);
        						this.ds_DurableRun.setColumn(i,"ISCOMPLETED","0");
        					}
        				}
        			}


        		}
        		catch(ec){
        			trace("ds_EquipmentsRun_oncolumnchanged ? " + ec.toString());
        		}

        		this.ds_DurableRun.set_enableevent(true);
        		this.ds_EquipmentsRun.set_enableevent(true);
        	}
        };

        this.ds_EquipmentsChange_oncolumnchanged = function(obj,e)
        {
        	if(e.row < 0) return;
        	if(e.columnid == "CHK")
        	{
        		this.ds_EquipmentsChange.set_enableevent(false);
        		try{
        			if(e.newvalue == 1){
        				var currDate = this.GetCurrDate(); //this.Date2String(new nexacro.Date(),2);
        				this.ds_EquipmentsChange.setColumn(e.row, "TRACKINTIME", currDate);
        			}else {
        				this.ds_EquipmentsChange.setColumn(e.row, "TRACKINTIME", null);
        			}

        		}
        		catch(ec){
        			trace("ds_EquipmentsChange_oncolumnchanged ? " + ec.toString());
        		}

        		this.ds_EquipmentsChange.set_enableevent(true);
        	}

        };



        this.ds_DurableChange_cancolumnchange = function(obj,e)
        {
        	if(e.row < 0) return;
        	if(e.columnid == "CHK")
        	{
        		try{
        			var durableLotID = this.ds_DurableChange.getColumn(e.row, "DURABLELOTID");

        			if(e.newvalue == 1){

        				if(this.ds_EquipmentsChange.rowposition < 0) {
        					var args = " Tool No. : " + durableLotID;
        					this.gfn_Message("EquipmentIsRequired", args, "information", "ok");  // 설비는 필수로 선택해야 합니다. {0}
        					return false;
        				}

        				// 해당 Lot 이 완료되지 않은 게 있는지...
        				var fRow = this.ds_DurableRun.findRowExpr( "DURABLELOTID == $0 && ISCOMPLETED != $1", 0, -1, [durableLotID, "1"] );

        				if(fRow >= 0)
        				{
        					this.gfn_Message("DurableLotIsUsing", "", "information", "ok"); // 사용 중인 치공구 입니다.
        					return false;
        				}

        				var eRow = this.ds_EquipmentsChange.rowcount == 1 ? 0 : this.ds_EquipmentsChange.rowposition;
        				var eqpID = this.ds_EquipmentsChange.getColumn(eRow, "EQUIPMENTID");

        				fRow = this.ds_DurableRun.findRowExpr( "EQUIPMENTID == $0 && ISCOMPLETED != $1", 0, -1, [eqpID, "1"] );

        				if(fRow >= 0)
        				{
        					var args = " Equipment ID : " + eqpID;
        					this.gfn_Message("EquipmentHasDurableLot", args, "information", "ok"); // 설비에서 이미 사용중인 치공구가 있습니다. {0}
        					return false;
        				}

        				this.ds_DurableChange.set_enableevent(false);

        				var usedLimit = nexacro.toNumber(this.pfn_allTrim(this.ds_DurableChange.getColumn(e.row,"USEDLIMIT")));
                        var totalUsedCount = nexacro.toNumber(this.pfn_allTrim(this.ds_DurableChange.getColumn(e.row,"TOTALUSEDCOUNT")));
        				//this.alert("usedLimit : " + usedLimit +", totalUsedCount : " + totalUsedCount);

        				if (usedLimit <= totalUsedCount) {
        					// 치공구의 현재 사용횟수가 한계 사용횟수를 초과하였습니다. 그래도 진행 하겠습니까?
        					var bRtn = this.gfn_confirm("UsedCountLargerThanUsedLimit", "information", "");
        					if(bRtn == false){
        						this.ds_DurableChange.setColumn(e.row,"WORKSTARTTIME",null);
        						this.ds_DurableChange.setColumn(e.row,"EQUIPMENTID",null);
        						this.ds_DurableChange.setColumn(e.row,"EQUIPMENTNAME",null);
        						this.ds_DurableChange.set_enableevent(true);
        						return false;
        					}

        				}//if (usedLimit <= totalUsedCount) {

        			}//if(e.newvalue == 1){

        		}
        		catch(ec){
        			trace("ds_DurableChange_cancolumnchange ? " + ec.toString());
        		}

        		this.ds_DurableChange.set_enableevent(true);
        	}
        };


        this.ds_DurableChange_oncolumnchanged = function(obj,e)
        {
        	if(e.row < 0) return;
        	if(e.columnid == "CHK")
        	{
        		this.ds_DurableChange.set_enableevent(false);
        		try{
        			if(e.newvalue == 1){
        				var nRow = this.ds_EquipmentsChange.rowcount == 1 ? 0 : this.ds_EquipmentsChange.rowposition;
        				var currDate = this.GetCurrDate(); //this.Date2String(new nexacro.Date(),2);
        				this.ds_DurableChange.setColumn(e.row,"WORKSTARTTIME",currDate);
        				this.ds_DurableChange.setColumn(e.row,"EQUIPMENTID",this.ds_EquipmentsChange.getColumn(nRow, "EQUIPMENTID"));
        				this.ds_DurableChange.setColumn(e.row,"EQUIPMENTNAME",this.ds_EquipmentsChange.getColumn(nRow, "EQUIPMENTNAME"));
        			} else {
        				this.ds_DurableChange.setColumn(e.row,"WORKSTARTTIME",null);
        				this.ds_DurableChange.setColumn(e.row,"EQUIPMENTID",null);
        				this.ds_DurableChange.setColumn(e.row,"EQUIPMENTNAME",null);
        			}
        		}
        		catch(ec){
        			trace("ds_DurableChange_oncolumnchanged ? " + ec.toString());
        		}

        		this.ds_DurableChange.set_enableevent(true);
        	}
        };

        this.ds_DurableRun2_oncolumnchanged = function(obj,e)
        {
        	if(e.row < 0) return;
        	if(e.columnid == "ISCOMPLETED")
        	{
        		this.ds_DurableRun2.set_enableevent(false);
        		try{
        			if(e.newvalue == 1){
        				var currDate = this.GetCurrDate(); //this.Date2String(new nexacro.Date(),2);
        				this.ds_DurableRun2.setColumn(e.row,"WORKENDTIME",currDate);
        			} else {
        				this.ds_DurableRun2.setColumn(e.row,"WORKENDTIME",null);
        			}
        		}
        		catch(ec){
        			trace("ds_DurableRun2_oncolumnchanged ? " + ec.toString());
        		}
        		this.ds_DurableRun2.set_enableevent(true);
        	}
        };



        this.ds_DurableChange2_cancolumnchange = function(obj,e)
        {
        	if(e.row < 0) return;
        	if(e.columnid == "CHK")
        	{
        		if(e.newvalue == 1){
        			var durableLotID = this.ds_DurableChange2.getColumn(e.row, "DURABLELOTID");

        			if(this.ds_WorkingEquipment.rowposition < 0) {
        				var args = " Tool No. : " + durableLotID;
        				this.gfn_Message("EquipmentIsRequired", args, "information", "ok");  // 설비는 필수로 선택해야 합니다. {0}
        				return false;
        			}

        			var fRow = this.ds_DurableRun2.findRowExpr( "DURABLELOTID == $0 && ISCOMPLETED != $1", 0, -1, [durableLotID, "1"] );
        			if(fRow >= 0)
        			{
        				this.gfn_Message("DurableLotIsUsing", "", "information", "ok"); // 사용 중인 치공구 입니다.
        				return false;
        			}

        			var eRow = this.ds_WorkingEquipment.rowcount == 1 ? 0 : this.ds_WorkingEquipment.rowposition;
        			var eqpID = this.ds_WorkingEquipment.getColumn(eRow, "EQUIPMENTID");

        			fRow = this.ds_DurableRun2.findRowExpr( "EQUIPMENTID == $0 && ISCOMPLETED != $1", 0, -1, [eqpID, "1"] );

        			if(fRow >= 0)
        			{
        				var args = " Equipment ID : " + eqpID;
        				this.gfn_Message("EquipmentHasDurableLot", args, "information", "ok"); // 설비에서 이미 사용중인 치공구가 있습니다. {0}
        				return false;
        			}

        			this.ds_DurableChange.set_enableevent(false);

        			var usedLimit = nexacro.toNumber(this.pfn_allTrim(this.ds_DurableChange2.getColumn(e.row,"USEDLIMIT")));
        			var totalUsedCount = nexacro.toNumber(this.pfn_allTrim(this.ds_DurableChange2.getColumn(e.row,"TOTALUSEDCOUNT")));
        			//this.alert("usedLimit : " + usedLimit +", totalUsedCount : " + totalUsedCount);

        			if (usedLimit <= totalUsedCount) {
        				// 치공구의 현재 사용횟수가 한계 사용횟수를 초과하였습니다. 그래도 진행 하겠습니까?
        				var bRtn = this.gfn_confirm("UsedCountLargerThanUsedLimit", "information", "");
        				if(bRtn == false){
        					this.ds_DurableChange2.setColumn(e.row,"WORKSTARTTIME",null);
        					this.ds_DurableChange2.setColumn(e.row,"EQUIPMENTID",null);
        					this.ds_DurableChange2.setColumn(e.row,"EQUIPMENTNAME",null);
        					this.ds_DurableChange2.set_enableevent(true);
        					return false;
        				}

        			}//if (usedLimit <= totalUsedCount) {

        			this.ds_DurableChange2.set_enableevent(true);

        		}//if(e.newvalue == 1){
        	}
        };

        this.ds_DurableChange2_oncolumnchanged = function(obj,e)
        {
        	if(e.row < 0) return;
        	if(e.columnid == "CHK")
        	{
        		this.ds_DurableChange2.set_enableevent(false);
        		try{
        			if(e.newvalue == 1){
        				var nRow = this.ds_WorkingEquipment.rowcount == 1 ? 0 : this.ds_WorkingEquipment.rowposition;
        				var currDate = this.GetCurrDate(); //this.Date2String(new nexacro.Date(),2);
        				this.ds_DurableChange2.setColumn(e.row,"WORKSTARTTIME",currDate);
        				this.ds_DurableChange2.setColumn(e.row,"EQUIPMENTID",this.ds_WorkingEquipment.getColumn(nRow, "EQUIPMENTID"));
        				this.ds_DurableChange2.setColumn(e.row,"EQUIPMENTNAME",this.ds_WorkingEquipment.getColumn(nRow, "EQUIPMENTNAME"));
        			} else {
        				this.ds_DurableChange2.setColumn(e.row,"WORKSTARTTIME",null);
        				this.ds_DurableChange2.setColumn(e.row,"EQUIPMENTID",null);
        				this.ds_DurableChange2.setColumn(e.row,"EQUIPMENTNAME",null);
        			}
        		}
        		catch(ec){
        			trace("ds_DurableChange_oncolumnchanged ? " + ec.toString());
        		}

        		this.ds_DurableChange2.set_enableevent(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.div_search.form.btn_reset.addEventHandler("onclick",this.fn_formInit,this);
            this.div_work.form.div_search.form.edt_LOTID.addEventHandler("onkeydown",this.div_work_div_search_edt_LOTID_onkeydown,this);
            this.div_work.form.tabControl.addEventHandler("onchanged",this.div_work_tabControl_onchanged,this);
            this.ds_EquipmentsRun.addEventHandler("oncolumnchanged",this.ds_EquipmentsRun_oncolumnchanged,this);
            this.ds_EquipmentsChange.addEventHandler("oncolumnchanged",this.ds_EquipmentsChange_oncolumnchanged,this);
            this.ds_DurableChange.addEventHandler("oncolumnchanged",this.ds_DurableChange_oncolumnchanged,this);
            this.ds_DurableChange.addEventHandler("cancolumnchange",this.ds_DurableChange_cancolumnchange,this);
            this.ds_WorkingEquipment.addEventHandler("onrowposchanged",this.ds_WorkingEquipment_onrowposchanged,this);
            this.ds_DurableRun2.addEventHandler("oncolumnchanged",this.ds_DurableRun2_oncolumnchanged,this);
            this.ds_DurableChange2.addEventHandler("cancolumnchange",this.ds_DurableChange2_cancolumnchange,this);
            this.ds_DurableChange2.addEventHandler("oncolumnchanged",this.ds_DurableChange2_oncolumnchanged,this);
        };
        this.loadIncludeScript("PCM02200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
