(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample13");
            this.set_titletext("RichTextEditor (Div Link)");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,764);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_images", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"savefilename\" type=\"STRING\" size=\"256\"/><Column id=\"filesize\" type=\"INT\" size=\"256\"/><Column id=\"selected\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"selected\">Y</Col><Col id=\"filename\">birthday.jpg</Col><Col id=\"savefilename\">birthday.jpg</Col><Col id=\"filesize\">14168</Col></Row><Row><Col id=\"filename\">ChristmasTree.jpg</Col><Col id=\"savefilename\">ChristmasTree.jpg</Col><Col id=\"filesize\">12215</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_editor","42","38","726","472",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("common::richtexteditor.xfdl");
            obj.set_async("true");
            obj.set_enable("true");
            obj.set_border("0px none rgba(128,128,128,1)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","568","11","89","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Save Data");
            this.addChild(obj.name, obj);

            obj = new Button("btn_load","472","11","89","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Load Data");
            this.addChild(obj.name, obj);

            obj = new Button("btn_disable","42","11","91","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("editor disable");
            obj.set_cssclass("btn_WF_Stats");
            this.addChild(obj.name, obj);

            obj = new Button("btn_enable","134","11","88","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("editor enable");
            obj.set_cssclass("btn_WF_Stats");
            this.addChild(obj.name, obj);

            obj = new Button("btn_contentHeight","223","11","116","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("content ?????? ??????");
            obj.set_cssclass("btn_WF_Stats");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","340","11","92","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","49","479","240","49",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Small RichTextEditor");
            this.addChild(obj.name, obj);

            obj = new Div("div_editor00","42","518","726","242",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_url("common::richtexteditor_s.xfdl");
            obj.set_async("true");
            obj.set_enable("true");
            obj.set_border("0px none rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Button("btn_load00","671","12","89","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Load Data(pop)");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,764,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::richtexteditor.xfdl");
            this._addPreloadList("fdl","common::richtexteditor_s.xfdl");
        };
        
        // User Script
        this.registerScript("Sample13.xfdl", function() {

        this.RichTextEditorSample_onload = function (obj, e)
        {
        	var userConfig = {
        		editor : { // showThumbnailMode : false,//????????? ????????? Thumbnail true/false ??????
        			loadCallback : this.onloadEditor,
        			resizeCallback : this.onresizeEditor
        		}
        	};
        	this.div_editor.form.initialize(userConfig, obj);

        	// onload ????????? Editor content ?????? ??????
        	this.fn_setContentHeight(300);
        };

        // editor loading ??? ??????????????? ???
        this.onloadEditor = function (obj)
        {
        	// obj ??? this.div_editor ???.

        	// ????????? ??????
        	this.fn_setContent();

        	// web editor ??????????????? this ??? ????????? ?????? ??????
        	this.fn_setFocus();
        };

        // editor resize ??? ????????? ???
        this.onresizeEditor = function (obj, e)
        {
        	// obj ??? this.div_editor ?????? e ??? nexacro.SizeEventInfo ???.
        	this.resetScroll();
        };

        // ????????? ??????
        this.btn_load_onclick = function (obj, e)
        {
        	this.fn_setContent();
        };

        // ????????? ??????
        this.fn_setContent = function ()
        {
        	// ???????????? ????????? ????????? ????????? ?????? ??????
        	var image1 = "";
        	var image2 = "";

        	var contents = "<div>This is a <font color=\"#ff8000\" size=\"5\">Rich Text Editor </font>created in a nexacro platform.</div>";

        	// ????????? ??????
        	this.div_editor.form.setContent(contents);
        };
        // ????????? ??????
        this.btn_save_onclick = function (obj, e)
        {
        	this.saveData();
        };

        this.saveData = function ()
        {
        	// ????????? ?????????
        	var content = this.div_editor.form.getContent();
        	trace("================= content =================\n");
        	trace(content);
        	trace("===========================================\n");
        };

        // preview
        this.btn_preview_onclick = function (obj, e)
        {
        	var content = this.div_editor.form.getContent();

        	if (Eco.isEmpty(content))
        	{
        		alert("???????????? ????????? ????????????.");
        		return;
        	}

        	var child = new ChildFrame();
        	child.init("preview", "absolute", 0, 0, 800, 630);
        	child.set_formurl("common::com_webPreview.xfdl");
        	child.set_openalign("center middle");

        	var arg = {
        		'content' : content
        	};
        	child.showModal(this.getOwnerFrame(), arg);
        };



        /* web editor enable ?????? */
        this.btn_disable_onclick = function (obj, e)
        {
        	this.div_editor.form.fn_enable(false);
        };

        /* web editor disable(????????????) ?????? */
        this.btn_enable_onclick = function (obj, e)
        {
        	this.div_editor.form.fn_enable(true);
        };

        // web editor ?????? ??????
        this.btn_contentHeight_onclick = function (obj, e)
        {
        	this.fn_setContentHeight(300);
        };

        this.fn_setContentHeight = function (nHeight)
        {
        	// content ?????? ??????
        	this.div_editor.form.fn_setEditorContentHeight(nHeight);

        	// content Height ??????
        	this.div_editor.form.setContentHeight();
        };


        // web Editor ????????? focus ??????
        this.fn_setFocus = function (obj)
        {
        	/* BROWSWER ???????????? focus ?????? ????????? ??????????????? try ????????????... */
        	try
        	{
        		// div link ??? focus ??? ?????????.
        		this.div_editor.setFocus();

        		// ????????? component focus ??????.
        		obj.setFocus();
        	}
        	catch (err)
        	{
        	}
        }

        ;

        this.btn_load00_onclick = function(obj,e)
        {
        	var content = "<div>This is a <font color=\"#ff8000\" size=\"5\">Rich Text Editor </font>created in a nexacro platform.</div>";

        	if (Eco.isEmpty(content))
        	{
        		this.gfn_Message("NoCommentsMeasurement", null, "warning", "ok");//alert("???????????? ????????? ????????????.");
        		return;
        	}

        	var child = new ChildFrame();
        	child.init("preview", 0, 0, 800, 630);
        	child.set_formurl("common::com_webPreview.xfdl");
        	child.set_openalign("center middle");

        	var arg = {
        		'fv_content' : content
        	};
        	child.showModal(this.getOwnerFrame(), arg);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.RichTextEditorSample_onload,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_load.addEventHandler("onclick",this.btn_load_onclick,this);
            this.btn_disable.addEventHandler("onclick",this.btn_disable_onclick,this);
            this.btn_enable.addEventHandler("onclick",this.btn_enable_onclick,this);
            this.btn_contentHeight.addEventHandler("onclick",this.btn_contentHeight_onclick,this);
            this.btn_load00.addEventHandler("onclick",this.btn_load00_onclick,this);
        };
        this.loadIncludeScript("Sample13.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
