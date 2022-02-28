(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacro_addColumninfo");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dataset00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","59","34","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("addColumnInfo");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","119","77","270","180",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dataset00");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
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
        this.registerScript("nexacro_addColumninfo.xfdl", function() {

        this.Button00_onclick = function (obj, e)
        {
        	var o_cinfo = new ColumnInfo();
        	o_cinfo.set_type("STRING");
        	o_cinfo.set_size("256");

        	this.dataset00.addColumnInfo("new_col1", o_cinfo);
        	trace(this.dataset00.saveXML());
        	this.dataset00.addRow();

        	this.dataset00.setColumn(0, "new_col1", "1111");
        	// this.Grid00.set_binddataset("dataset00");
        	this.Grid00.createFormat();

        	alert('생성완료');
        	trace(this.dataset00.saveXML());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("nexacro_addColumninfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
