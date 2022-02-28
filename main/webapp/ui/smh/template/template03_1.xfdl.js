(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template03_1");
            this.set_titletext("조회조건+그리드L+그리드R");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체조회</Col></Row><Row><Col id=\"data\">품목별 우선순위</Col></Row><Row><Col id=\"data\">잔여 납기일</Col></Row><Row><Col id=\"data\">잔여 공정</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"디스패치항목\" type=\"STRING\" size=\"256\"/><Column id=\"설명\" type=\"STRING\" size=\"256\"/><Column id=\"우선순위\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"chk\"/><Col id=\"No\">1</Col><Col id=\"디스패치항목\">품목별 우선순위</Col><Col id=\"설명\">품목우선순위</Col><Col id=\"우선순위\">1</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정승원</Col><Col id=\"생성일\">2019-08-20 13:48:07</Col><Col id=\"수정자\">노석안</Col><Col id=\"수정일\">2019-08-26 11:17:33</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">2</Col><Col id=\"디스패치항목\">잔여 납기일</Col><Col id=\"설명\">납기일 - 금일</Col><Col id=\"우선순위\">2</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정승원</Col><Col id=\"생성일\">2019-08-20 14:06:30</Col><Col id=\"수정자\">노석안</Col><Col id=\"수정일\">2019-09-23 08:26:01</Col></Row><Row><Col id=\"chk\"/><Col id=\"No\">3</Col><Col id=\"디스패치항목\">잔여공정</Col><Col id=\"설명\">전체 공정 - 진행공정</Col><Col id=\"우선순위\">3</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정승원</Col><Col id=\"생성일\">2019-08-20 14:08:09</Col><Col id=\"수정자\">노석안</Col><Col id=\"수정일\">2019-09-23 08:26:01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"우선순위\" type=\"STRING\" size=\"256\"/><Column id=\"From\" type=\"STRING\" size=\"256\"/><Column id=\"To\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"우선순위\">1</Col><Col id=\"From\">0</Col><Col id=\"To\">10</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정승원</Col><Col id=\"생성일\">2019-08-20 14:08:09</Col><Col id=\"수정자\">정승원</Col><Col id=\"수정일\">2019-08-21 16:23:30</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"우선순위\">2</Col><Col id=\"From\">11</Col><Col id=\"To\">20</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정승원</Col><Col id=\"생성일\">2019-08-20 14:08:09</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">3</Col><Col id=\"우선순위\">3</Col><Col id=\"From\">21</Col><Col id=\"To\">30</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정승원</Col><Col id=\"생성일\">2019-08-20 14:08:09</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"No\">4</Col><Col id=\"우선순위\">4</Col><Col id=\"From\">31</Col><Col id=\"To\">100</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정승원</Col><Col id=\"생성일\">2019-08-20 14:08:09</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row></Rows>");
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
            obj.set_text("디스패치 항목");
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

            obj = new Button("Button44_00_01","171","50","102","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("Button45_00","15","50","146","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("4");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("5");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"30","45","20","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("7");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","56","10","27",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","191","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","177","34",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_text("다스패칭 항목 리스트  <fc v=\"#f31d24\">3</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_00.addChild(obj.name, obj);

            obj = new Grid("grd_00_00","50.52%","34",null,null,"0","0",null,null,null,null,this.div_00.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_grd01");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"40\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"우선순위\"/><Cell col=\"3\" text=\"From\"/><Cell col=\"4\" text=\"To\"/><Cell col=\"5\" text=\"유효상태\"/><Cell col=\"6\" text=\"생성자\"/><Cell col=\"7\" text=\"생성일\"/><Cell col=\"8\" text=\"수정자\"/><Cell col=\"9\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:우선순위\"/><Cell col=\"3\" text=\"bind:From\"/><Cell col=\"4\" text=\"bind:To\"/><Cell col=\"5\" text=\"bind:유효상태\"/><Cell col=\"6\" text=\"bind:생성자\"/><Cell col=\"7\" text=\"bind:생성일\"/><Cell col=\"8\" text=\"bind:수정자\"/><Cell col=\"9\" text=\"bind:수정일\"/></Band></Format></Formats>");
            this.div_00.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","34",null,null,"grd_00_00:10","0",null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"40\"/><Column size=\"140\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"디스패치항목\"/><Cell col=\"3\" text=\"설명\"/><Cell col=\"4\" text=\"우선순위\"/><Cell col=\"5\" text=\"유효상태\"/><Cell col=\"6\" text=\"생성자\"/><Cell col=\"7\" text=\"생성일\"/><Cell col=\"8\" text=\"수정자\"/><Cell col=\"9\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:디스패치항목\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:설명\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:우선순위\"/><Cell col=\"5\" text=\"bind:유효상태\"/><Cell col=\"6\" text=\"bind:생성자\"/><Cell col=\"7\" text=\"bind:생성일\"/><Cell col=\"8\" text=\"bind:수정자\"/><Cell col=\"9\" text=\"bind:수정일\"/></Band></Format></Formats>");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static01_00","50.52%","0","144","34","331",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_text("우선순위 리스트  <fc v=\"#f31d24\">4</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btnExcelUp01",null,"6","29","24","0",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_grdUp00",null,"6","29","24","Static01_00:10",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_grdDown",null,"6","29","24","btn_grdUp00:0",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_grdCopy",null,"6","29","24","btn_grdDown:0",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("복사");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"6","29","24","btn_grdCopy:0",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_grdAdd",null,"6","29","24","btn_grdDel:0",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_00.addChild(obj.name, obj);

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
        this.loadIncludeScript("template03_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
