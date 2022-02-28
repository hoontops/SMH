(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template17");
            this.set_titletext("조회조건+treeL+(DetailT+GridM+TabB)R");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_tree00", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">0</Col><Col id=\"name\">Interflex Korea Co.Ltd</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"name\">계측기</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"name\">설비</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"name\">L/A</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"name\">L/A</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"name\">PSR</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"name\">노광기</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"name\">인쇄기</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"name\">SMT</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"name\">Coating</Col></Row><Row><Col id=\"name\">Conveyor</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">Mounter</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">건조</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"name\">건조</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">검사</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"name\">표면검사</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">홀검사</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">회로검사</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">기타</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"name\">Laser</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">검사자</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">보관소</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">비트검사</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">작업자</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">크린머신</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">테이핑머신</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">노광</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"name\">노광기</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">동도금</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"name\">블랙홀</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">전기동</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">화학동</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">부착</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"name\">가접</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">부착</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">인쇄</Col><Col id=\"level\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd0", this);
            obj._setContents("<ColumnInfo><Column id=\"SiteID\" type=\"STRING\" size=\"256\"/><Column id=\"공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"공정ID\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"자원등록여부\" type=\"STRING\" size=\"256\"/><Column id=\"차공구등록여부\" type=\"STRING\" size=\"256\"/><Column id=\"설명\" type=\"STRING\" size=\"256\"/><Column id=\"자재\" type=\"STRING\" size=\"256\"/><Column id=\"공정SPEC\" type=\"STRING\" size=\"256\"/><Column id=\"차공구\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SiteID\">IFC</Col><Col id=\"공정수순\">10</Col><Col id=\"공정ID\">4546101</Col><Col id=\"공정명\">RTR  SHRHKDWLS WJDAUS</Col><Col id=\"자원등록여부\">Y</Col><Col id=\"차공구등록여부\">Y</Col><Col id=\"생성자\">홍길동</Col><Col id=\"생성일\">20200908140230</Col><Col id=\"수정일\">20200908140230</Col><Col id=\"수정자\">아모게</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd1", this);
            obj._setContents("<ColumnInfo><Column id=\"자원ID\" type=\"STRING\" size=\"256\"/><Column id=\"자원명\" type=\"STRING\" size=\"256\"/><Column id=\"주작업여부\" type=\"STRING\" size=\"256\"/><Column id=\"설비그룹ID\" type=\"STRING\" size=\"256\"/><Column id=\"설비그룹명\" type=\"STRING\" size=\"256\"/><Column id=\"작업장ID\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"생성자명\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자명\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"자원ID\">F1B2000A12</Col><Col id=\"자원명\">RTRUV_B2F-RTR UVLASER</Col><Col id=\"주작업여부\">Y</Col><Col id=\"설비그룹ID\">A12</Col><Col id=\"설비그룹명\">RTRUVLASER</Col><Col id=\"작업장ID\">F1B2001</Col><Col id=\"수정일\">20200729193236</Col><Col id=\"작업장\">RTR UV_B2F</Col><Col id=\"생성일\">20200729193236</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd2", this);
            obj._setContents("<ColumnInfo><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"품목Rev\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"치공구명\" type=\"STRING\" size=\"256\"/><Column id=\"치공구코드\" type=\"STRING\" size=\"256\"/><Column id=\"설명\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"품목코드\">RTRUV_B2F-RTR UVLASER</Col><Col id=\"품목Rev\">Y</Col><Col id=\"품목명\">A12</Col><Col id=\"치공구명\">RTRUVLASER</Col><Col id=\"치공구코드\">F1B2001</Col><Col id=\"수정일\">20200729193236</Col><Col id=\"설명\">RTR UV_B2F</Col><Col id=\"생성일\">20200729193236</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd3", this);
            obj._setContents("<ColumnInfo><Column id=\"항목\" type=\"STRING\" size=\"256\"/><Column id=\"항목값\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"항목\"/><Col id=\"항목값\"/><Col id=\"수정일\">20200729193236</Col><Col id=\"생성일\">20200729193236</Col></Row></Rows>");
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

            obj = new Static("sta_title","30","16","266","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("Routing 자원,치공구,외주단가 등록");
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

            obj = new Static("Static01","240","128","78","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("공정  <fc v=\"#f31d24\">67</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_00","240","71.86%",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_00);
            obj.set_text("자원");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Button("btn_addRow_ds_basIdclass",null,"6","26","24","111",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_basIdclass",null,"6","26","24","85",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_copyRow_ds_basIdclass",null,"6","27","24","58",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basIdclass",null,"6","29","24","29",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","38","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("자원");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_grd1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자원ID\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"자원명\"/><Cell col=\"3\" text=\"주작업여부\"/><Cell col=\"4\" text=\"설비그룹ID\"/><Cell col=\"5\" text=\"설비그룹명\"/><Cell col=\"6\" text=\"작업장ID\"/><Cell col=\"7\" text=\"작업장\"/><Cell col=\"8\" text=\"생성자명\"/><Cell col=\"9\" text=\"생성일\"/><Cell col=\"10\" text=\"수정자명\"/><Cell col=\"11\" text=\"수정일\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:자원ID\"/><Cell col=\"2\" text=\"bind:자원명\"/><Cell col=\"3\" text=\"bind:주작업여부\"/><Cell col=\"4\" text=\"bind:설비그룹ID\"/><Cell col=\"5\" text=\"bind:설비그룹명\"/><Cell col=\"6\" text=\"bind:작업장ID\"/><Cell col=\"7\" text=\"bind:작업장\"/><Cell col=\"8\" text=\"bind:생성자명\"/><Cell col=\"9\" text=\"bind:생성일\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"10\" text=\"bind:수정자명\"/><Cell col=\"11\" text=\"bind:수정일\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_00);
            obj.set_text("치공구");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Button("btn_addRow_ds_basIdclass",null,"6","26","24","84",null,null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            obj.set_text("");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_basIdclass",null,"6","26","24","58",null,null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basIdclass",null,"6","29","24","29",null,null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","52","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("치공구");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_grd2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목코드\"/><Cell col=\"2\" text=\"품목 Rev.\"/><Cell col=\"3\" text=\"품목명\"/><Cell col=\"4\" text=\"치공구명\"/><Cell col=\"5\" text=\"치공구 코드\"/><Cell col=\"6\" text=\"설명\"/><Cell col=\"7\" text=\"생성자\"/><Cell col=\"8\" text=\"생성일\"/><Cell col=\"9\" text=\"수정자\"/><Cell col=\"10\" text=\"수정일\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:품목코드\"/><Cell col=\"2\" text=\"bind:품목Rev\"/><Cell col=\"3\" text=\"bind:품목명\"/><Cell col=\"4\" text=\"bind:치공구명\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:치공구코드\"/><Cell col=\"6\" text=\"bind:설명\"/><Cell col=\"7\" text=\"bind:생성자\"/><Cell col=\"8\" text=\"bind:생성일\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"9\" text=\"bind:수정자\"/><Cell col=\"10\" text=\"bind:수정일\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab_00);
            obj.set_text("외주단가");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","66","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("외주단가");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_addRow_ds_basIdclass",null,"6","26","24","84",null,null,null,null,null,this.div_work.form.tab_00.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            obj.set_text("");
            this.div_work.form.tab_00.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_basIdclass",null,"6","26","24","58",null,null,null,null,null,this.div_work.form.tab_00.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab_00.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basIdclass",null,"6","29","24","29",null,null,null,null,null,this.div_work.form.tab_00.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.form.tab_00.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage3.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab_00.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage3.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_grd3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"항목\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"항목값\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"생성자\"/><Cell col=\"4\" text=\"생성일\"/><Cell col=\"5\" text=\"수정자\"/><Cell col=\"6\" text=\"수정일\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:항목\"/><Cell col=\"2\" text=\"bind:항목값\"/><Cell col=\"3\" text=\"bind:생성자\"/><Cell col=\"4\" text=\"bind:생성일\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"5\" text=\"bind:수정자\"/><Cell col=\"6\" text=\"bind:수정일\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_00","240","162",null,null,"0","tab_00:10",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_grd0");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Site ID\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"공정ID\"/><Cell col=\"4\" text=\"공정명\"/><Cell col=\"5\" text=\"자원등록여부\"/><Cell col=\"6\" text=\"차공구등록여부\"/><Cell col=\"7\" text=\"설명\"/><Cell col=\"8\" text=\"자재\"/><Cell col=\"9\" text=\"공정SPEC\"/><Cell col=\"10\" text=\"차공구\"/><Cell col=\"11\" text=\"생성자\"/><Cell col=\"12\" text=\"생성일\"/><Cell col=\"13\" text=\"수정자\"/><Cell col=\"14\" text=\"수정일\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:SiteID\"/><Cell col=\"2\" text=\"bind:공정수순\"/><Cell col=\"3\" text=\"bind:공정ID\"/><Cell col=\"4\" text=\"bind:공정명\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:자원등록여부\"/><Cell col=\"6\" text=\"bind:차공구등록여부\"/><Cell col=\"7\" text=\"bind:설명\"/><Cell col=\"8\" text=\"bind:자재\"/><Cell col=\"9\" text=\"bind:공정SPEC\"/><Cell col=\"10\" text=\"bind:차공구\"/><Cell col=\"11\" text=\"bind:생성자\"/><Cell col=\"12\" text=\"bind:생성일\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"13\" text=\"bind:수정자\"/><Cell col=\"14\" text=\"bind:수정일\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","230","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_text("BOM 구조");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_00","0","34","230","42",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_search");
            this.div_work.addChild(obj.name, obj);

            obj = new Edit("edt_03","15","10",null,"20","37",null,null,null,null,null,this.div_work.form.div_00.form);
            obj.set_taborder("0");
            this.div_work.form.div_00.addChild(obj.name, obj);

            obj = new Button("btn_search03",null,"10","22","20","15",null,null,null,null,null,this.div_work.form.div_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.div_00.addChild(obj.name, obj);

            obj = new Grid("Grid01_00","0","75","230",null,null,"0",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_cssclass("grd_tree");
            obj.set_binddataset("ds_tree00");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:name\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:level\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basIdclass",null,"134","29","24","29",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"134","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("Div01","240","34",null,"94","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
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

            obj = new Static("sta_03","25%","0","12.57%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("12");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_04","50%","0","12.57%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("내부 Rev");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_05","50.00%","62","12.57%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("15");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_06","25%","62","12.57%","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("PNL X");
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
            obj.set_value("IFV");
            obj.set_cssclass("display");
            obj.set_text("IFV");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_01","sta_03:5","5",null,"20","sta_04:5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("1");
            obj.set_value("1025362J1");
            obj.set_cssclass("display");
            obj.set_text("1025362J1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_02","sta_04:5","5",null,"20","sta_07:5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("2");
            obj.set_value("FA1");
            obj.set_cssclass("display");
            obj.set_text("FA1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_03","sta_01:5","36",null,"20","sta_07:5",null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("3");
            obj.set_value("AMB687VX01DIGITIZER(2L)-IFV직납");
            obj.set_cssclass("display");
            obj.set_text("AMB687VX01DIGITIZER(2L)-IFV직납");
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
        this.loadIncludeScript("template17.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
