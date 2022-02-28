(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template10");
            this.set_titletext("조회조건+treeL+그리드R");
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
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"회사ID\" type=\"STRING\" size=\"256\"/><Column id=\"설비그룹ID\" type=\"STRING\" size=\"256\"/><Column id=\"설비그룹명K\" type=\"STRING\" size=\"256\"/><Column id=\"설비그룹명E\" type=\"STRING\" size=\"256\"/><Column id=\"설비그룹명C\" type=\"STRING\" size=\"256\"/><Column id=\"설비그룹명V\" type=\"STRING\" size=\"256\"/><Column id=\"상위설비그룹ID\" type=\"STRING\" size=\"256\"/><Column id=\"설비그룹타입\" type=\"STRING\" size=\"256\"/><Column id=\"HIERARCHY\" type=\"STRING\" size=\"256\"/><Column id=\"설명\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"회사ID\">INTERFLEX</Col><Col id=\"No\">1</Col><Col id=\"설비그룹ID\">H11</Col><Col id=\"설비그룹명K\">HAKUTO L/A</Col><Col id=\"설비그룹명E\">HAKUTO LAMINATION MACHINE</Col><Col id=\"설비그룹명C\">HAKUTO LAMINATION MACHINE</Col><Col id=\"설비그룹명V\">HAKUTO LAMINATION MACHINE</Col><Col id=\"상위설비그룹ID\">H1</Col><Col id=\"설비그룹타입\">설비</Col><Col id=\"HIERARCHY\">설비그룹</Col><Col id=\"설명\"/><Col id=\"chk\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"생성일\">2020-03-18 13:52:26</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"회사ID\">INTERFLEX</Col><Col id=\"No\">2</Col><Col id=\"설비그룹ID\">H12</Col><Col id=\"설비그룹명K\">진공 L/A</Col><Col id=\"설비그룹명E\">VACUUM LAMINATION MACHINE</Col><Col id=\"설비그룹명C\">VACUUM LAMINATION MACHINE</Col><Col id=\"설비그룹명V\">VACUUM LAMINATION MACHINE</Col><Col id=\"상위설비그룹ID\">H1</Col><Col id=\"설비그룹타입\">설비</Col><Col id=\"HIERARCHY\">설비그룹</Col><Col id=\"설명\"/><Col id=\"chk\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"생성일\">2020-03-18 13:52:26</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"회사ID\">INTERFLEX</Col><Col id=\"No\">3</Col><Col id=\"설비그룹ID\">H13</Col><Col id=\"설비그룹명K\">RTR L/A</Col><Col id=\"설비그룹명E\">RTR LAMINATION MACHINE</Col><Col id=\"설비그룹명C\">RTR LAMINATION MACHINE</Col><Col id=\"설비그룹명V\">RTR LAMINATION MACHINE</Col><Col id=\"상위설비그룹ID\">H1</Col><Col id=\"설비그룹타입\">설비</Col><Col id=\"HIERARCHY\">설비그룹</Col><Col id=\"설명\"/><Col id=\"chk\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"생성일\">2020-03-18 13:52:26</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"회사ID\">INTERFLEX</Col><Col id=\"No\">4</Col><Col id=\"설비그룹ID\">H14</Col><Col id=\"설비그룹명K\">RTR 진공 L/A</Col><Col id=\"설비그룹명E\">RTR VACUUM LAMINATION MACHINE</Col><Col id=\"설비그룹명C\">RTR VACUUM LAMINATION MACHINE</Col><Col id=\"설비그룹명V\">RTR VACUUM LAMINATION MACHINE</Col><Col id=\"상위설비그룹ID\">H1</Col><Col id=\"설비그룹타입\">설비</Col><Col id=\"HIERARCHY\">설비그룹</Col><Col id=\"설명\"/><Col id=\"chk\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"생성일\">2020-03-18 13:52:26</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"회사ID\">INTERFLEX</Col><Col id=\"No\">5</Col><Col id=\"설비그룹ID\">H15</Col><Col id=\"설비그룹명K\">WET L/A</Col><Col id=\"설비그룹명E\">WET LAMINATION MACHINE</Col><Col id=\"설비그룹명C\">WET LAMINATION MACHINE</Col><Col id=\"설비그룹명V\">WET LAMINATION MACHINE</Col><Col id=\"상위설비그룹ID\">H1</Col><Col id=\"설비그룹타입\">설비</Col><Col id=\"HIERARCHY\">설비그룹</Col><Col id=\"설명\"/><Col id=\"chk\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"생성일\">2020-03-18 13:52:26</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"회사ID\">INTERFLEX</Col><Col id=\"No\">6</Col><Col id=\"설비그룹ID\">H16</Col><Col id=\"설비그룹명K\">OPTIRAY L/A</Col><Col id=\"설비그룹명E\">OPTIRAY SHEET LAMINATION MACHINE</Col><Col id=\"설비그룹명C\">OPTIRAY SHEET LAMINATION MACHINE</Col><Col id=\"설비그룹명V\">OPTIRAY SHEET LAMINATION MACHINE</Col><Col id=\"상위설비그룹ID\">H1</Col><Col id=\"설비그룹타입\">설비</Col><Col id=\"HIERARCHY\">설비그룹</Col><Col id=\"설명\"/><Col id=\"chk\"/><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">정원식</Col><Col id=\"생성일\">2020-03-18 13:52:26</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tree00", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">0</Col><Col id=\"name\">Interflex Korea Co.Ltd</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"name\">계측기</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"name\">설비</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"name\">L/A</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"name\">L/A</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"name\">PSR</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"name\">노광기</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"name\">인쇄기</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"name\">SMT</Col></Row><Row><Col id=\"level\">3</Col><Col id=\"name\">Coating</Col></Row><Row><Col id=\"name\">Conveyor</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">Mounter</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">건조</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"name\">건조</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">검사</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"name\">표면검사</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">홀검사</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">회로검사</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">기타</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"name\">Laser</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">검사자</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">보관소</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">비트검사</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">작업자</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">크린머신</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">테이핑머신</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">노광</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"name\">노광기</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">동도금</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"name\">블랙홀</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">전기동</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">화학동</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">부착</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"name\">가접</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">부착</Col><Col id=\"level\">3</Col></Row><Row><Col id=\"name\">인쇄</Col><Col id=\"level\">2</Col></Row></Rows>");
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
            obj.set_taborder("6");
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
            obj.set_taborder("7");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label02","0","60","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("8");
            obj.set_text("조회조건");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_01","108","35","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb01");
            obj.set_text("유효");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_02","108","60","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb02");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_00","108","85",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("3");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("Button44_00_01","171","125","102","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("Button45_00","15","125","146","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("10");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("11");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("12");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"105","45","20","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("13");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","131","10","27",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("14");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_00);
            obj.set_text("Tabpage2");
            this.tab_00.addChild(obj.name, obj);

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

            obj = new Static("Static01","240","0","117","34","601",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("설비 그룹 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_00","240","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"270\"/><Column size=\"270\"/><Column size=\"270\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"회사 ID\"/><Cell col=\"3\" text=\"설비그룹 ID\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"설비그룹 명(K)\"/><Cell col=\"5\" text=\"설비그룹 명(E)\"/><Cell col=\"6\" text=\"설비그룹 명(C)\"/><Cell col=\"7\" text=\"설비그룹 명(V)\"/><Cell col=\"8\" text=\"상위 설비 그룹ID\"/><Cell col=\"9\" text=\"설비그룹 타입\" cssclass=\"cell_point\"/><Cell col=\"10\" text=\"HIERARCHY\" cssclass=\"cell_point\"/><Cell col=\"11\" text=\"설명\"/><Cell col=\"12\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"13\" text=\"생성자\"/><Cell col=\"14\" text=\"생성일\"/><Cell col=\"15\" text=\"수정자\"/><Cell col=\"16\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:회사ID\"/><Cell col=\"3\" text=\"bind:설비그룹ID\"/><Cell col=\"4\" text=\"bind:설비그룹명K\" textAlign=\"left\" padding=\"0px 5px\"/><Cell col=\"5\" text=\"bind:설비그룹명E\" textAlign=\"left\" padding=\"0px 5px\"/><Cell col=\"6\" text=\"bind:설비그룹명C\" textAlign=\"left\" padding=\"0px 5px\"/><Cell col=\"7\" text=\"bind:설비그룹명V\" padding=\"0px 5px\"/><Cell col=\"8\" text=\"bind:상위설비그룹ID\"/><Cell col=\"9\" text=\"bind:설비그룹타입\"/><Cell col=\"10\" text=\"bind:HIERARCHY\"/><Cell col=\"11\" text=\"bind:설명\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:유효상태\"/><Cell col=\"13\" text=\"bind:생성자\"/><Cell col=\"14\" text=\"bind:생성일\"/><Cell col=\"15\" text=\"bind:수정자\"/><Cell col=\"16\" text=\"bind:수정일\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","0","103","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("설비 그룹 트리");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_grdReload","204","6","26","24",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdReload");
            obj.set_tooltiptext("새로고침");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_00","0","34","230","42",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
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
            obj.set_taborder("5");
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

            obj = new Button("btn_grdAdd",null,"6","26","24","111",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_grdDel",null,"6","26","24","85",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_grdCopy",null,"6","27","24","58",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("복사");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_grdDown",null,"6","29","24","29",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_grdUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
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
        this.loadIncludeScript("template10.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
