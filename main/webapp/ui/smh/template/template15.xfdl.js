(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template15");
            this.set_titletext("조회조건+ChartT+GridB");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_chart", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"계획\" type=\"STRING\" size=\"256\"/><Column id=\"실적\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"계획\">15000</Col><Col id=\"name\">2021-01-01</Col><Col id=\"실적\">4500</Col></Row><Row><Col id=\"계획\">15000</Col><Col id=\"name\">2021-01-02</Col><Col id=\"실적\">12000</Col></Row><Row><Col id=\"계획\">15000</Col><Col id=\"name\">2021-01-03</Col><Col id=\"실적\">16700</Col></Row><Row><Col id=\"계획\">15000</Col><Col id=\"name\">2021-01-04</Col><Col id=\"실적\">21000</Col></Row><Row><Col id=\"계획\">15000</Col><Col id=\"name\">2021-01-05</Col><Col id=\"실적\">8900</Col></Row><Row><Col id=\"계획\">15000</Col><Col id=\"name\">2021-01-06</Col><Col id=\"실적\">12134</Col></Row><Row><Col id=\"계획\">15000</Col><Col id=\"name\">2021-01-07</Col><Col id=\"실적\">12452</Col></Row><Row><Col id=\"계획\">15000</Col><Col id=\"name\">2021-01-08</Col><Col id=\"실적\">22000</Col></Row><Row><Col id=\"계획\">15000</Col><Col id=\"name\">2021-01-09</Col><Col id=\"실적\">24590</Col></Row><Row><Col id=\"계획\">15000</Col><Col id=\"name\">2021-01-10</Col><Col id=\"실적\">18000</Col></Row><Row><Col id=\"계획\">15000</Col><Col id=\"name\">2021-01-11</Col><Col id=\"실적\">15035</Col></Row><Row><Col id=\"계획\">15000</Col><Col id=\"name\">2021-01-12</Col><Col id=\"실적\">23532</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"고객명\" type=\"STRING\" size=\"256\"/><Column id=\"생산구분\" type=\"STRING\" size=\"256\"/><Column id=\"계획01\" type=\"STRING\" size=\"256\"/><Column id=\"실적01\" type=\"STRING\" size=\"256\"/><Column id=\"계획02\" type=\"STRING\" size=\"256\"/><Column id=\"실적02\" type=\"STRING\" size=\"256\"/><Column id=\"계획03\" type=\"STRING\" size=\"256\"/><Column id=\"실적03\" type=\"STRING\" size=\"256\"/><Column id=\"계획04\" type=\"STRING\" size=\"256\"/><Column id=\"실적04\" type=\"STRING\" size=\"256\"/><Column id=\"계획05\" type=\"STRING\" size=\"256\"/><Column id=\"실적05\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"품목코드\">1025149S1</Col><Col id=\"품목명\">AMB999RD01 DIGITIZER(2L)</Col><Col id=\"고객명\">삼성전자무선구미2공장</Col><Col id=\"생산구분\">양산</Col><Col id=\"계획01\"/><Col id=\"계획02\"/><Col id=\"실적01\"/><Col id=\"실적02\"/><Col id=\"계획03\"/><Col id=\"실적03\"/><Col id=\"계획04\">0</Col><Col id=\"실적04\">3,600</Col><Col id=\"계획05\"/><Col id=\"실적05\"/></Row><Row><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"고객명\">IFV</Col><Col id=\"생산구분\">양산</Col><Col id=\"계획01\"/><Col id=\"실적01\"/><Col id=\"계획02\"/><Col id=\"No\">2</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"실적02\"/><Col id=\"계획03\"/><Col id=\"실적03\"/><Col id=\"계획04\">0</Col><Col id=\"실적04\">6,792</Col><Col id=\"계획05\"/><Col id=\"실적05\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_00","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_00);
            obj.set_text("Tabpage1");
            this.tab_00.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("3");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label02","0","60","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("4");
            obj.set_text("품목그룹");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_00","108","60",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("0");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_00","171","125","102","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_01","15","125","146","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"70","15","97","0",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","80","15","97",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("6");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("7");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("8");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"105","45","20","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("9");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","131","10","27",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("10");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label03","0","85","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("11");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"60","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_01","108","85","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("13");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_00","108","10","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("14");
            obj.set_value("20210101083000000");
            obj.set_dateformat("yyyy-MM-dd HH:mm");
            obj.set_editformat("yyyy-MM-dd HH:mm");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_01","108","35","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("15");
            obj.set_dateformat("yyyy-MM-dd HH:mm");
            obj.set_editformat("yyyy-MM-dd HH:mm");
            obj.set_value("20210101083000000");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_00","10","35","94","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("16");
            obj.set_cssclass("cmb_SA_label");
            obj.set_innerdataset("ds_cmb01");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("금월");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("title","0","0","66","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("실적차트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_01","0","51.14%",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"200\" band=\"left\"/><Column size=\"140\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"품목코드\"/><Cell col=\"2\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"3\" rowspan=\"2\" text=\"고객명\"/><Cell col=\"4\" rowspan=\"2\" text=\"생산구분\"/><Cell col=\"5\" colspan=\"2\" text=\"2021-01-01\" cssclass=\"cell_headMaster\"/><Cell col=\"7\" colspan=\"2\" text=\"2021-01-02\" cssclass=\"cell_headMaster\"/><Cell col=\"9\" colspan=\"2\" text=\"2021-01-03\" cssclass=\"cell_headMaster\"/><Cell col=\"11\" colspan=\"2\" text=\"2021-01-04\" cssclass=\"cell_headMaster\"/><Cell col=\"13\" colspan=\"2\" text=\"2021-01-05\" cssclass=\"cell_headMaster\"/><Cell row=\"1\" col=\"5\" text=\"계획\"/><Cell row=\"1\" col=\"6\" text=\"실적\"/><Cell row=\"1\" col=\"7\" text=\"계획\"/><Cell row=\"1\" col=\"8\" text=\"실적\"/><Cell row=\"1\" col=\"9\" text=\"계획\"/><Cell row=\"1\" col=\"10\" text=\"실적\"/><Cell row=\"1\" col=\"11\" text=\"계획\"/><Cell row=\"1\" col=\"12\" text=\"실적\"/><Cell row=\"1\" col=\"13\" text=\"계획\"/><Cell row=\"1\" col=\"14\" text=\"실적\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:품목코드\"/><Cell col=\"2\" text=\"bind:품목명\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:고객명\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:생산구분\"/><Cell col=\"5\" text=\"bind:계획01\"/><Cell col=\"6\" text=\"bind:실적01\"/><Cell col=\"7\" text=\"bind:계획02\"/><Cell col=\"8\" text=\"bind:실적02\"/><Cell col=\"9\" text=\"bind:계획03\"/><Cell col=\"10\" text=\"bind:실적03\"/><Cell col=\"11\" text=\"bind:계획04\"/><Cell col=\"12\" text=\"bind:실적04\"/><Cell col=\"13\" text=\"bind:계획05\"/><Cell col=\"14\" text=\"bind:실적05\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("title3","0",null,"177","34",null,"grd_01:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("실적 점검 항목 리스트 <fc v=\"#f31d24\">2</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00_00","0","34",null,null,"0","title3:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_chart");
            obj.set_border("1px solid #e8e8e8");
            obj._setContents({
            	"title": {
            		"id": "title",
            		"text": "Bar Chart",
            		"textfont": "20pt/normal '맑은 고딕'",
            		"padding": "0px 0px 5px",
            		"visible": false
            	},
            	"legend": {
            		"id": "legend",
            		"linestyle": "0px none",
            		"padding": "3px 10px",
            		"itemtextfont": "12px '맑은 고딕'",
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
            		"linestyle": "0px solid #ffffff",
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
            		"textfont": "12px/normal '맑은 고딕'",
            		"padding": "5px"
            	},
            	"board": {
            		"id": "board"
            	},
            	"categoryaxis": {
            		"id": "categoryaxis",
            		"titletextcolor": "#333333",
            		"titletextfont": "bold 12px '맑은 고딕'",
            		"labeltextcolor": "#555555",
            		"labeltextfont": "12px '맑은 고딕'",
            		"axislinestyle": "0px none",
            		"ticklinestyle": "0px none",
            		"boardlinestyle": "1px solid #f1f1f1",
            		"visible": "true",
            		"labelgap": "3"
            	},
            	"seriesset": [
            		{
            			"id": "series0",
            			"titletext": "계획",
            			"barvisible": true,
            			"barsize": "40",
            			"itemtextvisible": true,
            			"itemtextcolor": "#555555",
            			"itemtextfont": "12px '맑은 고딕'",
            			"valuecolumn": "bind:계획",
            			"baritemtextposition": "end",
            			"baritemtextgap": "10",
            			"barfillstyle": "#ebebeb",
            			"barlinestyle": "0px none"
            		},
            		{
            			"id": "series1",
            			"titletext": "실적",
            			"barvisible": true,
            			"barsize": "40",
            			"itemtextvisible": true,
            			"itemtextcolor": "#333333",
            			"itemtextfont": "12px '맑은 고딕'",
            			"valuecolumn": "bind:실적",
            			"baritemtextposition": "end",
            			"baritemtextgap": "10",
            			"barfillstyle": "#62be1b",
            			"barlinestyle": "0px none"
            		}
            	],
            	"valueaxes": [
            		{
            			"id": "valueaxis0",
            			"boardlinevisible": true,
            			"boardlinestyle": "1px solid #f1f1f1",
            			"labeltextcolor": "#777777",
            			"labeltextfont": "12px/normal '맑은 고딕'",
            			"titletextcolor": "#333333",
            			"titletextfont": "bold 14px '맑은 고딕'",
            			"ticklinestyle": "0px none",
            			"axislinestyle": "1px solid #e8e8e8",
            			"titlegap": "10",
            			"tickmax": "28000"
            		}
            	]
            });
            obj.set_categorycolumn("bind:name");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
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

            obj = new Static("sta_title","30","16","58","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("화면명");
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
        this.loadIncludeScript("template15.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
