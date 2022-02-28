(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template16");
            this.set_titletext("조회조건+그리드T+sub탭B");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"공정\" type=\"STRING\" size=\"256\"/><Column id=\"PNL\" type=\"STRING\" size=\"256\"/><Column id=\"PCS\" type=\"STRING\" size=\"256\"/><Column id=\"차수\" type=\"STRING\" size=\"256\"/><Column id=\"이전작업장\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col><Col id=\"품목코드\">1025149S1</Col><Col id=\"품목명\">AMB999RD01 DIGITIZER(2L)</Col><Col id=\"LotNo\"/><Col id=\"공정수순\">양산</Col><Col id=\"공정\"/><Col id=\"PCS\"/><Col id=\"PNL\"/><Col id=\"차수\"/><Col id=\"이전작업장\"/></Row><Row><Col id=\"품목명\">AMB687VX01 DIGITIZER(2L)-IFV직납</Col><Col id=\"LotNo\"/><Col id=\"공정수순\">양산</Col><Col id=\"공정\"/><Col id=\"PNL\"/><Col id=\"PCS\"/><Col id=\"No\">2</Col><Col id=\"품목코드\">1025362J1</Col><Col id=\"차수\"/><Col id=\"이전작업장\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"작업수량\" type=\"STRING\" size=\"256\"/><Column id=\"검사수량\" type=\"STRING\" size=\"256\"/><Column id=\"불량수량\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">PNL</Col><Col id=\"작업수량\">283</Col><Col id=\"검사수량\">0</Col><Col id=\"불량수량\">0</Col></Row><Row><Col id=\"name\">PCS</Col><Col id=\"작업수량\">3,396</Col><Col id=\"검사수량\">0</Col><Col id=\"불량수량\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd02", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"판정등급\" type=\"STRING\" size=\"256\"/><Column id=\"조치등급\" type=\"STRING\" size=\"256\"/><Column id=\"NG조건\" type=\"STRING\" size=\"256\"/><Column id=\"수량불량율구분\" type=\"STRING\" size=\"256\"/><Column id=\"범위\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"판정등급\">A등급</Col><Col id=\"조치등급\">A</Col><Col id=\"NG조건\">이상</Col><Col id=\"수량불량율구분\">수량</Col><Col id=\"범위\">1 ~</Col><Col id=\"No\">1</Col></Row><Row><Col id=\"판정등급\">B등급</Col><Col id=\"조치등급\">B3</Col><Col id=\"NG조건\">이상</Col><Col id=\"수량불량율구분\">불량율</Col><Col id=\"범위\">50 ~</Col><Col id=\"No\">2</Col></Row><Row><Col id=\"판정등급\">B등급</Col><Col id=\"조치등급\">B2</Col><Col id=\"NG조건\">사이</Col><Col id=\"수량불량율구분\">불량율</Col><Col id=\"범위\">3 ~ 50</Col><Col id=\"No\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd03", this);
            obj._setContents("<ColumnInfo><Column id=\"불량코드\" type=\"STRING\" size=\"256\"/><Column id=\"불량코드명\" type=\"STRING\" size=\"256\"/><Column id=\"판정등급\" type=\"STRING\" size=\"256\"/><Column id=\"품질공정\" type=\"STRING\" size=\"256\"/><Column id=\"수량PHL\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"불량율\" type=\"STRING\" size=\"256\"/><Column id=\"사진등록\" type=\"STRING\" size=\"256\"/><Column id=\"원인품목\" type=\"STRING\" size=\"256\"/><Column id=\"원인LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"원인공정\" type=\"STRING\" size=\"256\"/><Column id=\"원인작업장\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"불량코드\">17</Col><Col id=\"불량코드명\">홀누락</Col><Col id=\"판정등급\">A등급</Col><Col id=\"품질공정\">LASER</Col><Col id=\"수량PHL\">0</Col><Col id=\"수량\">0</Col><Col id=\"불량율\">0</Col><Col id=\"사진등록\"/></Row><Row><Col id=\"불량코드\">18</Col><Col id=\"불량코드명\">홀쏠림</Col><Col id=\"판정등급\">B등급</Col><Col id=\"품질공정\">LASER</Col><Col id=\"수량PHL\">0</Col><Col id=\"수량\">0</Col><Col id=\"불량율\">0</Col><Col id=\"사진등록\"/></Row><Row><Col id=\"불량코드\">19</Col><Col id=\"불량코드명\">홀터짐</Col><Col id=\"판정등급\">B등급</Col><Col id=\"품질공정\">LASER</Col><Col id=\"수량PHL\">0</Col><Col id=\"수량\">0</Col><Col id=\"불량율\">0</Col><Col id=\"사진등록\"/></Row><Row><Col id=\"불량코드\">20</Col><Col id=\"불량코드명\">홀SIZE</Col><Col id=\"판정등급\">A등급</Col><Col id=\"품질공정\">LASER</Col><Col id=\"수량PHL\">0</Col><Col id=\"수량\">0</Col><Col id=\"불량율\">0</Col><Col id=\"사진등록\"/></Row><Row><Col id=\"불량코드\">21</Col><Col id=\"불량코드명\">홀BURR</Col><Col id=\"판정등급\">B등급</Col><Col id=\"품질공정\">LASER</Col><Col id=\"수량PHL\">0</Col><Col id=\"수량\">0</Col><Col id=\"불량율\">0</Col><Col id=\"사진등록\"/></Row><Row><Col id=\"불량코드\">22</Col><Col id=\"불량코드명\">홀막힘</Col><Col id=\"판정등급\">A등급</Col><Col id=\"품질공정\">LASER</Col><Col id=\"수량PHL\">0</Col><Col id=\"수량\">0</Col><Col id=\"불량율\">0</Col><Col id=\"사진등록\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd04", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"검사정의명\" type=\"STRING\" size=\"256\"/><Column id=\"차수\" type=\"STRING\" size=\"256\"/><Column id=\"완료일시\" type=\"STRING\" size=\"256\"/><Column id=\"검사자\" type=\"STRING\" size=\"256\"/><Column id=\"검사수량\" type=\"STRING\" size=\"256\"/><Column id=\"불량수량\" type=\"STRING\" size=\"256\"/><Column id=\"불량사진\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd05", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"파일명\" type=\"STRING\" size=\"256\"/><Column id=\"확장\" type=\"STRING\" size=\"256\"/><Column id=\"파일크기\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("작업장 ID");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label02","0","60","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("4");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_00","108","10",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
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
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"10","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label00_00","0","35","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("13");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_01","108","35",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("14");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search01",null,"35","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_02","108","60",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("16");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search02",null,"60","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_03","108","85",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("18");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search03",null,"85","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_finder");
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

            obj = new Static("title1","0","0","144","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("입고 검사 리스트 <fc v=\"#f31d24\">2</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_00","0","37.71%",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_00);
            obj.set_text("검사 결과 등록");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_01","49.06%","34",null,"146","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd02");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"85\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"판정등급\"/><Cell col=\"2\" text=\"조치등급\"/><Cell col=\"3\" text=\"NG조건\"/><Cell col=\"4\" text=\"수량/불량율 구분\"/><Cell col=\"5\" text=\"범위\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:판정등급\"/><Cell col=\"2\" text=\"bind:조치등급\"/><Cell col=\"3\" text=\"bind:NG조건\"/><Cell col=\"4\" text=\"bind:수량불량율구분\"/><Cell col=\"5\" text=\"bind:범위\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Div("Div00","0","34",null,"63","grd_01:10",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("상세영역");
            obj.set_cssclass("div_WF_detail_line");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00","0","0","15.28%","31",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form.Div00.form);
            obj.set_taborder("0");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tab_00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("label02","0","31","15.07%","31",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("검사자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tab_00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("label01","47.82%","0","17.47%","31",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Lot No.");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tab_00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("label03","47.82%","31","17.47%","31",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form.Div00.form);
            obj.set_taborder("3");
            obj.set_text("재검 사유");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tab_00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_00","label00:5","5",null,"20","label01:5",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form.Div00.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.div_work.form.tab_00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_01","label01:5","5",null,"20","5",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form.Div00.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.div_work.form.tab_00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"36","22","20","label03:5",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form.Div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tab_00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_02","label02:5","36",null,"20","btn_search00:0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form.Div00.form);
            obj.set_taborder("6");
            this.div_work.form.tab_00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_03","label03:5","36",null,"20","5",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form.Div00.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.div_work.form.tab_00.Tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","107",null,"73","grd_01:10",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_grd01");
            obj.set_cssclass("grd_detail");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none");
            obj.set_scrolltype("none");
            obj.set_border("1px solid #e8e8e8");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"name\"/><Cell col=\"1\" text=\"작업수량\"/><Cell col=\"2\" text=\"검사수량\"/><Cell col=\"3\" text=\"불량수량\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:name\" cssclass=\"cell_bgWhite\"/><Cell col=\"1\" text=\"bind:작업수량\" cssclass=\"cell_bgWhite\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:검사수량\" cssclass=\"cell_bgWhite\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:불량수량\" cssclass=\"cell_end\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("title1","49.06%","0","100","34","388",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("NCR 발행기준");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("title1_00","0","180","38","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("불량");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_02","0","214",null,null,"260","0",null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd03");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"불량 코드\" cssclass=\"cell_point\"/><Cell col=\"1\" text=\"불량코드 명\"/><Cell col=\"2\" text=\"판정등급\"/><Cell col=\"3\" text=\"품질공정\"/><Cell col=\"4\" text=\"수량(PHL)\" cssclass=\"cell_point\"/><Cell col=\"5\" text=\"수량\" cssclass=\"cell_point\"/><Cell col=\"6\" text=\"불량율\"/><Cell col=\"7\" text=\"사진등록\"/><Cell col=\"8\" text=\"원인품목\"/><Cell col=\"9\" text=\"원인 LOTID\"/><Cell col=\"10\" text=\"원인 공정\"/><Cell col=\"11\" text=\"원인 작업장\"/></Band><Band id=\"body\"><Cell text=\"bind:불량코드\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:불량코드명\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:판정등급\"/><Cell col=\"3\" text=\"bind:품질공정\"/><Cell col=\"4\" text=\"bind:수량PHL\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:수량\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:불량율\" textAlign=\"right\"/><Cell col=\"7\" text=\"사진등록\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"8\" text=\"bind:원인품목\"/><Cell col=\"9\" text=\"bind:원인LOTID\"/><Cell col=\"10\" text=\"bind:원인공정\"/><Cell col=\"11\" text=\"bind:원인작업장\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" text=\"0\"/><Cell col=\"5\"/><Cell col=\"6\" expandchar=\"%\" expandshow=\"show\" expandsize=\"24\" text=\"12\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"186","26","24","260",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("삭제");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"186","26","24","btnDel:0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("추가");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new ImageViewer("img_00",null,"214","250",null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_cssclass("img_photo");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("title1_01","0","0","66","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_00);
            obj.set_text("자주검사 이력");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Static("title1","0","0","139","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("검사이력 리스트 <fc v=\"#f31d24\">2</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_01","0","34",null,null,"0","233",null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd04");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"공정 수순\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"작업장\"/><Cell col=\"5\" text=\"검사 정의 명\"/><Cell col=\"6\" text=\"차수\"/><Cell col=\"7\" text=\"완료일시\"/><Cell col=\"8\" text=\"검사자\"/><Cell col=\"9\" text=\"검사수량\"/><Cell col=\"10\" text=\"불량 수량\"/><Cell col=\"11\" text=\"불량사진\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:LotNo\"/><Cell col=\"2\" text=\"bind:공정수순\"/><Cell col=\"3\" text=\"bind:공정명\"/><Cell col=\"4\" text=\"bind:작업장\"/><Cell col=\"5\" text=\"bind:검사정의명\"/><Cell col=\"6\" text=\"bind:차수\"/><Cell col=\"7\" text=\"bind:완료일시\"/><Cell col=\"8\" text=\"bind:검사자\"/><Cell col=\"9\" text=\"bind:검사수량\"/><Cell col=\"10\" text=\"bind:불량수량\"/><Cell col=\"11\" text=\"bind:불량사진\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("title2","0","grd_01:0","111","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("불량 리스트 <fc v=\"#f31d24\">2</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_00","63.67%","51.82%",null,null,"0","80",null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_grd05");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"180\"/><Column size=\"50\"/><Column size=\"75\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"확장\"/><Cell col=\"3\" text=\"파일크기\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:파일명\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:확장\"/><Cell col=\"3\" text=\"bind:파일크기\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_01_00","0","51.82%",null,null,"grd_00:10","0",null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd04");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Lot No.\"/><Cell col=\"2\" text=\"공정 수순\"/><Cell col=\"3\" text=\"공정명\"/><Cell col=\"4\" text=\"작업장\"/><Cell col=\"5\" text=\"검사 정의 명\"/><Cell col=\"6\" text=\"차수\"/><Cell col=\"7\" text=\"완료일시\"/><Cell col=\"8\" text=\"검사자\"/><Cell col=\"9\" text=\"검사수량\"/><Cell col=\"10\" text=\"불량 수량\"/><Cell col=\"11\" text=\"불량사진\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:LotNo\"/><Cell col=\"2\" text=\"bind:공정수순\"/><Cell col=\"3\" text=\"bind:공정명\"/><Cell col=\"4\" text=\"bind:작업장\"/><Cell col=\"5\" text=\"bind:검사정의명\"/><Cell col=\"6\" text=\"bind:차수\"/><Cell col=\"7\" text=\"bind:완료일시\"/><Cell col=\"8\" text=\"bind:검사자\"/><Cell col=\"9\" text=\"bind:검사수량\"/><Cell col=\"10\" text=\"bind:불량수량\"/><Cell col=\"11\" text=\"bind:불량사진\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new ImageViewer("img_00","63.67%","83.25%",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_cssclass("img_photo");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_01","0","34",null,null,"0","tab_00:10",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목코드\"/><Cell col=\"2\" text=\"품목명\"/><Cell col=\"3\" text=\"Lot No.\"/><Cell col=\"4\" text=\"공정수순\"/><Cell col=\"5\" text=\"공정\"/><Cell col=\"6\" text=\"PNL\"/><Cell col=\"7\" text=\"PCS\"/><Cell col=\"8\" text=\"차수\"/><Cell col=\"9\" text=\"이전작업장\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:품목코드\"/><Cell col=\"2\" text=\"bind:품목명\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:LotNo\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:공정수순\"/><Cell col=\"5\" text=\"bind:공정\"/><Cell col=\"6\" text=\"bind:PNL\"/><Cell col=\"7\" text=\"bind:PCS\"/><Cell col=\"8\" text=\"bind:차수\"/><Cell col=\"9\" text=\"bind:이전작업장\"/></Band></Format></Formats>");
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
        this.loadIncludeScript("template16.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
