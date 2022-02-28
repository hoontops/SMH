(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OSM00600M");
            this.set_titletext("Claim 비용 마감 전송");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,757);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"OSPVENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"OSPVENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OCCUR_YM\" type=\"STRING\" size=\"256\"/><Column id=\"REMAIN_AMOUNT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ISDIVISION_REDUCTION_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSEYM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_claimClosureStatus", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CLOSEYM\" type=\"STRING\" size=\"256\"/><Column id=\"INTERFACE_YM\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"OSPVENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODEFECTAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"SELAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"MATERLOSTAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ETCAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_CLAIMAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_REDUCEAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"REMAIN_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SPLIT_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"IF_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODID\" type=\"STRING\" size=\"256\"/><Column id=\"OCCUR_YM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_claimClosureStatusDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"OCCUR_YM\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODID\" type=\"STRING\" size=\"256\"/><Column id=\"INTERFACE_YM\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"REDUCEAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"REASONREDUCE\" type=\"STRING\" size=\"256\"/><Column id=\"IF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"INTERFACEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"INTERFACE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSEYM\" type=\"STRING\" size=\"256\"/><Column id=\"INTERFACENO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_claimPeriod", this);
            obj._setContents("<ColumnInfo><Column id=\"PERIODNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODID\" type=\"STRING\" size=\"256\"/><Column id=\"OCCUR_YM\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_erp", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"INTERFACE_YM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","2","64","295",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_site","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SITE");
            obj.set_color("red");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_plantid","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clearC","171","263","107","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","263","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"30","15","387","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","40","15","387",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID",null,"113","143","20","42",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_AREAID",null,"113","22","20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_AREAID","0","113","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_OSPVENDORID","0","139","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("협력사 ID");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("OSPVENDORID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_OSPVENDORID",null,"139","143","20","42",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_OSPVENDORID",null,"139","22","20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_OSPVENDORNAME","0","164","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("협력사명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_OSPVENDORNAME","108","164",null,"20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID_id","60","421",null,"20","85",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_visible("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_OSPVENDORID_id","60","451",null,"20","85",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_visible("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_ifYm","108","61","165","21",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_url("common::com_monthCalendar.xfdl");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_ifYm","0","61","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("I/F 년월");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("IFYM");
            obj.set_color("red");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Div("div_closeYm","108","35","165","21",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_url("common::com_monthCalendar.xfdl");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_closeYm","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("마감년월");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CLOSEYM");
            obj.set_color("#444444");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_ISDIVISION_REDUCTION_YN","0","88","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_text("분할/감면");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ISDIVISION_REDUCTION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_ISDIVISION_REDUCTION_YN","108","88","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_REMAIN_AMOUNT_YN","0","189","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            obj.set_text("잔여금액");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("REMAIN_AMOUNT");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_REMAIN_AMOUNT_YN","108","189","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_codecolumn("C,YesNo,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","9","56","206","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","31","24","2",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","34",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","40","16","145","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_claimClosureStatusIf","0","66",null,null,"0","310",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_claimClosureStatus");
            obj.set_autoenter("select");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"91\"/><Column size=\"96\"/><Column size=\"161\"/><Column size=\"174\"/><Column size=\"121\"/><Column size=\"107\"/><Column size=\"103\"/><Column size=\"100\"/><Column size=\"143\"/><Column size=\"107\"/><Column size=\"103\"/><Column size=\"100\"/><Column size=\"134\"/><Column size=\"56\"/><Column size=\"68\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"발생년월\" tooltiptext=\"OCCUR_YM\"/><Cell col=\"1\" text=\"마감년월\" tooltiptext=\"CLOSEYM\"/><Cell col=\"2\" text=\"I/F 년월\" tooltiptext=\"IFYM\"/><Cell col=\"3\" text=\"작업장\" tooltiptext=\"WORKAREA\"/><Cell col=\"4\" text=\"협력사 명\" tooltiptext=\"OSPVENDORNAME\"/><Cell col=\"5\" text=\"제품불량\" tooltiptext=\"PRODEFECTAMOUNT\"/><Cell col=\"6\" text=\"선별비용\" tooltiptext=\"SELAMOUNT\"/><Cell col=\"7\" text=\"자재LOSS\" tooltiptext=\"MATERLOSTAMOUNT\"/><Cell col=\"8\" text=\"기타비용금액\" tooltiptext=\"ETCAMOUNT\"/><Cell col=\"9\" text=\"발생금액\" tooltiptext=\"CLAIMOCCURRENCEAMOUNT\"/><Cell col=\"10\" text=\"당월처리\" tooltiptext=\"CLAIMCURRENTMONTHPROCESSING\"/><Cell col=\"11\" text=\"잔여금액\" tooltiptext=\"REMAIN_AMOUNT\"/><Cell col=\"12\" text=\"기처리금액\" tooltiptext=\"CLAIMPREPROCESSAMOUNT\"/><Cell col=\"13\" text=\"감면금액\" tooltiptext=\"CLAIMREDUCEDAMOUNT\"/><Cell col=\"14\" text=\"분할\" tooltiptext=\"ISDIVISION\"/><Cell col=\"15\" text=\"I/F횟수\" tooltiptext=\"CLAIMIFCOUNT\"/></Band><Band id=\"body\"><Cell text=\"bind:OCCUR_YM\"/><Cell col=\"1\" text=\"bind:CLOSEYM\"/><Cell col=\"2\" text=\"bind:INTERFACE_YM\"/><Cell col=\"3\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:OSPVENDORNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PRODEFECTAMOUNT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:SELAMOUNT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:MATERLOSTAMOUNT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:ETCAMOUNT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:TOTAMOUNT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"10\" displaytype=\"number\" textAlign=\"right\" text=\"bind:CLAIMAMOUNT\"/><Cell col=\"11\" displaytype=\"number\" textAlign=\"right\" text=\"bind:REMAIN_QTY\"/><Cell col=\"12\" displaytype=\"number\" textAlign=\"right\" text=\"bind:TOTAL_CLAIMAMOUNT\"/><Cell col=\"13\" displaytype=\"number\" textAlign=\"right\" text=\"bind:TOTAL_REDUCEAMOUNT\"/><Cell col=\"14\" displaytype=\"number\" textAlign=\"right\" text=\"bind:SPLIT_CNT\"/><Cell col=\"15\" displaytype=\"number\" textAlign=\"right\" text=\"bind:IF_CNT\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" tooltiptext=\"SUM\" text=\"합계\" textAlign=\"center\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;parseFloat(PRODEFECTAMOUNT)&quot;)\" displaytype=\"number\"/><Cell col=\"6\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;parseFloat(SELAMOUNT)&quot;)\"/><Cell col=\"7\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;parseFloat(MATERLOSTAMOUNT)&quot;)\"/><Cell col=\"8\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;parseFloat(ETCAMOUNT)&quot;)\"/><Cell col=\"9\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;parseFloat(TOTAMOUNT)&quot;)\"/><Cell col=\"10\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;parseFloat(CLAIMAMOUNT)&quot;)\"/><Cell col=\"11\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;parseFloat(REMAIN_QTY)&quot;)\"/><Cell col=\"12\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;parseFloat(TOTAL_CLAIMAMOUNT)&quot;)\"/><Cell col=\"13\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;parseFloat(TOTAL_REDUCEAMOUNT)&quot;)\"/><Cell col=\"14\" colspan=\"2\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","175","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("Claim 비용 마감 I/F");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("CLAIMCLOSURECOSTIF");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_claimClosureStatus","sta_subTitle:20","0",null,"34","678",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_claimClosureStatusIf",null,"36","29","24","5",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitleDetail","5",null,"175","34",null,"269",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("Claim 비용 분할 / 감면");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("CLAIM_COST_ISDIVISION_REDUCTION");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_claimClosureStatusDetail","0",null,null,"264","0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_claimClosureStatusDetail");
            obj.set_autoenter("select");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"134\"/><Column size=\"115\"/><Column size=\"166\"/><Column size=\"80\"/><Column size=\"127\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"발생년월\" tooltiptext=\"OCCUR_YM\"/><Cell col=\"1\" text=\"마감년월\" tooltiptext=\"CLOSEYM\"/><Cell col=\"2\" text=\"I/F 년월\" tooltiptext=\"IFYM\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"처리금액\" cssclass=\"cell_point\" tooltiptext=\"CLAIMPROCESSAMOUNT\"/><Cell col=\"4\" text=\"감면금액\"/><Cell col=\"5\" text=\"감면사유\" tooltiptext=\"CLAIMREASONREDUCTION\"/><Cell col=\"6\" text=\"I/F\"/><Cell col=\"7\" text=\"I/F일시\" tooltiptext=\"CLAIMIF\"/><Cell col=\"8\" text=\"AP정산\" tooltiptext=\"CLAIMAPSETTLEMENT\"/></Band><Band id=\"body\"><Cell text=\"bind:OCCUR_YM\"/><Cell col=\"1\" text=\"bind:CLOSEYM\"/><Cell col=\"2\" text=\"bind:INTERFACE_YM\" displaytype=\"mask\" expandimage=\"url(&apos;theme://images/btn_WF_Calendar.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow)==&quot;2&quot;?&quot;show&quot;:&quot;hide&quot;\" maskeditautoselect=\"true\" maskeditformat=\"####-##\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:CLAIMAMOUNT\" displaytype=\"expr:comp.parent.parent.parent.fn_setAmountEdit(currow) ? &apos;number&apos;: &apos;normal&apos;\" textAlign=\"right\" edittype=\"expr:comp.parent.parent.parent.fn_setAmountEdit(currow) ? &apos;mask&apos;: &apos;none&apos;\" maskeditformat=\"!#,##9\" maskeditautoselect=\"true\"/><Cell col=\"4\" text=\"bind:REDUCEAMOUNT\" displaytype=\"expr:comp.parent.parent.parent.fn_setAmountEdit(currow) ? &apos;number&apos;: &apos;normal&apos;\" textAlign=\"right\" edittype=\"expr:comp.parent.parent.parent.fn_setAmountEdit(currow) ? &apos;mask&apos;: &apos;none&apos;\" maskeditformat=\"!#,##9\" maskeditautoselect=\"true\"/><Cell col=\"5\" text=\"bind:REASONREDUCE\" textAlign=\"left\" edittype=\"expr:comp.parent.parent.parent.fn_setAmountEdit(currow) ? &apos;normal&apos;: &apos;none&apos;\" displaytype=\"expr:comp.parent.parent.parent.fn_setAmountEdit(currow) ? &apos;text&apos;: &apos;normal&apos;\"/><Cell col=\"6\" text=\"bind:IF_YN\"/><Cell col=\"7\" text=\"bind:INTERFACEDATE\"/><Cell col=\"8\" text=\"bind:INTERFACE_FLAG\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_claimClosureStatusDetail",null,null,"29","24","5","270",null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label00_00_01_00","610","38","83","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_text("마감(I/F)년월");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CLOSEYM");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_PERIODNAME","698","38","165","21",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_url("common::com_monthCalendar.xfdl");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_saveSend",null,"36","71","24","39",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_text("ERP 전송");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("Toolbar_Reduction");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_save_detail",null,null,"31","24","35","270",null,null,null,null,this.div_work.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("저장");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_addRowDetail",null,null,"26","24","94","270",null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRowDetail",null,null,"26","24","66","270",null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,757,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item16","div_work.form.edt_PROCESSDEFID2","value","ds_productInformatByOsp","TOPROCESSDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_work.form.edt_PROCESSDEFVERSION2","value","ds_productInformatByOsp","TOPROCESSDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_monthCalendar.xfdl");
        };
        
        // User Script
        this.registerScript("OSM00600M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Claim 비용 마감 전송
         * 파일명 		: OSM00600M.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.04.11
         *
         * 설  명		: Claim 비용 마감 전송
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.11	진성하   	최초작성
         * 2021.06.22   김진현		추가 수정작업 (erp전송)
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;
        var fv_plantid;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	//this.div_page.set_visible(true);


        	// (21.07.01) - 추가 협력사 id x 버튼 이벤트 수정
        	this.tab_search.Tabpage1.form.btn_edt_OSPVENDORID.setEventHandler("onclick", this.fn_xClickOSPVENDORID, this );



        	// paging
        	//this.fn_paging_onload(obj);
        	// paging end
        	this.fv_currDate = this.nfn_getCurrentSystemTime();

        	// (21.06.24) 추가 수정 불가
        	this.div_work.form.div_PERIODNAME.set_enable(false);

        	// div_PERIODNAME -> div_ifYm   (21.06.24)
        	this.tab_search.Tabpage1.form.div_ifYm.form.msk_month.set_value(this.fv_currDate.substring(0,6));

        	// 마감년월 변경  div_OCCUR_YM ->  div_closeYm  (21.06.24)
        	this.tab_search.Tabpage1.form.div_closeYm.form.msk_month.set_value(this.fv_currDate.substring(0,6));
        	this.div_work.form.div_PERIODNAME.form.msk_month.set_value(this.fv_currDate.substring(0,6));

        	this.tab_search.Tabpage1.form.cbo_plantid.set_value(this.gf_getSiteType());
        	fv_plantid = this.gf_getSiteType();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	var component = this.tab_search.Tabpage1;
        	var strColIdList = "cbo_plantid";
        	var strColNmList = "SITE";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	if(this.gfn_isNull(this.tab_search.Tabpage1.form.div_ifYm.form.msk_month.value)){
        		this.gfn_Message("InputSomeThing", "CLOSEYM", "warning", "ok");
        		this.tab_search.Tabpage1.form.div_ifYm.setFocus();
        		return;
        	}

        	fv_plantid = this.tab_search.Tabpage1.form.cbo_plantid.value;

        	this.ds_claimClosureStatus.clearData();
        	this.ds_claimClosureStatusDetail.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cbo_plantid.value);
        	if(!this.gfn_isNull(this.tab_search.Tabpage1.form.div_ifYm.form.msk_month.value))
        	{
        		//this.ds_search.setColumn(0, "PERIODNAME", this.tab_search.Tabpage1.form.div_ifYm.form.msk_month.text);				// I/F 년월로 변경 필요(21.06.24)
        		//(21.06.24) 필터의 선택된 I/F 년월로 마감(I/F)년월 연결
        		this.div_work.form.div_PERIODNAME.form.msk_month.set_value(this.tab_search.Tabpage1.form.div_ifYm.form.msk_month.text);
        		// (I/F 마감 년월 정보 설정)
        		this.ds_search.setColumn(0, "CLOSEYM",  this.tab_search.Tabpage1.form.div_ifYm.form.msk_month.text);
        	}


        	this.ds_search.setColumn(0, "PERIODTYPE", "Claim");
        	this.ds_search.setColumn(0, "AREAID", this.tab_search.Tabpage1.form.edt_AREAID_id.value);

        	// (21.07.01) 협력사 id 수정
        	//this.ds_search.setColumn(0, "OSPVENDORID", this.tab_search.Tabpage1.form.edt_OSPVENDORID.value);
        	this.ds_search.setColumn(0, "OSPVENDORID", this.tab_search.Tabpage1.form.edt_OSPVENDORID_id.value);

        	this.ds_search.setColumn(0, "OSPVENDORNAME", this.tab_search.Tabpage1.form.edt_OSPVENDORNAME.value);
        	if(!this.gfn_isNull(this.tab_search.Tabpage1.form.div_closeYm.form.msk_month.value))
        	{
        		this.ds_search.setColumn(0, "OCCUR_YM", this.tab_search.Tabpage1.form.div_closeYm.form.msk_month.text);				// 마감년월로 변경 필요(21.06.24)
        		//this.ds_search.setColumn(0, "CLOSEYM", this.tab_search.Tabpage1.form.div_closeYm.form.msk_month.text);				// 마감년월로 변경 필요(21.06.24)
        		// (마감년월) - 필수값 아니다.
        		this.ds_search.setColumn(0, "PERIODNAME", this.tab_search.Tabpage1.form.div_closeYm.form.msk_month.text);				// I/F 년월로 변경 필요(21.06.24)
        	}
        	this.ds_search.setColumn(0, "REMAIN_AMOUNT_YN", this.tab_search.Tabpage1.form.cbo_REMAIN_AMOUNT_YN.value);				// 잔여금액
        	this.ds_search.setColumn(0, "ISDIVISION_REDUCTION_YN", this.tab_search.Tabpage1.form.cbo_ISDIVISION_REDUCTION_YN.value); // 분할/감면


        	// (21.06.24) 조회시 row이벤트 발생 x
        	this.div_work.form.grd_claimClosureStatusIf.set_enableevent(false);

        	trace("조회전 조건 확인 : "+this.ds_search.saveXML());

        	var sSvcID = "selectGetOutsourcedClaimClosureStatusIf";
        	var sController = "/osm00600/selectGetOutsourcedClaimClosureStatusIf.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_claimClosureStatus=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.tab_search.Tabpage1.form.cbo_REMAIN_AMOUNT_YN.set_index(0);
        	this.tab_search.Tabpage1.form.cbo_ISDIVISION_REDUCTION_YN.set_index(0);
        	this.tab_search.Tabpage1.form.edt_OSPVENDORNAME.set_value("");
        	this.tab_search.Tabpage1.form.edt_OSPVENDORID.set_value("");
        	this.tab_search.Tabpage1.form.edt_OSPVENDORID_id.set_value("");
        	this.tab_search.Tabpage1.form.edt_AREAID.set_value("");
        	this.tab_search.Tabpage1.form.edt_AREAID_id.set_value("");

        	this.tab_search.Tabpage1.form.cbo_plantid.set_value(this.gf_getSiteType());
        	// div_PERIODNAME -> div_ifYm   (21.06.24)
        	this.tab_search.Tabpage1.form.div_ifYm.form.msk_month.set_value(this.fv_currDate.substring(0,6));
        	// 마감년월 변경  div_OCCUR_YM ->  div_closeYm  (21.06.24)
        	this.tab_search.Tabpage1.form.div_closeYm.form.msk_month.set_value(this.fv_currDate.substring(0,6));
        	this.div_work.form.div_PERIODNAME.form.msk_month.set_value(this.fv_currDate.substring(0,6));
        };

        /*
         * 기능 : 신규
         */
        this.fn_new = function(obj,e)
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
        this.fn_delelete = function(obj,e)
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

        /*
         * 기능 : work영역 초기화  => 공통처리
         */
        this.fn_reset = function(obj,e)
        {
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		// (21.06.25) - 추가
        		if (trId == "saveErpProcess" || trId == "saveCloseProcess")
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
        			//this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        			this.gfn_Message(errMsg, "", "error", "ok");
        			return;
        		}
        		//this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "selectGetOutsourcedClaimClosureStatusIf")
        		{
        			if(this.ds_claimClosureStatus.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        				// (21.06.24) 조회시 row이벤트 발생 o
        				this.div_work.form.grd_claimClosureStatusIf.set_enableevent(true);
        				return;
        			}
        			// (21.06.24) 조회시 row이벤트 발생 o
        			this.div_work.form.grd_claimClosureStatusIf.set_enableevent(true);
        			this.ds_claimClosureStatus.set_rowposition(0);

        			// (21.06.24) Detail 조회
        			this.fn_setDetail();
        		}
        		else if(trId == "saveCloseProcess") // Detail 저장
        		{
        			//trace("저장 완료 재조회");
        			this.gfn_Message("SuccessSave", "", "information", "ok");
        			this.fn_search();

        		}
        		else if(trId == "saveErpProcess") // ERP전송 완료
        		{
        			//trace("ERP 전송 완료 재조회");
        			this.gfn_Message("SuccessSave", "", "information", "ok");
        			this.fn_search();

        		}
        	}

        }


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "AREA")
        	{
        		this.tab_search.Tabpage1.form.edt_AREAID_id.set_value(rtn[0]);
        		this.tab_search.Tabpage1.form.edt_AREAID.set_value(rtn[1]);
        	}
        	if(sPopupId == "AREA2")
        	{
        		this.div_work.form.edt_AREAID_id.set_value(rtn[0]);
        		this.div_work.form.edt_AREAID.set_value(rtn[1]);
        	}
        	if(sPopupId == "OSPVENDORID")
        	{
        		// 협력사 수정 (21.07.01)
        		//this.div_work.form.edt_OSPVENDORID_id.set_value(rtn[0]);
        		//this.div_work.form.edt_OSPVENDORID.set_value(rtn[1]);
        		this.tab_search.Tabpage1.form.edt_OSPVENDORID_id.set_value(rtn[0]);
        		this.tab_search.Tabpage1.form.edt_OSPVENDORID.set_value(rtn[1]);
        	}
        	if(sPopupId == "OSPVENDORID2")
        	{
        		this.div_work.form.edt_OSPVENDORID_id.set_value(rtn[0]);
        		this.div_work.form.edt_OSPVENDORID.set_value(rtn[1]);
        	}
        	if(sPopupId == "PROCESSSEGMENTID")
        	{
        		this.div_work.form.edt_PROCESSSEGMENTID.set_value(rtn[0]);
        		this.div_work.form.edt_PROCESSSEGMENTNAME.set_value(rtn[1]);

        		trace(this.ds_claimClosureStatus.saveXML());
        	}

        }

        /* 월력 값 변경시 호출되는 callBack 함수 */
        this.fn_monthCallback = function (svcId, retVal)
        {
        	trace("from object id : " + svcId + ", return value : " + retVal);
        	if (svcId.substring(0, 15) == "pdivComCalMonth")
        	{
        		if (!this.gfn_isNull(retVal))
        		{
        			var arr = svcId.split(".");
        			trace(retVal);
        			// 리턴값
        			// [0] : 선택한 년월
        			// [1] : 월 시작일
        			// [2] : 월 종료일
        			// [3] : 변경전 년월 값

        			// [1] 메인의 마감년월 보다 빠른 것 선택 불가능
        			var nPos = this.ds_claimClosureStatusDetail.rowposition;
        			var nPreMainIfYm 	= this.ds_claimClosureStatusDetail.getColumn(nPos, "PERIODID");
        			var nMainIfYm		=  nPreMainIfYm.substr(0,6);

        			if(retVal[0] < nMainIfYm)
        			{
        				// CheckClaimIfYm
        				this.gfn_Message("CheckClaimIfYm", nMainIfYm, "warning", "ok");		// I/F 년월은 {0} 보다 크거나 같아야 합니다.
        				return;
        			}
        			this.ds_claimClosureStatusDetail.setColumn(nPos, arr[1], retVal[0].substr(0,4)+"-"+retVal[0].substr(4,2));
        		}
        	}
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 하단 상세 조회  (21.06.24)
         */
        this.fn_setDetail = function ()
        {
        	//trace(" ----> (하단 조회 간다.) ---> "+this.ds_claimClosureStatus.rowposition);

        	var nPos = this.ds_claimClosureStatus.rowposition;

        	// ENTERPRISEID, PLANTID, OCCUR_YM, PERIODID, AREAID, VENDORID
        	var nEnt 		= this.ds_claimClosureStatus.getColumn(nPos, "ENTERPRISEID");
        	var nSite 		= this.ds_claimClosureStatus.getColumn(nPos, "PLANTID");
        	var nPeriodId 	= this.ds_claimClosureStatus.getColumn(nPos, "PERIODID");
        	var nOccurYm 	= this.ds_claimClosureStatus.getColumn(nPos, "OCCUR_YM");
        	var nAreaId 	= this.ds_claimClosureStatus.getColumn(nPos, "AREAID");
        	var nVendorId 	= this.ds_claimClosureStatus.getColumn(nPos, "VENDORID");

        	this.ds_searchDetail.clearData();
        	this.ds_searchDetail.addRow();
        	this.ds_searchDetail.setColumn(0, "ENTERPRISEID"	, nEnt);
        	this.ds_searchDetail.setColumn(0, "PLANTID"			, nSite);
        	this.ds_searchDetail.setColumn(0, "PERIODID"		, nPeriodId);
        	this.ds_searchDetail.setColumn(0, "OCCUR_YM"		, nOccurYm);
        	this.ds_searchDetail.setColumn(0, "AREAID"			, nAreaId);
        	this.ds_searchDetail.setColumn(0, "VENDORID"		, nVendorId);


        	var sSvcID = "selectGetOutsourcedClaimClosureStatusIfSandDetail";
        	var sController = "/osm00600/selectGetOutsourcedClaimClosureStatusIfSandDetail.do";
        	var sInDatasets = "INPUT=ds_searchDetail";
        	var sOutDatasets = "ds_claimClosureStatusDetail=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * 금액, edit 입력 여부 (21.06.24)
         */
        this.fn_setAmountEdit = function (nRow)
        {
        	var nType = this.ds_claimClosureStatusDetail.getRowType(nRow);
        	var nIf   = this.ds_claimClosureStatusDetail.getColumn(nRow,"IF_YN");

        	if((nType == Dataset.ROWTYPE_INSERT) || (nIf != 'Y'))
        	{
        		return true;
        	}
        	return false;
        };

        /*
         * 협력사 x 버튼 이벤트 (21.07.01)
         */
        this.fn_xClickOSPVENDORID  = function ()
        {
        	this.tab_search.Tabpage1.form.edt_OSPVENDORID.set_value("");
        	this.tab_search.Tabpage1.form.edt_OSPVENDORID_id.set_value("");
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_Tabpage1_btn_AREAID_onclick = function(obj,e)
        {
        	var popupId = "AREA";
        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00232";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "AREAID|AREANAME";
        	oArg.arg_paramCols = "PLANTID";
        	oArg.arg_paramValues = this.tab_search.Tabpage1.form.cbo_plantid.value;
        	oArg.arg_searchStr = "AREANAME="+this.tab_search.Tabpage1.form.edt_AREAID.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };

        this.tab_search_Tabpage1_btn_OSPVENDORID_onclick = function(obj,e)
        {
        	var popupId = "OSPVENDORID";
        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00233";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "OSPVENDORID|OSPVENDORNAME";
        	oArg.arg_paramCols = "PLANTID";
        	oArg.arg_paramValues = this.tab_search.Tabpage1.form.cbo_plantid.value;
        	//(21.07.01) 협력사 id 수정
        	//oArg.arg_searchStr = "OSPVENDORNAME="+this.tab_search.Tabpage1.form.edt_OSPVENDORID.value;
        	oArg.arg_searchStr = "OSPVENDORNAME="+this.tab_search.Tabpage1.form.edt_OSPVENDORID_id.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };

        this.div_work_btn_AREAID_onclick = function(obj,e)
        {
        	var popupId = "AREA2";
        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00232";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "AREAID|AREANAME";
        	oArg.arg_paramCols = "PLANTID";
        	oArg.arg_paramValues = this.tab_search.Tabpage1.form.cbo_plantid.value;
        	oArg.arg_searchStr = "AREANAME="+this.tab_search.Tabpage1.form.edt_AREAID.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };

        this.div_work_btn_OSPVENDORID_onclick = function(obj,e)
        {
        	var popupId = "OSPVENDORID2";
        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00233";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "OSPVENDORID|OSPVENDORNAME";
        	oArg.arg_paramCols = "PLANTID";
        	oArg.arg_paramValues = this.tab_search.Tabpage1.form.cbo_plantid.value;
        	oArg.arg_searchStr = "OSPVENDORNAME="+this.tab_search.Tabpage1.form.edt_OSPVENDORID.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };

        this.div_work_btn_PROCESSSEGMENTNAME_onclick = function(obj,e)
        {
        	var popupId = "PROCESSSEGMENTID";
        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00244";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        	oArg.arg_paramCols = "DIC.LANGUAGETYPE|PRO.ENTERPRISEID";
        	oArg.arg_paramValues = this.gf_getLanguageType()+"|"+this.gf_getEnterpriseId();
        	oArg.arg_searchStr = "PROCESSSEGMENTNAME="+this.div_work.form.edt_PROCESSSEGMENTNAME.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };


        this.div_work_btn_search_onclick = function(obj,e)
        {
        	/*
        	var component = this.tab_search.Tabpage1;
        	var strColIdList = "cbo_plantid";
        	var strColNmList = "SITE";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	if(this.gfn_isNull(this.tab_search.Tabpage1.form.div_ifYm.form.msk_month.value)){
        		this.gfn_Message("InputSomeThing", "CLOSEYM", "warning", "ok");
        		this.tab_search.Tabpage1.form.div_ifYm.setFocus();
        		return;
        	}
        	this.ds_claimClosureStatus.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLANTID", fv_plantid);
        	this.ds_search.setColumn(0, "PERIODID", this.div_work.form.edt_PERIODID.value);
        	this.ds_search.setColumn(0, "CLAIMTYPE", this.div_work.form.cbo_EXPENSEGUBUN.value);
        	this.ds_search.setColumn(0, "OSPVENDORID", this.div_work.form.edt_OSPVENDORID_id.value);
        	this.ds_search.setColumn(0, "PROCESSSEGMENTID", this.div_work.form.edt_PROCESSSEGMENTID.value);
        	this.ds_search.setColumn(0, "AREAID", this.div_work.form.edt_AREAID_id.value);


        	var sSvcID = "selectGetOutsourcedClaimClosureStatusIfDetail";
        	var sController = "/osm00600/selectGetOutsourcedClaimClosureStatusIfDetail.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_claimClosureStatusDetail=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	*/
        };


        this.div_work_grd_claimClosureStatus_onselectchanged = function(obj,e)
        {
        	this.fn_setDetail();
        };

        /*
         * (21.06.24)  Detail 추가 함수
         */
        this.div_work_btn_addRowDetail_onclick = function(obj,e)
        {
        	// 합수 체크
        	var nMainCnt = this.ds_claimClosureStatus.rowcount;
        	if(nMainCnt == 0)
        	{
        		// MENU_OUTSOURCEDCLAIMCLOSURESTATUS
        		//this.gfn_Message("NoSelectedMsg", this.nfn_getDictionaryname("MENU_OUTSOURCEDCLAIMCLOSURESTATUS",true), "warning", "ok");	// 선택된 {0}(이)가 없습니다. 먼저 선택하세요.
        		this.gfn_Message("NoSelectedMsg", "Claim 비용 마감 I/F", "warning", "ok");	// 선택된 {0}(이)가 없습니다. 먼저 선택하세요.
        		return;
        	}


        	var nPos = this.ds_claimClosureStatus.rowposition;
        	var nEnt 		= this.ds_claimClosureStatus.getColumn(nPos, "ENTERPRISEID");
        	var nSite 		= this.ds_claimClosureStatus.getColumn(nPos, "PLANTID");
        	var nPeriodId 	= this.ds_claimClosureStatus.getColumn(nPos, "PERIODID");
        	var nOccurYm 	= this.ds_claimClosureStatus.getColumn(nPos, "OCCUR_YM");
        	var nAreaId 	= this.ds_claimClosureStatus.getColumn(nPos, "AREAID");
        	var nVendorId 	= this.ds_claimClosureStatus.getColumn(nPos, "VENDORID");
        	var nCloseYm 	= this.ds_claimClosureStatus.getColumn(nPos, "CLOSEYM");


        	var nAddRow = this.ds_claimClosureStatusDetail.addRow();
        	this.ds_claimClosureStatusDetail.setColumn(nAddRow, "ENTERPRISEID"	, nEnt);
        	this.ds_claimClosureStatusDetail.setColumn(nAddRow, "PLANTID"		, nSite);
        	this.ds_claimClosureStatusDetail.setColumn(nAddRow, "PERIODID"		, nPeriodId);
        	this.ds_claimClosureStatusDetail.setColumn(nAddRow, "OCCUR_YM"		, nOccurYm);
        	this.ds_claimClosureStatusDetail.setColumn(nAddRow, "AREAID"		, nAreaId);
        	this.ds_claimClosureStatusDetail.setColumn(nAddRow, "VENDORID"		, nVendorId);
        	this.ds_claimClosureStatusDetail.setColumn(nAddRow, "REDUCEAMOUNT"	, 0);

        	this.ds_claimClosureStatusDetail.setColumn(nAddRow, "CLOSEYM"		, nCloseYm);
        	this.ds_claimClosureStatusDetail.setColumn(nAddRow, "IF_YN"			, 'N');
        };

        /*
         * (21.06.21) - Detail  I/F 년월 선택 팝업 호출
         */
        this.div_work_grd_claimClosureStatusDetail_onexpandup = function(obj,e)
        {
        	/* Form 에서 Grid Cell 기준으로 위치얻기 */
        	var objRect = obj.getCellRect(e.row, e.cell);

        	/* cell 기준 position으로 클라이언트 기준 X, Y 좌표를 스크린 기준 기준으로 바꾸어 위치얻기 */
        	var nLeft = system.clientToScreenX(obj, objRect.left);
        	var nTop = system.clientToScreenY(obj, objRect.bottom);

        	/* 스크린 기준 X, Y 좌표를 클라이언트 기준으로 바꾸어 위치얻기 */
        	nLeft = system.screenToClientX(nexacro.getApplication().mainframe, nLeft);
        	nTop = system.screenToClientY(nexacro.getApplication().mainframe, nTop);

        	// 전달 값
        	var sYearMonth = this.ds_claimClosureStatusDetail.getColumn(e.row, e.cell);
        	var colId = obj.getCellProperty("Body", e.cell, "text");
        	colId = colId.replace("bind:", "");
        	// 일자 선택 팝업창
        	this.gfn_popupCalMonth(colId, nLeft, nTop, sYearMonth);
        };

        /*
         * 상세 내역 저장
         */
        this.div_work_btn_save_detail_onclick = function(obj,e)
        {
        	// 저장전 수량 체크
        	var nMainTotal = this.ds_claimClosureStatus.getColumn(this.ds_claimClosureStatus.rowposition, "TOTAMOUNT");

        	var nDetailCnt = this.ds_claimClosureStatusDetail.rowcount;
        	var nTotalClaimAmount = 0;
        	var nTotalReduceAmount = 0;
        	for(var i=0; i<nDetailCnt; i++)
        	{
        		var nCamount = this.ds_claimClosureStatusDetail.getColumn(i, "CLAIMAMOUNT");
        		var nRamount = this.ds_claimClosureStatusDetail.getColumn(i, "REDUCEAMOUNT");
        		var nIfYm	 = this.ds_claimClosureStatusDetail.getColumn(i, "INTERFACE_YM");
        		if(this.gfn_isNull(nRamount))
        		{
        			nRamount = 0;
        		}

        		if(this.gfn_isNull(nCamount))
        		{
        			// InValidOspRequiredField
        			//this.gfn_Message("InValidOspRequiredField", this.nfn_getDictionaryname("",true), "warning", "ok");	// {0} 항목은 필수 입력입니다
        			// 처리금액
        			this.gfn_Message("InValidOspRequiredField", "처리금액", "warning", "ok");	// {0} 항목은 필수 입력입니다
        			return;
        		}

        		if(this.gfn_isNull(nIfYm))
        		{
        			this.gfn_Message("InValidOspRequiredField", this.nfn_getDictionaryname("IFYM",true), "warning", "ok");	// {0} 항목은 필수 입력입니다
        			return;
        		}

        		nTotalClaimAmount = nTotalClaimAmount + parseInt(nCamount);
        		nTotalReduceAmount = nTotalReduceAmount + parseInt(nRamount);
        	}

        	if(nMainTotal != (nTotalClaimAmount+nTotalReduceAmount))
        	{
        		this.gfn_Message("CheckClaimCost", "", "warning", "ok");	// 처리금액, 감면금액의 합계와 발생금액이 불일치합니다.
        		return;
        	}

        	// 동일한 I/F 년월 있는지 확인

        	for(var i=0; i<this.ds_claimClosureStatusDetail.rowcount; i++){
        		if(this.ds_claimClosureStatusDetail.findRow("INTERFACE_YM",this.ds_claimClosureStatusDetail.getColumn(i,"INTERFACE_YM"),i+1)>0){
        			this.gfn_Message("InValidOspData007", this.ds_claimClosureStatusDetail.getColumn(i,"INTERFACE_YM"), "warning", "ok");//중복된 ({0})가 존재합니다.
        			return;
        		}
        	}



        	// 저장으로 간다 수정 등록 내용만 삭제는 기본 처리 Y 인경우 삭제 대기
        	//trace(" 저장전 내용 확인 : "+this.ds_claimClosureStatusDetail.saveXML());

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveCloseProcess";
        	var sController = "/osm00600/saveCloseProcess.do";
        	var sInDatasets = "INPUT=ds_claimClosureStatusDetail:U";
        	var sOutDatasets = "";

        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);



        };

        /*
         * 비용/감면 삭제 이벤트
         */
        this.div_work_btn_delRowDetail_onclick = function(obj,e)
        {
        	// AP정산 Y이면 삭제 불가능.
        	var nPos = this.ds_claimClosureStatusDetail.rowposition;
        	var nApFlag = this.ds_claimClosureStatusDetail.getColumn(nPos, "INTERFACE_FLAG");
        	if(nApFlag == "Y")
        	{
        		this.gfn_Message("CheckClaimApDelete", null, "warning", "ok");	 // AP 정산된 내용은 삭제 할 수 없습니다.
        		return;
        	}

        	this.ds_claimClosureStatusDetail.deleteRow(nPos);

        };

        /*
         * [ERP전송]
         */
        this.div_work_btn_saveSend_onclick = function(obj,e)
        {
        	// I/F 년월 -> ERP전송시 필요
        	var nIfYm	= this.div_work.form.div_PERIODNAME.form.msk_month.value;
        	this.ds_erp.clearData();
        	this.ds_erp.addRow();

        	//this.ds_erp.setColumn(0,"ENTERPRISEID",);
        	this.ds_erp.setColumn(0,"PLANTID"		, this.tab_search.Tabpage1.form.cbo_plantid.value);
        	this.ds_erp.setColumn(0,"INTERFACE_YM"	,nIfYm);

        	//trace(" ==== [this.ds_erp] ==== : "+this.ds_erp.saveXML());


        	// OspDoProcessWant  {0} 처리를 하시겠습니까?
        	// 754B23E4ADDD4573A29BF5CF2A6450E8 ERP I/F
        	if(!this.gfn_Message("OspDoProcessWant", this.nfn_getDictionaryname("754B23E4ADDD4573A29BF5CF2A6450E8",true), "conf", "yesno"))
        	{
        		return;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveErpProcess";
        	var sController = "/osm00600/saveErpProcess.do";
        	var sInDatasets = "INPUT=ds_erp";
        	var sOutDatasets = "";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clearC.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_AREAID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_AREAID_onclick,this);
            this.tab_search.Tabpage1.form.btn_OSPVENDORID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_OSPVENDORID_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.grd_claimClosureStatusIf.addEventHandler("onselectchanged",this.div_work_grd_claimClosureStatus_onselectchanged,this);
            this.div_work.form.grd_claimClosureStatusDetail.addEventHandler("onexpandup",this.div_work_grd_claimClosureStatusDetail_onexpandup,this);
            this.div_work.form.btn_saveSend.addEventHandler("onclick",this.div_work_btn_saveSend_onclick,this);
            this.div_work.form.btn_save_detail.addEventHandler("onclick",this.div_work_btn_save_detail_onclick,this);
            this.div_work.form.btn_addRowDetail.addEventHandler("onclick",this.div_work_btn_addRowDetail_onclick,this);
            this.div_work.form.btn_delRowDetail.addEventHandler("onclick",this.div_work_btn_delRowDetail_onclick,this);
        };
        this.loadIncludeScript("OSM00600M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
