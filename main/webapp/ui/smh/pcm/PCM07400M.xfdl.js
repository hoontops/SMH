(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM07400M");
            this.set_titletext("다중분할 작업시작");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_comment", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ISCURRENTPROCESS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_operationSpec", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LSL\" type=\"STRING\" size=\"256\"/><Column id=\"SL\" type=\"STRING\" size=\"256\"/><Column id=\"USL\" type=\"STRING\" size=\"256\"/><Column id=\"ISCURRENTPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTPATHSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTRCLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SELFSHIPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFTAKEINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISBEFOREROLLCUTTING\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_paramMain", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ENTERPRISEID\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dt", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dtStaying", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"STAYINGLOCKSTD\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTSTATESTAYINGTIMECNV\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_body", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKER\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GOODPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTLIST\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISBATCH\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processDefTypeInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"입력공정\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"메시지유형\" type=\"STRING\" size=\"256\"/><Column id=\"등록자\" type=\"STRING\" size=\"256\"/><Column id=\"등록일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"입력공정\">RTR UV-LASER</Col><Col id=\"작업장\">RTR UV_B2F</Col><Col id=\"메시지유형\">Comment</Col><Col id=\"등록자\">빌트원</Col><Col id=\"공정수순\">10</Col><Col id=\"공정명\">RTR UV-LASER</Col><Col id=\"등록일\">20200118151539</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uom", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotCard", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rdParam", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PARENTLOT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PANELQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPLITQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONUSER\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotListSave", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PARENTLOT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PANELQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPLITQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONUSER\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_equipmentInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECIPEID\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_InspectionList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILESIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILEEXT\" type=\"STRING\" size=\"256\"/><Column id=\"FILEPATH\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGERESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISUPLOAD\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"IMGBUTTONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_equipmentParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILEQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_finalLot", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGERESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectLot", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_equipmentSave", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECIPEID\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Button("btn_customReset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_customReset:0",null,null,null,null,null,this.div_header.form);
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

            obj = new Static("sta_title","30","16","117","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("최종 인수 등록");
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

            obj = new Div("divSearch","0","10",null,"42","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label00","0","10","100","20",null,null,null,null,null,null,this.div_work.form.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("AREANAME");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Static("label01","26.43%","10","100","20",null,null,null,null,null,null,this.div_work.form.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("LOTID");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"10","22","20","label01:0",null,null,null,null,null,this.div_work.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_area","label00:10","10",null,"20","btn_area:0",null,null,null,null,null,this.div_work.form.divSearch.form);
            obj.set_taborder("2");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","label01:10","10","15.92%","20",null,null,null,null,null,null,this.div_work.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_imemode("alpha");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","label00:-46","10",null,"20","btn_area:205",null,null,null,null,null,this.div_work.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_visible("false");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grd_productInfo","0","257",null,"150","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_detail");
            obj.set_autoenter("select");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_binddataset("ds_lotInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_head\" text=\"Lot No.\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"LOTID\"/><Cell col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:LOTID\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"이전공정명\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PREVPROCESSSEGMENTNAME\"/><Cell col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PREVPROCESSSEGMENTNAME\"/><Cell col=\"4\" cssclass=\"cell_head\" text=\"공정명\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"6\" cssclass=\"cell_head\" text=\"후공정\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"NEXTPROCESSSEGMENTNAME\"/><Cell col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:NEXTPROCESSSEGMENTNAME\"/><Cell col=\"8\" cssclass=\"cell_head\" text=\"공정수순\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"9\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:USERSEQUENCE\"/><Cell row=\"1\" cssclass=\"cell_head\" text=\"품목코드\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"ITEMID\"/><Cell row=\"1\" col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTDEFID\"/><Cell row=\"1\" col=\"2\" cssclass=\"cell_head\" text=\"품목명\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"ITEMNAME\"/><Cell row=\"1\" col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTDEFNAME\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_head\" text=\"투입일자\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"INPUTDATE\"/><Cell row=\"1\" col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:INPUTDATE\"/><Cell row=\"1\" col=\"6\" cssclass=\"cell_head\" text=\"S/O번호\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PRODUCTIONORDERID\"/><Cell row=\"1\" col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTIONORDERID\"/><Cell row=\"1\" col=\"8\" cssclass=\"cell_head\" text=\"납기일\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"DUEDATE\"/><Cell row=\"1\" col=\"9\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:DUEDATE\"/><Cell row=\"2\" cssclass=\"cell_head\" text=\"품목유형구분\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PRODUCTDEFTYPE\"/><Cell row=\"2\" col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTDEFTYPE\"/><Cell row=\"2\" col=\"2\" cssclass=\"cell_head\" text=\"생산구분\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell row=\"2\" col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTIONTYPE\"/><Cell row=\"2\" col=\"4\" cssclass=\"cell_head\" text=\"Locking 여부\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"ISLOCKING\"/><Cell row=\"2\" col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:ISLOCKING\"/><Cell row=\"2\" col=\"6\" cssclass=\"cell_head\" text=\"재작업 여부\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"ISREWORK\"/><Cell row=\"2\" col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:ISREWORK\"/><Cell row=\"2\" col=\"8\" cssclass=\"cell_head\" text=\"고객명\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"CUSTOMERNAME\"/><Cell row=\"2\" col=\"9\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:CUSTOMERNAME\"/><Cell row=\"3\" cssclass=\"cell_head\" text=\"단위\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"UNIT\"/><Cell row=\"3\" col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:UNIT\" displaytype=\"normal\" combodataset=\"ds_uom\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell row=\"3\" col=\"2\" cssclass=\"cell_head\" text=\"수량(PNL)\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PANELQTY\"/><Cell row=\"3\" col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PNLQTY\"/><Cell row=\"3\" col=\"4\" cssclass=\"cell_head\" text=\"수량(PCS)\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PCSQTY\"/><Cell row=\"3\" col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PCSQTY\"/><Cell row=\"3\" col=\"6\" cssclass=\"cell_head\" text=\"MM\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"MM\"/><Cell row=\"3\" col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:MM\"/><Cell row=\"3\" col=\"8\" cssclass=\"cell_head\" text=\"자원코드\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"RESOURCEID\"/><Cell row=\"3\" col=\"9\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:RESOURCEID\"/><Cell row=\"4\" cssclass=\"cell_head\" text=\"자원명\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"RESOURCENAME\"/><Cell row=\"4\" col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:RESOURCENAME\"/><Cell row=\"4\" col=\"2\" cssclass=\"cell_head\" text=\"상위분류\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PARENTPROCESSSEGMENTCLASSID\"/><Cell row=\"4\" col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PARENTPROCESSSEGMENTCLASSID\"/><Cell row=\"4\" col=\"4\" cssclass=\"cell_head\" text=\"ISCLAIMLOT\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\"/><Cell row=\"4\" col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:ISCLAIMLOT\"/><Cell row=\"4\" col=\"6\" border=\"1px solid #e8e8e8,0px solid #e8e8e8,1px solid #e8e8e8,1px solid #e8e8e8\"/><Cell row=\"4\" col=\"7\" border=\"1px solid #e8e8e8,0px solid #e8e8e8\"/><Cell row=\"4\" col=\"8\" border=\"1px solid #e8e8e8,0px solid #e8e8e8\"/><Cell row=\"4\" col=\"9\" border=\"1px solid #e8e8e8,1px solid #e8e8e8,1px solid #e8e8e8,0px solid #e8e8e8\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab","0","grd_productInfo:5",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab);
            obj.set_text("설비");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_equipment","0","34",null,null,"0","-85",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_equipmentInfo");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"설비ID\" tooltiptext=\"EQUIPMENTID\"/><Cell col=\"3\" text=\"설비명\" tooltiptext=\"EQUIPMENTNAME\"/><Cell col=\"4\" text=\"작업시작시간\"/><Cell col=\"5\" text=\"작업완료시간\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:EQUIPMENTID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:EQUIPMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TRACKINTIME\"/><Cell col=\"5\" text=\"bind:TRACKOUTTIME\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("title1_01","0","0","80","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("설비");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_equipmentInfo","80","0","140","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("전달사항");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Div("divMessage","0","0",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("pcm::PCM06900T1.xfdl");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab);
            obj.set_text("특이사항");
            obj.set_tooltiptext("COMMENT");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","66","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_tooltiptext("COMMENT");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_comment","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_comment");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"500\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"3\" text=\"특이사항\" tooltiptext=\"COMMENT\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.div_work.form.tab);
            obj.set_text("공정SPEC");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","71","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_text("공정SPEC");
            obj.set_cssclass("sta_WF_subTitle2");
            this.div_work.form.tab.Tabpage4.addChild(obj.name, obj);

            obj = new Grid("grd_operationSpec","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage4.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_operationSpec");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"3\" text=\"항목\" tooltiptext=\"SPECITEM\"/><Cell col=\"4\" text=\"하한값\" tooltiptext=\"LSL\"/><Cell col=\"5\" text=\"중간값\" tooltiptext=\"SL\"/><Cell col=\"6\" text=\"상한값\" tooltiptext=\"USL\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:SPECCLASSNAME\"/><Cell col=\"4\" text=\"bind:LSL\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:SL\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:USL\" displaytype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage4.addChild(obj.name, obj);

            obj = new Tabpage("tpgDefect",this.div_work.form.tab);
            obj.set_text("불량");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grdInspectionList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.tpgDefect.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_InspectionList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"220\"/><Column size=\"220\"/><Column size=\"220\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No\"/><Cell col=\"2\" text=\"불량 코드\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"불량코드 명\"/><Cell col=\"4\" text=\"품질공정\" tooltiptext=\"QCSEGMENT\"/><Cell col=\"5\" text=\"수량(PCS)\" cssclass=\"cell_point\"/><Cell col=\"6\" text=\"수량(PNL)\" cssclass=\"cell_point\"/><Cell col=\"7\" text=\"불량율\"/><Cell col=\"8\" text=\"원인품목\" tooltiptext=\"REASONCONSUMABLEDEFID\"/><Cell col=\"9\" text=\"원인 LOTID\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell col=\"10\" text=\"원인 공정\" tooltiptext=\"REASONPROCESSSEGMENTID\"/><Cell col=\"11\" text=\"원인 작업장\" tooltiptext=\"REASONAREAID\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTID\"/><Cell col=\"2\" text=\"bind:SEGMENT_DEFECTCODE\" textAlign=\"left\" expandshow=\"show\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:SEGMENT_DEFECTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:QCSEGMENTNAME\"/><Cell col=\"5\" text=\"bind:QTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:PNLQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0.00\" maskeditautoselect=\"true\"/><Cell col=\"7\" text=\"bind:DEFECTRATE\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0.00\"/><Cell col=\"8\" text=\"bind:CONSUMABLEDEFNAME\" expandshow=\"show\"/><Cell col=\"9\" text=\"bind:REASONCONSUMABLELOTID\" combodataset=\"ds_ReasonConsumableLot\" combocodecol=\"CONSUMABLELOTID\" combodatacol=\"CONSUMABLELOTID\" displaytype=\"normal\" edittype=\"none\" expandshow=\"show\"/><Cell col=\"10\" text=\"bind:REASONPROCESSSEGMENTNAME\" expandshow=\"show\"/><Cell col=\"11\" text=\"bind:REASONAREANAME\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" maskeditformat=\"#,##0\" displaytype=\"mask\" expr=\"expr:dataset.getSum(&quot;QTY&quot;) \"/><Cell col=\"6\" maskeditformat=\"#,##0.00\" expr=\"expr:dataset.getSum(&quot;PNLQTY&quot;) \"/><Cell col=\"7\" expandchar=\"%\" expandsize=\"24\" maskeditformat=\"#,##0.00\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;DEFECTRATE&quot;)\" maskedittype=\"number\" maskeditpostfixtext=\" %\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.div_work.form.tab.tpgDefect.addChild(obj.name, obj);

            obj = new Static("title1_00","0","0","38","34",null,null,null,null,null,null,this.div_work.form.tab.tpgDefect.form);
            obj.set_taborder("1");
            obj.set_text("불량");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab.tpgDefect.addChild(obj.name, obj);

            obj = new Button("btnAddRow_ds_InspectionList",null,"6","26","24","26",null,null,null,null,null,this.div_work.form.tab.tpgDefect.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.form.tab.tpgDefect.addChild(obj.name, obj);

            obj = new Button("btn_customdelRow",null,"6","26","24","0",null,null,null,null,null,this.div_work.form.tab.tpgDefect.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab.tpgDefect.addChild(obj.name, obj);

            obj = new Grid("grd_lot","0","62",null,"191","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_lotList");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"3\" text=\"품목코드\" tooltiptext=\"ITEMID\"/><Cell col=\"4\" text=\"Rev.\" tooltiptext=\"ITEMVERSION\"/><Cell col=\"5\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"6\" text=\"공정명\"/><Cell col=\"7\" text=\"공정수순\"/><Cell col=\"8\" text=\"단위\" tooltiptext=\"UNIT\"/><Cell col=\"9\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell col=\"10\" text=\"수량\" tooltiptext=\"QTY\"/><Cell col=\"11\" text=\"고객명\"/><Cell col=\"12\" text=\"검사자\" tooltiptext=\"INSPECTIONUSER\"/><Cell col=\"13\" text=\"투입일자\"/><Cell col=\"14\" text=\"S/O 번호\"/><Cell col=\"15\" text=\"납기일\"/><Cell col=\"16\" text=\"생산구분\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"2\" text=\"bind:LOTID\" textAlign=\"left\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"6\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"7\" textAlign=\"right\" text=\"bind:USERSEQUENCE\"/><Cell col=\"8\" text=\"bind:UNIT\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"9\" text=\"bind:PANELQTY\" textAlign=\"right\" displaytype=\"number\" edittype=\"none\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"10\" text=\"bind:QTY\" textAlign=\"right\" displaytype=\"number\" edittype=\"none\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"11\" textAlign=\"left\" text=\"bind:CUSTOMERNAME\"/><Cell col=\"12\" tooltiptext=\"bind:INSPECTIONUSER\"/><Cell col=\"13\" text=\"bind:INPUTDATE\"/><Cell col=\"14\" text=\"bind:PRODUCTIONORDERID\"/><Cell col=\"15\" text=\"bind:DUEDATE\"/><Cell col=\"16\" text=\"bind:PRODUCTIONTYPE\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

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

            obj = new PopupDiv("pdv_ReasonConsumableList","553","779","450","221",null,null,null,null,null,null,this);
            obj.set_text("pdv_00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ReasonConsumableList","0","0",null,null,"0","0",null,null,null,null,this.pdv_ReasonConsumableList.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_ReasonConsumableList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"106\"/><Column size=\"72\"/><Column size=\"163\"/><Column size=\"101\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자재ID\"/><Cell col=\"1\" text=\"자재버전\"/><Cell col=\"2\" text=\"자재명\"/><Cell col=\"3\" text=\"자재유형\"/></Band><Band id=\"body\"><Cell text=\"bind:CONSUMABLEDEFID\"/><Cell col=\"1\" text=\"bind:CONSUMABLEDEFVERSION\"/><Cell col=\"2\" text=\"bind:CONSUMABLEDEFNAME\"/><Cell col=\"3\" text=\"bind:MATERIALTYPE\"/></Band></Format></Formats>");
            this.pdv_ReasonConsumableList.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_ReasonLotList","303","789","250","221",null,null,null,null,null,null,this);
            obj.set_text("pdv_00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ReasonLotList","0","0",null,null,"0","0",null,null,null,null,this.pdv_ReasonLotList.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_ReasonConsumableList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Lot No\"/></Band><Band id=\"body\"><Cell text=\"bind:LOTID\"/></Band></Format></Formats>");
            this.pdv_ReasonLotList.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_work.form.divSearch.form.edt_area","value","ds_search","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.form.divSearch.form.edt_area_id","value","ds_search","AREAID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.form.divSearch.form.edt_lotId","value","ds_search","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","pcm::PCM06900T1.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PCM07400M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM07400M.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PCM07400M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM07400M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 다중분할 작업시작
         * 파일명 		: PCM07400M.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.05.21
         *
         * 설  명		: 공정관리-다중공정작업-다중분할 작업시작
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.21	최성민   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_pcm.xjs"); /*include "lib::lib_pcm.xjs"*/;
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통
        /**************************************************************************

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.pnlQty_enter = false;
        this.g_event;
        this.nLeft;
        this.nTop;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	//품목단위:UOM
        	var sSvcID 			= "selectUOM";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_uom=output";
        	var sArgs 		  	= "";
        	sArgs 			+= this.gfn_setParam("SQL_ID", "selectUOMDefList");
        	sArgs 			+= this.gfn_setParam("UOMCLASSID", "Process");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);
        };
        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function(obj,e)
        {
        	if(!this.fn_checkUpdate()) return;
        	var component = this.div_work.form.divSearch.form;
        	var strColIdList = "edt_area_id,edt_lotId";
        	var strColNmList = this.nfn_nvl(this.nfn_getDictionarynameUpper("AREA"),"작업장");
        					 + this.nfn_nvl(this.nfn_getDictionarynameUpper("LOTID"),"Lot No.");
        	if(!this.nfn_MandatoryCheck(component, strColIdList, strColNmList)) { return}
        	this.fn_searchWIP(); /* Step1 함수 호출 */
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClearCustom = function(obj,e)
        {
        	if(!this.fn_checkUpdate()) return;
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function(obj,e)
        {
        	//필수값 체크
        	if(this.ds_lotList.rowcount<1){
        		this.gfn_Message("NoSeletedLot", "", "warning", "ok");
        		return;
        	}

        	if(this.ds_lotList.getCaseCount("CHK=='1'") < 1){
        		this.gfn_Message("NoSeletedLot", "", "warning", "ok");
        		return;
        	}

        	//선택된 Lot만 담기
        	this.ds_lotListSave.clearData();
        	for(var i=0; i<this.ds_lotList.rowcount;i++){
        		if(this.ds_lotList.getColumn(i, "CHK")=="1"){
        			var nRow = this.ds_lotListSave.addRow();
        			this.ds_lotListSave.copyRow(nRow, this.ds_lotList, i);
        		}
        	}

        	// Defect 정보
        	// 불량 Row를 추가하였으나 불량코드 선택을 했는지 체크
        	for(var i=0; i <this.ds_InspectionList.rowcount; i++){
        		if(this.ds_InspectionList.getRowType(i) != Dataset.ROWTYPE_DELETE){
        			var defectCode 	= this.ds_InspectionList.getColumn(i, "DEFECTCODE");
        			var qty 		= nexacro.toNumber(this.nfn_nvl(this.ds_InspectionList.getColumn(i, "QTY"),"0"));
        			var pnlQty 		= nexacro.toNumber(this.nfn_nvl(this.ds_InspectionList.getColumn(i, "PNLQTY"),"0"));
        			var pcsQty 		= nexacro.toNumber(this.nfn_nvl(this.ds_InspectionList.getColumn(i, "QTY"), "0"));
        			var defectRate 	= nexacro.toNumber(this.ds_InspectionList.getColumn(i, "DEFECTRATE"));
        			var defectGrade = this.ds_InspectionList.getColumn(i, "DECISIONDEGREE");
        			var defectCode 	= this.ds_InspectionList.getColumn(i, "DEFECTCODE");
        			var imgResourceID = this.ds_InspectionList.getColumn(i, "IMAGERESOURCEID");
        			var defectName	= this.ds_InspectionList.getColumn(i, "SEGMENT_DEFECTNAME");

        			if(this.nfn_isNull(defectCode)){
        				// 불량코드를 선택하여 주십시오.
        				this.gfn_Message("NoDefectCode", "", "warning", "ok");
        				return;
        			}

        			if(qty<1 || pnlQty<1){
        			// 불량수량은 0이상이어야 합니다.
        				this.gfn_Message("DefectQtyValidation", "", "warning", "ok");
        				return;
        			}
        		}
        	}

        	var dsLot		= this.ds_lotList;
        	var dsSave		= this.ds_finalLot;
        	var dsInspect 	= this.ds_InspectionList;

        	// 체크된 Lot 기준으로 Defect Code List를 Join하여 데이터를 한번 걸러냄
        	this.ds_finalLot.clearData();
        	for(var j=0; j<dsLot.rowcount; j++){
        		var chk	= dsLot.getColumn(j, "CHK");
        		if(chk=="1"){
        			for(var i=0; i < dsInspect.rowcount; i++){
        				var inspLotId	= dsInspect.getColumn(i, "LOTID");
        				if(inspLotId==dsLot.getColumn(j,"LOTID")){
        					var nRow = dsSave.addRow();
        					dsSave.setColumn(nRow, "LOTID", 					dsLot.getColumn(j,"LOTID"));
        					dsSave.setColumn(nRow, "DEFECTCODE",				dsInspect.getColumn(i,"DEFECTCODE"));
        					dsSave.setColumn(nRow, "QCSEGMENTID",				dsInspect.getColumn(i,"QCSEGMENTID"));
        					dsSave.setColumn(nRow, "PNLQTY",					dsInspect.getColumn(i,"PNLQTY"));
        					dsSave.setColumn(nRow, "QTY",						dsInspect.getColumn(i,"QTY"));
        					dsSave.setColumn(nRow, "REASONCONSUMABLEDEFID",		dsInspect.getColumn(i,"REASONCONSUMABLEDEFID"));
        					dsSave.setColumn(nRow, "REASONCONSUMABLELOTID",		dsInspect.getColumn(i,"REASONCONSUMABLELOTID"));
        					dsSave.setColumn(nRow, "REASONPROCESSSEGMENTID",	dsInspect.getColumn(i,"REASONPROCESSSEGMENTID"));
        					dsSave.setColumn(nRow, "REASONCONSUMABLEDEFVERSION",dsInspect.getColumn(i,"REASONCONSUMABLEDEFVERSION"));
        					dsSave.setColumn(nRow, "REASONAREAID",				dsInspect.getColumn(i,"REASONAREAID"));
        					dsSave.setColumn(nRow, "DEFECTCODENAME",			dsInspect.getColumn(i,"DEFECTCODENAME"));
        					dsSave.setColumn(nRow, "QCSEGMENTNAME",				dsInspect.getColumn(i,"QCSEGMENTNAME"));
        					dsSave.setColumn(nRow, "DECISIONDEGREE",			dsInspect.getColumn(i,"DECISIONDEGREE"));
        					dsSave.setColumn(nRow, "DEFECTRATE",				dsInspect.getColumn(i,"DEFECTRATE"));
        					dsSave.setColumn(nRow, "IMAGERESOURCEID",			dsInspect.getColumn(i,"IMAGERESOURCEID"));
        				}
        			}
        		}
        	}

        	// Defect 정보
        	this.ds_defectLot.clearData();
        	for(var i=0; i <this.ds_InspectionList.rowcount; i++){
        		var lotId 	= this.ds_InspectionList.getColumn(i, "LOTID");
        		var sum 	= this.ds_InspectionList.getCaseSum("LOTID=='"+lotId+"'","QTY");

        		if(this.ds_defectLot.findRow("LOTID", lotId) < 0){
        			var nRow = this.ds_defectLot.addRow();
        			this.ds_defectLot.setColumn(nRow, "LOTID", lotId);
        			this.ds_defectLot.setColumn(nRow, "DEFECTQTY", sum);
        		}
        	}

        	// Lot 수량과 Defect SUM Qty 비교
        	for(var j=0; j<dsLot.rowcount; j++){
        		var chk	= dsLot.getColumn(j, "CHK");
        		var lotId 		= this.ds_lotList.getColumn(j, "LOTID");
        		if(chk=="1"){
        			var qty		= nexacro.toNumber(this.ds_lotList.getColumn(j, "QTY"));
        			var sum 	= nexacro.toNumber(this.ds_InspectionList.getCaseSum("LOTID=='"+lotId+"'","QTY"));

        			if(qty < sum){
        				// 불량 수량은 Lot 수량보다 많을 수 없습니다. {0}
        				this.gfn_Message("LotQtyLargerThanDefectQty", lotId, "warning", "ok");
        				return;
        			}

        		}
        	}

        	//설비 필수값 체크
        	if(this.ds_equipmentInfo.rowcount<1){
        		this.gfn_Message("EquipmentIsRequired", " ", "warning", "ok");
        		return;
        	}

        	if(this.ds_equipmentInfo.findRow("CHK","1")<0){
        		// 작업 시작 할 설비를 선택하시기 바랍니다.
        		this.gfn_Message("SelectStartWorkEquipment", " ", "warning", "ok");
        		return false;
        	}

        	//체크된 설비만 넘기도록 추가
        	this.ds_equipmentSave.clearData();
        	this.ds_equipmentInfo.filter("CHK=='1'");
        	this.ds_equipmentSave.copyData(this.ds_equipmentInfo, true);
        	this.ds_equipmentInfo.filter("");

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveMultiLotStart";
        	var sController 	= "/pcm07400/saveMultiLotStart.do";
        	var sInDatasets 	= "INPUT1=ds_lotListSave:U INPUT2=ds_equipmentSave:A INPUT3=ds_finalLot INPUT4=ds_defectLot";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_reset = function(obj,e)
        {
        	this.clearDetailInfo();
        };
        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		if (trId == "saveMultiLotStart")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        			} else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        			}
        		} else {
        			this.gfn_Message(errMsg, null, "error", "ok");
        		}
        	} else {
        		if (trId == "selectWIPMultiStateList") {
        			if(this.ds_lotList.getRowCount() < 1) {
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				this.clearDetailInfo();
        				return;
        			}
        			this.fn_searchKeyInfo();
        		} else if (trId == "selectAreaResourceByLot"){	/* Step1_1 Callback : 작업장, Lot ID 체크 */
        			if(this.ds_dt.getRowCount() < 1) {
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				this.clearDetailInfo();
        				return;
        			}
        			this.fn_checkLot(0);
        		} else if(trId =="selectLotInfoByProcess"){ /* Step 4_1 Callback */
        			if (this.ds_lotInfo.getRowCount() < 1)
        			{
        				this.ds_lotInfo.addRow();
        				// 조회할 데이터가 없습니다.
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				this.clearDetailInfo();
        				this.ds_search.setColumn(0, "LOTID", "");
        				this.div_work.form.divSearch.form.edt_lotId.setFocus();
        				return;
        			} else {
        				this.fn_searchOthers();  /* Step5 나머지 정보 조회 */
        			}
        		} else if(trId =="selectOtherInfo"){
        			//설비 조회
        			this.fn_searchEquipment();
        		} else if(trId =="getEquipmentByArea"){
        			//첫번째 설비 자동체크
        			if(this.ds_equipmentInfo.rowcount>0){
        				this.ds_equipmentInfo.setColumn(0, "CHK", "1");
        			}
        			//메세지 탭 정보 조회
        			this.div_work.form.tab.Tabpage2.form.divMessage.form.fn_search();
        		} else if(trId =="saveMultiLotStart"){
        			this.gfn_Message("SuccedSave", null, "info", "ok");
        			this.clearDetailInfo();
        		} else if (trId=="selectDefectReasonConsumableLot"){
        			this.pdv_ReasonLotList.form.grd_ReasonLotList.setBindDataset(this.ds_ReasonConsumableLot);
        			this.pdv_ReasonLotList.show();
        			this.pdv_ReasonLotList.trackPopup(this.nLeft, this.nTop,  this.pdv_ReasonLotList.width, this.pdv_ReasonLotList.height, "fn_Callback_pdv_ReasonLotList");
        		} else if (trId=="selectReasonConsumableList"){
        			this.pdv_ReasonConsumableList.form.grd_ReasonConsumableList.setBindDataset(this.ds_ReasonConsumableList);
        			this.pdv_ReasonConsumableList.show();
        			this.pdv_ReasonConsumableList.trackPopup(this.nLeft, this.nTop,  this.pdv_ReasonConsumableList.width, this.pdv_ReasonConsumableList.height, "fn_Callback_pdv_ReasonConsumableList");
        		} else if (trId=="selectDefectReasonProcesssegment"){
        			this.pdv_ReasonProcessSegment.form.grd_ReasonProcessSegment.setBindDataset(this.ds_ReasonProcessSegment);
        			if(this.nfn_isNull(this.ds_InspectionList.getColumn(this.g_event.row,"REASONCONSUMABLELOTID"))==false && this.ds_InspectionList.getColumn(this.g_event.row,"REASONCONSUMABLELOTID") != ""){
        				this.ds_ReasonProcessSegment.filter("REASONCONSUMABLELOTID == '" + this.ds_InspectionList.getColumn(this.g_event.row,"REASONCONSUMABLELOTID") + "'");
        			} else {
        				this.ds_ReasonProcessSegment.filter("");
        			}
        			this.pdv_ReasonProcessSegment.show();
        			this.pdv_ReasonProcessSegment.trackPopup(this.nLeft, this.nTop,  this.pdv_ReasonProcessSegment.width, this.pdv_ReasonProcessSegment.height, "fn_Callback_pdv_ReasonProcessSegment");
        		}
        	}
        }

        this.clearDetailInfo = function()
        {
        	this.div_work.form.divSearch.form.edt_lotId.set_value("");
        	this.ds_lotList.clearData();
        	this.ds_lotListSave.clearData();
        	this.ds_lotInfo.clearData();
        	this.ds_lotInfo.addRow();
        	this.ds_comment.clearData();
        	this.ds_operationSpec.clearData();
        	this.div_work.form.tab.Tabpage2.form.divMessage.form.fn_clear();
        	this.ds_InspectionList.clearData();
        }

        /*
         * Step1_1 : 재공조회
         */
        this.fn_searchWIP = function()
        {
        	this.ds_dt.clearData();
        	this.ds_lotList.clearData();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 	this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID", 			this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 	this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "PROCESSSTATE", 	this.Constants.Wait);

        	var sSvcID 			= "selectWIPMultiStateList";
        	var sController 	= "/pcm07400/selectWIPMultiStateList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_lotList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /*
         * Step2_1 : 작업장, Lot ID 체크
         */
        this.fn_searchKeyInfo = function()
        {
        	this.ds_dt.clearData();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 	this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID", 			this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 	this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 			"selectAreaResourceByLot");

        	var sSvcID 			= "selectAreaResourceByLot";
        	var sController 	= "/pcm06900/selectCustomQuery.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_dt=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /*
         *	Step3_1 : Lot Check 체크
         */
        this.fn_checkLot = function (row)
        {
        	var processDefType ="";
        	if (this.ds_processDefTypeInfo.getRowCount() > 0){
        		processDefType = this.nfn_nvl(this.ds_processDefTypeInfo.getColumn(0, "PROCESSDEFTYPE"), "");
        	}
        	var lotId = this.ds_lotList.getColumn(row, "LOTID");

        	this.ds_lotInfo.clearData();
        	this.ds_search.setColumn(0, "PROCESSSTATE",			"Wait");
        	this.ds_search.setColumn(0, "VERSION", 				"10001");
        	this.ds_search.setColumn(0, "SQL_ID", 				"selectLotInfoByProcess");
        	this.ds_search.setColumn(0, "LOT_ID", 				lotId);

        	var sSvcID 			= "selectLotInfoByProcess";
        	var sController 	= "/pcm07300/selectCustomQuery.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_lotInfo=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs); /* Step 3_2 호출 */
        };


        /*
         * Step5 : 분할,전달사항,특기사항,공정SPEC 조회
         */
        this.fn_searchOthers = function()
        {
        	this.ds_comment.clearData();
        	this.ds_operationSpec.clearData();

        	var sSvcID 			= "selectOtherInfo";
        	var sController 	= "/pcm06900/selectOtherInfo.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets  	= "ds_comment=output1 ds_operationSpec=output2";
        	var sArgs 		  	= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);
        }

        /*
         * 설비 조회
         */
        this.fn_searchEquipment = function()
        {
        	this.ds_equipmentParam.clearData();
        	this.ds_equipmentParam.addRow();
        	this.ds_equipmentParam.setColumn(0, "ENTERPRISEID", 		this.gf_getEnterpriseId());
        	this.ds_equipmentParam.setColumn(0, "PLANTID", 				this.gf_getSiteType() );
        	this.ds_equipmentParam.setColumn(0, "LANGUAGETYPE", 		this.gf_getLanguageType());
        	this.ds_equipmentParam.setColumn(0, "LOTID", 				this.ds_search.getColumn(0, "LOTID"));
        	this.ds_equipmentParam.setColumn(0, "EQUIPMENTTYPE", 		"Production");
        	this.ds_equipmentParam.setColumn(0, "DETAILEQUIPMENTTYPE", 	"Main");
        	this.ds_equipmentParam.setColumn(0, "VERSION", 				"10031");

        	var sSvcID 			= "getEquipmentByArea";
        	var sController 	= "/pcm01800/getEquipmentByArea.do";
        	var sInDatasets 	= "INPUT=ds_equipmentParam";
        	var sOutDatasets 	= "ds_equipmentInfo=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
         this.fn_openPop = function(svcId, popId)
        {
        	// gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
        	//-----------------
        	// arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅
        	// popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        	// popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        	// rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        	// paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        	// paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        	// searchStr   : 팝업 조회조건 콤보값 = 조회 값
        	var popupId = svcId;
        	var oArg = {};
        	var opts = "width=650,height=500";

        	oArg.arg_type = "B";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_searchStr = "";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";

        	//품목코드 조회
        	if(svcId =="AREA_ID"){
        		var searchKey = this.div_work.form.divSearch.form.edt_area.value;
        		oArg.arg_type = "BA";
        		oArg.arg_paramCols = "ENTERPRISEID|PLANTID|AREATYPE|LANGUAGETYPE|USERID";
        		oArg.arg_paramValues = this.gf_getEnterpriseId()
        							+"|"+this.gf_getSiteType()
        							+"|Area"
        							+"|"+this.gf_getLanguageType()
        							+"|"+this.gf_getUserId();
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        		if(!this.nfn_isNull(searchKey)) {
        			oArg.arg_searchStr = "TXTAREA="+this.nfn_nvl(searchKey,"");
        		}
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId=="AREA_ID"){
        		this.ds_search.setColumn(0, "AREAID", rtn[0]);
        		this.ds_search.setColumn(0, "AREANAME", rtn[1]);
        		this.div_work.form.divSearch.form.edt_lotId.setFocus();
        	} else if(sPopupId=="SEARCH_DEFECT"){
        		var nRow = this.ds_InspectionList.rowcount == 1 ? 0 : this.ds_InspectionList.rowposition;
        		if(this.ds_InspectionList.findRow("SEGMENT_DEFECTCODE",rtn[5]) >= 0
        		&& this.ds_InspectionList.findRow("SEGMENT_DEFECTCODE",rtn[5]) != nRow ) {
        			this.ds_InspectionList.setColumn(nRow,"DEFECTCODE",			null);
        			this.ds_InspectionList.setColumn(nRow,"DEFECTCODENAME",		null);
        			this.ds_InspectionList.setColumn(nRow,"QCSEGMENTID",		null);
        			this.ds_InspectionList.setColumn(nRow,"QCSEGMENTNAME",		null);
        			this.ds_InspectionList.setColumn(nRow,"DECISIONDEGREE",		null);
        			this.ds_InspectionList.setColumn(nRow,"SEGMENT_DEFECTCODE",	null);
        			this.ds_InspectionList.setColumn(nRow,"SEGMENT_DEFECTNAME",	null);
        		} else {
        			this.ds_InspectionList.setColumn(nRow,"DEFECTCODE",			rtn[0]);
        			this.ds_InspectionList.setColumn(nRow,"DEFECTCODENAME",		rtn[1]);
        			this.ds_InspectionList.setColumn(nRow,"QCSEGMENTID",		rtn[2]);
        			this.ds_InspectionList.setColumn(nRow,"QCSEGMENTNAME",		rtn[3]);
        			this.ds_InspectionList.setColumn(nRow,"DECISIONDEGREE",		rtn[4]);
        			this.ds_InspectionList.setColumn(nRow,"SEGMENT_DEFECTCODE",	rtn[5]);
        			this.ds_InspectionList.setColumn(nRow,"SEGMENT_DEFECTNAME",	rtn[6]);
        		}

        	}
        }
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_checkUpdate = function()
        {
        	var bOk = true;
        	if (this.gfn_dsIsUpdated(this.ds_lotInfo)) {
        	//	bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        	}
        	return bOk;
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        //작업장 조회
        this.div_work_divSearch_btn_area_onclick = function(obj,e)
        {
        	this.fn_openPop("AREA_ID","P00148", null);
        };

        this.div_work_divSearch_edt_lotId_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		obj.updateToDataset();
        		this.fn_search();
        	}
        };

        this.div_work_divSearch_edt_area_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_work_divSearch_btn_area_onclick();
        	}
        };

        this.div_work_grd_lot_oncelldblclick = function(obj,e)
        {
        	var isCheck = this.ds_lotList.getColumn(e.row, "CHK");
        	if(isCheck =="1"){
        		this.ds_lotList.setColumn(e.row, "CHK", "");
        	} else {
        		this.ds_lotList.setColumn(e.row, "CHK", "1");
        	}
        	this.fn_checkLot(e.row);
        };
        this.grdInspectionList_onexpandup = function(obj,e)
        {
        	this.g_event = e;
        	if(e.row <0) return;

        	/* Form 에서 Grid Cell 기준으로 위치얻기 */
        	var objRect = obj.getCellRect(e.row, e.cell);

        	/* cell 기준 position으로 클라이언트 기준 X, Y 좌표를 스크린 기준 기준으로 바꾸어 위치얻기 */
        	this.nLeft = system.clientToScreenX(obj, objRect.left);
        	this.nTop = system.clientToScreenY(obj, objRect.bottom);

        	/* 스크린 기준 X, Y 좌표를 클라이언트 기준으로 바꾸어 위치얻기 */
        	this.nLeft = system.screenToClientX(nexacro.getApplication().mainframe, this.nLeft);
        	this.nTop = system.screenToClientY(nexacro.getApplication().mainframe, this.nTop);

        	if (this.nfn_isEqualCol(obj, e.cell, "REASONCONSUMABLELOTID"))
        	{
        		this.GetDefectReasonConsumableLot();
        	}

        	if (this.nfn_isEqualCol(obj, e.cell, "SEGMENT_DEFECTCODE"))
        	{
        		this.mfn_OpenDefectPopup();
        	}
        	else if (this.nfn_isEqualCol(obj, e.cell, "CONSUMABLEDEFNAME"))
        	{
        		this.GetReasonConsumableList();
        	} else if (this.nfn_isEqualCol(obj, e.cell, "REASONPROCESSSEGMENTNAME"))
        	{
        		this.GetDefectReasonProcesssegment();
        	}
        };

        this.mfn_OpenDefectPopup = function ()
        {
        	var mRow 		= 0;
        	var nRow 		= this.ds_InspectionList.rowcount == 1 ? 0 : this.ds_InspectionList.rowposition;
        	var popupId 	= "SEARCH_DEFECT";
        	var lotID 		= this.ds_InspectionList.getColumn(nRow,"LOTID");
        	var defectID 	= this.ds_InspectionList.getColumn(nRow,"SEGMENT_DEFECTCODE");
        	var qcSegmentID = this.ds_InspectionList.getColumn(nRow,"QCSEGMENTID");
        	var language 	= this.gf_getLanguageType();
        	var processSegmentId = this.nfn_nvl(this.ds_lotList.getColumn(this.ds_lotList.rowposition, "PROCESSSEGMENTID"), "");

        	var oArg = {};
        	oArg.arg_type 			= "BA";
        	oArg.arg_popupCd 		= "P00241";
        	oArg.arg_popupNm 		= "";
        	oArg.arg_rtnCols 		= "DEFECTCODE|DEFECTCODENAME|QCSEGMENTID|QCSEGMENTNAME|DECISIONDEGREE|SEGMENT_DEFECTCODE|SEGMENT_DEFECTNAME";
        	oArg.arg_paramCols 		= "LOTID|SEGMENTID|LANGUAGETYPE|VERSION";
        	oArg.arg_paramValues 	= lotID + "|" + this.qcSegmentID+"|"+this.gf_getLanguageType()+"|10003";
        	oArg.arg_searchStr	 	= this.gfn_isNull(defectID) ? "" : "DEFECTCODENAME=" + defectID ;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };

        this.pfn_CostomQueryCSM = function (ds_INPUT, ds_OUTPUT, query)
        {
        		if(ds_INPUT.getConstColIndex("SQL_ID") < 0) ds_INPUT.addColumn("SQL_ID", "String","255");
        		ds_INPUT.setColumn(0,"SQL_ID",query);
        		ds_OUTPUT.clearData(); //ds_cbo_ProdVersion

        		var sSvcID 			= query;
        		var sController 	= "/pcmCommon/selectCustomQuery.do";
        		var sInDatasets 	= "INPUT="+ ds_INPUT.name;
        		var sOutDatasets 	= ds_OUTPUT.name + "=output";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);
        };

        /*
         *	최하단 불량 검사 그리드에 원인품목 리스트를 다시 읽어옴.
         */
        this.GetReasonConsumableList = function ()
        {
        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");

        	this.ds_temp.setColumn(0, "LOTID", this.ds_InspectionList.getColumn(this.ds_InspectionList.rowposition, "LOTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));

        	this.pfn_CostomQueryCSM(this.ds_temp, this.ds_ReasonConsumableList, "selectReasonConsumableList");
        };

        /*
         *	최하단 불량 검사 그리드에 원인자재LOT 리스트를 다시 읽어옴.
         */
        this.GetDefectReasonConsumableLot = function ()
        {
        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");

        	this.ds_temp.setColumn(0, "LOTID", this.ds_InspectionList.getColumn(this.ds_InspectionList.rowposition, "LOTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));

        	this.pfn_CostomQueryCSM(this.ds_temp, this.ds_ReasonConsumableLot, "selectDefectReasonConsumableLot");
        };

        /*
         *	최하단 불량 검사 그리드에 원인공정 리스트를 다시 읽어옴.
         */
        this.GetDefectReasonProcesssegment = function ()
        {
        	this.ds_ReasonProcessSegment.filter("");

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");

        	this.ds_temp.setColumn(0, "LOTID", this.ds_InspectionList.getColumn(this.ds_InspectionList.rowposition, "REASONCONSUMABLELOTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));

        	this.pfn_CostomQueryCSM(this.ds_temp, this.ds_ReasonProcessSegment, "selectDefectReasonProcesssegment");
        };

        /*
         *	원인 품목 셀 팝업 그리드 활성화
         */
        this.pdv_ReasonConsumableList_grd_ReasonConsumableList_oncelldblclick = function(obj,e)
        {
        	//값 받아서 처리 로직 넣으세요
        	var sRow = this.ds_InspectionList.rowcount == 1 ? 0 : this.ds_InspectionList.rowposition;
        	var idver = this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"SPLITCONSUMABLEDEFIDVERSION");
        	var prodName = this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"CONSUMABLEDEFNAME");
        	var prodID = this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"CONSUMABLEDEFID");
        	var prodVer = this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"CONSUMABLEDEFVERSION");

        	this.ds_InspectionList.setColumn(sRow,"SPLITCONSUMABLEDEFIDVERSION",	idver);
        	this.ds_InspectionList.setColumn(sRow,"CONSUMABLEDEFNAME",				prodName);
        	this.ds_InspectionList.setColumn(sRow,"REASONCONSUMABLEDEFID",			prodID);
        	this.ds_InspectionList.setColumn(sRow,"REASONCONSUMABLEDEFVERSION",		prodVer);
        	this.pdv_ReasonConsumableList.closePopup();
        };

        /*
         *	원인 공정 셀 팝업 그리드 활성화
         */
        this.pdv_ReasonProcessSegment_grd_ReasonProcessSegment_oncelldblclick = function(obj,e)
        {
        	var sRow = this.ds_InspectionList.rowcount == 1 ? 0 : this.ds_InspectionList.rowposition;
        	var segName = this.ds_ReasonProcessSegment.getColumn(this.ds_ReasonProcessSegment.rowposition,"PROCESSSEGMENTNAME");
        	var segID = this.ds_ReasonProcessSegment.getColumn(this.ds_ReasonProcessSegment.rowposition,"PROCESSSEGMENTID");
        	var aeraID = this.ds_ReasonProcessSegment.getColumn(this.ds_ReasonProcessSegment.rowposition,"AREAID");
        	var aeraName = this.ds_ReasonProcessSegment.getColumn(this.ds_ReasonProcessSegment.rowposition,"AREANAME");

        	this.ds_InspectionList.setColumn(sRow,"REASONPROCESSSEGMENTID",segID);
        	this.ds_InspectionList.setColumn(sRow,"REASONPROCESSSEGMENTNAME",segName);
        	this.ds_InspectionList.setColumn(sRow,"REASONAREAID",aeraID);
        	this.ds_InspectionList.setColumn(sRow,"REASONAREANAME",aeraName);

        	this.pdv_ReasonProcessSegment.closePopup();
        };

        this.pdv_ReasonLotList_grd_ReasonLotList_oncelldblclick = function(obj,e)
        {
        	var sRow = this.ds_InspectionList.rowcount == 1 ? 0 : this.ds_InspectionList.rowposition;
        	var lotId = this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"LOTID");
        	this.ds_InspectionList.setColumn(sRow,"REASONCONSUMABLELOTID",lotId);
        	this.ds_InspectionList.setColumn(sRow,"REASONPROCESSSEGMENTID",null);
        	this.ds_InspectionList.setColumn(sRow,"REASONPROCESSSEGMENTNAME",null);
        	this.ds_InspectionList.setColumn(sRow,"REASONAREAID",null);
        	this.ds_InspectionList.setColumn(sRow,"REASONAREANAME",null);
        	this.pdv_ReasonLotList.closePopup();
        };

        this.ds_InspectionList_oncolumnchanged = function(obj,e)
        {
        	if(e.newvalue < 0 ) return;
        	switch(e.columnid) {
        	case "SPLITCONSUMABLEDEFIDVERSION":
        		obj.setColumn(e.row,"REASONCONSUMABLELOTID", ""); //원인 LOTID초기화
        		obj.setColumn(e.row,"REASONPROCESSSEGMENTID","");
        		obj.setColumn(e.row,"REASONPROCESSSEGMENTNAME","");
        		obj.setColumn(e.row,"REASONAREAID","");
        		obj.setColumn(e.row,"REASONAREANAME","");
        		this.ds_ReasonConsumableLot.filter("");
        		this.ds_ReasonConsumableLot.filter("SPLITCONSUMABLEDEFIDVERSION == '" + e.newvalue + "'")
        		break;
        	case "REASONPROCESSSEGMENTNAME" :
        		this.ds_ReasonProcessSegment.filter("");
        		this.ds_ReasonProcessSegment.filter("LOTID == '" + e.newvalue + "'")
        		break;
        	case "SEGMENT_DEFECTCODE" :
        	/*
        		if(e.newvalue != e.oldvalue){
        			this.ds_InspectionList.setColumn(e.row,"DEFECTCODE",null);
        			this.ds_InspectionList.setColumn(e.row,"DEFECTCODENAME",null);
        			this.ds_InspectionList.setColumn(e.row,"QCSEGMENTID",null);
        			this.ds_InspectionList.setColumn(e.row,"QCSEGMENTNAME",null);
        			this.ds_InspectionList.setColumn(e.row,"DECISIONDEGREE",null);
        			this.ds_InspectionList.setColumn(e.row,"SEGMENT_DEFECTNAME",null);
        		}
        		*/
        		break;
        	case "PNLQTY" :
        		this.mfn_defectChangePnlQty(e.newvalue);
        		if(this.pnlQty_enter)
        		{
        			obj.addRow();
        		}
        		break;
        	case "QTY" :
        		this.mfn_defectChangePcsQty(e.newvalue);
        		break;
        	default:
        	}
        };


        /*
         *	불량 검사 그리드에서 수량(PCS) 변경 시
         */
        this.mfn_defectChangePcsQty = function (pcsQty)
        {
        	var lotId = this.ds_InspectionList.getColumn(this.ds_InspectionList.rowposition, "LOTID");
        	var fRow = this.ds_lotList.findRow("LOTID", lotId);

        	this.ds_InspectionList.set_enableevent(false);
        	var pnlPerQty 	= nexacro.toNumber(this.ds_lotList.getColumn(fRow, "PANELPERQTY"));
        	//var pcsQty 		= nexacro.toNumber(this.ds_lotList.getColumn(fRow, "QTY"));
        	var pnlQty		= nexacro.ceil(pcsQty / pnlPerQty);
        	var defectRate 	= 0;
        //	var qty 		= (pnlPerQty * pnlQty);
        	var lotQty 		= nexacro.toNumber(this.ds_lotList.getColumn(fRow, "QTY"));

         	this.ds_InspectionList.setColumn(this.ds_InspectionList.rowposition, "PNLQTY", pnlQty);
         	this.ds_InspectionList.setColumn(this.ds_InspectionList.rowposition, "DEFECTRATE", (pcsQty/lotQty) * 100);
         	this.ds_InspectionList.set_enableevent(true);

        };


        /*
         *	불량 검사 그리드에서 수량(PNL) 변경 시
         */
        this.mfn_defectChangePnlQty = function (pnlQty)
        {
        	this.ds_InspectionList.set_enableevent(false);
        	var lotId = this.ds_InspectionList.getColumn(this.ds_InspectionList.rowposition, "LOTID");
        	var fRow = this.ds_lotList.findRow("LOTID", lotId);

        	var pnlPerQty 	= nexacro.toNumber(this.ds_lotList.getColumn(fRow, "PANELPERQTY"));
        	var pcsQty 		= nexacro.toNumber(this.ds_lotList.getColumn(fRow, "QTY"));
        	var defectRate 	= 0;
        	var qty 		= (pnlPerQty * pnlQty);

        	this.ds_InspectionList.setColumn(this.ds_InspectionList.rowposition, "QTY", qty);
         	this.ds_InspectionList.setColumn(this.ds_InspectionList.rowposition, "DEFECTRATE", (qty/pcsQty) * 100);
         	this.ds_InspectionList.set_enableevent(true);


        //  	var total = nexacro.toNumber(this.ds_InspectionList.getCaseSum("LOTID=='"+lotId+"'","QTY"));
        //  	this.ds_lotList.set_enableevent(false);
        //  	this.ds_lotList.setColumn(fRow, "DEFECTQTY" ,total);
        //  	this.ds_lotList.set_enableevent(true);
        };


        this.btnAddRow_ds_InspectionList_onclick = function(obj,e)
        {
        	if(this.ds_lotList.rowcount == 0)
        	{
        		this.gfn_Message("NotSeletedLot", "", "warning", "ok");
        		return;
        	}

        	var lotId		= this.ds_lotList.getColumn(this.ds_lotList.rowposition, "LOTID");
        	var nRow 		= this.ds_InspectionList.addRow();
        	this.ds_InspectionList.setColumn(nRow, "LOTID", lotId);
        };

        this.fn_deleteDefect = function(obj,e)
        {
        	this.ds_InspectionList.deleteRow(this.ds_InspectionList.rowposition);

        };

        this.div_work_tab_main_tpgDefect_grdInspectionList_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		if(obj.currentcol==1){
        			this.pnlQty_enter = false;
        			obj.moveToNextCell();
        			var nRow = this.ds_InspectionList.rowposition;
        			this.ds_InspectionList.setColumn(nRow,"SEGMENT_DEFECTNAME","");
        			obj.updateToDataset();
        			this.mfn_OpenDefectPopup();
        			return;
        		} else if (obj.currentcol==4){
        			this.pnlQty_enter = true;
        		}
        	} else {
        		this.pnlQty_enter = false;
        	}
        };

        this.div_work_tab_tpgDefect_grdInspectionList_ondropdown = function(obj,e)
        {
        	var consumLotId = this.ds_InspectionList.getColumn(this.ds_InspectionList.rowposition, "SPLITCONSUMABLEDEFIDVERSION");
        	this.ds_ReasonConsumableLot.filter("SPLITCONSUMABLEDEFIDVERSION == '" + consumLotId + "'")
        };

        this.div_work_tab_tpgDefect_grdInspectionList_oncloseup = function(obj,e)
        {
        	this.ds_ReasonConsumableLot.filter(""); //필터 초기화
        };

        this.ds_InspectionList_cancolumnchange = function(obj,e)
        {
        	var lotId 		= obj.getColumn(e.row, "LOTID");
        	var fRow 		= this.ds_lotList.findRow("LOTID", lotId);
        	var pnlPerQty 	= nexacro.toNumber(this.ds_lotList.getColumn(fRow, "PANELPERQTY"));
        	var pnlQty 		= nexacro.toNumber(this.ds_lotList.getColumn(fRow, "PANELQTY"));
        	var pcsQty 		= nexacro.toNumber(this.ds_lotList.getColumn(fRow, "QTY"));

        	//this.ds_InspectionList.set_enableevent(false);

        	//getCaseSum("LOTID='"+lotId+"'","QTY")
        	switch(e.columnid) {
        	case "PNLQTY" :
        		{
        			if(e.newvalue !="0" && pnlQty == 0) {
        				this.gfn_Message("NoInspectionQtyAndPnl", null, "warning", "ok");//검사 수량을(를) 먼저 입력하세요.
        				return false;
        			}
        			var sum1 = this.ds_InspectionList.getCaseSum("LOTID=='"+lotId+"'","PNLQTY") ;
        			var sum2 = this.ds_InspectionList.getCaseSum("LOTID=='"+lotId+"'","PNLQTY") ;

        			var pnlQtySum = this.ds_InspectionList.getCaseSum("LOTID=='"+lotId+"'","PNLQTY") + this.nfn_nvl(e.newvalue,0) - this.nfn_nvl(e.oldvalue,0);

        			if(pnlQty < pnlQtySum ){
        				var arg = [this.nfn_getDictionaryname('DEFECTQTY',true), this.nfn_getDictionaryname('INSPECTIONQTY',true)];
        				this.gfn_Message("CanNotToMuch", arg, "warning", "ok");//불량 수량은(는) 검사 수량보다 많을 수 없습니다.
        				return false;
        			}

        			break;
        		}
        	case "QTY" :
        		{

        			if(e.newvalue !="0" && this.ds_lotList.getColumn(this.ds_lotList.position, "PANELQTY") == "0") {
        				this.gfn_Message("NoInspectionQtyAndPnl", null, "warning", "ok");//검사 수량을(를) 먼저 입력하세요.
        				return false;
        			}

        			var pcsQtySum = this.ds_InspectionList.getCaseSum("LOTID=='"+lotId+"'","QTY") + e.newvalue - e.oldvalue;
        			if(pcsQty < pcsQtySum ){
        				var arg = [this.nfn_getDictionaryname('DEFECTQTY',true), this.nfn_getDictionaryname('INSPECTIONQTY',true)];
        				this.gfn_Message("CanNotToMuch", arg, "warning", "ok");//불량 수량은(는) 검사 수량보다 많을 수 없습니다.
        				return false;
        			}
        			break;
        		}
        	}
        	return true;

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_customReset.addEventHandler("onclick",this.fn_reset,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.divSearch.form.btn_area.addEventHandler("onclick",this.div_work_divSearch_btn_area_onclick,this);
            this.div_work.form.divSearch.form.edt_area.addEventHandler("onkeydown",this.div_work_divSearch_edt_area_onkeydown,this);
            this.div_work.form.divSearch.form.edt_area.addEventHandler("onchanged",this.div_work_divSearch_edt_area_onchanged,this);
            this.div_work.form.divSearch.form.edt_lotId.addEventHandler("onkeydown",this.div_work_divSearch_edt_lotId_onkeydown,this);
            this.div_work.form.grd_productInfo.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_grd_productInfo_onexpandup,this);
            this.div_work.form.grd_productInfo.addEventHandler("oncloseup",this.div_work_tab_Tabpage1_grd_productInfo_oncloseup,this);
            this.div_work.form.tab.tpgDefect.form.grdInspectionList.addEventHandler("onexpandup",this.grdInspectionList_onexpandup,this);
            this.div_work.form.tab.tpgDefect.form.grdInspectionList.addEventHandler("onkeydown",this.div_work_tab_main_tpgDefect_grdInspectionList_onkeydown,this);
            this.div_work.form.tab.tpgDefect.form.grdInspectionList.addEventHandler("ondropdown",this.div_work_tab_tpgDefect_grdInspectionList_ondropdown,this);
            this.div_work.form.tab.tpgDefect.form.grdInspectionList.addEventHandler("oncloseup",this.div_work_tab_tpgDefect_grdInspectionList_oncloseup,this);
            this.div_work.form.tab.tpgDefect.form.btnAddRow_ds_InspectionList.addEventHandler("onclick",this.btnAddRow_ds_InspectionList_onclick,this);
            this.div_work.form.tab.tpgDefect.form.btn_customdelRow.addEventHandler("onclick",this.fn_deleteDefect,this);
            this.div_work.form.grd_lot.addEventHandler("onheadclick",this.div_work_tab_Tabpage1_grd_lot_onheadclick,this);
            this.div_work.form.grd_lot.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_grd_lot_onexpandup,this);
            this.pdv_ReasonProcessSegment.form.grd_ReasonProcessSegment.addEventHandler("oncelldblclick",this.pdv_ReasonProcessSegment_grd_ReasonProcessSegment_oncelldblclick,this);
            this.pdv_ReasonConsumableList.form.grd_ReasonConsumableList.addEventHandler("oncelldblclick",this.pdv_ReasonConsumableList_grd_ReasonConsumableList_oncelldblclick,this);
            this.pdv_ReasonLotList.form.grd_ReasonLotList.addEventHandler("oncelldblclick",this.pdv_ReasonLotList_grd_ReasonLotList_oncelldblclick,this);
            this.ds_lotList.addEventHandler("onrowposchanged",this.ds_lotList_onrowposchanged,this);
            this.ds_lotListSave.addEventHandler("onrowposchanged",this.ds_lotList_onrowposchanged,this);
            this.ds_equipmentInfo.addEventHandler("onrowposchanged",this.ds_equipmentInfo_onrowposchanged,this);
            this.ds_equipmentInfo.addEventHandler("oncolumnchanged",this.ds_equipmentInfo_oncolumnchanged,this);
            this.ds_InspectionList.addEventHandler("oncolumnchanged",this.ds_InspectionList_oncolumnchanged,this);
            this.ds_InspectionList.addEventHandler("cancolumnchange",this.ds_InspectionList_cancolumnchange,this);
            this.ds_equipmentSave.addEventHandler("oncolumnchanged",this.ds_equipment_oncolumnchanged,this);
        };
        this.loadIncludeScript("PCM07400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
