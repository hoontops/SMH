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
            this.set_titletext("메세지");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static06","910","0","10","530",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static61","0","495","910","10",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","37","910","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("메세지 제목");
            obj.set_cssclass("sta_WF_Label2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","36","910","2",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelLine");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","846","0","64","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("설문참여");
            obj.set_cssclass("btn_WF_basic");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static62","540","505","370","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("경영기획실 경영성과정보팀");
            obj.set_color("rgba(68,68,68,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","779","42","100","21",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("2015-02-20");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","644","505","100","21",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("우정사업본부");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","0","67","910","428",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("텍스트가 나오는 곳입니다.\r\n텍스트가 나오는 곳입니다.\r\n\r\n텍스트가 나오는 곳입니다.\r\n텍스트가 나오는 곳입니다.\r\n\r\n텍스트가 나오는 곳입니다.");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0","21","910","15",null,null,null,null,null,null,this);
            obj.set_taborder("12");
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
        this.loadIncludeScript("TemplateGuide_007.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
