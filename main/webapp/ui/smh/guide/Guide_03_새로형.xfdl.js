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
            this.set_titletext("조회영역");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(1124,991);
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
            obj = new Static("sta_04_01","1041","138","70","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("40px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","40","228","1024","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_01","828","10","70","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("20px");
            obj.set_cssclass("guide_size_VR");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo00","66","10","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","46","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_label_point");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static01","186","10","46","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static03","372","10","72","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("재직구분");
            obj.set_cssclass("sta_WF_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo01","232","10","120","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo02","444","10","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04","564","10","72","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("근무기간");
            obj.set_cssclass("sta_WF_label");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","636","10","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20200320");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","752","10","100","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20200320");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static05","736","10","16","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_unit");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static06","66","30","50","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divSearch00","40","329","1024","65",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","66","10","100","20",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("0");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_cssclass("point");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","46","20",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("1");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_label_point");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static01","186","10","46","20",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_label");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static03","372","10","72","20",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("3");
            obj.set_text("재직구분");
            obj.set_cssclass("sta_WF_label");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit00","649","10","100","20",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("4");
            obj.set_cssclass("search");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static02","564","10","78","20",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("5");
            obj.set_text("사번/성명");
            obj.set_cssclass("sta_WF_label");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Combo("Combo01","232","10","120","20",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("6");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Combo("Combo02","444","10","100","20",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("7");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Button("Button02","724","10","25","20",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_search2");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Combo("Combo03","649","35","100","20",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("9");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static06","20","35","111","20",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("10");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_label");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static07","372","35","59","20",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("11");
            obj.set_text("상호명");
            obj.set_cssclass("sta_WF_label");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static08","564","35","85","20",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("12");
            obj.set_text("거래처구분");
            obj.set_cssclass("sta_WF_label");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit01","444","35","100","20",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("13");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Edit("Edit02","130","35","140","20",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("14");
            obj.set_value("000-00-000000");
            obj.set_text("000-00-000000");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static20","66","0","50","10",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("15");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static21","66","30","120","5",null,null,null,null,null,null,this.divSearch00.form);
            obj.set_taborder("16");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Static("Static22","66",null,"120","10",null,"0",null,null,null,null,this.divSearch00.form);
            obj.set_taborder("17");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch00.addChild(obj.name, obj);

            obj = new Div("divSearch01","40","498","1024","90",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","65","10","100","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("0");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_cssclass("point");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","46","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("1");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_label_point");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static01","186","10","46","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_label");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static03","372","10","72","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("3");
            obj.set_text("재직구분");
            obj.set_cssclass("sta_WF_label");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("Edit00","649","10","100","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("4");
            obj.set_cssclass("search");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static02","564","10","78","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("5");
            obj.set_text("사번/성명");
            obj.set_cssclass("sta_WF_label");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Combo("Combo01","232","10","120","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("6");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Combo("Combo02","444","10","100","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("7");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Button("Button02","724","10","25","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_search2");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Combo("Combo03","649","35","100","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("9");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static06","20","35","111","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("10");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_label");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static07","372","35","59","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("11");
            obj.set_text("상호명");
            obj.set_cssclass("sta_WF_label");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static08","564","35","85","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("12");
            obj.set_text("거래처구분");
            obj.set_cssclass("sta_WF_label");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("Edit01","444","35","100","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("13");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("Edit02","130","35","140","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("14");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("Edit03","75","60","100","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("15");
            obj.set_cssclass("search");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Combo("Combo04","753","60","100","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("16");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("Combo00");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","444","60","100","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("17");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static09","20","60","59","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("18");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_label");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static10","372","60","59","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("19");
            obj.set_text("견적일");
            obj.set_cssclass("sta_WF_label");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Calendar("Calendar03","561","60","100","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("20");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static11","544","60","17","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("21");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_unit");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static12","681","60","72","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("22");
            obj.set_text("견적상태");
            obj.set_cssclass("sta_WF_label");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Edit("Edit04","203","60","100","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("23");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Button("Button00","150","60","25","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_SA_search2");
            this.divSearch01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","308","60","53","20",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("25");
            obj.set_text("전체");
            obj.set_value("true");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static20","66","0","50","10",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("26");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static21","66","30","120","5",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("27");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static23","66","55","120","5",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("28");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static22","66","80","50","10",null,null,null,null,null,null,this.divSearch01.form);
            obj.set_taborder("29");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch01.addChild(obj.name, obj);

            obj = new Static("Static04","40","199","322","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회영역 1행(조회영역 40px)");
            obj.set_cssclass("txt_13B");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","40","301","322","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회영역 2행(조회영역 65px/행간격 5px)");
            obj.set_cssclass("txt_13B");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","40","470","322","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("조회영역 3행(조회영역 90px/행간격 5px)");
            obj.set_cssclass("txt_13B");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","40","632","447","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("조회영역 4행 (조회영역 115px/행간격 5px)");
            obj.set_cssclass("txt_13B");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch03","40","660","1024","115",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","20","85","74","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("0");
            obj.set_text("Bill Date");
            obj.set_cssclass("sta_WF_label");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static15","372","85","64","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("1");
            obj.set_text("TAX ID");
            obj.set_cssclass("sta_WF_label");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Calendar("Calendar04","88","85","100","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("2");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static16","188","85","16","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_unit");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Calendar("Calendar05","205","85","100","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("4");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Edit("Edit05","444","85","100","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("5");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static17","564","85","99","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("6");
            obj.set_text("TAX ID Type");
            obj.set_cssclass("sta_WF_label");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Combo("Combo05","663","85","100","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("7");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("Combo00");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Combo("Combo00","65","10","100","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("8");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_cssclass("point");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","46","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("9");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_label_point");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static01","186","10","46","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("10");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_label");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static03","372","10","72","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("11");
            obj.set_text("재직구분");
            obj.set_cssclass("sta_WF_label");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Edit("Edit00","663","10","100","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("12");
            obj.set_cssclass("search");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static02","564","10","78","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("13");
            obj.set_text("사번/성명");
            obj.set_cssclass("sta_WF_label");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Combo("Combo01","232","10","120","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("14");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Combo("Combo02","444","10","100","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("15");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Button("Button02","738","10","25","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_SA_search2");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Combo("Combo03","663","35","100","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("17");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static06","20","35","111","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("18");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_label");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static07","372","35","59","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("19");
            obj.set_text("상호명");
            obj.set_cssclass("sta_WF_label");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static08","564","35","85","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("20");
            obj.set_text("거래처구분");
            obj.set_cssclass("sta_WF_label");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Edit("Edit01","444","35","100","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("21");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Edit("Edit02","130","35","140","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("22");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Edit("Edit03","75","60","100","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("23");
            obj.set_cssclass("search");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Combo("Combo04","753","60","100","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("24");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("Combo00");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","444","60","100","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("25");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static09","20","60","59","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("26");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_label");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static10","372","60","59","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("27");
            obj.set_text("견적일");
            obj.set_cssclass("sta_WF_label");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Calendar("Calendar03","561","60","100","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("28");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static11","544","60","17","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("29");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_unit");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static12","681","60","72","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("30");
            obj.set_text("견적상태");
            obj.set_cssclass("sta_WF_label");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Edit("Edit04","178","60","100","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("31");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Button("Button00","150","60","25","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("32");
            obj.set_cssclass("btn_SA_search2");
            this.divSearch03.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","283","60","53","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("33");
            obj.set_text("전체");
            obj.set_value("true");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static13","783","37","72","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("34");
            obj.set_text("보관여부");
            obj.set_cssclass("sta_WF_label");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Radio("Radio00","851","37","148","20",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("35");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divSearch03_form_Radio00_innerdataset = new nexacro.NormalDataset("divSearch03_form_Radio00_innerdataset", obj);
            divSearch03_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">보관</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">미보관</Col></Row></Rows>");
            obj.set_innerdataset(divSearch03_form_Radio00_innerdataset);
            obj.set_text("보관");
            obj.set_value("0");
            obj.set_index("0");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static20","66","0","50","10",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("36");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static21","66","30","120","5",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("37");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static22","66",null,"50","10",null,"0",null,null,null,null,this.divSearch03.form);
            obj.set_taborder("38");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static23","66","55","120","5",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("39");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static25","66","80","120","5",null,null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("40");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"81","63","24","10",null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("41");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("조회");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static12_00",null,"105","60","10","13",null,null,null,null,null,this.divSearch03.form);
            obj.set_taborder("42");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch03.addChild(obj.name, obj);

            obj = new Static("Static17","837","401","227","51",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("조회버튼은 한 줄일 경우 위아래 8px, 2줄 이상일 경우 우측(10px) 하단(8px)으로 정렬");
            obj.set_cssclass("sta_WF_helpInfo");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","40","402","494","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("라벨 명의 가로 길이 차이가 많이 나는 경우 입력 컴포넌트의 좌측 정렬은 하지 않는다.");
            obj.set_cssclass("sta_WF_helpInfo");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0","0",null,"51","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("조회영역");
            obj.set_cssclass("sta_guide_Title");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","512","147","80","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("cmb_SA_label");
            obj.set_innerdataset("Dataset02");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","552","303","381","21",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Edit+검색버튼 으로 구성될 경우 Edit의 cssclass  : search를 적용합니다.");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch02","40","138","1024","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","66","10","100","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("0");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_cssclass("point");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","46","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("1");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_label_point");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static01","186","10","46","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static03","372","10","72","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("3");
            obj.set_text("재직구분");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Combo("Combo01","232","10","120","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("4");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Combo("Combo02","444","10","100","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("5");
            obj.set_innerdataset("Dataset00");
            obj.set_codecolumn("Column0");
            obj.set_datacolumn("Column0");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static04","564","10","72","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("6");
            obj.set_text("근무기간");
            obj.set_cssclass("sta_WF_label");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","636","10","100","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20200320");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","753","10","100","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20200320");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static05","736","10","17","20",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_unit");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_01","873","7","90","24",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("11");
            obj.set_text("24px");
            obj.set_cssclass("guide_size_VL");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"7","63","24","39",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("조회");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Button("btnReset",null,"7","24","24","10",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_SA_reset2");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("13");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static12_00_00",null,"0","60","7","13",null,null,null,null,null,this.divSearch02.form);
            obj.set_taborder("14");
            obj.set_text("h7");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("Static12_00",null,null,"60","7","13","0",null,null,null,null,this.divSearch02.form);
            obj.set_taborder("15");
            obj.set_text("h7");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch02.addChild(obj.name, obj);

            obj = new Static("sta_04_00","40","108","15","50",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("15");
            obj.set_cssclass("guide_size_HT");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00","1041","228","70","40",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("40px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00","1041","329","70","65",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("65px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00_00","1041","498","70","90",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("90px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_01_00_00_00_00","1041","660","70","115",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("115px");
            obj.set_cssclass("guide_size_VR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_04_00_00_00_00_00","1053","108","10","50",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("10px");
            obj.set_cssclass("guide_size_HT");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05","699","481","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("guide_cssLine_TL");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00_00","604","472","86","21",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("cssclass : search");
            obj.set_cssclass("sta_guide_status");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00","773","481","40","37",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00","819","470","151","21",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("cssclass : btn_SA_search2");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00_00","781","117","40","37",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00","827","106","115","21",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("cssclass : sta_WF_unit");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00_00_00","158","93","40","67",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00_01","204","82","115","21",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("cssclass : point");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00_00_00_00","83","73","115","78",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00_01_00","204","62","152","21",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("cssclass : sta_WF_label_point");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00_02","492","82","119","21",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("cssclass : sta_WF_label");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00_00_01","446","93","40","57",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("sta_05_00_00_00_02","781","207","40","27",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("guide_cssLine_TR");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00_03","827","196","129","21",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("cssclass : div_WF_search");
            obj.set_cssclass("sta_guide_status");
            this.addChild(obj.name, obj);

            obj = new Static("Static22_01_00_00_00_00","853","521","129","21",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("cssclass : btn_SA_search");
            obj.set_cssclass("sta_guide_status");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00_00_00","68","810","102","20",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("알려드립니다");
            obj.set_cssclass("sta_WF_helpNote");
            this.addChild(obj.name, obj);

            obj = new Static("sta_01_01","68","839","597","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("입력 컴포넌트들(Edit, MaskEdit, Combo, Spin, Calendar, Textarea)필 수 표시는 cssclass : point로 동일 합니다.");
            obj.set_cssclass("sta_WF_helpTxt");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1124,991,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Guide_03_새로형.xfdl", function() {
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
        this.loadIncludeScript("Guide_03_새로형.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
