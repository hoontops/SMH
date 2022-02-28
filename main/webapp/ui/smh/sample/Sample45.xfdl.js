(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("pie");
            this.set_titletext("pie");
            this.set_background("rgba(255,255,255,1)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,723);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pie", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"category\">IE</Col><Col id=\"value\">26.8</Col></Row><Row><Col id=\"category\">Chrome</Col><Col id=\"value\">12.8</Col></Row><Row><Col id=\"category\">Firefox</Col><Col id=\"value\">45.0</Col></Row><Row><Col id=\"category\">Safari</Col><Col id=\"value\">8.5</Col></Row><Row><Col id=\"value\">6.2</Col><Col id=\"category\">Opera</Col></Row><Row><Col id=\"category\">Etc</Col><Col id=\"value\">0.7</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new EcoChart("ecochart","20","67",null,"444","48",null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Static("st_male",null,"37","111","20","198",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("st_female",null,"37","94","20","29",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","1.95%","527",null,"168","4.69%",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_binddataset("ds_pie");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"149\"/><Column size=\"226\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"category\"/><Cell col=\"1\" text=\"value\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:category\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:value\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1.95%","10",null,"47","4.69%",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Pie & Legend");
            obj.set_cssclass("WF_sta_Title");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,723,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Sample45.xfdl", function() {

        var chart;

        this.StackBarSample_onload = function (obj, e)
        {
        	this.drawChart();
        };


        this.drawChart = function ()
        {
        	if (!chart)
        	{
        		var config = {
        			"type" : "Pie",
        			"chart" : {
        				"id" : "pie chart",
        				"bindDataset" : "ds_pie",
        				"bindCategory" : "category",
        				"bindValue" : "value",
        				"colors" : "color20",
        				"plotHoverable" : true,
        				"radius" : 0.9,
        				"borderWidth" : 2,
        				"labelRadius" : 0.7,
        				"labelFontSize" : 10,
        				"labelColor" : "black",
        				"labelFontType" : "bold",
        				"labelWordwrap" : true,
        				"labelMaxWidth" : 70
        			},
        			"legend" : {
        				"align" : "center",
        				"labelFontSize" : 10,
        				"switchable" : false
        			},
        			"tooltip" : {
        				"text" : "[%x] browser shares : [%y]% website ",
        				"fontType" : "normal",
        				"fontSize" : 10
        			}
        		};

        		this.ecochart.set_config(config);
        	}

        	chart = this.ecochart.getChart();

        	this.ecochart.draw();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.StackBarSample_onload,this);
        };
        this.loadIncludeScript("Sample45.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
