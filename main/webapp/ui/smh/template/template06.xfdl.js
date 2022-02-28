(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template06");
            this.set_titletext("조회조건+그리드L+(그리드T+그리드B)R");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체조회</Col></Row><Row><Col id=\"data\">CCT</Col></Row><Row><Col id=\"data\">IFC</Col></Row><Row><Col id=\"data\">IFV</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체조회</Col></Row><Row><Col id=\"data\">유효</Col></Row><Row><Col id=\"data\">유효하지 않음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb02", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체조회</Col></Row><Row><Col id=\"data\">고객ID</Col></Row><Row><Col id=\"data\">MES고객명</Col></Row><Row><Col id=\"data\">Site고객명</Col></Row><Row><Col id=\"data\">설명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"SiteID\" type=\"STRING\" size=\"256\"/><Column id=\"공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"공정ID\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">1</Col><Col id=\"공정수순\">20</Col><Col id=\"공정ID\">1010401</Col><Col id=\"공정명\">외층 BASE 재단</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">2</Col><Col id=\"공정수순\">30</Col><Col id=\"공정ID\">3510404</Col><Col id=\"공정명\">외층 S면 C/L가접</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">3</Col><Col id=\"공정수순\">40</Col><Col id=\"공정ID\">4018406</Col><Col id=\"공정명\">외층 Dual Access S면 C/L 적층</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">4</Col><Col id=\"공정수순\">60</Col><Col id=\"공정ID\">2024401</Col><Col id=\"공정명\">외층 LASER CUTTING</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">5</Col><Col id=\"공정수순\">80</Col><Col id=\"공정ID\">4546401</Col><Col id=\"공정명\">외층 노광전 정면</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">6</Col><Col id=\"공정수순\">90</Col><Col id=\"공정ID\">1512401</Col><Col id=\"공정명\">외층 노광</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">7</Col><Col id=\"공정수순\">100</Col><Col id=\"공정ID\">1526401</Col><Col id=\"공정명\">외층 현상/부식</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">8</Col><Col id=\"공정수순\">110</Col><Col id=\"공정ID\">7012401</Col><Col id=\"공정명\">외층 AOI검사</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">9</Col><Col id=\"공정수순\">120</Col><Col id=\"공정ID\">4546410</Col><Col id=\"공정명\">외층 C/L가접전 정면</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">10</Col><Col id=\"공정수순\">130</Col><Col id=\"공정ID\">3510403</Col><Col id=\"공정명\">외층 C면 C/L가접</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">11</Col><Col id=\"공정수순\">140</Col><Col id=\"공정ID\">4018405</Col><Col id=\"공정명\">외층 Dual Access C면 C/L 적층</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">12</Col><Col id=\"공정수순\">150</Col><Col id=\"공정ID\">6548407</Col><Col id=\"공정명\">외층 C/L적층후 BAKING</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">13</Col><Col id=\"공정수순\">155</Col><Col id=\"공정ID\">4544406</Col><Col id=\"공정명\">외층 M/K 인쇄전 정면</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">14</Col><Col id=\"공정수순\">160</Col><Col id=\"공정ID\">5052404</Col><Col id=\"공정명\">외층 BLACK 인쇄-1</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">15</Col><Col id=\"공정수순\">165</Col><Col id=\"공정ID\">5052405</Col><Col id=\"공정명\">외층 BLACK 인쇄-2</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">16</Col><Col id=\"공정수순\">170</Col><Col id=\"공정ID\">3014401</Col><Col id=\"공정명\">외층 GUIDE 가공</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">17</Col><Col id=\"공정수순\">180</Col><Col id=\"공정ID\">5526401</Col><Col id=\"공정명\">외층 무전해 TIN도금</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"No\">18</Col><Col id=\"공정수순\">200</Col><Col id=\"공정ID\">8014402</Col><Col id=\"공정명\">포장(IFV 수출)</Col></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"공정수순\">SUB72</Col><Col id=\"공정ID\">(S)노광</Col><Col id=\"공정명\"/></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"공정수순\">REI02</Col><Col id=\"공정ID\">안산 재검</Col><Col id=\"공정명\"/></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"공정수순\">SUB57</Col><Col id=\"공정ID\">1-자동타발</Col><Col id=\"공정명\"/></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"공정수순\">HDI01</Col><Col id=\"공정ID\">영업홀딩제품</Col><Col id=\"공정명\"/></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"공정수순\">OSP30</Col><Col id=\"공정ID\">삼오(외)</Col><Col id=\"공정명\"/></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"공정수순\">OSP05</Col><Col id=\"공정ID\">IFC_SMT</Col><Col id=\"공정명\"/></Row><Row><Col id=\"SiteID\">IFC</Col><Col id=\"공정수순\">OSP07</Col><Col id=\"공정ID\">삼오</Col><Col id=\"공정명\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"고객사명\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"Rev\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"작업구분\" type=\"STRING\" size=\"256\"/><Column id=\"생산구분\" type=\"STRING\" size=\"256\"/><Column id=\"RTRSHEET\" type=\"STRING\" size=\"256\"/><Column id=\"PNLX\" type=\"STRING\" size=\"256\"/><Column id=\"PNLY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"고객사명\">유라코퍼레이션</Col><Col id=\"품목코드\">1010759B1</Col><Col id=\"Rev\">FA1</Col><Col id=\"품목명\">PORCHE NOR(1L)-IFV재구매-SPL</Col><Col id=\"작업구분\">변경</Col><Col id=\"생산구분\">샘플</Col><Col id=\"PNLX\">500</Col><Col id=\"PNLY\">535</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd02", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"WTime정의명\" type=\"STRING\" size=\"256\"/><Column id=\"시작공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"공정진행상태\" type=\"STRING\" size=\"256\"/><Column id=\"종료공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"TO공정명\" type=\"STRING\" size=\"256\"/><Column id=\"to공정진행상태\" type=\"STRING\" size=\"256\"/><Column id=\"WType\" type=\"STRING\" size=\"256\"/><Column id=\"WTime설정시간\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd03", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"WActionID\" type=\"STRING\" size=\"256\"/><Column id=\"WAction명\" type=\"STRING\" size=\"256\"/><Column id=\"Sequence\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_taborder("4");
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
            obj.set_taborder("5");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label02","0","60","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("6");
            obj.set_text("품목 버전");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_00","108","35",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_00","171","125","102","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_01","15","125","146","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"70","15","97","0",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","80","15","97",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip03",null,"30","45","5","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("10");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"105","45","20","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("11");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","131","10","27",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("12");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label03","0","85","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("13");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_01","108","60",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("14");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_02","108","85",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("15");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"35","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_01","31.32%","34",null,"63","0",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("6");
            obj.set_cssclass("grd_detail");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_fillareatype("datarow");
            obj.set_scrolltype("none");
            obj.set_scrollbartype("none");
            obj.set_binddataset("ds_grd01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"31\"/><Row size=\"31\"/></Rows><Band id=\"body\"><Cell cssclass=\"cell_head\" text=\"고객사명\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\"/><Cell col=\"1\" text=\"bind:고객사명\" textAlign=\"left\" wordWrap=\"english\"/><Cell col=\"2\" cssclass=\"cell_head\" text=\"품목코드\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\"/><Cell col=\"3\" text=\"bind:품목코드\" textAlign=\"left\" wordWrap=\"english\"/><Cell col=\"4\" cssclass=\"cell_head\" text=\"Rev\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\"/><Cell col=\"5\" text=\"bind:Rev\" textAlign=\"left\" wordWrap=\"english\"/><Cell col=\"6\" cssclass=\"cell_head\" text=\"품목명\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\"/><Cell col=\"7\" colspan=\"3\" text=\"bind:품목명\" textAlign=\"left\" wordWrap=\"english\" cssclass=\"cell_end\"/><Cell row=\"1\" cssclass=\"cell_head\" text=\"작업구분\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\"/><Cell row=\"1\" col=\"1\" text=\"bind:작업구분\" textAlign=\"left\" wordWrap=\"english\"/><Cell row=\"1\" col=\"2\" cssclass=\"cell_head\" text=\"생산구분\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\"/><Cell row=\"1\" col=\"3\" text=\"bind:생산구분\" textAlign=\"left\" wordWrap=\"english\"/><Cell row=\"1\" col=\"4\" cssclass=\"cell_head,cell_point\" text=\"RTR/SHEET\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\"/><Cell row=\"1\" col=\"5\" text=\"bind:RTRSHEET\" textAlign=\"left\" wordWrap=\"english\"/><Cell row=\"1\" col=\"6\" cssclass=\"cell_head\" text=\"PNL X\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\"/><Cell row=\"1\" col=\"7\" text=\"bind:PNLX\" textAlign=\"left\" wordWrap=\"english\"/><Cell row=\"1\" col=\"8\" cssclass=\"cell_head\" text=\"PNL Y\" textAlign=\"left\" padding=\"0px 0px 0px 5px\" wordWrap=\"english\"/><Cell row=\"1\" col=\"9\" text=\"bind:PNLY\" textAlign=\"left\" wordWrap=\"english\" cssclass=\"cell_end\"/></Band></Format></Formats>");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("title","0","0","66","34",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_text("공정순서");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_00.addChild(obj.name, obj);

            obj = new Grid("grd_02_00","31.32%","131",null,null,"0","248",null,null,null,null,this.div_00.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_grd02");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"W-Time 정의명\"/><Cell col=\"2\" text=\"시작 공정수순\"/><Cell col=\"3\" text=\"공정명\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"공정진행상태\"/><Cell col=\"5\" text=\"종료 공정수순\"/><Cell col=\"6\" text=\"TO 공정명\" cssclass=\"cell_point\"/><Cell col=\"7\" text=\"to공정진행상태\"/><Cell col=\"8\" text=\"W-Type\"/><Cell col=\"9\" text=\"W-Time 설정시간(Min)\" cssclass=\"cell_point\"/><Cell col=\"10\" text=\"유효상태\"/><Cell col=\"11\" text=\"생성자\"/><Cell col=\"12\" text=\"생성일\"/><Cell col=\"13\" text=\"수정자\"/><Cell col=\"14\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:WTime정의명\"/><Cell col=\"2\" text=\"bind:시작공정수순\"/><Cell col=\"3\" text=\"bind:공정명\"/><Cell col=\"4\" text=\"bind:공정진행상태\"/><Cell col=\"5\" text=\"bind:종료공정수순\"/><Cell col=\"6\" text=\"bind:TO공정명\"/><Cell col=\"7\" text=\"bind:to공정진행상태\"/><Cell col=\"8\" text=\"bind:WType\"/><Cell col=\"9\" text=\"bind:WTime설정시간\"/><Cell col=\"10\" text=\"bind:유효상태\"/><Cell col=\"11\" text=\"bind:생성자\"/><Cell col=\"12\" text=\"bind:생성일\"/><Cell col=\"13\" text=\"bind:수정자\"/><Cell col=\"14\" text=\"bind:수정일\"/></Band></Format></Formats>");
            this.div_00.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","34",null,null,"grd_02_00:10","0",null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"190\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"SiteID\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"공정ID\"/><Cell col=\"4\" text=\"공정명\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:SiteID\"/><Cell col=\"2\" text=\"bind:공정수순\"/><Cell col=\"3\" text=\"bind:공정ID\"/><Cell col=\"4\" text=\"bind:공정명\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btnExcelUp",null,"6","29","24","grd_01:10",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("title2","31.32%","97","95","34",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            obj.set_text("W-Time 정의");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btnExcelUp00",null,"103","29","24","0",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_00.addChild(obj.name, obj);

            obj = new Grid("grd_02","31.32%",null,null,"214","0","0",null,null,null,null,this.div_00.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_grd03");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"140\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"W-Action ID\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"W-Action 명\"/><Cell col=\"3\" text=\"Sequence\" cssclass=\"cell_point\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:WActionID\"/><Cell col=\"2\" text=\"bind:WAction명\"/><Cell col=\"3\" text=\"bind:Sequence\"/></Band></Format></Formats>");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("title3","31.32%",null,"95","34","563","214",null,null,null,null,this.div_00.form);
            obj.set_taborder("8");
            obj.set_text("W-Time 실행");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"103","29","24","29",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btnCopy",null,"103","27","24","58",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("복사");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"103","26","24","85",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"103","26","24","111",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btnExcelUp00_00",null,null,"29","24","0","218",null,null,null,null,this.div_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btnExcelDown00",null,null,"29","24","29","218",null,null,null,null,this.div_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btnCopy00",null,null,"27","24","58","218",null,null,null,null,this.div_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("복사");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btnDel00",null,null,"26","24","85","218",null,null,null,null,this.div_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btnAdd00",null,null,"26","24","111","218",null,null,null,null,this.div_00.form);
            obj.set_taborder("17");
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
        this.loadIncludeScript("template06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
