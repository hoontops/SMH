(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM06400M");
            this.set_titletext("재작업이력 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_main", this);
            obj._setContents("<ColumnInfo><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"FROMPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MOVESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVEDUSER\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVEDDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ISACCEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ISCANCEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_ProdVersion", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFVERSIONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSIONNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("<ColumnInfo><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"FROMPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MOVESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVEDUSER\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVEDDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("Static12_00_00_00_01_00_00",null,"255","45","20","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("16");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","Static12_00_00_00_01_00_00:0","102","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_search","15","Static12_00_00_00_01_00_00:0","146","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_hotkey("F2");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("12");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("13");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("14");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("15");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","Static12_00_00_00_01_00_00:6","10","27",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("17");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PLANTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("18");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PLANT");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","10","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_SearchPeriod","0","35","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("25");
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
            obj.set_taborder("26");
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
            obj.set_taborder("19");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","85",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("3");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"85","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFVERSION","0","sta_PRODUCTDEFID:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("21");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","108","edt_PRODUCTDEFID:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("4");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFNAME","0","sta_PRODUCTDEFVERSION:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("22");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","cbo_PRODUCTDEFVERSION:5",null,"20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("5");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_LOTID","0","sta_PRODUCTDEFNAME:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            obj.set_taborder("23");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","108","edt_PRODUCTDEFNAME:5",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("6");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_LOTID","251","edt_PRODUCTDEFNAME:5","22","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_AREAID","0","sta_LOTID:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("인계작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            obj.set_taborder("27");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID","108","edt_LOTID:5",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("7");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_AREAID",null,"btn_LOTID:5","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_USER_ID","0","sta_AREAID:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("승인자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("APPROVALUSER");
            obj.set_taborder("29");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_USER_ID","108","edt_AREAID:5",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("8");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_USER_ID",null,"btn_AREAID:5","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_ISACCEPT","0","sta_USER_ID:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("승인여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("31");
            obj.set_tooltiptext("ISACCEPT");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_ISACCEPT","108","edt_USER_ID:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","143","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_main",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subMainTitle","0","0","100","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("재작업 이력");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("REWORKHISTORY");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_main","sta_subMainTitle:-8","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_main","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_main");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"140\"/><Column size=\"160\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"발행일시\" tooltiptext=\"OSPPRINTTIME\"/><Cell col=\"3\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell col=\"4\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"5\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"6\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"7\" text=\"작업구분\" tooltiptext=\"OSPETCTYPE\"/><Cell col=\"8\" text=\"재작업번호\" tooltiptext=\"REWORKNUMBER\"/><Cell col=\"9\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"10\" text=\"투입공정\" tooltiptext=\"INPUTSEGMENT\"/><Cell col=\"11\" text=\"재작업후공정\" tooltiptext=\"REWORKRETURNSEGMENT\"/><Cell col=\"12\" text=\"재작업명\" tooltiptext=\"REWORKNAME\"/><Cell col=\"13\" text=\"차수\" tooltiptext=\"DEGREE\"/><Cell col=\"14\" text=\"진행상태\" tooltiptext=\"WORKORDERSTATUS\"/><Cell col=\"15\" text=\"수량(PCS)\" tooltiptext=\"PCSQTY\"/><Cell col=\"16\" text=\"수량(PNL)\" tooltiptext=\"PANELQTY\"/><Cell col=\"17\" text=\"인계작업장\" tooltiptext=\"HANDOVERAREA\"/><Cell col=\"18\" text=\"처리자\" tooltiptext=\"PROCESSUSER\"/><Cell col=\"19\" text=\"승인자\" tooltiptext=\"APPROVALUSER\"/><Cell col=\"20\" text=\"승인일자\" tooltiptext=\"APPROVALDATE\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:CREATEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:WORKTYPE\"/><Cell col=\"8\" text=\"bind:SUBPROCESSDEFID\"/><Cell col=\"9\" text=\"bind:SUBPROCESSDEFVERSION\"/><Cell col=\"10\" text=\"bind:FROMPROCESSSEGMENTNAME\"/><Cell col=\"11\" text=\"bind:TOPROCESSSEGMENTNAME\"/><Cell col=\"12\" text=\"bind:PROCESSDEFNAME\"/><Cell col=\"13\" text=\"bind:WORKCOUNT\"/><Cell col=\"14\" text=\"bind:MOVESTATE\"/><Cell col=\"15\" displaytype=\"number\" textAlign=\"right\" text=\"bind:PCSQTY\"/><Cell col=\"16\" displaytype=\"number\" textAlign=\"right\" text=\"bind:PANELQTY\"/><Cell col=\"17\" textAlign=\"left\" text=\"bind:AREANAME\"/><Cell col=\"18\" text=\"bind:USERNAME\"/><Cell col=\"19\" text=\"bind:APPROVEDUSER\"/><Cell col=\"20\" text=\"bind:APPROVEDDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_APPROBAL",null,"6","60","21","37",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("승인");
            obj.set_font("bold 9pt \"Dotum\"");
            obj.set_tooltiptext("APPROBAL");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_text("");
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

            obj = new Static("sta_title","30","16","150","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("화면명");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
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
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.tab_page.form.cbo_PLANTID","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","tab_search.tab_page.form.cal_STARTDT","value","ds_search","PERIOD_PERIODFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","tab_search.tab_page.form.cbo_PERIODTYPE","value","ds_search","PERIODTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","tab_search.tab_page.form.cal_ENDDT","value","ds_search","PERIOD_PERIODTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.tab_page.form.edt_PRODUCTDEFID","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.tab_page.form.cbo_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.tab_page.form.edt_PRODUCTDEFNAME","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.tab_page.form.edt_LOTID","value","ds_search","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.tab_page.form.edt_AREAID","value","ds_search","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.tab_page.form.edt_USER_ID","value","ds_search","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.tab_page.form.cbo_ISACCEPT","value","ds_search","ISACCEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM06400M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM06400M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM06400M.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("PCM06400M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM06400M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 재작업이력조회
         * 파일명 		: PCM06400M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2021.06.07
         * 설  명		: 재작업이력조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.06.07	박대호   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
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

        	// 검색조건 공통 콤보 설정
        	this.fn_initCombo();
        	this.fn_initDatePicker();
        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색(메인 -  고객정보 그리드)
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_main.clearData();

        	var sSvcID 			= "selectReworkHistory";
        	var sController 	= "/pcm06400/selectReworkHistory.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_main=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        		case "saveReworkHistory" :
        		{
        			if(errCD == 0)
        			{
        				this.gfn_Message("SuccedSave", "", "information", "ok");
        				this.fn_search();
        			}
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
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if (this.nfn_isNull(rtn))
        	{
        		return;
        	};

        	switch (sPopupId)
        	{
        		case "POPUP_PRODUCTDEFID" :
        		{//PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME

        			this.setProduct_ProdVersion(rtn, this.ds_cbo_ProdVersion, this.ds_search, "C");
        			rtn = this.gfn_split(rtn, ",");
        			if (rtn.length == 3)
        			{

        				this.tab_search.tab_page.form.edt_PRODUCTDEFID.set_value(rtn[0]);
        				this.tab_search.tab_page.form.edt_PRODUCTDEFNAME.set_value(rtn[2]);
        				this.ds_search.setColumn(0, "PRODUCTDEFVERSION", rtn[1]);
        			}
        			else
        			{
        				var valueId = [];
        				var valueName = [];
        				for (var i = 0; i < rtn.length; i++)
        				{
        					if ((i % 3) == 0)
        					{
        						valueId.push(rtn[i]);
        					}
        					else if ((i % 3) == 2)
        					{
        						valueName.push(rtn[i]);
        					}

        				}
        				this.tab_search.tab_page.form.edt_PRODUCTDEFID.set_value(valueId.join(","));
        				this.tab_search.tab_page.form.edt_PRODUCTDEFNAME.set_value("");
        				this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");

        			}
        		}
        		break;
        		case "POPUP_LOTID" :
        		{
        			this.tab_search.tab_page.form.edt_LOTID.set_value(rtn.join(","));
        		}
        		break;
        		case "POPUP_AREAID" :
        		{
        			rtn = this.gfn_split(rtn, ",");
        			this.tab_search.tab_page.form.edt_AREAID.set_value(rtn[1]);
        			this.ds_search.setColumn( 0, "AREAID",          rtn[0] );
        		}
        		break;
        		case "POPUP_USER" :
        		{
        			rtn = this.gfn_split(rtn, ",");
        			if (rtn.length == 2)
        			{
        				this.tab_search.tab_page.form.edt_USER_ID.set_value(rtn[1]);
        				this.ds_search.setColumn( 0, "USER_ID",          rtn[0] );
        			}
        			else
        			{
        				var userId = [];
        				var userName = [];
        				for (var i = 0; i < rtn.length; i++)
        				{
        					if ((i % 2) == 0)
        					{
        						userId.push(rtn[i]);
        					}
        					else
        					{
        						userName.push(rtn[i]);
        					}
        				}

        				this.tab_search.tab_page.form.edt_USER_ID.set_value(userName.join(","));
        				this.ds_search.setColumn( 0, "USER_ID",  userId.join(",") );

        			}
        		}
        		break;

        	};
        };

         /*
         * 기능(공통팝업) : 조회
         */
        this.fn_openPop = function(svcId, popId, pArg)
        {

        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
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
        	this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LOTID", "");
        	this.ds_search.setColumn(0, "AREAID", "");
        	this.ds_search.setColumn(0, "USER_ID", "");
        }




        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         *	기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function(obj,e)
        {
        	this.tab_search.tab_page.form.cbo_PERIODTYPE.set_value("CUSTOM");
        };
        /*
         *	기능 : 기간콤보박스 변경시
         */
        this.tab_search_tab_page_cbo_PERIODTYPE_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM")this.fn_setDate(e.postvalue);
        };
        /*
         *	기능 : 품목코드 검색 버튼 클릭 시
         */
        this.tab_search_tab_page_btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	var oArg = {};

        	if (this.tab_search.tab_page.form.edt_PRODUCTDEFID.value != "")
        	{
        		oArg.arg_type        = "CA";
        	}
        	else
        	{
        		oArg.arg_type        = "C";
        	}
        	oArg.arg_popupCd     = "P00211";
        	oArg.arg_popupNm     = "품목 선택";
        	oArg.arg_rtnCols     = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME";
        	oArg.arg_paramCols   = "P_POPTYPE";
        	oArg.arg_paramValues = "PRODUCTDEFINITION";
        	oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + this.tab_search.tab_page.form.edt_PRODUCTDEFID.value;
        	this.gfn_openPopup( "POPUP_PRODUCTDEFID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };
        /*
         *	기능 : LOTNo 검색 버튼 클릭 시
         */
        this.tab_search_tab_page_btn_LOTID_onclick = function(obj,e)
        {
        	var oArg = {};
        	if (this.tab_search.tab_page.form.edt_LOTID.value != "")
        	{
        		oArg.arg_type        = "CA";
        	}
        	else
        	{
        		oArg.arg_type        = "C";
        	}
        	oArg.arg_popupCd = "P00133";
        	oArg.arg_popupNm = "Lot No 조회";
        	oArg.arg_rtnCols = "LOTID";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "LOTID="+this.tab_search.tab_page.form.edt_LOTID.value;
        	this.gfn_openPopup("POPUP_LOTID","cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };



        this.tab_search_tab_page_btn_AREAID_onclick = function(obj,e)
        {
        	var oArg = {};
        	if (this.tab_search.tab_page.form.edt_AREAID.value != "")
        	{
        		oArg.arg_type        = "BA";
        	}
        	else
        	{
        		oArg.arg_type        = "B";
        	}
        	oArg.arg_popupCd     = "P00157";
        	oArg.arg_popupNm     = "작업장 선택";
        	oArg.arg_rtnCols     = "AREAID|AREANAME";
        	oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE|P_USER|P_PLANTID";
        	oArg.arg_paramValues = "AREALISTBYAUTHORITY|" + this.gf_getLanguageType() + "|" + this.gf_getUserAcnt() + "|"+ this.ds_search.getColumn( 0, "PLANTID" );
        	oArg.arg_searchStr   = "P_DICTIONARY=" + this.tab_search.tab_page.form.edt_AREAID.value;
        	this.gfn_openPopup( "POPUP_AREAID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };

        this.tab_search_tab_page_btn_USER_ID_onclick = function(obj,e)
        {
        	var oArg = {};
        	if (this.tab_search.tab_page.form.edt_USER_ID.value != "")
        	{
        		oArg.arg_type        = "CA";
        	}
        	else
        	{
        		oArg.arg_type        = "C";
        	}
        	oArg.arg_popupCd     = "P00311";
        	oArg.arg_popupNm     = "사용자 조회";
        	oArg.arg_rtnCols     = "USER_ID|USER_NM";
        	oArg.arg_paramCols   = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr   = "USER_NM=" + this.tab_search.tab_page.form.edt_USER_ID.value;
        	this.gfn_openPopup( "POPUP_USER", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };


        this.div_work_grd_main_oncelldblclick = function(obj,e)
        {
        	if(e.cell == 8 || e.cell == 9 || e.cell == 12)
        	{
        		if(this.ds_main.getRowCount() > 0)
        		{
        			var popupId = "REWORKHISTORY_POPUP";
        			var oArg = {
        				objList : [
        							this.ds_main.getColumn(e.row, "SUBPROCESSDEFID"),//재작업번호
        							this.ds_main.getColumn(e.row, "SUBPROCESSDEFVERSION")//Rev.
        							]
        			};

        			this.gfn_openPopup(popupId,"pcm::PCM064000P.xfdl",oArg,"width=650,height=600");
        		}
        	}
        };



        this.div_work_btn_APPROBAL_onclick = function(obj,e)
        {
        	var bOK = this.gfn_Message("SaveApproval", null, "conf", "yesno");//승인처리 하시겠습니까?
        	if (bOK == false) return;

        	var chk = false;
        	this.ds_list.clearData();
         	for (var i = 0; i < this.ds_main.rowcount; i++)
         	{
         		if (this.ds_main.getColumn( i, "CHK" ) == true)
         		{
         			chk = true;
         			break;
         		}
         	};
        	if (!chk)
         	{
         		this.gfn_Message("NoSaveData", null, "warning", "ok");
         		return;
         	};
        	for (var i = 0; i < this.ds_main.getRowCount(); i++)
         	{
         		if (this.ds_main.getColumn( i, "CHK") == true)
         		{
         			this.ds_list.copyRow(this.ds_list.addRow(), this.ds_main, i);
         		}
         	};

        	this.ds_search.setColumn(0,"ISCANCEL", "N");//승인

        	var sSvcID 			= "saveReworkHistory";
        	var sController 	= "/pcm06400/saveReworkHistory.do";
        	var sInDatasets 	= "ds_search=ds_search ds_list=ds_list:A";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.tab_page.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.tab_page.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.tab_page.form.cal_STARTDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.tab_page.form.cbo_PERIODTYPE.addEventHandler("onitemchanged",this.tab_search_tab_page_cbo_PERIODTYPE_onitemchanged,this);
            this.tab_search.tab_page.form.cal_ENDDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.tab_page.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_tab_page_btn_PRODUCTDEFID_onclick,this);
            this.tab_search.tab_page.form.btn_LOTID.addEventHandler("onclick",this.tab_search_tab_page_btn_LOTID_onclick,this);
            this.tab_search.tab_page.form.btn_AREAID.addEventHandler("onclick",this.tab_search_tab_page_btn_AREAID_onclick,this);
            this.tab_search.tab_page.form.btn_USER_ID.addEventHandler("onclick",this.tab_search_tab_page_btn_USER_ID_onclick,this);
            this.tab_search.tab_page.form.cbo_ISACCEPT.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_INNERREVISIONTOTAL_onitemchanged,this);
            this.div_work.form.grd_main.addEventHandler("oncelldblclick",this.div_work_grd_main_oncelldblclick,this);
            this.div_work.form.btn_APPROBAL.addEventHandler("onclick",this.div_work_btn_APPROBAL_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("PCM06400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
