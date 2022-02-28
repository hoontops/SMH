var pForm = nexacro.Form.prototype;
/*
 ===============================================================================
 ==  Date 관련 공통 함수
 ===============================================================================
 ● gfn_isDate					: 날짜 형식이 맞는지 확인
 ● gfn_isDate6					: 입력값이 6자리 년월 형태 인지 체크하는 함수
 ● gfn_isDate8					: 입력값이 8자리 날짜 형태 인지 체크하는 함수
 ● gfn_today					: 로컬 PC의 오늘 날짜를 가져온다.				(2015.11.06 DB정보리턴하도록 변경)
 ● gfn_todayTime				: 해당 PC의 오늘 날짜+시간를 가져온다.			(2015.11.06 DB정보리턴하도록 변경)
 ● gfn_getYear					: 해당년도 구하기
 ● gfn_getYearMonth			: 해당년월 구하기
 ● gfn_getFirstDate			: 현재월 1일 만들기.
 ● gfn_getLastDate				: 현재월 마지막일 만들기.
 ● gfn_lastDate				: 해당월의 마지막 날짜를 yyyyMMdd형태로 구하기
 ● gfn_lastDateNum				: 해당월의 마지막 날짜를 숫자로 구하기
 ● gfn_addDate					: 입력된 날자(yyyyMMdd)에 OffSet 으로 지정된 만큼의 날을 더한다.
 ● gfn_addMonth				: 입력된 날자(yyyyMMdd)에 OffSet 으로 지정된 만큼의 달을 더한다.
 ● gfn_addYear					: 입력된 날자(yyyyMMdd)에 OffSet 으로 지정된 만큼의 년을 더한다.
 ● gfn_getWeek					: 입력된 날자(yyyyMMdd)를 입력하면 요일과 요일명을 리턴한다.
 ● gfn_getWeekName				: 입력된 날자(yyyyMMdd)를 입력하면 요일과 요일명을 리턴한다.
 ● gfn_datetime				: Date Type을 String으로 변환
 ● gfn_makeDate				: 숫자로 된 년, 월, 일을 yyyyMMdd형의 문자열 날짜로 만든다.
 ● gfn_diffDate				: 8자리 시작일과 종료일의 날짜 차이를 구한다.
 ● gfn_diffDate2				: 두 일자간의 차이 일수 계산
 ● gfn_diffMonth				: 6자리 두 월간의 차이 월수 계산
 ● gfn_diffMonth2				: 두 월간의 차이 월수 계산 - 시작일, 종료일은 포함하지 않고 계산
 ● gfn_getDay					: 입력된 날자로부터 요일을 구함
 ● gfn_getDayKor				: 입력된 날자로부터 요일을 구함
 ● gfn_isLeapYear				: 윤년여부 확인
 ● gfn_getHolidays				: 양력 nYear에 해당하는 년도의 법정 공휴일(양력) List 모두 구하기
 ● gfn_dateToStr				: 날짜를 문자로 변환.
 ● gfn_getBeforeMonth			: 한달전 날짜 구하는 함수.
 ● gfn_getAfterMonth			: 한달후 날짜 구하는 함수.
 ● gfn_getBeforeYear			: 일년전 날짜 구하는 함수.
 ● gfn_getAfterYear			: 일년후 날짜 구하는 함수.
 ● gfn_isMonth					: 년월 정합성 체크.
 ● gfn_solar2Lunar				: 양력을 음력으로 변환해주는 함수 (처리가능 기간  1841 - 2043년)
 ● gfn_lunar2Solar				: 음력을 양력으로 변환해주는 함수 (처리가능 기간  1841 - 2043년)
 ● gfn_httpToday				: 서버의 현재 날짜정보를 가져옴.
 ● gfn_svrToday				: 서버의 현재 날짜정보를 '년월일' 포맷으로 가져옴.
 ● gfn_svrTodayTime			: 서버의 현재 날짜정보를 '년월일시분초' 포맷으로 가져옴.
 ● gfn_dbToday					: DB의 현재 날짜정보를 '년월일' 포맷으로 가져옴.
 ● gfn_dbTodayTime				: DB의 현재 날짜정보를 '년월일시분초' 포맷으로 가져옴.
 */


/**
 * @class 날짜 형식이 맞는지 확인
 * @param  sDate : yyyyMMdd형태의 날짜 ( 예 : "20121122" )
 * @return boolean 	날짜형식이 맞는 경우= true
					날짜형식이 맞지 않는 경우= false
					sDate가 입력되지 않은 경우= false
 */  
pForm.gfn_isDate = function (sDate) 
{	
	if( this.gfn_isNull(sDate) )		return false;
	
    if( sDate.length != 8 )
        return false;
    
    if( this.gfn_isNum(sDate) != true )
        return false;
    
	var nMonth  = parseInt(sDate.substring(4,6), 10);
	var nDate  = parseInt(sDate.substring(6,8), 10);
    
    if( nMonth < 1 || nMonth > 12 ) 
        return false;
        
    if( nDate < 1 || nDate > this.gfn_lastDateNum(sDate) )
        return false;
    
    return true;
}

/**
 * @class 입력값이 6자리 년월 형태 인지 체크하는 함수
 * @param  string yyyyMMdd형태의 날짜 ( 예 : "20140412" )
 * @return boolean
 */  
pForm.gfn_isDate6 = function (strValue)
{
	if (this.gfn_length(strValue) != 6) 
	{
		return false;
	}
	else if (!this.gfn_isDate(strValue + "01")) 
	{
		return false;
	}
	return true;
}

/**
 * @class 입력값이 8자리 날짜 형태 인지 체크하는 함수
 * @param  string yyyyMMdd형태의 날짜 ( 예 : "20140412" )
 * @return boolean
 */  
pForm.gfn_isDate8 = function (strValue)
{
	if (this.gfn_length(strValue) != 8) 
	{
		return false;
	}
	else if (!this.gfn_isDate(strValue)) 
	{
		return false;
	}
	return true;
}

/**
 * 로컬 PC의 오늘 날짜를 가져온다.
 * @param  N/A
 * @return string 오늘날짜
*/  
pForm.gfn_today = function ()
{
// 	var strToday = "";
// 	var objDate = new Date();
// 	var strToday = objDate.getFullYear() + "";
// 	strToday += this.gfn_right("0" + (objDate.getMonth() + 1), 2);
// 	strToday += this.gfn_right("0" + objDate.getDate(), 2);
// 
// 	return strToday;

	//var rtnVal = this.gfn_svrToday();
	
	var rtnVal;
	if(nexacro.getApplication().gds_date.rowcount==0){	//jsh 20180710
		rtnVal = this.gfn_dbToday();	
	}else{
		rtnVal = nexacro.getApplication().gds_date.getColumn(0, "TODAY");	//jsh 20180710
	}
	return rtnVal;
}

/**
 * 해당 PC의 오늘 날짜+시간를 가져온다.
 * @param  N/A
 * @return {string] 오늘날짜 + 시간
*/  
pForm.gfn_todayTime = function ()
{
// 	var strToday = "";
// 	var objDate = new Date();
// 	var sToday  = objDate.getFullYear().toString();
// 	sToday += this.gfn_right("0" + (objDate.getMonth() + 1), 2); 
// 	sToday += this.gfn_right("0" + objDate.getDate(), 2);
// 	sToday += this.gfn_right("0" + objDate.getHours(), 2);
// 	sToday += this.gfn_right("0" + objDate.getMinutes(), 2);
// 	sToday += this.gfn_right("0" + objDate.getSeconds(), 2);
// 	
// 	//strToday += objDate.getMilliseconds();
// 	return sToday;

	//var rtnVal = this.gfn_svrTodayTime();
	var rtnVal = this.gfn_dbTodayTime();
	return rtnVal;
}

/**
 * 해당년도 구하기
 * @param  string yyyyMMdd형태의 날짜 ( 예 : "20121122" )
 * @return string yyyy형태의 년도 ( 예 : "2012" )
*/  
pForm.gfn_getYear = function (sDate)
{
	if (this.gfn_isNull(sDate)) 
	{
		sDate = this.gfn_today();
		
	}

	return sDate.substr(0, 4);
}

/**
 * 해당년월 구하기
 * @param  string yyyyMMdd형태의 날짜 ( 예 : "20121122" )
 * @return string yyyyMM형태의 년월 ( 예 : "201211" )
*/  
pForm.gfn_getYearMonth = function (sDate)
{
	if (this.gfn_isNull(sDate)) 
	{
		sDate = this.gfn_today();
	}

	return sDate.substr(0, 6);
}

/**
 * 현재월 1일 만들기.
 * @param  string yyyyMMdd형태의 날짜 ( 예 : "20121122" )
 * @return string 해당날짜를 리턴
*/  
pForm.gfn_getFirstDate = function (strDate) 
{
    var s = "";

    if (strDate == null) {
	    s = this.getToday().substr(0,6) + "01";
    }
    else {
	    var date = new Date( parseInt(strDate.substr(0,4), 10), parseInt(strDate.substr(4,2), 10)-1, 1 );
	    s = (new Date(date)).getFullYear()
	      + (((new Date(date)).getMonth()+1)+ "").padLeft(2, '0')
	      + ((new Date(date)).getDate() + "").padLeft(2, '0');

    }
	return (s);
}

/**
 * 현재월 마지막일 만들기.
 * @param  string yyyyMMdd형태의 날짜 ( 예 : "20121122" )
 * @return string 해당날짜를 리턴
*/  
pForm.gfn_getLastDate = function (sDate)  
{
	var nMonth, nLastDate;

	if( this.gfn_isNull(sDate) ){
		return -1;
	}
	
	nMonth = parseInt(sDate.substr(4,2), 10);
	
	if( nMonth === 1 || nMonth === 3 || nMonth === 5 || nMonth === 7  || nMonth === 8 || nMonth === 10 || nMonth === 12 )
	{
		nLastDate = 31;
	}else if( nMonth == 2 )  
	{
		if( this.gfn_isLeapYear(sDate) ){
			nLastDate = 29;
		}else{
			nLastDate = 28;
		}
	}else {
		nLastDate = 30;
	}
		
	return nLastDate;
}

/**
 * 해당월의 마지막 날짜를 yyyyMMdd형태로 구하기
 * @param  string yyyyMMdd형태의 날짜 ( 예 : "20121122" )
 * @return string yyyyMMdd형태의 마지막 날짜 ( 예 : "20121130" )
*/  
pForm.gfn_lastDate = function (sDate)
{
	if (typeof (sDate) != "string") 
	{
		sDate = String(sDate).valueOf();
	}
	if (this.gfn_isNull(sDate)) 
	{
		return "";
	}

	var nLastDate = this.gfn_lastDateNum(sDate);

	return String(sDate).substr(0, 6) + nLastDate.toString();
}

/**
 * 해당월의 마지막 날짜를 숫자로 구하기
 * @param  string yyyyMMdd형태의 날짜 ( 예 : "20121122" )
 * @return string 마지막 날짜 숫자값 ( 예 : 30 )
*/  
pForm.gfn_lastDateNum = function (sDate)
{
	var nMonth,nLastDate;

	if (typeof (sDate) !== "string") 
	{
		sDate = String(sDate).valueOf();
	}
	if ( this.gfn_isNull(sDate) ) 
	{
		return -1;
	}

	nMonth = parseInt(sDate.substr(4, 2), 10);
	if (nMonth === 1 || nMonth === 3 || nMonth === 5 || nMonth === 7 || nMonth === 8 || nMonth === 10 || nMonth === 12) 
	{
		nLastDate = 31;
	}
	else if (nMonth === 2) 
	{
		if ( this.gfn_isLeapYear(sDate) ) 
		{
			nLastDate = 29;
		}
		else 
		{
			nLastDate = 28;
		}
	}
	else 
	{
		nLastDate = 30;
	}

	return nLastDate;
}

/**
 * 입력된 날자에 OffSet 으로 지정된 만큼의 일을 더한다. - Date Type을 String으로 변환
 * @param  date 'yyyyMMdd' 형태로 표현된 날자
 * @param  nOffSet 날짜로부터 증가 감소값. 지정하지 않으면 Default Value = 1 로 적용
 * @return string Date에 nOffset이 더해진 결과를 'yyyyMMdd'로 표현된 날자.
*/  
pForm.gfn_addDate = function (date, nOffSet)
{
	if (typeof (date) !== "string") 
	{
		date = String(date).valueOf();
	}
	if (typeof (nOffSet) !== "number") 
	{
		nOffSet = nexacro.toNumber(nOffSet).valueOf();
	}

	var nYear = parseInt(date.substr(0, 4), 10);
	var nMonth = parseInt(date.substr(4, 2), 10);
	var nDate = parseInt(date.substr(6, 2), 10);

	var objDate = new Date(parseInt(nYear, 10), parseInt(nMonth, 10) - 1, parseInt(((nDate === null) ? 1 : nDate), 10));

	objDate.setDate(objDate.getDate() + nexacro.toNumber(nOffSet));

	var strYear = objDate.getYear().toString();
	var strMonth = (objDate.getMonth() + 1).toString();
	var strDate = objDate.getDate().toString();

	if (strMonth.length === 1) 
	{
		strMonth = "0" + strMonth;
	}
	if (strDate.length === 1) 
	{
		strDate = "0" + strDate;
	}

	return strYear + strMonth + strDate;
}

/**
 * 입력된 날자에 OffSet 으로 지정된 만큼의 달을 더한다.
 * @param  date 'yyyyMMdd' 형태로 표현된 날자
 * @param  nOffSet 날짜로부터 증가 감소값. 지정하지 않으면 Default Value = 1 로 적용
 * @return string Date에 nOffset이 더해진 결과를 'yyyyMMdd'로 표현된 날자.
*/  
pForm.gfn_addMonth = function (date, nOffSet)
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

	var objDate = new Date(parseInt(nYear, 10), parseInt(nMonth, 10) - 1, parseInt(((nDate == null) ? 1 : nDate), 10));

	objDate.setMonth(objDate.getMonth() + nexacro.toNumber(nOffSet));

	var strYear = objDate.getYear().toString();
	var strMonth = (objDate.getMonth() + 1).toString();
	var strDate = objDate.getDate().toString();

	if (strMonth.length === 1) 
	{
		strMonth = "0" + strMonth;
	}
	if (strDate.length === 1) 
	{
		strDate = "0" + strDate;
	}

	return strYear + strMonth + strDate;
}

/**
 * 입력된 날자에 OffSet 으로 지정된 만큼의 년을 더한다. - Date Type을 String으로 변환
 * @param  date 'yyyyMMdd' 형태로 표현된 날자
 * @param  nOffSet 날짜로부터 증가 감소값. 지정하지 않으면 Default Value = 1 로 적용
 * @return string 'yyyyMMdd'
*/  
pForm.gfn_addYear = function (date, nOffSet)
{
	if (typeof (date) !== "string") 
	{
		date = String(date).valueOf();
	}
	var nYear = parseInt(date.substr(0, 4), 10);
	var nMonth = parseInt(date.substr(4, 2), 10);
	var nDate = parseInt(date.substr(6, 2), 10);

	var objDate = new Date(parseInt(nYear, 10), parseInt(nMonth, 10) - 1, parseInt( ((nDate == null) ? 1 : nDate), 10) );

	objDate.setFullYear(objDate.getFullYear() + nexacro.toNumber(nOffSet));

	var strYear = objDate.getYear().toString();
	var strMonth = (objDate.getMonth() + 1).toString();
	var strDate = objDate.getDate().toString();

	if (strMonth.length === 1) 
	{
		strMonth = "0" + strMonth;
	}
	if (strDate.length === 1) 
	{
		strDate = "0" + strDate;
	}

	return strYear + strMonth + strDate;
}

/**
 * 입력된 날자로부터 요일을 구함
 * @param  sDate 8자리 형식으로된 날짜. yyyyMMdd의 형식으로 입력
 * @return Integer '0' 일요일 ~ '6' 토요일 대응
*/  
pForm.gfn_getWeek = function (sDate)
{
	var objDate = this.gfn_strToDate(sDate);
	return objDate.getDay();
}

/**
 * 입력된 날자로부터 요일명을 구함
 * @param  sDate 8자리 형식으로된 날짜. yyyyMMdd의 형식으로 입력
 * @return string 요일명
*/  
pForm.gfn_getWeekName = function (sDate)
{
	if (typeof (sDate) !== "string") 
	{
		sDate = String(sDate).valueOf();
	}

	var objDayName = new Array("일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일");
	var objDate = this.gfn_getWeek(sDate);

	return objDayName[objDate];
}

/**
 * Date Type을 String으로 변환
 * @param  nYear 년도
 * @param  nMonth 월
 * @param  nDate 일
 * @return string 'yyyyMMdd'로 표현된 날자.
*/  
pForm.gfn_datetime = function (nYear, nMonth, nDate)
{
	if (nYear.toString().trim().length >= 5) 
	{
		var sDate = new String(nYear);
		var nYear = sDate.substr(0, 4);
		var nMonth = sDate.substr(4, 2);
		var nDate = ((sDate.substr(6, 2) == "") ? 1 : sDate.substr(6, 2));
		var nHours = ((sDate.substr(8, 2) == "") ? 0 : sDate.substr(8, 2));
		var nMinutes = ((sDate.substr(10, 2) == "") ? 0 : sDate.substr(10, 2));
		var nSeconds = ((sDate.substr(12, 2) == "") ? 0 : sDate.substr(12, 2));

		var objDate = new Date(parseInt(nYear, 10), parseInt(nMonth, 10) - 1, parseInt(nDate, 10), parseInt(nHours, 10), parseInt(nMinutes, 10), parseInt(nSeconds, 10));
	}
	else 
	{
		var objDate = new Date(parseInt(nYear, 10), parseInt(nMonth, 10) - 1, parseInt(((nDate == null) ? 1 : nDate), 10));
	}

	var strYear = objDate.getYear().toString();
	var strMonth = (objDate.getMonth() + 1).toString();
	var strDate = objDate.getDate().toString();

	if (strMonth.length === 1) 
	{
		strMonth = "0" + strMonth;
	}
	if (strDate.length === 1) 
	{
		strDate = "0" + strDate;
	}

	return strYear + strMonth + strDate;
}

/**
 * 숫자로 된 년, 월, 일을 yyyyMMdd형의 문자열 날짜로 만든다.
 * @param  nYear 년도
 * @param  nMonth 월
 * @param  nDate 일
 * @return string 'yyyyMMdd'로 표현된 날자.
					년, 월, 일의 값이 범위에 맞지 않는 값을 입력하면 그에 적합한 날짜로 변경해준다.
					(예 : nYear = 2012, nMonth = 13, nDate = 32 ==> return = "20130201"
					nYear = 2012, nMonth = 1, nDate = -1 ==> return = "20111230")
*/  
pForm.gfn_makeDate = function (nYear, nMonth, nDate)     
{
	if( this.gfn_isNull(nYear) || this.gfn_isNull(nMonth) || this.gfn_isNull(nDate) ){
		return "";
	}
	
    var objDate = new Date(nYear, nMonth-1, nDate);

	var sYear   = objDate.getFullYear().toString();
	var sMonth  = this.gfn_right("0" + (objDate.getMonth() + 1), 2);
	var sDate   = this.gfn_right("0" + objDate.getDate(), 2);

	return sYear + sMonth + sDate;
}

/**
 * 8자리 시작일과 종료일의 날짜 차이를 구한다
 * @param  objCompStart - 시작일자의 콤포넌트
 * @param  objCompEnd - 종료일자의 콤포넌트
 * @param  sGubun - 리턴 형식 지정 문자열
 * @return  boolean - sGubun이 없으면 월수의 차이를 리턴하고, sGubun이 B이면 true/false로 리턴
*/  
pForm.gfn_diffDate = function (objCompStart, objCompEnd, sGubun)
{
	var sStartDt = new String(objCompStart.value);
	var sEndDt = new String(objCompEnd.value);

	if (this.gfn_isNull(sStartDt) || sStartDt === "null") 
	{
		this.alert("시작일자를 입력하세요.");
		objCompStart.setFocus();
		return false;
	}
	if (this.gfn_isNull(sEndDt) || sEndDt === "null") 
	{
		this.alert("종료일자를 입력하세요.");
		objCompEnd.setFocus();
		return false;
	}

	if (sStartDt.length < 8) 
	{
		this.alert("시작일자의 자릿수가 틀립니다.");
		objCompStart.setFocus();
		return false;
	}
	if (sEndDt.length < 8) 
	{
		this.alert("종료일자의 자릿수가 틀립니다.");
		objCompEnd.setFocus();
		return false;
	}

	var vFromDate = new Date(parseInt(sEndDt.substr(0, 4), 10), parseInt(sEndDt.substr(4, 2) - 1, 10), parseInt(sEndDt.substr(6, 2), 10));
	var vToDate = new Date(parseInt(sStartDt.substr(0, 4), 10), parseInt(sStartDt.substr(4, 2) - 1, 10), parseInt(sStartDt.substr(6, 2), 10));
	var nDiffDate = parseInt( ( (vFromDate - vToDate) / (1000 * 60 * 60 * 24) ), 10);
	// 음수면 메세지.
	if (nDiffDate < 0) 
	{
		this.alert("종료일자가 시작날짜보다 커야합니다.");
		objCompEnd.setFocus();
		return false;
	}

	if (sGubun && sGubun === "B") 
	{
		if (nDiffDate >= 0) 
		{
			return true;
		}
		else 
		{
			return false;
		}
	}else 
	{
		return nDiffDate;
	}
}

/**
 * 두 일자간의 차이 일수 계산
 * @param  sStartDate - yyyyMMdd형태의 From 일자 ( 예 : "20121122" )
 * @param  sEndDate - yyyyMMdd형태의 To 일자 ( 예 : "20121202" )
 * @return  string - 숫자 형태의 차이일수  ( 예 : 10 ) 
					단, sEndDate < sStartDate이면 음수가 return된다. 
*/  
pForm.gfn_diffDate2 = function (sStartDate, sEndDate)    
{
	if( this.gfn_isNull(sStartDate) || this.gfn_isNull(sEndDate) )		return NaN;
	
    var vFromDate = new Date(parseInt(sEndDate.substring(0,4),  10), parseInt(sEndDate.substring(4,6)-1,  10), parseInt(sEndDate.substring(6,8), 10));
    var vToDate = new Date(parseInt(sStartDate.substring(0,4),  10), parseInt(sStartDate.substring(4,6)-1,  10), parseInt(sStartDate.substring(6,8), 10));
    
    return parseInt( ((vFromDate - vToDate)/(1000*60*60*24)), 10);
}

/**
 * 6자리 두 월간의 차이 월수 계산
 * @param  objCompStart - 시작일자의 콤포넌트
 * @param  objCompEnd - 종료일자의 콤포넌트
 * @param  sGubun - 리턴 형식 지정 문자열
 * @return  boolean - sGubun이 없으면 월수의 차이를 리턴하고, sGubun이 B이면 true/false로 리턴
*/  
pForm.gfn_diffMonth = function (objCompStart, objCompEnd, sGubun)
{
	var sStartDt = objCompStart.value;
	var sEndDt = objCompEnd.value;

	if (this.gfn_isNull(sStartDt)) 
	{
		this.alert("시작년월을 입력하세요.");
		objCompStart.setFocus();
		return false;
	}
	if (this.gfn_isNull(sEndDt)) 
	{
		this.alert("종료년월을 입력하세요.");
		objCompEnd.setFocus();
		return false;
	}

	if (sStartDt.length < 6) 
	{
		this.alert("시작년월의 자릿수가 틀립니다.");
		objCompStart.setFocus();
		return false;
	}
	if (sEndDt.length < 6) 
	{
		this.alert("종료날짜의 자릿수가 틀립니다.");
		objCompEnd.setFocus();
		return false;
	}

	var nStartMon = parseInt(sStartDt.substr(0, 4), 10) * 12 + parseInt(sStartDt.substr(4, 2), 10);
	var nEndMon = parseInt(sEndDt.substr(0, 4), 10) * 12 + parseInt(sEndDt.substr(4, 2), 10);
	var nDiffMon = nEndMon - nStartMon;
	// 음수면 메세지.
	if (nDiffMon < 0) 
	{
		this.alert("종료년월이 시작년월보다 커야합니다.");
		objCompEnd.setFocus();
		return false;
	}

	if (sGubun && sGubun === "B") 
	{
		if (nDiffMon >= 0) 
		{
			return true;
		}else 
		{
			return false;
		}
	}else 
	{
		return nDiffMon;
	}
}

/**
 * 두 월간의 차이 월수 계산 - 시작일, 종료일은 포함하지 않고 계산
 * @param  sStartDate - yyyyMMdd형태의 From 일자 ( 예 : "20121122" )
 * @param  sEndDate - yyyyMMdd형태의 To 일자 ( 예 : "20121202" )
 * @return  string - 숫자 형태의 차이일수  ( 예 : 10 ) 
*/  
pForm.gfn_diffMonth2 = function (sStartDate, sEndDate)    
{
	var nStartMon, nEndMon;
	
	if( this.gfn_isNull(sStartDate) || this.gfn_isNull(sEndDate) )	return NaN;
	
	nStartMon = parseInt(sStartDate.substr(0,4), 10)*12 + parseInt(sStartDate.substr(4,2), 10);
	nEndMon = parseInt(sEndDate.substr(0,4), 10)*12 + parseInt(sEndDate.substr(4,2), 10);
	
	return (nEndMon - nStartMon);
}

/**
 * 입력된 날자로부터 요일을 구함
 * @param  strDate - 'yyyyMMdd' 형태로 표현된 날짜
 * @return  Integer  0-일요일 ~ 6-토요일
*/  
pForm.gfn_getDay = function (strDate)  
{
    var date = new Date();
    date.setYear(strDate.substr(0, 4));
    date.setMonth(strDate.substr(4, 2) - 1);
    date.setDate(strDate.substr(6, 2));

    return date.getDay();
}

/**
 * 입력된 날자로부터 요일을 구함
 * @param  strDate - 'yyyyMMdd' 형태로 표현된 날짜 문자열
 * @return  string  일, 월, 화, 수, 목, 금, 토
*/  
pForm.gfn_getDayKor = function (strDate)  
{    
	var week = new Array("일", "월", "화", "수", "목", "금", "토");		
	
	var weekDay = week[this.gfn_getDay(strDate)];	
	
	return weekDay;
}

/**
 * 문자인 날짜를 요일로 변환하는 함수
 * @param  strDate - 8자리 형식으로된 날짜. yyyyMMdd의 형식으로 입력
 * @return  object - Date
*/  
pForm.gfn_strToDate = function (sDate)
{
	var date =  new Date( parseInt(sDate.substr(0,4), 10), parseInt(sDate.substr(4,2), 10)-1, parseInt(sDate.substr(6,2), 10) );
    return date;
}


/**
 * 윤년여부 확인
 * @param  sDate - yyyyMMdd형태의 날짜 ( 예 : "20121122" )
 * @return  boolean
*/  
pForm.gfn_isLeapYear = function (sDate)
{
	var ret;
	var nY;

	if (this.gfn_isNull(sDate)) 
	{
		return false;
	}
	
	if (typeof (sDate) !== "string") 
	{
		sDate = String(sDate).valueOf();
	}


	nY = parseInt(sDate.substring(0, 4), 10);

	if ((nY % 4) === 0) 
	{
		if ((nY % 100) !== 0 || (nY % 400) === 0) 
		{
			ret = true;
		}else 
		{
			ret = false;
		}
	}else 
	{
		ret = false;
	}

	return ret;
}

/**
 * 양력 nYear에 해당하는 년도의 법정 공휴일(양력) List 모두 구하기
 * @param  nYear - 공휴일 List Array ==> 각 Array[i]="yyyyMMdd공휴일명" 으로 return
 * @return  object - Array
*/  
pForm.gfn_getHolidays = function (nYear)
{
	var nYear;
	var aHoliday = new Array();

	if (this.gfn_isNull(nYear)) 
	{
		return aHoliday;
	}

	// ///// 음력 체크
	// 구정
	aHoliday[0] = this.gfn_lunar2Solar("0" + (nYear - 1) + "1230") + "설날";
	aHoliday[1] = this.gfn_addDate(aHoliday[0], 1) + "설날";
	aHoliday[2] = this.gfn_addDate(aHoliday[1], 1) + "설날";
	// 석가탄신일
	aHoliday[3] = this.gfn_lunar2Solar("0" + nYear + "0408") + "석가탄신일";
	// 추석
	aHoliday[4] = this.gfn_lunar2Solar("0" + nYear + "0814") + "추석";
	aHoliday[5] = this.gfn_addDate(aHoliday[4], 1) + "추석";
	aHoliday[6] = this.gfn_addDate(aHoliday[5], 1) + "추석";

	// ///// 양력 체크
	aHoliday[7] = nYear + "0101" + "신정";
	aHoliday[8] = nYear + "0301" + "삼일절";
	aHoliday[9] = nYear + "0505" + "어린이날";
	aHoliday[10] = nYear + "0606" + "현충일";
	aHoliday[11] = nYear + "0815" + "광복절";
	aHoliday[12] = nYear + "1225" + "성탄절";

	return aHoliday.sort();
}


/**
 * 날짜를 문자로 변환.
 * @param {Date}  inDate
  * @return String 해당날짜를 리턴.
 */  
pForm.gfn_dateToStr = function (inDate) 
{
  return (new Date(inDate)).getFullYear()
		   + "-" +(((new Date(inDate)).getMonth() + 1) + "").padLeft(2, '0')
		   + "-" +(((new Date(inDate)).getDate()) + "").padLeft(2, '0');
}

 
/**
 * 한달전 날짜 구하는 함수.
 * @param  {String} strDate - yyyyMMdd형태의 양력일자 ( 예 : "20121122" )
 * @return  {String} 문자열 - 해당 날짜를 리턴
*/       
pForm.gfn_getBeforeMonth = function (strDate) 
{
    if (strDate) {
        var date = this.gfn_strToDate(strDate);
        var d = (new Date(date)).addMonth(-1);
    }
    else {
		var d = (new Date).addMonth(-1);
    }

	var s = (new Date(d)).getFullYear()
		   + (((new Date(d)).getMonth() + 1) + "").padLeft(2, '0')
		   + (((new Date(d)).getDate()) + "").padLeft(2, '0');
	return (s);
}
  
/**
 * 한달후 날짜 구하는 함수.
 * @param  {String} strDate - yyyyMMdd형태의 양력일자 ( 예 : "20121122" )
 * @return  {String} 문자열 - 해당날짜를 리턴
*/       
pForm.gfn_getAfterMonth = function (strDate) 
{
    if (strDate) {
        var date = this.gfn_strToDate(strDate);
        var d = (new Date(date)).addMonth(1);
    }
    else {
		var d = (new Date).addMonth(1);
    }

	var s = (new Date(d)).getFullYear()
		   + (((new Date(d)).getMonth() + 1) + "").padLeft(2, '0')
		   + (((new Date(d)).getDate()) + "").padLeft(2, '0');

	return (s);
}

/**
 * 일년전 날짜 구하는 함수.
 * @param  {String} strDate - yyyyMMdd형태의 양력일자 ( 예 : "20121122" )
 * @return  {String} 문자열
*/       
pForm.gfn_getBeforeYear = function (strDate) 
{
    if (strDate) {
        var date = this.gfn_strToDate(strDate);
        var d = (new Date(date)).addYear(-1);
    }
    else {
		var d = (new Date).addYear(-1);
    }

	var s = (new Date(d)).getFullYear() 
		   + (((new Date(d)).getMonth() + 1) + "").padLeft(2, '0')
		   + (((new Date(d)).getDate()) + "").padLeft(2, '0');

   
	return (s);
}

/**
 * 일년후 날짜 구하는 함수.
 * @param  {String} strDate - yyyyMMdd형태의 양력일자 ( 예 : "20121122" )
 * @return  {String} 문자열
*/     
pForm.gfn_getAfterYear = function (strDate) 
{
    if (strDate) {
        var date = this.gfn_strToDate(strDate);
        var d = (new Date(date)).addYear(1);
    }
    else {
		var d = (new Date).addYear(1);
    }

	var s = (new Date(d)).getFullYear()
		   + (((new Date(d)).getMonth() + 1) + "").padLeft(2, '0')
		   + (((new Date(d)).getDate()) + "").padLeft(2, '0');

	return (s);
}

/**
 * 년월 정합성 체크.
 * @param  {String} val - yyyyMM형태의 양력일자 (예 : 201502 )
 * @return  {Boolean} 
*/     
pForm.gfn_isMonth = function (val)
{
    if ( this.gfn_isNum(val) !== true )
    {
        return false;
    }

    if ( (val.trim().length) !== 6 )
    {
        return false;
    }
    
    var nYear 	= nexacro.toNumber( val.toString().substr(0, 4) );
    var nMonth 	= nexacro.toNumber( val.toString().substr(4, 2) );
       
    if( this.gfn_isNull(nYear) || this.gfn_isNull(nMonth) )
    {
		return false;
    }
    
    if( nMonth > 12 || nMonth < 1 )
    {
		return false;
    }
    return true;
}


/**
 * 양력을 음력으로 변환해주는 함수 (처리가능 기간  1841 - 2043년)
 * @param  sDate - yyyyMMdd형태의 양력일자 ( 예 : "20121122" )
 * @return  string - 성공 = Flag(1 Byte) + (yyyyMMdd형태의 음력일자) [ Flag : 평달 = "0", 윤달 = "1" ]
*/  
pForm.gfn_solar2Lunar = function (sDate) 
{
	var sMd = "31,0,31,30,31,30,31,31,30,31,30,31";
	var aMd = new Array();

	var aBaseInfo = new Array();
	var aDt = new Array();		// 매년의 음력일수를 저장할 배열 변수
	var td;						// 음력일을 계산하기 위해 양력일과의 차이를 저장할 변수
	var td1;					// 1840년까지의 날수
	var td2;					// 현재까지의 날수
	var mm;						// 임시변수
	var nLy, nLm, nLd;			// 계산된 음력 년, 월, 일을 저장할 변수
	var sLyoon;					// 현재월이 윤달임을 표시

	if( this.gfn_isNull(sDate) )		return "";
	
	sY = parseInt(sDate.substr(0,4), 10);
	sM = parseInt(sDate.substr(4,2), 10);
	sD = parseInt(sDate.substr(6,2), 10);
	
	if( sY < 1841 || sY > 2043 )	return "";

	aBaseInfo = this.gfn_solarBase();
	aMd = sMd.split(",");
	if( this.gfn_isLeapYear(sDate) === true ){					
		aMd[1] = 29;
	}
	else{
		aMd[1] = 28;	
	}
	
	td1 = 672069; 				 // 672069 = 1840 * 365 + 1840/4 - 1840/100 + 1840/400 + 23  //1840년까지 날수
		
	// 1841년부터 작년까지의 날수
	td2 = (sY - 1) * 365 + parseInt( ((sY - 1)/4), 10) - parseInt( ((sY - 1)/100), 10) + parseInt(((sY - 1)/400), 10);
		
	// 전월까지의 날수를 더함
	for( i = 0 ; i <= sM - 2 ; i++ )
		td2 = td2 + parseInt(aMd[i], 10);

	// 현재일까지의 날수를 더함
	td2 = td2 + sD;

	// 양력현재일과 음력 1840년까지의 날수의 차이
	td = td2 - td1 + 1;
	
	// 1841년부터 음력날수를 계산
	for( i = 0 ; i <= sY - 1841 ; i++ )
	{
		aDt[i] = 0;
		for( j = 0 ; j <= 11 ; j++ )
		{
			switch( parseInt(aBaseInfo[i*12 + j], 10) )
			{
				case 1 : mm = 29;
						 break;
				case 2 : mm = 30;
						 break;				
				case 3 : mm = 58;	// 29 + 29
						 break;				
				case 4 : mm = 59;	// 29 + 30
						 break;				
				case 5 : mm = 59;	// 30 + 29
						 break;				
				case 6 : mm = 60;	// 30 + 30
						 break;				
			}
			aDt[i] = aDt[i] + mm;
		}
	}
		
	// 1840년 이후의 년도를 계산 - 현재까지의 일수에서 위에서 계산된 1841년부터의 매년 음력일수를 빼가면수 년도를 계산
	nLy = 0;
	do
	{
		td = td - aDt[nLy];
		nLy = nLy + 1;
	}
	while(td > aDt[nLy]);
	
	nLm = 0;
	sLyoon = "0";			// 현재월이 윤달임을 표시할 변수 - 기본값 평달
	do
	{
		if( parseInt(aBaseInfo[nLy*12 + nLm], 10) <= 2 )
		{
			mm = parseInt(aBaseInfo[nLy*12 + nLm], 10) + 28;
			if( td > mm )
			{
				td = td - mm;
				nLm = nLm + 1;
			}
			else
				break;
		}
		else
		{
			switch( parseInt(aBaseInfo[nLy*12 + nLm], 10) )
			{
				case 3 :
					m1 = 29;
					m2 = 29;
					break;
				case 4 : 
					m1 = 29;
					m2 = 30;
					break;					
				case 5 : 
					m1 = 30;
					m2 = 29;
					break;					
				case 6 : 
					m1 = 30;
					m2 = 30;
					break;					
			}

			if( td > m1 )
			{
				td = td - m1;
				if( td > m2 )
				{
					td = td - m2;
					nLm = nLm + 1;
				}
				else
				{
					sLyoon = "1";
				}
			}
			else
			{
				break;
			}
		}
	}
	while(1);
	
	nLy = nLy + 1841;
	nLm = nLm + 1;
	nLd = td;

	return sLyoon+nLy+this.gfn_right("0" + nLm, 2)+this.gfn_right("0" + nLd, 2);
}

/**
 * 음력을 양력으로 변환해주는 함수 (처리가능 기간  1841 - 2043년)
 * @param  sDate - Flag(1 Byte)+yyyyMMdd형태의 음력일자 ( 예 : "020121122" ) [Flag : 평달 = "0", 윤달 = "1"]
 * @return  string - yyyyMMdd형태의 양력일자
*/  
pForm.gfn_lunar2Solar = function (sDate) 
{
	var sMd = "31,0,31,30,31,30,31,31,30,31,30,31";
	var aMd = new Array();	
	var aBaseInfo = new Array();	
	
	var nLy, nLm, nLd, sLflag;		// 전해온 음력 인자값을 저장할 년, 월, 일, 윤달여부 임시변수
	var nSy, nSm, nSd;				// 계산된 양력 년, 월, 일을 저장할 변수
	var y1, m1, i, j, y2, y3;	// 임시변수	
	var leap;

	if( this.gfn_isNull(sDate) )			return "";
	if( sDate.length !== 9 )		return "";
	
	sLflag = sDate.substr(0,1);
	nLy = parseInt(sDate.substr(1,4), 10);
	nLm = parseInt(sDate.substr(5,2), 10);
	nLd = parseInt(sDate.substr(7,2), 10);
	if( nLy < 1841 || nLy > 2043 )			return "";
	if( sLflag != "0" && sLflag != "1" )	return "";
		
	aBaseInfo = this.gfn_solarBase();
	aMd = sMd.split(",");
	if( this.gfn_isLeapYear(sDate.substr(1,8)) === true )					
		aMd[1] = 29;
	else
		aMd[1] = 28;	
		
	y1 = nLy - 1841;
	m1 = nLm - 1;
	leap = 0;
	if( parseInt(aBaseInfo[y1*12 + m1]) > 2 )
		leap = IsLeayYear(nLy+"0101");
	
	if( leap == 1 )
	{
		switch( parseInt(aBaseInfo[y1*12 + m1], 10) )
		{
			case 3 : mm = 29;
					 break;
			case 4 : mm = 30;
					 break;			
			case 5 : mm = 29;
					 break;			
			case 6 : mm = 30;
					 break;
		}
	}
	else
	{
		switch( parseInt(aBaseInfo[y1*12 + m1], 10) )
		{
			case 1 : mm = 29;
					 break;			
			case 2 : mm = 30;
					 break;			
			case 3 : mm = 29;
					 break;			
			case 4 : mm = 29;
					 break;			
			case 5 : mm = 30;
					 break;			
			case 6 : mm = 30;
					 break;			
		}
	}

	td = 0;
	for( i = 0 ; i <= y1 - 1 ; i++ )
	{
		for( j = 0 ; j <= 11 ; j++ )
		{
			switch( parseInt(aBaseInfo[i*12 + j], 10) )
			{
				case 1 : td = td + 29;
						 break;
				case 2 : td = td + 30;
						 break;				
				case 3 : td = td + 58;
						 break;				
				case 4 : td = td + 59;
						 break;				
				case 5 : td = td + 59;
						 break;				
				case 6 : td = td + 60;
						 break;				
			}
		}
	}

	for( j = 0 ; j <= m1 - 1 ; j++ )
	{
		switch( parseInt(aBaseInfo[y1*12 + j], 10) )
		{
			case 1 : td = td + 29;
					 break;			
			case 2 : td = td + 30;
					 break;						
			case 3 : td = td + 58;
					 break;						
			case 4 : td = td + 59;
					 break;						
			case 5 : td = td + 59;
					 break;						
			case 6 : td = td + 60;
					 break;						
		}
	}

	if( leap == 1 )
	{
		switch( parseInt(aBaseInfo[y1*12 + m1], 10) )
		{
			case 3 : mm = 29;
					 break;						
			case 4 : mm = 29;
					 break;						
			case 5 : mm = 30;
					 break;						
			case 6 : mm = 30;
					 break;						
		}
	}
	
	td = td + nLd + 22;
	
	if( sLflag == "1" )
	{
		switch( parseInt(aBaseInfo[y1*12 + m1], 10) )
		{
			case 3 : td = td + 29;
					 break;						
			case 4 : td = td + 30;
					 break;						
			case 5 : td = td + 29;
					 break;						
			case 6 : td = td + 30;
					 break;						
		}
	}
	
	y1 = 1840;
	do
	{
		y1 = y1 + 1;
		leap = this.gfn_isLeapYear(y1+"0101");

		if( leap == 1 )
			y2 = 366;
		else
			y2 = 365;

		if( td <= y2 )
			break;
			
		td = td - y2;
	}
	while(1);

	nSy = y1;
	aMd[1] = y2 - 337;
	m1 = 0;
	do
	{
		m1 = m1 + 1;
		if( td <= parseInt(aMd[m1-1], 10) )
			break;
		td = td - parseInt(aMd[m1-1], 10);
	}
	while(1);
	
	nSm = m1;
	nSd = td;
	y3 = nSy;
	td = y3 * 365 + parseInt((y3/4), 10) - parseInt( (y3/100), 10) + parseInt( (y3/400), 10);
	for( i = 0 ; i <= nSm - 1 ; i++ )
		td = td + parseInt(aMd[i], 10);

	td = td + nSd;

	return y3 + this.gfn_right("0" + nSm, 2)+this.gfn_right("0" + nSd, 2);
}
 
/**
 * 각 월별 음력 기준 정보를 처리하는 함수
 * @param  N/A
 * @return  object - Array
*/    
pForm.gfn_solarBase = function ()
{
	var kk;
	
	//1841
	kk = "1,2,4,1,1,2,1,2,1,2,2,1,";
	kk += "2,2,1,2,1,1,2,1,2,1,2,1,";
	kk += "2,2,2,1,2,1,4,1,2,1,2,1,";
	kk += "2,2,1,2,1,2,1,2,1,2,1,2,";
	kk += "1,2,1,2,2,1,2,1,2,1,2,1,";
	kk += "2,1,2,1,5,2,1,2,2,1,2,1,";
	kk += "2,1,1,2,1,2,1,2,2,2,1,2,";
	kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
	kk += "2,1,2,3,2,1,2,1,2,1,2,2,";
	kk += "2,1,2,1,1,2,1,1,2,2,1,2,";
	//1851
	kk += "2,2,1,2,1,1,2,1,2,1,5,2,";
	kk += "2,1,2,2,1,1,2,1,2,1,1,2,";
	kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
	kk += "1,2,1,2,1,2,5,2,1,2,1,2,";
	kk += "1,1,2,1,2,2,1,2,2,1,2,1,";
	kk += "2,1,1,2,1,2,1,2,2,2,1,2,";
	kk += "1,2,1,1,5,2,1,2,1,2,2,2,";
	kk += "1,2,1,1,2,1,1,2,2,1,2,2,";
	kk += "2,1,2,1,1,2,1,1,2,1,2,2,";
	kk += "2,1,6,1,1,2,1,1,2,1,2,2,";
	//1861
	kk += "1,2,2,1,2,1,2,1,2,1,1,2,";
	kk += "2,1,2,1,2,2,1,2,2,3,1,2,";
	kk += "1,2,2,1,2,1,2,2,1,2,1,2,";
	kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
	kk += "2,1,1,2,4,1,2,2,1,2,2,1,";
	kk += "2,1,1,2,1,1,2,2,1,2,2,2,";
	kk += "1,2,1,1,2,1,1,2,1,2,2,2,";
	kk += "1,2,2,3,2,1,1,2,1,2,2,1,";
	kk += "2,2,2,1,1,2,1,1,2,1,2,1,";
	kk += "2,2,2,1,2,1,2,1,1,5,2,1,";
	//1871
	kk += "2,2,1,2,2,1,2,1,2,1,1,2,";
	kk += "1,2,1,2,2,1,2,1,2,2,1,2,";
	kk += "1,1,2,1,2,4,2,1,2,2,1,2,";
	kk += "1,1,2,1,2,1,2,1,2,2,2,1,";
	kk += "2,1,1,2,1,1,2,1,2,2,2,1,";
	kk += "2,2,1,1,5,1,2,1,2,2,1,2,";
	kk += "2,2,1,1,2,1,1,2,1,2,1,2,";
	kk += "2,2,1,2,1,2,1,1,2,1,2,1,";
	kk += "2,2,4,2,1,2,1,1,2,1,2,1,";
	kk += "2,1,2,2,1,2,2,1,2,1,1,2,";
	//1881
	kk += "1,2,1,2,1,2,5,2,2,1,2,1,";
	kk += "1,2,1,2,1,2,1,2,2,1,2,2,";
	kk += "1,1,2,1,1,2,1,2,2,2,1,2,";
	kk += "2,1,1,2,3,2,1,2,2,1,2,2,";
	kk += "2,1,1,2,1,1,2,1,2,1,2,2,";
	kk += "2,1,2,1,2,1,1,2,1,2,1,2,";
	kk += "2,2,1,5,2,1,1,2,1,2,1,2,";
	kk += "2,1,2,2,1,2,1,1,2,1,2,1,";
	kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
	kk += "1,5,2,1,2,2,1,2,1,2,1,2,";
	//1891
	kk += "1,2,1,2,1,2,1,2,2,1,2,2,";
	kk += "1,1,2,1,1,5,2,2,1,2,2,2,";
	kk += "1,1,2,1,1,2,1,2,1,2,2,2,";
	kk += "1,2,1,2,1,1,2,1,2,1,2,2,";
	kk += "2,1,2,1,5,1,2,1,2,1,2,1,";
	kk += "2,2,2,1,2,1,1,2,1,2,1,2,";
	kk += "1,2,2,1,2,1,2,1,2,1,2,1,";
	kk += "2,1,5,2,2,1,2,1,2,1,2,1,";
	kk += "2,1,2,1,2,1,2,2,1,2,1,2,";
	kk += "1,2,1,1,2,1,2,5,2,2,1,2,";
	//1901
	kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
	kk += "2,1,2,1,1,2,1,2,1,2,2,2,";
	kk += "1,2,1,2,3,2,1,1,2,2,1,2,";
	kk += "2,2,1,2,1,1,2,1,1,2,2,1,";
	kk += "2,2,1,2,2,1,1,2,1,2,1,2,";
	kk += "1,2,2,4,1,2,1,2,1,2,1,2,";
	kk += "1,2,1,2,1,2,2,1,2,1,2,1,";
	kk += "2,1,1,2,2,1,2,1,2,2,1,2,";
	kk += "1,5,1,2,1,2,1,2,2,2,1,2,";
	kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
	//1911
	kk += "2,1,2,1,1,5,1,2,2,1,2,2,";
	kk += "2,1,2,1,1,2,1,1,2,2,1,2,";
	kk += "2,2,1,2,1,1,2,1,1,2,1,2,";
	kk += "2,2,1,2,5,1,2,1,2,1,1,2,";
	kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
	kk += "1,2,1,2,1,2,2,1,2,1,2,1,";
	kk += "2,3,2,1,2,2,1,2,2,1,2,1,";
	kk += "2,1,1,2,1,2,1,2,2,2,1,2,";
	kk += "1,2,1,1,2,1,5,2,2,1,2,2,";
	kk += "1,2,1,1,2,1,1,2,2,1,2,2,";
	//1921
	kk += "2,1,2,1,1,2,1,1,2,1,2,2,";
	kk += "2,1,2,2,3,2,1,1,2,1,2,2,";
	kk += "1,2,2,1,2,1,2,1,2,1,1,2,";
	kk += "2,1,2,1,2,2,1,2,1,2,1,1,";
	kk += "2,1,2,5,2,1,2,2,1,2,1,2,";
	kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
	kk += "2,1,1,2,1,2,1,2,2,1,2,2,";
	kk += "1,5,1,2,1,1,2,2,1,2,2,2,";
	kk += "1,2,1,1,2,1,1,2,1,2,2,2,";
	kk += "1,2,2,1,1,5,1,2,1,2,2,1,";
	//1931
	kk += "2,2,2,1,1,2,1,1,2,1,2,1,";
	kk += "2,2,2,1,2,1,2,1,1,2,1,2,";
	kk += "1,2,2,1,6,1,2,1,2,1,1,2,";
	kk += "1,2,1,2,2,1,2,2,1,2,1,2,";
	kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
	kk += "2,1,4,1,2,1,2,1,2,2,2,1,";
	kk += "2,1,1,2,1,1,2,1,2,2,2,1,";
	kk += "2,2,1,1,2,1,4,1,2,2,1,2,";
	kk += "2,2,1,1,2,1,1,2,1,2,1,2,";
	kk += "2,2,1,2,1,2,1,1,2,1,2,1,";
	//1941
	kk += "2,2,1,2,2,4,1,1,2,1,2,1,";
	kk += "2,1,2,2,1,2,2,1,2,1,1,2,";
	kk += "1,2,1,2,1,2,2,1,2,2,1,2,";
	kk += "1,1,2,4,1,2,1,2,2,1,2,2,";
	kk += "1,1,2,1,1,2,1,2,2,2,1,2,";
	kk += "2,1,1,2,1,1,2,1,2,2,1,2,";
	kk += "2,5,1,2,1,1,2,1,2,1,2,2,";
	kk += "2,1,2,1,2,1,1,2,1,2,1,2,";
	kk += "2,2,1,2,1,2,3,2,1,2,1,2,";
	kk += "2,1,2,2,1,2,1,1,2,1,2,1,";
	//1951
	kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
	kk += "1,2,1,2,4,2,1,2,1,2,1,2,";
	kk += "1,2,1,1,2,2,1,2,2,1,2,2,";
	kk += "1,1,2,1,1,2,1,2,2,1,2,2,";
	kk += "2,1,4,1,1,2,1,2,1,2,2,2,";
	kk += "1,2,1,2,1,1,2,1,2,1,2,2,";
	kk += "2,1,2,1,2,1,1,5,2,1,2,2,";
	kk += "1,2,2,1,2,1,1,2,1,2,1,2,";
	kk += "1,2,2,1,2,1,2,1,2,1,2,1,";
	kk += "2,1,2,1,2,5,2,1,2,1,2,1,";
	//1961
	kk += "2,1,2,1,2,1,2,2,1,2,1,2,";
	kk += "1,2,1,1,2,1,2,2,1,2,2,1,";
	kk += "2,1,2,3,2,1,2,1,2,2,2,1,";
	kk += "2,1,2,1,1,2,1,2,1,2,2,2,";
	kk += "1,2,1,2,1,1,2,1,1,2,2,1,";
	kk += "2,2,5,2,1,1,2,1,1,2,2,1,";
	kk += "2,2,1,2,2,1,1,2,1,2,1,2,";
	kk += "1,2,2,1,2,1,5,2,1,2,1,2,";
	kk += "1,2,1,2,1,2,2,1,2,1,2,1,";
	kk += "2,1,1,2,2,1,2,1,2,2,1,2,";
	//1971
	kk += "1,2,1,1,5,2,1,2,2,2,1,2,";
	kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
	kk += "2,1,2,1,1,2,1,1,2,2,2,1,";
	kk += "2,2,1,5,1,2,1,1,2,2,1,2,";
	kk += "2,2,1,2,1,1,2,1,1,2,1,2,";
	kk += "2,2,1,2,1,2,1,5,2,1,1,2,";
	kk += "2,1,2,2,1,2,1,2,1,2,1,1,";
	kk += "2,2,1,2,1,2,2,1,2,1,2,1,";
	kk += "2,1,1,2,1,6,1,2,2,1,2,1,";
	kk += "2,1,1,2,1,2,1,2,2,1,2,2,";
	//1981
	kk += "1,2,1,1,2,1,1,2,2,1,2,2,";
	kk += "2,1,2,3,2,1,1,2,2,1,2,2,";
	kk += "2,1,2,1,1,2,1,1,2,1,2,2,";
	kk += "2,1,2,2,1,1,2,1,1,5,2,2,";
	kk += "1,2,2,1,2,1,2,1,1,2,1,2,";
	kk += "1,2,2,1,2,2,1,2,1,2,1,1,";
	kk += "2,1,2,2,1,5,2,2,1,2,1,2,";
	kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
	kk += "2,1,1,2,1,2,1,2,2,1,2,2,";
	kk += "1,2,1,1,5,1,2,1,2,2,2,2,";
	//1991
	kk += "1,2,1,1,2,1,1,2,1,2,2,2,";
	kk += "1,2,2,1,1,2,1,1,2,1,2,2,";
	kk += "1,2,5,2,1,2,1,1,2,1,2,1,";
	kk += "2,2,2,1,2,1,2,1,1,2,1,2,";
	kk += "1,2,2,1,2,2,1,5,2,1,1,2,";
	kk += "1,2,1,2,2,1,2,1,2,2,1,2,";
	kk += "1,1,2,1,2,1,2,2,1,2,2,1,";
	kk += "2,1,1,2,3,2,2,1,2,2,2,1,";
	kk += "2,1,1,2,1,1,2,1,2,2,2,1,";
	kk += "2,2,1,1,2,1,1,2,1,2,2,1,";
	//2001
	kk += "2,2,2,3,2,1,1,2,1,2,1,2,";
	kk += "2,2,1,2,1,2,1,1,2,1,2,1,";
	kk += "2,2,1,2,2,1,2,1,1,2,1,2,";
	kk += "1,5,2,2,1,2,1,2,2,1,1,2,";
	kk += "1,2,1,2,1,2,2,1,2,2,1,2,";
	kk += "1,1,2,1,2,1,5,2,2,1,2,2,";
	kk += "1,1,2,1,1,2,1,2,2,2,1,2,";
	kk += "2,1,1,2,1,1,2,1,2,2,1,2,";
	kk += "2,2,1,1,5,1,2,1,2,1,2,2,";
	kk += "2,1,2,1,2,1,1,2,1,2,1,2,";
	//2011
	kk += "2,1,2,2,1,2,1,1,2,1,2,1,";
	kk += "2,1,6,2,1,2,1,1,2,1,2,1,";
	kk += "2,1,2,2,1,2,1,2,1,2,1,2,";
	kk += "1,2,1,2,1,2,1,2,5,2,1,2,";
	kk += "1,2,1,1,2,1,2,2,2,1,2,2,";
	kk += "1,1,2,1,1,2,1,2,2,1,2,2,";
	kk += "2,1,1,2,3,2,1,2,1,2,2,2,";
	kk += "1,2,1,2,1,1,2,1,2,1,2,2,";
	kk += "2,1,2,1,2,1,1,2,1,2,1,2,";
	kk += "2,1,2,5,2,1,1,2,1,2,1,2,";
	//2021
	kk += "1,2,2,1,2,1,2,1,2,1,2,1,";
	kk += "2,1,2,1,2,2,1,2,1,2,1,2,";
	kk += "1,5,2,1,2,1,2,2,1,2,1,2,";
	kk += "1,2,1,1,2,1,2,2,1,2,2,1,";
	kk += "2,1,2,1,1,5,2,1,2,2,2,1,";
	kk += "2,1,2,1,1,2,1,2,1,2,2,2,";
	kk += "1,2,1,2,1,1,2,1,1,2,2,2,";
	kk += "1,2,2,1,5,1,2,1,1,2,2,1,";
	kk += "2,2,1,2,2,1,1,2,1,1,2,2,";
	kk += "1,2,1,2,2,1,2,1,2,1,2,1,";
	//2031
	kk += "2,1,5,2,1,2,2,1,2,1,2,1,";
	kk += "2,1,1,2,1,2,2,1,2,2,1,2,";
	kk += "1,2,1,1,2,1,5,2,2,2,1,2,";
	kk += "1,2,1,1,2,1,2,1,2,2,2,1,";
	kk += "2,1,2,1,1,2,1,1,2,2,1,2,";
	kk += "2,2,1,2,1,4,1,1,2,1,2,2,";
	kk += "2,2,1,2,1,1,2,1,1,2,1,2,";
	kk += "2,2,1,2,1,2,1,2,1,1,2,1,";
	kk += "2,2,1,2,5,2,1,2,1,2,1,1,";
	kk += "2,1,2,2,1,2,2,1,2,1,2,1,";
	//2041
	kk += "2,1,1,2,1,2,2,1,2,2,1,2,";
	kk += "1,5,1,2,1,2,1,2,2,2,1,2,";
	kk += "1,2,1,1,2,1,1,2,2,1,2,2";
	
	var arr = new Array();
	arr = kk.split(",");
	
	return arr;
}


/**************************************************************************************************************
 * Function Name: gfn_httpToday
 * Description	: XML HttpRequest 헤더값에서 서버 Date값을 가져옴
 * Arguments	: 없음
 * 사용법      	: this.gfn_httpToday();
 * Return 		: 서버의 Date 정보(nToday)
 **************************************************************************************************************/ 
pForm.gfn_httpToday = function()
{
	var xmlHttp;
	var srvTime;
	var nToday;
	
	xmlHttp = new XMLHttpRequest();
	xmlHttp.open('HEAD', window.location.href.toString(), false);
	xmlHttp.setRequestHeader("Content-Type", "text/html");
	xmlHttp.setRequestHeader("Cache-Control", "no-cache");
	xmlHttp.setRequestHeader("Pragma", "no-cache");
	xmlHttp.setRequestHeader("Expires", "0");
	xmlHttp.send('');
	
	srvTime = xmlHttp.getResponseHeader("Date");
	nToday = new Date(srvTime);
	
	return nToday;
}


 /**************************************************************************************************************
 * Function Name: gfn_svrToday
 * Description	: 서버시간을 가져옴(yyyymmdd)
 * Arguments	: 없음
 * 사용법      	: this.gfn_svrToday();
 * Return 		: 서버시간의 '년월일'포맷 정보(rDate)
 **************************************************************************************************************/ 
pForm.gfn_svrToday = function ()
{
	var nToday = this.gfn_httpToday();
	var rDate = (new Date(nToday)).getFullYear() +(((new Date(nToday)).getMonth() + 1) + "").padLeft(2, '0') + (((new Date(nToday)).getDate()) + "").padLeft(2, '0');
	
	return rDate;
}


 /**************************************************************************************************************
 * Function Name: gfn_svrTodayTime
 * Description	: 서버시간을 가져옴(yyyymmddhhmmss)
 * Arguments	: 없음
 * 사용법      	: this.gfn_svrTodayTime();
 * Return 		: 서버시간의 '년월일시분초'포맷 정보(rTime)
 **************************************************************************************************************/ 
pForm.gfn_svrTodayTime = function ()
{
	var nToday = this.gfn_httpToday();
	var rDate = this.gfn_svrToday();
	var rightField = this.gfn_right(nToday, 28);
	var leftField = this.gfn_left(rightField, 8);
	var objArr = leftField.split(":");
	var rTime = rDate + objArr[0] + objArr[1] + objArr[2];
	
	return rTime;
}


 /**************************************************************************************************************
 * Function Name: gfn_dbToday
 * Description	: DB시간을 가져옴(yyyymmdd)
 * Arguments	: 없음
 * 사용법      	: this.gfn_dbToday();
 * Return 		: DB시간의 '년월일'포맷 정보(today)
 **************************************************************************************************************/ 
pForm.gfn_dbToday = function()
{
    var sSvcID        	= "selectServerDbToday";
	var sController   	= "/cmcm01100/selectServerDbToday.do";
	var sOutDatasets  	= "gds_date=ds_output";
	//this.gfn_transaction(sSvcID, sController, "", sOutDatasets, "", "", false, false);
	this.gfn_transaction(sSvcID, sController, "", sOutDatasets, "", "", "", false, "");
	var today = nexacro.getApplication().gds_date.getColumn(0, "TODAY");
	
	if(today == undefined || today == 'undefined')
	{
		today = this.gfn_svrToday();
	}
	
	return today;
}


 /**************************************************************************************************************
 * Function Name: gfn_dbTodayTime
 * Description	: DB시간을 가져옴(yyyymmddhhmmss)
 * Arguments	: 없음
 * 사용법      	: this.gfn_dbTodayTime();
 * Return 		: DB시간의 '년월일시분초'포맷 정보(today_time)
 **************************************************************************************************************/ 
pForm.gfn_dbTodayTime = function()
{
	var sSvcID        	= "selectServerDbTime";
	var sController   	= "/cmcm01100/selectServerDbTime.do";
	var sOutDatasets  	= "gds_time=ds_output";
	
	this.gfn_transaction(sSvcID, sController, "", sOutDatasets, "", "", false, false);
	var today_time = nexacro.getApplication().gds_time.getColumn(0, "TODAY_TIME");
	
	if(today_time == undefined || today_time == 'undefined')
	{
		today_time = this.gfn_svrTodayTime();
	}
	
	return today_time ;
}
