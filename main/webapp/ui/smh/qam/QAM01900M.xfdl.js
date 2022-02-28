(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01900M");
            this.set_titletext("불량품 폐기취소");
            this.set_tooltiptext("MENU_PG-QC-0760");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRMATION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchRouting", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"JOBFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotDefectList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTPCSQTY\" type=\"INT\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"UOM\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISUNKNOWN\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"OUTBOUNDQTY\" type=\"INT\" size=\"256\"/><Column id=\"RECEIVEAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFINETIME\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODECOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUMLOTDEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ISORIGINALLOTMERGE\" type=\"STRING\" size=\"256\"/><Column id=\"ISORIGINALLOTMERGECODE\" type=\"STRING\" size=\"256\"/><Column id=\"MERGECHECK\" type=\"STRING\" size=\"256\"/><Column id=\"CANCELPCSQTY\" type=\"INT\" size=\"256\"/><Column id=\"CANCELPNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"ROUTINGTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CANCELCODE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPROCESSDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTUSERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTRESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTRESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRLOTNO\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNPROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNUSERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNRESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNRESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ISMIGRATION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHSTACK\" type=\"STRING\" size=\"256\"/><Column id=\"JOINCODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/><Column id=\"OCCURREDSTEPNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reworkLotDefectList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectCancleHistList", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"CANCELTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CANCELUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRLOTNO\" type=\"STRING\" size=\"256\"/><Column id=\"CANCELREASON\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTUSERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CANCELROUTINGTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CANCELTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTNO\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNPROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNUSERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNRESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNRESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"JOINCODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_productRoutingList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBFLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resultInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LOTID\">200908F003-1-FG00-001-009</Col><Col id=\"QTY\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveEtcParam", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CANCELUSER\" type=\"STRING\" size=\"256\"/><Column id=\"CANCELDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"TOTALDEFECTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"CANCELDEFECTPCS\" type=\"FLOAT\" size=\"256\"/><Column id=\"CANCELDEFECTPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"ISNEXTSEGMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_reportParamList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotDefectCountList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTPCSQTY\" type=\"INT\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"UOM\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISUNKNOWN\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"OUTBOUNDQTY\" type=\"INT\" size=\"256\"/><Column id=\"RECEIVEAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFINETIME\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODECOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUMLOTDEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ISORIGINALLOTMERGE\" type=\"STRING\" size=\"256\"/><Column id=\"ISORIGINALLOTMERGECODE\" type=\"STRING\" size=\"256\"/><Column id=\"MERGECHECK\" type=\"STRING\" size=\"256\"/><Column id=\"CANCELPCSQTY\" type=\"INT\" size=\"256\"/><Column id=\"CANCELPNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"ROUTINGTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CANCELCODE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPROCESSDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTUSERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTRESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTRESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRLOTNO\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNPROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNUSERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNRESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNRESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ISMIGRATION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHSTACK\" type=\"STRING\" size=\"256\"/><Column id=\"JOINCODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_routingList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTPCSQTY\" type=\"INT\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"UOM\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISUNKNOWN\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"OUTBOUNDQTY\" type=\"INT\" size=\"256\"/><Column id=\"RECEIVEAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFINETIME\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODECOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SUMLOTDEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ISORIGINALLOTMERGE\" type=\"STRING\" size=\"256\"/><Column id=\"ISORIGINALLOTMERGECODE\" type=\"STRING\" size=\"256\"/><Column id=\"MERGECHECK\" type=\"STRING\" size=\"256\"/><Column id=\"CANCELPCSQTY\" type=\"INT\" size=\"256\"/><Column id=\"CANCELPNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"ROUTINGTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CANCELCODE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPROCESSDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTUSERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTRESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTRESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRLOTNO\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNPROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNUSERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNRESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RETURNRESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ISMIGRATION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHSTACK\" type=\"STRING\" size=\"256\"/><Column id=\"JOINCODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("sta_title","30","16","122","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            obj.set_tooltiptext("MENU_PG-QC-0760");
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

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Tab("tab","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.div_work.form.tab);
            obj.set_text("불량취소");
            obj.set_tooltiptext("DEFECTCANCEL");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("title0","0","0",null,"34","708",null,null,null,null,null,this.div_work.form.tab.Tab1.form);
            obj.set_taborder("0");
            obj.set_text("불량 Lot");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DEFECTLOT");
            this.div_work.form.tab.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_saveDefectCancel",null,"50.3%","70","24","0",null,null,null,null,null,this.div_work.form.tab.Tab1.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_black");
            obj.set_text("불량취소");
            obj.set_tooltiptext("DEFECTCANCEL");
            this.div_work.form.tab.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_suttleUp","50.42%","50.3%","24","24",null,null,null,null,null,null,this.div_work.form.tab.Tab1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_shuttleT");
            this.div_work.form.tab.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_suttleDown",null,"50.3%","24","24","btn_suttleUp:10",null,null,null,null,null,this.div_work.form.tab.Tab1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_shuttleB");
            this.div_work.form.tab.Tab1.addChild(obj.name, obj);

            obj = new Div("div_lotInfo","0","btn_suttleUp:16.67%",null,"57","0",null,null,null,null,null,this.div_work.form.tab.Tab1.form);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.div_work.form.tab.Tab1.addChild(obj.name, obj);

            obj = new MaskEdit("msk_pnl","76.78%","30","9.31%","20",null,null,null,null,null,null,this.div_work.form.tab.Tab1.form.div_lotInfo.form);
            obj.set_taborder("0");
            obj.set_value("0");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_work.form.tab.Tab1.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","76.78%","5",null,"20","5",null,null,null,null,null,this.div_work.form.tab.Tab1.form.div_lotInfo.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_text("210202F001-1-FG00-001-001");
            this.div_work.form.tab.Tab1.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("sta_lotId","65.90%","5",null,"20","edt_lotId:5",null,null,null,null,null,this.div_work.form.tab.Tab1.form.div_lotInfo.form);
            obj.set_taborder("2");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("LOTID");
            this.div_work.form.tab.Tab1.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("sta_pnl","65.90%","30",null,"20","msk_pnl:5",null,null,null,null,null,this.div_work.form.tab.Tab1.form.div_lotInfo.form);
            obj.set_taborder("3");
            obj.set_text("PNL");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("PNL");
            this.div_work.form.tab.Tab1.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Edit("edt_itemName","40.79%","5",null,"20","sta_lotId:0",null,null,null,null,null,this.div_work.form.tab.Tab1.form.div_lotInfo.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("E A40N02E RF CAMERA(6L)-M3/4L");
            this.div_work.form.tab.Tab1.form.div_lotInfo.addChild(obj.name, obj);

            obj = new MaskEdit("msk_pcs","40.79%","30",null,"20","sta_pnl:151",null,null,null,null,null,this.div_work.form.tab.Tab1.form.div_lotInfo.form);
            obj.set_taborder("5");
            obj.set_value("0");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_format("#,##0");
            this.div_work.form.tab.Tab1.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("sta_pcs","31%","30",null,"20","msk_pcs:5",null,null,null,null,null,this.div_work.form.tab.Tab1.form.div_lotInfo.form);
            obj.set_taborder("6");
            obj.set_text("PCS");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("PCS");
            this.div_work.form.tab.Tab1.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("sta_itemName","31%","5",null,"20","edt_itemName:5",null,null,null,null,null,this.div_work.form.tab.Tab1.form.div_lotInfo.form);
            obj.set_taborder("7");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("ITEMNAME");
            this.div_work.form.tab.Tab1.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Edit("edt_itemId","10.98%","5",null,"20","sta_itemName:0",null,null,null,null,null,this.div_work.form.tab.Tab1.form.div_lotInfo.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("1060829B5");
            this.div_work.form.tab.Tab1.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("sta_itemId","0","5",null,"20","edt_itemId:5",null,null,null,null,null,this.div_work.form.tab.Tab1.form.div_lotInfo.form);
            obj.set_taborder("9");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("ITEMID");
            this.div_work.form.tab.Tab1.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Edit("edt_defectLotId","10.98%","30",null,"20","sta_pcs:0",null,null,null,null,null,this.div_work.form.tab.Tab1.form.div_lotInfo.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_text("210202F001-1-FG00-001-A02");
            this.div_work.form.tab.Tab1.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Static("sta_defectLotId","0","30",null,"20","edt_defectLotId:5",null,null,null,null,null,this.div_work.form.tab.Tab1.form.div_lotInfo.form);
            obj.set_taborder("10");
            obj.set_text("불량 Lot No");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("DEFECTLOTID");
            this.div_work.form.tab.Tab1.form.div_lotInfo.addChild(obj.name, obj);

            obj = new Grid("grd_lotDefectList","0","34",null,null,"0","btn_suttleUp:5",null,null,null,null,this.div_work.form.tab.Tab1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_lotDefectList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"210\"/><Column size=\"220\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"210\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"2\" colspan=\"13\" text=\"불량정보\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECTINFO\"/><Cell col=\"15\" colspan=\"6\" text=\"원인공정\" cssclass=\"cell_headMaster\" tooltiptext=\"CAUSEPROCESS\"/><Cell col=\"21\" colspan=\"8\" text=\"기타정보\" cssclass=\"cell_headMaster\" tooltiptext=\"ETC\"/><Cell row=\"1\" col=\"2\" text=\"처리일시\" tooltiptext=\"PROCESSDATE\"/><Cell row=\"1\" col=\"3\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell row=\"1\" col=\"4\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell row=\"1\" col=\"5\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell row=\"1\" col=\"6\" text=\"Lot No\" tooltiptext=\"Lot No\"/><Cell row=\"1\" col=\"7\" text=\"불량 Lot No\" tooltiptext=\"DEFECTLOTID\"/><Cell row=\"1\" col=\"8\" text=\"불량 코드\" tooltiptext=\"DEFECTCODE\"/><Cell row=\"1\" col=\"9\" text=\"불량명\" tooltiptext=\"DEFECTNAME\"/><Cell row=\"1\" col=\"10\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"11\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"12\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"13\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell row=\"1\" col=\"14\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell row=\"1\" col=\"15\" text=\"원인품목\" tooltiptext=\"REASONPRODUCT\"/><Cell row=\"1\" col=\"16\" text=\"Rev\" tooltiptext=\"Rev\"/><Cell row=\"1\" col=\"17\" text=\"원인 LotID\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell row=\"1\" col=\"18\" text=\"원인공정\" tooltiptext=\"REASONSEGMENT\"/><Cell row=\"1\" col=\"19\" text=\"원인작업장\" tooltiptext=\"REASONAREA\"/><Cell row=\"1\" col=\"20\" text=\"원인불명\" tooltiptext=\"ISUNKNOWN\"/><Cell row=\"1\" col=\"21\" text=\"양산구분\" tooltiptext=\"LOTTYPENAME\"/><Cell row=\"1\" col=\"22\" text=\"반출수량\" tooltiptext=\"OUTBOUNDQTY\"/><Cell row=\"1\" col=\"23\" text=\"보관처\" tooltiptext=\"STORAGE\"/><Cell row=\"1\" col=\"24\" text=\"확정일시\" tooltiptext=\"DEFINETIME\"/><Cell row=\"1\" col=\"25\" text=\"확정상태\" tooltiptext=\"CONFIRMATIONSTATUS\"/><Cell row=\"1\" col=\"26\" text=\"공정진행상태\" tooltiptext=\"PROCESSSTATE\"/><Cell row=\"1\" col=\"27\" text=\"UOM\" tooltiptext=\"UOM\"/><Cell row=\"1\" col=\"28\" text=\"처리STEP\" tooltiptext=\"PROCESSSTEP\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:PROCESSDATE\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"6\" text=\"bind:PARENTLOTID\"/><Cell col=\"7\" text=\"bind:LOTID\"/><Cell col=\"8\" text=\"bind:JOINCODE\"/><Cell col=\"9\" text=\"bind:JOINNAME\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:DEFECTPCSQTY\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:USERSEQUENCE\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:PLANTID\"/><Cell col=\"15\" text=\"bind:REASONCONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:REASONCONSUMABLEDEFVERSION\"/><Cell col=\"17\" text=\"bind:REASONCONSUMABLELOTID\"/><Cell col=\"18\" text=\"bind:REASONSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:REASONAREANAME\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:ISUNKNOWN\"/><Cell col=\"21\" text=\"bind:LOTTYPENAME\"/><Cell col=\"22\" text=\"bind:OUTBOUNDQTY\" textAlign=\"right\" maskeditformat=\"#,###,##0\" displaytype=\"mask\"/><Cell col=\"23\" text=\"bind:RECEIVEAREANAME\"/><Cell col=\"24\" text=\"bind:DEFINETIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\"/><Cell col=\"25\" text=\"bind:CONFIRMATIONSTATUS\"/><Cell col=\"26\" text=\"bind:PROCESSSTATENAME\"/><Cell col=\"27\" text=\"bind:UOM\"/><Cell col=\"28\" text=\"bind:OCCURREDSTEPNAME\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_lotDefectList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tab1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"330","58","5","450",null,null,null,null,null,this.div_work.form.tab.Tab1.form);
            obj.set_taborder("4");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.tab.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00_00","450","358","58","5",null,null,null,null,null,null,this.div_work.form.tab.Tab1.form);
            obj.set_taborder("6");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.tab.Tab1.addChild(obj.name, obj);

            obj = new Grid("grd_lotDefectCountList","0","div_lotInfo:10","497",null,null,"0",null,null,null,null,this.div_work.form.tab.Tab1.form);
            obj.set_taborder("8");
            obj.set_binddataset("ds_lotDefectCountList");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"185\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" colspan=\"2\" text=\"불량수량\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECTCOUNT\"/><Cell col=\"3\" colspan=\"2\" text=\"취소수량\" cssclass=\"cell_headMaster\" tooltiptext=\"CANCELCOUNT\"/><Cell col=\"5\" colspan=\"2\" text=\"불량정보\" cssclass=\"cell_headMaster,cell_end\" tooltiptext=\"DEFECTINFO\"/><Cell row=\"1\" col=\"1\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"2\" text=\"UOM\" tooltiptext=\"UOM\"/><Cell row=\"1\" col=\"3\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"4\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"5\" text=\"불량코드\" tooltiptext=\"DEFECTCODE\"/><Cell row=\"1\" col=\"6\" text=\"불량명\" tooltiptext=\"DEFECTNAME\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:DEFECTPCSQTY\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:UOM\"/><Cell col=\"3\" text=\"bind:CANCELPCSQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" editinputtype=\"number\" maskeditformat=\"#,###,###0\" maskeditautoselect=\"true\"/><Cell col=\"4\" text=\"bind:CANCELPNLQTY\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" editinputtype=\"number\" maskeditformat=\"#,###,###0\" maskeditautoselect=\"true\"/><Cell col=\"5\" text=\"bind:JOINCODE\"/><Cell col=\"6\" text=\"bind:JOINNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tab1.addChild(obj.name, obj);

            obj = new Grid("grd_routingList","506","div_lotInfo:10",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tab1.form);
            obj.set_taborder("9");
            obj.set_binddataset("ds_routingList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"26\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" text=\"Original Lot Merge\" cssclass=\"cell_headMaster\" tooltiptext=\"ORIGINALLOTMERGE\"/><Cell col=\"3\" colspan=\"5\" text=\"투입공정\" cssclass=\"cell_headMaster\" tooltiptext=\"INPUTSEGMENT\"/><Cell col=\"8\" colspan=\"3\" text=\"재작업 후 공정\" cssclass=\"cell_headMaster\" tooltiptext=\"RETURNSEGMENT\"/><Cell col=\"11\" text=\"기타정보\" cssclass=\"cell_headMaster\"/><Cell row=\"1\" text=\"Original Lot Merge\"/><Cell row=\"1\" col=\"1\" text=\"Check\" tooltiptext=\"Check\"/><Cell row=\"1\" col=\"2\" text=\"취소사유\" tooltiptext=\"REASONCANCEL\"/><Cell row=\"1\" col=\"3\" colspan=\"2\" text=\"라우팅명\" tooltiptext=\"ROUTINGNAME\"/><Cell row=\"1\" col=\"5\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"6\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"7\" text=\"자원명\" tooltiptext=\"RESOURCENAME\"/><Cell row=\"1\" col=\"8\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"9\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"10\" text=\"자원명\" tooltiptext=\"RESOURCENAME\"/><Cell row=\"1\" col=\"11\" text=\"설명\"/></Band><Band id=\"body\"><Cell text=\"bind:ISORIGINALLOTMERGE\"/><Cell col=\"1\" text=\"bind:MERGECHECK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:CANCELCODE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ReasonCancel,,Y,Y\"/><Cell col=\"3\" text=\"bind:INPUTPROCESSDEFNAME\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\" textAlign=\"left\"/><Cell col=\"4\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\" expandimage=\"url(&apos;theme://images/img_WF_inputDel_P.png&apos;)\" text=\"bind:X_T_BTN\"/><Cell col=\"5\" text=\"bind:INPUTUSERSEQUENCE\"/><Cell col=\"6\" text=\"bind:INPUTSEGMENTNAME\"/><Cell col=\"7\" text=\"bind:INPUTRESOURCENAME\"/><Cell col=\"8\" text=\"bind:RETURNUSERSEQUENCE\"/><Cell col=\"9\" text=\"bind:RETURNSEGMENTNAME\"/><Cell col=\"10\" text=\"bind:RETURNRESOURCENAME\"/><Cell col=\"11\" text=\"bind:설명\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tab1.addChild(obj.name, obj);

            obj = new Tabpage("Tab3",this.div_work.form.tab);
            obj.set_text("내역조회");
            obj.set_tooltiptext("HISTORYQUERY");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_defectCancleHistList","300","0",null,"34","504",null,null,null,null,null,this.div_work.form.tab.Tab3.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tab3.addChild(obj.name, obj);

            obj = new Static("subtitle1","0","0",null,"34","sta_cnt_ds_defectCancleHistList:50",null,null,null,null,null,this.div_work.form.tab.Tab3.form);
            obj.set_taborder("0");
            obj.set_text("취소내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tab3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_defectCancleHistList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tab3.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab.Tab3.addChild(obj.name, obj);

            obj = new Grid("grd_defectCancleHistList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tab3.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectCancleHistList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"210\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"210\"/><Column size=\"210\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" colspan=\"13\" text=\"취소정보\" cssclass=\"cell_headMaster\" tooltiptext=\"CANCELINFO\"/><Cell col=\"14\" colspan=\"6\" text=\"기타정보\" cssclass=\"cell_headMaster\"/><Cell row=\"1\" col=\"1\" text=\"취소일시\"/><Cell row=\"1\" col=\"2\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell row=\"1\" col=\"3\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell row=\"1\" col=\"4\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell row=\"1\" col=\"5\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell row=\"1\" col=\"6\" text=\"불량코드\" tooltiptext=\"DEFECTCODE\"/><Cell row=\"1\" col=\"7\" text=\"불량코드명\" tooltiptext=\"DEFECTCODENAME\"/><Cell row=\"1\" col=\"8\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"9\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"10\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"11\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell row=\"1\" col=\"12\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell row=\"1\" col=\"13\" text=\"불량 Lot No\" tooltiptext=\"DEFECTLOTID\"/><Cell row=\"1\" col=\"14\" text=\"Repair Lot No\"/><Cell row=\"1\" col=\"15\" text=\"취소사유\" tooltiptext=\"REASONCANCEL\"/><Cell row=\"1\" col=\"16\" text=\"취소구분\" tooltiptext=\"CANCELTYPE\"/><Cell row=\"1\" col=\"17\" text=\"취소자\" tooltiptext=\"CANCELUSER\"/><Cell row=\"1\" col=\"18\" text=\"UOM\" tooltiptext=\"UOM\"/><Cell row=\"1\" col=\"19\" text=\"설명\" tooltiptext=\"DESCRIPTION\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CANCELTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"bind:PARENTLOTID\"/><Cell col=\"6\" text=\"bind:JOINCODE\"/><Cell col=\"7\" text=\"bind:JOINNAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:PCSQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:USERSEQUENCE\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:PLANTID\"/><Cell col=\"13\" text=\"bind:LOTID\"/><Cell col=\"14\" text=\"bind:REPAIRLOTNO\"/><Cell col=\"15\" text=\"bind:CANCELREASON\"/><Cell col=\"16\" text=\"bind:CANCELTYPE\"/><Cell col=\"17\" text=\"bind:CANCELUSER\"/><Cell col=\"18\" text=\"bind:UNIT\"/><Cell col=\"19\" text=\"bind:DESCRIPTION\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tab3.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Combo("cbo_period","10","60","94","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("2");
            obj.set_innerdataset("gds_period");
            obj.set_codecolumn("code");
            obj.set_datacolumn("desc");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_area","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("16");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_defectlotId","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("8");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_lotType","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("10");
            obj.set_codecolumn("C,LotType,ALL,Y,Y");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("15");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("SITE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","275","102","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","275","146","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("17");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"255","45","20","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("18");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","281","10","27",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("19");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_createDate","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("20");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("SEARCHPERIOD");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_area","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("4");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_plantId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,N");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_productionDefinition","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("21");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONDEFINITION");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_defectlotId","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("22");
            obj.set_text("불량 Lot No");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DEFECTLOTID");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_lotId","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("23");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_processsegmentType","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("11");
            obj.set_codecolumn("C,ProcessSegmentType,ALL,Y,Y");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_lotproducTtype","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("24");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTPRODUCTTYPE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_processsegmentType","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("25");
            obj.set_text("공정구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSSEGMENTTYPE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_parentLotId","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("9");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productDef","108","110",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("6");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_productDef",null,"110","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productDef_id","126","380",null,"20","19",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("26");
            obj.set_visible("false");
            obj.set_tooltiptext("조회조건품목ID");
            obj.set_background("thistle");
            obj.set_enable("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","126","355",null,"20","19",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("28");
            obj.set_visible("false");
            obj.set_tooltiptext("조회조건작업장ID");
            obj.set_background("thistle");
            obj.set_enable("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Div("div_dateFrom","108","35",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("1");
            obj.set_url("common::com_calendar.xfdl");
            obj.set_text("");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Div("div_dateTo","108","60",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("3");
            obj.set_url("common::com_calendar.xfdl");
            obj.set_text("");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label08","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("27");
            obj.set_text("확정여부");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_confirm","108","235","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("13");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_area_id","25","356",null,"20","edt_area_id:10",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("29");
            obj.set_text("작업장ID");
            obj.set_visible("false");
            obj.set_textAlign("right");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_production_id","25","376",null,"20","edt_productDef_id:10",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("30");
            obj.set_text("품목Revision");
            obj.set_visible("false");
            obj.set_textAlign("right");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_calendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("QAM01900M.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM01900M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 불량품 폐기취소(품질관리 - 불량품 관리)
         * 파일명         : QAM019000M.xfdl
         * 작성자         : yanghee.kim
         * 작성일         : 2021.04.18
         *
         * 설  명         :
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.18   yanghee.kim   최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;	//품질관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.div_lotInfo = this.div_work.form.tab.Tab1.form.div_lotInfo.form;
        this.totalDefectQty=0; //해당LOT의 불량 총수량

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
            this.nfn_formInit(obj);

        	//global value setting
        	this.qamfn_setGlobalValue()

        	//접속사용자의 PLANT 조회
        	this.qamfn_searchUserPlant("ds_userAuthorityPlantList", this.tab_search.Tab1.form.cbo_plantId);

        	//조회기간 onchanged Event 추가
        	this.tab_search.Tab1.form.div_dateFrom.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_preiodChang, this);
        	this.tab_search.Tab1.form.div_dateTo.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_preiodChang, this);

        	//그리드 Head와 Body가 불일치하는 현상이 있어 공통 Event 제거
            this.div_work.form.tab.Tab1.form.grd_lotDefectList.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);

        	this.fn_formInit();    //최초 호출되는 초기화 함수
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 이벤트 : 불량취소 버튼 클릭시
         */
        this.fn_save = function(obj,e)
        {
        	//품목라우팅을 태우는 경우에는 사용자 지정 재작업라우팅 테이블을 초기화해준다.
        	if (this.ds_routingList.getColumn(0, "ROUTINGTYPE") == "Product")
        	{
        	    this.ds_reworkLotDefectList.ClearData(); //checkpoint
        	}
        	else
        	{
        		this.ds_reworkLotDefectList.addColumn("LOTID");
        		var lotId = this.div_work.form.tab.Tab1.form.div_lotInfo.form.edt_lotId.value;

        		for(var i=0; i<this.ds_reworkLotDefectList.getCount();i++)
        		{
        			this.ds_reworkLotDefectList.setColumn(i, "LOTID", lotId);
        		}
        	}

            if (!this.gfn_dsIsUpdated(this.ds_lotDefectCountList))
            {
                this.gfn_Message("NoSaveData", null, "warning", "ok");
                return;
            }

        	var totalCancelPcs = this.div_lotInfo.msk_pcs.value;

        	// 저장할 총 취소수량이 0이라면 Exception
        	if ( nexacro.toNumber(totalCancelPcs) == 0)
        	{
        		this.gfn_Message("CancelQtyIsZero", null, "warning", "ok");
        		return false;
        	}

        	// 취소할 불량중에 취소수량이 0인것이 있다면 Exception
        	var zeroCount = this.ds_lotDefectCountList.getCaseCount("CANCELPCSQTY == 0");
        	if (zeroCount > 0)
        	{
        		this.gfn_Message("CancelDefectIsZero", null, "warning", "ok");
        		return false;
        	}

        	// Original Lot Merge가 아닌데, 라우팅이 선택되지 않았다면 Exception
        	var aa =this.ds_routingList.getColumn(0, "MERGECHECK");
        	if (   (    this.nfn_isNull(this.ds_routingList.getColumn(0, "MERGECHECK"))
        	         || this.ds_routingList.getColumn(0, "MERGECHECK") == 0 )
        	    && (    this.nfn_isNull(this.ds_routingList.getColumn(0, "INPUTPROCESSDEFNAME"))
        	         && this.nfn_isNull(this.ds_routingList.getColumn(0, "INPUTPROCESSDEFID"))))
        	{
        		this.gfn_Message("NecessaryRouting", null, "warning", "ok");
        		return false;
        	}

        	// 실제 업무상 불량취소시 반출수량이 있으면 해당 실물이 없을 수 있기 때문에 반출수량을 감안하여 취소하여야 합니다.
        	var totalOutboundQty = this.ds_lotDefectCountList.getSum("OUTBOUNDQTY");
        	var totalDefectQty = this.ds_lotDefectCountList.getSum("DEFECTPCSQTY");
        	var totalCancelPcs = this.ds_lotDefectCountList.getSum("CANCELPCSQTY");

        	if (nexacro.toNumber(totalCancelPcs) > (nexacro.toNumber(totalDefectQty) - nexacro.toNumber(totalOutboundQty)))
        	{
        		if (!this.gfn_Message("ConfExistsOutBoundQty", "", "conf", "yesno")) return;
        	}
        	else
        	{
        		if (!this.gfn_Message("DoDefectCancel", "", "conf", "yesno")) return;
        	}

        	var isNextSegment = this.fn_searchProductRouting(this.ds_lotDefectCountList, "S");
        	this.fn_searchTotalLotDefect(this.ds_lotDefectCountList.getColumn(0, "LOTID"));

        	this.ds_saveEtcParam.clearData();
        	var nRow = this.ds_saveEtcParam.addRow();

        	var cancelPcs = this.div_lotInfo.msk_pcs.value;// 취소할 총 불량 PCS
        	var cancelPnl = this.div_lotInfo.msk_pnl.value; // 취소할 총 불량 PNL

        	this.ds_saveEtcParam.setColumn(nRow, "CANCELUSER"        , this.qam_userId);
        	this.ds_saveEtcParam.setColumn(nRow, "CANCELDATE"	     , this.nfn_getCurrentSystemTime(0));
        	this.ds_saveEtcParam.setColumn(nRow, "LOTID"             , this.ds_lotDefectCountList.getColumn(0, "LOTID"));
        	this.ds_saveEtcParam.setColumn(nRow, "PARENTLOTID"       , this.ds_lotDefectCountList.getColumn(0, "PARENTLOTID"));
        	this.ds_saveEtcParam.setColumn(nRow, "PRODUCTDEFID"      , this.ds_lotDefectCountList.getColumn(0, "PRODUCTDEFID"));
        	this.ds_saveEtcParam.setColumn(nRow, "PRODUCTDEFVERSION" , this.ds_lotDefectCountList.getColumn(0, "PRODUCTDEFVERSION"));
        	this.ds_saveEtcParam.setColumn(nRow, "PANELPERQTY"       , this.ds_lotDefectCountList.getColumn(0, "PANELPERQTY"));
        	this.ds_saveEtcParam.setColumn(nRow, "TOTALDEFECTQTY"    , this.totalDefectQty);
        	this.ds_saveEtcParam.setColumn(nRow, "CANCELDEFECTPCS"   , cancelPcs);
        	this.ds_saveEtcParam.setColumn(nRow, "CANCELDEFECTPNL"   , cancelPnl);
        	this.ds_saveEtcParam.setColumn(nRow, "ISNEXTSEGMENT"     , isNextSegment);

        	trace(this.ds_lotDefectCountList.saveXML());
        	trace(this.ds_routingList.saveXML());
        	trace(this.ds_reworkLotDefectList.saveXML());
        	trace(this.ds_saveEtcParam.saveXML());

            this.ds_resultInfo.clearData();
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID        = "saveLotDefectCancel";
        	var sController   = "/qam01900/saveLotDefectCancel.do";
        	var sInDatasets   = "ds_lotDefectCountList=ds_lotDefectCountList:U ds_routingList=ds_routingList:A ds_reworkLotDefectList=ds_reworkLotDefectList:U ds_saveEtcParam=ds_saveEtcParam:U";
        	var sOutDatasets  = "ds_resultInfo=output";
        	var sArgs         = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
            var tabIdx = this.div_work.form.tab.tabindex;
            switch (tabIdx)
            {
                case 0:
                    this.fn_searchLotDefectList();  //탭1 불량취소
                break;
                case 1:
                    this.fn_searchCancelHistList(); //탭2 내역조회
                break;
            }
        };

        /*
         * 기능 : 조회조건 SET
         */
        this.fn_setSearchParam = function()
        {
            this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow, "ENTERPRISEID",        this.qam_enterpriseId);
        	this.ds_search.setColumn(nRow, "LANGUAGETYPE",        this.qam_lang);
        	this.ds_search.setColumn(nRow, "USERID",              this.qam_userId);
            this.ds_search.setColumn(nRow, "PLANTID",             this.tab_search.Tab1.form.cbo_plantId.value);
        	this.ds_search.setColumn(nRow, "PERIODFR",            this.tab_search.Tab1.form.div_dateFrom.form.calStart.value);
        	this.ds_search.setColumn(nRow, "PERIODTO",            this.tab_search.Tab1.form.div_dateTo.form.calStart.value);
        	this.ds_search.setColumn(nRow, "AREAID",              this.tab_search.Tab1.form.edt_area_id.value);
        	this.ds_search.setColumn(nRow, "PRODUCTDEFID",        this.tab_search.Tab1.form.edt_productDef_id.value);
        	this.ds_search.setColumn(nRow, "LOTID",               this.tab_search.Tab1.form.edt_defectlotId.value);
        	this.ds_search.setColumn(nRow, "PARENTLOTID",         this.tab_search.Tab1.form.edt_parentLotId.value);
        	this.ds_search.setColumn(nRow, "LOTTYPE",             this.tab_search.Tab1.form.cbo_lotType.value);
        	this.ds_search.setColumn(nRow, "PROCESSSEGMENTTYPE",  this.tab_search.Tab1.form.cbo_processsegmentType.value);
            this.ds_search.setColumn(nRow, "CONFIRMATION",        this.tab_search.Tab1.form.cbo_confirm.value);
        };

        /*
         * 기능 : 탭1 불량취소
         */
        this.fn_searchLotDefectList = function ()
        {
        	this.ds_lotDefectList.clearData();
        	this.ds_lotDefectCountList.clearData();
        	this.ds_routingList.clearData();

        	//div_lotInfo 데이터 초기화
        	this.fn_setInitialDivLotInfo();

        	//조회조건 SET
            this.fn_setSearchParam();

        	var sSvcID        = "selectLotDefectCodeList";
            var sController   = "/qam01900/selectLotDefectCodeList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_lotDefectList=output";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭2 내역조회
         */
        this.fn_searchCancelHistList = function ()
        {
        	this.ds_defectCancleHistList.clearData();

        	//조회조건 SET
            this.fn_setSearchParam();

        	var sSvcID        = "selectDefectCancelHistoryList";
            var sController   = "/qam01900/selectDefectCancelHistoryList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_defectCancleHistList=output";
            var sArgs         = "";
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
            }
            else
            {
        	    if (trId == "selectProductRoutingPreviousProcessPathsList")
                {
        // 			if (this.ds_productRoutingList.rowcount == 0)
        // 			{
        // 				this.gfn_Message("LastProcesssegmentIsNotTakeoverGoods", null, "info", "ok"); //해당공정이 마지막 공정이므로 양품인계가 불가능합니다.
        // 				return false;
        // 			}
        		}
        		else if (trId == "selectTotalLotDefectInfo")
                {
        // 			if (this.ds_resultInfo.rowcount == 0)
        // 			{
        // 				this.totalDefectQty = this.ds_resultInfo.getColumn(0, "COUNT");
        // 			}
        		}
        		else if (trId == "selectLotDefectCodeList")
                {
        			if (this.ds_lotDefectList.rowcount < 1)
        			{
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}
        		}
        		else if (trId == "selectDefectCancelHistoryList")
                {
        			if (this.ds_defectCancleHistList.rowcount < 1)
        			{
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}
        		}
                else if (trId == "saveLotDefectCancel")
                {
        			//조회값이 NULL이라서 변경되지 않았을 경우 값이 <undefined>라서 추가함
        			var count = this.ds_routingList.getCaseCount("MERGECHECK == '0' || MERGECHECK == undefined ");

                    // Split할 불량이 하나도 없다면 Repiar Lot 생성하지 않음
        			if (count == 0)
        			{
        				this.gfn_Message("SuccessSave", null, "info", "ok");
        				this.fn_search();
        			}
        			else
        			{
        				var lotId = this.ds_resultInfo.getColumn(0, "LOTID");
        				var qty = " "+this.ds_resultInfo.getColumn(0, "QTY"); //메시지 띠울시 다국어 체크를 하는데 dictionaryid가 숫자인 경우가 있어 앞에 공백추가
        				this.gfn_Message("CompleteDefectCancelParam", [lotId, qty], "info", "ok");
        				this.fn_search();

        				// 품목라우팅일때
        				if (this.ds_reworkLotDefectList.rowcount == 0)
        				{
        					this.fn_callReport(lotId, this.nfn_getDictionaryname("NORMALWORKTIME", true)); //LotWorkType(Normal:정상)
        				}
        				// 재작업라우팅일때
        				else
        				{
        				    this.fn_callReport(lotId, this.nfn_getDictionaryname("NORMALWORKTIME", true)); //LotWorkType(Normal:정상)
        					this.fn_callReport(lotId, this.nfn_getDictionaryname("REWORK", true)); //LotWorkType(IsRework:재작업)
        				}

        			}
                }
            }
        };

        /*
         * 기능 : 레포트 호출
         */
        this.fn_callReport = function (pLotId, pLotWorkType)
        {
        	var workType = pLotId+ "|" + pLotWorkType;
        	var oArg = {
        		sRptPath   : "/PCM/",
        		sRptName   : "PCM00600R.mrd",
        		strField   : "[" + pLotId + "][" + this.qam_lang + "][" +  workType +  "][]",
        		bModalless : false
        	};

            var title 	= this.nfn_nvl(this.nfn_getDictionarynameUpper("LOTCARDPRINT"),"LOT Card 출력");
        	var sOption = "titletext="+title+",modeless=false";

        	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
         this.fn_openPop = function(svcId, popId)
        {
            // gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
            //-----------------
            // arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅, C::사용자 멀티 선택
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

            if(popupId == "SRCH_AREA228")    /*조회조건-작업장*/
            {
                opts = "width=450,height=500";
        		oArg.arg_paramCols   = "LANGUAGETYPE|PLANTID|USER_ID";
                oArg.arg_paramValues = this.qam_lang +'|'+ this.qam_plantId +'|'+ this.qam_userId;
                oArg.arg_rtnCols     = "AREAID|AREANAME";
        		oArg.arg_searchStr   = "AREAIDNAME=" + this.tab_search.Tab1.form.edt_area.value;
            }
        	else if(popupId == "SRCH_PRODUCTDEF218")    /*조회조건-품목*/
            {
        		oArg.arg_paramCols   = "PLANTID";
                oArg.arg_paramValues = this.qam_plantId;
                oArg.arg_rtnCols     = "PRODUCTDEFIDVERSION|PRODUCTDEFNAME";
        		oArg.arg_searchStr   = "PRODUCTDEFIDNAME=" + this.tab_search.Tab1.form.edt_productDef.value;
            }

            this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	if (sPopupId == "ROUTINGNAME") //라우팅 선택(QAM01900P1)
            {
        	    var rtn = this.qam_rtnValue[0];
        		var nRow = this.ds_routingList.rowposition;

        		if (!this.nfn_isNull(rtn))
        		{
        			this.ds_routingList.setColumn(nRow, "INPUTPROCESSDEFID",        rtn[0]);    // PROCESSDEFID            // 재작업 라우팅-투입 라우팅 ID
        			this.ds_routingList.setColumn(nRow, "INPUTPROCESSDEFVERSION",   rtn[1]);    // PROCESSDEFVERSION       // 재작업 라우팅-투입 라우팅 Version
        			this.ds_routingList.setColumn(nRow, "INPUTPROCESSDEFNAME",      rtn[2]);    // PROCESSDEFNAME          // 재작업 라우팅-투입 라우팅명
        			this.ds_routingList.setColumn(nRow, "INPUTPROCESSPATHID",       rtn[3]);    // PROCESSPATHID           // 재작업 라우팅-투입 라우팅 상세 ID
        			this.ds_routingList.setColumn(nRow, "INPUTUSERSEQUENCE",        rtn[4]);    // USERSEQUENCE            // 재작업 라우팅-순서
        			this.ds_routingList.setColumn(nRow, "INPUTSEGMENTID",           rtn[5]);    // PROCESSSEGMENTID        // 재작업 라우팅-투입 공정 ID
        			this.ds_routingList.setColumn(nRow, "INPUTSEGMENTVERSION",      rtn[6]);    // PROCESSSEGMENTVERSION   // 재작업 라우팅-투입 공정 Version
        			this.ds_routingList.setColumn(nRow, "INPUTSEGMENTNAME",         rtn[7]);    // PROCESSSEGMENTNAME      // 재작업 라우팅-투입 공정명
        			this.ds_routingList.setColumn(nRow, "INPUTAREAID",              rtn[8]);    // AREAID                  // 재작업 라우팅-투입 작업장 ID
        			this.ds_routingList.setColumn(nRow, "INPUTRESOURCEID",          rtn[9]);    // RESOURCEID              // 재작업 라우팅-투입 Resource ID
        			this.ds_routingList.setColumn(nRow, "INPUTRESOURCENAME",        rtn[10]);    // RESOURCENAME           // 재작업 라우팅-투입 Resource명

        			this.ds_reworkLotDefectList.clearData();
        		}

        	    var rtn1 = this.qam_rtnValue[1];
        		if (!this.nfn_isNull(rtn1))
        		{
        			this.ds_routingList.setColumn(nRow, "RETURNPROCESSDEFID",       rtn1[0]);    // PROCESSDEFID            // 재작업 후 공정-재작업 후 라우팅 ID
        			this.ds_routingList.setColumn(nRow, "RETURNPROCESSDEFVERSION",  rtn1[1]);    // PROCESSDEFVERSION       // 재작업 후 공정-재작업 후 라우팅 Version
        			this.ds_routingList.setColumn(nRow, "RETURNPROCESSPATHID",      rtn1[2]);    // PROCESSPATHID           // 재작업 후 공정-재작업 후 라우팅 상세 ID
        			this.ds_routingList.setColumn(nRow, "RETURNUSERSEQUENCE",       rtn1[3]);    // USERSEQUENCE            // 재작업 후 공정-재작업 후 순서
        			this.ds_routingList.setColumn(nRow, "RETURNSEGMENTID",          rtn1[4]);    // PROCESSSEGMENTID        // 재작업 후 공정-재작업 후 공정 ID
        			this.ds_routingList.setColumn(nRow, "RETURNSEGMENTVERSION",     rtn1[5]);    // PROCESSSEGMENTVERSION   // 재작업 후 공정-재작업 후 공정 Version
        			this.ds_routingList.setColumn(nRow, "RETURNSEGMENTNAME",        rtn1[6]);    // PROCESSSEGMENTNAME      // 재작업 후 공정-재작업 후 공정명
        			this.ds_routingList.setColumn(nRow, "RETURNAREAID",             rtn1[7]);    // AREAID                  // 재작업 후 공정-재작업 후 작업장 ID
        			this.ds_routingList.setColumn(nRow, "RETURNRESOURCEID",         rtn1[8]);    // RESOURCEID              // 재작업 후 공정-재작업 후 Resource ID
        			this.ds_routingList.setColumn(nRow, "RETURNRESOURCENAME",       rtn1[9]);    // RESOURCENAME            // 재작업 후 공정-재작업 후 작업장명

        			this.ds_reworkLotDefectList.clearData();
        		}

        	    var rtn3 = this.qam_rtnValue[2];
        		if (!this.nfn_isNull(rtn3))
        		{
        		   for(var i=0; i<rtn3.length; i++)
        		   {
        			 var nRow = this.ds_reworkLotDefectList.addRow();
        			 for(var j=0; j<rtn3[i].length; j++)
        			 {
        				this.ds_reworkLotDefectList.setColumn(i, j, rtn3[i][j]);
        			 }
        		   }
        		}

        		return;
        	}
        	else if (sPopupId == "REWORKROUTING") //
        	{
                return;
            }

            var rtn = this.fv_rtnValue;
            if(this.nfn_isNull(rtn)) return;

            if (sPopupId == "SRCH_AREA228")    /*조회조건-작업장*/
            {
                this.tab_search.Tab1.form.edt_area_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_area.set_value(rtn[1]);
            }
        	else if (sPopupId == "SRCH_PRODUCTDEF218")    /*조회조건-품목*/
            {
                this.tab_search.Tab1.form.edt_productDef_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_productDef.set_value(rtn[1]);
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
        	this.fn_setSearchDate("today"); //조회기간 셋팅
        	this.tab_search.Tab1.form.cbo_plantId.set_value(this.qam_plantId);
        	this.tab_search.Tab1.form.cbo_period.set_value("today"); //금일
        };

        /*
         * 기능 : 조회조건 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        };

        /*
         * 이벤트 : 조회조건- 조회기간 직접 변경시
         */
        this.fn_preiodChang = function(obj,e)
        {
        	if (!this.nfn_isNull(this.tab_search.Tab1.form.cbo_period.value))
        	{
        		this.tab_search.Tab1.form.cbo_period.set_text("사용자정의");
        	}
        };

        /*
         * 기능 : 조회기간의 기간타입이 변경될 경우 날짜 셋팅
         */
        this.fn_setSearchDate = function (pChangValue)
        {
        	if (this.nfn_isNull(pChangValue)) return false;

        	var sDate = this.nfn_getCurrentSystemTime(0, 0, pChangValue);
        	var arrDate = sDate.split(",");
        	var sDateFrom = arrDate[1];
        	var sDateTo = arrDate[2];
        	var sTime = "0830";

        	this.tab_search.Tab1.form.div_dateFrom.form.calStart.set_value(sDateFrom+sTime);
        	this.tab_search.Tab1.form.div_dateTo.form.calStart.set_value(sDateTo+sTime);
        };

        /*
         * 기능 : 취소사유를 양품인계로 변경시 공정체크
         */
        this.fn_searchProductRouting = function(pDataset, pJobFlag)
        {
            //조회조건 Setting
        	this.fn_setSearchRouting(pDataset, pJobFlag);

        	this.ds_productRoutingList.clearData();
            var sSvcID        = "selectProductRoutingPreviousProcessPathsList";
            var sController   = "/qam01900/selectProductRoutingPreviousProcessPathsList.do";
            var sInDatasets   = "INPUT=ds_searchRouting";
            var sOutDatasets  = "ds_productRoutingList=output";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", false, false,"");

        	if (pJobFlag == "C")
        	{
        		if (this.ds_productRoutingList.rowcount == 0)
        		{
        			this.gfn_Message("LastProcesssegmentIsNotTakeoverGoods", null, "info", "ok"); //해당공정이 마지막 공정이므로 양품인계가 불가능합니다.
        			return false;
        		}
        	}
        	else if (pJobFlag == "S")
        	{
        		if (this.ds_productRoutingList.rowcount == 0) return false;
        	}

        	return true;
        };

        /*
         * 기능 : 취소사유를 양품인계로 변경시 공정체크
         */
        this.fn_setSearchRouting = function (pDataset, pJobFlag)
        {
        	this.ds_searchRouting.clearData();
        	var nRow = this.ds_searchRouting.addRow();
        	var currRow = pDataset.rowposition;

        	this.ds_searchRouting.setColumn(nRow, "LANGUAGETYPE",      this.qam_lang);
        	this.ds_searchRouting.setColumn(nRow, "CANCELCODE",        "TakeoverGoods"); //양품인계
        	this.ds_searchRouting.setColumn(nRow, "LOTID",             pDataset.getColumn(currRow, "PARENTLOTID"));
        	this.ds_searchRouting.setColumn(nRow, "PROCESSDEFID",      pDataset.getColumn(currRow, "PARENTPROCESSDEFID"));
        	this.ds_searchRouting.setColumn(nRow, "PROCESSDEFVERSION", pDataset.getColumn(currRow, "PARENTPROCESSDEFVERSION"));
        	this.ds_searchRouting.setColumn(nRow, "PROCESSSEGMENTID",  pDataset.getColumn(currRow, "PROCESSSEGMENTID"));
        	this.ds_searchRouting.setColumn(nRow, "JOBFLAG",           pJobFlag);
        	this.ds_searchRouting.setColumn(nRow, "VERSION",           "10002");
        };

        /*
         * 해당 Lot의 취소수량을 받아와 완불처리 됬는지 판별(Y - 완불처리, N - 완불처리아님)
         */
        this.fn_searchIsAllQtyDefectLot = function(pLotNo, pCancelQty)
        {
        	this.ds_resultInfo.clearData();
            var sSvcID        = "selectIsAllQtyDefectLot";
            var sController   = "/qam01900/selectIsAllQtyDefectLot.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_resultInfo=output";
            var sArgs         = "";
        		sArgs        += this.gfn_setParam("LOTID",      pLotNo);
                sArgs        += this.gfn_setParam("DEFECTQTY",  pCancelQty);

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");

        	var result = this.ds_resultInfo.getColumn(0, "COUNT") == 1 ? "Y" : "N";
        	return result;
        };


        /*
         * 기능 : 해당 Lot의 불량 총수량
         */
        this.fn_searchTotalLotDefect = function(pLotNo)
        {
        	this.ds_resultInfo.clearData();
            var sSvcID        = "selectTotalLotDefectInfo";
            var sController   = "/qam01900/selectTotalLotDefectInfo.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_resultInfo=output";
            var sArgs         = "";
        		sArgs        += this.gfn_setParam("LOTID",      pLotNo);
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", false, false, "");

        	this.totalDefectQty = this.ds_resultInfo.getColumn(0, "COUNT");
        };

        /*
         *
         */
        this.ds_lotDefectList_cancolumnchange = function(obj,e)
        {
        	if (e.columnid == "CHK")
        	{
        		if (e.newvalue == "1")
        		{
        			var currLotId;
        			var currProductDef;
        			var nRow = this.ds_lotDefectList.findRow("CHK", "1");

        			if (nRow > -1)
        			{
        				chkLotId = this.ds_lotDefectList.getColumn(nRow, "LOTID");
        				chkProductDef = this.ds_lotDefectList.getColumn(nRow, "PRODUCTDEFID") + this.ds_lotDefectList.getColumn(nRow, "PRODUCTDEFVERSION");
        				currLotId = this.ds_lotDefectList.getColumn(e.row, "LOTID");
        				currProductDef = this.ds_lotDefectList.getColumn(e.row, "PRODUCTDEFID") + this.ds_lotDefectList.getColumn(e.row, "PRODUCTDEFVERSION");

        				if (chkLotId != currLotId)
        				{
        					this.gfn_Message("MixSelectLotID", "", "warning", "ok"); // 다른 Lot ID는 선택할 수 없습니다.
        					return false;
        				}

        				if (chkProductDef != currProductDef)
        				{
        					this.gfn_Message("MixSelectLotID", "", "warning", "ok"); // 다른 Lot ID는 선택할 수 없습니다.
        					return false;
        				}
        			}
        		}//if e.newvalue
        	}// if e.columnid
        };

        /*
         * 기능 : 취소 PCS 수량이 변할때마다 Total PCS 수량과 취소 PNL 수량을 계산한다.
         */
        this.ds_lotDefectCountList_oncolumnchanged = function(obj,e)
        {
        	obj.set_enableevent(false);

        	// 취소 PCS수량 입력할때
        	if (e.columnid == "CANCELPCSQTY")
        	{
        		var totalCancelPcs = 0; // 취소할 총 불량PCS(전체)
        		var totalCancelPnl = 0; // 취소할 총 불량PNL(전체)

        		var cancelPcs   = nexacro.toNumber(e.newvalue); // 취소할 불량수량(개별)
        		var panelPerQty = nexacro.toNumber(obj.getColumn(e.row, "PANELPERQTY")); // PNL당 PCS수량(개별)
        		var cancelPnl   = panelPerQty == 0 ? 0 : Math.ceil(cancelPcs / panelPerQty); // 취소 PNL 수량(개별)

        		obj.setColumn(e.row, "CANCELPNLQTY", cancelPnl);

        		// 모든 Row에 대한 취소 PCS수량의 합을 구한다.
        		totalCancelPcs = obj.getSum("CANCELPCSQTY");
        		totalCancelPnl = obj.getSum("CANCELPNLQTY");

        		// 취소할 불량수량이 총 불량수량보다 많다면 Exception
        		if (cancelPcs > nexacro.toNumber(obj.getColumn(e.row, "DEFECTPCSQTY")))
        		{
        			this.gfn_Message("CancelGreatThenDefect", "", "warning", "ok"); // 취소할 수량이 불량수량보다 많습니다.

        			obj.setColumn(e.row, "CANCELPCSQTY", 0);
        			obj.setColumn(e.row, "CANCELPNLQTY", 0);
                    obj.set_enableevent(true);

        			// 모든 Row에 대한 취소 PCS수량과 PNL수량의 합을 다시 구한다.
        			totalCancelPcs = 0;
        			totalCancelPnl = 0;

        			totalCancelPcs = obj.getSum("CANCELPCSQTY");
        			totalCancelPnl = obj.getSum("CANCELPNLQTY");

        			this.div_lotInfo.msk_pcs.set_value(totalCancelPcs);// 취소할 총 불량 PCS
        			this.div_lotInfo.msk_pnl.set_value(totalCancelPnl); // 취소할 총 불량 PNL
        			return false;
        		}

        		this.div_lotInfo.msk_pcs.set_value(totalCancelPcs);// 취소할 총 불량 PCS
        		this.div_lotInfo.msk_pnl.set_value(totalCancelPnl); // 취소할 총 불량 PNL
        	}
        	// 취소 PNL 수량 입력할때
        	else if (e.columnid == "CANCELPNLQTY")
        	{

        		var totalCancelPcs = 0; // 취소할 총 불량PCS(전체)
        		var totalCancelPnl = 0; // 취소할 총 불량PNL(전체)

        		var cancelPnl = nexacro.toNumber(e.newvalue); // 취소할 불량수량(개별)
        		var panelPerQty = nexacro.toNumber(obj.getColumn(e.row, "PANELPERQTY")); // PNL당 PCS수량(개별)
        		var cancelPcs = 0;

        		// 취소할 불량수량이 총 불량수량보다 많다면 Exception
        		if (nexacro.toNumber(obj.getColumn(e.row, "CANCELPNLQTY")) > nexacro.toNumber(obj.getColumn(e.row, "DEFECTPNLQTY")))
        		{
        			this.gfn_Message("CancelGreatThenDefect", "", "warning", "ok"); // 취소할 수량이 불량수량보다 많습니다.

        			obj.setColumn(e.row, "CANCELPCSQTY", 0);
        			obj.setColumn(e.row, "CANCELPNLQTY", 0);
        			obj.set_enableevent(true);

        			// 모든 Row에 대한 취소 PCS수량과 PNL수량의 합을 다시 구한다.
        			totalCancelPcs = 0;
        			totalCancelPnl = 0;

        			// 모든 Row에 대한 취소 PCS수량과 PNL수량의 합을 구한다.
        			totalCancelPcs = obj.getSum("CANCELPCSQTY");
        			totalCancelPnl = obj.getSum("CANCELPNLQTY");

        			this.div_lotInfo.msk_pcs.set_value(totalCancelPcs);// 취소할 총 불량 PCS
        			this.div_lotInfo.msk_pnl.set_value(totalCancelPnl); // 취소할 총 불량 PNL
        			return false;
        		}

        		var defectPcsQty = obj.getColumn(e.row, "DEFECTPCSQTY");

        		if (panelPerQty * cancelPnl > nexacro.toNumber(defectPcsQty))
        		{
        			obj.setColumn(e.row, nexacro.toNumber(defectPcsQty));
        		}
        		else
        		{
        			cancelPcs = cancelPnl * panelPerQty; // 취소 PCS 수량(개별)
        			obj.setColumn(e.row, "CANCELPCSQTY", cancelPcs);
        		}

        		// 모든 Row에 대한 취소 PCS수량과 PNL수량의 합을 구한다.
        		totalCancelPcs = obj.getSum("CANCELPCSQTY");
        		totalCancelPnl = obj.getSum("CANCELPNLQTY");

        		this.div_lotInfo.msk_pcs.set_value(totalCancelPcs);// 취소할 총 불량 PCS
        		this.div_lotInfo.msk_pnl.set_value(totalCancelPnl); // 취소할 총 불량 PNL
        	} //if e.columnid

        	if (e.columnid == "CANCELPCSQTY" || e.columnid == "CANCELPNLQTY")
        	{
        		var lotId = obj.getColumn(e.row, "LOTID");
        		var pcsCnt = this.div_lotInfo.msk_pcs.value;

        		// 해당 Lot 완불처리 Check
        		if (this.fn_searchIsAllQtyDefectLot(lotId, pcsCnt) == "Y")
        		{
        			// 완불처리된 Lot의 전량취소이므로 원래 Lot에 원복처리됩니다.
        			this.gfn_Message("AllDefectLotAllCancelisOriginalLotRestore", "", "warning", "ok");
                    this.ds_routingList.set_enableevent(false);
        			this.ds_routingList.setColumn(0, "MERGECHECK", 1);
        			this.ds_routingList.setColumn(0, "CANCELCODE", "Retest");
        			this.ds_routingList.setColumn(0, "INPUTPROCESSDEFID", "");
        			this.ds_routingList.setColumn(0, "INPUTPROCESSDEFVERSION", "");
        			this.ds_routingList.setColumn(0, "INPUTPROCESSDEFNAME", "");
        			this.ds_routingList.setColumn(0, "INPUTPROCESSPATHID", "");
        			this.ds_routingList.setColumn(0, "INPUTUSERSEQUENCE", "");
        			this.ds_routingList.setColumn(0, "INPUTSEGMENTID", "");
        			this.ds_routingList.setColumn(0, "INPUTSEGMENTVERSION", "");
        			this.ds_routingList.setColumn(0, "INPUTSEGMENTNAME", "");
        			this.ds_routingList.setColumn(0, "INPUTAREAID", "");
        			this.ds_routingList.setColumn(0, "INPUTRESOURCEID", "");
        			this.ds_routingList.setColumn(0, "INPUTRESOURCENAME", "");
        			this.ds_routingList.setColumn(0, "RETURNPROCESSDEFID", "");
        			this.ds_routingList.setColumn(0, "RETURNPROCESSDEFVERSION", "");
        			this.ds_routingList.setColumn(0, "RETURNPROCESSPATHID", "");
        			this.ds_routingList.setColumn(0, "RETURNUSERSEQUENCE", "");
        			this.ds_routingList.setColumn(0, "RETURNSEGMENTID", "");
        			this.ds_routingList.setColumn(0, "RETURNSEGMENTVERSION", "");
        			this.ds_routingList.setColumn(0, "RETURNSEGMENTNAME", "");
        			this.ds_routingList.setColumn(0, "RETURNAREAID", "");
        			this.ds_routingList.setColumn(0, "RETURNRESOURCEID", "");
        			this.ds_routingList.setColumn(0, "RETURNRESOURCENAME", "");
        			this.ds_routingList.set_enableevent(true);
        			this.ds_reworkLotDefectList.clearData();
        		}
        		else
        		{
        			this.ds_routingList.set_enableevent(false);
        			this.ds_routingList.setColumn(0, "MERGECHECK", 0);
        			this.ds_routingList.set_enableevent(true);
        		}
        	} //if (e.columnid == "CANCELPCSQTY" || e.columnid == "CANCELPNLQTY")

        	obj.set_enableevent(true);
        };


        /*
         * 기능 : 취소사유가 양품인계인 경우는 Lot의 공정진행상태가 작업완료일때만 가능하다.
         */
        this.ds_routingList_cancolumnchange = function(obj,e)
        {
        	if (e.columnid == "MERGECHECK")
        	{
        		//Original Lot Merge가 가능이면 활성화 불가능이면 비활성화
        		if (obj.getColumn(e.row, "ISORIGINALLOTMERGECODE") == "N") return false;
        	}
            else if (e.columnid != "MERGECHECK" && obj.getColumn(e.row, "MERGECHECK") ==  1)
        	{
        	    // Original Lot Merge를 할 경우 Row 비활성화
        		this.gfn_Message("OriginalLotMergeNotSelect", "", "warning", "ok");
        		return false;
        	}
        	else if (e.columnid == "CANCELCODE")
        	{
        		//취소사유가 불량취소시 라우팅정보 초기화하지 않음
        		if (e.newvalue != "Retest")
        		{
        			obj.set_enableevent(false);
        			obj.setColumn(0, "INPUTPROCESSDEFNAME", "");
        			obj.setColumn(0, "INPUTUSERSEQUENCE", "");
        			obj.setColumn(0, "INPUTSEGMENTNAME", "");
        			obj.setColumn(0, "INPUTRESOURCENAME", "");
        			obj.setColumn(0, "RETURNUSERSEQUENCE", "");
        			obj.setColumn(0, "RETURNSEGMENTNAME", "");
        			obj.setColumn(0, "RETURNRESOURCENAME", "");
        			obj.set_enableevent(true);
        		}

        		//취소사유가 양품인계인 경우는 Lot의 공정진행상태가 작업완료일때만 가능하다.
        		if (e.newvalue == "TakeoverGoods") //양품인계
        		{
        		    var processState = obj.getColumn(0, "PROCESSSTATE");

                    if (processState != "WaitForSend") //인수대기
        			{
        				this.gfn_Message("ProcessstateIsWaitForSendPossibleTakeoverGoods", null, "warning", "ok"); //LOT의 공정진행상태가 작업완료일때만 양품인계가 가능합니다.
        				return false;
        			}
        			//불량난 해당 공정이 마지막 공정이라면 양품인계가 불가능하다.
        			else
        			{
        				if (!this.fn_searchProductRouting(this.ds_routingList, "C"))
        				{
        					obj.set_enableevent(false);
        					obj.setColumn(e.row, "CANCELCODE", "");
        					obj.set_enableevent(true);
        					return false;
        				}
        			}
        		} // if e.newvalue
        	}
            else if (e.columnid == "INPUTPROCESSDEFNAME")
        	{
        		//라우팅명 초기화시 관련정보 초기화
        		if (this.nfn_isNull(e.newvalue))
        		{
        			obj.set_enableevent(false);
        			obj.setColumn(e.row, "INPUTUSERSEQUENCE", "");
        			obj.setColumn(e.row, "INPUTSEGMENTNAME", "");
        			obj.setColumn(e.row, "INPUTRESOURCENAME", "");
        			obj.setColumn(e.row, "RETURNUSERSEQUENCE", "");
        			obj.setColumn(e.row, "RETURNSEGMENTNAME", "");
        			obj.setColumn(e.row, "RETURNAREAID", "");
        			obj.setColumn(e.row, "RETURNRESOURCENAME", "");
        			obj.set_enableevent(true);
        		}
        	} //if e.columnid

        	return true;
        };

        /*
         * 기능 : 체크된 불량코드를 가져와 LOT, PCS, PNL 수량을 계산한다.
         */
        this.fn_setCalcCount = function ()
        {
        	if (this.ds_lotDefectCountList.rowcount == 0)
        	{
        		//div_lotInfo 데이터 초기화
        		this.fn_setInitialDivLotInfo();
        	}
        	else
        	{
        		var pcsCnt = this.ds_lotDefectCountList.getSum("CANCELPCSQTY");
        		var pnlCnt = this.ds_lotDefectCountList.getSum("CANCELPNLQTY");
        		var itemId = this.ds_lotDefectCountList.getColumn(0, "PRODUCTDEFID");
        		var itemNm = this.ds_lotDefectCountList.getColumn(0, "PRODUCTDEFNAME");
        		var lotId  = this.ds_lotDefectCountList.getColumn(0, "PARENTLOTID");
        		var defectLotId = this.ds_lotDefectCountList.getColumn(0, "LOTID");

        		this.div_lotInfo.edt_itemId.set_value(itemId);
        		this.div_lotInfo.edt_itemName.set_value(itemNm);
        		this.div_lotInfo.edt_lotId.set_value(lotId);
        		this.div_lotInfo.edt_defectLotId.set_value(defectLotId);
        		this.div_lotInfo.msk_pcs.set_value(pcsCnt);
        		this.div_lotInfo.msk_pnl.set_value(pnlCnt);
        	}
        };

        /*
         *
         */
        this.fn_setInitialControl = function ()
        {
        	this.ds_lotDefectCountList.clearData();
        	this.ds_routingList.clearData();

        	//div_lotInfo 데이터 초기화
        	this.fn_setInitialDivLotInfo();
        };

        /*
         * 기능 : div_lotInfo 데이터 초기화
         */
        this.fn_setInitialDivLotInfo = function ()
        {
        	this.div_lotInfo.edt_lotId.set_value("");
        	this.div_lotInfo.edt_itemId.set_value("");
        	this.div_lotInfo.edt_itemName.set_value("");
        	this.div_lotInfo.edt_defectLotId.set_value("");
        	this.div_lotInfo.msk_pcs.set_value("");
        	this.div_lotInfo.msk_pnl.set_value("");
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 이벤트 : 조회조건 아이콘 버튼 클릭시
         */
        this.fn_popup_click = function(obj,e)
        {
        	if (obj.name == "btn_area")
        	{
        		this.fn_openPop("SRCH_AREA228","P00228"); //작업장
        	}
        	else if (obj.name == "btn_productDef")
        	{
        		this.fn_openPop("SRCH_PRODUCTDEF218","P00218"); //품목
        	}
        };

        /*
         * 이벤트 : 조회조건 이름 삭제시 id 초기화
         */
        this.fn_popup_canchange = function(obj,e)
        {
        	if (obj.name == "edt_area")
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_area_id.set_value("");
        	}
        	else if (obj.name == "edt_productDef")
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_productDef_id.set_value("");
        	}
        };

        /*
         * 이벤트 : 조회조건- 조회기간 타입 변경시
         */
        this.tab_search_Tab1_cbo_period_canitemchange = function(obj,e)
        {
        	this.fn_setSearchDate(e.postvalue);
        };

        /*
         * 이벤트 :
         */
        this.btn_suttleDown_onclick = function(obj,e)
        {
        	var sourceCnt = this.ds_lotDefectList.getCaseCount("CHK == '1'");
        	if (sourceCnt == 0) return false;

        	if (this.ds_routingList.rowcount > 0)
        	{
        		var sourceRow         = this.ds_lotDefectList.findRow("CHK", "1");
        		var sourceLotId       = this.ds_lotDefectList.getColumn(sourceRow, "LOTID");
        		var sourceParentLotId = this.ds_lotDefectList.getColumn(sourceRow, "PARENTLOTID");
        		var targetLotId       = this.ds_lotDefectCountList.getColumn(0, "LOTID");
        		var sourceProduct     = this.ds_lotDefectList.getColumnInfo(sourceRow, "PRODUCTDEFID") + this.ds_lotDefectList.getColumnInfo(sourceRow, "PRODUCTDEFVERSION");
        		var targetProduct     = this.ds_lotDefectCountList.getColumnInfo(0, "PRODUCTDEFID") + this.ds_lotDefectCountList.getColumnInfo(0, "PRODUCTDEFVERSION");

        		if (sourceLotId != targetLotId)
        		{
        			this.ds_lotDefectList.setColumn(this.ds_lotDefectList.rowposition, "CHK", 0);
        			this.gfn_Message("MixSelectLotID", "", "warning", "ok"); // 다른 Lot ID는 선택할 수 없습니다.
        			return false;
        		}

        		if (sourceProduct != targetProduct)
        		{
        			this.ds_lotDefectList.setColumn(this.ds_lotDefectList.rowposition, "CHK", 0);
        			this.gfn_Message("MixSelectProduct", "", "warning", "ok"); // 다른 품목은 선택할 수 없습니다.
        			return false;
        		}
        	} //if this.ds_routingList

        	for(var i=this.ds_lotDefectList.rowcount-1 ; i>= 0 ; i--)
        	{
        		if(this.ds_lotDefectList.getColumn(i,"CHK") == "1")
        		{
        			var nRow = this.ds_lotDefectCountList.addRow();
        			this.ds_lotDefectCountList.copyRow(nRow, this.ds_lotDefectList, i);
        			this.ds_lotDefectCountList.setColumn(nRow, "CHK", 0);
        			if (this.ds_routingList.rowcount == 0)
        			{
        				var routingRow = this.ds_routingList.addRow();
        				this.ds_routingList.copyRow(routingRow, this.ds_lotDefectList, i);
        				this.ds_routingList.setColumn(routingRow, "CHK", 0);

        				if (this.ds_lotDefectList.getColumn(i, "ISORIGINALLOTMERGECODE") == "Y")
        				{
        					this.ds_routingList.setColumn(routingRow, "ISORIGINALLOTMERGE",  this.nfn_getDictionarynameUpper("POSSIBLE")); // 가능
        				}
        				else
        				{
        				    this.ds_routingList.setColumn(routingRow, "ISORIGINALLOTMERGE",  this.nfn_getDictionarynameUpper("IMPOSSIBLE")); // 불가능
        				}

        			}
        			this.ds_lotDefectList.deleteRow(i);
        		} //if CHK
        	}//for

        	//체크된 불량코드를 가져와 LOT, PCS, PNL 수량을 계산한다.
        	this.fn_setCalcCount();
        };

        /*
         * 이벤트 :
         */
        this.btn_suttleUp_onclick = function(obj,e)
        {
        	for(var i=this.ds_lotDefectCountList.rowcount-1 ; i>= 0 ; i--)
        	{
        		if(this.ds_lotDefectCountList.getColumn(i,"CHK")== "1")
        		{
        			var nRow = this.ds_lotDefectList.addRow();
        			this.ds_lotDefectList.copyRow(nRow, this.ds_lotDefectCountList, i);
        			this.ds_lotDefectList.setColumn(nRow, "CHK", "0");
        			this.ds_lotDefectCountList.deleteRow(i);
        		}
        	}

        	if (this.ds_lotDefectCountList.rowcount == 0)
        	{
        		if (this.ds_routingList.rowcount == 0) return;

        		this.ds_routingList.deleteRow(0);
        	}

        	//체크된 불량코드를 가져와 LOT, PCS, PNL 수량을 계산한다.
        	this.fn_setCalcCount();
        };

        /*
         * 이벤트 : 내역조회 Row 더블클릭시 어떤 라우팅을 태웠는지 확인할 수 있는 팝업
         */
        this.fn_gridOncelldblclick = function(obj,e)
        {
        	var objDataset = obj.getBindDataset();
            var popupId = "REWORKROUTING";
           	var oArg = {};
        	    oArg.cancelReason             = objDataset.getColumn(e.row, "CANCELREASON");
                oArg.repairLotNo              = objDataset.getColumn(e.row, "REPAIRLOTNO");
                oArg.cancelRoutingType        = objDataset.getColumn(e.row, "CANCELROUTINGTYPE");
                oArg.resourceName             = objDataset.getColumn(e.row, "RESOURCENAME");
                oArg.returnResourceName       = objDataset.getColumn(e.row, "RETURNRESOURCENAME");
                oArg.inputSegmentId           = objDataset.getColumn(e.row, "INPUTSEGMENTID");
                oArg.inputUserSequence        = objDataset.getColumn(e.row, "INPUTUSERSEQUENCE");
                oArg.returnProcessSgementId   = objDataset.getColumn(e.row, "RETURNPROCESSSEGMENTID");
        		oArg.returnUserSequence       = objDataset.getColumn(e.row, "RETURNUSERSEQUENCE");
        		oArg.lotId                    = objDataset.getColumn(e.row, "LOTID");
                oArg.txnHistKey               = objDataset.getColumn(e.row, "TXNHISTKEY");
        		oArg.requestNo                = objDataset.getColumn(e.row, "REQUESTNO");

        	this.gfn_openPopup(popupId,"qam::QAM01900P2.xfdl",oArg,"width=1000,height=581");
        };

        /*
         * 이벤트 : Cell 에 표시된 확장버튼에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다.
         */
        this.fn_grid_onexpandup = function(obj,e)
        {
            //라우팅
        	if (e.cell == obj.getBindCellIndex("body", "INPUTPROCESSDEFNAME"))
        	{
        		var objDataset = obj.getBindDataset();

        		// 취소사유가 선택되지 않았다면 라우팅 선택팝업 비활성화
        		if (this.nfn_isNull(objDataset.getColumn(e.row, "CANCELCODE")))
        		{
        			this.gfn_Message("CancelReasonSelectAfterRouting", "", "warning", "ok");
        			return false;
        		}
        		var popupId = "ROUTINGNAME";
                var oArg = {};
        	    oArg.parentLotId             = objDataset.getColumn(e.row, "PARENTLOTID");
        		oArg.lotId                   = objDataset.getColumn(e.row, "LOTID");
                oArg.cancelCode              = objDataset.getColumn(e.row, "CANCELCODE");
                oArg.parentProcessDefId      = objDataset.getColumn(e.row, "PARENTPROCESSDEFID");
                oArg.parentProcessDefVersion = objDataset.getColumn(e.row, "PARENTPROCESSDEFVERSION");
                oArg.processSegmentId        = objDataset.getColumn(e.row, "PROCESSSEGMENTID");
                oArg.productDefId            = objDataset.getColumn(e.row, "PRODUCTDEFID");
                oArg.productDefVersion       = objDataset.getColumn(e.row, "PRODUCTDEFVERSION");
                oArg.areaId                  = objDataset.getColumn(e.row, "AREAID");
        		this.gfn_openPopup(popupId,"qam::QAM01900P1.xfdl",oArg,"width=1000,height=550");
        	}
        	else if (e.cell == 4)
        	{
        		this.ds_routingList.setColumn(e.row, "INPUTPROCESSDEFNAME", "");
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.tab.Tab1.form.btn_saveDefectCancel.addEventHandler("onclick",this.fn_save,this);
            this.div_work.form.tab.Tab1.form.btn_suttleUp.addEventHandler("onclick",this.btn_suttleUp_onclick,this);
            this.div_work.form.tab.Tab1.form.btn_suttleDown.addEventHandler("onclick",this.btn_suttleDown_onclick,this);
            this.div_work.form.tab.Tab1.form.grd_lotDefectList.addEventHandler("onheadclick",this.div_work_tab_Tab1_grd_lotDefectList_onheadclick,this);
            this.div_work.form.tab.Tab1.form.grd_routingList.addEventHandler("onexpandup",this.fn_grid_onexpandup,this);
            this.div_work.form.tab.Tab3.form.grd_defectCancleHistList.addEventHandler("oncelldblclick",this.fn_gridOncelldblclick,this);
            this.tab_search.Tab1.form.cbo_period.addEventHandler("canitemchange",this.tab_search_Tab1_cbo_period_canitemchange,this);
            this.tab_search.Tab1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tab1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tab1.form.edt_area.addEventHandler("canchange",this.fn_popup_canchange,this);
            this.tab_search.Tab1.form.btn_area.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.edt_productDef.addEventHandler("canchange",this.fn_popup_canchange,this);
            this.tab_search.Tab1.form.btn_productDef.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.div_dateFrom.addEventHandler("onkeydown",this.fn_preiodChang,this);
            this.tab_search.Tab1.form.div_dateFrom.addEventHandler("onrbuttondown",this.tab_search_Tab1_div_dateFrom_onrbuttondown,this);
            this.tab_search.Tab1.form.div_dateFrom.addEventHandler("onrbuttonup",this.tab_search_Tab1_div_dateFrom_onrbuttonup,this);
            this.tab_search.Tab1.form.div_dateTo.addEventHandler("onkeydown",this.fn_preiodChang,this);
            this.ds_lotDefectList.addEventHandler("cancolumnchange",this.ds_lotDefectList_cancolumnchange,this);
            this.ds_lotDefectCountList.addEventHandler("oncolumnchanged",this.ds_lotDefectCountList_oncolumnchanged,this);
            this.ds_routingList.addEventHandler("cancolumnchange",this.ds_routingList_cancolumnchange,this);
        };
        this.loadIncludeScript("QAM01900M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
