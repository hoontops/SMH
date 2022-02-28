(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("fm_bottom");
            this.set_titletext("bottom");
            this.set_background("#f0f0f0");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,27);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_menuPath","10","4","610","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_BF_message");
            this.addChild(obj.name, obj);

            obj = new Static("Static02",null,"4","185","21","15",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("프로그램 정보<fc v=\"#000000\"> SM상선 버전 1.0</fc>");
            obj.set_cssclass("sta_BF_version");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"3","96","21","-110",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("업데이트 확인");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,27,this,function(p){});
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
        this.loadIncludeScript("frmBottom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
