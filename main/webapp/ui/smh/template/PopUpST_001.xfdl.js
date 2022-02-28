(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("t");
            this.set_titletext("조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(540,329);
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
            obj._setContents("<ColumnInfo><Column id=\"헤더명01\" type=\"STRING\" size=\"256\"/><Column id=\"헤더명02\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"헤더명01\">텍스트</Col><Col id=\"헤더명02\">텍스트</Col></Row><Row><Col id=\"헤더명02\">텍스트</Col><Col id=\"헤더명01\">텍스트</Col></Row><Row><Col id=\"헤더명01\">텍스트</Col><Col id=\"헤더명02\">텍스트</Col></Row><Row><Col id=\"헤더명01\">텍스트</Col><Col id=\"헤더명02\">텍스트</Col></Row><Row><Col id=\"헤더명01\">텍스트</Col><Col id=\"헤더명02\">텍스트</Col></Row><Row><Col id=\"헤더명01\">텍스트</Col><Col id=\"헤더명02\">텍스트</Col></Row><Row><Col id=\"헤더명01\">텍스트</Col><Col id=\"헤더명02\">텍스트</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static04","2","0",null,"415","983",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","540","329",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_POP_Bg02");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","14","18",null,"15","128",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("타이틀명");
            obj.set_cssclass("sta_WF_popTitle");
            obj.set_font("bold 11pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","15","3",null,"15","29",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","15","33",null,"15","29",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","0","15","340",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","525","0","15","340",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static57","584","7","52","25",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("넓이");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static58","585","35","52","25",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("높이");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","15","99","510","182",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_binddataset("Dataset00");
            obj.set_cellsizingtype("none");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"151\"/><Column size=\"363\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"29\"/></Rows><Band id=\"head\"><Cell text=\"헤더명01\"/><Cell col=\"1\" text=\"헤더명02\"/></Band><Band id=\"body\"><Cell text=\"bind:헤더명01\"/><Cell col=\"1\" text=\"bind:헤더명02\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","15","281",null,"15","29",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","15","317","510","12",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("12");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","15","89",null,"10","29",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","15","46","510","43",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","10.04%","12",null,"21","87.8%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static23","3.94%","10",null,"21","88.19%",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","11.81%","10","270","21",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_font("9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static06",null,"0","10","62","0",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button52",null,"10","58","21","65",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_CRUD_Search");
            obj.set_font("bold 9pt \"Dotum\"");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button79",null,"10","52","21","10",null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_basic");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("Button77","443","296","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Button("Button78","485","296","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_basic");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","517","0","23","23",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("btn_POP_Close");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",540,329,this,function(p){});
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
        this.loadIncludeScript("PopUpST_001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
