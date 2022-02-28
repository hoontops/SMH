(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01200P1");
            this.set_titletext("품질규격 NCR 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"DAITEMID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamIssue", this);
            obj._setContents("<ColumnInfo><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREDATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURER\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECRANGE\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"AVERAGEVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"MAXVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"MINVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"DEVIATION\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURER\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"DAITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ARRAYPOINTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISMODIFY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"CARREQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CAREXPECTEDRECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREVALUE_1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_4\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_5\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_6\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_7\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_8\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_9\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_10\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_11\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_12\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_13\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_14\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_15\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_16\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_17\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_18\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_19\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_20\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_21\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_22\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_23\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_24\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_25\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_26\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_27\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_28\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_29\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_30\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_31\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_32\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_33\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_34\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_35\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_36\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_37\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_38\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_39\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_40\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_41\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_42\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_43\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_44\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_45\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_46\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_47\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_48\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_49\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_50\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_51\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_52\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_53\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_54\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_55\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_56\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_57\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_58\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_59\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MEASUREVALUE_60\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SPECSCOPE\" type=\"STRING\" size=\"256\"/><Column id=\"AFFECTISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","20","430","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("품질규격 NCR");
            obj.set_cssclass("sta_WF_title");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("QUALITYSPECIFICATIONISSUE");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitleBasInfo","20","sta_title:5","540","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("이상발생 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("ABNORMALINFO");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"70","28","btn_close:5","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptext("SAVE");
            this.addChild(obj.name, obj);

            obj = new Div("div_basInfo","20","sta_subTitleBasInfo:0",null,"156","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_measuredatetime","0","0","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("0");
            obj.set_text("발생일시");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("OCCURDATE");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_measuredatetime","sta_measuredatetime:5","5","22.2%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("1");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_processsegmentname","33.33%","0","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("2");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PROCESSCHANGETYPE");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_processsegmentname","sta_processsegmentname:5","5","22.2%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("3");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_areaname","66.66%","0","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("4");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("AREANAME");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_areaname","sta_areaname:5","5","22.4%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("5");
            obj.set_font("normal 700 10pt/normal \"Arial\"");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_equipmentname","0","31","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("6");
            obj.set_text("설비");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("EQUIPMENT");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_equipmentname","sta_equipmentname:5","36","22.2%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("7");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_workstarttime","33.33%","31","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("8");
            obj.set_text("작업시작");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("WORKSTARTLEADTIME");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_workstarttime","sta_workstarttime:5","36","22.2%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("9");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_workendtime","66.66%","31","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("10");
            obj.set_text("작업종료");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("WORKENDLEADTIME");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_workendtime","sta_workendtime:5","36","22.4%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("11");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_productdefname","0","62","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("12");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTIONDEFINITION");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_productdefname","sta_productdefname:5","67","22.2%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("13");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_lotid","33.33%","62","10%","20%",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("14");
            obj.set_text("Lot No");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_lotid","sta_lotid:5","67","22.2%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("15");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_lottype","66.66%","62","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("16");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("LOTTYPE");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_lottype","sta_lottype:5","67","22.4%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("17");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_inspitemname","0","93","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("18");
            obj.set_text("검사 항목");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("INSPECTIONITEM");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_inspitemname","sta_inspitemname:5","98","22.2%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("19");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_specscope","33.33%","93","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("21");
            obj.set_text("규격범위(SL)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("SPECSCOPE");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_specscope","sta_specscope:5","98","22.2%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("20");
            obj.set_text("IFV");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_averagevalue","66.66%","93","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("22");
            obj.set_text("평균");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("AVERAGE");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new MaskEdit("edt_averagevalue","sta_averagevalue:5","98","22.4%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("23");
            obj.set_text("IFV");
            obj.set_format("#0.000");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_maxvalue","0","124","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("24");
            obj.set_text("최대값");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("MAXVALUE");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new MaskEdit("edt_maxvalue","sta_maxvalue:5","129","22.2%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("25");
            obj.set_text("IFV");
            obj.set_format("#0.000");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_minvalue","33.33%","124","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("27");
            obj.set_text("최소값");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("MINVALUE");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new MaskEdit("edt_minvalue","sta_minvalue:5","129","22.2%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("26");
            obj.set_text("IFV");
            obj.set_format("#0.000");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_deviation","66.66%","124","10%","31",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("28");
            obj.set_text("편차");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("DEVIATION");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new MaskEdit("edt_deviation","sta_deviation:5","129","22.4%","20",null,null,null,null,null,null,this.div_basInfo.form);
            obj.set_taborder("29");
            obj.set_text("IFV");
            obj.set_format("#0.000");
            this.div_basInfo.addChild(obj.name, obj);

            obj = new Button("btn_x_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Div("div_ncrProcess","20","div_basInfo:10",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_async("false");
            obj.set_text("QAM01200D1 호출");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,900,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_basInfo.form.edt_measuredatetime","value","ds_qamIssue","MEASUREDATETIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_basInfo.form.edt_processsegmentname","value","ds_qamIssue","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_basInfo.form.edt_areaname","value","ds_qamIssue","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_basInfo.form.edt_equipmentname","value","ds_qamIssue","EQUIPMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_basInfo.form.edt_workstarttime","value","ds_qamIssue","WORKSTARTTIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_basInfo.form.edt_workendtime","value","ds_qamIssue","WORKENDTIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_basInfo.form.edt_productdefname","value","ds_qamIssue","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_basInfo.form.edt_lotid","value","ds_qamIssue","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_basInfo.form.edt_lottype","value","ds_qamIssue","LOTTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_basInfo.form.edt_inspitemname","value","ds_qamIssue","INSPITEMNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_basInfo.form.edt_specscope","value","ds_qamIssue","SPECSCOPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_basInfo.form.edt_averagevalue","value","ds_qamIssue","AVERAGEVALUE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_basInfo.form.edt_maxvalue","value","ds_qamIssue","MAXVALUE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_basInfo.form.edt_minvalue","value","ds_qamIssue","MINVALUE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_basInfo.form.edt_deviation","value","ds_qamIssue","DEVIATION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM01200P1.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM01200P1.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM01200P1.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: CAR 요청팝업
         * 파일명 		: QAM01200P1.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.04.16
         *
         * 설  명		: 품질관리 > 공정품질 > 품질규격 NCR > CAR 요청팝업
         * 				  품질 규격 측정값중 NG가 발생한 항목들에 대해 CAR 요청을 할 수 있다.
         *				  NCR 발행은 QAM01200D1, CAR 요청은 QAM01200D2 DIV에 있음.
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.16	권혜영   	최초작성
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

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	trace("1200P1 init MENU_AUTH: " + this.MENU_AUTH);
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
         * 기능 : 추가
         */
        this.fn_add = function(obj,e)
        {

        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {

        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	//하위 NCR 진행현황 DIV form의 save 함수 호출
        	this.div_ncrProcess.form.fn_save();
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
        	this.ds_qamIssue.clearData();
        	this.ds_qamIssue.addRow();

        	//rowPos
        	this.ds_qamIssue.copyRow(0, this.opener.ds_qamIssue, this.parent.rowPos);
        	this.qamfn_setCompControl(this.div_basInfo.form.components, "disable");

        	//div 동적으로 폼 연결 시 호출 parameter : dataset , 부모창 programID
        	this.div_ncrProcess.set_url("qam::QAM01200D1.xfdl");
            this.div_ncrProcess.form.fn_formInit(this.ds_qamIssue, "QAM01200", this.MENU_AUTH);

        	//20210818 메뉴권한정보에 등록,수정,삭제 권한이 없을 경우 버튼 비활성화
        	this.qamfn_ncrMenuAuth(this.INS_AUTH_YN, this.UPD_AUTH_YN, this.DEL_AUTH_YN);
        };

        this.fn_close = function(obj,e)
        {
        	this.close();
        };

        /*
         * 기능 : div 영역에서 save 후에 호출될 함수. 현재 팝업 닫고, opener 새로 검색 (만약에 opener search 안할 경우에는 this.fn_close 호출)
         */
        this.fn_closeAndParentSearch = function()
        {
        	this.opener.fn_search();
        	this.close();
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_close.addEventHandler("onclick",this.fn_close,this);
            this.btnSave.addEventHandler("onclick",this.fn_save,this);
            this.div_basInfo.form.edt_measuredatetime.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_processsegmentname.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_areaname.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_equipmentname.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_workstarttime.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_workendtime.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_productdefname.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_lotid.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_lottype.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_inspitemname.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_specscope.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_averagevalue.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_maxvalue.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_minvalue.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.div_basInfo.form.edt_deviation.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.btn_x_close.addEventHandler("onclick",this.fn_close,this);
        };
        this.loadIncludeScript("QAM01200P1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
