(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacro_dataset");
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
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">111</Col><Col id=\"Column1\">aaa</Col><Col id=\"Column2\">000</Col></Row><Row><Col id=\"Column0\">222</Col><Col id=\"Column1\">bbb</Col><Col id=\"Column2\">999</Col></Row><Row><Col id=\"Column0\">333</Col><Col id=\"Column1\">ccc</Col><Col id=\"Column2\">888</Col></Row><Row><Col id=\"Column0\">111</Col><Col id=\"Column1\">bbb</Col><Col id=\"Column2\">777</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","67","30","379","228",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("Dataset00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell col=\"0\" text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","500","32","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("event false");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","500","91","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("event true");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","500","148","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("S:+Column0");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","500","209","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("S:-Column0");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","500","268","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Duplication Check");
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
        this.addIncludeScript("nexacro_dataset.xfdl","lib::comLib.xjs");
        this.registerScript("nexacro_dataset.xfdl", function() {
        /***********************************************************************
         * Script Include
         ***********************************************************************/
        this.executeIncludeScript("lib::comLib.xjs"); /*include "lib::comLib.xjs"*/

        this.Dataset00_onrowposchanged = function (obj, e)
        {
        	alert("Dataset00_onrowposchanged");
        };

        this.Button00_onclick = function (obj, e)
        {
        	this.Dataset00.set_enableevent(false);
        };

        this.Button01_onclick = function (obj, e)
        {
        	this.Dataset00.set_enableevent(true);
        };

        this.Button02_onclick = function (obj, e)
        {
        	this.Dataset00.set_keystring("S:+Column0");
        };

        this.Button03_onclick = function (obj, e)
        {
        	this.Dataset00.set_keystring("S:-Column0");
        };

        this.Button04_onclick = function (obj, e)
        {
        	var bSuccess = this.gfn_isDuplicationCheck(this.Dataset00, "Column0");
        	trace("bSuccess : " + bSuccess);
        	var bSuccess = this.gfn_isDuplicationCheck(this.Dataset00, "Column1");
        	trace("bSuccess : " + bSuccess);
        	var bSuccess = this.gfn_isDuplicationCheck(this.Dataset00, "Column2");
        	trace("bSuccess : " + bSuccess);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Dataset00.addEventHandler("onrowposchanged",this.Dataset00_onrowposchanged,this);
        };
        this.loadIncludeScript("nexacro_dataset.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
