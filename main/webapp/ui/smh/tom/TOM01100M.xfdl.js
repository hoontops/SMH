(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TOM01100M");
            this.set_titletext("치공구 현황 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_tomDurableLot", this);
            obj._setContents("<ColumnInfo><Column id=\"DURABLESTATEID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNO\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNOSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORMCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLFORM\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKINDID\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLKIND\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLEANSTATEID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLEANSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CLEANLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALCLEANCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALREPAIRCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"HORIZONTAL\" type=\"STRING\" size=\"256\"/><Column id=\"VERTICAL\" type=\"STRING\" size=\"256\"/><Column id=\"THEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDFACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"POLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALPOLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTHICKNESSLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"P_TOOLNO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTLOGINID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CODECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSACTIONSTATUSCODES\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tomToolHistory", this);
            obj._setContents("<ColumnInfo><Column id=\"TOOLNO\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLCODE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLNOSEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TRXDATE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TXNUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPLANTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANT\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRDESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRRESULTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTNO\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLMAKETYPEID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLEANSTATEID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLECLEANSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CLEANLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALUSEDCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALCLEANCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALREPAIRCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"HORIZONTAL\" type=\"STRING\" size=\"256\"/><Column id=\"VERTICAL\" type=\"STRING\" size=\"256\"/><Column id=\"THEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDFACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"POLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOTALPOLISHTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTHICKNESS\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLTHICKNESSLIMIT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tomToolUseHistory", this);
            obj._setContents("<ColumnInfo><Column id=\"TRACKINTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TRACKOUTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLHITCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"USEDFACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLPCS\" type=\"STRING\" size=\"256\"/><Column id=\"TOOLPNL\" type=\"STRING\" size=\"256\"/><Column id=\"SUMMARY\" type=\"STRING\" size=\"256\"/><Column id=\"TXNUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"HITCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tomTransactionStatusCodes", this);
            obj._setContents("<ColumnInfo><Column id=\"CODEID\" type=\"STRING\" size=\"256\"/><Column id=\"CODENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_siteId","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STOPSITE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","175","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","175","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"155","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","165","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","181","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_areaId","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREANAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_state","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_state","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_holdYn","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("보류여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISHOLD");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_holdYn","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_toolNo","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("치공구 코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_product","0","135","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_product","108","135",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnProduct",null,"135","22","20","16",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_area","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnArea",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_toolNo","108","110",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_areaId","15","262","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_value("AreaID(HIDDEN)");
            obj.set_visible("false");
            obj.set_text("AreaID(HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productId","15","292","140","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_value("ProductID(HIDDEN)");
            obj.set_visible("false");
            obj.set_text("ProductID(HIDDEN)");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00_01",null,"155","45","20","96",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","152","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"1","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","112","-63","101","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_tomDurableLot","0","34",null,"48.36%","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_tomDurableLot");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"56\"/><Column size=\"121\"/><Column size=\"30\"/><Column size=\"57\"/><Column size=\"135\"/><Column size=\"85\"/><Column size=\"222\"/><Column size=\"97\"/><Column size=\"52\"/><Column size=\"147\"/><Column size=\"100\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"78\"/><Column size=\"82\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"상태\"/><Cell col=\"1\" text=\"보류여부\" textAlign=\"center\"/><Cell col=\"2\" text=\"Tool 코드\" textAlign=\"center\"/><Cell col=\"3\" text=\"Ver.\" textAlign=\"center\"/><Cell col=\"4\" text=\"Tool 구분\"/><Cell col=\"5\" text=\"TOOL 형식\"/><Cell col=\"6\" text=\"TOOL 종류\"/><Cell col=\"7\" text=\"TOOL 명\"/><Cell col=\"8\" text=\"품목코드\"/><Cell col=\"9\" text=\"품목 Rev.\"/><Cell col=\"10\" text=\"품목명\"/><Cell col=\"11\" text=\"작업장\"/><Cell col=\"12\" text=\"사용타수\"/><Cell col=\"13\" text=\"누적타수\"/><Cell col=\"14\" text=\"보증타수\"/><Cell col=\"15\" text=\"연마기준타수\"/><Cell col=\"16\" text=\"연마횟수\"/><Cell col=\"17\" text=\"수리횟수\"/></Band><Band id=\"body\"><Cell text=\"bind:DURABLESTATE\"/><Cell col=\"1\" text=\"bind:ISHOLD\" textAlign=\"center\"/><Cell col=\"2\" text=\"expr:TOOLNO\" textAlign=\"left\"/><Cell col=\"3\" text=\"expr:TOOLVERSION\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:TOOLTYPE\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:TOOLFORM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:TOOLKIND\" textAlign=\"left\"/><Cell col=\"7\" text=\"expr:PRODUCTDEFNAME + TOOLKIND\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:USEDCOUNT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:TOTALUSEDCOUNT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:USEDLIMIT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:CLEANLIMIT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:TOTALCLEANCOUNT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:TOTALREPAIRCOUNT\" textAlign=\"right\" displaytype=\"number\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tabHistory","0","grd_tomDurableLot:11",null,null,"2","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tabHistory);
            obj.set_text("이력");
            obj.set_tooltiptext("TOOLHISTORY");
            this.div_work.form.tabHistory.addChild(obj.name, obj);

            obj = new Grid("grd_tomToolHistory","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tabHistory.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_tomToolHistory");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"30\"/><Column size=\"130\"/><Column size=\"60\"/><Column size=\"89\"/><Column size=\"0\"/><Column size=\"61\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"34\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"치공구 ID\"/><Cell col=\"1\" text=\"Ver.\"/><Cell col=\"2\" text=\"작업시간\"/><Cell col=\"3\" text=\"제작구분\"/><Cell col=\"4\" text=\"이력 구분\"/><Cell col=\"5\" text=\"작업-----HIDDEN\"/><Cell col=\"6\" text=\"작업자\"/><Cell col=\"7\" text=\"이전 Site\"/><Cell col=\"8\" text=\"이전 작업장\"/><Cell col=\"9\" text=\"Site\"/><Cell col=\"10\" text=\"작업장\"/><Cell col=\"11\" text=\"거래처명\"/><Cell col=\"12\" text=\"의뢰일자\"/><Cell col=\"13\" text=\"순번\"/></Band><Band id=\"body\"><Cell text=\"expr:TOOLCODE\"/><Cell col=\"1\" text=\"expr:TOOLVERSION\"/><Cell col=\"2\" text=\"bind:TRXDATE\"/><Cell col=\"3\" text=\"bind:TOOLMAKETYPE\"/><Cell col=\"4\" text=\"bind:TXNNAME\"/><Cell col=\"5\" text=\"bind:TXNNAME\"/><Cell col=\"6\" text=\"bind:TXNUSERNAME\"/><Cell col=\"7\" text=\"bind:PREVPLANTNAME\"/><Cell col=\"8\" text=\"bind:PREVAREANAME\"/><Cell col=\"9\" text=\"bind:PLANT\"/><Cell col=\"10\" text=\"bind:AREANAME\"/><Cell col=\"11\" text=\"bind:VENDORNAME\"/><Cell col=\"12\" text=\"bind:REQUESTDATE\"/><Cell col=\"13\" text=\"bind:REQUESTSEQUENCE\"/></Band></Format></Formats>");
            this.div_work.form.tabHistory.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_tomToolHistory","8","-3",null,"34","844",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tabHistory.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_tomToolHistory",null,"6","29","24","5",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabHistory.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tabHistory);
            obj.set_text("사용내역");
            obj.set_tooltiptext("TOOLUSESTATUS");
            this.div_work.form.tabHistory.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_tomToolUseStatus",null,"6","29","24","7",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tabHistory.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_tomToolUseStatus","0","33",null,null,"1","0",null,null,null,null,this.div_work.form.tabHistory.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_tomToolUseHistory");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"118\"/><Column size=\"118\"/><Column size=\"194\"/><Column size=\"131\"/><Column size=\"100\"/><Column size=\"86\"/><Column size=\"124\"/><Column size=\"75\"/><Column size=\"75\"/><Column size=\"53\"/><Column size=\"55\"/><Column size=\"55\"/><Column size=\"55\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"작업시작\"/><Cell col=\"1\" text=\"작업완료\"/><Cell col=\"2\" text=\"Lot No.\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"작업장\"/><Cell col=\"5\" text=\"설비코드\"/><Cell col=\"6\" text=\"설비명\"/><Cell col=\"7\" text=\"작업자\"/><Cell col=\"8\" displaytype=\"normal\" textAlign=\"center\" text=\"타수\"/><Cell col=\"9\" text=\"PNL타수\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"10\" text=\"합수\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"11\" text=\"PCS\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"12\" text=\"PNL\" displaytype=\"normal\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell text=\"bind:TRACKINTIME\"/><Cell col=\"1\" text=\"bind:TRACKOUTTIME\"/><Cell col=\"2\" text=\"bind:LOTID\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"4\" text=\"bind:AREANAME\"/><Cell col=\"5\" text=\"bind:EQUIPMENTID\"/><Cell col=\"6\" text=\"bind:EQUIPMENTNAME\"/><Cell col=\"7\" text=\"bind:TXNUSERNAME\"/><Cell col=\"8\" text=\"bind:TOOLHITCOUNT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:HITCOUNT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:SUMMARY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:TOOLPCS\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:TOOLPNL\" displaytype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.form.tabHistory.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_tomToolUseHistory","8","-3",null,"34","871",null,null,null,null,null,this.div_work.form.tabHistory.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.form.tabHistory.Tabpage2.addChild(obj.name, obj);

            obj = new Static("title0","1","0","83","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("치공구 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_tomDurableLot","title0:10","-1",null,"34","784",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_tomDurableLot",null,"6","29","24","7",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","11",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","100","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_text("치공구 현황 조회");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_TOOLSTATUSLIST");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:10","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,780,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TOM01100M.xfdl","lib::lib_tom.xjs");
        this.registerScript("TOM01100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 치공구 현황 조회
         * 파일명 		: TOM01100M.xfdl
         * 작성자 		: 박현우
         * 작성일 		: 2021.02.01
         *
         * 설  명		: 치공구 현황 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.10	박현우   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.Tabpage1.form;
        this.detailDiv = this.div_work.form;

        var gTrStatusListStr="";

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_initCombo();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_tomDurableLot.clearData();
        	this.ds_tomToolHistory.clearData();
        	this.ds_tomToolUseHistory.clearData();

        	this.ds_search.clearData();

        	//작업장명이 공백이면 작업장Id 공백 처리
        	if(this.searchDiv.edt_area.value=='') {
        		this.searchDiv.edt_areaId.value = ''; //히든공백처리
        	}

        	//품목코드명이 공백이면 품목코드Id 공백 처리
        	if(this.searchDiv.edt_product.value=='') {
        		this.searchDiv.edt_productId.value = ''; //히든공백처리
        	}

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "P_PLANTID", this.searchDiv.cbo_site.value); //Site코드
        	this.ds_search.setColumn(0, "AREAID", this.searchDiv.edt_areaId.value); //작업장코드
        	this.ds_search.setColumn(0, "DURABLESTATE", this.searchDiv.cbo_state.value); //상태코드
        	this.ds_search.setColumn(0, "ISHOLD", this.searchDiv.cbo_holdYn.value); //보류여부
        	this.ds_search.setColumn(0, "P_TOOLNO", this.searchDiv.edt_toolNo.value); //Tool코드
        	this.ds_search.setColumn(0, "PRODUCTDEFID", this.searchDiv.edt_productId.value); //품목 코드
        	this.ds_search.setColumn(0, "CURRENTLOGINID", this.gf_getUserAcnt()); //세션사용자로그인ID
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", "selectTomToolStatusListForReportByEap");

        	var sSvcID 			= "selectTomToolStatusListForReportByEap";
        	var sController 	= "/tom01100/selectTomToolStatusListForReportByEap.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_tomDurableLot=output";
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
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        };

        /*
         * 기능 : 복사
         */
        this.fn_copy = function(obj,e)
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
        	case "selectTomPlantList":	//[조회조건] Site Callback
        		this.searchDiv.cbo_site.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        		this.fn_initStateCombo();
        		//HIDDEN Init
        		this.searchDiv.edt_areaId.value = '';
        		this.searchDiv.edt_productId.value = '';
        		break;
        	case "selectTomToolStatusListForReportByEap":	//치공구현황 조회 callback (조회조건->상단Grid callback에서 위치 보정)
        		if (this.ds_tomDurableLot.getRowCount() == 0)
        	    {
        			this.gfn_Message("NoSelectData", null, "error", "ok");
        		} else {
        			this.ToolHistoryListForReportByEap();
        			this.ToolUseStatusListForReportByEap();
        		}
        		break;
        	case "selectTomToolHistoryListForReportByEqp":	//이력 조회 callback
        	    if (this.ds_tomToolHistory.getRowCount() == 0)
        		{
        		} else {
        		}
        		break;
        	case "selectToolUseStatusListForReportByEqp":	//사용내역 조회 callback
        		if (this.ds_tomToolUseHistory.getRowCount() == 0)
        		{
        		} else {
        		}
        		break;
        	case "transactionStatusCodes":	//Transaction Status List 조회 callback
        		if (this.ds_tomTransactionStatusCodes.getRowCount() == 0)
        		{
        			this.gfn_Message("NoSelectData", null, "error", "ok");
        		} else {
        			//초기 init 작업시에 저장해 놓고, 상세 내역 그리드 클릭시 전송 한다.
        			this.gTrStatusListStr = this.gfn_datasetColumnToCommaStrings(this.ds_tomTransactionStatusCodes);
        		}
        		break;
        	default:
        	}
        };

        this.fn_setPositionStable = function (pRow)
        {
        	this.ds_tomDurableLot.set_rowposition(pRow);
        }
        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        /*
         * 기능(공통팝업) : '작업장' Text 조회
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
        	oArg.arg_searchStr = "";

        	if(popId=="P00063"){ //작업장조회 조회
        		oArg.arg_searchStr = "AREANAME="+this.searchDiv.edt_area.value;
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        	} else if (popId=="P00083"){	//품목 조회
        		oArg.arg_searchStr = "PRODUCTDEFNAME="+this.searchDiv.edt_product.value;
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME|PRODUCTDEFTYPE";
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_AREA")
        	{
        		this.searchDiv.edt_area.set_value(rtn[1]);
        		this.searchDiv.edt_areaId.set_value(rtn[0]); //HIDDEN 필드
        	}else if(sPopupId == "SCH_PRODUCT")
        	{
        		this.searchDiv.edt_product.set_value(rtn[2]);
        		this.searchDiv.edt_productId.set_value(rtn[0]); //HIDDEN 필드
        	}
        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        	this.fn_transactionStatusCodes(); //트랜젝션 상태 리스트
        	this.fn_initSiteCombo();
        }

        /*
         * 기능 : Transaction Status Codes (초기에 트랜젝션 코드 리스트 구해 놓고, 검색시에 전송 한다.)
         */
        this.fn_transactionStatusCodes = function()
        {
        	this.ds_search.clearData(); //Search Condition Dataset clear

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "CODECLASSID", "ToolTransactionStatus"); //값 고정
        	this.ds_search.setColumn(0, "SQL_ID", "selectTomLookupCodeList");

        	var sSvcID = "transactionStatusCodes";
        	var sController = "/tomCommon/selectTomLookupCodeList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_tomTransactionStatusCodes=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /*
         * 기능 : 'Site' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());

        	this.tomfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cbo_site // Object
        								, "selectTomPlantList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack"); //콜백함수 지정
        }



        /*
         * 기능 : '상태' 콤보 조회
         */
        this.fn_initStateCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("STATEMODELID", "DurableState");
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.tomfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cbo_state // Object
        								, "selectTomStateListByTool,ALL,Y,A" // OPTION
        								, sArgs);	  // 추가 파라미터
        }

        /*
         * 기능 : 이력 조회 (치공구현황조회 리스트에서 클릭 이벤트 실행시 호출 됨)
         */
        this.ToolHistoryListForReportByEap = function()
        {
        	this.ds_tomToolHistory.clearData(); //Target Dataset clear
        	this.ds_search.clearData(); //Search Condition Dataset clear

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "TRANSACTIONSTATUSCODES", this.gTrStatusListStr);
            this.ds_search.setColumn(0, "DURABLELOTID", this.ds_tomDurableLot.getColumn(this.ds_tomDurableLot.rowposition,"TOOLNO"));
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", "selectTomToolHistoryListForReportByEqp");

        	var sSvcID = "selectTomToolHistoryListForReportByEqp";
        	var sController = "/tom01100/selectTomToolHistoryListForReportByEqp.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_tomToolHistory=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /*
         * 기능 : 내역 조회 (치공구현황조회 리스트에서 클릭 이벤트 실행시 호출 됨)
         */
        this.ToolUseStatusListForReportByEap = function()
        {
        	this.ds_tomToolUseHistory.clearData(); //Target Dataset clear
        	this.ds_search.clearData(); //Search Condition Dataset clear

        	this.ds_search.addRow();
            this.ds_search.setColumn(0, "DURABLELOTID", this.ds_tomDurableLot.getColumn(this.ds_tomDurableLot.rowposition,"TOOLNO"));
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", "selectTomToolUseStatusListForReportByEqp");

        	var sSvcID = "selectTomToolUseStatusListForReportByEqp";
        	var sController = "/tom01100/selectTomToolUseStatusListForReportByEqp.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_tomToolUseHistory=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_Tabpage1_cbo_site_onitemchanged = function(obj,e)
        {
        	this.fn_initStateCombo();
        };

        /*
         * 이벤트 : 조회조건에서 '작업장' 버튼 클릭 시
         */
        this.tab_search_Tabpage1_btnArea_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_site.value);
        	sArgs += this.gfn_setParam("CURRENTLOGINID", this.gf_getUserAcnt()); //로그인 ID
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	this.fn_openPop("SCH_AREA","P00063", sArgs); //작업장 조회
        };

        /*
         * 이벤트 : 조회조건에서 '품목' 버튼 클릭 시
         */
        this.tab_search_Tabpage1_btnProduct_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_site.value);
        	sArgs += this.gfn_setParam("PRODUCTDEFTYPE", "Product"); //Product 고정
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	this.fn_openPop("SCH_PRODUCT","P00083", sArgs); //품목 조회
        };

        /*
         * 이벤트 : 그리드에서 클릭 이벤트
         */
        this.div_work_grd_tomDurableLot_oncellclick = function(obj,e)
        {
        	this.ToolHistoryListForReportByEap(this.ds_tomDurableLot.rowposition);
        	this.ToolUseStatusListForReportByEap(this.ds_tomDurableLot.rowposition);
        };

        this.fn_searchClear = function(obj,e)
        {
        	this.searchDiv.cbo_site.set_value(this.gf_getSiteType());

        	this.searchDiv.edt_areaId.value = '';
        	this.searchDiv.edt_productId.value = '';
        };

        this.tab_search_Tabpage1_edt_area_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btnArea_onclick();
        	}
        };

        this.tab_search_Tabpage1_edt_product_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btnProduct_onclick();
        	}
        };

        this.div_header_btn_reset2_onclick = function(obj,e)
        {
        	this.ds_tomDurableLot.clearData();
        	this.ds_tomToolHistory.clearData();
        	this.ds_tomToolUseHistory.clearData();
        	var strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.detailDiv.sta_cnt_ds_tomDurableLot.set_text(strCnt);
        	strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.detailDiv.tabHistory.Tabpage1.form.sta_cnt_ds_tomToolHistory.set_text(strCnt);
        	strCnt = 'Count : <fc v="#f31d24">0</fc><fc v="#999999"></fc>';
        	this.detailDiv.tabHistory.Tabpage2.form.sta_cnt_ds_tomToolUseHistory.set_text(strCnt);
        };

        this.btnControlPrepare = function(pRow)
        {
        	this.ds_tomDurableLot.set_rowposition(pRow);
        }

        this.div_work_grd_tomDurableLot_onkeyup = function(obj,e)
        {
        	this.btnControlPrepare(e.row);

        	this.ToolHistoryListForReportByEap();
        	this.ToolUseStatusListForReportByEap();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.cbo_site.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cboSite_onitemchanged,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.tab_search_Tabpage1_btn_search_onclick,this);
            this.tab_search.Tabpage1.form.edt_product.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_product_onkeydown,this);
            this.tab_search.Tabpage1.form.btnProduct.addEventHandler("onclick",this.tab_search_Tabpage1_btnProduct_onclick,this);
            this.tab_search.Tabpage1.form.edt_area.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_area_onkeydown,this);
            this.tab_search.Tabpage1.form.btnArea.addEventHandler("onclick",this.tab_search_Tabpage1_btnArea_onclick,this);
            this.div_work.form.grd_tomDurableLot.addEventHandler("oncellclick",this.div_work_grd_tomDurableLot_oncellclick,this);
            this.div_work.form.grd_tomDurableLot.addEventHandler("onkeyup",this.div_work_grd_tomDurableLot_onkeyup,this);
            this.div_work.form.tabHistory.addEventHandler("onchanged",this.tab_onchanged,this);
            this.div_work.form.tabHistory.Tabpage1.form.grd_tomToolHistory.addEventHandler("onexpanddown",this.div_work_tab_Tabpage1_grdResource_onexpanddown,this);
            this.div_work.form.tabHistory.Tabpage2.form.grd_tomToolUseStatus.addEventHandler("onexpanddown",this.div_work_tab_Tabpage2_grdDurable_onexpanddown,this);
            this.div_header.form.Static01.addEventHandler("onclick",this.div_header_Static01_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("TOM01100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
