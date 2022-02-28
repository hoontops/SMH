(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacro_plugin_test");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Plugin("Plugin00","217","275","799","485",null,null,null,null,null,null,this);
            obj.set_classid("{8856F961-340A-11D0-A96B-00C04FD705A2}");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","3","14","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("URL 호출1");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","272","14","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("팝업호출");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","136","14","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("URL 호출2");
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
        this.registerScript("nexacro_plugin_test1.xfdl", function() {

        this.nexacro_plugin_test_onload = function (obj, e)
        {
        	this.Plugin00.addEventHandler("DocumentComplete", this.Plugin00_DocumentComplete, this);
        	trace(this.Plugin00.findEventHandler("DocumentComplete", this.Plugin00_DocumentComplete, this));
        };

        this.Plugin00_DocumentComplete = function (obj, e)
        {
        	trace(e);
        };

        this.Button00_onclick = function (obj, e)
        {
        	this.Plugin00.callMethod("Navigate2", "naver.com");
        	trace(this.Plugin00.findEventHandler("DocumentComplete", this.Plugin00_DocumentComplete, this));
        };

        this.Button02_onclick = function (obj, e)
        {
        	this.Plugin00.callMethod("Navigate2", "miplatform.co.kr");
        	trace(this.Plugin00.findEventHandler("DocumentComplete", this.Plugin00_DocumentComplete, this));
        };

        this.Button01_onclick = function (obj, e)
        {
        	var objNew = new ChildFrame();
        	objNew.init("modal", "absolute", 10, 10, 100, 100);
        	objNew.set_showtitlebar(true);
        	objNew.showModal("modal", this.getOwnerFrame(), {
        	}, this, "callbackFunc");
        	trace(this.Plugin00.findEventHandler("DocumentComplete", this.Plugin00_DocumentComplete, this));
        };

        this.callbackFunc = function (strId, obj)
        {
        	trace("callbackFunc strId : " + strId + " obj : " + obj);
        	// this.Plugin00.callMethod("Navigate2", "daum.net");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.nexacro_plugin_test_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("nexacro_plugin_test1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
