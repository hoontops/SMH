(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template22");
            this.set_titletext("조회조건+그리드T+B(그리드L+그리드R(checkbox))");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd0", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"청구여부\" type=\"STRING\" size=\"256\"/><Column id=\"청구번호\" type=\"STRING\" size=\"256\"/><Column id=\"양산구분\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"UOM\" type=\"STRING\" size=\"256\"/><Column id=\"Lot수\" type=\"STRING\" size=\"256\"/><Column id=\"투입PNL\" type=\"STRING\" size=\"256\"/><Column id=\"투입PCS\" type=\"STRING\" size=\"256\"/><Column id=\"투입MM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd1", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"자재ID\" type=\"STRING\" size=\"256\"/><Column id=\"자재명\" type=\"STRING\" size=\"256\"/><Column id=\"UOM\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd2", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"소요량\" type=\"STRING\" size=\"256\"/><Column id=\"수량PNL\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"자재품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"자재품목명\" type=\"STRING\" size=\"256\"/><Column id=\"현재고량\" type=\"STRING\" size=\"256\"/><Column id=\"청구수량\" type=\"STRING\" size=\"256\"/><Column id=\"투입일자\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("sta_title","30","16","117","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("자재 불출 요청");
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

            obj = new Tab("tab_00","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj.set_text("품목");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_00","108","60",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("0");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_00","171","200","102","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_01","15","200","146","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
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

            obj = new Static("guidetip04",null,"180","45","20","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("9");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","206","10","27",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("10");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label03","0","85","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("11");
            obj.set_text("양산구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"60","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label04","0","110","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("13");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_01","108","85","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("14");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_02","108","160","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("15");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label05","0","135","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("16");
            obj.set_text("작업장 ID");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label06","0","160","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("17");
            obj.set_text("청구여부");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_00","10","35","94","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("18");
            obj.set_cssclass("cmb_SA_label");
            obj.set_innerdataset("ds_cmb01");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("전월");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_00","108","10",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("19");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_value("20210101");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_01","108","35",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("20");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_value("20210101");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_01","108","110",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("21");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search00_00",null,"110","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_02","108","135",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("23");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search00_00_00",null,"135","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","211","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01","0","0","66","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("투입현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_basIdclass","0","34",null,"26.71%","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_grd0");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"청구여부\"/><Cell col=\"3\" text=\"청구번호\"/><Cell col=\"4\" text=\"양산구분\"/><Cell col=\"5\" text=\"품목코드\"/><Cell col=\"6\" text=\"품목명\"/><Cell col=\"7\" text=\"공정수순\"/><Cell col=\"8\" text=\"공정명\"/><Cell col=\"9\" text=\"작업장\"/><Cell col=\"10\" text=\"UOM\"/><Cell col=\"11\" text=\"Lot 수\"/><Cell col=\"12\" text=\"투입 PNL\"/><Cell col=\"13\" text=\"투입 PCS\"/><Cell col=\"14\" text=\"투입 MM\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:청구여부\"/><Cell col=\"3\" text=\"bind:청구번호\"/><Cell col=\"4\" text=\"bind:양산구분\"/><Cell col=\"5\" text=\"bind:품목코드\"/><Cell col=\"6\" text=\"bind:품목명\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:공정수순\"/><Cell col=\"8\" text=\"bind:공정명\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:작업장\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:UOM\"/><Cell col=\"11\" text=\"bind:Lot수\"/><Cell col=\"12\" text=\"bind:투입PNL\"/><Cell col=\"13\" text=\"bind:투입PCS\"/><Cell col=\"14\" text=\"bind:투입MM\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_00","0","grd_basIdclass:0","66","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("투입자재");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","sta_00:0","402",null,null,"0",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자재 ID\"/><Cell col=\"2\" text=\"자재명\"/><Cell col=\"3\" text=\"UOM\"/><Cell col=\"4\" text=\"수량\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:자재ID\"/><Cell col=\"2\" text=\"bind:자재명\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:UOM\"/><Cell col=\"4\" text=\"bind:수량\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_00_00","412","grd_basIdclass:0","69","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("투입 LOT");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_00_00","412","sta_00_00:0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목코드\"/><Cell col=\"2\" text=\"품목명\"/><Cell col=\"3\" text=\"Lot No.\"/><Cell col=\"4\" text=\"소요량\"/><Cell col=\"5\" text=\"수량(PNL)\"/><Cell col=\"6\" text=\"수량\"/><Cell col=\"7\" text=\"자재품목코드\"/><Cell col=\"8\" text=\"자재품목명\"/><Cell col=\"9\" text=\"현재고량\"/><Cell col=\"10\" text=\"청구수량\"/><Cell col=\"11\" text=\"투입일자\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:품목코드\"/><Cell col=\"2\" text=\"bind:품목명\"/><Cell col=\"3\" text=\"bind:LotNo\"/><Cell col=\"4\" text=\"bind:소요량\"/><Cell col=\"5\" text=\"bind:수량PNL\"/><Cell col=\"6\" text=\"bind:수량\"/><Cell col=\"7\" text=\"bind:자재품목코드\"/><Cell col=\"8\" text=\"bind:자재품목명\"/><Cell col=\"9\" text=\"bind:현재고량\"/><Cell col=\"10\" text=\"bind:청구수량\"/><Cell col=\"11\" text=\"bind:투입일자\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\" text=\"Lot 수\"/><Cell col=\"3\" text=\"0\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\" text=\"합계\"/><Cell col=\"10\" text=\"0\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlUp1",null,"grd_basIdclass:6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.addChild(obj.name, obj);

            obj = new CheckBox("chk_00","sta_00_00:30","grd_basIdclass:8","150","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_text("재고기준 청구");
            obj.set_fittocontents("width");
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
        this.loadIncludeScript("template22.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
