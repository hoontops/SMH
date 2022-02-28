(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM02300M");
            this.set_titletext("ROLL LOT 투입 분할");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDATEFR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDATETO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_RollLotList", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SALESORDERID\" type=\"STRING\" size=\"256\"/><Column id=\"LINENO\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"EXTENT\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSMM\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Detail", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ISLOTCARDPRINT\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ConsumableList", this);
            obj._setContents("<ColumnInfo><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"USEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"USEPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"BOMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELPERQTY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CreateList", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CreateLotList", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"USEMETERQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_temp", this);
            obj._setContents("");
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

            obj = new Button("btn_save",null,"16","26","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","106","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("포장사양관리");
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

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("검색조건");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFID","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFVERSION","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFNAME","0","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"0","15","200","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","0","15","200",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"105","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","131","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","125","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","125","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_hotkey("F2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staAREAID","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("AREA");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID","108","10",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_AREAID",null,"10","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFVERSION","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_enable("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDNM","108","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_enable("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","206","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdRollLotList","0","34",null,"253","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_RollLotList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"작업장\"/><Cell col=\"1\" text=\"품목코드\"/><Cell col=\"2\" text=\"Rev.\"/><Cell col=\"3\" text=\"품목명\"/><Cell col=\"4\" text=\"Lot No.\"/><Cell col=\"5\" text=\"작업공정\"/><Cell col=\"6\" text=\"투입일자\"/><Cell col=\"7\" text=\"투입수량(PNL)\"/><Cell col=\"8\" text=\"PNL\" tooltiptext=\"PNL\"/><Cell col=\"9\" text=\"PCS\" tooltiptext=\"PCS\"/><Cell col=\"10\" text=\"MM\" tooltiptext=\"MM\"/><Cell col=\"11\" text=\"수주번호\"/><Cell col=\"12\" text=\"라인\"/></Band><Band id=\"body\"><Cell text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:LOTID\"/><Cell col=\"5\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:INPUTDATE\"/><Cell col=\"7\" textAlign=\"right\" text=\"bind:INPUTPNLQTY\"/><Cell col=\"8\" text=\"bind:PANELQTY\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:QTY\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:EXTENT\" textAlign=\"right\" maskeditformat=\"#,##0.##\"/><Cell col=\"11\" text=\"bind:SALESORDERID\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:LINENO\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("staRollLotList","0","0","89","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("ROLL LOT ");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_RollLotList","89","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"287","45","10","751",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_detail","0","297",null,"117","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFID","0","10","9.19%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("0");
            obj.set_text("품목 코드");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("ITEMCODE ");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("staCONSUMABLEDEFID","0","35","9.19%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("1");
            obj.set_text("자재 코드");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("MATERIALID ");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("staCONSUMABLEDEFVERSION","30.02%","35","9.00%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("2");
            obj.set_text("자재버전");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("CONSUMABLEDEFVERSION ");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("staCONSUMABLEDEFNAME","59.62%","35","9.00%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("3");
            obj.set_text("자재명");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("MATERIALNAME ");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFNAME","30.02%","10","9.00%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("4");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("ITEMNAME");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("guidetip00","30","0",null,"10","30",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("guidetip01","30","30",null,"5","30",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("6");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("guidetip04","30",null,null,"10","30","0",null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("7");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("guidetip02","30","55",null,"5","30",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("8");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("staCONSUMABLELOTID","0","60","9.00%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("9");
            obj.set_text("자재 LOT");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            obj.set_tooltiptext("MATERIALLOT ");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("staLOTID","30.02%","60","9.00%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("10");
            obj.set_text("LotNo.");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            obj.set_tooltiptext("LOTID ");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("guidetip03","30","80",null,"5","30",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("11");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("staCOMMENT","0","85","9.00%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("12");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("COMMENT ");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_COMMENT","staCOMMENT:10","85",null,"20","68",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("13");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","staPRODUCTDEFID:10","10",null,"20","staPRODUCTDEFNAME:0",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("14");
            obj.set_enable("false");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_CONSUMABLEDEFID","staCONSUMABLEDEFID:10","35",null,"20","staCONSUMABLEDEFVERSION:0",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_CONSUMABLEDEFVERSION","staCONSUMABLEDEFVERSION:10","35",null,"20","staCONSUMABLEDEFNAME:0",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("16");
            obj.set_enable("false");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_CONSUMABLEDEFNAME","staCONSUMABLEDEFNAME:10","35",null,"20","71",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("17");
            obj.set_enable("false");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("staPARENTLOTID","59.62%","10","9.00%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("18");
            obj.set_text("모 Lot");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext("PARENTLOT ");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","staPRODUCTDEFNAME:10","10",null,"20","staPARENTLOTID:0",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_PARENTLOTID","staPARENTLOTID:10","10",null,"20","71",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("20");
            obj.set_enable("false");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_CONSUMABLELOTID","staCONSUMABLELOTID:10","60",null,"20","staLOTID:0",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("21");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Static("staSpace","59.62%","60","1.05%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_tooltiptext(" ");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_LOTID","staLOTID:10","60",null,"20","staSpace:0",null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("23");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new CheckBox("chk_LOTCARDPRINT","staSpace:10","60","10.15%","20",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("24");
            obj.set_text("Lot Card 출력");
            obj.set_value("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("LOTCARDPRINT");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_CONSUMABLELOTID","chk_LOTCARDPRINT:10","60","127","21",null,null,null,null,null,null,this.div_work.form.div_detail.form);
            obj.set_taborder("25");
            obj.set_text("사용가능 Roll Lot");
            obj.set_font("bold 9pt \"Dotum\"");
            obj.set_tooltiptext("SELECTCONSUMABLELOT");
            this.div_work.form.div_detail.addChild(obj.name, obj);

            obj = new Grid("grdConsumableList","0","div_detail:10",null,"80","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_ConsumableList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자재 코드\"/><Cell col=\"1\" text=\"자재명\"/><Cell col=\"2\" text=\"자재 Lot No.\"/><Cell col=\"3\" text=\"수량(M)\" tooltiptext=\"METERQTY\"/><Cell col=\"4\" text=\"수량(PNL)\"/><Cell col=\"5\" text=\"사용수량(M)\" tooltiptext=\"USEMETERQTY\"/><Cell col=\"6\" text=\"사용수량(PNL)\" tooltiptext=\"USEPANELQTY\"/></Band><Band id=\"body\"><Cell text=\"bind:CONSUMABLEDEFID\"/><Cell col=\"1\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CONSUMABLELOTID\"/><Cell col=\"3\" text=\"bind:QTY\" textAlign=\"right\" maskeditformat=\"#,##0.##\" displaytype=\"mask\"/><Cell col=\"4\" textAlign=\"right\" text=\"bind:PNLQTY\" displaytype=\"mask\"/><Cell col=\"5\" text=\"bind:USEQTY\" textAlign=\"right\" edittype=\"mask\" maskeditformat=\"#,##0.#####\" displaytype=\"mask\" cssclass=\"cell_bg_yellow\" maskeditautoselect=\"true\"/><Cell col=\"6\" textAlign=\"right\" text=\"bind:USEPNLQTY\" edittype=\"mask\" maskeditformat=\"#,##0\" displaytype=\"mask\" cssclass=\"cell_bg_green\" maskeditautoselect=\"true\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_detailSearch","0","grdConsumableList:10",null,"42","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("staCREATEDATE","0","10","87","20",null,null,null,null,null,null,this.div_work.form.div_detailSearch.form);
            obj.set_taborder("0");
            obj.set_text("생성일");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_fittocontents("width");
            this.div_work.form.div_detailSearch.addChild(obj.name, obj);

            obj = new Calendar("cal_CREATEDATEFR","staCREATEDATE:10","10","100","20",null,null,null,null,null,null,this.div_work.form.div_detailSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("false");
            this.div_work.form.div_detailSearch.addChild(obj.name, obj);

            obj = new Static("staCREATEDATE2","cal_CREATEDATEFR:0","10","20","20",null,null,null,null,null,null,this.div_work.form.div_detailSearch.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_detailLabel2");
            obj.set_fittocontents("width");
            this.div_work.form.div_detailSearch.addChild(obj.name, obj);

            obj = new Calendar("cal_CREATEDATETO","staCREATEDATE2:10","10","100","20",null,null,null,null,null,null,this.div_work.form.div_detailSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.form.div_detailSearch.addChild(obj.name, obj);

            obj = new Button("btn_detailSearch","cal_CREATEDATETO:10","9","34","20",null,null,null,null,null,null,this.div_work.form.div_detailSearch.form);
            obj.set_taborder("4");
            obj.set_text("검색");
            obj.set_cssclass("btn_WF_black");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SEARCH");
            this.div_work.form.div_detailSearch.addChild(obj.name, obj);

            obj = new Grid("grdCreateLotList",null,"566","422",null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_CreateLotList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Lot No.\"/><Cell col=\"1\" text=\"투입수량(PNL)\"/><Cell col=\"2\" text=\"수량(PCS)\" tooltiptext=\"PCS\"/><Cell col=\"3\" text=\"사용수량(M)\" tooltiptext=\"PNL\"/></Band><Band id=\"body\"><Cell text=\"bind:LOTID\"/><Cell col=\"1\" textAlign=\"right\" text=\"bind:INPUTPNLQTY\"/><Cell col=\"2\" text=\"bind:PCSQTY\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:USEMETERQTY\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grdCreateList","0","div_detailSearch:10",null,null,"grdCreateLotList:10","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_CreateList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"작업장\"/><Cell col=\"1\" text=\"품목코드\"/><Cell col=\"2\" text=\"Rev.\"/><Cell col=\"3\" text=\"품목명\"/><Cell col=\"4\" text=\"생성일\"/><Cell col=\"5\" text=\"투입수량(PNL)\"/><Cell col=\"6\" text=\"수량(PCS)\" tooltiptext=\"PCS\"/><Cell col=\"7\" text=\"사용자재\" tooltiptext=\"USECONSUMABLEDEF\"/><Cell col=\"8\" text=\"사용수량(M)\"/><Cell col=\"9\" text=\"공정\"/></Band><Band id=\"body\"><Cell text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CREATEDTIME\"/><Cell col=\"5\" textAlign=\"right\" text=\"bind:INPUTPNLQTY\"/><Cell col=\"6\" text=\"bind:PCSQTY\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:CONSUMABLEDEFNAME\" textAlign=\"left\"/><Cell col=\"8\" textAlign=\"right\" text=\"bind:USEQTY\"/><Cell col=\"9\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("itemPRODUCTDEFID","div_work.form.div_detail.form.edt_PRODUCTDEFID","value","ds_RollLotList","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemPRODUCTDEFNAME","div_work.form.div_detail.form.edt_PRODUCTDEFNAME","value","ds_RollLotList","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemLOTID","div_work.form.div_detail.form.edt_PARENTLOTID","value","ds_RollLotList","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemCONSUMABLEDEFID","div_work.form.div_detail.form.edt_CONSUMABLEDEFID","value","ds_RollLotList","CONSUMABLEDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemCONSUMABLEDEFVERSION","div_work.form.div_detail.form.edt_CONSUMABLEDEFVERSION","value","ds_RollLotList","CONSUMABLEDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemCONSUMABLEDEFNAME","div_work.form.div_detail.form.edt_CONSUMABLEDEFNAME","value","ds_RollLotList","CONSUMABLEDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemAREANAME","tab_search.Tabpage1.form.edt_AREAID","value","ds_search","AREANAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemS_PRODUCTDEFID","tab_search.Tabpage1.form.edt_PRODUCTDEFID","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemD_CONSUMABLELOTID","div_work.form.div_detail.form.edt_CONSUMABLELOTID","value","ds_Detail","CONSUMABLELOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemD_LOTID","div_work.form.div_detail.form.edt_LOTID","value","ds_Detail","LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemD_ISLOTCARDPRINT","div_work.form.div_detail.form.chk_LOTCARDPRINT","value","ds_Detail","ISLOTCARDPRINT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemD_COMMENT","div_work.form.div_detail.form.edt_COMMENT","value","ds_Detail","COMMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemS_PRODUCTDEFVERSION","tab_search.Tabpage1.form.edt_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemS_PRODUCTDEFNAME","tab_search.Tabpage1.form.edt_PRODUCTDNM","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemS_CREATEDATEFR","div_work.form.div_detailSearch.form.cal_CREATEDATEFR","value","ds_search","CREATEDATEFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("itemS_CREATEDATETO","div_work.form.div_detailSearch.form.cal_CREATEDATETO","value","ds_search","CREATEDATETO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM02300M.xfdl","lib::lib_base.xjs");
        this.addIncludeScript("PCM02300M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM02300M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM02300M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: ROLL LOT 투입 분할
         * 파일명 		: PCM02300.xfdl
         * 작성자 		: 김애리
         * 작성일 		: 2021.4.28
         * AS-IS		: RollSplitWorkStart
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.4.28	김애리   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
         this.executeIncludeScript("lib::lib_base.xjs"); /*include "lib::lib_base.xjs"*/;
         this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
         this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	//this.fn_initDatePicker(); //fn_callback 로 감.

        	this.ds_search.set_rowposition(0);
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "PLANTID",this.gf_getSiteType());
        	this.ds_search.setColumn(0, "LANGUAGETYPE",this.gf_getLanguageType());
        	var objDate = new Date();
        	this.div_work.form.div_detailSearch.form.cal_CREATEDATEFR.set_value(objDate);
        	this.div_work.form.div_detailSearch.form.cal_CREATEDATETO.set_value(objDate);

        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.GetRollLotList();
        };

        this.fn_searchValidate = function ()
        {
        	var component = this.tab_search.Tabpage1;
        	var strColIdList = "edt_AREAID";
        	var strColNmList = "AREAID";
        	return this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        };

        this.fn_save = function (obj, e)
        {
        	if(this.fn_saveValidate() == false) return;

        	var rRow = this.ds_RollLotList.rowcount == 1 ? 0 : this.ds_RollLotList.rowposition;
        	var cRow = this.ds_ConsumableList.rowcount == 1 ? 0 : this.ds_ConsumableList.rowposition;

        	var splitQty = nexacro.toNumber(this.ds_ConsumableList.getColumn(cRow,"USEPNLQTY")) * nexacro.toNumber(this.ds_RollLotList.getColumn(rRow,"PANELPERQTY")) ;


        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "ENTERPRISEID,PLANTID,LOTID,CHILDLOTID,SPLITQTY,SPLITPNLQTY,COMMENT,PROCESSSEGMENTID");

        	this.ds_temp.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_temp.setColumn(0, "PLANTID", this.gf_getSiteType());
        	this.ds_temp.setColumn(0, "LOTID", this.ds_RollLotList.getColumn(rRow,"LOTID"));
        	this.ds_temp.setColumn(0, "CHILDLOTID", this.ds_Detail.getColumn(0,"LOTID"));
        	this.ds_temp.setColumn(0, "SPLITQTY", splitQty);
        	this.ds_temp.setColumn(0, "SPLITPNLQTY", this.ds_ConsumableList.getColumn(cRow,"USEPNLQTY"));
        	this.ds_temp.setColumn(0, "COMMENT", this.ds_Detail.getColumn(0,"COMMENT"));
        	this.ds_temp.setColumn(0, "PROCESSSEGMENTID", this.ds_RollLotList.getColumn(rRow,"PROCESSSEGMENTID"));

        	var sSvcID = "saveRollLotSplit";
        	var sController = "/pcm02300/saveRollLotSplit.do";
        	var sInDatasets = "ds_temp=ds_temp ds_ConsumableList=ds_ConsumableList";
        	var sOutDatasets = "";

        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        this.fn_saveValidate = function ()
        {
        	var component = this.div_work.form.div_detail;
        	var strColIdList = "edt_LOTID,edt_CONSUMABLELOTID";
        	var strColNmList = "LOTID,MATERIALLOTID";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return false;

        	var rRow = this.ds_RollLotList.rowcount == 1 ? 0 : this.ds_RollLotList.rowposition;
        	var cRow = this.ds_ConsumableList.rowcount == 1 ? 0 : this.ds_ConsumableList.rowposition;

        	var parentPnlQty = nexacro.toNumber(this.ds_RollLotList.getColumn(rRow, "PANELQTY"));
        	var childPnlQty = nexacro.toNumber(this.ds_ConsumableList.getColumn(cRow, "USEPNLQTY"));

        	if(childPnlQty == 0)
        	{
        		this.gfn_Message("InputConsumableUseQty", "", "warning", "ok");//자재 사용수량(M)를 입력 해주세요.
        		return false;
        	}

        	if (parentPnlQty < childPnlQty)
        	{//자재 Panel 사용 수량은 모 Lot의 Panel 수량보다 클 수 없습니다. 자재 Panel 사용 수량 : {0}, 모 Lot Panel 수량 : {1}
        		this.gfn_Message("UsingQtyLessThanParentQty", childPnlQty + "," + parentPnlQty , "warning", "ok");
        		return false;
        	}

        	var consumableLotQty = nexacro.toNumber(this.ds_ConsumableList.getColumn(cRow, "PNLQTY"));
        	var consumableUseQty = nexacro.toNumber(this.ds_ConsumableList.getColumn(cRow, "USEPNLQTY"));

        	if (consumableLotQty < consumableUseQty)
        	{//자재 Panel 사용 수량은 자재 Lot Panel 수량 보다 클 수 없습니다. 자재 Panel 사용 수량 : {0}, 자재 Lot Panel 수량 : {1}
        		this.gfn_Message("UsingQtyLessThanLotQty", consumableUseQty + "," + consumableLotQty , "warning", "ok");
        		return false;
        	}

        	var consumableLotQtyM = nexacro.toNumber(this.ds_ConsumableList.getColumn(cRow, "QTY"));
        	var consumableUseQtyM = nexacro.toNumber(this.ds_ConsumableList.getColumn(cRow, "USEQTY"));

        	if (consumableLotQtyM < consumableUseQtyM)
        	{//자재 미터 사용 수량은 자재 Lot 미터 수량 보다 클 수 없습니다. 자재 미터 사용 수량 : {0}, 자재 Lot M 수량 : {1}
        		this.gfn_Message("UsingMeterQtyLessThanLotMeterQty", consumableLotQtyM + "," + consumableUseQtyM , "warning", "ok");
        		return false;
        	}

        };

         /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        trace('fn_callBack trId ?' + trId);
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	{
        		switch(trId) {
        		case "saveRollLotSplit" :
        		{
        			trace(this.ds_Detail.saveXML());
        			if(this.ds_Detail.getColumn(0,"ISLOTCARDPRINT") == "1"){
        				this.mfn_PrintLotCard();
        			} else {
        				this.GetRollLotList("2Detail");
        			}
        			break;
        		}
        		case "selectRollLotList2Detail" :
        		{
        			this.GetRollLostSplit();
        			break;
        		}

        		default:
        		}
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        /*
         *	기능 : 팝업 관련
         */
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if (sPopupId == "reportViewer") this.GetRollLotList("2Detail");
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SEARCH_PRODUCT")
        	{//PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME
        		this.ds_search.setColumn(0,"PRODUCTDEFID",rtn[0]);
        		this.ds_search.setColumn(0,"PRODUCTDEFVERSION",rtn[2]);
        		this.ds_search.setColumn(0,"PRODUCTDEFNAME",rtn[1]);
        	} else if (sPopupId == "SEARCH_AREA")
        	{//AREAID|AREANAME
        		this.ds_search.setColumn(0,"AREAID",rtn[0]);
        		this.ds_search.setColumn(0,"AREANAME",rtn[1]);
        	}
        };


        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        this.GetRollLotList = function (pDetail)
        {
        	this.ds_RollLotList.clearData();
        	this.ds_ConsumableList.clearData();

        	if(this.fn_searchValidate() == false) return;

        	var sSvcID 			= "selectRollLotList"+pDetail;
        	var sController 	= "/pcm02300/selectRollLotList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_RollLotList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        this.GetRollLostSplit = function ()
        {
        	if(this.fn_searchValidate() == false) return;

        	this.ds_CreateList.clearData();
        	this.ds_CreateLotList.clearData();

        	var sSvcID 			= "selectCreatedListByRollLotSplit";
        	var sController 	= "/pcm02300/selectCreatedListByRollLotSplit.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_CreateList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.mfn_PrintLotCard = function ()
        {
        	var languageType 	= this.gf_getLanguageType();
        	var title 			= this.nfn_nvl(this.nfn_getDictionarynameUpper("LOTCARDPRINT"),"LOT Card 출력");


        	var oArg = {
        		sRptPath   : "/pcm/",
        		sRptName   : "PCM00600R.mrd",
        		strField   :   "[" + this.ds_Detail.getColumn(0,"LOTID")
        					+ "][" + languageType
        					+ "][" + this.ds_Detail.getColumn( 0, "LOTID" ) + "|" + this.ds_Detail.getColumn(0,"WORKTYPENAME")
        					+ "][" + this.ds_Detail.getColumn(0,"LOTID")
        					+ "]",
        		bModalless : false
        	};

        	var sOption = "titletext="+title+",modeless=false";
        	this.gfn_reportPopup("reportViewer", "common::com_report.xfdl", oArg, sOption);
        };

        this.mfn_GetCreateLot = function ()
        {
        	if(this.ds_RollLotList.rowcount == 0) return;
        	if(this.ds_ConsumableList.rowcount == 0)
        	{
        		this.gfn_Message("InputUsingMaterialLot", "" , "warning", "ok"); //사용할 자재 LOT을 입력하시기 바랍니다.
        		return;
        	}

        	var nRow = this.ds_RollLotList.rowcount == 1 ? 0 : this.ds_RollLotList.rowposition;

        	var lotId = this.ds_RollLotList.getColumn(nRow,"LOTID");
        	var arr = lotId.split("-");
        	var lotIdStarted = "";
        	for(var i=0;i<arr.length-2;i++)
        	{
        		if(i != 0) lotIdStarted = lotIdStarted + "-";
        		lotIdStarted = lotIdStarted + arr[i];
        	}
        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "STARTLOTID");
        	this.ds_temp.setColumn(0, "STARTLOTID", lotIdStarted);

        	var sSvcID 			= "selectLotIdMaxSequence";
        	var sController 	= "/pcm02300/selectLotIdMaxSequence.do";
        	var sInDatasets 	= "INPUT=ds_temp";
        	var sOutDatasets 	= "ds_temp=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false);

        	if(this.pfn_allTrim(this.ds_temp.getColumn(0,"LOTDEGREE")) == "") return;

        	var lotSplitNo = this.ds_temp.getColumn(0,"LOTDEGREE");
        	var newLotId = lotIdStarted + "-" + lotSplitNo  + "-" +  "001";
        	this.ds_Detail.setColumn(0,"LOTID",newLotId);

        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.btn_AREAID_onclick = function(obj,e)
        {
        	this.ds_search.setColumn(0,"AREAID",this.tab_search.Tabpage1.form.edt_AREAID.value);
        	this.openAREA_P00124("BA", this.ds_search);
        };

        this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	if(this.pfn_allTrim(this.ds_search.getColumn(0,"PRODUCTDEFNAME")) =="")
        		this.ds_search.setColumn(0,"PRODUCTDEFID", this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value);
        	var popupId = "SEARCH_PRODUCT";
        	var pPRODUCTDIVISION = "Product";
        	var pPlantID =  this.pfn_allTrim(this.ds_search.getColumn(0,"PLANTID"));
        	var prodDefId = this.pfn_allTrim(this.ds_search.getColumn(0,"PRODUCTDEFID"));
        	var prductIDCondition = prodDefId == "" ? "" : "TXTPRODUCTDEFNAME=" + prodDefId + "|";

        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00105";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        	oArg.arg_paramCols = "PLANTID";
        	oArg.arg_paramValues = pPlantID;
        	oArg.arg_searchStr = prductIDCondition + "PRODUCTDIVISION=" + pPRODUCTDIVISION;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };

        this.div_work_div_detailSearch_btn_detailSearch_onclick = function(obj,e)
        {
        	this.GetRollLostSplit();
        };

        this.div_work_div_detail_btn_CONSUMABLELOTID_onclick = function(obj,e)
        {
        	var areaID = this.ds_Detail.getColumn(0,"AREAID");
        	var consumableDefID = this.ds_Detail.getColumn(0,"CONSUMABLEDEFID");
        	var consumableDefNer = this.ds_Detail.getColumn(0,"CONSUMABLEDEFVERSION");

        	var oArg = {};
        	oArg.arg_type = "D";
        	oArg.arg_popupCd = "P00252";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "";
        	oArg.arg_paramCols = "AREAID|CONSUMABLEDEFID|CONSUMABLEDEFVERSION";
        	oArg.arg_paramValues = this.gfnFormat("{0}|{1}|{2}",areaID,consumableDefID,consumableDefNer);
        	oArg.arg_searchStr = "";

        	this.gfn_openPopup("SEARCH_CONSUMABLELOT","cmd::CMSA00100P.xfdl",oArg,"width=800,height=800");
        };

        this.ds_RollLotList_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 0 ) return;

        	this.ds_Detail.setColumn(0,"PRODUCTDEFID",this.ds_RollLotList.getColumn(e.newrow,"PRODUCTDEFID"));
        	this.ds_Detail.setColumn(0,"PRODUCTDEFVERSION",this.ds_RollLotList.getColumn(e.newrow,"PRODUCTDEFVERSION"));
        	this.ds_Detail.setColumn(0,"PRODUCTDEFNAME",this.ds_RollLotList.getColumn(e.newrow,"PRODUCTDEFNAME"));
        	this.ds_Detail.setColumn(0,"CONSUMABLEDEFID",this.ds_RollLotList.getColumn(e.newrow,"CONSUMABLEDEFID"));
        	this.ds_Detail.setColumn(0,"CONSUMABLEDEFVERSION",this.ds_RollLotList.getColumn(e.newrow,"CONSUMABLEDEFVERSION"));
        	this.ds_Detail.setColumn(0,"CONSUMABLEDEFNAME",this.ds_RollLotList.getColumn(e.newrow,"CONSUMABLEDEFNAME"));
        	this.ds_Detail.setColumn(0,"AREAID",this.ds_RollLotList.getColumn(e.newrow,"AREAID"));
        	this.ds_Detail.setColumn(0,"WORKTYPENAME",this.ds_RollLotList.getColumn(e.newrow,"WORKTYPENAME"));
        	this.ds_Detail.setColumn(0,"CONSUMABLELOTID","");
        	this.ds_Detail.setColumn(0,"LOTID","");
        	this.ds_Detail.setColumn(0,"ISLOTCARDPRINT","0");
        	this.ds_Detail.setColumn(0,"COMMENT","");
        };

        /*
         *	자재Lot 엔터 들어오면.
         */
        this.div_work_div_detail_edt_CONSUMABLELOTID_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		if(this.ds_RollLotList.rowcount == 0) {
         			this.gfn_Message("NotExistsRollLot", "", "warning", "ok"); //선택한 대표 Roll Lot이 존재하지 않습니다.
        			return;
        		}

        		var nRow = this.ds_RollLotList.rowcount == 1 ? 0 : this.ds_RollLotList.rowposition;

        		this.ds_temp.clear();
        		this.pfn_DatasetAddColumn(this.ds_temp, "ENTERPRISEID,PLANTID,LOTID,CONSUMABLELOTID,MATERIALTYPE,CONSUMABLECLASSID");

        		this.ds_temp.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());
        		this.ds_temp.setColumn(0, "PLANTID", this.gf_getSiteType());
        		this.ds_temp.setColumn(0, "LOTID", this.ds_RollLotList.getColumn(nRow,"LOTID"));
        		this.ds_temp.setColumn(0, "CONSUMABLELOTID", obj.value);
        		this.ds_temp.setColumn(0, "MATERIALTYPE", "Consumable");
        		this.ds_temp.setColumn(0, "CONSUMABLECLASSID", "RawMaterial");

        		var sSvcID 			= "selectConsumableLotInfo";
        		var sController 	= "/pcm02300/selectConsumableLotInfo.do";
        		var sInDatasets 	= "INPUT=ds_temp";
        		var sOutDatasets 	= "ds_ConsumableList=output";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false);

        		if(this.ds_ConsumableList.rowcount > 0){
        			var currentAreaId = this.ds_RollLotList.getColumn(nRow,"WAREHOUSEID");
        			var consumableAreaId = this.ds_ConsumableList.getColumn(0,"WAREHOUSEID");

        			if (currentAreaId != consumableAreaId)
        			{
        				// 현재 창고에서 보유하고 있는 자재가 아닙니다. 현재 창고 ID : {0}, 소유 창고 ID : {1}
        				this.gfn_Message("ConsumableNotInArea", currentAreaId + "," + consumableAreaId , "warning", "ok");
        				this.ds_ConsumableList.clearData();
        				return;
        			}

        		}

        		this.mfn_GetCreateLot();

        	}
        };

        /*
         * 화면 중간에 있는 자재 Lot 그리드 값 변경되면
         */
        this.ds_ConsumableList_cancolumnchange = function(obj,e)
        {
        	if(e.row < 0) return;

        	if(e.columnid == "USEQTY" || e.columnid == "USEPNLQTY"){
        		var bomQty = nexacro.toNumber(this.ds_ConsumableList.getColumn(e.row,"BOMQTY"));
        		var panelPerQty = nexacro.toNumber(this.ds_ConsumableList.getColumn(e.row,"PANELPERQTY"));
        		var pcsmm = nexacro.toNumber(this.ds_ConsumableList.getColumn(e.row,"PCSMM"));
        		var materialClass = this.ds_ConsumableList.getColumn(e.row,"MATERIALCLASS");

        		if (bomQty <= 0)
        		{
        			// BOM 수량이 0 입니다.
        			this.gfn_Message("BomQtyIsZero", "" , "warning", "ok");
        			return false;
        		}

        		if (panelPerQty <= 0)
        		{
        			// Lot의 합수가 0 입니다.
        			this.gfn_Message("PanelPerQtyIsZero", "" , "warning", "ok");
        			return false;
        		}
        	}
        };

        /*
         * 화면 중간에 있는 자재 Lot 그리드 값 변경되면 Panel 사용수량을 변경해준다.
         */
        this.ds_ConsumableList_oncolumnchanged = function(obj,e)
        {
        	if(e.row < 0) return;
        	if(e.columnid == "USEQTY"){
        		var bomQty = nexacro.toNumber(this.ds_ConsumableList.getColumn(e.row,"BOMQTY"));
        		var panelPerQty = nexacro.toNumber(this.ds_ConsumableList.getColumn(e.row,"PANELPERQTY"));
        		var pcsmm = nexacro.toNumber(this.ds_ConsumableList.getColumn(e.row,"PCSMM"));
        		var materialClass = this.ds_ConsumableList.getColumn(e.row,"MATERIALCLASS");

        		this.ds_ConsumableList.set_enableevent(false);

        		var usePnlQty = 0;
        		usePnlQty = nexacro.ceil(  nexacro.floor(    (nexacro.toNumber(e.newvalue)/ bomQty / panelPerQty)   ));
        		trace('--------- usePnlQty ? ' + usePnlQty);
        		this.ds_ConsumableList.setColumn(e.row, "USEPNLQTY", usePnlQty );

        	} else if(e.columnid == "USEPNLQTY"){
        		var bomQty = nexacro.toNumber(this.ds_ConsumableList.getColumn(e.row,"BOMQTY"));
        		var panelPerQty = nexacro.toNumber(this.ds_ConsumableList.getColumn(e.row,"PANELPERQTY"));
        		var pcsmm = nexacro.toNumber(this.ds_ConsumableList.getColumn(e.row,"PCSMM"));
        		var materialClass = this.ds_ConsumableList.getColumn(e.row,"MATERIALCLASS");

        		this.ds_ConsumableList.set_enableevent(false);

        		var useQty = 0;
        		useQty = nexacro.floor((nexacro.toNumber(e.newvalue) * bomQty * panelPerQty),5);
        		trace('--------- useQty ? ' + useQty);
        		this.ds_ConsumableList.setColumn(e.row, "USEQTY", useQty );
        	}


        	this.ds_ConsumableList.set_enableevent(true);
        };

        this.ds_CreateList_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 0) return;

        	this.ds_temp.clear();
        	this.pfn_DatasetAddColumn(this.ds_temp, "CREATEDATEFR,CREATEDATETO,MATERIALTYPE,LOTCREATEDTYPE,PRODUCTDEFID,PRODUCTDEFVERSION");
        	this.ds_temp.setColumn(0, "CREATEDATEFR", this.ds_search.getColumn(0,"CREATEDATEFR"));
        	this.ds_temp.setColumn(0, "CREATEDATETO", this.ds_search.getColumn(0,"CREATEDATETO"));
        	this.ds_temp.setColumn(0, "MATERIALTYPE", "Consumable");
        	this.ds_temp.setColumn(0, "LOTCREATEDTYPE", "SplitRoll");
        	this.ds_temp.setColumn(0, "PRODUCTDEFID", this.ds_CreateList.getColumn(e.newrow,"PRODUCTDEFID"));
        	this.ds_temp.setColumn(0, "PRODUCTDEFVERSION", this.ds_CreateList.getColumn(e.newrow,"PRODUCTDEFVERSION"));

        	var sSvcID 			= "selectCreatedLotListByRollLotSplit";
        	var sController 	= "/pcm02300/selectCreatedLotListByRollLotSplit.do";
        	var sInDatasets 	= "INPUT=ds_temp";
        	var sOutDatasets 	= "ds_CreateLotList=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tabpage1.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_AREAID.addEventHandler("onclick",this.btn_AREAID_onclick,this);
            this.div_work.form.div_detail.form.edt_CONSUMABLELOTID.addEventHandler("onkeydown",this.div_work_div_detail_edt_CONSUMABLELOTID_onkeydown,this);
            this.div_work.form.div_detail.form.btn_CONSUMABLELOTID.addEventHandler("onclick",this.div_work_div_detail_btn_CONSUMABLELOTID_onclick,this);
            this.div_work.form.div_detailSearch.form.btn_detailSearch.addEventHandler("onclick",this.div_work_div_detailSearch_btn_detailSearch_onclick,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
            this.ds_RollLotList.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
            this.ds_RollLotList.addEventHandler("onrowposchanged",this.ds_RollLotList_onrowposchanged,this);
            this.ds_Detail.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
            this.ds_ConsumableList.addEventHandler("cancolumnchange",this.ds_ConsumableList_cancolumnchange,this);
            this.ds_ConsumableList.addEventHandler("oncolumnchanged",this.ds_ConsumableList_oncolumnchanged,this);
            this.ds_CreateList.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
            this.ds_CreateList.addEventHandler("onrowposchanged",this.ds_CreateList_onrowposchanged,this);
            this.ds_CreateLotList.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
        };
        this.loadIncludeScript("PCM02300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
