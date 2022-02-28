(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM02100M");
            this.set_titletext("불량품 현황조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_defectStatusList", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOVERYSITE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSITE\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOINCODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ISINBOUND\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVETIME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCONFIRMATION\" type=\"STRING\" size=\"256\"/><Column id=\"DEFINETIME\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLOSE\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSETIME\" type=\"STRING\" size=\"256\"/><Column id=\"ISIFSUCCESS\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATENAME\" type=\"STRING\" size=\"256\"/><Column id=\"OCCURREDSTEPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_userAuthorityPlantList", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"STARTBUSINESSHOUR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"INBOUND\" type=\"STRING\" size=\"256\"/><Column id=\"DEADLINE\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRMATION\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Button("btn_help",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","128","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-QC-0770");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
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

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_defectStatusList","31.32%","0","120","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_fittocontents("none");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","0","0",null,"34","sta_cnt_ds_defectStatusList:41.67%",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("불량품 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-QC-0790");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_defectStatusList","0","34",null,null,"0","2",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_defectStatusList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"220\"/><Column size=\"200\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" colspan=\"17\" text=\"제품정보\" cssclass=\"cell_headMaster\" tooltiptext=\"PRODUCTINFO\"/><Cell col=\"18\" colspan=\"6\" text=\"원인공정\" cssclass=\"cell_headMaster\" tooltiptext=\"REASONSEGMENT\"/><Cell col=\"24\" colspan=\"6\" text=\"불랑품진행현황\" cssclass=\"cell_headMaster\" tooltiptext=\"DEFECTPROCESSSTATUS\"/><Cell col=\"30\" rowspan=\"2\" text=\"공정진행상태\" tooltiptext=\"PROCESSSTATE\"/><Cell col=\"31\" rowspan=\"2\" tooltiptext=\"PROCESSSTEP\" text=\"처리STEP\"/><Cell col=\"32\" rowspan=\"2\" text=\"유효상태\" tooltiptext=\"VALIDSTATE\"/><Cell row=\"1\" col=\"1\" text=\"처리일시\" tooltiptext=\"PROCESSDATE\"/><Cell row=\"1\" col=\"2\" text=\"양산구분\" tooltiptext=\"LOTTYPE\"/><Cell row=\"1\" col=\"3\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell row=\"1\" col=\"4\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell row=\"1\" col=\"5\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell row=\"1\" col=\"6\" text=\"Lot No\" tooltiptext=\"PARENTLOTID\"/><Cell row=\"1\" col=\"7\" tooltiptext=\"DEFECTCODE\" text=\"불량코드\"/><Cell row=\"1\" col=\"8\" text=\"불량명\" tooltiptext=\"DEFECTNAME\"/><Cell row=\"1\" col=\"9\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell row=\"1\" col=\"10\" text=\"PNL\"/><Cell row=\"1\" col=\"11\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell row=\"1\" col=\"12\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell row=\"1\" col=\"13\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell row=\"1\" col=\"14\" text=\"Site\" tooltiptext=\"SITE\"/><Cell row=\"1\" col=\"15\" text=\"처리자\" tooltiptext=\"PROCESSUSER\"/><Cell row=\"1\" col=\"16\" text=\"불량 Lot No\" tooltiptext=\"DEFECTLOTID\"/><Cell row=\"1\" col=\"17\" text=\"UOM\" tooltiptext=\"UOM\"/><Cell row=\"1\" col=\"18\" text=\"원인품목\" tooltiptext=\"REASONPRODUCT\"/><Cell row=\"1\" col=\"19\" text=\"원인 LOTID\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell row=\"1\" col=\"20\" text=\"원인공정\" tooltiptext=\"REASONSEGMENT\"/><Cell row=\"1\" col=\"21\" text=\"원인작업장\" tooltiptext=\"REASONAREA\"/><Cell row=\"1\" col=\"22\" text=\"원인 Site\" tooltiptext=\"REASONPLANT\"/><Cell row=\"1\" col=\"23\" text=\"거래처명\" tooltiptext=\"VENDORNAME\"/><Cell row=\"1\" col=\"24\" text=\"인수여부\" tooltiptext=\"ISINBOUND\"/><Cell row=\"1\" col=\"25\" text=\"인수일시\" tooltiptext=\"RECEIVETIME\"/><Cell row=\"1\" col=\"26\" text=\"확정여부\" tooltiptext=\"ISCONFIRMATION\"/><Cell row=\"1\" col=\"27\" text=\"확정일시\" tooltiptext=\"DEFINETIME\"/><Cell row=\"1\" col=\"28\" text=\"마감여부\" tooltiptext=\"ISCLOSE\"/><Cell row=\"1\" col=\"29\" text=\"마감일시\" tooltiptext=\"CLOSETIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PROCESSDATE\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"2\" text=\"bind:LOTTYPE\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"6\" text=\"bind:PARENTLOTID\"/><Cell col=\"7\" text=\"bind:JOINCODE\"/><Cell col=\"8\" text=\"bind:JOINNAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:DEFECTQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:DEFECTPNLQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:USERSEQUENCE\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:DISCOVERYSITE\"/><Cell col=\"15\" text=\"bind:PROCESSUSER\"/><Cell col=\"16\" text=\"bind:LOTID\"/><Cell col=\"17\" text=\"bind:UNIT\"/><Cell col=\"18\" text=\"bind:REASONCONSUMABLEDEFNAME\"/><Cell col=\"19\" text=\"bind:REASONCONSUMABLELOTID\"/><Cell col=\"20\" text=\"bind:REASONSEGMENTNAME\"/><Cell col=\"21\" text=\"bind:REASONAREANAME\"/><Cell col=\"22\" text=\"bind:REASONSITE\"/><Cell col=\"23\" text=\"bind:VENDORNAME\"/><Cell col=\"24\" text=\"bind:ISINBOUND\"/><Cell col=\"25\" text=\"bind:RECEIVETIME\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"26\" text=\"bind:ISCONFIRMATION\"/><Cell col=\"27\" text=\"bind:DEFINETIME\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"28\" text=\"bind:ISCLOSE\"/><Cell col=\"29\" text=\"bind:CLOSETIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"30\" text=\"bind:PROCESSSTATENAME\"/><Cell col=\"31\" text=\"bind:OCCURREDSTEPNAME\"/><Cell col=\"32\" text=\"bind:VALIDSTATE\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\" text=\"합 계\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&apos;DEFECTQTY&apos;)\" maskeditformat=\"#,###,###,###,##0\" displaytype=\"mask\"/><Cell col=\"10\" text=\"expr:dataset.getSum(&apos;DEFECTPNLQTY&apos;)\" maskeditformat=\"#,###,###,###,##0\" displaytype=\"mask\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/><Cell col=\"14\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/><Cell col=\"27\"/><Cell col=\"28\"/><Cell col=\"29\"/><Cell col=\"30\"/><Cell col=\"31\"/><Cell col=\"32\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_defectStatusList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
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

            obj = new Combo("cbo_period","10","60","94","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("1");
            obj.set_innerdataset("gds_period");
            obj.set_codecolumn("code");
            obj.set_datacolumn("desc");
            obj.set_text("사용자정의");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_area","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("24");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_defectLodId","108","160","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("8");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_lotType","108","285","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("16");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("23");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("SITE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","425","102","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","425","146","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("25");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"405","45","20","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("26");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","431","10","27",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("27");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_discoverProcess","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("28");
            obj.set_text("발견공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DISCOVERYPROCESS");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_createDate","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("29");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("SEARCHPERIOD");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_area","108","85",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("2");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_plantId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_userAuthorityPlantList");
            obj.set_codecolumn("PLANTID");
            obj.set_datacolumn("PLANTNAME");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_productDef","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("30");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEF");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label05","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("31");
            obj.set_text("불량 Lot No");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DEFECTLOTID");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label06","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("32");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_vendor","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("33");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_processsegmentType","108","310","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("17");
            obj.set_codecolumn("C,ProcessSegmentType,ALL,Y,Y");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_defect","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("34");
            obj.set_text("불량코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DEFECTCODE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_reasonSegment","0","260","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("35");
            obj.set_text("원인공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("REASONSEGMENT");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_lotType","0","285","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("36");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTPRODUCTTYPE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_processsegmentType","0","310","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("37");
            obj.set_text("공정구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSSEGMENTTYPE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_inbound","108","335","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("18");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_deadline","108","360","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("19");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_confirm","108","385","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("20");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_parentLotId","108","185","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("9");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label12","0","335","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("38");
            obj.set_text("인수여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISINBOUND");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label13","0","360","115","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("39");
            obj.set_text("마감여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISCLOSE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("label14","0","385","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("40");
            obj.set_text("확정여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISCONFIRMATION");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_processSegment","108","110",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("4");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_processSegment",null,"110","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productDef","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("6");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_productDef",null,"135","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_vendor","108","210",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("10");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_vendor",null,"210","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_defect","108","235",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("12");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_defect",null,"235","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_reasonSegment","108","260",null,"20","37",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("14");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_reasonSegment",null,"260","22","20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","78","85",null,"20","180",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("41");
            obj.set_background("thistle");
            obj.set_tooltiptext("조회조건 작업장ID");
            obj.set_enable("false");
            obj.set_visible("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_processSegment_id","78","110",null,"20","180",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("43");
            obj.set_background("thistle");
            obj.set_tooltiptext("조회조건 발견공정ID");
            obj.set_enable("false");
            obj.set_visible("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_discoverProcessHidden","69","489",null,"20","209",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("42");
            obj.set_textAlign("right");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_productDef_id","78","135",null,"20","180",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("44");
            obj.set_background("thistle");
            obj.set_tooltiptext("품목");
            obj.set_enable("false");
            obj.set_visible("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_vendor_id","78","210",null,"20","180",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("45");
            obj.set_background("thistle");
            obj.set_tooltiptext("거래처");
            obj.set_enable("false");
            obj.set_visible("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_defect_id","78","235",null,"20","180",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("46");
            obj.set_background("thistle");
            obj.set_tooltiptext("불량코드");
            obj.set_enable("false");
            obj.set_visible("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_reasonSegment_id","78","260",null,"20","180",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("47");
            obj.set_background("thistle");
            obj.set_tooltiptext("원인공정");
            obj.set_enable("false");
            obj.set_visible("false");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Div("div_dateFrom","108","35",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("48");
            obj.set_url("common::com_calendar.xfdl");
            obj.set_text("");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Div("div_dateTo","108","60",null,"20","15",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("49");
            obj.set_url("common::com_calendar.xfdl");
            obj.set_text("");
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
            this._addPreloadList("fdl","common::com_calendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("QAM02100M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM02100M.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM02100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 불량품 현황조회(품질관리 - 불량품 관리)
         * 파일명         : QAM021000M.xfdl
         * 작성자         : yanghee.kim
         * 작성일         : 2021.04.21
         *
         * 설  명         :
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.21   yanghee.kim   최초작성
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
        this.lang;
        this.userId;
        this.plantId;
        this.enterpriseId;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
            this.nfn_formInit(obj);
        	this.lang = this.gf_getLanguageType();
        	this.userId = this.gf_getUserId();
        	this.plantId = this.gf_getSiteType();
        	this.enterpriseId = this.gf_getEnterpriseId();

        	this.fn_searchUserPlant(); //접속사용자의 PLANT 조회
        	this.basfn_getPeriodData("ds_periodType");

        	this.tab_search.Tab1.form.div_dateFrom.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_preiodChang, this);
        	this.tab_search.Tab1.form.div_dateTo.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_preiodChang, this);

        	this.fn_formInit();    //최초 호출되는 초기화 함수
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
            this.ds_defectStatusList.clearData();
            this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow, "ENTERPRISEID",        this.enterpriseId);
        	this.ds_search.setColumn(nRow, "LANGUAGETYPE",        this.lang);
            this.ds_search.setColumn(nRow, "PLANTID",             this.tab_search.Tab1.form.cbo_plantId.value);
        	this.ds_search.setColumn(nRow, "PERIODFR",            this.tab_search.Tab1.form.div_dateFrom.form.calStart.value);
        	this.ds_search.setColumn(nRow, "PERIODTO",            this.tab_search.Tab1.form.div_dateTo.form.calStart.value);
        	this.ds_search.setColumn(nRow, "AREAID",              this.tab_search.Tab1.form.edt_area_id.value);
        	this.ds_search.setColumn(nRow, "PROCESSSEGMENTID",    this.tab_search.Tab1.form.edt_processSegment_id.value);
        	this.ds_search.setColumn(nRow, "PRODUCTDEFID",        this.tab_search.Tab1.form.edt_productDef_id.value);
        	this.ds_search.setColumn(nRow, "LOTID",               this.tab_search.Tab1.form.edt_defectLodId.value);
        	this.ds_search.setColumn(nRow, "PARENTLOTID",         this.tab_search.Tab1.form.edt_parentLotId.value);
        	this.ds_search.setColumn(nRow, "VENDORID",            this.tab_search.Tab1.form.edt_vendor_id.value);
        	this.ds_search.setColumn(nRow, "DEFECTCODE",          this.tab_search.Tab1.form.edt_defect_id.value);
        	this.ds_search.setColumn(nRow, "REASONSEGMENTID",     this.tab_search.Tab1.form.edt_reasonSegment_id.value);
        	this.ds_search.setColumn(nRow, "LOTTYPE",             this.tab_search.Tab1.form.cbo_lotType.value);
        	this.ds_search.setColumn(nRow, "PROCESSSEGMENTTYPE",  this.tab_search.Tab1.form.cbo_processsegmentType.value);
        	this.ds_search.setColumn(nRow, "INBOUND",             this.tab_search.Tab1.form.cbo_inbound.value);
            this.ds_search.setColumn(nRow, "DEADLINE",            this.tab_search.Tab1.form.cbo_deadline.value);
        	this.ds_search.setColumn(nRow, "CONFIRMATION",        this.tab_search.Tab1.form.cbo_confirm.value);
        	this.ds_search.setColumn(nRow, "USERID",              this.userId);

            var sSvcID        = "selectGetDefectStatusList";
            var sController   = "/qam02100/selectGetDefectStatusList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_defectStatusList=output";
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
        	    if (trId == "selectGetDefectStatusList")
                {
        			if (this.ds_defectStatusList.rowcount  < 1)
        			{
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
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
            // arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅, C::사용자 멀티 선택
            // popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
            // popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
            // rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
            // paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
            // paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
            // searchStr   : 팝업 조회조건 콤보값 = 조회 값

            var popupId = svcId;
            var oArg = {};
            var opts = "width=650,height=500";

            oArg.arg_type = "BA";
            oArg.arg_popupCd = popId;
            oArg.arg_popupNm = "";
            oArg.arg_paramCols = "";
            oArg.arg_paramValues = "";
            oArg.arg_searchStr = "";

        	var plantId = this.tab_search.Tab1.form.cbo_plantId.value;
        	var areaId = this.tab_search.Tab1.form.edt_area_id.value;

            if(popupId == "SRCH_AREA228")    /*조회조건-작업장*/
            {
                opts = "width=450,height=500";
        		oArg.arg_paramCols   = "LANGUAGETYPE|PLANTID|USER_ID";
                oArg.arg_paramValues = this.lang +'|'+ plantId +'|'+ this.userId;
                oArg.arg_rtnCols     = "AREAID|AREANAME";
        		oArg.arg_searchStr   = "AREAIDNAME=" + this.tab_search.Tab1.form.edt_area.value;
            }
        	else if(popupId == "SRCH_PROCESS248")    /*조회조건-발견공정*/
            {
                opts = "width=450,height=500";
        		oArg.arg_paramCols   = "LANGUAGETYPE|ENTERPRISEID";
                oArg.arg_paramValues = this.lang +'|'+ this.enterpriseId;
                oArg.arg_rtnCols     = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        		oArg.arg_searchStr   = "PROCESSSEGMENTIDNAME=" + this.tab_search.Tab1.form.edt_processSegment.value;
            }
        	else if(popupId == "SRCH_PRODUCTDEF218")    /*조회조건-품목*/
            {
        		oArg.arg_paramCols   = "PLANTID";
                oArg.arg_paramValues = this.plantId;
                oArg.arg_rtnCols     = "PRODUCTDEFIDVERSION|PRODUCTDEFNAME";
        		oArg.arg_searchStr   = "PRODUCTDEFIDNAME=" + this.tab_search.Tab1.form.edt_productDef.value;
            }
        	else if(popupId == "SRCH_VENDOR183")    /*조회조건-거래처*/
            {
        		opts = "width=450,height=480";
        		oArg.arg_paramCols   = "ENTERPRISEID|PLANTID";
                oArg.arg_paramValues = this.enterpriseId +'|'+ plantId;
                oArg.arg_rtnCols     = "VENDORID|VENDORNAME";
        		oArg.arg_searchStr   = "VENDORIDNAME=" + this.tab_search.Tab1.form.edt_vendor.value;
            }
        	else if(popupId == "SRCH_DEFECT230")    /*조회조건-불량코드*/
            {
        		opts = "width=490,height=500";
        		oArg.arg_type        = "BA";
        		oArg.arg_paramCols   = "LANGUAGETYPE";
        		oArg.arg_paramValues = this.gf_getLanguageType();
                oArg.arg_rtnCols     = "JOINCODE|JOINNAME|DEFECTCODE|QCSEGMENTID";
        		oArg.arg_searchStr   = "DEFECTCODENAME=" + this.tab_search.Tab1.form.edt_defect.value;
            }
        	else if(popupId == "SRCH_REASON248")    /*조회조건-원인공정*/
            {
                opts = "width=450,height=500";
        		oArg.arg_paramCols   = "LANGUAGETYPE|ENTERPRISEID";
                oArg.arg_paramValues = this.lang +'|'+ this.enterpriseId;
                oArg.arg_rtnCols     = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        		oArg.arg_searchStr   = "PROCESSSEGMENTIDNAME=" + this.tab_search.Tab1.form.edt_reasonSegment.value;
            }

            this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if(this.nfn_isNull(rtn)) return;

            if (sPopupId == "SRCH_AREA228")    /*조회조건-작업장*/
            {
                this.tab_search.Tab1.form.edt_area_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_area.set_value(rtn[1]);
            }
        	else if (sPopupId == "SRCH_PROCESS248")    /*조회조건-발견공정*/
            {
                this.tab_search.Tab1.form.edt_processSegment_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_processSegment.set_value(rtn[1]);
            }
        	else if (sPopupId == "SRCH_PRODUCTDEF218")    /*조회조건-품목*/
            {
                this.tab_search.Tab1.form.edt_productDef_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_productDef.set_value(rtn[1]);
            }
        	else if(sPopupId == "SRCH_VENDOR183")    /*조회조건-거래처*/
            {
        		this.tab_search.Tab1.form.edt_vendor_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_vendor.set_value(rtn[1]);
            }
        	else if(sPopupId == "SRCH_DEFECT230")    /*조회조건-불량코드*/
            {
        		this.tab_search.Tab1.form.edt_defect_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_defect.set_value(rtn[1]);
            }
        	else if(sPopupId == "SRCH_REASON248")    /*조회조건-원인공정*/
            {
        		this.tab_search.Tab1.form.edt_reasonSegment_id.set_value(rtn[0]);
        		this.tab_search.Tab1.form.edt_reasonSegment.set_value(rtn[1]);
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
        	this.fn_setSearchDate("thisweek"); //조회기간 셋팅
        	this.tab_search.Tab1.form.cbo_plantId.set_value(this.plantId);
        	this.tab_search.Tab1.form.cbo_period.set_value("thisweek"); //금일
        };

        /*
         * 기능 : 조회조건 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        };

        /*
         * 이벤트 : 조회조건- 조회기간 직접 변경시
         */
        this.fn_preiodChang = function(obj,e)
        {
        	if (!this.nfn_isNull(this.tab_search.Tab1.form.cbo_period.value))
        	{
        		this.tab_search.Tab1.form.cbo_period.set_text("사용자정의");
        	}
        };

        /*
         * 기능 : 조회기간의 기간타입이 변경될 경우 날짜 셋팅
         */
        this.fn_setSearchDate = function (pChangValue)
        {
        	if (this.nfn_isNull(pChangValue)) return false;

        	var sDate = this.nfn_getCurrentSystemTime(0, 0, pChangValue);
        	var arrDate = sDate.split(",");
        	var sDateFrom = arrDate[1];
        	var sDateTo = arrDate[2];
        	var sTime = "0830";

        	this.tab_search.Tab1.form.div_dateFrom.form.calStart.set_value(sDateFrom+sTime);
        	this.tab_search.Tab1.form.div_dateTo.form.calStart.set_value(sDateTo+sTime);
        };

        /*
         * 기능 : 접속사용자의 PLANT 조회
         */
        this.fn_searchUserPlant = function()
        {
            this.ds_userAuthorityPlantList.clearData();
            var sSvcID        = "selectGetUserAuthorityPlantList";
            var sController   = "/qampopup/selectGetUserAuthorityPlantList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_userAuthorityPlantList=output";
            var sArgs         = "";
        	    sArgs        += this.gfn_setParam("ENTERPRISEID",     this.enterpriseId); //
        		sArgs        += this.gfn_setParam("LANGUAGETYPE",     this.lang);
                sArgs        += this.gfn_setParam("PLANTID",          this.plantId); //Site
        		sArgs        += this.gfn_setParam("USER_ID",          this.userId); //Site
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false);
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 이벤트 : 조회조건 아이콘 버튼 클릭시
         */
        this.fn_popup_click = function(obj,e)
        {
        	if (obj.name == "btn_area")
        	{
        		this.fn_openPop("SRCH_AREA228","P00228"); //작업장
        	}
        	else if (obj.name == "btn_processSegment")
        	{
        		this.fn_openPop("SRCH_PROCESS248","P00248"); //발견공정
        	}
        	else if (obj.name == "btn_productDef")
        	{
        		this.fn_openPop("SRCH_PRODUCTDEF218","P00218"); //품목
        	}
        	else if (obj.name == "btn_vendor")
        	{
        		this.fn_openPop("SRCH_VENDOR183","P00183"); //거래처
        	}
        	else if (obj.name == "btn_defect")
        	{
        		this.fn_openPop("SRCH_DEFECT230","P00230"); //불량코드
        	}
        	else if (obj.name == "btn_reasonSegment")
        	{
        		this.fn_openPop("SRCH_REASON248","P00248"); //원인공정
        	}
        };

        /*
         * 이벤트 : 조회조건 이름 삭제시 id 초기화
         */
        this.fn_popup_canchange = function(obj,e)
        {
        	if (obj.name == "edt_area")
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_area_id.set_value(""); //작업장
        	}
        	else if (obj.name == "edt_processSegment")
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_processSegment_id.set_value(""); //발견공정
        	}
        	else if (obj.name == "edt_productDef")
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_productDef_id.set_value(""); //품목
        	}
        	else if (obj.name == "edt_vendor")
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_vendor_id.set_value(""); //거래처
        	}
        	else if (obj.name == "edt_defect")
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_defect_id.set_value(""); //불량코드
        	}
        	else if (obj.name == "edt_reasonSegment")
        	{
        		this.nfn_isNull(e.postvalue) == false ? "": this.tab_search.Tab1.form.edt_reasonSegment_id.set_value(""); //원인공정
        	}
        };

        /*
         * 이벤트 : 조회조건- 조회기간 타입 변경시
         */
        this.tab_search_Tab1_cbo_period_canitemchange = function(obj,e)
        {
        	this.fn_setSearchDate(e.postvalue);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tab1.form.cbo_period.addEventHandler("canitemchange",this.tab_search_Tab1_cbo_period_canitemchange,this);
            this.tab_search.Tab1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tab1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tab1.form.btn_area.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.btn_processSegment.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.btn_productDef.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.btn_vendor.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.btn_defect.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.btn_reasonSegment.addEventHandler("onclick",this.fn_popup_click,this);
            this.tab_search.Tab1.form.div_dateFrom.addEventHandler("onkeydown",this.fn_preiodChang,this);
            this.tab_search.Tab1.form.div_dateFrom.addEventHandler("onrbuttondown",this.tab_search_Tab1_div_dateFrom_onrbuttondown,this);
            this.tab_search.Tab1.form.div_dateFrom.addEventHandler("onrbuttonup",this.tab_search_Tab1_div_dateFrom_onrbuttonup,this);
            this.tab_search.Tab1.form.div_dateTo.addEventHandler("onkeydown",this.fn_preiodChang,this);
        };
        this.loadIncludeScript("QAM02100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
