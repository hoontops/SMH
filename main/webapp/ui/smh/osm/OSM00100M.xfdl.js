(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("OSM00100M");
            this.set_titletext("Claim 공정별 기준 금액");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,757);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"UOMTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basProductquotationsegment", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"VARIABLECOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FIXEDCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MATERIALCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MATERIALPROCESSCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BOXCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MOLDCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SAMPLECOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MANUFACTURINGOVERHEAD\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GENERALCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ETCCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PCSAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CUMULATIVEAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CUMULATIVERATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CUMULATIVEPCSAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCYUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"PCSMM\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTAMOUNTTOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BOXCOSTTOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MOLDCOSTTOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SAMPLECOSTTOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MANUFACTURINGOVERHEADTOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GENERALCOSTTOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ETCCOSTTOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DEFECTUNITPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_productInformatByOsp", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCYUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTAMOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BOXCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MOLDCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SAMPLECOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"MANUFACTURINGOVERHEAD\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GENERALCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ETCCOST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"TOPRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TOPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TOPRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSMM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SALEPRICE\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_basUomdefinition", this);
            obj._setContents("<ColumnInfo><Column id=\"UOMDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"UOMDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"UOMTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_copy", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TOPRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TOPROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_taborder("4");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SITE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_plantid","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","105","107","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","105","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"30","15","387","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","40","15","387",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","35",null,"20","37",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"35","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00_00","0","62","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID_nm","108","62",null,"20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID_id","108","172",null,"20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.set_visible("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PROCESSDEFID","108","202",null,"20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_enable("false");
            obj.set_visible("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_PROCESSDEFVERSION","108","232",null,"20","20",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_visible("false");
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

            obj = new Button("btn_searchExchange",null,"-5","91","24","94",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("환산금액조회");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","61",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("10");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reCalculate",null,"15","65","24","114",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_text("재계산");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_saveCopy",null,"15","51","24","180",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_text("복사");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_basProductquotationsegment","-1","183",null,null,"1","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("11");
            obj.set_binddataset("ds_basProductquotationsegment");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"170\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"81\"/><Column size=\"83\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"214\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"공정순서\"/><Cell col=\"1\" text=\"공정수순\"/><Cell col=\"2\" text=\"공정ID\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"유효상태\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"5\" text=\"공정변동비\"/><Cell col=\"6\" text=\"공정고정비\"/><Cell col=\"7\" text=\"자재비\"/><Cell col=\"8\" text=\"자재가공비\"/><Cell col=\"9\" text=\"Box비\"/><Cell col=\"10\" text=\"금형비\"/><Cell col=\"11\" text=\"샘플비\"/><Cell col=\"12\" text=\"제조간접비\"/><Cell col=\"13\" text=\"일반관리비\"/><Cell col=\"14\" text=\"기타\"/><Cell col=\"15\" text=\"불량반영금액\"/><Cell col=\"16\" text=\"견적가\"/><Cell col=\"17\" text=\"견적누적금액\"/><Cell col=\"18\" text=\"PCS금액\"/><Cell col=\"19\" text=\"PCS누적금액\"/><Cell col=\"20\" text=\"공정율(%)\" background=\"yellow\"/><Cell col=\"21\" text=\"공정불량단가\"/><Cell col=\"22\" text=\"설명\"/><Cell col=\"23\" text=\"등록자\" tooltiptext=\"WRITER\"/><Cell col=\"24\" text=\"등록일\" tooltiptext=\"WRITEDATE\"/><Cell col=\"25\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"26\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"bind:PATHSEQUENCE\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" cssclass=\"expr:USE_YN == &apos;Invalid&apos; ? &apos;cell_orange,cell_bold&apos; : &apos;&apos;\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTID\" cssclass=\"expr:USE_YN == &apos;Invalid&apos; ? &apos;cell_orange,cell_bold&apos; : &apos;&apos;\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\" cssclass=\"expr:USE_YN == &apos;Invalid&apos; ? &apos;cell_orange,cell_bold&apos; : &apos;&apos;\"/><Cell col=\"4\" displaytype=\"combotext\" combocodecol=\"C,UsageStatus,,Y,N\" text=\"bind:USE_YN\" cssclass=\"expr:USE_YN == &apos;Invalid&apos; ? &apos;cell_orange,cell_bold&apos; : &apos;&apos;\"/><Cell col=\"5\" text=\"bind:VARIABLECOST\" edittype=\"normal\" displaytype=\"number\" cssclass=\"expr:USE_YN == &apos;Invalid&apos; ? &apos;cell_orange,cell_bold&apos; : &apos;&apos;\"/><Cell col=\"6\" text=\"bind:FIXEDCOST\" edittype=\"normal\" displaytype=\"number\" cssclass=\"expr:USE_YN == &apos;Invalid&apos; ? &apos;cell_orange,cell_bold&apos; : &apos;&apos;\"/><Cell col=\"7\" text=\"bind:MATERIALCOST\" edittype=\"normal\" displaytype=\"number\" cssclass=\"expr:USE_YN == &apos;Invalid&apos; ? &apos;cell_orange,cell_bold&apos; : &apos;&apos;\"/><Cell col=\"8\" text=\"bind:MATERIALPROCESSCOST\" edittype=\"normal\" displaytype=\"number\" cssclass=\"expr:USE_YN == &apos;Invalid&apos; ? &apos;cell_orange,cell_bold&apos; : &apos;&apos;\"/><Cell col=\"9\" text=\"bind:BOXCOST\" edittype=\"normal\" displaytype=\"number\" cssclass=\"expr:USE_YN == &apos;Invalid&apos; ? &apos;cell_orange,cell_bold&apos; : &apos;&apos;\"/><Cell col=\"10\" text=\"bind:MOLDCOST\" edittype=\"normal\" displaytype=\"number\" cssclass=\"expr:USE_YN == &apos;Invalid&apos; ? &apos;cell_orange,cell_bold&apos; : &apos;&apos;\"/><Cell col=\"11\" text=\"bind:SAMPLECOST\" edittype=\"normal\" displaytype=\"number\" cssclass=\"expr:USE_YN == &apos;Invalid&apos; ? &apos;cell_orange,cell_bold&apos; : &apos;&apos;\"/><Cell col=\"12\" text=\"bind:MANUFACTURINGOVERHEAD\" edittype=\"normal\" displaytype=\"number\" cssclass=\"expr:USE_YN == &apos;Invalid&apos; ? &apos;cell_orange,cell_bold&apos; : &apos;&apos;\"/><Cell col=\"13\" text=\"bind:GENERALCOST\" edittype=\"normal\" displaytype=\"number\" cssclass=\"expr:USE_YN == &apos;Invalid&apos; ? &apos;cell_orange,cell_bold&apos; : &apos;&apos;\"/><Cell col=\"14\" text=\"bind:ETCCOST\" edittype=\"normal\" displaytype=\"number\" cssclass=\"expr:USE_YN == &apos;Invalid&apos; ? &apos;cell_orange,cell_bold&apos; : &apos;&apos;\"/><Cell col=\"15\" text=\"bind:DEFECTAMOUNT\" edittype=\"none\" maskeditformat=\"#,##0\" displaytype=\"number\" cssclass=\"expr:USE_YN == &apos;Invalid&apos; ? &apos;cell_orange,cell_bold&apos; : &apos;&apos;\"/><Cell col=\"16\" text=\"bind:AMOUNT\" edittype=\"none\" maskeditformat=\"#,##0\" displaytype=\"number\" cssclass=\"expr:USE_YN == &apos;Invalid&apos; ? &apos;cell_orange,cell_bold&apos; : &apos;&apos;\"/><Cell col=\"17\" text=\"bind:CUMULATIVEAMOUNT\" edittype=\"none\" maskeditformat=\"#,##0\" displaytype=\"number\" cssclass=\"expr:USE_YN == &apos;Invalid&apos; ? &apos;cell_orange,cell_bold&apos; : &apos;&apos;\"/><Cell col=\"18\" text=\"bind:PCSAMOUNT\" edittype=\"none\" maskeditformat=\"#,##0\" displaytype=\"number\" cssclass=\"expr:USE_YN == &apos;Invalid&apos; ? &apos;cell_orange,cell_bold&apos; : &apos;&apos;\"/><Cell col=\"19\" text=\"bind:CUMULATIVEPCSAMOUNT\" edittype=\"none\" maskeditformat=\"#,##0\" displaytype=\"number\" cssclass=\"expr:USE_YN == &apos;Invalid&apos; ? &apos;cell_orange,cell_bold&apos; : &apos;&apos;\"/><Cell col=\"20\" text=\"bind:CUMULATIVERATE\" edittype=\"none\" maskeditformat=\"#,##0\" displaytype=\"number\" background=\"yellow\" cssclass=\"expr:USE_YN == &apos;Invalid&apos; ? &apos;cell_orange,cell_bold&apos; : &apos;&apos;\"/><Cell col=\"21\" text=\"bind:DEFECTUNITPRICE\" edittype=\"none\" maskeditformat=\"#,##0\" displaytype=\"number\" cssclass=\"expr:USE_YN == &apos;Invalid&apos; ? &apos;cell_orange,cell_bold&apos; : &apos;&apos;\"/><Cell col=\"22\" text=\"bind:DESCRIPTION\" edittype=\"normal\" textAlign=\"left\" cssclass=\"expr:USE_YN == &apos;Invalid&apos; ? &apos;cell_orange,cell_bold&apos; : &apos;&apos;\"/><Cell col=\"23\" textAlign=\"left\" text=\"bind:CREATOR\"/><Cell col=\"24\" text=\"bind:CREATEDTIME\" calendardisplaynulltype=\"none\"/><Cell col=\"25\" textAlign=\"left\" text=\"bind:MODIFIER\"/><Cell col=\"26\" text=\"bind:CREATEDTIME\" calendardisplaynulltype=\"none\"/></Band><Band id=\"summary\"><Cell colspan=\"5\" text=\"합계\" tooltiptext=\"TOTALAMOUNT\"/><Cell col=\"5\" expr=\"dataset.getSum(&quot;VARIABLECOST&quot;)\" displaytype=\"number\"/><Cell col=\"6\" expr=\"dataset.getSum(&quot;FIXEDCOST&quot;)\" displaytype=\"number\"/><Cell col=\"7\" expr=\"dataset.getSum(&quot;MATERIALCOST&quot;)\" displaytype=\"number\"/><Cell col=\"8\" expr=\"dataset.getSum(&quot;MATERIALPROCESSCOST&quot;)\" displaytype=\"number\"/><Cell col=\"9\" expr=\"dataset.getSum(&quot;BOXCOST&quot;)\" displaytype=\"number\"/><Cell col=\"10\" expr=\"dataset.getSum(&quot;MOLDCOST&quot;)\" displaytype=\"number\"/><Cell col=\"11\" expr=\"dataset.getSum(&quot;SAMPLECOST&quot;)\" displaytype=\"number\"/><Cell col=\"12\" expr=\"dataset.getSum(&quot;MANUFACTURINGOVERHEAD&quot;)\" displaytype=\"number\"/><Cell col=\"13\" expr=\"dataset.getSum(&quot;GENERALCOST&quot;)\" displaytype=\"number\"/><Cell col=\"14\" expr=\"dataset.getSum(&quot;ETCCOST&quot;)\" displaytype=\"number\"/><Cell col=\"15\" expr=\"dataset.getSum(&quot;DEFECTAMOUNT&quot;)\" displaytype=\"number\"/><Cell col=\"16\" expr=\"dataset.getSum(&quot;AMOUNT&quot;)\" displaytype=\"number\"/><Cell col=\"17\" displaytype=\"number\"/><Cell col=\"18\" expr=\"nexacro.round(dataset.getSum(&quot;PCSAMOUNT&quot;))\" displaytype=\"number\"/><Cell col=\"19\" displaytype=\"number\"/><Cell col=\"20\" displaytype=\"number\"/><Cell col=\"21\" displaytype=\"number\"/><Cell col=\"22\"/><Cell col=\"23\"/><Cell col=\"24\"/><Cell col=\"25\"/><Cell col=\"26\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","175","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("12");
            obj.set_text("불량 단가 관리");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_OUTSOURCEDCLAIMBASEAMOUNT");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_basProductquotationsegment","sta_subTitle:20","0",null,"34","761",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basProductquotationsegment",null,"156","29","24","5",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label02_00","0","35","103","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("15");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","35","168","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("16");
            obj.set_enable("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID","783","35","22","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_finder");
            obj.set_visible("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","322","35","329","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("18");
            obj.set_enable("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFVERSION","278","35","42","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("19");
            obj.set_enable("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label02_00_00","0","60","103","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("20");
            obj.set_text("화폐단위");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CURRENCYUNIT");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"55","45","5","776",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("21");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label02_00_00_00","0","86","103","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("22");
            obj.set_text("불량반영금액");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DEFECTAMOUNT");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label02_00_00_00_00","0","113","103","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("23");
            obj.set_text("샘플비");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SAMPLECOST");
            this.div_work.addChild(obj.name, obj);

            obj = new Combo("cbo_CURRENCYUNIT","108","60","105","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_basUomdefinition");
            obj.set_codecolumn("UOMDEFID");
            obj.set_datacolumn("UOMDEFNAME");
            obj.set_enable("true");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label02_00_00_01","220","60","103","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("24");
            obj.set_text("PCS/mm");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PCSMM");
            this.div_work.addChild(obj.name, obj);

            obj = new MaskEdit("msk_PCSMM","328","60","105","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label02_00_00_01_00","439","60","103","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("25");
            obj.set_text("기타비");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ETCCOST");
            this.div_work.addChild(obj.name, obj);

            obj = new MaskEdit("msk_ETCCOST","547","60","105","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_format("#,###");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label02_00_00_01_01","220","86","103","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("26");
            obj.set_text("BOX비");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("BOXCOST");
            this.div_work.addChild(obj.name, obj);

            obj = new MaskEdit("msk_BOXCOST","328","86","105","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_format("#,###");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label02_00_00_01_00_00","439","86","103","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("27");
            obj.set_text("금형비");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MOLDCOST");
            this.div_work.addChild(obj.name, obj);

            obj = new MaskEdit("msk_MOLDCOST","547","86","105","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_format("#,###");
            this.div_work.addChild(obj.name, obj);

            obj = new MaskEdit("msk_DEFECTAMOUNT","108","86","105","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_format("#,###");
            this.div_work.addChild(obj.name, obj);

            obj = new MaskEdit("msk_SAMPLECOST","108","112","105","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_format("#,###");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label02_00_00_01_01_00","220","112","103","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("28");
            obj.set_text("제조간접비");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("MANUFACTURINGOVERHEAD");
            this.div_work.addChild(obj.name, obj);

            obj = new MaskEdit("msk_MANUFACTURINGOVERHEAD","328","112","105","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_format("#,###");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label02_00_00_01_00_00_00","439","112","103","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("29");
            obj.set_text("일반관리비");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("GENERALCOST");
            this.div_work.addChild(obj.name, obj);

            obj = new MaskEdit("msk_GENERALCOST","547","112","105","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_format("#,###");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label02_00_01",null,"158","103","20","587",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("30");
            obj.set_text("FROM 품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("FROMPRODUCTDEFID");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID2",null,"158","168","20","414",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID2_id",null,"158","42","20","370",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("31");
            obj.set_enable("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID2",null,"158","22","20","345",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID2_nm",null,"158","305","20","38",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("32");
            obj.set_enable("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_PROCESSDEFVERSION2","798","122",null,"20","45",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("33");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_PROCESSDEFID2","798","92",null,"20","45",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("34");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_PROCESSDEFID","698","22",null,"20","115",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("35");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_PROCESSDEFVERSION","698","52",null,"20","115",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("36");
            obj.set_enable("false");
            obj.set_visible("false");
            this.div_work.addChild(obj.name, obj);

            obj = new MaskEdit("msk_SALEPRICE","727","60","105","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("37");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label02_00_00_01_00_01","659","60","63","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("38");
            obj.set_text("판가");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("SALEPRICE");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,757,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_work.form.edt_PRODUCTDEFID","value","ds_productInformatByOsp","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.form.edt_PRODUCTDEFVERSION","value","ds_productInformatByOsp","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.form.edt_PRODUCTDEFNAME","value","ds_productInformatByOsp","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_work.form.cbo_CURRENCYUNIT","value","ds_productInformatByOsp","CURRENCYUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_work.form.msk_PCSMM","value","ds_productInformatByOsp","PCSMM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_work.form.msk_ETCCOST","value","ds_productInformatByOsp","ETCCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_work.form.msk_MOLDCOST","value","ds_productInformatByOsp","MOLDCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_work.form.msk_GENERALCOST","value","ds_productInformatByOsp","GENERALCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_work.form.msk_MANUFACTURINGOVERHEAD","value","ds_productInformatByOsp","MANUFACTURINGOVERHEAD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_work.form.msk_BOXCOST","value","ds_productInformatByOsp","BOXCOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_work.form.msk_DEFECTAMOUNT","value","ds_productInformatByOsp","DEFECTAMOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_work.form.msk_SAMPLECOST","value","ds_productInformatByOsp","SAMPLECOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_work.form.edt_PROCESSDEFID","value","ds_productInformatByOsp","PROCESSDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_work.form.edt_PROCESSDEFVERSION","value","ds_productInformatByOsp","PROCESSDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_work.form.edt_PRODUCTDEFID2","value","ds_productInformatByOsp","TOPRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_work.form.edt_PRODUCTDEFID2_id","value","ds_productInformatByOsp","TOPRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_work.form.edt_PROCESSDEFVERSION2","value","ds_productInformatByOsp","TOPROCESSDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div_work.form.edt_PROCESSDEFID2","value","ds_productInformatByOsp","TOPROCESSDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_work.form.edt_PRODUCTDEFID2_nm","value","ds_productInformatByOsp","TOPRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div_work.form.msk_SALEPRICE","value","ds_productInformatByOsp","SALEPRICE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("OSM00100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Claim공정별 기준금액
         * 파일명 		: OSM00100M.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.04.11
         *
         * 설  명		: Claim공정별 기준금액
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.11	진성하   	최초작성
         * 2021.07.28	김진현		품목 라우팅에 미사용 여부 (21.07.28) USE_YN 컬럼 추가 및 쿼리 수정
         * 2027.08.08   김진현		등록자,등록일,수정자,수정일 추가
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

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	//this.div_page.set_visible(true);

        	// paging
        	//this.fn_paging_onload(obj);
        	// paging end
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "UOMTYPE", "Currency");

        	var sSvcID = "selectGetUomDefinitionListByOsp";
        	var sController = "/osm00100/selectGetUomDefinitionListByOsp.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_basUomdefinition=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	this.tab_search.Tabpage1.form.cbo_plantid.set_value(this.gf_getSiteType());
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
        	var strColIdList = "cbo_plantid,edt_PRODUCTDEFID";
        	var strColNmList = "SITE,PRODUCTDEFID";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	this.ds_basProductquotationsegment.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cbo_plantid.value);
        	this.ds_search.setColumn(0, "PRODUCTDEFID", this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value);
        	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", this.tab_search.Tabpage1.form.edt_PRODUCTDEFID_id.value);
        	this.ds_search.setColumn(0, "PROCESSDEFID", this.tab_search.Tabpage1.form.edt_PROCESSDEFID.value);
        	this.ds_search.setColumn(0, "PROCESSDEFVERSION", this.tab_search.Tabpage1.form.edt_PROCESSDEFVERSION.value);

        	var sSvcID = "selectBasProductquotationsegmentList";
        	var sController = "/osm00100/selectBasProductquotationsegmentList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_basProductquotationsegment=output ds_productInformatByOsp=output2";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
         * 기능 : 저장(승인)
         */
        this.fn_save = function (obj, e)
        {

        	var component = this.div_work;
        	var strColIdList = "edt_PRODUCTDEFID,cbo_CURRENCYUNIT";
        	var strColNmList = "PRODUCTDEFID,CURRENCYUNIT";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	if (!this.gfn_dsIsUpdated(this.ds_basProductquotationsegment) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}
        	this.div_header_btn_reCalculate_onclick();
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveBasProductquotationsegment";
        	var sController = "/osm00100/saveBasProductquotationsegment.do";
        	var sInDatasets = "INPUT=ds_productInformatByOsp:A INPUT2=ds_basProductquotationsegment:A";
        	//var sInDatasets = "INPUT=ds_basProductquotationsegment:A";
        	var sOutDatasets = "";

        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장(복사)
         */
        this.fn_saveCopy = function (obj, e)
        {
        	var component = this.div_work;
        	var strColIdList = "edt_PRODUCTDEFID,edt_PRODUCTDEFID2_nm";
        	// (21.07.02) - TO 품목코드 -> FROM 품목코드 변경
        	//var strColNmList = "PRODUCTDEFID,TOPRODUCTDEFID";
        	var strColNmList = "PRODUCTDEFID,FROMPRODUCTDEFID";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	if(this.div_work.form.edt_PRODUCTDEFID.value == this.div_work.form.edt_PRODUCTDEFID2.value
        		&& this.div_work.form.edt_PRODUCTDEFVERSION.value == this.div_work.form.edt_PRODUCTDEFID2_id.value ){
        		this.gfn_Message("SameCopyTarget", "", "error", "ok");
        		return;
        	}

        	if (!this.gfn_dsIsUpdated(this.ds_productInformatByOsp) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	var bOK = this.gfn_Message("OspDoProcessWant", "COPY", "conf", "yesno");//복사 처리를 하시겠습니까?
        	if (bOK == false) return;

        /*
        	this.ds_productInformatByOsp.setColumn(0,"TOPRODUCTDEFID",this.div_work.form.edt_PRODUCTDEFID2.value);
        	this.ds_productInformatByOsp.setColumn(0,"TOPRODUCTDEFVERSION",this.div_work.form.edt_PRODUCTDEFID2_id.value);
        	this.ds_productInformatByOsp.setColumn(0,"TOPROCESSDEFID",this.div_work.form.edt_PROCESSDEFID2.value);
        	this.ds_productInformatByOsp.setColumn(0,"TOPROCESSDEFVERSION",this.div_work.form.edt_PROCESSDEFVERSION2.value);
        */
        	// (21.07.01)


        	trace("--------- : "+this.ds_productInformatByOsp.saveXML());

        	//return;
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "copyBasProductquotationsegment";
        	var sController = "/osm00100/copyBasProductquotationsegment.do";
        	var sInDatasets = "INPUT=ds_productInformatByOsp";
        	var sOutDatasets = "";

        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "saveBasProductquotationsegment")
        		{
        			this.gfn_Message("ProcessingSuccess", null, "info", "ok");
        			this.fn_search();
        		}
        		else if (trId == "selectBasProductquotationsegmentList")
        		{
        			this.div_header.form.btn_saveCopy.set_enable(true);
        		}
        		else if (trId == "copyBasProductquotationsegment")
        		{
        			this.gfn_Message("SuccessOspProcess", null, "info", "ok");
        			this.div_header.form.btn_saveCopy.set_enable(false);
        			// (to -> from 변경 조회된 내용이 from 이다. 재조회 탄다.) (21.07.02)
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

        	if(sPopupId == "PRODUCTDEFID")
        	{
        		this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.set_value(rtn[0]);
        		this.tab_search.Tabpage1.form.edt_PRODUCTDEFID_nm.set_value(rtn[1]);
        		this.tab_search.Tabpage1.form.edt_PRODUCTDEFID_id.set_value(rtn[2]);
        		this.tab_search.Tabpage1.form.edt_PROCESSDEFID.set_value(rtn[3]);
        		this.tab_search.Tabpage1.form.edt_PROCESSDEFVERSION.set_value(rtn[4]);
        	}

        	if(sPopupId == "PRODUCTDEFID2")
        	{
        		this.div_work.form.edt_PRODUCTDEFID2.set_value(rtn[0]);
        		this.div_work.form.edt_PRODUCTDEFID2_nm.set_value(rtn[1]);
        		this.div_work.form.edt_PRODUCTDEFID2_id.set_value(rtn[2]);
        		this.div_work.form.edt_PROCESSDEFID2.set_value(rtn[3]);
        		this.div_work.form.edt_PROCESSDEFVERSION2.set_value(rtn[4]);
        	}

        }
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	var popupId = "PRODUCTDEFID";
        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00215";
        	oArg.arg_popupNm = "품목코드";
        	oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION|PROCESSDEFID|PROCESSDEFVERSION";
        	oArg.arg_paramCols = "ENTERPRISEID|PLANTID";
        	oArg.arg_paramValues = this.gf_getEnterpriseId()+"|"+this.tab_search.Tabpage1.form.cbo_plantid.value;
        	oArg.arg_searchStr = "PRODUCTDEFID="+this.tab_search.Tabpage1.form.edt_PRODUCTDEFID.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };

        this.div_work_btn_PRODUCTDEFID2_onclick = function(obj,e)
        {
        	var popupId = "PRODUCTDEFID2";
        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00215";
        	oArg.arg_popupNm = "품목코드";
        	oArg.arg_rtnCols =  "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION|PROCESSDEFID|PROCESSDEFVERSION";
        	oArg.arg_paramCols = "ENTERPRISEID|PLANTID";
        	oArg.arg_paramValues = this.gf_getEnterpriseId()+"|"+this.tab_search.Tabpage1.form.cbo_plantid.value;
        //	oArg.arg_paramCols = "ENTERPRISEID|PLANTID|"+(this.gfn_isNull(this.div_work.form.edt_PRODUCTDEFVERSION.value)?"1":"PRODUCTDEFVERSION");
        //	oArg.arg_paramValues = this.gf_getEnterpriseId()+"|"+this.tab_search.Tabpage1.form.cbo_plantid.value+"|"+(this.gfn_isNull(this.div_work.form.edt_PRODUCTDEFVERSION.value)?"1":this.div_work.form.edt_PRODUCTDEFVERSION.value);
        	oArg.arg_searchStr = "PRODUCTDEFID="+this.div_work.form.edt_PRODUCTDEFID2.value;
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };


        this.div_header_btn_searchExchange_onclick = function(obj,e)
        {
        	var popupId = "EXCHANGE";
        	var oArg = {};
        	oArg.arg_productdefid = this.div_work.form.edt_PRODUCTDEFID.value;
        	oArg.arg_productdefversion = this.div_work.form.edt_PRODUCTDEFVERSION.value;
        	oArg.arg_productdefname = this.div_work.form.edt_PRODUCTDEFNAME.value;
        	oArg.arg_processdefid = this.div_work.form.edt_PROCESSDEFID.value;
        	oArg.arg_processdefversion = this.div_work.form.edt_PROCESSDEFVERSION.value;
        	this.gfn_openPopup(popupId,"osm::OSM00101P.xfdl",oArg,"");
        };

        this.div_header_btn_reCalculate_onclick = function(obj,e)
        {
        	var component = this.div_work;
        	var strColIdList = "edt_PRODUCTDEFID,cbo_CURRENCYUNIT";
        	var strColNmList = "PRODUCTDEFID,CURRENCYUNIT";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	//nexacro.getEnvironment().set_usewaitcursor(true);
        	this.setWaitCursor(true, true); //커서 활성화.
        	this.setTimer(1,10);

        	var decSalePrice = nexacro.toNumber(this.nfn_nvl(this.ds_productInformatByOsp.getColumn(0,"SALEPRICE"),0));

        	var decAmount = 0; // 견적계산
        	var decPcsamount = 0; //pcs 견적금액
        	var strTotecdefectAmount = this.div_work.form.msk_DEFECTAMOUNT.value;// txtDefectamount.Text.ToString();
        	var strTotalBoxAMT = this.div_work.form.msk_BOXCOST.value;//txtBoxAMT.Text.ToString();
        	var strTotalMoldAMT = this.div_work.form.msk_MOLDCOST.value;//txtMoldAMT.Text.ToString();
        	var strTotalSampleAMT = this.div_work.form.msk_SAMPLECOST.value;//txtSampleAMT.Text.ToString();
        	var strTotalIndirectAMT = this.div_work.form.msk_MANUFACTURINGOVERHEAD.value;//txtIndirectAMT.Text.ToString();
        	var strTotalNormalAMT = this.div_work.form.msk_GENERALCOST.value;//txtNormalAMT.Text.ToString();
        	var strTotalEtcAMT = this.div_work.form.msk_ETCCOST.value;//txtEtcAMT.Text.ToString();

        	var dectotecdefectAmount = this.nfn_nvl(strTotecdefectAmount,0);
        	var decTotalBoxAMT = this.nfn_nvl(strTotalBoxAMT,0);
        	var decTotalMoldAMT = this.nfn_nvl(strTotalMoldAMT,0);
        	var decTotalSampleAMT = this.nfn_nvl(strTotalSampleAMT,0);
        	var decTotalIndirectAMT = this.nfn_nvl(strTotalIndirectAMT,0);
        	var decTotalNormalAMT = this.nfn_nvl(strTotalNormalAMT,0);
        	var decTotalEtcAMT = this.nfn_nvl(strTotalEtcAMT,0);

        	var strPcsmm = nexacro.toNumber(this.div_work.form.msk_PCSMM.value);//txtPcsmm.Text.ToString();
        	var decPcsmm = this.nfn_nvl(strPcsmm,0);

        	//불량금액 n분하기
        	var intRowCount = this.ds_basProductquotationsegment.rowcount;//grdOutsourcedClaimBaseAmount.View.DataRowCount;
        	//
        	if (intRowCount == 0) return;
        	var dectotecdefectAmountDiv = 0;
        	var dectotecdefectAmountDivsub = 0;
        	var decTotalBoxAMTDiv = 0;
        	var decTotalBoxAMTDivSub = 0;
        	var decTotalMoldAMTDiv = 0;
        	var decTotalMoldAMTDivSub = 0;
        	var decTotalSampleAMTDiv = 0;
        	var decTotalSampleAMTDivSub = 0;
        	var decTotalIndirectAMTDiv = 0;
        	var decTotalIndirectAMTDivSub = 0;
        	var decTotalNormalAMTDiv = 0;
        	var decTotalNormalAMTDivSub = 0;
        	var decTotalEtcAMTDiv = 0;
        	var decTotalEtcAMTDivSub = 0;

        	if (dectotecdefectAmount > 0)
        	{
        		dectotecdefectAmountDiv = Math.trunc(dectotecdefectAmount / intRowCount);
        		dectotecdefectAmountDivsub = dectotecdefectAmount - (dectotecdefectAmountDiv * intRowCount);
        	}
        	if(decTotalBoxAMT > 0)
        	{
        		decTotalBoxAMTDiv = Math.trunc(decTotalBoxAMT / intRowCount);
        		decTotalBoxAMTDivSub = decTotalBoxAMT - (decTotalBoxAMTDiv * intRowCount);
        	}

        	if (decTotalMoldAMT > 0)
        	{
        		decTotalMoldAMTDiv = Math.trunc(decTotalMoldAMT / intRowCount);
        		decTotalMoldAMTDivSub = decTotalMoldAMT - (decTotalMoldAMTDiv * intRowCount);
        	}

        	if (decTotalSampleAMT > 0)
        	{
        		decTotalSampleAMTDiv = Math.trunc(decTotalSampleAMT / intRowCount);
        		decTotalSampleAMTDivSub = decTotalSampleAMT - (decTotalSampleAMTDiv * intRowCount);
        	}

        	if (decTotalIndirectAMT > 0)
        	{
        		decTotalIndirectAMTDiv = Math.trunc(decTotalIndirectAMT / intRowCount);
        		decTotalIndirectAMTDivSub = decTotalIndirectAMT - (decTotalIndirectAMTDiv * intRowCount);
        	}

        	if (decTotalNormalAMT > 0)
        	{
        		decTotalNormalAMTDiv = Math.trunc(decTotalNormalAMT / intRowCount);
        		decTotalNormalAMTDivSub = decTotalNormalAMT - (decTotalNormalAMTDiv * intRowCount);
        	}
        	if (decTotalEtcAMT > 0)
        	{
        		decTotalEtcAMTDiv = Math.trunc(decTotalEtcAMT / intRowCount);
        		decTotalEtcAMTDivSub = decTotalEtcAMT - (decTotalEtcAMTDiv * intRowCount);
        	}
        	var decAmountSum = 0;// 견적가 누계
        	var decCumulativepcsamount = 0;//pcs금액 누계
           // 1.제조비용 합계 구하기
        	for(var i=0; i<this.ds_basProductquotationsegment.rowcount; i++){
        		this.ds_basProductquotationsegment.setColumn(i,"CURRENCYUNIT",this.div_work.form.cbo_CURRENCYUNIT.value);
        		var decDefectamounttot = this.nfn_nvl(this.div_work.form.msk_DEFECTAMOUNT.value,0);
        		this.ds_basProductquotationsegment.setColumn(i,"DEFECTAMOUNTTOT",decDefectamounttot);
        		var decVariablecost = this.nfn_nvl(this.ds_basProductquotationsegment.getColumn(i,"VARIABLECOST"),0);
        		this.ds_basProductquotationsegment.setColumn(i,"VARIABLECOST",decVariablecost);
        		var decFixedcost = this.nfn_nvl(this.ds_basProductquotationsegment.getColumn(i,"FIXEDCOST"),0);
        		this.ds_basProductquotationsegment.setColumn(i,"FIXEDCOST",decFixedcost);
        		var decMaterialcost = this.nfn_nvl(this.ds_basProductquotationsegment.getColumn(i,"MATERIALCOST"),0);
        		this.ds_basProductquotationsegment.setColumn(i,"MATERIALCOST",decMaterialcost);
        		var decMaterialprocesscost = this.nfn_nvl(this.ds_basProductquotationsegment.getColumn(i,"MATERIALPROCESSCOST"),0);
        		this.ds_basProductquotationsegment.setColumn(i,"MATERIALPROCESSCOST",decMaterialprocesscost);
        		var decBoxcost = this.nfn_nvl(this.div_work.form.msk_BOXCOST.value,0);
        		this.ds_basProductquotationsegment.setColumn(i,"BOXCOSTTOT",decBoxcost);
        		var decMoldcost = this.nfn_nvl(this.div_work.form.msk_MOLDCOST.value,0);
        		this.ds_basProductquotationsegment.setColumn(i,"MOLDCOSTTOT",decMoldcost);
                var decSamplecost = this.nfn_nvl(this.div_work.form.msk_SAMPLECOST.value,0);
        		this.ds_basProductquotationsegment.setColumn(i,"SAMPLECOSTTOT",decSamplecost);
        		var decManufacturingoverhead = this.nfn_nvl(this.div_work.form.msk_MANUFACTURINGOVERHEAD.value,0);
        		this.ds_basProductquotationsegment.setColumn(i,"MANUFACTURINGOVERHEADTOT",this.div_work.form.cbo_CURRENCYUNIT.value);
        		var strGeneralcost = this.div_work.form.msk_GENERALCOST.value;
        		var decGeneralcost = this.nfn_nvl(strGeneralcost,0); //
        		this.ds_basProductquotationsegment.setColumn(i,"GENERALCOSTTOT",decGeneralcost);

        		var strEtccost = this.div_work.form.msk_ETCCOST.value;
        		var decEtccost = this.nfn_nvl(strEtccost,0); //
        		this.ds_basProductquotationsegment.setColumn(i,"ETCCOSTTOT",decEtccost);

        		var decsumcost = decVariablecost + decFixedcost + decMaterialcost + decMaterialprocesscost;

        		this.ds_basProductquotationsegment.setColumn(i,"DEFECTAMOUNT",dectotecdefectAmountDiv);
        		this.ds_basProductquotationsegment.setColumn(i,"BOXCOST",decTotalBoxAMTDiv);
        		this.ds_basProductquotationsegment.setColumn(i,"MOLDCOST",decTotalMoldAMTDiv);
        		this.ds_basProductquotationsegment.setColumn(i,"SAMPLECOST",decTotalSampleAMTDiv);
        		this.ds_basProductquotationsegment.setColumn(i,"MANUFACTURINGOVERHEAD",decTotalIndirectAMTDiv);
        		this.ds_basProductquotationsegment.setColumn(i,"GENERALCOST",decTotalNormalAMTDiv);
        		this.ds_basProductquotationsegment.setColumn(i,"ETCCOST",decTotalEtcAMTDiv);

        		decAmount = this.nfn_nvl(decsumcost) + this.nfn_nvl(dectotecdefectAmountDiv) + this.nfn_nvl(decTotalBoxAMTDiv) + this.nfn_nvl(decTotalMoldAMTDiv)
        					+ this.nfn_nvl(decTotalSampleAMTDiv) + this.nfn_nvl(decTotalIndirectAMTDiv) + this.nfn_nvl(decTotalNormalAMTDiv) + this.nfn_nvl(decTotalEtcAMTDiv) ;//견적가

        		dectotecdefectAmountDiv = Math.trunc(dectotecdefectAmount / (intRowCount - i));
        		decTotalBoxAMTDiv = Math.trunc(decTotalBoxAMT / (intRowCount - i));
        		decTotalMoldAMTDiv = Math.trunc(decTotalMoldAMT / (intRowCount - i));
        		decTotalSampleAMTDiv = Math.trunc(decTotalSampleAMT / (intRowCount - i));
        		decTotalIndirectAMTDiv = Math.trunc(decTotalIndirectAMT / (intRowCount - i));
        		decTotalNormalAMTDiv = Math.trunc(decTotalNormalAMT / (intRowCount - i));
        		decTotalEtcAMTDiv = Math.trunc(decTotalEtcAMT / (intRowCount - i));

        		this.ds_basProductquotationsegment.setColumn(i,"DEFECTAMOUNT",dectotecdefectAmountDiv);
        		this.ds_basProductquotationsegment.setColumn(i,"BOXCOST",decTotalBoxAMTDiv);
        		this.ds_basProductquotationsegment.setColumn(i,"MOLDCOST",decTotalMoldAMTDiv);
        		this.ds_basProductquotationsegment.setColumn(i,"SAMPLECOST",decTotalSampleAMTDiv);
        		this.ds_basProductquotationsegment.setColumn(i,"MANUFACTURINGOVERHEAD",decTotalIndirectAMTDiv);
        		this.ds_basProductquotationsegment.setColumn(i,"GENERALCOST",decTotalNormalAMTDiv);
        		this.ds_basProductquotationsegment.setColumn(i,"ETCCOST",decTotalEtcAMTDiv);

        		dectotecdefectAmount = this.nfn_nvl(dectotecdefectAmount) - this.nfn_nvl(dectotecdefectAmountDiv) ;
        		decTotalBoxAMT = this.nfn_nvl(decTotalBoxAMT) - this.nfn_nvl(decTotalBoxAMTDiv,0);
        		decTotalMoldAMT = this.nfn_nvl(decTotalMoldAMT) - this.nfn_nvl(decTotalMoldAMTDiv,0);
        		decTotalSampleAMT = this.nfn_nvl(decTotalSampleAMT) - this.nfn_nvl(decTotalSampleAMTDiv,0);
        		decTotalIndirectAMT = this.nfn_nvl(decTotalIndirectAMT) - this.nfn_nvl(decTotalIndirectAMTDiv,0);
        		decTotalNormalAMT = this.nfn_nvl(decTotalNormalAMT) - this.nfn_nvl(decTotalNormalAMTDiv,0);
        		decTotalEtcAMT = this.nfn_nvl(decTotalEtcAMT) - this.nfn_nvl(decTotalEtcAMTDiv,0);
        //		decAmount = this.nfn_nvl(decsumcost,0) + this.nfn_nvl(dectotecdefectAmountDiv,0)+ this.nfn_nvl(decTotalBoxAMT,0)+ this.nfn_nvl(decTotalMoldAMT,0)
        //				+ this.nfn_nvl(decTotalSampleAMT,0)+ this.nfn_nvl(decTotalIndirectAMT,0)+ this.nfn_nvl(decTotalNormalAMT,0)+ this.nfn_nvl(decTotalEtcAMT,0);//견적가
        		decAmount = decVariablecost + decFixedcost + decMaterialcost + decMaterialprocesscost + decTotalBoxAMTDiv + decTotalMoldAMTDiv + decTotalSampleAMTDiv + decTotalIndirectAMTDiv + decTotalNormalAMTDiv + decTotalEtcAMTDiv + dectotecdefectAmountDiv;
        		this.ds_basProductquotationsegment.setColumn(i,"AMOUNT",decAmount);

        		decAmountSum = this.nfn_nvl(decAmountSum,0) + this.nfn_nvl(decAmount,0);// 견적누계
        		this.ds_basProductquotationsegment.setColumn(i,"CUMULATIVEAMOUNT",decAmountSum);

        		if (decPcsmm == 0)
        		{
        			decPcsamount = 0;
        			decCumulativepcsamount = nexacro.round(this.nfn_nvl(decCumulativepcsamount,0) + this.nfn_nvl(decPcsamount,0),1);
        		}
        		else
        		{
        			decPcsamount = nexacro.round(this.nfn_nvl(decAmount,0) / this.nfn_nvl(decPcsmm,0), 1);
        			decCumulativepcsamount = nexacro.round(this.nfn_nvl(decCumulativepcsamount,0) + this.nfn_nvl(decPcsamount,0),1);
        		}
        		this.ds_basProductquotationsegment.setColumn(i,"CUMULATIVEAMOUNT",decAmountSum);
        		this.ds_basProductquotationsegment.setColumn(i,"PCSAMOUNT",decPcsamount);
        		this.ds_basProductquotationsegment.setColumn(i,"CUMULATIVEPCSAMOUNT",decCumulativepcsamount);
        	}

        	// 2.1 불량 반영금액 계산하기 (비용누계/비용합계*불량반영금액 )
        	// 2.2 불량 반영금액 보정하기
        	// 2.3 견적가계산
        	// 2.4 견격누계
        	// 2.5 불량반영금액 누계
        	// 2.6 pcs 견적금액, pcs견적누계
        	//누적비율  decAmountSum
        	var decCumulativeRateSum = 0;
        	for(var i=0; i<this.ds_basProductquotationsegment.rowcount; i++){
        		decCumulativepcsamount = this.nfn_nvl(this.ds_basProductquotationsegment.getColumn(i,"CUMULATIVEAMOUNT"),0);
        		var decCumulativeRate = 0; // 불량 반영 금액
        		 // 견적누계 0
        		if (decAmountSum == 0)
        		{
        			this.ds_basProductquotationsegment.setColumn(i,"CUMULATIVERATE", 0); //누계비율
        		}
        		else
        		{
        			if (decCumulativepcsamount > 0)
        			{
        				decCumulativeRate = nexacro.round(decCumulativepcsamount / decAmountSum * 100, 1);//견적가누계/견적합계
        				decCumulativeRateSum = decCumulativeRateSum + decCumulativeRate;
        				this.ds_basProductquotationsegment.setColumn(i,"CUMULATIVERATE",decCumulativeRate);
        			}
        			else
        			{
        				this.ds_basProductquotationsegment.setColumn(i,"CUMULATIVERATE",0);//견적비율
        			}
        		}
        		var decDefectUnitPrice = decSalePrice * nexacro.toNumber(this.ds_basProductquotationsegment.getColumn(i,"CUMULATIVERATE")) / 100;
        		this.ds_basProductquotationsegment.setColumn(i,"DEFECTUNITPRICE",nexacro.round(decDefectUnitPrice,1));//공정불량단가
        	}
        	//nexacro.getEnvironment().set_usewaitcursor(false);
        	//this.setWaitCursor(false, true); //커서 비활성화.	this.setWaitCursor(false,true); //커서 비활성화.
        };

        this.OSM00100M_ontimer = function(obj,e)
        {
        	if(e.timerid == 1){
        		var cnt=0;
        		for(var i=0; i < 1000; i++){
        			cnt++;
        			trace(cnt);
        		}
        		this.setWaitCursor(false,true);
        		this.killTimer(1);
        	}
        };

        this.div_work_edt_PRODUCTDEFID2_onkeydown = function(obj,e)
        {
        	if(e.keycode==13) this.div_work_btn_PRODUCTDEFID2_onclick();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.addEventHandler("ontimer",this.OSM00100M_ontimer,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tabpage1.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_Tabpage1_btn_PRODUCTDEFID_onclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_searchExchange.addEventHandler("onclick",this.div_header_btn_searchExchange_onclick,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_reCalculate.addEventHandler("onclick",this.div_header_btn_reCalculate_onclick,this);
            this.div_header.form.btn_saveCopy.addEventHandler("onclick",this.fn_saveCopy,this);
            this.div_work.form.grd_basProductquotationsegment.addEventHandler("onselectchanged",this.div_work_grd_basApproval_onselectchanged,this);
            this.div_work.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.div_work_btn_PRODUCTDEFID_onclick,this);
            this.div_work.form.edt_PRODUCTDEFID2.addEventHandler("onkeydown",this.div_work_edt_PRODUCTDEFID2_onkeydown,this);
            this.div_work.form.btn_PRODUCTDEFID2.addEventHandler("onclick",this.div_work_btn_PRODUCTDEFID2_onclick,this);
        };
        this.loadIncludeScript("OSM00100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
