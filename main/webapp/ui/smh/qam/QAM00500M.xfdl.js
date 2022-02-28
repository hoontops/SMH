(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM00500M");
            this.set_titletext("수입검사 의뢰");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE_F\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE_T\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qcOspRequestInspList", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDMMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"ISSEND\" type=\"STRING\" size=\"256\"/><Column id=\"ISSENDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOBSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISMODIFY\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ISINSPECTIONREQUIRED\" type=\"STRING\" size=\"256\"/><Column id=\"SELFTAKEINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SELFSHIPINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"MEASUREINSPRESULT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPREQUIRED\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPREQUIRED\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONREQUIRED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
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

            obj = new Button("btn_help",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_saveRequest",null,"16","50","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_basic");
            obj.set_tooltiptext("REQUEST");
            obj.set_text("의뢰");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","133","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            obj.set_tooltiptext("MENU_PG-QC-0092");
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

            obj = new Button("btn_saveCancelRequest",null,"16","68","24","btn_saveRequest:0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_text("의뢰취소");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("Toolbar_CancelRequest");
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

            obj = new Static("sta_cnt_ds_qcOspRequestInspList","31.32%","66","120","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","66",null,"34","sta_cnt_ds_qcOspRequestInspList:41.67%",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("의뢰 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("REQUESTLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_ds_qcOspRequestInspList",null,"72","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_qcOspRequestInspList","0","100",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_qcOspRequestInspList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"220\"/><Column size=\"40\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"진행상태\" tooltiptext=\"REQUESTSTATUS\"/><Cell col=\"3\" text=\"의뢰일시\" tooltiptext=\"REQUESTDATE\"/><Cell col=\"4\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell col=\"5\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"6\" text=\"차수\" tooltiptext=\"DEGREE\"/><Cell col=\"7\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"8\" text=\"품목명\" tooltiptext=\"PRODUCTNAME\"/><Cell col=\"9\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"10\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"11\" text=\"공정Rev.\" tooltiptext=\"PROCESSSEGMENTVERSION\"/><Cell col=\"12\" text=\"PCS\" tooltiptext=\"WORKENDPCSQTY\"/><Cell col=\"13\" text=\"PNL\" tooltiptext=\"WORKENDPANELQTY\"/><Cell col=\"14\" text=\"MM\" tooltiptext=\"WORKENDMMQTY\"/><Cell col=\"15\" text=\"의뢰자명\" tooltiptext=\"REQUESTORNAME\"/><Cell col=\"16\" text=\"완료일시\" tooltiptext=\"INSPECTIONDATE\"/><Cell col=\"17\" text=\"판정결과\" tooltiptext=\"INSPECTIONRESULT\"/><Cell col=\"18\" text=\"인계처리여부\" tooltiptext=\"ISSENDNAME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:REQUESTSTATUS\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,RequestStatus,,Y,N\"/><Cell col=\"3\" text=\"bind:REQUESTDATE\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\"/><Cell col=\"4\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:LOTID\"/><Cell col=\"6\" text=\"bind:DEGREE\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"8\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"10\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:PROCESSSEGMENTVERSION\"/><Cell col=\"12\" text=\"bind:WORKENDPCSQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"13\" text=\"bind:WORKENDPANELQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,##0\"/><Cell col=\"14\" text=\"bind:WORKENDMMQTY\"/><Cell col=\"15\" text=\"bind:REQUESTORNAME\"/><Cell col=\"16\" text=\"bind:INSPECTIONDATE\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\"/><Cell col=\"17\" text=\"bind:INSPECTIONRESULT\"/><Cell col=\"18\" text=\"bind:ISSENDNAME\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Combo("cbo_requestStatus","108","210","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,RequestStatus,ALL,Y,Y");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("14");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SITE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_lotNo","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("15");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","250","102","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","250","146","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"110","15","97","0",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("16");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","105","15","97",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("17");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("18");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"230","45","20","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("19");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","256","10","27",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("20");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_vendor","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("21");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("VENDOR");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_requestDate","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("22");
            obj.set_text("의뢰일자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SEARCHREQUESTDATE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_vendor","108","110",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("6");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_vendor",null,"110","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_process","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("8");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_process",null,"135","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("9");
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

            obj = new Static("sta_processSegment","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("23");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSSEGMENT");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_areaName","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("24");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_productdefId","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("25");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_requestStatus","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("26");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("REQUESTSTATUS");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_area","108","160",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("10");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"160","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_lotNo","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("4");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productDef","108","185",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("27");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_productDef",null,"185","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_vendor_id","126","305",null,"20","19",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("29");
            obj.set_visible("false");
            obj.set_tooltiptext("조회조건거래처ID");
            obj.set_background("thistle");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_process_id","126","330",null,"20","19",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("30");
            obj.set_visible("false");
            obj.set_tooltiptext("조회조건공정ID");
            obj.set_background("thistle");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","126","355",null,"20","19",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("31");
            obj.set_visible("false");
            obj.set_tooltiptext("조회조건작업장ID");
            obj.set_background("thistle");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productDef_id","126","380",null,"20","19",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("32");
            obj.set_visible("false");
            obj.set_tooltiptext("조회조건품목ID");
            obj.set_background("thistle");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_hidden3","25","355",null,"20","edt_area_id:10",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("33");
            obj.set_text("작업장ID");
            obj.set_visible("false");
            obj.set_textAlign("right");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_hidden1","25","305",null,"20","edt_vendor_id:10",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("34");
            obj.set_text("거래처ID");
            obj.set_visible("false");
            obj.set_textAlign("right");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_hidden2","25","330",null,"20","edt_process_id:10",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("35");
            obj.set_text("공정ID");
            obj.set_visible("false");
            obj.set_textAlign("right");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_hidden4","25","380",null,"20","edt_productDef_id:10",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("36");
            obj.set_text("품목ID");
            obj.set_visible("false");
            obj.set_textAlign("right");
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
        this.addIncludeScript("QAM00500M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM00500M.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM00500M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 품질관리>>수입검사>>수입검사 의뢰
         * 파일명         : QAM005000M.xfdl
         * 작성자         : yanghee.kim
         * 작성일         : 2021.03.22
         *
         * 설  명         :
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.22   yanghee.kim   최초작성
         * 2021.06.25   20210625      수입검사결과등록시 체크하므로 품질규격검사 체크제외
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;    //기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;    //품질관리 공통 라이브러리 include

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
        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
         	var dateFrom = this.tab_search.Tab1.form.cal_requestDateF.value + this.qam_jobStartTime;
        	var dateTo = this.tab_search.Tab1.form.cal_requestDateT.value + this.qam_jobEndTime;

        	this.ds_qcOspRequestInspList.clearData();
            this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow, "ENTERPRISEID",     this.qam_enterpriseId);
        	this.ds_search.setColumn(nRow, "LANGUAGETYPE",     this.qam_lang);
        	this.ds_search.setColumn(nRow, "PLANTID",          this.qam_plantId);		//Site
        	this.ds_search.setColumn(nRow, "USERID",           this.qam_userId);
        	this.ds_search.setColumn(nRow, "RESOURCETYPE",     "ProcessInspection");
        	this.ds_search.setColumn(nRow, "REQUESTDATE_F",    dateFrom); 				//의뢰일자From
        	this.ds_search.setColumn(nRow, "REQUESTDATE_T",    dateTo); 				//의뢰일자T0
        	this.ds_search.setColumn(nRow, "LOTID",            this.tab_search.Tab1.form.edt_lotNo.value); //LotNo
        	this.ds_search.setColumn(nRow, "VENDORID",         this.tab_search.Tab1.form.edt_vendor_id.value); //거래처
        	this.ds_search.setColumn(nRow, "PROCESSSEGMENTID", this.tab_search.Tab1.form.edt_process_id.value); //공정
        	this.ds_search.setColumn(nRow, "AREAID",           this.tab_search.Tab1.form.edt_area_id.value); //작업장
        	this.ds_search.setColumn(nRow, "PRODUCTDEFID",     this.tab_search.Tab1.form.edt_productDef_id.value); //품목코드
        	this.ds_search.setColumn(nRow, "REQUESTSTATE",     this.tab_search.Tab1.form.cbo_requestStatus.value); //진행상태

            var sSvcID        = "selectQcOspRequestInspList";
            var sController   = "/qam00500/selectQcOspRequestInspList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_qcOspRequestInspList=output";
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
        	    if (trId == "selectQcOspRequestInspList")
                {
        			if (this.ds_qcOspRequestInspList.rowcount  < 1)
        			{
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}
        		}
                else if (trId == "saveQcOspRequestInsp")
                {
                    this.gfn_Message("SuccessSave", null, "info", "ok");
                    this.fn_search();
                }
                else if (trId == "saveQcOspRequestInspCancel")
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
            // arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅, C::사용자 멀티 선택
            // popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
            // popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
            // rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
            // paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
            // paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
            // searchStr   : 팝업 조회조건 콤보값 = 조회 값

            var popupId = svcId;
            var oArg = {};
            var opts = "width=450,height=500";

            oArg.arg_popupCd = popId;
            oArg.arg_popupNm = "";
            oArg.arg_paramCols = "";
            oArg.arg_paramValues = "";
            oArg.arg_searchStr = "";

            if(popupId == "SRCH_VENDOR183")          /*조회조건-거래처*/
            {
        		oArg.arg_type        = "BA";
        		oArg.arg_paramCols   = "ENTERPRISEID|PLANTID|VENDORTYPE|VALIDSTATE";
                oArg.arg_paramValues = this.qam_enterpriseId + "|" + this.qam_plantId + "|Supplier|Valid";
                oArg.arg_rtnCols     = "VENDORID|VENDORNAME";
        		oArg.arg_searchStr   = "VENDORNAME=" + this.tab_search.Tab1.form.edt_vendor.value;
            }
        	else if(popupId == "SRCH_PROCESS156")    /*조회조건-공정*/
            {
                opts = "width=650,height=500";
        		oArg.arg_type        = "BA";
        		oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
                oArg.arg_paramValues = "PROCESSSEGMENT|"+this.gf_getLanguageType();
                oArg.arg_rtnCols     = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        		oArg.arg_searchStr   = "P_PROCESSSEGMENT=" + this.tab_search.Tab1.form.edt_process.value;
            }
        	else if(popupId == "SRCH_AREA157")    /*조회조건-작업장*/
            {
        		var opts = "width=480,height=500";
        		oArg.arg_type        = "BA";
        		oArg.arg_paramCols   = "P_POPTYPE|P_USER|P_PLANTID|P_LANGUAGETYPE|VALIDSTATE";
                oArg.arg_paramValues = "AREALISTBYAUTHORITY|"+this.qam_userId + "|" + this.qam_plantId + "|" + this.qam_lang + "|Valid";
                oArg.arg_rtnCols     = "AREAID|AREANAME";
        		oArg.arg_searchStr   = "AREANAME=" + this.tab_search.Tab1.form.edt_area.value;
            }
        	else if(popupId == "SRCH_PRODUCTDEF160") /*조회조건-품목*/
            {
                opts = "width=800,height=500";
        		oArg.arg_type        = "CA";
        		oArg.arg_paramCols   = "P_POPTYPE";
                oArg.arg_paramValues = "PRODUCTDEFINITION";
                oArg.arg_rtnCols     = "PRODUCTDEFID|PRODUCTDEFNAME";
        		oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + this.tab_search.Tab1.form.edt_productDef.value;
            }

            this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if(this.nfn_isNull(rtn)) return;

            if(sPopupId == "SRCH_VENDOR183")           /*조회조건-거래처*/
            {
                this.tab_search.Tab1.form.edt_vendor_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_vendor.set_value(rtn[1]);
            }
        	else if(sPopupId == "SRCH_PROCESS156")     /*조회조건-공정*/
        	{
                this.tab_search.Tab1.form.edt_process_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_process.set_value(rtn[1]);
            }
        	else if(sPopupId == "SRCH_AREA157")     /*조회조건-작업장*/
            {
                this.tab_search.Tab1.form.edt_area_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_area.set_value(rtn[1]);
            }
        	else if(sPopupId == "SRCH_PRODUCTDEF160")  /*조회조건-품목*/
            {
        		var arrProductdefId      = "";
        		var arrProductdefNM      = "";

        		for(var i=0; i<rtn.length; i++){
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
        	this.tab_search.Tab1.form.cbo_period.set_value("THISDAY");            //금일
        	this.tab_search.Tab1.form.cbo_requestStatus.set_value("RequestWait"); //의뢰대기
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
         * 기능 : 의뢰일자 셋팅
         */
        this.fn_setSearchDate = function (periodType)
        {
        	this.tab_search.Tab1.form.cal_requestDateF.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
         	this.tab_search.Tab1.form.cal_requestDateT.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        };

        /*
         * 기능 : 의뢰취소 버튼 클릭시
         */
        this.fn_cancelRequest = function(obj,e)
        {
            if(this.ds_qcOspRequestInspList.getCaseCount("CHK == 1") <=0)
            {
                this.gfn_Message("NoSelections", null, "error", "ok");
                return;
            }

            var component = this.div_work.form.grd_qcOspRequestInspList;
            var rtn = this.fn_gridValueCheck("C", component);
            if (rtn == false) return;

        	var bOK = this.gfn_Message("CancelConfirm", this.nfn_getDictionarynameUpper("REQUEST"), "conf", "yesno");//{0}을(를) 취소하시겠습니까?
        	if (bOK == false)
        	{
        		return;
        	}

            // -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveQcOspRequestInspCancel";
            var sController   = "/qam00500/saveQcOspRequestInspCancel.do";
            var sInDatasets   = "INPUT=ds_qcOspRequestInspList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 의뢰 버튼 클릭시
         */
        this.fn_request = function(obj,e)
        {
            if(this.ds_qcOspRequestInspList.getCaseCount("CHK == 1") <=0)
            {
                this.gfn_Message("NoSelections", null, "error", "ok");
                return;
            }

            var component = this.div_work.form.grd_qcOspRequestInspList;
            var rtn = this.fn_gridValueCheck("R", component);
            if (rtn == false) return;

        	var bOK = this.gfn_Message("RequestConfirm", this.nfn_getDictionarynameUpper("REQUEST"), "conf", "yesno");//{0}을(를) 요청하시겠습니까?
        	if (bOK == false)
        	{
        		return;
        	}

            // -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveQcOspRequestInsp";
            var sController   = "/qam00500/saveQcOspRequestInsp.do";
            var sInDatasets   = "INPUT=ds_qcOspRequestInspList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능: 의뢰, 의뢰취소 시 데이터 체크
         */
        this.fn_gridValueCheck = function(pJobFlag, pComponent)
        {
            var objGrid = pComponent
            var strColIdList = "";
            var objDataSet = this.all[objGrid.binddataset];

            for(var i=0; i < objDataSet.getRowCount(); i++)
            {
                if (objDataSet.getColumn(i, "CHK") == "1")
                {
        			if (pJobFlag == "C") //의뢰취소
        			{
        				if (   objDataSet.getColumn(i, "REQUESTSTATUS") == "RequestComplete"
        					|| objDataSet.getColumn(i, "REQUESTSTATUS") == "InspectionCompleted"
        					|| objDataSet.getColumn(i, "REQUESTSTATUS") == "RequestWait")
        				{
        					this.gfn_Message("CantCancelInspRequest", null, "warning", "ok"); //의뢰중인 건만 의뢰취소 가능합니다.
        					return false;
        				}
        			}
        			else if (pJobFlag = "R") //의뢰
        			{
        				if ( objDataSet.getColumn(i, "REQUESTSTATUS") != "RequestWait" )
        				{
        					this.gfn_Message("CantInspRequest", null, "warning", "ok"); //의뢰대기중인 건만 의뢰가 가능합니다.
        					return false;
        				}
        				else if ( objDataSet.getColumn(i, "SHIPREQUIRED") == "Y" )
        				{
        					if ( objDataSet.getColumn(i, "SELFSHIPINSPRESULT") == "N" )
        					{
        						this.gfn_Message("NotExistsInspectionShipResultOSP", null, "warning", "ok");//자주검사(출하) 결과가 없는 Lot은 공정수입검사를 의뢰 할 수 없습니다.
        						return false;
        					}
        				}
        				/*20210625 수입검사결과등록시 체크하므로 품질규격검사 체크제외
        				else if ( objDataSet.getColumn(i, "OPERATIONREQUIRED") == "Y" )
        				{
        					if ( objDataSet.getColumn(i, "MEASUREINSPRESULT") == "N" )
        					{
        						this.gfn_Message("NotExistsInspectionQualityResultOSP", null, "warning", "ok");//품질규격 검사 결과가 없는 Lot은 공정수입검사를 의뢰 할 수 없습니다.
        						return false;
        					}
        				}*/
        			}//if pJobFlag

        			if ( objDataSet.getColumn(i, "ISMODIFY") != "Y" )
        			{
        				var areaName = objDataSet.getColumn(i, "AREANAME");
        				this.gfn_Message("NoMatchingAreaUser", areaName, "warning", "ok");//작업장에 대한 권한이 없습니다. {0}
        				return false;
        			}
        		}
        	}

        	return true;
        };

        /*
         * 기능: 그리드의 LotNo 찾기
         */
        this.fn_searchLotNo = function(obj,e)
        {
            if(e.keycode==13)
        	{
        		var requestDate = "(REQUESTDATE == '' || REQUESTDATE == null || REQUESTDATE == undefined)";
        		var requestor   = "(REQUESTOR == '' || REQUESTOR == null || REQUESTOR == undefined)";
        		var degree      = "(DEGREE == '' || DEGREE == null || DEGREE == undefined)";

        		var searchKey = this.div_work.form.div_subSearch.form.edt_gridLotId.value;
        		var findRow = this.ds_qcOspRequestInspList.findRowExprNF(requestDate +" && "+ requestor +" && "+ degree +" && LOTID == '" + searchKey + "'");

        		if (findRow < 0)
        		{
        			this.gfn_Message("NoDataToOSPRequest", null, "warning", "ok");//공정수입검사를 의뢰할 대상이 없습니다.
        			return;
        		}
        		else
        		{
        			var lotHistKey = this.ds_qcOspRequestInspList.getColumn(findRow, "LOTHISTKEY");
        			var count = 0;

        			for (var i=0; i < this.ds_qcOspRequestInspList.getRowCount(); i++)
        			{
        				if (  this.nfn_isNull(this.ds_qcOspRequestInspList.getColumn(i, "DEGREE"))
        				   && this.ds_qcOspRequestInspList.getColumn(i, "LOTHISTKEY") == lotHistKey)
        				{
        					this.ds_qcOspRequestInspList.setColumn(i, "CHK", 1);
        					count++;
        				}
        			}

        			if (count == 0)
        			{
        				this.gfn_Message("NoDataToOSPRequest", null, "warning", "ok");//공정수입검사를 의뢰할 대상이 없습니다.
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
        this.fn_searchPopup_click = function(obj,e)
        {
        	if (obj.name == "btn_vendor")
        	{
        		this.fn_openPop("SRCH_VENDOR183","P00183"); //거래처
        	}
        	else if (obj.name == "btn_process")
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
        	if (obj.name == "edt_vendor")
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_vendor_id.set_value("");
        	}
        	else if (obj.name == "edt_process")
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_saveRequest.addEventHandler("onclick",this.fn_request,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_saveCancelRequest.addEventHandler("onclick",this.fn_cancelRequest,this);
            this.div_work.form.div_subSearch.form.edt_gridLotId.addEventHandler("onkeydown",this.fn_searchLotNo,this);
            this.tab_search.Tab1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tab1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tab1.form.edt_vendor.addEventHandler("canchange",this.fn_popup_canchange,this);
            this.tab_search.Tab1.form.btn_vendor.addEventHandler("onclick",this.fn_searchPopup_click,this);
            this.tab_search.Tab1.form.edt_process.addEventHandler("canchange",this.fn_popup_canchange,this);
            this.tab_search.Tab1.form.btn_process.addEventHandler("onclick",this.fn_searchPopup_click,this);
            this.tab_search.Tab1.form.cbo_period.addEventHandler("onitemchanged",this.tab_search_Tab1_cbo_period_onitemchanged,this);
            this.tab_search.Tab1.form.cal_requestDateF.addEventHandler("onchanged",this.fn_preiodChang,this);
            this.tab_search.Tab1.form.cal_requestDateT.addEventHandler("onchanged",this.fn_preiodChang,this);
            this.tab_search.Tab1.form.edt_area.addEventHandler("canchange",this.fn_popup_canchange,this);
            this.tab_search.Tab1.form.btn_area.addEventHandler("onclick",this.fn_searchPopup_click,this);
            this.tab_search.Tab1.form.edt_productDef.addEventHandler("canchange",this.fn_popup_canchange,this);
            this.tab_search.Tab1.form.btn_productDef.addEventHandler("onclick",this.fn_searchPopup_click,this);
        };
        this.loadIncludeScript("QAM00500M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
