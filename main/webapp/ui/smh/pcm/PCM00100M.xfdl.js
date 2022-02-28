(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM00100M");
            this.set_titletext("수주배분");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"SALESORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISREGAPPROVAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_salesOrder", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SALESORDERDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALESORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNITPRICE\" type=\"FLOAT\" size=\"256\"/><Column id=\"ORDERQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALESCHARGE\" type=\"STRING\" size=\"256\"/><Column id=\"SALESCHARGENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECIFICATIONCHARGE\" type=\"STRING\" size=\"256\"/><Column id=\"SPECIFICATIONCHARGENAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PCSSIZEXAXIS\" type=\"FLOAT\" size=\"256\"/><Column id=\"PCSSIZEYAXIS\" type=\"FLOAT\" size=\"256\"/><Column id=\"PCSPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"PNLMM\" type=\"FLOAT\" size=\"256\"/><Column id=\"PCSMM\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ORIGINALLINENO\" type=\"STRING\" size=\"256\"/><Column id=\"ISREGAPPROVAL\" type=\"FLOAT\" size=\"256\"/><Column id=\"APPROVALQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"RESIDUALQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"INVENTORYCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"수주번호\" type=\"STRING\" size=\"256\"/><Column id=\"라인\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"Rev\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"고객명\" type=\"STRING\" size=\"256\"/><Column id=\"단가\" type=\"STRING\" size=\"256\"/><Column id=\"PCS\" type=\"STRING\" size=\"256\"/><Column id=\"PNL\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/><Column id=\"납기일자\" type=\"STRING\" size=\"256\"/><Column id=\"승인\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_salesOrderDo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SALESORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNITPRICE\" type=\"FLOAT\" size=\"256\"/><Column id=\"ORDERQTY\" type=\"FLOAT\" size=\"256\"/><Column id=\"JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOBTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SALESCHARGE\" type=\"STRING\" size=\"256\"/><Column id=\"SALESCHARGENAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECIFICATIONCHARGE\" type=\"STRING\" size=\"256\"/><Column id=\"SPECIFICATIONCHARGENAME\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHT\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PCSSIZEXAXIS\" type=\"FLOAT\" size=\"256\"/><Column id=\"PCSSIZEYAXIS\" type=\"FLOAT\" size=\"256\"/><Column id=\"PCSPNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"PNLMM\" type=\"FLOAT\" size=\"256\"/><Column id=\"PCSMM\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ORIGINALLINENO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERQTY2\" type=\"FLOAT\" size=\"256\"/><Column id=\"PNL\" type=\"FLOAT\" size=\"256\"/><Column id=\"MM\" type=\"FLOAT\" size=\"256\"/><Column id=\"SALESORDERDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISAPPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"INVENTORYCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"STATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_productVersion", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"CODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_productSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_salesOrderApproval", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"INT\" size=\"256\" prop=\"NONE\"/><Column id=\"SALESORDERID\" type=\"STRING\" size=\"256\" prop=\"\"/><Column id=\"GRPLINENO\" type=\"STRING\" size=\"256\" prop=\"\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\" prop=\"\" sumtext=\"\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\" prop=\"\" sumtext=\"\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\" prop=\"\" sumtext=\"\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\" prop=\"\" sumtext=\"\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNITPRICE\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"ORDERQTY\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"PNL\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"MM\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"SALESAMT\" type=\"FLOAT\" size=\"256\" prop=\"SUM\"/><Column id=\"SALESORDERDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALESCHARGE\" type=\"STRING\" size=\"256\"/><Column id=\"SALESCHARGENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DELIVERYDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECAPPROVALDATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVER\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISAPPROVAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("S/O 수주 배분");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"255","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","275","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","275","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","275","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","30","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"30","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
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

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("수주기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("A240C714A5134192B11144C9D3244F10");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodFr","108","35",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_periodTo","108","60",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_periodType","10","60","94","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("금주");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("수주");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SALESORDERID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_orderId","108","85",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label03","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("라인");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LINENO");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label04","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label05","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFVERSION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label06","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label07","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_lineNo","108","110",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_itemId","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_itemId",null,"135","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_itemVersion","108","160",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_itemNm","108","185",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_productionType","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_plantId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_isregapproval","108","235","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_codecolumn("C,ISREGAPPROVAL,ALL,Y,Y");
            obj.set_text("");
            obj.set_value("ALL");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label07_00","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_text("수주배분여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SALSEORDER");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_search);
            obj.set_text("수주배분 조회");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("label01","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Combo("cmb_01","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb01");
            obj.set_text("유효");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button45_00","15","50","146","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Button("Button44_00_01","171","50","102","36",null,null,null,null,null,null,this.tab_search.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_work);
            obj.set_text("S/O 수주 배분");
            this.tab_work.addChild(obj.name, obj);

            obj = new Static("title0","0","0","130","34",null,null,null,null,null,null,this.tab_work.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("S/O 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("SALESORDERLIST");
            this.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_salesOrderDo","0","53.15%",null,null,"0","0",null,null,null,null,this.tab_work.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_salesOrderDo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"119\"/><Column size=\"80\"/><Column size=\"221\"/><Column size=\"181\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"83\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"수주번호\"/><Cell col=\"2\" text=\"라인\"/><Cell col=\"3\" text=\"품목코드\"/><Cell col=\"4\" text=\"Rev\"/><Cell col=\"5\" text=\"품목명\"/><Cell col=\"6\" text=\"고객명\"/><Cell col=\"7\" text=\"단가\"/><Cell col=\"8\" text=\"PCS\" tooltiptext=\"RECEIVEPCSQTY\"/><Cell col=\"9\" text=\"PNL\" tooltiptext=\"RECEIVEPANELQTY\"/><Cell col=\"10\" text=\"MM\" tooltiptext=\"WORKENDMMQTY\"/><Cell col=\"11\" text=\"납기일자\"/><Cell col=\"12\" text=\"승인\"/><Cell col=\"13\" text=\"생성자\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" cssclass=\"expr:ISAPPROVAL == &apos;Y&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"1\" text=\"bind:SALESORDERID\" cssclass=\"expr:ISAPPROVAL == &apos;Y&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:LINENO\" cssclass=\"expr:ISAPPROVAL == &apos;Y&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" cssclass=\"expr:ISAPPROVAL == &apos;Y&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\" edittype=\"expr:ISAPPROVAL == &apos;Y&apos; ?  &apos;none&apos; : &apos;combo&apos;\" cssclass=\"expr:ISAPPROVAL == &apos;Y&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" displaytype=\"combotext\" combodataset=\"ds_productVersion\" combocodecol=\"CODEID\" combodatacol=\"CODENAME\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" cssclass=\"expr:ISAPPROVAL == &apos;Y&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"6\" text=\"bind:CUSTOMERNAME\" cssclass=\"expr:ISAPPROVAL == &apos;Y&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:UNITPRICE\" displaytype=\"mask\" edittype=\"expr:ISAPPROVAL == &apos;Y&apos; ?  &apos;none&apos; : &apos;mask&apos;\" maskeditformat=\"#,##0.#\" cssclass=\"expr:ISAPPROVAL == &apos;Y&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:ORDERQTY\" displaytype=\"mask\" maskeditformat=\"#,##0.###\" edittype=\"expr:ISAPPROVAL == &apos;Y&apos; ?  &apos;none&apos; : &apos;mask&apos;\" textAlign=\"right\" cssclass=\"expr:ISAPPROVAL == &apos;Y&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"9\" text=\"bind:PNL\" displaytype=\"mask\" maskeditformat=\"#,##0.##\" textAlign=\"right\" cssclass=\"expr:ISAPPROVAL == &apos;Y&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" expr=\" Math.ceil(ORDERQTY/PCSPNL)\"/><Cell col=\"10\" text=\"bind:MM\" maskeditformat=\"#,##0.##\" displaytype=\"mask\" textAlign=\"right\" cssclass=\"expr:ISAPPROVAL == &apos;Y&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" expr=\" Math.ceil(ORDERQTY/PCSMM)\"/><Cell col=\"11\" text=\"bind:DELIVERYDATE\" edittype=\"expr:ISAPPROVAL == &apos;Y&apos; ?  &apos;none&apos; : &apos;date&apos;\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\" cssclass=\"expr:ISAPPROVAL == &apos;Y&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"12\" text=\"bind:ISAPPROVAL\" cssclass=\"expr:ISAPPROVAL == &apos;Y&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"13\" text=\"bind:CREATOR\" cssclass=\"expr:ISAPPROVAL == &apos;Y&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"수주량\" tooltiptext=\"ORDERQTY\"/><Cell col=\"4\" displaytype=\"mask\" maskeditformat=\"#,###\"/><Cell col=\"5\" text=\"합계\" tooltiptext=\"TOTALAMOUNT\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" expr=\"dataset.getSum(&quot;ORDERQTY&quot;) \" maskeditformat=\"#,##0.###\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"9\" expr=\"dataset.getSum(&quot;PNL&quot;) \" maskeditformat=\"#,##0.##\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"10\" expr=\"dataset.getSum(&quot;MM&quot;) \" maskeditformat=\"#,##0.##\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/></Band></Format></Formats>");
            this.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_salesOrder","0","34",null,null,"0","grd_salesOrderDo:53",null,null,null,null,this.tab_work.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_salesOrder");
            obj.set_autofittype("none");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"114\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"106\"/><Column size=\"97\"/><Column size=\"250\"/><Column size=\"0\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"107\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"96\"/><Column size=\"112\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"수주일\"/><Cell col=\"2\" text=\"수주번호\"/><Cell col=\"3\" text=\"라인\"/><Cell col=\"4\" text=\"품목코드\"/><Cell col=\"5\" text=\"Rev\"/><Cell col=\"6\" text=\"품목명\"/><Cell col=\"7\" text=\"고객아이디\"/><Cell col=\"8\" text=\"고객명\"/><Cell col=\"9\" text=\"단가\"/><Cell col=\"10\" text=\"수주량\"/><Cell col=\"11\" text=\"미배분 수량\"/><Cell col=\"12\" text=\"작업구분\" tooltiptext=\":JOBTYPE\"/><Cell col=\"13\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell col=\"14\" text=\"납기일자\"/><Cell col=\"15\" text=\"영업담당\" tooltiptext=\"SALESCHARGE\"/><Cell col=\"16\" text=\"사양담당\" tooltiptext=\"SPECIFICATIONMAN\"/><Cell col=\"17\" text=\"RTR/SHEET\" tooltiptext=\"E4DA2FCD959342E4A46DA2A80F76FB42\"/><Cell col=\"18\" text=\"층수\"/><Cell col=\"19\" text=\"PCS SIZE(mm) X축\"/><Cell col=\"20\" text=\"PCS SIZE(mm) Y축\"/><Cell col=\"21\" text=\"PCS/PNL\"/><Cell col=\"22\" text=\"PCS/mm\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"1\" text=\"bind:SALESORDERDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd \" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:SALESORDERID\" textAlign=\"center\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:LINENO\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\" textAlign=\"center\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFVERSION\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFNAME\" controlautosizingtype=\"both\" textAlign=\"left\" autosizecol=\"limitmax\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"7\" text=\"bind:CUSTOMERID\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"8\" text=\"bind:CUSTOMERNAME\" textAlign=\"left\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"9\" text=\"bind:UNITPRICE\" displaytype=\"mask\" maskeditformat=\"#,##0.#\" textAlign=\"right\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"10\" text=\"bind:ORDERQTY\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"11\" text=\"bind:RESIDUALQTY\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"12\" text=\"bind:JOBTYPENAME\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:PRODUCTIONTYPENAME\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:DELIVERYDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd \" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:SALESCHARGENAME\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:SPECIFICATIONCHARGENAME\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:RTRSHT\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:LAYER\" textAlign=\"center\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"19\" text=\"bind:PCSSIZEXAXIS\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"20\" text=\"bind:PCSSIZEYAXIS\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"21\" text=\"bind:PCSPNL\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"22\" text=\"bind:PCSMM\" displaytype=\"mask\" maskeditformat=\"#,###\" textAlign=\"right\" cssclass=\"expr:ORDERQTY &gt; RESIDUALQTY ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/></Band></Format></Formats>");
            this.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdSalesOrderDown",null,"6","29","24","0",null,null,null,null,null,this.tab_work.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀업로드");
            this.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("title1","0",null,"130","34",null,"grd_salesOrderDo:0",null,null,null,null,this.tab_work.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("수주배분 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("ALLOCATESALESORDERLIST");
            this.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_suttleUp_ds_salesOrderDo","50.42%","grd_salesOrder:15","24","23",null,null,null,null,null,null,this.tab_work.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_shuttleT");
            this.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_suttleDown",null,"grd_salesOrder:14","23","24","btn_suttleUp_ds_salesOrderDo:10",null,null,null,null,null,this.tab_work.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_shuttleB");
            this.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"300","58","15","450",null,null,null,null,null,this.tab_work.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00_00","450","338","58","15",null,null,null,null,null,null,this.tab_work.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grd_salesOrderDoDown",null,null,"29","24","0","grd_salesOrderDo:3",null,null,null,null,this.tab_work.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_grdCopy",null,null,"29","24","29","grd_salesOrderDo:3",null,null,null,null,this.tab_work.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("복사");
            this.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_salesOrderDo",null,null,"29","24","58","grd_salesOrderDo:3",null,null,null,null,this.tab_work.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_salesOrderDoAddRow",null,null,"29","24","87","grd_salesOrderDo:3",null,null,null,null,this.tab_work.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_salesOrder","title0:0","0","140","34",null,null,null,null,null,null,this.tab_work.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_salesOrderDo","title1:0",null,"140","34",null,"grd_salesOrderDo:0",null,null,null,null,this.tab_work.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.tab_work.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_work);
            obj.set_text("수주배분 조회");
            this.tab_work.addChild(obj.name, obj);

            obj = new Grid("grd_salesOrderApproval","0","34",null,null,"0","0",null,null,null,null,this.tab_work.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_salesOrderApproval");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"57\"/><Column size=\"108\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"280\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"102\"/><Column size=\"118\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"102\"/><Column size=\"116\"/><Column size=\"80\"/><Column size=\"115\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"수주번호\"/><Cell col=\"2\" text=\"라인\"/><Cell col=\"3\" text=\"품목코드\"/><Cell col=\"4\" text=\"Rev\"/><Cell col=\"5\" text=\"품목명\"/><Cell col=\"6\" text=\"고객명\"/><Cell col=\"7\" text=\"단가\"/><Cell col=\"8\" text=\"PCS\" tooltiptext=\"WORKENDPCSQTY\"/><Cell col=\"9\" text=\"PNL\" tooltiptext=\"RECEIVEPANELQTY\"/><Cell col=\"10\" text=\"MM\" tooltiptext=\"WORKENDMMQTY\"/><Cell col=\"11\" text=\"AMT\" tooltiptext=\"F212E92C5C964E199B3C0F28267E6468\" displaytype=\"normal\"/><Cell col=\"12\" text=\"수주일\"/><Cell col=\"13\" text=\"영업담당자명\"/><Cell col=\"14\" text=\"납기일자\"/><Cell col=\"15\" text=\"생성일\" calendardateformat=\"yyyy-MM-dd\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\"/><Cell col=\"16\" text=\"생성자명\" tooltiptext=\"NM_CREATOR\"/><Cell col=\"17\" text=\"사양결제시간\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\" displaytype=\"normal\"/><Cell col=\"18\" text=\"승인\"/><Cell col=\"19\" text=\"스팩담당자\" tooltiptext=\"APPROVERNAME1\"/></Band><Band id=\"body\"><Cell cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" text=\"bind:NO\" displaytype=\"normal\" expr=\"dataset.getRowLevel(currow) == 0 ? NO: &quot;&quot;\"/><Cell col=\"1\" text=\"bind:SALESORDERID\" subsumtext=\" \" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" expr=\"dataset.getRowLevel(currow) == 0 ?  SALESORDERID : &quot;&quot;\"/><Cell col=\"2\" text=\"bind:LINENO\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" expr=\"dataset.getRowLevel(currow) == 1 ? GRPLINENO : LINENO\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" subsumtext=\" \" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" expr=\"dataset.getRowLevel(currow) == 0 ? PRODUCTDEFID : &quot;&quot;\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" expr=\"dataset.getRowLevel(currow) == 0 ? PRODUCTDEFVERSION: &quot;&quot;\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" expr=\"dataset.getRowLevel(currow) == 1 ? &quot;합계&quot; : PRODUCTDEFNAME\"/><Cell col=\"6\" text=\"bind:CUSTOMERNAME\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"7\" text=\"bind:UNITPRICE\" maskeditformat=\"#,##0.#\" displaytype=\"mask\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:ORDERQTY\" maskeditformat=\"#,###\" displaytype=\"mask\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:PNL\" maskeditformat=\"#,###\" displaytype=\"mask\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:MM\" maskeditformat=\"#,###.##\" displaytype=\"mask\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:SALESAMT\" maskeditformat=\"#,###\" displaytype=\"mask\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:SALESORDERDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd \" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"13\" text=\"bind:SALESCHARGENAME\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"14\" text=\"bind:DELIVERYDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd \" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\" subsumtext=\" \" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"15\" text=\"bind:CREATEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd \" subsumtext=\" \" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"16\" text=\"bind:CREATORNAME\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"17\" text=\"bind:SPECAPPROVALDATE\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\" subsumtext=\" \" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"18\" text=\"bind:ISAPPROVAL\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/><Cell col=\"19\" text=\"bind:APPROVERNAME\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_subSum&quot; : &quot;&quot;\"/></Band></Format></Formats>");
            this.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_grdUp00",null,"6","29","24","0",null,null,null,null,null,this.tab_work.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("StaticTitleOper","0","0","130","34",null,null,null,null,null,null,this.tab_work.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("수주배분리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("ALLOCATESALESORDERLIST");
            this.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_salesOrderApproval","StaticTitleOper:0","0","140","34",null,null,null,null,null,null,this.tab_work.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.tab_work.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","31",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","62",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","93",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","100","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_text("화면명");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
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
        this.addIncludeScript("PCM00100M.xfdl","lib::lib_bas.xjs");
        this.registerScript("PCM00100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 수주배분
         * 파일명 		: PCM00100M.xfdl
         * 작성자 		: 방성혁
         * 작성일 		: 2021.02.15
         *
         * 설  명		:  조회/수정/삭제/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.15	방성혁   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
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
        	this.fn_formInit();
        	this.alert();

        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
            if (this.nfn_isNull(this.tab_search.Tabpage1.form.cal_periodFr.value))
        	{
        		this.gfn_Message("수주기간(FROM)을 입력햐여 주십시요", "", "error", "ok");
        		this.tab_search.Tabpage1.form.cal_periodFr.setFocus();
        		return false;
        	}
        	if (this.nfn_isNull(this.tab_search.Tabpage1.form.cal_periodTo.value))
        	{
        		this.gfn_Message("수주기간(To)을 입력햐여 주십시요", "", "error", "ok");
        		this.tab_search.Tabpage1.form.cal_periodTo.setFocus();
        		return false;
        	}
        	this.ds_search.clearData();

        	var sRow = this.ds_search.addRow();

        	this.ds_search.setColumn(sRow, "ENTERPRISEID", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_enterpriseId"));
        	this.ds_search.setColumn(sRow, "PLANTID", this.tab_search.Tabpage1.form.cmb_plantId.value);
        	this.ds_search.setColumn(sRow, "PERIODFR", this.tab_search.Tabpage1.form.cal_periodFr.value);
        	this.ds_search.setColumn(sRow, "PERIODTO", this.tab_search.Tabpage1.form.cal_periodTo.value);
        	this.ds_search.setColumn(sRow, "SALESORDERID", this.tab_search.Tabpage1.form.edt_orderId.value);
        	this.ds_search.setColumn(sRow, "LINENO", this.tab_search.Tabpage1.form.edt_lineNo.value);
        	this.ds_search.setColumn(sRow, "ITEMID", this.tab_search.Tabpage1.form.edt_itemId.value);
        	this.ds_search.setColumn(sRow, "PRODUCTIONTYPE", this.tab_search.Tabpage1.form.cmb_productionType.value);
        	this.ds_search.setColumn(sRow, "ISREGAPPROVAL", this.tab_search.Tabpage1.form.cmb_isregapproval.value);
        	this.ds_search.setColumn(sRow, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));

           if (this.tab_work.tabindex == "0")
           {
        		this.ds_salesOrder.clearData();

        		this.ds_salesOrderDo.clearData();

        		var sSvcID = "SelectSalesOrderList";
        		var sController = "/pcm00100/selectSalesOrderList.do";
        		var sInDatasets = "INPUT=ds_search";
        		var sOutDatasets = "ds_salesOrder=output";
        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	} else {
        		this.ds_salesOrderApproval.clearData();

        		var sSvcID = "SelectSalesOrderApproval";
        		var sController = "/pcm00100/selectSalesOrderApproval.do";
        		var sInDatasets = "INPUT=ds_search";
        		var sOutDatasets = "ds_salesOrderApproval=output";
        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {

        	if (!this.gfn_dsIsUpdated(this.ds_salesOrderDo) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}
        	var sRow = this.tab_work.Tabpage1.form.grd_salesOrder.getSelectedDatasetRows();
        	var totOrderSum = 0;
        	if (this.ds_salesOrderDo.getRowCount() > 0)
        	{

        		for(var i = 0; i < this.ds_salesOrderDo.getRowCount(); i++)
        		{
        			totOrderSum = totOrderSum + this.ds_salesOrderDo.getColumn(i, "ORDERQTY");
        		}
        		if (this.ds_salesOrder.getColumn(sRow,"ORDERQTY") != totOrderSum )
        		{
        			  this.gfn_Message("MaxOrderQty", null, "error", "ok");
        			  return false;
        		}
        	}
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "SAVE_SALESORDER";
        	var sController = "/pcm00100/saveSalesOrderDo.do";
        	var sInDatasets = "INPUT=ds_salesOrderDo:A";
        	var sOutDatasets = "";

        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        	if (errCD != 0)
        	{
        		this.gfn_Message("ProcessingError", "\n"+ errMsg, "error", "ok");
        		return;
        	}

        	switch(trId) {
        	case "SelectSalesOrderList":
        	     if (this.ds_salesOrder.getRowCount() == 0)
        	     {
        			this.gfn_Message("NoSelectData", null, "error", "ok");
        		 } else {
        		    this.fn_grdSalesOrder_rowBgSetting();
        			//var sRow = this.ds_routionRollLoss.set_rowposition(0);
        		//	this.salesOrderDoSearch(0);
        		 }
        		break;
             case "SelectSalesOrderDo" :

        	      this.productVersionSearch();
        	    break;
        	 case "PRODUCT_VERSION" :
        	     trace(this.ds_productVersion.saveXML());
        	    break;
        	 case "SAVE_SALESORDER" :
        		 this.gfn_Message("SuccedSave", "", "information", "ok");
        		// var sRow = this.tab_work.Tabpage1.form.grd_salesOrder.getSelectedDatasetRows();
        		 var sRow = this.ds_salesOrder.rowposition;
        		 this.salesOrderDoSearch(sRow);
        		 break;
        	 case "SelectSalesOrderApproval" :
        	     if (this.ds_salesOrderApproval.getRowCount() == 0)
        		 {
        			this.gfn_Message("NoSelectData", null, "error", "ok");
        		 }  else {
        			//this.ds_salesOrderApproval.set_keystring("G:SALESORDERID,PRODUCTDEFID,PRODUCTDEFVERSION,PRODUCTDEFNAME,S:LINENO");
        			this.ds_salesOrderApproval.set_keystring("G:+SALESORDERID+GRPLINENO+PRODUCTDEFID");
        		 }
        	     break;
        	default:
        	}

        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;
            switch(sPopupId)
        	{
        		case "SEARCH_PRODUCTD" :
        		    this.tab_search.Tabpage1.form.edt_itemId.set_value(rtn[0]);
        			this.tab_search.Tabpage1.form.edt_itemNm.set_value(rtn[1]);
        			this.tab_search.Tabpage1.form.edt_itemVersion.set_value(rtn[2]);
        			break;
        		case "SEARCH_SPLIT" :
        		     var resultInfo = JSON.parse(rtn);
        			 if(resultInfo.resultCd == "OK")
        			 {
        				this.ds_salesOrderDo.clearData();
        				this.fn_grd_salesOrderDo_DataSetting(resultInfo.splitQty, resultInfo.lineQty);
        			 }
        			break
        		default :
        			break;
        	}


        };
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_formInit = function()
        {
        	this.tab_search.Tabpage1.form.cmb_plantId.set_value(this.gf_getSiteType());
            this.basfn_getPeriodData("ds_periodType");
        	this.tab_search.Tabpage1.form.cmb_periodType.set_value("THISWEEK"); // 금월
        	this.fn_setDate("THISWEEK");

        	//sort 제거
        	this.tab_work.Tabpage1.form.grd_salesOrderDo.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        	//filter 제거
        	this.tab_work.Tabpage1.form.grd_salesOrderDo.removeEventHandler("onexpandup", this.nfn_grd_onexpandup , this);
        	this.tab_work.Tabpage1.form.grd_salesOrderDo.removeEventHandler("onmousemove", this.nfn_grd_onmousemove, this); //filter 아이콘 안나오게 처리
        };
        this.fn_setDate = function (periodType)
        {

        	this.tab_search.Tabpage1.form.cal_periodFr.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
         	this.tab_search.Tabpage1.form.cal_periodTo.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));

        };

         this.fn_grdSalesOrder_rowBgSetting = function()
         {

        	 if (this.ds_salesOrder.getRowCount() < 0)
        	 {
        	 	return false;
        	 }
         };
         // 수주배분 팝업에서 들어온 경우 처리 function
        this.fn_grd_salesOrderDo_DataSetting = function( splitQty, lineQty)
        {
            var totSplitQty = 0;
        	var iOrderQty = 0;
           // var sRow = this.tab_work.Tabpage1.form.grd_salesOrder.getSelectedDatasetRows();
        	var sRow = this.ds_salesOrder.rowposition;
        	var remainQty = this.ds_salesOrder.getColumn(sRow,"RESIDUALQTY");

        	this.summaryOrderQty(sRow);

        	this.ds_salesOrderDo.set_enableevent(false);

        	for(var i = 0; i < lineQty; i++)
        	{
        	    var mLineNo   = this.ds_salesOrder.getColumn(sRow,"LINENO")+"."+ (i+1);


        		if (remainQty >= splitQty)
        		{
        			iOrderQty = splitQty;
        		}
        		else
        		{
        			iOrderQty = remainQty;
        		}
        		var iRow      = this.ds_salesOrderDo.addRow();

        		this.ds_salesOrderDo.copyRow(iRow, this.ds_salesOrder, sRow);
        		var vRow = this.ds_productVersion.findRowExpr("PRODUCTDEFID == '"+this.ds_salesOrderDo.getColumn(iRow, "PRODUCTDEFID")+"' && CODEID == '"+this.ds_salesOrderDo.getColumn(iRow, "PRODUCTDEFVERSION")+"'");
        		this.ds_salesOrderDo.setColumn(iRow,"CHK"           ,  0);
        	    this.ds_salesOrderDo.setColumn(iRow,"LINENO"        ,  mLineNo);
        		this.ds_salesOrderDo.setColumn(iRow,"CUSTOMERID"    ,  this.ds_productVersion.getColumn(vRow,"CUSTOMERID"));
        		this.ds_salesOrderDo.setColumn(iRow,"CUSTOMERNAME"  ,  this.ds_productVersion.getColumn(vRow,"CUSTOMERNAME"));
        		this.ds_salesOrderDo.setColumn(iRow,"ORDERQTY"      ,  iOrderQty);
        		this.ds_salesOrderDo.setColumn(iRow,"ORDERQTY2"     ,  0);
        		this.ds_salesOrderDo.setColumn(iRow,"DELIVERYDATE"  ,  this.ds_salesOrder.getColumn(sRow,"DELIVERYDATE"));
        		this.ds_salesOrderDo.setColumn(iRow,"ISAPPROVAL"  ,  "N");
        		this.ds_salesOrderDo.setColumn(iRow,"ORG_LINENO"  ,  this.ds_salesOrder.getColumn(sRow,"LINENO"));

        		remainQty     = remainQty - splitQty;	// 남은 수량 체크를 위해
        	}

        	this.ds_salesOrderDo.set_enableevent(true);

        	this.tab_work.Tabpage1.form.sta_cnt_ds_salesOrderDo.set_text('Count : <fc v="#f31d24">'+this.ds_salesOrderDo.getRowCount()+'</fc>');
        };

        this.gfn_allTrim = function(sValue)
        {
        	if(sValue==null)		return "";
        	if (new String(sValue).valueOf() == "undefined") return "";

            var objValue = new String(sValue);
            var sRtnValue="";
            var i;

            return nexacro.trim( objValue );
        };

        this.productVersionSearch = function ()
        {

        	//var sRow = this.tab_work.Tabpage1.form.grd_salesOrder.getSelectedDatasetRows();
        	var mRow = this.ds_salesOrder.rowposition;
            trace("sRow = " + sRow);
        	this.ds_productVersion.clearData();
        	this.ds_productSearch.clearData();

        	var sRow = this.ds_productSearch.addRow();
        	this.ds_productSearch.setColumn(sRow, "PRODUCTDEFID", this.ds_salesOrder.getColumn(mRow,"PRODUCTDEFID"));

        	var sSvcID = "PRODUCT_VERSION";
        	var sController = "/pcm00100/selectProductVersionList.do";
        	var sInDatasets = "INPUT=ds_productSearch";
        	var sOutDatasets = "ds_productVersion=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.salesOrderDoSearch = function(sRow)
        {
        	this.ds_salesOrderDo.clearData();

            this.ds_search.setColumn(0, "SALESORDERID", this.ds_salesOrder.getColumn(sRow, "SALESORDERID"));
        	this.ds_search.setColumn(0, "LINENO", this.ds_salesOrder.getColumn(sRow, "LINENO"));

        	var sSvcID = "SelectSalesOrderDo";
        	var sController = "/pcm00100/selectSalesOrderDo.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_salesOrderDo=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.summaryOrderQty = function(sRow)
        {
        	var orderQty = this.ds_salesOrder.getColumn(sRow, "ORDERQTY");
            this.tab_work.Tabpage1.form.grd_salesOrderDo.setCellProperty("summary", 4, "expr", '"'+orderQty+'"');
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_Tabpage1_btn_productCode_onclick = function(obj,e)
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
        	var txtSearch = "";
        	if (!this.nfn_isNull(this.tab_search.Tabpage1.form.edt_itemId.value))
        	{
        		txtSearch = "PRODUCTDEFID="+ this.tab_search.Tabpage1.form.edt_itemId.value;
        	}

        	var popupId = "SEARCH_PRODUCTD";
        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00022";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = txtSearch;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        };

        this.tab_search_Tabpage1_cmb_periodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate(e.postvalue);
        	}
        };

        this.tab_work_Tabpage1_btn_grdSalesOrderDown_onclick = function(obj,e)
        {

        	var sName = "";
        	var vName = "";
            //   this.tab_work.Tabpage1.form.grd_salesOrder
        	// 익스포트할 그리드 명, 여러개일 경우 ':'로 구분
        	sName = "tab_work.Tabpage1.form.grd_salesOrder";

        	// 익스포트될 시트명, 여러개일 경우 ':'로 구분
        	vName = "S/O LIST";

        	// 저장될 엑셀명
        	var file_name = "S/O LIST";

        	this.gfn_export_excel(sName, vName, file_name, "CSV");
        };

        this.tab_work_Tabpage1_btn_suttleDown_onclick = function(obj,e)
        {
            if (this.ds_salesOrder.getRowCount() < 1)
            {
            	return false;
            }
        	//var nRow = this.tab_work.Tabpage1.form.grd_salesOrder.getSelectedDatasetRows();
        	var nRow = this.ds_salesOrder.rowposition;
        	var popupId = "SEARCH_SPLIT";
        	var oArg = {};
        	oArg.salesOrderId   = this.gfn_allTrim(this.ds_salesOrder.getColumn(nRow,"SALESORDERID"));
        	oArg.lineNo         = this.gfn_allTrim(this.ds_salesOrder.getColumn(nRow,"LINENO"));
        	oArg.productDefId   = this.gfn_allTrim(this.ds_salesOrder.getColumn(nRow,"PRODUCTDEFID"));
        	oArg.productDefName = this.gfn_allTrim(this.ds_salesOrder.getColumn(nRow,"PRODUCTDEFNAME"));
        	oArg.customerName   = this.gfn_allTrim(this.ds_salesOrder.getColumn(nRow,"CUSTOMERNAME"));
        	oArg.residualQty    = this.gfn_allTrim(this.ds_salesOrder.getColumn(nRow,"RESIDUALQTY"));

        	//oArg.ds_result      = this.ds_resultDurable;
        	this.gfn_openPopup(popupId,"pcm::PCM00100P.xfdl",oArg,"width=800,height=191");

        };

        this.tab_work_Tabpage1_btn_suttleUp_onclick = function(obj,e)
        {
        	if(this.ds_salesOrderDo.getCaseCount("CHK == 1") <=0)
        	{
        		this.gfn_Message("NoSelections", null, "error", "ok");
        		return;
        	}

        	//var nRow = this.tab_work.Tabpage1.form.grd_salesOrderDo.getSelectedDatasetRows();
        	var nRow = this.ds_salesOrderDo.rowposition;

        	for(var i = this.ds_salesOrderDo.getRowCount(); i>= 0; i--)
        	{
        		if (this.ds_salesOrderDo.getColumn(i,"CHK") == 1)
        		{
        		     if (this.ds_salesOrderDo.getColumn(i,"CREATER") == "")
        		     {
        		         this.ds_salesOrderDo.deleteRow(i);
        		     }

        		}
        	}

        	this.tab_work.Tabpage1.form.grd_salesOrderDo.setCellProperty("head",0, "text", "0");

        };

        this.ds_salesOrderDo_oncolumnchanged = function(obj,e)
        {
        	 if(e.row < 0 ) return;

             if (e.columnid == "ORDERQTY" )
             {
        		// this.ds_salesOrderDo.setColumn(e.row, "PNL", Math.ceil(this.ds_salesOrderDo.getColumn(e.row, "ORDERQTY") / this.ds_salesOrderDo.getColumn(e.row, "PCSPNL")));
        		// this.ds_salesOrderDo.setColumn(e.row, "MM",  Math.ceil(this.ds_salesOrderDo.getColumn(e.row, "ORDERQTY") / this.ds_salesOrderDo.getColumn(e.row, "PNLMM")));
        	 } else if (e.columnid == "PRODUCTDEFVERSION")
             {
             	var vRow = this.ds_productVersion.findRowExpr("CODEID=='"+e.newvalue+"'")

        		this.ds_salesOrderDo.setColumn(e.row,"CUSTOMERID"  , this.ds_productVersion.getColumn(vRow, "CUSTOMERID"));
        		this.ds_salesOrderDo.setColumn(e.row,"CUSTOMERNAME", this.ds_productVersion.getColumn(vRow, "CUSTOMERNAME"));
             }


        };

        this.tab_work_Tabpage1_btn_salesOrderDoAddRow_onclick = function(obj,e)
        {

        	var iRow = this.ds_salesOrderDo.addRow();
        	//var sRow = this.tab_work.Tabpage1.form.grd_salesOrder.getSelectedDatasetRows();
        	var sRow = this.ds_salesOrder.rowposition;
        	this.summaryOrderQty(sRow);

        	var mLineNo   = this.ds_salesOrder.getColumn(sRow,"LINENO")+"."+ (iRow + 1);
        	this.ds_salesOrderDo.set_enableevent(false);
        	this.ds_salesOrderDo.copyRow(iRow, this.ds_salesOrder, sRow);


        	var vRow = this.ds_productVersion.findRowExpr("PRODUCTDEFID == '"+this.ds_salesOrderDo.getColumn(iRow, "PRODUCTDEFID")+"' && CODEID == '"+this.ds_salesOrderDo.getColumn(iRow, "PRODUCTDEFVERSION")+"'");

        	this.ds_salesOrderDo.setColumn(iRow,"CHK"           ,  0);
        	this.ds_salesOrderDo.setColumn(iRow,"LINENO"        ,  mLineNo);
            this.ds_salesOrderDo.setColumn(iRow,"CUSTOMERID"    ,  this.ds_productVersion.getColumn(vRow,"CUSTOMERID"));
        	this.ds_salesOrderDo.setColumn(iRow,"CUSTOMERNAME"  ,  this.ds_productVersion.getColumn(vRow,"CUSTOMERNAME"));
        	this.ds_salesOrderDo.setColumn(iRow,"ORDERQTY2"     ,  0);
        	//this.ds_salesOrderDo.setColumn(iRow,"PNL"           ,  Math.ceil(this.ds_salesOrderDo.getColumn(iRow, "ORDERQTY") / this.ds_salesOrderDo.getColumn(iRow, "PCSPNL")));
        	//this.ds_salesOrderDo.setColumn(iRow,"MM"            ,  Math.ceil(this.ds_salesOrderDo.getColumn(iRow, "ORDERQTY") / this.ds_salesOrderDo.getColumn(iRow, "PNLMM")));
        	this.ds_salesOrderDo.setColumn(iRow,"ISAPPROVAL"  ,  "N");
        	this.ds_salesOrderDo.setColumn(iRow,"ORG_LINENO"  ,  this.ds_salesOrder.getColumn(sRow,"LINENO"));

        	this.ds_salesOrderDo.set_enableevent(true);

        };

        this.tab_work_Tabpage1_btn_grdCopy_onclick = function(obj,e)
        {
            //var sRow = this.tab_work.Tabpage1.form.grd_salesOrder.getSelectedDatasetRows();
        	var sRow = this.ds_salesOrder.rowposition;
        	for(var i = 0; i < this.ds_salesOrderDo.getRowCount(); i++)
        	{
        		if (this.ds_salesOrderDo.getColumn(i,"CHK") == 1)
        		{
        			 var iRow    = this.ds_salesOrderDo.addRow();
        			 var mLineNo = this.ds_salesOrder.getColumn(sRow,"LINENO")+"."+ (iRow + 1);
        			 this.ds_salesOrderDo.copyRow(iRow, this.ds_salesOrderDo, i);

        			 this.ds_salesOrderDo.setColumn(iRow,"CHK"         ,  0);
        			 this.ds_salesOrderDo.setColumn(iRow,"LINENO"      ,  mLineNo);
        		}
        	}
        };

        this.tab_work_Tabpage1_btn_grd_salesOrderDoDown_onclick = function(obj,e)
        {
        	var sName = "";
        	var vName = "";
            //   this.tab_work.Tabpage1.form.grd_salesOrder
        	// 익스포트할 그리드 명, 여러개일 경우 ':'로 구분
        	sName = "tab_work.Tabpage1.form.grd_salesOrderDo";

        	// 익스포트될 시트명, 여러개일 경우 ':'로 구분
        	vName = "수주배분";

        	// 저장될 엑셀명
        	var file_name = "수주배분";

        	this.gfn_export_excel(sName, vName, file_name, "CSV");
        };


        this.tab_work_onchanged = function(obj,e)
        {
           if (this.tab_work.tabindex == 0)
           {
           	   this.div_header.form.btn_save.set_visible(true);
           }
           else
           {
        		 this.div_header.form.btn_save.set_visible(false);
           }

        };


        this.ds_salesOrder_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 0) return;

        	 obj.set_enableevent(false);
             this.salesOrderDoSearch(e.newrow);
        	 obj.set_enableevent(true);
        };

        this.tab_work_Tabpage1_grd_salesOrderDo_onheadclick = function(obj,e)
        {
        	this.gfn_setGridCheckAll(obj, e);

        };

        this.tab_work_Tabpage2_grd_salesOrderApproval_onselectchanged = function(obj,e)
        {
        	trace("getRowLevel-->"+obj.getBindDataset().getRowLevel(e.row));
        	trace("cssclass-->"+obj.getCellProperty("Body",e.cell,"cssclass"));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.cmb_periodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cmb_periodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.btn_itemId.addEventHandler("onclick",this.tab_search_Tabpage1_btn_productCode_onclick,this);
            this.tab_work.addEventHandler("onchanged",this.tab_work_onchanged,this);
            this.tab_work.Tabpage1.form.grd_salesOrderDo.addEventHandler("onheadclick",this.tab_work_Tabpage1_grd_salesOrderDo_onheadclick,this);
            this.tab_work.Tabpage1.form.btn_grdSalesOrderDown.addEventHandler("onclick",this.tab_work_Tabpage1_btn_grdSalesOrderDown_onclick,this);
            this.tab_work.Tabpage1.form.btn_suttleUp_ds_salesOrderDo.addEventHandler("onclick",this.tab_work_Tabpage1_btn_suttleUp_onclick,this);
            this.tab_work.Tabpage1.form.btn_suttleDown.addEventHandler("onclick",this.tab_work_Tabpage1_btn_suttleDown_onclick,this);
            this.tab_work.Tabpage1.form.btn_grd_salesOrderDoDown.addEventHandler("onclick",this.tab_work_Tabpage1_btn_grd_salesOrderDoDown_onclick,this);
            this.tab_work.Tabpage1.form.btn_grdCopy.addEventHandler("onclick",this.tab_work_Tabpage1_btn_grdCopy_onclick,this);
            this.tab_work.Tabpage1.form.btn_salesOrderDoAddRow.addEventHandler("onclick",this.tab_work_Tabpage1_btn_salesOrderDoAddRow_onclick,this);
            this.tab_work.Tabpage2.form.grd_salesOrderApproval.addEventHandler("onselectchanged",this.tab_work_Tabpage2_grd_salesOrderApproval_onselectchanged,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_salesOrder.addEventHandler("onrowposchanged",this.ds_salesOrder_onrowposchanged,this);
            this.ds_salesOrderDo.addEventHandler("oncolumnchanged",this.ds_salesOrderDo_oncolumnchanged,this);
        };
        this.loadIncludeScript("PCM00100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
