(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM02500M");
            this.set_titletext("일별 수율현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANT\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTIONDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTSTANDARD\" type=\"STRING\" size=\"256\"/><Column id=\"P_INSPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_INSPECTIONPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODSHAPETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_EXCEPTDEFECTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"P_YIELDQTYSTANDARD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processSegmentByYieldList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSPTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_yieldRateByDayList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SUMMARYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALYIELDRATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTALYIELDRATECUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTALDEFECTRATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTALINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTALDEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTALNORMALQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTALCUMINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTALCUMDEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOCALYIELDRATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOCALYIELDRATECUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOCALDEFECTRATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOCALINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOCALDEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOCALNORMALQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOCALCUMINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOCALCUMDEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GLOBALYIELDRATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GLOBALYIELDRATECUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GLOBALDEFECTREATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GLOBALINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GLOBALDEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GLOBALNORMALQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GLOBALCUMINPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GLOBALCUMDEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_yieldRateWorstByDayList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SHIPMENTSITE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NORMALQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTOCCUPANCY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YIELDRATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTALDEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTNAME1\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTRATE1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTNAME2\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTRATE2\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTNAME3\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTRATE3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTNAME4\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY4\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTRATE4\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTNAME5\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY5\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTRATE5\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTNAME6\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY6\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTRATE6\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTNAME7\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY7\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTRATE7\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTNAME8\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY8\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTRATE8\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTNAME9\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY9\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTRATE9\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTNAME10\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY10\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTRATE10\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EXTDEFECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"EXTDEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EXTDEFECTRATE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_search);
            obj.set_text("검색조건");
            this.tab_search.addChild(obj.name, obj);

            obj = new Combo("cbo_plantId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("유효");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("3");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SITE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label12","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("4");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label11","0","310","127","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("5");
            obj.set_text("수량기준");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_productDivision2","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_unit","108","310","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,YieldQtyStandard,,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_period","10","60","94","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("금일");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_period","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("7");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("SEARCHPERIOD");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_productionDivision","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("8");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTPRODUCTTYPE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_productionDivision","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_customer","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("10");
            obj.set_text("고객");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CUSTOMER");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_customer","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("11");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_customer",null,"135","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_production",null,"160","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_production","108","160",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("14");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_productionId","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("15");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODENAME");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_productionName","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("16");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTNAME");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_production_nm","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_prodShapeType","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("18");
            obj.set_text("TYPE");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("701B101FEBC14B9A87C8DB77D7F23880");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_prodShapeType","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("19");
            obj.set_codecolumn("C,ProductType,ALL,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_lotStandard","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("20");
            obj.set_text("LOT 기준");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("FE2869CDA50145B287FF1E06A7D3C099");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_inspType","0","260","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("21");
            obj.set_text("검사기준");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("EB38046A433441468685F94A94AA0B59");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_inspType","108","260","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("22");
            obj.set_codecolumn("C,YieldInspectionType,,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_lotStandard","108","235","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("23");
            obj.set_codecolumn("C,YieldLOTStandard,,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search","19","350","146","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","350","102","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_customer_id","109","393",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("26");
            obj.set_visible("false");
            obj.set_tooltiptext("조회조건고객ID");
            obj.set_background("thistle");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_exceptDefectClass","0","285","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("27");
            obj.set_text("불량제외항목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("EXCLUSIONOFDEFECT");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Div("div_exceptDefectClass","108","285","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("28");
            obj.set_url("common::com_multiCombo.xfdl");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_dateFrom","108","35",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_dateTo","108","60",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("30");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_customer_id","1","393","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("31");
            obj.set_text("조회조건 고객ID");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CUSTOMER");
            obj.set_visible("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"330","45","20","94",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("32");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
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
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Tab("tab","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab);
            obj.set_text("일별수율");
            obj.set_tooltiptext("DAILYYIELD");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","66","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("일별수율");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_yieldRateByDayList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_yieldRateByDayList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"75\"/><Column size=\"60\"/><Column size=\"85\"/><Column size=\"75\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"75\"/><Column size=\"60\"/><Column size=\"85\"/><Column size=\"75\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"75\"/><Column size=\"60\"/><Column size=\"85\"/><Column size=\"75\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"일자\"/><Cell col=\"2\" colspan=\"6\" text=\"전체\" cssclass=\"cell_headMaster\" tooltiptext=\"Total\"/><Cell col=\"8\" colspan=\"6\" text=\"LOCAL\" cssclass=\"cell_headMaster\" tooltiptext=\"E5DA62CC6D094D16BB7C680CB3DEA660\"/><Cell col=\"14\" colspan=\"6\" text=\"GLOBAL\" cssclass=\"cell_headMaster\" tooltiptext=\"FFECAA1333134DE08194AE8F464A1042\"/><Cell row=\"1\" col=\"2\" text=\"수율(%)\" tooltiptext=\"YEILD\"/><Cell row=\"1\" col=\"3\" text=\"누계수율(%)\" tooltiptext=\"YIELDRATECUM\"/><Cell row=\"1\" col=\"4\" text=\"불량율(%)\" tooltiptext=\"SPECOUTPERCENTAGE\"/><Cell row=\"1\" col=\"5\" text=\"투입수\" tooltiptext=\"PCSINPUTQTY\"/><Cell row=\"1\" col=\"6\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"7\" text=\"양품수\" tooltiptext=\"PCSNORMALQTY\"/><Cell row=\"1\" col=\"8\" text=\"수율(%)\" tooltiptext=\"YEILD\"/><Cell row=\"1\" col=\"9\" text=\"누계수율(%)\" tooltiptext=\"YIELDRATECUM\"/><Cell row=\"1\" col=\"10\" tooltiptext=\"SPECOUTPERCENTAGE\" text=\"불량율(%)\"/><Cell row=\"1\" col=\"11\" text=\"투입수\" tooltiptext=\"PCSINPUTQTY\"/><Cell row=\"1\" col=\"12\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"13\" text=\"양품수\" tooltiptext=\"PCSNORMALQTY\"/><Cell row=\"1\" col=\"14\" text=\"수율(%)\" tooltiptext=\"YEILD\"/><Cell row=\"1\" col=\"15\" text=\"누계수율(%)\" tooltiptext=\"YIELDRATECUM\"/><Cell row=\"1\" col=\"16\" tooltiptext=\"SPECOUTPERCENTAGE\" text=\"불량율(%)\"/><Cell row=\"1\" col=\"17\" text=\"투입수\" tooltiptext=\"PCSINPUTQTY\"/><Cell row=\"1\" col=\"18\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell row=\"1\" col=\"19\" text=\"양품수\" tooltiptext=\"PCSNORMALQTY\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:SUMMARYDATE\" tooltiptext=\"DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"2\" text=\"bind:TOTALYIELDRATE\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:TOTALYIELDRATECUM\" maskeditformat=\"###.##\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:TOTALDEFECTRATE\" displaytype=\"number\" textAlign=\"right\" maskeditformat=\"###.##\"/><Cell col=\"5\" text=\"bind:TOTALINPUTQTY\" maskeditformat=\"#,###\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:TOTALDEFECTQTY\" maskeditformat=\"#,###\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:TOTALNORMALQTY\" maskeditformat=\"#,###\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:LOCALYIELDRATE\" maskeditformat=\"###.##\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:LOCALYIELDRATECUM\" maskeditformat=\"###.##\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:LOCALDEFECTRATE\" displaytype=\"number\" textAlign=\"right\" maskeditformat=\"###.##\"/><Cell col=\"11\" text=\"bind:LOCALINPUTQTY\" maskeditformat=\"#,###\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:LOCALDEFECTQTY\" maskeditformat=\"#,###\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:LOCALNORMALQTY\" maskeditformat=\"#,###\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:GLOBALYIELDRATE\" maskeditformat=\"###.##\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:GLOBALYIELDRATECUM\" maskeditformat=\"###.##\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:GLOBALDEFECTREATE\" displaytype=\"number\" textAlign=\"right\" maskeditformat=\"###.##\"/><Cell col=\"17\" text=\"bind:GLOBALINPUTQTY\" maskeditformat=\"#,###\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"18\" text=\"bind:GLOBALDEFECTQTY\" maskeditformat=\"#,###\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"19\" text=\"bind:GLOBALNORMALQTY\" maskeditformat=\"#,###\" textAlign=\"right\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\"/><Cell col=\"2\" text=\"expr:100-nexacro.round((dataset.getSum(&quot;TOTALDEFECTQTY&quot;)/dataset.getSum(&quot;TOTALINPUTQTY&quot;))*100, 2)\" maskeditformat=\"##0.#0\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"3\" maskeditformat=\"##0.#0\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"4\" text=\"expr:nexacro.round((dataset.getSum(&quot;TOTALDEFECTQTY&quot;)/dataset.getSum(&quot;TOTALINPUTQTY&quot;))*100, 2)\" maskeditformat=\"##0.#0\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;TOTALINPUTQTY&quot;)\" maskeditformat=\"#,##0\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;TOTALDEFECTQTY&quot;)\" maskeditformat=\"#,##0\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;TOTALNORMALQTY&quot;)\" maskeditformat=\"#,##0\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"8\" text=\"expr:100-nexacro.round((dataset.getSum(&quot;LOCALDEFECTQTY&quot;)/dataset.getSum(&quot;LOCALINPUTQTY&quot;))*100, 2)\" maskeditformat=\"##0.#0\" displaytype=\"mask\"/><Cell col=\"9\" maskeditformat=\"##0.#0\" displaytype=\"mask\"/><Cell col=\"10\" text=\"expr:nexacro.round((dataset.getSum(&quot;LOCALDEFECTQTY&quot;)/dataset.getSum(&quot;LOCALINPUTQTY&quot;))*100, 2)\" maskeditformat=\"##0.#0\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"11\" text=\"expr:dataset.getSum(&quot;LOCALINPUTQTY&quot;)\" maskeditformat=\"#,##0\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;LOCALDEFECTQTY&quot;)\" maskeditformat=\"#,##0\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&quot;LOCALNORMALQTY&quot;)\" maskeditformat=\"#,##0\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"14\" text=\"expr:100-nexacro.round((dataset.getSum(&quot;GLOBALDEFECTQTY&quot;)/dataset.getSum(&quot;GLOBALINPUTQTY&quot;))*100, 2)\" maskeditformat=\"##0.#0\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"15\" maskeditformat=\"##0.#0\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"16\" text=\"expr:nexacro.round((dataset.getSum(&quot;GLOBALDEFECTQTY&quot;)/dataset.getSum(&quot;GLOBALINPUTQTY&quot;))*100, 2)\" maskeditformat=\"##0.#0\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"17\" text=\"expr:dataset.getSum(&quot;GLOBALINPUTQTY&quot;)\" maskeditformat=\"#,##0\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"18\" text=\"expr:dataset.getSum(&quot;GLOBALDEFECTQTY&quot;)\" maskeditformat=\"#,##0\" textAlign=\"right\" displaytype=\"mask\"/><Cell col=\"19\" text=\"expr:dataset.getSum(&quot;GLOBALNORMALQTY&quot;)\" maskeditformat=\"#,##0\" textAlign=\"right\" displaytype=\"mask\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_yieldRateByDayList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("일별 Worst");
            obj.set_tooltiptext("DAILYYIELDWORST");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_yieldRateWorstByDayList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_yieldRateWorstByDayList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_yieldRateWorstByDayList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"0\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"110\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"출하SITE\" tooltiptext=\"SHIPMENTSITE\"/><Cell col=\"2\" rowspan=\"2\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"3\" rowspan=\"2\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"4\" rowspan=\"2\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell col=\"5\" rowspan=\"2\" text=\"수율(%)\"/><Cell col=\"6\" rowspan=\"2\" text=\"불량율(%)\"/><Cell col=\"7\" rowspan=\"2\" text=\"투입수\" tooltiptext=\"PCSINPUTQTY\"/><Cell col=\"8\" rowspan=\"2\" text=\"불량수\" tooltiptext=\"PCSDEFECTQTY\"/><Cell col=\"9\" rowspan=\"2\" text=\"불량점유(%)\" tooltiptext=\"DEFECTOCCUPANCY\"/><Cell col=\"10\" rowspan=\"2\" text=\"양품수\" tooltiptext=\"PCSNORMALQTY\"/><Cell col=\"11\" colspan=\"3\" text=\"WORST 1\" cssclass=\"cell_headMaster\"/><Cell col=\"14\" colspan=\"3\" text=\"WORST 2\" cssclass=\"cell_headMaster\"/><Cell col=\"17\" colspan=\"3\" text=\"WORST 3\" cssclass=\"cell_headMaster\"/><Cell col=\"20\" colspan=\"3\" text=\"WORST 4\" cssclass=\"cell_headMaster\"/><Cell col=\"23\" colspan=\"3\" text=\"WORST 5\" cssclass=\"cell_headMaster\"/><Cell col=\"26\" colspan=\"3\" text=\"WORST 6\" cssclass=\"cell_headMaster\"/><Cell col=\"29\" colspan=\"3\" text=\"WORST 7\" cssclass=\"cell_headMaster\"/><Cell col=\"32\" colspan=\"3\" text=\"WORST 8\" cssclass=\"cell_headMaster\"/><Cell col=\"35\" colspan=\"3\" text=\"WORST 9\" cssclass=\"cell_headMaster\"/><Cell col=\"38\" colspan=\"3\" text=\"WORST 10\" cssclass=\"cell_headMaster\"/><Cell col=\"41\" colspan=\"3\" text=\"기타정보\" cssclass=\"cell_headMaster\"/><Cell row=\"1\" col=\"11\" text=\"불량명\"/><Cell row=\"1\" col=\"12\" text=\"불량수\"/><Cell row=\"1\" col=\"13\" text=\"불량율(%)\"/><Cell row=\"1\" col=\"14\" text=\"불량명\"/><Cell row=\"1\" col=\"15\" text=\"불량수\"/><Cell row=\"1\" col=\"16\" text=\"불량율(%)\"/><Cell row=\"1\" col=\"17\" text=\"불량명\"/><Cell row=\"1\" col=\"18\" text=\"불량수\"/><Cell row=\"1\" col=\"19\" text=\"불량율(%)\"/><Cell row=\"1\" col=\"20\" text=\"불량명\"/><Cell row=\"1\" col=\"21\" text=\"불량수\"/><Cell row=\"1\" col=\"22\" text=\"불량율(%)\"/><Cell row=\"1\" col=\"23\" text=\"불량명\"/><Cell row=\"1\" col=\"24\" text=\"불량수\"/><Cell row=\"1\" col=\"25\" text=\"불량율(%)\"/><Cell row=\"1\" col=\"26\" text=\"불량명\"/><Cell row=\"1\" col=\"27\" text=\"불량수\"/><Cell row=\"1\" col=\"28\" text=\"불량율(%)\"/><Cell row=\"1\" col=\"29\" text=\"불량명\"/><Cell row=\"1\" col=\"30\" text=\"불량수\"/><Cell row=\"1\" col=\"31\" text=\"불량율(%)\"/><Cell row=\"1\" col=\"32\" text=\"불량명\"/><Cell row=\"1\" col=\"33\" text=\"불량수\"/><Cell row=\"1\" col=\"34\" text=\"불량율(%)\"/><Cell row=\"1\" col=\"35\" text=\"불량명\"/><Cell row=\"1\" col=\"36\" text=\"불량수\"/><Cell row=\"1\" col=\"37\" text=\"불량율(%)\"/><Cell row=\"1\" col=\"38\" text=\"불량명\"/><Cell row=\"1\" col=\"39\" text=\"불량수\"/><Cell row=\"1\" col=\"40\" text=\"불량율(%)\"/><Cell row=\"1\" col=\"41\" text=\"불량명\"/><Cell row=\"1\" col=\"42\" text=\"불량수\"/><Cell row=\"1\" col=\"43\" text=\"불량율(%)\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:SHIPMENTSITE\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:YIELDRATE\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:DEFECTRATE\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:INPUTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"8\" text=\"bind:DEFECTQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"9\" text=\"bind:DEFECTOCCUPANCY\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:NORMALQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"11\" text=\"bind:DEFECTNAME1\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:DEFECTQTY1\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:DEFECTRATE1\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:DEFECTNAME2\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:DEFECTQTY2\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"16\" text=\"bind:DEFECTRATE2\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/><Cell col=\"17\" text=\"bind:DEFECTNAME3\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:DEFECTQTY3\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"19\" text=\"bind:DEFECTRATE3\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/><Cell col=\"20\" text=\"bind:DEFECTNAME4\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:DEFECTQTY4\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"22\" text=\"bind:DEFECTRATE4\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/><Cell col=\"23\" text=\"bind:DEFECTNAME5\" textAlign=\"left\"/><Cell col=\"24\" text=\"bind:DEFECTQTY5\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"25\" text=\"bind:DEFECTRATE5\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/><Cell col=\"26\" text=\"bind:DEFECTNAME6\" textAlign=\"left\"/><Cell col=\"27\" text=\"bind:DEFECTQTY6\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"28\" text=\"bind:DEFECTRATE6\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/><Cell col=\"29\" text=\"bind:DEFECTNAME7\" textAlign=\"left\"/><Cell col=\"30\" text=\"bind:DEFECTQTY7\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"31\" text=\"bind:DEFECTRATE7\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/><Cell col=\"32\" text=\"bind:DEFECTNAME8\" textAlign=\"left\"/><Cell col=\"33\" text=\"bind:DEFECTQTY8\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"34\" text=\"bind:DEFECTRATE8\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/><Cell col=\"35\" text=\"bind:DEFECTNAME9\" textAlign=\"left\"/><Cell col=\"36\" text=\"bind:DEFECTQTY9\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"37\" text=\"bind:DEFECTRATE9\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/><Cell col=\"38\" text=\"bind:DEFECTNAME10\" textAlign=\"left\"/><Cell col=\"39\" text=\"bind:DEFECTQTY10\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"40\" text=\"bind:DEFECTRATE10\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/><Cell col=\"41\" text=\"bind:EXTDEFECTNAME\" textAlign=\"left\"/><Cell col=\"42\" text=\"bind:EXTDEFECTQTY\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"43\" text=\"bind:EXTDEFECTRATE\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"합계\" tooltiptext=\"SUM\"/><Cell col=\"5\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\" text=\"expr:100-nexacro.round((dataset.getSum(&quot;DEFECTQTY&quot;)/dataset.getSum(&quot;INPUTQTY&quot;))*100, 2)\"/><Cell col=\"6\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\" text=\"expr:nexacro.round((dataset.getSum(&quot;DEFECTQTY&quot;)/dataset.getSum(&quot;INPUTQTY&quot;))*100, 2)\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;INPUTQTY&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;DEFECTQTY&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"9\" displaytype=\"normal\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&quot;NORMALQTY&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"11\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&quot;DEFECTQTY1&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"13\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\" text=\"expr:nexacro.round((dataset.getSum(&quot;DEFECTQTY1&quot;)/dataset.getSum(&quot;INPUTQTY&quot;))*100, 2)\"/><Cell col=\"14\"/><Cell col=\"15\" text=\"expr:dataset.getSum(&quot;DEFECTQTY2&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"16\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\" text=\"expr:nexacro.round((dataset.getSum(&quot;DEFECTQTY2&quot;)/dataset.getSum(&quot;INPUTQTY&quot;))*100, 2)\"/><Cell col=\"17\"/><Cell col=\"18\" text=\"expr:dataset.getSum(&quot;DEFECTQTY3&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"19\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\" text=\"expr:nexacro.round((dataset.getSum(&quot;DEFECTQTY3&quot;)/dataset.getSum(&quot;INPUTQTY&quot;))*100, 2)\"/><Cell col=\"20\"/><Cell col=\"21\" text=\"expr:dataset.getSum(&quot;DEFECTQTY4&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"22\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\" text=\"expr:nexacro.round((dataset.getSum(&quot;DEFECTQTY4&quot;)/dataset.getSum(&quot;INPUTQTY&quot;))*100, 2)\"/><Cell col=\"23\"/><Cell col=\"24\" text=\"expr:dataset.getSum(&quot;DEFECTQTY5&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"25\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\" text=\"expr:nexacro.round((dataset.getSum(&quot;DEFECTQTY5&quot;)/dataset.getSum(&quot;INPUTQTY&quot;))*100, 2)\"/><Cell col=\"26\"/><Cell col=\"27\" text=\"expr:dataset.getSum(&quot;DEFECTQTY6&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"28\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\" text=\"expr:nexacro.round((dataset.getSum(&quot;DEFECTQTY6&quot;)/dataset.getSum(&quot;INPUTQTY&quot;))*100, 2)\"/><Cell col=\"29\"/><Cell col=\"30\" text=\"expr:dataset.getSum(&quot;DEFECTQTY7&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"31\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\" text=\"expr:nexacro.round((dataset.getSum(&quot;DEFECTQTY7&quot;)/dataset.getSum(&quot;INPUTQTY&quot;))*100, 2)\"/><Cell col=\"32\"/><Cell col=\"33\" text=\"expr:dataset.getSum(&quot;DEFECTQTY8&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"34\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\" text=\"expr:nexacro.round((dataset.getSum(&quot;DEFECTQTY8&quot;)/dataset.getSum(&quot;INPUTQTY&quot;))*100, 2)\"/><Cell col=\"35\"/><Cell col=\"36\" text=\"expr:dataset.getSum(&quot;DEFECTQTY9&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"37\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\" text=\"expr:nexacro.round((dataset.getSum(&quot;DEFECTQTY9&quot;)/dataset.getSum(&quot;INPUTQTY&quot;))*100, 2)\"/><Cell col=\"38\"/><Cell col=\"39\" text=\"expr:dataset.getSum(&quot;DEFECTQTY10&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"40\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\" text=\"expr:nexacro.round((dataset.getSum(&quot;DEFECTQTY10&quot;)/dataset.getSum(&quot;INPUTQTY&quot;))*100, 2)\"/><Cell col=\"41\"/><Cell col=\"42\" text=\"expr:dataset.getSum(&quot;EXTDEFECTQTY&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"43\" displaytype=\"mask\" maskeditformat=\"##0.#0\" textAlign=\"right\" text=\"expr:nexacro.round((dataset.getSum(&quot;EXTDEFECTQTY&quot;)/dataset.getSum(&quot;INPUTQTY&quot;))*100, 2)\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("subtitle1","0","0","83","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("일별 Worst");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DAILYYIELDWORST");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

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

            obj = new Static("sta_title","30","16","112","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            obj.set_tooltiptext("MENU_PG-QC-0450");
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
        };
        
        // User Script
        this.addIncludeScript("QAM02500M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM02500M.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM02500M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 품질관리>>수율현황>>일별 수율현황
         * 파일명         : QAM025000M.xfdl
         * 작성자         : yanghee.kim
         * 작성일         : 2021.06.25
         *
         * 설  명         :
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.06.25   yanghee.kim   최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;    //기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;    //품질관리 공통 라이브러리 include

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

        	//조회기간 변경에 따른 날짜 Dataset
        	this.basfn_getPeriodData("ds_periodType");

        	//조회조건-불량제외항목 조회
        	this.fn_searchDefectException();

            //최초 호출되는 초기화 함수
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
            var tabIdx = this.div_work.form.tab.tabindex;
            switch (tabIdx)
            {
                case 0:
                    this.fn_searchYieldRateByDayList();      //탭1 일별 수율
                break;
                case 1:
                    this.fn_searchYieldRateWorstByDayList();   //탭2 일별 Worst
                break;
            }
        };

        /*
         * 기능 : 탭1 일별 수율 검색
         */
        this.fn_searchYieldRateByDayList = function ()
        {
            this.ds_yieldRateByDayList.clearData();
            this.fn_setSearchParam();

            var sSvcID        = "selectYieldRateByDayList";
            var sController   = "/qam02500/selectYieldRateByDayList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_yieldRateByDayList=output";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 탭2 일별 Worst 검색
         */
        this.fn_searchYieldRateWorstByDayList = function ()
        {
            this.ds_yieldRateWorstByDayList.clearData();
        	this.fn_setSearchParam();

            var sSvcID        = "selectYieldRateWorstByDayList";
            var sController   = "/qam02500/selectYieldRateWorstByDayList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_yieldRateWorstByDayList=output";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        this.fn_setSearchParam = function ()
        {
        	var count = 0;
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

        	var dateFrom = this.tab_search.Tab1.form.cal_dateFrom.value + this.qam_jobStartTime;
        	var dateTo = this.tab_search.Tab1.form.cal_dateTo.value + this.qam_jobEndTime;

            this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow, "ENTERPRISEID",         this.qam_enterpriseId);
        	this.ds_search.setColumn(nRow, "LANGUAGETYPE",         this.qam_lang);
            this.ds_search.setColumn(nRow, "PLANT",                this.qam_plantId);
        	this.ds_search.setColumn(nRow, "P_PLANTID",            this.tab_search.Tab1.form.cbo_plantId.value);         	//출하SITE
            this.ds_search.setColumn(nRow, "P_PERIODFR",           dateFrom); 												//조회기간 From
            this.ds_search.setColumn(nRow, "P_PERIODTO",           dateTo);   												//조회기간 To
            this.ds_search.setColumn(nRow, "P_PRODUCTIONDIVISION", this.tab_search.Tab1.form.cbo_productionDivision.value); //양산구분
            this.ds_search.setColumn(nRow, "P_CUSTOMER",           this.tab_search.Tab1.form.edt_customer.value);           //고객
            this.ds_search.setColumn(nRow, "P_PRODUCTDEFID",       this.tab_search.Tab1.form.edt_production.value);        	//품목
        	this.ds_search.setColumn(nRow, "P_PRODSHAPETYPE",      this.tab_search.Tab1.form.cbo_prodShapeType.value); 		//TYPE
        	this.ds_search.setColumn(nRow, "P_LOTSTANDARD",        this.tab_search.Tab1.form.cbo_lotStandard.value); 		//LOT 기준
            this.ds_search.setColumn(nRow, "P_INSPTYPE",           this.tab_search.Tab1.form.cbo_inspType.value);    		//검사기준
            //this.ds_search.setColumn(nRow, "P_INSPECTIONPROCESS",  this.tab_search.Tab1.form.cbo_inspectionProcess.value);  //검사공정지정
            this.ds_search.setColumn(nRow, "P_EXCEPTDEFECTCLASS",  strExceptDefectClass);                                   //불량제외항목
        	this.ds_search.setColumn(nRow, "P_YIELDQTYSTANDARD",  this.tab_search.Tab1.form.cbo_unit.value);                //수량기준
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
        	    if (trId == "selectYieldRateByDayList")
                {
        			if (this.ds_yieldRateByDayList.rowcount  < 1)
        			{
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}

        			var objGrid = this.div_work.form.tab.Tabpage1.form.grd_yieldRateByDayList;
        			var arrList = ["TOTALINPUTQTY","TOTALDEFECTQTY","TOTALNORMALQTY","LOCALINPUTQTY","LOCALDEFECTQTY","LOCALNORMALQTY","GLOBALINPUTQTY","GLOBALDEFECTQTY","GLOBALNORMALQTY"];
        			var cellIdx;

        			if (this.tab_search.Tab1.form.cbo_unit.value == "AREA")
        			{
        				for(var i=0; i<arrList.length; i++)
        				{
        					cellIdx = objGrid.getBindCellIndex("body", arrList[i]);
        					if (cellIdx != -1)
        					{
        						this.div_work.form.tab.Tabpage1.form.grd_yieldRateByDayList.setCellProperty("body",cellIdx,"maskeditformat","###.##") ;
        						this.div_work.form.tab.Tabpage1.form.grd_yieldRateByDayList.setCellProperty("summary",cellIdx,"maskeditformat","###.##") ;
        					}
        				}
        			}
        			else
        			{
        				for(var i=0; i<arrList.length; i++)
        				{
        					cellIdx = objGrid.getBindCellIndex("body", arrList[i]);
        					if (cellIdx != -1)
        					{
        						this.div_work.form.tab.Tabpage1.form.grd_yieldRateByDayList.setCellProperty("body",cellIdx,"maskeditformat","#,###") ;
        						this.div_work.form.tab.Tabpage1.form.grd_yieldRateByDayList.setCellProperty("summary",cellIdx,"maskeditformat","#,###") ;
        					}
        				}
        			}

        			this.fn_setSummaryYieldRateByDayList("S");
        		}
                else if (trId == "selectYieldRateWorstByDayList")
        		{
        			if (this.ds_yieldRateWorstByDayList.rowcount  < 1)
        			{
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}

        			var objGrid = this.div_work.form.tab.Tabpage2.form.grd_yieldRateWorstByDayList;
        			var arrList = ["INPUTQTY","DEFECTQTY","DEFECTQTY1","DEFECTQTY2","DEFECTQTY3","DEFECTQTY4","DEFECTQTY5","DEFECTQTY6","DEFECTQTY7","DEFECTQTY8","DEFECTQTY9","DEFECTQTY10","EXTDEFECTQTY"];
        			var cellIdx;

        			if (this.tab_search.Tab1.form.cbo_unit.value == "AREA")
        			{
        				for(var i=0; i<arrList.length; i++)
        				{
        					cellIdx = objGrid.getBindCellIndex("body", arrList[i]);
        					if (cellIdx != -1)
        					{
        						this.div_work.form.tab.Tabpage2.form.grd_yieldRateWorstByDayList.setCellProperty("body",cellIdx,"maskeditformat","###.##") ;
        						this.div_work.form.tab.Tabpage2.form.grd_yieldRateWorstByDayList.setCellProperty("summary",cellIdx,"maskeditformat","###.##") ;
        					}
        				}
        			}
        			else
        			{
        				for(var i=0; i<arrList.length; i++)
        				{
        					cellIdx = objGrid.getBindCellIndex("body", arrList[i]);
        					if (cellIdx != -1)
        					{
        						this.div_work.form.tab.Tabpage2.form.grd_yieldRateWorstByDayList.setCellProperty("body",cellIdx,"maskeditformat","#,###") ;
        						this.div_work.form.tab.Tabpage2.form.grd_yieldRateWorstByDayList.setCellProperty("summary",cellIdx,"maskeditformat","#,###") ;
        					}
        				}
        			}
        		}
            }
        };

        this.fn_setSummaryYieldRateByDayList = function (pFlag)
        {
        	var lastTotal = 0;
        	var lastLocal = 0;
        	var lastGlobal = 0;

            if (pFlag == "S")
        	{
        		var lastTotal  =  this.ds_yieldRateByDayList.getColumn(0, "TOTALYIELDRATECUM");
        		var lastLocal  =  this.ds_yieldRateByDayList.getColumn(0, "LOCALYIELDRATECUM");
        		var lastGlobal =  this.ds_yieldRateByDayList.getColumn(0, "GLOBALYIELDRATECUM");
        	}
        	var objGrid = this.div_work.form.tab.Tabpage1.form.grd_yieldRateByDayList;
        	var lastTotalIdx = objGrid.getBindCellIndex("body", "TOTALYIELDRATECUM");
        	var lastLocalIdx = objGrid.getBindCellIndex("body", "LOCALYIELDRATECUM");
        	var lastGlobalIdx = objGrid.getBindCellIndex("body", "GLOBALYIELDRATECUM");

        	objGrid.setCellProperty("summary", lastTotalIdx, "text", lastTotal);
        	objGrid.setCellProperty("summary", lastLocalIdx, "text", lastLocal);
        	objGrid.setCellProperty("summary", lastGlobalIdx, "text", lastGlobal); //불량율
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
            this.tab_search.Tab1.form.cbo_period.set_value("THISDAY"); //금일
        	this.fn_setSearchDate("THISDAY");
        	this.tab_search.Tab1.form.cbo_productionDivision.set_value("Production") //조회조건-양산구분(양산)
        	this.tab_search.Tab1.form.cbo_lotStandard.set_value("SPLITLOT");         //조회조건-LOT기준(Split LOT)
        	this.tab_search.Tab1.form.cbo_inspType.set_value("FINISH");              //조회조건-검사기준(최종검사)

        	//조회조건-검사공정지정 => 검사기준에 따라 검사공정지정 Filter 및 기본값 셋팅
        // 	this.ds_processSegmentByYieldList.filter("");
        // 	this.ds_processSegmentByYieldList.filter("INSPTYPE == 'Final' || INSPTYPE == 'FINISH'");
        // 	this.tab_search.Tab1.form.cbo_inspectionProcess.set_value("Final");
        };

        /*
         * 기능 : 조회조건 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
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
         * 이벤트 : 의뢰일자 변경시
         */
        this.fn_preiodChang = function(obj,e)
        {
        	this.tab_search.Tab1.form.cbo_period.set_value("CUSTOM");
        };

        /*
         * 기능 : 조회기간의 기간타입이 변경될 경우 날짜 셋팅
         */
        this.fn_setSearchDate = function (periodType)
        {
        	this.tab_search.Tab1.form.cal_dateFrom.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
         	this.tab_search.Tab1.form.cal_dateTo.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        };

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
        	if(e.postvalue != "CUSTOM")
        	{
        		this.fn_setSearchDate(e.postvalue);
        	}
        };

        /*
         * 이벤트 : 조회조건 검사기준에 따라 검사공정지정 Filter
         */
        // this.tab_search_Tab1_cbo_inspType_canitemchange = function(obj:nexacro.Combo,e:nexacro.ItemChangeEventInfo)
        // {
        // 		this.ds_processSegmentByYieldList.filter("");
        // 		this.ds_processSegmentByYieldList.filter("INSPTYPE == 'Final' || INSPTYPE == '" +e.postvalue+ "'");
        // };
        this.div_work_tab_Tabpage1_grd_yieldRateByDayList_oncelldblclick = function(obj,e)
        {
        	var summaryDate = obj.getCellValue(e.row, obj.getBindCellIndex("body", "SUMMARYDATE"));
        	this.tab_search.Tab1.form.cal_dateFrom.set_value(summaryDate);

        	this.div_work.form.tab.set_tabindex(1);
        	this.fn_search();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tab1.form.cbo_period.addEventHandler("canitemchange",this.tab_search_Tab1_cbo_period_canitemchange,this);
            this.tab_search.Tab1.form.btn_customer.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.btn_production.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.cbo_inspType.addEventHandler("canitemchange",this.tab_search_Tab1_cbo_inspType_canitemchange,this);
            this.tab_search.Tab1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tab1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tab1.form.cal_dateFrom.addEventHandler("onchanged",this.fn_preiodChang,this);
            this.tab_search.Tab1.form.cal_dateTo.addEventHandler("onchanged",this.fn_preiodChang,this);
            this.div_work.form.tab.Tabpage1.form.grd_yieldRateByDayList.addEventHandler("oncelldblclick",this.div_work_tab_Tabpage1_grd_yieldRateByDayList_oncelldblclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("QAM02500M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
