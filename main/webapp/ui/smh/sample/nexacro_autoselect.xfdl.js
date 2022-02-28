(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacro_autoselect");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("Edit00","92","68","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","241","68","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","547","68","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","397","68","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
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
        this.loadIncludeScript("nexacro_autoselect.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
