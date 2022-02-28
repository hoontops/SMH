(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacro_focus2");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("Edit00","83","75","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","83","184","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","8.11%","109",null,"20","80.18%",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","8.11%","143",null,"20","80.18%",null,null,null,null,null,this);
            obj.set_taborder("3");
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
        this.registerScript("nexacro_focus2.xfdl", function() {

        this.Edit00_onkeydown = function (obj, e)
        {
        	if (e.keycode == 13)
        	{
        		var objNextComponent = obj.parent.getNextComponent(obj, true);
        		trace("objNextComponent : " + objNextComponent.name);
        		objNextComponent.setFocus();
        	}
        };

        this.Button00_onclick = function (obj, e)
        {
        	alert("Button00_onclick");
        }
        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Edit00.addEventHandler("onkeydown",this.Edit00_onkeydown,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Edit01.addEventHandler("onkeydown",this.Edit00_onkeydown,this);
            this.MaskEdit00.addEventHandler("onkeydown",this.Button00_onclick,this);
        };
        this.loadIncludeScript("nexacro_focus2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
