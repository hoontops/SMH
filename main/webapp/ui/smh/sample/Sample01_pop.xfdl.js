(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Test035_pop");
            this.set_titletext("파라미터 반환 샘플 팝업");
            this.set_cssclass("from_POP");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_1", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">aaa</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">bbb</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_2", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">111</Col><Col id=\"Column1\">222</Col><Col id=\"Column2\">333</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00","22","102","148","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("문자열 반환");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","22","136","183","37",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Array 반환(문자열)");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","312","150","467","29",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Array 반환(문자열 && 데이타셋)");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","312","222","217","82",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" text=\"bind:Column0\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:Column1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","539","222","241","82",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Col size=\"80\"/><Col size=\"80\"/><Col size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row band=\"body\" size=\"24\"/></Rows><Band id=\"head\"><Cell col=\"0\" text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/></Band><Band id=\"body\"><Cell col=\"0\" text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","453","308","77","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("행 삭제");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","25","58","341","45",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("호출한 부모장으로 파라미터 전달 샘플2");
            obj.set_color("red");
            obj.set_font("bold 11pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button04","312","185","467","29",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Json 반환(문자열 && 데이타셋)");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button05","312","104","467","38",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("데이타셋");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,350,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Sample01_pop.xfdl","lib::comLib.xjs");
        this.registerScript("Sample01_pop.xfdl", function() {

        this.executeIncludeScript("lib::comLib.xjs"); /*include "lib::comLib.xjs"*/

        this.ParserStr = "^&^";


        // 값 반환
        this.Button00_onclick = function (obj, e)
        {
        	this.gfn_popupClose("testValue");
        };

        // Array 반환(값 반환)
        this.Button01_onclick = function (obj, e)
        {
        	var arr = ["testvalue1", "testvalue2", "testvalue3"];
        	this.gfn_popupClose(arr);
        };

        // Array 반환(n개의 데이타셋 반환)
        this.Button02_onclick = function (obj, e)
        {
        	var arr = ["testvalue", this.ds_1.saveXML("ds_1", "a"), this.ds_2.saveXML()];
        	// var arr = ["testvalue", this.ds_1, this.ds_2];
        	// var rtnArr = arr.join(this.ParserStr);

        	this.gfn_popupClose(arr);
        	// this.close(rtnArr);
        };

        // Object Json 반환(n개의 데이타셋 반환)
        this.Button04_onclick = function (obj, e)
        {
        	// var objJson = {"key1":"testvalue", "key2":encodeURI(this.ds_1.saveXML("ds_1", "a")), "key3":encodeURI(this.ds_2.saveXML())};

        	var objJson = new Object();
        	objJson.key1 = "testvalue";
        	objJson.key2 = encodeURI(this.ds_1.saveXML("ds_1", "a"));
        	objJson.key3 = encodeURI(this.ds_2.saveXML());

        	// var rtnObj = this.gf_JSONToString(objJson);
        	this.gfn_popupClose(objJson);
        	// this.close(rtnObj);
        };

        this.Button03_onclick = function (obj, e)
        {
        	this.ds_1.deleteRow(this.ds_1.rowposition);
        	this.close();
        };


        /******************************************************************************
         * Function name: gf_JSONToString
         * Description	: JSON Object를 JSON String으로 변환하여 리턴한다.
         * Parameter 	: JSON Object
         * Return		: JSON String
         ******************************************************************************/
        this.gf_JSONToString = function (object)
        {
        	var isArray = (object.join && object.pop && object.push
        		 && object.reverse && object.shift && object.slice && object.splice);
        	var results = [];

        	for (var i in object)
        	{
        		var value = object[i];

        		results.push((isArray ? "" : "\"" + i.toString() + "\" : ")
        			 + (typeof value == "string" ? "\"" + value + "\"" : value));
        	}

        	return (isArray ? "[" : "{") + results.join(", ") + (isArray ? "]" : "}");
        };

        /******************************************************************************
         * Function name: gf_StringToJSON
         * Description	: JSON String을 JSON Object으로 변환하여 리턴한다.
         * Parameter 	: JSON String
         * Return		: JSON Object
         ******************************************************************************/
        this.gf_StringToJSON = function (strJson)
        {
        	return eval("(" + strJson + ")");
        };

        this.Button05_onclick = function (obj, e)
        {
        	this.gfn_popupClose(this.ds_1.saveXML());
        };

        this.Test035_pop_onload = function (obj, e)
        {
        	trace("this.parent.arg1-->" + this.parent.arg1);
        	trace("this.parent.arg2-->" + this.parent.arg2);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Test035_pop_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.Button04.addEventHandler("onclick",this.Button04_onclick,this);
            this.Button05.addEventHandler("onclick",this.Button05_onclick,this);
        };
        this.loadIncludeScript("Sample01_pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
