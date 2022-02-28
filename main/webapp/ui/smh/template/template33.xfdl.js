(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS03200M");
            this.set_titletext("조회조건+그리드L+(DetailT+그리드M+그리드B) R");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"SiteID\" type=\"STRING\" size=\"256\"/><Column id=\"공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"공정ID\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"WTime정의명\" type=\"STRING\" size=\"256\"/><Column id=\"시작공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"공정진행상태\" type=\"STRING\" size=\"256\"/><Column id=\"종료공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"TO공정명\" type=\"STRING\" size=\"256\"/><Column id=\"to공정진행상태\" type=\"STRING\" size=\"256\"/><Column id=\"WType\" type=\"STRING\" size=\"256\"/><Column id=\"WTIME설정기간Min\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
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

            obj = new Static("sta_title","30","16","182","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("Routing Window Time");
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

            obj = new Tab("tab_00","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_00);
            obj.set_text("Tabpage1");
            this.tab_00.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("7");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_00","108","10","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb00");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("8");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label02","0","60","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("9");
            obj.set_text("품목 버전");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_01","108","60",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("3");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("Button44_00_01","171","125","102","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("Button45_00","15","125","146","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label03","0","85","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("10");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"35","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_00","108","35",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_02","108","85",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("4");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","242","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","25.05%","162",null,"47.29%","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_grd01");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"W-Time 정의명\"/><Cell col=\"2\" text=\"시작 공정수순\"/><Cell col=\"3\" text=\"공정명\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"공정진행상태\"/><Cell col=\"5\" text=\"종료 공정수순\"/><Cell col=\"6\" text=\"TO 공정명\" cssclass=\"cell_point\"/><Cell col=\"7\" text=\"to공정진행상태\"/><Cell col=\"8\" text=\"W-Type\"/><Cell col=\"9\" text=\"W-TIME 설정기간(Min)\" cssclass=\"cell_point\"/><Cell col=\"10\" text=\"유효상태\"/><Cell col=\"11\" text=\"생성자\"/><Cell col=\"12\" text=\"생성일\"/><Cell col=\"13\" text=\"수정자\"/><Cell col=\"14\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:WTime정의명\"/><Cell col=\"2\" text=\"bind:시작공정수순\"/><Cell col=\"3\" text=\"bind:공정명\"/><Cell col=\"4\" text=\"bind:공정진행상태\"/><Cell col=\"5\" text=\"bind:종료공정수순\"/><Cell col=\"6\" text=\"bind:TO공정명\"/><Cell col=\"7\" text=\"bind:to공정진행상태\"/><Cell col=\"8\" text=\"bind:WType\"/><Cell col=\"9\" text=\"bind:WTIME설정기간Min\"/><Cell col=\"10\" text=\"bind:유효상태\"/><Cell col=\"11\" text=\"bind:생성자\"/><Cell col=\"12\" text=\"bind:생성일\"/><Cell col=\"13\" text=\"bind:수정자\"/><Cell col=\"14\" text=\"bind:수정일\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static01_01","25.05%","grd_00:0","95","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("15");
            obj.set_text("W-Time 실행");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static01","25.05%","128","95","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("W-Time 정의");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","95","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("W-Time 정의");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("Div01","25.05%","34",null,"94","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0","12.57%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("9");
            obj.set_text("고객사명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_01","0","31","12.57%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_02","25%","62","12.57%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("RTR/SHEET");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_03","50.00%","0","12.57%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("12");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_04","75.00%","0","12.57%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("Rev");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_05","50.00%","62","12.57%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("15");
            obj.set_text("PNL X");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_06","25%","62","12.57%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("RTR/SHEET");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_07","75%","31","12.57%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("16");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_08","75.00%","62","12.57%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("17");
            obj.set_text("PNL Y");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_00","sta_00:5","5",null,"20","sta_03:5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("0");
            obj.set_value("삼성SDI-천안");
            obj.set_cssclass("display");
            obj.set_text("삼성SDI-천안");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_01","sta_03:5","5",null,"20","sta_04:5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("1");
            obj.set_value("1010567C1");
            obj.set_cssclass("display");
            obj.set_text("1010567C1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_02","sta_04:5","5","79","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("2");
            obj.set_value("FA1");
            obj.set_cssclass("display");
            obj.set_text("FA1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_03","sta_01:5","36",null,"20","sta_07:5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("3");
            obj.set_value("AMSA05BV01 MFPC LEFT(1L)-CCT상품");
            obj.set_cssclass("display");
            obj.set_text("AMSA05BV01 MFPC LEFT(1L)-CCT상품");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_04","sta_07:5","36",null,"20","5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("4");
            obj.set_value("변경");
            obj.set_cssclass("display");
            obj.set_text("변경");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_05","sta_02:5","67",null,"20","sta_05:5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("6");
            obj.set_value("Roll");
            obj.set_cssclass("display");
            obj.set_text("Roll");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("msk_00","sta_05:5","67",null,"20","sta_08:5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("7");
            obj.set_value("500");
            obj.set_cssclass("display");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new MaskEdit("msk_00_00","sta_08:5","67",null,"20","5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("8");
            obj.set_value("350");
            obj.set_cssclass("display");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_09","0","62","12.57%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("18");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_06","sta_09:5","67",null,"20","sta_02:5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("5");
            obj.set_value("양산");
            obj.set_cssclass("display");
            obj.set_text("양산");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Grid("Grid01_00","0","34",null,null,"Div01:10","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Site ID\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"공정ID\"/><Cell col=\"4\" text=\"공정명\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:SiteID\"/><Cell col=\"2\" text=\"bind:공정수순\"/><Cell col=\"3\" text=\"bind:공정ID\"/><Cell col=\"4\" text=\"bind:공정명\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_addRow_ds_basIdclass",null,"134","26","24","111",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_basIdclass",null,"134","26","24","85",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_copyRow_ds_basIdclass",null,"134","27","24","58",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basIdclass",null,"134","29","24","29",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"134","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_addRow_ds_basIdclass00",null,"grd_00:6","26","24","111",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_basIdclass00",null,"grd_00:6","26","24","85",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_copyRow_ds_basIdclass00",null,"grd_00:6","27","24","58",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basIdclass00",null,"grd_00:6","29","24","29",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlUp00",null,"grd_00:6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_00_00","25.05%","grd_00:34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("16");
            obj.set_binddataset("ds_grd01");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"W-Time 정의명\"/><Cell col=\"2\" text=\"시작 공정수순\"/><Cell col=\"3\" text=\"공정명\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"공정진행상태\"/><Cell col=\"5\" text=\"종료 공정수순\"/><Cell col=\"6\" text=\"TO 공정명\" cssclass=\"cell_point\"/><Cell col=\"7\" text=\"to공정진행상태\"/><Cell col=\"8\" text=\"W-Type\"/><Cell col=\"9\" text=\"W-TIME 설정기간(Min)\" cssclass=\"cell_point\"/><Cell col=\"10\" text=\"유효상태\"/><Cell col=\"11\" text=\"생성자\"/><Cell col=\"12\" text=\"생성일\"/><Cell col=\"13\" text=\"수정자\"/><Cell col=\"14\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:WTime정의명\"/><Cell col=\"2\" text=\"bind:시작공정수순\"/><Cell col=\"3\" text=\"bind:공정명\"/><Cell col=\"4\" text=\"bind:공정진행상태\"/><Cell col=\"5\" text=\"bind:종료공정수순\"/><Cell col=\"6\" text=\"bind:TO공정명\"/><Cell col=\"7\" text=\"bind:to공정진행상태\"/><Cell col=\"8\" text=\"bind:WType\"/><Cell col=\"9\" text=\"bind:WTIME설정기간Min\"/><Cell col=\"10\" text=\"bind:유효상태\"/><Cell col=\"11\" text=\"bind:생성자\"/><Cell col=\"12\" text=\"bind:생성일\"/><Cell col=\"13\" text=\"bind:수정자\"/><Cell col=\"14\" text=\"bind:수정일\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);
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
        this.loadIncludeScript("template33.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
