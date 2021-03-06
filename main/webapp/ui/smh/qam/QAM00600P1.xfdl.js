(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM00600P1");
            this.set_titletext("수입검사 결과등록 POPUP");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,712);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"RELRESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RELRESOURCEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTTXNGROUPHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURE_INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_isHandOverProcess", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_parentLot", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTORNM\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVINGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSIDMIDDLE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSIDTOP\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ISSEND\" type=\"STRING\" size=\"256\"/><Column id=\"ISSENDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSITAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSITAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTITEM\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONUSER\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONUSERNM\" type=\"STRING\" size=\"256\"/><Column id=\"TXNGROUPHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVINGDATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"JUDGMENTCRITERIA\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"WRAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"WRPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WRPROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WRWORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"WRISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"WRPRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"WRPRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WRPRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ISMODIFY\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTPRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTPRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREUSERNM\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processDefTypeByProcess", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LASTREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotInfoByLotIDOSP", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_OSPInspectionExterior", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"JOINCODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISAQL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLINSPECTIONLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDEFECTLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"AQLCYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"ISNCR\" type=\"STRING\" size=\"256\"/><Column id=\"NCRINSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NCRCYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRDEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRLOTSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"INSPECTIONQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"CANDELETE\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"PRIORITY\" type=\"STRING\" size=\"256\"/><Column id=\"FILEINSPECTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILERESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ORIPROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID1\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID2\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_OSPInspectionMeasure", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONMETHODNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"NCRDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONSTANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"SPECSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"TARGETVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"UPPERSPECLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"LOWERSPECLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"CL\" type=\"STRING\" size=\"256\"/><Column id=\"UPPERCONTROLLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"LOWERCONTROLLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"UPPERSCREENLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"LOWERSCREENLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"PRIORITY\" type=\"STRING\" size=\"256\"/><Column id=\"FILEINSPECTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"ORIPROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID1\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID2\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROLTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_OSPMeasureByInspItem", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ORIPROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"LOWERSPECLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"UPPERSPECLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"LOWERCONTROLLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"UPPERCONTROLLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"UPPERSCREENLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"LOWERSCREENLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"TXNGROUPHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"ISDELETE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME\" type=\"STRING\" size=\"256\" datapath=\"\"/><Column id=\"INSPECTIONSTANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"TARGETVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"PRIORITY\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_OSPInspDefect", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"SAMPLEQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"INSPECTIONQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"JOINCODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"FILEINSPECTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILERESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID1\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectReasonConsumable", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_AQLCheckBasis", this);
            obj._setContents("<ColumnInfo><Column id=\"SIZECODE\" type=\"STRING\" size=\"256\"/><Column id=\"AQLSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOUTQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_AQLActionGrade", this);
            obj._setContents("<ColumnInfo><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"PRIORITY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_NCRCheckBasis", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"PRIORITY\" type=\"INT\" size=\"256\"/><Column id=\"FROMNGRATE\" type=\"STRING\" size=\"256\"/><Column id=\"TONGRATE\" type=\"STRING\" size=\"256\"/><Column id=\"NGQUANTITY\" type=\"STRING\" size=\"256\"/><Column id=\"NGCONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"QTYORRATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inspectionResultInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"TORESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONUSER\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISSEND\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTITEM\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTYSUM\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTYSUMPNL\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"JUDGMENTCRITERIA\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREUSER\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sendEmailList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTION\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSINGSTATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_AQLBasisInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DECISIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDEFECTLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLINSPECTIONLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"NCRINSPECTIONQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_return", this);
            obj._setContents("<ColumnInfo><Column id=\"ISSENDEMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"EXTERIORNG\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURENG\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONREQUIRED\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_equipmentList", this);
            obj._setContents("<ColumnInfo><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTUNIT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","82","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,null,"70","28","95","20",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptext("SAVE");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_no");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","97","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"700","10","0","48",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Div("div_subSearch","20","20",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_detailLotNo","0","0","140","31",null,null,null,null,null,null,this.div_subSearch.form);
            obj.set_taborder("1");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_detailLabel_P");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("LOTID");
            this.div_subSearch.addChild(obj.name, obj);

            obj = new Edit("edt_lotNo","145","5","250","20",null,null,null,null,null,null,this.div_subSearch.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_enable("true");
            this.div_subSearch.addChild(obj.name, obj);

            obj = new Grid("grd_lot","20","62",null,"145","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("grd_detail_Master");
            obj.set_autoenter("select");
            obj.set_fillareatype("allrow");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_lotInfoByLotIDOSP");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"170\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_head\" text=\"Lot No.\" wordWrap=\"char\" tooltiptext=\"LOTID\"/><Cell col=\"1\" textAlign=\"left\" text=\"bind:LOTID\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"이전공정명\" wordWrap=\"char\" tooltiptext=\"PREVPROCESSSEGMENTNAME\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:PREVPROCESSSEGMENTNAME\"/><Cell col=\"4\" cssclass=\"cell_head\" text=\"공정ID\" wordWrap=\"char\" tooltiptext=\"PROCESSSEGMENTID\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"6\" cssclass=\"cell_head\" text=\"공정명\" wordWrap=\"char\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"7\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"8\" cssclass=\"cell_head\" text=\"후공정 ID\" wordWrap=\"char\" tooltiptext=\"NEXTPROCESSSEGMENTID\"/><Cell col=\"9\" textAlign=\"left\" text=\"bind:NEXTPROCESSSEGMENTID\"/><Cell row=\"1\" cssclass=\"cell_head\" text=\"후공정\" wordWrap=\"char\" tooltiptext=\"NEXTPROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"1\" textAlign=\"left\" text=\"bind:NEXTPROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"2\" cssclass=\"cell_head\" text=\"공정수순\" wordWrap=\"char\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"3\" textAlign=\"left\" text=\"bind:USERSEQUENCE\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_head\" text=\"품목코드\" wordWrap=\"char\" tooltiptext=\"PRODUCTDEFID\"/><Cell row=\"1\" col=\"5\" textAlign=\"left\" text=\"bind:PRODUCTDEFID\"/><Cell row=\"1\" col=\"6\" cssclass=\"cell_head\" text=\"Rev\" wordWrap=\"char\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell row=\"1\" col=\"7\" textAlign=\"left\" text=\"bind:PRODUCTDEFVERSION\"/><Cell row=\"1\" col=\"8\" cssclass=\"cell_head\" text=\"품목명\" wordWrap=\"char\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell row=\"1\" col=\"9\" textAlign=\"left\" text=\"bind:PRODUCTDEFNAME\"/><Cell row=\"2\" cssclass=\"cell_head\" text=\"제품Type\" wordWrap=\"char\" tooltiptext=\"PRODUCTTYPE\"/><Cell row=\"2\" col=\"1\" textAlign=\"left\" text=\"bind:PRODUCTTYPE\"/><Cell row=\"2\" col=\"2\" cssclass=\"cell_head\" text=\"투입일자\" wordWrap=\"char\" tooltiptext=\"INPUTDATE\"/><Cell row=\"2\" col=\"3\" textAlign=\"left\" text=\"bind:INPUTDATE\"/><Cell row=\"2\" col=\"4\" cssclass=\"cell_head\" text=\"S/O번호\" wordWrap=\"char\" tooltiptext=\"PRODUCTIONORDERID\"/><Cell row=\"2\" col=\"5\" textAlign=\"left\" text=\"bind:PRODUCTIONORDERID\"/><Cell row=\"2\" col=\"6\" cssclass=\"cell_head\" text=\"납기일\" wordWrap=\"char\" tooltiptext=\"DUEDATE\"/><Cell row=\"2\" col=\"7\" textAlign=\"left\" text=\"bind:DUEDATE\"/><Cell row=\"2\" col=\"8\" cssclass=\"cell_head\" text=\"품목유형구분\" wordWrap=\"char\" tooltiptext=\"PRODUCTDEFTYPE\"/><Cell row=\"2\" col=\"9\" textAlign=\"left\" text=\"bind:PRODUCTDEFTYPE\"/><Cell row=\"3\" cssclass=\"cell_head\" text=\"생산구분\" wordWrap=\"char\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell row=\"3\" col=\"1\" textAlign=\"left\" text=\"bind:PRODUCTIONTYPE\"/><Cell row=\"3\" col=\"2\" cssclass=\"cell_head\" text=\"작업장 ID\" wordWrap=\"char\" tooltiptext=\"AREAID\"/><Cell row=\"3\" col=\"3\" textAlign=\"left\" text=\"bind:AREAID\"/><Cell row=\"3\" col=\"4\" cssclass=\"cell_head\" text=\"작업장\" wordWrap=\"char\" tooltiptext=\"AREANAME\"/><Cell row=\"3\" col=\"5\" textAlign=\"left\" text=\"bind:AREANAME\"/><Cell row=\"3\" col=\"6\" cssclass=\"cell_head\" text=\"고객명\" wordWrap=\"char\" tooltiptext=\"CUSTOMERNAME\"/><Cell row=\"3\" col=\"7\" textAlign=\"left\" text=\"bind:CUSTOMERNAME\"/><Cell row=\"3\" col=\"8\" cssclass=\"cell_head\" text=\"단위\" wordWrap=\"char\" tooltiptext=\"UNIT\"/><Cell row=\"3\" col=\"9\" textAlign=\"left\" text=\"bind:UNIT\"/><Cell row=\"4\" cssclass=\"cell_head\" text=\"수량(PNL)\" wordWrap=\"char\" tooltiptext=\"PNLQTY\"/><Cell row=\"4\" col=\"1\" textAlign=\"left\" text=\"bind:PNLQTY\" displaytype=\"mask\"/><Cell row=\"4\" col=\"2\" cssclass=\"cell_head\" text=\"수량(PCS)\" wordWrap=\"char\" tooltiptext=\"PCSQTY\"/><Cell row=\"4\" col=\"3\" textAlign=\"left\" text=\"bind:PCSQTY\"/><Cell row=\"4\" col=\"4\" cssclass=\"cell_head\" text=\"PCS/PNL\" wordWrap=\"char\" tooltiptext=\"PCSPNL\"/><Cell row=\"4\" col=\"5\" textAlign=\"left\" text=\"bind:PCSPNL\"/><Cell row=\"4\" col=\"6\" cssclass=\"cell_head\" text=\"재작업 여부\" wordWrap=\"char\" tooltiptext=\"ISREWORK\"/><Cell row=\"4\" col=\"7\" textAlign=\"left\" text=\"bind:ISREWORK\"/><Cell row=\"4\" col=\"8\" cssclass=\"cell_head\" wordWrap=\"char\" tooltiptext=\"SUBPROCESSDEFID\" font=\"normal 10px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/><Cell row=\"4\" col=\"9\" textAlign=\"left\"/><Cell row=\"5\" colspan=\"3\" cssclass=\"cell_head\" text=\"SUBPROCESSDEFID\" tooltiptext=\"SUBPROCESSDEFID\"/><Cell row=\"5\" col=\"3\" text=\"bind:SUBPROCESSDEFID\"/><Cell row=\"5\" col=\"4\" cssclass=\"cell_head\"/><Cell row=\"5\" col=\"5\"/><Cell row=\"5\" col=\"6\" colspan=\"3\" cssclass=\"cell_head\" text=\"SUBPROCESSDEFVERSION\" tooltiptext=\"SUBPROCESSDEFVERSION\"/><Cell row=\"5\" col=\"9\" text=\"bind:SUBPROCESSDEFVERSION\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_handOver","52.62%","243",null,"92","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_hanOverYn","0","10","100","20",null,null,null,null,null,null,this.div_handOver.form);
            obj.set_taborder("1");
            obj.set_text("인계처리 여부");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("ISTAKEOVER");
            this.div_handOver.addChild(obj.name, obj);

            obj = new Static("sta_area","0","35","100","20",null,null,null,null,null,null,this.div_handOver.form);
            obj.set_taborder("3");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("AREA");
            this.div_handOver.addChild(obj.name, obj);

            obj = new Button("btn_area","50%","35","22","20",null,null,null,null,null,null,this.div_handOver.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            this.div_handOver.addChild(obj.name, obj);

            obj = new Edit("edt_area","sta_area:5","35",null,"20","btn_area:0",null,null,null,null,null,this.div_handOver.form);
            obj.set_taborder("0");
            this.div_handOver.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","323","34",null,"21","209",null,null,null,null,null,this.div_handOver.form);
            obj.set_taborder("5");
            obj.set_background("thistle");
            obj.set_visible("false");
            this.div_handOver.addChild(obj.name, obj);

            obj = new Edit("edt_resource_id","323","56",null,"20","209",null,null,null,null,null,this.div_handOver.form);
            obj.set_taborder("6");
            obj.set_background("thistle");
            obj.set_visible("false");
            this.div_handOver.addChild(obj.name, obj);

            obj = new Radio("rdo_handOver","110","10","460","20",null,null,null,null,null,null,this.div_handOver.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_isHandOverProcess");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_columncount("3");
            this.div_handOver.addChild(obj.name, obj);

            obj = new Div("div_inspect","20","243",null,"92","div_handOver:10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_processingStatus","0","10","100","20",null,null,null,null,null,null,this.div_inspect.form);
            obj.set_taborder("6");
            obj.set_text("처리사항");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("ISHANDOVERPROCESS");
            this.div_inspect.addChild(obj.name, obj);

            obj = new Static("sta_inspectDate","0","35","100","20",null,null,null,null,null,null,this.div_inspect.form);
            obj.set_taborder("7");
            obj.set_text("완료일시");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("INSPECTIONDATE");
            this.div_inspect.addChild(obj.name, obj);

            obj = new Static("sta_degree","0","60","100","20",null,null,null,null,null,null,this.div_inspect.form);
            obj.set_taborder("8");
            obj.set_text("차수");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("DEGREE");
            this.div_inspect.addChild(obj.name, obj);

            obj = new Static("sta_inspUser","50%","35","100","20",null,null,null,null,null,null,this.div_inspect.form);
            obj.set_taborder("9");
            obj.set_text("검사자");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("SHIPINSPECTORNAME");
            this.div_inspect.addChild(obj.name, obj);

            obj = new Static("sta_inspResult","50%","60","100","20",null,null,null,null,null,null,this.div_inspect.form);
            obj.set_taborder("10");
            obj.set_text("판정결과");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("INSPECTIONRESULT");
            this.div_inspect.addChild(obj.name, obj);

            obj = new Combo("cbo_processingStatus","105","10",null,"20","sta_inspUser:0",null,null,null,null,null,this.div_inspect.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,ProcessingStatus,,Y,Y");
            this.div_inspect.addChild(obj.name, obj);

            obj = new Calendar("cal_inspectDate","105","35",null,"20","sta_inspUser:0",null,null,null,null,null,this.div_inspect.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            this.div_inspect.addChild(obj.name, obj);

            obj = new Edit("edt_degree","105","60",null,"20","sta_inspResult:0",null,null,null,null,null,this.div_inspect.form);
            obj.set_taborder("4");
            obj.set_value("1");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("1");
            this.div_inspect.addChild(obj.name, obj);

            obj = new Edit("edt_inspUser","sta_inspUser:5","35",null,"20","32",null,null,null,null,null,this.div_inspect.form);
            obj.set_taborder("3");
            this.div_inspect.addChild(obj.name, obj);

            obj = new Edit("edt_inspResult","sta_inspResult:5","60","212","20",null,null,null,null,null,null,this.div_inspect.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_inspect.addChild(obj.name, obj);

            obj = new Button("btn_inspUser",null,"35","22","20","10",null,null,null,null,null,this.div_inspect.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_finder");
            this.div_inspect.addChild(obj.name, obj);

            obj = new Button("btn_selfInspLink","cbo_processingStatus:3","10","114","20",null,null,null,null,null,null,this.div_inspect.form);
            obj.set_taborder("1");
            obj.set_text("자주검사 결과 연계");
            obj.set_cssclass("btn_WF_black");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SELFINSPECTIONRESULTLINK");
            this.div_inspect.addChild(obj.name, obj);

            obj = new Edit("edt_inspUser_id","546","14",null,"19","32",null,null,null,null,null,this.div_inspect.form);
            obj.set_taborder("12");
            obj.set_visible("false");
            obj.set_background("thistle");
            this.div_inspect.addChild(obj.name, obj);

            obj = new Static("title2","20","209","70","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("검사 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("INSPECTIONINFO");
            this.addChild(obj.name, obj);

            obj = new Static("title2_00","div_inspect:10","209","98","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("인계처리 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("TAKEOVERINFO");
            this.addChild(obj.name, obj);

            obj = new Static("title2_01","20","336","103","34",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("검사 결과 등록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("INSPECTIONRESULTREGISTER");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_result","20","370",null,"284","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_result);
            obj.set_text("외관 검사");
            obj.set_tooltiptext("EXTERIORINSPECTION");
            this.tab_result.addChild(obj.name, obj);

            obj = new Static("title2_01","0","0","80","34",null,null,null,null,null,null,this.tab_result.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("외관 검사");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("EXTERIORINSPECTION");
            this.tab_result.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_inspectionDecisionClass","title2_01:40","9","118","20",null,null,null,null,null,null,this.tab_result.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("판정기준(외관검사)");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("EXTINSPSTANDARDTYPE");
            this.tab_result.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_inspectionDecisionClass","sta_inspectionDecisionClass:5","9","165","20",null,null,null,null,null,null,this.tab_result.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,InspectionDecisionClass,,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_result.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_AQLInspectionQty","cbo_inspectionDecisionClass:20","9","70","20",null,null,null,null,null,null,this.tab_result.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("검사 수량");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("INSPECTIONQTY");
            this.tab_result.Tabpage1.addChild(obj.name, obj);

            obj = new MaskEdit("msk_AQLInspectionQty","sta_AQLInspectionQty:5","9","80","20",null,null,null,null,null,null,this.tab_result.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.tab_result.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_AQLInspectionLevel","msk_AQLInspectionQty:20","9","63","20",null,null,null,null,null,null,this.tab_result.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("검사수준");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("AQLINSPECTIONLEVEL");
            this.tab_result.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_AQLInspectionLevel","sta_AQLInspectionLevel:5","9","120","20",null,null,null,null,null,null,this.tab_result.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.tab_result.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_addRowOSPInspectionExterior",null,"6","26","24","382",null,null,null,null,null,this.tab_result.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.tab_result.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delRowOSPInspectionExterior",null,"6","26","24","356",null,null,null,null,null,this.tab_result.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.tab_result.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_OSPInspectionExterior","0","34",null,null,"356","0",null,null,null,null,this.tab_result.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_OSPInspectionExterior");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"180\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"88\"/><Column size=\"70\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"불량코드명\" tooltiptext=\"DEFECTCODENAME\"/><Cell col=\"2\" colspan=\"2\" text=\"검사 수량\" cssclass=\"cell_headMaster\" tooltiptext=\"INSPECTIONQTY\"/><Cell col=\"4\" colspan=\"2\" text=\"불량 수량\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECTQTY\"/><Cell col=\"6\" rowspan=\"2\" text=\"불량률(%)\" tooltiptext=\"DEFECTRATEANDPERCENT\"/><Cell col=\"7\" rowspan=\"2\" text=\"판정결과\" tooltiptext=\"INSPECTIONRESULT\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell row=\"1\" col=\"2\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"3\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"4\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"5\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"8\" text=\"QCGRADE\"/><Cell row=\"1\" col=\"9\" text=\"PRIORITY\"/><Cell row=\"1\" col=\"10\" text=\"AQLINSPECTIONLEVEL\"/><Cell row=\"1\" col=\"11\" text=\"AQLDEFECTLEVEL\"/><Cell row=\"1\" col=\"12\" text=\"AQLDECISIONDEGREE\"/><Cell row=\"1\" col=\"13\" text=\"DECISIONDEGREE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:JOINNAME\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:INSPECTIONQTY\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"3\" text=\"bind:INSPECTIONQTYPNL\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"#,##0\" textAlign=\"right\" editautoselect=\"true\"/><Cell col=\"4\" text=\"bind:DEFECTQTY\" edittype=\"mask\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"#,##0\" textAlign=\"right\" editautoselect=\"true\"/><Cell col=\"5\" text=\"bind:DEFECTQTYPNL\" displaytype=\"mask\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"#,##0\" textAlign=\"right\" editautoselect=\"true\"/><Cell col=\"6\" text=\"bind:DEFECTRATE\" maskeditformat=\"##0.#\" maskeditautoselect=\"true\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:INSPECTIONRESULT\" combocodecol=\"C,OKNG,,Y,N\" displaytype=\"combotext\"/><Cell col=\"8\" text=\"bind:QCGRADE\"/><Cell col=\"9\" text=\"bind:PRIORITY\"/><Cell col=\"10\" text=\"bind:AQLINSPECTIONLEVEL\"/><Cell col=\"11\" text=\"bind:AQLDEFECTLEVEL\"/><Cell col=\"12\" text=\"bind:AQLDECISIONDEGREE\"/><Cell col=\"13\" text=\"bind:DECISIONDEGREE\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" tooltiptext=\"SUM\" text=\"합계\"/><Cell col=\"2\" expr=\"dataset.getAvg(&quot;INSPECTIONQTY&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"3\" expr=\"dataset.getAvg(&quot;INSPECTIONQTYPNL&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"4\" expr=\"dataset.getSum(&quot;DEFECTQTY&quot;)\" displaytype=\"mask\"/><Cell col=\"5\" expr=\"dataset.getSum(&quot;DEFECTQTYPNL&quot;)\" displaytype=\"mask\"/><Cell col=\"6\" displaytype=\"mask\" expandsize=\"24\" maskeditformat=\"#,##0.00\" expr=\"dataset.getSum(&quot;DEFECTRATE&quot;)\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/></Band></Format></Formats>");
            this.tab_result.Tabpage1.addChild(obj.name, obj);

            obj = new ImageViewer("img_OSPInspectionExterior1",null,"34","170",null,"176","0",null,null,null,null,this.tab_result.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("img_photo");
            obj.set_stretch("fit");
            this.tab_result.Tabpage1.addChild(obj.name, obj);

            obj = new ImageViewer("img_OSPInspectionExterior2","1089","34",null,null,"0","0",null,null,null,null,this.tab_result.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("img_photo");
            obj.set_stretch("fit");
            this.tab_result.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_addImgOSPInspectionExterior",null,"6","86","24","0",null,null,null,null,null,this.tab_result.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("이미지 추가");
            obj.set_tooltiptext("ADDPICTURE");
            this.tab_result.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_result);
            obj.set_text("측정 검사");
            obj.set_tooltiptext("MEASUREINSPECTION");
            this.tab_result.addChild(obj.name, obj);

            obj = new Edit("edt_measureUser","692","9",null,"20","439",null,null,null,null,null,this.tab_result.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.set_value("향후삭제");
            obj.set_text("향후삭제");
            this.tab_result.Tabpage2.addChild(obj.name, obj);

            obj = new Static("title2_01","0","0",null,"34","1150",null,null,null,null,null,this.tab_result.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("측정 항목");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MEASUREITEM");
            this.tab_result.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_equipmentid","title2_01:70","9",null,"20","995",null,null,null,null,null,this.tab_result.Tabpage2.form);
            obj.set_taborder("12");
            obj.set_text("설비(호기)");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("EQUIPMENTUNIT");
            obj.set_enable("false");
            obj.set_visible("true");
            this.tab_result.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cbo_equipmentid","sta_equipmentid:5","10","160","20",null,null,null,null,null,null,this.tab_result.Tabpage2.form);
            obj.set_taborder("13");
            obj.set_innerdataset("ds_equipmentList");
            obj.set_codecolumn("EQUIPMENTID");
            obj.set_datacolumn("EQUIPMENTUNIT");
            obj.set_visible("false");
            obj.set_index("-1");
            this.tab_result.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_equipmentid","sta_equipmentid:5","10",null,"20","830",null,null,null,null,null,this.tab_result.Tabpage2.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_readonly("true");
            obj.set_text("향후삭제");
            this.tab_result.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_OSPInspectionMeasure","0","34",null,null,"828","0",null,null,null,null,this.tab_result.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_OSPInspectionMeasure");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"130\"/><Column size=\"250\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사항목명\" tooltiptext=\"INSPITEMNAME\"/><Cell col=\"2\" text=\"검사기준\" tooltiptext=\"INSPECTIONSTANDARD\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"INSPECTIONRESULT\"/><Cell col=\"5\" text=\"NCRDECISIONDEGREE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INSPITEMNAME\" textAlign=\"left\" cssclass=\"expr:comp.parent.parent.parent.parent.gfn_isNull(dataset.getColumn(currow, &quot;INSPECTIONRESULT&quot;))?&apos;&apos;:&apos;cell_bg_yellow&apos;\"/><Cell col=\"2\" text=\"bind:INSPECTIONSTANDARD\" suppress=\"1\" cssclass=\"expr:comp.parent.parent.parent.parent.gfn_isNull(dataset.getColumn(currow, &quot;INSPECTIONRESULT&quot;))?&apos;&apos;:&apos;cell_bg_yellow&apos;\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:ATCH_FILE_GUID\"/><Cell col=\"4\" text=\"bind:INSPECTIONRESULT\"/><Cell col=\"5\" text=\"bind:NCRDECISIONDEGREE\"/></Band></Format></Formats>");
            this.tab_result.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_addRowOSPMeasureByInspItem",null,"6","26","24","382",null,null,null,null,null,this.tab_result.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.tab_result.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_delRowOSPMeasureByInspItem",null,"6","26","24","356",null,null,null,null,null,this.tab_result.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.tab_result.Tabpage2.addChild(obj.name, obj);

            obj = new ImageViewer("img_OSPInspectionMeasure1",null,"34","170",null,"176","0",null,null,null,null,this.tab_result.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_cssclass("img_photo");
            obj.set_stretch("fit");
            this.tab_result.Tabpage2.addChild(obj.name, obj);

            obj = new ImageViewer("img_OSPInspectionMeasure2","1089","34","170",null,null,"0",null,null,null,null,this.tab_result.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_cssclass("img_photo");
            obj.set_stretch("fit");
            this.tab_result.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_addImgOSPInspectionMeasure",null,"6","86","24","0",null,null,null,null,null,this.tab_result.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("이미지 추가");
            obj.set_tooltiptext("ADDPICTURE");
            this.tab_result.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_OSPMeasureByInspItem","444","34",null,null,"356","0",null,null,null,null,this.tab_result.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_OSPMeasureByInspItem");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사항목명\" tooltiptext=\"INSPITEMNAME\"/><Cell col=\"2\" text=\"측정값\" tooltiptext=\"MEASUREVALUE\"/><Cell col=\"3\" text=\"판정결과\" tooltiptext=\"INSPECTIONRESULT\"/><Cell col=\"4\" text=\"LOWERSPECLIMIT\"/><Cell col=\"5\" text=\"UPPERSPECLIMIT\"/><Cell col=\"6\" text=\"NCRDECISIONDEGREE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INSPITEMNAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:MEASUREVALUE\" displaytype=\"mask\" maskeditformat=\"#,0.######\" edittype=\"mask\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"3\" text=\"bind:INSPECTIONRESULT\" combocodecol=\"C,OKNG,,Y,Y\"/><Cell col=\"4\" text=\"bind:LOWERSPECLIMIT\"/><Cell col=\"5\" text=\"bind:UPPERSPECLIMIT\"/><Cell col=\"6\" text=\"bind:NCRDECISIONDEGREE\"/></Band></Format></Formats>");
            this.tab_result.Tabpage2.addChild(obj.name, obj);

            obj = new Static("title2_01_00","444","0","196","34",null,null,null,null,null,null,this.tab_result.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_text("측정 값");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MEASUREVALUE");
            this.tab_result.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edt_measureUser_id","843","9","10","19",null,null,null,null,null,null,this.tab_result.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_visible("false");
            obj.set_background("thistle");
            obj.set_enable("false");
            this.tab_result.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_measureUser",null,"9","22","20","417",null,null,null,null,null,this.tab_result.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_finder");
            obj.set_enable("false");
            obj.set_visible("false");
            this.tab_result.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tab_result);
            obj.set_text("불량(폐기)처리");
            obj.set_tooltiptext("DEFECTDISPOSAL");
            this.tab_result.addChild(obj.name, obj);

            obj = new Static("title2_01","0","0","140","34",null,null,null,null,null,null,this.tab_result.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("불량(폐기)처리");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DEFECTDISPOSAL");
            this.tab_result.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_OSPInspDefect","0","34",null,null,"356","0",null,null,null,null,this.tab_result.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_OSPInspDefect");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"220\"/><Column size=\"250\"/><Column size=\"200\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"불량코드명\" tooltiptext=\"DEFECTCODENAME\"/><Cell col=\"2\" colspan=\"2\" text=\"불량 수량\" cssclass=\"cell_headMaster\" tooltiptext=\"SPECOUTQTY\"/><Cell col=\"4\" rowspan=\"2\" text=\"불량률(%)\" tooltiptext=\"DEFECTRATE\"/><Cell col=\"5\" rowspan=\"2\" text=\"원인품목\" tooltiptext=\"REASONCONSUMABLEDEFID\"/><Cell col=\"6\" rowspan=\"2\" text=\"원인 LOTID\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell col=\"7\" rowspan=\"2\" text=\"원인공정\" tooltiptext=\"REASONPROCESSSEGMENTID\"/><Cell col=\"8\" rowspan=\"2\" text=\"원인작업장\" cssclass=\"cell_end\" tooltiptext=\"REASONAREAID\"/><Cell row=\"1\" col=\"2\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"3\" text=\"PNL\" tooltiptext=\"PNL\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:JOINNAME\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr: dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DEFECTQTY\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:DEFECTQTYPNL\" maskeditformat=\"#,##0\" displaytype=\"mask\" edittype=\"mask\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"4\" text=\"bind:DEFECTRATE\" displaytype=\"mask\" maskeditformat=\"#,##0.#\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:REASONCONSUMABLEDEFNAME\" comboautoselect=\"true\" expandimage=\"url(&apos;theme://images/cmb_drop_N.png&apos;)\" expandshow=\"show\" expandsize=\"24\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:REASONCONSUMABLELOTID\" combocodecol=\"CONSUMABLELOTID\" combodatacol=\"CONSUMABLELOTID\" combodataset=\"ds_defectReasonConsumable\" displaytype=\"combotext\" edittype=\"expr:comp.parent.nfn_isNull(dataset.getColumn(currow, &quot;REASONCONSUMABLEDEFNAME&quot;) ) == true ? &apos;none&apos;:&apos;combo&apos;\"/><Cell col=\"7\" text=\"bind:REASONSEGMENTNAME\" expandimage=\"url(&apos;theme://images/cmb_drop_N.png&apos;)\" expandshow=\"expr:comp.parent.nfn_isNull(dataset.getColumn(currow, &quot;REASONCONSUMABLELOTID&quot;) ) == true ? &apos;hide&apos;:&apos;show&apos;\" expandsize=\"24\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:REASONAREANAME\" cssclass=\"cell_end\" textAlign=\"left\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\" tooltiptext=\"SUM\"/><Cell col=\"2\" displaytype=\"mask\" maskeditformat=\"#,###\" expr=\"dataset.getSum(&quot;DEFECTQTY&quot;) \"/><Cell col=\"3\"/><Cell col=\"4\" displaytype=\"mask\" expandsize=\"24\" maskeditformat=\"#,##0.00\" expr=\"dataset.getSum(&quot;DEFECTRATE&quot;)\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.tab_result.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_addRowOSPInspDefect",null,"6","26","24","382",null,null,null,null,null,this.tab_result.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.tab_result.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_delRowOSPInspDefect",null,"6","26","24","356",null,null,null,null,null,this.tab_result.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.tab_result.Tabpage3.addChild(obj.name, obj);

            obj = new ImageViewer("img_OSPInspDefect1",null,"34","170",null,"176","0",null,null,null,null,this.tab_result.Tabpage3.form);
            obj.set_taborder("4");
            obj.set_cssclass("img_photo");
            obj.set_stretch("fit");
            this.tab_result.Tabpage3.addChild(obj.name, obj);

            obj = new ImageViewer("img_OSPInspDefect2","1089","34","170",null,null,"0",null,null,null,null,this.tab_result.Tabpage3.form);
            obj.set_taborder("5");
            obj.set_cssclass("img_photo");
            obj.set_stretch("fit");
            this.tab_result.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_addImgOSPInspDefect",null,"6","86","24","0",null,null,null,null,null,this.tab_result.Tabpage3.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("이미지 추가");
            obj.set_tooltiptext("ADDPICTURE");
            this.tab_result.Tabpage3.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_process","5","697","490","210",null,null,null,null,null,null,this);
            obj.set_text("pdv_00");
            obj.set_visible("false");
            obj.set_url("qam::QAM01800P7.xfdl");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_reason","556","697","500","127",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_url("qam::QAM01800P6.xfdl");
            obj.set_async("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,712,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","qam::QAM01800P7.xfdl");
            this._addPreloadList("fdl","qam::QAM01800P6.xfdl");
        };
        
        // User Script
        this.addIncludeScript("QAM00600P1.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM00600P1.xfdl","lib::lib_qam.xjs");
        this.addIncludeScript("QAM00600P1.xfdl","qam::qamInspectionHelper.xjs");
        this.registerScript("QAM00600P1.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 품질관리>>수입검사>>수입검사 결과등록
         * 파일명         : QAM006000P1.xfdl
         * 작성자         : yanghee.kim
         * 작성일         : 2021.03.26
         *
         * 설  명         :
         *
         * 참  고         : 측정검사 색변경 Grid cssclass
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.26   yanghee.kim   최초작성
         * 2021.06.09   20210609      외관검사 판정기준 기본값 AQL=> NCR로 변경
         *                            검사수량을 쿼리문에서 가져오는 거에서 사용자가 입력받은 값으로 셋팅(AQL:PCS수량, NCR:PNL수량)
         *                            검사기준을 공정검사기준정보를 바라보도록 수정
         * 2021.06.17   20210617      입고의뢰취소 선택시에는 검사내역이 입력되지 않아도 "NG" 처리
         * 2021.06.21   20210621      판정결과가 NG일 경우 조치등급에 따라 Locking 되므로, Locking이 되지않는 조치등급에서는 인계처리가 선택되도록 수정
         * 2021.06.25   20210625      품질규격등록자 추가
         * 2021.06.30   20210630      품질규격등록자 화면에 추가하지 않고 검사자 정보를 넣음
         * 2021.07.13   20210713      측정검사시 설비정보 사용자가 선택하도록 추가
         * 2021.08.18   20210818      메뉴권한정보에 등록,수정,삭제 권한이 없을 경우 버튼 비활성화
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;  //기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;	//품질관리 공통 라이브러리 include
        this.executeIncludeScript("qam::qamInspectionHelper.xjs"); /*include "qam::qamInspectionHelper.xjs"*/; //품질검사 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.lang;
        this.userId;
        this.plantId;
        this.enterpriseId;

        this.parentLotId;        //부모창의 LOTID
        this.parentPanelPerQty;  //부모창의 PANELPERQTY
        this.parentProcessRelNo; //부모창의 LOTHISTKEY+ DEGREE
        this.g_lotPcsQty = 0.0;  //Lot정보의 수량(PCS) : PCSQTY

        //마지막 재작업인지  아닌지 판단
        this.processDefType; // =====>사용하지 않는것 같음
        this.lastRework;     // 인계처리 작업장 호출시 사용

        this.jobType;        //작업타입(insertData/updateData)
        this.g_isLocking = "N";//NCR 자동 locking 처리 여부
        this.g_hasImage = true; //이미지 업로드 여부

        this.firstCall = true; //탭조회 한번만 호출
        this.firstCallM = true; //한번만 수행하도록 하기 위해

        this.resourceType = "ProcessInspection";
        this.fileUploadCount = 2;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
            this.nfn_formInit(obj);

        	//공정수입 검사 현황 정보를 셋팅
        	var rtnValue = this.opener.fv_rtnValue;
        	this.opener.fv_rtnValue = "";
        	this.qamfn_setDataset(rtnValue, this.ds_parentLot, "");

            this.lang = this.gf_getLanguageType();
        	this.userId = this.gf_getUserId();
        	this.plantId = this.gf_getSiteType();
        	this.enterpriseId = this.gf_getEnterpriseId();

        	//작업장의 경우 기타정보도 초기화해야해서 별도 호출
        	this.div_handOver.form.btn_edt_area.removeEventHandler("onclick", this.nfn_editBtnClear , this);
        	this.div_handOver.form.btn_edt_area.addEventHandler("onclick", this.fn_editBtnClear , this);
            this.gfn_setGridCopyPaste(this.tab_result.Tabpage2.form.grd_OSPMeasureByInspItem);

        	//최초 호출되는 초기화 함수
        	this.fn_formInit();
        };
        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 저장
         */
        this.fn_save = function(obj,e)
        {
        	//검사 결과 최초 등록일때 결과 저장여부 평가
        	if (this.jobType == "insertData")
            {
                if (this.nfn_isNull(this.ds_lotInfoByLotIDOSP.getColumn(0, "LOTID"))) return false;

                var finalResult = this.div_inspect.form.edt_inspResult.value;

        		//결과 NG일때 입고 인계처리, 입고의뢰 취소만 선택가능
                if (!this.fn_checkFinalInspResult(finalResult)) return false;

        		var handOver = this.div_handOver.form.rdo_handOver.value
                var status   = this.div_inspect.form.cbo_processingStatus.value;
                var areaName = this.div_handOver.form.edt_area.value;

                if (handOver != "HandOverProcessNon" && (this.nfn_isNull(status) || this.nfn_isNull(handOver)))
                {
                    this.gfn_Message("NeedToInputResultItemAndTakeOver", null, "warning", "ok");//처리사항과 인계처리여부를 입력해야합니다.
                    return false;
                }

                if (handOver == "HandOverProcess" ||  handOver == "HandOverProcessNon")
                {
                    if (this.nfn_isNull(areaName))
                    {
                        this.gfn_Message("NeedToInputAreaWhenTakeOver", null, "warning", "ok");//인계처리시 인계작업장을 입력해야합니다.
                        return false;
                    }
                }

                // 결과 입력 VALIDATION
                if (this.fn_checkAllResultAndImageInput(this.tab_result.Tabpage1.form.grd_OSPInspectionExterior, true) == false
                    || this.fn_checkAllResultInput(this.tab_result.Tabpage2.form.grd_OSPMeasureByInspItem) == false)
                {
                    if (this.g_hasImage == false)
                    {
                        this.gfn_Message("NeedToAddImage", null, "warning", "ok");//판정 결과가 NG 인 항목은 적어도 하나의 이미지를 추가해야합니다.
                    }
                    else
                    {
                        this.gfn_Message("NeedToAllInspectionResult", null, "warning", "ok");//모든 검사 결과를 입력해야 합니다.
                    }

                    return;
                }

        		//20210609 입력받은 값으로 셋팅
        		//var avgInspectionQty = nexacro.toNumber(this.ds_OSPInspectionExterior.getAvg("INSPECTIONQTY"), 0);
        		var avgInspectionQty = this.tab_result.Tabpage1.form.msk_AQLInspectionQty.value;

                //if ( this.jobType == "insertData" && this.ds_OSPInspectionExterior.getRowCount() > 0 && (avgInspectionQty == 0 || this.nfn_isNull(avgInspectionQty)))
        		if ( this.jobType == "insertData" && (avgInspectionQty == 0 || this.nfn_isNull(avgInspectionQty)))
                {
                    this.gfn_Message("NoInspectionQtyAndPnl", null, "warning", "ok");//검사 수량을 먼저 입력하세요.
        			this.tab_result.Tabpage1.form.msk_AQLInspectionQty.setFocus();
                    return;
        	    }

        		if (this.fn_OSPInspDefectInputCheck())
        		{
        			var defectPNLQtyZero = this.ds_OSPInspDefect.getCaseCount("DEFECTQTYPNL == 0");

        			if (defectPNLQtyZero > 0)
        			{
        				this.gfn_Message("DefectQtyInputZero", null, "warning", "ok");//불량(폐기)처리 불량수량은 0을 입력할수 없습니다.
        				return;
        			}
        		}
        		else
        		{
        			return;
        		}

        		//20210625 품질규격등록자 체크
        		/*
        		if (this.nfn_isNull(this.tab_result.Tabpage2.form.edt_measureUser_id.value))
        		{
        			this.gfn_Message("InputCorrectSomething", this.nfn_getDictionarynameUpper("WRITER"), "warning", "ok");//{0}을(를) 올바르게 입력하여 주십시오.
        			return;
        		}
        		*/

        		//인계처리, 인계처리(무검사)일 경우 측정검사 필수 대상인지 체크
        		if (handOver != "ReceivingCancel")
        		{
        			if (!this.fn_checkMeasure()) return false;
        		}

        		this.div_inspect.form.cal_inspectDate.set_value(this.nfn_getCurrentSystemTime(0, 0, ""));

            }//if (this.jobType == "insertData")

            result = this.gfn_Message("ResultRegisterConfirmNote", null, "conf", "yesno");//검사 결과를 저장하시겠습니까?

            if (result)
            {
        		var exprInspectionqty = "!(INSPECTIONQTY == '' || INSPECTIONQTY == null || INSPECTIONQTY == undefined)";
        		var tempDefect = this.ds_OSPInspectionExterior.getCaseCount("INSPECTIONQTY == '" + exprInspectionqty + "'");

        		if (this.jobType == "insertData")
        		{
        			this.fn_getInspectionResultTableToInsert(this.ds_parentLot, this.ds_OSPMeasureByInspItem);
        		}
        		else
        		{
        			this.fn_getInspectionResultTableToUpdate(this.ds_parentLot);
        		}

        		this.fn_checkChanged(this.ds_inspectionResultInfo.getColumn(0, "STATE"));

        		//화면은 측정검사에 fileid를 가지고 있으나 DB는 측정값 저장시 fileid를 사용하기 때문에 copy
        		for (var i=0; i<this.ds_OSPInspectionMeasure.getRowCount(); i++)
        		{
        			var inspectionResult = this.ds_OSPInspectionMeasure.getColumn(i, "INSPECTIONRESULT")
        			var fileId = this.ds_OSPInspectionMeasure.getColumn(i, "FILEID");

        			if (inspectionResult == "NG" && !this.nfn_isNull(fileId))
        			{
        				var inspItemId = this.ds_OSPInspectionMeasure.getColumn(i, "INSPITEMID");
        				var inspItemVersion = this.ds_OSPInspectionMeasure.getColumn(i, "INSPITEMVERSION");

                        for (var j=0; j<this.ds_OSPMeasureByInspItem.getRowCount(); j++)
        				{
        					if (    this.ds_OSPMeasureByInspItem.getColumn(j, "INSPECTIONRESULT") == "NG"
        					     && this.ds_OSPMeasureByInspItem.getColumn(j, "INSPITEMID") == inspItemId
        						 && this.ds_OSPMeasureByInspItem.getColumn(j, "INSPITEMVERSION") == inspItemVersion)
        					{
        						this.ds_OSPMeasureByInspItem.set_enableevent(false);
        						this.ds_OSPMeasureByInspItem.setColumn(j, "FILEID", fileId);
        						this.ds_OSPMeasureByInspItem.set_enableevent(true);
        					}
        				}
        			}
        		}

        		trace(this.ds_inspectionResultInfo.saveXML());
        		trace(this.ds_OSPInspectionExterior.saveXML());
        		trace(this.ds_OSPMeasureByInspItem.saveXML());
        		trace(this.ds_OSPInspectionMeasure.saveXML());
        		trace(this.ds_OSPInspDefect.saveXML());

        		this.ds_return.clearData();

        		// -------------------------
        		// 저장
        		// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        		// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        		// -------------------------
        		var sSvcID        = "saveQcOspRequestInspRslt";
        		var sController   = "/qam00600/saveQcOspRequestInspRslt.do";
        		var sInDatasets   = "ds_inspectionResultInfo=ds_inspectionResultInfo:U ds_OSPInspectionExterior=ds_OSPInspectionExterior:U ds_OSPMeasureByInspItem=ds_OSPMeasureByInspItem:U ds_OSPInspDefect=ds_OSPInspDefect:U ds_OSPInspectionMeasure=ds_OSPInspectionMeasure:U";
        		var sOutDatasets  = "ds_return=output";
        		var sArgs         = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
            }
        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        };

        /*
         * 기능 : 측정검사 필수대상 여부와 측정항목별 측정값 입력여부 체크
         */
        this.fn_checkMeasure = function()
        {
            if (this.ds_OSPMeasureByInspItem.getRowCount() > 0)
        	{
        		for(var i=0; i< this.ds_OSPInspectionMeasure.getRowCount(); i++)
        		{
        			var inspItemId = this.ds_OSPInspectionMeasure.getColumn(i, "INSPITEMID");
        			var inspItemVersion = this.ds_OSPInspectionMeasure.getColumn(i, "INSPITEMVERSION");
        			var findRow = this.ds_OSPMeasureByInspItem.findRowExprNF("INSPITEMID =='" + inspItemId + "' && INSPITEMVERSION == '"+ inspItemVersion +"'");

        			if (findRow == -1)
        			{
        				this.gfn_Message("ENTERENTIREITEM", null, "warning", "ok"); //측정항목별 측정값을 모두 입력하셔야 합니다.
        				return false;
        			}
        		}
        	}
        	else
        	{
        		this.ds_return.clearData();
        		var sSvcID        = "selectMeasureInfo";
        		var sController   = "/qam00600/selectMeasureInfo.do";
        		var sInDatasets   = "";
        		var sOutDatasets  = "ds_return=output";
        		var sArgs         = "";
        			sArgs        += this.gfn_setParam("LOTID",                 this.ds_lotInfoByLotIDOSP.getColumn(0, "LOTID"));
                    sArgs        += this.gfn_setParam("PROCESSSEGMENTID",      this.ds_lotInfoByLotIDOSP.getColumn(0, "PROCESSSEGMENTID"));
                    sArgs        += this.gfn_setParam("PROCESSSEGMENTVERSION", this.ds_lotInfoByLotIDOSP.getColumn(0, "PROCESSSEGMENTVERSION"));
                    sArgs        += this.gfn_setParam("PRODUCTDEFID",          this.ds_lotInfoByLotIDOSP.getColumn(0, "PRODUCTDEFID"));
                    sArgs        += this.gfn_setParam("PRODUCTDEFVERSION",     this.ds_lotInfoByLotIDOSP.getColumn(0, "PRODUCTDEFVERSION"));
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false,"");

        		if (this.ds_return.rowcount > 0)
        		{
        			if ( this.ds_return.getColumn(0, "OPERATIONREQUIRED") == "Y" )
        			{
        				if ( this.ds_return.getColumn(0, "MEASUREINSPRESULT") == "N" )
        				{
        					this.gfn_Message("IsRequiredMeasure", null, "warning", "ok");//측정검사 필수 대상입니다.
        					return false;
        				}
        			}
        		}
        	}

        	return true;
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
        	    if (trId == "selectLotInfoByLotIDOSP") //Lot 정보 조회
        		{
        			if (this.ds_lotInfoByLotIDOSP.getRowCount() == 1)
        			{
        				//로딩시 화면 컨트롤 설정
        				this.fn_setInitialControl ();

        				//외관검사, 측정검사, 불량(폐기)처리 조회
        	            if (this.firstCall)
        				{
        					this.fn_searchTabAll("OnSearch");
        				}

        				//원인품목, 원인공정 POPUP DIV Call 및 원인 LOT ID Search
        				var parentLotId = this.ds_lotInfoByLotIDOSP.getColumn(this.ds_lotInfoByLotIDOSP.rowposition, "LOTID");
        				if (this.jobType == "insertData")
        				{
        					this.pdv_reason.form.ds_reasonConsumable.clearData();
        					this.pdv_reason.form.fn_searchReasonConsumable(parentLotId, "10002");

        					this.pdv_process.form.ds_defectReasonProcesssegment.clearData();
        					this.pdv_process.form.fn_searchReasonProcesssegment(parentLotId, "10002");
        				}
                    }

        			if (this.ds_equipmentList.rowcount > 0)
        			{
        				this.tab_result.Tabpage2.form.cbo_equipmentid.set_index(0);
        			}
        		}
        		else if (trId == "selectOSPInspectionAll")
        		{
        			if (this.tab_result.Tabpage1.form.cbo_inspectionDecisionClass.value == "AQL")
        			{
        			    if (this.firstCallM)
        			    {
        					if (!this.fn_setAQLQty(this.ds_OSPInspectionExterior))
        					{
        						this.firstCallM = false;
        						return;
        					}
        				}
        			}
        		}
        		else if (trId == "selectOSPInspectionExterior") //탭1. 외관검사 조회
        		{
        			if (this.tab_result.Tabpage1.form.cbo_inspectionDecisionClass.value == "AQL")
        			{
        				if (!this.fn_setAQLQty(this.ds_OSPInspectionExterior))	return;
        			}
        			else
        			{
        				//checkpoint 판정기준(외관검사) 변경시 재조회하는데 이미 넣어준 값을 초기화하여 주석처리함
        				//this.tab_result.Tabpage1.form.msk_AQLInspectionQty.set_value("");
        				this.tab_result.Tabpage1.form.edt_AQLInspectionLevel.set_value("");
        			}
        			this.tab_result.Tabpage1.form.img_OSPInspectionExterior1.set_image("");
        			this.tab_result.Tabpage1.form.img_OSPInspectionExterior2.set_image("");
        		}
        		else if (trId == "saveQcOspRequestInspRslt")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");

        			trace(this.ds_return.saveXML());

        			if(this.ds_return.rowcount > 0)
        			{
        			    if(this.ds_return.getColumn(0, "ISSENDEMAIL") == "1")
        				{
        					this.fn_setSendEmail();
        				}
        				else
        				{
        					this.opener.fn_search();
        					this.close();
        				}
        			}
        			else
        			{
        				this.opener.fn_search();
        				this.close();
        			}
        		}
            } //if errCD
        };

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

            oArg.arg_type = "BA";
            oArg.arg_popupCd = popId;
            oArg.arg_popupNm = "";
            oArg.arg_paramCols = "";
            oArg.arg_paramValues = "";
            oArg.arg_searchStr = "";

            if(popupId == "EDT_USER208")    /*검사정보-검사자*/
            {
                opts = "width=650,height=500";
        		var user = this.div_inspect.form.edt_inspUser.value
        		oArg.arg_paramCols   = "VERSION|VALIDSTATE|LANGUAGETYPE";
                oArg.arg_paramValues = "10001|Valid|"+ this.lang;
                oArg.arg_rtnCols     = "USERID|USERNAME";
                oArg.arg_searchStr   = this.nfn_isNull(user)? "1=1" : "USERIDNAME="+user;
            }
            else if(popupId == "EDT_AREA222")    /*인계처리여부-작업장*/
            {
                var lotId                 = this.ds_lotInfoByLotIDOSP.getColumn(0, "LOTID");
                var processSegmentId      = this.ds_lotInfoByLotIDOSP.getColumn(0, "NEXTPROCESSSEGMENTID");
                var processSegmentVersion = this.ds_lotInfoByLotIDOSP.getColumn(0, "NEXTPROCESSSEGMENTVERSION");
                var resourceType          = "Resource";
        		var lang	              = this.lang;
        		var enterpriseId          = this.enterpriseId;
                var plantId	              = this.ds_parentLot.getColumn(0, "PLANTID");
                var productDefId          = this.ds_lotInfoByLotIDOSP.getColumn(0, "PRODUCTDEFID");
                var productDefVersion     = this.ds_lotInfoByLotIDOSP.getColumn(0, "PRODUCTDEFVERSION");
                var lastReWork            = this.lastRework;
        		var version               = this.lastReWork == "Y" ?  "10032" : "10031";
        		var area                  = this.div_handOver.form.edt_area.value;

        		opts = "width=480,height=500";
        		oArg.arg_paramCols   = "VERSION|LOTID|PROCESSSEGMENTID|PROCESSSEGMENTVERSION|RESOURCETYPE|LANGUAGETYPE|ENTERPRISEID|PLANTID|PRODUCTDEFID|PRODUCTDEFVERSION|LASTREWORK";
                oArg.arg_paramValues = version+"|"+lotId+"|"+processSegmentId+"|"+processSegmentVersion+"|"+resourceType+"|"+lang+"|"+enterpriseId+"|"+plantId+"|"+productDefId+"|"+productDefVersion+"|"+lastReWork;
                oArg.arg_rtnCols     = "RESOURCEID|RESOURCENAME|AREAID|AREANAME";
                oArg.arg_searchStr   = this.nfn_isNull(area)? "1=1" : "TXTAREA="+area;
            }
        	else if(popupId == "GRD_DEFECTCODE272")    /*검사결과등록-외관검사-불량코드명*///GRD_DEFECTCODE207
            {
                opts = "width=680,height=700";
        		oArg.arg_paramCols   = "VALIDSTATE|LANGUAGETYPE|LOTID";
                oArg.arg_paramValues = "Valid|"+ this.lang + "|" + this.ds_lotInfoByLotIDOSP.getColumn(0, "LOTID");
                oArg.arg_rtnCols     = "JOINCODE|JOINNAME|DEFECTCODE|QCSEGMENTID|DECISIONDEGREE|AQLINSPECTIONLEVEL|AQLDEFECTLEVEL|AQLDECISIONDEGREE|DEFECTCODENAME|QCSEGMENTNAME";
        		oArg.arg_searchStr   = "1=1";
            }
        	else if(popupId == "EDT_MEASUREUSER208")    /*검사결과등록-측정검사-측정자*/
            {
                var user = this.tab_result.Tabpage2.form.edt_measureUser.value;

        		opts = "width=650,height=500";
        		oArg.arg_paramCols   = "VERSION|VALIDSTATE|LANGUAGETYPE";
                oArg.arg_paramValues = "10001|Valid|"+ this.lang;
                oArg.arg_rtnCols     = "USERID|USERNAME";
                oArg.arg_searchStr   = this.nfn_isNull(user)? "1=1" : "USERIDNAME="+user;
            }
            else if(popupId == "GRD_DEFECTCODE205")    /*검사결과등록-불량(폐기)처리-불량코드명*/
            {
                opts = "width=500,height=500";
        		oArg.arg_paramCols   = "VERSION|VALIDSTATE|LANGUAGETYPE";
                oArg.arg_paramValues = "10001|Valid|"+ this.lang;
                oArg.arg_rtnCols     = "JOINCODE|JOINNAME|DEFECTCODE|QCSEGMENTID";
        		oArg.arg_searchStr   = "1=1";
            }

            this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;

        	//파일업로드시 file정보는  Set되었는데 취소할 경우는 리턴정보가 없어 위에서 처리함
        	//checkpoint 작업을 하지 않고 화면만 열고 닫았을 경우도 리턴값이 없는데 실패랑 구분하는 방법 필요
            if (sPopupId == "file_upload_exterior")
        	{
        	   if (!this.nfn_isNull(rtn)) //변경유무
        	   {
        		   this.fn_setImageFilePopup("this.tab_result.Tabpage1.form.img_OSPInspectionExterior", this.ds_OSPInspectionExterior);
                }
        		return;
        	}
        	else if (sPopupId == "file_upload_measure")
        	{
        	   if (!this.nfn_isNull(rtn)) //변경유무
        	   {
        		   this.fn_setImageFilePopup("this.tab_result.Tabpage2.form.img_OSPInspectionMeasure", this.ds_OSPInspectionMeasure);
                }
        		return;
        	}
        	else if (sPopupId == "file_upload_defect")
        	{
        	   if (!this.nfn_isNull(rtn)) //변경유무
        	   {
        		   this.fn_setImageFilePopup("this.tab_result.Tabpage3.form.img_OSPInspDefect", this.ds_OSPInspDefect);
                }
        		return;
        	}
        	else if(sPopupId == "SEND_EMAIL")
        	{
        		this.opener.fn_search();
        		this.close();
        	}

        	if(this.nfn_isNull(rtn)) return;

            if(sPopupId == "EDT_USER208")    /*검사정보-검사자*/
            {
                this.div_inspect.form.edt_inspUser_id.set_value(rtn[0]);
        		this.div_inspect.form.edt_inspUser.set_value(rtn[1]);
            }
            else if(sPopupId == "EDT_AREA222")    /*인계처리여부-작업장*/
        	{
                this.div_handOver.form.edt_area_id.set_value(rtn[2]);
        		this.div_handOver.form.edt_area.set_value(rtn[3]);
        		this.div_handOver.form.edt_resource_id.set_value(rtn[0]);
        	}
            else if(sPopupId == "GRD_DEFECTCODE272")    /*탭1. 외관검사-불량코드명*///GRD_DEFECTCODE207
        	{
        		var joinCode = rtn[0];
        		var count = this.ds_OSPInspectionExterior.getCaseCount("JOINCODE == '" +joinCode+ "'");
        		if (nexacro.toNumber(count)> 0)
        		{
        			this.gfn_Message("DuplicationDefectCode", null, "waring", "ok");
        			return;
        		}
                var nRow = this.ds_OSPInspectionExterior.rowposition;
        		this.ds_OSPInspectionExterior.set_enableevent(false);
                this.ds_OSPInspectionExterior.setColumn(nRow, "JOINCODE",           joinCode);
        		this.ds_OSPInspectionExterior.setColumn(nRow, "JOINNAME",           rtn[1]);
                this.ds_OSPInspectionExterior.setColumn(nRow, "DEFECTCODE",         rtn[2]);
        		this.ds_OSPInspectionExterior.setColumn(nRow, "QCSEGMENTID",        rtn[3]);
        		this.ds_OSPInspectionExterior.setColumn(nRow, "DECISIONDEGREE",     rtn[4]);
        		this.ds_OSPInspectionExterior.setColumn(nRow, "AQLINSPECTIONLEVEL", rtn[5]);
        		this.ds_OSPInspectionExterior.setColumn(nRow, "AQLDEFECTLEVEL",     rtn[6]);
        		this.ds_OSPInspectionExterior.setColumn(nRow, "AQLDECISIONDEGREE",  rtn[7]);
        		this.ds_OSPInspectionExterior.setColumn(nRow, "DEFECTCODENAME",     rtn[8]);
        		this.ds_OSPInspectionExterior.setColumn(nRow, "QCSEGMENTNAME",      rtn[9]);
        		this.ds_OSPInspectionExterior.set_enableevent(true);
            }
            else if(sPopupId == "EDT_MEASUREUSER208")    /*검사결과등록-측정검사-측정자*/
            {
        		this.tab_result.Tabpage2.form.edt_measureUser_id.set_value(rtn[0]);
        		this.tab_result.Tabpage2.form.edt_measureUser.set_value(rtn[1]);
            }
        	else if(sPopupId == "GRD_DEFECTCODE205")    /*검사결과등록-불량(폐기)처리-불량코드명*/
            {
                var nRow = this.ds_OSPInspDefect.rowposition;
        		this.ds_OSPInspDefect.set_enableevent(false);
                this.ds_OSPInspDefect.setColumn(nRow, "JOINCODE",    rtn[0]);
        		this.ds_OSPInspDefect.setColumn(nRow, "JOINNAME",    rtn[1]);
        		this.ds_OSPInspDefect.setColumn(nRow, "DEFECTCODE",  rtn[2]);
                this.ds_OSPInspDefect.setColumn(nRow, "QCSEGMENTID", rtn[3]);
        		this.ds_OSPInspDefect.set_enableevent(true);
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
            //콤보에 셋팅될 정보 조회
        	this.fn_searchComboItem();

        	this.fn_setReadonly();

        	//Lot정보 조회
        	this.fn_searchLotInfoByLotIDOSP();

        	//20210818 메뉴권한정보에 등록,수정,삭제 권한이 없을 경우 버튼 비활성화
        	if ( this.INS_AUTH_YN == "0" && this.UPD_AUTH_YN == "0" && this.DEL_AUTH_YN == "0") {
        		this.btn_save.set_enable(false);
        		this.tab_result.Tabpage1.form.btn_addRowOSPInspectionExterior.set_visible(false);
        		this.tab_result.Tabpage1.form.btn_delRowOSPInspectionExterior.set_visible(false);
        		this.tab_result.Tabpage1.form.btn_addImgOSPInspectionExterior.set_visible(false);
        		this.tab_result.Tabpage1.form.grd_OSPInspectionExterior.set_readonly(false);
        		this.tab_result.Tabpage2.form.btn_addRowOSPMeasureByInspItem.set_visible(false);
        		this.tab_result.Tabpage2.form.btn_delRowOSPMeasureByInspItem.set_visible(false);
        		this.tab_result.Tabpage2.form.btn_addImgOSPInspectionMeasure.set_visible(false);
        		this.tab_result.Tabpage3.form.btn_addRowOSPInspDefect.set_visible(false);
        		this.tab_result.Tabpage3.form.btn_delRowOSPInspDefect.set_visible(false);
        		this.tab_result.Tabpage3.form.btn_addImgOSPInspDefect.set_visible(false);
        	}
        };

        /*
         * 기능 : 의뢰일자 셋팅
         */
        this.fn_setSearchDate = function (periodType)
        {
        	this.tab_search.Tab1.form.cal_requestDateF.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
         	this.tab_search.Tab1.form.cal_requestDateT.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        };

        /*
         * 기능 : 로딩시 화면컨트롤
         */
        this.fn_setInitialControl = function ()
        {
            this.parentLotId = this.ds_parentLot.getColumn(0, "LOTID");
        	this.parentPanelPerQty = nexacro.toNumber(this.ds_parentLot.getColumn(0, "PANELPERQTY"));
        	this.parentProcessRelNo = this.ds_parentLot.getColumn(0, "LOTHISTKEY") + this.ds_parentLot.getColumn(0, "DEGREE");
        	this.g_lotPcsQty = nexacro.toNumber(this.ds_lotInfoByLotIDOSP.getColumn(0, "PCSQTY"));

        	this.div_subSearch.form.edt_lotNo.set_value(this.parentLotId);
        	this.div_inspect.form.cbo_processingStatus.set_value(this.ds_parentLot.getColumn(0, "RESULTITEM"));
        	this.div_inspect.form.cal_inspectDate.set_value(this.ds_parentLot.getColumn(0, "INSPECTIONDATE"));
        	this.div_inspect.form.edt_inspUser_id.set_value(this.ds_parentLot.getColumn(0, "INSPECTIONUSER"));
        	this.div_inspect.form.edt_inspUser.set_value(this.ds_parentLot.getColumn(0, "INSPECTIONUSERNM"));
        	this.div_inspect.form.edt_degree.set_value(this.ds_parentLot.getColumn(0, "DEGREE"));
        	this.div_handOver.form.rdo_handOver.set_value(this.ds_parentLot.getColumn(0, "ISSEND"));
        	this.div_handOver.form.edt_area_id.set_value(this.ds_parentLot.getColumn(0, "TRANSITAREID"));
        	this.div_handOver.form.edt_area.set_value(this.ds_parentLot.getColumn(0, "TRANSITAREANAME"));

        	if (this.nfn_isNull(this.ds_parentLot.getColumn(0, "TXNHISTKEY")))
        	{
        		this.jobType = "insertData";
        		this.div_inspect.form.edt_inspUser_id.set_value(this.gf_getUserId());
        		this.div_inspect.form.edt_inspUser.set_value(this.gf_getUserNm());
        		this.div_inspect.form.edt_inspResult.set_value("OK");

        		//값미존재시 NCR
        		if (this.ds_AQLBasisInfo.getRowCount() == 0)
        		{
        			var nRow = this.ds_AQLBasisInfo.addRow();
        			this.ds_AQLBasisInfo.setColumn(nRow, "DECISIONTYPE", "NCR");
        		}

        		if (this.ds_AQLBasisInfo.getColumn(0, "DECISIONTYPE") == "ALL" || this.ds_AQLBasisInfo.getColumn(0, "DECISIONTYPE") == "NCR")
        		{
        			//20210609 기본값 AQL=>NCR
        			this.tab_result.Tabpage1.form.cbo_inspectionDecisionClass.set_value("NCR");
        			var inspectionQty = this.ds_AQLBasisInfo.getColumn(0, "NCRINSPECTIONQTY");
        			this.tab_result.Tabpage1.form.msk_AQLInspectionQty.set_value(inspectionQty);
        			this.tab_result.Tabpage1.form.msk_AQLInspectionQty.set_enable(true);
        			this.tab_result.Tabpage1.form.msk_AQLInspectionQty.set_readonly(false);
        		}
        		else
        		{
        			this.tab_result.Tabpage1.form.cbo_inspectionDecisionClass.set_value(this.ds_AQLBasisInfo.getColumn(0, "DECISIONTYPE"));
        			this.tab_result.Tabpage1.form.cbo_inspectionDecisionClass.set_enable(false);
        			this.tab_result.Tabpage1.form.msk_AQLInspectionQty.set_enable(false);
        			this.tab_result.Tabpage1.form.msk_AQLInspectionQty.set_readonly(true);
        		}

        		//탭1. 외관검사 초기화
        		this.fn_setOSPInspectionExterior();

        		this.tab_result.Tabpage2.form.btn_addRowOSPMeasureByInspItem.set_visible(true);
        		this.tab_result.Tabpage2.form.btn_delRowOSPMeasureByInspItem.set_visible(true);
        		this.tab_result.Tabpage2.form.btn_addImgOSPInspectionMeasure.set_visible(true);
        		this.tab_result.Tabpage2.form.grd_OSPInspectionMeasure.set_readonly(false);
        		this.tab_result.Tabpage2.form.grd_OSPMeasureByInspItem.set_readonly(false);

        		this.tab_result.Tabpage3.form.btn_addRowOSPInspDefect.set_visible(true);
        		this.tab_result.Tabpage3.form.btn_delRowOSPInspDefect.set_visible(true);
        		this.tab_result.Tabpage3.form.btn_addImgOSPInspDefect.set_visible(true);
        		this.tab_result.Tabpage3.form.grd_OSPInspDefect.set_readonly(false);

        		//2021.07.13 TOBE Add 설비
        		this.tab_result.Tabpage2.form.cbo_equipmentid.set_visible(true);
        		this.tab_result.Tabpage2.form.edt_equipmentid.set_visible(false);

        	}
        	else
        	{
        		this.jobType = "updateData";
        		this.tab_result.Tabpage1.form.cbo_inspectionDecisionClass.set_value(this.ds_parentLot.getColumn(0, "JUDGMENTCRITERIA"));
        		this.div_inspect.form.edt_inspResult.set_value(this.ds_parentLot.getColumn(0, "INSPECTIONRESULT"));

        		//탭1. 외관검사 초기화
        		this.fn_setOSPInspectionExterior();

        		this.tab_result.Tabpage2.form.btn_addRowOSPMeasureByInspItem.set_visible(false);
        		this.tab_result.Tabpage2.form.btn_delRowOSPMeasureByInspItem.set_visible(false);
        		this.tab_result.Tabpage2.form.btn_addImgOSPInspectionMeasure.set_visible(false);
        		this.tab_result.Tabpage2.form.grd_OSPInspectionMeasure.set_readonly(true);
        		this.tab_result.Tabpage2.form.grd_OSPMeasureByInspItem.set_readonly(true);

        		this.tab_result.Tabpage3.form.btn_addRowOSPInspDefect.set_visible(false);
        		this.tab_result.Tabpage3.form.btn_delRowOSPInspDefect.set_visible(false);
        		this.tab_result.Tabpage3.form.btn_addImgOSPInspDefect.set_visible(false);
        		this.tab_result.Tabpage3.form.grd_OSPInspDefect.set_readonly(true);

        		//20210609 TOBE Add 사용자 입력값으로 변경되면서 조회시에 그 값이 셋팅되어야 함
        		this.tab_result.Tabpage1.form.msk_AQLInspectionQty.set_value(this.ds_parentLot.getColumn(0, "INSPECTIONQTY"));

        		//20210625 TOBE Add 측정항목 등록자 추가
        		this.tab_result.Tabpage2.form.edt_measureUser.set_readonly(true);
        		this.tab_result.Tabpage2.form.btn_measureUser.set_enable(false);
        		this.tab_result.Tabpage2.form.edt_measureUser.set_value(this.ds_parentLot.getColumn(0, "MEASUREUSERNM"));

        		//2021.07.13 TOBE Add 설비
        		this.tab_result.Tabpage2.form.cbo_equipmentid.set_visible(false);
        		this.tab_result.Tabpage2.form.edt_equipmentid.set_visible(true);
        		this.tab_result.Tabpage2.form.edt_equipmentid.set_value(this.ds_parentLot.getColumn(0, "EQUIPMENTID"));
        	}

        	//
        	this.fn_setReadonly();

        	if (this.ds_parentLot.getColumn(0, "ISMODIFY") != "Y")
        	{
        		this.btn_save.set_enable(false);
        	};

        	if (this.ds_processDefTypeByProcess.getRowCount() > 0) //마지막 재작업인지  아닌지 판단
        	{
        		this.processDefType = this.ds_processDefTypeByProcess.getColumn(0, "PROCESSDEFTYPE");
        		this.lastRework = this.ds_processDefTypeByProcess.getColumn(0, "LASTREWORK");
        	}

        	if (this.ds_lotInfoByLotIDOSP.getRowCount() < 1)
        	{
        		// TODO : Inner Join 조건 확인(존재하지만 공정이 없는 LOT도 조회 안됨)
        		// 해당 Lot이 존재하지 않습니다. {0}
        		this.gfn_Message("NotExistLot", this.div_subSearch.form.edt_lotNo.value, "warning", "ok");
        		return;
        	}
        };


        /*
         * 기능 : type 에따라 컨트롤 readOnly처리 함수
         */
        this.fn_setReadonly = function ()
        {
            if (this.jobType == "updateData")
        	{
        		this.div_inspect.form.cbo_processingStatus.set_readonly(true);
        		this.div_handOver.form.rdo_handOver.set_readonly(true);
        		this.div_handOver.form.edt_area.set_readonly(true);
        		this.div_handOver.form.btn_area.set_enable(false);
        		this.tab_result.Tabpage1.form.cbo_inspectionDecisionClass.set_readonly(true);
        	}
        };

        /*
         * 기능 : 탭1. 외관검사 초기화
         */
        this.fn_setOSPInspectionExterior = function ()
        {
        	if (this.jobType == "insertData")
        	{
        		this.tab_result.Tabpage1.form.btn_addRowOSPInspectionExterior.set_visible(true);
        		this.tab_result.Tabpage1.form.btn_delRowOSPInspectionExterior.set_visible(true);
        		this.tab_result.Tabpage1.form.btn_addImgOSPInspectionExterior.set_visible(true);
        		this.tab_result.Tabpage1.form.grd_OSPInspectionExterior.set_readonly(false);
        	}
        	else
        	{
        		this.tab_result.Tabpage1.form.btn_addRowOSPInspectionExterior.set_visible(false);
        		this.tab_result.Tabpage1.form.btn_delRowOSPInspectionExterior.set_visible(false);
        		this.tab_result.Tabpage1.form.btn_addImgOSPInspectionExterior.set_visible(false);
        		this.tab_result.Tabpage1.form.grd_OSPInspectionExterior.set_readonly(true);
        	}

        	//검사수량 PCS
        	var cellIdx = this.tab_result.Tabpage1.form.grd_OSPInspectionExterior.getBindCellIndex("body", "INSPECTIONQTY");
        	this.tab_result.Tabpage1.form.grd_OSPInspectionExterior.setCellProperty("body", cellIdx, "edittype", "none");

        	//검사수량PNL
        	var cellIdx = this.tab_result.Tabpage1.form.grd_OSPInspectionExterior.getBindCellIndex("body", "INSPECTIONQTYPNL");
        	this.tab_result.Tabpage1.form.grd_OSPInspectionExterior.setCellProperty("body", cellIdx, "edittype", "none");
        };


        /*++++++++++++++++++++++++++++++++++++++++++++++++ Search Event Start ++++++++++++++++++++++++++++++++++++++++++++++++*/
        /*
         * 기능 : 조회조건 셋팅
         */
        this.fn_setSearchParam = function (pSearchType)
        {
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();

        	this.ds_search.setColumn(nRow, "LANGUAGETYPE",          this.lang);
        	this.ds_search.setColumn(nRow, "ENTERPRISEID",          this.enterpriseId);
        	this.ds_search.setColumn(nRow, "PLANTID",               this.ds_parentLot.getColumn(0, "PLANTID"));
        	this.ds_search.setColumn(nRow, "RESOURCEID",            this.ds_parentLot.getColumn(0, "LOTID"));
        	this.ds_search.setColumn(nRow, "RESOURCETYPE",          this.resourceType);
        	this.ds_search.setColumn(nRow, "PROCESSRELNO",          this.parentProcessRelNo);

        	//조회 후 화면에서 강제 변경하는걸 조회시 가져오기 위해 넘김--쿼리문에서 수행
        	//this.ds_search.setColumn(i, "JUDGMENTCRITERIA",      this.ds_parentLot.getColumn(0, "JUDGMENTCRITERIA"));

        	if (pSearchType == "OnSearch")
        	{
        		this.ds_search.setColumn(nRow, "RELRESOURCEID",         this.ds_parentLot.getColumn(0, "RESULTPRODUCTDEFID"));
        		this.ds_search.setColumn(nRow, "RELRESOURCEVERSION",    this.ds_parentLot.getColumn(0, "RESULTPRODUCTDEFVERSION"));
                this.ds_search.setColumn(nRow, "INSPECTIONCLASSID",     "OSPInspection");

        		//측정검사 검사항목 가져오기위한 파라미터
        		this.ds_search.setColumn(nRow, "PROCESSSEGMENTID",      this.ds_parentLot.getColumn(0, "RESULTPROCESSSEGMENTID"));
        		this.ds_search.setColumn(nRow, "PROCESSSEGMENTVERSION", this.ds_parentLot.getColumn(0, "RESULTPROCESSSEGMENTVERSION"));
        	}
        	else  //판정기준 변경시 조회 파라미터
        	{
        		this.ds_search.setColumn(nRow, "RELRESOURCEID",         this.ds_parentLot.getColumn(0, "PRODUCTDEFID"));
        		this.ds_search.setColumn(nRow, "RELRESOURCEVERSION",    this.ds_parentLot.getColumn(0, "PRODUCTDEFVERSION"));
        		this.ds_search.setColumn(nRow, "RELRESOURCETYPE",       "Product");
        		this.ds_search.setColumn(nRow, "INSPECTIONCLASSID",     "OSPInspection");

        		//측정검사 검사항목 가져오기위한 파라미터
        		this.ds_search.setColumn(nRow, "PROCESSSEGMENTID",      this.ds_parentLot.getColumn(0, "PROCESSSEGMENTID"));
        		this.ds_search.setColumn(nRow, "PROCESSSEGMENTVERSION", this.ds_parentLot.getColumn(0, "PROCESSSEGMENTVERSION"));
        	}

        	this.ds_search.setColumn(nRow, "RESULTTXNHISTKEY",      this.ds_parentLot.getColumn(0, "TXNHISTKEY"));
        	this.ds_search.setColumn(nRow, "RESULTTXNGROUPHISTKEY", this.ds_parentLot.getColumn(0, "TXNGROUPHISTKEY"));

        	//측정검사
        	this.ds_search.setColumn(nRow, "MEASURE_INSPECTIONCLASSID", "OperationInspection");
        };

        /*
         * 기능: 콤보에 셋팅될 정보 조회
         */
        this.fn_searchComboItem = function ()
        {
        	this.ds_isHandOverProcess.clearData();          //인계처리여부
            this.ds_defectReasonConsumable.clearData();     //불량(폐기)처리 - 원인 LOTID

            var sSvcID        = "selectComboItemLIst";
            var sController   = "/qam00600/selectComboItemLIst.do";
            var sInDatasets   = "";
        	var sOutDatasets  = "ds_isHandOverProcess=output1 ds_defectReasonConsumable=output2";
            var sArgs         = "";
        		sArgs        += this.gfn_setParam("LANGUAGETYPE",  this.lang);
        		sArgs        += this.gfn_setParam("LOTID",         this.ds_parentLot.getColumn(0, "LOTID")); //this.parent.lotId
        		sArgs        += this.gfn_setParam("LOOKUP_TYPE",   "IsHandOverProcess"); //
        		sArgs        += this.gfn_setParam("ENABLE_FLAG",   "Y");
        		sArgs        += this.gfn_setParam("VERSION",       "10002");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false,"");
        };

        /*
         * 기능: 부모창의 LOT정보, Lot정보 조회
         */
        this.fn_searchLotInfoByLotIDOSP = function ()
        {
        	this.ds_processDefTypeByProcess.clearData();  //마지막 처리여부
            this.ds_lotInfoByLotIDOSP.clearData();        //Lot정보
        	this.ds_AQLBasisInfo.clearData();
        	this.ds_equipmentList.clearData();

            var sSvcID        = "selectLotInfoByLotIDOSP";
            var sController   = "/qam00600/selectLotInfoByLotIDOSP.do";
            var sInDatasets   = "";
        	var sOutDatasets  = "ds_processDefTypeByProcess=output1 ds_lotInfoByLotIDOSP=output2 ds_AQLBasisInfo=output3 ds_equipmentList=output4";
            var sArgs         = "";
            	sArgs        += this.gfn_setParam("ENTERPRISEID",      this.enterpriseId);
        		sArgs        += this.gfn_setParam("PLANTID",           this.plantId);
        		sArgs        += this.gfn_setParam("LANGUAGETYPE",      this.lang);
        		sArgs        += this.gfn_setParam("P_USERID",          this.userId);
                sArgs        += this.gfn_setParam("RESOURCETYPE",      this.resourceType); //Site
        		sArgs        += this.gfn_setParam("LOTID",             this.ds_parentLot.getColumn(0, "LOTID"));
        		sArgs        += this.gfn_setParam("LOTHISTKEY",        this.ds_parentLot.getColumn(0, "LOTHISTKEY"));
        		sArgs        += this.gfn_setParam("DEGREE",            this.ds_parentLot.getColumn(0, "DEGREE")); //차수
        		sArgs        += this.gfn_setParam("INSPECTIONCLASSID", "OSPInspection");
        		sArgs        += this.gfn_setParam("EQUIPMENTID",       this.ds_parentLot.getColumn(0, "EQUIPMENTID")); //설비
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능: 탭 조회
         */
        this.fn_searchTabAll = function (pSearchType)
        {
            this.firstCall = false;
        	this.ds_OSPInspectionExterior.clearData();
            this.ds_OSPInspectionMeasure.clearData();
        	this.ds_OSPMeasureByInspItem.clearData();
        	this.ds_OSPInspDefect.clearData();

        	//조회조건셋팅
        	this.fn_setSearchParam(pSearchType);

            var sSvcID        = "selectOSPInspectionAll";
            var sController   = "/qam00600/selectOSPInspectionAll.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_OSPInspectionExterior=output1 ds_OSPInspectionMeasure=output2 ds_OSPMeasureByInspItem=output3 ds_OSPInspDefect=output4";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능: 탭1. 외관검사 조회
         */
        this.fn_searchOSPInspectionExterior = function (pSearchType)
        {
            this.ds_OSPInspectionExterior.clearData();

        	//조회조건셋팅
        	this.fn_setSearchParam(pSearchType);

            var sSvcID        = "selectOSPInspectionExterior";
            var sController   = "/qam00600/selectOSPInspectionExterior.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_OSPInspectionExterior=output";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*+++++++++++++++++++++++++++++++++++++++++++++++++ Search Event End +++++++++++++++++++++++++++++++++++++++++++++++++*/

        /*
         * 기능 : 검사 결과에 따라 전체 결과 자동 판정하는 이벤트(AllResult_CellValueChanged)
         */
        this.fn_inspectionResultCheck = function (pDataset, pInspectionResult)
        {
        	if (pInspectionResult == "NG" || this.nfn_isNull(this.div_inspect.form.edt_inspResult.value))
        	{//판정결과 NG일때 -> NG
        		this.div_inspect.form.edt_inspResult.set_value(pInspectionResult);
        	}
        	else
        	{//판정결과 OK일때

        		//이전 검사 들로 인한 전체 판정 결과
        		var result = this.div_inspect.form.edt_inspResult.value;

        		if (result == "NG") //이전 검사 결과 NG일경우
        		{
        			var NGCount = 0;
        			NGCount = this.ds_OSPInspectionExterior.getCaseCount("INSPECTIONRESULT == 'NG'");

        			if (NGCount == 0)
        			{
        				//외관검사 결과 NGCount 일때 -> 측정검사 확인
        				NGCount = this.ds_OSPInspectionMeasure.getCaseCount("INSPECTIONRESULT == 'NG'");

        				if (NGCount == 0)
        				{
        					this.div_inspect.form.edt_inspResult.set_value(pInspectionResult);
        				}
        				else
        				{
        					this.div_inspect.form.edt_inspResult.set_value("NG");
        				}
        			}
        			else
        			{
        				this.div_inspect.form.edt_inspResult.set_value("NG");
        			}
        		}
        		else
        		{//이전 검사 결과 없거나 OK 일경우 -> OK
        			this.div_inspect.form.edt_inspResult.set_value(pInspectionResult);
        		}
        	}
        };

        /*
         *  기능 : 결과 NG일때 인계처리(Locking여부에따라), 입고의뢰 취소만 선택가능
         */
        // this.fn_checkFinalInspResult = function(pFinalResult)
        // {
        // 	if (pFinalResult == "NG" && this.div_handOver.form.rdo_handOver.value != "ReceivingCancel")
        // 	{
        // 		this.div_handOver.form.rdo_handOver.set_value("ReceivingCancel"); //입고의뢰취소
        // 		this.div_handOver.form.edt_area.set_enable(false);
        // 		this.div_handOver.form.btn_area.set_enable(false);
        // 		this.div_handOver.form.edt_area_id.set_value("");
        // 		this.div_handOver.form.edt_area.set_value("");
        // 		this.div_handOver.form.edt_resource_id.set_value("");
        //
        // 		this.gfn_Message("ResultNGCantProcessOSP", null, "warning", "ok");//검사 결과가 NG인 경우 입고의뢰 취소만 할 수 있습니다.
        // 		return false;
        // 	}
        // 	return true;
        // };
        this.fn_checkFinalInspResult = function(pFinalResult)
        {
        	/*20210621 TOBE Modify
        	  판정결과가 NG일 경우 조치등급에 따라 Locking 되므로, Locking이 되지않는 조치등급에서는 인계처리가 선택되도록 수정*/
        	var isLocking = "N";

            if (pFinalResult == "NG")
        	{
        		var count = 0;
        		var strQcgrade = "";
        		for(var i=0; i<this.ds_OSPInspectionExterior.rowcount; i++){
        			var code = this.ds_OSPInspectionExterior.getColumn(i,"QCGRADE");
        			count = count+1;
        			if (count == 1) strQcgrade = code;
        			else strQcgrade = strQcgrade+","+code;
        		}

        		for(var i=0; i<this.ds_OSPMeasureByInspItem.rowcount; i++){
        			var code = this.ds_OSPMeasureByInspItem.getColumn(i,"QCGRADE");
        			count = count+1;
        			if (count == 1) strQcgrade = code;
        			else strQcgrade = strQcgrade+","+code;
        		}

        		this.ds_return.clearData();
        		var sSvcID        = "selectIsLocking";
        		var sController   = "/qam00600/selectIsLockingInfo.do";
        		var sInDatasets   = "";
        		var sOutDatasets  = "ds_return=output";
        		var sArgs         = "";
        			sArgs        += this.gfn_setParam("ENTERPRISEID",   this.gf_getEnterpriseId()); //
        			sArgs        += this.gfn_setParam("PLANTID",        this.gf_getSiteType() ); //
        			sArgs        += this.gfn_setParam("QCGRADE",        strQcgrade); //
        			sArgs        += this.gfn_setParam("VALIDSTATE",     "Valid"); //
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");

        		if (this.ds_return.rowcount > 0 )
        		{
        			isLocking = this.ds_return.getColumn(0, "ISLOCKING");
        		}
        	}
        	if (isLocking == "N")
        	{
        		if (pFinalResult == "NG" && this.div_handOver.form.rdo_handOver.value == "HandOverProcessNon")
        		{
        			this.div_handOver.form.rdo_handOver.set_value("ReceivingCancel"); //입고의뢰취소
        			this.div_handOver.form.edt_area.set_enable(false);
        			this.div_handOver.form.btn_area.set_enable(false);
        			this.div_handOver.form.edt_area_id.set_value("");
        			this.div_handOver.form.edt_area.set_value("");
        			this.div_handOver.form.edt_resource_id.set_value("");

        			this.gfn_Message("ResultNGCantProcessOSPMulti", null, "warning", "ok");//검사 결과가 NG인 경우 인계처리, 입고의뢰 취소만 할 수 있습니다.
        			return false;
        		}
        	}
        	else
        	{
        		if (pFinalResult == "NG" && this.div_handOver.form.rdo_handOver.value != "ReceivingCancel")
        		{
        			this.div_handOver.form.rdo_handOver.set_value("ReceivingCancel"); //입고의뢰취소
        			this.div_handOver.form.edt_area.set_enable(false);
        			this.div_handOver.form.btn_area.set_enable(false);
        			this.div_handOver.form.edt_area_id.set_value("");
        			this.div_handOver.form.edt_area.set_value("");
        			this.div_handOver.form.edt_resource_id.set_value("");

        			this.gfn_Message("ResultNGCantProcessOSP", null, "warning", "ok");//검사 결과가 NG인 경우 입고의뢰 취소만 할 수 있습니다.
        			return false;
        		}
        	}
        	return true;
        };

        /*
         * 모든 검사 결과를 입력 했는지, 사진을 첨부했는지 확인하는 함수
         */
        this.fn_checkAllResultAndImageInput = function (pGrid, isCheckQTY)
        {
            if (this.nfn_isNull(isCheckQTY))
            {
                isCheckQTY == false;
            }

            var  inputAllResult = true;
            this.g_hasImage = true;

        	var objDataset = pGrid.getBindDataset();

            for(var i=0; i < objDataset.getRowCount(); i++)
            {
                if (objDataset.getRowType(i) == 2 || objDataset.getRowType(i) == 4)
                {
                    var inspectionResult = objDataset.getColumn(i, "INSPECTIONRESULT");
                    if (this.nfn_isNull(inspectionResult) || (isCheckQTY == true && this.nfn_isNull(objDataset.getColumn(i, "INSPECTIONQTY"))))
                    {
                        inputAllResult = false;
                        break;
                    }

                    if (inspectionResult == "NG")
                    {
                        var filepath1 = objDataset.getColumn(i, "ATCH_FILE_GUID1");
                        var filepath2 = objDataset.getColumn(i, "ATCH_FILE_GUID2");
                        if (this.nfn_isNull(filepath1) && this.nfn_isNull(filepath2))
                        {
                            inputAllResult = false;
                            this.g_hasImage = false;
                            break;
                        }
                    }
        		} // if getRowType
            }//for

            return inputAllResult;
        };

        /*
         *bas_inspectionresult에 insert할 테이블 생성 함수
         */
        this.fn_getInspectionResultTableToInsert = function(pParentLotDataset, measureDataset)
        {
        	this.ds_inspectionResultInfo.clearData();
        	var inspectionDecisionClass = this.tab_result.Tabpage1.form.cbo_inspectionDecisionClass.value;
        	var priotiryQCGrade = "";
        	if (this.ds_OSPInspectionExterior.getRowCountNF()>0 || measureDataset.getRowCountNF()>0)
        	{
        		priotiryQCGrade = this.qfn_getPriorityQCGradeOSP(this.tab_result.Tabpage1.form.grd_OSPInspectionExterior, measureDataset, inspectionDecisionClass);
        	}

            //20210609 TOBE Modify 입력받은 값으로 셋팅
        	//var avgInspectionQty = nexacro.toNumber(this.ds_OSPInspectionExterior.getAvg("INSPECTIONQTY"), 0);
        	var avgInspectionQty =0;

        	if (this.tab_result.Tabpage1.form.cbo_inspectionDecisionClass.value  == "AQL")
        	{
        		avgInspectionQty = this.tab_result.Tabpage1.form.msk_AQLInspectionQty.value;
        	}
        	else
        	{
        		var inspPanel = this.tab_result.Tabpage1.form.msk_AQLInspectionQty.value;
        		var inspectionQty = nexacro.toNumber(this.parentPanelPerQty) == 0 ? 0: nexacro.ceil(inspPanel* nexacro.toNumber(this.parentPanelPerQty));
        		avgInspectionQty = inspectionQty;
        	}

        	var sumDefectQty	= this.ds_OSPInspDefect.getSum("DEFECTQTY");
        	var sumDefectQtyPnl = this.ds_OSPInspDefect.getSum("DEFECTQTYPNL");

            this.ds_inspectionResultInfo.insertRow(0);
            this.ds_inspectionResultInfo.setColumn(0, "TXNHISTKEY",            pParentLotDataset.getColumn(0, "TXNHISTKEY"));//검사정보
            this.ds_inspectionResultInfo.setColumn(0, "RESOURCETYPE",          this.resourceType);
            this.ds_inspectionResultInfo.setColumn(0, "RESOURCEID",            pParentLotDataset.getColumn(0, "LOTID"));
            this.ds_inspectionResultInfo.setColumn(0, "LOTHISTKEY",            pParentLotDataset.getColumn(0, "LOTHISTKEY"));//Lot
            this.ds_inspectionResultInfo.setColumn(0, "PROCESSRELNO",          this.parentProcessRelNo);
            this.ds_inspectionResultInfo.setColumn(0, "ENTERPRISEID",          this.enterpriseId);
            this.ds_inspectionResultInfo.setColumn(0, "PLANTID",               this.plantId);
            this.ds_inspectionResultInfo.setColumn(0, "TORESOURCEID",          this.div_handOver.form.edt_resource_id.value);
            this.ds_inspectionResultInfo.setColumn(0, "AREAID",                this.div_handOver.form.edt_area_id.value);
            this.ds_inspectionResultInfo.setColumn(0, "PRODUCTDEFID",          pParentLotDataset.getColumn(0, "PRODUCTDEFID"));
            this.ds_inspectionResultInfo.setColumn(0, "PRODUCTDEFVERSION",     pParentLotDataset.getColumn(0, "PRODUCTDEFVERSION"));
            this.ds_inspectionResultInfo.setColumn(0, "PROCESSSEGMENTID",      pParentLotDataset.getColumn(0, "PROCESSSEGMENTID"));
            this.ds_inspectionResultInfo.setColumn(0, "PROCESSSEGMENTVERSION", pParentLotDataset.getColumn(0, "PROCESSSEGMENTVERSION"));
            this.ds_inspectionResultInfo.setColumn(0, "USERSEQUENCE",          pParentLotDataset.getColumn(0, "USERSEQUENCE"));
            this.ds_inspectionResultInfo.setColumn(0, "INSPECTIONDATE",        this.div_inspect.form.cal_inspectDate.value);
        	this.ds_inspectionResultInfo.setColumn(0, "INSPECTIONUSER",        this.div_inspect.form.edt_inspUser_id.value);
            this.ds_inspectionResultInfo.setColumn(0, "INSPECTIONRESULT",      this.div_inspect.form.edt_inspResult.value);
            this.ds_inspectionResultInfo.setColumn(0, "ISSEND",                this.div_handOver.form.rdo_handOver.value);
            this.ds_inspectionResultInfo.setColumn(0, "DEGREE",                pParentLotDataset.getColumn(0, "DEGREE"));
            this.ds_inspectionResultInfo.setColumn(0, "REASONCODEID",          "LockProcessNonconfirm");
            this.ds_inspectionResultInfo.setColumn(0, "RESULTITEM",            this.div_inspect.form.cbo_processingStatus.value);
            this.ds_inspectionResultInfo.setColumn(0, "DEFECTQTYSUM",          sumDefectQty);
            this.ds_inspectionResultInfo.setColumn(0, "DEFECTQTYSUMPNL",       sumDefectQtyPnl);
            this.ds_inspectionResultInfo.setColumn(0, "ISLOCKING",             this.g_isLocking);
            this.ds_inspectionResultInfo.setColumn(0, "STATE",                 "added");
            this.ds_inspectionResultInfo.setColumn(0, "INSPECTIONQTY",         avgInspectionQty);
            this.ds_inspectionResultInfo.setColumn(0, "JUDGMENTCRITERIA",      this.tab_result.Tabpage1.form.cbo_inspectionDecisionClass.value);
            this.ds_inspectionResultInfo.setColumn(0, "PROCESSDEFID",          pParentLotDataset.getColumn(0, "PROCESSDEFID"));
            this.ds_inspectionResultInfo.setColumn(0, "PROCESSDEFVERSION",     pParentLotDataset.getColumn(0, "PROCESSDEFVERSION"));
            this.ds_inspectionResultInfo.setColumn(0, "WORKCOUNT",             pParentLotDataset.getColumn(0, "WORKCOUNT"));
            this.ds_inspectionResultInfo.setColumn(0, "INSPECTIONCLASSID",     "OSPInspection");
            this.ds_inspectionResultInfo.setColumn(0, "QCGRADE",               priotiryQCGrade);
        	this.ds_inspectionResultInfo.setColumn(0, "EQUIPMENTID",	       this.tab_result.Tabpage2.form.cbo_equipmentid.value);

        	//20210625 측정검사 데이터가 존재시 품질규격 등록자를 검사자와 동일하게 setting
        	if (this.ds_OSPMeasureByInspItem.getRowCount() > 0)
        	{
        		this.ds_inspectionResultInfo.setColumn(0, "MEASUREUSER",           this.div_inspect.form.edt_inspUser_id.value);
        	}
        };

        /*
         *bas_inspectionresult에 update할 데이터
         */
        this.fn_getInspectionResultTableToUpdate = function (pParentLotDataset)
        {
            this.ds_inspectionResultInfo.clearData();
        	this.ds_inspectionResultInfo.insertRow(0);
        	this.ds_inspectionResultInfo.setColumn(0, "TXNHISTKEY",            pParentLotDataset.getColumn(0, "TXNHISTKEY"));//검사정보
            this.ds_inspectionResultInfo.setColumn(0, "RESOURCETYPE",          this.resourceType);
            this.ds_inspectionResultInfo.setColumn(0, "RESOURCEID",            pParentLotDataset.getColumn(0, "LOTID"));
            this.ds_inspectionResultInfo.setColumn(0, "PROCESSRELNO",          pParentLotDataset.getColumn(0, "PROCESSRELNO"));
            this.ds_inspectionResultInfo.setColumn(0, "INSPECTIONUSER",        this.div_inspect.form.edt_inspUser_id.value);

            if (this.ds_parentLot.getColumn(0,"INSPECTIONUSER") == this.div_inspect.form.edt_inspUser_id.value)
            {
                this.ds_inspectionResultInfo.setColumn(0, "STATE", "unchanged");
            }
            else
            {
                this.ds_inspectionResultInfo.setColumn(0, "STATE", "modified");
            }
        };

        /// 저장 할 데이터가 있는지 체크하는 함수
        this.fn_checkChanged = function(pState)
        {
        	if (pState == "unchanged")
        	{
        		// 저장할 데이터가 존재하지 않습니다.
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return false;
        	}
        };



        /************************************************* Tabpage1 Function Start *************************************************/
        /*
         * 기능 : 탭1. 외관검사 - 판정 기준이 AQL일때 화면에 보여지는 값 변경
         */
        this.fn_setAQLQty = function (pDataset)
        {
        	var insplevel = 0;
        	var defectlevel = 0;
        	var lotPcsQty = 0;
        	if (pDataset.getRowCount() > 0)
        	{
        		insplevel = pDataset.getColumn(0, "AQLINSPECTIONLEVEL");
        		defectlevel = pDataset.getColumn(0, "AQLDEFECTLEVEL");
        		lotPcsQty = this.ds_lotInfoByLotIDOSP.getColumn(0, "PCSQTY");
        	}
        	else
        	{
        		insplevel = this.ds_AQLBasisInfo.getColumn(0, "AQLINSPECTIONLEVEL");
        		defectlevel = this.ds_AQLBasisInfo.getColumn(0, "AQLDEFECTLEVEL");
        		lotPcsQty = this.ds_lotInfoByLotIDOSP.getColumn(0, "PCSQTY");
        	}

            //20210609 TOBE Modify 검사기준을 공정검사기준정보를 바라보도록 수정
        	if (this.nfn_isNull(insplevel) || this.nfn_isNull(defectlevel) || this.nfn_isNull(lotPcsQty))
        	{
        		this.gfn_Message("NoStandardData", null, "warning", "ok");//판정 기준이 없습니다.
        		return false;
        	}

            this.ds_AQLCheckBasis.clearData();

            var sSvcID        = "selectAQLCheckBasisInfo";
            var sController   = "/qam00600/selectAQLCheckBasisInfo.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_AQLCheckBasis=output";
            var sArgs         = "";
        		sArgs        += this.gfn_setParam("INSPECTIONLEVEL",  insplevel); //
        		sArgs        += this.gfn_setParam("LOTQTY",           lotPcsQty);
        		sArgs        += this.gfn_setParam("DEFECTLEVEL",      defectlevel);

            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false,"");

        	if (this.ds_AQLCheckBasis.getRowCount() > 0)
        	{
        		var aqlSize = 0;
        		aqlSize = this.ds_AQLCheckBasis.getColumn(0, "AQLSIZE");

        		//조회 파라미터 INSPECTIONLEVEL와 동일한 값
        		var aqlInspectionLevel = this.ds_AQLCheckBasis.getColumn(0, "SIZECODE");

        		this.tab_result.Tabpage1.form.msk_AQLInspectionQty.set_value(aqlSize);
        		this.tab_result.Tabpage1.form.edt_AQLInspectionLevel.set_value(aqlInspectionLevel);

        		for (var i=0; i < this.ds_OSPInspectionExterior.getRowCount(); i++)
        		{
        			var panelPerQty = nexacro.toNumber(this.ds_lotInfoByLotIDOSP.getColumn(0, "PANELPERQTY"));
        			var inspectionQty = panelPerQty == 0 ? 0: nexacro.ceil(aqlSize/ panelPerQty);

        			this.ds_OSPInspectionExterior.setColumn(i, "INSPECTIONQTY", aqlSize);
        			this.ds_OSPInspectionExterior.setColumn(i, "INSPECTIONQTYPNL", inspectionQty);
        		}
        	}
        };


        /************************************************** Tabpage1 Function End **************************************************/



        /*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Tabpage2 Function Start @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
        /*
         * 기능 : 탭2. 측정검사 - 측정값 -입력된 값이 spec값을 벗어나지 않았는지 체크하여 결과를 return 하는 함수
         */
        this.fn_checkValidationSpecOut = function (pDataset, pEvent, pInspectionResult)
        {
        	var result = "OK";

        	if (!this.nfn_isNull(pDataset.getColumn(pEvent.row, "MEASUREVALUE")))
        	{
        		this.ds_OSPInspectionMeasure.set_enableevent(false);

        		//입력된 값이 Spec범위를 벗어났을 경우
        		if (pInspectionResult == "NG")
        		{
        			result = "NG";
        			this.ds_OSPInspectionMeasure.setColumn(this.ds_OSPInspectionMeasure.rowposition, "INSPECTIONRESULT", result);
        		}
        		else
        		{
        			var NGCount = pDataset.getCaseCount("INSPECTIONRESULT == 'NG'");

        			if (NGCount == 0)
        			{
        				this.ds_OSPInspectionMeasure.setColumn(this.ds_OSPInspectionMeasure.rowposition, "INSPECTIONRESULT", result);
        			}
        			else
        			{
        				result = "NG";
        				this.ds_OSPInspectionMeasure.setColumn(this.ds_OSPInspectionMeasure.rowposition, "INSPECTIONRESULT", result);
        			}
        		}

        		this.ds_OSPInspectionMeasure.set_enableevent(true);
        	}
        	else
        	{
        		result = "";
        	}

        	return result;
        };

        /*
         *  기능 : 모든 검사 결과를 입력 했는지 확인하는 함수
         */
        this.fn_checkAllResultInput = function(pGrid)
        {
            var objDataset = pGrid.getBindDataset();
            var inputAllResult = true;

            this.g_hasImage = true;
            //확인필요. 필터링된데이터도 확인해야하는지
            for(var i=0; i < objDataset.getRowsCountNF; i++)
            {
                if (objDataset.getRowType(i) == 2 || objDataset.getRowType(i) == 4)
                {
                    if (this.nfn_isNull(objDataset.getColumn(i, "INSPECTIONRESULT")))
                    {
                        inputAllResult = false;
                        break;
                    }
                }
            }

            return inputAllResult;
        };

        /*
         * 기능 : 탭2. 측정검사 - 측정검사항목의 측정값이 존재할 경우만 background color setting
         */
        this.fn_setBgColor = function(nRow)
        {
            var inspItemId = this.ds_OSPInspectionMeasure.getColumn(nRow, "INSPITEMID");
        	var inspItemVersion = this.ds_OSPInspectionMeasure.getColumn(nRow, "INSPITEMVERSION");
        	var count = this.ds_OSPMeasureByInspItem.getCaseCount("INSPITEMID =='" + inspItemId + "' && INSPITEMVERSION == '"+ inspItemVersion +"'");

        	if(count > 0 ) {
        		return "cell_bg_yellow";
        	}
        	else
        	{
        		return "";
        	}
        };

        /*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Tabpage2 Function End @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/




        /************************************************* Tabpage3 Function Start *************************************************/
        /*
         * 기능 : Grid 에서 Body 영역의  원인품목 Cell 을 클릭했을 때 발생하는 이벤트입니다.
         *        QAM01800P6.xfdl에서 호출
         */
        this.fn_setReasonConsumbaleInfo = function (pConsumableDefId, pConsumableDefName)
        {
        	this.ds_OSPInspDefect.setColumn(this.ds_OSPInspDefect.rowposition, "REASONCONSUMABLEDEFID", pConsumableDefId);
        	this.ds_OSPInspDefect.setColumn(this.ds_OSPInspDefect.rowposition, "REASONCONSUMABLEDEFNAME", pConsumableDefName);
        };

        /*
         * 기능 : Grid 에서 Body 영역의 원인공정 Cell 을 클릭했을 때 발생하는 이벤트입니다.
         *        QAM01800P7.xfdl에서 호출
         */
        this.fn_setDefectProcesssegmentInfo = function (pProcessSegmentId, pProcessSgmentName)
        {
        	this.ds_OSPInspDefect.setColumn(this.ds_OSPInspDefect.rowposition, "REASONSEGMENTID", pProcessSegmentId);
        	this.ds_OSPInspDefect.setColumn(this.ds_OSPInspDefect.rowposition, "REASONSEGMENTNAME", pProcessSgmentName);
        };

        /*
         * 기능 : 모든 정보가 입력되었는지 체크하고 불량수량 합을 구하는 함수
         */
        this.fn_OSPInspDefectInputCheck = function ()
        {
        	if (this.ds_OSPInspDefect.getRowCount() > 0)
        	{
        		for(var i=0; i < this.ds_OSPInspDefect.getCount(); i++)
        		{
        			if (this.nfn_isNull(this.ds_OSPInspDefect.getColumn(i, "DEFECTCODE")) || this.nfn_isNull(this.ds_OSPInspDefect.getColumn(i, "INSPECTIONQTY"))
        				|| this.nfn_isNull(this.ds_OSPInspDefect.getColumn(i, "DEFECTQTY")))
        			{
        				this.gfn_Message("NeedToInputAllDataOSPInsp", null, "warning", "ok");//불량(폐기) 처리의 모든 항목을 입력해주세요.
        				return false;
        				break;
        			}
        		}
        		var sumDefectQty = this.ds_OSPInspDefect.getSum("DEFECTQTY");
        		var panelperQty = this.ds_parentLot.getColumn(0, "DEFECTCODE");
        	}

        	return true;
        };


        /************************************************** Tabpage3 Function End **************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 이벤트 : 의뢰일자 조건변경시
         */
        this.tab_search_Tab1_cbo_period_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM")
        	{
        		this.fn_setSearchDate(e.postvalue);
        	}
        };

        /*
         *  이벤트 : 닫기 버튼 클릭
         */
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };

        /*
         * 이벤트 : 자주검사(입고,출하)결과 조회 화면 호출
         */
        this.fn_callSelfInsp = function(obj,e)
        {
        	var sUrl = "qam::QAM00800M.xfdl";
        	var lotId = this.ds_lotInfoByLotIDOSP.getColumn(0, "LOTID");
        	this.opener.fv_rtnValue = "CALL";
        	var objArgs = {
           			       menuName : "QAM00600P1",
        				   objList : ["LOTID", lotId]
        			      };
        	this.gfn_goPage(sUrl, objArgs, true);
        };

        /*
         *  이벤트 : 검사정보 - 검사자
         */
        this.div_inspect_btn_inspUser_onclick = function(obj,e)
        {
            this.fn_openPop("EDT_USER208","P00208");
        };

        /*
         * 이벤트 : 검사정보 - 검사자 변경시
         */
        this.div_inspect_edt_inspUser_onchanged = function(obj,e)
        {
        	if (this.nfn_isNull(this.div_inspect.form.edt_inspUser.value))
        	{
        		this.div_inspect.form.edt_inspUser_id.set_value("");
        	}
        };

        /*
         *  이벤트 : 인계처리 정보 - 인계처리여부
         *  canitemchange에서 수행할 경우 체크 시 셋팅값으로 변경되지 않아 변경함
         */
        this.div_handOver_rdo_handOver_onitemchanged = function(obj,e)
        {
        	var finalResult = this.div_inspect.form.edt_inspResult.value;

        	if (e.postvalue == "HandOverProcessNon")  //인계처리(무검사)
        	{
        		//결과 NG일때 입고 인계처리, 입고의뢰 취소만 선택가능
        		if (!this.fn_checkFinalInspResult(finalResult)) return false;

                if (this.gfn_Message("DeleteAllDataConfirm", null, "conf", "yesno")) ////인계처리(무검사) 선택시 입력한 검사결과가 지워집니다. 선택하시겠습니까?
        		{
        			//외관검사 조회
        			//this.fn_searchOSPInspectionExterior("OnSearch");
        			this.fn_searchTabAll("OnSearch");

        			//이미지 초기화
        			this.img_OSPInspectionExterior1.set_image(null);
        			this.img_OSPInspectionExterior2.set_image(null);
        			this.img_OSPInspectionMeasure1.set_image(null);
        			this.img_OSPInspectionMeasure2.set_image(null);
        			this.img_OSPInspDefect1.set_image(null);
        			this.img_OSPInspDefect2.set_image(null);

        			this.div_handOver.form.edt_area.set_enable(true);
        			this.div_handOver.form.btn_area.set_enable(true);
        			this.div_inspect.form.edt_inspResult.set_value("OK");
        		}
        		else
        		{
        			return false;
        		}
        	}
        	else if (e.postvalue == "HandOverProcess") //인계처리
        	{
        		//결과 NG일때 입고 인계처리, 입고의뢰 취소만 선택가능
        		if(!this.fn_checkFinalInspResult(finalResult)) return false;

        		this.div_handOver.form.edt_area.set_enable(true);
        		this.div_handOver.form.btn_area.set_enable(true);
        	}
        	else if (e.postvalue == "ReceivingCancel") //입고의뢰취소
        	{
        		this.div_handOver.form.edt_area.set_value("");
        		this.div_handOver.form.edt_area_id.set_value("");
        		this.div_handOver.form.edt_resource_id.set_value("");
        		this.div_handOver.form.edt_area.set_enable(false);
        		this.div_handOver.form.btn_area.set_enable(false);
        		//20210617 입고의뢰취소 선택시에는 검사내역이 입력되지 않아도 "NG" 처리
        		this.div_inspect.form.edt_inspResult.set_value("NG");
        	}
        	return true;
        };

        /*
         * 이벤트 : 인계처리여부 - 작업장 변경시
         */
        this.div_handOver_edt_area_onchanged = function(obj,e)
        {
        	if (this.nfn_isNull(this.div_handOver.form.edt_area.value))
        	{
        		this.div_handOver.form.edt_area_id.set_value("");
        		this.div_handOver.form.edt_resource_id.set_value("");
        	}
        };

        /*
         *  이벤트 : 인계처리 정보 - 작업장
         */
        this.div_handOver_btn_area_onclick = function(obj,e)
        {
        	this.fn_openPop("EDT_AREA222","P00222");
        };

        /*
         * 이벤트 : 인계처리정보 - 작업장 초기화
         */
        this.fn_editBtnClear = function()
        {
        	this.div_handOver.form.edt_area.set_value("");
        	this.div_handOver.form.edt_area_id.set_value("");
        	this.div_handOver.form.edt_resource_id.set_value("");
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
        	var atchFileId = "";

        	for(var i=1; i< nexacro.toNumber(this.fileUploadCount+1); i++) //
            {
        		pDataset.set_enableevent(false);
        		var nRow = pDataset.rowposition;
        		var ATCH_FILE_GUID = "ATCH_FILE_GUID"+i;
        		var atchFileGuid = "";

        		if (i <= fileCount)
        		{
        			var fileRow = nexacro.toNumber(i-1);
        			atchFileGuid = this.ds_file.getColumn(fileRow, "ATCH_FILE_GUID");
        			atchFileId = this.ds_file.getColumn(fileRow, "ATCH_FILE_ID");
        		}

        		pDataset.set_enableevent(false);
        		pDataset.setColumn(nRow, ATCH_FILE_GUID, atchFileGuid);
        		if (pDataset.name == "ds_OSPInspectionMeasure")
        		{
        			pDataset.setColumn(nRow, "FILEID", atchFileId);
        		}
        		else
        		{
        			pDataset.setColumn(nRow, "FILERESOURCEID", atchFileId);
        		}
        		pDataset.set_enableevent(true);

        		trace(pDataset.saveXML());

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
        	}//for

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

        /************************************************* Tabpage1 Event Start *************************************************/

        this.ds_OSPInspectionExterior_cancolumnchange = function(obj,e)
        {
        	if (this.jobType == "updateData")
        	{
        		return false;
        	}

        	if (this.div_handOver.form.rdo_handOver.value == "HandOverProcessNon")
        	{
        		this.gfn_Message("CantInputDefectQtyNoInspection", null, "warning", "ok"); //인계처리(무검사) 선택시 검사결과를 입력 할 수 없습니다.
        		return false;
        	}

        	if (e.columnid == "INSPECTIONQT" ||e.columnid == "INSPECTIONQTYPNL"||e.columnid == "DEFECTQTY"||e.columnid == "DEFECTQTYPNL")
        	{
        		if (this.nfn_isNull(obj.getColumn(e.row, "DEFECTCODE")))
        		{
        			this.gfn_Message("CheckInputPostValue", this.nfn_getDictionaryname("DEFECTCODE", true), "warning", "ok");
        			return false;
        		}
        	}
        	if (e.columnid =="DEFECTQTY" || e.columnid =="DEFECTQTYPNL")
        	{
        		var inspectionQty = nexacro.toNumber(obj.getColumn(e.row, "INSPECTIONQTY"));

        		if (this.nfn_isNull(inspectionQty) || inspectionQty == 0)
        		{
        			return false;
        		}
        	}

        	return true;
        };

         /*
         * 기능 : 탭1. 외관검사 - Row 의 선택이 변경되어 DataSet 의 rowposition 속성값이 변경된 후 발생하는 이벤트
         */
        this.ds_OSPInspectionExterior_onrowposchanged = function(obj,e)
        {
        	this.fn_setImage("this.tab_result.Tabpage1.form.img_OSPInspectionExterior", obj, e.newrow);
        };

         /*
         * 기능 : 탭1. 외관검사 - DataSet 의 Column 값이 변경된 후 발생하는 이벤트
         */
        this.ds_OSPInspectionExterior_oncolumnchanged = function(obj,e)
        {
        	if (e.row < 0) return false;

        	//검사수량, 불량수량을 입력 했을때 불량율을 계산해준다
        	var inspectionDecisionClass = this.tab_result.Tabpage1.form.cbo_inspectionDecisionClass.value;

        	obj.set_enableevent(false);

        	if (e.columnid == "INSPECTIONQTY" || e.columnid == "DEFECTQTY" || e.columnid == "DEFECTQTYPNL"
        		|| (e.columnid == "INSPECTIONQTYPNL" && inspectionDecisionClass  =="NCR"))
        	{

        		if (e.columnid == "INSPECTIONQTY" || (e.columnid == "INSPECTIONQTYPNL" && inspectionDecisionClass == "NCR"))
        		{
        			//음수를 입력했을 때 0으로 바꿔줌
        			if (e.newvalue <= 0)
        			{
        				this.gfn_Message("InspectionQtyCount", null, "warning", "ok"); //검사수량은 0 또는 음수가 될 수 없습니다.
        				obj.setColumn(e.row, e.columnid, 0);
        				obj.set_enableevent(true);
        				return false;
        			}

        			if (e.columnid == "INSPECTIONQTY")
        			{
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
        					obj.setColumn(e.row, "INSPECTIONQTYPNL", "");
        					obj.set_enableevent(true);
        					return false;
        				}
        				else
        				{
        					for (var i=0; i< obj.getRowCount(); i++)
        					{
        						var inspectionQtyPNL = nexacro.toNumber(this.parentPanelPerQty) == 0 ? 0: nexacro.ceil(e.newvalue / nexacro.toNumber(this.parentPanelPerQty));
        						obj.setColumn(i, "INSPECTIONQTY", e.newvalue);
        						obj.setColumn(i, "INSPECTIONQTYPNL", inspectionQtyPNL);

        						var defectQty     = obj.getColumn(i, "DEFECTQTY");
        						var inspectionQty = obj.getColumn(i, "INSPECTIONQTY");
        						var defectRate = nexacro.round(nexacro.toNumber(defectQty /inspectionQty) * 100, 1);
        						obj.setColumn(i, "DEFECTRATE", defectRate);

        						this.fn_gridDefectRateChanged(obj);
        					}
        				}
        			}//sub if e.columnid
        			else if (e.columnid == "INSPECTIONQTYPNL" && inspectionDecisionClass == "NCR")
        			{
        				//입력된 INSPECTIONQTYPNL로 계산된 INSPECTIONQTY
        				var inspectionQtyPCS = nexacro.toNumber(this.parentPanelPerQty) == 0 ? e.newvalue : e.newvalue * nexacro.toNumber(this.parentPanelPerQty);

        				if (nexacro.toNumber(this.g_lotPcsQty) < nexacro.toNumber(inspectionQtyPCS))
        				{
        					this.gfn_Message("InvalidSampleQtyOverQty", null, "warning", "ok"); //샘플 수량은 전체 수량보다 클 수 없습니다.
        					obj.setColumn(e.row, e.columnid, "");
        					obj.setColumn(e.row, "INSPECTIONQTYPNL", "");
        					obj.set_enableevent(true);
        					return false;
        				}

        				for (var i=0; i< obj.getRowCount(); i++)
        				{
        					obj.setColumn(i, "INSPECTIONQTY", inspectionQtyPCS);
        					obj.setColumn(i, "INSPECTIONQTYPNL", e.newvalue);

        					var defectQty     = obj.getColumn(i, "DEFECTQTY");
        					var inspectionQty = obj.getColumn(i, "INSPECTIONQTY");
        					var defectRate = nexacro.round(nexacro.toNumber(defectQty /inspectionQty) * 100, 1);
        					obj.setColumn(i, "DEFECTRATE", defectRate);

        					this.fn_gridDefectRateChanged(obj);
        				}
        			}// sub if e.columnid
        		}// if e.columnid

        		if (e.columnid == "DEFECTQTY" || e.columnid == "DEFECTQTYPNL")
        		{
        			var inspectionQty = obj.getColumn(e.row, "INSPECTIONQTY");
        			var inspectionQtyPnl = obj.getColumn(e.row, "INSPECTIONQTYPNL");

        			if (this.nfn_isNull(inspectionQty) || this.nfn_isNull(inspectionQtyPnl)) //검사수량을 입력하지 않고 불량수량입력 할 때
        			{
        				this.gfn_Message("NoInspectionQtyAndPnl", null, "warning", "ok"); //검사 수량을 먼저 입력하세요
        				obj.setColumn(e.row, e.columnid, 0);
        				obj.set_enableevent(true);
        				return false;
        			}

        			if (e.columnid == "DEFECTQTY")
        			{
        				if (nexacro.toNumber(inspectionQty) < e.newvalue) //검사 수량보다 불량수가 많을 때
        				{
        					this.gfn_Message("PcsQtyRangeOver", null, "warning", "ok"); //검사수량보다 불량수량이 초과하였습니다.
        					obj.setColumn(e.row, e.columnid, 0);
        					obj.setColumn(e.row, "DEFECTQTYPNL", 0);
        					obj.set_enableevent(true);
        					return false;
        				}

        				var specOutQtySum = obj.getSum("DEFECTQTY");

        				if (nexacro.toNumber(inspectionQty) < nexacro.toNumber(specOutQtySum))
        				{
        					this.gfn_Message("PcsQtyRangeOver", null, "warning", "ok"); //검사수량보다 불량수량이 초과하였습니다.
        					obj.setColumn(e.row, e.columnid, 0);
        					obj.set_enableevent(true);
        					return false;
        				}

        				var defectQtyPnl = nexacro.toNumber(this.parentPanelPerQty) == 0 ? 0 : nexacro.ceil(e.newvalue / nexacro.toNumber(this.parentPanelPerQty));
        				obj.setColumn(e.row, e.columnid, e.newvalue);
        				obj.setColumn(e.row, "DEFECTQTYPNL", defectQtyPnl);
        			}
        			else if (e.columnid == "DEFECTQTYPNL")
        			{
        				if (nexacro.toNumber(inspectionQtyPnl) < e.newvalue) //검사 수량보다 불량수가 많을 때
        				{
        					this.gfn_Message("PcsQtyRangeOver", null, "warning", "ok"); //검사수량보다 불량수량이 초과하였습니다.
        					obj.setColumn(e.row, e.columnid, 0);
        					obj.setColumn(e.row, "DEFECTQTY", 0);
        					obj.set_enableevent(true);
        					return false;
        				}

        				var specOutQtySum = obj.getSum("DEFECTQTY");

        				//입력한 DEFECTQTYPNL로 계산된 DEFECTQTY
        				var defectQtyPCS = nexacro.toNumber(this.parentPanelPerQty) == 0 ? e.newvalue : e.newvalue * nexacro.toNumber(this.parentPanelPerQty);

        				//이미 입력되어있는 DEFECTQTY + 지금 계산된 DEFECTQTY 의 합이 INSPECTIONQTY 초과하면안됨
        				if (nexacro.toNumber(inspectionQty) < nexacro.toNumber(specOutQtySum) + nexacro.toNumber(defectQtyPCS))
        				{
        					this.gfn_Message("PcsQtyRangeOver", null, "warning", "ok"); //검사수량보다 불량수량이 초과하였습니다.
        					obj.setColumn(e.row, e.columnid, 0);
        					obj.setColumn(e.row, "DEFECTQTY", 0);
        					obj.set_enableevent(true);
        					return false;
        				}

        				obj.setColumn(e.row, "DEFECTQTYPNL", e.newvalue);
        				obj.setColumn(e.row, "DEFECTQTY", defectQtyPCS);
        			}
        		}//if (e.columnid == "DEFECTQTY" || e.columnid == "DEFECTQTYPNL")

        		if (this.nfn_isNull(obj.getColumn(e.row, "DEFECTQTY")))
        		{
        			obj.setColumn(e.row, "DEFECTRATE", "");
        			this.fn_gridDefectRateChanged(obj);
        		}
        		else
        		{
        			var defectQty     = obj.getColumn(e.row, "DEFECTQTY");
        			var inspectionQty = obj.getColumn(e.row, "INSPECTIONQTY");
        			var defectRate = nexacro.round(nexacro.toNumber(defectQty /inspectionQty) * 100, 1);
        			obj.setColumn(e.row, "DEFECTRATE", defectRate);

        			this.fn_gridDefectRateChanged(obj);
        		}
        	}

        	obj.set_enableevent(true);
        };

        /*
         * 외관검사에서 호출
         * GrdDefectRate_CellValueChanged
         * oncolumnchanged 이벤트에서는 호출하지 못하고 cancolumnchange는 메시지 때문에 중간 리턴되어 불량률이 변경되지 못해 별도로 호출
         */
        this.fn_gridDefectRateChanged = function(pDataset)
        {
        	var nRow = pDataset.rowposition

        	//불량율이 바뀌었을때
        	if (!this.nfn_isNull(pDataset.getColumn(nRow, "DEFECTRATE")))
        	{
        		var inspectionDecisionClass = this.tab_result.Tabpage1.form.cbo_inspectionDecisionClass.value;
        		if (this.nfn_isNull(inspectionDecisionClass))
        		{
        			this.gfn_Message("SelectInspStandard", null, "warning", "ok"); //판정기준(외관검사) 선택하세요.
        			return false;
        		}

        		var inspectionClassId  = "OSPInspection";
        		var rtnResult;

        		if (inspectionDecisionClass == "AQL")
        		{
        			var aqlDecisionDegree = pDataset.getColumn(nRow, "AQLDECISIONDEGREE");
        			var pcsQty = this.ds_lotInfoByLotIDOSP.getColumn(0, "PCSQTY");
        			rtnResult = JSON.parse(this.qfn_setQcGradeAndResultAQLType(pDataset, this.ds_AQLCheckBasis, this.ds_AQLActionGrade, inspectionClassId, aqlDecisionDegree, pcsQty, true) );
        		}
        		else if (inspectionDecisionClass == "NCR")
        		{
        			var decisionDegree = pDataset.getColumn(nRow, "DECISIONDEGREE");
        			rtnResult = JSON.parse(this.qfn_setQcGradeAndResultNCRQtyRateType(pDataset, this.ds_NCRCheckBasis, inspectionClassId, decisionDegree, true));
        		}

        		//불량 기준에 의해 판정결과 값 입력
        		pDataset.set_enableevent(false);
        		pDataset.setColumn(nRow, "INSPECTIONRESULT", rtnResult.result);
        		pDataset.set_enableevent(true);

        		//oncolumnchanged 에서 호출안됨.. cancolumnchange는 값 변경전이라 안됨
        		//검사 결과에 따라 전체 결과 자동 판정하는 이벤트(AllResult_CellValueChanged)
        		this.fn_inspectionResultCheck(obj, rtnResult.result);

        		if (!this.nfn_isNull(rtnResult.messageId))
        		{
        			this.gfn_Message(rtnResult.messageId, null, "warning", "ok");
        			return false;
        		}
        	}
        }

        /*
         *  이벤트 : 탭1. 외관검사 - 행추가
         */
        this.fn_addOSPInspectionExterior = function(obj,e)
        {
        	if (this.div_handOver.form.rdo_handOver.value == "HandOverProcessNon")
        	{
        		this.gfn_Message("CantInputDefectQtyNoInspection", null, "warning", "ok"); //인계처리(무검사) 선택시 검사결과를 입력 할 수 없습니다.
        		return false;
        	}

        	var inspectionQty = this.tab_result.Tabpage1.form.msk_AQLInspectionQty.value;
        	if (this.nfn_isNull(inspectionQty) || nexacro.toNumber(inspectionQty) < 1)
        	{
        		this.gfn_Message("InspectionQtyCount", null, "warning", "ok"); //검사수량은 0 또는 음수가 될 수 없습니다.
        		this.tab_result.Tabpage1.form.msk_AQLInspectionQty.setFocus();
        		return false;
        	}

        	if (this.tab_result.Tabpage1.form.cbo_inspectionDecisionClass.value == "NCR")
        	{
        		var inspPanel = this.tab_result.Tabpage1.form.msk_AQLInspectionQty.value;
        		var inspectionQty = nexacro.toNumber(this.parentPanelPerQty) == 0 ? 0: nexacro.ceil(inspPanel* nexacro.toNumber(this.parentPanelPerQty));

        		if (nexacro.toNumber(this.g_lotPcsQty) < nexacro.toNumber(inspectionQty))
        		{
        			this.gfn_Message("InvalidSampleQtyOverQty", null, "warning", "ok"); //샘플 수량은 전체 수량보다 클 수 없습니다
        			return false;
        		}
        	}

        	var objDataset = this.ds_OSPInspectionExterior;
        	if (objDataset == null) return;
        	var nRow = objDataset.addRow();

        	objDataset.set_enableevent(false);  //값변경 이벤트를 호출하지 않기 위해
        	objDataset.setColumn(nRow, "DEFECTQTY", 0);
        	objDataset.setColumn(nRow, "DEFECTRATE", 0);
        	objDataset.setColumn(nRow, "DEFECTQTYPNL", 0);
        	objDataset.setColumn(nRow, "INSPECTIONRESULT", "OK");
        	objDataset.setColumn(nRow, "CANDELETE", "Y");

        	if (this.tab_result.Tabpage1.form.cbo_inspectionDecisionClass.value == "AQL")
        	{
        		var inspQty = this.tab_result.Tabpage1.form.msk_AQLInspectionQty.value;
        		var inspectionQtyPNL = nexacro.toNumber(this.parentPanelPerQty) == 0 ? 0: nexacro.ceil(inspQty / nexacro.toNumber(this.parentPanelPerQty));
        		objDataset.setColumn(nRow, "INSPECTIONQTY", inspQty);
        		objDataset.setColumn(nRow, "INSPECTIONQTYPNL", inspectionQtyPNL);
        	}
        	else
        	{
        		var inspPanel = this.tab_result.Tabpage1.form.msk_AQLInspectionQty.value;
        		var inspectionQty = nexacro.toNumber(this.parentPanelPerQty) == 0 ? 0: nexacro.ceil(inspPanel* nexacro.toNumber(this.parentPanelPerQty));
        		objDataset.setColumn(nRow, "INSPECTIONQTY", inspectionQty);
        		objDataset.setColumn(nRow, "INSPECTIONQTYPNL", inspPanel);
        	}
        	objDataset.set_enableevent(true);
        };

        /*
         *  이벤트 : 탭1. 외관검사 - 행삭제
         */
        this.fn_delOSPInspectionExterior = function(obj,e)
        {
        	var nRow = this.ds_OSPInspectionExterior.rowposition;

        	if (nRow < 0) return false;

        	if (this.ds_OSPInspectionExterior.getColumn(nRow, "CANDELETE") == "N")
        	{
        		return false;
        	}
        	else
        	{
        		this.ds_OSPInspectionExterior.deleteRow(nRow);
        	}

        	var result = this.ds_OSPInspectionExterior.getCaseCount("INSPECTIONRESULT == 'NG'") == 0 ? "OK":"NG";

        	//삭제시 전체 판정결과
        	this.fn_inspectionResultCheck(this.ds_OSPInspectionMeasure, result);
        };

        /*
         *  이벤트 : 탭1. 외관검사 - 이미지 추가
         */
        this.fn_addImgOSPInspectionExterior = function(obj,e)
        {
        	if (this.ds_OSPInspectionExterior.getRowCount() < 1) return;

        	if (this.jobType == "updateData")
        	{
        		this.gfn_Message("CanAddImageBeforeResultSave", null, "warning", "ok"); //검사 결과가 저장된 후에는 이미지를 추가 할 수 없습니다.
        		return false;
        	}

        	var inspectionResult = this.ds_OSPInspectionExterior.getColumn( this.ds_OSPInspectionExterior.rowposition ,"INSPECTIONRESULT");
        	if (inspectionResult != "NG")
        	{
        		this.gfn_Message("CanAddImageOnlyNG", null, "warning", "ok"); //판정결과가 NG인 경우만 사진을 등록할수 있습니다.
        		return false;
        	}

        	var nRow = this.ds_OSPInspectionExterior.rowposition;
        	var srcKey = this.resourceType
        	           + "|" + this.ds_parentLot.getColumn(0, "LOTID") + this.ds_OSPInspectionExterior.getColumn(nRow, "JOINCODE") + "O" + this.ds_parentLot.getColumn(0, "DEGREE")
        	  	       + "|*" ;

        	this.fn_callFilePopup("file_upload_exterior","QAM", srcKey, "QAM_INSPECTIONDEFECT", "공정 수입검사 결과등록(외관)", "", nexacro.toNumber(this.fileUploadCount));
        };

        /*
         * 이벤트 : 탭1. 외관검사 - 판정기준(외관검사) 변경
         */
        this.tab_result_Tabpage1_cmb_inspectionDecisionClass_onitemchanged = function(obj,e)
        {
        	if (e.prevalue == e.postvalue) return false;

        	//탭1. 외관검사 초기화
        	this.fn_setOSPInspectionExterior();

        	//외관검사 - 불량코드
        	this.fn_searchOSPInspectionExterior("Decision");

        	if (this.tab_result.Tabpage1.form.cbo_inspectionDecisionClass.value == "AQL")
        	{
        		this.tab_result.Tabpage1.form.msk_AQLInspectionQty.set_enable(false);
        		this.tab_result.Tabpage1.form.msk_AQLInspectionQty.set_readonly(true);

        		//판정 기준이 AQL일때 화면에 보여지는 값 변경
        		if (!this.fn_setAQLQty(this.ds_OSPInspectionExterior))	return;
        	}
        	else
        	{
        		this.tab_result.Tabpage1.form.msk_AQLInspectionQty.set_enable(true);
        		this.tab_result.Tabpage1.form.msk_AQLInspectionQty.set_readonly(false);

        		//20210609 Modify Value ""=> ncrinspectionqty
        		var inspectionQty = this.ds_AQLBasisInfo.getColumn(0, "NCRINSPECTIONQTY");
        		this.tab_result.Tabpage1.form.msk_AQLInspectionQty.set_value(inspectionQty);
        		this.tab_result.Tabpage1.form.edt_AQLInspectionLevel.set_value("");
        	}

        	this.tab_result.Tabpage1.form.img_OSPInspectionExterior1.set_image("");
        	this.tab_result.Tabpage1.form.img_OSPInspectionExterior2.set_image("");
        };

        /*
         * 이벤트 : 탭1. 외관검사 - 불량코드명 팝업
         */
        this.tab_result_Tabpage1_grd_OSPInspectionExterior_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return false;

        	if (e.cell == obj.getBindCellIndex("body", "JOINNAME"))
        	{
        		this.fn_openPop("GRD_DEFECTCODE272","P00272"); //불량코드 //this.fn_openPop("GRD_DEFECTCODE207","P00207");
        	}
        };

        /*
         * 이벤트 : 외관검사-판정기준 변경시 입력 데이터 초기화
         */
        this.tab_result_Tabpage1_msk_AQLInspectionQty_canchange = function(obj,e)
        {
            if (this.ds_OSPInspectionExterior.getRowCount() > 0)
        	{
        		if (!this.nfn_isNull(e.prevalue) && nexacro.toNumber(e.prevalue) > 0)
        		{
        			result = this.gfn_Message("IsChangedNCRPanelQty", null, "conf", "yesno");//검사 수량 변경 시 입력된 정보가 삭제됩니다. 변경하시겠습니까?

        			if (result)
        			{
        				this.ds_OSPInspectionExterior.clearData();
        				return true;
        			}
        			else
        			{
        				return false;
        			}
        		}
        	}
        };

        /************************************************** Tabpage1 Event End **************************************************/


        /*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Tabpage2 Event Start @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/
        /*
         * 이벤트 : 탭2. 측정검사 조회 후 측정값 검사 - Row 의 선택이 변경되어 DataSet 의 rowposition 속성값이 변경된 후 발생하는 이벤트
         */
        this.ds_OSPInspectionMeasure_onrowposchanged = function(obj,e)
        {
            if (e.newrow < 0) return;

        	//측정검사의 검사항목이 바뀔때 측정값 가져오기
        	//Select한 측정값중 inspitemId와 version 으로 해당 내역만 바인딩하는 함수
        	var inspItemId = this.ds_OSPInspectionMeasure.getColumn(e.newrow, "INSPITEMID");
        	var inspItemVersion = this.ds_OSPInspectionMeasure.getColumn(e.newrow, "INSPITEMVERSION");

        	this.ds_OSPMeasureByInspItem.filter("");
        	this.ds_OSPMeasureByInspItem.filter("INSPITEMID =='" + inspItemId + "' && INSPITEMVERSION == '"+ inspItemVersion +"'");

        	this.fn_setImage("this.tab_result.Tabpage2.form.img_OSPInspectionMeasure", obj, e.newrow);
        };

         /*
         * 이벤트 : 탭2. 측정검사 - DataSet 의 Column 값이 변경된 후 발생하는 이벤트
         */
        this.ds_OSPMeasureByInspItem_oncolumnchanged = function(obj,e)
        {
        	if (e.row < 0) return false;

        	//측정값이 바뀌었을때
        	if (e.columnid == "MEASUREVALUE")
        	{
        		//복사를 통해 그리드 행추가했을 경우
        		if (obj.getRowType(e.row) == 2)
        		{
        			obj.set_enableevent(false);
        			//복사시 측정값(MEASUREVALUE)제외
        			obj.copyRow(e.row, this.ds_OSPInspectionMeasure, this.ds_OSPInspectionMeasure.rowposition,"ENTERPRISEID=ENTERPRISEID,INSPECTIONRESULT=INSPECTIONRESULT,INSPECTIONSTANDARD=INSPECTIONSTANDARD,INSPITEMID=INSPITEMID,INSPITEMNAME=INSPITEMNAME,INSPITEMVERSION=INSPITEMVERSION,LOWERCONTROLLIMIT=LOWERCONTROLLIMIT,LOWERSCREENLIMIT=LOWERSCREENLIMIT,LOWERSPECLIMIT=LOWERSPECLIMIT,NCRDECISIONDEGREE=NCRDECISIONDEGREE,ORIPROCESSRELNO=ORIPROCESSRELNO,PLANTID=PLANTID,PROCESSRELNO=PROCESSRELNO,RESOURCEID=RESOURCEID,RESOURCETYPE=RESOURCETYPE,TARGETVALUE=TARGETVALUE,TXNHISTKEY=TXNHISTKEY,UPPERCONTROLLIMIT=UPPERCONTROLLIMIT,UPPERSCREENLIMIT=UPPERSCREENLIMIT,UPPERSPECLIMIT=UPPERSPECLIMIT,INSPECTIONDEFID=INSPECTIONDEFID,INSPECTIONDEFVERSION=INSPECTIONDEFVERSION");
        			obj.setColumn(e.row, "DEGREE",       this.ds_parentLot.getColumn(0, "DEGREE"));
        			obj.setColumn(e.row, "RESOURCEID",   this.ds_parentLot.getColumn(0, "LOTID"));
        			obj.setColumn(e.row, "RESOURCETYPE", this.resourceType);
        			obj.setColumn(e.row, "PROCESSRELNO", this.parentProcessRelNo);
        			obj.set_enableevent(true);
        		}

        		//스펙을 찾기위한 파라미터가 없는경우 return
        		if (this.gfn_isNull(obj.getColumn(e.row, "LOWERSPECLIMIT")) && this.gfn_isNull(obj.getColumn(e.row, "UPPERSPECLIMIT")))
        		{
        			this.gfn_Message("NoSpecDetail", null, "warning", "ok");//유효성 검사를 할 Spec정보가 등록되어있지 않습니다.
        			return false;
        		}
        		else
        		{
                    //checkpoint asis에서는 CheckValidationSpecOut에서 수행하였으나 데이터의 변경시점에 따라 검사정보의 판정결과가 변경되는데 시점이 맞지 않아 수정함
        			// 측정값의 판정결과를 count하여 측정검사의 판정결과를 변경한 후 그 결과를 측정값의 판정결과에 반영하여 변경전 판정결과로 판단하여 오류 발생
        			if (!this.nfn_isNull(e.newvalue))
        			{
        				//LSL, USL
        				var lsl = obj.getColumn(e.row, "LOWERSPECLIMIT");
        				var usl = obj.getColumn(e.row, "UPPERSPECLIMIT");

        				//입력된 값
        				var measureValue = e.newvalue;

        				var inspectionReslut;
        				obj.set_enableevent(false);
        				//입력된 값이 Spec범위를 벗어났을 경우
        				if (nexacro.toNumber(lsl) > nexacro.toNumber(measureValue) || nexacro.toNumber(usl) < nexacro.toNumber(measureValue))
        				{
        				    inspectionReslut = "NG";
        					obj.setColumn(e.row, "INSPECTIONRESULT", inspectionReslut);
        				}
        				else
        				{
        					inspectionReslut = "OK";
        					obj.setColumn(e.row, "INSPECTIONRESULT", inspectionReslut);
        				}
        				obj.set_enableevent(true);
        			}

        			//스펙체크 결과에 의해 판정결과 값 입력
        			//입력된 값이 spec값을 벗어나지 않았는지 체크하여 결과를 return 하는 함수
        			var result =this.fn_checkValidationSpecOut(obj, e, inspectionReslut);

        		    //검사 결과에 따라 전체 결과 자동 판정하는 이벤트(AllResult_CellValueChanged)
        		    this.fn_inspectionResultCheck(obj, result);

        			if (result == "NG")
        			{
        				var ncrDecisionDegree = obj.getColumn(e.row, "NCRDECISIONDEGREE");
        				if (this.nfn_isNull(ncrDecisionDegree))
        				{
        				    //원래 messageid는 NoActionStandardData 이나 미존재하여 변경
        					this.gfn_Message("NoStandardData", null, "warning", "ok");//판정등급이 없습니다.
        					return false;
        				}

        				var rtnResult = JSON.parse(this.qfn_getQcGradeAndSequenceNCRAndSpecType(this.ds_NCRCheckBasis, "OperationInspection", ncrDecisionDegree));
        				obj.setColumn(e.row, "QCGRADE",  rtnResult.result);
        				obj.setColumn(e.row, "PRIORITY", rtnResult.sequence);
        			}
        		}
        	}
        };

        /*
         * 이벤트 : 탭2. 측정검사 - 측정값 행추가
         */
        this.fn_addOSPMeasureByInspItem = function(obj,e)
        {
        	if (this.ds_OSPInspectionMeasure.getRowCount() < 1)
        	{
        		return false;
        	}
        	else
        	{
        		if (this.div_handOver.form.rdo_handOver.value == "HandOverProcessNon") //인계처리(무검사)
        		{
        		  this.gfn_Message("CantInputDefectQtyNoInspection", null, "warning", "ok"); //인계처리(무검사) 선택시 검사결과를 입력 할 수 없습니다.
        		  return false;
        		}

        		var objDataset = this.ds_OSPMeasureByInspItem;
        		if (objDataset == null) return false;

        		objDataset.set_enableevent(false);
        		var nRow = objDataset.addRow();
        	    objDataset.copyRow(nRow, this.ds_OSPInspectionMeasure, this.ds_OSPInspectionMeasure.rowposition);
        		objDataset.setColumn(nRow, "DEGREE",       this.ds_parentLot.getColumn(0, "DEGREE"));
        		objDataset.setColumn(nRow, "RESOURCEID",   this.ds_parentLot.getColumn(0, "LOTID"));
        		objDataset.setColumn(nRow, "RESOURCETYPE", this.resourceType);
        		objDataset.setColumn(nRow, "PROCESSRELNO", this.parentProcessRelNo);
        		objDataset.set_enableevent(true);
        	}
        };

        /*
         * 이벤트 : 탭2. 측정검사 - 측정값 행삭제
         */
        this.fn_delOSPMeasureByInspItem = function(obj,e)
        {
        	if (this.ds_OSPMeasureByInspItem.rowcount < 1) return;

        	//측정검사 ROW삭제시 측정항목 결과 판정
        	var nRow = this.ds_OSPInspectionMeasure.rowposition;

        	if (nRow < 0) return false;

        	//checkpoint asis에서 flag였으나 tobe에서는 바로 삭제
        	//this.ds_OSPMeasureByInspItem.setColumn(nRow, "ISDELETE", "Y");
        	this.ds_OSPMeasureByInspItem.deleteRow(this.ds_OSPMeasureByInspItem.rowposition);

        	var result = this.ds_OSPMeasureByInspItem.getCaseCount("INSPECTIONRESULT == 'NG'") == 0 ? "OK":"NG";
        	var result1 = result ;
        	if (this.ds_OSPMeasureByInspItem.getRowCount() == 0)
        	{
        		result1 = "";
        	}

        	//삭제시  측정검사 판정결과
        	if (this.gfn_isNull(result1))
        	{
        		this.ds_OSPInspectionMeasure.setColumn(nRow, "INSPECTIONRESULT", result1);
        	}
        	else
        	{
        		this.ds_OSPInspectionMeasure.setColumn(nRow, "INSPECTIONRESULT", result);
        	}

        	//측정값 삭제시 전체 판정결과
        	this.fn_inspectionResultCheck(this.ds_OSPInspectionMeasure, result);
        };

        /*
         * 이벤트 : 탭2. 측정검사 이미지 추가
         */
        this.fn_addImgOSPInspectionMeasure = function(obj,e)
        {
        	if (this.ds_OSPInspectionMeasure.getRowCount() < 1) return;

        	if (this.jobType == "updateData")
        	{
        		this.gfn_Message("CanAddImageBeforeResultSave", null, "warning", "ok"); //검사 결과가 저장된 후에는 이미지를 추가 할 수 없습니다.
        		return false;
        	}

        	var inspectionResult = this.ds_OSPInspectionMeasure.getColumn( this.ds_OSPInspectionMeasure.rowposition ,"INSPECTIONRESULT");
        	if (inspectionResult != "NG")
        	{
        		this.gfn_Message("CanAddImageOnlyNG", null, "warning", "ok"); //판정결과가 NG인 경우만 사진을 등록할수 있습니다.
        		return false;
        	}

        	var nRow = this.ds_OSPInspectionMeasure.rowposition;
        	var srcKey = this.resourceType
          	           + "|" + this.ds_parentLot.getColumn(0, "LOTID") + this.ds_OSPInspectionMeasure.getColumn(nRow, "INSPITEMID") + this.ds_parentLot.getColumn(0, "DEGREE")
        			   + "|*" ;

            this.fn_callFilePopup("file_upload_measure", "QAM", srcKey, "BAS_INSPECTIONITEMRESULT", "공정 수입검사 결과등록(측정)", "", nexacro.toNumber(this.fileUploadCount));
        };

        /*
         * 이벤트 : 측정자 명 Enter Key
         */
        this.tab_result_Tabpage2_edt_measureUser_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_result_Tabpage2_btn_measureUser_onclick();
        	}
        };

        /*
         * 이벤트 : 검사정보 - 검사자 변경시
         */
        this.tab_result_Tabpage2_edt_measureUser_onchanged = function(obj,e)
        {
        	if (this.nfn_isNull(this.tab_result.Tabpage2.form.edt_measureUser.value))
        	{
        		this.tab_result.Tabpage2.form.edt_measureUser_id.set_value("");
        	}
        };


        /*
         *  이벤트 : 측정자
         */
        this.tab_result_Tabpage2_btn_measureUser_onclick = function(obj,e)
        {
            this.fn_openPop("EDT_MEASUREUSER208","P00208");
        };



        /*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Tabpage2 Event End @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/


        /************************************************* Tabpage3 Event Start *************************************************/

        this.ds_OSPInspDefect_cancolumnchange = function(obj,e)
        {
        	if (this.type == "updateData")
        	{
        		return false;
        	}

        	obj.set_enableevent(false);

        	if (e.columnid =="INSPECTIONQTY" || e.columnid =="DEFECTQTY")
        	{
        		if (this.nfn_isNull(obj.getColumn(e.row, "DEFECTCODE")))
        		{
        			this.gfn_Message("InputDefectCodeFirst", null, "warning", "ok"); //불량코드를 우선 입력하세요

        			obj.setColumn(e.newvalue, e.columnid, 0);
        			obj.set_enableevent(true);
        			return false;
        		}
            }

        	// 원인LOTID 클릭시 원인품목이 선택되지 않았다면 ReadOnly
        	if (e.columnid == "REASONCONSUMABLELOTID")
        	{
        		if (this.nfn_isNull(obj.getColumn(e.row, "REASONCONSUMABLEDEFNAME")))
        		{
        			return false;
        		}
        	}

        	// 원인공정 클릭시 원인품목 또는 원인자재가 선택되지 않았다면 ReadOnly
        	if (e.columnid == "REASONPROCESSSEGMENTNAME")
        	{
        		if (   this.nfn_isNull(obj.getColumn(e.row, "REASONCONSUMABLEDEFNAME"))
        		    || this.nfn_isNull(obj.getColumn(e.row, "REASONCONSUMABLELOTID")))
        		{
        			return false;
        		}
        	}

        	// 원인작업장 클릭시 원인품목 또는 원인자재 또는 원인공정이 선택되지 않았다면 ReadOnly
        	if (e.columnid == "REASONAREAID")
        	{
        		if (   this.nfn_isNull(obj.getColumn(e.row, "REASONCONSUMABLEDEFNAME"))
        		    || this.nfn_isNull(obj.getColumn(e.row, "REASONCONSUMABLELOTID"))
        			|| this.nfn_isNull(obj.getColumn(e.row, "REASONPROCESSSEGMENTNAME")))
        		{
        			return false;
        		}
        	}

        	obj.set_enableevent(true);
        	return true;
        };

         /*
         * 기능 : 탭3. 불량(폐기)처리 - Row 의 선택이 변경되어 DataSet 의 rowposition 속성값이 변경된 후 발생
         */
        this.ds_OSPInspDefect_onrowposchanged = function(obj,e)
        {
        	this.fn_setImage("this.tab_result.Tabpage3.form.img_OSPInspDefect", obj, e.newrow);
        };

         /*
         * 기능 : 탭3. 불량(폐기)처리 - DataSet 의 Column 값이 변경된 후 발생하는 이벤트
         */
        this.ds_OSPInspDefect_oncolumnchanged = function(obj,e)
        {
        	obj.set_enableevent(false);

            if (e.columnid =="DEFECTQTYPNL")
        	{
        		if (e.newvalue < 0)
        		{
        			obj.setColumn(e.newvalue, e.columnid, 0);
        		}

        		var allDefectPNLQty = this.ds_OSPInspDefect.getSum("DEFECTQTYPNL");
        		var inspectionQtyPnl = nexacro.toNumber(this.ds_OSPInspDefect.getColumn(e.row, "INSPECTIONQTYPNL"))

        		//검사 수량보다 불량수가 많을 때
        		if (nexacro.toNumber(inspectionQtyPnl) < e.newvalue || nexacro.toNumber(inspectionQtyPnl) < nexacro.toNumber(allDefectPNLQty))
        		{
        			this.gfn_Message("PcsQtyRangeOver", "", "warning", "ok");//검사수량보다 불량수량이 초과하였습니다.
        			obj.setColumn(e.row, e.columnid, 0);
        			return false;
        		}

        		var defectQty = nexacro.toNumber(e.newvalue) * nexacro.toNumber(this.parentPanelPerQty);
        		obj.setColumn(e.row, "DEFECTQTY", defectQty);

        		//불량율계산
        		var defectRate = nexacro.round((nexacro.toNumber(defectQty)/ nexacro.toNumber(obj.getColumn(e.row, "INSPECTIONQTY")) * 100), 1);
        		obj.setColumn(e.row, "DEFECTRATE", defectRate);
        		obj.setColumn(e.row, "QTY", defectQty);
        	}
        	else if (e.columnid =="DEFECTQTY")
        	{
        		var inspectionQty = 0;
        		var defectQty = 0;
        		var defectiveRate = 0;

        		inspectionQty = nexacro.toNumber(this.ds_lotInfoByLotIDOSP.getColumn(0, "PCSQTY"));
        		defectQty = nexacro.toNumber(obj.getSum("DEFECTQTY"));

        		if (inspectionQty != 0 && defectQty != 0)
        		{
        			defectiveRate = nexacro.round((defectQty / inspectionQty) * 100, 1);
        			obj.setColumn(nRow,"DEFECTRATE",defectiveRate);
        		}

        		var panelPerQty = 0;
        		var defecQtyPnl = 0;
        		panelPerQty = nexacro.toNumber(this.ds_lotInfoByLotIDOSP.getColumn(e.row, "PANELPERQTY"));

        		if (panelPerQty != 0 && defectQty != 0)
        		{
        			defecQtyPnl = nexacro.ceil(defectQty / panelPerQty);
        			obj.setColumn(nRow,"DEFECTQTYPNL",defecQtyPnl);
        		}
        	} //if e.columnid

        	// 원인 품목 ID, Version 세팅
        	if (e.columnid == "REASONCONSUMABLEDEFNAME")
         	{
        		var nRow = obj.rowposition;
        		obj.setColumn(nRow, "REASONCONSUMABLELOTID", "");
        		obj.setColumn(nRow, "REASONSEGMENTID", "");
        		obj.setColumn(nRow, "REASONAREAID", "");
        		obj.setColumn(nRow, "REASONSEGMENTNAME", "");

        		var cboRow  = this.pdv_reason.form.ds_reasonConsumable.rowposition;
        		var id      = this.pdv_reason.form.ds_reasonConsumable.getColumn(cboRow, "CONSUMABLEDEFID");
        		var version = this.pdv_reason.form.ds_reasonConsumable.getColumn(cboRow, "CONSUMABLEDEFVERSION");
        		var idVersion = this.pdv_reason.form.ds_reasonConsumable.getColumn(cboRow, "CONSUMABLEDEFIDVERSION");

         		obj.setColumn(nRow, "REASONCONSUMABLEDEFID", id);
         		obj.setColumn(nRow, "REASONCONSUMABLEDEFVERSION", version);

        		this.ds_defectReasonConsumable.filter("");
        		this.ds_defectReasonConsumable.filter("REASONCONSUMABLEDEFIDVERSION =='" + idVersion +"'");
        	}

        	//원인LOTID 선택시 원인공정 필터링
        	if (e.columnid == "REASONCONSUMABLELOTID")
        	{
        		var cboRow = this.ds_defectReasonConsumable.findRow("CONSUMABLELOTID", e.newvalue);
        		var consumableDefIdVersion = this.ds_defectReasonConsumable.getColumn(cboRow, "REASONCONSUMABLEDEFIDVERSION");
        		var consumableLotId = this.ds_defectReasonConsumable.getColumn(cboRow, "CONSUMABLELOTID");

                this.pdv_process.form.ds_defectReasonProcesssegment.filter("");
        		this.pdv_process.form.ds_defectReasonProcesssegment.filter("REASONCONSUMABLEDEFIDVERSION =='" + consumableDefIdVersion +"' && REASONCONSUMABLELOTID =='" + consumableLotId +"'");
        	}

        	// 원인공정 선택시 원인작업장 및 원인 Site 세팅
        	if (e.columnid == "REASONSEGMENTNAME")
        	{
        		var nRow = obj.rowposition;
        		var reasonLot = obj.getColumn(nRow, "REASONCONSUMABLELOTID");
        		var segmentId = e.newvalue
        		var cboRow = this.pdv_process.form.ds_defectReasonProcesssegment.rowposition;
        		var areaId = this.pdv_process.form.ds_defectReasonProcesssegment.getColumn(cboRow, "AREAID");
        		var areaName = this.pdv_process.form.ds_defectReasonProcesssegment.getColumn(cboRow, "AREANAME");
        		var plantId = this.pdv_process.form.ds_defectReasonProcesssegment.getColumn(cboRow, "PLANTID");
        		var consumableDefIdVersion = this.pdv_process.form.ds_defectReasonProcesssegment.getColumn(cboRow, "REASONCONSUMABLEDEFIDVERSION");
        		var consumableLotId = this.pdv_process.form.ds_defectReasonProcesssegment.getColumn(cboRow, "CONSUMABLELOTID");

        		obj.setColumn(nRow, "REASONAREAID", areaId);
        		obj.setColumn(nRow, "REASONAREANAME", areaName);
        		obj.setColumn(nRow, "REASONPLANTID", plantId);
        	}

        	obj.set_enableevent(true);
        };

         /*
         * 기능 : 탭3. 불량(폐기)처리 - 행추가
         */
        this.fn_addOSPInspDefect = function(obj,e)
        {
        	if (this.div_handOver.form.rdo_handOver.value == "HandOverProcessNon")
        	{
        	  this.gfn_Message("CantInputDefectQtyNoInspection", null, "warning", "ok"); //인계처리(무검사) 선택시 검사결과를 입력 할 수 없습니다.
        	  return false;
        	}

        	var nRow = this.ds_lotInfoByLotIDOSP.rowposition;

        	if (!this.nfn_isNull(this.parentLotId))
        	{
        		var objDataset = this.ds_OSPInspDefect;
        		if (objDataset == null) return;
        		var row = objDataset.addRow();

        	    objDataset.set_enableevent(false);
        		objDataset.setColumn(row, "LOTID",            this.parentLotId);
        	    objDataset.setColumn(row, "RESOURCEID",       this.parentLotId);
        	    objDataset.setColumn(row, "INSPECTIONQTY",    this.ds_lotInfoByLotIDOSP.getColumn(nRow, "PCSQTY"));
        	    objDataset.setColumn(row, "INSPECTIONQTYPNL", this.ds_lotInfoByLotIDOSP.getColumn(nRow, "PNLQTY"));
        	    objDataset.setColumn(row, "DEFECTQTY", 0);
        	    objDataset.setColumn(row, "DEFECTQTYPNL", 0);
        	    objDataset.setColumn(row, "DEFECTRATE", 0);
        		objDataset.set_enableevent(true);
        	}
        };

         /*
         * 기능 : 탭3. 불량(폐기)처리 -행삭제
         */
        this.fn_delOSPInspDefect = function(obj,e)
        {
        	var nRow = this.ds_OSPInspDefect.rowposition;
        	this.ds_OSPInspDefect.deleteRow(nRow);
        };

         /*
         * 기능 : 탭3. 불량(폐기)처리 -이미지추가
         */
        this.fn_addImgOSPInspDefect = function(obj,e)
        {
        	if (this.ds_OSPInspDefect.getRowCount() < 1) return;

        	if (this.jobType == "updateData")
        	{
        		this.gfn_Message("CanAddImageBeforeResultSave", null, "warning", "ok"); //검사 결과가 저장된 후에는 이미지를 추가 할 수 없습니다.
        		return false;
        	}

        	var nRow = this.ds_OSPInspDefect.rowposition;
        	var srcKey = this.resourceType
          	           + "|" + this.ds_parentLot.getColumn(0, "LOTID") + this.ds_OSPInspDefect.getColumn(nRow, "JOINCODE") + "D" + this.ds_parentLot.getColumn(0, "DEGREE")
        		       + "|*" ;

        	this.fn_callFilePopup("file_upload_defect","QAM", srcKey, "QAM_INSPECTIONDEFECT", "공정 수입검사 결과등록(불량(폐기))", "", nexacro.toNumber(this.fileUploadCount));
        };


        /*
         * 이벤트 : 원인 품목, 원인 공정 팝업 Combo 호출
         */
        this.tab_result_Tabpage3_grd_OSPInspDefect_onexpandup = function(obj,e)
        {
        	if ( e.row < 0) return false;

        	if (e.cell == obj.getBindCellIndex("body", "JOINNAME"))
        	{
        		this.fn_openPop("GRD_DEFECTCODE205","P00205");
        	}
        	else if (e.cell == obj.getBindCellIndex("body", "REASONCONSUMABLEDEFNAME")) //원인품목
        	{
        		var arrPos = obj.getCellRect(e.row, e.cell);
        		var nx = nexacro.toNumber(arrPos.left);
        		var ny = nexacro.toNumber(arrPos.bottom);
        		this.pdv_reason.trackPopupByComponent(obj,nx,ny); // ComboBox펼치기
        	}
        	else if (e.cell == obj.getBindCellIndex("body", "REASONSEGMENTNAME")) //원인공정
        	{
        		var arrPos = obj.getCellRect(e.row, e.cell);
        		var nx = nexacro.toNumber(arrPos.left);
        		var ny = nexacro.toNumber(arrPos.bottom);
        		this.pdv_process.trackPopupByComponent(obj,nx,ny); // ComboBox펼치기
        	}
        };

        /************************************************** Tabpage3 Event End **************************************************/

        this.fn_setSendEmail = function()
        {
        	if (this.ds_return.getColumn(0, "ISSENDEMAIL") == "1")
        	{
        		this.ds_sendEmailList.clearData();
        		this.ds_sendEmailList.insertRow(0);

        		this.ds_sendEmailList.setColumn(0, "PRODUCTDEFNAME",           this.ds_parentLot.getColumn(0, "PRODUCTDEFNAME"));
        		this.ds_sendEmailList.setColumn(0, "PRODUCTDEFID",             this.ds_parentLot.getColumn(0, "PRODUCTDEFID"))
        		this.ds_sendEmailList.setColumn(0, "PRODUCTDEFVERSION",        this.ds_parentLot.getColumn(0, "PRODUCTDEFVERSION"));
        		this.ds_sendEmailList.setColumn(0, "LOTID",                    this.ds_parentLot.getColumn(0, "LOTID"));
        		this.ds_sendEmailList.setColumn(0, "PROCESSSEGMENTCLASSNAME",  this.ds_parentLot.getColumn(0, "PROCESSSEGMENTCLASSNAME"));
        		this.ds_sendEmailList.setColumn(0, "PROCESSSEGMENTCLASSID",    this.ds_parentLot.getColumn(0, "PROCESSSEGMENTCLASSIDTOP"));
        		this.ds_sendEmailList.setColumn(0, "PROCESSSEGMENTNAME",       this.ds_parentLot.getColumn(0, "PROCESSSEGMENTNAME"));
        		this.ds_sendEmailList.setColumn(0, "PROCESSSEGMENTID",         this.ds_parentLot.getColumn(0, "PROCESSSEGMENTID"));
        		this.ds_sendEmailList.setColumn(0, "AREANAME",                 this.ds_parentLot.getColumn(0, "AREANAME"));
        		this.ds_sendEmailList.setColumn(0, "AREAID",                   this.ds_parentLot.getColumn(0, "AREAID"));
        		this.ds_sendEmailList.setColumn(0, "INSPECTIONRESULT",         "NG");
        		this.ds_sendEmailList.setColumn(0, "DEFECTNAME",               this.ds_return.getColumn(0, "EXTERIORNG"));
        		this.ds_sendEmailList.setColumn(0, "MEASUREVALUE",             this.ds_return.getColumn(0, "MEASURENG"));
        		this.ds_sendEmailList.setColumn(0, "REMARK",                   "");
        		this.ds_sendEmailList.setColumn(0, "USERID",                   this.userId);
        		this.ds_sendEmailList.setColumn(0, "TITLE",                    this.nfn_getDictionarynameUpper("OSPABNORMALTITLE"));
        		this.ds_sendEmailList.setColumn(0, "INSPECTION",	           this.resourceType);
        		this.ds_sendEmailList.setColumn(0, "LANGUAGETYPE",             this.lang);
        		this.ds_sendEmailList.setColumn(0, "PROCESSINGSTATUS",         this.div_inspect.form.cbo_processingStatus.text);
        		this.fn_callSendEamil(this.ds_sendEmailList);
        	}
        };

        this.fn_callSendEamil = function (pDataset)
        {
        	var arr = [];

        	arr.push(this.nfn_getDictionaryname("PRODUCTDEFNAME", true)); //0
        	arr.push(this.nfn_getDictionaryname("PRODUCTDEFID", true));
        	arr.push(this.nfn_getDictionaryname("PRODUCTDEFVERSION", true));
        	arr.push(pDataset.getColumn(0, "PRODUCTDEFNAME"));
        	arr.push(pDataset.getColumn(0, "PRODUCTDEFID"));
        	arr.push(pDataset.getColumn(0, "PRODUCTDEFVERSION"));
        	arr.push(this.nfn_getDictionaryname("LOTID", true)); //6
        	arr.push(pDataset.getColumn(0, "LOTID"));
        	arr.push(this.nfn_getDictionaryname("TOPPROCESSSEGMENTID", true));
        	arr.push(pDataset.getColumn(0, "PROCESSSEGMENTCLASSNAME"));
        	arr.push(pDataset.getColumn(0, "PROCESSSEGMENTCLASSID"));
        	arr.push(this.nfn_getDictionaryname("STANDARDSEGMENT", true));//11
        	arr.push(pDataset.getColumn(0, "PROCESSSEGMENTNAME"));
        	arr.push(pDataset.getColumn(0, "PROCESSSEGMENTID"));
        	arr.push(this.nfn_getDictionaryname("AREA", true));
        	arr.push(pDataset.getColumn(0, "AREANAME"));
        	arr.push(pDataset.getColumn(0, "AREAID"));                   //16
        	arr.push(this.nfn_getDictionaryname("INSPECTIONRESULT", true));
        	arr.push(pDataset.getColumn(0, "INSPECTIONRESULT"));
        	arr.push(this.nfn_getDictionaryname("DEFECTNAME", true));
        	arr.push(pDataset.getColumn(0, "DEFECTNAME"));
        	arr.push(this.nfn_getDictionaryname("MEASUREVALUE", true));//21
        	arr.push(pDataset.getColumn(0, "MEASUREVALUE"));
        	arr.push(this.nfn_getDictionaryname("ISHANDOVERPROCESS", true))
        	arr.push(pDataset.getColumn(0, "PROCESSINGSTATUS"));

            var title =  this.nfn_getDictionaryname('OSPABNORMALTITLE',true) ;//외주입고품(공정) 부적합 발행
        	var emailContent = "이상발생 정보" +  "<BR>"
        	                 + "○" + arr[0]  + "("  + arr[1]  + "/" + arr[2] + "):" + arr[3] + "(" + arr[4] + "/" + arr[5] + ")" + "<BR>"
        					 + "○" + arr[6]  + ":"  + arr[7]  + "<BR>"
        					 + "○" + arr[8]  + ":"  + arr[9]  + "(" + arr[10] + ")" + "<BR>"
        					 + "○" + arr[11] + ":"  + arr[12] + "(" + arr[13] + ")" + "<BR>"
        					 + "○" + arr[23] + ":"  + arr[24] + "<BR>"
        					 + "○" + arr[14] + ":"  + arr[15] + "(" + arr[16] + ")" + "<BR>"
        					 + "○" + arr[17] + ":"  + arr[18] + "<BR>"
        					 + "○" + arr[19] + ":"  + arr[20] + "<BR>"
        					 + "○" + arr[21] + ":"  + arr[22] + "<BR>"
        					 ;
        					 //+"비고" +  "<BR>"

        	var popupId = "SEND_EMAIL";
        	var oArg = {
        				  subject : title,         //제목
        				  contents : emailContent, //메일내용
        				  objAddrList : [],        //수신자 배열
        				  objUserList : [],        //수신자명 배열
        				  atchSrc : "",            //"BAS_ITEMMASTER", //업무에서 올려진 파일 첨부시 (테이블)
        				  atchSrcKey : ""          //"INTERFLEX|10400010A1|FA1"   //업무에서 올려진 파일 첨부시 (키값)
        	           };
        	 this.gfn_openPopup(popupId,"cmd::CMAM00100P.xfdl",oArg,"width=790,height=790");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.div_handOver.form.btn_area.addEventHandler("onclick",this.div_handOver_btn_area_onclick,this);
            this.div_handOver.form.edt_area.addEventHandler("onchanged",this.div_handOver_edt_area_onchanged,this);
            this.div_handOver.form.rdo_handOver.addEventHandler("onitemchanged",this.div_handOver_rdo_handOver_onitemchanged,this);
            this.div_inspect.form.edt_inspUser.addEventHandler("onchanged",this.div_inspect_edt_inspUser_onchanged,this);
            this.div_inspect.form.edt_inspUser.addEventHandler("onkeydown",this.div_inspect_edt_inspUser_onkeydown,this);
            this.div_inspect.form.btn_inspUser.addEventHandler("onclick",this.div_inspect_btn_inspUser_onclick,this);
            this.div_inspect.form.btn_selfInspLink.addEventHandler("onclick",this.fn_callSelfInsp,this);
            this.tab_result.Tabpage1.form.cbo_inspectionDecisionClass.addEventHandler("onitemchanged",this.tab_result_Tabpage1_cmb_inspectionDecisionClass_onitemchanged,this);
            this.tab_result.Tabpage1.form.msk_AQLInspectionQty.addEventHandler("canchange",this.tab_result_Tabpage1_msk_AQLInspectionQty_canchange,this);
            this.tab_result.Tabpage1.form.btn_addRowOSPInspectionExterior.addEventHandler("onclick",this.fn_addOSPInspectionExterior,this);
            this.tab_result.Tabpage1.form.btn_delRowOSPInspectionExterior.addEventHandler("onclick",this.fn_delOSPInspectionExterior,this);
            this.tab_result.Tabpage1.form.grd_OSPInspectionExterior.addEventHandler("onexpandup",this.tab_result_Tabpage1_grd_OSPInspectionExterior_onexpandup,this);
            this.tab_result.Tabpage1.form.btn_addImgOSPInspectionExterior.addEventHandler("onclick",this.fn_addImgOSPInspectionExterior,this);
            this.tab_result.Tabpage2.form.edt_measureUser.addEventHandler("onkeydown",this.tab_result_Tabpage2_edt_measureUser_onkeydown,this);
            this.tab_result.Tabpage2.form.edt_measureUser.addEventHandler("onchanged",this.tab_result_Tabpage2_edt_measureUser_onchanged,this);
            this.tab_result.Tabpage2.form.edt_equipmentid.addEventHandler("onkeydown",this.tab_result_Tabpage2_edt_measureUser_onkeydown,this);
            this.tab_result.Tabpage2.form.edt_equipmentid.addEventHandler("onchanged",this.tab_result_Tabpage2_edt_measureUser_onchanged,this);
            this.tab_result.Tabpage2.form.btn_addRowOSPMeasureByInspItem.addEventHandler("onclick",this.fn_addOSPMeasureByInspItem,this);
            this.tab_result.Tabpage2.form.btn_delRowOSPMeasureByInspItem.addEventHandler("onclick",this.fn_delOSPMeasureByInspItem,this);
            this.tab_result.Tabpage2.form.btn_addImgOSPInspectionMeasure.addEventHandler("onclick",this.fn_addImgOSPInspectionMeasure,this);
            this.tab_result.Tabpage2.form.btn_measureUser.addEventHandler("onclick",this.tab_result_Tabpage2_btn_measureUser_onclick,this);
            this.tab_result.Tabpage3.form.grd_OSPInspDefect.addEventHandler("onexpandup",this.tab_result_Tabpage3_grd_OSPInspDefect_onexpandup,this);
            this.tab_result.Tabpage3.form.btn_addRowOSPInspDefect.addEventHandler("onclick",this.fn_addOSPInspDefect,this);
            this.tab_result.Tabpage3.form.btn_delRowOSPInspDefect.addEventHandler("onclick",this.fn_delOSPInspDefect,this);
            this.tab_result.Tabpage3.form.btn_addImgOSPInspDefect.addEventHandler("onclick",this.fn_addImgOSPInspDefect,this);
            this.ds_OSPInspectionExterior.addEventHandler("cancolumnchange",this.ds_OSPInspectionExterior_cancolumnchange,this);
            this.ds_OSPInspectionExterior.addEventHandler("oncolumnchanged",this.ds_OSPInspectionExterior_oncolumnchanged,this);
            this.ds_OSPInspectionExterior.addEventHandler("onrowposchanged",this.ds_OSPInspectionExterior_onrowposchanged,this);
            this.ds_OSPInspectionMeasure.addEventHandler("onrowposchanged",this.ds_OSPInspectionMeasure_onrowposchanged,this);
            this.ds_OSPMeasureByInspItem.addEventHandler("oncolumnchanged",this.ds_OSPMeasureByInspItem_oncolumnchanged,this);
            this.ds_OSPInspDefect.addEventHandler("cancolumnchange",this.ds_OSPInspDefect_cancolumnchange,this);
            this.ds_OSPInspDefect.addEventHandler("oncolumnchanged",this.ds_OSPInspDefect_oncolumnchanged,this);
            this.ds_OSPInspDefect.addEventHandler("onrowposchanged",this.ds_OSPInspDefect_onrowposchanged,this);
        };
        this.loadIncludeScript("QAM00600P1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
