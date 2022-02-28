(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM07200M");
            this.set_titletext("최종 인계 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_split", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISPARENT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PARENTLOT\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"HIDDEN_LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_message", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"입력공정\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"메시지유형\" type=\"STRING\" size=\"256\"/><Column id=\"등록자\" type=\"STRING\" size=\"256\"/><Column id=\"등록일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comment", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ISCURRENTPROCESS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_operationSpec", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LSL\" type=\"STRING\" size=\"256\"/><Column id=\"SL\" type=\"STRING\" size=\"256\"/><Column id=\"USL\" type=\"STRING\" size=\"256\"/><Column id=\"ISCURRENTPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTPATHSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTRCLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SELFSHIPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFTAKEINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISBEFOREROLLCUTTING\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PCSARY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILEQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("ds_work", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GOODQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UOM\" type=\"STRING\" size=\"256\"/><Column id=\"REWORK\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processDefTypeInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"입력공정\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"메시지유형\" type=\"STRING\" size=\"256\"/><Column id=\"등록자\" type=\"STRING\" size=\"256\"/><Column id=\"등록일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"입력공정\">RTR UV-LASER</Col><Col id=\"작업장\">RTR UV_B2F</Col><Col id=\"메시지유형\">Comment</Col><Col id=\"등록자\">빌트원</Col><Col id=\"공정수순\">10</Col><Col id=\"공정명\">RTR UV-LASER</Col><Col id=\"등록일\">20200118151539</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uom", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PARENTLOT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONUSER\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_UNIT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_equipmentInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECIPEID\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_transitArea", this);
            obj._setContents("<ColumnInfo><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEAREANAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_InspectionList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILESIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILEEXT\" type=\"STRING\" size=\"256\"/><Column id=\"FILEPATH\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGERESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISUPLOAD\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"IMGBUTTONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_file", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_EXT\" type=\"STRING\" size=\"256\"/><Column id=\"OC_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID\" type=\"STRING\" size=\"256\"/><Column id=\"SVR_SAVE_COURS\" type=\"STRING\" size=\"256\"/><Column id=\"DRM_APY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DNLD_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"KEEP_START_DATEC\" type=\"STRING\" size=\"256\"/><Column id=\"KEEP_END_DATEC\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_LOGIN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESC\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_SAVE_COURS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_NcrList", this);
            obj._setContents("<ColumnInfo><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"NGCONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"NGCONDITIONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTYORRATE\" type=\"STRING\" size=\"256\"/><Column id=\"QTYORRATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"NCRSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"FROMRATE\" type=\"STRING\" size=\"256\"/><Column id=\"TORATE\" type=\"STRING\" size=\"256\"/><Column id=\"NGQUANTITY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bodySend", this);
            obj._setContents("<ColumnInfo><Column id=\"INSPECTOR\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSITAREA\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_fileCombo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"OC_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_ID\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotSum", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_splitG", this);
            obj._setContents("<ColumnInfo><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_xout", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"X_OUT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CARD\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GOODQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_xout_h", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTOR\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTSEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PCSARY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GOODQTY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_body", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKER\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GOODPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTLIST\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISBATCH\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_xout_chk", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"X_OUT_GOODQTY\" type=\"STRING\" size=\"256\"/><Column id=\"X_OUT_DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SPN_QTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_work_copy", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GOODQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UOM\" type=\"STRING\" size=\"256\"/><Column id=\"REWORK\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_InspectionListLast", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILESIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILEEXT\" type=\"STRING\" size=\"256\"/><Column id=\"FILEPATH\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGERESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISUPLOAD\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"IMGBUTTONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_NcrListTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"NGCONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"NGCONDITIONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTYORRATE\" type=\"STRING\" size=\"256\"/><Column id=\"QTYORRATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"NCRSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"FROMRATE\" type=\"STRING\" size=\"256\"/><Column id=\"TORATE\" type=\"STRING\" size=\"256\"/><Column id=\"NGQUANTITY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emailList", this);
            obj._setContents("<ColumnInfo><Column id=\"USERGROUPID\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MBPH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USERGROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTINFO\" type=\"STRING\" size=\"256\"/><Column id=\"ISSENDEMAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uomTmp", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotCard", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("최종 작업 시작");
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

            obj = new Div("divSearch","0","-1",null,"42","0",null,null,null,null,null,this.div_work.form);
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

            obj = new Button("btn_area",null,"10","22","20","label01:30",null,null,null,null,null,this.div_work.form.divSearch.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_area","60","10",null,"20","btn_area:0",null,null,null,null,null,this.div_work.form.divSearch.form);
            obj.set_taborder("2");
            obj.set_autoselect("true");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","label01:-30","10","18.55%","20",null,null,null,null,null,null,this.div_work.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_imemode("alpha");
            obj.set_autoselect("true");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","54","0",null,"20","1162",null,null,null,null,null,this.div_work.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_visible("false");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Static("label00_00","51.43%","10","83","20",null,null,null,null,null,null,this.div_work.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("인계작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("TRANSITAREA");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo_transitArea","label00_00:5.83%","10","165","20",null,null,null,null,null,null,this.div_work.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_codecolumn("RESOURCEID");
            obj.set_innerdataset("ds_transitArea");
            obj.set_datacolumn("RESOURCENAME");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Tab("tab","0",null,null,"334","0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab);
            obj.set_text("Lot 분할");
            obj.set_tooltiptext("LOTSPLIT");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_split",null,null,"29","24","5","262",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","120","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("분할 대상");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_tooltiptext("TARGETSPLIT");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00","115","9","3.50%","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("UOM");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_uom","169","9","121","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_uom");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_00","300","9","5.33%","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("분할 수량");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SPLITQTY");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Spin("spn_qty","394","9","100","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_min("0");
            obj.set_max("10000000");
            obj.set_value("0");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_split","500","9","34","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_black");
            obj.set_text("분할");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SPLIT");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_lotSplit","0","39",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_split");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"3\" text=\"품목코드\" tooltiptext=\"ITEMID\"/><Cell col=\"4\" text=\"Rev.\" tooltiptext=\"ITEMVERSION\"/><Cell col=\"5\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"6\" text=\"단위\" tooltiptext=\"UNIT\"/><Cell col=\"7\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell col=\"8\" text=\"수량\" tooltiptext=\"QTY\"/><Cell col=\"9\" text=\"HIDDEN_LOTID\" tooltiptext=\"HIDDEN_LOTID\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:UNIT\"/><Cell col=\"7\" text=\"bind:PANELQTY\" textAlign=\"right\" displaytype=\"number\" edittype=\"normal\"/><Cell col=\"8\" text=\"bind:QTY\" textAlign=\"right\" displaytype=\"number\" edittype=\"normal\"/><Cell col=\"9\" text=\"bind:HIDDEN_LOTID\" textAlign=\"left\"/></Band><Band id=\"summary\"><Cell colspan=\"7\" text=\"합계\"/><Cell col=\"7\" expr=\"dataset.getSum(&quot;PANELQTY&quot;) \" displaytype=\"mask\" maskeditformat=\"#,##0.###\"/><Cell col=\"8\" expr=\"dataset.getSum(&quot;QTY&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0.###\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("msk_ParentLotQty","652","9","140","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_textAlign("right");
            obj.set_enable("false");
            obj.set_format("#,###,##0");
            obj.set_visible("false");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_00_00","570","9","103","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("모 LOT 수량");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ParentLotQty");
            obj.set_visible("false");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("불량등록");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Div("divWork","0","0",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_equipment","49","6",null,null,"888","177",null,null,null,null,this.div_work.form.tab.Tabpage2.form.divWork.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_equipmentInfo");
            obj.set_cssclass("grd_sub");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"150\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"설비ID\" tooltiptext=\"EQUIPMENTID\"/><Cell col=\"3\" text=\"설비명\" tooltiptext=\"EQUIPMENTNAME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:EQUIPMENTID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:EQUIPMENTNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.form.divWork.addChild(obj.name, obj);

            obj = new Static("title1_00","0","0","38","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.divWork.form);
            obj.set_taborder("1");
            obj.set_text("불량");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage2.form.divWork.addChild(obj.name, obj);

            obj = new Grid("grdInspectionList","0","34",null,null,"360","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form.divWork.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_InspectionList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"Lot No.\"/><Cell col=\"1\" text=\"불량 코드\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"불량코드 명\"/><Cell col=\"3\" text=\"품질공정\" tooltiptext=\"QCSEGMENT\"/><Cell col=\"4\" text=\"수량(PCS)\" cssclass=\"cell_point\"/><Cell col=\"5\" text=\"수량(PNL)\" cssclass=\"cell_point\"/><Cell col=\"6\" text=\"불량율\"/><Cell col=\"7\" text=\"사진등록\" tooltiptext=\"ADDIMAGE\"/><Cell col=\"8\" text=\"원인품목\" tooltiptext=\"REASONCONSUMABLEDEFID\"/><Cell col=\"9\" text=\"원인 LOTID\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell col=\"10\" text=\"원인 공정\" tooltiptext=\"REASONPROCESSSEGMENTID\"/><Cell col=\"11\" text=\"원인 작업장\" tooltiptext=\"REASONAREAID\"/></Band><Band id=\"body\"><Cell text=\"bind:LOTID\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SEGMENT_DEFECTCODE\" textAlign=\"left\" expandshow=\"show\" edittype=\"normal\" editautoselect=\"true\" editinputtype=\"number\"/><Cell col=\"2\" text=\"bind:SEGMENT_DEFECTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:QCSEGMENTNAME\"/><Cell col=\"4\" text=\"bind:QTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0\" maskeditautoselect=\"true\"/><Cell col=\"5\" text=\"bind:PNLQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0.00\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:DEFECTRATE\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0.00\"/><Cell col=\"7\" text=\"expr:dataset.parent.nfn_getDictionaryname(&apos;ADDIMAGE&apos;,true)\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"8\" text=\"bind:CONSUMABLEDEFNAME\" expandshow=\"show\"/><Cell col=\"9\" text=\"bind:REASONCONSUMABLELOTID\" combodataset=\"ds_ReasonConsumableLot\" combocodecol=\"CONSUMABLELOTID\" combodatacol=\"CONSUMABLELOTID\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"10\" text=\"bind:REASONPROCESSSEGMENTNAME\" expandshow=\"show\"/><Cell col=\"11\" text=\"bind:REASONAREANAME\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" maskeditformat=\"#,##0\" displaytype=\"mask\" expr=\"expr:dataset.getSum(&quot;QTY&quot;) \"/><Cell col=\"5\" maskeditformat=\"#,##0.00\" expr=\"expr:dataset.getSum(&quot;PNLQTY&quot;) \"/><Cell col=\"6\" expandchar=\"%\" expandsize=\"24\" maskeditformat=\"#,##0.00\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;DEFECTRATE&quot;)\" maskedittype=\"number\" maskeditpostfixtext=\" %\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.form.divWork.addChild(obj.name, obj);

            obj = new Button("btnAddRow_ds_InspectionList",null,"6","26","24","384",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.divWork.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.form.tab.Tabpage2.form.divWork.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_InspectionList",null,"6","26","24","358",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.divWork.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab.Tabpage2.form.divWork.addChild(obj.name, obj);

            obj = new Static("title1",null,"0","101","34","247",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.divWork.form);
            obj.set_taborder("5");
            obj.set_text("NCR 발행기준");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage2.form.divWork.addChild(obj.name, obj);

            obj = new Grid("grdNcrList",null,"34","350",null,"0","157",null,null,null,null,this.div_work.form.tab.Tabpage2.form.divWork.form);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_NcrList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"85\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"판정등급\" tooltiptext=\"DECISIONDEGREE\"/><Cell col=\"2\" text=\"조치등급\" tooltiptext=\"QCGRADE\"/><Cell col=\"3\" text=\"NG조건\" tooltiptext=\"NGCONDITION\"/><Cell col=\"4\" text=\"수량/불량율 구분\" tooltiptext=\"QTYORRATE\"/><Cell col=\"5\" text=\"범위\" cssclass=\"cell_end\" tooltiptext=\"RANGE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DECISIONDEGREENAME\"/><Cell col=\"2\" text=\"bind:QCGRADE\"/><Cell col=\"3\" text=\"bind:NGCONDITIONNAME\"/><Cell col=\"4\" text=\"bind:QTYORRATENAME\"/><Cell col=\"5\" text=\"bind:NCRSPEC\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.form.divWork.addChild(obj.name, obj);

            obj = new Combo("cbo_Image",null,null,"137","20","213","135",null,null,null,null,this.div_work.form.tab.Tabpage2.form.divWork.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_fileCombo");
            obj.set_codecolumn("ATCH_FILE_GUID");
            obj.set_datacolumn("OC_FILE_NM");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.div_work.form.tab.Tabpage2.form.divWork.addChild(obj.name, obj);

            obj = new ImageViewer("imageViewer",null,null,"350","132","0","1",null,null,null,null,this.div_work.form.tab.Tabpage2.form.divWork.form);
            obj.set_taborder("8");
            obj.set_cssclass("img_photo");
            obj.set_stretch("fixaspectratio");
            this.div_work.form.tab.Tabpage2.form.divWork.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab);
            obj.set_text("전달사항");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Div("divMessage","0","0",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("pcm::PCM06900T1.xfdl");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.div_work.form.tab);
            obj.set_text("특이사항");
            obj.set_tooltiptext("COMMENT");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","66","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_tooltiptext("COMMENT");
            this.div_work.form.tab.Tabpage4.addChild(obj.name, obj);

            obj = new Grid("grd_comment","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage4.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_comment");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"500\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"3\" text=\"특이사항\" tooltiptext=\"COMMENT\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage4.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.div_work.form.tab);
            obj.set_text("공정SPEC");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","71","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage5.form);
            obj.set_taborder("0");
            obj.set_text("공정SPEC");
            obj.set_cssclass("sta_WF_subTitle2");
            this.div_work.form.tab.Tabpage5.addChild(obj.name, obj);

            obj = new Grid("grd_operationSpec","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage5.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_operationSpec");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"3\" text=\"항목\" tooltiptext=\"SPECITEM\"/><Cell col=\"4\" text=\"하한값\" tooltiptext=\"LSL\"/><Cell col=\"5\" text=\"중간값\" tooltiptext=\"SL\"/><Cell col=\"6\" text=\"상한값\" tooltiptext=\"USL\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:SPECCLASSNAME\"/><Cell col=\"4\" text=\"bind:LSL\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:SL\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:USL\" displaytype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage5.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.div_work.form.tab);
            obj.set_text("X-OUT");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_xout","0","38",null,null,"507","0",null,null,null,null,this.div_work.form.tab.Tabpage6.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_xout");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"266\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"57\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"주차\"/><Cell col=\"3\" text=\"X-OUT\" tooltiptext=\"X-OUT\"/><Cell col=\"4\" text=\"CARD\"/><Cell col=\"5\" text=\"양품\"/><Cell col=\"6\" text=\"불량\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:WEEK\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:X_OUT\" displaytype=\"number\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"4\" text=\"bind:CARD\" displaytype=\"number\" edittype=\"normal\" editautoselect=\"true\"/><Cell col=\"5\" text=\"bind:GOODQTY\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:DEFECTQTY\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell text=\"합계\" tooltiptext=\"SUM\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;X_OUT&quot;)\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;CARD&quot;)\" displaytype=\"number\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;GOODQTY&quot;)\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;DEFECTQTY&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage6.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","71","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage6.form);
            obj.set_taborder("1");
            obj.set_text("X-OUT");
            obj.set_cssclass("sta_WF_subTitle2");
            this.div_work.form.tab.Tabpage6.addChild(obj.name, obj);

            obj = new Edit("edt_WEEK","141","10","9.70%","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage6.form);
            obj.set_taborder("2");
            obj.set_imemode("alpha");
            obj.set_autoselect("true");
            obj.set_enable("true");
            this.div_work.form.tab.Tabpage6.addChild(obj.name, obj);

            obj = new Static("label01","5.80%","10","56","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage6.form);
            obj.set_taborder("3");
            obj.set_text("주차");
            obj.set_tooltiptext("WEEK");
            obj.set_cssclass("sta_WF_label");
            this.div_work.form.tab.Tabpage6.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"11","26","24","643",null,null,null,null,null,this.div_work.form.tab.Tabpage6.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab.Tabpage6.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_xout",null,"11","26","24","617",null,null,null,null,null,this.div_work.form.tab.Tabpage6.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab.Tabpage6.addChild(obj.name, obj);

            obj = new Button("btn_report",null,"12","103","20","507",null,null,null,null,null,this.div_work.form.tab.Tabpage6.form);
            obj.set_taborder("6");
            obj.set_text("X-OUT 표 발행");
            obj.set_cssclass("btn_DR_GridPlus");
            obj.set_tooltiptext("행추가");
            this.div_work.form.tab.Tabpage6.addChild(obj.name, obj);

            obj = new Static("label01_00","339","10","80","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage6.form);
            obj.set_taborder("7");
            obj.set_text("PCS/ARRAY");
            obj.set_tooltiptext("WEEK");
            obj.set_cssclass("sta_WF_label");
            this.div_work.form.tab.Tabpage6.addChild(obj.name, obj);

            obj = new MaskEdit("msk_PCSARY","432","10","122","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage6.form);
            obj.set_taborder("8");
            obj.set_textAlign("right");
            obj.set_enable("false");
            obj.set_format("#,###,##0");
            this.div_work.form.tab.Tabpage6.addChild(obj.name, obj);

            obj = new Grid("grd_xout_chk","grd_xout:20","38",null,null,"8","0",null,null,null,null,this.div_work.form.tab.Tabpage6.form);
            obj.set_taborder("9");
            obj.set_binddataset("ds_xout_chk");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"220\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"LOT NO\"/><Cell col=\"1\" text=\"수량\"/><Cell col=\"2\" text=\"X-OUT 양품\"/><Cell col=\"3\" text=\"X-OUT 불량\"/><Cell col=\"4\" text=\"UNIT\"/><Cell col=\"5\" text=\"DEFECTQTY\"/><Cell col=\"6\" text=\"SPN_QTY\"/></Band><Band id=\"body\"><Cell text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:QTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"2\" text=\"bind:X_OUT_GOODQTY\"/><Cell col=\"3\" text=\"bind:X_OUT_DEFECTQTY\"/><Cell col=\"4\" text=\"bind:UNIT\"/><Cell col=\"5\" text=\"bind:DEFECTQTY\"/><Cell col=\"6\" text=\"bind:SPN_QTY\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage6.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_00","btn_report:20","0","160","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage6.form);
            obj.set_taborder("10");
            obj.set_text("LOT별 X-OUT Total 수량");
            obj.set_cssclass("sta_WF_subTitle2");
            this.div_work.form.tab.Tabpage6.addChild(obj.name, obj);

            obj = new Grid("grd_lotInfo","0",null,null,"127","0","389",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_detail");
            obj.set_autoenter("select");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_binddataset("ds_lotInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"261\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"116\"/><Column size=\"100\"/><Column size=\"163\"/><Column size=\"100\"/><Column size=\"99\"/></Columns><Rows><Row size=\"21\"/><Row size=\"21\"/><Row size=\"21\"/><Row size=\"21\"/><Row size=\"21\"/><Row size=\"21\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_head\" text=\"Lot No.\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"LOTID\"/><Cell col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:LOTID\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"공정진행상태\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PROCESSSTATE\"/><Cell col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PROCESSSTATE\"/><Cell col=\"4\" cssclass=\"cell_head\" text=\"이전공정명\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PREVPROCESSSEGMENTNAME\"/><Cell col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PREVPROCESSSEGMENTNAME\"/><Cell col=\"6\" cssclass=\"cell_head\" text=\"공정명\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"8\" cssclass=\"cell_head\" text=\"후공정ID\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"NEXTPROCESSSEGMENTID\"/><Cell col=\"9\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:NEXTPROCESSSEGMENTID\"/><Cell row=\"1\" cssclass=\"cell_head\" text=\"후공정\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"NEXTPROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:NEXTPROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"2\" cssclass=\"cell_head\" text=\"후공정 REv.\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"NEXTPROCESSSEGMENTVERSION\"/><Cell row=\"1\" col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:NEXTPROCESSSEGMENTVERSION\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_head\" text=\"Site ID\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PLANTID\"/><Cell row=\"1\" col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PLANTID\"/><Cell row=\"1\" col=\"6\" cssclass=\"cell_head\" text=\"공정수순\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:USERSEQUENCE\"/><Cell row=\"1\" col=\"8\" cssclass=\"cell_head\" text=\"품목코드\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"ITEMID\"/><Cell row=\"1\" col=\"9\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTDEFID\"/><Cell row=\"2\" cssclass=\"cell_head\" text=\"품목명\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"ITEMNAME\"/><Cell row=\"2\" col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTDEFNAME\"/><Cell row=\"2\" col=\"2\" cssclass=\"cell_head\" text=\"투입일자\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"INPUTDATE\"/><Cell row=\"2\" col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:INPUTDATE\"/><Cell row=\"2\" col=\"4\" cssclass=\"cell_head\" text=\"S/O번호\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PRODUCTIONORDERID\"/><Cell row=\"2\" col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTIONORDERID\"/><Cell row=\"2\" col=\"6\" cssclass=\"cell_head\" text=\"납기일\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"DUEDATE\"/><Cell row=\"2\" col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:DUEDATE\"/><Cell row=\"2\" col=\"8\" cssclass=\"cell_head\" text=\"품목유형구분\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PRODUCTDEFTYPE\"/><Cell row=\"2\" col=\"9\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTDEFTYPE\" displaytype=\"normal\" combocodecol=\"C,ProductDefType,,Y,N\"/><Cell row=\"3\" cssclass=\"cell_head\" text=\"생산구분\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell row=\"3\" col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTIONTYPE\"/><Cell row=\"3\" col=\"2\" cssclass=\"cell_head\" text=\"보류여부\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"ISHOLD\"/><Cell row=\"3\" col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:ISHOLD\"/><Cell row=\"3\" col=\"4\" cssclass=\"cell_head\" text=\"Locking 여부\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"ISLOCKING\"/><Cell row=\"3\" col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:ISLOCKING\"/><Cell row=\"3\" col=\"6\" cssclass=\"cell_head\" text=\"작업장\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"ISLOCKING\"/><Cell row=\"3\" col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:AREANAME\"/><Cell row=\"3\" col=\"8\" cssclass=\"cell_head\" text=\"주차\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"WEEK\"/><Cell row=\"3\" col=\"9\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:WEEK\"/><Cell row=\"4\" cssclass=\"cell_head\" text=\"작업장ID\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"AREAID\"/><Cell row=\"4\" col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:AREAID\" displaytype=\"normal\" combodataset=\"ds_uom\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell row=\"4\" col=\"2\" cssclass=\"cell_head\" text=\"재작업여부\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PANELQTY\"/><Cell row=\"4\" col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:ISREWORK\"/><Cell row=\"4\" col=\"4\" cssclass=\"cell_head\" text=\"고객명\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"CUSTOMERNAME\"/><Cell row=\"4\" col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:CUSTOMERNAME\"/><Cell row=\"4\" col=\"6\" cssclass=\"cell_head\" text=\"단위\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"UNIT\"/><Cell row=\"4\" col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:UNIT\"/><Cell row=\"4\" col=\"8\" cssclass=\"cell_head\" text=\"수량(PNL)\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PNLQTY\"/><Cell row=\"4\" col=\"9\" textAlign=\"center\" padding=\"0px 0px 0px 5px\" text=\"bind:PNLQTY\" displaytype=\"number\"/><Cell row=\"5\" cssclass=\"cell_head\" text=\"수량(PCS)\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PCSQTY\"/><Cell row=\"5\" col=\"1\" textAlign=\"center\" padding=\"0px 0px 0px 5px\" text=\"bind:PCSQTY\" displaytype=\"number\"/><Cell row=\"5\" col=\"2\" cssclass=\"cell_head\" text=\"MM\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"MM\"/><Cell row=\"5\" col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:MM\"/><Cell row=\"5\" col=\"4\" cssclass=\"cell_head\" text=\"LOT카드 출력여부\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"ISPRINTLOTCARD\"/><Cell row=\"5\" col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:ISPRINTLOTCARD\"/><Cell row=\"5\" col=\"6\" cssclass=\"cell_head\" text=\"자재품목구분\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"MATERIALCLASS\"/><Cell row=\"5\" col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:MATERIALCLASS\" combocodecol=\"C,MaterialClass,,YN\" displaytype=\"normal\"/><Cell row=\"5\" col=\"8\" border=\"1px solid #e8e8e8\" text=\"양산구분\" textAlign=\"left\" background=\"#f7f7f7\" tooltiptext=\"LOTTYPE\"/><Cell row=\"5\" col=\"9\" border=\"1px solid #e8e8e8,0px solid #e8e8e8\" text=\"bind:LOTTYPE\" textAlign=\"left\" displaytype=\"combotext\" combocodecol=\"C,YieldProdType,,Y,N\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_lot","0","43",null,null,"0","517",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_lotList");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"31\"/><Column size=\"190\"/><Column size=\"190\"/><Column size=\"131\"/><Column size=\"40\"/><Column size=\"277\"/><Column size=\"54\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"58\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"모 Lot\"/><Cell col=\"2\" text=\"Lot No.\"/><Cell col=\"3\" text=\"품목코드\"/><Cell col=\"4\" text=\"Rev\"/><Cell col=\"5\" text=\"품목명\"/><Cell col=\"6\" text=\"단위\"/><Cell col=\"7\" text=\"수량(PNL)\"/><Cell col=\"8\" text=\"수량\"/><Cell col=\"9\" text=\"분할수량\"/><Cell col=\"10\" text=\"검사자명\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" textAlign=\"left\" text=\"bind:PARENTLOT\"/><Cell col=\"2\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:UNIT\"/><Cell col=\"7\" text=\"bind:PANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:QTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:SPLITQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"10\" textAlign=\"left\" text=\"bind:INSPECTORNAME\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_00","1",null,null,"56","1","331",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("div_00");
            obj.set_cssclass("div_WF_detail");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label00_00","0",null,"103","20",null,"29",null,null,null,null,this.div_work.form.div_00.form);
            obj.set_taborder("0");
            obj.set_text("양품 수량");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.div_work.form.div_00.addChild(obj.name, obj);

            obj = new Static("label00_00_00","260",null,"103","20",null,"29",null,null,null,null,this.div_work.form.div_00.form);
            obj.set_taborder("1");
            obj.set_text("불량수량");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("OSPVENDORID");
            this.div_work.form.div_00.addChild(obj.name, obj);

            obj = new Static("label00_00_01","0",null,"103","20",null,"3",null,null,null,null,this.div_work.form.div_00.form);
            obj.set_taborder("2");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSSEGMENTNAME");
            this.div_work.form.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_PROCESSSEGMENTNAME","108",null,null,"20","5","3",null,null,null,null,this.div_work.form.div_00.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            this.div_work.form.div_00.addChild(obj.name, obj);

            obj = new MaskEdit("msk_GoodQty","108","5","140","20",null,null,null,null,null,null,this.div_work.form.div_00.form);
            obj.set_taborder("4");
            obj.set_textAlign("right");
            obj.set_enable("false");
            obj.set_format("#,###,##0");
            this.div_work.form.div_00.addChild(obj.name, obj);

            obj = new MaskEdit("msk_DefectQty","342","5","140","20",null,null,null,null,null,null,this.div_work.form.div_00.form);
            obj.set_taborder("5");
            obj.set_textAlign("right");
            obj.set_enable("false");
            obj.set_format("#,###,##0");
            this.div_work.form.div_00.addChild(obj.name, obj);

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
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_work.form.tab.Tabpage1.form.msk_ParentLotQty","value","ds_work","PARENTLOTQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.form.tab.Tabpage6.form.msk_PCSARY","value","ds_lotInfo","PCSARY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","pcm::PCM06900T1.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PCM07200M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM07200M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM07200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 최종 인계 등록
         * 파일명 		: PCM07200M.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.04.29
         *
         * 설  명		: 공정관리-최종검사-최종 인계 등록
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.29	진성하   	최초작성
         * 2021.07.20	이용국   	X-OUT탭의 저장 유효성체크
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통
        /**************************************************************************

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

        var bStop = false;

          //첫번째 탭 불량 그리드
         this.Defect = {
        		inspectQty :	0   	//검사 수량(pcs 기준)
        	  , pcsPnl :    0   		//기준 (PCS / PNL) 수량
        	  , InspectionDefId : "" 	//검사정의 ID
        	  , SelectedLotId : "" 		//Selected Lot ID
        	  , panelPerQty : 0			//usDefectGrid 의 member
        	  , qty : 0					//usDefectGrid 의 member
         };

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.basfn_removeEventGrid(this.div_work.form.grd_lot);
        	this.basfn_removeEventGrid(this.div_work.form.tab.Tabpage2.form.divWork.form.grdInspectionList);


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

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	var component = this.div_work.form.divSearch;
        	var strColIdList = "edt_area_id,edt_lotId";
        	var strColNmList = "AREA,LOTID";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        /*
         * Step1_1 : 작업장, Lot ID 체크
         */
        	this.ds_lotInfo.clearData();
        	this.ds_lotList.clearData();
        	this.ds_split.clearData();
        	this.ds_InspectionList.clearData();
        	this.ds_work.clearData();
        	this.ds_work_copy.clearData();
        	this.ds_comment.clearData();	//특기사항
        	this.ds_operationSpec.clearData();	//공정SPEC
        	this.div_work.form.tab.Tabpage3.form.divMessage.form.fn_clear();
        	this.div_work.form.tab.Tabpage2.form.divWork.form.imageViewer.set_image("");
        	this.ds_xout.clearData();
        	this.ds_xout_chk.clearData();
        	this.div_work.form.tab.Tabpage6.form.edt_WEEK.set_value("");
        	this.div_work.form.tab.Tabpage1.form.spn_qty.set_value("");
        	//this.div_work.form.tab.Tabpage1.form.cbo_uom.set_value("");

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 	this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID", 			this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 	this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "RESOURCETYPE",		"Resource");
        	this.ds_search.setColumn(0, "PROCESSSTATE",		Constants.WaitForSend);
        	this.ds_search.setColumn(0, "LOTID", 			this.div_work.form.divSearch.form.edt_lotId.value);
        	this.ds_search.setColumn(0, "AREAID", 			this.div_work.form.divSearch.form.edt_area_id.value);
        	this.ds_search.setColumn(0, "EQUIPMENTTYPE",			"Production");
        	this.ds_search.setColumn(0, "DETAILEQUIPMENTTYPE",		"Main");
        	this.ds_search.setColumn(0, "INSPECTIONCLASSID",		"FinishInspection");

        	var sSvcID 			= "SelectLotInfoByProcess";
        	var sController 	= "/pcm07200/SelectLotInfoByProcess.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_work=output ds_lotInfo=ds_lotInfo ds_comment=ds_comment ds_operationSpec=ds_operationSpec ds_transitArea=ds_transitArea ds_lotList=ds_lotList ds_ReasonConsumableList=ds_ReasonConsumableList ds_ReasonConsumableLot=ds_ReasonConsumableLot ds_ReasonProcessSegment=ds_ReasonProcessSegment ds_NcrList=ds_NcrList";
        	var sArgs 			= "";
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
        	if(this.ds_lotInfo.rowcount < 1){
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	//필수값 체크
        	if(this.ds_lotList.rowcount<1){
        		this.gfn_Message("NoSeletedLot", "", "warning", "ok");
        		return;
        	}

        	if(this.ds_lotList.getCaseCount("CHK=='1'") < 1){
        		this.gfn_Message("NoSeletedLot", "", "warning", "ok");
        		return;
        	}
        //////////////////////////////////////////////////////////////////////////////////
        	var pcsaryQty = nexacro.toNumber(this.nfn_nvl(this.div_work.form.tab.Tabpage6.form.msk_PCSARY.value,0));
        	var bOK = true;
        	if(pcsaryQty > 0) {
        		var qty = "0";
        		var goodqty ="0";

        		for(var i=0; i < this.ds_xout_chk.rowcount; i++) {

        			qty = nexacro.toNumber(this.nfn_nvl(this.ds_xout_chk.getColumn(i,"QTY"),0));
        			goodqty = nexacro.toNumber(this.nfn_nvl(this.ds_xout_chk.getColumn(i,"X_OUT_GOODQTY"),0));

        			if(goodqty > 0) {			//양품수량이 0 이상
        				if(qty != goodqty)      //수량과 양품수량이 다르면
        				{
        					bOK = this.gfn_Message("수량과 X-OUT양품수량이 다릅니다. 그래도 진행하시겠습니까?", null, "conf", "yesno");
        					break;
        				}
        			}
        			if(goodqty < 0) {
        				this.gfn_Message("X-OUT양품수량을 확인하세요", null, "warning", "ok");
        				bOK = false;
        				break;
        			}
        		}
        	}
        	if(!bOK) return;
        ///////////////////////////////////////////////////////////////////////////////////
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
        			this.fn_mergeInspectionData();
        			if(this.mfn_checkNCR(defectGrade, defectRate, pcsQty,defectCode, imgResourceID, defectName, i ) == false) return;
        		}
        	}

        /////////////////////////////////////////////////////////////////////
        	var defectQty = this.ds_InspectionList.getSum("QTY");
        	var strTransitArea = "";
        	var strResourceid = this.div_work.form.divSearch.form.cbo_transitArea.value;
        	if(!this.gfn_isNull(this.div_work.form.divSearch.form.cbo_transitArea.value)){
        		strTransitArea = this.ds_transitArea.lookup("RESOURCEID",strResourceid,"AREAID");
        	}
        	if(this.gfn_isNull(strTransitArea)){
        		this.gfn_Message("NeedToInputAreaWhenTakeOver", "", "warning", "ok");
        		return;
        	}
        	var unit = this.div_work.form.tab.Tabpage1.form.cbo_uom.value;

        	if (!this.gfn_GridKeyCheck(this.div_work.form.tab.Tabpage6.form.grd_xout, ["X_OUT", "CARD"]))
        	{
        		return;
        	}
        	this.ds_bodySend.clearData();
        	this.ds_bodySend.addRow();
        // 	this.ds_bodySend.setColumn(0,"UNIT",unit);
        // 	this.ds_bodySend.setColumn(0,"DEFECTQTY",defectQty);
        	this.ds_bodySend.setColumn(0,"TRANSITAREA",strTransitArea);
        	this.ds_bodySend.setColumn(0,"RESOURCEID",strResourceid);

        	this.ds_InspectionList.filter("");
        	this.ds_xout_chk.filter("");
        	for(var i=0; i < this.ds_lotList.rowcount ; i++) {
        		var lotId = this.ds_lotList.getColumn(i,"LOTID");
        		var idx = this.ds_xout_chk.findRow("LOTID",lotId);
        		var idx1 = this.ds_work_copy.findRow("LOTID",lotId);
        		this.ds_lotList.setColumn(i,"SAVE_DEFECTQTY",this.nfn_nvl(this.ds_work_copy.getColumn(idx1,"DEFECTQTY"),0));
        		this.ds_lotList.setColumn(i,"SAVE_UNIT",this.nfn_nvl(this.ds_xout_chk.getColumn(idx,"UNIT"),0));
        	}

        	trace("this.ds_lotList.saveXML()==>\n"+this.ds_lotList.saveXML());
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveFinalInspectionSend";
        	var sController 	= "/pcm07200/saveFinalInspectionSend.do";
        	var sInDatasets 	= "INPUT=ds_bodySend:A lotList=ds_lotList splitList=ds_split defectList=ds_InspectionList";
        //	var sOutDatasets 	= "";
        	var sOutDatasets 	= "ds_mail=output ds_lotCard=output1";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

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

        	var lot = [];
        	var wok = [];
        	var languageType 	= this.gf_getLanguageType();
        	var title 			= this.nfn_nvl(this.nfn_getDictionarynameUpper("LOTCARDPRINT"),"LOT Card 출력");

        // 	lot.push(this.ds_pcmLot.getColumn( 0, "LOTID" ) );
        // 	wok.push( this.ds_pcmLot.getColumn(0, "LOTID" ) + "| " );
        	for (var i = 0; i < this.ds_lotCard.rowcount; i++)
        	{
        		lot.push(this.ds_lotCard.getColumn( i, "LOTID" ) );
        		wok.push( this.ds_lotCard.getColumn( i, "LOTID" ) + "| " );
        	}

        	var oArg = {
        		sRptPath   : "/pcm/",
        		sRptName   : "PCM00600R.mrd",
        		strField   :   "[" + lot
        					+ "][" + languageType
        					+ "][" + wok
        					+ "][" + lot
        					+ "]",
        		bModalless : false
        	};

        	var sOption = "titletext="+title+",modeless=false";
        	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        };

        /*
         * 기능 : work영역 초기화  => 공통처리
         */
        this.fn_reset = function(obj,e)
        {
        	this.div_work.form.divSearch.form.edt_lotId.set_value("");
        	this.clearDetailInfo();
        };

        this.fn_saveValidate = function ()
        {
        	var pcsQty 		= nexacro.toNumber(this.ds_lotList.getColumn(this.ds_lotList.position, "QTY"));
        	var defectQty 	= nexacro.toNumber(this.ds_lotList.getColumn(this.ds_lotList.position, "DEFECTQTY"));


        	if (defectQty > pcsQty)
        	{

        		this.gfn_Message("LotQtyLargerThanDefectQty", defectQty, "warning", "ok");//불량 수량은(는) 검사 수량보다 많을 수 없습니다.
        		return false;
        	}
        	return true;
        }

        this.mfn_checkNCR = function (defectGrade, defectRate, defectQty,strDefectCode, imgResourceID, defectName, rowPosition )
        {
        	this.ds_NcrListTemp.copyData(this.ds_NcrList);
        	this.ds_NcrListTemp.filter("DECISIONDEGREE == '" + defectGrade + "'");
        	var bcheck = true;
        	var message = "";

        	for(var i=0;i<this.ds_NcrListTemp.rowcount;i++)
        	{
        		var judgeType = this.ds_NcrListTemp.getColumn(i,"NGCONDITION");
        		var fromRate = nexacro.toNumber(this.ds_NcrListTemp.getColumn(i,"FROMRATE"));
        		var toRate = nexacro.toNumber(this.ds_NcrListTemp.getColumn(i,"TORATE"));
        		var ngQty = nexacro.toNumber(this.ds_NcrListTemp.getColumn(i,"NGQUANTITY"));
        		var chkDefectQty = defectQty;
        		var checkType = this.ds_NcrListTemp.getColumn(i,"QTYORRATE");

        		var spec = this.ds_NcrListTemp.getColumn(i,"NCRSPEC");
        		var gcGrad = this.ds_NcrListTemp.getColumn(i,"QCGRADE");



        		switch(judgeType) {
        		case "GE"://이상
        		{
        			if(checkType == "RATE" && defectRate >= toRate){
        				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString(), defectName);
        				bcheck = false;
        			}else if(checkType == "QTY" && chkDefectQty >= ngQty){
        				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString(), defectName);
        				bcheck = false;
        			}
        			break;
        		}
        		case "BT":
        		{
        			if(checkType == "RATE" &&  defectRate >= fromRate && defectRate <= toRate){
        				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString(), defectName);
        				bcheck = false;
        			}else if(checkType == "QTY" && ngQty >= fromRate && ngQty <= toRate){
        				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString(), defectName);
        				bcheck = false;
        			}
        			break;
        		}
        		case "GT":
        		{
        			if(checkType == "RATE" &&  defectRate > toRate){
        				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString(), defectName);
        				bcheck = false;
        			}else if(checkType == "QTY" && chkDefectQty > ngQty){
        				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString(), defectName);
        				bcheck = false;
        			}
        			break;
        		}
        		case "LE":
        		{
        			if(checkType == "RATE" &&  defectRate <= toRate){
        				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString(), defectName);
        				bcheck = false;
        			}else if(checkType == "QTY" && chkDefectQty <= ngQty){
        				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString(), defectName);
        				bcheck = false;
        			}
        			break;
        		}
        		default:
        		}
        	}

        	if (!bcheck && this.nfn_isNull(imgResourceID)) {
        		var bOk = this.gfn_Message("CHECKIMEAGEBYNCR2", message, "conf", "yesno");//NCR 발행 불량은 이미지 등록이 필수 입니다. {0}
        		bcheck = bOk;
        	} else {
        		bcheck = true;
        	}

        	return bcheck;
        };

        // this.mfn_checkNCR = function (defectGrade, defectRate, defectQty,strDefectCode, imgResourceID )
        // {
        // 	this.ds_NcrListTemp.copyData(this.ds_NcrList);
        // 	this.ds_NcrListTemp.filter("DECISIONDEGREE == '" + defectGrade + "'");
        // 	var bcheck = true;
        // 	var message = "";
        //
        // 	for(var i=0;i<this.ds_NcrListTemp.rowcount;i++)
        // 	{
        // 		var judgeType = this.ds_NcrListTemp.getColumn(i,"NGCONDITION");
        // 		var fromRate = nexacro.toNumber(this.ds_NcrListTemp.getColumn(i,"FROMRATE"));
        // 		var toRate = nexacro.toNumber(this.ds_NcrListTemp.getColumn(i,"TORATE"));
        // 		var ngQty = nexacro.toNumber(this.ds_NcrListTemp.getColumn(i,"NGQUANTITY"));
        // 		var chkDefectQty = defectQty;
        // 		var checkType = this.ds_NcrListTemp.getColumn(i,"QTYORRATE");
        //
        // 		var spec = this.ds_NcrListTemp.getColumn(i,"NCRSPEC");
        // 		var gcGrad = this.ds_NcrListTemp.getColumn(i,"QCGRADE");
        //
        // 		switch(judgeType) {
        // 		case "GE"://이상
        // 		{
        // 			if(checkType == "RATE" && defectRate >= toRate){
        // 				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString());
        // 				bcheck = false;
        // 			}else if(checkType == "QTY" && chkDefectQty >= ngQty){
        // 				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString());
        // 				bcheck = false;
        // 			}
        // 			break;
        // 		}
        // 		case "BT":
        // 		{
        // 			if(checkType == "RATE" &&  defectRate >= fromRate && defectRate <= toRate){
        // 				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString());
        // 				bcheck = false;
        // 			}else if(checkType == "QTY" && ngQty >= fromRate && ngQty <= toRate){
        // 				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString());
        // 				bcheck = false;
        // 			}
        // 			break;
        // 		}
        // 		case "GT":
        // 		{
        // 			if(checkType == "RATE" &&  defectRate > toRate){
        // 				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString());
        // 				bcheck = false;
        // 			}else if(checkType == "QTY" && chkDefectQty > ngQty){
        // 				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString());
        // 				bcheck = false;
        // 			}
        // 			break;
        // 		}
        // 		case "LE":
        // 		{
        // 			if(checkType == "RATE" &&  defectRate <= toRate){
        // 				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString());
        // 				bcheck = false;
        // 			}else if(checkType == "QTY" && chkDefectQty <= ngQty){
        // 				message = this.SetNCRMessage(checkType, strDefectCode, gcGrad, defectQty.toString(), spec, defectRate.toString());
        // 				bcheck = false;
        // 			}
        // 			break;
        // 		}
        // 		default:
        // 		}
        // 	}
        //
        // 	if (!bcheck && this.nfn_isNull(imgResourceID)) {
        // 		var bOk = this.gfn_Message("CHECKIMEAGEBYNCR2", message, "conf", "yesno");//NCR 발행 불량은 이미지 등록이 필수 입니다. {0}
        // 		bcheck = bOk;
        // 	} else {
        // 		bcheck = true;
        // 	}
        //
        // 	return bcheck;
        // };

        this.SetNCRMessage = function (checkType, strDefectCode, gcGrad, defectQty, spec, defectRate)
        {
        	var message = "";

        	message = "\r\n" + this.nfn_getDictionaryname('DEFECTCODE',true) + " : " + strDefectCode + "\r\n" + this.nfn_getDictionaryname('QCGRADE',true) + " : " + gcGrad + "\r\n";
        	if (checkType == "QTY")
        	{
        		message = message + this.nfn_getDictionaryname('PCSDEFECTQTY',true) + " : " + defectQty + "\r\n" + this.nfn_getDictionaryname('RANGE',true)  + " : " + spec;
        	}
        	else
        	{
        		message = message + this.nfn_getDictionaryname('NCRDEFECTRATE',true) + " : " + defectRate + "\r\n" + this.nfn_getDictionaryname('RANGE',true) + " : " + spec;
        	}

        	return message;
        };


        this.clearDetailInfo = function()
        {
        	this.div_work.form.divSearch.form.edt_lotId.set_value("");
        	this.ds_transitArea.clearData();
        	this.ds_lotList.clearData();
        	this.ds_lotInfo.clearData();
        	this.ds_lotInfo.addRow();
        	this.ds_split.clearData();
        	this.ds_message.clearData();
        	this.ds_comment.clearData();
        	this.ds_operationSpec.clearData();
        	this.div_work.form.tab.Tabpage3.form.divMessage.form.fn_clear();
        	this.div_work.form.tab.Tabpage2.form.divWork.form.imageViewer.set_image("");
        	this.ds_xout.clearData();
        	this.div_work.form.tab.Tabpage6.form.edt_WEEK.set_value("");
        	this.div_work.form.tab.Tabpage1.form.spn_qty.set_value("");
        	this.div_work.form.tab.Tabpage1.form.cbo_uom.set_value("");
        	this.ds_InspectionList.clearData();
        	this.ds_NcrList.clearData();
        	this.ds_work.clearData();
        	this.ds_work_copy.clearData();
        	this.ds_xout_chk.clearData();
        }

        /*
         * Step2_1 : 체공상태 체크
         */
        this.fn_searchStaying = function()
        {
        	this.ds_dtStaying.clearData();
        	this.ds_search.setColumn(0, "SQL_ID", 			"getCheckStaying");

        	var sSvcID 			= "getCheckStaying";
        	var sController 	= "/pcm06900/selectCustomQuery.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets  	= "ds_dtStaying=output";
        	var sArgs 		  	= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);
        }

        /*
         *	Step3_1 : 재작업 여부 체크
         */
        this.fn_StayReasonCode_CallBack = function ()
        {
        	this.ds_processDefTypeInfo.clearData();
        	this.ds_search.setColumn(0, "PROCESSSTATE",		"WaitForReceive");
        	this.ds_search.setColumn(0, "VERSION", 			"10001");
        	this.ds_search.setColumn(0, "SQL_ID", 			"getProcessDefTypeByProcess");

        	var sSvcID 			= "getProcessDefTypeByProcess";
        	var sController 	= "/pcm06900/selectCustomQuery.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_processDefTypeInfo=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         *	Step4_1 : Lot Check 체크
         */
        this.fn_checkLot = function ()
        {
        	var processDefType ="";
        	if (this.ds_processDefTypeInfo.getRowCount() > 0){
        		processDefType = this.nfn_nvl(this.ds_processDefTypeInfo.getColumn(0, "PROCESSDEFTYPE"), "");
        	}

        	this.ds_lotInfo.clearData();
        	this.ds_search.setColumn(0, "PROCESSSTATE",			"WaitForSend");
        	this.ds_search.setColumn(0, "VERSION", 				processDefType == "Rework" ? "10011" : "10001");
        	//this.ds_search.setColumn(0, "MIDDLESEGMENTCLASSID", "'7026','7534'");

        	var sSvcID 			= "SelectLotInfoByProcess";
        	var sController 	= "/pcm07200/SelectLotInfoByProcess.do";
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
        	this.ds_lotList.clearData();
        	this.ds_message.clearData();
        	this.ds_comment.clearData();
        	this.ds_operationSpec.clearData();
        	this.ds_equipmentInfo.clearData();

        	this.ds_search.setColumn(0, "EQUIPMENTTYPE",			"Production");
        	this.ds_search.setColumn(0, "DETAILEQUIPMENTTYPE",		"Main");
        	this.ds_search.setColumn(0, "INSPECTIONCLASSID",		"FinishInspection");

        	var sSvcID 			= "selectOtherInfo";
        	var sController 	= "/pcm07100/selectOtherInfo.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets  	= "ds_comment=output1 ds_operationSpec=output2 ds_lotList=output3 ds_equipmentInfo=output4 ds_NcrList=output5";
        	var sArgs 		  	= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);
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


        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		if (trId == "saveFinalInspectionSend")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        			} else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        			}
        		} else {
        			this.gfn_Message(errMsg,"", "error", "ok");
        		}
        	} else {
        		if (trId == "SelectLotInfoByProcess") {
        			if(this.ds_lotList.rowcount>0 && this.ds_lotList.rowposition<0){
        				this.ds_lotList.set_rowposition(0);
        			}
        			var stepType = this.ds_lotInfo.getColumn(0,"STEPTYPE");
        			if((stepType+",").indexOf("WaitForSend,")>=0){
        				this.div_work.form.divSearch.form.cbo_transitArea.set_visible(true);
        			}else{
        				this.div_work.form.divSearch.form.cbo_transitArea.set_visible(false);
        				this.ds_transitArea.clearData();
        			}

        			//작업장이나, 자원이 없을 경우
        			if(this.gfn_isNull(this.ds_lotList.getColumn(0,"AREAID")) || this.gfn_isNull(this.ds_lotList.getColumn(0,"RESOURCEID"))){
        				var popupId 				= "SEARCH_RESOURCE";
        				var oArg 					= {};
        				oArg.arg_lotId 				= this.nfn_nvl(this.ds_lotList.getColumn(0,"LOTID"), "");
        				oArg.arg_processSegmentId 	= this.nfn_nvl(this.ds_lotList.getColumn(0,"PROCESSSEGMENTID"), "");
        				oArg.arg_areaId 			= this.ds_search.getColumn(0,"AREAID");
        				this.gfn_openPopup(popupId,"pcm::PCM01700P2.xfdl",oArg,"width=456,height=170"); /* Step1_2 popupAfter 호출 */
        			} else {
        				this.fn_searchStaying();		/* Step2 체공상태 체크 함수 호출*/
        			}

        //			this.div_work.form.tab.Tabpage6.form.msk_PCSARY.set_value(this.nfn_nvl(this.ds_lotInfo.getColumn(0,"PCSARY"),0));

        			this.ds_work_copy.clearData();
        			for(var i =0;i<this.ds_lotList.rowcount;i++) {
        				this.ds_work_copy.addRow();
        				this.ds_work_copy.setColumn(i,"LOTID",this.ds_lotList.getColumn(i,"LOTID"));
        				this.ds_work_copy.setColumn(i,"GOODQTY","0");
        				this.ds_work_copy.setColumn(i,"DEFECTQTY","0");
        			}

        			this.ds_xout_chk.clearData();
        			for(var i =0;i<this.ds_lotList.rowcount;i++) {
        				this.ds_xout_chk.addRow();
        				this.ds_xout_chk.setColumn(i,"LOTID",this.ds_lotList.getColumn(i,"LOTID"));
        				this.ds_xout_chk.setColumn(i,"QTY",this.ds_lotList.getColumn(i,"QTY"));
        				this.ds_xout_chk.setColumn(i,"X_OUT_GOODQTY","0");
        				this.ds_xout_chk.setColumn(i,"X_OUT_DEFECTQTY","0");
        			}

        		} else if (trId == "SelectLotInfoByProcess1") { //ds_List Row변경
        			if(this.ds_lotList.rowcount>0 && this.ds_lotList.rowposition<0){
        				this.ds_lotList.set_rowposition(0);
        			}
        			var stepType = this.ds_lotInfo.getColumn(0,"STEPTYPE");
        			if((stepType+",").indexOf("WaitForSend,")>=0){
        				this.div_work.form.divSearch.form.cbo_transitArea.set_visible(true);
        			}else{
        				this.div_work.form.divSearch.form.cbo_transitArea.set_visible(false);
        				this.ds_transitArea.clearData();
        			}

        			//작업장이나, 자원이 없을 경우
        			if(this.gfn_isNull(this.ds_lotList.getColumn(0,"AREAID")) || this.gfn_isNull(this.ds_lotList.getColumn(0,"RESOURCEID"))){
        				var popupId 				= "SEARCH_RESOURCE";
        				var oArg 					= {};
        				oArg.arg_lotId 				= this.nfn_nvl(this.ds_lotList.getColumn(0,"LOTID"), "");
        				oArg.arg_processSegmentId 	= this.nfn_nvl(this.ds_lotList.getColumn(0,"PROCESSSEGMENTID"), "");
        				oArg.arg_areaId 			= this.ds_search.getColumn(0,"AREAID");
        				this.gfn_openPopup(popupId,"pcm::PCM01700P2.xfdl",oArg,"width=456,height=170"); /* Step1_2 popupAfter 호출 */
        			} else {
        				this.fn_searchStaying();		/* Step2 체공상태 체크 함수 호출*/
        			}

        			this.div_work.form.tab.Tabpage6.form.msk_PCSARY.set_value(this.nfn_nvl(this.ds_lotInfo.getColumn(0,"PCSARY"),0));
        			var lotId = this.ds_lotList.getColumn(this.ds_lotList.rowposition,"LOTID");

        			this.ds_split.filter("");
         			this.ds_split.filter("HIDDEN_LOTID == '" + lotId + "'");
        			this.ds_InspectionList.filter("");
         			this.ds_InspectionList.filter("LOTID == '" + lotId + "'");
         			this.ds_xout.filter("");
         			this.ds_xout.filter("LOTID == '" + lotId + "'");

         			var idx = this.ds_xout_chk.findRow("LOTID",lotId);
         			this.div_work.form.tab.Tabpage1.form.cbo_uom.set_value(this.ds_xout_chk.getColumn(idx,"UNIT"));
         			this.div_work.form.tab.Tabpage1.form.spn_qty.set_value(this.ds_xout_chk.getColumn(idx,"SPN_QTY"));
        // 			this.ds_lotList.getColumn(idx,"SAVE_UNIT");

        			this.fn_SetChangeGoodDefectQty();
        // 			this.div_work.form.div_00.form.msk_GoodQty.set_value(this.ds_lotList.getColumn(0,"QTY"));
        // 			this.div_work.form.div_00.form.msk_DefectQty.set_value(this.ds_lotList.getColumn(0,"DEFECTQTY"));
        		} else if (trId == "selectAreaResourceByLot"){	/* Step1_1 Callback : 작업장, Lot ID 체크 */
        			if(this.ds_dt.getRowCount() < 1) {
        				//존재 하지 않는 Lot No. 입니다.
        				this.gfn_Message("NotExistLotNo", null, "warning", "ok");
        				return;
        			}

        			//작업장이나, 자원이 없을 경우 nfn_nvl
        			if (this.nfn_isNull(this.ds_dt.getColumn(0, "AREAID")) || this.nfn_isNull(this.ds_dt.getColumn(0, "RESOURCEID"))){
        				var popupId 				= "SEARCH_RESOURCE";
        				var oArg 					= {};
        				oArg.arg_lotId 				= this.nfn_nvl(this.ds_dt.getColumn(0,"LOTID"), "");
        				oArg.arg_processSegmentId 	= this.nfn_nvl(this.ds_dt.getColumn(0,"PROCESSSEGMENTID"), "");
        				oArg.arg_areaId 			= this.ds_search.getColumn(0,"AREAID");
        				this.gfn_openPopup(popupId,"pcm::PCM01700P2.xfdl",oArg,"width=456,height=170"); /* Step1_2 popupAfter 호출 */
        				return;
        			}
        			this.fn_searchStaying();		/* Step2 체공상태 체크 함수 호출*/

        		} else if (trId == "getCheckStaying"){   /* Step2_1 Callback */
        			if (this.nfn_nvl(this.ds_dtStaying.getColumn(0, "ISLOCKING"), "") == "Y"){
        				// 채공팝업
        				var popupId = "SEARCH_StayReasonCode";
        				var oArg = {};

        				oArg.arg_ds_dtStaying = this.ds_dtStaying;
        				this.gfn_openPopup(popupId,"pcm::PCM01700P1.xfdl",oArg,"width=556,height=409");	/* Step2_2 popupAfter 호출 */
        			}

        		} else if (trId =="getProcessDefTypeByProcess"){ /* Step 3_1 Callback */
        			this.fn_checkLot();	/* Step_4 함수 호출 */

        		} else if(trId =="saveFinalInspectionSend"){
        			this.gfn_Message("SuccedSave", null, "info", "ok");
        //			this.alert("this.ds_lotCard.rowcount=====>"+this.ds_lotCard.rowcount);
        			if(this.ds_lotCard.rowcount > 0) {
        				this.fn_print();
        			}
        			if(this.ds_mail.rowcount>0){
        				this.fn_getEmailAddrList(); //NCR Mail 대상자 조회
        			} else {
        				this.div_work.form.divSearch.form.edt_lotId.set_value("");
        				this.clearDetailInfo();
        			}
        		} else if(trId=="saveXout"){
        			this.ds_list.clearData();
        			var nRow = this.ds_list.addRow();
        			this.ds_list.setColumn(nRow,"code",nRow+1);
        			this.ds_list.setColumn(nRow,"value",this.ds_lotInfo.getColumn(0,"LOTID"));
        			var strField = this.gfn_strParameterData(this.ds_list, "code", "value");  //code : parameter 순서 : 1,2....
        			//또는 strField = [$1값][$2값]....[$n값];
        			var oArg = {
        				sRptPath : "/pcm/",
        				sRptName : "PCM07200R.mrd",
        				strField : strField,
        				bModalless : false
        			};
        			var sOption = "titletext=Report modal 실행 샘플,modeless=false";
        			this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        		} else if(trId =="selectEmailList"){
        			this.fn_sendMail();
        			this.div_work.form.divSearch.form.edt_lotId.set_value("");
        			this.clearDetailInfo();
        		}

        	}
        }




        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId=="AREA_ID"){
        		this.div_work.form.divSearch.form.edt_area_id.set_value(rtn[0]);
        		this.div_work.form.divSearch.form.edt_area.set_value(rtn[1]);
        		this.div_work.form.divSearch.form.edt_lotId.setFocus();
        	}

        	if(sPopupId=="SEARCH_RESOURCE"){ /* Step1_2 Popup Callback */
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
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false);
        			this.fn_search();
        		} else {
        			// 현재 공정에서 사용할 자원을 선택하시기 바랍니다.
        			this.gfn_Message("SelectResourceForCurrentProcess", null, "warning", "ok");
        		}
        	}

        	if(sPopupId =="GRD_INSPECTOR"){
        		var objId = "";
        		var objNm = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			objNm += ","+ colArray[1];
        			objId += ","+ colArray[0];
        		}

        		this.ds_lotList.setColumn(this.ds_lotList.rowposition, "INSPECTIONUSER", objId.substr(1));
        		this.ds_lotList.setColumn(this.ds_lotList.rowposition, "INSPECTORNAME", objNm.substr(1));
        	}

        	if (sPopupId == "SEARCH_DEFECT")
        	{//DEFECTCODE|DEFECTCODENAME|QCSEGMENTID|QCSEGMENTNAME|DECISIONDEGREE|SEGMENT_DEFECTCODE|SEGMENT_DEFECTNAME
        		var nRow = this.ds_InspectionList.rowcount == 1 ? 0 : this.ds_InspectionList.rowposition;
        		this.ds_InspectionList.setColumn(nRow,"DEFECTCODE",rtn[0]);
        		this.ds_InspectionList.setColumn(nRow,"DEFECTCODENAME",rtn[1]);
        		this.ds_InspectionList.setColumn(nRow,"QCSEGMENTID",rtn[2]);
        		this.ds_InspectionList.setColumn(nRow,"QCSEGMENTNAME",rtn[3]);
        		this.ds_InspectionList.setColumn(nRow,"DECISIONDEGREE",rtn[4]);
        		this.ds_InspectionList.setColumn(nRow,"SEGMENT_DEFECTCODE",rtn[5]);
        		this.ds_InspectionList.setColumn(nRow,"SEGMENT_DEFECTNAME",rtn[6]);

        	}
        	if( sPopupId == "file_upload")
        	{
        		if(rtn == "SUCC")
        		{
        			var nRow = this.ds_InspectionList.rowcount == 1 ? 0 : this.ds_InspectionList.rowposition;

        			this.ds_fileCombo.filter();
        			for(var j=this.ds_fileCombo-1;j >= 0;j--)
        			{
        				if(this.ds_fileCombo.findRow("ATCH_FILE_ID",this.ds_InspectionList.getColumn(nRow,"IMAGERESOURCEID")) > 0);
        					this.ds_fileCombo.deleteRow(j);
        			}

        			for(var i=0;i<this.ds_file.rowcount;i++)
        			{
        				var eRow = this.ds_fileCombo.addRow();
        				this.ds_fileCombo.setColumn(eRow, "OC_FILE_NM", this.ds_file.getColumn(i,"OC_FILE_NM"));
        				this.ds_fileCombo.setColumn(eRow, "ATCH_FILE_GUID", this.ds_file.getColumn(i,"ATCH_FILE_GUID"));
        				this.ds_fileCombo.setColumn(eRow, "ATCH_FILE_ID", this.ds_file.getColumn(i,"ATCH_FILE_ID"));
        			}

        			var filterString = "ATCH_FILE_ID == '" + this.ds_file.getColumn(0,"ATCH_FILE_ID") + "'"
        			this.ds_fileCombo.filter();
        			this.ds_fileCombo.filter(filterString);

        			this.ds_InspectionList.setColumn(nRow,"IMAGERESOURCEID",this.ds_file.getColumn(0,"ATCH_FILE_ID"));
        			this.ds_fileCombo.set_rowposition(0);
        			this.div_work.form.tab.Tabpage2.form.divWork.form.cbo_Image.set_value(this.ds_file.getColumn(0,"ATCH_FILE_GUID"));

        			var upUrl = nexacro.getEnvironment().services["svcurl"].url +"/comm/downImage/" + this.ds_file.getColumn(0,"ATCH_FILE_GUID") + ".do";
        			this.div_work.form.tab.Tabpage2.form.divWork.form.imageViewer.set_image(upUrl);

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
        /*
         * 분할 함수
         */
        this.fn_split = function(obj,e)
        {

        	if(this.nfn_isNull(this.ds_lotInfo.getColumn(0, "LOTID"))) return;

        	var lotId 		= this.ds_lotInfo.getColumn(0, "LOTID");
        	var pnlperqty	= nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PANELPERQTY"),"0"));
        	var lotQty 		= nexacro.toNumber(this.ds_lotInfo.getColumn(0, "PCSQTY"));
        	var uom 		= this.div_work.form.tab.Tabpage1.form.cbo_uom.value;
        	var qty 		= this.div_work.form.tab.Tabpage1.form.spn_qty.value;
        	var chk 		= true;
            var splitQty 	= 0;
        	var count		= 0;
        	var dsObj 		= this.ds_split;
        	var dsLot		= this.ds_lotInfo;

        	if(this.nfn_isNull(uom)) {
        		this.gfn_Message("SelectUOM", null, "warning", "ok");
        		return;
        	}

        	if(this.nfn_isNull(qty) || qty<=0) {
        		this.gfn_Message("PriorityInputSomething", this.nfn_nvl(this.nfn_getDictionarynameUpper("SPLITQTY"),"분할수량"), "warning", "ok");
        		return;
        	}

        	var hiddenLotId = this.ds_lotList.getColumn(this.ds_lotList.rowposition,"LOTID");
         	this.ds_split.filter("");
          	this.ds_split.filter("HIDDEN_LOTID == '" + hiddenLotId + "'");
        	for(var i = this.ds_split.getRowCount(); i>= 0; i--)
        	{
        		if(this.ds_split.getColumn(i,"HIDDEN_LOTID") == hiddenLotId) {
        			this.ds_split.deleteRow(i);
        		}
        	}

        	if (uom=="PNL"){
        		splitQty = nexacro.toNumber(qty) * pnlperqty;
        	} else {
        		splitQty = nexacro.toNumber(qty);
        	}

        // 	if (lotQty <= defectQty)
        // 	{
        // 		// 불량 수량은 Lot 수량보다 많을 수 없습니다. {0}
        // 		this.gfn_Message("LotQtyLargerThanDefectQty", " "+defectQty, "warning", "ok");
        // 		return;
        // 	}
        // 	if(defectQty >= splitQty){
        // 		this.gfn_Message("DefectCountGreatThenLeftQty", " "+defectQty, "warning", "ok");// // 잔량보다 불량수량이 많습니다.
        // 		return;
        // 	}

        	// 분할수량 체크 :: 모 LOT 기준 자LOT의 총 수량 체크
        	if (lotQty <= splitQty)
        	{
        		// 분할 수량
        		this.gfn_Message("SplitQtyLessThanParentQty", null, "info", "ok");	//throw MessageException.Create("SplitQtyLessThanParentQty");
        		return;
        	}

        	while (chk){
        		if (lotQty < splitQty)
        		{
        			chk = false;
        			continue;
        		}

        		var nRow 	= dsObj.addRow();
        		var panelQty = 0;
        		if (count == 0){
        			dsObj.setColumn(nRow, "LOTID", lotId);
        			dsObj.setColumn(nRow, "ISPARENT", "Y");
        		} else {
        			dsObj.setColumn(nRow, "LOTID", "Split-" + count);
        			dsObj.setColumn(nRow, "ISPARENT", "N");
        		}

        		//계산식
        		panelQty =	nexacro.ceil(nexacro.toNumber(splitQty) / nexacro.toNumber(pnlperqty));

        		dsObj.setColumn(nRow, "PRODUCTDEFID", 		dsLot.getColumn(0, "PRODUCTDEFID"));
        		dsObj.setColumn(nRow, "PRODUCTDEFVERSION", 	dsLot.getColumn(0, "PRODUCTDEFVERSION"));
        		dsObj.setColumn(nRow, "PRODUCTDEFNAME", 	dsLot.getColumn(0, "PRODUCTDEFNAME"));
        		dsObj.setColumn(nRow, "UNIT", 				"PCS");
        		dsObj.setColumn(nRow, "PANELQTY", 			panelQty);
        		dsObj.setColumn(nRow, "QTY", 				splitQty);
        		dsObj.setColumn(nRow, "HIDDEN_LOTID", 		lotId);

        		lotQty -= splitQty;
        		count++;

        		// 최종 나머지 수량은 모LOT으로 지정하여 Row 추가
        		if (lotQty <= splitQty && lotQty > 0)
        		{
        			var aRow 	= dsObj.addRow();
        			var aValue 	= 0;
        			aValue =	nexacro.ceil(nexacro.toNumber(lotQty) / nexacro.toNumber(pnlperqty));

        			dsObj.setColumn(aRow, "LOTID", "Split-" + count);
        			dsObj.setColumn(aRow, "ISPARENT", "N");
        			dsObj.setColumn(aRow, "PRODUCTDEFID", 		dsLot.getColumn(0, "PRODUCTDEFID"));
        			dsObj.setColumn(aRow, "PRODUCTDEFVERSION", 	dsLot.getColumn(0, "PRODUCTDEFVERSION"));
        			dsObj.setColumn(aRow, "PRODUCTDEFNAME", 	dsLot.getColumn(0, "PRODUCTDEFNAME"));
        			dsObj.setColumn(aRow, "UNIT", 				"PCS");
        			dsObj.setColumn(aRow, "PANELQTY", 			aValue);
        			dsObj.setColumn(aRow, "QTY", 				lotQty);
        			dsObj.setColumn(aRow, "HIDDEN_LOTID", 		lotId);
        			lotQty -= splitQty;
        			count++;
        		}
        	}

        	var idx = this.ds_xout_chk.findRow("LOTID",this.ds_lotInfo.getColumn(0,"LOTID"));
         	this.ds_xout_chk.setColumn(idx,"SPN_QTY",this.div_work.form.tab.Tabpage1.form.spn_qty.value);

        // 	if(this.nfn_isNull(this.ds_lotInfo.getColumn(0, "LOTID"))) return;
        //
        // 	var parentLotid = this.ds_lotInfo.getColumn(0, "LOTID");
        // 	var lotQty 		= nexacro.toNumber(this.nfn_nvl(this.ds_work.getColumn(0, "GOODQTY"),"0"));
        // 	var splitQty 	= 0;
        // 	var targetQty 	= 0;
        // 	var defectQty = this.ds_InspectionList.getSum("QTY");
        // 	var pnlperqty	= nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PANELPERQTY"),"0"));
        // 	var qty = nexacro.toNumber(this.div_work.form.tab.Tabpage1.form.spn_qty.value);
        // 	var uom 		= this.div_work.form.tab.Tabpage1.form.cbo_uom.value;
        //
        // 	if(this.nfn_isNull(uom)) {
        // 		this.gfn_Message("SelectUOM", null, "warning", "ok");
        // 		return;
        // 	}
        //
        // 	if(this.nfn_isNull(qty) || qty<=0) {
        // 		this.gfn_Message("PriorityInputSomething", this.nfn_nvl(this.nfn_getDictionarynameUpper("SPLITQTY"),"분할수량"), "warning", "ok");
        // 		return;
        // 	}
        // 	if (uom=="PNL")
        // 	{
        // 		splitQty = nexacro.toNumber(qty) * pnlperqty;
        // 	} else {
        // 		splitQty = nexacro.toNumber(qty);
        // 	}
        // 	if (lotQty <= defectQty)
        // 	{
        // 		// 불량 수량은 Lot 수량보다 많을 수 없습니다. {0}
        // 		this.gfn_Message("LotQtyLargerThanDefectQty", " "+defectQty, "warning", "ok");
        // 		return;
        // 	}
        // 	if(defectQty >= splitQty){
        // 		this.gfn_Message("DefectCountGreatThenLeftQty", " "+defectQty, "warning", "ok");// // 잔량보다 불량수량이 많습니다.
        // 		return;
        // 	}
        //
        // 	var chk 		= true;
        //     var count		= 0;
        // 	var dsObj 		= this.ds_split;
        // 	var dsLot		= this.ds_lotInfo;
        //
        // 	//dsObj.clearData();
        //
        // 	var count = this.ds_split.getCaseCount("PARENTLOTID=='"+parentLotid+"'");
        // 	var targetQty = nexacro.toNumber(this.nfn_nvl(this.ds_split.getCaseSum("PARENTLOTID=='"+parentLotid+"'","QTY"),0));
        // 	if(lotQty < targetQty + splitQty)
        // 	{
        // 		// 분할 Lot의 수량은 모 Lot의 수량보다 클 수 없습니다. {0}
        // 		this.gfn_Message("SplitQtyLessThanParentQty", " "+lotQty, "warning", "ok");
        // 		return;
        // 	}
        // 	//grdLotSplit.View.CellValueChanged -= GrdLotSplitView_CellValueChanged;
        // 	this.ds_split.set_enableevent(false);
        // 	var nRow = this.ds_split.addRow();
        // 	this.ds_split.setColumn(nRow, "PARENTLOTID", parentLotid);
        // 	if(count==0){
        // 		this.ds_split.setColumn(nRow, "LOTID", parentLotid);
        // 		this.ds_split.setColumn(nRow, "ISPARENT", "Y");
        // 		this.ds_split.setColumn(nRow, "PANELQTY", nexacro.ceil((splitQty - defectQty) / pnlperqty));
        // 		this.ds_split.setColumn(nRow, "QTY", splitQty - defectQty);
        // 		lotQty -= (splitQty - defectQty);
        // 	}else{
        // 		this.ds_split.setColumn(nRow, "LOTID", "Split-"+count);
        // 		this.ds_split.setColumn(nRow, "ISPARENT", "N");
        // 		this.ds_split.setColumn(nRow, "PANELQTY", nexacro.ceil(splitQty / pnlperqty));
        // 		this.ds_split.setColumn(nRow, "QTY", splitQty);
        // 		lotQty -= splitQty;
        // 	}
        // 	this.ds_split.setColumn(nRow, "PRODUCTDEFID", this.ds_lotInfo.getColumn(0,"PRODUCTDEFID"));
        // 	this.ds_split.setColumn(nRow, "PRODUCTDEFVERSION", this.ds_lotInfo.getColumn(0,"PRODUCTDEFVERSION"));
        // 	this.ds_split.setColumn(nRow, "PRODUCTDEFNAME", this.ds_lotInfo.getColumn(0,"PRODUCTDEFNAME"));
        // 	this.ds_split.setColumn(nRow, "UNIT", "PCS");
        // 	this.fn_SetLotSplitQty();
        // 	this.ds_split.set_enableevent(true);
        	//grdLotSplit.View.CellValueChanged += GrdLotSplitView_CellValueChanged;
        /*
        trace(10000);
        	while (chk){
        		if (lotQty < splitQty)
        		{
        			chk = false;
        			continue;
        		}

        trace(10000);
        		var nRow 	= dsObj.addRow();
        		var panelQty = 0;
        		if (count == 0){
        			dsObj.setColumn(nRow, "LOTID", lotId);
        			dsObj.setColumn(nRow, "ISPARENT", "Y");
        		} else {
        			dsObj.setColumn(nRow, "LOTID", "Split-" + count);
        			dsObj.setColumn(nRow, "ISPARENT", "N");
        		}
        trace(100001);

        		//계산식
        		panelQty =	nexacro.ceil(nexacro.toNumber(splitQty) / nexacro.toNumber(pnlperqty));

        		dsObj.setColumn(nRow, "PRODUCTDEFID", 		dsLot.getColumn(0, "PRODUCTDEFID"));
        		dsObj.setColumn(nRow, "PRODUCTDEFVERSION", 	dsLot.getColumn(0, "PRODUCTDEFVERSION"));
        		dsObj.setColumn(nRow, "PRODUCTDEFNAME", 	dsLot.getColumn(0, "PRODUCTDEFNAME"));
        		dsObj.setColumn(nRow, "UNIT", 				"PCS");
        		dsObj.setColumn(nRow, "PANELQTY", 			panelQty);
        		dsObj.setColumn(nRow, "QTY", 				splitQty);

        		lotQty -= splitQty;
        		count++;
        trace(100002);

        		// 최종 나머지 수량은 모LOT으로 지정하여 Row 추가
        		if (lotQty <= splitQty && lotQty > 0)
        		{
        			var aRow 	= dsObj.addRow();
        			var aValue 	= 0;
        			aValue =	nexacro.ceil(nexacro.toNumber(lotQty) / nexacro.toNumber(pnlperqty));
        trace(100003);

        			dsObj.setColumn(aRow, "LOTID", "Split-" + count);
        			dsObj.setColumn(aRow, "ISPARENT", "N");
        			dsObj.setColumn(aRow, "PRODUCTDEFID", 		dsLot.getColumn(0, "PRODUCTDEFID"));
        			dsObj.setColumn(aRow, "PRODUCTDEFVERSION", 	dsLot.getColumn(0, "PRODUCTDEFVERSION"));
        			dsObj.setColumn(aRow, "PRODUCTDEFNAME", 	dsLot.getColumn(0, "PRODUCTDEFNAME"));
        			dsObj.setColumn(aRow, "UNIT", 				"PCS");
        			dsObj.setColumn(aRow, "PANELQTY", 			aValue);
        			dsObj.setColumn(aRow, "QTY", 				lotQty);
        			lotQty -= splitQty;
        			count++;
        		}
        	}
        */

        };
        this.fn_SetLotSplitQty = function()
        {
        	this.ds_lotSum.clearData();
        	for(var i=0; i<this.ds_split.rowcount; i++){
        		var nRow = this.ds_lotSum.findRow("LOTID",this.ds_split.getColumn(i,"LOTID"));
        		if(nRow<0){
        			nRow = this.ds_lotSum.addRow();
        			this.ds_lotSum.setColumn(nRow,"LOTID",this.ds_split.getColumn(i,"LOTID"));
        			this.ds_lotSum.setColumn(nRow,"SPLITQTY",this.ds_split.getSum("QTY"));
        		}
        	}
        	trace(this.ds_lotSum.saveXML());
        	for(var i=0; i<this.ds_lotSum.rowcount; i++){
        		var nRow = this.ds_lotList.findRow("LOTID",this.ds_lotSum.getColumn(i,"LOTID"));
        	trace("nRow-->"+nRow);
        		this.ds_lotList.setColumn(nRow,"SPLITQTY",this.ds_lotSum.getColumn(i,"SPLITQTY"));
        	}
        }
        /*
         *	사진 등록
         */
        this.fn_attach = function ()
        {
        	var mRow = this.ds_lotList.rowposition;
        	var nRow = this.ds_InspectionList.rowposition;
        	var srcKey = "";
        	if(nRow >= 0 ) {//bind:DEFECTCODE
        		srcKey = this.nfn_nvl(this.ds_InspectionList.getColumn(nRow, "TXNHISTKEY"),"")
        				+ "|" + "FinishInspection"
        			    + "|" + this.ds_InspectionList.getColumn(nRow, "LOTID")
        			    + "|" + this.ds_InspectionList.getColumn(nRow, "DEFECTCODE")
        				+ "|" + this.ds_lotList.getColumn(mRow, "PROCESSSEGMENTID")
        			   ;
        	} else {
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}

        	var jobSysCd = "PCM"; 					//업무구분코드 CMD,BAS....
        	var subDir = ""; 				//세부업무약어
        	var resouceid = srcKey;					//테이블의 키 값
        	var resourcetype = "QAM_INSPECTIONDEFECT"; 	//테이블명
        	var comments = "최종인계등록"; 		//파일설명
        	var fileCnt = null; 					//업로드수
        	var oArg = {arg_jobSysCd:jobSysCd
        				,arg_atchSrcKey:resouceid
        				,arg_tableName:resourcetype
        				,arg_desc:comments
        				,arg_subDir:subDir
        				,arg_fileCnt:fileCnt
        				,ds_file:this.ds_file
        				};
        	this.gfn_openPopup("file_upload","pcm::PCM01500P.xfdl",oArg,"");
        };

        this.mfn_OpenDefectPopup = function ()
        {
        	var mRow = this.ds_lotInfo.rowposition;
        	var nRow = this.ds_InspectionList.rowposition;

        	var popupId = "SEARCH_DEFECT";
        	var lotID = this.ds_lotInfo.getColumn(mRow, "LOTID");
        	var defectID = this.ds_InspectionList.getColumn(nRow,"SEGMENT_DEFECTCODE");
        	var qcSegmentID = this.ds_InspectionList.getColumn(nRow,"QCSEGMENTID");
        	var language = this.gf_getLanguageType();

        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00241";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "DEFECTCODE|DEFECTCODENAME|QCSEGMENTID|QCSEGMENTNAME|DECISIONDEGREE|SEGMENT_DEFECTCODE|SEGMENT_DEFECTNAME";
        	oArg.arg_paramCols = "LOTID|SEGMENTID|LANGUAGETYPE|VERSION";
        	oArg.arg_paramValues = lotID + "|" + qcSegmentID+"|"+this.gf_getLanguageType()+"|10003";
        	oArg.arg_searchStr = this.gfn_isNull(defectID) ? "1=1" : "DEFECTCODENAME=" + defectID ;

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

        	//this.ds_temp.setColumn(0, "LOTID", this.ds_lotList.getColumn(this.ds_lotList.rowposition, "LOTID"));
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

        	//this.ds_temp.setColumn(0, "LOTID", this.ds_lotList.getColumn(this.ds_lotList.rowposition, "LOTID"));
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

        	//this.ds_temp.setColumn(0, "LOTID", this.ds_lotList.getColumn(this.ds_lotList.rowposition, "LOTID"));
        	this.ds_temp.setColumn(0, "LOTID", this.ds_InspectionList.getColumn(this.ds_InspectionList.rowposition, "REASONCONSUMABLELOTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));

        	this.pfn_CostomQueryCSM(this.ds_temp, this.ds_ReasonProcessSegment, "selectDefectReasonProcesssegment");
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.div_work_divSearch_btn_area_onclick = function(obj,e)
        {
        	this.fn_openPop("AREA_ID","P00148", null);
        };

        this.div_work_divSearch_edt_area_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_work_divSearch_btn_area_onclick();
        	}
        };

        this.div_work_divSearch_edt_lotId_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.fn_search();
        	}
        };

        this.div_work_tab_Tabpage2_divWork_cbo_Image_onitemchanged = function(obj,e)
        {
        	var atchFileGuid = e.postvalue;
        	var upUrl = nexacro.getEnvironment().services["svcurl"].url +"/comm/downImage/" + atchFileGuid + ".do";
        	this.div_work.form.tab.Tabpage2.form.divWork.form.imageViewer.set_image(upUrl);
        };

        this.grdInspectionList_oncellclick = function(obj,e)
        {
        	if(e.col==7)
        	//if (e.fromreferenceobject.name == "cellbutton" || e.fromreferenceobject.name == "cellbutton1")
        	{
        		if(this.nfn_isNull(this.ds_InspectionList.getColumn(e.row, "DEFECTCODE")) )
        		{
        			this.gfn_Message("NoDefectCode", "", "warning", "ok");
        			return;
        		}
        		else if (this.ds_InspectionList.getColumn(e.row, "QTY") == 0 )
        		{
        			this.gfn_Message("CheckRegDefectQty", "", "warning", "ok");
        			return;
        		}
        // 		else if(this.nfn_isNull(this.ds_InspectionList.getColumn(e.row, "REASONPROCESSSEGMENTID")) )
        // 		{
        // 			this.gfn_Message("MustInputCauseProcesssegmentId", "", "warning", "ok");
        // 			return;
        // 		}

        		this.fn_attach();
        	}
        };

        this.grdInspectionList_onexpandup = function(obj,e)
        {
        	this.g_event = e;
        	if(e.row <0) return;
        	if (this.nfn_isEqualCol(obj, e.cell, "REASONCONSUMABLELOTID"))
        	{
        		if(e.row < 0) return;
        		/* Form 에서 Grid Cell 기준으로 위치얻기 */
        		var objRect = obj.getCellRect(obj.currentrow, obj.currentcell);

        		/* cell 기준 position으로 클라이언트 기준 X, Y 좌표를 스크린 기준 기준으로 바꾸어 위치얻기 */
        		var nLeft = system.clientToScreenX(obj, objRect.left);
        		var nTop = system.clientToScreenY(obj, objRect.bottom);

        		/* 스크린 기준 X, Y 좌표를 클라이언트 기준으로 바꾸어 위치얻기 */
        		nLeft = system.screenToClientX(nexacro.getApplication().mainframe, nLeft);
        		nTop = system.screenToClientY(nexacro.getApplication().mainframe, nTop);

        		this.pdv_ReasonLotList.form.grd_ReasonLotList.setBindDataset(this.ds_ReasonConsumableLot);
        		this.pdv_ReasonLotList.show();
        		this.pdv_ReasonLotList.trackPopup(nLeft, nTop,  this.pdv_ReasonLotList.width, this.pdv_ReasonLotList.height, "fn_Callback_pdv_ReasonLotList");

        	}

        	if (this.nfn_isEqualCol(obj, e.cell, "SEGMENT_DEFECTCODE"))
        	{
        		this.mfn_OpenDefectPopup();
        	}
        	else if (this.nfn_isEqualCol(obj, e.cell, "CONSUMABLEDEFNAME"))
        	{
        		if(e.row < 0) return;
        		/* Form 에서 Grid Cell 기준으로 위치얻기 */
        		var objRect = obj.getCellRect(obj.currentrow, obj.currentcell);

        		/* cell 기준 position으로 클라이언트 기준 X, Y 좌표를 스크린 기준 기준으로 바꾸어 위치얻기 */
        		var nLeft = system.clientToScreenX(obj, objRect.left);
        		var nTop = system.clientToScreenY(obj, objRect.bottom);

        		/* 스크린 기준 X, Y 좌표를 클라이언트 기준으로 바꾸어 위치얻기 */
        		nLeft = system.screenToClientX(nexacro.getApplication().mainframe, nLeft);
        		nTop = system.screenToClientY(nexacro.getApplication().mainframe, nTop);

        		this.pdv_ReasonConsumableList.form.grd_ReasonConsumableList.setBindDataset(this.ds_ReasonConsumableList);
        		this.pdv_ReasonConsumableList.show();
        		this.pdv_ReasonConsumableList.trackPopup(nLeft, nTop,  this.pdv_ReasonConsumableList.width, this.pdv_ReasonConsumableList.height, "fn_Callback_pdv_ReasonConsumableList");

        	} else if (this.nfn_isEqualCol(obj, e.cell, "REASONPROCESSSEGMENTNAME"))
        	{
        		//this.GetDefectReasonProcesssegment();

        		if(e.row < 0) return;

        		/* Form 에서 Grid Cell 기준으로 위치얻기 */
        		var objRect = obj.getCellRect(obj.currentrow, obj.currentcell);

        		/* cell 기준 position으로 클라이언트 기준 X, Y 좌표를 스크린 기준 기준으로 바꾸어 위치얻기 */
        		var nLeft = system.clientToScreenX(obj, objRect.left);
        		var nTop = system.clientToScreenY(obj, objRect.bottom);

        		/* 스크린 기준 X, Y 좌표를 클라이언트 기준으로 바꾸어 위치얻기 */
        		nLeft = system.screenToClientX(nexacro.getApplication().mainframe, nLeft);
        		nTop = system.screenToClientY(nexacro.getApplication().mainframe, nTop);
        		this.pdv_ReasonProcessSegment.form.grd_ReasonProcessSegment.setBindDataset(this.ds_ReasonProcessSegment);
        		if(this.nfn_isNull(this.ds_InspectionList.getColumn(this.g_event.row,"REASONCONSUMABLELOTID"))==false && this.ds_InspectionList.getColumn(this.g_event.row,"REASONCONSUMABLELOTID") != ""){
        			this.ds_ReasonProcessSegment.filter("REASONCONSUMABLELOTID == '" + this.ds_InspectionList.getColumn(this.g_event.row,"REASONCONSUMABLELOTID") + "'");
        		} else {
        			this.ds_ReasonProcessSegment.filter("");
        		}
        		this.pdv_ReasonProcessSegment.show();
        		this.pdv_ReasonProcessSegment.trackPopup(nLeft, nTop,  this.pdv_ReasonProcessSegment.width, this.pdv_ReasonProcessSegment.height, "fn_Callback_pdv_ReasonProcessSegment");

        	}
        };

        this.ds_InspectionList_oncolumnchanged = function(obj,e)
        {
        	trace("columnid==" + e.columnid);
        	trace("newvalue==" + e.newvalue);
        	if(e.newvalue < 0 ) return;
        	switch(e.columnid) {
        	case "SPLITCONSUMABLEDEFIDVERSION":
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
        			this.btnAddRow_ds_InspectionList_onclick();
        		}
        		this.fn_SetChangeGoodDefectQty();
        		break;
        	case "QTY" :
        		this.mfn_defectChangePcsQty(e.newvalue);
        		if(this.pnlQty_enter)
        		{
        			this.btnAddRow_ds_InspectionList_onclick();
        		}
        		this.fn_SetChangeGoodDefectQty();
        		break;
        	default:
        	}


        };

        // ▶ 양품, 불량수량 변경 |
        this.fn_SetChangeGoodDefectQty = function()
        {
        	var lotId = this.ds_lotList.getColumn(this.ds_lotList.rowposition,"LOTID");
        	var idx = this.ds_xout_chk.findRow("LOTID",lotId);
        	var defectQtyByLot = this.nfn_nvl(this.ds_InspectionList.getCaseSum("LOTID=='"+lotId+"'","QTY"),0);
        	this.ds_xout_chk.setColumn(idx,"QTY",this.nfn_nvl(this.ds_lotInfo.getColumn(0,"PCSQTY"),0) - defectQtyByLot);
        	this.ds_xout_chk.setColumn(idx,"X_OUT_GOODQTY",this.nfn_nvl(this.ds_xout.getCaseSum("LOTID=='"+lotId+"'","GOODQTY"),0));
        	this.ds_xout_chk.setColumn(idx,"X_OUT_DEFECTQTY",this.nfn_nvl(this.ds_xout.getCaseSum("LOTID=='"+lotId+"'","DEFECTQTY"),0));

        	var sumQty = this.ds_InspectionList.getSum("QTY");
        	idx = this.ds_work_copy.findRow("LOTID",lotId);
        	this.ds_work_copy.setColumn(idx,"GOODQTY", this.nfn_nvl(this.ds_lotInfo.getColumn(0,"PCSQTY"),0) - sumQty);
        	this.ds_work_copy.setColumn(idx,"DEFECTQTY",sumQty);

        //	trace("this.ds_work_copy.saveXML()=======>"+this.ds_work_copy.saveXML());
        	this.div_work.form.div_00.form.msk_GoodQty.set_value(this.ds_work_copy.getColumn(idx,"GOODQTY"));
        	this.div_work.form.div_00.form.msk_DefectQty.set_value(this.ds_work_copy.getColumn(idx,"DEFECTQTY"));
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


        /*
         *	검사 결과 등록 탭에 검사 수량 입력 시 이벤트.
         */
        this.ds_LotQty_oncolumnchanged = function(obj,e)
        {
        	if(e.row < 0) return;
        	try{

        		this.ds_LotQty.set_enableevent(false);
        		this.ds_InspectionList.set_enableevent(false);

        		var mRow = this.ds_lotList.rowcount == 1 ? 0 : this.ds_lotList.rowposition;

        		this.defectProcessListControl_SetGridQtyClear();

        		var pcsPnl = nexacro.round(this.ds_lotList.getColumn(mRow, "PCSPNL"));
        		if(e.columnid == "INSPECTIONQTY")
        		{
        			if(e.row == 0) this.Defect.inspectQty = e.newvalue * pcsPnl;
        			else  this.Defect.inspectQty = e.newvalue ;
        		}

        		switch(e.row) {
        		case 0://PNL Row
        			var pnlQty = nexacro.toNumber(this.ds_LotQty.getColumn(0, "INSPECTIONQTY"));
        			var result = this.mfn_ChangePnlQty(pnlQty, pcsPnl); // pnlQty * pcsPnl;
        			this.ds_LotQty.setColumn(0,"INSPECTIONQTY",result);
        			break;
        		case 1://PCS Row
        			var pcsQty = nexacro.toNumber(this.ds_LotQty.getColumn(0, "INSPECTIONQTY"));
        			var result = this.mfn_ChangePcsQty(pcsQty, pcsPnl); // pcsQty / pcsPnl
        			this.ds_LotQty.setColumn(0,"INSPECTIONQTY",result);
        			break;
        		default:
        		}
        	}
        	catch(ec)
        	{
        		trace("ds_lotList_canrowposchange ? " + ec.toString());
        		this.ds_LotQty.setColumn(e.row,e.col,e.oldvalue);
        	}
        	this.ds_LotQty.getAvg()
        	this.ds_LotQty.set_enableevent(true);
        	this.ds_InspectionList.set_enableevent(true);
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
        	var pcsPnl	 	= nexacro.toNumber(this.ds_lotList.getColumn(fRow, "PCSPNL"));


        	var pnlQty 		= nexacro.ceil(pcsQty / pcsPnl);
        	var defectRate 	= 0;
        	var qty 		= (pnlPerQty * pnlQty);
        	var lotQty 		= nexacro.toNumber(this.ds_lotList.getColumn(fRow, "QTY"));

        	trace("pcsQty===" + pcsQty);
        	trace("pcsPnl===" + pcsPnl);

         	this.ds_InspectionList.setColumn(this.ds_InspectionList.rowposition, "PNLQTY", pnlQty);
         	this.ds_InspectionList.setColumn(this.ds_InspectionList.rowposition, "DEFECTRATE", (pcsQty / lotQty) * 100);
         	this.ds_InspectionList.set_enableevent(true);
         	var total = nexacro.toNumber(this.ds_InspectionList.getCaseSum("LOTID=='"+lotId+"'","QTY"));
         	this.ds_lotList.setColumn(fRow, "DEFECTQTY" ,total);
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
         	var total = nexacro.toNumber(this.ds_InspectionList.getCaseSum("LOTID=='"+lotId+"'","QTY"));
         	this.ds_lotList.set_enableevent(false);
         	this.ds_lotList.setColumn(fRow, "DEFECTQTY" ,total);
         	this.ds_lotList.set_enableevent(true);
        };

        this.ds_InspectionList_onrowposchanged = function(obj,e)
        {
        	var nRow = this.ds_InspectionList.rowcount == 1 ? 0 : this.ds_InspectionList.rowposition;

        	var filterString = "ATCH_FILE_ID == '" + this.ds_InspectionList.getColumn(nRow,"IMAGERESOURCEID") + "'"
        	this.ds_fileCombo.filter();
        	this.ds_fileCombo.filter(filterString);

        	if(this.ds_fileCombo.rowcount > 0)
        	{
        		var atchFileGuid = this.ds_fileCombo.getColumn(0,"ATCH_FILE_GUID");
        		var upUrl = nexacro.getEnvironment().services["svcurl"].url +"/comm/downImage/" + atchFileGuid + ".do";
        		this.div_work.form.tab.Tabpage2.form.divWork.form.imageViewer.set_image(upUrl);
        		this.div_work.form.tab.Tabpage2.form.divWork.form.cbo_Image.set_value(atchFileGuid);
        	}
        	else
        	{
        		this.div_work.form.tab.Tabpage2.form.divWork.form.cbo_Image.set_value("");
        		this.div_work.form.tab.Tabpage2.form.divWork.form.imageViewer.set_image("");
        	}

        };

        this.fn_deleteDefect = function(obj,e)
        {
        	this.ds_InspectionList.deleteRow(this.ds_InspectionList.rowposition);

        	//삭제수량 보정을 위해 재계산
        	this.ds_lotList.set_enableevent(false);
        	for(var i=0; i<this.ds_lotList.rowcount;i++){
        		var lotId 	= this.ds_lotList.getColumn(i, "LOTID");
        		var sum 	= this.ds_InspectionList.getCaseSum("LOTID=='"+lotId+"'","QTY");
        		this.ds_lotList.setColumn(i, "DEFECTQTY" ,sum);
        	}
         	this.ds_lotList.set_enableevent(true);
        };

        this.btnAddRow_ds_InspectionList_onclick = function(obj,e)
        {
        	if(this.ds_lotList.rowcount == 0)
        	{
        		this.gfn_Message("NotSeletedLot", "", "warning", "ok");
        		return;
        	}

        	this.ds_InspectionList.set_enableevent(false);
        	var lotId	= this.ds_lotList.getColumn(this.ds_lotList.rowposition, "LOTID");
        	var nRow = this.ds_InspectionList.addRow();
        	this.ds_InspectionList.setColumn(nRow, "LOTID", lotId);

        	this.ds_InspectionList.setColumn(nRow,"REASONCONSUMABLEDEFID","");
        	this.ds_InspectionList.setColumn(nRow,"REASONCONSUMABLEDEFVERSION","");
        	this.ds_InspectionList.setColumn(nRow,"REASONCONSUMABLELOTID","");
        	this.ds_InspectionList.setColumn(nRow,"REASONPROCESSSEGMENTID","");
        	this.ds_InspectionList.setColumn(nRow,"REASONAREAID","");
        // 	this.div_work.form.tab.Tabpage1.form.grdInspectionList.setCellPos(1);
        //   	this.div_work.form.tab.Tabpage1.form.grdInspectionList.showEditor(true);
         	this.ds_InspectionList.set_enableevent(true);
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

        	this.ds_InspectionList.setColumn(sRow,"SPLITCONSUMABLEDEFIDVERSION",idver);
        	this.ds_InspectionList.setColumn(sRow,"CONSUMABLEDEFNAME",prodName);
        	this.ds_InspectionList.setColumn(sRow,"REASONCONSUMABLEDEFID",prodID);
        	this.ds_InspectionList.setColumn(sRow,"REASONCONSUMABLEDEFVERSION",prodVer);

        	this.ds_ReasonConsumableLot.filter("LOTID=='"+this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"LOTID")+"'");

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
        this.div_work_tab_Tabpage2_divWork_grdInspectionList_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) this.pnlQty_enter = true;
        	if(obj.currentcol==1){
        		if(e.keycode == 13)
        		{
        			this.pnlQty_enter = true;
        			obj.moveToNextCell();
        			this.mfn_OpenDefectPopup();
        			return;
        		}else if(e.keycode >=96 && e.keycode <= 105){
        			this.pnlQty_enter = true;
        			var nRow = obj.currentrow;
        			this.ds_InspectionList.setColumn(nRow,"SEGMENT_DEFECTNAME","");
        		}
        	}
        };

        this.ds_split_onvaluechanged = function(obj,e)
        {
        	if(e.columnid!="QTY" && e.columnid!="PANELQTY") return;
        //	if(bStop) return;
        trace("e.columnid-->"+e.columnid);
        	obj.set_enableevent(false);
        	// Panel별 단위 수량 조회
        	var pnlperqty = 0;
        	if(this.ds_lotInfo.rowcount < 0) return;
        	pnlperqty =  nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0,"PANELPERQTY"),"0"));
        	var lotQty = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0,"PCSQTY"),"0"));

        	var uom 		= this.div_work.form.tab.Tabpage1.form.cbo_uom.value;
        	if(this.nfn_isNull(uom)) {
        		this.gfn_Message("SelectUOM", null, "warning", "ok");
        		return;
        	}

        	if(e.columnid ="QTY"){
        		obj.setColumn(e.row, "PANELQTY",  nexacro.ceil(nexacro.toNumber(e.newvalue) / nexacro.toNumber(pnlperqty))) ;
        	}
        	if(e.columnid=="PANELQTY"){
        		obj.setColumn(e.row, "QTY", nexacro.ceil(nexacro.toNumber(e.newvalue) * nexacro.toNumber(pnlperqty))) ;
        	}


        	var pcsRT = this.ds_split.getSum("QTY");
        	if(pcsRT > lotQty){
        		this.gfn_Message("SplitQtyLessThanParentQty", null, "warning", "ok");
        		obj.setColumn(e.row, "PANELQTY", 0);
        		obj.setColumn(e.row, "QTY", 0);
        	}
        //	bStop = true;
        	obj.set_enableevent(true);
        };

        this.div_work_tab_Tabpage1_btn_delRow_ds_split_onclick = function(obj,e)
        {
        	if(this.ds_split.findRow("CHK","1")<0) return;
        	this.fn_SetLotSplitQty();
        };

        this.ds_xout_oncolumnchanged = function(obj,e)
        {
        /*  X-out 내용 입니다.
          X-out: 입력
          Card(어레이수) : 입력
          양품   : 계산식 : ( 합수 - X_out ) * Card
          불량   : 계산식 : (합수 * Card) - 양품
          * 합수 : 기준정보*/
          if(e.columnid=="X_OUT" || e.columnid=="CARD"){
        	var pcsary = nexacro.toNumber(this.nfn_nvl(this.div_work.form.tab.Tabpage6.form.msk_PCSARY.value,0));
        //	var pcsary = nexacro.toNumber(this.nfn_nvl(this.ds_lotInfo.getColumn(0,"PCSARY"),0));

        	obj.setColumn(e.row, "GOODQTY", (pcsary - obj.getColumn(e.row,"X_OUT")) * obj.getColumn(e.row,"CARD"));
        	obj.setColumn(e.row, "DEFECTQTY", pcsary * obj.getColumn(e.row,"CARD") - obj.getColumn(e.row,"GOODQTY"));

        	var lotId = this.ds_lotList.getColumn(this.ds_lotList.rowposition,"LOTID");
        	var idx = this.ds_xout_chk.findRow("LOTID",lotId);

        // 	var xoutGoodQtyByLot = this.nfn_nvl(this.ds_xout.getCaseSum("LOTID=='"+lotId+"'","GOODQTY"),0);
        // 	var xoutDefectQtyByLot = this.nfn_nvl(this.ds_xout.getCaseSum("LOTID=='"+lotId+"'","DEFECTQTY"),0);
        	this.ds_xout_chk.setColumn(idx,"X_OUT_GOODQTY",this.nfn_nvl(obj.getCaseSum("LOTID=='"+lotId+"'","GOODQTY"),0));
        	this.ds_xout_chk.setColumn(idx,"X_OUT_DEFECTQTY",this.nfn_nvl(obj.getCaseSum("LOTID=='"+lotId+"'","DEFECTQTY"),0));

        	trace("this.ds_xout_chk.saveXML()===>"+ this.ds_xout_chk.saveXML());
          }
        };

        this.div_work_tab_Tabpage6_btn_addRow_onclick = function(obj,e)
        {
        	if(this.ds_lotInfo.rowcount==0) return;
        	if(this.gfn_isNull(this.div_work.form.tab.Tabpage6.form.msk_PCSARY.value) || nexacro.toNumber(this.nfn_nvl(this.div_work.form.tab.Tabpage6.form.msk_PCSARY.value,0)) == 0){
        		this.gfn_Message("합수가 0입니다 합수를 확인하세요.", null, "info", "ok");
        		return;
        	}
        	if(this.gfn_isNull(this.div_work.form.tab.Tabpage6.form.edt_WEEK.value)){
        		this.gfn_Message("InputSomeThing", "WEEK", "info", "ok");
        		return;
        	}
        	if(this.ds_xout_h.findRow("LOTID",this.ds_lotInfo.getColumn(0,"LOTID"))<0){
        		var nRow = this.ds_xout_h.addRow();
        		this.ds_xout_h.setColumn(nRow,"LOTID",this.ds_lotInfo.getColumn(0,"LOTID"));
        		this.ds_xout_h.setColumn(nRow,"INSPECTOR",this.ds_lotInfo.getColumn(0,"AREAID"));
        		this.ds_xout_h.setColumn(nRow,"PCSARY",this.ds_lotInfo.getColumn(0,"PCSARY"));
        		this.ds_xout_h.setColumn(nRow,"GOODQTY",this.ds_work.getColumn(0,"GOODQTY"));
        		this.ds_xout_h.setColumn(nRow,"WEEK",this.div_work.form.tab.Tabpage6.form.edt_WEEK.value);
        	}
        	var nRow = this.ds_xout.addRow();
        	this.ds_xout.setColumn(nRow,"LOTID",this.ds_lotInfo.getColumn(0,"LOTID"));
        	this.ds_xout.setColumn(nRow,"X_OUT",0);
        	this.ds_xout.setColumn(nRow,"CARD",0);
        	this.ds_xout.setColumn(nRow,"GOODQTY",0);
        	this.ds_xout.setColumn(nRow,"DEFECTQTY",0);
        	this.ds_xout.setColumn(nRow,"WEEK",this.div_work.form.tab.Tabpage6.form.edt_WEEK.value);

        };

        this.div_work_tab_Tabpage6_btn_report_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.div_work.form.tab.Tabpage6.form.edt_WEEK.value)){
        		this.gfn_Message("InputSomeThing", "WEEK", "info", "ok");
        		return;
        	}
        	if (!this.gfn_GridKeyCheck(this.div_work.form.tab.Tabpage6.form.grd_xout, ["X_OUT", "CARD"]))
        	{
        		return;
        	}


        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveXout";
        	var sController 	= "/pcm07200/saveXout.do";
        	var sInDatasets 	= "xout_h=ds_xout_h xout=ds_xout";
        	var sOutDatasets 	= "ds_xout_h=xout_h ds_xout=xout";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.div_work_tab_Tabpage6_grd_xout_onkeydown = function(obj,e)
        {
        	if(e.keycode==13) obj.moveToNextCell();
        };

        this.div_work_tab_Tabpage6_edt_WEEK_onchanged = function(obj,e)
        {
        	var nRow = this.ds_xout_h.findRow("LOTID",this.ds_lotInfo.getColumn(0,"LOTID"));
        	if(nRow>=0){
        		this.ds_xout_h.setColumn(nRow,"WEEK",e.postvalue);
        	}
        	for(var i=0; i<this.ds_xout.rowcount; i++){
        		this.ds_xout.setColumn(i,"WEEK",e.postvalue);
        	}
        };

        this.div_work_grd_lot_onheadclick = function(obj,e)
        {
        	//헤더 체크박스 이벤트 강제 호출
        	// Grid 전체선택/해제(Header에 checkbox있는 Grid에만 추가
        	this.gfn_setGridCheckAll(obj, e);
        };

        this.ds_lotList_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 0 ) return;
        	/*
        	if (this.gfn_dsIsUpdated(this.ds_split))
        	{
        		var bOK = this.gfn_Message("IsChangedButContinue", null, "conf", "yesno");//변경된 데이터가 있습니다. 계속하시겠습니까?
        		if (bOK == false) return;
        	}
        	*/
        	/*
        	for(var i=0; i<this.ds_lotList.count; i++){
        		this.ds_lotList.setColumn(i,"CHK","0");
        	}
        	this.ds_lotList.setColumn(e.row,"CHK","1");
        	*/
        	//var isCheck = this.ds_lotList.getColumn(e.row, "CHK");
        	//if(isCheck =="1"){
        	//	this.ds_lotList.setColumn(e.row, "CHK", "");
        	//} else {
        		this.ds_lotList.setColumn(e.newrow, "CHK", "1");
        	//}
        	this.ds_lotInfo.clearData();
        	//this.ds_split.clearData();
        	//this.ds_work.clearData();
        	this.ds_comment.clearData();	//특기사항
        	this.ds_operationSpec.clearData();	//공정SPEC
        	this.div_work.form.tab.Tabpage2.form.divWork.form.imageViewer.set_image("");
        //this.ds_xout.clearData();
        	//this.div_work.form.tab.Tabpage6.form.edt_WEEK.set_value("");

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 	this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID", 			this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 	this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "RESOURCETYPE",		"Resource");
        	this.ds_search.setColumn(0, "PROCESSSTATE",		Constants.WaitForSend);
        	this.ds_search.setColumn(0, "LOTID", 			this.ds_lotList.getColumn(e.newrow,"LOTID"));
        	this.ds_search.setColumn(0, "AREAID", 			this.div_work.form.divSearch.form.edt_area_id.value);
        	this.ds_search.setColumn(0, "EQUIPMENTTYPE",			"Production");
        	this.ds_search.setColumn(0, "DETAILEQUIPMENTTYPE",		"Main");
        	this.ds_search.setColumn(0, "INSPECTIONCLASSID",		"FinishInspection");

        	var sSvcID 			= "SelectLotInfoByProcess1";
        	var sController 	= "/pcm07200/SelectLotInfoByProcess.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_work=output ds_lotInfo=ds_lotInfo ds_comment=ds_comment ds_operationSpec=ds_operationSpec ds_transitArea=ds_transitArea ds_ReasonConsumableList=ds_ReasonConsumableList ds_ReasonConsumableLot=ds_ReasonConsumableLot ds_ReasonProcessSegment=ds_ReasonProcessSegment ds_NcrList=ds_NcrList";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        //동일한 코드끼리 Merge해주는 함수
        this.fn_mergeInspectionData = function()
        {
        	this.ds_InspectionListLast.clearData();

        	for(var i=0; i<this.ds_InspectionList.rowcount; i++){
        		var lotId 					= this.ds_InspectionList.getColumn(i, "LOTID");
        		var defectCode 				= this.nfn_nvl(this.ds_InspectionList.getColumn(i, "SEGMENT_DEFECTCODE"),"");
        		var reasonConsumDefId 		= this.nfn_nvl(this.ds_InspectionList.getColumn(i, "REASONCONSUMABLEDEFID"),"");
        		var reasonConsumDefVersion 	= this.nfn_nvl(this.ds_InspectionList.getColumn(i, "REASONCONSUMABLEDEFVERSION"),"");
        		var reasonLotId 			= this.nfn_nvl(this.ds_InspectionList.getColumn(i, "REASONCONSUMABLELOTID"),"");
        		var reasonProcessSegmentId 	= this.nfn_nvl(this.ds_InspectionList.getColumn(i, "REASONPROCESSSEGMENTID"),"");
        		var reasonAreaId 			= this.nfn_nvl(this.ds_InspectionList.getColumn(i, "REASONAREAID"),"");
        		var qty 					= nexacro.toNumber(this.nfn_nvl(this.ds_InspectionList.getColumn(i, "QTY"),"0"));
        		var pnlQty 					= nexacro.toNumber(this.nfn_nvl(this.ds_InspectionList.getColumn(i, "PNLQTY"),"0"));

        		var expr = "LOTID=='"+lotId+"'"+ " && SEGMENT_DEFECTCODE=='"+defectCode+"'";
        		//if(!this.nfn_isNull(reasonConsumDefId)){
        			expr +=  " && REASONCONSUMABLEDEFID=='"+reasonConsumDefId+"'"
        		//}
        		//if(!this.nfn_isNull(reasonConsumDefVersion)){
        			expr +=  " && REASONCONSUMABLEDEFVERSION=='"+reasonConsumDefVersion+"'"
        		//}
        		//if(!this.nfn_isNull(reasonLotId)){
        			expr +=  " && REASONCONSUMABLELOTID=='"+reasonLotId+"'"
        		//}
        		//if(!this.nfn_isNull(reasonProcessSegmentId)){
        			expr +=  " && REASONPROCESSSEGMENTID=='"+reasonProcessSegmentId+"'"
        		//}

        		trace("expr=========" + expr);
        		var fRow = this.ds_InspectionListLast.findRowExpr(expr);
        		trace("fRow=========" + fRow);
        		if(fRow<0){
        			var nRow = this.ds_InspectionListLast.addRow();
        			this.ds_InspectionListLast.copyRow(nRow, this.ds_InspectionList, i);
        		} else {
        			var qtySum 					= nexacro.toNumber(this.ds_InspectionListLast.getColumn(fRow, "QTY"));
        			var pnlQtySum				= nexacro.toNumber(this.ds_InspectionListLast.getColumn(fRow, "PNLQTY"));
        			this.ds_InspectionListLast.setColumn(fRow, "QTY", qtySum+qty);
        			this.ds_InspectionListLast.setColumn(fRow, "PNLQTY", pnlQtySum+pnlQty);
        		}
        	}

        	this.ds_InspectionList.set_enableevent(false);
        	this.ds_InspectionList.copyData(this.ds_InspectionListLast);
        	this.ds_InspectionList.set_enableevent(true);
        };

        this.div_work_tab_Tabpage1_cbo_uom_onitemchanged = function(obj,e)
        {
         	var idx = this.ds_xout_chk.findRow("LOTID",this.ds_lotInfo.getColumn(0,"LOTID"));
         	this.ds_xout_chk.setColumn(idx,"UNIT",this.div_work.form.tab.Tabpage1.form.cbo_uom.value);
        };

        this.fn_getEmailAddrList = function()
        {
        	this.ds_emailList.clearData();
        	var sSvcID 			= "selectEmailList";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_emailList=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("SQL_ID", "selectEmailList");
        		sArgs 			+= this.gfn_setParam("USERGROUPID", "NCREmail");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, false); //동기 호출
        }

        this.fn_sendMail = function()
        {
        	var addrList 		= new Array();
        	var userList 		= new Array();
        	var userIdList 		= new Array();
        	var userJikwiList 	= new Array();
        	var userDeptList 	= new Array();
        	var userUserGrpList = new Array();
        	var lotDefectNameContents	= "";
        	var title 			= this.nfn_nvl(this.nfn_getDictionarynameUpper("FINISHABNORMALTITLE"),"최종검사 부적합 발행");
        	var html			= this.fn_getMailContents();

        	for(var i=0; i<this.ds_emailList.rowcount; i++){
        		addrList[i] 		= this.ds_emailList.getColumn(i, "EMAIL_ADDR");
        		userList[i] 		= this.ds_emailList.getColumn(i, "USERID");
        		userIdList[i] 		= this.ds_emailList.getColumn(i, "USER_NM");
        		userDeptList[i] 	= this.ds_emailList.getColumn(i, "DEPT_NM");
        		userJikwiList[i] 	= this.ds_emailList.getColumn(i, "JIKWI_NM");
        		userUserGrpList[i] 	= this.ds_emailList.getColumn(i, "USERGROUPNAME");
        	}

        	//title 수정
        	var popupId = "EMAIL";
        	var oArg = {
        		subject : title,	 //제목
        		contents : "<div>"+html+"</div>",	//메일내용
        		objAddrList 	: addrList,  		//수신자 배열
        		objUserList 	: userList,  		//수신자명 배열
        		objUserIdList 	: userIdList,  		//수신자ID 배열
        		objDeptList 	: userDeptList,  	//수신부서 배열
        		objJikwiList 	: userJikwiList,  	//수신직위 배열
        		objUserGrpList 	: userUserGrpList   //수신사용자그룹 배열
        		};
        	this.gfn_openPopup(popupId,"cmd::CMAM00100P.xfdl",oArg,"width=790,height=790");
        };


        this.fn_getMailContents = function()
        {
        	var blankStr				= "&nbsp;";
        	var dsLot					= this.ds_lotList;
        	var dsObj					= this.ds_mail;
        	var title 					= this.nfn_nvl(this.nfn_getDictionarynameUpper("FINISHABNORMALTITLE"),"최종검사 부적합 발행");
        	var userId					= this.gf_getUserId();
        	var languageType			= this.gf_getLanguageType();
        	var processSegmentName		= "";
        	var areaName				= "";
        	var productDefName			= "";
        	var productDefId			= "";
        	var productDefRev			= "";
        	var lotId					= "";
        	var defectName				= "";
        	var result					= "";
        	// Defect 정보
        	for(var i=0; i <this.ds_lotList.rowcount; i++){
        		var chk	= this.ds_lotList.getColumn(i, "CHK");
        		var lotDefectNameContents	= "";
        		lotId					= this.ds_lotList.getColumn(i, "LOTID");
        		var lotDefectCnt = this.ds_mail.getCaseCount("LOTID=='" + lotId + "'");
        		if(chk=="1" && lotDefectCnt > 0){
        		contents				= "○{0}:{1}<br/>"
        	                            + "○{2}:{3}<br/>"
                                        + "○{4}({5}/{6}):{7}({8}/{9})<br/>"
                                        + "○{10}:{11}<br/>"
                                        + "○{12}:{13}<br/>";
        			processSegmentName		= this.ds_lotList.getColumn(i, "PROCESSSEGMENTNAME");
        			areaName				= this.ds_lotList.getColumn(i, "AREANAME");
        			productDefName			= this.ds_lotList.getColumn(i, "PRODUCTDEFNAME");
        			productDefId			= this.ds_lotList.getColumn(i, "PRODUCTDEFID");
        			productDefRev			= this.ds_lotList.getColumn(i, "PRODUCTDEFVERSION");


        			// Defect 정보
        			for(var j=0; j <this.ds_mail.rowcount; j++){
        				var defectLotId	= this.ds_mail.getColumn(j, "LOTID");
        				if(defectLotId==lotId){
        					lotDefectNameContents += this.ds_mail.getColumn(j, "DEFECTINFO") + "</br>";
        				}
        			}

        			// Mail Contents 생성
        			contents = contents.replace("{0}", this.nfn_nvl(this.nfn_getDictionarynameUpper("STANDARDSEGMENT"),"표준공정"));
        			contents = contents.replace("{1}", this.nfn_nvl(processSegmentName,blankStr));
        			contents = contents.replace("{2}", this.nfn_nvl(this.nfn_getDictionarynameUpper("AREA"),"작업장"));
        			contents = contents.replace("{3}", this.nfn_nvl(areaName,blankStr));
        			contents = contents.replace("{4}", this.nfn_nvl(this.nfn_getDictionarynameUpper("PRODUCTDEFNAME"),"품목명"));
        			contents = contents.replace("{5}", this.nfn_nvl(this.nfn_getDictionarynameUpper("PRODUCTDEFID"),"품목코드"));
        			contents = contents.replace("{6}", this.nfn_nvl(this.nfn_getDictionarynameUpper("PRODUCTDEFVERSION"),"Rev."));
        			contents = contents.replace("{7}", this.nfn_nvl(productDefName,blankStr));
        			contents = contents.replace("{8}", this.nfn_nvl(productDefId,blankStr));
        			contents = contents.replace("{9}", this.nfn_nvl(productDefRev,blankStr));
        			contents = contents.replace("{10}", this.nfn_nvl(this.nfn_getDictionarynameUpper("LOTID"),"Lot No"));
        			contents = contents.replace("{11}", this.nfn_nvl(lotId,blankStr));
        			contents = contents.replace("{12}", this.nfn_nvl(this.nfn_getDictionarynameUpper("DEFECTNAME"),"불량명"));
        			contents = contents.replace("{13}", this.nfn_nvl(lotDefectNameContents,blankStr));
        			result += contents+"<br/>";
        		}
        	}
        	return result;
        }
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
            this.div_work.form.divSearch.form.edt_lotId.addEventHandler("onkeydown",this.div_work_divSearch_edt_lotId_onkeydown,this);
            this.div_work.form.tab.Tabpage1.form.btn_delRow_ds_split.addEventHandler("onclick",this.div_work_tab_Tabpage1_btn_delRow_ds_split_onclick,this);
            this.div_work.form.tab.Tabpage1.form.cbo_uom.addEventHandler("onitemchanged",this.div_work_tab_Tabpage1_cbo_uom_onitemchanged,this);
            this.div_work.form.tab.Tabpage1.form.btn_split.addEventHandler("onclick",this.fn_split,this);
            this.div_work.form.tab.Tabpage1.form.grd_lotSplit.addEventHandler("onheadclick",this.div_work_tab_Tabpage1_grd_lotSplit_onheadclick,this);
            this.div_work.form.tab.Tabpage2.form.divWork.form.grdInspectionList.addEventHandler("oncellclick",this.grdInspectionList_oncellclick,this);
            this.div_work.form.tab.Tabpage2.form.divWork.form.grdInspectionList.addEventHandler("onexpandup",this.grdInspectionList_onexpandup,this);
            this.div_work.form.tab.Tabpage2.form.divWork.form.grdInspectionList.addEventHandler("onkeydown",this.div_work_tab_Tabpage2_divWork_grdInspectionList_onkeydown,this);
            this.div_work.form.tab.Tabpage2.form.divWork.form.btnAddRow_ds_InspectionList.addEventHandler("onclick",this.btnAddRow_ds_InspectionList_onclick,this);
            this.div_work.form.tab.Tabpage2.form.divWork.form.cbo_Image.addEventHandler("onitemchanged",this.div_work_tab_Tabpage2_divWork_cbo_Image_onitemchanged,this);
            this.div_work.form.tab.Tabpage6.form.grd_xout.addEventHandler("onkeydown",this.div_work_tab_Tabpage6_grd_xout_onkeydown,this);
            this.div_work.form.tab.Tabpage6.form.edt_WEEK.addEventHandler("onchanged",this.div_work_tab_Tabpage6_edt_WEEK_onchanged,this);
            this.div_work.form.tab.Tabpage6.form.btn_addRow.addEventHandler("onclick",this.div_work_tab_Tabpage6_btn_addRow_onclick,this);
            this.div_work.form.tab.Tabpage6.form.btn_report.addEventHandler("onclick",this.div_work_tab_Tabpage6_btn_report_onclick,this);
            this.div_work.form.grd_lotInfo.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_grd_productInfo_onexpandup,this);
            this.div_work.form.grd_lotInfo.addEventHandler("oncloseup",this.div_work_tab_Tabpage1_grd_productInfo_oncloseup,this);
            this.div_work.form.grd_lot.addEventHandler("onheadclick",this.div_work_grd_lot_onheadclick,this);
            this.div_work.form.grd_lot.addEventHandler("oncelldblclick",this.div_work_grd_lot_oncelldblclick,this);
            this.pdv_ReasonProcessSegment.form.grd_ReasonProcessSegment.addEventHandler("oncelldblclick",this.pdv_ReasonProcessSegment_grd_ReasonProcessSegment_oncelldblclick,this);
            this.pdv_ReasonConsumableList.form.grd_ReasonConsumableList.addEventHandler("oncelldblclick",this.pdv_ReasonConsumableList_grd_ReasonConsumableList_oncelldblclick,this);
            this.pdv_ReasonLotList.form.grd_ReasonLotList.addEventHandler("oncelldblclick",this.pdv_ReasonLotList_grd_ReasonLotList_oncelldblclick,this);
            this.ds_split.addEventHandler("onvaluechanged",this.ds_split_onvaluechanged,this);
            this.ds_lotList.addEventHandler("onrowposchanged",this.ds_lotList_onrowposchanged,this);
            this.ds_equipmentInfo.addEventHandler("onrowposchanged",this.ds_equipmentInfo_onrowposchanged,this);
            this.ds_equipmentInfo.addEventHandler("oncolumnchanged",this.ds_equipmentInfo_oncolumnchanged,this);
            this.ds_InspectionList.addEventHandler("oncolumnchanged",this.ds_InspectionList_oncolumnchanged,this);
            this.ds_InspectionList.addEventHandler("cancolumnchange",this.ds_InspectionList_cancolumnchange,this);
            this.ds_fileCombo.addEventHandler("onrowposchanged",this.ds_fileCombo_onrowposchanged,this);
            this.ds_xout.addEventHandler("oncolumnchanged",this.ds_xout_oncolumnchanged,this);
            this.ds_xout_h.addEventHandler("oncolumnchanged",this.ds_xout_oncolumnchanged,this);
        };
        this.loadIncludeScript("PCM07200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
