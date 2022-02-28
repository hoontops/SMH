(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS01800M");
            this.set_titletext("마스터품목(사양)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_basItemMaster", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MASTERDATACLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMUOM\" type=\"STRING\" size=\"256\"/><Column id=\"NEWREQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"ENGINEERINGCHANGE\" type=\"STRING\" size=\"256\"/><Column id=\"IMPLEMENTATIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"COSTCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"SALEORDERCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"INVENTORYCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"MAKEBUYTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANNER\" type=\"STRING\" size=\"256\"/><Column id=\"UNITOFPURCHASING\" type=\"STRING\" size=\"256\"/><Column id=\"UNITOFSTOCK\" type=\"STRING\" size=\"256\"/><Column id=\"SPEC\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"AGING\" type=\"STRING\" size=\"256\"/><Column id=\"AGINGDAY\" type=\"STRING\" size=\"256\"/><Column id=\"CYCLECOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ENDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTCONTROL\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"LEADTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TACTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"NM_PLANNER\" type=\"STRING\" size=\"256\"/><Column id=\"NM_CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"NM_SPECIFICATIO\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTRATING\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FACTORYID\" type=\"STRING\" size=\"256\"/><Column id=\"IDCLASSIDRULE\" type=\"STRING\" size=\"256\"/><Column id=\"ISINPUT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"P_ITEMSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONDITIONITEM\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONDITIONVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"P_MODELCODE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_LAYER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uom", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_masterDataClass", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_checkValidatioin", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTCODEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTCODEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_checkAfter", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basItemMasterDel", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_masterDataClassSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basItemMasterExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MASTERDATACLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SALEORDERCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTRATING\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMUOM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Button("btn_clear2","171","300","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","300","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"0","15","300","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","0","15","300",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"280","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","306","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staSearchPeriod","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("A68BD7B5C03148F5A880FAE96A468FC0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboPeriodType","15","35","88","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("calStartDt","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_innerdataset("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("calEndDt","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_innerdataset("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_01",null,"55","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductDivision","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDIVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02",null,"105","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboProductDivision","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staItemStatus","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("품목상태");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("PRODUCTDEFSTATUS");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboItemStatus","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_codecolumn("C,ItemStatus,,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00",null,"130","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03",null,"0","45","10","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00",null,"30","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00",null,"55","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00",null,"105","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00",null,"130","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductCode","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00",null,"155","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductName","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00",null,"180","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_item",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01",null,"155","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item_nm","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_00",null,"180","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCustomer","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_text("고객");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("F993645129314EB2A2423955D6AB814C");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_customer",null,"60","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_01",null,"80","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customer","108","60",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("35");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_01_00",null,"80","45","5","229",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("36");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staModelCode","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("37");
            obj.set_text("모델코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MODELCODE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edtModelCode","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("38");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00",null,"205","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("39");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_00_00",null,"205","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("40");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staLayer","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("41");
            obj.set_text("층수");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LAYER");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboLayer","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("42");
            obj.set_codecolumn("C,Layer,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_01",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("43");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00",null,"230","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("44");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_00_00_00",null,"230","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("45");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staSearchType","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("46");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ConditionType");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboSearchType","108","235","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("47");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_02",null,"255","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("48");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edtSearchValue","108","260","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("49");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customer_id","74","461","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("50");
            obj.set_value("고객사ID(HIDDEN)");
            obj.set_visible("false");
            obj.set_text("고객사ID(HIDDEN)");
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
            obj.set_text("Div00");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","112","-63","101","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_basMasterdataclass","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_basItemMaster");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj.set_autoupdatetype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"166\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"품목코드\"/><Cell col=\"2\" text=\"Rev.\"/><Cell col=\"3\" text=\"품목명\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"품목유형코드\" cssclass=\"cell_point\"/><Cell col=\"5\" text=\"자재품목구분\" cssclass=\"cell_point\"/><Cell col=\"6\" text=\"층수\" cssclass=\"cell_point\"/><Cell col=\"7\" text=\"제품 타입\"/><Cell col=\"8\" text=\"작업구분\"/><Cell col=\"9\" text=\"생산구분\" cssclass=\"cell_point\"/><Cell col=\"10\" text=\"제품등급\"/><Cell col=\"11\" text=\"판매범주\"/><Cell col=\"12\" text=\"고객ID\"/><Cell col=\"13\" text=\"고객명\"/><Cell col=\"14\" text=\"품목단위\" cssclass=\"cell_point\"/><Cell col=\"15\" text=\"품목상태\"/><Cell col=\"16\" text=\"생성일\"/><Cell col=\"17\" text=\"생성자\"/><Cell col=\"18\" text=\"수정일\"/><Cell col=\"19\" text=\"수정자\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"bind:ITEMID\" edittype=\"expr:comp.parent.parent.parent.ds_basItemMaster.getRowType(currow) ==2 ? &apos;normal&apos;:&apos;none&apos;\" textAlign=\"left\" displaytype=\"expr:comp.parent.parent.parent.ds_basItemMaster.getRowType(currow) ==2 ? &apos;editcontrol&apos;:&apos;normal&apos;\"/><Cell col=\"2\" text=\"bind:ITEMVERSION\" edittype=\"expr:comp.parent.parent.parent.ds_basItemMaster.getRowType(currow) ==2 ? &apos;normal&apos;:&apos;none&apos;\" textAlign=\"left\" displaytype=\"expr:comp.parent.parent.parent.ds_basItemMaster.getRowType(currow) ==2 ? &apos;editcontrol&apos;:&apos;normal&apos;\"/><Cell col=\"3\" text=\"bind:ITEMNAME\" edittype=\"normal\" textAlign=\"left\" displaytype=\"text\" cssclass=\"point\"/><Cell col=\"4\" text=\"bind:MASTERDATACLASSID\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_masterDataClass\" combocodecol=\"CODE\" combodatacol=\"NAME\" cssclass=\"point\"/><Cell col=\"5\" text=\"bind:CONSUMABLETYPE\" edittype=\"combo\" displaytype=\"combotext\" combocodecol=\"C,ConsumableType,null,Y,Y\" cssclass=\"point\"/><Cell col=\"6\" text=\"bind:LAYER\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,Layer,null,Y,Y\" cssclass=\"expr:MASTERDATACLASSID==&quot;SubAssembly&quot; ? &quot;&quot;:&quot;point&quot;\"/><Cell col=\"7\" text=\"bind:PRODUCTTYPE\" edittype=\"combo\" displaytype=\"combotext\" combocodecol=\"C,ProductType,null,Y,Y\"/><Cell col=\"8\" text=\"bind:JOBTYPE\" displaytype=\"combotext\" edittype=\"none\" combocodecol=\"C,JobType,null,Y,N\"/><Cell col=\"9\" text=\"bind:PRODUCTIONTYPE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ProductionType,null,Y,Y\" cssclass=\"point\"/><Cell col=\"10\" text=\"bind:PRODUCTRATING\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ProductLevel,null,Y,Y\"/><Cell col=\"11\" text=\"bind:SALEORDERCATEGORY\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\" displaytype=\"normal\"/><Cell col=\"12\" text=\"bind:CUSTOMERID\" textAlign=\"right\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"hide\" expandsize=\"24\"/><Cell col=\"13\" text=\"bind:CUSTOMERNAME\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:ITEMUOM\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_uom\" combocodecol=\"CODE\" combodatacol=\"NAME\" comboautoselect=\"true\" combotype=\"caseisearch\" cssclass=\"point\"/><Cell col=\"15\" text=\"bind:ITEMSTATUS\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ItemStatus,null,Y,Y\"/><Cell col=\"16\" text=\"bind:CREATEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"17\" text=\"bind:CREATOR\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:MODIFIEDTIME\" displaytype=\"text\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"19\" text=\"bind:MODIFIER\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_basItemMaster","0","0",null,"34","892",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"6","29","24","116",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow",null,"6","29","24","87",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_copyRow",null,"6","29","24","58",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basMasterdataclass",null,"6","29","24","29",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_ItemxlUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_basMasterdataclassExcel","70","110",null,null,"517","405",null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_binddataset("ds_basItemMasterExcel");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj.set_autoupdatetype("none");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ITEMID\"/><Cell col=\"1\" text=\"ITEMVERSION\"/><Cell col=\"2\" text=\"ITEMNAME\"/><Cell col=\"3\" text=\"MASTERDATACLASSID\"/><Cell col=\"4\" text=\"CONSUMABLETYPE\"/><Cell col=\"5\" text=\"LAYER\"/><Cell col=\"6\" text=\"PRODUCTTYPE\"/><Cell col=\"7\" text=\"JOBTYPE\"/><Cell col=\"8\" text=\"PRODUCTIONTYPE\"/><Cell col=\"9\" text=\"SALEORDERCATEGORY\"/><Cell col=\"10\" text=\"CUSTOMERID\"/><Cell col=\"11\" text=\"CUSTOMERNAME\"/><Cell col=\"12\" text=\"PRODUCTRATING\"/><Cell col=\"13\" text=\"ITEMUOM\"/><Cell col=\"14\" text=\"VALIDSTATE\"/></Band><Band id=\"body\"><Cell text=\"bind:ITEMID\"/><Cell col=\"1\" text=\"bind:ITEMVERSION\"/><Cell col=\"2\" text=\"bind:ITEMNAME\"/><Cell col=\"3\" text=\"bind:MASTERDATACLASSID\"/><Cell col=\"4\" text=\"bind:CONSUMABLETYPE\"/><Cell col=\"5\" text=\"bind:LAYER\"/><Cell col=\"6\" text=\"bind:PRODUCTTYPE\"/><Cell col=\"7\" text=\"bind:JOBTYPE\"/><Cell col=\"8\" text=\"bind:PRODUCTIONTYPE\"/><Cell col=\"9\" text=\"bind:SALEORDERCATEGORY\"/><Cell col=\"10\" text=\"bind:CUSTOMERID\"/><Cell col=\"11\" text=\"bind:CUSTOMERNAME\"/><Cell col=\"12\" text=\"bind:PRODUCTRATING\"/><Cell col=\"13\" text=\"bind:ITEMUOM\"/><Cell col=\"14\" text=\"bind:VALIDSTATE\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","3",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("10");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","100","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("마스터품목(사양)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:10","16","24","24",null,null,null,null,null,null,this.div_header.form);
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

            obj = new Button("btn_genarateSemiProduct",null,"16","98","24","btn_save:25",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_text("반제품채번");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("Toolbar_SubProductItemCode");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_attach",null,"16","71","24","btn_genarateSemiProduct:0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("첨부파일");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("FILEATTACH");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_copyProduct",null,"16","58","24","btn_attach:0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_text("복사");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("COPY");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.Tabpage1.form.calStartDt","value","ds_search","P_PERIOD_PERIODFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.Tabpage1.form.calEndDt","value","ds_search","P_PERIOD_PERIODTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.Tabpage1.form.edt_customer_id","value","ds_search","CUSTOMER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.Tabpage1.form.edt_item","value","ds_search","P_PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.Tabpage1.form.cboItemStatus","value","ds_search","P_ITEMSTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.Tabpage1.form.edtModelCode","value","ds_search","P_MODELCODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.Tabpage1.form.cboLayer","value","ds_search","P_LAYER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.Tabpage1.form.cboProductDivision","value","ds_search","P_PRODUCTDEFTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_search.Tabpage1.form.cboSearchType","value","ds_search","P_CONDITIONITEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab_search.Tabpage1.form.edtSearchValue","value","ds_search","P_CONDITIONVALUE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS01800M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS01800M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 마스터품목(사양) 관리
         * 파일명 		: BAS01800M.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.02.08
         *
         * 설  명		: 기준관리 - 마스터품목(사양) 관리 화면
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.08	최성민   	최초작성
         * 2021.04.26   최성민		작업구분,고객 수정 못하도록 처리 (결함리스트 270번)
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
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.basfn_getPeriodData("ds_periodType");
        	this.basfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cboSearchType // Object
        								, "selectCustomCodeList,ALL,Y,A" // OPTION
        								, this.gfn_setParam("ADD_PARAM", "SALEORDERCATEGORY|INVENTORYCATEGORY|CREATOR"));	  // 추가 파라미터

        	this.basfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cboProductDivision // Object
        								, "selectMasterDataClassList,ALL,Y,A" // OPTION
        								, this.gfn_setParam("ITEMOWNER", "Specifications"));
        	//그리드용 콤보 조회용 함수 호출
        	this.fn_gridComboInit();

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
        	var bOk = true;
        	if (this.gfn_dsIsUpdated(this.ds_basItemMaster)) {
        		bOk = this.gfn_Message("WRITTENBEDELETE", null, "conf", "yesno");
        		if(!bOk){return}
        	}


        	this.ds_basItemMaster.clearData();
        	this.ds_basItemMasterDel.clearData();
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());

        	var sSvcID 			= "selectBasItemMasterList";
        	var sController 	= "/bas01800/selectBasItemMasterList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_basItemMaster=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_basItemMaster) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}


        	var rtn = this.fn_GridKeyCheck(this.div_work.form.grd_basMasterdataclass);
        	if (rtn == false) return;

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveBasItemMaster";
        	var sController 	= "/bas01800/saveBasItemMaster.do";
        	var sInDatasets 	= "INPUT=ds_basItemMaster:U INPUT_D=ds_basItemMasterDel:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        	var dsObj = this.ds_basItemMaster;
        	if (dsObj.getCaseCount("CHK=='1'")==0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}

        	for(var j=dsObj.rowcount+1; j>=0; j--){
        		if(dsObj.getColumn(j,"CHK")=="1"){
        			if (this.ds_basItemMaster.getRowType(j) != 2){
        				var idx = this.ds_basItemMasterDel.addRow();
        				this.ds_basItemMasterDel.setColumn(idx, "ITEMID", dsObj.getColumn(j, "ITEMID"));
        				this.ds_basItemMasterDel.setColumn(idx, "ITEMVERSION", dsObj.getColumn(j, "ITEMVERSION"));
        				this.ds_basItemMasterDel.setColumn(idx, "ENTERPRISEID", dsObj.getColumn(j, "ENTERPRISEID"));
        				this.ds_basItemMasterDel.setRowType(idx, Dataset.ROWTYPE_DELETE);
        			}
        			dsObj.deleteRow(j);
        		}
        	}
        };

        /*
         * 기능 : 추가
         */
        this.fn_add = function(obj,e)
        {
        	var dsObj = this.ds_basItemMaster;
        	if(dsObj == null) return;
        	var row = dsObj.insertRow(dsObj.rowposition+1);

        	/* KEY컬럼 기본세팅 */
        	dsObj.setColumn(row,"ENTERPRISEID",this.gf_getEnterpriseId());//ENTERPRISEID
        	dsObj.setColumn(row,"VALIDSTATE","Valid");			//유효여부
        	dsObj.setColumn(row,"ITEMSTATUS","Active");			//품목상태
        	dsObj.setColumn(row,"PRODUCTRATING","B");			//제품등급
        	dsObj.setColumn(row,"PRODUCTIONTYPE","Sample");		//생산구분
        };

        /*
         * 기능 : 복사
         */
        this.fn_copy = function(obj,e)
        {
        	var dsObj = this.ds_basItemMaster;
        	if(dsObj == null) return;
        	var row = dsObj.insertRow(dsObj.rowposition+1);
        	dsObj.copyRow(row, dsObj, dsObj.rowposition-1);

        	/* KEY,WHO컬럼 관련 복사제외 */
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
        		if (trId == "saveBasItemMaster")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        			} else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        			}
        		} else {
        			this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		}
        	}
        	else
        	{
        		if (trId == "saveBasItemMaster")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search();
        		} else if (trId == "selectBasItemMasterList") {
        		} else if (trId == "checkSemiProduct") {
        			if(this.ds_checkAfter.rowcount > 0){
        				this.gfn_Message("NoCreatedSubAssembly", null, "warning", "ok");
        			} else {
        				this.fn_openPop("GEN_SUBPRODUCT","GEN_SUBPRODUCT", "args"); //반제품 채번
        			}
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
        	var dsObj = this.ds_basItemMaster;
        	var dsPosition = dsObj.rowposition;

        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "";

        	if(svcId =="GRD_SALEORDERCATEGORY"){
        		opts = "width=800,height=500";
        		this.gfn_openPopup(popupId,"bas::BAS01800P.xfdl",oArg,opts);
        	} else if(svcId =="GEN_SUBPRODUCT"){
        		opts = "width=800,height=500";
        		if(dsPosition >= 0 ) {
        			oArg.itemId = dsObj.getColumn(dsPosition,"ITEMID");
        			oArg.itemRev = dsObj.getColumn(dsPosition,"ITEMVERSION");
        			oArg.itemNm = dsObj.getColumn(dsPosition,"ITEMNAME");
        		}
        		this.gfn_openPopup(popupId,"bas::BAS01800P2.xfdl",oArg,opts);
        	} else if(svcId =="ITEM_COPY"){
        		opts = "width=800,height=205";
        		if(dsPosition >= 0 ) {
        			oArg.itemId = dsObj.getColumn(dsPosition,"ITEMID");
        			oArg.itemRev = dsObj.getColumn(dsPosition,"ITEMVERSION");
        			oArg.itemNm = dsObj.getColumn(dsPosition,"ITEMNAME");
        		}
        		this.gfn_openPopup(popupId,"bas::BAS01800P1.xfdl",oArg,opts);
        	} else {
        		if(popId=="P00042"){ //고객사 조회
        			oArg.arg_rtnCols = "CUSTOMERID|CUSTOMERNAME";
        			oArg.arg_searchStr = "SEARCH_KEY="+this.nfn_nvl(this.searchDiv.edt_customer.value, "");
        		} else if (popId=="P00043"){	//품목 조회
        			oArg.arg_type = "CA";
        			//oArg.arg_paramCols = "MASTERDATACLASSID";
        			//oArg.arg_paramValues = "Product";
        			oArg.arg_searchStr = "SEARCH_KEY="+this.nfn_nvl(this.searchDiv.edt_item.value, "");
        			oArg.arg_rtnCols = "ITEMID|ITEMNAME|ITEMVERSION";
        		}
        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        	}
        }

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_CUSTOMER")
        	{
        		this.searchDiv.edt_customer.set_value(rtn[1]);
        		this.searchDiv.edt_customer_id.set_value(rtn[0]);
        	}
        	if(sPopupId == "GEN_SUBPRODUCT")
        	{
        		var nRow = this.ds_basItemMaster.rowposition;
        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			var semiProductId = colArray;
        			var addRow = this.ds_basItemMaster.addRow();
        			var itemType = semiProductId.substr(0,1); // 9: 상품, 4:공정반제품, 2:반제품
        			var masterDataClassId = "SubAssembly";	//반제품
        			var itemName = 	"";

        			if(itemType=="9"){
        				masterDataClassId = "Commodity"; //상품
        			}
        			if(itemType=="4"){
        				masterDataClassId = "OperationItem"; //공정반제품
        			}

        			if(itemType=="4" || itemType=="9"){
        				this.ds_basItemMaster.setColumn(addRow, "LOTCONTROL", this.ds_basItemMaster.getColumn(nRow,"LOTCONTROL"));
        				this.ds_basItemMaster.setColumn(addRow, "ITEMSTATUS", this.ds_basItemMaster.getColumn(nRow,"ITEMSTATUS"));
        				this.ds_basItemMaster.setColumn(addRow, "PRODUCTIONTYPE", this.ds_basItemMaster.getColumn(nRow,"PRODUCTIONTYPE"));
        				this.ds_basItemMaster.setColumn(addRow, "ENTERPRISEID", this.ds_basItemMaster.getColumn(nRow,"ENTERPRISEID"));
        				this.ds_basItemMaster.setColumn(addRow, "PLANTID", this.ds_basItemMaster.getColumn(nRow,"PLANTID"));
        				this.ds_basItemMaster.setColumn(addRow, "VALIDSTATE", this.ds_basItemMaster.getColumn(nRow,"VALIDSTATE"));
        				this.ds_basItemMaster.setColumn(addRow, "CONSUMABLETYPE", this.ds_basItemMaster.getColumn(nRow,"CONSUMABLETYPE"));
        				this.ds_basItemMaster.setColumn(addRow, "PRODUCTTYPE", this.ds_basItemMaster.getColumn(nRow,"PRODUCTTYPE"));
        				this.ds_basItemMaster.setColumn(addRow, "LAYER", this.ds_basItemMaster.getColumn(nRow,"LAYER"));
        				this.ds_basItemMaster.setColumn(addRow, "SALEORDERCATEGORY", this.ds_basItemMaster.getColumn(nRow,"SALEORDERCATEGORY"));
        				this.ds_basItemMaster.setColumn(addRow, "JOBTYPE", this.ds_basItemMaster.getColumn(nRow,"JOBTYPE"));
        			} else {
        				this.ds_basItemMaster.setColumn(addRow, "LOTCONTROL", "Y");
        				this.ds_basItemMaster.setColumn(addRow, "ITEMSTATUS", "Active");
        				this.ds_basItemMaster.setColumn(addRow, "PRODUCTIONTYPE", "Production");
        				this.ds_basItemMaster.setColumn(addRow, "ENTERPRISEID", this.gf_getEnterpriseId());
        				this.ds_basItemMaster.setColumn(addRow, "PLANTID", this.gf_getSiteType());
        				this.ds_basItemMaster.setColumn(addRow, "VALIDSTATE", "Valid");
        				this.ds_basItemMaster.setColumn(addRow, "CONSUMABLETYPE", semiProductId.substr(10,2));
        			}

        			//반제품명 채번방식 변경 2021-08-12 임용희 차장 요청
        			var layer1 = semiProductId.substr(12,2);
        			var layer2 = semiProductId.substr(14,2);
        			var opt	   = (layer1!="00" && layer2!="00") ? "/" : "";
        			var clType = semiProductId.substr(10,2);

        			var fRow = this.ds_CConsumableTypenull.findRow("LOOKUP_CODE", clType);
        			var clTypeNm = this.ds_CConsumableTypenull.getColumn(fRow, "MEANING2");
        			var clTypeDesc = this.ds_CConsumableTypenull.getColumn(fRow, "DESCRIPTION");

        			layer1 = layer1=="00" ? "": nexacro.toNumber(layer1);
        			layer2 = layer2=="00" ? "": nexacro.toNumber(layer2);

        			itemName = this.ds_basItemMaster.getColumn(nRow,"ITEMNAME")
        			         + "-(" + layer1 + opt + layer2+"L)"
        					 + this.nfn_nvl(clTypeDesc,clTypeNm)
        					 + "-"+ (i+1);

        			this.ds_basItemMaster.setColumn(addRow, "MASTERDATACLASSID", masterDataClassId);
        			this.ds_basItemMaster.setColumn(addRow, "ITEMID", semiProductId);
        			this.ds_basItemMaster.setColumn(addRow, "RTRSHT", "SHT");
        			this.ds_basItemMaster.setColumn(addRow, "ITEMNAME", itemName);
        			this.ds_basItemMaster.setColumn(addRow, "ITEMVERSION", this.ds_basItemMaster.getColumn(nRow,"ITEMVERSION"));
        			this.ds_basItemMaster.setColumn(addRow, "PRODUCTRATING", this.ds_basItemMaster.getColumn(nRow,"PRODUCTRATING"));
        			this.ds_basItemMaster.setColumn(addRow, "CUSTOMERID", this.ds_basItemMaster.getColumn(nRow,"CUSTOMERID"));
        			this.ds_basItemMaster.setColumn(addRow, "CUSTOMERNAME", this.ds_basItemMaster.getColumn(nRow,"CUSTOMERNAME"));
        			this.ds_basItemMaster.setColumn(addRow, "JOBTYPE", this.ds_basItemMaster.getColumn(nRow,"JOBTYPE"));
        			this.ds_basItemMaster.setColumn(addRow, "PRODUCTIONTYPE", this.ds_basItemMaster.getColumn(nRow,"PRODUCTIONTYPE"));
        			this.ds_basItemMaster.setColumn(addRow, "FACTORYID", this.ds_basItemMaster.getColumn(nRow,"FACTORYID"));
        		}
        	}
        	if(sPopupId == "SCH_ITEM")
        	{
        		var objKey = "";
        		var objId = "";
        		var objNm = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			objKey   += ","+ colArray[0];
        			objNm += ","+ colArray[1];
        			objId += ","+ colArray[0];
        		}

        		this.searchDiv.edt_item.set_value(objKey.substr(1));
        		this.searchDiv.edt_item_nm.set_value(objNm.substr(1));
        	}
        	if(sPopupId =="GRD_SALEORDERCATEGORY"){
        		var nRow = this.ds_basItemMaster.rowposition;
        		this.ds_basItemMaster.setColumn(nRow, "SALEORDERCATEGORY", rtn[0]);
        	}
        	if(sPopupId =="GRD_CUSTOMER"){
        		var nRow = this.ds_basItemMaster.rowposition;
        		this.ds_basItemMaster.setColumn(nRow, "CUSTOMERID", rtn[0]);
        		this.ds_basItemMaster.setColumn(nRow, "CUSTOMERNAME", rtn[1]);
        	}
        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
        	this.searchDiv.cboPeriodType.set_value("CUSTOM"); // 금월
        	this.searchDiv.calStartDt.set_value(this.ds_periodType.getColumn(0,"THISMONTH_Q"));
        	this.searchDiv.calEndDt.set_value(this.ds_periodType.getColumn(0,"THISMONTH_E"));
        	this.searchDiv.edt_item.set_value(null);
        	this.searchDiv.edt_item_nm.set_value(null);
        	this.searchDiv.edtModelCode.set_value(null);
        	this.searchDiv.cboItemStatus.set_value("Active");
        	this.searchDiv.cboProductDivision.set_value("Product");
        	this.searchDiv.cboLayer.set_value(null);
        	this.searchDiv.cboSearchType.set_value(null);
        	this.searchDiv.edtSearchValue.set_value("");
        	this.searchDiv.edt_customer.set_value("");
        	this.searchDiv.edt_customer_id.set_value("");
        }

        /*
         *	그리드 콤보Dataset 조회 함수
         */
        this.fn_gridComboInit = function()
        {
        	//품목단위:UOM
        	var sSvcID 			= "selectUOM";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_uom=output";
        	var sArgs 		  	= "";
        	sArgs 			+= this.gfn_setParam("SQL_ID", "selectUOMList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);

        	//품목유형코드
        	var sSvcID 			= "selectMasterDataClass";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_masterDataClass=output";
        	var sArgs 		  	= "";
        	sArgs 			+= this.gfn_setParam("SQL_ID", "selectMasterDataClassList");
        	sArgs 			+= this.gfn_setParam("ITEMOWNER", "Specifications");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);
        }

        /*
         * 그리드 필수값 검증 (Custom)
         */
        this.fn_GridKeyCheck = function(objGrid)
        {
        	var strColIdList = "";
         	var blnRtn = true;
         	var objData = this.all[objGrid.binddataset];
        	var dsObj = this.ds_basItemMaster;
         	for(var i=0; i < objData.getRowCount(); i++) {
         	  if (objData.getRowType(i) == 2 || objData.getRowType(i) == 4){
        		var productType = objData.getColumn(i, "MASTERDATACLASSID");

        		//반제품인경우, 반제품이 아닌경우 Validation
        		if(productType=="SubAssembly"){
        			strColIdList = "ITEMNAME,ITEMVERSION,MASTERDATACLASSID,CONSUMABLETYPE,PRODUCTIONTYPE,ITEMUOM";
        		} else {
        			strColIdList = "ITEMNAME,ITEMVERSION,MASTERDATACLASSID,CONSUMABLETYPE,PRODUCTTYPE,LAYER,PRODUCTIONTYPE,ITEMUOM";
        		}

        		/*
        		if(productType=="Product"){ //제품일 경우 Validation
        			strColIdList = "ITEMVERSION,MASTERDATACLASSID,CONSUMABLETYPE,LAYER,PRODUCTTYPE";
        		} else { //제품이 아닐경우 Validation
        			strColIdList = "ITEMVERSION,MASTERDATACLASSID,CONSUMABLETYPE";
        		}
        		*/
        		var arrColId = strColIdList.split(",");

        		for(var j=0; j<arrColId.length; j++) {
        			//신규입력일경우 Rev. 3자리 이하는 입력못하게 처리. 임용희 차장 요청(2021.03.03)
        			if(arrColId[j] == "ITEMVERSION"){
        				if (objData.getRowType(i) == 2){
        					var rev = objData.getColumn(i, arrColId[j]);
        					if(!this.gfn_isNull(rev) && rev.length<3){
        						this.gfn_Message("RequiredRevision3Characters",null , "warning","ok");
        						var colId = this.nfn_GetColNum(objGrid, arrColId[j]);
        						objData.set_rowposition(i);
        						objGrid.setFocus();
        						objGrid.setCellPos(colId);
        						objGrid.showEditor(true);
        						blnRtn = false;
        						return false;
        					}
        				}
        			} else {
        				if(this.gfn_isNull(objData.getColumn(i, arrColId[j]))) {
        					var colId = this.nfn_GetColNum(objGrid, arrColId[j]);
        					var title = this.nfn_nvl(this.nfn_getDictionarynameUpper(arrColId[j]),objGrid.getCellProperty("head", colId, "text"))
        					this.gfn_Message("InputSomeThing",title , "warning","ok");//alert(arrTitle[j]+"을(를) 입력 해주세요");
        					objData.set_rowposition(i);
        					objGrid.setFocus();
        					objGrid.setCellPos(colId);
        					objGrid.showEditor(true);
        					blnRtn = false;
        					return false;
        				}
        			}
        		}
        	  }
         	}
         	return blnRtn;
        }

        /*
         * 기능 : 반제품 채번 검증작업
         */
        this.fn_checkSemiProduct = function()
        {
        	var dsObj = this.ds_basItemMaster;
        	var dsPosition = dsObj.rowposition;

        	this.ds_checkValidatioin.clearData();
        	this.ds_checkValidatioin.addRow();
        	this.ds_checkValidatioin.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_checkValidatioin.setColumn(0, "PRODUCTCODEID", dsObj.getColumn(dsPosition, "ITEMID"));
        	this.ds_checkValidatioin.setColumn(0, "PRODUCTCODEVERSION", dsObj.getColumn(dsPosition, "ITEMVERSION"));

        	//품목단위:UOM
        	var sSvcID 			= "checkSemiProduct";
        	var sController 	= "/bas01800/selectCompareSemiProductByProduct.do";
        	var sInDatasets 	= "INPUT=ds_checkValidatioin:U";
        	var sOutDatasets 	= "ds_checkAfter=output";
        	var sArgs 		  	= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBack", true, true);
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
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search_Tabpage1_btn_search00_01_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_CUSTOMER","P00042"); //고객사 조회
        };

        this.tab_search_Tabpage1_btn_search00_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_ITEM","P00043"); //품목 조회
        };

        this.tab_search_Tabpage1_cboPeriodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM")this.fn_setDate(e.postvalue);
        };

        /*
         *	그리드 LOV 조회
         */
        this.div_work_grd_basMasterdataclass_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.cell, "SALEORDERCATEGORY")) {
        		this.fn_openPop("GRD_SALEORDERCATEGORY",null); //판매범주 조회
        	} else if (this.nfn_isEqualCol(obj, e.cell, "CUSTOMERID")) {
        		//this.fn_openPop("GRD_CUSTOMER","P00042"); //고객사 조회
        	}
        };

        /*
         *	제품복사 함수
         */
        this.fn_copyProduct = function(obj,e)
        {
        	var dsObj = this.ds_basItemMaster;
        	var dsPosition = dsObj.rowposition;

        	if(dsPosition >= 0 ) {
        		var isInput = dsObj.getColumn(dsPosition, "ISINPUT");	//투입된 제품은 복사불가
        		if(isInput=="Y"){
        			this.gfn_Message("IsInputValidateCheck", null, "warning", "ok");
        			return;
        		}
        	} else {
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}

        	this.fn_openPop("ITEM_COPY","ITEM_COPY", "args"); //복사
        };

        this.ds_basItemMaster_oncolumnchanged = function(obj,e)
        {
        	var objGrid = this.div_work.form.grd_basMasterdataclass;
        	if (e.newvalue == e.oldvalue)
        	{
        		return;
        	}

        	//Validation 로직
        	//1. MASTERDATACLASSID-SubAssembly (반제품이 아닌경우 층수(Layer) 필수 )
        	if (e.columnid == "MASTERDATACLASSID")
        	{
        		if (e.newvalue == null)
        		{
        			return;
        		}

        		switch (e.newvalue) {
        				case "Product":
        					this.ds_basItemMaster.setColumn(e.row, "CONSUMABLETYPE", "FG");
        					this.fn_changeUom("FG", e.row);
        				break;
        				case "Commodity":
        					this.ds_basItemMaster.setColumn(e.row, "CONSUMABLETYPE", "FG");
        					this.fn_changeUom("FG", e.row);
        				break;
        		}
        	}

        	// 자재품목구분 선택시 품목 단위 자동 세팅 (임용희 차장 요청)
        	if (e.columnid == "CONSUMABLETYPE")
        	{
        		if (e.newvalue == null)
        		{
        			return;
        		}

        		if(e.newvalue != ""){
        			this.fn_changeUom(e.newvalue, e.row);
        		}
        	}

        	// 층수 1L => SINGLE, 2L => DOUBLE 3L 이상 ~ => MULTI 자동 적용 (2021.03.03 임용희 차장 요청)
        	if (e.columnid == "LAYER")
        	{
        		if (e.newvalue == null)
        		{
        			return;
        		}

        		if(e.newvalue != ""){
        			var productType = "";
        			switch (e.newvalue) {
        				case "":
        				case "1L":
        					productType = "SS";
        				break;
        				case "2L":
        					productType = "DS";
        				break;
        				default:
        					productType = "MT";
        				break;
        			}
        			this.ds_basItemMaster.setColumn(e.row, "PRODUCTTYPE", productType);
        		}
        	}
        };

        this.fn_changeUom = function(newValue, row)
        {
        	var uomVal = "";
        	switch (newValue) {
        		case "BA":
        		case "BS":
        		case "PP":
        			uomVal = "PNL";
        			break;
        		case "FG":
        		case "FR":
        		case "GF":
        		case "SB":
        		case "SU":
        			uomVal = "PCS";
        			break;
        		case "CL":
        		case "CT":
        		case "DM":
        		case "EP":
        		case "IF":
        		case "KT":
        		case "MT":
        		case "PE":
        		case "PI":
        		case "PT":
        		case "SH":
        		case "WT":
        		case "NT":
        		case "DT":
        		case "AL":
        			uomVal = "EA";
        			break;
        	}
        	this.ds_basItemMaster.setColumn(row, "ITEMUOM", uomVal);
        }

        /*
         * 그리드에서 콤보값이 바뀌었을때 dataset change Event를 바로 호출해주는 함수
         */
        this.div_work_grd_basMasterdataclass_oncloseup = function(obj,e)
        {
        	this.div_work.form.grd_basMasterdataclass.updateToDataset();
        };

        this.div_header_btn_genarateSemiProduct_onclick = function(obj,e)
        {
        	var dsObj = this.ds_basItemMaster;
        	var dsPosition = dsObj.rowposition;
        	if(dsPosition >= 0 ) {
        		var classId = dsObj.getColumn(dsPosition, "MASTERDATACLASSID");	//제품인 경우만 채번가능
        		var itemId = dsObj.getColumn(dsPosition, "ITEMID");

        		if(classId!="Product"){
        			this.gfn_Message("CheckProductType", null, "warning", "ok");
        			return;
        		}

        		if (dsObj.getRowType(dsPosition) == 2){
        			this.gfn_Message("InValidStdData003", this.nfn_getDictionarynameUpper("ITEM"), "warning", "ok");
        			return;
        		}

        		 // 2021-02-23 임용희 차장 요청, 제품번호가 10자리인것만 자동채번가능
        		if(itemId.length!=10){
        			this.gfn_Message("SEMIPRODUCTLENGTHWRONG", null, "warning", "ok");
        			return;
        		}
        	} else {
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}

        	//반제품 채번검증 함수 호출
        	this.fn_checkSemiProduct();
        };

        this.fn_attach = function(obj,e)
        {
        	var dsObj = this.ds_basItemMaster;
        	var dsPosition = dsObj.rowposition;
        	var srcKey = "";
        	if(dsPosition >= 0 ) {
        		srcKey = dsObj.getColumn(dsPosition, "ENTERPRISEID")
        			   + "|" + dsObj.getColumn(dsPosition, "ITEMID")
        			   + "|" + dsObj.getColumn(dsPosition, "ITEMVERSION")
        			   ;
        	} else {
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}

        	var jobSysCd = "BAS"; 					//업무구분코드 CMD,BAS....
        	var subDir = "itemMaster"; 				//세부업무약어
        	var resouceid = srcKey;					//테이블의 키 값 //RESOURCEID
        	var resourcetype = "BAS_ITEMMASTER"; 	//테이블명
        	var comments = "마스터품목(사양)"; 		//파일설명
        	var fileCnt = null; 					//업로드수
        	var oArg = {arg_jobSysCd:jobSysCd
        				,arg_atchSrcKey:resouceid
        				,arg_tableName:resourcetype
        				,arg_desc:comments
        				,arg_subDir:subDir
        				,arg_fileCnt:fileCnt};
        	this.gfn_openPopup("file_upload","cmd::CMSA01220P.xfdl",oArg,"");
        };

        this.div_work_btn_xlUp_onclick = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_basItemMaster))
        	{
        		var btn = this.gfn_confirm("WRITTENBEDELETE", "information", ""); //"입력한 내용이 있으면 현재 작성중인 내용이 모두 삭제됩니다."
        		if(btn == false) return;
        	}


        	this.ds_basItemMaster.set_enableevent(false);
        	this.Mode = "Excel";
        	this.ds_basItemMasterExcel.clearData();
        	this.gfn_import_excel("ds_basItemMasterExcel", "fn_excel_success", "fn_excel_fail", "B1", "B2");
        };



        /*
         *	엑셀 업로드 실패 시
         */
        this.fn_excel_fail = function ()
        {
        	this.gfn_Message("FAILEXCELIMPORT", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        	this.ds_basItemMaster.set_enableevent(true);
        };

        /*
         *	엑셀 업로드 이후...
         */
        this.fn_excel_success = function ()
        {
        	this.ds_basItemMaster.set_enableevent(false);
        	var dsObj = this.ds_basItemMaster;
        	var dsObjExcel = this.ds_basItemMasterExcel;

        	if(dsObjExcel.rowcount > 0 ){
        		this.fn_makeExcelData();
        	} else {
        		this.gfn_Message("NOTEXISTSEXCELIMPORTDATA", "", "warning", "ok");
        	}
        };

         this.fn_makeExcelData = function()
         {
        	var dsObjExcel 			= this.ds_basItemMasterExcel;
        	var dsObj 				= this.ds_basItemMaster;
        	var ds_layer 			= this.objects["ds_CLayernull"];
        	var ds_consumable 		= this.objects["ds_CConsumableTypenull"];
        	var ds_productLevel 	= this.objects["ds_CProductLevelnull"];
        	var ds_productType 		= this.objects["ds_CProductTypenull"];
        	var ds_masterDataClass 	= this.objects["ds_masterDataClass"];
        	var ds_uom			 	= this.objects["ds_uom"];
        	var ds_jobType 			= this.objects["ds_CJobTypenull"];
        	var ds_productionType	= this.objects["ds_CProductionTypenull"];
        	var ds_itemStatus		= this.objects["ds_CItemStatusnull"];

         	for(var i=0; i<dsObjExcel.rowcount; i++){
        		var addRow = dsObj.addRow();
        		dsObj.copyRow(addRow,dsObjExcel,i);
        		dsObj.setColumn(addRow, "MASTERDATACLASSID",this.fn_findDsValue(ds_masterDataClass, dsObjExcel.getColumn(i, "MASTERDATACLASSID")));
        		dsObj.setColumn(addRow, "CONSUMABLETYPE",  	this.fn_findDsValue(ds_consumable, 		dsObjExcel.getColumn(i, "CONSUMABLETYPE")));
        		dsObj.setColumn(addRow, "PRODUCTRATING",  	this.fn_findDsValue(ds_productLevel, 	dsObjExcel.getColumn(i, "PRODUCTRATING")));
        		dsObj.setColumn(addRow, "PRODUCTTYPE",  	this.fn_findDsValue(ds_productType, 	dsObjExcel.getColumn(i, "PRODUCTTYPE")));
        		dsObj.setColumn(addRow, "LAYER",  			this.fn_findDsValue(ds_layer, 			dsObjExcel.getColumn(i, "LAYER")));
        		dsObj.setColumn(addRow, "JOBTYPE",  		this.fn_findDsValue(ds_jobType, 		dsObjExcel.getColumn(i, "JOBTYPE")));
        		dsObj.setColumn(addRow, "PRODUCTIONTYPE",  	this.fn_findDsValue(ds_productionType, 	dsObjExcel.getColumn(i, "PRODUCTIONTYPE")));
        		dsObj.setColumn(addRow, "ITEMUOM",  		this.fn_findDsValue(ds_uom, 			dsObjExcel.getColumn(i, "ITEMUOM")));
        		dsObj.setColumn(addRow, "ITEMSTATUS",  		this.fn_findDsValue(ds_itemStatus, 		dsObjExcel.getColumn(i, "ITEMSTATUS")));
        		dsObj.setColumn(addRow, "ENTERPRISEID",  	this.gf_getEnterpriseId());
        		dsObj.setColumn(addRow, "PLANTID",  		this.gf_getSiteType());
        		dsObj.setColumn(addRow,	"VALIDSTATE",		"Valid");			//유효여부
        	}
        	this.ds_basItemMaster.set_enableevent(true);
         }

         this.fn_findDsValue = function (obj, findKey)
         {
        	var fRow = obj.findRow("NAME", findKey)
        	fRow = (fRow== -1 ? obj.findRow("MEANING2", findKey) : fRow);
        	var value = this.nfn_nvl(obj.getColumn(fRow, "CODE"), obj.getColumn(fRow, "LOOKUP_CODE"));
        	return this.nfn_nvl(value, findKey);
         }
        this.tab_search_Tabpage1_edtItem_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_search00_onclick();
        	}
        };

        this.tab_search_Tabpage1_edtCustomer_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_search00_01_onclick();
        	}
        };

        this.tab_search_Tabpage1_edtModelCode_onkeydown = function(obj,e)
        {
        	obj.updateToDataset();
        };

        this.div_header_btn_reset_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear2.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.cboPeriodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cboPeriodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.calStartDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.calEndDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.edt_item.addEventHandler("onkeydown",this.tab_search_Tabpage1_edtItem_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_item.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search00_onclick,this);
            this.tab_search.Tabpage1.form.btn_customer.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search00_01_onclick,this);
            this.tab_search.Tabpage1.form.edt_customer.addEventHandler("onkeydown",this.tab_search_Tabpage1_edtCustomer_onkeydown,this);
            this.tab_search.Tabpage1.form.edtModelCode.addEventHandler("onkeydown",this.tab_search_Tabpage1_edtModelCode_onkeydown,this);
            this.div_work.form.grd_basMasterdataclass.addEventHandler("onexpandup",this.div_work_grd_basMasterdataclass_onexpandup,this);
            this.div_work.form.grd_basMasterdataclass.addEventHandler("oncloseup",this.div_work_grd_basMasterdataclass_oncloseup,this);
            this.div_work.form.btn_addRow.addEventHandler("onclick",this.fn_add,this);
            this.div_work.form.btn_delRow.addEventHandler("onclick",this.fn_delete,this);
            this.div_work.form.btn_copyRow.addEventHandler("onclick",this.fn_copy,this);
            this.div_work.form.btn_ItemxlUp.addEventHandler("onclick",this.div_work_btn_xlUp_onclick,this);
            this.div_work.form.grd_basMasterdataclassExcel.addEventHandler("onexpandup",this.div_work_grd_basMasterdataclass_onexpandup,this);
            this.div_work.form.grd_basMasterdataclassExcel.addEventHandler("oncloseup",this.div_work_grd_basMasterdataclass_oncloseup,this);
            this.div_header.form.Static01.addEventHandler("onclick",this.div_header_Static01_onclick,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_genarateSemiProduct.addEventHandler("onclick",this.div_header_btn_genarateSemiProduct_onclick,this);
            this.div_header.form.btn_attach.addEventHandler("onclick",this.fn_attach,this);
            this.div_header.form.btn_copyProduct.addEventHandler("onclick",this.fn_copyProduct,this);
            this.ds_basItemMaster.addEventHandler("oncolumnchanged",this.ds_basItemMaster_oncolumnchanged,this);
        };
        this.loadIncludeScript("BAS01800M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
