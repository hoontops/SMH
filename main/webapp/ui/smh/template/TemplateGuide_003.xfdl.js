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
            this.set_titletext("조회_분리형");
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
            obj._setContents("<ColumnInfo><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"헤더명\" type=\"STRING\" size=\"256\"/><Column id=\"헤더명2\" type=\"STRING\" size=\"256\"/><Column id=\"헤더명3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col></Row><Row><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col></Row><Row><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col></Row><Row><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col></Row><Row><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col></Row><Row><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col></Row><Row><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col></Row><Row><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col></Row><Row><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col></Row><Row><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col></Row><Row><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col></Row><Row><Col id=\"헤더명2\">텍스트</Col><Col id=\"헤더명3\">텍스트</Col></Row></Rows>");
            this.addChild(obj.name, obj);


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
            
            // UI Components Initialize
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

            obj = new Static("Static17","0","36","346","14",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 10pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","50","890","10",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("Button86",null,"0","68","21","10",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("평가지침");
            obj.set_cssclass("btn_WF_Stats");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","59",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static23","20","10","38","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("51");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","60","10","100","21",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("52");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_font("9pt \"Dotum\"");
            var Div00_form_Combo00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_innerdataset", obj);
            Div00_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">선택</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">선택</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button52",null,"10","58","21","10",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("54");
            obj.set_text("조회");
            obj.set_cssclass("btn_CRUD_Search");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","899","58","10","43",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","51","68","10","22",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","1","58","20","43",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","230","117","346","14",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("소 타이틀");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 10pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button18",null,"115","58","21","123",null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_text("저장");
            obj.set_cssclass("btn_CRUD_Save");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button21",null,"115","110","21","10",null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_File_ExcelDown");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","230","131","170","10",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static15","0","102","398","15",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","730","136","170","5",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("5");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","230","141",null,"177","33",null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_binddataset("Dataset00");
            obj.set_font("9pt \"Dotum\"");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"85\"/><Column size=\"523\"/><Column size=\"110\"/><Column size=\"112\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"헤더명\"/><Cell col=\"2\" text=\"헤더명2\"/><Cell col=\"3\" text=\"헤더명3\"/><Cell col=\"4\" text=\"헤더명4\"/></Band><Band id=\"body\"><Cell displaytype=\"checkbox\" edittype=\"checkbox\" text=\"bind:Column0\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"1\" text=\"bind:헤더명\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:헤더명2\"/><Cell col=\"3\" text=\"bind:헤더명3\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:헤더명4\" textAlign=\"center\" verticalAlign=\"middle\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","315","117","28","14",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_cssclass("btn_WF_ContentsClose");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","117","197","319",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_cssclass("div_WF_MenuBox");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","197","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("상여대사자료생성");
            obj.set_cssclass("btn_WF_menu");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button01","0","31","197","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("평균지급률반영");
            obj.set_cssclass("btn_WF_menu");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button02","0","61","197","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("평가지급자료생성");
            obj.set_cssclass("btn_WF_menu");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button03","0","91","197","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("예산대비 재원분리금액 입력");
            obj.set_cssclass("btn_WF_menu");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button04","0","121","197","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("청별 현업재원생성");
            obj.set_cssclass("btn_WF_menu");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button05","0","151","197","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("청별 예산지급률자료생성");
            obj.set_cssclass("btn_WF_menu");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button06","0","181","197","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("총괄국별 현업재원생성(경인강원)");
            obj.set_cssclass("btn_WF_menu");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button07","0","211","197","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("현업재원 지급자료생성");
            obj.set_cssclass("btn_WF_menu");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button08","0","241","197","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("현업재원 지급자료생성(경인강원)");
            obj.set_cssclass("btn_WF_menu");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button09","0","271","197","32",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_text("비현업재원 지급자료생성");
            obj.set_cssclass("btn_WF_menu");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","0","117","197","1",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_cssclass("static_WF_MenuLine");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","419","197","1",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("static_WF_MenuLine");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","196","117","1","303",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_text("Static07");
            obj.set_cssclass("static_WF_MenuLine");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","117","1","303",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("Static07");
            obj.set_cssclass("static_WF_MenuLine");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","202","117","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("btn_h_Show");
            this.addChild(obj.name, obj);

            obj = new Button("Button10","202","117","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("btn_h_Hide");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"141","18","18","10",null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_cssclass("btn_v_Show");
            this.addChild(obj.name, obj);

            obj = new Button("Button11",null,"141","18","18","10",null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_cssclass("btn_v_Hide");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","0","21","890","15",null,null,null,null,null,null,this);
            obj.set_taborder("70");
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
        this.loadIncludeScript("TemplateGuide_003.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
