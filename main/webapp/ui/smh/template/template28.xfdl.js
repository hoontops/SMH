(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01500M");
            this.set_titletext("조회조건+그리드T+(차트L+차트C+차트R)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"양산구분\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"Rev\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"입고LOT\" type=\"STRING\" size=\"256\"/><Column id=\"불량LOT\" type=\"STRING\" size=\"256\"/><Column id=\"불량율\" type=\"STRING\" size=\"256\"/><Column id=\"RJ점유율\" type=\"STRING\" size=\"256\"/><Column id=\"NG수량\" type=\"STRING\" size=\"256\"/><Column id=\"OK수량\" type=\"STRING\" size=\"256\"/><Column id=\"불량명1\" type=\"STRING\" size=\"256\"/><Column id=\"불량수1\" type=\"STRING\" size=\"256\"/><Column id=\"불량명2\" type=\"STRING\" size=\"256\"/><Column id=\"불량수2\" type=\"STRING\" size=\"256\"/><Column id=\"불량명3\" type=\"STRING\" size=\"256\"/><Column id=\"불량수3\" type=\"STRING\" size=\"256\"/><Column id=\"불량명4\" type=\"STRING\" size=\"256\"/><Column id=\"불량수4\" type=\"STRING\" size=\"256\"/><Column id=\"불량명5\" type=\"STRING\" size=\"256\"/><Column id=\"불량수5\" type=\"STRING\" size=\"256\"/><Column id=\"불량명6\" type=\"STRING\" size=\"256\"/><Column id=\"불량수6\" type=\"STRING\" size=\"256\"/><Column id=\"불량명7\" type=\"STRING\" size=\"256\"/><Column id=\"불량수7\" type=\"STRING\" size=\"256\"/><Column id=\"불량명8\" type=\"STRING\" size=\"256\"/><Column id=\"불량수8\" type=\"STRING\" size=\"256\"/><Column id=\"불량명9\" type=\"STRING\" size=\"256\"/><Column id=\"불량수9\" type=\"STRING\" size=\"256\"/><Column id=\"불량명10\" type=\"STRING\" size=\"256\"/><Column id=\"불량수10\" type=\"STRING\" size=\"256\"/><Column id=\"불량명11\" type=\"STRING\" size=\"256\"/><Column id=\"불량수11\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1060829B5</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">E A40N02E RF CAMERA(6L)-M3/4L</Col><Col id=\"입고LOT\">5</Col><Col id=\"불량LOT\">1</Col><Col id=\"불량율\">20</Col><Col id=\"RJ점유율\">50</Col><Col id=\"NG수량\">2</Col><Col id=\"OK수량\">91</Col><Col id=\"불량명1\">타발 (자재)-BASE 재단</Col><Col id=\"불량수1\">1</Col><Col id=\"불량명2\">BURR (자재)-BASE 재단</Col><Col id=\"불량수2\">1</Col><Col id=\"불량명3\"/><Col id=\"불량수3\"/><Col id=\"불량명4\"/><Col id=\"불량수4\"/><Col id=\"불량명5\"/><Col id=\"불량수5\"/><Col id=\"불량명6\"/><Col id=\"불량수6\"/><Col id=\"불량명7\"/><Col id=\"불량수7\"/><Col id=\"불량명8\"/><Col id=\"불량수8\"/><Col id=\"불량명9\"/><Col id=\"불량수9\"/><Col id=\"불량명10\"/><Col id=\"불량수10\"/><Col id=\"불량명11\">ETC</Col><Col id=\"불량수11\"/></Row><Row><Col id=\"양산구분\">양산</Col><Col id=\"품목코드\">1060839A4</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">B S16N10B RF CAMERA(6L)-M3/4L</Col><Col id=\"입고LOT\">1</Col><Col id=\"불량LOT\">1</Col><Col id=\"불량율\">100</Col><Col id=\"RJ점유율\">50</Col><Col id=\"NG수량\">3</Col><Col id=\"OK수량\">17</Col><Col id=\"불량명1\">이물-표면처리</Col><Col id=\"불량수1\">6</Col><Col id=\"불량명2\">누락-M/K인쇄</Col><Col id=\"불량수2\">3</Col><Col id=\"불량명3\"/><Col id=\"불량수3\"/><Col id=\"불량명4\"/><Col id=\"불량수4\"/><Col id=\"불량명5\"/><Col id=\"불량수5\"/><Col id=\"불량명6\"/><Col id=\"불량수6\"/><Col id=\"불량명7\"/><Col id=\"불량수7\"/><Col id=\"불량명8\"/><Col id=\"불량수8\"/><Col id=\"불량명9\"/><Col id=\"불량수9\"/><Col id=\"불량명10\"/><Col id=\"불량수10\"/><Col id=\"불량명11\">ETC</Col><Col id=\"불량수11\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart1", this);
            obj._setContents("<ColumnInfo><Column id=\"년월일\" type=\"STRING\" size=\"256\"/><Column id=\"입고LOT\" type=\"STRING\" size=\"256\"/><Column id=\"불량LOT\" type=\"STRING\" size=\"256\"/><Column id=\"불량율\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"불량LOT\">1</Col><Col id=\"불량율\">100</Col><Col id=\"입고LOT\">1</Col><Col id=\"년월일\">20210202</Col></Row><Row><Col id=\"불량LOT\">1</Col><Col id=\"불량율\">20</Col><Col id=\"입고LOT\">5</Col><Col id=\"년월일\">20210208</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart3", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"value\">50</Col><Col id=\"name\">E A40N02E RF CAMERA(6L)-M3/4LㅣFA1</Col></Row><Row><Col id=\"name\">B S16N10B RF CAMERA(6L)-M3/4LㅣFA1</Col><Col id=\"value\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_chart2", this);
            obj._setContents("<ColumnInfo><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"입고LOT\" type=\"STRING\" size=\"256\"/><Column id=\"불량LOT\" type=\"STRING\" size=\"256\"/><Column id=\"불량율\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"불량LOT\">1</Col><Col id=\"불량율\">20</Col><Col id=\"입고LOT\">5</Col><Col id=\"품목명\">E A40N02E RF CAMERA(6L)-M3/4LㅣFA1</Col></Row><Row><Col id=\"불량LOT\">1</Col><Col id=\"불량율\">100</Col><Col id=\"입고LOT\">1</Col><Col id=\"품목명\">B S16N10B RF CAMERA(6L)-M3/4LㅣFA1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","31",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","62",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"16","26","24","93",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_del");
            obj.set_tooltiptext("Toolbar_Delete");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","124",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"16","26","24","155",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_com_new");
            obj.set_tooltiptext("Toolbar_New");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","200","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("출하검사 LRR 모델별 집계");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","0","0","96","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("LRR 실적현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","34",null,null,"0","290",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"양산구분\"/><Cell col=\"2\" rowspan=\"2\" text=\"품목코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"Rev\"/><Cell col=\"4\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"5\" rowspan=\"2\" text=\"입고 LOT\"/><Cell col=\"6\" rowspan=\"2\" text=\"불량 LOT\"/><Cell col=\"7\" rowspan=\"2\" text=\"불량율(%)\"/><Cell col=\"8\" rowspan=\"2\" text=\"R/J 점유율\"/><Cell col=\"9\" rowspan=\"2\" text=\"NG 수량\"/><Cell col=\"10\" rowspan=\"2\" text=\"OK 수량\"/><Cell col=\"11\" colspan=\"2\" text=\"WORST1\" cssclass=\"cell_headMaster\"/><Cell col=\"13\" colspan=\"2\" text=\"WORST2\" cssclass=\"cell_headMaster\"/><Cell col=\"15\" colspan=\"2\" text=\"WORST3\" cssclass=\"cell_headMaster\"/><Cell col=\"17\" colspan=\"2\" text=\"WORST4\" cssclass=\"cell_headMaster\"/><Cell col=\"19\" colspan=\"2\" text=\"WORST5\" cssclass=\"cell_headMaster\"/><Cell col=\"21\" colspan=\"2\" text=\"WORST6\" cssclass=\"cell_headMaster\"/><Cell col=\"23\" colspan=\"2\" text=\"WORST7\" cssclass=\"cell_headMaster\"/><Cell col=\"25\" colspan=\"2\" text=\"WORST8\" cssclass=\"cell_headMaster\"/><Cell col=\"27\" colspan=\"2\" text=\"WORST9\" cssclass=\"cell_headMaster\"/><Cell col=\"29\" colspan=\"2\" text=\"WORST10\" cssclass=\"cell_headMaster\"/><Cell col=\"31\" colspan=\"2\" text=\"기타정보\" cssclass=\"cell_headMaster\"/><Cell row=\"1\" col=\"11\" text=\"불량명\"/><Cell row=\"1\" col=\"12\" text=\"불량수\"/><Cell row=\"1\" col=\"13\" text=\"불량명\"/><Cell row=\"1\" col=\"14\" text=\"불량수\"/><Cell row=\"1\" col=\"15\" text=\"불량명\"/><Cell row=\"1\" col=\"16\" text=\"불량수\"/><Cell row=\"1\" col=\"17\" text=\"불량명\"/><Cell row=\"1\" col=\"18\" text=\"불량수\"/><Cell row=\"1\" col=\"19\" text=\"불량명\"/><Cell row=\"1\" col=\"20\" text=\"불량수\"/><Cell row=\"1\" col=\"21\" text=\"불량명\"/><Cell row=\"1\" col=\"22\" text=\"불량수\"/><Cell row=\"1\" col=\"23\" text=\"불량명\"/><Cell row=\"1\" col=\"24\" text=\"불량수\"/><Cell row=\"1\" col=\"25\" text=\"불량명\"/><Cell row=\"1\" col=\"26\" text=\"불량수\"/><Cell row=\"1\" col=\"27\" text=\"불량명\"/><Cell row=\"1\" col=\"28\" text=\"불량수\"/><Cell row=\"1\" col=\"29\" text=\"불량명\"/><Cell row=\"1\" col=\"30\" text=\"불량수\"/><Cell row=\"1\" col=\"31\" text=\"불량명\"/><Cell row=\"1\" col=\"32\" text=\"불량수\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:양산구분\"/><Cell col=\"2\" text=\"bind:품목코드\"/><Cell col=\"3\" text=\"bind:Rev\"/><Cell col=\"4\" text=\"bind:품목명\"/><Cell col=\"5\" text=\"bind:입고LOT\"/><Cell col=\"6\" text=\"bind:불량LOT\"/><Cell col=\"7\" text=\"bind:불량율\"/><Cell col=\"8\" text=\"bind:RJ점유율\"/><Cell col=\"9\" text=\"bind:NG수량\"/><Cell col=\"10\" text=\"bind:OK수량\"/><Cell col=\"11\" text=\"bind:불량명1\"/><Cell col=\"12\" text=\"bind:불량수1\"/><Cell col=\"13\" text=\"bind:불량명2\"/><Cell col=\"14\" text=\"bind:불량수2\"/><Cell col=\"15\" text=\"bind:불량명3\"/><Cell col=\"16\" text=\"bind:불량수3\"/><Cell col=\"17\" text=\"bind:불량명4\"/><Cell col=\"18\" text=\"bind:불량수4\"/><Cell col=\"19\" text=\"bind:불량명5\"/><Cell col=\"20\" text=\"bind:불량수5\"/><Cell col=\"21\" text=\"bind:불량명6\"/><Cell col=\"22\" text=\"bind:불량수6\"/><Cell col=\"23\" text=\"bind:불량명7\"/><Cell col=\"24\" text=\"bind:불량수7\"/><Cell col=\"25\" text=\"bind:불량명8\"/><Cell col=\"26\" text=\"bind:불량수8\"/><Cell col=\"27\" text=\"bind:불량명9\"/><Cell col=\"28\" text=\"bind:불량수9\"/><Cell col=\"29\" text=\"bind:불량명10\"/><Cell col=\"30\" text=\"bind:불량수10\"/><Cell col=\"31\" text=\"bind:불량명11\"/><Cell col=\"32\" text=\"bind:불량수11\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.addChild(obj.name, obj);

            obj = new PieChart("PieChart00","67.22%",null,null,"280","0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_border("1px solid #e8e8e8");
            obj.set_binddataset("ds_chart3");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Simple Pie",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"subtext": "Pie Chart",
            		"subtextalign": "right",
            		"subtextcolor": "gray",
            		"subtextfont": "italic 8/normal \"Arial\"",
            		"visible": false
            	},
            	"legend": {
            		"id": "legend",
            		"align": "topcenter",
            		"padding": "10px 10px 10px 80px",
            		"itemtextfont": "normal 12/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"markertextgap": 3,
            		"itemautofit": "false",
            		"itemgap": "10",
            		"itemcolumncount": "1",
            		"left": ""
            	},
            	"board": {
            		"id": "board",
            		"visible": true
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#4b4b4b",
            		"linestyle": "0px none",
            		"textcolor": "#ffffff",
            		"textfont": "10pt/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"radius": "60",
            			"itemtextvisible": true,
            			"itemtextfont": "bold 10pt \"Arial\",\"맑은 고딕\"",
            			"valuecolumn": "bind:value",
            			"fillstyle": "#2ba3a8,#ea5d66",
            			"itemtexttype": "text",
            			"selectindent": 20,
            			"selectcolumn": "bind:select",
            			"selectopacity": "1.0",
            			"itemtextguidelinestyle": "1px solid darkgray",
            			"itemtextguideopacity": "1",
            			"itemtextguidesize": "20",
            			"opacity": "0.8",
            			"linestyle": "1px solid white",
            			"selectlinestyle": "1px solid white",
            			"highlightfillstyle": "yellow",
            			"highlightopacity": "0.5",
            			"highlightvisible": true,
            			"itemtext": "bind:value",
            			"itemtextmask": "##%",
            			"startangle": "270"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
            this.div_work.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00_00","33.61%",null,null,"280","PieChart00:10","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_chart2");
            obj.set_border("1px solid #e8e8e8");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 17/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px",
            		"subtext": "Multi Axis",
            		"subtextcolor": "#555555",
            		"subtextalign": "right",
            		"text": "Basic Chart",
            		"textcolor": "#222222",
            		"subtextfont": "normal 15/normal \"맑은 고딕\"",
            		"visible": "false"
            	},
            	"legend": {
            		"id": "legend",
            		"align": "topcenter",
            		"padding": "10px",
            		"itemtextfont": "normal 12/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"markertextgap": 3,
            		"itemautofit": "false",
            		"itemgap": "10",
            		"top": ""
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "normal 12/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": false
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "normal 700 12/normal \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "normal 10/normal \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"labelgap": "3",
            		"axislinestyle": "0px none",
            		"labeltextwidth": "120"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "입고LOT",
            			"barvisible": true,
            			"barsize": "30",
            			"itemtextvisible": "false",
            			"itemtextcolor": "#ffffff",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:입고LOT",
            			"valueaxis": "LOT",
            			"barfillstyle": "#0c84c1",
            			"stacktype": "normal"
            		},
            		{
            			"id": "series3",
            			"valuecolumn": "bind:불량LOT",
            			"valueaxis": "LOT",
            			"titletext": "불량 LOT",
            			"barsize": "30",
            			"stacktype": "normal",
            			"barfillstyle": "#ea5d66",
            			"itemtextcolor": "#ffffff"
            		},
            		{
            			"id": "series2",
            			"titletext": "불량율(%)",
            			"barvisible": false,
            			"itemtextvisible": "false",
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:불량율",
            			"valueaxis": "Percentage",
            			"pointvisible": true,
            			"pointsize": "12",
            			"pointshape": "circle",
            			"linestyle": "3px solid #000000",
            			"linevisible": true,
            			"pointfillstyle": "#000000",
            			"pointlinestyle": "3px solid #000000",
            			"barfillstyle": "#000000",
            			"lineopacity": "0"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "LOT",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 12/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 14/normal \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"labeltype": "text",
            			"titlegap": 10,
            			"gap": "0",
            			"tickmax": "7",
            			"tickmin": "0",
            			"axislinestyle": "1px solid #e8e8e8",
            			"visible": "true",
            			"labeltextwidth": "60"
            		},
            		{
            			"id": "Percentage",
            			"boardlinevisible": "false",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 12/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 12/normal \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #f1f1f1",
            			"axislinestyle": "1px solid #e8e8e8",
            			"gap": "0",
            			"titlegap": 10,
            			"tickmin": "0",
            			"tickmax": "110",
            			"labelgap": "5",
            			"labelmask": "###%",
            			"visible": "true",
            			"opposite": "true",
            			"labeltype": "normal",
            			"boardlinestyle": "1px solid #f1f1f1"
            		}
            	]
            });
            obj.set_categorycolumn("bind:품목명");
            this.div_work.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00","0",null,null,"280","BasicChart00_00:10","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_chart1");
            obj.set_border("1px solid #e8e8e8");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"textfont": "normal 17/normal \"맑은 고딕\"",
            		"padding": "0px 0px 5px",
            		"subtext": "Multi Axis",
            		"subtextcolor": "#555555",
            		"subtextalign": "right",
            		"text": "Basic Chart",
            		"textcolor": "#222222",
            		"subtextfont": "normal 15/normal \"맑은 고딕\"",
            		"visible": "false"
            	},
            	"legend": {
            		"id": "legend",
            		"align": "topcenter",
            		"padding": "10px",
            		"itemtextfont": "normal 12/normal \"맑은 고딕\"",
            		"itemtextcolor": "#555555",
            		"markertextgap": 3,
            		"itemautofit": "false",
            		"itemgap": "10",
            		"top": ""
            	},
            	"tooltip": {
            		"id": "tooltip",
            		"background": "#212121",
            		"textcolor": "#ffffff",
            		"textfont": "normal 12/normal \"맑은 고딕\"",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board",
            		"visible": false
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "normal 700 12/normal \"맑은 고딕\"",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "normal 11/normal \"맑은 고딕\"",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"labelmask": "####-##-##",
            		"labelgap": "3",
            		"axislinestyle": "0px none"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "입고LOT",
            			"barvisible": true,
            			"barsize": "60",
            			"itemtextvisible": "false",
            			"itemtextcolor": "#ffffff",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:입고LOT",
            			"valueaxis": "LOT",
            			"barfillstyle": "#0c84c1",
            			"stacktype": "normal"
            		},
            		{
            			"id": "series3",
            			"valuecolumn": "bind:불량LOT",
            			"valueaxis": "LOT",
            			"titletext": "불량 LOT",
            			"barsize": "60",
            			"stacktype": "normal",
            			"barfillstyle": "#ea5d66",
            			"itemtextcolor": "#ffffff"
            		},
            		{
            			"id": "series2",
            			"titletext": "불량율(%)",
            			"barvisible": false,
            			"itemtextvisible": "false",
            			"itemtextcolor": "#333333",
            			"itemtextfont": "bold 12pt '맑은 고딕'",
            			"valuecolumn": "bind:불량율",
            			"valueaxis": "Percentage",
            			"pointvisible": true,
            			"pointsize": "12",
            			"pointshape": "circle",
            			"linestyle": "3px dotted #000000",
            			"linevisible": true,
            			"pointfillstyle": "#000000",
            			"pointlinestyle": "3px solid #000000"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "LOT",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 12/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 14/normal \"맑은 고딕\"",
            			"ticklinestyle": "0px none",
            			"labeltype": "text",
            			"titlegap": 10,
            			"gap": "0",
            			"tickmax": "7",
            			"tickmin": "0",
            			"axislinestyle": "1px solid #e8e8e8",
            			"visible": "true"
            		},
            		{
            			"id": "Percentage",
            			"boardlinevisible": "false",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "normal 12/normal \"맑은 고딕\"",
            			"titletextcolor": "#333333",
            			"titletextfont": "normal 700 12/normal \"맑은 고딕\"",
            			"ticklinestyle": "1px solid #f1f1f1",
            			"axislinestyle": "1px solid #e8e8e8",
            			"gap": "0",
            			"titlegap": 10,
            			"tickmin": "0",
            			"tickmax": "110",
            			"labelgap": "5",
            			"labelmask": "###%",
            			"visible": "true",
            			"opposite": "true",
            			"labeltype": "normal",
            			"boardlinestyle": "1px solid #f1f1f1"
            		}
            	]
            });
            obj.set_categorycolumn("bind:년월일");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_00","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_00);
            obj.set_text("Tabpage1");
            this.tab_00.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("10");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_00","171","175","102","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_01","15","175","146","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"110","15","97","0",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("11");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","105","15","97",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("12");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("13");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"155","45","20","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("14");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","181","10","27",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("15");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label03","0","85","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("16");
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("17");
            obj.set_text("작업완료기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_01","108","85",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("4");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search01",null,"85","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_02","108","110",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("6");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search02",null,"110","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_00","10","60","94","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("2");
            obj.set_cssclass("cmb_SA_label");
            obj.set_innerdataset("ds_cmb01");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("금일");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_00","108","35",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_01","108","60",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_01","108","10","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("0");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label06","0","110","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("18");
            obj.set_text("고객");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label07","0","135","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("19");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_02","108","135","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("20");
            obj.set_text("cmb_02");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_new.addEventHandler("onclick",this.fn_new,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("template28.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
