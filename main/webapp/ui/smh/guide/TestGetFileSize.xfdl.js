(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test_180209");
            this.set_titletext("New Form");
            this.set_font("15pt \"Arial\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new FileUpload("FileUpload00","36","50","428","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_multiselect("false");
            obj.set_itemcount("1");
            obj.set_scrolltype("vertical");
            obj.set_scrollbartype("none");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("3");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","381","183","93","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("fileSize");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","37","181","337","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","37","221","337","31",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","381","223","93","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("fileName");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("TestGetFileSize.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	var objVir = this.FileUpload00.filelist[0];
        	objVir.addEventHandler("onsuccess", this.VirtualFile00_onsuccess, this);
        	objVir.addEventHandler("onerror", this.VirtualFile00_onerror, this);



        	objVir.open(objVir.fullpath, VirtualFile.openRead|VirtualFile.openBinary);
        };

        this.VirtualFile00_onsuccess = function(obj,e)
        {
        	var reason = nexacro.toNumber(e.reason);
            switch (reason)
            {
                case 1 :   // open
                    obj.getFileSize();
                    break;
                case 9 :   // getFileSize
                    trace(e.filesize);
        			this.Edit00.set_value(e.filesize);
                    break;
            }
        };

        this.VirtualFile00_onerror = function (obj, e)
        {
        	trace("errormsg==> " + e.errormsg);
        };
        this.FileUpload00_onitemchanged = function(obj,e)
        {
        	trace("index-->"+e.index);
        	trace("this.FileUpload00.filelist-->"+this.FileUpload00.filelist.length);
        	var objVir = this.FileUpload00.filelist[e.index];
        	this.Edit01.set_value(objVir.filename);

        	objVir.addEventHandler("onsuccess", this.VirtualFile00_onsuccess, this);
        	objVir.addEventHandler("onerror", this.VirtualFile00_onerror, this);

        	objVir.open(objVir.fullpath, VirtualFile.openRead|VirtualFile.openBinary);

        	obj.appendItem();
        	obj.getNumSetter("height").addset(24);
        	trace("length-->"+this.FileUpload00.filelist.length);
        	this.FileUpload00.set_index(this.FileUpload00.filelist.length);
        	this.FileUpload00.scrollBy(24,24*2);

        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.FileUpload00.addEventHandler("onitemchanged",this.FileUpload00_onitemchanged,this);
        };
        this.loadIncludeScript("TestGetFileSize.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
