(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test");
            this.set_titletext("Screen Splitter");
            this.getSetter("classname").set("test");
            if (Form == this.constructor)
            {
                this._setFormPosition(760,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column1\">test_1</Col><Col id=\"Column0\">test_1.xfdl</Col></Row><Row><Col id=\"Column0\">test_2.xfdl</Col><Col id=\"Column1\">test_2</Col></Row><Row><Col id=\"Column0\">test_3.xfdl</Col><Col id=\"Column1\">test_3</Col></Row><Row><Col id=\"Column0\">test_4.xfdl</Col><Col id=\"Column1\">test_4</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("splitter_V","390","0","11",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("img_splitter_V");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("splitter_H","0","211","390","11",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("img_splitter_H");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","0","0",null,null,"splitter_V:0","splitter_H:0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #dddddd");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","0","splitter_H:0",null,null,"splitter_V:0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #dddddd");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","splitter_V:0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div02");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #dddddd");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ScreenSplitter.xfdl", function() {

        this.f_drag = false;
        this.currArrange = "vertical";
        this.nMoveX = 0;					// Move the X coordinate
        this.nMoveY = 0;					// Move the Y coordinate

        this.test_ondragmove = function(obj, e)
        {

        	trace(this.currArrange + " ------ " + e.button);

        	if ( this.f_drag == false ) 	return;

        	var nPosX, nPosY;

        	if ( e.button == "lbutton" )
        	{
        		if 		( this.currArrange == "horizontal" )		{	nPosY = nexacro.toNumber(e.clienty);		}
        		else if ( this.currArrange == "vertical"   )		{ 	nPosX = nexacro.toNumber(e.clientx);		}

        		try
        		{

        			if 		( this.currArrange == "horizontal" )	{	trace(">>>>>>>>"); this.splitter_H.setOffsetTop(nPosY);}
        			else if ( this.currArrange == "vertical"   )	{	this.splitter_V.setOffsetLeft(nPosX);	}
        		}
        		catch( ex ) {
        		}
        	}
        };

        this.test_ondrop = function(obj, e)
        {

        	if ( this.f_drag == false ) return;

        	this.f_drag = false;

        	var nMoveValue;

        	if ( this.currArrange == "horizontal" )
        	{
        		this.splitter_H.setOffsetTop(e.clienty);
        		nMoveValue = nexacro.toNumber(nexacro.toNumber(this.splitter_H.top) - this.nMoveY);

        	}
        	else if ( this.currArrange == "vertical" )
        	{

        		this.splitter_V.setOffsetLeft(e.clientx);
        		nMoveValue = nexacro.toNumber(nexacro.toNumber(this.splitter_V.left) - this.nMoveX);

        		this.splitter_H.set_width(nexacro.toNumber(this.splitter_H.width) + nMoveValue);
        	}

        	this.resetScroll();
        };

        this.splitter_H_ondrag = function(obj, e)
        {

        	this.currArrange = "horizontal";

        	this.nMoveX = nexacro.toNumber(obj.left);
        	this.nMoveY = nexacro.toNumber(obj.top);

        	this.f_drag = true;

        	return true;
        };


        this.splitter_V_ondrag = function(obj, e)
        {

        	this.currArrange = "vertical";

        	this.nMoveX = nexacro.toNumber(obj.left);
        	this.nMoveY = nexacro.toNumber(obj.top);

        	this.f_drag = true;

        	return true;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.test_onload,this);
            this.addEventHandler("ondragmove",this.test_ondragmove,this);
            this.addEventHandler("ondrop",this.test_ondrop,this);
            this.splitter_V.addEventHandler("ondrag",this.splitter_V_ondrag,this);
            this.splitter_H.addEventHandler("ondrag",this.splitter_H_ondrag,this);
        };
        this.loadIncludeScript("ScreenSplitter.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
