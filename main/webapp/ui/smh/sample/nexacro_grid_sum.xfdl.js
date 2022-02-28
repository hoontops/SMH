(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacro_grid_sum");
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
            obj.set_keystring("G:Column2");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">1000</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">10000</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">2000</Col><Col id=\"Column2\">A</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">20000</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">3000</Col><Col id=\"Column2\">B</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">30000</Col><Col id=\"Column2\">C</Col></Row><Row><Col id=\"Column0\">6</Col><Col id=\"Column1\">4000</Col><Col id=\"Column2\">C</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","61","75","499","293",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"66\"/><Column size=\"149\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" expr=\"expr:dataset.getRowType(rowidx)\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:Column1\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" expr=\"expr:dataset.getSum(&apos;Column1&apos;)\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","322","37","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("delete");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","186","37","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("add");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","453","38","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button02");
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
        this.registerScript("nexacro_grid_sum.xfdl", function() {

        this.Button01_onclick = function (obj, e)
        {
        	var nRow = this.Dataset00.addRow();
        	this.Dataset00.setColumn(nRow, "Column1", 1000);
        };

        this.Button00_onclick = function (obj, e)
        {
        	trace(this.Dataset00.rowposition);
        	this.Dataset00.deleteRow(this.Dataset00.rowposition);
        };

        this.Button02_onclick = function (obj, e)
        {
        	this.Grid00.parent.applyChange();
        	this.Grid00.set_enableevent(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
        };
        this.loadIncludeScript("nexacro_grid_sum.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
