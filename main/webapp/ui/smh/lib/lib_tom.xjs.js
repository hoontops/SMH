//XJS=lib_tom.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 치공구 현황 조회
         * 파일명 		: lib_tom.xjs
         * 작성자 		: sungmin.choe
         * 작성일 		: 2021.02.03
         *
         * 설  명		: 치공구 현황 조회 업무에서 사용되는 공통함수 정의
         *---------------------------------------------------------------------------------------
         * 변경일		변경자			변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.16	박현우			최초작성 (//MES/ifc_doc/ifc_ui/ifc/nexacro17lib/component/extPrototype/comConstants.js)
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /*===============================================================================
        == 기준관리(TOM) 공통함수 목록
        ===============================================================================
        ● tomfn_setCustomQueryCmb               : Custom Query를 이용한 Combo Data Binding
        */

        //사용자 Id
        this.tomfn_getUserId = function()
        {
        	return this.gf_getUserId();
        }
        //사용자명
        this.tomfn_getUserNm = function()
        {
        	return this.gf_getUserNm();
        }
        //사용자 부서Id=부서명=동일함
        this.tomfn_getDeptCd = function()
        {
        	return this.gf_getDeptCd();
        }
        //사용자 부서명
        this.tomfn_getDeptNm = function()
        {
        	return this.gf_getDeptNm();
        }

        //오늘일자 구하기(YYYY-MM-DD형식으로 리턴)
        this.tomfn_getToday = function()
        {
        	return this.tomfn_getCurrentlyDate("YYYYMMDD");
        }

        /*******************************************************************************
         * tomfn_getPeriodData
         * 기능 : 검색조건 구분별 날짜조회 동적생성 함수
         * 최성민
         * Parameter  : strDs, sqlId, strCmbType, pArgs, bAsync
        *******************************************************************************/
        this.tomfn_getPeriodData = function(strDs, periodType, sCallBackFunc)
        {
        	//DataSet 미존재시 동적생성
        	if(this.objects[strDs]==null ){
        		tmpDs = new Dataset();
        		tmpDs.addColumn( "THISDAY_S", "string" );
        		tmpDs.addColumn( "THISDAY_E", "string" );
        		tmpDs.addColumn( "LASTDAY_S", "string" );
        		tmpDs.addColumn( "LASTDAY_E", "string" );
        		tmpDs.addColumn( "THISWEEK_S", "string" );
        		tmpDs.addColumn( "THISWEEK_E", "string" );
        		tmpDs.addColumn( "LASTWEEK_S", "string" );
        		tmpDs.addColumn( "LASTWEEK_E", "string" );
        		tmpDs.addColumn( "THISMONTH_S", "string" );
        		tmpDs.addColumn( "THISMONTH_E", "string" );
        		tmpDs.addColumn( "THISMONTH_Q", "string" );
        		tmpDs.addColumn( "LASTMONTH_S", "string" );
        		tmpDs.addColumn( "LASTMONTH_E", "string" );
        		tmpDs.set_name(strDs);
        		tmpDs.set_id(strDs);
        		this.addChild(strDs,tmpDs);
        	}

        	var strSearchDs = "ds_searchPeriodType";
        	var colNm = "";

        	if(this.objects[strSearchDs]==null ){
        		var tmpDs = new Dataset();
        		tmpDs.addColumn( "SQL_ID", "string" );
        		tmpDs.addColumn( "PERIOD_TYPE", "string" );
        		tmpDs.set_name(strSearchDs);
        		tmpDs.set_id(strSearchDs);
        		this.addChild(strSearchDs,tmpDs );
        	}

        	this.objects[strSearchDs].clearData();
        	this.objects[strSearchDs].addRow();
        	this.objects[strSearchDs].setColumn(0,"SQL_ID","selectCustomDate");
        	this.objects[strSearchDs].setColumn(0,"PERIOD_TYPE",periodType);

        	var sSvcID 			= "selectPeriodQueryCmb";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "INPUT="+strSearchDs;
        	var sOutDatasets  	= strDs + "=output";
        	var sArgs 		  	= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, sCallBackFunc, true, false);
        }

        /*******************************************************************************
         * tomfn_setCustomQueryCmb
         * 기능 : Custom Query를 이용한 Combo Data Binding
         * 박현우
         * Parameter  : obj - 콤보 Object
         *				 strCmbInfo - SQLID,콤보유형,수정가부,코드명표현식
         *			     oArgs	- 추가 파라미터
        *******************************************************************************/
        this.tomfn_setCustomQueryCmb = function(obj, strCmbInfo, oArgs, sCallBackFunc, bAsync)
        {
        	if (strCmbInfo.indexOf(",") < 1)
        		return;

        	if(this.nfn_isNull(strCmbInfo)) return;

        	var strDs;
        	var arrCmbInfo = strCmbInfo.split(",");
        	var pBAsync = this.gfn_isNull(bAsync) ? true : bAsync;
        	var sqlId = arrCmbInfo[0];			//SQLID
        	var strCmbType = arrCmbInfo[1];		//ALL:전체, SEL:선택
        	var strEditable = arrCmbInfo[2];	//Y:수정가능, N:수정불가능
        	var strAB = arrCmbInfo[3];			//A:코드명만,B:코드+코드명

        	strDs = "ds_"+sqlId+strCmbType;
        	strDs = strDs.replace(" ","_");

        	var tmpDs ;
        	this.tomfn_setCustomQueryCmbDS(strDs, sqlId, strCmbType, oArgs, sCallBackFunc, pBAsync);

        	obj.set_innerdataset(strDs);
        	obj.set_codecolumn("CODE");
        	obj.set_datacolumn("NAME");

        	if(strAB=="B"){ // 코드+코드명 표시인 경우
        		obj.set_datacolumn("DESCRIPTION");
        	}

        	if(strEditable=="Y"){
        		obj.set_enable(true);
        	}else if(strEditable=="N"){
        		obj.set_enable(false);
        	}
        	obj.set_index(0);
        }


        /*******************************************************************************
         * tomfn_setCustomQueryCmbDS
         * 기능 : Custom Query용 Combo Data Binding 동적생성 함수
         * 박현우
         * Parameter  : strDs, sqlId, strCmbType, pArgs, bAsync
        *******************************************************************************/
        this.tomfn_setCustomQueryCmbDS = function(strDs, sqlId, strCmbType, pArgs, sCallBackFunc, bAsync)
        {
        	//DataSet 미존재시 동적생성
        	if(this.objects[strDs]==null ){
        		tmpDs = new Dataset();
        		tmpDs.set_name(strDs);
        		tmpDs.set_id(strDs);
        		this.addChild(strDs,tmpDs);
        	}

        	var strSearchDs = "ds_searchTomCode";
        	var colNm = "";

        	//다국어 및 기본옵션 선택 관련
        	if(strCmbType=="SEL"){
        		colNm = this.nfn_nvl(this.nfn_getDictionaryname("SELECT"),"선택"); //선택
        	} else if(strCmbType=="ALL"){
        		colNm = this.nfn_nvl(this.nfn_getDictionaryname("YPE_TOTAL"),"전체"); //전체
        	}

        	//데이터 셋으로 보내지 않고 아규먼트로 보낸다.
        	pArgs += this.gfn_setParam("SQL_ID", sqlId);
        	pArgs += this.gfn_setParam("CMB_TYPE", colNm);

        	//콜백함수
        	if(this.gfn_isNull(sCallBackFunc)){
        		sCallBackFunc = "tomfn_callBack";
        	}

        	var sSvcID 			= sqlId;
        	var sController 	= "/tomCommon/selectTomCustomQuery.do";
        	//var sInDatasets   	= "INPUT="+strSearchDs;
        	var sInDatasets   	= "";
        	var sOutDatasets  	= strDs + "=output";
        	var sArgs 		  	= pArgs;
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, sCallBackFunc, true, bAsync);
        }

        /*******************************************************************************
         * tomfn_callBack
         * 기능 : Custom Query Callback Function
         * 박현우
         * Parameter  : trId, errCD, errMsg
        *******************************************************************************/
        this.tomfn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "selectTomCustomQuery")
        		{
        		}
        	}
        };

        /*******************************************************************************
         * gfn_datasetToCommaStrings
         * 기능 : 데이터셋의 특정컬럼의 데이터를 컴마로 구분되는 문자열로 만든다.
         * 박현우
         * Parameter  : strDs, colId
        *******************************************************************************/
        this.gfn_datasetColumnToCommaStrings = function(strDs)
        {
        	var sRtnValue="";
        	var rowSize = strDs.rowcount;

        	for(var i=0; i<rowSize; i++)
        	{
        		if(i<(rowSize-1)){
        			sRtnValue += strDs.getColumn(i,"CODEID") + ",";
        		}else{
        			sRtnValue += strDs.getColumn(i,"CODEID");
        		}
        	}
        	return sRtnValue;
        };

        /*******************************************************************************
         * gfn_allTrim
         * 기능 : 공백 제거
         * 박현우
         * Parameter  : sValue
        *******************************************************************************/
        this.gfn_allTrim = function(sValue)
        {
        	if(sValue==null)		return "";
        	if (new String(sValue).valueOf() == "undefined") return "";

            var objValue = new String(sValue);
            var sRtnValue="";
            var i;

            return nexacro.trim( objValue );
        };


        /**
         * @class 서비스 호출시 argument 정보값({코드=value})에서 문자열로 추출하기(구분자는 '|' 로)
         * @param strArgument - service arguments 문자열
         * @param strExtractMethod - 추출방법('name' : names 추출, 'value' : values 추출)
         * @return 변수명1|변수명2|변수명3 또는 값1|값2|값3
         */
        this.gfn_getExtractArgument = function(strArgument, strExtractMethod)
        {
        	var sRet = "";
        	var arrArguments = strArgument.toString().split("' ");

        	for(var i=0; i < arrArguments.length-1; i=i+1) //아큐먼트 4개 짜리 보내주었는데 5번 돈다. 1을 빼준다.
         	{
         		var sArg = arrArguments[i];
         		if( !this.gfn_isNull(sArg) )
         		{
         			sArg = sArg.replace("'", "").split("=");

        			if(i == (arrArguments.length-2)){//마지막 요소 라면
        				if(strExtractMethod == 'name'){
        					if(i==0){
        						sRet = sRet + this.gfn_replace(sArg[0].toString(),'[object Object]','');
        					}else{
        						sRet = sRet + sArg[0];
        					}
        				}else{
        					sRet = sRet + sArg[1];
        				}
        			}else{
        				if(strExtractMethod == 'name'){
        					if(i==0){
        						sRet = sRet + this.gfn_replace(sArg[0].toString(),'[object Object]','') + "|";
        					}else{
        						sRet = sRet + sArg[0] + "|";
        					}
        				}else{
        					sRet = sRet + sArg[1] + "|";
        				}
        			}
         		}
        	}
        	return sRet;
        }

        this.tomfn_replaceAll = function(str, searchStr, replaceStr)
        {
          return str.split(searchStr).join(replaceStr);
        }

        /**
         * 문자인 날짜시간를 날자형으로 변환하는 함수
         * @param  strDate - 14자리 형식으로된 날짜. yyyyMMddhhmmss의 형식으로 입력
         * @return  object - Date
        */
        this.tomfn_strToDateTime = function (sDate)
        {
        	var date =  new Date( parseInt(sDate.substr(0,4), 10), parseInt(sDate.substr(4,2), 10)-1, parseInt(sDate.substr(6,2), 10), parseInt(sDate.substr(8,2), 10), parseInt(sDate.substr(10,2), 10), parseInt(sDate.substr(12,2), 10) );
            return date;
        }

        /**
         * 입력된 날자에 OffSet 으로 지정된 만큼의 달을 더한다.
         * @param  date 'yyyyMMddhhmmss' 형태로 표현된 날자형문자
         * @param  nOffSet 날짜로부터 증가 감소값. 지정하지 않으면 Default Value = 1 로 적용
         * @return Date형
        */
        this.tomfn_addMonth = function (date, nOffSet)
        {
        	if (typeof (date) !== "string")
        	{
        		date = String(date).valueOf();
        	}
        	if (typeof (nOffSet) !== "number")
        	{
        		nOffSet = nexacro.toNumber(nOffSet).valueOf();
        	}

        	var nYear = parseInt(String(date).substr(0, 4), 10);
        	var nMonth = parseInt(String(date).substr(4, 2), 10);
        	var nDate = parseInt(String(date).substr(6, 2), 10);
        	var nHours = parseInt(String(date).substr(8, 2), 10);
        	var nMinutes = parseInt(String(date).substr(10, 2), 10);
        	var nSeconds = parseInt(String(date).substr(12, 2), 10);

        	var objDate = new Date(parseInt(nYear, 10), parseInt(nMonth, 10) - 1, parseInt(((nDate == null) ? 1 : nDate), 10), parseInt(nHours, 10), parseInt(nMinutes, 10), parseInt(nSeconds, 10));

        	objDate.setMonth(objDate.getMonth() + nexacro.toNumber(nOffSet));

        	return objDate;
        }

        /*******************************************************************************
         * tomfn_getCurrentlyDate
         * 기능 : 오늘 날짜를 가져 온다. (파라메터 포멧으로 스트링 리턴 한다.)
         * 박현우
         * Parameter  : strFormat
        *******************************************************************************/
        this.tomfn_getCurrentlyDate = function(strFormat)
        {
        	var sRet = "";
        	var p_strFormat = strFormat.toUpperCase();
        	var dbTodayStr = this.gfn_svrToday();
        	if(p_strFormat == 'YYYYMMDD'){
        		sRet = dbTodayStr;
        	}else if(p_strFormat == 'YYYY-MM-DD'){
        		sRet = dbTodayStr.substr(0, 4)+'-'+dbTodayStr.substr(4, 2)+'-'+dbTodayStr.substr(6, 2);
        	}else if(p_strFormat == 'YYYYMMDDHHMMSS'){
        		sRet = this.gfn_svrTodayTime();
        	}else if(p_strFormat == 'YYYY-MM-DD HH:MM:SS'){
        		var tempDate = this.gfn_svrTodayTime();
        		sRet = tempDate.substr(0, 4)+'-'+tempDate.substr(4, 2)+'-'+tempDate.substr(6, 2)+' '+
        		       tempDate.substr(8, 2)+':'+tempDate.substr(10, 2)+':'+tempDate.substr(12, 2);
        	}else if(p_strFormat == 'YYYY-MM-DD HH:MM'){
        		var tempDate = this.gfn_svrTodayTime();
        		sRet = tempDate.substr(0, 4)+'-'+tempDate.substr(4, 2)+'-'+tempDate.substr(6, 2)+' '+
        		       tempDate.substr(8, 2)+':'+tempDate.substr(10, 2);
        	}
            return sRet;
        };

        /*******************************************************************************
         * tomfn_getStringToDateFormat
         * 기능 : 스트링 날짜를 날자형 데이터형으로 리턴 한다. (파라메터 포멧으로 날자형으로 만든다.)
         * 박현우
         * Parameter  : strFormat (타입:String), 아래 타입 참조
         * Return : sRet (타입:Date)
        *******************************************************************************/
        this.tomfn_getStringToDateFormat = function(dateStr, strFormat, nDulation)
        {
        	var dRet; //날짜형
        	var p_strFormat = strFormat.toUpperCase();
        	if(p_strFormat == 'YYYYMMDD'){
        		var yyyyMMdd = String(dateStr);
        		var nYear = yyyyMMdd.substr(0,4);
        		var nMonth = yyyyMMdd.substr(4,6);
        		var nDate = yyyyMMdd.substr(6,8);
        		dRet = new Date(parseInt(nYear,10), parseInt(nMonth,10)-1, parseInt(nDate,10));
        	}else if(p_strFormat == 'YYYY-MM-DD'){
        		var yyyyMMdd = String(dateStr);
        		//alert(yyyyMMdd);
        		yyyyMMdd = this.tomfn_replaceAll(yyyyMMdd,'-','');
        		//alert(yyyyMMdd);
        		var nYear = yyyyMMdd.substring(0,4);
        		//alert(nYear);
        		var nMonth = yyyyMMdd.substring(4,6);
        		//alert(nMonth);
        		var nDate = yyyyMMdd.substring(6,8);
        		//alert(nDate);
        		dRet = new Date(parseInt(nYear,10), Number(nMonth,10)-1, Number(nDate,10));
        		//alert(dRet);
        	}else if(p_strFormat == 'YYYYMMDDHHMMSS'){
        		var yyyyMMddhhmmss = String(dateStr);
        		var nYear = yyyyMMddhhmmss.substr(0,4);
        		var nMonth = yyyyMMddhhmmss.substr(4,6);
        		var nDate = yyyyMMddhhmmss.substr(6,8);
        		var nHh = yyyyMMddhhmmss.substr(8,10);
        		var nMm = yyyyMMddhhmmss.substr(10,12);
        		var nSs = yyyyMMddhhmmss.substr(12,14);
        		dRet = new Date(parseInt(nYear, 10), parseInt(nMonth, 10) - 1, parseInt(nDate, 10), parseInt(nHh, 10), parseInt(nMm, 10), parseInt(nSs, 10));
        	}else if(p_strFormat == 'YYYY-MM-DD HH:MM:SS'){
        		var yyyyMMddhhmmss = String(dateStr);
        		yyyyMMddhhmmss = this.tomfn_replaceAll(yyyyMMddhhmmss,'-','');
        		yyyyMMddhhmmss = this.tomfn_replaceAll(yyyyMMddhhmmss,':','');
        		yyyyMMddhhmmss = this.tomfn_replaceAll(yyyyMMddhhmmss,' ','');
        		var nYear = yyyyMMddhhmmss.substr(0,4);
        		var nMonth = yyyyMMddhhmmss.substr(4,6);
        		var nDate = yyyyMMddhhmmss.substr(6,8);
        		var nHh = yyyyMMddhhmmss.substr(8,10);
        		var nMm = yyyyMMddhhmmss.substr(10,12);
        		var nSs = yyyyMMddhhmmss.substr(12,14);
        		dRet = new Date(parseInt(nYear, 10), parseInt(nMonth, 10) - 1, parseInt(nDate, 10), parseInt(nHh, 10), parseInt(nMm, 10), parseInt(nSs, 10));
        	}

        	if(nDulation>0 || nDulation<0){
        		dRet = new Date(Date.parse(dRet) + (nDulation * 1000 * 60 * 60 * 24));
        	}
            return dRet;
        };

        /*******************************************************************************
         * tomfn_getDateToStringFormat
         * 기능 : 날짜형 을 문자형으로 한다. (파라메터 포멧으로 날자형으로 만든다.)
         * 박현우
         * Parameter  : dt : 날짜
         *				strFormat (날짜포멧)
         * Return : sRet (문자형)
        *******************************************************************************/
        this.tomfn_getDateToStringFormat = function(objDate, strFormat)
        {
        	var sRet = '';
        	var strYear = objDate.getYear().toString();
        	var strMonth = (objDate.getMonth() + 1).toString();
        	var strDate = objDate.getDate().toString();
        	var strHours = objDate.getHours().toString();
        	var strMinutes = objDate.getMinutes().toString();
        	var strSeconds = objDate.getSeconds().toString();
        	if (strMonth.length == 1)
        	{
        		strMonth = "0" + strMonth;
        	}
        	if (strDate.length == 1)
        	{
        		strDate = "0" + strDate;
        	}
        	if (strHours.length == 1)
        	{
        		strHours = "0" + strHours;
        	}
        	if (strMinutes.length == 1)
        	{
        		strMinutes = "0" + strMinutes;
        	}
        	if (strSeconds.length == 1)
        	{
        		strSeconds = "0" + strSeconds;
        	}
        	var p_strFormat = strFormat.toUpperCase();
        	if(p_strFormat == 'YYYYMM'){
        		sRet = strYear+strMonth;
        	}else if(p_strFormat == 'YYYY-MM'){
        		sRet = strYear+'-'+strMonth;
        	}else if(p_strFormat == 'YYYYMMDD'){
        		sRet = strYear+strMonth+strDate;
        	}else if(p_strFormat == 'YYYY-MM-DD'){
        		sRet = strYear+'-'+strMonth+'-'+strDate;
        	}else if(p_strFormat == 'YYYYMMDDHHMMSS'){
        		sRet = strYear+strMonth+strDate+strHours+strMinutes+strSeconds;
        	}else if(p_strFormat == 'YYYY-MM-DD HH:MM:SS'){
        		sRet = strYear+'-'+strMonth+'-'+strDate+' '+strHours+':'+strMinutes+':'+strSeconds;
        	}
        	return sRet;
        }

        this.tomfn_mailCssStr = function()
        {
        	var cssStr = "<style>"
        				+"BODY {"
        				+"    background-color: #ffffff;"
        				+"    color: #333333;"
        				+"    font-size: 8pt;"
        				+"    font-weight: normal;"
        				+"    font-family: tahoma,Arial, Helvetica, sans-serif;"
        				+"}"
        				+"TH {"
        				+"    font-size: 8pt;"
        				+"    font-weight:bold;"
        				+"    font-family: tahoma, Verdana, Arial, Helvetica, sans-serif;"
        				+"}"
        				+"TD {"
        				+"    font-size: 8pt;"
        				+"    font-weight: normal;"
        				+"    font-family: tahoma, Verdana, Arial, Helvetica, sans-serif;"
        				+"}"
        				+".listth {"
        				+"    background-color:#E4EDFE;"
        				+"    color:#505050;"
        				+"    font-size: 8pt;"
        				+"    font-weight:normal;"
        				+"    text-align:center;"
        				+"    height:22;"
        				+"    font-family: tahoma, Arial,Verdana, Helvetica, sans-serif;"
        				+"}"
        				+".listtd {"
        				+"    background-color:#FFFFFF;"
        				+"    color: #505050;"
        				+"    font-size: 8pt;"
        				+"    font-weight: normal;"
        				+"    text-align:left;"
        				+"    height:18;"
        				+"    font-family: tahoma, Arial, Helvetica, sans-serif;"
        				+"}"
        				+"</style>";
        	return cssStr;
        }


        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
