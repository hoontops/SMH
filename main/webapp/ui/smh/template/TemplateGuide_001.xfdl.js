(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Template_001");
            this.set_titletext("조회_그리드");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,2202);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"헤더명\" type=\"STRING\" size=\"256\"/><Column id=\"헤더명2\" type=\"STRING\" size=\"256\"/><Column id=\"헤더명3\" type=\"STRING\" size=\"256\"/><Column id=\"헤더명4\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"헤더명\">텍스트</Col><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col><Col id=\"헤더명4\">텍스트</Col></Row><Row><Col id=\"헤더명\">텍스트</Col><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col><Col id=\"헤더명4\">텍스트</Col></Row><Row><Col id=\"헤더명\">텍스트</Col><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col><Col id=\"헤더명4\">텍스트</Col></Row><Row><Col id=\"헤더명\">텍스트</Col><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col><Col id=\"헤더명4\">텍스트</Col></Row><Row><Col id=\"헤더명\">텍스트</Col><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col><Col id=\"헤더명4\">텍스트</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">텍스트텍스트</Col><Col id=\"Column1\">텍스트텍스트</Col><Col id=\"Column2\">텍스트텍스트</Col><Col id=\"Column3\">텍스트텍스트</Col></Row><Row><Col id=\"Column0\">텍스트텍스트</Col><Col id=\"Column1\">텍스트텍스트</Col><Col id=\"Column2\">텍스트텍스트</Col><Col id=\"Column3\">텍스트텍스트</Col></Row><Row><Col id=\"Column0\">텍스트</Col><Col id=\"Column1\">텍스트텍스트</Col><Col id=\"Column2\">텍스트텍스트</Col><Col id=\"Column3\">텍스트텍스트</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("Tab00","0%","534",null,"296","1.09%",null,null,null,null,null,this);
            obj.set_taborder("139");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.Tab00);
            obj.set_text("탭명 00001");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("Div00","0%","0",null,"43","0%",null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_SearchBg");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static23","2.2%","10",null,"21","92.29%",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("53");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","34.47%","10",null,"21","61.12%",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("54");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","21.26%","10",null,"21","67.73%",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("55");
            obj.set_value("ABCDEFG");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","6.61%","10",null,"21","86.01%",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("56");
            obj.set_text("텍스트");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","13.88%","10",null,"21","78.74%",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("57");
            obj.set_text("텍스트");
            obj.set_value("true");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Spin("Spin00","38.88%","10",null,"21","50.11%",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("58");
            obj.set_font("9pt \"Dotum\"");
            obj.set_value("0");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","52.09%","10",null,"21","43.5%",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("59");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static24","49.12%","485",null,"23","48.68%",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("60");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static25","54.63%","485",null,"23","44.27%",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("61");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","56.5%","10",null,"21","32.49%",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("62");
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

            obj = new Button("Button52",null,"10","58","21","1.1%",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("63");
            obj.set_text("조회");
            obj.set_cssclass("btn_CRUD_Search");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","0%","79",null,"187","0%",null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("6");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"85\"/><Column size=\"523\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"헤더명\"/><Cell col=\"2\" text=\"헤더명2\"/><Cell col=\"3\" text=\"헤더명3\"/><Cell col=\"4\" text=\"헤더명4\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:헤더명\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:헤더명2\"/><Cell col=\"3\" text=\"bind:헤더명3\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:헤더명4\" textAlign=\"center\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Button("Button63",null,"53","67","21","131",null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("행 추가");
            obj.set_cssclass("btn_WF_GridPlus");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Button("Button65",null,"53","67","21","60",null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("행 삭제");
            obj.set_cssclass("btn_WF_GridMinus");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Button("Button18",null,"53","58","21","0",null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_cssclass("btn_CRUD_Save");
            obj.set_font("bold 9pt \"Dotum\"");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.Tab00);
            obj.set_text("탭명 00002");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage3",this.Tab00);
            obj.set_text("탭명 00003");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static01","910","0","10","2201",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static57","960","7","52","25",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("넓이");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","961","35","52","25",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("높이");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","23","346","14",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("조회조건 타이틀(필요시만사용)");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","47",null,"103","10",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","20","10","40","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("79");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static00","217","10","40","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("80");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","257","10","137","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("81");
            obj.set_value("ABCDEFG");
            obj.set_cssclass("edit_Search");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","20","41","40","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("82");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button52",null,"10","58","21","80",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("84");
            obj.set_text("조회");
            obj.set_cssclass("btn_CRUD_Search");
            this.Div01.addChild(obj.name, obj);

            obj = new Combo("Combo01","60","10","137","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("86");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var Div01_form_Combo01_innerdataset = new nexacro.NormalDataset("Div01_form_Combo01_innerdataset", obj);
            Div01_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">2015</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2014</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Combo01_innerdataset);
            obj.set_text("2015");
            obj.set_value("1");
            obj.set_index("0");
            this.Div01.addChild(obj.name, obj);

            obj = new Radio("Radio00","60","41","153","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("88");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("9pt \"Dotum\"");
            var Div01_form_Radio00_innerdataset = new nexacro.NormalDataset("Div01_form_Radio00_innerdataset", obj);
            Div01_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">라디오1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">라디오2</Col></Row></Rows>");
            obj.set_innerdataset(Div01_form_Radio00_innerdataset);
            obj.set_index("-1");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button50","376","10","15","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("89");
            obj.set_cssclass("btn_WF_Search");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","439","10","40","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("90");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","479","10","100","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("91");
            obj.set_value("null");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("9pt \"Gulim\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","583","9","10","23",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("92");
            obj.set_text("~");
            this.Div01.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","596","10","100","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("93");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","20","70","370","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("94");
            obj.set_text("※ 메시지 표시 공간입니다. 메시지 표시 공간입니다. ");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button79",null,"10","52","21","25",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("96");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_basic");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","705","10","80","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("97");
            obj.set_text("텍스트");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button00","399","10","21","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("98");
            obj.set_cssclass("btn_WF_eraser");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","51","58","10","53",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","198","58","20","21",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","248","58","10","21",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static05",null,"58","25","53","11",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("25");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","37","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","421","58","20","21",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","470","58","10","21",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","580","58","5","21",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","592","58","5","21",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","21","79","177","10",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","21","108","177","10",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","781","48","117","10",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","0","150","168","15",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","0","223","346","14",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 10pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","85","223","28","14",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("btn_WF_ContentsClose");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","247",null,"177","10",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj.set_font("9pt \"Dotum\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"85\"/><Column size=\"523\"/><Column size=\"110\"/><Column size=\"112\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"헤더명\"/><Cell col=\"2\" text=\"헤더명2\"/><Cell col=\"3\" text=\"헤더명3\"/><Cell col=\"4\" text=\"헤더명4\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:헤더명\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:헤더명2\"/><Cell col=\"3\" text=\"bind:헤더명3\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:헤더명4\" textAlign=\"center\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","455","890","15",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","0","470","346","14",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","85","470","28","14",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_cssclass("btn_WF_ContentsOpen");
            this.addChild(obj.name, obj);

            obj = new Static("Static20","0","524","170","10",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static21","0","237","170","10",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static22","51","581","10","23",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","183","581","10","23",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static24","294","581","20","23",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static25","344","581","10","23",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static26","454","581","20","23",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static27","504","581","10","23",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static28","0","637","889","5",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static29","899","561","10","43",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static31","0","846","346","14",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static33","0","860","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","0","870","90","21",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("텍스트");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00",null,"870","100","21","73",null,null,null,null,null,this);
            obj.set_taborder("57");
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

            obj = new CheckBox("CheckBox01",null,"870","70","21","169",null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("텍스트");
            obj.set_value("true");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02",null,"870","60","21","245",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("텍스트");
            obj.set_value("true");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static34","0","891","910","5",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","896","400","187",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"헤더명\"/><Cell col=\"2\" text=\"헤더명2\"/><Cell col=\"3\" text=\"헤더명3\"/><Cell col=\"4\" text=\"헤더명4\"/><Cell col=\"5\" text=\"헤더명5\"/><Cell col=\"6\" text=\"헤더명6\"/><Cell col=\"7\" text=\"헤더명7\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:헤더명\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:헤더명2\"/><Cell col=\"3\" text=\"bind:헤더명3\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:헤더명4\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static35","400","896","4","187",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("4");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","492","896",null,"187","10",null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"헤더명\"/><Cell col=\"2\" text=\"헤더명2\"/><Cell col=\"3\" text=\"헤더명3\"/><Cell col=\"4\" text=\"헤더명4\"/><Cell col=\"5\" text=\"헤더명5\"/><Cell col=\"6\" text=\"헤더명6\"/><Cell col=\"7\" text=\"헤더명7\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:헤더명\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:헤더명2\"/><Cell col=\"3\" text=\"bind:헤더명3\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:헤더명4\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static36","488","896","4","187",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static37","0","1083","910","15",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static38","0","1098","346","14",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static39","0","1112","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static40","450","1098","346","14",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03","0","1122","440","90",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"헤더명\"/><Cell col=\"2\" text=\"헤더명2\"/><Cell col=\"3\" text=\"헤더명3\"/><Cell col=\"4\" text=\"헤더명4\"/><Cell col=\"5\" text=\"헤더명5\"/><Cell col=\"6\" text=\"헤더명6\"/><Cell col=\"7\" text=\"헤더명7\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:헤더명\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:헤더명2\"/><Cell col=\"3\" text=\"bind:헤더명3\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:헤더명4\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static41","440","1122","10","90",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid04","450","1122",null,"90","10",null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"헤더명\"/><Cell col=\"2\" text=\"헤더명2\"/><Cell col=\"3\" text=\"헤더명3\"/><Cell col=\"4\" text=\"헤더명4\"/><Cell col=\"5\" text=\"헤더명5\"/><Cell col=\"6\" text=\"헤더명6\"/><Cell col=\"7\" text=\"헤더명7\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:헤더명\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:헤더명2\"/><Cell col=\"3\" text=\"bind:헤더명3\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:헤더명4\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static42","0","1212","910","15",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static43","0","1227","346","14",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static44","0","1241","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid05","0","1251","220","90",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_binddataset("Dataset00");
            obj.set_treeusecheckbox("false");
            obj.set_font("9pt \"Dotum\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"215\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell text=\"헤더명\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:헤더명\" textAlign=\"center\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid06","230","1251","220","90",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_binddataset("Dataset00");
            obj.set_treeusecheckbox("false");
            obj.set_font("9pt \"Dotum\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"215\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell text=\"헤더명\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:헤더명\" textAlign=\"center\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid07","460","1251","220","90",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_binddataset("Dataset00");
            obj.set_treeusecheckbox("false");
            obj.set_font("9pt \"Dotum\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"215\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell text=\"헤더명\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:헤더명\" textAlign=\"center\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static45","220","1251","10","90",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static46","450","1251","10","90",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static47","680","1251","10","90",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static48","0","1341","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab01","0","1351",null,"400","10",null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.Tab01);
            obj.set_text("지표코드등록");
            this.Tab01.addChild(obj.name, obj);

            obj = new Grid("Grid01","0","26","640","188",null,null,null,null,null,null,this.Tab01.tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"헤더명\"/><Cell col=\"2\" text=\"헤더명2\"/><Cell col=\"3\" text=\"헤더명3\"/><Cell col=\"4\" text=\"헤더명4\"/><Cell col=\"5\" text=\"헤더명5\"/><Cell col=\"6\" text=\"헤더명6\"/><Cell col=\"7\" text=\"헤더명7\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:헤더명\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:헤더명2\"/><Cell col=\"3\" text=\"bind:헤더명3\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:헤더명4\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.Tab01.tabpage1.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","650","26",null,"188","0",null,null,null,null,null,this.Tab01.tabpage1.form);
            obj.set_taborder("2");
            this.Tab01.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static07","0","224",null,"13","738",null,null,null,null,null,this.Tab01.tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("항목명");
            obj.set_cssclass("sta_WF_Item");
            this.Tab01.tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid03","0","242","240","90",null,null,null,null,null,null,this.Tab01.tabpage1.form);
            obj.set_taborder("4");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"헤더명\"/><Cell col=\"2\" text=\"헤더명2\"/><Cell col=\"3\" text=\"헤더명3\"/><Cell col=\"4\" text=\"헤더명4\"/><Cell col=\"5\" text=\"헤더명5\"/><Cell col=\"6\" text=\"헤더명6\"/><Cell col=\"7\" text=\"헤더명7\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:헤더명\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:헤더명2\"/><Cell col=\"3\" text=\"bind:헤더명3\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:헤더명4\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.Tab01.tabpage1.addChild(obj.name, obj);

            obj = new Tab("Tab00","251","242",null,"91","0",null,null,null,null,null,this.Tab01.tabpage1.form);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_tabposition("right");
            obj.set_cssclass("tab_WF_vertical");
            obj.set_border("1px solid rgba(204,204,204,1), 0px none rgba(128,128,128,1)");
            obj.set_font("9pt \"Dotum\"");
            this.Tab01.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.Tab01.tabpage1.form.Tab00);
            obj.set_text("탭명01");
            this.Tab01.tabpage1.form.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid03","0","-1","564","88",null,null,null,null,null,null,this.Tab01.tabpage1.form.Tab00.tabpage1.form);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj.set_font("9pt \"Dotum\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"헤더명\"/><Cell col=\"2\" text=\"헤더명2\"/><Cell col=\"3\" text=\"헤더명3\"/><Cell col=\"4\" text=\"헤더명4\"/><Cell col=\"5\" text=\"헤더명5\"/><Cell col=\"6\" text=\"헤더명6\"/><Cell col=\"7\" text=\"헤더명7\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:헤더명\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:헤더명2\"/><Cell col=\"3\" text=\"bind:헤더명3\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:헤더명4\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.Tab01.tabpage1.form.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.Tab01.tabpage1.form.Tab00);
            obj.set_text("탭명02");
            this.Tab01.tabpage1.form.Tab00.addChild(obj.name, obj);

            obj = new Grid("Grid03","0","-10","240","90",null,null,null,null,null,null,this.Tab01.tabpage1.form.Tab00.tabpage2.form);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"헤더명\"/><Cell col=\"2\" text=\"헤더명2\"/><Cell col=\"3\" text=\"헤더명3\"/><Cell col=\"4\" text=\"헤더명4\"/><Cell col=\"5\" text=\"헤더명5\"/><Cell col=\"6\" text=\"헤더명6\"/><Cell col=\"7\" text=\"헤더명7\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:헤더명\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:헤더명2\"/><Cell col=\"3\" text=\"bind:헤더명3\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:헤더명4\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/></Band></Format></Formats>");
            this.Tab01.tabpage1.form.Tab00.tabpage2.addChild(obj.name, obj);

            obj = new Button("Button63","442","1","67","21",null,null,null,null,null,null,this.Tab01.tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("행 추가");
            obj.set_cssclass("btn_WF_GridPlus");
            this.Tab01.tabpage1.addChild(obj.name, obj);

            obj = new Button("Button65","512","1","67","21",null,null,null,null,null,null,this.Tab01.tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("행 삭제");
            obj.set_cssclass("btn_WF_GridMinus");
            this.Tab01.tabpage1.addChild(obj.name, obj);

            obj = new Button("Button18","582","1","58","21",null,null,null,null,null,null,this.Tab01.tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("저장");
            obj.set_cssclass("btn_CRUD_Save");
            obj.set_font("bold 9pt \"Dotum\"");
            this.Tab01.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static01","0","8","98","13",null,null,null,null,null,null,this.Tab01.tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("항목명");
            obj.set_cssclass("sta_WF_Item");
            this.Tab01.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static02","650","8","98","13",null,null,null,null,null,null,this.Tab01.tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("항목명");
            obj.set_cssclass("sta_WF_Item");
            this.Tab01.tabpage1.addChild(obj.name, obj);

            obj = new Button("Button02","42","337","67","21",null,null,null,null,null,null,this.Tab01.tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("행 추가");
            obj.set_cssclass("btn_WF_GridPlus");
            this.Tab01.tabpage1.addChild(obj.name, obj);

            obj = new Button("Button03","112","337","67","21",null,null,null,null,null,null,this.Tab01.tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("행 삭제");
            obj.set_cssclass("btn_WF_GridMinus");
            this.Tab01.tabpage1.addChild(obj.name, obj);

            obj = new Button("Button04","182","337","58","21",null,null,null,null,null,null,this.Tab01.tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("저장");
            obj.set_cssclass("btn_CRUD_Save");
            obj.set_font("bold 9pt \"Dotum\"");
            this.Tab01.tabpage1.addChild(obj.name, obj);

            obj = new Button("Button00",null,"337","58","21","96",null,null,null,null,null,this.Tab01.tabpage1.form);
            obj.set_taborder("18");
            obj.set_text("저장");
            obj.set_cssclass("btn_CRUD_Save");
            obj.set_font("bold 9pt \"Dotum\"");
            this.Tab01.tabpage1.addChild(obj.name, obj);

            obj = new Button("Button01",null,"337","67","21","157",null,null,null,null,null,this.Tab01.tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("행 삭제");
            obj.set_cssclass("btn_WF_GridMinus");
            this.Tab01.tabpage1.addChild(obj.name, obj);

            obj = new Button("Button05",null,"337","67","21","227",null,null,null,null,null,this.Tab01.tabpage1.form);
            obj.set_taborder("20");
            obj.set_text("행 추가");
            obj.set_cssclass("btn_WF_GridPlus");
            this.Tab01.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00","254","224",null,"13","484",null,null,null,null,null,this.Tab01.tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("항목명");
            obj.set_cssclass("sta_WF_Item");
            this.Tab01.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.Tab01);
            obj.set_text("탭명 00002");
            this.Tab01.addChild(obj.name, obj);

            obj = new Static("Static49","640","1413","10","188",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static50","0","1596","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static51","0","1619","910","5",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static52","240","1630","10","112",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static55","0","1968","910","15",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static56","0","1983","346","14",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static59","0","1997","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid09","0","2007",null,"149","10",null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_binddataset("Dataset01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"220\"/><Column size=\"225\"/><Column size=\"225\"/><Column size=\"220\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"헤더명\"/><Cell col=\"1\" colspan=\"2\" text=\"헤더명\"/><Cell col=\"3\" rowspan=\"2\" text=\"헤더명\"/><Cell row=\"1\" col=\"1\" text=\"소헤더명\" font=\"9pt &quot;Dotum&quot;\"/><Cell row=\"1\" col=\"2\" text=\"소헤더명\" font=\"9pt &quot;Dotum&quot;\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static60","0","2156","910","15",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","0","2171","370","21",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_text("※ 메시지 표시 공간입니다. 메시지 표시 공간입니다. ");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button63",null,"221","67","21","324",null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_text("행 추가");
            obj.set_cssclass("btn_WF_GridPlus");
            this.addChild(obj.name, obj);

            obj = new Button("Button65",null,"221","67","21","254",null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_text("행 삭제");
            obj.set_cssclass("btn_WF_GridMinus");
            this.addChild(obj.name, obj);

            obj = new Button("Button18",null,"221","58","21","123",null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_text("저장");
            obj.set_cssclass("btn_CRUD_Save");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button21",null,"221","110","21","10",null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_text("파일다운로드");
            obj.set_cssclass("btn_File_Down");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","730","242","170","5",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","0","606","889","10",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static32","0","830","910","15",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button52",null,"870","58","21","10",null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_text("조회");
            obj.set_cssclass("btn_CRUD_Search");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button67","417","936","55","21",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_GridPlus02");
            this.addChild(obj.name, obj);

            obj = new Button("Button70","404","1003","83","21",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("전체 추가");
            obj.set_cssclass("btn_WF_GridPlus02");
            this.addChild(obj.name, obj);

            obj = new Button("Button71","405","1029","83","21",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("전체 삭제");
            obj.set_cssclass("btn_WF_GridMinus02");
            this.addChild(obj.name, obj);

            obj = new Button("Button72","417","962","55","21",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_GridMinus02");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","241","1096","67","21",null,null,null,null,null,null,this);
            obj.set_taborder("122");
            obj.set_text("행 추가");
            obj.set_cssclass("btn_WF_GridPlus");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","311","1096","67","21",null,null,null,null,null,null,this);
            obj.set_taborder("123");
            obj.set_text("행 삭제");
            obj.set_cssclass("btn_WF_GridMinus");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","381","1096","58","21",null,null,null,null,null,null,this);
            obj.set_taborder("124");
            obj.set_text("저장");
            obj.set_cssclass("btn_CRUD_Save");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button05",null,"1096","58","21","10",null,null,null,null,null,this);
            obj.set_taborder("125");
            obj.set_text("저장");
            obj.set_cssclass("btn_CRUD_Save");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button06",null,"1096","67","21","71",null,null,null,null,null,this);
            obj.set_taborder("126");
            obj.set_text("행 삭제");
            obj.set_cssclass("btn_WF_GridMinus");
            this.addChild(obj.name, obj);

            obj = new Button("Button07",null,"1096","67","21","141",null,null,null,null,null,this);
            obj.set_taborder("127");
            obj.set_text("행 추가");
            obj.set_cssclass("btn_WF_GridPlus");
            this.addChild(obj.name, obj);

            obj = new Static("Static64","0","1404","910","5",null,null,null,null,null,null,this);
            obj.set_taborder("128");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button08",null,"0","40","21","10",null,null,null,null,null,this);
            obj.set_taborder("129");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_basic");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button09",null,"0","40","21","53",null,null,null,null,null,this);
            obj.set_taborder("130");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_basic");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button10",null,"0","40","21","96",null,null,null,null,null,this);
            obj.set_taborder("131");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_basic");
            obj.set_tooltiptext("버튼 설명 표시");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static53","0","2192","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("132");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static54","0","484","889","10",null,null,null,null,null,null,this);
            obj.set_taborder("133");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","0","494",null,"1","11",null,null,null,null,null,this);
            obj.set_taborder("134");
            obj.set_text("Static61");
            obj.set_background("rgba(175,175,175,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static65","0","495","890","15",null,null,null,null,null,null,this);
            obj.set_taborder("135");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static66","0","510","346","14",null,null,null,null,null,null,this);
            obj.set_taborder("136");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 10pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button11","85","510","28","14",null,null,null,null,null,null,this);
            obj.set_taborder("137");
            obj.set_cssclass("btn_WF_ContentsClose");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid08","690","1251",null,"90","10",null,null,null,null,null,this);
            obj.set_taborder("138");
            obj.set_binddataset("Dataset00");
            obj.set_treeusecheckbox("false");
            obj.set_font("9pt \"Dotum\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"215\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell text=\"헤더명\"/></Band><Band id=\"body\"><Cell displaytype=\"tree\" edittype=\"tree\" text=\"bind:헤더명\" textAlign=\"center\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static67","25.76%","79",null,"10","55%",null,null,null,null,null,this);
            obj.set_taborder("141");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static68","235","85","41","21",null,null,null,null,null,null,this);
            obj.set_taborder("142");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","276","85","153","21",null,null,null,null,null,null,this);
            obj.set_taborder("143");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("9pt \"Dotum\"");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">라디오1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">라디오2</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("Button12",null,"47","16","16","10",null,null,null,null,null,this);
            obj.set_taborder("144");
            obj.set_cssclass("btn_search_cls");
            obj.set_tooltiptext("검색조건 숨김");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","-2","165",null,"43","12",null,null,null,null,null,this);
            obj.set_taborder("145");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","20","10","40","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("100");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","217","10","40","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("101");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","257","10","137","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("102");
            obj.set_value("ABCDEFG");
            obj.set_cssclass("edit_Search");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button52",null,"10","58","21","80",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("104");
            obj.set_text("조회");
            obj.set_cssclass("btn_CRUD_Search");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo01","60","10","137","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("105");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var Div00_form_Combo01_innerdataset = new nexacro.NormalDataset("Div00_form_Combo01_innerdataset", obj);
            Div00_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">2015</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2014</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo01_innerdataset);
            obj.set_text("2015");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button50","376","10","15","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("107");
            obj.set_cssclass("btn_WF_Search");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","414","10","40","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("108");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","454","10","100","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("109");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_font("9pt \"Gulim\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","558","9","10","23",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("110");
            obj.set_text("~");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","571","10","100","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("111");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button79",null,"10","52","21","25",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("113");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_basic");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","680","10","80","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("114");
            obj.set_text("텍스트");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static70","196","176","20","21",null,null,null,null,null,null,this);
            obj.set_taborder("147");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static71","246","176","10","21",null,null,null,null,null,null,this);
            obj.set_taborder("148");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static72",null,"176","25","32","13",null,null,null,null,null,this);
            obj.set_taborder("149");
            obj.set_text("25");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static73","393","176","20","21",null,null,null,null,null,null,this);
            obj.set_taborder("150");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static74","443","176","10","21",null,null,null,null,null,null,this);
            obj.set_taborder("151");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static75","553","176","5","21",null,null,null,null,null,null,this);
            obj.set_taborder("152");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static76","565","176","5","21",null,null,null,null,null,null,this);
            obj.set_taborder("153");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static77","19","197","177","10",null,null,null,null,null,null,this);
            obj.set_taborder("154");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static79","779","166","117","10",null,null,null,null,null,null,this);
            obj.set_taborder("156");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static80","-2","208","168","15",null,null,null,null,null,null,this);
            obj.set_taborder("157");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static81","730","208","168","13",null,null,null,null,null,null,this);
            obj.set_taborder("158");
            obj.set_text("13");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static83","25.54%","197",null,"10","55.22%",null,null,null,null,null,this);
            obj.set_taborder("160");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button13",null,"165","16","16","12",null,null,null,null,null,this);
            obj.set_taborder("163");
            obj.set_cssclass("btn_search_open");
            obj.set_tooltiptext("검색조건 펼침");
            this.addChild(obj.name, obj);

            obj = new Static("Static69","50","176","10","30",null,null,null,null,null,null,this);
            obj.set_taborder("164");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static30",null,"221","100","21","401",null,null,null,null,null,this);
            obj.set_taborder("165");
            obj.set_text("(조회 10건)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("Static63","306","424","311","10",null,null,null,null,null,null,this);
            obj.set_taborder("166");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button23","306","434","21","22",null,null,null,null,null,null,this);
            obj.set_taborder("168");
            obj.set_cssclass("btn_WF_PagePP");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button24","326","434","21","22",null,null,null,null,null,null,this);
            obj.set_taborder("169");
            obj.set_cssclass("btn_WF_PageP");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button25","594","434","23","22",null,null,null,null,null,null,this);
            obj.set_taborder("170");
            obj.set_cssclass("btn_WF_PageNN");
            obj.set_borderRadius("2px");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button26","575","434","21","22",null,null,null,null,null,null,this);
            obj.set_taborder("171");
            obj.set_cssclass("btn_WF_PageN");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button27","353","434","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("172");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_PageNumberOn");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button28","372","434","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("173");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button29","393","434","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("174");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button30","414","434","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("175");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button31","435","434","23","22",null,null,null,null,null,null,this);
            obj.set_taborder("176");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button14","542","434","23","22",null,null,null,null,null,null,this);
            obj.set_taborder("177");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button15","519","434","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("178");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button16","498","434","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("179");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button17","477","434","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("180");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button19","456","434","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("181");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0","21","910","2",null,null,null,null,null,null,this);
            obj.set_taborder("182");
            obj.set_text("2");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button20",null,"21","40","21","10",null,null,null,null,null,this);
            obj.set_taborder("183");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_basic");
            obj.set_tooltiptext("버튼 설명 표시");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static82","793","42","117","5",null,null,null,null,null,null,this);
            obj.set_taborder("184");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("greenyellow");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static84","535","0","245","21",null,null,null,null,null,null,this);
            obj.set_taborder("185");
            obj.set_visible("false");
            obj.set_text("조회조건타이틀이 있을때의 공통버튼위치→");
            obj.set_background("lightskyblue");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static85","534","21","246","21",null,null,null,null,null,null,this);
            obj.set_taborder("186");
            obj.set_text("조회조건타이틀이 없을때의 공통버튼위치→");
            obj.set_visible("false");
            obj.set_background("lightskyblue");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button22",null,"221","67","21","184",null,null,null,null,null,this);
            obj.set_taborder("187");
            obj.set_text("행 복사");
            obj.set_cssclass("btn_WF_GridCopy");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid10","0","1790",null,"177","10",null,null,null,null,null,this);
            obj.set_taborder("188");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj.set_selecttype("cell");
            obj.set_font("9pt \"Dotum\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"85\"/><Column size=\"397\"/><Column size=\"110\"/><Column size=\"175\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"헤더명\"/><Cell col=\"2\" text=\"헤더명2 (필수입력)\"/><Cell col=\"3\" text=\"헤더명3\"/><Cell col=\"4\" text=\"헤더명4 (입력불가)\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:헤더명\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:헤더명2\" background=\"rgba(203,255,117,1)\"/><Cell col=\"3\" text=\"bind:헤더명3\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:헤더명4\" textAlign=\"center\" verticalAlign=\"middle\" background=\"rgba(237,237,237,1)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static86","0","1766","346","14",null,null,null,null,null,null,this);
            obj.set_taborder("189");
            obj.set_text("관내국재무 (소 타이틀)");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 10pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static87","0","1780","170","10",null,null,null,null,null,null,this);
            obj.set_taborder("190");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static88","-2","1751","168","15",null,null,null,null,null,null,this);
            obj.set_taborder("191");
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
            obj = new Layout("default","",920,2202,this,function(p){});
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
            this.Tab00.tabpage1.form.Div00.form.Edit00.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Div01.form.Edit00.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.Div00.form.Edit00.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
        };
        this.loadIncludeScript("TemplateGuide_001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
