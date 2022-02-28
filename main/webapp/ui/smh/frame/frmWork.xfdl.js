(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmWork");
            this.set_titletext("work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,757);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divWork","10","0",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,757,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmWork.xfdl", function() {
        this.application = null;
        this.fvWinId = null;
        this.fvMenuNM = null;
        this.fvFormURL = null;
        this.popYn = 'N';
        this.pv_menuAuth;

        this.frmWork_onload = function(obj,e)
        {
        	this.application = nexacro.getApplication();

        	var objOwnerFrame = this.getOwnerFrame();
        	this.fvWinId   = objOwnerFrame.param.FORM_ID;
        	this.fvMenuID   = objOwnerFrame.param.MENU_ID;
        	this.fvMenuNM = objOwnerFrame.param.MENU_NM;
        	this.fvFormURL = objOwnerFrame.param.FORM_URL;
        	this.pv_menuAuth  = objOwnerFrame.param.MENU_AUTH;
        	this.popYn = objOwnerFrame.param.POP_YN;
        	if(this.popYn=="Y"){
        		var oArgs = objOwnerFrame.objArgs;
        		this.divWork.getOwnerFrame().arguments = [];
        		for ( var key in oArgs )
        		{
        			if ( oArgs.hasOwnProperty(key) )
        			{
        				this.divWork.getOwnerFrame().arguments[key] = oArgs[key];
        			}
        		}
        	}
        	this.divWork.set_url(this.fvFormURL);
        	this.divWork.form.resetScroll();
        };

        this.frmWork_onactivate = function(obj,e)
        {
        	//if(this.popYn != 'Y')
        	//	gv_appWorkTopFrame.form.fn_ActiveTabPage(this.fvWinId);
            this.divWork.form.resetScroll();
        	return;
        };

        this.frmWork_onclose = function(obj,e)
        {
        	if(this.popYn != 'Y')
        		gv_appWorkTopFrame.form.fn_DeleteTabpage(this.fvWinId);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frmWork_onload,this);
            this.addEventHandler("onactivate",this.frmWork_onactivate,this);
            this.addEventHandler("onclose",this.frmWork_onclose,this);
        };
        this.loadIncludeScript("frmWork.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
