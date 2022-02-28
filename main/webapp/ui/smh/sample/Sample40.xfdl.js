(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("barhorizontal");
            this.set_titletext("barhorizontal");
            this.set_background("rgba(255,255,255,1)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,723);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_bar", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"year\" type=\"STRING\" size=\"256\"/><Column id=\"income\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"year\">1920</Col><Col id=\"income\">23.5</Col></Row><Row><Col id=\"year\">1930</Col><Col id=\"income\">8</Col></Row><Row><Col id=\"year\">1940</Col><Col id=\"income\">30.1</Col></Row><Row><Col id=\"year\">1950</Col><Col id=\"income\">29.5</Col></Row><Row><Col id=\"year\">1960</Col><Col id=\"income\">18.3</Col></Row><Row><Col id=\"year\">1970</Col><Col id=\"income\">22</Col></Row><Row><Col id=\"year\">1980</Col><Col id=\"income\">12</Col></Row><Row><Col id=\"year\">1990</Col><Col id=\"income\">3</Col></Row><Row><Col id=\"year\">2000</Col><Col id=\"income\">22</Col></Row></Rows>");
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

            obj = new Grid("Grid00","1.95%","521",null,"168","4.69%",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_binddataset("ds_bar");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"257\"/><Column size=\"249\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"year\"/><Cell col=\"1\" text=\"income\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:year\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:income\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1.95%","10",null,"47","4.69%",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("BarHorizontal & Crosshair");
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
        this.registerScript("Sample40.xfdl", function() {

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
        			"type" : "Basic",
        			"chart" : {
        				"id" : "bar horizontal chart",
        				"bindDataset" : "ds_bar",
        				"bindCategory" : "year",
        				"colors" : "colorRed10",
        				"plotLeftBorderWidth" : 3,
        				"plotBottomBorderWidth" : 3
        			},
        			"categoryAxis" : {
        				"id" : "categoryAxis X",
        				"position" : "left",
        				"lineColor" : "#717a8380",
        				"tickColor" : "#717a8380",
        				"autoscaleMargin" : 0.08,
        				"tickWidth" : 3,
        				"tickLength" : 10,
        				"labelFontSize" : 8,
        				"title" : "Year",
        				"titleFontSize" : 11,
        				"titleFontType" : "bold",
        				"titleMargin" : 30
        			},
        			"valueAxis" : [
        				{
        				"id" : "ValueAxis Y",
        				"title" : "Income in millions, US",
        				"max" : 35,
        				"position" : "bottom",
        				"lineColor" : "#717a8380",
        				"tickColor" : "#717a8380",
        				"tickDecimals" : 1,
        				"tickWidth" : 2,
        				"tickLength" : 15,
        				"labelFontSize" : 9,
        				"titleFontSize" : 12,
        				"titleFontType" : "bold",
        				"titleMargin" : 40,
        				"ticks" : 5
        			}
        			],
        			"series" : [
        				{
        				"id" : "Series 1",
        				"title" : "income",
        				"bindValue" : "income",
        				"xaxis" : "categoryAxis X",
        				"yaxis" : "ValueAxis Y",
        				"showBar" : true,
        				"barHorizontal" : true,
        				"barWidth" : 0.7,
        				"barOpacity" : 0.6
        			}
        			],
        			"crosshair" : {
        				"mode" : "y"
        			},
        			"tooltip" : {
        				"text" : "income : [%x]",
        				"fontFace" : "Meiryo UI",
        				"fontSize" : 9,
        				"fontType" : "bold",
        				"fontColor" : "#ffffff",
        				"borderWidth" : 1,
        				"borderStyle" : "solid",
        				"borderColor" : "#717a83",
        				"color" : "#717a83cc",
        				"opacity" : 1,
        				"hookWidth" : 10,
        				"hookHeight" : 10,
        				"offsetX" : 0,
        				"offsetY" : 20
        			}
        		};

        		this.ecochart.set_config(config);
        	}

        	this.ecochart.draw();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.StackBarSample_onload,this);
        };
        this.loadIncludeScript("Sample40.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
