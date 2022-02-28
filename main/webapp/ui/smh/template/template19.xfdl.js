(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template19");
            this.set_titletext("조회조건+Master Tab2(복합)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd00", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"RC요청상태\" type=\"STRING\" size=\"256\"/><Column id=\"변경점신청일\" type=\"STRING\" size=\"256\"/><Column id=\"변경구분\" type=\"STRING\" size=\"256\"/><Column id=\"적용구분\" type=\"STRING\" size=\"256\"/><Column id=\"고객사기존\" type=\"STRING\" size=\"256\"/><Column id=\"품목기존\" type=\"STRING\" size=\"256\"/><Column id=\"품목Rev기존\" type=\"STRING\" size=\"256\"/><Column id=\"품목명기존\" type=\"STRING\" size=\"256\"/><Column id=\"사양담당기존\" type=\"STRING\" size=\"256\"/><Column id=\"고객사변경\" type=\"STRING\" size=\"256\"/><Column id=\"품목변경\" type=\"STRING\" size=\"256\"/><Column id=\"품목Rev변경\" type=\"STRING\" size=\"256\"/><Column id=\"품목명변경\" type=\"STRING\" size=\"256\"/><Column id=\"사양담당변경\" type=\"STRING\" size=\"256\"/><Column id=\"변경점신청부서\" type=\"STRING\" size=\"256\"/><Column id=\"의뢰자명\" type=\"STRING\" size=\"256\"/><Column id=\"변경사유\" type=\"STRING\" size=\"256\"/><Column id=\"변경점관리번호\" type=\"STRING\" size=\"256\"/><Column id=\"관리번호\" type=\"STRING\" size=\"256\"/><Column id=\"설명\" type=\"STRING\" size=\"256\"/><Column id=\"수주처\" type=\"STRING\" size=\"256\"/><Column id=\"매출처\" type=\"STRING\" size=\"256\"/><Column id=\"진행상태\" type=\"STRING\" size=\"256\"/><Column id=\"유효상태\" type=\"STRING\" size=\"256\"/><Column id=\"생성자\" type=\"STRING\" size=\"256\"/><Column id=\"생성일\" type=\"STRING\" size=\"256\"/><Column id=\"수정자\" type=\"STRING\" size=\"256\"/><Column id=\"수정일\" type=\"STRING\" size=\"256\"/><Column id=\"Interface실행여부\" type=\"STRING\" size=\"256\"/><Column id=\"Interface결과\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd01", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"파일명\" type=\"STRING\" size=\"256\"/><Column id=\"확장자\" type=\"STRING\" size=\"256\"/><Column id=\"파일크기\" type=\"STRING\" size=\"256\"/><Column id=\"내용\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd02_1", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"SiteID\" type=\"STRING\" size=\"256\"/><Column id=\"공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"공정ID\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"공정\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd02_2", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"SiteID\" type=\"STRING\" size=\"256\"/><Column id=\"공정수순\" type=\"STRING\" size=\"256\"/><Column id=\"공정ID\" type=\"STRING\" size=\"256\"/><Column id=\"공정명\" type=\"STRING\" size=\"256\"/><Column id=\"공정\" type=\"STRING\" size=\"256\"/><Column id=\"자재\" type=\"STRING\" size=\"256\"/><Column id=\"SPEC\" type=\"STRING\" size=\"256\"/><Column id=\"치공구\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd_t2_011", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"자재품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"자재품목명\" type=\"STRING\" size=\"256\"/><Column id=\"버전\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd_t2_012", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"검사항목\" type=\"STRING\" size=\"256\"/><Column id=\"상한값1\" type=\"STRING\" size=\"256\"/><Column id=\"기준값1\" type=\"STRING\" size=\"256\"/><Column id=\"하한값1\" type=\"STRING\" size=\"256\"/><Column id=\"상한값2\" type=\"STRING\" size=\"256\"/><Column id=\"기준값2\" type=\"STRING\" size=\"256\"/><Column id=\"하한값2\" type=\"STRING\" size=\"256\"/><Column id=\"상한값3\" type=\"STRING\" size=\"256\"/><Column id=\"기준값3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd_t2_013", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"치공구ID\" type=\"STRING\" size=\"256\"/><Column id=\"치공구Rev\" type=\"STRING\" size=\"256\"/><Column id=\"치공구명\" type=\"STRING\" size=\"256\"/><Column id=\"Layer1\" type=\"STRING\" size=\"256\"/><Column id=\"Layer2\" type=\"STRING\" size=\"256\"/><Column id=\"치공구유형\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd_t2_021", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"자재품목코드\" type=\"STRING\" size=\"256\"/><Column id=\"자재품목명\" type=\"STRING\" size=\"256\"/><Column id=\"버전\" type=\"STRING\" size=\"256\"/><Column id=\"수량\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd_t2_022", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"검사항목\" type=\"STRING\" size=\"256\"/><Column id=\"상한값1\" type=\"STRING\" size=\"256\"/><Column id=\"기준값1\" type=\"STRING\" size=\"256\"/><Column id=\"하한값1\" type=\"STRING\" size=\"256\"/><Column id=\"상한값2\" type=\"STRING\" size=\"256\"/><Column id=\"기준값2\" type=\"STRING\" size=\"256\"/><Column id=\"하한값2\" type=\"STRING\" size=\"256\"/><Column id=\"상한값3\" type=\"STRING\" size=\"256\"/><Column id=\"기준값3\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd_t2_023", this);
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"치공구ID\" type=\"STRING\" size=\"256\"/><Column id=\"치공구Rev\" type=\"STRING\" size=\"256\"/><Column id=\"치공구명\" type=\"STRING\" size=\"256\"/><Column id=\"Layer1\" type=\"STRING\" size=\"256\"/><Column id=\"Layer2\" type=\"STRING\" size=\"256\"/><Column id=\"치공구유형\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("sta_title","30","16","74","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_text("사양관리");
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
            obj.set_taborder("0");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("2");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_00","10","60","94","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("4");
            obj.set_cssclass("cmb_SA_label");
            obj.set_innerdataset("ds_cmb01");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("사용자정의");
            obj.set_value("");
            obj.set_index("5");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label02","0","85","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("6");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label03","0","110","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("10");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label04","0","135","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("11");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label05","0","160","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("12");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label06","0","185","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("13");
            obj.set_text("사양담당자");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label07","0","210","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("14");
            obj.set_text("R/C 등록여부");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("Combo00","108","10","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb00");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_00","108","35",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_01","108","60",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_00","108","85",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("7");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"85","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("Combo01","108","110","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("9");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb02");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_01","108","135",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("15");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search01",null,"135","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_02","108","160",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("17");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("Combo01_01","108","210","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("18");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb02");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_03","108","185",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("19");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search02",null,"185","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","250","102","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("21");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","250","146","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("22");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"230","45","20","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("23");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00_00","161","256","10","27",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("24");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","0","47","162","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Tab("tab","0","0",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_master");
            this.div_work.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab);
            obj.set_text("변경등록");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Grid("grd_basIdclass","0","34",null,null,"0","288",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_grd00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"R/C 요청상태\"/><Cell col=\"2\" text=\"변경점 신청일\"/><Cell col=\"3\" text=\"변경구분\"/><Cell col=\"4\" text=\"적용구분\"/><Cell col=\"5\" text=\"고객사(기존)\"/><Cell col=\"6\" text=\"품목(기존)\"/><Cell col=\"7\" text=\"품목 Rev.(기존)\"/><Cell col=\"8\" text=\"품목명(기존)\"/><Cell col=\"9\" text=\"사양담당(기존)\"/><Cell col=\"10\" text=\"고객사(변경)\"/><Cell col=\"11\" text=\"품목(변경)\"/><Cell col=\"12\" text=\"품목Rev.(변경)\"/><Cell col=\"13\" text=\"품목명(변경)\"/><Cell col=\"14\" text=\"사양담당(변경)\"/><Cell col=\"15\" text=\"변경점 신청부서\"/><Cell col=\"16\" text=\"의뢰자명\"/><Cell col=\"17\" text=\"변경사유\"/><Cell col=\"18\" text=\"변경점 관리번호\"/><Cell col=\"19\" text=\"관리번호\"/><Cell col=\"20\" text=\"설명\"/><Cell col=\"21\" text=\"수주처\"/><Cell col=\"22\" text=\"매출처\"/><Cell col=\"23\" text=\"진행상태\"/><Cell col=\"24\" text=\"유효상태\"/><Cell col=\"25\" text=\"생성자\"/><Cell col=\"26\" text=\"생성일\"/><Cell col=\"27\" text=\"수정자\"/><Cell col=\"28\" text=\"수정일\"/><Cell col=\"29\" text=\"Interface실행여부\"/><Cell col=\"30\" text=\"Interface결과\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:RC요청상태\"/><Cell col=\"2\" text=\"bind:변경점신청일\"/><Cell col=\"3\" text=\"bind:변경구분\"/><Cell col=\"4\" text=\"bind:적용구분\"/><Cell col=\"5\" text=\"bind:고객사기존\"/><Cell col=\"6\" text=\"bind:품목기존\"/><Cell col=\"7\" text=\"bind:품목Rev기존\"/><Cell col=\"8\" text=\"bind:품목명기존\"/><Cell col=\"9\" text=\"bind:사양담당기존\"/><Cell col=\"10\" text=\"bind:고객사변경\"/><Cell col=\"11\" text=\"bind:품목변경\"/><Cell col=\"12\" text=\"bind:품목Rev변경\"/><Cell col=\"13\" text=\"bind:품목명변경\"/><Cell col=\"14\" text=\"bind:사양담당변경\"/><Cell col=\"15\" text=\"bind:변경점신청부서\"/><Cell col=\"16\" text=\"bind:의뢰자명\"/><Cell col=\"17\" text=\"bind:변경사유\"/><Cell col=\"18\" text=\"bind:변경점관리번호\"/><Cell col=\"19\" text=\"bind:관리번호\"/><Cell col=\"20\" text=\"bind:설명\"/><Cell col=\"21\" text=\"bind:수주처\"/><Cell col=\"22\" text=\"bind:매출처\"/><Cell col=\"23\" text=\"bind:진행상태\"/><Cell col=\"24\" text=\"bind:유효상태\"/><Cell col=\"25\" text=\"bind:생성자\"/><Cell col=\"26\" text=\"bind:생성일\"/><Cell col=\"27\" text=\"bind:수정자\"/><Cell col=\"28\" text=\"bind:수정일\"/><Cell col=\"29\" text=\"bind:Interface실행여부\"/><Cell col=\"30\" text=\"bind:Interface결과\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_subTitle01","0","0","118","34",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("변경점 이력 현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_xlUp",null,"6","29","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelUp");
            obj.set_tooltiptext("GridImport");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_basIdclass",null,"6","26","24","btn_xlUp:0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Div("Div01","0",null,null,"254","0","0",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label05","60.10%","30","9.54%","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("8");
            obj.set_text("품목명(기존)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("label10","60.10%","55","9.54%","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("9");
            obj.set_text("품목명(변경)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("label00","0","5","10.46%","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("변경구분");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("label02","0","30","10.46%","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("고객사(기존)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("label07","0","55","10.46%","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("3");
            obj.set_text("고객사(변경)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("label08","19.79%","55","9.54%","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("4");
            obj.set_text("품목(변경)");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("label04","39.83%","30","9.54%","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("5");
            obj.set_text("품목 Rev.(기존)");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("label09","39.83%","55","9.54%","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("6");
            obj.set_text("품목 Rev.(변경)");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("label03","19.79%","30","9.54%","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("7");
            obj.set_text("품목(기존)");
            obj.set_cssclass("sta_WF_detailLabel2_P");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("label06","80.13%","30","9.54%","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("10");
            obj.set_text("사양담당(기존)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("label11","80.13%","55","9.54%","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("11");
            obj.set_text("사양담당(변경)");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("label16","0","105","10.36%","114",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("12");
            obj.set_text("변경사유");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("label17","39.75%","105","9.52%","114",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("38");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new TextArea("txt_00","label16:5","105",null,"114","label17:0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("0");
            obj.set_value("가\n나\n다");
            obj.set_cssclass("point");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("label01","39.83%","5","9.54%","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("13");
            obj.set_text("적용구분");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("label12","0","80","10.46%","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("14");
            obj.set_text("변경점 관리번호");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("label13","19.79%","80","9.54%","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("15");
            obj.set_text("요청부서");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("label14","39.83%","80","9.54%","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("16");
            obj.set_text("변경점 요청자");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("label15","60.10%","80","9.54%","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("17");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_detailLabel2");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new CheckBox("chk_00","label00:5","5","90","21",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("18");
            obj.set_text("고객변경");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new CheckBox("chk_01","chk_00:10","5","90","21",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("19");
            obj.set_text("사내변경");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new CheckBox("chk_02","label01:5","5","90","21",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("20");
            obj.set_text("고객변경");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new CheckBox("chk_03","chk_02:10","5","90","21",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("21");
            obj.set_text("사내변경");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"30","22","20","label04:0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_01","label03:5","30",null,"20","btn_search00:0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("22");
            obj.set_text("10400009A1");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_02","label04:5","30",null,"20","label05:0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_03","label05:5","30",null,"20","label06:0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Button("btn_search01",null,"55","22","20","label09:0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_06","label08:5","55",null,"20","btn_search01:0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("26");
            obj.set_cssclass("point");
            obj.set_text("10400009A1");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_07","label09:5","55",null,"20","label10:0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("28");
            obj.set_readonly("true");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_08","label10:5","55",null,"20","label11:0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("29");
            obj.set_readonly("true");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_10","label12:5","80",null,"20","label13:0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_edt_11","label13:5","80",null,"20","label14:0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.set_text("10400009A1");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Calendar("cal_00","label15:5","80","15.69%","20",null,null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_00","label02:5","30",null,"20","label03:0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("33");
            obj.set_readonly("true");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_01","label07:5","55",null,"20","label08:0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("34");
            obj.set_readonly("true");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_02","label14:5","80",null,"20","label15:0",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_03","label06:5","30",null,"20","5",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Combo("cmb_04","label11:5","55",null,"20","5",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Grid("grd_00","label17:5","105",null,"114","5",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("39");
            obj.set_binddataset("ds_grd01");
            obj.set_autoenter("select");
            obj.set_fillareatype("linerow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"200\"/><Column size=\"50\"/><Column size=\"80\"/><Column size=\"181\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"파일명\"/><Cell col=\"3\" text=\"확장자\"/><Cell col=\"4\" text=\"파일크기\"/><Cell col=\"5\" text=\"내용\" cssclass=\"cell_end\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:파일명\"/><Cell col=\"3\" text=\"bind:확장자\"/><Cell col=\"4\" text=\"bind:파일크기\"/><Cell col=\"5\" text=\"bind:내용\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button21_02",null,"223","70","24","5",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("40");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("다운로드");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button21_02_00",null,"223","70","24","78",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("파일삭제");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Button("Button21_02_00_00",null,"223","70","24","151",null,null,null,null,null,this.div_work.form.tab.Tabpage1.form.Div01.form);
            obj.set_taborder("42");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("파일추가");
            this.div_work.form.tab.Tabpage1.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static01_00","0",null,"66","34",null,"254",null,null,null,null,this.div_work.form.tab.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("변경등록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab);
            obj.set_text("Rounting비교");
            this.div_work.form.tab.addChild(obj.name, obj);

            obj = new Tab("tab_01","50.42%","55.11%",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("14");
            obj.set_tabindex("0");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab.Tabpage2.form.tab_01);
            obj.set_text("자재");
            this.div_work.form.tab.Tabpage2.form.tab_01.addChild(obj.name, obj);

            obj = new Grid("grd_t2_021","0","10",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_grd_t2_021");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"190\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자재품목코드\"/><Cell col=\"2\" text=\"자재품목명\"/><Cell col=\"3\" text=\"버전\"/><Cell col=\"4\" text=\"수량\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:자재품목코드\"/><Cell col=\"2\" text=\"bind:자재품목명\"/><Cell col=\"3\" text=\"bind:버전\"/><Cell col=\"4\" text=\"bind:수량\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab.Tabpage2.form.tab_01);
            obj.set_text("공정SPEC");
            this.div_work.form.tab.Tabpage2.form.tab_01.addChild(obj.name, obj);

            obj = new Grid("grd_t2_011","0","10",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_grd_t2_022");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"검사항목\"/><Cell col=\"2\" colspan=\"3\" text=\"SPEC\" cssclass=\"cell_headMaster\"/><Cell col=\"5\" colspan=\"3\" text=\"CONTROL LIMIT\" cssclass=\"cell_headMaster\"/><Cell col=\"8\" colspan=\"2\" text=\"OUTLIER\" cssclass=\"cell_headMaster\"/><Cell row=\"1\" col=\"2\" text=\"상한값\"/><Cell row=\"1\" col=\"3\" text=\"기준값\"/><Cell row=\"1\" col=\"4\" text=\"하한값\"/><Cell row=\"1\" col=\"5\" text=\"상한값\"/><Cell row=\"1\" col=\"6\" text=\"기준값\"/><Cell row=\"1\" col=\"7\" text=\"하한값\"/><Cell row=\"1\" col=\"8\" text=\"상한값\"/><Cell row=\"1\" col=\"9\" text=\"기준값\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:검사항목\"/><Cell col=\"2\" text=\"bind:상한값1\"/><Cell col=\"3\" text=\"bind:기준값1\"/><Cell col=\"4\" text=\"bind:하한값1\"/><Cell col=\"5\" text=\"bind:상한값2\"/><Cell col=\"6\" text=\"bind:기준값2\"/><Cell col=\"7\" text=\"bind:하한값2\"/><Cell col=\"8\" text=\"bind:상한값3\"/><Cell col=\"9\" text=\"bind:기준값3\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab.Tabpage2.form.tab_01);
            obj.set_text("치공구");
            this.div_work.form.tab.Tabpage2.form.tab_01.addChild(obj.name, obj);

            obj = new Grid("grd_t2_013","0","10",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_grd_t2_023");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"치공구 ID\"/><Cell col=\"2\" text=\"치공구 Rev.\"/><Cell col=\"3\" text=\"치공구 명\"/><Cell col=\"4\" text=\"Layer1\"/><Cell col=\"5\" text=\"Layer2\"/><Cell col=\"6\" text=\"치공구 유형\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:치공구ID\"/><Cell col=\"2\" text=\"bind:치공구Rev\"/><Cell col=\"3\" text=\"bind:치공구명\"/><Cell col=\"4\" text=\"bind:Layer1\"/><Cell col=\"5\" text=\"bind:Layer2\"/><Cell col=\"6\" text=\"bind:치공구유형\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.form.tab_01.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_t2_02","50.42%","131",null,null,"0","tab_01:10",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_grd02_2");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Site ID\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"공정ID\"/><Cell col=\"4\" text=\"공정명\"/><Cell col=\"5\" text=\"공정\"/><Cell col=\"6\" text=\"자재\"/><Cell col=\"7\" text=\"SPEC\"/><Cell col=\"8\" text=\"치공구\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:SiteID\"/><Cell col=\"2\" text=\"bind:공정수순\"/><Cell col=\"3\" text=\"bind:공정ID\"/><Cell col=\"4\" text=\"bind:공정명\"/><Cell col=\"5\" text=\"bind:공정\"/><Cell col=\"6\" text=\"bind:자재\"/><Cell col=\"7\" text=\"bind:SPEC\"/><Cell col=\"8\" text=\"bind:치공구\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Tab("tab_00","0","55.11%",null,null,"tab_01:10","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("13");
            obj.set_tabindex("0");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.div_work.form.tab.Tabpage2.form.tab_00);
            obj.set_text("자재");
            this.div_work.form.tab.Tabpage2.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_t2_011","0","10",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_grd_t2_011");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"190\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"자재품목코드\"/><Cell col=\"2\" text=\"자재품목명\"/><Cell col=\"3\" text=\"버전\"/><Cell col=\"4\" text=\"수량\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:자재품목코드\"/><Cell col=\"2\" text=\"bind:자재품목명\"/><Cell col=\"3\" text=\"bind:버전\"/><Cell col=\"4\" text=\"bind:수량\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.div_work.form.tab.Tabpage2.form.tab_00);
            obj.set_text("공정SPEC");
            this.div_work.form.tab.Tabpage2.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_t2_011","0","10",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_grd_t2_012");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" text=\"검사항목\"/><Cell col=\"2\" colspan=\"3\" text=\"SPEC\" cssclass=\"cell_headMaster\"/><Cell col=\"5\" colspan=\"3\" text=\"CONTROL LIMIT\" cssclass=\"cell_headMaster\"/><Cell col=\"8\" colspan=\"2\" text=\"OUTLIER\" cssclass=\"cell_headMaster\"/><Cell row=\"1\" col=\"2\" text=\"상한값\"/><Cell row=\"1\" col=\"3\" text=\"기준값\"/><Cell row=\"1\" col=\"4\" text=\"하한값\"/><Cell row=\"1\" col=\"5\" text=\"상한값\"/><Cell row=\"1\" col=\"6\" text=\"기준값\"/><Cell row=\"1\" col=\"7\" text=\"하한값\"/><Cell row=\"1\" col=\"8\" text=\"상한값\"/><Cell row=\"1\" col=\"9\" text=\"기준값\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:검사항목\"/><Cell col=\"2\" text=\"bind:상한값1\"/><Cell col=\"3\" text=\"bind:기준값1\"/><Cell col=\"4\" text=\"bind:하한값1\"/><Cell col=\"5\" text=\"bind:상한값2\"/><Cell col=\"6\" text=\"bind:기준값2\"/><Cell col=\"7\" text=\"bind:하한값2\"/><Cell col=\"8\" text=\"bind:상한값3\"/><Cell col=\"9\" text=\"bind:기준값3\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.div_work.form.tab.Tabpage2.form.tab_00);
            obj.set_text("치공구");
            this.div_work.form.tab.Tabpage2.form.tab_00.addChild(obj.name, obj);

            obj = new Grid("grd_t2_013","0","10",null,null,"0","0",null,null,null,null,this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage3.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_grd_t2_013");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"치공구 ID\"/><Cell col=\"2\" text=\"치공구 Rev.\"/><Cell col=\"3\" text=\"치공구 명\"/><Cell col=\"4\" text=\"Layer1\"/><Cell col=\"5\" text=\"Layer2\"/><Cell col=\"6\" text=\"치공구 유형\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:치공구ID\"/><Cell col=\"2\" text=\"bind:치공구Rev\"/><Cell col=\"3\" text=\"bind:치공구명\"/><Cell col=\"4\" text=\"bind:Layer1\"/><Cell col=\"5\" text=\"bind:Layer2\"/><Cell col=\"6\" text=\"bind:치공구유형\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.form.tab_00.Tabpage3.addChild(obj.name, obj);

            obj = new Grid("grd_t2_01","0","131",null,null,"grd_t2_02:10","tab_00:10",null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_grd02_1");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"Site ID\"/><Cell col=\"2\" text=\"공정수순\"/><Cell col=\"3\" text=\"공정 ID\"/><Cell col=\"4\" text=\"공정명\"/><Cell col=\"5\" text=\"공정\"/></Band><Band id=\"body\"><Cell text=\"bind:No\"/><Cell col=\"1\" text=\"bind:SiteID\"/><Cell col=\"2\" text=\"bind:공정수순\"/><Cell col=\"3\" text=\"bind:공정ID\"/><Cell col=\"4\" text=\"bind:공정명\"/><Cell col=\"5\" text=\"bind:공정\"/></Band></Format></Formats>");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Div("Div01_00","50.52%","34",null,"63","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","120","31",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01_00.form);
            obj.set_taborder("0");
            obj.set_text("품목(변경)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tab.Tabpage2.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static30_00","0","31","120","31",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01_00.form);
            obj.set_taborder("1");
            obj.set_text("품목명(변경)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tab.Tabpage2.form.Div01_00.addChild(obj.name, obj);

            obj = new Static("Static30_01","50%","0","120","31",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01_00.form);
            obj.set_taborder("2");
            obj.set_text("품목 Rev.(변경)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tab.Tabpage2.form.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_00","Static30:5","5",null,"20","Static30_01:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01_00.form);
            obj.set_taborder("3");
            obj.set_value("1042198G1");
            obj.set_readonly("true");
            obj.set_text("1042198G1");
            this.div_work.form.tab.Tabpage2.form.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_01","Static30_01:5","5",null,"20","5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01_00.form);
            obj.set_taborder("4");
            obj.set_value("FA3");
            obj.set_readonly("true");
            obj.set_text("FA3");
            this.div_work.form.tab.Tabpage2.form.Div01_00.addChild(obj.name, obj);

            obj = new Edit("edt_02","Static30_00:5","36",null,"20","5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01_00.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.div_work.form.tab.Tabpage2.form.Div01_00.addChild(obj.name, obj);

            obj = new Div("Div01","0","34",null,"63","Div01_00:10",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","120","31",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01.form);
            obj.set_taborder("0");
            obj.set_text("품목(기존)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tab.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static30_00","0","31","120","31",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01.form);
            obj.set_taborder("1");
            obj.set_text("품목명(기존)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tab.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Static("Static30_01","50%","0","120","31",null,null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01.form);
            obj.set_taborder("2");
            obj.set_text("품목 Rev.(기존)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            this.div_work.form.tab.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_00","Static30:5","5",null,"20","Static30_01:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01.form);
            obj.set_taborder("3");
            obj.set_value("1042198G1");
            obj.set_readonly("true");
            obj.set_text("1042198G1");
            this.div_work.form.tab.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_01","Static30_01:5","5",null,"20","5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01.form);
            obj.set_taborder("4");
            obj.set_value("FA2");
            obj.set_readonly("true");
            obj.set_text("FA2");
            this.div_work.form.tab.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Edit("edt_02","Static30_00:5","36",null,"20","5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form.Div01.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.div_work.form.tab.Tabpage2.form.Div01.addChild(obj.name, obj);

            obj = new Static("sta_00_00","50.52%","97","57","34","418",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("4");
            obj.set_text("변경 후");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_00","0","97","38","34","920",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_text("기존");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_01",null,"108","60","16","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("6");
            obj.set_text("공정 삭제");
            obj.set_cssclass("txt_12");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_02_00_00",null,"108","16","16","sta_01:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("11");
            obj.set_background("#f6ddda");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_01_00",null,"108","60","16","sta_02_00_00:10",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("7");
            obj.set_text("공정 이동");
            obj.set_cssclass("txt_12");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_02_00",null,"108","16","16","sta_01_00:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("10");
            obj.set_background("#e3f2f9");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00",null,"108","60","16","sta_02_00:10",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("8");
            obj.set_text("공정 추가");
            obj.set_cssclass("txt_12");
            obj.set_fittocontents("width");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta_02",null,"108","16","16","sta_01_00_00:5",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("9");
            obj.set_background("#daeddd");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_02_01",null,"6","103","24","0",null,null,null,null,null,this.div_work.form.tab.Tabpage2.form);
            obj.set_taborder("12");
            obj.set_text("스크롤링 동기");
            obj.set_cssclass("btn_WF_black");
            this.div_work.form.tab.Tabpage2.addChild(obj.name, obj);

            obj = new Static("Static16","1291","167","203","105",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("그리드 셀의 bg관련 cssclass리스트\r\nblue : cell_bg_blue\r\ngreen : cell_bg_green\r\nred : cell_bg_red\r\ngray : cell_bg_gray\r\n를 사용합니다.");
            obj.set_padding("5px");
            obj.set_textAlign("left");
            obj.set_verticalAlign("top");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btn_02_01",null,"88","98","24","-123",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("스크롤링 비동기");
            obj.set_cssclass("btn_WF_green");
            this.addChild(obj.name, obj);
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
        this.loadIncludeScript("template19.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
