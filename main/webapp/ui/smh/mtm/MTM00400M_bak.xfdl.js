(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MTM00400M");
            this.set_titletext("자재 현황 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_main", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"BASEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CSMINBOUNDQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CSMOUTBOUNDQTY\" type=\"STRING\" size=\"256\"/><Column id=\"STOCKQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CSMRESERVEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CSMWAITFORRECEIPTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CSMONHANDQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">금일</Col></Row><Row><Col id=\"data\">전일</Col></Row><Row><Col id=\"data\">금주</Col></Row><Row><Col id=\"data\">전주</Col></Row><Row><Col id=\"data\">금월</Col></Row><Row><Col id=\"data\">사용자정의</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSACTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSACTIONTYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"CSMINBOUNDQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CSMOUTBOUNDQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CSMRESERVEQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CSMONHANDQTY\" type=\"BIGDECIMAL\" size=\"0\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSACTIONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSACTIONNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSACTIONREASONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSACTIONREASONCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"TXNADDEDCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNADDEDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"RELATIONWAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"RELATIONWAREHOUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"COSTCENTERCODE\" type=\"STRING\" size=\"256\"/><Column id=\"COSTCENTERNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"P_CONPERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONPERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"CONSTATISTICSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONSUMABLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_ISSTOCKQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"P_CONPERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONPERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID_D\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION_D\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID_D\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID_D\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Button("btn_print",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_print:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","117","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("자재 현황 조회");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
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

            obj = new Static("sta_subTitle00","0","0","98","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("자재 현황 List");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MATERIALSTATUSSTATISTICSLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_detail","0","77%",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_detail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"180\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자재 ID\"/><Cell col=\"2\" text=\"자재버전\"/><Cell col=\"3\" text=\"자재 LOT NO\"/><Cell col=\"4\" text=\"작업시간\"/><Cell col=\"5\" text=\"입출고유형\"/><Cell col=\"6\" text=\"Lot No.\"/><Cell col=\"7\" text=\"작업장\"/><Cell col=\"8\" text=\"창고 ID\"/><Cell col=\"9\" text=\"창고 명\"/><Cell col=\"10\" text=\"상대 창고ID\"/><Cell col=\"11\" text=\"RELATION WAREHOUSE NAME\"/><Cell col=\"12\" text=\"입고수량\"/><Cell col=\"13\" text=\"출고수량\"/><Cell col=\"14\" text=\"할당수량\"/><Cell col=\"15\" text=\"설명\"/><Cell col=\"16\" text=\"거래유형명\"/><Cell col=\"17\" text=\"거래사유코드명\"/><Cell col=\"18\" text=\"추가사유\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CONSUMABLEDEFID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CONSUMABLEDEFVERSION\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:CONSUMABLELOTID\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TXNDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:TRANSACTIONTYPENAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:WAREHOUSEID\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:WAREHOUSENAME\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:RELATIONWAREHOUSEID\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:RELATIONWAREHOUSENAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:CSMINBOUNDQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:CSMOUTBOUNDQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:CSMRESERVEQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:DESCRIPTION\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:TRANSACTIONNAME\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:TRANSACTIONREASONCODENAME\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:TXNADDEDNAME\" textAlign=\"left\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"합계\" tooltiptext=\"SUM\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&apos;CSMINBOUNDQTY&apos;)\"/><Cell col=\"13\" text=\"expr:dataset.getSum(&apos;CSMOUTBOUNDQTY&apos;)\"/><Cell col=\"14\" text=\"expr:dataset.getSum(&apos;CSMRESERVEQTY&apos;)\"/><Cell col=\"15\"/><Cell col=\"16\"/><Cell col=\"17\"/><Cell col=\"18\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_main","0","34",null,null,"0","grd_detail:34",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_main");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"380\"/><Column size=\"60\"/><Column size=\"230\"/><Column size=\"160\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자재 ID\"/><Cell col=\"2\" text=\"자재버전\"/><Cell col=\"3\" text=\"자재명\"/><Cell col=\"4\" text=\"단위\"/><Cell col=\"5\" text=\"자재 LOT NO\"/><Cell col=\"6\" text=\"입고일\"/><Cell col=\"7\" text=\"창고 ID\"/><Cell col=\"8\" text=\"창고명\"/><Cell col=\"9\" text=\"기본수량\"/><Cell col=\"10\" text=\"입고수량\"/><Cell col=\"11\" text=\"출고수량\"/><Cell col=\"12\" text=\"인수대기\"/><Cell col=\"13\" text=\"할당수량\"/><Cell col=\"14\" text=\"가용재고\"/><Cell col=\"15\" text=\"재고수량\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CONSUMABLEDEFID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CONSUMABLEDEFVERSION\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:UNIT\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:CONSUMABLELOTID\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:CREATEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"date\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:WAREHOUSEID\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:WAREHOUSENAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:BASEQTY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"10\" text=\"bind:CSMINBOUNDQTY\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"mask\"/><Cell col=\"11\" text=\"bind:CSMOUTBOUNDQTY\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"mask\"/><Cell col=\"12\" text=\"bind:CSMWAITFORRECEIPTQTY\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"mask\"/><Cell col=\"13\" text=\"bind:CSMRESERVEQTY\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"mask\"/><Cell col=\"14\" text=\"bind:CSMONHANDQTY\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"mask\"/><Cell col=\"15\" text=\"bind:STOCKQTY\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"mask\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00_00","0","grd_main:0","66","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("상세내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("OSPPUBLISHSTATUSDETAILINFO");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_main",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_detail",null,"grd_main:6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tab_page",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("btn_clearConsum","171","275","102","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_search","15","275","146","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("15");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"255","45","20","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("16");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","281","10","27",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("17");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_mtrNm","108","110",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("5");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_mtrNm",null,"110","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_whNm","108","185",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("9");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_whNm",null,"185","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_mtrGrpCode","108","35","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_mtrVer","108","135","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("7");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_constatisticsType","108","210","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("11");
            obj.set_codecolumn("C,CSMStatisticsSearchType,,Y,Y");
            obj.set_index("-1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("18");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("BB2F5FB0FA594AB1B2150B1B48275231");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_consumGrpCode","0","35","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("19");
            obj.set_text("자재그룹코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CONSUMABLECLASSID");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_period","0","60","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("20");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PERIOD");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_mtrNm","0","110","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("21");
            obj.set_text("자재명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MATERIALNAME");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_mtrVer","0","135","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("22");
            obj.set_text("자재버전");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("E300603C6F28477A8A504EACCC1B7542");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_mtrLotNo","0","160","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("23");
            obj.set_text("자재 LOT NO");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CONSUMABLELOTID");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_whNm","0","185","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("24");
            obj.set_text("창고 명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WAREHOUSENAME");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_constatisticsType","0","210","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("25");
            obj.set_text("집계구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CONSTATISTICSTYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_isStockQty","0","235","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("26");
            obj.set_text("재고수량 0제외");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISSTOCKQTY");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType","10","85","94","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("금주");
            obj.set_value("");
            obj.set_index("2");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Calendar("cal_startDt","108","60",null,"20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Calendar("cal_endDt","108","85",null,"20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_mtrLotNo","108","160","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("8");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_isStockQty","108","235","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,YesOnly,ALL,Y,Y");
            this.tab_search.tab_page.addChild(obj.name, obj);

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
        this.addIncludeScript("MTM00400M_bak.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("MTM00400M_bak.xfdl","lib::lib_mtm.xjs");
        this.registerScript("MTM00400M_bak.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 자재현황조회
         * 파일명 		: MTM00400M.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.03.05
         *
         * 설  명		:  조회/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.05	김진현   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.tab_page.form;
        this.whId = '';			// 창고id
        this.mtrId = '';		// 자재id


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// 초기화 (공통)
        	this.nfn_formInit(obj);

        	// 검색조건 공통 콤보 설정
        	this.fn_initCombo();

        	// 콤보 기본값 설정
        	this.searchDiv.cbo_constatisticsType.set_value("ALLITEM");
        	this.searchDiv.cbo_isStockQty.set_value("Y");

        	// 상단 그리드 초기화
        	this.fn_setMainGridCol();
        };


        /*
         * 필터 초기화 버튼 클릭시
         */
        this.fn_formInit = function(obj,e)
        {
        	// 검색조건 공통 콤보 설정
        	this.fn_initCombo();

        	// 자재명(/id), 자재 LOT NO, 창고명(/id) 초기화
        	this.searchDiv.edt_whNm.set_value("");			// 창고명
            this.whId = ""; 								// 창고 ID
        	this.mtrId = "";								// 자재 ID
        	this.searchDiv.edt_mtrNm.set_value("");			// 자재명
        	this.searchDiv.edt_mtrLotNo.set_value("");			// 자재 LOT NO

        	// 콤보 기본값 설정
        	this.searchDiv.cbo_constatisticsType.set_value("ALLITEM");
        	this.searchDiv.cbo_isStockQty.set_value("Y");


        };
        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
            this.ds_search.clearData();
        	this.ds_searchDetail.clearData();
        	this.ds_detail.clearData();


        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_CONPERIOD_PERIODFR", this.searchDiv.cal_startDt.value); //시작일
        	this.ds_search.setColumn(0, "P_CONPERIOD_PERIODTO", this.searchDiv.cal_endDt.value);	//종료일
        	this.ds_search.setColumn(0, "CONSTATISTICSTYPE", this.searchDiv.cbo_constatisticsType.value);	//집계구분
        	this.ds_search.setColumn(0, "USERID", this.gf_getUserId());					//사용자id
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId()); 	//ENTERPRISEID
        	this.ds_search.setColumn(0, "P_CONSUMABLECLASSID",   this.searchDiv.cbo_mtrGrpCode.value); 			//자재그룹코드
        	this.ds_search.setColumn(0, "P_PLANTID", this.searchDiv.cbo_site.value); 	//site


        	// 자재명이 없으면 자재id 초기화
        	if(this.gfn_isNull(this.searchDiv.edt_mtrNm.value))
        	{
        		this.mtrId = "";			//자재id

        	}
        	this.ds_search.setColumn(0, "CONSUMABLEDEFID",  this.mtrId); 		//자재id
        	this.ds_search.setColumn(0, "CONSUMABLEDEFVERSION", this.searchDiv.cbo_mtrVer.value); 	//자재버전
        	this.ds_search.setColumn(0, "P_CONSUMABLELOTID", this.searchDiv.edt_mtrLotNo.value);	//자재 LOT NO

        	// 자재명이 없으면 자재id 초기화
        	if(this.gfn_isNull(this.searchDiv.edt_whNm.value))
        	{
        		this.whId = "";		// 창고id
        	}
        	this.ds_search.setColumn(0, "P_WAREHOUSEID", this.whId);		// 창고id


        	this.ds_search.setColumn(0, "P_ISSTOCKQTY", this.searchDiv.cbo_isStockQty.value);	//재고수량 0제외


        	var sSvcID 			= "selectConsumableLotStatisticsList";
        	var sController 	= "/mtm00400/selectConsumableLotStatisticsList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_main=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

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
        	if (errCD != 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}


        	switch(trId) {
        		case "selectPeriodQueryCmb": //[조회조건] Period dataset Callback
        			this.fn_setDate("THISWEEK");		// 금주
        			break;
        		case "selectMtmPlantList":	//[조회조건] Site Callback
        			this.searchDiv.cbo_site.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        			break;
        		case "selectMtmMtrGrpCodeList":	//[조회조건] Site Callback
        			break;
        		case "selectMtmMtrVerList":		//[조회조건] Site Callback
        			break;

        		case "selectConsumableLotStatisticsList":		//[메인조회] Site Callback
        			// 조회 조건 없는 경우 msg 출력
        			if(this.ds_main.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        			}
        			// 자재현황 List 컬럼 설정(집계구분에 따라서)
        			this.fn_setMainGridCol();

        		case "selectConsumablelotStatisticsDetailInfoList":		//[메인detail조회] Site Callback

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
        		case "WH_NM" :
        			this.searchDiv.edt_whNm.set_value(rtn[1]);
        			this.whId = rtn[0]; 		//HIDDEN 필드

        			break;
        		case "SCH_MTR_NM" :
        			this.mtrId = rtn[1];			// 자재 ID
        			this.searchDiv.edt_mtrNm.set_value(rtn[3]);			// 자재명

        			// 자재버전 호출 함수
        			this.fn_getMtrVer();

        			break;

        		default :
        			break;
        	}
        };

         /*
         * 기능(공통팝업) : 조회
         */
        this.fn_openPop = function(svcId, popId, pArg)
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
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");
        	oArg.arg_searchStr = "";

        	if(popId=="P00131"){ //창고 명 조회
        		oArg.arg_rtnCols = "WAREHOUSEID|WAREHOUSENAME";
        	}


        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        	this.tomfn_getPeriodData("ds_periodType","","fn_callBack");
        	this.searchDiv.cbo_periodType.set_value("THISWEEK"); // 금주
        	trace("####### 기간 달력 설정 ----> ");
        	this.fn_initSiteCombo();
        }

        /*
         * 기능 : 'site' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	this.mtmfn_setCustomQueryCmb(this.searchDiv.cbo_site			// Object
        								, "selectMtmPlantList,,Y,A" 		// OPTION
        								, sArgs								// 추가 파라미터
        								, "fn_callBack"); 					//콜백함수 지정

        	this.fn_getMtrGrpCode();
        	this.fn_getMtrVer();

        }
        /*
         * 기능 : '자재그룹코드' 콤보 조회
         */
        this.fn_getMtrGrpCode = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	this.mtmfn_setCustomQueryCmb(this.searchDiv.cbo_mtrGrpCode 			// Object
        								, "selectMtmMtrGrpCodeList,ALL,Y,A" 	// OPTION
        								, sArgs									// 추가 파라미터
        								, "fn_callBack"); 						//콜백함수 지정
        };

        /*
         * 기능 : '자재버전' 콤보 조회
         */
        this.fn_getMtrVer = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());


        	if(!this.gfn_isNull(this.searchDiv.edt_mtrNm.value))
        	{
        		sArgs += this.gfn_setParam("CONSUMABLEDEFID", this.mtrId);
        	}
        	else
        	{
        		sArgs += this.gfn_setParam("CONSUMABLEDEFID", "");
        	}

        	this.mtmfn_setCustomQueryCmb(this.searchDiv.cbo_mtrVer 		// Object
        								, "selectMtmMtrVerList,ALL,Y,A" 	// OPTION
        								, sArgs									// 추가 파라미터
        								, "fn_callBack"); 						//콜백함수 지정
        };



        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.searchDiv.cal_startDt.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.searchDiv.cal_endDt.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        }
        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function ()
        {
        	this.searchDiv.cbo_periodType.set_value("CUSTOM");
        }

        /*
         * 집계구분에 따라서 자재 현황 List 컬럼 변경
         */
        this.fn_setMainGridCol = function ()
        {
        	var nConType = this.searchDiv.cbo_constatisticsType.value;		// 집계구분

        	var nCreTimeCellIdx = this.div_work.form.grd_main.getBindCellIndex("body", "CREATEDTIME");			// [기본사이즈] 160
        	var nWhNmCellIdx 	= this.div_work.form.grd_main.getBindCellIndex("body", "WAREHOUSENAME");      	// [기본사이즈] 80
        	var nlotIdCellIdx 	= this.div_work.form.grd_main.getBindCellIndex("body", "CONSUMABLELOTID");		// [기본사이즈] 230

        	if (nConType == "CONSUMABLEONLY") // 품목         AREANAME WAREHOUSEID CONSUMABLELOTID
        	{
        		this.div_work.form.grd_main.setFormatColProperty(nCreTimeCellIdx,"size",0);
        		this.div_work.form.grd_main.setFormatColProperty(nWhNmCellIdx,"size",0);
        		this.div_work.form.grd_main.setFormatColProperty(nlotIdCellIdx,"size",0);

        	}
        	else if (nConType == "CONSUMABLEANDLOT") // 품목 + LOT   AREANAME WAREHOUSEID
        	{
        		this.div_work.form.grd_main.setFormatColProperty(nCreTimeCellIdx,"size",160);
        		this.div_work.form.grd_main.setFormatColProperty(nWhNmCellIdx,"size",0);
        		this.div_work.form.grd_main.setFormatColProperty(nlotIdCellIdx,"size",230);

        	}
        	else if (nConType == "CONSUMABLEANDAREA")// 품목 + 창고코드
        	{
        		this.div_work.form.grd_main.setFormatColProperty(nCreTimeCellIdx,"size",0);
        		this.div_work.form.grd_main.setFormatColProperty(nWhNmCellIdx,"size",80);
        		this.div_work.form.grd_main.setFormatColProperty(nlotIdCellIdx,"size",0);

        	}
        	else if (nConType == "ALLITEM") // 품목 + LOT + 창고코드
        	{
        		this.div_work.form.grd_main.setFormatColProperty(nCreTimeCellIdx,"size",160);
        		this.div_work.form.grd_main.setFormatColProperty(nWhNmCellIdx,"size",80);
        		this.div_work.form.grd_main.setFormatColProperty(nlotIdCellIdx,"size",230);
        	}

        };

        /*
         * 상세 내역 조회
         */
        this.fn_searchDetil = function ()
        {
        	this.ds_searchDetail.clearData();

        	var nRow = this.ds_main.rowposition;

        	if(this.ds_main.rowcount == 0){
        		return;
        	}

        	this.ds_searchDetail.addRow();
        	this.ds_searchDetail.setColumn(0, "P_CONPERIOD_PERIODFR", this.searchDiv.cal_startDt.value); 	//시작일
        	this.ds_searchDetail.setColumn(0, "P_CONPERIOD_PERIODTO", this.searchDiv.cal_endDt.value);		//종료일
        	this.ds_searchDetail.setColumn(0, "P_ENTERPRISEID", this.gf_getEnterpriseId());					//ENTERPRISEID
        	this.ds_searchDetail.setColumn(0, "CONSUMABLEDEFID_D", this.ds_main.getColumn(nRow,"CONSUMABLEDEFID"));					//자재id

        	this.ds_searchDetail.setColumn(0, "CONSUMABLEDEFVERSION_D", this.ds_main.getColumn(nRow,"CONSUMABLEDEFVERSION")); 	// 자재버전
        	this.ds_searchDetail.setColumn(0, "CONSUMABLELOTID_D",   this.ds_main.getColumn(nRow,"CONSUMABLELOTID")); 			// 자재 lot no
        	this.ds_searchDetail.setColumn(0, "WAREHOUSEID_D", this.ds_main.getColumn(nRow,"WAREHOUSEID")); 					// 창고 id

        	var sSvcID 			= "selectConsumablelotStatisticsDetailInfoList";
        	var sController 	= "/mtm00400/selectConsumablelotStatisticsDetailInfoList.do";
        	var sInDatasets 	= "INPUT=ds_searchDetail";
        	var sOutDatasets 	= "ds_detail=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         *
         */
        this.fn_setTextSum = function ()
        {

        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 기간 Type 콤보 변경시
         */
        this.tab_search_tab_page_cbo_periodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate(e.postvalue);
        	}
        };

        /*
         * 창고 명 팝업 호출 버튼 클릭시
         */
        this.tab_search_tab_page_btn_whNm_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("P_PLANTID", this.searchDiv.cbo_site.value);
        	sArgs += this.gfn_setParam("USERID", this.gf_getUserId());

        	this.fn_openPop("WH_NM","P00131", sArgs); //작업장 조회

        };

        /*
         * 자재 명 팝업 호출 버튼 클릭시
         */
        this.tab_search_tab_page_btn_mtrNm_onclick = function(obj,e)
        {
        	var popupId = "SCH_MTR_NM";
        	var oArg = {};
        	var opts = "width=850,height=500";

        	// 기입력된 값이 있으면
        	oArg.arg_mtrNm = this.searchDiv.edt_mtrNm.value;

        	this.gfn_openPopup(popupId,"mtm::MTM00400P.xfdl",oArg,opts);
        };

        /*
         * 자재버전 콤보에 포커스가 들어 올때
         * 값을 재 조회 한다.
         */
        this.tab_search_tab_page_cbo_mtrVer_onsetfocus = function(obj,e)
        {
        	this.fn_getMtrVer();
        };
        /*
         * 상단 main 그리드 클릭시
         */
        this.div_work_grd_main_oncellclick = function(obj,e)
        {
        	//trace(" ### [그리드 클릭시] ### ==> :");
        	//this.fn_searchDetil();
        };
        /*
         * 데이터셋 row 변경시
         */
        this.ds_main_onrowposchanged = function(obj,e)
        {
        	this.fn_searchDetil();
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.grd_main.addEventHandler("oncellclick",this.div_work_grd_main_oncellclick,this);
            this.tab_search.tab_page.form.btn_clearConsum.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.tab_page.form.btn_mtrNm.addEventHandler("onclick",this.tab_search_tab_page_btn_mtrNm_onclick,this);
            this.tab_search.tab_page.form.btn_whNm.addEventHandler("onclick",this.tab_search_tab_page_btn_whNm_onclick,this);
            this.tab_search.tab_page.form.cbo_mtrVer.addEventHandler("onsetfocus",this.tab_search_tab_page_cbo_mtrVer_onsetfocus,this);
            this.tab_search.tab_page.form.cbo_periodType.addEventHandler("onitemchanged",this.tab_search_tab_page_cbo_periodType_onitemchanged,this);
            this.tab_search.tab_page.form.cal_startDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.tab_page.form.cal_endDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.ds_main.addEventHandler("onrowposchanged",this.ds_main_onrowposchanged,this);
        };
        this.loadIncludeScript("MTM00400M_bak.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
