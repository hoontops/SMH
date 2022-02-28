(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Template_006");
            this.set_titletext("입력_일반형");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,663);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static02","0","38","195","14",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","119","93","791","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","119","63","791","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","125","68","779","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","125","98","779","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","0","93","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label2");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","0","63","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","0","62","910","2",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelLine");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","139","212","14",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","0","158","69","21",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("텍스트");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","119","186","791","31",null,null,null,null,null,null,this);
            obj.set_taborder("155");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","119","216","791","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","125","190","734","21",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","125","220","779","21",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","215","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label2");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","185","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label2");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","184","910","2",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_LabelLine");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","0","245","120","107",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label2");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","119","245","791","107",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","125","250","779","97",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","119","351","791","31",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","351","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label2");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","119","381","791","31",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","125","386","200","21",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","0","381","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label2");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","591","381","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label2");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","296","351","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label2");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","591","351","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label2");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06","421","356","100","21",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","526","356","69","21",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("텍스트");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07","358","386","100","21",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit08","716","386","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","0","507","60","61",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("중항목");
            obj.set_cssclass("sta_WF_Label4");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","119","477","178","31",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","119","507","178","31",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","0","477","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("소항목");
            obj.set_cssclass("sta_WF_Label4");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","0","448","297","30",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_text("항목명");
            obj.set_cssclass("sta_WF_Label5");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","119","537","178","31",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit09","125","542","167","21",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","119","567","178","31",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","59","537","61","31",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("소항목");
            obj.set_cssclass("sta_WF_Label4");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","59","507","61","31",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_text("소항목");
            obj.set_cssclass("sta_WF_Label4");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","125","485","69","15",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("텍스트");
            obj.set_value("true");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","125","513","167","21",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("선택");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit11","125","572","167","21",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","307","507","60","61",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("중항목");
            obj.set_cssclass("sta_WF_Label4");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","426","477","178","31",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","426","507","178","31",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","307","477","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("소항목");
            obj.set_cssclass("sta_WF_Label4");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","426","537","178","31",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit12","432","542","167","21",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","426","567","178","31",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static49","366","537","61","31",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_text("소항목");
            obj.set_cssclass("sta_WF_Label4");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","366","507","61","31",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("소항목");
            obj.set_cssclass("sta_WF_Label4");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","432","485","69","15",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("텍스트");
            obj.set_value("true");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","432","513","167","21",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var Combo01_innerdataset = new nexacro.NormalDataset("Combo01_innerdataset", obj);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_text("선택");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit13","432","572","167","21",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","307","448","297","30",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_text("항목명");
            obj.set_cssclass("sta_WF_Label5");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","614","448","296","30",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_text("항목명");
            obj.set_cssclass("sta_WF_Label5");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","673","507","61","31",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_text("소항목");
            obj.set_cssclass("sta_WF_Label4");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","673","537","61","31",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("소항목");
            obj.set_cssclass("sta_WF_Label4");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","733","567","177","31",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static57","614","567","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_text("소항목");
            obj.set_cssclass("sta_WF_Label4");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","733","537","177","31",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","614","477","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_text("소항목");
            obj.set_cssclass("sta_WF_Label4");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","733","507","177","31",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_InputBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","733","477","177","31",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_InputBg");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","614","507","60","61",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("중항목");
            obj.set_cssclass("sta_WF_Label4");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox04","739","485","69","15",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("텍스트");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo02","739","513","165","21",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var Combo02_innerdataset = new nexacro.NormalDataset("Combo02_innerdataset", obj);
            Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Combo02_innerdataset);
            obj.set_text("선택");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit14","739","542","165","21",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit15","739","572","165","21",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","307","567","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_text("소항목");
            obj.set_cssclass("sta_WF_Label4");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","0","567","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("소항목");
            obj.set_cssclass("sta_WF_Label4");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit16","716","356","162","21",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","407","633","505","21",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("※ 메시지 표시 공간입니다. 메시지 표시 공간입니다. 메시지 표시 공간입니다.");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","297","448","10","150",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","604","447","10","150",null,null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button12","270","452","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_cssclass("btn_WF_Guess");
            this.addChild(obj.name, obj);

            obj = new Button("Button13","577","452","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_cssclass("btn_WF_Guess");
            this.addChild(obj.name, obj);

            obj = new Button("Button14","884","452","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_cssclass("btn_WF_Guess");
            this.addChild(obj.name, obj);

            obj = new Static("Static67","0","52","125","10",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static68","910","36","10","637",null,null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","960","7","52","25",null,null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_text("넓이");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","961","35","52","25",null,null,null,null,null,null,this);
            obj.set_taborder("140");
            obj.set_text("높이");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","813","124","97","10",null,null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","0","124","125","15",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static69","0","153","125","5",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static70","0","179","125","5",null,null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","0","412","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","598","130","5",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","0","654","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button18","852","36","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_text("저장");
            obj.set_cssclass("btn_CRUD_Save");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static13",null,"57","125","5","0",null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","852","158","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_text("저장");
            obj.set_cssclass("btn_CRUD_Save");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button73","864","190","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_basic");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button51","883","356","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_cssclass("btn_WF_SearchBox");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo03","125","356","100","21",null,null,null,null,null,null,this);
            obj.set_taborder("158");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var Combo03_innerdataset = new nexacro.NormalDataset("Combo03_innerdataset", obj);
            Combo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">A</Col></Row></Rows>");
            obj.set_innerdataset(Combo03_innerdataset);
            obj.set_text("A");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","330","386","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("159");
            obj.set_cssclass("btn_WF_SearchBox");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","841","386","50","21",null,null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_text("(텍스트)");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","84","36","211","21",null,null,null,null,null,null,this);
            obj.set_taborder("161");
            obj.set_text("(  필수 입력 항목)");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button79","245","422","52","21",null,null,null,null,null,null,this);
            obj.set_taborder("162");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_basic");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","184","422","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_text("저장");
            obj.set_cssclass("btn_CRUD_Save");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","0","443","910","5",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","552","422","52","21",null,null,null,null,null,null,this);
            obj.set_taborder("165");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_basic");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","491","422","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("166");
            obj.set_text("저장");
            obj.set_cssclass("btn_CRUD_Save");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","858","422","52","21",null,null,null,null,null,null,this);
            obj.set_taborder("167");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_basic");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button06","797","422","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("168");
            obj.set_text("저장");
            obj.set_cssclass("btn_CRUD_Save");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","603","88","31",null,null,null,null,null,null,this);
            obj.set_taborder("169");
            obj.set_text("에러시");
            obj.set_cssclass("btn_Box_error");
            this.addChild(obj.name, obj);

            obj = new Button("Button83","44","608","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("170");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_basic");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button07","870","0","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("171");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_basic");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static66","813","628","97","5",null,null,null,null,null,null,this);
            obj.set_taborder("172");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button08","827","0","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("173");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_basic");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static71","89","36","12","21",null,null,null,null,null,null,this);
            obj.set_taborder("174");
            obj.set_text("*");
            obj.set_color("rgba(212,75,65,1)");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static72","2","68","12","21",null,null,null,null,null,null,this);
            obj.set_taborder("175");
            obj.set_text("*");
            obj.set_color("rgba(212,75,65,1)");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static73","8.15%","36","10","22",null,null,null,null,null,null,this);
            obj.set_taborder("176");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static74","0.98%","67","2","22",null,null,null,null,null,null,this);
            obj.set_taborder("177");
            obj.set_text("2");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0","21","910","15",null,null,null,null,null,null,this);
            obj.set_taborder("178");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,663,this,function(p){});
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
        this.loadIncludeScript("TemplateGuide_004.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
