(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacro_gridShowEditor");
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">111</Col><Col id=\"Column1\">1</Col><Col id=\"Column2\">1</Col></Row><Row><Col id=\"Column0\">222</Col><Col id=\"Column1\">2</Col><Col id=\"Column2\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">111</Col></Row><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDrag", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"value\">AA</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"value\">BB</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">CC</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"value\">DD</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDrop", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","43","37","270","180",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:Column1\"/><Cell col=\"2\" displaytype=\"combo\" edittype=\"combo\" text=\"bind:Column2\" combodataset=\"Dataset01\" combocodecol=\"Column0\" combodatacol=\"Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","332","41","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","48","237","100","132",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsDrag");
            obj.set_selecttype("cell");
            obj.set_tooltiptype("hover");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"value\"/></Band><Band id=\"body\"><Cell text=\"bind:value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid05","160","237","396","132",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsDrop");
            obj.set_selecttype("cell");
            obj.set_tooltiptype("hover");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/></Band><Band id=\"body\"><Cell text=\"bind:value\"/></Band></Format></Formats>");
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
        this.addIncludeScript("nexacro_gridShowEditor.xfdl","lib::comLib.xjs");
        this.registerScript("nexacro_gridShowEditor.xfdl", function() {
        this.executeIncludeScript("lib::comLib.xjs"); /*include "lib::comLib.xjs"*/

        var drag_data;

        this.Button00_onclick = function (obj, e)
        {
        	this.Dataset00.addRow();
        	this.Grid00.setCellPos(2);
        	this.Grid00.showEditor(true);
        	this.Grid05.deleteContentsCol(0);
        };

        this.Button01_onclick = function (obj, e)
        {
        };

        this.Grid01_ondrag = function (obj, e)
        {
        	var objDs = obj.binddataset;
        	/*var col_id = obj.getCellProperty("body", e.cell, "text");
        	 col_id = col_id.slice(5);*/
        	var col_id = this.gfn_getCellBind(obj, e.cell, "body");
        	this.drag_data = this.objects[objDs].getColumn(e.row, col_id);
        	return true;
        };

        this.Grid05_ondrop = function (obj, e)
        {
        	/*var objDs = obj.binddataset;
        	 trace("Current Row : "+e.row);
        	 var fv_findRow = this.objects[objDs].findRow("value",this.drag_data);
        	 if (fv_findRow != -1){
        	 this.gfn_msg("0015","","");	//중복된 자료가 존재합니다.
        	 return;
        	 } else {
        	 var nRow = this.objects[objDs].addRow();
        	 this.objects[objDs].setColumn(nRow,"value",this.drag_data);
        	 }*/

        	var nlastIdx = obj.getCellCount("head");
        	trace("nlastIdx : " + nlastIdx);

        	// var nColIdx = obj.insertContentsCol(0);
        	var nColIdx = obj.appendContentsCol(nlastIdx);
        	trace("nColIdx : " + nColIdx);

        	obj.setCellProperty("Head", nColIdx, "text", this.drag_data);
        	// obj.setCellProperty("Body", 0, "text", this.drag_data);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Grid01.addEventHandler("onkeydown",this.Grid00_onkeydown,this);
            this.Grid01.addEventHandler("ondrag",this.Grid01_ondrag,this);
            this.Grid05.addEventHandler("onkeydown",this.Grid00_onkeydown,this);
            this.Grid05.addEventHandler("ondrop",this.Grid05_ondrop,this);
        };
        this.loadIncludeScript("nexacro_gridShowEditor.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
