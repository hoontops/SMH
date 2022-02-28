(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacro_tab");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("Tab00","48","70","445","165",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("1");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_border("1px solid rgba(0,0,0,1)");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.Tab00);
            obj.set_text("tabpage1");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.Tab00);
            obj.set_text("tabpage2");
            this.Tab00.addChild(obj.name, obj);

            obj = new Button("Button00","534","87","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","534","120","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button01");
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
        this.registerScript("nexacro_tab.xfdl", function() {

        this.Tab00_onchanged = function (obj, e)
        {
        	trace("Tab00_onchanged : " + e.postindex);
        };

        this.Button00_onclick = function (obj, e)
        {
        	this.Tab00.set_tabindex(1);
        };

        this.Tab00_onextrabuttonclick = function (obj, e)
        {
        	this.Tab00.set_tabindex(1);
        };

        this.Button01_onclick = function (obj, e)
        {
        	var bSucc = this.Tab00.removeTabpage(1);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Tab00.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.Tab00.addEventHandler("onextrabuttonclick",this.Tab00_onextrabuttonclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("nexacro_tab.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
