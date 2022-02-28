(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS02400M");
            this.set_titletext("수주사양결재");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMKIND\" type=\"STRING\" size=\"256\"/><Column id=\"FORAPPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"FORFIRSTPRODUCTION\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCHANGEFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"SALESORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"ERPSALESORDERNO\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"SALESORDERDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ISAPPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALESCHARGE\" type=\"STRING\" size=\"256\"/><Column id=\"SPECIFICATIONCHARGE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPTO\" type=\"STRING\" size=\"256\"/><Column id=\"BILLTO\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"INTERFACEACTION\" type=\"STRING\" size=\"256\"/><Column id=\"INTERFACERESULTS\" type=\"STRING\" size=\"256\"/><Column id=\"UNITPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"ETCPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALEORDERCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"SALESORDER\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"USAGEAPPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"FIRSTPRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCHANGEFLAG2\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTCREATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALESCHARGENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECIFICATIONCHARGENAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCE\" type=\"STRING\" size=\"256\"/><Column id=\"SMTUNITPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"SEPARATINGPORTION\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEXAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEYAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALPNLSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"CALCULATEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCESTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SPECTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SALESORDERCONFIRM\" type=\"STRING\" size=\"256\"/><Column id=\"SALESORDERIF\" type=\"STRING\" size=\"256\"/><Column id=\"SALESORDERRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"IFEXECUTE\" type=\"STRING\" size=\"256\"/><Column id=\"IFRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"IS_INVALID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"SALESOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPTINPUT\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCESTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ISAPPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_itemVersion", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_itemVersionList", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_listSave", this);
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMKIND\" type=\"STRING\" size=\"256\"/><Column id=\"FORAPPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"FORFIRSTPRODUCTION\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCHANGEFLAG\" type=\"STRING\" size=\"256\"/><Column id=\"SALESORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"ERPSALESORDERNO\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"SALESORDERDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ISAPPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALESCHARGE\" type=\"STRING\" size=\"256\"/><Column id=\"SPECIFICATIONCHARGE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPTO\" type=\"STRING\" size=\"256\"/><Column id=\"BILLTO\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"INTERFACEACTION\" type=\"STRING\" size=\"256\"/><Column id=\"INTERFACERESULTS\" type=\"STRING\" size=\"256\"/><Column id=\"UNITPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"ETCPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALEORDERCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"SALESORDER\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"USAGEAPPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"FIRSTPRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCHANGEFLAG2\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTCREATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALESCHARGENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECIFICATIONCHARGENAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"IMPEDANCE\" type=\"STRING\" size=\"256\"/><Column id=\"SMTUNITPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"SEPARATINGPORTION\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEXAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"PNLSIZEYAXIS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALPNLSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"CALCULATEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCESTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SPECTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SALESORDERCONFIRM\" type=\"STRING\" size=\"256\"/><Column id=\"SALESORDERIF\" type=\"STRING\" size=\"256\"/><Column id=\"SALESORDERRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"IFEXECUTE\" type=\"STRING\" size=\"256\"/><Column id=\"IFRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_LINENO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"18",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("staSearchPeriod","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("수주기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("7693F1DF1E5842AD972326E4CE8D5234");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear2","171","350","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","350","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"0","15","400","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","0","15","400",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"330","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","356","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboPeriodType","15","35","88","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("calStartDt","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd ddd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("calEndDt","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd ddd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_01",null,"80","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_01",null,"55","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staJobType","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WORKTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02",null,"230","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboWorkType","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,JobType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductionType","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboProductionType","108","235","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00",null,"130","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03",null,"5","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00",null,"30","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00",null,"55","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00",null,"230","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00",null,"130","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductCode","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("33");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00",null,"155","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductName","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("35");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00",null,"205","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("36");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staGovernanceState","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("37");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSINGSTATUS");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00",null,"255","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("38");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staSpecOwner","0","260","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("39");
            obj.set_text("사양담당자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SPECOWNER");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00_00",null,"280","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("40");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCamOwner","0","285","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("41");
            obj.set_text("영업담당자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CAMOWNER");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00",null,"205","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("42");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboState","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_codecolumn("C,GovernanceState,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00",null,"255","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("43");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_item",null,"135","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("44");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01",null,"155","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("45");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_specOwner","108","260",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_specOwner",null,"260","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("46");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00",null,"280","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("47");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_salesOwner","108","285",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_salesOwner",null,"285","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("48");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item_nm","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_00",null,"105","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("49");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCustomer","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("50");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("F993645129314EB2A2423955D6AB814C");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_customer",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("51");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customer","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item_id","73","496","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("52");
            obj.set_value("품목ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("품목ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customer_id","74","461","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("53");
            obj.set_value("고객사ID(HIDDEN)");
            obj.set_visible("false");
            obj.set_text("고객사ID(HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_specOwner_id","74","531","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("54");
            obj.set_value("사양담당자ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("사양담당자ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_salesOwner_id","74","568","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("55");
            obj.set_value("영업담당자ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("영업담당자ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPlantList","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("56");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STOPSITE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboPlantList","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_01_00_00",null,"80","45","5","229",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("57");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_01",null,"180","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("58");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_02",null,"180","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("59");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductName00","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("60");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_item_cd","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staGovernanceState00","0","310","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("61");
            obj.set_text("수주결재");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SALESORDERAPPROVAL");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboIsApproval","108","310","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("62");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00_00",null,"305","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("63");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","117","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("수주 사양 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SALEORDERLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_approvalSalesOrder","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_enableevent("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"SITE\"/><Cell col=\"3\" text=\"수주일\"/><Cell col=\"4\" text=\"수주번호\"/><Cell col=\"5\" text=\"라인\"/><Cell col=\"6\" text=\"고객명\"/><Cell col=\"7\" text=\"품목명\"/><Cell col=\"8\" text=\"품목코드\"/><Cell col=\"9\" text=\"Rev.\"/><Cell col=\"10\" text=\"수주량\"/><Cell col=\"11\" text=\"단가\"/><Cell col=\"12\" text=\"납기일자\"/><Cell col=\"13\" text=\"작업구분\"/><Cell col=\"14\" text=\"생산구분\"/><Cell col=\"15\" text=\"사양담당\"/><Cell col=\"16\" text=\"영업담당\"/><Cell col=\"17\" text=\"수주결재\" tooltiptext=\"SALESORDERAPPROVAL\"/><Cell col=\"18\" text=\"LOT생성\"/><Cell col=\"19\" text=\"진행상태\"/><Cell col=\"20\" text=\"설명\"/><Cell col=\"21\" text=\"수주확정\"/><Cell col=\"22\" text=\"수주량 I/F\"/><Cell col=\"23\" text=\"수주량 점검\"/><Cell col=\"24\" text=\"ROLL/SHEET\"/><Cell col=\"25\" text=\"납품처\"/><Cell col=\"26\" text=\"수주 배분자\"/><Cell col=\"27\" text=\"수주 배분 일시\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" displaytype=\"text\" textAlign=\"right\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"expr:dataset.getRowLevel(currow) == 0 ?  &quot;checkboxcontrol&quot; : &quot;checkbox&quot;\" edittype=\"expr:dataset.getRowLevel(currow) == 0 ?  &quot;checkbox&quot; : &quot;none&quot;\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\"/><Cell col=\"2\" text=\"bind:PLANTID\" displaytype=\"text\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\" expr=\"dataset.getRowLevel(currow) == 0 ?  PLANTID : &quot;&quot;\"/><Cell col=\"3\" text=\"bind:SALESORDERDATE\" edittype=\"none\" displaytype=\"text\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\" expr=\"dataset.getRowLevel(currow) == 0 ?  SALESORDERDATE : &quot;&quot;\"/><Cell col=\"4\" text=\"bind:SALESORDERID\" displaytype=\"text\" textAlign=\"center\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\"/><Cell col=\"5\" text=\"bind:LINENO\" displaytype=\"text\" textAlign=\"center\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\" expr=\"dataset.getRowLevel(currow) == 0 ?  LINENO : &quot;&quot;\"/><Cell col=\"6\" text=\"bind:CUSTOMERNAME\" displaytype=\"text\" textAlign=\"left\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\" expr=\"dataset.getRowLevel(currow) == 0 ?  CUSTOMERNAME : &quot;&quot;\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFNAME\" displaytype=\"text\" textAlign=\"left\" suppress=\"0\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\" expr=\"dataset.getRowLevel(currow) == 0 ?  PRODUCTDEFNAME : &quot;소계&quot;\"/><Cell col=\"8\" text=\"bind:ITEMID\" displaytype=\"text\" textAlign=\"left\" suppress=\"0\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\"/><Cell col=\"9\" text=\"bind:ITEMVERSION\" displaytype=\"combotext\" textAlign=\"center\" suppress=\"0\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\" expr=\"dataset.getRowLevel(currow) == 0 ?  ITEMVERSION : &quot;&quot;\" edittype=\"expr:ISAPPROVAL==&apos;Y&apos; ? &quot;none&quot; : &quot;combo&quot;\" combodataset=\"ds_itemVersion\" combocodecol=\"ITEMVERSION\" combodatacol=\"ITEMVERSION\"/><Cell col=\"10\" text=\"bind:ORDERQTY\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##9.##\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\"/><Cell col=\"11\" text=\"bind:UNITPRICE\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,##0.##\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\" expr=\"dataset.getRowLevel(currow) == 0 ?  UNITPRICE : &quot;&quot;\"/><Cell col=\"12\" text=\"bind:DELIVERYDATE\" displaytype=\"text\" textAlign=\"center\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\"/><Cell col=\"13\" text=\"bind:JOBTYPE\" displaytype=\"combotext\" combocodecol=\"C,JobType,,Y,N\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\"/><Cell col=\"14\" text=\"bind:PRODUCTIONTYPE\" displaytype=\"combotext\" combocodecol=\"C,ProductionType,,Y,N\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\"/><Cell col=\"15\" text=\"bind:SPECIFICATIONCHARGENAME\" textAlign=\"center\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\"/><Cell col=\"16\" text=\"bind:SALESCHARGENAME\" textAlign=\"center\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\"/><Cell col=\"17\" displaytype=\"combotext\" combocodecol=\"C,YesNo,,Y,N\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\" text=\"bind:ISAPPROVAL\"/><Cell col=\"18\" text=\"bind:ISLOTCREATE\" displaytype=\"combotext\" combocodecol=\"C,YesNo,,Y,N\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\"/><Cell col=\"19\" text=\"bind:GOVERNANCESTATUS\" combocodecol=\"C,GovernanceState,,Y,N\" displaytype=\"combotext\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\"/><Cell col=\"20\" text=\"bind:DESCRIPTION\" displaytype=\"text\" textAlign=\"left\" edittype=\"expr:ISAPPROVAL==&apos;Y&apos; ? &quot;none&quot; : &quot;normal&quot;\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\"/><Cell col=\"21\" displaytype=\"text\" text=\"expr:dataset.parent.fn_checkConfirm(dataset.getRowLevel(currow), SALESORDERID)\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\"/><Cell col=\"22\" textAlign=\"right\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\" displaytype=\"mask\" maskeditformat=\"#,###.##\" expr=\"dataset.getRowLevel(currow) == 0 ?  &quot;&quot; : SALESORDERIF\" text=\"expr:dataset.parent.fn_checkIfQty(dataset.getRowLevel(currow), SALESORDERIF)\"/><Cell col=\"23\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\" displaytype=\"normal\" text=\"expr:dataset.parent.fn_checkQty(dataset.getRowLevel(currow), SALESORDERIF, SALESORDERID)\"/><Cell col=\"24\" text=\"bind:RTRSHT\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\"/><Cell col=\"25\" text=\"bind:SHIPTO\" displaytype=\"text\" textAlign=\"left\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\"/><Cell col=\"26\" text=\"bind:CREATOR\" textAlign=\"left\" displaytype=\"text\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\"/><Cell col=\"27\" text=\"bind:CREATEDTIME\" displaytype=\"text\" cssclass=\"expr:dataset.parent.fn_checkColor(dataset.getRowLevel(currow), ISAPPROVAL, currow)\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_list","Static01:0","0",null,"34","725",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_approvalSalesOrder",null,"6","29","24","4",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","3",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("9");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","136","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
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

            obj = new Button("btn_customSave",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"16","44","24","btn_customSave:25",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_approval",null,"16","44","24","btn_cancel:0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("0");
            obj.set_text("승인");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","100","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_text("마스터품목(사양)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","143","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","tab_search.Tabpage1.form.calStartDt","value","ds_search","P_PERIOD_PERIODFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.Tabpage1.form.calEndDt","value","ds_search","P_PERIOD_PERIODTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.Tabpage1.form.edt_customer_id","value","ds_search","CUSTOMER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.Tabpage1.form.cboWorkType","value","ds_search","JOBTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.Tabpage1.form.cboProductionType","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.Tabpage1.form.edt_item_id","value","ds_search","ITEMID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.Tabpage1.form.edt_specOwner_id","value","ds_search","SPECOWNER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_search.Tabpage1.form.edt_salesOwner_id","value","ds_search","SALESOWNER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab_search.Tabpage1.form.cboState","value","ds_search","STATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab_search.Tabpage1.form.cboPlantList","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","tab_search.Tabpage1.form.cboIsApproval","value","ds_search","ISAPPROVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_search.Tabpage1.form.edt_item_cd","value","ds_search","ITEMVERSION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS02400M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS02400M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 수주사양 결재
         * 파일명 		: BAS02400M.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.03.31
         *
         * 설  명		: 기준관리 - 수주사양 결재
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.31	최성민   	최초작성
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
        this.g_idx		= null;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.basfn_getPeriodData("ds_periodType");
        	this.fn_formInit();
        	this.basfn_saveBtn(this.div_header.form.btn_customSave); //저장버튼 공통처리 함수 호출
        	//그리드 틀고정
        	this.nfn_cellFix(this.div_work.form.grd_approvalSalesOrder, 5);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	//this.ds_list.clearData();
        	var sSvcID 			= "selectSaleOrderApprovalSearch";
        	var sController 	= "/bas02400/selectSaleOrderApprovalSearch.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_list=output1 ds_itemVersion=output2";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_list))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	this.g_idx = this.ds_list.rowposition;
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveSalesOrderApproval";
        	var sController 	= "/bas02400/saveSalesOrderApproval.do";
        	var sInDatasets 	= "INPUT=ds_list:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 승인/취소
         */
        this.fn_approval = function (obj, e)
        {
        	var actionKey  		= obj.id.replace("btn_","");
        	var dsObj			= this.ds_list;
        	this.ds_listSave.clearData();
        	this.g_idx = this.ds_list.rowposition;
        	if (this.ds_list.getCaseCount("CHK=='1'")==0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");
        		return;
        	}

        	for(var i=0; i<dsObj.rowcount; i++){
        		var chk = dsObj.getColumn(i, "CHK");
        		if(chk!="1"){
        			continue;
        		};

        		var isApproval 			= dsObj.getColumn(i, "ISAPPROVAL");		//승인여부

        		if(actionKey=="approval"){ //승인
        			if(isApproval=="Y") {
        				this.gfn_Message("AlreadyCARAcceptCompleted", null, "warning", "ok");
        				return;
        			}
        		} else {	//취소
        			if(isApproval=="N") {
        				this.gfn_Message("ApprovalCountInfo", null, "warning", "ok");
        				return;
        			}
        		}
        		var nRow = this.ds_listSave.addRow();
        		this.ds_listSave.copyRow(nRow, dsObj, i);
        		this.ds_listSave.setRowType(nRow, Dataset.ROWTYPE_UPDATE);
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= actionKey+"SalesOrderApproval";
        	var sController 	= "/bas02400/"+actionKey+"SalesOrderApproval.do";
        	var sInDatasets 	= "INPUT=ds_listSave:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		if (trId == "approvalSalesOrderApproval" || trId == "cancelSalesOrderApproval" )
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
        		if (trId == "saveSalesOrderApproval")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search();
        		} else if (trId =="selectSaleOrderApprovalSearch"){
        			this.ds_list.set_keystring("G:+SALESORDERID");
        			this.ds_list.set_rowposition(this.g_idx);
        			var objGrid = this.div_work.form.grd_approvalSalesOrder;
        			var colId = this.nfn_GetColNum(objGrid, "SALESORDERID");
        			objGrid.setFocus();
        			objGrid.setCellPos(colId, this.g_idx);
        			this.g_idx = 0;
        			//this.ds_list.applyChange();
        // 			if(this.searchDiv.chk_exceptInput.value=="Y"){
        // 				this.ds_list.set_keystring("G:+SALESORDERID");
        // 			} else {
        // 				this.ds_list.set_keystring(null);
        // 			}
        		} else if (trId == "approvalSalesOrderApproval"){
        			this.gfn_Message("ApprovalComplete", null, "info", "ok");
        			this.fn_search();
        		} else if (trId == "cancelSalesOrderApproval" ){
        			this.gfn_Message("NoApprovalComplete", null, "info", "ok");
        			this.fn_search();
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

        	oArg.arg_type = "B";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "";

        	if(svcId=="SCH_ITEM"){ //검색조건에서 고객조회시 다건선택 가능하도록
        		oArg.arg_type = "CA";
        	 } else {
        		oArg.arg_type = "BA";
        	 }


        	if(popId=="P00042"){ //고객사 조회
        		if(svcId=="SCH_CUSTOMER"){
        			oArg.arg_searchStr = "SEARCH_KEY=" + this.nfn_nvl(this.tab_search.Tabpage1.form.edt_customer.value,"");
        		}
        		oArg.arg_rtnCols = "CUSTOMERID|CUSTOMERNAME";
        	} else if (popId=="P00043" && svcId=="SCH_ITEM"){	//품목 조회
        		oArg.arg_type = "CA";
        		oArg.arg_paramCols = "MASTERDATACLASSID";
        		oArg.arg_paramValues = "Product";
        		oArg.arg_rtnCols = "ITEMID|ITEMNAME|ITEMVERSION";
        		oArg.arg_searchStr = "SEARCH_KEY="+this.nfn_nvl(this.searchDiv.edt_item.value, "");
        	} else if (popId=="P00043" && svcId=="FRM_ITEM"){	//품목 조회
        		oArg.arg_type = "B";
        		oArg.arg_paramCols = "MASTERDATACLASSID";
        		oArg.arg_paramValues = "Product";
        		oArg.arg_rtnCols = "ITEMID|ITEMNAME|ITEMVERSION";
        	} else if (popId=="P00062"){	//담당자 조회
        		oArg.arg_rtnCols = "USERID|USERNAME";
        		oArg.arg_paramCols = "USERGROUPID";
        		if(svcId=="SCH_SPEC_OWNER"){ //사양담당자
        			oArg.arg_paramValues = "SPECOWNER";
        		} else if(svcId=="SCH_SALES_OWNER"){ //영업담당자
        			oArg.arg_paramValues = "SALESOWNER";
        		}

        		if(svcId=="SCH_SPEC_OWNER" ){ //사양담당자
        			oArg.arg_searchStr = "SEARCH_KEY=" + this.nfn_nvl(this.tab_search.Tabpage1.form.edt_specOwner.value,"");
        		}
        		if(svcId=="SCH_SALES_OWNER" ){ //영업담당자
        			oArg.arg_searchStr = "SEARCH_KEY=" + this.nfn_nvl(this.tab_search.Tabpage1.form.edt_salesOwner.value,"");
        		}
        	}
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);

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
        	if(sPopupId == "SCH_ITEM")
        	{
        		var objKey = "";
        		var objId = "";
        		var objNm = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			objKey+= ","+ colArray[2];
        			objNm += ","+ colArray[1];
        			objId += ","+ colArray[0];
        		}

        		this.searchDiv.edt_item.set_value(objId.substr(1));
        		this.searchDiv.edt_item_nm.set_value(objNm.substr(1));
        		this.searchDiv.edt_item_id.set_value(objId.substr(1));
        		this.searchDiv.edt_item_cd.set_value(objKey.substr(1));
        	}
        	if(sPopupId == "SCH_SPEC_OWNER")
        	{
        		this.searchDiv.edt_specOwner.set_value(rtn[1]);
        		this.searchDiv.edt_specOwner_id.set_value(rtn[0]);
        	}
        	if(sPopupId == "SCH_SALES_OWNER")
        	{
        		this.searchDiv.edt_salesOwner.set_value(rtn[1]);
        		this.searchDiv.edt_salesOwner_id.set_value(rtn[0]);
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
        	this.searchDiv.cboPeriodType.set_value("THISMONTH"); // 금월
        	this.searchDiv.cboState.set_value(null);
        	this.searchDiv.cboIsApproval.set_value("N");
        	this.searchDiv.cboPlantList.set_value(this.gf_getSiteType());
        	this.searchDiv.edt_customer.set_value(null);
        	this.searchDiv.edt_customer_id.set_value(null);
        	this.searchDiv.edt_item.set_value(null);
        	this.searchDiv.edt_item_id.set_value(null);
        	this.searchDiv.edt_item_nm.set_value(null);
        	this.searchDiv.edt_item_cd.set_value(null);
        	this.searchDiv.edt_specOwner.set_value(null);
        	this.searchDiv.edt_specOwner_id.set_value(null);
        	this.searchDiv.edt_salesOwner.set_value(null);
        	this.searchDiv.edt_salesOwner_id.set_value(null);
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

        this.div_header_btnConfirm_onclick = function(obj,e)
        {
        	this.fn_approval();
        };

        this.tab_search_Tabpage1_btnSpecOwner_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_SPEC_OWNER","P00062");
        };

        this.tab_search_Tabpage1_btnSalesOwner_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_SALES_OWNER","P00062");
        };

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

        this.tab_search_Tabpage1_edtSpecOwner_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btnSpecOwner_onclick();
        	}
        };

        this.tab_search_Tabpage1_edtSalesOwner_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btnSalesOwner_onclick();
        	}
        };

        this.div_work_grd_approvalSalesOrder_ondropdown = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.cell, "ITEMVERSION")) {
        		var itemId 			= this.ds_list.getColumn(this.ds_list.rowposition, "ITEMID");
        		this.fn_getItemVersion(itemId); //해당 아이템의 버젼정보 조회
        	}
        };

        this.div_work_grd_approvalSalesOrder_oncloseup = function(obj,e)
        {
        	this.ds_itemVersion.filter("");
        };

        this.fn_getItemVersion = function (itemId)
        {
        	this.ds_itemVersionList.clearData();

        	var sSvcID 			= "selectItemVersion";
        	var sController 	= "/bas02400/selectCustomQuery.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_itemVersionList=output";
        	var sArgs 			= "";
        		sArgs 			+= this.gfn_setParam("SQL_ID", 		"selectItemVersionList");
        		sArgs 			+= this.gfn_setParam("ITEMID"		, itemId);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "fn_callBackAfterVersion", true, false);   //동기호출
        }

        this.fn_callBackAfterVersion = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "selectItemVersion")
        		{
        			var versionList = "";
        			for(var i=0; i<this.ds_itemVersionList.rowcount; i++){
        				var itemVersion = this.ds_itemVersionList.getColumn(i, "ITEMVERSION");
        				versionList  += (i==0 ? "" : "||") + " ITEMVERSION=='"+itemVersion+"'";
        			}

        			this.ds_itemVersion.filter("1==1 && (" + versionList+")");

        		}
        	}
        }

        this.fn_checkQty = function(rowLevel, erpQty, orderNo)
        {
        	if(rowLevel=="0")return;
        	var orderQtyNum = nexacro.toNumber(this.nfn_nvl(this.ds_list.getCaseSum("SALESORDERID=='"+orderNo+"'", "ORDERQTY"),"0"));
        	var erpQtyNum	= nexacro.toNumber(this.nfn_nvl(erpQty, "0"));
        	var result		= "";
        	if(orderQtyNum == erpQtyNum){
        		result	= "OK";
        	} else {
        		result	= "Fail";
        	}
        	return result;
        }

        this.fn_checkConfirm = function(rowLevel, orderNo)
        {
        	if(rowLevel=="0")return;
        	var nRow = this.ds_list.findRowExpr("SALESORDERID=='"+orderNo+"'");
        	var confYn = this.ds_list.getColumn(nRow, "SALESORDERCONFIRM");
        	return confYn;
        }

        this.fn_checkIfQty = function(rowLevel, ifQty)
        {
        	if(rowLevel=="0"){
        		return null;
        	} else {
        		return ifQty;
        	}
        }

        this.fn_checkColor = function(rowLevel, approvalYn, row)
        {
        	var result = "";
        	if(rowLevel=="1"){
        		result = "cell_bold,cell_bg_gray";
        	} else {
        		var isCheck = this.ds_list.getColumn(row, "CHK");
        		if(approvalYn=="Y"){
        			//result = "cell_blue,cell_bold";
        			result = "cell_bg_green";
        		}
        		if(isCheck=="1"){
        			result += ",cell_bg_yellow";
        		}
        	}
        	return result;
        }
        this.tab_search_Tabpage1_edtCamOwner_onkeydown = function(obj,e)
        {
        		if(e.keycode==13){
        			this.tab_search_Tabpage1_btnSalesOwner_onclick();
        		}
        };

        this.div_work_grd_approvalSalesOrder_oncelldblclick = function(obj,e)
        {
        	var isCheck = this.ds_list.getColumn(e.row, "CHK");
        	if(isCheck =="1"){
        		this.ds_list.setColumn(e.row, "CHK", "");
        	} else {
        		this.ds_list.setColumn(e.row, "CHK", "1");
        	}
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
            this.tab_search.Tabpage1.form.edt_specOwner.addEventHandler("onkeydown",this.tab_search_Tabpage1_edtSpecOwner_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_specOwner.addEventHandler("onclick",this.tab_search_Tabpage1_btnSpecOwner_onclick,this);
            this.tab_search.Tabpage1.form.edt_salesOwner.addEventHandler("onkeydown",this.tab_search_Tabpage1_edtCamOwner_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_salesOwner.addEventHandler("onclick",this.tab_search_Tabpage1_btnSalesOwner_onclick,this);
            this.tab_search.Tabpage1.form.btn_customer.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search00_01_onclick,this);
            this.tab_search.Tabpage1.form.edt_customer.addEventHandler("onkeydown",this.tab_search_Tabpage1_edtCustomer_onkeydown,this);
            this.div_work.form.grd_approvalSalesOrder.addEventHandler("ondropdown",this.div_work_grd_approvalSalesOrder_ondropdown,this);
            this.div_work.form.grd_approvalSalesOrder.addEventHandler("oncloseup",this.div_work_grd_approvalSalesOrder_oncloseup,this);
            this.div_work.form.grd_approvalSalesOrder.addEventHandler("oncelldblclick",this.div_work_grd_approvalSalesOrder_oncelldblclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_customSave.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_cancel.addEventHandler("onclick",this.fn_approval,this);
            this.div_header.form.btn_approval.addEventHandler("onclick",this.fn_approval,this);
        };
        this.loadIncludeScript("BAS02400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
