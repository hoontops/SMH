(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM03400M");
            this.set_titletext("AFFECT LOT산정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qamAffectLot", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ROOTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBUSERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ROOTLOTSTARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"BOXNO\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDUSERNM\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RAWMATERIALDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"RAWMATERIALDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RAWMATERIALLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBASSEMDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBASSEMDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBASSEMLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHSTACK\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTSTARTDATEFR\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTARTDATETO\" type=\"STRING\" size=\"256\"/><Column id=\"SENDTIMEFR\" type=\"STRING\" size=\"256\"/><Column id=\"SENDTIMETO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"BOXNO\" type=\"STRING\" size=\"256\"/><Column id=\"LOTWORKRESULTDATETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKRESULTDATEFR\" type=\"STRING\" size=\"256\"/><Column id=\"WORKRESULTDATETO\" type=\"STRING\" size=\"256\"/><Column id=\"TOPPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLEPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLEPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTIDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDUSER\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"RAWMATERIALLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBASSEMLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"SUBASSEMDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"RAWMATERIALDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTSTARTDATEFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTSTARTDATETO\" type=\"STRING\" size=\"256\"/><Column id=\"P_WORKRESULTDATEFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_WORKRESULTDATETO\" type=\"STRING\" size=\"256\"/><Column id=\"P_SENDTIMEFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_SENDTIMETO\" type=\"STRING\" size=\"256\"/><Column id=\"ISCHECK\" type=\"STRING\" size=\"256\"/><Column id=\"SEMIMATERIALDEFNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Static("sta_title","30","16","144","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("AFFECT LOT 산정");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-QC-0556");
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

            obj = new Static("sta_subTitle","0","0","126","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-QC-0556");
            obj.set_text("AFFECT LOT 산정");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_qamAffectLot","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamAffectLot");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"215\"/><Column size=\"215\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"70\"/><Column size=\"120\"/><Column size=\"75\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"210\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"210\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"2\" text=\"ROOT LOT\" tooltiptext=\"ROOT LOT\"/><Cell col=\"3\" text=\"고객명\" tooltiptext=\"CUSTOMERNAME\"/><Cell col=\"4\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"5\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"6\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell col=\"7\" text=\"공정ID\"/><Cell col=\"8\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"9\" text=\"공정순서\" tooltiptext=\"PROCESSSEQUENCE\"/><Cell col=\"10\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell col=\"11\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell col=\"12\" text=\"자원명\" tooltiptext=\"RESOURCENAME\"/><Cell col=\"13\" text=\"작업구분\" tooltiptext=\"WORKTYPE\"/><Cell col=\"14\" text=\"LOT 투입일시\" tooltiptext=\"LOTPROCESSSEGMENTINPUTDATE\"/><Cell col=\"15\" text=\"인수일\" tooltiptext=\"RECEIVEDATE\"/><Cell col=\"16\" text=\"시작일\" tooltiptext=\"STARTDATE\"/><Cell col=\"17\" text=\"작업완료일\" tooltiptext=\"WORKENDDATE\"/><Cell col=\"18\" text=\"인계일\" tooltiptext=\"LOTSENDDATE\"/><Cell col=\"19\" text=\"주차\" tooltiptext=\"WEEK\"/><Cell col=\"20\" text=\"Box No\" tooltiptext=\"BOXNO\"/><Cell col=\"21\" text=\"설비ID\" tooltiptext=\"EQUIPMENTID\"/><Cell col=\"22\" text=\"설비명\"/><Cell col=\"23\" text=\"작업자\" tooltiptext=\"WORKENDUSER\"/><Cell col=\"24\" text=\"치공구ID\" tooltiptext=\"DURABLEDEFID\"/><Cell col=\"25\" text=\"치공구명\" tooltiptext=\"DURABLEDEFNAME\"/><Cell col=\"26\" text=\"Tool No.\" tooltiptext=\"DURABLELOTID\"/><Cell col=\"27\" text=\"원자재\" tooltiptext=\"RAWMATERIAL\"/><Cell col=\"28\" text=\"원자재명\" tooltiptext=\"RAWMATERIALDEFNAME\"/><Cell col=\"29\" text=\"원자재LOT\" tooltiptext=\"RAWMATERIALLOTID\"/><Cell col=\"30\" text=\"반제품코드\" tooltiptext=\"SUBASSEMDEFID\"/><Cell col=\"31\" text=\"반제품명\" tooltiptext=\"SUBASSEMDEFNAME\"/><Cell col=\"32\" text=\"반제품LOT\" tooltiptext=\"SUBASSEMLOTID\"/><Cell col=\"33\" text=\"LOT 상태\" tooltiptext=\"LOTSTATE\"/><Cell col=\"34\" text=\"재공상태\" tooltiptext=\"PROCESSSTATE\"/><Cell col=\"35\" text=\"현재공정\" tooltiptext=\"PROCESSSEGMENTID\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:LOTID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:ROOTLOTID\"/><Cell col=\"3\" text=\"bind:CUSTOMERNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PROCESSSEGMENTID\"/><Cell col=\"8\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:PROCESSSEQUENCE\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:PLANTID\"/><Cell col=\"11\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:RESOURCENAME\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:WORKTYPE\"/><Cell col=\"14\" text=\"bind:ROOTLOTSTARTDATE\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:RECEIVEDATE\" textAlign=\"center\"/><Cell col=\"16\" text=\"bind:STARTDATE\" textAlign=\"center\"/><Cell col=\"17\" text=\"bind:WORKENDDATE\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:LOTSENDDATE\" textAlign=\"center\"/><Cell col=\"19\" text=\"bind:WEEK\" textAlign=\"center\"/><Cell col=\"20\" text=\"bind:BOXNO\" textAlign=\"center\"/><Cell col=\"21\" text=\"bind:EQUIPMENTID\"/><Cell col=\"22\" text=\"bind:EQUIPMENTNAME\" textAlign=\"left\"/><Cell col=\"23\" text=\"bind:WORKENDUSERNM\" textAlign=\"left\"/><Cell col=\"24\" text=\"bind:DURABLEDEFID\" textAlign=\"left\"/><Cell col=\"25\" text=\"bind:DURABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"26\" text=\"bind:DURABLELOTID\" textAlign=\"left\"/><Cell col=\"27\" text=\"bind:RAWMATERIALDEFID\" textAlign=\"left\"/><Cell col=\"28\" text=\"bind:RAWMATERIALDEFNAME\" textAlign=\"left\"/><Cell col=\"29\" text=\"bind:RAWMATERIALLOTID\" textAlign=\"left\"/><Cell col=\"30\" text=\"bind:SUBASSEMDEFID\" textAlign=\"left\"/><Cell col=\"31\" text=\"bind:SUBASSEMDEFNAME\" textAlign=\"left\"/><Cell col=\"32\" text=\"bind:SUBASSEMLOTID\" textAlign=\"left\"/><Cell col=\"33\" text=\"bind:LOTSTATE\" displaytype=\"combotext\" combocodecol=\"C,LotState,,Y,N\"/><Cell col=\"34\" text=\"bind:PROCESSSTATE\" displaytype=\"combotext\" combocodecol=\"C,LotProcessState,,Y,N\"/><Cell col=\"35\" text=\"bind:LOT_PROCESSSEGMENTNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_qamAffectLot",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_qamAffectLot","242","0",null,"34","562",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new CheckBox("ckb_check",null,"8","70","21","36",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_text("단일조회");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","664","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("40");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","664","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("38");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("37");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"655","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("39");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_lotstartdate","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("41");
            obj.set_text("투입일");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INPUTDAY");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_processsegment","0","360","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("42");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSSEGMENT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_processsegment","108","360",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_processsegment",null,"360","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("43");
            obj.set_text("Site ID");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("PLANTID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_lotstartdatefr","108","60",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_lotstartdateto","108","85",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_lot","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("44");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_lot","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productdef","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("45");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdef","108","160",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_productdef",null,"160","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdef_id","56","154","45","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("46");
            obj.set_value("품목ID");
            obj.set_visible("false");
            obj.set_background("thistle");
            obj.set_text("품목ID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_materialdef_id","58","560","50","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("47");
            obj.set_value("원자재ID");
            obj.set_visible("false");
            obj.set_background("thistle");
            obj.set_text("원자재ID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","58","385","50","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("48");
            obj.set_value("작업장ID");
            obj.set_visible("false");
            obj.set_background("thistle");
            obj.set_text("작업장ID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_durabledef_id","68","509","40","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("49");
            obj.set_value("치공구명ID");
            obj.set_visible("false");
            obj.set_background("thistle");
            obj.set_text("치공구명ID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_topProcesssegment_id","58","310","50","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("50");
            obj.set_value("대공정ID");
            obj.set_visible("false");
            obj.set_background("thistle");
            obj.set_text("대공정ID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productdef_cd","56","175","50","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("51");
            obj.set_value("품목REV");
            obj.set_visible("false");
            obj.set_background("thistle");
            obj.set_text("품목REV");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_lot",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_sendtimeto","108","135",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_sendtimefr","108","110",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productincometime","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("52");
            obj.set_text("생산입고일자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTINCOMETIME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_week","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("53");
            obj.set_text("주차");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WEEK");
            obj.set_visible("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_week","108","185",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_week",null,"185","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_boxno","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("54");
            obj.set_text("Box No");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("BOXNO");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_boxno","108","210",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_boxno",null,"210","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_lotworkresultdatetype","108","235","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_codecolumn("C,LotWorkResultDateType,,Y,Y");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_workendtime","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("55");
            obj.set_text("작업일자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ACTUALDATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_workresultdatefr","108","260",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("56");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_workresultdateto","108","285",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("57");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_area","0","385","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("58");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_area","108","385",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"385","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            obj.getSetter("readonly").set("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_resource","0","410","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("59");
            obj.set_text("자원 ID");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("EQUIPMENTCLASSID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_resource","108","410",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_readonly("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_resource",null,"410","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            obj.getSetter("readonly").set("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_resource_id","58","410","50","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("60");
            obj.set_value("자원ID");
            obj.set_visible("false");
            obj.set_background("thistle");
            obj.set_text("자원ID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_equipment","0","435","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("61");
            obj.set_text("설비 ID");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("EQUIPMENTID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_equipment","108","435",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_equipment",null,"435","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            obj.getSetter("readonly").set("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_equipment_id","58","435","50","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("62");
            obj.set_value("설비ID");
            obj.set_visible("false");
            obj.set_background("thistle");
            obj.set_text("설비ID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_workenduser","0","460","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("63");
            obj.set_text("작업자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WORKMAN");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_workenduser","108","460",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_readonly("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_workenduser",null,"460","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            obj.getSetter("readonly").set("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_durableclassid","0","485","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("64");
            obj.set_text("치공구 구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DURABLECLASS");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_durableclassid","108","485","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_durabledef","0","510","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("65");
            obj.set_text("치공구 명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DURABLEDEFNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_durabledef","108","510",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_durabledef",null,"510","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            obj.getSetter("readonly").set("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_durablelot","0","535","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("66");
            obj.set_text("치공구 NO");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DURABLELOTID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_durablelot","108","535",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_durablelot",null,"535","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            obj.getSetter("readonly").set("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_materialdef","0","560","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("67");
            obj.set_text("원자재");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("RAWMATERIAL");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_materiallotid","0","585","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("68");
            obj.set_text("원자재 LOT");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("RAWMATERIALLOT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_materiallotid","108","585",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_materialdef","108","560",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_materialdef",null,"560","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_materiallotid",null,"585","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            obj.getSetter("readonly").set("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_semimaterialdef","0","610","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("69");
            obj.set_text("반제품명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SEMIPRODUCT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_semimateriallotid","0","635","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("70");
            obj.set_text("반제품 LOT");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SEMIPRODUCTLOT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_semimateriallotid","108","635",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_semimaterialdef","108","610",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("33");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_semimaterialdef",null,"610","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("34");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_semimateriallotid",null,"635","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("36");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            obj.getSetter("readonly").set("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_semimaterialdef_id","63","610","45","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("71");
            obj.set_value("반제품명ID");
            obj.set_visible("false");
            obj.set_background("thistle");
            obj.set_text("반제품명ID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta__topProcess","0","310","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("72");
            obj.set_text("대공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("TOPPROCESSSEGMENTCLASS");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_middleProcess","0","335","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("73");
            obj.set_text("중공정");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MIDDLEPROCESSSEGMENT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_topProcesssegment","108","310",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("74");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_topProcesssegment",null,"310","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("75");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_middleProcesssegment","108","335",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("76");
            obj.set_readonly("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_middleProcesssegment",null,"335","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("77");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_middleProcesssegment_id","58","335","50","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("78");
            obj.set_value("중공정ID");
            obj.set_visible("false");
            obj.set_background("thistle");
            obj.set_text("중공정ID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_processsegment_id","58","360","50","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("79");
            obj.set_value("공정ID");
            obj.set_visible("false");
            obj.set_background("thistle");
            obj.set_text("공정ID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_workenduser_id","58","460","50","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("80");
            obj.set_value("작업자ID");
            obj.set_visible("false");
            obj.set_background("thistle");
            obj.set_text("작업자ID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,900,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.Tabpage1.form.cal_lotstartdatefr","value","ds_search","LOTSTARTDATEFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.Tabpage1.form.cal_lotstartdateto","value","ds_search","LOTSTARTDATETO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.Tabpage1.form.cal_sendtimeto","value","ds_search","SENDTIMETO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.Tabpage1.form.cal_sendtimefr","value","ds_search","SENDTIMEFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.Tabpage1.form.edt_productdef","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.Tabpage1.form.edt_productdef_cd","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.Tabpage1.form.edt_productdef_id","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.Tabpage1.form.edt_week","value","ds_search","WEEK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_search.Tabpage1.form.edt_boxno","value","ds_search","BOXNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab_search.Tabpage1.form.cbo_lotworkresultdatetype","value","ds_search","LOTWORKRESULTDATETYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_search.Tabpage1.form.cal_workresultdatefr","value","ds_search","WORKRESULTDATEFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab_search.Tabpage1.form.cal_workresultdateto","value","ds_search","WORKRESULTDATETO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","tab_search.Tabpage1.form.edt_area","value","ds_search","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","tab_search.Tabpage1.form.edt_area_id","value","ds_search","AREAID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","tab_search.Tabpage1.form.edt_resource","value","ds_search","RESOURCENAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","tab_search.Tabpage1.form.edt_resource_id","value","ds_search","RESOURCEID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","tab_search.Tabpage1.form.edt_equipment","value","ds_search","EQUIPMENTIDNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","tab_search.Tabpage1.form.edt_equipment_id","value","ds_search","EQUIPMENTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","tab_search.Tabpage1.form.cbo_durableclassid","value","ds_search","DURABLECLASSID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","tab_search.Tabpage1.form.edt_durabledef","value","ds_search","DURABLEDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","tab_search.Tabpage1.form.edt_durabledef_id","value","ds_search","DURABLEDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","tab_search.Tabpage1.form.edt_durablelot","value","ds_search","DURABLELOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","tab_search.Tabpage1.form.edt_materiallotid","value","ds_search","RAWMATERIALLOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","tab_search.Tabpage1.form.edt_materialdef","value","ds_search","MATERIALDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","tab_search.Tabpage1.form.edt_semimateriallotid","value","ds_search","SUBASSEMLOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","tab_search.Tabpage1.form.edt_semimaterialdef_id","value","ds_search","SUBASSEMDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","tab_search.Tabpage1.form.edt_materialdef_id","value","ds_search","RAWMATERIALDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","tab_search.Tabpage1.form.cbo_site","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","tab_search.Tabpage1.form.edt_lot","value","ds_search","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab_search.Tabpage1.form.edt_topProcesssegment","value","ds_search","TOPPROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","tab_search.Tabpage1.form.edt_middleProcesssegment","value","ds_search","MIDDLEPROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","tab_search.Tabpage1.form.edt_processsegment","value","ds_search","PROCESSSEGMENTNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","tab_search.Tabpage1.form.edt_topProcesssegment_id","value","ds_search","TOPPROCESSSEGMENTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","tab_search.Tabpage1.form.edt_middleProcesssegment_id","value","ds_search","MIDDLEPROCESSSEGMENTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","tab_search.Tabpage1.form.edt_processsegment_id","value","ds_search","PROCESSSEGMENTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","tab_search.Tabpage1.form.edt_workenduser_id","value","ds_search","WORKENDUSER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_work.form.ckb_check","value","ds_search","ISCHECK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","tab_search.Tabpage1.form.edt_semimaterialdef","value","ds_search","SEMIMATERIALDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM03400M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM03400M.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM03400M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: AFFECT LOT산정
         * 파일명 		: QAM03400M.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.05.27
         *
         * 설  명		: 품질관리 > 수율현황및불량분석 > AFFECT LOT산정
         *				  Affect LOT 지정한다.
         *
         * !!!검색 파라미터는 모두 dataset으로 control!!!
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.31	권혜영   	최초작성
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

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_formInit(true);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	var arrList =   ["PLANTID", "LOTID", "PRODUCTDEFID", "WEEK", "BOXNO", "TOPPROCESSSEGMENTID", "MIDDLEPROCESSSEGMENTID", "PROCESSSEGMENTID", "AREAID", "RESOURCEID", "EQUIPMENTID", "WORKENDUSER", "DURABLECLASSID", "DURABLEDEFID", "DURABLELOTID", "RAWMATERIALDEFID", "RAWMATERIALLOTID", "SUBASSEMDEFID", "SUBASSEMLOTID"]
        	var count = 0;
        	for(var i=0; i<arrList.length; i++)
        	{
        		if (!this.nfn_isNull(this.ds_search.getColumn(0, arrList[i]))) count++;

        	}

        	if (!this.nfn_isNull(this.ds_search.getColumn(0, "LOTSTARTDATEFR")) && !this.nfn_isNull(this.ds_search.getColumn(0, "LOTSTARTDATETO"))) count++;
        	if (!this.nfn_isNull(this.ds_search.getColumn(0, "SENDTIMEFR")) && !this.nfn_isNull(this.ds_search.getColumn(0, "SENDTIMETO"))) count++;
        	if (!this.nfn_isNull(this.ds_search.getColumn(0, "WORKRESULTDATEFR")) && !this.nfn_isNull(this.ds_search.getColumn(0, "WORKRESULTDATETO"))) count++;

        	if (count < 2)
        	{
        		this.gfn_Message("CHECKSEARCHREQUIREDCOUNT", "2", "warning", "ok");
        		return;
        	}

        	//일자정보에 site 작업시작시간 추가
        	this.fn_setDateTime();
        	trace(this.ds_search.saveXML());
        	this.ds_qamAffectLot.clearData();
        	var sSvcID 			= "selectQamAffectLotList";
        	var sController 	= "/qam03400/selectQamAffectLotList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamAffectLot=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit(false);
        };

        /*
         * 기능 : 신규
         */
        this.fn_add = function(obj,e)
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
        this.fn_delete = function (obj, e)
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
        		if (trId == "selectQamAffectLotList")
        		{

        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_openPop = function(btnName)
        {
        	var comp = this.tab_search.Tabpage1.form, objDs = this.ds_search;
        	var edtName = "edt_" + btnName;

        	if(this.nfn_isNull(btnName) || typeof comp[edtName] == "undefined") return;

        	var searchValue = comp[edtName].value;

        	trace(this.ds_search.saveXML());

        	var plantId = objDs.getColumn(0, "PLANTID");
        	if(this.nfn_isNull(plantId)) {
        		plantId = "";
        	}

        	//일자정보에 site 작업시작시간 추가
        	this.fn_setDateTime();

        	// gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
        	//-----------------
        	// arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅
        	// popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        	// popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        	// rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        	// paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        	// paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        	// searchStr   : 팝업 조회조건 콤보값 = 조회 값
        	var searchColumn = "";
        	var oArg = {};
        	var opts = "width=450,height=600";

        	oArg.arg_type = "BA";
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_paramCols  	= "P_LOTSTARTDATEFR|P_LOTSTARTDATETO|LOTWORKRESULTDATETYPE|P_WORKRESULTDATEFR|P_WORKRESULTDATETO|P_SENDTIMEFR|P_SENDTIMETO";
        	oArg.arg_paramValues	= objDs.getColumn(0, "P_LOTSTARTDATEFR") + "|" + objDs.getColumn(0, "P_LOTSTARTDATETO") + "|" + objDs.getColumn(0, "LOTWORKRESULTDATETYPE") + "|" + objDs.getColumn(0, "P_WORKRESULTDATEFR") + "|" + objDs.getColumn(0, "P_WORKRESULTDATETO") + "|" ;
        	oArg.arg_paramValues	+= objDs.getColumn(0, "P_SENDTIMEFR") + "|" + objDs.getColumn(0, "P_SENDTIMETO");

        	if(btnName == "productdef") { // 품목
        		opts 					= "width=550,height=600";
        		searchColumn 			= "PRODUCTDEFIDNAME";
        		oArg.arg_popupCd 		= "P00288";
        		oArg.arg_rtnCols 		= "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        		oArg.arg_paramCols  	= "P_LOTSTARTDATEFR|P_LOTSTARTDATETO|P_SENDTIMEFR|P_SENDTIMETO|PLANTID";
        		oArg.arg_paramValues	= objDs.getColumn(0, "P_LOTSTARTDATEFR") + "|" + objDs.getColumn(0, "P_LOTSTARTDATETO") + "|" + objDs.getColumn(0, "P_SENDTIMEFR") + "|" + objDs.getColumn(0, "P_SENDTIMETO") + "|" + plantId;

        	} else if(btnName == "week") { // 주차
        		opts 					= "width=350,height=600";
        		searchColumn 			= "WEEK";
        		oArg.arg_popupCd 		= "P00289";
        		oArg.arg_rtnCols 		= "WEEK";
        		oArg.arg_paramCols  	+= "|PLANTID|PRODUCTDEFID|PRODUCTDEFVERSION";
        		oArg.arg_paramValues	+= "|" + plantId + "|" + objDs.getColumn(0, "PRODUCTDEFID") + "|" + objDs.getColumn(0, "PRODUCTDEFVERSION");

        	} else if(btnName == "boxno") { // Box No
        		opts 					= "width=350,height=600";
        		searchColumn 			= "BOXNO";
        		oArg.arg_popupCd 		= "P00290";
        		oArg.arg_rtnCols 		= "BOXNO";
        		oArg.arg_paramCols  	+= "|PLANTID|PRODUCTDEFID|PRODUCTDEFVERSION";
        		oArg.arg_paramValues	+= "|" + plantId + "|" + objDs.getColumn(0, "PRODUCTDEFID") + "|" + objDs.getColumn(0, "PRODUCTDEFVERSION");

        	} else if(btnName == "topProcesssegment") { // 대공정
        		opts 					= "width=350,height=600";
        		searchColumn 			= "TOPPROCESSSEGMENTID";
        		oArg.arg_popupCd 		= "P00317";
        		oArg.arg_rtnCols 		= "TOPPROCESSSEGMENTCLASSID|TOPPROCESSSEGMENTCLASSNAME";
        		oArg.arg_paramCols  	+= "|PLANTID|PRODUCTDEFID|PRODUCTDEFVERSION";
         		oArg.arg_paramValues	+= "|" + plantId +  "|" + objDs.getColumn(0, "PRODUCTDEFID") + "|" + objDs.getColumn(0, "PRODUCTDEFVERSION");

        	}  else if(btnName == "middleProcesssegment") { // 중공정
        		opts 					= "width=450,height=600";
        		searchColumn 			= "MIDDLEPROCESSSEGMENTID";
        		oArg.arg_popupCd 		= "P00318";
        		oArg.arg_rtnCols 		= "TOPPROCESSSEGMENTCLASSID|TOPPROCESSSEGMENTCLASSNAME|MIDPROCESSSEGMENTCLASSID|MIDPROCESSSEGMENTCLASSNAME";
        		oArg.arg_paramCols  	+= "|PLANTID|PRODUCTDEFID|PRODUCTDEFVERSION|TOPPROCESSSEGMENTID";
         		oArg.arg_paramValues	+= "|" + plantId + "|" + objDs.getColumn(0, "PRODUCTDEFID") + "|" + objDs.getColumn(0, "PRODUCTDEFVERSION") + "|" + objDs.getColumn(0, "TOPPROCESSSEGMENTID");

        	}  else if(btnName == "processsegment") { // 공정
        		opts 					= "width=670,height=600";
        		searchColumn 			= "PROCESSSEGMENTID";
        		oArg.arg_popupCd 		= "P00291";
        		oArg.arg_rtnCols 		= "TOPPROCESSSEGMENTCLASSID|TOPPROCESSSEGMENTCLASSNAME|MIDPROCESSSEGMENTCLASSID|MIDPROCESSSEGMENTCLASSNAME|PROCESSSEGMENTID|PROCESSSEGMENNAME";
        		oArg.arg_paramCols  	+= "|PLANTID|PRODUCTDEFID|PRODUCTDEFVERSION|TOPPROCESSSEGMENTID|MIDDLEPROCESSSEGMENTID";
         		oArg.arg_paramValues	+= "|" + plantId + "|" + objDs.getColumn(0, "PRODUCTDEFID") + "|" + objDs.getColumn(0, "PRODUCTDEFVERSION") + "|" + objDs.getColumn(0, "TOPPROCESSSEGMENTID") + "|" + objDs.getColumn(0, "MIDDLEPROCESSSEGMENTID");

        	} else if(btnName == "area") { // 작업장
        	    opts 					= "width=400,height=600";
        		searchColumn 			= "AREAID";
        		oArg.arg_popupCd 		= "P00292";
        		oArg.arg_rtnCols 		= "AREAID|AREANAME";
        		oArg.arg_paramCols  	+= "|PLANTID|PRODUCTDEFID|PRODUCTDEFVERSION|TOPPROCESSSEGMENTID|MIDDLEPROCESSSEGMENTID|PROCESSSEGMENTID";
         		oArg.arg_paramValues	+=  "|" + plantId + "|" + objDs.getColumn(0, "PRODUCTDEFID") + "|" + objDs.getColumn(0, "PRODUCTDEFVERSION") + "|" + objDs.getColumn(0, "TOPPROCESSSEGMENTID") + "|" + objDs.getColumn(0, "MIDDLEPROCESSSEGMENTID") +  "|" + objDs.getColumn(0, "PROCESSSEGMENTID");

        	} else if(btnName == "resource") { // 자원
        		searchColumn 			= "P_RESOURCEID";  //where 조건을 걸어야 할 땐 P_ 붙임 (like 검색 필요)
        		oArg.arg_popupCd 		= "P00294";
        		oArg.arg_rtnCols 		= "RESOURCEID|RESOURCENAME";
        		oArg.arg_paramCols  	+= "|PLANTID|PRODUCTDEFID|PRODUCTDEFVERSION|TOPPROCESSSEGMENTID|MIDDLEPROCESSSEGMENTID|PROCESSSEGMENTID|AREAID";
         		oArg.arg_paramValues	+= "|" + plantId + "|" + objDs.getColumn(0, "PRODUCTDEFID") + "|" + objDs.getColumn(0, "PRODUCTDEFVERSION") + "|" + objDs.getColumn(0, "TOPPROCESSSEGMENTID") + "|" + objDs.getColumn(0, "MIDDLEPROCESSSEGMENTID") +  "|" + objDs.getColumn(0, "PROCESSSEGMENTID") +  "|" + objDs.getColumn(0, "AREAID");

        	} else if(btnName == "equipment") { // 설비호기
        		searchColumn 			= "P_EQUIPMENTID";  //where 조건을 걸어야 할 땐 P_ 붙임 (like 검색 필요)
        		oArg.arg_popupCd 		= "P00295";
        		oArg.arg_rtnCols 		= "EQUIPMENTID|EQUIPMENTIDNAME";
        		oArg.arg_paramCols  	+= "|PLANTID|PRODUCTDEFID|PRODUCTDEFVERSION|PROCESSSEGMENTID|AREAID|P_RESOURCEID";
         		oArg.arg_paramValues	+= "|" + plantId + "|" + objDs.getColumn(0, "PRODUCTDEFID") + "|" + objDs.getColumn(0, "PRODUCTDEFVERSION") + "|" + objDs.getColumn(0, "PROCESSSEGMENTID") +  "|" + objDs.getColumn(0, "AREAID") + "|" + objDs.getColumn(0, "RESOURCEID");

        	} else if(btnName == "workenduser") { // 작업자
        		searchColumn 			= "P_WORKENDUSER";  //where 조건을 걸어야 할 땐 P_ 붙임 (like 검색 필요)
        		oArg.arg_popupCd 		= "P00296";
        		oArg.arg_rtnCols 		= "WORKENDUSER|WORKENDUSERNAME";
        		oArg.arg_paramCols  	+= "|PLANTID|PRODUCTDEFID|PRODUCTDEFVERSION|PROCESSSEGMENTID|AREAID|P_RESOURCEID|P_EQUIPMENTID";
         		oArg.arg_paramValues	+= "|" + plantId + "|" + objDs.getColumn(0, "PRODUCTDEFID") + "|" + objDs.getColumn(0, "PRODUCTDEFVERSION") + "|" + objDs.getColumn(0, "PROCESSSEGMENTID") +  "|" + objDs.getColumn(0, "AREAID") +  "|" + objDs.getColumn(0, "RESOURCEID")  +  "|" + objDs.getColumn(0, "EQUIPMENTID");

        	} else if(btnName == "durabledef") { // 치공구 명
        		opts                    = "width=510,height=600";
        		searchColumn 			= "DURABLEDEFID";
        		oArg.arg_popupCd 		= "P00297";
        		oArg.arg_rtnCols 		= "DURABLEDEFID|DURABLEDEFNAME";
        		oArg.arg_paramCols  	+= "|PLANTID|DURABLECLASSID";
         		oArg.arg_paramValues	+= "|" + plantId + "|" + objDs.getColumn(0, "DURABLECLASSID");

        	} else if(btnName == "durablelot") { // 치공구 No
        		opts 					= "width=350,height=600";
        		searchColumn 			= "DURABLELOTID";
        		oArg.arg_popupCd 		= "P00298";
        		oArg.arg_rtnCols 		= "DURABLELOTID";
        		oArg.arg_paramCols  	+= "|PLANTID|DURABLECLASSID|DURABLEDEFID";
         		oArg.arg_paramValues	+= "|" + plantId + "|" + objDs.getColumn(0, "DURABLECLASSID") +  "|" + objDs.getColumn(0, "DURABLEDEFID");

        	} else if(btnName == "materialdef") { // 원자재
        		searchColumn 			= "MATERIALDEFID";
        		oArg.arg_popupCd 		= "P00299";
        		oArg.arg_rtnCols 		= "MATERIALDEFID|MATERIALDEFNAME";
        		oArg.arg_paramCols  	+= "|PLANTID|PRODUCTDEFID|PRODUCTDEFVERSION";
         		oArg.arg_paramValues	+= "|" + plantId + "|" + objDs.getColumn(0, "PRODUCTDEFID") + "|" + objDs.getColumn(0, "PRODUCTDEFVERSION") ;

        	} else if(btnName == "materiallotid") { // 원자재 LOT
        		opts 					= "width=350,height=600";
        		searchColumn 			= "MATERIALLOTID";
        		oArg.arg_popupCd 		= "P00300";
        		oArg.arg_rtnCols 		= "MATERIALLOTID";
        		oArg.arg_paramCols  	+= "|PLANTID|PRODUCTDEFID|PRODUCTDEFVERSION|MATERIALDEFID";
         		oArg.arg_paramValues	+= "|" + plantId + "|" + objDs.getColumn(0, "PRODUCTDEFID") + "|" + objDs.getColumn(0, "PRODUCTDEFVERSION") + "|" + objDs.getColumn(0, "RAWMATERIALDEFID");

        	} else if(btnName == "semimaterialdef") { // 반제품명
        		opts 					= "width=550,height=600";
        		searchColumn 			= "MATERIALDEFIDPRODUCT";
        		oArg.arg_popupCd 		= "P00301";
        		oArg.arg_rtnCols 		= "MATERIALDEFID|MATERIALDEFNAME";
        		oArg.arg_paramCols  	+= "|PLANTID|PRODUCTDEFID|PRODUCTDEFVERSION";
         		oArg.arg_paramValues	+= "|" + plantId + "|" + objDs.getColumn(0, "PRODUCTDEFID") + "|" + objDs.getColumn(0, "PRODUCTDEFVERSION") ;

        	} else if(btnName == "semimateriallotid") { // 반제품 LOT
        		opts 					= "width=350,height=600";
        		searchColumn 			= "MATERIALLOTIDPRODUCT";
        		oArg.arg_popupCd 		= "P00302";
        		oArg.arg_rtnCols 		= "MATERIALLOTID";
        		oArg.arg_paramCols  	+= "|PLANTID|PRODUCTDEFID|PRODUCTDEFVERSION|MATERIALDEFIDPRODUCT";
         		oArg.arg_paramValues	+= "|" + plantId + "|" + objDs.getColumn(0, "PRODUCTDEFID") + "|" + objDs.getColumn(0, "PRODUCTDEFVERSION") + "|" + objDs.getColumn(0, "SUBASSEMDEFID");
        	}

        	if (!this.nfn_isNull(searchValue))
        	{
        		oArg.arg_searchStr = searchColumn + "=" + searchValue || "";
        	}
        	else
        	{
        		oArg.arg_searchStr = "1=1";
        	}

        	if(!this.nfn_isNull(oArg.arg_popupCd)) {
        	    /*중공정, 공정팝업의 경우 상위정보를 셋팅하기 위해 별도처리*/
        		if (oArg.arg_popupCd == "P00291" || oArg.arg_popupCd == "P00318"){

        			this.gfn_openPopup("srch_"+btnName,"cmd::CMSA00100P.xfdl",oArg,opts);
        			this.qamfv_rtnValue = true;
        		}else{
        			this.gfn_openPopup("srch_"+btnName,"cmd::CMSA00100P.xfdl",oArg,opts,"qamfn_popupAfter");
        			this.qamfv_rtnValue = true;
        		}
        	}
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if(this.nfn_isNull(rtn)) return;

            if (sPopupId == "srch_processsegment")    /*조회조건-공정*/
            {
                this.tab_search.Tabpage1.form.edt_topProcesssegment_id.set_value(rtn[0]);
        		this.tab_search.Tabpage1.form.edt_topProcesssegment.set_value(rtn[1]);
        		this.tab_search.Tabpage1.form.edt_middleProcesssegment_id.set_value(rtn[2]);
        		this.tab_search.Tabpage1.form.edt_middleProcesssegment.set_value(rtn[3]);
        		this.tab_search.Tabpage1.form.edt_processsegment_id.set_value(rtn[4]);
        		this.tab_search.Tabpage1.form.edt_processsegment.set_value(rtn[5]);
            }else if (sPopupId == "srch_middleProcesssegment"){
        	    this.tab_search.Tabpage1.form.edt_topProcesssegment_id.set_value(rtn[0]);
        		this.tab_search.Tabpage1.form.edt_topProcesssegment.set_value(rtn[1]);
        		this.tab_search.Tabpage1.form.edt_middleProcesssegment_id.set_value(rtn[2]);
        		this.tab_search.Tabpage1.form.edt_middleProcesssegment.set_value(rtn[3]);
        	}

        };
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function (isComboSearch)
        {
        	// 검색조건 초기화
        	this.qamfn_setCompControl(this.tab_search.Tabpage1.form.components, "empty", [Edit]);

        	var objDs = this.ds_search;
        	var startDate = this.gfn_addDate(this.gfn_today(), -10), endDate = this.gfn_today(), worktype = "WORKENDTIME";

        	objDs.set_enableevent(false);
        	// 투입일
        	objDs.setColumn(0, "LOTSTARTDATEFR", startDate);
        	objDs.setColumn(0, "LOTSTARTDATETO", endDate);

        	// 생산 입고일자
        	objDs.setColumn(0, "SENDTIMEFR", startDate);
        	objDs.setColumn(0, "SENDTIMETO", endDate);

        	// 작업일자
        	objDs.setColumn(0, "WORKRESULTDATEFR", startDate);
        	objDs.setColumn(0, "WORKRESULTDATETO", endDate);

        	// 작업일자 구분
        	objDs.setColumn(0, "LOTWORKRESULTDATETYPE", worktype);

        	//Site ID
        	objDs.setColumn(0, "PLANTID", this.gf_getSiteType());

        	objDs.set_enableevent(true);

        	if(isComboSearch) {
        		this.fn_initComboDurableclassid(worktype, startDate, endDate);
        	}

        	this.fn_callScreen(); //타화면에서 화면 호출
        };

        // 치공구분류 콤보 초기화
        this.fn_initComboDurableclassid = function (worktype, startDate, endDate)
        {
        	if(this.nfn_isNull(worktype) || this.nfn_isNull(startDate) || this.nfn_isNull(endDate)) return;
        	// 파라미터 : 작업일자(type, startdate, enddate)
        	var sArgs         = "";
        		sArgs        += this.gfn_setParam("LOTWORKRESULTDATETYPE", worktype);
        		sArgs        += this.gfn_setParam("WORKRESULTDATEFR", startDate + this.qam_jobStartTime);
        		sArgs        += this.gfn_setParam("WORKRESULTDATETO", endDate + this.qam_jobEndTime);

        	var oColumn 	= {code: "DURABLECLASSID", name: "DURABLECLASSNAME"};
        	this.qamfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cbo_durableclassid // Object
        								, "selectDurableClassId,ALL,Y,A" // OPTION
        								, sArgs
        								, "fn_callBack"
        								, true 										//Async
        								, oColumn);
        };

        // edit 클릭 시 팝업오픈 호출하는 함수
        // this.fn_callOpenPopEditEvent = function (obj, e)
        // {
        // 	if(typeof e == "object" && typeof obj == "object" && obj instanceof Edit ) {
        // 		var eventid = e.eventid, objName = obj.name;
        // 		if(!this.nfn_isNull(eventid) && !this.nfn_isNull(objName)) {
        //
        // 			if(eventid == "onkeydown" && objName.indexOf("edt_") > -1) {
        // 				var arrObjName = objName.split("edt_");
        // 				var edtName = arrObjName[1];
        //
        // 				if(e.keycode != 13) return;
        // 				this.fn_openPop(edtName);
        // 			}
        // 		}
        // 	}
        // };

        // button 클릭 시 팝업오픈 호출하는 함수
        this.fn_callOpenPopButtonEvent = function (obj, e)
        {
        	if(typeof e == "object" && typeof obj == "object" && (obj instanceof Edit || obj instanceof Button)) {
        		var eventid = e.eventid, objName = obj.name;
        		if(!this.nfn_isNull(eventid) && !this.nfn_isNull(objName)) {

        			//button 클릭 시
        			if(eventid == "onclick" && objName.indexOf("btn_") > -1) {
        				var arrObjName = objName.split("btn_");
        				var btnName = arrObjName[1];

        				if(!this.nfn_isNull(btnName)) {
        					this.fn_openPop(btnName);
        				}
        			}
        		}
        	}
        };


        /*
         * 기능: 일자정보에 site 작업시작시간 추가
         */
        this.fn_setDateTime = function()
        {
        	var lotstartdatefr = this.nfn_isNull(this.tab_search.Tabpage1.form.cal_lotstartdatefr.value) ? "":this.tab_search.Tabpage1.form.cal_lotstartdatefr.value+ this.qam_jobStartTime;
        	var lotstartdateto = this.nfn_isNull(this.tab_search.Tabpage1.form.cal_lotstartdateto.value) ? "":this.tab_search.Tabpage1.form.cal_lotstartdateto.value+ this.qam_jobEndTime;
        	var workresultdatefr = this.nfn_isNull(this.tab_search.Tabpage1.form.cal_workresultdatefr.value) ? "":this.tab_search.Tabpage1.form.cal_workresultdatefr.value+ this.qam_jobStartTime;
        	var workresultdateto = this.nfn_isNull(this.tab_search.Tabpage1.form.cal_workresultdateto.value) ? "":this.tab_search.Tabpage1.form.cal_workresultdateto.value+ this.qam_jobEndTime;
        	var sendtimefr = this.nfn_isNull(this.tab_search.Tabpage1.form.cal_sendtimefr.value) ? "":this.tab_search.Tabpage1.form.cal_sendtimefr.value+ this.qam_jobStartTime;
        	var sendtimeto = this.nfn_isNull(this.tab_search.Tabpage1.form.cal_sendtimeto.value) ? "":this.tab_search.Tabpage1.form.cal_sendtimeto.value+ this.qam_jobEndTime;

        	this.ds_search.set_enableevent(false);
        	this.ds_search.setColumn(0, "P_LOTSTARTDATEFR", lotstartdatefr);
        	this.ds_search.setColumn(0, "P_LOTSTARTDATETO", lotstartdateto);
        	this.ds_search.setColumn(0, "P_WORKRESULTDATEFR", workresultdatefr);
        	this.ds_search.setColumn(0, "P_WORKRESULTDATETO", workresultdateto);
        	this.ds_search.setColumn(0, "P_SENDTIMEFR", sendtimefr);
        	this.ds_search.setColumn(0, "P_SENDTIMETO", sendtimeto);
        	this.ds_search.set_enableevent(true);
        };

        /*
         * 기능 : 타화면에서 호출
         */
        this.fn_callScreen = function()
        {
        	var sArgName = this.gfn_getFrameAguments("menuName");

        	if (sArgName == "QAM02300M")
        	{
                var data = JSON.parse(this.gfn_getFrameAguments("objList"));
        		this.tab_search.Tabpage1.form.edt_lot.set_value(data.LOTID);
        		this.fn_search();
        	}
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        // 검색 조건 변경 시 활성화/비활성화
        this.ds_search_oncolumnchanged = function(obj,e)
        {
        	var columnid = e.columnid, value = e.newvalue;
        	var searchform = this.tab_search.Tabpage1.form;

        	// 작업일자, 생산입고일자, 투입일자 변경시 품목, 주차, Box No, 대공정, 중공정, 공정, 원자재, 반제품명 초기화
        	if(columnid == "LOTSTARTDATEFR" || columnid == "LOTSTARTDATETO" || columnid == "WORKRESULTDATEFR" || columnid == "WORKRESULTDATETO" || columnid == "SENDTIMEFR" || columnid == "SENDTIMETO") {
        		obj.setColumn(0, "PRODUCTDEFNAME", ""); //품목
        		obj.setColumn(0, "PRODUCTDEFVERSION", "");
        		obj.setColumn(0, "PRODUCTDEFID", "");
        		obj.setColumn(0, "WEEK", ""); //주차
        		obj.setColumn(0, "BOXNO", "");
        		obj.setColumn(0, "TOPPROCESSSEGMENTNAME", ""); //대공정
        		obj.setColumn(0, "TOPPROCESSSEGMENTID", "");
        		obj.setColumn(0, "MIDDLEPROCESSSEGMENTNAME", "");
        		obj.setColumn(0, "MIDDLEPROCESSSEGMENTID", "");
        		obj.setColumn(0, "PROCESSSEGMENTNAME", "");
        		obj.setColumn(0, "PROCESSSEGMENTID", "");
        		obj.setColumn(0, "MATERIALDEFNAME", ""); //원자재
        		obj.setColumn(0, "RAWMATERIALDEFID", "");
        		obj.setColumn(0, "SEMIMATERIALDEFNAME", ""); //반제품명
        		obj.setColumn(0, "SUBASSEMDEFID", "");
        	}

        	// 작업일자, 구분 변경 시 치공구분류 콤보 초기화
        	if(columnid == "LOTWORKRESULTDATETYPE" || columnid == "WORKRESULTDATEFR" || columnid == "WORKRESULTDATETO") {
        		this.fn_initComboDurableclassid(obj.getColumn(0, "LOTWORKRESULTDATETYPE"), obj.getColumn(0, "WORKRESULTDATEFR"), obj.getColumn(0, "WORKRESULTDATETO"));
        	}
        	// SITE 변경 시 표준공정 활성화/비활화
        	else if(columnid == "PLANTID") {
        		obj.setColumn(0, "TOPPROCESSSEGMENTNAME", "");
        		obj.setColumn(0, "TOPPROCESSSEGMENTID", "");
        		obj.setColumn(0, "MIDDLEPROCESSSEGMENTNAME", "");
        		obj.setColumn(0, "MIDDLEPROCESSSEGMENTID", "");
        		obj.setColumn(0, "PROCESSSEGMENTNAME", "");
        		obj.setColumn(0, "PROCESSSEGMENTID", "");

        		//SITE 변경시 작업 시작/종료 시간 조회 및 치공구 구분 Combo List 재조회
        		this.qamfn_searchBusinessTime(value);
        		this.fn_initComboDurableclassid(obj.getColumn(0, "LOTWORKRESULTDATETYPE"), obj.getColumn(0, "WORKRESULTDATEFR"), obj.getColumn(0, "WORKRESULTDATETO"));
        	}
        	// 공정 변경 시 작업장 활성화/비활성화
        	else if(columnid == "TOPPROCESSSEGMENTNAME"|| columnid == "MIDDLEPROCESSSEGMENTNAME"|| columnid == "PROCESSSEGMENTNAME") {
        		if(this.nfn_isNull(value)) {
        			searchform.edt_area.set_enable(false);
        			searchform.btn_area.set_enable(false);

        			if(columnid == "TOPPROCESSSEGMENTNAME") {
        				obj.setColumn(0, "TOPPROCESSSEGMENTID", "");
        			}
        			else if(columnid == "MIDDLEPROCESSSEGMENTNAME") {
        				obj.setColumn(0, "MIDDLEPROCESSSEGMENTID", "");
        			}
        			else if(columnid == "PROCESSSEGMENTNAME") {
        				obj.setColumn(0, "PROCESSSEGMENTID", "");
        			}

        			obj.setColumn(0, "AREANAME", "");
        			obj.setColumn(0, "AREAID", "");
        		} else {
        			searchform.edt_area.set_enable(true);
        			searchform.btn_area.set_enable(true);
        			searchform.edt_area.set_readonly(false);
        		}
        	}
        	// 작업장 변경 시 설비그룹 활성화/비활성화
        	else if(columnid == "AREANAME") {
        		if(this.nfn_isNull(value)) {
        			searchform.edt_resource.set_enable(false);
        			searchform.btn_resource.set_enable(false);

        			obj.setColumn(0, "AREAID", "");
        			obj.setColumn(0, "RESOURCENAME", "");
        			obj.setColumn(0, "RESOURCEID", "");
        		} else {
        			searchform.edt_resource.set_enable(true);
        			searchform.btn_resource.set_enable(true);
        			searchform.edt_resource.set_readonly(false);
        		}
        	}
        	// 자원 변경 시 설비(호기) 활성화/비활성화
        	else if(columnid == "RESOURCENAME") {
        		if(this.nfn_isNull(value)) {
        			searchform.edt_equipment.set_enable(false);
        			searchform.btn_equipment.set_enable(false);

        			obj.setColumn(0, "RESOURCEID", "");
        			obj.setColumn(0, "EQUIPMENTIDNAME", "");
        			obj.setColumn(0, "EQUIPMENTID", "");
        		} else {
        			searchform.edt_equipment.set_enable(true);
        			searchform.btn_equipment.set_enable(true);
        			searchform.edt_equipment.set_readonly(false);
        		}
        	}

        	// 설비 변경 시 작업자 활성화/비활성화
        	else if(columnid == "EQUIPMENTIDNAME") {
        		if(this.nfn_isNull(value)) {
        			searchform.edt_workenduser.set_enable(false);
        			searchform.btn_workenduser.set_enable(false);

        			obj.setColumn(0, "EQUIPMENTID", "");
        			obj.setColumn(0, "WORKENDUSER", "");
        		} else {
        			searchform.edt_workenduser.set_enable(true);
        			searchform.btn_workenduser.set_enable(true);
        			searchform.edt_workenduser.set_readonly(false);
        		}
        	}
        	// 치공구분류 변경 시 치공구 명 활성화/비활성화
        	else if(columnid == "DURABLECLASSID") {
        		if(this.nfn_isNull(value)) {
        			searchform.edt_durabledef.set_enable(false);
        			searchform.btn_durabledef.set_enable(false);

        			obj.setColumn(0, "DURABLEDEFNAME", "");
        			obj.setColumn(0, "DURABLEDEFID", "");

        		} else {
        			searchform.edt_durabledef.set_enable(true);
        			searchform.btn_durabledef.set_enable(true);
        			searchform.edt_durabledef.set_readonly(false);
        		}
        	}
        	// 치공구명 변경 시 치공구 NO 활성화/비활성화
        	else if(columnid == "DURABLEDEFNAME") {
        		if(this.nfn_isNull(value)) {
        			searchform.edt_durablelot.set_enable(false);
        			searchform.btn_durablelot.set_enable(false);

        			obj.setColumn(0, "DURABLEDEFID", "");
        			obj.setColumn(0, "DURABLELOTID", "");

        		} else {
        			searchform.edt_durablelot.set_enable(true);
        			searchform.btn_durablelot.set_enable(true);
        			searchform.edt_durablelot.set_readonly(false);
        		}
        	}
        	// 원자재 변경 시 원자재 LOT 활성화/비활성화
        	else if(columnid == "RAWMATERIALDEFID") {
        		if(this.nfn_isNull(value)) {
        			searchform.edt_materiallotid.set_enable(false);
        			searchform.btn_materiallotid.set_enable(false);

        			obj.setColumn(0, "RAWMATERIALLOTID", "");

        		} else {
        			searchform.edt_materiallotid.set_enable(true);
        			searchform.btn_materiallotid.set_enable(true);
        			searchform.edt_materiallotid.set_readonly(false);
        		}
        	}
        	// 반제품명 변경 시 반재품 LOT 활성화/비활성화
        	else if(columnid == "SUBASSEMDEFID") {
        		if(this.nfn_isNull(value)) {
        			searchform.edt_semimateriallotid.set_enable(false);
        			searchform.btn_semimateriallotid.set_enable(false);

        			obj.setColumn(0, "SUBASSEMLOTID", "");

        		} else {
        			searchform.edt_semimateriallotid.set_enable(true);
        			searchform.btn_semimateriallotid.set_enable(true);
        			searchform.edt_semimateriallotid.set_readonly(false);
        		}
        	}
        };

        this.tab_search_Tabpage1_btn_lot_onclick = function(obj,e)
        {
        	var oArg = {arg_lotId: this.tab_search.Tabpage1.form.edt_lot.value};
        	var opts = "width=800,height=500";

        	this.gfn_openPopup("srch_lot","qam::QAM03400P1.xfdl",oArg,opts);
        };

        this.div_work_btn_00_onclick = function(obj,e)
        {
        	this.tab_search.Tabpage1.form.edt_boxno.set_value("1");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_processsegment.addEventHandler("onclick",this.fn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_productdef.addEventHandler("onclick",this.fn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_lot.addEventHandler("onclick",this.tab_search_Tabpage1_btn_lot_onclick,this);
            this.tab_search.Tabpage1.form.btn_week.addEventHandler("onclick",this.fn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_boxno.addEventHandler("onclick",this.fn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_area.addEventHandler("onclick",this.fn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_resource.addEventHandler("onclick",this.fn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_equipment.addEventHandler("onclick",this.fn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_workenduser.addEventHandler("onclick",this.fn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_durabledef.addEventHandler("onclick",this.fn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_durablelot.addEventHandler("onclick",this.fn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_materialdef.addEventHandler("onclick",this.fn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_materiallotid.addEventHandler("onclick",this.fn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_semimaterialdef.addEventHandler("onclick",this.fn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_semimateriallotid.addEventHandler("onclick",this.fn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.sta__topProcess.addEventHandler("onclick",this.tab_search_Tabpage1_sta__topProcess_onclick,this);
            this.tab_search.Tabpage1.form.btn_topProcesssegment.addEventHandler("onclick",this.fn_callOpenPopButtonEvent,this);
            this.tab_search.Tabpage1.form.btn_middleProcesssegment.addEventHandler("onclick",this.fn_callOpenPopButtonEvent,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("QAM03400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
