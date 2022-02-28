(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM05900M");
            this.set_titletext("품목별 진행현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_main", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INVENTORY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"TYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE_0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDIVISION\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ISHOLD\" type=\"STRING\" size=\"256\"/><Column id=\"SUMMARYTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEF\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTSEGMENT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_ProdVersion", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFVERSIONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSIONNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_wipList", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSUOM\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVEPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SELFINSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPINSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"STAYINGHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"SENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVETIME\" type=\"STRING\" size=\"256\"/><Column id=\"SELFINSPECTIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPINSPECTIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_resultList", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSUOM\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_MMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECT_PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECT_PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECT_MMQTY\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"STAYINGHOUR\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIVETIME\" type=\"STRING\" size=\"256\"/><Column id=\"SELFINSPECTIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKSTARTTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPINSPECTIONDATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"SENDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_headgrdList", this);
            obj._setContents("<ColumnInfo><Column id=\"COLUMNS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mainProcesssegmentid", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"INVENTORY\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"TYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE_0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tab_page",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Combo("cbo_ISHOLD","108","235","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("9");
            obj.set_innerdataset("");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_SUMMARYTYPE","108","cbo_ISHOLD:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("10");
            obj.set_innerdataset("");
            obj.set_codecolumn("C,SummaryType,,Y,Y");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"cbo_SUMMARYTYPE:0","45","20","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("17");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","Static12_00_00_00_01_00_00:0","102","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_search","15","Static12_00_00_00_01_00_00:0","146","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("13");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("14");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("15");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("16");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","Static12_00_00_00_01_00_00:6","10","27",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("18");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PLANTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("19");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PLANT");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","10","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_hotkey("F2");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PERIODTYPE","15","60","88","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("30");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFID","0","cbo_PERIODTYPE:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("20");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("ITEMCODE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Div("div_dateTo","108","60",null,"20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("2");
            obj.set_url("common::com_calendar.xfdl");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","div_dateTo:5",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("3");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"div_dateTo:5","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFVERSION","0","sta_PRODUCTDEFID:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("22");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","108","edt_PRODUCTDEFID:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("4");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFNAME","0","sta_PRODUCTDEFVERSION:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("23");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","cbo_PRODUCTDEFVERSION:5",null,"20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("5");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTIONTYPE","0","sta_PRODUCTDEFNAME:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("24");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTIONTYPE","108","edt_PRODUCTDEFNAME:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDIVISION","108","cbo_PRODUCTIONTYPE:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDIVISION","0","sta_PRODUCTIONTYPE:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("25");
            obj.set_tooltiptext("THEPRODUCTTYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_WORKTYPE","0","sta_PRODUCTDIVISION:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("26");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WORKTYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_WORKTYPE","108","cbo_PRODUCTDIVISION:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,LotWorkType,ALL,Y,Y");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_ISHOLD","0","sta_WORKTYPE:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("보류여부");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("27");
            obj.set_tooltiptext("ISHOLD");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_SUMMARYTYPE","0","sta_ISHOLD:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("집계구분");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_taborder("28");
            obj.set_tooltiptext("CONSTATISTICSTYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("29");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("C6A85700415446D89213292978260263");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Div("div_dateFrom","108","35",null,"20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("1");
            obj.set_url("common::com_calendar.xfdl");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","143","34",null,null,null,null,null,null,this);
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

            obj = new Grid("grd_main","0","34",null,null,"0","477",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_main");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"220\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"90\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"100\" band=\"left\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell col=\"2\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"3\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"4\" text=\"INVENTORY\"/><Cell col=\"5\" text=\"PCS/PNL\" tooltiptext=\"PCSPNL\"/><Cell col=\"6\" text=\"구분\" tooltiptext=\"TYPENAME\"/><Cell col=\"7\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\" suppress=\"1\" suppressalign=\"middle\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\" suppress=\"2\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" suppress=\"3\" suppressalign=\"middle\"/><Cell col=\"4\" text=\"bind:INVENTORY\" suppress=\"4\" suppressalign=\"middle\"/><Cell col=\"5\" suppress=\"5\" text=\"bind:PCSPNL\" suppressalign=\"middle\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:TYPENAME\"/><Cell col=\"7\" text=\"bind:VALUE_TOTAL\" cssclass=\"expr:dataset.getColumn(currow, &quot;TYPE&quot;)==&quot;3&quot;?&apos;cell_red&apos;:dataset.getColumn(currow, &quot;TYPE&quot;)==&quot;1&quot; &amp;&amp; dataset.getColumn(currow, &quot;PRODUCTDEFID&quot;)!=&quot;합계&quot;?&apos;cell_bg_yellow&apos;:dataset.getColumn(currow, &quot;TYPE&quot;)==&quot;1&quot; &amp;&amp; dataset.getColumn(currow, &quot;PRODUCTDEFID&quot;)==&quot;합계&quot;?&apos;cell_bg_blue&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_main",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subMainTitle","0","0","60","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("재공현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("WIPLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_main","sta_subMainTitle:2","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_Main","0","grd_main:5",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            obj.set_positionstep("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_Main);
            obj.set_text("재공현황");
            obj.set_tooltiptext("WIPLIST");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","89","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("재공현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("WIPLIST");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_wipList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_wipList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"220\"/><Column size=\"180\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"2\" rowspan=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"3\" rowspan=\"2\" text=\"공정UOM\" tooltiptext=\"PROCESSUOM\"/><Cell col=\"4\" colspan=\"4\" text=\"수량\" tooltiptext=\"OSPDAY26QTY\"/><Cell col=\"8\" rowspan=\"2\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell col=\"9\" rowspan=\"2\" text=\"체공시간\" tooltiptext=\"DELAYTIME\"/><Cell col=\"10\" colspan=\"4\" text=\"시간\" tooltiptext=\"TIME\"/><Cell row=\"1\" col=\"4\" text=\"인수대기\" tooltiptext=\"WAITFORRECEIVE\"/><Cell row=\"1\" col=\"5\" text=\"인수\" tooltiptext=\"ACCEPT\"/><Cell row=\"1\" col=\"6\" text=\"작업시작\" tooltiptext=\"WORKSTARTLEADTIME\"/><Cell row=\"1\" col=\"7\" text=\"작업완료\" tooltiptext=\"WORKEND\"/><Cell row=\"1\" col=\"10\" text=\"인수대기\" tooltiptext=\"WAITFORRECEIVE\"/><Cell row=\"1\" col=\"11\" text=\"인수\" tooltiptext=\"ACCEPT\"/><Cell row=\"1\" col=\"12\" text=\"작업시작\" tooltiptext=\"WORKSTARTLEADTIME\"/><Cell row=\"1\" col=\"13\" text=\"작업완료\" tooltiptext=\"WORKEND\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"1\" textAlign=\"left\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\" text=\"bind:LOTID\"/><Cell col=\"2\" textAlign=\"left\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"3\" text=\"bind:PROCESSUOM\"/><Cell col=\"4\" textAlign=\"right\" displaytype=\"number\" text=\"bind:SENDPCSQTY\"/><Cell col=\"5\" textAlign=\"right\" displaytype=\"number\" text=\"bind:RECEIVEPCSQTY\"/><Cell col=\"6\" textAlign=\"right\" displaytype=\"number\" text=\"bind:WORKSTARTPCSQTY\"/><Cell col=\"7\" textAlign=\"right\" displaytype=\"number\" text=\"bind:WORKENDPCSQTY\"/><Cell col=\"8\" textAlign=\"left\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\" text=\"bind:AREANAME\"/><Cell col=\"9\" textAlign=\"right\" displaytype=\"number\" text=\"bind:STAYINGHOUR\"/><Cell col=\"10\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" text=\"bind:SENDTIME\"/><Cell col=\"11\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" text=\"bind:RECEIVETIME\"/><Cell col=\"12\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" text=\"bind:WORKSTARTTIME\"/><Cell col=\"13\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" text=\"bind:WORKENDTIME\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_wipList","staTitle:-20","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_Main);
            obj.set_text("실적 현황");
            obj.set_tooltiptext("WORKRESULT");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","110","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("실적 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("WORKRESULT");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_resultList","staTitle:-30","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_resultList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_resultList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"220\"/><Column size=\"180\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"2\" rowspan=\"2\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"3\" rowspan=\"2\" text=\"공정UOM\" tooltiptext=\"PROCESSUOM\"/><Cell col=\"4\" colspan=\"3\" text=\"실적\" tooltiptext=\"FIGURE\"/><Cell col=\"7\" colspan=\"3\" text=\"불량\" tooltiptext=\"DEFECT\"/><Cell col=\"10\" rowspan=\"2\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell col=\"11\" rowspan=\"2\" text=\"체공시간\" tooltiptext=\"DELAYTIME\"/><Cell col=\"12\" colspan=\"4\" text=\"시간\" tooltiptext=\"TIME\"/><Cell row=\"1\" col=\"4\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"5\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"6\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"7\" text=\"PNL\" tooltiptext=\"OSPDAY01PNL\"/><Cell row=\"1\" col=\"8\" text=\"PCS\" tooltiptext=\"OSPDAY21PCS\"/><Cell row=\"1\" col=\"9\" text=\"MM\" tooltiptext=\"OSPDAY09MM\"/><Cell row=\"1\" col=\"12\" text=\"인수\" tooltiptext=\"ACCEPT\"/><Cell row=\"1\" col=\"13\" text=\"작업시작\" tooltiptext=\"WORKSTARTLEADTIME\"/><Cell row=\"1\" col=\"14\" text=\"작업완료\" tooltiptext=\"WORKEND\"/><Cell row=\"1\" col=\"15\" text=\"인계\" tooltiptext=\"WIPSENDQTY2\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\"/><Cell col=\"1\" textAlign=\"left\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\" text=\"bind:LOTID\"/><Cell col=\"2\" textAlign=\"left\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\" text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"3\" text=\"bind:PROCESSUOM\"/><Cell col=\"4\" textAlign=\"right\" displaytype=\"number\" text=\"bind:RESULT_PNLQTY\"/><Cell col=\"5\" textAlign=\"right\" displaytype=\"number\" text=\"bind:RESULT_PCSQTY\"/><Cell col=\"6\" textAlign=\"right\" displaytype=\"number\" text=\"bind:RESULT_MMQTY\"/><Cell col=\"7\" textAlign=\"right\" displaytype=\"number\" text=\"bind:DEFECT_PNLQTY\"/><Cell col=\"8\" textAlign=\"right\" displaytype=\"number\" text=\"bind:DEFECT_PCSQTY\"/><Cell col=\"9\" textAlign=\"right\" displaytype=\"number\" text=\"bind:DEFECT_MMQTY\"/><Cell col=\"10\" textAlign=\"left\" cssclass=\"expr:dataset.getColumn(currow, &quot;STAYINGLOCK&quot;)==&quot;Staying&quot;?&apos;cell_red&apos;:&apos;&apos;\" text=\"bind:AREANAME\"/><Cell col=\"11\" textAlign=\"right\" displaytype=\"number\" text=\"bind:STAYINGHOUR\"/><Cell col=\"12\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" text=\"bind:RECEIVETIME\"/><Cell col=\"13\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" text=\"bind:WORKSTARTTIME\"/><Cell col=\"14\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" text=\"bind:WORKENDTIME\"/><Cell col=\"15\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" text=\"bind:SENDTIME\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
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

            obj = new Static("sta_title","30","16","150","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("화면명");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.tab_page.form.cbo_PLANTID","value","ds_search","PLANTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.tab_page.form.edt_PRODUCTDEFID","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.tab_page.form.cbo_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.tab_page.form.edt_PRODUCTDEFNAME","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.tab_page.form.cbo_PRODUCTIONTYPE","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_search.tab_page.form.cbo_PRODUCTDIVISION","value","ds_search","PRODUCTDIVISION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab_search.tab_page.form.cbo_WORKTYPE","value","ds_search","WORKTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_search.tab_page.form.cbo_ISHOLD","value","ds_search","ISHOLD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.tab_page.form.cbo_SUMMARYTYPE","value","ds_search","SUMMARYTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.tab_page.form.cbo_PERIODTYPE","value","ds_search","PERIODTYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_calendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PCM05900M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM05900M.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("PCM05900M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM05900M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 품목별 진행현황
         * 파일명 		: PCM05900M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2021.05.17
         *
         * 설  명		:  품목별 진행현황 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.17	박대호   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.tab_page.form;


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// 초기화 (공통)
        	this.nfn_formInit(obj);

        	// 검색조건 공통 콤보 설정
        	this.fn_initCombo();
        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색(메인 -  고객정보 그리드)
         */
        this.fn_search = function (obj, e)
        {
        	if(this.fn_searchValidate() == false) return;
        	this.ds_main.clearData();
        	this.ds_headgrdList.clearData();
        	this.div_work.form.grd_main.set_formats(this.div_work.form.grd_main.formats);
        	this.ds_wipList.clearData();
        	this.ds_resultList.clearData();
        	this.fn_searchInit();

         	var sSvcID 			= "selectprogressperproduct";
         	var sController 	= "/pcm05900/selectprogressperproduct.do";
         	var sInDatasets 	= "INPUT=ds_search";
         	var sOutDatasets 	= "ds_headgrdList=output1 ds_main=output2";
         	var sArgs 			= "";
         	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        this.fn_searchValidate = function ()
        {
        	var component = this.tab_search.tab_page;
        	var strColIdList = "edt_PRODUCTDEFID";
        	var strColNmList = "PRODUCTDEFID";
        	var result = this.nfn_MandatoryCheck(component, strColIdList, strColNmList)
        	if(!result)
        	{
        		return result;
        	}
        	strColIdList = "cbo_SUMMARYTYPE";
        	strColNmList = "SUMMARYTYPE";
        	return this.nfn_MandatoryCheck(component, strColIdList, strColNmList);


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
           this.fn_initCombo();
           this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
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
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}

        	switch(trId)
        	{
        		case "selectEcmLookupValuesVList2ds_CSiteTypeALL" :
        		{
        			this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        			break;
        		}
         		case "selectprogressperproduct" :
         		{
        			if(this.ds_main.rowcount > 0)
        			{
        				this.fn_createProgressPerProductList();//피벗 생성
        				//조회시 PROCESSSEGMENTID 그리드에 표시하지 않기위해 데이터 COPY 후 그리드 데이터 삭제
        				for(var r = 1; r < this.ds_main.rowcount ; r++)
        				{
        					this.ds_mainProcesssegmentid.copyRow(this.ds_mainProcesssegmentid.addRow(), this.ds_main, r);
        					if(this.ds_main.getColumn(r, "TYPE") == "4")
        					{
        						this.ds_main.deleteRow(r);
        					}
        				}
        				this.div_work.form.sta_cnt_ds_main.set_text( "Count : <fc v='#f31d24'>" + this.ds_main.getRowCount() + "</fc>");
        			}
         			break;
         		}
        		default:
        		{
        		}
        		break;
        	}

        };




        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if (this.nfn_isNull(rtn))
        	{
        		return;
        	};

        	switch (sPopupId)
        	{
        		case "POPUP_PRODUCTDEFID" :
        		{//PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME

        			this.setProduct_ProdVersion(rtn, this.ds_cbo_ProdVersion, this.ds_search, "C");
        			rtn = this.gfn_split(rtn, ",");
        			if (rtn.length == 3)
        			{

        				this.tab_search.tab_page.form.edt_PRODUCTDEFID.set_value(rtn[0]);
        				this.tab_search.tab_page.form.edt_PRODUCTDEFNAME.set_value(rtn[2]);
        				this.ds_search.setColumn(0, "PRODUCTDEFVERSION", rtn[1]);
        				this.ds_search.setColumn(0, "PRODUCTDEF", rtn[0] + "|" + rtn[1]);
        			}
        			else
        			{
        				var valueId = [];
        				var	valueProductdef = [];
        				var valueName = [];
        				for (var i = 0; i < rtn.length; i++)
        				{
        					if ((i % 3) == 0)
        					{
        						valueId.push(rtn[i]);
        						valueProductdef.push(rtn[i] + "|" + rtn[i + 1]);
        					}
        					else if ((i % 3) == 2)
        					{
        						valueName.push(rtn[i]);
        					}

        				}
        				this.tab_search.tab_page.form.edt_PRODUCTDEFID.set_value(valueId.join(","));
        				this.tab_search.tab_page.form.edt_PRODUCTDEFNAME.set_value("");
        				this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");
        				this.ds_search.setColumn(0, "PRODUCTDEF", valueProductdef.join(","));
        			}
        		}
        		break;
        	};
        };

         /*
         * 기능(공통팝업) : 조회
         */
        this.fn_openPop = function(svcId, popId, pArg)
        {

        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        	this.ds_cbo_ProdVersion.deleteAll();
        	this.AddAll(this.ds_cbo_ProdVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");
        	this.ds_search.setColumn(0, "PRODUCTDEFID", "");
        	this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        	this.ds_search.setColumn(0, "ISHOLD", "N");
        	this.ds_search.setColumn(0, "SUMMARYTYPE", "LOT");
        	this.fn_formInit();
        }

        /*
         * 기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */

        this.fn_changeCalendar = function() {
        	this.tab_search.tab_page.form.cbo_periodType.set_value(null);
        };
        this.fn_formInit = function ()
        {
        	this.ds_search.setColumn(0,"PERIODTYPE","THISDAY");
        	this.fn_setDate("THISDAY");
        };
        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	if (this.nfn_isNull(periodType)) return false;

        	var sDate = this.nfn_getCurrentSystemTime(0, 0, periodType.toLowerCase());
        	var arrDate = sDate.split(",");
        	var sDateFrom = arrDate[1];
        	var sDateTo = arrDate[2];
        	var sTime = "0830";

        	if(periodType == "THISDAY")//금일
         	{
        		if(this.gfn_svrTodayTime().substr(0, 12) >= sDate.substr(0, 8)+sTime)//금일 8시30분 이후면 당일로 지정
        		{
        			this.tab_search.tab_page.form.div_dateFrom.form.calStart.set_value(sDate.substr(0, 8)+sTime);
        			this.tab_search.tab_page.form.div_dateTo.form.calStart.set_value(sDate);
        		}
        		else//금일 8시30분 이전이면 전일로 지정
        		{
        			var lastDay = this.gfn_addDate(sDate.substr(0, 8), -1);
        			this.tab_search.tab_page.form.div_dateFrom.form.calStart.set_value(lastDay.substr(0, 8)+sTime);
        			this.tab_search.tab_page.form.div_dateTo.form.calStart.set_value(sDate);
        		}

         	}
         	else if (periodType == "LASTDAY")//전일
         	{
         		var lastDay = this.gfn_addDate(sDate.substr(0, 8), -1);
         		this.tab_search.tab_page.form.div_dateFrom.form.calStart.set_value(lastDay+sTime);
         		this.tab_search.tab_page.form.div_dateTo.form.calStart.set_value(sDate.substr(0, 8)+sTime);
         	}
         	else
         	{
         		this.tab_search.tab_page.form.div_dateFrom.form.calStart.set_value(sDateFrom+sTime);
         		this.tab_search.tab_page.form.div_dateTo.form.calStart.set_value(sDateTo+sTime);
         	}

        };
        /*
         *	검색전 작업
         */
        this.fn_searchInit = function ()
        {
        	this.ds_search.setColumn(0, "PERIOD_PERIODFR", this.tab_search.tab_page.form.div_dateFrom.form.calStart.value);
        	this.ds_search.setColumn(0, "PERIOD_PERIODTO", this.tab_search.tab_page.form.div_dateTo.form.calStart.value);
        };
        /*
         * 기능 : 'Site' 콤보 조회
         */
        this.fn_initSiteCombo = function ()
        {

        }

        /*
         * 기능 : 피벗테이블 생성
         */
         this.fn_createProgressPerProductList = function ()
        {

        	this.div_work.form.grd_main.set_enableredraw(false);
        	this.ds_mainProcesssegmentid.clear();
        	this.ds_mainProcesssegmentid.addColumn( "PRODUCTDEFID",          "STRING", 255);
        	this.ds_mainProcesssegmentid.addColumn( "PRODUCTDEFVERSION",     "STRING", 255);
        	this.ds_mainProcesssegmentid.addColumn( "TYPE",     			 "STRING", 255);
        	this.ds_mainProcesssegmentid.addColumn( "VALUE_TOTAL",               "STRING", 255);
        	//컬럼추가
        	for(var c = 1; c < this.ds_headgrdList.rowcount ; c++)
        	{
        		var colIdx1 = 0;

        		colIdx1 = this.div_work.form.grd_main.appendContentsCol("body");

        		//헤더명
        		this.div_work.form.grd_main.setCellProperty("head", c + 7, "text", this.ds_headgrdList.getColumn(c, "COLUMNS"));

          		this.div_work.form.grd_main.setFormatColProperty(colIdx1 , "size", 100);
        		this.div_work.form.grd_main.setCellProperty("body", colIdx1 , "textAlign", "left");
        		this.div_work.form.grd_main.setCellProperty("body", colIdx1 , "displaytype", "normal");
        		this.div_work.form.grd_main.setCellProperty("body", colIdx1 , "cssclass", "expr:dataset.getColumn(currow, \"TYPE\")==\"3\"?'cell_red':"
        																					+ "dataset.getColumn(currow, \"TYPE\")==\"1\" && dataset.getColumn(currow, \"PRODUCTDEFID\")!=\"합계\"?'cell_bg_yellow':"
        																					+ "dataset.getColumn(currow, \"TYPE\")==\"1\" && dataset.getColumn(currow, \"PRODUCTDEFID\")==\"합계\"?'cell_bg_blue':''");
          		//this.div_work.form.grd_main.setCellProperty("body", colIdx1 , "text", "bind:" + "VALUE_" + this.ds_headgrdList.getColumn(c, "COLUMNS"));
        		this.div_work.form.grd_main.setCellProperty("body", colIdx1 , "text", "bind:" + "VALUE_" + this.ds_headgrdList.getColumn(c, "PROCESSSEGMENTID"));


        		//this.ds_mainProcesssegmentid.addColumn( "VALUE_" + this.ds_headgrdList.getColumn(c, "COLUMNS"),               "STRING", 255);
        		this.ds_mainProcesssegmentid.addColumn( "VALUE_" + this.ds_headgrdList.getColumn(c, "PROCESSSEGMENTID"),               "STRING", 255);
        	}

        	//trace(this.ds_mainProcesssegmentid.saveXML());

        	this.div_work.form.grd_main.set_enableredraw(true);
        }
        /*
         * 기능 : 재공현황 조회
         */
        this.GetWipList = function ()
        {
        	if(this.fn_searchValidate() == false) return;
        	this.ds_wipList.clearData();


         	var sSvcID 			= "selectProgressPerProductWipList";
         	var sController 	= "/pcm05900/selectProgressPerProductWipList.do";
         	var sInDatasets 	= "INPUT=ds_search";
         	var sOutDatasets 	= "ds_wipList=output";
         	var sArgs 			= "";
         	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        /*
         * 기능 : 실적현황 조회
         */
        this.GetResultList = function ()
        {
        	if(this.fn_searchValidate() == false) return;
        	this.ds_resultList.clearData();

         	var sSvcID 			= "selectProgressPerProductResultList";
         	var sController 	= "/pcm05900/selectProgressPerProductResultList.do";
         	var sInDatasets 	= "INPUT=ds_search";
         	var sOutDatasets 	= "ds_resultList=output";
         	var sArgs 			= "";
         	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search_Tabpage1_cbo_periodType_onitemchanged = function(obj,e)
        {
        	if(!this.nfn_isNull(e.postvalue)) {
        		this.fn_setDate(e.postvalue);
        	}
        };

        this.tab_search_Tabpage1_div_dateTo_onkeyup = function(obj,e)
        {
        	this.fn_changeCalendar();
        };

        this.tab_search_Tabpage1_div_dateFrom_onkeyup = function(obj,e)
        {
        	this.fn_changeCalendar();
        };
        /*
         *	기능 : 조회기간콤보 변경시
         */
        this.tab_search_tab_page_cbo_PERIODTYPE_onitemchanged = function(obj,e)
        {
        	if(!this.nfn_isNull(e.postvalue)) {
        		this.fn_setDate(e.postvalue);
        	}
        };
        /*
         *	기능 : 품목코드 검색 버튼 클릭 시
         */
        this.tab_search_tab_page_btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	var oArg = {};

        	if (this.tab_search.tab_page.form.edt_PRODUCTDEFID.value != "")
        	{
        		oArg.arg_type        = "CA";
        	}
        	else
        	{
        		oArg.arg_type        = "C";
        	}
        	oArg.arg_popupCd     = "P00211";
        	oArg.arg_popupNm     = "품목 선택";
        	oArg.arg_rtnCols     = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME";
        	oArg.arg_paramCols   = "P_POPTYPE";
        	oArg.arg_paramValues = "PRODUCTDEFINITION";
        	oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + this.tab_search.tab_page.form.edt_PRODUCTDEFID.value;
        	this.gfn_openPopup( "POPUP_PRODUCTDEFID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };
        /*
         *	기능 : 재공현황 그리드 클릭 시
         */
        this.div_work_grd_main_oncellclick = function(obj,e)
        {
        	if(e.cell > 6)
        	{
        		var productSegments = "";
        		var productdefId = [];
        		var productdefVersion = [];
        		var colName = obj.getCellProperty("Body", e.cell, "text").replace("bind:","");

        		for(var r = 0; r < this.ds_mainProcesssegmentid.rowcount ; r++)
        		{
        			//합계실적 클릭시 PRODUCTSEGMENT 만들기 위한 productdefId, productdefVersion 생성
        			if(this.ds_main.getColumn(r, "TYPE") == "1" && this.ds_main.getColumn(r, "PRODUCTDEFID") != "합계")
        			{
        				productdefId.push(this.ds_main.getColumn(r, "PRODUCTDEFID"));
        				productdefVersion.push(this.ds_main.getColumn(r, "PRODUCTDEFVERSION"));
        			}
        			if(this.ds_mainProcesssegmentid.getColumn(r, "PRODUCTDEFID") == this.ds_main.getColumn(e.row, "PRODUCTDEFID") &&
        			this.ds_mainProcesssegmentid.getColumn(r, "PRODUCTDEFVERSION") == this.ds_main.getColumn(e.row, "PRODUCTDEFVERSION")&&
        			this.ds_mainProcesssegmentid.getColumn(r, "TYPE") == "4")
        			{

        				//if(this.ds_mainProcesssegmentid.getColumn(r, "VALUE_" + (e.cell - 7)) == "TOTAL")
        				if (this.nfn_isEqualCol(obj, e.cell, "VALUE_TOTAL"))
        					productSegments = this.ds_main.getColumn(e.row, "PRODUCTDEFID") + "|" + this.ds_main.getColumn(e.row, "PRODUCTDEFVERSION") +"|*";
        				else
        					productSegments = this.ds_main.getColumn(e.row, "PRODUCTDEFID") + "|" + this.ds_main.getColumn(e.row, "PRODUCTDEFVERSION") + "|" + this.ds_mainProcesssegmentid.getColumn(r, colName);

        				//합계 클릭시 PRODUCTSEGMENT 생성
        				if(this.ds_main.getColumn(e.row, "PRODUCTDEFID") == "합계")
        				{
        					productSegments = "";
        					for(var i = 0; i < productdefId.length ; i++)
        					{
        						if(i != 0)
        							productSegments += ",";
        						//if(this.ds_mainProcesssegmentid.getColumn(r, "VALUE_" + (e.cell - 7)) == "TOTAL")
        						if (this.nfn_isEqualCol(obj, e.cell, "VALUE_TOTAL"))
        							productSegments += productdefId[i] + "|" + productdefVersion[i] + "|*";
        						else
        							productSegments += productdefId[i] + "|" + productdefVersion[i] + "|" + this.ds_mainProcesssegmentid.getColumn(r, colName);
        					}
        				}

        			}
        		}
        		this.ds_search.setColumn(0, "PRODUCTSEGMENT", productSegments);

        		//재공
        		if(this.ds_main.getColumn(e.row, "TYPE") == "2")
        		{
        			//탭이동
        			this.div_work.form.tab_Main.set_tabindex(0);
        			this.GetWipList();
        		}//실적
        		else if(this.ds_main.getColumn(e.row, "TYPE") == "3")
        		{
        			//탭이동
        			this.div_work.form.tab_Main.set_tabindex(1);
        			this.GetResultList();
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.tab_page.form.cbo_ISHOLD.addEventHandler("onitemchanged",this.tab_search_tab_page_cbo_INNERREVISIONTOTAL_onitemchanged,this);
            this.tab_search.tab_page.form.cbo_SUMMARYTYPE.addEventHandler("onitemchanged",this.tab_search_tab_page_cbo_INNERREVISIONTOTAL_onitemchanged,this);
            this.tab_search.tab_page.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.tab_page.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.tab_page.form.cbo_PERIODTYPE.addEventHandler("onitemchanged",this.tab_search_tab_page_cbo_PERIODTYPE_onitemchanged,this);
            this.tab_search.tab_page.form.div_dateTo.addEventHandler("onkeyup",this.tab_search_Tabpage1_div_dateTo_onkeyup,this);
            this.tab_search.tab_page.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_tab_page_btn_PRODUCTDEFID_onclick,this);
            this.tab_search.tab_page.form.div_dateFrom.addEventHandler("onkeyup",this.tab_search_Tabpage1_div_dateFrom_onkeyup,this);
            this.div_work.form.grd_main.addEventHandler("oncellclick",this.div_work_grd_main_oncellclick,this);
            this.div_work.form.tab_Main.Tabpage1.form.grd_wipList.addEventHandler("oncelldblclick",this.div_work_tab_Main_Tabpage1_grd_stanbyLot_oncelldblclick,this);
            this.div_work.form.tab_Main.Tabpage2.form.grd_resultList.addEventHandler("oncelldblclick",this.div_work_tab_Main_Tabpage1_grd_stanbyLot_oncelldblclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("PCM05900M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
