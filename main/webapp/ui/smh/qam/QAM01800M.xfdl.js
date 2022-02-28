(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01800M");
            this.set_titletext(" 불량품 원인판정");
            this.set_tooltiptext("MENU_PG-QC-0750");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRMATION\" type=\"STRING\" size=\"256\"/><Column id=\"DEADLINE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inboundDefectLotList", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISIFSUCCESS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectLotList", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"JOINCODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OUTBOUNDQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LEFTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISUNKNOWN\" type=\"STRING\" size=\"256\"/><Column id=\"DEFINETIME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFINEUSER\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSCODE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIM\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRMSITE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"OCCURREDSTEP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveDefectLotList", this);
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OUTBOUNDQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LEFTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISUNKNOWN\" type=\"STRING\" size=\"256\"/><Column id=\"DEFINETIME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFINEUSER\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSCODE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIM\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRMSITE\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRMFLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveInboundDefectLotList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISIFSUCCESS\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDFLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("sta_title","30","16","122","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            obj.set_tooltiptext("MENU_PG-QC-0750");
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

            obj = new Button("btn_saveCancelHold",null,"16","68","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_text("보류취소");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("Toolbar_CancelHold");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_saveHold",null,"16","44","24","btn_saveCancelHold:0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_text("보류");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("Toolbar_Hold");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_inboundDefectLotList","31.32%","0","120","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title0","0","0",null,"34","sta_cnt_ds_inboundDefectLotList:41.67%",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("불량품 원인판정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DEFECTREASONJUDGMENT");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_inboundDefectLotList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_info","0","50.14%",null,"32","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label00","0","5","100","20",null,null,null,null,null,null,this.div_work.form.div_info.form);
            obj.set_taborder("1");
            obj.set_text("불량 Lot No");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("DEFECTLOTID");
            this.div_work.form.div_info.addChild(obj.name, obj);

            obj = new Static("sta_defectQty","31.90%","5","10.36%","20",null,null,null,null,null,null,this.div_work.form.div_info.form);
            obj.set_taborder("2");
            obj.set_text("불량수량");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("DEFECTQTY");
            this.div_work.form.div_info.addChild(obj.name, obj);

            obj = new Static("sta_unit","52.09%","5","10.36%","20",null,null,null,null,null,null,this.div_work.form.div_info.form);
            obj.set_taborder("3");
            obj.set_text("UOM");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("UOM");
            this.div_work.form.div_info.addChild(obj.name, obj);

            obj = new Edit("edt_unit","sta_unit:5","5","9.41%","20",null,null,null,null,null,null,this.div_work.form.div_info.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("PCS");
            this.div_work.form.div_info.addChild(obj.name, obj);

            obj = new Edit("edt_subDefectLotid","105","5",null,"20","sta_defectQty:0",null,null,null,null,null,this.div_work.form.div_info.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_text("200908F004-1-FG00-001-A01");
            this.div_work.form.div_info.addChild(obj.name, obj);

            obj = new MaskEdit("msk_defectQty","sta_defectQty:5","5",null,"20","sta_unit:0",null,null,null,null,null,this.div_work.form.div_info.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_format("#,###,###");
            this.div_work.form.div_info.addChild(obj.name, obj);

            obj = new Grid("grd_inboundDefectLotList","0","34",null,null,"0","div_info:34",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_inboundDefectLotList");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"110\"/><Column size=\"220\"/><Column size=\"60\"/><Column size=\"210\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"140\"/><Column size=\"210\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" colspan=\"17\" text=\"불량정보\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECTINFO\"/><Cell row=\"1\" col=\"2\" text=\"상태\" tooltiptext=\"STATUS\"/><Cell row=\"1\" col=\"3\" text=\"인수일시\" tooltiptext=\"RECEIVETIME\"/><Cell row=\"1\" col=\"4\" text=\"처리일시\" tooltiptext=\"PROCESSDATE\"/><Cell row=\"1\" col=\"5\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell row=\"1\" col=\"6\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell row=\"1\" col=\"7\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell row=\"1\" col=\"8\" text=\"Lot No.\" tooltiptext=\"Lot No\"/><Cell row=\"1\" col=\"9\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"10\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"11\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"12\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"13\" text=\"불량 Lot No\" tooltiptext=\"DEFECTLOTID\"/><Cell row=\"1\" col=\"14\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell row=\"1\" col=\"15\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell row=\"1\" col=\"16\" text=\"인수자\" tooltiptext=\"RECEIVEUSER\"/><Cell row=\"1\" col=\"17\" text=\"양산구분\" tooltiptext=\"LOTTYPE\"/><Cell row=\"1\" col=\"18\" text=\"UOM\" tooltiptext=\"UOM\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUS&quot;)==&quot;HoldComplete&quot; ? &apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:STATUSNAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUS&quot;)==&quot;HoldComplete&quot; ? &apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:RECEIVETIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUS&quot;)==&quot;HoldComplete&quot; ? &apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:PROCESSDATE\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUS&quot;)==&quot;HoldComplete&quot; ? &apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFID\" textAlign=\"center\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUS&quot;)==&quot;HoldComplete&quot; ? &apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUS&quot;)==&quot;HoldComplete&quot; ? &apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFVERSION\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUS&quot;)==&quot;HoldComplete&quot; ? &apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"8\" text=\"bind:PARENTLOTID\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUS&quot;)==&quot;HoldComplete&quot; ? &apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"9\" text=\"bind:DEFECTQTY\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUS&quot;)==&quot;HoldComplete&quot; ? &apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"10\" text=\"bind:DEFECTPNLQTY\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUS&quot;)==&quot;HoldComplete&quot; ? &apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"11\" text=\"bind:USERSEQUENCE\" textAlign=\"right\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUS&quot;)==&quot;HoldComplete&quot; ? &apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"12\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUS&quot;)==&quot;HoldComplete&quot; ? &apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"13\" text=\"bind:LOTID\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUS&quot;)==&quot;HoldComplete&quot; ? &apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"14\" text=\"bind:AREANAME\" textAlign=\"left\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUS&quot;)==&quot;HoldComplete&quot; ? &apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"15\" text=\"bind:PLANTID\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUS&quot;)==&quot;HoldComplete&quot; ? &apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"16\" text=\"bind:RECEIVEUSER\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUS&quot;)==&quot;HoldComplete&quot; ? &apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"17\" text=\"bind:LOTTYPE\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUS&quot;)==&quot;HoldComplete&quot; ? &apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"18\" text=\"bind:UNIT\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUS&quot;)==&quot;HoldComplete&quot; ? &apos;cell_red&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title0_00","0","grd_inboundDefectLotList:0",null,"34","708",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("불량품 원인확정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DEFECTREASONCONFIRM");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_defectLotList","31.32%","div_info:0","120","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title0_00_00","0","div_info:0",null,"34","sta_cnt_ds_defectLotList:41.67%",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("불량 Lot별 불량코드");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DEFECTCODEBYDEFECTLOT");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_defectLotList","0","div_info:34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectLotList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"220\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" colspan=\"3\" text=\"불량정보\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECTINFO\"/><Cell col=\"5\" colspan=\"6\" text=\"원인공정\" cssclass=\"cell_headMaster\" tooltiptext=\"CAUSEPROCESS\"/><Cell col=\"11\" colspan=\"8\" text=\"불량수량\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECTCOUNT\"/><Cell row=\"1\" col=\"2\" text=\"상태\" tooltiptext=\"STATUS\"/><Cell row=\"1\" col=\"3\" text=\"불량 코드\" tooltiptext=\"DEFECTCODENAME\"/><Cell row=\"1\" col=\"4\" text=\"불량코드 명\" tooltiptext=\"DEFECTCODENAME\"/><Cell row=\"1\" col=\"5\" text=\"원인품목\" tooltiptext=\"REASONPRODUCT\"/><Cell row=\"1\" col=\"6\" text=\"Rev\" tooltiptext=\"Rev\"/><Cell row=\"1\" col=\"7\" text=\"원인 Lot ID\"/><Cell row=\"1\" col=\"8\" text=\"원인공정\" tooltiptext=\"REASONSEGMENT\"/><Cell row=\"1\" col=\"9\" text=\"원인작업장\" tooltiptext=\"REASONAREA\"/><Cell row=\"1\" col=\"10\" text=\"원인 Site\" tooltiptext=\"REASONPLANT\"/><Cell row=\"1\" col=\"11\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"12\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"13\" text=\"UOM\" tooltiptext=\"UOM\"/><Cell row=\"1\" col=\"14\" text=\"원인불명\" tooltiptext=\"ISUNKNOWN\"/><Cell row=\"1\" col=\"15\" text=\"확정일시\" tooltiptext=\"DEFINETIME\"/><Cell row=\"1\" col=\"16\" text=\"확정자\" tooltiptext=\"DEFINEUSER\"/><Cell row=\"1\" col=\"17\" text=\"반출수량\" tooltiptext=\"OUTBOUNDQTY\"/><Cell row=\"1\" col=\"18\" text=\"Claim 포함여부\" tooltiptext=\"ISCLAIM\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUSCODE&quot;)==&quot;Confirm&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUSCODE&quot;)==&quot;Confirm&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:STATUS\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUSCODE&quot;)==&quot;Confirm&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:JOINCODE\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUSCODE&quot;)==&quot;Confirm&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:JOINNAME\" textAlign=\"left\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUSCODE&quot;)==&quot;Confirm&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:REASONCONSUMABLEDEFNAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUSCODE&quot;)==&quot;Confirm&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"bind:REASONCONSUMABLEDEFVERSION\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUSCODE&quot;)==&quot;Confirm&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"7\" text=\"bind:REASONCONSUMABLELOTID\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUSCODE&quot;)==&quot;Confirm&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"8\" text=\"bind:REASONSEGMENTNAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUSCODE&quot;)==&quot;Confirm&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"9\" text=\"bind:REASONAREANAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUSCODE&quot;)==&quot;Confirm&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"10\" text=\"bind:REASONPLANTID\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUSCODE&quot;)==&quot;Confirm&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"11\" text=\"bind:DEFECTQTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"###,##0\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUSCODE&quot;)==&quot;Confirm&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"12\" text=\"bind:DEFECTPNLQTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"###,##0\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUSCODE&quot;)==&quot;Confirm&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"13\" text=\"bind:UNIT\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUSCODE&quot;)==&quot;Confirm&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"14\" text=\"bind:ISUNKNOWN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUSCODE&quot;)==&quot;Confirm&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\" checkboxfalsevalue=\"N\" checkboxtruevalue=\"Y\"/><Cell col=\"15\" text=\"bind:DEFINETIME\" color=\"#444444\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUSCODE&quot;)==&quot;Confirm&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\" displaytype=\"date\"/><Cell col=\"16\" text=\"bind:DEFINEUSER\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUSCODE&quot;)==&quot;Confirm&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"17\" text=\"bind:OUTBOUNDQTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###,##0\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUSCODE&quot;)==&quot;Confirm&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"18\" text=\"bind:ISCLAIM\" cssclass=\"expr:dataset.getColumn(currow, &quot;STATUSCODE&quot;)==&quot;Confirm&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_saveCancelConfirm",null,"div_info:6","70","24","29",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("확정취소");
            obj.set_tooltiptext("DEFINITECANCELLATION");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_saveConfirm",null,"div_info:6","70","24","btn_saveCancelConfirm:3",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("불량확정");
            obj.set_tooltiptext("DEFECTCONFIRMATION");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_allSelect",null,"div_info:6","122","24","btn_saveConfirm:3",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("원인불명 전체선택");
            obj.set_tooltiptext("REASONUNKNOWNALLSELECT");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_defectLotList",null,"div_info:6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Combo("cbo_period","10","60","94","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("2");
            obj.set_innerdataset("gds_period");
            obj.set_codecolumn("code");
            obj.set_datacolumn("desc");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_areaName","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("15");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_defectlotId","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("8");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_lotType","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("10");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("14");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("SITE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","300","102","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","300","146","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("16");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"280","45","20","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("17");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","306","10","27",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("18");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_createDate","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("19");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("SEARCHPERIOD");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_area","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("4");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_plantId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("PLANTID");
            obj.set_innerdataset("ds_userAuthorityPlantList");
            obj.set_datacolumn("PLANTNAME");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_productionDefinition","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("20");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONDEFINITION");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_defectlotId","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("21");
            obj.set_text("불량 Lot No");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DEFECTLOTID");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_lotId","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("22");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_processsegmentType","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("11");
            obj.set_codecolumn("C,ProcessSegmentType,ALL,Y,Y");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_lotproducTtype","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("23");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTPRODUCTTYPE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_processsegmentType","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("24");
            obj.set_text("공정구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSSEGMENTTYPE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_parentLotId","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("9");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productDef","108","110",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("6");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_productDef",null,"110","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productDef_id","126","380",null,"20","19",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("25");
            obj.set_visible("false");
            obj.set_tooltiptext("조회조건품목ID");
            obj.set_background("thistle");
            obj.set_enable("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","126","355",null,"20","19",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("26");
            obj.set_visible("false");
            obj.set_tooltiptext("조회조건작업장ID");
            obj.set_background("thistle");
            obj.set_enable("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Div("div_dateFrom","108","35",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("1");
            obj.set_url("common::com_calendar.xfdl");
            obj.set_text("");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Div("div_dateTo","108","60",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("3");
            obj.set_url("common::com_calendar.xfdl");
            obj.set_text("");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label08","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("26");
            obj.set_text("확정여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISCONFIRMATION");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_confirm","108","235","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,ProgressStatus,ALL,Y,Y");
            obj.set_text("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label09","0","260","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("27");
            obj.set_text("마감여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISCLOSE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_deadLine","108","260","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("28");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_hidden2","25","376",null,"20","edt_productDef_id:10",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("31");
            obj.set_text("품목Revision");
            obj.set_visible("false");
            obj.set_textAlign("right");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_hidden1","25","356",null,"20","edt_area_id:10",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("32");
            obj.set_text("작업장ID");
            obj.set_visible("false");
            obj.set_textAlign("right");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_calendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("QAM01800M.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM01800M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 불량품 원인판정(품질관리 - 불량품 관리)
         * 파일명         : QAM018000M.xfdl
         * 작성자         : yanghee.kim
         * 작성일         : 2021.04.12
         *
         * 설  명         :
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.12   yanghee.kim   최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;	//품질관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.lang;
        this.userId;
        this.plantId;
        this.enterpriseId;
        this.g_lotId;        //보류, 보류취소, 불량확정, 확정취소 후 위치
        this.g_parentLotId;  //보류, 보류취소, 불량확정, 확정취소 후 위치
        this.g_receiveTime;  //보류, 보류취소 후 위치
        this.g_txnHistKey;   //보류, 보류취소, 불량확정, 확정취소 후 위치
        this.g_userSequence; //불량확정, 확정취소 후 위치
        this.g_position;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
            this.nfn_formInit(obj);
        	this.lang = this.gf_getLanguageType();
        	this.userId = this.gf_getUserId();
        	this.plantId = this.gf_getSiteType();
        	this.enterpriseId = this.gf_getEnterpriseId();
        	this.qamfn_searchUserPlant("ds_userAuthorityPlantList", this.tab_search.Tab1.form.cbo_plantId); //접속사용자의 PLANT 조회
        	this.tab_search.Tab1.form.div_dateFrom.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_preiodChang, this);
        	this.tab_search.Tab1.form.div_dateTo.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_preiodChang, this);

        	this.fn_formInit();    //최초 호출되는 초기화 함수
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
            this.ds_inboundDefectLotList.clearData();
        	this.ds_defectLotList.clearData();
        	this.div_work.form.div_info.form.edt_subDefectLotid.set_value("");
        	this.div_work.form.div_info.form.edt_unit.set_value("");
        	this.div_work.form.div_info.form.msk_defectQty.set_value("");

            this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow, "ENTERPRISEID",        this.enterpriseId);
        	this.ds_search.setColumn(nRow, "LANGUAGETYPE",        this.lang);
        	this.ds_search.setColumn(nRow, "USERID",              this.userId);
            this.ds_search.setColumn(nRow, "PLANTID",             this.tab_search.Tab1.form.cbo_plantId.value);
        	this.ds_search.setColumn(nRow, "PERIODFR",            this.tab_search.Tab1.form.div_dateFrom.form.calStart.value);
        	this.ds_search.setColumn(nRow, "PERIODTO",            this.tab_search.Tab1.form.div_dateTo.form.calStart.value);
        	this.ds_search.setColumn(nRow, "AREAID",              this.tab_search.Tab1.form.edt_area_id.value);
        	this.ds_search.setColumn(nRow, "PRODUCTDEFID",        this.tab_search.Tab1.form.edt_productDef_id.value);
        	this.ds_search.setColumn(nRow, "LOTID",               this.tab_search.Tab1.form.edt_defectlotId.value);
        	this.ds_search.setColumn(nRow, "PARENTLOTID",         this.tab_search.Tab1.form.edt_parentLotId.value);
        	this.ds_search.setColumn(nRow, "LOTTYPE",             this.tab_search.Tab1.form.cbo_lotType.value);
        	this.ds_search.setColumn(nRow, "PROCESSSEGMENTTYPE",  this.tab_search.Tab1.form.cbo_processsegmentType.value);
            this.ds_search.setColumn(nRow, "CONFIRMATION",        this.tab_search.Tab1.form.cbo_confirm.value);
        	this.ds_search.setColumn(nRow, "DEADLINE",            this.tab_search.Tab1.form.cbo_deadLine.value);

            var sSvcID        = "selectGetInboundDefectLotList";
            var sController   = "/qam01800/selectGetInboundDefectLotList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_inboundDefectLotList=output";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 보류
         */
        this.fn_hold = function()
        {
        	var selCount = this.ds_inboundDefectLotList.getCaseCount("CHK == '1'");

        	if (selCount == 0)
        	{
        		this.gfn_Message("GridNoChecked", null, "warning", "ok");
        		return;
        	}

        	// Interface 진행중인 행이 포함되어 있다면 Exception
        	var statusCount = this.ds_inboundDefectLotList.getCaseCount("CHK == '1' && ISIFSUCCESS == 'Send' ");
        	if (statusCount > 0)
        	{
        		this.gfn_Message("IsInterfaceStatusProcess", null, "warning", "ok"); // 인터페이스 진행중인 행이 존재합니다.
        		return;
        	}

        	// 마감된 행이 포함되어 있다면 Exception
        	var statusCount = this.ds_inboundDefectLotList.getCaseCount("CHK == '1' && STATUS == 'DeadlineComplete' ");
        	if (statusCount > 0)
        	{
        		this.gfn_Message("AlreadyDeadlineComplete", null, "warning", "ok"); // 마감된 행이 존재합니다.
        		return;
        	}

        	// 보류된 행이 포함되어 있다면 Exception
        	var statusCount = this.ds_inboundDefectLotList.getCaseCount("CHK == '1' && STATUS == 'HoldComplete' ");
        	if (statusCount > 0)
        	{
        		this.gfn_Message("AlreadyHoldComplete", null, "warning", "ok"); // 보류된 행이 존재합니다.
        		return;
        	}

        	var bOK = this.gfn_Message("IsHold", "", "conf", "yesno");//보류 하시겠습니까?
        	if (bOK == false) return;

        	this.g_lotId        = this.ds_inboundDefectLotList.getColumn(this.ds_inboundDefectLotList.rowposition, "LOTID");
        	this.g_parentLotId  = this.ds_inboundDefectLotList.getColumn(this.ds_inboundDefectLotList.rowposition, "PARENTLOTID");
        	this.g_userSequence = this.ds_inboundDefectLotList.getColumn(this.ds_inboundDefectLotList.rowposition, "USERSEQUENCE");
        	this.g_receiveTime  = this.ds_inboundDefectLotList.getColumn(this.ds_inboundDefectLotList.rowposition, "RECEIVETIME");

        	this.ds_saveInboundDefectLotList.clearData();

        	for(var i = 0 ; i < this.ds_inboundDefectLotList.getRowCount(); i++)
        	{
        		if (this.ds_inboundDefectLotList.getColumn(i, "CHK") == "1")
        		{
        			var nRow = this.ds_saveInboundDefectLotList.addRow();
        			this.ds_saveInboundDefectLotList.copyRow(nRow, this.ds_inboundDefectLotList, i);
        			this.ds_saveInboundDefectLotList.setColumn(nRow, "HOLDFLAG", "Hold");
        		}//if
        	}//for

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID        = "saveLotDefectHold";
        	var sController   = "/qam01800/saveLotDefectHold.do";
        	var sInDatasets   = "INPUT=ds_saveInboundDefectLotList:A";
        	var sOutDatasets  = "";
        	var sArgs         = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 보류취소
         */
        this.fn_cancleHold = function(obj,e)
        {
        	var selCount = this.ds_inboundDefectLotList.getCaseCount("CHK == '1'");

        	if (selCount == 0)
        	{
        		this.gfn_Message("GridNoChecked", null, "warning", "ok");
        		return;
        	}

        	// 마감된 행이 포함되어 있다면 Exception
        	var statusCount = this.ds_inboundDefectLotList.getCaseCount("CHK == '1' && STATUS == 'DeadlineComplete' ");
        	if (statusCount > 0)
        	{
        		this.gfn_Message("AlreadyDeadlineComplete", null, "warning", "ok"); // 마감된 행이 존재합니다.
        		return;
        	}

        	// 보류처리상태가 아닌행이 포함되어있다면
        	var statusCount = this.ds_inboundDefectLotList.getCaseCount("CHK == '1' && STATUS != 'HoldComplete' ");
        	if (statusCount > 0)
        	{
        		this.gfn_Message("NotAlreadyHoldComplete", null, "warning", "ok"); // 보류처리상태가 아닌 행이 존재합니다.
        		return;
        	}
        	var bOK = this.gfn_Message("IsCancelHold", "", "conf", "yesno");//보류취소 하시겠습니까?
        	if (bOK == false) return;

        	this.g_lotId        = this.ds_inboundDefectLotList.getColumn(this.ds_inboundDefectLotList.rowposition, "LOTID");
        	this.g_parentLotId  = this.ds_inboundDefectLotList.getColumn(this.ds_inboundDefectLotList.rowposition, "PARENTLOTID");
        	this.g_userSequence = this.ds_inboundDefectLotList.getColumn(this.ds_inboundDefectLotList.rowposition, "USERSEQUENCE");
            this.g_receiveTime  = this.ds_inboundDefectLotList.getColumn(this.ds_inboundDefectLotList.rowposition, "RECEIVETIME");

        	this.ds_saveInboundDefectLotList.clearData();

        	for(var i = 0 ; i < this.ds_inboundDefectLotList.getRowCount(); i++)
        	{
        		if (this.ds_inboundDefectLotList.getColumn(i, "CHK") == "1")
        		{
        			var nRow = this.ds_saveInboundDefectLotList.addRow();
        			this.ds_saveInboundDefectLotList.copyRow(nRow, this.ds_inboundDefectLotList, i);
        			this.ds_saveInboundDefectLotList.setColumn(nRow, "HOLDFLAG", "CancelHold");
        		}//if
        	}//for

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID        = "saveLotDefectHold";
        	var sController   = "/qam01800/saveLotDefectHold.do";
        	var sInDatasets   = "INPUT=ds_saveInboundDefectLotList:A";
        	var sOutDatasets  = "";
        	var sArgs         = "";
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
            }
            else
            {
        	    if (trId == "selectEcmLookupValuesVList2ds_CProgressStatusALL")
        		{
        			/*확정여부는 인수,확정,보류만 보이도록 설정*/
        			this.ds_CProgressStatusALL.filter("ATTRIBUTE1 == '전체'||ATTRIBUTE1 == 'QAM01800' ");
        		}
        		else if (trId == "selectGetInboundDefectLotList")
                {
        			if (this.ds_inboundDefectLotList.rowcount < 1)
        			{
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}
        			else
        			{
        				var expr = "LOTID == '"+ this.g_lotId +"' && PARENTLOTID == '" + this.g_parentLotId +"' && USERSEQUENCE == '" + this.g_userSequence + "'  && RECEIVETIME == '" + this.g_receiveTime + "'";
        				var nRow = this.ds_inboundDefectLotList.findRowExpr(expr);
        				this.g_lotId = null;
        				this.g_parentLotId = null;
        				this.g_userSequence = null;
        				this.g_receiveTime = null;

        				if (nRow == -1)
        				{
        					nRow = 0;
        				}

        				if (nRow == 0)
        				{
        					this.fn_searchDefectLotList(this.ds_inboundDefectLotList, nRow);
        				}
        				else
        				{
        					this.ds_inboundDefectLotList.set_rowposition(nRow);
        				}

        				this.fn_setLotInfo(this.ds_inboundDefectLotList, nRow);
        			}
        		}
        		else if (trId == "selectGetDefectLotDefectCodeList")
                {
        			if (this.ds_defectLotList.rowcount > 0)
        			{
        				//var expr = "LOTID == '"+ this.g_lotId +"' && PARENTLOTID == '" + this.g_parentLotId +"' && USERSEQUENCE == '" + this.g_userSequence + "' && TXNHISTKEY == '" + this.g_txnHistKey + "'";
        				//var nRow = this.ds_defectLotList.findRowExpr(expr);
        				//this.g_lotId = null;
        				//this.g_parentLotId = null;
        				//this.g_userSequence = null;
        				//this.g_txnHistKey = null;
        				//this.g_receiveTime = null;
        				if (this.nfn_isNull(this.g_position))
        				{
        					this.ds_defectLotList.set_rowposition(this.g_position);
        					this.g_position = null;
        				}
        			}
        		}
                else if (trId == "saveLotDefectConfirm")
                {
                    this.fn_controlHeadCheck();
        			this.gfn_Message("Confirmation", null, "info", "ok");
        			//모든건을 불량확정할 경우 상태가 CauseComplete가 되어 조회대상이 아니므로 재조회
                    this.fn_search();
                }
        		else if (trId == "saveLotDefectCancleConfirm")
                {
                    this.fn_controlHeadCheck();
        			this.gfn_Message("NoConfirmation", null, "info", "ok");
        			//모든건을 불량확정할 경우 상태가 CauseComplete가 되어 조회대상이 아니므로 재조회
                    this.fn_search();
                }
                else if (trId == "saveLotDefectHold")
                {
                    this.fn_controlHeadCheck();
        			this.gfn_Message("SuccessSave", null, "info", "ok");
                    this.fn_search();
                }
            }
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
         this.fn_openPop = function(svcId, popId)
        {
            // gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
            //-----------------
            // arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅, C::사용자 멀티 선택
            // popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
            // popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
            // rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
            // paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
            // paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
            // searchStr   : 팝업 조회조건 콤보값 = 조회 값

            var popupId = svcId;
            var oArg = {};
            var opts = "width=650,height=500";

            oArg.arg_type = "BA";
            oArg.arg_popupCd = popId;
            oArg.arg_popupNm = "";
            oArg.arg_paramCols = "";
            oArg.arg_paramValues = "";
            oArg.arg_searchStr = "";

            if(popupId == "SRCH_AREA228")    /*조회조건-작업장*/
            {
                opts = "width=450,height=500";
        		oArg.arg_paramCols   = "PLANTID|USER_ID|LANGUAGETYPE";
                oArg.arg_paramValues = this.plantId +'|'+ this.userId + '|' + this.lang ;
                oArg.arg_rtnCols     = "AREAID|AREANAME";
        		oArg.arg_searchStr   = "AREAIDNAME=" + this.tab_search.Tab1.form.edt_area.value;
            }
        	else if(popupId == "SRCH_PRODUCTDEF218")    /*조회조건-품목*/
            {
        		oArg.arg_paramCols   = "PLANTID";
                oArg.arg_paramValues = this.plantId;
                oArg.arg_rtnCols     = "PRODUCTDEFIDVERSION|PRODUCTDEFNAME";
        		oArg.arg_searchStr   = "PRODUCTDEFIDNAME=" + this.tab_search.Tab1.form.edt_productDef.value;
            }

            this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	if (sPopupId == "SEARCH_DEFECTCODETAKEOUT") //불량반출팝업
            {
        	    this.fn_searchDefectLotList(this.ds_inboundDefectLotList, this.ds_inboundDefectLotList.rowposition);
        		return;
        	}
        	else if (sPopupId == "SEARCH_DEFECTOUTBOUND") //불량내역조정
        	{
        	    this.fn_searchDefectLotList(this.ds_inboundDefectLotList, this.ds_inboundDefectLotList.rowposition);
        		return;
            }

            var rtn = this.fv_rtnValue;
            if(this.nfn_isNull(rtn)) return;

            if (sPopupId == "SRCH_AREA228")    /*조회조건-작업장*/
            {
                this.tab_search.Tab1.form.edt_area_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_area.set_value(rtn[1]);
            }
        	else if (sPopupId == "SRCH_PRODUCTDEF218")    /*조회조건-품목*/
            {
                this.tab_search.Tab1.form.edt_productDef_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_productDef.set_value(rtn[1]);
            }
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
        	this.fn_setSearchDate("today"); //조회기간 셋팅
        	this.tab_search.Tab1.form.cbo_plantId.set_value(this.plantId);
        	this.tab_search.Tab1.form.cbo_period.set_value("today"); //금일
        };

        /*
         * 기능 : 조회조건 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        };


        /*
         * 기능 : 전체체크 초기화
         */
        this.fn_controlHeadCheck = function ()
        {
        	this.div_work.form.grd_defectLotList.setCellProperty("head", 1, "text", '0');
        	this.div_work.form.grd_inboundDefectLotList.setCellProperty("head", 1, "text", '0');
        };

        /*
         * 이벤트 : 조회조건- 조회기간 직접 변경시
         */
        this.fn_preiodChang = function(obj,e)
        {
        	if (!this.nfn_isNull(this.tab_search.Tab1.form.cbo_period.value))
        	{
        		this.tab_search.Tab1.form.cbo_period.set_text("사용자정의");
        	}
        };

        /*
         * 기능 : 조회기간의 기간타입이 변경될 경우 날짜 셋팅
         */
        this.fn_setSearchDate = function (pChangValue)
        {
        	if (this.nfn_isNull(pChangValue)) return false;

        	var sDate = this.nfn_getCurrentSystemTime(0, 0, pChangValue);
        	var arrDate = sDate.split(",");
        	var sDateFrom = arrDate[1];
        	var sDateTo = arrDate[2];
        	var sTime = "0830";

        	this.tab_search.Tab1.form.div_dateFrom.form.calStart.set_value(sDateFrom+sTime);
        	this.tab_search.Tab1.form.div_dateTo.form.calStart.set_value(sDateTo+sTime);
        };

        /*
         * 기능 : 불량 Lot별 불량코드 조회
         */
        this.fn_searchDefectLotList= function(pDataset, pRow)
        {
        	this.ds_defectLotList.clearData();
            var sSvcID        = "selectGetDefectLotDefectCodeList";
            var sController   = "/qam01800/selectGetDefectLotDefectCodeList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_defectLotList=output";
            var sArgs         = "";
        	    sArgs        += this.gfn_setParam("LANGUAGETYPE",  this.lang);
        		sArgs        += this.gfn_setParam("LOTID",         pDataset.getColumn(pRow, "LOTID"));
                sArgs        += this.gfn_setParam("PARENTLOTID",   pDataset.getColumn(pRow, "PARENTLOTID"));
        		sArgs        += this.gfn_setParam("USERSEQUENCE",  pDataset.getColumn(pRow, "USERSEQUENCE"));
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 이벤트 : 조회조건 아이콘 버튼 클릭시
         */
        this.fn_popup_click = function(obj,e)
        {
        	if (obj.name == "btn_area")
        	{
        		this.fn_openPop("SRCH_AREA228","P00228"); //작업장
        	}
        	else if (obj.name == "btn_productDef")
        	{
        		this.fn_openPop("SRCH_PRODUCTDEF218","P00218"); //품목
        	}
        };

        /*
         * 이벤트 : 조회조건 이름 삭제시 id 초기화
         */
        this.fn_popup_canchange = function(obj,e)
        {
        	if (obj.name == "edt_area")
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_area_id.set_value("");
        	}
        	else if (obj.name == "edt_productDef")
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_productDef_id.set_value("");
        	}
        };

        /*
         * 이벤트 : 조회조건- 조회기간 타입 변경시
         */
        this.tab_search_Tab1_cbo_period_canitemchange = function(obj,e)
        {
        	this.fn_setSearchDate(e.postvalue);
        };

        /*
         * 이벤트 : LOT별 불량 팝업 호출
         */
        this.fn_gridOncelldblclick = function(obj,e)
        {
        	var objDataset = obj.getBindDataset();

        	var status = objDataset.getColumn(e.row, "STATUSCODE");
        	if (status == "Confirm" || status == "DeadlineComplete")
        	{
        		this.gfn_Message("NotDefectMakeupAndOutbound", null, "warning", "ok"); //// 확정이나 마감상태이므로 불량조정 및 반출할 수 없습니다.
        		return;
        	}

            var popupId;
           	var oArg = {};

        	// 반출수량 Column을 더블클릭했다면 불량반출 팝업 호출
        	if (e.cell == obj.getBindCellIndex("body", "OUTBOUNDQTY"))
        	{
                popupId = "SEARCH_DEFECTCODETAKEOUT";
        		this.qamfn_getArrayRow(objDataset);
        		this.gfn_openPopup(popupId,"qam::QAM01800P2.xfdl",oArg,"width=719,height=470");
        	}
        	else
        	{
        	    if (e.cell != obj.getBindCellIndex("body", "ISUNKNOWN"))
        		{
        			popupId = "SEARCH_DEFECTOUTBOUND";
        			this.qamfn_getArrayRow(objDataset);
        			this.gfn_openPopup(popupId,"qam::QAM01800P1.xfdl",oArg,"width=1110,height=470");
        		}
        	}
        };

        /*
         * 이벤트 : 불량품 원인판정 row 선택시
         */
        this.ds_inboundDefectLotList_canrowposchange = function(obj,e)
        {
            var bOk = true;
            if (this.gfn_dsIsUpdated(this.ds_defectLotList))
        	{
                bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
            }

            if (bOk)
        	{
                this.fn_setLotInfo(obj, e.newrow);
        		this.fn_searchDefectLotList(obj, e.newrow);
            }
        };

        /*
         * 이벤트 : 불량품 원인판정 row 선택시 불량품 원인확정 정보 셋팅
         */
        this.fn_setLotInfo = function (pDataset, pRow)
        {
        	var nRow = pDataset.rowposition;
        	this.div_work.form.div_info.form.edt_subDefectLotid.set_value(pDataset.getColumn(pRow, "LOTID"));
        	this.div_work.form.div_info.form.msk_defectQty.set_value(pDataset.getColumn(pRow, "DEFECTQTY"));
        	this.div_work.form.div_info.form.edt_unit.set_value(pDataset.getColumn(pRow, "UNIT"));
        };

        /*
         * 이벤트 : 원인불명 전체 선택 버튼 클릭시
         */
        this.fn_allSelect = function(obj,e)
        {
        	if (this.ds_defectLotList.getRowCount() == 0) return;

        	var aa= this.ds_defectLotList.getColumn(0, "ISUNKNOWN");
        	var count = this.ds_defectLotList.getCaseCount("ISUNKNOWN == 'N'");
        	if (count > 0)
        	{
        		for (var i=0; i<this.ds_defectLotList.getRowCount(); i++)
        		{
        			// 한개라도 false면 전체를 true로 변경
        			this.ds_defectLotList.setColumn(i, "ISUNKNOWN", 'Y');
        		}
        	}
        	else
        	{
        		for (var i=0; i<this.ds_defectLotList.getRowCount(); i++)
        		{
        			// 전체가 true면 전체를 false로 변경
        			this.ds_defectLotList.setColumn(i, "ISUNKNOWN", 'N');
        		}
        	}
        };

        /*
         * 이벤트 : 불량확정 버튼 클릭시
         */
        this.fn_confirm = function(obj,e)
        {
        	var selCount = this.ds_defectLotList.getCaseCount("CHK == '1'");

        	if (selCount == 0)
        	{
        		this.gfn_Message("GridNoChecked", null, "warning", "ok");
        		return;
        	}

        	// 확정이나 마감된 행이 포함되어 있다면 Exception
        	var closeCount = this.ds_defectLotList.getCaseCount("CHK == '1' && (STATUSCODE == 'Confirm' || STATUSCODE == 'DeadlineComplete')");
        	if (closeCount  > 0)
        	{
        		this.gfn_Message("AlreadyConfirmOrDeadlineComplete", null, "warning", "ok");
        		return;
        	}

            // 부모행이 보류처리상태라면 Exception
        	var holdCount = this.ds_defectLotList.getCaseCount("CHK == '1' && STATUS == 'HoldComplete'");
        	if (holdCount  > 0)
        	{
        		this.gfn_Message("HoldStateIsNotDefectConfirm", null, "warning", "ok"); // 보류처리상태이므로 불량확정이 불가능합니다.
        		return;
        	}

        	var bOK = this.gfn_Message("IsConfirmation", null, "conf", "yesno");
        	if (bOK == false) return;

        	this.g_lotId        = this.ds_inboundDefectLotList.getColumn(this.ds_inboundDefectLotList.rowposition, "LOTID");
        	this.g_parentLotId  = this.ds_inboundDefectLotList.getColumn(this.ds_inboundDefectLotList.rowposition, "PARENTLOTID");
        	this.g_userSequence = this.ds_inboundDefectLotList.getColumn(this.ds_inboundDefectLotList.rowposition, "USERSEQUENCE");
        	this.g_receiveTime  = this.ds_inboundDefectLotList.getColumn(this.ds_inboundDefectLotList.rowposition, "RECEIVETIME");
        	this.g_position	    = this.ds_defectLotList.rowposition;

        	this.ds_saveDefectLotList.clearData();

        	for(var i = 0 ; i < this.ds_defectLotList.getRowCount(); i++)
        	{
        		if (this.ds_defectLotList.getColumn(i, "CHK") == "1")
        		{
        			var nRow = this.ds_saveDefectLotList.addRow();
        			this.ds_saveDefectLotList.copyRow(nRow, this.ds_defectLotList, i);
        			this.ds_saveDefectLotList.setColumn(nRow, "CONFIRMFLAG", "Confirm");
        			this.ds_saveDefectLotList.setColumn(nRow, "STATUS", "Confirm");
        			this.ds_saveDefectLotList.setColumn(nRow, "DEFINEUSER", this.userId);
        			this.ds_saveDefectLotList.setColumn(nRow, "DEFINETIME", this.nfn_getCurrentSystemTime(0));
        		}//if
        	}//for

            this.g_posDefect = this.ds_defectLotList.rowposition;

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID        = "saveLotDefectConfirm";
        	var sController   = "/qam01800/saveLotDefectConfirm.do";
        	var sInDatasets   = "INPUT=ds_saveDefectLotList:A";
        	var sOutDatasets  = "";
        	var sArgs         = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 이벤트 : 확정취소 버튼 클릭시
         */
        this.fn_cancleConfirm = function(obj,e)
        {
        	var selCount = this.ds_defectLotList.getCaseCount("CHK == '1'");
        	var parentRow = this.ds_inboundDefectLotList.rowposition;

        	if (selCount == 0)
        	{
        		this.gfn_Message("GridNoChecked", null, "warning", "ok");
        		return;
        	}

        	// 마감된 건이라면 Exception
        	if (this.ds_inboundDefectLotList.getColumn(parentRow, "STATUS") == "DeadlineComplete")
        	{
        	    this.gfn_Message("AlreadyDeadlineComplete", null, "warning", "ok");
        		return;
        	}

        	// 확정정보가 없는 건이 존재한다면 Exception
        	var exprStatus = "(STATUS == '' || STATUS == null || STATUS == undefined)";
        	var emptyCount = this.ds_defectLotList.getCaseCount("CHK == '1' && " + exprStatus );
        	if (emptyCount > 0)
        	{
        		this.gfn_Message("NotConfirmDataExist", null, "warning", "ok");
        		return;
        	}

            // Claim 마감된 건이 있다면 Exception
        	var claimCount = this.ds_defectLotList.getCaseCount("CHK == '1' && ISCLAIM == 'Y'");
        	if (claimCount > 0)
        	{
        		this.gfn_Message("ClaimCompleteExistenceRow", null, "warning", "ok");
        		return;
        	}

        	// I/F 성공여부가 Send 또는 Success라면 Exception
            if (this.ds_inboundDefectLotList.getColumn(parentRow, "ISIFSUCCESS") == "Send"
        	    ||this.ds_inboundDefectLotList.getColumn(parentRow, "ISIFSUCCESS") == "Success")
        	{
        	    this.gfn_Message("IFSuccessOrProgressRow", null, "warning", "ok");
        		return;
        	}

        	var bOK = this.gfn_Message("IsNoConfirmation", null, "conf", "yesno");
            if (bOK == false) return;

        	this.g_lotId        = this.ds_inboundDefectLotList.getColumn(this.ds_inboundDefectLotList.rowposition, "LOTID");
        	this.g_parentLotId  = this.ds_inboundDefectLotList.getColumn(this.ds_inboundDefectLotList.rowposition, "PARENTLOTID");
        	this.g_userSequence = this.ds_inboundDefectLotList.getColumn(this.ds_inboundDefectLotList.rowposition, "USERSEQUENCE");
        	this.g_receiveTime  = this.ds_inboundDefectLotList.getColumn(this.ds_inboundDefectLotList.rowposition, "RECEIVETIME");
        	this.g_position	    = this.ds_defectLotList.rowposition;

        	this.ds_saveDefectLotList.clearData();

        	for(var i = 0 ; i < this.ds_defectLotList.getRowCount(); i++)
        	{
        		if (this.ds_defectLotList.getColumn(i, "CHK") == "1")
        		{
        			var nRow = this.ds_saveDefectLotList.addRow();
        			this.ds_saveDefectLotList.copyRow(nRow, this.ds_defectLotList, i);
        			this.ds_saveDefectLotList.setColumn(nRow, "CONFIRMFLAG", "ConfirmCancel");
        			this.ds_saveDefectLotList.setColumn(nRow, "STATUS", "ConfirmCancel");
        			this.ds_saveDefectLotList.setColumn(nRow, "DEFINEUSER", this.userId);
        			this.ds_saveDefectLotList.setColumn(nRow, "DEFINETIME", this.nfn_getCurrentSystemTime(0));
        		}//if
        	}//for

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID        = "saveLotDefectCancleConfirm";
        	var sController   = "/qam01800/saveLotDefectConfirm.do";
        	var sInDatasets   = "INPUT=ds_saveDefectLotList:A";
        	var sOutDatasets  = "";
        	var sArgs         = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_saveCancelHold.addEventHandler("onclick",this.fn_cancleHold,this);
            this.div_header.form.btn_saveHold.addEventHandler("onclick",this.fn_hold,this);
            this.div_work.form.grd_defectLotList.addEventHandler("oncelldblclick",this.fn_gridOncelldblclick,this);
            this.div_work.form.btn_saveCancelConfirm.addEventHandler("onclick",this.fn_cancleConfirm,this);
            this.div_work.form.btn_saveConfirm.addEventHandler("onclick",this.fn_confirm,this);
            this.div_work.form.btn_allSelect.addEventHandler("onclick",this.fn_allSelect,this);
            this.tab_search.Tab1.form.cbo_period.addEventHandler("canitemchange",this.tab_search_Tab1_cbo_period_canitemchange,this);
            this.tab_search.Tab1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tab1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tab1.form.edt_area.addEventHandler("canchange",this.fn_popup_canchange,this);
            this.tab_search.Tab1.form.btn_area.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.edt_productDef.addEventHandler("canchange",this.fn_popup_canchange,this);
            this.tab_search.Tab1.form.btn_productDef.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.div_dateFrom.addEventHandler("onkeydown",this.fn_preiodChang,this);
            this.tab_search.Tab1.form.div_dateTo.addEventHandler("onkeydown",this.fn_preiodChang,this);
            this.ds_inboundDefectLotList.addEventHandler("canrowposchange",this.ds_inboundDefectLotList_canrowposchange,this);
        };
        this.loadIncludeScript("QAM01800M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
