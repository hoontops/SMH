(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01300P2");
            this.set_titletext("출하검사 이력 조회 팝업");
            this.set_tooltiptext("SHIPMENTINSPHISTORYLIST");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qamLotInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamHistory", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"ALLQTYPNL\" type=\"STRING\" size=\"256\"/><Column id=\"ALLQTYPCS\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTYPNL\" type=\"STRING\" size=\"256\"/><Column id=\"GOODQTYPCS\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTYPNL\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOUTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamHistoryDetail", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamDefectDisposal", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamLotMessageShipmentInsp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNGROUPHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"INDEX\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_TY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamProcessSegment", this);
            obj._setContents("<ColumnInfo><Column id=\"CREATORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamCreator", this);
            obj._setContents("<ColumnInfo><Column id=\"CREATORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamMessage", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamImage", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ATCH_FILE_GUID\" type=\"STRING\" size=\"256\"/><Column id=\"MEASURVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"DAPOINTID\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_SRC_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"ATCH_TY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","82","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"100","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","97","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"700","10","0","48",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_no");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Button("btn_x_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_basInfo","20","20",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_basInfo);
            obj.set_text("출하 검사 이력");
            obj.set_tooltiptext("SHIPMENTINSPHISTORY");
            this.tab_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_shipmentinspHistory","0","0","250","34",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("출하 검사 이력");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SHIPMENTINSPHISTORY");
            this.tab_basInfo.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_basInfo","0","34",null,"156","0",null,null,null,null,null,this.tab_basInfo.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            obj.set_enable("false");
            this.tab_basInfo.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_lotid","0","0","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("0");
            obj.set_text("LotNo.");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("LOTID");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_lotid","sta_lotid:5","5","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("1");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_prevprocesssegmentname","20%","0","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("2");
            obj.set_text("이전공정명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PREVPROCESSSEGMENTNAME");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_prevprocesssegmentname","sta_prevprocesssegmentname:5","5","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("3");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_processsegmentname","40%","0","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("4");
            obj.set_text("공정명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PROCESSSEGMENTNAME");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_processsegmentname","sta_processsegmentname:5","5","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("5");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_nextprocesssegmentname","60%","0","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("6");
            obj.set_text("후공정");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("NEXTPROCESSSEGMENTNAME");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_nextprocesssegmentname","sta_nextprocesssegmentname:5","5","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("7");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_plantid","80%","0","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("8");
            obj.set_text("Site ID");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PLANTID");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_plantid","sta_plantid:5","5","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("9");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_usersequence","0","31","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("10");
            obj.set_text("공정수순");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("USERSEQUENCE");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_usersequence","sta_usersequence:5","36","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("11");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_productdefid","20%","31","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("12");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_productdefid","sta_productdefid:5","36","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("13");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_productdefname","40%","31","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("14");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_productdefname","sta_productdefname:5","36","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("15");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_inputdate","60%","31","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("16");
            obj.set_text("투입일자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("INPUTDATE");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_inputdate","sta_inputdate:5","36","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("17");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_productionorderid","80%","31","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("18");
            obj.set_text("S/O번호");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTIONORDERID");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_productionorderid","sta_productionorderid:5","36","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("19");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_duedate","0","62","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("20");
            obj.set_text("납기일");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("DUEDATE");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_duedate","sta_duedate:5","67","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("21");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_productdeftype","20%","62","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("22");
            obj.set_text("품목유형구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTDEFTYPE");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_productdeftype","sta_productdeftype:5","67","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("23");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_productiontype","40%","62","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("24");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_productiontype","sta_productiontype:5","67","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("25");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_islocking","60%","62","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("26");
            obj.set_text("Locking 여부");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("ISLOCKING");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_islocking","sta_islocking:5","67","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("27");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_areaname","80%","62","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("28");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("AREANAME");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_areaname","sta_areaname:5","67","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("29");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_week","0","93","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("30");
            obj.set_text("주차");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("WEEK");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_week","sta_week:5","98","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("31");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_areaid","20%","93","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("32");
            obj.set_text("작업장 ID");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("AREAID");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_areaid","sta_areaid:5","98","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("33");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_customername","40%","93","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("34");
            obj.set_text("고객명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("CUSTOMERNAME");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_customername","sta_customername:5","98","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("35");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_unit","60%","93","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("36");
            obj.set_text("단위");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("UNIT");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_unit","sta_unit:5","98","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("37");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_pnlqty","80%","93","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("38");
            obj.set_text("수량(PNL)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PNLQTY");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_pnlqty","sta_pnlqty:5","98","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("39");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_pcsqty","0","124","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("40");
            obj.set_text("수량(PCS)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PCSQTY");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_pcsqty","sta_pcsqty:5","129","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("41");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_mm","20%","124","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("42");
            obj.set_text("MM");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("MM");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_mm","sta_mm:5","129","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("43");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_pcspnl","40%","124","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("44");
            obj.set_text("PCS/PNL");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PCSPNL");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_pcspnl","sta_pcspnl:5","129","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("45");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_isrclot","60%","124","8%","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("46");
            obj.set_text("ISRCLOT");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("ISRCLOT");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Edit("edt_isrclot","sta_isrclot:5","129","11%","20",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form.div_basInfo.form);
            obj.set_taborder("47");
            obj.set_text("IFV");
            this.tab_basInfo.Tabpage1.form.div_basInfo.addChild(obj.name, obj);

            obj = new Grid("grd_history","0","div_basInfo:5","40%","109",null,null,null,null,null,null,this.tab_basInfo.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamHistory");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"분할 Lot No.\" tooltiptext=\"CHILDLOTID\"/><Cell col=\"2\" rowspan=\"2\" text=\"차수\" tooltiptext=\"DEGREE\"/><Cell col=\"3\" colspan=\"2\" text=\"전체\" cssclass=\"cell_headMaster\" tooltiptext=\"ALL\"/><Cell col=\"5\" colspan=\"2\" text=\"양품 수량\" cssclass=\"cell_headMaster\" tooltiptext=\"GOODQTY\"/><Cell col=\"7\" colspan=\"3\" text=\"불량수량\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECTCOUNT\"/><Cell col=\"10\" text=\"검사수량\" cssclass=\"cell_headMaster\" tooltiptext=\"INSPECTIONQTY\"/><Cell col=\"11\" rowspan=\"2\" text=\"검사자명\" tooltiptext=\"INSPECTORNAME\"/><Cell col=\"12\" rowspan=\"2\" text=\"판정결과\" tooltiptext=\"INSPECTIONRESULT\"/><Cell row=\"1\" col=\"3\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"4\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"5\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"6\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"7\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell row=\"1\" col=\"8\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"9\" text=\"불량률\" tooltiptext=\"DEFECTRATE\"/><Cell row=\"1\" col=\"10\" text=\"PCS\" tooltiptext=\"PCS\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:RESOURCEID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DEGREE\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:ALLQTYPNL\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"4\" text=\"bind:ALLQTYPCS\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"5\" text=\"bind:GOODQTYPNL\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"6\" text=\"bind:GOODQTYPCS\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"7\" text=\"bind:DEFECTQTYPNL\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"8\" text=\"bind:SPECOUTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"9\" text=\"bind:DEFECTRATE\" maskeditformat=\"#,##0.##\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:INSPECTIONQTY\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:INSPECTORNAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:INSPECTIONRESULT\" textAlign=\"left\"/></Band></Format></Formats>");
            this.tab_basInfo.Tabpage1.addChild(obj.name, obj);

            obj = new Tab("tab_detail","0","316","40.00%",null,null,"0",null,null,null,null,this.tab_basInfo.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.tab_basInfo.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_basInfo.Tabpage1.form.tab_detail);
            obj.set_text("불량 검사");
            obj.set_tooltiptext("DEFECTINSPECTION");
            this.tab_basInfo.Tabpage1.form.tab_detail.addChild(obj.name, obj);

            obj = new Grid("grd_historyDetail","0","0",null,null,"0","0",null,null,null,null,this.tab_basInfo.Tabpage1.form.tab_detail.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamHistoryDetail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"76\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"차수\" tooltiptext=\"DEGREE\"/><Cell col=\"2\" text=\"불량코드\" tooltiptext=\"DEFECTCODE\"/><Cell col=\"3\" text=\"불량코드 명\" tooltiptext=\"DEFECTCODENAME\"/><Cell col=\"4\" text=\"불량 수량\" tooltiptext=\"DEFECTQTY\"/><Cell col=\"5\" text=\"불량률\" tooltiptext=\"DEFECTRATE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DEGREE\"/><Cell col=\"2\" text=\"bind:JOINCODE\"/><Cell col=\"3\" text=\"bind:JOINNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:DEFECTQTY\" textAlign=\"right\"/><Cell col=\"5\" text=\"expr:DEFECTRATE + &apos;%&apos;\" textAlign=\"left\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\" tooltiptext=\"SUM\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" expr=\"dataset.getSum(&quot;DEFECTQTY&quot;)\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;DEFECTRATE&quot;) + &apos;%&apos;\" textAlign=\"left\"/></Band></Format></Formats>");
            this.tab_basInfo.Tabpage1.form.tab_detail.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_basInfo.Tabpage1.form.tab_detail);
            obj.set_text("불량(폐기) 처리");
            obj.set_tooltiptext("DEFECTDISPOSAL");
            this.tab_basInfo.Tabpage1.form.tab_detail.addChild(obj.name, obj);

            obj = new Grid("grd_defectDisposal","0","0",null,null,"0","0",null,null,null,null,this.tab_basInfo.Tabpage1.form.tab_detail.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamDefectDisposal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"76\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"차수\" tooltiptext=\"DEGREE\"/><Cell col=\"2\" text=\"불량코드\" tooltiptext=\"DEFECTCODE\"/><Cell col=\"3\" text=\"불량코드 명\" tooltiptext=\"DEFECTCODENAME\"/><Cell col=\"4\" text=\"불량 수량\" tooltiptext=\"DEFECTQTY\"/><Cell col=\"5\" text=\"불량률\" tooltiptext=\"DEFECTRATE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:DEGREE\"/><Cell col=\"2\" text=\"bind:JOINCODE\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:JOINNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:DEFECTQTY\" textAlign=\"right\"/><Cell col=\"5\" text=\"expr:DEFECTRATE + &apos;%&apos;\" textAlign=\"left\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\" tooltiptext=\"SUM\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" expr=\"dataset.getSum(&quot;DEFECTQTY&quot;)\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;DEFECTRATE&quot;) + &apos;%&apos;\" textAlign=\"left\"/></Band></Format></Formats>");
            this.tab_basInfo.Tabpage1.form.tab_detail.Tabpage2.addChild(obj.name, obj);

            obj = new ImageViewer("img_photo_2","81%","div_basInfo:5","19%",null,null,"0",null,null,null,null,this.tab_basInfo.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("img_photo");
            this.tab_basInfo.Tabpage1.addChild(obj.name, obj);

            obj = new ImageViewer("img_photo_0","41%","div_basInfo:5","19%",null,null,"0",null,null,null,null,this.tab_basInfo.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("img_photo");
            this.tab_basInfo.Tabpage1.addChild(obj.name, obj);

            obj = new ImageViewer("img_photo_1","61%","div_basInfo:5","19%",null,null,"0",null,null,null,null,this.tab_basInfo.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("img_photo");
            this.tab_basInfo.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_basInfo);
            obj.set_text("전달사항");
            obj.set_tooltiptext("MESSAGE");
            this.tab_basInfo.addChild(obj.name, obj);

            obj = new Grid("grd_processSegmentList","0","34","200",null,null,"0",null,null,null,null,this.tab_basInfo.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamProcessSegment");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"198\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/></Band><Band id=\"body\"><Cell text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.tab_basInfo.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_message","0","0","250","34",null,null,null,null,null,null,this.tab_basInfo.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("전달사항");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MESSAGE");
            this.tab_basInfo.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_creatorList","210","34","200",null,null,"0",null,null,null,null,this.tab_basInfo.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamCreator");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"198\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"생성자명\" tooltiptext=\"CREATORNAME\"/></Band><Band id=\"body\"><Cell text=\"bind:CREATORNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.tab_basInfo.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_message","420","34",null,"32","0",null,null,null,null,null,this.tab_basInfo.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.tab_basInfo.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_title","0","0","120","31",null,null,null,null,null,null,this.tab_basInfo.Tabpage2.form.div_message.form);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("TITLE");
            this.tab_basInfo.Tabpage2.form.div_message.addChild(obj.name, obj);

            obj = new Edit("edt_title","sta_title:5","5",null,"20","5",null,null,null,null,null,this.tab_basInfo.Tabpage2.form.div_message.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            this.tab_basInfo.Tabpage2.form.div_message.addChild(obj.name, obj);

            obj = new TextArea("txa_message","420","div_message:5",null,null,"0","0",null,null,null,null,this.tab_basInfo.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.tab_basInfo.Tabpage2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_lotid","value","ds_qamLotInfo","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_prevprocesssegmentname","value","ds_qamLotInfo","PREVPROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_processsegmentname","value","ds_qamLotInfo","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_nextprocesssegmentname","value","ds_qamLotInfo","NEXTPROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_plantid","value","ds_qamLotInfo","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_usersequence","value","ds_qamLotInfo","USERSEQUENCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_productdefid","value","ds_qamLotInfo","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_productdefname","value","ds_qamLotInfo","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_inputdate","value","ds_qamLotInfo","INPUTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_productionorderid","value","ds_qamLotInfo","PRODUCTIONORDERID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_duedate","value","ds_qamLotInfo","DUEDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_productdeftype","value","ds_qamLotInfo","PRODUCTDEFTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_productiontype","value","ds_qamLotInfo","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_islocking","value","ds_qamLotInfo","ISLOCKING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_areaname","value","ds_qamLotInfo","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_week","value","ds_qamLotInfo","WEEK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_areaid","value","ds_qamLotInfo","AREAID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_customername","value","ds_qamLotInfo","CUSTOMERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_unit","value","ds_qamLotInfo","UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_pnlqty","value","ds_qamLotInfo","PNLQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_pcsqty","value","ds_qamLotInfo","PCSQTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_mm","value","ds_qamLotInfo","MM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_pcspnl","value","ds_qamLotInfo","PCSPNL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","tab_basInfo.Tabpage1.form.div_basInfo.form.edt_isrclot","value","ds_qamLotInfo","ISRCLOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","tab_basInfo.Tabpage2.form.div_message.form.edt_title","value","ds_qamMessage","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","tab_basInfo.Tabpage2.form.txa_message","value","ds_qamMessage","MESSAGE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM01300P2.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM01300P2.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM01300P2.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: NCR 발행
         * 파일명 		: QAM01300P2.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.05.10
         *
         * 설  명		: 품질관리 > 수입검사 > 출하검사이력조회 > 출하검사 이력 조회 팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.10	권혜영   	최초작성
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
         this.fv_objDs = this.opener.ds_qamShipmentInspHistory;
         this.fv_nRowPos = this.opener.ds_qamShipmentInspHistory.rowposition;
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
        		if (trId == "saveShipmentInspNCRIssue")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.opener.fn_search();
        			this.close();
        		} else if (trId == "selectLotInfoByProcessShipment")
                {
        			if(this.ds_qamLotInfo.rowcount <= 0) {
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				return;
        			}

        			// Lot상세 불량 정보
        			this.fn_searchLotInfoDetailExterior(0);
        			this.fn_searchLotInfoDetailExterior(1);

        			// 메세지가 등록된 공정 정보
        			this.fn_searchLotMessageShipmentInsp();

        		} else if (trId == "selectShipmentInspHistoryDetailExterior_idx0")
        		{
        			// 합계 구하기
        			this.fn_customSummaryCalculate();
        			//this.fn_searchImage(0);

        		} else if (trId == "selectShipmentInspHistoryDetailExterior_idx1")
        		{

        		} else if (trId == "selectLotMessageShipmentInsp")
        		{
        			if(this.ds_qamLotMessageShipmentInsp.rowcount > 0) {
        				this.fn_searchProcessSegmentList();
        			}
        		} else if (trId == "selectAtchFiles")
        		{
        			for(var i = 0; i < this.ds_qamImage.rowcount; i++) {
        				//이미지 칸이 3개이므로, 3개보다 크면 return.
        				if(i > 3) return;
        				var atchFileGuid = this.ds_qamImage.getColumn(0, "ATCH_FILE_GUID");
        				var upUrl = nexacro.getEnvironment().services["svcurl"].url +"/comm/downImage/" + atchFileGuid + ".do";
        				var imgId = "img_photo_"+i;
        				this.tab_basInfo.Tabpage1.form[imgId].set_image("URL('"+ upUrl + "')");
        				this.tab_basInfo.Tabpage1.form[imgId].set_stretch('fixaspectratio'); //fit or fixaspectratio
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
        	this.fn_searchLotInfo();
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
        	this.ds_search.setColumn(0, "AREAID", this.fv_objDs.getColumn(this.fv_nRowPos, "LOTAREAID"));
        	this.ds_search.setColumn(0, "LOTID", this.fv_objDs.getColumn(this.fv_nRowPos, "RESOURCEID"));

        	var sSvcID 			= "selectLotInfoByProcessShipment";
        	var sController 	= "/qam01300/selectLotInfoByProcessShipment.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamLotInfo=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : Lot상세 불량 정보
         */
        this.fn_searchLotInfoDetailExterior = function (idx)
        {
        	var sSvcID, sController, sInDatasets, sOutDatasets, sArgs;

        	if(idx == 0) { //불량검사
        		this.ds_qamHistoryDetail.clearData();
        		sSvcID 			= "selectShipmentInspHistoryDetailExterior_idx0";
        		sOutDatasets 	= "ds_qamHistoryDetail=output";

        	} else if(idx == 1) { //불량폐기
        		this.ds_qamDefectDisposal.clearData();
        		sSvcID 			= "selectShipmentInspHistoryDetailExterior_idx1";
        		sOutDatasets 	= "ds_qamDefectDisposal=output";

        	}
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());//ENTERPRISEID
        	this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());//PLANTID
        	this.ds_search.setColumn(0, "RESOURCEID", this.fv_objDs.getColumn(this.fv_nRowPos, "RESOURCEID"));
        	this.ds_search.setColumn(0, "TXNGROUPHISTKEY", this.fv_objDs.getColumn(this.fv_nRowPos, "TXNGROUPHISTKEY"));
        	this.ds_search.setColumn(0, "DEGREE", this.fv_objDs.getColumn(this.fv_nRowPos, "DEGREE"));
        	this.ds_search.setColumn(0, "INDEX", idx);

        	sController 	= "/qam01300/selectShipmentInspHistoryDetailExterior.do";
        	sInDatasets 	= "INPUT=ds_search";
        	sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
        * 기능 : 출하검사 LotId 로 LotMessage 공정 조회
        */
        this.fn_searchLotMessageShipmentInsp = function ()
        {
        	this.ds_qamLotMessageShipmentInsp.clearData();

        	//lotMesseage 로 조회해서 가져오는 dataset 모두 clear
        	this.ds_qamProcessSegment.clearData();
        	this.ds_qamCreator.clearData();
        	this.ds_qamMessage.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());//ENTERPRISEID
        	this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());//PLANTID
        	this.ds_search.setColumn(0, "LOTID", this.fv_objDs.getColumn(this.fv_nRowPos, "RESOURCEID"));
        	this.ds_search.setColumn(0, "PRODUCTDEFID", this.fv_objDs.getColumn(this.fv_nRowPos, "PRODUCTDEFID"));
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", this.fv_objDs.getColumn(this.fv_nRowPos, "PRODUCTDEFVERSION"));

        	var sSvcID 			= "selectLotMessageShipmentInsp";
        	var sController 	= "/qam01300/selectLotMessageShipmentInsp.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamLotMessageShipmentInsp=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
        * 기능 : LotList에 선택한 Lot의 메세지가 등록된 공정 조회함수
        */
        this.fn_searchProcessSegmentList = function ()
        {
        	var arrdist = new Array();
        	for(var i = 0; i < this.ds_qamLotMessageShipmentInsp.rowcount; i++) {
        		var processsegmentId = this.ds_qamLotMessageShipmentInsp.getColumn(i, "PROCESSSEGMENTID");
        		var processsegmentName = this.ds_qamLotMessageShipmentInsp.getColumn(i, "PROCESSSEGMENTNAME");

        		if(!this.nfn_isNull(processsegmentId) && !this.nfn_isNull(processsegmentName)) {
        			arrdist.push(processsegmentId);
        			arrdist.push(processsegmentName);
        		}
        	}

        	if(arrdist.length < 1)	return;
        	this.qamfn_setDistinct(this.ds_qamLotMessageShipmentInsp, this.ds_qamProcessSegment, arrdist);
        	this.ds_qamProcessSegment.set_rowposition(0);
        };

        /*
        * 기능 : grdProcessSegmentList에서 선택한 공정의 메세지를 등록한 등록자 조회함수
        */
        this.fn_searchCreatorList = function (objDs, row)
        {
        	this.ds_qamCreator.clearData();
        	if(row < 0) return;

        	var filterStr = "PROCESSSEGMENTID == '" + objDs.getColumn(row, "PROCESSSEGMENTID") + "' && "
        				+ "PROCESSSEGMENTVERSION == '" + objDs.getColumn(row, "PROCESSSEGMENTVERSION") + "' && "
        				+ "PRODUCTDEFID == '" + objDs.getColumn(row, "PRODUCTDEFID") + "' && "
        				+ "PRODUCTDEFVERSION == '" + objDs.getColumn(row, "PRODUCTDEFVERSION") + "' && "
        				+ "RESOURCEID == '" + objDs.getColumn(row, "RESOURCEID") + "'";


        	this.fn_filter(this.ds_qamLotMessageShipmentInsp, filterStr);
        	this.ds_qamCreator.copyData(this.ds_qamLotMessageShipmentInsp, true);
        	this.fn_filter(this.ds_qamLotMessageShipmentInsp, "");
        };

        /*
        * 기능 : grdCreatorList 에서 선택한 공정의 메세지를 등록한 등록자 조회함수
        */
        this.fn_searchMessageList = function (objDs, row)
        {
        	this.ds_qamMessage.clearData();
        	if(row < 0) return;

        	var filterStr = "PROCESSSEGMENTID == '" + objDs.getColumn(row, "PROCESSSEGMENTID") + "' && "
        			+ "PROCESSSEGMENTVERSION == '" + objDs.getColumn(row, "PROCESSSEGMENTVERSION") + "' && "
        			+ "PRODUCTDEFID == '" + objDs.getColumn(row, "PRODUCTDEFID") + "' && "
        			+ "PRODUCTDEFVERSION == '" + objDs.getColumn(row, "PRODUCTDEFVERSION") + "' && "
        			+ "RESOURCEID == '" + objDs.getColumn(row, "RESOURCEID") + "' && "
        			+ "CREATOR == '" + objDs.getColumn(row, "CREATOR") + "'";

        	this.fn_filter(this.ds_qamLotMessageShipmentInsp, filterStr);
        	this.ds_qamMessage.copyData(this.ds_qamLotMessageShipmentInsp, true);
        	this.fn_filter(this.ds_qamLotMessageShipmentInsp, "");
        };

        /*
        * 기능 : 불량률 계산 불량명 별
        */
        this.fn_customSummaryCalculate = function ()
        {
        	var sampleQty = nexacro.toNumber(this.fv_objDs.getColumn(this.fv_nRowPos, "INSPECTIONQTY"));
        	var allQtyPCS = nexacro.toNumber(this.fv_objDs.getColumn(this.fv_nRowPos, "ALLQTYPCS"));
        	var allQtyPNL = nexacro.toNumber(this.fv_objDs.getColumn(this.fv_nRowPos, "ALLQTYPNL"));

        	var defectQtySumPCS = nexacro.toNumber(this.ds_qamHistoryDetail.getSum("DEFECTQTY"));		//개별 lot의 불량 PCS 수량 합
        	var defectQtySumPNL = nexacro.toNumber(this.ds_qamHistoryDetail.getSum("DEFECTQTYPNL"));	//개별 lot의 불량 PNL 수량 합


        	if (sampleQty != 0 && defectQtySumPCS != 0) {

        		//개별 lot의 전체 수량과 개별 lot의 불량 수량 합이 0이 아닐때 (PCS로 계산 한 불량률)
        		var defectRate = nexacro.round((defectQtySumPCS / sampleQty * 100), 1);
        		var goodQtyPCS = allQtyPCS - defectQtySumPCS;
        		var goodQtyPNL = allQtyPNL - defectQtySumPNL;

        		this.ds_qamHistory.clearData();
        		var nRow = this.ds_qamHistory.addRow();
        		this.ds_qamHistory.copyRow(nRow, this.fv_objDs, this.fv_nRowPos);

        		this.ds_qamHistory.setColumn(nRow, "SPECOUTQTY", defectQtySumPCS);
        		this.ds_qamHistory.setColumn(nRow, "DEFECTQTYPNL", defectQtySumPNL);
        		this.ds_qamHistory.setColumn(nRow, "DEFECTRATE", defectRate + "%");

        		if (goodQtyPCS < 0) {
        			this.ds_qamHistory.setColumn(nRow, "GOODQTYPCS", "0");
        		}
        		else {
        			this.ds_qamHistory.setColumn(nRow, "GOODQTYPCS", goodQtyPCS);
        		}

        		if (goodQtyPNL < 0) {
        			this.ds_qamHistory.setColumn(nRow, "GOODQTYPNL", "0");
        		}
        		else {
        			this.ds_qamHistory.setColumn(nRow, "GOODQTYPNL", goodQtyPNL);
        		}
        	}
        };

        /*
         * 기능 : 포커스된 row가 바뀔때 이미지 찾는 함수 : lotid+inspItem 으로 파일정보 셀렉트하여 이미지 보여주기
         */
        this.fn_searchImage = function(idx)
        {
        	var objDs, resourceId, atchTypeCd;
        	if(idx == 0) { //불량검사
        		objDs = this.ds_qamHistoryDetail;
        		resourceId = objDs.getColumn(0, "RESOURCEID") + objDs.getColumn(0, "DEGREE") + objDs.getColumn(0, "DEFECTCODE") + objDs.getColumn(0, "QCSEGMENTID");

        	} else if(idx == 1) { //불량폐기
        		objDs = this.ds_qamDefectDisposal;
        		resourceId = objDs.getColumn(0, "RESOURCEID") + objDs.getColumn(0, "DEGREE") + objDs.getColumn(0, "DEFECTCODE") + objDs.getColumn(0, "QCSEGMENTID") + "D";

        	}

        	if(this.nfn_isNull(resourceId)) return;

        	this.ds_qamImage.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();

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
         * 사진 보여주기
         */
        this.fn_setImgUrl = function (obj, e)
        {
        	var objDataset = obj.getBindDataset();
        	var atchFileGuid = objDataset.getColumn(e.row, "ATCH_FILE_GUID");
        	var upUrl = nexacro.getEnvironment().services["svcurl"].url +"/comm/downImage/" + atchFileGuid + ".do";
        	this.div_work.form.img_photo.set_image("URL('"+ upUrl + "')");
        };

        /*
        * 기능 : filter
        */
        this.fn_filter = function (objDs, filterStr)
        {
        	objDs.filter("");
        	if(this.nfn_isNull(filterStr)) return;
        	objDs.filter(filterStr);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        // 닫기 버튼 클릭 시
        this.fn_close = function(obj,e)
        {
        	this.close();
        };

        // grdProcessSegmentList에서 선택한 공정의 메세지를 등록한 등록자 조회함수 (AS-IS : SearchCreatorList)
        this.ds_qamProcessSegment_onrowposchanged = function(obj,e)
        {
        	this.fn_searchCreatorList(obj, e.newrow);
        };

        // grdCreatorList 에서 선택한 공정의 메세지를 등록한 등록자 조회함수
        this.ds_qamCreator_onrowposchanged = function(obj,e)
        {
        	this.fn_searchMessageList(obj, e.newrow);
        };

        // 탭 전환시 이미지 바인딩 event
        this.tab_basInfo_Tabpage1_tab_detail_onchanged = function(obj,e)
        {
        	this.fn_searchImage(e.postindex);
        };

        // grdHistoryDetail focusedRow 체인지 이벤트
        this.ds_qamHistoryDetail_onrowposchanged = function(obj,e)
        {
        	this.fn_searchImage(0);
        };

        // grdDefectDisposal focusedRow 체인지 이벤트
        this.ds_qamDefectDisposal_onrowposchanged = function(obj,e)
        {
        	this.fn_searchImage(1);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_close.addEventHandler("onclick",this.fn_close,this);
            this.btn_x_close.addEventHandler("onclick",this.fn_close,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_lotid.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_prevprocesssegmentname.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_processsegmentname.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_nextprocesssegmentname.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_plantid.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_usersequence.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_productdefid.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_productdefname.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_inputdate.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_productionorderid.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_duedate.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_productdeftype.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_productiontype.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_islocking.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_areaname.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_week.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_areaid.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_customername.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_unit.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_pnlqty.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_pcsqty.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_mm.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_pcspnl.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.div_basInfo.form.edt_isrclot.addEventHandler("onkeydown",this.div_basInfo_edt_lotNo_onkeydown,this);
            this.tab_basInfo.Tabpage1.form.tab_detail.addEventHandler("onchanged",this.tab_basInfo_Tabpage1_tab_detail_onchanged,this);
            this.tab_basInfo.Tabpage2.form.grd_processSegmentList.addEventHandler("oncelldblclick",this.div_work_tab_basInfo_Tabpage2_grd_qamCause_oncelldblclick,this);
            this.tab_basInfo.Tabpage2.form.grd_creatorList.addEventHandler("oncelldblclick",this.div_work_tab_basInfo_Tabpage2_grd_qamCause_oncelldblclick,this);
            this.tab_basInfo.Tabpage2.form.div_message.form.edt_title.addEventHandler("onkeydown",this.qamfn_callOpenPopEditEvent,this);
            this.ds_qamHistoryDetail.addEventHandler("onrowposchanged",this.ds_qamHistoryDetail_onrowposchanged,this);
            this.ds_qamDefectDisposal.addEventHandler("onrowposchanged",this.ds_qamDefectDisposal_onrowposchanged,this);
            this.ds_qamProcessSegment.addEventHandler("onrowposchanged",this.ds_qamProcessSegment_onrowposchanged,this);
            this.ds_qamCreator.addEventHandler("onrowposchanged",this.ds_qamCreator_onrowposchanged,this);
        };
        this.loadIncludeScript("QAM01300P2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
