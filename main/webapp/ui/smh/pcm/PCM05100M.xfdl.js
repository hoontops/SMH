(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM05100M");
            this.set_titletext("품목 상세 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_productDetailRouting", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTCNT\" type=\"STRING\" size=\"256\"/><Column id=\"WIPPCSQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"WIPPNLQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"RESULTLOTCNT\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTPNLQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumableList", this);
            obj._setContents("<ColumnInfo><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PDQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LACKQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_related", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTCNT\" type=\"STRING\" size=\"256\"/><Column id=\"WIPPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WIPPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PLANPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PLANPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTRDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTRDPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RDSHIPPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RDSHIPPNLQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_durableHistory", this);
            obj._setContents("<ColumnInfo><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_equipment", this);
            obj._setContents("<ColumnInfo><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"AVAILABLEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectHistory", this);
            obj._setContents("<ColumnInfo><Column id=\"SALESORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"PUREORDER\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"WIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INCOMEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPDEFECTRATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_wip", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENTINCOMETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTLEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTINPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALLEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WIPQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WIPPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"BASEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"BASEPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotHistory", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVELEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTLEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDLEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SENDLEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CUM_LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CUM_DEFECTQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_ProdVersion", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFVERSIONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSIONNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRODUCTDEFVERSIONCODE\"/><Col id=\"PRODUCTDEFVERSIONNAME\">전체조회</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_customerInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("10");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("11");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00_00","161","231","10","27",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("12");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_search","15","225","146","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","225","102","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"205","45","20","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("13");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PLANTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("14");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PLANT");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","10","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_hotkey("F2");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_SearchPeriod","0","35","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("15");
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
            obj.set_taborder("16");
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
            obj.set_taborder("17");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","85",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("3");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"85","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFNAME","0","135","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("19");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","135","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFVERSION","0","110","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("20");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","108","110","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("4");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("staISLOCKING","0","185","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("21");
            obj.set_text("Locking 여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISLOCKING");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("staISHOLD","0","160","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("22");
            obj.set_text("보류 여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISHOLD");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_ISHOLD","108","160","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_ISLOCKING","108","185","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_search);
            obj.set_text("Tabpage2");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","191","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","tab_search:10","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","34",null,"33","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_ITEMNAME","0","0","12.55%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("ITEMNAME");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFFIDMAIN","sta_ITEMNAME:5","5","24%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("0");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static30_00_00","edt_PRODUCTDEFFIDMAIN:5","0","12.55%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTIONTYPEMAIN","Static30_00_00:5","5","11%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static30_00_00_00","edt_PRODUCTIONTYPEMAIN:5","0","119","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("5");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("COMPANYCLIENT");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_CUSTOMERNAMEMAIN","Static30_00_00_00:5","5","23.00%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","67","84","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("품목 라우팅");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("PRODUCTROUTING");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_work","47%","67",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_work);
            obj.set_text("품목 상세 정보");
            obj.set_tooltiptext("PRODUCTDETAIL");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Tab("tab_productdetail","0","10",null,"291","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.div_work.form.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_work.Tabpage1.form.tab_productdetail);
            obj.set_text("자재");
            obj.set_tooltiptext("CONSUMABLEDEF");
            this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01","0","0","38","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("자재");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("CONSUMABLEDEF");
            this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_consumableList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_consumableList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_consumableList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" colspan=\"4\" text=\"라우팅 목록\" cssclass=\"cell_headMaster\" tooltiptext=\"ROUTINGLIST\"/><Cell col=\"5\" colspan=\"4\" text=\"부자재\" cssclass=\"cell_headMaster\" tooltiptext=\"SUBSIDIARY\"/><Cell row=\"1\" col=\"1\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"3\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell row=\"1\" col=\"4\" text=\"자재명\" tooltiptext=\"COMPONENTITEMNAME\"/><Cell row=\"1\" col=\"5\" text=\"제품 재공\" tooltiptext=\"PRODUCTWIP\"/><Cell row=\"1\" col=\"6\" text=\"재공계\" tooltiptext=\"WIPQTY\"/><Cell row=\"1\" col=\"7\" text=\"재고수량\" tooltiptext=\"STOCKQTY\"/><Cell row=\"1\" col=\"8\" text=\"부족\" tooltiptext=\"LACKQTY\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PLANTID\"/><Cell col=\"4\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PDQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:WIPQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:STOCKQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:LACKQTY\" textAlign=\"right\" displaytype=\"number\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_consumableList","sta_subTitle01:0","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_work.Tabpage1.form.tab_productdetail);
            obj.set_text("치공구");
            obj.set_tooltiptext("ISREQUIREDTOOL");
            this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01","0","0","52","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("치공구");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("ISREQUIREDTOOL");
            this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_durableHistory","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_durableHistory");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" colspan=\"5\" text=\"라우팅 목록\" cssclass=\"cell_headMaster\" tooltiptext=\"ROUTINGLIST\"/><Cell col=\"6\" colspan=\"4\" cssclass=\"cell_headMaster\" text=\"치공구현황\" tooltiptext=\"TOOLINFORMATIONLIST\"/><Cell row=\"1\" col=\"1\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"3\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell row=\"1\" col=\"4\" text=\"치공구 명\" tooltiptext=\"DURABLEDEFNAME\"/><Cell row=\"1\" col=\"5\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell row=\"1\" col=\"6\" text=\"치공구 Rev.\" tooltiptext=\"DURABLEDEFVERSION\"/><Cell row=\"1\" col=\"7\" text=\"총 수량\" tooltiptext=\"TOTALQTY\"/><Cell row=\"1\" col=\"8\" text=\"가용 수량\" tooltiptext=\"AVAILABLEQTY\"/><Cell row=\"1\" col=\"9\" text=\"수리 수량\" tooltiptext=\"REPAIRQTY\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PLANTID\"/><Cell col=\"4\" text=\"bind:DURABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:DURABLEDEFVERSION\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:TOTALQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:AVAILABLEQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:REPAIRQTY\" displaytype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_durableHistory",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_durableHistory","sta_subTitle01:1","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab_work.Tabpage1.form.tab_productdetail);
            obj.set_text("설비");
            obj.set_tooltiptext("EQUIPMENT");
            this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01","0","0","52","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("설비");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("EQUIPMENT");
            this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_equipment","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_equipment");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" colspan=\"5\" text=\"라우팅 목록\" cssclass=\"cell_headMaster\" tooltiptext=\"ROUTINGLIST\"/><Cell col=\"6\" colspan=\"4\" cssclass=\"cell_headMaster\" text=\"설비현황\" tooltiptext=\"EQUIPMENTSTATUS\"/><Cell row=\"1\" col=\"1\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"3\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell row=\"1\" col=\"4\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell row=\"1\" col=\"5\" text=\"설비그룹\" tooltiptext=\"EQUIPMENTCLASS\"/><Cell row=\"1\" col=\"6\" text=\"자사구분\" tooltiptext=\"OWNTYPE\"/><Cell row=\"1\" col=\"7\" text=\"총 수량\" tooltiptext=\"TOTALQTY\"/><Cell row=\"1\" col=\"8\" text=\"가용 수량\" tooltiptext=\"AVAILABLEQTY\"/><Cell row=\"1\" col=\"9\" text=\"수리 수량\" tooltiptext=\"REPAIRQTY\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PLANTID\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:EQUIPMENTCLASS\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:OWNTYPE\"/><Cell col=\"7\" text=\"bind:TOTALQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:AVAILABLEQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:REPAIRQTY\" textAlign=\"right\" displaytype=\"number\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_equipment",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_equipment","sta_subTitle01:1","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.div_work.form.tab_work.Tabpage1.form.tab_productdetail);
            obj.set_text("불량 현황");
            obj.set_tooltiptext("DEFECTSTATUS");
            this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01","0","0","38","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_text("불량");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DEFECT");
            this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage4.addChild(obj.name, obj);

            obj = new Grid("grd_defectHistory","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage4.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectHistory");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"수주번호\" tooltiptext=\"SALESORDERID\"/><Cell col=\"2\" text=\"라인\" tooltiptext=\"LINENO\"/><Cell col=\"3\" text=\"순수주\" tooltiptext=\"PUREORDER\"/><Cell col=\"4\" text=\"투입일자\" tooltiptext=\"INPUTDATE\"/><Cell col=\"5\" text=\"투입수량\" tooltiptext=\"INPUTQTY\"/><Cell col=\"6\" text=\"투입률\" tooltiptext=\"INPUTRATE\"/><Cell col=\"7\" text=\"재공계\" tooltiptext=\"WIPQTY\"/><Cell col=\"8\" text=\"입고수량\" tooltiptext=\"INCOMEQTY\"/><Cell col=\"9\" text=\"불량 수량\" tooltiptext=\"DEFECTQTY\"/><Cell col=\"10\" text=\"투입 불량율\" tooltiptext=\"INPUTDEFECTRATE\"/><Cell col=\"11\" text=\"입고 불량율\" tooltiptext=\"SHIPDEFECTRATE\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:SALESORDERID\"/><Cell col=\"2\" text=\"bind:LINENO\"/><Cell col=\"3\" text=\"bind:PUREORDER\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:INPUTDATE\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:INPUTQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:INPUTRATE\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:WIPQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:INCOMEQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:DEFECTQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:INPUTDEFECTRATE\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:SHIPDEFECTRATE\" textAlign=\"right\" displaytype=\"number\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage4.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_defectHistory",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage4.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_defectHistory","sta_subTitle01:1","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage4.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.Tabpage4.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01","0","301","110","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("Site별 재공현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SITEWIPLIST");
            this.div_work.form.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_related",null,"308","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_related","0","335",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_related");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" text=\"연관 생산품 현황\" cssclass=\"cell_headMaster\" tooltiptext=\"RELATEPRODUCTSTATUS\"/><Cell col=\"2\" colspan=\"3\" text=\"재공현황\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPLIST\"/><Cell col=\"5\" colspan=\"2\" text=\"예정\" cssclass=\"cell_headMaster\" tooltiptext=\"PLANED\"/><Cell col=\"7\" colspan=\"2\" text=\"투입대기\" cssclass=\"cell_headMaster\" tooltiptext=\"INPUTREADY\"/><Cell col=\"9\" colspan=\"2\" text=\"출고대기\" cssclass=\"cell_headMaster\" tooltiptext=\"SENDREADY\"/><Cell row=\"1\" col=\"1\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell row=\"1\" col=\"2\" text=\"Lot 수\" tooltiptext=\"LOTCNT\"/><Cell row=\"1\" col=\"3\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"4\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"5\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"6\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"7\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"8\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"9\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"10\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PLANTID\"/><Cell col=\"2\" text=\"bind:LOTCNT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:WIPPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:WIPPNLQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:PLANPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:PLANPNLQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:INPUTRDPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:INPUTRDPNLQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:RDSHIPPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:RDSHIPPNLQTY\" textAlign=\"right\" displaytype=\"number\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_related","sta_subTitle01:0","301","140","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_work);
            obj.set_text("재공현황");
            obj.set_tooltiptext("WIPLIST");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01","0","0","66","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("재공현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("WIPLIST");
            this.div_work.form.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_lotHistory","0","58.88%",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_lotHistory");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" colspan=\"6\" text=\"재공현황\" tooltiptext=\"WIPLIST\"/><Cell col=\"7\" colspan=\"4\" text=\"작업일\" tooltiptext=\"WORKDATE\"/><Cell col=\"11\" colspan=\"2\" text=\"인수수량\" tooltiptext=\"INQTY\"/><Cell col=\"13\" colspan=\"2\" text=\"작업시작\" tooltiptext=\"WORKSTARTLEADTIME\"/><Cell col=\"15\" colspan=\"2\" text=\"작업완료\" tooltiptext=\"WORKENDLEADTIME\"/><Cell col=\"17\" colspan=\"2\" text=\"인계대기\" tooltiptext=\"WAITFORSEND\"/><Cell col=\"19\" colspan=\"6\" text=\"리드타임\" tooltiptext=\"LEADTIME\"/><Cell col=\"25\" colspan=\"2\" text=\"불량\" tooltiptext=\"DEFECT\"/><Cell row=\"1\" text=\"No\"/><Cell row=\"1\" col=\"1\" text=\"LotNo\"/><Cell row=\"1\" col=\"2\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"3\" text=\"작업구분\" tooltiptext=\"JOBTYPENAME\"/><Cell row=\"1\" col=\"4\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"5\" text=\"SiteID\" tooltiptext=\"PLANTID\"/><Cell row=\"1\" col=\"6\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell row=\"1\" col=\"7\" text=\"인수일\" tooltiptext=\"RECEIVEDATE\"/><Cell row=\"1\" col=\"8\" text=\"시작일\" tooltiptext=\"STARTDATE\"/><Cell row=\"1\" col=\"9\" text=\"작업완료일\" tooltiptext=\"WORKENDDATE\"/><Cell row=\"1\" col=\"10\" text=\"인계일\" tooltiptext=\"LOTSENDDATE\"/><Cell row=\"1\" col=\"11\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"12\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"13\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"14\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"15\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"16\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"17\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"18\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"19\" text=\"인수대기\" tooltiptext=\"WAITFORRECEIVE\"/><Cell row=\"1\" col=\"20\" text=\"작업시작\" tooltiptext=\"WORKSTARTLEADTIME\"/><Cell row=\"1\" col=\"21\" text=\"작업완료\" tooltiptext=\"WORKENDLEADTIME\"/><Cell row=\"1\" col=\"22\" text=\"인계대기\" tooltiptext=\"WAITFORSEND\"/><Cell row=\"1\" col=\"23\" text=\"리드타임\" tooltiptext=\"LEADTIME\"/><Cell row=\"1\" col=\"24\" text=\"누적 L/T\" tooltiptext=\"CUM_LEADTIME\"/><Cell row=\"1\" col=\"25\" text=\"불량수량\" tooltiptext=\"DEFECTCOUNT\"/><Cell row=\"1\" col=\"26\" text=\"누적불량\" tooltiptext=\"CUM_DEFECTQTY\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:USERSEQUENCE\"/><Cell col=\"3\" text=\"bind:WORKTYPE\"/><Cell col=\"4\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PLANTID\"/><Cell col=\"6\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:RECEIVEDATE\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"8\" text=\"bind:STARTDATE\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"9\" text=\"bind:WORKENDDATE\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"10\" text=\"bind:LOTSENDDATE\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"11\" text=\"bind:RECEIVEPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:RECEIVEPANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:WORKSTARTPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:WORKSTARTPANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:WORKENDPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:WORKENDPANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:SENDPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"18\" text=\"bind:SENDPANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"19\" text=\"bind:RECEIVELEADTIME\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"20\" text=\"bind:WORKSTARTLEADTIME\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"21\" text=\"bind:WORKENDLEADTIME\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"22\" text=\"bind:SENDLEADTIME\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"23\" text=\"bind:LEADTIME\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"24\" text=\"bind:CUM_LEADTIME\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"25\" text=\"bind:DEFECTQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"26\" text=\"bind:CUM_DEFECTQTY\" textAlign=\"right\" displaytype=\"number\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_wip","0","34",null,null,"0","grd_lotHistory:34",null,null,null,null,this.div_work.form.tab_work.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_wip");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" colspan=\"9\" text=\"재공현황\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPLIST\"/><Cell col=\"10\" rowspan=\"2\" text=\"Roll/Sheet\" tooltiptext=\"RTRSHT_WORDWRAP\"/><Cell col=\"11\" rowspan=\"2\" text=\"보류여부\" tooltiptext=\"ISHOLD\"/><Cell col=\"12\" rowspan=\"2\" text=\"Locking여부\" tooltiptext=\"ISLOCKING\"/><Cell col=\"13\" rowspan=\"2\" text=\"수량\" tooltiptext=\"OSPDAY26QTY\"/><Cell col=\"14\" rowspan=\"2\" text=\"수량PNL\" tooltiptext=\"OSPDAY26QTYPNL\"/><Cell col=\"15\" colspan=\"2\" text=\"인수대기\" cssclass=\"cell_headMaster\" tooltiptext=\"WAITFORRECEIVE\"/><Cell col=\"17\" colspan=\"2\" text=\"인수\" cssclass=\"cell_headMaster\" tooltiptext=\"ACCEPT\"/><Cell col=\"19\" colspan=\"2\" text=\"작업시작\" cssclass=\"cell_headMaster\" tooltiptext=\"WORKSTARTLEADTIME\"/><Cell col=\"21\" colspan=\"2\" text=\"작업완료\" cssclass=\"cell_headMaster\" tooltiptext=\"WORKEND\"/><Cell col=\"23\" colspan=\"7\" text=\"재공현황\" cssclass=\"cell_headMaster\" tooltiptext=\"WIPLIST\"/><Cell row=\"1\" col=\"1\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell row=\"1\" col=\"2\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell row=\"1\" col=\"3\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell row=\"1\" col=\"4\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell row=\"1\" col=\"5\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell row=\"1\" col=\"6\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell row=\"1\" col=\"7\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"8\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"9\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell row=\"1\" col=\"15\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"16\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"17\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"18\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"19\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"20\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"21\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"22\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"23\" text=\"단위\" tooltiptext=\"UNIT\"/><Cell row=\"1\" col=\"24\" text=\"공정 입고일\" tooltiptext=\"SEGMENTINCOMETIME\"/><Cell row=\"1\" col=\"25\" text=\"공정L/T(시간)\" tooltiptext=\"PROCESSSEGMENTLEADTIME\"/><Cell row=\"1\" col=\"26\" text=\"LOT 투입일\" tooltiptext=\"LOTINPUTDATE\"/><Cell row=\"1\" col=\"27\" text=\"전체L/T(일)\" tooltiptext=\"TOTAL_LEADTIME\"/><Cell row=\"1\" col=\"28\" text=\"납기일자\" tooltiptext=\"DELIVERYDATE\"/><Cell row=\"1\" col=\"29\" text=\"잔여일수\" tooltiptext=\"LEFTDATE\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PLANTID\"/><Cell col=\"2\" text=\"bind:LOTTYPE\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:USERSEQUENCE\"/><Cell col=\"8\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:RTRSHT\"/><Cell col=\"11\" text=\"bind:ISHOLD\"/><Cell col=\"12\" text=\"bind:ISLOCKING\"/><Cell col=\"13\" text=\"bind:QTY\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:PANELQTY\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:SENDPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:SENDPANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:RECEIVEPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"18\" text=\"bind:RECEIVEPANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"19\" text=\"bind:WORKSTARTPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"20\" text=\"bind:WORKSTARTPANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"21\" text=\"bind:WORKENDPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"22\" text=\"bind:WORKENDPANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"23\" text=\"bind:UNIT\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"24\" text=\"bind:SEGMENTINCOMETIME\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"normal\"/><Cell col=\"25\" text=\"bind:PROCESSSEGMENTLEADTIME\"/><Cell col=\"26\" text=\"bind:LOTINPUTDATE\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd HH24:MI:SS\"/><Cell col=\"27\" text=\"bind:TOTALLEADTIME\"/><Cell col=\"28\" text=\"bind:DELIVERYDATE\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"29\" text=\"bind:LEFTDATE\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_wip",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01_00","0","grd_wip:0","69","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("LOT 이력");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.form.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_lotHistory",null,"grd_wip:6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_wip","sta_subTitle01:1","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_lotHistory","sta_subTitle01_00:1","grd_wip:0","140","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab_work);
            obj.set_text("공정 실적");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01","0","0","66","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("공정실적");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.form.tab_work.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_result","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_result");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell col=\"2\" rowspan=\"2\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell col=\"3\" rowspan=\"2\" text=\"Roll/Sheet\" tooltiptext=\"RTRSHT_WORDWRAP\"/><Cell col=\"4\" rowspan=\"2\" text=\"자원\" tooltiptext=\"RESOURCE\"/><Cell col=\"5\" rowspan=\"2\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell col=\"6\" rowspan=\"2\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell col=\"7\" rowspan=\"2\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"8\" rowspan=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"9\" rowspan=\"2\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"10\" colspan=\"2\" text=\"실적\" cssclass=\"cell_headMaster\" tooltiptext=\"OSPCLOSEACTUALAINFO\"/><Cell col=\"12\" colspan=\"2\" text=\"투입\" cssclass=\"cell_headMaster\" tooltiptext=\"INPUT\"/><Cell col=\"14\" rowspan=\"2\" text=\"작업구분\" tooltiptext=\"JOBTYPENAME\"/><Cell row=\"1\" col=\"10\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"11\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"12\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"13\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PLANTID\"/><Cell col=\"2\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:RTRSHT\"/><Cell col=\"4\" text=\"bind:EQUIPMENT\"/><Cell col=\"5\" text=\"bind:LOTTYPE\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"8\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:WORKENDPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:WORKENDPANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:INPUTPCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:INPUTPANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"14\" displaytype=\"combotext\" text=\"bind:WORKTYPE\" combocodecol=\"C,LotWorkType,,Y,N\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_result",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_work.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_result","sta_subTitle01:1","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_work.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_work.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_productDetailRouting",null,"73","29","24","tab_work:10",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_productDetailRouting","0","101",null,null,"tab_work:10","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_productDetailRouting");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" colspan=\"3\" text=\"품목 라우팅\" cssclass=\"cell_headMaster\" tooltiptext=\"PRODUCTROUTING\"/><Cell col=\"4\" colspan=\"3\" cssclass=\"cell_headMaster\" text=\"재공계\" tooltiptext=\"WIPQTY\"/><Cell col=\"7\" colspan=\"3\" cssclass=\"cell_headMaster\" text=\"공정 실적\" tooltiptext=\"WIPRESULT\"/><Cell row=\"1\" col=\"1\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"3\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell row=\"1\" col=\"4\" text=\"Lot 수\" tooltiptext=\"LOTCNT\"/><Cell row=\"1\" col=\"5\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"6\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"7\" text=\"Lot 수\" tooltiptext=\"LOTCNT\"/><Cell row=\"1\" col=\"8\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"9\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PLANTID\"/><Cell col=\"4\" text=\"bind:LOTCNT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:WIPPCSQTY\" displaytype=\"number\" textAlign=\"right\" maskeditformat=\"#,###\"/><Cell col=\"6\" text=\"bind:WIPPNLQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:RESULTLOTCNT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:RESULTPCSQTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:RESULTPNLQTY\" displaytype=\"number\" textAlign=\"right\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" expr=\"dataset.getSum(&quot;WIPPCSQTY&quot;) \" displaytype=\"number\"/><Cell col=\"6\" expr=\"dataset.getSum(&quot;WIPPNLQTY&quot;) \" displaytype=\"number\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_productDetailRouting","Static01:0","66","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
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

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","150","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("화면명");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.tab_page.form.cbo_PLANTID","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.tab_page.form.cal_STARTDT","value","ds_search","PERIOD_PERIODFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.tab_page.form.cbo_PERIODTYPE","value","ds_search","PERIODTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.tab_page.form.cal_ENDDT","value","ds_search","PERIOD_PERIODTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.tab_page.form.edt_PRODUCTDEFID","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.tab_page.form.edt_PRODUCTDEFNAME","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.tab_page.form.cbo_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_work.form.Div01.form.edt_PRODUCTDEFFIDMAIN","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_work.form.Div01.form.edt_PRODUCTIONTYPEMAIN","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_work.form.Div01.form.edt_CUSTOMERNAMEMAIN","value","ds_search","CUSTOMERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_search.tab_page.form.cbo_ISHOLD","value","ds_search","ISHOLD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab_search.tab_page.form.cbo_ISLOCKING","value","ds_search","ISLOCKING");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM05100M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM05100M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM05100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 모델별 재공조회
         * 파일명 		: PCM05100M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2021.04.05
         *
         * 설  명		:  조회/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.05	박대호   	최초작성
         * 2021.04.07	박대호		재공현황그리드 예상수율 컬럼삭제, 공정실적그리드 (기초PCS, 기초PNL) 컬럼삭제(이동우 차장님과 협의)
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

        	this.fn_initCombo();

        	this.fn_initParam();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색(메인 -  고객정보 그리드)
         */
        this.fn_search = function (obj, e)
        {
        	if(this.fn_searchValidate() == false) return;

        	this.ds_productDetailRouting.clearData();

        	var sSvcID 			= "selectProductDetailRoutingList";
        	var sController 	= "/pcm05100/selectProductDetailRoutingList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_productDetailRouting=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_searchValidate = function ()
        {
        	var component = this.tab_search.tab_page;
        	var strColIdList = "edt_PRODUCTDEFID";
        	var strColNmList = "ITEMID";
        	var result = this.nfn_MandatoryCheck(component, strColIdList, strColNmList)
        	if(!result)
        	{
        		return result;
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

        	switch(trId)
        	{
        		case "selectEcmLookupValuesVList2ds_CSiteTypeALL" :
        		{
        			this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        			break;
        		}
         		case "selectEcmLookupValuesVList2ds_CsearchPeriodType" :
        		{
        			this.fn_initDatePicker();
        			break;
        		}
        		case "selectProductDefVersion" :
        		{
        			this.ds_search.setColumn(0,"PRODUCTIONTYPE",this.ds_customerInfo.getColumn(0, "PRODUCTIONTYPE"));
        			this.ds_search.setColumn(0,"CUSTOMERNAME",this.ds_customerInfo.getColumn(0, "CUSTOMERNAME"));
        			break;
        		}
        		case "selectProductDetailRoutingList" :
        		{
        			this.fn_productDetailConsumableList();//자재 사용이력조회
        			break;
        		}
        		case "selectProductDetailConsumableList" :
        		{
        			this.fn_relatedList();//연계생산품 현황
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
         /*
         *	기능 : 팝업 관련
         */
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "POPUP_PRODUCTDEFID")
        	{//PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME
        		this.setProduct_ProdVersion(rtn, this.ds_cbo_ProdVersion, this.ds_search, "B");
        		this.ds_search.setColumn(0,"PRODUCTDEFID",rtn[0]);
        		this.ds_search.setColumn(0,"PRODUCTDEFNAME",rtn[2]);
        		this.ds_search.setColumn(0,"PRODUCTDEFVERSION",rtn[1]);

        		this.fn_customerSearch();//고객사조회
        	}
        };
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
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
        };
        //고객사조회
        this.fn_customerSearch = function ()
        {
        	this.ds_customerInfo.clearData();

        	var sSvcID 			= "selectProductDefVersion";
        	var sController 	= "/pcm05100/selectProductDefVersion.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_customerInfo=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        //자재 사용이력 조회
        this.fn_productDetailConsumableList = function ()
        {
        	this.ds_consumableList.clearData();

        	var sSvcID 			= "selectProductDetailConsumableList";
        	var sController 	= "/pcm05100/selectProductDetailConsumableList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_consumableList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        //치공구 사용이력 조회
        this.fn_durableHistoryList = function ()
        {
        	this.ds_durableHistory.clearData();

        	var sSvcID 			= "selectProductDetailDurableList";
        	var sController 	= "/pcm05100/selectProductDetailDurableList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_durableHistory=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        //설비 사용이력 조회
        this.fn_equipmentList = function ()
        {
        	this.ds_equipment.clearData();

        	var sSvcID 			= "selectProductDetailEquipmentList";
        	var sController 	= "/pcm05100/selectProductDetailEquipmentList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_equipment=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        //불량이력 조회
        this.fn_defectHistoryList = function ()
        {
        	this.ds_defectHistory.clearData();

        	var sSvcID 			= "selectProductDetailDefectList";
        	var sController 	= "/pcm05100/selectProductDetailDefectList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_defectHistory=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        //연계생산품 현황
        this.fn_relatedList = function ()
        {
        	this.ds_related.clearData();

        	var sSvcID 			= "selectProductDetailRelatedSegment";
        	var sController 	= "/pcm05100/selectProductDetailRelatedSegment.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_related=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        //재공현황
        this.fn_wipList = function ()
        {
        	this.ds_wip.clearData();

        	var sSvcID 			= "selectWIPListCommon";
        	var sController 	= "/pcm05100/selectWIPListCommon.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_wip=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        //LOT이력
        this.fn_lotHistoryList = function ()
        {
        	this.ds_lotHistory.clearData();

        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());

        	var sSvcID 			= "selectLotWorkHistoryList";
        	var sController 	= "/pcm03100/selectLotWorkHistoryList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_lotHistory=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        //공정실적
        this.fn_resultList = function ()
        {
        	this.ds_result.clearData();

        	var sSvcID 			= "selectProductDetailWorkResult";
        	var sController 	= "/pcm05100/selectProductDetailWorkResult.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_result=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        /*
         *	기능 : 기간콤보박스 변경시
         */

        this.tab_search_tab_page_cbo_PERIODTYPE_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM")this.fn_setDate(e.postvalue);
        };

        /*
         *	기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function(obj,e)
        {
        	this.tab_search.tab_page.form.cbo_PERIODTYPE.set_value("CUSTOM");
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
        	oArg.arg_rtnCols     = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME|PRODUCTIONTYPE";
        	oArg.arg_paramCols   = "P_POPTYPE";
        	oArg.arg_paramValues = "PRODUCTDEFINITION";
        	oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + this.tab_search.tab_page.form.edt_PRODUCTDEFID.value;
        	this.gfn_openPopup( "POPUP_PRODUCTDEFID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };
        /*
         *	기능 : 품목상세정보 텝변경 시
         */
        this.div_work_tab_work_Tabpage1_tab_productdetail_canchange = function(obj,e)
        {
        	switch(e.postindex)
        	{
        		case 0 :
        		{
        			this.fn_productDetailConsumableList();//자재 사용이력조회
        			break;
        		}
         		case 1 :
        		{
        			this.fn_durableHistoryList();//치공구 사용이력조회
        			break;
        		}
        		case 2 :
        		{
        			this.fn_equipmentList();//설비 사용이력조회
        			break;
        		}
        		case 3 :
        		{
        			this.fn_defectHistoryList();//불량 이력조회
        			break;
        		}
        	}
        };
        /*
         *	기능 : 품목라우팅 더블클릭 시
         */
        this.div_work_grd_productDetailRouting_oncelldblclick = function(obj,e)
        {
        	if(this.ds_productDetailRouting.getRowCount() > 0)
        	{
        		if(e.cell == 5 || e.cell == 6)
        		{
        			this.div_work.form.tab_work.set_tabindex(1);
        			this.ds_search.setColumn(0,"PROCESSSEGMENTID",this.ds_productDetailRouting.getColumn(e.row, "PROCESSSEGMENTID"));
        			this.fn_wipList();//재공현황
        		}
        		else if(e.cell == 8 || e.cell == 9)
        		{
        			this.div_work.form.tab_work.set_tabindex(2);
        			this.ds_search.setColumn(0,"PROCESSSEGMENTID",this.ds_productDetailRouting.getColumn(e.row, "PROCESSSEGMENTID"));
        			this.fn_resultList();//공정실적
        		}
        	}
        };

        this.div_work_tab_work_Tabpage2_grd_wip_oncelldblclick = function(obj,e)
        {
        	if(this.ds_wip.getRowCount() > 0)
        	{
        		this.ds_search.setColumn(0,"LOTID",this.ds_wip.getColumn(e.row, "LOTID"));
        		this.fn_lotHistoryList();//LOT이력
        	}

        };
        /*
         *	화면 호출시 셋팅된 argument 가 존재하면 가져온다.
         */
        this.fn_initParam = function()
        {
        	var sArgName = this.gfn_getFrameAguments("menuName");
        	if(sArgName == "PCM05600" || sArgName == "PCM05300" || sArgName == "PCM06500") {
        		trace("argument :" + sArgName);
        		//PERIODTYPE,PERIOD_PERIODFR,PERIOD_PERIODTO,PRODUCTDEFID,PRODUCTDEFNAME,PRODUCTDEFVERSION
        		var sArgArr = this.gfn_getFrameAguments("objList");
        		this.ds_search.setColumn(0,"PERIODTYPE", sArgArr[0]);
        		this.ds_search.setColumn(0,"PERIOD_PERIODFR", sArgArr[1]);
        		this.ds_search.setColumn(0,"PERIOD_PERIODTO", sArgArr[2]);
        		this.ds_search.setColumn(0,"PRODUCTDEFID", sArgArr[3]);
        		this.ds_search.setColumn(0,"PRODUCTDEFNAME",sArgArr[4]);

        		this.tab_search.tab_page.form.edt_PRODUCTDEFID.set_value('sArgArr[3]'); //eleventh

        		this.setProduct_ProdVersion([[sArgArr[3]]], this.ds_cbo_ProdVersion, this.ds_search, "B");
        		this.ds_search.setColumn(0,"PRODUCTDEFVERSION",sArgArr[5]);

        		this.fn_customerSearch();//고객사조회

        		this.fn_search();
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.tab_search.tab_page.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.tab_page.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.tab_page.form.cal_STARTDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.tab_page.form.cbo_PERIODTYPE.addEventHandler("onitemchanged",this.tab_search_tab_page_cbo_PERIODTYPE_onitemchanged,this);
            this.tab_search.tab_page.form.cal_ENDDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.tab_page.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_tab_page_btn_PRODUCTDEFID_onclick,this);
            this.div_work.form.tab_work.Tabpage1.form.tab_productdetail.addEventHandler("canchange",this.div_work_tab_work_Tabpage1_tab_productdetail_canchange,this);
            this.div_work.form.tab_work.Tabpage2.form.grd_wip.addEventHandler("oncelldblclick",this.div_work_tab_work_Tabpage2_grd_wip_oncelldblclick,this);
            this.div_work.form.grd_productDetailRouting.addEventHandler("oncelldblclick",this.div_work_grd_productDetailRouting_oncelldblclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("PCM05100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
