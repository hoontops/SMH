var pForm = nexacro.Form.prototype;
 /*
 ===============================================================================
 == String 관련 함수
 ===============================================================================
 ● gfn_blankStr 		:  undefined을 ""로 리턴한다.
 ● gfn_getLength 		: 입력값 형태에 따라서 길이 또는 범위를 구하는 함수
 ● gfn_getLengthB 		: byte단위로 길이체크
 ● gfn_getFormat		: 문자 포맷 형식 변환 ( 해당 문자는 포맷에서 @ 사용).
 ● gfn_left 			: 문자열의 왼쪽부분을 지정한 길이만큼 Return 한다.
 ● gfn_right 			: 문자열의 오른쪽부분을 지정한 길이만큼 Return 한다.
 ● gfn_length 			: 입력값 형태에 따라서 길이 또는 범위를 구하는 함수
 ● gfn_toString 		: 입력값을 String으로 변경한다.
 ● gfn_replace 		: 입력된 문자열의 일부분을 다른 문자열로 치환하는 함수
 ● gfn_quote 			: 쿼리를 붙이는 함수
 ● gfn_indexOf 		: 전체 문자열 중 특정 문자열이 포함된 위치를 반납
 ● gfn_split 			: 특정 문자열을 기준으로 전체 문자열을 나누어서 하나의 배열(Array)로 만들어 반납하는 함수
 ● gfn_mid 			: 시작글자와 끝글자에 해당하는 글자의 사이에 있는 가운데 글자를 대소문자를 구별하여 찾는다.
 ● gfn_pos  			:  문자열의 위치를 대소문자 구별하여 찾는다
 ● gfn_lTrim 			: 문자열의 좌측 공백을 제거
 ● gfn_rTrim 			: 문자열의 우측 공백을 제거
 ● gfn_trim 			: 문자열의 좌우측 공백을 제거
 ● gfn_lpad 			: 문자열을 지정된 길이만큼 좌측부터 채우는 함수
 ● gfn_rpad 			: 문자열을 지정된 길이만큼 우측부터 채우는 함수
 ● gfn_full_lpad 		: 문자열을 지정된 길이만큼 좌측부터 채우는 함수 Null이나 공백 포함
 ● gfn_full_rpad 		: 문자열을 지정된 길이만큼 우측부터 채우는 함수 Null이나 공백 포함
 */


/**
 * undefined을 ""로 리턴한다.
 * @param {String} oParam : object, 문자열 
 * @return {String} "" 문자열
 */  
pForm.gfn_blankStr = function (oParam)
{
	var strParam = new String(oParam);
	if (strParam.valueOf() == "undefined" || strParam.valueOf() == "null") 
	{
		return "";
	}

	return this.gfn_trim(oParam);
}

/**
 * 입력값 형태에 따라서 길이 또는 범위를 구하는 함수
 * @param {String} strVal: 객체, 문자열, 배열 
 * @return String Type에 따라 구해진 길이 또는 범위
 */  
pForm.gfn_getLength = function ()
{
	var varRtnValue = 0;
	var arrArgument = this.gfn_getLength.arguments;
	if (arrArgument.length < 1) 
	{
		return 0;
	}

	if (!this.gfn_isNull(arrArgument[0])) 
	{
		varRtnValue = arrArgument[0].toString().length;
	}

	return varRtnValue;
}

/**
 * byte단위로 길이체크
 * @param {String} sValue: 문자열
 * @return {Number} byte 단위 문자열 수
 */  
pForm.gfn_getLengthB = function (sValue)
{
	var v_ChkStr = sValue.toString();
	var v_cnt = 0;

	for (var i=0; i<v_ChkStr.length; i++)
	{
		if (v_ChkStr.charCodeAt(i) > 127)
		{
			v_cnt += 2;
		} else {
			v_cnt += 1;
		}
	}

    return v_cnt;
}

/**
 * 문자 포맷 형식 변환 ( 해당 문자는 포맷에서 @ 사용)
 * @param {String} strVal: 문자열, 
 * @param {String} strMask: 문자열 포맷, (@:문자, 포맷스트링("-", ",", ".")등
 * @return String 포맷된 문자 
 */  
pForm.gfn_getFormat = function (strVal, strMask) 
{
    var strRetVal = "";
	var sUnit;
	
	if( this.gfn_isNull( strVal ) )
	{
		return null;
	}
	
    for(var i = 0; i < strMask.length; i++) {
		sUnit = strMask.substr(i, 1);
		
		if( sUnit === "@")
		{
		    strRetVal += strVal.substr(0, 1);
		    strVal = strVal.substr(1);
		}
		else
		{
		    strRetVal += sUnit;
		}
    }
    
    return strRetVal;
}


/**
 * @class 문자열의 왼쪽부분을 지정한 길이만큼 Return
 * @param  sText - 외쪽부분을 얻어올 원본 문자열
 * @param  nSize - 얻어올 크기. [Default Value = 0]
 * @return String - 오른쪽 부분이 얻어진 문자열
 */  
pForm.gfn_left = function (sText, nSize)
{
	var rtnVal = "";
	if (nSize > String(sText).length || nSize == null) 
	{
		rtnVal = sText;
	}
	else 
	{
		rtnVal = String(sText).substring(0, nSize);
	}

	return rtnVal;
}

/**
 * @class 문자열의 오른쪽부분을 지정한 길이만큼 Return
 * @param  sText - 오른쪽부분을 얻어올 원본 문자열
 * @param  nSize - 얻어올 크기. [Default Value = 0]
 * @return String - 오른쪽 부분이 얻어진 문자열
 */  
pForm.gfn_right = function (sText, nSize)
{
	var nStart = String(sText).length;
	var nEnd = Number(nStart) - Number(nSize);
	var rtnVal = String(sText).substring(nStart, nEnd);

	return rtnVal;
}

/**
 * @class 입력값 형태에 따라서 길이 또는 범위를 구하는 함수
 * @param  Val - 객체, 문자열, 배열
 * @return Integer - Type에 따라 구해진 길이 또는 범위
 */  
pForm.gfn_length = function (Val)
{
	return this.gfn_toString(Val).length;
}

/**
 * @class 입력값을 String으로 변경한다.
 * @param  Val - 객체, 문자열, 배열
 * @return Stirng
 */  
pForm.gfn_toString = function (Val)
{
	if (this.gfn_isNull(Val))
	{
		return new String();
	}
	return new String(Val);
}

/**
 * @class 입력된 문자열의 일부분을 다른 문자열로 치환하는 함수
 * @param  Val - 원본 문자열
 * @param  strOld - 원본 문자열에서 찾을 문자열
 * @param  strNew - 새로 바꿀 문자열
 * @return Stirng
 */  
pForm.gfn_replace = function (Val, strOld, strNew)
{
	var varRtnValue = "";
	var arrArgument = this.gfn_replace.arguments;

	if (arrArgument.length < 3) {
		varRtnValue = arrArgument[0];
	} else {
		if (this.gfn_isNull(arrArgument[0])) {
			return varRtnValue;
		}
		varRtnValue = arrArgument[0].toString().replace(arrArgument[1], arrArgument[2]);
	}

	return varRtnValue;
}

/**
 * @class 쿼리를 붙이는 함수
 * @param  sReturn - 원본 문자열
 * @return Stirng
 */  
pForm.gfn_quote = function (sReturn)
{
	return "'" + sReturn + "'";
}

/**
 * @class 전체 문자열 중 특정 문자열이 포함된 위치를 반납
 * @param  Val - 원본 문자열
 * @param  strOld - 검사할 문자열
 * @param  index - 시작순서
 * @return Stirng
 */  
pForm.gfn_indexOf = function (Val, strOld, index)
{
	if (this.gfn_isNull(index)) 
	{
		index = 0;
	}
	return this.gfn_toString(Val).indexOf(strOld, index);
}

/**
 * @class 특정 문자열을 기준으로 전체 문자열을 나누어서 하나의 배열(Array)로 만들어 반납하는 함수
 * @param  strString - 원본 문자열
 * @param  strChar - 나눌 기준이 되는 문자
 * @return Array
 */  
pForm.gfn_split = function( strString, strChar )
{
	var rtnArr = new Array();

	if ( !this.gfn_isNull( strString ) ) {
		if ( !this.gfn_isNull( strChar ) ) {
			rtnArr = strString.toString().split(strChar);
		}else{
			rtnArr[0] = strString;
		}
	}
	
	return rtnArr;
}

/**
 * @class 시작글자와 끝글자에 해당하는 글자의 사이에 있는 가운데 글자를 대소문자를 구별하여 찾는다.
 * @param  {String} sOrg - 원본 문자열( 예 : "aaBBbbccdd" )
 * @param  {String} sStart - 찾고자 하는 시작 문자열(옵션 : Default = "")(예 : "bb" )
 * @param  {String} sEnd - 찾고자 하는 끝 문자열 (옵션 : Default = "")( 예 : "dd" )
 * @param  {Number} nStart - 검색 시작위치 (옵션 : Default=0) ( 예 : 1 )
 * @return {String} 
 */  
pForm.gfn_mid = function (sOrg, sStart, sEnd, nStart)
{
	var pos_start, pos_end, ret_str;

	if (this.gfn_isNull(sOrg)) 
	{
		return "";
	}
	if (this.gfn_isNull(sStart)) 
	{
		sStart = "";
	}
	if (this.gfn_isNull(sEnd)) 
	{
		sEnd = "";
	}
	if (this.gfn_isNull(nStart)) 
	{
		nStart = 0;
	}

	if (sStart == "") 
	{
		pos_start = nStart;
	}
	else 
	{
		pos_start = this.gfn_pos(sOrg, sStart, nStart);
		if (pos_start < 0) 
		{
			return "";
		}
	}
	if (sEnd == "") 
	{
		pos_end = sOrg.length;
	}
	else 
	{
		pos_end = this.gfn_pos(sOrg, sEnd, pos_start + sStart.length, nStart);
		if (pos_end < 0) 
		{
			return "";
		}
	}

	return sOrg.substring(pos_start + sStart.length, pos_end);
}

/**
 * 문자열의 위치를 대소문자 구별하여 찾는다
 * @param {String} sOrg   : 원래 문자열( 예 : "aaBBbbcc" )
 * @param {String} sFind  : 찾고자 하는 문자열( 예 : "bb" )
 * @param {Number} nStart : 검색 시작위치 (옵션 : Default=0) ( 예 : 1 )
 * @return {String} 성공 = 찾고자 하는 문자열의 시작위치 ( 예 : 4 ), 실패 = -1
 */
pForm.gfn_pos = function (sOrg, sFind, nStart)
{
	if (this.gfn_isNull(sOrg) || this.gfn_isNull(sFind)) 
	{
		return -1;
	}
	if (this.gfn_isNull(nStart)) 
	{
		nStart = 0;
	}

	return sOrg.indexOf(sFind, nStart);
}

/**
 * 문자열의 좌측 공백을 제거
 * @param {String} sOrg   : 좌측 공백문자 제거 대상 문자열
 * @param {String} sTrim  : 제거대상 문자열(default:" ")
 * @return {String} 
 */
pForm.gfn_lTrim = function (sOrg, sTrim)
{
	var chk,pos;

	sOrg = new String(sOrg);

	if (this.gfn_isNull(sOrg)) 
	{
		return "";
	}
	if (this.gfn_isNull(sTrim)) 
	{
		sTrim = " ";
	}

	for (pos = 0; pos < sOrg.length; pos += sTrim.length) 
	{
		if (sOrg.substr(pos, sTrim.length) != sTrim) 
		{
			break;
		}
	}

	return sOrg.substr(pos);
}

/**
 * 문자열의 우측 공백을 제거
 * @param {String} sOrg   : 우측 공백문자 제거 대상 문자열
 * @param {String} sTrim  : 제거대상 문자열(default:" ")
 * @return {String} 
 */
pForm.gfn_rTrim = function (sOrg, sTrim)
{
	var pos,nStart;

	sOrg = new String(sOrg);

	if (this.gfn_isNull(sOrg)) 
	{
		return "";
	}
	if (this.gfn_isNull(sTrim)) 
	{
		sTrim = " ";
	}

	for (pos = sOrg.length - sTrim.length; pos >= 0; pos -= sTrim.length) 
	{
		if (sOrg.substr(pos, sTrim.length) != sTrim) 
		{
			break;
		}
	}

	return sOrg.substr(0, pos + sTrim.length);
}

/**
 * 문자열의 좌우측 공백을 제거
 * @param {String} sOrg   : 좌우측 공백문자 제거 대상 문자열
 * @param {String} sTrim  : 제거대상 문자열(default:" ")
 * @return {String} 
 */
pForm.gfn_trim = function (sOrg, sTrim)
{
	var rtnVal = "";
	if (this.gfn_isNull(sTrim)) 
	{
		sTrim = " ";
	}
	rtnVal = this.gfn_rTrim(sOrg, sTrim);
	rtnVal = this.gfn_lTrim(rtnVal, sTrim);

	return rtnVal;
}

/**
 * 문자열을 지정된 길이만큼 좌측부터 채우는 함수
 * @param {String} sOrg        원본 문자열
 * @param {String} sPad        왼쪽에 채울 문자(default=" ")
 * @param {Number} nCnt        출력될 문자열의 길이(default=1)
 * @return {String} 결과값
 * @example gfn_lpad(sOrg, " ", 2)
 */
pForm.gfn_lpad = function (sOrg, sPad, nCnt)
{
	if (typeof (sOrg) !== "string") 
	{
		sOrg = String(sOrg).valueOf();
	}

	var i,sRet = "";

	if ( this.gfn_isNull(sOrg) ) 
	{
		return "";
	}
	if ( this.gfn_isNull(sPad) ) 
	{
		sPad = " ";
	}
	if ( this.gfn_isNull(nCnt) ) 
	{
		nCnt = sOrg.length;
	}

	for (i = 0; i < nCnt - sOrg.length; i++) 
	{
		sRet += sPad;
	}
	sRet += sOrg;

	return sRet;
}

/**
 * 문자열을 지정된 길이만큼 우측부터 채우는 함수
 * @param {String} sOrg        원본 문자열
 * @param {String} sPad        오른쪽에 채울 문자
 * @param {Number} nCnt        출력될 문자열의 길이
 * @return {String} 결과값
 * @example gfn_rpad("2", "0", 2)
 */
pForm.gfn_rpad = function (sOrg, sPad, nCnt)
{
	if (typeof (sOrg) !== "string") 
	{
		sOrg = String(sOrg).valueOf();
	}

	var i,sRet = "";

	if ( this.gfn_isNull(sOrg) ) 
	{
		return "";
	}
	if ( this.gfn_isNull(sPad) ) 
	{
		sPad = " ";
	}
	if ( this.gfn_isNull(nCnt) ) 
	{
		nCnt = sOrg.length;
	}

	sRet += sOrg;
	for (i = 0; i < ( nCnt - sOrg.length ); i++) 
	{
		sRet += sPad;
	}

	return sRet;
}

/**
 * 문자열을 지정된 길이만큼 좌측부터 채우는 함수 Null이나 공백 포함
 * @param {String} sOrg        원본 문자열
 * @param {String} sPad        왼쪽에 채울 문자(default=" ")
 * @param {Number} nCnt        출력될 문자열의 길이(default=1)
 * @return {String} 결과값
 * @example gfn_lpad(sOrg, " ", 2)
 */
pForm.gfn_full_lpad = function (sOrg, sPad, nCnt)
{
	if (typeof (sOrg) != "string") 
	{
		sOrg = String(sOrg).valueOf();
	}

	var i,sRet = "";

	if (this.gfn_isNull(sOrg)) 
	{
		sOrg = "";
	}
	if (this.gfn_isNull(sPad)) 
	{
		sPad = " ";
	}
	if (this.gfn_isNull(nCnt)) 
	{
		nCnt = sOrg.length;
	}

	for (i = 0; i < nCnt - sOrg.length; i++) 
	{
		sRet += sPad;
	}
	sRet += sOrg;

	return sRet;
}

/**
 * 문자열을 지정된 길이만큼 우측부터 채우는 함수 Null이나 공백 포함
 * @param {String} sOrg        원본 문자열
 * @param {String} sPad        오른쪽에 채울 문자
 * @param {Number} nCnt        출력될 문자열의 길이
 * @return {String} 결과값
 * @example gfn_rpad("2", "0", 2)
 */
pForm.gfn_full_rpad = function (sOrg, sPad, nCnt)
{
	if (typeof (sOrg) != "string") 
	{
		sOrg = String(sOrg).valueOf();
	}

	var i,sRet = "";

	if (this.gfn_isNull(sOrg)) 
	{
		sOrg = "";
	}
	if (this.gfn_isNull(sPad)) 
	{
		sPad = " ";
	}
	if (this.gfn_isNull(nCnt)) 
	{
		nCnt = this.gfn_getLengthB(sOrg);
	}

	sRet += sOrg;
	for (i = 0; i < nCnt - this.gfn_getLengthB(sOrg); i++) 
	{
		sRet += sPad;
	}

	return sRet;
}

/**
 * 입력되는 데이터의 종류에 따라 마스킹 처리 후 리턴
 * @param {String} inParam     구분( 주민번호(외국인 등록번호), 운전면허, 여권번호, 계좌번호, 카드 번호, 비밀번호, 전화번호)
 * @param {String} inData      원본데이터
 * @return {String} 결과값
 * @example
 	var juminNm = this.gfn_private_info_mask("JUMIN_NUM", "8404101042113");
	var driverNm = this.gfn_private_info_mask("DRIVER_LICENSE_NUM", "119012345601");
	var passNum = this.gfn_private_info_mask("PASSPORT_NUM", "M12345678");
	var accountNm = this.gfn_private_info_mask("ACOUNT_NUM", "10120123456");
	var cardNm = this.gfn_private_info_mask("CREDIT_CARD_NUM", "111122223333444");
	var password = this.gfn_private_info_mask("PASSWORD", "1");
	var telNm = this.gfn_private_info_mask("TEL_NUM", "1588-1234");
 */
pForm.gfn_private_info_mask = function(inParam, inData)
{
	inParam =  inParam.toUpperCase();
	if( inParam == "JUMIN_NUM" ) // 7001011234567 => 700101-1******
	{
		return inData.substring(0,6) + "-" + inData.substring(6,7) + "******";
	}
	else if( inParam == "DRIVER_LICENSE_NUM" )   // 119012345601 => 11-90-******-01
	{
		return inData.substring(0,2) + "-" +  inData.substring(2,4) + "-******-" + inData.substring(10,12);
		
	}
	else if( inParam == "PASSPORT_NUM" )   // M12345678 => M****5678
	{
		return inData.substring(0,1) + "****" + inData.substring(inData.length-4,inData.length);
		
	}
	else if( inParam == "ACOUNT_NUM" )   // 10120123456 => 10120******
	{
		return inData.substring(0,inData.length-6) + "******";
		
	}
	else if( inParam == "ACCT_NUM" )   // 10120123456 => 10120******
	{
		return inData.substring(0,4) + "********" + inData.substring(inData.length-4,inData.length);		
	}
	else if( inParam == "CREDIT_CARD_NUM" )   // 1111222233334444 => 111-2222-****-4444 || 111122223333444 => 111-2222-****-444
	{
		if( inData.length == 16 )
		{
			//return inData.substring(0,4) + "-" + inData.substring(4,8) + "-****-" + inData.substring(inData.length-4,inData.length);
			return inData.substring(0,4) + "-****-****-" + inData.substring(inData.length-4,inData.length);
		}
		else if( inData.length == 15 )
		{
			//return inData.substring(0,4) + "-" + inData.substring(4,8) + "-****-" + inData.substring(inData.length-3,inData.length);
			return inData.substring(0,4) + "-****-****-" + inData.substring(inData.length-3,inData.length);
		}
		else
		{
		    return inData.substring(0,4) + "-****-****-" + inData.substring(inData.length-4,inData.length);
		}
		
	}
	else if( inParam == "PASSWORD" )   // kics => ****
	{
		var param= "*";
		var conParam ="";
		for(var i=0; i < inData.length; i++ )
		{
			conParam += param;
		}
		return conParam;
	}
	else if( inParam == "TEL_NUM" )   // 010-4393-3234 => 010-****-3234 || 1588-1588 => ****-1588
	{
		var inDataArr = inData.split("-");
		var param= "*";
		var conParam ="";
		if(inDataArr.length == 3)
		{
			for(var i=0; i < inDataArr[1].length; i++ )
			{
				conParam += param;
			}
			return inDataArr[0] + "-" + conParam + "-" + inDataArr[2];
		}
		if(inDataArr.length == 2)
		{
			for(var i=0; i < inDataArr[0].length; i++ )
			{
				conParam += param;
			}
			return conParam + "-" + inDataArr[1];
		}
	}
}
