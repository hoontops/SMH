var pForm = nexacro.Form.prototype;
 /*
 ===============================================================================
 == String 관련 함수
 ===============================================================================
 ● gfn_reportPopup 		: 팝업 오픈 실행 함수
 ● gfn_fieldData 			: field 데이타 생성
 ● gfn_getOofSqlData 		: Rexpert OOF Data 생성 - SQL타입
 ● gfn_getOofXMLData 		: Rexpert OOF Data 생성 - XML타입
 */


/**
* 팝업 오픈 실행 함수
* @param {string}  Popup Form의 ID )
* @param {string}  Popup Form  URL )
* @param {object}  ( Popup Form으로 전달될 Argument )
* @param {object}  ( Popup Form으로 전달될 Argument )
* @param {boolen}  ( Popup Form Left Position )
* @param {string}  ( Popup Form Top Position )
* @return {object} 팝업에 해당 메세지값을 표현
* @example N/A
* @memberOf public
*/
pForm.gfn_reportPopup = function (sPopupId, sUrl, oArg, sOption, sPopupCallback)
{
	var nLeft = -1;
	var nTop = -1;
	var nWidth = 1;
	var nHeight = 1;
	var bShowTitle = true;
	var bShowStatus = false;
	var bModeless = false;
	var bLayered = true;
	var nOpacity = 100;
	var bAutoSize = true;
	var bResizable = false;
	var bRound = false;
	var sPopupCallback = (this.gfn_isNull(sPopupCallback)) ? "fn_popupAfter" : sPopupCallback;
	var sTitleText = "";
	var viewOption = 0;

	var aVal = sOption.split(",");
	for (var i=0; i<aVal.length; i++)
	{
		var aVal2 = aVal[i].trim().split("=");
		switch (aVal2[0])
		{
			case "top":
				nTop = parseInt(aVal2[1]);
				break;
			case "left":
				nLeft = parseInt(aVal2[1]);
				break;
			case "width":
				nWidth = parseInt(aVal2[1]);
				break;
			case "height":
				nHeight = parseInt(aVal2[1]);
				break;
			case "title":
				bShowTitle = aVal2[1];
				break;
			case "titletext":
				sTitleText = aVal2[1];
				break;
			case "status":
				bShowStatus = aVal2[1];
				break;
			case "modeless":
				bModeless = aVal2[1];
				break;
			case "layered":
				bLayered = aVal2[1];
				break;
			case "opacity":
				nOpacity = aVal2[1];
				break;
			case "autosize":
				bAutoSize = aVal2[1];
				break;
			case "resizable":
				bResizable = aVal2[1];
				break;
			case "round":
				bRound = aVal2[1];
				break;
			case "viewoption":
				viewOption = aVal2[1];
				break;
		}
	}
	
	for(var i in oArg)
	{
		if(i == "strXML")
		{
			oArg[i] = oArg[i] + "{%settingOption%}" + viewOption;
		}
		//trace(i + " : " + oArg[i]);
	}

	var sOpenalign = "";

	sTitleText = (this.gfn_isNull(sTitleText)) ? this.gfn_GetMessTxt(sPopupId) : sTitleText;

	if (nLeft == -1 && nTop == -1)
	{
		sOpenalign = "center middle";
        nLeft   =  (nexacro.getApplication().mainframe.width / 2) - Math.round(nWidth / 2);
	    nTop    = (nexacro.getApplication().mainframe.height / 2) - Math.round(nHeight / 2) ;
	}
	var objParentFrame = this.getOwnerFrame();

    if(bModeless == "true")
    {
        newChild = new nexacro.ChildFrame;
        //trace("nLeft : "+nLeft+", nTop : "+nTop+", nWidth : "+nWidth+", nHeight : "+nHeight);
        newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);

        newChild.set_dragmovetype("all");
        newChild.set_showtitlebar(bShowTitle);
        newChild.set_autosize(bAutoSize);
        newChild.set_resizable(bResizable);
        newChild.set_titletext(sTitleText);
        newChild.set_showstatusbar(bShowStatus);
        newChild.set_openalign(sOpenalign);
        newChild.set_layered(bLayered);

        if(bRound)
        {
          newChild.set_bordertype("round 10 10");
        }
        newChild.set_background("white");
        newChild.set_opacity(nOpacity);
		

        newChild.showModeless(objParentFrame, oArg, this ,sPopupCallback, true);

    }
    else
    {

		newChild = new nexacro.ChildFrame;
		newChild.init(sPopupId,nLeft, nTop, nWidth, nHeight, null, null, sUrl);

		newChild.set_dragmovetype("all");
		newChild.set_showtitlebar(bShowTitle);
		newChild.set_autosize(bAutoSize);
		newChild.set_resizable(bResizable);
		newChild.set_titletext(sTitleText);
		newChild.set_showstatusbar(bShowStatus);
		newChild.set_openalign(sOpenalign);
		newChild.set_layered(bLayered);

		if(bRound)
		{
		  newChild.set_bordertype("round 10 10");
		}
		newChild.set_background("transparent");
		newChild.set_opacity(nOpacity);

		newChild.showModal(objParentFrame, oArg, this,sPopupCallback, true);
    }
}

/**
 * field 데이타 생성
 * @param {Object} objDs      데이타셋
 * @param {String} sCdCol     코드 컬럼명
 * @param {String} sValCol    값 컬럼명
 * @return {String} 결과 XML 문자열
 * @example gfn_fieldData(this.ds_list, 'code', 'value')
 */
pForm.gfn_fieldData = function(objDs, sCdCol, sValCol)
{
	var sCode, sValue;
	var sXml = "<field-list>";

	for(var i=0; i < objDs.rowcount; i=i+1)
	{
		sCode = objDs.getColumn( i, sCdCol);
		sValue = objDs.getColumn( i, sValCol);
		
		sXml += "<field name='"+sCode+"'>";//Parameter 명
		sXml += "<![CDATA["+sValue+"]]]]><![CDATA[>";//Parameter 값
		sXml += "</field>";
	}
	sXml += "</field-list>";
	return sXml;
}


/**
 * Rexpert OOF Data 생성 - SQL타입
 * @param {String} sCrfName      리포트 crf 파일명
 * @param {String} strSql        XML 문자열
 * @param {String} sTitle        문서 타이틀
 * @param {String} sDbName       DB 아이디
 * @return {String} 결과 XML 문자열
 * @example gfn_getOofData('dbTest.crf', strSql, 'report')
 */
pForm.gfn_getOofSqlData = function(sCrfName, strSql, sTitle, sDbName, sOption)
{
	
	if (this.gfn_isNull(sCrfName)) 
	{
		//sCrfName = "/crf/dbTest.crf";
		this.gfn_alert("리포트 파일명이 정의 되지 않았습니다.");
		return;
	}
	
	if (this.gfn_isNull(sDbName)) 
	{
		sDbName = "DSTM";
	}
	
	if (this.gfn_isNull(sTitle)) 
	{
		sTitle = "report";
	}


	/* report 파일 경로 */
	//var sReport="http://10.222.77.247:7115/ClipReport4/rebfiles/test.reb";
	//var sReport="%root%"+sCrfName;
	//var sReport= nexacro.getEnvironment().services["svcurl"].url + sCrfName;
	
	var sReport;
	var sAppId = nexacro.getApplication().id.toUpperCase();
	
	if(nexacro.getApplication().gv_runMode == "prod")
	{
		var absolutePath = "";
		
		if(sAppId == "CMD" || sAppId == "EAP" || sAppId == "EAR" || sAppId == "EFA" || sAppId == "EGF" || sAppId == "EGL" || sAppId == "EIN" || sAppId == "EPS" || sAppId == "ETX")
		{
			absolutePath = "/app/web/fcm/";
		}
		else if(sAppId == "BGT")
		{
			absolutePath = "/app/web/" + sAppId.toLowerCase();
		}
		else //전략경영
		{
			absolutePath = "/app/web/" + sAppId.toLowerCase() + "/ui/" + sAppId.toLowerCase();
		}
		
		sReport = absolutePath + sCrfName;
	}
	else
	{
		if(sAppId == "BGT" && nexacro.getApplication().gv_runMode != "local")
		{
			var sUrl = nexacro.getEnvironment().services["svcurl"].url;
			var urlLength = (this.gfn_getLengthB(sUrl) - 4);
			var rUrl = this.gfn_left(sUrl, urlLength);
			
			sReport= rUrl + sCrfName;
		}
		else
		{
			sReport= nexacro.getEnvironment().services["svcurl"].url + sCrfName;
		}
	}
	
	var sXml ="<?xml version='1.0' encoding='UTF-8'?>";
		sXml+="<oof version='3.0'>";
		sXml+="<document title='"+sTitle+"' enable-thread='0'>";
		sXml+="<file-list>";
		//sXml+="<file type='reb.root' communicationType='local' path='"+sReport+"'>";
		sXml+="<file type='reb' communicationType='local' path='"+sReport+"'>";
		sXml+="<connection-list>";
		sXml+="<connection type='data' namespace='*'>";
		sXml+="<config-param-list>";
		sXml+="<config-param name='dbname'>"+sDbName+"</config-param>";
		sXml+="</config-param-list>";
		sXml+="</connection>";
		sXml+="</connection-list>";
		sXml+= strSql;
		sXml+="</file>";
		sXml+="</file-list>";
		sXml+="</document>";
		sXml+="</oof>"; 
		
	return sXml;
}

/**
 * Rexpert OOF Data 생성 - XML타입
 * @param {String} sCrfName      리포트 crf 파일명
 * @param {String} objDsList     dataset object list
 * @param {String} arrFieldList  사용자 정의 param 목록
 * @param {String} sOption       option
 * @return {String} 결과 XML 문자열
 * @example var strXML = this.gfn_getOofXMLData("/crf/cmd/sample/xmlTest.crf", this.ds_list, arrFieldList);
 */
pForm.gfn_getOofXMLData = function(sCrfName, objDsList, arrFieldList, sOption )
{

// 	//넘어온 데이타셋 정보가 없으면 return 처리
// 	if(!objDsList)
// 	{
// 		this.gfn_alert("데이타셋이 정의 되지 않았습니다. 확인해주세요.");
// 		return;
// 	}


	if (this.gfn_isNull(sCrfName)) 
	{
		//sCrfName = "/crf/xmlTest.crf";
		this.gfn_alert("리포트 파일명이 정의 되지 않았습니다.");
		return;
	}
	
	//var sReport="%root%"+sCrfName;
	//var sReport= nexacro.getEnvironment().services["svcurl"].url + sCrfName;
	
	var sReport;
	var sAppId = nexacro.getApplication().id.toUpperCase();
	if(nexacro.getApplication().gv_runMode == "prod")
	
	{
		var absolutePath = "";
		
		if(sAppId == "CMD" || sAppId == "EAP" || sAppId == "EAR" || sAppId == "EFA" || sAppId == "EGF" || sAppId == "EGL" || sAppId == "EIN" || sAppId == "EPS" || sAppId == "ETX")
		{
			absolutePath = "/app/web/fcm/";
		}
		else if(sAppId == "BGT")
		{
			absolutePath = "/app/web/" + sAppId.toLowerCase();
		}
		else //전략경영
		{
			absolutePath = "/app/web/" + sAppId.toLowerCase() + "/ui/" + sAppId.toLowerCase();
		}
		
		sReport = absolutePath + sCrfName;
	}
	else
	{
		if(sAppId == "BGT" && nexacro.getApplication().gv_runMode != "local")
		{
			var sUrl = nexacro.getEnvironment().services["svcurl"].url;
			var urlLength = (this.gfn_getLengthB(sUrl) - 4);
			var rUrl = this.gfn_left(sUrl, urlLength);
			
			sReport= rUrl + sCrfName;
		}
		else
		{
			sReport= nexacro.getEnvironment().services["svcurl"].url + sCrfName;
		}
	}
	
	var sOOF = "";
	sOOF+="<?xml version='1.0' encoding='UTF-8'?>";
	sOOF+="<oof version='3.0'>";
	sOOF+="<document>";
	sOOF+="<file-list>";
	//sOOF+="<file type='reb' path='http://localhost:8088/RexServer30_141216/rebfiles/oracle_emp.reb'>"; // reb파일 경로
	//sOOF+="<file type='reb.root' communicationType='local' path='"+sReport+"'>";
	sOOF+="<file type='reb' communicationType='local' path='"+sReport+"'>";
	sOOF+="<connection-list>";
	sOOF+="<connection type = 'memo' namespace='*'>";             //커넥션타입, 커넥션명
	sOOF+="<config-param-list>";
	sOOF+="<config-param name='data'>";
	
	sOOF+="<root>";
	
	if(objDsList instanceof Dataset){
	
		sOOF+=objDsList.saveXML();                                                       // xml Data"
		
	}else{
	
		for(var n in objDsList)
		{
			sOOF+=objDsList[n].saveXML();                                                // xml Data"
			
		}
	}
	
	sOOF+="</root>";
	
	sOOF+="</config-param>";
	sOOF+="</config-param-list>";
	sOOF+="<content content-type='xml'>";
	sOOF+="<content-param name='root'>{%dataset.xml.root%}</content-param>"; //반복노드
	sOOF+="<content-param name='preservedwhitespace'>1</content-param>";
	sOOF+="<content-param name='bindmode'>name|index</content-param>";
	sOOF+="</content>";
	sOOF+="</connection>";
	sOOF+="</connection-list>";
 	sOOF+="<field-list>";
	
	if( !this.gfn_isNull(arrFieldList) ){
	    if( arrFieldList.length ) {
			for(var i=0; i < arrFieldList.length; i=i+1)
			{
				sOOF += "<field name='"+arrFieldList[i][0]+"'>";//Parameter 명
				sOOF += "<![CDATA["+arrFieldList[i][1]+"]]]]><![CDATA[>";//Parameter 값
				sOOF += "</field>";
			}
	    } else {
			for( var key in arrFieldList )
			{
				sOOF += "<field name='"+ key +"'>";//Parameter 명
				sOOF += "<![CDATA["+  arrFieldList[key] +"]]]]><![CDATA[>";//Parameter 값
				sOOF += "</field>";
			}		
		}

	}

 	sOOF+="</field-list>";

	sOOF+="</file>";
	sOOF+="</file-list>";
	sOOF+="</document>";
	sOOF+="</oof>";
		
	return sOOF;
}

/**
 * field 데이타 생성
 * @param {Object} objDs      데이타셋
 * @param {String} sCdCol     코드 컬럼명
 * @param {String} sValCol    값 컬럼명
 * @return {String} 결과 XML 문자열
 * @example gfn_fieldData(this.ds_list, 'code', 'value')
 */
/*
pForm.gfn_strParameterData = function(objDs, sCdCol, sValCol)
{
	var sCode, sValue;
	var sParams = "";

	for(var i=0; i < objDs.rowcount; i=i+1)
	{
		sCode = objDs.getColumn( i, sCdCol);
		sValue = objDs.getColumn( i, sValCol);
		if(i==0)
			sParams += sCode;//Parameter 명
		else
			sParams += "&"+ sCode;//Parameter 명
		
		sParams += "="+sValue;//Parameter 값
	}
	objDs.applyChange();
	return sParams;
}
*/
pForm.gfn_strParameterData = function(objDs, sCdCol, sValCol)
{
	var nCode, sValue;
	var sParams = "";
	objDs.set_keystring( "S:"+sCdCol );//순서 정렬

	for(var i=0; i < objDs.rowcount; i++)
	{
		nCode = objDs.getColumn( i, sCdCol);
		sValue = this.gfn_isEmpty(objDs.getColumn( i, sValCol));
		if(nCode > i+1){
			for(var j=0; j<nCode - (i+1); i++){
				sParams += "[]";//Parameter 값
			}
		}
		sParams += "["+sValue+"]";//Parameter 값
		
	}
	objDs.applyChange();
	return sParams;
}
