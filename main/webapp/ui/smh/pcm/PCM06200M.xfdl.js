(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM06200M");
            this.set_titletext("생산입고 실적");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_main", this);
            obj._setContents("<ColumnInfo><Column id=\"CLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENTSTATUS\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RELEASEHOLDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"UOM\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"OSPMM\" type=\"STRING\" size=\"256\"/><Column id=\"AMOUNTS\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDUSER\" type=\"STRING\" size=\"256\"/><Column id=\"TOPPROCESSSEGMENTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLEPROCESSSEGMENTCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"CLASSIFY\" type=\"STRING\" size=\"256\"/><Column id=\"PCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"RELEASECOMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"RELEASEUSER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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


            obj = new Dataset("ds_byDay", this);
            obj._setContents("<ColumnInfo><Column id=\"RESULTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPORTPACKINGTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTMM\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"CUMPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CUMPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CUMMM\" type=\"STRING\" size=\"256\"/><Column id=\"CUMPRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_byProduct", this);
            obj._setContents("<ColumnInfo><Column id=\"INBOUNDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTPRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PACKINGTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPORTPACKINGTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"CALVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTMM\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"FPCBPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"SMTPRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_byLot", this);
            obj._setContents("<ColumnInfo><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LAYER\" type=\"STRING\" size=\"256\"/><Column id=\"ISSMT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREHOUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPORTPACKINGTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STARTEDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SENDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTPCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTMM\" type=\"STRING\" size=\"256\"/><Column id=\"RESULTPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"FPCBUNITPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"FPCBPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"SMTUNITPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"SMTPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"SMTAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPMENTAREANAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_test", this);
            obj._setContents("");
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

            obj = new Combo("cbo_RESULTTYPE","108","210","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,ProductionResultType,ALL,Y,Y");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"cbo_RESULTTYPE:0","45","20","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("15");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","Static12_00_00_00_01_00_00:0","102","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_search","15","Static12_00_00_00_01_00_00:0","146","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("11");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("12");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("13");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("14");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","Static12_00_00_00_01_00_00:6","10","27",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("16");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PLANTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("17");
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

            obj = new Static("sta_SearchPeriod","0","35","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("22");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("C6A85700415446D89213292978260263");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Calendar("cal_STARTDT","108","35","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("1");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PERIODTYPE","15","60","88","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("23");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Calendar("cal_ENDDT","108","60","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("2");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFID","0","85","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("18");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMCODE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","85",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("3");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"85","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFVERSION","0","sta_PRODUCTDEFID:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("20");
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
            obj.set_taborder("21");
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

            obj = new Combo("cbo_WORKTYPE","108","cbo_PRODUCTIONTYPE:5","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,ProductionWorkType,ALL,Y,Y");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_WORKTYPE","0","sta_PRODUCTIONTYPE:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("25");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("WORKTYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_RESULTTYPE","0","sta_WORKTYPE:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("26");
            obj.set_text("실적구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("RESULTTYPE2");
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

            obj = new Tab("tab_Main","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            obj.set_positionstep("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_Main);
            obj.set_text("일별");
            obj.set_tooltiptext("BYDAY");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","110","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("일별 실적현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("WORKINCOMERESULTBYDATE");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_byDay","staTitle:0","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_byDay",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_byDay","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_byDay");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"일자\" tooltiptext=\"DATE\"/><Cell col=\"2\" text=\"실적구분\" tooltiptext=\"RESULTTYPE2\"/><Cell col=\"3\" tooltiptext=\"RESULTPCS\" text=\"실적PCS\"/><Cell col=\"4\" text=\"실적PNL\" tooltiptext=\"RESULTPNL\"/><Cell col=\"5\" text=\"실적MM\" tooltiptext=\"RESULTMM\"/><Cell col=\"6\" tooltiptext=\"RESULTPRICE\" text=\"실적금액\"/><Cell col=\"7\" tooltiptext=\"CUMPCSQTY\" text=\"누계PCS\"/><Cell col=\"8\" text=\"누계PNL\" tooltiptext=\"CUMPNLQTY\"/><Cell col=\"9\" text=\"누계MM\" tooltiptext=\"CUMMM\"/><Cell col=\"10\" text=\"누계금액\" tooltiptext=\"CUMPRICE\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:RESULTDATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" textAlign=\"center\" suppress=\"0\" suppressalign=\"middle\"/><Cell col=\"2\" text=\"bind:EXPORTPACKINGTYPE\" calendardateformat=\"ddd\" displaytype=\"normal\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" textAlign=\"center\" suppress=\"0\" suppressalign=\"middle\"/><Cell col=\"3\" text=\"bind:RESULTPCSQTY\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" suppress=\"0\" suppressalign=\"middle\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:RESULTPNLQTY\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" suppress=\"0\" suppressalign=\"middle\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:RESULTMM\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" suppress=\"0\" suppressalign=\"middle\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:RESULTPRICE\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" suppress=\"0\" suppressalign=\"middle\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:CUMPCSQTY\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" suppress=\"0\" suppressalign=\"middle\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:CUMPNLQTY\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" suppress=\"0\" suppressalign=\"middle\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:CUMMM\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" suppress=\"0\" suppressalign=\"middle\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:CUMPRICE\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" suppress=\"0\" suppressalign=\"middle\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\" tooltiptext=\"SUM\"/><Cell col=\"2\"/><Cell col=\"3\" expr=\"dataset.getSum(&quot;RESULTPCSQTY&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"4\" expr=\"dataset.getSum(&quot;RESULTPNLQTY&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"5\" expr=\"dataset.getSum(&quot;RESULTMM&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"6\" expr=\"dataset.getSum(&quot;RESULTPRICE&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"7\" expr=\"dataset.getSum(&quot;CUMPCSQTY&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"8\" expr=\"dataset.getSum(&quot;CUMPNLQTY&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"9\" expr=\"dataset.getSum(&quot;CUMMM&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"10\" expr=\"dataset.getSum(&quot;CUMPRICE&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab_Main);
            obj.set_text("품목");
            obj.set_tooltiptext("ITEM");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","130","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("품목별 실적현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("WORKRESULTBYPRODUCT");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_byProduct","staTitle:10","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_byProduct",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_byProduct","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage3.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_byProduct");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"입고일자\" tooltiptext=\"INBOUNDDATE\"/><Cell col=\"2\" text=\"고객명\" tooltiptext=\"CUSTOMERNAME\"/><Cell col=\"3\" tooltiptext=\"ITEMCODE\" text=\"품목코드\"/><Cell col=\"4\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"5\" tooltiptext=\"ITEMNAME\" text=\"품목명\"/><Cell col=\"6\" tooltiptext=\"LAYER\" text=\"층수\"/><Cell col=\"7\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell col=\"8\" tooltiptext=\"PRODUCTIONTYPE\" text=\"생산구분\"/><Cell col=\"9\" tooltiptext=\"PACKINGTYPE\" text=\"포장구분\"/><Cell col=\"10\" text=\"실적구분\" tooltiptext=\"RESULTTYPE2\"/><Cell col=\"11\" tooltiptext=\"ARRAY\" text=\"합수\"/><Cell col=\"12\" tooltiptext=\"CALCULATION\" text=\"산출수\"/><Cell col=\"13\" text=\"실적PCS\" tooltiptext=\"RESULTPCS\"/><Cell col=\"14\" tooltiptext=\"RESULTPNL\" text=\"실적PNL\"/><Cell col=\"15\" tooltiptext=\"RESULTMM\" text=\"실적MM\"/><Cell col=\"16\" text=\"실적금액\" tooltiptext=\"RESULTPRICE\"/><Cell col=\"17\" tooltiptext=\"FPCBPRICE\" text=\"FPCB금액\"/><Cell col=\"18\" text=\"SMT금액\" tooltiptext=\"SMTPRICE\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:INBOUNDDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:CUSTOMERNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"6\" text=\"bind:LAYER\" textAlign=\"center\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"7\" text=\"bind:PLANTID\" textAlign=\"center\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"8\" text=\"bind:LOTPRODUCTTYPE\" textAlign=\"center\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"9\" text=\"bind:PACKINGTYPE\" textAlign=\"center\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"10\" text=\"bind:EXPORTPACKINGTYPE\" textAlign=\"center\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"11\" text=\"bind:PCSPNL\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:CALVALUE\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:RESULTPCSQTY\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\"/><Cell col=\"14\" text=\"bind:RESULTPNLQTY\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\"/><Cell col=\"15\" text=\"bind:RESULTMM\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\"/><Cell col=\"16\" text=\"bind:RESULTPRICE\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\"/><Cell col=\"17\" text=\"bind:FPCBPRICE\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\"/><Cell col=\"18\" text=\"bind:SMTPRICE\" textAlign=\"right\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"합계\" tooltiptext=\"TOTALAMOUNT\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"7\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"8\" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"9\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"10\" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"11\" maskeditformat=\"###,###\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;PCSPNL&quot;) \"/><Cell col=\"12\" maskeditformat=\"###,###\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;CALVALUE&quot;) \"/><Cell col=\"13\" expr=\"dataset.getSum(&quot;RESULTPCSQTY&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"14\" expr=\"dataset.getSum(&quot;RESULTPNLQTY&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"15\" expr=\"dataset.getSum(&quot;RESULTMM&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"16\" expr=\"dataset.getSum(&quot;RESULTPRICE&quot;)\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"17\" expr=\"dataset.getSum(&quot;FPCBPRICE&quot;)\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"18\" maskeditformat=\"###,###\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;SMTPRICE&quot;)\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_Main);
            obj.set_text("LOT");
            this.div_work.form.tab_Main.addChild(obj.name, obj);

            obj = new Grid("grd_byLot","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_byLot");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"170\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"고객명\" tooltiptext=\"CUSTOMERNAME\"/><Cell col=\"2\" tooltiptext=\"ITEMCODE\" text=\"품목코드\"/><Cell col=\"3\" text=\"Rev.\" tooltiptext=\"INNERREVISION\"/><Cell col=\"4\" tooltiptext=\"ITEMNAME\" text=\"품목명\"/><Cell col=\"5\" tooltiptext=\"LAYER\" text=\"층수\"/><Cell col=\"6\" tooltiptext=\"ISSMT\" text=\"SMT여부\"/><Cell col=\"7\" tooltiptext=\"LOTID\" text=\"Lot No\"/><Cell col=\"8\" tooltiptext=\"WAREHOUSENAME\" text=\"창고 명\"/><Cell col=\"9\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/><Cell col=\"10\" tooltiptext=\"RESULTTYPE2\" text=\"실적구분\"/><Cell col=\"11\" tooltiptext=\"INPUTDATE\" text=\"투입일자\"/><Cell col=\"12\" text=\"생산입고일자\" tooltiptext=\"PRODUCTINCOMETIME\"/><Cell col=\"13\" tooltiptext=\"OSPDAY21PCS\" text=\"PCS\"/><Cell col=\"14\" tooltiptext=\"OSPDAY01PNL\" text=\"PNL\"/><Cell col=\"15\" text=\"실적MM\" tooltiptext=\"RESULTMM\"/><Cell col=\"16\" tooltiptext=\"RESULTPRICE\" text=\"실적금액\"/><Cell col=\"17\" text=\"FPCB단가\" tooltiptext=\"FPCBUNITPRICE\"/><Cell col=\"18\" text=\"FPCB금액\" tooltiptext=\"FPCBPRICE\"/><Cell col=\"19\" text=\"SMT단가\" tooltiptext=\"SMTUNITPRICE\"/><Cell col=\"20\" text=\"SMT금액\" tooltiptext=\"SMTPRICE\"/><Cell col=\"21\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell col=\"22\" text=\"이전공정명\" tooltiptext=\"PREVPROCESSSEGMENTNAME\"/><Cell col=\"23\" text=\"Site ID\" tooltiptext=\"PLANTID\"/><Cell col=\"24\" text=\"SMT작업장\" tooltiptext=\"SMTAREANAME\"/><Cell col=\"25\" text=\"출하검사작업장\" tooltiptext=\"SHIPMENTAREANAME\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CUSTOMERNAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"5\" text=\"bind:LAYER\" textAlign=\"center\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"6\" text=\"bind:ISSMT\" textAlign=\"center\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"7\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:WAREHOUSENAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:LOTTYPE\" textAlign=\"center\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\"/><Cell col=\"10\" text=\"bind:EXPORTPACKINGTYPE\" textAlign=\"center\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"normal\"/><Cell col=\"11\" text=\"bind:STARTEDDATE\" textAlign=\"center\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"12\" text=\"bind:SENDTIME\" textAlign=\"center\" cssclass=\"expr:WEEK == &apos;1&apos; ?  &apos;cell_bg_green&apos; : &apos;&apos;\" maskeditformat=\"###,###\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"13\" displaytype=\"number\" textAlign=\"right\" text=\"bind:RESULTPCSQTY\"/><Cell col=\"14\" displaytype=\"number\" textAlign=\"right\" text=\"bind:RESULTPNLQTY\"/><Cell col=\"15\" displaytype=\"number\" textAlign=\"right\" text=\"bind:RESULTMM\"/><Cell col=\"16\" displaytype=\"number\" textAlign=\"right\" text=\"bind:RESULTPRICE\"/><Cell col=\"17\" displaytype=\"number\" textAlign=\"right\" text=\"bind:FPCBUNITPRICE\"/><Cell col=\"18\" displaytype=\"number\" textAlign=\"right\" text=\"bind:FPCBPRICE\"/><Cell col=\"19\" displaytype=\"number\" textAlign=\"right\" text=\"bind:SMTUNITPRICE\"/><Cell col=\"20\" displaytype=\"number\" textAlign=\"right\" text=\"bind:SMTPRICE\"/><Cell col=\"21\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"22\" text=\"bind:PREVPROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"23\" text=\"bind:PLANTID\"/><Cell col=\"24\" text=\"bind:SMTAREANAME\" textAlign=\"left\"/><Cell col=\"25\" text=\"bind:SHIPMENTAREANAME\" textAlign=\"left\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" text=\"합계\" tooltiptext=\"TOTALAMOUNT\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"6\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"7\" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"8\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"9\" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"10\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"11\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"12\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"13\" expr=\"dataset.getSum(&quot;RESULTPCSQTY&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"14\" expr=\"dataset.getSum(&quot;RESULTPNLQTY&quot;) \" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"15\" expr=\"dataset.getSum(&quot;RESULTMM&quot;)\" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"16\" expr=\"dataset.getSum(&quot;RESULTPRICE&quot;)\" displaytype=\"mask\" maskeditformat=\"###,###\"/><Cell col=\"17\" expr=\"dataset.getSum(&quot;FPCBUNITPRICE&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"18\" expr=\"dataset.getSum(&quot;FPCBPRICE&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"19\" expr=\"dataset.getSum(&quot;SMTUNITPRICE&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"20\" expr=\"dataset.getSum(&quot;SMTPRICE&quot;) \" maskeditformat=\"###,###\" displaytype=\"mask\"/><Cell col=\"21\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/></Band></Format></Formats>");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_byLot","140","0","140","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0","130","34",null,null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("LOT별 실적현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("WORKRESULTBYLOT");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_byLot",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_Main.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_Main.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_text("");
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

            obj = new BindItem("item13","tab_search.tab_page.form.cal_STARTDT","value","ds_search","PERIOD_PERIODFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","tab_search.tab_page.form.cbo_PERIODTYPE","value","ds_search","PERIODTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","tab_search.tab_page.form.cal_ENDDT","value","ds_search","PERIOD_PERIODTO");
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

            obj = new BindItem("item4","tab_search.tab_page.form.cbo_PRODUCTIONTYPE","value","ds_search","PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.tab_page.form.cbo_WORKTYPE","value","ds_search","WORKTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.tab_page.form.cbo_RESULTTYPE","value","ds_search","RESULTTYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM06200M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM06200M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM06200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 생산입고 실적
         * 파일명 		: PCM06200M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2021.04.20
         * 설  명		: 생산입고 실적 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.20	박대호   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
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
        	// 초기화 (공통)
        	this.nfn_formInit(obj);

        	// 검색조건 공통 콤보 설정
        	this.fn_initCombo();
        	this.fn_initDatePicker();
        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색(메인 -  고객정보 그리드)
         */
        this.fn_search = function (obj, e)
        {

        	switch(this.div_work.form.tab_Main.tabindex) {
        	case 0 : this.GetbyDayList();
        		break;
        	case 1 : this.GetbyProductList();
        		break;
        	case 2 : this.GetbyLotList();
        		break;
        	}
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
        	this.fn_initDatePicker();
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
        	trace('fn_callBack trId ?' + trId);
        	switch(trId)
        	{
        		case "selectEcmLookupValuesVList2ds_CSiteTypeALL" :
        		{
        			this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
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
        			}
        			else
        			{
        				var valueId = [];
        				var valueName = [];
        				for (var i = 0; i < rtn.length; i++)
        				{
        					if ((i % 3) == 0)
        					{
        						valueId.push(rtn[i]);
        					}
        					else if ((i % 3) == 2)
        					{
        						valueName.push(rtn[i]);
        					}

        				}
        				this.tab_search.tab_page.form.edt_PRODUCTDEFID.set_value(valueId.join(","));
        				this.tab_search.tab_page.form.edt_PRODUCTDEFNAME.set_value("");
        				this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");

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
         this.fn_initDatePicker = function ()
        {
        	this.basfn_getPeriodData("ds_periodType");
         	this.ds_search.setColumn(0,"PERIOD_PERIODFR",this.ds_periodType.getColumn(0,"THISMONTH_S"));
         	this.ds_search.setColumn(0,"PERIOD_PERIODTO",this.ds_periodType.getColumn(0,"THISMONTH_E"));
        	this.ds_search.setColumn(0,"PERIODTYPE","THISMONTH");

        };
        /*
         * 기능 : 검색일자 바인딩 함수
         */
        this.fn_setDate = function (periodType)
        {
        	this.ds_search.setColumn(0,"PERIOD_PERIODFR",this.ds_periodType.getColumn(0,periodType+"_S"));
        	this.ds_search.setColumn(0,"PERIOD_PERIODTO",this.ds_periodType.getColumn(0,periodType+"_E"));
        };

        this.fn_initCombo = function ()
        {
        	this.ds_cbo_ProdVersion.deleteAll();
        	this.AddAll(this.ds_cbo_ProdVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");
        	this.ds_search.setColumn(0, "PRODUCTDEFID", "");
        	this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        }

        /*
         * 기능 : 일별 탭 조회
         */
        this.GetbyDayList = function ()
        {
        	this.ds_byDay.clearData();

        	var sSvcID 			= "selectWorkIncommingResultByDate";
        	var sController 	= "/pcm06200/selectWorkIncommingResultByDate.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_byDay=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }
        /*
         * 기능 : 품목 탭 조회
         */
        this.GetbyProductList = function ()
        {
        	this.ds_byProduct.clearData();

        	var sSvcID 			= "selectWorkIncommingResultByProduct";
        	var sController 	= "/pcm06200/selectWorkIncommingResultByProduct.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_byProduct=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }
        /*
         * 기능 : LOT 탭 조회
         */
        this.GetbyLotList = function ()
        {
        	this.ds_byLot.clearData();

        	var sSvcID 			= "selectWorkIncommingResultByLot";
        	var sController 	= "/pcm06200/selectWorkIncommingResultByLot.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_byLot=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         *	기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function(obj,e)
        {
        	this.tab_search.tab_page.form.cbo_PERIODTYPE.set_value("CUSTOM");
        };
        /*
         *	기능 : 기간콤보박스 변경시
         */
        this.tab_search_tab_page_cbo_PERIODTYPE_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM")this.fn_setDate(e.postvalue);
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



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.tab_page.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.tab_page.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.tab_page.form.cal_STARTDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.tab_page.form.cbo_PERIODTYPE.addEventHandler("onitemchanged",this.tab_search_tab_page_cbo_PERIODTYPE_onitemchanged,this);
            this.tab_search.tab_page.form.cal_ENDDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.tab_page.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_tab_page_btn_PRODUCTDEFID_onclick,this);
            this.div_work.form.tab_Main.addEventHandler("onchanged",this.div_work_tab_Main_onchanged,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("PCM06200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
