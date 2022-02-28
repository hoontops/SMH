(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("com_rexperrt");
            this.set_titletext("Report Viewer");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("web_report","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("com_report.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: Report viewer 관리
         * 파일명 		: reportViewer.xfdl
         * 작성자 		: UI공통
         * 작성일 		: 2017.09.08
         *
         * 설  명		: 리포트 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------

         *---------------------------------------------------------------------------------------

         /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "lib::comReport.xjs";

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        //var rdOpt = "/rxlsopt [1] /rbarcodeopt [8]";
        var rdOpt = " ";
        //var rdOpt = "/rxlsopt [1] /ruseswapdisk /rbarcodeopt [8]";
        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.form_onload = function (obj, e)
        {
        //http://mesrd1.interflex.co.kr/ifc/rdCommon.asp?mrdPath=http://localhost:8011/mrd/test.mrd&rdParam=/rfn [http://mesrd1.interflex.co.kr:8282/RDServer/rdagent.jsp] /rsn [MESDEV] /rp [QCAction001]/rxlsopt [1] /ruseswapdisk /rbarcodeopt [8]
        //http://mesrd1.interflex.co.kr/ifc/rdCommon_html5.asp?mrdPath=http://mesrd1.interflex.co.kr/MES/pcm/IFCMRDF0027R1.mrd&rdParam=/rsn [MESDEV]  /rp [114] /rxlsopt [1] /ruseswapdisk /rbarcodeopt [8]
        //운영계 : http://mesrd1.interflex.co.kr/ifc/rdCommon_html5.asp?mrdPath=http://mesrd1.interflex.co.kr/MES/ifcmesrdtest_DEVDB_210323.mrd&rdParam=/rsn [MESPROD] /rp ['INTERFLEX'][]/rxlsopt [1] /rbarcodeopt [8]
        //          http://mesrd1.interflex.co.kr/ifc/rdCommon_html5.asp?mrdPath=http://mesrd1.interflex.co.kr/MES/pcm/PCM00600R.mrd&rdParam=/rsn [MESPROD] /rp [M210607F001-1-FG-000-000][ko-KR][M210607F001-1-FG-000-000|정상]/rxlsopt [1] /rbarcodeopt [8]
        //			http://mesrd1.interflex.co.kr/ifc/rdCommon_html5.asp?mrdPath=http://mesrd1.interflex.co.kr/MES/pcm/PCM00600R.mrd&rdParam=/rsn [MESDEV]  /rp [M210427F001-1-FG-003-001][ko-KR][M210427F001-1-FG-003-001|정상]/rxlsopt [1] /rbarcodeopt [8]

        //개발계 : http://mesrd1.interflex.co.kr/ifc/rdCommon_html5.asp?mrdPath=http://mesrd1.interflex.co.kr/MES/ifcmesrdtest_DEVDB_210323.mrd&rdParam=/rsn [MESDEV] /rp ['INTERFLEX'][]/rxlsopt [1] /rbarcodeopt [8]
        	var sParam = this.parent.strField;
        	var sRptName = this.parent.sRptName;
        	var sRptPath = this.parent.sRptPath;
        	var bModalless = this.parent.bModalless;
        	if(this.gfn_isNull(sRptName)) return;
        	this.fn_WebBrowserCall(sRptPath, sParam, sRptName, bModalless);
        };

        /**************************************************************************
         * 4. TRANSACTION, CALLBACK 영역
         ***************************************************************************/

        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/

        this.fn_callReport = function (strXML, viewOption)
        {
        	// 2017.10.06 pdf이외의 문서버튼 제거를 위한 viewOption 파라미터 추가(1을 넘겨줄경우 버튼사라짐)
        	if (this.gfn_isNull(strXML))
        	{
        		this.gfn_alert("XML 이 정의 되지 않았습니다.");
        		return;
        	}

        	if (this.gfn_isNull(viewOption))
        	{
        		viewOption = 0;
        	}

        	var ifm = this.web_report.getElement()._handle.getElementsByTagName("iframe")[0].contentWindow;

        	var rtn = ifm.postMessage(strXML + "{%settingOption%}" + viewOption, "*");
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.web_report_onloadcompleted = function (obj, e)
        {
        	// trace("this.parent.arg1-->"+this.parent.arg1);
        	// trace("this.parent.strXML-->"+this.parent.strXML);
        	var strXML = this.parent.strXML;

        	// 1. 팝업에서 argument 로 넘어온 값이 존재하면 Report 생성
        	if (!this.gfn_isNull(strXML))
        	{
        		var ifm = this.web_report.getElement()._handle.getElementsByTagName("iframe")[0].contentWindow;

        		var rtn = ifm.postMessage(strXML, "*");
        	}

        	// 2.업무화면에서 호출될 때는 폼 전역변수값으로 report 생성
        	if (!this.gfn_isNull(this.parent.fv_strXML))
        	{
        		var ifm = this.web_report.getElement()._handle.getElementsByTagName("iframe")[0].contentWindow;

        		var rtn = ifm.postMessage(this.parent.fv_strXML, "*");
        	}
        };

        this.fn_WebBrowserCall = function (sRptPath, sParam, sRptName, bModalless)
        {
        	var sRptUrl = this.gfn_getServiceUrl("REPORT");
        	//var sMrdUrl = "mrdPath="+this.gfn_getServiceUrl("MRDURL") + sRptPath + sRptName;
        	var sMrdUrl = "strSrc1="+ sRptPath + sRptName+'.mrd';
        	//var sRdParam = "&rdParam="+this.gfn_getServiceUrl("RDPARAM"); //"&rdParam=/rsn [MESPROD]";
        	var sRdParam = "&strParam1="+this.gfn_getServiceUrl("RDPARAM"); //"&rdParam=/rsn [MESPROD]";
        	if(system.navigatorname=="IE" && nexacro.getApplication().gv_runMode == "local"){
        		//var sUrl = sRptUrl + "/rdCommon.asp?"+sMrdUrl+sRdParam+" /rp "+sParam+rdOpt;
        		var sUrl = sRptUrl + "/html5/PrintReport.jsp?"+sMrdUrl+sRdParam+" /rp "+sParam+rdOpt;
        	}
        	else{
        		//var sUrl = sRptUrl + "/rdCommon_html5.asp?"+sMrdUrl+sRdParam+" /rp "+sParam+rdOpt;
        		var sUrl = sRptUrl + "/html5/PrintReport.jsp?"+sMrdUrl+sRdParam+" /rp "+sParam+rdOpt;
        	}
        	trace("sUrl-->" + sUrl);

        	this.fn_WebBrowserSendPost(this, this.web_report, sUrl, sParam, bModalless);
        };

        this.fn_WebBrowserSendPost = function (objParent, objWb, sUrl, sParam, bModalless)
        {
        trace("system.navigatorname-->"+system.navigatorname);
        	trace(system.navigatorname);
        	/*
        	if (system.navigatorname == "Runtime")
        	{
        		// runtime
        		var str;
        		str += '<html>                                                                                                                            ';
        		str += '<title>                                                                                                                           ';
        		str += '</title>                                                                                                                          ';
        		str += '<head>                                                                                                                            ';
        		str += '<meta charset="UTF-8">                                                                                                            ';
        		str += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> 		              ';
        		str += '</head>                                                                                                                           ';
        		str += '<body>                                                                                                                            ';
        		str += '<form id="postform" name="postform" action="' + sUrl + '" method="post">										 ';
        		// str +='	<input type="hidden" id="aa" name="aa" value="ID">                                                                           	 ';
        		// str +='	<input type="hidden" id="bb" name="bb" value="PW">                                                                           	 ';
        		// str +='	<input type="hidden" id="p_xml" name="p_xml" value="'+sParam+'">                                                                           	 ';
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
        	else if (system.navigatorname == "IE" && system.navigatorversion == 8)
        	{
        		// IE8
        		objWb.set_url(sUrl + "?" + sParam);
        		return;
        	}
        	*/
        	// if(bModalless){
        	//objWb.set_url(sUrl + "?" + encodeURI(sParam));
        	//objWb.set_url(sUrl + "?" + sParam);
        	//trace(sUrl + "?" + encodeURI(sParam));
        	objWb.set_url(sUrl);
        	//return;
        	// }
        	trace("sParam-->" + sParam);
        	// html5
        	// add new webbrowser component to initialize web page.
        /*
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
        	 if ( iframeObj.contentDocument )
        	 {
        		 iFrameDoc = iframeObj.contentDocument;
        		 iFrameBody = iFrameDoc.getElementsByTagName('body')[0];
        	 } else if ( iframeObj.contentWindow ) {
        		 iFrameDoc = iframeObj.contentWindow.document;
        		 iFrameBody = iFrameDoc.getElementsByTagName('body')[0];
        	 }
        	 if(!iFrameBody)
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
        	 for(var i = 0; i < arr.length; i++)
        	 {
        		 var sValue = "";
        		 var arrVal = "";
        		 var arr2 = arr[i].split("=");

        		 for(var j = 1; j < arr2.length; j++)
        		 {
        			 if(j == 1)
        				arrVal += arr2[j];
        			 else
        				arrVal += "=" + arr2[j];
        		 }

        		 if(arrVal.length > 0)
        		 {
        			sValue = arrVal;
        		 } else {
        			sValue = arr2[1];
        		 }

        		 if(arr2[0] && arr2[0].length > 0)
        		 {
        			 var input = iFrameDoc.createElement("input");
        			 input.id 	= arr2[0];
        			 input.name 	= arr2[0];
        			 input.type 	= "hidden";
        			 input.value	= sValue;
        			 form.appendChild(input);
        		 }
        	 }

        	 try {
        		 var script = iFrameDoc.createElement('script');
        		 script.type = 'text/javascript';
        		 script.charset = 'utf-8';
        		 script.defer = true;
        		 script.async = true;
        		 script.onload = function () {
        		 }
        		 var sDomain = "document.domain = \"" + document.domain + "\";";
        		 script.text = [sDomain].join('');
        		 iFrameBody.appendChild(script);
        	 } catch (e) {
        	 }

        	 if(iFrameDoc.getElementById('postform'))
        	 {
        		iFrameDoc.getElementById('postform').submit();
        	 }
        */
        };

        this.web_report_onusernotify = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.web_report.addEventHandler("onloadcompleted",this.web_rexpert_onloadcompleted,this);
        };
        this.loadIncludeScript("com_report.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
