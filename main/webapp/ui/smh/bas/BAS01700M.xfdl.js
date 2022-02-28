(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS01700M");
            this.set_titletext("모델등록 및 진행현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_basGovernance", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"GOVERNANCENO\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORYID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTRATING\" type=\"STRING\" size=\"256\"/><Column id=\"SPECWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CAMWORKSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CAMWORKSTATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLDING\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNERID\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CAMOWNERID\" type=\"STRING\" size=\"256\"/><Column id=\"CAMOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ARRAY\" type=\"STRING\" size=\"256\"/><Column id=\"CALCULATION\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACETYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACETYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"RECEPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEPTDATE_YYYYMMDD\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALESOWNERID\" type=\"STRING\" size=\"256\"/><Column id=\"SALESOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"MAINFACTORY\" type=\"STRING\" size=\"256\"/><Column id=\"MODELNO\" type=\"STRING\" size=\"256\"/><Column id=\"CMT\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECAPPROVALDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEASTRANS\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"SPECWORKTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PCSSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER4_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER1_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER2_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER3_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BASE1\" type=\"STRING\" size=\"256\"/><Column id=\"BASE2\" type=\"STRING\" size=\"256\"/><Column id=\"BASE3\" type=\"STRING\" size=\"256\"/><Column id=\"BASE4\" type=\"STRING\" size=\"256\"/><Column id=\"BASE5\" type=\"STRING\" size=\"256\"/><Column id=\"BASE6\" type=\"STRING\" size=\"256\"/><Column id=\"COVER1\" type=\"STRING\" size=\"256\"/><Column id=\"COVER2\" type=\"STRING\" size=\"256\"/><Column id=\"COVER3\" type=\"STRING\" size=\"256\"/><Column id=\"COVER4\" type=\"STRING\" size=\"256\"/><Column id=\"COVER5\" type=\"STRING\" size=\"256\"/><Column id=\"COVER6\" type=\"STRING\" size=\"256\"/><Column id=\"BONDING1\" type=\"STRING\" size=\"256\"/><Column id=\"BONDING2\" type=\"STRING\" size=\"256\"/><Column id=\"BONDING3\" type=\"STRING\" size=\"256\"/><Column id=\"BONDING4\" type=\"STRING\" size=\"256\"/><Column id=\"GUSSETPLATE1\" type=\"STRING\" size=\"256\"/><Column id=\"GUSSETPLATE2\" type=\"STRING\" size=\"256\"/><Column id=\"GUSSETPLATE3\" type=\"STRING\" size=\"256\"/><Column id=\"GUSSETPLATE4\" type=\"STRING\" size=\"256\"/><Column id=\"GUSSETPLATE5\" type=\"STRING\" size=\"256\"/><Column id=\"GUSSETPLATE6\" type=\"STRING\" size=\"256\"/><Column id=\"GUSSETPLATE7\" type=\"STRING\" size=\"256\"/><Column id=\"GUSSETPLATE8\" type=\"STRING\" size=\"256\"/><Column id=\"GLUE1\" type=\"STRING\" size=\"256\"/><Column id=\"GLUE2\" type=\"STRING\" size=\"256\"/><Column id=\"GLUE3\" type=\"STRING\" size=\"256\"/><Column id=\"GLUE4\" type=\"STRING\" size=\"256\"/><Column id=\"GLUE5\" type=\"STRING\" size=\"256\"/><Column id=\"GLUE6\" type=\"STRING\" size=\"256\"/><Column id=\"GLUE7\" type=\"STRING\" size=\"256\"/><Column id=\"GLUE8\" type=\"STRING\" size=\"256\"/><Column id=\"SHIELD1\" type=\"STRING\" size=\"256\"/><Column id=\"SHIELD2\" type=\"STRING\" size=\"256\"/><Column id=\"ARRAYSIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"CAMOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"CAMSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPTINPUT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basGovernanceNew", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"GOVERNANCENO\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORYID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTRATING\" type=\"STRING\" size=\"256\"/><Column id=\"SPECWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CAMWORKSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CAMWORKSTATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLDING\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNERID\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CAMOWNERID\" type=\"STRING\" size=\"256\"/><Column id=\"CAMOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ARRAY\" type=\"STRING\" size=\"256\"/><Column id=\"CALCULATION\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACETYPE1\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACETYPE2\" type=\"STRING\" size=\"256\"/><Column id=\"RECEPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEPTDATE_YYYYMMDD\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALESOWNERID\" type=\"STRING\" size=\"256\"/><Column id=\"SALESOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"MAINFACTORY\" type=\"STRING\" size=\"256\"/><Column id=\"MODELNO\" type=\"STRING\" size=\"256\"/><Column id=\"CMT\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECAPPROVALDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"OVERSEASTRANS\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"SPECWORKTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PCSSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE1_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE2_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SURFACE3_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER4_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER1_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER2_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COPPER3_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BASE1\" type=\"STRING\" size=\"256\"/><Column id=\"BASE2\" type=\"STRING\" size=\"256\"/><Column id=\"BASE3\" type=\"STRING\" size=\"256\"/><Column id=\"BASE4\" type=\"STRING\" size=\"256\"/><Column id=\"BASE5\" type=\"STRING\" size=\"256\"/><Column id=\"BASE6\" type=\"STRING\" size=\"256\"/><Column id=\"COVER1\" type=\"STRING\" size=\"256\"/><Column id=\"COVER2\" type=\"STRING\" size=\"256\"/><Column id=\"COVER3\" type=\"STRING\" size=\"256\"/><Column id=\"COVER4\" type=\"STRING\" size=\"256\"/><Column id=\"COVER5\" type=\"STRING\" size=\"256\"/><Column id=\"COVER6\" type=\"STRING\" size=\"256\"/><Column id=\"BONDING1\" type=\"STRING\" size=\"256\"/><Column id=\"BONDING2\" type=\"STRING\" size=\"256\"/><Column id=\"BONDING3\" type=\"STRING\" size=\"256\"/><Column id=\"BONDING4\" type=\"STRING\" size=\"256\"/><Column id=\"GUSSETPLATE1\" type=\"STRING\" size=\"256\"/><Column id=\"GUSSETPLATE2\" type=\"STRING\" size=\"256\"/><Column id=\"GUSSETPLATE3\" type=\"STRING\" size=\"256\"/><Column id=\"GUSSETPLATE4\" type=\"STRING\" size=\"256\"/><Column id=\"GUSSETPLATE5\" type=\"STRING\" size=\"256\"/><Column id=\"GUSSETPLATE6\" type=\"STRING\" size=\"256\"/><Column id=\"GUSSETPLATE7\" type=\"STRING\" size=\"256\"/><Column id=\"GUSSETPLATE8\" type=\"STRING\" size=\"256\"/><Column id=\"GLUE1\" type=\"STRING\" size=\"256\"/><Column id=\"GLUE2\" type=\"STRING\" size=\"256\"/><Column id=\"GLUE3\" type=\"STRING\" size=\"256\"/><Column id=\"GLUE4\" type=\"STRING\" size=\"256\"/><Column id=\"GLUE5\" type=\"STRING\" size=\"256\"/><Column id=\"GLUE6\" type=\"STRING\" size=\"256\"/><Column id=\"GLUE7\" type=\"STRING\" size=\"256\"/><Column id=\"GLUE8\" type=\"STRING\" size=\"256\"/><Column id=\"SHIELD1\" type=\"STRING\" size=\"256\"/><Column id=\"SHIELD2\" type=\"STRING\" size=\"256\"/><Column id=\"ARRAYSIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basGovernanceDel", this);
            obj._setContents("<ColumnInfo><Column id=\"GOVERNANCENO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_itemMasterDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MASTERDATACLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMUOM\" type=\"STRING\" size=\"256\"/><Column id=\"NEWREQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"ENGINEERINGCHANGE\" type=\"STRING\" size=\"256\"/><Column id=\"IMPLEMENTATIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"COSTCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"SALEORDERCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"INVENTORYCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"MAKEBUYTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANNER\" type=\"STRING\" size=\"256\"/><Column id=\"UNITOFPURCHASING\" type=\"STRING\" size=\"256\"/><Column id=\"UNITOFSTOCK\" type=\"STRING\" size=\"256\"/><Column id=\"SPEC\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"AGING\" type=\"STRING\" size=\"256\"/><Column id=\"AGINGDAY\" type=\"STRING\" size=\"256\"/><Column id=\"CYCLECOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ENDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTCONTROL\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TACTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"NM_PLANNER\" type=\"STRING\" size=\"256\"/><Column id=\"NM_CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"NM_SPECIFICATIO\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTRATING\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FACTORYID\" type=\"STRING\" size=\"256\"/><Column id=\"IDCLASSIDRULE\" type=\"STRING\" size=\"256\"/><Column id=\"ISINPUT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_jobInputType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"18",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("staSearchPeriod","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("7693F1DF1E5842AD972326E4CE8D5234");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear2","171","355","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","355","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"30","15","400","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","30","15","400",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"335","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","361","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPlantList","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STOPSITE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboPlantList","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboPeriodType","15","60","88","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("calStartDt","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_innerdataset("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("calEndDt","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_innerdataset("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_01",null,"55","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_01",null,"80","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staJobType","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WORKTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02",null,"130","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboWorkType","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_codecolumn("C,JobType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductionType","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboProductionType","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00",null,"155","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03",null,"30","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00",null,"55","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00",null,"80","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00",null,"130","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00",null,"155","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductCode","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00",null,"180","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductName","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00",null,"205","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staGovernanceState","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSINGSTATUS");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00",null,"260","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCamState","0","265","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("33");
            obj.set_text("CAM상태");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("218109DFEC1942389E5D7883305F0D8E");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00",null,"285","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staSpecOwner","0","290","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("35");
            obj.set_text("사양담당자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SPECOWNER");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00_00",null,"310","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("36");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCamOwner","0","315","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("37");
            obj.set_text("CAM담당자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CAMOWNER");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00",null,"230","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("38");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboGovernanceState","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("39");
            obj.set_codecolumn("C,GovernanceState,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00",null,"285","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("40");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboCamState","108","265","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("41");
            obj.set_codecolumn("C,CAMState,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item","108","160",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("42");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_item",null,"160","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01",null,"180","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("44");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_specOwner","108","290",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("45");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_specOwner",null,"290","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("46");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00",null,"310","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("47");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_camOwner","108","315",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("48");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_camOwner",null,"315","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("49");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item_nm","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("50");
            obj.set_readonly("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_00",null,"205","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("51");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCustomer","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("52");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("F993645129314EB2A2423955D6AB814C");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_customer",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("53");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_01",null,"105","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("54");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customer","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("55");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_01_00",null,"105","45","5","229",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("56");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item_id","73","496","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("57");
            obj.set_value("품목ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("품목ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customer_id","74","461","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("58");
            obj.set_value("고객사ID(HIDDEN)");
            obj.set_visible("false");
            obj.set_text("고객사ID(HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_specOwner_id","74","531","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("59");
            obj.set_value("사양담당자ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("사양담당자ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_camOwner_id","74","568","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("60");
            obj.set_value("CAM담당자ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("CAM담당자ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_exceptInput","108","235","141","25",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("61");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_01",null,"260","45","5","89",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("62");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staGovernanceState00","0","236","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("63");
            obj.set_text("투입제외");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("EXCEPTINPUT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","281","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"1","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","112","-63","101","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static01_00","0",null,null,"34","0","194",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_text("모델등록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("REGISTERMODEL");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_basGovernance","0","34",null,null,"0","Static01_00:7",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_basGovernance");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"접수일\"/><Cell col=\"2\" text=\"고객명\"/><Cell col=\"3\" text=\"고객사 버전\"/><Cell col=\"4\" text=\"제품Type\"/><Cell col=\"5\" text=\"층수\"/><Cell col=\"6\" text=\"작업구분\"/><Cell col=\"7\" text=\"생산구분\"/><Cell col=\"8\" text=\"품목코드\"/><Cell col=\"9\" text=\"내부 Rev.\"/><Cell col=\"10\" text=\"품목명\"/><Cell col=\"11\" text=\"제품등급\"/><Cell col=\"12\" text=\"사양작업\"/><Cell col=\"13\" text=\"CAM작업\"/><Cell col=\"14\" text=\"사양담당자\"/><Cell col=\"15\" text=\"CAM담당자\"/><Cell col=\"16\" text=\"PCS SIZE\"/><Cell col=\"17\" text=\"PNL SIZE\"/><Cell col=\"18\" text=\"ARRAY SIZE\"/><Cell col=\"19\" text=\"합수\"/><Cell col=\"20\" text=\"산출수\"/><Cell col=\"21\" text=\"특이사항\"/><Cell col=\"22\" text=\"표면도금1\"/><Cell col=\"23\" text=\"표면도금2\"/><Cell col=\"24\" text=\"표면도금3\"/><Cell col=\"25\" text=\"외층동도금1\"/><Cell col=\"26\" text=\"내층동도금1\"/><Cell col=\"27\" text=\"내층동도금2\"/><Cell col=\"28\" text=\"내층동도금3\"/><Cell col=\"29\" text=\"BASE(1)\"/><Cell col=\"30\" text=\"BASE(2)\"/><Cell col=\"31\" text=\"BASE(3)\"/><Cell col=\"32\" text=\"BASE(4)\"/><Cell col=\"33\" text=\"BASE(5)\"/><Cell col=\"34\" text=\"BASE(6)\"/><Cell col=\"35\" text=\"절연체(1)\"/><Cell col=\"36\" text=\"절연체(2)\"/><Cell col=\"37\" text=\"절연체(3)\"/><Cell col=\"38\" text=\"절연체(4)\"/><Cell col=\"39\" text=\"절연체(5)\"/><Cell col=\"40\" text=\"층간접착제(1)\"/><Cell col=\"41\" text=\"층간접착제(2)\"/><Cell col=\"42\" text=\"층간접착제(3)\"/><Cell col=\"43\" text=\"층간접착제(4)\"/><Cell col=\"44\" text=\"보강판(1)\"/><Cell col=\"45\" text=\"보강판(2)\"/><Cell col=\"46\" text=\"보강판(3)\"/><Cell col=\"47\" text=\"보강판(4)\"/><Cell col=\"48\" text=\"보강판(5)\"/><Cell col=\"49\" text=\"보강판(6)\"/><Cell col=\"50\" text=\"보강판(7)\"/><Cell col=\"51\" text=\"보강판(8)\"/><Cell col=\"52\" text=\"접착제(1)\"/><Cell col=\"53\" text=\"접착제(2)\"/><Cell col=\"54\" text=\"접착제(3)\"/><Cell col=\"55\" text=\"접착제(4)\"/><Cell col=\"56\" text=\"접착제(5)\"/><Cell col=\"57\" text=\"접착제(6)\"/><Cell col=\"58\" text=\"접착제(7)\"/><Cell col=\"59\" text=\"접착제(8)\"/><Cell col=\"60\" text=\"SHIELD(1)\"/><Cell col=\"61\" text=\"SHIELD(2)\"/><Cell col=\"62\" text=\"영업담당자\"/><Cell col=\"63\" text=\"수정자\"/><Cell col=\"64\" text=\"수정일\"/><Cell col=\"65\" text=\"승인일\"/><Cell col=\"66\" text=\"관리번호\"/><Cell col=\"67\" text=\"Holding\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\"/><Cell col=\"1\" text=\"bind:RECEPTDATE\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\"/><Cell col=\"2\" text=\"bind:CUSTOMERNAME\" displaytype=\"text\" textAlign=\"left\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\"/><Cell col=\"3\" text=\"bind:CUSTOMERVERSION\" displaytype=\"text\" textAlign=\"left\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\"/><Cell col=\"4\" text=\"bind:PRODUCTTYPE\" displaytype=\"combotext\" combocodecol=\"C,ProductType,,Y,N\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\"/><Cell col=\"5\" text=\"bind:LAYER\" combocodecol=\"C,Layer,,Y,N\" displaytype=\"combotext\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\"/><Cell col=\"6\" text=\"bind:JOBTYPE\" displaytype=\"combotext\" combocodecol=\"C,JobType,,Y,N\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\"/><Cell col=\"7\" text=\"bind:PRODUCTIONTYPE\" displaytype=\"combotext\" combocodecol=\"C,ProductionType,,Y,N\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\"/><Cell col=\"8\" text=\"bind:PRODUCTDEFID\" displaytype=\"text\" textAlign=\"left\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\"/><Cell col=\"9\" text=\"bind:PRODUCTDEFVERSION\" displaytype=\"text\" textAlign=\"left\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\"/><Cell col=\"10\" text=\"bind:ITEMNAME\" displaytype=\"text\" textAlign=\"left\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\"/><Cell col=\"11\" text=\"bind:PRODUCTRATING\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\"/><Cell col=\"12\" text=\"bind:SPECWORKTYPE\" combocodecol=\"C,GovernanceState,,Y,N\" displaytype=\"combotext\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\"/><Cell col=\"13\" text=\"bind:CAMWORKSTATE\" combocodecol=\"C,CAMState,,Y,N\" displaytype=\"combotext\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\"/><Cell col=\"14\" text=\"bind:SPECOWNERNAME\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\"/><Cell col=\"15\" text=\"bind:CAMOWNERNAME\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\"/><Cell col=\"16\" text=\"bind:PCSSIZE\" displaytype=\"text\" textAlign=\"left\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\"/><Cell col=\"17\" text=\"bind:PNLSIZE\" displaytype=\"text\" textAlign=\"left\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\"/><Cell col=\"18\" displaytype=\"normal\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:ARRAYSIZE\"/><Cell col=\"19\" text=\"bind:ARRAY\" displaytype=\"number\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\"/><Cell col=\"20\" text=\"bind:CALCULATION\" displaytype=\"number\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\"/><Cell col=\"21\" text=\"bind:CMT\" displaytype=\"text\" textAlign=\"left\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\"/><Cell col=\"22\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:SURFACE1_TYPE\"/><Cell col=\"23\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:SURFACE2_TYPE\"/><Cell col=\"24\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:SURFACE3_TYPE\"/><Cell col=\"25\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:COPPER4_TYPE\"/><Cell col=\"26\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:COPPER1_TYPE\"/><Cell col=\"27\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:COPPER2_TYPE\"/><Cell col=\"28\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:COPPER3_TYPE\"/><Cell col=\"29\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:BASE1\"/><Cell col=\"30\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:BASE2\"/><Cell col=\"31\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:BASE3\"/><Cell col=\"32\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:BASE4\"/><Cell col=\"33\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:BASE5\"/><Cell col=\"34\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:BASE6\"/><Cell col=\"35\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:COVER1\"/><Cell col=\"36\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:COVER2\"/><Cell col=\"37\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:COVER3\"/><Cell col=\"38\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:COVER4\"/><Cell col=\"39\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:COVER5\"/><Cell col=\"40\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:BONDING1\"/><Cell col=\"41\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:BONDING2\"/><Cell col=\"42\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:BONDING3\"/><Cell col=\"43\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:BONDING4\"/><Cell col=\"44\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:GUSSETPLATE1\"/><Cell col=\"45\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:GUSSETPLATE2\"/><Cell col=\"46\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:GUSSETPLATE3\"/><Cell col=\"47\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:GUSSETPLATE4\"/><Cell col=\"48\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:GUSSETPLATE5\"/><Cell col=\"49\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:GUSSETPLATE6\"/><Cell col=\"50\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:GUSSETPLATE7\"/><Cell col=\"51\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:GUSSETPLATE8\"/><Cell col=\"52\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:GLUE1\"/><Cell col=\"53\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:GLUE2\"/><Cell col=\"54\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:GLUE3\"/><Cell col=\"55\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:GLUE4\"/><Cell col=\"56\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:GLUE5\"/><Cell col=\"57\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:GLUE6\"/><Cell col=\"58\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:GLUE7\"/><Cell col=\"59\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:GLUE8\"/><Cell col=\"60\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:SHIELD1\"/><Cell col=\"61\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:SHIELD2\"/><Cell col=\"62\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:SALESOWNERNAME\"/><Cell col=\"63\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:MODIFIER\"/><Cell col=\"64\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:MODIFIEDTIME\"/><Cell col=\"65\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:APPROVEDATE\"/><Cell col=\"66\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:GOVERNANCENO\"/><Cell col=\"67\" cssclass=\"expr:ISHOLDING==&quot;Y&quot; ? &quot;cell_bg_red&quot;  :  &quot;&quot;\" text=\"bind:ISHOLDING\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_basGovernance","0","0",null,"34","892",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow2",null,"6","29","24","32",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basGovernance",null,"6","29","24","3",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("Div01","0",null,null,"173","0","17",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label07","77.17%","10","9.95%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("21");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cboProductionType","label07:5","10",null,"20","5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,ProductionType,SEL,Y,Y");
            obj.set_type("dropdown");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_index("-1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label10","26.18%","60","11.94%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_text("CAM 담당자");
            obj.set_tooltiptext("CAMOWNERNAME");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label12","50.47%","60","11.94%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("22");
            obj.set_text("영업 담당자");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("SALESOWNERNAME");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_camOwner",null,"60","22","20","label12:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_camOwner","label10:5","60",null,"20","btn_camOwner:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("강기원");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label04","0","10","12%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("16");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            obj.set_tooltiptext("F993645129314EB2A2423955D6AB814C");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label09","0","60","12%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("17");
            obj.set_text("사양 담당자");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("SPECOWNERNAME");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_specOwner",null,"60","22","20","label10:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_specOwner","label09:5","60",null,"20","btn_specOwner:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("5");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label06","50.47%","10","11.94%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("19");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            obj.set_tooltiptext("WORKTYPE");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label11","77.17%","60","9.95%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("20");
            obj.set_text("Holding");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("ISHOLDING");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label08","26.18%","10","11.94%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("23");
            obj.set_text("고객사 버전");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("CUSTOMERVERSION");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_customer",null,"10","22","20","label08:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_customer","label04:5","10",null,"20","btn_customer:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("0");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edtCustomerRev","label08:5","10",null,"20","label06:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("12");
            obj.set_text("0.1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label14","0","95","12%","52",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("24");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("COMMENT");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_salesOwner",null,"60","22","20","label11:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_salesOwner","label12:5","60",null,"20","btn_salesOwner:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("7");
            obj.set_tooltiptext("김용병");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new TextArea("txtDescription","label14:5","110",null,"52","5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("11");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cboWorkType","label06:5","10",null,"20","label07:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,JobType,SEL,Y,Y");
            obj.set_type("dropdown");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_index("-1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01","0%","35","12%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("26");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("ITEMCODE");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02","26.18%","35","11.94%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("28");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            obj.set_tooltiptext("ITEMNAME");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_item_cd",null,"35","39","20","label02:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_textAlign("center");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_item",null,"35","22","20","edt_item_cd:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_item","label01:5","35",null,"20","btn_item:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("3");
            obj.set_cssclass("point");
            obj.set_tooltiptext("ITEMCODE");
            obj.set_text("10400009A1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_item_nm","label02:5","35",null,"20","5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            obj.set_enable("true");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label00","0","85","12%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("29");
            obj.set_text("접수일");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("RECEPTDATE");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label03","26.18%","85","11.94%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("31");
            obj.set_text("해외이관");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("OVERSEASTRANS");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Calendar("calReceiptDt","label00:5","85",null,"20","label03:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label12_00","48.59%","85",null,"20","5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("label03_00","50.47%","85","11.94%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("38");
            obj.set_text("투입유형");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("INPUTTYPE");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cboOverSeasTrans","label03:5","85",null,"20","label03_00:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,OverSeasTrans2,,Y,Y");
            obj.set_type("caseifilterlike");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_index("-1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cboHolding","label11:5","60",null,"20","5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,YesNo,SEL,Y,Y");
            obj.set_type("dropdown");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_index("-1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_salesOwner_id","741","85",null,"19","85",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("36");
            obj.set_value("영업담당ID(HIDDEN)");
            obj.set_visible("false");
            obj.set_text("영업담당ID(HIDDEN)");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cboInputType","label03_00:5","85",null,"20","label11:0",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("10");
            obj.set_type("caseifilterlike");
            obj.set_autoselect("true");
            obj.set_innerdataset("ds_jobInputType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("");
            obj.set_index("-1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_camOwner_id","767","85","128","19",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("35");
            obj.set_value("CAM담당ID(HIDDEN)");
            obj.set_visible("false");
            obj.set_text("CAM담당ID(HIDDEN)");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_specOwner_id","779","85","124","19",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("34");
            obj.set_value("사양담당ID(HIDDEN)");
            obj.set_visible("false");
            obj.set_text("사양담당ID(HIDDEN)");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_customer_id","831","85","112","19",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("33");
            obj.set_value("고객사ID(HIDDEN)");
            obj.set_visible("false");
            obj.set_text("고객사ID(HIDDEN)");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","26",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_saveNew",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","100","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("마스터품목(사양)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:10","16","24","24",null,null,null,null,null,null,this.div_header.form);
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

            obj = new Button("btnNew",null,"16","31","24","btn_saveNew:25",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_com_new");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btnApproval",null,"16","31","24","btnNew:0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_com_confirm");
            obj.set_tooltiptext("REQUESTAPPROVAL");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_work.form.Div01.form.edtCustomerRev","value","ds_basGovernanceNew","CUSTOMERVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.form.Div01.form.cboWorkType","value","ds_basGovernanceNew","JOBTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.form.Div01.form.cboProductionType","value","ds_basGovernanceNew","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_work.form.Div01.form.edt_item","value","ds_basGovernanceNew","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_work.form.Div01.form.edt_item_cd","value","ds_basGovernanceNew","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_work.form.Div01.form.calReceiptDt","value","ds_basGovernanceNew","RECEPTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_work.form.Div01.form.cboOverSeasTrans","value","ds_basGovernanceNew","OVERSEASTRANS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_work.form.Div01.form.cboInputType","value","ds_basGovernanceNew","INPUTTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_work.form.Div01.form.cboHolding","value","ds_basGovernanceNew","HOLDSTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_work.form.Div01.form.txtDescription","value","ds_basGovernanceNew","CMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_work.form.Div01.form.edt_salesOwner_id","value","ds_basGovernanceNew","SALESOWNERID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_work.form.Div01.form.edt_camOwner_id","value","ds_basGovernanceNew","CAMOWNERID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_work.form.Div01.form.edt_specOwner_id","value","ds_basGovernanceNew","SPECOWNERID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_work.form.Div01.form.edt_customer_id","value","ds_basGovernanceNew","CUSTOMERID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_work.form.Div01.form.edt_customer","value","ds_basGovernanceNew","CUSTOMERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_work.form.Div01.form.edt_item_nm","value","ds_basGovernanceNew","ITEMNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_work.form.Div01.form.edt_specOwner","value","ds_basGovernanceNew","SPECOWNERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_work.form.Div01.form.edt_camOwner","value","ds_basGovernanceNew","CAMOWNERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_work.form.Div01.form.edt_salesOwner","value","ds_basGovernanceNew","SALESOWNERNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","tab_search.Tabpage1.form.cboPlantList","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","tab_search.Tabpage1.form.calStartDt","value","ds_search","P_PERIOD_PERIODFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","tab_search.Tabpage1.form.calEndDt","value","ds_search","P_PERIOD_PERIODTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","tab_search.Tabpage1.form.edt_customer_id","value","ds_search","CUSTOMER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","tab_search.Tabpage1.form.cboWorkType","value","ds_search","JOBTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","tab_search.Tabpage1.form.cboProductionType","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","tab_search.Tabpage1.form.edt_item_id","value","ds_search","ITEMID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","tab_search.Tabpage1.form.edt_specOwner_id","value","ds_search","SPECOWNER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","tab_search.Tabpage1.form.edt_camOwner_id","value","ds_search","CAMOWNER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","tab_search.Tabpage1.form.cboCamState","value","ds_search","CAMSTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","tab_search.Tabpage1.form.cboGovernanceState","value","ds_search","GOVERNANCESTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","tab_search.Tabpage1.form.chk_exceptInput","value","ds_search","EXCEPTINPUT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS01700M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS01700M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 모델등록 및 진행현황
         * 파일명 		: BAS01700M.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.02.08
         *
         * 설  명		: 기준관리 - 모델등록 및 진행현황
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.08	최성민   	최초작성
         * 2021.04.27	최성민		1) 동일품목 등록 오류메세지 변경 (결함 #289)
                                    2) 동일품목 삭제 가능하도록 수정 (결함 #288)
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.Tabpage1.form;
        this.frmDiv = this.div_work.form.Div01.form;
        this.g_idx = null;
        this.g_event = false;
        this.g_new = false;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.basfn_getPeriodData("ds_periodType");
        	this.fn_formInit();
        	this.fn_newData();
        	this.basfn_saveBtn(this.div_header.form.btn_saveNew); //저장버튼 공통처리 함수 호출
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_basGovernance.clearData();

        	var sSvcID 			= "selectBasGovernanceList";
        	var sController 	= "/bas01700/selectBasGovernanceList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_basGovernance=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 상세
         */
        this.fn_selectDetail = function (fRow)
        {
        	this.ds_basGovernanceNew.set_enableevent(false);
        	this.ds_basGovernanceNew.clearData();
        	var nRow = this.ds_basGovernanceNew.addRow();
        	this.ds_basGovernanceNew.copyRow(nRow, this.ds_basGovernance, fRow);
        	this.fn_getJobInputType(this.ds_basGovernanceNew.getColumn(0, "OVERSEASTRANS"));
        	/*
        	var sSvcID 			= "selectBasGovernanceListDetail";
        	var sController 	= "/bas01700/selectBasGovernanceList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_basGovernanceNew=output";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("GOVERNANCENO", governanceNo);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, false); //동기 호출
        	*/
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_basGovernanceNew) && !this.gfn_dsIsUpdated(this.ds_basGovernance))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}
        	var dsRowType = this.ds_basGovernanceNew.getRowType(0);
        	if(dsRowType==Dataset.ROWTYPE_INSERT || dsRowType==Dataset.ROWTYPE_UPDATE){
        		var component = this.div_work.form.Div01;
        		var strColIdList = "edt_customer_id,cboWorkType,cboProductionType,edt_item_nm";
        		var strColNmList = this.nfn_nvl(this.nfn_getDictionarynameUpper("F993645129314EB2A2423955D6AB814C"),"고객사")
        						 + ","+this.nfn_nvl(this.nfn_getDictionarynameUpper("WORKTYPE"),"작업구분")
        						 + ","+this.nfn_nvl(this.nfn_getDictionarynameUpper("PRODUCTIONTYPE"),"생산구분")
        						 + ","+this.nfn_nvl(this.nfn_getDictionarynameUpper("PRODUCTDEFNAME"),"품목명");
        		var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        		if (rtn == false) return;
        	}


        	var bOK = this.gfn_Message("InfoPopupSave", null, "conf", "yesno");//nexacro.getApplication().confirm("저장하시겠습니까?");
        	if (bOK == false)
        	{
        		return;
        	}

        	this.g_idx = this.ds_basGovernance.rowposition;

        // -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveBasGovernance";
        	var sController 	= "/bas01700/saveBasGovernance.do";
        	var sInDatasets 	= "INPUT=ds_basGovernanceNew:U INPUT_D=ds_basGovernance:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        	var chkCnt = this.ds_basGovernance.getCaseCount("CHK=='1'");

        	if (chkCnt==0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}


        	var status = this.ds_basGovernance.getColumn(this.ds_basGovernance.rowposition, "SPECWORKTYPE");
        	var governanceNo = this.ds_basGovernance.getColumn(this.ds_basGovernance.rowposition, "GOVERNANCENO");
        	var jobType = this.ds_basGovernance.getColumn(this.ds_basGovernance.rowposition, "JOBTYPE");

        	if(status=="Reject" || status =="Request" || jobType=="Same"){
        		this.basfn_deleteRow(this.ds_basGovernance);
        	} else {
        		//삭제불가
        		this.gfn_Message("ValidateDeleteApprovalStatus", governanceNo, "error", "ok");
        	}
        };

        /*
         * 기능 : 추가
         */
        this.fn_add = function(obj,e)
        {
        	var dsObj = this.ds_basMasterdataclass;
        	if(dsObj == null) return;
        	var row = dsObj.insertRow(dsObj.rowposition+1);

        	/* KEY컬럼 기본세팅 */
        	dsObj.setColumn(row,"ENTERPRISEID",this.gf_getEnterpriseId());//ENTERPRISEID
        	dsObj.setColumn(row,"VALIDSTATE","Valid");	//Validate
        	dsObj.setColumn(row,"IDCLASSID","N");		//IDCLASSID
        	dsObj.setColumn(row,"ISAPPROVAL","N");		//ISAPPROVAL
        };

        /*
         * 기능 : 복사
         */
        this.fn_copy = function(obj,e)
        {
        	var dsObj = this.ds_basMasterdataclass;
        	if(dsObj == null) return;
        	var row = dsObj.insertRow(dsObj.rowposition+1);
        	dsObj.copyRow(row, dsObj, dsObj.rowposition-1);

        	/* KEY,WHO컬럼 관련 복사제외 */
        	dsObj.setColumn(row,"MASTERDATACLASSID","");//ID
        	dsObj.setColumn(row,"CREATOR",""); 			//생성자
        	dsObj.setColumn(row,"CREATEDTIME",""); 		//생성일
        	dsObj.setColumn(row,"MODIFIER",""); 		//수정자
        	dsObj.setColumn(row,"MODIFIEDTIME",""); 	//수정일
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		if (trId == "saveBasGovernance")
        		{
        			//this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        			alert(errMsg);
        		} else {
        			this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		}
        	}
        	else
        	{
        		if (trId == "saveBasGovernance")
        		{
        			this.g_event = false;
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search();
        		} else if (trId=="selectBasGovernanceList"){
        			var idx = 0;
        			if(!this.nfn_isNull(this.g_idx )){
        				idx = this.g_idx;
        			}
        			this.ds_basGovernance.set_enableevent(false);
        			this.ds_basGovernance.set_rowposition(idx);
        			var governanceNo = this.ds_basGovernance.getColumn(idx, "GOVERNANCENO");
        			this.g_event = false;
        			this.g_new = false;
        			this.fn_selectDetail(idx);
        			this.g_idx = null;
        			this.ds_basGovernance.set_enableevent(true);
        		} else if (trId =="selectItemDetailData"){
        			var dsObj = this.ds_itemMasterDetail;
        			var dsTarget = this.ds_basGovernanceNew;

        			if(!this.nfn_isNull(dsObj.getColumn(0, "CUSTOMERID"))){
        				dsTarget.setColumn(0, "CUSTOMERID", 	dsObj.getColumn(0, "CUSTOMERID"));
        				dsTarget.setColumn(0, "CUSTOMERNAME", 	dsObj.getColumn(0, "CUSTOMERNAME"));
        			}

        			if(!this.nfn_isNull(dsObj.getColumn(0, "PRODUCTIONTYPE"))){
        				dsTarget.setColumn(0, "PRODUCTIONTYPE", dsObj.getColumn(0, "PRODUCTIONTYPE"));
        			}
        		} else if (trId =="selectJobInputTypeList"){
        			this.ds_basGovernanceNew.setColumn(0, "INPUTTYPE", this.ds_basGovernance.getColumn(this.ds_basGovernance.rowposition, "INPUTTYPE"));
        			if(this.g_new){
        				this.ds_basGovernanceNew.setColumn(0, "INPUTTYPE", 		"01");
        			}
        			if(!this.g_event && !this.g_new){
        				this.ds_basGovernanceNew.applyChange();
        			}
        			this.ds_basGovernanceNew.set_enableevent(true);
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
         * 기능 : 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.searchDiv.cboPeriodType.set_value("THISMONTH"); // 금월
        	this.searchDiv.cboWorkType.set_value(null);
        	this.searchDiv.cboProductionType.set_value(null);
        	this.searchDiv.edt_customer.set_value(null);
        	this.searchDiv.edt_customer_id.set_value(null);
        	this.searchDiv.edt_item.set_value(null);
        	this.searchDiv.edt_item_id.set_value(null);
        	this.searchDiv.edt_item_nm.set_value(null);
        	this.searchDiv.edt_specOwner.set_value(null);
        	this.searchDiv.edt_specOwner_id.set_value(null);
        	this.searchDiv.edt_camOwner.set_value(null);
        	this.searchDiv.edt_camOwner_id.set_value(null);
        	this.searchDiv.chk_exceptInput.set_value("Y");
        	this.fn_setDate("THISMONTH");
        }

        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function ()
        {
        	this.searchDiv.cboPeriodType.set_value("CUSTOM");
        }

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.searchDiv.calStartDt.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.searchDiv.calEndDt.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        	//접수일 초기세팅
        	this.frmDiv.calReceiptDt.set_value(this.ds_periodType.getColumn(0,"THISDAY_S"));
        }

        /*
         * 기능 : 입력폼 초기화
         */
        this.fn_clearForm = function ()
        {

        }

        this.fn_openPop = function(svcId, popId)
        {
        	// gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
        	//-----------------
        	// arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅
        	// popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        	// popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        	// rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        	// paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        	// paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        	// searchStr   : 팝업 조회조건 콤보값 = 조회 값

        	var popupId = svcId;
        	var oArg = {};
        	var opts = "width=650,height=500";

        	oArg.arg_type = "B";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "";

        	if(svcId=="SCH_CUSTOMER"
        	   ||svcId=="SCH_ITEM"
        	   ||svcId=="SCH_SPEC_OWNER"
        	   ||svcId=="SCH_CAM_OWNER"
        	   ){ //검색조건에서 고객조회시 다건선택 가능하도록
        			oArg.arg_type = "CA";
        	 }

        	//결재상신
        	if(svcId =="POP_APPROVAL"){
        		opts = "width=1024,height=205";
        		var dsObj = this.ds_basGovernance;
        		var dsPosition = dsObj.rowposition;
        		if(dsPosition >= 0 ) {
        			oArg.governanceNo = dsObj.getColumn(dsPosition,"GOVERNANCENO");
        			oArg.governanceType = dsObj.getColumn(dsPosition,"GOVERNANCETYPE");
        			this.gfn_openPopup(popupId,"bas::BAS01700P.xfdl",oArg,opts);
        		}
        	} else {
        		if(popId=="P00042"){ //고객사 조회
        			if(svcId=="SCH_CUSTOMER"){
        				oArg.arg_type = "CA";
        				oArg.arg_searchStr = "SEARCH_KEY=" + this.nfn_nvl(this.tab_search.Tabpage1.form.edt_customer.value,"");
        			} else {
        				oArg.arg_type = "BA";
        				oArg.arg_searchStr = "SEARCH_KEY=" + this.nfn_nvl(this.frmDiv.edt_customer.value,"");
        			}

        			oArg.arg_rtnCols = "CUSTOMERID|CUSTOMERNAME";
        		} else if (popId=="P00043" && svcId=="SCH_ITEM"){	//품목 조회
        			oArg.arg_type = "CA";
        			oArg.arg_paramCols = "MASTERDATACLASSID";
        			oArg.arg_paramValues = "Product";
        			oArg.arg_rtnCols = "ITEMID|ITEMNAME|ITEMVERSION";
        			oArg.arg_searchStr = "SEARCH_KEY="+this.nfn_nvl(this.searchDiv.edt_item.value, "");
        		} else if (popId=="P00043" && svcId=="FRM_ITEM"){	//품목 조회
        			oArg.arg_type = "BA";
        			oArg.arg_paramCols = "MASTERDATACLASSID";
        			oArg.arg_paramValues = "Product";
        			oArg.arg_rtnCols = "ITEMID|ITEMNAME|ITEMVERSION";
        			oArg.arg_searchStr = "SEARCH_KEY="+this.nfn_nvl(this.frmDiv.edt_item.value, "");
        		} else if (popId=="P00062"){	//담당자 조회
        			oArg.arg_type = "BA";
        			oArg.arg_rtnCols = "USERID|USERNAME";
        			oArg.arg_paramCols = "USERGROUPID";
        			if(svcId=="SCH_SPEC_OWNER" || svcId=="FRM_SPEC_OWNER"){ //사양담당자
        				oArg.arg_paramValues = "SPECOWNER";
        			} else if(svcId=="SCH_CAM_OWNER" || svcId=="FRM_CAM_OWNER"){ //CAM담당자
        				oArg.arg_paramValues = "CAMOWNER";
        			} else if(svcId=="FRM_SALES_OWNER"){ //영업담당자
        				oArg.arg_searchStr = "SEARCH_KEY="+this.nfn_nvl(this.frmDiv.edt_salesOwner.value, "");
        				oArg.arg_paramValues = "SALESOWNER";
        			}

        			if(svcId=="SCH_SPEC_OWNER" ){ //사양담당자
        				oArg.arg_type = "CA";
        				oArg.arg_searchStr = "SEARCH_KEY=" + this.nfn_nvl(this.tab_search.Tabpage1.form.edt_specOwner.value,"");
        			}
        			if(svcId=="SCH_CAM_OWNER" ){ //CAM담당자
        				oArg.arg_type = "CA";
        				oArg.arg_searchStr = "SEARCH_KEY=" + this.nfn_nvl(this.tab_search.Tabpage1.form.edt_camOwner.value,"");
        			}
        			if(svcId=="FRM_SPEC_OWNER" ){ //사양담당자
        				oArg.arg_searchStr = "SEARCH_KEY=" + this.nfn_nvl(this.frmDiv.edt_specOwner.value,"");
        			}
        			if(svcId=="FRM_CAM_OWNER" ){ //CAM담당자
        				oArg.arg_searchStr = "SEARCH_KEY=" + this.nfn_nvl(this.frmDiv.edt_camOwner.value,"");
        			}

        		}
        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        	}
        }


        /*
         * 초기화 함수
         */
        this.fn_newData = function()
        {
        	var dsObj = this.ds_basGovernanceNew;
        	if(dsObj == null) return;

        	//수정중인 데이터가 존재하면 확인
        	if (this.gfn_dsIsUpdated(dsObj)){
        		var bOK = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        		if(!bOK)return;
        	}

        	dsObj.clearData();
        	this.g_new = true;
        	var row = dsObj.insertRow(dsObj.rowposition+1);
        	this.ds_basGovernanceNew.setColumn(row, "REQUESTDATE", this.ds_periodType.getColumn(0,"THISDAY_S"));
        	this.ds_basGovernanceNew.setColumn(row, "GOVERNANCETYPE", 	"NewRequest");
        	this.ds_basGovernanceNew.setColumn(row, "STATUS", 			"Request");
        	this.ds_basGovernanceNew.setColumn(row, "VALIDSTATE", 		"Valid");
        	this.ds_basGovernanceNew.setColumn(row, "OVERSEASTRANS", 	"01");
        	this.fn_getJobInputType("01");
        	this.ds_basGovernanceNew.setColumn(row, "HOLDSTATE", 		"N");
        }

        /*
         * 승인함수
         */
        this.fn_approval = function()
        {
        	var component 		= this.frmDiv;
        	var dsObj			= this.ds_basGovernanceNew;
        	var governanceNo 	= dsObj.getColumn(0, "GOVERNANCENO");
        	var itemId 			= dsObj.getColumn(0, "PRODUCTDEFID");
        	var itemVersion 	= dsObj.getColumn(0, "PRODUCTDEFVERSION");
        	var specOwnerId 	= dsObj.getColumn(0, "SPECOWNERID");
        	var specWorkType 	= dsObj.getColumn(0, "SPECWORKTYPE");
        	var camState		= dsObj.getColumn(0, "CAMWORKSTATE");
        	var loginId			= this.gf_getUserId();

        	if(this.nfn_isNull(governanceNo)) {
        		this.gfn_Message("FIRSTSETMODELNO", null, "warning", "ok");
        		return;
        	}

        	if(this.nfn_isNull(itemId) || this.nfn_isNull(itemVersion)) {
        		this.gfn_Message("FIRSTSETITEMMASTER", null, "warning", "ok");
        		return;
        	}

        	if(this.nfn_isNull(specOwnerId) ) {
        		this.gfn_Message("SETSPECOWNER", null, "warning", "ok");
        		return;
        	}

        	if(specWorkType=="Working" || specWorkType=="Approved" ) {
        		this.gfn_Message("AlreadyCARReceiptCompleted", null, "warning", "ok");
        		return;
        	}

        	if(specWorkType=="Input") {
        		this.gfn_Message("ALREADYINPUT", null, "warning", "ok");
        		return;
        	}

        	if(this.nfn_isNull(camState)) {
        		this.gfn_Message("REQUIREDCAMREQUEST", null, "warning", "ok");
        		return;
        	}

        	//사양담당자가 로그인사용자와 같아야 승인가능
        	if(loginId != specOwnerId){
        		this.gfn_Message("CANNOTSPECOWNERLOGINID", null, "warning", "ok");
        		return;
        	}

        	this.fn_openPop("POP_APPROVAL",""); //결재상신
        }

        /**************************************************************************
         * 80. 팝업
        ***************************************************************************/
        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_CUSTOMER")
        	{
        		var objKey = "";
        		var objId = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			objKey += ","+ colArray[1];
        			objId  += ","+ colArray[0];
        		}

        		this.searchDiv.edt_customer.set_value(objKey.substr(1));
        		this.searchDiv.edt_customer_id.set_value(objId.substr(1));
        	}
        	if(sPopupId == "SCH_ITEM")
        	{
        		var objKey = "";
        		var objId = "";
        		var objNm = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			objKey   += ","+ colArray[0]+"|"+colArray[2];
        			objNm += ","+ colArray[1];
        			objId += ","+ colArray[0];
        		}

        		this.searchDiv.edt_item.set_value(objKey.substr(1));
        		this.searchDiv.edt_item_nm.set_value(objNm.substr(1));
        		this.searchDiv.edt_item_id.set_value(objKey.substr(1));
        	}
        	if(sPopupId == "SCH_SPEC_OWNER")
        	{
        		var objKey = "";
        		var objId = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			objKey += ","+ colArray[1];
        			objId  += ","+ colArray[0];
        		}

        		this.searchDiv.edt_specOwner.set_value(objKey.substr(1));
        		this.searchDiv.edt_specOwner_id.set_value(objId.substr(1));
        	}
        	if(sPopupId == "SCH_CAM_OWNER")
        	{
        		var objKey = "";
        		var objId = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			objKey += ","+ colArray[1];
        			objId  += ","+ colArray[0];
        		}

        		this.searchDiv.edt_camOwner.set_value(objKey.substr(1));
        		this.searchDiv.edt_camOwner_id.set_value(objId.substr(1));
        	}
        	if(sPopupId == "FRM_CUSTOMER")
        	{
        		this.frmDiv.edt_customer.set_value(rtn[1]);
        		this.frmDiv.edt_customer_id.set_value(rtn[0]);
        	}
        	if(sPopupId == "FRM_ITEM")
        	{
        		this.frmDiv.edt_item.set_value(rtn[0]);
        		this.frmDiv.edt_item_nm.set_value(rtn[1]);
        		this.frmDiv.edt_item_cd.set_value(rtn[2]);
        		this.fn_getItemDetailData(rtn[0], rtn[2]);
        	}
        	if(sPopupId == "FRM_SPEC_OWNER")
        	{
        		this.frmDiv.edt_specOwner.set_value(rtn[1]);
        		this.frmDiv.edt_specOwner_id.set_value(rtn[0]);
        	}
        	if(sPopupId == "FRM_CAM_OWNER")
        	{
        		this.frmDiv.edt_camOwner.set_value(rtn[1]);
        		this.frmDiv.edt_camOwner_id.set_value(rtn[0]);
        	}
        	if(sPopupId == "FRM_SALES_OWNER")
        	{
        		this.frmDiv.edt_salesOwner.set_value(rtn[1]);
        		this.frmDiv.edt_salesOwner_id.set_value(rtn[0]);
        	}
        }

        this.fn_getItemDetailData = function(itemId, itemVersion)
        {
        	this.ds_itemMasterDetail.clearData();
        	var sSvcID 			= "selectItemDetailData";
        	var sController 	= "/bas01800/selectBasItemMasterList.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_itemMasterDetail=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("DETAIL_ITEMID", 		itemId);
        		sArgs 			+= this.gfn_setParam("DETAIL_ITEMVERSION", 	itemVersion);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, false);
        }
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search_Tabpage1_cboPeriodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate(e.postvalue);
        	}
        };
        this.tab_search_Tabpage1_btn_search00_01_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_CUSTOMER","P00042"); //고객사 조회
        };

        this.tab_search_Tabpage1_btn_search00_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_ITEM","P00043"); //품목 조회
        };
        this.div_work_Div01_btnCustomer_onclick = function(obj,e)
        {
        	this.fn_openPop("FRM_CUSTOMER","P00042"); //고객사 조회
        };

        this.div_work_Div01_btnItem_onclick = function(obj,e)
        {
        	this.fn_openPop("FRM_ITEM","P00043"); //품목 조회
        };

        this.div_header_btnNew_onclick = function(obj,e)
        {
        	this.fn_newData();
        };

        this.div_header_btnConfirm_onclick = function(obj,e)
        {
        	this.fn_approval();
        };

        this.tab_search_Tabpage1_btnSpecOwner_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_SPEC_OWNER","P00062");
        };

        this.tab_search_Tabpage1_btnCamOwner_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_CAM_OWNER","P00062");
        };

        this.div_work_Div01_btnSpecOwner_onclick = function(obj,e)
        {
        	this.fn_openPop("FRM_SPEC_OWNER","P00062");
        };

        this.div_work_Div01_btnCamOwner_onclick = function(obj,e)
        {
        	this.fn_openPop("FRM_CAM_OWNER","P00062");
        };

        this.div_work_Div01_btnSalesOwner_onclick = function(obj,e)
        {
        	this.fn_openPop("FRM_SALES_OWNER","P00062");
        };

        this.ds_basGovernance_canrowposchange = function(obj,e)
        {
        	if(e.newrow<0) return;
        	var bOk = true;
        	if (this.gfn_dsIsUpdated(this.ds_basGovernanceNew)) {
        		bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        	}
        	return bOk;
        };

        this.ds_basGovernance_onrowposchanged = function(obj,e)
        {
        	if(e.newrow<0) return;
        	var governanceNo = obj.getColumn(e.newrow, "GOVERNANCENO");
        	//this.fn_selectDetail(e.newrow);
        };


        this.tab_search_Tabpage1_edtItem_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_search00_onclick();
        	}
        };

        this.fn_getJobInputType = function (overseaTrans)
        {
        	this.ds_jobInputType.clearData();
        	var sSvcID 			= "selectJobInputTypeList";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_jobInputType=output";
        	var sArgs 		  	= "";
        	sArgs 			+= this.gfn_setParam("SQL_ID", "selectJobInputTypeList");
        	sArgs 			+= this.gfn_setParam("OVERSEATRANS", overseaTrans);
        	sArgs 			+= this.gfn_setParam("CMB_TYPE", "null");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);
        }
        this.div_work_Div01_cboOverSeasTrans_onitemchanged = function(obj,e)
        {
        	this.g_event = true;
        	this.fn_getJobInputType(e.postvalue);
        };

        this.tab_search_Tabpage1_edtCustomer_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_search00_01_onclick();
        	}
        };

        this.tab_search_Tabpage1_edtSpecOwner_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btnSpecOwner_onclick();
        	}

        };

        this.tab_search_Tabpage1_edtCamOwner_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btnCamOwner_onclick();
        	}
        };

        this.div_work_Div01_edtCustomer_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_work_Div01_btnCustomer_onclick();
        	}
        };

        this.div_work_Div01_edtItem_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_work_Div01_btnItem_onclick();
        	}
        };

        this.div_work_Div01_edtSpecOwner_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_work_Div01_btnSpecOwner_onclick();
        	}
        };

        this.div_work_Div01_edtCamOwner_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_work_Div01_btnCamOwner_onclick();
        	}
        };

        this.div_work_Div01_edtSalesOwner_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.div_work_Div01_btnSalesOwner_onclick();
        	}
        };
        this.div_work_grd_basGovernance_oncellclick = function(obj,e)
        {
        	this.g_event = false;
        	this.g_new = false;
        	this.fn_selectDetail(e.row);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear2.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search_onclick,this);
            this.tab_search.Tabpage1.form.cboPeriodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cboPeriodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.calStartDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.calEndDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.edt_item.addEventHandler("onkeydown",this.tab_search_Tabpage1_edtItem_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_item.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search00_onclick,this);
            this.tab_search.Tabpage1.form.edt_specOwner.addEventHandler("onkeydown",this.tab_search_Tabpage1_edtSpecOwner_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_specOwner.addEventHandler("onclick",this.tab_search_Tabpage1_btnSpecOwner_onclick,this);
            this.tab_search.Tabpage1.form.edt_camOwner.addEventHandler("onkeydown",this.tab_search_Tabpage1_edtCamOwner_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_camOwner.addEventHandler("onclick",this.tab_search_Tabpage1_btnCamOwner_onclick,this);
            this.tab_search.Tabpage1.form.btn_customer.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search00_01_onclick,this);
            this.tab_search.Tabpage1.form.edt_customer.addEventHandler("onkeydown",this.tab_search_Tabpage1_edtCustomer_onkeydown,this);
            this.div_work.form.grd_basGovernance.addEventHandler("oncellclick",this.div_work_grd_basGovernance_oncellclick,this);
            this.div_work.form.btn_delRow2.addEventHandler("onclick",this.fn_delete,this);
            this.div_work.form.Div01.form.btn_camOwner.addEventHandler("onclick",this.div_work_Div01_btnCamOwner_onclick,this);
            this.div_work.form.Div01.form.edt_camOwner.addEventHandler("onkeydown",this.div_work_Div01_edtCamOwner_onkeydown,this);
            this.div_work.form.Div01.form.btn_specOwner.addEventHandler("onclick",this.div_work_Div01_btnSpecOwner_onclick,this);
            this.div_work.form.Div01.form.edt_specOwner.addEventHandler("onkeydown",this.div_work_Div01_edtSpecOwner_onkeydown,this);
            this.div_work.form.Div01.form.btn_customer.addEventHandler("onclick",this.div_work_Div01_btnCustomer_onclick,this);
            this.div_work.form.Div01.form.edt_customer.addEventHandler("onkeydown",this.div_work_Div01_edtCustomer_onkeydown,this);
            this.div_work.form.Div01.form.btn_salesOwner.addEventHandler("onclick",this.div_work_Div01_btnSalesOwner_onclick,this);
            this.div_work.form.Div01.form.edt_salesOwner.addEventHandler("onkeydown",this.div_work_Div01_edtSalesOwner_onkeydown,this);
            this.div_work.form.Div01.form.btn_item.addEventHandler("onclick",this.div_work_Div01_btnItem_onclick,this);
            this.div_work.form.Div01.form.edt_item.addEventHandler("onkeydown",this.div_work_Div01_edtItem_onkeydown,this);
            this.div_work.form.Div01.form.cboOverSeasTrans.addEventHandler("onitemchanged",this.div_work_Div01_cboOverSeasTrans_onitemchanged,this);
            this.div_work.form.Div01.form.cboInputType.addEventHandler("ondropdown",this.div_work_Div01_cboInputType_ondropdown,this);
            this.div_work.form.Div01.form.cboInputType.addEventHandler("oncloseup",this.div_work_Div01_cboInputType_oncloseup,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_saveNew.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btnNew.addEventHandler("onclick",this.div_header_btnNew_onclick,this);
            this.div_header.form.btnApproval.addEventHandler("onclick",this.div_header_btnConfirm_onclick,this);
            this.ds_basGovernance.addEventHandler("canrowposchange",this.ds_basGovernance_canrowposchange,this);
            this.ds_basGovernance.addEventHandler("onrowposchanged",this.ds_basGovernance_onrowposchanged,this);
        };
        this.loadIncludeScript("BAS01700M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
