(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01600M");
            this.set_titletext("출하검사 NCR");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qamOutFlow", this);
            obj._setContents("<ColumnInfo><Column id=\"STATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"NGCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"CARREQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CAREXPECTEDRECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamCause", this);
            obj._setContents("<ColumnInfo><Column id=\"STATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"NGCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"CARREQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CAREXPECTEDRECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRESS\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOT\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORUSER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamIssue", this);
            obj._setContents("<ColumnInfo><Column id=\"STATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"NGCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"CARREQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CAREXPECTEDRECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("불량명");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_lotId","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_processsegment","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSCHANGETYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","300","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","300","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"110","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","105","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"280","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","306","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_processsegment","108","185",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_processsegment",null,"185","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_defectcode","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("불량코드명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DEFECTCODENAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productdef","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONDEFINITION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_defectcode","108","160",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_defectcode",null,"160","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_progressStatus","108","235","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_codecolumn("C,CARProgressStatus,ALL,Y,Y");
            obj.set_text("PROGRESSSTATUS");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_lotId","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("Lot No");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_progressStatus","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("처리현황");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("64D452C9C02143189B0FDA2EEACC5AB8");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_isClose","0","260","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("마감여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISCLOSE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_productdef",null,"135","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdef","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_isClose","108","260","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("YESNO");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_inspector_id","60","464","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_value("검사원ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("검사원ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("발행기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISSUEPERIOD");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType","10","60","94","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_defectcode_id","60","396","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_value("불량코드ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("불량코드ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdef_id","60","363","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_value("품목ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("품목ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_processsegment_id","60","428","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_value("공정ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("공정ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_parentLotId","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("모 Lot");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PARENTLOTID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_parentLotId","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_inspector","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_text("검사원");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INSPECTOR");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_inspector","108","210",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("33");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_inspector",null,"210","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_dateFrom","108","35",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("35");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_dateTo","108","60",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("36");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","191","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_basInfo","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_basInfo);
            obj.set_text("유출공정");
            obj.set_tooltiptext("OUTFLOWPROCESS");
            this.div_work.form.tab_basInfo.addChild(obj.name, obj);

            obj = new Static("sta_outflowprocess","0","0","420","34",null,null,null,null,null,null,this.div_work.form.tab_basInfo.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("유출공정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("OUTFLOWPROCESS");
            this.div_work.form.tab_basInfo.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_qamOutFlow","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_basInfo.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamOutFlow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"130\"/><Column size=\"150\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"상태명\" tooltiptext=\"STATENAME\"/><Cell col=\"2\" text=\"완료일시\" tooltiptext=\"INSPECTIONDATE\"/><Cell col=\"3\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"4\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"품목명\" tooltiptext=\"PRODUCTNAME\"/><Cell col=\"6\" text=\"모 Lot\" tooltiptext=\"PARENTLOTID\"/><Cell col=\"7\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"8\" text=\"차수\" tooltiptext=\"DEGREE\"/><Cell col=\"9\" text=\"NG횟수\" tooltiptext=\"NGCOUNT\"/><Cell col=\"10\" text=\"불량코드 명\" tooltiptext=\"DEFECTCODENAME\"/><Cell col=\"11\" text=\"품질공정 명\" tooltiptext=\"QCSEGMENTNAME\"/><Cell col=\"12\" text=\"검사 수량\" tooltiptext=\"INSPECTIONQTY\"/><Cell col=\"13\" text=\"불량 수량\" tooltiptext=\"DEFECTQTY\"/><Cell col=\"14\" text=\"불량률\" tooltiptext=\"DEFECTRATE\"/><Cell col=\"15\" text=\"검사자명\" tooltiptext=\"INSPECTORNAME\"/><Cell col=\"16\" text=\"마감여부\" tooltiptext=\"ISCLOSE\"/><Cell col=\"17\" text=\"원인품목명\" tooltiptext=\"REASONCONSUMABLEDEFNAME\"/><Cell col=\"18\" text=\"원인 품목 Rev\" tooltiptext=\"REASONCONSUMABLEDEFVERSION\"/><Cell col=\"19\" text=\"원인자재 Lot\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell col=\"20\" text=\"원인공정명\" tooltiptext=\"REASONSEGMENTNAME\"/><Cell col=\"21\" text=\"원인작업장명\" tooltiptext=\"REASONAREANAME\"/><Cell col=\"22\" text=\"CAR 요청 일자\" tooltiptext=\"CARREQUESTDATE\"/><Cell col=\"23\" text=\"CAR 접수 예정 일자\" tooltiptext=\"CAREXPECTEDRECEIPTDATE\"/><Cell col=\"24\" text=\"CAR 접수 일자\" tooltiptext=\"RECEIPTDATE\"/><Cell col=\"25\" text=\"CAR 승인 일자\" tooltiptext=\"APPROVALDATE\"/><Cell col=\"26\" text=\"CAR 유효성 평가 일자\" tooltiptext=\"CLOSEDATE\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"bind:STATENAME\"/><Cell col=\"1\" text=\"bind:STATENAME\"/><Cell col=\"2\" text=\"bind:INSPECTIONDATE\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PARENTLOTID\"/><Cell col=\"7\" text=\"bind:LOTID\"/><Cell col=\"8\" text=\"bind:DEGREE\"/><Cell col=\"9\" text=\"bind:NGCOUNT\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:DEFECTCODENAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:QCSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:INSPECTIONQTY\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:DEFECTQTY\" textAlign=\"right\"/><Cell col=\"14\" textAlign=\"right\" expr=\"DEFECTRATE +&apos;%&apos;\"/><Cell col=\"15\" text=\"bind:INSPECTORNAME\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:ISCLOSE\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:REASONCONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:REASONCONSUMABLEDEFVERSION\"/><Cell col=\"19\" text=\"bind:REASONCONSUMABLELOTID\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:REASONSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:REASONAREANAME\" textAlign=\"left\"/><Cell col=\"22\" text=\"bind:CARREQUESTDATE\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"23\" text=\"bind:CAREXPECTEDRECEIPTDATE\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"24\" text=\"bind:RECEIPTDATE\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"25\" text=\"bind:APPROVALDATE\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"26\" text=\"bind:CLOSEDATE\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab_basInfo.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_qamOutFlow",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_basInfo.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_basInfo.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_basInfo);
            obj.set_text("원인공정");
            obj.set_tooltiptext("REASONSEGMENT");
            this.div_work.form.tab_basInfo.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_qamCause",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_basInfo.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_basInfo.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_qamCause","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_basInfo.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamCause");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"상태명\" tooltiptext=\"STATENAME\"/><Cell col=\"2\" text=\"완료일시\" tooltiptext=\"INSPECTIONDATE\"/><Cell col=\"3\" text=\"NCR 발행일시\" tooltiptext=\"NCRISSUEDATE\"/><Cell col=\"4\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"5\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"6\" text=\"품목명\" tooltiptext=\"PRODUCTNAME\"/><Cell col=\"7\" text=\"모 Lot\" tooltiptext=\"PARENTLOT\"/><Cell col=\"8\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"9\" text=\"차수\" tooltiptext=\"DEGREE\"/><Cell col=\"10\" text=\"NG횟수\" tooltiptext=\"NGCOUNT\"/><Cell col=\"11\" text=\"불량코드 명\" tooltiptext=\"DEFECTCODENAME\"/><Cell col=\"12\" text=\"품질공정 명\" tooltiptext=\"QCSEGMENTNAME\"/><Cell col=\"13\" text=\"검사 수량\" tooltiptext=\"INSPECTIONQTY\"/><Cell col=\"14\" text=\"불량 수량\" tooltiptext=\"DEFECTQTY\"/><Cell col=\"15\" text=\"불량률\" tooltiptext=\"DEFECTRATE\"/><Cell col=\"16\" text=\"원인품목명\" tooltiptext=\"REASONCONSUMABLEDEFNAME\"/><Cell col=\"17\" text=\"원인 품목 Rev\" tooltiptext=\"REASONCONSUMABLEDEFVERSION\"/><Cell col=\"18\" text=\"원인 LOTID\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell col=\"19\" text=\"원인공정명\" tooltiptext=\"REASONSEGMENTNAME\"/><Cell col=\"20\" text=\"원인작업장명\" tooltiptext=\"REASONAREANAME\"/><Cell col=\"21\" text=\"검사자명\" tooltiptext=\"INSPECTORNAME\"/><Cell col=\"22\" text=\"마감여부\" tooltiptext=\"ISCLOSE\"/><Cell col=\"23\" text=\"CAR요청일자\" tooltiptext=\"CARREQUESTDATE\"/><Cell col=\"24\" text=\"CAR 접수 예정 일자\" tooltiptext=\"CAREXPECTEDRECEIPTDATE\"/><Cell col=\"25\" text=\"CAR 접수 일자\" tooltiptext=\"CARRECEIPTDATE\"/><Cell col=\"26\" text=\"CAR 승인 일자\" tooltiptext=\"CARAPPROVALDATE\"/><Cell col=\"27\" text=\"CAR 유효성 평가 일자\" tooltiptext=\"CARCLOSEDATE\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" text=\"bind:STATENAME\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:STATENAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:INSPECTIONDATE\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"3\" text=\"bind:NCRISSUEDATE\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PARENTLOTID\"/><Cell col=\"8\" text=\"bind:LotNo\"/><Cell col=\"9\" text=\"bind:DEGREE\"/><Cell col=\"10\" text=\"bind:NGCOUNT\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:DEFECTCODENAME\"/><Cell col=\"12\" text=\"bind:QCSEGMENTNAME\"/><Cell col=\"13\" text=\"bind:INSPECTIONQTY\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:DEFECTQTY\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:DEFECTRATE\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:REASONCONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:REASONCONSUMABLEDEFVERSION\"/><Cell col=\"18\" text=\"bind:REASONCONSUMABLELOTID\"/><Cell col=\"19\" text=\"bind:REASONSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:REASONAREANAME\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:INSPECTORNAME\" textAlign=\"left\"/><Cell col=\"22\" text=\"bind:ISCLOSE\" textAlign=\"left\"/><Cell col=\"23\" text=\"bind:CARREQUESTDATE\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"24\" text=\"bind:CAREXPECTEDRECEIPTDATE\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"25\" text=\"bind:RECEIPTDATE\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"26\" text=\"bind:APPROVALDATE\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"27\" text=\"bind:CLOSEDATE\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab_basInfo.Tabpage2.addChild(obj.name, obj);

            obj = new Static("subtitle1","0","0","66","34",null,null,null,null,null,null,this.div_work.form.tab_basInfo.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("원인공정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("REASONSEGMENT");
            this.div_work.form.tab_basInfo.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
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

            obj = new Static("sta_title","30","16","144","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("출하검사 NCR");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("AE14217C52274EF08C9D7BB55E59AF7F");
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
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM01600M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM01600M.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM01600M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 품질규격 이상발생
         * 파일명 		: QAM01600M.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.05.04
         *
         * 설  명		: 품질관리 > 수입검사 > 출하검사이상발생
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.04	권혜영   	최초작성
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
        	this.basfn_getPeriodData("ds_periodType");
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
        	this.fn_searchTab(0);
        	this.fn_searchTab(1);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
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
        		if (trId == "selectShipmentAbnormalOccurrence")
        		{

        		}
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        /*
         * 기능 : 이상발생 팝업화면 open
         */
        this.fn_openViewPopup = function (nRow, objDs)
        {
        	var oArg = {};

        	this.ds_qamIssue.clearData();
        	this.ds_qamIssue.copyData(objDs);

        	if (nRow > -1) {
        		oArg.rowPos = nRow;
        		oArg.ds_qamIssue = this.ds_qamIssue;
        	}
        	this.gfn_openPopup("QAM_ISSUE","qam::QAM01600P1.xfdl",oArg,"width=1200,height=930");
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
        	this.ds_CSiteType.filter("LOOKUP_CODE == '"+this.gf_getSiteType()+"'");
        	this.tab_search.Tabpage1.form.cbo_site.set_index(0);

        	this.tab_search.Tabpage1.form.cbo_periodType.set_value("THISWEEK"); //금주
        	this.qamfn_setCompControl(this.tab_search.Tabpage1.form.components, "empty");

        	this.fn_setDate("THISWEEK");
        };

        /*
         * 기능 : 탭별로 조회
         */
        this.fn_searchTab = function(tabIdx)
        {
         	var dateFrom = this.tab_search.Tabpage1.form.cal_dateFrom.value + this.qam_jobStartTime;
        	var dateTo = this.tab_search.Tabpage1.form.cal_dateTo.value + this.qam_jobEndTime;

        	this.ds_qamOutFlow.clearData();
        	this.ds_qamCause.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cbo_site.value);

        	this.ds_search.setColumn(0, "PRODUCTDEFID", this.tab_search.Tabpage1.form.edt_productdef_id.value);
        	this.ds_search.setColumn(0, "DEFECTCODE", this.tab_search.Tabpage1.form.edt_defectcode_id.value);
        	this.ds_search.setColumn(0, "REASONSEGMENTID", this.tab_search.Tabpage1.form.edt_processsegment_id.value);
        	this.ds_search.setColumn(0, "INSPECTORUSER", this.tab_search.Tabpage1.form.edt_inspector_id.value);
        	this.ds_search.setColumn(0, "PARENTLOT", this.tab_search.Tabpage1.form.edt_parentLotId.value);
        	this.ds_search.setColumn(0, "LOTID", this.tab_search.Tabpage1.form.edt_lotId.value);

        	this.ds_search.setColumn(0, "PERIODFR", dateFrom);
        	this.ds_search.setColumn(0, "PERIODTO", dateTo);

        	this.ds_search.setColumn(0, "PROGRESS", this.tab_search.Tabpage1.form.cmb_progressStatus.value);
        	this.ds_search.setColumn(0, "ISCLOSE", this.tab_search.Tabpage1.form.cbo_isClose.value);

        	var sSvcID 			= "selectShipmentAbnormalOccurrence";
        	var sController 	= "/qam01600/selectShipmentAbnormalOccurrence.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";

        	if(tabIdx == 0) {
        		this.ds_search.setColumn(0, "ABNOCRTYPE", "SpillShipmentInspection");
        		sOutDatasets 	= "ds_qamOutFlow=output";

        	} else {
        		this.ds_search.setColumn(0, "ABNOCRTYPE", "ReasonShipmentInspection");
        		sOutDatasets 	= "ds_qamCause=output";
        	}

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */

        this.fn_changeCalendar = function() {
        	this.tab_search.Tabpage1.form.cbo_periodType.set_value("CUSTOM");
        };

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.tab_search.Tabpage1.form.cal_dateFrom.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.tab_search.Tabpage1.form.cal_dateTo.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search_Tabpage1_cbo_periodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate(e.postvalue);
        	}
        };

        this.tab_search_Tab1_cal_dateFrom_onchanged = function(obj,e)
        {
        	this.fn_changeCalendar();
        };

        this.tab_search_Tab1_cal_dateTo_onchanged = function(obj,e)
        {
        	this.fn_changeCalendar();
        };

        this.div_work_tab_basInfo_Tabpage1_grd_qamOutFlow_oncelldblclick = function(obj,e)
        {
        	this.fn_openViewPopup(e.row, this.ds_qamOutFlow);
        };

        this.div_work_tab_basInfo_Tabpage2_grd_qamCause_oncelldblclick = function(obj,e)
        {
        	this.fn_openViewPopup(e.row, this.ds_qamCause);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_processsegment.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_defectcode.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_productdef.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.cbo_periodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_periodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.btn_inspector.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.cal_dateFrom.addEventHandler("onchanged",this.tab_search_Tab1_cal_dateFrom_onchanged,this);
            this.tab_search.Tabpage1.form.cal_dateTo.addEventHandler("onchanged",this.tab_search_Tab1_cal_dateTo_onchanged,this);
            this.div_work.form.tab_basInfo.Tabpage1.form.grd_qamOutFlow.addEventHandler("oncelldblclick",this.div_work_tab_basInfo_Tabpage1_grd_qamOutFlow_oncelldblclick,this);
            this.div_work.form.tab_basInfo.Tabpage2.form.grd_qamCause.addEventHandler("oncelldblclick",this.div_work_tab_basInfo_Tabpage2_grd_qamCause_oncelldblclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("QAM01600M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
