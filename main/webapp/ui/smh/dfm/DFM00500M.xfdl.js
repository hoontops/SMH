(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DFM00500M");
            this.set_titletext("AOI 분석 전/후 비교");
            if (Form == this.constructor)
            {
                this._setFormPosition(1647,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_AOIPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"P_BBTPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"P_HOLEPROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_PERIOD_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_AOINOSELECT\" type=\"STRING\" size=\"256\"/><Column id=\"P_BBTNOSELECT\" type=\"STRING\" size=\"256\"/><Column id=\"P_HOLENOSELECT\" type=\"STRING\" size=\"256\"/><Column id=\"P_GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"SESSION_LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"INT\" size=\"256\"/><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRTARGETQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REPAIRRESULTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EVENTTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_paramAOI", this);
            obj._setContents("<ColumnInfo><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_INSPECTIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chartNullTotal", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chartNullBefore", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chartNullAfter", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detailBefore", this);
            obj._setContents("<ColumnInfo><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUPRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SUBRATE\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detailAfter", this);
            obj._setContents("<ColumnInfo><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPCNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUPRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SUBRATE\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_chartTotal", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DATA1\" type=\"FLOAT\" size=\"256\"/><Column id=\"DATA2\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_distinctDt", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIPMENTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GROUPCODE\" type=\"STRING\" size=\"256\"/><Column id=\"GROUPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBNAME\" type=\"STRING\" size=\"256\"/><Column id=\"COLOR\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCOUNT\" type=\"INT\" size=\"256\"/><Column id=\"LAYERID\" type=\"STRING\" size=\"256\"/><Column id=\"ISREWORK\" type=\"STRING\" size=\"256\"/><Column id=\"REPAIRTARGETQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REPAIRRESULTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"EVENTTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chartNullBeforeAfter", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BEFOREDEFECTRATE\" type=\"FLOAT\" size=\"256\"/><Column id=\"AFTERDEFECTRATE\" type=\"FLOAT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_revCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_aoiCombo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"P_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tab_page",this.tab_search);
            obj.set_text("불량명");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_prodType","0","160","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("21");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTIONTYPE");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_AOIProcess","0","sta_prodType:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("14");
            obj.set_text("AOI 공정");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("0");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_searchPeriod","0","10","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("1");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("C6A85700415446D89213292978260263");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Div("div_dateFrom","sta_searchPeriod:5",null,"165","21",null,"sta_searchPeriod:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("2");
            obj.set_url("common::com_calendar.xfdl");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_period","7","sta_searchPeriod:5","89","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("3");
            obj.set_codecolumn("code");
            obj.set_innerdataset("gds_period");
            obj.set_datacolumn("desc");
            obj.set_text("금일");
            obj.set_value("today");
            obj.set_index("0");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Div("div_dateTo","cbo_period:12",null,"165","21",null,"cbo_period:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("4");
            obj.set_url("common::com_calendar.xfdl");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_lotid","0","cbo_period:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("5");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_lotid","sta_lotid:5",null,null,"20","37","sta_lotid:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("6");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_lotid","edt_lotid:0",null,"22","20",null,"sta_lotid:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_productdefid","0","sta_lotid:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("8");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_productdefid","sta_productdefid:5",null,null,"20","37","sta_productdefid:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("9");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_productdefid","edt_productdefid:0",null,"22","20",null,"sta_productdefid:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_productname","0","sta_productdefid:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("11");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Edit("edt_productname","sta_productname:5",null,null,"20","15","sta_productname:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_productdefversion","0","sta_productname:5","103","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_text("Rev.");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("13");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_search","15","225","146","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static05","161",null,"10","27",null,"btn_search:-32",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("15");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("Static04","122","sta_AOIProcess:0","45","20",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("16");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Button("btn_clear2","Static05:0","Static04:0","102","36",null,null,null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Div("div_revMulti","sta_productdefversion:5","135","165",null,null,"sta_productdefversion:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("19");
            obj.set_url("dfm::dfm_multiCombo.xfdl");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Div("div_aoiMulti","sta_AOIProcess:5",null,"165","20",null,"sta_AOIProcess:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("20");
            obj.set_url("dfm::dfm_multiCombo.xfdl");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Combo("cbo_productionType","sta_prodType:5",null,"165","20",null,"sta_prodType:-20",null,null,null,null,this.tab_search.tab_page.form);
            obj.set_taborder("22");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.tab_page.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","191","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new BasicChart("cht_nullAfter","65.33%","31.43%",null,"130","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_border("1px solid #e8e8e8");
            obj.set_binddataset("ds_chartNullAfter");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 700 14/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555",
            		"subtextalign": "right",
            		"textcolor": "#222222",
            		"subtextfont": "normal 10pt/normal \"맑은 고딕\"",
            		"visible": true,
            		"text": "분석 후",
            		"align": "topcenter",
            		"gap": "0",
            		"opacity": "0"
            	},
            	"legend": {
            		"id": "legend",
            		"align": "topcenter",
            		"padding": "10px",
            		"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"markertextgap": 3,
            		"itemautofit": "false",
            		"itemgap": "10",
            		"top": "",
            		"visible": false,
            		"markertype": "square"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "normal 9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": false
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "0px none",
            		"axislinestyle": "0px none",
            		"gap": "0",
            		"labelgap": "5",
            		"tickendgap": "30px",
            		"tickstartgap": "30px"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barfillstyle": "#62be1b,#3c4596,#be0071,#4bc4c2,#f8b334,#9c6add,#2ba3a8,#0c84c1,#ea5d66",
            			"barsize": "30",
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:VALUE",
            			"barlinestyle": "0px none",
            			"valueaxis": "valueaxis0",
            			"lineareafillstyle": "#ffffff",
            			"stacktype": "none",
            			"itemtextvisible": "true",
            			"baritemtextposition": "outside",
            			"baritemtextgap": "5"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "bold 12pt \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"axislinestyle": "1px solid #e8e8e8",
            			"titlegap": "10",
            			"visible": "true",
            			"autotickscale": 20,
            			"labeltype": "number",
            			"labelmask": "999.99"
            		}
            	]
            });
            obj.set_categorycolumn("bind:NAME");
            this.div_work.addChild(obj.name, obj);

            obj = new BasicChart("cht_nullTotal","0","31.43%",null,"130","69.71%",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_border("1px solid #e8e8e8");
            obj.set_binddataset("ds_chartNullTotal");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 700 14/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px",
            		"visible": true,
            		"textcolor": "#222222",
            		"subtextfont": "normal 400 10pt/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555",
            		"text": "분석 전/후"
            	},
            	"legend": {
            		"id": "legend",
            		"padding": "3px 10px",
            		"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"horizontalitemgap": "5",
            		"background": "#ffffff",
            		"markertextgap": "3",
            		"align": "rightcenter",
            		"visible": false
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
            		"linestyle": "0px none",
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
            		"visible": true
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "bold 9pt \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "9pt \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "0px none",
            		"visible": "true",
            		"labelgap": "5",
            		"tickendgap": "80px",
            		"tickstartgap": "80px",
            		"axislinestyle": "0px none"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barsize": "30",
            			"itemtextvisible": true,
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:DATA",
            			"baritemtextposition": "outside",
            			"baritemtextgap": "5",
            			"barfillstyle": "#62be1b,#0c84c1",
            			"barlinestyle": "0px none"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "bold 12pt \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"axislinestyle": "1px solid #e8e8e8",
            			"titlegap": "10",
            			"visible": "true",
            			"autotickscale": 20,
            			"labeltype": "number",
            			"labelmask": "999.99"
            		}
            	]
            });
            obj.set_categorycolumn("bind:NAME");
            this.div_work.addChild(obj.name, obj);

            obj = new BasicChart("cht_nullBefore","cht_nullTotal:3","31.43%",null,"130","cht_nullAfter:2",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #e8e8e8");
            obj.set_binddataset("ds_chartNullBefore");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 700 14/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555",
            		"subtextalign": "right",
            		"textcolor": "#222222",
            		"subtextfont": "normal 10pt/normal \"맑은 고딕\"",
            		"visible": true,
            		"text": "분석 전"
            	},
            	"legend": {
            		"id": "legend",
            		"align": "topcenter",
            		"padding": "10px",
            		"itemtextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"markertextgap": 3,
            		"itemautofit": "false",
            		"itemgap": "10",
            		"top": "",
            		"visible": false,
            		"markertype": "square"
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "normal 9pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": false
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "normal 700 10pt/normal \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "normal 9pt/normal \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "0px none",
            		"axislinestyle": "0px none",
            		"gap": "0",
            		"labelgap": "5",
            		"tickendgap": "30px",
            		"tickstartgap": "30px"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barfillstyle": "#62be1b,#3c4596,#be0071,#4bc4c2,#f8b334,#9c6add,#2ba3a8,#0c84c1,#ea5d66",
            			"barsize": "30",
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt '맑은 고딕'",
            			"valuecolumn": "bind:VALUE",
            			"barlinestyle": "0px none",
            			"valueaxis": "valueaxis0",
            			"lineareafillstyle": "#ffffff",
            			"stacktype": "none",
            			"itemtextvisible": "true",
            			"baritemtextposition": "outside",
            			"baritemtextgap": "5"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "bold 12pt \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"axislinestyle": "1px solid #e8e8e8",
            			"titlegap": "10",
            			"visible": "true",
            			"autotickscale": 20,
            			"labeltype": "number",
            			"labelmask": "999.99"
            		}
            	]
            });
            obj.set_categorycolumn("bind:NAME");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_main","0","34",null,null,"0","cht_nullBefore:10",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_dt");
            obj._setContents("<Formats><Format id=\"미입력\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"품목명\" tooltiptext=\"PRODUCTDEFNAME\"/><Cell col=\"3\" text=\"품목코드\" tooltiptext=\"PRODUCTDEFID\"/><Cell col=\"4\" text=\"Rev\" tooltiptext=\"PRODUCTDEFVERSION\"/><Cell col=\"5\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"6\" text=\"검사 공정\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"7\" text=\"검사 수량\" tooltiptext=\"INSPECTIONQTY\"/><Cell col=\"8\" text=\"분석 대상수\" tooltiptext=\"ANALYSISTARGET\"/><Cell col=\"9\" text=\"분석후 양품수\" tooltiptext=\"ANALYSISRESULT\"/><Cell col=\"10\" text=\"분석 양품율\" tooltiptext=\"ANALYSISRATE\"/><Cell col=\"11\" text=\"총불량수(분석 전)\" tooltiptext=\"DEFECTBEFOREANALYSIS\"/><Cell col=\"12\" text=\"총불량수(분석 후)\" tooltiptext=\"DEFECTAFTERANALYSIS\"/><Cell col=\"13\" text=\"총불량률(분석 전)\" tooltiptext=\"RATEBEFOREANALYSIS\"/><Cell col=\"14\" text=\"총불량률(분석 후)\" cssclass=\"cell_end\" tooltiptext=\"RATEAFTERANALYSIS\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFNAME\" suppress=\"1\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" suppress=\"2\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\" suppress=\"3\"/><Cell col=\"5\" text=\"bind:LOTID\" suppress=\"4\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:INSPECTIONQTY\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"8\" text=\"bind:ANALYSISTARGET\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"9\" text=\"bind:ANALYSISRESULT\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"10\" text=\"bind:ANALYSISRATE\" displaytype=\"mask\" edittype=\"none\" textAlign=\"right\" maskeditformat=\"#,##0.00\" maskedittype=\"number\" maskeditpostfixtext=\" %\"/><Cell col=\"11\" text=\"bind:BEFOREDEFECTCNT\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"12\" text=\"bind:AFTERDEFECTCNT\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"13\" text=\"bind:BEFOREDEFECTRATE\" displaytype=\"mask\" edittype=\"none\" textAlign=\"right\" maskeditformat=\"#,##0.00\" maskedittype=\"number\" maskeditpostfixtext=\" %\"/><Cell col=\"14\" text=\"bind:AFTERDEFECTRATE\" displaytype=\"mask\" edittype=\"none\" textAlign=\"right\" maskeditformat=\"#,##0.00\" maskedittype=\"number\" maskeditpostfixtext=\" %\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" text=\"expr:dataset.getSum(&quot;INSPECTIONQTY&quot;)\"/><Cell col=\"8\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" text=\"expr:dataset.getSum(&quot;ANALYSISTARGET&quot;)\"/><Cell col=\"9\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" text=\"expr:dataset.getSum(&quot;ANALYSISRESULT&quot;)\"/><Cell col=\"10\" expandchar=\"%\" expandsize=\"24\" displaytype=\"mask\" maskeditformat=\"#,##0.00\" text=\"expr:dataset.getAvg(&quot;ANALYSISRATE&quot;)\" maskedittype=\"number\" maskeditpostfixtext=\" %\"/><Cell col=\"11\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" text=\"expr:dataset.getSum(&quot;BEFOREDEFECTCNT&quot;)\"/><Cell col=\"12\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" text=\"expr:dataset.getSum(&quot;AFTERDEFECTCNT&quot;)\"/><Cell col=\"13\" expandchar=\"%\" expandsize=\"24\" displaytype=\"mask\" maskeditformat=\"#,##0.00\" text=\"expr:dataset.getAvg(&quot;BEFOREDEFECTRATE&quot;)\" maskedittype=\"number\" maskeditpostfixtext=\" %\"/><Cell col=\"14\" expandchar=\"%\" expandsize=\"24\" displaytype=\"mask\" maskeditformat=\"#,##0.00\" text=\"expr:dataset.getAvg(&quot;AFTERDEFECTRATE&quot;)\" maskedittype=\"number\" maskeditpostfixtext=\" %\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new BasicChart("cht_total","0","grd_main:10",null,"130","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_binddataset("ds_chartTotal");
            obj.set_border("1px solid #e8e8e8");
            obj.set_visible("false");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 700 14/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px",
            		"visible": true,
            		"textcolor": "#222222",
            		"subtextfont": "normal 400 10pt/normal \"맑은 고딕\"",
            		"subtextcolor": "#555555",
            		"text": "분석 전/후"
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
            		"visible": true,
            		"tickendgap": "50px",
            		"tickstartgap": "50px",
            		"labelgap": "5"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "series",
            			"barvisible": true,
            			"barsize": "30",
            			"itemtextvisible": true,
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt \"맑은 고딕\"",
            			"valuecolumn": "bind:DATA1",
            			"baritemtextposition": "outside",
            			"baritemtextgap": "5",
            			"barfillstyle": "#0c84c1",
            			"barlinestyle": "0px solid #ffffff"
            		},
            		{
            			"id": "series1",
            			"titletext": "series",
            			"barvisible": true,
            			"barsize": "30",
            			"itemtextvisible": true,
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 10pt \"맑은 고딕\"",
            			"valuecolumn": "bind:DATA2",
            			"baritemtextposition": "outside",
            			"baritemtextgap": "5",
            			"barfillstyle": "#62be1b",
            			"barlinestyle": "0px solid #ffffff"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "9pt/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "bold 12pt \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"axislinestyle": "1px solid #e8e8e8",
            			"titlegap": "10",
            			"visible": "true",
            			"autotickscale": 20,
            			"labeltype": "number",
            			"labelmask": "999.99"
            		}
            	]
            });
            obj.set_categorycolumn("bind:NAME");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","83","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("Lot 별 분석");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_after","0","79.75%",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_detailAfter");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사공정\"/><Cell col=\"2\" text=\"불량 그룹명\"/><Cell col=\"3\" text=\"불량수(그룹)\"/><Cell col=\"4\" text=\"불량률(그룹)\"/><Cell col=\"5\" text=\"세부 불량 명\"/><Cell col=\"6\" text=\"세부 불량수량\"/><Cell col=\"7\" text=\"세부 불량률\"/><Cell col=\"8\" text=\"불량율(Total)\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"center\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:GROUPNAME\" textAlign=\"center\" suppress=\"2\"/><Cell col=\"3\" text=\"bind:GROUPCNT\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\" suppress=\"3\"/><Cell col=\"4\" text=\"bind:GROUPRATE\" displaytype=\"mask\" edittype=\"none\" textAlign=\"right\" maskeditformat=\"#,##0.00\" maskedittype=\"number\" maskeditpostfixtext=\" %\" suppress=\"4\"/><Cell col=\"5\" text=\"bind:SUBNAME\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:SUBCNT\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"7\" text=\"bind:SUBRATE\" displaytype=\"mask\" edittype=\"none\" textAlign=\"right\" maskeditformat=\"#,##0.00\" maskedittype=\"number\" maskeditpostfixtext=\" %\"/><Cell col=\"8\" text=\"bind:SEGTOTRATE\" displaytype=\"mask\" edittype=\"none\" textAlign=\"right\" maskeditformat=\"#,##0.00\" maskedittype=\"number\" maskeditpostfixtext=\" %\" suppress=\"1\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_before","0","cht_nullBefore:34",null,null,"0","grd_after:34",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_detailBefore");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"150\"/><Column size=\"180\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사공정\"/><Cell col=\"2\" text=\"불량 그룹명\"/><Cell col=\"3\" text=\"불량수(그룹)\"/><Cell col=\"4\" text=\"불량률(그룹)\"/><Cell col=\"5\" text=\"세부 불량 명\"/><Cell col=\"6\" text=\"세부 불량수량\"/><Cell col=\"7\" text=\"세부 불량률\"/><Cell col=\"8\" text=\"불량율(Total)\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"center\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:GROUPNAME\" textAlign=\"center\" suppress=\"2\"/><Cell col=\"3\" text=\"bind:GROUPCNT\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\" suppress=\"3\"/><Cell col=\"4\" text=\"bind:GROUPRATE\" displaytype=\"mask\" edittype=\"none\" textAlign=\"right\" maskeditformat=\"#,##0.00\" maskedittype=\"number\" maskeditpostfixtext=\" %\" suppress=\"4\"/><Cell col=\"5\" text=\"bind:SUBNAME\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:SUBCNT\" displaytype=\"mask\" maskeditformat=\"#,###,###,##0.#####\" textAlign=\"right\" maskeditautoselect=\"true\"/><Cell col=\"7\" text=\"bind:SUBRATE\" displaytype=\"mask\" edittype=\"none\" textAlign=\"right\" maskeditformat=\"#,##0.00\" maskedittype=\"number\" maskeditpostfixtext=\" %\"/><Cell col=\"8\" text=\"bind:SEGTOTRATE\" displaytype=\"mask\" edittype=\"none\" textAlign=\"right\" maskeditformat=\"#,##0.00\" maskedittype=\"number\" maskeditpostfixtext=\" %\" suppress=\"1\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_before","0","cht_nullTotal:0","56","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_text("분석 전");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_after","0","grd_before:0","56","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_text("분석 후");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_before",null,null,"29","24","0","grd_before:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_after",null,null,"29","24","0","grd_after:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀업로드");
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

            obj = new Static("sta_title","30","16","159","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_text("AOI 분석 전/후 비교");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
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

            obj = new Button("btn_apply",null,"16","44","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("적용");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1647,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_search.tab_page.form.edt_lotid","accessibilityaction","ds_search","P_LOTID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_search.tab_page.form.edt_productdefid","value","ds_search","P_PRODUCTDEFID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_search.tab_page.form.edt_productname","value","ds_search","P_PRODUCTDEFNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_search.tab_page.form.cbo_productionType","value","ds_search","P_PRODUCTIONTYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_calendar.xfdl");
            this._addPreloadList("fdl","dfm::dfm_multiCombo.xfdl");
        };
        
        // User Script
        this.addIncludeScript("DFM00500M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("DFM00500M.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("DFM00500M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("DFM00500M.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("DFM00500M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("DFM00500M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: AOI 분석 전/후 비교
         * 파일명 		: DFM00500M.xfdl
         * 작성자 		: 김성현
         * 작성일 		: 2021.5.31
         *
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.5.31	김성현   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_pcm.xjs"); /*include "lib::lib_pcm.xjs"*/;
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/; //pcm 에서 사용하는 공통

        // this.gf_getEnterpriseId()
        // this.gf_getSiteType()
        // this.gf_getLanguageType()
        // this.gf_getUserId()
        // this.gf_getUserNm()


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.tab_search.tab_page.form;
        this.isBusy = false;
        this.isChangeCombo = false;

        this.ds_dt_oldrow = -1;
        this.fn_searchNullFlag = true;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/

        this.fn_init = function (obj, e)
        {

        	console.log("DFM00500M");

        	this.nfn_formInit(obj);

        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	// 검색조건 달력 설정
        	this.tab_search.tab_page.form.cbo_period.set_value("thisweek");
        	this.tab_search_tab_page_cbo_period_onitemchanged();

        	this.tab_search.tab_page.form.div_dateFrom.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_preiodChang, this);
        	this.tab_search.tab_page.form.div_dateTo.form.pdiv_data.form.calStart.addEventHandler("onchanged", this.fn_preiodChang, this);

        	this.tab_search.tab_page.form.btn_edt_productdefid.addEventHandler( "onclick", this.fn_clickProductdefid, this );

        	//this.fn_initCombo();

        	this.fn_edt_productdefid_onchanged(this.tab_search.tab_page.form.edt_productdefid.value);

        	// (21.07.09) - 생산구분
        	this.tab_search.tab_page.form.cbo_productionType.set_value("Production");

        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
         this.fn_clickProductdefid = function()
        {
        	this.tab_search.tab_page.form.edt_productdefid.set_value("");
        	this.tab_search.tab_page.form.edt_productname.set_value("");

        	// Rev 조회
        	this.fn_setRev("");
        };

         this.gf_distincDsFilter = function(objDs, sColID)
        {
        	var arrArgs	= sColID.split(",");
        	var sFilterExpr		= "";
        	var sFindRowExpr	= "";

        	for (var i=0; i<arrArgs.length; i++)
        	{
        		if (objDs.getColumnInfo(arrArgs[i]) == null) continue;

        		sFindRowExpr	+= (sFindRowExpr) ? " && " : "";
        		sFindRowExpr	+= "" + arrArgs[i] + "=='\" + " + arrArgs[i] + " + \"'";
        	}

        	if (sFindRowExpr) {
        		sFilterExpr	= "rowidx==dataset.findRowExpr(\"" + sFindRowExpr + "\")";
        	}
        	objDs.filter(sFilterExpr);
        };

        /*
         * 이벤트 : 조회조건- 조회기간 직접 변경시
         */
        this.fn_preiodChang = function(obj,e)
        {
        	trace("-----------------> ");
        	if (!this.nfn_isNull(this.searchDiv.cbo_period.value))
        	{
        		//this.searchDiv.cbo_period.set_text("사용자정의");
        		this.searchDiv.cbo_period.set_value(undefined);		// 21.05.20 명보다는 코드로 설정
        	}
        };


        this.tab_search_tab_page_cbo_period_onitemchanged = function(obj,e)
        {
        	var val = this.tab_search.tab_page.form.cbo_period.value; //var val = e.postvalue

        	if(this.gfn_isNull(val)) return;

        	var sDate = this.nfn_getCurrentSystemTime(0,0,val);
        	var arrDate = sDate.split(",");
        	var sDateFrom = arrDate[1];
        	var sDateTo = arrDate[2];
        	var sTime = "0830";

        	var dateFrom = this.tab_search.tab_page.form.div_dateFrom.form.calStart.value;
        	var dateTo = this.tab_search.tab_page.form.div_dateTo.form.calStart.value;

        	if(!this.gfn_isNull(dateFrom) && dateTo.length>=12){
        		sTime = dateTo.substring(8,12);
        	}
        	this.tab_search.tab_page.form.div_dateFrom.form.calStart.set_value(sDateFrom+sTime);

        	if(!this.gfn_isNull(dateTo) && dateTo.length==12){
        		sTime = dateTo.substring(8,12);
        	}
        	this.tab_search.tab_page.form.div_dateTo.form.calStart.set_value(sDateTo+sTime);

        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_chartNullTotal.clearData();
        	this.ds_chartNullBeforeAfter.clearData();
        	this.ds_chartNullBefore.clearData();
        	this.ds_chartNullAfter.clearData();
        	this.ds_chartTotal.clearData();
        	this.ds_detailBefore.clearData();
        	this.ds_detailAfter.clearData();

        	this.isBusy = true;

        		//await base.OnSearchAsync();

        	var nPeriodfr = this.tab_search.tab_page.form.div_dateFrom.form.calStart.value;
        	var nPeriodto = this.tab_search.tab_page.form.div_dateTo.form.calStart.value;

        	nPeriodfr = nPeriodfr.substring(0 , 14);
        	nPeriodto = nPeriodto.substring(0 , 14);

        	this.ds_search.setColumn(0, "P_PROCESSSEGMENTID", "");
        	this.ds_search.setColumn(0, "P_GROUPCODE", "");
        	this.ds_search.setColumn(0, "P_PERIOD_PERIODFR", nPeriodfr); // 시작일
        	this.ds_search.setColumn(0, "P_PERIOD_PERIODTO", nPeriodto); // 종료일
        	this.ds_search.setColumn(0, "P_LOTID", this.tab_search.tab_page.form.edt_lotid.value);
        	this.ds_search.setColumn(0, "LANGUAGETYPE",  this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "P_ENTERPRISEID",  this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0,"ENTERPRISEID"			,this.gf_getEnterpriseId());
        	this.ds_search.setColumn(0, "P_PLANTID",  this.gf_getSiteType());
        	this.ds_search.setColumn(0, "P_PROCESSDEFID",  this.nfn_nvl(this.ds_search.getColumn(0, "P_PRODUCTDEFID"), "") );
        	this.ds_search.setColumn(0, "P_PRODUCTDEFID",  this.nfn_nvl(this.ds_search.getColumn(0, "P_PRODUCTDEFID"), "") );
        	this.ds_search.setColumn(0, "VERSION",  "10001");


        	var aoiChoiceFlag  = false;


        	// 품목 버전
        	var nRevDs = this.tab_search.tab_page.form.div_revMulti.form;
        	var nFs			= "";
        	for(var i=0; i<nRevDs.ds_initData.rowcount; i++){
        		var chk 	= nRevDs.ds_initData.getColumn(i,"CHK");
        		var code 	= nRevDs.ds_initData.getColumn(i,"CODE");
        		if(chk == 1 && !this.gfn_isNull(code))
        		{
        			nFs += this.gfn_isNull(nFs)? code : "," +code;
        		}
        	}

        	this.ds_search.setColumn(0,"P_PRODUCTDEFVERSION"	, nFs);

        	// AOI
        	var nAOIDs = this.tab_search.tab_page.form.div_aoiMulti.form;
        	nFs			= "";
        	for(var i=0; i<nAOIDs.ds_initData.rowcount; i++){
        		var chk 	= nAOIDs.ds_initData.getColumn(i,"CHK");
        		var code 	= nAOIDs.ds_initData.getColumn(i,"CODE");
        		if(chk == 1 && !this.gfn_isNull(code))
        		{
        			nFs += this.gfn_isNull(nFs)? code : "," +code;
        			if(code == "X")
        				aoiChoiceFlag = true;
        		}
        	}

        	this.ds_search.setColumn(0,"P_AOIPROCESS"	, nFs);

        // 	if(aoiChoiceFlag)
        // 		this.ds_search.setColumn(0, "P_AOINOSELECT",  "Y");
        // 	else
        // 		this.ds_search.setColumn(0, "P_AOINOSELECT",  "N");

        	var productdefid = this.nfn_nvl(this.tab_search.tab_page.form.edt_productdefid.value, "");


        	trace("조회 조건 : "+this.ds_search.saveXML());

        	if(this.nfn_isNull(productdefid))   //품목코드 미입력시
        	{
        		var sSvcID 			= "getDefectRateByRepairNullList";
        		var sController 	= "/dfm00500/getDefectRateByRepairNullList.do";
        		var sInDatasets 	= "INPUT=ds_search";
        		var sOutDatasets 	= "ds_dt=output1";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        	else
        	{
        		var sSvcID 			= "getDefectRateByRepairList";
        		var sController 	= "/dfm00500/getDefectRateByRepairList.do";
        		var sInDatasets 	= "INPUT=ds_search";
        		var sOutDatasets 	= "ds_dt=output1";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        };


         /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	switch(trId) {
        		case "selectProductDefVersionByRate": 			//[조회조건] rev 조회 성공

        			// (21.06.18) 전체조회 선택 된상태여야 한다 초기에.
        			this.ds_revCombo.setColumn(0,"CHK", "1");

        			// 멀티 콤보 적용
        			//trace(" 콤보값 조회 결과 : "+this.ds_revCombo.saveXML());
        			// 하위 멀티 콤보 이벤트 설정.
        			this.tab_search.tab_page.form.div_revMulti.form.fn_init_multicombo_data(this.ds_revCombo);
        			this.tab_search.tab_page.form.div_revMulti.form.ds_initData.applyChange();

        			// 연결된 하위 멀티 콤보 초기화
        			this.tab_search.tab_page.form.div_revMulti.form.btn_hide.addEventHandler( "onclick"
        									, this.fn_clickRev
        									, this
        									);
        			this.tab_search.tab_page.form.div_revMulti.form.btn_dropcombo.addEventHandler( "onclick"
        									, this.fn_clickRev
        									, this
        									);


        			if(this.isChangeCombo == true)
        				this.fn_changeCombo();
        // 			// Layer 초기화
        // 			this.ds_layerGroupSum.clearData();
        // 			this.tab_search.tab_search01.form.edt_layer.set_value("");

        			// 조회 ()
        			//this.fn_setProc();

        			break;
        		case "getProcessByProductdef":

        			this.isChangeCombo = false;
        			console.log(this.ds_aoiCombo.saveXML());

        			// (21.06.18) 전체조회 선택 된상태여야 한다 초기에.
        			this.ds_aoiCombo.setColumn(0,"CHK", "1");

        			// 멀티 콤보 적용
        			//trace(" 콤보값 조회 결과 : "+this.ds_revCombo.saveXML());
        			// 하위 멀티 콤보 이벤트 설정.
        			this.tab_search.tab_page.form.div_aoiMulti.form.fn_init_multicombo_data(this.ds_aoiCombo);
        			this.tab_search.tab_page.form.div_aoiMulti.form.ds_initData.applyChange();

        			// 연결된 하위 멀티 콤보 초기화
        			this.tab_search.tab_page.form.div_aoiMulti.form.btn_hide.addEventHandler( "onclick"
        									, this.fn_clickAOI
        									, this
        									);
        			this.tab_search.tab_page.form.div_aoiMulti.form.btn_dropcombo.addEventHandler( "onclick"
        									, this.fn_clickAOI
        									, this
        									);

        			//this.fn_initCombo();

        			break;

        		case "getDefectRateByRepairNullList":

        // 			this.div_work.form.grd_main.setRealColSize( "body", 2, 220, true );
        // 			this.div_work.form.grd_main.setRealColSize( "body", 3, 100, true );
        //
        //
        // 			this.div_work.form.cht_nullTotal.set_visible(true);
        // 			this.div_work.form.cht_nullBefore.set_visible(true);
        // 			this.div_work.form.cht_nullAfter.set_visible(true);
        //
        // 			this.div_work.form.cht_total.set_visible(false);
        //
        // // 			this.ds_dt.clearData();
        // // 			this.ds_dt.copyData(this.ds_dtBack);

        			if(this.ds_dt.rowcount == 0)
        			{
        				//조회할 데이터가 없습니다.
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}

        // 			// 조회 후 멀티 콤보(상위설정)
        // 			this.div_work.form.div_defectGrpMulti.form.fn_init_multicombo_data(this.ds_cmbDefectGrp);
        // 			this.div_work.form.div_defectGrpMulti.form.ds_initData.applyChange();
        // 			// 연결된 하위 멀티 콤보 초기화
        // 			this.div_work.form.div_defectGrpMulti.form.btn_hide.addEventHandler( "onclick"
        // 									, this.fn_clickDefectGrp
        // 									, this
        // 									);
        // 			this.div_work.form.div_defectGrpMulti.form.btn_dropcombo.addEventHandler( "onclick"
        // 									, this.fn_clickDefectGrp
        // 									, this
        // 									);
        // 			// 하위 멀티 콤보 이벤트 설정.
        // 			this.div_work.form.div_defectCodeMulti.form.fn_init_multicombo_data(this.ds_cmbDefectCode);
        // 			this.div_work.form.div_defectCodeMulti.form.ds_initData.applyChange();
        // 			this.div_work.form.div_defectCodeMulti.form.btn_hide.addEventHandler( "onclick"
        // 									, this.fn_clickDefectCode
        // 									, this
        // 									);
        // 			this.div_work.form.div_defectCodeMulti.form.btn_dropcombo.addEventHandler( "onclick"
        // 									, this.fn_clickDefectCode
        // 									, this
        // 									);

        			//this.getDefectAnalysisByRepair();

        			this.fn_searchNullFlag = true;

        			break;

        		case "getDefectRateByRepairList":

        // 			this.div_work.form.grd_main.setRealColSize( "body", 2, 0, true );
        // 			this.div_work.form.grd_main.setRealColSize( "body", 3, 0, true );
        //
        // 			this.div_work.form.cht_nullTotal.set_visible(false);
        // 			this.div_work.form.cht_nullBefore.set_visible(false);
        // 			this.div_work.form.cht_nullAfter.set_visible(false);
        //
        // 			this.div_work.form.cht_total.set_visible(true);
        //
        // // 			this.ds_dt.clearData();
        // // 			this.ds_dt.copyData(this.ds_dtBack);

        			if(this.ds_dt.rowcount == 0)
        			{
        				//조회할 데이터가 없습니다.
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}

        // 			// 조회 후 멀티 콤보(상위설정)
        // 			this.div_work.form.div_defectGrpMulti.form.fn_init_multicombo_data(this.ds_cmbDefectGrp);
        // 			this.div_work.form.div_defectGrpMulti.form.ds_initData.applyChange();
        // 			// 연결된 하위 멀티 콤보 초기화
        // 			this.div_work.form.div_defectGrpMulti.form.btn_hide.addEventHandler( "onclick"
        // 									, this.fn_clickDefectGrp
        // 									, this
        // 									);
        // 			this.div_work.form.div_defectGrpMulti.form.btn_dropcombo.addEventHandler( "onclick"
        // 									, this.fn_clickDefectGrp
        // 									, this
        // 									);
        // 			// 하위 멀티 콤보 이벤트 설정.
        // 			this.div_work.form.div_defectCodeMulti.form.fn_init_multicombo_data(this.ds_cmbDefectCode);
        // 			this.div_work.form.div_defectCodeMulti.form.ds_initData.applyChange();
        // 			this.div_work.form.div_defectCodeMulti.form.btn_hide.addEventHandler( "onclick"
        // 									, this.fn_clickDefectCode
        // 									, this
        // 									);
        // 			this.div_work.form.div_defectCodeMulti.form.btn_dropcombo.addEventHandler( "onclick"
        // 									, this.fn_clickDefectCode
        // 									, this
        // 									);

        			//this.getDefectAnalysisByRepair();

        			this.fn_searchNullFlag = false;

        			break;

        		case "getDefectRateByRepairNullDetailList":
        // 			this.ds_chartNullBefore.set_enableevent(false);
        // 			this.ds_chartNullAfter.set_enableevent(false);

        			var nColor	= "";
        			var nRow = -1;
        			this.ds_chartNullBefore.clearData();
        			for(var i = 0; i < this.ds_chartNullBeforeAfter.rowcount; i++)
        			{
        				nRow = this.ds_chartNullBefore.addRow();
        				this.ds_chartNullBefore.setColumn(nRow, "CODE", this.ds_chartNullBeforeAfter.getColumn(i, "CODE"));
        				this.ds_chartNullBefore.setColumn(nRow, "NAME", this.ds_chartNullBeforeAfter.getColumn(i, "NAME"));
        				this.ds_chartNullBefore.setColumn(nRow, "VALUE", this.ds_chartNullBeforeAfter.getColumn(i, "BEFOREDEFECTRATE"));
        				nColor += this.ds_chartNullBeforeAfter.getColumn(i, "COLOR") + ",";
        			}

        			if(nColor.length > 0)
        				nColor = nColor.substring(0, nColor.length-1);

        			this.div_work.form.cht_nullBefore.seriesset[0].set_barfillstyle(nColor);

        			nRow = -1;
        			this.ds_chartNullAfter.clearData();
        			for(var i = 0; i < this.ds_chartNullBeforeAfter.rowcount; i++)
        			{
        				nRow = this.ds_chartNullAfter.addRow();
        				this.ds_chartNullAfter.setColumn(nRow, "CODE", this.ds_chartNullBeforeAfter.getColumn(i, "CODE"));
        				this.ds_chartNullAfter.setColumn(nRow, "NAME", this.ds_chartNullBeforeAfter.getColumn(i, "NAME"));
        				this.ds_chartNullAfter.setColumn(nRow, "VALUE", this.ds_chartNullBeforeAfter.getColumn(i, "AFTERDEFECTRATE"));
        			}

        			this.div_work.form.cht_nullAfter.seriesset[0].set_barfillstyle(nColor);

        // 			this.ds_chartNullBefore.set_enableevent(true);
        // 			this.ds_chartNullAfter.set_enableevent(true);
        //
        // 			this.div_work.form.cht_nullBefore.set_enableevent(true);
        // 			this.div_work.form.cht_nullAfter.set_enableevent(true);

        			break;
        		case "getDefectRateByRepairDetailList":

        			break;

        		case "getDefectRateByRepairNullSeriesDetailList":

        			break;

        		case "getDefectRateByRepairSeriesDetailList":

        			break;

        		default:

        			break;
        	}
        };

        /// <summary>
        /// Row Data를 InspectionRateSheet SO List로 변환
        /// </summary>
        /// <param name="dt"></param>
        /// <param name="isRepair">리페어 진행</param>
        /// <returns></returns>
        // this.conversionToEquipSheet = function (ds_table)
        // {
        //  //this.ds_dt
        //
        // 	this.ds_inspectionRateSheet.clearData();
        //
        // 	var total = nexacro.toNumber(this.nfn_nvl(ds_table.getSum("INSPECTIONQTY"), "0"));
        //
        // 	for(var i = 0; i < ds_table.rowcount; i++)
        // 	{
        // 		var nRow = this.ds_inspectionRateSheet.addRow();
        //
        // 		//this.ds_inspectionRateSheet.setColumn(nRow, "EQUIPMENTTYPE"		 , this.nfn_nvl(ds_table.getColumn(i, "EQUIPMENTTYPE"), ""));
        // 		//this.ds_inspectionRateSheet.setColumn(nRow, "PROCESSSEGMENTID"	 , this.nfn_nvl(ds_table.getColumn(i, "PROCESSSEGMENTID"), ""));
        // 		this.ds_inspectionRateSheet.setColumn(nRow, "CHK" 				 , "0" );
        // 		this.ds_inspectionRateSheet.setColumn(nRow, "PROCESSSEGMENTNAME" , this.nfn_nvl(ds_table.getColumn(i, "PROCESSSEGMENTNAME"), ""));
        // 		this.ds_inspectionRateSheet.setColumn(nRow, "PRODUCTDEFID"		, this.nfn_nvl(ds_table.getColumn(i, "PRODUCTDEFID"), ""));
        // 		this.ds_inspectionRateSheet.setColumn(nRow, "PRODUCTDEFNAME"	, this.nfn_nvl(ds_table.getColumn(i, "PRODUCTDEFNAME"), ""));
        // 		this.ds_inspectionRateSheet.setColumn(nRow, "PRODUCTDEFVERSION"	, this.nfn_nvl(ds_table.getColumn(i, "PRODUCTDEFVERSION"), ""));
        // 		this.ds_inspectionRateSheet.setColumn(nRow, "LOTID"				, this.nfn_nvl(ds_table.getColumn(i, "LOTID"), ""));
        // 		this.ds_inspectionRateSheet.setColumn(nRow, "INSPECTIONQTY"		, this.nfn_nvl(ds_table.getColumn(i, "INSPECTIONQTY"), "0"));
        // 		this.ds_inspectionRateSheet.setColumn(nRow, "REPAIRTARGETQTY"	, this.nfn_nvl(ds_table.getColumn(i, "REPAIRTARGETQTY"), "0"));
        // 		this.ds_inspectionRateSheet.setColumn(nRow, "REPAIRRESULTQTY"	, this.nfn_nvl(ds_table.getColumn(i, "REPAIRRESULTQTY"), "0"));
        // 		this.ds_inspectionRateSheet.setColumn(nRow, "GROUPCODE"			, this.nfn_nvl(ds_table.getColumn(i, "GROUPCODE"), ""));
        // 		this.ds_inspectionRateSheet.setColumn(nRow, "GROUPNAME"			, this.nfn_nvl(ds_table.getColumn(i, "GROUPNAME"), ""));
        // 		this.ds_inspectionRateSheet.setColumn(nRow, "GROUPCOLOR"		, this.nfn_nvl(ds_table.getColumn(i, "COLOR"), ""));
        // 		this.ds_inspectionRateSheet.setColumn(nRow, "SUBCODE"			, this.nfn_nvl(ds_table.getColumn(i, "SUBCODE"), ""));
        // 		this.ds_inspectionRateSheet.setColumn(nRow, "SUBNAME"			, this.nfn_nvl(ds_table.getColumn(i, "SUBNAME"), ""));
        // 		this.ds_inspectionRateSheet.setColumn(nRow, "DEFECTCOUNT"		, this.nfn_nvl(ds_table.getColumn(i, "DEFECTCOUNT"), "0"));
        // 		this.ds_inspectionRateSheet.setColumn(nRow, "EVENTTIME"			, this.nfn_nvl(ds_table.getColumn(i, "EVENTTIME"), ""));
        // 		this.ds_inspectionRateSheet.setColumn(nRow, "SUMQTY"			, total);
        //
        // 	}
        //
        // 	return this.ds_inspectionRateSheet;
        // };


        /// <summary>
        /// 분석대상에 대한 처리
        /// 회사별로 로직이 다름
        /// </summary>
        /// <param name="dt">raw Data</param>
        /// <returns></returns>
        // this.getDefectAnalysisByRepair = function ()
        // {
        // 	//DataTable dt, EquipmentType type
        // 	if (this.ds_dt.rowcount == 0)
        // 	{
        // 		return null;
        // 	}
        //
        // 	this.conversionToEquipSheet(this.ds_dt);
        //
        //
        // 	this.gf_distincDsFilter(this.ds_inspectionRateSheet, "PRODUCTDEFVERSION,LOTID");
        //
        // 	this.ds_inspectionRateDistinctSheet.clearData();
        // 	this.ds_inspectionRateDistinctSheet.copyData(this.ds_inspectionRateSheet, true);
        //
        // 	this.ds_inspectionRateSheet.filter("");
        //
        // 	//PRODUCTDEFNAME
        // 	//PRODUCTDEFID
        //
        // 	var inspectionQty = -1;
        // 	var deffectCount  = -1;
        // 	var beforeDefectRate = -1;
        // 	var analysisTarget = -1;
        // 	var analysisResult = -1;
        // 	var afterDefectCnt = -1;
        // 	var afterDefectRate = -1;
        // 	var analysisRate    = -1;
        // 	var nRow = -1;
        //
        // 	for(var i = 0; i < this.ds_inspectionRateDistinctSheet.rowcount; i++)
        // 	{
        // 		nRow = this.ds_AOIDefectRateRepair.addRow();
        //
        // 		this.ds_AOIDefectRateRepair.setColumn(nRow, "CHK"				, "0" );
        // 		this.ds_AOIDefectRateRepair.setColumn(nRow, "PRODUCTDEFNAME"	, this.ds_inspectionRateDistinctSheet.getColumn(i, "PRODUCTDEFNAME"));
        // 		this.ds_AOIDefectRateRepair.setColumn(nRow, "PRODUCTDEFID"		, this.ds_inspectionRateDistinctSheet.getColumn(i, "PRODUCTDEFID"));
        // 		this.ds_AOIDefectRateRepair.setColumn(nRow, "PRODUCTDEFVERSION"	, this.ds_inspectionRateDistinctSheet.getColumn(i, "PRODUCTDEFVERSION"));
        // 		this.ds_AOIDefectRateRepair.setColumn(nRow, "LOTID"				, this.ds_inspectionRateDistinctSheet.getColumn(i, "LOTID"));
        // 		this.ds_AOIDefectRateRepair.setColumn(nRow, "PROCESSSEGMENTNAME", this.ds_inspectionRateDistinctSheet.getColumn(i, "PROCESSSEGMENTNAME"));
        // 		this.ds_AOIDefectRateRepair.setColumn(nRow, "GROUPCODE"			, this.ds_inspectionRateDistinctSheet.getColumn(i, "GROUPCODE"));
        // 		this.ds_AOIDefectRateRepair.setColumn(nRow, "GROUPNAME"			, this.ds_inspectionRateDistinctSheet.getColumn(i, "GROUPNAME"));
        // 		this.ds_AOIDefectRateRepair.setColumn(nRow, "SUBCODE"			, this.ds_inspectionRateDistinctSheet.getColumn(i, "SUBCODE"));
        // 		this.ds_AOIDefectRateRepair.setColumn(nRow, "SUBNAME"			, this.ds_inspectionRateDistinctSheet.getColumn(i, "SUBNAME"));
        //
        //
        // 		inspectionQty     = nexacro.toNumber(this.nfn_nvl(this.ds_inspectionRateDistinctSheet.getColumn(0, "INSPECTIONQTY"), "0"));
        // 		deffectCount      = nexacro.toNumber(this.nfn_nvl(this.ds_inspectionRateDistinctSheet.getSum("DEFECTCOUNT"), "0"));
        // 	    beforeDefectRate  = this.setDefectRate(deffectCount, inspectionQty);
        //
        // 		analysisTarget = nexacro.toNumber(this.nfn_nvl(this.ds_inspectionRateDistinctSheet.getSum("REPAIRTARGETQTY"), "0"));
        // 		analysisResult = nexacro.toNumber(this.nfn_nvl(this.ds_inspectionRateDistinctSheet.getSum("REPAIRRESULTQTY"), "0"));
        // 		afterDefectCnt = deffectCount - analysisResult;
        //
        // 		afterDefectRate = this.setDefectRate(afterDefectCnt, inspectionQty);
        // 		analysisRate    = this.setDefectRate(analysisResult, analysisTarget);
        //
        // 		this.ds_AOIDefectRateRepair.setColumn(nRow, "INSPECTIONQTY"		, inspectionQty);
        // 		this.ds_AOIDefectRateRepair.setColumn(nRow, "BEFOREDEFECTCNT"	, deffectCount);
        // 		this.ds_AOIDefectRateRepair.setColumn(nRow, "BEFOREDEFECTRATE"	, beforeDefectRate);
        // 		this.ds_AOIDefectRateRepair.setColumn(nRow, "ANALYSISTARGET"	, analysisTarget);
        // 		this.ds_AOIDefectRateRepair.setColumn(nRow, "ANALYSISRESULT"	, afterDefectCnt);
        // 		this.ds_AOIDefectRateRepair.setColumn(nRow, "AFTERDEFECTCNT"	, afterDefectCnt);
        // 		this.ds_AOIDefectRateRepair.setColumn(nRow, "AFTERDEFECTRATE"	, afterDefectRate);
        // 		this.ds_AOIDefectRateRepair.setColumn(nRow, "ANALYSISRATE"		, analysisRate);
        // 	}
        //
        //
        // 	this.div_work.form.grd_main.set_binddataset(this.ds_AOIDefectRateRepair);
        // };


        // this.fn_initCombo = function ()
        // {
        // 	if(this.ds_cbo_AOIProcess.rowcount == 0)
        // 	{
        // 		this.ds_cbo_AOIProcess.addColumn("CODEID", "STRING", 256 );
        // 		this.ds_cbo_AOIProcess.addColumn("CODENAME", "STRING", 256 );
        // 	}
        //
        // 	this.AddAll(this.ds_cbo_AOIProcess,"CODEID","CODENAME");
        //
        //
        // 	var nRow = this.ds_cbo_AOIProcess.addRow();
        //
        // 	this.ds_cbo_AOIProcess.setColumn(nRow, "CODEID"  , "X");
        // 	this.ds_cbo_AOIProcess.setColumn(nRow, "CODENAME", "선택없음");
        //
        //
        // 	//this.ds_search.setColumn(0, "P_AOIPROCESS", "");
        // 	//this.ds_search.setColumn(0, "P_BBTPROCESS", "");
        // 	//this.ds_search.setColumn(0, "P_HOLEPROCESS", "");
        //
        // 	//this.tab_search.tab_page.form.cbo_productdefversion.set_index(0);
        // 	this.tab_search.tab_page.form.cbo_AOIProcess.set_index(0);
        // };

        /*
         * 멀티 콤보 활성화시...
         */
        this.fn_clickRev = function (obj, e)
        {
        // 	// Layer 정보 초기화
        // 	this.ds_layerGroupSum.clearData();
        // 	this.tab_search.tab_search01.form.edt_layer.set_value("");
        }

        this.fn_clickAOI = function (obj, e)
        {
        // 	// Layer 정보 초기화
        // 	this.ds_layerGroupSum.clearData();
        // 	this.tab_search.tab_page.form.edt_layer.set_value("");
        }


        // /// <summary>
        // /// 조회 조건에 Language Type 추가하기
        // /// </summary>
        // /// <param name="values">조회 조건 Dictionary</param>
        // /// <returns></returns>
        // this.addLanguageTypeToConditions = function ()
        // {
        //  	this.ds_values.clearData();
        //  	this.ds_values.addRow();
        //
        // 	this.ds_values.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        // 	return this.ds_values;
        // };




        /// <summary>
        /// 수율 계산 ( value / totla ) * 100
        /// </summary>
        /// <param name="value">점유율</param>
        /// <param name="total">전체</param>
        /// <returns></returns>
        this.setDefectRate = function (value, total)
        {
        	var rate = total == 0 ? 0 : nexacro.round(value / total * 100, 2);

        	 //음수나 양수의 무한대이면 -1을 리턴
        	return isFinite(rate) ? rate : -1;
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
        		case "SCH_ITEMCODE" : //
        		{
        			var nItemCode	= rtn[0];
        			var nItemNm		= rtn[1];

        			this.tab_search.tab_page.form.edt_lotid.set_value("");
        			this.tab_search.tab_page.form.edt_productdefid.set_value(nItemCode);
        			this.tab_search.tab_page.form.edt_productname.set_value(nItemNm);

        			this.isChangeCombo = true;
        			// Rev 조회(필요함)
        			this.fn_setRev(nItemCode);



        		}
        		break;
        		case "SCH_LOTNo" :
        		{
        			var nLotNo 		= rtn[0];
        			var nItemCode	= rtn[1];
        			var nItemNm		= rtn[2];

        			this.tab_search.tab_page.form.edt_lotid.set_value(nLotNo);
        			this.tab_search.tab_page.form.edt_productdefid.set_value(nItemCode);
        			this.tab_search.tab_page.form.edt_productname.set_value(nItemNm);

        			this.isChangeCombo = true;
        			// Rev 조회(필요함)
        			this.fn_setRev(nItemCode);
        		}
        		break;

        		default:
        		{
        		}
        		break;
        	};

        	// trace( 'xml ?' +  this.ds_search.saveXML());
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        this.fn_clearCustom = function()
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();


        	// 지우고 콤보 초기화 필요
        	this.tab_search.tab_page.form.edt_lotid.set_value("");
        	this.tab_search.tab_page.form.edt_productdefid.set_value("");
        	this.tab_search.tab_page.form.edt_productname.set_value("");

        	// 검색조건 달력 설정
        	this.tab_search.tab_page.form.cbo_period.set_value("thisweek");
        	this.tab_search_tab_page_cbo_period_onitemchanged();

        	this.isChangeCombo = true;
        	// Rev 조회
        	this.fn_setRev("");

        };



        this.fn_changeCombo = function ()
        {
        	this.ds_aoiCombo.clearData();



        	this.ds_paramAOI.clearData();
        	this.ds_paramAOI.addRow();


        	this.ds_paramAOI.setColumn(0, "P_LOTID", this.nfn_nvl(this.ds_search.getColumn(0, "P_LOTID"), ""));
        	this.ds_paramAOI.setColumn(0, "P_ENTERPRISEID", this.gf_getEnterpriseId());
        	this.ds_paramAOI.setColumn(0, "P_PLANTID", this.gf_getSiteType());
        	this.ds_paramAOI.setColumn(0, "P_INSPECTIONTYPE", "AOIInspection" );
        	this.ds_paramAOI.setColumn(0, "P_PRODUCTDEFID", this.nfn_nvl(this.ds_search.getColumn(0, "P_PRODUCTDEFID"), "") );
        	this.ds_paramAOI.setColumn(0, "P_PRODUCTDEFVERSION", this.nfn_nvl(this.ds_search.getColumn(0, "P_PRODUCTDEFVERSION"), "") );
        	this.ds_paramAOI.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType() );
        	this.ds_paramAOI.setColumn(0, "VERSION", "10001");


        	//InitializeComboBox
        	//콤보박스 ds_param
        	var sSvcID 			= "getProcessByProductdef";
        	var sController 	= "/dfm00500/getProcessByProductdef.do";
        	var sInDatasets 	= "INPUT=ds_paramAOI";
        	var sOutDatasets 	= "ds_aoiCombo=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 품목코드에 해당 하는 Rev 조회
         */
        this.fn_setRev = function (nItemCd)
        {
        // 	//trace(" [조회 조건] ===> : "+nItemCd);
        // 	this.ds_revCombo.clearData();
        // 	this.ds_searchCombo.clearData();
        // 	this.ds_searchCombo.addRow();
        // 	this.ds_searchCombo.setColumn(0,"P_PRODUCTDEFID",nItemCd);
        	this.ds_revCombo.clearData();

        	this.ds_search.setColumn(0, "SESSION_LANGUAGETYPE",  this.gf_getLanguageType());

        	var sSvcID 			= "selectProductDefVersionByRate";
        	var sController 	= "/dfm00400/selectProductDefVersionByRate.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_revCombo=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };

        this.tab_search_tab_page_btn_popup_onclick = function(obj, e)
        {

        	// gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
        	//-----------------
        	// arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅 : C:
        	// popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        	// popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        	// rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        	// paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        	// paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        	// searchStr   : 팝업 조회조건 콤보값 = 조회 값
        	var oArg = {};
        	switch(obj.name)
        	{
        		case "btn_productdefid" :
        		{

        			var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        			var nSite 			= this.gf_getSiteType();		//Site
        			var popupId = "SCH_ITEMCODE";
        			var oArg = {};
        			var opts = "width=650,height=500";

        			// 기 입력값 있는지 확인
        			var nSearch 	= this.tab_search.tab_page.form.edt_productdefid.value;
        			var nPeriodfr 	= this.tab_search.tab_page.form.div_dateFrom.form.calStart.value;
        			var nPeriodto 	= this.tab_search.tab_page.form.div_dateTo.form.calStart.value;

        			if(!this.gfn_isNull(nSearch))
        			{
        				// 기입력된 값이 있으면
        				oArg.arg_itemCode	= nSearch;
        			}
        			oArg.arg_periodfr 		= nPeriodfr;
        			oArg.arg_periodto 		= nPeriodto;

        			this.gfn_openPopup(popupId,"dfm::DFM00401P.xfdl" ,oArg ,opts);

        		}
        		break;
        		case "btn_lotid" :
        		{

        			var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        			var nSite 			= this.gf_getSiteType();		//Site
        			var popupId = "SCH_LOTNo";
        			var oArg = {};
        			var opts = "width=850,height=500";

        			// 기 입력값 있는지 확인
        			var nSearch 	= this.tab_search.tab_page.form.edt_lotid.value;
        			var nPeriodfr 	= this.tab_search.tab_page.form.div_dateFrom.form.calStart.value;
        			var nPeriodto 	= this.tab_search.tab_page.form.div_dateTo.form.calStart.value;

        			if(!this.gfn_isNull(nSearch))
        			{
        				// 기입력된 값이 있으면
        				oArg.arg_lotNo 		= nSearch;
        			}
        			oArg.arg_periodfr 	= nPeriodfr;
        			oArg.arg_periodto 	= nPeriodto;

        			this.gfn_openPopup(popupId,"dfm::DFM00400P.xfdl" ,oArg ,opts);

        		}
        		break;

        		default :
        		{
        		}
        		break;
        	};
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/


        this.div_header_btn_apply_onclick = function(obj,e)
        {
        	//품목코드 미입력시
        	this.ds_search.setColumn(0, "P_PROCESSSEGMENTID", "");
        	this.ds_search.setColumn(0, "P_GROUPCODE", "");
        	this.ds_chartNullTotal.clearData();
        	this.ds_chartNullBeforeAfter.clearData();
        	this.ds_chartNullBefore.clearData();
        	this.ds_chartNullAfter.clearData();
        	this.ds_chartTotal.clearData();
        	this.ds_detailBefore.clearData();
        	this.ds_detailAfter.clearData();

        	this.ds_dt.set_enableevent(false);
        	this.ds_dt.filter("CHK == '1'");
        	this.ds_distinctDt.clearData();
        	this.ds_distinctDt.copyData(this.ds_dt , true);

        	if(this.ds_dt.getRowCount() == 0)
        	{
        		this.gfn_Message("GridNoChecked", null, "info", "ok");
        		this.ds_dt.filter("");
        		this.ds_dt.set_enableevent(true);
        		return;
        	}

        	this.ds_dt.filter("");
        	this.ds_dt.set_enableevent(true);

        // 		ds_chartTotal
        // 		ds_chartBefore
        // 		ds_chartAfter

        	var tRow = -1;
        	var bRow = -1;
        	var aRow = -1;



        	var productdefid = this.nfn_nvl(this.tab_search.tab_page.form.edt_productdefid.value, "");

        	if(this.nfn_isNull(productdefid))   //품목코드 미입력시
        	{
        // 		this.ds_chartNullTotal.filter("CHK == '1'");
        // 		this.ds_chartNullBefore.filter("CHK == '1'");
        // 		this.ds_chartNullAfter.filter("CHK == '1'");
        // 		this.ds_detailBefore.filter("CHK == '1'");
        // 		this.ds_detailAfter.filter("CHK == '1'");

        		var sSvcID 			= "getDefectRateByRepairNullDetailList";
        		var sController 	= "/dfm00500/getDefectRateByRepairNullDetailList.do";
        		var sInDatasets 	= "INPUT=ds_search INPUT2=ds_distinctDt";
        		var sOutDatasets 	= "ds_chartNullTotal=output1 ds_chartNullBeforeAfter=output2 ds_detailBefore=output3 ds_detailAfter=output4";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        	else
        	{
        // 		this.ds_chartTotal.filter("CHK == '1'");
        // 		this.ds_detailBefore.filter("CHK == '1'");
        // 		this.ds_detailAfterfilter("CHK == '1'");

        		var sSvcID 			= "getDefectRateByRepairDetailList";
        		var sController 	= "/dfm00500/getDefectRateByRepairDetailList.do";
        		var sInDatasets 	= "INPUT=ds_search INPUT2=ds_distinctDt";
        		var sOutDatasets 	= "ds_chartTotal=output1 ds_detailBefore=output2 ds_detailAfter=output3";
        		var sArgs 			= "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}

        };


        // this.initializeCombo = function()
        // {
        // 	if (this.ds_aoiCombo.rowcount > 1) //좌측 콤보 AOI의 갯수가 (데이타가 있으면 AOI가 있는것임.
        // 	{
        //
        // 		this.gf_distincDsFilter(this.ds_dt, "GROUPCODE,GROUPNAME");
        // 		this.ds_dt.set_keystring("S:+GROUPCODE");
        //
        // 		this.ds_cboDt.clearData();
        // 		for(var i = 0; i < this.ds_dt.getRowCount(); i++)
        // 		{
        // 			var nRow = this.ds_cboDt.addRow();
        // 			this.ds_cboDt.setColumn(nRow, "CODEID"  , this.ds_dt.getColumn(i, "GROUPCODE"));
        // 			this.ds_cboDt.setColumn(nRow, "CODENAME", this.ds_dt.getColumn(i, "GROUPNAME"));
        // 		}
        //
        // 		this.ds_dt.filter("");
        //
        // 		// 이 데이타 맞는지 확인
        // 		this.ds_cboSubDt.clearData();
        // 		this.ds_cboSubDt.copyData(this.ds_cboDt);
        //
        //
        // 	}
        // 	else
        // 	{
        //
        // 		this.gf_distincDsFilter(this.ds_dt, "SUBCODE,SUBNAME");
        // 		this.ds_dt.set_keystring("S:+SUBCODE");
        //
        // 		this.ds_cboSubDt.clearData();
        // 		for(var i = 0; i < this.ds_dt.getRowCount(); i++)
        // 		{
        // 			var nRow = this.ds_cboSubDt.addRow();
        // 			this.ds_cboSubDt.setColumn(nRow, "CODEID"  , this.ds_dt.getColumn(i, "SUBNAME"));
        // 			this.ds_cboSubDt.setColumn(nRow, "CODENAME", this.ds_dt.getColumn(i, "GROUPNAME"));
        // 		}
        //
        // 		this.ds_dt.filter("");
        // 	}
        // };


        this.ds_search_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "P_PRODUCTDEFID")
        	{
        		this.fn_edt_productdefid_onchanged(e.newvalue);
        	}
        };

        this.fn_edt_productdefid_onchanged = function(postvalue)
        {
        	if(this.nfn_isNull(postvalue))   //품목코드 미입력시
        	{
        		this.div_work.form.grd_main.setCellProperty( "head", 1, "displaytype",   "" );
        		this.div_work.form.grd_main.setCellProperty( "head", 1, "edittype",   "" );
        		this.div_work.form.grd_main.setCellProperty( "head", 1, "text",   "선택" );

        		this.div_work.form.grd_main.setRealColSize( "body", 2, 250, true );
        		this.div_work.form.grd_main.setRealColSize( "body", 3, 100, true );


        		this.div_work.form.cht_nullTotal.set_visible(true);
        		this.div_work.form.cht_nullBefore.set_visible(true);
        		this.div_work.form.cht_nullAfter.set_visible(true);

        		this.div_work.form.cht_total.set_visible(false);

        		this.div_work.form.grd_before.setRealColSize( "body", 1, 0, true );
        		this.div_work.form.grd_before.setRealColSize( "body", 8, 0, true );
        		this.div_work.form.grd_after.setRealColSize( "body", 1, 0, true );
        		this.div_work.form.grd_after.setRealColSize( "body", 8, 0, true );
        	}
        	else
        	{
        		this.div_work.form.grd_main.setCellProperty( "head", 1, "displaytype",   "checkboxcontrol" );
        		this.div_work.form.grd_main.setCellProperty( "head", 1, "edittype",   "checkbox" );
        		this.div_work.form.grd_main.setCellProperty( "head", 1, "text",   "" );

        		this.div_work.form.grd_main.setRealColSize( "body", 2, 0, true );
        		this.div_work.form.grd_main.setRealColSize( "body", 3, 0, true );

        		this.div_work.form.cht_nullTotal.set_visible(false);
        		this.div_work.form.cht_nullBefore.set_visible(false);
        		this.div_work.form.cht_nullAfter.set_visible(false);

        		this.div_work.form.cht_total.set_visible(true);

        		this.div_work.form.grd_before.setRealColSize( "body", 1, 150, true );
        		this.div_work.form.grd_before.setRealColSize( "body", 8, 120, true );
        		this.div_work.form.grd_after.setRealColSize( "body", 1, 150, true );
        		this.div_work.form.grd_after.setRealColSize( "body", 8, 120, true );
        	}
        };

        // 품목코드 미입력시
        this.div_work_cht_nullTotal_onseriesclick = function(obj,e)
        {
        	this.ds_dt.set_enableevent(false);
        	this.ds_dt.filter("CHK == '1'");
        	this.ds_distinctDt.clearData();
        	this.ds_distinctDt.copyData(this.ds_dt , true);
        	this.ds_dt.filter("");
        	this.ds_dt.set_enableevent(true);

        	this.ds_search.setColumn(0, "P_PROCESSSEGMENTID", this.ds_chartNullTotal.getColumn(e.itemindex, "CODE"));
        	this.ds_search.setColumn(0, "P_GROUPCODE", "");

        	var sSvcID 			= "getDefectRateByRepairNullSeriesDetailList";
        	var sController 	= "/dfm00500/getDefectRateByRepairNullSeriesDetailList.do";
        	var sInDatasets 	= "INPUT=ds_search INPUT2=ds_distinctDt";
        	var sOutDatasets 	= "ds_detailBefore=output1 ds_detailAfter=output2";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        };
        // 품목코드 미입력시
        this.div_work_cht_nullBefore_onseriesclick = function(obj,e)
        {

        	this.ds_dt.set_enableevent(false);
        	this.ds_dt.filter("CHK == '1'");
        	this.ds_distinctDt.clearData();
        	this.ds_distinctDt.copyData(this.ds_dt , true);
        	this.ds_dt.filter("");
        	this.ds_dt.set_enableevent(true);

        	this.ds_search.setColumn(0, "P_PROCESSSEGMENTID", "");
        	this.ds_search.setColumn(0, "P_GROUPCODE", this.ds_chartNullBefore.getColumn(e.itemindex, "CODE"));

        	var sSvcID 			= "getDefectRateByRepairNullSeriesDetailList";
        	var sController 	= "/dfm00500/getDefectRateByRepairNullSeriesDetailList.do";
        	var sInDatasets 	= "INPUT=ds_search INPUT2=ds_distinctDt";
        	var sOutDatasets 	= "ds_detailBefore=output1 ds_detailAfter=output2";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        // 품목코드 미입력시
        this.div_work_cht_nullAfter_onseriesclick = function(obj,e)
        {
        	this.ds_dt.set_enableevent(false);
        	this.ds_dt.filter("CHK == '1'");
        	this.ds_distinctDt.clearData();
        	this.ds_distinctDt.copyData(this.ds_dt , true);
        	this.ds_dt.filter("");
        	this.ds_dt.set_enableevent(true);

        	this.ds_search.setColumn(0, "P_PROCESSSEGMENTID", "");
        	this.ds_search.setColumn(0, "P_GROUPCODE", this.ds_chartNullAfter.getColumn(e.itemindex, "CODE"));


        	var sSvcID 			= "getDefectRateByRepairNullSeriesDetailList";
        	var sController 	= "/dfm00500/getDefectRateByRepairNullSeriesDetailList.do";
        	var sInDatasets 	= "INPUT=ds_search INPUT2=ds_distinctDt";
        	var sOutDatasets 	= "ds_detailBefore=output1 ds_detailAfter=output2";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };
        // 품목코드 입력시
        this.div_work_cht_total_onseriesclick = function(obj,e)
        {
        	this.ds_dt.set_enableevent(false);
        	this.ds_dt.filter("CHK == '1'");
        	this.ds_distinctDt.clearData();
        	this.ds_distinctDt.copyData(this.ds_dt , true);
        	this.ds_dt.filter("");
        	this.ds_dt.set_enableevent(true);

        	this.ds_search.setColumn(0, "P_PROCESSSEGMENTID", this.ds_chartTotal.getColumn(e.itemindex, "CODE"));
        	this.ds_search.setColumn(0, "P_GROUPCODE", "");

        	var sSvcID 			= "getDefectRateByRepairSeriesDetailList";
        	var sController 	= "/dfm00500/getDefectRateByRepairSeriesDetailList.do";
        	var sInDatasets 	= "INPUT=ds_search INPUT2=ds_distinctDt";
        	var sOutDatasets 	= "ds_detailBefore=output1 ds_detailAfter=output2";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };



        this.ds_dt_oncolumnchanged = function(obj,e)
        {
        	if(this.fn_searchNullFlag)
        	{
        		console.log("e.columnid >>" + e.columnid);
        		console.log("e.newvalue >>" + e.newvalue);

        		if(e.columnid == "CHK" && e.newvalue == "1")
        		{
        			console.log("xxx");
        			obj.setColumn(this.ds_dt_oldrow, "CHK", "0");
        		}
        	}
        };

        this.ds_dt_onrowposchanged = function(obj,e)
        {
        	this.ds_dt_oldrow = e.oldrow;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.tab_page.form.div_dateFrom.addEventHandler("onkeydown",this.fn_preiodChang,this);
            this.tab_search.tab_page.form.cbo_period.addEventHandler("onitemchanged",this.tab_search_tab_page_cbo_period_onitemchanged,this);
            this.tab_search.tab_page.form.div_dateTo.addEventHandler("onkeydown",this.fn_preiodChang,this);
            this.tab_search.tab_page.form.btn_lotid.addEventHandler("onclick",this.tab_search_tab_page_btn_popup_onclick,this);
            this.tab_search.tab_page.form.btn_productdefid.addEventHandler("onclick",this.tab_search_tab_page_btn_popup_onclick,this);
            this.tab_search.tab_page.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.tab_page.form.btn_clear2.addEventHandler("onclick",this.fn_clearCustom,this);
            this.div_work.form.cht_nullAfter.addEventHandler("onseriesclick",this.div_work_cht_nullAfter_onseriesclick,this);
            this.div_work.form.cht_nullTotal.addEventHandler("onseriesclick",this.div_work_cht_nullTotal_onseriesclick,this);
            this.div_work.form.cht_nullBefore.addEventHandler("onseriesclick",this.div_work_cht_nullBefore_onseriesclick,this);
            this.div_work.form.cht_total.addEventHandler("onseriesclick",this.div_work_cht_total_onseriesclick,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_apply.addEventHandler("onclick",this.div_header_btn_apply_onclick,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
            this.ds_dt.addEventHandler("oncolumnchanged",this.ds_dt_oncolumnchanged,this);
            this.ds_dt.addEventHandler("onrowposchanged",this.ds_dt_onrowposchanged,this);
        };
        this.loadIncludeScript("DFM00500M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
