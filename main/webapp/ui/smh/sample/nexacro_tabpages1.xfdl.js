(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacro_tabpages");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("Tab00","1","1","615","223",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_background("aqua");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.Tab00);
            obj.set_text("tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.Tab00);
            obj.set_text("tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("Button00","224","74","120","50",null,null,null,null,null,null,this.Tab00.tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("탭2");
            this.Tab00.tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("tabpage3",this.Tab00);
            obj.set_text("tabpage3");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("Button00","340","80","120","50",null,null,null,null,null,null,this.Tab00.tabpage3.form);
            obj.set_taborder("0");
            obj.set_text("탭3");
            this.Tab00.tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("tabpage4",this.Tab00);
            obj.set_text("tabpage4");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage5",this.Tab00);
            obj.set_text("tabpage5");
            this.Tab00.addChild(obj.name, obj);
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
        this.registerScript("nexacro_tabpages1.xfdl", function() {

        this.Tab00_onextrabuttonclick = function (obj, e)
        {
        	trace(" e.screenX : " + e.screenx + " e.screenY : " + e.screeny + " e.clientX : " + e.clientx + " e.clientY : " + e.clienty + " e.canvasX : " + e.canvasx + " e.canvasY : " + e.canvasy);

        	var idx = obj.getIndex(e.clientx, e.clienty);

        	trace(idx);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Tab00.addEventHandler("onextrabuttonclick",this.Tab00_onextrabuttonclick,this);
        };
        this.loadIncludeScript("nexacro_tabpages1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
