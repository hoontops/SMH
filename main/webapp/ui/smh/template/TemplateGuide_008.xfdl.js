(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TemplateGuide_006");
            this.set_titletext("통계_그래프");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,930);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static09","0","-4","346","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","22","910","67",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","20","10","40","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","60","10","100","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_value("null");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","291","10","40","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","321","11","10","18",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","331","10","100","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var Div00_form_Combo00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_innerdataset", obj);
            Div00_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_innerdataset);
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","451","10","40","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","481","11","10","18",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","431","11","20","18",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","20","36","40","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","50","37","10","18",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","60","36","141","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("9pt \"Dotum\"");
            var Div00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div00_form_Radio00_innerdataset", obj);
            Div00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">텍스트</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">텍스트</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Radio00_innerdataset);
            obj.set_value("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","491","10","100","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button79",null,"10","52","21","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("18");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_basic");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button52",null,"10","58","21","65",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("19");
            obj.set_text("조회");
            obj.set_cssclass("btn_CRUD_Search");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button85","165","10","29","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("20");
            obj.set_text("주");
            obj.set_cssclass("btn_WF_Stats");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button91","197","10","29","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("21");
            obj.set_text("월");
            obj.set_cssclass("btn_WF_Stats");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button90","229","10","42","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("22");
            obj.set_text("분기");
            obj.set_cssclass("btn_WF_Stats");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","51","38","10","18",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","161","38","5","18",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","272","38","20","18",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","591","90","313","21",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("(마감일 : 2015-01-15) (생성일 : 2015-01-15 09:00:00)");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","93","206","21",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("담당자 (기획팀)");
            obj.set_cssclass("sta_WF_Charge");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","89","910","5",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","0","110","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","0","120","911","811",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.Tab00);
            obj.set_text("품질");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("Div00","0","0","909","42",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBg");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static23","20","10","40","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("41");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","60","10","100","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("44");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var Tab00_tabpage1_form_Div00_form_Combo00_innerdataset = new nexacro.NormalDataset("Tab00_tabpage1_form_Div00_form_Combo00_innerdataset", obj);
            Tab00_tabpage1_form_Div00_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Tab00_tabpage1_form_Div00_form_Combo00_innerdataset);
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","160","11","5","18",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("50");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button18",null,"10","58","21","10",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("51");
            obj.set_text("저장");
            obj.set_cssclass("btn_CRUD_Save");
            obj.set_font("bold 9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button94","165","10","71","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("52");
            obj.set_text("텍스트");
            obj.set_cssclass("btn_WF_Stats02");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","239","10","71","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("53");
            obj.set_text("텍스트");
            obj.set_cssclass("btn_WF_Stats02");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","313","10","71","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("54");
            obj.set_text("텍스트");
            obj.set_cssclass("btn_WF_Stats02");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","0","52","297","31",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("텍스트");
            obj.set_cssclass("sta_WF_Label6");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static35","0","82","297","183",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_InputBg");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","307","52","297","31",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("텍스트");
            obj.set_cssclass("sta_WF_Label6");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02","307","82","297","183",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_InputBg");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static03","614","52","295","31",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("텍스트");
            obj.set_cssclass("sta_WF_Label6");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static04","614","82","295","183",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_InputBg");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static05","0","305","450","183",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_InputBg");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static06","0","275","450","31",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("텍스트");
            obj.set_cssclass("sta_WF_Label6");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static07","460","275","449","31",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("텍스트");
            obj.set_cssclass("sta_WF_Label6");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static08","460","305","449","183",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_InputBg");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static09","0","498","909","31",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("텍스트");
            obj.set_cssclass("sta_WF_Label6");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static10","0","528","909","183",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_InputBg");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Button("Button42","859","721","22","22",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_Next");
            obj.set_background("url(\'image::btn_WF_next.png\') no-repeat center center rgba(255,255,255,1)");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Button("Button00","886","721","22","22",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_Setting");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Button("Button27","434","721","22","22",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_PageNumberOn");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Button("Button28","455","721","22","22",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_PageNumber");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Button("Button29","476","721","22","22",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_PageNumber");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.Tab00);
            obj.set_text("판매");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage3",this.Tab00);
            obj.set_text("생산");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage4",this.Tab00);
            obj.set_text("My");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static11","0","151","20","42",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","50","162","10","18",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","898","150","10","42",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","899","27","10","42",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","0","27","20","42",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","0","193","909","10",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","297","203","10","213",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","604","203","10","213",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","0","416","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","450","426","10","213",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","639","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","0","862","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","12","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","910","0","10","930",null,null,null,null,null,null,this);
            obj.set_taborder("1");
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
            obj = new Layout("default","",920,930,this,function(p){});
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
            this.Div00.form.Edit00.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
        };
        this.loadIncludeScript("TemplateGuide_008.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
