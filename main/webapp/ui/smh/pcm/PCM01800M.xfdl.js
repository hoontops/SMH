(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01800M");
            this.set_titletext("작업시작");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
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
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTRCLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFSHIPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFTAKEINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISBEFOREROLLCUTTING\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"UOMCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"P_TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_worker", this);
            obj._setContents("<ColumnInfo><Column id=\"WORKERID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKERNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dataInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKER\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GOODPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISBATCH\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defect", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"QTY_BTN\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_message", this);
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WRITEPROCESSSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"WRITEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISREAD\" type=\"STRING\" size=\"256\"/><Column id=\"CONTEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_equipment", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECIPEID\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_WHERE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_standardRequirement", this);
            obj._setContents("<ColumnInfo><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"STANDARDREQUIREMENTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REQUIREMENTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ALTITEM\" type=\"STRING\" size=\"256\"/><Column id=\"ALTREVISION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_WHERE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_useclientlayout("true");
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

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","31",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","62",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","80","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("작업 시작");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
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
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","0",null,"32","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("상세영역");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_formscrollbartype("none");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_area","0","0","119","31",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("0");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_lotId","337","0","87","31",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("1");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_innerRevision","797","0","84","31",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("5");
            obj.set_text("내부 Rev");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_isRCLot","657","5","115","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("7");
            obj.set_text("Running Change");
            obj.set_background("#ec0928");
            obj.set_color("#ffffff");
            obj.set_padding("0px 10px");
            obj.set_visible("false");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","sta_lotId:8","5","222","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("2");
            obj.set_imemode("alpha");
            obj.set_autoselect("true");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_area","310","5","22","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_area","sta_area:5","5","188","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_innerRevisionText","sta_innerRevision:5","5","59","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("6");
            obj.set_font("normal 700 12px/normal \"Dotum\",\"돋움\",\"Arial\"");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("FA1");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_isRework","edt_innerRevisionText:2","5","113","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("8");
            obj.set_text("REWORK");
            obj.set_background("blue");
            obj.set_color("#ffffff");
            obj.set_padding("0px 10px");
            obj.set_visible("false");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","4","5","58","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("9");
            obj.set_visible("false");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Div("div_lotInfo","0","66",null,"125","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label00","0","0","9.55%","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("0");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("LOTID");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("label01","21.97%","0","9.47%","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("1");
            obj.set_text("이전공정명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PREVPROCESSSEGMENTNAME");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","label00:5","5",null,"20","label01:5",null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("20");
            obj.set_value("210115F002-1-FG00-002-001");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("210115F002-1-FG00-002-001");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("label02","42.99%","0","9.47%","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("2");
            obj.set_text("공정명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PROCESSSEGMENTNAME");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Edit("edt_04","label01:5","5",null,"20","label02:5",null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("24");
            obj.set_value("SAMPLE");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("SAMPLE");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("label03","62.10%","0","9.47%","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("3");
            obj.set_text("후공정");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("NEXTPROCESSSEGMENTNAME");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Edit("edt_07","label02:5","5",null,"20","label03:5",null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("28");
            obj.set_value("RTR UV-LASER");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("RTR UV-LASER");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("label04","81.29%","0","9.55%","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("4");
            obj.set_text("공정수순");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("USERSEQUENCE");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Edit("edt_13","label04:5","5",null,"20","5",null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("35");
            obj.set_value("10");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("10");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("label06","0","31","9.55%","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("5");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("label07","21.97%","31","9.47%","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("6");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Edit("edt_01","label06:5","36",null,"20","label07:5",null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("21");
            obj.set_value("1025362J1");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("1025362J1");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("label08","42.99%","31","9.47%","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("7");
            obj.set_text("투입일자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("INPUTDATE");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Edit("edt_05","label07:5","36",null,"20","label08:5",null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("25");
            obj.set_value("AMB687VX01 DIGITIZER(2L)-IFC");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("AMB687VX01 DIGITIZER(2L)-IFC");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("label09","62.10%","31","9.47%","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("8");
            obj.set_text("S/O번호");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTIONORDERID");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_00","label08:5","36",null,"20","label09:5",null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210118");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("label10","81.29%","31","9.55%","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("9");
            obj.set_text("납기일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("DUEDATE");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("label11","0","62","9.55%","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("10");
            obj.set_text("품목유형구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTDEFTYPEID");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("label12","21.97%","62","9.47%","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("11");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTIONTYPENAME");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Edit("edt_02","label11:5","67",null,"20","label12:5",null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("22");
            obj.set_value("제품");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("제품");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("label13","42.99%","62","9.47%","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("12");
            obj.set_text("Locking 여부");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("ISLOCKING");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Edit("edt_06","label12:5","67",null,"20","label13:5",null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("26");
            obj.set_value("양산");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("양산");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("label14","62.10%","62","9.47%","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("13");
            obj.set_text("재작업 여부");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("ISREWORK");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Edit("edt_08","label13:5","67",null,"20","label14:5",null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("30");
            obj.set_value("N");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("N");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("label15","81.29%","62","9.55%","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("14");
            obj.set_text("고객명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("CUSTOMERNAME");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("label16","0","93","9.55%","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("15");
            obj.set_text("단위");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("UNIT");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("label17","21.97%","93","9.47%","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("16");
            obj.set_text("수량(PNL)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PNLQTY");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Edit("edt_stepType","label16:5","98",null,"20","label17:5",null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("23");
            obj.set_value("PCS");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("PCS");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("label18","42.99%","93","9.47%","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("17");
            obj.set_text("수량(PCS)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PCSQTY");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new MaskEdit("msk_00","label17:5","98",null,"20","label18:5",null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("27");
            obj.set_value("200");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("label19","62.10%","93","9.47%","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("18");
            obj.set_text("MM");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("MM");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new MaskEdit("msk_01","label18:5","98",null,"20","label19:5",null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("31");
            obj.set_value("2400");
            obj.set_format("###,");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("label20","81.29%","93","9.55%","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("19");
            obj.set_text("자원명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("RESOURCEID");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new MaskEdit("msk_02","label19:5","98",null,"20","label20:5",null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("39");
            obj.set_value("35.29");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Edit("edt_09","label03:5","5",null,"20","label04:5",null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("32");
            obj.set_value("RTR블랙홀");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("RTR블랙홀");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Edit("edt_10","label09:5","36",null,"20","label10:5",null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("33");
            obj.set_value("40018091");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("40018091");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Edit("edt_11","label14:5","67",null,"20","label15:5",null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("34");
            obj.set_value("N");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("N");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_01","label10:5","36",null,"20","5",null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("36");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20200928");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Edit("edt_14","label15:5","67",null,"20","5",null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("37");
            obj.set_value("IFV");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("IFV");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Edit("edt_15","label20:5","98",null,"20","5",null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("38");
            obj.set_value("F1B2001A12");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("F1B2001A12");
            this.div_work.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("title1_00","0","32",null,"34","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_pfsInfo","0","194",null,"82","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_comment","5","55","85","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("0");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Static("sta_defectQty","481","30","85","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("1");
            obj.set_text("불량 수량");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Static("label01","5","5","85","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("2");
            obj.set_text("작업자");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Static("label03","5","30","85","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("3");
            obj.set_text("UOM");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Static("sta_goodQty","248","30","85","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("4");
            obj.set_text("양품 수량");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Static("sta_transitArea","248","5","85","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("5");
            obj.set_text("인계작업장");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_visible("false");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Button("btn_workerSrh","207","5","22","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            obj.set_enable("true");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Edit("edt_worker","95","5","111","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Edit("edt_comment","95","55",null,"20","3",null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_unitOfMaterial","95","30","133","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_unitOfMaterial");
            obj.set_datacolumn("UOMDEFNAME");
            obj.set_codecolumn("UOMDEFID");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_text("");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Static("sta_goodQtyUOM","464","30","31","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("10");
            obj.set_text("PNL");
            obj.set_cssclass("sta_WF_unit");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Spin("spn_numGoodPnlQty","400","30","59","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Spin("spn_numGoodQty","338","30","59","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Static("sta_printWeek","719","30","85","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("13");
            obj.set_text("인쇄주차");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_visible("false");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Static("sta_defectQtyUOM","701","30","31","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("14");
            obj.set_text("PNL");
            obj.set_cssclass("sta_WF_unit");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Spin("spn_numDefectPnlQty","635","30","60","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Spin("spn_numDefectQty","572","30","59","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("16");
            obj.set_enable("false");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_transitArea","338","5","357","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_transitArea");
            obj.set_codecolumn("AREAID");
            obj.set_datacolumn("AREANAME");
            obj.set_tooltiptext("TRANSITAREA");
            obj.set_readonly("true");
            obj.set_visible("false");
            obj.set_text("cmb_00");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Static("sta_equpmentClass","926","30","64","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("18");
            obj.set_text("설비그룹");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_visible("false");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Edit("edt_printWeek","813","30","100","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Static("sta_equpment","926","5","64","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("20");
            obj.set_text("설비");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_visible("false");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_equpment","1002","5","149","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_unitOfMaterial");
            obj.set_datacolumn("UOMDEFNAME");
            obj.set_codecolumn("UOMDEFID");
            obj.set_readonly("true");
            obj.set_visible("false");
            obj.set_text("cmb_00");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_equpmentClass","1002","30","149","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_unitOfMaterial");
            obj.set_datacolumn("UOMDEFNAME");
            obj.set_codecolumn("UOMDEFID");
            obj.set_readonly("true");
            obj.set_visible("false");
            obj.set_text("cmb_00");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Edit("edt_worker_id","5","5","41","20",null,null,null,null,null,null,this.div_work.form.div_pfsInfo.form);
            obj.set_taborder("23");
            obj.set_visible("false");
            this.div_work.form.div_pfsInfo.addChild(obj.name, obj);

            obj = new Tab("tab","0","276",null,null,"0","1",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            obj.set_preload("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("tpgEquipment",this.div_work.form.tab);
            obj.set_text("설비");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("title1_01","0","0","80","34",null,null,null,null,null,null,this.div_work.form.tab.tpgEquipment.form);
            obj.set_taborder("0");
            obj.set_text("설비");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab.tpgEquipment.addChild(obj.name, obj);

            obj = new Grid("grd_equipment","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.tpgEquipment.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_equipment");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"설비ID\" tooltiptext=\"EQUIPMENTID\"/><Cell col=\"3\" text=\"설비명\" tooltiptext=\"EQUIPMENTNAME\"/><Cell col=\"4\" text=\"Lot수\" tooltiptext=\"LOTCNT\"/><Cell col=\"5\" text=\"Receipe Id\"/><Cell col=\"6\" text=\"Recipe 버전\"/><Cell col=\"7\" text=\"Recipe Type\"/><Cell col=\"8\" text=\"설비상태\" tooltiptext=\"STATE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:EQUIPMENTID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:EQUIPMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:LOTCNT\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:RECIPEID\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:RECIPEVERSION\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:RECIPETYPE\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:STATE\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_work.form.tab.tpgEquipment.addChild(obj.name, obj);

            obj = new Edit("edt_equipment","89","9","200","20",null,null,null,null,null,null,this.div_work.form.tab.tpgEquipment.form);
            obj.set_taborder("2");
            obj.set_visible("false");
            this.div_work.form.tab.tpgEquipment.addChild(obj.name, obj);

            obj = new Tabpage("tpgComment",this.div_work.form.tab);
            obj.set_text("특기사항");
            obj.set_tooltiptext("REMARKS");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("title1_01","0","0","110","34",null,null,null,null,null,null,this.div_work.form.tab.tpgComment.form);
            obj.set_taborder("0");
            obj.set_text("특기사항");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab.tpgComment.addChild(obj.name, obj);

            obj = new Grid("grd_comment","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.tpgComment.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_comment");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"500\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"3\" text=\"특기사항\" tooltiptext=\"REMARKS\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:ISCURRENTPROCESS==&apos;Y&apos; ? &apos;cell_bg_yellow&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" textAlign=\"left\" cssclass=\"expr:ISCURRENTPROCESS==&apos;Y&apos; ? &apos;cell_bg_yellow&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" cssclass=\"expr:ISCURRENTPROCESS==&apos;Y&apos; ? &apos;cell_bg_yellow&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\" textAlign=\"left\" cssclass=\"expr:ISCURRENTPROCESS==&apos;Y&apos; ? &apos;cell_bg_yellow&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.div_work.form.tab.tpgComment.addChild(obj.name, obj);

            obj = new Tabpage("tpgProcessSpec",this.div_work.form.tab);
            obj.set_text("공정SPEC");
            obj.set_tooltiptext("PROCESSSPEC");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("title1_01","0","0","110","34",null,null,null,null,null,null,this.div_work.form.tab.tpgProcessSpec.form);
            obj.set_taborder("0");
            obj.set_text("공정 SPEC");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab.tpgProcessSpec.addChild(obj.name, obj);

            obj = new Grid("grd_processSpec","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.tpgProcessSpec.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_processSpec");
            obj.set_cssclass("grd_processSpecInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"3\" text=\"항목\" tooltiptext=\"SPECITEM\"/><Cell col=\"4\" text=\"하한값\" tooltiptext=\"LSL\"/><Cell col=\"5\" text=\"중간값\" tooltiptext=\"SL\"/><Cell col=\"6\" text=\"상한값\" tooltiptext=\"USL\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" textAlign=\"left\" cssclass=\"expr:ISCURRENTPROCESS==&apos;Y&apos; ? &apos;cell_bg_yellow&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" cssclass=\"expr:ISCURRENTPROCESS==&apos;Y&apos; ? &apos;cell_bg_yellow&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:SPECCLASSNAME\" textAlign=\"left\" cssclass=\"expr:ISCURRENTPROCESS==&apos;Y&apos; ? &apos;cell_bg_yellow&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:LSL\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" cssclass=\"expr:ISCURRENTPROCESS==&apos;Y&apos; ? &apos;cell_bg_yellow&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:SL\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" cssclass=\"expr:ISCURRENTPROCESS==&apos;Y&apos; ? &apos;cell_bg_yellow&apos;:&apos;&apos;\"/><Cell col=\"6\" text=\"bind:USL\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" cssclass=\"expr:ISCURRENTPROCESS==&apos;Y&apos; ? &apos;cell_bg_yellow&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.div_work.form.tab.tpgProcessSpec.addChild(obj.name, obj);

            obj = new Tabpage("tpgConsumableStart",this.div_work.form.tab);
            obj.set_text("자재(작업시작)");
            obj.set_tooltiptext("EQUIPMENTUSESTATUS");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("title1_01","0","0","97","34",null,null,null,null,null,null,this.div_work.form.tab.tpgConsumableStart.form);
            obj.set_taborder("0");
            obj.set_text("자재(작업시작)");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab.tpgConsumableStart.addChild(obj.name, obj);

            obj = new Static("sta_consumableLotIdStart","147","9","65","20",null,null,null,null,null,null,this.div_work.form.tab.tpgConsumableStart.form);
            obj.set_taborder("1");
            obj.set_text("자재 LOT");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_fittocontents("width");
            this.div_work.form.tab.tpgConsumableStart.addChild(obj.name, obj);

            obj = new Edit("edt_consumableLotIdStart","217","9","193","20",null,null,null,null,null,null,this.div_work.form.tab.tpgConsumableStart.form);
            obj.set_taborder("2");
            this.div_work.form.tab.tpgConsumableStart.addChild(obj.name, obj);

            obj = new Grid("grd_consumable","0","34",null,null,"514","0",null,null,null,null,this.div_work.form.tab.tpgConsumableStart.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_consumable");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"122\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"76\"/><Column size=\"70\"/><Column size=\"63\"/><Column size=\"82\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자재 ID\" tooltiptext=\"CONSUMABLEDEFID\"/><Cell col=\"2\" text=\"Rev.\" tooltiptext=\"CONSUMABLEDEFVERSION\"/><Cell col=\"3\" text=\"자재명\" tooltiptext=\"CONSUMABLEDEFNAME\"/><Cell col=\"4\" text=\"자재 LOT No.\" tooltiptext=\"CONSUMABLELOTID\"/><Cell col=\"5\" text=\"재고수량\" tooltiptext=\"STOCKQTY\"/><Cell col=\"6\" text=\"가용수량\" tooltiptext=\"AVAILABLEQTY\"/><Cell col=\"7\" text=\"투입수량\" tooltiptext=\"INPUTQTY\"/><Cell col=\"8\" text=\"할당수량\" tooltiptext=\"LOTUSINGQTY\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CONSUMABLEDEFID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CONSUMABLEDEFVERSION\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CONSUMABLELOTID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:STOCKQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"6\" text=\"bind:AVAILABLEQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"7\" text=\"bind:INPUTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"8\" text=\"bind:LOTUSINGQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" edittype=\"none\"/></Band></Format></Formats>");
            this.div_work.form.tab.tpgConsumableStart.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_consumable",null,"7","29","24","514",null,null,null,null,null,this.div_work.form.tab.tpgConsumableStart.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdDel");
            this.div_work.form.tab.tpgConsumableStart.addChild(obj.name, obj);

            obj = new Grid("grd_standardRequirement",null,"34","511",null,"0","0",null,null,null,null,this.div_work.form.tab.tpgConsumableStart.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_standardRequirement");
            obj.set_cssclass("grd_sub");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"119\"/><Column size=\"60\"/><Column size=\"181\"/><Column size=\"86\"/><Column size=\"81\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자재 ID\" tooltiptext=\"CONSUMABLEDEFID\"/><Cell col=\"2\" text=\"Rev.\" tooltiptext=\"CONSUMABLEDEFVERSION\"/><Cell col=\"3\" text=\"자재명\" tooltiptext=\"CONSUMABLEDEFNAME\"/><Cell col=\"4\" text=\"기준소요량\" tooltiptext=\"STANDARDREQUIREMENTQTY\"/><Cell col=\"5\" text=\"소요량\" tooltiptext=\"REQUIREMENTQTY\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CONSUMABLEDEFID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CONSUMABLEDEFVERSION\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:STANDARDREQUIREMENTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"5\" text=\"bind:REQUIREMENTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/></Band></Format></Formats>");
            this.div_work.form.tab.tpgConsumableStart.addChild(obj.name, obj);

            obj = new Tabpage("tpgDurableStart",this.div_work.form.tab);
            obj.set_text("치공구(작업시작)");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("title1_01","0","0","110","34",null,null,null,null,null,null,this.div_work.form.tab.tpgDurableStart.form);
            obj.set_taborder("0");
            obj.set_text("치공구(작업시작)");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab.tpgDurableStart.addChild(obj.name, obj);

            obj = new Static("sta_durableLotIdStart","140","9","77","20",null,null,null,null,null,null,this.div_work.form.tab.tpgDurableStart.form);
            obj.set_taborder("1");
            obj.set_text("치공구 LOT");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.div_work.form.tab.tpgDurableStart.addChild(obj.name, obj);

            obj = new Edit("edt_durableLotIdStart","222","9","338","20",null,null,null,null,null,null,this.div_work.form.tab.tpgDurableStart.form);
            obj.set_taborder("2");
            obj.set_visible("false");
            this.div_work.form.tab.tpgDurableStart.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_durable",null,"7","29","24","31.32%",null,null,null,null,null,this.div_work.form.tab.tpgDurableStart.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_visible("false");
            this.div_work.form.tab.tpgDurableStart.addChild(obj.name, obj);

            obj = new Grid("grd_durable","0","34",null,null,"31.32%","0",null,null,null,null,this.div_work.form.tab.tpgDurableStart.form);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_durable");
            obj.set_cssclass("grd_sub");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"0\"/><Column size=\"121\"/><Column size=\"42\"/><Column size=\"217\"/><Column size=\"138\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"치공구 ID\" tooltiptext=\"DURABLEDEFID\"/><Cell col=\"3\" text=\"Rev.\"/><Cell col=\"4\" text=\"치공구 명\" tooltiptext=\"DURABLEDEFNAME\"/><Cell col=\"5\" text=\"Tool No.\" tooltiptext=\"DURABLELOTID\"/><Cell col=\"6\" text=\"사용타수\" tooltiptext=\"USEDCOUNT\"/><Cell col=\"7\" text=\"누적타수\" tooltiptext=\"TOTALUSEDCOUNT\"/><Cell col=\"8\" text=\"보증타수\" tooltiptext=\"USEDLIMIT\"/><Cell col=\"9\" text=\"연마기준타수\" tooltiptext=\"CLEANLIMIT\"/><Cell col=\"10\" text=\"타발타수\" tooltiptext=\"USINGQTY\"/><Cell col=\"11\" text=\"설비\" tooltiptext=\"EQUIPMENT\" cssclass=\"cell_point\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:DURABLEDEFID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:DURABLEDEFVERSION\"/><Cell col=\"4\" text=\"bind:DURABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:DURABLELOTID\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:USEDCOUNT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"7\" text=\"bind:TOTALUSEDCOUNT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"8\" text=\"bind:USEDLIMIT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"9\" text=\"bind:CLEANLIMIT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"10\" text=\"bind:USINGQTY\" displaytype=\"mask\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"right\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"11\" text=\"bind:EQUIPMENTID\" displaytype=\"combocontrol\" combocodecol=\"code\" combodatacol=\"desc\" combodataset=\"ds_cboequipment\" edittype=\"combo\" comboautoselect=\"true\" combodisplaynulltext=\"선택\" combodisplaynulltype=\"nulltext\"/></Band></Format></Formats>");
            this.div_work.form.tab.tpgDurableStart.addChild(obj.name, obj);

            obj = new Grid("grd_BORDurable",null,"34","31.08%",null,"0","0",null,null,null,null,this.div_work.form.tab.tpgDurableStart.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_BORDurable");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"126\"/><Column size=\"39\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"치공구 ID\" tooltiptext=\"DURABLEDEFID\"/><Cell col=\"2\" text=\"Rev.\"/><Cell col=\"3\" text=\"치공구 명\" tooltiptext=\"DURABLEDEFNAME\"/><Cell col=\"4\" text=\"치공구 유형\" tooltiptext=\"DURABLETYPE\"/><Cell col=\"5\" text=\"보증타수\" tooltiptext=\"USEDLIMIT\"/><Cell col=\"6\" text=\"연마기준타수\" tooltiptext=\"CLEANLIMIT\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DURABLEDEFID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DURABLEDEFVERSION\"/><Cell col=\"3\" text=\"bind:DURABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:DURABLECLASSNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:USEDLIMIT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"6\" text=\"bind:CLEANLIMIT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/></Band></Format></Formats>");
            this.div_work.form.tab.tpgDurableStart.addChild(obj.name, obj);

            obj = new Tabpage("tpgMessage",this.div_work.form.tab);
            obj.set_text("전달사항");
            obj.set_tooltiptext("MESSAGE");
            obj.set_url("pcm::PCM01700T12.xfdl");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Tabpage("tpgDefect",this.div_work.form.tab);
            obj.set_text("불량");
            obj.set_tooltiptext("DEFECT");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_defect","0","34",null,null,"0","23",null,null,null,null,this.div_work.form.tab.tpgDefect.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defect");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"180\"/><Column size=\"200\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"불량 코드\" tooltiptext=\"DEFECTCODE\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"불량 코드 명\" tooltiptext=\"DEFECTCODENAME\"/><Cell col=\"3\" text=\"품질공정\" tooltiptext=\"QCSEGMENT\"/><Cell col=\"4\" text=\"수량(PNL)\" tooltiptext=\"PNLQTY\" cssclass=\"cell_point\"/><Cell col=\"5\" text=\"수량\" tooltiptext=\"QTY\" cssclass=\"cell_point\"/><Cell col=\"6\" text=\"불량율\" tooltiptext=\"DEFECTRATE\"/><Cell col=\"7\" text=\"원인품목\" tooltiptext=\"REASONCONSUMABLEDEFID\"/><Cell col=\"8\" text=\"원인 LOTID\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell col=\"9\" text=\"원인공정\" tooltiptext=\"REASONPROCESSSEGMENTID\"/><Cell col=\"10\" text=\"원인작업장\" tooltiptext=\"REASONAREAID\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:SEGMENT_DEFECTCODE\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\" edittype=\"normal\" editinputtype=\"number\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:SEGMENT_DEFECTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:QCSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PNLQTY\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"5\" text=\"bind:QTY\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:DEFECTRATE\" displaytype=\"mask\" edittype=\"none\" textAlign=\"right\" maskeditformat=\"#,##0.00\" maskedittype=\"number\" maskeditpostfixtext=\" %\"/><Cell col=\"7\" text=\"bind:CONSUMABLEDEFNAME\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"8\" text=\"bind:REASONCONSUMABLELOTID\" textAlign=\"left\" combodataset=\"ds_ReasonConsumableLot\" combocodecol=\"CONSUMABLELOTID\" combodatacol=\"CONSUMABLELOTID\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"9\" text=\"bind:REASONPROCESSSEGMENTNAME\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\"/><Cell col=\"10\" text=\"bind:REASONAREANAME\" textAlign=\"left\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" text=\"expr:dataset.getSum(&quot;PNLQTY&quot;)\"/><Cell col=\"5\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" text=\"expr:dataset.getSum(&quot;QTY&quot;)\"/><Cell col=\"6\" expandchar=\"%\" expandsize=\"24\" displaytype=\"mask\" maskeditformat=\"#,##0.00\" text=\"expr:dataset.getSum(&quot;DEFECTRATE&quot;)\" maskedittype=\"number\" maskeditpostfixtext=\" %\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band></Format></Formats>");
            this.div_work.form.tab.tpgDefect.addChild(obj.name, obj);

            obj = new Static("title1_01","0","0","36","34",null,null,null,null,null,null,this.div_work.form.tab.tpgDefect.form);
            obj.set_taborder("1");
            obj.set_text("불량");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab.tpgDefect.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"10","29","24","33",null,null,null,null,null,this.div_work.form.tab.tpgDefect.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.form.tab.tpgDefect.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_defect",null,"10","29","24","4",null,null,null,null,null,this.div_work.form.tab.tpgDefect.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab.tpgDefect.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_ReasonConsumableList","843","759","450","221",null,null,null,null,null,null,this);
            obj.set_text("pdv_00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ReasonConsumableList","0","0",null,null,"0","0",null,null,null,null,this.pdv_ReasonConsumableList.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_ReasonConsumableList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"106\"/><Column size=\"72\"/><Column size=\"163\"/><Column size=\"101\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자재ID\"/><Cell col=\"1\" text=\"자재버전\"/><Cell col=\"2\" text=\"자재명\"/><Cell col=\"3\" text=\"자재유형\"/></Band><Band id=\"body\"><Cell text=\"bind:CONSUMABLEDEFID\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:CONSUMABLEDEFVERSION\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:MATERIALTYPE\" textAlign=\"left\"/></Band></Format></Formats>");
            this.pdv_ReasonConsumableList.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_ReasonProcessSegment","853","839","450","221",null,null,null,null,null,null,this);
            obj.set_text("pdv_00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ReasonProcessSegment","0","0",null,null,"0","0",null,null,null,null,this.pdv_ReasonProcessSegment.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_ReasonProcessSegment");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"88\"/><Column size=\"177\"/><Column size=\"77\"/><Column size=\"101\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공정ID\"/><Cell col=\"1\" text=\"공정명\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"작업장\"/></Band><Band id=\"body\"><Cell text=\"bind:PROCESSSEGMENTID\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:AREANAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.pdv_ReasonProcessSegment.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_work.form.div_lotInfo.form.edt_15","value","ds_lotInfo","RESOURCENAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.form.div_lotInfo.form.edt_lotId","value","ds_lotInfo","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.form.div_lotInfo.form.edt_01","value","ds_lotInfo","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_work.form.div_lotInfo.form.edt_02","value","ds_lotInfo","PRODUCTDEFTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_work.form.div_lotInfo.form.edt_stepType","value","ds_lotInfo","UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_work.form.div_lotInfo.form.edt_04","value","ds_lotInfo","PREVPROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_work.form.div_lotInfo.form.edt_05","value","ds_lotInfo","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_work.form.div_lotInfo.form.edt_06","value","ds_lotInfo","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_work.form.div_lotInfo.form.msk_00","value","ds_lotInfo","PNLQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_work.form.div_lotInfo.form.edt_07","value","ds_lotInfo","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_work.form.div_lotInfo.form.cal_00","value","ds_lotInfo","INPUTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_work.form.div_lotInfo.form.edt_08","value","ds_lotInfo","ISLOCKING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_work.form.div_lotInfo.form.msk_01","value","ds_lotInfo","PCSQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_work.form.div_lotInfo.form.edt_09","value","ds_lotInfo","NEXTPROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_work.form.div_lotInfo.form.edt_10","value","ds_lotInfo","PRODUCTIONORDERID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_work.form.div_lotInfo.form.edt_11","value","ds_lotInfo","ISREWORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_work.form.div_lotInfo.form.msk_02","value","ds_lotInfo","MM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_work.form.div_lotInfo.form.edt_13","value","ds_lotInfo","USERSEQUENCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_work.form.div_lotInfo.form.cal_01","value","ds_lotInfo","DUEDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_work.form.div_lotInfo.form.edt_14","value","ds_lotInfo","CUSTOMERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_work.form.div_pfsInfo.form.edt_comment","value","ds_work","COMMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_work.form.div_pfsInfo.form.cbo_unitOfMaterial","value","ds_work","UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_work.form.div_pfsInfo.form.spn_numGoodPnlQty","value","ds_work","GOODPNLQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_work.form.div_pfsInfo.form.spn_numGoodQty","value","ds_work","GOODQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_work.form.div_pfsInfo.form.spn_numDefectPnlQty","value","ds_work","DEFECTPNLQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_work.form.div_pfsInfo.form.spn_numDefectQty","value","ds_work","DEFECTQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_work.form.div_pfsInfo.form.edt_printWeek","value","ds_work","PRINTWEEK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_work.form.div_pfsInfo.form.edt_worker","value","ds_work","WORKER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_work.form.div_pfsInfo.form.edt_worker_id","value","ds_work","WORKER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_work.form.div_pfsInfo.form.cbo_equpmentClass","value","ds_work","");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","pcm::PCM01700T12.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PCM01800M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01800M.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PCM01800M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM01800M.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("PCM01800M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM01800M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 인수등록
         * 파일명 		: PCM01700M.xfdl
         * 작성자 		: 이용국
         * 작성일 		: 2021.4. 7
         *
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.5. 5	진성하   	재작성
         * 2021.6. 21	이용국   	재작성
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

        this.currProcessType = ProcessType.StartWork;
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

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_initCombo();
        	//4Step 다국어 조회
        	this.ds_step.clearData();
        	var sSvcID 			= "selectStepList";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_step=output";
        	var sArgs 		  	= "";
        	sArgs 			+= this.gfn_setParam("SQL_ID", "selectStepList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);
        };
        this.fn_initCombo = function ()
         {
         	this.ds_search.clearData();
         	this.ds_search.addRow();
         	this.ds_search.setColumn(0,"UOMCLASSID", "Segment");
        	this.ds_search.setColumn(0,"VERSION", "10001");

         	var sSvcID 			= "getUomDefinitionList";
         	var sController 	= "/pcm01700/getUomDefinitionList.do"; // selectCustomQuery
         	var sInDatasets 	= "INPUT=ds_search";
         	var sOutDatasets 	= "ds_unitOfMaterial=output";
         	var sArgs 			= "";
         	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
         };
        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	var component = this.div_work.form.div_search;
        	var strColIdList = "edt_area_id,edt_lotId";
        	var strColNmList = "AREA,LOTID";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	this.ds_lotInfo.clearData();
        	this.ds_work.clearData();
        	this.ds_work.addRow();
        	this.ds_worker.clearData();
        	this.ds_comment.clearData();
        	this.ds_processSpec.clearData();
        	this.ds_equipment.clearData();
        	this.ds_message.clearData();
        	this.ds_messageDtl.clearData();
        	this.ds_defect.clearData();
        	this.ds_consumable.clearData();
        	this.ds_standardRequirement.clearData();
        	this.ds_durable.clearData();
        	this.ds_cboequipment.clearData();
        	this.ds_BORDurable.clearData();
        	this.ds_ProcessDefTypeByProcess.clearData();
        	this.div_work.form.div_pfsInfo.form.edt_worker.set_value("");
        	this.div_work.form.div_pfsInfo.form.edt_worker_id.set_value("");

        	this.g_areaId = this.div_work.form.div_search.form.edt_area_id.value;

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "AREAID", this.div_work.form.div_search.form.edt_area_id.value);
        	this.ds_search.setColumn(0, "LOTID", this.div_work.form.div_search.form.edt_lotId.value);
        	this.ds_search.setColumn(0, "PROCESSSTATE", "Wait");
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

        	if (!this.gfn_GridKeyCheck(this.div_work.form.tab.tpgDefect.form.grd_defect, ["DEFECTCODE","DEFECTCODENAME","PNLQTY","QTY"])) return;

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
        	this.ds_equipmentSave.clearData();
        	this.ds_equipment.filter("CHK=='1'");
        	this.ds_equipmentSave.copyData(this.ds_equipment, true);
        	for(var i = 0; i < this.ds_equipment.rowcount; i++)
        	{
        		equipmentId = equipmentId + (i==0?"":",") +this.ds_equipment.getColumn(i, "EQUIPMENTID")  ;
        	}
        	this.ds_equipment.filter("");

        	// 치공구가 금형인 경우 보증타수, 연마기준타수 체크
        	for(var i = 0; i < this.ds_durable.rowcount; i++)
        	{
        		if(!this.nfn_isNull(this.ds_durable.getColumn(i,"EQUIPMENTID"))) {
        			var totalUsedCount 	= nexacro.toNumber(this.nfn_nvl(this.ds_durable.getColumn(i , "TOTALUSEDCOUNT"), "0"));
        			var usingQty 		= nexacro.toNumber(this.nfn_nvl(this.ds_durable.getColumn(i , "USINGQTY"), "0"));
        			var usedLimit 		= nexacro.toNumber(this.nfn_nvl(this.ds_durable.getColumn(i , "USEDLIMIT"), "0"));
        			var cleanLimit 		= nexacro.toNumber(this.nfn_nvl(this.ds_durable.getColumn(i , "CLEANLIMIT"), "0"));
        			var usedCnt 		= nexacro.toNumber(this.nfn_nvl(this.ds_durable.getColumn(i , "USEDCOUNT"), "0"));

        			// 	타발타수(USINGQTY)+ 누적타수(TOTALUSEDCOUNT) > 보증타수(USEDLIMIT)
        			if (usingQty + totalUsedCount > usedLimit)
        //			if (usingQty> usedLimit)
        			{
        				var nRow = this.ds_overQtyDurableLot.addRow();
        				this.ds_overQtyDurableLot.setColumn(nRow, "DURABLELOTID", this.ds_durable.getColumn(i, "DURABLELOTID"));
        			}

        			// 	타발타수(USINGQTY) + 사용타수(USEDCNT) > 연마기준타수(CLEANLIMIT)
        			if (usingQty + usedCnt > cleanLimit)
        //			if (usingQty > cleanLimit)
        			{
        				var nRow = this.ds_overCleanQtyDurableLot.addRow();
        				this.ds_overCleanQtyDurableLot.setColumn(nRow, "DURABLELOTID", this.ds_durable.getColumn(i, "DURABLELOTID"));
        			}
        		}
        	}

        	var durableLotId = "";
        // 	if ((this.ds_overQtyDurableLot.rowcount > 0)  || (this.ds_overCleanQtyDurableLot.rowcount > 0))
        // 	{
        	/*
        		for(var i = 0; i < this.ds_overQtyDurableLot.rowcount; i++)
        			durableLotId = durableLotId + (i==0?"":",") +this.ds_overQtyDurableLot.getColumn(i, "DURABLELOTID")  ;
        	*/
        		// 치공구의 사용 횟수가 보증타수를 초과합니다. Durable Lot Id = {0}
        		if (this.ds_overQtyDurableLot.rowcount > 0)
        		{
        			var bOK =	this.gfn_Message("DurableUsingQtyLargerThanUsedLimit", [this.ds_overQtyDurableLot.getColumn(0,"DURABLELOTID")], "conf", "yesno");
        //			var bOK =	this.gfn_Message("치공구의 사용 횟수가 보증타수를 초과합니다. 계속하시겠습니까?", [this.ds_overQtyDurableLot.getColumn(0,"DURABLELOTID")], "conf", "yesno");
        			if(!bOK) return;
        //			this.gfn_Message("DurableUsingQtyLargerThanUsedLimit", [this.ds_overQtyDurableLot.getColumn(0,"DURABLELOTID")], "info", "ok");
        		}

        		if (this.ds_overCleanQtyDurableLot.rowcount > 0)
        		{
        			// 치공구의 사용 횟수가 연마기준타수를 초과합니다. Durable Lot Id = {0}
        			var bOK =	this.gfn_Message("DurableUsingQtyLargerThanCleanLimit", [this.ds_overCleanQtyDurableLot.getColumn(0,"DURABLELOTID")], "conf", "yesno");
        			if(!bOK) return;
        		}
        //	}

            trace("this.ds_consumable.saveXML()===============>/N"+this.ds_consumable.saveXML());
        //		if(this.ds_consumable.getSum("AVAILABLEQTY") < this.ds_consumable.getSum("INPUTQTY"))
            //작업시작에서 투입한 자재 LOT
        	if(this.ds_consumable.getCaseSum("FROM_WHERE=='PCM01800'","AVAILABLEQTY") < this.ds_consumable.getCaseSum("FROM_WHERE=='PCM01800'","INPUTQTY"))
        	{
        		this.gfn_Message("CantLargerThan", ["INPUTQTY","AVAILABLEQTY"], "warning", "ok");//투입수량는 가용 수량보다 클 수 없습니다.
        		this.div_work.form.tab.set_tabindex(3);
        		return;
        	}

        	for(var i=0; i<this.ds_consumable.rowcount;i++){
        		if(this.ds_consumable.getColumn(i,"FROM_WHERE") == "PCM01800") {  //작업시작에서 투입한 자재 LOT
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
        	}


        	this.ds_durableSave.clearData();
        	for(var i=0; i<this.ds_durable.rowcount; i++){
        		if(!this.gfn_isNull(this.ds_durable.getColumn(i,"EQUIPMENTID"))){
        			var nRow = this.ds_durableSave.addRow();
        			this.ds_durableSave.copyRow(nRow,this.ds_durable,i);
        		}
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

        	var sSvcID = "saveTrackInLot";
        	var sController = "/pcmWorkProcess/saveTrackInLot.do";
        	var sInDatasets = "ds_dataInfo=ds_dataInfo ds_defectList=ds_defect ds_consumableList=ds_consumable ds_equipmentList=ds_equipmentSave ds_durableList=ds_durableSave";
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
        			//2021-06-10 대체자재도 사용할 수 있는지 체크. 최성민
        			nRow = this.ds_consumable.findRow("CONSUMABLEDEFID",this.ds_standardRequirement.getColumn(i,"ALTITEM"));
        			if(nRow<0){
        				return false;
        			}
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


        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		//this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		this.gfn_Message(errMsg, "", "error", "ok");
        		return;
        	}

        	switch(trId) {
        		case "selectAreaResourceByLot":
        			if(this.ds_area.rowcount==0){
        				this.gfn_Message("NotExistLotNo", null, "info", "ok");
        				return;
        			}
        			if(this.gfn_isNull(this.ds_area.getColumn(0,"AREAID")) || this.gfn_isNull(this.ds_area.getColumn(0,"RESOURCEID"))){
        				var popupId 				= "SEARCH_RESOURCE";
        				var oArg 					= {};
        				oArg.arg_lotId 				= this.nfn_nvl(this.ds_area.getColumn(0,"LOTID"), "");
        				oArg.arg_processSegmentId 	= this.nfn_nvl(this.ds_area.getColumn(0,"PROCESSSEGMENTID"), "");
        				oArg.arg_areaId 			= this.div_work.form.div_search.form.edt_area_id.value;
        				this.gfn_openPopup(popupId,"pcm::PCM01700P2.xfdl",oArg,"width=456,height=170"); /* Step1_2 popupAfter 호출 */
        				return;
        			}
        			//this.ds_work.addRow();

        			var sSvcID = "selectLotInfoByProcess";
        			var sController = "/pcm01800/selectLotInfoByProcess.do";
        			var sInDatasets = "INPUT=ds_search";
        			var sOutDatasets = "ds_lotInfo=ds_lotInfo ds_ProcessDefTypeByProcess=ds_ProcessDefTypeByProcess ds_comment=ds_comment ds_processSpec=ds_processSpec ds_equipment=ds_equipment ds_message=ds_message ds_consumable=ds_consumable ds_standardRequirement=ds_standardRequirement ds_durable=ds_durable ds_BORDurable=ds_BORDurable  ds_ReasonConsumableList=ds_ReasonConsumableList ds_ReasonConsumableLot=ds_ReasonConsumableLot ds_ReasonProcessSegment=ds_ReasonProcessSegment ds_worker=ds_worker";
        			var sArgs = "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        			break;
        		case "selectLotInfoByProcess" :

        			if(this.ds_lotInfo.rowcount==0){
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				this.fn_clearDetailInfo();
        				this.div_work.form.div_search.form.edt_lotId.set_value("");
        				this.div_work.form.div_search.form.edt_lotId.setFocus();
        				break;
        				return;
        			}

        			if(this.ds_equipment.rowcount==1) this.ds_equipment.setColumn(0,"CHK","1");
        			this.ds_cboequipment.clearData();
        			var nRow = this.ds_cboequipment.addRow();
        			this.ds_cboequipment.setColumn(nRow,"code","");
        			this.ds_cboequipment.setColumn(nRow,"desc","선택");
        			for(var i=0; i<this.ds_equipment.rowcount; i++){
        				var nRow = this.ds_cboequipment.addRow();
        				this.ds_cboequipment.setColumn(nRow,"code",this.ds_equipment.getColumn(i,"EQUIPMENTID"));
        				this.ds_cboequipment.setColumn(nRow,"desc",this.ds_equipment.getColumn(i,"EQUIPMENTNAME"));
        			}
        			this.ds_cboequipment.filter("code==''");

        			this.ds_ReasonConsumableLot.filter("LOTID=='XXX'");
        			this.div_work.form.div_pfsInfo.form.edt_worker.set_value("");
        			this.div_work.form.div_pfsInfo.form.edt_worker_id.set_value("");
        			if(this.ds_worker.rowcount==1){
        				this.ds_work.setColumn(0,"WORKER_ID",this.ds_worker.getColumn(0,"WORKERID"));
        				this.ds_work.setColumn(0,"WORKER",this.ds_worker.getColumn(0,"WORKERNAME"));
        			}
        			this.g_LotId       = this.nfn_nvl(this.div_work.form.div_search.form.edt_lotId.value, "");
        			this.g_PanelperQty = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PANELPERQTY"), "0"));
        			this.g_PnlQty      = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PNLQTY"), "0"));
        			this.g_PcsQty      = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PCSQTY"), "0"));

        			this.processDefType = this.ds_ProcessDefTypeByProcess.getColumn(0,"PROCESSDEFTYPE");
        			if(!this.fn_checkLotProcessStateByStepType(this.currProcessType, this.ds_lotInfo.getColumn(0,"PROCESSSTATE"), this.ds_lotInfo.getColumn(0,"STEPTYPE"))){
        				this.fn_clearDetailInfo();
        				this.div_work.form.div_search.form.edt_lotId.set_value("");
        				this.div_work.form.div_search.form.edt_lotId.setFocus();
        				break;
        			}
        			this.queryVersion = "10001";

        			if (this.processDefType == "Rework")
        				this.queryVersion = "10011";

        			//this.fn_GetReasonConsumableList();
        			//this.fn_GetDefectReasonConsumableLot();
        			//this.fn_GetDefectReasonProcesssegment();
        			//this.div_work.form.div_pfsInfo.form.edt_worker.set_enable(true);
        			this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_enable(true);
        			//this.div_work.form.div_pfsInfo.form.btn_workerSrh.set_enable(true);
        			this.div_work.form.div_pfsInfo.form.edt_comment.set_enable(true);
        			//this.div_work.form.div_pfsInfo.form.edt_worker.set_value(this.gf_getUserNm());
        			//this.div_work.form.div_pfsInfo.form.edt_worker_id.set_value(this.gf_getUserId());
        			this.fn_setControlsInfo2();
        			this.fn_searchStaying();
        			//this.fn_StayReasonCode_CallBack();

        			break;
        		case "getProcessDefTypeByProcess":
        			if (this.ds_processDefTypeInfo.rowcount > 0)
        			{
        				this.processDefType = this.nfn_nvl(this.ds_processDefTypeInfo.getColumn(0, "PROCESSDEFTYPE"), "");
        			}

        			this.queryVersion = "10001";

        			if (this.processDefType == "Rework")
        				this.queryVersion = "10011";

        			var lotId = this.nfn_nvl(this.div_work.form.div_search.form.edt_lotId.value, "");

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
        				this.gfn_openPopup(popupId,"pcm::PCM01700P1.xfdl",oArg,"width=556,height=409");	// Step2_2 popupAfter 호출
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
        					this.gfn_Message("PLANTINWIPSURVEY", this.nfn_getDictionaryname("MENU_PG-SG-0160",true), "warning", "ok");
        					this.fn_clearDetailInfo();

        					this.div_work.form.div_search.form.edt_lotId.set_value("");
        					this.div_work.form.div_search.form.edt_lotId.setFocus();
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
        				//var drResult = this.gfn_confirm("NotExistsInspectionResult", "information", [this.div_work.form.div_search.form.edt_lotId.value]);
        				var bOK = this.gfn_Message("NotExistsInspectionResult", this.div_work.form.div_search.form.edt_lotId.value, "conf", "yesno");
        				var lotId = this.div_work.form.div_search.form.edt_lotId.value;

        				this.fn_clearDetailInfo();

        				this.div_work.form.div_search.form.edt_lotId.set_value("");
        				this.div_work.form.div_search.form.edt_lotId.setFocus();

        				if (bOK) //YES
        				{
        					this.ds_menuParam.clearData();
        					this.ds_menuParam.addRow();
        					this.ds_menuParam.setColumn(0, "AREAID"  , this.div_work.form.div_search.form.edt_area_id.value);
        					this.ds_menuParam.setColumn(0, "AREANAME", this.div_work.form.div_search.form.edt_area.value);
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

        				return;
        			}


        			if (this.fn_checkRCLot(this.ds_lotInfo))
        			{
        				this.fn_productRevision_CallBack();
        			}else{
        				this.fn_clearDetailInfo();
        //				this.div_work.form.div_search.form.edt_lotId.set_value("");
        				this.div_work.form.div_search.form.edt_lotId.setFocus();
        			}

        			break;

        		case "saveTrackInLot":

        			this.fn_clearDetailInfo();

        			this.g_LotId       = "";
        			this.div_work.form.div_search.form.edt_lotId.set_value("");
        			this.div_work.form.div_search.form.edt_lotId.setFocus();

        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장되었습니다.

        			break;
        		case "saveLotResourceId":
        			this.fn_RESOURCE_CallBack();

        			break;
        		/*
        		case "getCodeList":
        			var rtnBoolean = this.fn_getCodeList_CallBack();

        			if (!rtnBoolean)
        			{
        				this.fn_clearDetailInfo();

        				this.div_work.form.div_search.form.edt_lotId.set_value("");
        				this.div_work.form.div_search.form.edt_lotId.setFocus();
        				return;
        			}

        			//채공 상태 체크
        			var lotId = this.div_work.form.div_search.form.edt_lotId.value;

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

        			break;
        		*/
        		case "getConsumableLotByProcess":
        			trace("getConsumableLotByProcess...");
        			if (this.ds_consumableListTemp.rowcount == 0){
        				//현재 창고에서 보유하고 있는 자재가 아닙니다. 현재 창고 ID : {0}, 소유 창고 ID : {1}
        //				this.gfn_Message("CannotUseableLot", null, "info", "ok");
        				this.gfn_Message("사용 할 수 없는 자재 Lot입니다.", null, "info", "ok");
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
        //					this.gfn_Message("ConsumedConsumableLot", [this._lotId], "info", "ok");
                            //자재Lot에 해당되는 창고에 재고가 없습니다.
        					this.gfn_Message("NotExistsConsumableInStock", null, "info", "ok");

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
        					var stockQty    = " "+this.ds_consumableListTemp.getColumn(0, "STOCKQTY");
        					var lotUsingQty = " "+this.ds_consumableListTemp.getColumn(0, "LOTUSINGQTY");
        					// 해당 자재 Lot은 다른 Lot에서 모두 사용되었습니다. 재고수량 : {0}, Lot 사용수량 : {1}
        					this.gfn_Message("ConsumableLotIsAlreadyUsingInLot", [stockQty, lotUsingQty], "info", "ok");
        					return;
        				}


        				var consumableLotId 	 = this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "CONSUMABLELOTID"), "");
        				var consumableDefId      = this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "CONSUMABLEDEFID"), "");
        				var consumableDefVersion = this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "CONSUMABLEDEFVERSION"), "");


        				//ds_consumableList KEYCOLUMN group by SUM(INPUTQTY)

        /*
        				this.ds_consumableDistinctList.clearData();
        				this.ds_consumableDistinctList.copyData(this.ds_consumable);

        				this.gf_distincDsFilter(this.ds_consumableDistinctList, "KEYCOLUMN");


        				trace("this.ds_consumableDistinctList.rowcount >>" + this.ds_consumableDistinctList.rowcount);

        				var vKeyColumn = "";
        				var nRow = -1;
        				this.ds_inputQtyList.clearData();

        				this.ds_consumable.set_enableevent(false);

        				for(var i=0; i<this.ds_consumableDistinctList.rowcount; i++)
        				{
        					vKeyColumn = this.ds_consumableDistinctList.getColumn(i, "KEYCOLUMN");

        					this.ds_consumable.filter("KEYCOLUMN=='" + vKeyColumn + "'");

        					nRow = this.ds_inputQtyList.addRow();
        					this.ds_inputQtyList.setColumn(nRow, "KEYCOLUMN", vKeyColumn);
        					this.ds_inputQtyList.setColumn(nRow, "INPUTQTY", this.ds_consumable.getSum("INPUTQTY"));

        					trace("this.ds_consumable.rowcount 1>>" + this.ds_consumable.rowcount);
        					trace("this.ds_consumable.getSum() >>" + this.ds_consumable.getSum("INPUTQTY"));

        					this.ds_consumable.filter("");
        				}
        */
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
        						var nFixed = this.nfn_decimalFits([reqQty,value_Value]);
        						trace("nFixed-->"+nFixed);
        						var val = reqQty.toFixed(nFixed) - value_Value.toFixed(nFixed);
        						val = val.toFixed(nFixed);
        						trace("(reqQty - value_Value)::"+val);
        						if (vInputQty > val)
        							this.ds_consumableListTemp.setColumn(0, "INPUTQTY", val);

        						if (vOrginputQty > val)
        							this.ds_consumableListTemp.setColumn(0, "ORGINPUTQTY", val);
        					}
        				}
        /*
        				for(var i = 0; i < this.ds_inputQtyList.rowcount; i++)
        				{
        					value_Key   = this.ds_inputQtyList.getColumn(i, "KEYCOLUMN");
        					value_Value = nexacro.toNumber(this.nfn_nvl(this.ds_inputQtyList.getColumn(i, "INPUTQTY"), "0"));

        					if(key == value_Key)
        					{

        						var nRow   = this.ds_standardRequirement.findRow("KEYCOLUMN", value_Key);
        						var reqQty = nexacro.toNumber(this.nfn_nvl(this.ds_standardRequirement.getColumn(nRow, "REQUIREMENTQTY"), "0"));
        						trace("reqQty-->"+reqQty);
        						trace("value_Value-->"+value_Value);
        						if ((reqQty - value_Value) <= 0)
        						{
        							// {0} 자재는 이미 BOM 소요량만큼 투입되었습니다.
        							this.gfn_Message("ConsumableIsAlreadyInputEqualRequirement", [value_Key.split('|')[0]], "info", "ok");
        							return;
        						}

        						var vInputQty    = nexacro.toNumber(this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "INPUTQTY"), "0"));
        						var vOrginputQty = nexacro.toNumber(this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "ORGINPUTQTY"), "0"));

        						if (vInputQty > (reqQty - value_Value))
        							this.ds_consumableListTemp.setColumn(0, "INPUTQTY", (reqQty - value_Value));

        						if (vOrginputQty > (reqQty - value_Value))
        							this.ds_consumableListTemp.setColumn(0, "ORGINPUTQTY", (reqQty - value_Value));
        					}
        				}
        */

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
        					trace("ds_consumable-->"+this.ds_consumable.saveXML());
        				}
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


        /*
        				this.ds_consumableDistinctList.clearData();
        				this.ds_consumableDistinctList.copyData(this.ds_consumableList);

        				this.gf_distincDsFilter(this.ds_consumableDistinctList, "KEYCOLUMN");


        				trace("this.ds_consumableDistinctList.rowcount >>" + this.ds_consumableDistinctList.rowcount);
        				var vKeyColumn = "";
        				var nRow = -1;
        				this.ds_inputQtyList.clearData();
        				this.ds_consumable.set_enableevent(false);
        				for(var i=0; i<this.ds_consumableDistinctList.rowcount; i++)
        				{
        					vKeyColumn = this.ds_consumableDistinctList.getColumn(i, "KEYCOLUMN");
        					this.ds_consumable.filter("KEYCOLUMN=='" + vKeyColumn + "'");
        					nRow = this.ds_inputQtyList.addRow();
        					this.ds_inputQtyList.setColumn(nRow, "KEYCOLUMN", vKeyColumn);
        					this.ds_inputQtyList.setColumn(nRow, "INPUTQTY", this.ds_consumable.getSum("INPUTQTY"));
        					trace("this.ds_consumable.rowcount 1>>" + this.ds_consumable.rowcount);
        					trace("this.ds_consumable.getSum() >>" + this.ds_consumable.getSum("INPUTQTY"));

        					this.ds_consumable.filter("");
        				}

        				this.ds_consumable.filter("");
        				this.ds_consumable.set_enableevent(true);
        */
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
        						var nFixed = this.nfn_decimalFits([reqQty,value_Value]);
        						var val = reqQty.toFixed(nFixed) - value_Value.toFixed(nFixed);
        						val = val.toFixed(nFixed);
        						trace("(reqQty - value_Value)-->"+val);
        						if (vInputQty > val)
        							this.ds_alternativeList.setColumn(0, "INPUTQTY", val);

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

        			this.div_work.form.div_search.form.edt_area.set_value(rtn[1]);
        			this.div_work.form.div_search.form.edt_area_id.set_value(rtn[0]);			// 작업장Id
        			this.div_work.form.div_search.form.edt_lotId.set_value("");
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
        			rtn = JSON.parse(rtn);
        			if(rtn.resultCd=="CANCEL"){
        				this.fn_clearDetailInfo();
        				return;
        			}else{
        				this.fn_search();
        				return;
        			}
        			//this.fn_productRevision_CallBack();


        			break;

         		case "SEARCH_UserList" :
        			var str="";
        			var str_id="";
        			for(var i=0; i<rtn.length; i++){
        				var colArray = rtn[i];
        				trace(colArray);
        				var str0 = (i==0) ? "" : "," ;
        				str_id = str_id + str0 + colArray[0];
        				str = str + str0 + colArray[1];
        			}
        			this.div_work.form.div_pfsInfo.form.edt_worker_id.set_value(str_id); // 작업자 id
         			this.div_work.form.div_pfsInfo.form.edt_worker.set_value(str);
        			//this.ds_work.setColumn(0, "WORKER_ID", rtn[0]);

        			//this.div_work.form.div_pfsInfo.form.edt_worker.set_enable(false);
        			//this.div_work.form.div_pfsInfo.form.btn_workerSrh.set_enable(false);
        			this.fn_setControlsInfo2();

         	      break;
         		case "SEARCH_WorkerByProcess" :
        			var str="";
        			var str_id="";
        			for(var i=0; i<rtn.length; i++){
        				var colArray = rtn[i];
        				trace(colArray);
        				var str0 = (i==0) ? "" : "," ;
        				str_id = str_id + str0 + colArray[0];
        				str = str + str0 + colArray[1];
        			}
        			this.div_work.form.div_pfsInfo.form.edt_worker_id.set_value(str_id); // 작업자 id
         			this.div_work.form.div_pfsInfo.form.edt_worker.set_value(str);
        			//this.ds_work.setColumn(0, "WORKER", rtn[0]);

        			//this.div_work.form.div_pfsInfo.form.edt_worker.set_enable(true);
        			//this.div_work.form.div_pfsInfo.form.btn_workerSrh.set_enable(true);

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
        	var lotId = this.div_work.form.div_search.form.edt_lotId.value;

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
        	var opts = "width=650,height=500";

        	oArg.arg_type = "BA"; // C: 체크박스 B: 단일, CA : arg_searchStr 자동조회
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");

        	if(popId=="P00148"){ //창고 명 조회
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        		oArg.arg_searchStr = "TXTAREA=" + this.div_work.form.div_search.form.edt_area.value;	// 검색 조건

        	}
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        this.fn_clearDetailInfo = function()
        {
        	this.div_work.form.div_search.form.edt_innerRevisionText.set_value("");
        	this.div_work.form.div_search.form.sta_isRework.set_visible(false);
        	this.div_work.form.div_search.form.sta_isRCLot.set_visible(false);
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
        	this.ds_cboequipment.clearData();
        	this.ds_BORDurable.clearData();
        	this.ds_ProcessDefTypeByProcess.clearData();
        	this.ds_worker.clearData();
        	this.ds_overCleanQtyDurableLot.clearData();
        	this.ds_overQtyDurableLot.clearData();
        	this.g_LotId       = "";
        	this.g_PanelperQty = -1;
        	this.g_PnlQty      = -1;
        	this.g_PcsQty      = -1;
        	this.queryVersion = "";
        	this.div_work.form.div_pfsInfo.form.edt_worker.set_value("");
        	this.div_work.form.div_pfsInfo.form.edt_worker_id.set_value("");
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

        		this.div_work.form.div_search.form.edt_lotId.set_value("");
        		this.div_work.form.div_search.form.edt_lotId.setFocus();
        		return;
        	}

        // 	if (this.nfn_nvl(this.ds_dtStaying.getColumn(0, "ISLOCKING"), "") == "Y"){
        // 		// 채공팝업
        // 		var popupId = "SEARCH_StayReasonCode";
        // 		var oArg = {};
        //
        // 		oArg.arg_ds_dtStaying = this.ds_dtStaying;
        // 		this.gfn_openPopup(popupId,"pcm::PCM01700P1.xfdl",oArg,"width=556,height=409");	// Step2_2 popupAfter 호출
        // 		return;
        // 	}

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
        				this.gfn_Message("AlreadyPassCurrentState", [state, this.nfn_getDictionarynameUpper("MENU_PG-SG-0160")], "info", "ok");
        				return false;
        			}
        			else if (processState == Constants.Run)
        			{
        				var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkStart'");
        				state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        				//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkStart'").FirstOrDefault()["CODENAME"]);

        				// 작업시작 처리된 Lot 입니다. 작업 시작 처리를 진행할 수 없습니다.
        				this.gfn_Message("AlreadyPassCurrentState", [state, this.nfn_getDictionarynameUpper("MENU_PG-SG-0190")], "info", "ok");
        				return false;
        			}
        			else if (processState == Constants.WaitForSend)
        			{
        				var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkEnd'");
        				state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        				//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkEnd'").FirstOrDefault()["CODENAME"]);

        				// 작업완료 처리된 Lot 입니다. 인계 등록 처리를 진행할 수 없습니다.
        				this.gfn_Message("AlreadyPassCurrentState", [state, this.nfn_getDictionarynameUpper("MENU_PG-SG-0260")], "info", "ok");
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
        					this.gfn_Message("NotArrivalCurrentState", [state, "MENU_PG-SG-0160"], "info", "ok");
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
        				this.gfn_Message("AlreadyPassCurrentState", [state, this.nfn_getDictionarynameUpper("MENU_PG-SG-0190")], "info", "ok");
        				return false;
        			}
        			else if (processState == Constants.WaitForSend)
        			{
        				var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkEnd'");
        				state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        				//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkEnd'").FirstOrDefault()["CODENAME"]);

        				// 작업완료 처리된 Lot 입니다. 작업 시작 처리를 진행할 수 없습니다.
        				this.gfn_Message("AlreadyPassCurrentState", [state, this.nfn_getDictionarynameUpper("MENU_PG-SG-0190")], "info", "ok");
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
        						this.gfn_Message("NotArrivalCurrentState", [state, "MENU_PG-SG-0190"], "info", "ok");
        						return false;
        					}
        				}
        				else
        				{
        					var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'Receive'");
        					state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        					//state = Format.GetString(processStateDictionary.Select("CODEID = 'Receive'").FirstOrDefault()["CODENAME"]);

        					// 인수 처리가 진행되지 않았습니다. 인수 등록 처리를 먼저 진행하시기 바랍니다.
        					this.gfn_Message("NotArrivalCurrentState", [state, "MENU_PG-SG-0160"], "info", "ok");
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
        						this.gfn_Message("NotArrivalCurrentState", [state, "MENU_PG-SG-0190"], "info", "ok");
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
        				this.gfn_Message("AlreadyPassCurrentState", [state, this.nfn_getDictionarynameUpper("MENU_PG-SG-0190")], "info", "ok");
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
        							this.gfn_Message("NotArrivalCurrentState", [state, "MENU_PG-SG-0220"], "info", "ok");
        							return false;
        						}
        					}
        					else
        					{
        						var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkStart'");
        						state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        						//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkStart'").FirstOrDefault()["CODENAME"]);

        						// 작업시작 처리가 진행되지 않았습니다. 작업 시작 처리를 먼저 진행하시기 바랍니다.
        						this.gfn_Message("NotArrivalCurrentState", [state, "MENU_PG-SG-0190"], "info", "ok");
        						return false;
        					}
        				}
        				else
        				{
        					var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'Receive'");
        					state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        					//state = Format.GetString(processStateDictionary.Select("CODEID = 'Receive'").FirstOrDefault()["CODENAME"]);

        					// 인수 처리가 진행되지 않았습니다. 인수 등록 처리를 먼저 진행하시기 바랍니다.
        					this.gfn_Message("NotArrivalCurrentState", [state, "MENU_PG-SG-0160"], "info", "ok");
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
        							this.gfn_Message("NotArrivalCurrentState", [state, "MENU_PG-SG-0220"], "info", "ok");
        							return false;
        						}
        					}
        					else
        					{
        						var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkStart'");
        						state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        						//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkStart'").FirstOrDefault()["CODENAME"]);

        						// 작업시작 처리가 진행되지 않았습니다. 작업 시작 처리를 먼저 진행하시기 바랍니다.
        						this.gfn_Message("NotArrivalCurrentState", [state, "MENU_PG-SG-0190"], "info", "ok");
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
        						this.gfn_Message("NotArrivalCurrentState", [state, "MENU_PG-SG-0220"], "info", "ok");
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
        	var lotId = this.div_work.form.div_search.form.edt_lotId.value;
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
        		this.gfn_openPopup(popupId,"pcm::PCM01700P3.xfdl",oArg,"width=456,height=260");


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
        		this.gfn_Message("LotIsHold", this.div_work.form.div_search.form.edt_lotId.value, "warning", "ok");

        		this.fn_clearDetailInfo();

        		this.div_work.form.div_search.form.edt_lotId.set_value("");
        		this.div_work.form.div_search.form.edt_lotId.setFocus();

        		return;
        	}

        	if (isLocking == "Y")
        	{
        		// Locking 상태의 Lot 입니다.
        		this.gfn_Message("LotIsLocking", this.div_work.form.div_search.form.edt_lotId.value, "warning", "ok");

        		this.fn_clearDetailInfo();

        		this.div_work.form.div_search.form.edt_lotId.set_value("");
        		this.div_work.form.div_search.form.edt_lotId.setFocus();

        		return;
        	}

        	var productDefVersion = this.ds_lotInfo.getColumn(0,"PRODUCTDEFVERSION");
        	var isRcLot = this.ds_lotInfo.getColumn(0,"ISRCLOT");
        	this.div_work.form.div_search.form.edt_innerRevisionText.set_value(productDefVersion);
        	if (this.processDefType == "Rework")
        		this.div_work.form.div_search.form.sta_isRework.set_visible(true);
        	else
        		this.div_work.form.div_search.form.sta_isRework.set_visible(false);
        	if (isRcLot == "Y")
        		this.div_work.form.div_search.form.sta_isRCLot.set_visible(true);
        	else
        		this.div_work.form.div_search.form.sta_isRCLot.set_visible(false);

        	this.g_LotId       = this.nfn_nvl(this.div_work.form.div_search.form.edt_lotId.value, "");
        	this.g_PanelperQty = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PANELPERQTY"), "0"));
        	this.g_PnlQty      = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PNLQTY"), "0"));
        	this.g_PcsQty      = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PCSQTY"), "0"));
        	//this.div_work.form.div_pfsInfo.form.setControlsInfo(this.g_areaId, this.g_LotId, this.ds_lotInfo, this.queryVersion);

        	this.div_work.form.tab.tpgMessage.form.fn_search();
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


        	var vGoodqty = nexacro.toNumber(this.nfn_nvl(this.ds_work.getColumn(0, "GOODQTY"), "0"));
        	if (vGoodqty < 0)
        	{
        		// 양품수량은 0 보다 커야 합니다.
        		this.gfn_Message("GoodQtyLargerThanZero", null, "warning", "ok");
        		return false;
        	}
        	if(this.ds_equipment.findRow("CHK","1")<0){
        		// 작업 시작 할 설비를 선택하시기 바랍니다.
        		this.gfn_Message("SelectStartWorkEquipment", null, "warning", "ok");
        		return false;
        	}

        	var unit        = this.nfn_nvl(this.ds_work.getColumn(0, "UNIT"), "");
        	var panelPerQty = nexacro.toNumber(this.nfn_nvl(this.ds_work.getColumn(0, "PANELPERQTY"), "0"));
        	var goodQty     = nexacro.toNumber(this.nfn_nvl(this.ds_work.getColumn(0, "GOODQTY"), "0"));

        	if (unit == "PNL" && panelPerQty > 0 && goodQty % panelPerQty != 0)
        	{
        		// 단위가 PCS가 아닌 경우 PNL 수량은 정수로 나와야 합니다.
        		this.gfn_Message("PanelQtyHasNotInteger", null, "warning", "ok");
        		return false;
        	}

        	var validateData = this.fn_validateData();
        	return validateData;

        	return false;
        };

        this.fn_validateData = function()
        {
        	for(var i = 0; i < this.ds_defect.rowcount; i++)
        	{
        		var defectCode = this.nfn_nvl(this.ds_defect.getColumn(i, "DEFECTCODE"), "");
        		var defectName = this.nfn_nvl(this.ds_defect.getColumn(i, "DEFECTCODENAME"), "");
        		var pnlQty = nexacro.toNumber(this.nfn_nvl(this.ds_defect.getColumn(i, "PNLQTY"), "0"));
        		var qty = nexacro.toNumber(this.nfn_nvl(this.ds_defect.getColumn(i, "QTY"), "0"));
        /*
        		if (this.gfn_isNull(defectCode) || this.gfn_isNull(defectName))
        		{
        			// 불량코드를 선택하여 주십시오.
        			this.gfn_Message("NoDefectCode", null, "warning", "ok");
        			return true;
        		}
        */
        		if (pnlQty <= 0 || qty <= 0)
        		{
        			// 불량수량을 입력해야 합니다.
        			this.gfn_Message("DefectQtyRequired", null, "warning", "ok");
        			return false;
        		}
        	}

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
        		trace("this.ds_durable.saveXML()===========================>"+this.ds_durable.saveXML());
        		var durableLotCount = 0;
        		for(var i =0;i < this.ds_durable.rowcount;i++) {
        			if(!this.nfn_isNull(this.ds_durable.getColumn(i,"EQUIPMENTID"))) {
        				durableLotCount = durableLotCount+1;
        			}
        		}

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
        	return true;
        };

        this.fn_RESOURCE_CallBack = function ()
        {
        	//this.button.isBusy = true;

        	//buttons.ForEach(button => button.IsBusy = true);
        	//pnlContent.ShowWaitArea();

        	// 재작업 여부 확인
        	var lotId = this.div_work.form.div_search.form.edt_lotId.value;
        	this.g_areaId = this.div_work.form.div_search.form.edt_area_id.value;
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
         	if (!this.gfn_isNull(this.div_work.form.div_search.form.edt_area_id.value))
         	{
         		txtSearch = "USERIDNAME="+ this.div_work.form.div_pfsInfo.form.edt_worker.value;
         	}

         	var popupId = "SEARCH_UserList";  ///pcmCommon/getUserList.do
         	var oArg = {};
         	oArg.arg_type = "CA"; // C: 체크박스 B: 단일, CA : arg_searchStr 자동조회
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
         	if (!this.gfn_isNull(this.div_work.form.div_pfsInfo.form.edt_worker.value))
         	{
         		txtSearch = "TXTWORKERIDNAME="+ this.div_work.form.div_pfsInfo.form.edt_worker.value;
         	}


         	// 자사구분
         	//workerCondition.GridColumns.AddComboBoxColumn("OWNTYPE", 100, new SqlQuery("GetCodeList", "00001", "CODECLASSID=OwnType", $"LANGUAGETYPE={UserInfo.Current.LanguageType}"));
         	// 작업자유형
         	//workerCondition.GridColumns.AddComboBoxColumn("WORKERTYPE", 120, new SqlQuery("GetCodeList", "00001", "CODECLASSID=WorkerType", $"LANGUAGETYPE={UserInfo.Current.LanguageType}"));

         	//???  ==> 디폴트 , 작업자유형 팝업
         	//this.g_areaId = this.div_work.form.div_search.form.edt_area_id.value;
         	var popupId = "SEARCH_WorkerByProcess";  // /pcmCommon/getWorkerByProcess.do
         	var oArg = {};
         	oArg.arg_type = "CA"; // C: 체크박스 B: 단일, CA : arg_searchStr 자동조회
         	oArg.arg_popupCd = "P00196";  //getWorkerByProcess.do  /pcmCommon/getWorkerByProcess.do
         	oArg.arg_popupNm = "작업자 조회";
         	oArg.arg_rtnCols = "WORKERID|WORKERNAME|EMPLOYEENO|DEPARTMENT|OWNTYPE|WORKERTYPE";
         	oArg.arg_paramCols = "USERID|ENTERPRISEID|PLANTID|AREAID";
         	oArg.arg_paramValues = this.gf_getUserId() + "|" + this.gf_getEnterpriseId() + "|" + this.gf_getSiteType() + "|" +  this.g_areaId;  //this.gf_getSiteType()
         	oArg.arg_searchStr = txtSearch;

         	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=700,height=800");

        };

        this.fn_setControlsInfo2 = function ()
         {
         	this.ds_search.clearData();
         	this.ds_search.addRow();
         	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId()); //??? ==> 세션
         	this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());
         	this.ds_search.setColumn(0, "LOTID", this.div_work.form.div_search.form.edt_lotId.value );
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

         			// TODO : Resource
         			// 인계 작업장
         			if ((this.currStepType+",").indexOf("WaitForSend"+",") == -1)
         			{

         				this.sta_transitArea.set_visible(true);
        				this.sta_transitArea.set_enable(true);
         				this.cbo_transitArea.set_visible(true);
        				this.cbo_transitArea.set_enable(true);


        				this.fn_getLotProductTypePathType();


         			}
         			else
         			{
         				this.sta_transitArea.set_visible(false);
        				this.sta_transitArea.set_enable(false);
         				this.cbo_transitArea.set_visible(false);
        				this.cbo_transitArea.set_enable(false);
         				this.cbo_transitArea.set_innerdataset(null);

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

         		this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_value("PNL") ; //  콤보리스트에서 PNL 선택
        		this.ds_work.setColumn(0, "UNIT", "PNL");

         		if (materialClass == "FG")
         		{
         			this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_enable(true);
         		}
         		else
         		{
         			var pcsPnl = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PANELPERQTY"), "0"));

         			if (pcsPnl == 0)
        			{
         				this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_value("EA");
        				this.ds_work.setColumn(0, "UNIT", "EA");
        			}

         			this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_enable(true);
         		}
         	}
         	else
         	{
         		this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_value(defectUnit);
        		this.ds_work.setColumn(0, "UNIT", defectUnit);
         		this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_enable(false);
         	}
        	this.cbo_unitOfMaterial_onitemchanged();
         	var unitOfMaterial = this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.value;

         	this.div_work.form.div_pfsInfo.form.spn_numGoodQty.set_value(nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PCSQTY"), "0"))); //
         	this.div_work.form.div_pfsInfo.form.spn_numGoodPnlQty.set_value(nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PNLQTY"), "0")));

        	this.ds_work.setColumn(0, "GOODQTY"   , nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PCSQTY"), "0")));
        	this.ds_work.setColumn(0, "GOODPNLQTY", nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PNLQTY"), "0")));

        	// 메인 창 콜백
        	this.fn_setControlsInfo_CallBack();
         };

        this.fn_setControlsInfo_CallBack = function ()
        {
        	this.div_work.form.div_lotInfo.set_enable(true);
        	this.div_work.form.div_pfsInfo.set_enable(true);
        	this.fn_pfsDetail_setEnable(true);


        	//pfsDetail.SetDefectGridComboData(txtLotId.Text);


        	var productDefVersion =this.ds_lotInfo.getColumn(0, "PRODUCTDEFVERSION");
        	var isRcLot = this.ds_lotInfo.getColumn(0, "ISRCLOT");

        	this.div_work.form.div_search.form.edt_innerRevisionText.set_value(productDefVersion);
        	if (this.processDefType == "Rework")
        	{
        		this.div_work.form.div_search.form.sta_isRework.set_visible(true);
        		this.div_work.form.div_search.form.sta_isRework.set_enable(true);
        	}
        	else
        	{
        		this.div_work.form.div_search.form.sta_isRework.set_visible(false);
        		this.div_work.form.div_search.form.sta_isRework.set_enable(false);
        	}
        	if (isRcLot == "Y")
        	{
        		this.div_work.form.div_search.form.sta_isRCLot.set_visible(true);
        		this.div_work.form.div_search.form.sta_isRCLot.set_enable(true);
        	}
        	else
        	{
        		this.div_work.form.div_search.form.sta_isRCLot.set_visible(false);
        		this.div_work.form.div_search.form.sta_isRCLot.set_enable(false);
        	}

        	this.fn_setUnitOfMaterialControlEnable();

        	//this.pfsDetail_tabSearch();
        };

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

         this.fn_setUnitOfMaterialControlEnable = function ()
         {
         	var defectUnit = this.ds_lotInfo.getColumn(0, "DEFECTUNIT");

         	if (this.gfn_isNull(defectUnit))
         	{
         		var materialClass = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "MATERIALCLASS"), "");

         		this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_value("PNL"); // cboUnitOfMaterial.EditValue = "PNL"; ??
        		this.ds_work.setColumn(0, "UNIT", "PNL");

         		if (materialClass == "FG")
         		{
         			this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_enable(true);
         		}
         		else
         		{
         			var pcsPnl = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PANELPERQTY"), "0"));

         			if (pcsPnl == 0) {
         				this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_value("EA"); // cboUnitOfMaterial.EditValue = "EA"; ??
        				this.ds_work.setColumn(0, "UNIT", "EA");
        		    }
         			this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_enable(true);
         		}

         	}
         	else
         	{
         		this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_value(defectUnit); // cboUnitOfMaterial.EditValue = defectUnit; ??
        		this.ds_work.setColumn(0, "UNIT", defectUnit);


         		this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.set_enable(false);
         	}
         };

        /*
         *	최하단 불량 검사 그리드에 원인품목 리스트를 다시 읽어옴.
         */
        this.fn_GetReasonConsumableList = function ()
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "LOTID", this.div_work.form.div_search.form.edt_lotId.value );
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
        	this.ds_search.setColumn(0, "LOTID", this.div_work.form.div_search.form.edt_lotId.value );
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
        	this.ds_search.setColumn(0, "LOTID", this.div_work.form.div_search.form.edt_lotId.value );
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
         	this.div_work.form.div_pfsInfo.form.spn_numDefectQty.set_value(defectQty);
         	this.div_work.form.div_pfsInfo.form.spn_numGoodQty.set_value(qty - defectQty);
         	this.div_work.form.div_pfsInfo.form.spn_numGoodPnlQty.set_value(dGoodPnlQty);
         	this.div_work.form.div_pfsInfo.form.spn_numDefectPnlQty.set_value(dDefectPnlQty);
         };

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
        	this.ds_lotParam.setColumn(0, "PLANTID", this.plantId);
        	this.ds_lotParam.setColumn(0, "LOTID", this.g_LotId);
        	this.ds_lotParam.setColumn(0, "VERSION", "10001");


        	//10001
        	var sSvcID = "getLotProductTypePathType";
        	var sController = "/pcm01700/getLotProductTypePathType.do";
        	var sInDatasets = "INPUT=ds_lotParam";
        	var sOutDatasets = "ds_lotInfo=output";  // 확인
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
        	this.ds_durableParam.setColumn(0, "LOTID", this.div_work.form.div_search.form.edt_lotId.value);
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
        	this.ds_ReasonConsumableLot.filter("LOTID=='"+this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"LOTID")+"'");

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

        this.cbo_unitOfMaterial_onitemchanged = function(obj,e)
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
        		/*
        		if(this.gfn_isNull(obj.value) || this.ds_lotInfo.rowcount==0) return;

        		var nRow = this.ds_durable.findRow("DURABLELOTID", obj.value);
        		if (nRow < 0)
        		{
        			// 현재 작업에서 사용할 수 없는 치공구 Lot 입니다.
        			this.gfn_Message("NotAvailableDurableLotProcess", null, "info", "ok");
        			obj.set_value("");
        			return;
        		}
        		this.ds_durable.setColumn(nRow, "CHK", "1");
        		obj.set_value("");
        		*/
        	}
        };

        this.ds_durable_oncolumnchanged = function(obj,e)
        {
        /*
        	obj.set_enableevent(false);
        	if(e.columnid == "EQUIPMENTID"){
        		if(!this.gfn_isNull(e.newvalue)){
        			obj.setColumn(e.row,"CHK","1");
        		}else{
        			obj.setColumn(e.row,"CHK","0");
        		}
        	}
        	obj.set_enableevent(true);
        */
        /*
        	if(e.columnid == "CHK" && e.newvalue == "1")
        	{
        		obj.set_enableevent(false);
        		for(var i = 0; i < obj.rowcount; i++)
        		{
        			obj.setColumn(e.row, "EQUIPMENTID", "");
        		}

        		var totalCnt = ds_equipmentInfo.rowcount;
        		var nRow = obj.findRow("CHK", "1");
        		obj.filter("CHK == '1'");
        		var checkedCnt = obj.rowcount;
        		obj.filter("");

        		if (totalCnt == 1 && checkedCnt == 1)
        		{
        			// 설비탭의 그리드에서 가져옴.
        			var equipmentId = ds_equipmentInfo.getColumn(0, "EQUIPMENTID");
        			obj.setColumn(e.row,  "EQUIPMENTID", equipmentId);
        		}
        		obj.set_enableevent(true);
        	}
        */
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
        	oArg.arg_type = "DA";
        	oArg.arg_popupCd = "P00241";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "DEFECTCODE|DEFECTCODENAME|QCSEGMENTID|QCSEGMENTNAME|DECISIONDEGREE|SEGMENT_DEFECTCODE|SEGMENT_DEFECTNAME";
        	oArg.arg_paramCols = "LOTID|SEGMENTID|LANGUAGETYPE|VERSION";
        	oArg.arg_paramValues = lotID + "|" + qcSegmentID+"|"+this.gf_getLanguageType()+"|10003";
        	oArg.arg_searchStr = this.gfn_isNull(defectID) ? "" : "DEFECTCODENAME=" + defectID ;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };
        this.fn_getStepName = function(step, processState)
        {
        	var sRow 		= this.ds_step.findRowExpr("DESCRIPTION == '"+this.ds_lotInfo.getColumn(0, "STEPTYPE")+"'");
        	var stepName 	= this.ds_step.getColumn(sRow, "NAME");
        	this.gfn_Message("InvalidProcessStateInStepType", [stepName, this.ds_lotInfo.getColumn(0, "PROCESSSTATE")], "info", "ok");
        }
        this.ds_equipment_oncolumnchanged = function(obj,e)
        {
        	//obj.set_enableevent(false);
        	if(e.columnid=="CHK"){
        	/*
        		if(e.newvalue=="1"){
        			var nRow = this.ds_cboequipment.addRow();
        			this.ds_cboequipment.setColumn(nRow,"code",obj.getColumn(e.row,"EQUIPMENTID"));
        			this.ds_cboequipment.setColumn(nRow,"desc",obj.getColumn(e.row,"EQUIPMENTNAME"));
        		}else{
        			this.ds_durable.set_enableevent(false);
        			this.ds_cboequipment.deleteRow(this.ds_cboequipment.findRow("code",obj.getColumn(e.row,"EQUIPMENTID")));
        			for(var i=0; i<this.ds_durable.rowcount; i++){
        				if(obj.getColumn(e.row,"EQUIPMENTID") == this.ds_durable.getColumn(i,"EQUIPMENTID")){
        					this.ds_durable.setColumn(i,"EQUIPMENTID","");
        				}
        			}
        			this.ds_durable.set_enableevent(true);
        		}
        	*/
        		if(e.newvalue!="1"){
        			for(var i=0; i<this.ds_durable.rowcount; i++){
        				if(obj.getColumn(e.row,"EQUIPMENTID") == this.ds_durable.getColumn(i,"EQUIPMENTID")){
        					this.ds_durable.setColumn(i,"EQUIPMENTID","");
        				}
        			}
        		}
        		var sfilter = "code==''";
        		for(var i=0; i<obj.rowcount; i++){
        			if(obj.getColumn(i,"CHK")=="1")
        				sfilter += "||code=='" + obj.getColumn(i,"EQUIPMENTID")+"'";
        		}
        		this.ds_cboequipment.filter(sfilter);
        		//trace(sfilter);
        	}

        	//obj.set_enableevent(true);
        };

        this.div_header_btn_init_onclick = function(obj,e)
        {
        	this.div_work.form.div_search.form.edt_area_id.set_value("");
        	this.div_work.form.div_search.form.edt_area.set_value("");
        	this.div_work.form.div_search.form.edt_lotId.set_value("");

        	this.fn_clearDetailInfo();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.div_search.form.edt_lotId.addEventHandler("onkeydown",this.div_work_div_search_edt_lotId_onkeydown,this);
            this.div_work.form.div_search.form.edt_lotId.addEventHandler("oneditclick",this.div_work_div_search_edt_lotId_oneditclick,this);
            this.div_work.form.div_search.form.edt_lotId.addEventHandler("onkillfocus",this.div_work_div_search_edt_lotId_onkillfocus,this);
            this.div_work.form.div_search.form.btn_area.addEventHandler("onclick",this.div_work_div_search_btn_area_onclick,this);
            this.div_work.form.div_search.form.edt_area.addEventHandler("onkeydown",this.div_work_div_search_edt_area_onkeydown,this);
            this.div_work.form.div_search.form.edt_area.addEventHandler("onkillfocus",this.div_work_div_search_edt_area_onkillfocus,this);
            this.div_work.form.div_search.form.edt_area_id.addEventHandler("onkeydown",this.div_work_div_search_edt_area_onkeydown,this);
            this.div_work.form.div_search.form.edt_area_id.addEventHandler("onkillfocus",this.div_work_div_search_edt_area_onkillfocus,this);
            this.div_work.form.div_pfsInfo.form.btn_workerSrh.addEventHandler("onclick",this.btn_workerSrh_onclick,this);
            this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.addEventHandler("onitemchanged",this.cbo_unitOfMaterial_onitemchanged,this);
            this.div_work.form.div_pfsInfo.form.cbo_equpmentClass.addEventHandler("onitemchanged",this.cbo_equpmentClass_onitemchanged,this);
            this.div_work.form.tab.tpgConsumableStart.form.edt_consumableLotIdStart.addEventHandler("onkeydown",this.edt_consumableLotIdStart_onkeydown,this);
            this.div_work.form.tab.tpgDurableStart.form.edt_durableLotIdStart.addEventHandler("onchanged",this.div_work_tab_tpgDurableStart_edt_durableLotIdStart_onchanged,this);
            this.div_work.form.tab.tpgDurableStart.form.edt_durableLotIdStart.addEventHandler("onkeydown",this.edt_durableLotIdStart_onkeydown,this);
            this.div_work.form.tab.tpgDurableStart.form.btn_delRow_ds_durable.addEventHandler("onclick",this.btn_delRow_onclick,this);
            this.div_work.form.tab.tpgDurableStart.form.grd_durable.addEventHandler("oncellclick",this.grd_durableStart_oncellclick,this);
            this.div_work.form.tab.tpgDefect.form.grd_defect.addEventHandler("onexpandup",this.grd_defectList_onexpandup,this);
            this.div_work.form.tab.tpgDefect.form.grd_defect.addEventHandler("onkeydown",this.grd_defectList_onkeydown,this);
            this.div_work.form.tab.tpgDefect.form.grd_defect.addEventHandler("oncellclick",this.div_work_tab_tpgDefect_grd_defect_oncellclick,this);
            this.div_work.form.tab.tpgDefect.form.btn_addRow.addEventHandler("onclick",this.div_work_tab_tpgDefect_btn_addRow_onclick,this);
            this.pdv_ReasonConsumableList.form.grd_ReasonConsumableList.addEventHandler("oncelldblclick",this.pdv_ReasonConsumableList_grd_ReasonConsumableList_oncelldblclick,this);
            this.pdv_ReasonProcessSegment.form.grd_ReasonProcessSegment.addEventHandler("oncelldblclick",this.pdv_ReasonProcessSegment_grd_ReasonProcessSegment_oncelldblclick,this);
            this.ds_defect.addEventHandler("oncolumnchanged",this.ds_defect_oncolumnchanged,this);
            this.ds_message.addEventHandler("onrowposchanged",this.ds_message_onrowposchanged,this);
            this.ds_equipment.addEventHandler("oncolumnchanged",this.ds_equipment_oncolumnchanged,this);
            this.ds_consumable.addEventHandler("onrowposchanged",this.ds_consumableList_onrowposchanged,this);
            this.ds_durable.addEventHandler("oncolumnchanged",this.ds_durable_oncolumnchanged,this);
            this.ds_durableTemp.addEventHandler("oncolumnchanged",this.ds_durable_oncolumnchanged,this);
            this.ds_durableSave.addEventHandler("oncolumnchanged",this.ds_durable_oncolumnchanged,this);
            this.ds_equipmentSave.addEventHandler("oncolumnchanged",this.ds_equipment_oncolumnchanged,this);
        };
        this.loadIncludeScript("PCM01800M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
