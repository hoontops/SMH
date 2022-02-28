(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PDA00400M");
            this.set_titletext("작업완료");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_message", this);
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WRITEPROCESSSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"WRITEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISREAD\" type=\"STRING\" size=\"256\"/><Column id=\"CONTEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"SHOWTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ISREAD\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dt", this);
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"WRITEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dtStaying", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"STAYINGLOCKSTD\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTSTATESTAYINGTIMECNV\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processStateDictionary", this);
            obj._setContents("<ColumnInfo><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"CODENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processDefTypeInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"입력공정\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"메시지유형\" type=\"STRING\" size=\"256\"/><Column id=\"등록자\" type=\"STRING\" size=\"256\"/><Column id=\"등록일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"입력공정\">RTR UV-LASER</Col><Col id=\"작업장\">RTR UV_B2F</Col><Col id=\"메시지유형\">Comment</Col><Col id=\"등록자\">빌트원</Col><Col id=\"공정수순\">10</Col><Col id=\"공정명\">RTR UV-LASER</Col><Col id=\"등록일\">20200118151539</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_paramMain", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ENTERPRISEID\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_body", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKER\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GOODPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTLIST\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISBATCH\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTRCLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFSHIPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFTAKEINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISBEFOREROLLCUTTING\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_plantParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_isWipSurveyResult", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISWIPSURVEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_menuParam", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"UOMCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"P_TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_PROCESSTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_worker", this);
            obj._setContents("<ColumnInfo><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dataInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKER\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GOODPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PRINTWEEK\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSITAREA\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISINSPECTIONPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"ISREPAIRPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"HASANALYSISTARGET\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORKPUBLISH\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKRESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defect", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"QTY_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_equipment", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECIPEID\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processSpec", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LSL\" type=\"STRING\" size=\"256\"/><Column id=\"SL\" type=\"STRING\" size=\"256\"/><Column id=\"USL\" type=\"STRING\" size=\"256\"/><Column id=\"ISCURRENTPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTPATHSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comment", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ISCURRENTPROCESS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_work", this);
            obj._setContents("<ColumnInfo><Column id=\"WORKER\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GOODPNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PRINTWEEK\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSITAREA\" type=\"STRING\" size=\"256\"/><Column id=\"WORKER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GOODQTY\">0</Col><Col id=\"GOODPNLQTY\">0</Col><Col id=\"DEFECTQTY\">0</Col><Col id=\"DEFECTPNLQTY\">0</Col><Col id=\"COMMENT\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_messageDtl", this);
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"WRITEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ProcessDefTypeByProcess", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_transitArea", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_unitOfMaterial", this);
            obj._setContents("<ColumnInfo><Column id=\"UOMDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UOMDEFNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ReasonConsumableList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ReasonProcessSegment", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ReasonConsumableLot", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumable", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTLOTQTY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_standardRequirement", this);
            obj._setContents("<ColumnInfo><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"STANDARDREQUIREMENTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REQUIREMENTQTY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_durable", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CLEANLIMIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_BORDurable", this);
            obj._setContents("<ColumnInfo><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CLEANLIMIT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_equipmentRecipe", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECIPEID\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumableListTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumableDistinctList", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_checkParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_priorityConsumableList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_alternativeList", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_overQtyDurableLot", this);
            obj._setContents("<ColumnInfo><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_overCleanQtyDurableLot", this);
            obj._setContents("<ColumnInfo><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputQtyList", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_standardRequirementInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"STANDARDREQUIREMENTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REQUIREMENTQTY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_step", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_durableParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLESTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_durableTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CLEANLIMIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cboequipment", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"desc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\"/><Col id=\"desc\">선택</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_durableSave", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CLEANLIMIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_standardRequirementParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOMPLETE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_equipmentParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILEQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_areaParam", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotParam", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pathType", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_transitAreaParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title00_00","15","142",null,"39","354",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","145","142",null,"39","90",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00","15","182",null,"39","354",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","145","182",null,"39","30",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("false");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00_00","15","222",null,"39","354",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("공정명");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00_00_00","15","262",null,"39","354",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("자원");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_RESOURCENAME","145","262",null,"39","30",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00_00_00_00","15","102",null,"39","354",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("LOT 번호");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","145","102",null,"39","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_PROCESSSEGMENTNAME","145","222",null,"39","30",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","265","506","122","56",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("작업완료");
            obj.set_tooltiptext("작업완료");
            obj.set_font("normal 16pt/normal \"Arial\"");
            obj.set_cssclass("btn_SA_search");
            obj.set_background("darkslategray");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear","121","506","122","56",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            obj.set_font("normal 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_border("1px solid gray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_isPRODUCT",null,"8","86","42","178",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("양산");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            obj.set_font("normal 16pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_isRework",null,"8","86","42","92",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("재작업");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            obj.set_font("normal 16pt/normal \"Arial\"");
            obj.set_background("BLUE");
            obj.set_color("white");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_isRCLot",null,"8","86","42","6",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("변경품");
            obj.set_border("1px solid gray");
            obj.set_textAlign("center");
            obj.set_font("normal 16pt/normal \"Arial\"");
            obj.set_background("RED");
            obj.set_color("white");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_01","15","62",null,"39","354",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_area","145","62",null,"39","80",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"62","51","39","29",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","20","523","41","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00_00_00_01","15","302",null,"39","354",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("수량");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_PNLQTY","145","302","85","39",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","238","302","49","39",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("PNL");
            obj.set_font("normal 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_PCSQTY",null,"302","85","39","90",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00",null,"302","49","39","33",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("PCS");
            obj.set_font("normal 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_innerRevisionText",null,"142","59","39","30",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_font("normal 700 16px/normal \"Dotum\",\"돋움\",\"Arial\"");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_visible("true");
            obj.set_text("FA1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_msg","2","5","108","48",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("전달사항");
            obj.set_font("normal bold 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_msg","12","784","376","392",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_message","0","39",null,null,"0","167",null,null,null,null,this.pdv_msg.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_message");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"227\"/><Column size=\"79\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"수순\" tooltiptext=\"USERSEQUENCE\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"등록자\" tooltiptext=\"WRITER\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:USERSEQUENCE\" textAlign=\"center\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"bind:WRITER\" displaytype=\"mask\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"center\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/></Band></Format></Formats>");
            this.pdv_msg.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"40","0",null,null,null,null,null,this.pdv_msg.form);
            obj.set_taborder("1");
            obj.set_border("1px solid gray");
            obj.set_text("주요 전달 사항");
            obj.set_textAlign("center");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            obj.set_background("darkslategray");
            obj.set_color("white");
            this.pdv_msg.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"0","35","35","0",null,null,null,null,null,this.pdv_msg.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.pdv_msg.addChild(obj.name, obj);

            obj = new WebBrowser("Web","0","226",null,null,"0","0",null,null,null,null,this.pdv_msg.form);
            obj.set_taborder("3");
            this.pdv_msg.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_msg","52","784","376","392",null,null,null,null,null,null,this.pdv_msg.form);
            obj.set_visible("false");
            obj.set_background("white");
            this.pdv_msg.addChild(obj.name, obj);

            obj = new Grid("grd_message","0","39",null,null,"0","167",null,null,null,null,this.pdv_msg.form.pdv_msg.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_message");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"227\"/><Column size=\"79\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"수순\" tooltiptext=\"USERSEQUENCE\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"등록자\" tooltiptext=\"WRITER\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:USERSEQUENCE\" textAlign=\"center\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"bind:WRITER\" displaytype=\"mask\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"center\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/></Band></Format></Formats>");
            this.pdv_msg.form.pdv_msg.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"40","0",null,null,null,null,null,this.pdv_msg.form.pdv_msg.form);
            obj.set_taborder("1");
            obj.set_border("1px solid gray");
            obj.set_text("주요 전달 사항");
            obj.set_textAlign("center");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            obj.set_background("darkslategray");
            obj.set_color("white");
            this.pdv_msg.form.pdv_msg.addChild(obj.name, obj);

            obj = new Button("btn_close00",null,"6","25","25","4",null,null,null,null,null,this.pdv_msg.form.pdv_msg.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.pdv_msg.form.pdv_msg.addChild(obj.name, obj);

            obj = new WebBrowser("Web","0","226",null,null,"0","0",null,null,null,null,this.pdv_msg.form.pdv_msg.form);
            obj.set_taborder("3");
            this.pdv_msg.form.pdv_msg.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_01_00","15","342",null,"39","354",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("작업자");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_worker","145","342",null,"39","80",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_work",null,"342","51","39","29",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_finder");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_01_00_00","15","382",null,"39","354",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("작업설비");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_equipment","145","382",null,"39","80",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_enable("true");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_equipment",null,"382","51","39","29",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_finder");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_01_00_00_00","15","422",null,"39","354",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("자재Lot#");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_consumableLotId","145","422",null,"39","80",null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_enable("true");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_consumable",null,"422","51","39","29",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("btn_WF_finder");
            obj.set_enable("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_worker_id","71","523","41","20",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_durable","472","784","376","502",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"40","0",null,null,null,null,null,this.pdv_durable.form);
            obj.set_taborder("0");
            obj.set_border("1px solid gray");
            obj.set_text("작업설비 및 치공구 등록");
            obj.set_textAlign("center");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            obj.set_background("darkslategray");
            obj.set_color("white");
            this.pdv_durable.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"0","35","35","0",null,null,null,null,null,this.pdv_durable.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.pdv_durable.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_msg","52","784","376","392",null,null,null,null,null,null,this.pdv_durable.form);
            obj.set_visible("false");
            obj.set_background("white");
            this.pdv_durable.addChild(obj.name, obj);

            obj = new Grid("grd_message","0","39",null,null,"0","167",null,null,null,null,this.pdv_durable.form.pdv_msg.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_message");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"227\"/><Column size=\"79\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"수순\" tooltiptext=\"USERSEQUENCE\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"등록자\" tooltiptext=\"WRITER\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:USERSEQUENCE\" textAlign=\"center\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"bind:WRITER\" displaytype=\"mask\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"center\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/></Band></Format></Formats>");
            this.pdv_durable.form.pdv_msg.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"40","0",null,null,null,null,null,this.pdv_durable.form.pdv_msg.form);
            obj.set_taborder("1");
            obj.set_border("1px solid gray");
            obj.set_text("주요 전달 사항");
            obj.set_textAlign("center");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            obj.set_background("darkslategray");
            obj.set_color("white");
            this.pdv_durable.form.pdv_msg.addChild(obj.name, obj);

            obj = new Button("btn_close00",null,"6","25","25","4",null,null,null,null,null,this.pdv_durable.form.pdv_msg.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.pdv_durable.form.pdv_msg.addChild(obj.name, obj);

            obj = new WebBrowser("Web","0","226",null,null,"0","0",null,null,null,null,this.pdv_durable.form.pdv_msg.form);
            obj.set_taborder("3");
            this.pdv_durable.form.pdv_msg.addChild(obj.name, obj);

            obj = new Grid("grd_durable","0","316",null,null,"0.00%","0",null,null,null,null,this.pdv_durable.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_durable");
            obj.set_cssclass("grd_sub");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"145\"/><Column size=\"177\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"31\"/></Rows><Band id=\"head\"><Cell text=\"Tool No.\" tooltiptext=\"DURABLELOTID\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"설비\" tooltiptext=\"EQUIPMENT\" cssclass=\"cell_point\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:DURABLELOTID\" textAlign=\"left\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"bind:EQUIPMENTID\" displaytype=\"combocontrol\" combocodecol=\"code\" combodatacol=\"desc\" combodataset=\"ds_cboequipment\" edittype=\"combo\" comboautoselect=\"true\" combodisplaynulltext=\"선택\" combodisplaynulltype=\"nulltext\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/></Band></Format></Formats>");
            this.pdv_durable.addChild(obj.name, obj);

            obj = new Grid("grd_equipment","0","34",null,null,"0","223",null,null,null,null,this.pdv_durable.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_equipment");
            obj.set_cssclass("grd_sub");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"329\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"설비명\" tooltiptext=\"EQUIPMENTNAME\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"Receipe Id\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"Recipe 버전\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/><Cell col=\"3\" text=\"Recipe Type\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/><Cell col=\"4\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:EQUIPMENTNAME\" textAlign=\"left\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"bind:RECIPEID\" textAlign=\"left\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"bind:RECIPEVERSION\" textAlign=\"left\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/><Cell col=\"3\" text=\"bind:RECIPETYPE\" textAlign=\"left\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/><Cell col=\"4\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" font=\"normal 700 14pt/normal &quot;Arial&quot;\"/></Band></Format></Formats>");
            this.pdv_durable.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_01_00_00_00","5","284","143","29",null,null,null,null,null,null,this.pdv_durable.form);
            obj.set_taborder("4");
            obj.set_text("치공구 등록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 14pt/normal \"Arial\"");
            this.pdv_durable.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_consumable","852","784","376","502",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"40","0",null,null,null,null,null,this.pdv_consumable.form);
            obj.set_taborder("0");
            obj.set_border("1px solid gray");
            obj.set_text("자재(작업시작)");
            obj.set_textAlign("center");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            obj.set_background("darkslategray");
            obj.set_color("white");
            this.pdv_consumable.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"0","35","35","0",null,null,null,null,null,this.pdv_consumable.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.pdv_consumable.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_msg","52","784","376","392",null,null,null,null,null,null,this.pdv_consumable.form);
            obj.set_visible("false");
            obj.set_background("white");
            this.pdv_consumable.addChild(obj.name, obj);

            obj = new Grid("grd_message","0","39",null,null,"0","167",null,null,null,null,this.pdv_consumable.form.pdv_msg.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_message");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"227\"/><Column size=\"79\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"수순\" tooltiptext=\"USERSEQUENCE\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"등록자\" tooltiptext=\"WRITER\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:USERSEQUENCE\" textAlign=\"center\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"bind:WRITER\" displaytype=\"mask\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"center\" font=\"normal 700 16px/normal &quot;Arial&quot;\"/></Band></Format></Formats>");
            this.pdv_consumable.form.pdv_msg.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"40","0",null,null,null,null,null,this.pdv_consumable.form.pdv_msg.form);
            obj.set_taborder("1");
            obj.set_border("1px solid gray");
            obj.set_text("주요 전달 사항");
            obj.set_textAlign("center");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            obj.set_background("darkslategray");
            obj.set_color("white");
            this.pdv_consumable.form.pdv_msg.addChild(obj.name, obj);

            obj = new Button("btn_close00",null,"6","25","25","4",null,null,null,null,null,this.pdv_consumable.form.pdv_msg.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.pdv_consumable.form.pdv_msg.addChild(obj.name, obj);

            obj = new WebBrowser("Web","0","226",null,null,"0","0",null,null,null,null,this.pdv_consumable.form.pdv_msg.form);
            obj.set_taborder("3");
            this.pdv_consumable.form.pdv_msg.addChild(obj.name, obj);

            obj = new Grid("grd_consumable","0","84",null,null,"0","210",null,null,null,null,this.pdv_consumable.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_consumable");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"86\"/><Column size=\"152\"/><Column size=\"136\"/><Column size=\"62\"/><Column size=\"60\"/><Column size=\"58\"/><Column size=\"61\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"자재ID\" tooltiptext=\"bind:CONSUMABLELOTID\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"자재명\" tooltiptext=\"CONSUMABLEDEFNAME\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"자재 LOT No.\" tooltiptext=\"CONSUMABLELOTID\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"3\" text=\"재고수량\" tooltiptext=\"STOCKQTY\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"4\" text=\"가용수량\" tooltiptext=\"AVAILABLEQTY\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"5\" text=\"투입수량\" tooltiptext=\"INPUTQTY\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"6\" text=\"할당수량\" tooltiptext=\"LOTUSINGQTY\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"bind:CONSUMABLELOTID\" textAlign=\"left\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"3\" text=\"bind:STOCKQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"4\" text=\"bind:AVAILABLEQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"5\" text=\"bind:INPUTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"6\" text=\"bind:LOTUSINGQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" edittype=\"none\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/></Band></Format></Formats>");
            this.pdv_consumable.addChild(obj.name, obj);

            obj = new Static("sta_consumableLotIdStart","1","42","115","39",null,null,null,null,null,null,this.pdv_consumable.form);
            obj.set_taborder("3");
            obj.set_text("자재 LOT");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_fittocontents("width");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.pdv_consumable.addChild(obj.name, obj);

            obj = new Edit("edt_consumableLotIdStart","123","42","245","39",null,null,null,null,null,null,this.pdv_consumable.form);
            obj.set_taborder("4");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.pdv_consumable.addChild(obj.name, obj);

            obj = new Grid("grd_standardRequirement","0",null,null,"198","0","0",null,null,null,null,this.pdv_consumable.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_standardRequirement");
            obj.set_cssclass("grd_sub");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"98\"/><Column size=\"181\"/><Column size=\"99\"/><Column size=\"69\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"자재ID\" tooltiptext=\"bind:CONSUMABLEDEFID\" font=\"normal bold 13pt/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"자재명\" tooltiptext=\"CONSUMABLEDEFNAME\" font=\"normal bold 13pt/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"기준소요량\" tooltiptext=\"STANDARDREQUIREMENTQTY\" font=\"normal bold 13pt/normal &quot;Arial&quot;\"/><Cell col=\"3\" text=\"소요량\" tooltiptext=\"REQUIREMENTQTY\" font=\"normal bold 13pt/normal &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\" font=\"normal bold 13pt/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\" font=\"normal bold 13pt/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"bind:STANDARDREQUIREMENTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" font=\"normal bold 13pt/normal &quot;Arial&quot;\"/><Cell col=\"3\" text=\"bind:REQUIREMENTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" font=\"normal bold 13pt/normal &quot;Arial&quot;\"/></Band></Format></Formats>");
            this.pdv_consumable.addChild(obj.name, obj);

            obj = new Div("div_consumable","586","310","400","461",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_background("white");
            obj.set_formscrollbartype("none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_standardRequirement","0",null,null,"198","0","0",null,null,null,null,this.div_consumable.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_standardRequirement");
            obj.set_cssclass("grd_sub");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"101\"/><Column size=\"181\"/><Column size=\"110\"/><Column size=\"81\"/></Columns><Rows><Row size=\"29\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"자재ID\" tooltiptext=\"bind:CONSUMABLEDEFID\" font=\"normal 700 12pt/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"자재명\" tooltiptext=\"CONSUMABLEDEFNAME\" font=\"normal 700 12pt/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"기준소요량\" tooltiptext=\"STANDARDREQUIREMENTQTY\" font=\"normal 700 12pt/normal &quot;Arial&quot;\"/><Cell col=\"3\" text=\"소요량\" tooltiptext=\"REQUIREMENTQTY\" font=\"normal 700 12pt/normal &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:CONSUMABLEDEFID\" textAlign=\"left\" font=\"normal 700 12pt/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\" font=\"normal 700 12pt/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"bind:STANDARDREQUIREMENTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" font=\"normal 700 12pt/normal &quot;Arial&quot;\"/><Cell col=\"3\" text=\"bind:REQUIREMENTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" font=\"normal 700 12pt/normal &quot;Arial&quot;\"/></Band></Format></Formats>");
            this.div_consumable.addChild(obj.name, obj);

            obj = new Grid("grd_consumable","0","84",null,null,"0","210",null,null,null,null,this.div_consumable.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_consumable");
            obj.set_autofittype("none");
            obj.set_scrollbartype("auto");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"82\"/><Column size=\"152\"/><Column size=\"158\"/><Column size=\"62\"/><Column size=\"60\"/><Column size=\"58\"/><Column size=\"78\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"자재ID\" tooltiptext=\"bind:CONSUMABLELOTID\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"자재명\" tooltiptext=\"CONSUMABLEDEFNAME\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"자재 LOT No.\" tooltiptext=\"CONSUMABLELOTID\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"3\" text=\"재고수량\" tooltiptext=\"STOCKQTY\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"4\" text=\"가용수량\" tooltiptext=\"AVAILABLEQTY\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"5\" text=\"투입수량\" tooltiptext=\"INPUTQTY\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"6\" text=\"Lot 사용수량\" tooltiptext=\"LOTUSINGQTY\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:CONSUMABLEDEFID\" textAlign=\"left\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"2\" text=\"bind:CONSUMABLELOTID\" textAlign=\"left\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"3\" text=\"bind:STOCKQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"4\" text=\"bind:AVAILABLEQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"5\" text=\"bind:INPUTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/><Cell col=\"6\" text=\"bind:LOTUSINGQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" edittype=\"none\" font=\"normal bold 13px/normal &quot;Arial&quot;\"/></Band></Format></Formats>");
            this.div_consumable.addChild(obj.name, obj);

            obj = new Edit("edt_consumableLotIdStart","113","42","245","39",null,null,null,null,null,null,this.div_consumable.form);
            obj.set_taborder("2");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.div_consumable.addChild(obj.name, obj);

            obj = new Static("sta_consumableLotIdStart","1","42","115","39",null,null,null,null,null,null,this.div_consumable.form);
            obj.set_taborder("3");
            obj.set_text("자재 LOT");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_fittocontents("width");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.div_consumable.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"40","-20",null,null,null,null,null,this.div_consumable.form);
            obj.set_taborder("4");
            obj.set_border("1px solid gray");
            obj.set_text("자재(작업시작)");
            obj.set_textAlign("center");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            obj.set_background("darkslategray");
            obj.set_color("white");
            this.div_consumable.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"0","45","45","0",null,null,null,null,null,this.div_consumable.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.div_consumable.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_consumable",null,"57","39","24","-2",null,null,null,null,null,this.div_consumable.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdDel");
            this.div_consumable.addChild(obj.name, obj);

            obj = new Static("sta_transitArea","15","461",null,"39","344",null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("인계작업장");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_transitArea","498","250",null,"37","-323",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_font("normal 15pt/normal \"Arial\"");
            obj.set_innerdataset("ds_transitArea");
            obj.set_codecolumn("AREAID");
            obj.set_datacolumn("AREANAME");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_resource","145","462",null,"39","80",null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_enable("true");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_resource",null,"462","51","39","29",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_finder");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_resource","526","397","305","120",null,null,null,null,null,null,this);
            obj.set_text("pdv_00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_resource","0","0",null,null,"0","0",null,null,null,null,this.pdv_resource.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_transitArea");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"303\"/><Column size=\"303\"/></Columns><Rows><Row size=\"33\" band=\"head\"/><Row size=\"33\"/></Rows><Band id=\"head\"><Cell text=\"자원\" font=\"normal bold 16px/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"작업장\" font=\"normal bold 16px/normal &quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:RESOURCEAREANAME\" font=\"normal bold 16px/normal &quot;Arial&quot;\"/><Cell col=\"1\" text=\"bind:AREANAME\" font=\"normal bold 16px/normal &quot;Arial&quot;\"/></Band></Format></Formats>");
            this.pdv_resource.addChild(obj.name, obj);

            obj = new Edit("edt_resource_id","71","503","41","20",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_equipment_id","71","545","41","20",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,750,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_PRODUCTDEFID","value","ds_lotInfo","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_PRODUCTDEFNAME","value","ds_lotInfo","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_RESOURCENAME","value","ds_lotInfo","RESOURCENAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_PROCESSSEGMENTNAME","value","ds_lotInfo","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_PNLQTY","value","ds_lotInfo","PNLQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_PCSQTY","value","ds_lotInfo","PCSQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_worker","value","ds_work","WORKER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edt_worker_id","value","ds_work","WORKER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_equipment_id","value","ds_work","WORKER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","sta_isPRODUCT","text","ds_lotInfo","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PDA00400M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PDA00400M.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PDA00400M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PDA00400M.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("PDA00400M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PDA00400M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 작업시작
         * 파일명 		: PDA00300M.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.01.11
         *
         * 설  명		: 작업시작
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.01.11	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_pcm.xjs"); /*include "lib::lib_pcm.xjs"*/;
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/;	//MTM 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        var ProcessType = {
        		LotAccept :	0   	// 인수 등록
        	  , StartWork : 1   		// 작업 시작
        	  , WorkCompletion : 2 	//작업 완료
        	  , SelectedLotId : 3 		//인계 등록
         };
        var Constants = {
        		WaitForReceive :	"WaitForReceive"  	// 인수 대기
        	  , Wait :	"Wait"  	// 인수
        	  , Run :	"Run"  	// 작업
        	  , WaitForSend :	"WaitForSend"  	// 인수 대기
        	  , NormaLotCardPath :	"NormaLotCardPath"  	// 일반 Lot Card 위치
        	  , NormaLotCardPath_YP :	"NormaLotCardPath_YP"  	// 일반 Lot Card 위치(영풍)
        	  , ReworkLotCardPath :	"Micube.SmartMES.Commons.Report.LotCardProduction_Rework.repx"  	// 인수 대기
        	  , YOUNGPOONG :	"YOUNGPOONG"  	// 영풍
        	  , INTERFLEX :	"INTERFLEX"  	// 영풍
         };

        this.currProcessType = ProcessType.WorkCompletion;
        this.processDefType;
        this.pnlQty_enter = false;
        this._lotId;
        this.currStepType;
        this.g_areaId;

        this.g_LotId       = "";
        this.g_PanelperQty = -1;
        this.g_PnlQty      = -1;
        this.g_PcsQty      = -1;
        this.queryVersion = "";

        this._isInspectionProcess = false;
        this._isRepairProcess = false;
        this.isReworkPublish = false;
        this.hasAnalysisTarget = false;
        this.subProcessDefId = "";
        this.subProcessDefVersion = "";
        this.reworkResourceId = "";
        this.reworkAreaId = "";

        var bMsgShow= false;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	//4Step 다국어 조회
        	this.ds_step.clearData();
        	var sSvcID 			= "selectStepList";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_step=output";
        	var sArgs 		  	= "";
        	sArgs 			+= this.gfn_setParam("SQL_ID", "selectStepList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);
        	if(!this.gfn_isNull(this.parent.parent.areaId)){
        		this.edt_area_id.set_value(this.parent.parent.areaId);
        		this.edt_area.set_value(this.parent.parent.areaNm);
        		this.edt_lotId.setFocus();
        	}
        /*
        	if(!this.gfn_isNull(this.parent.parent.workerId)){
        		this.edt_worker_id.set_value(this.parent.parent.workerId);
        		this.edt_worker.set_value(this.parent.parent.workerNm);
        	}
        	if(!this.gfn_isNull(this.parent.parent.equipmentId)){
        		this.edt_equipment_id.set_value(this.parent.parent.equipmentId);
        		this.edt_equipment.set_value(this.parent.parent.equipmentNm);
        	}
        */
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	var component = this;
        	var strColIdList = "edt_area_id,edt_lotId";
        	var strColNmList = "AREA,LOTID";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	this.ds_lotInfo.clearData();
        	this.ds_work.clearData();
        	this.ds_work.addRow();
        	this.ds_comment.clearData();
        	this.ds_processSpec.clearData();
        	this.ds_equipment.clearData();
        	this.ds_message.clearData();
        	this.ds_messageDtl.clearData();
        	this.ds_defect.clearData();
        	this.ds_consumable.clearData();
        	this.ds_standardRequirement.clearData();
        	this.ds_durable.clearData();
        	this.ds_BORDurable.clearData();
        	this.ds_ProcessDefTypeByProcess.clearData();

        	this.g_areaId = this.edt_area_id.value;
        	var msg = "";
        	var v2 = this.pdv_msg.form.Web.getProperty("document").getProperty("body");
        	v2.setProperty( "innerHTML", msg);
        	this.pdv_msg.form.Web.setProperty( "document", v2 );
        	bMsgShow= false;

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "AREAID", this.edt_area_id.value);
        	this.ds_search.setColumn(0, "LOTID", this.edt_lotId.value);
        	this.ds_search.setColumn(0, "PROCESSSTATE", "Run");
        	this.ds_search.setColumn(0, "MATERIALTYPE",		"Consumable");
        	this.ds_search.setColumn(0, "FORM_PROCESSTYPE", this.currProcessType);

        	var sSvcID = "selectAreaResourceByLot";
        	var sController = "/pcm01700/selectAreaResourceByLot.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_area=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	if(!this.gfn_isNull(this.parent.parent.areaId)){
        		this.edt_area_id.set_value(this.parent.parent.areaId);
        		this.edt_area.set_value(this.parent.parent.areaNm);
        		this.edt_lotId.setFocus();
        	}
        	if(!this.gfn_isNull(this.parent.parent.workerId)){
        		this.edt_worker_id.set_value(this.parent.parent.workerId);
        		this.edt_worker.set_value(this.parent.parent.workerNm);
        	}
        	if(!this.gfn_isNull(this.parent.parent.equipmentId)){
        		this.edt_equipment_id.set_value(this.parent.parent.equipmentId);
        		this.edt_equipment.set_value(this.parent.parent.equipmentNm);
        	}
        	this.sta_isPRODUCT.set_text("");
        	this.sta_isPRODUCT.set_visible(false);
        	this.ds_transitArea.clearData();
        	this.edt_area.setFocus();
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
        	if (this.ds_lotInfo.rowcount < 1) {
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        //	if (!this.gfn_GridKeyCheck(this.div_work.form.tab.tpgDefect.form.grd_defect, ["DEFECTCODE","DEFECTCODENAME","PNLQTY","QTY"])) return;

        	//메인 저장시
        	if(!this.fn_onValidateContent()) return;

        	// TODO : 저장 Rule 변경

        	var worker 			 = this.ds_work.getColumn(0, "WORKER_ID");
        	var lotId 			 = this.ds_lotInfo.getColumn(0, "LOTID");
        	var processPathId 	 = this.ds_lotInfo.getColumn(0, "PROCESSPATHID");
        	var processSegmentId = this.ds_lotInfo.getColumn(0, "PROCESSSEGMENTID");
        	var unit 			 = this.ds_work.getColumn(0, "UNIT");
        	var goodQty 		 = nexacro.toNumber(this.nfn_nvl(this.ds_work.getColumn(0, "GOODQTY"), "0"));
        	var goodPnlQty 		 = nexacro.toNumber(this.nfn_nvl(this.ds_work.getColumn(0, "GOODPNLQTY"), "0"));
        	var defectQty        = nexacro.toNumber(this.nfn_nvl(this.ds_work.getColumn(0, "DEFECTQTY"), "0"));
        	var defectPnlQty     = nexacro.toNumber(this.nfn_nvl(this.ds_work.getColumn(0, "DEFECTPNLQTY"), "0"));
        	var comment          = this.ds_work.getColumn(0, "COMMENT");

        	var equipmentId = "";
        	this.ds_equipment.filter("CHK=='1'");
        	for(var i = 0; i < this.ds_equipment.rowcount; i++)
        	{
        		equipmentId = equipmentId + (i==0?"":",") +this.ds_equipment.getColumn(i, "EQUIPMENTID")  ;
        	}
        	this.ds_equipment.filter("");

        	// 치공구가 금형인 경우 보증타수, 연마기준타수 체크
        	for(var i = 0; i < this.ds_durable.rowcount; i++)
        	{
        		var totalUsedCount 	= nexacro.toNumber(this.nfn_nvl(this.ds_durable.getColumn(i , "TOTALUSEDCOUNT"), "0"));
        		var usingQty 		= nexacro.toNumber(this.nfn_nvl(this.ds_durable.getColumn(i , "USINGQTY"), "0"));
        		var usedLimit 		= nexacro.toNumber(this.nfn_nvl(this.ds_durable.getColumn(i , "USEDLIMIT"), "0"));
        		var cleanLimit 		= nexacro.toNumber(this.nfn_nvl(this.ds_durable.getColumn(i , "CLEANLIMIT"), "0"));

        		if (usingQty + totalUsedCount > usedLimit)
        		{
        			var nRow = this.ds_overQtyDurableLot.addRow();
        			this.ds_overQtyDurableLot.setColumn(nRow, "DURABLELOTID", this.ds_durable.getColumn(i, "DURABLELOTID"));
        		}
        		if (usingQty + totalUsedCount > cleanLimit)
        		{
        			var nRow = this.ds_overCleanQtyDurableLot.addRow();
        			this.ds_overCleanQtyDurableLot.setColumn(nRow, "DURABLELOTID", this.ds_durable.getColumn(i, "DURABLELOTID"));
        		}
        	}

        	var durableLotId = "";
        	if (this.ds_overQtyDurableLot.rowcount > 0)
        	{
        	/*
        		for(var i = 0; i < this.ds_overQtyDurableLot.rowcount; i++)
        			durableLotId = durableLotId + (i==0?"":",") +this.ds_overQtyDurableLot.getColumn(i, "DURABLELOTID")  ;
        	*/
        		// 치공구의 사용 횟수가 보증타수를 초과합니다. Durable Lot Id = {0}
        		this.gfn_Message("DurableUsingQtyLargerThanUsedLimit", [durableLotId], "warning", "ok");
        		return;
        	}

        	if (this.ds_overCleanQtyDurableLot.rowcount > 0)
        	{

        	/*
        		for(var i = 0; i < this.ds_overCleanQtyDurableLot.rowcount; i++)
        			durableLotId = durableLotId + (i==0?"":",") +this.ds_overQtyDurableLot.getColumn(i, "DURABLELOTID")  ;
        	*/
        		// 치공구의 사용 횟수가 연마기준타수를 초과합니다. Durable Lot Id = {0}
        		var bOK =	this.gfn_Message("DurableUsingQtyLargerThanCleanLimit", [this.ds_overCleanQtyDurableLot.getColumn(0,"DURABLELOTID")], "conf", "yesno");
        		if(!bOK) return;
        	}
        	/*
        	if(this.ds_consumable.getSum("AVAILABLEQTY")<this.ds_consumable.getSum("INPUTQTY"))
        	{
        		this.gfn_Message("CantLargerThan", ["투입수량","가용수량"], "warning", "ok");//{0}는 {1}보다 클 수 없습니다.
        		this.div_work.form.tab.set_tabindex(3);
        		return;
        	}
        	for(var i=0; i<this.ds_consumable.rowcount;i++){
        		var nRow = this.ds_standardRequirement.findRow("CONSUMABLEDEFID",this.ds_consumable.getColumn(i,"CONSUMABLEDEFID"));
        		if(nRow>=0){
        			var sumInputQty = this.ds_consumable.getCaseSum("CONSUMABLEDEFID=='"+this.ds_consumable.getColumn(i,"CONSUMABLEDEFID")+"'","INPUTQTY");
        			trace("sumInputQty-->"+sumInputQty);
        			trace("REQUIREMENTQTY-->"+this.ds_standardRequirement.getColumn(nRow,"REQUIREMENTQTY"));
        			//if(nexacro.toNumber(this.ds_consumable.getColumn(i,"INPUTQTY")) < nexacro.toNumber(this.ds_standardRequirement.getColumn(nRow,"REQUIREMENTQTY"))){
        			if(nexacro.toNumber(sumInputQty) < nexacro.toNumber(this.ds_standardRequirement.getColumn(nRow,"REQUIREMENTQTY"))){
        				this.gfn_Message("InputqtyLessThsnRequirementqty", null, "warning", "ok");// 소요량보다 투입수량이 작습니다.
        				return false;
        			}
        		}
        	}
        	*/
        	this.ds_durableSave.clearData();
        	for(var i=0; i<this.ds_durable.rowcount; i++){
        		if(!this.gfn_isNull(this.ds_durable.getColumn(i,"EQUIPMENTID"))){
        			var nRow = this.ds_durableSave.addRow();
        			this.ds_durableSave.copyRow(nRow,this.ds_durable,i);
        		}
        	}

        	/* 인계작업장 관련 로직 추가 */
        	var strTransitArea = "";
        	var strResourceid = "";
        	//var strResourceid = this.cbo_transitArea.value;
        	var strResourceid = this.edt_resource_id.value;
        	if(!this.gfn_isNull(strResourceid)){
        		strTransitArea = this.ds_transitArea.lookup("RESOURCEID",strResourceid,"AREAID");
        	}

        	this.ds_dataInfo.clearData();
        	this.ds_dataInfo.addRow();
        	this.ds_dataInfo.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_dataInfo.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_dataInfo.setColumn(0, "WORKER", worker);
        	this.ds_dataInfo.setColumn(0, "LOTID", lotId);
        	this.ds_dataInfo.setColumn(0, "PROCESSPATHID", processPathId);
        	this.ds_dataInfo.setColumn(0, "PROCESSSEGMENTID", processSegmentId);
        	this.ds_dataInfo.setColumn(0, "DEFECTUNIT", unit);
        	this.ds_dataInfo.setColumn(0, "GOODQTY", goodQty);
        	this.ds_dataInfo.setColumn(0, "GOODPNLQTY", goodPnlQty);
        	this.ds_dataInfo.setColumn(0, "DEFECTQTY", defectQty);
        	this.ds_dataInfo.setColumn(0, "DEFECTPNLQTY", defectPnlQty);
        	this.ds_dataInfo.setColumn(0, "COMMENT", comment);
        	this.ds_dataInfo.setColumn(0, "EQUIPMENTID", equipmentId);

        //	this.ds_dataInfo.setColumn(0, "PRINTWEEK"        , this.nfn_nvl(printWeek, ""));
        	this.ds_dataInfo.setColumn(0, "RESOURCEID"       , this.nfn_nvl(strResourceid, ""));
        	this.ds_dataInfo.setColumn(0, "TRANSITAREA"      , this.nfn_nvl(strTransitArea, ""));
        //	this.ds_dataInfo.setColumn(0, "COMMENT"          , this.nfn_nvl(comment, ""));
        	this.ds_dataInfo.setColumn(0, "PROCESSSEGMENTTYPE"    , this.ds_lotInfo.getColumn(0, "PROCESSSEGMENTTYPE"));  //-->
        	this.ds_dataInfo.setColumn(0, "ISINSPECTIONPROCESS"   , this.nfn_nvl(this._isInspectionProcess, "")); //-->
        	this.ds_dataInfo.setColumn(0, "ISREPAIRPROCESS"       , this.nfn_nvl(this._isRepairProcess, "")); //-->
        	this.ds_dataInfo.setColumn(0, "HASANALYSISTARGET"       , this.hasAnalysisTarget); //-->
        	this.ds_dataInfo.setColumn(0, "ISREWORKPUBLISH"       , this.isReworkPublish);  //-->
        	this.ds_dataInfo.setColumn(0, "SUBPROCESSDEFID"       , this.nfn_nvl(this.subProcessDefId, ""));  //-->
        	this.ds_dataInfo.setColumn(0, "SUBPROCESSDEFVERSION"       , this.nfn_nvl(this.subProcessDefVersion, "")); //-->
        	this.ds_dataInfo.setColumn(0, "REWORKRESOURCEID"       , this.nfn_nvl(this.reworkResourceId, "")); //-->
        	this.ds_dataInfo.setColumn(0, "REWORKAREAID"       , this.nfn_nvl(this.reworkAreaId, "")); //-->
        	this.ds_dataInfo.setColumn(0, "VERSION"          , "");
        	var sSvcID = "saveTrackOutLot";
        	var sController = "/pcmWorkProcess/saveTrackOutLot.do";
        	var sInDatasets = "ds_dataInfo=ds_dataInfo ds_defectList=ds_defect ds_consumableList=ds_consumable ds_equipmentList=ds_equipment:U ds_durableList=ds_durableSave";
        	var sOutDatasets = "";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        //필수 자재 체크
        this.fn_CheckConusumable = function()
        {
        	for(var i=0; i<this.ds_standardRequirement.rowcount; i++)
        	{
        		var nRow = this.ds_consumable.findRow("CONSUMABLEDEFID",this.ds_standardRequirement.getColumn(i,"CONSUMABLEDEFID"));
        		if(nRow<0){
        			return false;
        		}
        	}
        	return true;
        }
        this.fn_CheckDurable = function()
        {
        	for(var i=0; i<this.ds_BORDurable.rowcount; i++)
        	{
        		var nRow = this.ds_durable.findRow("DURABLEDEFID",this.ds_BORDurable.getColumn(i,"DURABLEDEFID"));
        		if(nRow<0){
        			return false;
        		}
        	}
        	return true;
        }
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

        /*
         * 설비 조회
         */
        this.fn_searchEquipment = function()
        {
        	//작업 완료
        	this.ds_equipmentParam.clearData();
        	this.ds_equipmentParam.addRow();
        	this.ds_equipmentParam.setColumn(0, "ENTERPRISEID", 		this.gf_getEnterpriseId());
        	this.ds_equipmentParam.setColumn(0, "PLANTID", 				this.gf_getSiteType() );
        	this.ds_equipmentParam.setColumn(0, "LANGUAGETYPE", 		this.gf_getLanguageType());
        	this.ds_equipmentParam.setColumn(0, "LOTID", 				this.edt_lotId.value);
        	this.ds_equipmentParam.setColumn(0, "EQUIPMENTTYPE", 		"Production");
        	this.ds_equipmentParam.setColumn(0, "DETAILEQUIPMENTTYPE", 	"Main");
        	this.ds_equipmentParam.setColumn(0, "VERSION", 				"10031");

        	var sSvcID = "getLotEquipmentByArea";
        	var sController = "/pcm01900/getLotEquipmentByArea.do";
        	var sInDatasets = "INPUT=ds_equipmentParam";
        	var sOutDatasets = "ds_equipmentInfo=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /*
         * 자재 조회
         */
        this.fn_searchConsumable = function ()
         {
        	this.ds_standardRequirementParam.clearData();
        	this.ds_standardRequirementParam.addRow();
        	this.ds_standardRequirementParam.setColumn(0, "ENTERPRISEID", 	this.gf_getEnterpriseId());
        	this.ds_standardRequirementParam.setColumn(0, "PLANTID", 		this.gf_getSiteType());
        	this.ds_standardRequirementParam.setColumn(0, "LOTID", 			this.edt_lotId.value);
        	this.ds_standardRequirementParam.setColumn(0, "VERSION", 		this.queryVersion);
        	this.ds_standardRequirementParam.setColumn(0, "WORKCOMPLETE", 	"Y");

        	var sSvcID 			= "selectConsumableListByProcessWorkCompleteAndByProcess";
        	var sController 	= "/pcm01900/selectConsumableListByProcessWorkCompleteAndByProcess.do";
        	var sInDatasets 	= "INPUT1=ds_standardRequirementParam INPUT2=ds_standardRequirementParam";
        	var sOutDatasets 	= "ds_consumable=output1 ds_standardRequirement=output2";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 치공구 조회
         */
         this.fn_searchDurable = function ()
         {
        	// 치공구(작업완료
        	this.ds_durableParam.clearData();
        	this.ds_durableParam.addRow();
        	this.ds_durableParam.setColumn(0, "ENTERPRISEID", 	this.gf_getEnterpriseId());
        	this.ds_durableParam.setColumn(0, "PLANTID", 		this.gf_getSiteType());
        	this.ds_durableParam.setColumn(0, "LANGUAGETYPE", 	this.gf_getLanguageType());
        	this.ds_durableParam.setColumn(0, "LOTID", 			this.edt_lotId.value);
        	this.ds_durableParam.setColumn(0, "MATERIALTYPE", 	"Durable");
        	this.ds_durableParam.setColumn(0, "VERSION", 		this.queryVersion);

        	var sSvcID 			= "getDurableDEFByBOR";
        	var sController 	= "/pcm01900/getDurableDEFByBOR.do";
        	var sInDatasets 	= "INPUT=ds_durableParam";
        	var sOutDatasets 	= "ds_BORDurable=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 치공구 조회
         */
         this.fn_searchSelectDurable = function ()
         {
        	this.ds_durableParam.clearData();
        	this.ds_durableParam.addRow();
        	this.ds_durableParam.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_durableParam.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_durableParam.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_durableParam.setColumn(0, "LOTID", this.edt_lotId.value);
        	this.ds_durableParam.setColumn(0, "MATERIALTYPE", "Durable");
        	this.ds_durableParam.setColumn(0, "VERSION", "10002");


        	var sSvcID = "selectDurableListByProcessWorkComplete";
        	var sController = "/pcm01900/selectDurableListByProcessWorkComplete.do";
        	var sInDatasets = "INPUT=ds_durableParam";
        	var sOutDatasets = "ds_durable=output";
        	var sArgs = "";
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
        		case "selectAreaResourceByLot":
        			if(this.ds_area.rowcount==0){
        				this.gfn_Message("NotExistLotNo", null, "info", "ok");
        				this.edt_lotId.set_value("");
        				return;
        			}
        			if(this.gfn_isNull(this.ds_area.getColumn(0,"AREAID")) || this.gfn_isNull(this.ds_area.getColumn(0,"RESOURCEID"))){
        				var popupId 				= "SEARCH_RESOURCE";
        				var oArg 					= {};
        				oArg.arg_lotId 				= this.nfn_nvl(this.ds_area.getColumn(0,"LOTID"), "");
        				oArg.arg_processSegmentId 	= this.nfn_nvl(this.ds_area.getColumn(0,"PROCESSSEGMENTID"), "");
        				oArg.arg_areaId 			= this.edt_area_id.value;
        				this.gfn_openPopup(popupId,"pda::PDA00202P.xfdl",oArg,"width=456,height=170"); /* Step1_2 popupAfter 호출 */
        				return;
        			}

        			var sSvcID = "selectLotInfoByProcess";
        			var sController = "/pda00600/selectLotInfoByProcess.do";
        			var sInDatasets = "INPUT=ds_search";
        //			var sOutDatasets = "ds_lotInfo=ds_lotInfo ds_ProcessDefTypeByProcess=ds_ProcessDefTypeByProcess ds_processSpec=ds_processSpecds_message=ds_message ds_worker=ds_worker";
        			var sOutDatasets = "ds_lotInfo=ds_lotInfo ds_ProcessDefTypeByProcess=ds_ProcessDefTypeByProcess ds_comment=ds_comment ds_processSpec=ds_processSpec ds_equipment=ds_equipment ds_message=ds_message ds_consumable=ds_consumable ds_standardRequirement=ds_standardRequirement ds_durable=ds_durable ds_BORDurable=ds_BORDurable ds_ReasonConsumableList=ds_ReasonConsumableList ds_ReasonConsumableLot=ds_ReasonConsumableLot ds_ReasonProcessSegment=ds_ReasonProcessSegment ds_worker=ds_worker";
        			var sArgs = "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        			break;
        		case "selectLotInfoByProcess" :

        			if(this.ds_lotInfo.rowcount==0){
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				this.fn_clearDetailInfo();
        				this.edt_lotId.set_value("");
        				this.edt_lotId.setFocus();
        				break;
        				return;
        			}
        			this.sta_isPRODUCT.set_visible(true);
        			//설비
        			var equipmentId = "";
        			var equipment = "";
        			for(var i = 0; i < this.ds_equipment.rowcount; i++)
        			{
        				equipmentId = equipmentId + (i==0?"":",") +this.ds_equipment.getColumn(i, "EQUIPMENTID");
        				equipment = equipment + (i==0?"":",") +this.ds_equipment.getColumn(i, "EQUIPMENTNAME");

        				var nRow = this.ds_cboequipment.addRow();
        				this.ds_cboequipment.setColumn(nRow,"code",this.ds_equipment.getColumn(i,"EQUIPMENTID"));
        				this.ds_cboequipment.setColumn(nRow,"desc",this.ds_equipment.getColumn(i,"EQUIPMENTNAME"));
        			}
        			this.edt_equipment.set_value(equipment);
        			this.edt_equipment_id.set_value(equipmentId);
        			//자재
        			var consumableLotId = "";
        			for(var i = 0; i < this.ds_consumable.rowcount; i++)
        			{
        				consumableLotId = consumableLotId + (i==0?"":",") +this.ds_consumable.getColumn(i, "CONSUMABLELOTID");
        			}
        			this.edt_consumableLotId.set_value(consumableLotId);
        			if (this.ds_worker.getRowCount() > 0)
        			{
        				var workerId = "";
        				var workerName = "";

        				for(var i = 0; i < this.ds_worker.getRowCount(); i++)
        				{
        					workerId   += (i==0?"":",") + this.ds_worker.getColumn(i, "WORKERID");
        					workerName += (i==0?"":",") + this.ds_worker.getColumn(i, "WORKERNAME");
        				}

        				this.edt_worker_id.set_value(workerId);
        				this.edt_worker.set_value(workerName);
        			}
        			if(this.gfn_isNull(this.edt_worker_id.value)){
        				if(!this.gfn_isNull(this.parent.parent.workerId)){
        					this.ds_work.clearData();
        					this.ds_work.addRow();
        					this.edt_worker_id.set_value(this.parent.parent.workerId);
        					this.edt_worker.set_value(this.parent.parent.workerNm);
        				}
        			}

        			this.g_LotId       = this.edt_lotId.value;
        			this.g_PanelperQty = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PANELPERQTY"), "0"));
        			this.g_PnlQty      = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PNLQTY"), "0"));
        			this.g_PcsQty      = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PCSQTY"), "0"));

        			this.processDefType = this.ds_ProcessDefTypeByProcess.getColumn(0,"PROCESSDEFTYPE");
        			if(!this.fn_checkLotProcessStateByStepType(this.currProcessType, this.ds_lotInfo.getColumn(0,"PROCESSSTATE"), this.ds_lotInfo.getColumn(0,"STEPTYPE"))){
        				this.fn_clearDetailInfo();
        				this.edt_lotId.set_value("");
        				this.edt_lotId.setFocus();
        				break;
        			}
        			this.queryVersion = "10001";

        			if (this.processDefType == "Rework")
        				this.queryVersion = "10011";

        			this.fn_setControlsInfo2();
        			this.fn_searchStaying();
        			//this.fn_StayReasonCode_CallBack();

        			this.fn_searchEquipment();	//설비 조회
        			this.fn_searchConsumable(); //자재 조회
        			this.fn_searchDurable(); 	//치공구 조회
        			this.fn_searchSelectDurable();

        			bMsgShow= false;
        			if (this.ds_message.getRowCount() > 0)
        			{
        				var isRealAllMessage = true;

        				for(var i = 0; i < this.ds_message.getRowCount(); i++)
        				{
        					if(this.nfn_nvl(this.ds_message.getColumn(i, "ISREAD"), "") == "N" && this.ds_message.getColumn(i, "SHOWTYPE")=="Y")
        					{
        						isRealAllMessage = false;
        						break;
        					}
        				}
        				if (!isRealAllMessage)
        				{
        					this.btn_msg_onclick(this.btn_msg,nexacro.ClickEventInfo);
        				}
        			}

        			break;
        		case "getLotEquipmentByArea":
        			break;
        		case "getProcessDefTypeByProcess":
        			if (this.ds_processDefTypeInfo.rowcount > 0)
        			{
        				this.processDefType = this.nfn_nvl(this.ds_processDefTypeInfo.getColumn(0, "PROCESSDEFTYPE"), "");
        			}

        			this.queryVersion = "10001";

        			if (this.processDefType == "Rework")
        				this.queryVersion = "10011";

        			var lotId = this.edt_lotId.value;

        			this.ds_search.clearData();
        			this.ds_search.addRow();
        			this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        			this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());
        			this.ds_search.setColumn(0, "AREAID", this.g_areaId);
        			this.ds_search.setColumn(0, "LOTID", lotId);
        			this.ds_search.setColumn(0, "PROCESSSTATE","WaitForReceive");
        			this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        			if(this.processDefType == "Rework")
        				this.ds_search.setColumn(0, "VERSION", "10032");
        			else
        				this.ds_search.setColumn(0, "VERSION", "10031");

        			var sSvcID = "selectLotInfoByProcess";
        			var sController = "/pcm01700/selectLotInfoByProcess.do";
        			var sInDatasets = "INPUT=ds_paramMain";
        			var sOutDatasets = "ds_lotInfo=output";
        			var sArgs = "";


        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        			break;

        		case "getCheckStaying":
        			if (this.nfn_nvl(this.ds_dtStaying.getColumn(0, "ISLOCKING"), "") == "Y"){
        				// 채공팝업
        				var popupId = "SEARCH_StayReasonCode";
        				var oArg = {};

        				oArg.arg_ds_dtStaying = this.ds_dtStaying;
        				this.gfn_openPopup(popupId,"pda::PDA00201P.xfdl",oArg,"width=450,height=409");	// Step2_2 popupAfter 호출
        			}else{
        				this.fn_StayReasonCode_CallBack();
        			}

        			break;
        		case "getPlantIsWipSurvey":
        			if(this.ds_lotInfo.rowcount==0) return;
        			if (this.ds_isWipSurveyResult.rowcount > 0)
        			{
        				var isWipSurvey = this.ds_isWipSurveyResult.getColumn(0, "ISWIPSURVEY");

        				if (isWipSurvey == "Y")
        				{
        					// 재공실사가 진행 중 입니다. {0}을 진행할 수 없습니다.
        					this.gfn_Message("PLANTINWIPSURVEY", "인수 등록", "warning", "ok");
        					this.fn_clearDetailInfo();

        					this.edt_lotId.set_value("");
        					this.edt_lotId.setFocus();
        					return;
        				}
        			}

        			//InTransit 상태 체크
        			if(this.ds_lotInfo.getColumn(0, "LOTSTATE") == "InTransit")
        			{
        				// 물류창고 입/출고 처리 대상입니다
        				this.gfn_Message("CheckOSLogisticStatus", null, "warning", "ok");
        				this.fn_clearDetailInfo();
        				return;
        			}
        			else if (this.ds_lotInfo.getColumn(0, "LOTSTATE") == "OverSeaInTransit")
        			{
        				// 해외 물류 이동중입니다.
        				this.gfn_Message("CheckOverSeasLogistic", null, "warning", "ok");
        				this.fn_clearDetailInfo();
        				return;
        			}
        			var pathType = this.ds_lotInfo.getColumn(0, "PATHTYPE");
        			trace("pathType-->"+pathType);
        			trace("this.processDefType-->"+this.processDefType);
        			trace("SELFTAKEINSPRESULT-->"+this.ds_lotInfo.getColumn(0, "SELFTAKEINSPRESULT"));

        			if (pathType.substring(0, 5) != "Start" && this.processDefType != "Rework" && this.processDefType != "Repeat" && this.ds_lotInfo.getColumn(0, "SELFTAKEINSPRESULT") == "N")
        			{
        				// 입고검사 결과가 없습니다. 입고검사 화면으로 이동하시겠습니까? Lot No. : {0}
        				//var drResult = this.gfn_confirm("NotExistsInspectionResult", "information", [this.edt_lotId.value]);
        				//var bOK = this.gfn_Message("NotExistsInspectionResult", this.edt_lotId.value, "conf", "yesno");
        				//var lotId = this.edt_lotId.value;
        				this.gfn_Message("입고검사 결과가 없습니다. 입고검사를 진행하세요.", null, "warning", "ok");
        				this.fn_clearDetailInfo();

        				this.edt_lotId.set_value("");
        				this.edt_lotId.setFocus();
        				return;
        /*
        				if (bOK) //YES
        				{
        					this.ds_menuParam.clearData();
        					this.ds_menuParam.addRow();
        					this.ds_menuParam.setColumn(0, "AREAID"  , this.edt_area_id.value);
        					this.ds_menuParam.setColumn(0, "AREANAME", this.edt_area.value);
        					this.ds_menuParam.setColumn(0, "LOTID", lotId);

        					//입고검사로 이동
        					var sUrl = "pcm::PCM01500M.xfdl";

        					// arryList 타입전달 예)
        					var objArgs = {
        						menuName : "LotIncommingInspection",
        						objList : [this.SelectRow2JsonString(this.ds_menuParam)]
        					};

        					var bReload = true;
        					this.gfn_goPage(sUrl, objArgs, bReload);

        				}
        */
        				return;
        			}


        			if (this.fn_checkRCLot(this.ds_lotInfo))
        			{
        				this.fn_productRevision_CallBack();
        			}else{
        				this.fn_clearDetailInfo();
        				this.edt_lotId.set_value("");
        				this.edt_lotId.setFocus();
        			}

        			break;

        		case "saveTrackOutLot":

        			this.fn_clearDetailInfo();

        			this.g_LotId       = "";
        			this.edt_lotId.set_value("");
        			this.edt_lotId.setFocus();

        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장되었습니다.

        			break;
        		case "saveLotResourceId":
        			this.fn_RESOURCE_CallBack();

        			break;

        		case "getConsumableLotByProcess":
        			trace("getConsumableLotByProcess...");
        			if (this.ds_consumableListTemp.rowcount == 0){
        				//BOM에 등록되지 않은 자재 Lot입니다.
        				this.gfn_Message("NotRegisterdInBOM", [currentWarehouseId, consumableWarehouseId], "info", "ok");
        				return;
        			}
        			if (this.ds_consumableListTemp.rowcount > 0)
        			{
        				var currentAreaId    = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "AREAID"), "");
        				var consumableAreaId = this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "AREAID"), "");

        				var currentWarehouseId    = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "WAREHOUSEID"), "");
        				var consumableWarehouseId = this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "WAREHOUSEID"), "");

        				var consumableState = this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "CONSUMABLESTATE"), "");

        				if (currentWarehouseId != consumableWarehouseId)
        				{
        					// 현재 창고에서 보유하고 있는 자재가 아닙니다. 현재 창고 ID : {0}, 소유 창고 ID : {1}
        					this.gfn_Message("ConsumableNotInWarehouse", [currentWarehouseId, consumableWarehouseId], "info", "ok");
        					return;
        				}

        				if (consumableState == "Consumed")
        				{
        					// 해당 자재 Lot은 사용이 완료 된 Lot 입니다. Lot Id : {0}
        					this.gfn_Message("ConsumedConsumableLot", [this._lotId], "info", "ok");
        					return;
        				}

        				if (consumableState == "Scrapped")
        				{
        					// 해당 자재 Lot은 폐기 처리 된 Lot 입니다. Lot Id : {0}
        					this.gfn_Message("ScrappedConsumableLot", [this._lotId], "info", "ok");
        					return;
        				}


        				var inputQty = nexacro.toNumber(this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "INPUTQTY"), "0"));

        				if (inputQty <= 0)
        				{
        					var stockQty    = nexacro.toNumber(this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "STOCKQTY"), "0"));
        					var lotUsingQty = nexacro.toNumber(this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "LOTUSINGQTY"), "0"));

        					// 해당 자재 Lot은 다른 Lot에서 모두 사용되었습니다. 재고수량 : {0}, Lot 사용수량 : {1}
        					this.gfn_Message("ConsumableLotIsAlreadyUsingInLot", [stockQty.ToString("#,##0.#####"), lotUsingQty.ToString("#,##0.#####")], "info", "ok");
        					return;
        				}


        				var consumableLotId 	 = this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "CONSUMABLELOTID"), "");
        				var consumableDefId      = this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "CONSUMABLEDEFID"), "");
        				var consumableDefVersion = this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "CONSUMABLEDEFVERSION"), "");


        				//ds_consumableList KEYCOLUMN group by SUM(INPUTQTY)


        				var vKeyColumn = "";
        				var nRow = -1;
        				this.ds_inputQtyList.clearData();
        				for(var i=0; i<this.ds_consumable.rowcount; i++)
        				{
        					vKeyColumn = this.ds_consumable.getColumn(i, "KEYCOLUMN");
        					if(this.ds_inputQtyList.findRow("KEYCOLUMN",vKeyColumn)>=0) continue;

        					nRow = this.ds_inputQtyList.addRow();
        					this.ds_inputQtyList.setColumn(nRow, "KEYCOLUMN", vKeyColumn);
        					this.ds_inputQtyList.setColumn(nRow, "INPUTQTY", this.ds_consumable.getCaseSum("KEYCOLUMN=='"+vKeyColumn+"'","INPUTQTY"));

        					trace("this.ds_consumable.rowcount 1>>" + this.ds_consumable.rowcount);
        					trace("this.ds_consumable.getSum() >>" + this.ds_consumable.getSum("INPUTQTY"));
        				}

        				//dataset.getSum('컬럼명')
        				var key = this.ds_consumableListTemp.getColumn(0, "KEYCOLUMN");
        				var value_Key   = "";
        				var value_Value = -1;
        				for(var i = 0; i < this.ds_inputQtyList.rowcount; i++)
        				{
        					value_Key   = this.ds_inputQtyList.getColumn(i, "KEYCOLUMN");
        					value_Value = this.ds_inputQtyList.getColumn(i, "INPUTQTY");

        					if(key == value_Key)
        					{

        						var nRow   = this.ds_standardRequirement.findRow("KEYCOLUMN", value_Key);
        						var reqQty = this.ds_standardRequirement.getColumn(nRow, "REQUIREMENTQTY");
        						trace("reqQty-->"+reqQty);
        						trace("value_Value-->"+value_Value);
        						if ((reqQty - value_Value) <= 0)
        						{
        							// {0} 자재는 이미 BOM 소요량만큼 투입되었습니다.
        							this.gfn_Message("ConsumableIsAlreadyInputEqualRequirement", [value_Key.split('|')[0]], "info", "ok");
        							return;
        						}

        						var vInputQty    = this.ds_consumableListTemp.getColumn(0, "INPUTQTY");
        						var vOrginputQty = this.ds_consumableListTemp.getColumn(0, "ORGINPUTQTY");

        						trace("(reqQty - value_Value)::"+(reqQty - value_Value));
        						if (vInputQty > (reqQty - value_Value))
        							this.ds_consumableListTemp.setColumn(0, "INPUTQTY", (reqQty - value_Value));

        						if (vOrginputQty > (reqQty - value_Value))
        							this.ds_consumableListTemp.setColumn(0, "ORGINPUTQTY", (reqQty - value_Value));
        					}
        				}

        				this.ds_checkParam.clearData();
        				this.ds_checkParam.addRow();
        				this.ds_checkParam.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        				this.ds_checkParam.setColumn(0, "PLANTID", this.gf_getSiteType());
        				this.ds_checkParam.setColumn(0, "AREAID", this.ds_lotInfo.getColumn(0, "AREAID"));
        				this.ds_checkParam.setColumn(0, "CONSUMABLELOTID", consumableLotId);
        				this.ds_checkParam.setColumn(0, "CONSUMABLEDEFID", consumableDefId);
        				this.ds_checkParam.setColumn(0, "CONSUMABLEDEFVERSION", consumableDefVersion);
        				this.ds_checkParam.setColumn(0, "VERSION", "10001");

        				var sSvcID = "getPriorityConsumableLotByProcess";
        				var sController = "/pcm01800/getPriorityConsumableLotByProcess.do";
        				var sInDatasets = "INPUT=ds_checkParam";
        				var sOutDatasets = "ds_priorityConsumableList=output";
        				var sArgs = "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false);

        				if (this.ds_priorityConsumableList.rowcount > 0)
        				{
        					// 해당 자재 보다 먼저 입고된 자재 Lot이 있습니다. 그래도 진행 하겠습니까?
        					var vCnf = this.gfn_confirm("ExistsFirstStockLot", "information", "");

        					if(!vCnf) return;

        				}
        				var cnt = this.ds_consumableListTemp.rowcount;
        				for(var i = 0; i < cnt; i++)
        				{
        					var nRow = this.ds_consumable.addRow();
        					this.ds_consumable.copyRow(nRow,this.ds_consumableListTemp, i);
        				}

        				var consumableLotId = "";
        				for(var i = 0; i < this.ds_consumable.rowcount; i++)
        				{
        					consumableLotId = consumableLotId + (i==0?"":",") +this.ds_consumable.getColumn(i, "CONSUMABLELOTID");
        				}
        				this.edt_consumableLotId.set_value(consumableLotId);

        				return;
        			}

        			var sSvcID = "getConsumableAlternativeLotByProcess";
        			var sController = "/pcm01800/getConsumableAlternativeLotByProcess.do";
        			var sInDatasets = "INPUT=ds_search";
        			var sOutDatasets = "ds_alternativeList=output";
        			var sArgs = "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        			break;

        		case "getConsumableAlternativeLotByProcess":
        			trace("getConsumableAlternativeLotByProcess...");
        			if (this.ds_alternativeList.rowcount > 0)
        			{
        				var currentAreaId    = this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "AREAID"), "");
        				var consumableAreaId = this.nfn_nvl(this.ds_alternativeList.getColumn(0, "AREAID"), "");
        				var currentWarehouseId    = this.nfn_nvl(this.ds_lotInfoData.getColumn(0, "WAREHOUSEID"), "");
        				var consumableWarehouseId = this.nfn_nvl(this.ds_alternativeList.getColumn(0, "WAREHOUSEID"), "");

        				if (currentWarehouseId != consumableWarehouseId)
        				{
        					// 현재 창고에서 보유하고 있는 자재가 아닙니다. 현재 창고 ID : {0}, 소유 창고 ID : {1}
        					this.gfn_Message("ConsumableNotInWarehouse", [currentWarehouseId, consumableWarehouseId], "info", "ok");
        					return;
        				}

        				var vKeyColumn = "";
        				var nRow = -1;
        				this.ds_inputQtyList.clearData();
        				for(var i=0; i<this.ds_consumable.rowcount; i++)
        				{
        					vKeyColumn = this.ds_consumable.getColumn(i, "KEYCOLUMN");
        					if(this.ds_inputQtyList.findRow("KEYCOLUMN",vKeyColumn)>=0) continue;

        					nRow = this.ds_inputQtyList.addRow();
        					this.ds_inputQtyList.setColumn(nRow, "KEYCOLUMN", vKeyColumn);
        					this.ds_inputQtyList.setColumn(nRow, "INPUTQTY", this.ds_consumable.getCaseSum("KEYCOLUMN=='"+vKeyColumn+"'","INPUTQTY"));

        					trace("this.ds_consumable.rowcount 1>>" + this.ds_consumable.rowcount);
        					trace("this.ds_consumable.getSum() >>" + this.ds_consumable.getSum("INPUTQTY"));
        				}

        				//dataset.getSum('컬럼명')
        				var key = this.ds_alternativeList.getColumn(0, "KEYCOLUMN");
        				var value_Key   = "";
        				var value_Value = -1;
        				for(var i = 0; i < this.ds_inputQtyList.rowcount; i++)
        				{
        					value_Key   = this.ds_inputQtyList.getColumn(i, "KEYCOLUMN");
        					value_Value = this.ds_inputQtyList.getColumn(i, "INPUTQTY");

        					if(key == value_Key)
        					{

        						var nRow   = this.ds_standardRequirement.findRow("KEYCOLUMN", value_Key);
        						var reqQty = this.ds_standardRequirement.getColumn(nRow, "REQUIREMENTQTY");
        						trace("reqQty-->"+reqQty);
        						trace("value_Value-->"+value_Value);

        						if ((reqQty - value_Value) <= 0)
        						{
        							// {0} 자재는 이미 BOM 소요량만큼 투입되었습니다.
        							this.gfn_Message("ConsumableIsAlreadyInputEqualRequirement", [value_Key.split('|')[0]], "info", "ok");
        							return;
        						}

        						var vInputQty    = this.ds_alternativeList.getColumn(0, "INPUTQTY");

        						trace("(reqQty - value_Value)-->"+(reqQty - value_Value));
        						if (vInputQty > (reqQty - value_Value))
        							this.ds_alternativeList.setColumn(0, "INPUTQTY", (reqQty - value_Value));

        					}
        				}
        				var nCnt = this.ds_alternativeList.rowcount;
        				for(var i = 0; i < nCnt; i++)
        				{
        					var nRow = this.ds_consumable.addRow();
        					this.ds_consumable.copyRow(nRow,this.ds_alternativeList, i);
        				}

        				return;
        			}

        			// 해당 자재 Lot의 품목은 BOM에 등록 되지 않은 자재 입니다.
        			this.gfn_Message("NotExistsConsumableInStock", null, "info", "ok");

        			break;

        		case "selectDurableListByProcessWorkComplete":
        			if(this.ds_durable.rowcount<1){
        				// 현재 작업에서 사용할 수 없는 치공구 Lot 입니다.
        				this.gfn_Message("NotAvailableDurableLotProcess", null, "info", "ok");
        				this.div_work.form.tab.tpgDurableStart.form.edt_durableLotIdStart.set_value("");
        				return;
        			} else {
        				var nRow = this.ds_durableTemp.addRow();
        				this.ds_durable.copyRow(nRow, this.ds_durableTemp,0);
        			}
        			break;

        		case "selectLotMessage":
        			if(this.ds_messageDtl.rowcount==0) return;
        			var msg = this.ds_messageDtl.getColumn(0,"MESSAGE");
        			var v2 = this.pdv_msg.form.Web.getProperty("document").getProperty("body");
        			v2.setProperty( "innerHTML", msg);
        			this.pdv_msg.form.Web.setProperty( "document", v2 );
        			break;

        	  case "getLotProductTypePathType": // x, LotProductTypePathType

        			if (this.ds_pathType.getRowCount() > 0)
        			{
        				this.plantId = this.nfn_nvl(this.ds_pathType.getColumn(0, "PLANTID"), "");
        				this.pathType = this.nfn_nvl(this.ds_pathType.getColumn(0, "PATHTYPE"), "");
        				this.productDefType = this.nfn_nvl(this.ds_pathType.getColumn(0, "PRODUCTDEFTYPE"), "");
        			}

        			var pathType_endsWith = this.pathType.substring(this.pathType.length-3, this.pathType.length);

        			if (pathType_endsWith == "End" && this.productDefType == "SubAssembly")
        			{	/*
        				this.sta_transitArea.set_tooltiptext("TRANSITAREA");
        				this.cbo_transitArea.set_codecolumn("AREAID");
        				this.cbo_transitArea.set_datacolumn("AREANAME");
        				*/
        				if (this.gf_getEnterpriseId() == this.getEnterPrise_InterFlex()) // ???
        				{
        					this.ds_areaParam.clearData();
        					this.ds_areaParam.addRow();
        					this.ds_areaParam.setColumn(0, "PLANTID", this.plantId);
        					this.ds_areaParam.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        					this.ds_areaParam.setColumn(0, "VERSION", "10004");


        					// 10004
        					var sSvcID = "getAreaList";
        					var sController = "/pcm01700/getAreaList.do";
        					var sInDatasets = "INPUT=ds_areaParam";
        					var sOutDatasets = "ds_transitArea=output";
        					var sArgs = "";
        					this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        				}
        			}
        			else
        			{
        				this.ds_transitAreaParam.clearData();
        				this.ds_transitAreaParam.addRow();
        				this.ds_transitAreaParam.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        				this.ds_transitAreaParam.setColumn(0, "PLANTID", this.gf_getSiteType());
        				this.ds_transitAreaParam.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        				this.ds_transitAreaParam.setColumn(0, "AREAID", this.edt_area_id.value);
        				this.ds_transitAreaParam.setColumn(0, "LOTID", this.edt_lotId.value);
        				this.ds_transitAreaParam.setColumn(0, "PROCESSSEGMENTID", 		this.ds_lotInfo.getColumn(this.ds_lotInfo.rowposition, "NEXTPROCESSSEGMENTID"));
        				this.ds_transitAreaParam.setColumn(0, "PROCESSSEGMENTVERSION", 	this.ds_lotInfo.getColumn(this.ds_lotInfo.rowposition, "NEXTPROCESSSEGMENTVERSION"));
        				this.ds_transitAreaParam.setColumn(0, "RESOURCETYPE", 			"Resource");
        				if(this.lastRework  == "Y") {
        					this.ds_transitAreaParam.setColumn(0, "VERSION", "10032");
        				}
        				else{
        					this.ds_transitAreaParam.setColumn(0, "VERSION", "10031");
        				}

        				var sSvcID = "getTransitAreaList";
        				var sController = "/pcm01700/getTransitAreaList.do";
        				var sInDatasets = "INPUT=ds_transitAreaParam";
        				var sOutDatasets = "ds_transitArea=output";
        				var sArgs = "";

        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        			}


        		break;

        	  case "getAreaList":  // LotProductTypePathType, getAreaList
        		this.pdv_resource.form.grd_resource.setRealColSize("Head",0,0);
        		this.pdv_resource.form.grd_resource.setRealColSize("Head",1,303);
        		this.primaryAreaId = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "AREAID"), "");
        		/*
        		this.cbo_transitArea.set_value(this.primaryAreaId);
        		this.cbo_transitArea.set_codecolumn("AREAID");
        		this.cbo_transitArea.set_datacolumn("AREANAME");
        		*/
        		this.edt_resource_id.set_value(this.primaryAreaId);
        		this.edt_resource.set_value(this.ds_transitArea.lookup("AREAID",this.primaryAreaId,"AREANAME"));
        		this.setControlsInfo3();


        		break;

        	  case "getTransitAreaList": // TransitAreaList
        		this.pdv_resource.form.grd_resource.setRealColSize("Head",1,0);
        		this.pdv_resource.form.grd_resource.setRealColSize("Head",0,303);
        			if (this.nfn_isNull(this.ds_lotInfo.getColumn(0, "NEXTPROCESSSEGMENTID")))
        			{
        				this.primaryAreaId = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "RESOURCEID"), "");
        			}
        			else
        			{
        				for (var i = 0; i < this.ds_transitArea.getRowCount(); i++)
        				{
        					if (this.nfn_nvl(this.ds_transitArea.getColumn(i, "ISPRIMARYRESOURCE"), "N") == "Y")
        					{
        						this.primaryAreaId = this.nfn_nvl(this.ds_transitArea.getColumn(i, "RESOURCEID"), "N");
        						break;
        					}
        				}
        			}
        			/*
        			this.cbo_transitArea.set_value(this.primaryAreaId);
        			this.cbo_transitArea.set_codecolumn("RESOURCEAREAID");
        			this.cbo_transitArea.set_datacolumn("RESOURCEAREANAME");
        			*/
        			this.edt_resource_id.set_value(this.primaryAreaId);
        			this.edt_resource.set_value(this.ds_transitArea.lookup("RESOURCEID",this.primaryAreaId,"RESOURCENAME"));

        			this.fn_setControlsInfo3();

        		break;

        		default:
        			break;
        	}
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


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.gfn_isNull(rtn)) return;
            switch(sPopupId)
        	{
        		case "AREA_ID" :
        			this.edt_area.set_value(rtn[1]);
        			this.edt_area_id.set_value(rtn[0]);			// 작업장Id
        			this.edt_lotId.setFocus();
        			this.fn_clearDetailInfo();
        			break;

        		case "SEARCH_RESOURCE" :
        			if(rtn.resultCd == "OK")
        			{
        				this.ds_body.clearData();
        				this.ds_body.addRow();

        				this.ds_body.setColumn(0, "LOTID", 		this.nfn_nvl(this.ds_search.getColumn(0, "LOTID"), ""));
        				this.ds_body.setColumn(0, "RESOURCEID", this.nfn_nvl(rtn.resourceId, "")); // 팝업 리턴값
        				this.ds_body.setColumn(0, "VERSION", 	"10031");

        				var sSvcID 			= "saveLotResourceId";
        				var sController 	= "/pcmWorkProcess/saveLotResourceId.do";
        				var sInDatasets 	= "INPUT=ds_body";
        				var sOutDatasets 	= "";
        				var sArgs 			= "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        				//this.fn_search();
        			} else {
        				// 현재 공정에서 사용할 자원을 선택하시기 바랍니다.
        				this.gfn_Message("SelectResourceForCurrentProcess", null, "warning", "ok");
        			}

        			break;

        		case "SCH_LOTNO" :	// Lot No 팝업 조회시

        			var nLen = rtn.length;

        			if(nLen != 0)
        			{
        				var nLotNo = "";

        				for(var i=0; i<nLen; i++)
        				{
        					nLotNo += i==0? rtn[i][0] : ", " +rtn[i][0];
        				}
        				this.searchDiv.edt_lotNo.set_value(nLotNo);
        			}
        			else
        			{
        				this.searchDiv.edt_lotNo.set_value("");
        			}

        		break;

        		case "SEARCH_StayReasonCode":

        			rtn = JSON.parse(rtn);
        			console.log("rtn >>" + rtn);

        			if(rtn.resultCd != "CANCEL")
        			{
        				this.fn_StayReasonCode_CallBack();
        			}else{
        				this.fn_clearDetailInfo();
        			}

        			break;
        		case "SEARCH_productRevision":

        			this.fn_productRevision_CallBack();


        			break;

         		case "SEARCH_UserList" :

        //			this.edt_worker_id.set_value(rtn[0]); // 작업자 id
         //			this.edt_worker.set_value(rtn[1]);
        			//this.ds_work.setColumn(0, "WORKER_ID", rtn[0]);

        			//this.edt_worker.set_enable(false);
        			//this.div_work.form.div_pfsInfo.form.btn_workerSrh.set_enable(false);
        			this.fn_setControlsInfo2();

         	      break;
         		case "SEARCH_WorkerByProcess" :

        			this.edt_worker_id.set_value(rtn[0]); // 작업자 id
         			this.edt_worker.set_value(rtn[1]);
        			this.fn_setControlsInfo2();

         			break;
        		case "SEARCH_DEFECT":
        			var nRow = this.ds_defect.rowposition;
        			this.ds_defect.setColumn(nRow,"SEGMENT_DEFECTCODE",rtn[5]);
        			this.ds_defect.setColumn(nRow,"SEGMENT_DEFECTNAME",rtn[6]);
        			this.ds_defect.setColumn(nRow,"QCSEGMENTID",rtn[2]);
        			this.ds_defect.setColumn(nRow,"QCSEGMENTNAME",rtn[3]);
        			this.ds_defect.setColumn(nRow,"DECISIONDEGREE",rtn[4]);
        			this.ds_defect.setColumn(nRow,"DEFECTCODE",rtn[0]);
        			this.ds_defect.setColumn(nRow,"DEFECTCODENAME",rtn[1]);
        			this.div_work.form.tab.tpgDefect.form.grd_defect.moveToNextCell();
        			break;

        		default :
        			break;
        	}
        };


        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_searchStaying = function()
        {
        	this.ds_dtStaying.clearData();
        	this.ds_paramMain.clearData();
        	this.ds_paramMain.addRow();
        	this.ds_paramMain.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_paramMain.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_paramMain.setColumn(0, "AREAID", this.g_areaId);
        	this.ds_paramMain.setColumn(0, "LOTID", lotId);
        	this.ds_paramMain.setColumn(0, "PROCESSSTATE","WaitForReceive");
        	this.ds_paramMain.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_paramMain.setColumn(0, "VERSION", "10001");

        	var sSvcID = "getCheckStaying";
        	var sController = "/pcm01700/getCheckStaying.do";
        	var sInDatasets = "INPUT=ds_paramMain";
        	var sOutDatasets = "ds_dtStaying=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

         /*
         * 기능(공통팝업) : 조회
         */
        this.fn_openPop = function(svcId, popId, pArg)
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
        	var opts = "width=450,height=500";

        	oArg.arg_type = "BA"; // C: 체크박스 B: 단일, CA : arg_searchStr 자동조회
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");

        	if(popId=="P00148"){ //창고 명 조회
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        		oArg.arg_searchStr = "1=1|TXTAREA=" + this.edt_area.value;	// 검색 조건

        	}
        	this.gfn_openPopup(popupId,"cmd::CMSA00120P.xfdl",oArg,opts);
        }

        this.fn_clearDetailInfo = function()
        {
        	this.edt_innerRevisionText.set_value("");
        	this.sta_isRework.set_visible(false);
        	this.sta_isRCLot.set_visible(false);
        	this.ds_lotInfo.clearData();
        	this.ds_work.clearData();
        	this.ds_work.addRow();

        	this.ds_comment.clearData();
        	this.ds_processSpec.clearData();
        	this.ds_equipment.clearData();
        	this.ds_message.clearData();
        	this.ds_messageDtl.clearData();
        	this.ds_defect.clearData();
        	this.ds_consumable.clearData();
        	this.ds_standardRequirement.clearData();
        	this.ds_durable.clearData();
        	this.ds_BORDurable.clearData();
        	this.ds_ProcessDefTypeByProcess.clearData();
        	this.g_LotId       = "";
        	this.g_PanelperQty = -1;
        	this.g_PnlQty      = -1;
        	this.g_PcsQty      = -1;
        	this.queryVersion = "";
        	this.edt_equipment.set_value("");
        	this.edt_worker.set_value("");
        	this.edt_consumableLotId.set_value("");

        	if(!this.gfn_isNull(this.parent.parent.workerId)){
        		this.edt_worker_id.set_value(this.parent.parent.workerId);
        		this.edt_worker.set_value(this.parent.parent.workerNm);
        	}
        	if(!this.gfn_isNull(this.parent.parent.equipmentId)){
        		this.edt_equipment_id.set_value(this.parent.parent.equipmentId);
        		this.edt_equipment.set_value(this.parent.parent.equipmentNm);
        	}
        };

        this.fn_checkLotProcessStateByStepType = function (processType, processState, stepType)
        {
        	var processStateByCurrentStep = this.fn_GetProcessStateByProcessType(processType);
        	this.currStepType = stepType;
        	var stepList = 	stepType+",";
        	// 유효하지 않은 Process Type 인지 체크
        	if (this.gfn_isNull(processStateByCurrentStep))
        		return false;

        	// Process State 다국어 정보 조회
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "CODECLASSID" , "WipProcessState");
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "VERSION", "00001");

        	var sSvcID = "getCodeList";
        	var sController = "/pcm01700/getCodeList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_processStateDictionary=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false);
        	trace("ds_processStateDictionary-->"+this.ds_processStateDictionary.saveXML());
        	var rtnBoolean = this.fn_getCodeList_CallBack();

        	if (!rtnBoolean)
        	{
        		this.fn_clearDetailInfo();

        		this.edt_lotId.set_value("");
        		this.edt_lotId.setFocus();
        		return;
        	}

        	var state = "";

        	// 현재 Process State가 Step Type에 있는지 체크
        	if (stepList.length < 1 || stepList.indexOf(processStateByCurrentStep+",")<0)
        	{
        		// Lot 자원의 Step Type 에서 현재 진행상태가 유효하지 않습니다. Step Type : {0}, Process State : {1}
        		//MSGBox.Show(MessageBoxType.Information, invalidProcessStateInStepTypeMsg.Title, invalidProcessStateInStepTypeMsg.Message, this.currStepType, processState);
        		//this.gfn_Message("InvalidProcessStateInStepType", [stepType,processState], "info", "ok");
        		this.fn_getStepName(stepType, processState);
        		return false;
        	}

        	switch (processType)
        	{
        		case ProcessType.LotAccept:
        			if (processState == Constants.WaitForReceive)
        			{
        				return true;
        			}
        			else if (processState == Constants.Wait)
        			{
        				var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'Receive'");
        				state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        				//this.ds_processStateDictionary.filter("");

        				// state = Format.GetString(processStateDictionary.Select("CODEID = 'Receive'").FirstOrDefault()["CODENAME"]);

        				// 인수 처리된 Lot 입니다. 인수 등록 처리를 진행할 수 없습니다.
        				this.gfn_Message("AlreadyPassCurrentState", [state, "인수 등록"], "info", "ok");
        				return false;
        			}
        			else if (processState == Constants.Run)
        			{
        				var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkStart'");
        				state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        				//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkStart'").FirstOrDefault()["CODENAME"]);

        				// 작업시작 처리된 Lot 입니다. 인수 등록 처리를 진행할 수 없습니다.
        				this.gfn_Message("AlreadyPassCurrentState", [state, "인수 등록"], "info", "ok");
        				return false;
        			}
        			else if (processState == Constants.WaitForSend)
        			{
        				var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkEnd'");
        				state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        				//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkEnd'").FirstOrDefault()["CODENAME"]);

        				// 작업완료 처리된 Lot 입니다. 인수 등록 처리를 진행할 수 없습니다.
        				this.gfn_Message("AlreadyPassCurrentState", [state, "인수 등록"], "info", "ok");
        				return false;
        			}
        			else
        			{
        				// 유효하지 않은 진행상태 입니다. Process State : {0}
        				this.gfn_Message("InvalidProcessState", [processState], "info", "ok");
        				return false;
        			}
        		case ProcessType.StartWork:
        			if (processState == Constants.WaitForReceive)
        			{
        				if (stepList.indexOf(Constants.WaitForReceive+",") == -1)
        				{
        					return true;
        				}
        				else
        				{
        					var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'Receive'");
        					state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        					//state = Format.GetString(processStateDictionary.Select("CODEID = 'Receive'").FirstOrDefault()["CODENAME"]);

        					// 인수 처리가 진행되지 않았습니다. 인수 등록 처리를 먼저 진행하시기 바랍니다.
        					this.gfn_Message("NotArrivalCurrentState", [state, "인수 등록"], "info", "ok");
        					return false;
        				}
        			}
        			else if (processState == Constants.Wait)
        			{
        				if (stepList.indexOf(Constants.WaitForReceive+",") > -1)
        				{
        					return true;
        				}
        				else
        				{
        					// Lot 자원의 Step Type 에서 현재 진행상태가 유효하지 않습니다. Step Type : {0}, Process State : {1}
        					//this.gfn_Message("InvalidProcessStateInStepType", [stepType, processState], "info", "ok");
        					this.fn_getStepName(stepType, processState);
        					return false;
        				}
        			}
        			else if (processState == Constants.Run)
        			{
        				var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkStart'");
        				state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        				//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkStart'").FirstOrDefault()["CODENAME"]);

        				// 작업시작 처리된 Lot 입니다. 작업 시작 처리를 진행할 수 없습니다.
        				this.gfn_Message("AlreadyPassCurrentState", [state, "작업 시작"], "info", "ok");
        				return false;
        			}
        			else if (processState == Constants.WaitForSend)
        			{
        				var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkEnd'");
        				state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        				//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkEnd'").FirstOrDefault()["CODENAME"]);

        				// 작업완료 처리된 Lot 입니다. 작업 시작 처리를 진행할 수 없습니다.
        				this.gfn_Message("AlreadyPassCurrentState", [state, "작업 시작"], "info", "ok");
        				return false;
        			}
        			else
        			{
        				// 유효하지 않은 진행상태 입니다. Process State : {0}
        				this.gfn_Message("InvalidProcessState", [processState], "info", "ok");
        				return false;
        			}
        		case ProcessType.WorkCompletion:
        			if (processState == Constants.WaitForReceive)
        			{
        				if (stepList.indexOf(Constants.WaitForReceive+",") == -1)
        				{
        					if (stepList.indexOf(Constants.Wait+",") == -1)
        					{
        						return true;
        					}
        					else
        					{
        						var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkStart'");
        						state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        						//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkStart'").FirstOrDefault()["CODENAME"]);

        						// 작업시작 처리가 진행되지 않았습니다. 작업 시작 처리를 먼저 진행하시기 바랍니다.
        						this.gfn_Message("NotArrivalCurrentState", [state, "작업 시작"], "info", "ok");
        						return false;
        					}
        				}
        				else
        				{
        					var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'Receive'");
        					state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        					//state = Format.GetString(processStateDictionary.Select("CODEID = 'Receive'").FirstOrDefault()["CODENAME"]);

        					// 인수 처리가 진행되지 않았습니다. 인수 등록 처리를 먼저 진행하시기 바랍니다.
        					this.gfn_Message("NotArrivalCurrentState", [state, "인수 등록"], "info", "ok");
        					return false;
        				}
        			}
        			else if (processState == Constants.Wait)
        			{
        				if (stepList.indexOf(Constants.WaitForReceive+",") > -1)
        				{
        					if (stepList.indexOf(Constants.Wait+",") == -1)
        					{
        						return true;
        					}
        					else
        					{
        						var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkStart'");
        						state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        						//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkStart'").FirstOrDefault()["CODENAME"]);

        						// 작업시작 처리가 진행되지 않았습니다. 작업 시작 처리를 먼저 진행하시기 바랍니다.
        						this.gfn_Message("NotArrivalCurrentState", [state, "작업 시작"], "info", "ok");
        						return false;
        					}
        				}
        				else
        				{
        					// Lot 자원의 Step Type 에서 현재 진행상태가 유효하지 않습니다. Step Type : {0}, Process State : {1}
        					//this.gfn_Message("InvalidProcessStateInStepType", [stepType, processState], "info", "ok");
        					this.fn_getStepName(stepType, processState);
        					return false;
        				}
        			}
        			else if (processState == Constants.Run)
        			{
        				if (stepList.indexOf(Constants.Wait+",") > -1)
        				{
        					return true;
        				}
        				else
        				{
        					// Lot 자원의 Step Type 에서 현재 진행상태가 유효하지 않습니다. Step Type : {0}, Process State : {1}
        					//this.gfn_Message("InvalidProcessStateInStepType", [stepType, processState], "info", "ok");
        					this.fn_getStepName(stepType, processState);
        					return false;
        				}
        			}
        			else if (processState == Constants.WaitForSend)
        			{
        				var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkEnd'");
        				state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        				//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkEnd'").FirstOrDefault()["CODENAME"]);

        				// 작업완료 처리된 Lot 입니다. 작업 완료 처리를 진행할 수 없습니다.
        				this.gfn_Message("AlreadyPassCurrentState", [state, "작업 완료"], "info", "ok");
        				return false;
        			}
        			else
        			{
        				// 유효하지 않은 진행상태 입니다. Process State : {0}
        				this.gfn_Message("InvalidProcessState", [processState], "info", "ok");
        				return false;
        			}
        		case ProcessType.TransitRegist:
        			if (processState == Constants.WaitForReceive)
        			{
        				if (stepList.indexOf(Constants.WaitForReceive+",") == -1)
        				{
        					if (stepList.indexOf(Constants.Wait+",") == -1)
        					{
        						if (stepList.indexOf(Constants.Run+",") == -1)
        						{
        							return true;
        						}
        						else
        						{
        							var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkEnd'");
        							state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        							//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkEnd'").FirstOrDefault()["CODENAME"]);

        							// 작업완료 처리가 진행되지 않았습니다. 작업 완료 처리를 먼저 진행하시기 바랍니다.
        							this.gfn_Message("NotArrivalCurrentState", [state, "작업 완료"], "info", "ok");
        							return false;
        						}
        					}
        					else
        					{
        						var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkStart'");
        						state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        						//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkStart'").FirstOrDefault()["CODENAME"]);

        						// 작업시작 처리가 진행되지 않았습니다. 작업 시작 처리를 먼저 진행하시기 바랍니다.
        						this.gfn_Message("NotArrivalCurrentState", [state, "작업 시작"], "info", "ok");
        						return false;
        					}
        				}
        				else
        				{
        					var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'Receive'");
        					state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        					//state = Format.GetString(processStateDictionary.Select("CODEID = 'Receive'").FirstOrDefault()["CODENAME"]);

        					// 인수 처리가 진행되지 않았습니다. 인수 등록 처리를 먼저 진행하시기 바랍니다.
        					this.gfn_Message("NotArrivalCurrentState", [state, "인수 등록"], "info", "ok");
        					return false;
        				}
        			}
        			else if (processState == Constants.Wait)
        			{
        				if (stepList.indexOf(Constants.WaitForReceive+",") > -1)
        				{
        					if (stepList.indexOf(Constants.Wait+",") == -1)
        					{
        						if (stepList.indexOf(Constants.Run+",") == -1)
        						{
        							return true;
        						}
        						else
        						{
        							var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkEnd'");
        							state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        							//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkEnd'").FirstOrDefault()["CODENAME"]);

        							// 작업완료 처리가 진행되지 않았습니다. 작업 완료 처리를 먼저 진행하시기 바랍니다.
        							this.gfn_Message("NotArrivalCurrentState", [state, "작업 완료"], "info", "ok");
        							return false;
        						}
        					}
        					else
        					{
        						var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkStart'");
        						state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        						//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkStart'").FirstOrDefault()["CODENAME"]);

        						// 작업시작 처리가 진행되지 않았습니다. 작업 시작 처리를 먼저 진행하시기 바랍니다.
        						this.gfn_Message("NotArrivalCurrentState", [state, "작업 시작"], "info", "ok");
        						return false;
        					}
        				}
        				else
        				{
        					// Lot 자원의 Step Type 에서 현재 진행상태가 유효하지 않습니다. Step Type : {0}, Process State : {1}
        					//this.gfn_Message("InvalidProcessStateInStepType", [stepType, processState], "info", "ok");
        					this.fn_getStepName(stepType, processState);
        					return false;
        				}
        			}
        			else if (processState == Constants.Run)
        			{
        				if (stepList.indexOf(Constants.Wait+",") > -1)
        				{
        					if (stepList.indexOf(Constants.Run+",") == -1)
        					{
        						return true;
        					}
        					else
        					{
        						var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkEnd'");
        						state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        						//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkEnd'").FirstOrDefault()["CODENAME"]);

        						// 작업완료 처리가 진행되지 않았습니다. 작업 완료 처리를 먼저 진행하시기 바랍니다.
        						this.gfn_Message("NotArrivalCurrentState", [state, "작업 완료"], "info", "ok");
        						return false;
        					}
        				}
        				else
        				{
        					// Lot 자원의 Step Type 에서 현재 진행상태가 유효하지 않습니다. Step Type : {0}, Process State : {1}
        					//this.gfn_Message("InvalidProcessStateInStepType", [stepType, processState], "info", "ok");
        					this.fn_getStepName(stepType, processState);
        					return false;
        				}
        			}
        			else if (processState == Constants.WaitForSend)
        			{
        				if (stepList.indexOf(Constants.Run+",") > -1)
        				{
        					return true;
        				}
        				else
        				{
        					// Lot 자원의 Step Type 에서 현재 진행상태가 유효하지 않습니다. Step Type : {0}, Process State : {1}
        					//this.gfn_Message("InvalidProcessStateInStepType", [stepType, processState], "info", "ok");
        					this.fn_getStepName(stepType, processState);
        					return false;
        				}
        			}
        			else
        			{
        				// 유효하지 않은 진행상태 입니다. Process State : {0}
        				this.gfn_Message("InvalidProcessState", [processState], "info", "ok");
        				return false;
        			}
        		default:
        			return false;
        	}
        /*
        	//채공 상태 체크
        	var lotId = this.edt_lotId.value;

        	this.ds_paramMain.clearData();
        	this.ds_paramMain.addRow();
        	this.ds_paramMain.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_paramMain.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_paramMain.setColumn(0, "AREAID", this.g_areaId);
        	this.ds_paramMain.setColumn(0, "LOTID", lotId);
        	this.ds_paramMain.setColumn(0, "PROCESSSTATE","WaitForReceive");
        	this.ds_paramMain.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_paramMain.setColumn(0, "VERSION", "10001");


        	var sSvcID = "getCheckStaying";
        	var sController = "/pcm01700/getCheckStaying.do";
        	var sInDatasets = "INPUT=ds_paramMain";
        	var sOutDatasets = "ds_dtStaying=output";
        	var sArgs = "";
        	trace("ds_dtStaying-->"+this.ds_dtStaying.saveXML());
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false);
        	if (this.nfn_nvl(this.ds_dtStaying.getColumn(0, "ISLOCKING"), "") == "Y"){
        		// 채공팝업
        		var popupId = "SEARCH_StayReasonCode";
        		var oArg = {};

        		oArg.arg_ds_dtStaying = this.ds_dtStaying;
        		this.gfn_openPopup(popupId,"pda::PDA00201P.xfdl",oArg,"width=450,height=409");	// Step2_2 popupAfter 호출
        		return;
        	}
        */
        };

        this.fn_GetProcessStateByProcessType = function (processType, processState, stepType)
        {
        	switch (processType)
        	{
        		case ProcessType.LotAccept:
        			return "WaitForReceive";
        		case ProcessType.StartWork:
        			return "Wait";
        		case ProcessType.WorkCompletion:
        			return "Run";
        		case ProcessType.TransitRegist:
        			return "WaitForSend";
        		default:
        			return "";
        	}
        }

        this.fn_StayReasonCode_CallBack = function ()
        {
        	this.ds_plantParam.clearData();
        	this.ds_plantParam.addRow();
        	this.ds_plantParam.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId() );
        	this.ds_plantParam.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_plantParam.setColumn(0, "VERSION", "10001");

        	var sSvcID = "getPlantIsWipSurvey";
        	var sController = "/pcm01700/getPlantIsWipSurvey.do";
        	var sInDatasets = "INPUT=ds_plantParam";
        	var sOutDatasets = "ds_isWipSurveyResult=output";
        	var sArgs = "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_checkRCLot = function(ds_lotInfo)
        {
        	var isPrintLotCard   = this.nfn_nvl(ds_lotInfo.getColumn(0, "ISPRINTLOTCARD"), "");
        	var isPrintRcLotCard = this.nfn_nvl(ds_lotInfo.getColumn(0, "ISPRINTRCLOTCARD"), "");

        	if (isPrintLotCard == "N" && isPrintRcLotCard == "Y")
        	{
        		var lotId 			  = this.nfn_nvl(ds_lotInfo.getColumn(0, "LOTID"), "");
        		var productDefId 	  = this.nfn_nvl(ds_lotInfo.getColumn(0, "PRODUCTDEFID"), "");
        		var productDefVersion = this.nfn_nvl(ds_lotInfo.getColumn(0, "PRODUCTDEFVERSION"), "");

        		var productRevision = productDefId + productDefVersion;


        		var popupId = "SEARCH_productRevision";
        		var oArg = {};

        		oArg.arg_lotId = lotId;
        		oArg.arg_productRevision = productRevision;

        		// 바코드 출력
        		//this.gfn_openPopup(popupId,"pcm::PCM01700P3.xfdl",oArg,"width=456,height=260");
        		alert("PC에서 변경 Lot Card의 '품목 Barcode' 를 스캔 하십시오.\n변경 Lot Card가 없는 경우 출력/교체 후 재 진행 하시기 바랍니다.");

        		return false;
        	}


        	return true;
        };

        this.fn_productRevision_CallBack = function ()
        {
        	var isHold    = this.ds_lotInfo.getColumn(0, "ISHOLD");
        	var isLocking = this.ds_lotInfo.getColumn(0, "ISLOCKING");

        	if (isHold == "Y")
        	{
        		// 보류 상태의 Lot 입니다.
        		this.gfn_Message("LotIsHold", this.edt_lotId.value, "warning", "ok");

        		this.fn_clearDetailInfo();

        		this.edt_lotId.set_value("");
        		this.edt_lotId.setFocus();

        		return;
        	}

        	if (isLocking == "Y")
        	{
        		// Locking 상태의 Lot 입니다.
        		this.gfn_Message("LotIsLocking", this.edt_lotId.value, "warning", "ok");

        		this.fn_clearDetailInfo();

        		this.edt_lotId.set_value("");
        		this.edt_lotId.setFocus();

        		return;
        	}

        	var productDefVersion = this.ds_lotInfo.getColumn(0,"PRODUCTDEFVERSION");
        	var isRcLot = this.ds_lotInfo.getColumn(0,"ISRCLOT");
        	this.edt_innerRevisionText.set_value(productDefVersion);
        	if (this.processDefType == "Rework")
        		this.sta_isRework.set_visible(true);
        	else
        		this.sta_isRework.set_visible(false);
        	if (isRcLot == "Y")
        		this.sta_isRCLot.set_visible(true);
        	else
        		this.sta_isRCLot.set_visible(false);
        	/*
        	this.g_LotId       = this.edt_lotId.value;
        	this.g_PanelperQty = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PANELPERQTY"), "0"));
        	this.g_PnlQty      = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PNLQTY"), "0"));
        	this.g_PcsQty      = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PCSQTY"), "0"));
        	this.div_work.form.div_pfsInfo.form.setControlsInfo(this.g_areaId, this.g_LotId, this.ds_lotInfo, this.queryVersion);
        	*/
        //	this.div_work.form.tab.tpgMessage.form.fn_search();
        };

        /// <summary>
        /// 데이터를 저장 할 때 컨텐츠 영역의 유효성을 검사한다.
        /// </summary>
        this.fn_onValidateContent = function()
        {
        	var vWorker = this.ds_work.getColumn(0, "WORKER");
        	if (this.gfn_isNull(vWorker))
        	{
        		// 작업자는 필수 입력 항목입니다.
        		this.gfn_Message("WorkerIsRequired", null, "warning", "ok");
        		return false;
        	}

        /*
        	var vGoodqty = nexacro.toNumber(this.nfn_nvl(this.ds_work.getColumn(0, "GOODQTY"), "0"));
        	if (vGoodqty < 0)
        	{
        		// 양품수량은 0 보다 커야 합니다.
        		this.gfn_Message("GoodQtyLargerThanZero", null, "warning", "ok");
        		return false;
        	}
        */
        /*
        	if(this.ds_equipment.findRow("CHK","1")<0){
        		// 작업 시작 할 설비를 선택하시기 바랍니다.
        		this.gfn_Message("SelectStartWorkEquipment", null, "warning", "ok");
        		return false;
        	}
        */
        /*
        	var unit        = this.nfn_nvl(this.ds_work.getColumn(0, "UNIT"), "");
        	var panelPerQty = nexacro.toNumber(this.nfn_nvl(this.ds_work.getColumn(0, "PANELPERQTY"), "0"));
        	var goodQty     = nexacro.toNumber(this.nfn_nvl(this.ds_work.getColumn(0, "GOODQTY"), "0"));

        	if (unit == "PNL" && panelPerQty > 0 && goodQty % panelPerQty != 0)
        	{
        		// 단위가 PCS가 아닌 경우 PNL 수량은 정수로 나와야 합니다.
        		this.gfn_Message("PanelQtyHasNotInteger", null, "warning", "ok");
        		return false;
        	}
        */
        	var validateData = this.fn_validateData();
        	return validateData;

        	return false;
        };

        this.fn_validateData = function()
        {
        /*
        	for(var i = 0; i < this.ds_defect.rowcount; i++)
        	{
        		var defectCode = this.nfn_nvl(this.ds_defect.getColumn(i, "DEFECTCODE"), "");
        		var defectName = this.nfn_nvl(this.ds_defect.getColumn(i, "DEFECTCODENAME"), "");
        		var pnlQty = nexacro.toNumber(this.nfn_nvl(this.ds_defect.getColumn(i, "PNLQTY"), "0"));
        		var qty = nexacro.toNumber(this.nfn_nvl(this.ds_defect.getColumn(i, "QTY"), "0"));
        		if (pnlQty <= 0 || qty <= 0)
        		{
        			// 불량수량을 입력해야 합니다.
        			this.gfn_Message("DefectQtyRequired", null, "warning", "ok");
        			return false;
        		}
        	}
        */

        	 //필수 자재 체크
        	if(!this.fn_CheckConusumable())
        	{
        		this.gfn_Message("CheckRequireConsum", "", "info", "ok");
        		return false;
        	}
        	if (!this.fn_CheckDurable())
        	{
        		this.gfn_Message("CheckRequireDurable", "", "info", "ok");
        		return false;
        	}

        	// 치공구 중복 여부 체크
        	if (this.ds_lotInfo.getColumn(0,"ISBEFOREROLLCUTTING")=="Y" && this.ds_equipment.getCaseCount("CHK=='1'") > 1)
        	{
        		// Roll Lot 인 경우 Roll Cutting 공정보다 이전 공정은 설비를 한 대만 선택해야 합니다.
        		this.gfn_Message("SelectOneEquipmentBeforeRollCutting", "", "info", "ok");
        		return false;
        	}
        	if (this.ds_BORDurable.rowcount > 0 && this.ds_equipment.getCaseCount("CHK=='1'") > 0)
        	{
        		var equipmentCount = this.ds_equipment.getCaseCount("CHK=='1'");
        		var durableLotCount = this.ds_durable.getCaseCount("EQUIPMENTID!=''");

        		if (equipmentCount != durableLotCount)
        		{
        			// 선택한 설비 대수와 치공구 개수가 일치하지 않습니다.
        			this.gfn_Message("EquipmentCountNotEqualDurableCount", "", "info", "ok");
        			return false;
        		}
        	}

        	for(var i=0; i<this.ds_durable.rowcount; i++){
        		if(this.ds_durable.findRowExpr("DURABLEDEFID=='"+this.ds_durable.getColumn(i,"DURABLEDEFID")+"' && DURABLEDEFVERSION=='"+this.ds_durable.getColumn(i,"DURABLEDEFVERSION")+"' && EQUIPMENTID=='"+this.ds_durable.getColumn(i,"EQUIPMENTID")+"'",i+1)>=0){
        			// 동일 설비에 중복으로 사용되는 치공구가 존재합니다. 치공구 ID : {0}, 치공구 버전 : {1}, 설비 ID : {2}
        			this.gfn_Message("ExistsDuplicateDurable", [this.ds_durable.getColumn(i,"DURABLEDEFID"),this.ds_durable.getColumn(i,"DURABLEDEFVERSION"),this.ds_durable.getColumn(i,"EQUIPMENTID")], "info", "ok");
        			return false;
        		}
        	}
        	if(this.ds_standardRequirement.getRowCount() > 0 && this.ds_consumable.getRowCount() == 0)
        	{
        		// BOM 기준 사용 자재가 모두 등록되지 않았습니다.
        		this.gfn_Message("DoNotInsertMaterialByBOM", null, "warning", "ok");
        		return false;
        	}

        	trace("====4==== : 자재 정보 검증완료!");
        	var vKeyColumn = "";
        	var nRow = -1;

        	trace("====5==== : 치공구 정보 검증완료!");
        	var isUsedConsumable 		= true;
        	var isUseQtyMatch 			= true;
        	var isInputQtyLessThanQty 	= true;
        	var isOverQty				= true;

        	var consumableDefId 		= "";
        	var isRealInputQtyLagerThanRequirementQty = true;

        	for(var i = 0; i < this.ds_standardRequirement.getRowCount(); i++)
        	{

        		var consumId		= this.nfn_nvl(this.ds_standardRequirement.getColumn(i , "CONSUMABLEDEFID"), "");
        		var vKeyColumn      = this.nfn_nvl(this.ds_standardRequirement.getColumn(i , "KEYCOLUMN"), "");
        		var vRequirementQty = nexacro.toNumber(this.nfn_nvl(this.ds_standardRequirement.getColumn(i , "REQUIREMENTQTY"), "0"));
        		var nRow 			= this.ds_consumable.findRow("KEYCOLUMN", vKeyColumn);
        		if(nRow == -1) isUsedConsumable = false;
        		var vRealInputQty = nexacro.toNumber(this.nfn_nvl(this.ds_consumable.getCaseSum("KEYCOLUMN=='"+vKeyColumn+"'","ORGINPUTQTY")));

        		if(vRealInputQty != vRequirementQty)
        		   isUseQtyMatch = false;

        		if(vRealInputQty > vRequirementQty)
        		{
        			isRealInputQtyLagerThanRequirementQty = false;
        			consumableDefId = vKeyColumn;
        		}
        		//BOM 필요량보다 투입수량이 적으면 오류
        		if(vRealInputQty < vRequirementQty)
        		{
        			// 자재 소요량이 BOM 기준소요량보다 적습니다. 자재 : {0}
        			this.gfn_Message("ConsumableInputQtyLessThanRequirementQty", vKeyColumn, "warning", "ok");
        			return false;
        		}
        	}


        	if (!isUsedConsumable)
        	{
        		// BOM 기준 사용 자재가 모두 등록되지 않았습니다.
        		this.gfn_Message("DoNotInsertMaterialByBOM", null, "warning", "ok");
        		return false;
        	}

        	for(var i = 0; i < this.ds_consumable.getRowCount(); i++)
        	{
        		var vInputQty 		= nexacro.toNumber(this.nfn_nvl(this.ds_consumable.getColumn(nRow, "INPUTQTY"), "0"));	//투입수량
        		var avaliableQty	= nexacro.toNumber(this.nfn_nvl(this.ds_consumable.getColumn(nRow, "AVAILABLEQTY"), "0"));	//가용수량
        		var currLotQty		= nexacro.toNumber(this.nfn_nvl(this.ds_consumable.getColumn(nRow, "CURRENTLOTQTY"), "0")); //현재 Lot에 투입된 자재 수량
        		var lastQty			= (avaliableQty + currLotQty);	//실제 수량


        		if(lastQty < vInputQty){
        			isOverQty = false;
        		}

        		trace("===============자재검증 Start================");
        		trace("투입수량   		:"+vInputQty);
        		trace("가용수량   		:"+avaliableQty);
        		trace("현재Lot수량		:"+currLotQty);
        		trace("실제가능수량	:"+lastQty);
        		trace("===============자재검증 End================");

        		if(!isOverQty){
        			// 투입수량은 가용수량(재고수량 - Lot 사용수량)을 초과할 수 없습니다. 가용수량 = {0}
        			this.gfn_Message("InputQtyGreaterThanAvailableQty", [Eco.number.getMaskFormatString(lastQty, "#,##0.#####")], "warning", "ok");
        			return false;
        		}

        	}

        	// 치공구 설비 필수
        	for(var i = 0; i < this.ds_durable.getRowCount(); i++)
        	{
        		if(this.nfn_isNull(this.nfn_nvl(this.ds_durable.getColumn(i, "EQUIPMENTID"), "")))
        		{
        			// 설비는 필수로 선택해야 합니다. {0}
        			this.gfn_Message("EquipmentIsRequired", [this.nfn_nvl(this.ds_durable.getColumn(i, "DURABLELOTID"), "")], "warning", "ok");
        			return false;
        		}
        	}

        	// 작업 중인 설비 존재 여부 체크
        	if (!this.checkExistsUsingEquipment())
        	{
        		// 현재 Lot을 작업 중인 설비가 존재하지 않습니다.
        		this.gfn_Message("NotExistsUsingEquipment", null, "warning", "ok");
        		return false;
        	}

        	// 작업 중인 설비에서 사용되는 치공구 존재 여부 체크
        	if (this.ds_durable.getRowCount() > 0)
        	{
        		var checkEquipmentId = this.checkExistsUsingDurableOnEquipment();
        		if (!this.nfn_isNull(checkEquipmentId))
        		{
        			// 현재 Lot을 작업 중인 설비에서 사용되는 치공구가 없습니다. Equipment Id : {0}
        			this.gfn_Message("NotExistsDurableOnEquipment", [checkEquipmentId], "warning", "ok");
        			return false;
        		}
        	}
        	return true;
        };
        this.checkExistsUsingDurableOnEquipment = function()
        {
        	var result 			= "";
        	var vTrackoutTime 	= "";
        	var list 			= [];  // new Array();
        	var eqipList 		= [];

        	for(var i = 0; i < this.ds_equipmentInfo.getRowCount(); i++)
        	{
        		vTrackoutTime = this.nfn_nvl(this.ds_equipmentInfo.getColumn(i , "TRACKOUTTIME"), "");
        		if (this.nfn_isNull(vTrackoutTime)) {
        			list.push(vTrackoutTime);
        			eqipList.push(this.nfn_nvl(this.ds_equipmentInfo.getColumn(i , "EQUIPMENTID"), ""));
        		}
        	}

        	var iEquipmentId 	= "";
        	var jEquipmentId 	= "";
        	var workendTime 	= "";
        	var listDurable 	= [];

        	for(var i = 0; i < list.length; i++)
        	{
         		iEquipmentId = eqipList[i];

        		for(var j = 0; j < this.ds_durable.getRowCount(); j++)
        		{
        			workendTime = this.nfn_nvl(this.ds_durable.getColumn(j , "WORKENDTIME"), "");
        			jEquipmentId = this.nfn_nvl(this.ds_durable.getColumn(j , "EQUIPMENTID"), "")

        			if (this.nfn_isNull(workendTime) && jEquipmentId == iEquipmentId) {
        				listDurable.push(jEquipmentId);
        			}
        		}

        		if(listDurable.length < 1)
        			result += iEquipmentId + ",";
        	}


        	if (!this.nfn_isNull(result))
        		result = result.substring(0, result.length - 1);

        	return result;
        };
        this.checkExistsUsingEquipment = function()
        {
        	var list = [];
        	var vTrackoutTime = "";
        	for(var i = 0; i < this.ds_equipment.getRowCount(); i++)
        	{
        		vTrackoutTime = this.nfn_nvl(this.ds_equipment.getColumn(i , "TRACKOUTTIME"), "");
        		if (this.nfn_isNull(vTrackoutTime)) list.push(vTrackoutTime);
        	}

        	if (list.length < 1)
        		return false;

        	return true;
        };

        this.fn_RESOURCE_CallBack = function ()
        {
        	//this.button.isBusy = true;

        	//buttons.ForEach(button => button.IsBusy = true);
        	//pnlContent.ShowWaitArea();

        	// 재작업 여부 확인
        	var lotId = this.edt_lotId.value;
        	this.g_areaId = this.edt_area_id.value;
        	this.ds_paramMain.clearData();
        	this.ds_paramMain.addRow();
        	this.ds_paramMain.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_paramMain.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_paramMain.setColumn(0, "AREAID", this.g_areaId);
        	this.ds_paramMain.setColumn(0, "LOTID", lotId);
        	this.ds_paramMain.setColumn(0, "PROCESSSTATE","WaitForReceive");
        	this.ds_paramMain.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_paramMain.setColumn(0, "VERSION", "10001");

        	var sSvcID = "getProcessDefTypeByProcess";
        	var sController = "/pcm01700/getProcessDefTypeByProcess.do";
        	var sInDatasets = "INPUT=ds_paramMain";
        	var sOutDatasets = "ds_processDefTypeInfo=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_getCodeList_CallBack = function ()
        {

        	var processStateByCurrentStep = this.fn_GetProcessStateByProcessType(this.currProcessType);
        	var processState = this.processState;
        	var stepList = this.currStepType+',';

        	var state = "";


        	// 유효하지 않은 Process Type 인지 체크
        	if (this.gfn_isNull(processStateByCurrentStep))
        		return false;

        	// 현재 Process State가 Step Type에 있는지 체크
        	if (stepList.length < 1 || stepList.indexOf(processStateByCurrentStep+",") == -1)
        	{
        		// Lot 자원의 Step Type 에서 현재 진행상태가 유효하지 않습니다. Step Type : {0}, Process State : {1}
        		//this.gfn_Message("InvalidProcessStateInStepType", [this.currStepType, processState], "info", "ok");
        		this.fn_getStepName(this.currStepType, processState);
        		return false;
        	}

        	return true;
        };

        this.fn_setUserInfo = function ()
         {
         	//GetUserList 10001
         	var txtSearch = ""
         	if (!this.gfn_isNull(this.edt_area_id.value))
         	{
         		txtSearch = "USERIDNAME="+ this.edt_worker.value;
         	}

         	var popupId = "SEARCH_UserList";  ///pcmCommon/getUserList.do
         	var oArg = {};
         	oArg.arg_type = "DA"; // C: 체크박스 B: 단일, CA : arg_searchStr 자동조회
         	oArg.arg_popupCd = "P00195";
         	oArg.arg_popupNm = "사용자 조회";
         	oArg.arg_rtnCols = "WORKERID|WORKERNAME";
         	oArg.arg_paramCols = "PLANTID";
         	oArg.arg_paramValues = this.gf_getSiteType() ;  //this.gf_getSiteType()
         	oArg.arg_searchStr = txtSearch;

         	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };
        this.fn_setUserInfoByArea = function ()
         {
         	//GetUserList 10001
         	var txtSearch = "1=1"
         	if (!this.gfn_isNull(this.edt_worker.value))
         	{
         		txtSearch = "TXTWORKERIDNAME="+ this.edt_worker.value;
         	}


         	// 자사구분
         	//workerCondition.GridColumns.AddComboBoxColumn("OWNTYPE", 100, new SqlQuery("GetCodeList", "00001", "CODECLASSID=OwnType", $"LANGUAGETYPE={UserInfo.Current.LanguageType}"));
         	// 작업자유형
         	//workerCondition.GridColumns.AddComboBoxColumn("WORKERTYPE", 120, new SqlQuery("GetCodeList", "00001", "CODECLASSID=WorkerType", $"LANGUAGETYPE={UserInfo.Current.LanguageType}"));

         	//???  ==> 디폴트 , 작업자유형 팝업
         	//this.g_areaId = this.edt_area_id.value;
         	var popupId = "SEARCH_WorkerByProcess";  // /pcmCommon/getWorkerByProcess.do
         	var oArg = {};
         	oArg.arg_type = "BA"; // C: 체크박스 B: 단일, CA : arg_searchStr 자동조회
         	oArg.arg_popupCd = "P00196";  //getWorkerByProcess.do  /pcmCommon/getWorkerByProcess.do
         	oArg.arg_popupNm = "작업자 조회";
         	oArg.arg_rtnCols = "WORKERID|WORKERNAME|EMPLOYEENO|DEPARTMENT|OWNTYPE|WORKERTYPE";
         	oArg.arg_paramCols = "USERID|ENTERPRISEID|PLANTID|AREAID";
         	oArg.arg_paramValues = this.gf_getUserId() + "|" + this.gf_getEnterpriseId() + "|" + this.gf_getSiteType() + "|" +  this.g_areaId;  //this.gf_getSiteType()
         	oArg.arg_searchStr = txtSearch;

         	this.gfn_openPopup(popupId,"cmd::CMSA00120P.xfdl",oArg,"width=450,height=500");

        };

        this.fn_setControlsInfo2 = function ()
         {
         	this.ds_search.clearData();
         	this.ds_search.addRow();
         	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId()); //??? ==> 세션
         	this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());
         	this.ds_search.setColumn(0, "LOTID", this.edt_lotId.value );
         	this.ds_search.setColumn(0, "PROCESSSEGMENTID", this.ds_lotInfo.getColumn(0, "NEXTPROCESSSEGMENTID"));
         	this.ds_search.setColumn(0, "PROCESSSEGMENTVERSION", this.ds_lotInfo.getColumn(0, "NEXTPROCESSSEGMENTVERSION"));
         	this.ds_search.setColumn(0, "RESOURCETYPE", "Resource");
         	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());


         	switch (this.currProcessType)
         	{
         		case ProcessType.LotAccept:
        			this.fn_setControlsInfo3();
         			break;
         		case ProcessType.StartWork:
        			this.fn_setControlsInfo3();
         			break;
         		case ProcessType.WorkCompletion:
         			var processSegmentType = this.ds_lotInfo.getColumn(0, "PROCESSSEGMENTTYPE");
         			var isWeekMng = this.ds_lotInfo.getColumn(0, "ISWEEKMNG");
         			var stepType = this.ds_lotInfo.getColumn(0, "STEPTYPE")+",";
        			/*
         			if (isWeekMng == "Y") {
         				this.sta_printWeek.set_visible(true);
        				this.sta_printWeek.set_enable(true);
         				this.edt_printWeek.set_visible(true);
        				this.edt_printWeek.set_enable(true);
         			}
         			else
         			{
         				this.sta_printWeek.set_visible(false);
        				this.sta_printWeek.set_enable(false);
         				this.edt_printWeek.set_visible(false);
        				this.edt_printWeek.set_enable(false);
         			}
         			*/
         			// TODO : Resource
         			// 인계 작업장
         			if ((this.currStepType+",").indexOf("WaitForSend"+",") == -1)
         			{

         				this.sta_transitArea.set_visible(true);
        				//this.sta_transitArea.set_enable(true);
         				//this.cbo_transitArea.set_visible(true);
        				//this.cbo_transitArea.set_enable(true);
         				this.edt_resource.set_visible(true);
        				this.btn_resource.set_visible(true);
        				this.fn_getLotProductTypePathType();


         			}
         			else
         			{
         				this.sta_transitArea.set_visible(false);
        				//this.sta_transitArea.set_enable(false);
         				//this.cbo_transitArea.set_visible(false);
        				//this.cbo_transitArea.set_enable(false);
         				//this.cbo_transitArea.set_innerdataset(null);
         				this.edt_resource.set_visible(false);
        				this.btn_resource.set_visible(false);

        				this.fn_setControlsInfo3();
         			}


         			break;
         		case ProcessType.TransitRegist:

        			this.fn_getLotProductTypePathType();

         			break;
         	} //switch end


         };

         this.fn_setControlsInfo3 = function ()
         {
         	var defectUnit = this.ds_lotInfo.getColumn(0, "DEFECTUNIT");

         	if (this.gfn_isNull(defectUnit))
         	{
         		var materialClass = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "MATERIALCLASS"), "");

        // 		this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_value("PNL") ; //  콤보리스트에서 PNL 선택
        		this.ds_work.setColumn(0, "UNIT", "PNL");

         		if (materialClass == "FG")
         		{
         //			this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_enable(true);
         		}
         		else
         		{
         			var pcsPnl = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PANELPERQTY"), "0"));

         			if (pcsPnl == 0)
        			{
         	//			this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_value("EA");
        				this.ds_work.setColumn(0, "UNIT", "EA");
        			}

         //			this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_enable(true);
         		}
         	}
         	else
         	{
        // 		this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_value(defectUnit);
        		this.ds_work.setColumn(0, "UNIT", defectUnit);
        // 		this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_enable(false);
         	}
        //	this.cbo_unitOfMaterial_onitemchanged();
        // 	var unitOfMaterial = this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.value;

        // 	this.div_work.form.div_pfsInfo.form.spn_numGoodQty.set_value(nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PCSQTY"), "0"))); //
        // 	this.div_work.form.div_pfsInfo.form.spn_numGoodPnlQty.set_value(nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PNLQTY"), "0")));

        	this.ds_work.setColumn(0, "GOODQTY"   , nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PCSQTY"), "0")));
        	this.ds_work.setColumn(0, "GOODPNLQTY", nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PNLQTY"), "0")));

        	// 메인 창 콜백
        	this.fn_setControlsInfo_CallBack();
         };

        this.fn_setControlsInfo_CallBack = function ()
        {
        //	this.div_work.form.div_lotInfo.set_enable(true);
        //	this.div_work.form.div_pfsInfo.set_enable(true);
        //	this.fn_pfsDetail_setEnable(true);


        	//pfsDetail.SetDefectGridComboData(txtLotId.Text);


        	var productDefVersion =this.ds_lotInfo.getColumn(0, "PRODUCTDEFVERSION");
        	var isRcLot = this.ds_lotInfo.getColumn(0, "ISRCLOT");

        	this.edt_innerRevisionText.set_value(productDefVersion);
        	if (this.processDefType == "Rework")
        	{
        		this.sta_isRework.set_visible(true);
        		this.sta_isRework.set_enable(true);
        	}
        	else
        	{
        		this.sta_isRework.set_visible(false);
        		this.sta_isRework.set_enable(false);
        	}
        	if (isRcLot == "Y")
        	{
        		this.sta_isRCLot.set_visible(true);
        		this.sta_isRCLot.set_enable(true);
        	}
        	else
        	{
        		this.sta_isRCLot.set_visible(false);
        		this.sta_isRCLot.set_enable(false);
        	}

        //	this.fn_setUnitOfMaterialControlEnable();

        	//this.pfsDetail_tabSearch();
        };
        /*
        this.fn_pfsDetail_setEnable = function (isEnable)
        {
        	switch (this.currProcessType)
        	{
        		case ProcessType.LotAccept:
        			this.div_work.form.tab.set_enable(isEnable);
        			break;
        		case ProcessType.StartWork:
        			this.div_work.form.tab.set_enable(isEnable);
        			break;
        		case ProcessType.WorkCompletion:
        			this.div_work.form.tab.set_enable(isEnable);
        			break;
        		case ProcessType.TransitRegist:
        			this.div_work.form.tab.set_enable(isEnable);
        			break;
        	}
        };
        */
        /*
         this.fn_setUnitOfMaterialControlEnable = function ()
         {
         	var defectUnit = this.ds_lotInfo.getColumn(0, "DEFECTUNIT");

         	if (this.gfn_isNull(defectUnit))
         	{
         		var materialClass = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "MATERIALCLASS"), "");

        // 		this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_value("PNL"); // cboUnitOfMaterial.EditValue = "PNL"; ??
        		this.ds_work.setColumn(0, "UNIT", "PNL");

         		if (materialClass == "FG")
         		{
         //			this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_enable(true);
         		}
         		else
         		{
         			var pcsPnl = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PANELPERQTY"), "0"));

         			if (pcsPnl == 0) {
         	//			this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_value("EA"); // cboUnitOfMaterial.EditValue = "EA"; ??
        				this.ds_work.setColumn(0, "UNIT", "EA");
        		    }
         //			this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_enable(true);
         		}

         	}
         	else
         	{
        // 		this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_value(defectUnit); // cboUnitOfMaterial.EditValue = defectUnit; ??
        		this.ds_work.setColumn(0, "UNIT", defectUnit);


        // 		this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_enable(false);
         	}
         };
        */
        /*
         *	최하단 불량 검사 그리드에 원인품목 리스트를 다시 읽어옴.
         */
        this.fn_GetReasonConsumableList = function ()
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "LOTID", this.edt_lotId.value );
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.pfn_CostomQuery(this.ds_search, this.ds_ReasonConsumableList, "selectReasonConsumableList");
        };

        /*
         *	최하단 불량 검사 그리드에 원인자재LOT 리스트를 다시 읽어옴.
         */
        this.fn_GetDefectReasonConsumableLot = function ()
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "LOTID", this.edt_lotId.value );
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.pfn_CostomQuery(this.ds_search, this.ds_ReasonConsumableLot, "selectDefectReasonConsumableLot");
        };

        /*
         *	최하단 불량 검사 그리드에 원인공정 리스트를 다시 읽어옴.
         */
        this.fn_GetDefectReasonProcesssegment = function ()
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "LOTID", this.edt_lotId.value );
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.pfn_CostomQuery(this.ds_search, this.ds_ReasonProcessSegment, "selectDefectReasonProcesssegment");
        };

        this.fn_checkDefectCodeCount = function()
        {
        	for(var i=0; i<this.ds_defect.rowcount; i++){
        		var nRow = this.ds_defect.findRowExpr("DEFECTCODE=='"+this.ds_defect.getColumn(i,"DEFECTCODE")+"' && QCSEGMENTID=='"+this.ds_defect.getColumn(i,"QCSEGMENTID")+"'", i+1);
        		if(nRow>i){
        			this.gfn_Message("SameDefectCodeError", null, "warning", "ok");
        			this.ds_defect.set_enableevent(false);
        			this.ds_defect.deleteRow(nRow);
        			this.ds_defect.set_enableevent(true);
        			return true;
        		}
        	}
        	return false;
        };
        /*
         this.fn_setQty = function (defectQty)
         {
         	defectQty = nexacro.toNumber(defectQty);
         	var unit = this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.value;
         	var panelQty = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PNLQTY"), "0"));
         	var qty = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PCSQTY"), "0"));
         	var pcsPnl = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PANELPERQTY"), "0"));
         	var dDefectPnlQty = 0;
         	var dGoodPnlQty = 0;

         	if (pcsPnl > 0)
         	{
         		dGoodPnlQty = nexacro.ceil((qty - defectQty) / pcsPnl);
         		dDefectPnlQty = nexacro.ceil(defectQty / pcsPnl);
         	}
        // 	this.div_work.form.div_pfsInfo.form.spn_numDefectQty.set_value(defectQty);
        // 	this.div_work.form.div_pfsInfo.form.spn_numGoodQty.set_value(qty - defectQty);
        // 	this.div_work.form.div_pfsInfo.form.spn_numGoodPnlQty.set_value(dGoodPnlQty);
        // 	this.div_work.form.div_pfsInfo.form.spn_numDefectPnlQty.set_value(dDefectPnlQty);
         };
        */
        this.fn_checkAlreadyInputLot = function(lotId, fieldName)
        {
        	var resultRow = this.ds_consumable.findRow(fieldName, lotId);
        	if (resultRow > -1)
        	{
        		// 이미 등록된 Lot Id 입니다. Lot Id = {0}
        		this.gfn_Message("AlreadyInputLot", [lotId], "warning", "ok");
        		this.ds_consumable.set_rowposition(resultRow);
        		//this.grd_consumable.setFocus();
        		return false;
        	}
        	return true;
        };

         this.fn_getLotProductTypePathType = function ()
         {
        	this.ds_lotParam.clearData();
        	this.ds_lotParam.addRow();
        	this.ds_lotParam.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_lotParam.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_lotParam.setColumn(0, "LOTID", this.edt_lotId.value);
        	this.ds_lotParam.setColumn(0, "VERSION", "10001");


        	//10001
        	var sSvcID = "getLotProductTypePathType";
        	var sController = "/pcm01700/getLotProductTypePathType.do";
        	var sInDatasets = "INPUT=ds_lotParam";
        	var sOutDatasets = "ds_pathType=output";  // 확인
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
         };

         /*
         * 치공구 조회
         */
         this.fn_searchSelectDurable = function (durableLotId)
         {
        	var productDefType = this.ds_lotInfo.getColumn(0,"PROCESSSEGMENTID");

        	this.ds_durableParam.clearData();
        	this.ds_durableParam.addRow();
        	this.ds_durableParam.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_durableParam.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_durableParam.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_durableParam.setColumn(0, "LOTID", this.edt_lotId.value);
        	//this.ds_durableParam.setColumn(0, "MATERIALTYPE", "Durable");
        	this.ds_durableParam.setColumn(0, "VERSION", "10001");
        	if(productDefType=="SubAssembly")
        		this.ds_durableParam.setColumn(0, "DURABLESTATE", "Available,InUse");
        	else
        		this.ds_durableParam.setColumn(0, "DURABLESTATE", "Available");

        	var sSvcID = "selectDurableListByProcessWorkStart";
        	var sController = "/pcm01800/selectDurableListByProcessWorkStartAndBOR.do";
        	var sInDatasets = "INPUT=ds_durableParam";
        	var sOutDatasets = "ds_durable=output2 ds_BORDurable=output1";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.div_work_div_search_edt_area_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.div_work_div_search_btn_area_onclick();
        	}
        };

        this.div_work_div_search_btn_area_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType());
        	sArgs += this.gfn_setParam("AREATYPE", "Area");
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("USERID", this.gf_getUserId());
        	this.fn_openPop("AREA_ID","P00148", sArgs); //작업장 조회
        };

        this.div_work_div_search_edt_lotId_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fn_search();
        	}
        };

        this.btn_workerSrh_onclick = function(obj,e)
        {
        	if(this.ds_lotInfo.rowcount==0) return;
         	if (this.currProcessType == ProcessType.LotAccept || this.currProcessType == ProcessType.TransitRegist)
         	{
         		this.fn_setUserInfo();
         	}
         	else
         	{
         		this.fn_setUserInfoByArea();
         	}
        };

        this.grd_defectList_onexpandup = function(obj,e)
        {
        	if(e.row <0) return;
        	/* Form 에서 Grid Cell 기준으로 위치얻기 */
        	var objRect = obj.getCellRect(e.row, e.cell);

        	/* cell 기준 position으로 클라이언트 기준 X, Y 좌표를 스크린 기준 기준으로 바꾸어 위치얻기 */
        	var nLeft = system.clientToScreenX(obj, objRect.left);
        	var nTop = system.clientToScreenY(obj, objRect.bottom);

        	/* 스크린 기준 X, Y 좌표를 클라이언트 기준으로 바꾸어 위치얻기 */
        	nLeft = system.screenToClientX(nexacro.getApplication().mainframe, nLeft);
        	nTop = system.screenToClientY(nexacro.getApplication().mainframe, nTop);

        	if (this.nfn_isEqualCol(obj, e.col, "SEGMENT_DEFECTCODE"))
        	{
        		this.mfn_OpenDefectPopup();
        	}
        	else if (this.nfn_isEqualCol(obj, e.col, "CONSUMABLEDEFNAME")) // 원인품목
        	{
        		this.pdv_ReasonConsumableList.show();
        		this.pdv_ReasonConsumableList.trackPopup(nLeft, nTop, this.pdv_ReasonConsumableList.width, this.pdv_ReasonConsumableList.height, "fn_Callback_pdv_ReasonConsumableList");
        	}
        	else if (this.nfn_isEqualCol(obj, e.col, "REASONPROCESSSEGMENTNAME")) //원인공정
        	{
        		this.ds_ReasonProcessSegment.filter("");
        		if(this.gfn_isNull(this.ds_defect.getColumn(e.row,"REASONCONSUMABLELOTID"))==false && this.ds_defect.getColumn(e.row,"REASONCONSUMABLELOTID") != ""){
        			this.ds_ReasonProcessSegment.filter("REASONCONSUMABLELOTID == '" + this.ds_defect.getColumn(e.row,"REASONCONSUMABLELOTID") + "'")
        			//trace(this.ds_ReasonProcessSegment.saveXML());
        		}
        		this.pdv_ReasonProcessSegment.show();
        		this.pdv_ReasonProcessSegment.trackPopup(nLeft, nTop, this.pdv_ReasonProcessSegment.width, this.pdv_ReasonProcessSegment.height, "fn_Callback_pdv_ReasonProcessSegment");
        	}
        	else if (this.nfn_isEqualCol(obj, e.col, "DEFECTCODE_BTN"))
        	{
        		this.ds_defect.setColumn(e.row,"DEFECTCODE", "");
        		this.ds_defect.setColumn(e.row,"DEFECTCODENAME", "");
        		this.ds_defect.setColumn(e.row,"QCSEGMENTID", "");
        		this.ds_defect.setColumn(e.row,"QCSEGMENTNAME", "");
        		this.ds_defect.setColumn(e.row,"DECISIONDEGREE", "");
        	}
        	else if (this.nfn_isEqualCol(obj, e.col, "PNLQTY_BTN"))
        	{
        		this.ds_defect.setColumn(e.row, "PNLQTY", "");
        	}
        	else if (this.nfn_isEqualCol(obj, e.col, "QTY_BTN"))
        	{
        		this.ds_defect.setColumn(e.row, "QTY", "");
        	}
        };

        this.div_work_tab_tpgDefect_btn_addRow_onclick = function(obj,e)
        {
        	if(this.ds_lotInfo.rowcount == 0) return;
        	this.ds_defect.addRow();
        };

        this.ds_defect_oncolumnchanged = function(obj,e)
        {
        	var panelPerQty = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PANELPERQTY"), "0"));
        	var g_PnlQty      = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PNLQTY"), "0"));
        	var g_PcsQty      = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PCSQTY"), "0"));

        	if (panelPerQty <= 0 && (e.columnid == "PNLQTY" || e.columnid == "QTY" || e.columnid == "QCSEGMENTNAME"))
        	{
        		return;
        	}
        	else
        	{
        		obj.set_enableevent(false);

        		if (e.columnid == "PNLQTY" || e.columnid == "QTY")
        		{
        			if (e.columnid == "PNLQTY")
        			{
        				var pnlQty = nexacro.toNumber(this.nfn_nvl(e.newvalue, "0"));
        				var qty = panelPerQty * pnlQty;

        				obj.setColumn(e.row, "QTY", qty);
        				obj.setColumn(e.row, "DEFECTRATE", (qty / g_PcsQty) * 100);
        			}

        			if (e.columnid == "QTY")
        			{
        				var qty = nexacro.toNumber(this.nfn_nvl(e.newvalue, "0"));

        				var pnlQty = 0;
        				if (panelPerQty > 0)
        					pnlQty = nexacro.ceil(qty / panelPerQty);

        				obj.setColumn(e.row, "PNLQTY", pnlQty);
        				obj.setColumn(e.row, "DEFECTRATE", (qty / g_PcsQty) * 100);


        				this.fn_setQty(obj.getSum("QTY"));
        			}

        			this.ds_work.setColumn(0, "DEFECTQTY"   , obj.getSum("QTY"));
        			this.ds_work.setColumn(0, "DEFECTPNLQTY", obj.getSum("PNLQTY"));


        			if(this.pnlQty_enter && e.columnid == "PNLQTY")
        			{
        				obj.addRow();
        			}

        		}
        		else
        		{
        			if (e.columnid == "QCSEGMENTNAME")
        			{
        				if(this.fn_checkDefectCodeCount()) return;
        			}
        		}



        		var defectQty = nexacro.toNumber(this.nfn_nvl(obj.getSum("QTY"), "0"));


        		this.fn_setQty(defectQty);

        		obj.set_enableevent(true);
        	}

        };

        /*
         *	원인 품목 셀 팝업 그리드 활성화
         */
        this.pdv_ReasonConsumableList_grd_ReasonConsumableList_oncelldblclick = function(obj,e)
        {
        	//값 받아서 처리 로직 넣으세요
        	var idver = this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"SPLITCONSUMABLEDEFIDVERSION");
        	var prodName = this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"CONSUMABLEDEFNAME");
        	var prodID = this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"CONSUMABLEDEFID");
        	var prodVer = this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"CONSUMABLEDEFVERSION");

        	this.ds_defect.set_enableevent(false);

        	var nRow = this.ds_defect.rowposition;

        	this.ds_defect.setColumn(nRow,"SPLITCONSUMABLEDEFIDVERSION",idver); // 자재ID | 자재버전
        	this.ds_defect.setColumn(nRow,"CONSUMABLEDEFNAME",prodName); // 자재명
        	this.ds_defect.setColumn(nRow,"REASONCONSUMABLEDEFID",prodID); // 자재ID
        	this.ds_defect.setColumn(nRow,"REASONCONSUMABLEDEFVERSION",prodVer); // 자재버전

        	this.ds_defect.set_enableevent(true);

        	this.pdv_ReasonConsumableList.closePopup();
        };

        /*
         *	원인 공정 셀 팝업 그리드 활성화
         */
        this.pdv_ReasonProcessSegment_grd_ReasonProcessSegment_oncelldblclick = function(obj,e)
        {
        	var segName = this.ds_ReasonProcessSegment.getColumn(this.ds_ReasonProcessSegment.rowposition,"PROCESSSEGMENTNAME");
        	var segID = this.ds_ReasonProcessSegment.getColumn(this.ds_ReasonProcessSegment.rowposition,"PROCESSSEGMENTID");
        	var aeraID = this.ds_ReasonProcessSegment.getColumn(this.ds_ReasonProcessSegment.rowposition,"AREAID");
        	var aeraName = this.ds_ReasonProcessSegment.getColumn(this.ds_ReasonProcessSegment.rowposition,"AREANAME");

        	this.ds_defect.set_enableevent(false);

        	var nRow = this.ds_defect.rowposition;

        	this.ds_defect.setColumn(nRow,"REASONPROCESSSEGMENTID",segID); //공정ID
        	this.ds_defect.setColumn(nRow,"REASONPROCESSSEGMENTNAME",segName); // 공정명
        	this.ds_defect.setColumn(nRow,"REASONAREAID",aeraID);  //작업장ID
        	this.ds_defect.setColumn(nRow,"REASONAREANAME",aeraName); //작업장명

        	this.ds_defect.set_enableevent(true);

        	this.pdv_ReasonProcessSegment.closePopup();
        };

        this.ds_message_onrowposchanged = function(obj,e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "P_TXNHISTKEY", obj.getColumn(e.newrow, "TXNHISTKEY"));
        	this.ds_search.setColumn(0, "P_LOTID", obj.getColumn(e.newrow, "LOTID"));
        	this.ds_search.setColumn(0, "P_PROCESSSEGMENTID", obj.getColumn(e.newrow, "PROCESSSEGMENTID"));
        	this.ds_search.setColumn(0, "P_USERSEQUENCE", obj.getColumn(e.newrow, "USERSEQUENCE"));
        	this.ds_search.setColumn(0, "VERSION", "10001");


        	var sSvcID = "selectLotMessage";
        	var sController = "/pcm01700/selectLotMessage.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_messageDtl=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.div_work_tab_tpgDefect_btn_delRow_ds_defect_onclick = function(obj,e)
        {
        	var defectQty = nexacro.toNumber(this.nfn_nvl(this.ds_defect.getSum("QTY"), "0"));
        	this.fn_setQty(defectQty);
        };

        this.grd_defectList_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) this.pnlQty_enter = true;
        	if(obj.currentcol==1){
        		if(e.keycode == 13)
        		{
        			this.pnlQty_enter = true;

        			var nRow = obj.currentrow;
        			obj.moveToNextCell();
        			this.mfn_OpenDefectPopup();
        		}else if(e.keycode >=96 && e.keycode <= 105){
        			var nRow = obj.currentrow;
        			this.ds_defect.setColumn(nRow,"SEGMENT_DEFECTCODE","");
        		}
        	}
        };
        /*
        this.cbo_unitOfMaterial_onitemchanged = function(obj:nexacro.Combo,e:nexacro.ItemChangeEventInfo)
        {
        	var val = this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.value;
        	if(val=="PNL"){
        		this.div_work.form.tab.tpgDefect.form.grd_defect.setCellProperty("Body",4,"edittype","mask");
        		this.div_work.form.tab.tpgDefect.form.grd_defect.setCellProperty("Body",5,"edittype","none");
        	}else{
        		this.div_work.form.tab.tpgDefect.form.grd_defect.setCellProperty("Body",4,"edittype","none");
        		this.div_work.form.tab.tpgDefect.form.grd_defect.setCellProperty("Body",5,"edittype","mask");
        	}
        };
        */
        this.edt_consumableLotIdStart_onkeydown = function(obj,e)
        {
        	//if(e.keycode == 13 || e.keycode == 9)
        	if(e.keycode == 13)
        	{
        		if(this.gfn_isNull(obj.value) || this.ds_lotInfo.rowcount==0) return;

        		//this.div_work.form.div_pfsInfo.form.edt_comment.setFocus();
        		if (!this.fn_checkAlreadyInputLot(obj.value, "CONSUMABLELOTID"))
        		{
        			obj.set_value("");
        			return;
        		}
        		this._lotId = obj.value;

        		this.ds_search.clearData();
        		this.ds_search.addRow();
        		this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        		this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());
        		this.ds_search.setColumn(0, "LOTID", this.ds_lotInfo.getColumn(0,"LOTID"));
        		this.ds_search.setColumn(0, "CONSUMABLELOTID", obj.value);//this.div_work.form.tab.tpgConsumableStart.form.edt_consumableLotIdStart.value);
        		this.ds_search.setColumn(0, "VERSION", "10001");

        		obj.set_value("");

        		var sSvcID = "getConsumableLotByProcess";
        		var sController = "/pcm01800/getConsumableLotByProcess.do";
        		var sInDatasets = "INPUT=ds_search";
        		var sOutDatasets = "ds_consumableListTemp=output";
        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        };

        this.edt_durableLotIdStart_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13 || e.keycode == 9)
        	{
        		this.fn_searchSelectDurable(obj.value);
        	}
        };

        this.ds_durable_oncolumnchanged = function(obj,e)
        {
        };

        this.mfn_OpenDefectPopup = function ()
        {
        	var mRow = this.ds_lotInfo.rowposition;
        	var nRow = this.ds_defect.rowposition;

        	var popupId = "SEARCH_DEFECT";
        	var lotID = this.ds_lotInfo.getColumn(mRow, "LOTID");
        	var defectID = this.ds_defect.getColumn(nRow,"SEGMENT_DEFECTCODE");
        	var qcSegmentID = this.ds_defect.getColumn(nRow,"QCSEGMENTID");
        	var language = this.gf_getLanguageType();

        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00241";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "DEFECTCODE|DEFECTCODENAME|QCSEGMENTID|QCSEGMENTNAME|DECISIONDEGREE|SEGMENT_DEFECTCODE|SEGMENT_DEFECTNAME";
        	oArg.arg_paramCols = "LOTID|SEGMENTID|LANGUAGETYPE|VERSION";
        	oArg.arg_paramValues = lotID + "|" + qcSegmentID+"|"+this.gf_getLanguageType()+"|10003";
        	oArg.arg_searchStr = this.gfn_isNull(defectID) ? "" : "DEFECTCODENAME=" + defectID ;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=450,height=800");
        };
        this.fn_getStepName = function(step, processState)
        {
        	var sRow 		= this.ds_step.findRowExpr("DESCRIPTION == '"+this.ds_lotInfo.getColumn(0, "STEPTYPE")+"'");
        	var stepName 	= this.ds_step.getColumn(sRow, "NAME");
        	this.gfn_Message("InvalidProcessStateInStepType", [stepName, this.ds_lotInfo.getColumn(0, "PROCESSSTATE")], "info", "ok");
        }
        /*
        this.ds_equipment_oncolumnchanged = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo)
        {
        	obj.set_enableevent(false);
        	if(e.columnid=="CHK"){
        		if(e.newvalue=="1"){
        			var nRow = this.ds_cboequipment.addRow();
        			this.ds_cboequipment.setColumn(nRow,"code",obj.getColumn(e.row,"EQUIPMENTID"));
        			this.ds_cboequipment.setColumn(nRow,"desc",obj.getColumn(e.row,"EQUIPMENTNAME"));
        		}else{
        			this.ds_cboequipment.deleteRow(this.ds_cboequipment.findRow("code",obj.getColumn(e.row,"EQUIPMENTID")));
        			this.ds_durable.set_enableevent(false);
        			for(var i=0; i<this.ds_durable.rowcount; i++){
        				if(obj.getColumn(e.row,"EQUIPMENTID") == this.ds_durable.getColumn(i,"EQUIPMENTID")){
        					this.ds_durable.setColumn(i,"EQUIPMENTID","");
        				}
        			}
        			this.ds_durable.set_enableevent(true);
        		}
        		var equipments = "";
        		var j=0;
        		for(var i=0; i<obj.rowcount; i++){
        			if(obj.getColumn(i,"CHK")=="1"){
        				var str = (j==0?"":",");
        				equipments = equipments + str + obj.getColumn(i,"EQUIPMENTNAME");
        				j++;
        			}
        		}
        		this.edt_equipment.set_value(equipments);
        	}

        	obj.set_enableevent(true);
        };
        */
        this.btn_msg_onclick = function(obj,e)
        {
        	if(this.ds_lotInfo.rowcount==0) return;
        	bMsgShow = true;
        	var left = nexacro.toNumber(obj.left) + 30;
        	var top = nexacro.toNumber(obj.top) + 100;
        	this.pdv_msg.trackPopup(left, top, this.pdv_msg.width, this.pdv_msg.height, "fn_Callback_pdv_grdMenu");
        	this.pdv_msg.show();
        	this.pdv_msg_grd_message_onselectchanged();
        };

        this.pdv_msg_btn_close_onclick = function(obj,e)
        {
        	this.pdv_msg.closePopup();
        };

        this.edt_area_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.div_work_div_search_btn_area_onclick();
        	}
        };

        this.edt_lotId_onkeydown = function(obj,e)
        {
        	if(e.keycode==13) this.fn_search();
        };

        this.btn_equipment_onclick = function(obj,e)
        {
        	if(this.ds_lotInfo.rowcount==0) return;
        	var left = 30;
        	var top = 100;
        	this.pdv_durable.trackPopup(left, top, this.pdv_durable.width, this.pdv_durable.height, "fn_Callback_pdv_grdMenu");
        	this.pdv_durable.show();
        };

        this.pdv_durable_btn_close_onclick = function(obj,e)
        {
        	this.pdv_durable.closePopup();
        };

        this.pdv_consumable_btn_close_onclick = function(obj,e)
        {
        	//this.pdv_consumable.closePopup();
        	this.div_consumable.set_visible(false);
        };

        this.btn_consumable_onclick = function(obj,e)
        {
        	if(this.ds_lotInfo.rowcount==0) return;
        /*
        	var left = 100;
        	var top = 100;
        	this.pdv_consumable.trackPopup(left, top, this.pdv_consumable.width, this.pdv_consumable.height, "fn_Callback_pdv_grdMenu");
        	this.pdv_consumable.show();
        	this.pdv_consumable.form.edt_consumableLotIdStart.setFocus();
        */
        	var left = 30;
        	var top = 100;
        	this.div_consumable.set_left(left);
        	this.div_consumable.set_top(top);
        	this.div_consumable.set_visible(true);

        };

        this.pdv_msg_grd_message_onselectchanged = function(obj,e)
        {
        	if(this.ds_message.rowposition <0) return;

        	if(!bMsgShow) return;
        	this.ds_param.clearData();
        	this.ds_param.addRow();
        	this.ds_param.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_param.setColumn(0, "P_TXNHISTKEY", this.ds_message.getColumn(this.ds_message.rowposition, "TXNHISTKEY"));
        	this.ds_param.setColumn(0, "P_LOTID", this.ds_message.getColumn(this.ds_message.rowposition, "LOTID"));
        	this.ds_param.setColumn(0, "P_PROCESSSEGMENTID", this.ds_message.getColumn(this.ds_message.rowposition, "PROCESSSEGMENTID"));
        	this.ds_param.setColumn(0, "P_USERSEQUENCE", this.ds_message.getColumn(this.ds_message.rowposition, "USERSEQUENCE"));
        	this.ds_param.setColumn(0, "VERSION", "10001");
        	if("N"==this.ds_message.getColumn(this.ds_message.rowposition, "ISREAD")){
        		this.ds_param.setColumn(0, "ISREAD", "Y");
        		this.ds_param.setColumn(0, "LOTID", this.ds_message.getColumn(this.ds_message.rowposition, "LOTID"));
        		this.ds_param.setColumn(0, "SEQUENCE", this.ds_message.getColumn(this.ds_message.rowposition, "TXNHISTKEY"));
        		this.ds_param.setColumn(0, "PRODUCTDEFID", this.ds_lotInfo.getColumn(this.ds_lotInfo.rowposition, "PRODUCTDEFID"));
        		this.ds_param.setColumn(0, "PRODUCTDEFVERSION", this.ds_lotInfo.getColumn(this.ds_lotInfo.rowposition, "PRODUCTDEFVERSION"));
        		this.ds_param.setColumn(0, "PROCESSSEGMENTID", this.ds_lotInfo.getColumn(this.ds_lotInfo.rowposition, "PROCESSSEGMENTID"));
        		this.ds_param.setColumn(0, "PROCESSSEGMENTVERSION", this.ds_lotInfo.getColumn(this.ds_lotInfo.rowposition, "PROCESSSEGMENTVERSION"));
        	}

        	var sSvcID = "selectLotMessage";
        	var sController = "/pcm01700/selectLotMessage.do";
        	var sInDatasets = "INPUT=ds_param";
        	var sOutDatasets = "ds_messageDtl=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.btn_resource_onclick = function(obj,e)
        {
        	if(this.ds_lotInfo.rowcount==0) return;
        	var left = 145;
        	var top = obj.top;
        	this.pdv_resource.set_height(33 * (1 + nexacro.toNumber(this.ds_transitArea.rowcount)));
        	this.pdv_resource.trackPopup(left, top, this.pdv_resource.width, this.pdv_resource.height, "fn_Callback_pdv");
        	this.pdv_resource.show();
        };

        this.pdv_resource_grd_resource_oncellclick = function(obj,e)
        {
        	this.edt_resource.set_value(this.ds_transitArea.getColumn(e.row,"RESOURCENAME"));
        	this.edt_resource_id.set_value(this.ds_transitArea.getColumn(e.row,"RESOURCEID"));
        	this.pdv_resource.closePopup();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.edt_lotId.addEventHandler("onkeydown",this.edt_lotId_onkeydown,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.edt_area.addEventHandler("onkeydown",this.edt_area_onkeydown,this);
            this.btn_area.addEventHandler("onclick",this.div_work_div_search_btn_area_onclick,this);
            this.btn_msg.addEventHandler("onclick",this.btn_msg_onclick,this);
            this.pdv_msg.form.grd_message.addEventHandler("onselectchanged",this.pdv_msg_grd_message_onselectchanged,this);
            this.pdv_msg.form.btn_close.addEventHandler("onclick",this.pdv_msg_btn_close_onclick,this);
            this.pdv_msg.form.pdv_msg.form.grd_message.addEventHandler("onselectchanged",this.pdv_msg_grd_message_onselectchanged,this);
            this.pdv_msg.form.pdv_msg.form.btn_close00.addEventHandler("onclick",this.pdv_msg_btn_close00_onclick,this);
            this.btn_work.addEventHandler("onclick",this.btn_workerSrh_onclick,this);
            this.btn_equipment.addEventHandler("onclick",this.btn_equipment_onclick,this);
            this.btn_consumable.addEventHandler("onclick",this.btn_consumable_onclick,this);
            this.pdv_durable.form.btn_close.addEventHandler("onclick",this.pdv_durable_btn_close_onclick,this);
            this.pdv_durable.form.pdv_msg.form.grd_message.addEventHandler("onselectchanged",this.pdv_msg_grd_message_onselectchanged,this);
            this.pdv_durable.form.pdv_msg.form.btn_close00.addEventHandler("onclick",this.pdv_msg_btn_close00_onclick,this);
            this.pdv_consumable.form.btn_close.addEventHandler("onclick",this.pdv_consumable_btn_close_onclick,this);
            this.pdv_consumable.form.pdv_msg.form.grd_message.addEventHandler("onselectchanged",this.pdv_msg_grd_message_onselectchanged,this);
            this.pdv_consumable.form.pdv_msg.form.btn_close00.addEventHandler("onclick",this.pdv_msg_btn_close00_onclick,this);
            this.pdv_consumable.form.edt_consumableLotIdStart.addEventHandler("onkeydown",this.edt_consumableLotIdStart_onkeydown,this);
            this.div_consumable.form.grd_consumable.addEventHandler("onselectchanged",this.div_consumable_grd_consumable_onselectchanged,this);
            this.div_consumable.form.edt_consumableLotIdStart.addEventHandler("onkeydown",this.edt_consumableLotIdStart_onkeydown,this);
            this.div_consumable.form.btn_close.addEventHandler("onclick",this.pdv_consumable_btn_close_onclick,this);
            this.edt_resource.addEventHandler("onkeydown",this.edt_area_onkeydown,this);
            this.btn_resource.addEventHandler("onclick",this.btn_resource_onclick,this);
            this.pdv_resource.form.grd_resource.addEventHandler("oncellclick",this.pdv_resource_grd_resource_oncellclick,this);
            this.ds_defect.addEventHandler("oncolumnchanged",this.ds_defect_oncolumnchanged,this);
            this.ds_equipment.addEventHandler("oncolumnchanged",this.ds_equipment_oncolumnchanged,this);
            this.ds_consumable.addEventHandler("onrowposchanged",this.ds_consumableList_onrowposchanged,this);
            this.ds_durable.addEventHandler("oncolumnchanged",this.ds_durable_oncolumnchanged,this);
            this.ds_durableTemp.addEventHandler("oncolumnchanged",this.ds_durable_oncolumnchanged,this);
            this.ds_durableSave.addEventHandler("oncolumnchanged",this.ds_durable_oncolumnchanged,this);
        };
        this.loadIncludeScript("PDA00400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
