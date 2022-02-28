(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacro_tab_spin");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("tab_navi","24","48",null,null,"632","680",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_cssclass("tab_MDI_btn");
            obj.set_background("bisque");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","264","16","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("addTab");
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
        this.registerScript("nexacro_tab_spin.xfdl", function() {

        this.Button01_onclick = function (obj, e)
        {
        	trace(this.tab_navi.getTabpageCount());
        	this.tab_navi.insertTabpage("tabpage" + this.tab_navi.getTabpageCount(), this.tab_navi.getTabpageCount());
        };

        this.nexacro_tab_spin_onload = function (obj, e)
        {
        	for (var i = 0; i < 10; i++)
        	{
        		trace(this.tab_navi.getTabpageCount());
        		this.tab_navi.insertTabpage("tabpage" + this.tab_navi.getTabpageCount(), this.tab_navi.getTabpageCount());
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.nexacro_tab_spin_onload,this);
            this.tab_navi.addEventHandler("onchanged",this.tab_navi_onchanged,this);
            this.tab_navi.addEventHandler("onextrabuttonclick",this.tab_navi_onextrabuttonclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("nexacro_tab_spin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
