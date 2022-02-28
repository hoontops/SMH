var pForm = nexacro.Form.prototype;
/* ===============================================================================
 == 함수 목록....엑셀처리 함수들은 여기에 작성한다.
 ===============================================================================
 ● gfn_export_excel				: excel export함수
 ● gfn_export_bigdata_excel		: excel 대용량 데이터 export함수
 ● gfn_export_excel_onexport		: excel export onexport 이벤트 (사용불가)
 ● gfn_export_excel_onprogress		: excel export onprogress 이벤트 (디버깅시에만 사용)
 ● gfn_export_excel_onsuccess		: excel export onsuccess 이벤트
 ● gfn_export_excel_onerror		: excel export onerror 이벤트
 ● set_exporttype					: excel exporttype 속성 설정
 ● gfn_import_excel				: excel import함수
 ● gfn_import_excel_onsuccess		: excel import onsuccess 이벤트
 ● gfn_import_excel_onerror		: excel import onerror 이벤트
 ● gfn_getFileName					: import된 excel 파일명 가져오기 함수
 ● fn_createWaitcursor				: excel import시 사용될 커스텀 waitcursor 생성 함수
 ● fn_createWaitcursor				: excel import시 사용되는 커스텀 waitcursor 제거 함수
 ● closeCursor_onclick				: excel import시 사용되는 커스텀 waitcursor의 닫기버튼 onclick이벤트
*/

pForm.fv_importObject = null;  //ExcelImportObject Component
pForm.fv_exportObject = null;  //ExcelImportObject Component
/* 2015.05.07 - (weblogic 서블릿 문제때문에 뒤에 Servlet붙임. web.xml과 같이) */
//this.import_excel_url = application.services["svcurl"].url + "/XImportServlet";  //import URL

pForm.gfn_export_excel = function(str, strSht, fileName, fileType, shtStyle)
{
	/*서비스 url */
	var strService = nexacro.getEnvironment().services["svcurl"].url;
	
	var sCommand = "IFC";
	if( !this.gfn_isNull(sCommand) )
	{
		sCommand = sCommand.toUpperCase();
		strService = nexacro.getApplication().gds_url.lookup("RUN_MODE", nexacro.getApplication().gv_runMode, sCommand);
	}
	    	
	if( this.gfn_isNull(strService) )
	{
		this.gfn_alert("서비스 경로가 정의 되지 않았습니다.");
	}
		
	//this.excel_url = nexacro.getEnvironment().services["svcurl"].url + "/XExportImportServlet";   //export URL
	this.excel_url = strService + "/XExportImportServlet";   //export URL
	
	if( this.gfn_isNull(strSht) ) strSht = "Sheet";
	
	//ExcelExportObject 초기화
	if( this.fv_exportObject && this.fv_exportObject instanceof ExcelExportObject)
	{
		this.fv_exportObject.destroy();
		this.fv_exportObject = null;
	}
	
	var arrGridNames = str.split(":");
	
	var sheetNames = strSht.split(":");
	
	
	this.fv_exportObject = new ExcelExportObject("export_"+this.name, this);
	
	//this.fv_exportObject.addEventHandler("onexport", this.gfn_export_excel_onexport, this);
	//this.fv_exportObject.addEventHandler("onprogress", this.gfn_export_excel_onprogress, this);
	this.fv_exportObject.addEventHandler("onsuccess", this.gfn_export_excel_onsuccess, this);
	this.fv_exportObject.addEventHandler("onerror", this.gfn_export_excel_onerror, this);
	
	
	if(fileType == "EXCEL")
	{
		this.fv_exportObject.set_exporttype(nexacro.ExportTypes.EXCEL2007); // Excel 2007
	}
	else if(fileType == "HANCELL")
	{
		this.fv_exportObject.set_exporttype(nexacro.ExportTypes.HANCELL2014); // HANCELL2014
	}
	else if(fileType == "CSV")
	{
		this.fv_exportObject.set_exporttype(nexacro.ExportTypes.CSV); // CSV
	}
	else if(this.gfn_isNull(fileType))
	{
		var sAppId = nexacro.getApplication().id.toUpperCase();
		this.fv_exportObject.set_exporttype(nexacro.ExportTypes.EXCEL2007); // Excel 2007
	}
	else
	{
		this.alert("잘못된 파일타입 지정입니다.");
	}
	trace("this.excel_url = " + this.excel_url);
	this.fv_exportObject.set_exporturl(this.excel_url);
	
	
	trace("arrGridNames-->"+arrGridNames);
	
	// 익스포트 그리드 추가
	for(var i=0; i < arrGridNames.length; i=i+1)
	{
		var comp = Eco.XComp.getCompByPathName(arrGridNames[i], this);
//		comp.set_cssclass("grd_report");
		
		if(sheetNames.length > 1) 
		{
			this.fv_exportObject.addExportItem(nexacro.ExportItemTypes.GRID, comp, sheetNames[i] +"!A1");
			var objExportItem = this.fv_exportObject.getExportItem( nexacro.ExportItemTypes.GRID, i );
//			if(objExportItem) objExportItem.set_acceptstyle("cellline");	
		}
		else 
		{
			this.fv_exportObject.addExportItem(nexacro.ExportItemTypes.GRID, comp, strSht +"!A1");
			var objExportItem = this.fv_exportObject.getExportItem( nexacro.ExportItemTypes.GRID, 0 );
//			if(objExportItem) objExportItem.set_acceptstyle("cellline");	
		}
		//comp.set_cssclass("");

	}
	
	if(this.parent.id == "form" && !this.gfn_isNull(this.parent.components[2].text)) //메인폼 일때만 디폴트처리
	{
		// 업무명 Path에서 현재 화면명 가져옴
		var formPath = this.parent.components[2].text;
		var formNameArr = new Array();
			formNameArr = formPath.split(">");
		var arrIdx = formNameArr.length -1;
		var formTitle = this.gfn_lTrim(formNameArr[arrIdx]);
		
		//디폴트 파일명 세팅
		if(this.gfn_isNull(fileName))
		{
			fileName = formTitle;
		}
	}
	
	this.fv_exportObject.set_exportfilename(fileName);
	
	if(this.gfn_isNull(shtStyle))
	{
		shtStyle = false;
	}
	//스타일처리제거
	//this.fv_exportObject.set_exportstyle(shtStyle);
	
	// waitCursor처리
	nexacro.getEnvironment().set_usewaitcursor(true);
	this.setWaitCursor(true, true);
	
	// 익스포트
	var result = this.fv_exportObject.exportData();
	
	return result;
}

pForm.gfn_export_excel2 = function(grdName, strSht, fileName, fileType, shtStyle)
{
	/*서비스 url */
	var strService = nexacro.getEnvironment().services["svcurl"].url;
	
	var sCommand = "IFC";
	if( !this.gfn_isNull(sCommand) )
	{
		sCommand = sCommand.toUpperCase();
		strService = nexacro.getApplication().gds_url.lookup("RUN_MODE", nexacro.getApplication().gv_runMode, sCommand);
	}
	    	
	if( this.gfn_isNull(strService) )
	{
		this.gfn_alert("서비스 경로가 정의 되지 않았습니다.");
	}
		
	//this.excel_url = nexacro.getEnvironment().services["svcurl"].url + "/XExportImportServlet";   //export URL
	this.excel_url = strService + "/XExportImportServlet";   //export URL
	
	if( this.gfn_isNull(strSht) ) strSht = "Sheet";
	
	//ExcelExportObject 초기화
	if( this.fv_exportObject && this.fv_exportObject instanceof ExcelExportObject)
	{
		this.fv_exportObject.destroy();
		this.fv_exportObject = null;
	}
	
	var sheetNames = strSht.split(":");
	
	
	this.fv_exportObject = new ExcelExportObject("export_"+this.name, this);
	
	//this.fv_exportObject.addEventHandler("onexport", this.gfn_export_excel_onexport, this);
	//this.fv_exportObject.addEventHandler("onprogress", this.gfn_export_excel_onprogress, this);
	this.fv_exportObject.addEventHandler("onsuccess", this.gfn_export_excel_onsuccess, this);
	this.fv_exportObject.addEventHandler("onerror", this.gfn_export_excel_onerror, this);
	
	
	if(fileType == "EXCEL")
	{
		this.fv_exportObject.set_exporttype(nexacro.ExportTypes.EXCEL2007); // Excel 2007
	}
	else if(fileType == "HANCELL")
	{
		this.fv_exportObject.set_exporttype(nexacro.ExportTypes.HANCELL2014); // HANCELL2014
	}
	else if(fileType == "CSV")
	{
		this.fv_exportObject.set_exporttype(nexacro.ExportTypes.CSV); // CSV
	}
	else if(this.gfn_isNull(fileType))
	{
		var sAppId = nexacro.getApplication().id.toUpperCase();
		this.fv_exportObject.set_exporttype(nexacro.ExportTypes.EXCEL2007); // Excel 2007
	}
	else
	{
		this.alert("잘못된 파일타입 지정입니다.");
	}
	trace("this.excel_url = " + this.excel_url);
	this.fv_exportObject.set_exporturl(this.excel_url);
	
	
	var comp = this.nfn_getComponent(this, grdName, Grid);
	if(comp==null){
		alert("btn_xlUp_그리드id 확인!!!");
		return;
	}

//	comp.set_cssclass("grd_report");
	if(sheetNames.length > 1) 
	{
		this.fv_exportObject.addExportItem(nexacro.ExportItemTypes.GRID, comp, sheetNames[i] +"!A1");
		var objExportItem = this.fv_exportObject.getExportItem( nexacro.ExportItemTypes.GRID, i );
//			if(objExportItem) objExportItem.set_acceptstyle("cellline");	
	}
	else 
	{
		this.fv_exportObject.addExportItem(nexacro.ExportItemTypes.GRID, comp, strSht +"!A1");
		var objExportItem = this.fv_exportObject.getExportItem( nexacro.ExportItemTypes.GRID, 0 );
//			if(objExportItem) objExportItem.set_acceptstyle("cellline");	
	}
	if(this.parent.id == "form" && !this.gfn_isNull(this.parent.components[2].text)) //메인폼 일때만 디폴트처리
	{
		// 업무명 Path에서 현재 화면명 가져옴
		var formPath = this.parent.components[2].text;
		var formNameArr = new Array();
			formNameArr = formPath.split(">");
		var arrIdx = formNameArr.length -1;
		var formTitle = this.gfn_lTrim(formNameArr[arrIdx]);
		
		//디폴트 파일명 세팅
		if(this.gfn_isNull(fileName))
		{
			fileName = formTitle;
		}
	}
	
	this.fv_exportObject.set_exportfilename(fileName);
	
	if(this.gfn_isNull(shtStyle))
	{
		shtStyle = false;
	}
	//스타일처리제거
	//this.fv_exportObject.set_exportstyle(shtStyle);
	
	// waitCursor처리
	nexacro.getEnvironment().set_usewaitcursor(true);
	this.setWaitCursor(true, true);
	
	// 익스포트
	var result = this.fv_exportObject.exportData();
//	comp.set_cssclass("");
	
	return result;
}
// 2015.11.18 대용량 데이터 엑셀 처리.
pForm.gfn_export_bigdata_excel = function(svcId, controller, inDatasets, args, str, strSht, fileName, fileType)
{
	this.excel_url = nexacro.getEnvironment().services["svcurl"].url + "/XExportImportServlet";
	
	if( this.gfn_isNull(strSht) ) strSht = "Sheet";	
	if( this.gfn_isNull(args) ) args = "";
	
	//ExcelExportObject 초기화
	if( this.fv_exportObject && this.fv_exportObject instanceof ExcelExportObject)
	{
		this.fv_exportObject.destroy();
		this.fv_exportObject = null;
	}
	
	var arrGridNames = str.split(":");
	var sheetNames = strSht.split(":");
	
	this.fv_exportObject = new ExcelExportObject("export_"+this.name, this);
	this.fv_exportObject.set_exporturl(this.excel_url);
	//this.fv_exportObject.addEventHandler("onexport", this.gfn_export_excel_onexport, this);	
	//this.fv_exportObject.addEventHandler("onprogress", this.gfn_export_excel_onprogress, this);
	this.fv_exportObject.addEventHandler("onsuccess", this.gfn_export_excel_onsuccess, this);
	this.fv_exportObject.addEventHandler("onerror", this.gfn_export_excel_onerror, this);
	
	if(fileType == "EXCEL")
	{
		this.fv_exportObject.set_exporttype(nexacro.ExportTypes.EXCEL2007); // Excel 2007
	}
	else if(fileType == "HANCELL")
	{
		this.fv_exportObject.set_exporttype(nexacro.ExportTypes.HANCELL2014); // HANCELL2014
	}
	else if(fileType == "CSV")
	{
		this.fv_exportObject.set_exporttype(nexacro.ExportTypes.CSV); // CSV
	}
	else if(this.gfn_isNull(fileType))
	{
		this.fv_exportObject.set_exporttype(nexacro.ExportTypes.EXCEL2007); // Excel 2007
	}
	else
	{
		this.alert("잘못된 파일타입 지정입니다.");
	}
	
	
	var sAppId = nexacro.getApplication().id.toLowerCase();
/*	
	if( application.gv_runMode != "local" ) {
		if( sAppId == "abm" || sAppId == "kmc" || sAppId == "mis" ) {
			controller =  "/"+sAppId + controller;
		}
	}
*/	
	this.fv_exportObject.set_exporturl(controller);
	
	// 익스포트 그리드 추가
	for(var i=0; i < arrGridNames.length; i=i+1)
	{
		var comp = Eco.XComp.getCompByPathName(arrGridNames[i], this);
//		comp.set_cssclass("grd_report");
		
		if(sheetNames.length > 1)
		{
			this.fv_exportObject.addExportItem(nexacro.ExportItemTypes.GRID, comp, sheetNames[i] +"!A1");
			var objExportItem = this.fv_exportObject.getExportItem( nexacro.ExportItemTypes.GRID, i );
			//if(objExportItem) objExportItem.set_acceptstyle("cellline");	
		}
		else
		{
			this.fv_exportObject.addExportItem(nexacro.ExportItemTypes.GRID, comp, strSht +"!A1");
			var objExportItem = this.fv_exportObject.getExportItem( nexacro.ExportItemTypes.GRID, 0 );
			//if(objExportItem) objExportItem.set_acceptstyle("cellline");	
		}
		//comp.set_cssclass("");
	}
	
	if(this.parent.id == "form") //메인폼 일때만 디폴트처리
	{
		// 업무명 Path에서 현재 화면명 가져옴
		var formPath = this.parent.components[2].text;
		var formNameArr = new Array();
			formNameArr = formPath.split(">");
		var arrIdx = formNameArr.length -1;
		var formTitle = this.gfn_lTrim(formNameArr[arrIdx]);
		
		//디폴트 파일명 세팅
		if(this.gfn_isNull(fileName))
		{
			fileName = formTitle;
		}
	}
	
	this.fv_exportObject.set_exportfilename(fileName);
	
	
	this.fv_exportObject.set_commdataformat("XML"); //xml 통신
	
	var dsParam = "__DS_TRANS_INFO__=dsTransInfo gds_userInfo=gds_userInfo gds_pageInfo=gds_pageInfo " + inDatasets;

	////// 트랜잭션 정보 데이터셋 생성 //////////
	var _dsTransInfo = this.gfn_createDataset(this, "dsTransInfo");
    if(_dsTransInfo.getColCount() < 1) {
        _dsTransInfo.addColumn( "strSvcID", "string" );
        _dsTransInfo.addColumn( "strURL", "string" );
        _dsTransInfo.addColumn( "strInDatasets", "string" );
        _dsTransInfo.addColumn( "strOutDatasets", "string" );
    }
    _dsTransInfo.clearData();

	var dsInputName = this.gfn_splitDsName(inDatasets,0);

	for (var i = 0; i < dsInputName.length ; i++ ){
		var row = _dsTransInfo.addRow();
		if (i == 0){										//svc id 와 url은 하나이다.
			_dsTransInfo.setColumn(row,0, svcId);
			_dsTransInfo.setColumn(row,1, controller);
		}
		_dsTransInfo.setColumn(row,2, dsInputName[i]);
	}
	
	
	// waitCursor처리
	nexacro.getEnvironment().set_usewaitcursor(true);
	this.setWaitCursor(true, true);
	// 익스포트
	trace("args-->"+args);
	trace("dsParam-->"+dsParam);
	var result = this.fv_exportObject.exportData(args, dsParam);
	
	return result;
}

//onexport Event
pForm.gfn_export_excel_onexport = function(obj,  e)
{
	this.setWaitCursor(false,true);
	trace("=========== export onexport ============");
	trace("e.errormsg: " + e.errormsg);
}

//onprogress Event
pForm.gfn_export_excel_onprogress = function(obj,e)
{
	trace("=========== export onprogress ============");
	trace("e.recordindex: " + e.recordindex);
}

//onsuccess Event
pForm.gfn_export_excel_onsuccess = function(obj,  e)
{
	nexacro.getEnvironment().set_usewaitcursor(false);
	this.setWaitCursor(false,true);
	trace("=========== export onsuccess ============");
	//trace("e.url: " + e.url);
}

//onerror Event
pForm.gfn_export_excel_onerror = function(obj,  e)
{
	nexacro.getEnvironment().set_usewaitcursor(false);
	this.setWaitCursor(false,true);
	trace("=========== export onerror event start============");
	trace("e.eventid: " + e.eventid);
	trace("e.fromobject: " + e.fromobject);
	trace("e.fromreferenceobject: " + e.fromreferenceobject);
	trace("e.errorcode: " +  e.errorcode);
	trace("e.errormsg: " + e.errormsg);
	//this.gfn_alert("IMCMJC0013", "info", "Export 프로세스");	// 프로세스가 실패하였습니다.
	this.alert("파일다운로드가 실패하였습니다.");
}

//exporttype 속성 설정
pForm.set_exporttype = function() 
{
	if(nexacro.getApplication().v_exporttype == "ExportTypes.EXCEL")
	{
		this.fv_exportObject.set_exporttype(nexacro.ExportTypes.EXCEL);
	}
	else if(nexacro.getApplication().v_exporttype == "ExportTypes.EXCEL97")
	{
		this.fv_exportObject.set_exporttype(nexacro.ExportTypes.EXCEL97);
	}
	else if(nexacro.getApplication().v_exporttype == "ExportTypes.EXCEL2007")
	{
		this.fv_exportObject.set_exporttype(nexacro.ExportTypes.EXCEL2007);
	}
	else if(nexacro.getApplication().v_exporttype == "ExportTypes.CSV")
	{
		this.fv_exportObject.set_exporttype(nexacro.ExportTypes.CSV);
	}
	else
	{
		this.fv_exportObject.set_exporttype("");
	}
}

/**
 * @class  엑셀 import 처리
 * @param  {Number} nRowNum - 
 * @param  {Object} sDsName - 
 * @param  {String} sSuccFunc - 
 * @param  {String} sErrFunc - 
 * @param  {Number} sHead - 
 * @param  {Number} sBody - 
 * @return N/A
 */  
//pForm.gfn_import_excel = function(nRowNum, sDsName, sSuccFunc, sErrFunc, sHead, sBody, strSheetNm, fileType) //헤더처리 제거되어 sHead는 파라미터 자리만 존재하면 됨
pForm.gfn_import_excel = function(sDsName, sSuccFunc, sErrFunc, sHead, sBody, strSheetNm, fileType) //헤더처리 제거되어 sHead는 파라미터 자리만 존재하면 됨
{
	this.excel_url = nexacro.getEnvironment().services["svcurl"].url + "/XExportImportServlet";   //export URL
	//ExcelImportObject 초기화
	if( this.fv_importObject && this.fv_importObject instanceof ExcelImportObject )
	{
		this.fv_importObject.destroy();
		this.fv_importObject = null;
	}
	
    
	/*동일 ID 생성시 destroy 안되는 경우 발생 - unique ID 생성*/
	var sDate = new Date();
	//this.fv_importObject = new nexacro.ExcelImportObject( "import_"+this.name, this );	
	this.fv_importObject = new nexacro.ExcelImportObject( "import_" + this.name +  sDate.getTime(), this );	
	
	if(this.gfn_isNull(fileType) || fileType == "EXCEL")
	{
		this.fv_importObject.set_importtype(nexacro.ImportTypes.EXCEL);
	}
	else if(fileType == "HANCELL")
	{
		this.fv_importObject.set_importtype(nexacro.ImportTypes.HANCELL2014);
	}
	else if(fileType == "CSV")
	{
		this.fv_importObject.set_importtype(nexacro.ImportTypes.CSV);
	}
	else
	{
		this.alert("잘못된 파일타입 지정입니다.");
	}

	this.fv_importObject.addEventHandler("onsuccess", this.gfn_import_excel_onsuccess, this);
	this.fv_importObject.addEventHandler("onerror", this.gfn_import_excel_onerror, this);	
	
	//import 성공시 success 처리 함수
    if (!this.gfn_isNull(sSuccFunc)) this.fv_importObject.usercallbackfunc = sSuccFunc;
        
	//import 실패시 error 처리 함수
    if (!this.gfn_isNull(sErrFunc)) this.fv_importObject.usercallbackerrfunc = sErrFunc;
	trace("this.excel_url = " + this.excel_url);
	this.fv_importObject.set_importurl(this.excel_url);
	
	//헤더 시작 컬럼
	if( this.gfn_isNull(sHead) ) sHead = "A1:Z1";//default
	
	//Body 시작 컬럼
	if( this.gfn_isNull(sBody) ) sBody = "A2";//default
	
	//Sheet 명 지정
	if( this.gfn_isNull(strSheetNm) ) strSheetNm = "Sheet1";//default
		
	/**
	* xeni import 대상 컬럼이 다를 때 처리 방법.
	* 임시데이타셋을 생성하여 import 처리 후 실제 데이타 바인드는 onsuccess 이벤트에서 처리.
	*/
	sDsName = "_import_"+sDsName;
	this.gfn_createDataset(this, sDsName);
	
	/**
		>>파라메타 설명 <<
		this.form_vars.importObj.importData("","[command=getsheetdata;output=outDs;head=Sheet1!A1:N1;body=Sheet1!A2:;]","[dsBoardList=outDs]");

		command=getsheetdata sheet의 데이터를 가져오라는 명령 
		output=outDS xeni에서 사용할 데이터셋 이름(outDS)으로 클라이언트로 넘어올 데이터셋 이름 
		head=Sheet1!A1:N1 head는 Sheet1의 A1부터 N1 까지 사용
		body=Sheet1!A2: body는 Sheet1의 A2부터 끝까지 (끝을 안주면 끝까지 읽음) 
		[dsBoardList=outDs] 
		dsBoardList=outDS 서버에서 outDS 이름으로 넘어온 데이터 셋을 dsBoardList(폼에서 사용하는 데이타셋명)의 데이터셋으로 변환
	*/
	
// 	// waitCursor처리
// 	application.set_usewaitcursor(true);
// 	this.setWaitCursor(true, true);
	
	//import용 waitCursor 생성
	this.fn_createWaitcursor();
	
	//this.fv_importObject.importData("", "[command=getsheetdata;output=output1;head="+strSheetNm+"!"+sHead+";body="+strSheetNm+"!"+sBody+";]", "["+sDsName+"=output1]" ,"");
	//시트명에 상관없이 첫번째 시트 임포트 되도록 시트명입력부분제거,복수행 헤더의 import 처리를 위해 헤더처리부분 삭제
	//this.fv_importObject.importData("", "[command=getsheetdata;output=output1;body=!"+sBody+";]", "["+sDsName+"=output1]" ,"");
	this.fv_importObject.importData("", "[command=getsheetdata;output=output1;body="+strSheetNm+"!"+sBody+";]", "["+sDsName+"=output1]" ,"");

}

//onsuccess Event
pForm.gfn_import_excel_onsuccess = function(obj,  e)
{

// 	application.set_usewaitcursor(false);
//  this.setWaitCursor(false,true);

	//import용 waitCursor 제거
	this.fn_removeWaitcursor();
    
	//xeni 에서는 import 되는 excel 과 데이타셋 형식이 맞지 않으면 결과 dataset이 정상적으로 생성되지 않습니다.
	//이곳에서 dataset 처리 합니다.
	var objReturnDs = obj._getDataset("output1");
	var sName = obj._responseLVal.toString().replace("_import_", "");
	var objDs = this.gfn_createDataset(this, sName);
	objDs.clearData();
	objDs.appendData(objReturnDs, false, false);  
	
	//파일명 가져오기 호출
	var fileName = this.gfn_getFileName(e.url);
	
    //화면 callback 함수 호출
	var sFunc = obj.usercallbackfunc;
	
	if(this.gfn_isNull(sFunc)) return;
	
    var func = Eco.isFunction(this[sFunc]);
	if ( func )
	{
		if (!this.gfn_isNull(fileName)) {
			this[sFunc](fileName);
		}
	}
	else
	{
		trace("함수('"+sFunc+"')가 선언되어 있지 않습니다.");
	}
	
	func = null;
}

//onerror Event
pForm.gfn_import_excel_onerror = function(obj,  e)
{
//  application.set_usewaitcursor(false);
// 	this.setWaitCursor(false,true);

	//import용 waitCursor 제거
	this.fn_removeWaitcursor();
	
    //화면 callback 함수 호출
	var sFunc = obj.usercallbackerrfunc;
	
	if(this.gfn_isNull( sFunc )) return;
	
    var func = Eco.isFunction( this[sFunc] );
	if ( func )
	{
		this[sFunc]();
	}
	else
	{
		trace("함수('"+sFunc+"')가 선언되어 있지 않습니다.");
       this.gfn_alert(e.errormsg);
	}
	
	func = null;
}

/* import된 파일의 파일명 가져오기 */
pForm.gfn_getFileName = function(strFilePath)
{
	var strFileName = "";
	
	strFilePath = this.gfn_toString(strFilePath);
	for (var i = 0; i < strFilePath.length; i++) 
	{
		if (this.gfn_right(strFilePath, i + 1).indexOf("\\") > -1) 
		{
			break;
		}
		if (this.gfn_right(strFilePath, i + 1).indexOf("\/") > -1) 
		{
			break;
		}
		strFileName = this.gfn_right(strFilePath, i + 1);
	}

	return strFileName;
}

/* import용 waitCursor 생성 */
pForm.fn_createWaitcursor = function()
{
	if(!this.gfn_isNull(gv_appTopFrame.form.background01))
	{
		this.fn_removeWaitcursor();
	}
	
	var formName = this.getOwnerFrame().form.name;
	var ownerFrame = this.getOwnerFrame().form;
	var nLeft;
	var nTop;
	
	if(formName == "workFrame")
	{
		nLeft = (nexacro.getApplication().mainframe.width/2) - gv_appLeftFrame.width - 150;
		nTop = (nexacro.getApplication().mainframe.height/2) - gv_appTopFrame.height - gv_appWorkTopFrame.height - 60;
	}
	else
	{
		nLeft = (ownerFrame.width/2) - 150;
		nTop = (ownerFrame.height/2) - 60;
	}
	
	var newStatic01 = new Static(); //topFrame block static생성
	newStatic01.init("background01", 0, 0, null, null,0, 0);
	gv_appTopFrame.form.addChild(newStatic01.name, newStatic01);
	newStatic01.set_background("transparent");
	newStatic01.show();
	
	var newStatic02 = new Static(); //leftFrame block static생성
	newStatic02.init("background02",  0, 0, null, null,0, 0);
	gv_appLeftFrame.form.addChild(newStatic02.name, newStatic02);
	newStatic02.set_background("transparent");
	newStatic02.show();
	
	var newStatic03 = new Static(); //workTopFrame block static생성
	newStatic03.init("background03",  0, 0, null, null,0, 0);
	gv_appWorkTopFrame.form.addChild(newStatic03.name, newStatic03);
	newStatic03.set_background("transparent");
	newStatic03.show();
	
	var newStatic04 = new Static(); //ownerFrame static생성
	newStatic04.init("background04",  0, 0, null, null,0, 0);
	ownerFrame.addChild(newStatic04.name, newStatic04);
	newStatic04.set_background("transparent");
	newStatic04.show();
	
	var newStatic05 = new Static(); //waitcursor static생성
	newStatic05.init("waitcursor",  nLeft, nTop, 270, 230);
	ownerFrame.addChild(newStatic05.name, newStatic05);
	newStatic05.set_background("URL('image::waitimage.gif')");
	newStatic05.show();
	
	var newStatic06 = new Button(); //close 버튼생성
	newStatic06.init("closeCursor", nLeft+247, nTop, 23, 23);
	ownerFrame.addChild(newStatic06.name, newStatic06);
	newStatic06.set_cssclass("btn_pop_close");
//	newStatic06.set_background("URL('image::btn_POP_Close.png')");
	newStatic06.show();
	newStatic06.addEventHandler("onclick", this.closeCursor_onclick, this);
	
	var newStatic07 = new Static(); //메시지 static생성
	newStatic07.init("message", nLeft+15, nTop+20, 277, 30);
	ownerFrame.addChild(newStatic07.name, newStatic07);
	newStatic07.set_text("파일선택창에서 취소를 눌렀을 경우 \n닫기버튼 클릭");
	newStatic07.set_color("#666666ff");
	newStatic07.set_font("bold 9 Dotum");
	newStatic07.set_background("transparent");
	newStatic07.show();
}

/* import용 waitCursor 제거 */
pForm.fn_removeWaitcursor = function()
{
	var formName = this.getOwnerFrame().form.name;
	var ownerFrame = this.getOwnerFrame().form;
	
	var newStatic01;
	newStatic01 = gv_appTopFrame.form.background01;
    gv_appTopFrame.form.removeChild(newStatic01.id); 
	newStatic01.destroy();
	newStatic01 = null;
	
	var newStatic02;
	newStatic02 = gv_appLeftFrame.form.background02;
    gv_appLeftFrame.form.removeChild(newStatic02.id); 
	newStatic02.destroy();
	newStatic02 = null;
	
	var newStatic03;
	newStatic03 = gv_appWorkTopFrame.form.background03;
    gv_appWorkTopFrame.form.removeChild(newStatic03.id); 
	newStatic03.destroy();
	newStatic03 = null;
	
	var newStatic04;
	newStatic04 = ownerFrame.background04;
    ownerFrame.removeChild(newStatic04.id); 
	newStatic04.destroy();
	newStatic04 = null;
	
	var newStatic05;
	newStatic05 = ownerFrame.waitcursor;
	ownerFrame.removeChild(newStatic05.id);
	newStatic05.destroy(); 
	newStatic05 = null;

	var newStatic06;
	newStatic06 = ownerFrame.closeCursor;
    ownerFrame.removeChild(newStatic06.id);
	newStatic06.destroy(); 
	newStatic06 = null;
	
	var newStatic07;
	newStatic07 = ownerFrame.message;
    ownerFrame.removeChild(newStatic07.id);
	newStatic07.destroy(); 
	newStatic07 = null;
}

/* import용 waitCursor 닫기버튼 온클릭 이벤트 */
pForm.closeCursor_onclick = function(obj,  e)
{
	this.fn_removeWaitcursor();
}
