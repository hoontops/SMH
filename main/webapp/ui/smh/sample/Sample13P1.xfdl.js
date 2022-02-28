(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample13P1");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("WebBrowser_00","101","162","606","371",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00",null,"6","25","25","16",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00","154","34","171","41",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("btn_00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Sample13P1.xfdl","lib::lib_base.xjs");
        this.addIncludeScript("Sample13P1.xfdl","lib::lib_array.xjs");
        this.addIncludeScript("Sample13P1.xfdl","lib::lib_color.xjs");
        this.registerScript("Sample13P1.xfdl", function() {
        this.executeIncludeScript("lib::lib_base.xjs"); /*include "lib::lib_base.xjs"*/;
        this.executeIncludeScript("lib::lib_array.xjs"); /*include "lib::lib_array.xjs"*/;
        this.executeIncludeScript("lib::lib_color.xjs"); /*include "lib::lib_color.xjs"*/;
        nexacro.loadStyle( "xcssrc::richtexteditor.xcss" );
        var emptyHtml = "";
        this.executeIncludeScript("lib::lib_base.xjs"); /*include "lib::lib_base.xjs"*/;
        this.executeIncludeScript("lib::lib_array.xjs"); /*include "lib::lib_array.xjs"*/;
        this.executeIncludeScript("lib::lib_color.xjs"); /*include "lib::lib_color.xjs"*/;
        nexacro.loadStyle( "xcssrc::richtexteditor.xcss" );
        this.Sample13P1_onload = function(obj,e)
        {
        	//var content = "<div>This is a <font color=\"#ff8000\" size=\"5\">Rich Text Editor </font>created in a nexacro platform.</div>";
        	//this.WebBrowser_00.callMethod("setContent", content || emptyHtml, true);
        	var webUrl = "common::com_webPreview.xfdl";//nexacro.getEnvironment().services["svcurl"].url + "/smh/richtexteditor/editor.html";
        //trace("webUrl.."+webUrl);

        	this.WebBrowser_00.set_url(webUrl);
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        // 컨텐츠 지정
        this.setContent = function(content)
        {
        	this.WebBrowser_00.callMethod("setContent", content || emptyHtml, true);
        }

        this.btn_00_onclick = function(obj,e)
        {
        	var content = "<div>This is a <font color=\"#ff8000\" size=\"5\">Rich Text Editor </font>created in a nexacro platform.</div>";
        	this.setContent(content);
        };

        this.WebBrowser_00_onloadcompleted = function(obj,e)
        {
        alert(0);
        	var content = "<div>This is a <font color=\"#ff8000\" size=\"5\">Rich Text Editor </font>created in a nexacro platform.</div>";
        	this.setContent(content);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Sample13P1_onload,this);
            this.WebBrowser_00.addEventHandler("onloadcompleted",this.WebBrowser_00_onloadcompleted,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_00.addEventHandler("onclick",this.btn_00_onclick,this);
        };
        this.loadIncludeScript("Sample13P1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
