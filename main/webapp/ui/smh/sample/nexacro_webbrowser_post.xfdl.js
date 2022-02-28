(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("nexacro_webbrowser_post");
            this.set_titletext("Webbrowser - send post data");
            if (Form == this.constructor)
            {
                this._setFormPosition(420,305);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","274","44","134","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Send post data ");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("WebBrowser00","10","84","400","200",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","6","398","29",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Webbrowser - send post data");
            obj.set_background("lightgrey");
            obj.set_padding("0px 0px 0px 5px");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",420,305,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("nexacro_webbrowser_post.xfdl", function() {

        this.Button00_onclick = function (obj, e)
        {
        	this.fn_WebBrowserSendPost(this, this.WebBrowser00, "http://localhost:8080/postdata_test.jsp", "aa=ID&bb=PW");
        };

        this.fn_WebBrowserSendPost = function (objParent, objWb, sUrl, sParam)
        {
        	trace(nexacro.Browser);

        	if (nexacro.Browser == "Runtime")
        	{
        		// runtime
        		var str;
        		str += '<html>                                                                                                                            ';
        		str += '<title>                                                                                                                           ';
        		str += '</title>                                                                                                                          ';
        		str += '<head>                                                                                                                            ';
        		str += '<meta charset="UTF-8">                                                                                                            ';
        		str += '</head>                                                                                                                           ';
        		str += '<body>                                                                                                                            ';
        		str += '<form id="postform" name="postform" action="' + sUrl + '" method="post" accept-charset="utf-8">										 ';
        		str += '	<input type="hidden" id="aa" name="aa" value="ID">                                                                           	 ';
        		str += '	<input type="hidden" id="bb" name="bb" value="PW">                                                                           	 ';
        		str += '</form>                                                                                                                           ';
        		str += '<script type="text/javascript">                                                                                                   ';
        		str += '	document.title = "testWeb";                                                                                                      ';
        		str += '	document.postform.submit();                                                                                                      ';
        		str += '</script>                                                                                                                         ';
        		str += '</body>                                                                                                                           ';
        		str += '</html>                                                                                                                           ';

        		objWb.getProperty("document").callMethod("Write", str);
        		objWb.getProperty("document").callMethod("Close");
        		return;
        	}
        	else if (nexacro.Browser == "IE" && nexacro.BrowserVersion == 8)
        	{
        		// IE8
        		objWb.set_url(sUrl + "?" + sParam);
        		return;
        	}

        	// html5
        	// add new webbrowser component to initialize web page.

        	var nL = objWb.left;
        	var nT = objWb.top;
        	var nW = objWb.width;
        	var nH = objWb.height;
        	var nR = objWb.right;
        	var nB = objWb.bottom;
        	var sName = objWb.name;

        	objParent.removeChild(objWb.name);
        	objWb.destroy();
        	objWb = null;

        	objWb = new WebBrowser();
        	objWb.init(sName, "absolute", nL, nT, nW, nH, nR, nB);
        	objParent.addChild(sName, objWb);
        	objWb.show();

        	var iframeObj = document.getElementById(objWb._ifrm_elem._object_id);
        	var iFrameDoc;
        	var iFrameBody;
        	if (iframeObj.contentDocument)
        	{
        		iFrameDoc = iframeObj.contentDocument;
        		iFrameBody = iFrameDoc.getElementsByTagName('body')[0];
        	}
        	else if (iframeObj.contentWindow)
        	{
        		iFrameDoc = iframeObj.contentWindow.document;
        		iFrameBody = iFrameDoc.getElementsByTagName('body')[0];
        	}
        	if (!iFrameBody)
        	{
        		iFrameBody = iFrameDoc.createElement("body");
        		iFrameDoc.appendChild(iFrameBody);
        	}

        	var form = iFrameDoc.createElement("form");
        	form.id = "postform";
        	form.name = "postform";
        	form.action = sUrl;
        	form.method = "post";
        	iFrameBody.appendChild(form);

        	var arr = sParam.split(/&/g);
        	var sHtml;
        	for (var i = 0; i < arr.length; i++)
        	{
        		var sValue = "";
        		var arrVal = "";
        		var arr2 = arr[i].split("=");

        		for (var j = 1; j < arr2.length; j++)
        		{
        			if (j == 1)
        			{
        				arrVal += arr2[j];
        			}
        			else
        			{
        				arrVal += "=" + arr2[j];
        			}
        		}

        		if (arrVal.length > 0)
        		{
        			sValue = arrVal;
        		}
        		else
        		{
        			sValue = arr2[1];
        		}

        		if (arr2[0] && arr2[0].length > 0)
        		{
        			var input = iFrameDoc.createElement("input");
        			input.id = arr2[0];
        			input.name = arr2[0];
        			input.type = "hidden";
        			input.value = sValue;
        			form.appendChild(input);
        		}
        	}

        	try
        	{
        		var script = iFrameDoc.createElement('script');
        		script.type = 'text/javascript';
        		script.charset = 'utf-8';
        		script.defer = true;
        		script.async = true;
        		script.onload = function ()
        		{
        		};
        		var sDomain = "document.domain = \"" + document.domain + "\";";
        		script.text = [sDomain].join('');
        		iFrameBody.appendChild(script);
        	}
        	catch (e)
        	{
        	}

        	if (iFrameDoc.getElementById('postform'))
        	{
        		iFrameDoc.getElementById('postform').submit();
        	}
        }
        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("nexacro_webbrowser_post.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
