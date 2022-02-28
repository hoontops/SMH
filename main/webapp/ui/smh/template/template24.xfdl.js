(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM09200M");
            this.set_titletext("조회조건+그리드T+sub탭B");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"자재ID\" type=\"STRING\" size=\"256\"/><Column id=\"자재명\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"불출\" type=\"STRING\" size=\"256\"/><Column id=\"재고이동\" type=\"STRING\" size=\"256\"/><Column id=\"기타입고\" type=\"STRING\" size=\"256\"/><Column id=\"생산입고\" type=\"STRING\" size=\"256\"/><Column id=\"반납\" type=\"STRING\" size=\"256\"/><Column id=\"재고이동2\" type=\"STRING\" size=\"256\"/><Column id=\"기타출고\" type=\"STRING\" size=\"256\"/><Column id=\"공정출고\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"작업장\">RTR UV_B2F</Col><Col id=\"자재ID\">5010000613</Col><Col id=\"자재명\">DSF-600 091209E(P)500(T) [500mm*100M]</Col><Col id=\"단위\">M</Col><Col id=\"공정출고\">370.0478</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"의뢰번호\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"자재분류\" type=\"STRING\" size=\"256\"/><Column id=\"자재ID\" type=\"STRING\" size=\"256\"/><Column id=\"자재명\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"소요수량\" type=\"STRING\" size=\"256\"/><Column id=\"청구수량\" type=\"STRING\" size=\"256\"/><Column id=\"인수수량\" type=\"STRING\" size=\"256\"/><Column id=\"요청자\" type=\"STRING\" size=\"256\"/><Column id=\"요청일\" type=\"STRING\" size=\"256\"/><Column id=\"최종인수자\" type=\"STRING\" size=\"256\"/><Column id=\"최종인수일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd02", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"입고번호\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"이동작업장\" type=\"STRING\" size=\"256\"/><Column id=\"자재분류\" type=\"STRING\" size=\"256\"/><Column id=\"자재ID\" type=\"STRING\" size=\"256\"/><Column id=\"자재명\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"입출고유형\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"최종인수자\" type=\"STRING\" size=\"256\"/><Column id=\"최종인수일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">1</Col></Row><Row><Col id=\"No\">2</Col></Row><Row><Col id=\"No\">3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd03", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"입고번호\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"자재분류\" type=\"STRING\" size=\"256\"/><Column id=\"자재ID\" type=\"STRING\" size=\"256\"/><Column id=\"자재명\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"입출고유형\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"최종인수자\" type=\"STRING\" size=\"256\"/><Column id=\"최종인수일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd05", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"출고번호\" type=\"STRING\" size=\"256\"/><Column id=\"작업장ID\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"이동작업장\" type=\"STRING\" size=\"256\"/><Column id=\"자재분류\" type=\"STRING\" size=\"256\"/><Column id=\"자재ID\" type=\"STRING\" size=\"256\"/><Column id=\"자재명\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"입출고유형\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"반출수량\" type=\"STRING\" size=\"256\"/><Column id=\"최종출고자\" type=\"STRING\" size=\"256\"/><Column id=\"최종출고일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd06", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"출고번호\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"이동작업장\" type=\"STRING\" size=\"256\"/><Column id=\"자재분류\" type=\"STRING\" size=\"256\"/><Column id=\"자재ID\" type=\"STRING\" size=\"256\"/><Column id=\"자재명\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"입출고유형\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"최종출고자\" type=\"STRING\" size=\"256\"/><Column id=\"최종출고일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd07", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"출고번호\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"자재분류\" type=\"STRING\" size=\"256\"/><Column id=\"자재ID\" type=\"STRING\" size=\"256\"/><Column id=\"자재명\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"입출고유형\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"최종출고자\" type=\"STRING\" size=\"256\"/><Column id=\"최종출고일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd04", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"입고번호\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"자재분류\" type=\"STRING\" size=\"256\"/><Column id=\"자재ID\" type=\"STRING\" size=\"256\"/><Column id=\"자재명\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"입출고유형\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"최종인수자\" type=\"STRING\" size=\"256\"/><Column id=\"최종인수일\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd08", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"출고번호\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"자재분류\" type=\"STRING\" size=\"256\"/><Column id=\"자재ID\" type=\"STRING\" size=\"256\"/><Column id=\"자재명\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"입출고유형\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"최종출고자\" type=\"STRING\" size=\"256\"/><Column id=\"최종출고일\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"출고번호\">2.02101E+11</Col><Col id=\"작업장\">RTR UV_B2F</Col><Col id=\"자재분류\">원자재</Col><Col id=\"자재ID\">5010000613</Col><Col id=\"자재명\">DSF-600 091209E(P)500(T) [500mm*100M]</Col><Col id=\"LotNo\">20190829-000039</Col><Col id=\"입출고유형\">LOT 자재투입</Col><Col id=\"단위\">M</Col><Col id=\"수량\">99.8424</Col><Col id=\"최종출고자\">전태선</Col></Row><Row><Col id=\"출고번호\">2.02101E+11</Col><Col id=\"작업장\">RTR UV_B2F</Col><Col id=\"자재분류\">원자재</Col><Col id=\"자재ID\">5010000613</Col><Col id=\"자재명\">DSF-600 091209E(P)500(T) [500mm*100M]</Col><Col id=\"LotNo\">20190829-000040</Col><Col id=\"입출고유형\">LOT 자재투입</Col><Col id=\"단위\">M</Col><Col id=\"수량\">99.567</Col><Col id=\"최종출고자\">전태선</Col></Row><Row><Col id=\"출고번호\">2.02101E+11</Col><Col id=\"작업장\">RTR UV_B2F</Col><Col id=\"자재분류\">원자재</Col><Col id=\"자재ID\">5010000613</Col><Col id=\"자재명\">DSF-600 091209E(P)500(T) [500mm*100M]</Col><Col id=\"LotNo\">20190829-000040</Col><Col id=\"입출고유형\">LOT 자재투입</Col><Col id=\"단위\">M</Col><Col id=\"수량\">1</Col><Col id=\"최종출고자\">전태선</Col></Row><Row><Col id=\"출고번호\">2.02101E+11</Col><Col id=\"작업장\">RTR UV_B2F</Col><Col id=\"자재분류\">원자재</Col><Col id=\"자재ID\">5010000613</Col><Col id=\"자재명\">DSF-600 091209E(P)500(T) [500mm*100M]</Col><Col id=\"LotNo\">20190829-000037</Col><Col id=\"입출고유형\">LOT 자재투입</Col><Col id=\"단위\">M</Col><Col id=\"수량\">68.796</Col><Col id=\"최종출고자\">빌트원</Col></Row><Row><Col id=\"출고번호\">2.02101E+11</Col><Col id=\"작업장\">RTR UV_B2F</Col><Col id=\"자재분류\">원자재</Col><Col id=\"자재ID\">5010000613</Col><Col id=\"자재명\">DSF-600 091209E(P)500(T) [500mm*100M]</Col><Col id=\"LotNo\">20190829-000037</Col><Col id=\"입출고유형\">LOT 자재투입</Col><Col id=\"단위\">M</Col><Col id=\"수량\">99.8424</Col><Col id=\"최종출고자\">빌트원</Col></Row><Row><Col id=\"출고번호\">2.02101E+11</Col><Col id=\"작업장\">RTR UV_B2F</Col><Col id=\"자재분류\">원자재</Col><Col id=\"자재ID\">5010000613</Col><Col id=\"자재명\">DSF-600 091209E(P)500(T) [500mm*100M]</Col><Col id=\"LotNo\">20190829-000037</Col><Col id=\"입출고유형\">LOT 자재투입</Col><Col id=\"단위\">M</Col><Col id=\"수량\">1</Col><Col id=\"최종출고자\">빌트원</Col></Row></Rows>");
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
            obj.set_taborder("10");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label02","0","85","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("11");
            obj.set_text("자재코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_00","171","150","102","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_01","15","150","146","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"110","15","97","0",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("12");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","105","15","97",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("13");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("14");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"130","45","20","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("15");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","156","10","27",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("16");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label03","0","110","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("17");
            obj.set_text("자재구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label00_00","0","60","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("18");
            obj.set_text("작업장 ID");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_01","108","60",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("3");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search01",null,"60","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_02","108","85",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("5");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search02",null,"85","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_00","10","35","94","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("1");
            obj.set_cssclass("cmb_SA_label");
            obj.set_innerdataset("ds_cmb01");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("전월");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_00","108","10",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_01","108","35",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_01","108","110","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("7");
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

            obj = new Static("title1","0","0","191","34","767",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("자재 입출고 내역 리스트 <fc v=\"#f31d24\">2</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_00","0","36.43%",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_00);
            obj.set_text("입고-불출");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_02","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd01");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"240\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"의뢰번호\"/><Cell col=\"2\" text=\"공정명\"/><Cell col=\"3\" text=\"작업장\"/><Cell col=\"4\" text=\"자재분류\"/><Cell col=\"5\" text=\"자재ID\"/><Cell col=\"6\" text=\"자재명\"/><Cell col=\"7\" text=\"Lot No.\"/><Cell col=\"8\" text=\"수량\"/><Cell col=\"9\" text=\"소요수량\"/><Cell col=\"10\" text=\"청구수량\"/><Cell col=\"11\" text=\"인수수량\"/><Cell col=\"12\" text=\"요청자\"/><Cell col=\"13\" text=\"요청일\"/><Cell col=\"14\" text=\"최종인수자\"/><Cell col=\"15\" text=\"최종인수일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:의뢰번호\"/><Cell col=\"2\" text=\"bind:공정명\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:작업장\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:자재분류\"/><Cell col=\"5\" text=\"bind:자재ID\"/><Cell col=\"6\" text=\"bind:자재명\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:LotNo\"/><Cell col=\"8\" text=\"bind:수량\"/><Cell col=\"9\" text=\"bind:소요수량\"/><Cell col=\"10\" text=\"bind:청구수량\"/><Cell col=\"11\" text=\"bind:인수수량\"/><Cell col=\"12\" text=\"bind:요청자\"/><Cell col=\"13\" text=\"bind:요청일\"/><Cell col=\"14\" text=\"bind:최종인수자\"/><Cell col=\"15\" text=\"bind:최종인수일\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("title1_01","0","0","67","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("입고-불출");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_00);
            obj.set_text("입고-재고이동");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Static("title1","0","0","93","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("입고-재고이동");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_01","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd02");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"입고번호\"/><Cell col=\"2\" text=\"작업장\"/><Cell col=\"3\" text=\"이동작업장\"/><Cell col=\"4\" text=\"자재분류\"/><Cell col=\"5\" text=\"자재ID\"/><Cell col=\"6\" text=\"자재명\"/><Cell col=\"7\" text=\"Lot No.\"/><Cell col=\"8\" text=\"입출고유형\"/><Cell col=\"9\" text=\"단위\"/><Cell col=\"10\" text=\"수량\"/><Cell col=\"11\" text=\"최종인수자\"/><Cell col=\"12\" text=\"최종인수일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:입고번호\"/><Cell col=\"2\" text=\"bind:작업장\"/><Cell col=\"3\" text=\"bind:이동작업장\"/><Cell col=\"4\" text=\"bind:자재분류\"/><Cell col=\"5\" text=\"bind:자재ID\"/><Cell col=\"6\" text=\"bind:자재명\"/><Cell col=\"7\" text=\"bind:LotNo\"/><Cell col=\"8\" text=\"bind:입출고유형\"/><Cell col=\"9\" text=\"bind:단위\"/><Cell col=\"10\" text=\"bind:수량\"/><Cell col=\"11\" text=\"bind:최종인수자\"/><Cell col=\"12\" text=\"bind:최종인수일\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab_00);
            obj.set_text("입고-기타입고");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Static("title1","0","0","93","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("입고-기타입고");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_01","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage3.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd03");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"240\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"입고번호\"/><Cell col=\"2\" text=\"작업장\"/><Cell col=\"3\" text=\"자재분류\"/><Cell col=\"4\" text=\"자재 ID\"/><Cell col=\"5\" text=\"자재명\"/><Cell col=\"6\" text=\"Lot No.\"/><Cell col=\"7\" text=\"입출고유형\"/><Cell col=\"8\" text=\"단위\"/><Cell col=\"9\" text=\"수량\"/><Cell col=\"10\" text=\"최종인수자\"/><Cell col=\"11\" text=\"최종인수일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:입고번호\"/><Cell col=\"2\" text=\"bind:작업장\"/><Cell col=\"3\" text=\"bind:자재분류\"/><Cell col=\"4\" text=\"bind:자재ID\"/><Cell col=\"5\" text=\"bind:자재명\"/><Cell col=\"6\" text=\"bind:LotNo\"/><Cell col=\"7\" text=\"bind:입출고유형\"/><Cell col=\"8\" text=\"bind:단위\"/><Cell col=\"9\" text=\"bind:수량\"/><Cell col=\"10\" text=\"bind:최종인수자\"/><Cell col=\"11\" text=\"bind:최종인수일\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage3.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage3.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_00.Tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage4",this.div_work.form.tab_00);
            obj.set_text("입고-생산입고");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Static("title1","0","0","93","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage4.form);
            obj.set_taborder("0");
            obj.set_text("입고-생산입고");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage4.addChild(obj.name, obj);

            obj = new Grid("grd_01","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage4.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd04");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"240\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"입고번호\"/><Cell col=\"2\" text=\"작업장\"/><Cell col=\"3\" text=\"자재분류\"/><Cell col=\"4\" text=\"자재 ID\"/><Cell col=\"5\" text=\"자재명\"/><Cell col=\"6\" text=\"Lot No.\"/><Cell col=\"7\" text=\"입출고유형\"/><Cell col=\"8\" text=\"단위\"/><Cell col=\"9\" text=\"수량\"/><Cell col=\"10\" text=\"최종인수자\"/><Cell col=\"11\" text=\"최종인수일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:입고번호\"/><Cell col=\"2\" text=\"bind:작업장\"/><Cell col=\"3\" text=\"bind:자재분류\"/><Cell col=\"4\" text=\"bind:자재ID\"/><Cell col=\"5\" text=\"bind:자재명\"/><Cell col=\"6\" text=\"bind:LotNo\"/><Cell col=\"7\" text=\"bind:입출고유형\"/><Cell col=\"8\" text=\"bind:단위\"/><Cell col=\"9\" text=\"bind:수량\"/><Cell col=\"10\" text=\"bind:최종인수자\"/><Cell col=\"11\" text=\"bind:최종인수일\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage4.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage4.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_00.Tabpage4.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage5",this.div_work.form.tab_00);
            obj.set_text("출고-반납");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Static("title1","0","0","67","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage5.form);
            obj.set_taborder("0");
            obj.set_text("출고-반납");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage5.addChild(obj.name, obj);

            obj = new Grid("grd_01","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage5.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd05");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"출고번호\"/><Cell col=\"2\" text=\"작업장ID\"/><Cell col=\"3\" text=\"작업장\"/><Cell col=\"4\" text=\"이동작업장\"/><Cell col=\"5\" text=\"자재분류\"/><Cell col=\"6\" text=\"자재ID\"/><Cell col=\"7\" text=\"자재명\"/><Cell col=\"8\" text=\"Lot No.\"/><Cell col=\"9\" text=\"입출고유형\"/><Cell col=\"10\" text=\"단위\"/><Cell col=\"11\" text=\"반출수량\"/><Cell col=\"12\" text=\"최종출고자\"/><Cell col=\"13\" text=\"최종출고일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:출고번호\"/><Cell col=\"2\" text=\"bind:작업장ID\"/><Cell col=\"3\" text=\"bind:작업장\"/><Cell col=\"4\" text=\"bind:이동작업장\"/><Cell col=\"5\" text=\"bind:자재분류\"/><Cell col=\"6\" text=\"bind:자재ID\"/><Cell col=\"7\" text=\"bind:자재명\"/><Cell col=\"8\" text=\"bind:LotNo\"/><Cell col=\"9\" text=\"bind:입출고유형\"/><Cell col=\"10\" text=\"bind:단위\"/><Cell col=\"11\" text=\"bind:반출수량\"/><Cell col=\"12\" text=\"bind:최종출고자\"/><Cell col=\"13\" text=\"bind:최종출고일\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage5.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage5.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_00.Tabpage5.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage6",this.div_work.form.tab_00);
            obj.set_text("출고-재고이동");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Static("title1","0","0","93","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage6.form);
            obj.set_taborder("0");
            obj.set_text("출고-재고이동");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage6.addChild(obj.name, obj);

            obj = new Grid("grd_01","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage6.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd06");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"출고번호\"/><Cell col=\"2\" text=\"작업장\"/><Cell col=\"3\" text=\"이동작업장\"/><Cell col=\"4\" text=\"자재분류\"/><Cell col=\"5\" text=\"자재 ID\"/><Cell col=\"6\" text=\"자재명\"/><Cell col=\"7\" text=\"Lot No.\"/><Cell col=\"8\" text=\"입출고유형\"/><Cell col=\"9\" text=\"단위\"/><Cell col=\"10\" text=\"수량\"/><Cell col=\"11\" text=\"최종출고자\"/><Cell col=\"12\" text=\"최종출고일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:출고번호\"/><Cell col=\"2\" text=\"bind:작업장\"/><Cell col=\"3\" text=\"bind:이동작업장\"/><Cell col=\"4\" text=\"bind:자재분류\"/><Cell col=\"5\" text=\"bind:자재ID\"/><Cell col=\"6\" text=\"bind:자재명\"/><Cell col=\"7\" text=\"bind:LotNo\"/><Cell col=\"8\" text=\"bind:입출고유형\"/><Cell col=\"9\" text=\"bind:단위\"/><Cell col=\"10\" text=\"bind:수량\"/><Cell col=\"11\" text=\"bind:최종출고자\"/><Cell col=\"12\" text=\"bind:최종출고일\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage6.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage6.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_00.Tabpage6.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage7",this.div_work.form.tab_00);
            obj.set_text("출고-기타출고");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Static("title1","0","0","93","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage7.form);
            obj.set_taborder("0");
            obj.set_text("출고-기타출고");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage7.addChild(obj.name, obj);

            obj = new Grid("grd_01","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage7.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd07");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"240\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"출고번호\"/><Cell col=\"2\" text=\"작업장\"/><Cell col=\"3\" text=\"자재분류\"/><Cell col=\"4\" text=\"자재 ID\"/><Cell col=\"5\" text=\"자재명\"/><Cell col=\"6\" text=\"Lot No.\"/><Cell col=\"7\" text=\"입출고유형\"/><Cell col=\"8\" text=\"단위\"/><Cell col=\"9\" text=\"수량\"/><Cell col=\"10\" text=\"최종출고자\"/><Cell col=\"11\" text=\"최종출고일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:출고번호\"/><Cell col=\"2\" text=\"bind:작업장\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:자재분류\"/><Cell col=\"4\" text=\"bind:자재ID\"/><Cell col=\"5\" text=\"bind:자재명\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:LotNo\"/><Cell col=\"7\" text=\"bind:입출고유형\"/><Cell col=\"8\" text=\"bind:단위\"/><Cell col=\"9\" text=\"bind:수량\"/><Cell col=\"10\" text=\"bind:최종출고자\"/><Cell col=\"11\" text=\"bind:최종출고일\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage7.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage7.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_00.Tabpage7.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage8",this.div_work.form.tab_00);
            obj.set_text("출고-공정출고");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Static("title1","0","0","93","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage8.form);
            obj.set_taborder("0");
            obj.set_text("출고-공정출고");
            obj.set_cssclass("sta_WF_subTitle2");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage8.addChild(obj.name, obj);

            obj = new Grid("grd_01","0","34",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage8.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd08");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"240\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"출고번호\"/><Cell col=\"2\" text=\"작업장\"/><Cell col=\"3\" text=\"자재분류\"/><Cell col=\"4\" text=\"자재 ID\"/><Cell col=\"5\" text=\"자재명\"/><Cell col=\"6\" text=\"Lot No.\"/><Cell col=\"7\" text=\"입출고유형\"/><Cell col=\"8\" text=\"단위\"/><Cell col=\"9\" text=\"수량\"/><Cell col=\"10\" text=\"최종출고자\"/><Cell col=\"11\" text=\"최종출고일\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:출고번호\"/><Cell col=\"2\" text=\"bind:작업장\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:자재분류\"/><Cell col=\"4\" text=\"bind:자재ID\"/><Cell col=\"5\" text=\"bind:자재명\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:LotNo\"/><Cell col=\"7\" text=\"bind:입출고유형\"/><Cell col=\"8\" text=\"bind:단위\"/><Cell col=\"9\" text=\"bind:수량\"/><Cell col=\"10\" text=\"bind:최종출고자\"/><Cell col=\"11\" text=\"bind:최종출고일\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage8.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage8.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_00.Tabpage8.addChild(obj.name, obj);

            obj = new Static("title1_00","0",null,"66","34",null,"tab_00:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("이력정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_01","0","34",null,null,"0","title1_00:0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"280\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"작업장\"/><Cell col=\"2\" rowspan=\"2\" text=\"자재 ID\"/><Cell col=\"3\" rowspan=\"2\" text=\"자재명\"/><Cell col=\"4\" rowspan=\"2\" text=\"단위\"/><Cell col=\"5\" colspan=\"4\" text=\"입고\" cssclass=\"cell_headMaster\"/><Cell col=\"9\" colspan=\"4\" text=\"출고\" cssclass=\"cell_headMaster\"/><Cell row=\"1\" col=\"5\" text=\"불출\"/><Cell row=\"1\" col=\"6\" text=\"재고이동\"/><Cell row=\"1\" col=\"7\" text=\"기타입고\"/><Cell row=\"1\" col=\"8\" text=\"생산입고\"/><Cell row=\"1\" col=\"9\" text=\"반납\"/><Cell row=\"1\" col=\"10\" text=\"재고이동\"/><Cell row=\"1\" col=\"11\" text=\"기타출고\"/><Cell row=\"1\" col=\"12\" text=\"공정출고\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:작업장\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:자재ID\"/><Cell col=\"3\" text=\"bind:자재명\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:단위\"/><Cell col=\"5\" text=\"bind:불출\"/><Cell col=\"6\" text=\"bind:재고이동\"/><Cell col=\"7\" text=\"bind:기타입고\"/><Cell col=\"8\" text=\"bind:생산입고\"/><Cell col=\"9\" text=\"bind:반납\"/><Cell col=\"10\" text=\"bind:재고이동2\"/><Cell col=\"11\" text=\"bind:기타출고\"/><Cell col=\"12\" text=\"bind:공정출고\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnExcelUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
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

            obj = new Static("sta_title","30","16","140","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("자재 입/출고 내역");
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
        this.loadIncludeScript("template24.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
