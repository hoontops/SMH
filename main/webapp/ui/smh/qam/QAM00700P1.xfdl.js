(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM00700P1");
            this.set_titletext("수입검사 NCR 팝업");
            this.set_tooltiptext("SHIPMENTINSPHISTORYLIST");
            if (Form == this.constructor)
            {
                this._setFormPosition(1500,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qamLotInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNGROUPHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"INDEX\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_TY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOTHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamImage", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ATCH_FILE_GUID\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"DAPOINTID\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_TY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_OSPInspectionExterior", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DCQCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISAQL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLINSPECTIONLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDEFECTLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"AQLCYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"ISNCR\" type=\"STRING\" size=\"256\"/><Column id=\"NCRINSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NCRCYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRDEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRLOTSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"INSPECTIONQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"CANDELETE\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"PRIORITY\" type=\"STRING\" size=\"256\"/><Column id=\"FILEINSPECTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILERESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ORIPROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID1\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_OSPInspectionMeasure", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONMETHODNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"RENCRDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONSTANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"SPECSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"TARGETVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"UPPERSPECLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"LOWERSPECLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"CL\" type=\"STRING\" size=\"256\"/><Column id=\"UPPERCONTROLLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"LOWERCONTROLLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"UPPERSCREENLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"LOWERSCREENLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"REPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"REENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"PRIORITY\" type=\"STRING\" size=\"256\"/><Column id=\"FILEINSPECTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"ORIPROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID1\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_OSPMeasureByInspItem", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ORIPROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"LOWERSPECLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"UPPERSPECLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"LOWERCONTROLLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"UPPERCONTROLLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"UPPERSCREENLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"LOWERSCREENLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"TXNGROUPHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"ISDELETE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME\" type=\"STRING\" size=\"256\" datapath=\"\"/><Column id=\"INSPECTIONSTANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"TARGETVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_OSPInspDefect", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"SAMPLEQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"INSPECTIONQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"FILEINSPECTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILERESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID1\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamIssue", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREDATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURER\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECRANGE\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"AVERAGEVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"MAXVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"MINVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"DEVIATION\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURER\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"DAITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ARRAYPOINTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISMODIFY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"CARREQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CAREXPECTEDRECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SPECSCOPE\" type=\"STRING\" size=\"256\"/><Column id=\"AFFECTISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISCHANGED\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMSCRAPAMT\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMETCAMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_claimInfoList", this);
            obj._setContents("<ColumnInfo><Column id=\"ISCHANGED\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PREV_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMSCRAPAMT\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMETCAMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","82","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"100","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","97","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"1790","10","0","48",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Button("btn_x_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Static("sta_lotInfo","20","20","250","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Lot 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SHIPMENTINSPHISTORY");
            this.addChild(obj.name, obj);

            obj = new Div("div_basInfo","20","79","50%","156",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_processsegmentname","33.3%","31","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("0");
            obj.set_text("공정명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PROCESSSEGMENTNAME");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_processsegmentname","sta_processsegmentname:5","36","22.3%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("1");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_nextprocesssegmentname","66.6%","31","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("2");
            obj.set_text("후공정");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("NEXTPROCESSSEGMENTNAME");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_nextprocesssegmentname","sta_nextprocesssegmentname:5","37","22.3%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("3");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_usersequence","0%","31","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("4");
            obj.set_text("공정수순");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("USERSEQUENCE");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_usersequence","sta_usersequence:5","36","22.3%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("5");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_productdefid","0%","0","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("6");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_productdefid","sta_productdefid:5","5","22.3%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("7");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_productdefname","66.60%","0","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("8");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_productdefname","sta_productdefname:5","5","22.3%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("9");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_productdefversion","33.3%","0","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("10");
            obj.set_text("Rev");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTDEFVERSION");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_productdefversion","sta_productdefversion:5","5","22.3%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("11");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_inputdate","33.3%","62","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("12");
            obj.set_text("투입일자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("INPUTDATE");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_inputdate","sta_inputdate:5","67","22.3%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("13");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_productiontype","0%","93","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("14");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_productiontype","sta_productiontype:5","98","22.3%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("15");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_duedate","66.6%","62","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("16");
            obj.set_text("납기일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("DUEDATE");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_duedate","sta_duedate:5","67","22.3%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("17");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_areaname","0%","62","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("18");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("AREANAME");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_areaname","sta_areaname:5","68","22.3%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("19");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_isrework","66.6%","124","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("20");
            obj.set_text("재작업 여부");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("ISREWORK");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_isrework","sta_isrework:5","129","22.3%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("21");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_unit","66.6%","93","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("22");
            obj.set_text("단위");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("UNIT");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_unit","sta_unit:5","98","22.3%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("23");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_pnlqty","33.3%","124","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("24");
            obj.set_text("수량(PNL)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PNLQTY");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_pnlqty","sta_pnlqty:5","129","22.3%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("25");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_pcsqty","0","124","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("26");
            obj.set_text("수량(PCS)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PCSQTY");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_pcsqty","sta_pcsqty:5","129","22.3%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("27");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_productdeftype","33.3%","93","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("28");
            obj.set_text("품목유형");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTDEFTYPE");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_productdeftype","sta_productdeftype:5","98","22.3%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("29");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Tab("tab","20","275","50%",null,null,"160",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab);
            obj.set_text("외관 검사");
            this.tab.addChild(obj.name, obj);

            obj = new Static("title2_01","0","0","62","34",null,null,null,null,null,null,this.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("외관검사");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_inspectionDecisionClass","7.33%","9","118","20",null,null,null,null,null,null,this.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("판정기준(외관검사)");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            this.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_inspectionDecisionClass","sta_inspectionDecisionClass:6","9","120","20",null,null,null,null,null,null,this.tab.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,InspectionDecisionClass,,Y,Y");
            obj.set_readonly("true");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab.Tabpage1.addChild(obj.name, obj);

            obj = new ImageViewer("img_OSPInspectionExterior1","40.93%","59","28.98%",null,null,"25",null,null,null,null,this.tab.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("img_photo");
            obj.set_stretch("fit");
            this.tab.Tabpage1.addChild(obj.name, obj);

            obj = new ImageViewer("img_OSPInspectionExterior2",null,"59","28.98%",null,"0","25",null,null,null,null,this.tab.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("img_photo");
            obj.set_text("");
            obj.set_stretch("fit");
            this.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_OSPInspectionExterior","0","34","40%",null,null,"0",null,null,null,null,this.tab.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_OSPInspectionExterior");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"130\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"88\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"불량코드명\" tooltiptext=\"DEFECTCODENAME\"/><Cell col=\"2\" colspan=\"2\" text=\"검사 수량\" cssclass=\"cell_headMaster\" tooltiptext=\"INSPECTIONQTY\"/><Cell col=\"4\" colspan=\"2\" text=\"불량 수량\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECTQTY\"/><Cell col=\"6\" rowspan=\"2\" text=\"불량률(%)\" tooltiptext=\"DEFECTRATEANDPERCENT\"/><Cell col=\"7\" rowspan=\"2\" text=\"판정결과\" tooltiptext=\"INSPECTIONRESULT\"/><Cell row=\"1\" col=\"2\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"3\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"4\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"5\" text=\"PNL\" tooltiptext=\"PNL\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:JOINNAME\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:INSPECTIONQTY\" displaytype=\"mask\" maskeditautoselect=\"true\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"3\" text=\"bind:INSPECTIONQTYPNL\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"#,##0\" textAlign=\"right\" editautoselect=\"true\"/><Cell col=\"4\" text=\"bind:DEFECTQTY\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"#,##0\" textAlign=\"right\" editautoselect=\"true\"/><Cell col=\"5\" text=\"bind:DEFECTQTYPNL\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"#,##0\" textAlign=\"right\" editautoselect=\"true\"/><Cell col=\"6\" text=\"bind:DEFECTRATE\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:INSPECTIONRESULT\" combocodecol=\"C,OKNG,,Y,N\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab);
            obj.set_text("측정 검사");
            this.tab.addChild(obj.name, obj);

            obj = new ImageViewer("img_OSPInspectionMeasure1","40.93%","59","28.98%",null,null,"25",null,null,null,null,this.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_cssclass("img_photo");
            this.tab.Tabpage2.addChild(obj.name, obj);

            obj = new ImageViewer("img_OSPInspectionMeasure2",null,"59","28.98%",null,"0","25",null,null,null,null,this.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_cssclass("img_photo");
            this.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_OSPInspectionMeasure","0","1","66","34",null,null,null,null,null,null,this.tab.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("측정 검사");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_OSPInspectionMeasure","0","sta_OSPInspectionMeasure:0","40%","40%",null,null,null,null,null,null,this.tab.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_OSPInspectionMeasure");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사항목명\" tooltiptext=\"INSPITEMNAME\"/><Cell col=\"2\" text=\"검사기준\" tooltiptext=\"INSPECTIONSTANDARD\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INSPITEMNAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:INSPECTIONSTANDARD\" suppress=\"1\" suppressalign=\"middle\"/></Band></Format></Formats>");
            this.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_measureValue","0","grd_OSPInspectionMeasure:0","80","34",null,null,null,null,null,null,this.tab.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("측정 값");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_OSPMeasureByInspItem","0","sta_measureValue:0","40%",null,null,"0",null,null,null,null,this.tab.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_OSPMeasureByInspItem");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"측정값\" tooltiptext=\"MEASUREVALUE\"/><Cell col=\"2\" text=\"판정결과\" tooltiptext=\"INSPECTIONRESULT\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:MEASUREVALUE\" displaytype=\"mask\" maskeditformat=\"#,0.######\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"2\" text=\"bind:INSPECTIONRESULT\" combocodecol=\"C,OKNG,,Y,Y\"/></Band></Format></Formats>");
            this.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tab);
            obj.set_text("불량(폐기) 처리");
            this.tab.addChild(obj.name, obj);

            obj = new Static("title2_01","0","0","251","34",null,null,null,null,null,null,this.tab.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("불량(폐기) 처리");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.tab.Tabpage3.addChild(obj.name, obj);

            obj = new ImageViewer("img_OSPInspDefect1","40.93%","59","28.98%",null,null,"25",null,null,null,null,this.tab.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_cssclass("img_photo");
            this.tab.Tabpage3.addChild(obj.name, obj);

            obj = new ImageViewer("img_OSPInspDefect2",null,"59","28.98%",null,"0","25",null,null,null,null,this.tab.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_cssclass("img_photo");
            this.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_OSPInspDefect","0","34","40%",null,null,"0",null,null,null,null,this.tab.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_OSPInspDefect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"210\"/><Column size=\"100\"/><Column size=\"210\"/><Column size=\"210\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"불량코드명\" tooltiptext=\"DEFECTCODENAME\"/><Cell col=\"2\" colspan=\"2\" text=\"검사 수량\" cssclass=\"cell_headMaster\" tooltiptext=\"INSPECTIONQTY\"/><Cell col=\"4\" colspan=\"2\" text=\"불량 수량\" cssclass=\"cell_headMaster\" tooltiptext=\"SPECOUTQTY\"/><Cell col=\"6\" rowspan=\"2\" text=\"불량률(%)\" tooltiptext=\"DEFECTRATE\"/><Cell col=\"7\" rowspan=\"2\" text=\"원인품목명\" tooltiptext=\"REASONCONSUMABLEDEFID\"/><Cell col=\"8\" rowspan=\"2\" text=\"원인품목 Rev\"/><Cell col=\"9\" rowspan=\"2\" text=\"원인 LOTID\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell col=\"10\" rowspan=\"2\" text=\"원인공정명\" tooltiptext=\"REASONPROCESSSEGMENTNAME\"/><Cell col=\"11\" rowspan=\"2\" text=\"원인작업장명\" cssclass=\"cell_end\" tooltiptext=\"REASONAREANAME\"/><Cell row=\"1\" col=\"2\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"3\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"4\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"5\" text=\"PNL\" tooltiptext=\"PNL\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:JOINNAME\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr: dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:INSPECTIONQTY\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:INSPECTIONQTYPNL\" maskeditformat=\"#,##0\" displaytype=\"mask\" edittype=\"mask\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"4\" text=\"bind:DEFECTQTY\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:DEFECTQTYPNL\" maskeditformat=\"#,##0\" displaytype=\"mask\" edittype=\"mask\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:DEFECTRATE\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:REASONSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:REASONCONSUMABLEDEFVERSION\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:REASONCONSUMABLELOTID\" combocodecol=\"CONSUMABLELOTID\" combodatacol=\"CONSUMABLELOTID\" combodataset=\"ds_defectReasonConsumable\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:REASONCONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:REASONAREANAME\" cssclass=\"cell_end\" textAlign=\"left\"/></Band></Format></Formats>");
            this.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_inspectionResult","20","240","230","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("판정결과");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("INSPECTIONRESULT");
            this.addChild(obj.name, obj);

            obj = new Static("sta_claimInfo","20","tab:0","250","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Claim 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SHIPMENTINSPHISTORY");
            this.addChild(obj.name, obj);

            obj = new Div("div_claimInfo","20","sta_claimInfo:5","50%","63",null,null,null,null,"63",null,this);
            obj.set_taborder("12");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_isclaimprocess","0","0","140","31",null,null,null,null,null,null,this.div_claimInfo.form);
            obj.set_taborder("0");
            obj.set_text("Claim 처리여부");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("ISCLAIMPROCESS");
            this.div_claimInfo.addChild(obj.name, obj);

            obj = new Static("sta_cost","0","31","140","31",null,null,null,null,null,null,this.div_claimInfo.form);
            obj.set_taborder("1");
            obj.set_text("발생금액(폐기비용)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_claimInfo.addChild(obj.name, obj);

            obj = new MaskEdit("edt_cost","sta_cost:5","35",null,"20","50%",null,null,null,null,null,this.div_claimInfo.form);
            obj.set_taborder("2");
            obj.set_text("IFV");
            obj.set_format("+#,###");
            this.div_claimInfo.addChild(obj.name, obj);

            obj = new Static("sta_otherCost","edt_cost:5","31","140","31",null,null,null,null,null,null,this.div_claimInfo.form);
            obj.set_taborder("3");
            obj.set_text("발생금액(기타비용)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_claimInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_isclaimprocess","sta_isclaimprocess:5","6",null,"20","50%",null,null,null,null,null,this.div_claimInfo.form);
            obj.set_taborder("4");
            obj.set_codecolumn("C,YesNo,SEL,Y,Y");
            this.div_claimInfo.addChild(obj.name, obj);

            obj = new Static("sta_reasoncodename","cbo_isclaimprocess:5","0","140","31",null,null,null,null,null,null,this.div_claimInfo.form);
            obj.set_taborder("5");
            obj.set_text("이상발생사유");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("REASONCODENAME");
            this.div_claimInfo.addChild(obj.name, obj);

            obj = new Edit("edt_reasoncodename","sta_reasoncodename:5","6",null,"20","5",null,null,null,null,null,this.div_claimInfo.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_text("IFV");
            this.div_claimInfo.addChild(obj.name, obj);

            obj = new MaskEdit("edt_otherCost","sta_otherCost:5","36",null,"20","5",null,null,null,null,null,this.div_claimInfo.form);
            obj.set_taborder("7");
            obj.set_text("IFV");
            obj.set_format("+#,###");
            this.div_claimInfo.addChild(obj.name, obj);

            obj = new Div("div_ncrProcess","div_basInfo:20","20",null,null,"20","58",null,null,"300",null,this);
            obj.set_taborder("13");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_lotId","20","52","118","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("LotNo.");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","sta_lotId:5","52","220","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_value("");
            obj.set_readonly("true");
            obj.set_text("CCT");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"70","28","95","20",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("저장");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptext("SAVE");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1500,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","div_basInfo.form.edt_processsegmentname","value","ds_qamLotInfo","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_basInfo.form.edt_nextprocesssegmentname","value","ds_qamLotInfo","NEXTPROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_basInfo.form.edt_usersequence","value","ds_qamLotInfo","USERSEQUENCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_basInfo.form.edt_productdefid","value","ds_qamLotInfo","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_basInfo.form.edt_productdefversion","value","ds_qamLotInfo","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_basInfo.form.edt_productdefname","value","ds_qamLotInfo","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_basInfo.form.edt_inputdate","value","ds_qamLotInfo","INPUTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_basInfo.form.edt_duedate","value","ds_qamLotInfo","DUEDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_basInfo.form.edt_productdeftype","value","ds_qamLotInfo","PRODUCTDEFTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_basInfo.form.edt_productiontype","value","ds_qamLotInfo","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_basInfo.form.edt_areaname","value","ds_qamLotInfo","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_basInfo.form.edt_unit","value","ds_qamLotInfo","UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_basInfo.form.edt_pnlqty","value","ds_qamLotInfo","PNLQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_basInfo.form.edt_pcsqty","value","ds_qamLotInfo","PCSQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_basInfo.form.edt_isrework","value","ds_qamLotInfo","ISREWORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","edt_lotId","value","ds_qamLotInfo","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div_claimInfo.form.cbo_isclaimprocess","value","ds_claimInfoList","ISCLAIMPROCESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div_claimInfo.form.edt_reasoncodename","value","ds_claimInfoList","REASONCODENAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div_claimInfo.form.edt_otherCost","value","ds_claimInfoList","CLAIMETCAMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_claimInfo.form.edt_cost","value","ds_claimInfoList","CLAIMSCRAPAMT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM00700P1.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM00700P1.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM00700P1.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: NCR 발행
         * 파일명 		: QAM00700P1.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.05.14
         *
         * 설  명		: 품질관리 > 수입검사 > (이상발생)외주입고품 > 공정수입검사 이상발생 팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.14	권혜영   	최초작성
         * 2021.08.18   20210818    메뉴권한정보에 등록,수정,삭제 권한이 없을 경우 버튼 비활성화
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;	//품질관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
         this.fv_parentLotId 		= "";
         this.fv_objDs 				= this.opener.ds_processInspAbnormalList;
         this.fv_nRowPos 			= this.opener.ds_processInspAbnormalList.rowposition;
         this.fv_imageViewerComp 	= this.tab.Tabpage1.form;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_formInit();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {

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
        this.fn_add = function(obj,e)
        {
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	var objDs = this.ds_claimInfoList, isclaimprocess = objDs.getColumn(0, "ISCLAIMPROCESS");

        	if(this.nfn_isNull(isclaimprocess)) {
        		this.gfn_Message("IsClaimDisposalRequierd", null, "info", "ok"); //Claim 처리 여부를 입력하세요.
        		return;
        	}
        	if(this.gfn_dsIsUpdated(objDs)) {

        		if(objDs.getColumn(0, "PREV_AMOUNT") != objDs.getColumn(0, "AMOUNT")) {
        			objDs.setColumn(0, "ISCHANGED", "Y");
        		}
        	}
        	//하위 NCR 진행현황 DIV form의 save 함수 호출
        	this.div_ncrProcess.form.fn_save(this.ds_claimInfoList);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
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
        		if (trId == "selectLotInfoByLotIDOSP")
                {
        			if(this.ds_qamLotInfo.rowcount <= 0) {
        				var arg = "LotId = " + this.ds_qamIssue.getColumn(0, "LOTID");
        				this.gfn_Message("NotExistLot", arg, "info", "ok");
        			}

        		} else if (trId == "selectAtchFiles")
        		{
        			for(var i = 0; i < this.ds_qamImage.rowcount; i++) {
        				//이미지 칸이 2개이므로, 2개보다 크면 return.
        				if(i > 2) return;
        				var atchFileGuid = this.ds_qamImage.getColumn(0, "ATCH_FILE_GUID");
        				var upUrl = nexacro.getEnvironment().services["svcurl"].url +"/comm/downImage/" + atchFileGuid + ".do";
        				var imgId = "img_photo_"+i;
        				this.fv_imageViewerComp[imgId].set_image("URL('"+ upUrl + "')");
        			}

        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {

        	var nRow = this.ds_qamIssue.addRow();
        	this.ds_qamIssue.copyRow(nRow, this.fv_objDs, this.fv_nRowPos);

        	this.fn_searchLotInfo();

        	this.ds_OSPInspectionExterior.copyData(this.opener.ds_OSPInspectionExterior);
        	this.ds_OSPInspectionMeasure.copyData(this.opener.ds_OSPInspectionMeasure);
        	this.ds_OSPMeasureByInspItem.copyData(this.opener.ds_OSPMeasureByInspItem);
        	this.ds_OSPInspDefect.copyData(this.opener.ds_OSPInspDefect);

        	this.fn_setClaimDataControl();

        	// div 동적으로 폼 연결 시 호출 parameter
        	this.div_ncrProcess.set_url("qam::QAM01200D1.xfdl");
        	this.div_ncrProcess.form.fn_formInit(this.ds_qamIssue, "QAM00700", this.MENU_AUTH);

        	//20210818 메뉴권한정보에 등록,수정,삭제 권한이 없을 경우 버튼 비활성화
        	this.qamfn_ncrMenuAuth(this.INS_AUTH_YN, this.UPD_AUTH_YN, this.DEL_AUTH_YN);
        };

        /*
         * 기능 : Lot 정보를 조회
         */
        this.fn_searchLotInfo = function ()
        {
        	this.ds_qamLotInfo.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());//ENTERPRISEID
        	this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());//PLANTID
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());//PLANTID
        	this.ds_search.setColumn(0, "LOTID", this.ds_qamIssue.getColumn(0, "LOTID"));
        	this.ds_search.setColumn(0, "LOTHISTKEY", this.ds_qamIssue.getColumn(0, "LOTHISTKEY"));

        	var sSvcID 			= "selectLotInfoByLotIDOSP";
        	var sController 	= "/qam00700/selectLotInfoByLotIDOSP.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamLotInfo=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : Claim 정보 세팅
         */
        this.fn_setClaimDataControl = function ()
        {
        	var objDs = this.ds_claimInfoList;
        	objDs.appendData(this.ds_qamIssue, true);

        	var isclaimprocess = objDs.getColumn(0, "ISCLAIMPROCESS");
        	var amount = objDs.getColumn(0, "CLAIMETCAMT");

        	if(!this.nfn_isNull(isclaimprocess)) {
        		this.div_claimInfo.form.cbo_isclaimprocess.set_readonly(true);

        	}
        	if(!this.nfn_isNull(amount)) {
        		this.div_claimInfo.form.edt_otherCost.set_readonly(true);

        	} else {
        		objDs.set_updatecontrol(false);

        		objDs.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        		objDs.setColumn(0, "USERID", this.gf_getUserId());
        		objDs.setColumn(0, "ENTERPRISEID", this.gf_getUserId());
        		objDs.setColumn(0, "PLANTID", this.gf_getSiteType());
        		objDs.setColumn(0, "DEPTCD", this.gf_getDeptCd());
        		objDs.setColumn(0, "PREV_AMOUNT", amount);

        		objDs.set_updatecontrol(true);
        	}
        };


        /*
         * 이벤트 : 조회 후 이미지 set
         */
        this.fn_setImage = function(pObject, pDataset, pRow)
        {
        	for (var i=1; i<3; i++)
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
         * 기능 : 포커스된 row가 바뀔때 이미지 찾는 함수 : lotid+inspItem 으로 파일정보 셀렉트하여 이미지 보여주기
         */
        this.fn_searchImage = function(idx, nRow)
        {
        	var objDs, resourceId, atchTypeCd;
        	if(idx == 0) { //외관검사
        		this.fv_imageViewerComp = this.tab.Tabpage1.form;
        		objDs = this.ds_OSPInspectionExterior;
        		resourceId = objDs.getColumn(nRow, "LOTID") + objDs.getColumn(nRow, "DEFECTCODE") + objDs.getColumn(nRow, "QCSEGMENTID") + "0" + objDs.getColumn(nRow, "DEGREE");

        	} else if(idx == 1) { //측정검사
        		this.fv_imageViewerComp = this.tab.Tabpage2.form;
        		objDs = this.ds_OSPInspectionMeasure;
        		resourceId = objDs.getColumn(nRow, "LOTID") + objDs.getColumn(nRow, "INSPITEMID") + objDs.getColumn(nRow, "DEGREE");

        	} else if(idx == 1) { //불량처리
        		this.fv_imageViewerComp = this.tab.Tabpage3.form;
        		objDs = this.ds_OSPInspDefect;
        		resourceId = objDs.getColumn(nRow, "LOTID") + objDs.getColumn(nRow, "DEFECTCODE") + objDs.getColumn(nRow, "QCSEGMENTID") + "D" + objDs.getColumn(nRow, "DEGREE");

        	}
        //  	atchTypeCd  = "BAS_DARESULT";
        //  	resourceId = "20210508164906503-4|OperationInspection|*";

        	if(this.nfn_isNull(resourceId)) return;

        	this.ds_qamImage.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        // 	this.ds_search.setColumn(0, "RESOURCETYPE", "ProcessInspection");
        // 	this.ds_search.setColumn(0, "RESOURCEVERSION", "*");
        	this.ds_search.setColumn(0, "ATCH_SRC_KEY", resourceId);
        	this.ds_search.setColumn(0, "ATCH_TY_CD", atchTypeCd);

        	var sSvcID 			= "selectAtchFiles";
        	var sController 	= "/qampopup/selectAtchFiles.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamImage=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * 기능 : div 영역에서 save 후에 호출될 함수. 현재 팝업 닫고, opener 새로 검색 (만약에 opener search 안할 경우에는 this.fn_close 호출)
         */
        this.fn_closeAndParentSearch = function(objDs)
        {
        	this.opener.fn_search();
        	this.close();
        };

        /*
         * 기능 : Select한 측정값중 inspitemId와 version 으로 해당 내역만 바인딩하는 함수
         */
        this.fn_bindingMeasureValueAfterSave = function(obj, row)
        {
        	this.ds_OSPMeasureByInspItem.filter("");
        	var filterStr = "INSPITEMID == '" + obj.getColumn(row, "INSPITEMID") + "' && INSPITEMVERSION == '" + obj.getColumn(row, "INSPITEMVERSION") + "'";
        	this.ds_OSPMeasureByInspItem.filter(filterStr);
        	this.ds_OSPMeasureByInspItem.set_rowposition(0);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.fn_close = function(obj,e)
        {
        	this.close();
        };

        // grd_OSPInspectionExterior focusedRow 체인지 이벤트
        this.ds_OSPInspectionExterior_onrowposchanged = function(obj,e)
        {
        	//this.fn_searchImage(0);
        	this.fn_setImage("this.tab.Tabpage1.form.img_OSPInspectionExterior", obj, e.newrow);
        };

        // grd_OSPInspectionMeasure focusedRow 체인지 이벤트
        this.ds_OSPInspectionMeasure_onrowposchanged = function(obj,e)
        {
        	this.fn_bindingMeasureValueAfterSave(obj, e.newrow);
        	//this.fn_searchImage(1);
        	this.fn_setImage("this.tab.Tabpage2.form.img_OSPInspectionMeasure", obj, e.newrow);
        };

        // grd_OSPInspDefect focusedRow 체인지 이벤트
        this.ds_OSPInspDefect_onrowposchanged = function(obj,e)
        {
        	//this.fn_searchImage(2);
        	this.fn_setImage("this.tab.Tabpage3.form.img_OSPInspDefect", obj, e.newrow);
        };

        // 탭 전환시 이미지 바인딩 event
        this.tab_onchanged = function(obj,e)
        {
        	//checkpoiont 20210601 테스트를 위해
        	//this.fn_searchImage(e.postindex);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_close.addEventHandler("onclick",this.fn_close,this);
            this.btn_x_close.addEventHandler("onclick",this.fn_close,this);
            this.div_basInfo.form.edt_processsegmentname.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_nextprocesssegmentname.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_usersequence.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_productdefid.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_productdefname.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_productdefversion.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_inputdate.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_productiontype.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_duedate.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_areaname.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_isrework.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_unit.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_pnlqty.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_pcsqty.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_productdeftype.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab.addEventHandler("onchanged",this.tab_onchanged,this);
            this.tab.Tabpage2.form.grd_OSPMeasureByInspItem.addEventHandler("onexpandup",this.tab_result_Tabpage2_grd_OSPMeasureByInspItem_onexpandup,this);
            this.btnSave.addEventHandler("onclick",this.fn_save,this);
            this.ds_OSPInspectionExterior.addEventHandler("onrowposchanged",this.ds_OSPInspectionExterior_onrowposchanged,this);
            this.ds_OSPInspectionMeasure.addEventHandler("onrowposchanged",this.ds_OSPInspectionMeasure_onrowposchanged,this);
            this.ds_OSPInspDefect.addEventHandler("onrowposchanged",this.ds_OSPInspDefect_onrowposchanged,this);
        };
        this.loadIncludeScript("QAM00700P1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
