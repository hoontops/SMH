(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacro_array");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","91","69","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Button00");
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
        this.registerScript("nexacro_array.xfdl", function() {

        this.Button00_onclick = function (obj, e)
        {
        	var defaultNation = new Array(3);
        	for (var i = 0; i < defaultNation.length; i++)
        	{
        		defaultNation[i] = new Array(10);

        		// for(var j=0;j<10;j++){
        		// defaultNation[i][j] = new Array(10);
        		// }
        	}

        	defaultNation[0][0] = "13";
        	defaultNation[1][0] = "1";
        	defaultNation[2][0] = "2;";
        	defaultNation[0][1] = 99;
        	defaultNation[1][1] = -1;
        	defaultNation[2][1] = 33;
        	defaultNation.sort();

        	// trace(defaultNation[0][0]);
        	// trace(defaultNation[0][1]);
        	// trace(defaultNation[0][2]);

        	// defaultNation[0][0][0] = "AFGHANISTAN";
        	// defaultNation[0][0][1] = "22222222";
        	// trace(defaultNation[0][0][0]);
        	// trace(defaultNation[0][0][1]);
        	trace(defaultNation);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("nexacro_array.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
