(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("template01");
            this.set_titletext("조회영역(새로형)");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1332,1248);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmb00", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">CCT</Col></Row><Row><Col id=\"data\">IFC</Col></Row><Row><Col id=\"data\">IFV</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb01", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">금일</Col></Row><Row><Col id=\"data\">전일</Col></Row><Row><Col id=\"data\">금주</Col></Row><Row><Col id=\"data\">전주</Col></Row><Row><Col id=\"data\">금월</Col></Row><Row><Col id=\"data\">사용자정의</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb02", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체조회</Col></Row><Row><Col id=\"data\">변경</Col></Row><Row><Col id=\"data\">신규</Col></Row><Row><Col id=\"data\">동일</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb03", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"data\">전체조회</Col></Row><Row><Col id=\"data\">양산</Col></Row><Row><Col id=\"data\">샘플</Col></Row><Row><Col id=\"data\">시양산</Col></Row><Row><Col id=\"data\">Test</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_00","310","200","290","596",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_00);
            obj.set_text("Tabpage1");
            this.tab_00.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("19");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("Combo00","108","10","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb00");
            obj.set_text("IFC");
            obj.set_value("");
            obj.set_index("1");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("20");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_00","108","35",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("cmb_00","10","60","94","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("2");
            obj.set_cssclass("cmb_SA_label");
            obj.set_innerdataset("ds_cmb01");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("사용자정의");
            obj.set_value("");
            obj.set_index("5");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Calendar("cal_01","108","60",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label02","0","85","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("21");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_00","108","85",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("4");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"85","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("Combo01","108","110","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("6");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb02");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label03","0","110","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("22");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label04","0","135","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("23");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("Combo01_00","108","135","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("7");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb03");
            obj.set_text("양산");
            obj.set_value("");
            obj.set_index("0");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label05","0","160","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("24");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label06","0","185","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("25");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label07","0","210","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("26");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label08","0","235","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("27");
            obj.set_text("CAM 상태");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label09","0","260","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("28");
            obj.set_text("사양담당자");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("label10","0","285","103","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("29");
            obj.set_text("CAM담당자");
            obj.set_cssclass("sta_WF_label");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_01","108","160",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("8");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search01",null,"160","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_02","108","185",null,"20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("10");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("Combo01_01","108","210","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("11");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb02");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Combo("Combo01_00_00","108","235","165","20",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("12");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_innerdataset("ds_cmb03");
            obj.set_text("양산");
            obj.set_value("");
            obj.set_index("0");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_03","108","260",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("13");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search01_00",null,"260","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Edit("edt_04","108","285",null,"20","37",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("15");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search01_00_00",null,"285","22","20","15",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("Button44_00_01","171","325","107","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Button("Button45_00","15","325","146","36",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("검색");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"70","15","97","0",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("30");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("31");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("32");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("33");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"305","45","20","91",null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("34");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","331","10","27",null,null,null,null,null,null,this.tab_00.Tab1.form);
            obj.set_taborder("35");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_00.Tab1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_00);
            obj.set_text("Tabpage2");
            this.tab_00.addChild(obj.name, obj);

            obj = new Static("Static14","0","0",null,"51","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회영역(새로형)");
            obj.set_cssclass("sta_guide_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","42","70","172","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회영역 width 290px");
            obj.set_cssclass("txt_13B");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","310","200","206","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00_02_00","577","174","119","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("cssclass : tab_search");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00_00_01_00","531","185","40","57",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00_00_01_00_00","350","184","40","29",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00_02_00_00","396","173","132","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("cssclass : sta_WF_subTitle");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01","735","234","473","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Misc./usedecorate : true\r\nAction/text : 서브타이틀  <fc v=\"#f31d24\">2,300</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_helpInfo");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_02","310","777","290","50",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("290");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00","602","234","70","562",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("562px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00","602","200","70","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("34px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00","735","360","320","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("조회영역은 Tab으로 구성되어있습니다.");
            obj.set_cssclass("sta_WF_helpTxt");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_00_00","735","380","374","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("탭버튼의 Height는 34px이며 위에 서브타이틀로 가려서 사용됩니다.");
            obj.set_cssclass("sta_WF_helpTxt");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_01","298","229","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("guide_cssLine_TL");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_01","146","218","142","21",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("cssclass : sta_WF_label");
            obj.set_cssclass("sta_guide_status");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_01_00","298","279","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("guide_cssLine_TL");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_01_00","146","268","142","21",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("cssclass : cmb_SA_label");
            obj.set_cssclass("sta_guide_status");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05","278","589","121","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("guide_cssLine_BL");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00_00","126","595","143","21",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("cssclass : btn_SA_search");
            obj.set_cssclass("sta_guide_status");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00","531","588","151","20",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("guide_cssLine_BR");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00","687","594","151","21",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("cssclass : btn_SA_reset");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","735","191","206","34",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("서브타이틀  <fc v=\"#f31d24\">2,300</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1332,1248,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Guide_03_1.xfdl", function() {
        this.form_onload = function(obj,e)
        {
        	this.divSearch.form.set_scrollbartype("none");
        	this.divSearch00.form.set_scrollbartype("none");
        	this.divSearch01.form.set_scrollbartype("none");
        	this.divSearch02.form.set_scrollbartype("none");
        	this.divSearch03.form.set_scrollbartype("none");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("Guide_03_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
