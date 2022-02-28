(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM08800M");
            this.set_titletext("물류창고 출고전표 조회 발행");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,890);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_issueOutboundWarehouse", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ARRAYQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"OSPMM\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKUSER\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SENDUSER\" type=\"STRING\" size=\"256\"/><Column id=\"OSPPRTSENDUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRINTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRINTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"PRINTCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PRINTUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCESTART\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCEEND\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PRINTCNT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_RECEIPTDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_RECEIPTDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_SENDDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_SENDDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"P_SENDUSER\" type=\"STRING\" size=\"256\"/><Column id=\"P_RECEIPTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"P_ETCLOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_print", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRINTNO\" type=\"STRING\" size=\"256\"/><Column id=\"SENDUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"RELEASEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME_01\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME_02\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME_03\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME_04\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME_05\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME_01\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME_02\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME_03\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME_04\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME_05\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME_06\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME_07\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME_08\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME_09\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMEDQTY_01\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMEDQTY_02\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMEDQTY_03\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMEDQTY_04\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMEDQTY_05\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMEDQTY_06\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMEDQTY_07\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMEDQTY_08\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMEDQTY_09\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_paramList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_uuid", this);
            obj._setContents("<ColumnInfo><Column id=\"UUID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCESTART\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCEEND\" type=\"STRING\" size=\"256\"/><Column id=\"SKIPNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"18",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STOPSITE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_siteId","110","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","172","300","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","16","300","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"280","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","290","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","162","305","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_area","0","210","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREANAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_lotProductType","0","235","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("STATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_lotProductType","110","235","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_lotNo","0","260","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISHOLD");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_product",null,"185","22","20","14",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_area","110","210",null,"20","35",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchPeriod","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("입고기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_inStartDt","110","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_inEndDt","110","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType","16","60","88","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_receiptUser","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("입고자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREANAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_receiptUser",null,"85","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_receiptUser","110","85",null,"20","35",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_productId","0","185","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_ospSendUser",null,"160","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_product","110","185",null,"20","35",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_lotNo","110","260",null,"20","13",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00_01",null,"280","45","20","89",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_ospSendDate","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("26");
            obj.set_text("출고기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_outStartDt","110","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("27");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_periodType2","16","135","88","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("28");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Calendar("cal_outEndDt","110","135","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("29");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_ospSendUser","110","160",null,"20","35",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("30");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_ospSendUser","0","160","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("31");
            obj.set_text("출고자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREANAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_area",null,"210","22","20","14",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","281","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"1","20",null,null,null,null,this);
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

            obj = new Grid("grd_issueOutboundWarehouse","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_issueOutboundWarehouse");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"34\"/><Column size=\"189\"/><Column size=\"118\"/><Column size=\"75\"/><Column size=\"55\"/><Column size=\"118\"/><Column size=\"75\"/><Column size=\"66\"/><Column size=\"100\"/><Column size=\"33\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"49\"/><Column size=\"150\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"115\"/><Column size=\"115\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회사ID---HIDDEN\"/><Cell col=\"1\" text=\"공장ID---HIDDEN\"/><Cell col=\"2\" text=\"RECEIPTUSER---HIDDEN\"/><Cell col=\"3\" text=\"OSPSENDUSER---HIDDEN\"/><Cell col=\"4\" text=\"PRINTUSER---HIDDEN\"/><Cell col=\"5\" text=\"LOTHISTKEY---HIDDEN\"/><Cell col=\"6\" text=\"RECEIPTSEQUENCE---HIDDEN\"/><Cell col=\"7\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"8\" text=\"Lot No.\"/><Cell col=\"9\" text=\"출고일\"/><Cell col=\"10\" text=\"출고자\"/><Cell col=\"11\" text=\"인쇄횟수\"/><Cell col=\"12\" text=\"입고일\"/><Cell col=\"13\" text=\"입고자명\"/><Cell col=\"14\" text=\"양산구분\"/><Cell col=\"15\" text=\"품목코드\"/><Cell col=\"16\" text=\"Rev\"/><Cell col=\"17\" text=\"품목명\"/><Cell col=\"18\" text=\"공정ID---HIDDEN\"/><Cell col=\"19\" text=\"공정수순\"/><Cell col=\"20\" text=\"공정명\"/><Cell col=\"21\" text=\"작업장AREAID---HIDDEN\"/><Cell col=\"22\" text=\"작업장\"/><Cell col=\"23\" text=\"이전공정ID---HIDDEN\"/><Cell col=\"24\" text=\"이전공정명\"/><Cell col=\"25\" text=\"이전작업장PREVAREAID---HIDDEN\"/><Cell col=\"26\" text=\"이전작업장\"/><Cell col=\"27\" text=\"수량 (PCS)\"/><Cell col=\"28\" text=\"수량 (PNL)\"/><Cell col=\"29\" text=\"Lot 상태\"/><Cell col=\"30\" text=\"재공상태\"/><Cell col=\"31\" text=\"panelqty---HIDDEN\"/><Cell col=\"32\" text=\"이전공정ID---HIDDEN\"/><Cell col=\"33\" text=\"이전공정ID---HIDDEN\"/></Band><Band id=\"body\"><Cell text=\"bind:ENTERPRISEID\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:PLANTID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:RECEIPTUSER\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:OSPSENDUSER\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRINTUSER\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:LOTHISTKEY\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:RECEIPTSEQUENCE\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:CHK\" textAlign=\"right\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"8\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:SENDDATE\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:OSPPRTSENDUSERNAME\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:PRINTCOUNT\" textAlign=\"center\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:RECEIPTDATE\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:RECEIPTUSERNAME\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:LOTTYPE\" textAlign=\"left\" displaytype=\"combotext\" combocodecol=\"C,YieldProdType,,Y,\"/><Cell col=\"15\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:USERSEQUENCE\" textAlign=\"center\"/><Cell col=\"20\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:AREAID\" textAlign=\"left\"/><Cell col=\"22\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"23\" text=\"bind:PREVPROCESSSEGMENTID\" textAlign=\"left\"/><Cell col=\"24\" text=\"bind:PREVPROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"25\" text=\"bind:PREVAREAID\" textAlign=\"left\"/><Cell col=\"26\" text=\"bind:PREVAREANAME\" textAlign=\"left\"/><Cell col=\"27\" text=\"bind:PCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"28\" text=\"bind:PANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"29\" text=\"bind:LOTSTATE\" textAlign=\"left\" displaytype=\"combotext\" combocodecol=\"C,LotState,,Y,\"/><Cell col=\"30\" text=\"bind:PROCESSSTATE\" textAlign=\"left\" displaytype=\"combotext\" combocodecol=\"C,LotProcessState,,Y,\"/><Cell col=\"31\" text=\"bind:OSPMM\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"32\" text=\"bind:PATHSEQUENCESTART\" textAlign=\"left\"/><Cell col=\"33\" text=\"bind:PATHSEQUENCEEND\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_issueOutboundWarehouse","6","-1",null,"34","875",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_outsourcedDistribution",null,"6","29","24","3",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_issueOutboundWarehouse",null,"6","29","24","38",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_visible("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","3",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","29",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","55",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","100","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("물류창고 출고전표 조회 발행");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_ISSUEOUTBOUNDWAREHOUSEINQUIRY2");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:10","16","24","24",null,null,null,null,null,null,this.div_header.form);
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

            obj = new Button("btn_slipOutput",null,"16","70","24","btn_help:10",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_black");
            obj.set_text("출고전표");
            obj.set_tooltiptext("OUTPUTSLIP");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,890,this,function(p){});
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
        this.addIncludeScript("PCM08800M.xfdl","lib::lib_tom.xjs");
        this.registerScript("PCM08800M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 공정관리-물류창고외주처배분
         * 파일명 		: PCM08700M.xfdl
         * 작성자 		: 박현우
         * 작성일 		: 2021.03.03
         *
         * 설  명		: 공정관리-물류창고외주처배분
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.03	박현우   	최초작성
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

        this.receiptUserId = '';
        this.ospSendUserId = '';
        this.productId = '';
        this.productVer = '';
        this.areaId = '';

        this.printCount = 1;
        this.oldLotNo = '';

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
        	//입고자명이 공백이면 코드 공백 처리
        	if(this.searchDiv.edt_receiptUser.value=='') {
        		this.receiptUserId = '';
        	}

        	//출고자명이 공백이면 코드 공백 처리
        	if(this.searchDiv.edt_ospSendUser.value=='') {
        		this.ospSendUserId = '';
        	}

        	//품목코드이 공백이면 품목Id 공백 처리
        	if(this.searchDiv.edt_product.value=='') {
        		this.productId = '';
        		this.productVer = '';
        	}

        	//작업장명이 공백이면 작업자Id 공백 처리
        	if(this.searchDiv.edt_area.value=='') {
        		this.areaId = '';
        	}

        	this.ds_issueOutboundWarehouse.clearData();
        	this.ds_search.clearData();

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_PLANTID", 				this.nfn_nvl(this.searchDiv.cbo_siteId.value, "")); //Site코드
        	this.ds_search.setColumn(0, "P_ETCLOTID", 				this.nfn_nvl(this.searchDiv.edt_lotNo.value, ""));	//Lot No
        	this.ds_search.setColumn(0, "P_LOTTYPE", 				this.nfn_nvl(this.searchDiv.cbo_lotProductType.value, ""));	//양산구분
        	this.ds_search.setColumn(0, "P_AREAID", 				this.nfn_nvl(this.areaId, ""));	//작업장
        	this.ds_search.setColumn(0, "P_RECEIPTUSER", 			this.nfn_nvl(this.receiptUserId, "")); //입고자
        	this.ds_search.setColumn(0, "P_PRODUCTDEFID", 			this.nfn_nvl(this.productId, "")); //품목ID
        	this.ds_search.setColumn(0, "P_PRODUCTDEFVERSION", 		this.nfn_nvl(this.productVer, "")); //품목Ver
        	this.ds_search.setColumn(0, "P_RECEIPTDATE_PERIODFR", 	this.nfn_nvl(this.searchDiv.cal_inStartDt.value, "")); //[입고] 시작일자
        	this.ds_search.setColumn(0, "P_RECEIPTDATE_PERIODTO", 	this.nfn_nvl(this.searchDiv.cal_inEndDt.value, "")); //[입고] 종료일자
        	this.ds_search.setColumn(0, "P_SENDDATE_PERIODFR", 		this.nfn_nvl(this.searchDiv.cal_outStartDt.value, "")); //[출고] 시작일자
        	this.ds_search.setColumn(0, "P_SENDDATE_PERIODTO", 		this.nfn_nvl(this.searchDiv.cal_outEndDt.value, "")); //[출고] 종료일자
        	this.ds_search.setColumn(0, "USERID", 					this.nfn_nvl(this.tomfn_getUserId(), ""));	//로그인사용자
        	this.ds_search.setColumn(0, "P_SENDUSER", 				this.nfn_nvl(this.ospSendUserId, ""));	//출고자
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 			this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", 					"selectIssueOutboundWarehouseList");

        	var sSvcID 			= "selectIssueOutboundWarehouseList";
        	var sController 	= "/pcm08800/selectIssueOutboundWarehouseList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_issueOutboundWarehouse=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장 && 출고 전표 발행
         */
        this.fn_save = function (obj, e)
        {
        	/*
        	if (this.ds_issueOutboundWarehouse.rowcount < 1)
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}
        	*/

        	if (this.ds_issueOutboundWarehouse.getCaseCount("CHK=='1'")==0)
            {
            	this.gfn_Message("NoSelections", "", "warning", "ok");
            	return;
            }

        	//당당자 Assign (선택된 row 처리)
        	for(var row = 0; row < this.ds_issueOutboundWarehouse.getRowCount(); row++)
        	{
        		if(this.ds_issueOutboundWarehouse.getColumn(row, "CHK")=='1'){ //체크된건을
        			this.ds_issueOutboundWarehouse.setColumn(row, "PRINTUSER", this.tomfn_getUserId() );
        			this.ds_issueOutboundWarehouse.setColumn(row, "PRINTCNT", this.printCount );
        		}
        		this.printCount = this.printCount + 1;
        	}

        	//출력용 UUID 리스트 초기화
        	this.ds_uuid.clearData();

        	//현재 선택된row 저장
        	this.oldLotNo = this.nfn_nvl(this.ds_issueOutboundWarehouse.getColumn(this.ds_issueOutboundWarehouse.rowposition, "LOTID"),"");

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveIssueOutboundWarehouse";
        	var sController 	= "/pcm08800/saveIssueOutboundWarehouse.do";
        	var sInDatasets 	= "INPUT=ds_issueOutboundWarehouse:U"; //체크 건만 보낸다.
        	var sOutDatasets 	= "ds_print=output ds_uuid=output2";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 추가
         */
        this.fn_add = function(obj,e)
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
        			this.searchDiv.cbo_siteId.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        			break;
        		case "selectPeriodQueryCmb": //[조회조건] Period dataset Callback
        			this.fn_setDate("THISMONTH");
        			this.fn_setDate2("THISMONTH");
        			break;
        		case "selectIssueOutboundWarehouseList": //검색결과
        			if(this.oldLotNo==''){
        			}else{
        				var restorePos = this.ds_issueOutboundWarehouse.findRowExpr("LOTID=='" + this.oldLotNo + "'");
        				this.ds_issueOutboundWarehouse.set_rowposition(restorePos);
        				this.oldLotNo='';
        			}
        			break;
        		case "saveIssueOutboundWarehouse": //출고 전표 발행 버튼 클릭 callback
        			this.fn_print();
        			this.fn_search();
        			break;
        		default:
        	}
        };

        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "reportViewer")	//리포트 창이 닫히면 실행되는 이벤트
        	{
        		this.fn_search();
        	}
        }

        //단건 (현재 선택된 ROW) 전표 발행 시 -----> 사용 안함.
        /*
        this.fn_print2 = function ()
        {
        	var nRow = 0;
        	this.ds_paramList.clearData();
        	for(var i=0; i<6; i++) //5개 파라메터
        	{
        		if(i==0){
        			nRow = this.ds_paramList.addRow();
        			this.ds_paramList.setColumn(nRow,"code","P01_LOTHISTKEY");
        			this.ds_paramList.setColumn(nRow,"value", this.nfn_nvl(this.ds_issueOutboundWarehouse.getColumn(this.ds_issueOutboundWarehouse.rowposition, "LOTHISTKEY"), "LOTHISTKEY"));
        		} if(i==1){
        			nRow = this.ds_paramList.addRow();
        			this.ds_paramList.setColumn(nRow,"code","P02_LOTID");
        			this.ds_paramList.setColumn(nRow,"value", this.nfn_nvl(this.ds_issueOutboundWarehouse.getColumn(this.ds_issueOutboundWarehouse.rowposition, "LOTID"), "LOTID"));
        		} if(i==2){
        			nRow = this.ds_paramList.addRow();
        			this.ds_paramList.setColumn(nRow,"code","P03_RECEIPTSEQUENCE");
        			this.ds_paramList.setColumn(nRow,"value", this.nfn_nvl(this.ds_issueOutboundWarehouse.getColumn(this.ds_issueOutboundWarehouse.rowposition, "RECEIPTSEQUENCE"), "RECEIPTSEQUENCE"));
        		} if(i==3){
        			nRow = this.ds_paramList.addRow();
        			this.ds_paramList.setColumn(nRow,"code","P04_PATHSEQUENCESTART");
        			this.ds_paramList.setColumn(nRow,"value", this.nfn_nvl(this.ds_issueOutboundWarehouse.getColumn(this.ds_issueOutboundWarehouse.rowposition, "PATHSEQUENCESTART"), "PATHSEQUENCESTART"));
        		} if(i==4){
        			nRow = this.ds_paramList.addRow();
        			this.ds_paramList.setColumn(nRow,"code","P05_PATHSEQUENCEEND");
        			this.ds_paramList.setColumn(nRow,"value", this.nfn_nvl(this.ds_issueOutboundWarehouse.getColumn(this.ds_issueOutboundWarehouse.rowposition, "PATHSEQUENCEEND"), "PATHSEQUENCEEND"));
        		} if(i==5){
        			nRow = this.ds_paramList.addRow();
        			this.ds_paramList.setColumn(nRow,"code","P06_LANGUAGETYPE");
        			this.ds_paramList.setColumn(nRow,"value", this.gf_getLanguageType());
        		}
        	}

        	///rp [20210524142147521-73] [S210520F001-1-FG-001-001] [1] [0] [999] [ko-KR]

        	var strField = this.gfn_strParameterData(this.ds_paramList, "code", "value");  //code : parameter 순서 : 1,2....
        	var nSrc = "PCM08800R.mrd";

        	trace(" ## [rd 호출전 테스트] ## : "+this.ds_paramList.saveXML());
        	//trace(" ## [rd 소스명] ## : "+nSrcNm+".mrd");
        	trace(" ## [rd 조회 파라미터] ## : "+strField);

        	//또는 strField = [$1값][$2값]....[$n값];
        	var oArg = {
        		sRptPath : "/pcm/",
        		sRptName : nSrc,
        		strField : strField,
        		bModalless : false
        	};

        	//var sOption = ""; //"autosize=false,width=1200,height=900,titletext=외주출고전표,modeless=true";
        	var sOption = "titletext=Report pack Label (PCM),modeless=false";

        	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        }
        */

        //멀티건 처리 (현재 선택된 ROW) 전표 발행 시
        this.fn_print = function ()
        {
        	var nRow = 0;
        	this.ds_paramList.clearData();

        	nRow = this.ds_paramList.addRow();
        	this.ds_paramList.setColumn(nRow,"code", "UUID");
        	this.ds_paramList.setColumn(nRow,"value", this.nfn_nvl(this.ds_uuid.getColumn(0, "UUID"), ""));

        	/*
        	nRow = this.ds_paramList.addRow();
        	this.ds_paramList.setColumn(nRow,"code", "LANGUAGETYPE");
        	this.ds_paramList.setColumn(nRow,"value", this.gf_getLanguageType());
        	*/

        	///rp [f41ff2d2-aa6e-45c0-a96f-fcfc1f42e3d2] [ko-KR]

        	var strField = this.gfn_strParameterData(this.ds_paramList, "code", "value");  //code : parameter 순서 : 1,2....
        	var nSrc = "PCM08801R.mrd";

        	trace(" ## [rd 호출전 테스트] ## : "+this.ds_paramList.saveXML());
        	//trace(" ## [rd 소스명] ## : "+nSrcNm+".mrd");
        	trace(" ## [rd 조회 파라미터] ## : "+strField);

        	//또는 strField = [$1값][$2값]....[$n값];
        	var oArg = {
        		sRptPath : "/pcm/",
        		sRptName : nSrc,
        		strField : strField,
        		bModalless : true
        	};

        	//var sOption = ""; //"autosize=false,width=1200,height=900,titletext=외주출고전표,modeless=true";
        	var sOption = "titletext=Report pack Label (PCM),modeless=false";

        	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
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

        	if(popId=="P00125"){ //입고자 조회
        		oArg.arg_searchStr = "REQUESTUSERNAME="+this.nfn_nvl(this.searchDiv.edt_receiptUser.value,'');
        		oArg.arg_rtnCols = "REQUESTUSER|REQUESTUSERNAME";
        	}else if(popId=="P00134"){ //출고자 조회
        		oArg.arg_searchStr = "REQUESTUSERNAME="+this.nfn_nvl(this.searchDiv.edt_ospSendUser.value,'');
        		oArg.arg_rtnCols = "REQUESTUSER|REQUESTUSERNAME";
        	}else if(popId=="P00126"){ //품목코드 조회
        		oArg.arg_searchStr = "PRODUCTDEFID="+this.nfn_nvl(this.searchDiv.edt_product.value,'');
        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        	}else if(popId=="P00115"){ //외주작업장 조회
        		oArg.arg_searchStr = "P_AREANAME="+this.nfn_nvl(this.searchDiv.edt_area.value,'');
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_RECEIPTUSER")
        	{
        		this.searchDiv.edt_receiptUser.set_value(rtn[1]);
        		this.receiptUserId = rtn[0]; //HIDDEN 필드
        	}else if(sPopupId == "SCH_SENDUSER")
        	{
        		this.searchDiv.edt_ospSendUser.set_value(rtn[1]);
        		this.ospSendUserId = rtn[0]; //HIDDEN 필드
        	}else if(sPopupId == "SCH_PRODUCT")
        	{
        		this.searchDiv.edt_product.set_value(rtn[1]);
        		this.productId = rtn[0]; //HIDDEN 필드
        		this.productVer = rtn[2]; //HIDDEN 필드
        	}else if(sPopupId == "SCH_AREA")
        	{
        		this.searchDiv.edt_area.set_value(rtn[1]);
        		this.areaId = rtn[0]; //HIDDEN 필드
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
        	this.tomfn_getPeriodData("ds_periodType","","fn_callBack");
        	this.searchDiv.cbo_periodType.set_value("THISMONTH"); // 금월
        	this.searchDiv.cbo_periodType2.set_value("THISMONTH"); // 금월

        	this.fn_initSiteCombo();
        }

        /*
         * 기능 : 'Site' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());

        	this.tomfn_setCustomQueryCmb(this.searchDiv.cbo_siteId // Object
        								, "selectTomPlantList,ALL,Y,A" // OPTION
        								, sArgs	// 추가 파라미터
        								, "fn_callBack"); //콜백함수 지정
        }

        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function ()
        {
        	this.searchDiv.cbo_periodType.set_value("CUSTOM");
        }

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.searchDiv.cal_inStartDt.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.searchDiv.cal_inEndDt.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        }

        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom2 = function ()
        {
        	this.searchDiv.cbo_periodType2.set_value("CUSTOM");
        }

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate2 = function (periodType)
        {
        	this.searchDiv.cal_outStartDt.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.searchDiv.cal_outEndDt.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        }

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_RD_Rpt = function ()
        {
        	//alert('RD Print...');
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        //출고기간 구분 :: 이벤트
        this.tab_search_Tabpage1_cbo_periodType_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate(e.postvalue);
        	}
        };

        //입고기간 구분 :: 이벤트
        this.tab_search_Tabpage1_cbo_periodType2_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM"){
        		this.fn_setDate2(e.postvalue);
        	}
        };

        //입고자 버튼 클릭 :: 공통 팝업
        this.tab_search_Tabpage1_btn_receiptUser_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("P_PLANTID", this.searchDiv.cbo_siteId.value);

        	this.fn_openPop("SCH_RECEIPTUSER","P00125", sArgs); //입고자 조회
        };

        //출고자 버튼 클릭 :: 공통팝업
        this.tab_search_Tabpage1_btn_ospSendUser_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("P_PLANTID", this.searchDiv.cbo_siteId.value);

        	this.fn_openPop("SCH_SENDUSER","P00134", sArgs); //출고자 조회
        };

        //품목코드 버튼 클릭 :: 공통팝업
        this.tab_search_Tabpage1_btn_product_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("PLANTID", this.searchDiv.cbo_siteId.value);

        	this.fn_openPop("SCH_PRODUCT","P00126", sArgs); //품목코드 조회
        };

        //작업장 버튼 클릭 :: 공통팝업
        this.tab_search_Tabpage1_btn_area_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("P_OWNTYPE", "Y");
        	sArgs += this.gfn_setParam("P_PLANTID", this.searchDiv.cbo_siteId.value);
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.fn_openPop("SCH_AREA","P00115", sArgs); //작업장 조회
        };


        this.fn_searchClear = function(obj,e)
        {
        	this.searchDiv.cbo_siteId.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.

        	this.searchDiv.cbo_periodType.set_value("THISMONTH"); // 금월
        	this.searchDiv.cbo_periodType2.set_value("THISMONTH"); // 금월
        	this.fn_setDate("THISMONTH");
        	this.fn_setDate2("THISMONTH");
        };

        this.tab_search_Tabpage1_edt_receiptUser_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_receiptUser_onclick();
        	}
        };

        this.tab_search_Tabpage1_edt_ospSendUser_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_ospSendUser_onclick();
        	}
        };

        this.tab_search_Tabpage1_edt_product_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_product_onclick();
        	}
        };

        this.tab_search_Tabpage1_edt_area_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.tab_search_Tabpage1_btn_area_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.cbo_siteId.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cboSite_onitemchanged,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_product.addEventHandler("onclick",this.tab_search_Tabpage1_btn_product_onclick,this);
            this.tab_search.Tabpage1.form.edt_area.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_area_onkeydown,this);
            this.tab_search.Tabpage1.form.cal_inStartDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cal_inEndDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cbo_periodType.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_periodType_onitemchanged,this);
            this.tab_search.Tabpage1.form.btn_receiptUser.addEventHandler("onclick",this.tab_search_Tabpage1_btn_receiptUser_onclick,this);
            this.tab_search.Tabpage1.form.edt_receiptUser.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_receiptUser_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_ospSendUser.addEventHandler("onclick",this.tab_search_Tabpage1_btn_ospSendUser_onclick,this);
            this.tab_search.Tabpage1.form.edt_product.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_product_onkeydown,this);
            this.tab_search.Tabpage1.form.cal_outStartDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.cbo_periodType2.addEventHandler("onitemchanged",this.tab_search_Tabpage1_cbo_periodType2_onitemchanged,this);
            this.tab_search.Tabpage1.form.cal_outEndDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.Tabpage1.form.edt_ospSendUser.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_ospSendUser_onkeydown,this);
            this.tab_search.Tabpage1.form.btn_area.addEventHandler("onclick",this.tab_search_Tabpage1_btn_area_onclick,this);
            this.div_work.form.btn_delRow_ds_issueOutboundWarehouse.addEventHandler("onclick",this.fn_delete,this);
            this.div_header.form.Static01.addEventHandler("onclick",this.div_header_Static01_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_slipOutput.addEventHandler("onclick",this.fn_save,this);
        };
        this.loadIncludeScript("PCM08800M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
