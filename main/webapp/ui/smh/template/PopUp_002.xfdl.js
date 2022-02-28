(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PopUp_0033");
            this.set_titletext("입력");
            if (Form == this.constructor)
            {
                this._setFormPosition(540,414);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0","540","414",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","15","0","510","15",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","15","15","413","15",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("타이틀 명");
            obj.set_cssclass("sta_WF_popTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","15","30","510","15",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","0","15","424",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","525","0","15","424",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","15","43","197","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","15","59","126","10",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","15","173","510","10",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","31","183","45","21",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","71","183","180","21",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","15","204","510","10",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","15","208","510","44",null,null,null,null,null,null,this);
            obj.set_text("텍스트");
            obj.set_taborder("14");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","37","226","269","18",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("9pt \"Dotum\"");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">텍스트</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">텍스트</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">텍스트</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">텍스트</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","15","252","510","10",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","14","262","511","101",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.Tab00);
            obj.set_text("탭명 00001");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("Div00","1","0","509","74",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("0");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","508","67",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBg");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static23","3.74%","10",null,"21","87.4%",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form.Div00.form);
            obj.set_taborder("101");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","3.74%","36",null,"21","87.4%",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form.Div00.form);
            obj.set_taborder("103");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label7");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","11.42%","36","426","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form.Div00.form);
            obj.set_taborder("104");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","11.42%","10",null,"21","53.15%",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form.Div00.form);
            obj.set_taborder("109");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var Tab00_tabpage1_form_Div00_form_Div00_form_Combo00_innerdataset = new nexacro.NormalDataset("Tab00_tabpage1_form_Div00_form_Div00_form_Combo00_innerdataset", obj);
            Tab00_tabpage1_form_Div00_form_Div00_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_tabpage1_form_Div00_form_Div00_form_Combo00_innerdataset);
            obj.set_text("선택");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab00.tabpage1.form.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.Tab00);
            obj.set_text("탭명 00002");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static11","15","399","510","15",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","14","363","511","15",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","15","69","510","104",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","3.74%","10",null,"21","87.4%",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("89");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","98.03%","16","10","66",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("90");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","3.74%","36",null,"21","87.4%",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("91");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label7");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","11.42%","36","370","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("92");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","11.22%","61",null,"15","74.8%",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("93");
            obj.set_text("텍스트");
            obj.set_value("true");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","11.22%","77",null,"18","62.4%",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("94");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("9pt \"Dotum\"");
            var Div00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div00_form_Radio00_innerdataset", obj);
            Div00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">텍스트</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">텍스트</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Radio00_innerdataset);
            obj.set_value("1");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","3.74%","76",null,"21","87.2%",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("95");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","0%","92",null,"10","0%",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("96");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","11.42%","10",null,"21","53.15%",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("97");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var Div00_form_Combo00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_innerdataset", obj);
            Div00_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_innerdataset);
            obj.set_text("선택");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0%","57",null,"5","74.8%",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("98");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","0%","74",null,"5","74.8%",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("99");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button81",null,"36","64","21","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("100");
            obj.set_text("중복검사");
            obj.set_cssclass("btn_WF_basic");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static71","104","43","12","21",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("*");
            obj.set_color("rgba(212,75,65,1)");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","99","43","211","21",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("(  필수 입력 항목)");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button18","369","378","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("저장");
            obj.set_cssclass("btn_CRUD_Save");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button79","430","378","52","21",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Button("Button78","485","378","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Static("Static73","90","40","10","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",540,414,this,function(p){});
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
        this.loadIncludeScript("PopUp_002.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
