(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacro_select");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\" prop=\"TEXT\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Calendar("Calendar00","239","63","100","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("20140912");
            obj.set_dateformat("yyyy-MM-dd ddd");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","59","63","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_value("100000");
            obj.getSetter("mask").set("###,###");
            this.addChild(obj.name, obj);

            obj = new Spin("Spin00","59","109","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_value("100");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","242","116","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("dfdsfss");
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
        this.loadIncludeScript("nexacro_select.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
