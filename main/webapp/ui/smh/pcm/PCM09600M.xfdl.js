(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM09600M");
            this.set_titletext("출하 합/불 판정(작업완료)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lotSplitList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"ALLQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"ALLQTYPCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"GOODQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"GOODQTYPCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPECOUTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"PRIORITY\" type=\"STRING\" size=\"256\"/><Column id=\"AQLINSPECTIONLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDEFECTLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ACCEPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISSEND\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTITEM\" type=\"STRING\" size=\"256\"/><Column id=\"SAMPLEQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FINALINSPECTORNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRINTRCLOTCARD\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKINUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"ISRCLOT\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SELFSHIPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFTAKEINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISBEFOREROLLCUTTING\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMLOT\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLESEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_SPCLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"P_DEFLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"P_INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_NCRDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"P_DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"STANDARD_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dt", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dtStaying", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"STAYINGLOCKSTD\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTSTATESTAYINGTIMECNV\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_body", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AQLORNCR\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONUSER\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processDefTypeInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"입력공정\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"메시지유형\" type=\"STRING\" size=\"256\"/><Column id=\"등록자\" type=\"STRING\" size=\"256\"/><Column id=\"등록일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"입력공정\">RTR UV-LASER</Col><Col id=\"작업장\">RTR UV_B2F</Col><Col id=\"메시지유형\">Comment</Col><Col id=\"등록자\">빌트원</Col><Col id=\"공정수순\">10</Col><Col id=\"공정명\">RTR UV-LASER</Col><Col id=\"등록일\">20200118151539</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uom", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_weekInfoList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTYPCS\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chgHistList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERREV\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ISRC\" type=\"STRING\" size=\"256\"/><Column id=\"ISPCN\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGECOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGENOTE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_message", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_standardType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_transitArea", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ISPRIMARYRESOURCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inspectorDegree", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INSPECTORDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ISAQL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLINSPECTIONLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDEFECTLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"AQLCYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"ISNCR\" type=\"STRING\" size=\"256\"/><Column id=\"NCRINSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NCRCYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRDEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRLOTSIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_AQLCheckBasis", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SIZECODE\" type=\"STRING\" size=\"256\"/><Column id=\"AQLSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOUTQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_AQLActionGrade", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"PRIORITY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_NCRCheckBasis", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"PRIORITY\" type=\"STRING\" size=\"256\"/><Column id=\"FROMNGRATE\" type=\"STRING\" size=\"256\"/><Column id=\"TONGRATE\" type=\"STRING\" size=\"256\"/><Column id=\"NGQUANTITY\" type=\"STRING\" size=\"256\"/><Column id=\"NGCONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"QTYORRATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotSplitDetailList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"PRIORITY\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"INSPECTIONQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"AQLINSPECTIONLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDEFECTLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID1\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID2\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID3\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_weekLotQty", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_inspectionList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENT_DEFECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"ISUPLOAD\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"IMGBUTTONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID1\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID2\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTYSUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inspectorPop", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORID\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveReturn", this);
            obj._setContents("<ColumnInfo><Column id=\"ISSENDEMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"EXTERIORNG\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURENG\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sendEmailList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveLot", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"ALLQTYPNL\" type=\"STRING\" size=\"256\"/><Column id=\"ALLQTYPCS\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTYPNL\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTYPCS\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTYPNL\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOUTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"PRIORITY\" type=\"STRING\" size=\"256\"/><Column id=\"AQLINSPECTIONLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDEFECTLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ACCEPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISSEND\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTITEM\" type=\"STRING\" size=\"256\"/><Column id=\"SAMPLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_file", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_SYS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_EXT\" type=\"STRING\" size=\"256\"/><Column id=\"OC_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID\" type=\"STRING\" size=\"256\"/><Column id=\"SVR_SAVE_COURS\" type=\"STRING\" size=\"256\"/><Column id=\"DRM_APY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RM\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DNLD_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"KEEP_START_DATEC\" type=\"STRING\" size=\"256\"/><Column id=\"KEEP_END_DATEC\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_LOGIN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TABLE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESC\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_SAVE_COURS\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_messageMain", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"ALLQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"ALLQTYPCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"GOODQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"GOODQTYPCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPECOUTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"PRIORITY\" type=\"STRING\" size=\"256\"/><Column id=\"AQLINSPECTIONLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDEFECTLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ACCEPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISSEND\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTITEM\" type=\"STRING\" size=\"256\"/><Column id=\"SAMPLEQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inspectionMain", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"ALLQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"ALLQTYPCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"GOODQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"GOODQTYPCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPECOUTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"PRIORITY\" type=\"STRING\" size=\"256\"/><Column id=\"AQLINSPECTIONLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDEFECTLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ACCEPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISSEND\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTITEM\" type=\"STRING\" size=\"256\"/><Column id=\"SAMPLEQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sendEmailList_back", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTION\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotSplitList_save", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"ALLQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"ALLQTYPCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"GOODQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"GOODQTYPCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"SPECOUTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"PRIORITY\" type=\"STRING\" size=\"256\"/><Column id=\"AQLINSPECTIONLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDEFECTLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ACCEPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"ISSEND\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTITEM\" type=\"STRING\" size=\"256\"/><Column id=\"SAMPLEQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FINALINSPECTORNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("출하 합/불 판정(작업완료)");
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
            obj.set_text("177");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","label01:10","10","15.92%","20",null,null,null,null,null,null,this.div_work.form.divSearch.form);
            obj.set_taborder("4");
            obj.set_imemode("alpha");
            obj.set_text("M210504F001-1-FG-005-001");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","label00:-46","10",null,"20","btn_area:205",null,null,null,null,null,this.div_work.form.divSearch.form);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_value("177");
            obj.set_text("177");
            this.div_work.form.divSearch.addChild(obj.name, obj);

            obj = new Div("Div01","0","235",null,"57","-1",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label00","9.18%","5","43","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("9");
            obj.set_text("UOM");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label03","23.46%","5","116","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("양품 수량");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_textAlign("right");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_uom","label00:10","5",null,"20","label03:5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_uom");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("PNL");
            obj.set_value("");
            obj.set_index("-1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label03_00","49%","5","116","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("불량 수량");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("txtSumGoodQty","label03:5","5",null,"20","label03_00:25",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_value("0");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("txtSumDefectQty","label03_00:5","5","194","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_value("0");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label06","23.38%","33","116","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("검사자");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_textAlign("right");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label03_00_00","49%","32","116","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("5");
            obj.set_text("인계작업장");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_userName","label06:6","30",null,"20","label03_00_00:49",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_inspector","edt_userName:0","30","22","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cbo_transitArea","label03_00_00:5","32","194","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_transitArea");
            obj.set_codecolumn("RESOURCEID");
            obj.set_datacolumn("RESOURCENAME");
            obj.set_tooltiptext("TRANSIT AREA");
            obj.set_readonly("false");
            obj.set_visible("true");
            obj.set_text("cmb_transitArea");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_inspectorId","1074","29",null,"20","97",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_grade","974","29",null,"20","197",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_userId","1164","29",null,"20","7",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("title1_01","0","294","98","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("출하검사 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_lotInfo","0","52",null,"182","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("grd_detail");
            obj.set_autoenter("select");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_binddataset("ds_lotInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_head\" text=\"Lot No.\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"LOTID\"/><Cell col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:LOTID\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"이전공정명\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PREVPROCESSSEGMENTNAME\"/><Cell col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PREVPROCESSSEGMENTNAME\"/><Cell col=\"4\" cssclass=\"cell_head\" text=\"공정명\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"6\" cssclass=\"cell_head\" text=\"후공정\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"NEXTPROCESSSEGMENTNAME\"/><Cell col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:NEXTPROCESSSEGMENTNAME\"/><Cell col=\"8\" cssclass=\"cell_head\" text=\"Site ID\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PLANTID\"/><Cell col=\"9\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PLANTID\"/><Cell row=\"1\" cssclass=\"cell_head\" text=\"공정수순\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:USERSEQUENCE\"/><Cell row=\"1\" col=\"2\" cssclass=\"cell_head\" text=\"품목코드\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PRODUCTDEFID\"/><Cell row=\"1\" col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTDEFID\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_head\" text=\"Rev\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell row=\"1\" col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTDEFVERSION\"/><Cell row=\"1\" col=\"6\" cssclass=\"cell_head\" text=\"품목명\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell row=\"1\" col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTDEFNAME\"/><Cell row=\"1\" col=\"8\" cssclass=\"cell_head\" text=\"투입일자\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"INPUTDATE\"/><Cell row=\"1\" col=\"9\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:INPUTDATE\"/><Cell row=\"2\" cssclass=\"cell_head\" text=\"S/O번호\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PRODUCTIONORDERID \"/><Cell row=\"2\" col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTIONORDERID\"/><Cell row=\"2\" col=\"2\" cssclass=\"cell_head\" text=\"납기일\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"DUEDATE\"/><Cell row=\"2\" col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:DUEDATE\"/><Cell row=\"2\" col=\"4\" cssclass=\"cell_head\" text=\"품목유형구분\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PRODUCTDEFTYPE\"/><Cell row=\"2\" col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTDEFTYPE\"/><Cell row=\"2\" col=\"6\" cssclass=\"cell_head\" text=\"생산구분\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell row=\"2\" col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PRODUCTIONTYPE\"/><Cell row=\"2\" col=\"8\" cssclass=\"cell_head\" text=\"Locking 여부\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"ISLOCKING\"/><Cell row=\"2\" col=\"9\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:ISLOCKING\"/><Cell row=\"3\" cssclass=\"cell_head\" text=\"작업장\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"AREANAME\"/><Cell row=\"3\" col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:AREANAME\" displaytype=\"normal\" combodataset=\"ds_uom\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell row=\"3\" col=\"2\" cssclass=\"cell_head\" text=\"주차\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"WEEK\"/><Cell row=\"3\" col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:WEEK\"/><Cell row=\"3\" col=\"4\" cssclass=\"cell_head\" text=\"작업장 ID\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"AREAID\"/><Cell row=\"3\" col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:AREAID\"/><Cell row=\"3\" col=\"6\" cssclass=\"cell_head\" text=\"고객명\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"CUSTOMERNAME\"/><Cell row=\"3\" col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:CUSTOMERNAME\"/><Cell row=\"3\" col=\"8\" cssclass=\"cell_head\" text=\"단위\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"UNIT\"/><Cell row=\"3\" col=\"9\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:UNIT\"/><Cell row=\"4\" cssclass=\"cell_head\" text=\"수량(PNL)\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PNLQTY\"/><Cell row=\"4\" col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PNLQTY\"/><Cell row=\"4\" col=\"2\" cssclass=\"cell_head\" text=\"수량(PCS)\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PCSQTY\"/><Cell row=\"4\" col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PCSQTY\"/><Cell row=\"4\" col=\"4\" cssclass=\"cell_head\" text=\"MM\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"MM\"/><Cell row=\"4\" col=\"5\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:MM\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0.00\"/><Cell row=\"4\" col=\"6\" cssclass=\"cell_head\" text=\"PCS/PNL\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PCS/PNL\"/><Cell row=\"4\" col=\"7\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:PCSPNL\"/><Cell row=\"4\" col=\"8\" cssclass=\"cell_head\" text=\"ISRCLOT\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"ISRCLOT\"/><Cell row=\"4\" col=\"9\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:ISRCLOT\"/><Cell row=\"5\" cssclass=\"cell_head\" text=\"양산구분\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"PNLQTY\"/><Cell row=\"5\" col=\"1\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:LOTTYPE\"/><Cell row=\"5\" col=\"2\" cssclass=\"cell_head\" text=\"SUBPROCESSDEFID\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" tooltiptext=\"SUBPROCESSDEFID\"/><Cell row=\"5\" col=\"3\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" text=\"bind:SUBPROCESSDEFID\"/><Cell row=\"5\" col=\"4\" colspan=\"6\" cssclass=\"cell_head\" textAlign=\"left\" font=\"normal 400 12px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\" padding=\"0px 0px 0px 5px\" background=\"#ffffff\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab","0","330",null,null,"0","20",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab);
            obj.set_text("분할 LOT 합불/판정");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("title1_01_01",null,"34","250","34","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("이미지 추가");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_lotSplitDetailList",null,"68","34.66%",null,"260","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_lotSplitDetailList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"109\"/><Column size=\"69\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"차수\"/><Cell col=\"2\" text=\"불량코드 명\"/><Cell col=\"3\" text=\"품질공정 명\"/><Cell col=\"4\" text=\"불량수량\" cssclass=\"cell_point\"/><Cell col=\"5\" text=\"불량률\"/><Cell col=\"6\" text=\"판정결과\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\" text=\"DEFECTPNL\"/><Cell col=\"14\" text=\"QCGRADE\"/><Cell col=\"15\" text=\"PRIORITY\"/><Cell col=\"16\" text=\"RESOUREID\"/><Cell col=\"17\" text=\"DEFECTCODE\"/><Cell col=\"18\" text=\"DECISIONDEGREE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DEGREE\"/><Cell col=\"2\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\" text=\"bind:DEFECTCODENAME\"/><Cell col=\"3\" text=\"bind:QCSEGMENTNAME\"/><Cell col=\"4\" text=\"bind:DEFECTQTY\" cssclass=\"cell_point\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\" maskeditautoselect=\"true\" maskeditlimitbymask=\"integer\"/><Cell col=\"5\" text=\"bind:DEFECTRATE\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0.00\"/><Cell col=\"6\" text=\"bind:INSPECTIONRESULT\"/><Cell col=\"7\" text=\"bind:DEFECTCODE\"/><Cell col=\"8\" text=\"bind:RESOURCEID\"/><Cell col=\"9\" text=\"bind:QCSEGMENTID\"/><Cell col=\"10\" text=\"bind:DEFECTQTYPNL\"/><Cell col=\"11\" text=\"bind:QCGRADE\"/><Cell col=\"12\" text=\"bind:PRIORITY\"/><Cell col=\"13\" text=\"bind:DEFECTQTYPNL\" cssclass=\"cell_point\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\" maskeditautoselect=\"true\" maskeditlimitbymask=\"integer\"/><Cell col=\"14\" text=\"bind:QCGRADE\"/><Cell col=\"15\" text=\"bind:PRIORITY\"/><Cell col=\"16\" text=\"bind:RESOURCEID\"/><Cell col=\"17\" text=\"bind:DEFECTCODE\"/><Cell col=\"18\" text=\"bind:DECISIONDEGREE\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"합계\"/><Cell col=\"4\" expr=\"dataset.getSum(&quot;DEFECTQTY&quot;) \" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"5\" expandchar=\"%\" expandsize=\"24\" maskeditformat=\"#,##0.00\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;DEFECTRATE&quot;)\" maskedittype=\"number\" maskeditpostfixtext=\"%\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\" expr=\"dataset.getSum(&quot;DEFECTQTYPNL&quot;) \" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_lotSplit","0","68",null,null,"grd_lotSplitDetailList:10","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_lotSplitList");
            obj.set_cssclass("grd_sub");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"200\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" rowspan=\"2\" text=\"분할 Lot No.\"/><Cell col=\"3\" rowspan=\"2\" text=\"차수\"/><Cell col=\"4\" colspan=\"2\" text=\"전체\" cssclass=\"cell_headMaster\"/><Cell col=\"6\" colspan=\"2\" text=\"양품 수량\" cssclass=\"cell_headMaster\"/><Cell col=\"8\" colspan=\"3\" text=\"불량수량\" cssclass=\"cell_headMaster\"/><Cell col=\"11\" text=\"검사 수량\" cssclass=\"cell_headMaster\"/><Cell col=\"12\" rowspan=\"2\" text=\"판정결과\"/><Cell col=\"13\" rowspan=\"2\" text=\"QCCODE\"/><Cell col=\"14\" rowspan=\"2\" text=\"PRIORITY\"/><Cell col=\"15\" rowspan=\"2\" text=\"QCGRADE\"/><Cell col=\"16\" rowspan=\"2\" text=\"PRIORITY\"/><Cell row=\"1\" col=\"4\" text=\"PNL\"/><Cell row=\"1\" col=\"5\" text=\"PCS\"/><Cell row=\"1\" col=\"6\" text=\"PNL\"/><Cell row=\"1\" col=\"7\" text=\"PCS\"/><Cell row=\"1\" col=\"8\" text=\"PNL\"/><Cell row=\"1\" col=\"9\" text=\"PCS\"/><Cell row=\"1\" col=\"10\" text=\"불량률\"/><Cell row=\"1\" col=\"11\" text=\"PCS\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"bind:RESOURCEID\"/><Cell col=\"3\" text=\"bind:DEGREE\"/><Cell col=\"4\" text=\"bind:ALLQTYPNL\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0\" maskeditautoselect=\"true\"/><Cell col=\"5\" text=\"bind:ALLQTYPCS\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:GOODQTYPNL\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0\" maskeditautoselect=\"true\"/><Cell col=\"7\" text=\"bind:GOODQTYPCS\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0\" maskeditautoselect=\"true\"/><Cell col=\"8\" text=\"bind:DEFECTQTYPNL\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0\" maskeditautoselect=\"true\"/><Cell col=\"9\" text=\"bind:SPECOUTQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0\" maskeditautoselect=\"true\"/><Cell col=\"10\" text=\"bind:DEFECTRATE\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0.00\"/><Cell col=\"11\" text=\"bind:INSPECTIONQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0\" maskeditautoselect=\"true\"/><Cell col=\"12\" text=\"bind:INSPECTIONRESULT\"/><Cell col=\"13\" text=\"bind:QCGRADE\"/><Cell col=\"14\" text=\"bind:PRIORITY\"/><Cell col=\"15\" text=\"bind:QCGRADE\"/><Cell col=\"16\" text=\"bind:PRIORITY\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"합계\"/><Cell col=\"4\" expr=\"dataset.getSum(&quot;ALLQTYPNL&quot;) \" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"5\" expr=\"dataset.getSum(&quot;ALLQTYPCS&quot;) \" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"6\" expr=\"dataset.getSum(&quot;GOODQTYPNL&quot;) \" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"7\" expr=\"dataset.getSum(&quot;GOODQTYPCS&quot;) \" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"8\" expr=\"dataset.getSum(&quot;DEFECTQTYPNL&quot;) \" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"9\" expr=\"dataset.getSum(&quot;SPECOUTQTY&quot;) \" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"10\" expandchar=\"%\" expandsize=\"24\" maskeditformat=\"#,##0.00\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;DEFECTRATE&quot;)\" maskedittype=\"number\" maskeditpostfixtext=\" %\"/><Cell col=\"11\" expr=\"dataset.getSum(&quot;INSPECTIONQTY&quot;) \" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("title1_01_00","grd_lotSplit:10","34","62","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("불량정보");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_00",null,"68","250",null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("div_00");
            obj.set_cssclass("div_WF_detail");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new ImageViewer("img_lotSplitDetailList3","10","66.88%",null,null,"10","10",null,null,null,null,this.div_work.form.tab.Tabpage1.form.div_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("img_photo");
            obj.set_stretch("fit");
            this.div_work.form.tab.Tabpage1.form.div_00.addChild(obj.name, obj);

            obj = new ImageViewer("img_lotSplitDetailList2","10","35.06%",null,null,"10","img_lotSplitDetailList3:5",null,null,null,null,this.div_work.form.tab.Tabpage1.form.div_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("img_photo");
            obj.set_stretch("fit");
            this.div_work.form.tab.Tabpage1.form.div_00.addChild(obj.name, obj);

            obj = new ImageViewer("img_lotSplitDetailList1","10","10",null,null,"10","img_lotSplitDetailList2:5",null,null,null,null,this.div_work.form.tab.Tabpage1.form.div_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("img_photo");
            obj.set_stretch("fit");
            this.div_work.form.tab.Tabpage1.form.div_00.addChild(obj.name, obj);

            obj = new Static("title1_01","0","34","127","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("분할 LOT 합불/판정");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00","0","9","48","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("판정기준");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_padding("0px");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_standardType","label00:5","9","150","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_standardType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"40","26","24","260",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"40","26","24","286",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_addImgLotSplitList",null,"40","86","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("이미지 추가");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_00","title1_01_00:5","43","57","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("NG횟수");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("msk_ngCnt","label00_00:10","43",null,"20","496",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("12");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_00_00","msk_ngCnt:0","43","75","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("최종검사자");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_01","grd_lotSplit:10","9","45","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("분할 Lot");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_padding("0px");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("msk_splitLotId","label00_01:5","9","230","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("15");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_01_00","222","9","55","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("검사수준");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_padding("0px");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("msk_inspectionLevel","275","9","78","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_01_00_00","372","9","55","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("불량수준");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_padding("0px");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("msk_defectLevel","426","9","78","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("msk_lastInspector","label00_00_00:10","43",null,"20","317",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("주차 정보");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_weekInfo","0","10","402",null,null,"0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_weekInfoList");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"공정명\"/><Cell col=\"2\" rowspan=\"2\" text=\"주차\"/><Cell col=\"3\" colspan=\"2\" text=\"수량\" cssclass=\"cell_headMaster,cell_end\"/><Cell row=\"1\" col=\"3\" text=\"수량(PNL)\"/><Cell row=\"1\" col=\"4\" text=\"수량\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"2\" text=\"bind:WEEK\"/><Cell col=\"3\" text=\"bind:PNLQTY\"/><Cell col=\"4\" text=\"bind:QTY\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_weekLotQty","412","10",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_weekLotQty");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"339\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"품목코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"Rev\"/><Cell col=\"3\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"4\" rowspan=\"2\" text=\"Lot No.\"/><Cell col=\"5\" colspan=\"2\" text=\"수량\" cssclass=\"cell_headMaster\"/><Cell row=\"1\" col=\"5\" text=\"수량(PNL)\"/><Cell row=\"1\" col=\"6\" text=\"수량\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"4\" text=\"bind:LOTID\"/><Cell col=\"5\" text=\"bind:PNLQTY\"/><Cell col=\"6\" text=\"bind:QTY\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab);
            obj.set_text("변경 이력");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_chgHistList","0","10",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_chgHistList");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Site ID\"/><Cell col=\"2\" text=\"품목코드\"/><Cell col=\"3\" text=\"고객 Rev\"/><Cell col=\"4\" text=\"Rev\"/><Cell col=\"5\" text=\"품목명\"/><Cell col=\"6\" text=\"사양 담당자\"/><Cell col=\"7\" text=\"생성일\"/><Cell col=\"8\" text=\"사양변경\"/><Cell col=\"9\" text=\"변경점\"/><Cell col=\"10\" text=\"사양변경내용\"/><Cell col=\"11\" text=\"특이사항\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PLANTID\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"3\" text=\"bind:CUSTOMERREV\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"bind:PRODUCTNAME\"/><Cell col=\"6\" text=\"bind:SPECOWNERNAME\"/><Cell col=\"7\" text=\"bind:CREATEDTIME\"/><Cell col=\"8\" text=\"bind:ISRC\"/><Cell col=\"9\" text=\"bind:ISPCN\"/><Cell col=\"10\" text=\"bind:CHANGECOMMENT\"/><Cell col=\"11\" text=\"bind:CHANGENOTE\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.div_work.form.tab);
            obj.set_text("전달사항");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_message","0","34","262",null,null,"0",null,null,null,null,this.div_work.form.tab.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_messageMain");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:RESOURCEID\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage4.addChild(obj.name, obj);

            obj = new Div("Div01","830","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage4.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            obj.set_border("1px solid #b3b3b3,1px solid #e8e8e8,0px none");
            this.div_work.form.tab.Tabpage4.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","21.13%","31",null,null,null,null,null,null,this.div_work.form.tab.Tabpage4.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tab.Tabpage4.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_title","Static30:5","5",null,"20","5",null,null,null,null,null,this.div_work.form.tab.Tabpage4.form.Div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_text("샘플");
            this.div_work.form.tab.Tabpage4.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_00_00","0","31",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage4.form.Div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_detailBg");
            this.div_work.form.tab.Tabpage4.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static30_00","0","31","21.13%",null,null,"0",null,null,null,null,this.div_work.form.tab.Tabpage4.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tab.Tabpage4.form.Div01.addChild(obj.name, obj);

            obj = new TextArea("txt_message","Static30_00:5","36",null,null,"5","5",null,null,null,null,this.div_work.form.tab.Tabpage4.form.Div01.form);
            obj.set_taborder("4");
            this.div_work.form.tab.Tabpage4.form.Div01.addChild(obj.name, obj);

            obj = new Static("title1_01_00","830","0","92","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage4.form);
            obj.set_taborder("2");
            obj.set_text("전달사항 입력");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage4.addChild(obj.name, obj);

            obj = new Button("Button21_02",null,"9","34","20","0",null,null,null,null,null,this.div_work.form.tab.Tabpage4.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_black");
            obj.set_text("등록");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage4.addChild(obj.name, obj);

            obj = new Grid("grd_message1","272","34","262",null,null,"0",null,null,null,null,this.div_work.form.tab.Tabpage4.form);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_message");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정명\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTNAME\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage4.addChild(obj.name, obj);

            obj = new Grid("grd_message2","544","34","276",null,null,"0",null,null,null,null,this.div_work.form.tab.Tabpage4.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_message");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"220\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"생성자명\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CREATORNAME\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage4.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.div_work.form.tab);
            obj.set_text("불량(폐기)처리");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_inspectionList","412","68",null,null,"360","0",null,null,null,null,this.div_work.form.tab.Tabpage5.form);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_inspectionList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"200\"/><Column size=\"180\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"LOT NO\"/><Cell col=\"2\" rowspan=\"2\" text=\"불량코드 명\"/><Cell col=\"3\" rowspan=\"2\" text=\"품질공정 명\"/><Cell col=\"4\" colspan=\"2\" text=\"불량수량\" cssclass=\"cell_headMaster\"/><Cell col=\"6\" rowspan=\"2\" text=\"불량률\"/><Cell col=\"7\" rowspan=\"2\" text=\"원인 품목\"/><Cell col=\"8\" rowspan=\"2\" text=\"원인 LOTID\"/><Cell col=\"9\" rowspan=\"2\" text=\"원인 공정\"/><Cell col=\"10\" rowspan=\"2\" text=\"원인 작업장\"/><Cell row=\"1\" col=\"4\" text=\"PCS\"/><Cell row=\"1\" col=\"5\" text=\"PNL\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:RESOURCEID\"/><Cell col=\"2\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\" text=\"bind:DEFECTCODENAME\"/><Cell col=\"3\" text=\"bind:QCSEGMENTNAME\"/><Cell col=\"4\" text=\"bind:DEFECTQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0\" maskeditautoselect=\"true\"/><Cell col=\"5\" text=\"bind:DEFECTQTYPNL\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:DEFECTRATE\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,##0.00\"/><Cell col=\"7\" text=\"bind:CONSUMABLEDEFNAME\" expandshow=\"show\"/><Cell col=\"8\" text=\"bind:REASONCONSUMABLELOTID\" combodataset=\"ds_ReasonConsumableLot\" combocodecol=\"CONSUMABLELOTID\" combodatacol=\"CONSUMABLELOTID\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"9\" text=\"bind:REASONPROCESSSEGMENTNAME\" expandshow=\"show\"/><Cell col=\"10\" text=\"bind:REASONAREANAME\"/></Band><Band id=\"summary\"><Cell colspan=\"4\" text=\"합계\"/><Cell col=\"4\" expr=\"dataset.getSum(&quot;DEFECTQTY&quot;) \" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"5\" expr=\"dataset.getSum(&quot;DEFECTQTYPNL&quot;) \" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"6\" expandchar=\"%\" expandsize=\"24\" maskeditformat=\"#,##0.00\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;DEFECTRATE&quot;)\" maskedittype=\"number\" maskeditpostfixtext=\" %\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage5.addChild(obj.name, obj);

            obj = new Static("title1_01_01","grd_inspectionList:10","34","79","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage5.form);
            obj.set_taborder("8");
            obj.set_text("이미지 추가");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage5.addChild(obj.name, obj);

            obj = new Grid("grd_defect","0","10","402",null,null,"0",null,null,null,null,this.div_work.form.tab.Tabpage5.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_inspectionMain");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" text=\"자원 ID\" cssclass=\"cell_headMaster\"/><Cell col=\"2\" rowspan=\"2\" text=\"차수\"/><Cell col=\"3\" colspan=\"2\" text=\"전체\" cssclass=\"cell_headMaster,cell_end\"/><Cell row=\"1\" col=\"1\" text=\"분할 Lot No.\"/><Cell row=\"1\" col=\"3\" text=\"PNL\"/><Cell row=\"1\" col=\"4\" text=\"PCS\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:RESOURCEID\"/><Cell col=\"2\" text=\"bind:DEGREE\"/><Cell col=\"3\" text=\"bind:ALLQTYPNL\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0\" maskeditautoselect=\"true\"/><Cell col=\"4\" text=\"bind:ALLQTYPCS\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,##0\" maskeditautoselect=\"true\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage5.addChild(obj.name, obj);

            obj = new Static("label00_01","412","9","69","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage5.form);
            obj.set_taborder("1");
            obj.set_text("분할 Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_textAlign("left");
            obj.set_padding("0px");
            this.div_work.form.tab.Tabpage5.addChild(obj.name, obj);

            obj = new Edit("edt_childLotId","label00_01:5","9","230","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage5.form);
            obj.set_taborder("2");
            this.div_work.form.tab.Tabpage5.addChild(obj.name, obj);

            obj = new Static("title1_01_00","412","34","62","34","784",null,null,null,null,null,this.div_work.form.tab.Tabpage5.form);
            obj.set_taborder("3");
            obj.set_text("불량정보");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            this.div_work.form.tab.Tabpage5.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"40","26","24","386",null,null,null,null,null,this.div_work.form.tab.Tabpage5.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.form.tab.Tabpage5.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"40","26","24","360",null,null,null,null,null,this.div_work.form.tab.Tabpage5.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab.Tabpage5.addChild(obj.name, obj);

            obj = new Button("Button21_02_00",null,"40","86","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage5.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("이미지 추가");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage5.addChild(obj.name, obj);

            obj = new Div("div_00",null,"68","350",null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage5.form);
            obj.set_taborder("9");
            obj.set_text("div_00");
            obj.set_cssclass("div_WF_detail");
            this.div_work.form.tab.Tabpage5.addChild(obj.name, obj);

            obj = new ImageViewer("img_inspectionList2","50.86%","10",null,null,"10","10",null,null,null,null,this.div_work.form.tab.Tabpage5.form.div_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("img_photo");
            this.div_work.form.tab.Tabpage5.form.div_00.addChild(obj.name, obj);

            obj = new ImageViewer("img_inspectionList1","10","10",null,null,"img_inspectionList2:5","10",null,null,null,null,this.div_work.form.tab.Tabpage5.form.div_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("img_photo");
            obj.set_stretch("fit");
            this.div_work.form.tab.Tabpage5.form.div_00.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_ReasonProcessSegment","783","789","450","221",null,null,null,null,null,null,this);
            obj.set_text("pdv_00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ReasonProcessSegment","0","0",null,null,"0","0",null,null,null,null,this.pdv_ReasonProcessSegment.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_ReasonProcessSegment");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"88\"/><Column size=\"177\"/><Column size=\"77\"/><Column size=\"101\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공정ID\"/><Cell col=\"1\" text=\"공정명\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"작업장\"/></Band><Band id=\"body\"><Cell text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\"/><Cell col=\"3\" text=\"bind:AREANAME\"/></Band></Format></Formats>");
            this.pdv_ReasonProcessSegment.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_ReasonConsumableList","293","749","450","221",null,null,null,null,null,null,this);
            obj.set_text("pdv_00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ReasonConsumableList","0","0",null,null,"0","0",null,null,null,null,this.pdv_ReasonConsumableList.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_ReasonConsumableList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"106\"/><Column size=\"72\"/><Column size=\"163\"/><Column size=\"101\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자재ID\"/><Cell col=\"1\" text=\"자재버전\"/><Cell col=\"2\" text=\"자재명\"/><Cell col=\"3\" text=\"자재유형\"/></Band><Band id=\"body\"><Cell text=\"bind:CONSUMABLEDEFID\"/><Cell col=\"1\" text=\"bind:CONSUMABLEDEFVERSION\"/><Cell col=\"2\" text=\"bind:CONSUMABLEDEFNAME\"/><Cell col=\"3\" text=\"bind:MATERIALTYPE\"/></Band></Format></Formats>");
            this.pdv_ReasonConsumableList.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_ReasonLotList","303","669","250","221",null,null,null,null,null,null,this);
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

            obj = new BindItem("item3","div_work.form.Div01.form.edt_userName","value","ds_inspectorPop","USERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_work.form.Div01.form.edt_grade","value","ds_inspectorPop","GRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_work.form.Div01.form.edt_userId","value","ds_inspectorPop","USERID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_work.form.Div01.form.edt_inspectorId","value","ds_inspectorPop","INSPECTORID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_work.form.tab.Tabpage1.form.msk_defectLevel","value","ds_inspectorDegree","AQLDEFECTLEVEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_work.form.tab.Tabpage1.form.msk_inspectionLevel","value","ds_inspectorDegree","AQLINSPECTIONLEVEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_work.form.tab.Tabpage4.form.Div01.form.edt_title","value","ds_message","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_work.form.tab.Tabpage4.form.Div01.form.txt_message","value","ds_message","MESSAGE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM09600M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM09600M.xfdl","qam::qamInspectionHelper.xjs");
        this.registerScript("PCM09600M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 출하 합/불 판정(작업완료)
         * 파일명 		: PCM09600M.xfdl
         * 작성자 		: 이용국
         * 작성일 		: 2021.04.27
         *
         * 설  명		: 공정관리-최종검사-출하 합/불 판정(작업완료)
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.27	이용국   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("qam::qamInspectionHelper.xjs"); /*include "qam::qamInspectionHelper.xjs"*/; //

        /**************************************************************************

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
         var bAutoTransit= true;
          //첫번째 탭 불량 그리드
         this.Defect = {
        		inspectQty :	0   	//검사 수량(pcs 기준)
        	  , pcsPnl :    0   		//기준 (PCS / PNL) 수량
        	  , InspectionDefId : "" 	//검사정의 ID
        	  , SelectedLotId : "" 		//Selected Lot ID
        	  , panelPerQty : 0			//usDefectGrid 의 member
        	  , qty : 0					//usDefectGrid 의 member
         };

         this.DefectSegments = "";
         this.g_event;
         this.pnlQty_enter = false;
         this.jobType;        //작업타입(insertData/updateData)
         this.resourceType = "ShipmentInspection";
         this.fileUploadCount = 3;
         this.g_lotPcsQty = 0.0;  //Lot정보의 수량(PCS) : PCSQTY

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        //	this.basfn_removeEventGrid(this.div_work.form.t .form.tab.Tabpage1.form.grd_lotSplit);

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
        	this.fn_searchKeyInfo();
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

        	var transitAreaId = this.div_work.form.Div01.form.cbo_transitArea.value;
        	var idx = this.ds_transitArea.findRow("RESOURCEID",transitAreaId);
        	var resourceId = this.nfn_nvl(this.ds_transitArea.getColumn(idx,"RESOURCEID"),"");
        	var areaId = this.nfn_nvl(this.ds_transitArea.getColumn(idx,"AREAID"),"");

        	if(this.ds_lotSplitList.rowcount < 1){
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

        	//필수값 체크
        	if(this.nfn_isNull(this.div_work.form.Div01.form.edt_inspectorId.value) ||(bAutoTransit == true && this.nfn_isNull(this.div_work.form.Div01.form.cbo_transitArea.value))){
        		this.gfn_Message("SelectInspectorAndTransitArea", "", "warning", "ok");
        		return;
        	}
        	if(this.ds_lotSplitList.getCaseCount("CHK == 1") < 1) {
        	     // 저장할 데이터가 존재하지 않습니다.
        		this.gfn_Message("NoSaveData", "", "warning", "ok");
        		return;
        	}

            this.ds_body.clearData();
        	var nRow = this.ds_body.addRow();
        	this.ds_body.setColumn(nRow, "ENTERPRISEID", 		this.gf_getEnterpriseId());
        	this.ds_body.setColumn(nRow, "PLANTID", 			this.gf_getSiteType());
        	this.ds_body.setColumn(nRow, "AQLORNCR", 			this.div_work.form.tab.Tabpage1.form.cbo_standardType.value);
        	this.ds_body.setColumn(nRow, "INSPECTIONUSER", 		this.div_work.form.Div01.form.edt_inspectorId.value);
        	this.ds_body.setColumn(nRow, "AREAID", 				areaId);
        	this.ds_body.setColumn(nRow, "RESOURCEID", 			resourceId);
        	this.ds_body.setColumn(nRow, "INSPECTIONDATE", 		"");
        	this.ds_body.setColumn(nRow, "INSPECTIONDEFID", 	"ShipmentInspection");

        	// 체크된 Lot 기준으로 Defect Code List를 Join하여 데이터를 한번 걸러냄
        	var idx =0;
        	var resourceId = "";
        	var inspectionQty = "";
        	var inspectionResult = "";
        	var isSave ="N";

        	this.ds_saveLot.clearData();
        	this.ds_saveReturn.clearData();
        //     this.ds_inspectionList_save.clearData();
         	this.ds_lotSplitList_save.clearData();

        // 	this.ds_lotSplitList_save.set_enableevent(false);
         	this.ds_lotSplitList_save.copyData(this.ds_lotSplitList, true);
         	this.ds_lotSplitList_save.filter("CHK=='1'");
        // 	this.ds_lotSplitList_save.set_enableevent(true);

        	for(var i=0; i < this.ds_lotSplitList_save.rowcount; i++){

        		isSave ="Y";
        //		this.ds_inspectionList_save.copyData(this.ds_inspectionList, true);

        		var nRow = this.ds_saveLot.addRow();

        		resourceId = this.nfn_nvl(this.ds_lotSplitList_save.getColumn(i, "RESOURCEID"));
        		inspectionQty = this.nfn_nvl(this.ds_lotSplitList_save.getColumn(i,"INSPECTIONQTY"),"0");
        		inspectionResult = this.nfn_nvl(this.ds_lotSplitList_save.getColumn(i,"INSPECTIONRESULT"),"");

        		this.ds_inspectionList.filter("");
        		this.ds_inspectionList.filter("RESOURCEID == '" + resourceId + "'");
        		if(this.ds_inspectionList.rowcount > 0) {
        			idx = this.ds_inspectionList.findRow("RESOURCEID",resourceId);
        			this.ds_inspectionList.setColumn(idx,"DEFECTQTYSUM",nexacro.toNumber(this.nfn_nvl(this.ds_inspectionList.getSum("DEFECTQTY"), "0")));
        		}

        		if(inspectionQty == "0") {
        			// 검사 수량을 먼저 입력하세요
        			this.gfn_Message("NoInspectionQtyAndPnl", "", "warning", "ok");
        			isSave= "N";
        			break
        		}

        		if(inspectionResult == "") {
        			// 저장할 데이터가 존재하지 않습니다.
        			this.gfn_Message("NoSaveData", "", "warning", "ok");
        			isSave= "N";
        			break;
        		}

        		this.ds_saveLot.setColumn(nRow, "RESOURCEID", 			resourceId);
        		this.ds_saveLot.setColumn(nRow, "DEGREE", 			    this.ds_lotSplitList_save.getColumn(i,"DEGREE"));
        		this.ds_saveLot.setColumn(nRow, "ALLQTYPNL", 			this.ds_lotSplitList_save.getColumn(i,"ALLQTYPNL"));
        		this.ds_saveLot.setColumn(nRow, "ALLQTYPCS", 			this.ds_lotSplitList_save.getColumn(i,"ALLQTYPCS"));
        		this.ds_saveLot.setColumn(nRow, "GOODQTYPNL", 			this.ds_lotSplitList_save.getColumn(i,"GOODQTYPNL"));
        		this.ds_saveLot.setColumn(nRow, "GOODQTYPCS", 			this.ds_lotSplitList_save.getColumn(i,"GOODQTYPCS"));
        		this.ds_saveLot.setColumn(nRow, "DEFECTQTYPNL", 		this.ds_lotSplitList_save.getColumn(i,"DEFECTQTYPNL"));
        		this.ds_saveLot.setColumn(nRow, "SPECOUTQTY", 			this.ds_lotSplitList_save.getColumn(i,"SPECOUTQTY"));
        		this.ds_saveLot.setColumn(nRow, "DEFECTRATE", 			this.ds_lotSplitList_save.getColumn(i,"DEFECTRATE"));
        		this.ds_saveLot.setColumn(nRow, "INSPECTIONQTY", 		inspectionQty);
        		this.ds_saveLot.setColumn(nRow, "INSPECTIONRESULT", 	inspectionResult);
        		this.ds_saveLot.setColumn(nRow, "PANELPERQTY", 			this.ds_lotSplitList_save.getColumn(i,"PANELPERQTY"));
        		this.ds_saveLot.setColumn(nRow, "QCGRADE", 				this.ds_lotSplitList_save.getColumn(i,"QCGRADE"));
        		this.ds_saveLot.setColumn(nRow, "PRIORITY", 			this.ds_lotSplitList_save.getColumn(i,"PRIORITY"));
        		this.ds_saveLot.setColumn(nRow, "AQLINSPECTIONLEVEL", 	this.ds_lotSplitList_save.getColumn(i,"AQLINSPECTIONLEVEL"));
        		this.ds_saveLot.setColumn(nRow, "AQLDEFECTLEVEL", 		this.ds_lotSplitList_save.getColumn(i,"AQLDEFECTLEVEL"));
        		this.ds_saveLot.setColumn(nRow, "PROCESSRELNO", 		this.ds_lotSplitList_save.getColumn(i,"PROCESSRELNO"));
        		this.ds_saveLot.setColumn(nRow, "ACCEPTDATE", 			this.ds_lotSplitList_save.getColumn(i,"ACCEPTDATE"));
        		this.ds_saveLot.setColumn(nRow, "REQUESTUSER", 			this.ds_lotSplitList_save.getColumn(i,"REQUESTUSER"));
        		this.ds_saveLot.setColumn(nRow, "DESCRIPTION", 			this.ds_lotSplitList_save.getColumn(i,"DESCRIPTION"));
        		this.ds_saveLot.setColumn(nRow, "PLANTID", 				this.ds_lotSplitList_save.getColumn(i,"PLANTID"));
        		this.ds_saveLot.setColumn(nRow, "ENTERPRISEID", 		this.ds_lotSplitList_save.getColumn(i,"ENTERPRISEID"));
        		this.ds_saveLot.setColumn(nRow, "ISSEND", 				this.ds_lotSplitList_save.getColumn(i,"ISSEND"));
        		this.ds_saveLot.setColumn(nRow, "RESULTITEM", 			this.ds_lotSplitList_save.getColumn(i,"RESULTITEM"));
        		this.ds_saveLot.setColumn(nRow, "SAMPLEQTY", 			this.ds_lotSplitList_save.getColumn(i,"SAMPLEQTY"));
        		this.ds_saveLot.setColumn(nRow, "STEPTYPE", 			this.ds_lotSplitList_save.getColumn(i,"STEPTYPE"));
        	}

        	this.ds_message.clearData();   //테스트를위해 임시셋팅
        	trace("---------------------------------------------------------ds_lotInfo");
        	trace(this.ds_lotInfo.saveXML());
        	trace("---------------------------------------------------------ds_body");
        	trace(this.ds_body.saveXML());
        	trace("---------------------------------------------------------ds_lotSplitList_save");
        	trace(this.ds_lotSplitList_save.saveXML());
        	trace("---------------------------------------------------------ds_lotSplitDetailList");
        	trace(this.ds_lotSplitDetailList.saveXML());
        	trace("---------------------------------------------------------ds_message");
        	trace(this.ds_message.saveXML());
        	trace("---------------------------------------------------------ds_inspectionList");
        	trace(this.ds_inspectionList.saveXML());
        	trace("---------------------------------------------------------ds_saveLot");
        	trace(this.ds_saveLot.saveXML());

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	if(isSave == "Y") {
        		var sSvcID 			= "saveShipmentInspection";
        		var sController 	= "/pcm09600/saveShipmentInspection.do";
        		var sInDatasets 	= "ds_body=ds_body ds_lotSplitList=ds_saveLot:U ds_lotSplitDetailList=ds_lotSplitDetailList ds_message=ds_message ds_inspectionList=ds_inspectionList";
        		var sOutDatasets    = "ds_saveReturn=output";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
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
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	} else {
        		if(trId =="selectUOM"){
        			//판정기준 콤보조회
        			var idx = this.ds_uom.findRow("CODE","PCS");
        			this.div_work.form.Div01.form.cbo_uom.set_index(idx);

        			//standardType
        			var sSvcID 			= "selectStandardType";
        			var sController 	= "/basCommon/selectCustomQuery.do";
        			var sInDatasets   	= "";
        			var sOutDatasets  	= "ds_standardType=output";
        			var sArgs 		  	= "";
        			sArgs 			+= this.gfn_setParam("SQL_ID", "selectCodeList");
        			sArgs 			+= this.gfn_setParam("LOOKUP_TYPE", "InspectionDecisionClass");
        			this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);

        		} else if(trId =="selectStandardType"){
        			//판정기준 콤보셋팅
        			var idx = this.ds_standardType.findRow("CODE","AQL");
        			this.div_work.form.tab.Tabpage1.form.cbo_standardType.set_index(idx);

        		} else if(trId == "selectAreaResourceByLot"){	/* Step1_1 Callback : 작업장, Lot ID 체크 */
        			if(this.ds_dt.rowcount < 1) {
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
        				this.fn_searchStaying();
        			}

        		} else if (trId == "getCheckStaying"){
        			if (this.nfn_nvl(this.ds_dtStaying.getColumn(0, "ISLOCKING"), "") == "Y"){
        				// 채공팝업
        				var popupId = "SEARCH_StayReasonCode";
        				var oArg = {};

        				oArg.arg_ds_dtStaying = this.ds_dtStaying;
        				this.gfn_openPopup(popupId,"pcm::PCM01700P1.xfdl",oArg,"width=556,height=409");	/* Step2_2 popupAfter 호출 */
         			} else {
        				this.fn_checkLot();
         			}
        		} else if(trId =="selectLotInfoByProcess"){
        			if (this.ds_lotInfo.rowcount < 1)
        			{
        				this.ds_lotInfo.addRow();
        				// 조회할 데이터가 없습니다.
        				this.gfn_Message("LotStateIsNotAvailableReceive", "\nLot No : " +this.ds_dt.getColumn(0,"LOTID"), "warning", "ok");
        				this.clearDetailInfo();
        				this.ds_search.setColumn(0, "LOTID", "");
        				this.div_work.form.divSearch.form.edt_lotId.setFocus();
        				return;
        			} else {
        			 //1.검색한 LOT LOCKING시 메세지(검사대상나오지않음)/ 검색한 LOT LOCKING아닐때 LOCKING아닌 LOT검사대상으로 조회
        				if(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "ISLOCKING"), "") == "Y"){
         					//해당 Lot이 Locking 상태입니다. {0}
         					this.gfn_Message("LotIsLocking", this.nfn_nvl(this.ds_lotInfo.getColumn(0, "LOTID"), ""), "warning", "ok");
        					this.clearDetailInfo();
        					return;
        				}
        				//3.인계 작업장 셋팅
        				if(this.ds_transitArea.rowcount > 0)
        				{
        					bAutoTransit = true;
        					//자동 인계 - 인계작업장 선택
        					this.div_work.form.Div01.form.cbo_transitArea.set_readonly(false);
        					this.div_work.form.Div01.form.cbo_transitArea.set_index(0);
        				} else {
        					//수동인계 - 인계작업장 선택 안함 - readOnly
        					bAutoTransit = false;
        					this.div_work.form.Div01.form.cbo_transitArea.set_readonly(true);
        				}

        //				trace(this.ds_inspectorDegree.saveXML());
        				if(this.ds_inspectorDegree.rowcount < 1) {
         					// 판정기준이 없습니다.
         					this.gfn_Message("NoStandardData", "", "warning", "ok");
        					this.clearDetailInfo();
        				} else {
        					this.fn_searchOthers();
        				}

        			}
        		} else if(trId =="selectOtherInfo"){
        			trace("this.ds_lotSplitList.saveXML()=====>"+this.ds_lotSplitList.saveXML());
        			this.div_work.form.tab.set_tabindex(0);
        			this.div_work.form.tab.Tabpage1.form.cbo_standardType.set_index(0);
        			this.fn_setTotDisplayQty();

        		} else if(trId =="SelectLotListForShipmentInspection"){


        		} else if(trId =="SelectLotMessageShipmentInsp"){

        // 			this.div_work.form.tab.Tabpage4.form.Div01.form.edt_title.set_value(this.ds_message.getColumn(0,"TITLE"));
        // 			this.div_work.form.tab.Tabpage4.form.Div01.form.txt_message.set_value(this.ds_message.getColumn(0,"MESSAGE"));

        		} else if(trId =="SelectAQLCheckBasis"){
        			if(this.ds_AQLCheckBasis.rowcount < 1) {
        				// 판정기준이 없습니다.
        				this.gfn_Message("NoStandardData", "", "warning", "ok");
        				this.clearDetailInfo();
        			} else {

        //				this.fn_SetQcGradeAndResultAQLType();
        			}

        		} else if(trId =="SelectAQLActionGrade"){
        			if(this.ds_AQLActionGrade.rowcount < 1) {
        				// 판정기준이 없습니다.
        				this.gfn_Message("NoStandardData", "", "warning", "ok");
        				this.clearDetailInfo();
        			} else {


        			}
        		} else if(trId =="SelectNCRCheckBasis"){
        			if(this.ds_NCRCheckBasis.rowcount < 1) {
        				// 판정기준이 없습니다.
        				this.gfn_Message("NoStandardData", "", "warning", "ok");
        				this.clearDetailInfo();
        			} else {

        			}
        		} else if(trId =="SelectLotQtyInfoByWeek"){

        		} else if (trId == "saveShipmentInspection"){

        			trace("--------------------------------------------------------ds_saveReturn");
        			trace(this.ds_saveReturn.saveXML());
        			this.ds_saveLot.filter("");
        			this.ds_saveLot.filter("INSPECTIONRESULT == 'NG'");

        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			if(this.ds_saveReturn.rowcount > 0) {
        				this.fn_setSendEmail();
        			}
        			this.div_work.form.divSearch.form.edt_lotId.set_value("");
        			this.clearDetailInfo();
        		}
        	}
        };

        this.fn_print = function(obj, e)
        {

        };

        this.clearDetailInfo = function()
        {
        	this.div_work.form.Div01.form.txtSumGoodQty.set_value("0");
        	this.div_work.form.Div01.form.txtSumDefectQty.set_value("0");
        	this.div_work.form.Div01.form.edt_inspectorId.set_value("");
        	this.div_work.form.Div01.form.edt_userName.set_value("");
        	this.div_work.form.Div01.form.edt_grade.set_value("");
        	this.div_work.form.Div01.form.edt_userId.set_value("");
        	this.div_work.form.tab.Tabpage1.form.msk_splitLotId.set_value("");
        	this.div_work.form.tab.Tabpage1.form.msk_lastInspector.set_value("");
        	this.div_work.form.tab.Tabpage1.form.msk_ngCnt.set_value("0");
        	this.div_work.form.tab.Tabpage5.form.edt_childLotId.set_value("");

        	this.ds_lotInfo.clearData();
        	this.ds_lotInfo.addRow();
        	this.ds_lotSplitList.clearData();
        	this.ds_lotSplitDetailList.clearData();
        	this.ds_weekInfoList.clearData();
        	this.ds_chgHistList.clearData();
        	this.ds_message.clearData();
        	this.ds_messageMain.clearData();
        	this.ds_inspectionList.clearData();
        	this.ds_inspectionMain.clearData();
        	this.ds_transitArea.clearData();
        	this.ds_inspectorDegree.clearData();
        }

        /*
         * Step1_1 : 작업장, Lot ID 체크
         */
        this.fn_searchKeyInfo = function()
        {
        	this.clearDetailInfo();

        	this.ds_dt.clearData();
        	this.ds_search.setColumn(0, "ENTERPRISEID", 	this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID", 			this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 	this.gf_getLanguageType());
         	this.ds_search.setColumn(0, "AREAID",           this.div_work.form.divSearch.form.edt_area_id.value);
        	this.ds_search.setColumn(0, "LOTID", 			this.div_work.form.divSearch.form.edt_lotId.value);
         	this.ds_search.setColumn(0, "SQL_ID", 			"selectAreaResourceByLot");

        	var sSvcID 			= "selectAreaResourceByLot";
        	var sController 	= "/pcm09600/selectCustomQuery.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_dt=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /*
         * Step2_1 : 체공상태 체크
         */
        this.fn_searchStaying = function()
        {
        	this.ds_dtStaying.clearData();
        	this.ds_search.setColumn(0, "SQL_ID", 			"getCheckStaying");

        	var sSvcID 			= "getCheckStaying";
        	var sController 	= "/pcm09600/selectCustomQuery.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets  	= "ds_dtStaying=output";
        	var sArgs 		  	= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);
        }

        /*
         *	Step4_1 : Lot Check 체크
         */
        this.fn_checkLot = function ()
        {
        	var processDefType ="";
        	if (this.ds_processDefTypeInfo.rowcount > 0){
        		processDefType = this.nfn_nvl(this.ds_processDefTypeInfo.getColumn(0, "PROCESSDEFTYPE"), "");
        	}

        	this.ds_lotInfo.clearData();
         	this.ds_search.setColumn(0, "PROCESSSTATE", "Run");
        	this.ds_search.setColumn(0, "SQL_ID", 	"selectLotInfoByProcess");

        	var sSvcID 			= "selectLotInfoByProcess";
        	var sController 	= "/pcm09600/selectCustomQuery.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_lotInfo=output ds_transitArea=output1 ds_inspectorDegree=output2 ds_ReasonConsumableList=output3 ds_ReasonConsumableLot=output4 ds_ReasonProcessSegment=output5 ";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs); /* Step 3_2 호출 */
        };

        /*
         * Step5 : 분할,전달사항,특기사항,공정SPEC 조회
         */
        this.fn_searchOthers = function()
        {
        	this.ds_lotSplitList.clearData();
        	this.ds_weekInfoList.clearData();
        	this.ds_chgHistList.clearData();
         	this.ds_message.clearData();

         	this.ds_search.setColumn(0, "PROCESSSTATE", "Run");
         	this.ds_search.setColumn(0, "PRODUCTDEFID", this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PRODUCTDEFID"), ""));
         	this.ds_search.setColumn(0, "P_SPCLEVEL", this.nfn_nvl(this.ds_inspectorDegree.getColumn(0, "AQLINSPECTIONLEVEL"), ""));
         	this.ds_search.setColumn(0, "P_DEFLEVEL", this.nfn_nvl(this.ds_inspectorDegree.getColumn(0, "AQLDEFECTLEVEL"), ""));
         	this.ds_search.setColumn(0, "STANDARD_TYPE", "AQL");

        	trace("fn_searchOthers===>"+this.ds_search.saveXML());

        	var sSvcID 			= "selectOtherInfo";
        	var sController 	= "/pcm09600/selectOtherInfo.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets  	= "ds_lotSplitList=output1 ds_messageMain=output1 ds_inspectionMain=output1 ds_weekInfoList=output2 ds_chgHistList=output3 ds_message=output4";
        	var sArgs 		  	= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);
        }

        this.fn_SelectLotListForShipmentInspection = function(type)
        {
        	this.ds_lotSplitList.clearData();
        	this.ds_lotSplitDetailList.clearData();
        	this.ds_messageMain.clearData();
        	this.ds_message.clearData();
        	this.ds_inspectionMain.clearData();
        	this.ds_inspectionList.clearData();

         	this.ds_search.setColumn(0, "PROCESSSTATE", "Run");
         	this.ds_search.setColumn(0, "PRODUCTDEFID", this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PRODUCTDEFID"), ""));
         	this.ds_search.setColumn(0, "SQL_ID", 			"SelectLotListForShipmentInspection");
         	this.ds_search.setColumn(0, "STANDARD_TYPE", type);

        	var sSvcID 			= "SelectLotListForShipmentInspection";
        	var sController 	= "/pcm09600/selectCustomQuery.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets  	= "ds_lotSplitList=output ds_messageMain=output ds_inspectionMain=output";
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
        			oArg.arg_searchStr = "1=1|TXTAREA="+this.nfn_nvl(searchKey,"");
        		}
        	}

        	//검사자 조회
        	if(svcId =="INSPECTOR"){
        		var searchKey = this.div_work.form.Div01.form.edt_userName.value;
        		var inspectionClassId = "ShipmentInspection";
        		var areaId = this.ds_lotInfo.getColumn(0, "AREAID");
        		if(this.gf_getEnterpriseId() == "YOUNGPOONG") {
        			var isNormal = true;
        			isNormal = this.gfn_isNull(this.ds_lotInfo.getColumn(0, "LOTTYPE") == "Production") || this.gfn_isNull(this.ds_lotInfo.getColumn(0, "LOTTYPE") == "FirstProduction");
        			inspectionClassId = isNormal ?"'ShipmentInspection'":"'ShipmentInspection','DevelopmentInspection'";
        			areaId = isNormal ?"'ShipmentInspection'":"'ShipmentInspection','DevelopmentInspection'";
        		}

        		oArg.arg_type = "DA";
        		oArg.arg_paramCols = "SQL_ID|PRODUCTDEFID|PRODUCTDEFVERSION|INSPECTIONCLASSID|AREAID";
        		oArg.arg_paramValues = "GetShipInspector"
        							+"|"+ this.ds_inspectorDegree.getColumn(0, "RESOURCEID")
        							+"|"+ this.ds_inspectorDegree.getColumn(0, "RESOURCEVERSION")
        							+"|"+ inspectionClassId
        							+"|"+ areaId;
        		oArg.arg_rtnCols = "INSPECTORID|USERNAME|GRADE|USERID";
        		oArg.arg_searchStr = "1=1|USERIDNAME="+this.nfn_nvl(searchKey,"");
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
        	}

        	if (sPopupId == "SEARCH_DEFECT")
        	{//DEFECTCODE|DEFECTCODENAME|QCSEGMENTID|QCSEGMENTNAME|DECISIONDEGREE|SEGMENT_DEFECTCODE|SEGMENT_DEFECTNAME
        		if(this.div_work.form.tab.tabindex ==0) {
        			if(this.nfn_isNull(rtn[4])) {
        				this.gfn_Message("NoStandardData", "", "warning", "ok");
        				return false;
        			}

        			//if(this.ds_lotSplitList.findRow("SEGMENT_DEFECTCODE",rtn[5]) >= 0 ) return;
        			var nRow = this.ds_lotSplitDetailList.rowcount == 1 ? 0 : this.ds_lotSplitDetailList.rowposition;
        			this.ds_lotSplitDetailList.setColumn(nRow,"DEFECTCODE",rtn[0]);
        			this.ds_lotSplitDetailList.setColumn(nRow,"DEFECTCODENAME",rtn[1]);
        			this.ds_lotSplitDetailList.setColumn(nRow,"QCSEGMENTID",rtn[2]);
        			this.ds_lotSplitDetailList.setColumn(nRow,"QCSEGMENTNAME",rtn[3]);
        			this.ds_lotSplitDetailList.setColumn(nRow,"INSPECTIONRESULT","OK");
        			this.ds_lotSplitDetailList.setColumn(nRow,"DECISIONDEGREE",rtn[4]);
        			this.ds_lotSplitDetailList.setColumn(nRow,"SEGMENT_DEFECTCODE",rtn[5]);
        			this.ds_lotSplitDetailList.setColumn(nRow,"SEGMENT_DEFECTNAME",rtn[6]);
        		} else if(this.div_work.form.tab.tabindex ==4) {

        			var nRow = this.ds_inspectionList.rowcount == 1 ? 0 : this.ds_inspectionList.rowposition;
        			this.ds_inspectionList.setColumn(nRow,"DEFECTCODE",rtn[0]);
        			this.ds_inspectionList.setColumn(nRow,"DEFECTCODENAME",rtn[1]);
        			this.ds_inspectionList.setColumn(nRow,"QCSEGMENTID",rtn[2]);
        			this.ds_inspectionList.setColumn(nRow,"QCSEGMENTNAME",rtn[3]);

        		}
        	}

        	if(sPopupId=="SEARCH_RESOURCE"){
        		rtn = JSON.parse(rtn);
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
        			this.clearDetailInfo();
        		}
        	}

        	if(sPopupId =="INSPECTOR"){
         		this.div_work.form.Div01.form.edt_inspectorId.set_value(rtn[0]);
         		this.div_work.form.Div01.form.edt_userName.set_value(rtn[1]);
         		this.div_work.form.Div01.form.edt_grade.set_value(rtn[2]);
         		this.div_work.form.Div01.form.edt_userId.set_value(rtn[3]);
        	}

            if (sPopupId == "file_upload_lotSplitDetailList")
        	{
        		trace("========================="+this.ds_lotSplitDetailList.saveXML()+"===============================");
        	   if (!this.nfn_isNull(rtn)) //변경유무
        	   {
        		   this.fn_setImageFilePopup("this.div_work.form.tab.Tabpage1.form.div_00.form.img_lotSplitDetailList", this.ds_lotSplitDetailList);
                }
        		return;
        	}

            if (sPopupId == "file_upload_inspectionList")
        	{
        		trace("========================="+this.ds_inspectionList.saveXML()+"===============================");
        	   if (!this.nfn_isNull(rtn)) //변경유무
        	   {
        		   this.fn_setImageFilePopup("this.div_work.form.tab.Tabpage5.form.div_00.form.img_inspectionList", this.ds_inspectionList);
                }
        		return;
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

        this.mfn_OpenDefectPopup = function ()
        {
        	var mRow = this.ds_lotSplitList.rowposition;
        	var nRow = this.ds_lotSplitDetailList.rowposition;

        	var popupId = "SEARCH_DEFECT";
        	var lotID = this.ds_lotSplitList.getColumn(mRow, "RESOURCEID");
        	var defectID = this.ds_lotSplitDetailList.getColumn(nRow,"DEFECTCODE");
        	var qcSegmentID = this.ds_lotSplitDetailList.getColumn(nRow,"QCSEGMENTID");
        	var language = this.gf_getLanguageType();

        	var oArg = {};
        	oArg.arg_type = "DA";
        	oArg.arg_popupCd = "P00274";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "DEFECTCODE|DEFECTCODENAME|QCSEGMENTID|QCSEGMENTNAME|DECISIONDEGREE|SEGMENT_DEFECTCODE|SEGMENT_DEFECTNAME";
        	oArg.arg_paramCols = "LOTID|SEGMENTID|LANGUAGETYPE|VERSION";
        	oArg.arg_paramValues = lotID + "|" + qcSegmentID+"|"+this.gf_getLanguageType()+"|10003";
        	oArg.arg_searchStr = this.gfn_isNull(defectID) ? "1=1" : "1=1|DEFECTCODENAME=" + defectID ;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };

        this.fn_SelectLotMessageShipmentInsp = function(row)
        {
        	this.ds_message.clearData();
        	this.ds_search.setColumn(0, "SQL_ID", 				"SelectLotMessageShipmentInsp");
        	this.ds_search.setColumn(0, "LOTID", 				this.nfn_nvl(this.ds_lotSplitList.getColumn(row, "RESOURCEID"),""));
        	this.ds_search.setColumn(0, "PRODUCTDEFID", 		this.nfn_nvl(this.ds_lotSplitList.getColumn(row, "PRODUCTDEFID"),""));
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", 	this.nfn_nvl(this.ds_lotSplitList.getColumn(row, "PRODUCTDEFVERSION"),""));

        	var sSvcID 			= "SelectLotMessageShipmentInsp";
        	var sController 	= "/pcm09600/selectCustomQuery.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_message=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
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
        	this.basfn_deleteRow(this.ds_lotSplit);
        };

        this.div_work_tab_Tabpage1_btn_addRow_onclick = function(obj,e)
        {
        	if(this.nfn_isNull(this.ds_lotInfo.getColumn(0, "LOTID"))) return;
        	var lotId 		= this.ds_lotInfo.getColumn(0, "LOTID");
        	var pnlperqty	= this.ds_lotInfo.getColumn(0, "PANELPERQTY");
        	var lotQty 		= nexacro.toNumber(this.ds_lotInfo.getColumn(0, "PCSQTY"));
        	var uom 		= this.div_work.form.tab.Tabpage1.form.cbo_uom.value;
        	var qty 		= this.div_work.form.tab.Tabpage1.form.spn_qty.value;
        	var chk 		= true;
            var splitQty 	= 0;
        	var count		= 0;
        	var dsObj 		= this.ds_lotSplit;
        	var dsLot		= this.ds_lotInfo;
        	var	usedQty		= nexacro.toNumber(dsObj.getSum("QTY"));

        	if(this.nfn_isNull(uom)) {
        		this.gfn_Message("SelectUOM", null, "warning", "ok");
        		return;
        	}

        	if(this.nfn_isNull(qty) || qty <= 0) {
        		this.gfn_Message("NotSplitQty", this.nfn_nvl(this.nfn_getDictionarynameUpper("SPLITQTY"),"분할수량"), "warning", "ok");
        		return;
        	}

        	if(usedQty >= lotQty){
        		return;
        	}

        	if(qty <= 0){
        		return;
        	}

        	if (uom=="PNL"){
        		splitQty = nexacro.toNumber(qty) * pnlperqty;
        	} else {
        		splitQty = nexacro.toNumber(qty);
        	}

        	if (splitQty > lotQty - usedQty)
        	{
        		splitQty = lotQty - usedQty;
        	}

        	count			= dsObj.rowcount;
        	var nRow 		= dsObj.addRow();
        	var panelQty 	= nexacro.ceil(nexacro.toNumber(splitQty) / nexacro.toNumber(pnlperqty));

        	if (count == 0){
        		dsObj.setColumn(nRow, "LOTID", lotId);
        		dsObj.setColumn(nRow, "ISPARENT", "Y");
        	} else {
        		dsObj.setColumn(nRow, "LOTID", "Split-" + count);
        		dsObj.setColumn(nRow, "ISPARENT", "N");
        	}

        	dsObj.setColumn(nRow, "PRODUCTDEFID", 		dsLot.getColumn(0, "PRODUCTDEFID"));
        	dsObj.setColumn(nRow, "PRODUCTDEFVERSION", 	dsLot.getColumn(0, "PRODUCTDEFVERSION"));
        	dsObj.setColumn(nRow, "PRODUCTDEFNAME", 	dsLot.getColumn(0, "PRODUCTDEFNAME"));
        	dsObj.setColumn(nRow, "UNIT", 				"PCS");
        	dsObj.setColumn(nRow, "PANELQTY", 			panelQty);
        	dsObj.setColumn(nRow, "QTY", 				splitQty);


        };

        this.ds_lotSplit_onvaluechanged = function(obj,e)
        {
        	if(this.nfn_isNull(this.ds_lotInfo.getColumn(0, "LOTID"))) return;
        	var lotId 		= this.ds_lotInfo.getColumn(0, "LOTID");
        	var pnlperqty	= this.ds_lotInfo.getColumn(0, "PANELPERQTY");
        	var lotQty 		= nexacro.toNumber(this.ds_lotInfo.getColumn(0, "PCSQTY"));
        	var uom 		= this.div_work.form.tab.Tabpage1.form.cbo_uom.value;
        	var qty 		= this.div_work.form.tab.Tabpage1.form.spn_qty.value;
        	var chk 		= true;
            var splitQty 	= 0;
        	var count		= 0;
        	var dsObj 		= this.ds_lotSplit;
        	var dsLot		= this.ds_lotInfo;
        	var	usedQty		= nexacro.toNumber(dsObj.getSum("QTY"));

        	if(this.nfn_isNull(uom)) {
        		this.gfn_Message("SelectUOM", null, "warning", "ok");
        		return;
        	}

        	if(e.columnid=="QTY"){
        		var panelQty 	= nexacro.ceil(nexacro.toNumber(e.newvalue) / nexacro.toNumber(pnlperqty));
        		dsObj.setColumn(e.row, "PANELQTY", 		panelQty);
        	}
        	if(e.columnid=="PANELQTY"){
        		var panelQty 	= nexacro.ceil(nexacro.toNumber(e.newvalue) * nexacro.toNumber(pnlperqty));
        		dsObj.setColumn(e.row, "QTY", 			panelQty);
        	}

        	usedQty		= nexacro.toNumber(dsObj.getSum("QTY"));

        	if(usedQty > usedQty){
        		this.gfn_Message("SplitQtyLessThanParentQty", null, "warning", "ok");
        		dsObj.setColumn(e.row, "PANELQTY", 	0);
        		dsObj.setColumn(e.row, "QTY", 		0);
        	}
        };

        this.div_work_tab_Tabpage1_grd_lotSplit_onheadclick = function(obj,e)
        {
        	//헤더 체크박스 이벤트 강제 호출
        	// Grid 전체선택/해제(Header에 checkbox있는 Grid에만 추가
        	this.gfn_setGridCheckAll(obj, e);
        };

        this.div_work_cbo_uom_onitemchanged = function(obj,e)
        {
        	this.fn_setTotDisplayQty();
        };

        this.ds_lotSplitList_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 0 ) return;

        	obj.set_enableevent(false);
        	this.fn_setTabInfoDisplay(0);
        	var lotId = this.ds_lotSplitList.getColumn(e.newrow, "RESOURCEID");
        	this.fn_inspectionResultCheck(lotId);
        	obj.set_enableevent(true);
        };

        this.div_work_tab_Tabpage1_cbo_standardType_onitemchanged = function(obj,e)
        {
        	//판정 기준을 바꾸면 입력한 모든데이터가 초기화 됩니다. 판정기준을 바꾸시겠습니까?
        	var bRtn = this.gfn_confirm("ChangeStandardResetShipInsp", "information","");
        	if (bRtn) //YES
        	{
        		var standardType = this.div_work.form.tab.Tabpage1.form.cbo_standardType.value;
        		if (standardType =="AQL")
        		{
        			if (this.nfn_isNull(this.ds_inspectorDegree.getColumn(0, "AQLINSPECTIONLEVEL"))
        				|| this.nfn_isNull(this.ds_inspectorDegree.getColumn(0, "AQLDEFECTLEVEL"))
        				|| this.nfn_isNull(this.ds_inspectorDegree.getColumn(0, "AQLDECISIONDEGREE")))
        			{
        				this.gfn_Message("NoStandardData", "", "warning", "ok");
        				this.div_work.form.tab.Tabpage1.form.cbo_standardType.set_value(e.prevalue);
        				return;
        			}
        			this.div_work.form.tab.Tabpage1.form.grd_lotSplit.setCellProperty('Body', 11, "edittype", "none");
        		}
        		else if (standardType =="NCR")
        		{
        			if (this.nfn_isNull(this.ds_inspectorDegree.getColumn(0, "NCRDECISIONDEGREE")))
        			{
        				this.gfn_Message("NoStandardData", "", "warning", "ok");
        				this.div_work.form.tab.Tabpage1.form.cbo_standardType.set_value(e.prevalue);
        				return;
        			}
        			this.div_work.form.tab.Tabpage1.form.grd_lotSplit.setCellProperty('Body', 11, "edittype", "mask");
        		}

        		this.fn_SelectLotListForShipmentInspection(standardType);
        	}
        };

        this.fn_SetQcGradeAndResultAQLType = function() {

        	this.ds_AQLActionGrade.clearData();
        	this.ds_search.setColumn(0, "SQL_ID", 				"SelectAQLActionGrade");
        	this.ds_search.setColumn(0, "P_INSPECTIONCLASSID", 	"ShipmentInspection");
        	this.ds_search.setColumn(0, "P_DECISIONDEGREE", 	this.nfn_nvl(this.ds_inspectorDegree.getColumn(0, "AQLDECISIONDEGREE"),""));

        	var sSvcID 			= "SelectAQLActionGrade";
        	var sController 	= "/pcm09600/selectCustomQuery.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_AQLActionGrade=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs); /* Step 3_2 호출 */
        };

        this.div_work_tab_Tabpage1_btn_grdAdd_onclick = function(obj,e)
        {
        	if(this.ds_lotSplitList.rowcount == 0)
        	{
        		this.gfn_Message("NotSeletedLot", "", "warning", "ok");
        		return;
        	}

        	var objDataset = this.ds_lotSplitDetailList;
        		objDataset.set_enableevent(false);

        	var nRow = objDataset.addRow();
        		objDataset.setColumn(nRow, "TXNHISTKEY", this.GetTXNHISTKEY());
        		objDataset.setColumn(nRow, "RESOURCEID", this.nfn_nvl(this.ds_lotSplitList.getColumn(this.ds_lotSplitList.rowposition, "RESOURCEID"),""));
        		objDataset.setColumn(nRow, "DEGREE",  this.nfn_nvl(this.ds_lotSplitList.getColumn(this.ds_lotSplitList.rowposition, "DEGREE"),""));
        		objDataset.setColumn(nRow, "INSPECTIONQTY",  this.nfn_nvl(this.ds_lotSplitList.getColumn(this.ds_lotSplitList.rowposition, "INSPECTIONQTY"),""));
        		objDataset.setColumn(nRow, "INSPECTIONQTYPNL",  this.nfn_nvl(this.ds_lotSplitList.getColumn(this.ds_lotSplitList.rowposition, "INSPECTIONQTYPNL"),""));
        		objDataset.setColumn(nRow, "DEFECTQTY", "0");
        		objDataset.setColumn(nRow, "DEFECTQTYPNL", "0");
        		objDataset.setColumn(nRow, "DEFECTRATE", "0%");
        		objDataset.set_enableevent(true);

        };

        this.div_work_tab_Tabpage1_btn_grdDel_onclick = function(obj,e)
        {

        	this.ds_lotSplitList.set_enableevent(false);
        	var lotId = this.ds_lotSplitList.getColumn(this.ds_lotSplitList.rowposition, "RESOURCEID");
        	this.ds_lotSplitDetailList.filter("");
        	this.ds_lotSplitDetailList.filter("RESOURCEID == '" + lotId + "'");
        	var nRow = this.ds_lotSplitDetailList.rowposition;
        	this.fn_setQty(this.ds_lotSplitDetailList.getColumn(nRow,"DEFECTQTY"));
        	//조회영역 불량수량 DISPLAY
        	this.fn_setTotDisplayQty();
        	this.ds_lotSplitDetailList.deleteRow(nRow);
        	this.fn_inspectionResultCheck1(lotId);
        	this.ds_lotSplitList.set_enableevent(true);

        };

        this.ds_weekInfoList_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 0) return;

        	this.ds_weekLotQty.clearData();
        	this.ds_search.setColumn(0, "SQL_ID", 				"SelectLotQtyInfoByWeek");
        	this.ds_search.setColumn(0, "WEEK", 				this.nfn_nvl(this.ds_weekInfoList.getColumn(e.newrow, "WEEK"),""));
        	this.ds_search.setColumn(0, "PROCESSSEGMENTID", 	this.nfn_nvl(this.ds_weekInfoList.getColumn(e.newrow, "PROCESSSEGMENTID"),""));
        	this.ds_search.setColumn(0, "PROCESSSEGMENTVERSION",this.nfn_nvl(this.ds_weekInfoList.getColumn(e.newrow, "PROCESSSEGMENTVERSION"),""));
        	this.ds_search.setColumn(0, "PRODUCTDEFID", 		this.nfn_nvl(this.ds_weekInfoList.getColumn(e.newrow, "PRODUCTDEFID"),""));
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", 	this.nfn_nvl(this.ds_weekInfoList.getColumn(e.newrow, "PRODUCTDEFVERSION"),""));

        	var sSvcID 			= "SelectLotQtyInfoByWeek";
        	var sController 	= "/pcm09600/selectCustomQuery.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_weekLotQty=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.div_work_tab_Tabpage1_grd_lotSplitDetailList_onexpandup = function(obj,e)
        {
        	this.g_event = e;
        	if(e.row <0) return;
        // 	if (this.nfn_isEqualCol(obj, e.cell, "DEFECTCODENAME"))
        // 	{
        		this.mfn_OpenDefectPopup();
        //	}
        };

        this.div_work_tab_Tabpage5_btn_grdAdd_onclick = function(obj,e)
        {
        	if(this.ds_inspectionMain.getRowCount() < 1) return;
        	this.ds_inspectionList.filter("");
        	this.ds_inspectionList.filter("RESOURCEID == '" + this.ds_inspectionMain.getColumn(this.ds_inspectionMain.rowposition,"RESOURCEID") + "'");

        	var idx = this.ds_lotSplitList.findRow("RESOURCEID",this.ds_inspectionMain.getColumn(this.ds_inspectionMain.rowposition, "RESOURCEID"));
        	var inspectionResult = this.ds_lotSplitList.getColumn(idx, "INSPECTIONRESULT");
        	if(inspectionResult == "NG") {
        		this.gfn_Message("CantNGLot", "", "warning", "ok");
        		return ;
        	}

        	this.ds_inspectionList.set_enableevent(false);

        	var nRow = this.ds_inspectionList.addRow();
        	this.ds_inspectionList.setColumn(nRow, "TXNHISTKEY", this.GetTXNHISTKEY());
        	this.ds_inspectionList.setColumn(nRow, "RESOURCEID", this.ds_inspectionMain.getColumn(this.ds_inspectionMain.rowposition, "RESOURCEID"));
        	this.ds_inspectionList.setColumn(nRow, "DEFECTQTY", "0");
        	this.ds_inspectionList.setColumn(nRow, "DEFECTQTYPNL", "0");
        	this.ds_inspectionList.setColumn(nRow, "DEFECTRATE", "0%");

        	this.ds_inspectionList.set_enableevent(true);

        };

        this.div_work_tab_Tabpage5_btn_grdDel_onclick = function(obj,e)
        {
        	this.ds_inspectionList.deleteRow(this.ds_inspectionList.rowposition);
        };

        this.div_work_tab_Tabpage5_grd_inspectionList_onexpandup = function(obj,e)
        {
        	this.g_event = e;
        	if(e.row <0) return;

        		if (this.nfn_isEqualCol(obj, e.cell, "DEFECTCODENAME"))
        		{
        			this.mfn_OpenDefectPopup();
        		}

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

        			if(this.nfn_isNull(this.ds_inspectionList.getColumn(e.row,"REASONCONSUMABLELOTID"))==false && this.ds_inspectionList.getColumn(this.g_event.row,"REASONCONSUMABLELOTID") != ""){
        				this.ds_ReasonProcessSegment.filter("REASONCONSUMABLELOTID == '" + this.ds_inspectionList.getColumn(this.g_event.row,"REASONCONSUMABLELOTID") + "'");
        			} else {
        				this.ds_ReasonProcessSegment.filter("");
        			}
        			this.pdv_ReasonProcessSegment.show();
        			this.pdv_ReasonProcessSegment.trackPopup(nLeft, nTop,  this.pdv_ReasonProcessSegment.width, this.pdv_ReasonProcessSegment.height, "fn_Callback_pdv_ReasonProcessSegment");

        		}
        };

        this.pdv_ReasonProcessSegment_grd_ReasonProcessSegment_oncelldblclick = function(obj,e)
        {
        	var segName = this.ds_ReasonProcessSegment.getColumn(this.ds_ReasonProcessSegment.rowposition,"PROCESSSEGMENTNAME");
        	var segID = this.ds_ReasonProcessSegment.getColumn(this.ds_ReasonProcessSegment.rowposition,"PROCESSSEGMENTID");
        	var aeraID = this.ds_ReasonProcessSegment.getColumn(this.ds_ReasonProcessSegment.rowposition,"AREAID");
        	var aeraName = this.ds_ReasonProcessSegment.getColumn(this.ds_ReasonProcessSegment.rowposition,"AREANAME");

        	this.ds_inspectionList.set_enableevent(false);

        	var nRow = this.ds_inspectionList.rowposition;

        	this.ds_inspectionList.setColumn(nRow,"REASONPROCESSSEGMENTID",segID); //공정ID
        	this.ds_inspectionList.setColumn(nRow,"REASONPROCESSSEGMENTNAME",segName); // 공정명
        	this.ds_inspectionList.setColumn(nRow,"REASONAREAID",aeraID);  //작업장ID
        	this.ds_inspectionList.setColumn(nRow,"REASONAREANAME",aeraName); //작업장명

        	this.ds_inspectionList.set_enableevent(true);

        	this.pdv_ReasonProcessSegment.closePopup();
        };

        this.pdv_ReasonConsumableList_grd_ReasonConsumableList_oncelldblclick = function(obj,e)
        {
        	//값 받아서 처리 로직 넣으세요
        	var idver = this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"SPLITCONSUMABLEDEFIDVERSION");
        	var prodName = this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"CONSUMABLEDEFNAME");
        	var prodID = this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"CONSUMABLEDEFID");
        	var prodVer = this.ds_ReasonConsumableList.getColumn(this.ds_ReasonConsumableList.rowposition,"CONSUMABLEDEFVERSION");

        	this.ds_inspectionList.set_enableevent(false);

        	var nRow = this.ds_inspectionList.rowposition;

        	this.ds_inspectionList.setColumn(nRow,"SPLITCONSUMABLEDEFIDVERSION",idver); // 자재ID | 자재버전
        	this.ds_inspectionList.setColumn(nRow,"CONSUMABLEDEFNAME",prodName); // 자재명
        	this.ds_inspectionList.setColumn(nRow,"REASONCONSUMABLEDEFID",prodID); // 자재ID
        	this.ds_inspectionList.setColumn(nRow,"REASONCONSUMABLEDEFVERSION",prodVer); // 자재버전

        	this.ds_inspectionList.set_enableevent(true);

        	this.pdv_ReasonConsumableList.closePopup();
        };

        this.div_work_tab_Tabpage5_grd_inspectionList_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) this.pnlQty_enter = true;
        	if(obj.currentcol==2){
        		if(e.keycode == 13)
        		{
        			this.pnlQty_enter = true;
        			obj.moveToNextCell();
        			this.mfn_OpenDefectPopup();
        			return;
        		}else if(e.keycode >=96 && e.keycode <= 105){
        			this.pnlQty_enter = true;
        			var nRow = obj.currentrow;
        			this.ds_inspectionList.setColumn(nRow,"DEFECTNAME","");
        		}
        	}
        };

        this.div_work_Div01_btn_inspector_onclick = function(obj,e)
        {
        	this.fn_openPop("INSPECTOR","P00276", null);
        };

        this.ds_lotSplitList_oncolumnchanged = function(obj,e)
        {
        	if (e.row < 0) return false;

        	if (e.columnid == "INSPECTIONQTY")
        	{
        		//음수를 입력했을 때 0으로 바꿔줌
        		obj.set_enableevent(false);
        		if (e.newvalue <= 0)
        		{
        			this.gfn_Message("InspectionQtyCount", null, "warning", "ok"); //검사수량은 0 또는 음수가 될 수 없습니다.
        			obj.setColumn(e.row, e.columnid, 0);
        			obj.set_enableevent(true);
        			return false;
        		}

        		this.g_lotPcsQty = nexacro.toNumber(this.ds_lotSplitList.getColumn(e.row, "ALLQTYPCS"));
        		//확인필요
        		if ( nexacro.toNumber(this.g_lotPcsQty) < e.newvalue || e.newvalue == 0)
        		{
        			if (nexacro.toNumber(this.g_lotPcsQty) < e.newvalue)
        			{
        				this.gfn_Message("InvalidSampleQtyOverQty", null, "warning", "ok"); //샘플 수량은 전체 수량보다 클 수 없습니다
        			}
        			else if (e.newvalue == 0)
        			{
        				this.gfn_Message("InspectionQtyCount", null, "warning", "ok"); //검사수량은 0이 될 수 없습니다.
        			}

        			obj.setColumn(e.row, e.columnid, "");
        			obj.setColumn(e.row, "INSPECTIONQTY", "");
        			obj.set_enableevent(true);
        			return false;
        		}
        		var lotId = this.ds_lotSplitList.getColumn(e.row,"RESOURCEID");
        		this.fn_inspectionResultCheck(lotId);
         		obj.set_enableevent(true);
        	}
        };

        this.div_work_tab_Tabpage1_btn_addImgLotSplitList_onclick = function(obj,e)
        {
        	this.ds_lotSplitDetailList.filter("");
        	this.ds_lotSplitDetailList.filter("RESOURCEID == '" + this.ds_lotSplitList.getColumn(this.ds_lotSplitList.rowposition,"RESOURCEID") + "'");

        	if (this.ds_lotSplitDetailList.getRowCount() < 1) return;

        // 	if (this.jobType == "updateData")
        // 	{
        // 		this.gfn_Message("CanAddImageBeforeResultSave", null, "warning", "ok"); //검사 결과가 저장된 후에는 이미지를 추가 할 수 없습니다.
        // 		return false;
        // 	}

        	var nRow = this.ds_lotSplitDetailList.rowposition;
        	var inspectionResult = this.ds_lotSplitDetailList.getColumn( nRow ,"INSPECTIONRESULT");
        	if (inspectionResult != "NG")
        	{
        		this.gfn_Message("CanAddImageOnlyNG", null, "warning", "ok"); //판정결과가 NG인 경우만 사진을 등록할수 있습니다.
        		return false;
        	}

           // QAM_INSPECTIONDEFECT  ("TXNHISTKEY", "RESOURCETYPE", "RESOURCEID", "DEFECTCODE", "PROCESSRELNO")
         	var srcKey = this.ds_lotSplitDetailList.getColumn(nRow, "TXNHISTKEY")
        	               + "|" + this.resourceType
        				   + "|" + this.ds_lotSplitDetailList.getColumn(nRow, "RESOURCEID")
        				   + "|" + this.ds_lotSplitDetailList.getColumn(nRow, "DEFECTCODE")
        				   + "|*";

        	this.fn_callFilePopup("file_upload_lotSplitDetailList","PCM", srcKey, "QAM_INSPECTIONDEFECT", "출하합불판정(NCR판정)", "", nexacro.toNumber(this.fileUploadCount));

        };

        this.ds_lotSplitDetailList_oncolumnchanged = function(obj,e)
        {
        	if(e.newvalue < 0 ) return;
        // 	if (nexacro.toNumber(this.ds_lotInfo.getColumn(0, "PANELPERQTY")) <= 0) {
        // 		this.alert("PANELPERQTY가 0 입니다.");
        // 		return;
        // 	}
        	switch(e.columnid) {
        		case "DEFECTQTY" :

        			var standardType = this.div_work.form.tab.Tabpage1.form.cbo_standardType.value;

        			if (this.nfn_isNull(standardType))
        			{
        				this.gfn_Message("SelectInspStandard", null, "warning", "ok");
        				return ;
        			}

        			var nRow = this.ds_lotSplitList.rowposition;
        			var panelPerQty = nexacro.toNumber(this.nfn_nvl(this.ds_lotSplitList.getColumn(nRow, "PANELPERQTY"), "0"));
        			var g_PnlQty      = nexacro.toNumber(this.nfn_nvl(this.ds_lotSplitList.getColumn(nRow, "ALLQTYPNL"), "0"));
        			var g_PcsQty      = nexacro.toNumber(this.nfn_nvl(this.ds_lotSplitList.getColumn(nRow, "ALLQTYPCS"), "0"));
        			var g_InspQty      = nexacro.toNumber(this.nfn_nvl(this.ds_lotSplitList.getColumn(nRow, "INSPECTIONQTY"), "0"));
        			var lotId = this.ds_lotSplitList.getColumn(nRow, "RESOURCEID");

        			obj.set_enableevent(false);
        			var defectPcsQty = nexacro.toNumber(this.nfn_nvl(e.newvalue, "0"));
        			var pnlQty = 0;
        			pnlQty = nexacro.ceil(defectPcsQty / panelPerQty);

        			obj.setColumn(e.row, "DEFECTQTYPNL", pnlQty);
        			obj.setColumn(e.row, "DEFECTRATE", (defectPcsQty / g_InspQty) * 100);

        			var defectQty = nexacro.toNumber(this.nfn_nvl(obj.getSum("DEFECTQTY"), "0"));
        			var defectQtyPnl = nexacro.toNumber(this.nfn_nvl(obj.getSum("DEFECTQTYPNL"), "0"));
        			var defectRate = nexacro.toNumber(this.nfn_nvl(obj.getSum("DEFECTRATE"), "0"));
        			this.ds_lotSplitList.setColumn(nRow, "SPECOUTQTY",defectQty);
        			this.ds_lotSplitList.setColumn(nRow, "DEFECTRATE",defectRate);
        			this.ds_lotSplitList.setColumn(nRow, "DEFECTQTYPNL",defectQtyPnl);
        			this.ds_lotSplitList.setColumn(nRow, "GOODQTYPNL",nexacro.ceil(g_PnlQty-defectQtyPnl));
        			this.ds_lotSplitList.setColumn(nRow, "GOODQTYPCS",nexacro.ceil(g_PcsQty-defectQty));

        			//조회영역 불량수량 DISPLAY
        			this.fn_setTotDisplayQty();
        			//NCR 불량판정
        			this.fn_gridDefectRateChanged(obj,true,standardType);
        			//모LOT의 판정
        			this.fn_inspectionResultCheck(lotId);

        			obj.set_enableevent(true);

        			break;
        		case "DEFECTCODENAME" :
        				//불량코드+공정품질 중복체크
        				if(this.fn_checkDefectCodeCount()) return;
        			break;
        		case "QCSEGMENTNAME" :
        				//불량코드+공정품질 중복체크
        				if(this.fn_checkDefectCodeCount()) return;
        			break;
        		default:
        	}
        };

        this.ds_inspectionList_oncolumnchanged = function(obj,e)
        {
        	if(e.newvalue < 0 ) return;
        	switch(e.columnid) {
        	case "DEFECTQTY" :
        // 		this.mfn_defectChangePcsQty(e.newvalue);
        // 		this.fn_SetChangeGoodDefectQty(e.newvalue);
        		break;
        	default:
        	}
        };

        //불량코드+공정품질 중복체크
        this.fn_checkDefectCodeCount = function()
        {
        	for(var i=0; i<this.ds_lotSplitDetailList.rowcount; i++){
        		var nRow = this.ds_lotSplitDetailList.findRowExpr("DEFECTCODE=='"+this.ds_lotSplitDetailList.getColumn(i,"DEFECTCODE")+"' && QCSEGMENTID=='"+this.ds_lotSplitDetailList.getColumn(i,"QCSEGMENTID")+"'", i+1);
        		if(nRow>i){
        			this.gfn_Message("SameDefectCodeError", null, "warning", "ok");
        			this.ds_lotSplitDetailList.set_enableevent(false);
        			this.ds_lotSplitDetailList.deleteRow(nRow);
        			this.ds_lotSplitDetailList.set_enableevent(true);
        			return true;
        		}
        	}
        	return false;
        };

        this.fn_chkValidLotSplit = function(inspectionQty)
        {
        	var allQtyPcs = this.ds_lotSplitList.getColumn(this.ds_lotSplitList.rowposition,"ALLQTYPCS");
        	if (nexacro.toNumber(inspectionQty) <= 0)
        	{
        		this.gfn_Message("InvalidSampleQty", null, "warning", "ok"); //샘플 수량은 음수 또는 0이 될 수 없습니다.
        		return;
        	}
        	if (nexacro.toNumber(allQtyPcs) < nexacro.toNumber(inspectionQty))
        	{
        		this.gfn_Message("InvalidSampleQtyOverQty", null, "warning", "ok"); //샘플 수량은 전체 수량보다 클 수 없습니다
        		return;
        	}

        	if(this.ds_lotSplitDetailList.rowcount > 0 ) {
        		var defectQtySum = this.ds_lotSplitDetailList.getSum("DEFECTQTY");
        		var defectQty =0;
        		var defectRate =0;
        		var defectQtyPnl =0;
        		this.ds_lotSplitDetailList.filter("");
        		this.ds_lotSplitDetailList.filter("RESOURCEID == '" + this.ds_lotSplitList.getColumn(e.newrow, "RESOURCEID") + "'");

        		for (var i=0; i< this.ds_lotSplitDetailList.rowcount; i++)
        		{
        			if (nexacro.toNumber(inspectionQty) < nexacro.toNumber(defectQtySum))
        			{
        				this.ds_lotSplitDetailList.setColumn(i,"DEFECTQTY","0");
        				this.ds_lotSplitDetailList.setColumn(i,"DEFECTRATE","0%");
        				this.ds_lotSplitDetailList.setColumn(i,"DEFECTQTYPNL","0");
        			} else if(!this.nfn_isNull(this.ds_lotSplitDetailList.getColumn(i, "DEFECTQTY"))){
        				defectQty = nexacro.toNumber(this.ds_lotSplitDetailList.getColumn(i, "DEFECTQTY"));
        				defectRate = 	nexacro.round((nexacro.toNumber(defectQty) / nexacro.toNumber(inspectionQty)) * 100, 1);
        				defectQtyPnl = 	nexacro.round((nexacro.toNumber(defectQty) / nexacro.toNumber(this.ds_lotSplitDetailList.getColumn(i, "PANELPERQTY"))) * 100, 1);
        				this.ds_lotSplitDetailList.setColumn(i,"DEFECTRATE",defectRate + "%");
        				this.ds_lotSplitDetailList.setColumn(i,"DEFECTQTYPNL",defectQtyPnl);
        			}
        		}
        		if (nexacro.toNumber(inspectionQty) < nexacro.toNumber(defectQtySum))
        		{
        			this.gfn_Message("DefectQtyMoreThanInspQty", null, "warning", "ok"); //입력된 불량수량보다 검사 수량이 적습니다.
        			return;
        		}
        	}

        	return false;
        };


        this.div_work_tab_onchanged = function(obj,e)
        {
        	this.fn_setTabInfoDisplay(e.postindex);
        };

        this.fn_setTabInfoDisplay = function (index)
        {
        	if (index==0) /*분할LOT합/불판정*/
        	{
        		var nRow = this.ds_lotSplitList.rowposition;
        		this.div_work.form.tab.Tabpage1.form.msk_splitLotId.set_value(this.nfn_nvl(this.ds_lotSplitList.getColumn(nRow, "RESOURCEID"),""));
        		this.div_work.form.tab.Tabpage1.form.msk_ngCnt.set_value(this.nfn_nvl(this.ds_lotSplitList.getColumn(nRow, "DEGREE"),"")-1);
        		this.div_work.form.tab.Tabpage1.form.msk_lastInspector.set_value(this.nfn_nvl(this.ds_lotSplitList.getColumn(nRow, "FINALINSPECTORNAME"),""));

        	} else if(index==4) /*불량(폐기)처리*/
        	{
        		var nRow = this.ds_inspectionMain.rowposition;
        		this.div_work.form.tab.Tabpage5.form.edt_childLotId.set_value(this.nfn_nvl(this.ds_inspectionMain.getColumn(nRow, "RESOURCEID"),""));
        	}

        };

         this.fn_setTotDisplayQty = function ()
         {
        	var totGoodQty =0;
        	var totDefectQty =0;

        	if(this.div_work.form.Div01.form.cbo_uom.value =="PCS") {
        		totGoodQty = nexacro.toNumber(this.nfn_nvl(this.ds_lotSplitList.getSum("GOODQTYPCS"), "0"));
        		totDefectQty = nexacro.toNumber(this.nfn_nvl(this.ds_lotSplitList.getSum("SPECOUTQTY"), "0"));
        	} else if(this.div_work.form.Div01.form.cbo_uom.value =="PNL") {
        		totGoodQty = nexacro.toNumber(this.nfn_nvl(this.ds_lotSplitList.getSum("GOODQTYPNL"), "0"));
        		totDefectQty = nexacro.toNumber(this.nfn_nvl(this.ds_lotSplitList.getSum("DEFECTQTYPNL"), "0"));
        	} else {
        		totGoodQty =0;
        		totDefectQty =0;
        	}

         	this.div_work.form.Div01.form.txtSumGoodQty.set_value(totGoodQty);
         	this.div_work.form.Div01.form.txtSumDefectQty.set_value(totDefectQty);
         };

        this.ds_inspectionList_oncolumnchanged = function(obj,e)
        {
        	if(e.newvalue < 0) return;

        	switch(e.columnid) {
        		case "DEFECTQTY" :

        			var nRow = this.ds_inspectionMain.rowposition;
        			var panelPerQty = nexacro.toNumber(this.nfn_nvl(this.ds_inspectionMain.getColumn(nRow, "PANELPERQTY"), "0"));
        			var g_PnlQty      = nexacro.toNumber(this.nfn_nvl(this.ds_inspectionMain.getColumn(nRow, "ALLQTYPNL"), "0"));
        			var g_PcsQty      = nexacro.toNumber(this.nfn_nvl(this.ds_inspectionMain.getColumn(nRow, "ALLQTYPCS"), "0"));

        			if (panelPerQty <= 0) {
        				this.alert("PANELPERQTY가 0 입니다.");
        				return;
        			}

        			obj.set_enableevent(false);
        			var defectPcsQty = nexacro.toNumber(this.nfn_nvl(e.newvalue, "0"));
        			var pnlQty = 0;
        				pnlQty = nexacro.ceil(defectPcsQty / panelPerQty);

        				obj.setColumn(e.row, "DEFECTQTYPNL", pnlQty);
        				obj.setColumn(e.row, "DEFECTRATE", (defectPcsQty / g_PcsQty) * 100);
        			obj.set_enableevent(true);
        			break;
        		case "DEFECTCODENAME" :
        				//불량코드+공정품질 중복체크
        				if(this.fn_checkDefectCodeCount()) return;
        			break;
        		case "QCSEGMENTNAME" :
        				//불량코드+공정품질 중복체크
        				if(this.fn_checkDefectCodeCount()) return;
        			break;
        		default:
        	}
        };

        /*
         * GrdDefectRate_CellValueChanged
         * oncolumnchanged 이벤트에서는 호출하지 못하고 cancolumnchange는 메시지 때문에 중간 리턴되어 불량률이 변경되지 못해 별도로 호출
         */
        this.fn_gridDefectRateChanged = function(pDataset,isDefect,type)
        {
        	var nRow = pDataset.rowposition

        		var inspectionClassId  = "ShipmentInspection";
        		var rtnResult;
        		var prevPriority =0;
        		var curPriority =0;

        		if (type == "AQL")
        		{//AQL기준
        			var aqlDecisionDegree = this.ds_inspectorDegree.getColumn(0, "AQLDECISIONDEGREE");
        			pDataset.setColumn(nRow,"AQLINSPECTIONLEVEL",this.ds_inspectorDegree.getColumn(0, "AQLINSPECTIONLEVEL"))
        			pDataset.setColumn(nRow,"AQLDEFECTLEVEL",this.ds_inspectorDegree.getColumn(0, "AQLDEFECTLEVEL"))
        			var pcsQty = this.ds_lotSplitList.getColumn(this.ds_lotSplitList.rowposition, "ALLQTYPCS");
        			rtnResult = JSON.parse( this.qfn_setQcGradeAndResultAQLType(pDataset, this.ds_AQLCheckBasis, this.ds_AQLActionGrade, inspectionClassId, aqlDecisionDegree, pcsQty, isDefect) );
        			this.ds_lotSplitList.setColumn(this.ds_lotSplitList.rowposition, "QCGRADE",this.ds_AQLActionGrade.getColumn(0,"QCGRADE"));
        // 			prevPriority = nexacro.toNumber(this.nfn_nvl(this.ds_lotSplitList.getColumn(this.ds_lotSplitList.rowposition,"PRIORITY"),"0"));
        // 			curPriority = nexacro.toNumber(this.nfn_nvl(pDataset.getColumn(0,"PRIORITY"),"0"));
        // 			if(curPriority < prevPriority) {
        // 				this.ds_lotSplitList.setColumn(this.ds_lotSplitList.rowposition, "PRIORITY",pDataset.getColumn(0,"PRIORITY"));
        // 				this.ds_lotSplitList.setColumn(this.ds_lotSplitList.rowposition, "QCGRADE",pDataset.getColumn(0,"QCGRADE"));
        // 			}
        		}
        		else //NCR
        		{
        			var decisionDegree = pDataset.getColumn(pDataset.rowposition, "DECISIONDEGREE");
        			rtnResult = JSON.parse( this.qfn_setQcGradeAndResultNCRQtyRateType(pDataset, this.ds_NCRCheckBasis, inspectionClassId, decisionDegree, isDefect));
        			prevPriority = nexacro.toNumber(this.nfn_nvl(this.ds_lotSplitList.getColumn(this.ds_lotSplitList.rowposition,"PRIORITY"),"9999"));
        			curPriority = nexacro.toNumber(this.nfn_nvl(pDataset.getColumn(pDataset.rowposition,"PRIORITY"),"0"));
        			if(curPriority < prevPriority) {
        				this.ds_lotSplitList.setColumn(this.ds_lotSplitList.rowposition, "PRIORITY",pDataset.getColumn(pDataset.rowposition,"PRIORITY"));
        				this.ds_lotSplitList.setColumn(this.ds_lotSplitList.rowposition, "QCGRADE",pDataset.getColumn(pDataset.rowposition,"QCGRADE"));
        			}
        		}

        		pDataset.setColumn(nRow, "INSPECTIONRESULT", rtnResult.result);
        };

        /*+++++++++++++++++++++++++++++++++++++++++++++++++ Search Event End +++++++++++++++++++++++++++++++++++++++++++++++++*/

        /*
         * 기능 : 검사 결과에 따라 전체 결과 자동 판정하는 이벤트(AllResult_CellValueChanged)
         */
        this.fn_inspectionResultCheck = function (resourceId)
        {
        	this.ds_lotSplitDetailList.filter("");
        	this.ds_lotSplitDetailList.filter("RESOURCEID == '" + resourceId + "'");
        	var NGCount = 0;
        	NGCount = this.ds_lotSplitDetailList.getCaseCount("INSPECTIONRESULT == 'NG'");

        	if (NGCount == 0)
        	{//이전 검사 결과 없거나 OK 일경우 -> OK
        		this.ds_lotSplitList.setColumn(this.ds_lotSplitList.rowposition,"INSPECTIONRESULT","OK");
        	}
        	else
        	{
        		this.ds_lotSplitList.setColumn(this.ds_lotSplitList.rowposition,"INSPECTIONRESULT","NG");
        	}
        };

        /*
         * 기능 : 검사 결과에 따라 전체 결과 자동 판정하는 이벤트(AllResult_CellValueChanged)
         */
        this.fn_inspectionResultCheck1 = function (resourceId)
        {
        	this.ds_lotSplitDetailList.filter("");
        	this.ds_lotSplitDetailList.filter("RESOURCEID == '" + resourceId + "'");
        	var NGCount = 0;
        	NGCount = this.ds_lotSplitDetailList.getCaseCount("INSPECTIONRESULT == 'NG'");

        	if (NGCount == 0)
        	{//이전 검사 결과 없거나 OK 일경우 -> OK
        		this.ds_lotSplitList.setColumn(this.ds_lotSplitList.rowposition,"INSPECTIONRESULT","OK");
        		this.ds_lotSplitList.setColumn(this.ds_lotSplitList.rowposition,"QCGRADE","");
        		this.ds_lotSplitList.setColumn(this.ds_lotSplitList.rowposition,"PRIORITY","");
        	}
        	else
        	{
        		var standardType = this.div_work.form.tab.Tabpage1.form.cbo_standardType.value;
        		var	prevPriority = 0;
        		var curPriority = 0;
        		var qcCode = "";
        		var priority = "";

        		this.ds_lotSplitList.setColumn(this.ds_lotSplitList.rowposition,"INSPECTIONRESULT","NG");
        		if(standardType == "NCR") {
        			for(var i=0;i<this.ds_lotSplitDetailList.rowcount;i++) {
        				if(i==0) {
        					prevPriority = nexacro.toNumber(this.nfn_nvl(this.ds_lotSplitDetailList.getColumn(i,"PRIORITY"),"0"));
        					qcCode = this.ds_lotSplitDetailList.getColumn(i,"QCGRADE");
        					priority = this.ds_lotSplitDetailList.getColumn(i,"PRIORITY");
        				} else {
        					curPriority = nexacro.toNumber(this.nfn_nvl(this.ds_lotSplitDetailList.getColumn(i,"PRIORITY"),"0"));
        				}
        				if(curPriority < prevPriority) {
        					qcCode = this.ds_lotSplitDetailList.getColumn(i,"QCGRADE");
        					priority = this.ds_lotSplitDetailList.getColumn(i,"PRIORITY");
        				}
        				prevPriority = curPriority;
        			}
        			this.ds_lotSplitList.setColumn(this.ds_lotSplitList.rowposition,"QCGRADE",qcCode);
        			this.ds_lotSplitList.setColumn(this.ds_lotSplitList.rowposition,"PRIORITY",priority);
        		}
        	}
        };
        /************************************************** Tabpage3 Event End **************************************************/

        this.fn_setSendEmail = function()
        {
        	//checkpoint 테스트를 위해 주석처리...값 확인필요

        	this.ds_sendEmailList.clearData();
        	var defectCode = "";

         	for(var i=0;i < this.ds_saveLot.rowcount ;i++) {
        		defectCode ="";

        		this.ds_saveReturn.filter("");
        		this.ds_saveReturn.filter("RESOURCEID == '" + this.ds_saveLot.getColumn(i, "RESOURCEID") + "'");
        	trace("=======================this.ds_sendEmailList.saveXML()===========================");
        	trace(this.ds_sendEmailList.saveXML());

        	trace("==================================================");
        	trace("this.ds_saveReturn.rowcount==>"+this.ds_saveReturn.rowcount);
        		for(var j=0;j<this.ds_saveReturn.rowcount;j++) {
        			if(j==(this.ds_saveReturn.rowcount-1)) {
        				defectCode = defectCode + this.nfn_nvl(this.ds_saveReturn.getColumn(j, "EXTERIORNG"),"");
        			} else {
        				defectCode = defectCode + this.nfn_nvl(this.ds_saveReturn.getColumn(j, "EXTERIORNG"),"")+",";
        			}
        		}
        	trace("==================================================");

        		this.ds_sendEmailList.insertRow(i);
        		this.ds_sendEmailList.setColumn(i, "LOTID",          this.nfn_nvl(this.ds_saveLot.getColumn(i, "RESOURCEID"),""));
        		this.ds_sendEmailList.setColumn(i, "DEFECTNAME",     defectCode);
        	trace("==================================================");
        	trace(this.ds_sendEmailList.saveXML());
        	}

        	this.fn_callSendEamil(this.ds_sendEmailList);
        };

        this.fn_callSendEamil = function (pDataset)
        {
        	var arr = [];
        	var emailTitle ="출하검사 NG 발생 (NCR발행)" +  "<BR><BR>";
        	var emailContent ="";

        	for(var i =0; i< pDataset.rowcount ;i++) {

        		arr.push(this.nfn_getDictionaryname("PRODUCTDEFNAME", true));  //0
        		arr.push(this.nfn_getDictionaryname("PRODUCTDEFID", true));    //1
        		arr.push(this.nfn_getDictionaryname("PRODUCTDEFVERSION", true));  //2
        		arr.push(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PRODUCTDEFNAME"),""));                //3
        		arr.push(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PRODUCTDEFID"),""));                  //4
        		arr.push(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PRODUCTDEFVERSION"),""));             //5
        		arr.push(this.nfn_getDictionaryname("LOTID", true));              //6
        		arr.push(pDataset.getColumn(i, "LOTID"));                          //7
        		arr.push(this.nfn_getDictionaryname("STANDARDSEGMENT", true));      //8
        		arr.push(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PROCESSSEGMENTNAME"),""));              //9
        		arr.push(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "PROCESSSEGMENTID"),""));                //10
        		arr.push(this.nfn_getDictionaryname("AREA", true));                 //11
        		arr.push(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "AREANAME"),""));                        //12
        		arr.push(this.nfn_nvl(this.ds_lotInfo.getColumn(0, "AREAID"),""));                          //13
        		arr.push(this.nfn_getDictionaryname("INSPECTIONRESULT", true));      //14
        		arr.push("NG");                 //15
        		arr.push(this.nfn_getDictionaryname("DEFECTNAME", true));            //16
        		arr.push(pDataset.getColumn(i, "DEFECTNAME"));                       //17

        		emailContent += "○" + arr[0]  + "("  + arr[1]  + "/" + arr[2] + "):" + arr[3] + "(" + arr[4] + "/" + arr[5] + ")" + "<BR>"
        					  + "○" + arr[6]  + ":"  + arr[7]  + "<BR>"
        					  + "○" + arr[8] + ":"  + arr[9] + "(" + arr[10] + ")" + "<BR>"
        					  + "○" + arr[11] + ":"  + arr[12] + "(" + arr[13] + ")" + "<BR>"
        					  + "○" + arr[14] + ":"  + arr[15] + "<BR>"
        					  + "○" + arr[16] + ":"  + arr[17] + "<BR><BR>"
        					 ;

        		arr = [];
        	}

        	emailContent = emailTitle + emailContent;
        	var title =  this.nfn_getDictionaryname('MENU_PG-QC-0210',true) ;   //출하검사 NCR
        	var popupId = "SEND_EMAIL";
        	var oArg = {
        				  subject : title,  //제목
        				  contents : emailContent, //메일내용
        				  objAddrList : [],  //수신자 배열
        				  objUserList : [],   //수신자명 배열
        				  atchSrc : "", //"BAS_ITEMMASTER", //업무에서 올려진 파일 첨부시 (테이블)
        				  atchSrcKey : "" //"INTERFLEX|10400010A1|FA1"   //업무에서 올려진 파일 첨부시 (키값)
        	           };
        	 this.gfn_openPopup(popupId,"cmd::CMAM00100P.xfdl",oArg,"width=790,height=790");
        };

        /*
         * 이벤트 : 파일업로드 호출
         */
        this.fn_callFilePopup = function(pPopupId, pJobSysCd, pAtchSrcKey, pTable, pDesc, pSubDir, pFileCnt)
        {
        	var oArg = {arg_jobSysCd:pJobSysCd         //업무구분코드 CMD,BAS....
        				,arg_atchSrcKey:pAtchSrcKey    //테이블의 키 값
        				,arg_tableName:pTable          //테이블명
        				,arg_desc:pDesc                //파일설명
        				,arg_subDir:pSubDir            //세부업무약어
        				,arg_fileCnt:pFileCnt          //업로드 가능수
        				,arg_copyDataset:"ds_file"     //파일업로드결과 복사데이터셋
                       };
        	this.ds_file.clearData();
        	this.gfn_openPopup(pPopupId,"cmd::CMSA01220P.xfdl",oArg,"");
        };

        /*
         * 이벤트 : 파일업로드 후 이미지 set
         */
        this.fn_setImageFilePopup = function(pObject, pDataset)
        {
        	var fileCount = this.ds_file.getRowCount();

           for(var i=1; i< nexacro.toNumber(this.fileUploadCount+1); i++) //
           {
        		pDataset.set_enableevent(false);
        		var nRow = pDataset.rowposition;
        		var ATCH_FILE_GUID = "ATCH_FILE_GUID"+i;
        		var atchFileGuid = "";
        		var atchFileId = "";

        		if (i <= fileCount)
        		{
        			var fileRow = nexacro.toNumber(i-1);
        			atchFileGuid = this.ds_file.getColumn(fileRow, "ATCH_FILE_GUID");
        			atchFileId = this.ds_file.getColumn(fileRow, "ATCH_FILE_ID");
        		}

        		pDataset.set_enableevent(false);
        		pDataset.setColumn(nRow, ATCH_FILE_GUID, atchFileGuid);
        		pDataset.set_enableevent(true);

        		var objNm = pObject+ i;
        		var imgObject = eval(objNm);

        		if (!this.nfn_isNull(atchFileGuid))
        		{
        			var upUrl = nexacro.getEnvironment().services["svcurl"].url +"/comm/downImage/" +atchFileGuid + ".do";
        			imgObject.set_image("URL('"+ upUrl + "')");
        		}
        		else
        		{
        			imgObject.set_image("");
        		}
        	}
        };

        /*
         * 이벤트 : 조회 후 이미지 set
         */
        this.fn_setImage = function(pObject, pDataset, pRow)
        {
        	for (var i=1; i<nexacro.toNumber(this.fileUploadCount+1); i++)
        	{
        		var imgColumn = "ATCH_FILE_GUID"+i;
        		var atchFileGuid = pDataset.getColumn(pRow, imgColumn);
        		var objNm = pObject+ i;
        		var imgObject = eval(objNm);

        		if (!this.nfn_isNull(atchFileGuid))
        		{
        			var upUrl = nexacro.getEnvironment().services["svcurl"].url +"/comm/downImage/" +atchFileGuid + ".do";
        			imgObject.set_image("URL('"+ upUrl + "')");
        		}
        		else
        		{
        			imgObject.set_image("");
        		}
        	}
        };

        /*
         * 이벤트 : 검사자 명 Enter Key
         */
        this.div_inspect_edt_inspUser_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_inspect_btn_inspUser_onclick();
        	}
        };

        this.ds_messageMain_onrowposchanged = function(obj,e)
        {
            if (e.newrow < 0) return;
        	this.fn_SelectLotMessageShipmentInsp(e.newrow);
        };

        this.ds_inspectionMain_onrowposchanged = function(obj,e)
        {
            if (e.newrow < 0) return;

        	this.fn_setTabInfoDisplay(4);
        	this.ds_inspectionList.filter("");
        	this.ds_inspectionList.filter("RESOURCEID == '" + this.nfn_nvl(this.ds_lotSplitList.getColumn(e.newrow, "RESOURCEID"),"") + "'");
        };

        this.div_work_tab_Tabpage5_Button21_02_00_onclick = function(obj,e)
        {
        	if (this.ds_inspectionList.rowcount < 1) return;
        // QAM_INSPECTIONDEFECT  ("TXNHISTKEY", "RESOURCETYPE", "RESOURCEID", "DEFECTCODE", "PROCESSRELNO")
        // 	if (this.jobType == "updateData")
        // 	{
        // 		this.gfn_Message("CanAddImageBeforeResultSave", null, "warning", "ok"); //검사 결과가 저장된 후에는 이미지를 추가 할 수 없습니다.
        // 		return false;
        // 	}

        	var resourceId = this.nfn_nvl(this.ds_inspectionList.getColumn(this.ds_inspectionList.rowposition ,"RESOURCEID"),"");

        	var nRow =0;
        	if(this.ds_lotSplitList.rowcount > 0) {
        		nRow = this.ds_lotSplitList.findRow("RESOURCEID",resourceId);
        	}

        	var inspectionResult = this.ds_lotSplitList.getColumn(nRow ,"INSPECTIONRESULT");
        	if (inspectionResult == "NG")
        	{
        		this.gfn_Message("CanAddImageOnlyOK", null, "warning", "ok"); //판정결과가 NG인 경우만 사진을 등록할수 있습니다.
        		return false;
        	}

        	var nRow = this.ds_inspectionList.rowposition;
         	var srcKey = this.ds_inspectionList.getColumn(nRow, "TXNHISTKEY")
        				 + "|" + this.ds_inspectionList.getColumn(nRow, "RESOURCEID")
        				 ;

        	this.fn_callFilePopup("file_upload_inspectionList","PCM", srcKey, "PCM_LOTDEFECT", "불량LOT분할", "", nexacro.toNumber(this.fileUploadCount)-1);

        };

        this.GetTXNHISTKEY = function ()
        {
        	this.ds_temp.clear();

        	var sSvcID 			= "selectTxnHistKey";
        	var sController 	= "/pcmCommon/selectTxnHistKey.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_temp=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs,"","",false);

        	trace(this.ds_temp.saveXML());
        	return this.ds_temp.getColumn(0,0);

        };

        this.ds_lotSplitDetailList_onrowposchanged = function(obj,e)
        {
        	this.fn_setImage("this.div_work.form.tab.Tabpage1.form.div_00.form.img_lotSplitDetailList", obj, e.newrow);
        };

        this.ds_inspectionList_onrowposchanged = function(obj,e)
        {
        	this.fn_setImage("this.div_work.form.tab.Tabpage5.form.div_00.form.img_inspectionList1", obj, e.newrow);
        };

        this.ds_lotSplitDetailList_cancolumnchange = function(obj,e)
        {
        	switch(e.columnid) {
        		case "DEFECTQTY" :
        		{
        			var nRow = this.ds_lotSplitList.rowposition;

        			if(this.nfn_isNull(this.ds_lotSplitDetailList.getColumn(e.row,"DEFECTCODENAME"))){
        				// 불량코드를 선택하여 주십시오.
        				this.gfn_Message("NoDefectCode", "", "warning", "ok");
        				return false;
        			}

        			if(e.newvalue < 1){
        			// 불량수량은 0이상이어야 합니다.
        				this.gfn_Message("DefectQtyValidation", "", "warning", "ok");
        				return false;
        			}

        			var pcsQty = nexacro.toNumber(this.nfn_nvl(this.ds_lotSplitList.getColumn(nRow,"INSPECTIONQTY"),"0"));
        			if(e.newvalue !="0" && (this.nfn_nvl(this.ds_lotSplitList.getColumn(nRow,"INSPECTIONQTY"),"0") == "0")) {
        				this.gfn_Message("NoInspectionQtyAndPnl", null, "warning", "ok");//검사 수량을(를) 먼저 입력하세요.
        				return false;
        			}

        			var pcsQtySum = this.ds_lotSplitDetailList.getSum("DEFECTQTY") + e.newvalue - e.oldvalue;
        			if(pcsQty < pcsQtySum ){
        				var arg = [this.nfn_getDictionaryname('DEFECTQTY',true), this.nfn_getDictionaryname('INSPECTIONQTY',true)];
        				this.gfn_Message("CanNotToMuch", arg, "warning", "ok");//불량 수량은(는) 검사 수량보다 많을 수 없습니다.
        				return false;
        			}
        			break;
        		}
        	}
        };

         this.fn_setQty = function (defectQty)
         {
        	var nRow = this.ds_lotSplitList.rowposition;
        	var panelPerQty = nexacro.toNumber(this.nfn_nvl(this.ds_lotSplitList.getColumn(nRow, "PANELPERQTY"), "0"));
        	var g_PnlQty      = nexacro.toNumber(this.nfn_nvl(this.ds_lotSplitList.getColumn(nRow, "ALLQTYPNL"), "0"));
        	var g_PcsQty      = nexacro.toNumber(this.nfn_nvl(this.ds_lotSplitList.getColumn(nRow, "ALLQTYPCS"), "0"));
        	var g_InspQty      = nexacro.toNumber(this.nfn_nvl(this.ds_lotSplitList.getColumn(nRow, "INSPECTIONQTY"), "0"));
        	var g_defectQty      = nexacro.toNumber(this.nfn_nvl(this.ds_lotSplitList.getColumn(nRow, "SPECOUTQTY"), "0"));

        	var defectPcsQty = nexacro.toNumber(this.nfn_nvl(defectQty, "0"));
        	var defectRate = 0;
        	var goodQtyPnl = 0;
        	if (panelPerQty > 0)
        	{
        		specOutQty = g_defectQty-defectPcsQty;
        		defectRate = nexacro.ceil(((g_defectQty-defectPcsQty) / g_InspQty) * 100);
        		goodQtyPnl = nexacro.ceil(g_PnlQty-(specOutQty/panelPerQty));
        	}
        	this.ds_lotSplitList.setColumn(nRow, "SPECOUTQTY",(g_defectQty-defectPcsQty));
        	this.ds_lotSplitList.setColumn(nRow, "DEFECTRATE",defectRate);
        	this.ds_lotSplitList.setColumn(nRow, "DEFECTQTYPNL",nexacro.ceil(specOutQty/panelPerQty));
        	this.ds_lotSplitList.setColumn(nRow, "GOODQTYPNL",goodQtyPnl);
        	this.ds_lotSplitList.setColumn(nRow, "GOODQTYPCS",nexacro.ceil(g_PcsQty-specOutQty));

         };

        this.ds_inspectionList_cancolumnchange = function(obj,e)
        {
        	switch(e.columnid) {
        		case "DEFECTQTY" :
        		{
        			if(this.nfn_isNull(this.ds_inspectionList.getColumn(e.row,"DEFECTCODENAME"))){
        				// 불량코드를 선택하여 주십시오.
        				this.gfn_Message("NoDefectCode", "", "warning", "ok");
        				return false;
        			}

        			if(e.newvalue < 1){
        			// 불량수량은 0이상이어야 합니다.
        				this.gfn_Message("DefectQtyValidation", "", "warning", "ok");
        				return false;
        			}
        			break;
        		}
        	}
        };

        this.div_work_tab_Tabpage4_Button21_02_onclick = function(obj,e)
        {
        	var opts = "width=830,height=400";
        	var popupId = "ShipmentInspMessagePopup";
        	var oArg 					= {};
        		oArg.arg_lotId 				= this.nfn_nvl(this.ds_lotInfo.getColumn(0,"LOTID"), "");
        		oArg.arg_productDefId 		= this.nfn_nvl(this.ds_lotInfo.getColumn(0,"PROCESSSEGMENTID"), "");
        		oArg.arg_spcLevel 	= this.nfn_nvl(this.ds_inspectorDegree.getColumn(0, "AQLINSPECTIONLEVEL"), "");
        		oArg.arg_defLevel 	= this.nfn_nvl(this.ds_inspectorDegree.getColumn(0, "AQLDEFECTLEVEL"), "");

        	this.gfn_openPopup(popupId,"pcm::PCM09600P.xfdl",oArg,opts);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_customReset.addEventHandler("onclick",this.fn_reset,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.divSearch.form.label01.addEventHandler("onclick",this.div_work_divSearch_label01_onclick,this);
            this.div_work.form.divSearch.form.btn_area.addEventHandler("onclick",this.div_work_divSearch_btn_area_onclick,this);
            this.div_work.form.divSearch.form.edt_area.addEventHandler("onkeydown",this.div_work_divSearch_edt_area_onkeydown,this);
            this.div_work.form.divSearch.form.edt_lotId.addEventHandler("onkeydown",this.div_work_divSearch_edt_lotId_onkeydown,this);
            this.div_work.form.Div01.form.cbo_uom.addEventHandler("onitemchanged",this.div_work_cbo_uom_onitemchanged,this);
            this.div_work.form.Div01.form.btn_inspector.addEventHandler("onclick",this.div_work_Div01_btn_inspector_onclick,this);
            this.div_work.form.grd_lotInfo.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_grd_productInfo_onexpandup,this);
            this.div_work.form.grd_lotInfo.addEventHandler("oncloseup",this.div_work_tab_Tabpage1_grd_productInfo_oncloseup,this);
            this.div_work.form.tab.addEventHandler("onchanged",this.div_work_tab_onchanged,this);
            this.div_work.form.tab.Tabpage1.addEventHandler("onmove",this.div_work_tab_Tabpage1_onmove,this);
            this.div_work.form.tab.Tabpage1.form.grd_lotSplitDetailList.addEventHandler("onexpandup",this.div_work_tab_Tabpage1_grd_lotSplitDetailList_onexpandup,this);
            this.div_work.form.tab.Tabpage1.form.cbo_standardType.addEventHandler("onitemchanged",this.div_work_tab_Tabpage1_cbo_standardType_onitemchanged,this);
            this.div_work.form.tab.Tabpage1.form.btn_grdDel.addEventHandler("onclick",this.div_work_tab_Tabpage1_btn_grdDel_onclick,this);
            this.div_work.form.tab.Tabpage1.form.btn_grdAdd.addEventHandler("onclick",this.div_work_tab_Tabpage1_btn_grdAdd_onclick,this);
            this.div_work.form.tab.Tabpage1.form.btn_addImgLotSplitList.addEventHandler("onclick",this.div_work_tab_Tabpage1_btn_addImgLotSplitList_onclick,this);
            this.div_work.form.tab.Tabpage4.form.Button21_02.addEventHandler("onclick",this.div_work_tab_Tabpage4_Button21_02_onclick,this);
            this.div_work.form.tab.Tabpage5.form.grd_inspectionList.addEventHandler("onexpandup",this.div_work_tab_Tabpage5_grd_inspectionList_onexpandup,this);
            this.div_work.form.tab.Tabpage5.form.grd_inspectionList.addEventHandler("onkeydown",this.div_work_tab_Tabpage5_grd_inspectionList_onkeydown,this);
            this.div_work.form.tab.Tabpage5.form.btn_grdAdd.addEventHandler("onclick",this.div_work_tab_Tabpage5_btn_grdAdd_onclick,this);
            this.div_work.form.tab.Tabpage5.form.btn_grdDel.addEventHandler("onclick",this.div_work_tab_Tabpage5_btn_grdDel_onclick,this);
            this.div_work.form.tab.Tabpage5.form.Button21_02_00.addEventHandler("onclick",this.div_work_tab_Tabpage5_Button21_02_00_onclick,this);
            this.pdv_ReasonProcessSegment.form.grd_ReasonProcessSegment.addEventHandler("oncelldblclick",this.pdv_ReasonProcessSegment_grd_ReasonProcessSegment_oncelldblclick,this);
            this.pdv_ReasonConsumableList.form.grd_ReasonConsumableList.addEventHandler("oncelldblclick",this.pdv_ReasonConsumableList_grd_ReasonConsumableList_oncelldblclick,this);
            this.pdv_ReasonLotList.form.grd_ReasonLotList.addEventHandler("oncelldblclick",this.pdv_ReasonLotList_grd_ReasonLotList_oncelldblclick,this);
            this.ds_lotSplitList.addEventHandler("onrowposchanged",this.ds_lotSplitList_onrowposchanged,this);
            this.ds_lotSplitList.addEventHandler("oncolumnchanged",this.ds_lotSplitList_oncolumnchanged,this);
            this.ds_weekInfoList.addEventHandler("onrowposchanged",this.ds_weekInfoList_onrowposchanged,this);
            this.ds_inspectorDegree.addEventHandler("onrowposchanged",this.ds_inspectorDegree_onrowposchanged,this);
            this.ds_AQLActionGrade.addEventHandler("onrowposchanged",this.ds_inspectorDegree_onrowposchanged,this);
            this.ds_NCRCheckBasis.addEventHandler("onrowposchanged",this.ds_inspectorDegree_onrowposchanged,this);
            this.ds_lotSplitDetailList.addEventHandler("oncolumnchanged",this.ds_lotSplitDetailList_oncolumnchanged,this);
            this.ds_lotSplitDetailList.addEventHandler("onrowposchanged",this.ds_lotSplitDetailList_onrowposchanged,this);
            this.ds_lotSplitDetailList.addEventHandler("cancolumnchange",this.ds_lotSplitDetailList_cancolumnchange,this);
            this.ds_weekLotQty.addEventHandler("onrowsetchanged",this.ds_weekInfoList_onrowsetchanged,this);
            this.ds_inspectionList.addEventHandler("oncolumnchanged",this.ds_inspectionList_oncolumnchanged,this);
            this.ds_inspectionList.addEventHandler("onrowposchanged",this.ds_inspectionList_onrowposchanged,this);
            this.ds_inspectionList.addEventHandler("cancolumnchange",this.ds_inspectionList_cancolumnchange,this);
            this.ds_messageMain.addEventHandler("onrowposchanged",this.ds_messageMain_onrowposchanged,this);
            this.ds_inspectionMain.addEventHandler("onrowposchanged",this.ds_inspectionMain_onrowposchanged,this);
        };
        this.loadIncludeScript("PCM09600M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
