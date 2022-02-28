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
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"UOM\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"SUBINVENTORY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBINVENTORY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BEGIN_QUANTITY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PO_DELIVER_QUANTITY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SUBINV_DELIVER_QUANTITY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ETC_DELIVER_QUANTITY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WIP_RECEIPT_QUANAITY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"INPUT_QUANTITY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PO_RETURN_QUANTITY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SUBINV_ISSUE_QUANTITY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ETC_ISSUE_QUANTITY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"WIP_ISSUE_QUANTITY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OUTPUT_QUANTITY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PRE_QUANTITY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"POST_QUANTITY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ONHAND_QUANTITY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RECEIPTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONSUMEDQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AVAIL_INV\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"END_QUANTITY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">금일</Col></Row><Row><Col id=\"data\">전일</Col></Row><Row><Col id=\"data\">금주</Col></Row><Row><Col id=\"data\">전주</Col></Row><Row><Col id=\"data\">금월</Col></Row><Row><Col id=\"data\">사용자정의</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_REVISION\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_LOT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSACTION_DETAIL\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSACTION_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"TRANSACTION_TYPE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SUBINVENTORY_CODE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"SUBINVENTORY_NAME_FR\" type=\"STRING\" size=\"256\"/><Column id=\"SUBINVENTORY_CODE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"SUBINVENTORY_NAME_TO\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPT_QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ISSUE_QTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ACCOUNT_ALLIAS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_ALLIAS_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"P_USERID\" type=\"STRING\" size=\"256\"/><Column id=\"P_ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONSUMABLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONPERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONPERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"P_ITEM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"P_WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_WAREHOUSENM\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"P_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_ISSTOCKQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"P_ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_ITEM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"P_SUBINVENTORY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"P_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONPERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONPERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_ITEM_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_receipt", this);
            obj._setContents("<ColumnInfo><Column id=\"RECEIPTDATE\" type=\"DATE\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REQUESTNO\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUENUM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_consumed", this);
            obj._setContents("<ColumnInfo><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"MATERIALLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMEDQTY\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
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

            obj = new Grid("grd_main","0","34",null,null,"0","195",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_main");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"160\"/><Column size=\"250\"/><Column size=\"60\"/><Column size=\"230\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"자재 ID\"/><Cell col=\"2\" rowspan=\"2\" text=\"자재명\"/><Cell col=\"3\" rowspan=\"2\" text=\"단위\"/><Cell col=\"4\" rowspan=\"2\" text=\"자재 LOT NO\"/><Cell col=\"5\" rowspan=\"2\" text=\"창고 ID\"/><Cell col=\"6\" rowspan=\"2\" text=\"창고명\"/><Cell col=\"7\" rowspan=\"2\" text=\"기본수량\"/><Cell col=\"8\" colspan=\"5\" text=\"입고\"/><Cell col=\"13\" colspan=\"5\" text=\"출고\"/><Cell col=\"18\" rowspan=\"2\" text=\"인수수량\"/><Cell col=\"19\" rowspan=\"2\" text=\"할당수량\"/><Cell col=\"20\" rowspan=\"2\" text=\"가용재고\"/><Cell col=\"21\" rowspan=\"2\" text=\"재고수량\"/><Cell row=\"1\" col=\"8\" text=\"구매입고\"/><Cell row=\"1\" col=\"9\" text=\"재고이동\"/><Cell row=\"1\" col=\"10\" text=\"기타입고\"/><Cell row=\"1\" col=\"11\" text=\"생산입고\"/><Cell row=\"1\" col=\"12\" text=\"입고합계\"/><Cell row=\"1\" col=\"13\" text=\"구매반품\"/><Cell row=\"1\" col=\"14\" text=\"재고이동\"/><Cell row=\"1\" col=\"15\" text=\"기타출고\"/><Cell row=\"1\" col=\"16\" text=\"생산출고\"/><Cell row=\"1\" col=\"17\" text=\"출고합계\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:ITEM_CODE\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:ITEM_DESCRIPTION\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:UOM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:LOT_NUMBER\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:SUBINVENTORY_CODE\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:SUBINVENTORY_NAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:BEGIN_QUANTITY\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\"/><Cell col=\"8\" text=\"bind:PO_DELIVER_QUANTITY\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"mask\"/><Cell col=\"9\" text=\"bind:SUBINV_DELIVER_QUANTITY\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"mask\"/><Cell col=\"10\" text=\"bind:ETC_DELIVER_QUANTITY\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"mask\"/><Cell col=\"11\" text=\"bind:WIP_RECEIPT_QUANAITY\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"mask\"/><Cell col=\"12\" text=\"bind:INPUT_QUANTITY\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"mask\" cssclass=\"cell_bg_yellow\"/><Cell col=\"13\" text=\"bind:PO_RETURN_QUANTITY\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"mask\"/><Cell col=\"14\" text=\"bind:SUBINV_ISSUE_QUANTITY\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"mask\"/><Cell col=\"15\" text=\"bind:ETC_ISSUE_QUANTITY\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"mask\"/><Cell col=\"16\" text=\"bind:WIP_ISSUE_QUANTITY\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"mask\"/><Cell col=\"17\" text=\"bind:OUTPUT_QUANTITY\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"mask\" cssclass=\"cell_bg_yellow\"/><Cell col=\"18\" text=\"bind:RECEIPTQTY\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"expr:RECEIPTQTY==null?&apos;text&apos;:&apos;mask&apos;\"/><Cell col=\"19\" text=\"bind:CONSUMEDQTY\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"expr:CONSUMEDQTY==null?&apos;text&apos;:&apos;mask&apos;\"/><Cell col=\"20\" text=\"bind:AVAIL_INV\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"expr:AVAIL_INV==null?&apos;text&apos;:&apos;mask&apos;\"/><Cell col=\"21\" text=\"bind:END_QUANTITY\" textAlign=\"right\" edittype=\"none\" maskeditformat=\"#,###,###,##0.#####\" displaytype=\"mask\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_main",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_Page","0","grd_main:0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Detail",this.div_work.form.tab_Page);
            obj.set_text("상세내역");
            this.div_work.form.tab_Page.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Page.Detail.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_detail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"구분\"/><Cell col=\"2\" text=\"작업시간\"/><Cell col=\"3\" text=\"입출고유형\"/><Cell col=\"4\" text=\"자재 Lot No.\"/><Cell col=\"5\" text=\"Lot No.\"/><Cell col=\"6\" text=\"창고 ID(F)\"/><Cell col=\"7\" text=\"창고 명(F)\"/><Cell col=\"8\" text=\"창고 ID(T)\"/><Cell col=\"9\" text=\"창고 명(T)\"/><Cell col=\"10\" text=\"입고수량\"/><Cell col=\"11\" text=\"출고수량\"/><Cell col=\"12\" text=\"거래유형명\"/><Cell col=\"13\" text=\"거래유형 설명\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:TRANSACTION_DETAIL\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:TRANSACTION_DATE\" displaytype=\"text\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"3\" text=\"bind:TRANSACTION_TYPE_NAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:ITEM_LOT_NO\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:LOT_NO\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:SUBINVENTORY_CODE_FR\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:SUBINVENTORY_NAME_FR\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:SUBINVENTORY_CODE_TO\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:SUBINVENTORY_NAME_TO\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:RECEIPT_QTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:ISSUE_QTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:ACCOUNT_ALLIAS_NAME\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:ACCOUNT_ALLIAS_DESC\" textAlign=\"left\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\" tooltiptext=\"SUM\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" text=\"expr:dataset.getSum(&quot;RECEIPT_QTY&quot;)\"/><Cell col=\"11\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" text=\"expr:dataset.getSum(&quot;ISSUE_QTY&quot;)\"/><Cell col=\"12\"/><Cell col=\"13\"/></Band></Format></Formats>");
            this.div_work.form.tab_Page.Detail.addChild(obj.name, obj);

            obj = new Tabpage("Receipt",this.div_work.form.tab_Page);
            obj.set_text("인수내역");
            this.div_work.form.tab_Page.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Page.Receipt.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_receipt");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"160\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"작업시간\"/><Cell col=\"2\" text=\"자재 Lot No.\"/><Cell col=\"3\" text=\"창고 ID\"/><Cell col=\"4\" text=\"인수수량\"/><Cell col=\"5\" text=\"청구번호\"/><Cell col=\"6\" text=\"불출번호\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:RECEIPTDATE\" displaytype=\"text\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"2\" text=\"bind:CONSUMABLELOTID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:WAREHOUSEID\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:LOTQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:REQUESTNO\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:ISSUENUM\" textAlign=\"left\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" text=\"expr:dataset.getSum(&quot;LOTQTY&quot;)\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.div_work.form.tab_Page.Receipt.addChild(obj.name, obj);

            obj = new Tabpage("Consumed",this.div_work.form.tab_Page);
            obj.set_text("할당내역");
            this.div_work.form.tab_Page.addChild(obj.name, obj);

            obj = new Grid("grd_list","0","0",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Page.Consumed.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_consumed");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"160\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"작업시간\"/><Cell col=\"2\" text=\"자재 Lot No.\"/><Cell col=\"3\" text=\"Lot No.\"/><Cell col=\"4\" text=\"창고 ID\"/><Cell col=\"5\" text=\"할당수량\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CREATEDTIME\" displaytype=\"text\" calendardisplaynulltype=\"none\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"2\" text=\"bind:MATERIALLOTID\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:WAREHOUSEID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:CONSUMEDQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" text=\"expr:dataset.getSum(&quot;CONSUMEDQTY&quot;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_Page.Consumed.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tab_page",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_isStockQty","0","236","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("21");
            obj.set_text("재고수량 0제외");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISSTOCKQTY");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_isStockQty","105",null,"168","20",null,"sta_isStockQty:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,YesOnly,ALL,Y,Y");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("guidetip04","152","cbo_isStockQty:0","45","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("13");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","guidetip04:6","10","27",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("14");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_clearConsum","guidetip05:0","guidetip04:0","102","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_search","15","guidetip04:0","146","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("12");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_constatisticsType","0","211","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("20");
            obj.set_text("집계구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CONSTATISTICSTYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_productname","0","136","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("22");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_whNm","0","sta_productname:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("19");
            obj.set_text("창고 명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WAREHOUSENAME");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_whNm","sta_whNm:5",null,"143","20",null,"sta_whNm:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("6");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_whNm","edt_whNm:0",null,"22","20",null,"sta_whNm:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("15");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("BB2F5FB0FA594AB1B2150B1B48275231");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_site","sta_site:5",null,"165","20",null,"sta_site:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_consumGrpCode","0","sta_site:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("16");
            obj.set_text("자재그룹코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CONSUMABLECLASSID");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_mtrGrpCode","sta_consumGrpCode:5",null,"165","20",null,"sta_consumGrpCode:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,ConsumableClass,ALL,Y,Y");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_mtrLotNo","0","sta_whNm:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("18");
            obj.set_text("자재 LOT NO");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CONSUMABLELOTID");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_constatisticsType","sta_constatisticsType:2",null,"168","20",null,"sta_constatisticsType:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,CSMStatisticsSearchType,,Y,Y");
            obj.set_index("-1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_period","0","sta_consumGrpCode:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("17");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PERIOD");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_productdefid","0","111","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("24");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType","6","sta_period:5","94","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("금주");
            obj.set_value("");
            obj.set_index("2");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Calendar("cal_startDt","sta_period:5",null,null,"20","15","sta_period:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Calendar("cal_endDt","cbo_periodType:8",null,null,"20","15","cbo_periodType:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_mtrLotNo","sta_mtrLotNo:2",null,"168","20",null,"sta_mtrLotNo:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("5");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_productname","sta_productname:5",null,null,"20","15","sta_productname:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("23");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_productdefid","sta_productdefid:5",null,null,"20","37","sta_productdefid:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("25");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_productdefid","edt_productdefid:0",null,"22","20",null,"sta_productdefid:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_finder");
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
            obj = new BindItem("item0","tab_search.tab_page.form.cbo_site","value","ds_search","P_PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.tab_page.form.cbo_mtrGrpCode","value","ds_search","P_CONSUMABLECLASSID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.tab_page.form.cal_startDt","value","ds_search","P_CONPERIOD_PERIODFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.tab_page.form.cal_endDt","value","ds_search","P_CONPERIOD_PERIODTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.tab_page.form.edt_productdefid","value","ds_search","P_ITEM_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.tab_page.form.edt_productname","value","ds_search","P_ITEM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.tab_page.form.edt_whNm","value","ds_search","P_WAREHOUSENM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.tab_page.form.edt_mtrLotNo","value","ds_search","P_LOT_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab_search.tab_page.form.cbo_isStockQty","value","ds_search","P_ISSTOCKQTY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MTM00400M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("MTM00400M.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("MTM00400M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("MTM00400M.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("MTM00400M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("MTM00400M.xfdl", function() {
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
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_pcm.xjs"); /*include "lib::lib_pcm.xjs"*/;
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
         // this.gf_getEnterpriseId()
        // this.gf_getSiteType()
        // this.gf_getLanguageType()
        // this.gf_getUserId()
        // this.gf_getUserNm()

        this.searchDiv = this.tab_search.tab_page.form;
        this.whId = '';			// 창고id
        //this.mtrId = '';		// 자재id

        var v_conperiod_periodfr;
        var v_conperiod_periodto;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	console.log("MTM00400M");
        	// 초기화 (공통)
        	this.nfn_formInit(obj);

        	// 검색조건 공통 콤보 설정
        	this.fn_initCombo();

        	// 콤보 기본값 설정
        	this.searchDiv.cbo_constatisticsType.set_value("ITEM_SUB");
        	this.searchDiv.cbo_isStockQty.set_value("Y");
        	this.searchDiv.cbo_mtrGrpCode.set_value("RawMaterial");

        	this.searchDiv.btn_edt_productdefid.addEventHandler( "onclick", this.fn_clickProductdefid, this );

        	// 상단 그리드 초기화
        	this.fn_setMainGridCol();
        };

        this.fn_clickProductdefid = function()
        {
        	this.searchDiv.edt_productdefid.set_value("");
        	this.searchDiv.edt_productname.set_value("");
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
        	//this.mtrId = "";								// 자재 ID
        	//this.searchDiv.edt_mtrNm.set_value("");			// 자재명
        	this.searchDiv.edt_mtrLotNo.set_value("");			// 자재 LOT NO

        	this.searchDiv.edt_productdefid.set_value("");
        	this.searchDiv.edt_productname.set_value("");
        	// 콤보 기본값 설정
        	this.searchDiv.cbo_constatisticsType.set_value("ITEM_SUB");
        	this.searchDiv.cbo_isStockQty.set_value("Y");
        	this.searchDiv.cbo_mtrGrpCode.set_value("RawMaterial");


        };
        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {

        	v_conperiod_periodfr = this.searchDiv.cal_startDt.value;
        	v_conperiod_periodto = this.searchDiv.cal_endDt.value;

        // 	this.ds_search.setColumn(0, "P_CONPERIOD_PERIODFR", this.searchDiv.cal_startDt.value); //시작일
        // 	this.ds_search.setColumn(0, "P_CONPERIOD_PERIODTO", this.searchDiv.cal_endDt.value);	//종료일
        // 	this.ds_search.setColumn(0, "CONSTATISTICSTYPE", this.searchDiv.cbo_constatisticsType.value);	//집계구분
        	this.ds_search.setColumn(0, "P_USERID", this.gf_getUserId());					//사용자id
        	this.ds_search.setColumn(0, "P_ENTERPRISEID", this.gf_getEnterpriseId()); 	//ENTERPRISEID
        // 	this.ds_search.setColumn(0, "P_CONSUMABLECLASSID",   this.searchDiv.cbo_mtrGrpCode.value); 			//자재그룹코드
        // 	this.ds_search.setColumn(0, "P_PLANTID", this.searchDiv.cbo_site.value); 	//site


        // 	// 자재명이 없으면 자재id 초기화
        // 	if(this.gfn_isNull(this.searchDiv.edt_mtrNm.value))
        // 	{
        // 		this.mtrId = "";			//자재id
        //
        // 	}
        // 	this.ds_search.setColumn(0, "CONSUMABLEDEFID",  this.mtrId); 		//자재id
        // 	this.ds_search.setColumn(0, "CONSUMABLEDEFVERSION", this.searchDiv.cbo_mtrVer.value); 	//자재버전
        //	this.ds_search.setColumn(0, "P_CONSUMABLELOTID", this.searchDiv.edt_mtrLotNo.value);	//자재 LOT NO

        	// 자재명이 없으면 자재id 초기화
        	if(this.gfn_isNull(this.searchDiv.edt_whNm.value))
        	{
        		this.whId = "";		// 창고id
        	}
        	this.ds_search.setColumn(0, "P_WAREHOUSEID", this.whId);		// 창고id

        	if(this.searchDiv.cbo_constatisticsType.value == "NULL")
        	{
        		this.ds_search.setColumn(0, "P_TYPE", "");
        	}
        	else
        	{
        		this.ds_search.setColumn(0, "P_TYPE", this.searchDiv.cbo_constatisticsType.value);
        	}


        // 	this.ds_search.setColumn(0, "P_PRODUCTDEFNAME", this.tab_search.tab_page.form.edt_productname.value);		// 품목명
        //
        // 	this.ds_search.setColumn(0, "P_ISSTOCKQTY", this.searchDiv.cbo_isStockQty.value);	//재고수량 0제외



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

        		case "selectConsumableLotStatisticsList":		//[메인조회] Site Callback

        			// 조회 조건 없는 경우 msg 출력
        			if(this.ds_main.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        			}


        		case "selectConsumablelotStatisticsDetailInfoList":		//[메인detail조회] Site Callback



        			break;

        		default:

        			break;
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
        		case "POPUP_PRODUCTDEFID" : //

        			var vItemCd    = this.nfn_nvl(rtn[0], "");

        			if(vItemCd.length > 0)
        			{
        				var vSubItemCd = vItemCd.substring(0, 1);

        				if(vSubItemCd == "2")
        					vItemCd   = rtn[0] + rtn[2];
        			}

        		    this.searchDiv.edt_productdefid.set_value(vItemCd);
        			this.searchDiv.edt_productname.set_value(rtn[1]);
        		break;
        		case "WH_NM" :
        			this.searchDiv.edt_whNm.set_value(rtn[1]);
        			this.whId = rtn[0]; 		//HIDDEN 필드

        			break;
        // 		case "SCH_MTR_NM" :
        // //			this.mtrId = rtn[1];			// 자재 ID
        // //			this.searchDiv.edt_mtrNm.set_value(rtn[3]);			// 자재명
        //
        // 			// 자재버전 호출 함수
        // 			this.fn_getMtrVer();
        //
        // 			break;

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

        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");
        	oArg.arg_searchStr = "P_WAREHOUSENAME=" + this.tab_search.tab_page.form.edt_whNm.value;

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

        	//this.fn_getMtrGrpCode();
        	//this.fn_getMtrVer();

        }
        // /*
        //  * 기능 : '자재그룹코드' 콤보 조회
        //  */
        // this.fn_getMtrGrpCode = function ()
        // {
        // 	var sArgs 			= "";
        // 	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        // 	this.mtmfn_setCustomQueryCmb(this.searchDiv.cbo_mtrGrpCode 			// Object
        // 								, "selectMtmMtrGrpCodeList,ALL,Y,A" 	// OPTION
        // 								, sArgs									// 추가 파라미터
        // 								, "fn_callBack"); 						//콜백함수 지정
        // };

        // /*
        //  * 기능 : '자재버전' 콤보 조회
        //  */
        // this.fn_getMtrVer = function ()
        // {
        // 	var sArgs 			= "";
        // 	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        //
        //
        // // 	if(!this.gfn_isNull(this.searchDiv.edt_mtrNm.value))
        // // 	{
        // // 		sArgs += this.gfn_setParam("CONSUMABLEDEFID", this.mtrId);
        // // 	}
        // // 	else
        // // 	{
        // // 		sArgs += this.gfn_setParam("CONSUMABLEDEFID", "");
        // // 	}
        //
        // 	this.mtmfn_setCustomQueryCmb(this.searchDiv.cbo_mtrVer 		// Object
        // 								, "selectMtmMtrVerList,ALL,Y,A" 	// OPTION
        // 								, sArgs									// 추가 파라미터
        // 								, "fn_callBack"); 						//콜백함수 지정
        // };



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

        	var nLotNoIdx   = this.div_work.form.grd_main.getBindCellIndex("body", "LOT_NUMBER");			// [기본사이즈] 230
        	var nWhCdIdx 	= this.div_work.form.grd_main.getBindCellIndex("body", "SUBINVENTORY_CODE");    // [기본사이즈] 120
        	var nWhNmIdx 	= this.div_work.form.grd_main.getBindCellIndex("body", "SUBINVENTORY_NAME");     // [기본사이즈] 250

        	if (nConType == "ITEM") // 품목
        	{		// Lot, 창고id, 창고명 뺌  LOT_NUMBER SUBINVENTORY_CODE SUBINVENTORY_NAME
        		this.div_work.form.grd_main.setFormatColProperty(nLotNoIdx,"size",0);
        		this.div_work.form.grd_main.setFormatColProperty(nWhCdIdx,"size",0);
        		this.div_work.form.grd_main.setFormatColProperty(nWhNmIdx,"size",0);

        	}
        	else if (nConType == "ITEM_LOT") // 품목 + LOT
        	{
        		//창고 id, 창고명 뺌 SUBINVENTORY_CODE SUBINVENTORY_NAME
        		this.div_work.form.grd_main.setFormatColProperty(nLotNoIdx,"size",230);
        		this.div_work.form.grd_main.setFormatColProperty(nWhCdIdx,"size",0);
        		this.div_work.form.grd_main.setFormatColProperty(nWhNmIdx,"size",0);

        	}
        	else if (nConType == "ITEM_SUB")// 품목 + 창고코드
        	{
        		//Lot뺌 LOT_NUMBER
        		this.div_work.form.grd_main.setFormatColProperty(nLotNoIdx,"size",0);
        		this.div_work.form.grd_main.setFormatColProperty(nWhCdIdx,"size",100);
        		this.div_work.form.grd_main.setFormatColProperty(nWhNmIdx,"size",120);

        	}
        	else  // 품목 + LOT + 창고코드
        	{
        		//모두 표시
        		this.div_work.form.grd_main.setFormatColProperty(nLotNoIdx,"size",230);
        		this.div_work.form.grd_main.setFormatColProperty(nWhCdIdx,"size",100);
        		this.div_work.form.grd_main.setFormatColProperty(nWhNmIdx,"size",120);
        	}

        };

        /*
         * 상세 내역 조회
         */
        this.fn_searchDetil = function (nRow)
        {
        	this.ds_searchDetail.clearData();

        	//var nRow = this.ds_main.rowposition;

        	if(this.ds_main.rowcount == 0){
        		return;
        	}

        	this.ds_searchDetail.addRow();
        	this.ds_searchDetail.setColumn(0, "P_ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_searchDetail.setColumn(0, "P_PLANTID", this.gf_getSiteType());
        	this.ds_searchDetail.setColumn(0, "P_ITEM_CODE", this.ds_main.getColumn(nRow, "ITEM_CODE"));

        	var vSubItemCode = this.nfn_nvl(this.ds_main.getColumn(nRow, "ITEM_CODE"), "");

        	vSubItemCode = vSubItemCode.substr(0, 1);
        	if(vSubItemCode == "2")
        		this.ds_searchDetail.setColumn(0, "P_ITEM_TYPE", "Y");
        	else
        		this.ds_searchDetail.setColumn(0, "P_ITEM_TYPE", "N");

        	this.ds_searchDetail.setColumn(0, "P_LOT_NUMBER", this.ds_main.getColumn(nRow, "LOT_NUMBER"));
        	this.ds_searchDetail.setColumn(0, "P_SUBINVENTORY_CODE", this.ds_main.getColumn(nRow, "SUBINVENTORY_CODE"));

        	if(this.searchDiv.cbo_constatisticsType.value == "NULL")
        	{
        		this.ds_searchDetail.setColumn(0, "P_TYPE", "");
        	}
        	else
        	{
        		this.ds_searchDetail.setColumn(0, "P_TYPE", this.searchDiv.cbo_constatisticsType.value);
        	}

        	this.ds_searchDetail.setColumn(0, "P_CONPERIOD_PERIODFR", v_conperiod_periodfr);
        	this.ds_searchDetail.setColumn(0, "P_CONPERIOD_PERIODTO", v_conperiod_periodto);

        	var sSvcID 			= "selectConsumablelotStatisticsDetailInfoList";
        	var sController 	= "/mtm00400/selectConsumablelotStatisticsDetailInfoList.do";
        	var sInDatasets 	= "INPUT=ds_searchDetail";
        	var sOutDatasets 	= "ds_detail=output1 ds_receipt=output2 ds_consumed=output3";
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


        this.tab_search_tab_page_btn_productdefid_onclick = function(obj,e)
        {
        	var oArg = {};
        	oArg.arg_type        = "BA";
        	oArg.arg_popupCd     = "P00314";
        	oArg.arg_popupNm     = "품목 선택";
        	oArg.arg_rtnCols     = "ITEMID|ITEMNAME|ITEMVERSION";
        	oArg.arg_paramCols   = "";
        	oArg.arg_paramValues = "";

        	var vItemCd    = this.nfn_nvl(this.searchDiv.edt_productdefid.value, "");

        	if(vItemCd.length > 0)
        	{
        		var vSubItemCd = vItemCd.substring(0, 1);

        		if(vSubItemCd == "2")
        			oArg.arg_searchStr   = "P_ITEMDEFNAME=" + vItemCd.substring(0, vItemCd.length-3);
        		else
        			oArg.arg_searchStr   = "P_ITEMDEFNAME=" + vItemCd;
        	}
        	else
        	{
        		oArg.arg_searchStr   = "P_ITEMDEFNAME=" + vItemCd;
        	}

        	this.gfn_openPopup( "POPUP_PRODUCTDEFID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };

        /*
         * 창고 명 팝업 호출 버튼 클릭시
         */
        this.tab_search_tab_page_btn_whNm_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("P_PLANTID", this.searchDiv.cbo_site.value);
        	//sArgs += this.gfn_setParam("USERID", this.gf_getUserId());

        	this.fn_openPop("WH_NM","P00131", sArgs); //작업장 조회

        };

        // /*
        //  * 자재 명 팝업 호출 버튼 클릭시
        //  */
        // this.tab_search_tab_page_btn_mtrNm_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // 	var popupId = "SCH_MTR_NM";
        // 	var oArg = {};
        // 	var opts = "width=850,height=500";
        //
        // 	// 기입력된 값이 있으면
        // 	//oArg.arg_mtrNm = this.searchDiv.edt_mtrNm.value;
        //
        // 	this.gfn_openPopup(popupId,"mtm::MTM00400P.xfdl",oArg,opts);
        // };

        // /*
        //  * 자재버전 콤보에 포커스가 들어 올때
        //  * 값을 재 조회 한다.
        //  */
        // this.tab_search_tab_page_cbo_mtrVer_onsetfocus = function(obj:nexacro.Combo,e:nexacro.SetFocusEventInfo)
        // {
        // 	this.fn_getMtrVer();
        // };

        /*
         * 데이터셋 row 변경시
         */
        this.ds_main_onrowposchanged = function(obj,e)
        {
        	this.fn_searchDetil(e.newrow);
        };






        this.tab_search_tab_page_cbo_constatisticsType_onitemchanged = function(obj,e)
        {
        	// 자재현황 List 컬럼 설정(집계구분에 따라서)
        	this.fn_setMainGridCol();
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.tab_page.form.btn_clearConsum.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.tab_page.form.btn_whNm.addEventHandler("onclick",this.tab_search_tab_page_btn_whNm_onclick,this);
            this.tab_search.tab_page.form.cbo_constatisticsType.addEventHandler("onitemchanged",this.tab_search_tab_page_cbo_constatisticsType_onitemchanged,this);
            this.tab_search.tab_page.form.cbo_periodType.addEventHandler("onitemchanged",this.tab_search_tab_page_cbo_periodType_onitemchanged,this);
            this.tab_search.tab_page.form.cal_startDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.tab_page.form.cal_endDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.tab_page.form.btn_productdefid.addEventHandler("onclick",this.tab_search_tab_page_btn_productdefid_onclick,this);
            this.ds_main.addEventHandler("onrowposchanged",this.ds_main_onrowposchanged,this);
        };
        this.loadIncludeScript("MTM00400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
