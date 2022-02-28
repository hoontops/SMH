(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM08400M");
            this.set_titletext("재포장 완료, 포장실적 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mainRe", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"REPACKINGNO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENROLLEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PACKEDQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"P_CONPERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_CONPERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"REPACKINGNO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"P_BOXNO\" type=\"STRING\" size=\"256\"/><Column id=\"P_CHITNO\" type=\"STRING\" size=\"256\"/><Column id=\"P_AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_main", this);
            obj._setContents("<ColumnInfo><Column id=\"BOXNO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORKER\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PACKINGDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCANCEL\" type=\"STRING\" size=\"256\"/><Column id=\"DOCUMENTNO\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents("<ColumnInfo><Column id=\"BOXNO\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WEEK\" type=\"STRING\" size=\"256\"/><Column id=\"PACKINGWEEK\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_BOXNO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_plant", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"STARTBUSINESSHOUR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"P_BOXNO\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_packingSearch",this.tab_search);
            obj.set_text("표준공정 맵핑");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("0");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("1");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("3");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("BB2F5FB0FA594AB1B2150B1B48275231");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Combo("cbo_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("PLANTID");
            obj.set_datacolumn("PLANTNAME");
            obj.set_innerdataset("ds_plant");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Static("sta_prodId","0","35","103","20",null,null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("5");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Edit("edt_prodId","108","35",null,"20","37",null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("6");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Button("btn_prodId",null,"35","22","20","15",null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Div("div_dateFrom","108","60","165","21",null,null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("8");
            obj.set_url("common::com_calendar.xfdl");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Static("sta_searchPeriod","0","60","103","20",null,null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("9");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("C6A85700415446D89213292978260263");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Combo("cbo_period","10","85","89","20",null,null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("10");
            obj.set_codecolumn("code");
            obj.set_innerdataset("gds_period");
            obj.set_datacolumn("desc");
            obj.set_text("금일");
            obj.set_value("today");
            obj.set_index("0");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Div("div_dateTo","108","85","165","21",null,null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("11");
            obj.set_url("common::com_calendar.xfdl");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Button("btn_workarea",null,"284","22","20","9",null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            obj.set_visible("false");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Edit("edt_workarea","114","284",null,"20","31",null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("13");
            obj.set_visible("false");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Static("sta_workarea","6","284","103","20",null,null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("14");
            obj.set_text("작업장 ID");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WORKAREAID");
            obj.set_visible("false");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Static("sta_lotNo","0","110","103","20",null,null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("15");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("LOTID");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Edit("edt_lotNo","108","110",null,"20","37",null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("16");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Button("btn_lotNo",null,"110","22","20","15",null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Static("sta_slipNum","0","135","103","20",null,null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("18");
            obj.set_text("전표번호");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("99BC786162754566A81B2A0C68E3BFCF");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Edit("edt_slipNum","108","135","165","20",null,null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("19");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Edit("edt_itemNm","108","160","165","20",null,null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("20");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Static("sta_itemNm","0","160","103","20",null,null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("21");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("34F62A5A5E0040598A9BEB23444ABAE2");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"180","45","20","91",null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("22");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Button("btn_searchClear","171","200","102","36",null,null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("CLEAR");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Button("btn_search","15","200","146","36",null,null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("SEARCH");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","206","10","27",null,null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("25");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Static("sta_boxNo","5","314","103","20",null,null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("26");
            obj.set_text("Box No");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("BOXNO");
            obj.set_visible("false");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Edit("edt_boxNo","113","314",null,"20","10",null,null,null,null,null,this.tab_search.tabpage_packingSearch.form);
            obj.set_taborder("27");
            obj.set_visible("false");
            this.tab_search.tabpage_packingSearch.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_repackingSearch",this.tab_search);
            obj.set_text("대공정 그룹");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_searchPeriod2","0","10","103","20",null,null,null,null,null,null,this.tab_search.tabpage_repackingSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("C6A85700415446D89213292978260263");
            this.tab_search.tabpage_repackingSearch.addChild(obj.name, obj);

            obj = new Button("btn_searchClear","171","125","102","36",null,null,null,null,null,null,this.tab_search.tabpage_repackingSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.tabpage_repackingSearch.addChild(obj.name, obj);

            obj = new Button("btn_search","15","125","146","36",null,null,null,null,null,null,this.tab_search.tabpage_repackingSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.tabpage_repackingSearch.addChild(obj.name, obj);

            obj = new Static("sta_prodId","0","60","103","20",null,null,null,null,null,null,this.tab_search.tabpage_repackingSearch.form);
            obj.set_taborder("3");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.tabpage_repackingSearch.addChild(obj.name, obj);

            obj = new Calendar("cal_startDt","108","10",null,"20","15",null,null,null,null,null,this.tab_search.tabpage_repackingSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_search.tabpage_repackingSearch.addChild(obj.name, obj);

            obj = new Calendar("cal_endDt","108","35","165","20",null,null,null,null,null,null,this.tab_search.tabpage_repackingSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_search.tabpage_repackingSearch.addChild(obj.name, obj);

            obj = new Static("sta_rePackNo00","0","35","35.76%","20",null,null,null,null,null,null,this.tab_search.tabpage_repackingSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_label");
            obj.set_wordWrap("english");
            obj.set_textAlign("center");
            this.tab_search.tabpage_repackingSearch.addChild(obj.name, obj);

            obj = new Edit("edt_prodId","108","60","49.31%","20",null,null,null,null,null,null,this.tab_search.tabpage_repackingSearch.form);
            obj.set_taborder("7");
            obj.set_text("1025149H4");
            this.tab_search.tabpage_repackingSearch.addChild(obj.name, obj);

            obj = new Button("btn_prodId","251","60","22","20",null,null,null,null,null,null,this.tab_search.tabpage_repackingSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tabpage_repackingSearch.addChild(obj.name, obj);

            obj = new Edit("edt_prodIdNm","108","85","57.29%","20",null,null,null,null,null,null,this.tab_search.tabpage_repackingSearch.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_text("AMB638RD01 DIGITIZER(2L)-IFV직납");
            this.tab_search.tabpage_repackingSearch.addChild(obj.name, obj);

            obj = new Static("sta_prodIdNm","0","85","103","20",null,null,null,null,null,null,this.tab_search.tabpage_repackingSearch.form);
            obj.set_taborder("10");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("FAA6C66A19874535851F8C13FF3A95BC");
            this.tab_search.tabpage_repackingSearch.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
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

            obj = new Tab("tab_work","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_packWork",this.div_work.form.tab_work);
            obj.set_text("포장 인계");
            obj.set_tooltiptext("PACK_HANDOVER");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_subMainTitle","0","0","120","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_packWork.form);
            obj.set_taborder("0");
            obj.set_text("포장 작업 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("PACKINGLOTLIST");
            this.div_work.form.tab_work.tabpage_packWork.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_main","120","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_packWork.form);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_work.tabpage_packWork.addChild(obj.name, obj);

            obj = new Grid("grd_detail","0","52.55%",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_packWork.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_detail");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"130\"/><Column size=\"130\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"240\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"전표번호\" tooltiptext=\"OSPPRINTNO\"/><Cell col=\"2\" tooltiptext=\"BOXNO\" text=\"Box No\"/><Cell col=\"3\" text=\"모 Lot\" tooltiptext=\"PARENTLOT\"/><Cell col=\"4\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"5\" text=\"품목코드\" tooltiptext=\"ITEMID\"/><Cell col=\"6\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"7\" text=\"수량(PCS)\" tooltiptext=\"PCSQTY\"/><Cell col=\"8\" text=\"수량(PNL)\" tooltiptext=\"PNLQTY\" textAlign=\"center\"/><Cell col=\"9\" text=\"주차\" tooltiptext=\"9BD44DF47EDD439CBDBAA6BF3C8AD690\"/><Cell col=\"10\" text=\"포장주차\" tooltiptext=\"PACKINGWEEK\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:BOXNO\"/><Cell col=\"2\" text=\"bind:MAX_BOXNO\"/><Cell col=\"3\" text=\"bind:PARENTLOTID\"/><Cell col=\"4\" text=\"bind:LOTID\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PCSQTY\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:PANELQTY\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:WEEK\"/><Cell col=\"10\" text=\"bind:PACKINGWEEK\"/></Band><Band id=\"summary\"><Cell colspan=\"7\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;parseFloat(PCSQTY)&quot;)\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;parseFloat(PANELQTY)&quot;)\" displaytype=\"number\"/><Cell col=\"9\" colspan=\"2\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_packWork.addChild(obj.name, obj);

            obj = new Grid("grd_main","0","34",null,null,"0","grd_detail:34",null,null,null,null,this.div_work.form.tab_work.tabpage_packWork.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_main");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"전표번호 \" tooltiptext=\"OSPPRINTNO\"/><Cell col=\"3\" text=\"품목코드\" tooltiptext=\"ITEMID\"/><Cell col=\"4\" text=\"Rev.\" tooltiptext=\"ITEMVERSION\"/><Cell col=\"5\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"6\" text=\"수량(PCS)\" tooltiptext=\"PCSQTY\"/><Cell col=\"7\" text=\"수량(PNL)\" tooltiptext=\"PNLQTY\"/><Cell col=\"8\" text=\"작업자\" tooltiptext=\"ACTUALUSERNAME\"/><Cell col=\"9\" text=\"포장일자\" tooltiptext=\"PACKINGDATE\"/><Cell col=\"10\" text=\"전표번호\" tooltiptext=\"OSPPRINTNO\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:DOCUMENTNO\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PCSQTY\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:PANELQTY\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:WORKER\"/><Cell col=\"9\" text=\"bind:PACKINGDATE\" displaytype=\"mask\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"10\" text=\"bind:DOCUMENTNO\"/></Band><Band id=\"summary\"><Cell colspan=\"6\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;parseFloat(PCSQTY)&quot;)\" displaytype=\"number\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;parseFloat(PANELQTY)&quot;)\" displaytype=\"number\"/><Cell col=\"8\" colspan=\"2\"/><Cell col=\"10\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_packWork.addChild(obj.name, obj);

            obj = new Static("sta_subDetailTitle","0","grd_main:0","102","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_packWork.form);
            obj.set_taborder("3");
            obj.set_text("Lot List");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("GRIDLOTLIST");
            this.div_work.form.tab_work.tabpage_packWork.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_detail","sta_subDetailTitle:0","grd_main:0","140","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_packWork.form);
            obj.set_taborder("4");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_work.tabpage_packWork.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_main",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.tabpage_packWork.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_work.tabpage_packWork.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_detail",null,"grd_main:5","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.tabpage_packWork.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_work.tabpage_packWork.addChild(obj.name, obj);

            obj = new Tabpage("tabpage_repackWork",this.div_work.form.tab_work);
            obj.set_text("재포장 리스트");
            obj.set_tooltiptext("REPACKINGLOTLIST");
            this.div_work.form.tab_work.addChild(obj.name, obj);

            obj = new Static("sta_subtitle","0","0","121","34",null,null,null,null,null,null,this.div_work.form.tab_work.tabpage_repackWork.form);
            obj.set_taborder("0");
            obj.set_text("재포장");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("ProcessClassRepackage");
            this.div_work.form.tab_work.tabpage_repackWork.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_rePack",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_work.tabpage_repackWork.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_work.tabpage_repackWork.addChild(obj.name, obj);

            obj = new Grid("grd_rePack","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_work.tabpage_repackWork.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_mainRe");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"240\"/><Column size=\"200\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"재포장번호\" tooltiptext=\"RepackingNo\"/><Cell col=\"2\" text=\"품목코드\" tooltiptext=\"ITEMID\"/><Cell col=\"3\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"4\" text=\"자원명\" tooltiptext=\"RESOURCENAME\"/><Cell col=\"5\" text=\"일시\" tooltiptext=\"DATETIME\"/><Cell col=\"6\" text=\"창고\" tooltiptext=\"COMPLETEWAREHOUSEID\"/><Cell col=\"7\" text=\"완료수량\" tooltiptext=\"ENDQTY\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:REPACKINGNO\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:ENROLLEDATE\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:WAREHOUSENAME\"/><Cell col=\"7\" text=\"bind:PACKEDQTY\" textAlign=\"right\"/></Band><Band id=\"summary\"><Cell colspan=\"7\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;parseFloat(PACKEDQTY)&quot;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.div_work.form.tab_work.tabpage_repackWork.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
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

            obj = new Static("sta_title","30","16","155","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("공정 부하 기준 정보");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            obj.set_tooltiptext("MENU_PG-PM-0060");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);
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
        this.addIncludeScript("PCM08400M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM08400M.xfdl","lib::lib_mtm.xjs");
        this.registerScript("PCM08400M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 포장실적조회 (재포장완료조회 + 포장실적조회)
         * 파일명 		: PCM08400M.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.06.08
         *
         * 설  명		: 포장실적조회 (재포장완료조회 + 포장실적조회)
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.06.08	김진현   	최초작성
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

        this.g_areaId = "";		// 작업장 id

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// 초기화 (공통)
        	this.nfn_formInit(obj);

        	/*******************
        	[포장실적]
        	*********************/
        	// 검색조건 달력 설정
        	this.tab_search_tabpage_packingSearch_cbo_period_onitemchanged();

        	this.tab_search.tabpage_packingSearch.form.div_dateFrom.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_preiodChang, this);
        	this.tab_search.tabpage_packingSearch.form.div_dateTo.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_preiodChang, this);

        	// 검색조건 공통 콤보 설정
        	this.fn_initCombo();

        	// x 버튼 이벤트 설정(품콕코드)
        	this.tab_search.tabpage_packingSearch.form.btn_edt_prodId.setEventHandler( "onclick", this.fn_clickCancelHoProd, this );
        	// x 버튼 이벤트 설정(작업장id)
        	//this.tab_search.tabpage_packingSearch.form.btn_edt_workarea.setEventHandler( "onclick", this.fn_clickCancelHoArea, this );


        	/*******************
        	[재포장]
        	*********************/
        	// x 버튼 이벤트 설정(품콕코드)
        	this.tab_search.tabpage_repackingSearch.form.btn_edt_prodId.setEventHandler( "onclick", this.fn_clickCancelProd, this );

        	// 달력 초기화
        	this.fn_initDate();



        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색(메인 -  고객정보 그리드)
         */
        this.fn_search = function (obj, e)
        {
        	var nSearchTab = this.tab_search.tabindex;

        	// 조회 분기 로직
        	this.fn_tabSearch(nSearchTab);
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
        		if (trId == "saveProcGrpList")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        				return;
        			} else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        				return;
        			}
        		} else {
        			this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        			return;
        		}
        		return;
        	}

        	switch(trId) {
        		case "selectRePackCompList": 			//[조회]
        			if(this.ds_mainRe.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        			}
        			break;
        		case "selectPlantList10001": 			//[조회조건] Period dataset Callback
        			this.tab_search.tabpage_packingSearch.form.cbo_site.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.
        			break;
        		case "SelectPackingFinishedList": 			//[포장인계 상단 조회]
        			if(this.ds_main.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        			}
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
        		case "SCH_PRODUCTDEFID_TOP" :
        			this.tab_search.tabpage_repackingSearch.form.edt_prodId.set_value(rtn[0]);
        			this.tab_search.tabpage_repackingSearch.form.edt_prodIdNm.set_value(rtn[1]);
        			break;
        		case "SCH_PRODUCTDEFID" :	// 품목코드 팝업 조회시

        			var nLen = rtn.length;
        			if(nLen != 0)
        			{
        				var nItemCode = "";
        				var nItemNn   = "";
        				for(var i=0; i<nLen; i++)
        				{
        					nItemCode += i==0? rtn[i][0] : ", " +rtn[i][0];	// 품목 코드
        					nItemNn   += i==0? rtn[i][1] : ", " +rtn[i][1]; // 품목 명
        				}
        				this.tab_search.tabpage_packingSearch.form.edt_prodId.set_value(nItemCode);
        				this.tab_search.tabpage_packingSearch.form.edt_itemNm.set_value(nItemNn);
        			}
        			else
        			{
        				this.tab_search.tabpage_packingSearch.form.edt_prodId.set_value("");
        				this.tab_search.tabpage_packingSearch.form.edt_itemNm.set_value("");
        			}

        			break;
        		case "AREA_ID" :
        			var nLen = rtn.length;
        			if(nLen != 0)
        			{
        				var nAreaId = "";
        				var nAreaNn   = "";
        				for(var i=0; i<nLen; i++)
        				{
        					nAreaId += i==0? rtn[i][0] : ", " +rtn[i][0];
        					nAreaNn   += i==0? rtn[i][1] : ", " +rtn[i][1];
        				}
        				this.tab_search.tabpage_packingSearch.form.edt_workarea.set_value(nAreaNn);
        				this.g_areaId = nAreaId;			// 작업장Id
        			}
        			else
        			{
        				this.tab_search.tabpage_packingSearch.from.edt_workarea.set_value("");
        				this.g_areaId = "";
        			}
        			break;
        		case "SCH_LOTNO" :	// Lot No 팝업 조회시

        			var nLen = rtn.length;

        			if(nLen != 0)
        			{
        				var nLotNo = "";

        				for(var i=0; i<nLen; i++)
        				{
        					nLotNo += i==0? rtn[i][0] : ", " +rtn[i][0];
        				}
        				this.tab_search.tabpage_packingSearch.form.edt_lotNo.set_value(nLotNo);
        			}
        			else
        			{
        				this.tab_search.tabpage_packingSearch.form.edt_lotNo.set_value("");
        			}

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
        	var opts = "width=600,height=600";

        	oArg.arg_type = "CA";		// 멀티 선택
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");

        	if(popId=="P00148"){ //창고 명 조회
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        		oArg.arg_searchStr = "TXTAREA="+this.tab_search.tabpage_packingSearch.form.edt_workarea.value;	// 검색 조건
        	}


        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }


        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 품목코드 x 클릭시
         */
        this.fn_clickCancelProd = function ()
        {
        	this.tab_search.tabpage_repackingSearch.form.edt_prodId.set_value("");				// 품목코드 초기화
        	this.tab_search.tabpage_repackingSearch.form.edt_prodIdNm.set_value("");			// 품목명 초기화
        };
        /*
         * 인게 품목코드 x 클릭시
         */
        this.fn_clickCancelHoProd = function ()
        {
        	this.tab_search.tabpage_packingSearch.form.edt_prodId.set_value("");
        	this.tab_search.tabpage_packingSearch.form.edt_itemNm.set_value("");
        };

        /*
         *
         */
        this.fn_clickCancelHoArea = function ()
        {
        	this.tab_search.tabpage_packingSearch.form.edt_workarea.set_value("");
        	this.g_areaId = "";

        };


        /*
         * 현재 시간 적용
         */
        this.fn_initDate = function ()
        {
        	this.tomfn_getPeriodData("ds_periodType","","fn_callBack");			// 달력 정보 조회

        	this.fn_setDate("LASTDAY");		// 금일- THISDAY , 전일 - LASTDAY
        };

        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.tab_search.tabpage_repackingSearch.form.cal_startDt.set_value(this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.tab_search.tabpage_repackingSearch.form.cal_endDt.set_value(this.ds_periodType.getColumn(0,periodType+"_E"));
        }

        /*
         * 초기화 함수(재포장)
         */
        this.fn_searchRePackReset = function ()
        {
        	// 오늘 날짜 설정(상단 조회 조건)
        	this.fn_initDate();
        	this.tab_search.tabpage_repackingSearch.form.edt_prodId.set_value("");					// 품목코드 초기화
        	this.tab_search.tabpage_repackingSearch.form.edt_prodIdNm.set_value("");				// 품목명 초기화
        };

        /*
         * 초기화 함수(포장인계)
         */
        this.fn_searchPackReset = function ()
        {
        	// 금일로 설정
        	this.tab_search.tabpage_packingSearch.form.cbo_period.set_value("today");
        	// 검색조건 달력 설정
        	this.tabpage_packingSearch();

        	// Site 설정
        	this.tab_search.tabpage_packingSearch.form.cbo_site.set_value(this.gf_getSiteType()); //세션사용자PlantId를 가져온다.

        	this.tab_search.tabpage_packingSearch.form.edt_prodId.set_value("");		// 품목코드
        	this.tab_search.tabpage_packingSearch.form.edt_workarea.set_value("");		// 장업장 ID
        	this.g_areaId = "";								// 작업장 id
        	this.tab_search.tabpage_packingSearch.form.edt_lotNo.set_value("");			// Lot No
        	//this.searchDiv.edt_boxNo.set_value("");			// Box No
        	//this.searchDiv.edt_slipNum.set_value("");		// 전표번호
        	this.tab_search.tabpage_packingSearch.form.edt_itemNm.set_value("");		// 품목명
        };

        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_tabSearch = function (nIdx)
        {
        	switch(nIdx) {
        		case 0:	// 포장 인계 조회
        			this.ds_main.clearData();
        			this.ds_detail.clearData();
        			this.fn_searchPack();				// 포장인계
        			break;
        		case 1: // 재포장
        			this.ds_mainRe.clearData();
        			this.fn_searchRe();					// 재포장 조회

        			break;
        		default:
        	}
        };


        /*
         * 재포장 메인 조회
         */
        this.fn_searchRe = function ()
        {
        	this.ds_search.clearData();
        	// 조회 조건 설정
        	this.ds_search.addRow();
        	var nPeriodfr = this.tab_search.tabpage_repackingSearch.form.cal_startDt.value;
        	var nPeriodto = this.tab_search.tabpage_repackingSearch.form.cal_endDt.value;
        	this.ds_search.setColumn(0, "P_CONPERIOD_PERIODFR", nPeriodfr+"000000"); //시작일
        	this.ds_search.setColumn(0, "P_CONPERIOD_PERIODTO", nPeriodto+"235959"); //종료일
        	this.ds_search.setColumn(0, "ENTERPRISEID"	, this.gf_getEnterpriseId()); 	// ENTERPRISEID
        	this.ds_search.setColumn(0, "PLANTID"		, this.gf_getSiteType());		// 공장(ERP에서 값이 들어 올때 어떻게 들어 오는지 확인 필요)
        	this.ds_search.setColumn(0, "PRODUCTDEFID"	, this.tab_search.tabpage_repackingSearch.form.edt_prodId.value);		// 품목코드

        	// 날짜체크
        	if( nPeriodfr  > nPeriodto )
        	{
        		this.gfn_Message("ValidateDate", "", "warning", "ok");//시작 일자는 종료일자보다 작아야합니다.
        		return false;
        	}
        	// 날짜 체크
        	if(!this.gfn_isDate(nPeriodfr) || !this.gfn_isDate(nPeriodto))
        	{
        		this.gfn_Message("ValidateMWONONEDATE", "", "warning", "ok");//잘못된날짜데이터입니다.
        		return;
        	}

        	// 조회 실행
        	var sSvcID 			= "selectRePackCompList";
        	var sController 	= "/pcm08400/selectRePackCompList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_mainRe=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        }

        /*
         * 이벤트 : 조회조건- 조회기간 직접 변경시
         */
        this.fn_preiodChang = function(obj,e)
        {
        	if (!this.nfn_isNull(this.tab_search.tabpage_packingSearch.form.cbo_period.value))
        	{
        		this.tab_search.tabpage_packingSearch.form.cbo_period.set_text("사용자정의");
        	}
        };

        /*
         * 기능 : 조회 조건 Load
         */

        this.fn_initCombo = function ()
        {
        	this.fn_initSiteCombo();
        }


        /*
         * 기능 : 'site' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {
        	this.ds_search.clearData();

        	// 조회 조건 설정
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId()); 	// ENTERPRISEID

        	// 품목유형코드 콤보 정보 조회
        	var sSvcID 			= "selectPlantList10001";
        	var sController 	= "/pcm08400/selectPlantList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_plant=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /*
         * 포장 인계 메인 조회
         */
        this.fn_searchPack = function ()
        {
        	this.ds_search.clearData();

        	this.ds_search.addRow();

        	var nPeriodfr = this.tab_search.tabpage_packingSearch.form.div_dateFrom.form.calStart.value;
        	var nPeriodto = this.tab_search.tabpage_packingSearch.form.div_dateTo.form.calStart.value;
        	this.ds_search.setColumn(0, "P_PERIOD_PERIODFR", nPeriodfr); // 시작일
        	this.ds_search.setColumn(0, "P_PERIOD_PERIODTO", nPeriodto); // 종료일
        	this.ds_search.setColumn(0, "USERID", this.gf_getUserId());  // 사용자
        	this.ds_search.setColumn(0, "P_PLANTID", this.tab_search.tabpage_packingSearch.form.cbo_site.value); // SITE
        	this.ds_search.setColumn(0, "P_LOTID", this.tab_search.tabpage_packingSearch.form.edt_lotNo.value); // LOTID
        	this.ds_search.setColumn(0, "P_PRODUCTDEFID", this.tab_search.tabpage_packingSearch.form.edt_prodId.value); // 품목코드
        	this.ds_search.setColumn(0, "P_PRODUCTNAME", this.tab_search.tabpage_packingSearch.form.edt_itemNm.value); // 품목명
        	this.ds_search.setColumn(0, "P_BOXNO", this.tab_search.tabpage_packingSearch.form.edt_boxNo.value); // BOX NO
        	this.ds_search.setColumn(0, "P_CHITNO", this.tab_search.tabpage_packingSearch.form.edt_slipNum.value); // 전표번호
        	this.ds_search.setColumn(0, "P_AREAID", this.tab_search.tabpage_packingSearch.form.edt_workarea.value); // 작업장

        	//trace(" ----------> : "+this.ds_search.saveXML());

        	var sSvcID 			= "SelectPackingFinishedList";
        	var sController 	= "/pcm08400/SelectPackingFinishedList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_main=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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

        	var nBoxNo = this.ds_main.getColumn(this.ds_main.rowposition,"BOXNO");

        	this.ds_searchDetail.addRow();
        	this.ds_searchDetail.setColumn(0, "P_BOXNO", nBoxNo); 	// boxNo

        	this.ds_searchDetail.setColumn(0, "ENTERPRISEID"	, this.gf_getEnterpriseId()); 	// ENTERPRISEID
        	this.ds_searchDetail.setColumn(0, "PLANTID"			, this.gf_getSiteType());		// 공장(ERP에서 값이 들어 올때 어떻게 들어 오는지 확인 필요)

        	var sSvcID 			= "SelectPackingLotList";
        	var sController 	= "/pcm08400/SelectPackingLotList.do";
        	var sInDatasets 	= "INPUT=ds_searchDetail";
        	var sOutDatasets 	= "ds_detail=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        /*
         * main Tab 이동시
         */
        this.div_work_tab_work_onchanged = function(obj,e)
        {
        	var nTabIdx = this.div_work.form.tab_work.tabindex;
        	// 필터 조건 설정
        	this.tab_search.set_tabindex(nTabIdx);
        };

        /*
         * 품목코드 팝업 호출
         */
        this.div_work_div_search_btn_itemId_onclick = function(obj,e)
        {
        	var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        	var nSite 			= this.gf_getSiteType();		//Site

        	var popupId = "SCH_PRODUCTDEFID_TOP";
        	var oArg = {};
        	var opts = "width=850,height=500";

        	// 기 입력값 있는지 확인
        	var nSearch = this.tab_search.tabpage_repackingSearch.form.edt_prodId.value;

        	if(!this.gfn_isNull(nSearch))
        	{
        		// 기입력된 값이 있으면
        		oArg.arg_prodId = nSearch;
        	}

        	this.gfn_openPopup(popupId,"pcm::PCM09400P.xfdl" ,oArg ,opts);
        };

        /*
         * 검색조건 초기화
         */
        this.fn_formInit = function(obj,e)
        {
        	var nTabIdx = this.div_work.form.tab_work.tabindex;

        	if(nTabIdx == 0)
        	{
        		this.fn_searchPackReset();
        	}
        	else
        	{
        		this.fn_searchRePackReset();
        	}


        };

        /*
         * 조회기간 구분 콤보 변경시 달력 설정 (실적조회)
         */
        this.tab_search_tabpage_packingSearch_cbo_period_onitemchanged = function(obj,e)
        {
        	var val = this.tab_search.tabpage_packingSearch.form.cbo_period.value; //var val = e.postvalue

        	if(this.gfn_isNull(val)) return;

        	var sDate 		= this.nfn_getCurrentSystemTime(0,0,val);
        	var arrDate 	= sDate.split(",");
        	var sDateFrom 	= arrDate[1];
        	var sDateTo 	= arrDate[2];
        	var sTime 		= "0830";

        	var dateFrom = this.tab_search.tabpage_packingSearch.form.div_dateFrom.form.calStart.value;
        	var dateTo = this.tab_search.tabpage_packingSearch.form.div_dateTo.form.calStart.value;

        	if(!this.gfn_isNull(dateFrom) && dateTo.length>=12){
        		sTime = dateTo.substring(8,12);
        	}
        	this.tab_search.tabpage_packingSearch.form.div_dateFrom.form.calStart.set_value(sDateFrom+sTime);

        	if(!this.gfn_isNull(dateTo) && dateTo.length==12){
        		sTime = dateTo.substring(8,12);
        	}
        	this.tab_search.tabpage_packingSearch.form.div_dateTo.form.calStart.set_value(sDateTo+sTime);
        };

        /*
         * 포장인계 - 품목코드
         */
        this.tab_search_tabpage_packingSearch_btn_prodId_onclick = function(obj,e)
        {
        	var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        	var nSite 			= this.gf_getSiteType();		//Site

        	var popupId = "SCH_PRODUCTDEFID";
        	var oArg 	= {};
        	var opts 	= "width=850,height=500";

        	// 그리드 내 입력값 있으면
        	var nSearch = this.tab_search.tabpage_packingSearch.form.edt_prodId.value;

        	if(!this.gfn_isNull(nSearch))
        	{
        		// 기입력된 값이 있으면
        		oArg.arg_prodId = nSearch;
        	}

        	oArg.arg_rtnCols = "PRODUCTDEF|PRODUCTDEFNAME";				// 리턴 받을값

        	this.gfn_openPopup(popupId,"pcm::PCM08400P.xfdl" ,oArg ,opts);
        };

        /*
         * 포장인계 - 작업장id 조회
         */
        this.tab_search_tabpage_packingSearch_btn_workarea_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType());
        	sArgs += this.gfn_setParam("USERID", this.gf_getUserId());

        	this.fn_openPop("AREA_ID","P00148", sArgs); //작업장 조회
        };
        /*
         * 포장인계 - Lot No 조회
         */
        this.tab_search_tabpage_packingSearch_btn_lotNo_onclick = function(obj,e)
        {
        	var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        	var nSite 			= this.gf_getSiteType();		//Site

        	var popupId = "SCH_LOTNO";
        	var oArg = {};
        	var opts = "width=850,height=500";

        	// 그리드 내 입력값 있으면
        	var nSearch = this.tab_search.tabpage_packingSearch.form.edt_lotNo.value;

        	if(!this.gfn_isNull(nSearch))
        	{
        		// 기입력된 값이 있으면
        		oArg.arg_lotId = nSearch;
        	}
        	oArg.arg_rtnCol = "LOTID";				// 리턴 받을값

        	this.gfn_openPopup(popupId,"pcm::PCM08401P.xfdl" ,oArg ,opts);
        };

        /*
         * 포장인계 - ROW 변경시
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
            this.tab_search.tabpage_packingSearch.form.btn_prodId.addEventHandler("onclick",this.tab_search_tabpage_packingSearch_btn_prodId_onclick,this);
            this.tab_search.tabpage_packingSearch.form.div_dateFrom.addEventHandler("onkeydown",this.fn_preiodChang,this);
            this.tab_search.tabpage_packingSearch.form.cbo_period.addEventHandler("onitemchanged",this.tab_search_tabpage_packingSearch_cbo_period_onitemchanged,this);
            this.tab_search.tabpage_packingSearch.form.div_dateTo.addEventHandler("onkeydown",this.fn_preiodChang,this);
            this.tab_search.tabpage_packingSearch.form.btn_workarea.addEventHandler("onclick",this.tab_search_tabpage_packingSearch_btn_workarea_onclick,this);
            this.tab_search.tabpage_packingSearch.form.btn_lotNo.addEventHandler("onclick",this.tab_search_tabpage_packingSearch_btn_lotNo_onclick,this);
            this.tab_search.tabpage_packingSearch.form.btn_searchClear.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.tabpage_repackingSearch.form.btn_searchClear.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.tabpage_repackingSearch.form.cal_startDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.tabpage_repackingSearch.form.cal_endDt.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.tabpage_repackingSearch.form.edt_prodId.addEventHandler("onkeydown",this.div_work_div_search_edt_itemId_onkeydown,this);
            this.tab_search.tabpage_repackingSearch.form.btn_prodId.addEventHandler("onclick",this.div_work_div_search_btn_itemId_onclick,this);
            this.div_work.form.tab_work.addEventHandler("onchanged",this.div_work_tab_work_onchanged,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_main.addEventHandler("onrowposchanged",this.ds_main_onrowposchanged,this);
        };
        this.loadIncludeScript("PCM08400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
