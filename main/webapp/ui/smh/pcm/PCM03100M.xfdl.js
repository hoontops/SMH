(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM03100M");
            this.set_titletext("LOT 이력조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tree", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LLEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_LotInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"NEXTPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"DUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STEPTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_LotRouting", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ROOTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBUSERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVELEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTLEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDLEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SENDLEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIMESUM\" type=\"STRING\" size=\"256\"/><Column id=\"CUM_LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CUM_DEFECTQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_LotSplitHistory", this);
            obj._setContents("<ColumnInfo><Column id=\"SPLITTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ROOTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DESTINATIONLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDQTY\" type=\"STRING\" size=\"256\"/><Column id=\"USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TXNTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ProductInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERSPEC\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"HSCODE\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"USELAYER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPERTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PACKINGQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENDUSER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPERPLATINGTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"UL_MARK\" type=\"STRING\" size=\"256\"/><Column id=\"MANUFACTUREDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"HG_FR\" type=\"STRING\" size=\"256\"/><Column id=\"ASSY\" type=\"STRING\" size=\"256\"/><Column id=\"OXIDE\" type=\"STRING\" size=\"256\"/><Column id=\"SEPARATINGPORTION\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCE\" type=\"STRING\" size=\"256\"/><Column id=\"PCSSIZEXAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PCSSIZEYAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"ARYSIZEXAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"ARYSIZEYAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEXAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEYAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PNLMM\" type=\"STRING\" size=\"256\"/><Column id=\"PCSMM\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSIZEXAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"INNERLAYER\" type=\"STRING\" size=\"256\"/><Column id=\"OUTERLAYER\" type=\"STRING\" size=\"256\"/><Column id=\"INNERLAYERCIRCUIT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTERLAYERCIRCUIT\" type=\"STRING\" size=\"256\"/><Column id=\"COPPERFOILUPLAYER\" type=\"STRING\" size=\"256\"/><Column id=\"COPPERFOILDOWNLAYER\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONNECTORDISTANCE\" type=\"STRING\" size=\"256\"/><Column id=\"CONNECTORTILTING\" type=\"STRING\" size=\"256\"/><Column id=\"DUMMY\" type=\"STRING\" size=\"256\"/><Column id=\"RELIABILITY\" type=\"STRING\" size=\"256\"/><Column id=\"HAZARDOUSSUBSTANCES\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREMENT\" type=\"STRING\" size=\"256\"/><Column id=\"INKSPECIFICATION\" type=\"STRING\" size=\"256\"/><Column id=\"OLBCIRCUIT\" type=\"STRING\" size=\"256\"/><Column id=\"ELONGATION\" type=\"STRING\" size=\"256\"/><Column id=\"PITCHBEFORE\" type=\"STRING\" size=\"256\"/><Column id=\"PITCHAFTER\" type=\"STRING\" size=\"256\"/><Column id=\"MINCL\" type=\"STRING\" size=\"256\"/><Column id=\"MINPSR\" type=\"STRING\" size=\"256\"/><Column id=\"SMD\" type=\"STRING\" size=\"256\"/><Column id=\"ISWEEKMNG\" type=\"STRING\" size=\"256\"/><Column id=\"PCSARY\" type=\"STRING\" size=\"256\"/><Column id=\"XOUT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_InspectionMeasure", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"FACTORYID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREDATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPEC\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ACTIONRESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Consumable", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"UOM\" type=\"STRING\" size=\"256\"/><Column id=\"REQUIREMENTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMEDQTY\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSACTIONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"SENDQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Durable", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASS\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Equipment", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKER\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Recipe", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPEID\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_RecipePara", this);
            obj._setContents("<ColumnInfo><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPEID\" type=\"STRING\" size=\"256\"/><Column id=\"RECIPEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PARAMETERID\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"LSL\" type=\"STRING\" size=\"256\"/><Column id=\"USL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Abnormal", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ABNORMALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"OCCURDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODECLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ABNORMALSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STOPRELEASEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSENDDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Defect", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ROOTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBUSERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEQUENCE2\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVELEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTLEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDLEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SENDLEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CUM_LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"CUM_DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CUM_DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUM_DEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"INBOUNDINSPECTION\" type=\"FLOAT\" size=\"256\"/><Column id=\"SELFINSPECTION\" type=\"FLOAT\" size=\"256\"/><Column id=\"AOI\" type=\"FLOAT\" size=\"256\"/><Column id=\"PROCESSSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CUM_PREDICTDEFECTRATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Inkjet", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_QR", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"QRNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Packing", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"BOXNO\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PACKINGDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Film", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_WTIME", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"TOPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOPROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"TOUSERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"STARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"STDTIMEPERMINUTE\" type=\"STRING\" size=\"256\"/><Column id=\"LIMITTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TOPROCESSSTATECD\" type=\"STRING\" size=\"256\"/><Column id=\"TOPROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"EXECUTETIME\" type=\"STRING\" size=\"256\"/><Column id=\"EXECUTETIMEPERMINUTE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Shipping", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"TXNGROUPHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE1\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTINRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONUSER\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ShippingDefect", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_MessageHistory", this);
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WRITEPROCESSSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"WRITEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISREAD\" type=\"STRING\" size=\"256\"/><Column id=\"CONTEXT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ChangeArea", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGEAREA\" type=\"STRING\" size=\"256\"/><Column id=\"TOAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGEUSER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_MessageDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"WRITEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Button("btn_help",null,"16","26","24","btn_reset:5",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","btn_help:5",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","110","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("LOT 이력조회");
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

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staLOTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","108","10",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_LOTID",null,"10","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","50","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","50","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            obj.set_hotkey("F2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"30","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","56","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","0","15","290",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"0","15","290","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Tab("tabLotHist","0",null,null,"247","0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("tbpSpec",this.div_work.form.tabLotHist);
            obj.set_text("제품 사양 정보");
            obj.set_tooltiptext("PRODUCTSPECINFO");
            this.div_work.form.tabLotHist.addChild(obj.name, obj);

            obj = new Grid("grdProductInfo","0","10",null,"210","0",null,null,null,null,null,this.div_work.form.tabLotHist.tbpSpec.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj.set_cssclass("grd_detail_Master");
            obj.set_selecttype("cell");
            obj.set_scrollbartype("none");
            obj.set_scrolltype("none");
            obj.set_binddataset("ds_ProductInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"90\"/></Columns><Rows><Row size=\"21\"/><Row size=\"21\"/><Row size=\"21\"/><Row size=\"21\"/><Row size=\"21\"/><Row size=\"21\"/><Row size=\"21\"/><Row size=\"21\"/><Row size=\"21\"/><Row size=\"21\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_head\" text=\"품목코드\" wordWrap=\"char\"/><Cell col=\"1\" textAlign=\"left\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"Rev\" wordWrap=\"char\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"4\" cssclass=\"cell_head\" text=\"품목명\" wordWrap=\"char\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"6\" cssclass=\"cell_head\" wordWrap=\"char\" text=\"고객명\"/><Cell col=\"7\" textAlign=\"left\" text=\"bind:CUSTOMERNAME\"/><Cell row=\"1\" cssclass=\"cell_head\" wordWrap=\"char\" text=\"END USER\"/><Cell row=\"1\" col=\"1\" textAlign=\"left\" text=\"bind:ENDUSER\"/><Cell row=\"1\" col=\"2\" cssclass=\"cell_head\" text=\"생산구분\" wordWrap=\"char\"/><Cell row=\"1\" col=\"3\" textAlign=\"left\" text=\"bind:PRODUCTIONTYPE\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_head\" text=\"제품 Type\" wordWrap=\"char\"/><Cell row=\"1\" col=\"5\" textAlign=\"left\" text=\"bind:PRODUCTTYPE\"/><Cell row=\"1\" col=\"6\" cssclass=\"cell_head\" text=\"투입구분\" wordWrap=\"char\"/><Cell row=\"1\" col=\"7\" textAlign=\"left\" text=\"bind:LOTINPUTTYPE\"/><Cell row=\"2\" cssclass=\"cell_head\" wordWrap=\"char\" text=\"작업구분\"/><Cell row=\"2\" col=\"1\" textAlign=\"left\" text=\"bind:JOBTYPE\"/><Cell row=\"2\" col=\"2\" cssclass=\"cell_head\" text=\"층수\" wordWrap=\"char\"/><Cell row=\"2\" col=\"3\" textAlign=\"left\" text=\"bind:LAYER\"/><Cell row=\"2\" col=\"4\" cssclass=\"cell_head\" wordWrap=\"char\" text=\"동박유형\"/><Cell row=\"2\" col=\"5\" textAlign=\"left\" text=\"bind:COPPERTYPE\"/><Cell row=\"2\" col=\"6\" cssclass=\"cell_head\" wordWrap=\"char\" text=\"동도금TYPE\"/><Cell row=\"2\" col=\"7\" textAlign=\"left\" text=\"bind:COPPERPLATINGTYPE\"/><Cell row=\"3\" cssclass=\"cell_head\" text=\"OXIDE\" wordWrap=\"char\"/><Cell row=\"3\" col=\"1\" textAlign=\"left\" text=\"bind:OXIDE\"/><Cell row=\"3\" col=\"2\" cssclass=\"cell_head\" wordWrap=\"char\" text=\"ASSY\"/><Cell row=\"3\" col=\"3\" textAlign=\"left\" text=\"bind:ASSY\"/><Cell row=\"3\" col=\"4\" cssclass=\"cell_head\" text=\"Roll/Sheet\" wordWrap=\"char\"/><Cell row=\"3\" col=\"5\" textAlign=\"left\" text=\"bind:RTRSHT\"/><Cell row=\"3\" col=\"6\" cssclass=\"cell_head\" text=\"임피던스\" wordWrap=\"char\"/><Cell row=\"3\" col=\"7\" textAlign=\"left\" text=\"bind:IMPEDANCE\"/><Cell row=\"4\" cssclass=\"cell_head\" text=\"PCS_SIZE(mm) X축\" wordWrap=\"char\"/><Cell row=\"4\" col=\"1\" textAlign=\"left\" text=\"bind:PCSSIZEXAXIS\"/><Cell row=\"4\" col=\"2\" cssclass=\"cell_head\" text=\"PCS_SIZE(mm) Y축\" wordWrap=\"char\"/><Cell row=\"4\" col=\"3\" textAlign=\"left\" text=\"bind:PCSSIZEYAXIS\"/><Cell row=\"4\" col=\"4\" cssclass=\"cell_head\" text=\"ARY SIZE(mm) X축\" wordWrap=\"char\"/><Cell row=\"4\" col=\"5\" textAlign=\"left\" text=\"bind:ARYSIZEXAXIS\"/><Cell row=\"4\" col=\"6\" cssclass=\"cell_head\" text=\"ARY SIZE(mm) Y축\" wordWrap=\"char\"/><Cell row=\"4\" col=\"7\" textAlign=\"left\" text=\"bind:ARYSIZEYAXIS\"/><Cell row=\"5\" cssclass=\"cell_head\" text=\"PNL_SIZE(mm) X축\" wordWrap=\"char\"/><Cell row=\"5\" col=\"1\" textAlign=\"left\" text=\"bind:PNLSIZEXAXIS\"/><Cell row=\"5\" col=\"2\" cssclass=\"cell_head\" text=\"PNL_SIZE(mm) Y축\" wordWrap=\"char\"/><Cell row=\"5\" col=\"3\" textAlign=\"left\" text=\"bind:PNLSIZEYAXIS\"/><Cell row=\"5\" col=\"4\" cssclass=\"cell_head\" text=\"PCS/PNL\" wordWrap=\"char\"/><Cell row=\"5\" col=\"5\" textAlign=\"left\" text=\"bind:PCSPNL\"/><Cell row=\"5\" col=\"6\" cssclass=\"cell_head\" text=\"PNL/mm\" wordWrap=\"char\"/><Cell row=\"5\" col=\"7\" textAlign=\"left\" text=\"bind:PNLMM\"/><Cell row=\"6\" cssclass=\"cell_head\" text=\"PCS/mm\" wordWrap=\"char\"/><Cell row=\"6\" col=\"1\" textAlign=\"left\" text=\"bind:PCSMM\"/><Cell row=\"6\" col=\"2\" cssclass=\"cell_head\" text=\"투입_SIZE(mm) X축\" wordWrap=\"char\"/><Cell row=\"6\" col=\"3\" textAlign=\"left\" text=\"bind:INPUTSIZEXAXIS\"/><Cell row=\"6\" col=\"4\" cssclass=\"cell_head\" text=\"내층동\" wordWrap=\"char\"/><Cell row=\"6\" col=\"5\" textAlign=\"left\" text=\"bind:INNERLAYER\"/><Cell row=\"6\" col=\"6\" cssclass=\"cell_head\" text=\"외층동\" wordWrap=\"char\"/><Cell row=\"6\" col=\"7\" textAlign=\"left\" text=\"bind:OUTERLAYER\"/><Cell row=\"7\" cssclass=\"cell_head\" text=\"내층회로\" wordWrap=\"char\"/><Cell row=\"7\" col=\"1\" textAlign=\"left\" text=\"bind:INNERLAYERCIRCUIT\"/><Cell row=\"7\" col=\"2\" cssclass=\"cell_head\" text=\"외층회로\" wordWrap=\"char\"/><Cell row=\"7\" col=\"3\" textAlign=\"left\" text=\"bind:OUTERLAYERCIRCUIT\"/><Cell row=\"7\" col=\"4\" cssclass=\"cell_head\" text=\"동박방향(↑)층\" wordWrap=\"char\"/><Cell row=\"7\" col=\"5\" textAlign=\"left\" text=\"bind:COPPERFOILUPLAYER\"/><Cell row=\"7\" col=\"6\" cssclass=\"cell_head\" text=\"동박방향(↓)층\" wordWrap=\"char\"/><Cell row=\"7\" col=\"7\" textAlign=\"left\" text=\"bind:COPPERFOILDOWNLAYER\"/><Cell row=\"8\" cssclass=\"cell_head\" wordWrap=\"char\" text=\"OLB회로\"/><Cell row=\"8\" col=\"1\" textAlign=\"left\" text=\"bind:OLBCIRCUIT\"/><Cell row=\"8\" col=\"2\" cssclass=\"cell_head\" wordWrap=\"char\" text=\"주차관리\"/><Cell row=\"8\" col=\"3\" textAlign=\"left\" text=\"bind:ISWEEKMNG\"/><Cell row=\"8\" col=\"4\" cssclass=\"cell_head\" text=\"치수측정\" wordWrap=\"char\"/><Cell row=\"8\" col=\"5\" textAlign=\"left\" text=\"bind:MEASUREMENT\"/><Cell row=\"8\" col=\"6\" cssclass=\"cell_head\" text=\"잉크사양\" wordWrap=\"char\"/><Cell row=\"8\" col=\"7\" textAlign=\"left\" text=\"bind:INKSPECIFICATION\"/><Cell row=\"9\" cssclass=\"cell_head\" text=\"PCS/ARY\" wordWrap=\"char\"/><Cell row=\"9\" col=\"1\" textAlign=\"left\" text=\"bind:PCSARY\"/><Cell row=\"9\" col=\"2\" cssclass=\"cell_head\" text=\"XOUT\" wordWrap=\"char\"/><Cell row=\"9\" col=\"3\" textAlign=\"left\" text=\"bind:XOUT\"/><Cell row=\"9\" col=\"4\"/><Cell row=\"9\" col=\"5\" textAlign=\"left\"/><Cell row=\"9\" col=\"6\"/><Cell row=\"9\" col=\"7\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tabLotHist.tbpSpec.addChild(obj.name, obj);

            obj = new Tabpage("tbpMeasure",this.div_work.form.tabLotHist);
            obj.set_text("계측값 정보");
            obj.set_tooltiptext("MEASUREMENTVALUEINFORMATION");
            this.div_work.form.tabLotHist.addChild(obj.name, obj);

            obj = new Static("staMeasure","0","0",null,"34","0",null,null,null,null,null,this.div_work.form.tabLotHist.tbpMeasure.form);
            obj.set_taborder("0");
            obj.set_text("계측값 정보");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabLotHist.tbpMeasure.addChild(obj.name, obj);

            obj = new Button("btn_xlUp_grdInspectionMeasure",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabLotHist.tbpMeasure.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tabLotHist.tbpMeasure.addChild(obj.name, obj);

            obj = new Grid("grdInspectionMeasure","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabLotHist.tbpMeasure.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_InspectionMeasure");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"145\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"측정일시\"/><Cell col=\"5\" text=\"작업장\"/><Cell col=\"6\" text=\"검사항목명\"/><Cell col=\"7\" text=\"규격\"/><Cell col=\"8\" text=\"판정결과\"/><Cell col=\"9\" text=\"조치사항\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTID\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MEASUREDATETIME\"/><Cell col=\"5\" text=\"bind:SUBNAME\"/><Cell col=\"6\" text=\"bind:INSPITEMNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:SPEC\"/><Cell col=\"8\" text=\"bind:INSPECTIONRESULT\"/><Cell col=\"9\" text=\"bind:ACTIONRESULT\"/></Band></Format></Formats>");
            this.div_work.form.tabLotHist.tbpMeasure.addChild(obj.name, obj);

            obj = new Tabpage("tbpConsume",this.div_work.form.tabLotHist);
            obj.set_text("자재 정보");
            obj.set_tooltiptext("MATERIALINFO");
            this.div_work.form.tabLotHist.addChild(obj.name, obj);

            obj = new Static("staConsume","0","0",null,"34","0",null,null,null,null,null,this.div_work.form.tabLotHist.tbpConsume.form);
            obj.set_taborder("0");
            obj.set_text("자재 정보");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabLotHist.tbpConsume.addChild(obj.name, obj);

            obj = new Grid("grdConsumable","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabLotHist.tbpConsume.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_Consumable");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"작업완료일\"/><Cell col=\"5\" text=\"작업장\"/><Cell col=\"6\" text=\"자재ID\"/><Cell col=\"7\" text=\"자재명\"/><Cell col=\"8\" text=\"UOM\"/><Cell col=\"9\" text=\"소요량\"/><Cell col=\"10\" text=\"자재 LOT No\"/><Cell col=\"11\" text=\"소모수량\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTID\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:WORKENDDATE\"/><Cell col=\"5\" text=\"bind:AREANAME\"/><Cell col=\"6\" text=\"bind:CONSUMABLEDEFID\"/><Cell col=\"7\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:UOM\"/><Cell col=\"9\" text=\"bind:REQUIREMENTQTY\" maskeditformat=\"#,###.#####\" displaytype=\"mask\"/><Cell col=\"10\" text=\"bind:CONSUMABLELOTID\"/><Cell col=\"11\" text=\"bind:CONSUMEDQTY\" maskeditformat=\"#,###.#####\" displaytype=\"mask\"/></Band></Format></Formats>");
            this.div_work.form.tabLotHist.tbpConsume.addChild(obj.name, obj);

            obj = new Button("btn_xlUp_grdConsumable",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabLotHist.tbpConsume.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tabLotHist.tbpConsume.addChild(obj.name, obj);

            obj = new Tabpage("tbpDurable",this.div_work.form.tabLotHist);
            obj.set_text("치공구");
            obj.set_tooltiptext("TOOLINFO");
            this.div_work.form.tabLotHist.addChild(obj.name, obj);

            obj = new Static("staDurable","0","0",null,"34","0",null,null,null,null,null,this.div_work.form.tabLotHist.tbpDurable.form);
            obj.set_taborder("0");
            obj.set_text("치공구 정보");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabLotHist.tbpDurable.addChild(obj.name, obj);

            obj = new Grid("grdDurable","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabLotHist.tbpDurable.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_Durable");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"작업완료일\"/><Cell col=\"5\" text=\"작업장\"/><Cell col=\"6\" text=\"치공구 구분\"/><Cell col=\"7\" text=\"치공구 Rev.\"/><Cell col=\"8\" text=\"Tool No.\"/><Cell col=\"9\" text=\"누적타수\"/><Cell col=\"10\" text=\"보증타수\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTID\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:WORKENDDATE\"/><Cell col=\"5\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:DURABLECLASS\"/><Cell col=\"7\" text=\"bind:DURABLEDEFVERSION\"/><Cell col=\"8\" text=\"bind:DURABLELOTID\"/><Cell col=\"9\" text=\"bind:TOTALUSEDCOUNT\" displaytype=\"mask\" maskeditformat=\"#,###.##\"/><Cell col=\"10\" text=\"bind:USEDLIMIT\" displaytype=\"mask\" maskeditformat=\"#,###.##\"/></Band></Format></Formats>");
            this.div_work.form.tabLotHist.tbpDurable.addChild(obj.name, obj);

            obj = new Button("btn_xlUp_grdDurable",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabLotHist.tbpDurable.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tabLotHist.tbpDurable.addChild(obj.name, obj);

            obj = new Tabpage("tbpEquipment",this.div_work.form.tabLotHist);
            obj.set_text("설비");
            obj.set_tooltiptext("EQUIPMENT");
            this.div_work.form.tabLotHist.addChild(obj.name, obj);

            obj = new Static("staEquipment","0","0",null,"34","0",null,null,null,null,null,this.div_work.form.tabLotHist.tbpEquipment.form);
            obj.set_taborder("0");
            obj.set_text("설비");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabLotHist.tbpEquipment.addChild(obj.name, obj);

            obj = new Grid("grdEquipment","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabLotHist.tbpEquipment.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_Equipment");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"상태\"/><Cell col=\"4\" text=\"공정명\"/><Cell col=\"5\" text=\"작업장\"/><Cell col=\"6\" text=\"설비명\"/><Cell col=\"7\" text=\"작업자\"/><Cell col=\"8\" text=\"작업시작시간\"/><Cell col=\"9\" text=\"작업완료일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTID\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\"/><Cell col=\"3\" text=\"bind:STATE\"/><Cell col=\"4\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:AREANAME\"/><Cell col=\"6\" text=\"bind:EQUIPMENTNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:WORKER\"/><Cell col=\"8\" text=\"bind:WORKSTARTTIME\"/><Cell col=\"9\" text=\"bind:WORKENDDATE\"/></Band></Format></Formats>");
            this.div_work.form.tabLotHist.tbpEquipment.addChild(obj.name, obj);

            obj = new Button("btn_xlUp_grdEquipment",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabLotHist.tbpEquipment.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tabLotHist.tbpEquipment.addChild(obj.name, obj);

            obj = new Tabpage("tbpAbnormal",this.div_work.form.tabLotHist);
            obj.set_text("이상발생");
            obj.set_tooltiptext("ABNORMAL");
            this.div_work.form.tabLotHist.addChild(obj.name, obj);

            obj = new Static("stagrdAbnormal","0","0",null,"34","0",null,null,null,null,null,this.div_work.form.tabLotHist.tbpAbnormal.form);
            obj.set_taborder("0");
            obj.set_text("이상발생");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabLotHist.tbpAbnormal.addChild(obj.name, obj);

            obj = new Grid("grdAbnormal","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabLotHist.tbpAbnormal.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_Abnormal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"발생일시\"/><Cell col=\"5\" text=\"작업장\"/><Cell col=\"6\" text=\"이상발생 구분\"/><Cell col=\"7\" text=\"사유코드 그룹 명\"/><Cell col=\"8\" text=\"사유코드 명\"/><Cell col=\"9\" text=\"이상발생현황\"/><Cell col=\"10\" text=\"해제일시\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTID\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:OCCURDATE\"/><Cell col=\"5\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:ABNORMALTYPE\"/><Cell col=\"7\" text=\"bind:REASONCODECLASSNAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:REASONCODENAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:ABNORMALSTATUS\"/><Cell col=\"10\" text=\"bind:STOPRELEASEDATE\"/></Band></Format></Formats>");
            this.div_work.form.tabLotHist.tbpAbnormal.addChild(obj.name, obj);

            obj = new Button("btn_xlUp_grdAbnormal",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabLotHist.tbpAbnormal.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tabLotHist.tbpAbnormal.addChild(obj.name, obj);

            obj = new Tabpage("tbpDefect",this.div_work.form.tabLotHist);
            obj.set_text("불량");
            obj.set_tooltiptext("DEFECT");
            this.div_work.form.tabLotHist.addChild(obj.name, obj);

            obj = new Static("staDefect","0","0",null,"34","0",null,null,null,null,null,this.div_work.form.tabLotHist.tbpDefect.form);
            obj.set_taborder("0");
            obj.set_text("불량");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabLotHist.tbpDefect.addChild(obj.name, obj);

            obj = new Grid("grdDefect","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabLotHist.tbpDefect.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_Defect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" colspan=\"5\" text=\"작업공정\" cssclass=\"cell_headMaster\" tooltiptext=\"WORKPROCESSSEGMENT\"/><Cell col=\"6\" text=\"불량\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECT\"/><Cell col=\"7\" colspan=\"2\" text=\"불량율\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECTIVERATE\"/><Cell col=\"9\" colspan=\"3\" text=\"자주검사\" cssclass=\"cell_headMaster\" tooltiptext=\"SELFINSPECTION\"/><Cell col=\"12\" colspan=\"2\" text=\"예상불량율\" cssclass=\"cell_headMaster\" tooltiptext=\"PREDICTDEFECTRATE\"/><Cell row=\"1\" col=\"1\" text=\"Lot No.\"/><Cell row=\"1\" col=\"2\" text=\"공정순서\"/><Cell row=\"1\" col=\"3\" text=\"공정명\"/><Cell row=\"1\" col=\"4\" text=\"작업장\"/><Cell row=\"1\" col=\"5\" text=\"투입수량(PCS)\"/><Cell row=\"1\" col=\"6\" text=\"불량수량\"/><Cell row=\"1\" col=\"7\" text=\"불량율\"/><Cell row=\"1\" col=\"8\" text=\"누적 불량율\"/><Cell row=\"1\" col=\"9\" text=\"입고검사\" tooltiptext=\"INBOUNDINSPECTION\"/><Cell row=\"1\" col=\"10\" text=\"자주검사(출하)\" tooltiptext=\"SELFINSPECTIONSHIP\"/><Cell row=\"1\" col=\"11\" text=\"AOT/BBT 불량\"/><Cell row=\"1\" col=\"12\" text=\"공정\"/><Cell row=\"1\" col=\"13\" text=\"누적불량율\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTID\"/><Cell col=\"2\" text=\"bind:PROCESSSEQUENCE2\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:AREANAME\"/><Cell col=\"5\" text=\"bind:INPUTPCSQTY\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:DEFECTQTY\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:DEFECTRATE\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:CUM_DEFECTRATE\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:INBOUNDINSPECTION\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:SELFINSPECTION\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:AOI\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:PROCESSSEGMENT\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:CUM_PREDICTDEFECTRATE\" textAlign=\"right\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\" tooltiptext=\"TOTALAMOUNT\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" expr=\"dataset.getSum(&quot;DEFECTQTY&quot;) \" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\" expr=\"dataset.getSum(&quot;INBOUNDINSPECTION&quot;) \" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"10\" displaytype=\"mask\" maskeditformat=\"#,##0\" expr=\"dataset.getSum(&quot;SELFINSPECTION&quot;) \"/><Cell col=\"11\" displaytype=\"mask\" maskeditformat=\"#,##0\" expr=\"dataset.getSum(&quot;AOI&quot;) \"/><Cell col=\"12\"/><Cell col=\"13\"/></Band></Format></Formats>");
            this.div_work.form.tabLotHist.tbpDefect.addChild(obj.name, obj);

            obj = new Button("btn_xlUp_grdDefect",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabLotHist.tbpDefect.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tabLotHist.tbpDefect.addChild(obj.name, obj);

            obj = new Tabpage("tbpWeek",this.div_work.form.tabLotHist);
            obj.set_text("주차");
            obj.set_tooltiptext("WEEK");
            this.div_work.form.tabLotHist.addChild(obj.name, obj);

            obj = new Static("staInkjet","0","0","473","25",null,null,null,null,null,null,this.div_work.form.tabLotHist.tbpWeek.form);
            obj.set_taborder("0");
            obj.set_text("인쇄주차");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabLotHist.tbpWeek.addChild(obj.name, obj);

            obj = new Grid("grdQR","50.00%","26",null,"83","0",null,null,null,null,null,this.div_work.form.tabLotHist.tbpWeek.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_QR");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"작업완료일\"/><Cell col=\"5\" text=\"작업장\"/><Cell col=\"6\" text=\"QRNO\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTID\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"4\" text=\"bind:WORKENDDATE\"/><Cell col=\"5\" text=\"bind:AREANAME\"/><Cell col=\"6\" text=\"bind:QRNO\"/></Band></Format></Formats>");
            this.div_work.form.tabLotHist.tbpWeek.addChild(obj.name, obj);

            obj = new Grid("grdInkjet","0","26",null,"83","grdQR:10",null,null,null,null,null,this.div_work.form.tabLotHist.tbpWeek.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_Inkjet");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"작업완료일\"/><Cell col=\"5\" text=\"작업장\"/><Cell col=\"6\" text=\"주차\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTID\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"4\" text=\"bind:WORKENDDATE\"/><Cell col=\"5\" text=\"bind:AREANAME\"/><Cell col=\"6\" text=\"bind:WEEK\"/></Band></Format></Formats>");
            this.div_work.form.tabLotHist.tbpWeek.addChild(obj.name, obj);

            obj = new Static("staQR","50.42%","0","475","25",null,null,null,null,null,null,this.div_work.form.tabLotHist.tbpWeek.form);
            obj.set_taborder("3");
            obj.set_text("QR");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabLotHist.tbpWeek.addChild(obj.name, obj);

            obj = new Button("btn_xlUp_grdInkjet",null,"2","29","24","grdQR:10",null,null,null,null,null,this.div_work.form.tabLotHist.tbpWeek.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tabLotHist.tbpWeek.addChild(obj.name, obj);

            obj = new Button("btn_xlUp_grdQR",null,"2","29","24","2",null,null,null,null,null,this.div_work.form.tabLotHist.tbpWeek.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tabLotHist.tbpWeek.addChild(obj.name, obj);

            obj = new Static("staPacking","0","113",null,"25","grdQR:10",null,null,null,null,null,this.div_work.form.tabLotHist.tbpWeek.form);
            obj.set_taborder("6");
            obj.set_text("포장주차");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabLotHist.tbpWeek.addChild(obj.name, obj);

            obj = new Grid("grdPacking","0","142",null,"79","grdQR:10",null,null,null,null,null,this.div_work.form.tabLotHist.tbpWeek.form);
            obj.set_taborder("7");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_Packing");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"BoxNo\"/><Cell col=\"3\" text=\"주차\"/><Cell col=\"4\" text=\"수량\"/><Cell col=\"5\" text=\"포장일자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTID\"/><Cell col=\"2\" text=\"bind:BOXNO\"/><Cell col=\"3\" text=\"bind:WEEK\"/><Cell col=\"4\" text=\"bind:QTY\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"5\" text=\"bind:PACKINGDATE\"/></Band></Format></Formats>");
            this.div_work.form.tabLotHist.tbpWeek.addChild(obj.name, obj);

            obj = new Button("btn_xlUp_grdPacking",null,"115","29","24","grdQR:10",null,null,null,null,null,this.div_work.form.tabLotHist.tbpWeek.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tabLotHist.tbpWeek.addChild(obj.name, obj);

            obj = new Tabpage("tbpWTIME",this.div_work.form.tabLotHist);
            obj.set_text("W-Time");
            this.div_work.form.tabLotHist.addChild(obj.name, obj);

            obj = new Static("staWTIME","0","0",null,"34","0",null,null,null,null,null,this.div_work.form.tabLotHist.tbpWTIME.form);
            obj.set_taborder("0");
            obj.set_text("W-TIME");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabLotHist.tbpWTIME.addChild(obj.name, obj);

            obj = new Button("btn_xlUp_grdWTIME",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabLotHist.tbpWTIME.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tabLotHist.tbpWTIME.addChild(obj.name, obj);

            obj = new Grid("grdWTIME","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabLotHist.tbpWTIME.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_WTIME");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"TO 공정수순\"/><Cell col=\"5\" text=\"TO 공정명\"/><Cell col=\"6\" text=\"공정진행상태\"/><Cell col=\"7\" text=\"시작시간\"/><Cell col=\"8\" text=\"기준시간(분)\"/><Cell col=\"9\" text=\"제한시간\"/><Cell col=\"10\" text=\"to공정진행상태\"/><Cell col=\"11\" text=\"실행시간\"/><Cell col=\"12\" text=\"실행시간(분)\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTID\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TOUSERSEQUENCE\"/><Cell col=\"5\" text=\"bind:TOPROCESSSEGMENTNAME\"/><Cell col=\"6\" text=\"bind:PROCESSSTATE\"/><Cell col=\"7\" text=\"bind:STARTTIME\"/><Cell col=\"8\" text=\"bind:STDTIMEPERMINUTE\"/><Cell col=\"9\" text=\"bind:LIMITTIME\"/><Cell col=\"10\" text=\"bind:TOPROCESSSTATE\"/><Cell col=\"11\" text=\"bind:EXECUTETIME\"/><Cell col=\"12\" text=\"bind:EXECUTETIMEPERMINUTE\"/></Band></Format></Formats>");
            this.div_work.form.tabLotHist.tbpWTIME.addChild(obj.name, obj);

            obj = new Tabpage("tbpShipping",this.div_work.form.tabLotHist);
            obj.set_text("출하 정보");
            obj.set_tooltiptext("SHIPPINGINFO");
            this.div_work.form.tabLotHist.addChild(obj.name, obj);

            obj = new Static("staShippingDefect","64.93%","0",null,"34","0",null,null,null,null,null,this.div_work.form.tabLotHist.tbpShipping.form);
            obj.set_taborder("4");
            obj.set_text("불량 현황");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabLotHist.tbpShipping.addChild(obj.name, obj);

            obj = new Static("staShipping","0","0",null,"34","staShippingDefect:10",null,null,null,null,null,this.div_work.form.tabLotHist.tbpShipping.form);
            obj.set_taborder("0");
            obj.set_text("출하 정보");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabLotHist.tbpShipping.addChild(obj.name, obj);

            obj = new Grid("grdShippingDefect","64.93%","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabLotHist.tbpShipping.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_ShippingDefect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"불량 코드\"/><Cell col=\"3\" text=\"불량코드 명\"/><Cell col=\"4\" text=\"불량 수량\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTID\"/><Cell col=\"2\" text=\"bind:DEFECTCODE\"/><Cell col=\"3\" text=\"bind:DEFECTCODENAME\"/><Cell col=\"4\" text=\"bind:DEFECTQTY\" displaytype=\"mask\" maskeditformat=\"#,###.##\"/></Band></Format></Formats>");
            this.div_work.form.tabLotHist.tbpShipping.addChild(obj.name, obj);

            obj = new Grid("grdShipping","0","34",null,null,"grdShippingDefect:10","0",null,null,null,null,this.div_work.form.tabLotHist.tbpShipping.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_Shipping");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"50\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"차수\"/><Cell col=\"3\" text=\"검사일\"/><Cell col=\"4\" text=\"작업장\"/><Cell col=\"5\" text=\"판정결과\"/><Cell col=\"6\" text=\"검사자명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTID\"/><Cell col=\"2\" text=\"bind:DEGREE1\"/><Cell col=\"3\" text=\"bind:INSPECTDATE\"/><Cell col=\"4\" text=\"bind:AREANAME\"/><Cell col=\"5\" text=\"bind:INSPECTINRESULT\"/><Cell col=\"6\" text=\"bind:INSPECTORNAME\"/></Band></Format></Formats>");
            this.div_work.form.tabLotHist.tbpShipping.addChild(obj.name, obj);

            obj = new Button("btn_xlUp_grdShippingDefect",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabLotHist.tbpShipping.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tabLotHist.tbpShipping.addChild(obj.name, obj);

            obj = new Button("btn_xlUp_grdShipping",null,"6","29","24","staShippingDefect:10",null,null,null,null,null,this.div_work.form.tabLotHist.tbpShipping.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tabLotHist.tbpShipping.addChild(obj.name, obj);

            obj = new Tabpage("tbpMessage",this.div_work.form.tabLotHist);
            obj.set_text("메시지 정보");
            obj.set_tooltiptext("MESSAGEINFO");
            this.div_work.form.tabLotHist.addChild(obj.name, obj);

            obj = new Static("staMessage","0","0",null,"34","346",null,null,null,null,null,this.div_work.form.tabLotHist.tbpMessage.form);
            obj.set_taborder("0");
            obj.set_text("메시지 정보");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("MESSAGEINFO");
            this.div_work.form.tabLotHist.tbpMessage.addChild(obj.name, obj);

            obj = new Div("divMessage",null,"34","428",null,"0","0",null,null,null,null,this.div_work.form.tabLotHist.tbpMessage.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.form.tabLotHist.tbpMessage.addChild(obj.name, obj);

            obj = new Static("staBack","0","5",null,null,"0","0",null,null,null,null,this.div_work.form.tabLotHist.tbpMessage.form.divMessage.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_detailBg");
            this.div_work.form.tabLotHist.tbpMessage.form.divMessage.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","80","31",null,null,null,null,null,null,this.div_work.form.tabLotHist.tbpMessage.form.divMessage.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tabLotHist.tbpMessage.form.divMessage.addChild(obj.name, obj);

            obj = new Edit("edt_Title","85","5",null,"20","5",null,null,null,null,null,this.div_work.form.tabLotHist.tbpMessage.form.divMessage.form);
            obj.set_taborder("2");
            this.div_work.form.tabLotHist.tbpMessage.form.divMessage.addChild(obj.name, obj);

            obj = new TextArea("edt_Comment","85","36",null,null,"5","5",null,null,null,null,this.div_work.form.tabLotHist.tbpMessage.form.divMessage.form);
            obj.set_taborder("3");
            this.div_work.form.tabLotHist.tbpMessage.form.divMessage.addChild(obj.name, obj);

            obj = new Static("staComment","0","31","80",null,null,"0",null,null,null,null,this.div_work.form.tabLotHist.tbpMessage.form.divMessage.form);
            obj.set_taborder("4");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tabLotHist.tbpMessage.form.divMessage.addChild(obj.name, obj);

            obj = new Grid("grdMessage","0","34",null,null,"divMessage:10","0",null,null,null,null,this.div_work.form.tabLotHist.tbpMessage.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_MessageHistory");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"작업장\"/><Cell col=\"5\" text=\"메시지유형\"/><Cell col=\"6\" text=\"등록자\"/><Cell col=\"7\" text=\"등록일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTID\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"4\" text=\"bind:AREANAME\"/><Cell col=\"5\" text=\"bind:MESSAGETYPE\"/><Cell col=\"6\" text=\"bind:WRITER\"/><Cell col=\"7\" text=\"bind:WRITEDATE\"/></Band></Format></Formats>");
            this.div_work.form.tabLotHist.tbpMessage.addChild(obj.name, obj);

            obj = new Button("btn_xlUp_grdMessage",null,"6","29","24","divMessage:10",null,null,null,null,null,this.div_work.form.tabLotHist.tbpMessage.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tabLotHist.tbpMessage.addChild(obj.name, obj);

            obj = new Static("staMessageInput","btn_xlUp_grdMessage:10","0","335","34",null,null,null,null,null,null,this.div_work.form.tabLotHist.tbpMessage.form);
            obj.set_taborder("4");
            obj.set_text("메시지 상세");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("MESSAGEDETAIL");
            this.div_work.form.tabLotHist.tbpMessage.addChild(obj.name, obj);

            obj = new Tabpage("tbpChangeArea",this.div_work.form.tabLotHist);
            obj.set_text("작업장 변경");
            obj.set_tooltiptext("TRANSAREA");
            this.div_work.form.tabLotHist.addChild(obj.name, obj);

            obj = new Static("staChangeArea","0","0",null,"34","346",null,null,null,null,null,this.div_work.form.tabLotHist.tbpChangeArea.form);
            obj.set_taborder("0");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabLotHist.tbpChangeArea.addChild(obj.name, obj);

            obj = new Button("btn_xlUp_grdChangeArea",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabLotHist.tbpChangeArea.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tabLotHist.tbpChangeArea.addChild(obj.name, obj);

            obj = new Grid("grdChangeArea","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabLotHist.tbpChangeArea.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_ChangeArea");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"이전작업장\"/><Cell col=\"5\" text=\"TO 작업장\"/><Cell col=\"6\" text=\"변경일\"/><Cell col=\"7\" text=\"처리자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTID\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"4\" text=\"bind:PREVAREANAME\"/><Cell col=\"5\" text=\"bind:TOAREANAME\"/><Cell col=\"6\" text=\"bind:CHANGEDATE\"/><Cell col=\"7\" text=\"bind:CHANGEUSER\"/></Band></Format></Formats>");
            this.div_work.form.tabLotHist.tbpChangeArea.addChild(obj.name, obj);

            obj = new Grid("grdTreeLotGeneal","0","129","270",null,null,"tabLotHist:5",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_tree");
            obj.set_binddataset("ds_tree");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:LOTID\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LLEVEL\" cssclass=\"expr:LLEVEL == 1? &quot;cell_blue&quot; : LLEVEL == 2? &quot;cell_orange&quot; : &quot;&quot;\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("staTreeLotGeneal","0","95","230","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("Lot 계보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("LOTHISTORY");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tabMain","grdTreeLotGeneal:10","95",null,null,"0","tabLotHist:5",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("tpgWorkResult",this.div_work.form.tabMain);
            obj.set_text("생산실적");
            obj.set_tooltiptext("PRODUCTIONRESULT");
            this.div_work.form.tabMain.addChild(obj.name, obj);

            obj = new Static("staLotRouting","0","0","52","34","666",null,null,null,null,null,this.div_work.form.tabMain.tpgWorkResult.form);
            obj.set_taborder("0");
            obj.set_text("Routing");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.form.tabMain.tpgWorkResult.addChild(obj.name, obj);

            obj = new Grid("grdLotRouting","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabMain.tpgWorkResult.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_LotRouting");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\" band=\"left\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" colspan=\"7\" text=\"제조 이력\" cssclass=\"cell_headMaster\" tooltiptext=\"MANUFACTURINGHISTORY\"/><Cell col=\"8\" colspan=\"4\" text=\"작업일\" cssclass=\"cell_headMaster\" tooltiptext=\"WORKDATE\"/><Cell col=\"12\" colspan=\"2\" text=\"인수수량\" cssclass=\"cell_headMaster\" tooltiptext=\"INQTY\"/><Cell col=\"14\" colspan=\"2\" text=\"작업시작\" cssclass=\"cell_headMaster\" tooltiptext=\"WORKSTART\"/><Cell col=\"16\" colspan=\"2\" text=\"작업완료\" cssclass=\"cell_headMaster\" tooltiptext=\"WORKEND\"/><Cell col=\"18\" colspan=\"2\" text=\"인계대기\" cssclass=\"cell_headMaster\" tooltiptext=\"WAITFORSEND\"/><Cell col=\"20\" colspan=\"2\" text=\"재공현황\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPLIST\"/><Cell col=\"22\" colspan=\"7\" text=\"리드타임\" cssclass=\"cell_headMaster\" tooltiptext=\"LEADTIME\"/><Cell col=\"29\" colspan=\"2\" text=\"불량\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECT\"/><Cell row=\"1\" col=\"1\" text=\"Lot No.\"/><Cell row=\"1\" col=\"2\" text=\"공정순서\"/><Cell row=\"1\" col=\"3\" text=\"작업구분\"/><Cell row=\"1\" col=\"4\" text=\"Rev\"/><Cell row=\"1\" col=\"5\" text=\"공정명\"/><Cell row=\"1\" col=\"6\" text=\"Site ID\"/><Cell row=\"1\" col=\"7\" text=\"작업장\"/><Cell row=\"1\" col=\"8\" text=\"인수일\"/><Cell row=\"1\" col=\"9\" text=\"시작일\"/><Cell row=\"1\" col=\"10\" text=\"작업완료일\"/><Cell row=\"1\" col=\"11\" text=\"인계일\"/><Cell row=\"1\" col=\"12\" text=\"PCS\"/><Cell row=\"1\" col=\"13\" text=\"PNL\"/><Cell row=\"1\" col=\"14\" text=\"PCS\"/><Cell row=\"1\" col=\"15\" text=\"PNL\"/><Cell row=\"1\" col=\"16\" text=\"PCS\"/><Cell row=\"1\" col=\"17\" text=\"PNL\"/><Cell row=\"1\" col=\"18\" text=\"PCS\"/><Cell row=\"1\" col=\"19\" text=\"PNL\"/><Cell row=\"1\" col=\"20\" text=\"PCS\"/><Cell row=\"1\" col=\"21\" text=\"PNL\"/><Cell row=\"1\" col=\"22\" text=\"인수대기\" tooltiptext=\"WAITFORRECEIVE\"/><Cell row=\"1\" col=\"23\" text=\"작업시작\" tooltiptext=\"WORKSTART\"/><Cell row=\"1\" col=\"24\" text=\"작업완료\" tooltiptext=\"WORKEND\"/><Cell row=\"1\" col=\"25\" text=\"인계대기\" tooltiptext=\"WAITFORSEND\"/><Cell row=\"1\" col=\"26\" text=\"합계\" tooltiptext=\"SUM\"/><Cell row=\"1\" col=\"27\" text=\"L/T (일)\" tooltiptext=\"LTDAY_LEADTIME\"/><Cell row=\"1\" col=\"28\" text=\"누적 L/T(일)\" tooltiptext=\"CUMDAY_LEADTIME\"/><Cell row=\"1\" col=\"29\" text=\"불량 수량\"/><Cell row=\"1\" col=\"30\" text=\"누적 불량\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTID\"/><Cell col=\"2\" text=\"bind:PROCESSSEQUENCE\"/><Cell col=\"3\" text=\"bind:WORKTYPE\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\" cssclass=\"dataset.getColumn(currow,&apos;PRODUCTDEFVERSION&apos;) != dataset.getColumn(currow-1,&apos;PRODUCTDEFVERSION&apos;) ? &quot;cell_red&quot;:&quot;&quot;\"/><Cell col=\"5\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PLANTID\"/><Cell col=\"7\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:RECEIVEDATE\"/><Cell col=\"9\" text=\"bind:STARTDATE\"/><Cell col=\"10\" text=\"bind:WORKENDDATE\"/><Cell col=\"11\" text=\"bind:LOTSENDDATE\"/><Cell col=\"12\" text=\"bind:RECEIVEPCSQTY\"/><Cell col=\"13\" text=\"bind:RECEIVEPANELQTY\"/><Cell col=\"14\" text=\"bind:WORKSTARTPCSQTY\"/><Cell col=\"15\" text=\"bind:WORKSTARTPANELQTY\"/><Cell col=\"16\" text=\"bind:WORKENDPCSQTY\"/><Cell col=\"17\" text=\"bind:WORKENDPANELQTY\"/><Cell col=\"18\" text=\"bind:SENDPCSQTY\"/><Cell col=\"19\" text=\"bind:SENDPANELQTY\"/><Cell col=\"20\" text=\"bind:QTY\" tooltiptext=\"PCS\"/><Cell col=\"21\" text=\"bind:PANELQTY\"/><Cell col=\"22\" text=\"bind:RECEIVELEADTIME\" displaytype=\"mask\" maskeditformat=\"#,##0.00\"/><Cell col=\"23\" text=\"bind:WORKSTARTLEADTIME\" displaytype=\"mask\" maskeditformat=\"#,##0.00\"/><Cell col=\"24\" text=\"bind:WORKENDLEADTIME\" displaytype=\"mask\" maskeditformat=\"#,##0.00\"/><Cell col=\"25\" text=\"bind:SENDLEADTIME\" displaytype=\"mask\" maskeditformat=\"#,##0.00\"/><Cell col=\"26\" text=\"bind:LEADTIME\" displaytype=\"mask\" maskeditformat=\"#,##0.00\"/><Cell col=\"27\" text=\"bind:LEADTIMESUM\" displaytype=\"mask\" maskeditformat=\"#,##0.00\"/><Cell col=\"28\" text=\"bind:CUM_LEADTIME\" displaytype=\"mask\" maskeditformat=\"#,##0.00\"/><Cell col=\"29\" text=\"bind:DEFECTQTY\"/><Cell col=\"30\" text=\"bind:CUM_DEFECTQTY\"/></Band></Format></Formats>");
            this.div_work.form.tabMain.tpgWorkResult.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_LotRouting","staLotRouting:10","0","140","34",null,null,null,null,null,null,this.div_work.form.tabMain.tpgWorkResult.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabMain.tpgWorkResult.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdLotRouting",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabMain.tpgWorkResult.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabMain.tpgWorkResult.addChild(obj.name, obj);

            obj = new Tabpage("tpgLotSplitHist",this.div_work.form.tabMain);
            obj.set_text("LOT 분할 이력");
            obj.set_tooltiptext("LOTSPLITHIST");
            this.div_work.form.tabMain.addChild(obj.name, obj);

            obj = new Static("StaticLotSplitHist","0","0","92","34","626",null,null,null,null,null,this.div_work.form.tabMain.tpgLotSplitHist.form);
            obj.set_taborder("0");
            obj.set_text("LOT 분할 이력");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("LOTSPLITHIST");
            this.div_work.form.tabMain.tpgLotSplitHist.addChild(obj.name, obj);

            obj = new Grid("grdLotSplitHistory","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabMain.tpgLotSplitHist.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_LotSplitHistory");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"171\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"SPLITTYPE\"/><Cell col=\"2\" text=\"ROOTLOTID\"/><Cell col=\"3\" text=\"원본\"/><Cell col=\"4\" text=\"대상 LOT\"/><Cell col=\"5\" text=\"Site ID\"/><Cell col=\"6\" text=\"라우팅 코드\"/><Cell col=\"7\" text=\"라우팅 버전\"/><Cell col=\"8\" text=\"공정경로 코드\"/><Cell col=\"9\" text=\"공정수순\"/><Cell col=\"10\" text=\"공정 코드\"/><Cell col=\"11\" text=\"공정명\"/><Cell col=\"12\" text=\"작업장 코드\"/><Cell col=\"13\" text=\"작업장\"/><Cell col=\"14\" text=\"잔량\"/><Cell col=\"15\" text=\"분할수량\"/><Cell col=\"16\" text=\"사용자명\"/><Cell col=\"17\" text=\"작업시간\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:SPLITTYPE\"/><Cell col=\"2\" text=\"bind:ROOTLOTID\"/><Cell col=\"3\" text=\"bind:SOURCELOTID\" tooltiptext=\"ORIGINAL\"/><Cell col=\"4\" text=\"bind:DESTINATIONLOTID\" tooltiptext=\"TARGETWIP\"/><Cell col=\"5\" text=\"bind:PLANTID\"/><Cell col=\"6\" text=\"bind:PROCESSDEFID\"/><Cell col=\"7\" text=\"bind:PROCESSDEFVERSION\"/><Cell col=\"8\" text=\"bind:PROCESSPATHID\" tooltiptext=\"PROCESSPATHID2\"/><Cell col=\"9\" text=\"bind:USERSEQUENCE\"/><Cell col=\"10\" text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"11\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:AREAID\"/><Cell col=\"13\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:QTY\" tooltiptext=\"LEFTQTY\"/><Cell col=\"15\" text=\"bind:CREATEDQTY\" tooltiptext=\"SPLITQTY\"/><Cell col=\"16\" text=\"bind:USERNAME\"/><Cell col=\"17\" text=\"bind:TXNTIME\"/></Band></Format></Formats>");
            this.div_work.form.tabMain.tpgLotSplitHist.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_LotSplitHistory","StaticLotSplitHist:10","0","140","34",null,null,null,null,null,null,this.div_work.form.tabMain.tpgLotSplitHist.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tabMain.tpgLotSplitHist.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdLotSplitHistory",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabMain.tpgLotSplitHist.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabMain.tpgLotSplitHist.addChild(obj.name, obj);

            obj = new Grid("grdLotInfo","0","10",null,"85","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_fillareatype("allrow");
            obj.set_cssclass("grd_detail_Master");
            obj.set_selecttype("cell");
            obj.set_scrollbartype("none");
            obj.set_scrolltype("none");
            obj.set_binddataset("ds_LotInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"87\"/><Column size=\"166\"/><Column size=\"100\"/><Column size=\"112\"/><Column size=\"102\"/><Column size=\"65\"/><Column size=\"100\"/><Column size=\"206\"/></Columns><Rows><Row size=\"21\"/><Row size=\"21\"/><Row size=\"21\"/><Row size=\"21\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_head\" text=\"Lot No.\" wordWrap=\"char\" textAlign=\"left\"/><Cell col=\"1\" textAlign=\"left\" text=\"bind:LOTID\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"품목코드\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"ITEMID\"/><Cell col=\"3\" textAlign=\"left\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"4\" cssclass=\"cell_head\" text=\"Rev\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"5\" textAlign=\"left\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"6\" cssclass=\"cell_head\" text=\"품목명\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"ITEMNAME\"/><Cell col=\"7\" textAlign=\"left\" text=\"bind:PRODUCTDEFNAME\"/><Cell row=\"1\" cssclass=\"cell_head\" text=\"투입일자\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"INPUTDATE\"/><Cell row=\"1\" col=\"1\" textAlign=\"left\" text=\"bind:INPUTDATE\"/><Cell row=\"1\" col=\"2\" cssclass=\"cell_head\" text=\"S/O번호\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"SELECTPRODUCTIONORDER\"/><Cell row=\"1\" col=\"3\" textAlign=\"left\" text=\"bind:PRODUCTIONORDERID\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_head\" text=\"라인\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"LINENO\"/><Cell row=\"1\" col=\"5\" textAlign=\"left\" text=\"bind:LINENO\"/><Cell row=\"1\" col=\"6\" cssclass=\"cell_head\" text=\"납기일\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"DUEDATE\"/><Cell row=\"1\" col=\"7\" textAlign=\"left\" text=\"bind:DUEDATE\"/><Cell row=\"2\" cssclass=\"cell_head\" text=\"품목유형구분\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PRODUCTDEFTYPE\"/><Cell row=\"2\" col=\"1\" textAlign=\"left\" text=\"bind:PRODUCTDEFTYPE\"/><Cell row=\"2\" col=\"2\" cssclass=\"cell_head\" text=\"생산구분\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell row=\"2\" col=\"3\" textAlign=\"left\" text=\"bind:PRODUCTIONTYPE\"/><Cell row=\"2\" col=\"4\" cssclass=\"cell_head\" text=\"Locking 여부\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"ISLOCKING\"/><Cell row=\"2\" col=\"5\" textAlign=\"left\" text=\"bind:ISLOCKING\"/><Cell row=\"2\" col=\"6\" cssclass=\"cell_head\" text=\"작업장\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"AREA\"/><Cell row=\"2\" col=\"7\" textAlign=\"left\" text=\"bind:AREANAME\"/><Cell row=\"3\" cssclass=\"cell_head\" text=\"고객명\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"CUSTOMERNAME\"/><Cell row=\"3\" col=\"1\" textAlign=\"left\" text=\"bind:CUSTOMERNAME\"/><Cell row=\"3\" col=\"2\" cssclass=\"cell_head\" text=\"단위\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"UNIT\"/><Cell row=\"3\" col=\"3\" textAlign=\"left\" text=\"bind:UNIT\"/><Cell row=\"3\" col=\"4\" cssclass=\"cell_head\" text=\"수량(PNL)\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PANELQTY\"/><Cell row=\"3\" col=\"5\" textAlign=\"left\" text=\"bind:PNLQTY\"/><Cell row=\"3\" col=\"6\" cssclass=\"cell_head\" text=\"수량(PCS)\" wordWrap=\"char\" textAlign=\"left\" tooltiptext=\"PCSQTY\"/><Cell row=\"3\" col=\"7\" textAlign=\"left\" text=\"bind:PCSQTY\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_work.form.tabLotHist.tbpMessage.form.divMessage.form.edt_Title","value","ds_MessageDetail","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.form.tabLotHist.tbpMessage.form.divMessage.form.edt_Comment","value","ds_MessageDetail","MESSAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.Tabpage1.form.edt_LOTID","value","ds_search","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM03100M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM03100M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM03100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: LOT 이력조회
         * 파일명 		: PCM03100M.xfdl
         * 작성자 		: 김애리
         * 작성일 		: 2021.4.1
         * AS-IS		: LotHistory
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.4.1	김애리   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.ds_search.set_rowposition(0);
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());


        	this.fn_initParam();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.mfn_SetInitControl();

        	if(this.fn_searchValidate() == false) return;
        trace(this.ds_search.saveXML());
        	this.GetLotDetail();
        	this.GetLotTree();

        };

        this.fn_searchValidate = function ()
        {
        	this.ds_search.setColumn(0,"LOTID",this.tab_search.Tabpage1.form.edt_LOTID.value);
        	var component = this.tab_search.Tabpage1;
        	var strColIdList = "edt_LOTID";
        	var strColNmList = "LOTID";
        	return this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        };

        /*
        * 기능 : 검색 초기화
        */
        this.fn_searchClear = function(obj,e)
        {
        	this.ds_search.copyData(this.ds_searchCopy);
        	this.fn_initDatePicker();
        };

        this.fn_save = function (obj, e)
        {
        	if(this.fn_saveValidate() == false) return;
        };

        this.fn_saveValidate = function ()
        {
        };


         /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        trace('fn_callBack trId ?' + trId);
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}

        	{
        		switch(trId) {
        		case "selectLotInfoByLotID" :
        		{
        			this.GetProductSpec();
        			break;
        		}
        		case "selectWipLotMessageList" :
        		{
        			this.ds_searchCopy.copyData(this.ds_search);
        			break;
        		}
        		case "selectLotGenealTreeList" :
        		{
        			if(this.ds_tree.rowcount > 0 ){
        				if(this.ds_search.getColumn(0,"LOTID") != this.ds_tree.getColumn(0,"LOTID") ){
        					var fRow = this.ds_tree.findRow("LOTID",this.ds_search.getColumn(0,"LOTID"));

        					this.ds_tree.set_rowposition(fRow);
        				}
        				this.ds_tree.set_enableevent(true);
        				switch(this.div_work.form.tabMain.tabindex) {
        				case 0:// Lot 공정이력
        					this.GetLotHistory(this.ds_tree.getColumn(fRow, "LOTID"));
        					break;
        				case 1:// Lot 분할 이력
        					this.GetLotSplitHistory(this.ds_tree.getColumn(fRow, "LOTID"));
        					break;
        				default:
        				}
        			}
        			break;
        		}
        		case "selectLotWorkHistoryList" :
        		case "selectLotSplitMergeHistory":
        		{
        			var tabName = this.div_work.form.tabLotHist.tabpages.get_id(this.div_work.form.tabLotHist.tabindex);

        			switch(tabName) {
        				case "tbpSpec": this.GetProductSpec(); break;
        				case "tbpMeasure": this.GetMeasureValue(); break;
        				case "tbpConsume": this.GetConsumableMaterial(); break;
        				case "tbpDurable": this.GetDurable(); break;
        				case "tbpEquipment": this.GetEquipment(); break;
        				case "tbpAbnormal": this.GetAbnormal(); break;
        				case "tbpDefect": this.GetDefect(); break;
        				case "tbpWeek": this.GetWeek(); break;
        				case "tbpWTIME": this.GetWTIME(); break;
        				case "tbpShipping": this.GetShippingInfo(); break;
        				case "tbpMessage": this.GetMessage(); break;
        				case "tbpChangeArea": this.GetChangeArea(); break;
        			}
        			break;
        		}
        		default:
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        /*
         *	기능 : 팝업 관련
         */
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SEARCH_LOTID")
        	{//LOTID
        		this.ds_search.setColumn(0,"LOTID",rtn.join(","));
        	}
        };


        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        /*
         *	화면 호출시 셋팅된 argument 가 존재하면 가져온다.
         */
        this.fn_initParam = function()
        {
        	var sArgName = this.gfn_getFrameAguments("menuName");
        	if(sArgName == "LotHistory") {
        		trace("argument :" + sArgName);

        		var sArgArr = this.gfn_getFrameAguments("objList");
        		this.tab_search.Tabpage1.form.edt_LOTID.set_value(sArgArr[1]);
        		this.ds_search.setColumn(0,"LOTID", sArgArr[1]);
        		//P_AREAID, P_PROCESSSEGMENTID, P_PRODUCTDEFID, P_LOTID

        		this.GetLotDetail();
        		this.GetLotTree();
        	}else if(sArgName == "SUBUL") {
        		trace("argument :" + sArgName);

        		var sArgArr = this.gfn_getFrameAguments("objList");
        		this.tab_search.Tabpage1.form.edt_LOTID.set_value(sArgArr[1]);
        		this.ds_search.setColumn(0,"LOTID", sArgArr[1]);

        		this.div_work.form.tabMain.set_tabindex(1);
        		this.GetLotDetail();
        		this.GetLotTree();
        	} else if(sArgName == "QAM02300M" || sArgName == "QAM03300M" ) {
        		trace("argument :" + sArgName);
        		var data = JSON.parse(this.gfn_getFrameAguments("objList"));
        		this.tab_search.Tabpage1.form.edt_LOTID.set_value(data.LOTID);
        		this.ds_search.setColumn(0,"LOTID", data.LOTID);

        		this.GetLotDetail();
        		this.GetLotTree();
        	}
        }

        this.mfn_SetInitControl = function ()
        {
        	this.ds_ProductInfo.clearData();
        	this.ds_InspectionMeasure.clearData();
        	this.ds_Consumable.clearData();
        	this.ds_Durable.clearData();
        	this.ds_Equipment.clearData();
        	this.ds_Recipe.clearData();
        	this.ds_RecipePara.clearData();
        	this.ds_Abnormal.clearData();
        	this.ds_Defect.clearData();
        	this.ds_Inkjet.clearData();
        	this.ds_QR.clearData();
        	this.ds_Packing.clearData();
        	this.ds_Film.clearData();
        	this.ds_WTIME.clearData();
        	this.ds_Shipping.clearData();
        	this.ds_ShippingDefect.clearData();
        	this.ds_MessageHistory.clearData();
        	this.ds_MessageDetail.clearData();
        	this.ds_ChangeArea.clearData();
        };

        this.GetLotDetail = function ()
        {
        	this.ds_LotInfo.clearData();

        	var sSvcID 			= "selectLotInfoByLotID";
        	var sController 	= "/pcm03100/selectLotInfoByLotID.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_LotInfo=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.GetLotTree = function ()
        {
        	this.ds_tree.clearData();

        	var sSvcID 			= "selectLotGenealTreeList";
        	var sController 	= "/pcm03100/selectLotGenealTreeList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_tree=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	this.ds_tree.set_enableevent(false);
        };


        this.GetLotHistory = function (lotID)
        {
        	this.ds_LotRouting.clearData();

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");
        	this.ds_temp.setColumn(0, "LOTID", lotID);
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());


        	var sSvcID 			= "selectLotWorkHistoryList";
        	var sController 	= "/pcm03100/selectLotWorkHistoryList.do";
        	var sInDatasets 	= "INPUT=ds_temp";
        	var sOutDatasets 	= "ds_LotRouting=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.GetLotSplitHistory = function (lotID)
        {
        	this.ds_LotSplitHistory.clearData();

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");
        	this.ds_temp.setColumn(0, "LOTID", lotID);
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	var sSvcID 			= "selectLotSplitMergeHistory";
        	var sController 	= "/pcm03100/selectLotSplitMergeHistory.do";
        	var sInDatasets 	= "INPUT=ds_temp";
        	var sOutDatasets 	= "ds_LotSplitHistory=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         *	0. 제품사양정보
         */
        this.GetProductSpec = function ()
        {
        	this.ds_ProductInfo.clearData();

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "PRODUCTDEFID,PRODUCTDEFVERSION,LANGUAGETYPE");
        	this.ds_temp.setColumn(0, "PRODUCTDEFID", this.ds_LotInfo.getColumn(0,"PRODUCTDEFID"));
        	this.ds_temp.setColumn(0, "PRODUCTDEFVERSION", this.ds_LotInfo.getColumn(0,"PRODUCTDEFVERSION"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.pfn_CostomQuerySync(this.ds_temp, this.ds_ProductInfo, "selectProductSpecInfo");

        };

        /*
         *	1. 계측값 정보
         */
        this.GetMeasureValue = function ()
        {
        	this.ds_InspectionMeasure.clearData();

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");
        	this.ds_temp.setColumn(0, "LOTID", this.ds_tree.getColumn(this.ds_tree.rowposition,"LOTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.pfn_CostomQuery(this.ds_temp, this.ds_InspectionMeasure, "selectLotHistoryMeasure");
        };


        /*
         *	2. 자재 정보
         */
        this.GetConsumableMaterial = function ()
        {
        	this.ds_Consumable.clearData();

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");
        	this.ds_temp.setColumn(0, "LOTID", this.ds_tree.getColumn(this.ds_tree.rowposition,"LOTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.pfn_CostomQuery(this.ds_temp, this.ds_Consumable, "selectLotHistoryConsumable");
        };



        /*
         *	3. 치공구
         */
        this.GetDurable = function ()
        {
        	this.ds_Durable.clearData();

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");
        	this.ds_temp.setColumn(0, "LOTID", this.ds_tree.getColumn(this.ds_tree.rowposition,"LOTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.pfn_CostomQuery(this.ds_temp, this.ds_Durable, "selectLotHistoryDurable");
        };



        /*
         *	4. 설비
         */
        this.GetEquipment = function ()
        {
        	this.ds_Equipment.clearData();

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");
        	this.ds_temp.setColumn(0, "LOTID", this.ds_tree.getColumn(this.ds_tree.rowposition,"LOTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.pfn_CostomQuery(this.ds_temp, this.ds_Equipment, "selectLotHistoryEquipment");
        };



        /*
         *	5. Recipe
         */
        this.GetRecipe = function ()
        {
        // 	this.ds_Recipe.clearData();
        //
        // 	this.ds_temp.clear();
        // 	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");
        // 	this.ds_temp.setColumn(0, "LOTID", this.ds_tree.getColumn(this.ds_tree.rowposition,"LOTID"));
        // 	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        //
        // 	this.pfn_CostomQuery(this.ds_temp, this.ds_Recipe, "selectLotHistoryEquipmentRecipe");
        };

        /*
         *	5-1. Recipe Parameter
         */
        this.GetRecipePara = function ()
        {

        };


        /*
         *	6. 이상발생
         */
        this.GetAbnormal = function ()
        {
        	this.ds_Abnormal.clearData();

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");
        	this.ds_temp.setColumn(0, "LOTID", this.ds_tree.getColumn(this.ds_tree.rowposition,"LOTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.pfn_CostomQuery(this.ds_temp, this.ds_Abnormal, "selectLotHistoryAbnormal");
        };



        /*
         *	7. 불량
         */
        this.GetDefect = function ()
        {
        	this.ds_Defect.clearData();

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");
        	this.ds_temp.setColumn(0, "LOTID", this.ds_tree.getColumn(this.ds_tree.rowposition,"LOTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.pfn_CostomQuery(this.ds_temp, this.ds_Defect, "selectLotHistoryDefect");
        };



        /*
         *	8. 주차
         */
        this.GetWeek = function ()
        {
        	this.ds_Inkjet.clearData();
        	this.ds_QR.clearData();
        	this.ds_Packing.clearData();

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");
        	this.ds_temp.setColumn(0, "LOTID", this.ds_tree.getColumn(this.ds_tree.rowposition,"LOTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.pfn_CostomQuery(this.ds_temp, this.ds_Inkjet, "selectLotHistoryInkjet");
        	this.pfn_CostomQuery(this.ds_temp, this.ds_QR, "selectLotHistoryQR");
        	this.pfn_CostomQuery(this.ds_temp, this.ds_Packing, "selectLotHistoryPacking");
        };



        /*
         *	9. FILM
         */
        this.GetFilm = function ()
        {
        // 	this.ds_Film.clearData();
        //
        // 	this.ds_temp.clear();
        // 	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");
        // 	this.ds_temp.setColumn(0, "LOTID", this.ds_tree.getColumn(this.ds_tree.rowposition,"LOTID"));
        // 	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        //
        // 	this.pfn_CostomQuery(this.ds_temp, this.ds_Film, "selectLotHistoryFilm");
        };



        /*
         *	10. W-TIME
         */
        this.GetWTIME = function ()
        {
        	this.ds_WTIME.clearData();

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");
        	this.ds_temp.setColumn(0, "LOTID", this.ds_tree.getColumn(this.ds_tree.rowposition,"LOTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.pfn_CostomQuery(this.ds_temp, this.ds_WTIME, "selectLotHistoryWtime");
        };



        /*
         *	11. 출하 정보
         */
        this.GetShippingInfo = function ()
        {
        	this.ds_Shipping.clearData();

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");
        	this.ds_temp.setColumn(0, "LOTID", this.ds_tree.getColumn(this.ds_tree.rowposition,"LOTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.pfn_CostomQuery(this.ds_temp, this.ds_Shipping, "selectLotHistoryShipmentInsp");
        };

        /*
         *	11. 출하 정보
         */
        this.GetShippingDefect = function ()
        {
        	var nRow = this.ds_Shipping.rowcount == 0 ? 1 : this.ds_Shipping.rowposition;
        	this.ds_ShippingDefect.clearData();

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE,TXNGROUPHISTKEY,DEGREE1");
        	this.ds_temp.setColumn(0, "LOTID", this.ds_tree.getColumn(this.ds_tree.rowposition,"LOTID"));
        	this.ds_temp.setColumn(0, "TXNGROUPHISTKEY", this.ds_Shipping.getColumn(nRow,"TXNGROUPHISTKEY"));
        	this.ds_temp.setColumn(0, "DEGREE1", this.ds_Shipping.getColumn(nRow,"DEGREE1"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.pfn_CostomQuery(this.ds_temp, this.ds_ShippingDefect, "selectLotHistoryShipmentInspDefect");
        };

        /*
         *	12. 메시지 정보
         */
        this.GetMessage = function ()
        {
        	this.ds_MessageHistory.clearData();

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");
        	this.ds_temp.setColumn(0, "LOTID", this.ds_tree.getColumn(this.ds_tree.rowposition,"LOTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.pfn_CostomQuery(this.ds_temp, this.ds_MessageHistory, "selectLotHistoryMessage");
        };


        /*
         *	12-1. Lot 메시지 내용 조회
         */
        this.GetLotMessage = function ()
        {
        	var nRow = this.ds_MessageHistory.rowcount == 0 ? 1 : this.ds_MessageHistory.rowposition;
        	this.ds_MessageDetail.clearData();
        trace(this.ds_MessageHistory.saveXML());
        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE,TXNHISTKEY_SEQUENCE,PROCESSSEGMENTID");
        	this.ds_temp.setColumn(0, "LOTID", this.ds_tree.getColumn(this.ds_tree.rowposition,"LOTID"));
        	this.ds_temp.setColumn(0, "TXNHISTKEY_SEQUENCE", this.ds_MessageHistory.getColumn(nRow,"TXNHISTKEY"));
        	this.ds_temp.setColumn(0, "PROCESSSEGMENTID", this.ds_MessageHistory.getColumn(nRow,"PROCESSSEGMENTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.pfn_CostomQuery(this.ds_temp, this.ds_MessageDetail, "selectLotMessage");
        };


        /*
         *	13. 작업장 변경
         */
        this.GetChangeArea = function ()
        {
        	this.ds_ChangeArea.clearData();

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "LOTID,LANGUAGETYPE");
        	this.ds_temp.setColumn(0, "LOTID", this.ds_tree.getColumn(this.ds_tree.rowposition,"LOTID"));
        	this.ds_temp.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	this.pfn_CostomQuery(this.ds_temp, this.ds_ChangeArea, "selectLotHistoryChangeArea");
        };



        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_Tabpage1_btn_LOTID_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"LOTID",this.tab_search.Tabpage1.form.edt_LOTID.value);
        	this.pfn_openPopup_LOTID("SEARCH_LOTID", this.ds_search.getColumn(0,"LOTID"),"CA");
        };

        this.ds_tree_onrowposchanged = function(obj,e)
        {
        trace('ds_tree_onrowposchanged');
        	if(e.newrow < 0 ) return;
        	switch(this.div_work.form.tabMain.tabindex) {
        	case 0:// Lot 공정이력
        		this.GetLotHistory(this.ds_tree.getColumn(e.newrow, "LOTID"));
        		break;
        	case 1:// Lot 분할 이력
        		this.GetLotSplitHistory(this.ds_tree.getColumn(e.newrow, "LOTID"));
        		break;
        	default:
        	}
        };

        /*
         *	중간 탭 변경 시 데이타 로딩
         */
        this.div_work_tabMain_onchanged = function(obj,e)
        {
        	var nRow = this.ds_tree.rowcount == 1 ? 0 : this.ds_tree.rowposition;
        	switch(e.postindex) {
        	case 0:// Lot 공정이력
        		this.GetLotHistory(this.ds_tree.getColumn(nRow, "LOTID"));
        		break;
        	case 1:// Lot 분할 이력
        		this.GetLotSplitHistory(this.ds_tree.getColumn(nRow, "LOTID"));
        		break;
        	default:
        	}
        };

        /*
         *	하단 탭 변경 시 데이타 로딩
         */
        this.div_work_tabLotHist_onchanged = function(obj,e)
        {
        	var mRow = this.ds_LotRouting.rowcount == 1 ? 0 : this.ds_LotRouting.rowposition;
        	var tabName = this.div_work.form.tabLotHist.tabpages.get_id(e.postindex);

        	switch(tabName) {
        		case "tbpSpec": this.GetProductSpec(); break;
        		case "tbpMeasure": this.GetMeasureValue(); break;
        		case "tbpConsume": this.GetConsumableMaterial(); break;
        		case "tbpDurable": this.GetDurable(); break;
        		case "tbpEquipment": this.GetEquipment(); break;
        		case "tbpAbnormal": this.GetAbnormal(); break;
        		case "tbpDefect": this.GetDefect(); break;
        		case "tbpWeek": this.GetWeek(); break;
        		case "tbpWTIME": this.GetWTIME(); break;
        		case "tbpShipping": this.GetShippingInfo(); break;
        		case "tbpMessage": this.GetMessage(); break;
        		case "tbpChangeArea": this.GetChangeArea(); break;
        	}

        };

        this.ds_MessageHistory_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 0) return;
        	this.GetLotMessage();
        };

        this.div_work_tabLotHist_tbpMeasure_grdInspectionMeasure_oncelldblclick = function(obj,e)
        {
        	var nRow = this.ds_InspectionMeasure.rowcount == 1 ? 0 : this.ds_InspectionMeasure.rowposition;
        	var oArg = {};
        	oArg.lotId = this.ds_InspectionMeasure.getColumn(nRow, "LOTID");
        	this.gfn_openPopup("REG_MEASUER_VALUE","qam::QAM01100P.xfdl",oArg,"width=1000,height=750");
        };

        this.div_work_tabLotHist_tbpDefect_grdDefect_oncelldblclick = function(obj,e)
        {
        	var nRow = this.ds_Defect.rowcount == 1 ? 0 : this.ds_Defect.rowposition;
        	var oArg = {};
        	oArg.LOTID = this.ds_Defect.getColumn(nRow, "LOTID");
        	this.gfn_openPopup("DEFECTHISTORY","pcm::PCM031000P1.xfdl",oArg,"width=1200,height=700");
        };

        this.ds_Shipping_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 0) return;
        	this.GetShippingDefect();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tabpage1.form.btn_LOTID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_LOTID_onclick,this);
            this.div_work.form.tabLotHist.addEventHandler("onchanged",this.div_work_tabLotHist_onchanged,this);
            this.div_work.form.tabLotHist.tbpMeasure.form.grdInspectionMeasure.addEventHandler("oncelldblclick",this.div_work_tabLotHist_tbpMeasure_grdInspectionMeasure_oncelldblclick,this);
            this.div_work.form.tabLotHist.tbpDefect.form.grdDefect.addEventHandler("oncelldblclick",this.div_work_tabLotHist_tbpDefect_grdDefect_oncelldblclick,this);
            this.div_work.form.tabMain.addEventHandler("onchanged",this.div_work_tabMain_onchanged,this);
            this.ds_tree.addEventHandler("onrowposchanged",this.ds_tree_onrowposchanged,this);
            this.ds_Shipping.addEventHandler("onrowposchanged",this.ds_Shipping_onrowposchanged,this);
            this.ds_MessageHistory.addEventHandler("onrowposchanged",this.ds_MessageHistory_onrowposchanged,this);
        };
        this.loadIncludeScript("PCM03100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
