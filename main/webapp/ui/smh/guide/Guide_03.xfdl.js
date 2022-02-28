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
            this.set_titletext("조회영역(가로형)");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1332,1088);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">전체</Col><Col id=\"Column1\">전체</Col></Row><Row><Col id=\"Column0\">ABC</Col><Col id=\"Column1\">ABC</Col></Row><Row><Col id=\"Column0\">1234</Col><Col id=\"Column1\">1234</Col></Row><Row><Col id=\"Column0\">abdc</Col><Col id=\"Column1\">abdc</Col></Row><Row><Col id=\"Column0\">가나다Abc123</Col><Col id=\"Column1\">가나다Abc123</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/><Column id=\"Column8\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset02", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\"/><Col id=\"name\">전체</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"name\">ABC</Col></Row><Row><Col id=\"code\"/><Col id=\"name\">1234</Col></Row><Row><Col id=\"code\"/><Col id=\"name\">abdc</Col></Row><Row><Col id=\"code\"/><Col id=\"name\">가나다Abc123</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch02_00","40","378","960","92",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"0","18","97","86",null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("17");
            obj.set_text("w\r\n18");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Static("label00","0","10","7.15%","20",null,null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("1");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Static("label01","18.12%","10","7.15%","20",null,null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("2");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","label00:10","10",null,"20","label01:0",null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("0");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Static("label02","36.25%","10","7.15%","20",null,null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("3");
            obj.set_text("금월");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Static("label04","72.5%","10","7.15%","20",null,null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("10");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Static("label05","0","35","7.15%","20",null,null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("11");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Static("label06","18.12%","35","7.15%","20",null,null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("12");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label_point");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Combo("cmb02","label05:10","35",null,"20","label06:0",null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("4");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Static("label03","54.37%","10","7.15%","20",null,null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("6");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"10","22","20","label04:0",null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Edit("edt_00","label03:10","10",null,"20","btn_search00:0",null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("7");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Calendar("cal_00","label01:10","10",null,"20","label02:0",null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Calendar("cal_00_00","label02:10","10",null,"20","label03:0",null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Static("label07","36.25%","35","7.15%","20",null,null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("13");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Static("label08","54.37%","35","7.15%","20",null,null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("14");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Static("label09","72.5%","35","7.15%","20",null,null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("15");
            obj.set_text("CAM 상태");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("18");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Button("btn_search01",null,"35","22","20","label07:0",null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Edit("edt_01","label06:10","35",null,"20","btn_search01:0",null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("19");
            obj.set_cssclass("point");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Combo("cmb_00","label08:10","35",null,"20","label09:0",null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("21");
            obj.set_text("cmb_00");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Static("label10","0","60","7.15%","20",null,null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("22");
            obj.set_text("사양담당자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("사양담당자");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Static("label11","18.12%","60","7.15%","20",null,null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("23");
            obj.set_text("CAM담당자");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Button("btn_search03",null,"60","22","20","label11:0",null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Edit("edt_03","label10:10","60",null,"20","btn_search03:0",null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("24");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Button("btn_search04",null,"60","22","20","label07:0",null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Edit("edt_04","label11:10","60",null,"20","btn_search04:0",null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("27");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Edit("edt_02","label07:10","35",null,"20","label08:0",null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("28");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"56","4.91%","24","39",null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"56","24","24","10",null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_SA_reset2");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Combo("cmb00","label04:10","10",null,"20","btnSearch:18",null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("31");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Combo("cmb_01","label09:10","35",null,"20","btnSearch:18",null,null,null,null,null,this.divSearch02_00.form);
            obj.set_taborder("32");
            obj.set_text("cmb_01");
            this.divSearch02_00.addChild(obj.name, obj);

            obj = new Static("sta_04_01","1041","138","70","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("40px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","40","599","322","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회영역 1행(조회영역 40px)");
            obj.set_cssclass("txt_13B");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","40","691","322","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회영역 2행(조회영역 65px/행간격 5px)");
            obj.set_cssclass("txt_13B");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","40","810","322","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회영역 3행(조회영역 92px/행간격 5px)");
            obj.set_cssclass("txt_13B");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0","0",null,"51","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회영역(가로형)");
            obj.set_cssclass("sta_guide_Title");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","512","147","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("cmb_SA_label");
            obj.set_innerdataset("Dataset02");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch02","40","138","1258","92",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"0","18","97","102",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("17");
            obj.set_text("w\r\n18");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("label00","0","10","7.15%","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("1");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("label01","18.12%","10","7.15%","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("2");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Combo("Combo00","label00:10","10",null,"20","label01:0",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("0");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("label02","36.25%","10","7.15%","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("3");
            obj.set_text("금월");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("label04","72.5%","10","7.15%","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("10");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("label05","0","35","7.15%","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("11");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("label06","18.12%","35","7.15%","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("12");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label_point");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Combo("cmb02","label05:10","35",null,"20","label06:0",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("4");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("label03","54.37%","10","7.15%","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("6");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"10","22","20","label04:0",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Edit("edt_00","label03:10","10",null,"20","btn_search00:0",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("7");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Calendar("cal_00","label01:10","10",null,"20","label02:0",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Calendar("cal_00_00","label02:10","10",null,"20","label03:0",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("label07","36.25%","35","7.15%","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("13");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("label08","54.37%","35","7.15%","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("14");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("label09","72.5%","35","7.15%","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("15");
            obj.set_text("CAM 상태");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.divSearch02.form);
            obj.set_taborder("18");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Button("btn_search01",null,"35","22","20","label07:0",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Edit("edt_01","label06:10","35",null,"20","btn_search01:0",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("19");
            obj.set_cssclass("point");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Combo("cmb_00","label08:10","35",null,"20","label09:0",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("21");
            obj.set_text("cmb_00");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("label10","0","60","7.15%","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("22");
            obj.set_text("사양담당자");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("label11","18.12%","60","7.15%","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("23");
            obj.set_text("CAM담당자");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Button("btn_search03",null,"60","22","20","label11:0",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Edit("edt_03","label10:10","60",null,"20","btn_search03:0",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("24");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Button("btn_search04",null,"60","22","20","label07:0",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Edit("edt_04","label11:10","60",null,"20","btn_search04:0",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("27");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Edit("edt_02","label07:10","35",null,"20","label08:0",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("28");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"56","5.01%","24","39",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"56","24","24","10",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_SA_reset2");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Combo("cmb00","label04:10","10",null,"20","btnSearch:18",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("31");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Combo("cmb_01","label09:10","35",null,"20","btnSearch:18",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("32");
            obj.set_text("cmb_01");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("sta_04_00","40","108","15","50",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_cssclass("guide_size_HT");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00","1001","628","70","42",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("42px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00","1001","718","70","67",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("67px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00_00","1001","838","70","92",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("92px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00_00_00","308","93","40","85",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00_01","354","82","115","21",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("cssclass : sta_WF_label_point");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00_00_00_00","463","93","89","92",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00_01_00","552","82","152","21",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("cssclass : point");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00_02","822","82","119","21",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("cssclass : sta_WF_label");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00_00_01","776","93","40","57",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","48","970","102","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("알려드립니다");
            obj.set_cssclass("sta_WF_helpNote");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_01","48","999","647","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("입력 컴포넌트들(Edit, MaskEdit, Combo, Spin, Calendar, Textarea)강조 표시는 cssclass : <fc v=\"red\">point</fc>로 동일 합니다.");
            obj.set_cssclass("sta_WF_helpTxt");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00","40","246","228","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("228");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_00","267","246","229","50",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("228");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_00_00","495","246","229","50",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("228");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_01","140","216","128","50",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("128");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01","40","216","90","50",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("90");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_00_00_00","723","246","229","50",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("228");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_00_00_00_00","951","246","229","50",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("228");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_01","40","296","1260","50",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("1260");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","71","298","381","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("기본은 라벨(w90px)+간격(10px) 으로 5칸으로 배치됨.");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_02","40","467","71","37",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("71");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_01_00","119","454","95","50",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("95");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_02","40","486","174","50",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("174");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_00_01","213","486","175","50",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("174");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_00_00_01","387","486","175","50",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("174");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_00_00_00_01","561","486","175","50",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("174");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_00_00_00_00_00","735","486","160","50",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("174");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_01_00_01_00","40","536","960","40",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("960");
            obj.set_cssclass("guide_size_HB");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","42","70","172","28",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("조회영역 width 1260px");
            obj.set_cssclass("txt_13B");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","42","350","172","28",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("조회영역 width 960px");
            obj.set_cssclass("txt_13B");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch02_00_00","40","838","960","92",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"0","18","97","86",null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("17");
            obj.set_text("w\r\n18");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("label00","0","10","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("1");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("label01","18.12%","10","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("2");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","label00:10","10",null,"20","label01:0",null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("0");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("label02","36.25%","10","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("3");
            obj.set_text("금월");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("label04","72.5%","10","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("10");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("label05","0","35","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("11");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("label06","18.12%","35","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("12");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label_point");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb02","label05:10","35",null,"20","label06:0",null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("4");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("label03","54.37%","10","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("6");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"10","22","20","label04:0",null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Edit("edt_00","label03:10","10",null,"20","btn_search00:0",null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("7");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_00","label01:10","10",null,"20","label02:0",null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_00_00","label02:10","10",null,"20","label03:0",null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("label07","36.25%","35","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("13");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("label08","54.37%","35","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("14");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("label09","72.5%","35","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("15");
            obj.set_text("CAM 상태");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("18");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Button("btn_search01",null,"35","22","20","label07:0",null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Edit("edt_01","label06:10","35",null,"20","btn_search01:0",null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("19");
            obj.set_cssclass("point");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb_00","label08:10","35",null,"20","label09:0",null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("21");
            obj.set_text("cmb_00");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("label10","0","60","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("22");
            obj.set_text("사양담당자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("사양담당자");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Static("label11","18.12%","60","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("23");
            obj.set_text("CAM담당자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CAM담당자");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Button("btn_search03",null,"60","22","20","label11:0",null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Edit("edt_03","label10:10","60",null,"20","btn_search03:0",null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("24");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Button("btn_search04",null,"60","22","20","label07:0",null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("26");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Edit("edt_04","label11:10","60",null,"20","btn_search04:0",null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("27");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Edit("edt_02","label07:10","35",null,"20","label08:0",null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("28");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"56","5.01%","24","39",null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"56","24","24","10",null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("30");
            obj.set_cssclass("btn_SA_reset2");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb00","label04:10","10",null,"20","btnSearch:18",null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("31");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb_01","label09:10","35",null,"20","btnSearch:18",null,null,null,null,null,this.divSearch02_00_00.form);
            obj.set_taborder("32");
            obj.set_text("cmb_01");
            this.divSearch02_00_00.addChild(obj.name, obj);

            obj = new Div("divSearch02_00_00_00","40","718","960","67",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"0","18","97","86",null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("17");
            obj.set_text("w\r\n18");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Static("label00","0","10","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Static("label01","18.12%","10","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","label00:10","10",null,"20","label01:0",null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("0");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Static("label02","36.25%","10","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("금월");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Static("label04","72.5%","10","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("10");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Static("label05","0","35","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("11");
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Static("label06","18.12%","35","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("12");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label_point");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb02","label05:10","35",null,"20","label06:0",null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("4");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Static("label03","54.37%","10","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"10","22","20","label04:0",null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt_00","label03:10","10",null,"20","btn_search00:0",null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("7");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_00","label01:10","10",null,"20","label02:0",null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_00_00","label02:10","10",null,"20","label03:0",null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Static("label07","36.25%","35","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("13");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Static("label08","54.37%","35","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("14");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Static("label09","72.5%","35","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("15");
            obj.set_text("CAM 상태");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("18");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_search01",null,"35","22","20","label07:0",null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt_01","label06:10","35",null,"20","btn_search01:0",null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("19");
            obj.set_cssclass("point");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb_00","label08:10","35",null,"20","label09:0",null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("21");
            obj.set_text("cmb_00");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt_02","label07:10","35",null,"20","label08:0",null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("22");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"31","4.91%","24","39",null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"31","24","24","10",null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_SA_reset2");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb00","label04:10","10",null,"20","btnSearch:18",null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("25");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb_01","label09:10","35",null,"20","btnSearch:18",null,null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("26");
            obj.set_text("cmb_01");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_01",null,null,"60","10","13","0",null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("27");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_01_00",null,null,"10","40","0","10",null,null,null,null,this.divSearch02_00_00_00.form);
            obj.set_taborder("28");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00_00_00.addChild(obj.name, obj);

            obj = new Div("divSearch02_00_00_00_00","40","628","960","42",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"0","18","97","86",null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("12");
            obj.set_text("w\r\n18");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("label00","0","10","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("label01","18.12%","10","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("2");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","label00:10","10",null,"20","label01:0",null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("0");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("label02","36.25%","10","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("3");
            obj.set_text("금월");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("label04","72.5%","10","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("10");
            obj.set_text("작업구분");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static12_00_00",null,"0","60","8","13",null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("5");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("label03","54.37%","10","7.15%","20",null,null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("6");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"10","22","20","label04:0",null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Edit("edt_00","label03:10","10",null,"20","btn_search00:0",null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("7");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_00","label01:10","10",null,"20","label02:0",null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Calendar("cal_00_00","label02:10","10",null,"20","label03:0",null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20210104");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("13");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"8","4.91%","24","39",null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"8","24","24","10",null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_SA_reset2");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Combo("cmb00","label04:10","10",null,"20","btnSearch:18",null,null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("16");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_01",null,null,"60","8","13","0",null,null,null,null,this.divSearch02_00_00_00_00.form);
            obj.set_taborder("17");
            obj.set_text("h8");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02_00_00_00_00.addChild(obj.name, obj);

            obj = new Static("Static08_00","344","578","422","21",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("라벨은 텍스트가 잘리는 부분이 발생함으로 toolTiptext를 제공해 주어야 합니다.");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Div("div_00","1049","378","200","42",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_03","15","10",null,"20","37",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_search03",null,"10","22","20","15",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_finder");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","1049","346","172","28",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("부분적인 사용");
            obj.set_cssclass("txt_13B");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1332,1088,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Guide_03.xfdl", function() {
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
        this.loadIncludeScript("Guide_03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
