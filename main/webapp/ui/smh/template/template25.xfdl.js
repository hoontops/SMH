(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM00100M");
            this.set_titletext("조회조건+Master Tab(그리드T+sub탭B)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"발주번호\" type=\"STRING\" size=\"256\"/><Column id=\"입하번호\" type=\"STRING\" size=\"256\"/><Column id=\"자재LOTNO\" type=\"STRING\" size=\"256\"/><Column id=\"입하일시\" type=\"STRING\" size=\"256\"/><Column id=\"접수일시\" type=\"STRING\" size=\"256\"/><Column id=\"완료일시\" type=\"STRING\" size=\"256\"/><Column id=\"거래처명\" type=\"STRING\" size=\"256\"/><Column id=\"자재명\" type=\"STRING\" size=\"256\"/><Column id=\"자재ID\" type=\"STRING\" size=\"256\"/><Column id=\"자재VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"검사여부\" type=\"STRING\" size=\"256\"/><Column id=\"판정결과\" type=\"STRING\" size=\"256\"/><Column id=\"성적서접수여부\" type=\"STRING\" size=\"256\"/><Column id=\"설명\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"검사방법명\" type=\"STRING\" size=\"256\"/><Column id=\"검사항목명\" type=\"STRING\" size=\"256\"/><Column id=\"판정결과\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd02", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"검사방법명\" type=\"STRING\" size=\"256\"/><Column id=\"검사항목명\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"측정값\" type=\"STRING\" size=\"256\"/><Column id=\"판정결과\" type=\"STRING\" size=\"256\"/><Column id=\"검사기준\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd03", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"발주번호\" type=\"STRING\" size=\"256\"/><Column id=\"입하번호\" type=\"STRING\" size=\"256\"/><Column id=\"자재LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"입하일시\" type=\"STRING\" size=\"256\"/><Column id=\"접수일시\" type=\"STRING\" size=\"256\"/><Column id=\"완료일시\" type=\"STRING\" size=\"256\"/><Column id=\"거래처명\" type=\"STRING\" size=\"256\"/><Column id=\"자재명\" type=\"STRING\" size=\"256\"/><Column id=\"자재ID\" type=\"STRING\" size=\"256\"/><Column id=\"자재VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"검사여부\" type=\"STRING\" size=\"256\"/><Column id=\"판정결과\" type=\"STRING\" size=\"256\"/><Column id=\"성적서접수여부\" type=\"STRING\" size=\"256\"/><Column id=\"설명\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd04", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"검사방법명\" type=\"STRING\" size=\"256\"/><Column id=\"검사항목명\" type=\"STRING\" size=\"256\"/><Column id=\"검사수량\" type=\"STRING\" size=\"256\"/><Column id=\"불량수량\" type=\"STRING\" size=\"256\"/><Column id=\"불량율\" type=\"STRING\" size=\"256\"/><Column id=\"판정결과\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd05", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"검사방법명\" type=\"STRING\" size=\"256\"/><Column id=\"검사항목명\" type=\"STRING\" size=\"256\"/><Column id=\"단위\" type=\"STRING\" size=\"256\"/><Column id=\"측정값\" type=\"STRING\" size=\"256\"/><Column id=\"판정결과\" type=\"STRING\" size=\"256\"/><Column id=\"검사기준\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_taborder("12");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label02","0","85","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("13");
            obj.set_text("검사 여부");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_00","171","200","102","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_01","15","200","146","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip00",null,"110","15","97","0",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("14");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip01","0","105","15","97",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("15");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("16");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"180","45","20","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("17");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","206","10","27",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("18");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label03","0","110","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("19");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("20");
            obj.set_text("입하 기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_01","108","110",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("5");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search01",null,"110","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_02","108","135",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("7");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search02",null,"135","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_00","10","60","94","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("2");
            obj.set_cssclass("cmb_SA_label");
            obj.set_text("금일");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_00","108","35",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_01","108","60",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_01","108","160","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("9");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label04","0","135","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("21");
            obj.set_text("자재");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label05","0","160","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("22");
            obj.set_text("판정 결과");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_02","108","10","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("0");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_03","108","85","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("4");
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

            obj = new Tab("tab_00","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_00);
            obj.set_text("원자재");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Static("title1","0","0","205","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("원자재 수입검사 결과 현황 <fc v=\"#f31d24\">2</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnExcelUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tab("tab_00","0","45.5%",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_00.Tabpage1.form.tab_00);
            obj.set_text("외관 검사");
            this.div_work.form.tab_00.Tabpage1.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","10",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage1.form.tab_00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_grd01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사 방법 명\"/><Cell col=\"2\" text=\"검사항목명\"/><Cell col=\"3\" text=\"판정결과\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:검사방법명\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:검사항목명\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:판정결과\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage1.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_00.Tabpage1.form.tab_00);
            obj.set_text("측정 검사");
            this.div_work.form.tab_00.Tabpage1.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","10",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage1.form.tab_00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_grd02");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사방법명\"/><Cell col=\"2\" text=\"검사항목명\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"측정값\"/><Cell col=\"5\" text=\"판정결과\"/><Cell col=\"6\" text=\"검사기준\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:검사방법명\"/><Cell col=\"2\" text=\"bind:검사항목명\"/><Cell col=\"3\" text=\"bind:단위\"/><Cell col=\"4\" text=\"bind:측정값\"/><Cell col=\"5\" text=\"bind:판정결과\"/><Cell col=\"6\" text=\"bind:검사기준\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage1.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("title2","0",null,"66","34",null,"tab_00:0",null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("판정결과");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Grid("grd_01","0","34",null,null,"0","title2:0",null,null,null,null,this.div_work.form.tab_00.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"150\"/><Column size=\"140\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"발주번호\"/><Cell col=\"3\" text=\"입하번호\"/><Cell col=\"4\" text=\"자재 LOT NO\"/><Cell col=\"5\" text=\"입하일시\"/><Cell col=\"6\" text=\"접수일시\"/><Cell col=\"7\" text=\"완료일시\"/><Cell col=\"8\" text=\"거래처명\"/><Cell col=\"9\" text=\"자재명\"/><Cell col=\"10\" text=\"자재ID\"/><Cell col=\"11\" text=\"자재 VERSION\"/><Cell col=\"12\" text=\"수량\"/><Cell col=\"13\" text=\"단위\"/><Cell col=\"14\" text=\"검사여부\"/><Cell col=\"15\" text=\"판정결과\"/><Cell col=\"16\" text=\"성적서접수여부\"/><Cell col=\"17\" text=\"설명\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:발주번호\"/><Cell col=\"3\" text=\"bind:입하번호\"/><Cell col=\"4\" text=\"bind:자재LOTNO\"/><Cell col=\"5\" text=\"bind:입하일시\"/><Cell col=\"6\" text=\"bind:접수일시\"/><Cell col=\"7\" text=\"bind:완료일시\"/><Cell col=\"8\" text=\"bind:거래처명\"/><Cell col=\"9\" text=\"bind:자재명\"/><Cell col=\"10\" text=\"bind:자재ID\"/><Cell col=\"11\" text=\"bind:자재VERSION\"/><Cell col=\"12\" text=\"bind:수량\"/><Cell col=\"13\" text=\"bind:단위\"/><Cell col=\"14\" text=\"bind:검사여부\"/><Cell col=\"15\" text=\"bind:판정결과\"/><Cell col=\"16\" text=\"bind:성적서접수여부\"/><Cell col=\"17\" text=\"bind:설명\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_00);
            obj.set_text("원자재 가공품(입하)");
            this.div_work.form.tab_00.addChild(obj.name, obj);

            obj = new Static("title1","0","0","290","34",null,null,null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("원자재 가공품(입하) 수입검사 결과 현황 <fc v=\"#f31d24\">2</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Tab("tab_00","0","45.5%",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_tabindex("0");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab_00.Tabpage2.form.tab_00);
            obj.set_text("외관 검사");
            this.div_work.form.tab_00.Tabpage2.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","10",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage2.form.tab_00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_grd04");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사 방법 명\"/><Cell col=\"2\" text=\"검사항목명\"/><Cell col=\"3\" text=\"검사 수량\"/><Cell col=\"4\" text=\"불량수량\"/><Cell col=\"5\" text=\"불량율\"/><Cell col=\"6\" text=\"판정결과\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:검사방법명\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:검사항목명\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:검사수량\"/><Cell col=\"4\" text=\"bind:불량수량\"/><Cell col=\"5\" text=\"bind:불량율\"/><Cell col=\"6\" text=\"bind:판정결과\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage2.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab_00.Tabpage2.form.tab_00);
            obj.set_text("측정 검사");
            this.div_work.form.tab_00.Tabpage2.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","10",null,null,"0","0",null,null,null,null,this.div_work.form.tab_00.Tabpage2.form.tab_00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_grd05");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"검사방법명\"/><Cell col=\"2\" text=\"검사항목명\"/><Cell col=\"3\" text=\"단위\"/><Cell col=\"4\" text=\"측정값\"/><Cell col=\"5\" text=\"판정결과\"/><Cell col=\"6\" text=\"검사기준\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:검사방법명\"/><Cell col=\"2\" text=\"bind:검사항목명\"/><Cell col=\"3\" text=\"bind:단위\"/><Cell col=\"4\" text=\"bind:측정값\"/><Cell col=\"5\" text=\"bind:판정결과\"/><Cell col=\"6\" text=\"bind:검사기준\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage2.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("title2","0",null,"66","34",null,"tab_00:0",null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_text("판정결과");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Grid("grd_01","0","34",null,null,"0","title2:0",null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_grd03");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"30\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"140\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"140\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"발주번호\"/><Cell col=\"3\" text=\"입하번호\"/><Cell col=\"4\" text=\"자재 Lot ID\"/><Cell col=\"5\" text=\"입하일시\"/><Cell col=\"6\" text=\"접수일시\"/><Cell col=\"7\" text=\"완료일시\"/><Cell col=\"8\" text=\"거래처명\"/><Cell col=\"9\" text=\"자재명\"/><Cell col=\"10\" text=\"자재ID\"/><Cell col=\"11\" text=\"자재 VERSION\"/><Cell col=\"12\" text=\"수량\"/><Cell col=\"13\" text=\"단위\"/><Cell col=\"14\" text=\"검사여부\"/><Cell col=\"15\" text=\"판정결과\"/><Cell col=\"16\" text=\"성적서 접수 여부\"/><Cell col=\"17\" text=\"설명\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:발주번호\"/><Cell col=\"3\" text=\"bind:입하번호\"/><Cell col=\"4\" text=\"bind:자재LOTID\"/><Cell col=\"5\" text=\"bind:입하일시\"/><Cell col=\"6\" text=\"bind:접수일시\"/><Cell col=\"7\" text=\"bind:완료일시\"/><Cell col=\"8\" text=\"bind:거래처명\"/><Cell col=\"9\" text=\"bind:자재명\"/><Cell col=\"10\" text=\"bind:자재ID\"/><Cell col=\"11\" text=\"bind:자재VERSION\"/><Cell col=\"12\" text=\"bind:수량\"/><Cell col=\"13\" text=\"bind:단위\"/><Cell col=\"14\" text=\"bind:검사여부\"/><Cell col=\"15\" text=\"bind:판정결과\"/><Cell col=\"16\" text=\"bind:성적서접수여부\"/><Cell col=\"17\" text=\"bind:설명\"/></Band></Format></Formats>");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btnExcelUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab_00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Spin("spn_00",null,"9","150","20","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_value("1");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("label01",null,"9","103","20","spn_00:10",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("페이지 수");
            obj.set_cssclass("sta_WF_detailLabel2");
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

            obj = new Static("sta_title","30","16","188","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("(결과등록)원자재/가공품");
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
        this.loadIncludeScript("template25.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
