(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01900M");
            this.set_titletext("작업 완료");
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


            obj = new Dataset("ds_dt", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_paramMain", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ENTERPRISEID\">10</Col></Row></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME_0\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID_0\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"UOMCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"P_TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_USERSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_worker", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_values", this);
            obj._setContents("<ColumnInfo><Column id=\"WORKER\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GOODPNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TRANSITAREA\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"PRINTWEEK\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfoTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTRCLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFSHIPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFTAKEINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISBEFOREROLLCUTTING\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dataInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKER\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GOODPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PRINTWEEK\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSITAREA\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISINSPECTIONPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"ISREPAIRPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"HASANALYSISTARGET\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORKPUBLISH\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKRESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_checkParam", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_checkList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotWorkerParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotWorkerInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumableLotList", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumableRequirementList", this);
            obj._setContents("<ColumnInfo><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"STANDARDREQUIREMENTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REQUIREMENTQTY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumableLotDistinctList", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumableList", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_durableLotList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"CLEANLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"USINGQTY\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_equipmentList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECIPEID\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILESIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILEEXT\" type=\"STRING\" size=\"256\"/><Column id=\"FILEPATH\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGERESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISUPLOAD\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"IMGBUTTONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumableInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_durableInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"CLEANLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"USINGQTY\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISLASTDURABLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_overQtyDurableLot", this);
            obj._setContents("<ColumnInfo><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_overCleanQtyDurableLot", this);
            obj._setContents("<ColumnInfo><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reelConsumableInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CONSUMABLEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_aoiDefectInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"DEFECTCODEGROUPID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODEGROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ANALYSISQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ANALYSISGOODQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ANALYSISGOODPNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FINALDEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ISCHANGE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bbtHoleDefectInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"DEFECTCODEGROUPID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODEGROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_layerParam", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_LayerInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_equipmentInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECIPEID\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_equipmentParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILEQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_equipmentInfoTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECIPEID\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_equipmentInfoSave", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECIPEID\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfoData", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTRCLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFSHIPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFTAKEINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISBEFOREROLLCUTTING\" type=\"STRING\" size=\"256\"/><Column id=\"Column30\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_InspectionList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILESIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILEEXT\" type=\"STRING\" size=\"256\"/><Column id=\"FILEPATH\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGERESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISUPLOAD\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"IMGBUTTONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_durable", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CLEANLIMIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_BORDurable", this);
            obj._setContents("<ColumnInfo><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CLEANLIMIT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumable", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTLOTQTY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_standardRequirement", this);
            obj._setContents("<ColumnInfo><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"STANDARDREQUIREMENTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REQUIREMENTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ALTITEM\" type=\"STRING\" size=\"256\"/><Column id=\"ALTREVISION\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN_ALT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumableDefectList", this);
            obj._setContents("<ColumnInfo><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REASONCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumableParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_standardRequirementParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOMPLETE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumableQty", this);
            obj._setContents("<ColumnInfo><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_durableParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_alternativeList", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumableListTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumableDistinctList", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inputQtyList", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOTUSINGQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMABLEDEFECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLESTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_standardRequirementInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"STANDARDREQUIREMENTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REQUIREMENTQTY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_priorityConsumableList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotCard", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rdParam", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_step", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cboequipment", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"desc\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("1");
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
            obj.set_text("작업 완료");
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
            obj.set_taborder("0");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","0",null,"32","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("상세영역");
            obj.set_cssclass("div_WF_detail_line");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_area","0","0","119","31",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("3");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_lotId","337","0","87","31",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("4");
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
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","sta_lotId:8","5","215","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("2");
            obj.set_autoselect("true");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"5","22","20","sta_lotId:5",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_area","sta_area:5","5","188","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("0");
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

            obj = new Static("label01","21.97%","0","118","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
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

            obj = new Static("label03","62.10%","0","118","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
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

            obj = new Static("label04","81.29%","0","119","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
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

            obj = new Static("label07","21.97%","31","118","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
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

            obj = new Static("label09","62.10%","31","118","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
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

            obj = new Static("label10","81.29%","31","119","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
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

            obj = new Static("label12","21.97%","62","118","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
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

            obj = new Static("label14","62.10%","62","118","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
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

            obj = new Static("label15","81.29%","62","119","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
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

            obj = new Static("label17","21.97%","93","118","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
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

            obj = new Static("label19","62.10%","93","118","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
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

            obj = new Static("label20","81.29%","93","119","31",null,null,null,null,null,null,this.div_work.form.div_lotInfo.form);
            obj.set_taborder("19");
            obj.set_text("자원명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("RESOURCENAME");
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
            obj.set_taborder("3");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_pfsInfo","0","194",null,"82","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            obj.set_url("pcm::PCM01900D02.xfdl");
            obj.set_formscrollbartype("none");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_main","0","276",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            obj.set_preload("true");
            obj.set_visible("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("tpgEquipment",this.div_work.form.tab_main);
            obj.set_text("설비");
            obj.set_tooltiptext("EQUIPMENT");
            this.div_work.form.tab_main.addChild(obj.name, obj);

            obj = new Static("title1_01","0","0","80","34",null,null,null,null,null,null,this.div_work.form.tab_main.tpgEquipment.form);
            obj.set_taborder("0");
            obj.set_text("설비");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_main.tpgEquipment.addChild(obj.name, obj);

            obj = new Grid("grd_equipment","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_main.tpgEquipment.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_equipmentInfo");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"설비ID\" tooltiptext=\"EQUIPMENTID\"/><Cell col=\"2\" text=\"설비명\" tooltiptext=\"EQUIPMENTNAME\"/><Cell col=\"3\" text=\"작업시작시간\"/><Cell col=\"4\" text=\"작업완료시간\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:EQUIPMENTID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:EQUIPMENTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:TRACKINTIME\"/><Cell col=\"4\" text=\"bind:TRACKOUTTIME\"/></Band></Format></Formats>");
            this.div_work.form.tab_main.tpgEquipment.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_equipmentInfo","80","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_main.tpgEquipment.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_main.tpgEquipment.addChild(obj.name, obj);

            obj = new Tabpage("tpgComment",this.div_work.form.tab_main);
            obj.set_text("특기사항");
            obj.set_url("pcm::PCM01700T04.xfdl");
            obj.set_tooltiptext("REMARKS");
            this.div_work.form.tab_main.addChild(obj.name, obj);

            obj = new Tabpage("tpgProcessSpec",this.div_work.form.tab_main);
            obj.set_text("공정SPEC");
            obj.set_url("pcm::PCM01700T14.xfdl");
            obj.set_tooltiptext("PROCESSSPEC");
            this.div_work.form.tab_main.addChild(obj.name, obj);

            obj = new Tabpage("tpgConsumableComplete",this.div_work.form.tab_main);
            obj.set_text("자재(작업완료)");
            obj.set_tooltiptext("RAWMATERIALWORKCOMPLETE");
            this.div_work.form.tab_main.addChild(obj.name, obj);

            obj = new Static("title1_01","0","0","97","34",null,null,null,null,null,null,this.div_work.form.tab_main.tpgConsumableComplete.form);
            obj.set_taborder("0");
            obj.set_text("자재(작업완료)");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_main.tpgConsumableComplete.addChild(obj.name, obj);

            obj = new Static("sta_consumableLotIdStart","147","9","65","20",null,null,null,null,null,null,this.div_work.form.tab_main.tpgConsumableComplete.form);
            obj.set_taborder("1");
            obj.set_text("자재 LOT");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_fittocontents("width");
            this.div_work.form.tab_main.tpgConsumableComplete.addChild(obj.name, obj);

            obj = new Edit("edt_consumableLotIdStart","217","9","160","20",null,null,null,null,null,null,this.div_work.form.tab_main.tpgConsumableComplete.form);
            obj.set_taborder("2");
            this.div_work.form.tab_main.tpgConsumableComplete.addChild(obj.name, obj);

            obj = new Grid("grd_standardRequirement",null,"34","611",null,"0","0",null,null,null,null,this.div_work.form.tab_main.tpgConsumableComplete.form);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_standardRequirement");
            obj.set_cssclass("grd_sub");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"119\"/><Column size=\"48\"/><Column size=\"181\"/><Column size=\"86\"/><Column size=\"81\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자재 ID\" tooltiptext=\"CONSUMABLEDEFID\"/><Cell col=\"2\" text=\"Rev\"/><Cell col=\"3\" text=\"자재명\" tooltiptext=\"CONSUMABLEDEFNAME\"/><Cell col=\"4\" text=\"기준소요량\" tooltiptext=\"STANDARDREQUIREMENTQTY\"/><Cell col=\"5\" text=\"소요량\" tooltiptext=\"REQUIREMENTQTY\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CONSUMABLEDEFID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CONSUMABLEDEFVERSION\"/><Cell col=\"3\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:STANDARDREQUIREMENTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"5\" text=\"bind:REQUIREMENTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/></Band></Format></Formats>");
            this.div_work.form.tab_main.tpgConsumableComplete.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_consumable",null,"9","29","24","grd_standardRequirement:0",null,null,null,null,null,this.div_work.form.tab_main.tpgConsumableComplete.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            this.div_work.form.tab_main.tpgConsumableComplete.addChild(obj.name, obj);

            obj = new Grid("grd_consumableComplete","0","34",null,null,"grd_standardRequirement:3","0",null,null,null,null,this.div_work.form.tab_main.tpgConsumableComplete.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_consumable");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"130\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자재 ID\" tooltiptext=\"CONSUMABLEDEFID\"/><Cell col=\"2\" text=\"자재명\" tooltiptext=\"CONSUMABLEDEFNAME\"/><Cell col=\"3\" text=\"자재 Rev\" tooltiptext=\"COMPONENTITEMVERSION\"/><Cell col=\"4\" text=\"자재 LOT No.\" tooltiptext=\"CONSUMABLELOTID\"/><Cell col=\"5\" text=\"재고수량\" tooltiptext=\"STOCKQTY\"/><Cell col=\"6\" text=\"가용수량\" tooltiptext=\"AVAILABLEQTY\"/><Cell col=\"7\" text=\"투입수량\" tooltiptext=\"INPUTQTY\" cssclass=\"cell_point\"/><Cell col=\"8\" text=\"불량 수량\" tooltiptext=\"DEFECTQTY\"/><Cell col=\"9\" text=\"Lot 사용수량\" tooltiptext=\"LOTUSINGQTY\"/><Cell col=\"10\" text=\"자재 불량\" tooltiptext=\"CONSUMABLEDEFECT\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CONSUMABLEDEFID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:CONSUMABLEDEFVERSION\"/><Cell col=\"4\" text=\"bind:CONSUMABLELOTID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:STOCKQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"6\" text=\"bind:AVAILABLEQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"7\" text=\"bind:INPUTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" edittype=\"mask\"/><Cell col=\"8\" text=\"bind:DEFECTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"9\" text=\"bind:LOTUSINGQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"10\" text=\"자재불량\" textAlign=\"center\" displaytype=\"buttoncontrol\" edittype=\"button\" tooltiptext=\"CONSUMABLEDEFECT\"/></Band></Format></Formats>");
            this.div_work.form.tab_main.tpgConsumableComplete.addChild(obj.name, obj);

            obj = new Tabpage("tpgDurableComplete",this.div_work.form.tab_main);
            obj.set_text("치공구(작업완료)");
            obj.set_tooltiptext("DURABLEWORKCOMPLETE");
            this.div_work.form.tab_main.addChild(obj.name, obj);

            obj = new Static("title1_01","0","0","110","34",null,null,null,null,null,null,this.div_work.form.tab_main.tpgDurableComplete.form);
            obj.set_taborder("0");
            obj.set_text("치공구(작업완료)");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_main.tpgDurableComplete.addChild(obj.name, obj);

            obj = new Grid("grd_BORDurable",null,"34","31.08%",null,"0","0",null,null,null,null,this.div_work.form.tab_main.tpgDurableComplete.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_BORDurable");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"140\"/><Column size=\"60\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"치공구 ID\" tooltiptext=\"DURABLEDEFID\"/><Cell col=\"2\" tooltiptext=\"TXTTOOLVERSION\" text=\"치공구 Rev\"/><Cell col=\"3\" text=\"치공구 명\" tooltiptext=\"DURABLEDEFNAME\"/><Cell col=\"4\" text=\"치공구 유형\" tooltiptext=\"DURABLETYPE\"/><Cell col=\"5\" text=\"보증타수\" tooltiptext=\"USEDLIMIT\"/><Cell col=\"6\" text=\"연마기준타수\" tooltiptext=\"CLEANLIMIT\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DURABLEDEFID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DURABLEDEFVERSION\"/><Cell col=\"3\" text=\"bind:DURABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:DURABLECLASSNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:USEDLIMIT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"6\" text=\"bind:CLEANLIMIT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/></Band></Format></Formats>");
            this.div_work.form.tab_main.tpgDurableComplete.addChild(obj.name, obj);

            obj = new Button("btn_delRow",null,"9","29","24","grd_BORDurable:0",null,null,null,null,null,this.div_work.form.tab_main.tpgDurableComplete.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_visible("false");
            this.div_work.form.tab_main.tpgDurableComplete.addChild(obj.name, obj);

            obj = new Grid("grd_durableComplete","0","34",null,null,"31.32%","0",null,null,null,null,this.div_work.form.tab_main.tpgDurableComplete.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_durableLotList");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"치공구 ID\" tooltiptext=\"DURABLEDEFID\"/><Cell col=\"2\" text=\"치공구 명\" tooltiptext=\"DURABLEDEFNAME\"/><Cell col=\"3\" text=\"치공구 Rev\" tooltiptext=\"TXTTOOLVERSION\"/><Cell col=\"4\" text=\"Tool No.\" tooltiptext=\"DURABLELOTID\"/><Cell col=\"5\" text=\"작업시작시간\" tooltiptext=\"WORKSTARTTIME\"/><Cell col=\"6\" text=\"작업종료시간\" tooltiptext=\"WORKENDTIME\"/><Cell col=\"7\" text=\"사용타수\" tooltiptext=\"USEDCOUNT\"/><Cell col=\"8\" text=\"누적타수\" tooltiptext=\"TOTALUSEDCOUNT\"/><Cell col=\"9\" text=\"보증타수\" tooltiptext=\"USEDLIMIT\"/><Cell col=\"10\" text=\"연마기준타수\" tooltiptext=\"CLEANLIMIT\"/><Cell col=\"11\" text=\"타발타수\" cssclass=\"cell_point\"/><Cell col=\"12\" text=\"설비\" tooltiptext=\"EQUIPMENT\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DURABLEDEFID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DURABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:DURABLEDEFVERSION\"/><Cell col=\"4\" text=\"bind:DURABLELOTID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:WORKSTARTTIME\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:WORKENDTIME\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:USEDCOUNT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"8\" text=\"bind:TOTALUSEDCOUNT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"9\" text=\"bind:USEDLIMIT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"10\" text=\"bind:CLEANLIMIT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"11\" text=\"bind:USINGQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:EQUIPMENTID\" displaytype=\"combocontrol\" combocodecol=\"code\" combodatacol=\"desc\" combodataset=\"ds_cboequipment\" edittype=\"combo\"/></Band></Format></Formats>");
            this.div_work.form.tab_main.tpgDurableComplete.addChild(obj.name, obj);

            obj = new Tabpage("tpgAOIDefect",this.div_work.form.tab_main);
            obj.set_text("AOI 불량");
            obj.set_url("pcm::PCM01900T02.xfdl");
            obj.set_tooltiptext("AOIDEFECT");
            this.div_work.form.tab_main.addChild(obj.name, obj);

            obj = new Tabpage("tpgAOIHoleDefect",this.div_work.form.tab_main);
            obj.set_text("AOI HOLE 불량");
            obj.set_url("pcm::PCM01900T04.xfdl");
            this.div_work.form.tab_main.addChild(obj.name, obj);

            obj = new Tabpage("tpgBBTHOLEDefect",this.div_work.form.tab_main);
            obj.set_text("BBT 불량");
            obj.set_url("pcm::PCM01900T03.xfdl");
            obj.set_tooltiptext("BBTDEFECT");
            this.div_work.form.tab_main.addChild(obj.name, obj);

            obj = new Tabpage("tpgPostProcessEquipmentWip",this.div_work.form.tab_main);
            obj.set_text("후공정 설비재공");
            obj.set_url("pcm::PCM01700T13.xfdl");
            obj.set_tooltiptext("POSTPROCESSEQUIPMENTWIP");
            this.div_work.form.tab_main.addChild(obj.name, obj);

            obj = new Tabpage("tpgMessage",this.div_work.form.tab_main);
            obj.set_text("전달사항");
            obj.set_url("pcm::PCM01700T12.xfdl");
            obj.set_tooltiptext("MESSAGE");
            this.div_work.form.tab_main.addChild(obj.name, obj);

            obj = new Tabpage("tpgDefect",this.div_work.form.tab_main);
            obj.set_text("불량");
            obj.set_tooltiptext("DEFECT");
            this.div_work.form.tab_main.addChild(obj.name, obj);

            obj = new Static("title1_00","0","0","38","34",null,null,null,null,null,null,this.div_work.form.tab_main.tpgDefect.form);
            obj.set_taborder("0");
            obj.set_text("불량");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_main.tpgDefect.addChild(obj.name, obj);

            obj = new Grid("grdInspectionList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_main.tpgDefect.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_InspectionList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"불량 코드\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"불량코드 명\"/><Cell col=\"3\" text=\"품질공정\" tooltiptext=\"QCSEGMENT\"/><Cell col=\"4\" text=\"수량(PNL)\" cssclass=\"cell_point\"/><Cell col=\"5\" text=\"수량\" cssclass=\"cell_point\"/><Cell col=\"6\" text=\"불량율\"/><Cell col=\"7\" text=\"원인품목\" tooltiptext=\"REASONCONSUMABLEDEFID\"/><Cell col=\"8\" text=\"원인 LOTID\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell col=\"9\" text=\"원인 공정\" tooltiptext=\"REASONPROCESSSEGMENTID\"/><Cell col=\"10\" text=\"원인 작업장\" tooltiptext=\"REASONAREAID\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:SEGMENT_DEFECTCODE\" textAlign=\"left\" expandshow=\"show\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:SEGMENT_DEFECTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:QCSEGMENTNAME\"/><Cell col=\"4\" text=\"bind:PNLQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0.00\" maskeditautoselect=\"true\"/><Cell col=\"5\" text=\"bind:QTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:DEFECTRATE\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0.00\"/><Cell col=\"7\" text=\"bind:CONSUMABLEDEFNAME\" expandshow=\"show\"/><Cell col=\"8\" text=\"bind:REASONCONSUMABLELOTID\" combodataset=\"ds_ReasonConsumableLot\" combocodecol=\"CONSUMABLELOTID\" combodatacol=\"CONSUMABLELOTID\" displaytype=\"combotext\" edittype=\"combo\" expandshow=\"hide\"/><Cell col=\"9\" text=\"bind:REASONPROCESSSEGMENTNAME\" expandshow=\"show\"/><Cell col=\"10\" text=\"bind:REASONAREANAME\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" maskeditformat=\"#,##0.00\" expr=\"expr:dataset.getSum(&quot;PNLQTY&quot;) \"/><Cell col=\"5\" maskeditformat=\"#,##0\" displaytype=\"mask\" expr=\"expr:dataset.getSum(&quot;QTY&quot;) \"/><Cell col=\"6\" expandchar=\"%\" expandsize=\"24\" maskeditformat=\"#,##0.00\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;DEFECTRATE&quot;)\" maskedittype=\"number\" maskeditpostfixtext=\" %\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band></Format></Formats>");
            this.div_work.form.tab_main.tpgDefect.addChild(obj.name, obj);

            obj = new Button("btn_customdelRow",null,"6","26","24","0",null,null,null,null,null,this.div_work.form.tab_main.tpgDefect.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab_main.tpgDefect.addChild(obj.name, obj);

            obj = new Button("btnAddRow_ds_InspectionList",null,"6","26","24","btn_customdelRow:0",null,null,null,null,null,this.div_work.form.tab_main.tpgDefect.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.form.tab_main.tpgDefect.addChild(obj.name, obj);

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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","pcm::PCM01900D02.xfdl");
            this._addPreloadList("fdl","pcm::PCM01700T04.xfdl");
            this._addPreloadList("fdl","pcm::PCM01700T14.xfdl");
            this._addPreloadList("fdl","pcm::PCM01900T02.xfdl");
            this._addPreloadList("fdl","pcm::PCM01900T04.xfdl");
            this._addPreloadList("fdl","pcm::PCM01900T03.xfdl");
            this._addPreloadList("fdl","pcm::PCM01700T13.xfdl");
            this._addPreloadList("fdl","pcm::PCM01700T12.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PCM01900M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01900M.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PCM01900M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM01900M.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("PCM01900M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM01900M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 작업 완료
         * 파일명 		: PCM01900M.xfdl
         * 작성자 		: 김성현
         * 작성일 		: 2021.4. 23
         *
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.4. 23	김성현   	최초작성
         * 2021.05.06   최성민		프로그램 인수인계
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_pcm.xjs"); /*include "lib::lib_pcm.xjs"*/;
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.g_event;

        this.g_areaId = "";		// 작업장 id
        this.queryVersion = "";

        this.processType  = -1;
        this.processState = "";
        this.stepType     = "";

        this.g_LotId       = "";
        this.g_PanelperQty = -1;
        this.g_PnlQty      = -1;
        this.g_PcsQty      = -1;

        this.g_pfsDetail_tabSearch = false;
        this._processSegmentType = "";

        this._isInspectionProcess = false;
        this._isRepairProcess = false;
        this.isReworkPublish = false;

        this.processDefType = "";
        this.lastRework = "";
        this.processDefId = "";
        this.processDefVersion = "";

        this.tab_aoi = false;
        this.tab_aoiHole = false;
        this.tab_bbt = false;
        this.tab_postProcess = false;

        this.tab_bbt_visible = "";

        this.subProcessDefId = "";
        this.subProcessDefVersion = "";
        this.reworkResourceId = "";
        this.reworkAreaId = "";

        this.hasAnalysisTarget = false;

        this.nLeft;
        this.nTop;

        /***************************************************************************
         * 2021-05-06 최성민 추가
         ***************************************************************************/
        this.tabObj = this.div_work.form.tab_main;

        this.tpgEquipment                     = this.tabObj.tpgEquipment;
        this.tpgComment                       = this.tabObj.tpgComment;
        this.tpgProcessSpec                   = this.tabObj.tpgProcessSpec;
        this.tpgMessage                       = this.tabObj.tpgMessage;
        this.tpgDefect                        = this.tabObj.tpgDefect;

        this.tpgConsumableComplete            = this.tabObj.tpgConsumableComplete;
        this.tpgDurableComplete               = this.tabObj.tpgDurableComplete;
        this.tpgAOIDefect                     = this.tabObj.tpgAOIDefect;
        this.tpgAOIHoleDefect                 = this.tabObj.tpgAOIHoleDefect;
        this.tpgBBTHOLEDefect                 = this.tabObj.tpgBBTHOLEDefect;
        this.tpgPostProcessEquipmentWip       = this.tabObj.tpgPostProcessEquipmentWip;

        this.ds_consumable_rowposition = -1;
        this.pnlQty_enter = false;
        /***************************************************************************
         * 2021-05-06 최성민 추가
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.ds_search.set_rowposition(0);
        	this.ds_search.setColumn(0, "ENTERPRISEID", 		this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", 	"");
        	this.initializeControls();

        	//그리드 이벤트 제거
        	this.basfn_removeEventGrid(this.div_work.form.tab_main.tpgDefect.form.grdInspectionList);

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

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

            switch(sPopupId)
        	{
        		case "AREA_ID" :
        			this.div_work.form.div_search.form.edt_area.set_value(rtn[1]);
        			this.g_areaId = rtn[0];			// 작업장Id
        			this.clearDetailInfo();		//2021-06-17 작업장 변경시 데이터 초기화
        			this.div_work.form.div_search.form.edt_lotId.set_value(null);
        			this.div_work.form.div_search.form.edt_lotId.setFocus();
        			break;
        		case "SEARCH_ReworkRoutingForAoiRepairPopup":
        			if(rtn.resultCd == "OK")
        			{
        				this.subProcessDefId 	  = rtn.subProcessDefId;//this.nfn_nvl(rtn.dataSet.getColumn(0, "REWORKNUMBER"), "");
        				this.subProcessDefVersion = rtn.subProcessDefVersion;//this.nfn_nvl(rtn.dataSet.getColumn(0, "REWORKVERSION"), "");
        				this.reworkResourceId     = rtn.resourceId;
        				this.reworkAreaId         = rtn.areaId;

        				this.fn_SEARCH_ReworkRoutingForAoiRepairPopup_CallBack();
        			} else {
        				// 재작업 라우팅을 선택하시기 바랍니다.
        				this.gfn_Message("SelectReworkRouting", null, "warning", "ok");
        				return;
        			}
        			break;
        		case "SEARCH_RESOURCE" :
        			if(rtn.resultCd == "OK")
        			{
        				this.ds_body.clearData();
        				this.ds_body.addRow();

        				this.ds_body.setColumn(0, "LOTID", 		this.nfn_nvl(this.div_work.form.div_search.form.edt_lotId.value, ""));
        				this.ds_body.setColumn(0, "RESOURCEID", this.nfn_nvl(rtn.resourceId, "")); // 팝업 리턴값
        				this.ds_body.setColumn(0, "VERSION", 	"10031");

        				var sSvcID 			= "saveLotResourceId";
        				var sController 	= "/pcmWorkProcess/saveLotResourceId.do";
        				var sInDatasets 	= "INPUT=ds_body";
        				var sOutDatasets 	= "ds_resourceList=output";
        				var sArgs 			= "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        			} else {
        				this.searchDiv.edt_lotNo.set_value("");
        			}
        		break;
        		case "SEARCH_StayReasonCode":
        			rtn = JSON.parse(rtn);
        			if(rtn.resultCd != "CANCEL")
        			{
        				this.fn_StayReasonCode_CallBack();
        			}
        			break;
        		case "SEARCH_productRevision":
        			//this.fn_productRevision_CallBack();
        			rtn = JSON.parse(rtn);
        			if(rtn.resultCd=="CANCEL"){
        				this.clearDetailInfo();
        				return;
        			}else{
        				this.fn_search();
        				return;
        			}
        			//this.fn_productRevision_CallBack();


        			break;
        			break;
        		case "SEARCH_DEFECT":
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
        			break;
        		case "SEARCH_CONSUMABLEDEFECTPROCESS" :

        			console.log("SEARCH_CONSUMABLEDEFECTPROCESS");

        			console.log("rtn >>" + rtn);

        			if (rtn.resultCd == "OK")
        			{
        				var inputDefectQty = rtn.defectQty;

        				var nRow = this.ds_consumable.rowcount == 1 ? 0 : this.ds_consumable.rowposition;

        				this.ds_consumable.setColumn(nRow, "DEFECTQTY", inputDefectQty);

        				var consumableLotId  = this.nfn_nvl(this.ds_consumable.getColumn(nRow, "CONSUMABLELOTID"), "");
        				var vConsumableQty = nexacro.toNumber(this.nfn_nvl(this.ds_consumable.getColumn(nRow, "ORGINPUTQTY"), "0"));
        			    var availableQty     = nexacro.toNumber(this.nfn_nvl(this.ds_consumable.getColumn(nRow, "AVAILABLEQTY"), "0"));
        				var currLotQty		= nexacro.toNumber(this.nfn_nvl(this.ds_consumable.getColumn(nRow, "CURRENTLOTQTY"), "0")); //현재 Lot에 투입된 자재 수량
        				var lastQty			= (availableQty + currLotQty);	//실제 수량

        				trace("inputDefectQty===" + inputDefectQty);
        				trace("vConsumableQty===" + vConsumableQty);
        				trace("availableQty===" + availableQty);

        				if ((inputDefectQty + vConsumableQty) > lastQty)
        				{
        					trace("많다========");
        					this.ds_consumable.setColumn(nRow, "INPUTQTY"   , lastQty);
        					this.ds_consumable.setColumn(nRow, "ORGINPUTQTY", lastQty - inputDefectQty);
        				}
        				else
        				{
        					trace("적다========");
        					this.ds_consumable.setColumn(nRow, "INPUTQTY"   , inputDefectQty + vConsumableQty);
        					this.ds_consumable.setColumn(nRow, "ORGINPUTQTY", vConsumableQty);
        				}
        			}

        			break;
        		default :
        			break;
        	}
        };

        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD != 0)
        	{
        		if(trId=="saveTrackOutLot"){
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        				return;
        			} else {
        				this.gfn_Message(errMsg, "\n"+errMsg, "error", "ok");
        				return;
        			}
        		} else {
        			this.gfn_Message(errMsg, null, "error", "ok");
        			return;
        		}

        	}

        	switch(trId) {
        		case "selectAreaResourceByLot":
        			if(this.ds_dt.getRowCount() < 1)
        			{
        				//존재 하지 않는 Lot No. 입니다.
        				this.gfn_Message("NotExistLotNo", null, "warning", "ok");
        				return;
        			}

        			//작업장이나, 자원이 없을 경우 nfn_nvl
        			if (this.nfn_isNull(this.ds_dt.getColumn(0, "AREAID")) || this.nfn_isNull(this.ds_dt.getColumn(0, "RESOURCEID")))
        			{
        				var popupId = "SEARCH_RESOURCE";
        				var oArg = {};

        				oArg.arg_lotId 				= this.nfn_nvl(this.ds_dt.getColumn(0,"LOTID"), "");
        				oArg.arg_processSegmentId 	= this.nfn_nvl(this.ds_dt.getColumn(0,"PROCESSSEGMENTID"), "");
        				oArg.arg_areaId 			= this.g_areaId;

        				this.gfn_openPopup(popupId,"pcm::PCM01700P2.xfdl",oArg,"width=456,height=170");
        			} else {
        				this.fn_RESOURCE_CallBack();
        			}
        			break;
        		case "getProcessDefTypeByProcess":
        			this.processDefType = "";
        			this.lastRework = "";
        			this.processDefId = "";
        			this.processDefVersion = "";

        			if (this.ds_processDefTypeInfo.getRowCount() > 0)
        			{
        				this.processDefType    = this.nfn_nvl(this.ds_processDefTypeInfo.getColumn(0, "PROCESSDEFTYPE"), "");
        				this.processDefId      = this.nfn_nvl(this.ds_processDefTypeInfo.getColumn(0, "PROCESSDEFID"), "");
        				this.processDefVersion = this.nfn_nvl(this.ds_processDefTypeInfo.getColumn(0, "PROCESSDEFVERSION"), "");
        				this.lastRework        = this.nfn_nvl(this.ds_processDefTypeInfo.getColumn(0, "LASTREWORK"), "");
        			}

        			this.queryVersion = "10001";

        			if (this.processDefType == "Rework")
        				this.queryVersion = "10011";

        			var lotId = this.nfn_nvl(this.div_work.form.div_search.form.edt_lotId.value, "");;

        			this.ds_paramMain.clearData();
        			this.ds_paramMain.addRow();
        			this.ds_paramMain.setColumn(0, "ENTERPRISEID", 		this.gf_getEnterpriseId());
        			this.ds_paramMain.setColumn(0, "PLANTID", 			this.gf_getSiteType());
        			this.ds_paramMain.setColumn(0, "AREAID", 			this.g_areaId);
        			this.ds_paramMain.setColumn(0, "LOTID", 			lotId);
        			this.ds_paramMain.setColumn(0, "PROCESSSTATE",		"Run");
        			this.ds_paramMain.setColumn(0, "LANGUAGETYPE", 		this.gf_getLanguageType());
        			this.ds_paramMain.setColumn(0, "MATERIALTYPE",		"Consumable");

        			if(this.processDefType == "Rework")
        				this.ds_paramMain.setColumn(0, "VERSION", "10032");
        			else
        				this.ds_paramMain.setColumn(0, "VERSION", "10031");

        			var sSvcID 			= "selectLotInfoByProcess";
        			var sController 	= "/pcm01700/selectLotInfoByProcess.do";
        			var sInDatasets 	= "INPUT=ds_paramMain";
        			var sOutDatasets 	= "ds_lotInfo=ds_lotInfo ds_consumable=ds_consumable";
        			var sArgs 			= "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        			break;
        		case "selectLotInfoByProcess" :
        			if (this.ds_lotInfo.getRowCount() < 1)
        			{
        				// 조회할 데이터가 없습니다.
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				this.clearDetailInfo();

        				this.div_work.form.div_search.form.edt_lotId.set_value("");
        				this.div_work.form.div_search.form.edt_lotId.setFocus();
        				return;
        			}
        			this.checkLotProcessStateByStepType(this.getProcessType(), this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PROCESSSTATE"), ""), this.nfn_nvl(this.ds_lotInfo.getColumn(0, "STEPTYPE"), ""));
        			break;
        		case "getCheckStaying":
        			if (this.nfn_nvl(this.ds_dtStaying.getColumn(0, "ISLOCKING"), "") == "Y")
        			{
        				// 채공팝업
        				var popupId = "SEARCH_StayReasonCode";
        				var oArg = {};
        				oArg.arg_ds_dtStaying = this.ds_dtStaying;
        				this.gfn_openPopup(popupId,"pcm::PCM01700P1.xfdl",oArg,"width=556,height=409");
        			} else {
        				this.fn_StayReasonCode_CallBack();
        			}
        			break;
        		case "saveTrackOutLot":
        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장되었습니다.

        			// Print Lot Card
                    if (this.isReworkPublish) //재작업시 Lot Card 출력
                    {
        				this.fn_print();
                    }

        			this.g_LotId       = "";
        			this.div_work.form.div_search.form.edt_lotId.set_value("");
        			this.div_work.form.div_search.form.edt_lotId.setFocus();
        			this.clearDetailInfo();
        			this.div_work.form.div_pfsInfo.form.reload();
        			break;
        		case "saveLotResourceId":
        			this.fn_RESOURCE_CallBack();
        			break;
        		case "getCodeList":
        			var rtnBoolean = this.fn_getCodeList_CallBack();
        			if (!rtnBoolean)
        			{
        				this.clearDetailInfo();

        				this.div_work.form.div_search.form.edt_lotId.set_value("");
        				this.div_work.form.div_search.form.edt_lotId.setFocus();
        				return;
        			}

        			//채공 상태 체크
        			var lotId = this.div_work.form.div_search.form.edt_lotId.value;

        			this.ds_paramMain.clearData();
        			this.ds_paramMain.addRow();
        			this.ds_paramMain.setColumn(0, "ENTERPRISEID", 		this.gf_getEnterpriseId());
        			this.ds_paramMain.setColumn(0, "PLANTID", 			this.gf_getSiteType());
        			this.ds_paramMain.setColumn(0, "AREAID", 			this.g_areaId);
        			this.ds_paramMain.setColumn(0, "LOTID", 			lotId);
        			this.ds_paramMain.setColumn(0, "PROCESSSTATE",		"Run");
        			this.ds_paramMain.setColumn(0, "LANGUAGETYPE", 		this.gf_getLanguageType());
        			this.ds_paramMain.setColumn(0, "VERSION", 			"10001");

        			var sSvcID 			= "getCheckStaying";
        			var sController 	= "/pcm01700/getCheckStaying.do";
        			var sInDatasets 	= "INPUT=ds_paramMain";
        			var sOutDatasets 	= "ds_dtStaying=output";
        			var sArgs 			= "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        			break;
        		case "selectDefectMapDataByWorkComplete":
        			if (this.ds_checkList.getRowCount() > 0)
        			{
        				this._isRepairProcess = true;
        				this.tab_aoi = true;
        			}
        			this.fn_selectDefectMapDataByWorkComplete_CallBack();
        			break;
        		case "getLotWorkerByTrackOut":
        			if (this.ds_lotWorkerInfo.getRowCount() > 0)
        			{
        				var workerId = "";
        				var workerName = "";

        				for(var i = 0; i < this.ds_lotWorkerInfo.getRowCount(); i++)
        				{
        					workerId   += this.nfn_nvl(this.ds_lotWorkerInfo.getColumn(i, "WORKERID"), "")  + ",";
        					workerName += this.nfn_nvl(this.ds_lotWorkerInfo.getColumn(i, "WORKERNAME"), "")  + ",";
        				}

        				if (workerId.length > 0)
        					workerId = workerId.substring(0, workerId.length - 1);
        				if (workerName.length > 0)
        					workerName = workerName.substring(0, workerName.length - 1);

        				this.div_work.form.div_pfsInfo.form.setWorker(workerId, workerName)
        			}

        			/**
        			* 여기서부터 AS-IS 소스 순서를 바꿈.
        			*/

        			var stepType = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "STEPTYPE"), "");
        			trace("stepType===" + stepType);
        			var step     = stepType.replace("{", "").replace("}", "").split(",");  // 배열
        			trace("step===" + step);
        			var isLastStep = true;

        			for(var i = 0; i < step.length; i++)
        			{
        				trace("===========step==========>"+step[i]);
        				if(step[i] == this.Constants.WaitForSend)
        					isLastStep = false;
        			}

        			if (isLastStep){
        				this.tab_postProcess = true;
        				//2021-05-11 검사 관련 로직 추가
        				//작업완료 + 최종스텝이면  자주검사,계측검사 처리함  (노석안K 요청 0512  by 이용국)

        				//자주검사(출하)
        				if (this.processDefType != "Rework" && this.processDefType != "Repeat" && this.nfn_nvl(this.ds_lotInfo.getColumn(0, "SELFSHIPINSPRESULT"), "") == "N")
        				{
        					// 자주검사(출하) 결과가 없습니다. 출하검사 화면으로 이동하시겠습니까? Lot No. : {0}
        					var drResult = this.gfn_confirm("NotExistsInspectionShipResult", "information", [this.div_work.form.div_search.form.edt_lotId.value]);
        					var lotId = this.div_work.form.div_search.form.edt_lotId.value;
        					this.clearDetailInfo();
        					if (drResult) //YES
        					{
        						this.ds_menuParam.clearData();
        						this.ds_menuParam.addRow();
        						this.ds_menuParam.setColumn(0, "AREAID"  , this.nfn_nvl(this.g_areaId));
        						this.ds_menuParam.setColumn(0, "AREANAME", this.nfn_nvl(this.div_work.form.div_search.form.edt_area.value));
        						this.ds_menuParam.setColumn(0, "LOTID", this.nfn_nvl(this.div_work.form.div_search.form.edt_lotId.value));

        						//자주검사(출하)로 이동
        						var sUrl = "pcm::PCM01600M.xfdl";

        						// arryList 타입전달 예)
        						var objArgs = {
        							menuName : "LotOutcommingInspection",
        							objList : [this.SelectRow2JsonString(this.ds_menuParam)]
        						};

        						var bReload = true;
        						this.gfn_goPage(sUrl, objArgs, bReload);
        					} else {
        						return;
        					}
        				}

        				//계측검사 유무 체크
        				if (this.processDefType != "Rework" && this.processDefType != "Repeat" && this.nfn_nvl(this.ds_lotInfo.getColumn(0, "MEASUREINSPRESULT"), "") == "NA")
        				{
        					this.gfn_Message("NotExistsOperationInspectionResult", [this.nfn_nvl(this.div_work.form.div_search.form.edt_lotId.value, "")], "info", "ok");
        					this.clearDetailInfo();
        					this.div_work.form.div_search.form.edt_lotId.set_value("");
        					this.div_work.form.div_search.form.edt_lotId.setFocus();

        					return;
        				}

        				//계측검사 결과 체크
        				if (this.processDefType != "Rework" && this.processDefType != "Repeat" && this.nfn_nvl(this.ds_lotInfo.getColumn(0, "MEASUREINSPRESULT"), "") == "N")
        				{
        					this.gfn_Message("OperationInspectionResultIsNG", [this.nfn_nvl(this.div_work.form.div_search.form.edt_lotId.value, "")], "info", "ok");
        					this.clearDetailInfo();
        					this.div_work.form.div_search.form.edt_lotId.set_value("");
        					this.div_work.form.div_search.form.edt_lotId.setFocus();

        					return;
        				}

        				// 수입검사 필수 여부 체크
        				if (this.nfn_nvl(this.ds_lotInfo.getColumn(0, "OSPINSPRESULT"), "") == "Y")
        				{
        					// 외주입고 공정입니다. 외주입고품 수입검사를 진행하시기 바랍니다. Lot No. : {0}
        					this.gfn_Message("OSPInspectionIsRequired", [this.nfn_nvl(this.div_work.form.div_search.form.edt_lotId.value, "")], "info", "ok");
        					this.clearDetailInfo();
        					this.div_work.form.div_search.form.edt_lotId.set_value("");
        					this.div_work.form.div_search.form.edt_lotId.setFocus();

        					return;
        				}
        			} else {
        				this.tab_postProcess = false;
        			}

        			//최종 탭 보여주기 설정
        			this.pfsDetail_tabShown();
        			this.pfsDetail_tabSearch();

        			break;

        		case "getLayerListForAoiBbtDefectCase1":

        			if(this.ds_aoiDefectInfo.getRowCount() == 0)
        			{
        				this.ds_aoiDefectInfo.addColumn( "DEFECTCODEGROUPID"           , "string", 256 );
        				this.ds_aoiDefectInfo.addColumn( "DEFECTCODEGROUPNAME"         , "string", 256 );
        				this.ds_aoiDefectInfo.addColumn( "DEFECTCODE"				   , "string", 256 );
        				this.ds_aoiDefectInfo.addColumn( "DEFECTCODENAME"		       , "string", 256 );
        				this.ds_aoiDefectInfo.addColumn( "LAYER"				       , "string", 256 );
        				this.ds_aoiDefectInfo.addColumn( "PCSQTY"					   , "BIGDECIMAL", 256 );
        				this.ds_aoiDefectInfo.addColumn( "ANALYSISQTY"				   , "BIGDECIMAL", 256 );
        				this.ds_aoiDefectInfo.addColumn( "ANALYSISGOODQTY"            , "BIGDECIMAL", 256 );
        				this.ds_aoiDefectInfo.addColumn( "ANALYSISGOODPNLQTY"         , "BIGDECIMAL", 256 );
        				this.ds_aoiDefectInfo.addColumn( "FINALDEFECTQTY"             , "BIGDECIMAL", 256 );
        				this.ds_aoiDefectInfo.addColumn( "ISCHANGE"					  , "STRING", 256 );
        				this.ds_aoiDefectInfo.addColumn( "SEQUENCE"					  , "INT", 256 );
        			}

        			if (this.ds_LayerInfo.getRowCount() > 0)
        			{
        			  for(var i = 0; i < this.ds_LayerInfo.getRowCount(); i++)
        			  {
        				  var nRow = this.ds_aoiDefectInfo.addRow();

        				  this.ds_aoiDefectInfo.setColumn(nRow, "DEFECTCODEGROUPID", "009");
        				  this.ds_aoiDefectInfo.setColumn(nRow, "DEFECTCODE", "9019");
        				  this.ds_aoiDefectInfo.setColumn(nRow, "LAYER", this.ds_LayerInfo.getColumn(i, "LAYERID"));
        				  this.ds_aoiDefectInfo.setColumn(nRow, "PCSQTY", 0);
        				  this.ds_aoiDefectInfo.setColumn(nRow, "SEQUENCE", 11);
        			  }
        			}

        			this.fn_SEARCH_ReworkRoutingForAoiRepairPopup_CallBack2();

        			break;

        		case "getLayerListForAoiBbtDefectCase2":

        			if(this.ds_aoiDefectInfo.getRowCount() == 0)
        			{
        				this.ds_aoiDefectInfo.addColumn( "DEFECTCODEGROUPID"           , "string", 256 );
        				this.ds_aoiDefectInfo.addColumn( "DEFECTCODEGROUPNAME"         , "string", 256 );
        				this.ds_aoiDefectInfo.addColumn( "DEFECTCODE"				   , "string", 256 );
        				this.ds_aoiDefectInfo.addColumn( "DEFECTCODENAME"		       , "string", 256 );
        				this.ds_aoiDefectInfo.addColumn( "LAYER"				       , "string", 256 );
        				this.ds_aoiDefectInfo.addColumn( "PCSQTY"					   , "BIGDECIMAL", 256 );
        				this.ds_aoiDefectInfo.addColumn( "ANALYSISQTY"				   , "BIGDECIMAL", 256 );
        				this.ds_aoiDefectInfo.addColumn( "ANALYSISGOODQTY"            , "BIGDECIMAL", 256 );
        				this.ds_aoiDefectInfo.addColumn( "ANALYSISGOODPNLQTY"         , "BIGDECIMAL", 256 );
        				this.ds_aoiDefectInfo.addColumn( "FINALDEFECTQTY"             , "BIGDECIMAL", 256 );
        				this.ds_aoiDefectInfo.addColumn( "ISCHANGE"					  , "STRING", 256 );
        				this.ds_aoiDefectInfo.addColumn( "SEQUENCE"					  , "INT", 256 );
        			}

        			if (this.ds_LayerInfo.getRowCount() > 0)
        			{
        			  for(var i = 0; i < this.ds_LayerInfo.getRowCount(); i++)
        			  {
        				  var viewRows = this.ds_aoiDefectInfo.findRow("LAYER", this.ds_LayerInfo.getColumn(i, "LAYERID"));

        				  if(viewRows == -1)
        				  {
        					  var nRow = this.ds_aoiDefectInfo.addRow();

        					  this.ds_aoiDefectInfo.setColumn(nRow, "DEFECTCODEGROUPID", 	"009");
        					  this.ds_aoiDefectInfo.setColumn(nRow, "DEFECTCODE", 			"9019");
        					  this.ds_aoiDefectInfo.setColumn(nRow, "LAYER", 				this.ds_LayerInfo.getColumn(i, "LAYERID"));
        					  this.ds_aoiDefectInfo.setColumn(nRow, "PCSQTY", 				0);
        					  this.ds_aoiDefectInfo.setColumn(nRow, "SEQUENCE", 			11);
        				  }
        			  }
        			}

        			this.fn_SEARCH_ReworkRoutingForAoiRepairPopup_CallBack2();
        			break;
        		case  "selectDefectReasonConsumableLot" :
        			/*
        			this.pdv_ReasonLotList.form.grd_ReasonLotList.setBindDataset(this.ds_ReasonConsumableLot);
        			this.pdv_ReasonLotList.show();
        			this.pdv_ReasonLotList.trackPopup(this.g_event.screenx, this.g_event.screeny-70,  this.pdv_ReasonLotList.width, this.pdv_ReasonLotList.height, "fn_Callback_pdv_ReasonLotList");
        			*/
        			break;
        		case "selectReasonConsumableList" :
        			this.pdv_ReasonConsumableList.form.grd_ReasonConsumableList.setBindDataset(this.ds_ReasonConsumableList);
        			this.pdv_ReasonConsumableList.show();
        			this.pdv_ReasonConsumableList.trackPopup(this.nLeft, this.nTop,  this.pdv_ReasonConsumableList.width, this.pdv_ReasonConsumableList.height, "fn_Callback_pdv_ReasonConsumableList");
        			break;
        		case "selectDefectReasonProcesssegment" :
        			this.pdv_ReasonProcessSegment.form.grd_ReasonProcessSegment.setBindDataset(this.ds_ReasonProcessSegment);
        			if(this.nfn_isNull(this.ds_InspectionList.getColumn(this.g_event.row,"REASONCONSUMABLELOTID"))==false && this.ds_InspectionList.getColumn(this.g_event.row,"REASONCONSUMABLELOTID") != ""){
        				this.ds_ReasonProcessSegment.filter("REASONCONSUMABLELOTID == '" + this.ds_InspectionList.getColumn(this.g_event.row,"REASONCONSUMABLELOTID") + "'");
        			} else {
        				this.ds_ReasonProcessSegment.filter("");
        			}
        			this.pdv_ReasonProcessSegment.show();
        			this.pdv_ReasonProcessSegment.trackPopup(this.nLeft, this.nTop,  this.pdv_ReasonProcessSegment.width, this.pdv_ReasonProcessSegment.height, "fn_Callback_pdv_ReasonProcessSegment");
        			break;
        		case "getLotEquipmentByArea":
        			this.ds_cboequipment.clearData();
        			for(var i=0; i<this.ds_equipmentInfo.rowcount; i++){
        				var nRow = this.ds_cboequipment.addRow();
        				this.ds_cboequipment.setColumn(nRow,"code",this.ds_equipmentInfo.getColumn(i,"EQUIPMENTID"));
        				this.ds_cboequipment.setColumn(nRow,"desc",this.ds_equipmentInfo.getColumn(i,"EQUIPMENTNAME"));
        			}
        			break;
        		case "selectConsumableListByProcessWorkCompleteAndByProcess":

        			for(var i = 0; i < this.ds_consumable.getRowCount(); i++)
        			{
        				var consumableLotId = this.nfn_nvl(this.ds_consumable.getColumn(0, "CONSUMABLELOTID"), "");

        				var cRow = this.ds_consumableQty.findRow("CONSUMABLELOTID", consumableLotId);
        				var orginputQty = nexacro.toNumber(this.nfn_nvl(this.ds_consumable.getColumn(i, "ORGINPUTQTY"), "0"));

        				if(cRow > -1)
        				{
        					var consumableQty = nexacro.toNumber(this.nfn_nvl(this.ds_consumableQty.getColumn(cRow, "ORGINPUTQTY"), "0"));
        					var currRow = this.ds_consumableQty.rowcount == 1 ? 0 : this.ds_consumableQty.rowposition;

        					this.ds_consumableQty.setColumn(currRow, "ORGINPUTQTY", consumableQty + orginputQty);
        				}
        				else
        				{
        					var aRow = this.ds_consumableQty.addRow();
        					this.ds_consumableQty.setColumn(aRow, "ORGINPUTQTY", orginputQty);
        				}
        			}

        			this.ds_consumableDefectList.clearData();
        			this.ds_consumableDefectList.addRow();

        			break;
        		case "getConsumableLotByProcess":

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

        				this.ds_consumable.filter("");
        				this.ds_consumable.set_enableevent(true);

        				//dataset.getSum('컬럼명')
        				var key = this.nfn_nvl(this.ds_consumableListTemp.getColumn(0, "KEYCOLUMN"), "");
        				var value_Key   = "";
        				var value_Value = -1;

        				for(var i = 0; i < this.ds_inputQtyList.rowcount; i++)
        				{
        					value_Key   = this.nfn_nvl(this.ds_inputQtyList.getColumn(i, "KEYCOLUMN"), "");
        					value_Value = nexacro.toNumber(this.nfn_nvl(this.ds_inputQtyList.getColumn(i, "INPUTQTY"), "0"));

        					if(key == value_Key)
        					{

        						var nRow   = this.ds_standardRequirement.findRow("KEYCOLUMN", value_Key);
        						var reqQty = nexacro.toNumber(this.nfn_nvl(this.ds_standardRequirementInfo.getColumn(nRow, "REQUIREMENTQTY"), "0"));

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
        				return;
        			}

        			var sSvcID = "getConsumableAlternativeLotByProcess";
        			var sController = "/pcm01800/getConsumableAlternativeLotByProcess.do";
        			var sInDatasets = "INPUT=ds_param";
        			var sOutDatasets = "ds_alternativeList=output";
        			var sArgs = "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        			break;
        		case "getConsumableAlternativeLotByProcess":
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

        				//dataset.getSum('컬럼명')
        				var key = this.nfn_nvl(this.ds_alternativeList.getColumn(0, "KEYCOLUMN"), "");
        				var value_Key   = "";
        				var value_Value = -1;
        				for(var i = 0; i < this.ds_inputQtyList.rowcount; i++)
        				{
        					value_Key   = this.nfn_nvl(this.ds_inputQtyList.getColumn(i, "KEYCOLUMN"), "");
        					value_Value = this.nfn_nvl(this.ds_inputQtyList.getColumn(i, "INPUTQTY"), "");

        					if(key == value_Key)
        					{

        						var nRow   = this.ds_standardRequirementInfo.findRow("KEYCOLUMN", value_Key);
        						var reqQty = nexacro.toNumber(this.nfn_nvl(this.ds_standardRequirementInfo.getColumn(nRow, "REQUIREMENTQTY"), "0"));

        						if ((reqQty - value_Value) <= 0)
        						{
        							// {0} 자재는 이미 BOM 소요량만큼 투입되었습니다.
        							this.gfn_Message("ConsumableIsAlreadyInputEqualRequirement", [value_Key.split('|')[0]], "info", "ok");
        							return;
        						}

        						var vInputQty    = nexacro.toNumber(this.nfn_nvl(this.ds_alternativeList.getColumn(0, "INPUTQTY"), "0"));

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
        		case "getDurableDEFByBOR":
        			break;
        		case "selectDurableListByProcessWorkComplete":
        		trace(this.ds_durable.saveXML());
        			for(var i=0; i<this.ds_durable.rowcount; i++){
        				var nRow = this.ds_durableLotList.addRow();
        				this.ds_durableLotList.copyRow(nRow, this.ds_durable, i);
        				trace(this.ds_durableLotList.saveXML());
        			}
        			break;
        		default:
        			break;
        	}
        };


        /**************************************************************************
         * 4. 함수영역
         ***************************************************************************/

        this.initializeControls = function()
        {
        	this.div_work.form.div_search.form.edt_lotId.set_imemode("alpha");  // 부모창 Lot Id 영문모드로 변환

        	this.div_work.form.div_search.form.sta_isRework.set_visible(false);
        	this.div_work.form.div_search.form.sta_isRework.set_enable(false);
        	this.div_work.form.div_search.form.sta_isRCLot.set_visible(false);
        	this.div_work.form.div_search.form.sta_isRCLot.set_enable(false);

        	this.setProcessType(this.ProcessType.WorkCompletion);

        	this.pfsDetail_InitializeTabPageVisible();
        };

        //미사용 Tab 숨기기
        this.pfsDetail_InitializeTabPageVisible = function ()
        {
        	this.tpgAOIDefect.set_tabbuttonwidth(0);				//AOI 불량
        	this.tpgAOIHoleDefect.set_tabbuttonwidth(0);			//AOI Hole 불량
        	this.tpgBBTHOLEDefect.set_tabbuttonwidth(0);			//BBT 불량
        	this.tpgPostProcessEquipmentWip.set_tabbuttonwidth(0);	//후공정 설비재공
        };


        //공정 Type에 따라 Tab 보여주기
        this.pfsDetail_tabShown = function ()
        {
        	if(this.tab_aoi){
        		this.tpgAOIDefect.set_tabbuttonwidth(100);
        	} else {
        		this.tpgAOIDefect.set_tabbuttonwidth(0);
        	}

        	if(this.tab_aoiHole){
        		this.tpgAOIHoleDefect.set_tabbuttonwidth(150);
        	} else {
        		this.tpgAOIHoleDefect.set_tabbuttonwidth(0);
        	}

        	if(this.tab_bbt){
        		this.tpgBBTHOLEDefect.set_tabbuttonwidth(150);
        		var defectType = this.tab_bbt_visible; // BBT, HOLE
        		var txt = this.nfn_nvl(this.nfn_getDictionarynameUpper(defectType + "DEFECT"), "");
        		this.tpgBBTHOLEDefect.set_text(txt);
        	} else {
        		this.tpgBBTHOLEDefect.set_tabbuttonwidth(0);
        	}

        	if(this.tab_postProcess){
        		this.tpgPostProcessEquipmentWip.set_tabbuttonwidth(150);
        	} else {
        		this.tpgPostProcessEquipmentWip.set_tabbuttonwidth(0);
        	}
        };

        /*
         * Tab별 조회함수
         */
        this.pfsDetail_tabSearch = function ()
        {
        	this.g_pfsDetail_tabSearch = true;

        	this.fn_searchEquipment();	//설비 조회
        	this.fn_searchConsumable(); //자재 조회
        	this.fn_searchDurable(); 	//치공구 조회
        	this.fn_searchSelectDurable();

        	this.tpgComment.form.fn_search();
        	this.tpgProcessSpec.form.fn_search();
        	this.tpgMessage.form.fn_search();

        	this.GetDefectReasonConsumableLot();
        	this.fn_checkUOM();

        	if(this.tab_aoi){
        		this.tpgAOIDefect.form.fn_search();
        		// (21.06.18) -
        		var nLotId 	= this.ds_lotInfo.getColumn(0,"LOTID");
        		var nProdId = this.ds_lotInfo.getColumn(0,"PRODUCTDEFID");
        		var nRev 	= this.ds_lotInfo.getColumn(0,"PRODUCTDEFVERSION");
        		var nProcId	= this.ds_lotInfo.getColumn(0,"PROCESSSEGMENTID");


        		//trace(" [nLotId]===> : "+nLotId);
        		//trace(" [nProdId]===> : "+nProdId);
        		//trace(" [nRev]===> : "+nRev);

        		// 변수 넘겨 줍니다.
        		this.tpgAOIDefect.form.div_aoi.form.fn_search(nLotId,nProdId,nRev,nProcId);
        	}

        	if(this.tab_bbt){
        		this.tpgBBTHOLEDefect.form.fn_search();
        	}

        	if(this.tab_aoiHole){
        		this.tpgAOIHoleDefect.form.fn_search();
        	}


        	if(this.tab_postProcess){
        		this.tpgPostProcessEquipmentWip.form.fn_search();
        	}

        };

        this.checkLotProcessStateByStepType = function (_processType, _processState, _stepType)
        {
        	this.processType  = _processType;
        	this.processState = _processState;
        	this.stepType     = _stepType;

        	// Process State 다국어 정보 조회
        	this.ds_paramMain.clearData();
        	this.ds_paramMain.addRow();
        	this.ds_paramMain.setColumn(0, "CODECLASSID" , "WipProcessState");
        	this.ds_paramMain.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_paramMain.setColumn(0, "VERSION", "00001");

        	var sSvcID = "getCodeList";
        	var sController = "/pcm01700/getCodeList.do";
        	var sInDatasets = "INPUT=ds_paramMain";
        	var sOutDatasets = "ds_processStateDictionary=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


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
        };


        this.checkRCLot = function(ds_lotInfo)
        {
        	var isPrintLotCard   = this.nfn_nvl(ds_lotInfo.getColumn(0, "ISPRINTLOTCARD"), "");
        	var isPrintRcLotCard = this.nfn_nvl(ds_lotInfo.getColumn(0, "ISPRINTRCLOTCARD"), "");

        	if (isPrintLotCard == "N" && isPrintRcLotCard == "Y")
        	{
        		var lotId 			  	= this.nfn_nvl(ds_lotInfo.getColumn(0, "LOTID"), "");
        		var productDefId 	  	= this.nfn_nvl(ds_lotInfo.getColumn(0, "PRODUCTDEFID"), "");
        		var productDefVersion 	= this.nfn_nvl(ds_lotInfo.getColumn(0, "PRODUCTDEFVERSION"), "");
        		var productRevision 	= productDefId + productDefVersion;

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



        this.pfsDetail_getAOIDefectDataSource = function ()
        {
        	var tabObj;
        	if(this.tab_aoi == true && this.tab_bbt == false && this.tab_postProcess == false)
        	{
        		tabObj = this.tpgAOIDefect.form;
        	}
        	else if(this.tab_aoi == true && this.tab_bbt == false && this.tab_postProcess == true)
        	{
        		tabObj = this.tpgAOIDefect.form;
        	}
        	return tabObj;
        };

        this.pfsDetail_getBBTHOLEDefectDataSource = function ()
        {
        	var tabObj;

        	if(this.tab_aoi == false && this.tab_bbt == true && this.tab_postProcess == false)
        	{
        		tabObj = this.tpgBBTHOLEDefect.form.ds_bbtDefectList; //.filter("CHK=='1'")
        	}
        	else if(this.tab_aoi == false && this.tab_bbt == true && this.tab_postProcess == true)
        	{
        		tabObj = this.tpgBBTHOLEDefect.form.ds_bbtDefectList; //.filter("CHK=='1'")
        	}
        	return tabObj;
        };


        this.fn_totalSave = function ()
        {
        	var worker 			 = this.nfn_nvl(this.div_work.form.div_pfsInfo.form.ds_workInfo.getColumn(0, "WORKER"), "");
        	var lotId 			 = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "LOTID"), "");
        	var processPathId 	 = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PROCESSPATHID"), "");
        	var processSegmentId = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PROCESSSEGMENTID"), "");
        	var unit 			 = this.nfn_nvl(this.div_work.form.div_pfsInfo.form.ds_workInfo.getColumn(0, "UNIT"), "");
        	var goodQty 		 = nexacro.toNumber(this.nfn_nvl(this.div_work.form.div_pfsInfo.form.ds_workInfo.getColumn(0, "GOODQTY"), "0"));
        	var goodPnlQty 		 = nexacro.toNumber(this.nfn_nvl(this.div_work.form.div_pfsInfo.form.ds_workInfo.getColumn(0, "GOODPNLQTY"), "0"));
        	var defectQty        = nexacro.toNumber(this.nfn_nvl(this.div_work.form.div_pfsInfo.form.ds_workInfo.getColumn(0, "DEFECTQTY"), "0"));
        	var defectPnlQty     = nexacro.toNumber(this.nfn_nvl(this.div_work.form.div_pfsInfo.form.ds_workInfo.getColumn(0, "DEFECTPNLQTY"), "0"));
        	var printWeek        = this.nfn_nvl(this.div_work.form.div_pfsInfo.form.ds_workInfo.getColumn(0, "PRINTWEEK"), "");
        	var resourceId       = this.nfn_nvl(this.div_work.form.div_pfsInfo.form.ds_workInfo.getColumn(0, "RESOURCEID"), "");
        	var transitArea      = this.nfn_nvl(this.div_work.form.div_pfsInfo.form.ds_workInfo.getColumn(0, "TRANSITAREA"), "");
        	var comment          = this.nfn_nvl(this.div_work.form.div_pfsInfo.form.ds_workInfo.getColumn(0, "COMMENT"), "");
        	var equipmentId 	 = "";

        	/* 인계작업장 관련 로직 추가 */
        	var areaId = this.div_work.form.div_pfsInfo.form.cbo_transitArea.value;
        	var parentDs = this.div_work.form.div_pfsInfo.form.ds_transitAreaList;
        	var fRow   = parentDs.findRow("RESOURCEID", areaId);
        	var realAreaId = "";

        	if(fRow < 0){
        		realAreaId = areaId;
        	} else {
        		realAreaId = parentDs.getColumn(fRow, "AREAID");
        	}

        	transitArea = realAreaId;
        	/* 인계작업장 관련 로직 추가 */


        	for(var i = 0; i < this.ds_equipmentInfo.rowcount; i++)
        	{
        		if(this.ds_equipmentInfo.getColumn(i, "CHK")=="1"){
        			equipmentId = equipmentId + (i==0?"":",") +this.ds_equipmentInfo.getColumn(i, "EQUIPMENTID")  ;
        		}
        	}

        	this.ds_dataInfo.clearData();
        	this.ds_dataInfo.addRow();

        	this.ds_dataInfo.setColumn(0, "ENTERPRISEID"     , this.gf_getEnterpriseId());
        	this.ds_dataInfo.setColumn(0, "PLANTID"          , this.gf_getSiteType());
        	this.ds_dataInfo.setColumn(0, "WORKER"           , this.nfn_nvl(worker, ""));
        	this.ds_dataInfo.setColumn(0, "LOTID"            , this.nfn_nvl(lotId, ""));
        	this.ds_dataInfo.setColumn(0, "PROCESSPATHID"    , this.nfn_nvl(processPathId, ""));
        	this.ds_dataInfo.setColumn(0, "PROCESSSEGMENTID" , this.nfn_nvl(processSegmentId, ""));
        	this.ds_dataInfo.setColumn(0, "DEFECTUNIT"       , this.nfn_nvl(unit, ""));

        	this.ds_dataInfo.setColumn(0, "EQUIPMENTID"      , this.nfn_nvl(equipmentId, ""));
        //	this.ds_dataInfo.setColumn(0, "EQUIPMENTLIST"    , equipmentInfo );  // list
        	this.ds_dataInfo.setColumn(0, "GOODQTY"          , this.nfn_nvl(goodQty, ""));
        	this.ds_dataInfo.setColumn(0, "GOODPNLQTY"       , this.nfn_nvl(goodPnlQty, ""));
        	this.ds_dataInfo.setColumn(0, "DEFECTQTY"        , this.nfn_nvl(defectQty, ""));
        	this.ds_dataInfo.setColumn(0, "DEFECTPNLQTY"     , this.nfn_nvl(defectPnlQty, ""));

        	this.ds_dataInfo.setColumn(0, "PRINTWEEK"        , this.nfn_nvl(printWeek, ""));
        	this.ds_dataInfo.setColumn(0, "RESOURCEID"       , this.nfn_nvl(resourceId, ""));
        	this.ds_dataInfo.setColumn(0, "TRANSITAREA"      , this.nfn_nvl(transitArea, ""));
        	this.ds_dataInfo.setColumn(0, "COMMENT"          , this.nfn_nvl(comment, ""));
        // 	this.ds_dataInfo.setColumn(0, "DEFECTLIST"       , defectInfo ); // list
        // 	this.ds_dataInfo.setColumn(0, "CONSUMABLELIST"   , consumableInfo ); // list
        // 	this.ds_dataInfo.setColumn(0, "DURABLELIST"      , durableInfo); // list
        	this.ds_dataInfo.setColumn(0, "PROCESSSEGMENTTYPE"    , this.nfn_nvl(this._processSegmentType, ""));  //-->
        	this.ds_dataInfo.setColumn(0, "ISINSPECTIONPROCESS"   , this.nfn_nvl(this._isInspectionProcess, "")); //-->
        	this.ds_dataInfo.setColumn(0, "ISREPAIRPROCESS"       , this.nfn_nvl(this._isRepairProcess, "")); //-->
        // 	{ "AOIDEFECTLIST", aoiDefectInfo },          // list
        // 	{ "BBTHOLEDEFECTLIST", bbtHoleDefectInfo },  // list
        	this.ds_dataInfo.setColumn(0, "HASANALYSISTARGET"       , this.hasAnalysisTarget); //-->
        	this.ds_dataInfo.setColumn(0, "ISREWORKPUBLISH"       , this.isReworkPublish);  //-->
        	this.ds_dataInfo.setColumn(0, "SUBPROCESSDEFID"       , this.nfn_nvl(this.subProcessDefId, ""));  //-->
        	this.ds_dataInfo.setColumn(0, "SUBPROCESSDEFVERSION"       , this.nfn_nvl(this.subProcessDefVersion, "")); //-->
        	this.ds_dataInfo.setColumn(0, "REWORKRESOURCEID"       , this.nfn_nvl(this.reworkResourceId, "")); //-->
        	this.ds_dataInfo.setColumn(0, "REWORKAREAID"       , this.nfn_nvl(this.reworkAreaId, "")); //-->
        //	this.ds_dataInfo.setColumn(0, "REELCONSUMABLELIST"       , reelConsumableInfo); // list
        	this.ds_dataInfo.setColumn(0, "VERSION"          , "");
        	//trace("ds_consumable-->"+this.ds_consumable.saveXML());
        	trace("TRANSITAREA-->"+transitArea);
        	trace("RESOURCEID -->"+resourceId);
        	//trace("ds_dataInfo -->"+this.ds_dataInfo.saveXML());
        	//trace("ds_bbtHoleDefectInfo==================="+ this.ds_bbtHoleDefectInfo.saveXML());
        	trace("======================================================================================");

        	trace("======================================================================================");
        	var sSvcID 			= "saveTrackOutLot";
        	var sController 	= "/pcmWorkProcess/saveTrackOutLot.do";
        	var sInDatasets 	= "ds_dataInfo=ds_dataInfo ds_equipmentList=ds_equipmentInfo ds_defectList=ds_InspectionList ds_consumableList=ds_consumable ds_durableList=ds_durableLotList ds_aoiDefectList=ds_aoiDefectInfo ds_bbtholeDefectList=ds_bbtHoleDefectInfo";
        	var sOutDatasets 	= "ds_worker=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };



        this.fn_SEARCH_ReworkRoutingForAoiRepairPopup_CallBack2 = function ()
        {

        	// 2021-06-17 박성수 차장 요청
        	// BBT공정 BBT불량이 진짜 없는지 체크
        	if (this._processSegmentType == "BBTInspection")
        	{
        		if (this.ds_bbtHoleDefectInfo.getRowCount() < 1)
        		{
        			// BBT 불량이 등록되지 않았습니다. BBT 불량이 없는게 확실합니까?
        			var vCnf = this.gfn_confirm("NotInputBBTDefect", "information", "");
        			if(!vCnf){
        				if(this.tab_bbt){
        					this.div_work.form.tab_main.set_tabindex(7);
        				}
        				// BBT 불량을 등록하시기 바랍니다.
        				this.gfn_Message("InputBBTDefect", null, "warning", "ok");
        				return;
        			}
        		}
        	}

        	// 2021-06-21 박성수 차장 요청
        	// AOI HOLE공정 AOIHOLE불량이 진짜 없는지 체크
        	if (this._processSegmentType == "AOIHoleInspection")
        	{
        		if (this.ds_aoiDefectInfo.getRowCount() < 1)
        		{
        			// AOI Hole 불량이 등록되지 않았습니다. BBT 불량이 없는게 확실합니까?
        			var vCnf = this.gfn_confirm("NotInputAOIHoleDefect", "information", "");
        			if(!vCnf){
        				if(this.tab_bbt){
        					this.div_work.form.tab_main.set_tabindex(6);
        				}
        				// AOI Hole 불량을 등록하시기 바랍니다.
        				this.gfn_Message("InputAOIHoleDefect", null, "warning", "ok");
        				return;
        			}
        		}
        	}
        	this.fn_totalSave();
        };



        this.fn_SEARCH_ReworkRoutingForAoiRepairPopup_CallBack = function ()
        {
        	if (this.gf_getEnterpriseId() == this.getEnterPrise_InterFlex())
        	{
        		this.ds_aoiDefectInfo.filter("DEFECTCODEGROUPID == '005' && ANALYSISQTY > 0");
        		if (this.ds_aoiDefectInfo.getRowCount() > 0)
        			this.hasAnalysisTarget = true;
        		this.ds_aoiDefectInfo.filter("");
        	}

        	if (this._isInspectionProcess)
        	{
        		if (this._processSegmentType == "AOIInspection")
        		{
        			if (this.ds_aoiDefectInfo.getRowCount() < 1)
        			{
        				// AOI 불량이 등록되지 않았습니다. AOI 불량이 없는게 확실합니까?
        				var vCnf = this.gfn_confirm("NotInputAOIDefect", "information", "");

        				if(!vCnf)
        				{
        					if(this.tab_aoi){
        						this.div_work.form.tab_main.set_tabindex(5);
        					}

        					// AOI 불량을 등록하시기 바랍니다.
        					this.gfn_Message("InputAOIDefect", null, "warning", "ok");
        					return;
        				} else {
        					this.ds_layerParam.clearData();
        					this.ds_layerParam.addRow();
        					this.ds_layerParam.setColumn(0, "LOTID", 		this.div_work.form.div_search.form.edt_lotId.value);
        					this.ds_layerParam.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        					this.ds_layerParam.setColumn(0, "VERSION", 		"10001");

        					var sSvcID 			= "getLayerListForAoiBbtDefectCase1";
        					var sController 	= "/pcm01900/getLayerListForAoiBbtDefect.do";
        					var sInDatasets 	= "INPUT=ds_layerParam";
        					var sOutDatasets 	= "ds_LayerInfo=output";
        					var sArgs 			= "";
        					this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        				}
        			} else {
        				this.ds_layerParam.clearData();
        				this.ds_layerParam.addRow();
        				this.ds_layerParam.setColumn(0, "LOTID", 		this.div_work.form.div_search.form.edt_lotId.value);
        				this.ds_layerParam.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        				this.ds_layerParam.setColumn(0, "VERSION", 		"10001");

        				var sSvcID 			= "getLayerListForAoiBbtDefectCase2";
        				var sController 	= "/pcm01900/getLayerListForAoiBbtDefect.do";
        				var sInDatasets 	= "INPUT=ds_layerParam";
        				var sOutDatasets 	= "ds_LayerInfo=output";
        				var sArgs 			= "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        			}
        		} else {
        			this.fn_SEARCH_ReworkRoutingForAoiRepairPopup_CallBack2();
        		}
        	} else {
        		this.fn_SEARCH_ReworkRoutingForAoiRepairPopup_CallBack2();
        	}
        };

        // 저장 버튼을 클릭하면 호출한다.
        this.fn_save = function (obj, e)
        {
        	if (this.ds_lotInfo.getRowCount() < 1) {
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}
        	/*
        		ds_dataInfo=ds_dataInfo
        		ds_equipmentList=ds_equipmentInfo
        		ds_defectList=ds_InspectionList
        		ds_consumableList=ds_consumableInfo
        		ds_durableList=ds_durable
        		ds_aoiDefectList=ds_aoiDefectInfo
        		ds_bbtholeDefectList=ds_bbtHoleDefectInfo
        	*/
        	//메인 저장시
        	if(!this.onValidateContent()) return;

        	this.ds_aoiDefectInfo.clearData();
        	if(this.tab_aoi){
        		if(!this.tpgAOIDefect.form.getAOIDefectDataSource()) return;
        		this.ds_aoiDefectInfo.copyData(this.tpgAOIDefect.form.getAOIDefectDataSource());
        	}

        	if(this.tab_aoiHole){
        		if(!this.tpgAOIHoleDefect.form.getAOIDefectDataSource()) return;
        		this.ds_aoiDefectInfo.copyData(this.tpgAOIHoleDefect.form.getAOIDefectDataSource());
        	}

        	this.ds_bbtHoleDefectInfo.clearData();
        	if(this.tab_bbt){
        		if(!this.tpgBBTHOLEDefect.form.getBBTDefectDataSource()) return;
        		this.ds_bbtHoleDefectInfo.copyData(this.tpgBBTHOLEDefect.form.getBBTDefectDataSource());
        	}

        	this.ds_overQtyDurableLot.clearData();
        	this.ds_overCleanQtyDurableLot.clearData();

        	trace("====11==== : FN SAVE");
        	var mRow = -1;
        	var nRow = -1;
        	// 치공구가 금형인 경우 보증타수, 연마기준타수 체크
        	if (this.gf_getEnterpriseId()  == this.getEnterPrise_InterFlex())
        	{
        		for(var i = 0; i < this.ds_durable.getRowCount(); i++)
        		{
        			var totalUsedCount 	= nexacro.toNumber(this.nfn_nvl(this.ds_durable.getColumn(i , "TOTALUSEDCOUNT"), "0"));
        			var usingQty 		= nexacro.toNumber(this.nfn_nvl(this.ds_durable.getColumn(i , "USINGQTY"), "0"));
        			var usedLimit 		= nexacro.toNumber(this.nfn_nvl(this.ds_durable.getColumn(i , "USEDLIMIT"), "0"));
        			var cleanLimit 		= nexacro.toNumber(this.nfn_nvl(this.ds_durable.getColumn(i , "CLEANLIMIT"), "0"));

        			if (usingQty + totalUsedCount > usedLimit)
        			{
        				mRow = this.ds_overQtyDurableLot.addRow();
        				this.ds_overQtyDurableLot.setColumn(mRow, "DURABLELOTID", this.nfn_nvl(this.ds_durable.getColumn(i, "DURABLELOTID"), ""));
        			}

        			if (usingQty + totalUsedCount > cleanLimit)
        			{
        				nRow = this.ds_overCleanQtyDurableLot.addRow();
        				this.ds_overCleanQtyDurableLot.setColumn(nRow, "DURABLELOTID", this.nfn_nvl(this.ds_durable.getColumn(i, "DURABLELOTID"), ""));
        			}
        		}

        		if (this.ds_overQtyDurableLot.getRowCount() > 0)
        		{
        			var durableLotId = "";

        			for(var i = 0; i < this.ds_overQtyDurableLot.getRowCount(); i++)
        			{
        				durableLotId += this.ds_overQtyDurableLot.getColumn(i, "DURABLELOTID")  + ",";
        			}

        			if (durableLotId.length > 0)
        				durableLotId = durableLotId.substring(0, durableLotId.length - 1);

        			// 치공구의 사용 횟수가 보증타수를 초과합니다. Durable Lot Id = {0}
        			if(!this.gfn_Message("DurableUsingQtyLargerThanUsedLimit", [durableLotId], "conf", "yesno")){
        				return;
        			};
        		}

        		if (this.ds_overCleanQtyDurableLot.getRowCount() > 0)
        		{
        			var durableLotId = "";

        			for(var i = 0; i < this.ds_overCleanQtyDurableLot.getRowCount(); i++)
        			{
        				durableLotId += this.ds_overCleanQtyDurableLot.getColumn(i, "DURABLELOTID")  + ",";
        			}

        			if (durableLotId.length > 0)
        				durableLotId = durableLotId.substring(0, durableLotId.length - 1);

        			// 치공구의 사용 횟수가 연마기준타수를 초과합니다. Durable Lot Id = {0}
        			if(!this.gfn_Message("DurableUsingQtyLargerThanCleanLimit", [durableLotId], "conf", "yesno")){
        				return;
        			};
        		}
        	}

        trace("====12==== : FN SAVE");

        	this.isReworkPublish 		= this.tpgAOIDefect.form.IsReworkPublishChecked();
        	trace("isReworkPublish===" + this.isReworkPublish);
        	trace("_isRepairProcess===" + this._isRepairProcess);

        	var subProcessDefId 		= "";
        	var subProcessDefVersion 	= "";
        	var reworkResourceId 		= "";
        	var reworkAreaId 			= "";
        	var lotId					= this.nfn_nvl(this.ds_dt.getColumn(0,"LOTID"), "");
        	var processSegmentId 		= this.nfn_nvl(this.ds_dt.getColumn(0,"PROCESSSEGMENTID"), "");
        	if (this.tab_aoi == true && this.isReworkPublish)
        	{
        		var popupId = "SEARCH_ReworkRoutingForAoiRepairPopup";
        		var oArg = {};

        		oArg.arg_LotId = lotId;
        		oArg.arg_ProcessSegmentId = processSegmentId;
        		this.gfn_openPopup(popupId,"pcm::PCM01900P1.xfdl",oArg,"width=829,height=594");
        	} else {
        		this.fn_SEARCH_ReworkRoutingForAoiRepairPopup_CallBack();
        	}

        };

        // TODO : 화면에서 사용할 내부 함수 추가
        this.clearDetailInfo = function()
        {
        	//전역변수 초기화
        	this.processType  = -1;
        	this.processState = "";
        	this.stepType     = "";

        	this.g_LotId       = "";
        	this.g_PanelperQty = -1;
        	this.g_PnlQty      = -1;
        	this.g_PcsQty      = -1;

        	this.g_pfsDetail_tabSearch = false;
        	this._processSegmentType = "";

        	this._isInspectionProcess = false;
        	this._isRepairProcess = false;
        	this.isReworkPublish = false;

        	this.processDefType = "";
        	this.lastRework = "";
        	this.processDefId = "";
        	this.processDefVersion = "";

        	this.tab_aoi = false;
        	this.tab_bbt = false;
        	this.tab_postProcess = false;

        	this.tab_bbt_visible = "";

        	this.subProcessDefId = "";
        	this.subProcessDefVersion = "";
        	this.reworkResourceId = "";
        	this.reworkAreaId = "";

        	this.hasAnalysisTarget = false;

        	this.div_work.form.div_search.form.edt_innerRevisionText.set_value("");
        	this.div_work.form.div_search.form.sta_isRework.set_visible(false);
        	this.div_work.form.div_search.form.sta_isRework.set_enable(false);
        	this.div_work.form.div_search.form.sta_isRCLot.set_visible(false);
        	this.div_work.form.div_search.form.sta_isRCLot.set_enable(false);

        	//기본정보
        	this.ds_lotInfo.clearData();

        	//this.div_work.form.div_pfsInfo.form.reload();
        	this.div_work.form.div_pfsInfo.form.setControlsVisible();
        	this.div_work.form.div_pfsInfo.form.setEnable(false);
        	this.div_work.form.div_pfsInfo.form.edt_worker.set_value("");
        	this.div_work.form.div_pfsInfo.form.ds_workInfo.clearData();
        	this.div_work.form.div_pfsInfo.form.ds_workInfo.addRow();


        	this.tab_aoi = false;
        	this.tab_aoiHole = false;
        	this.tab_bbt = false;
        	this.tab_postProcess = false;

        	this.div_work.form.div_pfsInfo.form.ds_workInfo.setColumn(0, "WORKER", "");
        	this.div_work.form.div_pfsInfo.form.ds_workInfo.setColumn(0, "UNIT", "");
        	this.div_work.form.div_pfsInfo.form.ds_workInfo.setColumn(0, "GOODQTY", 0);
        	this.div_work.form.div_pfsInfo.form.ds_workInfo.setColumn(0, "GOODPNLQTY", 0);
        	this.div_work.form.div_pfsInfo.form.ds_workInfo.setColumn(0, "DEFECTQTY", 0);
        	this.div_work.form.div_pfsInfo.form.ds_workInfo.setColumn(0, "DEFECTPNLQTY", 0);
        	this.div_work.form.div_pfsInfo.form.ds_workInfo.setColumn(0, "COMMENT", "");
        	this.div_work.form.div_pfsInfo.form.setEnable(false);

        	//설비
        	this.ds_equipmentInfo.clearData();

        	//특기사항
        	this.tpgComment.form.ds_commentInfo.clearData();

        	//공정Spec
        	this.tpgProcessSpec.form.ds_processSpecInfo.clearData();

        	//자재
        	this.ds_consumable.clearData();
        	this.ds_standardRequirement.clearData();

        	//치공구
        	this.ds_durable.clearData();
        	this.ds_BORDurable.clearData();
        	this.ds_durableLotList.clearData();

        	//전달사항
        	this.tpgMessage.form.ds_messageInfo.clearData();

        	//불량
        	this.ds_InspectionList.clearData();

        	//AOI불량
        	this.tpgAOIDefect.form.ds_defectList.clearData();
        	this.tpgAOIDefect.form.ds_defectInfoData.clearData();
        	this.tpgAOIDefect.form.div_aoi.form.fn_initSearch();

        	this.tpgAOIDefect.form.chk_ReworkPublish.set_value(false)

        	//AOIHole불량
        	this.tpgAOIHoleDefect.form.ds_defectList.clearData();
        	this.tpgAOIHoleDefect.form.ds_defectInfoData.clearData();

        	//BBT불량
        	this.tpgBBTHOLEDefect.form.ds_bbtDefectList.clearData();
        	this.tpgBBTHOLEDefect.form.ds_defectInfoData.clearData();

        	//Tab Index 초기화
        	this.div_work.form.tab_main.set_tabindex(0);
        };


        /// <summary>
        /// 데이터를 저장 할 때 컨텐츠 영역의 유효성을 검사한다.
        /// </summary>
        this.onValidateContent = function()
        {
        	trace("====1==== : into onValidateContent");
        	this.ds_values.clearData();
        	this.ds_values.copyData(this.div_work.form.div_pfsInfo.form.getValues());

        	var vWorker = this.nfn_nvl(this.ds_values.getColumn(0, "WORKER"), "");
        	if (this.nfn_isNull(vWorker))
        	{
        		// 작업자는 필수 입력 항목입니다.
        		this.gfn_Message("WorkerIsRequired", null, "warning", "ok");
        		return false;
        	}

        	var vGoodqty = nexacro.toNumber(this.nfn_nvl(this.ds_values.getColumn(0, "GOODQTY"), "0"));
        	if (vGoodqty < 0)
        	{
        		// 양품수량은 0 보다 커야 합니다.
        		this.gfn_Message("GoodQtyLargerThanZero", null, "warning", "ok");
        		return false;
        	}

        	var vPrintWeek = this.nfn_nvl(this.ds_values.getColumn(0, "PRINTWEEK"), "");
        	if(this.div_work.form.div_pfsInfo.form.edt_printWeek.visible){
        		if (typeof(this.ds_values.getColumn(0, "PRINTWEEK") != "undefined") && vPrintWeek == "")
        		{
        			// 인쇄주차를 입력하시기 바랍니다.
        			this.gfn_Message("PrintWeekIsRequired", null, "warning", "ok");
        			return false;
        		}
        	}
        	/*
        	if(this.div_work.form.div_pfsInfo.form.cbo_transitArea.visible)
         	{
        	var pathType         = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PATHTYPE"), "");
        		if (this.pathType == "End" && this.productDefTypeId == "SubAssembly"){

        		} else {
        			if (this.div_work.form.div_pfsInfo.form.cbo_transitArea.codecolumn == "AREAID")
        			{
        				var vTransitArea = this.nfn_nvl(this.ds_values.getColumn(0, "TRANSITAREA"), "");
        				if (this.nfn_isNull(vTransitArea))
        				{
        					// 인계 작업장을 선택하시기 바랍니다.
        					this.gfn_Message("SelectTransitArea", null, "warning", "ok");
        					return false;
        				}
        			} else if (this.div_work.form.div_pfsInfo.form.cbo_transitArea.codecolumn == "RESOURCEID") {
        				var vResourceId = this.nfn_nvl(this.ds_values.getColumn(0, "RESOURCEID"), "");
        				if (this.nfn_isNull(vResourceId))
        				{
        					// 인계 자원을 선택하시기 바랍니다.
        					this.gfn_Message("SelectTransitResource", null, "warning", "ok");
        					return false;
        				}
        			}
        		}
        	}
        	*/
        	trace("====2==== : 마스터 정보 검증완료!");
        	//var eqCnt = this.ds_equipmentInfo.getCaseCount( "CHK == '1'" );
        	var eqCnt = this.ds_equipmentInfo.rowcount;
           if (eqCnt < 1)
        	{
        		// 작업 완료 할 설비를 선택하시기 바랍니다.
        		this.gfn_Message("SelectWorkCompletionEquipment", null, "warning", "ok");
        		return false;
        	}

        	var unit        = this.nfn_nvl(this.ds_values.getColumn(0, "UNIT"), "");
        	var panelPerQty = nexacro.toNumber(this.nfn_nvl(this.ds_values.getColumn(0, "PANELPERQTY"), "0"));
        	var goodQty     = nexacro.toNumber(this.nfn_nvl(this.ds_values.getColumn(0, "GOODQTY"), "0"));

        	if (unit == "PNL" && panelPerQty > 0 && goodQty % panelPerQty != 0)
        	{
        		// 단위가 PCS가 아닌 경우 PNL 수량은 정수로 나와야 합니다.
        		this.gfn_Message("PanelQtyHasNotInteger", null, "warning", "ok");
        		return false;
        	}

        	trace("====3==== : 설비 정보 검증완료!");
        	///일단 자재가 등록 되었는지 먼저 체크 간단하게 2019.09.24 배선용
        	trace("this.ds_standardRequirement.getRowCount()==" + this.ds_standardRequirement.getRowCount());
        	trace("this.ds_consumable.getRowCount()==" + this.ds_consumable.getRowCount());

        	if(this.ds_standardRequirement.getRowCount() > 0 && this.ds_consumable.getRowCount() == 0)
        	{
        		// BOM 기준 사용 자재가 모두 등록되지 않았습니다.
        		this.gfn_Message("DoNotInsertMaterialByBOM", null, "warning", "ok");
        		return false;
        	}

        	trace("====4==== : 자재 정보 검증완료!");


        	var vKeyColumn = "";
        	var nRow = -1;
        	/*
        	this.ds_consumable.clearData();

        	for(var i = 0; i<this.ds_consumableLotDistinctList.getRowCount(); i++)
        	{
        		vKeyColumn = this.ds_consumableLotDistinctList.getColumn(i, "KEYCOLUMN");

        		this.ds_standardRequirement.filter("KEYCOLUMN=='" + vKeyColumn + "'");

        		nRow = this.ds_consumable.addRow();
        		this.ds_consumable.setColumn(nRow, "KEYCOLUMN", vKeyColumn);
        		this.ds_consumable.setColumn(nRow, "INPUTQTY", this.ds_standardRequirement.getSum("INPUTQTY"));
        		this.ds_consumable.setColumn(nRow, "REALINPUTQTY", this.ds_standardRequirement.getSum("ORGINPUTQTY"));
        		this.ds_consumable.setColumn(nRow, "DEFECTQTY", this.ds_standardRequirement.getSum("DEFECTQTY"));

        		this.ds_standardRequirement.filter("");
        	}
        	this.ds_standardRequirement.filter("");
        	*/

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
        		var vKeyColumnAlt   = this.nfn_nvl(this.ds_standardRequirement.getColumn(i , "KEYCOLUMN_ALT"), "");
        		var vRequirementQty = nexacro.toNumber(this.nfn_nvl(this.ds_standardRequirement.getColumn(i , "REQUIREMENTQTY"), "0"));
        		var nRow 			= this.ds_consumable.findRow("KEYCOLUMN", vKeyColumn);
        		if(nRow == -1) {
        			//대체자재있는경우 2중 체크
        			nRow 			= this.ds_consumable.findRow("KEYCOLUMN", vKeyColumnAlt);
        			if(nRow == -1) {
        				isUsedConsumable = false;
        			}
        		}
        		var vRealInputQty = nexacro.toNumber(this.nfn_nvl(this.ds_consumable.getCaseSum("KEYCOLUMN=='"+vKeyColumn+"'","ORGINPUTQTY")));

        		//대체자재가 있는경우 2중체크
        		if(vRealInputQty==0){
        			vRealInputQty = nexacro.toNumber(this.nfn_nvl(this.ds_consumable.getCaseSum("KEYCOLUMN=='"+vKeyColumnAlt+"'","ORGINPUTQTY")));
        		}

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




        	/* 2021-05-14 초과 수량은 허용하도록 수정, 최창선 차장 요청 */
        	/*
        	if (!isRealInputQtyLagerThanRequirementQty)
        	{
        		// {0} 자재의 자재 투입량이 BOM 기준 소요량 보다 많습니다. 자재불량을 등록하시기 바랍니다.
        		this.gfn_Message("InputQtyLagerThanRequirementQty", consumId, "warning", "ok");
        		return false;
        	}
        	*/

        	/* 2021-05-14 자재수량이 달라도 허용하도록 수정, 최창선 차장 요청 */
        	/*
        	if (!isUseQtyMatch)
        	{
        		// 사용 자재 수량은 BOM 기준 소요량과 같아야 합니다.
        		this.gfn_Message("UsingMaterialQtyLessThanBomRequirementQty", null, "warning", "ok");
        		return false;
        	}

        	if (!isInputQtyLessThanQty)
        	{
        		// 투입수량은 자재 수량을 초과할 수 없습니다.
        		this.gfn_Message("CanNotInputQtyLagerThanQty", null, "warning", "ok");
        		return false;
        	}*/

        	//필수 자재 체크
        	if (!this.checkDurable())
        	{
        		this.gfn_Message("CheckRequireDurable", null, "warning", "ok");
        		return false;
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

        	trace("====7==== : 불량 정보 검증전!");
        	//불량정보 검증
        	var validateData = this.fn_validDefect();
        	trace("====8==== : 불량 정보 검증완료!");
        	if(!validateData)  return false;
        	//return false;
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
        	for(var i = 0; i < this.ds_equipmentInfo.getRowCount(); i++)
        	{
        		vTrackoutTime = this.nfn_nvl(this.ds_equipmentInfo.getColumn(i , "TRACKOUTTIME"), "");
        		if (this.nfn_isNull(vTrackoutTime)) list.push(vTrackoutTime);
        	}

        	if (list.length < 1)
        		return false;

        	return true;
        };


        this.checkDurable = function()
        {
        	var iCnt    = 0;
        	var nRowCnt = 0;
        	// findRow
        	for(var i = 0; i < this.ds_BORDurable.getRowCount(); i++)
        	{
        		nRowCnt = this.ds_durable.getCaseCount( "DURABLEDEFID == '" + this.ds_BORDurable.getColumn(i, "DURABLEDEFID") + "'" );
        		if(nRowCnt > 1) nRowCnt = 1;  // distinct
        		iCnt += nRowCnt;
        	}
        	if (iCnt < this.ds_BORDurable.getRowCount()){
        		return false;
        	}

        	return true;
        };


        this.fn_productRevision_CallBack = function ()
        {
        	var isHold    = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "ISHOLD"), "");
        	var isLocking = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "ISLOCKING"), "");

        	if (isHold == "Y"){
        		// 보류 상태의 Lot 입니다.
        		this.gfn_Message("LotIsHold", [this.div_work.form.div_search.form.edt_lotId.value], "warning", "ok");

        		this.clearDetailInfo();

        		this.div_work.form.div_search.form.edt_lotId.set_value("");
        		this.div_work.form.div_search.form.edt_lotId.setFocus();

        		return;
        	}

        	if (isLocking == "Y")
        	{
        		// Locking 상태의 Lot 입니다.
        		this.gfn_Message("LotIsLocking", this.div_work.form.div_search.form.edt_lotId.value, "warning", "ok");

        		this.clearDetailInfo();

        		this.div_work.form.div_search.form.edt_lotId.set_value("");
        		this.div_work.form.div_search.form.edt_lotId.setFocus();

        		return;
        	}

        	//InTransit 상태 체크
        	var vlotState = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "LOTSTATE"), "");
        	if (vlotState == "InTransit"){
        		// 물류창고 입/출고 처리 대상입니다
        		this.gfn_Message("CheckOSLogisticStatus", null, "warning", "ok");
        		return;
        	} else if (vlotState == "OverSeaInTransit") {
        		// 해외 물류 이동중입니다.
        		this.gfn_Message("CheckOverSeasLogistic", null, "info", "ok");
        	}

        	this.g_LotId       = this.nfn_nvl(this.div_work.form.div_search.form.edt_lotId.value, "");
        	this.g_PanelperQty = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PANELPERQTY"), "0"));
        	this.g_PnlQty      = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PNLQTY"), "0"));
        	this.g_PcsQty      = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PCSQTY"), "0"));
        	this.div_work.form.div_pfsInfo.form.setControlsInfo(this.g_areaId, this.g_LotId, this.ds_lotInfo, this.queryVersion, this.lastRework);
        };


        this.fn_setControlsInfo_CallBack = function ()
        {
        	this.div_work.form.div_lotInfo.set_enable(true);
        	this.div_work.form.div_pfsInfo.set_enable(true);

        	var productDefVersion = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PRODUCTDEFVERSION"), "");
        	var isRcLot = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "ISRCLOT"), "");

        	this.div_work.form.div_search.form.edt_innerRevisionText.set_value(productDefVersion);
        	if (this.processDefType == "Rework"){
        		this.div_work.form.div_search.form.sta_isRework.set_visible(true);
        		this.div_work.form.div_search.form.sta_isRework.set_enable(true);
        	} else {
        		this.div_work.form.div_search.form.sta_isRework.set_visible(false);
        		this.div_work.form.div_search.form.sta_isRework.set_enable(false);
        	}
        	if (isRcLot == "Y"){
        		this.div_work.form.div_search.form.sta_isRCLot.set_visible(true);
        		this.div_work.form.div_search.form.sta_isRCLot.set_enable(true);
        	} else {
        		this.div_work.form.div_search.form.sta_isRCLot.set_visible(false);
        		this.div_work.form.div_search.form.sta_isRCLot.set_enable(false);
        	}

        	this._processSegmentType = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PROCESSSEGMENTTYPE"), "");

        	// AOI Repair 공정인 경우 (인터플렉스 : 회로재생, 영풍전자 : VRS 검사) AOI 불량 탭 보여줌
        	if (this.gf_getEnterpriseId() == this.getEnterPrise_InterFlex())
        	{
        		var processSegmentId = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PROCESSSEGMENTID"), "");

        		if (this.processDefType == "Rework")
        		{
        			this.ds_checkParam.clearData();
        			this.ds_checkParam.addRow();
        			this.ds_checkParam.setColumn(0, "LOTID", 		this.nfn_nvl(this.div_work.form.div_search.form.edt_lotId.value, ""));
        			this.ds_checkParam.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        			this.ds_checkParam.setColumn(0, "ISREWORK", 	"Y");
        			this.ds_checkParam.setColumn(0, "VERSION" , 	"10001");


        			var sSvcID 			= "selectDefectMapDataByWorkComplete";
        			var sController 	= "/pcm01900/selectDefectMapDataByWorkComplete.do";
        			var sInDatasets 	= "INPUT=ds_checkParam";
        			var sOutDatasets 	= "ds_checkList=output";
        			var sArgs 			= "";
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        		} else {
        			this.fn_selectDefectMapDataByWorkComplete_CallBack();
        		}
        	} else {
        		this.fn_selectDefectMapDataByWorkComplete_CallBack();
        	}
        };

        this.fn_selectDefectMapDataByWorkComplete_CallBack = function ()
        {
        	if (!this._isRepairProcess)
        	{
        		// AOI/BBT/HOLE 검사 공정인 경우 AOI/BBT/HOLE 불량 입력 탭 보여줌
        		if (this._processSegmentType == "AOIInspection"){
        			this._isInspectionProcess = true;
        			this.tab_aoi = true;
        			this._isRepairProcess = false;
        		} else if (this._processSegmentType == "BBTInspection") {
        			this._isInspectionProcess = true;
        			this.tab_bbt = true;
        			this.tab_bbt_visible = "BBT";
        		} else if (this._processSegmentType == "AOIHoleInspection") {
        			this._isInspectionProcess = true;
        			this.tab_aoiHole = true;
        			this._isRepairProcess = false;
        		}
        	}

        	this.div_work.form.div_pfsInfo.form.setUnitOfMaterialControlEnable();

        	this.ds_lotWorkerParam.clearData();
        	this.ds_lotWorkerParam.addRow();
        	this.ds_lotWorkerParam.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId()  );
        	this.ds_lotWorkerParam.setColumn(0, "PLANTID", this.gf_getSiteType() );
        	this.ds_lotWorkerParam.setColumn(0, "LOTID", this.nfn_nvl(this.div_work.form.div_search.form.edt_lotId.value, ""));
        	this.ds_lotWorkerParam.setColumn(0, "VERSION", "10001");

        	var sSvcID 			= "getLotWorkerByTrackOut";
        	var sController 	= "/pcm01900/getLotWorkerByTrackOut.do";
        	var sInDatasets 	= "INPUT=ds_lotWorkerParam";
        	var sOutDatasets 	= "ds_lotWorkerInfo=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        };

        this.fn_StayReasonCode_CallBack = function ()
        {
        	if (this.checkRCLot(this.ds_lotInfo))
        	{
        		this.fn_productRevision_CallBack();
        	}
        };


        this.fn_RESOURCE_CallBack = function ()
        {
        	//this.button.isBusy = true;

        	//buttons.ForEach(button => button.IsBusy = true);
        	//pnlContent.ShowWaitArea();

        	// 재작업 여부 확인
        	var lotId = this.nfn_nvl(this.div_work.form.div_search.form.edt_lotId.value, "");

        	this.ds_paramMain.clearData();
        	this.ds_paramMain.addRow();
        	this.ds_paramMain.setColumn(0, "ENTERPRISEID", 		this.gf_getEnterpriseId());
        	this.ds_paramMain.setColumn(0, "PLANTID", 			this.gf_getSiteType());
        	this.ds_paramMain.setColumn(0, "AREAID", 			this.g_areaId);
        	this.ds_paramMain.setColumn(0, "LOTID", 			lotId);
        	this.ds_paramMain.setColumn(0, "PROCESSSTATE","		Run");
        	this.ds_paramMain.setColumn(0, "LANGUAGETYPE", 		this.gf_getLanguageType());
        	this.ds_paramMain.setColumn(0, "VERSION", 			"10001");

        	var sSvcID = "getProcessDefTypeByProcess";
        	var sController = "/pcm01700/getProcessDefTypeByProcess.do";
        	var sInDatasets = "INPUT=ds_paramMain";
        	var sOutDatasets = "ds_processDefTypeInfo=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };



        this.fn_getCodeList_CallBack = function ()
        {
        	var processStateByCurrentStep = this.getProcessStateByProcessType(this.getProcessType());
        	var processState = this.processState;
        	var stepList = this.stepType.split(',');

        	var state = "";

        	// 유효하지 않은 Process Type 인지 체크
        	if (this.nfn_isNull(processStateByCurrentStep))
        		return false;

        	// 현재 Process State가 Step Type에 있는지 체크
        	if (stepList.length < 1 || stepList.indexOf(processStateByCurrentStep) == -1)
        	{
        		// Lot 자원의 Step Type 에서 현재 진행상태가 유효하지 않습니다. Step Type : {0}, Process State : {1}
        		//var stepNm = this.fn_getStepName(this.stepType);
        		//this.gfn_Message("InvalidProcessStateInStepType", [stepNm, processState], "info", "ok");
        		this.fn_getStepName(this.stepType, processState);
        		return false;
        	}

        	if (processState == this.Constants.WaitForReceive)
        	{
        		if (stepList.indexOf(this.Constants.WaitForReceive) == -1)
        		{
        			if (stepList.indexOf(this.Constants.Wait) == -1)
        			{
        				return true;
        			} else {
        				var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkStart'");
        				state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        				//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkStart'").FirstOrDefault()["CODENAME"]);

        				// 작업시작 처리가 진행되지 않았습니다. 작업 시작 처리를 먼저 진행하시기 바랍니다.
        				this.gfn_Message("NotArrivalCurrentState", [state, this.nfn_getDictionarynameUpper("MENU_PG-SG-0190")], "info", "ok");
        				return false;
        			}
        		} else {
        			var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'Receive'");
        			state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        			//state = Format.GetString(processStateDictionary.Select("CODEID = 'Receive'").FirstOrDefault()["CODENAME"]);

        			// 인수 처리가 진행되지 않았습니다. 인수 등록 처리를 먼저 진행하시기 바랍니다.
        			this.gfn_Message("NotArrivalCurrentState", [state, this.nfn_getDictionarynameUpper("MENU_PG-SG-0160")], "info", "ok");
        			return false;
        		}
        	}
        	else if (processState == this.Constants.Wait)
        	{
        		if (stepList.indexOf(this.Constants.WaitForReceive) > -1)
        		{
        			if (stepList.indexOf(this.Constants.Wait) == -1)
        			{
        				return true;
        			} else {
        				var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkStart'");
        				state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        				//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkStart'").FirstOrDefault()["CODENAME"]);

        				// 작업시작 처리가 진행되지 않았습니다. 작업 시작 처리를 먼저 진행하시기 바랍니다.
        				this.gfn_Message("NotArrivalCurrentState", [state, this.nfn_getDictionarynameUpper("MENU_PG-SG-0190")], "info", "ok");
        				return false;
        			}
        		}
        		else
        		{
        			// Lot 자원의 Step Type 에서 현재 진행상태가 유효하지 않습니다. Step Type : {0}, Process State : {1}
        			//this.gfn_Message("InvalidProcessStateInStepType", [this.stepType, processState], "info", "ok");
        			this.fn_getStepName(this.stepType, processState);
        			return false;
        		}
        	}
        	else if (processState == this.Constants.Run)
        	{
        		if (stepList.indexOf(this.Constants.Wait) > -1)
        		{
        			return true;
        		} else {
        			// Lot 자원의 Step Type 에서 현재 진행상태가 유효하지 않습니다. Step Type : {0}, Process State : {1}
        			//this.gfn_Message("InvalidProcessStateInStepType", [this.stepType, processState], "info", "ok");
        			this.fn_getStepName(this.stepType, processState);
        			return false;
        		}
        	}
        	else if (processState == this.Constants.WaitForSend)
        	{
        		var nRow = this.ds_processStateDictionary.findRowExpr("CODEID == 'WorkEnd'");
        		state = this.ds_processStateDictionary.getColumn(nRow, "CODENAME");
        		//state = Format.GetString(processStateDictionary.Select("CODEID = 'WorkEnd'").FirstOrDefault()["CODENAME"]);

        		// 작업완료 처리된 Lot 입니다. 작업 완료 처리를 진행할 수 없습니다.
        		this.gfn_Message("AlreadyPassCurrentState", [state, this.nfn_getDictionarynameUpper("MENU_PG-SG-0220")], "info", "ok");
        		return false;
        	}
        	else
        	{
        		// 유효하지 않은 진행상태 입니다. Process State : {0}
        		this.gfn_Message("InvalidProcessState", [processState], "info", "ok");
        		return false;
        	}

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
        	this.div_work.form.div_search.form.edt_area.set_value(this.div_work.form.div_search.form.edt_area.value);

        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", 		this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", 			this.gf_getSiteType());
        	sArgs += this.gfn_setParam("AREATYPE", 			"Area");
        	sArgs += this.gfn_setParam("LANGUAGETYPE", 		this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("USERID", 			this.gf_getUserId());
        	this.fn_openPop("AREA_ID","P00148", sArgs); //작업장 조회
        };


        this.div_work_div_search_edt_lotId_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		if(!this.nfn_isNull(obj.value)){
        			obj.set_value(obj.value.trim());
        		}
        		this.clearDetailInfo();
        		var v_area  = this.nfn_nvl(this.div_work.form.div_search.form.edt_area.value , "");
        		var v_lotId = this.nfn_nvl(this.div_work.form.div_search.form.edt_lotId.value, "");

        		if (v_area.length < 1 || v_lotId.length < 1)
        		{
        			// 작업장, LOT No.는 필수 입력 항목입니다.
        			this.gfn_Message("AreaLotIdIsRequired", null, "warning", "ok");
        			return;
        		}

        		this.ds_paramMain.clearData();
        		this.ds_paramMain.addRow();
        		this.ds_paramMain.setColumn(0, "LOTID", v_lotId);
        		this.ds_paramMain.setColumn(0, "VERSION", "10001");

        		var sSvcID = "selectAreaResourceByLot";
        		var sController = "/pcm01700/selectAreaResourceByLot.do";
        		var sInDatasets = "INPUT=ds_paramMain";
        		var sOutDatasets = "ds_dt=output";
        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        };

        this.div_work_div_search_edt_lotId_oneditclick = function(obj,e)
        {
        	obj.setSelect();
        };

        this.div_header_btn_init_onclick = function(obj,e)
        {
        	this.div_work.form.div_search.form.edt_area.set_value("");
        	this.div_work.form.div_search.form.edt_lotId.set_value("");

        	this.clearDetailInfo();
        };

        this.div_work_div_search_edt_area_onkillfocus = function(obj,e)
        {
        	if(!this.nfn_isNull(obj.value)){
        		obj.set_value(obj.value.trim());
        	}
        };

        this.div_work_div_search_edt_lotId_onkillfocus = function(obj,e)
        {
        	if(!this.nfn_isNull(obj.value)){
        		obj.set_value(obj.value.trim());
        	}
        };

        this.edt_equipmentId_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		var nRow = this.ds_equipmentInfo.findRow( "EQUIPMENTID", this.nfn_nvl(obj.value, "") );
        		this.ds_equipmentInfo.setColumn(nRow, "CHK", "1");

        		obj.set_value("");
        	}
        };


        this.btnAddRow_ds_InspectionList_onclick = function(obj,e)
        {
        	if(this.ds_lotInfo.rowcount == 0)
        	{
        		this.gfn_Message("NotSeletedLot", "", "warning", "ok");
        		return;
        	}

        	var lotId		= this.ds_lotInfo.getColumn(0, "LOTID");
        	var nRow 		= this.ds_InspectionList.addRow();
        	this.ds_InspectionList.setColumn(nRow, "LOTID", lotId);
        };

        this.fn_deleteDefect = function(obj,e)
        {
        	this.ds_InspectionList.deleteRow(this.ds_InspectionList.rowposition);

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
        		//this.GetDefectReasonConsumableLot();
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
        	var lotID 		= this.ds_lotInfo.getColumn(mRow, "LOTID");
        	var defectID 	= this.ds_InspectionList.getColumn(nRow,"SEGMENT_DEFECTCODE");
        	var qcSegmentID = this.ds_InspectionList.getColumn(nRow,"QCSEGMENTID");
        	var language 	= this.gf_getLanguageType();
        	var processSegmentId = this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PROCESSSEGMENTID"), "");

        	var oArg = {};
        	oArg.arg_type 			= "DA";
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

        	this.ds_temp.setColumn(0, "LOTID", this.nfn_nvl(this.div_work.form.div_search.form.edt_lotId.value, ""));
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
        	var fRow = this.ds_lotInfo.findRow("LOTID", lotId);

        	this.ds_InspectionList.set_enableevent(false);
        	var pnlPerQty 	= nexacro.toNumber(this.ds_lotInfo.getColumn(fRow, "PANELPERQTY"));
        	//var pcsQty 		= nexacro.toNumber(this.ds_lotInfo.getColumn(fRow, "QTY"));
        	var pnlQty		= nexacro.ceil(pcsQty / pnlPerQty);
        	var defectRate 	= 0;
        	var qty 		= (pnlPerQty * pnlQty);

         	this.ds_InspectionList.setColumn(this.ds_InspectionList.rowposition, "PNLQTY", pnlQty);
         	this.ds_InspectionList.setColumn(this.ds_InspectionList.rowposition, "DEFECTRATE", (qty/pcsQty) * 100);
         	this.ds_InspectionList.set_enableevent(true);
         	var total = nexacro.toNumber(this.ds_InspectionList.getSum("QTY"));
        	var totalPnl = nexacro.toNumber(this.ds_InspectionList.getSum("PNLQTY"));

         	this.div_work.form.div_pfsInfo.form.ds_workInfo.setColumn(0, "DEFECTQTY"   , total);
        	this.div_work.form.div_pfsInfo.form.ds_workInfo.setColumn(0, "DEFECTPNLQTY", totalPnl);
        	this.div_work.form.div_pfsInfo.form.setQty(total);
        };


        /*
         *	불량 검사 그리드에서 수량(PNL) 변경 시
         */
        this.mfn_defectChangePnlQty = function (pnlQty)
        {
        	this.ds_InspectionList.set_enableevent(false);
        	var lotId = this.ds_lotInfo.getColumn(0, "LOTID");//this.ds_InspectionList.getColumn(this.ds_InspectionList.rowposition, "LOTID");
        	var fRow = this.ds_lotInfo.findRow("LOTID", lotId);

        	var pnlPerQty 	= nexacro.toNumber(this.ds_lotInfo.getColumn(fRow, "PANELPERQTY"));
        	var pcsQty 		= nexacro.toNumber(this.ds_lotInfo.getColumn(fRow, "PCSQTY"));
        	var defectRate 	= 0;
        	var qty 		= (pnlPerQty * pnlQty);

         	this.ds_InspectionList.setColumn(this.ds_InspectionList.rowposition, "QTY", qty);
         	this.ds_InspectionList.setColumn(this.ds_InspectionList.rowposition, "DEFECTRATE", (qty/pcsQty) * 100);
         	this.ds_InspectionList.set_enableevent(true);
         	var total = nexacro.toNumber(this.ds_InspectionList.getSum("QTY"));
        	var totalPnl = nexacro.toNumber(this.ds_InspectionList.getSum("PNLQTY"));

        	this.div_work.form.div_pfsInfo.form.ds_workInfo.setColumn(0, "DEFECTQTY"   , total);
        	this.div_work.form.div_pfsInfo.form.ds_workInfo.setColumn(0, "DEFECTPNLQTY", totalPnl);
        	this.div_work.form.div_pfsInfo.form.setQty(total);
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

        this.ds_durable_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "CHK" && obj.getColumn(e.row, "CHK") == "1")
        	{
        		obj.enableevent(false);
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
        		obj.enableevent(true);
        	}
        };

        this.edt_durableLotIdStart_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13 || e.keycode == 9)
        	{
        		this.fn_searchSelectDurable(obj.value);
        	}
        };
        this.ds_consumable_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "INPUTQTY")
        	{
        		obj.set_enableevent(false);
        		var stockQty    = nexacro.toNumber(this.nfn_nvl(obj.getColumn(e.row, "STOCKQTY"), "0"));
        		var avaliableQty	= nexacro.toNumber(this.nfn_nvl(obj.getColumn(e.row, "AVAILABLEQTY"), "0"));	//가용수량
        		var inputQty    = e.newvalue;
        		var defectQty   = nexacro.toNumber(this.nfn_nvl(obj.getColumn(e.row, "DEFECTQTY"), "0"));
        		var lotUsingQty = nexacro.toNumber(this.nfn_nvl(obj.getColumn(e.row, "LOTUSINGQTY"), "0"));
        		var currLotQty	= nexacro.toNumber(this.nfn_nvl(obj.getColumn(e.row, "CURRENTLOTQTY"), "0")); //현재 Lot에 투입된 자재 수량
        		var lastQty		= avaliableQty + currLotQty;

        		if (inputQty > lastQty)
        		{
        			// 투입수량은 가용수량(재고수량 - Lot 사용수량)을 초과할 수 없습니다. 가용수량 = {0}
        			this.gfn_Message("InputQtyGreaterThanAvailableQty", [Eco.number.getMaskFormatString(lastQty, "#,##0.#####")], "warning", "ok");
        			obj.setColumn(e.row, "INPUTQTY", lastQty);
        			obj.set_enableevent(true);
        			return;
        		}

        		obj.setColumn(e.row, "ORGINPUTQTY", inputQty - defectQty);
        		obj.set_enableevent(true);
        	}
        };

        this.ds_consumableList_onrowposchanged = function(obj,e)
        {
        	this.ds_consumable_rowposition = e.newrow;
        };

        this.grd_consumableComplete_onlbuttondown = function(obj,e)
        {
        	if(e.row <0) return;

        	if (e.col==10)
        	{
        		this.mfn_OpenConsumableDefectPopup(e.row);
        	}
        };

        this.mfn_OpenConsumableDefectPopup = function (row)
        {
        	var nRow = row;

        	var consumableLotId  = this.nfn_nvl(this.ds_consumable.getColumn(nRow, "CONSUMABLELOTID"), "");
        	var stockQty 		 = nexacro.toNumber(this.nfn_nvl(this.ds_consumable.getColumn(nRow, "STOCKQTY"), "0"));
        	var availableQty     = nexacro.toNumber(this.nfn_nvl(this.ds_consumable.getColumn(nRow, "AVAILABLEQTY"), "0"));
        	var inputQty 		 = nexacro.toNumber(this.nfn_nvl(this.ds_consumable.getColumn(nRow, "INPUTQTY"), "0"));
        	var originalInputQty = nexacro.toNumber(this.nfn_nvl(this.ds_consumable.getColumn(nRow, "ORGINPUTQTY"), "0"));
        	var defectQty 		 = nexacro.toNumber(this.nfn_nvl(this.ds_consumable.getColumn(nRow, "DEFECTQTY"), "0"));

        	var popupId = "SEARCH_CONSUMABLEDEFECTPROCESS";
        	var oArg = {};

        	oArg.arg_consumableLotId         = consumableLotId;
        	oArg.arg_availableQty    	     = availableQty;
        	oArg.arg_ds_consumableDefectList = this.ds_consumableDefectList;
        	trace("arg_consumableLotId===" + oArg.arg_consumableLotId);
        	trace("arg_availableQty===" + oArg.arg_availableQty);
        	trace("arg_ds_consumableDefectList===" + oArg.arg_ds_consumableDefectList);

        	this.gfn_openPopup(popupId,"pcm::PCM01700P6.xfdl",oArg,"width=556,height=200");
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
        	this.ds_equipmentParam.setColumn(0, "LOTID", 				this.nfn_nvl(this.div_work.form.div_search.form.edt_lotId.value, ""));
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
        	this.ds_standardRequirementParam.setColumn(0, "LOTID", 			this.nfn_nvl(this.div_work.form.div_search.form.edt_lotId.value, ""));
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
        	this.ds_durableParam.setColumn(0, "LOTID", 			this.nfn_nvl(this.div_work.form.div_search.form.edt_lotId.value, ""));
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
        	this.ds_durableParam.setColumn(0, "LOTID", this.div_work.form.div_search.form.edt_lotId.value);
        	this.ds_durableParam.setColumn(0, "MATERIALTYPE", "Durable");
        	this.ds_durableParam.setColumn(0, "VERSION", "10002");


        	var sSvcID = "selectDurableListByProcessWorkComplete";
        	var sController = "/pcm01900/selectDurableListByProcessWorkComplete.do";
        	var sInDatasets = "INPUT=ds_durableParam";
        	var sOutDatasets = "ds_durable=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        //불량탭 검증함수
        this.fn_validDefect = function()
        {
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

        			if(this.nfn_isNull(defectCode)){
        				// 불량코드를 선택하여 주십시오.
        				this.gfn_Message("NoDefectCode", "", "warning", "ok");
        				return false;
        			}

        			if(qty<1 || pnlQty<1){
        			// 불량수량은 0이상이어야 합니다.
        				this.gfn_Message("DefectQtyValidation", "", "warning", "ok");
        				return false;
        			}
        		}
        	}
        	return true;
        }

        //불량탭 불량코드 Keydown Event
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

        this.grd_durableComplete_oncellclick = function(obj,e)
        {
        	obj.updateToDataset();
        };

        this.edt_consumableLotIdStart_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13 || e.keycode == 9)
        	{
        		if (!this.checkAlreadyInputLot(obj.value, "CONSUMABLELOTID"))
        		{
        			this.obj.set_value("");
        			return;
        		}

        		this.ds_param.clearData();
        		this.ds_param.addRow();
        		this.ds_param.setColumn(0, "ENTERPRISEID", 		this.gf_getEnterpriseId());
        		this.ds_param.setColumn(0, "PLANTID", 			this.gf_getSiteType());
        		this.ds_param.setColumn(0, "LOTID", 			this.nfn_nvl(this.div_work.form.div_search.form.edt_lotId.value, ""));
        		this.ds_param.setColumn(0, "CONSUMABLELOTID", 	obj.value);
        		this.ds_param.setColumn(0, "VERSION", 			"10001");

        		obj.set_value("");

        		var sSvcID 			= "getConsumableLotByProcess";
        		var sController 	= "/pcm01800/getConsumableLotByProcess.do";
        		var sInDatasets 	= "INPUT=ds_param";
        		var sOutDatasets 	= "ds_consumableListTemp=output";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        };

        this.checkAlreadyInputLot = function(lotId, fieldName)
        {
        	var resultRow = this.ds_consumableList.findRow(fieldName, lotId);
        	if (resultRow > -1)
        	{
        		// 이미 등록된 Lot Id 입니다. Lot Id = {0}
        		this.gfn_Message("AlreadyInputLot", [lotId], "warning", "ok");
        		this.ds_consumableList.set_rowposition(resultRow);
        		this.grd_consumableComplete.setFocus();
        		return false;
        	}
        	return true;
        };

        this.fn_checkUOM = function()
        {
        	var val = this.div_work.form.div_pfsInfo.form.cbo_unitOfMaterial.value;
        	if(val=="PNL"){
        		this.tpgDefect.form.grdInspectionList.setCellProperty("Body",4,"edittype","mask");
        		this.tpgDefect.form.grdInspectionList.setCellProperty("Body",5,"edittype","none");
        	}else{
        		this.tpgDefect.form.grdInspectionList.setCellProperty("Body",4,"edittype","none");
        		this.tpgDefect.form.grdInspectionList.setCellProperty("Body",5,"edittype","mask");
        	}
        }

        this.fn_print = function(obj, e)
        {
        	var lotId 			= this.nfn_nvl(this.div_work.form.div_search.form.edt_lotId.value, "");
        	var workTypeName	= lotId+"|"+this.nfn_nvl(this.nfn_getDictionarynameUpper("REWORK"), "재작업");
        	var languageType 	= this.gf_getLanguageType();
        	var title 			= this.nfn_nvl(this.nfn_getDictionarynameUpper("LOTCARDPRINT"),"LOT Card 출력");

        	var reworkFieId = "[" + lotId + "][" + languageType + "][" +  lotId + "|" + workTypeName+  "]";

        	trace("reworkFieId=== " + reworkFieId);
        	var oArg = {
        		sRptPath   : "/pcm/",
        		sRptName   : "PCM02900R.mrd",
        		strField   :  reworkFieId,
        		bModalless : false
        	};

        	var sOption = "titletext="+title+",modeless=false";
        	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);

        };

        this.fn_getStepName = function(step, processState)
        {
        	var sRow 		= this.ds_step.findRowExpr("DESCRIPTION == '"+this.ds_lotInfo.getColumn(0, "STEPTYPE")+"'");
        	var stepName 	= this.ds_step.getColumn(sRow, "NAME");
        	this.gfn_Message("InvalidProcessStateInStepType", [stepName, this.ds_lotInfo.getColumn(0, "PROCESSSTATE")], "info", "ok");
        }
        this.div_work_tab_main_tpgDefect_grdInspectionList_ondropdown = function(obj,e)
        {
        	var consumLotId = this.ds_InspectionList.getColumn(this.ds_InspectionList.rowposition, "SPLITCONSUMABLEDEFIDVERSION");
        	this.ds_ReasonConsumableLot.filter("SPLITCONSUMABLEDEFIDVERSION == '" + consumLotId + "'")
        };

        this.div_work_tab_main_tpgDefect_grdInspectionList_oncloseup = function(obj,e)
        {
        	this.ds_ReasonConsumableLot.filter(""); //필터 초기화
        };

        this.div_header_btn_customReset_onclick = function(obj,e)
        {
        	this.div_work.form.div_search.form.edt_area.set_value("");
        	this.div_work.form.div_search.form.edt_lotId.set_value("");
        	this.g_areaId = "";		// 작업장 id
        	this.clearDetailInfo();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_customReset.addEventHandler("onclick",this.div_header_btn_customReset_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.div_search.form.edt_lotId.addEventHandler("onkeydown",this.div_work_div_search_edt_lotId_onkeydown,this);
            this.div_work.form.div_search.form.edt_lotId.addEventHandler("oneditclick",this.div_work_div_search_edt_lotId_oneditclick,this);
            this.div_work.form.div_search.form.edt_lotId.addEventHandler("onkillfocus",this.div_work_div_search_edt_lotId_onkillfocus,this);
            this.div_work.form.div_search.form.btn_area.addEventHandler("onclick",this.div_work_div_search_btn_area_onclick,this);
            this.div_work.form.div_search.form.edt_area.addEventHandler("onkeydown",this.div_work_div_search_edt_area_onkeydown,this);
            this.div_work.form.div_search.form.edt_area.addEventHandler("onkillfocus",this.div_work_div_search_edt_area_onkillfocus,this);
            this.div_work.form.div_lotInfo.form.edt_15.addEventHandler("onchanged",this.div_work_div_lotInfo_edt_15_onchanged,this);
            this.div_work.form.tab_main.tpgConsumableComplete.form.edt_consumableLotIdStart.addEventHandler("onkeydown",this.edt_consumableLotIdStart_onkeydown,this);
            this.div_work.form.tab_main.tpgConsumableComplete.form.grd_consumableComplete.addEventHandler("onlbuttondown",this.grd_consumableComplete_onlbuttondown,this);
            this.div_work.form.tab_main.tpgDurableComplete.form.btn_delRow.addEventHandler("onclick",this.btn_delRow_onclick,this);
            this.div_work.form.tab_main.tpgDurableComplete.form.grd_durableComplete.addEventHandler("oncellclick",this.grd_durableComplete_oncellclick,this);
            this.div_work.form.tab_main.tpgDefect.form.grdInspectionList.addEventHandler("onexpandup",this.grdInspectionList_onexpandup,this);
            this.div_work.form.tab_main.tpgDefect.form.grdInspectionList.addEventHandler("onkeydown",this.div_work_tab_main_tpgDefect_grdInspectionList_onkeydown,this);
            this.div_work.form.tab_main.tpgDefect.form.grdInspectionList.addEventHandler("ondropdown",this.div_work_tab_main_tpgDefect_grdInspectionList_ondropdown,this);
            this.div_work.form.tab_main.tpgDefect.form.grdInspectionList.addEventHandler("oncloseup",this.div_work_tab_main_tpgDefect_grdInspectionList_oncloseup,this);
            this.div_work.form.tab_main.tpgDefect.form.btn_customdelRow.addEventHandler("onclick",this.fn_deleteDefect,this);
            this.div_work.form.tab_main.tpgDefect.form.btnAddRow_ds_InspectionList.addEventHandler("onclick",this.btnAddRow_ds_InspectionList_onclick,this);
            this.pdv_ReasonProcessSegment.form.grd_ReasonProcessSegment.addEventHandler("oncelldblclick",this.pdv_ReasonProcessSegment_grd_ReasonProcessSegment_oncelldblclick,this);
            this.pdv_ReasonConsumableList.form.grd_ReasonConsumableList.addEventHandler("oncelldblclick",this.pdv_ReasonConsumableList_grd_ReasonConsumableList_oncelldblclick,this);
            this.pdv_ReasonLotList.form.grd_ReasonLotList.addEventHandler("oncelldblclick",this.pdv_ReasonLotList_grd_ReasonLotList_oncelldblclick,this);
            this.ds_consumableLotList.addEventHandler("onrowposchanged",this.ds_consumableList_onrowposchanged,this);
            this.ds_consumableLotList.addEventHandler("oncolumnchanged",this.ds_consumableList_oncolumnchanged,this);
            this.ds_consumableList.addEventHandler("onrowposchanged",this.ds_consumableList_onrowposchanged,this);
            this.ds_consumableList.addEventHandler("oncolumnchanged",this.ds_consumableList_oncolumnchanged,this);
            this.ds_equipmentList.addEventHandler("onrowposchanged",this.ds_equipmentInfo_onrowposchanged,this);
            this.ds_equipmentList.addEventHandler("oncolumnchanged",this.ds_equipmentInfo_oncolumnchanged,this);
            this.ds_aoiDefectInfo.addEventHandler("onrowposchanged",this.ds_defectList_onrowposchanged,this);
            this.ds_aoiDefectInfo.addEventHandler("oncolumnchanged",this.ds_defectList_oncolumnchanged,this);
            this.ds_bbtHoleDefectInfo.addEventHandler("onrowposchanged",this.ds_bbtDefectList_onrowposchanged,this);
            this.ds_bbtHoleDefectInfo.addEventHandler("oncolumnchanged",this.ds_bbtDefectList_oncolumnchanged,this);
            this.ds_equipmentInfo.addEventHandler("onrowposchanged",this.ds_equipmentInfo_onrowposchanged,this);
            this.ds_equipmentInfo.addEventHandler("oncolumnchanged",this.ds_equipmentInfo_oncolumnchanged,this);
            this.ds_equipmentInfoSave.addEventHandler("onrowposchanged",this.ds_equipmentInfo_onrowposchanged,this);
            this.ds_equipmentInfoSave.addEventHandler("oncolumnchanged",this.ds_equipmentInfo_oncolumnchanged,this);
            this.ds_InspectionList.addEventHandler("oncolumnchanged",this.ds_InspectionList_oncolumnchanged,this);
            this.ds_durable.addEventHandler("oncolumnchanged",this.ds_durable_oncolumnchanged,this);
            this.ds_consumable.addEventHandler("onrowposchanged",this.ds_consumableList_onrowposchanged,this);
            this.ds_consumable.addEventHandler("oncolumnchanged",this.ds_consumable_oncolumnchanged,this);
        };
        this.loadIncludeScript("PCM01900M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
