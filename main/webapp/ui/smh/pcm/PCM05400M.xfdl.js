(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM05400M");
            this.set_titletext("LEAD TIME");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,757);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"MFG_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Category", this);
            obj._setContents("<ColumnInfo><Column id=\"CATEGORYID\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORYNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_App", this);
            obj._setContents("<ColumnInfo><Column id=\"SENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_AVG\" type=\"STRING\" size=\"256\"/><Column id=\"NA_CATEGORY_AVG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Type", this);
            obj._setContents("<ColumnInfo><Column id=\"SENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SHAPE_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"SHAPE_SS\" type=\"STRING\" size=\"256\"/><Column id=\"SHAPE_DS\" type=\"STRING\" size=\"256\"/><Column id=\"SHAPE_MT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MT\" type=\"STRING\" size=\"256\"/><Column id=\"FS_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"FS_SS\" type=\"STRING\" size=\"256\"/><Column id=\"FS_DS\" type=\"STRING\" size=\"256\"/><Column id=\"FS_MT\" type=\"STRING\" size=\"256\"/><Column id=\"IFC_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"IFC_SS\" type=\"STRING\" size=\"256\"/><Column id=\"IFC_DS\" type=\"STRING\" size=\"256\"/><Column id=\"IFC_MT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Product", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTSHAPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MFG_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTPLANTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"AVG_LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_LEADTIME_REWORK\" type=\"STRING\" size=\"256\"/><Column id=\"AVG_LEADTIME_REWORK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTCNT\" type=\"STRING\" size=\"256\"/><Column id=\"BOXIMPORTQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Lot", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ROOTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALLEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALLEADTIME_REWORK\" type=\"STRING\" size=\"256\"/><Column id=\"REWORK_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTSHAPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTSHAPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTPLANTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DOMESTIC_LT\" type=\"STRING\" size=\"256\"/><Column id=\"FOREIGN_LT\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"MFG_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"ROLL_CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ROLL_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PACKING_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PACKING_INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ROOT_STARTEDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Process", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTSHAPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTSHAPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\" prop=\"TEXT\" sumtext=\"소 계 :\"/><Column id=\"PRODUCTPLANTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MFG_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AVG_LEADTIME\" type=\"FLOAT\" size=\"256\" prop=\"AVG\"/><Column id=\"MIN_LEADTIME\" type=\"FLOAT\" size=\"256\" prop=\"AVG\"/><Column id=\"MAX_LEADTIME\" type=\"FLOAT\" size=\"256\" prop=\"AVG\"/><Column id=\"AVG_LEADTIME_H\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_LEADTIME_H\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_LEADTIME_H\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVELEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTLEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDLEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SENDLEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"AVG_LEADTIME_HM\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_LEADTIME_HM\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_LEADTIME_HM\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVELEADTIME_HM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTLEADTIME_HM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDLEADTIME_HM\" type=\"STRING\" size=\"256\"/><Column id=\"SENDLEADTIME_HM\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTCNT\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPCSQTY_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSID_R\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Area", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTPLANTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AVG_LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVELEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTLEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDLEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SENDLEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTCNT\" type=\"STRING\" size=\"256\"/><Column id=\"MFG_CATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPCSQTY_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY_SUM\" type=\"STRING\" size=\"256\"/><Column id=\"AVG_LEADTIME_HM\" type=\"STRING\" size=\"256\"/><Column id=\"MIN_LEADTIME_HM\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_LEADTIME_HM\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVELEADTIME_HM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTLEADTIME_HM\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDLEADTIME_HM\" type=\"STRING\" size=\"256\"/><Column id=\"SENDLEADTIME_HM\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSID_R\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_ProdVersion", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFVERSIONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSIONNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","2","64","295",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("staPLANTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staLOTID","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","108","185",null,"20","42",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_LOTID",null,"185","22","20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFID","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","85",null,"20","42",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"85","22","20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFVERSION","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFNAME","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"0","15","290","5",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","0","15","290",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"305","45","20","96",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","331","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","325","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","325","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_hotkey("F2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTIONTYPE","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTIONTYPE","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCATEGORY","0","285","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("App");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_CATEGORY","108","285","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_codecolumn("CATEGORYID");
            obj.set_innerdataset("ds_Category");
            obj.set_datacolumn("CATEGORYNAME");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","96",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","96",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_STARTDT","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staSearchPeriod","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("C6A85700415446D89213292978260263");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PERIODTYPE","15","60","88","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_ENDDT","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCUSTOMER","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("고객");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CUSTOMER");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_CUSTOMER","108","160",null,"20","42",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_CUSTOMER",null,"160","22","20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_LAYER","108","235","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,Layer,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staLAYER","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("33");
            obj.set_text("층수");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_ISHOLD","108","260","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_codecolumn("C,YesNo,,Y,Y");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staISHOLD","0","260","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_text("보류 여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISHOLD");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","9","56","206","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","31","24","2",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","34",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("staGuide","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","40","16","145","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Tab("tabMain","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("tpgApp",this.div_work.form.tabMain);
            obj.set_text("APP");
            this.div_work.form.tabMain.addChild(obj.name, obj);

            obj = new Grid("grdApp","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabMain.tpgApp.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_App");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"일자\"/><Cell col=\"2\" text=\"전체\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SENDTIME\"/><Cell col=\"2\" text=\"bind:TOTAL_AVG\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"기간 평균\" tooltiptext=\"PERIODAVG\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&quot;TOTAL_SUM&quot;) / dataset.getSum(&quot;TOTAL_CNT&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\" text=\"생산 점유\" tooltiptext=\"PRODOCCUPANCY\"/><Cell row=\"1\" col=\"2\"/></Band></Format></Formats>");
            this.div_work.form.tabMain.tpgApp.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","37","34",null,null,null,null,null,null,this.div_work.form.tabMain.tpgApp.form);
            obj.set_taborder("1");
            obj.set_text("APP");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.form.tabMain.tpgApp.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdApp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabMain.tpgApp.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabMain.tpgApp.addChild(obj.name, obj);

            obj = new Tabpage("tpgType",this.div_work.form.tabMain);
            obj.set_text("TYPE");
            this.div_work.form.tabMain.addChild(obj.name, obj);

            obj = new Grid("grdType","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabMain.tpgType.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_Type");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"3\" textAlign=\"center\" text=\"No\"/><Cell col=\"1\" rowspan=\"3\" text=\"일자\"/><Cell col=\"2\" rowspan=\"2\" colspan=\"4\" text=\"전체 LEAD TIME\" cssclass=\"cell_headMaster\"/><Cell col=\"6\" colspan=\"8\" text=\"LOCAL LEAD TIME\" cssclass=\"cell_headMaster\"/><Cell col=\"14\" colspan=\"4\" text=\"GLOBAL LEAD TIME\" cssclass=\"cell_headMaster\"/><Cell row=\"1\" col=\"6\" colspan=\"4\" text=\"국내 완제\"/><Cell row=\"1\" col=\"10\" colspan=\"4\" text=\"해외 연계\"/><Cell row=\"1\" col=\"14\" colspan=\"4\" text=\"IFC 출고\"/><Cell row=\"2\" col=\"2\" text=\"전체\"/><Cell row=\"2\" col=\"3\" text=\"단면\"/><Cell row=\"2\" col=\"4\" text=\"양면\"/><Cell row=\"2\" col=\"5\" text=\"MT\"/><Cell row=\"2\" col=\"6\" text=\"전체\"/><Cell row=\"2\" col=\"7\" text=\"단면\"/><Cell row=\"2\" col=\"8\" text=\"양면\"/><Cell row=\"2\" col=\"9\" text=\"MT\"/><Cell row=\"2\" col=\"10\" text=\"전체\"/><Cell row=\"2\" col=\"11\" text=\"단면\"/><Cell row=\"2\" col=\"12\" text=\"양면\"/><Cell row=\"2\" col=\"13\" text=\"MT\"/><Cell row=\"2\" col=\"14\" text=\"전체\"/><Cell row=\"2\" col=\"15\" text=\"단면\"/><Cell row=\"2\" col=\"16\" text=\"양면\"/><Cell row=\"2\" col=\"17\" text=\"MT\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:SENDTIME\"/><Cell col=\"2\" text=\"bind:SHAPE_TOTAL\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"3\" text=\"bind:SHAPE_SS\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"4\" text=\"bind:SHAPE_DS\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"5\" text=\"bind:SHAPE_MT\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"6\" text=\"bind:DS_TOTAL\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"7\" text=\"bind:DS_SS\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"8\" text=\"bind:DS_DS\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"9\" text=\"bind:DS_MT\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"10\" text=\"bind:FS_TOTAL\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"11\" text=\"bind:FS_SS\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"12\" text=\"bind:FS_DS\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"13\" text=\"bind:FS_MT\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"14\" text=\"bind:IFC_TOTAL\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"15\" text=\"bind:IFC_SS\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"16\" text=\"bind:IFC_DS\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"17\" text=\"bind:IFC_MT\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"기간 평균\" tooltiptext=\"PERIODAVG\"/><Cell col=\"2\" text=\"expr:dataset.getAvg(&quot;SHAPE_TOTAL&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0.00\"/><Cell col=\"3\" text=\"expr:dataset.getAvg(&quot;SHAPE_SS&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0.00\"/><Cell col=\"4\" text=\"expr:dataset.getAvg(&quot;SHAPE_DS&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0.00\"/><Cell col=\"5\" text=\"expr:dataset.getAvg(&quot;SHAPE_MT&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0.00\"/><Cell col=\"6\" displaytype=\"mask\" maskeditformat=\"#,##0.00\" text=\"expr:dataset.getAvg(&quot;DS_TOTAL&quot;)\"/><Cell col=\"7\" displaytype=\"mask\" maskeditformat=\"#,##0.00\" text=\"expr:dataset.getAvg(&quot;DS_SS&quot;)\"/><Cell col=\"8\" displaytype=\"mask\" maskeditformat=\"#,##0.00\" text=\"expr:dataset.getAvg(&quot;DS_DS&quot;)\"/><Cell col=\"9\" displaytype=\"mask\" maskeditformat=\"#,##0.00\" text=\"expr:dataset.getAvg(&quot;DS_MT&quot;)\"/><Cell col=\"10\" displaytype=\"mask\" maskeditformat=\"#,##0.00\" text=\"expr:dataset.getAvg(&quot;FS_TOTAL&quot;)\"/><Cell col=\"11\" displaytype=\"mask\" maskeditformat=\"#,##0.00\" text=\"expr:dataset.getAvg(&quot;FS_SS&quot;)\"/><Cell col=\"12\" displaytype=\"mask\" maskeditformat=\"#,##0.00\" text=\"expr:dataset.getAvg(&quot;FS_DS&quot;)\"/><Cell col=\"13\" displaytype=\"mask\" maskeditformat=\"#,##0.00\" text=\"expr:dataset.getAvg(&quot;FS_MT&quot;)\"/><Cell col=\"14\" displaytype=\"mask\" maskeditformat=\"#,##0.00\" text=\"expr:dataset.getAvg(&quot;IFC_TOTAL&quot;)\"/><Cell col=\"15\" displaytype=\"mask\" maskeditformat=\"#,##0.00\" text=\"expr:dataset.getAvg(&quot;IFC_SS&quot;)\"/><Cell col=\"16\" displaytype=\"mask\" maskeditformat=\"#,##0.00\" text=\"expr:dataset.getAvg(&quot;IFC_DS&quot;)\"/><Cell col=\"17\" displaytype=\"mask\" maskeditformat=\"#,##0.00\" text=\"expr:dataset.getAvg(&quot;IFC_MT&quot;)\"/><Cell row=\"1\"/><Cell row=\"1\" col=\"1\" text=\"생산 점유\" tooltiptext=\"PRODOCCUPANCY\"/><Cell row=\"1\" col=\"2\"/><Cell row=\"1\" col=\"3\" text=\"expr:dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;)==0? 0:nexacro.round(dataset.getSum(&quot;SHAPE_SS_CNT&quot;)/dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;) * 100)\" displaytype=\"mask\" maskeditformat=\"###\"/><Cell row=\"1\" col=\"4\" text=\"expr:dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;)==0? 0:nexacro.round(dataset.getSum(&quot;SHAPE_DS_CNT&quot;)/dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;) * 100)\" displaytype=\"mask\" maskeditformat=\"###\"/><Cell row=\"1\" col=\"5\" text=\"expr:dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;)==0? 0:nexacro.round(dataset.getSum(&quot;SHAPE_MT_CNT&quot;)/dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;) * 100)\" displaytype=\"mask\" maskeditformat=\"###\"/><Cell row=\"1\" col=\"6\" displaytype=\"mask\" maskeditformat=\"###\" text=\"expr:dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;)==0? 0:nexacro.round(dataset.getSum(&quot;DS_TOTAL_CNT&quot;)/dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;) * 100)\"/><Cell row=\"1\" col=\"7\" displaytype=\"mask\" maskeditformat=\"###\" text=\"expr:dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;)==0? 0:nexacro.round(dataset.getSum(&quot;DS_SS_CNT&quot;)/dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;) * 100)\"/><Cell row=\"1\" col=\"8\" displaytype=\"mask\" maskeditformat=\"###\" text=\"expr:dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;)==0? 0:nexacro.round(dataset.getSum(&quot;DS_DS_CNT&quot;)/dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;) * 100)\"/><Cell row=\"1\" col=\"9\" displaytype=\"mask\" maskeditformat=\"###\" text=\"expr:dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;)==0? 0:nexacro.round(dataset.getSum(&quot;DS_MT_CNT&quot;)/dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;) * 100)\"/><Cell row=\"1\" col=\"10\" displaytype=\"mask\" maskeditformat=\"###\" text=\"expr:dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;)==0? 0:nexacro.round(dataset.getSum(&quot;FS_TOTAL_CNT&quot;)/dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;) * 100)\"/><Cell row=\"1\" col=\"11\" displaytype=\"mask\" maskeditformat=\"###\" text=\"expr:dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;)==0? 0:nexacro.round(dataset.getSum(&quot;FS_SS_CNT&quot;)/dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;) * 100)\"/><Cell row=\"1\" col=\"12\" displaytype=\"mask\" maskeditformat=\"###\" text=\"expr:dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;)==0? 0:nexacro.round(dataset.getSum(&quot;FS_DS_CNT&quot;)/dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;) * 100)\"/><Cell row=\"1\" col=\"13\" displaytype=\"mask\" maskeditformat=\"###\" text=\"expr:dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;)==0? 0:nexacro.round(dataset.getSum(&quot;FS_MT_CNT&quot;)/dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;) * 100)\"/><Cell row=\"1\" col=\"14\" displaytype=\"mask\" maskeditformat=\"###\" text=\"expr:dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;)==0? 0:nexacro.round(dataset.getSum(&quot;IFC_TOTAL_CNT&quot;)/dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;) * 100)\"/><Cell row=\"1\" col=\"15\" displaytype=\"mask\" maskeditformat=\"###\" text=\"expr:dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;)==0? 0:nexacro.round(dataset.getSum(&quot;IFC_SS_CNT&quot;)/dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;) * 100)\"/><Cell row=\"1\" col=\"16\" displaytype=\"mask\" maskeditformat=\"###\" text=\"expr:dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;)==0? 0:nexacro.round(dataset.getSum(&quot;IFC_DS_CNT&quot;)/dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;) * 100)\"/><Cell row=\"1\" col=\"17\" displaytype=\"mask\" maskeditformat=\"###\" text=\"expr:dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;)==0? 0:nexacro.round(dataset.getSum(&quot;IFC_MT_CNT&quot;)/dataset.getSum(&quot;SHAPE_TOTAL_CNT&quot;) * 100)\"/></Band></Format></Formats>");
            this.div_work.form.tabMain.tpgType.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","43","34",null,null,null,null,null,null,this.div_work.form.tabMain.tpgType.form);
            obj.set_taborder("1");
            obj.set_text("TYPE");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.form.tabMain.tpgType.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdType",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabMain.tpgType.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabMain.tpgType.addChild(obj.name, obj);

            obj = new Tabpage("tpgProduct",this.div_work.form.tabMain);
            obj.set_text("품목");
            this.div_work.form.tabMain.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","38","34",null,null,null,null,null,null,this.div_work.form.tabMain.tpgProduct.form);
            obj.set_taborder("0");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.form.tabMain.tpgProduct.addChild(obj.name, obj);

            obj = new Grid("grdProduct","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabMain.tpgProduct.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_Product");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"생산구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"타입\"/><Cell col=\"3\" rowspan=\"2\" text=\"고객\"/><Cell col=\"4\" rowspan=\"2\" text=\"연계생산\"/><Cell col=\"5\" rowspan=\"2\" text=\"APP\"/><Cell col=\"6\" rowspan=\"2\" text=\"품목코드\"/><Cell col=\"7\" rowspan=\"2\" text=\"REV.\"/><Cell col=\"8\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"9\" colspan=\"2\" text=\"평균 LEAD TIME(일)\" cssclass=\"cell_headMaster\"/><Cell col=\"11\" colspan=\"2\" text=\"비정규 작업 시간(일)\" cssclass=\"cell_headMaster\"/><Cell row=\"1\" col=\"9\" text=\"전체\"/><Cell row=\"1\" col=\"10\" text=\"Local\"/><Cell row=\"1\" col=\"11\" text=\"전체\"/><Cell row=\"1\" col=\"12\" text=\"Local\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTTYPE\"/><Cell col=\"2\" text=\"bind:PRODUCTSHAPE\"/><Cell col=\"3\" text=\"bind:CUSTOMERNAME\"/><Cell col=\"4\" text=\"bind:PRODUCTPLANTTYPE\"/><Cell col=\"5\" text=\"bind:MFG_CATEGORY\" displaytype=\"combotext\" combodataset=\"ds_Category\" combocodecol=\"CATEGORYID\" combodatacol=\"CATEGORYNAME\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"8\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"9\" text=\"bind:AVG_LEADTIME\"/><Cell col=\"10\" text=\"bind:AVG_LEADTIME\"/><Cell col=\"11\" text=\"bind:AVG_LEADTIME_REWORK\"/><Cell col=\"12\" text=\"bind:AVG_LEADTIME_REWORK\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\" text=\"expr:dataset.getAvg(&quot;AVG_LEADTIME&quot;)\"/><Cell col=\"10\" text=\"expr:dataset.getAvg(&quot;AVG_LEADTIME&quot;)\"/><Cell col=\"11\" text=\"expr:dataset.getAvg(&quot;AVG_LEADTIME_REWORK&quot;)\"/><Cell col=\"12\" text=\"expr:dataset.getAvg(&quot;AVG_LEADTIME_REWORK&quot;)\"/></Band></Format></Formats>");
            this.div_work.form.tabMain.tpgProduct.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdProduct",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabMain.tpgProduct.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabMain.tpgProduct.addChild(obj.name, obj);

            obj = new Tabpage("tpgLot",this.div_work.form.tabMain);
            obj.set_text("LOT");
            this.div_work.form.tabMain.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","36","34",null,null,null,null,null,null,this.div_work.form.tabMain.tpgLot.form);
            obj.set_taborder("0");
            obj.set_text("LOT");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.form.tabMain.tpgLot.addChild(obj.name, obj);

            obj = new Grid("grdLotList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabMain.tpgLot.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_Lot");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"생산구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"타입\"/><Cell col=\"3\" rowspan=\"2\" text=\"고객\"/><Cell col=\"4\" rowspan=\"2\" text=\"연계생산\"/><Cell col=\"5\" rowspan=\"2\" text=\"APP\"/><Cell col=\"6\" rowspan=\"2\" text=\"품목코드\"/><Cell col=\"7\" rowspan=\"2\" text=\"REV\"/><Cell col=\"8\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"9\" rowspan=\"2\" text=\"Lot No.\"/><Cell col=\"10\" colspan=\"2\" text=\"Lead Time(일)\" cssclass=\"cell_headMaster\"/><Cell col=\"12\" colspan=\"2\" text=\"비정규 작업(일)\" cssclass=\"cell_headMaster\"/><Cell col=\"14\" rowspan=\"2\" text=\"최초투입수\" wordWrap=\"char\"/><Cell col=\"15\" rowspan=\"2\" text=\"투입수분할\" wordWrap=\"char\"/><Cell col=\"16\" rowspan=\"2\" text=\"입고수\" wordWrap=\"char\"/><Cell col=\"17\" rowspan=\"2\" text=\"불량수\" wordWrap=\"char\"/><Cell col=\"18\" rowspan=\"2\" text=\"Root Lot No\"/><Cell col=\"19\" rowspan=\"2\" text=\"보류이력\"/><Cell col=\"20\" rowspan=\"2\" text=\"Locking\"/><Cell col=\"21\" rowspan=\"2\" text=\"포장 입고일시\"/><Cell col=\"22\" rowspan=\"2\" text=\"Root 투입일시\"/><Cell col=\"23\" rowspan=\"2\" text=\"Lot 분할일시\"/><Cell row=\"1\" col=\"10\" text=\"전체\"/><Cell row=\"1\" col=\"11\" text=\"IFC\"/><Cell row=\"1\" col=\"12\" text=\"전체\"/><Cell row=\"1\" col=\"13\" text=\"IFC\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:LOTTYPE\"/><Cell col=\"2\" text=\"bind:PRODUCTSHAPENAME\"/><Cell col=\"3\" text=\"bind:CUSTOMERNAME\"/><Cell col=\"4\" text=\"bind:PRODUCTPLANTTYPE\"/><Cell col=\"5\" text=\"bind:MFG_CATEGORY\" displaytype=\"combotext\" combodataset=\"ds_Category\" combocodecol=\"CATEGORYID\" combodatacol=\"CATEGORYNAME\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"8\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"9\" text=\"bind:LOTID\"/><Cell col=\"10\" text=\"bind:TOTALLEADTIME\"/><Cell col=\"11\" text=\"bind:TOTALLEADTIME\"/><Cell col=\"12\" text=\"bind:TOTALLEADTIME_REWORK\"/><Cell col=\"13\" text=\"bind:TOTALLEADTIME_REWORK\"/><Cell col=\"14\" text=\"bind:CREATEDQTY\"/><Cell col=\"15\" text=\"bind:ROLL_QTY\"/><Cell col=\"16\" text=\"bind:PACKING_QTY\"/><Cell col=\"17\" text=\"bind:DEFECTQTY\"/><Cell col=\"18\" text=\"bind:ROOTLOTID\"/><Cell col=\"19\" text=\"bind:ISHOLD\"/><Cell col=\"20\" text=\"bind:ISLOCKING\"/><Cell col=\"21\" text=\"bind:PACKING_INPUTDATE\"/><Cell col=\"22\" text=\"bind:ROOT_STARTEDDATE\"/><Cell col=\"23\" text=\"bind:ROLL_CREATEDTIME\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\" text=\"expr:dataset.getAvg(&quot;TOTALLEADTIME&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"11\" text=\"expr:dataset.getAvg(&quot;TOTALLEADTIME&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"12\" text=\"expr:dataset.getAvg(&quot;TOTALLEADTIME_REWORK&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"13\" text=\"expr:dataset.getAvg(&quot;TOTALLEADTIME_REWORK&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/></Band></Format></Formats>");
            this.div_work.form.tabMain.tpgLot.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdLotList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabMain.tpgLot.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabMain.tpgLot.addChild(obj.name, obj);

            obj = new Tabpage("tpgProcess",this.div_work.form.tabMain);
            obj.set_text("품목공정");
            this.div_work.form.tabMain.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","66","34",null,null,null,null,null,null,this.div_work.form.tabMain.tpgProcess.form);
            obj.set_taborder("0");
            obj.set_text("품목공정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.form.tabMain.tpgProcess.addChild(obj.name, obj);

            obj = new Grid("grdProcess","0","34",null,null,"0","12",null,null,null,null,this.div_work.form.tabMain.tpgProcess.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_Process");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"생산구분\"/><Cell col=\"1\" rowspan=\"2\" text=\"타입\"/><Cell col=\"2\" rowspan=\"2\" text=\"고객\"/><Cell col=\"3\" rowspan=\"2\" text=\"연계생산\"/><Cell col=\"4\" rowspan=\"2\" text=\"APP\"/><Cell col=\"5\" rowspan=\"2\" text=\"품목코드\"/><Cell col=\"6\" rowspan=\"2\" text=\"REV\"/><Cell col=\"7\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"8\" rowspan=\"2\" text=\"Site\"/><Cell col=\"9\" rowspan=\"2\" text=\"공정순서\"/><Cell col=\"10\" rowspan=\"2\" text=\"작업구분\" tooltiptext=\"JOBTYPE\"/><Cell col=\"11\" rowspan=\"2\" text=\"공정명\"/><Cell col=\"12\" colspan=\"3\" text=\"공정 L/T(일)\" cssclass=\"cell_headMaster\"/><Cell col=\"15\" colspan=\"3\" cssclass=\"cell_headMaster\" text=\"공정 L/T(시간)\"/><Cell col=\"18\" colspan=\"4\" text=\"Step별 L/T(시간)\" cssclass=\"cell_headMaster\"/><Cell col=\"22\" rowspan=\"2\" text=\"Lot수\"/><Cell col=\"23\" rowspan=\"2\" text=\"투입수\"/><Cell col=\"24\" rowspan=\"2\" text=\"인계수\"/><Cell col=\"25\" rowspan=\"2\" text=\"불량수\"/><Cell row=\"1\" col=\"12\" text=\"평균\"/><Cell row=\"1\" col=\"13\" text=\"Min\"/><Cell row=\"1\" col=\"14\" text=\"Max\"/><Cell row=\"1\" col=\"15\" text=\"평균\"/><Cell row=\"1\" col=\"16\" text=\"Min\"/><Cell row=\"1\" col=\"17\" text=\"Max\"/><Cell row=\"1\" col=\"18\" text=\"인수대기\"/><Cell row=\"1\" col=\"19\" text=\"작업대기\"/><Cell row=\"1\" col=\"20\" text=\"작업시간\"/><Cell row=\"1\" col=\"21\" text=\"인계대기\"/></Band><Band id=\"body\"><Cell text=\"bind:LOTTYPE\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"1\" text=\"bind:PRODUCTSHAPENAME\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"2\" text=\"bind:CUSTOMERNAME\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"3\" text=\"bind:PRODUCTPLANTTYPE\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"4\" text=\"bind:MFG_CATEGORY\" displaytype=\"combotext\" combodataset=\"ds_Category\" combocodecol=\"CATEGORYID\" combodatacol=\"CATEGORYNAME\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFID\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFVERSION\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFNAME\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"8\" text=\"bind:PLANTID\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"9\" text=\"bind:USERSEQUENCE\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"10\" text=\"bind:PROCESSCLASSID_R\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"11\" text=\"bind:PROCESSSEGMENTNAME\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:AVG_LEADTIME\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"right\" maskeditformat=\"#,##0.##\" displaytype=\"mask\"/><Cell col=\"13\" text=\"bind:MIN_LEADTIME\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"14\" text=\"bind:MAX_LEADTIME\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"15\" text=\"bind:AVG_LEADTIME_HM\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"16\" text=\"bind:MIN_LEADTIME_HM\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"17\" text=\"bind:MAX_LEADTIME_HM\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"18\" text=\"bind:RECEIVELEADTIME_HM\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"19\" text=\"bind:WORKSTARTLEADTIME_HM\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"20\" text=\"bind:WORKENDLEADTIME_HM\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"21\" text=\"bind:SENDLEADTIME_HM\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"22\" text=\"bind:LOTCNT\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"right\"/><Cell col=\"23\" text=\"bind:RECEIVEPCSQTY_SUM\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"right\"/><Cell col=\"24\" text=\"bind:SENDPCSQTY_SUM\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"right\"/><Cell col=\"25\" text=\"bind:DEFECTQTY_SUM\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"right\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" text=\"expr:dataset.getAvg(&quot;AVG_LEADTIME&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"13\" text=\"expr:dataset.getAvg(&quot;MIN_LEADTIME&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"14\" text=\"expr:dataset.getAvg(&quot;MAX_LEADTIME&quot;)\" displaytype=\"mask\" maskeditformat=\"#,##0.##\"/><Cell col=\"15\" maskeditformat=\"#,##0.##\"/><Cell col=\"16\" maskeditformat=\"#,##0.##\"/><Cell col=\"17\" maskeditformat=\"#,##0.##\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/></Band></Format></Formats>");
            this.div_work.form.tabMain.tpgProcess.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdProcess",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabMain.tpgProcess.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabMain.tpgProcess.addChild(obj.name, obj);

            obj = new Tabpage("tpgArea",this.div_work.form.tabMain);
            obj.set_text("작업장");
            this.div_work.form.tabMain.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0","52","34",null,null,null,null,null,null,this.div_work.form.tabMain.tpgArea.form);
            obj.set_taborder("0");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.form.tabMain.tpgArea.addChild(obj.name, obj);

            obj = new Grid("grdArea","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabMain.tpgArea.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_Area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"작업장\"/><Cell col=\"2\" rowspan=\"2\" text=\"자원\"/><Cell col=\"3\" rowspan=\"2\" text=\"Site\"/><Cell col=\"4\" rowspan=\"2\" text=\"품목코드\"/><Cell col=\"5\" rowspan=\"2\" text=\"Rev\"/><Cell col=\"6\" rowspan=\"2\" text=\"APP\"/><Cell col=\"7\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"8\" rowspan=\"2\" text=\"공정순서\"/><Cell col=\"9\" rowspan=\"2\" text=\"작업구분\" tooltiptext=\"JOBTYPE\"/><Cell col=\"10\" rowspan=\"2\" text=\"공정명\"/><Cell col=\"11\" colspan=\"3\" text=\"공정 L/T(시간)\" cssclass=\"cell_headMaster\"/><Cell col=\"14\" colspan=\"4\" cssclass=\"cell_headMaster\" text=\"STEP별 L/T(시간)\"/><Cell col=\"18\" rowspan=\"2\" text=\"LOT수\"/><Cell col=\"19\" rowspan=\"2\" text=\"투입수\"/><Cell col=\"20\" rowspan=\"2\" text=\"인계수\"/><Cell col=\"21\" rowspan=\"2\" text=\"불량수\"/><Cell row=\"1\" col=\"11\" text=\"평균\"/><Cell row=\"1\" col=\"12\" text=\"Min\"/><Cell row=\"1\" col=\"13\" text=\"Max\"/><Cell row=\"1\" col=\"14\" text=\"인수대기\"/><Cell row=\"1\" col=\"15\" text=\"작업대기\"/><Cell row=\"1\" col=\"16\" text=\"작업시간\"/><Cell row=\"1\" col=\"17\" text=\"인계대기\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:AREANAME\"/><Cell col=\"2\" text=\"bind:RESOURCENAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PLANTID\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"6\" text=\"bind:MFG_CATEGORY\" combodataset=\"ds_Category\" combocodecol=\"CATEGORYID\" combodatacol=\"CATEGORYNAME\" displaytype=\"combotext\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:USERSEQUENCE\"/><Cell col=\"9\" text=\"bind:PROCESSCLASSID_R\"/><Cell col=\"10\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:AVG_LEADTIME_HM\"/><Cell col=\"12\" text=\"bind:MIN_LEADTIME_HM\"/><Cell col=\"13\" text=\"bind:MAX_LEADTIME_HM\"/><Cell col=\"14\" text=\"bind:RECEIVELEADTIME_HM\"/><Cell col=\"15\" text=\"bind:WORKSTARTLEADTIME_HM\"/><Cell col=\"16\" text=\"bind:WORKENDLEADTIME_HM\"/><Cell col=\"17\" text=\"bind:SENDLEADTIME_HM\"/><Cell col=\"18\" text=\"bind:LOTCNT\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"19\" text=\"bind:RECEIVEPCSQTY_SUM\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"20\" text=\"bind:SENDPCSQTY_SUM\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/><Cell col=\"21\" text=\"bind:DEFECTQTY_SUM\" displaytype=\"mask\" maskeditformat=\"#,##0\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.form.tabMain.tpgArea.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdArea",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tabMain.tpgArea.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabMain.tpgArea.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,757,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("itemPERIOD_PERIODFR","tab_search.Tabpage1.form.cal_STARTDT","value","ds_search","PERIOD_PERIODFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPERIODTYPE","tab_search.Tabpage1.form.cbo_PERIODTYPE","value","ds_search","PERIODTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPERIOD_PERIODTO","tab_search.Tabpage1.form.cal_ENDDT","value","ds_search","PERIOD_PERIODTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemCUSTOMERNAME","tab_search.Tabpage1.form.edt_CUSTOMER","value","ds_search","CUSTOMERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemISHOLD","tab_search.Tabpage1.form.cbo_ISHOLD","value","ds_search","ISHOLD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPLANTID","tab_search.Tabpage1.form.cbo_PLANTID","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemCATEGORY","tab_search.Tabpage1.form.cbo_CATEGORY","value","ds_search","MFG_CATEGORY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemLAYER","tab_search.Tabpage1.form.cbo_LAYER","value","ds_search","LAYER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPRODUCTIONTYPE","tab_search.Tabpage1.form.cbo_PRODUCTIONTYPE","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemLOTID","tab_search.Tabpage1.form.edt_LOTID","value","ds_search","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPRODUCTDEFID","tab_search.Tabpage1.form.edt_PRODUCTDEFID","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPRODUCTDEFVERSION","tab_search.Tabpage1.form.cbo_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPRODUCTDEFNAME","tab_search.Tabpage1.form.edt_PRODUCTDEFNAME","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM05400M.xfdl","lib::lib_base.xjs");
        this.addIncludeScript("PCM05400M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM05400M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM05400M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: LEAD TIME
         * 파일명 		: PCM05400M.xfdl
         * 작성자 		: 김애리
         * 작성일 		: 2021.5.31
         * AS-IS		: LotLeadTime
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.5.31	김애리   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        // include "lib::comLib.xjs";
        this.executeIncludeScript("lib::lib_base.xjs"); /*include "lib::lib_base.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	//this.fn_initDatePicker(); //fn_callback 로 감.

        	this.ds_search.set_rowposition(0);
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "LANGUAGETYPE",this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "USERID", this.gf_getUserId());

        	this.fn_initCombo();

        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	if(this.fn_searchValidate() == false) return;
        	var tabName = this.div_work.form.tabMain.tabpages.get_id(this.div_work.form.tabMain.tabindex);

        	switch(tabName) {
        	case "tpgApp" :this.GetApp(); break;
        	case "tpgType" :this.GetType(); break;
        	case "tpgProduct" :this.GetProduct(); break;
        	case "tpgLot" :this.GetLot(); break;
        	case "tpgProcess" :this.GetProcess(); break;
        	case "tpgArea" :this.GetArea(); break;
        	default:
        	}

        };

        this.fn_searchValidate = function ()
        {
        	var component = this.tab_search.Tabpage1;
        	var strColIdList = "cbo_PLANTID";
        	var strColNmList = "SITE";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	return rtn;
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {

        };

        /*
         * 기능 : work영역 초기화  => 공통처리
         */
        this.fn_reset = function(obj,e)
        {
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {

        trace('fn_callBack trId ?' + trId);
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	{
        		switch(trId) {
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
        		case "selectCategory" :
        		{
        			this.ds_search.setColumn(0,"PERIODTYPE","THISMONTH"); //fn_initDatePicker 에서 안되서 마지막 콤보 가져올 때....

        			this.AddAll(this.ds_Category,"CATEGORYID","CATEGORYNAME");
        			this.fn_initializeGridApp(); //App 탭에 그리드 초기화.
        			break;
        		}
        		case "selectLeadTimeByApp" :
        		{
        			trace(this.ds_App.saveXML());
        			this.fn_settingSumApp();
        			break;
        		}
        		case "selectLeadTimeByType" :
        		{
        			trace(this.ds_Type.saveXML());
        			this.fn_settingSumType();
        			break;
        		}
        		case "selectLeadTimeBySegment" :
        		{
        			this.ds_Process.set_keystring("G:+PRODUCTDEFID+PRODUCTDEFVERSION");
        			break;
        		}
        		case "selectLeadTimeByArea" :
        		{
        			//this.ds_Area.set_keystring("G:+RESOURCENAME+PRODUCTDEFID+PRODUCTDEFVERSION+USERSEQUENCE");
        			break;
        		}
        		default:
        		}
        	}

        }


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SEARCH_PRODUCT")
        	{//PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME
        		this.setProduct_P00105(rtn, this.ds_cbo_ProdVersion, this.ds_search);
        	} else if (sPopupId == "SEARCH_LOTID")
        	{//LOTID
        		this.ds_search.setColumn(0,"LOTID",rtn.join(","));
        	}else if (sPopupId == "SEARCH_CUSTOMER")
        	{//CUSTOMERID|CUSTOMERNAME
        		var arrCode = [];
        		var arrName = [];
        		for(var i=0; i<rtn.length; i++)
        		{
        			var colArray = rtn[i];
        			arrCode.push(colArray[0]);
        			arrName.push(colArray[1]);
        		}
        		this.ds_search.setColumn(0,"CUSTOMERID",arrCode.join(","));
        		this.ds_search.setColumn(0,"CUSTOMERNAME",arrName.join(","));
        	}
        }
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

        this.fn_initCombo = function ()
        {
        	var sSvcID = "selectCategory";
        	var sController = "/pcm05400/selectCategory.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_Category=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_settingSumApp = function()
        {
        	var totalCnt = this.ds_App.getSum("TOTAL_CNT");
        	var idx = 0;
        	for(var i=0;i<this.ds_Category.rowcount;i++){
        		if(this.nfn_isNull(this.ds_Category.getColumn(i,"CATEGORYID"))) continue; //전체는 넘어감.
        		var colCD = this.ds_Category.getColumn(i,"CATEGORYID").replace(".","_");

         		var cnt = this.ds_App.getSum(colCD + "_CNT");
        		var rate = cnt == 0 ? 0 : nexacro.round(cnt / totalCnt * 100 );

        		idx = this.ds_Category.rowcount + 5 + i;
        		this.div_work.form.tabMain.tpgApp.form.grdApp.setCellProperty("summary", idx, "text", rate);

        	}

        	var cnt = this.ds_App.getSum("NA_CATEGORY_CNT");
        	var rate = cnt == 0 ? 0 : nexacro.round(cnt / totalCnt * 100 );

        	this.div_work.form.tabMain.tpgApp.form.grdApp.setCellProperty("summary", idx + 1 , "text", rate); //NA

        };

        this.fn_settingSumType = function ()
        {

        };

        this.fn_initializeGridApp = function ()
        {
        	if(this.ds_Category.rowcount == 0) return;

        	var totalCnt = this.ds_App.getSum("TOTAL_COUNT");
        	for(var i=0;i<this.ds_Category.rowcount;i++){

        		if(this.nfn_isNull(this.ds_Category.getColumn(i,"CATEGORYID"))) continue; //전체는 넘어감.

        		var colCD = this.ds_Category.getColumn(i,"CATEGORYID").replace(".","_");
        		var colCDAVG = this.ds_Category.getColumn(i,"CATEGORYID").replace(".","_")+ "_AVG" ;
        		var colNM = this.ds_Category.getColumn(i,"CATEGORYNAME");
        		var colIdx = this.div_work.form.tabMain.tpgApp.form.grdApp.appendContentsCol("body"); //column 추가

        		this.div_work.form.tabMain.tpgApp.form.grdApp.setFormatColProperty(colIdx , "size", 80);
        		this.div_work.form.tabMain.tpgApp.form.grdApp.setCellProperty("body", colIdx, "displaytype", "mask");
        		this.div_work.form.tabMain.tpgApp.form.grdApp.setCellProperty("body", colIdx, "maskeditformat", "#,##0.##");
        		this.div_work.form.tabMain.tpgApp.form.grdApp.setCellProperty("body", colIdx, "text", "bind:" + colCDAVG );

        		this.div_work.form.tabMain.tpgApp.form.grdApp.setCellProperty("summary", colIdx, "displaytype", "mask");
        		this.div_work.form.tabMain.tpgApp.form.grdApp.setCellProperty("summary", colIdx, "maskeditformat", "#,##0.##");
        		this.div_work.form.tabMain.tpgApp.form.grdApp.setCellProperty("summary", colIdx, "expr", 'expr:dataset.getSum("' + colCD + '_SUM") / dataset.getSum("' + colCD + '_CNT")' );

        		this.div_work.form.tabMain.tpgApp.form.grdApp.setCellProperty("head", colIdx, "text", colNM);
        	}

        	//NA 칼럼 추가
        	{
        		var colCD = "NA_CATEGORY";
        		var colNM = "N/A";
        		var colIdx = this.div_work.form.tabMain.tpgApp.form.grdApp.appendContentsCol("body"); //column 추가

        		this.div_work.form.tabMain.tpgApp.form.grdApp.setFormatColProperty(colIdx , "size", 80);
        		this.div_work.form.tabMain.tpgApp.form.grdApp.setCellProperty("body", colIdx, "displaytype", "mask");
        		this.div_work.form.tabMain.tpgApp.form.grdApp.setCellProperty("body", colIdx, "maskeditformat", "#,##0.##");
        		this.div_work.form.tabMain.tpgApp.form.grdApp.setCellProperty("body", colIdx, "text", "bind:" + colCD );

        		this.div_work.form.tabMain.tpgApp.form.grdApp.setCellProperty("summary", colIdx, "displaytype", "mask");
        		this.div_work.form.tabMain.tpgApp.form.grdApp.setCellProperty("summary", colIdx, "maskeditformat", "#,##0.##");
        		this.div_work.form.tabMain.tpgApp.form.grdApp.setCellProperty("summary", colIdx, "expr", 'expr:dataset.getSum("NA_CATEGORY_SUM") / dataset.getSum("NA_CATEGORY_CNT")' );

        		this.div_work.form.tabMain.tpgApp.form.grdApp.setCellProperty("head", colIdx, "text", colNM);
        	}
        };

        this.GetApp = function ()
        {
        	var sSvcID 			= "selectLeadTimeByApp";
        	var sController 	= "/pcm05400/selectLeadTimeByApp.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_App=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.GetType = function ()
        {
        	var sSvcID 			= "selectLeadTimeByType";
        	var sController 	= "/pcm05400/selectLeadTimeByType.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_Type=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.GetProduct = function ()
        {
        	var sSvcID 			= "selectLeadTimeByProduct";
        	var sController 	= "/pcm05400/selectLeadTimeByProduct.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_Product=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.GetLot = function ()
        {
        	var sSvcID 			= "selectLeadTimeByLot";
        	var sController 	= "/pcm05400/selectLeadTimeByLot.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_Lot=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.GetProcess = function ()
        {
        	var sSvcID 			= "selectLeadTimeBySegment";
        	var sController 	= "/pcm05400/selectLeadTimeBySegment.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_Process=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.GetArea = function ()
        {
        	var sSvcID 			= "selectLeadTimeByArea";
        	var sController 	= "/pcm05400/selectLeadTimeByArea.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_Area=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function ()
        {
        	this.tab_search.Tabpage1.form.cbo_PERIODTYPE.set_value("CUSTOM");
        }

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.ds_search.setColumn(0,"PERIOD_PERIODFR",this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.ds_search.setColumn(0,"PERIOD_PERIODTO",this.ds_periodType.getColumn(0,periodType+"_E"));
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_Tabpage1_cboPeriodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM")this.fn_setDate(e.postvalue);
        };

        this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"PRODUCTDEFID",this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value);
        	this.openProduct_P00105("C", this.ds_search,"Product");
        };

        this.tab_search_Tabpage1_btn_LOTID_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"LOTID",this.tab_search.Tabpage1.form.edt_LOTID.value);
        	this.pfn_openPopup_LOTID("SEARCH_LOTID", this.ds_search.getColumn(0,"LOTID"),"C");
        };

        this.tab_search_Tabpage1_btn_CUSTOMER_onclick = function(obj,e)
        {
        	var popupId = "SEARCH_CUSTOMER";
        	var oArg = {};
        	oArg.arg_type = "C";
        	oArg.arg_popupCd = "P00042";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "CUSTOMERID|CUSTOMERNAME";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "";

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };

        this.ds_search_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "CUSTOMERNAME" && e.newvalue == "") this.ds_search.setColumn(0,"CUSTOMERID","");
        };

        this.div_work_tabMain_tpgApp_grdApp_oncelldblclick = function(obj,e)
        {
        	if(e.row < 0 || e.col < 3) return;
        	var colName = this.gfn_getBindColName(obj, e.cell).replace("_AVG","").replace("_",".");
        	this.ds_temp.copyData(this.ds_search);
        	this.ds_temp.setColumn(0,"MFG_CATEGORY",colName);
        	var frDate = this.ds_App.getColumn(e.row, "SENDTIME").replace("-","").replace("-","");
        	var toDate = this.gfn_addDate(frDate, 1);
        	this.ds_temp.setColumn(0,"PERIOD_PERIODFR", frDate);
        	this.ds_temp.setColumn(0,"PERIOD_PERIODTO", toDate);

        	var sSvcID 			= "selectLeadTimeByProduct";
        	var sController 	= "/pcm05400/selectLeadTimeByProduct.do";
        	var sInDatasets 	= "INPUT=ds_temp";
        	var sOutDatasets 	= "ds_Product=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	this.div_work.form.tabMain.set_tabindex(2);
        };

        this.div_work_tabMain_tpgType_grdType_oncelldblclick = function(obj,e)
        {
        	if(e.row < 0) return;

        	this.ds_temp.copyData(this.ds_search);
        	var frDate = this.ds_Type.getColumn(e.row, "SENDTIME").replace("-","").replace("-","");
        	var toDate = this.gfn_addDate(frDate, 1);
        	this.ds_temp.setColumn(0,"PERIOD_PERIODFR", frDate);
        	this.ds_temp.setColumn(0,"PERIOD_PERIODTO", toDate);

        	var sSvcID 			= "selectLeadTimeByProduct";
        	var sController 	= "/pcm05400/selectLeadTimeByProduct.do";
        	var sInDatasets 	= "INPUT=ds_temp";
        	var sOutDatasets 	= "ds_Product=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	this.div_work.form.tabMain.set_tabindex(2);
        };

        this.div_work_tabMain_tpgProduct_grdProduct_oncelldblclick = function(obj,e)
        {
        	if(e.row < 0) return;
        	this.ds_temp.copyData(this.ds_search);
        	this.ds_temp.setColumn(0,"PRODUCTDEFID", this.ds_Product.getColumn(e.row, "PRODUCTDEFID"));
        	this.ds_temp.setColumn(0,"PRODUCTDEFVERSION", this.ds_Product.getColumn(e.row, "PRODUCTDEFVERSION"));

        	var sSvcID 			= "selectLeadTimeByLot";
        	var sController 	= "/pcm05400/selectLeadTimeByLot.do";
        	var sInDatasets 	= "INPUT=ds_temp";
        	var sOutDatasets 	= "ds_Lot=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	this.div_work.form.tabMain.set_tabindex(3);
        };

        this.div_work_tabMain_tpgLot_grdLotList_oncelldblclick = function(obj,e)
        {
        	if(e.row < 0) return;
        	var mRow = this.ds_Lot.rowcount == 1 ? 0 : this.ds_Lot.rowposition;

        	var sUrl = "pcm::PCM03100M.xfdl";
        	// arryList 타입전달 예)
        	var objArgs = {
        		menuName : "LotHistory",
        		objList : ["LOTID", this.ds_Lot.getColumn(mRow, "LOTID")]
        	};

        	var bReload = true;
        	this.gfn_goPage(sUrl, objArgs, bReload);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_LOTID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_LOTID_onclick,this);
            this.tab_search.Tabpage1.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.cal_STARTDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cbo_PERIODTYPE.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cboPeriodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.cal_ENDDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.btn_CUSTOMER.addEventHandler("onclick",this.tab_search_Tabpage1_btn_CUSTOMER_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.tabMain.tpgApp.form.grdApp.addEventHandler("oncelldblclick",this.div_work_tabMain_tpgApp_grdApp_oncelldblclick,this);
            this.div_work.form.tabMain.tpgType.form.grdType.addEventHandler("oncelldblclick",this.div_work_tabMain_tpgType_grdType_oncelldblclick,this);
            this.div_work.form.tabMain.tpgProduct.form.grdProduct.addEventHandler("oncelldblclick",this.div_work_tabMain_tpgProduct_grdProduct_oncelldblclick,this);
            this.div_work.form.tabMain.tpgLot.form.grdLotList.addEventHandler("oncelldblclick",this.div_work_tabMain_tpgLot_grdLotList_oncelldblclick,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("PCM05400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
