(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("com_webPreview");
            this.set_titletext("RichTextEditor-Preview");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","501","471","96","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Close");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web_preview","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("0px solid gray");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,500,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("com_webPreview.xfdl", function() {
        var jobCd = nexacro.getApplication().id;
        var pUrl = nexacro.getApplication().gv_host + "/" + jobCd.toLowerCase() + "/richtexteditor/preview.html";

        this.previewUrl = pUrl;
        trace(" this.previewUrl :" + this.previewUrl);

        this.RichTextEditorPreviewSample_onload = function (obj, e)
        {
        	this.web_preview.set_url(this.previewUrl);
        };


        this.web_preview_onloadcompleted = function (obj, e)
        {
        	this.setTimer(9, 100);

        	// this.web_preview_setting(obj, e);
        };

        this.web_preview_setting = function ()
        {
        	if (this.parent.fv_content)
        	{
        		this.web_preview.callMethod("setContent", this.parent.fv_content);
        	}
        };

        this.web_preview_onusernotify = function (obj, e)
        {
        	if (e.userdata == "loadContent")
        	{
        		var w = obj.getProperty("document").getProperty("body").getProperty("offsetWidth");
        		var h = obj.getProperty("document").getProperty("body").getProperty("offsetHeight");

        		if (w > this.web_preview.getOffsetWidth() || h > this.web_preview.getOffsetHeight())
        		{
        			// this.web_preview.resize(w, h);
        			// this.resetScroll();
        		}
        	}
        };

        /* 프린트 */
        this.hlp_print = function ()
        {
        	this.web_preview.callMethod("hlpPrint", this.parent.fv_content);
        };

        this.Button00_onclick = function (obj, e)
        {
        	this.close();
        };
        this.com_file_ontimer = function (obj, e)
        {
        	if (e.timerid == 9)
        	{
        		this.web_preview_setting();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.RichTextEditorPreviewSample_onload,this);
            this.addEventHandler("ontimer",this.com_file_ontimer,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.web_preview.addEventHandler("onloadcompleted",this.web_preview_onloadcompleted,this);
            this.web_preview.addEventHandler("onusernotify",this.web_preview_onusernotify,this);
        };
        this.loadIncludeScript("com_webPreview.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
