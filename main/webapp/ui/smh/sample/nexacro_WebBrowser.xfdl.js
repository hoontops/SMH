(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Login");
            if (Form == this.constructor)
            {
                this._setFormPosition(736,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("Dataset00", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">&lt;table class=&quot;tbl_schedule03&quot;&gt;&lt;tr&gt;&lt;th style=&quot;width:25%&quot;&gt;시간&lt;/th&gt;&lt;th style=&quot;width:25%&quot;&gt;&lt;span class=&quot;course1&quot;&gt;중식&lt;/span&gt;&lt;/th&gt;&lt;th style=&quot;width:25%&quot;&gt;&lt;span class=&quot;course2&quot;&gt;석식&lt;/span&gt;&lt;/th&gt;&lt;th style=&quot;width:25%&quot;&gt;기타&lt;/th&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td class=&quot;menu1&quot;&gt;월요일&lt;br/&gt;(7월 1일)&lt;/td&gt;&lt;td&gt;쌀밥&lt;br /&gt;근대된장국&lt;br /&gt;비엔나볶음&lt;br /&gt;스크렘블에그&lt;br /&gt;고추지무침&lt;br /&gt;배추김치&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new WebBrowser("web_cookie","-1","88","454","203",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","52","24","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","184","24","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("SET");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","323","24","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("GET");
            this.addChild(obj.name, obj);

            obj = new Div("div_login","457","93","244","123",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_id","31","32","120","21",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("0");
            obj.set_value("SYSTEM");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("Button00","30","60","120","21",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("1");
            obj.set_text("InnerHTML");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("Button01","31","89","120","21",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("2");
            obj.set_text("Button01");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("Button03","502","6","120","21",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Button03");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",736,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("nexacro_WebBrowser.xfdl", function() {

        this.Login_onload = function (obj, e)
        {
        	// this.web_cookie.set_url("http://localhost:8080/HIO/html/saveCookie.html");
        	this.web_cookie.set_url("http://localhost:8080/STECH/JSP/FileReader.html");
        };

        this.web_cookie_onloadcompleted = function (obj, e)
        {
        	this.web_cookie.callMethod("setCallback", "webCallBack");

        	this.fnGetCookie("");
        };

        this.webCallBack = function (param)
        {
        	if (param.length == 0)
        	{
        		return false;
        	}

        	var arrCookie = param.split("=");

        	if (arrCookie[0] == "NEXACRO_ID")
        	{
        		this.div_login.form.edt_id.set_value(arrCookie[1].substr(0, arrCookie[1].length - 1));
        		this.div_login.chk_idSave.set_value(arrCookie[1].substr(arrCookie[1].length - 1, 1));
        	}
        	else
        	{
        		this.div_login.form.edt_id.set_value("");
        		this.div_login.chk_idSave.set_value("");
        	}
        };

        this.fnGetCookie = function ()
        {
        	var sCookie = this.web_cookie.getProperty("document").getProperty("cookie");
        	trace("document.cookie : " + sCookie);
        };

        this.fnSetCookie = function ()
        {
        	this.web_cookie.callMethod("setCookie", this.div_login.form.edt_id.value);
        };

        this.Button00_onclick = function (obj, e)
        {
        	// //this.web_cookie.callMethod("setCallback", this, "webCallBack");
        	// var _call = this.web_cookie.getProperty("document");
        	//
        	// _call.callMethod("setCallback", this, "webCallBack");
        	//
        	// //_call.destroy();

        	// this.web_cookie.callMethod("setCallback", "webCallBack");
        };

        this.Button01_onclick = function (obj, e)
        {
        	this.fnSetCookie();
        };

        this.Button02_onclick = function (obj, e)
        {
        	// var objType = this.web_cookie.getProperty("document").getProperty("all").getProperty("fnCookie").getProperty("value");
        	// alert(objType);
        	this.fnGetCookie();
        };

        this.Button03_onclick = function (obj, e)
        {
        	var obj = this.web_cookie.getProperty("document").getProperty("form1").getProperty("input01").getProperty("value");
        	alert(obj);
        };

        this.div_login_Button00_onclick = function (obj, e)
        {
        	var v1 = this.web_cookie.getProperty("document");
        	var v2 = this.web_cookie.getProperty("document").getProperty("body");
        	var v3 = this.web_cookie.getProperty("document").getProperty("body").getProperty("innerHTML");

        	var strInnerHTML = this.Dataset00.getColumn(0, "Column0");
        	v2.setProperty("innerHTML", strInnerHTML);
        	v1.setProperty("body", v2);
        	this.web_cookie.setProperty("document", v1);
        };

        this.div_login_Button01_onclick = function (obj, e)
        {
        	this.web_cookie.set_url("http://localhost:8080/test.html");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.Login_onsize,this);
            this.addEventHandler("onload",this.Login_onload,this);
            this.web_cookie.addEventHandler("onloadcompleted",this.web_cookie_onloadcompleted,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.div_login.form.Button00.addEventHandler("onclick",this.div_login_Button00_onclick,this);
            this.div_login.form.Button01.addEventHandler("onclick",this.div_login_Button01_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
        };
        this.loadIncludeScript("nexacro_WebBrowser.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
