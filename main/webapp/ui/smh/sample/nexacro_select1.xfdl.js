(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacro_select1");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("Calendar00","239","63","100","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("20140912");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","59","63","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_value("100000");
            obj.getSetter("mask").set("###,###");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","392","63","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("dfdsfss");
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
        this.loadIncludeScript("nexacro_select1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
