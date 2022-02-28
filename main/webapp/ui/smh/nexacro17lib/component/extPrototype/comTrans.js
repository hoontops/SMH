var pForm = nexacro.Form.prototype;

 
/*
 ===============================================================================
 == transaction 관련 함수 목록은 여기에 작성한다.
 ===============================================================================
 ● gfn_transaction					: 공통 트랜잭션 함수
 ● gfn_transactionCallBack			:   공통 트랜잭션 공통 Callback 함수
 ● gfn_splitDsName					: inputds ,ouputds  = 분리 처리
 */

/**
* 공통 트랜잭션 함수
* @param {string} serviceID
* @param {string} Transaction 요청 경로
* @param {string} inputdataset 명   = 로 구분
* @param {string} outDatasets 명   = 로 구분
* @param {string} argument 명   Dataset 외의 Transaction을 위한 인자값
*                            a=b의 형태로 입력하고, 빈칸으로 구분
* @param {string} callbackFunc 명
* @param {booolen}{string} ProgressBar 표시여부(default:true)
* @param {booolen} 비동기 여부를 지정합니다.(Default : true)
* @param {bBinary} Binary 형태로 전송할 지 여부를 지정합니다.(Default : false)
* @return N/A
* @example
* @memberOf global
*/  
pForm.gfn_transaction = function (svcID, sController, inDatasets, outDatasets, argument, callbackFunc, showProgress, bAsync, nDataType, bCompress)
{
	if(svcID != "selectCounselNotiYn"){
		ct_lastTransTime = new Date();
	}
	
	if (this.gfn_isNull(argument)) 
	{
		argument = "";
	}
	if (this.gfn_isNull(callbackFunc)) 
	{
		callbackFunc = "fn_callBack";
	}
	if (this.gfn_isNull(bAsync)) 
	{
		bAsync = true;
	}
	if (this.gfn_isNull(nDataType)) 
	{
		nDataType = "0";
	}
	if (this.gfn_isNull(bCompress)) 
	{
		bCompress = false;
	}
	
	if (bAsync == false) 
	{
		// 동기: 커서 사용하지 않음
		showProgress = false;
		var strCallbackFunc = "gfn_transactionSyncCallBack";
	}
	else
	{
		// 비동기: 커서 사용함
		if (this.gfn_isNull(showProgress)) 
		{
			showProgress = true;
		}
		var strCallbackFunc = "gfn_transactionAsyncCallBack";
	}

	var strChk = new String(showProgress);
	if (strChk != 'true' && strChk != 'false') 
	{
		trace("    form id = " + this.name + " svcId = " + svcID + " value = " + strChk);
	}
			
	/* 
	 * nexacro Async 통신 waitcursor 사용 가능 - 사용자 지정(showProgress)시 true/false 처리
	 * nexacro Sync 통신 waitcursor 사용 불가
	*/		
	if( showProgress )
	{
		nexacro.getEnvironment().set_usewaitcursor(true);
		this.setWaitCursor(true, true); //커서 활성화.
	}
	else
	{
		nexacro.getEnvironment().set_usewaitcursor(false);
	    this.setWaitCursor(false, true); //커서 비활성화.
	}
	
    var _dsTransInfo = this.gfn_createDataset(this, "dsTransInfo");
    
    if(_dsTransInfo.getColCount() < 1)
    {
        _dsTransInfo.addColumn( "strSvcID", "string" );
        _dsTransInfo.addColumn( "strURL", "string" );
        _dsTransInfo.addColumn( "strInDatasets", "string" );
        _dsTransInfo.addColumn( "strOutDatasets", "string" );
    }
    
    _dsTransInfo.clearData();

	var dsInputName = this.gfn_splitDsName(inDatasets,0);
	var dsOutputName = this.gfn_splitDsName(outDatasets,1);

	for (var i = 0; i < dsInputName.length ; i++ ){
		var row = _dsTransInfo.addRow();
		if (i == 0){										//svc id 와 url은 하나이다.
			_dsTransInfo.setColumn(row,0, svcID);
			_dsTransInfo.setColumn(row,1, sController);
		}
		_dsTransInfo.setColumn(row,2, dsInputName[i]);
	}

	for (var i = 0; i < dsOutputName.length ; i++ ){
		if(i > 0)
			row = _dsTransInfo.addRow();
		_dsTransInfo.setColumn(row,3, dsOutputName[i]);
	}
	
    inDatasets   = "__DS_TRANS_INFO__=dsTransInfo " + inDatasets;
    	
    outDatasets = this._gfn_searchPageDatasetCheck(outDatasets);  //out 데이터셋 페이징처리 부분 체크
    
	/*서비스 url */
	var strService = nexacro.getEnvironment().services["svcurl"].url;
	
	//업무명 가져오기	
	var sCommand = "IFC";//this.gfn_getTranArgument(argument, "APPLICATION_SERVICE");
	if( !this.gfn_isNull(sCommand) )
	{
		sCommand = sCommand.toUpperCase();
		strService = nexacro.getApplication().gds_url.lookup("RUN_MODE", nexacro.getApplication().gv_runMode, sCommand);
	}
	    	
	if( this.gfn_isNull(strService) )
	{
		this.gfn_alert("서비스 경로가 정의 되지 않았습니다.");
	}
        
    // Service ID Merge
	var strSvcID = svcID + ":" + callbackFunc + ":" + outDatasets;
	var strURL = strService + sController;
	var strInDatasets = inDatasets;
	var strOutDatasets = outDatasets;
	var strArgument = argument;
	var chkExistFrame = nexacro.getApplication().mainframe.VFrameSet;
	if(!(chkExistFrame == undefined || chkExistFrame == 'undefined'))
	{
		var objActiveFrame = nexacro.getApplication().mainframe.VFrameSet.HFrameSet0.VFrameSet0.FrameSet0.getActiveFrame();
		if(objActiveFrame)
		{
			strArgument += this.gfn_setParam("PAGE_NAME",objActiveFrame._menuname);
		}
	}
	
	var m_output = outDatasets;	
	
	//서비스 START Time 저장
	var objDate = new Date();
	try{
		var sTime = nexacro.getApplication().gv_arrServiceTime.toString();
		if(sTime.indexOf(strSvcID) > -1){//저장된 서비스가 존재하면 시작시간 넣어주기
			for(var i=0; i < nexacro.getApplication().gv_arrServiceTime.length; i=i+1)
			{
				if(nexacro.getApplication().gv_arrServiceTime[i][0]===strSvcID)
				{
					nexacro.getApplication().gv_arrServiceTime[i][1] =objDate.valueOf();//시작시간
				}
			}
		
		}else{//저장된 서비스가 없으면 push 처리
			nexacro.getApplication().gv_arrServiceTime.push([strSvcID, objDate.valueOf()]);
		}
		
	}catch(err){}
	
	this.transaction(strSvcID, strURL, strInDatasets, strOutDatasets, strArgument, strCallbackFunc, bAsync, nDataType, bCompress);
}

pForm.gfn_bizExceptionCheck = function(errorMsg, errorCode)
{
  if( errorMsg.substring(0,4) == "SM" || errorMsg.substring(0,2) == "EM") 
  {
	errorCode = -200;
  }
  return errorCode;
}

/**
* 비동기 방식 콜백: 커서 사용함
* 이 함수가 먼저 수행되고 사용자지정Callback함수가 수행된다.
* @param {string} svcID
* @param {string} 에러코드
* @param {string} 에러 메시지
* @return N/A
* @example
* @memberOf global
*/   
pForm.gfn_transactionAsyncCallBack = function (svcID, errorCode, errorMsg)
{
	this.setWaitCursor(false, true); //커서 비활성화.
	
	var arrSvcID = svcID.split(":");
	
	// session 코드 값이 9000보다 큰경우만 처리
	if((errorCode>9000) && (arrSvcID[0]!="selectMyMenu"))
	{
		this.gfn_sessionCheck(errorCode, errorMsg); //세션체크
	}
	
	errorCode = this.gfn_bizExceptionCheck(errorMsg, errorCode);
    
	//서비스 END Time 저장
	var objDate = new Date();
	try{
		for(var i=0; i < nexacro.getApplication().gv_arrServiceTime.length; i=i+1)
		{
			if(nexacro.getApplication().gv_arrServiceTime[i][0]===svcID)
			{
				nexacro.getApplication().gv_arrServiceTime[i][2] = objDate.valueOf();
			}
		}
	}catch(err){}

	// 세션 만료 체크
	if (errorCode == -9) 
	{
		this.gfn_setFrameChange("login");
		return;
	}

	// 페이징 데이터셋 초기화
    this._gfn_postPageDataset(arrSvcID[2]);

	var errArr = new Array();
	if (errorMsg.indexOf("|") > 0)
	{
		var errs = errorMsg.split("|");
		errorMsg = errs[0];
		var errArgs = errs[1].split(",");
		for (var i=0; i<errArgs.length; i++)
		{
			errArr[i] = errArgs[i];
		}
	}
	
	if (arrSvcID.length > 1 && !this.gfn_isNull(arrSvcID[1])) 
	{
		var strExpr =  "this."+arrSvcID[1] + "('" + arrSvcID[0] + "', " + errorCode + ", '" + nexacro.replaceAll(this.gfn_GetMessTxt(errorMsg, errArr),"\n","\\n") + "')";		
		trace( "strExpr : "+strExpr);
		eval(strExpr);
	}
}


/**
* 동기 방식 콜백: 커서 사용하지 않음
* 이 함수가 먼저 수행되고 사용자지정Callback함수가 수행된다.
* @param {string} svcID
* @param {string} 에러코드
* @param {string} 에러 메시지
* @return N/A
* @example
* @memberOf global
*/   
pForm.gfn_transactionSyncCallBack = function (svcID, errorCode, errorMsg)
{
	var arrSvcID = svcID.split(":");
	
	// session 코드 값이 9000보다 큰경우만 처리
	if((errorCode>9000) && (arrSvcID[0]!="selectMyMenu"))
	{
		this.gfn_sessionCheck(errorCode, errorMsg); //세션체크
	}
	
	errorCode = this.gfn_bizExceptionCheck(errorMsg, errorCode);

	//서비스 END Time 저장
	var objDate = new Date();
	try{
		for(var i=0; i < nexacro.getApplication().gv_arrServiceTime.length; i=i+1)
		{
			if(nexacro.getApplication().gv_arrServiceTime[i][0]===svcID)
			{
				nexacro.getApplication().gv_arrServiceTime[i][2] = objDate.valueOf();
			}
		}
	}catch(err){}

	// 세션 만료 체크
	if (errorCode == -9) 
	{
		this.gfn_setFrameChange("login");
		return;
	}
	
	
	// 페이징 데이터셋 초기화
    this._gfn_postPageDataset(arrSvcID[2]);

	var errArr = new Array();
	if (errorMsg.indexOf("|") > 0)
	{
		var errs = errorMsg.split("|");
		errorMsg = errs[0];
		var errArgs = errs[1].split(",");
		for (var i=0; i<errArgs.length; i++)
		{
			errArr[i] = errArgs[i];
		}
	}
	 
	if (arrSvcID.length > 1 && !this.gfn_isNull(arrSvcID[1])) 
	{
		var strExpr =  "this."+arrSvcID[1] + "('" + arrSvcID[0] + "', " + errorCode + ", '" + nexacro.replaceAll(this.gfn_GetMessTxt(errorMsg, errArr),"\n","\\n") + "');";		
		eval(strExpr);
	}
}

pForm.fn_callBack = function (trId, strErrorCode, strErrorMsg)
{    
}
/**
* = 을 배열로 분리 처리
* @param {string} objString (inds=inds)
* @param {number} 0 : 배열 첫번째값 1: 배열 두번째값
* @return {string} return 된 배열값
* @example
* @memberOf global
*/
pForm.gfn_splitDsName = function(objString, type)
{
	var strDsMapping;			//mapping string
	var objArr;					//dataset name array
	var objReturn = new Array();

	strDsMapping = objString.split(" ");

	for (var i = 0; i < strDsMapping.length ; i++ ){
		objArr = strDsMapping[i].split("=");    // objArr = a,cd
		if (type == 0)
			objReturn[i] = objArr[0];
		else
			objReturn[i] = objArr[1];
	}

	return objReturn;
}



/**
 * @class 서비스 호출시 argument 정보값 가져오기
 * @param strArgument - service arguments 문자열
 * @param strArgument - 대상 argument 명
 * @return N/A
 */  
pForm.gfn_getTranArgument = function(strArgument, sCommand)
{
	var sRet = "";
	var arrArguments = strArgument.toString().split("' ");

	for(var i=0; i < arrArguments.length; i=i+1)
 	{
 		var sArg = arrArguments[i];
 		if( !this.gfn_isNull(sArg) )
 		{
 			sArg = sArg.replace("'", "").split("=");
 			
			if( !this.gfn_isNull(sArg[0]) && sArg[0] == sCommand )
			{
				sRet = sArg[1];
			}
 		}
	}
	
	return sRet;
}

