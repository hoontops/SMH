(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM00600M");
            this.set_titletext("수입검사 결과등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qcOspRequestInspRsltList", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTORNM\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVINGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSIDMIDDLE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSIDTOP\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSRELNO\" type=\"STRING\" size=\"256\"/><Column id=\"ISSEND\" type=\"STRING\" size=\"256\"/><Column id=\"ISSENDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSITAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSITAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTITEM\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONUSER\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONUSERNM\" type=\"STRING\" size=\"256\"/><Column id=\"TXNGROUPHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVINGDATETIME\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"JUDGMENTCRITERIA\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOCKING\" type=\"STRING\" size=\"256\"/><Column id=\"WRAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"WRPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WRPROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WRWORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"WRISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"WRPRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"WRPRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WRPRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ISMODIFY\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTPRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTPRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTPROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREUSERNM\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_topProcessSegmentClass", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE_F\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE_T\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","31",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","165","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            obj.set_tooltiptext("MENU_PG-QC-0090");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
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

            obj = new Button("btn_saveInBound",null,"16","50","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_com_basic");
            obj.set_tooltiptext("Toolbar_Incoming");
            obj.set_text("입고");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Div("div_subSearch","0","34",null,"32","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_detailLotNo","0","0","9.54%","31",null,null,null,null,null,null,this.div_work.form.div_subSearch.form);
            obj.set_taborder("0");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("LOTID");
            this.div_work.form.div_subSearch.addChild(obj.name, obj);

            obj = new Edit("edt_gridLotId","sta_detailLotNo:5","5","210","20",null,null,null,null,null,null,this.div_work.form.div_subSearch.form);
            obj.set_taborder("1");
            this.div_work.form.div_subSearch.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_qcOspRequestInspRsltList","31.32%","66","120","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","66",null,"34","sta_cnt_ds_qcOspRequestInspRsltList:41.67%",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("공정 수입 검사 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("OSPIMPORTINSPRESULTLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_qcOspRequestInspRsltList","0","100",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qcOspRequestInspRsltList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"30\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"215\"/><Column size=\"69\"/><Column size=\"40\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"50\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\" tooltiptext=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"의뢰일시\" tooltiptext=\"REQUESTDATETIME\"/><Cell col=\"3\" text=\"입고일시\" tooltiptext=\"TRANSACTIONDATE\"/><Cell col=\"4\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"5\" text=\"작업\" tooltiptext=\"TXNNAME\"/><Cell col=\"6\" text=\"차수\" tooltiptext=\"DEGREE\"/><Cell col=\"7\" text=\"완료일시\" tooltiptext=\"INSPECTIONDATE\"/><Cell col=\"8\" text=\"판정결과\" tooltiptext=\"INSPECTIONRESULT\"/><Cell col=\"9\" text=\"인계작업장\" tooltiptext=\"TRANSITAREA\"/><Cell col=\"10\" text=\"인계처리 여부\" tooltiptext=\"ISTAKEOVER\"/><Cell col=\"11\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"12\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell col=\"13\" text=\"품목코드\" tooltiptext=\"ITEMID\"/><Cell col=\"14\" text=\"REV\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"15\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:REQUESTDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"3\" text=\"bind:RECEIVINGDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"4\" text=\"bind:LOTID\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:REWORKDIVISION\" combocodecol=\"C,ReworkDivision,,Y,N\" displaytype=\"combotext\"/><Cell col=\"6\" text=\"bind:DEGREE\"/><Cell col=\"7\" text=\"bind:INSPECTIONDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"8\" text=\"bind:INSPECTIONRESULT\"/><Cell col=\"9\" text=\"bind:TRANSITAREANAME\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:ISSENDNAME\"/><Cell col=\"11\" text=\"bind:WRPROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:WRAREANAME\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:WRPRODUCTDEFID\"/><Cell col=\"14\" text=\"bind:WRPRODUCTDEFVERSION\"/><Cell col=\"15\" text=\"bind:WRPRODUCTDEFNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlUp_ds_qcOspRequestInspRsltList",null,"72","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("15");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SITE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_lotNo","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("16");
            obj.set_text("Lot No");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","250","102","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","250","146","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"110","15","97","0",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("17");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","105","15","97",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("18");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("19");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"230","45","20","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("20");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","256","10","27",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("21");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label03","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("22");
            obj.set_text("판정 결과");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INSPECTINRESULT");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_requestDate","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("23");
            obj.set_text("의뢰일자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SEARCHREQUESTDATE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_process","108","160",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("7");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_process",null,"160","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_area","108","185",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("9");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"185","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_period","10","60","94","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("금일");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_requestDateF","108","35",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_requestDateT","108","60",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_plantId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            obj.set_codecolumn("C,SiteType,ALL,Y,N");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_topProcessSegment","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("24");
            obj.set_text("대공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("TOPPROCESSSEGMENTID");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_processSegment","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("25");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSSEGMENT");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_area","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("26");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_productDefId","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("27");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productDef","108","210",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("11");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_productDef",null,"210","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_lotNo","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("4");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_inspectResult","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,OKNG,ALL,Y");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_topProcessSegment","108","135","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_topProcessSegmentClass");
            obj.set_codecolumn("PROCESSSEGMENTCLASSID");
            obj.set_datacolumn("PROCESSSEGMENTCLASSNAME");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_process_id","77","160",null,"20","181",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("28");
            obj.set_visible("false");
            obj.set_tooltiptext("조회조건공정ID");
            obj.set_background("thistle");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","77","185",null,"20","181",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("29");
            obj.set_visible("false");
            obj.set_tooltiptext("조회조건작업장ID");
            obj.set_background("thistle");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productDef_id","77","210",null,"20","181",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("30");
            obj.set_visible("false");
            obj.set_tooltiptext("조회조건품목ID");
            obj.set_background("thistle");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM00600M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM00600M.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM00600M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 품질관리>>수입검사>>수입검사 결과등록
         * 파일명         : QAM006000M.xfdl
         * 작성자         : yanghee.kim
         * 작성일         : 2021.03.26
         *
         * 설  명         :
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.26   yanghee.kim   최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/; //기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;	//품질관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
            this.nfn_formInit(obj);

            //global value setting
        	this.qamfn_setGlobalValue();

        	//조회기간 변경에 따른 날짜 Dataset
        	this.basfn_getPeriodData("ds_periodType");

        	//조회조건 대공정 조회
        	this.fn_searchProcessTop();

        	//최초 호출되는 초기화 함수
        	this.fn_formInit();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 저장
         */
        this.fn_save = function(obj,e)
        {
            if(this.ds_qcOspRequestInspRsltList.getCaseCount("CHK == 1") <= 0)
            {
                this.gfn_Message("NoSelections", null, "error", "ok");
                return;
            }

        	for(var i=0; i<this.ds_qcOspRequestInspRsltList.getRowCount(); i++)
        	{
        		if (   !this.gfn_isNull(this.ds_qcOspRequestInspRsltList.getColumn(i,"RECEIVINGDATE"))
        		     && (this.ds_qcOspRequestInspRsltList.getColumn(i,"CHK") == 1 ) )
        		{
        			this.gfn_Message("IncludeExceptionData", this.nfn_getDictionaryname("INBOUND", true), "error", "ok");
        			return;
        		}
        	}

        	var result = this.gfn_Message("InfoSave", null, "conf", "yesno");//저장하시겠습니까?
            if (result)
            {
        		// -------------------------
        		// 저장
        		// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        		// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        		// -------------------------
        		var sSvcID        = "saveOSPInspectionAccept";
        		var sController   = "/qam00600/saveOSPInspectionAccept.do";
        		var sInDatasets   = "INPUT=ds_qcOspRequestInspRsltList:U";
        		var sOutDatasets  = "";
        		var sArgs         = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
         	var dateFrom = this.tab_search.Tab1.form.cal_requestDateF.value + this.qam_jobStartTime;
        	var dateTo = this.tab_search.Tab1.form.cal_requestDateT.value + this.qam_jobEndTime;

            this.ds_qcOspRequestInspRsltList.clearData();
            this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();

        	this.ds_search.setColumn(nRow, "ENTERPRISEID",     		this.qam_enterpriseId);
        	this.ds_search.setColumn(nRow, "PLANTID",     	    	this.qam_plantId);
        	this.ds_search.setColumn(nRow, "LANGUAGETYPE",     		this.qam_lang);
        	this.ds_search.setColumn(nRow, "USERID",       	        this.qam_userId);
        	this.ds_search.setColumn(nRow, "RESOURCETYPE",     		"ProcessInspection"); //Site
        	this.ds_search.setColumn(nRow, "REQUESTDATE_F",    		dateFrom); //의뢰일자From
        	this.ds_search.setColumn(nRow, "REQUESTDATE_T",    		dateTo); //의뢰일자T0
        	this.ds_search.setColumn(nRow, "LOTID",            		this.tab_search.Tab1.form.edt_lotNo.value); //LotNo
        	this.ds_search.setColumn(nRow, "INSPECTIONRESULT", 		this.tab_search.Tab1.form.cbo_inspectResult.value); //판정결과
        	this.ds_search.setColumn(nRow, "PROCESSSEGMENTCLASSID", this.tab_search.Tab1.form.cbo_topProcessSegment.value); //대공정
        	this.ds_search.setColumn(nRow, "PROCESSSEGMENTID", 		this.tab_search.Tab1.form.edt_process_id.value); //공정
        	this.ds_search.setColumn(nRow, "AREAID",           		this.tab_search.Tab1.form.edt_area_id.value); //작업장
        	this.ds_search.setColumn(nRow, "PRODUCTDEFID",     		this.tab_search.Tab1.form.edt_productDef_id.value); //품목코드

            var sSvcID        = "selectQcOspRequestInspRsltList";
            var sController   = "/qam00600/selectQcOspRequestInspRsltList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_qcOspRequestInspRsltList=output";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
                if (trId == "selectQcOspRequestInspRsltList")
                {
        			if (this.ds_qcOspRequestInspRsltList.rowcount < 1)
        			{
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        			}
        		}
        		else if (trId == "saveOSPInspectionAccept")
        		{
                    this.gfn_Message("SuccessSave", null, "info", "ok");
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

            oArg.arg_popupCd = popId;
            oArg.arg_popupNm = "";
            oArg.arg_paramCols = "";
            oArg.arg_paramValues = "";
            oArg.arg_searchStr = "";

            if(popupId == "SRCH_PROCESS156")    /*조회조건-공정*/
            {
                oArg.arg_type        = "BA";
        		oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
                oArg.arg_paramValues = "PROCESSSEGMENT|"+this.gf_getLanguageType();
                oArg.arg_rtnCols     = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        		oArg.arg_searchStr   = "P_PROCESSSEGMENT=" + this.tab_search.Tab1.form.edt_process.value;
            }
        	else if(popupId == "SRCH_AREA157")    /*조회조건-작업장*/
            {
                oArg.arg_type        = "BA";
        		oArg.arg_paramCols   = "P_POPTYPE|P_USER|P_PLANTID|P_LANGUAGETYPE|VALIDSTATE";
                oArg.arg_paramValues = "AREALISTBYAUTHORITY|"+this.qam_userId + "|" + this.qam_plantId + "|" + this.qam_lang + "|Valid";
                oArg.arg_rtnCols     = "AREAID |AREANAME";
        		if (!this.nfn_isNull(this.tab_search.Tab1.form.edt_area.value))
        		{
        			oArg.arg_searchStr   = "AREANAME=" + this.tab_search.Tab1.form.edt_area.value;
        		}
        		else
        		{
        			oArg.arg_searchStr   = "1=1";
        		}
            }
        	else if(popupId == "SRCH_PRODUCTDEF160")    /*조회조건-품목*/
            {
                oArg.arg_type        = "CA";
        		oArg.arg_paramCols   = "P_POPTYPE";
                oArg.arg_paramValues = "PRODUCTDEFINITION";
                oArg.arg_rtnCols     = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        		oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + this.tab_search.Tab1.form.edt_productDef.value;
            }

            this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if(this.nfn_isNull(rtn)) return;

            if(sPopupId == "SRCH_PROCESS156")          /*조회조건-공정*/
        	{
                this.tab_search.Tab1.form.edt_process_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_process.set_value(rtn[1]);
            }
        	else if(sPopupId == "SRCH_AREA157")       /*조회조건-작업장*/
            {
                this.tab_search.Tab1.form.edt_area_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_area.set_value(rtn[1]);
            }
        	else if(sPopupId == "SRCH_PRODUCTDEF160") /*조회조건-품목*/
            {
        		var arrProductdefId      = "";
        		var arrProductdefNM      = "";

        		for(var i=0; i<rtn.length; i++)
        		{
        			var colArray = rtn[i];
        			if (i > 0)
        			{
        				arrProductdefId      += ",";
        				arrProductdefNM      += ",";
        			}
        			arrProductdefId      += colArray[0];
        			arrProductdefNM      += colArray[1];
        		}

                this.tab_search.Tab1.form.edt_productDef_id.set_value(arrProductdefId);
        		this.tab_search.Tab1.form.edt_productDef.set_value(arrProductdefNM);
            }
        	else if(sPopupId == "SEARCH_INSPECTRESULT")
            {
        		if(rtn=="CALL"){
        			var sUrl = "qam::QAM00800M.xfdl";
        			var objArgs = null;
        			this.gfn_goPage(sUrl, objArgs, false);
        		}
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
        	this.tab_search.Tab1.form.cbo_plantId.set_value(this.qam_plantId);
        	this.tab_search.Tab1.form.cbo_period.set_value("THISDAY"); //금일

        	this.fn_setSearchDate("THISDAY");
        };

        /*
         * 기능 : 조회조건 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        };


        /*
         * 기능 : 조회조건 대공정 조회
         */
        this.fn_searchProcessTop = function ()
        {
            this.ds_topProcessSegmentClass.clearData();
            var sSvcID        = "selectProcessSegmentClassList";
            var sController   = "/qampopup/selectProcessSegmentClassList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_topProcessSegmentClass=output";
            var sArgs         = "";
        	    sArgs        += this.gfn_setParam("LANGUAGETYPE",  this.qam_lang); //
        		sArgs        += this.gfn_setParam("PLANTID",       this.qam_plantId); //
            	sArgs        += this.gfn_setParam("PROCESSSEGMENTCLASSTYPE",  "TopProcessSegmentClass"); //
        		sArgs        += this.gfn_setParam("CMB_TYPE",  "ALL");
        		sArgs        += this.gfn_setParam("VALIDSTATE",  "Valid");
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 의뢰일자 셋팅
         */
        this.fn_setSearchDate = function (periodType)
        {
        	this.tab_search.Tab1.form.cal_requestDateF.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
         	this.tab_search.Tab1.form.cal_requestDateT.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        };

        /*
         * 기능: 의뢰, 의뢰취소 시 데이터 체크
         */
        this.fn_gridValueCheck = function(pComponent)
        {
            var objGrid = pComponent
            var strColIdList = "";
            var objDataSet = this.all[objGrid.binddataset];

            for(var i=0; i < objDataSet.getRowCount(); i++)
            {
                if (objDataSet.getColumn(i, "CHK") == "1")
                {
        		}
        	}

        	return true;
        };

        /*
         * 기능: 그리드의 LotNo 찾기
         */
        /*
         * 기능: 그리드의 LotNo 찾기
         */
        this.fn_searchLotNo = function(obj,e)
        {
            if(e.keycode==13)
        	{
        		var receivingDate = "(RECEIVINGDATE == '' || RECEIVINGDATE == null || RECEIVINGDATE == undefined)";
        		var issend   = "(ISSEND == '' || ISSEND == null || ISSEND == undefined)";

        		var searchKey = this.div_work.form.div_subSearch.form.edt_gridLotId.value;
        		var findRow = this.ds_qcOspRequestInspRsltList.findRowExprNF(receivingDate +" && "+ issend +" && ISMODIFY == 'Y' && LOTID == '" + searchKey + "'");

        		if (findRow < 0)
        		{
        			this.gfn_Message("NoDataToOSPInspection", null, "warning", "ok");//공정 수입검사에 의뢰된 내역이 없습니다.
        			return;
        		}
                else
        		{
                    var lotHistKey = this.ds_qcOspRequestInspRsltList.getColumn(findRow, "LOTHISTKEY");
        			var count = 0;

        			for (var i=0; i < this.ds_qcOspRequestInspRsltList.getRowCount(); i++)
        			{
        				if (   this.nfn_isNull(this.ds_qcOspRequestInspRsltList.getColumn(i, "RECEIVINGDATE"))
        				    && this.ds_qcOspRequestInspRsltList.getColumn(i, "LOTHISTKEY") == lotHistKey)
        				{
        					this.ds_qcOspRequestInspRsltList.setColumn(i, "CHK", 1);
        					count++;
        				}
        			}

        			//this.ds_qcOspRequestInspRsltList.filter("")

        			if (count == 0)
        			{
        				this.gfn_Message("NoDataToOSPInspection", null, "warning", "ok");//공정 수입검사에 의뢰된 내역이 없습니다.
        				return;
        			}
        		} //if findRow
        	}//if e.keycode
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 이벤트 : 조회조건 아이콘 버튼 클릭시
         */
        this.fn_popup_click = function(obj,e)
        {
        	if (obj.name == "btn_process")
        	{
        		this.fn_openPop("SRCH_PROCESS156","P00156"); //공정
        	}
        	else if (obj.name == "btn_area")
        	{
        		this.fn_openPop("SRCH_AREA157","P00157"); //작업장
        	}
        	else if (obj.name == "btn_productDef")
        	{
        		this.fn_openPop("SRCH_PRODUCTDEF160","P00160"); //품목
        	}
        };


        /*
         * 이벤트 : 조회조건 이름 삭제시 id 초기화
         */
        this.fn_popup_canchange = function(obj,e)
        {
        	if (obj.name == "edt_process")
        	{
        	    this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_process_id.set_value("");
        	}
        	else if (obj.name == "edt_area")
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_area_id.set_value("");
        	}
            else if (obj.name == "edt_productDef")
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_productDef_id.set_value("");
        	}
        };
        /*
         * 이벤트 : 의뢰일자 조건변경시
         */
        this.tab_search_Tab1_cbo_period_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM")
        	{
        		this.fn_setSearchDate(e.postvalue);
        	}
        };

        /*
         * 이벤트 : 의뢰일자 변경시
         */
        this.fn_preiodChang = function(obj,e)
        {
        	this.tab_search.Tab1.form.cbo_period.set_value("CUSTOM");
        };

        /*
         * 이벤트 : 그리드 더블클릭
         */
        this.fn_gridDoubleClick = function(obj,e)
        {
         	if (e.row < 0) return;
         	var objDataset = obj.getBindDataset();
         	var popupId = "SEARCH_INSPECTRESULT";
           	var oArg = {};

        	if (this.nfn_isNull(objDataset.getColumn(e.row, "RECEIVINGDATE")))
        	{
        		this.gfn_Message("AcceptBeforeProcessInspection", null, "warning", "ok"); //공정 수입 검사전 입고처리를 하세요.
        		return;
        	}

            if (this.nfn_isNull(objDataset.getColumn(e.row, "TXNHISTKEY")))
        	{ //검사전

        		if (objDataset.getColumn(e.row, "PROCESSSTATE") != "WaitForSend")
        		{
        			this.gfn_Message("IsWaitForSendOSPInspection", null, "warning", "ok"); //인계 대기 상태인 LOT만 검사 가능 합니다.
        			return;
        		}

        		if (objDataset.getColumn(e.row, "LOTSTATE") != "InProduction")
        		{
        			this.gfn_Message("IsProductionOSPInspection", null, "warning", "ok"); //생산중인 LOT만 검사 가능 합니다.
        			return;
        		}

        		if (objDataset.getColumn(e.row, "ISLOCKING") == "Y")
        		{
        			this.gfn_Message("LotIsLocking", objDataset.getColumn(e.row, "LOTID"), "warning", "ok");//Locking 상태의 Lot 입니다. {0}
        			return;
        		}
        	}

            //LOT정보 복사
            this.qamfn_getArrayRow(objDataset);
        	this.gfn_openPopup(popupId,"qam::QAM00600P1.xfdl",oArg,"width=1300,height=712");
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_saveInBound.addEventHandler("onclick",this.fn_save,this);
            this.div_work.form.div_subSearch.form.edt_gridLotId.addEventHandler("onkeydown",this.fn_searchLotNo,this);
            this.div_work.form.grd_qcOspRequestInspRsltList.addEventHandler("oncelldblclick",this.fn_gridDoubleClick,this);
            this.tab_search.Tab1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tab1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tab1.form.edt_process.addEventHandler("canchange",this.fn_popup_canchange,this);
            this.tab_search.Tab1.form.btn_process.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.edt_area.addEventHandler("canchange",this.fn_popup_canchange,this);
            this.tab_search.Tab1.form.btn_area.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.cbo_period.addEventHandler("onitemchanged",this.tab_search_Tab1_cbo_period_onitemchanged,this);
            this.tab_search.Tab1.form.cal_requestDateF.addEventHandler("onchanged",this.fn_preiodChang,this);
            this.tab_search.Tab1.form.cal_requestDateT.addEventHandler("onchanged",this.fn_preiodChang,this);
            this.tab_search.Tab1.form.edt_productDef.addEventHandler("canchange",this.fn_popup_canchange,this);
            this.tab_search.Tab1.form.btn_productDef.addEventHandler("onclick",this.fn_popup_click,this);
        };
        this.loadIncludeScript("QAM00600M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
