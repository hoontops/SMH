(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM01100M");
            this.set_titletext("계획 대비 투입 실적 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_plangrid", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PERIODTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERID\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMERNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cbo_ProdVersion", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFVERSIONCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSIONNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRODUCTDEFVERSIONCODE\"/><Col id=\"PRODUCTDEFVERSIONNAME\">전체조회</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_planResult", this);
            obj._setContents("<ColumnInfo><Column id=\"INPUTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUTQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_headgrdList", this);
            obj._setContents("<ColumnInfo><Column id=\"COLUMNS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Edit("edt_COMPANYCLIENT","108","160",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("22");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"edt_COMPANYCLIENT:0","45","20","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("6");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","Static12_00_00_00_01_00_00:0","102","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_search","15","Static12_00_00_00_01_00_00:0","146","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("2");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("3");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("5");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","Static12_00_00_00_01_00_00:6","10","27",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PLANTID","0","10","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("8");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PLANT");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PLANTID","108","10","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_SearchPeriod","0","35","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("10");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("C6A85700415446D89213292978260263");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Calendar("cal_STARTDT","108","35","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("11");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PERIODTYPE","15","60","88","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("12");
            obj.set_codecolumn("C,searchPeriodType,,Y,Y");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Calendar("cal_ENDDT","108","60","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("13");
            obj.set_innerdataset("");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFID","0","85","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("14");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFID","108","85",null,"20","37",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("15");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_PRODUCTDEFID",null,"85","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            obj.set_text("");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_PRODUCTDEFVERSION","0","110","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("17");
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("INNERREVISION");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_PRODUCTDEFVERSION","108","110","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("18");
            obj.set_codecolumn("PRODUCTDEFVERSIONCODE");
            obj.set_datacolumn("PRODUCTDEFVERSIONNAME");
            obj.set_innerdataset("ds_cbo_ProdVersion");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("staPRODUCTDEFNAME","0","135","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("19");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCTDEFNAME","108","135","165","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("20");
            obj.set_enable("true");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_COMPANYCLIENT","0","staPRODUCTDEFNAME:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("21");
            obj.set_tooltiptext("COMPANYCLIENT");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_COMPANYCLIENT",null,"edt_PRODUCTDEFNAME:5","22","20","15",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","143","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","164","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("계획대비 투입 실적 차트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_plangrid","0","357",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_plangrid");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"150\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"265\" band=\"left\"/><Column size=\"160\" band=\"left\"/><Column size=\"90\" band=\"left\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"품목코드\" tooltiptext=\"ITEMCODE\"/><Cell col=\"2\" rowspan=\"2\" tooltiptext=\"INNERREVISION\" text=\"Rev.\"/><Cell col=\"3\" rowspan=\"2\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"4\" rowspan=\"2\" text=\"고객명\" tooltiptext=\"CUSTOMERNAME\"/><Cell col=\"5\" rowspan=\"2\" text=\"생산구분\" tooltiptext=\"PRODUCTIONTYPE\"/></Band><Band id=\"body\"><Cell expr=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CUSTOMERNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PRODUCTIONTYPE\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","323","164","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("계획대비 투입 실적 목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new BasicChart("bc_planResult","0","34",null,"289","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_planResult");
            obj.set_border("1px solid #e8e8e8");
            obj.set_bargrouping("true");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 700 12pt/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px",
            		"visible": true,
            		"textcolor": "#222222",
            		"subtextfont": "normal 400 10pt/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px",
            		"itemtextfont": "9pt \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"horizontalitemgap": "8",
            		"background": "#ffffff",
            		"markertextgap": "3",
            		"align": "rightcenter"
            	},
            	"hrangebar": {
            		"id": "hrangebar",
            		"trackbarpadding": "0px",
            		"background": "#f0f0f0",
            		"linestyle": "0px none",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#cdcdcd",
            		"size": "12",
            		"visible": false
            	},
            	"vrangebar": {
            		"id": "vrangebar",
            		"trackbarpadding": "0px",
            		"background": "#f0f0f0",
            		"linestyle": "0px solid #ffffff",
            		"trackbarlinestyle": "0px none",
            		"trackbarfillstyle": "#cdcdcd",
            		"size": "12",
            		"visible": false
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"background": "#ffffff"
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "bold 10pt \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "9pt \"맑은 고딕\"",
            		"axislinestyle": "0px none",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"visible": "true"
            	},
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "14px/normal \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"axislinestyle": "1px solid #e8e8e8",
            			"titlegap": "10",
            			"tickmax": "250000",
            			"tickmin": "0",
            			"labeltextwidth": ""
            		}
            	],
            	"crosshair": {
            		"id": "crosshair",
            		"type": "y",
            		"xlinestyle": "1px solid #dddddd",
            		"ylinestyle": "1px solid #dddddd",
            		"tooltiptype": "y",
            		"xlinetooltipfillstyle": "#000,000",
            		"xlinetooltipborderradius": "5px",
            		"xlinetooltiptextcolor": "#ffffff",
            		"ylinetooltipborderradius": "5px",
            		"ylinetooltipfillstyle": "#000000",
            		"ylinetooltiptextcolor": "#ffffff",
            		"ylinetooltipgap": "0"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "계획",
            			"barvisible": true,
            			"barsize": "20",
            			"itemtextvisible": "false",
            			"itemtextcolor": "#ffffff",
            			"itemtextfont": "bold 9pt \"맑은 고딕\"",
            			"valuecolumn": "bind:QTY",
            			"baritemtextposition": "end",
            			"barfillstyle": "#0c84c1",
            			"barlinestyle": "0px solid #ffffff",
            			"tooltiptext": "bind:QTY"
            		},
            		{
            			"id": "series1",
            			"titletext": "실적",
            			"barvisible": true,
            			"barsize": "20",
            			"itemtextvisible": "false",
            			"itemtextfont": "bold 9pt \"맑은 고딕\"",
            			"valuecolumn": "bind:INPUTQTY",
            			"baritemtextposition": "end",
            			"baritemtextgap": "10",
            			"barfillstyle": "#db0000",
            			"barlinestyle": "0px solid #ffffff",
            			"tooltiptext": "bind:INPUTQTY",
            			"itemtextcolor": "#ffffff"
            		}
            	]
            });
            obj.set_categorycolumn("bind:INPUTDATE");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_plangrid","170","323","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

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

            obj = new Static("sta_title","30","16","193","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
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

            obj = new BindItem("item1","tab_search.tab_page.form.cal_STARTDT","value","ds_search","PERIOD_PERIODFR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.tab_page.form.cbo_PERIODTYPE","value","ds_search","PERIODTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.tab_page.form.cal_ENDDT","value","ds_search","PERIOD_PERIODTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_search.tab_page.form.edt_PRODUCTDEFID","value","ds_search","PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_search.tab_page.form.cbo_PRODUCTDEFVERSION","value","ds_search","PRODUCTDEFVERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_search.tab_page.form.edt_PRODUCTDEFNAME","value","ds_search","PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_search.tab_page.form.edt_COMPANYCLIENT","value","ds_search","CUSTOMERNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM01100M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PCM01100M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PCM01100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 계획대비 투입 실적 조회
         * 파일명 		: PCM01100M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2021.4.26
         * 설  명		: 계획대비 투입 실적 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.4.26	박대호   	최초작성
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
        	if (this.tab_search.tab_page.form.edt_COMPANYCLIENT.value == "")
        	{
        		this.ds_search.setColumn(0, "CUSTOMERID", "");
        	}
        	var strDate = this.tab_search.tab_page.form.cal_STARTDT.value;
         	strDate = this.fn_GetOneMonthAfter(strDate);
         	var endDate = this.tab_search.tab_page.form.cal_ENDDT.value;

        	var shearchDate = this.fn_DiffDate(strDate, endDate);
         	if(shearchDate > 0)
         	{
         		// 조회기간의 날짜 범위는 {0}일 이내로 제한 됩니다.
        		this.gfn_Message("DateLimit", " 31", "info");
        		return false;
         	}
        	this.ds_planResult.clearData();
        	this.ds_headgrdList.clearData();
        	this.ds_plangrid.clearData();
        	this.div_work.form.grd_plangrid.set_formats(this.div_work.form.grd_plangrid.formats);

        	var sSvcID 			= "selectInputLotRecordPerPlanChartResult";
        	var sController 	= "/pcm01100/selectInputLotRecordPerPlanChartResult.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_planResult=output1 ds_headgrdList=output2 ds_plangrid=output3";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
        * 기능 : 검색 초기화
        */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_initCombo();
        	this.fn_initDatePicker();
        	this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
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
        	}

        	{
        		switch(trId)
        		{
        			case "selectEcmLookupValuesVList2ds_CSiteTypeALL" :
        			{
        				this.ds_search.setColumn(0,"PLANTID",this.gf_getSiteType());
        				break;
        			}
        			case "selectEcmLookupValuesVList2ds_CsearchPeriodType" :
        			{
        				this.fn_initDatePicker();
        				break;
        			}
        			case "selectInputLotRecordPerPlanChartResult" :
        			{
        				//최대QTY구하기
        				var planMax = this.ds_planResult.getMax("QTY");
        				var resultMax = this.ds_planResult.getMax("INPUTQTY");
        				var maxSize;
        				if(planMax > resultMax)
        				{
        					maxSize = planMax.toString();
        				}
        				else
        				{
        					maxSize = resultMax.toString();
        				}
        				var maxColum ;
        				//앞자리가 5이상이면 10단위 이하면 5단위로 set_tickmax값 입력
        				if(maxSize.substr(0, 1) > 4)
        				{
        					maxColum = "1";
        					for(var i = 0; i < maxSize.length; i++)
        					{
        						maxColum += "0";
        					}

        				}
        				else
        				{
        					maxColum = "5";
        					for(var i = 1; i < maxSize.length; i++)
        					{
        						maxColum += "0";
        					}
        				}

        				this.div_work.form.bc_planResult.valueaxes[0].set_tickmax(nexacro.toNumber(maxColum));
        				if(this.ds_headgrdList.rowcount > 0)
        				{
        					this.fn_createPlangridPivotgrdList();
        				}
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
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "POPUP_PRODUCTDEFID")
        	{//PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME|PRODUCTIONTYPE
        		this.setProduct_ProdVersion(rtn, this.ds_cbo_ProdVersion, this.ds_search, "B");
        		this.ds_search.setColumn(0,"PRODUCTDEFID",rtn[0]);
        		this.ds_search.setColumn(0,"PRODUCTDEFNAME",rtn[2]);
        		this.ds_search.setColumn(0,"PRODUCTDEFVERSION",rtn[1]);
        	}
        	if(sPopupId == "POPUP_CUSTOMER")
        	{
        		rtn = this.gfn_split(rtn, ",");
        		if (rtn.length == 2)
        		{
        			this.tab_search.tab_page.form.edt_COMPANYCLIENT.set_value(rtn[1]);
        			this.ds_search.setColumn( 0, "CUSTOMERID",          rtn[0] );
        		}
        		else
        		{
        			var value = [];
        			var dsval = [];
        			for (var i = 0; i < rtn.length; i++)
        			{
        				if ((i % 2) == 0)
        				{
        					dsval.push(rtn[i]);
        				}
        				else
        				{
        					value.push(rtn[i]);
        				}
        			}

        			this.tab_search.tab_page.form.edt_COMPANYCLIENT.set_value(value.join(","));
        			this.ds_search.setColumn( 0, "CUSTOMERID",          dsval.join(",") );
        		}

        	}
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        this.fn_initCombo = function ()
        {
        	this.ds_cbo_ProdVersion.deleteAll();
        	this.AddAll(this.ds_cbo_ProdVersion,"PRODUCTDEFVERSIONCODE","PRODUCTDEFVERSIONNAME");
         	this.ds_search.setColumn(0, "PRODUCTDEFVERSION", "");
         	this.ds_search.setColumn(0, "PRODUCTDEFID", "");
        	this.ds_search.setColumn(0, "CUSTOMERID", "");
        };

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
        /*
         * 기능 : 피벗테이블 생성
         */
         this.fn_createPlangridPivotgrdList = function ()
        {
        	this.div_work.form.grd_plangrid.set_enableredraw(false);

        	//컬럼추가
        	for(var c = 0; c < this.ds_headgrdList.rowcount ; c++)
        	{
        		var colIdx1 = 0;
        		var colIdx2 = 0;

        		colIdx1 = this.div_work.form.grd_plangrid.appendContentsCol("body");
        		colIdx2 = this.div_work.form.grd_plangrid.appendContentsCol("body");

        		//헤더명
        		this.div_work.form.grd_plangrid.setCellProperty("head", c * 2 + 6, "text", this.ds_headgrdList.getColumn(c, "COLUMNS"));
        		var calCount = c * 2 + 6;
         		this.div_work.form.grd_plangrid.setCellProperty("head", c * 4 + 8, "text", "계획");
         		this.div_work.form.grd_plangrid.setCellProperty("head", c * 4 + 9, "text", "실적");

         		this.div_work.form.grd_plangrid.setFormatColProperty(colIdx1 , "size", 80);
         		this.div_work.form.grd_plangrid.setFormatColProperty(colIdx2 , "size", 80);

         		this.div_work.form.grd_plangrid.setCellProperty("body", colIdx1 , "textAlign", "right");
         		this.div_work.form.grd_plangrid.setCellProperty("body", colIdx2 , "textAlign", "right");

         		this.div_work.form.grd_plangrid.setCellProperty("body", colIdx1 , "displaytype", "mask");
         		this.div_work.form.grd_plangrid.setCellProperty("body", colIdx2 , "displaytype", "mask");

         		this.div_work.form.grd_plangrid.setCellProperty("body", colIdx1 , "maskeditformat", "#,##0");
         		this.div_work.form.grd_plangrid.setCellProperty("body", colIdx2 , "maskeditformat", "#,##0");

        		this.div_work.form.grd_plangrid.setCellProperty("body", colIdx1 , "text", "bind:" + "PLAN_" + nexacro.replaceAll(this.ds_headgrdList.getColumn(c, "COLUMNS"),"-",""));
         		this.div_work.form.grd_plangrid.setCellProperty("body", colIdx2 , "text", "bind:" + "RSLT_" + nexacro.replaceAll(this.ds_headgrdList.getColumn(c, "COLUMNS"),"-",""));
        	}

         	//헤더 머지
          	for(var c = 0; c < this.ds_headgrdList.rowcount; c++)
          	{
          		var nStartCol = calCount - 2 * c;
          		var nEndCol = 	(calCount - 2 * c) + 1;
          		var nFirstCell = calCount - 2 * c;
          		this.div_work.form.grd_plangrid.mergeContentsCell("head", 0, nStartCol, 0, nEndCol, nFirstCell, false);
          	}

        	this.div_work.form.grd_plangrid.set_enableredraw(true);
        }
        /******************************************************************************************
         * 기능 : 3달후 날짜 구하는 함수.
         * 인자 : strDate : yyyyMMdd형태의 날짜 ( 예 : "20121122" )
         * 리턴 : 성공 = yyyyMMdd형태의 해당날짜를 리턴. ( 예 : "20121130" )
                   실패 = ""
         * 예문 :
         *****************************************************************************************/
        this.fn_GetOneMonthAfter = function (strDate)
        {
            if (strDate)
            {
        		var date = new Date(strDate.substr(0,4), strDate.substr(4,2), strDate.substr(6,2));
                var d = (new Date(date)).addMonth(0);
            }
        	else
            {
                var d = (new Date).addMonth(0);
            }

            var s = (new Date(d)).getFullYear()
                   + (((new Date(d)).getMonth() + 1) + "").padLeft(2, '0')
                   + (((new Date(d)).getDate()) + "").padLeft(2, '0');
            return (s);
        }
        /*******************************************************************************
         ★ 설명
             2개의 날짜간의 일수 계산
         ★ parameter
            1. sStartDate : yyyyMMdd형태의 From 일자 ( 예 : "20121122" )
            2. sEndDate   : yyyyMMdd형태의 To 일자 ( 예 : "20121202" )
         ★ return
            - 성공 = 숫자 형태의 차이일수  ( 예 : 10 )
                     단, sEndDate < sStartDate이면 음수가 return된다.
            - 실패 = NaN
         ******************************************************************************/

        this.fn_DiffDate  = function(sStartDate, sEndDate)
        {
            var vFromDate = new Date(parseInt(sEndDate.substring(0,4),  10), parseInt(sEndDate.substring(4,6)-1,  10), parseInt(sEndDate.substring(6,8), 10));
            var vToDate = new Date(parseInt(sStartDate.substring(0,4),  10), parseInt(sStartDate.substring(4,6)-1,  10), parseInt(sStartDate.substring(6,8), 10));

            return parseInt((vFromDate - vToDate)/(1000*60*60*24));
        }
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/


        /*
         *	기능 : 기간콤보박스 변경시
         */

        this.tab_search_tab_page_cbo_PERIODTYPE_onitemchanged = function(obj,e)
        {
        	if(e.postvalue != "CUSTOM")this.fn_setDate(e.postvalue);
        };
        /*
         *	기능 : 검색일자 변경시 검색구분을 [사용자지정]으로 변경
         */
        this.fn_changeCustom = function(obj,e)
        {
        	this.tab_search.tab_page.form.cbo_PERIODTYPE.set_value("CUSTOM");
        };

        /*
         *	기능 : 품목코드 검색 버튼 클릭 시
         */
        this.tab_search_tab_page_btn_PRODUCTDEFID_onclick = function(obj,e)
        {
        	var oArg = {};

        	if (this.tab_search.tab_page.form.edt_PRODUCTDEFID.value != "")
        	{
        		oArg.arg_type        = "BA";
        	}
        	else
        	{
        		oArg.arg_type        = "B";
        	}
        	oArg.arg_popupCd     = "P00160";
        	oArg.arg_popupNm     = "품목 선택";
        	oArg.arg_rtnCols     = "PRODUCTDEFID|PRODUCTDEFVERSION|PRODUCTDEFNAME|PRODUCTIONTYPE";
        	oArg.arg_paramCols   = "P_POPTYPE";
        	oArg.arg_paramValues = "PRODUCTDEFINITION";
        	oArg.arg_searchStr   = "P_PRODUCTDEFNAME=" + this.tab_search.tab_page.form.edt_PRODUCTDEFID.value;
        	this.gfn_openPopup( "POPUP_PRODUCTDEFID", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };

        this.tab_search_tab_page_btn_COMPANYCLIENT_onclick = function(obj,e)
        {
        	var oArg = {};
        	if (this.tab_search.tab_page.form.edt_COMPANYCLIENT.value != "")
        	{
        		oArg.arg_type        = "CA";
        	}
        	else
        	{
        		oArg.arg_type        = "C";
        	}
        	oArg.arg_popupCd     = "P00212";
        	oArg.arg_popupNm     = "고객사 코드";
        	oArg.arg_rtnCols     = "CUSTOMERID|CUSTOMERNAME";
        	oArg.arg_paramCols   = "P_POPTYPE|P_LANGUAGETYPE";
        	oArg.arg_paramValues = "CUSTOMER|" + this.gf_getLanguageType();
        	oArg.arg_searchStr   = "P_CUSTOMER=" + this.tab_search.tab_page.form.edt_COMPANYCLIENT.value;
        	this.gfn_openPopup( "POPUP_CUSTOMER", "cmd::CMSA00100P.xfdl", oArg, "width=800,height=800");
        };


        this.div_work_grd_plangrid_oncellclick = function(obj,e)
        {
        	if(this.ds_plangrid.getRowCount() > 0)
        	{
        		if(e.cell > 5 )
        		{
         			var popupId = "SEARCH_DETAILPOPUP";
         			var oArg = {
         				objList : [
         							this.ds_headgrdList.getColumn((e.cell / 2) - 3, "COLUMNS"),//일자
         							this.ds_plangrid.getColumn(e.row, "PRODUCTIONTYPE"),//생산구분
         							this.ds_plangrid.getColumn(e.row, "CUSTOMERNAME"),//고객사
         							this.ds_plangrid.getColumn(e.row, "PRODUCTDEFID"),//품목코드
         							this.ds_plangrid.getColumn(e.row, "PRODUCTDEFNAME"),//품목명
        							this.ds_plangrid.getColumn(e.row, "PRODUCTDEFVERSION"),//Rev.
        							this.ds_plangrid.getColumn(e.row,  "PLAN_" + this.ds_headgrdList.getColumn((e.cell / 2) - 3, "COLUMNS").replaceAll("-","")),//계획
        							this.ds_plangrid.getColumn(e.row,  "RSLT_" + this.ds_headgrdList.getColumn((e.cell / 2) - 3, "COLUMNS").replaceAll("-",""))//실적
         							]
         			};

         			this.gfn_openPopup(popupId,"pcm::PCM011000P.xfdl",oArg,"width=556,height=450");
        		}

        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fn_init,this);
            this.tab_search.tab_page.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.tab_page.form.cal_STARTDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.tab_page.form.cbo_PERIODTYPE.addEventHandler("onitemchanged",this.tab_search_tab_page_cbo_PERIODTYPE_onitemchanged,this);
            this.tab_search.tab_page.form.cal_ENDDT.addEventHandler("onchanged",this.fn_changeCustom,this);
            this.tab_search.tab_page.form.btn_PRODUCTDEFID.addEventHandler("onclick",this.tab_search_tab_page_btn_PRODUCTDEFID_onclick,this);
            this.tab_search.tab_page.form.btn_COMPANYCLIENT.addEventHandler("onclick",this.tab_search_tab_page_btn_COMPANYCLIENT_onclick,this);
            this.div_work.form.grd_plangrid.addEventHandler("oncellclick",this.div_work_grd_plangrid_oncellclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("PCM01100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
