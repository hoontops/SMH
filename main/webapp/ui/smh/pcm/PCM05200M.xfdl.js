(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM05200M");
            this.set_titletext("일자별 실적재공");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_stockbyprocess", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RSLT_PCS_20210303\" type=\"STRING\" size=\"256\"/><Column id=\"RSLT_PNL20210303\" type=\"STRING\" size=\"256\"/><Column id=\"STOCK_PCS20210303\" type=\"STRING\" size=\"256\"/><Column id=\"STOCK_PNL20210303\" type=\"STRING\" size=\"256\"/><Column id=\"RSLT_PCS_20210304\" type=\"STRING\" size=\"256\"/><Column id=\"RSLT_PNL20210304\" type=\"STRING\" size=\"256\"/><Column id=\"STOCK_PCS20210304\" type=\"STRING\" size=\"256\"/><Column id=\"STOCK_PNL20210304\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_RSLT_PCS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_RSLT_PNL\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_STOCK_PCS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_STOCK_PNL\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_RSLT_PCS_AVG\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_RSLT_PNL_AVG\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_STOCK_PCS_AVG\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_STOCK_PNL_AVG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLEPROCESSSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INNERREVISIONTOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_ProdVersion", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFVERSIONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSIONNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_requirementTotal", this);
            obj._setContents("<ColumnInfo><Column id=\"KEYCOLUMN\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"NOTINPUTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NOTINPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALREQUIREMENTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFIDDETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSIONDETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAMEDETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stockbyProduct", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_middleprocessSegment", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_headgrdList", this);
            obj._setContents("<ColumnInfo><Column id=\"COLUMNS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_workResultBylotList", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENT\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WIPMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LARGEPROCESSSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLEPROCESSSEGMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tab_page",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDIVISION","108","235","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTIONTYPE","108","cbo_PRODUCTDIVISION:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("10");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_WORKTYPE","108","cbo_PRODUCTIONTYPE:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("11");
            obj.set_codecolumn("C,LotWorkType,ALL,Y,Y");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_INNERREVISIONTOTAL","108","cbo_WORKTYPE:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,InnerrevisionTotal,,Y,Y");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"cbo_INNERREVISIONTOTAL:0","45","20","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("19");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","Static12_00_00_00_01_00_00:0","102","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_search","15","Static12_00_00_00_01_00_00:0","146","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_hotkey("F2");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("15");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("16");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("17");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("18");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","Static12_00_00_00_01_00_00:6","10","27",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("20");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PLANTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("21");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PLANT");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","10","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_SearchPeriod","0","35","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("26");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("C6A85700415446D89213292978260263");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Calendar("cal_STARTDT","108","35","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("1");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PERIODTYPE","15","60","88","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("27");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Calendar("cal_ENDDT","108","60","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("2");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFID","0","85","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("22");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","85",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("3");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"85","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFVERSION","0","sta_PRODUCTDEFID:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("24");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","108","edt_PRODUCTDEFID:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("4");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFNAME","0","sta_PRODUCTDEFVERSION:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("25");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","cbo_PRODUCTDEFVERSION:5",null,"20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("5");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_AREAID","0","sta_PRODUCTDEFNAME:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("28");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID","108","edt_PRODUCTDEFNAME:5",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("6");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_AREAID",null,"edt_PRODUCTDEFNAME:5","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_INNERREVISIONTOTAL","0","310","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("Rev.별 집계여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("30");
            obj.set_tooltiptext("INNERREVISIONTOTAL");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_MIDDLEPROCESSSEGMENT","0","sta_AREAID:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("31");
            obj.set_text("중공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MIDDLEPROCESSSEGMENT");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_MIDDLEPROCESSSEGMENT","108","edt_AREAID:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_middleprocessSegment");
            obj.set_codecolumn("PROCESSSEGMENTCLASSID");
            obj.set_datacolumn("PROCESSSEGMENTCLASSNAME");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_PROCSEGMENT",null,"cbo_MIDDLEPROCESSSEGMENT:5","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PROCSEGMENT","108","cbo_MIDDLEPROCESSSEGMENT:5",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("8");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PROCSEGMENT","0","sta_MIDDLEPROCESSSEGMENT:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("33");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSCHANGETYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDIVISION","0","sta_PROCSEGMENT:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("34");
            obj.set_tooltiptext("THEPRODUCTTYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTIONTYPE","0","sta_PRODUCTDIVISION:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("35");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_WORKTYPE","0","285","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("36");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WORKTYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","143","34",null,null,null,null,null,null,this);
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

            obj = new Tab("tab_Main","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            obj.set_positionstep("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_Main);
            obj.set_text("공정");
            obj.set_tooltiptext("PROCESSCHANGETYPE");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","110","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("미투입 자재 소요");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("NOTINPUTMATERIALREQUIREMENT");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_stockbyprocess","staTitle:10","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_stockbyprocess",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_stockbyprocess","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_stockbyprocess");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"200\" band=\"left\"/><Column size=\"160\" band=\"left\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\"/><Cell col=\"1\" rowspan=\"2\" colspan=\"2\" suppressalign=\"first\"/><Cell row=\"2\" text=\"No\"/><Cell row=\"2\" col=\"1\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\" suppressalign=\"first\"/><Cell row=\"2\" col=\"2\" text=\"작업장\" tooltiptext=\"WORKAREA\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTNAME\" calendardateformat=\"ddd\" displaytype=\"normal\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" textAlign=\"left\" suppress=\"0\" suppressalign=\"middle\"/><Cell col=\"2\" text=\"bind:AREANAME\" calendardateformat=\"ddd\" displaytype=\"normal\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" textAlign=\"left\" suppress=\"0\" suppressalign=\"middle\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\"/><Cell col=\"2\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab_Main);
            obj.set_text("품목");
            obj.set_tooltiptext("PRODUCTIONDEFINITION");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","130","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("품목별 재공실적");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("RESULTANDSTOCKBYPRODUCT");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_stockbyProduct","staTitle:-10","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_stockbyProduct",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_stockbyProduct","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_stockbyProduct");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"240\" band=\"left\"/><Column size=\"70\" band=\"left\"/><Column size=\"170\" band=\"left\"/><Column size=\"150\" band=\"left\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\"/><Cell col=\"1\" rowspan=\"2\" colspan=\"6\"/><Cell row=\"2\" text=\"No\"/><Cell row=\"2\" col=\"1\" tooltiptext=\"ITEMCODE\" text=\"품목코드\"/><Cell row=\"2\" col=\"2\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell row=\"2\" col=\"3\" tooltiptext=\"ITEMNAME\" text=\"품목명\"/><Cell row=\"2\" col=\"4\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"2\" col=\"5\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"2\" col=\"6\" text=\"작업장\" tooltiptext=\"WORKAREA\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:USERSEQUENCE\"/><Cell col=\"5\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"6\" text=\"bind:AREANAME\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"합계\" tooltiptext=\"TOTALAMOUNT\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_Main);
            obj.set_text("LOT");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"34","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("LOT별 실적현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("WORKRESULTBYLOT");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_workResultBylotList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_workResultBylotList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell col=\"1\" rowspan=\"2\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell col=\"2\" rowspan=\"2\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell col=\"3\" rowspan=\"2\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"4\" rowspan=\"2\" text=\"품목명\" tooltiptext=\"ITEMID\"/><Cell col=\"5\" rowspan=\"2\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"6\" rowspan=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"7\" rowspan=\"2\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell col=\"8\" rowspan=\"2\" text=\"Roll/Sheet\" tooltiptext=\"RTRSHT_WORDWRAP\"/><Cell col=\"9\" rowspan=\"2\" text=\"작업구분\" tooltiptext=\"WORKTYPE\"/><Cell col=\"10\" rowspan=\"2\" text=\"자원\" tooltiptext=\"RESOURCE\"/><Cell col=\"11\" colspan=\"3\" text=\"실적\" cssclass=\"cell_headMaster\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell col=\"14\" colspan=\"3\" text=\"현재공\" tooltiptext=\"CURRENTWIP\"/><Cell col=\"17\" colspan=\"3\" text=\"투입\" tooltiptext=\"INPUT\"/><Cell col=\"20\" rowspan=\"2\" text=\"대공정\" tooltiptext=\"TOPPROCESSSEGMENTCLASS\"/><Cell col=\"21\" rowspan=\"2\" text=\"중공정\" tooltiptext=\"MIDDLEPROCESSSEGMENT\"/><Cell row=\"1\" col=\"11\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"12\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"13\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"14\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"15\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"16\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"17\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"18\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"19\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/></Band><Band id=\"body\"><Cell text=\"bind:LOTTYPE\"/><Cell col=\"1\" text=\"bind:PLANTID\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:LOTID\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:RTRSHT\"/><Cell col=\"9\" text=\"bind:WORKTYPE\" combocodecol=\"C,LotWorkType,,Y,N\" displaytype=\"combotext\"/><Cell col=\"10\" text=\"bind:EQUIPMENT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:SENDPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:SENDPANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:SENDMMQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:WIPQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:WIPPANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:WIPMMQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:INPUTPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"18\" text=\"bind:INPUTPANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"19\" text=\"bind:INPUTMMQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"20\" text=\"bind:LARGEPROCESSSEGMENT\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:MIDDLEPROCESSSEGMENT\" textAlign=\"left\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"합계\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\" text=\"0\" displaytype=\"number\" expr=\"dataset.getSum(&quot;SENDPCSQTY&quot;)\"/><Cell col=\"12\" text=\"0\" displaytype=\"number\" expr=\"dataset.getSum(&quot;SENDPANELQTY&quot;)\"/><Cell col=\"13\" text=\"0\" displaytype=\"number\" expr=\"dataset.getSum(&quot;SENDMMQTY&quot;)\"/><Cell col=\"14\" text=\"0\" displaytype=\"number\" expr=\"dataset.getSum(&quot;WIPQTY&quot;)\"/><Cell col=\"15\" displaytype=\"number\" text=\"0\" expr=\"dataset.getSum(&quot;WIPPANELQTY&quot;)\"/><Cell col=\"16\" text=\"0\" displaytype=\"number\" expr=\"dataset.getSum(&quot;WIPMMQTY&quot;)\"/><Cell col=\"17\" displaytype=\"number\" text=\"0\" expr=\"dataset.getSum(&quot;INPUTPCSQTY&quot;)\"/><Cell col=\"18\" text=\"0\" displaytype=\"number\" expr=\"dataset.getSum(&quot;INPUTPANELQTY&quot;)\"/><Cell col=\"19\" displaytype=\"number\" text=\"0\" expr=\"dataset.getSum(&quot;INPUTMMQTY&quot;)\"/><Cell col=\"20\"/><Cell col=\"21\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_workResultBylotList","112","2","140","30",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_text("");
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

            obj = new Static("sta_title","30","16","150","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("화면명");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
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
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.tab_page.form.cbo_PLANTID","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","tab_search.tab_page.form.cal_STARTDT","value","ds_search","PERIOD_PERIODFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","tab_search.tab_page.form.cbo_PERIODTYPE","value","ds_search","PERIODTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","tab_search.tab_page.form.cal_ENDDT","value","ds_search","PERIOD_PERIODTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.tab_page.form.edt_PRODUCTDEFID","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.tab_page.form.cbo_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.tab_page.form.edt_PRODUCTDEFNAME","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.tab_page.form.edt_AREAID","value","ds_search","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.tab_page.form.cbo_MIDDLEPROCESSSEGMENT","value","ds_search","MIDDLEPROCESSSEGMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.tab_page.form.edt_PROCSEGMENT","value","ds_search","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.tab_page.form.cbo_PRODUCTDIVISION","value","ds_search","PRODUCTDIVISION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_search.tab_page.form.cbo_INNERREVISIONTOTAL","value","ds_search","INNERREVISIONTOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab_search.tab_page.form.cbo_PRODUCTIONTYPE","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_search.tab_page.form.cbo_WORKTYPE","value","ds_search","WORKTYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM05200M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM05200M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM05200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 일자별 실적재공 현황
         * 파일명 		: PCM05200M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2021.04.19
         * 설  명		: 일자별 실적재공 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.19	박대호   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// 초기화 (공통)
        	this.nfn_formInit(obj);

        	// 검색조건 공통 콤보 설정
        	this.fn_initCombo();
        	this.fn_initDatePicker();
        	this.InnerrevisionTotalChange();

        	this.tab_search.tab_page.form.btn_edt_AREAID.addEventHandler("onclick", this.btn_Clear, this);
        	this.tab_search.tab_page.form.btn_edt_PROCSEGMENT.addEventHandler("onclick", this.btn_Clear, this);

        };
        this.btn_Clear = function(obj, e)
        {
        	switch(obj.name) {
        	case "btn_AREAID":
        		this.ds_search.setColumn(0,"AREAID", "");
        		break;
        	case "btn_PROCSEGMENT":
        		this.ds_search.setColumn(0,"PROCESSSEGMENTID", "");
        		break;
        	default:
        	    break;
        	}
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색(메인 -  고객정보 그리드)
         */
        this.fn_search = function (obj, e)
        {
         	var strDate = this.tab_search.tab_page.form.cal_STARTDT.value;
         	strDate = this.fn_GetOneMonthAfter(strDate);
         	var endDate = this.tab_search.tab_page.form.cal_ENDDT.value;

        	var shearchDate = this.fn_DiffDate(strDate, endDate);
         	if(shearchDate > 0)
         	{
         		// 조회기간의 날짜 범위는 {0}일 이내로 제한 됩니다.
        		this.gfn_Message("DateLimit", "90", "info");
        		return false;
         	}

        	switch(this.div_work.form.tab_Main.tabindex) {
        	case 0 : this.GetstockbyprocessList();
        		break;
        	case 1 : this.GetstockbyProductList();
        		break;
        	case 2 : this.GetWorkResultBylotList();
        		break;
        	}

        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {

        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_initDatePicker();
        	this.fn_initCombo();
        	this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        	this.InnerrevisionTotalChange();
        };

        /*
         * 기능 : 신규
         */
        this.fn_new = function(obj,e)
        {

        };


        /*
         * 기능 : 삭제
         */
        this.fn_delete = function(obj,e)
        {

        };
        /*
         * 기능 : 도움말  => 공통 처리
         */
        this.fn_help = function(obj,e)
        {

        };

        /*
         * 기능 : 출력
         */
        this.fn_print = function(obj,e)
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
        	trace('fn_callBack trId ?' + trId);
        	switch(trId)
        	{
        		case "selectEcmLookupValuesVList2ds_CSiteTypeALL" :
        		{
        			this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        			break;
        		}
        		case "selectEcmLookupValuesVList2ds_CInnerrevisionTotal" :
        		{
        			this.fn_middleprocessSegmentCombo();//중공정 콤보조회
        			break;
        		}
        		case "selectProcessSegmentClassByType" :
        		{
        			this.ds_middleprocessSegment.insertRow(0);
        			this.ds_middleprocessSegment.setColumn(0,"PROCESSSEGMENTCLASSID", "");
        			this.ds_middleprocessSegment.setColumn(0,"PROCESSSEGMENTCLASSNAME", "전체조회");
        			this.ds_search.setColumn(0, "MIDDLEPROCESSSEGMENT", "");
        			break;
        		}
        		case "selectStockbyprocessList" ://공정
        		{
        			if(this.ds_headgrdList.rowcount > 0)
        			{
        				this.fn_createStockbyprocessPivotgrdList();
        			}
        			break;
        		}
        		case "selectStockbyProductList" ://품목
        		{
        			if(this.ds_headgrdList.rowcount > 0)
        			{
        				this.fn_createStockbyProductPivotgrdList();
        			}
        			this.fn_innerRevisionTotalChange();
        			break;
        		}
        		default:
        		{
        		}
        		break;
        	}

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
        		case "POPUP_PRODUCTDEFID" :
        		{//PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME
        		this.setProduct_ProdVersion(rtn, this.ds_cbo_ProdVersion, this.ds_search, "B");
        		this.ds_search.setColumn(0,"PRODUCTDEFID",rtn[0]);
        		this.ds_search.setColumn(0,"PRODUCTDEFNAME",rtn[2]);
        		this.ds_search.setColumn(0,"PRODUCTDEFVERSION",rtn[1]);
        		}
        		break;
        		case "POPUP_AREAID" :
        		{
        			rtn = this.gfn_split(rtn, ",");
        			if (rtn.length == 2)
        			{
        				this.tab_search.tab_page.form.edt_AREAID.set_value(rtn[1]);
        				this.ds_search.setColumn( 0, "AREAID",          rtn[0] );
        			}
        			else
        			{
        				var value = [];
        				var dsval = [];
        				for (var i = 0; i < rtn.length; i++)
        				{
        					if ((i % 2) == 0)
        					{
        						dsval.push(rtn[i]);
        					}
        					else
        					{
        						value.push(rtn[i]);
        					}
        				}

        				this.tab_search.tab_page.form.edt_AREAID.set_value(value.join(","));
        				this.ds_search.setColumn( 0, "AREAID",          dsval.join(",") );
        			}
        		}
        		break;
        		case "POPUP_PROCSEGMENT" :
        		{
        			this.tab_search.tab_page.form.edt_PROCSEGMENT.set_value( rtn[1]);
        			this.ds_search.setColumn( 0, "PROCESSSEGMENTID",         rtn[0]);
        		}
        		break;
        	};
        };

         /*
         * 기능(공통팝업) : 조회
         */
        this.fn_openPop = function(svcId, popId, pArg)
        {

        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
         this.fn_initDatePicker = function ()
        {
        	this.basfn_getPeriodData("ds_periodType");
         	this.ds_search.setColumn(0,"PERIOD_PERIODFR",this.ds_periodType.getColumn(0,"THISMONTH_S"));
         	this.ds_search.setColumn(0,"PERIOD_PERIODTO",this.ds_periodType.getColumn(0,"THISMONTH_E"));
        	this.ds_search.setColumn(0,"PERIODTYPE","THISMONTH");

        };
        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.ds_search.setColumn(0,"PERIOD_PERIODFR",this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.ds_search.setColumn(0,"PERIOD_PERIODTO",this.ds_periodType.getColumn(0,periodType+"_E"));
        };

        this.fn_initCombo = function ()
        {
        	this.ds_cbo_ProdVersion.deleteAll();
        	this.AddAll(this.ds_cbo_ProdVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");
        	this.ds_search.setColumn(0, "PRODUCTDEFID", "");
        	this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());


        }

        /*
         * 기능 : 중공정 콤보 조회
         */
        this.fn_middleprocessSegmentCombo = function ()
        {
        	this.ds_middleprocessSegment.clearData();
        	this.ds_search.setColumn(0,"PROCESSSEGMENTCLASSTYPE", "MiddleProcessSegmentClass");

        	var sSvcID 			= "selectProcessSegmentClassByType";
        	var sController 	= "/pcm05200/selectProcessSegmentClassByType.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_middleprocessSegment=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }
        /*
         * 기능 : 공정탭 조회
         */
        this.GetstockbyprocessList = function ()
        {
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.set_formats(this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.formats);
        	this.ds_stockbyprocess.clearData();
        	this.ds_headgrdList.clearData();

        	var sSvcID 			= "selectStockbyprocessList";
        	var sController 	= "/pcm05200/selectStockbyprocessList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_headgrdList=output1 ds_stockbyprocess=output2";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }
        /*
         * 기능 : 품목탭 조회
         */
        this.GetstockbyProductList = function ()
        {
        	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.set_formats(this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.formats);
        	this.ds_stockbyProduct.clearData();
        	this.ds_headgrdList.clearData();

        	var sSvcID 			= "selectStockbyProductList";
        	var sController 	= "/pcm05200/selectStockbyProductList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_headgrdList=output1 ds_stockbyProduct=output2";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }
        /*
         *	LOT 탭 조회
         */
        this.GetWorkResultBylotList = function ()
        {
        	this.ds_workResultBylotList.clearData();
        	this.ds_search.setColumn(0,"TYPE", "BYLOT");
        trace("ds_search-->"+this.ds_search.saveXML());
        	var sSvcID 			= "selectWorkResultBylotList";
        	var sController 	= "/pcm06100/selectWorkResultBylotList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_workResultBylotList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        /*
         * 기능 : Rev.별 집계여부 변경
         */
        this.InnerrevisionTotalChange = function ()
        {
        	switch(this.div_work.form.tab_Main.tabindex)
        	{
        		case 0 : case 2 :
        		{
        			this.tab_search.tab_page.form.sta_INNERREVISIONTOTAL.set_visible(false);
        			this.tab_search.tab_page.form.cbo_INNERREVISIONTOTAL.set_visible(false);
        			this.tab_search.tab_page.form.btn_search.set_top("cbo_WORKTYPE:20");
        			this.tab_search.tab_page.form.btn_clear.set_top("cbo_WORKTYPE:20");

        			break;
        		}
        		case 1 :
        		{
        			this.tab_search.tab_page.form.sta_INNERREVISIONTOTAL.set_visible(true);
        			this.tab_search.tab_page.form.cbo_INNERREVISIONTOTAL.set_visible(true);
        			this.tab_search.tab_page.form.btn_search.set_top("cbo_INNERREVISIONTOTAL:20");
        			this.tab_search.tab_page.form.btn_clear.set_top("cbo_INNERREVISIONTOTAL:20");
        			break;
        		}
        	}
        }
        /******************************************************************************************
         * 기능 : 3달후 날짜 구하는 함수.
         * 인자 : strDate : yyyyMMdd형태의 날짜 ( 예 : "20121122" )
         * 리턴 : 성공 = yyyyMMdd형태의 해당날짜를 리턴. ( 예 : "20121130" )
                   실패 = ""
         * 예문 :
         *****************************************************************************************/
        this.fn_GetOneMonthAfter = function (strDate)
        {
            if (strDate)
            {
        		var date = new Date(strDate.substr(0,4), strDate.substr(4,2), strDate.substr(6,2));
                var d = (new Date(date)).addMonth(2);
            }
        	else
            {
                var d = (new Date).addMonth(2);
            }

            var s = (new Date(d)).getFullYear()
                   + (((new Date(d)).getMonth() + 1) + "").padLeft(2, '0')
                   + (((new Date(d)).getDate()) + "").padLeft(2, '0');
            return (s);
        }
        /*******************************************************************************
         ★ 설명
             2개의 날짜간의 일수 계산
         ★ parameter
            1. sStartDate : yyyyMMdd형태의 From 일자 ( 예 : "20121122" )
            2. sEndDate   : yyyyMMdd형태의 To 일자 ( 예 : "20121202" )
         ★ return
            - 성공 = 숫자 형태의 차이일수  ( 예 : 10 )
                     단, sEndDate < sStartDate이면 음수가 return된다.
            - 실패 = NaN
         ******************************************************************************/

        this.fn_DiffDate  = function(sStartDate, sEndDate)
        {
            var vFromDate = new Date(parseInt(sEndDate.substring(0,4),  10), parseInt(sEndDate.substring(4,6)-1,  10), parseInt(sEndDate.substring(6,8), 10));
            var vToDate = new Date(parseInt(sStartDate.substring(0,4),  10), parseInt(sStartDate.substring(4,6)-1,  10), parseInt(sStartDate.substring(6,8), 10));

            return parseInt((vFromDate - vToDate)/(1000*60*60*24));
        }

        /*
         * 기능 : 공정 피벗테이블 생성
         */
         this.fn_createStockbyprocessPivotgrdList = function ()
        {
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.set_enableredraw(false);
        	var lastTopCount = 0;//헤더 상단 마지막 셀카운트
        	var lastMidCount = 0;//헤더 중단 마지막 셀카운트
        	var lastbotCount = 0;//헤더 하단 마지막 셀카운트
        	//컬럼추가
        	for(var c = 0; c < this.ds_headgrdList.rowcount ; c++)
        	{

        		var colIdx1 = 0;
        		var colIdx2 = 0;
        		var colIdx3 = 0;
        		var colIdx4 = 0;

        		colIdx1 = this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.appendContentsCol("body");
        		colIdx2 = this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.appendContentsCol("body");
        		colIdx3 = this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.appendContentsCol("body");
        		colIdx4 = this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.appendContentsCol("body");
        		var calCount = this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.getCellCount("head");
        		//헤더명
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("head", c * 4 + 2, "text", this.ds_headgrdList.getColumn(c, "COLUMNS"));
        		lastTopCount = c * 4 + 2;
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("head", c * 4 + 2 + (4 * (c + 1)), "text", "실적");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("head", c * 4 + 4 + (4 * (c + 1)), "text", "재공");
        		lastMidCount = c * 4 + 4 + (4 * (c + 1));
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("head", c * 4 + 5 + (4 * (c + 1)) + (4 * (c + 1)), "text", "PCS");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("head", c * 4 + 6 + (4 * (c + 1)) + (4 * (c + 1)), "text", "PNL");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("head", c * 4 + 7 + (4 * (c + 1)) + (4 * (c + 1)), "text", "PCS");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("head", c * 4 + 8 + (4 * (c + 1)) + (4 * (c + 1)), "text", "PNL");
        		lastbotCount = c * 4 + 8 + (4 * (c + 1)) + (4 * (c + 1));
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setFormatColProperty(colIdx1 , "size", 80);
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setFormatColProperty(colIdx2 , "size", 80);
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setFormatColProperty(colIdx3 , "size", 80);
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setFormatColProperty(colIdx4 , "size", 80);

        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx1 , "textAlign", "right");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx2 , "textAlign", "right");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx3 , "textAlign", "right");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx4 , "textAlign", "right");

        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx1 , "displaytype", "mask");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx2 , "displaytype", "mask");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx3 , "displaytype", "mask");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx4 , "displaytype", "mask");

        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx1 , "maskeditformat", "#,##0");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx2 , "maskeditformat", "#,##0");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx3 , "maskeditformat", "#,##0");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx4 , "maskeditformat", "#,##0");

         		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx1 , "text", "bind:" + "RSLT_PCS_" + nexacro.replaceAll(this.ds_headgrdList.getColumn(c, "COLUMNS"),"-",""));
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx2 , "text", "bind:" + "RSLT_PNL_" + nexacro.replaceAll(this.ds_headgrdList.getColumn(c, "COLUMNS"),"-",""));
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx3 , "text", "bind:" + "STOCK_PCS_" + nexacro.replaceAll(this.ds_headgrdList.getColumn(c, "COLUMNS"),"-",""));
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx4 , "text", "bind:" + "STOCK_PNL_" + nexacro.replaceAll(this.ds_headgrdList.getColumn(c, "COLUMNS"),"-",""));

        		//summary
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx1, "displaytype", "mask");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx2, "displaytype", "mask");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx3, "displaytype", "mask");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx4, "displaytype", "mask");

        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx1 , "maskeditformat", "#,##0");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx2 , "maskeditformat", "#,##0");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx3 , "maskeditformat", "#,##0");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx4 , "maskeditformat", "#,##0");

        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx1 , "textAlign", "right");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx2 , "textAlign", "right");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx3 , "textAlign", "right");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx4 , "textAlign", "right");

        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx1 , "expr", "dataset.getSum(\"RSLT_PCS_" + nexacro.replaceAll(this.ds_headgrdList.getColumn(c, "COLUMNS"),"-","") + "\")");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx2 , "expr", "dataset.getSum(\"RSLT_PNL_" + nexacro.replaceAll(this.ds_headgrdList.getColumn(c, "COLUMNS"),"-","") + "\")");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx3 , "expr", "dataset.getSum(\"STOCK_PCS_" + nexacro.replaceAll(this.ds_headgrdList.getColumn(c, "COLUMNS"),"-","") + "\")");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx4 , "expr", "dataset.getSum(\"STOCK_PNL_" + nexacro.replaceAll(this.ds_headgrdList.getColumn(c, "COLUMNS"),"-","") + "\")");


        	}

        	var colIdx1 = 0;
        	var colIdx2 = 0;
        	var colIdx3 = 0;
        	var colIdx4 = 0;
        	var colIdx5 = 0;
        	var colIdx6 = 0;
        	//총계, 평균
        	colIdx1 = this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.appendContentsCol("body");
        	colIdx2 = this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.appendContentsCol("body");
        	colIdx3 = this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.appendContentsCol("body");
        	colIdx4 = this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.appendContentsCol("body");
        	colIdx5 = this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.appendContentsCol("body");
        	colIdx6 = this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.appendContentsCol("body");

        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("head", lastTopCount + 4, "text", "총계");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("head", lastTopCount + 6, "text", "평균");

        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("head", lastMidCount + 8, "text", "실적");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("head", lastMidCount + 10, "text", "실적");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("head", lastMidCount + 12, "text", "재공");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("head", lastbotCount + 13, "text", "PCS");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("head", lastbotCount + 14, "text", "PNL");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("head", lastbotCount + 15, "text", "PCS");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("head", lastbotCount + 16, "text", "PNL");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("head", lastbotCount + 17, "text", "PCS");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("head", lastbotCount + 18, "text", "PNL");

        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setFormatColProperty(colIdx1 , "size", 80);
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setFormatColProperty(colIdx2 , "size", 80);
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setFormatColProperty(colIdx3 , "size", 80);
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setFormatColProperty(colIdx4 , "size", 80);
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setFormatColProperty(colIdx5 , "size", 80);
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setFormatColProperty(colIdx6 , "size", 80);

        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx1 , "displaytype", "mask");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx2 , "displaytype", "mask");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx3 , "displaytype", "mask");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx4 , "displaytype", "mask");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx5 , "displaytype", "mask");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx6 , "displaytype", "mask");

        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx1 , "textAlign", "right");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx2 , "textAlign", "right");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx3 , "textAlign", "right");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx4 , "textAlign", "right");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx5 , "textAlign", "right");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx6 , "textAlign", "right");

        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx1 , "maskeditformat", "#,##0");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx2 , "maskeditformat", "#,##0");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx3 , "maskeditformat", "#,##0");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx4 , "maskeditformat", "#,##0");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx5 , "maskeditformat", "#,##0");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx6 , "maskeditformat", "#,##0");

        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx1 , "text", "bind:TOTAL_RSLT_PCS");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx2 , "text", "bind:TOTAL_RSLT_PNL");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx3 , "text", "bind:TOTAL_RSLT_PCS_AVG");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx4 , "text", "bind:TOTAL_RSLT_PNL_AVG");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx5 , "text", "bind:TOTAL_STOCK_PCS_AVG");
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("body", colIdx6 , "text", "bind:TOTAL_STOCK_PNL_AVG");

        	//summary
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx1, "displaytype", "mask");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx2, "displaytype", "mask");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx3, "displaytype", "mask");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx4, "displaytype", "mask");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx5, "displaytype", "mask");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx6, "displaytype", "mask");

        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx1 , "maskeditformat", "#,##0");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx2 , "maskeditformat", "#,##0");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx3 , "maskeditformat", "#,##0");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx4 , "maskeditformat", "#,##0");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx5 , "maskeditformat", "#,##0");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx6 , "maskeditformat", "#,##0");

        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx1 , "textAlign", "right");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx2 , "textAlign", "right");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx3 , "textAlign", "right");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx4 , "textAlign", "right");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx5 , "textAlign", "right");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx6 , "textAlign", "right");

        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx1 , "expr", "dataset.getSum(\"TOTAL_RSLT_PCS\")");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx2 , "expr", "dataset.getSum(\"TOTAL_RSLT_PNL\")");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx3 , "expr", "dataset.getSum(\"TOTAL_RSLT_PCS_AVG\")");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx4 , "expr", "dataset.getSum(\"TOTAL_RSLT_PNL_AVG\")");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx5 , "expr", "dataset.getSum(\"TOTAL_STOCK_PCS_AVG\")");
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.setCellProperty("summary", colIdx6 , "expr", "dataset.getSum(\"TOTAL_STOCK_PNL_AVG\")");


        	var midCellCount = lastMidCount + 12;
        	//헤더 중단 머지
        	for(var c = 0; c < this.ds_headgrdList.rowcount * 2 + 3 ; c++)
        	{
        		var nStartCol = (colIdx6- 2 * c) - 1;
        		var nEndCol = colIdx6- 2 * c;
        		var nFirstCell = midCellCount - 2 * c;
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.mergeContentsCell("head", 1, nStartCol, 1, nEndCol, nFirstCell, false);
        	}

        	//헤더 상단 총계 머지
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.mergeContentsCell("head", 0, colIdx6 - 3, 0, colIdx6, colIdx6 - 4, false);
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.mergeContentsCell("head", 0, colIdx6 - 5, 0, colIdx6- 4 , colIdx6 - 6, false);
        	//헤더 상단 머지
        	for(var c = 0; c < this.ds_headgrdList.rowcount ; c++)
        	{
        		var nStartCol = (lastTopCount - 4 * c) + 1;
        		var nEndCol = (lastTopCount - 4 * c) + 4;
        		var nFirstCell = lastTopCount - 4 * c;
        		this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.mergeContentsCell("head", 0, nStartCol, 0, nEndCol, nFirstCell, false);

        	}
        	this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.set_enableredraw(true);
        }
        /*
         * 기능 : 공정 피벗테이블 생성
         */
         this.fn_createStockbyProductPivotgrdList = function ()
        {
        	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.set_enableredraw(false);
        	var lastTopCount = 0;//헤더 상단 마지막 셀카운트
        	var lastMidCount = 0;//헤더 중단 마지막 셀카운트
        	var lastbotCount = 0;//헤더 하단 마지막 셀카운트
        	//컬럼추가
        	for(var c = 0; c < this.ds_headgrdList.rowcount ; c++)
        	{

        		var colIdx1 = 0;
        		var colIdx2 = 0;
        		var colIdx3 = 0;
        		var colIdx4 = 0;

        		colIdx1 = this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.appendContentsCol("body");
        		colIdx2 = this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.appendContentsCol("body");
        		colIdx3 = this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.appendContentsCol("body");
        		colIdx4 = this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.appendContentsCol("body");
        		var calCount = this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.getCellCount("head");
        		//헤더명
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("head", c * 4 + 2, "text", this.ds_headgrdList.getColumn(c, "COLUMNS"));
        		//4칸씩 고정증가(c * 4) + 고정셀부터 셀수(+ 2)
        		lastTopCount = c * 4 + 2;
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("head", c * 4 + 2 + (4 * (c + 1)), "text", "실적");
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("head", c * 4 + 4 + (4 * (c + 1)), "text", "재공");
        		//4칸씩 고정증가(c * 4) + 고정셀부터 셀수(+ 4) + 중간칸으로 가기위한 셀고정증가(+ (4 * (c + 1)))
        		lastMidCount = c * 4 + 4 + (4 * (c + 1));
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("head", c * 4 + 9 + (4 * (c + 1)) + (4 * (c + 1)), "text", "PCS");
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("head", c * 4 + 10 + (4 * (c + 1)) + (4 * (c + 1)), "text", "PNL");
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("head", c * 4 + 11 + (4 * (c + 1)) + (4 * (c + 1)), "text", "PCS");
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("head", c * 4 + 12 + (4 * (c + 1)) + (4 * (c + 1)), "text", "PNL");
        		//4칸씩 고정증가(c * 4) + 고정셀부터 셀수(+ 12) + 맨아래칸으로 가기위한 셀고정증가((4 * (c + 1)) + (4 * (c + 1)))
        		lastbotCount = c * 4 + 12 + (4 * (c + 1)) + (4 * (c + 1));
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setFormatColProperty(colIdx1 , "size", 80);
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setFormatColProperty(colIdx2 , "size", 80);
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setFormatColProperty(colIdx3 , "size", 80);
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setFormatColProperty(colIdx4 , "size", 80);

        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx1 , "textAlign", "right");
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx2 , "textAlign", "right");
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx3 , "textAlign", "right");
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx4 , "textAlign", "right");

        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx1 , "displaytype", "mask");
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx2 , "displaytype", "mask");
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx3 , "displaytype", "mask");
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx4 , "displaytype", "mask");

        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx1 , "maskeditformat", "#,##0");
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx2 , "maskeditformat", "#,##0");
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx3 , "maskeditformat", "#,##0");
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx4 , "maskeditformat", "#,##0");

         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx1 , "text", "bind:" + "RSLT_PCS_" + nexacro.replaceAll(this.ds_headgrdList.getColumn(c, "COLUMNS"),"-",""));
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx2 , "text", "bind:" + "RSLT_PNL_" + nexacro.replaceAll(this.ds_headgrdList.getColumn(c, "COLUMNS"),"-",""));
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx3 , "text", "bind:" + "STOCK_PCS_" + nexacro.replaceAll(this.ds_headgrdList.getColumn(c, "COLUMNS"),"-",""));
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx4 , "text", "bind:" + "STOCK_PNL_" + nexacro.replaceAll(this.ds_headgrdList.getColumn(c, "COLUMNS"),"-",""));

        		//summary
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx1, "displaytype", "mask");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx2, "displaytype", "mask");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx3, "displaytype", "mask");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx4, "displaytype", "mask");

         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx1 , "maskeditformat", "#,##0");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx2 , "maskeditformat", "#,##0");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx3 , "maskeditformat", "#,##0");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx4 , "maskeditformat", "#,##0");

         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx1 , "textAlign", "right");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx2 , "textAlign", "right");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx3 , "textAlign", "right");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx4 , "textAlign", "right");

         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx1 , "expr", "dataset.getSum(\"RSLT_PCS_" + nexacro.replaceAll(this.ds_headgrdList.getColumn(c, "COLUMNS"),"-","") + "\")");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx2 , "expr", "dataset.getSum(\"RSLT_PNL_" + nexacro.replaceAll(this.ds_headgrdList.getColumn(c, "COLUMNS"),"-","") + "\")");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx3 , "expr", "dataset.getSum(\"STOCK_PCS_" + nexacro.replaceAll(this.ds_headgrdList.getColumn(c, "COLUMNS"),"-","") + "\")");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx4 , "expr", "dataset.getSum(\"STOCK_PNL_" + nexacro.replaceAll(this.ds_headgrdList.getColumn(c, "COLUMNS"),"-","") + "\")");


        	}

         	var colIdx1 = 0;
         	var colIdx2 = 0;
         	var colIdx3 = 0;
         	var colIdx4 = 0;
         	var colIdx5 = 0;
         	var colIdx6 = 0;
         	//총계, 평균
         	colIdx1 = this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.appendContentsCol("body");
         	colIdx2 = this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.appendContentsCol("body");
         	colIdx3 = this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.appendContentsCol("body");
         	colIdx4 = this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.appendContentsCol("body");
         	colIdx5 = this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.appendContentsCol("body");
         	colIdx6 = this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.appendContentsCol("body");

         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("head", lastTopCount + 4, "text", "총계");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("head", lastTopCount + 6, "text", "평균");

         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("head", lastMidCount + 8, "text", "실적");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("head", lastMidCount + 10, "text", "실적");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("head", lastMidCount + 12, "text", "재공");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("head", lastbotCount + 13, "text", "PCS");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("head", lastbotCount + 14, "text", "PNL");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("head", lastbotCount + 15, "text", "PCS");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("head", lastbotCount + 16, "text", "PNL");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("head", lastbotCount + 17, "text", "PCS");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("head", lastbotCount + 18, "text", "PNL");

         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setFormatColProperty(colIdx1 , "size", 80);
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setFormatColProperty(colIdx2 , "size", 80);
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setFormatColProperty(colIdx3 , "size", 80);
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setFormatColProperty(colIdx4 , "size", 80);
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setFormatColProperty(colIdx5 , "size", 80);
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setFormatColProperty(colIdx6 , "size", 80);

         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx1 , "displaytype", "mask");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx2 , "displaytype", "mask");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx3 , "displaytype", "mask");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx4 , "displaytype", "mask");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx5 , "displaytype", "mask");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx6 , "displaytype", "mask");

         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx1 , "textAlign", "right");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx2 , "textAlign", "right");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx3 , "textAlign", "right");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx4 , "textAlign", "right");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx5 , "textAlign", "right");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx6 , "textAlign", "right");

         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx1 , "maskeditformat", "#,##0");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx2 , "maskeditformat", "#,##0");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx3 , "maskeditformat", "#,##0");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx4 , "maskeditformat", "#,##0");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx5 , "maskeditformat", "#,##0");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx6 , "maskeditformat", "#,##0");

         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx1 , "text", "bind:TOTAL_RSLT_PCS");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx2 , "text", "bind:TOTAL_RSLT_PNL");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx3 , "text", "bind:TOTAL_RSLT_PCS_AVG");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx4 , "text", "bind:TOTAL_RSLT_PNL_AVG");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx5 , "text", "bind:TOTAL_STOCK_PCS_AVG");
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("body", colIdx6 , "text", "bind:TOTAL_STOCK_PNL_AVG");

         	//summary
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx1, "displaytype", "mask");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx2, "displaytype", "mask");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx3, "displaytype", "mask");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx4, "displaytype", "mask");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx5, "displaytype", "mask");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx6, "displaytype", "mask");

         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx1 , "maskeditformat", "#,##0");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx2 , "maskeditformat", "#,##0");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx3 , "maskeditformat", "#,##0");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx4 , "maskeditformat", "#,##0");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx5 , "maskeditformat", "#,##0");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx6 , "maskeditformat", "#,##0");

         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx1 , "textAlign", "right");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx2 , "textAlign", "right");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx3 , "textAlign", "right");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx4 , "textAlign", "right");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx5 , "textAlign", "right");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx6 , "textAlign", "right");

         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx1 , "expr", "dataset.getSum(\"TOTAL_RSLT_PCS\")");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx2 , "expr", "dataset.getSum(\"TOTAL_RSLT_PNL\")");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx3 , "expr", "dataset.getSum(\"TOTAL_RSLT_PCS_AVG\")");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx4 , "expr", "dataset.getSum(\"TOTAL_RSLT_PNL_AVG\")");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx5 , "expr", "dataset.getSum(\"TOTAL_STOCK_PCS_AVG\")");
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setCellProperty("summary", colIdx6 , "expr", "dataset.getSum(\"TOTAL_STOCK_PNL_AVG\")");


         	var midCellCount = lastMidCount + 12;
         	//헤더 중단 머지
         	for(var c = 0; c < this.ds_headgrdList.rowcount * 2 + 3 ; c++)
         	{
         		var nStartCol = (colIdx6- 2 * c) - 1;
         		var nEndCol = colIdx6- 2 * c;
         		var nFirstCell = midCellCount - 2 * c;
         		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.mergeContentsCell("head", 1, nStartCol, 1, nEndCol, nFirstCell, false);
         	}

         	//헤더 상단 총계 머지	124	122	118
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.mergeContentsCell("head", 0, colIdx6 - 3, 0, colIdx6, colIdx6 - 8, false);
         	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.mergeContentsCell("head", 0, colIdx6 - 5, 0, colIdx6- 4 , colIdx6 - 10, false);

         	//헤더 상단 머지
           	for(var c = 0; c < this.ds_headgrdList.rowcount ; c++)
           	{
           		var nStartCol = (lastTopCount - 4 * c) + 5;
           		var nEndCol = (lastTopCount - 4 * c) + 8;
           		var nFirstCell = lastTopCount - 4 * c;
           		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.mergeContentsCell("head", 0, nStartCol, 0, nEndCol, nFirstCell, false);

           	}
        	this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.set_enableredraw(true);
        }
        /*
         * 기능 : Rev.별 집계여부 변경시
         */
        this.fn_innerRevisionTotalChange = function ()
        {
        	if(this.tab_search.tab_page.form.cbo_INNERREVISIONTOTAL.value == "Y")
        	{
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setFormatColProperty(2, "size", 80);
        	}
        	else
        	{
        		this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.setFormatColProperty(2, "size", 0);
        	}
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         *	기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function(obj,e)
        {
        	this.tab_search.tab_page.form.cbo_PERIODTYPE.set_value("CUSTOM");
        };
        /*
         *	기능 : 기간콤보박스 변경시
         */
        this.tab_search_tab_page_cbo_PERIODTYPE_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM")this.fn_setDate(e.postvalue);
        };
        /*
         *	기능 : 품목코드 검색 버튼 클릭 시
         */
        this.tab_search_tab_page_btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	var oArg = {};

        	if (this.tab_search.tab_page.form.edt_PRODUCTDEFID.value != "")
        	{
        		oArg.arg_type        = "BA";
        	}
        	else
        	{
        		oArg.arg_type        = "B";
        	}
        	oArg.arg_popupCd     = "P00160";
        	oArg.arg_popupNm     = "품목 선택";
        	oArg.arg_rtnCols     = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME";
        	oArg.arg_paramCols   = "P_POPTYPE";
        	oArg.arg_paramValues = "PRODUCTDEFINITION";
        	oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + this.tab_search.tab_page.form.edt_PRODUCTDEFID.value;
        	this.gfn_openPopup( "POPUP_PRODUCTDEFID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };

        /*
         *	기능 : 장겁장 검색 버튼 클릭 시
         */
        this.tab_search_tab_page_btn_AREAID_onclick = function(obj,e)
        {
        	var oArg = {};
        	if (this.tab_search.tab_page.form.edt_AREAID.value != "")
        	{
        		oArg.arg_type        = "CA";
        	}
        	else
        	{
        		oArg.arg_type        = "C";
        	}
        	oArg.arg_popupCd     = "P00157";
        	oArg.arg_popupNm     = "작업장 선택";
        	oArg.arg_rtnCols     = "AREAID|AREANAME";
        	oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE|P_USER|P_PLANTID";
        	oArg.arg_paramValues = "AREALISTBYAUTHORITY|" + this.gf_getLanguageType() + "|" + this.gf_getUserAcnt() + "|"+ this.ds_search.getColumn( 0, "PLANTID" );
        	oArg.arg_searchStr   = "P_DICTIONARY=" + this.tab_search.tab_page.form.edt_AREAID.value;
        	this.gfn_openPopup( "POPUP_AREAID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };
        /*
         *	기능 : 공정 검색 버튼 클릭 시
         */
        this.tab_search_tab_page_btn_PROCSEGMENT_onclick = function(obj,e)
        {
        	var oArg = {};
        	if (this.tab_search.tab_page.form.edt_PROCSEGMENT.value != "")
        	{
        		oArg.arg_type        = "BA";
        	}
        	else
        	{
        		oArg.arg_type        = "B";
        	}
        	oArg.arg_popupCd     = "P00213";
        	oArg.arg_popupNm     = "공정 선택";
        	oArg.arg_rtnCols     = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        	oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
        	oArg.arg_paramValues = "PROCESSSEGMENT|" + this.gf_getLanguageType();
        	oArg.arg_searchStr   = "P_PROCESSSEGMENT=" + this.tab_search.tab_page.form.edt_PROCSEGMENT.value;
        	this.gfn_openPopup( "POPUP_PROCSEGMENT", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };
        /*
         *	기능 : 공정 그리드 더블 클릭 시
         */
        this.div_work_tab_Main_Tabpage2_grd_stockbyprocess_oncelldblclick = function(obj,e)
        {
        	if(this.ds_stockbyprocess.getRowCount() > 0)
        	{
        		//조회할 공정 설정
        		this.ds_search.setColumn(0,"PROCESSSEGMENTID", this.ds_stockbyprocess.getColumn(e.row, "PROCESSSEGMENTID"));
        		this.ds_search.setColumn(0,"PROCESSSEGMENTNAME", this.ds_stockbyprocess.getColumn(e.row, "PROCESSSEGMENTNAME"));
        		//LOT탭 조회
        		this.GetWorkResultBylotList();
        		//탭이동
        		this.div_work.form.tab_Main.set_tabindex(2);
        	}
        };
        /*
         *	기능 : 품목 그리드 더블 클릭 시
         */
        this.div_work_tab_Main_Tabpage3_grd_stockbyProduct_oncelldblclick = function(obj,e)
        {
        	if(this.ds_stockbyProduct.getRowCount() > 0)
        	{
        		//조회할 품목 설정
        		this.ds_search.setColumn(0,"PRODUCTDEFID", this.ds_stockbyProduct.getColumn(e.row, "PRODUCTDEFID"));
        		this.ds_search.setColumn(0,"PRODUCTDEFVERSION", this.ds_stockbyProduct.getColumn(e.row, "PRODUCTDEFVERSION"));
        		this.ds_search.setColumn(0,"PRODUCTDEFNAME", this.ds_stockbyProduct.getColumn(e.row, "PRODUCTDEFNAME"));
        		//LOT탭 조회
        		this.GetWorkResultBylotList();
        		//탭이동
        		this.div_work.form.tab_Main.set_tabindex(2);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.tab_page.form.cbo_INNERREVISIONTOTAL.addEventHandler("onitemchanged",this.fn_innerRevisionTotalChange,this);
            this.tab_search.tab_page.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.tab_page.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.tab_page.form.cal_STARTDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.tab_page.form.cbo_PERIODTYPE.addEventHandler("onitemchanged",this.tab_search_tab_page_cbo_PERIODTYPE_onitemchanged,this);
            this.tab_search.tab_page.form.cal_ENDDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.tab_page.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_tab_page_btn_PRODUCTDEFID_onclick,this);
            this.tab_search.tab_page.form.btn_AREAID.addEventHandler("onclick",this.tab_search_tab_page_btn_AREAID_onclick,this);
            this.tab_search.tab_page.form.btn_PROCSEGMENT.addEventHandler("onclick",this.tab_search_tab_page_btn_PROCSEGMENT_onclick,this);
            this.div_work.form.tab_Main.addEventHandler("onchanged",this.InnerrevisionTotalChange,this);
            this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.addEventHandler("onsummaryclick",this.div_work_tab_Main_Tabpage2_grd_stockbyprocess_onsummaryclick,this);
            this.div_work.form.tab_Main.Tabpage2.form.grd_stockbyprocess.addEventHandler("oncelldblclick",this.div_work_tab_Main_Tabpage2_grd_stockbyprocess_oncelldblclick,this);
            this.div_work.form.tab_Main.Tabpage3.form.grd_stockbyProduct.addEventHandler("oncelldblclick",this.div_work_tab_Main_Tabpage3_grd_stockbyProduct_oncelldblclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("PCM05200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
