(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OSM00300M");
            this.set_titletext("Claim 대상 마감월 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,757);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"OSPVENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIOTO\" type=\"STRING\" size=\"256\"/><Column id=\"OSPVENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSEYESNO\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODNAME\" type=\"STRING\" size=\"256\"/><Column id=\"FACTORYID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REDUCEYESNO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTYPEOSP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_osmOspclaim", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFINETIME\" type=\"DATE\" size=\"256\"/><Column id=\"OCCURTIME\" type=\"DATE\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CLAIMPRICE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REDUCEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REDUCEQTYAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REDUCERATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REDUCERATEAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CLAIMAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CLAIMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMYN\" type=\"STRING\" size=\"256\"/><Column id=\"WORKGUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMSEQUENCE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"OSPVENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"OSPREDUCEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OSPREDUCERATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FINDPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFINEUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSEUSER\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"JOINCODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_factory", this);
            obj._setContents("<ColumnInfo><Column id=\"FACTORYID\" type=\"STRING\" size=\"256\"/><Column id=\"FACTORYNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchReCloseState", this);
            obj._setContents("<ColumnInfo><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSEYM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_periodState", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"PERIODSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SITE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_plantid","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","363","107","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","363","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"30","15","387","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","40","15","387",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID",null,"137","148","20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_AREAID",null,"137","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_00","0","137","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_00_00","0","163","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("협력사 ID");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("OSPVENDORID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_OSPVENDORID",null,"163","148","20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_OSPVENDORID",null,"163","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00_00_00","0","188","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("협력사명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_OSPVENDORNAME","108","188",null,"20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_00_01","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("발생기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("05CA3CAD5FFF4A36916B10CF981DD22D");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_period","14","60","89","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_codecolumn("code");
            obj.set_innerdataset("gds_period");
            obj.set_datacolumn("desc");
            obj.set_text("금일");
            obj.set_value("today");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_01","0","291","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_text("마감여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CLOSEYESNO");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_CLOSEYESNO","108","291","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID_id","60","421",null,"20","85",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_visible("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_OSPVENDORID_id","60","451",null,"20","85",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_visible("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_requestdate_from","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_requestdate_to","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_PERIODNAME","108","85","165","21",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_url("common::com_monthCalendar.xfdl");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_00_01_00","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_text("마감년월");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CLOSEYM");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_02","0","111","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("공장명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("FACTORYNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_FACTORYID","108","111","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_factory");
            obj.set_codecolumn("FACTORYID");
            obj.set_datacolumn("FACTORYNAME");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00","0","214","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","214",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"214","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_02_00","0","239","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("33");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_LOTTYPE","108","239","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,YieldProdType,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00_00_00_00","0","265","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","108","265",null,"20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID_nm","108","522",null,"20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("35");
            obj.set_enable("false");
            obj.set_visible("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID_id","108","552",null,"20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("36");
            obj.set_enable("false");
            obj.set_visible("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PROCESSDEFID","108","582",null,"20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("37");
            obj.set_enable("false");
            obj.set_visible("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PROCESSDEFVERSION","108","612",null,"20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("38");
            obj.set_enable("false");
            obj.set_visible("false");
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

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
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

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
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

            obj = new Button("btn_saveCloseProcess",null,"15","70","24","129",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("마감확정");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("CLOSECCONF");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_saveCloseCancel",null,"15","81","24","59",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_text("마감취소");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("CLOSECANCEL2");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_saveCloseperiod",null,"15","81","24","199",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_text("마감월관리");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("CLOSEPERIOD_MONTH");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_osmOspclaim","0","76",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_osmOspclaim");
            obj.set_autoenter("select");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"62\"/><Column size=\"72\"/><Column size=\"80\"/><Column size=\"88\"/><Column size=\"88\"/><Column size=\"102\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"96\"/><Column size=\"44\"/><Column size=\"158\"/><Column size=\"89\"/><Column size=\"72\"/><Column size=\"158\"/><Column size=\"63\"/><Column size=\"102\"/><Column size=\"116\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"178\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"마감여부\"/><Cell col=\"2\" text=\"마감년월\"/><Cell col=\"3\" text=\"CLAIM 구분\"/><Cell col=\"4\" text=\"확정일시\"/><Cell col=\"5\" text=\"발생일\"/><Cell col=\"6\" text=\"그룹공정명\"/><Cell col=\"7\" text=\"공정명\"/><Cell col=\"8\" text=\"원인작업장명\"/><Cell col=\"9\" text=\"협력사명\"/><Cell col=\"10\" text=\"품목코드\"/><Cell col=\"11\" text=\"Rev\"/><Cell col=\"12\" text=\"품목명\"/><Cell col=\"13\" text=\"Lot No.\"/><Cell col=\"14\" text=\"불량 코드\"/><Cell col=\"15\" text=\"불량명\"/><Cell col=\"16\" text=\"불량 수량\"/><Cell col=\"17\" text=\"불량반영금액\"/><Cell col=\"18\" text=\"발견공정\"/><Cell col=\"19\" text=\"생성자명\"/><Cell col=\"20\" text=\"확정자\"/><Cell col=\"21\" text=\"설명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:CLAIMYN\"/><Cell col=\"2\" text=\"bind:PERIODNAME\"/><Cell col=\"3\" text=\"bind:CLAIMTYPE\" combocodecol=\"C,ClaimType,,Y,N\" displaytype=\"combotext\"/><Cell col=\"4\" text=\"bind:DEFINETIME\"/><Cell col=\"5\" text=\"bind:OCCURTIME\"/><Cell col=\"6\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PROCESSSEGMENTCLASSNAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:REASONAREANAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:OSPVENDORNAME\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:JOINCODE\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:JOINNAME\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:DEFECTQTY\" textAlign=\"right\"/><Cell col=\"17\" text=\"bind:DEFECTAMOUNT\" textAlign=\"right\"/><Cell col=\"18\" text=\"bind:FINDPROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:CREATORNAME\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:DEFINEUSERNAME\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:DESCRIPTION\" textAlign=\"left\"/></Band><Band id=\"summary\"><Cell colspan=\"16\" textAlign=\"right\" text=\"합계\" tooltiptext=\"SUM\"/><Cell col=\"16\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;parseFloat(DEFECTQTY)&quot;)\"/><Cell col=\"17\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;parseFloat(DEFECTAMOUNT)&quot;)\"/><Cell col=\"18\" colspan=\"4\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","175","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("Claim 비용 마감");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("ClaimsClosureCost");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_osmOspclaim","sta_subTitle:20","0",null,"34","761",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_osmOspclaim",null,"48","29","24","5",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label02_00","0","49","103","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("마감년월");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CLOSEYM");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_PERIODNAME","206","49","22","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label02_00_00","270","49","103","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_text("마감상태");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PERIODSTATE");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_PERIODSTATE","368","49","148","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_PERIODNAME","98","49","105","21",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_url("common::com_monthCalendar.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_PERIODID","538","49","148","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,757,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item16","div_work.form.edt_PROCESSDEFID2","value","ds_productInformatByOsp","TOPROCESSDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_work.form.edt_PROCESSDEFVERSION2","value","ds_productInformatByOsp","TOPROCESSDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_monthCalendar.xfdl");
        };
        
        // User Script
        this.registerScript("OSM00300M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Claim대상 마감월 등록
         * 파일명 		: OSM00300M.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.04.11
         *
         * 설  명		: Claim대상 마감월 등록
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.11	진성하   	최초작성
         * 2021.07.01   김진현     수정 (불량코드 (DEFECTCODE -> JOINCODE) / 불량명 (DEFECTNAME -> JOINNAME)) 그리드 상 변경 (주석 작성 불가능 내용)
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";

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
        	//this.div_page.set_visible(true);

        	// (21.07.01) - 추가 협력사 id x 버튼 이벤트 수정
        	this.tab_search.Tabpage1.form.btn_edt_OSPVENDORID.setEventHandler("onclick", this.fn_xClickOSPVENDORID, this );

        	// paging
        	//this.fn_paging_onload(obj);
        	// paging end
        	this.tab_search_Tabpage1_cbo_period_onitemchanged();
        	this.fv_currDate = this.nfn_getCurrentSystemTime();

        	this.tab_search.Tabpage1.form.cbo_plantid.set_value(this.gf_getSiteType());

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());
        	var sSvcID = "selectGetFactoryListByCsm";
        	var sController = "/osm00300/selectGetFactoryListByCsm.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_factory=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

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
        	var component = this.tab_search.Tabpage1;
        	var strColIdList = "cbo_plantid";
        	var strColNmList = "SITE";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	this.ds_osmOspclaim.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cbo_plantid.value);
        	this.ds_search.setColumn(0, "PERIOD_PERIODFR", this.tab_search.Tabpage1.form.cal_requestdate_from.value);
        	this.ds_search.setColumn(0, "PERIOD_PERIOTO", this.tab_search.Tabpage1.form.cal_requestdate_to.value);
        	if(!this.gfn_isNull(this.tab_search.Tabpage1.form.div_PERIODNAME.form.msk_month.value))
        		this.ds_search.setColumn(0, "PERIODNAME", this.tab_search.Tabpage1.form.div_PERIODNAME.form.msk_month.text);
        	this.ds_search.setColumn(0, "FACTORYID", this.tab_search.Tabpage1.form.cbo_FACTORYID.value);
        	this.ds_search.setColumn(0, "AREAID", this.tab_search.Tabpage1.form.edt_AREAID_id.value);
        	//(21.07.01) - 협력사 id 수정
        	//this.ds_search.setColumn(0, "OSPVENDORID", this.tab_search.Tabpage1.form.edt_OSPVENDORID.value);
        	this.ds_search.setColumn(0, "OSPVENDORID", this.tab_search.Tabpage1.form.edt_OSPVENDORID_id.value);
        	this.ds_search.setColumn(0, "OSPVENDORNAME", this.tab_search.Tabpage1.form.edt_OSPVENDORNAME.value);
        	this.ds_search.setColumn(0, "PRODUCTDEFID", this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value);
        	this.ds_search.setColumn(0, "LOTTYPE", this.tab_search.Tabpage1.form.cbo_LOTTYPE.value);
        	this.ds_search.setColumn(0, "LOTID", this.tab_search.Tabpage1.form.edt_LOTID.value);
        	this.ds_search.setColumn(0, "CLOSEYESNO", this.tab_search.Tabpage1.form.cbo_CLOSEYESNO.value);
        	this.ds_search.setColumn(0, "PERIODTYPEOSP", "OutSourcing");


        	var sSvcID = "selectOsmOspclaimList";
        	var sController = "/osm00300/selectOsmOspclaimList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_osmOspclaim=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        };

        /*
         * 기능 : 신규
         */
        this.fn_new = function(obj,e)
        {
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        };


        /*
         * 기능 : 삭제
         */
        this.fn_delelete = function(obj,e)
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
        	if (errCD < 0)
        	{
        		this.gfn_Message(errMsg, "", "error", "ok");
        		//this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "saveCloseProcess")
        		{
        			this.gfn_Message("ProcessingSuccess", null, "info", "ok");
        			this.fn_search();
        		}
        		else if (trId == "saveCloseCancel")
        		{
        			this.gfn_Message("ProcessingSuccess", null, "info", "ok");
        			this.fn_search();
        		}
        		// selectOsmOspclaimList (21.07.01)
        		else if (trId == "selectOsmOspclaimList")
        		{
        			// 조회 완료 후 ()
        			if(this.ds_osmOspclaim.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        			}
        			// (21.07.01) - 선택된 마감년월이 있으면 마감 상태 재조회
        			var nPeriod = this.div_work.form.div_PERIODNAME.form.msk_month.value;
        			if(!this.gfn_isNull(nPeriod))
        			{
        				//trace(" =======> 조회 후 : "+nPeriod+" || [?] "+this.div_work.form.edt_PERIODID.value);
        				this.ds_periodState.clearData();
        				this.ds_searchReCloseState.clearData();
        				var nAddRow = this.ds_searchReCloseState.addRow();
        				this.ds_searchReCloseState.setColumn(nAddRow, "PERIODTYPE", "Claim");
        				this.ds_searchReCloseState.setColumn(nAddRow, "PLANTID", this.tab_search.Tabpage1.form.cbo_plantid.value);
        				this.ds_searchReCloseState.setColumn(nAddRow, "CLOSEYM", nPeriod);

        				var sSvcID = "selectChkPeriodState";
        				var sController = "/osm00300/selectChkPeriodState.do";
        				var sInDatasets = "INPUT=ds_searchReCloseState";
        				var sOutDatasets = "ds_periodState=output";
        				var sArgs = "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        			}
        		}
        		else if (trId == "selectChkPeriodState")
        		{
        			// (21..07.01) 재조회된 마감년원 상태를 설정 한다.
        			var nState = this.ds_periodState.getColumn(0,"PERIODSTATE");
        			this.div_work.form.edt_PERIODSTATE.set_value(nState);
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

        	if(sPopupId == "AREA")
        	{
        		this.tab_search.Tabpage1.form.edt_AREAID_id.set_value(rtn[0]);
        		this.tab_search.Tabpage1.form.edt_AREAID.set_value(rtn[1]);
        	}
        	if(sPopupId == "AREA2")
        	{
        		this.ds_osmOspclaim.setColumn(this.ds_osmOspclaim.rowposition,"AREAID",rtn[0]);
        		this.div_work.form.div.form.edt_AREAID_nm.set_value(rtn[1]);
        		this.ds_osmOspclaim.setColumn(this.ds_osmOspclaim.rowposition,"OSPVENDORID",rtn[2]);
        		this.div_work.form.div.form.edt_OSPVENDORNAME.set_value(rtn[3]);
        	}
        	if(sPopupId == "OSPVENDORID")
        	{
        		this.tab_search.Tabpage1.form.edt_OSPVENDORID_id.set_value(rtn[0]);
        		this.tab_search.Tabpage1.form.edt_OSPVENDORID.set_value(rtn[1]);
        	}
        	if(sPopupId == "PRODUCTDEFID")
        	{
        		this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.set_value(rtn[0]);
        		this.tab_search.Tabpage1.form.edt_PRODUCTDEFID_nm.set_value(rtn[1]);
        		this.tab_search.Tabpage1.form.edt_PRODUCTDEFID_id.set_value(rtn[2]);
        		this.tab_search.Tabpage1.form.edt_PROCESSDEFID.set_value(rtn[3]);
        		this.tab_search.Tabpage1.form.edt_PROCESSDEFVERSION.set_value(rtn[4]);
        	}
        	if(sPopupId == "PERIODNAME")
        	{
        		this.div_work.form.div_PERIODNAME.form.msk_month.set_value(rtn[0]);
        		this.div_work.form.edt_PERIODSTATE.set_value(rtn[1]);
        		this.div_work.form.edt_PERIODID.set_value(rtn[2]);
        	}



        }
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/


        /*
         * 협력사 x 버튼 이벤트 (21.07.01)
         */
        this.fn_xClickOSPVENDORID  = function ()
        {
        	this.tab_search.Tabpage1.form.edt_OSPVENDORID.set_value("");
        	this.tab_search.Tabpage1.form.edt_OSPVENDORID_id.set_value("");
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search_Tabpage1_cbo_period_onitemchanged = function(obj,e)
        {
        	var val = this.tab_search.Tabpage1.form.cbo_period.value; //var val = e.postvalue
        	if(this.gfn_isNull(val)) return;

        	var sDate = this.nfn_getCurrentSystemTime(0,0,val);
        	var arrDate = sDate.split(",");
        	var sDateFrom = arrDate[1];
        	var sDateTo = arrDate[2];
        	var sTime = "0000";

        	var requestdateFrom = this.tab_search.Tabpage1.form.cal_requestdate_from.value;
        	var requestdateTo = this.tab_search.Tabpage1.form.cal_requestdate_to.value;

        	if(!this.gfn_isNull(requestdateFrom) && requestdateTo.length>=12){
        		sTime = requestdateTo.substring(8,12);
        	}
        	this.tab_search.Tabpage1.form.cal_requestdate_from.set_value(sDateFrom+sTime);
        //	if(!this.gfn_isNull(requestdateTo) && requestdateTo.length==12){
        //		sTime = requestdateTo.substring(8,12);
        //	}
        	this.tab_search.Tabpage1.form.cal_requestdate_to.set_value(sDateTo+sTime);
        };

        this.tab_search_Tabpage1_btn_AREAID_onclick = function(obj,e)
        {
        	var popupId = "AREA";
        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00232";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "AREAID|AREANAME";
        	oArg.arg_paramCols = "PLANTID";
        	oArg.arg_paramValues = this.tab_search.Tabpage1.form.cbo_plantid.value;
        	oArg.arg_searchStr = "AREANAME="+this.tab_search.Tabpage1.form.edt_AREAID.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };

        this.tab_search_Tabpage1_btn_OSPVENDORID_onclick = function(obj,e)
        {
        	var popupId = "OSPVENDORID";
        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00233";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "OSPVENDORID|OSPVENDORNAME";
        	oArg.arg_paramCols = "PLANTID";
        	oArg.arg_paramValues = this.tab_search.Tabpage1.form.cbo_plantid.value;
        	oArg.arg_searchStr = "OSPVENDORNAME="+this.tab_search.Tabpage1.form.edt_OSPVENDORID.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };

        this.div_work_btn_addRow_ds_osmOspclaim_onclick = function(obj,e)
        {
        	var nRow = this.ds_osmOspclaim.rowposition;
        	this.ds_osmOspclaim.setColumn(nRow,"CLAIMDATE",this.fv_currDate.substring(0,8));
        	this.ds_osmOspclaim.setColumn(nRow,"CLAIMDEPARTMENT",this.gf_getDeptCd());
        	this.ds_osmOspclaim.setColumn(nRow,"DEPARTMENT",this.gf_getDeptNm());
        	this.ds_osmOspclaim.setColumn(nRow,"CLAIMUSER",this.gf_getUserId());
        	this.ds_osmOspclaim.setColumn(nRow,"CLAIMUSERNAME",this.gf_getUserNm());
        	this.ds_osmOspclaim.setColumn(nRow,"PLANTID",this.tab_search.Tabpage1.form.cbo_plantid.value);
        };

        this.div_work_btn_delRow_onclick = function(obj,e)
        {
        	if(!this.gfn_isNull(this.ds_osmOspclaim.getColumn(this.ds_osmOspclaim.rowposition,"PERIODID"))){
        		this.gfn_Message("InValidOspData014", null, "info", "ok");
        		return;
        	}
        	if(this.ds_osmOspclaim.getRowType(this.ds_osmOspclaim.rowposition)!=2){
        		var bOK = this.gfn_Message("OspDoProcessWant", "DELETE", "conf", "yesno");//삭제 처리를 하시겠습니까?
        		if (bOK == false) return;
        	}

        	this.ds_osmOspclaim.deleteRow(this.ds_osmOspclaim.rowposition);
        };

        this.div_header_btn_saveCloseperiod_onclick = function(obj,e)
        {
        	var popupId = "Closeperiod";
        	var oArg = {};
        	oArg.arg_palntid = this.tab_search.Tabpage1.form.cbo_plantid.value;
        	this.gfn_openPopup(popupId,"osm::OSM00301P.xfdl",oArg,"");
        };

        this.div_work_btn_PERIODNAME_onclick = function(obj,e)
        {
        	var popupId = "PERIODNAME";
        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00237";
        	oArg.arg_popupNm = "마감년월";
        	oArg.arg_rtnCols =  "PERIODNAME|PERIODSTATE|PERIODID";
        	oArg.arg_paramCols = "PERIODTYPE|PLANTID";
        	oArg.arg_paramValues = "Claim"+"|"+this.tab_search.Tabpage1.form.cbo_plantid.value;
        	if(!this.gfn_isNull(this.div_work.form.div_PERIODNAME.form.msk_month.value))
        		oArg.arg_searchStr = "PERIODNAME="+this.div_work.form.div_PERIODNAME.form.msk_month.text;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };

        this.div_header_btn_saveCloseProcess_onclick = function(obj,e)
        {
        	var component = this.div_work;
        	var strColIdList = "edt_PERIODID";
        	var strColNmList = "CLOSEYM";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	if(this.div_work.form.edt_PERIODSTATE.value!="Open"){
        		this.gfn_Message("InValidOspData012", "", "warning", "ok");
        		return;
        	}

        	if(this.ds_osmOspclaim.findRow("CHK","1")<0){
        		this.gfn_Message("GridNoChecked", null, "warning", "ok");	//체크된 행이 없습니다
        		return;
        	}
        	var cnt = 0;

        	for(var i=0; i<this.ds_osmOspclaim.rowcount; i++){
        		if(this.ds_osmOspclaim.getColumn(i,"CHK")!="1") continue;

        		if(this.ds_osmOspclaim.getColumn(i,"PERIODSTATE")=="Close"){
        			if(this.ds_osmOspclaim.getColumn(i,"WORKGUBUN")=="LOTCLAIMDEFECT"){
        				var index = this.ds_osmOspclaim.getColIndex("LOTID");
        				this.gfn_Message("InValidOspData010",this.div_work.form.grd_osmOspclaim.getCellProperty( "head", index, "text" )+ this.ds_osmOspclaim.getColumn(i,"LOTID"), "warning", "ok");
        				return;
        			}else{
        				var index = this.ds_osmOspclaim.getColIndex("OSPVENDORNAME");
        				this.gfn_Message("InValidOspData010",this.div_work.form.grd_osmOspclaim.getCellProperty( "head", index, "text" )+ this.ds_osmOspclaim.getColumn(i,"OSPVENDORNAME"), "warning", "ok");
        				return;
        			}
        		}
        		if(this.ds_osmOspclaim.getColumn(i,"ISCLOSE")=="N"){
        			cnt++;
        		}
        	}

        	if(cnt == 0){
        		this.gfn_Message("OspDataCountCheck", obj.text, "warning", "ok");	//{0}에 해당하는 건이 없습니다.
        		return;
        	}

        	var bOK = this.gfn_Message("OspDoProcessWant", "Toolbar_CloseProcess", "conf", "yesno");// 처리를 하시겠습니까?
        	if (bOK == false) return;

        	for(var i=0; i<this.ds_osmOspclaim.rowcount; i++){
        		if(this.ds_osmOspclaim.getColumn(i,"CHK")!="1") continue;
        		if(this.ds_osmOspclaim.getColumn(i,"ISCLOSE")=="N"){
        			this.ds_osmOspclaim.setColumn(i,"PERIODID",this.div_work.form.edt_PERIODID.value);
        			this.ds_osmOspclaim.setColumn(i,"ISCLOSE","Y");
        		}
        	}

        	//trace("저장전 확인 : "+this.ds_osmOspclaim.saveXML());

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveCloseProcess";
        	var sController = "/osm00300/saveCloseProcess.do";
        	var sInDatasets = "INPUT=ds_osmOspclaim";
        	var sOutDatasets = "";

        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.div_header_btn_saveCloseCancel_onclick = function(obj,e)
        {
        	if(this.ds_osmOspclaim.findRow("CHK","1")<0){
        		this.gfn_Message("GridNoChecked", null, "warning", "ok");	//체크된 행이 없습니다
        		return;
        	}
        	var cnt = 0;
        	for(var i=0; i<this.ds_osmOspclaim.rowcount; i++){
        		if(this.ds_osmOspclaim.getColumn(i,"CHK")!="1") continue;

        		if(this.ds_osmOspclaim.getColumn(i,"PERIODSTATE")=="Close"){
        			if(this.ds_osmOspclaim.getColumn(i,"WORKGUBUN")=="LOTCLAIMDEFECT"){
        				var index = this.ds_osmOspclaim.getColIndex("LOTID");
        				this.gfn_Message("InValidOspData010",this.div_work.form.grd_osmOspclaim.getCellProperty( "head", index, "text" )+ this.ds_osmOspclaim.getColumn(i,"LOTID"), "warning", "ok");
        				return;
        			}else{
        				var index = this.ds_osmOspclaim.getColIndex("OSPVENDORNAME");
        				this.gfn_Message("InValidOspData010",this.div_work.form.grd_osmOspclaim.getCellProperty( "head", index, "text" )+ this.ds_osmOspclaim.getColumn(i,"OSPVENDORNAME"), "warning", "ok");
        				return;
        			}
        		}

        		if(this.gfn_isNull(this.ds_osmOspclaim.getColumn(i,"PERIODID"))){
        			this.gfn_Message("InValidOspData022", null, "warning", "ok");	//마감월 확정되지 않은 자료가 존재합니다.
        			return;
        		}
        		if(this.ds_osmOspclaim.getColumn(i,"ISCLOSE")=="Y"){
        			cnt++;
        		}
        		if(cnt == 0){
        			this.gfn_Message("OspDataCountCheck", obj.text, "warning", "ok");	//{0}에 해당하는 건이 없습니다.
        			return;
        		}
        	}

        	for(var i=0; i<this.ds_osmOspclaim.rowcount; i++){
        		if(this.ds_osmOspclaim.getColumn(i,"CHK")!="1") continue;
        		if(this.ds_osmOspclaim.getColumn(i,"ISCLOSE")=="Y"){
        			//(21.06.22) 해당 값이 있어야 업데이트 가능
        			//this.ds_osmOspclaim.setColumn(i,"PERIODID","");
        			this.ds_osmOspclaim.setColumn(i,"ISCLOSE","N");
        		}
        	}

        	var bOK = this.gfn_Message("OspDoProcessWant", "Toolbar_CloseCancel", "conf", "yesno");// 처리를 하시겠습니까?
        	if (bOK == false) return;
        	for(var i=0; i<this.ds_osmOspclaim.rowcount; i++){
        		if(this.ds_osmOspclaim.getColumn(i,"CHK")!="1") continue;
        		if(this.ds_osmOspclaim.getColumn(i,"ISCLOSE")=="Y"){
        			//(21.06.22) 해당 값이 있어야 업데이트 가능
        			//this.ds_osmOspclaim.setColumn(i,"PERIODID","");
        			this.ds_osmOspclaim.setColumn(i,"ISCLOSE","N");
        		}
        	}
        	// (21.06.22) 확인
        	//trace(" ===> : "+this.ds_osmOspclaim.saveXML());

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveCloseCancel";
        	var sController = "/osm00300/saveCloseProcess.do";
        	var sInDatasets = "INPUT=ds_osmOspclaim";
        	var sOutDatasets = "";

        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	var popupId = "PRODUCTDEFID";
        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00215";
        	oArg.arg_popupNm = "품목코드";
        	oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION|PROCESSDEFID|PROCESSDEFVERSION";
        	oArg.arg_paramCols = "ENTERPRISEID|PLANTID";
        	oArg.arg_paramValues = this.gf_getEnterpriseId()+"|"+this.tab_search.Tabpage1.form.cbo_plantid.value;
        	oArg.arg_searchStr = "PRODUCTDEFID="+this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_AREAID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_AREAID_onclick,this);
            this.tab_search.Tabpage1.form.btn_OSPVENDORID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_OSPVENDORID_onclick,this);
            this.tab_search.Tabpage1.form.cbo_period.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_period_onitemchanged,this);
            this.tab_search.Tabpage1.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_saveCloseProcess.addEventHandler("onclick",this.div_header_btn_saveCloseProcess_onclick,this);
            this.div_header.form.btn_saveCloseCancel.addEventHandler("onclick",this.div_header_btn_saveCloseCancel_onclick,this);
            this.div_header.form.btn_saveCloseperiod.addEventHandler("onclick",this.div_header_btn_saveCloseperiod_onclick,this);
            this.div_work.form.btn_PERIODNAME.addEventHandler("onclick",this.div_work_btn_PERIODNAME_onclick,this);
        };
        this.loadIncludeScript("OSM00300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
