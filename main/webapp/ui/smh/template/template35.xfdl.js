(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template35");
            this.set_titletext("조회조건+디테일T+그리드M+조회영역M+그리드B");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"작업장\" type=\"STRING\" size=\"256\"/><Column id=\"협력사명\" type=\"STRING\" size=\"256\"/><Column id=\"제품불량\" type=\"STRING\" size=\"256\"/><Column id=\"선별비용\" type=\"STRING\" size=\"256\"/><Column id=\"자재LOSS\" type=\"STRING\" size=\"256\"/><Column id=\"기타비용금액\" type=\"STRING\" size=\"256\"/><Column id=\"당월합계\" type=\"STRING\" size=\"256\"/><Column id=\"이월금액\" type=\"STRING\" size=\"256\"/><Column id=\"총계\" type=\"STRING\" size=\"256\"/><Column id=\"처리금액\" type=\"STRING\" size=\"256\"/><Column id=\"잔여금액\" type=\"STRING\" size=\"256\"/><Column id=\"감면금액\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"공정그룹명\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"원인작업장명\" type=\"STRING\" size=\"256\"/><Column id=\"협력사명\" type=\"STRING\" size=\"256\"/><Column id=\"품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"Rev\" type=\"STRING\" size=\"256\"/><Column id=\"품목명\" type=\"STRING\" size=\"256\"/><Column id=\"LotNo\" type=\"STRING\" size=\"256\"/><Column id=\"불량코드\" type=\"STRING\" size=\"256\"/><Column id=\"불량명\" type=\"STRING\" size=\"256\"/><Column id=\"불량수량\" type=\"STRING\" size=\"256\"/><Column id=\"불량반영금액\" type=\"STRING\" size=\"256\"/><Column id=\"감면수\" type=\"STRING\" size=\"256\"/><Column id=\"수량감면액\" type=\"STRING\" size=\"256\"/><Column id=\"감면율\" type=\"STRING\" size=\"256\"/><Column id=\"비율감면액\" type=\"STRING\" size=\"256\"/><Column id=\"금액\" type=\"STRING\" size=\"256\"/><Column id=\"발견공정\" type=\"STRING\" size=\"256\"/><Column id=\"생성자명\" type=\"STRING\" size=\"256\"/><Column id=\"확정자\" type=\"STRING\" size=\"256\"/><Column id=\"설명\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_00","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_00);
            obj.set_text("Tabpage1");
            this.tab_00.addChild(obj.name, obj);

            obj = new Combo("cmb_00","108","10","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("9");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("10");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00_00","161","156","10","27",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("11");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","150","146","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","150","102","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"130","45","20","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("12");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("13");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label02","0","35","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("14");
            obj.set_text("마감년월");
            obj.set_cssclass("sta_WF_label_point");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label03","0","60","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("15");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label04","0","85","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("16");
            obj.set_text("협력사 ID");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label05","0","110","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("17");
            obj.set_text("협력사 명");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_02","108","35","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_00","108","60",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("2");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"60","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_01","108","85",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("4");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search01",null,"85","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_02","108","110","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("6");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_00);
            obj.set_text("Tabpage2");
            this.tab_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","47","191","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","tab_00:10","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","34",null,"32","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","120","31",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("마감상태");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_00","Static30:5","5","14.64%","20",null,null,null,null,null,null,this.div_work.form.Div01.form);
            obj.set_taborder("1");
            this.div_work.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","66","108","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("Claim 마감집계");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("divSearch02_00_00_00","0","54.86%",null,"67","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_search");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"0","18","97","86",null,null,null,null,null,this.div_work.form.divSearch02_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("w\r\n18");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Static("label00","0","10","10.46%","20",null,null,null,null,null,null,this.div_work.form.divSearch02_00_00_00.form);
            obj.set_taborder("0");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label");
            this.div_work.form.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Static("label01","45%","10","10.46%","20",null,null,null,null,null,null,this.div_work.form.divSearch02_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("협력사 ID");
            obj.set_cssclass("sta_WF_label");
            this.div_work.form.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Static("label02","0","35","10.46%","20",null,null,null,null,null,null,this.div_work.form.divSearch02_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("공정명");
            obj.set_cssclass("sta_WF_label");
            this.div_work.form.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.div_work.form.divSearch02_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Static("label03","45%","35","10.46%","20",null,null,null,null,null,null,this.div_work.form.divSearch02_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("비용구분");
            obj.set_cssclass("sta_WF_label");
            this.div_work.form.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.div_work.form.divSearch02_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"31","46","24","39",null,null,null,null,null,this.div_work.form.divSearch02_00_00_00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.div_work.form.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"31","24","24","10",null,null,null,null,null,this.div_work.form.divSearch02_00_00_00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_reset2");
            this.div_work.form.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_01_00",null,null,"10","40","0","10",null,null,null,null,this.div_work.form.divSearch02_00_00_00.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_work.form.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"10","22","20","label01:0",null,null,null,null,null,this.div_work.form.divSearch02_00_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt_00","label00:10","10",null,"20","btn_search00:0",null,null,null,null,null,this.div_work.form.divSearch02_00_00_00.form);
            obj.set_taborder("10");
            this.div_work.form.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_search01",null,"10","22","20","104",null,null,null,null,null,this.div_work.form.divSearch02_00_00_00.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt_01","label01:10","10",null,"20","btn_search01:0",null,null,null,null,null,this.div_work.form.divSearch02_00_00_00.form);
            obj.set_taborder("12");
            this.div_work.form.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_search02",null,"35","22","20","label03:0",null,null,null,null,null,this.div_work.form.divSearch02_00_00_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt_02","label02:10","35",null,"20","btn_search02:0",null,null,null,null,null,this.div_work.form.divSearch02_00_00_00.form);
            obj.set_taborder("14");
            this.div_work.form.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb_00","label03:10","35","15.69%","20",null,null,null,null,null,null,this.div_work.form.divSearch02_00_00_00.form);
            obj.set_taborder("16");
            this.div_work.form.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","100",null,null,"0","divSearch02_00_00_00:34",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"180\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"작업장\"/><Cell col=\"2\" text=\"협력사 명\"/><Cell col=\"3\" text=\"제품불량\"/><Cell col=\"4\" text=\"선별비용\"/><Cell col=\"5\" text=\"자재LOSS\"/><Cell col=\"6\" text=\"기타비용금액\"/><Cell col=\"7\" text=\"당월합계\"/><Cell col=\"8\" text=\"이월금액\"/><Cell col=\"9\" text=\"총계\"/><Cell col=\"10\" text=\"처리금액(I/F)\"/><Cell col=\"11\" text=\"잔여금액\"/><Cell col=\"12\" text=\"감면금액\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:작업장\"/><Cell col=\"2\" text=\"bind:협력사명\"/><Cell col=\"3\" text=\"bind:제품불량\"/><Cell col=\"4\" text=\"bind:선별비용\"/><Cell col=\"5\" text=\"bind:자재LOSS\"/><Cell col=\"6\" text=\"bind:기타비용금액\"/><Cell col=\"7\" text=\"bind:당월합계\"/><Cell col=\"8\" text=\"bind:이월금액\"/><Cell col=\"9\" text=\"bind:총계\"/><Cell col=\"10\" text=\"bind:처리금액\"/><Cell col=\"11\" text=\"bind:잔여금액\"/><Cell col=\"12\" text=\"bind:감면금액\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"40,000\"/><Cell col=\"8\" text=\"15,000\"/><Cell col=\"9\" text=\"55,000\"/><Cell col=\"10\" text=\"48,000\"/><Cell col=\"11\" text=\"6,000\"/><Cell col=\"12\" text=\"1,000\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnExcelUp",null,"72","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","grd_00:0","141","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("Claim 마감내역 조회");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static01_01","0","divSearch02_00_00_00:0","113","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_text("Claim 대상 목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_00_00","0","divSearch02_00_00_00:34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_grd01");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정그룹명\"/><Cell col=\"2\" text=\"공정명\"/><Cell col=\"3\" text=\"원인작업장명\"/><Cell col=\"4\" text=\"협력사 명\"/><Cell col=\"5\" text=\"품목코드\"/><Cell col=\"6\" text=\"Rev\"/><Cell col=\"7\" text=\"품목명\"/><Cell col=\"8\" text=\"Lot No.\"/><Cell col=\"9\" text=\"불량 코드\"/><Cell col=\"10\" text=\"불량명\"/><Cell col=\"11\" text=\"불량 수량\"/><Cell col=\"12\" text=\"불량반영금액\"/><Cell col=\"13\" text=\"감면수\"/><Cell col=\"14\" text=\"수량감면액\"/><Cell col=\"15\" text=\"감면율(%)\"/><Cell col=\"16\" text=\"비율감면액\"/><Cell col=\"17\" text=\"금액\"/><Cell col=\"18\" text=\"발견공정\"/><Cell col=\"19\" text=\"생성자명\"/><Cell col=\"20\" text=\"확정자\"/><Cell col=\"21\" text=\"설명\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:공정그룹명\"/><Cell col=\"2\" text=\"bind:공정명\"/><Cell col=\"3\" text=\"bind:원인작업장명\"/><Cell col=\"4\" text=\"bind:협력사명\"/><Cell col=\"5\" text=\"bind:품목코드\"/><Cell col=\"6\" text=\"bind:Rev\"/><Cell col=\"7\" text=\"bind:품목명\"/><Cell col=\"8\" text=\"bind:LotNo\"/><Cell col=\"9\" text=\"bind:불량코드\"/><Cell col=\"10\" text=\"bind:불량명\"/><Cell col=\"11\" text=\"bind:불량수량\"/><Cell col=\"12\" text=\"bind:불량반영금액\"/><Cell col=\"13\" text=\"bind:감면수\"/><Cell col=\"14\" text=\"bind:수량감면액\"/><Cell col=\"15\" text=\"bind:감면율\"/><Cell col=\"16\" text=\"bind:비율감면액\"/><Cell col=\"17\" text=\"bind:금액\"/><Cell col=\"18\" text=\"bind:발견공정\"/><Cell col=\"19\" text=\"bind:생성자명\"/><Cell col=\"20\" text=\"bind:확정자\"/><Cell col=\"21\" text=\"bind:설명\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btnExcelUp00",null,"divSearch02_00_00_00:6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("엑셀업로드");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_print:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","128","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_text("Claim 마감 현황");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
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
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("template35.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
