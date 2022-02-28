(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM02400M");
            this.set_titletext("품목별 수율현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANT\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOCALEDIV\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LINKPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_SHOWINTERSECT\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTIONDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTSTANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"P_INSPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_INSPECTIONPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODSHAPETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_EXCEPTDEFECTCLASS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processSegmentByYieldList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_yieldRateByProductList", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTSHAPE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANYCLIENT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"LOCALE\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPMENTSITE\" type=\"STRING\" size=\"256\"/><Column id=\"RELATEDSITE\" type=\"STRING\" size=\"256\"/><Column id=\"INTERSECTSITE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PCSYIELDRATE\" type=\"STRING\" size=\"256\"/><Column id=\"PCSDEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"PCSINPUTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSDEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSNORMALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"AREAYIELDRATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREADEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"AREAINPUTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"AREADEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"AREANORMALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PRICEYIELDRATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRICEDEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRICEINPUTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PRICEDEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PRICENORMALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INSPPROCESSSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectStatusByProductList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTSHAPE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANYCLIENT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"LOCALE\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPMENTSITE\" type=\"STRING\" size=\"256\"/><Column id=\"RELATEDSITE\" type=\"STRING\" size=\"256\"/><Column id=\"INTERSECTSITE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PCSYIELDRATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PCSDEFECTRATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PCSINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\" prop=\"AVG\"/><Column id=\"PCSDEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\" prop=\"SUM\"/><Column id=\"AREAYIELDRATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREADEFECTRATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AREAINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\" prop=\"AVG\"/><Column id=\"AREADEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\" prop=\"SUM\"/><Column id=\"PRICEYIELDRATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRICEDEFECTRATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRICEINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\" prop=\"AVG\"/><Column id=\"PRICEDEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\" prop=\"SUM\"/><Column id=\"INSPPROCESSSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOINCODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectDetailByProductList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTSHAPE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANYCLIENT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"LOCALE\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPMENTSITE\" type=\"STRING\" size=\"256\"/><Column id=\"RELATEDSITE\" type=\"STRING\" size=\"256\"/><Column id=\"INTERSECTSITE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ROOTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOVERYSITE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\" prop=\"SUM\"/><Column id=\"DEFECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSDEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\" prop=\"SUM\"/><Column id=\"PCSDEFECTRATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTPRICE\" type=\"BIGDECIMAL\" size=\"256\" prop=\"SUM\"/><Column id=\"REASONSITE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\" prop=\"SUM\"/><Column id=\"REASONDEFECTRATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPPROCESSSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOINCODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grdMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"GRD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FUNC\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GRD_NM\">grd_yieldRateByProductList</Col><Col id=\"MENU_NM\">LOT별 수율현황</Col><Col id=\"DICTIONARYID\">MENU_PG-QC-0470</Col><Col id=\"FUNC\">fn_openYieldByLot</Col></Row><Row><Col id=\"MENU_NM\">이상발생현황</Col><Col id=\"FUNC\">fn_openAccurence</Col><Col id=\"GRD_NM\">grd_yieldRateByProductList</Col><Col id=\"DICTIONARYID\">MENU_PG-SG-0450</Col></Row><Row><Col id=\"MENU_NM\">Affect LOT 산정(출)</Col><Col id=\"GRD_NM\">grd_yieldRateByProductList</Col><Col id=\"DICTIONARYID\">MENU_PG-QC-0556</Col><Col id=\"FUNC\">fn_openAffectLot</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_search);
            obj.set_text("불량명");
            this.tab_search.addChild(obj.name, obj);

            obj = new Combo("cbo_localeDiv","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,LOCALEDIVISION,ALL,Y,Y");
            obj.set_text("유효");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_localeDiv","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("16");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("LOCALE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_plantId","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("17");
            obj.set_text("출하SITE");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SHIPMENTSITE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_period","10","135","94","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("3");
            obj.set_innerdataset("gds_period");
            obj.set_codecolumn("code");
            obj.set_datacolumn("desc");
            obj.set_text("금일");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta__linkPlantId","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("18");
            obj.set_text("연계SITE");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("BD1A7499ABDC40EBAFC6608B3A41E9BD");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_showInterSect","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("19");
            obj.set_text("구간표시");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("2F11CD663D5D4E0FB7FB2D51CFF17908");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_period","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("20");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("SEARCHPERIOD");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_productionDivision","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("21");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTPRODUCTTYPE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_lotStandard","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("22");
            obj.set_text("LOT 기준");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("FE2869CDA50145B287FF1E06A7D3C099");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_inspType","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("23");
            obj.set_text("검사기준");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("EB38046A433441468685F94A94AA0B59");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_inspectionProcess","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("24");
            obj.set_text("검사공정지정");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("551745D7DB044BE6AF3387741463BCA0");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_prodShapeType","0","260","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("25");
            obj.set_text("TYPE");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("701B101FEBC14B9A87C8DB77D7F23880");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_customer","0","285","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("26");
            obj.set_text("고객");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CUSTOMER");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_productionId","0","310","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("27");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODENAME");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_plantId","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("1");
            obj.set_usesoftkeyboard("true");
            obj.set_codecolumn("C,SiteType,ALL,Y,N");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_production_nm","108","335","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_showInterSect","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,YesNo,,Y,N");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_productionDivision","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("4");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_lotStandard","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,YieldLOTStandard,,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_inspType","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,YieldInspectionType,,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_inspectionProcess","108","235","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_processSegmentByYieldList");
            obj.set_codecolumn("PROCESSID");
            obj.set_datacolumn("PROCESSNAME");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_customer","108","285",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("9");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_customer",null,"285","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_production","108","310",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("11");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_production",null,"310","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","400","146","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","400","102","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_exceptDefectClass","0","360","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("28");
            obj.set_text("불량제외항목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("EXCLUSIONOFDEFECT");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_productionName","0","335","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("29");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTNAME");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_prodShapeType","108","260","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,ProductType,ALL,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"380","45","20","94",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("30");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","405","10","27",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("31");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Div("div_linkPlantId","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("32");
            obj.set_url("common::com_multiCombo.xfdl");
            obj.set_enable("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Div("div_exceptDefectClass","108","360","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("33");
            obj.set_url("common::com_multiCombo.xfdl");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Div("div_dateFrom","109","110",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("34");
            obj.set_url("common::com_calendar.xfdl");
            obj.set_text("");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Div("div_dateTo","109","135",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("35");
            obj.set_url("common::com_calendar.xfdl");
            obj.set_text("");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_customer_id","4","442","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("36");
            obj.set_text("조회조건 고객ID");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CUSTOMER");
            obj.set_visible("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_customer_id","112","442",null,"20","12",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("37");
            obj.set_visible("false");
            obj.set_tooltiptext("조회조건고객ID");
            obj.set_background("thistle");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Tab("tab","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab);
            obj.set_text("품목별 수율");
            obj.set_tooltiptext("ITEMYIELDRATE");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","210","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("품목별 수율");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("ITEMYIELDRATE");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_yieldRateByProductList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_yieldRateByProductList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"60\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"130\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"제품타입\" tooltiptext=\"PRODUCTSHAPE\"/><Cell col=\"2\" rowspan=\"2\" text=\"고객사\" tooltiptext=\"COMPANYCLIENT\"/><Cell col=\"3\" rowspan=\"2\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell col=\"4\" rowspan=\"2\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"5\" rowspan=\"2\" text=\"구분\" tooltiptext=\"LOCALE\"/><Cell col=\"6\" rowspan=\"2\" text=\"출하Site\" tooltiptext=\"SHIPMENTSITE\"/><Cell col=\"7\" rowspan=\"2\" text=\"연결Site\" tooltiptext=\"RELATEDSITE\"/><Cell col=\"8\" rowspan=\"2\" text=\"구간\" tooltiptext=\"INTERSECTSITE\"/><Cell col=\"9\" rowspan=\"2\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"10\" colspan=\"5\" text=\"PCS 수율\" cssclass=\"cell_headMaster\" tooltiptext=\"GROUPPCSYIELDRATE\"/><Cell col=\"15\" colspan=\"5\" text=\"면적당(㎡)수율\" cssclass=\"cell_headMaster\" tooltiptext=\"GROUPAREAYIELDRATE\"/><Cell col=\"20\" colspan=\"5\" text=\"금액수율(KRW)\" cssclass=\"cell_headMaster\" tooltiptext=\"GROUPPRICEYIELDRATEKRW\"/><Cell col=\"25\" rowspan=\"2\" text=\"검사공정\" tooltiptext=\"INSPPROCESSSEGMENT\"/><Cell col=\"26\" rowspan=\"2\" text=\"제품구분\" tooltiptext=\"THEPRODUCTTYPE\"/><Cell row=\"1\" col=\"10\" text=\"수율(%)\" tooltiptext=\"YEILD\"/><Cell row=\"1\" col=\"11\" text=\"불량율(%)\" tooltiptext=\"SPECOUTPERCENTAGE\"/><Cell row=\"1\" col=\"12\" text=\"투입수\" tooltiptext=\"PCSINPUTQTY\"/><Cell row=\"1\" col=\"13\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"14\" text=\"양품수\" tooltiptext=\"PCSNORMALQTY\"/><Cell row=\"1\" col=\"15\" text=\"수율(%)\" tooltiptext=\"YEILD\"/><Cell row=\"1\" col=\"16\" text=\"불량율(%)\" tooltiptext=\"SPECOUTPERCENTAGE\"/><Cell row=\"1\" col=\"17\" text=\"투입 M2\" tooltiptext=\"INPUTM2\"/><Cell row=\"1\" col=\"18\" text=\"불량 M2\" tooltiptext=\"DEFECTM2\"/><Cell row=\"1\" col=\"19\" text=\"양품 M2\" tooltiptext=\"NORMALM2\"/><Cell row=\"1\" col=\"20\" text=\"수율(%)\" tooltiptext=\"YEILD\"/><Cell row=\"1\" col=\"21\" text=\"불량율(%)\" tooltiptext=\"SPECOUTPERCENTAGE\"/><Cell row=\"1\" col=\"22\" text=\"투입금액\" tooltiptext=\"INPUTCOST\"/><Cell row=\"1\" col=\"23\" text=\"불량금액\" tooltiptext=\"DEFECTCOST\"/><Cell row=\"1\" col=\"24\" text=\"양품금액\" tooltiptext=\"SMTDEFECTPRICE\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PRODUCTSHAPE\" displaytype=\"combotext\" combocodecol=\"C,ProductType,,Y,N\"/><Cell col=\"2\" text=\"bind:COMPANYCLIENT\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"5\" text=\"bind:LOCALE\"/><Cell col=\"6\" text=\"bind:SHIPMENTSITE\"/><Cell col=\"7\" text=\"bind:RELATEDSITE\"/><Cell col=\"8\" text=\"bind:INTERSECTSITE\"/><Cell col=\"9\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"10\" text=\"bind:PCSYIELDRATE\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:PCSDEFECTRATE\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:PCSINPUTQTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"13\" text=\"bind:PCSDEFECTQTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"14\" text=\"bind:PCSNORMALQTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"15\" text=\"bind:AREAYIELDRATE\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/><Cell col=\"16\" text=\"bind:AREADEFECTRATE\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/><Cell col=\"17\" text=\"bind:AREAINPUTQTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"##0.#0\"/><Cell col=\"18\" text=\"bind:AREADEFECTQTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"##0.#0\"/><Cell col=\"19\" text=\"bind:AREANORMALQTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"##0.#0\"/><Cell col=\"20\" text=\"bind:PRICEYIELDRATE\" maskeditformat=\"##0.#0\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"21\" text=\"bind:PRICEDEFECTRATE\" maskeditformat=\"##0.#0\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"22\" text=\"bind:PRICEINPUTQTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"23\" text=\"bind:PRICEDEFECTQTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"24\" text=\"bind:PRICENORMALQTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\"/><Cell col=\"25\" text=\"bind:INSPPROCESSSEGMENT\" textAlign=\"left\"/><Cell col=\"26\" text=\"bind:PRODUCTDEFTYPE\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\" text=\"expr:100-nexacro.round((dataset.getSum(&quot;PCSDEFECTQTY&quot;)/dataset.getSum(&quot;PCSINPUTQTY&quot;))*100,2)\" displaytype=\"mask\" maskeditformat=\"##0.#0\"/><Cell col=\"11\" text=\"expr:nexacro.round((dataset.getSum(&quot;PCSDEFECTQTY&quot;)/dataset.getSum(&quot;PCSINPUTQTY&quot;))*100,2)\" maskeditformat=\"##0.#0\" displaytype=\"mask\"/><Cell col=\"12\" displaytype=\"mask\" maskeditformat=\"###,###\" text=\"expr:dataset.getSum(&quot;PCSINPUTQTY&quot;)\"/><Cell col=\"13\" displaytype=\"mask\" maskeditformat=\"###,###\" text=\"expr:dataset.getSum(&quot;PCSDEFECTQTY&quot;)\"/><Cell col=\"14\" displaytype=\"mask\" maskeditformat=\"###,###\" text=\"expr:dataset.getSum(&quot;PCSNORMALQTY&quot;)\"/><Cell col=\"15\" maskeditformat=\"##0.#0\" displaytype=\"mask\" text=\"expr:100-nexacro.round((dataset.getSum(&quot;AREADEFECTQTY&quot;)/dataset.getSum(&quot;AREAINPUTQTY&quot;))*100,2)\"/><Cell col=\"16\" maskeditformat=\"##0.#0\" displaytype=\"mask\" text=\"expr:nexacro.round((dataset.getSum(&quot;AREADEFECTQTY&quot;)/dataset.getSum(&quot;AREAINPUTQTY&quot;))*100,2)\"/><Cell col=\"17\" maskeditformat=\"##0.#0\" displaytype=\"mask\" text=\"expr:dataset.getSum(&quot;AREAINPUTQTY&quot;)\"/><Cell col=\"18\" maskeditformat=\"##0.#0\" displaytype=\"mask\" text=\"expr:dataset.getSum(&quot;AREADEFECTQTY&quot;)\"/><Cell col=\"19\" maskeditformat=\"##0.#0\" displaytype=\"mask\" text=\"expr:dataset.getSum(&quot;AREANORMALQTY&quot;)\"/><Cell col=\"20\" maskeditformat=\"##0.#0\" displaytype=\"mask\" text=\"expr:100-nexacro.round((dataset.getSum(&quot;PRICEDEFECTQTY&quot;)/dataset.getSum(&quot;PRICEINPUTQTY&quot;))*100,2)\"/><Cell col=\"21\" maskeditformat=\"##0.#0\" displaytype=\"mask\" text=\"expr:nexacro.round((dataset.getSum(&quot;PRICEDEFECTQTY&quot;)/dataset.getSum(&quot;PRICEINPUTQTY&quot;))*100,2)\"/><Cell col=\"22\" maskeditformat=\"###,###\" displaytype=\"mask\" text=\"expr:dataset.getSum(&quot;PRICEINPUTQTY&quot;)\"/><Cell col=\"23\" maskeditformat=\"###,###\" displaytype=\"mask\" text=\"expr:dataset.getSum(&quot;PRICEDEFECTQTY&quot;)\"/><Cell col=\"24\" maskeditformat=\"###,###\" displaytype=\"mask\" text=\"expr:dataset.getSum(&quot;PRICENORMALQTY&quot;)\"/><Cell col=\"25\"/><Cell col=\"26\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_yieldRateByProductList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_yieldRateByProductList","242","0",null,"34","562",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("품목별 불량현황");
            obj.set_tooltiptext("ITEMDEFECTSTATUS");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_defectStatusByProductList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_defectStatusByProductList","242","0",null,"34","562",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("subtitle1","0","0",null,"34","sta_cnt_ds_defectStatusByProductList:32",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("품목별 불량현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_defectStatusByProductList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectStatusByProductList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"65\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"65\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"65\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"제품타입\" tooltiptext=\"PRODUCTSHAPE\"/><Cell col=\"2\" rowspan=\"2\" text=\"고객사\" tooltiptext=\"COMPANYCLIENT\"/><Cell col=\"3\" rowspan=\"2\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell col=\"4\" rowspan=\"2\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"5\" rowspan=\"2\" text=\"구분\" tooltiptext=\"LOCALE\"/><Cell col=\"6\" rowspan=\"2\" text=\"출하Site\" tooltiptext=\"SHIPMENTSITE\"/><Cell col=\"7\" rowspan=\"2\" text=\"연결Site\" tooltiptext=\"RELATEDSITE\"/><Cell col=\"8\" rowspan=\"2\" text=\"구간\" tooltiptext=\"INTERSECTSITE\"/><Cell col=\"9\" rowspan=\"2\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"10\" colspan=\"6\" text=\"불량정보\" tooltiptext=\"DEFECTINFO\" cssclass=\"cell_headMaster\"/><Cell col=\"16\" colspan=\"4\" tooltiptext=\"GROUPAREAYIELDRATE\" text=\"면적당(㎡)수율\" cssclass=\"cell_headMaster\"/><Cell col=\"20\" colspan=\"4\" text=\"금액수율(KRW)\" cssclass=\"cell_headMaster\" tooltiptext=\"GROUPPRICEYIELDRATEKRW\"/><Cell col=\"24\" rowspan=\"2\" text=\"검사공정\" tooltiptext=\"INSPPROCESSSEGMENT\"/><Cell col=\"25\" rowspan=\"2\" text=\"제품구분\" tooltiptext=\"THEPRODUCTTYPE\"/><Cell row=\"1\" col=\"10\" text=\"투입수\" tooltiptext=\"PCSINPUTQTY\"/><Cell row=\"1\" col=\"11\" text=\"불량코드\" tooltiptext=\"DEFECTCODE\"/><Cell row=\"1\" col=\"12\" text=\"불량코드 명\" tooltiptext=\"DEFECTCODENAME\"/><Cell row=\"1\" col=\"13\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"14\" text=\"불량율(%)\" tooltiptext=\"SPECOUTPERCENTAGE\"/><Cell row=\"1\" col=\"15\" text=\"수율(%)\" tooltiptext=\"YEILD\"/><Cell row=\"1\" col=\"16\" text=\"투입 M2\" tooltiptext=\"INPUTM2\"/><Cell row=\"1\" col=\"17\" text=\"불량 M2\" tooltiptext=\"DEFECTM2\"/><Cell row=\"1\" col=\"18\" text=\"불량율(%)\" tooltiptext=\"SPECOUTPERCENTAGE\"/><Cell row=\"1\" col=\"19\" text=\"수율(%)\" tooltiptext=\"YEILD\"/><Cell row=\"1\" col=\"20\" text=\"투입금액\" tooltiptext=\"INPUTCOST\"/><Cell row=\"1\" col=\"21\" text=\"불량금액\" tooltiptext=\"DEFECTCOST\"/><Cell row=\"1\" col=\"22\" text=\"불량율(%)\" tooltiptext=\"SPECOUTPERCENTAGE\"/><Cell row=\"1\" col=\"23\" text=\"수율(%)\" tooltiptext=\"YEILD\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"1\" text=\"bind:PRODUCTSHAPE\" displaytype=\"combotext\" combocodecol=\"C,ProductType,,Y,N\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"2\" text=\"bind:COMPANYCLIENT\" textAlign=\"left\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"5\" text=\"bind:LOCALE\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"6\" text=\"bind:SHIPMENTSITE\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"7\" text=\"bind:RELATEDSITE\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"8\" text=\"bind:INTERSECTSITE\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"9\" text=\"bind:PRODUCTDEFVERSION\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"10\" text=\"bind:PCSINPUTQTY\" displaytype=\"expr:dataset.getRowLevel(currow)==1?&quot;mask&quot;:&quot;none&quot;\" textAlign=\"right\" maskeditformat=\"#,##0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"11\" text=\"bind:JOINCODE\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"12\" text=\"bind:JOINNAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:PCSDEFECTQTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"14\" text=\"expr:dataset.getRowLevel(currow)==1?nexacro.round((PCSDEFECTQTY/PCSINPUTQTY)*100,2):PCSDEFECTRATE\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"15\" text=\"expr:100-nexacro.round((PCSDEFECTQTY/PCSINPUTQTY)*100,2)\" maskeditformat=\"##0.#0\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\" displaytype=\"expr:dataset.getRowLevel(currow)==1?&quot;mask&quot;:&quot;none&quot;\"/><Cell col=\"16\" text=\"bind:AREAINPUTQTY\" displaytype=\"expr:dataset.getRowLevel(currow)==1?&quot;mask&quot;:&quot;none&quot;\" textAlign=\"right\" maskeditformat=\"##0.#0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"17\" text=\"bind:AREADEFECTQTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"##0.#0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"18\" text=\"expr:dataset.getRowLevel(currow)==1?nexacro.round((AREADEFECTQTY/AREAINPUTQTY)*100,2):AREADEFECTRATE\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"19\" text=\"expr:dataset.getRowLevel(currow)==1?100-nexacro.round((AREADEFECTQTY/AREAINPUTQTY)*100,2):AREAYIELDRATE\" displaytype=\"expr:dataset.getRowLevel(currow)==1?&quot;mask&quot;:&quot;none&quot;\" maskeditformat=\"##0.#0\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"20\" text=\"bind:PRICEINPUTQTY\" displaytype=\"expr:dataset.getRowLevel(currow)==1?&quot;mask&quot;:&quot;none&quot;\" textAlign=\"right\" maskeditformat=\"#,##0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"21\" text=\"bind:PRICEDEFECTQTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"22\" text=\"expr:dataset.getRowLevel(currow)==1?nexacro.round((PRICEDEFECTQTY/PRICEINPUTQTY)*100,2):PRICEDEFECTRATE\" maskeditformat=\"##0.#0\" displaytype=\"mask\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"23\" text=\"expr:dataset.getRowLevel(currow)==1?100-nexacro.round((PRICEDEFECTQTY/PRICEINPUTQTY)*100,2):PRICEYIELDRATE\" maskeditformat=\"##0.#0\" displaytype=\"expr:dataset.getRowLevel(currow)==1?&quot;mask&quot;:&quot;none&quot;\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"24\" text=\"bind:INSPPROCESSSEGMENT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\" textAlign=\"left\"/><Cell col=\"25\" text=\"bind:PRODUCTDEFTYPE\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\" displaytype=\"mask\" maskeditformat=\"###,###\" text=\"expr:dataset.getSum(&quot;PCSINPUTQTY&quot;)\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"14\" maskeditformat=\"##0.#0\" displaytype=\"mask\"/><Cell col=\"15\" displaytype=\"mask\" maskeditformat=\"##0.#0\"/><Cell col=\"16\" maskeditformat=\"##0.#0\" displaytype=\"mask\"/><Cell col=\"17\" maskeditformat=\"##0.#0\" displaytype=\"mask\"/><Cell col=\"18\" maskeditformat=\"##0.#0\" displaytype=\"mask\"/><Cell col=\"19\" maskeditformat=\"##0.#0\" displaytype=\"mask\"/><Cell col=\"20\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"21\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"22\" maskeditformat=\"##0.#0\" displaytype=\"mask\"/><Cell col=\"23\" maskeditformat=\"##0.#0\" displaytype=\"mask\"/><Cell col=\"24\"/><Cell col=\"25\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab);
            obj.set_text("품목별 불량세부");
            obj.set_tooltiptext("ITEMDEFECTDETAIL");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("subtitle1","0","0","210","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("불량세부");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DEFECTDETAIL");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_defectDetailByProductList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectDetailByProductList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"50\"/><Column size=\"210\"/><Column size=\"210\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"제품타입\" tooltiptext=\"PRODUCTSHAPE\"/><Cell col=\"2\" rowspan=\"2\" text=\"고객사\" tooltiptext=\"COMPANYCLIENT\"/><Cell col=\"3\" rowspan=\"2\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell col=\"4\" rowspan=\"2\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"5\" rowspan=\"2\" text=\"구분\" tooltiptext=\"LOCALE\"/><Cell col=\"6\" rowspan=\"2\" text=\"출하Site\" tooltiptext=\"SHIPMENTSITE\"/><Cell col=\"7\" rowspan=\"2\" text=\"연결Site\" tooltiptext=\"RELATEDSITE\"/><Cell col=\"8\" rowspan=\"2\" text=\"구간\" tooltiptext=\"INTERSECTSITE\"/><Cell col=\"9\" rowspan=\"2\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"10\" rowspan=\"2\" text=\"ROOT LOT\" tooltiptext=\"2B53F9794C194E0F802D4479EDE7EA16\"/><Cell col=\"11\" rowspan=\"2\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"12\" colspan=\"8\" text=\"불량정보\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECTINFO\"/><Cell col=\"20\" colspan=\"6\" text=\"불량원인정보\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECTCAUSEINFO\"/><Cell col=\"26\" rowspan=\"2\" text=\"검사공정\" tooltiptext=\"INSPPROCESSSEGMENT\"/><Cell col=\"27\" rowspan=\"2\" text=\"제품구분\" tooltiptext=\"THEPRODUCTTYPE\"/><Cell row=\"1\" col=\"12\" text=\"발견SITE\" tooltiptext=\"DEFECTFOUNDSITE\"/><Cell row=\"1\" col=\"13\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"14\" text=\"투입수\" tooltiptext=\"PCSINPUTQTY\"/><Cell row=\"1\" col=\"15\" text=\"불량코드\" tooltiptext=\"DEFECTCODE\"/><Cell row=\"1\" col=\"16\" text=\"불량명\" tooltiptext=\"DEFECTNAME\"/><Cell row=\"1\" col=\"17\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"18\" text=\"불량율(%)\" tooltiptext=\"SPECOUTPERCENTAGE\"/><Cell row=\"1\" col=\"19\" text=\"불량금액\" tooltiptext=\"DEFECTPRICE\"/><Cell row=\"1\" col=\"20\" text=\"Site\" tooltiptext=\"SITE\"/><Cell row=\"1\" col=\"21\" text=\"투입수량\" tooltiptext=\"INPUTQTY\"/><Cell row=\"1\" col=\"22\" text=\"불량율(%)\" tooltiptext=\"SPECOUTPERCENTAGE\"/><Cell row=\"1\" col=\"23\" text=\"원인품목\" tooltiptext=\"REASONPRODUCT\"/><Cell row=\"1\" col=\"24\" text=\"원인공정\" tooltiptext=\"CAUSEPROCESS\"/><Cell row=\"1\" col=\"25\" text=\"원인작업장\" tooltiptext=\"REASONAREA\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"1\" text=\"bind:PRODUCTSHAPE\" combocodecol=\"C,ProductType,,Y,N\" displaytype=\"combotext\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"2\" text=\"bind:COMPANYCLIENT\" textAlign=\"left\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"5\" text=\"bind:LOCALE\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"6\" text=\"bind:SHIPMENTSITE\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"7\" text=\"bind:RELATEDSITE\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"8\" text=\"bind:INTERSECTSITE\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"9\" text=\"bind:PRODUCTDEFVERSION\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"10\" text=\"bind:ROOTLOTID\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"11\" text=\"bind:LOTID\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"12\" text=\"bind:DISCOVERYSITE\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"13\" text=\"bind:PROCESSSEGMENTNAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\" textAlign=\"left\"/><Cell col=\"14\" displaytype=\"expr:dataset.getRowLevel(currow)==1?&quot;mask&quot;:&quot;none&quot;\" maskeditformat=\"#,##0\" textAlign=\"right\" text=\"bind:PCSINPUTQTY\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"15\" text=\"bind:JOINCODE\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"16\" text=\"bind:JOINNAME\" textAlign=\"left\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"17\" text=\"bind:PCSDEFECTQTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"18\" text=\"expr:dataset.getRowLevel(currow)==1?nexacro.round((PCSDEFECTQTY/PCSINPUTQTY)*100,2):PCSDEFECTRATE\" maskeditformat=\"##0.#0\" displaytype=\"mask\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"19\" text=\"bind:DEFECTPRICE\" maskeditformat=\"#,##0\" textAlign=\"right\" displaytype=\"mask\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"20\" text=\"bind:REASONSITE\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"21\" text=\"bind:REASONINPUTQTY\" displaytype=\"expr:dataset.getRowLevel(currow)==1?&quot;mask&quot;:&quot;none&quot;\" textAlign=\"right\" maskeditformat=\"#,##0\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"22\" text=\"expr:dataset.getRowLevel(currow)==1?nexacro.round((PCSDEFECTQTY/REASONINPUTQTY)*100,2):REASONDEFECTRATE\" maskeditformat=\"##0.#0\" displaytype=\"mask\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"23\" text=\"bind:REASONCONSUMABLEDEFNAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/><Cell col=\"24\" text=\"bind:REASONSEGMENTNAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\" textAlign=\"left\"/><Cell col=\"25\" text=\"bind:REASONAREANAME\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\" textAlign=\"left\"/><Cell col=\"26\" text=\"bind:INSPPROCESSSEGMENT\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\" textAlign=\"left\"/><Cell col=\"27\" text=\"bind:PRODUCTDEFTYPE\" cssclass=\"expr:dataset.getRowLevel(currow)==1?&quot;cell_bg_red&quot;:&quot;&quot;\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\" text=\"expr:dataset.getSum(&quot;PCSINPUTQTY&quot;)\" maskeditformat=\"#,###,###,##0\" displaytype=\"mask\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;PCSDEFECTQTY&quot;)\" displaytype=\"mask\"/><Cell col=\"18\" maskeditformat=\"##0.#0\" displaytype=\"mask\"/><Cell col=\"19\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;PCSDEFECTQTY&quot;)\" displaytype=\"mask\"/><Cell col=\"20\"/><Cell col=\"21\" maskeditformat=\"#,###,###,##0\" text=\"expr:dataset.getSum(&quot;REASONINPUTQTY&quot;)\" displaytype=\"mask\"/><Cell col=\"22\" maskeditformat=\"##0.#0\" displaytype=\"mask\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_defectDetailByProductList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_defectDetailByProductList","242","0",null,"34","562",null,null,null,null,null,this.div_work.form.tab.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tab.Tabpage3.addChild(obj.name, obj);

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

            obj = new Static("sta_title","30","16","126","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            obj.set_tooltiptext("MENU_PG-QC-0460");
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
            this._addPreloadList("fdl","common::com_multiCombo.xfdl");
            this._addPreloadList("fdl","common::com_calendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("QAM02400M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM02400M.xfdl","lib::lib_qam.xjs");
        this.addIncludeScript("QAM02400M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("QAM02400M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 품질관리>>수율현황>>품목별 수율현황
         * 파일명         : QAM024000M.xfdl
         * 작성자         : yanghee.kim
         * 작성일         : 2021.06.13
         *
         * 설  명         :
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.06.13   yanghee.kim   최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;    //기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;    //품질관리 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/;  //공정관리 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
            this.nfn_formInit(obj);

        	//global value setting
        	this.qamfn_setGlobalValue();

        	//조회기간 유형 조회
        	this.basfn_getPeriodData("ds_periodType");

        	//금액수율 Header Setting
        	this.fn_setHeadGroupPriceYieldRateText();

        	//multi combo site 조회
        	this.fn_searchPlant();

        	//검사공사지정 조회
        	this.fn_searchprocessSegmentByYield();

        	//multi combo  불량제외항목 조회
        	this.fn_searchDefectException();

            //조회기간 popup div event add
        	this.tab_search.Tab1.form.div_dateFrom.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_preiodChang, this);
        	this.tab_search.Tab1.form.div_dateTo.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_preiodChang, this);

        	//최초 호출되는 초기화 함수
        	this.fn_formInit();

        	//타화면에서 화면 호출
        	this.fn_callScreen();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
            var tabIdx = this.div_work.form.tab.tabindex;
            switch (tabIdx)
            {
                case 0:
                    this.fn_searchYieldRateByProductList();      //탭1 품목별 수율
                break;
                case 1:
                    this.fn_searchDefectStatusByProductList();   //탭2 품목별 불량현황
                break;
                case 2:
                    this.fn_searchDefectDetailByProductList();   //탭3 불량세부
                break;
            }
        };

        /*
         * 기능 : 탭1 품목별 수율 검색
         */
        this.fn_searchYieldRateByProductList = function ()
        {
            this.ds_yieldRateByProductList.clearData();
            this.fn_setSearchParam();

            var sSvcID        = "selectYieldRateByProductList";
            var sController   = "/qam02400/selectYieldRateByProductList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_yieldRateByProductList=output";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭2 품목별 불량현황 검색
         */
        this.fn_searchDefectStatusByProductList = function ()
        {
            this.ds_defectStatusByProductList.clearData();
        	this.fn_setSummaryDefectStatusByProductList("C");
        	this.fn_setSearchParam();

            var sSvcID        = "selectDefectStatusByProductList";
            var sController   = "/qam02400/selectDefectStatusByProductList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_defectStatusByProductList=output";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭3 불량세부 검색
         */
        this.fn_searchDefectDetailByProductList = function ()
        {
            this.ds_defectDetailByProductList.clearData();
            this.fn_setSummaryDefectDetailByProductList("C");

        	this.fn_setSearchParam();

            var sSvcID        = "selectDefectDetailByProductList";
            var sController   = "/qam02400/selectDefectDetailByProductList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_defectDetailByProductList=output";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 조회조건 파라미터 셋팅
         */
        this.fn_setSearchParam = function ()
        {
        	var count = 0;
        	var strLinkPlantId = "";
        	for(var i=0; i<this.tab_search.Tab1.form.div_linkPlantId.form.ds_initData.rowcount; i++){
        		var chk = this.tab_search.Tab1.form.div_linkPlantId.form.ds_initData.getColumn(i,"CHK");
        		if(chk == 1)
        		{
        			var code = this.tab_search.Tab1.form.div_linkPlantId.form.ds_initData.getColumn(i,"CODE");
        			count = count+1;
        			if (count == 1) strLinkPlantId = code;
        			else strLinkPlantId = strLinkPlantId+","+code;
        		}
        	}

        	count = 0;
        	var strExceptDefectClass = "";
        	for(var i=0; i<this.tab_search.Tab1.form.div_exceptDefectClass.form.ds_initData.rowcount; i++){
        		var chk = this.tab_search.Tab1.form.div_exceptDefectClass.form.ds_initData.getColumn(i,"CHK");
        		if(chk == 1)
        		{
        			var code = this.tab_search.Tab1.form.div_exceptDefectClass.form.ds_initData.getColumn(i,"CODE");
        			count = count+1;
        			if (count == 1) strExceptDefectClass = code;
        			else strExceptDefectClass = strExceptDefectClass+","+code;
        		}
        	}

            this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow, "ENTERPRISEID",         this.qam_enterpriseId);
        	this.ds_search.setColumn(nRow, "LANGUAGETYPE",         this.qam_lang);
            this.ds_search.setColumn(nRow, "PLANT",                this.qam_plantId);
            this.ds_search.setColumn(nRow, "P_LOCALEDIV",          this.tab_search.Tab1.form.cbo_localeDiv.value);       		//구분
            this.ds_search.setColumn(nRow, "P_PLANTID",            this.tab_search.Tab1.form.cbo_plantId.value);         		//출하SITE
            this.ds_search.setColumn(nRow, "P_LINKPLANTID",        strLinkPlantId);										   	    //연계SITE
            this.ds_search.setColumn(nRow, "P_SHOWINTERSECT",       this.tab_search.Tab1.form.cbo_showInterSect.value);			//구간표시
            this.ds_search.setColumn(nRow, "P_PERIODFR",           this.tab_search.Tab1.form.div_dateFrom.form.calStart.value); //조회기간 From
            this.ds_search.setColumn(nRow, "P_PERIODTO",           this.tab_search.Tab1.form.div_dateTo.form.calStart.value);   //조회기간 To
            this.ds_search.setColumn(nRow, "P_PRODUCTIONDIVISION", this.tab_search.Tab1.form.cbo_productionDivision.value);     //양산구분
            this.ds_search.setColumn(nRow, "P_LOTSTANDARD",        this.tab_search.Tab1.form.cbo_lotStandard.value); 		    //LOT 기준
            this.ds_search.setColumn(nRow, "P_INSPTYPE",           this.tab_search.Tab1.form.cbo_inspType.value);    		    //검사기준
            this.ds_search.setColumn(nRow, "P_INSPECTIONPROCESS",  this.tab_search.Tab1.form.cbo_inspectionProcess.value); 	    //검사공정지정
            this.ds_search.setColumn(nRow, "P_PRODSHAPETYPE",      this.tab_search.Tab1.form.cbo_prodShapeType.value); 		    //TYPE
            this.ds_search.setColumn(nRow, "P_CUSTOMER",           this.tab_search.Tab1.form.edt_customer.value);               //고객
            this.ds_search.setColumn(nRow, "P_PRODUCTDEFID",       this.tab_search.Tab1.form.edt_production.value);	            //품목
            this.ds_search.setColumn(nRow, "P_EXCEPTDEFECTCLASS",  strExceptDefectClass);                                       //불량제외항목
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
        	    if (trId == "selectYieldRateByProductList")         //탭1. 품목별 수율
                {
        			if (this.ds_yieldRateByProductList.rowcount  < 1)
        			{
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}
        		}
                else if (trId == "selectDefectStatusByProductList") //탭2. 품목별 불량현황
        		{
        			if (this.ds_defectStatusByProductList.rowcount  < 1)
        			{
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}
        			this.ds_defectStatusByProductList.set_loadkeymode( "reset" );
        			this.ds_defectStatusByProductList.set_keystring("G:+PRODUCTSHAPE+COMPANYCLIENT+PRODUCTDEFNAME+PRODUCTDEFID,S:-PCSDEFECTQTY+JOINCODE");
        			this.ds_defectStatusByProductList.set_reversesubsum( true );
        			//keyString Summary
        			this.fn_setSummaryDefectStatusByProductList("S");
        		}
        		else if (trId == "selectDefectDetailByProductList") //탭3. 품목별 불량세부
        		{
                    if (this.ds_defectDetailByProductList.rowcount  < 1)
        			{
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}
        			this.ds_defectDetailByProductList.set_loadkeymode( "reset" );
        			this.ds_defectDetailByProductList.set_keystring("G:+PRODUCTSHAPE+COMPANYCLIENT+PRODUCTDEFNAME+PRODUCTDEFID,S:-PCSDEFECTQTY+JOINCODE");
        			this.ds_defectDetailByProductList.set_reversesubsum( true );
        			//keyString Summary
        			this.fn_setSummaryDefectDetailByProductList("S");
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
            // arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅, C::사용자 멀티 선택
            // popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
            // popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
            // rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
            // paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
            // paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
            // searchStr   : 팝업 조회조건 콤보값 = 조회 값

            var popupId = svcId;
            var oArg = {};
            var opts;

            oArg.arg_type = "CA";
            oArg.arg_popupCd = popId;
            oArg.arg_popupNm = "";
            oArg.arg_paramCols = "";
            oArg.arg_paramValues = "";
            oArg.arg_searchStr = "";

            if(popupId == "SRCH_PRODUCTDEF280")    /*조회조건-품목*/
            {
        		opts = "width=540,height=555";
        		oArg.arg_paramCols   = "PLANTID";
                oArg.arg_paramValues = this.qam_plantId;
                oArg.arg_rtnCols     = "PRODUCTDEFNAME|PRODUCTDEFIDVERSION";
        		if (!this.nfn_isNull(this.tab_search.Tab1.form.edt_production.value))
        		{
        			oArg.arg_searchStr   = "PRODUCTDEFID=" + this.tab_search.Tab1.form.edt_production.value;
        		}
            }
        	else if(popupId == "SRCH_CUSTOMER284")    /*조회조건-고객*/
            {
        		opts = "width=400,height=480";
        		oArg.arg_paramCols   = "ENTERPRISEID|PLANTID";
                oArg.arg_paramValues = this.qam_enterpriseId +'|'+ this.qam_plantId;
                oArg.arg_rtnCols     = "CUSTOMERID|CUSTOMERNAME";
        		if (!this.nfn_isNull(this.tab_search.Tab1.form.edt_customer.value))
        		{
        			oArg.arg_searchStr   = "CUSTOMERNAME=" + this.tab_search.Tab1.form.edt_customer.value;
        		}
            }
            this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if(this.nfn_isNull(rtn)) return;

            if (sPopupId == "SRCH_PRODUCTDEF280")    /*조회조건-품목*/
            {
        		var productName = "";
        		var productIdVer= "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			if (i > 0)
        			{
        				productName  += ",";
        				productIdVer += ",";
        			}
        			productName  += colArray[0];
        			productIdVer += colArray[1];
        		}

                this.tab_search.Tab1.form.edt_production.set_value(productIdVer);
        		this.tab_search.Tab1.form.edt_production_nm.set_value(productName);
            }
        	else if(sPopupId == "SRCH_CUSTOMER284")    /*조회조건-고객*/
            {
        		var customerId = "";
        		var customerName = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			if (i > 0)
        			{
        				customerId   += ",";
        				customerName += ",";
        			}
        			customerId   += colArray[0];
        			customerName += colArray[1];
        		}

        		this.tab_search.Tab1.form.edt_customer_id.set_value(customerId);
        		this.tab_search.Tab1.form.edt_customer.set_value(customerName);
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
        	this.fn_setSearchDate("thisweek");                                       //조회조건-조회기간 셋팅
        	this.tab_search.Tab1.form.cbo_showInterSect.set_value("N");              //조회조건-구간표시
        	this.tab_search.Tab1.form.cbo_period.set_value("thisweek");              //조회조건-조회기간(금주)
        	this.tab_search.Tab1.form.cbo_productionDivision.set_value("Production") //조회조건-양산구분(양산)
        	this.tab_search.Tab1.form.cbo_lotStandard.set_value("SPLITLOT");         //조회조건-LOT기준(Split LOT)
        	this.tab_search.Tab1.form.cbo_inspType.set_value("FINISH");              //조회조건-검사기준(최종검사)

        	//조회조건-검사공정지정 => 검사기준에 따라 검사공정지정 Filter 및 기본값 셋팅
        	this.ds_processSegmentByYieldList.filter("");
        	this.ds_processSegmentByYieldList.filter("INSPTYPE == 'Final' || INSPTYPE == 'FINISH'");
        	this.tab_search.Tab1.form.cbo_inspectionProcess.set_value("Final");
        };

        /*
         * 기능 : 조회조건 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        };

        /*
         * 기능 : 탭1 품목별 수율 그리드의 Head의 금액수율 Title에 접속 site별 기본통화 적용(금액수율+(KRW))
         */
        this.fn_setHeadGroupPriceYieldRateText = function ()
        {
        	var rtn = this.qamfn_setHeadGroupPriceYieldRateText(this.qam_plantId);
        	var bSucc = this.div_work.form.tab.Tabpage1.form.grd_yieldRateByProductList.setCellProperty("head", 12, "text" , rtn.strColCap);
            var tooltiptext = this.div_work.form.tab.Tabpage1.form.grd_yieldRateByProductList.setCellProperty("head", 12, "tooltiptext" , rtn.strTolltiptext);
        };

        /*
         * 이벤트 : 품목명 초기화
         */
        this.fn_editProductionClear = function()
        {
        	this.tab_search.Tab1.form.edt_production.set_value("");
        	this.tab_search.Tab1.form.edt_production_nm.set_value("");
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
         * 기능 : 조회조건- 연계Site 조회
         */
        this.fn_searchPlant = function()
        {
            var sArgs         = "";
        	    sArgs        += this.gfn_setParam("LOOKUP_TYPE",  "SiteType"); //
        		sArgs        += this.gfn_setParam("ENABLE_FLAG",  "Y");
            this.qamfn_searchMultiCombo("ds_multiSite", this.tab_search.Tab1.form.div_linkPlantId, "selectLinkPlantIdList", sArgs);
        }

        /*
         * 기능 : 조회조건 - 불량제외항목 조회
         */
        this.fn_searchDefectException = function()
        {
            var sArgs         = "";
        	    sArgs        += this.gfn_setParam("LOOKUP_TYPE",  "DefectDetailClass"); //
        		sArgs        += this.gfn_setParam("ENABLE_FLAG",  "Y");
        		sArgs        += this.gfn_setParam("PARENTCODEID", "20"); //속성분류-관리
            this.qamfn_searchMultiCombo("ds_multiDefectException", this.tab_search.Tab1.form.div_exceptDefectClass, "selectDefectExceptionList", sArgs);
        }

        /*
         * 기능 : 조회조건 - 검사공정지정 조회
         */
        this.fn_searchprocessSegmentByYield = function()
        {
            this.ds_processSegmentByYieldList.clearData();
            var sSvcID        = "selectProcessSegmentByYieldList";
            var sController   = "/qampopup/selectProcessSegmentByYieldList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_processSegmentByYieldList=output";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false);
        }

        /*
         * 기능 : 품목별 현황 그리드-keyString으로 그룹핑한 정보를 활용하여 summary를 생성
         *        pFlag => C : 조회클릭시 초기화, S: 조회 후 Summary
         */
        this.fn_setSummaryDefectStatusByProductList = function (pFlag)
        {
        	var sumInputQty    = 0;
        	var sumDefectQty   = 0;
        	var sumInputArea   = 0;
        	var sumDefectArea  = 0;
        	var sumInputPrice  = 0;
        	var sumDefectPrice = 0;
        	var qtyDefectRate  = 0;
        	var qtyYieldRate   = 0;
        	var areaDefectRate  = 0;
        	var areaYieldRate   = 0;
        	var priceDefectRate  = 0;
        	var priceYieldRate   = 0;

            if (pFlag == "S")
        	{
        		for(var i=0; i < this.ds_defectStatusByProductList.getRowCount(); i++)
        		{
        			if (this.ds_defectStatusByProductList.getRowLevel(i) > 0)
        			{
        				sumInputQty += this.ds_defectStatusByProductList.getColumn(i, "PCSINPUTQTY");
        				sumDefectQty += this.ds_defectStatusByProductList.getColumn(i, "PCSDEFECTQTY");
        				sumInputArea += this.ds_defectStatusByProductList.getColumn(i, "AREAINPUTQTY");
        				sumDefectArea += this.ds_defectStatusByProductList.getColumn(i, "AREADEFECTQTY");
        				sumInputPrice += this.ds_defectStatusByProductList.getColumn(i, "PRICEINPUTQTY");
        				sumDefectPrice += this.ds_defectStatusByProductList.getColumn(i, "PRICEDEFECTQTY");
        			}
        		}

        		qtyDefectRate = nexacro.toNumber(sumInputQty)==0? 0: nexacro.round(nexacro.toNumber(sumDefectQty)/nexacro.toNumber(sumInputQty)*100, 2);
        		qtyYieldRate = 100-nexacro.toNumber(qtyDefectRate);
        		areaDefectRate = nexacro.toNumber(sumInputArea)==0? 0: nexacro.round(nexacro.toNumber(sumDefectArea)/nexacro.toNumber(sumInputArea)*100, 2);
        		areaYieldRate = 100-nexacro.toNumber(areaDefectRate);
        		priceDefectRate = nexacro.toNumber(sumInputPrice)==0? 0: nexacro.round(nexacro.toNumber(sumDefectPrice)/nexacro.toNumber(sumInputPrice)*100, 2);
        		priceYieldRate = 100-nexacro.toNumber(priceDefectRate);
        	}

        	var objGrid = this.div_work.form.tab.Tabpage2.form.grd_defectStatusByProductList;
        	var inputQtyIdx = objGrid.getBindCellIndex("body", "PCSINPUTQTY");
        	var defectQtyIdx = objGrid.getBindCellIndex("body", "PCSDEFECTQTY");
        	var inputAreaIdx = objGrid.getBindCellIndex("body", "AREAINPUTQTY");
        	var defectAreaIdx = objGrid.getBindCellIndex("body", "AREADEFECTQTY");
        	var inputPriceIdx = objGrid.getBindCellIndex("body", "PRICEINPUTQTY");
        	var defectPriceIdx = objGrid.getBindCellIndex("body", "PRICEDEFECTQTY");
        	//var defectRateIdx = objGrid.getBindCellIndex("body", "PCSDEFECTRATE"); //expr를 사용하여 cellIndex 값을 가져오지 못함

        	objGrid.setCellProperty("summary", inputQtyIdx, "text", sumInputQty);
        	objGrid.setCellProperty("summary", defectQtyIdx, "text", sumDefectQty);
        	objGrid.setCellProperty("summary", inputAreaIdx, "text", sumInputArea);
        	objGrid.setCellProperty("summary", defectAreaIdx, "text", sumDefectArea);
        	objGrid.setCellProperty("summary", inputPriceIdx, "text", sumInputPrice);
        	objGrid.setCellProperty("summary", defectPriceIdx, "text", sumDefectPrice);
        	objGrid.setCellProperty("summary", 14, "text", nexacro.toNumber(qtyDefectRate));   //PCS 수율-불량율
        	objGrid.setCellProperty("summary", 15, "text", nexacro.toNumber(qtyYieldRate));    //PCS 수율-수율
        	objGrid.setCellProperty("summary", 18, "text", nexacro.toNumber(areaDefectRate));  //면적당 수율-불량율
        	objGrid.setCellProperty("summary", 19, "text", nexacro.toNumber(areaYieldRate));   //면적당 수율-수율
        	objGrid.setCellProperty("summary", 22, "text", nexacro.toNumber(priceDefectRate)); //금액 수율-불량율
        	objGrid.setCellProperty("summary", 23, "text", nexacro.toNumber(priceYieldRate));  //금액 수율-수율
        };

        /*
         * 기능 : 품목별 세부현황 그리드-keyString으로 그룹핑한 정보를 활용하여 summary를 생성
         *        pFlag => C : 조회클릭시 초기화, S: 조회 후 Summary
         */
        this.fn_setSummaryDefectDetailByProductList = function (pFlag)
        {

        	var sumInputQty    = 0;   //불량정보-투입수
        	var sumDefectQty   = 0;   //불량정보-불량수
        	var sumDefectPrice = 0;   //불량정보-불량금액
        	var sumReasonQty   = 0;   //불량원인정보-투입수
        	var defectRate     = 0;   //불량정보-불량율
        	var reasonDefectRate = 0; //불량원인정보-불량율

            if (pFlag == "S")
        	{
        		for(var i=0; i < this.ds_defectDetailByProductList.getRowCount(); i++)
        		{
        			if (this.ds_defectDetailByProductList.getRowLevel(i) > 0)
        			{
        				sumInputQty    += this.ds_defectDetailByProductList.getColumn(i, "PCSINPUTQTY");
        				sumDefectQty   += this.ds_defectDetailByProductList.getColumn(i, "PCSDEFECTQTY");
        				sumDefectPrice += this.ds_defectDetailByProductList.getColumn(i, "DEFECTPRICE");
        				sumReasonQty    += this.ds_defectDetailByProductList.getColumn(i, "REASONINPUTQTY");
        			}
        		}

        		defectRate = nexacro.toNumber(sumInputQty)==0? 0: nexacro.round(nexacro.toNumber(sumDefectQty)/nexacro.toNumber(sumInputQty)*100, 2);
                reasonDefectRate = nexacro.toNumber(sumReasonQty)==0? 0: nexacro.round(nexacro.toNumber(sumDefectQty)/nexacro.toNumber(sumReasonQty)*100, 2);
        	}

        	var objGrid = this.div_work.form.tab.Tabpage3.form.grd_defectDetailByProductList;
        	var defectInputQtyIdx = objGrid.getBindCellIndex("body", "PCSINPUTQTY");
        	var defectDefectQtyIdx = objGrid.getBindCellIndex("body", "PCSDEFECTQTY");
        	var defectDefectPriceIdx = objGrid.getBindCellIndex("body", "DEFECTPRICE");
        	var reasonInputQtyIdx = objGrid.getBindCellIndex("body", "REASONINPUTQTY");

        	objGrid.setCellProperty("summary", defectInputQtyIdx, "text", sumInputQty);
        	objGrid.setCellProperty("summary", defectDefectQtyIdx, "text", sumDefectQty);
        	objGrid.setCellProperty("summary", defectDefectPriceIdx, "text", sumDefectPrice);
        	objGrid.setCellProperty("summary", reasonInputQtyIdx, "text", sumReasonQty);

        	objGrid.setCellProperty("summary", 18, "text", defectRate);	        //불량정보-불량율
        	objGrid.setCellProperty("summary", 22, "text", reasonDefectRate);	//불량원인정보-불량율
        };

        /*
         * 기능 : 타화면에서 호출
         */
        this.fn_callScreen = function()
        {
        	var sArgName = this.gfn_getFrameAguments("menuName");

        	if (sArgName == "QAM02300M") /*품질관리>>수율현황>>LOT별 수율현황*/
        	{
                var data = JSON.parse(this.gfn_getFrameAguments("objList"));
        		this.tab_search.Tab1.form.edt_production.set_value(data.PRODUCTDEFID+data.PRODUCTDEFVERSION);
        		this.tab_search.Tab1.form.edt_production_nm.set_value(data.PRODUCTDEFNAME);
        		this.fn_search();
        	}
        	else if (sArgName == "QAM03300M") /*품질관리>>수축율 관리>>수축율현황*/
        	{
                var data = JSON.parse(this.gfn_getFrameAguments("objList"));
        		this.tab_search.Tab1.form.edt_production.set_value(data.PRODUCTDEFID+data.PRODUCTDEFVERSION);
        		this.tab_search.Tab1.form.edt_production_nm.set_value(data.PRODUCTDEFNAME);
        		this.fn_search();
        	}
        }

        /*
         * 기능 : LOT별 수율현황 호출
         */
        this.fn_openYieldByLot = function ()
        {
        	this.fn_callOpenPage("qam::QAM02300M.xfdl");
        }

        /*
         * 기능 : 이상발생 현황 호출
         */
        this.fn_openAccurence = function ()
        {
        	this.fn_callOpenPage("pcm::PCM05300M.xfdl");
        }

        /*
         * 기능 : Affect LOT 산정(출)	호출
         */
        this.fn_openAffectLot = function ()
        {
        	this.fn_callOpenPage("qam::QAM03400M.xfdl");
        }

        /*
         * 기능 : 화면 호출
         */
        this.fn_callOpenPage = function (pCallUrl)
        {
        	if ( this.pdv_grdMenu.form.objGrdMenuRow < 0) return;

        	var nRow  = this.pdv_grdMenu.form.objGrdMenuRow;
        	var objDataset="";
        	var lotId = "";

            var tabIdx = this.div_work.form.tab.tabindex;
            switch (tabIdx)
            {
                case 0:
                    objDataset = this.ds_yieldRateByProductList;
                break;
            }

        	if(nRow < 0) return "";
        	var arrColData = [];
        	for(var col=0;col<objDataset.colcount;col++)
        	{
        		var colID = objDataset.getColID(col);
        		var colVal = objDataset.getColumn(nRow, col);
        		arrColData.push( '"' + colID + '":"' + colVal + '"' );
        	}

        	 result = "{" + arrColData.join(",") + "}";

        	var objArgs = {
           			       menuName : "QAM02400M",
        				   objList : [result]
        			      };
        	this.gfn_goPage(pCallUrl, objArgs, true);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 이벤트 : 조회조건 아이콘 버튼 클릭시
         */
        this.fn_popup_click = function(obj,e)
        {
        	if (obj.name == "btn_production")
        	{
        		this.fn_openPop("SRCH_PRODUCTDEF280","P00280"); //품목
        	}
        	else if (obj.name == "btn_customer")
        	{
        		this.fn_openPop("SRCH_CUSTOMER284","P00284"); //고객
        	}
        };

        /*
         * 이벤트 : 조회조건 이름 삭제시 id 초기화
         */
        this.fn_popup_canchange = function(obj,e)
        {
        	if (obj.name == "edt_production")
        	{
        		if (this.nfn_isNull(e.postvalue))
        		{
        			this.fn_editProductionClear();
        		}
        	}
        	else if (obj.name == "edt_customer")
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_customer_id.set_value(""); //거래처
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
         * 이벤트 : 품목별 수율현황을 클릭시 해당 row의 LOT정보에 대한 세부내역 정보
         */
        this.tab_search_Tab1_cbo_localeDiv_canitemchange = function(obj,e)
        {
        	if (e.postvalue  == "LOCAL")
        	{
        		this.tab_search.Tab1.form.div_linkPlantId.set_enable(false);
        	}
        	else
        	{
        		this.tab_search.Tab1.form.div_linkPlantId.set_enable(true);
        	}

        };

        /*
         * 이벤트 : 조회조건 검사기준에 따라 검사공정지정 Filter
         */
        this.tab_search_Tab1_cbo_inspType_canitemchange = function(obj,e)
        {
        	this.ds_processSegmentByYieldList.filter("");
        	this.ds_processSegmentByYieldList.filter("INSPTYPE == 'Final' || INSPTYPE == '" +e.postvalue+ "'");
        };

        /*
         * 이벤트 : 품목별 수율현황을 클릭시 해당 row의 LOT정보에 대한 세부내역 정보
         */
        this.div_work_tab_Tabpage1_grd_yieldRateByProductList_oncelldblclick = function(obj,e)
        {
        	var productDefId = obj.getCellValue(e.row, obj.getBindCellIndex("body", "PRODUCTDEFID"));
        	var productDefVer = obj.getCellValue(e.row, obj.getBindCellIndex("body", "PRODUCTDEFVERSION")).split('.')[0];
        	var productName = obj.getCellValue(e.row, obj.getBindCellIndex("body", "PRODUCTDEFNAME"));
        	this.tab_search.Tab1.form.edt_production.set_value(productDefId+productDefVer);
        	this.tab_search.Tab1.form.edt_production_nm.set_value(productName);

        	this.div_work.form.tab.set_tabindex(1);
        	this.fn_search();
        };

        /*
         * 이벤트 : 품목별 불량현황을 클릭시 해당 row의 LOT정보에 대한 세부내역 정보
         */
        this.div_work_tab_Tabpage2_grd_defectStatusByProductList_oncelldblclick = function(obj,e)
        {
        	var productDefId = obj.getCellValue(e.row, obj.getBindCellIndex("body", "PRODUCTDEFID"));
        	var productDefVer = obj.getCellValue(e.row, obj.getBindCellIndex("body", "PRODUCTDEFVERSION")).split('.')[0];
        	var productName = obj.getCellValue(e.row, obj.getBindCellIndex("body", "PRODUCTDEFNAME"));
        	this.tab_search.Tab1.form.edt_production.set_value(productDefId+productDefVer);
        	this.tab_search.Tab1.form.edt_production_nm.set_value(productName);

        	this.div_work.form.tab.set_tabindex(2);
        	this.fn_search();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tab1.form.cbo_localeDiv.addEventHandler("canitemchange",this.tab_search_Tab1_cbo_localeDiv_canitemchange,this);
            this.tab_search.Tab1.form.cbo_period.addEventHandler("canitemchange",this.tab_search_Tab1_cbo_period_canitemchange,this);
            this.tab_search.Tab1.form.cbo_inspType.addEventHandler("canitemchange",this.tab_search_Tab1_cbo_inspType_canitemchange,this);
            this.tab_search.Tab1.form.btn_customer.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.btn_production.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tab1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tab1.form.div_dateFrom.addEventHandler("onkeydown",this.fn_preiodChang,this);
            this.tab_search.Tab1.form.div_dateTo.addEventHandler("onkeydown",this.fn_preiodChang,this);
            this.div_work.form.tab.Tabpage1.form.grd_yieldRateByProductList.addEventHandler("oncelldblclick",this.div_work_tab_Tabpage1_grd_yieldRateByProductList_oncelldblclick,this);
            this.div_work.form.tab.Tabpage2.form.grd_defectStatusByProductList.addEventHandler("oncelldblclick",this.div_work_tab_Tabpage2_grd_defectStatusByProductList_oncelldblclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("QAM02400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
