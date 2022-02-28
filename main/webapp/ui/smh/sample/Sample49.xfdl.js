(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("timeaxis");
            this.set_titletext("timeaxis");
            this.set_background("rgba(255,255,255,1)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,723);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_visit", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"date\" type=\"DATETIME\" size=\"256\"/><Column id=\"visits\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"category\">1</Col><Col id=\"date\">19900228000</Col><Col id=\"visits\">315.71</Col></Row><Row><Col id=\"category\">2</Col><Col id=\"date\">19900331000</Col><Col id=\"visits\">290</Col></Row><Row><Col id=\"category\">3</Col><Col id=\"date\">19900430000</Col><Col id=\"visits\">250</Col></Row><Row><Col id=\"category\">4</Col><Col id=\"date\">19900531000</Col><Col id=\"visits\">220</Col></Row><Row><Col id=\"category\">5</Col><Col id=\"date\">19900630000</Col><Col id=\"visits\">85</Col></Row><Row><Col id=\"category\">6</Col><Col id=\"date\">19900731000</Col><Col id=\"visits\">55</Col></Row><Row><Col id=\"category\">7</Col><Col id=\"date\">19900831000</Col><Col id=\"visits\">200</Col></Row><Row><Col id=\"category\">8</Col><Col id=\"date\">19900930000</Col><Col id=\"visits\">300</Col></Row><Row><Col id=\"category\">9</Col><Col id=\"date\">19901031000</Col><Col id=\"visits\">250</Col></Row><Row><Col id=\"date\">19901130000</Col><Col id=\"category\">10</Col><Col id=\"visits\">280</Col></Row><Row><Col id=\"date\">19901231000</Col><Col id=\"category\">11</Col><Col id=\"visits\">420</Col></Row><Row><Col id=\"category\">12</Col><Col id=\"date\">19910131000</Col><Col id=\"visits\">380</Col></Row><Row><Col id=\"category\">13</Col><Col id=\"date\">19910228000</Col><Col id=\"visits\">316.65</Col></Row><Row><Col id=\"category\">14</Col><Col id=\"date\">19910331000</Col><Col id=\"visits\">111</Col></Row><Row><Col id=\"category\">15</Col><Col id=\"date\">19910430000</Col><Col id=\"visits\">178.2</Col></Row><Row><Col id=\"category\">16</Col><Col id=\"date\">19910531000</Col><Col id=\"visits\">316.55</Col></Row><Row><Col id=\"category\">17</Col><Col id=\"date\">19910630000</Col><Col id=\"visits\">270</Col></Row><Row><Col id=\"category\">19</Col><Col id=\"date\">19910731000</Col><Col id=\"visits\">313.84</Col></Row><Row><Col id=\"category\">20</Col><Col id=\"date\">19910831000</Col><Col id=\"visits\">290</Col></Row><Row><Col id=\"category\">21</Col><Col id=\"date\">19910930000</Col><Col id=\"visits\">315.71</Col></Row><Row><Col id=\"category\">22</Col><Col id=\"date\">19911031000</Col><Col id=\"visits\">290</Col></Row><Row><Col id=\"category\">23</Col><Col id=\"date\">19911130000</Col><Col id=\"visits\">250</Col></Row><Row><Col id=\"category\">24</Col><Col id=\"date\">19911231000</Col><Col id=\"visits\">220</Col></Row><Row><Col id=\"category\">25</Col><Col id=\"date\">19920131000</Col><Col id=\"visits\">85</Col></Row><Row><Col id=\"category\">26</Col><Col id=\"date\">19920229000</Col><Col id=\"visits\">120</Col></Row><Row><Col id=\"category\">27</Col><Col id=\"date\">19920331000</Col><Col id=\"visits\">200</Col></Row><Row><Col id=\"category\">28</Col><Col id=\"date\">19920430000</Col><Col id=\"visits\">300</Col></Row><Row><Col id=\"category\">29</Col><Col id=\"date\">19920531000</Col><Col id=\"visits\">250</Col></Row><Row><Col id=\"category\">30</Col><Col id=\"date\">19920731000</Col><Col id=\"visits\">280</Col></Row><Row><Col id=\"category\">31</Col><Col id=\"date\">19920831000</Col><Col id=\"visits\">420</Col></Row><Row><Col id=\"category\">32</Col><Col id=\"date\">19920930000</Col><Col id=\"visits\">380</Col></Row><Row><Col id=\"category\">33</Col><Col id=\"date\">19921031000</Col><Col id=\"visits\">316.65</Col></Row><Row><Col id=\"category\">34</Col><Col id=\"date\">19921130000</Col><Col id=\"visits\">111</Col></Row><Row><Col id=\"category\">35</Col><Col id=\"date\">19921231000</Col><Col id=\"visits\">178.2</Col></Row><Row><Col id=\"category\">36</Col><Col id=\"date\">19930131000</Col><Col id=\"visits\">316.55</Col></Row><Row><Col id=\"category\">37</Col><Col id=\"date\">19930228000</Col><Col id=\"visits\">318.54</Col></Row><Row><Col id=\"category\">38</Col><Col id=\"date\">19930331000</Col><Col id=\"visits\">200</Col></Row><Row><Col id=\"category\">39</Col><Col id=\"date\">19930430000</Col><Col id=\"visits\">315.71</Col></Row><Row><Col id=\"category\">40</Col><Col id=\"date\">19930531000</Col><Col id=\"visits\">290</Col></Row><Row><Col id=\"category\">41</Col><Col id=\"date\">19930630000</Col><Col id=\"visits\">250</Col></Row><Row><Col id=\"category\">42</Col><Col id=\"date\">19930731000</Col><Col id=\"visits\">220</Col></Row><Row><Col id=\"category\">43</Col><Col id=\"date\">19930831000</Col><Col id=\"visits\">85</Col></Row><Row><Col id=\"category\">44</Col><Col id=\"date\">19930930000</Col><Col id=\"visits\">120</Col></Row><Row><Col id=\"category\">45</Col><Col id=\"date\">19931031000</Col><Col id=\"visits\">200</Col></Row><Row><Col id=\"category\">46</Col><Col id=\"date\">19931130000</Col><Col id=\"visits\">300</Col></Row><Row><Col id=\"category\">47</Col><Col id=\"date\">19931231000</Col><Col id=\"visits\">250</Col></Row><Row><Col id=\"category\">48</Col><Col id=\"date\">19940131000</Col><Col id=\"visits\">280</Col></Row><Row><Col id=\"category\">49</Col><Col id=\"date\">19940228000</Col><Col id=\"visits\">420</Col></Row><Row><Col id=\"category\">50</Col><Col id=\"date\">19940331000</Col><Col id=\"visits\">380</Col></Row><Row><Col id=\"category\">51</Col><Col id=\"date\">19940430000</Col><Col id=\"visits\">316.65</Col></Row><Row><Col id=\"category\">52</Col><Col id=\"date\">19940531000</Col><Col id=\"visits\">250</Col></Row><Row><Col id=\"category\">53</Col><Col id=\"date\">19940630000</Col><Col id=\"visits\">178.2</Col></Row><Row><Col id=\"category\">54</Col><Col id=\"date\">19940731000</Col><Col id=\"visits\">316.55</Col></Row><Row><Col id=\"category\">55</Col><Col id=\"date\">19940831000</Col><Col id=\"visits\">316.26</Col></Row><Row><Col id=\"category\">56</Col><Col id=\"date\">19940930000</Col><Col id=\"visits\">315.42</Col></Row><Row><Col id=\"category\">57</Col><Col id=\"date\">19941031000</Col><Col id=\"visits\">316.69</Col></Row><Row><Col id=\"category\">58</Col><Col id=\"date\">19941130000</Col><Col id=\"visits\">317.69</Col></Row><Row><Col id=\"category\">60</Col><Col id=\"date\">19941231000</Col><Col id=\"visits\">318.74</Col></Row><Row><Col id=\"category\">61</Col><Col id=\"date\">19950131000</Col><Col id=\"visits\">319.61</Col></Row><Row><Col id=\"category\">62</Col><Col id=\"date\">19950228000</Col><Col id=\"visits\">317.4</Col></Row><Row><Col id=\"category\">63</Col><Col id=\"date\">19950331000</Col><Col id=\"visits\">315.71</Col></Row><Row><Col id=\"category\">64</Col><Col id=\"date\">19950430000</Col><Col id=\"visits\">290</Col></Row><Row><Col id=\"category\">65</Col><Col id=\"date\">19950531000</Col><Col id=\"visits\">250</Col></Row><Row><Col id=\"category\">66</Col><Col id=\"date\">19950630000</Col><Col id=\"visits\">220</Col></Row><Row><Col id=\"category\">67</Col><Col id=\"date\">19950731000</Col><Col id=\"visits\">85</Col></Row><Row><Col id=\"category\">68</Col><Col id=\"date\">19950831000</Col><Col id=\"visits\">150</Col></Row><Row><Col id=\"date\">19950930000</Col><Col id=\"category\">69</Col><Col id=\"visits\">200</Col></Row><Row><Col id=\"date\">19951031000</Col><Col id=\"category\">70</Col><Col id=\"visits\">300</Col></Row><Row><Col id=\"date\">19951130000</Col><Col id=\"category\">71</Col><Col id=\"visits\">250</Col></Row><Row><Col id=\"date\">19951231000</Col><Col id=\"category\">72</Col><Col id=\"visits\">280</Col></Row></Rows>");
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
            obj.set_binddataset("ds_visit");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"187\"/><Column size=\"213\"/><Column size=\"145\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"category\"/><Cell col=\"1\" text=\"date\"/><Cell col=\"2\" text=\"visits\"/></Band><Band id=\"body\"><Cell text=\"bind:category\"/><Cell col=\"1\" displaytype=\"date\" text=\"bind:date\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:visits\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1.95%","10",null,"47","4.69%",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Time Data");
            obj.set_cssclass("WF_sta_Title");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","46.39%","697",null,"24","45.41%",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","37.01%","699",null,"22","56.54%",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Button01");
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
        this.registerScript("Sample49.xfdl", function() {

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
        				"id" : "time data chart",
        				"bindDataset" : "ds_visit",
        				"bindCategory" : "category",
        				"plotHoverable" : true,
        				"isTimeData" : true
        			},
        			"valueAxis" : [
        				{
        				"id" : "Tim Data Axis X1",
        				"position" : "bottom",
        				"isTimeAxis" : true,
        				"tickUnitSize" : 2,
        				"tickUnit" : "month",
        				"timeFormat" : "%Y/%m",
        				"min" : (new Date(1991, 01, 01)).getTime(),
        				"max" : (new Date(1994, 01, 01)).getTime(),
        				"title" : "Monthly Visits at Roma",
        				"titleMargin" : "0",
        				"titleFontSize" : 10.5,
        				"titleFontColor" : "#451abf",
        				"titleFontType" : "bold",
        				"lineWidth" : 1,
        				"tickLength" : 6,
        				"labelMargin" : "50",
        				"labelRotate" : "-75"
        			},
        				{
        				"id" : "ValueAxis Y1",
        				"position" : "left",
        				"tickLength" : 13,
        				"max" : 600,
        				"min" : 50
        			}
        			],
        			"series" : [
        				{
        				"id" : "Series 1",
        				"bindX" : "date",
        				"bindY" : "visits",
        				"xaxis" : "Tim Data Axis X1",
        				"yaxis" : "ValueAxis Y1",
        				"showLine" : true,
        				"lineFill" : true,
        				"lineWidth" : 0.5,
        				"lineColor" : "#451abf",
        				"lineFillOpacity" : 0.3
        			}
        			],
        			"selection" : {
        				"mode" : "x",
        				"zoom" : true
        			}
        		};

        		this.ecochart.set_config(config);
        	}

        	chart = this.ecochart.getChart();

        	this.ecochart.draw();
        };
        this.Button00_onclick = function (obj, e)
        {
        	var ok = confirm("aaaa");
        };

        this.Button01_onclick = function (obj, e)
        {
        	alert("사용자계정을 입력하십시요");
        	this.gfn_Message("IMCMM0221", "고객정보 또는 주소 정보를 선택하여 주십시오.가나다라마바사아자차타카파", "warning", "ok");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.StackBarSample_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("Sample49.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
