(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS04300D4");
            this.set_titletext("신뢰성검증");
            if (Form == this.constructor)
            {
                this._setFormPosition(958,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"검사그룹ID\" type=\"STRING\" size=\"256\"/><Column id=\"검사그룹명K\" type=\"STRING\" size=\"256\"/><Column id=\"검사그룹명E\" type=\"STRING\" size=\"256\"/><Column id=\"검사그룹명C\" type=\"STRING\" size=\"256\"/><Column id=\"검사그룹명V\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"검사그룹ID\">ReliabilityEvaluation</Col><Col id=\"No\">1</Col><Col id=\"검사그룹명K\">신뢰성 평가</Col><Col id=\"검사그룹명E\">Reliability evaluation</Col><Col id=\"검사그룹명C\">신뢰성 평가</Col><Col id=\"검사그룹명V\">Đánh Giá Độ Tin Cậy</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성\"/><Col id=\"수정자\">유석진</Col><Col id=\"수정일\">20200327144953</Col></Row><Row><Col id=\"검사그룹ID\">ReliabilityEvaluation_Ok2ship</Col><Col id=\"No\">2</Col><Col id=\"검사그룹명K\">OK2ship</Col><Col id=\"검사그룹명E\">OK2ship</Col><Col id=\"검사그룹명C\">OK2ship</Col><Col id=\"검사그룹명V\">OK2ship</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\">최병호</Col><Col id=\"생성\">20200327144953</Col><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사그룹ID\">ReliabilityInspection.AnalysisTool</Col><Col id=\"No\">3</Col><Col id=\"검사그룹명K\">분석 Tool</Col><Col id=\"검사그룹명E\">(E)분석 Tool</Col><Col id=\"검사그룹명C\">(C)분석 Tool</Col><Col id=\"검사그룹명V\">(V)분석 Tool</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row><Row><Col id=\"검사그룹ID\">ReliabilityInspection.PointArea</Col><Col id=\"No\">4</Col><Col id=\"검사그룹명K\">영역 포인트</Col><Col id=\"검사그룹명E\">영역 포인트</Col><Col id=\"검사그룹명C\">영역 포인트</Col><Col id=\"검사그룹명V\">영역 포인트</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성\"/><Col id=\"수정자\"/><Col id=\"수정일\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"검사방법명\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"검사방법명\">영역/Point</Col><Col id=\"유효상태\">유효</Col><Col id=\"생성자\"/><Col id=\"생성일\">20200214164515</Col><Col id=\"수정자\"/><Col id=\"수정일\">20200214164515</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tree00", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">0</Col><Col id=\"name\">INTERFLEX</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"name\">OK2ship</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"name\">OK2ship_ACF</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"name\">OK2ship_CpK(B)</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"name\">OK2ship_Cross Section</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"name\">OK2ship_IPQC</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"name\">OK2ship_Material</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"name\">OK2ship_ORT</Col></Row><Row><Col id=\"level\">2</Col><Col id=\"name\">OK2ship_X-section</Col></Row><Row><Col id=\"level\">1</Col><Col id=\"name\">분석 Tool</Col></Row><Row><Col id=\"name\">AnalysisTool</Col><Col id=\"level\">2</Col></Row><Row><Col id=\"name\">신뢰성 평가</Col><Col id=\"level\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd02", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"검사항목명\" type=\"STRING\" size=\"256\"/><Column id=\"NCR판정등급\" type=\"STRING\" size=\"256\"/><Column id=\"검사항목유형\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"검사항목명\">회로 &amp; OLB</Col><Col id=\"검사항목유형\">OK_NG</Col><Col id=\"유효상태\">유효</Col><Col id=\"NCR판정등급\"/><Col id=\"생성일\">20200214164515</Col><Col id=\"수정일\">20200214164515</Col></Row><Row><Col id=\"No\">2</Col><Col id=\"검사항목명\">층간 &amp; Adhesive</Col><Col id=\"검사항목유형\">OK_NG</Col><Col id=\"유효상태\">유효</Col><Col id=\"NCR판정등급\"/></Row><Row><Col id=\"No\">3</Col><Col id=\"검사항목명\">보강판</Col><Col id=\"검사항목유형\">OK_NG</Col><Col id=\"유효상태\">유효</Col><Col id=\"NCR판정등급\"/></Row><Row><Col id=\"No\">4</Col><Col id=\"검사항목명\">도금부</Col><Col id=\"검사항목유형\">OK_NG</Col><Col id=\"유효상태\">유효</Col><Col id=\"NCR판정등급\"/></Row><Row><Col id=\"No\">5</Col><Col id=\"검사항목명\">PSR, Ink(SM,M/K)</Col><Col id=\"검사항목유형\">OK_NG</Col><Col id=\"유효상태\">유효</Col><Col id=\"NCR판정등급\"/></Row><Row><Col id=\"No\">6</Col><Col id=\"검사항목명\">PI / Coveray</Col><Col id=\"검사항목유형\">OK_NG</Col><Col id=\"유효상태\">유효</Col><Col id=\"NCR판정등급\"/></Row><Row><Col id=\"검사항목명\">Hole</Col><Col id=\"NCR판정등급\"/><Col id=\"검사항목유형\">OK_NG</Col><Col id=\"유효상태\">유효</Col><Col id=\"No\">7</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div01","0","34",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","12.55%","31",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("검사 종류 명");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_00","Static30:5","5","250","20",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_value("신뢰성검증");
            obj.set_cssclass("display");
            obj.set_text("신뢰성검증");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("sta_title1","0","66","70","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검사 종류");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","0","100","230","42",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_03","15","10",null,"20","37",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_search03",null,"10","22","20","15",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            this.div_00.addChild(obj.name, obj);

            obj = new Grid("grd_tree","0","141","230",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("grd_tree");
            obj.set_binddataset("ds_tree00");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:name\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:level\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title4","75.57%","66","117","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("검사 항목 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title3","50.31%","66","117","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("검사 방법 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title2","240","66","108","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("검사그룹리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_02","75.57%","100",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사항목명\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"NCR판정등급\"/><Cell col=\"3\" text=\"검사 항목 유형\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"5\" text=\"생성자\"/><Cell col=\"6\" text=\"생성일\"/><Cell col=\"7\" text=\"수정자\"/><Cell col=\"8\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:검사항목명\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:NCR판정등급\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:검사항목유형\"/><Cell col=\"4\" text=\"bind:유효상태\"/><Cell col=\"5\" text=\"bind:생성자\"/><Cell col=\"6\" text=\"bind:생성일\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"7\" text=\"bind:수정자\"/><Cell col=\"8\" text=\"bind:수정일\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_01","50.31%","100",null,null,"grd_02:10","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사 방법 명\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"생성자\"/><Cell col=\"4\" text=\"생성일\"/><Cell col=\"5\" text=\"수정자\"/><Cell col=\"6\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:검사방법명\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:유효상태\"/><Cell col=\"3\" text=\"bind:생성자\"/><Cell col=\"4\" text=\"bind:생성일\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"5\" text=\"bind:수정자\"/><Cell col=\"6\" text=\"bind:수정일\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_00","240","100",null,null,"grd_01:10","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사그룹ID\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"검사그룹명(K)\"/><Cell col=\"3\" text=\"검사그룹명(E)\"/><Cell col=\"4\" text=\"검사그룹명(C)\"/><Cell col=\"5\" text=\"검사그룹명(V)\"/><Cell col=\"6\" text=\"유효상태\" cssclass=\"cell_point\"/><Cell col=\"7\" text=\"생성자\"/><Cell col=\"8\" text=\"생성일\"/><Cell col=\"9\" text=\"수정자\"/><Cell col=\"10\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:검사그룹ID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:검사그룹명K\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:검사그룹명E\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:검사그룹명C\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:검사그룹명V\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:유효상태\"/><Cell col=\"7\" text=\"bind:생성자\"/><Cell col=\"8\" text=\"bind:생성\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"9\" text=\"bind:수정자\"/><Cell col=\"10\" text=\"bind:수정일\" displaytype=\"date\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"72","29","24","sta_title4:10",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_basIdclass",null,"72","26","24","btn_xlUp:0",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRow_ds_basIdclass",null,"72","26","24","btn_delRow_ds_basIdclass:0",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlUp00",null,"72","28","24","sta_title3:10",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlUp01",null,"72","29","24","0",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",958,700,this,function(p){});
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

        };
        this.loadIncludeScript("template21D4.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
