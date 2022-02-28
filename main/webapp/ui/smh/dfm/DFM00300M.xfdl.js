(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DFM00300M");
            this.set_titletext("검사공정 최종 불량 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1647,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_AOIPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"P_BBTPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"P_HOLEPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_AOINOSELECT\" type=\"STRING\" size=\"256\"/><Column id=\"P_BBTNOSELECT\" type=\"STRING\" size=\"256\"/><Column id=\"P_HOLENOSELECT\" type=\"STRING\" size=\"256\"/><Column id=\"P_INCLUDEAOI\" type=\"STRING\" size=\"256\"/><Column id=\"SESSION_LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"REPAIRTARGETQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REPAIRRESULTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_totalDataTable", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EVENTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRTARGETQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REPAIRRESULTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_paramAOI", this);
            obj._setContents("<ColumnInfo><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_INSPECTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_paramBBT", this);
            obj._setContents("<ColumnInfo><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_INSPECTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_paramHold", this);
            obj._setContents("<ColumnInfo><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_INSPECTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inspectionRateAnalysisTotal", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inspectionRateAnalysisTotalNull", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_inspResultDt", this);
            obj._setContents("<ColumnInfo><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmbDefectGrp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">ALL</Col></Row><Row><Col id=\"VALUE\">AAA</Col><Col id=\"CODE\">998</Col></Row><Row><Col id=\"VALUE\">NONE</Col><Col id=\"CODE\">999</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmbDefectCode", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">ALL</Col><Col id=\"P_CODE\">*</Col></Row><Row><Col id=\"VALUE\">BBBB</Col><Col id=\"CODE\">9998</Col><Col id=\"P_CODE\">998</Col></Row><Row><Col id=\"CODE\">9999</Col><Col id=\"VALUE\">NONE</Col><Col id=\"P_CODE\">998</Col></Row><Row><Col id=\"P_CODE\">999</Col><Col id=\"CODE\">9999</Col><Col id=\"VALUE\">NONE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_aoiTitleList", this);
            obj._setContents("<ColumnInfo><Column id=\"COLID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bbtTitleList", this);
            obj._setContents("<ColumnInfo><Column id=\"COLID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_holeTitleList", this);
            obj._setContents("<ColumnInfo><Column id=\"COLID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_distinctDt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"REPAIRTARGETQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REPAIRRESULTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_revCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detailDt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processSegmentList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_barchartMain", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_barchartMainNull", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_aoiCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bbtCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_holeCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tab_page",this.tab_search);
            obj.set_text("불량명");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_AOIProcess","0","185","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("5");
            obj.set_text("AOI 공정");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_BBTProcess","0","sta_AOIProcess:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("6");
            obj.set_text("BBT 공정");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_HoleProcess","0","sta_BBTProcess:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("7");
            obj.set_text("HOLE 공정");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static04",null,"sta_HoleProcess:0","45","20","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("2");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_search","15","Static04:0","146","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static05","161",null,"10","27",null,"btn_search:-32",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("3");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_clear2","171","Static04:0","102","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_productdefid","0","85","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("9");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_productname","0","sta_productdefid:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("12");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_productdefversion","0","sta_productname:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("8");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("label00","0","sta_productdefversion:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("22");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_lotid","0","60","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("14");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_period","7","35","89","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("17");
            obj.set_codecolumn("code");
            obj.set_innerdataset("gds_period");
            obj.set_datacolumn("desc");
            obj.set_text("금일");
            obj.set_value("today");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_productdefid","sta_productdefid:5",null,null,"20","37","sta_productdefid:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("10");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_productdefid","edt_productdefid:0",null,"22","20",null,"sta_productdefid:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_productname","sta_productname:5",null,null,"20","15","sta_productname:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_searchPeriod","0","10","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("20");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("C6A85700415446D89213292978260263");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_lotid","sta_lotid:5",null,null,"20","37","sta_lotid:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("15");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_lotid","edt_lotid:0",null,"22","20",null,"sta_lotid:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Div("div_dateFrom","sta_searchPeriod:5",null,"165","21",null,"sta_searchPeriod:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("18");
            obj.set_url("common::com_calendar.xfdl");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Div("div_dateTo","cbo_period:12",null,"165","21",null,"cbo_period:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("19");
            obj.set_url("common::com_calendar.xfdl");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_productionType","label00:5",null,"165","20",null,"label00:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("21");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Div("div_revMulti","sta_productdefversion:5",null,"165","20",null,"sta_productdefversion:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("23");
            obj.set_url("dfm::dfm_multiCombo.xfdl");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Div("div_aoiMulti","sta_AOIProcess:5",null,"165","20",null,"sta_AOIProcess:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("24");
            obj.set_url("dfm::dfm_multiCombo.xfdl");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Div("div_bbtMulti","sta_BBTProcess:5",null,"165","20",null,"sta_BBTProcess:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("25");
            obj.set_url("dfm::dfm_multiCombo.xfdl");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Div("div_holeMulti","sta_HoleProcess:5",null,"165","20",null,"sta_HoleProcess:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("26");
            obj.set_url("dfm::dfm_multiCombo.xfdl");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","191","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","38","34","1309",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("비교");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_main","0","34",null,null,"347","333",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" rowspan=\"2\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"3\" rowspan=\"2\" text=\"Lot No.\" tooltiptext=\"LOTID\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:LOTID\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","grd_main:0","110","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("Lot별 검사 유형");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_detailDt","Static01_00:20","grd_main:0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_detail","0","Static01_00:0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("grd_sub");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사공정\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"2\" text=\"Layer\" tooltiptext=\"LAYER\"/><Cell col=\"3\" tooltiptext=\"DEFECT\" text=\"불량항목\"/><Cell col=\"4\" text=\"불량율\" tooltiptext=\"DEFECTRATE\"/><Cell col=\"5\" text=\"불량수\" tooltiptext=\"DEFECTCOUNT\"/><Cell col=\"6\" text=\"검사수\" tooltiptext=\"INSPECTIONQTY\"/><Cell col=\"7\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell col=\"8\" text=\"완료시간\" tooltiptext=\"TRACKOUTTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" textAlign=\"left\" text=\"bind:PROCESSSEGMENTNAME\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:LAYERID\" textAlign=\"center\" suppress=\"2\"/><Cell col=\"3\" text=\"bind:SUBNAME\" textAlign=\"left\" suppress=\"3\"/><Cell col=\"4\" text=\"bind:DEFECTRATE\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0.00\" maskedittype=\"number\" maskeditpostfixtext=\" %\"/><Cell col=\"5\" text=\"bind:DEFECTCOUNT\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:INSPECTIONQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"7\" text=\"bind:AREANAME\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:TRACKOUTTIME\" textAlign=\"center\" displaytype=\"text\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_defectGrp",null,"grd_main:7","67","20","398",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("불량 그룹");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("E92464F917AC4ED3AF7A55CA15ACAAB1");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_defectCode",null,"grd_main:7","67","20","201",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_text("불량코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DEFECTCODE");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_defectGrpMulti","sta_defectGrp:5","grd_main:8",null,"20","sta_defectCode:5",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_url("dfm::dfm_multiCombo.xfdl");
            obj.set_text("사이트권한");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_detail",null,"grd_main:4","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_filter",null,"grd_main:7","34","20","btn_xlDn_grd_detail:10",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_text("필터");
            obj.set_cssclass("btn_WF_black");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("4B93867528004642A7CB31361D41C80E");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_defectCodeMulti","sta_defectCode:5","grd_main:7","120","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_url("dfm::dfm_multiCombo.xfdl");
            obj.set_text("사이트권한");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_mainNull","0","34",null,null,"347","333",null,null,null,null,this.div_work.form);
            obj.set_taborder("11");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"선택\"/><Cell col=\"2\" text=\"품목명\"/><Cell col=\"3\" text=\"품목코드\"/><Cell col=\"4\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"6\" text=\"불량율\"/><Cell col=\"7\" text=\"불량수\"/><Cell col=\"8\" text=\"검사수\"/><Cell col=\"9\" text=\"검사공정\"/><Cell col=\"10\" text=\"작업장\"/><Cell col=\"11\" text=\"완료시간\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:DEFECTRATE\" displaytype=\"mask\" edittype=\"none\" textAlign=\"right\" maskeditformat=\"#,##0.00\" maskedittype=\"number\" maskeditpostfixtext=\" %\"/><Cell col=\"7\" text=\"bind:DEFECTCOUNT\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"mask\"/><Cell col=\"8\" text=\"bind:INSPECTIONQTY\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"mask\"/><Cell col=\"9\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:AREANAME\"/><Cell col=\"11\" text=\"bind:TRACKOUTTIME\" displaytype=\"text\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new BasicChart("cht_chartMain",null,"34","337",null,"0","333",null,null,null,null,this.div_work.form);
            obj.set_taborder("12");
            obj.set_binddataset("ds_barchartMain");
            obj.set_border("1px solid #e8e8e8");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 700 12pt/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px",
            		"visible": false,
            		"textcolor": "#222222",
            		"subtextfont": "normal 400 10pt/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px",
            		"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"horizontalitemgap": "5",
            		"background": "#ffffff",
            		"markertextgap": "3",
            		"align": "rightcenter",
            		"visible": false
            	},
            	"hrangebar": {
            		"id": "hrangebar",
            		"trackbarpadding": "0px",
            		"background": "#f0f0f0",
            		"linestyle": "0px none",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#cdcdcd",
            		"size": "12",
            		"visible": false
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "0px",
            		"background": "#f0f0f0",
            		"linestyle": "0px none",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#cdcdcd",
            		"size": "12",
            		"visible": false
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": true
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "bold 9pt \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "9pt \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"visible": "true",
            		"labelgap": "3",
            		"axislinestyle": "0px none"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barsize": "50",
            			"itemtextvisible": true,
            			"itemtextcolor": "#ffffff",
            			"itemtextfont": "bold 9pt \"맑은 고딕\"",
            			"valuecolumn": "bind:DATA",
            			"baritemtextposition": "middle",
            			"baritemtextgap": "10",
            			"barfillstyle": "#0c84c1",
            			"barlinestyle": "0px none"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis",
            			"boardlinevisible": "true",
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "bold 12pt \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"axislinestyle": "1px solid #e8e8e8",
            			"titlegap": "10",
            			"visible": "true",
            			"autotickscale": 20,
            			"labeltype": "number",
            			"labelmask": "999.99"
            		}
            	],
            	"crosshair": {
            		"id": "crosshair",
            		"type": "y",
            		"xlinestyle": "1px solid #dddddd",
            		"ylinestyle": "1px solid #dddddd",
            		"tooltiptype": "y",
            		"xlinetooltipfillstyle": "#000000",
            		"ylinetooltipfillstyle": "#000000",
            		"ylinetooltippadding": "5px 10px 5px 5px",
            		"xlinetooltippadding": "5px 3px 5px 5px",
            		"xlinetooltiptextcolor": "#ffffff",
            		"xlinetooltipborderradius": "5px",
            		"ylinetooltiptextcolor": "#ffffff",
            		"ylinetooltipborderradius": "5px",
            		"visible": "false",
            		"ylinetooltipgap": "5"
            	}
            });
            obj.set_categorycolumn("bind:NAME");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
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

            obj = new Static("sta_title","30","16","187","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("검사공정 최종 불량 현황");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_apply",null,"16","44","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("적용");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("APPLY");
            this.div_header.addChild(obj.name, obj);

            obj = new Grid("grd_default","100","573",null,null,"547","-159",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" rowspan=\"2\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"3\" rowspan=\"2\" text=\"Lot No.\" tooltiptext=\"LOTID\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:LOTID\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1647,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item6","tab_search.tab_page.form.edt_lotid","accessibilityaction","ds_search","P_LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","tab_search.tab_page.form.edt_productdefid","value","ds_search","P_PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.tab_page.form.edt_productname","value","ds_search","P_PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.tab_page.form.cbo_productionType","value","ds_search","P_PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_calendar.xfdl");
            this._addPreloadList("fdl","dfm::dfm_multiCombo.xfdl");
        };
        
        // User Script
        this.addIncludeScript("DFM00300M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("DFM00300M.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("DFM00300M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("DFM00300M.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("DFM00300M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("DFM00300M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 검사공정 최종불량현황
         * 파일명 		: DFM00300M.xfdl
         * 작성자 		: 김성현
         * 작성일 		: 2021.5.10
         *
         * 설  명		: 검색기간내에 "LOT 작업실적"에서 "LOT 정보"의 "라우팅 상세"에서 AOI, BBT, HOLE 불량정보중
                          "AOIBBT 작업완료"를 조회후에
        				  30건이 나오면 그 중에서 넥사크로에서
        				  제품버전, Lot No, 설비구분(AOI, BBT, HOLE), 공정 ID로 그룹핑해서 데이타를 데이타셋에 저장후
        				  AOI, BBT, HOLE에 따라서 그리드 컬럼도 자동생성
        				  죄종결과를
        				  메인그리드에 5건뿌려줌.

        				  즉, 쿼리에서는 AOI, BBT, HOLE불량의 공정명이 세로로 출력이 되는데,
        				  AOI, BBT, HOLE은 가로로 출력해야 됨.

        				  <<적용>>을 누르면 해당 상태내용을
        				  상세그리드와 챠트에 뿌려줌.



         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.5.10	김성현   	최초작성
         * 2021.07.08	김진현		수정전
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_pcm.xjs"); /*include "lib::lib_pcm.xjs"*/;
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통

        // this.gf_getEnterpriseId()
        // this.gf_getSiteType()
        // this.gf_getLanguageType()
        // this.gf_getUserId()
        // this.gf_getUserNm()


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.tab_page.form;
        this.isBusy = false;
        this.isChangeCombo = false;


        this.aoidefectrateTotal = 0;
        this.bbtdefectrateTotal = 0;
        this.holedefectrateTotal = 0;

        // btnApply.LanguageKey = "APPLY";
        // grbComparison.LanguageKey = "TABCOMPARISON";
        // grbInspectionType.LanguageKey = "INSPECTIONTYPE";
        // tabMain.SetLanguageKey(tabProduct, "PRODUCT");
        // tabMain.SetLanguageKey(tabLot, "LOT");

        //this.titleList = [];


        this.productdefidCaseNull = false;
        this.ds_dt_oldrow = -1;
        this.fn_searchNullFlag = true;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/



         this.fn_init = function (obj, e)
        {

        	console.log("DFM00300M");

        	this.nfn_formInit(obj);

        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	// 검색조건 달력 설정
        	this.tab_search.tab_page.form.cbo_period.set_value("thisweek");
        	this.tab_search_tab_page_cbo_period_onitemchanged();


        	this.tab_search.tab_page.form.div_dateFrom.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_preiodChang, this);
        	this.tab_search.tab_page.form.div_dateTo.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_preiodChang, this);

        	this.tab_search.tab_page.form.btn_edt_productdefid.addEventHandler( "onclick", this.fn_clickProductdefid, this );

        	//this.fn_initCombo();

        	this.div_header_btn_reset_onclick();

        	// (21.07.09) - 생산구분
        	this.tab_search.tab_page.form.cbo_productionType.set_value("Production");

        };

        this.fn_clickProductdefid = function()
        {
        	this.tab_search.tab_page.form.edt_productdefid.set_value("");
        	this.tab_search.tab_page.form.edt_productname.set_value("");

        	// Rev 조회
        	this.fn_setRev("");


        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
         this.gf_distincDsFilter = function(objDs, sColID)
        {
        	var arrArgs	= sColID.split(",");
        	var sFilterExpr		= "";
        	var sFindRowExpr	= "";

        	for (var i=0; i<arrArgs.length; i++)
        	{
        		if (objDs.getColumnInfo(arrArgs[i]) == null) continue;

        		sFindRowExpr	+= (sFindRowExpr) ? " && " : "";
        		sFindRowExpr	+= "" + arrArgs[i] + "=='\" + " + arrArgs[i] + " + \"'";
        	}

        	if (sFindRowExpr) {
        		sFilterExpr	= "rowidx==dataset.findRowExpr(\"" + sFindRowExpr + "\")";
        	}
        	objDs.filter(sFilterExpr);
        };

        /*
         * 이벤트 : 조회조건- 조회기간 직접 변경시
         */
        this.fn_preiodChang = function(obj,e)
        {
        	trace("-----------------> ");
        	if (!this.nfn_isNull(this.searchDiv.cbo_period.value))
        	{
        		//this.searchDiv.cbo_period.set_text("사용자정의");
        		this.searchDiv.cbo_period.set_value(undefined);		// 21.05.20 명보다는 코드로 설정
        	}
        };


        this.tab_search_tab_page_cbo_period_onitemchanged = function(obj,e)
        {
        	var val = this.tab_search.tab_page.form.cbo_period.value; //var val = e.postvalue

        	if(this.gfn_isNull(val)) return;

        	var sDate = this.nfn_getCurrentSystemTime(0,0,val);
        	var arrDate = sDate.split(",");
        	var sDateFrom = arrDate[1];
        	var sDateTo = arrDate[2];
        	var sTime = "0830";

        	var dateFrom = this.tab_search.tab_page.form.div_dateFrom.form.calStart.value;
        	var dateTo = this.tab_search.tab_page.form.div_dateTo.form.calStart.value;

        	if(!this.gfn_isNull(dateFrom) && dateTo.length>=12){
        		sTime = dateTo.substring(8,12);
        	}
        	this.tab_search.tab_page.form.div_dateFrom.form.calStart.set_value(sDateFrom+sTime);

        	if(!this.gfn_isNull(dateTo) && dateTo.length==12){
        		sTime = dateTo.substring(8,12);
        	}
        	this.tab_search.tab_page.form.div_dateTo.form.calStart.set_value(sDateTo+sTime);

        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_detailDt.clearData();
        	this.ds_barchartMainNull.clearData();
        	this.ds_barchartMain.clearData();
        	this.ds_cmbDefectGrp.clearData();
        	this.ds_cmbDefectCode.clearData();

        	this.isBusy = true;

        	var nPeriodfr = this.tab_search.tab_page.form.div_dateFrom.form.calStart.value;
        	var nPeriodto = this.tab_search.tab_page.form.div_dateTo.form.calStart.value;

        	nPeriodfr = nPeriodfr.substring(0 , 14);
        	nPeriodto = nPeriodto.substring(0 , 14);

        	this.ds_search.setColumn(0, "P_PERIOD_PERIODFR", nPeriodfr); // 시작일
        	this.ds_search.setColumn(0, "P_PERIOD_PERIODTO", nPeriodto); // 종료일
        	this.ds_search.setColumn(0, "P_LOTID", this.tab_search.tab_page.form.edt_lotid.value);
        	this.ds_search.setColumn(0, "LANGUAGETYPE",  this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "P_ENTERPRISEID",  this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0,"ENTERPRISEID"			,this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "P_PLANTID",  this.gf_getSiteType());
        	this.ds_search.setColumn(0, "P_PROCESSDEFID",  this.nfn_nvl(this.ds_search.getColumn(0, "P_PRODUCTDEFID"), "") );
        	this.ds_search.setColumn(0, "P_PRODUCTDEFID",  this.nfn_nvl(this.ds_search.getColumn(0, "P_PRODUCTDEFID"), "") );
        	this.ds_search.setColumn(0, "VERSION",  "10001");

        // 	if(this.ds_aoiCombo.rowcount > 2)
        // 		this.ds_search.setColumn(0, "P_INCLUDEAOI",  "Y");
        // 	else
        // 		this.ds_search.setColumn(0, "P_INCLUDEAOI",  "N");


        	var aoiChoiceFlag  = false;
        	var bbtChoiceFlag  = false;
        	var holeChoiceFlag  = false;


        	// 품목 버전
        	var nRevDs = this.tab_search.tab_page.form.div_revMulti.form;
        	var nFs			= "";
        	for(var i=0; i<nRevDs.ds_initData.rowcount; i++){
        		var chk 	= nRevDs.ds_initData.getColumn(i,"CHK");
        		var code 	= nRevDs.ds_initData.getColumn(i,"CODE");
        		if(chk == 1 && !this.gfn_isNull(code))
        		{
        			nFs += this.gfn_isNull(nFs)? code : "," +code;
        		}
        	}

        	this.ds_search.setColumn(0,"P_PRODUCTDEFVERSION"	, nFs);

        	// AOI
        	var nAOIDs = this.tab_search.tab_page.form.div_aoiMulti.form;
        	nFs			= "";
        	for(var i=0; i<nAOIDs.ds_initData.rowcount; i++){
        		var chk 	= nAOIDs.ds_initData.getColumn(i,"CHK");
        		var code 	= nAOIDs.ds_initData.getColumn(i,"CODE");
        		if(chk == 1 && !this.gfn_isNull(code))
        		{
        			nFs += this.gfn_isNull(nFs)? code : "," +code;
        			if(code == "X")
        				aoiChoiceFlag = true;
        		}
        	}

        	this.ds_search.setColumn(0,"P_AOIPROCESS"	, nFs);

        	if(aoiChoiceFlag)
        		this.ds_search.setColumn(0, "P_AOINOSELECT",  "Y");
        	else
        		this.ds_search.setColumn(0, "P_AOINOSELECT",  "N");

        	// BBT
        	var nBBTDs = this.tab_search.tab_page.form.div_bbtMulti.form;
        	nFs			= "";
        	for(var i=0; i<nBBTDs.ds_initData.rowcount; i++){
        		var chk 	= nBBTDs.ds_initData.getColumn(i,"CHK");
        		var code 	= nBBTDs.ds_initData.getColumn(i,"CODE");
        		if(chk == 1 && !this.gfn_isNull(code))
        		{
        			nFs += this.gfn_isNull(nFs)? code : "," +code;
        			if(code == "X")
        				bbtChoiceFlag = true;
        		}
        	}

        	this.ds_search.setColumn(0,"P_BBTPROCESS"	, nFs);

        	if(bbtChoiceFlag)
        		this.ds_search.setColumn(0, "P_BBTNOSELECT",  "Y");
        	else
        		this.ds_search.setColumn(0, "P_BBTNOSELECT",  "N");

        	// HOLE
        	var nHOLEDs = this.tab_search.tab_page.form.div_holeMulti.form;
        	nFs			= "";
        	for(var i=0; i<nHOLEDs.ds_initData.rowcount; i++){
        		var chk 	= nHOLEDs.ds_initData.getColumn(i,"CHK");
        		var code 	= nHOLEDs.ds_initData.getColumn(i,"CODE");
        		if(chk == 1 && !this.gfn_isNull(code))
        		{
        			nFs += this.gfn_isNull(nFs)? code : "," +code;
        			if(code == "X")
        				holeChoiceFlag = true;
        		}
        	}

        	this.ds_search.setColumn(0,"P_HOLEPROCESS"	, nFs);


        	if(holeChoiceFlag)
        		this.ds_search.setColumn(0, "P_HOLENOSELECT",  "Y");
        	else
        		this.ds_search.setColumn(0, "P_HOLENOSELECT",  "N");


        	var productdefid = this.nfn_nvl(this.tab_search.tab_page.form.edt_productdefid.value, "");

        	// (21.08.03) 조회 조건 확인 필요
        	trace("[조회 조건] ---> "+this.ds_search.saveXML());

        	// (21.07.08) [품목코드 여부에 따르 쿼리 분기처리 - 확인]
        	if(this.nfn_isNull(productdefid))
        	{
        		this.productdefidCaseNull = true;
        		this.div_work.form.grd_mainNull.set_visible(true);
        		this.div_work.form.grd_main.set_visible(false);

        		var sSvcID 			= "getDefectRateByEquipmentTypeNullList";
        		var sController 	= "/dfm00300/getDefectRateByEquipmentTypeNullList.do";
        		var sInDatasets 	= "INPUT=ds_search";
        		var sOutDatasets 	= "ds_dt=output";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	}
        	else
        	{
        		this.productdefidCaseNull = false;
        		this.div_work.form.grd_mainNull.set_visible(false);
        		this.div_work.form.grd_main.set_visible(true);

        		var sSvcID 			= "getDefectRateByEquipmentTypeList";
        		var sController 	= "/dfm00300/getDefectRateByEquipmentTypeList.do";
        		var sInDatasets 	= "INPUT=ds_search";
        		var sOutDatasets 	= "ds_processSegmentList=output1 ds_dt=output2";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        		return;
        	}

        	switch(trId) {
        		case "selectProductDefVersionByRate": 			//[조회조건] rev 조회 성공

        			// (21.06.18) 전체조회 선택 된상태여야 한다 초기에.
        			this.ds_revCombo.setColumn(0,"CHK", "1");

        			// 멀티 콤보 적용
        			//trace(" 콤보값 조회 결과 : "+this.ds_revCombo.saveXML());
        			// 하위 멀티 콤보 이벤트 설정.
        			this.tab_search.tab_page.form.div_revMulti.form.fn_init_multicombo_data(this.ds_revCombo);
        			this.tab_search.tab_page.form.div_revMulti.form.ds_initData.applyChange();

        			// 연결된 하위 멀티 콤보 초기화
        			this.tab_search.tab_page.form.div_revMulti.form.btn_hide.addEventHandler( "onclick"
        									, this.fn_clickRev
        									, this
        									);
        			this.tab_search.tab_page.form.div_revMulti.form.btn_dropcombo.addEventHandler( "onclick"
        									, this.fn_clickRev
        									, this
        									);


        			if(this.isChangeCombo == true)
        				this.fn_changeCombo();

        			break;
        		case "getProcessByProductdef":

        			this.isChangeCombo = false;

        			console.log(this.ds_aoiCombo.saveXML());
        			console.log(this.ds_bbtCombo.saveXML());
        			console.log(this.ds_holeCombo.saveXML());

        			// (21.06.18) 전체조회 선택 된상태여야 한다 초기에.
        			this.ds_aoiCombo.setColumn(0,"CHK", "1");
        			this.ds_bbtCombo.setColumn(0,"CHK", "1");
        			this.ds_holeCombo.setColumn(0,"CHK", "1");

        			// 멀티 콤보 적용
        			//trace(" 콤보값 조회 결과 : "+this.ds_revCombo.saveXML());
        			// 하위 멀티 콤보 이벤트 설정.
        			this.tab_search.tab_page.form.div_aoiMulti.form.fn_init_multicombo_data(this.ds_aoiCombo);
        			this.tab_search.tab_page.form.div_aoiMulti.form.ds_initData.applyChange();

        			// 연결된 하위 멀티 콤보 초기화
        			this.tab_search.tab_page.form.div_aoiMulti.form.btn_hide.addEventHandler( "onclick"
        									, this.fn_clickAOI
        									, this
        									);
        			this.tab_search.tab_page.form.div_aoiMulti.form.btn_dropcombo.addEventHandler( "onclick"
        									, this.fn_clickAOI
        									, this
        									);



        			// 멀티 콤보 적용
        			//trace(" 콤보값 조회 결과 : "+this.ds_revCombo.saveXML());
        			// 하위 멀티 콤보 이벤트 설정.
        			this.tab_search.tab_page.form.div_bbtMulti.form.fn_init_multicombo_data(this.ds_bbtCombo);
        			this.tab_search.tab_page.form.div_bbtMulti.form.ds_initData.applyChange();

        			// 연결된 하위 멀티 콤보 초기화
        			this.tab_search.tab_page.form.div_bbtMulti.form.btn_hide.addEventHandler( "onclick"
        									, this.fn_clickBBT
        									, this
        									);
        			this.tab_search.tab_page.form.div_bbtMulti.form.btn_dropcombo.addEventHandler( "onclick"
        									, this.fn_clickBBT
        									, this
        									);


        			// 멀티 콤보 적용
        			//trace(" 콤보값 조회 결과 : "+this.ds_revCombo.saveXML());
        			// 하위 멀티 콤보 이벤트 설정.
        			this.tab_search.tab_page.form.div_holeMulti.form.fn_init_multicombo_data(this.ds_holeCombo);
        			this.tab_search.tab_page.form.div_holeMulti.form.ds_initData.applyChange();

        			// 연결된 하위 멀티 콤보 초기화
        			this.tab_search.tab_page.form.div_holeMulti.form.btn_hide.addEventHandler( "onclick"
        									, this.fn_clickHOLE
        									, this
        									);
        			this.tab_search.tab_page.form.div_holeMulti.form.btn_dropcombo.addEventHandler( "onclick"
        									, this.fn_clickHOLE
        									, this
        									);

        			//this.fn_initCombo();

        			break;

        		case "getDefectRateByEquipmentTypeNullList":

        			console.log("this.ds_detailDt.rowcount >>" + this.ds_detailDt.rowcount);

        			if(this.ds_dt.getRowCount() == 0)
        			{
        				//조회할 데이터가 없습니다.
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}


        			this.div_work.form.grd_mainNull.set_binddataset(this.ds_dt);

        			this.fn_searchNullFlag = true;

        			break;
        		case "getDefectRateByEquipmentTypeList":

        			console.log("this.ds_detailDt.rowcount >>" + this.ds_detailDt.rowcount);

        			if(this.ds_dt.getRowCount() == 0)
        			{
        				//조회할 데이터가 없습니다.
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}

        			// (21.07.08) 품목코드 있는 경우 동적 그리드 설정 부분 - 확인
        			this.fn_initMainGrid();


        			console.log(this.ds_dt.saveXML());

        			this.div_work.form.grd_main.set_binddataset(this.ds_dt);

        			this.fn_searchNullFlag = false;

        			break;

        		case "getDefectRateByEquipmentTypeNullDetailList":

        			this.div_work.form.cht_chartMain.set_binddataset(this.ds_barchartMainNull);
        			//this.div_work.form.cht_chartMain.set_categorycolumn("NAME");



        			this.ds_detailDt.set_enableevent(false);

        			this.ds_detailDt.filter("");

        			this.gf_distincDsFilter(this.ds_detailDt, "GROUPCODE");

        			this.ds_cmbDefectGrp.clearData();

        			for(var i = 0; i < this.ds_detailDt.getRowCount(); i++)
        			{
        				var nRow = this.ds_cmbDefectGrp.addRow();
        				this.ds_cmbDefectGrp.setColumn(nRow, "CHK", "0");
        				this.ds_cmbDefectGrp.setColumn(nRow, "CODE", this.ds_detailDt.getColumn(i, "GROUPCODE"));
        				this.ds_cmbDefectGrp.setColumn(nRow, "VALUE", this.ds_detailDt.getColumn(i, "GROUPNAME"));
        				this.ds_cmbDefectGrp.setColumn(nRow, "P_CODE", "");
        			}

        			this.ds_cmbDefectGrp.insertRow(0);
        			this.ds_cmbDefectGrp.setColumn(0, "CHK", "0");
        			this.ds_cmbDefectGrp.setColumn(0, "CODE", "");
        			this.ds_cmbDefectGrp.setColumn(0, "VALUE", this.nfn_getDictionaryname("ALLVIEWS",true));
        			this.ds_cmbDefectGrp.setColumn(0, "P_CODE", "");

        			this.ds_detailDt.filter("");

        			this.gf_distincDsFilter(this.ds_detailDt, "GROUPCODE,SUBCODE");

        			this.ds_cmbDefectCode.clearData();

        			for(var i = 0; i < this.ds_detailDt.getRowCount(); i++)
        			{
        				var nRow = this.ds_cmbDefectCode.addRow();
        				this.ds_cmbDefectCode.setColumn(nRow, "CHK", "0");
        				this.ds_cmbDefectCode.setColumn(nRow, "CODE", this.ds_detailDt.getColumn(i, "SUBCODE"));
        				this.ds_cmbDefectCode.setColumn(nRow, "VALUE", this.ds_detailDt.getColumn(i, "SUBNAME"));
        				this.ds_cmbDefectCode.setColumn(nRow, "P_CODE", this.ds_detailDt.getColumn(i, "GROUPCODE"));
        			}

        			this.ds_cmbDefectCode.insertRow(0);
        			this.ds_cmbDefectCode.setColumn(0, "CHK", "0");
        			this.ds_cmbDefectCode.setColumn(0, "CODE", "");
        			this.ds_cmbDefectCode.setColumn(0, "VALUE", this.nfn_getDictionaryname("ALLVIEWS",true));
        			this.ds_cmbDefectCode.setColumn(0, "P_CODE", "");

        			this.ds_detailDt.set_enableevent(true);

        			// 조회 후 멀티 콤보(상위설정)
        			this.div_work.form.div_defectGrpMulti.form.fn_init_multicombo_data(this.ds_cmbDefectGrp);
        			this.div_work.form.div_defectGrpMulti.form.ds_initData.applyChange();
        			// 연결된 하위 멀티 콤보 초기화
        			this.div_work.form.div_defectGrpMulti.form.btn_hide.addEventHandler( "onclick"
        									, this.fn_clickDefectGrp
        									, this
        									);
        			this.div_work.form.div_defectGrpMulti.form.btn_dropcombo.addEventHandler( "onclick"
        									, this.fn_clickDefectGrp
        									, this
        									);
        			// 하위 멀티 콤보 이벤트 설정.
        			this.div_work.form.div_defectCodeMulti.form.fn_init_multicombo_data(this.ds_cmbDefectCode);
        			this.div_work.form.div_defectCodeMulti.form.ds_initData.applyChange();
        			this.div_work.form.div_defectCodeMulti.form.btn_hide.addEventHandler( "onclick"
        									, this.fn_clickDefectCode
        									, this
        									);
        			this.div_work.form.div_defectCodeMulti.form.btn_dropcombo.addEventHandler( "onclick"
        									, this.fn_clickDefectCode
        									, this
        									);

        			this.ds_detailDt.filter("");

        			this.div_work.form.grd_detail.set_binddataset(this.ds_detailDt);

        			break;

        		case "getDefectRateByEquipmentTypeDetailList":

        			// (21.07.08) 조회 결과 확인 차트 및 하단 그리드 전
        			//ds_barchartMain=output1 ds_detailDt=output2
        			trace(" [ds_barchartMain] ---> : "+this.ds_barchartMain.saveXML());

        			trace(" [ds_detailDt] ---> : "+this.ds_detailDt.saveXML());

        			this.div_work.form.cht_chartMain.set_binddataset(this.ds_barchartMain);
        			//this.div_work.form.cht_chartMain.set_categorycolumn("NAME");


        			this.ds_detailDt.set_enableevent(false);

        			this.ds_detailDt.filter("");

        			this.gf_distincDsFilter(this.ds_detailDt, "GROUPCODE");

        			this.ds_cmbDefectGrp.clearData();

        			for(var i = 0; i < this.ds_detailDt.getRowCount(); i++)
        			{
        				var nRow = this.ds_cmbDefectGrp.addRow();
        				this.ds_cmbDefectGrp.setColumn(nRow, "CHK", "0");
        				this.ds_cmbDefectGrp.setColumn(nRow, "CODE", this.ds_detailDt.getColumn(i, "GROUPCODE"));
        				this.ds_cmbDefectGrp.setColumn(nRow, "VALUE", this.ds_detailDt.getColumn(i, "GROUPNAME"));
        				this.ds_cmbDefectGrp.setColumn(nRow, "P_CODE", "");
        			}

        			this.ds_cmbDefectGrp.insertRow(0);
        			this.ds_cmbDefectGrp.setColumn(0, "CHK", "0");
        			this.ds_cmbDefectGrp.setColumn(0, "CODE", "");
        			this.ds_cmbDefectGrp.setColumn(0, "VALUE", this.nfn_getDictionaryname("ALLVIEWS",true));
        			this.ds_cmbDefectGrp.setColumn(0, "P_CODE", "");

        			this.ds_detailDt.filter("");

        			this.gf_distincDsFilter(this.ds_detailDt, "GROUPCODE,SUBCODE");

        			this.ds_cmbDefectCode.clearData();

        			for(var i = 0; i < this.ds_detailDt.getRowCount(); i++)
        			{
        				var nRow = this.ds_cmbDefectCode.addRow();
        				this.ds_cmbDefectCode.setColumn(nRow, "CHK", "0");
        				this.ds_cmbDefectCode.setColumn(nRow, "CODE", this.ds_detailDt.getColumn(i, "SUBCODE"));
        				this.ds_cmbDefectCode.setColumn(nRow, "VALUE", this.ds_detailDt.getColumn(i, "SUBNAME"));
        				this.ds_cmbDefectCode.setColumn(nRow, "P_CODE", this.ds_detailDt.getColumn(i, "GROUPCODE"));
        			}

        			this.ds_cmbDefectCode.insertRow(0);
        			this.ds_cmbDefectCode.setColumn(0, "CHK", "0");
        			this.ds_cmbDefectCode.setColumn(0, "CODE", "");
        			this.ds_cmbDefectCode.setColumn(0, "VALUE", this.nfn_getDictionaryname("ALLVIEWS",true));
        			this.ds_cmbDefectCode.setColumn(0, "P_CODE", "");

        			this.ds_detailDt.set_enableevent(true);

        			// 조회 후 멀티 콤보(상위설정)
        			this.div_work.form.div_defectGrpMulti.form.fn_init_multicombo_data(this.ds_cmbDefectGrp);
        			this.div_work.form.div_defectGrpMulti.form.ds_initData.applyChange();
        			// 연결된 하위 멀티 콤보 초기화
        			this.div_work.form.div_defectGrpMulti.form.btn_hide.addEventHandler( "onclick"
        									, this.fn_clickDefectGrp
        									, this
        									);
        			this.div_work.form.div_defectGrpMulti.form.btn_dropcombo.addEventHandler( "onclick"
        									, this.fn_clickDefectGrp
        									, this
        									);
        			// 하위 멀티 콤보 이벤트 설정.
        			this.div_work.form.div_defectCodeMulti.form.fn_init_multicombo_data(this.ds_cmbDefectCode);
        			this.div_work.form.div_defectCodeMulti.form.ds_initData.applyChange();
        			this.div_work.form.div_defectCodeMulti.form.btn_hide.addEventHandler( "onclick"
        									, this.fn_clickDefectCode
        									, this
        									);
        			this.div_work.form.div_defectCodeMulti.form.btn_dropcombo.addEventHandler( "onclick"
        									, this.fn_clickDefectCode
        									, this
        									);

        			this.ds_detailDt.filter("");

        			this.div_work.form.grd_detail.set_binddataset(this.ds_detailDt);

        			break;

        		default:

        			break;
        	}
        };

        /*
         * 멀티 콤보 활성화시...
         */
        this.fn_clickRev = function (obj, e)
        {
        // 	// Layer 정보 초기화
        // 	this.ds_layerGroupSum.clearData();
        // 	this.tab_search.tab_page.form.edt_layer.set_value("");
        	console.log("obj ::" + obj);
        	console.log("e ::" + e);
        	trace("obj ::" + obj);
        	trace("e ::" + e);
        }

        this.fn_clickAOI = function (obj, e)
        {
        // 	// Layer 정보 초기화
        // 	this.ds_layerGroupSum.clearData();
        // 	this.tab_search.tab_page.form.edt_layer.set_value("");
        }

        this.fn_clickBBT = function (obj, e)
        {
        // 	// Layer 정보 초기화
        // 	this.ds_layerGroupSum.clearData();
        // 	this.tab_search.tab_page.form.edt_layer.set_value("");
        }

        this.fn_clickHOLE = function (obj, e)
        {
        // 	// Layer 정보 초기화
        // 	this.ds_layerGroupSum.clearData();
        // 	this.tab_search.tab_page.form.edt_layer.set_value("");
        }

        // this.fn_initCombo = function ()
        // {
        // 	if(this.ds_cbo_AOIProcess.rowcount == 0)
        // 	{
        // 		this.ds_cbo_AOIProcess.addColumn("CODEID", "STRING", 256 );
        // 		this.ds_cbo_AOIProcess.addColumn("CODENAME", "STRING", 256 );
        // 	}
        //
        // 	this.AddAll(this.ds_cbo_AOIProcess,"CODEID","CODENAME");
        //
        // 	if(this.ds_cbo_BBTProcess.rowcount == 0)
        // 	{
        // 		this.ds_cbo_BBTProcess.addColumn("CODEID", "STRING", 256 );
        // 		this.ds_cbo_BBTProcess.addColumn("CODENAME", "STRING", 256 );
        // 	}
        //
        // 	this.AddAll(this.ds_cbo_BBTProcess,"CODEID","CODENAME");
        //
        // 	if(this.ds_cbo_HoleProcess.rowcount == 0)
        // 	{
        // 		this.ds_cbo_HoleProcess.addColumn("CODEID", "STRING", 256 );
        // 		this.ds_cbo_HoleProcess.addColumn("CODENAME", "STRING", 256 );
        // 	}
        //
        // 	this.AddAll(this.ds_cbo_HoleProcess,"CODEID","CODENAME");
        //
        // 	var nRow = this.ds_cbo_AOIProcess.addRow();
        //
        // 	this.ds_cbo_AOIProcess.setColumn(nRow, "CODEID"  , "X");
        // 	this.ds_cbo_AOIProcess.setColumn(nRow, "CODENAME", "선택없음");
        //
        // 	nRow = this.ds_cbo_BBTProcess.addRow();
        //
        // 	this.ds_cbo_BBTProcess.setColumn(nRow, "CODEID"  , "X");
        // 	this.ds_cbo_BBTProcess.setColumn(nRow, "CODENAME", "선택없음");
        //
        // 	nRow = this.ds_cbo_HoleProcess.addRow();
        //
        // 	this.ds_cbo_HoleProcess.setColumn(nRow, "CODEID"  , "X");
        // 	this.ds_cbo_HoleProcess.setColumn(nRow, "CODENAME", "선택없음");
        //
        //
        // 	this.tab_search.tab_page.form.cbo_AOIProcess.set_index(0);
        // 	this.tab_search.tab_page.form.cbo_BBTProcess.set_index(0);
        // 	this.tab_search.tab_page.form.cbo_HoleProcess.set_index(0);
        // };



        this.fn_initMainForNullGrid = function ()
        {
        	this.div_work.form.grd_main.set_formats("");
        	this.div_work.form.grd_main.set_formats(this.div_work.form.grd_defaultNull.formats);

        	var colId = "";
        	var colIdx = 0;
        	var celIdx = 0;


        	for (var i = 0; i < this.ds_inspectionRateAnalysisTotalNull.colcount; i++)
        	{
        		colId = this.ds_inspectionRateAnalysisTotalNull.getColID(i);

        		colIdx = i + 1;

        		if(colId == "CHK")
        		{
        			this.div_work.form.grd_main.setFormatColProperty( colIdx , "size",  30 );
        		}
        		else if(colId == "PRODUCTDEFNAME")
        		{
        			this.div_work.form.grd_main.setFormatColProperty( colIdx , "size",  200 );
        		}
        		else if(colId == "PRODUCTDEFID")
        		{
        			this.div_work.form.grd_main.setFormatColProperty( colIdx , "size",  120 );
        		}
        		else if(colId == "PRODUCTDEFVERSION")
        		{
        			this.div_work.form.grd_main.setFormatColProperty( colIdx , "size",  80 );
        		}
        		else if(colId == "LOTID")
        		{
        			this.div_work.form.grd_main.setFormatColProperty( colIdx , "size",  200 );
        		}
        		else if(colId == "DEFECTRATE")
        		{
        			this.div_work.form.grd_main.insertContentsCol("body", colIdx);
        			this.div_work.form.grd_main.setFormatColProperty( colIdx , "size", 60 );
        		}
        		else if(colId == "DEFECTCOUNT" || colId == "QTY")
        		{
        			this.div_work.form.grd_main.insertContentsCol("body", colIdx);
        			this.div_work.form.grd_main.setFormatColProperty( colIdx , "size", 80 );
        		}
        		else if(colId == "PROCESSSEGMENTNAME")
        		{
        			this.div_work.form.grd_main.insertContentsCol("body", colIdx);
        			this.div_work.form.grd_main.setFormatColProperty( colIdx , "size",  200 );
        		}
        		else if(colId == "AREANAME")
        		{
        			this.div_work.form.grd_main.insertContentsCol("body", colIdx);
        			this.div_work.form.grd_main.setFormatColProperty( colIdx , "size",  100 );
        		}
        		else if(colId == "TRACKOUTTIME")
        		{
        			this.div_work.form.grd_main.insertContentsCol("body", colIdx);
        			this.div_work.form.grd_main.setFormatColProperty( colIdx , "size",  80 );
        		}
        	}

        	colIdx = 0;


        	for (var i = 0; i < this.ds_inspectionRateAnalysisTotalNull.colcount; i++)
        	{
        		colId = this.ds_inspectionRateAnalysisTotalNull.getColID(i);


        		colIdx = i + 1;

        		if(colId == "CHK")
        		{

        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "text", "bind:" + colId );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "textAlign",   "center" );
        		}
        		else if(colId == "PRODUCTDEFNAME" || colId == "PRODUCTDEFID" || colId == "PRODUCTDEFVERSION" || colId == "LOTID")
        		{
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "text", "bind:" + colId );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "textAlign",   "left" );
        		}
        		else if(colId == "DEFECTRATE")
        		{
        			this.div_work.form.grd_main.setCellProperty( "head", colIdx, "text",   "불량율" );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "text", "bind:" + colId );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "textAlign",   "right" );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "displaytype",   "mask" );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "maskeditformat",   "#,##0.00" );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "maskeditpostfixtext",   " %" );
        		}
        		else if(colId == "DEFECTCOUNT")
        		{
        			this.div_work.form.grd_main.setCellProperty( "head", colIdx, "text",   "불량수" );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "text", "bind:" + colId );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "textAlign",   "right" );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "displaytype",   "mask" );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "maskeditformat",   "#,###,###,##0.#####" );
        		}
        		else if(colId == "QTY")
        		{
        			this.div_work.form.grd_main.setCellProperty( "head", colIdx, "text",   "검사수" );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "text", "bind:" + colId );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "textAlign",   "right" );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "displaytype",   "mask" );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "maskeditformat",   "#,###,###,##0.#####" );
        		}
        		else if(colId == "PROCESSSEGMENTNAME")
        		{
        			this.div_work.form.grd_main.setCellProperty( "head", colIdx, "text",   "검사공정" );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "text", "bind:" + colId );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "textAlign",   "left" );
        		}
        		else if(colId == "AREANAME")
        		{
        			this.div_work.form.grd_main.setCellProperty( "head", colIdx, "text",   "작업장" );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "text", "bind:" + colId );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "textAlign",   "left" );
        		}
        		else if(colId == "TRACKOUTTIME")
        		{
        			this.div_work.form.grd_main.setCellProperty( "head", colIdx, "text",   "완료시간" );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "text", "bind:" + colId );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "textAlign",   "center" );
        		}
        	}


        	this.div_work.form.grd_main.set_enableredraw(true);
        };

        this.fn_initMainGrid = function ()
        {
        	this.div_work.form.grd_main.set_formats("");
        	this.div_work.form.grd_main.set_formats(this.grd_default.formats);




        	var aoiHeadRowOwnFlag = true;
        	var bbtHeadRowOwnFlag = true;
        	var holeHeadRowOwnFlag = true;


        // 	this.gf_distincDsFilter(this.ds_dt, "EQUIPMENTTYPE");
        //
        // 	this.ds_distinctDt.clearData();
        // 	this.ds_distinctDt.copyData(this.ds_dt, true);
        //
        // 	this.ds_dt.filter("");

        	var colId = "";
        	var type  = "";
        	var colIdx = 3;
        	var celIdx = 0;

        	for (var i = 0; i < this.ds_processSegmentList.rowcount; i++)
        	{
        		colIdx++;

        		this.div_work.form.grd_main.insertContentsCol("body", colIdx);
        		this.div_work.form.grd_main.setFormatColProperty( colIdx , "size", 120 );
        	}


        	colIdx = 3;
        	aoiHeadRowOwnFlag = true;
        	bbtHeadRowOwnFlag = true;
        	holeHeadRowOwnFlag = true;

        	var aoiTitleCnt = 0;
        	var bbtTitleCnt = 0;
        	var holeTitleCnt = 0;

        	this.ds_processSegmentList.filter("");
        	this.ds_processSegmentList.filter("EQUIPMENTTYPE == 'AOI'");
        	var aoiColSpan = this.ds_processSegmentList.getRowCount();
        	this.aoidefectrateTotal = this.ds_processSegmentList.getRowCount() - 1;
        	this.ds_processSegmentList.filter("");
        	this.ds_processSegmentList.filter("EQUIPMENTTYPE == 'BBT'");
        	var bbtColSpan = this.ds_processSegmentList.getRowCount();
        	this.bbtdefectrateTotal = this.ds_processSegmentList.getRowCount() - 1;
        	this.ds_processSegmentList.filter("");
        	this.ds_processSegmentList.filter("EQUIPMENTTYPE == 'HOLE'");
        	var holeColSpan = this.ds_processSegmentList.getRowCount();
        	this.holedefectrateTotal = this.ds_processSegmentList.getRowCount() - 1;
        	this.ds_processSegmentList.filter("");

        	var colNm = "";
        	var colType = "";

        	for (var i = 0; i < this.ds_processSegmentList.rowcount; i++)
        	{

        		colType = this.ds_processSegmentList.getColumn(i, "EQUIPMENTTYPE");
        		colId = this.ds_processSegmentList.getColumn(i, "PROCESSSEGMENTID");
        		colNm = this.ds_processSegmentList.getColumn(i, "PROCESSSEGMENTNAME");

        		colIdx++;

        		this.ds_processSegmentList.getColID(i)

        		if(colType == "AOI")
        		{
        			var colIdx2 =  colIdx + aoiColSpan + bbtColSpan + holeColSpan;

        			this.div_work.form.grd_main.setCellProperty( "head", colIdx, "text",   colType );
        			this.div_work.form.grd_main.setCellProperty( "head", colIdx, "cssclass",   "cell_headMaster" );


        			this.div_work.form.grd_main.setCellProperty( "head", colIdx2, "text",   colNm);
        			this.div_work.form.grd_main.setCellProperty( "head", colIdx2, "cssclass",   "cell_headMaster" );


        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "text", "bind:M" + colId);
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "textAlign",   "right" );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "displaytype",   "mask" );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "maskeditformat",   "#,##0.00" );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "maskeditpostfixtext",   " %" );

        			aoiTitleCnt++;
        		}
        		else if(colType == "BBT")
        		{
        			var colIdx2 =  colIdx + aoiColSpan + bbtColSpan + holeColSpan;

        			this.div_work.form.grd_main.setCellProperty( "head", colIdx, "text",   colType );
        			this.div_work.form.grd_main.setCellProperty( "head", colIdx, "cssclass",   "cell_headMaster" );


        			this.div_work.form.grd_main.setCellProperty( "head", colIdx2, "text",   colNm );
        			this.div_work.form.grd_main.setCellProperty( "head", colIdx2, "cssclass",   "cell_headMaster" );


        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "text","bind:M" + colId);
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "textAlign",   "right" );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "displaytype",   "mask" );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "maskeditformat",   "#,##0.00" );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "maskeditpostfixtext",   " %" );


        			bbtTitleCnt++;
        		}
        		else if(colType == "HOLE")
        		{
        			var colIdx2 =  colIdx + aoiColSpan + bbtColSpan + holeColSpan;

        			this.div_work.form.grd_main.setCellProperty( "head", colIdx, "text",   "AOI HOLE" );
        			this.div_work.form.grd_main.setCellProperty( "head", colIdx, "cssclass",   "cell_headMaster" );


        			this.div_work.form.grd_main.setCellProperty( "head", colIdx2, "text",   colNm );
        			this.div_work.form.grd_main.setCellProperty( "head", colIdx2, "cssclass",   "cell_headMaster" );

        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "text", "bind:M" + colId);
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "textAlign",   "right" );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "displaytype",   "mask" );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "maskeditformat",   "#,##0.00" );
        			this.div_work.form.grd_main.setCellProperty( "body", colIdx, "maskeditpostfixtext",   " %" );

        			holeTitleCnt++;
        		}

        	}



        	aoiTitleCnt = 0;
        	bbtTitleCnt = 0;
        	holeTitleCnt = 0;


        	this.ds_aoiTitleList.clearData();
        	this.ds_bbtTitleList.clearData();
        	this.ds_holeTitleList.clearData();

        	colId = "";
        	type  = "";
        	colIdx = 3;
        	celIdx = 0;

        	aoiHeadRowOwnFlag = true;
        	bbtHeadRowOwnFlag = true;
        	holeHeadRowOwnFlag = true;

        	var mergeIdx = 0;



        	for (var i = (this.ds_processSegmentList.rowcount - 1); i > -1; i--)
        	{

        		type = this.ds_processSegmentList.getColumn(i, "EQUIPMENTTYPE");

        		if(type == "AOI" && aoiHeadRowOwnFlag)
        		{
        			mergeIdx = 4 + i;
        			console.log("mergeIdx >>" + mergeIdx);
        			var nCell = this.div_work.form.grd_main.mergeContentsCell("head",0, mergeIdx - this.aoidefectrateTotal,0, mergeIdx, mergeIdx, false);
        			aoiHeadRowOwnFlag = false;
        			console.log("nCell >>" + nCell);

        		}
        		else if(type == "HOLE" && holeHeadRowOwnFlag)
        		{
        			mergeIdx = 4 + i; // 5, 6, 7  // 6, 7. 8, // 10. 11. 12
        			console.log("mergeIdx >>" + mergeIdx);
        			var nCell = this.div_work.form.grd_main.mergeContentsCell("head",0, mergeIdx - this.holedefectrateTotal,0, mergeIdx, mergeIdx, false);
        			holeHeadRowOwnFlag = false;
        			console.log("nCell >>" + nCell);

        		}
        		else if(type == "BBT" && bbtHeadRowOwnFlag)
        		{
        			mergeIdx = 4 + i;
        			console.log("mergeIdx >>" + mergeIdx);
        			var nCell = this.div_work.form.grd_main.mergeContentsCell("head",0, mergeIdx - this.bbtdefectrateTotal,0, mergeIdx, mergeIdx, false);
        			bbtHeadRowOwnFlag = false;
        			console.log("nCell >>" + nCell);

        		}
        	}


        	this.div_work.form.grd_main.set_enableredraw(true);

        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {

        	var rtn = this.fv_rtnValue;
        	if (this.nfn_isNull(rtn))
        	{
        		return;
        	};

        	switch (sPopupId)
        	{
        		case "SCH_ITEMCODE" : //
        		{
        			var nItemCode	= rtn[0];
        			var nItemNm		= rtn[1];

        			this.tab_search.tab_page.form.edt_lotid.set_value("");
        			this.tab_search.tab_page.form.edt_productdefid.set_value(nItemCode);
        			this.tab_search.tab_page.form.edt_productname.set_value(nItemNm);

        			this.isChangeCombo = true;
        			// Rev 조회(필요함)
        			this.fn_setRev(nItemCode);



        		}
        		break;
        		case "SCH_LOTNo" :
        		{
        			var nLotNo 		= rtn[0];
        			var nItemCode	= rtn[1];
        			var nItemNm		= rtn[2];

        			this.tab_search.tab_page.form.edt_lotid.set_value(nLotNo);
        			this.tab_search.tab_page.form.edt_productdefid.set_value(nItemCode);
        			this.tab_search.tab_page.form.edt_productname.set_value(nItemNm);

        			this.isChangeCombo = true;
        			// Rev 조회(필요함)
        			this.fn_setRev(nItemCode);
        		}
        		break;

        		default:
        		{
        		}
        		break;
        	};

        	// trace( 'xml ?' +  this.ds_search.saveXML());
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        this.fn_clearCustom = function()
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();


        	// 지우고 콤보 초기화 필요
        	this.tab_search.tab_page.form.edt_lotid.set_value("");
        	this.tab_search.tab_page.form.edt_productdefid.set_value("");
        	this.tab_search.tab_page.form.edt_productname.set_value("");

        	// 검색조건 달력 설정
        	this.tab_search.tab_page.form.cbo_period.set_value("thisweek");
        	this.tab_search_tab_page_cbo_period_onitemchanged();

        	this.ds_aoiCombo.clearData();
        	this.ds_bbtCombo.clearData();
        	this.ds_holeCombo.clearData();

        	this.isChangeCombo = true;
        	// Rev 조회
        	this.fn_setRev("");
        };



        this.fn_changeCombo = function ()
        {
        	this.ds_aoiCombo.clearData();
        	this.ds_bbtCombo.clearData();
        	this.ds_holeCombo.clearData();


        	this.ds_paramAOI.clearData();
        	this.ds_paramAOI.addRow();


        	this.ds_paramAOI.setColumn(0, "P_LOTID", this.nfn_nvl(this.ds_search.getColumn(0, "P_LOTID"), ""));
        	this.ds_paramAOI.setColumn(0, "P_ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_paramAOI.setColumn(0, "P_PLANTID", this.gf_getSiteType());
        	this.ds_paramAOI.setColumn(0, "P_INSPECTIONTYPE", "AOIInspection" );
        	this.ds_paramAOI.setColumn(0, "P_PRODUCTDEFID", this.nfn_nvl(this.ds_search.getColumn(0, "P_PRODUCTDEFID"), "") );
        	this.ds_paramAOI.setColumn(0, "P_PRODUCTDEFVERSION", this.nfn_nvl(this.ds_search.getColumn(0, "P_PRODUCTDEFVERSION"), "") );
        	this.ds_paramAOI.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType() );
        	this.ds_paramAOI.setColumn(0, "VERSION", "10001");


        	this.ds_paramBBT.clearData();
        	this.ds_paramBBT.addRow();

        	this.ds_paramBBT.setColumn(0, "P_LOTID", this.nfn_nvl(this.ds_search.getColumn(0, "P_LOTID"), ""));
        	this.ds_paramBBT.setColumn(0, "P_ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_paramBBT.setColumn(0, "P_PLANTID", this.gf_getSiteType());
        	this.ds_paramBBT.setColumn(0, "P_INSPECTIONTYPE", "BBTInspection" );
        	this.ds_paramBBT.setColumn(0, "P_PRODUCTDEFID", this.nfn_nvl(this.ds_search.getColumn(0, "P_PRODUCTDEFID"), "") );
        	this.ds_paramBBT.setColumn(0, "P_PRODUCTDEFVERSION", this.nfn_nvl(this.ds_search.getColumn(0, "P_PRODUCTDEFVERSION"), "") );
        	this.ds_paramBBT.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType() );
        	this.ds_paramBBT.setColumn(0, "VERSION", "10001");

        	this.ds_paramHold.clearData();
        	this.ds_paramHold.addRow();

        	this.ds_paramHold.setColumn(0, "P_LOTID", this.nfn_nvl(this.ds_search.getColumn(0, "P_LOTID"), ""));
        	this.ds_paramHold.setColumn(0, "P_ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_paramHold.setColumn(0, "P_PLANTID", this.gf_getSiteType());
        	this.ds_paramHold.setColumn(0, "P_INSPECTIONTYPE", "AOIHoleInspection" );
        	this.ds_paramHold.setColumn(0, "P_PRODUCTDEFID", this.nfn_nvl(this.ds_search.getColumn(0, "P_PRODUCTDEFID"), "") );
        	this.ds_paramHold.setColumn(0, "P_PRODUCTDEFVERSION", this.nfn_nvl(this.ds_search.getColumn(0, "P_PRODUCTDEFVERSION"), "") );
        	this.ds_paramHold.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType() );
        	this.ds_paramHold.setColumn(0, "VERSION", "10001");


        	//InitializeComboBox
        	//콤보박스 ds_param
        	var sSvcID 			= "getProcessByProductdef";
        	var sController 	= "/dfm00300/getProcessByProductdef.do";
        	var sInDatasets 	= "INPUT1=ds_paramAOI INPUT2=ds_paramBBT INPUT3=ds_paramHold";
        	var sOutDatasets 	= "ds_aoiCombo=output1 ds_bbtCombo=output2 ds_holeCombo=output3";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 품목코드에 해당 하는 Rev 조회
         */
        this.fn_setRev = function (nItemCd)
        {
        // 	//trace(" [조회 조건] ===> : "+nItemCd);
        	this.ds_revCombo.clearData();

        	this.ds_search.setColumn(0, "SESSION_LANGUAGETYPE",  this.gf_getLanguageType());

        	var sSvcID 			= "selectProductDefVersionByRate";
        	var sController 	= "/dfm00400/selectProductDefVersionByRate.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_revCombo=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        this.tab_search_tab_page_btn_popup_onclick = function(obj, e)
        {

        	// gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
        	//-----------------
        	// arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅 : C:
        	// popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        	// popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        	// rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        	// paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        	// paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        	// searchStr   : 팝업 조회조건 콤보값 = 조회 값
        	var oArg = {};
        	switch(obj.name)
        	{
        		case "btn_productdefid" :
        		{
        			var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        			var nSite 			= this.gf_getSiteType();		//Site
        			var popupId = "SCH_ITEMCODE";
        			var oArg = {};
        			var opts = "width=650,height=500";

        			// 기 입력값 있는지 확인
        			var nSearch 	= this.tab_search.tab_page.form.edt_productdefid.value;
        			var nPeriodfr 	= this.tab_search.tab_page.form.div_dateFrom.form.calStart.value;
        			var nPeriodto 	= this.tab_search.tab_page.form.div_dateTo.form.calStart.value;

        			if(!this.gfn_isNull(nSearch))
        			{
        				// 기입력된 값이 있으면
        				oArg.arg_itemCode	= nSearch;
        			}
        			oArg.arg_periodfr 		= nPeriodfr;
        			oArg.arg_periodto 		= nPeriodto;

        			this.gfn_openPopup(popupId,"dfm::DFM00401P.xfdl" ,oArg ,opts);
        		}
        		break;
        		case "btn_lotid" :
        		{
        			var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        			var nSite 			= this.gf_getSiteType();		//Site
        			var popupId = "SCH_LOTNo";
        			var oArg = {};
        			var opts = "width=850,height=500";

        			// 기 입력값 있는지 확인
        			var nSearch 	= this.tab_search.tab_page.form.edt_lotid.value;
        			var nPeriodfr 	= this.tab_search.tab_page.form.div_dateFrom.form.calStart.value;
        			var nPeriodto 	= this.tab_search.tab_page.form.div_dateTo.form.calStart.value;

        			if(!this.gfn_isNull(nSearch))
        			{
        				// 기입력된 값이 있으면
        				oArg.arg_lotNo 		= nSearch;
        			}
        			oArg.arg_periodfr 	= nPeriodfr;
        			oArg.arg_periodto 	= nPeriodto;

        			this.gfn_openPopup(popupId,"dfm::DFM00400P.xfdl" ,oArg ,opts);
        		}
        		break;

        		default :
        		{
        		}
        		break;
        	};
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/


        this.div_header_btn_apply_onclick = function(obj,e)
        {
        	this.ds_detailDt.clearData();
        	this.ds_barchartMainNull.clearData();
        	this.ds_barchartMain.clearData();
        	this.ds_cmbDefectGrp.clearData();
        	this.ds_cmbDefectCode.clearData();

        	var productdefid = this.nfn_nvl(this.tab_search.tab_page.form.edt_productdefid.value, "");

        	if(this.nfn_isNull(productdefid))   //품목코드 미입력시
        	{
        		this.ds_dt.set_enableevent(false);
        		this.ds_dt.filter("");
        		this.ds_dt.filter("CHK == '1'");
        		this.ds_distinctDt.clearData();
        		this.ds_distinctDt.copyData(this.ds_dt , true);

        		if(this.ds_distinctDt.rowcount == 0)
        		{
        			this.gfn_Message("GridNoChecked", null, "info", "ok");
        			this.ds_dt.filter("");
        			this.ds_dt.set_enableevent(true);
        			return;
        		}


        		this.ds_dt.filter("");
        		this.ds_dt.set_enableevent(true);

        		var sSvcID 			= "getDefectRateByEquipmentTypeNullDetailList";
        		var sController 	= "/dfm00300/getDefectRateByEquipmentTypeNullDetailList.do";
        		var sInDatasets 	= "INPUT=ds_search INPUT2=ds_distinctDt";
        		var sOutDatasets 	= "ds_barchartMainNull=output1 ds_detailDt=output2";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        		this.div_work.form.cht_chartMain.set_binddataset(this.ds_barchartMainNull);

        	}
        	else  //품목코드 입력시
        	{
        		this.ds_dt.set_enableevent(false);
        		this.ds_dt.filter("");
        		this.ds_dt.filter("CHK == '1'");
        		this.ds_distinctDt.clearData();
        		this.ds_distinctDt.copyData(this.ds_dt , true);

        		if(this.ds_distinctDt.rowcount == 0)
        		{
        			this.gfn_Message("GridNoChecked", null, "info", "ok");
        			this.ds_dt.filter("");
        			this.ds_dt.set_enableevent(true);
        			return;
        		}


        		this.ds_dt.filter("");
        		this.ds_dt.set_enableevent(true);

        		var sSvcID 			= "getDefectRateByEquipmentTypeDetailList";
        		var sController 	= "/dfm00300/getDefectRateByEquipmentTypeDetailList.do";
        		var sInDatasets 	= "INPUT=ds_search INPUT2=ds_distinctDt INPUT3=ds_processSegmentList";
        		var sOutDatasets 	= "ds_barchartMain=output1 ds_detailDt=output2";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        		this.div_work.form.cht_chartMain.set_binddataset(this.ds_barchartMain);

        	}

        };



        // this.div_work_cht_chartMain_ondrawend = function(obj:nexacro.BasicChart,e:nexacro.ChartDrawEndEventInfo)
        // {
        //
        //   // tick label을 찾아 위치정보를 얻는다.
        //   // param 1 : category / value
        //   // param 2 : tick 이 있어야 하며 tick label text
        //   var pos = obj.getAxisPointPos("valueaxis", "60");
        //
        //   if(!pos) return;
        //
        //   //var text = "Average";
        //   var fontstyle = '10pt 맑은 고딕';
        //
        //   // addUserControl
        //   // series group에 control을 생성한다.
        //   // param 1 : control name
        //   // param 2 : text / rect / path / arc
        //   var item = obj.addUserControl("itemtext1", "text");
        //   item.set_font(fontstyle);
        //   item.set_color("#f26522");
        //
        //   // get font size
        //   var fontobj = nexacro.FontObject(fontstyle);
        //   //var sz = nexacro.getTextSize(text, fontobj);
        //
        //   fontobj = null;
        //   item.set_x(pos.x);
        //   item.set_y(pos.y - 10);
        //   item.set_text(text);
        //
        //   var item2 = obj.addUserControl("itemrect1", "rect");
        //   item2.set_x(pos.x-1);
        //   item2.set_y(pos.y-1);
        //   item2.set_width(obj.getBorderPosInfo().w);
        //   item2.set_height(1);
        //   item2.set_fillstyle("#f26522");
        //
        //
        //   obj.userControlDraw();
        //
        //   // delete
        //   /*
        //   obj.removeUserControl("itemtext1");
        //   obj.userControlDraw();
        //   */
        // };

        this.cbo_defectGroup_onitemchanged = function(obj,e)
        {
        	this.ds_subDt.filter("GROUPCODE == '" + this.div_work.form.cbo_defectGroup.value + "'");
        };

        this.div_work_btn_filter_onclick = function(obj,e)
        {
        	/*
        	// Lot no  조회 필수값 체크
        	if(!this.fn_chkLotNo()) return;

        	if(this.ds_defectGrp.rowcount == 0)
        	{
        		this.gfn_Message("NoSelectData", null, "warning", "ok");
        		return;
        	}
        	*/

        	var nFs			= "";		// 필터 조건
        	var nFsub		= "";		// 필터 조건(세부)

        	// 상위
        	var nDefectGrpDs = this.div_work.form.div_defectGrpMulti.form;

        	this.ds_detailDt.filter("");		// 필터 초기화
        	for(var i=0; i<nDefectGrpDs.ds_initData.rowcount; i++){
        		var chk = nDefectGrpDs.ds_initData.getColumn(i,"CHK");
        		var code = nDefectGrpDs.ds_initData.getColumn(i,"CODE");
        		if(chk == 1 && !this.gfn_isNull(code))
        		{
        			nFs += this.gfn_isNull(nFs) ? "GROUPCODE == '"+code+"'" : " || GROUPCODE == '"+code+"'";
        		}
        	}

        	if(!this.gfn_isNull(nFs))
        	{
        		nFs = "("+nFs+")";
        	}

        	// 하위
        	var nDefectCodeDs = this.div_work.form.div_defectCodeMulti.form;

        	for(var i=0; i<nDefectCodeDs.ds_initData.rowcount; i++){
        		var chk = nDefectCodeDs.ds_initData.getColumn(i,"CHK");
        		var code = nDefectCodeDs.ds_initData.getColumn(i,"CODE");
        		if(chk == 1 && !this.gfn_isNull(code))
        		{
        			nFsub += this.gfn_isNull(nFsub) ? "SUBCODE == '"+code+"'" : " || SUBCODE == '"+code+"'";
        		}
        	}

        	if(!this.gfn_isNull(nFsub))
        	{
        		nFsub = "&& ("+nFsub+")";
        	}
        	nFs = nFs+nFsub;
        	trace(" ------ (필터 조건) : "+nFs);
        	this.ds_detailDt.filter("");		// 필터 초기화
        	this.ds_detailDt.filter(nFs);		// 필터 설정



        };

        this.div_header_btn_reset_onclick = function(obj,e)
        {
        	this.ds_cmbDefectGrp.clearData();
        	this.ds_cmbDefectCode.clearData();

        	var productdefid = this.nfn_nvl(this.tab_search.tab_page.form.edt_productdefid.value, "");

        	if(this.nfn_isNull(productdefid))
        	{

        		this.ds_inspectionRateAnalysisTotalNull.clearData();
        	}
        	else
        	{
        		this.ds_inspectionRateAnalysisTotal.clearData();
        	}

        	this.ds_inspResultDt.clearData();

        	// 조회 후 멀티 콤보(상위설정)
        	this.div_work.form.div_defectGrpMulti.form.fn_init_multicombo_data(this.ds_cmbDefectGrp);
        	this.div_work.form.div_defectGrpMulti.form.ds_initData.applyChange();

        	// 하위 멀티 콤보 이벤트 설정.
        	this.div_work.form.div_defectCodeMulti.form.fn_init_multicombo_data(this.ds_cmbDefectCode);
        	this.div_work.form.div_defectCodeMulti.form.ds_initData.applyChange();
        };

        /*
         * 하위 멀티 콤보값 초기화
         */
        this.fn_clickDefectGrp = function (obj, e)
        {
        	//trace("이벤트 발생!!!! 하위 데이터셋 초기화");
        	this.div_work.form.div_defectCodeMulti.form.fn_init_multicombo_data(this.ds_cmbDefectCode);
        	this.div_work.form.div_defectCodeMulti.form.ds_initData.applyChange();
        	this.div_work.form.div_defectCodeMulti.form.edt_comboResult.set_value("데이터 미 선택");
        };

        /*
         * 하위 멀티 콤보 설정
         */
        this.fn_clickDefectCode =  function (obj, e)
        {
        	//trace("상위값 있으면 필터링 걸어야 한다.");
        	var nPreFilter = "";
        	nPreFilter = this.ds_cmbDefectCode.filterstr;

        	var nDefectGrpDs = this.div_work.form.div_defectGrpMulti.form;
        	var nFs			= "";
        	this.ds_cmbDefectCode.filter("");		// 필터 초기화
        	for(var i=0; i<nDefectGrpDs.ds_initData.rowcount; i++){
        		var chk = nDefectGrpDs.ds_initData.getColumn(i,"CHK");
        		var code = nDefectGrpDs.ds_initData.getColumn(i,"CODE");
        		if(chk == 1 && !this.gfn_isNull(code))
        		{
        			nFs += this.gfn_isNull(nFs) ? "P_CODE == '*' || P_CODE == '"+code+"'" : " || P_CODE == '"+code+"'";
        		}
        	}
        	//trace("필터 조건 : "+nFs);
        	//trace(" ====> : "+nPreFilter+" || "+(nFs != nPreFilter));0
        	this.ds_cmbDefectCode.filter(nFs);		// 필터 초기화
        	if(nFs != nPreFilter)			// 이전 필터 조건과 같지 않으면 설정(21.05.12) 이전 선택값 가지고 있기 위해
        	{
        		this.ds_cmbDefectCode.filter(nFs);		// 필터 초기화
        		this.div_work.form.div_defectCodeMulti.form.fn_init_multicombo_data(this.ds_cmbDefectCode);
        		this.div_work.form.div_defectCodeMulti.form.ds_initData.applyChange();
        		this.div_work.form.div_defectCodeMulti.form.edt_comboResult.set_value("데이터 미 선택");
        	}

        };


        this.ds_dt_oncolumnchanged = function(obj,e)
        {

        	if(this.fn_searchNullFlag)
        	{
        		console.log("e.columnid >>" + e.columnid);
        		console.log("e.newvalue >>" + e.newvalue);

        		if(e.columnid == "CHK" && e.newvalue == "1")
        		{
        			console.log("xxx");
        			obj.setColumn(this.ds_dt_oldrow, "CHK", "0");
        		}
        	}
        };


        this.ds_dt_onrowposchanged = function(obj,e)
        {
        	this.ds_dt_oldrow = e.oldrow;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.tab_page.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.tab_page.form.btn_clear2.addEventHandler("onclick",this.fn_clearCustom,this);
            this.tab_search.tab_page.form.cbo_period.addEventHandler("onitemchanged",this.tab_search_tab_page_cbo_period_onitemchanged,this);
            this.tab_search.tab_page.form.btn_productdefid.addEventHandler("onclick",this.tab_search_tab_page_btn_popup_onclick,this);
            this.tab_search.tab_page.form.btn_lotid.addEventHandler("onclick",this.tab_search_tab_page_btn_popup_onclick,this);
            this.tab_search.tab_page.form.div_dateFrom.addEventHandler("onkeydown",this.fn_preiodChang,this);
            this.tab_search.tab_page.form.div_dateTo.addEventHandler("onkeydown",this.fn_preiodChang,this);
            this.div_work.form.btn_filter.addEventHandler("onclick",this.div_work_btn_filter_onclick,this);
            this.div_header.form.btn_reset.addEventHandler("onclick",this.div_header_btn_reset_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_apply.addEventHandler("onclick",this.div_header_btn_apply_onclick,this);
            this.grd_default.addEventHandler("onheadclick",this.div_work_grd_main_onheadclick,this);
            this.grd_default.addEventHandler("oncellclick",this.div_work_grd_main_oncellclick,this);
            this.ds_dt.addEventHandler("oncolumnchanged",this.ds_dt_oncolumnchanged,this);
            this.ds_dt.addEventHandler("onrowposchanged",this.ds_dt_onrowposchanged,this);
        };
        this.loadIncludeScript("DFM00300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
