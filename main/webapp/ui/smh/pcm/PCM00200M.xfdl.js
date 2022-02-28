(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM00200M");
            this.set_titletext("단가 Table");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODSEL\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNM\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PERIODSEL\">MODFYDAY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_unitPrice", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNITPRICEID\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"UNITPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"UNITPRICE_BARE\" type=\"FLOAT\" size=\"256\"/><Column id=\"UNITPRICE_SMT\" type=\"FLOAT\" size=\"256\"/><Column id=\"UNITPRICE_ETC\" type=\"FLOAT\" size=\"256\"/><Column id=\"UOM\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION\" type=\"STRING\" size=\"256\"/><Column id=\"APPLY_START_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"APPLY_END_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHANGE_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALEPRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Currencies", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CURRENCY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Temp", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
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


            obj = new Dataset("ds_searchCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODSEL\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNM\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PERIODSEL\">MODFYDAY</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"18",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","300","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","300","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_hotkey("F2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"0","15","290","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","0","15","290",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetipH",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetipB","0","280",null,"20","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetipM","161","305","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staSearchPeriod","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTIONTYPE","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTIONTYPE","108","235","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staITEMID","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staITEMNAME","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_ITEMID","108","110",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_ITEMID",null,"110","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staCUSTOMERNM","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("고객명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CUSTOMERNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_CUSTOMERNM","108","185",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staAPPLICATION","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("Application");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_APPLICATION","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTTYPE","0","260","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("Type");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("C38BC56010114ACC8EE2E27ADFB3C102");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTTYPE","108","260","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_codecolumn("C,ProductType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetipH01",null,"80","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPERIODSEL","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PERIODSEL","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var tab_search_Tabpage1_form_cbo_PERIODSEL_innerdataset = new nexacro.NormalDataset("tab_search_Tabpage1_form_cbo_PERIODSEL_innerdataset", obj);
            tab_search_Tabpage1_form_cbo_PERIODSEL_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">수정일</Col><Col id=\"codecolumn\">MODFYDAY</Col></Row><Row><Col id=\"datacolumn\">적용일</Col><Col id=\"codecolumn\">APPLYDAY</Col></Row></Rows>");
            obj.set_innerdataset(tab_search_Tabpage1_form_cbo_PERIODSEL_innerdataset);
            obj.set_text("수정일");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPLANTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staITEMVERSION","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("8B803E42B2684B27BA4E31A4B3D97F59");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PERIODTYPE","15","85","88","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("");
            obj.set_value("CUSTOM");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_ENDDT","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_STARTDT","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("0");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","272","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_text("Routing 자원/치공구/외주단가 등록");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","281","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("StaticTitleOper","0","0","108","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("품목 단가 정보   ");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("SpecClass004");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grdUnitPrice","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_unitPrice");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,null");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Site\" cssclass=\"cell_point\"/><Cell col=\"1\" text=\"품목코드\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"Rev\"/><Cell col=\"3\" text=\"품목명\"/><Cell col=\"4\" text=\"고객명\"/><Cell col=\"5\" text=\"화폐\" cssclass=\"cell_point\"/><Cell col=\"6\" text=\"환율\" tooltiptext=\"EXCHANGEVALUE\"/><Cell col=\"7\" text=\"판가\"/><Cell col=\"8\" text=\"단가\"/><Cell col=\"9\" text=\"BARE\" cssclass=\"cell_point\"/><Cell col=\"10\" text=\"SMT\" cssclass=\"cell_point\"/><Cell col=\"11\" text=\"ETC\" cssclass=\"cell_point\"/><Cell col=\"12\" text=\"UOM\"/><Cell col=\"13\" text=\"생산구분\"/><Cell col=\"14\" text=\"제품Type\"/><Cell col=\"15\" text=\"Application\" tooltiptext=\"Application\"/><Cell col=\"16\" text=\"시작일자\" cssclass=\"cell_point\"/><Cell col=\"17\" text=\"종료일자\"/><Cell col=\"18\" text=\"수정자\"/><Cell col=\"19\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell text=\"bind:PLANTID\" textAlign=\"center\" combocodecol=\"C,SiteType,SEL,Y,Y\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;combo&apos;:&apos;none&apos;\" displaytype=\"combotext\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\" textAlign=\"center\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CUSTOMERNAME\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:CURRENCY_CODE\" textAlign=\"center\" combodataset=\"ds_Currencies\" combocodecol=\"CURRENCY_CODE\" combodatacol=\"CURRENCY_NAME\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"6\" text=\"bind:EXCHANGE_RATE\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###.####\"/><Cell col=\"7\" text=\"bind:SALEPRICE\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###.####\"/><Cell col=\"8\" text=\"bind:UNITPRICE\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###.####\"/><Cell col=\"9\" text=\"bind:UNITPRICE_BARE\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,###.####\"/><Cell col=\"10\" text=\"bind:UNITPRICE_SMT\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,###.####\"/><Cell col=\"11\" text=\"bind:UNITPRICE_ETC\" textAlign=\"right\" displaytype=\"mask\" edittype=\"mask\" maskeditformat=\"#,###.####\"/><Cell col=\"12\" text=\"bind:UOM\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:PRODUCTIONTYPE\" textAlign=\"center\" combocodecol=\"C,ProductionType,SEL,Y,N\" displaytype=\"combotext\"/><Cell col=\"14\" text=\"bind:ITEMTYPE\" textAlign=\"center\" combocodecol=\"C,ProductType,SEL,Y,N\" displaytype=\"combotext\"/><Cell col=\"15\" text=\"bind:APPLICATION\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:APPLY_START_DATE\" textAlign=\"center\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\"/><Cell col=\"17\" text=\"bind:APPLY_END_DATE\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" edittype=\"date\" displaytype=\"date\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\"/><Cell col=\"18\" text=\"bind:USER_NM\" textAlign=\"center\" calendardisplayinvalidtype=\"none\" calendardisplaynulltype=\"none\"/><Cell col=\"19\" text=\"bind:MODIFIEDTIME\" textAlign=\"center\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_unitPrice","StaticTitleOper:0","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_unitPrice",null,"6","29","24","58",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_addRow_ds_unitPrice",null,"6","29","24","87",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_copyRow_ds_unitPrice",null,"6","29","24","29",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grdUnitPrice",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.Tabpage1.form.cbo_PLANTID","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.Tabpage1.form.edt_ITEMID","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.Tabpage1.form.edt_CUSTOMERNM","value","ds_search","CUSTOMERNM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_search.Tabpage1.form.edt_APPLICATION","value","ds_search","APPLICATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab_search.Tabpage1.form.cbo_PRODUCTIONTYPE","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_search.Tabpage1.form.cbo_PRODUCTTYPE","value","ds_search","PRODUCTTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.Tabpage1.form.cbo_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab_search.Tabpage1.form.edt_PRODUCTDEFNAME","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.Tabpage1.form.cal_ENDDT","value","ds_search","PERIOD_PERIODTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.Tabpage1.form.cal_STARTDT","value","ds_search","PERIOD_PERIODFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.Tabpage1.form.cbo_PERIODTYPE","value","ds_search","PERIODTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.Tabpage1.form.cbo_PERIODSEL","value","ds_search","PERIODSEL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM00200M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM00200M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM00200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 단가 Table
         * 파일명 		: PCM00200M.xfdl
         * 작성자 		: 김애리
         * 작성일 		: 2021.3.4
         *
         * 설  명		: BAS_UNITPRICEFORMES - 단가Table(MES용) 에 CRUD 하기위한 화면
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.3.4	김애리   	최초작성
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
        	this.nfn_formInit(obj);
        	//this.fn_initDatePicker();

        	this.ds_search.set_rowposition(0);
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());

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
        	this.ds_unitPrice.clearData();

        	if(this.fn_searchValidate() == false) return;

        	var sSvcID 			= "selectBOMTree";
        	var sController 	= "/pcm00200/selectUnitPriceList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_unitPrice=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_searchValidate = function ()
        {
        	return true;
        };


        /*
        * 기능 : 검색 초기화
        */
        this.fn_searchClear = function(obj,e)
        {
        	this.ds_search.copyData(this.ds_searchCopy);
        	this.fn_initDatePicker();
        };

        this.fn_save = function (obj, e)
        {
        trace( this.ds_unitPrice.saveXML());
        	if(this.fn_saveValidate() == false) return;

        	var sSvcID 			= "saveBillOfDurableList";
        	var sController 	= "/pcm00200/saveUnitPrice.do";
        	var sInDatasets 	= "INPUT=ds_unitPrice:A";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        this.fn_saveValidate = function ()
        {
        	var component = this.div_work.form.grdUnitPrice;
        	var strColIdList = "PLANTID,PRODUCTDEFID,CURRENCY_CODE,UNITPRICE_BARE,UNITPRICE_SMT,UNITPRICE_ETC,APPLY_START_DATE";
        	var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        	if (rtn == false) return false;

        	var arrProc = [];
        	for(var i=0;i<this.ds_unitPrice.rowcount;i++){
        		var iStartDt = this.ds_unitPrice.getColumn(i,"APPLY_START_DATE");
        		var iEndDt = this.ds_unitPrice.getColumn(i,"APPLY_END_DATE");
        		if (this.nfn_isNull(iEndDt)) iEndDt = new nexacro.Date( 2100, 12, 31, 0, 0, 0 );
        		if( iStartDt >= iEndDt )
        		{
        			this.gfn_Message("ValidateDate", "", "warning", "ok");//시작 일자는 종료일자보다 작아야합니다.
        			return false;
        		}

        		//뒤에 날짜 갭이 있는지 알기위해 쓸때...아직 로직 안 넣음.
        		var proc = this.ds_unitPrice.getColumn(i,"PRODUCTDEFID")+"|"+this.ds_unitPrice.getColumn(i,"PRODUCTDEFVERSION");
        		if(arrProc.indexOf(proc) == -1) arrProc.push(proc);
        	}

        	for(var i=0;i<this.ds_unitPrice.rowcount;i++){
        		for(var j=i+1;j<this.ds_unitPrice.rowcount;j++){
        			if(i == j) continue;
        			if(this.ds_unitPrice.getColumn(i,"PRODUCTDEFID") == this.ds_unitPrice.getColumn(j,"PRODUCTDEFID")
        				&& this.ds_unitPrice.getColumn(i,"PRODUCTDEFVERSION") == this.ds_unitPrice.getColumn(j,"PRODUCTDEFVERSION") )
        			{//id, ver 이 같은 제품 중에 기간이 중복 되는 것을 찾음.
        				var iStartDt = this.ds_unitPrice.getColumn(i,"APPLY_START_DATE");
        				var iEndDt = this.ds_unitPrice.getColumn(i,"APPLY_END_DATE");

        				if (this.nfn_isNull(iEndDt)) iEndDt = new nexacro.Date( 2100, 12, 31, 23, 59, 59,999 );

        				var jStartDt = this.ds_unitPrice.getColumn(j,"APPLY_START_DATE");
        				var jEndDt = this.ds_unitPrice.getColumn(j,"APPLY_END_DATE");

        				if (this.nfn_isNull(jEndDt)) jEndDt = new nexacro.Date( 2100, 12, 31, 23, 59, 59,999 );
        				if( ( iStartDt <= jStartDt && iEndDt >= jStartDt)   //두번째 시작일자가 첫번째 일짜 사이 이면
        					|| ( iStartDt <= jEndDt && iEndDt >= jEndDt)  )
        				//if(iStartDt >= jEndDt || iEndDt >= jStartDt)
        				{
        					var param = [this.ds_unitPrice.getColumn(i,"PRODUCTDEFID")
        							,this.ds_unitPrice.getColumn(i,"PRODUCTDEFVERSION")
        							,this.ds_unitPrice.getColumn(i,"APPLY_START_DATE").toString()
        							];
        					this.gfn_Message("DuplicateDate", param, "warning", "ok");//시작 일자와 종료 일자가 겹칩니다. ID : {0} ,Rev : {1}, 시작일자 : {2}
        					return false;
        				}

        			}
        		}
        	}//for(var i=0;i<this.ds_unitPrice.rowcount;i++){


        	return true;
        };


         /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        trace('fn_callBack trId ?' + trId);
        	if (errCD < 0)
        	{
        		if(trId == "saveBillOfDurableList")
        		{
        			this.gfn_Message(errMsg, "", "error", "ok");
        			return;
        		}
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
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
        		case "selectCurrencies" :
        		{
        			this.ds_searchCopy.copyData(this.ds_search);
        			break;
        		}
        		default:
        		}
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

        	if(sPopupId == "SEARCH_PRODUCT")
        	{
        		this.setProduct_P00105(rtn, this.ds_cbo_ProdVersion, this.ds_search);
        	} else if(sPopupId == "SEARCH_GRIDITEMID" )
        	{ //PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME|CUSTOMERID|CUSTOMERNAME|UNIT|PRODUCTIONTYPE|ITEMTYPE|MFG_CATEGORY|PLANTID
        		var nRow = this.ds_unitPrice.rowcount == 1 ? 0 : this.ds_unitPrice.rowposition;
        		for(var i=0; i<rtn.length; i++)
        		{
        			if( i != 0 && this.ds_unitPrice.rowcount-1 <  nRow) {

        				this.ds_unitPrice.addRow();

        				this.ds_unitPrice.setColumn(nRow,"UNITPRICE_BARE",0);
        				this.ds_unitPrice.setColumn(nRow,"UNITPRICE_SMT",0);
        				this.ds_unitPrice.setColumn(nRow,"UNITPRICE_ETC",0);
        				this.ds_unitPrice.setColumn(nRow, "ENTERPRISEID", this.ds_search.getColumn(0,"ENTERPRISEID"));

        			}
        			var colArray = rtn[i];
        			this.ds_unitPrice.setColumn(nRow,"PRODUCTDEFID",colArray[0]);
        			this.ds_unitPrice.setColumn(nRow,"PRODUCTDEFVERSION",colArray[1]);
        			this.ds_unitPrice.setColumn(nRow,"PRODUCTDEFNAME",colArray[2]);
        			this.ds_unitPrice.setColumn(nRow,"CUSTOMERID",colArray[3]);
        			this.ds_unitPrice.setColumn(nRow,"CUSTOMERNAME",colArray[4]);
        			this.ds_unitPrice.setColumn(nRow,"UOM",colArray[5]);
        			this.ds_unitPrice.setColumn(nRow,"PRODUCTIONTYPE",colArray[6]);
        			this.ds_unitPrice.setColumn(nRow,"ITEMTYPE",colArray[7]);
        			this.ds_unitPrice.setColumn(nRow,"APPLICATION",colArray[8]);
        			this.ds_unitPrice.setColumn(nRow,"PLANTID",colArray[9]);

        			nRow++;
        		}
        	}

        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_initDatePicker = function ()
        {
        	this.basfn_getPeriodData("ds_periodType");
          	this.ds_search.setColumn(0,"PERIOD_PERIODFR",this.ds_periodType.getColumn(0,"THISWEEK_S"));
          	this.ds_search.setColumn(0,"PERIOD_PERIODTO",this.ds_periodType.getColumn(0,"THISDAY_S"));

        	this.ds_search.setColumn(0,"PERIODTYPE","CUSTOM");
        };

        this.fn_initCombo = function ()
        {
        	var sSvcID 			= "selectCurrencies";
        	var sController 	= "/pcm00200/selectCurrencies.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_Currencies=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	this.ds_search.setColumn(0,"PRODUCTDEFVERSION","");
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


        this.fn_CostomQuery = function (obj, query)
        {
        		this.ds_search.setColumn(0,"SQL_ID",query);
        		obj.clearData();

        		var sSvcID 			= query;
        		var sController 	= "/pcmCommon/selectCustomQuery.do";
        		var sInDatasets 	= "INPUT=ds_search";
        		var sOutDatasets 	= obj.name + "=output";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_Tabpage1_cboPeriodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM")this.fn_setDate(e.postvalue);
        };

        this.tab_search_Tabpage1_btnITEMID_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"PRODUCTDEFID",this.tab_search.Tabpage1.form.edt_ITEMID.value);
        	this.openProduct_P00105("C", this.ds_search,"Product");
        };


        /*
         *	그리드 팝업 버튼 클릭.
         */
        this.grdUnitPrice_onexpanddown = function(obj,e)
        {
        	var idxProcID = this.div_work.form.grdUnitPrice.getBindCellIndex("body","PRODUCTDEFID");
        	if(e.cell == idxProcID)
        	{
        		var popupId = "SEARCH_GRIDITEMID";
        		var pPRODUCTDIVISION = "Product";
        		var pPlantID = this.ds_search.getColumn(0,"PLANTID");

        		var oArg = {};
        		oArg.arg_type = "C";
        		oArg.arg_popupCd = "P00105";
        		oArg.arg_popupNm = "";
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME|CUSTOMERID|CUSTOMERNAME|UNIT|PRODUCTIONTYPE|ITEMTYPE|MFG_CATEGORY|PLANTID";
        		oArg.arg_paramCols = "PLANTID";
        		oArg.arg_paramValues = pPlantID;
        		oArg.arg_searchStr = "PRODUCTDIVISION=" + pPRODUCTDIVISION;

        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");



        	}
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
        this.ds_unitPrice_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid != "UNITPRICE_BARE" || e.columnid != "UNITPRICE_SMT" || e.columnid != "UNITPRICE_ETC" )
        	{
        		var unitPrice = this.ds_unitPrice.getColumn(e.row, "UNITPRICE_BARE")
        					+ this.ds_unitPrice.getColumn(e.row, "UNITPRICE_SMT")
        					+ this.ds_unitPrice.getColumn(e.row, "UNITPRICE_ETC");
        		this.ds_unitPrice.setColumn(e.row, "UNITPRICE", unitPrice );
        	}
        };

        this.ds_unitPrice_onrowsetchanged = function(obj,e)
        {
        	if(e.reason == 12) //추가시
        	{
        		this.ds_unitPrice.setColumn(e.row,"UNITPRICE_BARE",0);
        		this.ds_unitPrice.setColumn(e.row,"UNITPRICE_SMT",0);
        		this.ds_unitPrice.setColumn(e.row,"UNITPRICE_ETC",0);
        		this.ds_unitPrice.setColumn(e.row, "ENTERPRISEID", this.ds_search.getColumn(0,"ENTERPRISEID"));
        		this.ds_unitPrice.setColumn(e.row, "PLANTID", this.ds_search.getColumn(0,"PLANTID"));
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_ITEMID.addEventHandler("onclick",this.tab_search_Tabpage1_btnITEMID_onclick,this);
            this.tab_search.Tabpage1.form.cbo_PERIODTYPE.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cboPeriodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.cal_ENDDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cal_STARTDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.grdUnitPrice.addEventHandler("onexpanddown",this.grdUnitPrice_onexpanddown,this);
            this.div_work.form.btn_delRow_ds_unitPrice.addEventHandler("onclick",this.fn_delete,this);
            this.div_work.form.btn_addRow_ds_unitPrice.addEventHandler("onclick",this.div_work_btn_addRow_ds_unitPrice_onclick,this);
            this.div_work.form.btn_copyRow_ds_unitPrice.addEventHandler("onclick",this.fn_copy,this);
            this.ds_unitPrice.addEventHandler("oncolumnchanged",this.ds_unitPrice_oncolumnchanged,this);
            this.ds_unitPrice.addEventHandler("onrowsetchanged",this.ds_unitPrice_onrowsetchanged,this);
        };
        this.loadIncludeScript("PCM00200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
