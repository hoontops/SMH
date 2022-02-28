(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("com_accessTime");
            this.set_titletext("화면 시간 정보");
            this.set_background("transparent");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_loadTitle","0","0",null,"20","55",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tooltiptype("hover");
            obj.set_color("rgba(218,219,222,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_loadValue",null,"0","25","20","25",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_color("rgba(218,219,222,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta_loadUnit",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_color("rgba(218,219,222,1)");
            this.addChild(obj.name, obj);

            obj = new Static("sta_loadService","0","20",null,"75","4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tooltiptype("hover");
            obj.set_color("rgba(218,219,222,1)");
            obj.set_textAlign("right");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",200,100,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("com_accessTime.xfdl", function() {

        this.form_onload = function (obj, e)
        {
        };

        // 폼 onload time
        this.fn_setAccessTime = function (objDate)
        {
        	this.sta_loadTitle.set_text("onload Time");
        	this.sta_loadValue.set_text(objDate);
        	this.sta_loadUnit.set_text("ms");

        	// form onload 전에 서비스 호출이 있으면 해당 시간을 보여준다.
        	this.fn_getServiceTime();
        };

        this.fn_getServiceTime = function ()
        {
        	var arr = nexacro.getApplication().gv_arrServiceTime;

        	var arrSvcID;
        	var strText = "";
        	var objStartDate = new Date();
        	var objEndDate = new Date();
        	for (var i = arr.length - 1; i >= 0; i = i - 1)
        	{
        		arrSvcID = arr[i][0].split(":");
        		// trace("service id : "+arrSvcID[0] + ", start : "+arr[i][1] + ", end : "+arr[i][2] + ", time : "+(objStartDate.setTime( arr[i][2] ) -objEndDate.setTime( arr[i][1] )) );
        		if (arr[i][1] && arr[i][2])
        		{
        			strText += arrSvcID[0] + " : " + (objStartDate.setTime(arr[i][2]) - objEndDate.setTime(arr[i][1])) + " ms" + "\n";
        		}
        		// 최근 3개 까지만 보여주기
        		// if(arr.length-i >= 3) break;
        	}

        	this.sta_loadService.set_text(strText);
        	this.sta_loadService.set_tooltiptext(strText);
        	this.sta_loadTitle.set_tooltiptext(strText);
        };


        this.Button00_onclick = function (obj, e)
        {
        	// form onload 전에 서비스 호출이 있으면 해당 시간을 보여준다.
        	this.fn_getServiceTime();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("com_accessTime.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
