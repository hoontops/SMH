(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM07100M");
            this.set_titletext("최종 작업 완료");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lot", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISPARENT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTRCLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SELFSHIPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFTAKEINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISBEFOREROLLCUTTING\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSITAREA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DETAILEQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("ds_lotList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PARENTLOT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PANELQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPLITQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONUSER\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_equipmentInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PNLQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECIPEID\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_NcrList", this);
            obj._setContents("<ColumnInfo><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"NGCONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"NGCONDITIONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTYORRATE\" type=\"STRING\" size=\"256\"/><Column id=\"QTYORRATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"NCRSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"FROMRATE\" type=\"STRING\" size=\"256\"/><Column id=\"TORATE\" type=\"STRING\" size=\"256\"/><Column id=\"NGQUANTITY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_file", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_EXT\" type=\"STRING\" size=\"256\"/><Column id=\"OC_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID\" type=\"STRING\" size=\"256\"/><Column id=\"SVR_SAVE_COURS\" type=\"STRING\" size=\"256\"/><Column id=\"DRM_APY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DNLD_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"KEEP_START_DATEC\" type=\"STRING\" size=\"256\"/><Column id=\"KEEP_END_DATEC\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_LOGIN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESC\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_SAVE_COURS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_LotQty", this);
            obj._setContents("<ColumnInfo><Column id=\"DIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"WORKQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"WORKQTY\">0</Col><Col id=\"INSPECTIONQTY\">0</Col><Col id=\"DEFECTQTY\">0</Col><Col id=\"PCSPNL\">216</Col><Col id=\"DIVISION\">PNL</Col></Row><Row><Col id=\"INSPECTIONQTY\">0</Col><Col id=\"WORKQTY\">0</Col><Col id=\"DEFECTQTY\">0</Col><Col id=\"PCSPNL\">216</Col><Col id=\"DIVISION\">PCS</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_transitAreaList", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_transitAreaParam", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectLot", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTINFO\" type=\"STRING\" size=\"256\"/><Column id=\"ISSENDEMAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_NcrListTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"NGCONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"NGCONDITIONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTYORRATE\" type=\"STRING\" size=\"256\"/><Column id=\"QTYORRATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"NCRSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"FROMRATE\" type=\"STRING\" size=\"256\"/><Column id=\"TORATE\" type=\"STRING\" size=\"256\"/><Column id=\"NGQUANTITY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotListSave", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PARENTLOT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PANELQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPLITQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONUSER\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ReasonConsumableListTemp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_finalLot", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGERESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_finalTransit", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TRANSITAREA\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emailList", this);
            obj._setContents("<ColumnInfo><Column id=\"USERGROUPID\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"MBPH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USERGROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_InspectionListLast", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"QTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"FILENAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILESIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILEEXT\" type=\"STRING\" size=\"256\"/><Column id=\"FILEPATH\" type=\"STRING\" size=\"256\"/><Column id=\"IMAGERESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISUPLOAD\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"IMGBUTTONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("sta_title","30","16","117","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("최종 작업 완료");
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

            obj = new Combo("cbo_transitArea","758","10","300","20",null,null,null,null,null,null,this.div_work.form.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_transitAreaList");
            obj.set_codecolumn("AREAID");
            obj.set_datacolumn("AREANAME");
            obj.set_tooltiptext("TRANSITAREA");
            obj.set_readonly("false");
            obj.set_visible("false");
            obj.set_text("cmb_00");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_transitArea","51.43%","10","6.77%","20",null,null,null,null,null,null,this.div_work.form.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("인계작업장");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_visible("false");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Grid("grd_lot","0","62",null,"191","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_lotList");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"모 Lot\"/><Cell col=\"3\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"4\" text=\"품목코드\" tooltiptext=\"ITEMID\"/><Cell col=\"5\" text=\"Rev.\" tooltiptext=\"ITEMVERSION\"/><Cell col=\"6\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"7\" text=\"단위\" tooltiptext=\"UNIT\"/><Cell col=\"8\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell col=\"9\" text=\"수량\" tooltiptext=\"QTY\"/><Cell col=\"10\" text=\"불량 수량\" tooltiptext=\"DEFECTQTY\"/><Cell col=\"11\" text=\"검사자\" tooltiptext=\"INSPECTIONUSER\"/><Cell col=\"12\" text=\"검사자\" tooltiptext=\"INSPECTIONUSER\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"2\" textAlign=\"left\" text=\"bind:PARENTLOT\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"3\" text=\"bind:LOTID\" textAlign=\"left\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFVERSION\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"7\" text=\"bind:UNIT\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"8\" text=\"bind:PANELQTY\" textAlign=\"right\" displaytype=\"number\" edittype=\"none\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"9\" text=\"bind:QTY\" textAlign=\"right\" displaytype=\"number\" edittype=\"none\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"10\" displaytype=\"number\" textAlign=\"right\" edittype=\"none\" editinputtype=\"number,sign\" text=\"bind:DEFECTQTY\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"11\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\" text=\"bind:INSPECTORNAME\" cssclass=\"expr:CHK==&apos;1&apos; ? &quot;bg_yellow&quot;:&quot;&quot;\"/><Cell col=\"12\" tooltiptext=\"bind:INSPECTIONUSER\"/></Band><Band id=\"summary\"><Cell colspan=\"8\" text=\"합계\"/><Cell col=\"8\" expr=\"dataset.getSum(&quot;PANELQTY&quot;) \" displaytype=\"mask\" maskeditformat=\"#,##0.###\"/><Cell col=\"9\" expr=\"dataset.getSum(&quot;QTY&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0.###\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("Div01","5","grd_lot:5",null,"32","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("display");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_comment","99","0",null,null,"0","0",null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("0");
            obj.set_readonly("false");
            obj.set_enable("true");
            obj.set_textAlign("left");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label10","5","0","84","30",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("특이사항");
            obj.set_wordWrap("char");
            obj.set_tooltiptext("COMMENT");
            obj.set_font("normal 900 9pt/normal \"Arial\"");
            obj.set_textAlign("right");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_border("0px");
            obj.set_cssclass("display");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Tab("tab","0","Div01:5",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab);
            obj.set_text("불량등록");
            obj.set_tooltiptext("LOTINFO");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("title1_00","0","0","38","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("불량");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new ImageViewer("imageViewer",null,null,"350","203","0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("img_photo");
            obj.set_stretch("fit");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grdInspectionList","0","34",null,null,"imageViewer:10","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_InspectionList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"75\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"Lot No.\"/><Cell col=\"1\" text=\"불량 코드\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"불량코드 명\"/><Cell col=\"3\" text=\"품질공정\" tooltiptext=\"QCSEGMENT\"/><Cell col=\"4\" text=\"수량(PCS)\" cssclass=\"cell_point\"/><Cell col=\"5\" text=\"수량(PNL)\" cssclass=\"cell_point\"/><Cell col=\"6\" text=\"불량율\"/><Cell col=\"7\" text=\"원인품목\" tooltiptext=\"REASONCONSUMABLEDEFID\"/><Cell col=\"8\" text=\"원인 LOTID\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell col=\"9\" text=\"원인 공정\" tooltiptext=\"REASONPROCESSSEGMENTID\"/><Cell col=\"10\" text=\"원인 작업장\" tooltiptext=\"REASONAREAID\"/><Cell col=\"11\" text=\"사진등록\" tooltiptext=\"ADDIMAGE\"/><Cell col=\"12\"/></Band><Band id=\"body\"><Cell text=\"bind:LOTID\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SEGMENT_DEFECTCODE\" textAlign=\"left\" expandshow=\"show\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:SEGMENT_DEFECTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:QCSEGMENTNAME\"/><Cell col=\"4\" text=\"bind:QTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0\" maskeditautoselect=\"true\"/><Cell col=\"5\" text=\"bind:PNLQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0.00\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:DEFECTRATE\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0.0\"/><Cell col=\"7\" text=\"bind:CONSUMABLEDEFNAME\" expandshow=\"show\"/><Cell col=\"8\" text=\"bind:REASONCONSUMABLELOTID\" combodataset=\"ds_ReasonConsumableLot\" combocodecol=\"CONSUMABLELOTID\" combodatacol=\"CONSUMABLELOTID\" displaytype=\"normal\" edittype=\"none\" expandshow=\"show\"/><Cell col=\"9\" text=\"bind:REASONPROCESSSEGMENTNAME\" expandshow=\"show\"/><Cell col=\"10\" text=\"bind:REASONAREANAME\"/><Cell col=\"11\" text=\"expr:dataset.parent.nfn_getDictionaryname(&apos;ADDIMAGE&apos;,true)\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"12\" text=\"bind:IMAGERESOURCEID\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" maskeditformat=\"#,##0\" displaytype=\"mask\" expr=\"expr:dataset.getSum(&quot;QTY&quot;) \"/><Cell col=\"5\" maskeditformat=\"#,##0.00\" expr=\"expr:dataset.getSum(&quot;PNLQTY&quot;) \"/><Cell col=\"6\" expandchar=\"%\" expandsize=\"24\" maskeditformat=\"#,##0.0\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;DEFECTRATE&quot;)\" maskedittype=\"number\" maskeditpostfixtext=\" %\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("title1",null,"0","101","34","247",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("NCR 발행기준");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_customdelRow",null,"6","26","24","title1:10",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnAddRow_ds_InspectionList",null,"6","26","24","btn_customdelRow:0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_Image",null,null,"137","24","213","imageViewer:5",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_fileCombo");
            obj.set_codecolumn("ATCH_FILE_GUID");
            obj.set_datacolumn("OC_FILE_NM");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grdNcrList",null,"34","350",null,"0","cbo_Image:5",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_NcrList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"85\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"판정등급\" tooltiptext=\"DECISIONDEGREE\"/><Cell col=\"2\" text=\"조치등급\" tooltiptext=\"QCGRADE\"/><Cell col=\"3\" text=\"NG조건\" tooltiptext=\"NGCONDITION\"/><Cell col=\"4\" text=\"수량/불량율 구분\" tooltiptext=\"QTYORRATE\"/><Cell col=\"5\" text=\"범위\" cssclass=\"cell_end\" tooltiptext=\"RANGE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DECISIONDEGREENAME\"/><Cell col=\"2\" text=\"bind:QCGRADE\"/><Cell col=\"3\" text=\"bind:NGCONDITIONNAME\"/><Cell col=\"4\" text=\"bind:QTYORRATENAME\"/><Cell col=\"5\" text=\"bind:NCRSPEC\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_equipment","76","91",null,null,"428","77",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_equipmentInfo");
            obj.set_cssclass("grd_sub");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"150\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"설비ID\" tooltiptext=\"EQUIPMENTID\"/><Cell col=\"3\" text=\"설비명\" tooltiptext=\"EQUIPMENTNAME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:EQUIPMENTID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:EQUIPMENTNAME\" textAlign=\"left\"/></Band></Format></Formats>");
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

            obj = new Static("Static20_00_00","0","-134","120","134",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("Lot 정보");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_tooltiptext("LOTINFO");
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
            obj.set_stepcount("0");
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

            obj = new BindItem("item3","div_work.form.Div01.form.edt_comment","value","ds_lotInfo","COMMENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","pcm::PCM06900T1.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PCM07100M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM07100M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM07100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 최종 작업 시작
         * 파일명 		: PCM07100M.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.04.29
         *
         * 설  명		: 공정관리-최종검사-최종 작업 시작
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.29	최성민   	최초작성
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
          //첫번째 탭 불량 그리드
         this.Defect = {
        		inspectQty :	0   	//검사 수량(pcs 기준)
        	  , pcsPnl :    0   		//기준 (PCS / PNL) 수량
        	  , InspectionDefId : "" 	//검사정의 ID
        	  , SelectedLotId : "" 		//Selected Lot ID
        	  , panelPerQty : 0			//usDefectGrid 의 member
        	  , qty : 0					//usDefectGrid 의 member
         };

         this.g_event;
         this.pnlQty_enter = false;
         this.nLeft;
         this.nTop;
         this.g_txnHistKey = null;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.basfn_removeEventGrid(this.div_work.form.grd_lot);
        	this.basfn_removeEventGrid(this.div_work.form.tab.Tabpage1.form.grdInspectionList);

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
        	this.clearDetailInfo();
        	this.fn_searchKeyInfo(); /* Step1 함수 호출 */
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
        	if(this.ds_lotInfo.rowcount < 1){
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	this.ds_lotInfo.setColumn(0, "USERID", this.gf_getUserId());

        	//필수값 체크
        	if(this.ds_lotList.rowcount<1){
        		this.gfn_Message("NoSeletedLot", "", "warning", "ok");
        		return;
        	}

        	if(this.ds_lotList.getCaseCount("CHK=='1'") < 1){
        		this.gfn_Message("NoSeletedLot", "", "warning", "ok");
        		return;
        	}

        	this.ds_lotListSave.clearData();
        	for(var i=0; i<this.ds_lotList.rowcount; i++){
        		var chk	= this.ds_lotList.getColumn(i, "CHK");
        		if(chk=="1"){
        			//검사자 필수
        			var inspectUser = this.ds_lotList.getColumn(i, "INSPECTIONUSER");
        			var pcsQty 		= nexacro.toNumber(this.ds_lotList.getColumn(i, "QTY"));
        			var defectQty 	= nexacro.toNumber(this.ds_lotList.getColumn(i, "DEFECTQTY"));

        			if(this.nfn_isNull(inspectUser)){
        				this.gfn_Message("InValidRequiredField", this.nfn_nvl(this.nfn_getDictionarynameUpper("INSPECTIONUSER"),"검사자"), "warning", "ok");
        				return;
        			}

        			if (defectQty > pcsQty){
        				this.gfn_Message("LotQtyLargerThanDefectQty", defectQty, "warning", "ok");//불량 수량은(는) 검사 수량보다 많을 수 없습니다.
        				return;
        			}

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
        			this.fn_mergeInspectionData();
        			if(this.mfn_checkNCR(defectGrade, defectRate, pcsQty,defectCode, imgResourceID, defectName, i ) == false) return;
        		}
        	}


        	//인계작업장
        	this.ds_finalTransit.clearData();
        	var strTransitArea = "";
            var strResourceid = "";
        	var areaId = this.div_work.form.divSearch.form.sta_transitArea.value;
        	this.ds_finalTransit.addRow();
        	if(!this.nfn_isNull(areaId)){
        		var fRow = this.ds_transitAreaList.findRow("AREAID", areaId);
        		this.ds_finalTransit.setColumn(0, "TRANSITAREA", areaId);
        		this.ds_finalTransit.setColumn(0, "RESOURCEID", 	this.ds_transitAreaList.getColumn(fRow, "RESOURCEID"));
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
        					dsSave.setColumn(nRow, "REASONAREAID",				dsInspect.getColumn(i,"REASONAREAID"));
        					dsSave.setColumn(nRow, "DEFECTCODENAME",			dsInspect.getColumn(i,"DEFECTCODENAME"));
        					dsSave.setColumn(nRow, "QCSEGMENTNAME",				dsInspect.getColumn(i,"QCSEGMENTNAME"));
        					dsSave.setColumn(nRow, "DECISIONDEGREE",			dsInspect.getColumn(i,"DECISIONDEGREE"));
        					dsSave.setColumn(nRow, "DEFECTRATE",				dsInspect.getColumn(i,"DEFECTRATE"));
        					dsSave.setColumn(nRow, "IMAGERESOURCEID",			dsInspect.getColumn(i,"IMAGERESOURCEID"));
        					dsSave.setColumn(nRow, "REASONCONSUMABLEDEFVERSION",			dsInspect.getColumn(i,"REASONCONSUMABLEDEFVERSION"));
        				}
        			}
        		}
        	}

        	trace(this.ds_finalLot.saveXML());

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
        		this.gfn_Message("EquipmentIsRequired", "", "warning", "ok");
        		return;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveFinalInspectionComplete";
        	var sController 	= "/pcm07100/saveFinalInspectionComplete.do";
        	var sInDatasets 	= "INPUT1=ds_lotInfo:A INPUT2=ds_lotListSave:U INPUT3=ds_equipmentInfo:A INPUT4=ds_finalLot INPUT5=ds_defectLot INPUT6=ds_finalTransit";
        	var sOutDatasets 	= "ds_mail=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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

        this.SetNCRMessage = function (checkType, strDefectCode, gcGrad, defectQty, spec, defectRate, defectName)
        {
        	var message = "";

        	message = "\r\n" + this.nfn_getDictionaryname('DEFECTNAME',true) + " : " + defectName + "\r\n" + this.nfn_getDictionaryname('QCGRADE',true) + " : " + gcGrad + "\r\n";
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


        this.fn_reset = function(obj,e)
        {
        	this.div_work.form.divSearch.form.edt_lotId.set_value("");
        	this.clearDetailInfo();
        };
        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		if (trId == "saveFinalInspectionComplete")
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
        		if (trId == "selectProductInfo") {

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
        			} else {
        				this.fn_StayReasonCode_CallBack(); /* Step3 재작업 여부 체크 함수 호출*/
        			}
        		} else if (trId == "saveLotResourceId"){ /* Step1_2 Popup Callback Save After */
        			this.fn_StayReasonCode_CallBack(); /* Step3 재작업 여부 체크 함수 호출*/
        		} else if (trId=="getProcessDefTypeByProcess"){
        			this.fn_searchLotInfo();		/* Step2 나머지 정보 조회*/
        		} else if (trId == "selectLotInfoByProcess"){
        			if(this.ds_lotInfo.rowcount<1){
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				return;
        			}

        			var stepType = this.ds_lotInfo.getColumn(0, "STEPTYPE");

         			// 인계 작업장
         			if (stepType.split(',').indexOf("WaitForSend") == -1)
         			{
        				this.div_work.form.divSearch.form.sta_transitArea.set_visible(true);
        				this.div_work.form.divSearch.form.cbo_transitArea.set_visible(true);

        				this.ds_transitAreaParam.setColumn(0, "ENTERPRISEID", 			this.gf_getEnterpriseId());
        				this.ds_transitAreaParam.setColumn(0, "PLANTID", 				this.gf_getSiteType());
        				this.ds_transitAreaParam.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        				this.ds_transitAreaParam.setColumn(0, "LOTID", 					this.ds_lotInfo.getColumn(this.ds_lotInfo.rowposition, "LOTID"));
        				this.ds_transitAreaParam.setColumn(0, "PROCESSSEGMENTID", 		this.ds_lotInfo.getColumn(this.ds_lotInfo.rowposition, "NEXTPROCESSSEGMENTID"));
        				this.ds_transitAreaParam.setColumn(0, "PROCESSSEGMENTVERSION", 	this.ds_lotInfo.getColumn(this.ds_lotInfo.rowposition, "NEXTPROCESSSEGMENTVERSION"));
        				this.ds_transitAreaParam.setColumn(0, "RESOURCETYPE", 			"Area");
        				this.ds_transitAreaParam.setColumn(0, "VERSION", 				"10032");

        				var sSvcID = "getTransitAreaList";
        				var sController = "/pcm01700/getTransitAreaList.do";
        				var sInDatasets = "INPUT=ds_transitAreaParam";
        				var sOutDatasets = "ds_transitAreaList=output";
        				var sArgs = "";

        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, false);

        			} else {
        				this.div_work.form.divSearch.form.sta_transitArea.set_visible(false);
        				this.div_work.form.divSearch.form.cbo_transitArea.set_visible(false);
        				this.div_work.form.divSearch.form.cbo_transitArea.set_value(null);
        			}
        			this.fn_searchOthers();			/* Step3 나머지 정보 조회*/
        		} else if(trId =="selectOtherInfo"){
        			if(this.ds_lotList.rowcount<1){
        				this.gfn_Message("LotStateIsNotAvailableTrackOut", this.div_work.form.divSearch.form.edt_lotId.value, "warning", "ok");
        				this.clearDetailInfo();
        				this.div_work.form.divSearch.form.edt_lotId.set_value("");
        				this.div_work.form.divSearch.form.edt_lotId.setFocus();
        				return;
        			}

        			//메세지 탭 정보 조회
        			this.div_work.form.tab.Tabpage2.form.divMessage.form.fn_search();

        			//불량코드 1행 자동추가
        			/* 2021-05-18 미사용처리 전태선 과장 요청
        			if(this.ds_InspectionList.rowcount<1){
        				var nRow = this.ds_InspectionList.addRow();
        				var lotId	= this.ds_lotList.getColumn(this.ds_lotList.rowposition, "LOTID");
        				this.ds_InspectionList.setColumn(nRow, "LOTID", lotId);
        				this.ds_InspectionList.applyChange();
        			}
        			*/

        			// 작업시작시 체크(Track-In Time이 있는) 설비 자동체크
        			for(var i=0; i <this.ds_equipmentInfo.rowcount; i++){
        				var trackInTime = this.ds_equipmentInfo.getColumn(i,"TRACKINTIME");
        				if(!this.nfn_isNull(trackInTime)){
        					this.ds_equipmentInfo.setColumn(i, "CHK", "1");
        				}
        			}

        			this.g_txnHistKey = this.GetTXNHISTKEY();
        		} else if(trId =="selectEmailList"){
        			this.fn_sendMail();
        			this.div_work.form.divSearch.form.edt_lotId.set_value("");
        			this.clearDetailInfo();
        		} else if(trId =="saveFinalInspectionComplete"){
        			this.gfn_Message("SuccedSave", null, "info", "ok");
        			if(this.ds_mail.rowcount>0){
        				this.fn_getEmailAddrList(); //NCR Mail 대상자 조회
        			} else {
        				this.div_work.form.divSearch.form.edt_lotId.set_value("");
        				this.clearDetailInfo();
        			}
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
        	//this.div_work.form.divSearch.form.edt_lotId.set_value("");
        	this.ds_lotInfo.clearData();
        	this.ds_lotInfo.addRow();
        	this.ds_lotList.clearData();
        	this.ds_NcrList.clearData();
        	this.ds_message.clearData();
        	this.ds_operationSpec.clearData();
        	this.ds_equipmentInfo.clearData();
        	this.ds_comment.clearData();
        	this.ds_InspectionList.clearData();
        	this.ds_finalLot.clearData();
        	this.ds_finalTransit.clearData();
        	this.ds_lotListSave.clearData();
        	this.ds_defectLot.clearData();
        	this.div_work.form.tab.Tabpage2.form.divMessage.form.fn_clear();
        	this.g_txnHistKey = null;
        }

        /*
         * Step1_1 : 작업장, Lot ID 체크
         */
        this.fn_searchKeyInfo = function()
        {
        	this.ds_dt.clearData();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 	this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID", 			this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 	this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "PROCESSSTATE",		"Run");
        	this.ds_search.setColumn(0, "SQL_ID", 			"selectAreaResourceByLot");

        	var sSvcID 			= "selectAreaResourceByLot";
        	var sController 	= "/pcm06900/selectCustomQuery.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_dt=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /*
         *	Step2_1 : 재작업 여부 체크
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
        this.fn_searchLotInfo = function ()
        {
        	var processDefType ="";
        	if (this.ds_processDefTypeInfo.getRowCount() > 0){
        		processDefType = this.nfn_nvl(this.ds_processDefTypeInfo.getColumn(0, "PROCESSDEFTYPE"), "");
        	}

        	this.ds_lotInfo.clearData();
        	this.ds_search.setColumn(0, "PROCESSSTATE",			"Run");
        	this.ds_search.setColumn(0, "VERSION", 				processDefType == "Rework" ? "30031" : "10031");
        	this.ds_search.setColumn(0, "SQL_ID", 				"selectLotInfoByProcess");
        	this.ds_search.setColumn(0, "MIDDLESEGMENTCLASSID", "'7026','7534'");

        	var sSvcID 			= "selectLotInfoByProcess";
        	var sController 	= "/pcm06900/selectCustomQuery.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_lotInfo=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs); /* Step 3_2 호출 */
        };

        /*
         * Step3 : 분할,전달사항,특기사항,공정SPEC 조회
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

        	//검사원 조회
        	if(svcId =="GRD_INSPECTOR"){
        		oArg.arg_type = "CA";
        		oArg.arg_paramCols = "SQL_ID|PRODUCTDEFID|PRODUCTDEFVERSION|AREAID";
        		oArg.arg_paramValues = "getFinalInspector"
        							+"|"+ this.ds_lotInfo.getColumn(0, "PRODUCTDEFID")
        							+"|"+ this.ds_lotInfo.getColumn(0, "PRODUCTDEFVERSION")
        							+"|"+ this.ds_lotInfo.getColumn(0, "AREAID")
        		oArg.arg_rtnCols = "INSPECTORID|INSPECTORNAME";
        		oArg.arg_searchStr = "1=1"
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
        		this.clearDetailInfo();
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
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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

        		var nRow 	= this.ds_InspectionList.rowcount == 1 ? 0 : this.ds_InspectionList.rowposition;
        		var lotId 	= this.ds_InspectionList.getColumn(nRow, "LOTID");
        		var findRow = this.ds_InspectionList.findRowExpr("LOTID=='"+lotId+"' && SEGMENT_DEFECTCODE=='" +rtn[5]+ "'");

        			this.ds_InspectionList.setColumn(nRow,"DEFECTCODE",			rtn[0]);
        			this.ds_InspectionList.setColumn(nRow,"DEFECTCODENAME",		rtn[1]);
        			this.ds_InspectionList.setColumn(nRow,"QCSEGMENTID",		rtn[2]);
        			this.ds_InspectionList.setColumn(nRow,"QCSEGMENTNAME",		rtn[3]);
        			this.ds_InspectionList.setColumn(nRow,"DECISIONDEGREE",		rtn[4]);
        			this.ds_InspectionList.setColumn(nRow,"SEGMENT_DEFECTCODE",	rtn[5]);
        			this.ds_InspectionList.setColumn(nRow,"SEGMENT_DEFECTNAME",	rtn[6]);

        		/* 동일코드도 입력가능하도록 수정
        		if(findRow != nRow && findRow >= 0) {
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
        		*/
        	}
        	if( sPopupId == "file_upload")
        	{
        		if(rtn == "SUCC")
        		{
        			var nRow = this.ds_InspectionList.rowcount == 1 ? 0 : this.ds_InspectionList.rowposition;
        			var imageResourceId = this.ds_file.getColumn(0,"ATCH_FILE_ID");
        			this.ds_fileCombo.filter("");

        			for(var i=0;i<this.ds_file.rowcount;i++)
        			{
        				if(this.ds_fileCombo.findRow("OC_FILE_NM",this.ds_file.getColumn(i,"OC_FILE_NM")) < 0){
        					var eRow = this.ds_fileCombo.addRow();
        					this.ds_fileCombo.setColumn(eRow, "OC_FILE_NM", this.ds_file.getColumn(i,"OC_FILE_NM"));
        					this.ds_fileCombo.setColumn(eRow, "ATCH_FILE_GUID", this.ds_file.getColumn(i,"ATCH_FILE_GUID"));
        					this.ds_fileCombo.setColumn(eRow, "ATCH_FILE_ID", this.ds_file.getColumn(i,"ATCH_FILE_ID"));
        				}
        			}

        			var filterString = "ATCH_FILE_ID == '" + this.ds_file.getColumn(0,"ATCH_FILE_ID") + "'"
        			this.ds_fileCombo.filter();
        			this.ds_fileCombo.filter(filterString);

        			this.ds_InspectionList.setColumn(nRow,"IMAGERESOURCEID",this.ds_file.getColumn(0,"ATCH_FILE_ID"));
        			this.ds_fileCombo.set_rowposition(0);
        			this.div_work.form.tab.Tabpage1.form.cbo_Image.set_value(this.ds_file.getColumn(0,"ATCH_FILE_GUID"));

        			var upUrl = nexacro.getEnvironment().services["svcurl"].url +"/comm/downImage/" + this.ds_file.getColumn(0,"ATCH_FILE_GUID") + ".do";
        			this.div_work.form.tab.Tabpage1.form.imageViewer.set_image(upUrl);

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

        this.div_work_tab_Tabpage1_btn_delRow_onclick = function(obj,e)
        {
        	if(this.nfn_isNull(this.ds_lotInfo.getColumn(0, "LOTID"))) return;
        	this.basfn_deleteRow(this.ds_split);
        };

        this.div_work_tab_Tabpage1_grd_lot_onheadclick = function(obj,e)
        {
        	//헤더 체크박스 이벤트 강제 호출
        	//Grid 전체선택/해제(Header에 checkbox있는 Grid에만 추가
        	this.gfn_setGridCheckAll(obj, e);
        };

        this.div_work_tab_Tabpage1_grd_lot_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.cell, "INSPECTORNAME")) {
        		this.fn_openPop("GRD_INSPECTOR","P00253"); //검사원 조회
        	}
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
        	this.ds_InspectionList.setColumn(nRow,"ISUPLOAD","N");
        	this.ds_InspectionList.setColumn(nRow,"DEGREE", nexacro.toNumber(this.ds_lotList.getColumn(this.ds_lotList.rowposition, "DEGREE1")) + 1);
        	this.ds_InspectionList.setColumn(nRow,"REASONCODEID","LockSelfExamNonconfirm");
        	this.ds_InspectionList.setColumn(nRow,"TXNHISTKEY",this.g_txnHistKey);

        	this.ds_InspectionList.setColumn(nRow,"REASONCONSUMABLEDEFID","");
        	this.ds_InspectionList.setColumn(nRow,"REASONCONSUMABLEDEFVERSION","");
        	this.ds_InspectionList.setColumn(nRow,"REASONCONSUMABLELOTID","");
        	this.ds_InspectionList.setColumn(nRow,"REASONPROCESSSEGMENTID","");
        	this.ds_InspectionList.setColumn(nRow,"REASONAREAID","");

        	//this.ds_InspectionList.updateToDataset();
        	this.div_work.form.tab.Tabpage1.form.grdInspectionList.setCellPos(1);
          	this.div_work.form.tab.Tabpage1.form.grdInspectionList.showEditor(true);
        	this.ds_InspectionList.set_enableevent(true);
        };



        this.ds_lotList_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 0 ) return;
        	//this.ds_lotInfo.copyRow(0, obj, e.newrow);

        	//var nRow = e.newrow;


        	//this.ds_LotQty.setColumn(0,"INSPECTIONQTY",0);
        	//this.ds_LotQty.setColumn(0,"DEFECTQTY",0);
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
        	var mRow = this.ds_lotList.rowcount == 1 ? 0 : this.ds_lotList.rowposition;
        	var nRow = this.ds_InspectionList.rowcount == 1 ? 0 : this.ds_InspectionList.rowposition;

        	var popupId = "SEARCH_DEFECT";
        	var lotID = this.ds_lotList.getColumn(mRow, "LOTID");
        	var defectID = this.ds_InspectionList.getColumn(nRow,"SEGMENT_DEFECTCODE");
        	var qcSegmentID = this.ds_InspectionList.getColumn(nRow,"QCSEGMENTID");
        	var language = this.gf_getLanguageType();

        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00241";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "DEFECTCODE|DEFECTCODENAME|QCSEGMENTID|QCSEGMENTNAME|DECISIONDEGREE|SEGMENT_DEFECTCODE|SEGMENT_DEFECTNAME";
        	oArg.arg_paramCols = "LOTID|SEGMENTID|LANGUAGETYPE|VERSION";
        	oArg.arg_paramValues = lotID + "|" + this.DefectSegments+"|"+this.gf_getLanguageType()+"|10003";
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


        /*
         *	사진 등록
         */
        this.fn_attach = function ()
        {
        	var nRow = this.ds_InspectionList.rowcount == 1 ? 0 : this.ds_InspectionList.rowposition;
        	var lotId	= this.ds_InspectionList.getColumn(nRow, "LOTID");
        	var mRow = this.ds_lotList.findRow("LOTID", lotId);

        	var srcKey = "";
        	if(nRow >= 0 ) {//bind:DEFECTCODE
        		srcKey = this.g_txnHistKey//this.ds_InspectionList.getColumn(nRow, "TXNHISTKEY")
        				+ "|" + this.ds_search.getColumn(0,"INSPECTIONCLASSID")
        			    + "|" + this.ds_InspectionList.getColumn(nRow, "LOTID")
        			    + "|" + this.ds_InspectionList.getColumn(nRow, "DEFECTCODE")
        				+ "|" + this.ds_lotList.getColumn(mRow, "PROCESSSEGMENTID")

        				//2021-06-21 동일불량코드 입력가능으로
        				+ "|" + this.ds_InspectionList.getColumn(nRow, "REASONCONSUMABLEDEFID")
        				+ "|" + this.ds_InspectionList.getColumn(nRow, "REASONCONSUMABLEDEFVERSION")
        				+ "|" + this.ds_InspectionList.getColumn(nRow, "REASONCONSUMABLELOTID")
        				+ "|" + this.ds_InspectionList.getColumn(nRow, "REASONPROCESSSEGMENTID")
        				+ "|" + this.ds_InspectionList.getColumn(nRow, "REASONAREAID");
        	} else {
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}

        	var jobSysCd = "PCM"; 					//업무구분코드 CMD,BAS....
        	var subDir = ""; 				//세부업무약어
        	var resouceid = srcKey;					//테이블의 키 값
        	var resourcetype = "QAM_INSPECTIONDEFECT"; 	//테이블명
        	var comments = "최종작업완료"; 		//파일설명
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


        // this.tab_search_Tabpage1_edt_AREAID_onkeydown = function(obj:nexacro.Edit,e:nexacro.KeyEventInfo)
        // {
        // 	if (e.keycode != 13) return;
        //
        // 	this.ds_search.setColumn(0,"AREAID",obj.value);
        // 	this.openAREA_P00124("BA", this.ds_search);
        // };



        this.div_work_tab_Tabpage1_cbo_Image_onitemchanged = function(obj,e)
        {
        	var atchFileGuid = e.postvalue;
        	var upUrl = nexacro.getEnvironment().services["svcurl"].url +"/comm/downImage/" + atchFileGuid + ".do";
        	this.div_work.form.tab.Tabpage1.form.imageViewer.set_image(upUrl);
        };

        this.grdInspectionList_oncellclick = function(obj,e)
        {
        	if(e.col==11)
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

        this.ds_InspectionList_oncolumnchanged = function(obj,e)
        {
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
        		break;
        	case "QTY" :
        		this.mfn_defectChangePcsQty(e.newvalue);
        		if(this.pnlQty_enter)
        		{
        			this.btnAddRow_ds_InspectionList_onclick();
        		}
        		break;
        	default:
        	}
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
        		this.div_work.form.tab.Tabpage1.form.imageViewer.set_image(upUrl);
        		this.div_work.form.tab.Tabpage1.form.cbo_Image.set_value(atchFileGuid);
        	}
        	else
        	{
        		this.div_work.form.tab.Tabpage1.form.cbo_Image.set_value("");
        		this.div_work.form.tab.Tabpage1.form.imageViewer.set_image("");
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

        this.div_work_tab_Tabpage1_grdInspectionList_onkeydown = function(obj,e)
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
        		} else if (obj.currentcol==4 || obj.currentcol==5){
        			this.pnlQty_enter = true;
        		}
        	}else if(e.keycode >=96 && e.keycode <= 105){
        		if(obj.currentcol==1){
        			var nRow = obj.currentrow;
        			this.ds_InspectionList.setColumn(nRow,"SEGMENT_DEFECTCODE","");
        		}
        	} else {
        		this.pnlQty_enter = false;
        	}
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

        this.GetTXNHISTKEY = function ()
        {
        	this.ds_temp.clear();

        	var sSvcID 			= "selectTxnHistKey";
        	var sController 	= "/pcmCommon/selectTxnHistKey.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_temp=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs,"","",false);

        	//trace(this.ds_temp.saveXML());
        	return this.ds_temp.getColumn(0,0);

        };
        this.div_work_tab_Main_Tabpage1_cbo_Image_onitemchanged = function(obj,e)
        {
        	var atchFileGuid = e.postvalue;
        	var upUrl = nexacro.getEnvironment().services["svcurl"].url +"/comm/downImage/" + atchFileGuid + ".do";
        	this.div_work.form.tab.Tabpage1.form.imageViewer.set_image(upUrl);
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
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.divSearch.form.btn_area.addEventHandler("onclick",this.div_work_divSearch_btn_area_onclick,this);
            this.div_work.form.divSearch.form.edt_area.addEventHandler("onkeydown",this.div_work_divSearch_edt_area_onkeydown,this);
            this.div_work.form.divSearch.form.edt_area.addEventHandler("onchanged",this.div_work_divSearch_edt_area_onchanged,this);
            this.div_work.form.divSearch.form.edt_lotId.addEventHandler("onkeydown",this.div_work_divSearch_edt_lotId_onkeydown,this);
            this.div_work.form.grd_lot.addEventHandler("onheadclick",this.div_work_tab_Tabpage1_grd_lot_onheadclick,this);
            this.div_work.form.grd_lot.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_grd_lot_onexpandup,this);
            this.div_work.form.tab.Tabpage1.form.grdInspectionList.addEventHandler("oncellclick",this.grdInspectionList_oncellclick,this);
            this.div_work.form.tab.Tabpage1.form.grdInspectionList.addEventHandler("onexpandup",this.grdInspectionList_onexpandup,this);
            this.div_work.form.tab.Tabpage1.form.grdInspectionList.addEventHandler("onkeydown",this.div_work_tab_Tabpage1_grdInspectionList_onkeydown,this);
            this.div_work.form.tab.Tabpage1.form.btn_customdelRow.addEventHandler("onclick",this.fn_deleteDefect,this);
            this.div_work.form.tab.Tabpage1.form.btnAddRow_ds_InspectionList.addEventHandler("onclick",this.btnAddRow_ds_InspectionList_onclick,this);
            this.div_work.form.tab.Tabpage1.form.cbo_Image.addEventHandler("onitemchanged",this.div_work_tab_Main_Tabpage1_cbo_Image_onitemchanged,this);
            this.pdv_ReasonProcessSegment.form.grd_ReasonProcessSegment.addEventHandler("oncelldblclick",this.pdv_ReasonProcessSegment_grd_ReasonProcessSegment_oncelldblclick,this);
            this.pdv_ReasonConsumableList.form.grd_ReasonConsumableList.addEventHandler("oncelldblclick",this.pdv_ReasonConsumableList_grd_ReasonConsumableList_oncelldblclick,this);
            this.pdv_ReasonLotList.form.grd_ReasonLotList.addEventHandler("oncelldblclick",this.pdv_ReasonLotList_grd_ReasonLotList_oncelldblclick,this);
            this.ds_lot.addEventHandler("onvaluechanged",this.ds_split_onvaluechanged,this);
            this.ds_lotList.addEventHandler("onrowposchanged",this.ds_lotList_onrowposchanged,this);
            this.ds_equipmentInfo.addEventHandler("onrowposchanged",this.ds_equipmentInfo_onrowposchanged,this);
            this.ds_equipmentInfo.addEventHandler("oncolumnchanged",this.ds_equipmentInfo_oncolumnchanged,this);
            this.ds_InspectionList.addEventHandler("oncolumnchanged",this.ds_InspectionList_oncolumnchanged,this);
            this.ds_InspectionList.addEventHandler("cancolumnchange",this.ds_InspectionList_cancolumnchange,this);
            this.ds_InspectionList.addEventHandler("onrowposchanged",this.ds_InspectionList_onrowposchanged,this);
            this.ds_fileCombo.addEventHandler("onrowposchanged",this.ds_fileCombo_onrowposchanged,this);
            this.ds_LotQty.addEventHandler("oncolumnchanged",this.ds_LotQty_oncolumnchanged,this);
            this.ds_LotQty.addEventHandler("cancolumnchange",this.ds_LotQty_cancolumnchange,this);
        };
        this.loadIncludeScript("PCM07100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
