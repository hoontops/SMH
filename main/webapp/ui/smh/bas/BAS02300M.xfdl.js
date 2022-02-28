(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS02300M");
            this.set_titletext("승인처리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,757);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"INVENTORYCATEGORY\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"EXCEPTYN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basApproval", this);
            obj._setContents("<ColumnInfo><Column id=\"APPROVALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTOR\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"DATE\" size=\"256\"/><Column id=\"REVIEWER\" type=\"STRING\" size=\"256\"/><Column id=\"REVIEWDATE\" type=\"DATE\" size=\"256\"/><Column id=\"APPROVER\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVEDATE\" type=\"DATE\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECPERSON\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REVIEWERID\" type=\"STRING\" size=\"256\"/><Column id=\"REVIEWERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REJECTREASON\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCENO\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basApprovaltransaction", this);
            obj._setContents("<ColumnInfo><Column id=\"APPROVALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RESULTS\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDATE\" type=\"DATE\" size=\"256\"/><Column id=\"ENDDATE\" type=\"DATE\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ACCEPTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"REVIEWERID\" type=\"STRING\" size=\"256\"/><Column id=\"REVIEWERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCEPTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"ACCEPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REJECTREASON\" type=\"STRING\" size=\"256\"/><Column id=\"REJECTDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_period", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basApprovalOne", this);
            obj._setContents("<ColumnInfo><Column id=\"APPROVALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTOR\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"DATE\" size=\"256\"/><Column id=\"REVIEWER\" type=\"STRING\" size=\"256\"/><Column id=\"REVIEWDATE\" type=\"DATE\" size=\"256\"/><Column id=\"APPROVER\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVEDATE\" type=\"DATE\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SPECPERSON\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REVIEWERID\" type=\"STRING\" size=\"256\"/><Column id=\"REVIEWERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REJECTREASON\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCENO\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_taborder("5");
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

            obj = new Static("label02","0","87","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("고객ID");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CUSTOMER");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_CUSTOMER","108","87",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_CUSTOMER",null,"87","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","295","107","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","295","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"30","15","387","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","40","15","387",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_CUSTOMER_id","108","455",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_visible("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_requestdate_from","108","35","165","21",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_url("common::com_calendar.xfdl");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_00","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("05CA3CAD5FFF4A36916B10CF981DD22D");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_requestdate_to","108","61","165","21",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_url("common::com_calendar.xfdl");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"56","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00_00",null,"82","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTIONTYPE","108","112","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_01","0","112","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("D57CEACBBF444719B36E5057396A4FB6");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_ITEMID","108","137",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_ITEMID",null,"137","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00","0","137","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00_00","0","162","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_ITEMID_nm","108","162",null,"20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_enable("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_APPROVALSTATUS","108","187","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_codecolumn("C,ApprovalStatus,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_01_00","0","187","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSINGSTATUS");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_SPECOWNER","108","213",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_SPECOWNER",null,"213","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00_01","0","213","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_text("사양담당자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SPECOWNER");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_period","14","61","89","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_codecolumn("code");
            obj.set_innerdataset("gds_period");
            obj.set_datacolumn("desc");
            obj.set_text("금일");
            obj.set_value("today");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_SPECOWNER_id","108","541",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_visible("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staGovernanceState00","0","238","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("승인제외");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("EXCEPTINPUT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("chk_exceptInput","108","237","141","25",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_value("N");
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

            obj = new Button("btn_saveAppr",null,"15","51","24","57",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("승인");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_saveArbitrary",null,"15","51","24","100",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_text("전결");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_saveReturn",null,"15","51","24","140",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_text("반려");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_00_00",null,"15","98","24","btn_saveReturn:0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("10");
            obj.set_text("이력카드출력");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_basApproval","0","34",null,null,"0","309",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_basApproval");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"126\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"157\"/><Column size=\"69\"/><Column size=\"68\"/><Column size=\"68\"/><Column size=\"80\"/><Column size=\"212\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"의뢰일\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"승인유형\"/><Cell col=\"3\" text=\"생산구분\"/><Cell col=\"4\" text=\"고객명\"/><Cell col=\"5\" text=\"품목코드\"/><Cell col=\"6\" text=\"Rev.\"/><Cell col=\"7\" text=\"품목명\"/><Cell col=\"8\" text=\"사양담당자\"/><Cell col=\"9\" text=\"검토자명\"/><Cell col=\"10\" text=\"승인자명\"/><Cell col=\"11\" text=\"승인일\"/><Cell col=\"12\" text=\"반려사유\"/></Band><Band id=\"body\"><Cell text=\"bind:REQUESTDATE\" displaytype=\"date\"/><Cell col=\"1\" text=\"bind:APPROVALSTATUS\" displaytype=\"combotext\" combocodecol=\"C,ApprovalStatus,,Y,N\"/><Cell col=\"2\" text=\"bind:APPROVALTYPE\" combocodecol=\"C,ApprovalType,,Y,N\" displaytype=\"combotext\"/><Cell col=\"3\" text=\"bind:PRODUCTIONTYPE\" combocodecol=\"C,ProductionType,,Y,N\" displaytype=\"combotext\"/><Cell col=\"4\" text=\"bind:CUSTOMERNAME\"/><Cell col=\"5\" text=\"bind:ITEMID\"/><Cell col=\"6\" text=\"bind:ITEMVERSION\"/><Cell col=\"7\" text=\"bind:ITEMNAME\"/><Cell col=\"8\" text=\"bind:SPECOWNERNAME\"/><Cell col=\"9\" text=\"bind:REVIEWERNAME\"/><Cell col=\"10\" text=\"bind:APPROVERNAME\"/><Cell col=\"11\" text=\"bind:APPROVEDATE\" displaytype=\"date\"/><Cell col=\"12\" text=\"bind:REJECTREASON\" edittype=\"normal\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_basApprovaltransaction","0",null,null,"265","0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_basApprovaltransaction");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"94\"/><Column size=\"80\"/><Column size=\"135\"/><Column size=\"236\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"승인상태\"/><Cell col=\"1\" text=\"승인자\"/><Cell col=\"2\" text=\"승인일시\"/><Cell col=\"3\" text=\"반려사유\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCEPTSTATE\" displaytype=\"combotext\" combocodecol=\"C,ApprovalStatus,,Y,N\"/><Cell col=\"1\" text=\"bind:ACCEPTUSER\"/><Cell col=\"2\" text=\"bind:ACCEPTDATE\"/><Cell col=\"3\" text=\"bind:REJECTREASON\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","108","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("승인처리");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("GRIDMESSAGELIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_basApproval","sta_subTitle:20","0",null,"34","761",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","5",null,"108","34",null,"266",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("처리현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("GRIDMESSAGELIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_basApprovaltransaction","sta_subTitle00:20",null,null,"34","761","266",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basApproval",null,"6","29","24","5",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basApprovaltransaction",null,"416","29","24","5",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,757,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_calendar.xfdl");
        };
        
        // User Script
        this.registerScript("BAS02300M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: ID Serial 관리
         * 파일명 		: CMD00100.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.01.11
         *
         * 설  명		: ID Serial 조회/수정/삭제/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.01.11	진성하   	최초작성
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

        	// paging
        	//this.fn_paging_onload(obj);
        	// paging end

        	//alert(this.nfn_getCurrentSystemTime(0,10));

        	this.tab_search.Tabpage1.form.cbo_period.set_value("thismonth");
        	this.tab_search_Tabpage1_cbo_period_onitemchanged();
        	this.tab_search.Tabpage1.form.chk_exceptInput.set_value("Y");
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
        	var strColIdList = "cbo_plantid,div_requestdate_from,div_requestdate_to,";
        	var strColNmList = "SITE,05CA3CAD5FFF4A36916B10CF981DD22D,05CA3CAD5FFF4A36916B10CF981DD22D";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	this.ds_basApproval.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cbo_plantid.value);
        	this.ds_search.setColumn(0, "REQUESTDATE_FROM", this.tab_search.Tabpage1.form.div_requestdate_from.form.calStart.value);
        	this.ds_search.setColumn(0, "REQUESTDATE_TO", this.tab_search.Tabpage1.form.div_requestdate_to.form.calStart.value);
        	this.ds_search.setColumn(0, "CUSTOMER", this.tab_search.Tabpage1.form.edt_CUSTOMER_id.value);
        	//this.ds_search.setColumn(0, "INVENTORYCATEGORY", this.tab_search.Tabpage1.form.edt.value);
        	//this.ds_search.setColumn(0, "APPROVALTYPE", this.tab_search.Tabpage1.form.cbo_id.value);
        	this.ds_search.setColumn(0, "PRODUCTIONTYPE", this.tab_search.Tabpage1.form.cbo_PRODUCTIONTYPE.value);
        	this.ds_search.setColumn(0, "APPROVALSTATUS", this.tab_search.Tabpage1.form.cbo_APPROVALSTATUS.value);
        	this.ds_search.setColumn(0, "ITEMID", this.tab_search.Tabpage1.form.edt_ITEMID.value);
        	//this.ds_search.setColumn(0, "PRODUCTNAME", this.tab_search.Tabpage1.form.edt.value);
        	this.ds_search.setColumn(0, "SPECOWNER", this.tab_search.Tabpage1.form.edt_SPECOWNER_id.value);
        	this.ds_search.setColumn(0, "EXCEPTYN", this.tab_search.Tabpage1.form.chk_exceptInput.value);

        	var sSvcID = "selectBasApprovalList";
        	var sController = "/bas02300/selectBasApprovalList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_basApproval=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.tab_search.Tabpage1.form.cbo_period.set_value("thismonth");
        	this.tab_search_Tabpage1_cbo_period_onitemchanged();
        };

        /*
         * 기능 : 신규
         */
        this.fn_new = function(obj,e)
        {
        };

        /*
         * 기능 : 저장(승인)
         */
        this.fn_saveApprove = function (obj, e)
        {
        	var isStep;
        	/*
        	if(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"REVIEWERID") != this.gf_getUserId()
        		&& this.gfn_isNull(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"REVIEWDATE"))){
        		this.gfn_Message("NOTPERMISSIONAPPROVE", null, "info", "ok");//승인 권한이 없습니다.
        		return;
        	}
        	if(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVER") != this.gf_getUserId()
        		&& this.gfn_isNull(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVEDATE"))
        		&& !this.gfn_isNull(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"REVIEWDATE"))){
        		this.gfn_Message("NOTPERMISSIONAPPROVE", null, "info", "ok");//승인 권한이 없습니다.
        		return;
        	}
        	if(!this.gfn_isNull(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"REVIEWDATE"))){
        		if(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVALSTATUS")=="Approval"){
        			this.gfn_Message("ALREADYAPPROVED", null, "info", "ok");//이미 승인 완료하였습니다.
        			return;
        		}else if(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVALSTATUS")=="Reject"){
        			this.gfn_Message("ALREADYREJECTED", null, "info", "ok");//
        			return;
        		}
        	}
        	if(!this.gfn_isNull(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVEDATE"))){
        		if(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVALSTATUS")=="Approval"){
        			this.gfn_Message("ALREADYAPPROVED", null, "info", "ok");//이미 승인 완료하였습니다.
        			return;
        		}else if(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVALSTATUS")=="Reject"){
        			this.gfn_Message("ALREADYREJECTED", null, "info", "ok");//
        			return;
        		}
        	}
        	*/
        	if(!this.fn_validApproval("Approval")){return};

        	var bOK = this.gfn_Message("SaveApproval", null, "conf", "yesno");//승인처리 하시겠습니까?
        	if (bOK == false) return;

        	this.ds_basApprovalOne.clearData();
        	this.ds_basApprovalOne.addRow();
        	this.ds_basApprovalOne.copyRow(0,this.ds_basApproval,this.ds_basApproval.rowposition);

        	// 검토자 여부 체크
        	if(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"REVIEWERID") == this.gf_getUserId()){
        		isStep = "1";
        	}
        	// 승인자 여부 체크
        	if(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVER") == this.gf_getUserId()){
        		isStep = "2";
        	}

        	this.ds_basApprovalOne.setColumn(0,"REQ_STATUS",isStep=="1" ? "Review":"Approval");
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveBasApproval";
        	var sController = "/bas02300/saveBasApproval.do";
        	var sInDatasets = "INPUT=ds_basApprovalOne:U";
        	var sOutDatasets = "";

        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "saveBasApproval")
        		{
        			this.gfn_Message("ProcessingSuccess", null, "info", "ok");
        			this.fn_search();
        		}
        		else if (trId == "selectEcmLookupValuesVList2ds_CValidState")
        		{
        			this.tab_search.Tabpage1.form.cbo_validstate.set_index(0);
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

        	if(sPopupId == "SEARCH_CUSTOMER")
        	{
        		var str="";
        		var str_id="";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			trace(colArray);
        			var str0 = (i==0) ? "" : "," ;
        			str_id = str_id + str0 + colArray[0];
        			str = str + str0 + colArray[1];
        		}
        		this.tab_search.Tabpage1.form.edt_CUSTOMER_id.set_value(str_id);
        		this.tab_search.Tabpage1.form.edt_CUSTOMER.set_value(str);
        	}

        	if(sPopupId == "SEARCH_ITEMID")
        	{
        		var str="";
        		var str_id="";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			trace(colArray);
        			var str0 = (i==0) ? "" : "," ;
        			str_id = str_id + str0 + colArray[0]+"|"+colArray[2];
        			str = str + str0 + colArray[1];
        		}
        		this.tab_search.Tabpage1.form.edt_ITEMID.set_value(str_id);
        		this.tab_search.Tabpage1.form.edt_ITEMID_nm.set_value(str);
        	}

        	if(sPopupId == "SEARCH_DEPT")
        	{
        		var str="";
        		var str_id="";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			trace(colArray);
        			var str0 = (i==0) ? "" : "," ;
        			str_id = str_id + str0 + colArray[0];
        			str = str + str0 + colArray[1];
        		}
        		this.tab_search.Tabpage1.form.edt_SPECOWNER.set_value(str);
        		this.tab_search.Tabpage1.form.edt_SPECOWNER_id.set_value(str_id);
        	}

        }
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.div_work_grd_basApproval_onselectchanged = function(obj,e)
        {
        	this.ds_basApprovaltransaction.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "APPROVALID", this.ds_basApproval.getColumn(e.row,"APPROVALID"));
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.ds_basApproval.getColumn(e.row,"ENTERPRISEID"));

        	var sSvcID = "selectBasApprovaltransactionList";
        	var sController = "/bas02300/selectBasApprovaltransactionList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_basApprovaltransaction=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.tab_search_Tabpage1_cbo_period_canitemchange = function(obj,e)
        {


        };

        this.div_header_btn_saveReturn_onclick = function(obj,e)
        {
        	/*
        	if(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"REVIEWERID") != this.gf_getUserId()
        		&& this.gfn_isNull(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"REVIEWDATE"))
        		){
        		this.gfn_Message("NOTPERMISSIONREJECT", null, "info", "ok");//반려 권한이 없습니다.
        		return;
        	}
        	if(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVER") != this.gf_getUserId()
        		//&& this.gfn_isNull(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVEDATE"))
        		//&& !this.gfn_isNull(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"REVIEWDATE"))
        		){
        		this.gfn_Message("NOTPERMISSIONREJECT", null, "info", "ok");//반려 권한이 없습니다.
        		return;
        	}
        	if(!this.gfn_isNull(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"REVIEWDATE"))){
        		if(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVALSTATUS")=="Approval"){
        			this.gfn_Message("ALREADYAPPROVED", null, "info", "ok");//이미 승인 완료하였습니다.
        			return;
        		}else if(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVALSTATUS")=="Reject"){
        			this.gfn_Message("ALREADYREJECTED", null, "info", "ok");//
        			return;
        		}
        	}
        	if(!this.gfn_isNull(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVEDATE"))){
        		if(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVALSTATUS")=="Approval"){
        			this.gfn_Message("ALREADYAPPROVED", null, "info", "ok");//이미 승인 완료하였습니다.
        			return;
        		}else if(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVALSTATUS")=="Reject"){
        			this.gfn_Message("ALREADYREJECTED", null, "info", "ok");//
        			return;
        		}
        	}
        	*/
        	if(!this.fn_validApproval("Reject")){return};


        	var rejectReason = this.ds_basApproval.getColumn(this.ds_basApproval.rowposition, "REJECTREASON");
        	if(this.gfn_isNull(rejectReason)){
        		this.gfn_Message("SomethingRequired", this.nfn_getDictionarynameUpper("REJECTREASON"), "info", "ok");
        		return;
        	}

        	var bOK = this.gfn_Message("ReturnApproval", null, "conf", "yesno");//반려처리 하시겠습니까?
        	if (bOK == false) return;



        	this.ds_basApprovalOne.clearData();
        	this.ds_basApprovalOne.addRow();
        	this.ds_basApprovalOne.copyRow(0,this.ds_basApproval,this.ds_basApproval.rowposition);
        	this.ds_basApprovalOne.setColumn(0,"REQ_STATUS","Reject");
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveBasApproval";
        	var sController = "/bas02300/saveBasApproval.do";
        	var sInDatasets = "INPUT=ds_basApprovalOne:U";
        	var sOutDatasets = "";

        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.div_header_btn_saveArbitrary_onclick = function(obj,e)
        {
        	/*
        	if(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"REVIEWERID") != this.gf_getUserId()
        		&& this.gfn_isNull(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"REVIEWDATE"))){
        		this.gfn_Message("NOTPERMISSIONMASTERAPPROVE", null, "info", "ok");//전결 처리 권한이 없습니다.
        		return;
        	}
        	if(!this.gfn_isNull(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"REVIEWDATE"))){
        		if(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVALSTATUS")=="Approval"){
        			this.gfn_Message("ALREADYAPPROVED", null, "info", "ok");//이미 승인 완료하였습니다.
        			return;
        		}else if(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVALSTATUS")=="Reject"){
        			this.gfn_Message("ALREADYREJECTED", null, "info", "ok");//
        			return;
        		}
        	}
        	if(!this.gfn_isNull(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVEDATE"))){
        		if(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVALSTATUS")=="Approval"){
        			this.gfn_Message("ALREADYAPPROVED", null, "info", "ok");//이미 승인 완료하였습니다.
        			return;
        		}else if(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVALSTATUS")=="Reject"){
        			this.gfn_Message("ALREADYREJECTED", null, "info", "ok");//
        			return;
        		}
        		return;
        	}
        	*/

        	if(!this.fn_validApproval("Arbitrary")){return};

        	var bOK = this.gfn_Message("DecideArbitrarily", null, "conf", "yesno");//전결처리 하시겠습니까?
        	if (bOK == false) return;

        	this.ds_basApprovalOne.clearData();
        	this.ds_basApprovalOne.addRow();
        	this.ds_basApprovalOne.copyRow(0,this.ds_basApproval,this.ds_basApproval.rowposition);
        	this.ds_basApprovalOne.setColumn(0,"REQ_STATUS","Arbitrary");
        	//trace(this.ds_basApprovalOne.saveXML());
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveBasApproval";
        	var sController = "/bas02300/saveBasApproval.do";
        	var sInDatasets = "INPUT=ds_basApprovalOne:U";
        	var sOutDatasets = "";

        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };



        this.tab_search_Tabpage1_cbo_period_onitemchanged = function(obj,e)
        {
        	var val = this.tab_search.Tabpage1.form.cbo_period.value; //var val = e.postvalue
        	if(this.gfn_isNull(val)) return;

        	var sDate = this.nfn_getCurrentSystemTime(0,0,val);
        	var arrDate = sDate.split(",");
        	var sDateFrom = arrDate[1];
        	var sDateTo = arrDate[2];
        	var sTime = "0830";

        	var requestdateFrom = this.tab_search.Tabpage1.form.div_requestdate_from.form.calStart.value;
        	var requestdateTo = this.tab_search.Tabpage1.form.div_requestdate_to.form.calStart.value;

        	if(!this.gfn_isNull(requestdateFrom) && requestdateTo.length>=12){
        		sTime = requestdateTo.substring(8,12);
        	}
        	this.tab_search.Tabpage1.form.div_requestdate_from.form.calStart.set_value(sDateFrom+sTime);
        	if(!this.gfn_isNull(requestdateTo) && requestdateTo.length==12){
        		sTime = requestdateTo.substring(8,12);
        	}
        	this.tab_search.Tabpage1.form.div_requestdate_to.form.calStart.set_value(sDateTo+sTime);
        };

        this.tab_search_Tabpage1_btn_CUSTOMER_onclick = function(obj,e)
        {
        	var popupId = "SEARCH_CUSTOMER";
        	var oArg = {};
        	oArg.arg_type = "CA";
        	oArg.arg_popupCd = "P00184";
        	oArg.arg_popupNm = "고객사 선택";
        	oArg.arg_rtnCols = "CUSTOMERID|CUSTOMERNAME";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "SEARCH_VALUE="+this.tab_search.Tabpage1.form.edt_CUSTOMER.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };

        this.tab_search_Tabpage1_btn_ITEMID_onclick = function(obj,e)
        {
        	var popupId = "SEARCH_ITEMID";
        	var oArg = {};
        	oArg.arg_type = "CA";
        	oArg.arg_popupCd = "P00188";
        	oArg.arg_popupNm = "품목 선택";
        	oArg.arg_rtnCols = "ITEMID|ITEMNAME|ITEMVERSION";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "SEARCH_VALUE="+this.tab_search.Tabpage1.form.edt_ITEMID.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");

        };

        this.tab_search_Tabpage1_btn_SPECOWNER_onclick = function(obj,e)
        {
        	var popupId = "SEARCH_DEPT";
        	var oArg = {};
        	oArg.arg_type = "CA";
        	oArg.arg_popupCd = "P00187";
        	oArg.arg_popupNm = "사양담당자 선택";
        	oArg.arg_rtnCols = "USERID|USERNAME|DEPARTMENT";
        	oArg.arg_paramCols = "USERGROUPID";
        	oArg.arg_paramValues = "SPECOWNER";
        	oArg.arg_searchStr = "USERIDNAME="+this.tab_search.Tabpage1.form.edt_SPECOWNER.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");

        };

        this.fn_validApproval = function(step)
        {
        	var isStep = "0";
        	var approvalStatus 	= this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVALSTATUS");
        	var reviewDate 		= this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"REVIEWDATE");
        	var approveDate 	= this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVEDATE");
        	var reviewer 		= this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"REVIEWERID");
        	var approver 		= this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVER");

        	// 검토자 여부 체크
        	if(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"REVIEWERID") == this.gf_getUserId()){
        		isStep = "1";
        	}
        	// 승인자 여부 체크
        	if(this.ds_basApproval.getColumn(this.ds_basApproval.rowposition,"APPROVER") == this.gf_getUserId()){
        		isStep = "2";
        	}

        	if(isStep =="0"){
        		this.gfn_Message(step=="Reject" ? "NOTPERMISSIONREJECT":"NOTPERMISSIONAPPROVE", null, "info", "ok");//권한이 없습니다.
        		return false;
        	} else {
        		if(step=="Reject"){ //반려
        		trace("approvalStatus=="+approvalStatus);
        			if(approvalStatus=="Reject"){ //이미 반려
        				this.gfn_Message("ALREADYREJECTED", null, "info", "ok");
        				return false;
        			}

        			if(isStep=="1"){
        				if(approvalStatus=="Approval"){ //이미 승인
        					this.gfn_Message("ALREADYAPPROVED", null, "info", "ok");
        					return false;
        				}

        				if(approvalStatus=="Review"){ //이미 승인
        					this.gfn_Message("ALREADYAPPROVED", null, "info", "ok");
        					return false;
        				}

        				if(!this.gfn_isNull(reviewDate)){ //이미 반려
        					this.gfn_Message("ALREADYREJECTED", null, "info", "ok");
        					return false;
        				}
        			}

        			if(isStep=="2"){
        				if(this.gfn_isNull(reviewDate)  && !this.gfn_isNull(reviewer)){ // 결재순서 잘못
        					this.gfn_Message("ApprovalSequenceInfo", null, "info", "ok");
        					return false;
        				}
        				if(!this.gfn_isNull(approveDate)){ // 이미 승인
        					this.gfn_Message("ALREADYAPPROVED", null, "info", "ok");
        					return false;
        				}
        			}
        		}
        		if(step=="Approval" || step=="Arbitrary"){ //승인
        			if(approvalStatus=="Approval"){ //이미 승인
        				if(isStep=="1"){
        					this.gfn_Message("ALREADYAPPROVED", null, "info", "ok");
        					return false;
        				} else if(isStep=="2"){
        					if(!this.gfn_isNull(approveDate)){ //이미 승인
        						this.gfn_Message("ALREADYAPPROVED", null, "info", "ok");
        						return false;
        					}
        				}
        			}

        			if(approvalStatus=="Reject"){ //이미 반려
        				this.gfn_Message("ALREADYREJECTED", null, "info", "ok");
        				return false;
        			}

        			if(isStep=="1"){
        				if(!this.gfn_isNull(reviewDate)){ //이미 승인
        					this.gfn_Message("ALREADYAPPROVED", null, "info", "ok");
        					return false;
        				}
        			}

        			if(isStep=="2"){
        				if(this.gfn_isNull(reviewDate) && !this.gfn_isNull(reviewer)){ // 결재순서 잘못
        					this.gfn_Message("ApprovalSequenceInfo", null, "info", "ok");
        					return false;
        				}
        			}
        		}
        	}
        	return true;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_CUSTOMER.addEventHandler("onclick",this.tab_search_Tabpage1_btn_CUSTOMER_onclick,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_ITEMID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_ITEMID_onclick,this);
            this.tab_search.Tabpage1.form.btn_SPECOWNER.addEventHandler("onclick",this.tab_search_Tabpage1_btn_SPECOWNER_onclick,this);
            this.tab_search.Tabpage1.form.cbo_period.addEventHandler("canitemchange",this.tab_search_Tabpage1_cbo_period_canitemchange,this);
            this.tab_search.Tabpage1.form.cbo_period.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_period_onitemchanged,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_saveAppr.addEventHandler("onclick",this.fn_saveApprove,this);
            this.div_header.form.btn_saveArbitrary.addEventHandler("onclick",this.div_header_btn_saveArbitrary_onclick,this);
            this.div_header.form.btn_saveReturn.addEventHandler("onclick",this.div_header_btn_saveReturn_onclick,this);
            this.div_work.form.grd_basApproval.addEventHandler("onselectchanged",this.div_work_grd_basApproval_onselectchanged,this);
        };
        this.loadIncludeScript("BAS02300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
