(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Tempalte_005");
            this.set_titletext("조회_게시판형");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("title2", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"check\" type=\"STRING\" size=\"256\"/><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"헤더명\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"헤더명2\" type=\"STRING\" size=\"256\"/><Column id=\"헤더명3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col><Col id=\"No\">10</Col><Col id=\"헤더명\">텍스트텍스트텍스트</Col></Row><Row><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col><Col id=\"No\">9</Col><Col id=\"헤더명\">텍스트텍스트텍스트</Col></Row><Row><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col><Col id=\"No\">8</Col><Col id=\"Column1\">image::img_WF_File.png</Col><Col id=\"Column0\">image::img_WF_Reply.png</Col><Col id=\"헤더명\">텍스트텍스트텍스트</Col></Row><Row><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col><Col id=\"No\">7</Col><Col id=\"헤더명\">텍스트텍스트텍스트</Col></Row><Row><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col><Col id=\"No\">6</Col><Col id=\"헤더명\">텍스트텍스트텍스트</Col></Row><Row><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col><Col id=\"No\">5</Col><Col id=\"헤더명\">텍스트텍스트텍스트</Col></Row><Row><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col><Col id=\"No\">4</Col><Col id=\"헤더명\">텍스트텍스트텍스트</Col></Row><Row><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col><Col id=\"No\">3</Col><Col id=\"헤더명\">텍스트텍스트텍스트</Col></Row><Row><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col><Col id=\"No\">2</Col><Col id=\"헤더명\">텍스트텍스트텍스트</Col></Row><Row><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col><Col id=\"No\">1</Col><Col id=\"헤더명\">텍스트텍스트텍스트텍스트텍스트텍스트</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("Tab00","0","0",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.Tab00);
            obj.set_text("탭명 00001");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,"43","0",null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SearchBg");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static23","20","10","38","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("42");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","180","10","38","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("43");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
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
            obj.set_text("Combo00");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","220","10","100","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("45");
            obj.set_value("null");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","337","10","100","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("46");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","324","10","10","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("47");
            obj.set_text("~");
            obj.set_color("rgba(68,68,68,1)");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","447","10","247","21",null,null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("48");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button79",null,"10","52","21","10",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("49");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_basic");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Button("Button52",null,"10","58","21","65",null,null,null,null,null,this.Tab00.tabpage1.form.Div00.form);
            obj.set_taborder("50");
            obj.set_text("조회");
            obj.set_cssclass("btn_CRUD_Search");
            this.Tab00.tabpage1.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","0","58","195","14",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Grid("Grid00","0","80",null,"379","0",null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("8");
            obj.set_binddataset("title2");
            obj.set_cssclass("Grid_WF_bbs");
            obj.set_font("9pt \"Dotum\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"55\"/><Column size=\"50\"/><Column size=\"409\"/><Column size=\"85\"/><Column size=\"125\"/><Column size=\"124\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"헤더명\"/><Cell col=\"4\" text=\"첨부파일\"/><Cell col=\"5\" text=\"헤더명2\"/><Cell col=\"6\" text=\"헤더명3\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:No\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" displaytype=\"image\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"3\" text=\"bind:헤더명\"/><Cell col=\"4\" displaytype=\"image\" text=\"bind:Column1\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"5\" text=\"bind:헤더명2\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"6\" text=\"bind:헤더명3\" textAlign=\"center\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Button("Button73",null,"55","40","21","61",null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_basic");
            obj.set_font("9pt \"Dotum\"");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Button("Button17",null,"55","58","21","0",null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("삭제");
            obj.set_cssclass("btn_CRUD_Delete");
            obj.set_font("bold 9pt \"Dotum\"");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Static("Static00","711","76","200","5",null,null,null,null,null,null,this.Tab00.tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Tab00.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.Tab00);
            obj.set_text("탭명 00002");
            this.Tab00.addChild(obj.name, obj);

            obj = new Static("Static57","960","7","52","25",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("넓이");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","961","35","52","25",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("높이");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1","31","20","43",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","51","41","10","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","161","41","20","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","211","41","10","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","899","31","10","43",null,null,null,null,null,null,this);
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

            obj = new Static("Static21","910","0","10","530",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","321","46","5","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","333","46","5","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","0","72","125","15",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","856","72","46","13",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("13");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0","100","200","10",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","306","488","311","10",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","306","520","311","10",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button23","306","498","21","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("btn_WF_PagePP");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button24","326","498","21","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("btn_WF_PageP");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button25","594","498","23","22",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("btn_WF_PageNN");
            obj.set_borderRadius("2px");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button26","575","498","21","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("btn_WF_PageN");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button27","353","498","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_PageNumberOn");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button28","372","498","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button29","393","498","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button30","414","498","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button31","435","498","23","22",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","542","498","23","22",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","519","498","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","498","498","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","477","498","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","456","498","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_PageNumber");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,530,this,function(p){});
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
        this.loadIncludeScript("TemplateGuide_002.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
