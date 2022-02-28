(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01700M");
            this.set_titletext("불량품 인수등록");
            this.set_tooltiptext("MENU_PG-QC-0740");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectLotList", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"FACTORYID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ELAPSEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVETIME\" type=\"STRING\" size=\"256\"/><Column id=\"INBOUNDUSER\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISMODIFY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inboundDefectLotList", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVETIME\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEAREA\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEUSER\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"HANDLEAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"HANDLENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ISMODIFY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inbountDefectLotStateList", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTIDLIST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveDefectLotList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"FACTORYID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ELAPSEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVETIME\" type=\"STRING\" size=\"256\"/><Column id=\"INBOUNDUSER\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISMODIFY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveInboundDefectLot", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVETIME\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEAREA\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEUSER\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"HANDLEAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"HANDLENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ISMODIFY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_taborder("4");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","128","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_text("불량품 인수등록");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            obj.set_tooltiptext("MENU_PG-QC-0740");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Tab("tab","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab);
            obj.set_text("인수처리");
            obj.set_tooltiptext("TAKEOVER");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("title0","0","0",null,"34","73.9%",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("인수처리 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("TAKEOVERLIST");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_defectLotList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectLotList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"210\"/><Column size=\"80\"/><Column size=\"75\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"210\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" colspan=\"15\" text=\"불량정보\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECTINFO\"/><Cell col=\"16\" colspan=\"4\" text=\"기타정보\" cssclass=\"cell_headMaster\" tooltiptext=\"ETC\"/><Cell row=\"1\" col=\"1\" text=\"처리일시\" tooltiptext=\"PROCESSDATE\"/><Cell row=\"1\" col=\"2\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell row=\"1\" col=\"3\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell row=\"1\" col=\"4\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell row=\"1\" col=\"5\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell row=\"1\" col=\"6\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell row=\"1\" col=\"7\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell row=\"1\" col=\"8\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"9\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"10\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"11\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"12\" text=\"투입수량(PCS)\" tooltiptext=\"INPUTPCSQTY\"/><Cell row=\"1\" col=\"13\" text=\"투입수량(PNL)\" tooltiptext=\"INPUTPNLQTY\"/><Cell row=\"1\" col=\"14\" text=\"불량 Lot No\" tooltiptext=\"DEFECTLOTID\"/><Cell row=\"1\" col=\"15\" text=\"처리자\" tooltiptext=\"PROCESSUSER\"/><Cell row=\"1\" col=\"16\" text=\"경과시간\" tooltiptext=\"ELAPSEDTIME\"/><Cell row=\"1\" col=\"17\" tooltiptext=\"PROCESSSEGMENTTYPE\" text=\"공정구분\"/><Cell row=\"1\" col=\"18\" text=\"양산구분\" tooltiptext=\"LOTTYPE\"/><Cell row=\"1\" col=\"19\" text=\"UOM\" tooltiptext=\"UOM\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:PROCESSDATE\" displaytype=\"date\" calendardateformat=\" yyyy-MM-dd HH:mm:ss\" calendareditformat=\" yyyy-MM-dd HH:mm:ss\"/><Cell col=\"2\" text=\"bind:PLANTID\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"7\" text=\"bind:PARENTLOTID\"/><Cell col=\"8\" text=\"bind:DEFECTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"9\" text=\"bind:DEFECTPNLQTY\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:USERSEQUENCE\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:INPUTPCSQTY\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:INPUTPNLQTY\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:LOTID\"/><Cell col=\"15\" text=\"bind:CREATORNAME\"/><Cell col=\"16\" text=\"bind:ELAPSEDTIME\"/><Cell col=\"17\" text=\"bind:PROCESSSEGMENTTYPE\"/><Cell col=\"18\" text=\"bind:LOTTYPE\"/><Cell col=\"19\" text=\"bind:UNIT\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"합계\" tooltiptext=\"SUM\"/><Cell col=\"8\" expr=\"dataset.getSum(&quot;DEFECTQTY&quot;)\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_defectLotList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_saveReceive",null,"6","46","24","btn_xlDn_grd_defectLotList:4",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("인수");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_tooltiptext("Toolbar_Receive");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_receiveArea",null,"9","22","20","btn_saveReceive:10",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_receiveArea",null,"9","143","20","btn_receiveArea:0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02",null,"9","75","20","edt_receiveArea:10",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("인수작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("RECEIVEAREA");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_receiveArea_id",null,"9","52","20","338",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_visible("false");
            obj.set_background("thistle");
            obj.set_enable("false");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_defectLotList","31.32%","0",null,"34","504",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("내역조회");
            obj.set_tooltiptext("HISTORYQUERY");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_inboundDefectLotList","31.32%","0","120","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("subtitle1","0","0",null,"34","sta_cnt_ds_inboundDefectLotList:41.67%",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("내역조회");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("HISTORYQUERY");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_inboundDefectLot","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_inboundDefectLotList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"50\"/><Column size=\"150\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"210\"/><Column size=\"80\"/><Column size=\"76\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"210\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" colspan=\"19\" text=\"불량정보\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECTINFO\"/><Cell row=\"1\" col=\"1\" text=\"상태\" tooltiptext=\"STATUS\"/><Cell row=\"1\" col=\"2\" text=\"인수일시\" tooltiptext=\"RECEIVETIME\"/><Cell row=\"1\" col=\"3\" text=\"인수작업장\" tooltiptext=\"RECEIVEAREA\"/><Cell row=\"1\" col=\"4\" text=\"인수자\" tooltiptext=\"RECEIVEUSERNAME\"/><Cell row=\"1\" col=\"5\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell row=\"1\" col=\"6\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell row=\"1\" col=\"7\" text=\"품목명\" tooltiptext=\"PRODUCTNAME\"/><Cell row=\"1\" col=\"8\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell row=\"1\" col=\"9\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell row=\"1\" col=\"10\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"11\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"12\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"13\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"14\" text=\"투입수량(PCS)\" tooltiptext=\"INPUTPCSQTY\"/><Cell row=\"1\" col=\"15\" text=\"투입수량(PNL)\" tooltiptext=\"INPUTPNLQTY\"/><Cell row=\"1\" col=\"16\" text=\"불량Lot No\" tooltiptext=\"DEFECTLOTID\"/><Cell row=\"1\" col=\"17\" text=\"처리일시\" tooltiptext=\"PROCESSDATE\"/><Cell row=\"1\" col=\"18\" text=\"처리자\" tooltiptext=\"PROCESSUSER\"/><Cell row=\"1\" col=\"19\" text=\"UOM\" tooltiptext=\"UOM\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:STATUSNAME\"/><Cell col=\"2\" text=\"bind:RECEIVETIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"3\" text=\"bind:RECEIVEAREA\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:RECEIVEUSERNAME\"/><Cell col=\"5\" text=\"bind:PLANTID\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"9\" text=\"bind:PARENTLOTID\"/><Cell col=\"10\" text=\"bind:DEFECTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"11\" text=\"bind:DEFECTPNLQTY\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:USERSEQUENCE\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"14\" text=\"bind:INPUTPCSQTY\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:INPUTPNLQTY\" textAlign=\"right\"/><Cell col=\"16\" text=\"bind:LOTID\"/><Cell col=\"17\" text=\"bind:PROCESSDATE\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\"/><Cell col=\"18\" text=\"bind:HANDLENAME\"/><Cell col=\"19\" text=\"bind:UNIT\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\" text=\"합계\" tooltiptext=\"TOTALAMOUNT\"/><Cell col=\"10\" expr=\"dataset.getSum(&quot;DEFECTQTY&quot;)\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_inboundDefectLot",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_saveReceiveCancel",null,"6","70","24","btn_xlDn_grd_inboundDefectLot:4",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("인수취소");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_tooltiptext("Toolbar_CancelReceive");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
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

            obj = new Button("btn_clear","171","250","102","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","250","146","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
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

            obj = new Static("guidetip04",null,"230","45","20","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("17");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","256","10","27",null,null,null,null,null,null,this.tab_search.Tab1.form);
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
            obj.set_datacolumn("PLANTNAME");
            obj.set_innerdataset("");
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

            obj = new Static("sta_hidden1","25","356",null,"20","edt_area_id:10",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("27");
            obj.set_text("작업장ID");
            obj.set_visible("false");
            obj.set_textAlign("right");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_hidden2","25","376",null,"20","edt_productDef_id:10",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("28");
            obj.set_text("품목Revision");
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
        this.addIncludeScript("QAM01700M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM01700M.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM01700M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 불량품 인수등록(품질관리 - 불량관리)
         * 파일명         : QAM017000M.xfdl
         * 작성자         : yanghee.kim
         * 작성일         : 2021.04.07
         *
         * 설  명         :
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.07   yanghee.kim   최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;    //기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;    //품질관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.lang;
        this.userId;
        this.plantId;
        this.enterpriseId;
        this.dateFrom;
        this.dateTo;

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
        	//접속사용자의 PLANT 조회
        	this.qamfn_searchUserPlant("ds_userAuthorityPlantList", this.tab_search.Tab1.form.cbo_plantId);

        	this.div_work.form.tab.Tabpage1.form.edt_receiveArea.addEventHandler("onkeydown",this.gfn_setEnterKeyEvent,this)
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
            var tabIdx = this.div_work.form.tab.tabindex;
            switch (tabIdx)
            {
                case 0:
        		    this.div_work.form.tab.Tabpage1.form.grd_defectLotList.setCellProperty("head", 0, "text", '0');
                    this.fn_searchDefectLot();         //탭1. 인수처리 조회
                break;
                case 1:
        		    this.div_work.form.tab.Tabpage2.form.grd_inboundDefectLot.setCellProperty("head", 0, "text", '0');
                    this.fn_searchInboundDefectLot();  //탭2 내역조회
                break;
            }
        };

        /*
         * 기능 : 조회조건 SET
         */
        this.fn_setSearchParam = function()
        {
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
        };

        /*
         * 기능 : 탭1. 인수처리 검색
         */
        this.fn_searchDefectLot = function()
        {
            this.ds_defectLotList.clearData();
            this.fn_setSearchParam();

            var sSvcID        = "selectGetDefectLotList";
            var sController   = "/qam01700/selectGetDefectLotList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_defectLotList=output";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭2. 내역조회 검색
         */
        this.fn_searchInboundDefectLot = function()
        {
            this.ds_inboundDefectLotList.clearData();
            this.fn_setSearchParam();

            var sSvcID        = "selectGetInboundDefectLotList";
            var sController   = "/qam01700/selectGetInboundDefectLotList.do";
            var sInDatasets   =  "INPUT=ds_search";
            var sOutDatasets  = "ds_inboundDefectLotList=output";
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
        	    if (trId == "selectGetDefectLotList") //인수처리 검색
                {
        			if (this.ds_defectLotList.rowcount < 1)
        			{
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}
        		}
        		else if (trId == "selectGetInboundDefectLotList") //내역처리 검색
                {
        			if (this.ds_inboundDefectLotList.rowcount < 1)
        			{
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}
        		}
                else if (trId == "saveLotDefectInbound")
                {
                    this.gfn_Message("HandleTakeOverComplete", null, "info", "ok");
        			this.div_work.form.tab.Tabpage1.form.edt_receiveArea.set_value("");
        			this.div_work.form.tab.Tabpage1.form.edt_receiveArea_id.set_value("");
                    this.fn_search();
                }
                else if (trId == "saveLotDefectInboundCancel")
                {
                    this.gfn_Message("CancleTakeOverComplete", null, "info", "ok");
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

            if(popupId == "SRCH_AREA217")    /*조회조건-작업장*/
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
        	else if(popupId == "SRCH_DEFECTAREA219")    /*인수작업장*/
        	{
                opts = "width=450,height=500";
        		oArg.arg_paramCols   = "LANGUAGETYPE|USER_ID|ENTERPRISEID|PLANTID";
                oArg.arg_paramValues = this.lang +"|"+ this.userId +"|"+ this.enterpriseId +"|"+ this.plantId  ;
                oArg.arg_rtnCols     = "AREAID|AREANAME|ISMODIFY";
        		if (!this.nfn_isNull(this.div_work.form.tab.Tabpage1.form.edt_receiveArea.value))
        		{
        			oArg.arg_searchStr   = "AREAIDNAME=" + this.div_work.form.tab.Tabpage1.form.edt_receiveArea.value;
        		}
        		else
        		{
        			oArg.arg_searchStr   = "1=1";
        		}
        	}

            this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if(this.nfn_isNull(rtn)) return;

            if (sPopupId == "SRCH_AREA217")    /*조회조건-작업장*/
            {
                this.tab_search.Tab1.form.edt_area_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_area.set_value(rtn[1]);
            }
        	else if (sPopupId == "SRCH_PRODUCTDEF218")    /*조회조건-품목*/
            {
                this.tab_search.Tab1.form.edt_productDef_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_productDef.set_value(rtn[1]);
            }
        	else if (sPopupId == "SRCH_DEFECTAREA219")    /*인수처리-인수인계사업장*/
            {
        		if (rtn[2] == "N") //ISMODIFY
        		{
        			var areaName = rtn[1];
        			this.gfn_Messag("NoMatchingAreaUser", areaName, "warning", "ok");
        			return false;
        		}

        		this.div_work.form.tab.Tabpage1.form.edt_receiveArea_id.set_value(rtn[0]);
        		this.div_work.form.tab.Tabpage1.form.edt_receiveArea.set_value(rtn[1]);
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
         * 기능 : 탭1. 인수처리 - 인수
         */
        this.fn_saveReceive = function ()
        {
            if (this.ds_defectLotList.getCaseCount("CHK == '1'") <=0)
            {
                this.gfn_Message("NoSelections", null, "error", "ok");
                return;
            }

        	var receiveArea = this.div_work.form.tab.Tabpage1.form.edt_receiveArea.value;
        	var receiveAreaId = this.div_work.form.tab.Tabpage1.form.edt_receiveArea_id.value;
        	if (this.nfn_isNull(receiveArea))
        	{
        		this.gfn_Message("NoSelectInboundArea", null, "warning", "ok");// 인수작업장이 선택되지 않았습니다.
        		return;
        	}

        	if (!this.fn_checkAuthorityArea(this.ds_defectLotList)) return;

        	var bOK = this.gfn_Message("IsHandleTakeOver", "", "conf", "yesno");//인수처리 하시겠습니까?
        	if (bOK == false) return;

        	this.ds_saveDefectLotList.clearData();

        	for (var i=0; i< this.ds_defectLotList.rowcount; i++)
        	{
        		if (this.ds_defectLotList.getColumn(i, "CHK") == "1")
        		{
        			var nRow = this.ds_saveDefectLotList.addRow();
        			this.ds_saveDefectLotList.copyRow(nRow, this.ds_defectLotList, i)
        			this.ds_saveDefectLotList.setColumn(nRow, "INBOUNDUSER",   this.userId);
        			this.ds_saveDefectLotList.setColumn(nRow, "RECEIVEAREAID", receiveAreaId);
        		}
        	}

        	// -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveLotDefectInbound";
            var sController   = "/qam01700/saveLotDefectInbound.do";
            var sInDatasets   = "INPUT=ds_saveDefectLotList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭2. 내역조회 -인수취소
         */
        this.fn_saveReceiveCancel = function ()
        {
            var count = this.ds_inboundDefectLotList.getCaseCount("CHK == '1'");
        	if(count < 1)
            {
                this.gfn_Message("NoSelections", null, "error", "ok");
                return;
            }

        	var count = this.ds_inboundDefectLotList.getCaseCount("CHK == '1' && (STATUS == 'CauseComplete' || STATUS == 'DeadlineComplete' || STATUS == 'HoldComplete')");

        	if (count > 0)
        	{
        		this.gfn_Message("DoNotInbountCancelDataExist", null, "warning", "ok"); // 인수취소를 할 수 없는 상태의 건이 존재합니다.
        		return;
        	}

        	// 인수처리된 LOT의 불량이 하나라도 확정됬다면 Exception
        	var lotList = this.fn_isInboundLotDefectNotConfirm(this.ds_inboundDefectLotList);

        	if (!this.nfn_isNull(lotList))
        	{
        		this.gfn_Message("InboundlotDuringConfirmDataExist", lotList, "warning", "ok"); // 인수처리된 Lot중 불량확정된 건이 존재합니다.
        		return;
        	}
        	else
        	{
        		var selRow = this.ds_inboundDefectLotList.rowposition;
        		var isModify = this.ds_inboundDefectLotList.getColumn(selRow, "ISMODIFY");

        		if (isModify == "N")
        		{
        			this.gfn_Message("NoMatchingAreaUser", areaList, "warning", "ok");//작업장에 대한 권한이 없습니다. {0}
        			return false;
        		}

        		var bOK = this.gfn_Message("IsCancleTakeOver", "", "conf", "yesno");//인수취소 하시겠습니까?
        		if (bOK == false) return;

        		this.ds_saveInboundDefectLot.clearData();

        		for (var i=0; i< this.ds_inboundDefectLotList.rowcount; i++)
        		{
        			if (this.ds_inboundDefectLotList.getColumn(i, "CHK") == "1")
        			{
        				var nRow = this.ds_saveInboundDefectLot.addRow();
        				this.ds_saveInboundDefectLot.copyRow(nRow, this.ds_inboundDefectLotList, i)
        			}
        		}

        		// -------------------------
        		// 저장
        		// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        		// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        		// -------------------------
        		var sSvcID        = "saveLotDefectInboundCancel";
        		var sController   = "/qam01700/saveLotDefectInboundCancel.do";
        		var sInDatasets   = "INPUT=ds_saveInboundDefectLot:U";
        		var sOutDatasets  = "";
        		var sArgs         = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        };

        /// 인수처리된 불량 Lot의 하위 불량코드중 확정된 Lot List를 검색한다.
        this.fn_isInboundLotDefectNotConfirm = function (pDataset)
        {
        	var lotList = "";

        	for (var i = 0; i < pDataset.getRowCount(); i++)
        	{
        		if (pDataset.getColumn(i, "CHK") == "1")
        		{
        			if (i + 1 == pDataset.getRowCount())
        			{
        				lotList += pDataset.getColumn(i, "LOTID");
        			}
        			else
        			{
        				lotList += pDataset.getColumn(i, "LOTID") + ",";
        			}
        		}
        	}

            this.ds_inbountDefectLotStateList.clearData();

            var sSvcID            = "selectGetInbountDefectLotStateList";
            var sController       = "/qam01700/selectGetInbountDefectLotStateList.do";
            var sInDatasets       = "";
            var sOutDatasets      = "ds_inbountDefectLotStateList=output";
            var sArgs             = "";
                sArgs            += this.gfn_setParam("method", sSvcID);
                sArgs            += this.gfn_setParam("LOTLIST", lotList);

            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");

            return this.ds_inbountDefectLotStateList.getColumn(0, "LOTIDLIST");
        }

        /*
         * 기능 : 인수처리시 작업장에 대한 권한체크
         */
        this.fn_checkAuthorityArea = function (pDataset)
        {
        	if (pDataset.getCaseCount("ISMODIFY == 'N' && CHK== '1' ") > 0)
        	{
        		pDataset.filter("");
        		pDataset.filter("ISMODIFY == 'N'  && CHK== '1' ");

        		var areaList = "";
        		var count = pDataset.getRowCount();
        		for(var i=0; i < count; i++)
        		{
        			if (i == count -1) areaList += pDataset.getColumn(i, "AREANAME");
        			else  areaList += pDataset.getColumn(i, "AREANAME") + ", ";
        		}

        		this.gfn_Message("NoMatchingAreaUser", areaList, "warning", "ok");//작업장에 대한 권한이 없습니다. {0}

        		pDataset.filter("");

        		return false;
        	}

        	return true;
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
        		this.fn_openPop("SRCH_AREA217","P00217"); //작업장
        	}
        	else if (obj.name == "btn_productDef")
        	{
        		this.fn_openPop("SRCH_PRODUCTDEF218","P00218"); //품목
        	}
        	else if (obj.name == "btn_receiveArea")
        	{
        		this.fn_openPop("SRCH_DEFECTAREA219","P00219"); //인수작업장
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
        	else if (obj.name == "edt_receiveArea")
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.div_work.form.tab.Tabpage1.form.edt_receiveArea_id.set_value("");
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
            var popupId = "SEARCH_DEFECTBYLOT";
           	var oArg = {};

        	oArg.lotId = obj.getBindDataset().getColumn(e.row, "LOTID");
        	oArg.lang = this.lang;
        	this.gfn_openPopup(popupId,"qam::QAM01700P.xfdl",oArg,"width=895,height=510");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.tab.Tabpage1.form.grd_defectLotList.addEventHandler("oncelldblclick",this.fn_gridOncelldblclick,this);
            this.div_work.form.tab.Tabpage1.form.btn_saveReceive.addEventHandler("onclick",this.fn_saveReceive,this);
            this.div_work.form.tab.Tabpage1.form.btn_receiveArea.addEventHandler("onclick",this.fn_popup_click,this);
            this.div_work.form.tab.Tabpage1.form.edt_receiveArea.addEventHandler("canchange",this.fn_popup_canchange,this);
            this.div_work.form.tab.Tabpage2.form.grd_inboundDefectLot.addEventHandler("oncelldblclick",this.fn_gridOncelldblclick,this);
            this.div_work.form.tab.Tabpage2.form.btn_saveReceiveCancel.addEventHandler("onclick",this.fn_saveReceiveCancel,this);
            this.tab_search.Tab1.form.cbo_period.addEventHandler("canitemchange",this.tab_search_Tab1_cbo_period_canitemchange,this);
            this.tab_search.Tab1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tab1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tab1.form.edt_area.addEventHandler("canchange",this.fn_popup_canchange,this);
            this.tab_search.Tab1.form.btn_area.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.edt_productDef.addEventHandler("canchange",this.fn_popup_canchange,this);
            this.tab_search.Tab1.form.btn_productDef.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.div_dateFrom.addEventHandler("onkeydown",this.fn_preiodChang,this);
            this.tab_search.Tab1.form.div_dateTo.addEventHandler("onkeydown",this.fn_preiodChang,this);
        };
        this.loadIncludeScript("QAM01700M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
