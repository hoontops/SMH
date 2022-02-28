(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM02800M");
            this.set_titletext("변경점 신청등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,810);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RATINGDECISION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGEPOINTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CHANGEPOINTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEGMENTTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGETYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"RATINGDECISION\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALNO\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGETYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALSTATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALRESULTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGEPOINTNO\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLENAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGEITEMMGNT\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKHANDLEMETHOD\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCOMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"BEFORECOMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"AFTERCOMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"CHANGEDETAILS\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDEPARTMENTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
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

            obj = new Static("sta_title","30","16","111","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_text("변경점 신청서 등록/이력조회");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_list","31.32%","0","120","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0",null,"34","sta_cnt_ds_list:41.67%",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("변경점 이력 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("CHANGEPOINTSTATUS");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_reqList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"0\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"160\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" tooltiptext=\"CHANGEPOINTNO\" text=\"변경점 관리번호\"/><Cell col=\"3\" tooltiptext=\"CHANGEPOINTTYPE\" text=\"변경점 구분\"/><Cell col=\"4\" tooltiptext=\"CHANGEPOINTDATE\" text=\"변경점 신청일\"/><Cell col=\"5\" tooltiptext=\"CHANGEPOINTTITLE\" text=\"변경점제목\"/><Cell col=\"6\" tooltiptext=\"CHANGEPOINTDEPARTMENT\" text=\"변경점 신청부서\"/><Cell col=\"7\" tooltiptext=\"ITEMCODE\" text=\"품목코드\"/><Cell col=\"8\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"9\" tooltiptext=\"ITEMNAME\" text=\"품목명\"/><Cell col=\"10\" tooltiptext=\"CUSTOMERNAME\" text=\"고객명\"/><Cell col=\"11\" text=\"공정코드\" tooltiptext=\"PROCESSSEGMENTID\"/><Cell col=\"12\" text=\"공정 Rev\" tooltiptext=\"PROCESSSEGMENTVERSION\"/><Cell col=\"13\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"14\" tooltiptext=\"SEGMENTTYPE\" text=\"공정유형\"/><Cell col=\"15\" tooltiptext=\"CHANGETYPE\" text=\"변경유형\"/><Cell col=\"16\" text=\"등급분류\" tooltiptext=\"RATINGDECISION\"/><Cell col=\"17\" text=\"절차구분\" tooltiptext=\"PROCESSTYPE\"/><Cell col=\"18\" text=\"역할구분\" tooltiptext=\"CHARGETYPE\"/><Cell col=\"19\" text=\"담당자명\" tooltiptext=\"OWNERNAME\"/><Cell col=\"20\" text=\"결재상태\" tooltiptext=\"DCB432A154484DA290B240C5CADFC5A7\"/><Cell col=\"21\" text=\"결재결과\" tooltiptext=\"APPROVALRESULT\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:CHANGEPOINTNO\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:CHANGEPOINTTYPE\" displaytype=\"combotext\" textAlign=\"center\" combocodecol=\"C,ChangePointType,,Y,N\"/><Cell col=\"4\" text=\"bind:REQUESTDATE\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:SUBJECT\" textAlign=\"left\" displaytype=\"text\"/><Cell col=\"6\" text=\"bind:REQUESTDEPARTMENTNAME\" textAlign=\"left\" displaytype=\"text\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFID\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"9\" text=\"bind:PRODUCTDEFNAME\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:CUSTOMERNAME\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:PROCESSSEGMENTID\" displaytype=\"text\"/><Cell col=\"12\" text=\"bind:PROCESSSEGMENTVERSION\" displaytype=\"text\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:PROCESSSEGMENTNAME\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:SEGMENTTYPENAME\" textAlign=\"left\" displaytype=\"text\"/><Cell col=\"15\" text=\"bind:CHANGETYPENAME\" textAlign=\"left\" displaytype=\"text\"/><Cell col=\"16\" textAlign=\"center\" displaytype=\"combotext\" combocodecol=\"C,GradeClass,,Y,N\" text=\"bind:RATINGDECISION\"/><Cell col=\"17\" textAlign=\"center\" displaytype=\"normal\" text=\"bind:PROCESSTYPENAME\"/><Cell col=\"18\" textAlign=\"center\" displaytype=\"normal\" text=\"bind:CHARGETYPENAME\"/><Cell col=\"19\" textAlign=\"center\" displaytype=\"text\" text=\"bind:USERNAME\"/><Cell col=\"20\" textAlign=\"center\" displaytype=\"normal\" text=\"bind:APPROVALSTATENAME\"/><Cell col=\"21\" textAlign=\"center\" displaytype=\"normal\" text=\"bind:APPROVALRESULTNAME\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_reqList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"5","44","24","btn_xlDn_grd_reqList:5",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("REGISTRATION");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("staSearchPeriod","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("변경점 신청일");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CHANGEPOINTDATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear2","171","325","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","325","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"30","15","400","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","30","15","400",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"305","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","331","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPlantList","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STOPSITE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboPlantList","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cboPeriodType","15","60","88","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("calStartDt","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("calEndDt","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_01",null,"55","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03",null,"30","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00",null,"55","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductCode","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEM");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00",null,"105","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00",null,"130","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staSpecOwner","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("고객");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CUSTOMER");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_03_00_00_00_00_00_00_00_00_00",null,"155","45","5","228",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00",null,"130","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customer","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_customer",null,"135","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00_00",null,"155","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_00",null,"105","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_customer_id","10","518","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_value("고객ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("고객ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductName00","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_text("변경점 신청부서");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CHANGEPOINTDEPARTMENT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_req_dept","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_01_00_00",null,"80","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03","-10","180",null,"5","10",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_text("공정분류");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("3376C5B8D01840BF940F6F2734E9EFD2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_segmentType","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("33");
            obj.set_codecolumn("C,ProcessClass,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState00","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_text("변경유형");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CHANGETYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_changeType","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("35");
            obj.set_codecolumn("C,ChangeType1,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState00_00","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("36");
            obj.set_text("등급분류");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("RATINGDECISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_gradeType","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("37");
            obj.set_codecolumn("C,GradeClass,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState00_00_00","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("38");
            obj.set_text("절차구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_stepType","108","235","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("39");
            obj.set_codecolumn("C,ProcedureType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staValidState00_00_00_00","0","260","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("40");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DCB432A154484DA290B240C5CADFC5A7");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_approvalState","108","260","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("41");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_changePointType","0","285","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("42");
            obj.set_text("변경점구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("3FBD7F1221F44DB796EFCB7DEA15B5DB");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_changePointType","108","285","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("43");
            obj.set_codecolumn("C,ChangePointType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdef_cd","9","544","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("44");
            obj.set_value("품목REV (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("품목REV (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdef_id","10","569","120","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("45");
            obj.set_value("품목ID (HIDDEN)");
            obj.set_visible("false");
            obj.set_text("품목ID (HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdef","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("46");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_productdef",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("47");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","242","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Static("guidetip03","-9","287",null,"5","1311",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("guidetip03_00","-9","312",null,"5","1311",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("guidetip03_00_00","-9","337",null,"5","1311",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("guidetip03_00_00_00","-9","362",null,"5","1311",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("guidetip03_00_00_00_00","-9","387",null,"5","1311",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,810,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.Tabpage1.form.cboPlantList","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.Tabpage1.form.calStartDt","value","ds_search","P_PERIOD_PERIODFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.Tabpage1.form.calEndDt","value","ds_search","P_PERIOD_PERIODTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.Tabpage1.form.edt_customer_id","value","ds_search","CUSTOMERID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.Tabpage1.form.edt_req_dept","value","ds_search","REQUESTDEPARTMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.Tabpage1.form.cbo_segmentType","value","ds_search","SEGMENTTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.Tabpage1.form.cbo_changeType","value","ds_search","CHANGETYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_search.Tabpage1.form.cbo_gradeType","value","ds_search","RATINGDECISION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab_search.Tabpage1.form.cbo_stepType","value","ds_search","PROCESSTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_search.Tabpage1.form.cbo_approvalState","value","ds_search","APPROVALSTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab_search.Tabpage1.form.cbo_changePointType","value","ds_search","CHANGEPOINTTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.Tabpage1.form.edt_productdef_cd","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab_search.Tabpage1.form.edt_productdef_id","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM02800M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM02800M.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM02800M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 변경점 신청등록
         * 파일명 		: QAM02800M.xfdl
         * 작성자 		: 최성민
         * 작성일 		: 2021.04.22
         * 설  명		: 품질관리 - 변경점 대책서 관리 - 변경점 신청등록
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.22	최성민   	최초작성
         * 2021.05.18	권혜영   	변경
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;	//품질관리 공통 라이브러리 include
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
        	this.ds_list.clearData();
        	var sSvcID 			= "selectChangePointList";
        	var sController 	= "/qam02800/selectChangePointList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_list=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 출력
         */
        this.fn_print = function(obj,e)
        {
        	var objDs  = this.ds_list, rowPos = objDs.rowposition;
        	if(rowPos < 0) {
        		this.gfn_Message("GridNoChecked", null, "warning", "ok");
        		return;
        	}

        	var changepointno = "["+objDs.getColumn(rowPos, "CHANGEPOINTNO")+"]";
          	var oArg = {
          		sRptPath   : "/QAM/",
          		sRptName   : "QAM02800R.mrd",
          		strField   : changepointno,
          		bModalless : false
          	};

          	var sOption = "titletext=변경신청서,modeless=false";
          	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);

        	//checkbox로 선택하는 부분 (다건 출력 안되도 된다고 전달받음 )

        // 	var objDs  = this.ds_list, rowPos = objDs.rowposition, arrChangepointno = [];
        // 	if(objDs.getCaseCount("CHK == '1'") <= 0) {
        // 		this.gfn_Message("GridNoChecked", null, "warning", "ok");
        // 		return;
        // 	}
        //
        // 	for(var i = 0; i < objDs.rowcount; i++) {
        // 		if(objDs.getColumn(i, "CHK") == "1") {
        // 			arrChangepointno.push(objDs.getColumn(i, "CHANGEPOINTNO"));
        // 		}
        // 	}
        //
        //   	var oArg = {
        //   		sRptPath   : "/QAM/",
        //   		sRptName   : "QAM02800R.mrd",
        //   		strField   : "["+arrChangepointno.join(",")+"]",
        //   		bModalless : false
        //   	};
        //
        //   	var sOption = "titletext=변경신청서,modeless=false";
        //   	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
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
        		if (trId == "selectChangePointList")
        		{

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

        	if(svcId=="SCH_CUSTOMER"
        	   ||svcId=="SCH_SPEC_OWNER"
        	   ){ //검색조건에서 고객조회시 다건선택 가능하도록
        			oArg.arg_type = "CA";
        	 }

        		if(svcId=="NEW_RC"){
        			opts = "width=1300,height=712";
        			this.gfn_openPopup(popupId,"qam::QAM02800P1.xfdl",oArg,opts);

        		} else if(svcId=="OLD_RC"){
        			opts = "width=1300,height=712";
        			oArg.changePointNo = this.ds_list.getColumn(this.ds_list.rowposition, "CHANGEPOINTNO");
        			this.gfn_openPopup(popupId,"qam::QAM02800P1.xfdl",oArg,opts);

        		} else {
        			if (popId=="P00220" && svcId=="SCH_ITEM"){	//품목 조회
        				oArg.arg_type = "CA";
        				oArg.arg_paramCols = "SQL_ID|MASTERDATACLASSID";
        				oArg.arg_paramValues = "selectItemModelList|Product";
        				oArg.arg_searchStr = "SEARCH_KEY="+this.nfn_nvl(this.searchDiv.edt_item.value, "");
        				oArg.arg_rtnCols = "ITEMID|ITEMNAME";

        			} else if (popId=="P00042"){	//담당자 조회
        				oArg.arg_type = "CA";
        				oArg.arg_rtnCols = "CUSTOMERID|CUSTOMERNAME";
        				oArg.arg_searchStr = "SEARCH_KEY=" + this.nfn_nvl(this.searchDiv.edt_customer.value,"");
        			}
        			this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        		}
        }

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

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
        		this.searchDiv.edt_customer.set_value(objKey.substr(1));
        		this.searchDiv.edt_customer_id.set_value(objId.substr(1));
        	}
        };

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

        	this.ds_CSiteType.filter("LOOKUP_CODE == '"+this.gf_getSiteType()+"'");
        	this.searchDiv.cboPlantList.set_index(0); //SITE

        	this.searchDiv.cboPeriodType.set_value("THISWEEK"); 			// 금주
        	this.fn_setDate("THISWEEK");

        	this.qamfn_setCompControl(this.searchDiv.components, "empty");
        	this.ds_list.clearData();

        	this.fn_initCombo();
        };

        /*
         * 검색 결재상태 콤보 조회 (basCommon 쿼리에 있음)
         */
        this.fn_initCombo = function ()
        {
        	var sArgs         = "";
        		sArgs        += this.gfn_setParam("CMB_TYPE", this.nfn_nvl(this.nfn_getDictionaryname("YPE_TOTAL"),"전체"));
        	this.basfn_setCustomQueryCmb(this.searchDiv.cbo_approvalState // Object
        								, "selectApprovalCodeList,,Y,A" // OPTION
        								, sArgs
        								, "fn_callBack");
        };

        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function ()
        {
        	this.searchDiv.cboPeriodType.set_value("CUSTOM");
        };

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.searchDiv.calStartDt.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.searchDiv.calEndDt.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search_Tabpage1_cboPeriodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate(e.postvalue);
        	}
        };

        this.div_header_btnNew_onclick = function(obj,e)
        {
        	this.fn_openPop("NEW_RC",""); //신규등록
        };

        this.div_work_grd_reqList_oncelldblclick = function(obj,e)
        {
        	if(e.row<0) return;
        	this.fn_openPop("OLD_RC",""); //기존등록
        };

        this.tab_search_Tabpage1_btn_item_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_ITEM","P00220"); //품목 조회
        };

        this.tab_search_Tabpage1_btn_customer_onclick = function(obj,e)
        {
        	this.fn_openPop("SCH_SPEC_OWNER","P00042"); //고객 조회
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_work.form.grd_reqList.addEventHandler("oncelldblclick",this.div_work_grd_reqList_oncelldblclick,this);
            this.div_work.form.btn_add.addEventHandler("onclick",this.div_header_btnNew_onclick,this);
            this.tab_search.Tabpage1.form.btn_clear2.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search_onclick,this);
            this.tab_search.Tabpage1.form.cboPeriodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cboPeriodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.calStartDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.calEndDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.btn_customer.addEventHandler("onclick",this.tab_search_Tabpage1_btn_customer_onclick,this);
            this.tab_search.Tabpage1.form.btn_productdef.addEventHandler("onclick",this.qamfn_callOpenPopButtonEvent,this);
        };
        this.loadIncludeScript("QAM02800M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
