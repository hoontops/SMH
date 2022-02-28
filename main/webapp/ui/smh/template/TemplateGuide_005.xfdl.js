(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TemplateGuide_004");
            this.set_titletext("입력_탭형");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static09","0","-4","346","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","12","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","50","22","860","95",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","20","10","40","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("95");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","61","10","100","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("97");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","20","36","40","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("98");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit01","166","10","280","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("110");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit02","61","36","385","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("111");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","20","62","40","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("113");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit03","61","62","368","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("114");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","434","62","12","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("115");
            obj.set_text("CheckBox00");
            obj.set_value("true");
            this.Div01.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","466","43","372","40",null,null,null,null,null,null,this.Div01.form);
            obj.set_text("속성표시");
            obj.set_taborder("116");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Radio("Radio00","487","58","216","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("119");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Div01_form_Radio00_innerdataset = new nexacro.NormalDataset("Div01_form_Radio00_innerdataset", obj);
            Div01_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">텍스트</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">텍스트</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">텍스트</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Radio00_innerdataset);
            obj.set_value("1");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button52",null,"10","58","21","65",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("120");
            obj.set_text("조회");
            obj.set_cssclass("btn_CRUD_Search");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button79",null,"10","52","21","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("121");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_basic");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05","72","80","177","5",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","72","54","177","5",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","102","33","10","83",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","497","33","20","83",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","889","73","20","32",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","39","22","11","478",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","50","127","861","350",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.Tab00);
            obj.set_text("탭명00001");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"310","0",null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBg");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","20","5","66","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("31");
            obj.set_text("텍스트");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","114","5","66","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("32");
            obj.set_text("텍스트");
            obj.set_value("true");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","209","5","66","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("33");
            obj.set_text("텍스트");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","209","32","66","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("34");
            obj.set_text("텍스트");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","114","32","66","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("35");
            obj.set_text("텍스트");
            obj.set_value("true");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox05","20","32","66","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("36");
            obj.set_text("텍스트");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","20","58","390","80",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_text("속성표시");
            obj.set_taborder("37");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static23","41","80","40","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("38");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","41","106","40","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("39");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","82","106","308","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("40");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","82","80","308","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("41");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var Tab00_tabpage1_form_Div00_form_Combo00_innerdataset = new nexacro.NormalDataset("Tab00_tabpage1_form_Div00_form_Combo00_innerdataset", obj);
            Tab00_tabpage1_form_Div00_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_tabpage1_form_Div00_form_Combo00_innerdataset);
            obj.set_text("선택");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox01","428","58","409","80",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_text("속성표시");
            obj.set_taborder("42");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","448","80","40","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("43");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","448","106","40","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("44");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","489","106","329","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("45");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","489","80","329","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("46");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox02","20","147","817","80",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_text("속성표시");
            obj.set_taborder("47");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","41","169","40","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("48");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","41","195","40","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("49");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit03","82","195","308","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("50");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo01","82","169","308","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("51");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var Tab00_tabpage1_form_Div00_form_Combo01_innerdataset = new nexacro.NormalDataset("Tab00_tabpage1_form_Div00_form_Combo01_innerdataset", obj);
            Tab00_tabpage1_form_Div00_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_tabpage1_form_Div00_form_Combo01_innerdataset);
            obj.set_text("선택");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","468","169","40","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("52");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","468","195","40","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("53");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit04","509","195","307","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("54");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo02","509","169","307","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("55");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var Tab00_tabpage1_form_Div00_form_Combo02_innerdataset = new nexacro.NormalDataset("Tab00_tabpage1_form_Div00_form_Combo02_innerdataset", obj);
            Tab00_tabpage1_form_Div00_form_Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_tabpage1_form_Div00_form_Combo02_innerdataset);
            obj.set_text("선택");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static62","20","237","370","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("56");
            obj.set_text("※ 메시지 표시 공간입니다. 메시지 표시 공간입니다. ");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","20","268","40","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("57");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo03","61","268","150","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("58");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var Tab00_tabpage1_form_Div00_form_Combo03_innerdataset = new nexacro.NormalDataset("Tab00_tabpage1_form_Div00_form_Combo03_innerdataset", obj);
            Tab00_tabpage1_form_Div00_form_Combo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_tabpage1_form_Div00_form_Combo03_innerdataset);
            obj.set_text("선택");
            obj.set_value("1");
            obj.set_index("0");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox06","231","268","66","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("59");
            obj.set_text("텍스트");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox07","325","268","66","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("60");
            obj.set_text("텍스트");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00",null,"268","58","21","21",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("61");
            obj.set_text("저장");
            obj.set_cssclass("btn_CRUD_Save");
            obj.set_font("bold 9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button08",null,"268","40","21","83",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("62");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_basic");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.Tab00);
            obj.set_text("탭명 00002");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage3",this.Tab00);
            obj.set_text("탭명 00003");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static04","50","117","860","10",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","910","0","10","500",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","51","32","20","83",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","51","179","20","279",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","72","224","20","72",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","441","224","20","72",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","264","224","177","15",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","264","286","177","10",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","264","260","177","5",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","161","213","147","5",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","518","73","20","32",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","461","224","18","72",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("18");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","888","222","20","223",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","71","297","817","15",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","71","386","817","10",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","71","417","817","10",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","72","448","817","10",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","50","468","860","10",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","39","22","1","480",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_MID_Line");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","0","102","40","39",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_TabIcon3");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","0","142","40","39",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_TabIcon4");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","22","40","39",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_TabIcon1On");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","0","62","40","39",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_TabIcon2");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,500,this,function(p){});
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
            this.Div01.form.Edit00.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Div01.form.Edit01.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Div01.form.Edit02.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Div01.form.Edit03.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Tab00.tabpage1.form.Div00.form.Edit01.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Tab00.tabpage1.form.Div00.form.Edit00.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Tab00.tabpage1.form.Div00.form.Edit02.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Tab00.tabpage1.form.Div00.form.Edit03.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Tab00.tabpage1.form.Div00.form.Edit04.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
        };
        this.loadIncludeScript("TemplateGuide_005.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
