(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM00700M");
            this.set_titletext("수입검사 NCR");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEADLINE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RELRESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RELRESOURCEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RELRESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTTXNGROUPHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURE_INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURE_INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_topProcessSegmentClass", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processInspAbnormalList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANYAGREE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANYAGREEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"TXNGROUPHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"JUDGMENTCRITERIA\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"Column19\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSITAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"STATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"ISSEND\" type=\"STRING\" size=\"256\"/><Column id=\"ISSENDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"NCRISSUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISNCRISSUE\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTWORKRESULTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISMODIFY\" type=\"STRING\" size=\"256\"/><Column id=\"AFFECTISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"CARREQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CAREXPECTEDRECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RELRESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RELRESOURCEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RELRESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTTXNGROUPHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMSCRAPAMT\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMETCAMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_OSPInspectionExterior", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DCQCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISAQL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLINSPECTIONLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDEFECTLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"AQLCYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"ISNCR\" type=\"STRING\" size=\"256\"/><Column id=\"NCRINSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NCRCYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRDEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRLOTSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"DECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"CANDELETE\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"PRIORITY\" type=\"STRING\" size=\"256\"/><Column id=\"FILEINSPECTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILERESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ORIPROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID1\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_OSPInspectionMeasure", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONMETHODNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"RENCRDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONSTANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"SPECSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"TARGETVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"UPPERSPECLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"LOWERSPECLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"CL\" type=\"STRING\" size=\"256\"/><Column id=\"UPPERCONTROLLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"LOWERCONTROLLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"UPPERSCREENLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"LOWERSCREENLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"REPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"REENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"QCGRADE\" type=\"STRING\" size=\"256\"/><Column id=\"PRIORITY\" type=\"STRING\" size=\"256\"/><Column id=\"FILEINSPECTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILERESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ORIPROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"FILEID\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID1\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_OSPMeasureByInspItem", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ORIPROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"LOWERSPECLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"UPPERSPECLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"LOWERCONTROLLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"UPPERCONTROLLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"UPPERSCREENLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"LOWERSCREENLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"TXNGROUPHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"ISDELETE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME\" type=\"STRING\" size=\"256\" datapath=\"\"/><Column id=\"INSPECTIONSTANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"TARGETVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_OSPInspDefect", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"SAMPLEQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"INSPECTIONQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTQTYPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"FILEINSPECTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILERESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID1\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_FILE_GUID2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("sta_title","30","16","165","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-QC-0091");
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

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","0","0","192","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("수입검사 이상발생 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("PROCESSABNORMALOCCURRENCE");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_processInspAbnormalList","0","34",null,"40%","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_processInspAbnormalList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"64\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"110\"/><Column size=\"170\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"210\"/><Column size=\"80\"/><Column size=\"102\"/><Column size=\"83\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"210\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" tooltiptext=\"COMPANYAGREE\" text=\"업체동의\"/><Cell col=\"3\" text=\"업체동의일시\" tooltiptext=\"COMPANYAGREEDATE\"/><Cell col=\"4\" text=\"처리 현황\" tooltiptext=\"PROCESSSTATUS\"/><Cell col=\"5\" text=\"완료일시\" tooltiptext=\"INSPECTIONDATE\"/><Cell col=\"6\" text=\"대공정\" tooltiptext=\"PROCESSSEGMENTCLASS\"/><Cell col=\"7\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"8\" tooltiptext=\"PROCESSSEGMENTVERSION\" text=\"공정 Rev.\"/><Cell col=\"9\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell col=\"10\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"11\" text=\"품목명\" tooltiptext=\"PRODUCTNAME\"/><Cell col=\"12\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"13\" text=\"인계작업장\" tooltiptext=\"TRANSITAREA\"/><Cell col=\"14\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"15\" text=\"차수\" tooltiptext=\"DEGREE\"/><Cell col=\"16\" tooltiptext=\"ISTAKEOVER\" text=\"인계처리 여부\"/><Cell col=\"17\" tooltiptext=\"INSPECTIONRESULT\" text=\"판정결과\"/><Cell col=\"18\" text=\"원인품목명\" tooltiptext=\"REASONPRODUCTDEFNAME\"/><Cell col=\"19\" text=\"원인 품목 Rev\" tooltiptext=\"REASONCONSUMABLEDEFVERSION\"/><Cell col=\"20\" text=\"원인자재 LOT\" tooltiptext=\"CAUSEMATERIALLOT\"/><Cell col=\"21\" text=\"원인공정명\" tooltiptext=\"REASONSEGMENTNAME\"/><Cell col=\"22\" text=\"원인작업장명\" tooltiptext=\"REASONAREANAME\"/><Cell col=\"23\" text=\"CAR 요청 일자\" tooltiptext=\"CARREQUESTDATE\"/><Cell col=\"24\" text=\"CAR 접수 예정 일자\" tooltiptext=\"CAREXPECTEDRECEIPTDATE\"/><Cell col=\"25\" text=\"CAR 접수 일자\" tooltiptext=\"CARRECEIPTDATE\"/><Cell col=\"26\" text=\"CAR 승인 일자\" tooltiptext=\"CARAPPROVALDATE\"/><Cell col=\"27\" text=\"CAR 유효성 평가 일자\" tooltiptext=\"CARCLOSEDATE\"/><Cell col=\"28\" text=\"마감여부\" tooltiptext=\"ISCLOSE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:COMPANYAGREE\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:COMPANYAGREEDATE\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:STATENAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:INSPECTIONDATE\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"6\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\" text=\"bind:PROCESSSEGMENTCLASSNAME\"/><Cell col=\"7\" text=\"bind:PROCESSSEGMENTNAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"8\" text=\"bind:PROCESSSEGMENTVERSION\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"9\" text=\"bind:AREANAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"10\" text=\"bind:PRODUCTDEFID\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"11\" text=\"bind:PRODUCTDEFNAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"12\" text=\"bind:PRODUCTDEFVERSION\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"13\" text=\"bind:TRANSITAREANAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"14\" text=\"bind:LOTID\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"15\" text=\"bind:DEGREE\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"16\" text=\"bind:ISSENDNAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"17\" text=\"bind:INSPECTIONRESULT\" combocodecol=\"C,OKNG,,Y,N\" displaytype=\"combotext\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"18\" text=\"bind:REASONCONSUMABLEDEFNAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"19\" text=\"bind:REASONCONSUMABLEDEFVERSION\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"20\" text=\"bind:REASONCONSUMABLELOTID\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"21\" text=\"bind:REASONSEGMENTNAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"22\" text=\"bind:REASONAREANAME\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"23\" text=\"bind:CARREQUESTDATE\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"24\" text=\"bind:CAREXPECTEDRECEIPTDATE\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"25\" text=\"bind:RECEIPTDATE\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"26\" text=\"bind:APPROVALDATE\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"27\" text=\"bind:CLOSEDATE\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"28\" text=\"bind:ISCLOSE\" cssclass=\"expr:dataset.getColumn(currow, &quot;AFFECTISLOCKING&quot;)==&quot;Y&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab","0","grd_processInspAbnormalList:44",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab);
            obj.set_text("외관 검사");
            obj.set_tooltiptext("EXTERIORINSPECTION");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_OSPInspectionExterior","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_OSPInspectionExterior");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"130\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"95\"/><Column size=\"88\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"불량코드명\" tooltiptext=\"DEFECTCODENAME\"/><Cell col=\"2\" colspan=\"2\" text=\"검사 수량\" cssclass=\"cell_headMaster\" tooltiptext=\"INSPECTIONQTY\"/><Cell col=\"4\" colspan=\"2\" text=\"불량 수량\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECTQTY\"/><Cell col=\"6\" rowspan=\"2\" text=\"불량률(%)\" tooltiptext=\"DEFECTRATEANDPERCENT\"/><Cell col=\"7\" rowspan=\"2\" text=\"판정결과\" tooltiptext=\"INSPECTIONRESULT\"/><Cell row=\"1\" col=\"2\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"3\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"4\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"5\" text=\"PNL\" tooltiptext=\"PNL\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:JOINNAME\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:INSPECTIONQTY\" displaytype=\"mask\" maskeditautoselect=\"true\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"3\" text=\"bind:INSPECTIONQTYPNL\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"#,##0\" textAlign=\"right\" editautoselect=\"true\"/><Cell col=\"4\" text=\"bind:DEFECTQTY\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"#,##0\" textAlign=\"right\" editautoselect=\"true\"/><Cell col=\"5\" text=\"bind:DEFECTQTYPNL\" displaytype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"#,##0\" textAlign=\"right\" editautoselect=\"true\"/><Cell col=\"6\" text=\"bind:DEFECTRATE\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:INSPECTIONRESULT\" combocodecol=\"C,OKNG,,Y,N\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("title2_01","0","0","62","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("외관 검사");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("EXTERIORINSPECTION");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00","112","9","118","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("판정기준(외관검사)");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("EXTINSPSTANDARDTYPE");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_inspectionDecisionClass","235","9","165","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,InspectionDecisionClass,,Y,Y");
            obj.set_readonly("true");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("측정 검사");
            obj.set_tooltiptext("MEASUREINSPECTION");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_OSPInspectionMeasure","0","36",null,"35%","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_OSPInspectionMeasure");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"300\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사항목명\" tooltiptext=\"INSPITEMNAME\"/><Cell col=\"2\" text=\"검사기준\" tooltiptext=\"INSPECTIONSTANDARD\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INSPITEMNAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:INSPECTIONSTANDARD\" suppress=\"1\" suppressalign=\"middle\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_measureValue","0","grd_OSPInspectionMeasure:0%","80","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("측정 값");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MEASUREVALUE");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_OSPMeasureByInspItem","0","sta_measureValue:0",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_OSPMeasureByInspItem");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"측정값\" tooltiptext=\"MEASUREVALUE\"/><Cell col=\"2\" text=\"판정결과\" tooltiptext=\"INSPECTIONRESULT\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:MEASUREVALUE\" displaytype=\"mask\" maskeditformat=\"#,0.######\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"2\" text=\"bind:INSPECTIONRESULT\" combocodecol=\"C,OKNG,,Y,Y\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("title2_01","0","1","66","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("측정 항목");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MEASUREITEM");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab);
            obj.set_text("불량(폐기) 처리");
            obj.set_tooltiptext("DEFECTDISPOSAL");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_OSPInspDefect","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_OSPInspDefect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"210\"/><Column size=\"100\"/><Column size=\"210\"/><Column size=\"210\"/><Column size=\"180\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"불량코드명\" tooltiptext=\"DEFECTCODENAME\"/><Cell col=\"2\" colspan=\"2\" text=\"검사 수량\" cssclass=\"cell_headMaster\" tooltiptext=\"INSPECTIONQTY\"/><Cell col=\"4\" colspan=\"2\" text=\"불량 수량\" cssclass=\"cell_headMaster\" tooltiptext=\"SPECOUTQTY\"/><Cell col=\"6\" rowspan=\"2\" text=\"불량률 (%)\" tooltiptext=\"DEFECTRATE\"/><Cell col=\"7\" rowspan=\"2\" text=\"원인품목명\" tooltiptext=\"REASONCONSUMABLEDEFID\"/><Cell col=\"8\" rowspan=\"2\" text=\"원인품목 Rev\"/><Cell col=\"9\" rowspan=\"2\" text=\"원인 LOTID\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell col=\"10\" rowspan=\"2\" text=\"원인공정명\" tooltiptext=\"REASONPROCESSSEGMENTNAME\"/><Cell col=\"11\" rowspan=\"2\" text=\"원인작업장명\" cssclass=\"cell_end\" tooltiptext=\"REASONAREANAME\"/><Cell row=\"1\" col=\"2\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"3\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"4\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"5\" text=\"PNL\" tooltiptext=\"PNL\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:JOINNAME\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr: dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:INSPECTIONQTY\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:INSPECTIONQTYPNL\" maskeditformat=\"#,##0\" displaytype=\"mask\" edittype=\"mask\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"4\" text=\"bind:DEFECTQTY\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:DEFECTQTYPNL\" maskeditformat=\"#,##0\" displaytype=\"mask\" edittype=\"mask\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:DEFECTRATE\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:REASONSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:REASONCONSUMABLEDEFVERSION\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:REASONCONSUMABLELOTID\" combocodecol=\"CONSUMABLELOTID\" combodatacol=\"CONSUMABLELOTID\" combodataset=\"ds_defectReasonConsumable\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:REASONCONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:REASONAREANAME\" cssclass=\"cell_end\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Static("title2_01","0","0","150","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("불량(폐기) 처리");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DEFECTDISPOSAL");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_processInspAbnormalList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00_00","0","grd_processInspAbnormalList:10","230","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("판정결과");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("INSPECTIONRESULT");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_saveAgree",null,"6","68","24","btn_xlDn_grd_processInspAbnormalList:5",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("업체동의");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("COMPANYAGREE");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Combo("cbo_topProcessSegment","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_topProcessSegmentClass");
            obj.set_codecolumn("PROCESSSEGMENTCLASSID");
            obj.set_datacolumn("PROCESSSEGMENTCLASSNAME");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("7");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("SITE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_productDefId","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("8");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","250","102","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","250","146","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"230","45","20","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("10");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","256","10","27",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("11");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_period","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("12");
            obj.set_text("발행기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISSUEPERIOD");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_period","10","60","94","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("금주");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_dateFrom","108","35",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_dateTo","108","60",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_plantId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("0");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_topProcessSegment","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("13");
            obj.set_text("대공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("TOPPROCESSSEGMENTID");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productDef_id","126","380",null,"20","19",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("14");
            obj.set_visible("false");
            obj.set_tooltiptext("조회조건품목ID");
            obj.set_background("thistle");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","126","355",null,"20","19",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("15");
            obj.set_visible("false");
            obj.set_tooltiptext("조회조건작업장ID");
            obj.set_background("thistle");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_hidden3","25","355",null,"20","172",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("16");
            obj.set_text("작업장ID");
            obj.set_visible("false");
            obj.set_textAlign("right");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_hidden4","25","380",null,"20","172",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("17");
            obj.set_text("품목ID");
            obj.set_visible("false");
            obj.set_textAlign("right");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_isClose","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("18");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("YESNO");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_isClose","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("19");
            obj.set_text("마감여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISCLOSE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_state","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("20");
            obj.set_codecolumn("C,CARProgressStatus,ALL,Y,Y");
            obj.set_text("PROGRESSSTATUS");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_progressStatus","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("21");
            obj.set_text("처리현황");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("64D452C9C02143189B0FDA2EEACC5AB8");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_area","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("22");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_area","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("23");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREAIDNAME");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"135","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_lotId","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("25");
            obj.set_text("Lot No");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("26");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productDef","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("27");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_productDef",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_finder");
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
            obj = new BindItem("item0","div_work.form.tab.Tabpage1.form.cbo_inspectionDecisionClass","value","ds_processInspAbnormalList","JUDGMENTCRITERIA");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM00700M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM00700M.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM00700M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 품질관리>>수입검사>>수입검사 NCR
         * 파일명         : QAM007000M.xfdl
         * 작성자         : 권혜영
         * 작성일         : 2021.05.13
         *
         * 설  명         :
         * 참  고         : 수입검사 이상발생 현황 색변경 Grid cssclass(AFFECTISLOCKING=="Y")
         //expr:comp.parent.parent.parent.parent.gfn_isNull(dataset.getColumn(currow, "INSPECTIONRESULT"))?'':'cell_bg_yellow'?? 측정검사 그리드 khyed???
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.13   권혜영
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/; //기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;	//품질관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.qamSearchComp;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
            this.nfn_formInit(obj);

        	//global value setting
        	this.qamfn_setGlobalValue();

        	this.qamSearchComp = this.tab_search.Tab1.form;

        	this.basfn_getPeriodData("ds_periodType");

        	//접속사용자의 PLANT 조회
        	this.qamfn_searchUserPlant("ds_userAuthorityPlantList", this.tab_search.Tab1.form.cbo_plantId);

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
        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
            var dateFrom = this.tab_search.Tab1.form.cal_dateFrom.value + this.qam_jobStartTime;
        	var dateTo = this.tab_search.Tab1.form.cal_dateTo.value + this.qam_jobEndTime;

        	this.ds_processInspAbnormalList.clearData();
            this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow, "LANGUAGETYPE",          this.qam_lang);
        	this.ds_search.setColumn(nRow, "ENTERPRISEID",          this.qam_enterpriseId);
        	this.ds_search.setColumn(nRow, "USERID",          		this.qam_userId);
        	this.ds_search.setColumn(nRow, "PLANTID",               this.tab_search.Tab1.form.cbo_plantId.value);
        	this.ds_search.setColumn(nRow, "PERIODFR",              dateFrom); //발행기간
        	this.ds_search.setColumn(nRow, "PERIODTO",              dateTo); //발행기간
        	this.ds_search.setColumn(nRow, "LOTID",                 this.tab_search.Tab1.form.edt_lotId.value);	//LotID
        	this.ds_search.setColumn(nRow, "PROCESSSEGMENTCLASSID", this.tab_search.Tab1.form.cbo_topProcessSegment.value);//대공정
        	this.ds_search.setColumn(nRow, "AREAID",                this.tab_search.Tab1.form.edt_area_id.value);//작업장
        	this.ds_search.setColumn(nRow, "PRODUCTDEFID",          this.tab_search.Tab1.form.edt_productDef_id.value); //품목
        	this.ds_search.setColumn(nRow, "STATE",                 this.tab_search.Tab1.form.cbo_state.value); //처리현황
        	this.ds_search.setColumn(nRow, "ISCLOSE",               this.tab_search.Tab1.form.cbo_isClose.value); //마감여부

            var sSvcID        = "selectProcessInspAbnormalList";
            var sController   = "/qam00700/selectProcessInspAbnormalList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_processInspAbnormalList=output";
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
                if (trId == "selectProcessInspAbnormalList")
                {
        			if (this.ds_processInspAbnormalList.rowcount < 1) {
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        			} else {
        				//this.fn_searchTabAll();
        			}
        			//this.fn_searchTabAll();
        		} else if (trId == "selectOSPInspectionAll")
        		{
        			// AS-IS : SelectMeasureValueAfterSave(row)
        			//var row = this.ds_processInspAbnormalList.rowposition;
        			//this.fn_searchMeasureValueAfterSave(row);

        			// AS-IS : BindingMeasureValueAfterSave(itemRow);
        			this.fn_bindingMeasureValueAfterSave(this.ds_OSPInspectionMeasure, this.ds_OSPInspectionMeasure.rowposition);

        		}
        		else if (trId == "saveOSPInspectionCompanyAgree") //업체동의
        		{
                    this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search();
                }
            }
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

            oArg.arg_type = "B";
            oArg.arg_popupCd = popId;
            oArg.arg_popupNm = "";
            oArg.arg_paramCols = "";
            oArg.arg_paramValues = "";
            oArg.arg_searchStr = "";

            if(popupId == "SRCH_AREA157")    /*조회조건-작업장*/
            {
                oArg.arg_type        = "BA";
        		oArg.arg_paramCols   = "P_POPTYPE|P_USER|P_PLANTID|P_LANGUAGETYPE|VALIDSTATE";
                oArg.arg_paramValues = "AREALISTBYAUTHORITY|"+this.qam_userId + "|" + this.qam_plantId + "|" + this.qam_lang + "|Valid";
                oArg.arg_rtnCols     = "AREAID|AREANAME";
        		if (!this.nfn_isNull(this.tab_search.Tab1.form.edt_area.value))
        		{
        			oArg.arg_searchStr   = "P_DICTIONARY=" + this.tab_search.Tab1.form.edt_area.value;
        		}
        		else
        		{
        			oArg.arg_searchStr   = "1=1";
        		}
            }
        	else if(popupId == "SRCH_PRODUCTDEF160")    /*조회조건-품목*/
            {
                oArg.arg_type        = "CA";
        		oArg.arg_paramCols   = "P_POPTYPE";
                oArg.arg_paramValues = "PRODUCTDEFINITION";
                oArg.arg_rtnCols     = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        		oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + this.tab_search.Tab1.form.edt_productDef.value;
            }

            this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if(this.nfn_isNull(rtn)) return;

            if(sPopupId == "SRCH_AREA157")    /*조회조건-작업장*/
            {
                this.tab_search.Tab1.form.edt_area_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_area.set_value(rtn[1]);
            }
        	else if(sPopupId == "SRCH_PRODUCTDEF160")    /*조회조건-품목*/
            {
        		var arrProductdefId      = "";
        		var arrProductdefNM      = "";
        		var arrProductdefVersion = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			if (i > 0)
        			{
        				arrProductdefId      += ",";
        				arrProductdefNM      += ",";
        				arrProductdefVersion += ",";
        			}
        			arrProductdefId      += colArray[0];
        			arrProductdefNM      += colArray[1];
        			arrProductdefVersion += colArray[2];
        		}

                this.tab_search.Tab1.form.edt_productDef_id.set_value(arrProductdefId);
        		this.tab_search.Tab1.form.edt_productDef.set_value(arrProductdefNM);
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
        	this.tab_search.Tab1.form.cbo_plantId.set_value(this.qam_plantId);
        	this.tab_search.Tab1.form.cbo_period.set_value("THISWEEK"); //금주
        	this.fn_setSearchDate("THISWEEK");

        	this.fn_initCombo();
        };

        /*
         * 기능 : 조회조건 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        };

        /*
         * 검색 대공정 콤보 조회
         */
        this.fn_initCombo = function ()
        {
        	var sArgs         = "";
        	    sArgs        += this.gfn_setParam("LANGUAGETYPE",  this.qam_lang); //
        		sArgs        += this.gfn_setParam("PLANTID",       this.qam_plantId); //
            	sArgs        += this.gfn_setParam("PROCESSSEGMENTCLASSTYPE",  "TopProcessSegmentClass"); //
        		sArgs        += this.gfn_setParam("CMB_TYPE",  "ALL");
        		sArgs        += this.gfn_setParam("VALIDSTATE",  "Valid");

        	var oColumn 	= {code: "PROCESSSEGMENTCLASSID", name: "PROCESSSEGMENTCLASSNAME"};
        	this.qamfn_setCustomQueryCmb(this.tab_search.Tab1.form.cbo_topProcessSegment // Object
        								, "selectProcessSegmentClassList,,Y,A" // OPTION
        								, sArgs
        								, "fn_callBack"
        								, true 										//Async
        								, oColumn);
        };

        /*
         * 기능: 탭 조회 (AS-IS : SearchResult)
         */
        this.fn_searchTabAll = function ()
        {
        	var objDs = this.ds_processInspAbnormalList;
        	var rowPos = this.ds_processInspAbnormalList.rowposition;

        	if(rowPos < 0) retrun;

            this.firstCall = false;
        	this.ds_OSPInspectionExterior.clearData();
            this.ds_OSPInspectionMeasure.clearData();
        	this.ds_OSPMeasureByInspItem.clearData();
        	this.ds_OSPInspDefect.clearData();

        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();

        	this.ds_search.setColumn(nRow, "LANGUAGETYPE",          this.qam_lang);
        	this.ds_search.setColumn(nRow, "ENTERPRISEID",          this.qam_enterpriseId);
        	this.ds_search.setColumn(nRow, "USERID",          		this.qam_userId);
        	this.ds_search.setColumn(nRow, "PLANTID",               this.tab_search.Tab1.form.cbo_plantId.value);
        	this.ds_search.setColumn(nRow, "RESOURCEID", 			objDs.getColumn(rowPos, "LOTID"));
        	this.ds_search.setColumn(nRow, "RESOURCETYPE",          "ProcessInspection");
        	this.ds_search.setColumn(nRow, "PROCESSRELNO", 			objDs.getColumn(rowPos, "PROCESSRELNO"));
        	this.ds_search.setColumn(nRow, "RELRESOURCEID", 		objDs.getColumn(rowPos, "PRODUCTDEFID"));
        	this.ds_search.setColumn(nRow, "RELRESOURCEVERSION", 	objDs.getColumn(rowPos, "PRODUCTDEFVERSION"));
        	this.ds_search.setColumn(nRow, "RELRESOURCETYPE",       "Product");

        	// 측정검사 INSPECTIONDEFID , INSPECTIONCLASSID 값은 service 단에서 처리함-> 명칭 변경
        	this.ds_search.setColumn(nRow, "INSPECTIONDEFID",       "OSPInspection");
        	this.ds_search.setColumn(nRow, "INSPECTIONCLASSID",     "OSPInspection");
        	this.ds_search.setColumn(nRow, "RESULTTXNHISTKEY", 		objDs.getColumn(rowPos, "TXNHISTKEY"));
        	this.ds_search.setColumn(nRow, "RESULTTXNGROUPHISTKEY", objDs.getColumn(rowPos, "TXNGROUPHISTKEY"));

        	// 측정검사 검사항목 가져오기위한 파라미터
        	this.ds_search.setColumn(nRow, "MEASURE_INSPECTIONDEFID",     "OperationInspection");
        	this.ds_search.setColumn(nRow, "MEASURE_INSPECTIONCLASSID",   "OperationInspection");

        	this.ds_search.setColumn(nRow, "PROCESSSEGMENTID", 		objDs.getColumn(rowPos, "PROCESSSEGMENTID"));
        	this.ds_search.setColumn(nRow, "PROCESSSEGMENTVERSION", objDs.getColumn(rowPos, "PROCESSSEGMENTVERSION"));
        	this.ds_search.setColumn(nRow, "INSPITEMTYPE",          "SPC");
        	this.ds_search.setColumn(nRow, "RESULT",          		"NG");

            var sSvcID        = "selectOSPInspectionAll";
            var sController   = "/qam00600/selectOSPInspectionAll.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_OSPInspectionExterior=output1 ds_OSPInspectionMeasure=output2 ds_OSPMeasureByInspItem=output3 ds_OSPInspDefect=output4";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 의뢰일자 셋팅
         */
        this.fn_setSearchDate = function (periodType)
        {
        	this.tab_search.Tab1.form.cal_dateFrom.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
         	this.tab_search.Tab1.form.cal_dateTo.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        };

        /*
         * 기능 : 업체동의
         */
        this.saveOSPInspectionCompanyAgree = function()
        {
            // -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveOSPInspectionCompanyAgree";
            var sController   = "/qam00700/saveOSPInspectionCompanyAgree.do";
            var sInDatasets   = "INPUT=ds_processInspAbnormalList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        /*
         * 이벤트 : 조회조건 아이콘 버튼 클릭시
         */
        this.fn_popup_click = function(obj,e)
        {
        	if (obj.name == "btn_area")
        	{
        		this.fn_openPop("SRCH_AREA157","P00157"); //작업장
        	}
        	else if (obj.name == "btn_productDef")
        	{
        		this.fn_openPop("SRCH_PRODUCTDEF160","P00160"); //품목
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
         * 이벤트 : 일자 조건변경시
         */
        this.tab_search_Tab1_cbo_period_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM")
        	{
        		this.fn_setSearchDate(e.postvalue);
        	}
        };

        /*
         * 이벤트 : 발행일자 변경시 일자 조건 변경
         */
        this.fn_preiodChang = function(obj,e)
        {
        	this.tab_search.Tab1.form.cbo_period.set_value("CUSTOM");
        };

        /*
         * 이벤트 : 발행일자 변경
         */
        this.tab_search_Tab1_cal_dateFrom_onchanged = function(obj,e)
        {
        	this.fn_preiodChang();
        };

        /*
         * 이벤트 : 발행일자 변경
         */
        this.tab_search_Tab1_cal_dateTo_onchanged = function(obj,e)
        {
        	this.fn_preiodChang();
        };

        /*
         * 이벤트 : 그리드 더블클릭
         */
        this.fn_gridDoubleClick = function(obj,e)
        {
         	var popupId = "SEARCH_NCR";
        	var oArg = {}, isEnable = true;

            if (e.row > -1) {
        		var objDs = this.ds_processInspAbnormalList;

        		if (objDs.getColumn(e.row, "ISMODIFY") != "Y") {
        			isEnable = false;
        		}

        	    oArg.datasetNm = objDs;
        		oArg.rowPos = e.row;
        		oArg.isEnable = isEnable;
        	}
        	this.gfn_openPopup(popupId,"qam::QAM00700P1.xfdl",oArg,"width=1500,height=700");
        };

        /*
         * 이벤트 : 업체동의 된 row를 체크할 때 이벤트 -> 공정 수입검사 이상발생 현황 DataSet 의 Column 값이 변경될 때 발생하는 이벤트입니다.
         */
        this.ds_processInspAbnormalList_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "CHK" && e.newvalue == "1") {

        		if (obj.getColumn(e.row, "ISMODIFY") == "Y") {
        			if (obj.getColumn(e.row, "COMPANYAGREE") == "Y")
        			{
        				this.gfn_Message("AlreadyCompanyAgree", null, "warning", "ok");//이미 업체동의를 한건 입니다.
        				return false;
        			}
        		} else {
        			this.gfn_Message("NotMatchingUserWithArea", null, "warning", "ok");//사용자가 속하지 않은 작업장은 업체동의 할 수 없습니다.
        			return false;
        		}
        	}
        };

        /*
         * 이벤트 : 공정 수입검사 이상발생 현황 DataSet 의 row가 변경될 때 발생하는 이벤트
         */
        this.ds_processInspAbnormalList_onrowposchanged = function(obj,e)
        {
        	this.fn_searchTabAll();
        };

        /*
         * 이벤트 : 업체동의 버튼 클릭 함수
         */
        this.div_header_btn_saveAgree_onclick = function(obj,e)
        {
        	var objDs = this.ds_processInspAbnormalList;
        	if(objDs.findRow("CHK", "1") < 0) {
        		this.gfn_Message("GridNoChecked", null, "warning", "ok");	//체크된 행이 없습니다
        		return;
        	}

        	// AS-IS : SaveOSPInspectionCompanyAgree 호출
        	this.saveOSPInspectionCompanyAgree();
        };

        /*
         * 이벤트 : grd_OSPInspectionMeasure focusedRow 체인지 이벤트
         */
        this.ds_OSPInspectionMeasure_onrowposchanged = function(obj,e)
        {
        	this.fn_bindingMeasureValueAfterSave(obj, e.newrow);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.grd_processInspAbnormalList.addEventHandler("oncelldblclick",this.fn_gridDoubleClick,this);
            this.div_work.form.tab.Tabpage2.form.grd_OSPMeasureByInspItem.addEventHandler("onexpandup",this.tab_result_Tabpage2_grd_OSPMeasureByInspItem_onexpandup,this);
            this.div_work.form.btn_saveAgree.addEventHandler("onclick",this.div_header_btn_saveAgree_onclick,this);
            this.tab_search.Tab1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tab1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tab1.form.cbo_period.addEventHandler("onitemchanged",this.tab_search_Tab1_cbo_period_onitemchanged,this);
            this.tab_search.Tab1.form.cal_dateFrom.addEventHandler("onchanged",this.tab_search_Tab1_cal_dateFrom_onchanged,this);
            this.tab_search.Tab1.form.cal_dateTo.addEventHandler("onchanged",this.tab_search_Tab1_cal_dateTo_onchanged,this);
            this.tab_search.Tab1.form.edt_area.addEventHandler("onchanged",this.fn_popup_canchange,this);
            this.tab_search.Tab1.form.btn_area.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.edt_productDef.addEventHandler("onchanged",this.fn_popup_canchange,this);
            this.tab_search.Tab1.form.btn_productDef.addEventHandler("onclick",this.fn_popup_click,this);
            this.ds_processInspAbnormalList.addEventHandler("cancolumnchange",this.ds_processInspAbnormalList_cancolumnchange,this);
            this.ds_processInspAbnormalList.addEventHandler("onrowposchanged",this.ds_processInspAbnormalList_onrowposchanged,this);
            this.ds_OSPInspectionMeasure.addEventHandler("onrowposchanged",this.ds_OSPInspectionMeasure_onrowposchanged,this);
        };
        this.loadIncludeScript("QAM00700M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
