(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01200D2");
            this.set_titletext("이상등록 TAB DIV");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FROMDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TODATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_output", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"COUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_request", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CARREQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISREQUESTMEASURES\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGERID\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISTEMPSAVED\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_receipt", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISRECEIVEMEASURES\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISTEMPSAVED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_acceptHistory", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ACTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"REFUSEREASON\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISRECEIVEMEASURES\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALUSER\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISTEMPSAVED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_estimateHistory", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ISCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_evaluation", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKUSER\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKDETAILS\" type=\"STRING\" size=\"256\"/><Column id=\"INQUIRYFROM\" type=\"STRING\" size=\"256\"/><Column id=\"INQUIRYTO\" type=\"STRING\" size=\"256\"/><Column id=\"CONCURRENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCHSTDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCHENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISTEMPSAVED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_carProcess","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tab_request",this.tab_carProcess);
            obj.set_text("CAR 요청");
            obj.set_tooltiptext("CARREQUEST");
            this.tab_carProcess.addChild(obj.name, obj);

            obj = new Div("div_basInfo","0","0",null,null,"0","0",null,null,null,null,this.tab_carProcess.tab_request.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.tab_carProcess.tab_request.addChild(obj.name, obj);

            obj = new Static("sta_carsequence","0","0","10%","31",null,null,"100",null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("0");
            obj.set_text("CAR 요청 순번");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("OCCURDATE");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_carrequestdate","0","31","10%","31",null,null,"100",null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("1");
            obj.set_text("CAR 요청 일자");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("EQUIPMENT");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_manager","50%","31","10%","31",null,null,"100",null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("2");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("WORKSTARTLEADTIME");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new Button("btn_manager",null,"36","22","20","5",null,null,null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_manager","sta_manager:5","36",null,"20","btn_manager:0",null,null,null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("3");
            obj.set_text("IFV");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_reasonIdVersion","0","62","10%","31",null,null,"100",null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("4");
            obj.set_text("원인 품목");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTIONDEFINITION");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_reasonIdVersion","sta_reasonIdVersion:5","68",null,"20","50.00%",null,null,null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("17");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_reasonconsumablelotid","50.00%","62","9.85%","31",null,null,"100",null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("5");
            obj.set_text("원인 LOTID");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("english");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_reasonconsumablelotid","sta_reasonconsumablelotid:5","67",null,"20","5",null,null,null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("6");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_reasonprocesssegmentid","0","93","10%","31",null,null,"100",null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("7");
            obj.set_text("원인 공정");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("INSPECTIONITEM");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_reasonprocesssegmentid","sta_reasonprocesssegmentid:5","98",null,"20","50%",null,null,null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("8");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_reasonarea","50%","93","10%","31",null,null,"100",null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("10");
            obj.set_text("원인작업장");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("SPECSCOPE");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_reasonarea","sta_reasonarea:5","98",null,"20","5",null,null,null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.set_text("IFV");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_remark","0","124","9.93%","61",null,null,"100",null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("11");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("MAXVALUE");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_carsequence","sta_carsequence:5","5",null,"20","65%",null,null,null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,CARNumber,,Y,Y");
            obj.set_text("cmb_00");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new TextArea("txa_remark","sta_remark:5","129",null,null,"5","10",null,null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("13");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new Div("div_carrequestdate","sta_carrequestdate:5","36",null,"20","65%",null,null,null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("14");
            obj.set_url("common::com_calendar.xfdl");
            obj.set_enable("false");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new CheckBox("ckb_requestforaction","div_carrequestdate:20","32","150","28",null,null,null,null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("15");
            obj.set_text("대책요청");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_manager_id","443","10","120","20",null,null,null,null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("18");
            obj.set_visible("false");
            obj.set_text("담당자ID (HIDDEN)");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_reasonarea_id","583","10","120","20",null,null,null,null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("19");
            obj.set_visible("false");
            obj.set_text("원인작업장ID (HIDDEN)");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new Button("btn_tempSave",null,"5","80","24","238",null,null,null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("임시저장");
            obj.set_tooltiptext("TEMPSAVE");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"5","80","24","153",null,null,null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("초기화");
            obj.set_tooltiptext("INITIALIZE");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new Button("btn_download",null,"5","145","24","3",null,null,null,null,null,this.tab_carProcess.tab_request.form.div_basInfo.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("대책서 양식 다운로드");
            obj.set_tooltiptext("DOWNLOADMEASURESFORM");
            this.tab_carProcess.tab_request.form.div_basInfo.addChild(obj.name, obj);

            obj = new Tabpage("tab_receipt",this.tab_carProcess);
            obj.set_text("CAR 접수");
            obj.set_tooltiptext("CARRECEIPT");
            this.tab_carProcess.addChild(obj.name, obj);

            obj = new Div("div_basInfo","0","0",null,null,"0","0",null,null,null,null,this.tab_carProcess.tab_receipt.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.tab_carProcess.tab_receipt.addChild(obj.name, obj);

            obj = new Static("sta_carsequence","0","0","10%","31",null,null,"100",null,null,null,this.tab_carProcess.tab_receipt.form.div_basInfo.form);
            obj.set_taborder("0");
            obj.set_text("CAR 접수 순번");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("OCCURDATE");
            this.tab_carProcess.tab_receipt.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_carreceiptdate","0","31","10%","31",null,null,"100",null,null,null,this.tab_carProcess.tab_receipt.form.div_basInfo.form);
            obj.set_taborder("1");
            obj.set_text("CAR 접수 일자");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("EQUIPMENT");
            this.tab_carProcess.tab_receipt.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_receiptor","50%","31","10%","31",null,null,"100",null,null,null,this.tab_carProcess.tab_receipt.form.div_basInfo.form);
            obj.set_taborder("2");
            obj.set_text("접수자");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("WORKSTARTLEADTIME");
            this.tab_carProcess.tab_receipt.form.div_basInfo.addChild(obj.name, obj);

            obj = new Button("btn_receiptor",null,"36","22","20","5",null,null,null,null,null,this.tab_carProcess.tab_receipt.form.div_basInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_finder");
            this.tab_carProcess.tab_receipt.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_receiptor","sta_receiptor:5","36",null,"20","btn_receiptor:0",null,null,null,null,null,this.tab_carProcess.tab_receipt.form.div_basInfo.form);
            obj.set_taborder("3");
            obj.set_text("IFV");
            this.tab_carProcess.tab_receipt.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_remark","0","62","9.93%",null,null,"140","100",null,null,null,this.tab_carProcess.tab_receipt.form.div_basInfo.form);
            obj.set_taborder("4");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("MAXVALUE");
            this.tab_carProcess.tab_receipt.form.div_basInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_carsequence","sta_carsequence:5","5",null,"20","50%",null,null,null,null,null,this.tab_carProcess.tab_receipt.form.div_basInfo.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,CARNumber,,Y,Y");
            obj.set_text("cmb_00");
            this.tab_carProcess.tab_receipt.form.div_basInfo.addChild(obj.name, obj);

            obj = new TextArea("txa_remark","sta_remark:5","67",null,null,"5","140",null,null,null,null,this.tab_carProcess.tab_receipt.form.div_basInfo.form);
            obj.set_taborder("6");
            this.tab_carProcess.tab_receipt.form.div_basInfo.addChild(obj.name, obj);

            obj = new Div("div_carreceiptdate","sta_carreceiptdate:5","36",null,"20","50%",null,null,null,null,null,this.tab_carProcess.tab_receipt.form.div_basInfo.form);
            obj.set_taborder("7");
            obj.set_url("common::com_calendar.xfdl");
            obj.set_enable("false");
            this.tab_carProcess.tab_receipt.form.div_basInfo.addChild(obj.name, obj);

            obj = new Div("div_file","5","sta_remark:0",null,null,"5","5",null,null,null,null,this.tab_carProcess.tab_receipt.form.div_basInfo.form);
            obj.set_taborder("9");
            obj.set_url("common::com_file_b2.xfdl");
            obj.set_text("");
            this.tab_carProcess.tab_receipt.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_receiptor_id","722","10","120","20",null,null,null,null,null,null,this.tab_carProcess.tab_receipt.form.div_basInfo.form);
            obj.set_taborder("10");
            obj.set_visible("false");
            obj.set_text("접수자ID (HIDDEN)");
            this.tab_carProcess.tab_receipt.form.div_basInfo.addChild(obj.name, obj);

            obj = new Button("btn_tempSave",null,"5","80","24","88",null,null,null,null,null,this.tab_carProcess.tab_receipt.form.div_basInfo.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("임시저장");
            obj.set_tooltiptext("TEMPSAVE");
            this.tab_carProcess.tab_receipt.form.div_basInfo.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"5","80","24","3",null,null,null,null,null,this.tab_carProcess.tab_receipt.form.div_basInfo.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("초기화");
            obj.set_tooltiptext("INITIALIZE");
            this.tab_carProcess.tab_receipt.form.div_basInfo.addChild(obj.name, obj);

            obj = new Tabpage("tab_approval",this.tab_carProcess);
            obj.set_text("CAR 승인");
            obj.set_tooltiptext("CARAPPVOVAL");
            this.tab_carProcess.addChild(obj.name, obj);

            obj = new Static("sta_carsequence","0","0","9.92%","31",null,null,"100",null,null,null,this.tab_carProcess.tab_approval.form);
            obj.set_taborder("0");
            obj.set_text("CAR 승인 순번");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("OCCURDATE");
            this.tab_carProcess.tab_approval.addChild(obj.name, obj);

            obj = new Combo("cbo_carsequence","124","5",null,"20","50.08%",null,null,null,null,null,this.tab_carProcess.tab_approval.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,CARNumber,,Y,Y");
            obj.set_text("cmb_00");
            this.tab_carProcess.tab_approval.addChild(obj.name, obj);

            obj = new Static("sta_subTitleCarAccept","5","sta_carsequence:5","49%","34",null,null,null,null,null,null,this.tab_carProcess.tab_approval.form);
            obj.set_taborder("3");
            obj.set_text("CAR 승인/반려 이력");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MEASUREVALUELIST");
            this.tab_carProcess.tab_approval.addChild(obj.name, obj);

            obj = new Grid("grd_carAccept","5","sta_subTitleCarAccept:5","49%",null,null,"5",null,null,null,null,this.tab_carProcess.tab_approval.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_acceptHistory");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"130\"/><Column size=\"200\"/><Column size=\"130\"/><Column size=\"175\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"차수\" cssclass=\"cell_point\" color=\"#333333\" tooltiptext=\"DEGREE\"/><Cell col=\"2\" text=\"승인 / 반려 일자\" tooltiptext=\"ACCEPT/REFUSEDATE\"/><Cell col=\"3\" text=\"승인여부\" tooltiptext=\"ISACCEPT\"/><Cell col=\"4\" text=\"반려사유\" cssclass=\"cell_point\" color=\"#333333\" tooltiptext=\"REFUSEREASON\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DEGREE\" maskeditformat=\"9,999.9999\"/><Cell col=\"2\" text=\"bind:APPROVALDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"3\" text=\"bind:ACTIONRESULT\" displaytype=\"combotext\" combocodecol=\"C,YesNo,,Y,Y\" edittype=\"expr:comp.parent.parent.parent.parent.fn_setEnbleText(currow, &apos;combo&apos;)\"/><Cell col=\"4\" text=\"bind:REFUSEREASON\" edittype=\"expr:comp.parent.parent.parent.parent.fn_setEnbleText(currow, &apos;text&apos;)\" textAlign=\"left\"/></Band></Format></Formats>");
            this.tab_carProcess.tab_approval.addChild(obj.name, obj);

            obj = new Static("sta_subTitleValidationHistory","grd_carAccept:10","sta_carsequence:5","150","34",null,null,null,null,null,null,this.tab_carProcess.tab_approval.form);
            obj.set_taborder("4");
            obj.set_text("유효성 평가 이력");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MEASUREVALUELIST");
            this.tab_carProcess.tab_approval.addChild(obj.name, obj);

            obj = new Grid("grd_validationHistory","grd_carAccept:10","75",null,null,"0.33%","5",null,null,null,null,this.tab_carProcess.tab_approval.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_estimateHistory");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"130\"/><Column size=\"200\"/><Column size=\"175\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"차수\" color=\"#333333\" tooltiptext=\"DEGREE\"/><Cell col=\"2\" text=\"마감일시\" tooltiptext=\"CLOSETIME\"/><Cell col=\"3\" text=\"마감여부\" color=\"#333333\" tooltiptext=\"CLAIMYN\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DEGREE\" maskeditformat=\"9,999.9999\"/><Cell col=\"2\" text=\"bind:CREATEDTIME\"/><Cell col=\"3\" text=\"bind:ISCLOSE\" displaytype=\"combotext\" combocodecol=\"C,YesNo,,Y,Y\" edittype=\"combo\"/></Band></Format></Formats>");
            this.tab_carProcess.tab_approval.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"5","80","24","5",null,null,null,null,null,this.tab_carProcess.tab_approval.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("초기화");
            obj.set_tooltiptext("INITIALIZE");
            this.tab_carProcess.tab_approval.addChild(obj.name, obj);

            obj = new Button("btn_tempSave",null,"5","80","24","btn_reset:5",null,null,null,null,null,this.tab_carProcess.tab_approval.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("임시저장");
            obj.set_tooltiptext("TEMPSAVE");
            this.tab_carProcess.tab_approval.addChild(obj.name, obj);

            obj = new Tabpage("tab_evaluation",this.tab_carProcess);
            obj.set_text("유효성 평가");
            obj.set_tooltiptext("CARevaluation");
            this.tab_carProcess.addChild(obj.name, obj);

            obj = new Static("sta_carsequence","0","0","9.92%","31",null,null,"100",null,null,null,this.tab_carProcess.tab_evaluation.form);
            obj.set_taborder("0");
            obj.set_text("유효성 순번");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("OCCURDATE");
            this.tab_carProcess.tab_evaluation.addChild(obj.name, obj);

            obj = new Combo("cbo_carsequence","124","5",null,"20","50.00%",null,null,null,null,null,this.tab_carProcess.tab_evaluation.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,CARNumber,,Y,Y");
            obj.set_text("cmb_00");
            this.tab_carProcess.tab_evaluation.addChild(obj.name, obj);

            obj = new Static("sta_subTitleFieldEval","5","sta_carsequence:0","150","34",null,null,null,null,null,null,this.tab_carProcess.tab_evaluation.form);
            obj.set_taborder("3");
            obj.set_text("현장 평가");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DEFAULTINFO");
            this.tab_carProcess.tab_evaluation.addChild(obj.name, obj);

            obj = new Div("div_fieldEval","5","sta_subTitleFieldEval:0","45%","63",null,null,"450",null,"63",null,this.tab_carProcess.tab_evaluation.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.tab_carProcess.tab_evaluation.addChild(obj.name, obj);

            obj = new Static("sta_checkdate","0","0","80","31",null,null,null,null,null,null,this.tab_carProcess.tab_evaluation.form.div_fieldEval.form);
            obj.set_taborder("0");
            obj.set_text("확인일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("EQUIPMENT");
            this.tab_carProcess.tab_evaluation.form.div_fieldEval.addChild(obj.name, obj);

            obj = new Div("div_checkdate","sta_checkdate:5","5","40%","20",null,null,null,null,null,null,this.tab_carProcess.tab_evaluation.form.div_fieldEval.form);
            obj.set_taborder("1");
            obj.set_url("common::com_calendar.xfdl");
            obj.set_enable("false");
            this.tab_carProcess.tab_evaluation.form.div_fieldEval.addChild(obj.name, obj);

            obj = new Static("sta_checker","0","31","80","31",null,null,null,null,null,null,this.tab_carProcess.tab_evaluation.form.div_fieldEval.form);
            obj.set_taborder("2");
            obj.set_text("점검자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("WORKSTARTLEADTIME");
            this.tab_carProcess.tab_evaluation.form.div_fieldEval.addChild(obj.name, obj);

            obj = new Edit("edt_checker","sta_checker:5","36","40%","20",null,null,null,null,null,null,this.tab_carProcess.tab_evaluation.form.div_fieldEval.form);
            obj.set_taborder("3");
            this.tab_carProcess.tab_evaluation.form.div_fieldEval.addChild(obj.name, obj);

            obj = new Edit("edt_checker_id","0","5","34","20",null,null,null,null,null,null,this.tab_carProcess.tab_evaluation.form.div_fieldEval.form);
            obj.set_taborder("8");
            obj.set_visible("false");
            obj.set_text("점검자ID (HIDDEN)");
            this.tab_carProcess.tab_evaluation.form.div_fieldEval.addChild(obj.name, obj);

            obj = new Button("btn_checker","edt_checker:0","36","22","20",null,null,null,null,null,null,this.tab_carProcess.tab_evaluation.form.div_fieldEval.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.tab_carProcess.tab_evaluation.form.div_fieldEval.addChild(obj.name, obj);

            obj = new Static("sta_checkresult","btn_checker:5","31","80","31",null,null,null,null,null,null,this.tab_carProcess.tab_evaluation.form.div_fieldEval.form);
            obj.set_taborder("4");
            obj.set_text("점검결과");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("WORKSTARTLEADTIME");
            this.tab_carProcess.tab_evaluation.form.div_fieldEval.addChild(obj.name, obj);

            obj = new Combo("cbo_checkresult","sta_checkresult:5","36",null,"20","5",null,null,null,null,null,this.tab_carProcess.tab_evaluation.form.div_fieldEval.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,YesNo,,Y,Y");
            this.tab_carProcess.tab_evaluation.form.div_fieldEval.addChild(obj.name, obj);

            obj = new Div("div_file","div_fieldEval:10","sta_carsequence:0",null,null,"5","5",null,null,null,null,this.tab_carProcess.tab_evaluation.form);
            obj.set_taborder("2");
            obj.set_url("common::com_file_b2.xfdl");
            obj.set_text("");
            this.tab_carProcess.tab_evaluation.addChild(obj.name, obj);

            obj = new Div("div_fieldEvalRemark","5","div_fieldEval:-3","45%","40",null,null,"450",null,"50",null,this.tab_carProcess.tab_evaluation.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.tab_carProcess.tab_evaluation.addChild(obj.name, obj);

            obj = new Static("sta_remark","0","0","80",null,null,"0",null,null,null,null,this.tab_carProcess.tab_evaluation.form.div_fieldEvalRemark.form);
            obj.set_taborder("0");
            obj.set_text("점검내용");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("MAXVALUE");
            this.tab_carProcess.tab_evaluation.form.div_fieldEvalRemark.addChild(obj.name, obj);

            obj = new TextArea("txa_remark","sta_remark:5","5",null,null,"5","5",null,null,null,null,this.tab_carProcess.tab_evaluation.form.div_fieldEvalRemark.form);
            obj.set_taborder("1");
            this.tab_carProcess.tab_evaluation.form.div_fieldEvalRemark.addChild(obj.name, obj);

            obj = new Static("sta_subTitleDataEval","5","div_fieldEvalRemark:0","150","34",null,null,null,null,null,null,this.tab_carProcess.tab_evaluation.form);
            obj.set_taborder("6");
            obj.set_text("Data 평가");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DEFAULTINFO");
            this.tab_carProcess.tab_evaluation.addChild(obj.name, obj);

            obj = new Div("div_dataEval","5","sta_subTitleDataEval:0","45%","63",null,null,"450",null,"63",null,this.tab_carProcess.tab_evaluation.form);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.tab_carProcess.tab_evaluation.addChild(obj.name, obj);

            obj = new Static("sta_searchdate","0","0","120","31",null,null,null,null,null,null,this.tab_carProcess.tab_evaluation.form.div_dataEval.form);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("EQUIPMENT");
            this.tab_carProcess.tab_evaluation.form.div_dataEval.addChild(obj.name, obj);

            obj = new Calendar("cal_searchstddate","sta_searchdate:5","5","150","20",null,null,null,null,null,null,this.tab_carProcess.tab_evaluation.form.div_dataEval.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_carProcess.tab_evaluation.form.div_dataEval.addChild(obj.name, obj);

            obj = new Static("sta_sameoccurrence","0","31","120","31",null,null,null,null,null,null,this.tab_carProcess.tab_evaluation.form.div_dataEval.form);
            obj.set_taborder("2");
            obj.set_text("동일발생건");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("WORKSTARTLEADTIME");
            this.tab_carProcess.tab_evaluation.form.div_dataEval.addChild(obj.name, obj);

            obj = new Edit("edt_sameoccurrence","sta_sameoccurrence:5","35",null,"20","50%",null,null,null,null,null,this.tab_carProcess.tab_evaluation.form.div_dataEval.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_text("IFV");
            this.tab_carProcess.tab_evaluation.form.div_dataEval.addChild(obj.name, obj);

            obj = new Static("sta_isclose","edt_sameoccurrence:5","31","120","31",null,null,null,null,null,null,this.tab_carProcess.tab_evaluation.form.div_dataEval.form);
            obj.set_taborder("4");
            obj.set_text("마감여부");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("WORKSTARTLEADTIME");
            this.tab_carProcess.tab_evaluation.form.div_dataEval.addChild(obj.name, obj);

            obj = new Combo("cbo_isclose","sta_isclose:5","36",null,"20","5",null,null,null,null,null,this.tab_carProcess.tab_evaluation.form.div_dataEval.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,YesNo,,Y,Y");
            this.tab_carProcess.tab_evaluation.form.div_dataEval.addChild(obj.name, obj);

            obj = new Calendar("cal_searchenddate","cal_searchstddate:15","5","150","20",null,null,null,null,null,null,this.tab_carProcess.tab_evaluation.form.div_dataEval.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_carProcess.tab_evaluation.form.div_dataEval.addChild(obj.name, obj);

            obj = new Button("btn_tempSave",null,"5","80","24","90",null,null,null,null,null,this.tab_carProcess.tab_evaluation.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("임시저장");
            obj.set_tooltiptext("TEMPSAVE");
            this.tab_carProcess.tab_evaluation.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"5","80","24","5",null,null,null,null,null,this.tab_carProcess.tab_evaluation.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("초기화");
            obj.set_tooltiptext("INITIALIZE");
            this.tab_carProcess.tab_evaluation.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,300,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","tab_carProcess.tab_request.form.div_basInfo.form.div_carrequestdate","text","ds_request","CARREQUESTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_carProcess.tab_request.form.div_basInfo.form.edt_manager","value","ds_request","CHARGERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_carProcess.tab_request.form.div_basInfo.form.cbo_reasonconsumablelotid","value","ds_request","REASONCONSUMABLELOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_carProcess.tab_request.form.div_basInfo.form.edt_reasonarea","value","ds_request","REASONAREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_carProcess.tab_request.form.div_basInfo.form.txa_remark","value","ds_request","COMMENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab_carProcess.tab_receipt.form.div_basInfo.form.div_carreceiptdate","text","ds_receipt","RECEIPTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_carProcess.tab_receipt.form.div_basInfo.form.edt_receiptor","value","ds_receipt","RECEIPTUSERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab_carProcess.tab_receipt.form.div_basInfo.form.txa_remark","value","ds_receipt","DESCRIPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","tab_carProcess.tab_evaluation.form.div_fieldEval.form.div_checkdate","text","ds_evaluation","CHECKDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","tab_carProcess.tab_evaluation.form.div_fieldEval.form.edt_checker","value","ds_evaluation","CHECKUSERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","tab_carProcess.tab_evaluation.form.div_fieldEvalRemark.form.txa_remark","value","ds_evaluation","CHECKDETAILS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","tab_carProcess.tab_evaluation.form.div_dataEval.form.cal_searchstddate","value","ds_evaluation","INQUIRYFROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","tab_carProcess.tab_evaluation.form.div_dataEval.form.edt_sameoccurrence","value","ds_evaluation","CONCURRENCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","tab_carProcess.tab_evaluation.form.div_dataEval.form.cal_searchenddate","value","ds_evaluation","INQUIRYTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","tab_carProcess.tab_request.form.div_basInfo.form.ckb_requestforaction","value","ds_request","ISREQUESTMEASURES");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","tab_carProcess.tab_evaluation.form.div_dataEval.form.cbo_isclose","value","ds_evaluation","ISCLOSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","tab_carProcess.tab_request.form.div_basInfo.form.edt_manager_id","value","ds_request","CHARGERID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_carProcess.tab_request.form.div_basInfo.form.edt_reasonarea_id","value","ds_request","REASONAREAID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_carProcess.tab_request.form.div_basInfo.form.cbo_reasonIdVersion","value","ds_request","SPLITCONSUMABLEDEFIDVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_carProcess.tab_request.form.div_basInfo.form.cbo_reasonprocesssegmentid","value","ds_request","REASONSEGMENTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab_carProcess.tab_receipt.form.div_basInfo.form.edt_receiptor_id","value","ds_receipt","RECEIPTUSER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","tab_carProcess.tab_evaluation.form.div_fieldEval.form.edt_checker_id","value","ds_evaluation","CHECKUSER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","tab_carProcess.tab_evaluation.form.div_fieldEval.form.cbo_checkresult","value","ds_evaluation","CHECKRESULT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_calendar.xfdl");
            this._addPreloadList("fdl","common::com_file_b2.xfdl");
        };
        
        // User Script
        this.addIncludeScript("QAM01200D2.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM01200D2.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM01200D2.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 이상등록 Div
         * 파일명 		: QAM01200D2.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.04.19
         *
         * 설  명		: 품질관리 > 공정품질 > 품질규격 NCR > CAR 요청팝업 > 이상등록 Div
         * 				  품질관리에서 사용되는 이상등록 Div
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.19	권혜영   	최초작성
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
        this.fv_isInit = true;
        this.fv_parentData = {}; //부모창에서 받아올 데이터
        this.fv_abnormalType; //부모창에서 넘겨줄 데이터

        this.fv_isShowReasonCombo = true;
        this.fv_sequence;
        this.fv_lastDegree = 0; //마지막 차수

        this.fv_reasonConsumable = {}; //이상발생정보
        this.fv_isTempSaved = [true, true, true, true]; //임시저장 여부를 판별하는 변수
        this.fv_isClosedChanged = false; //마감여부를 변경했는지 판별하는 변수
        this.fv_grdCarAcceptHandleRow = null; ////승인여부를 입력할 때  rowhandle을 할당 (_handle)
        this.fv_isTempSavedCarAcceptSeq = []; //승인여부 임시저장된 sequence
        this.fv_isEnbleText = false;
        this.fv_objDs; //차수가 바뀔 때 저장할 데이터셋
        this.fv_menuAuth; //접속사용자의 NCR 메인화면의 메뉴권한정보
        /**************************************************************************
         * 2-1. 호출화면정의
         - QAM00900 : 공정검사 NCR
         - QAM01200 : 품질규격 NCR
         - QAM01600	: 출하검사 NCR
         - QAM00700	: 수입검사 NCR
         ***************************************************************************/
        this.programId; //호출화면

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
        	if(this.ds_qamIssue.rowcount == 0) return;

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_search.setColumn(0, "ABNOCRNO", this.ds_qamIssue.getColumn(0, "ABNOCRNO"));
        	this.ds_search.setColumn(0, "ABNOCRTYPE", this.ds_qamIssue.getColumn(0, "ABNOCRTYPE"));
        	this.ds_search.setColumn(0, "LOTID", this.ds_qamIssue.getColumn(0, "LOTID"));

        	var sSvcID 			= "selectQamIssue";
        	var sController 	= "/qam01200/selectQamIssue.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamIssueAffectLot=output";
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
        this.fn_add = function(obj,e)
        {

        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {

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
        		if (trId == "selectQamIssue")
        		{

        		} else if (trId == "selectSequenceDegree")
        		{
        			var degree = this.ds_output.getColumn(0, "DEGREE");
        			this.fv_lastDegree = this.nfn_isNull(degree) ? "0" : degree;

        		}  else if (trId == "selectSequenceState") // AS-IS : ScreenByState
        		{
        			var state = this.ds_output.getColumn(0, "STATE");
        			// 요청순번에 해당하는 데이터의 상태체크
        			var tabIdx = this.tab_carProcess.tabindex;
        			var showHideCompType = [Button], enableDisableCompType = [Edit, Combo, CheckBox, TextArea, Button, Calendar];

        			console.log("selectSequenceState callback : " + state);
        			switch (tabIdx) {
        				case 0:
        					var ignoreColumn = "cbo_carsequence|div_carrequestdate|edt_reasonarea|btn_download";

        					// 상태값이 없으면 요청탭 입력이 가능해야한다.
        					if(this.nfn_isNull(state)) {
        						this.qamfn_setCompControl(this.tab_carProcess.tab_request.form.div_basInfo.form.components, "show", showHideCompType);
        						this.qamfn_setCompControl(this.tab_carProcess.tab_request.form.div_basInfo.form.components, "enable", enableDisableCompType, ignoreColumn);
        						this.fn_addRequest();

        					} else {
        						this.qamfn_setCompControl(this.tab_carProcess.tab_request.form.div_basInfo.form.components, "hide", showHideCompType, "btn_manager|btn_download");
        						this.qamfn_setCompControl(this.tab_carProcess.tab_request.form.div_basInfo.form.components, "disable", enableDisableCompType, ignoreColumn);
        						this.fn_searchRequest();
        					}
        					break;

        				case 1:
        					var ignoreColumn = "cbo_carsequence|div_carreceiptdate";

        					// 상태값이 요청완료라면 UnReadOnly
        					if(state == "CARRequestCompleted") {
        						this.qamfn_setCompControl(this.tab_carProcess.tab_receipt.form.div_basInfo.form.components, "show", showHideCompType);
        						this.qamfn_setCompControl(this.tab_carProcess.tab_receipt.form.div_basInfo.form.components, "enable", enableDisableCompType, ignoreColumn);
        						this.qamfn_setCompControl(this.tab_carProcess.tab_receipt.form.div_basInfo.form.div_file.form.components, "show", [Div, Button], "btn_fileDownLoad");

        						this.fn_addReceipt();
        						//저장될 때 degree + 1로 저장하므로, +1한 값을 search.
        						this.fn_searchReceiptAttach(nexacro.toNumber(this.fv_lastDegree) + 1);
        					}
        					else {
        						this.qamfn_setCompControl(this.tab_carProcess.tab_receipt.form.div_basInfo.form.components, "hide", showHideCompType, "btn_receiptor|btn_download");
        						this.qamfn_setCompControl(this.tab_carProcess.tab_receipt.form.div_basInfo.form.components, "disable", enableDisableCompType, ignoreColumn);
        						this.qamfn_setCompControl(this.tab_carProcess.tab_receipt.form.div_basInfo.form.div_file.form.components, "hide", [Div, Button], "btn_fileDownLoad");

        						// 상태값이 접수완료, 승인완료, 유효성평가완료라면 ReadOnly후 데이터검색
        						if(!this.nfn_isNull(state)) {
        							this.fn_searchReceipt();
        						}  else {
        							this.fn_addReceipt();
        							this.fn_searchReceiptAttach(nexacro.toNumber(this.fv_lastDegree) + 1);
        						}
        					}
        					break;

        				case 2:
        					var ignoreColumn = "cbo_carsequence";

        					// 상태값이 접수완료라면 UnReadOnly
        					if(state == "CARReceivingCompleted") {
        						this.qamfn_setCompControl(this.tab_carProcess.tab_approval.form.components, "show", showHideCompType);
        						this.fn_addAcceptHistroy(state);
        						this.fv_isEnbleText = true;
        					}
        					// 상태값이 요청완료, 접수완료, 유효성평가완료라면 ReadOnly후 데이터검색
        					else {
        						this.qamfn_setCompControl(this.tab_carProcess.tab_approval.form.components, "hide", showHideCompType);

        						this.fn_searchAcceptHistroy(state);
        						this.fv_isEnbleText = false;
        					}
        					break;

        				case 3:
        					var ignoreColumn = "div_checkdate|edt_sameoccurrence";
        					this.fn_searchValidationtAttach();

        					// 상태값이 승인완료라면 유효성탭 UnReadOnly후 Clear
        					if(state == "CARApprovalCompleted") {
        						this.qamfn_setCompControl(this.tab_carProcess.tab_evaluation.form.components, "show", showHideCompType);
        						this.qamfn_setCompControl(this.tab_carProcess.tab_evaluation.form.div_fieldEval.form.components, "enable", enableDisableCompType, ignoreColumn);
        						this.qamfn_setCompControl(this.tab_carProcess.tab_evaluation.form.div_fieldEvalRemark.form.components, "enable", enableDisableCompType, ignoreColumn);
        						this.qamfn_setCompControl(this.tab_carProcess.tab_evaluation.form.div_dataEval.form.components, "enable", enableDisableCompType, ignoreColumn);
        						this.qamfn_setCompControl(this.tab_carProcess.tab_evaluation.form.div_file.form.components, "show", [Div, Button], "btn_fileDownLoad");

        						this.fn_addValidation();
        					}
        					// 상태값이 요청완료, 접수완료, 유효성평가완료라면 ReadOnly후 데이터검색
        					else {
        						this.qamfn_setCompControl(this.tab_carProcess.tab_evaluation.form.components, "hide", showHideCompType);
        						this.qamfn_setCompControl(this.tab_carProcess.tab_evaluation.form.div_fieldEval.form.components, "disable", enableDisableCompType, ignoreColumn);
        						this.qamfn_setCompControl(this.tab_carProcess.tab_evaluation.form.div_fieldEvalRemark.form.components, "disable", enableDisableCompType, ignoreColumn);
        						this.qamfn_setCompControl(this.tab_carProcess.tab_evaluation.form.div_dataEval.form.components, "disable", enableDisableCompType, ignoreColumn);
        						this.qamfn_setCompControl(this.tab_carProcess.tab_evaluation.form.div_file.form.components, "hide", [Div, Button], "btn_fileDownLoad");

        						if(!this.nfn_isNull(state)) {
        							this.fn_searchValidation();
        						} else {
        							this.fn_addValidation();
        						}
        					}
        					break;
        			}

        			//사용자의 메뉴권한별 버튼 활성화
        			this.fn_menuAuth();

        		} else if (trId == "selectCarRequest")
        		{
        			this.ds_request.appendData(this.ds_temp, true);
        			this.fn_filter(this.ds_request);

        		} else if (trId == "selectCarReceipt")
        		{
        			this.ds_receipt.appendData(this.ds_temp, true);
        			this.fn_filter(this.ds_receipt);

        		} else if (trId == "selectCarApproval")
        		{
        			this.ds_acceptHistory.appendData(this.ds_temp, true);
        			this.fn_filter(this.ds_acceptHistory);

        		} else if (trId == "selectCarValidation")
        		{
        			this.ds_evaluation.appendData(this.ds_temp, true);
        			this.fn_filter(this.ds_evaluation);

        		} else if (trId == "selectConcurrenceCount")
        		{
        			var count = this.ds_output.getColumn(0, "COUNT");
        			this.tab_carProcess.tab_evaluation.form.div_dataEval.form.edt_sameoccurrence.set_value(count);
        		}
        	}
        };

        /*
         * combo callback
         */
        this.fn_callBackCombo = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "selectGetReasonConsumableList") //원인품목
        		{

        		} else if (trId == "selectGetDefectReasonConsumableLot") //원인 LOTID
        		{

        		} else if (trId == "selectGetDefectReasonProcesssegment") //원인공정
        		{
        		}
        	}
        };

        /*
         * combo grid callback
         */
        this.fn_callBackComboGrid = function (trId, retVal)
        {
        	if (trId == "selectGetReasonConsumableList") //원인품목
        	{
        		this.ds_request.setColumn(0, "SPLITCONSUMABLEDEFIDVERSION", retVal);
        		this.ds_request.setColumn(0, "REASONCONSUMABLEDEFID", retVal.split("|")[0]);
        		this.ds_request.setColumn(0, "REASONCONSUMABLEDEFVERSION", retVal.split("|")[1]);
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
        this.fn_formInit = function (objDs, pProgramId, pMenuAuth)
        {
        	this.fv_parentData["LOTID"] = objDs.getColumn(0, "LOTID");
        	this.fv_parentData["ABNOCRNO"] = objDs.getColumn(0, "ABNOCRNO");
        	this.fv_parentData["ABNOCRTYPE"] = objDs.getColumn(0, "ABNOCRTYPE");
        	this.fv_parentData["REASONCONSUMABLEDEFID"] = objDs.getColumn(0, "REASONCONSUMABLEDEFID");
        	this.fv_parentData["REASONCONSUMABLEDEFVERSION"] = objDs.getColumn(0, "REASONCONSUMABLEDEFVERSION");
        	this.fv_parentData["REASONCONSUMABLELOTID"] = objDs.getColumn(0, "REASONCONSUMABLELOTID");
        	this.fv_parentData["REASONSEGMENTID"] = objDs.getColumn(0, "REASONSEGMENTID");
        	this.programId = pProgramId; //호출화면
        	this.fv_menuAuth = pMenuAuth;

        	//로드 시 작업
        	if(this.fv_isShowReasonCombo) {
        		this.fn_setReasonIdVersionCombo();
        		this.fn_setReasonLotIdCombo(this.fv_parentData["REASONCONSUMABLEDEFID"]  + "|" + this.fv_parentData["REASONCONSUMABLEDEFVERSION"]);
        		this.fn_setReasonSegmentIdCombo(this.fv_parentData["REASONCONSUMABLELOTID"]);
        		this.fn_setReason(1);
        	}

        	this.fn_changeTabIndex(0);
        };

        /*
         * 기능 : 사용자의 메뉴권한에 따라 버튼 활성화
         *         탭클릭때마다 버튼을 활성화 해서 this.qamfn_ncrMenuAuth에서 별도로 분리함
         */
        this.fn_menuAuth = function()
        {
            var insAuth = (this.fv_menuAuth).substring(0,1);
        	var updAuth = (this.fv_menuAuth).substring(2,3);
        	var delAuth = (this.fv_menuAuth).substring(3,4);

        	if ( insAuth == "0" && updAuth == "0" && delAuth == "0") {
        		this.tab_carProcess.tab_request.form.div_basInfo.form.btn_tempSave.set_enable(false);
        		this.tab_carProcess.tab_request.form.div_basInfo.form.btn_reset.set_enable(false);

        		this.tab_carProcess.tab_receipt.form.div_basInfo.form.btn_tempSave.set_enable(false);
        		this.tab_carProcess.tab_receipt.form.div_basInfo.form.btn_reset.set_enable(false);
        		this.tab_carProcess.tab_receipt.form.div_basInfo.form.div_file.form.btn_fileDel.set_enable(false);
        		this.tab_carProcess.tab_receipt.form.div_basInfo.form.div_file.form.btn_upload03.set_enable(false);

        		this.tab_carProcess.tab_approval.form.btn_tempSave.set_enable(false);
        		this.tab_carProcess.tab_approval.form.btn_reset.set_enable(false);

        		this.tab_carProcess.tab_evaluation.form.btn_tempSave.set_enable(false);
        		this.tab_carProcess.tab_evaluation.form.btn_reset.set_enable(false);
        		this.tab_carProcess.tab_evaluation.form.div_file.form.btn_fileDel.set_enable(false);
        		this.tab_carProcess.tab_evaluation.form.div_file.form.btn_upload03.set_enable(false);
        	}
        };
        /*
         * 기능 : 탭의 순번에 따라 마지막차수 조회(as-is : InitializeSearchLastDegree / GetSequenceDegree)
         */
        this.fn_searchSequenceDegree = function ()
        {
        	this.ds_output.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ABNOCRNO", this.fv_parentData["ABNOCRNO"]);
        	this.ds_search.setColumn(0, "ABNOCRTYPE", this.fv_parentData["ABNOCRTYPE"]);
        	this.ds_search.setColumn(0, "SEQUENCE", this.fv_sequence);

        	var sSvcID 			= "selectSequenceDegree";
        	var sController 	= "/qam01200/selectSequenceDegree.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_output=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, null, true, false);
        };

        /*
         * 기능 : 탭의 순번에 따라 상태값 조회
         */
        this.fn_searchSequenceState = function ()
        {
        	this.ds_output.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ABNOCRNO", this.fv_parentData["ABNOCRNO"]);
        	this.ds_search.setColumn(0, "ABNOCRTYPE", this.fv_parentData["ABNOCRTYPE"]);
        	this.ds_search.setColumn(0, "SEQUENCE", this.fv_sequence);

        	var sSvcID 			= "selectSequenceState";
        	var sController 	= "/qam01200/selectSequenceState.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_output=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, null, true, false);
        };

        /*
         * 기능 : 해당 기간의 이상발생 갯수 조회 (as-is : SearchConcurrenceCount)
         */
        this.fn_searchConcurrenceCount = function (fromDate, toDate, inspectionType, callController)
        {
        	this.ds_output.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "FROMDATE", fromDate);
        	this.ds_search.setColumn(0, "TODATE", toDate);
        	this.ds_search.setColumn(0, "RESOURCETYPE", inspectionType);

        	var sSvcID 			= "selectConcurrenceCount";
        	var sController 	= callController;
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_output=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭 index가 변경되었을 때 설정값 세팅
         */
        this.fn_changeTabIndex = function(tabIdx)
        {
        	switch (tabIdx) {
        		case 0:
        			this.fv_sequence = this.tab_carProcess.tab_request.form.div_basInfo.form.cbo_carsequence.value;
        			this.qamSearchComp = this.tab_carProcess.tab_request.form.div_basInfo.form;
        			break;
        		case 1:
        			this.fv_sequence = this.tab_carProcess.tab_receipt.form.div_basInfo.form.cbo_carsequence.value;
        			this.qamSearchComp = this.tab_carProcess.tab_receipt.form.div_basInfo.form;
        			break;
        		case 2:
        			this.fv_sequence = this.tab_carProcess.tab_approval.form.cbo_carsequence.value;
        			this.qamSearchComp = this.tab_carProcess.tab_approval.form;
        			break;
        		case 3:
        			this.fv_sequence = this.tab_carProcess.tab_evaluation.form.cbo_carsequence.value;
        			this.qamSearchComp = this.tab_carProcess.tab_evaluation.form.div_fieldEval.form;
        			break;
        	}
        	this.fn_searchSequenceDegree();
        	this.fn_searchSequenceState();
        };

        /*
         * 기능 : 시퀀스 변경했을 때
         */
        this.fn_changeSequence = function(obj, e)
        {
        	var val = obj == null ? e : e.postvalue;
        	switch (this.tab_carProcess.tabindex) {
        		case 0:
        			this.fv_objDs = this.ds_request;
        			break;
        		case 1:
        			this.fv_objDs = this.ds_receipt;
        			break;
        		case 2:
        			this.fv_objDs = this.ds_acceptHistory;
        			break;
        		case 3:
        			this.fv_objDs = this.ds_evaluation;
        			this.fv_isClosedChanged = false;
        			break;
        	}

        	this.fv_sequence = val;
        	this.fn_searchSequenceDegree();
        	this.fn_searchSequenceState();
        };


        //순번이 바뀌기 전의 이벤트 : 순번을 바꾸기 전에 해당 순번의 입력값이 임시저장 되어있지않으면 메시지를 보여주는 이벤트 (AS-IS : CboSequenceNumber_Click)
        this.fn_beforeChangeSequence = function(obj,e)
        {
        	for(var i = 0; i < 4; i++) {
        		if(!this.fv_isTempSaved[i]) {
        			this.gfn_Message("NeedToTempSave", null, "warning", "ok");
        			return false;
        		}
        	}
        };

        /*
         * 기능 : 임시저장되었는지 체크하는 함수
         */
        this.fn_checkIsTempSaved = function() {

        	var ret = true;
        	for(var i = 0; i < 4; i++) {
        		if(!this.fv_isTempSaved[i]) {
        			ret = false;
        		}
        	}
        	return ret;
        };

        /*
         * 기능 : 탭페이지 기준으로 하위 컨트롤 초기화 --> 미구현 (불필요한것 같음)
         */
        this.fn_clearAllChildControl = function (isDeleteReason)
        {

        };

        /*
         * 기능 : 입력중인 데이터가 있는지 확인 -> 불필요.
         */
        this.fn_isInputData = function ()
        {

        };

        /*
         * 기능 : 날짜형식으로 set. (comp.parent.parent.parent.parent.fn_setFormatDate(currow))
         */
        this.fn_setFormatDate = function (nRow)
        {
        	var sDate = this.ds_acceptHistory.getColumn(nRow, "APPROVALDATE") || this.gfn_todayTime();
        	if(!this.nfn_isNull(sDate)) {
        		return this.qamfn_setFormatDate("YYYY-MM-DD HH:MM:SS", sDate);
        	}
        };

        /*
         * 기능 : 날짜형식으로 set.
         */
        this.fn_setEnbleText = function (nRow, ret)
        {
        	var degree = this.ds_acceptHistory.getColumn(nRow, "DEGREE");
        	if(this.fv_lastDegree == degree && this.fv_isEnbleText) {
        		return ret;
        	}
        };

        /*
         * 기능 : sequence로 Filter 후 rowpostion 이동
         */
        this.fn_filter = function (objDs, filterCheck)
        {
        	var findRowExpr;
        	if(filterCheck) {
        		findRowExpr = "SEQUENCE == '"+this.fv_sequence+"' && ISTEMPSAVED == 'true'";
        	} else {
        		findRowExpr = "SEQUENCE == '"+this.fv_sequence+"'";
        	}

        	objDs.filter("");
        	objDs.filter(findRowExpr);

        	objDs.set_rowposition(0);
        };

        /**************************************************************************
         * 7-1. 기타 함수 - CAR 요청
         **************************************************************************/
        /*
         * 기능 : CAR 요청 ADD ROW
         */
        this.fn_addRequest = function ()
        {
        	this.ds_request.filter("");
        	var findRowExpr = "SEQUENCE == '"+this.fv_sequence+"' && ISTEMPSAVED == 'true'";
        	var nRowCnt = this.ds_request.getCaseCount(findRowExpr);

        	//해당 rowposition으로 이동
        	if(nRowCnt > 0) {
        		this.fn_filter(this.ds_request, true);
        	} else {
        		this.fn_filter(this.ds_request, true);
        		this.ds_request.set_updatecontrol(false);
        		this.ds_request.set_enableevent(false);

        		var nRow = this.ds_request.addRow();
        		//AS-IS : SetSaveRequest
        		this.ds_request.setColumn(nRow, "ABNOCRNO", this.fv_parentData["ABNOCRNO"]);
        		this.ds_request.setColumn(nRow, "ABNOCRTYPE", this.fv_parentData["ABNOCRTYPE"]);
        		this.ds_request.setColumn(nRow, "SEQUENCE", this.fv_sequence);

        		this.ds_request.setColumn(nRow, "PLANTID", this.gf_getSiteType());
        		this.ds_request.setColumn(nRow, "ENTERPRISEID", this.gf_getEnterpriseId());
        		this.ds_request.setColumn(nRow, "CARREQUESTDATE", this.qamfn_todayTime());
        		this.ds_request.setColumn(nRow, "STATE", "CARRequestCompleted");
        		this.ds_request.setColumn(nRow, "VALIDSTATE", "Valid");
        		this.ds_request.setColumn(nRow, "SPLITCONSUMABLEDEFIDVERSION", "");

        		this.tab_carProcess.tab_request.form.div_basInfo.form.div_carrequestdate.form.calStart.set_value(this.gfn_todayTime());

        		this.ds_request.set_enableevent(true);
        		this.ds_request.set_updatecontrol(true);
        	}
        };

        /*
         * 기능 : CAR 요청 Search (AS-IS : RequestSearch)
         */
        this.fn_searchRequest = function ()
        {
        	this.fn_filter(this.ds_request);

        	//이미 조회해온 sequence의 데이터가 있다면 조회하지 않음
        	if(this.ds_request.rowcount > 0)  return;

        	this.ds_request.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ABNOCRNO", this.fv_parentData["ABNOCRNO"]);
        	this.ds_search.setColumn(0, "ABNOCRTYPE", this.fv_parentData["ABNOCRTYPE"]);
        	this.ds_search.setColumn(0, "SEQUENCE", this.fv_sequence);

        	var sSvcID 			= "selectCarRequest";
        	var sController 	= "/qam01200/selectCarRequest.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_temp=output";
        	var sArgs 			= "";

        	//abnormalType 타입에 따라 다른 CarRequest 죄회쿼리를 설정하는 함수 (AS-IS : SetCarRequestQueryId)
        	if(this.fv_abnormalType == "SelfInspectionTake" || this.fv_abnormalType == "SelfInspectionShip" || this.fv_abnormalType == "FinishInspection" || this.fv_abnormalType == "AOIInspection" || this.fv_abnormalType == "ShipmentInspection" ) {
        		sArgs 			+= this.gfn_setParam("SQL_ID", "selectCarRequestAbnormal");
        	} else {
        		sArgs 			+= this.gfn_setParam("SQL_ID", "selectCarRequest");
        	}
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : CAR 요청 임시저장 (AS-IS : SetSaveRequest)
         */
        this.fn_tempSaveRequest = function(obj,e)
        {
        	this.ds_request.setColumn(this.ds_request.rowposition, "ISTEMPSAVED", "true");
        	this.fv_isTempSaved[0] = true;
        };

        /*
         * 기능 : 초기화
         */
        this.fn_resetRequest = function(obj,e)
        {
        	this.ds_request.reset();
        };

        /*
         * 기능 : 대책서 양식 다운로드 (품질관리 > 대책서 관리 > 대책서 양식 관리 에서 등록된 파일)
         */
        this.fn_downloadRequest = function(obj,e)
        {

        	var jobSysCd = "QAM"; 					//업무구분코드 CMD,BAS....
        	var subDir = "countermeasureForm"; 				//세부업무약어
        	var resouceid = "FILE.00001";					//테이블의 키 값
        	var resourcetype = "countermeasureForm"; 	//테이블명
        	var comments = "대책서양식"; 		//파일설명
        	var fileCnt = null; 					//업로드수
        	var oArg = {arg_jobSysCd:jobSysCd
        				,arg_atchSrcKey:resouceid
        				,arg_tableName:resourcetype
        				,arg_desc:comments
        				,arg_subDir:subDir
        				,arg_fileCnt:fileCnt};
        	this.gfn_openPopup("file_dnload","cmd::CMSA01310P.xfdl",oArg,"");

        };

        /**************************************************************************
         * 7-2. 기타 함수 - CAR 접수
         **************************************************************************/
        /*
         * 기능 : CAR 접수  ADD ROW
         */
        this.fn_addReceipt = function ()
        {
        	this.ds_receipt.filter("");
        	var findRowExpr = "SEQUENCE == '"+this.fv_sequence+"' && ISTEMPSAVED == 'true'";
        	var nRowCnt = this.ds_receipt.getCaseCount(findRowExpr);

        	//해당 rowposition으로 이동
        	if(nRowCnt > 0) {
        		this.fn_filter(this.ds_receipt, true);
        	} else {
        		this.fn_filter(this.ds_receipt, true);
        		this.ds_receipt.set_updatecontrol(false);
        		this.ds_receipt.set_enableevent(false);

        		var nRow = this.ds_receipt.addRow();

        		//AS-IS : SetSaveRequest
        		this.ds_receipt.setColumn(nRow, "ABNOCRNO", this.fv_parentData["ABNOCRNO"]);
        		this.ds_receipt.setColumn(nRow, "ABNOCRTYPE", this.fv_parentData["ABNOCRTYPE"]);
        		this.ds_receipt.setColumn(nRow, "SEQUENCE", this.fv_sequence);
        		this.ds_receipt.setColumn(nRow, "RECEIPTDATE", this.qamfn_todayTime());
        		this.ds_receipt.setColumn(nRow, "DEGREE", this.fv_lastDegree);

        		this.ds_receipt.setColumn(nRow, "PLANTID", this.gf_getSiteType());
        		this.ds_receipt.setColumn(nRow, "ENTERPRISEID", this.gf_getEnterpriseId());

        		this.ds_receipt.setColumn(nRow, "STATE", "CARReceivingCompleted");
        		this.ds_receipt.setColumn(nRow, "VALIDSTATE", "Valid");

        		this.tab_carProcess.tab_receipt.form.div_basInfo.form.div_carreceiptdate.form.calStart.set_value(this.gfn_todayTime());

        		this.ds_receipt.set_enableevent(true);
        		this.ds_receipt.set_updatecontrol(true);
        	}
        };

        /*
         * 기능 : CAR 접수 Search
         */
        this.fn_searchReceipt = function ()
        {
        	this.fn_searchReceiptAttach(this.fv_lastDegree);
        	this.fn_filter(this.ds_receipt);

        	//이미 조회해온 sequence의 데이터가 있다면 조회하지 않음
        	if(this.ds_receipt.rowcount > 0)  return;

        	this.ds_temp.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ABNOCRNO", this.fv_parentData["ABNOCRNO"]);
        	this.ds_search.setColumn(0, "ABNOCRTYPE", this.fv_parentData["ABNOCRTYPE"]);
        	this.ds_search.setColumn(0, "SEQUENCE", this.fv_sequence);
        	this.ds_search.setColumn(0, "DEGREE", this.fv_lastDegree);
        	this.ds_search.setColumn(0, "RESOURCEID", this.fv_parentData["ABNOCRNO"] + this.tab_carProcess.tab_receipt.form.div_basInfo.form.cbo_carsequence.value + this.fv_lastDegree + "A" );

        	var sSvcID 			= "selectCarReceipt";
        	var sController 	= "/qam01200/selectCarReceipt.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_temp=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : CAR 접수 원본파일 조회
         */
        this.fn_searchReceiptAttach = function(degree)
        {
        	var divFile = this.tab_carProcess.tab_receipt.form.div_basInfo.form.div_file;
        	divFile.form.jobSysCd 		= "QAM";
        	divFile.form.atchTyCd 		= "FILE";
        	divFile.form.tableName 		= "QAM_CARAPPROVAL";
        	divFile.form.subDir  		= "carApproval";
        	divFile.form.atchSrcKey  	= this.fv_parentData["ABNOCRNO"] + this.tab_carProcess.tab_receipt.form.div_basInfo.form.cbo_carsequence.value + degree + "A";
        	divFile.form.fn_search();
        };

        /*
         * 기능 : CAR 접수 임시저장 (AS-IS : SetSaveReceipt)
         */
        this.fn_tempSaveReceipt = function(obj,e)
        {
        	this.ds_receipt.setColumn(this.ds_receipt.rowposition, "ISTEMPSAVED", "true");
        	this.fv_isTempSaved[1] = true;
        };

        /*
         * 기능 : CAR 접수 초기화
         */
        this.fn_resetReceipt = function(obj,e)
        {
        	this.ds_receipt.reset();
        };

        /**************************************************************************
         * 7-3. 기타 함수 - CAR 승인
         **************************************************************************/
        /*
         * 기능 : CAR 승인이력  ADD ROW
         */
        this.fn_addAcceptHistroy = function (state)
        {
        	this.ds_acceptHistory.filter("");
        	var findRowExpr = "SEQUENCE == '"+this.fv_sequence+"' && ISTEMPSAVED == 'true'";
        	var nRowCnt = this.ds_acceptHistory.getCaseCount(findRowExpr);

        	if(nRowCnt > 0) {
        		this.fn_filter(this.ds_acceptHistory);
        	} else {
        		this.fn_searchAcceptHistroy(state);
        	}
        };

        /*
         * 기능 : CAR 승인이력 Search (AS-IS : AcceptSearchHistroy)
         */
        this.fn_searchAcceptHistroy = function (state)
        {
        	this.fn_filter(this.ds_acceptHistory);

        	//이미 조회해온 sequence의 데이터가 있다면 조회하지 않음
        	if(this.ds_acceptHistory.rowcount > 0)  return;

        	this.ds_temp.clearData();
        	this.ds_estimateHistory.clearData();


        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ABNOCRNO", this.fv_parentData["ABNOCRNO"]);
        	this.ds_search.setColumn(0, "ABNOCRTYPE", this.fv_parentData["ABNOCRTYPE"]);
        	this.ds_search.setColumn(0, "SEQUENCE", this.fv_sequence);
        	this.ds_search.setColumn(0, "STATE", state);

        	var sSvcID 			= "selectCarApproval";
        	var sController 	= "/qam01200/selectCarApproval.do"; //GetCarAcceptHistory && GetCarEstimateHistory
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_temp=ds_acceptHistory ds_estimateHistory=ds_estimateHistory";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : CAR 승인 순번에 따른 임시저장 (AS-IS : BtnAcceptSave_Click > SetSaveReceipt)
         */
        this.fn_tempSaveApproval = function(obj,e)
        {
        	if(this.fv_grdCarAcceptHandleRow == null) return;
        	this.ds_acceptHistory.setColumn(this.fv_grdCarAcceptHandleRow, "APPROVALDATE", this.gfn_todayTime());

        	//현재 모든 row 임시저장 상태로 변경
        	this.ds_acceptHistory.set_updatecontrol(false);
        	this.ds_acceptHistory.set_enableevent(false);

        	for(var i = 0; i < this.ds_acceptHistory.rowcount; i++) {
        		this.ds_acceptHistory.setColumn(i, "ISTEMPSAVED", "true");
        	}

        	this.ds_acceptHistory.set_updatecontrol(true);
        	this.ds_acceptHistory.set_enableevent(true);

        	//승인여부 임시저장 seq push.
        	if(!this.nfn_isNull(this.fv_isTempSavedCarAcceptSeq)) {
        		for(var i = 0; i < this.fv_isTempSavedCarAcceptSeq.length; i++) {
        			if(this.fv_isTempSavedCarAcceptSeq[i] != this.fv_sequence) {
        				this.fv_isTempSavedCarAcceptSeq.push(this.fv_sequence);
        			}
        		}
        	} else {
        		this.fv_isTempSavedCarAcceptSeq.push(this.fv_sequence);
        	}
        	this.fv_isTempSaved[2] = true;

        };

        /*
         * 기능 : CAR 승인 초기화
         */
        this.fn_resetApproval = function(obj,e)
        {
        	this.ds_acceptHistory.reset();
        };

        /**************************************************************************
         * 7-4. 기타 함수 - CAR 유효성평가
         **************************************************************************/
        /*
         * 기능 : CAR 유효성평가  ADD ROW
         */
        this.fn_addValidation = function ()
        {
        	this.ds_evaluation.filter("");
        	var findRowExpr = "SEQUENCE == '"+this.fv_sequence+"' && ISTEMPSAVED == 'true'";
        	var nRowCnt = this.ds_evaluation.getCaseCount(findRowExpr);

        	//해당 rowposition으로 이동
        	if(nRowCnt > 0) {
        		this.fn_filter(this.ds_evaluation, true);
        	} else {
        		this.fn_filter(this.ds_evaluation, true);
        		this.ds_evaluation.set_updatecontrol(false);
        		this.ds_evaluation.set_enableevent(false);

        		var nRow = this.ds_evaluation.addRow();

        		//AS-IS : SetSaveRequest
        		this.ds_evaluation.setColumn(nRow, "ABNOCRNO", this.fv_parentData["ABNOCRNO"]);
        		this.ds_evaluation.setColumn(nRow, "ABNOCRTYPE", this.fv_parentData["ABNOCRTYPE"]);
        		this.ds_evaluation.setColumn(nRow, "SEQUENCE", this.fv_sequence);
        		this.ds_evaluation.setColumn(nRow, "DEGREE", this.fv_lastDegree);

        		this.ds_evaluation.setColumn(nRow, "PLANTID", this.gf_getSiteType());
        		this.ds_evaluation.setColumn(nRow, "ENTERPRISEID", this.gf_getEnterpriseId());
        		this.ds_evaluation.setColumn(nRow, "CHECKDATE", this.qamfn_todayTime());
        		this.ds_evaluation.setColumn(nRow, "VALIDSTATE", "Valid");

        		this.tab_carProcess.tab_evaluation.form.div_fieldEval.form.div_checkdate.form.calStart.set_value(this.gfn_todayTime());

        		this.ds_evaluation.set_enableevent(true);
        		this.ds_evaluation.set_updatecontrol(true);
        	}
        };

        /*
         * 기능 : CAR 유효성평가 Search (AS-IS : ValidationSearch)
         */
        this.fn_searchValidation = function ()
        {
        	this.fn_filter(this.ds_evaluation);

        	//이미 조회해온 sequence의 데이터가 있다면 조회하지 않음
        	if(this.ds_evaluation.rowcount > 0)  return;

        	this.ds_temp.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ABNOCRNO", this.fv_parentData["ABNOCRNO"]);
        	this.ds_search.setColumn(0, "ABNOCRTYPE", this.fv_parentData["ABNOCRTYPE"]);

        	this.ds_search.setColumn(0, "SEQUENCE", this.fv_sequence);
        	this.ds_search.setColumn(0, "RESOURCEID", this.fv_parentData["ABNOCRNO"] + this.tab_carProcess.tab_evaluation.form.cbo_carsequence.value + this.fv_lastDegree + "E" );

        	var sSvcID 			= "selectCarValidation";
        	var sController 	= "/qam01200/selectCarValidation.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_temp=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : CAR 유효성평가 원본파일 조회
         */
        this.fn_searchValidationtAttach = function()
        {
        	var divFile = this.tab_carProcess.tab_evaluation.form.div_file;
        	divFile.form.jobSysCd 		= "QAM";
        	divFile.form.atchTyCd 		= "FILE";
        	divFile.form.tableName 		= "QAM_ESTIMATEVALIDITY";
        	divFile.form.subDir  		= "estimatevalidity";
        	divFile.form.atchSrcKey  	= this.fv_parentData["ABNOCRNO"] + this.tab_carProcess.tab_evaluation.form.cbo_carsequence.value + this.fv_lastDegree + "E";
        	divFile.form.fn_search();
        };

        /*
         * 기능 : CAR 유효성평가 임시저장 (AS-IS : SetSaveValidation)
         */
        this.fn_tempSaveValidation = function(obj,e)
        {
        	this.ds_evaluation.setColumn(this.ds_evaluation.rowposition, "ISTEMPSAVED", "true");
        	this.fv_isTempSaved[3] = true;
        };

        /*
         * 기능 : CAR 유효성평가 초기화
         */
        this.fn_resetValidation = function(obj,e)
        {
        	this.ds_evaluation.reset();
        };

        /**************************************************************************
         * 7-5. 콤보 검색 및 초기화 설정 함수
         **************************************************************************/
        /*
         * 기능 : 원인 품목 콤보박스를 초기화 하는 함수
         */
        this.fn_setReasonIdVersionCombo = function ()
        {
        	var sArgs 		= "";
        	sArgs 			+= this.gfn_setParam("VERSION", "10002");
        	sArgs 			+= this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs 			+= this.gfn_setParam("LOTID", this.fv_parentData["LOTID"]);

        	var oColumn 	= {code: "SPLITCONSUMABLEDEFIDVERSION", name: "CONSUMABLEDEFNAME"};

        	var objGrdInfo = {};
        	objGrdInfo.count = 5;
        	objGrdInfo.retColumn = "SPLITCONSUMABLEDEFIDVERSION"; //or objGrdInfo.retColIdx = 0;
        	objGrdInfo.sCallBackFunc = this.fn_callBackComboGrid;
        	objGrdInfo.size = "90|70|200|80|0";
        	objGrdInfo.textAlign = "left|center|left|left|left";
        	objGrdInfo.tooltiptext = "CONSUMABLEDEFID|CONSUMABLEDEFVERSION|CONSUMABLEDEFNAME|MATERIALTYPE|SPLITCONSUMABLEDEFIDVERSION";
        	objGrdInfo.text = "자재ID|자재버전|자재명|자재유형|SPLITCONSUMABLEDEFIDVERSION";
        	objGrdInfo.bindColumn = "CONSUMABLEDEFID|CONSUMABLEDEFVERSION|CONSUMABLEDEFNAME|MATERIALTYPE|SPLITCONSUMABLEDEFIDVERSION";

        	this.qamfn_setCustomQueryCmb(this.tab_carProcess.tab_request.form.div_basInfo.form.cbo_reasonIdVersion // Object
        								, "selectGetReasonConsumableList,SEL,Y,A" 	// OPTION
        								, sArgs   									// 추가 파라미터
        								, "fn_callBackCombo" 							//callback
        								, true 										//Async
        								, oColumn
        								, objGrdInfo);

        };

        /*
         * 기능 : 원인 LOT 콤보박스를 초기화 하는 함수
         */
        this.fn_setReasonLotIdCombo = function (val)
        {
        	if(this.nfn_isNull(val)) return;

        	this.fv_reasonConsumable.defId = val.split("|")[0];
        	this.fv_reasonConsumable.defVersion = val.split("|")[1];

        	if(!this.nfn_isNull(this.fv_reasonConsumable.defId) && !this.nfn_isNull(this.fv_reasonConsumable.defVersion)) {

        		var sArgs		= "";
        		sArgs 			+= this.gfn_setParam("VERSION", "10002");
        		sArgs 			+= this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        		sArgs 			+= this.gfn_setParam("LOTID", this.fv_parentData["LOTID"]);
        		sArgs 			+= this.gfn_setParam("REASONCONSUMABLEDEFID", this.fv_reasonConsumable.defId);
        		sArgs 			+= this.gfn_setParam("REASONCONSUMABLEDEFVERSION", this.fv_reasonConsumable.defVersion);

        		var oColumn 	= {code: "CONSUMABLELOTID", name: "CONSUMABLELOTID"};

        		this.qamfn_setCustomQueryCmb(this.tab_carProcess.tab_request.form.div_basInfo.form.cbo_reasonconsumablelotid  // Object
        								, "selectGetDefectReasonConsumableLot,SEL,Y,A" 	// OPTION
        								, sArgs   									// 추가 파라미터
        								, "fn_callBackCombo" 							//callback
        								, true 										//Async
        								, oColumn);
        	}
        };

        /*
         * 기능 : 원인 공정 콤보박스를 초기화 하는 함수
         */
        this.fn_setReasonSegmentIdCombo = function (val)
        {
        	if(this.nfn_isNull(val)) return;
        	this.fv_reasonConsumable.lotId = val;

        	if(!this.nfn_isNull(this.fv_reasonConsumable.defId) && !this.nfn_isNull(this.fv_reasonConsumable.defVersion) && !this.nfn_isNull(this.fv_reasonConsumable.lotId)) {
        		var sArgs		= "";
        		sArgs 			+= this.gfn_setParam("VERSION", "10002");
        		sArgs 			+= this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        		sArgs 			+= this.gfn_setParam("LOTID", this.fv_parentData["LOTID"]);
        		sArgs 			+= this.gfn_setParam("REASONCONSUMABLEDEFID", this.fv_reasonConsumable.defId);
        		sArgs 			+= this.gfn_setParam("REASONCONSUMABLEDEFVERSION", this.fv_reasonConsumable.defVersion);
        		sArgs 			+= this.gfn_setParam("REASONCONSUMABLELOTID", this.fv_reasonConsumable.lotId);

        		var oColumn 	= {code: "PROCESSSEGMENTID", name: "PROCESSSEGMENTNAME"};

        		this.qamfn_setCustomQueryCmb(this.tab_carProcess.tab_request.form.div_basInfo.form.cbo_reasonprocesssegmentid  // Object
        								, "selectGetDefectReasonProcesssegment,SEL,Y,A" 	// OPTION
        								, sArgs   									// 추가 파라미터
        								, "fn_callBackCombo" 							//callback
        								, true 										//Async
        								, oColumn);
        	}
        };

        /*
         * 기능 : 콤보 변경 시 값 세팅
         */
        this.fn_setReason = function (comboType)
        {
        	// 초기 화면일 경우 부모창 값 세팅
        	if(this.fv_isInit) {
        		this.ds_request.set_enableevent(false);
        		//기존에 등록된 원인 항목들은 바인딩하는 함수
        // 		this.ds_request.setColumn(0, "REASONCONSUMABLEDEFID", this.fv_parentData["REASONCONSUMABLEDEFID"]  + "|" + this.fv_parentData["REASONCONSUMABLEDEFVERSION"]);
        // 		this.ds_request.setColumn(0, "REASONCONSUMABLELOTID", this.fv_parentData["REASONCONSUMABLELOTID"]);
        // 		this.ds_request.setColumn(0, "REASONSEGMENTID", this.fv_parentData["REASONSEGMENTID"]);
        		this.ds_request.set_enableevent(true);

        		this.fv_isInit = false;
        	} else {
        		this.ds_request.set_enableevent(false);
        		var rowPos = this.ds_request.rowposition;

        		if(comboType <= 1) {
        			this.ds_request.setColumn(rowPos, "REASONCONSUMABLELOTID", ""); //lot id
        		}
        		if(comboType <= 2) {
        			this.ds_request.setColumn(rowPos, "REASONSEGMENTID", ""); //공정
        		}
        		if(comboType <= 3) {
        			this.ds_request.setColumn(rowPos, "REASONAREANAME", ""); //작업
        			this.ds_request.setColumn(rowPos, "REASONAREAID", "");
        		}
        		this.ds_request.set_enableevent(true);
        	}
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.tab_carProcess_onchanged = function(obj,e)
        {
        	this.fn_changeTabIndex(e.postindex);
        };

        //마감여부 바뀔 때 수정 여부를 변수에 할당해준다
        this.tab_carProcess_tab_evaluation_div_dataEval_cbo_isclose_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "Y") {
        		this.fv_isClosedChanged = true;
        	}
        };

        //tabpage1 dataset 변경
        this.ds_request_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "SPLITCONSUMABLEDEFIDVERSION") { //원인품목
        		this.fn_setReasonLotIdCombo(e.newvalue);
        		this.fn_setReason(1);

        	} else if(e.columnid == "REASONCONSUMABLELOTID") { //lot id
        		this.fn_setReasonSegmentIdCombo(e.newvalue);
        		this.fn_setReason(2);

        	} else if(e.columnid == "REASONSEGMENTID") { //원인 공정
        		this.fn_setReason(3);

        		var nRow = this.ds_selectGetDefectReasonProcesssegment.findRow("PROCESSSEGMENTID", e.newvalue);
        		var areaId = this.ds_selectGetDefectReasonProcesssegment.getColumn(nRow, "AREAID");
        		var areaName = this.ds_selectGetDefectReasonProcesssegment.getColumn(nRow, "AREANAME");
        		var rowPos = this.ds_request.rowposition;

        		this.ds_request.setColumn(rowPos, "REASONAREANAME", areaName);
        		this.ds_request.setColumn(rowPos, "REASONAREAID", areaId);

        	}
        	this.fv_isTempSaved[0] = false;
        };

        //tabpage2 dataset 변경
        this.ds_receipt_oncolumnchanged = function(obj,e)
        {
        	this.fv_isTempSaved[1] = false;
        };

        //tabpage3 dataset 변경
        this.ds_acceptHistory_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "ACTIONRESULT" || e.columnid == "REFUSEREASON") {
        		this.fv_grdCarAcceptHandleRow = e.row;
        	}
        	this.fv_isTempSaved[2] = false;
        };

        //tabpage4 dataset 변경
        this.ds_evaluation_oncolumnchanged = function(obj,e)
        {
        	var fromDate, toDate;
        	if(e.columnid == "INQUIRYFROM") {
        		fromDate =  e.newvalue;
        		toDate = obj.getColumn(e.row, "INQUIRYTO");
        	} else if(e.columnid == "INQUIRYTO") {
        		fromDate = obj.getColumn(e.row, "INQUIRYFROM");
        		toDate = e.newvalue
        	}

        	var callController;
        	//공정검사 NCR 또는 수입검사 NCR
        	if(this.programId == "QAM00900" || this.programId == "QAM00700") {
        		callController = "/qam00900/selectNGCountAbnormal.do";
        	}
        	else {
        		callController = "/qam01200/selectConcurrenceCount.do";
        	}

        	if(!this.nfn_isNull(fromDate) && !this.nfn_isNull(toDate)) {
        		this.fn_searchConcurrenceCount(fromDate, toDate, this.fv_parentData["ABNOCRTYPE"], callController);
        	}

        	this.fv_isTempSaved[3] = false;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_carProcess.addEventHandler("onchanged",this.tab_carProcess_onchanged,this);
            this.tab_carProcess.tab_request.form.div_basInfo.form.btn_manager.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.tab_carProcess.tab_request.form.div_basInfo.form.edt_manager.addEventHandler("onkeydown",this.qamfn_callOpenPopEditEvent,this);
            this.tab_carProcess.tab_request.form.div_basInfo.form.edt_reasonarea.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_carProcess.tab_request.form.div_basInfo.form.cbo_carsequence.addEventHandler("onitemchanged",this.fn_changeSequence,this);
            this.tab_carProcess.tab_request.form.div_basInfo.form.cbo_carsequence.addEventHandler("canitemchange",this.fn_beforeChangeSequence,this);
            this.tab_carProcess.tab_request.form.div_basInfo.form.btn_tempSave.addEventHandler("onclick",this.fn_tempSaveRequest,this);
            this.tab_carProcess.tab_request.form.div_basInfo.form.btn_reset.addEventHandler("onclick",this.fn_resetRequest,this);
            this.tab_carProcess.tab_request.form.div_basInfo.form.btn_download.addEventHandler("onclick",this.fn_downloadRequest,this);
            this.tab_carProcess.tab_receipt.form.div_basInfo.form.btn_receiptor.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.tab_carProcess.tab_receipt.form.div_basInfo.form.edt_receiptor.addEventHandler("onkeydown",this.qamfn_callOpenPopEditEvent,this);
            this.tab_carProcess.tab_receipt.form.div_basInfo.form.cbo_carsequence.addEventHandler("onitemchanged",this.fn_changeSequence,this);
            this.tab_carProcess.tab_receipt.form.div_basInfo.form.cbo_carsequence.addEventHandler("canitemchange",this.fn_beforeChangeSequence,this);
            this.tab_carProcess.tab_receipt.form.div_basInfo.form.btn_tempSave.addEventHandler("onclick",this.fn_tempSaveReceipt,this);
            this.tab_carProcess.tab_receipt.form.div_basInfo.form.btn_reset.addEventHandler("onclick",this.fn_resetReceipt,this);
            this.tab_carProcess.tab_approval.form.cbo_carsequence.addEventHandler("onitemchanged",this.fn_changeSequence,this);
            this.tab_carProcess.tab_approval.form.cbo_carsequence.addEventHandler("canitemchange",this.fn_beforeChangeSequence,this);
            this.tab_carProcess.tab_approval.form.grd_validationHistory.addEventHandler("oncellclick",this.grd_qamMeasureValue_oncellclick,this);
            this.tab_carProcess.tab_approval.form.btn_reset.addEventHandler("onclick",this.fn_resetApproval,this);
            this.tab_carProcess.tab_approval.form.btn_tempSave.addEventHandler("onclick",this.fn_tempSaveApproval,this);
            this.tab_carProcess.tab_evaluation.form.cbo_carsequence.addEventHandler("onitemchanged",this.fn_changeSequence,this);
            this.tab_carProcess.tab_evaluation.form.cbo_carsequence.addEventHandler("canitemchange",this.fn_beforeChangeSequence,this);
            this.tab_carProcess.tab_evaluation.form.div_fieldEval.form.edt_checker.addEventHandler("onkeydown",this.qamfn_callOpenPopEditEvent,this);
            this.tab_carProcess.tab_evaluation.form.div_fieldEval.form.btn_checker.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.tab_carProcess.tab_evaluation.form.div_fieldEval.form.cbo_checkresult.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_carProcess.tab_evaluation.form.div_dataEval.form.edt_sameoccurrence.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_carProcess.tab_evaluation.form.div_dataEval.form.cbo_isclose.addEventHandler("onitemchanged",this.tab_carProcess_tab_evaluation_div_dataEval_cbo_isclose_onitemchanged,this);
            this.tab_carProcess.tab_evaluation.form.btn_tempSave.addEventHandler("onclick",this.fn_tempSaveValidation,this);
            this.tab_carProcess.tab_evaluation.form.btn_reset.addEventHandler("onclick",this.fn_resetValidation,this);
            this.ds_request.addEventHandler("oncolumnchanged",this.ds_request_oncolumnchanged,this);
            this.ds_receipt.addEventHandler("oncolumnchanged",this.ds_receipt_oncolumnchanged,this);
            this.ds_acceptHistory.addEventHandler("oncolumnchanged",this.ds_acceptHistory_oncolumnchanged,this);
            this.ds_evaluation.addEventHandler("oncolumnchanged",this.ds_evaluation_oncolumnchanged,this);
        };
        this.loadIncludeScript("QAM01200D2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
