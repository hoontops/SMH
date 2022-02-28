(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mis");
            this.set_titletext("mis-sample");
            if (Form == this.constructor)
            {
                this._setFormPosition(1005,836);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_form", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"FORM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_PATH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FORM_NAME\">개구리</Col><Col id=\"FORM_ID\">100</Col><Col id=\"FORM_PATH\">sample::Sample02.xfdl</Col></Row><Row><Col id=\"FORM_NAME\">개나리</Col><Col id=\"FORM_ID\">200</Col><Col id=\"FORM_PATH\">sample::Sample03.xfdl</Col></Row><Row><Col id=\"FORM_NAME\">무궁화</Col><Col id=\"FORM_ID\">300</Col><Col id=\"FORM_PATH\">sample::Sample04.xfdl</Col></Row><Row><Col id=\"FORM_NAME\">개구쟁이</Col><Col id=\"FORM_ID\">400</Col><Col id=\"FORM_PATH\">sample::Sample05.xfdl</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_list00","8","13",null,null,"11","14",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("rgba(252,252,252,1)");
            this.addChild(obj.name, obj);

            obj = new Div("div_0","88","8","257","224",null,null,null,null,null,null,this.div_list00.form);
            obj.set_taborder("0");
            obj.set_border("2px solid rgba(128,128,128,1)");
            this.div_list00.addChild(obj.name, obj);

            obj = new Div("div_1","352","8","257","224",null,null,null,null,null,null,this.div_list00.form);
            obj.set_taborder("1");
            obj.set_border("2px solid rgba(128,128,128,1)");
            this.div_list00.addChild(obj.name, obj);

            obj = new Div("div_2","615","8","257","224",null,null,null,null,null,null,this.div_list00.form);
            obj.set_taborder("2");
            obj.set_border("2px solid rgba(128,128,128,1)");
            this.div_list00.addChild(obj.name, obj);

            obj = new Div("div_3","88","240","257","224",null,null,null,null,null,null,this.div_list00.form);
            obj.set_taborder("3");
            obj.set_border("2px solid rgba(128,128,128,1)");
            this.div_list00.addChild(obj.name, obj);

            obj = new Div("div_4","351","240","257","224",null,null,null,null,null,null,this.div_list00.form);
            obj.set_taborder("4");
            obj.set_border("2px solid rgba(128,128,128,1)");
            this.div_list00.addChild(obj.name, obj);

            obj = new Div("div_5","616","240","257","224",null,null,null,null,null,null,this.div_list00.form);
            obj.set_taborder("5");
            obj.set_border("2px solid rgba(128,128,128,1)");
            this.div_list00.addChild(obj.name, obj);

            obj = new Static("Static00","5","57","68","405",null,null,null,null,null,null,this.div_list00.form);
            obj.set_taborder("6");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.div_list00.addChild(obj.name, obj);

            obj = new Div("div_list","13","17","68","49",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("rgba(127,127,127,1)");
            this.addChild(obj.name, obj);

            obj = new Button("bt_create","3","8","61","34",null,null,null,null,null,null,this.div_list.form);
            obj.set_taborder("0");
            obj.set_text("생성");
            obj.set_cssclass("btn_WF_Return");
            this.div_list.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1005,836,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Sample31.xfdl","lib::comLib.xjs");
        this.registerScript("Sample31.xfdl", function() {
        this.executeIncludeScript("lib::comLib.xjs"); /*include "lib::comLib.xjs"*/
        this.makeButton = function (name, text, nTop)
        {
        	var comps = [];
        	var btn = new Button();
        	// btn.init("btn_"+name, "absolute", 16, nTop, 61, 59);
        	btn.init(name, "absolute", 16, nTop, 61, 59);
        	btn.set_cssclass("btn_WF_TabIcon5");

        	btn.set_text(text);
        	this.addChild(btn.name, btn);

        	// btn.addEventHandler("onclick", this.onButtonClick, this);

        	var draggingFunc = {
        		'start' : this.onDragStart,
        		'dragging' : this.onDragging,
        		'end' : this.onDragEnd
        	};
        	Eco.XComp.Event.makeDraggable(btn, draggingFunc, this, [btn]);


        	btn.show();
        	btn._itemName = name;
        	// var objFont = new nexacro.Style_font("9 Dotum");
        	// var size = nexacro._getTextSize(text, objFont);
        	// btn.set_width(size[0] + 65);
        	comps.push(btn);

        	return comps;
        };

        this.onButtonClick = function (obj, e)
        {
        	trace("click " + obj.name);
        };

        this.Div00_bt_create_onclick = function (obj, e)
        {
        	var nCnt = this.ds_form.rowcount;
        	var nTop = 80;
        	for (var i = 0; i < nCnt; i++)
        	{
        		var sformName = this.ds_form.getColumn(i, "FORM_NAME");
        		var name = this.ds_form.getColumn(i, "FORM_ID");
        		// alert(sformName);
        		if (!this.gfn_isNull(sformName))
        		{
        			this.makeButton(name, sformName, nTop);
        			nTop = nTop + 60;
        		}
        	}
        };

        // drag 가 발생될 때 처리할 루틴을 정의한 함수
        this.onDragStart = function (comp)
        {
        	// trace(comp.name + " Drag Start !!");
        	// comp.set_text("Drag Start !!");
        };

        // dragging 시 처리할 루틴을 정의한 함수
        this.onDragging = function (offsetX, offsetY, obj)
        {
        	var x = obj.getOffsetLeft() + offsetX,y = obj.getOffsetTop() + offsetY;

        	obj.move(x, y);
        	// this.Button00.move(x, y);
        };

        // drag 가 종료될 때 처리할 루틴을 정의한 함수
        this.onDragEnd = function (comp)
        {
        	// trace(comp.name + " Drag End !!");

        	// comp.set_text("Drag End !! :"+ comp.left+","+comp.top);

        	this.fn_checkDiv(comp);
        };

        this.fn_checkDiv = function (comp)
        {
        	var nCnt = this.div_list00.form.components.length;

        	for (var i = 0; i < nCnt; i++)
        	{
        		// trace(this.div_list00.components[i].name);
        		var sObj = this.div_list00.form.components[i];

        		if (sObj.getPixelLeft() < comp.left && ((sObj.getPixelLeft() + sObj.getPixelWidth()) > comp.left)
        			 && sObj.getPixelTop() < comp.top && ((sObj.getPixelTop() + sObj.getPixelHeight()) > comp.top))
        		{
        			var nRow = this.ds_form.findRow("FORM_ID", comp.name);
        			if (nRow > -1)
        			{
        				var sformPath = this.ds_form.getColumn(nRow, "FORM_PATH");
        				if (!this.gfn_isNull(sformPath))
        				{
        					if (sObj instanceof Div)
        					{
        						sObj.set_url(sformPath);
        						comp.set_top(sObj.getPixelTop() + 17);
        						comp.set_left(sObj.getPixelLeft() + sObj.getPixelWidth() - 60);
        					}
        					else if (sObj instanceof Static)
        					{
        						alert("home");
        					}
        				}
        				else
        				{
        					return;
        				}
        			}
        			else
        			{
        				return;
        			}
        		}
        	}
        }


        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.WebEditorTest_onload,this);
            this.div_list00.addEventHandler("onmousemove",this.div_list00_onmousemove,this);
            this.div_list00.addEventHandler("onlbuttonup",this.div_list00_onlbuttonup,this);
            this.div_list00.form.div_0.addEventHandler("ondrop",this.div_list00_div_0_ondrop,this);
            this.div_list00.form.div_0.addEventHandler("ondragenter",this.div_list00_div_0_ondragenter,this);
            this.div_list00.form.div_0.addEventHandler("ondragmove",this.div_list00_div_0_ondragmove,this);
            this.div_list00.form.div_0.addEventHandler("onmousemove",this.Div_onmousemove,this);
            this.div_list00.form.div_1.addEventHandler("onmousemove",this.Div_onmousemove,this);
            this.div_list00.form.div_2.addEventHandler("onmousemove",this.Div_onmousemove,this);
            this.div_list00.form.div_3.addEventHandler("onmousemove",this.Div_onmousemove,this);
            this.div_list00.form.div_4.addEventHandler("onmousemove",this.Div_onmousemove,this);
            this.div_list00.form.div_5.addEventHandler("onmousemove",this.Div_onmousemove,this);
            this.div_list.form.bt_create.addEventHandler("onclick",this.Div00_bt_create_onclick,this);
        };
        this.loadIncludeScript("Sample31.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
