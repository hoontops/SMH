(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01200D1");
            this.set_titletext("NCR 진행현황 DIV");
            if (Form == this.constructor)
            {
                this._setFormPosition(1160,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_output", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_request", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CARREQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUESTMEASURES\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGERID\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISTEMPSAVED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_receipt", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISRECEIVEMEASURES\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISTEMPSAVED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_approval", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ACTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"REFUSEREASON\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISRECEIVEMEASURES\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALUSER\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISTEMPSAVED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_evaluation", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKUSER\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKDETAILS\" type=\"STRING\" size=\"256\"/><Column id=\"INQUIRYFROM\" type=\"STRING\" size=\"256\"/><Column id=\"INQUIRYTO\" type=\"STRING\" size=\"256\"/><Column id=\"CONCURRENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCHSTDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCHENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISTEMPSAVED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamIssue", this);
            obj._setContents("<ColumnInfo><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREDATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURER\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECRANGE\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"AVERAGEVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"MAXVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"MINVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"DEVIATION\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURER\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"DAITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ARRAYPOINTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISMODIFY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"CARREQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CAREXPECTEDRECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SPECSCOPE\" type=\"STRING\" size=\"256\"/><Column id=\"AFFECTISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"FILERESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamMeasureImage", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ATCH_FILE_GUID\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"DAPOINTID\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_TY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamIssueAffectLot", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOCKINGTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"PREV_ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"ISADDED\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"AFFECTEDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGERID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"MESSAGEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_claimInfoList", this);
            obj._setContents("<ColumnInfo><Column id=\"ISCHANGED\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIMPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PREV_AMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMSCRAPAMT\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMETCAMT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_ncr","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_ncr);
            obj.set_text("NCR 발행");
            obj.set_tooltiptext("NCRBTN");
            this.tab_ncr.addChild(obj.name, obj);

            obj = new Static("title3","0","0",null,"34","0",null,null,null,null,null,this.tab_ncr.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("NCR 진행현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("QCGRADENGCAPTION");
            this.tab_ncr.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_ncrProcessStatus","0","94",null,null,"0","330",null,null,"115",null,this.tab_ncr.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamIssueAffectLot");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" colspan=\"6\" text=\"기준정보\" tooltiptext=\"STANDARD\"/><Cell col=\"8\" colspan=\"3\" text=\"위치\" tooltiptext=\"LOCATION\"/><Cell col=\"11\" colspan=\"2\" text=\"기타정보\" tooltiptext=\"ETC\"/><Cell row=\"1\" text=\"No\"/><Cell row=\"1\" col=\"1\"/><Cell row=\"1\" col=\"2\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell row=\"1\" col=\"3\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell row=\"1\" col=\"4\" text=\"Rev\" tooltiptext=\"Rev\"/><Cell row=\"1\" col=\"5\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell row=\"1\" col=\"6\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell row=\"1\" col=\"7\" text=\"수량(PCS)\" tooltiptext=\"PCSQTY\"/><Cell row=\"1\" col=\"8\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"9\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell row=\"1\" col=\"10\" text=\"현 locking 여부\" tooltiptext=\"REALLOTLOCKING\"/><Cell row=\"1\" col=\"11\" text=\"처리결과코드\" tooltiptext=\"RESULTCODE\"/><Cell row=\"1\" col=\"12\" text=\"locking 여부(검사)\" tooltiptext=\"AFFECTLOCKING\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\" combocodecol=\"C,DecisionDegree,,Y,Y\" textAlign=\"left\" cssclass=\"expr:comp.parent.parent.parent.parent.fn_setFontColor(currow)\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" combocodecol=\"C,QCDecisionType,,Y,Y\" cssclass=\"expr:comp.parent.parent.parent.parent.fn_setFontColor(currow)\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\" cssclass=\"expr:comp.parent.parent.parent.parent.fn_setFontColor(currow)\"/><Cell col=\"5\" text=\"bind:LOTID\" cssclass=\"expr:comp.parent.parent.parent.parent.fn_setFontColor(currow)\"/><Cell col=\"6\" textAlign=\"right\" text=\"bind:PANELQTY\" displaytype=\"number\" cssclass=\"expr:comp.parent.parent.parent.parent.fn_setFontColor(currow)\"/><Cell col=\"7\" text=\"bind:PCSQTY\" textAlign=\"right\" combodataset=\"ds_comboQcgrade\" combocodecol=\"QCGRADE\" combodatacol=\"QCGRADE\" displaytype=\"number\" cssclass=\"expr:comp.parent.parent.parent.parent.fn_setFontColor(currow)\"/><Cell col=\"8\" text=\"bind:PROCESSSEGMENTNAME\" combocodecol=\"C,Condition,,Y,Y\" textAlign=\"left\" cssclass=\"expr:comp.parent.parent.parent.parent.fn_setFontColor(currow)\"/><Cell col=\"9\" text=\"bind:AREANAME\" combocodecol=\"C,QtyDefectRateType,,Y,Y\" textAlign=\"left\" cssclass=\"expr:comp.parent.parent.parent.parent.fn_setFontColor(currow)\"/><Cell col=\"10\" text=\"bind:ISLOTLOCKING\" cssclass=\"expr:comp.parent.parent.parent.parent.fn_setFontColor(currow)\"/><Cell col=\"11\" text=\"bind:RESULTCODE\" textAlign=\"left\" combocodecol=\"C,ProcessingStatus,,Y,N\" displaytype=\"combotext\" cssclass=\"expr:comp.parent.parent.parent.parent.fn_setFontColor(currow)\"/><Cell col=\"12\" text=\"bind:ISLOCKING\" cssclass=\"expr:comp.parent.parent.parent.parent.fn_setFontColor(currow)\"/></Band></Format></Formats>");
            this.tab_ncr.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_search","0","41",null,"42","0",null,null,null,null,null,this.tab_ncr.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_search");
            this.tab_ncr.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_handling","0","10","70","20",null,null,null,null,null,null,this.tab_ncr.Tabpage1.form.div_search.form);
            obj.set_taborder("0");
            obj.set_text("처리여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("59B06ABF14A945E09F5256488427FCBF");
            this.tab_ncr.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Combo("edt_handling","70","10","120","20",null,null,null,null,null,null,this.tab_ncr.Tabpage1.form.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,ProcessingStatus,SEL,Y,Y");
            this.tab_ncr.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.tab_ncr.Tabpage1.form.div_search.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_ncr.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"10","110","24","185",null,null,null,null,null,this.tab_ncr.Tabpage1.form.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("Locking 초기화");
            obj.set_tooltiptext("LOCKINGRESET");
            this.tab_ncr.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"10","110","24","70",null,null,null,null,null,this.tab_ncr.Tabpage1.form.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("Affect Lot 추가");
            obj.set_tooltiptext("AFFECTLOTADD");
            this.tab_ncr.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"10","60","24","5",null,null,null,null,null,this.tab_ncr.Tabpage1.form.div_search.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("삭제");
            obj.set_tooltiptext("DELETE");
            this.tab_ncr.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_applyLocking",null,"10","110","24","300",null,null,null,null,null,this.tab_ncr.Tabpage1.form.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("Locking 적용");
            obj.set_tooltiptext("LOCKINGAPPLY");
            this.tab_ncr.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_applyStatus","edt_handling:5","10","60","24",null,null,null,null,null,null,this.tab_ncr.Tabpage1.form.div_search.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("적용");
            obj.set_tooltiptext("APPLY");
            this.tab_ncr.Tabpage1.form.div_search.addChild(obj.name, obj);

            obj = new Div("div_issueRegistration","0","grd_ncrProcessStatus:10",null,"300","0",null,null,null,"320",null,this.tab_ncr.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_async("false");
            obj.set_text("QAM01200D2 연결");
            this.tab_ncr.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_ncr);
            obj.set_text("측정사진");
            obj.set_tooltiptext("MEASUREDPICTURE");
            this.tab_ncr.addChild(obj.name, obj);

            obj = new Button("btn_download",null,"10","100","24","10",null,null,null,null,null,this.tab_ncr.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("다운로드");
            obj.set_tooltiptext("FILEDOWNLOAD");
            this.tab_ncr.Tabpage2.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload","1049","4","100","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("FileDownload00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1160,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM01200D1.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM01200D1.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM01200D1.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: NCR 진행현황 Div
         * 파일명 		: QAM01200D1.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.04.19
         *
         * 설  명		: 품질관리 > 공정품질 > 품질규격 NCR > CAR 요청팝업 > NCR 진행현황 Div
         * 				  품질관리에서 사용되는 NCR 진행현황 Div
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.19	권혜영   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/
        /////String resourceId = row.getString("ABNOCRNO") + row.getString("SEQUENCE") + String.valueOf(row.getInteger("DEGREE")+1) + "A"; CAR 접수 시 파일 --> 추후 제거
        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;	//품질관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_upUrl = nexacro.getEnvironment().services["svcurl"].url;
        this.fv_carDivComp = this.tab_ncr.Tabpage1.form.div_issueRegistration.form;
        this.fv_searchImageController = "/qam01200/selectOperationInspMeasureImage.do"; //QAM1200에서 쓰일 기본 controller path
        this.fv_setParam = "";
        this.fv_pProgramId; //parent에서 보내줄 program id
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	//this.fn_formInit();
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
        this.fn_save = function (dsClaimInfoList)
        {
        	//작업장 권한 체크
        	this.fn_checkAuthorityArea();

        	//임시저장 했는지 체크
        	if(!this.fv_carDivComp.fn_checkIsTempSaved()) {
        		this.gfn_Message("NeedToSaveTemp", null, "warning", "ok");
         		return;
        	}

        	//save 시에 전달 파라미터 체크 (ds_claimInfoList는 한 건만 들어옴)
        	if(!this.nfn_isNull(dsClaimInfoList) && this.gfn_dsIsUpdated(dsClaimInfoList)) {
        		var nRow = this.ds_claimInfoList.addRow();
        		this.ds_claimInfoList.copyRow(nRow, dsClaimInfoList, 0);
        	}

        	if (!this.gfn_dsIsUpdated(this.ds_qamIssueAffectLot)
        		&& !this.gfn_dsIsUpdated(this.fv_carDivComp.ds_request) && !this.gfn_dsIsUpdated(this.fv_carDivComp.ds_receipt)
        		&& !this.gfn_dsIsUpdated(this.fv_carDivComp.ds_acceptHistory) && !this.gfn_dsIsUpdated(this.fv_carDivComp.ds_evaluation)
        		&& !this.gfn_dsIsUpdated(this.ds_claimInfoList) ) {

        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	//파일 체크
        	if(this.gfn_dsIsUpdated(this.fv_carDivComp.ds_receipt)) {
        		if(this.fv_carDivComp.tab_carProcess.tab_receipt.form.div_basInfo.form.div_file.form.ds_file.rowcount < 1) {
        			this.gfn_Message("FileIsRequired", null, "warning", "ok"); //파일은 필수등록입니다.
        			return;
        		}
        		else if(this.fv_carDivComp.tab_carProcess.tab_receipt.form.div_basInfo.form.div_file.form.fileChanged =="N") {
        			this.gfn_Message("ClickFileUploadButton", null, "warning", "ok"); //파일업로드 버튼을 눌러 파일을 업로드 하시기 바랍니다.
        			return;
        		}
        	}
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------

        	if(this.gfn_dsIsUpdated(this.fv_carDivComp.ds_request)) {
        		for(var i = 0; i < this.fv_carDivComp.ds_request.rowcount; i++ ) {
        			if(this.fv_carDivComp.ds_request.getColumn(i, "ISTEMPSAVED") == "true") {
        				var nRow = this.ds_request.addRow();
        				this.ds_request.copyRow(nRow, this.fv_carDivComp.ds_request, i);
        			}
        		}
        	}
        	if(this.gfn_dsIsUpdated(this.fv_carDivComp.ds_receipt)) {
        		for(var i = 0; i < this.fv_carDivComp.ds_receipt.rowcount; i++ ) {
        			if(this.fv_carDivComp.ds_receipt.getColumn(i, "ISTEMPSAVED") == "true") {
        				var nRow = this.ds_receipt.addRow();
        				this.ds_receipt.copyRow(nRow, this.fv_carDivComp.ds_receipt, i);
        			}
        		}
        	}
        	if(this.gfn_dsIsUpdated(this.fv_carDivComp.ds_acceptHistory)) {
        		for(var i = 0; i < this.fv_carDivComp.ds_acceptHistory.rowcount; i++ ) {
        			if(this.fv_carDivComp.ds_acceptHistory.getColumn(i, "ISTEMPSAVED") == "true") {
        				var nRow = this.ds_approval.addRow();
        				this.ds_approval.copyRow(nRow, this.fv_carDivComp.ds_acceptHistory, i);
        			}
        		}
        	}
        	if(this.gfn_dsIsUpdated(this.fv_carDivComp.ds_evaluation)) {
        		for(var i = 0; i < this.fv_carDivComp.ds_evaluation.rowcount; i++ ) {
        			if(this.fv_carDivComp.ds_evaluation.getColumn(i, "ISTEMPSAVED") == "true") {
        				var nRow = this.ds_evaluation.addRow();
        				this.ds_evaluation.copyRow(nRow, this.fv_carDivComp.ds_evaluation, i);
        			}
        		}
        	}

        	var sSvcID 			= "saveQamCarAllState";
        	var sController 	= "/qam01200/saveQamCarAllState.do";
        	var sInDatasets 	= "ds_qamIssueAffectLot=ds_qamIssueAffectLot:U ds_request=ds_request:U ds_receipt=ds_receipt:U ds_approval=ds_approval:U ds_evaluation=ds_evaluation:U ds_claimInfoList=ds_claimInfoList:U";
        	var sOutDatasets 	= "ds_result=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        	var objDs = this.ds_qamIssueAffectLot;
        	for (var i = 0; i < objDs.rowcount; i++) {
        		if(objDs.getColumn(i, "CHK") == "1") {
        			var nRowType = objDs.getRowType(i);

        			if(nRowType==2){
        				var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        				if (bOK == false) return;
        				objDs.deleteRow(objDs.rowposition);
        			} else {
        				this.gfn_Message("CantdelSaveData", null, "info", "ok");
        			}
        		}
        	}
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
        		if (trId == "saveQamCarAllState")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.parent.parent.fn_closeAndParentSearch(this.ds_result);

        		} else if (trId == "selectQualitySpecIssueAffectLot")
        		{
        			this.fn_searchImage();

        		} else if (trId == "selectAffectLotInspAbnormalPopupList")
        		{
        			this.fn_searchImage();

        		} else if (trId == "selectQamMeasureImage")
        		{
        			var objDs = this.ds_qamMeasureImage;
        			for(var i = 0; i < objDs.rowcount; i++) {
        				var cnt = i;
        				var atchFileGuid = objDs.getColumn(i, "ATCH_FILE_GUID");
        				var textValue = "";
        				//품질규격 NCR 일 경우
        				if(this.fv_pProgramId == "QAM01200") {
        					textValue = this.nfn_getDictionarynameUpper("MEASURVALUE") + objDs.getColumn(i, "DAPOINTID") + " : " + objDs.getColumn(i, "VALUE") + " / " + objDs.getColumn(i, "RESULT");
        				}
        				this.fn_createImageViewer(atchFileGuid, textValue, cnt++);
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
         * 최초 호출되는 초기화 함수 (parameter : dataset, parant program Id)
         */
        this.fn_formInit = function (objDs, pProgramId, pMenuAuth)
        {
        	this.ds_qamIssue.copyData(objDs);

        	// pararnt program id 에 따라 처리 부분
        	this.fv_pProgramId = pProgramId;
        	this.setControlByParantProgram(pProgramId);

        	this.tab_ncr.Tabpage1.form.div_issueRegistration.set_url("qam::QAM01200D2.xfdl")
        	this.tab_ncr.Tabpage1.form.div_issueRegistration.form.fn_formInit(objDs, pProgramId, pMenuAuth);

        	//예외처리 (이전 부모에서 ABNOCRNO, ABNOCRTYPE 값이 없으면 오류..) --> 개발 시에 사용하고 삭제.
        	if(this.nfn_isNull(objDs.getColumn(0, "ABNOCRNO")) || this.nfn_isNull(objDs.getColumn(0, "ABNOCRTYPE"))) {
        		this.gfn_Message("opener에서 ABNOCRNO 또는 ABNOCRTYPE값이 넘어오지 않았습니다. ", null, "warning", "ok");
        	}
        };

        /*
         * 기능 : pararnt program id 에 따라 변경 처리해야 할 부분
         */
         /**************************************************************************
         * 2-1. 호출화면정의
         - QAM00900 : 공정검사 NCR
         - QAM01200 : 품질규격 NCR
         - QAM01600	: 출하검사 NCR
         - QAM00700	: 수입검사 NCR
         ***************************************************************************/
        this.setControlByParantProgram = function(pProgramId)
        {
        	switch (pProgramId) {
        		//품질규격 NCR
        		case "QAM01200":
        			this.fn_searchQamIssue();
        			this.fv_searchImageController = "/qam01200/selectOperationInspMeasureImage.do";

        			this.fv_setParam += this.gfn_setParam("RESOURCETYPE", "OperationInspection");
        			this.fv_setParam += this.gfn_setParam("RESOURCEVERSION", "*");
        			this.fv_setParam += this.gfn_setParam("LOTID", this.ds_qamIssue.getColumn(0, "LOTID"));
        			this.fv_setParam += this.gfn_setParam("DAITEMID", this.ds_qamIssue.getColumn(0, "INSPITEMID"));

        			break;

        		//출하검사 NCR
        		case "QAM01600":
        			this.fn_searchQamIssue();
        			this.fv_searchImageController = "/qam01600/selectShipmentInspectionImage.do";

        			this.fv_setParam += this.gfn_setParam("RESOURCETYPE", "ShipmentInspection");
        			this.fv_setParam += this.gfn_setParam("TXNHISTKEY", this.ds_qamIssue.getColumn(0, "TXNHISTKEY"));
        			this.fv_setParam += this.gfn_setParam("RESOURCEID", this.ds_qamIssue.getColumn(0, "LOTID"));
        			this.fv_setParam += this.gfn_setParam("DEFECTCODE", this.ds_qamIssue.getColumn(0, "DEFECTCODE"));

        			this.tab_ncr.Tabpage2.set_text("불량사진");
        			this.tab_ncr.Tabpage2.set_tooltiptext("DEFECTPICTURE");
        			break;

        		//수입검사 NCR
        		case "QAM00700":
        		    this.fn_searchAbnoraml();
        			//수입검사 NCR에서는 이미지 조회 안함.
        			this.fv_searchImageController = "";
        			this.tab_ncr.removeTabpage(1);
        			break;

        		//자주/최종 NCR
        		case "QAM00900":
        			this.fn_searchAbnoraml();
         			this.fv_searchImageController = "/qampopup/selectAtchFiles.do";
        //2021.06.01 TOBE Modify
        // 	        var srcKey =  this.ds_qamIssue.getColumn(0, "TXNHISTKEY") //LOCKINGTXNHISTKEY-> TXNHISTKEY
        // 			  	  + "|" + this.ds_qamIssue.getColumn(0, "ABNOCRTYPE")
        // 			      + "|" + this.ds_qamIssue.getColumn(0, "LOTID")
        // 			      + "|" + this.ds_qamIssue.getColumn(0, "DEFECTCODE") //값미존재.....
        // 				  + "|" + this.ds_qamIssue.getColumn(0, "PROCESSSEGMENTID");

                    var srcKey = this.ds_qamIssue.getColumn(0, "FILERESOURCEID");
                    this.fv_setParam += this.gfn_setParam("ATCH_FILE_ID", srcKey);
        			this.fv_setParam += this.gfn_setParam("ATCH_TY_CD", "QAM_INSPECTIONDEFECT");

        			break;
        	}
        };

        /*
         * 기능 : Affect Lot 리스트 추가 시 리스트 팝업화면 open
         */
        this.fn_openAffectLot = function ()
        {
        	var oArg = {abnocrno: this.ds_qamIssue.getColumn(0, "ABNOCRNO"),
        				abnocrtype: this.ds_qamIssue.getColumn(0, "ABNOCRTYPE")};
        	this.gfn_openPopup("QAM_AFFECT_LOT","qam::QAM01200P2.xfdl",oArg,"width=800,height=450");
        };

        /*
         * 기능 : 품질규격 측정항목 이미지 조회
         */
        this.fn_searchImage = function()
        {
        	if(this.nfn_isNull(this.fv_searchImageController)) return;

        	this.ds_qamMeasureImage.clearData();

        	var sSvcID 			= "selectQamMeasureImage";
        	var sController 	= this.fv_searchImageController;
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_qamMeasureImage=output";
        	var sArgs 			= this.fv_setParam;
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : ImageViewer 동적 생성
         */
        this.fn_createImageViewer = function(atchFileGuid, textValue, cnt)
        {
        	var vLeftWitdh = 20 * (cnt % 3);
        	var vLeft = 300 * (cnt % 3);
        	var vTop = 34 + ( 300 * nexacro.floor(cnt / 3));

        	//console.log("vLeft : " + vLeft + " / vTop : " + vTop);

        	var objParentComp = this.tab_ncr.Tabpage2;

        	//div 생성
        	var objDiv = new Div();
        	var objDivName = "div_" + cnt;

        	objDiv.init(objDivName, vLeft + vLeftWitdh, vTop, 300, 250); //left, top, width, height
        	objDiv.set_cssclass("div_WF_detail");
        	objParentComp.addChild(objDivName, objDiv);
        	objDiv.show();

        	//checkbox 생성
        	var objCheckBox = new CheckBox();
        	var objCheckBoxName = "cbo_" + cnt;

        	objCheckBox.init(objCheckBoxName, 5, 5, 200, 20); //left, top, width, height
        	objCheckBox.set_text(textValue);
        	objCheckBox.set_value("1");
        	objDiv.addChild(objCheckBoxName, objCheckBox);

        	objCheckBox.show();

        	//imageViewer 생성
        	var objImageViewer = new ImageViewer();
        	var objImageViewerName = "imageViewer_" + cnt;

        	objImageViewer.init(objImageViewerName, 5, 30, null, null, 5, 5); //left, top, width, height, right, bottom
        	objDiv.addChild(objImageViewerName, objImageViewer);

        	//imageViewer set url
        	var upUrl = this.fv_upUrl +"/comm/downImage/" + atchFileGuid + ".do";
        	objImageViewer.set_image(upUrl);

        	objImageViewer.set_stretch('fixaspectratio'); //fit or fixaspectratio
        	objImageViewer.show();

        };

        /*
         * 기능 : affectLot isLocking Y 시 Row 빨간색
         */
        this.fn_setFontColor = function(nRow) {
        	var islocking = this.ds_qamIssueAffectLot.getColumn(nRow, "ISLOCKING");

        	if(islocking == "Y") {
        		return "cell_red";
        	}
        };

        /*
         * 기능 : 로그인한 사용자가 해당 작업장에 대한 수정권한이 있는지 체크 (Row 단위)
         */
        this.fn_checkAuthorityArea = function()
        {
        	if(this.ds_qamIssue.getColumn(0, "ISMODIFY") == "N") {
        		var area = this.ds_qamIssue.getColumn(0, "AREANAME");
        		this.gfn_Message("NoMatchingAreaUser", area, "warning", "ok");
        		return;
        	}
        };

        /*
         * 기능 : 측정사진 다운로드
         */
        this.fn_download = function()
        {
        	var objDs = this.ds_qamMeasureImage;
        	var checkCnt = 0;
        	var atchFileGuid, atchTyCd;
        	var arrAtchSrcKey = [];

        	for(var i = 0; i < objDs.rowcount; i++) {
        		var objComp = this.tab_ncr.Tabpage2.form;
        		var objDivName = "div_" + i;
        		var objCheckBoxName = "cbo_" + i;
        		var objCheckBox = objComp[objDivName].form[objCheckBoxName];

        		if(typeof objCheckBox != "undefined" && objCheckBox.value == "1") {
        			checkCnt++;
        			atchFileGuid = objDs.getColumn(i, "ATCH_FILE_GUID");
        			arrAtchSrcKey.push(objDs.getColumn(i, "ATCH_SRC_KEY"))
        			atchTyCd = objDs.getColumn(i, "ATCH_TY_CD");
        		}
        	}

        	//파일 다운로드 처리
        	if(checkCnt == 1 && !this.nfn_isNull(atchFileGuid)) {
        		var dnUrl = this.fv_upUrl + "/comm/downFile/" + atchFileGuid + ".do";
        		this.FileDownload.set_downloadurl(dnUrl);
        		var bSucc = this.FileDownload.download();
        	} else if(checkCnt > 1) {
        		//다중 파일 다운로드 안됨..!!!!
        		var oArg = {
        			arg_jobSysCd : "QAM",
        			arg_atchSrcKey : arrAtchSrcKey.join(","),
        			arg_tableName : atchTyCd,
        			arg_atchTyCd: atchTyCd
        		};
        		this.gfn_openPopup("file_download","cmd::CMSA01320P.xfdl",oArg,"");	//파일다운로드
        	}
        };

        /*
         * 기능 : Locking 적용
         */
        this.fn_applyLocking = function(obj,e)
        {
        	this.fn_setGrdColumn("ISLOCKING", "Y");
        };

        /*
         * 기능 : 처리여부 적용
         */
        this.fn_applyStatus = function(obj,e)
        {
        	this.fn_setGrdColumn("RESULTCODE", this.tab_ncr.Tabpage1.form.div_search.form.edt_handling.value);
        };

        /*
         * 기능 : Locking 초기화
         */
        this.fn_reset = function(obj,e)
        {
        	this.fn_setGrdColumn("ISLOCKING", "N");
        };

        /*
         * 기능 : 적용, 초기화 시 column set.
         */
        this.fn_setGrdColumn = function(column, val, applyColumn)
        {
        	var objDs = this.ds_qamIssueAffectLot;
        	if(objDs.findRow("CHK", "1") < 0) {
        		this.gfn_Message("GridNoChecked", null, "warning", "ok");	//체크된 행이 없습니다
        		return;
        	}

        	objDs.filter("CHK == '1'");
        	for (var i = 0; i < objDs.rowcount; i++) {
        		if(this.nfn_isNull(applyColumn)) {
        			objDs.setColumn(i, column, val);
        		} else {
        			val = objDs.getColumn(i, applyColumn);
        			objDs.setColumn(i, column, val);
        		}
        	}
        	objDs.filter("");
        };

        /*
         * 기능 : 품질규격, 출하검사 NCR 조회
         */
        this.fn_searchQamIssue = function()
        {
        	if(this.ds_qamIssue.rowcount == 0) return;

        	this.ds_qamIssueAffectLot.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_search.setColumn(0, "ABNOCRNO", this.ds_qamIssue.getColumn(0, "ABNOCRNO"));
        	this.ds_search.setColumn(0, "ABNOCRTYPE", this.ds_qamIssue.getColumn(0, "ABNOCRTYPE"));
        	this.ds_search.setColumn(0, "LOTID", this.ds_qamIssue.getColumn(0, "LOTID"));

        	var sSvcID 			= "selectQualitySpecIssueAffectLot";
        	var sController 	= "/qam01200/selectQualitySpecIssueAffectLot.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamIssueAffectLot=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 수입검사, 자주/최종 NCR 조회 (QAM00900P1-grd_abnormalOccurrenceInfo)
         */
        this.fn_searchAbnoraml = function (obj, e)
        {
            this.ds_qamIssueAffectLot.clearData();
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow, "ENTERPRISEID",  this.gf_getEnterpriseId());
        	this.ds_search.setColumn(nRow, "PLANTID",       this.gf_getSiteType());
        	this.ds_search.setColumn(nRow, "LANGUAGETYPE",  this.gf_getLanguageType());
        	this.ds_search.setColumn(nRow, "ABNOCRTYPE",    this.ds_qamIssue.getColumn(0, "ABNOCRTYPE")); //
        	this.ds_search.setColumn(nRow, "ABNOCRNO",      this.ds_qamIssue.getColumn(0, "ABNOCRNO"));	//이상번호
        	this.ds_search.setColumn(nRow, "LOTID",         this.ds_qamIssue.getColumn(0, "LOTID"));

            var sSvcID        = "selectAffectLotInspAbnormalPopupList";
            var sController   = "/qam00900/selectAffectLotInspAbnormalPopupList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_qamIssueAffectLot=output";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_ncr_onchanged = function(obj,e)
        {
        	if(e.postindex == 0) {
        		this.parent.parent.btnSave.set_visible(true);
        	} else if(e.postindex == 1) {
        		this.parent.parent.btnSave.set_visible(false);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_ncr.addEventHandler("onchanged",this.tab_ncr_onchanged,this);
            this.tab_ncr.Tabpage1.form.div_search.form.btn_reset.addEventHandler("onclick",this.fn_reset,this);
            this.tab_ncr.Tabpage1.form.div_search.form.btn_add.addEventHandler("onclick",this.fn_openAffectLot,this);
            this.tab_ncr.Tabpage1.form.div_search.form.btn_del.addEventHandler("onclick",this.fn_delete,this);
            this.tab_ncr.Tabpage1.form.div_search.form.btn_applyLocking.addEventHandler("onclick",this.fn_applyLocking,this);
            this.tab_ncr.Tabpage1.form.div_search.form.btn_applyStatus.addEventHandler("onclick",this.fn_applyStatus,this);
            this.tab_ncr.Tabpage2.form.btn_download.addEventHandler("onclick",this.fn_download,this);
        };
        this.loadIncludeScript("QAM01200D1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
