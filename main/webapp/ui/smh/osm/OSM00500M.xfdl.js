(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OSM00500M");
            this.set_titletext("Claim 마감 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,757);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"OSPVENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"OSPVENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_claimClosureStatusDetail", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CLAIMYN\" type=\"STRING\" size=\"256\"/><Column id=\"WORKGUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFINETIME\" type=\"STRING\" size=\"256\"/><Column id=\"OCCURTIME\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"OSPVENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPREDUCEQTY\" type=\"STRING\" size=\"256\"/><Column id=\"REDUCEQTYAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"OSPREDUCERATE\" type=\"STRING\" size=\"256\"/><Column id=\"CLAIMAMOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"FINDPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFINEUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_claimClosureStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"OSPVENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODEFECTAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SELAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MATERLOSTAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ETCAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REDUCERATEAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OCCUR_YM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_claimPeriod", this);
            obj._setContents("<ColumnInfo><Column id=\"PERIODNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_claimCloseConf", this);
            obj._setContents("<ColumnInfo><Column id=\"PERIODSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_claimIfCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"IF_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_claimClosureStatusCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/><Column id=\"OSPVENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODEFECTAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SELAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MATERLOSTAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ETCAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TOTAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REDUCERATEAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_claimClosureStatusCancelCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"OCCUR_YM\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"VENDORID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_claimIfYn", this);
            obj._setContents("<ColumnInfo><Column id=\"IF_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_saveType", this);
            obj._setContents("<ColumnInfo><Column id=\"SAVE_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
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

            obj = new Button("btn_clearC","171","193","107","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","193","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
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

            obj = new Edit("edt_AREAID",null,"62","148","20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_AREAID",null,"62","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_00","0","62","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_00_00","0","88","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("협력사 ID");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("OSPVENDORID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_OSPVENDORID",null,"88","148","20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_OSPVENDORID",null,"88","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00_00_00","0","113","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("협력사명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_OSPVENDORNAME","108","113",null,"20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
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

            obj = new Div("div_PERIODNAME","108","35","165","21",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_url("common::com_monthCalendar.xfdl");
            obj.set_text("");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00_00_01_00","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("마감년월");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CLOSEYM");
            obj.set_color("red");
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
            obj.set_text("");
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

            obj = new Grid("grd_claimClosureStatus","0","76",null,null,"0","310",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_claimClosureStatus");
            obj.set_autoenter("select");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"161\"/><Column size=\"174\"/><Column size=\"121\"/><Column size=\"107\"/><Column size=\"103\"/><Column size=\"100\"/><Column size=\"143\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"작업장\"/><Cell col=\"1\" text=\"협력사명\"/><Cell col=\"2\" text=\"제품불량\"/><Cell col=\"3\" text=\"선별비용\"/><Cell col=\"4\" text=\"자재LOSS\"/><Cell col=\"5\" text=\"기타비용금액\"/><Cell col=\"6\" text=\"총계\"/><Cell col=\"7\" text=\"발생년월\" tooltiptext=\"OCCUR_YM\"/></Band><Band id=\"body\"><Cell text=\"bind:AREANAME\"/><Cell col=\"1\" text=\"bind:OSPVENDORNAME\"/><Cell col=\"2\" text=\"bind:PRODEFECTAMOUNT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:SELAMOUNT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:MATERLOSTAMOUNT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:ETCAMOUNT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:TOTAMOUNT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:OCCUR_YM\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" textAlign=\"center\" text=\"합계\" tooltiptext=\"SUM\"/><Cell col=\"2\" text=\"expr:dataset.getSum(&quot;parseFloat(PRODEFECTAMOUNT)&quot;)\" displaytype=\"number\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;parseFloat(SELAMOUNT)&quot;)\" displaytype=\"number\"/><Cell col=\"4\" text=\"expr:dataset.getSum(&quot;parseFloat(MATERLOSTAMOUNT)&quot;)\" displaytype=\"number\"/><Cell col=\"5\" text=\"expr:dataset.getSum(&quot;parseFloat(ETCAMOUNT)&quot;)\" displaytype=\"number\"/><Cell col=\"6\" text=\"expr:dataset.getSum(&quot;parseFloat(TOTAMOUNT)&quot;)\" displaytype=\"number\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","175","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("Claim 마감 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_OUTSOURCEDCLAIMCLOSURESTATUS");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_claimClosureStatus","sta_subTitle:20","0",null,"34","678",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_claimClosureStatus",null,"48","29","24","5",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_PERIODSTATE","116","49","128","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            obj.set_visible("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label02_00_00_00","0","49","83","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("마감상태");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PERIODSTATE");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","5",null,"175","34",null,"273",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_text("Claim마감내역 조회");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("OUTSOURCEDCLAIMDEADLINEINQUIRY");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_claimClosureStatusDetail","0",null,null,"214","0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_claimClosureStatusDetail");
            obj.set_autoenter("select");
            obj.set_enable("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"54\"/><Column size=\"193\"/><Column size=\"226\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"99\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"167\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"공정그룹명\"/><Cell col=\"1\" text=\"공정명\"/><Cell col=\"2\" text=\"원인작업장명\"/><Cell col=\"3\" text=\"협력사 명\"/><Cell col=\"4\" text=\"품목코드\"/><Cell col=\"5\" text=\"Rev\"/><Cell col=\"6\" text=\"품목명\"/><Cell col=\"7\" text=\"Lot No.\"/><Cell col=\"8\" text=\"불량 코드\"/><Cell col=\"9\" text=\"불량명\"/><Cell col=\"10\" text=\"불량 수량\"/><Cell col=\"11\" text=\"CLAIMPRICE\"/><Cell col=\"12\" text=\"불량반영금액\"/><Cell col=\"13\" text=\"감면수\"/><Cell col=\"14\" text=\"수량감면액\"/><Cell col=\"15\" text=\"감면율(%)\"/><Cell col=\"16\" text=\"비율감면액\"/><Cell col=\"17\" text=\"금액\"/><Cell col=\"18\" text=\"발견공정\"/><Cell col=\"19\" text=\"생성자명\"/><Cell col=\"20\" text=\"확정자\"/><Cell col=\"21\" text=\"설명\"/></Band><Band id=\"body\"><Cell text=\"bind:PROCESSSEGMENTNAME\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTCLASSNAME\"/><Cell col=\"2\" text=\"bind:REASONAREANAME\"/><Cell col=\"3\" text=\"bind:OSPVENDORNAME\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"5\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFNAME\"/><Cell col=\"7\" text=\"bind:LOTID\"/><Cell col=\"8\" text=\"bind:DEFECTCODE\"/><Cell col=\"9\" text=\"bind:DEFECTNAME\"/><Cell col=\"10\" text=\"bind:DEFECTQTY\"/><Cell col=\"11\" text=\"bind:CLAIMPRICE\"/><Cell col=\"12\" text=\"bind:DEFECTAMOUNT\"/><Cell col=\"13\" text=\"bind:OSPREDUCEQTY\"/><Cell col=\"14\" text=\"bind:REDUCEQTYAMOUNT\"/><Cell col=\"15\" text=\"bind:OSPREDUCERATE\"/><Cell col=\"16\" text=\"bind:REDUCERATEAMOUNT\"/><Cell col=\"17\" text=\"bind:CLAIMAMOUNT\"/><Cell col=\"18\" text=\"bind:FINDPROCESSSEGMENTNAME\"/><Cell col=\"19\" text=\"bind:CREATORNAME\"/><Cell col=\"20\" text=\"bind:DEFINEUSERNAME\"/><Cell col=\"21\" text=\"bind:DESCRIPTION\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID","108",null,"188","20",null,"250",null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_AREAID","296",null,"22","20",null,"250",null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label00_00","0",null,"103","20",null,"250",null,null,null,null,this.div_work.form);
            obj.set_taborder("10");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("AREA");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label00_00_00","410",null,"103","20",null,"250",null,null,null,null,this.div_work.form);
            obj.set_taborder("11");
            obj.set_text("협력사 ID");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("OSPVENDORID");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_OSPVENDORID","518",null,"188","20",null,"250",null,null,null,null,this.div_work.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_OSPVENDORID","706",null,"22","20",null,"250",null,null,null,null,this.div_work.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_AREAID_id","760","421",null,"20","70",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("14");
            obj.set_visible("false");
            obj.set_enable("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_OSPVENDORID_id","760","451",null,"20","70",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("15");
            obj.set_visible("false");
            obj.set_enable("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label00_00_01","0",null,"103","20",null,"224",null,null,null,null,this.div_work.form);
            obj.set_taborder("16");
            obj.set_text("공정명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSSEGMENTNAME");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_PROCESSSEGMENTNAME","108",null,"188","20",null,"224",null,null,null,null,this.div_work.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_PROCESSSEGMENTNAME","296",null,"22","20",null,"224",null,null,null,null,this.div_work.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label00_02_00","410",null,"103","20",null,"224",null,null,null,null,this.div_work.form);
            obj.set_taborder("19");
            obj.set_text("비용구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("EXPENSEGUBUN");
            this.div_work.addChild(obj.name, obj);

            obj = new Combo("cbo_EXPENSEGUBUN","518",null,"205","20",null,"224",null,null,null,null,this.div_work.form);
            obj.set_taborder("20");
            obj.set_codecolumn("C,ClaimType,ALL,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_PROCESSSEGMENTID","486","403",null,"20","344",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("21");
            obj.set_visible("false");
            obj.set_enable("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_search2",null,null,"46","24","12","254",null,null,null,null,this.div_work.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_PERIODID","300","49","128","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_claimClosureStatusDetail",null,null,"29","24","5","218",null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_confIf",null,"15","71","24","129",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("확정");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("CONFIRMATION");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancelConf",null,"15","81","24","59",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("확정취소");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("DEFINITECANCELLATION");
            this.addChild(obj.name, obj);
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

            obj = new BindItem("item0","div_work.form.edt_PERIODSTATE","value","ds_claimPeriod","PERIODSTATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.form.edt_PERIODID","value","ds_claimPeriod","PERIODID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_monthCalendar.xfdl");
        };
        
        // User Script
        this.registerScript("OSM00500M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Claim 마감 현황
         * 파일명 		: OSM00500M.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.04.11
         *
         * 설  명		: Claim 마감 현황
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.11	진성하   	최초작성
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
        	this.tab_search.Tabpage1.form.div_PERIODNAME.form.msk_month.set_value(this.fv_currDate.substring(0,6));

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

        	if(this.gfn_isNull(this.tab_search.Tabpage1.form.div_PERIODNAME.form.msk_month.value)){
        		this.gfn_Message("InputSomeThing", "CLOSEYM", "warning", "ok");
        		this.tab_search.Tabpage1.form.div_PERIODNAME.setFocus();
        		return;
        	}

        	fv_plantid = this.tab_search.Tabpage1.form.cbo_plantid.value;

        	this.ds_claimClosureStatus.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cbo_plantid.value);
        	if(!this.gfn_isNull(this.tab_search.Tabpage1.form.div_PERIODNAME.form.msk_month.value))
        		this.ds_search.setColumn(0, "PERIODNAME", this.tab_search.Tabpage1.form.div_PERIODNAME.form.msk_month.text);
        	this.ds_search.setColumn(0, "PERIODTYPE", "Claim");
        	this.ds_search.setColumn(0, "AREAID", this.tab_search.Tabpage1.form.edt_AREAID_id.value);

        	// 협력사 id 수정 (21.07.01)
        	//this.ds_search.setColumn(0, "OSPVENDORID", this.tab_search.Tabpage1.form.edt_OSPVENDORID.value);
        	this.ds_search.setColumn(0, "OSPVENDORID", this.tab_search.Tabpage1.form.edt_OSPVENDORID_id.value);
        	this.ds_search.setColumn(0, "OSPVENDORNAME", this.tab_search.Tabpage1.form.edt_OSPVENDORNAME.value);

        	var sSvcID = "selectGetOutsourcedClaimClosureStatus";
        	var sController = "/osm00500/selectGetOutsourcedClaimClosureStatus.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_claimClosureStatus=output ds_claimPeriod=output2";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.tab_search.Tabpage1.form.edt_OSPVENDORNAME.set_value("");
        	this.tab_search.Tabpage1.form.edt_OSPVENDORID.set_value("");
        	this.tab_search.Tabpage1.form.edt_OSPVENDORID_id.set_value("");

        	this.tab_search.Tabpage1.form.edt_AREAID.set_value("");
        	this.tab_search.Tabpage1.form.edt_AREAID_id.set_value("");

        	this.tab_search.Tabpage1.form.cbo_plantid.set_value(this.gf_getSiteType());
        	this.fv_currDate = this.nfn_getCurrentSystemTime();
        	this.tab_search.Tabpage1.form.div_PERIODNAME.form.msk_month.set_value(this.fv_currDate.substring(0,6));

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
        		// (21.06.24) - 추가
        		if (trId == "saveConfProcess")
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

        		this.gfn_Message(errMsg, "", "error", "ok");
        		//this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "selectGetOutsourcedClaimClosureStatus")
        		{

        		}
        		else if(trId == "selectGetChkOspClose")					// (21.06.23) 확정 가능 한지 체크
        		{
        			//trace(" (1)확정 전 체크 확인 [ds_claimCloseConf] : "+this.ds_claimCloseConf.saveXML());
        			//trace(" (2)확정 전 체크 확인 [ds_claimIfCnt] : "+this.ds_claimIfCnt.rowcount);
        			//trace(" (3)확정 전 체크 확인 [ds_claimClosureStatusCnt] : "+this.ds_claimClosureStatusCnt.rowcount);
        			var nPeriodCnt = this.ds_claimCloseConf.rowcount;
        			if(nPeriodCnt == 0)
        			{
        				this.gfn_Message("InValidOspData008", "", "error", "ok");  // (E)마감년월 정보가 없습니다.먼저 마감년월 정보를 입력해주세요
        				return;
        			}

        			var nPeriod 		= this.ds_search.getColumn(0,"PERIODNAME");
        			var nPreIfCnt		= this.ds_claimIfCnt.getColumn(0,"IF_CNT");
        			var nPeriodstate 	= this.ds_claimCloseConf.getColumn(0,"PERIODSTATE");
        			if(nPeriodstate == 'Close' || nPreIfCnt != 0)
        			{
        				this.gfn_Message("CheckClaimClosureConf01", nPeriod, "error", "ok");  // 마감 년월 {0} 의 확정 내용이 있습니다.(확정 취소 후 확정하세요.)
        				return;
        			}

        			// 조회 내용과 == 대상cnt가 같은지 판단 , 필터가 필수값만 들어 있는지 확인
        			var nMainCnt 		= this.ds_claimClosureStatus.rowcount;
        			var nChkStatusCnt 	= this.ds_claimClosureStatusCnt.rowcount;
        			if((nMainCnt != nChkStatusCnt) || !(this.fn_chkFilter()))
        			{
        				// 확정 건수가 다릅니다. 확인 후 진행 하세요. (확정 대상 : {0} 건 입니다.)
        				this.gfn_Message("CheckClaimClosureCnt", nChkStatusCnt, "error", "ok");
        				return;
        			}
        			// 확정 저장 로직을 탄다.
        			// 없는 경우 저장 (osm_ospclose(분할/감면)  에 데이터 생성)
        			this.fn_saveClaimConf("S");


        		}
        		else if (trId == "saveConfProcess")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장이 완료되었습니다.
        			// 저장 완료시
        			this.fn_search();
        		}
        		else if(trId == "selectGetChkOspCloseCancel")			// (21.06.24) 확정취소 가능 한지 체크
        		{
        			//ds_claimCloseConf=output1 ds_claimIfCnt=output2 ds_claimClosureStatusCancelCnt=output
        			var nPeriodCnt = this.ds_claimCloseConf.rowcount;
        			if(nPeriodCnt == 0)
        			{
        				this.gfn_Message("InValidOspData008", "", "error", "ok");  // (E)마감년월 정보가 없습니다.먼저 마감년월 정보를 입력해주세요
        				return;
        			}

        			var nPeriod 		= this.ds_search.getColumn(0,"PERIODNAME");
        			var nPreIfCnt		= this.ds_claimIfCnt.getColumn(0,"IF_CNT");
        			var nPeriodstate 	= this.ds_claimCloseConf.getColumn(0,"PERIODSTATE");
        			//trace(" [nPeriodstate]====> : "+nPeriodstate+" [nPreIfCnt]====> : "+nPreIfCnt);
        			if(nPeriodstate == 'Open' || nPreIfCnt == 0)
        			{
        				this.gfn_Message("CheckClaimClosureConf02", nPeriod, "error", "ok");  // 마감 년월 {0} 의 확정 내용이 없습니다.(확정 후 확정 취소하세요.)
        				return;
        			}


        			//trace(" [ds_claimIfYn]====>: "+this.ds_claimIfYn.saveXML());
        			var nIfYn = this.ds_claimIfYn.getColumn(0,"IF_YN");
        			if(nIfYn == 'Y')
        			{
        				this.gfn_Message("CheckClaimClosureIf", "", "error", "ok");  // 확정 취소 내용중 ERP 전송된 내용이 있습니다. ERP전송 내용이 없는 경우만 확정 취소 가능 합니다.
        				return;
        			}


        			// 조회 내용과 == 대상cnt가 같은지 판단 , 필터가 필수값만 들어 있는지 확인
        			var nMainCnt 				= this.ds_claimClosureStatus.rowcount;
        			var nChkStatusCnacelCnt 	= this.ds_claimClosureStatusCancelCnt.rowcount;
        			if((nMainCnt != nChkStatusCnacelCnt) || !(this.fn_chkFilter()))
        			{
        				// 확정 건수가 다릅니다. 확인 후 진행 하세요. (확정 대상 : {0} 건 입니다.)
        				this.gfn_Message("CheckClaimClosureCancelCnt", nChkStatusCnacelCnt, "error", "ok");
        				return;
        			}
        			// 확정취소 저장 로직을 탄다.
        			// 없는 경우 저장 (osm_ospclose(분할/감면)  에 데이터 생성)
        			this.fn_saveClaimConf("C");


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
        		// (21.07.01) 협력사 조회 조건 수정
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
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        /*
         * 확정 가능한지 판단(chk) - 21.06.23 추가
         */
        this.fn_getChkConf = function ()
        {
        	var nSearchCnt = this.ds_search.rowcount;
        	if(nSearchCnt == 0)
        	{
        		this.gfn_Message("NeedSearch", null, "warning", "ok");			// 검색을 먼저 해주세요.
        		return;
        	}

        	// (21.08.03) 협력사 체크
        	/* 그리드 필수체크 */
        	var nCnt = this.ds_claimClosureStatus.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nCnkNm = this.ds_claimClosureStatus.getColumn(i,"OSPVENDORNAME");
        		if(this.gfn_isNull(nCnkNm))
        		{
        			// {0}가 없습니다.  MessageParamIsNull
        			this.gfn_Message("MessageParamIsNull", this.nfn_getDictionaryname("PARTNERS",true), "warning", "ok");  // 협력사
        			return;
        		}
        	}


        	this.ds_claimCloseConf.clearData();
        	this.ds_claimIfCnt.clearData();
        	this.ds_claimClosureStatusCnt.clearData();

        	//trace(" 확정 전 조회 조건 : "+this.ds_search.saveXML());

        	var sSvcID = "selectGetChkOspClose";
        	var sController = "/osm00500/selectGetChkOspClose.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_claimCloseConf=output1 ds_claimIfCnt=output2 ds_claimClosureStatusCnt=output3";		// OPEN 여부, 감면/불량중에 I/F 여부 체크, 총 수량 체크(조회 내용과같은지)
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        /*
         * (21.06.23) 필터 내용중 필수값 제외 다른 조건 걸려있는지 확인
         */
        this.fn_chkFilter = function ()
        {
        	if(!this.gfn_isNull(this.ds_search.getColumn(0,"AREAID"))){
        		return false;
        	}
        	if(!this.gfn_isNull(this.ds_search.getColumn(0,"OSPVENDORID"))){
        		return false;
        	}
        	if(!this.gfn_isNull(this.ds_search.getColumn(0,"OSPVENDORNAME"))){
        		return false;
        	}
        	return true;
        };

        /*
         * (21.06.23) - 해당 마감년월에 확정 진행
         */
        this.fn_saveClaimConf = function (nType)
        {
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------

        	this.ds_saveType.clearData();
        	this.ds_saveType.addRow();
        	this.ds_saveType.setColumn(0,"SAVE_TYPE",nType);
        	//trace("확정전 확인 : "+this.ds_claimClosureStatus.saveXML());
        	trace("확정전 확인 : "+this.ds_saveType.saveXML());

        	var sSvcID = "saveConfProcess";
        	var sController = "/osm00500/saveConfProcess.do";
        	var sInDatasets = "INPUT1=ds_claimClosureStatus INPUT2=ds_search INPUT3=ds_saveType";
        	var sOutDatasets = "";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * (21.06.24) - 확정 취소 가능한지 판단(chk)
         */
        this.fn_getChkCancelConf = function ()
        {
        	var nSearchCnt = this.ds_search.rowcount;
        	if(nSearchCnt == 0)
        	{
        		this.gfn_Message("NeedSearch", null, "warning", "ok");			// 검색을 먼저 해주세요.
        		return;
        	}

        	this.ds_claimCloseConf.clearData();
        	this.ds_claimIfCnt.clearData();
        	this.ds_claimClosureStatusCancelCnt.clearData();
        	this.ds_claimIfYn.clearData();

        	//trace(" 확정 전 조회 조건 : "+this.ds_search.saveXML());

        	var sSvcID = "selectGetChkOspCloseCancel";
        	var sController = "/osm00500/selectGetChkOspCloseCancel.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_claimCloseConf=output1 ds_claimIfCnt=output2 ds_claimClosureStatusCancelCnt=output3 ds_claimIfYn=output4";		// OPEN 여부, 감면/불량중에 I/F 여부 체크, 총 수량 체크(조회 내용과같은지)
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        	// (21.07.01) 협력사 id 수정
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
        	this.ds_claimClosureStatusDetail.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLANTID", fv_plantid);
        	this.ds_search.setColumn(0, "PERIODID", this.div_work.form.edt_PERIODID.value);
        	this.ds_search.setColumn(0, "CLAIMTYPE", this.div_work.form.cbo_EXPENSEGUBUN.value);
        	this.ds_search.setColumn(0, "OSPVENDORID", this.div_work.form.edt_OSPVENDORID_id.value);
        	this.ds_search.setColumn(0, "PROCESSSEGMENTID", this.div_work.form.edt_PROCESSSEGMENTID.value);
        	this.ds_search.setColumn(0, "AREAID", this.div_work.form.edt_AREAID_id.value);

        	var sSvcID = "selectGetOutsourcedClaimClosureStatusDetail";
        	var sController = "/osm00500/selectGetOutsourcedClaimClosureStatusDetail.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_claimClosureStatusDetail=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        this.div_work_grd_claimClosureStatus_onselectchanged = function(obj,e)
        {
        	this.div_work.form.edt_AREAID.set_value(this.ds_claimClosureStatus.getColumn(e.row,"AREANAME"));
        	this.div_work.form.edt_AREAID_id.set_value(this.ds_claimClosureStatus.getColumn(e.row,"AREAID"));
        	this.div_work.form.edt_OSPVENDORID_id.set_value(this.ds_claimClosureStatus.getColumn(e.row,"VENDORID"));
        	this.div_work.form.edt_OSPVENDORID.set_value(this.ds_claimClosureStatus.getColumn(e.row,"OSPVENDORNAME"));
        };


        /*
         * (21.06.23)
         * 확정 추가 - 마감 후 확정 (추가) 확정시 기본 1 row 생성 -> osm_ospclose(분할/감면) 에 기본 row 생성됨
         */
        this.btn_conf_if_onclick = function(obj,e)
        {
        	// 해당 마감년월에 전체 조회 되었는지 확인 , 이미 확정된 내용 있는지 확인(close), I/F있는지 확인 필요 (조회 -> 콜백)
        	this.fn_getChkConf();
        };


        /*
         * (21.06.23)
         * 확정 취소
         */
        this.btn_cancelConf_onclick = function(obj,e)
        {
        	// 감면,분할 중 i/f 여부 확인 없으면 취소 가능
        	// 전체 조회 확인 (이미 확정 잡아둔 내용 group랑 화면 조회 내용 ) -> 취소도
        	this.fn_getChkCancelConf();
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
            this.div_work.form.grd_claimClosureStatus.addEventHandler("onselectchanged",this.div_work_grd_claimClosureStatus_onselectchanged,this);
            this.div_work.form.btn_AREAID.addEventHandler("onclick",this.div_work_btn_AREAID_onclick,this);
            this.div_work.form.btn_OSPVENDORID.addEventHandler("onclick",this.div_work_btn_OSPVENDORID_onclick,this);
            this.div_work.form.btn_PROCESSSEGMENTNAME.addEventHandler("onclick",this.div_work_btn_PROCESSSEGMENTNAME_onclick,this);
            this.div_work.form.btn_search2.addEventHandler("onclick",this.div_work_btn_search_onclick,this);
            this.btn_confIf.addEventHandler("onclick",this.btn_conf_if_onclick,this);
            this.btn_cancelConf.addEventHandler("onclick",this.btn_cancelConf_onclick,this);
        };
        this.loadIncludeScript("OSM00500M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
