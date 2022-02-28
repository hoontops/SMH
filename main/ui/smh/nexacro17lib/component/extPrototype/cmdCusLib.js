var pForm = nexacro.Form.prototype;
/*********************************************************************
 * 함 수 명 	: fn_match
 * 함수설명 	: target과 pattern이 일치하면 true / flase
 * 입    력 	: String 문자열
 * 결    과 	: target과 pattern이 일치하면 true / flase
 *********************************************************************/
pForm.fn_match = function(target, pattern) 
{
	if( pattern == "NUMBER")
	{
		 pattern = 0987654321;
	}
	var matchFlag = true;
	 if ((target != null && target.length > 0) && (pattern != null && pattern.length > 0)) 
	 {
		 var matchResult = 0;
		 for (var inx=0; inx < target.length && matchFlag == true; inx++) 
		 {
			matchResult = pattern.indexOf(target.substring(inx, inx+1));
			 if (matchResult < 0) matchFlag = false;
		 }
	 }
    return matchFlag;
}

/*********************************************************************
 * 함 수 명 	: fn_nullCheckFocusForCron
 * 함수설명 	: 배치작업 등록/수정 시 CRON 정보 입력 EDIT의 NULL 체크 및 FOCUS 
 * 입    력 	: EDIT
 * 결    과 	: 해당 되는 값에 FOCUS
 *********************************************************************/
pForm.fn_nullCheckFocusForCron = function(obj)
{
	obj.set_cssclass("essential");
	
	if(this.gfn_isNull(obj.text))
	{
		if( obj.name == "edt_batWkName")
		{
			this.gfn_Message("IMCMM0275","작업 프로그램 명","info");  // 작업 프로그램 명을 입력 해주세요
		}
		if( obj.name == "edt_batchStart")
		{
			this.gfn_Message("IMCMM0275","시작 지연 시간","info");  // 시작 지연 시간을 입력 해주세요
		}
		else if( obj.name == "edt_batchRe")
		{
			this.gfn_Message("IMCMM0275","반복 주기시간","info");  // 반복 주기시간을 입력 해주세요
		}
		else if( obj.name == "edt_cron00")
		{
			this.gfn_Message("IMCMM0275","초","info");  // 초를 입력 해주세요
		}
		else if( obj.name == "edt_cron01")
		{
			this.gfn_Message("IMCMM0275","분","info");  // 분를 입력 해주세요
		}
		else if( obj.name == "edt_cron02")
		{
			this.gfn_Message("IMCMM0275","시","info");  // 시를 입력 해주세요
		}
		else if( obj.name == "edt_cron03")
		{
			this.gfn_Message("IMCMM0275","일","info");  // 일를 입력 해주세요
		}
		else if( obj.name == "edt_cron04")
		{
			this.gfn_Message("IMCMM0275","월","info");  // 월를 입력 해주세요
		}
		else if( obj.name == "edt_cron05")
		{
			this.gfn_Message("IMCMM0275","요일","info");  // 요일을 입력 해주세요
		}
		obj.set_cssclass("essential_error");
		obj.setFocus();
		return false;
	}
	return true;
}

/*********************************************************************
 * 함 수 명 	: fn_cronValidCheckSub
 * 함수설명 	: fn_cronValidCheck 함수(배치작업 등록/수정 시 CRON 정보 입력 EDIT의 기본적인 문법 체크)의 공통함수
 * 입    력 	: EDIT
 * 결    과 	: 해당 되는 값에 FOCUS
 *********************************************************************/
pForm.fn_cronValidCheckSub = function(obj)
{
	this.gfn_Message("IMCMM0275",obj.text,"info");  // 입력하신 값 {0}(은)는 문법 오류 입니다. \n다시 입력해주세요
	obj.set_cssclass("essential_error");
	obj.setFocus();
	return false;

}

/*********************************************************************
 * 함 수 명 	: fn_cronValidCheck
 * 함수설명 	: 배치작업 등록/수정 시 CRON 정보 입력 EDIT의 기본적인 문법 체크
 * 입    력 	: EDIT
 * 결    과 	: 해당 되는 값에 FOCUS
 *********************************************************************/
pForm.fn_cronValidCheck = function(obj)
{
	obj.set_cssclass("essential");
	if(this.fn_match(obj.text , "*"))
	{
		if( obj.text.length > 1 )
		{
			this.fn_cronValidCheckSub(obj);
			return false;
		}
	}
	
	if( obj.name == "edt_cron06")
	{
		var d = new Date();
		if( obj.text.substring(0,4) < Number(d.getYear()) )
		{
			this.fn_cronValidCheckSub(obj);
			return false;
		}
		
		if( obj.text.length < 4 )
		{
			this.fn_cronValidCheckSub(obj);
			return false;
		}
		else
		{
			if(!this.fn_match(obj.text , "1234567890,-/*")) // 숫자만 입력한 경우
			{
				this.fn_cronValidCheckSub(obj);
				return false;
			}
		}
	}
	
	if(this.fn_match(obj.text , "1234567890")) // 숫자만 입력한 경우
	{
		if( obj.text.length > 1) // 길이가 1이상인 경우
		{
			if( obj.text.substring(0,1) == 0 ) // 0으로 시작하면 오류
			{
				this.fn_cronValidCheckSub(obj);
				return false;
			}
		}
	}
	if( obj.name == "edt_cron00" || obj.name == "edt_cron01" || obj.name == "edt_cron02") // 초, 분 , 시간 입력사항 검증
	{
		if(this.fn_match(obj.text , "1234567890")) // 숫자만 입력한 경우
		{
			if( obj.name == "edt_cron00" || obj.name == "edt_cron01" ) // 초, 분은 59보다 크면 안됨
			{
				if( Number(obj.text) > 59 )
				{
					this.fn_cronValidCheckSub(obj);
					return false;
				}
			}
			else if( obj.name == "edt_cron02" ) // 시간은 23보다 크면 안됨
			{
				if( Number(obj.text) > 23 )
				{
					this.fn_cronValidCheckSub(obj);
					return false;
				}
			}
			
		}
		if(!this.fn_match(obj.text , ",-*/1234567890")) // 해당 초,분,시간은 ,-*/1234567890로만 구성되어야 한다.
		{
			this.fn_cronValidCheckSub(obj);
			return false;
		}
		
	}
	else if( obj.name == "edt_cron03")
	{	
		if(!this.fn_match(obj.text , ",-*?/1234567890L")) // 날짜는 ,-*?/L1234567890로만 구성되어야 한다.
		{
			this.fn_cronValidCheckSub(obj);
			return false;
		}
		if(this.fn_match(obj.text, "0123456789")) // 숫자만 입력한 경우
		{
			if( Number(obj.text) > 31 )	//날짜는 31보다 크면 안됨
 			{
				this.fn_cronValidCheckSub(obj);
				return false;
			}
		}
	}
	else if( obj.name == "edt_cron04")
	{
		if(!this.fn_match(obj.text , ",-*/123456789")) // 월은 ,-*/1234567890로만 구성되어야 한다.
		{

				this.fn_cronValidCheckSub(obj);
				return false;
		}
		if(this.fn_match(obj.text, "0123456789")) // 숫자만 입력한 경우
		{
			if( Number(obj.text) > 12 )	//월은 12보다 크면 안됨
 			{
				this.fn_cronValidCheckSub(obj);
				return false;
			}
		}
	}
	else if( obj.name == "edt_cron05")
	{
		if(!this.fn_match(obj.text , ",-*?/1234567")) // 요일은 ,-*?/1234567로만 구성되어야 한다.
		{
			this.fn_cronValidCheckSub(obj);
			return false;
		}
		if(this.fn_match(obj.text, "0123456789")) // 숫자만 입력한 경우
		{
			if( obj.text.length > 1) 
			{
				this.fn_cronValidCheckSub(obj);
				return false;
			}
		}
	}
	
	if(obj.name == "edt_cron06")  // 요일 처리
	{
		if(obj.text.length >4)
		{
			if(this.fn_match(obj.text.substring(4,5), "0123456789")) // 숫자만 입력한 경우
			{
				this.fn_cronValidCheckSub(obj);
				return false;
			}
		}
	}
	return true;
}

/*********************************************************************
 * 함 수 명 	: fn_cronFieldValid
 * 함수설명 	: 배치작업 등록/수정 시 CRON 정보 입력 EDIT의 변역 
 * 입    력 	: EDIT
 * 결    과 	: 번역 후 값리턴
 *********************************************************************/
pForm.fn_cronFieldValid = function(obj, parma, msg)
{
	if(obj.text.length == 1)
	{
		if(this.fn_match(obj.text, "*")) // *만 입력한 경우
		{
			return "매"+parma;
		}
	}
	
	var dayArry = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];
	if(obj.name == "edt_cron05")  // 요일 처리
	{
		if(this.fn_match(obj.text, "0123456789")) // 숫자만 입력한 경우
		{
			if(obj.text.length == 1) return dayArry[obj.text-1];
		}
	}
	 
	
	if(this.fn_match(obj.text, "0123456789")) // 숫자만 입력한 경우
	{
		return obj.text+parma;
	}
	
	if(this.fn_match(obj.text, "0") || this.fn_match(obj.text, "?")) // *만 입력한 경우
	{
		return "NULL";
	}
	
	if(this.fn_match(obj.text, "0123456789-")) // - 입력한 경우
	{
		var lastText = obj.text.charAt(obj.text.length-1);
		if(!this.fn_match(lastText, "0123456789")) return false;  // 마지막 값이 숫자가 아닌 경우 처리
		var objArr = obj.text.split("-");
		if( objArr.length != 2) return false; // 배열의 크기가 2이 아닌경우 처리 
		if(objArr[0] == objArr[1] ) return false; // 동일한 값을 입력한 경우 처리
		
		for(var i=0; i < objArr.length; i++)
		{
			if(this.gfn_isNull(objArr[i])) return false; // 배열에 값이 없는 경우 처리
		}
		
		if(obj.name == "edt_cron05")
		{
			objArr[0] = dayArry[objArr[0]-1];
			objArr[1] = dayArry[objArr[1]-1];
			parma ="";
		}
		
		if(obj.name == "edt_cron06")
		{
			parma ="년";
		}
		return objArr[0]+parma+ "부터 " + objArr[1]+parma + "까지";
	}
	if(this.fn_match(obj.text, "0123456789,")) // , 입력한 경우
	{
		var lastText = obj.text.charAt(obj.text.length-1);
		if(!this.fn_match(lastText, "0123456789")) return false;  // 마지막 값이 숫자가 아닌 경우 처리
		
		var objArr = obj.text.split(",");
		if(objArr[0] == objArr[1] ) return false; // 동일한 값을 입력한 경우 처리
		
		var param = "" 
		
		if(obj.name == "edt_cron06")
		{
			param ="년";
		}
		
		if(obj.name == "edt_cron03")
		{
			param ="일";
		}
		if(obj.name == "edt_cron02")
		{
			param ="시";
		}
		if(obj.name == "edt_cron01")
		{
			param ="분";
		}
		if(obj.name == "edt_cron00")
		{
			param ="초";
		}
	
		var rtn = "";
		for(var i=0; i < objArr.length; i++)
		{
			if(this.gfn_isNull(objArr[i])) return false; // 배열에 값이 없는 경우 처리
			
			if(obj.name == "edt_cron05")
			{
				objArr[i] = dayArry[objArr[i]-1];
				param ="";
			}
			if( i == objArr.length-1)
			{
				rtn += objArr[i]+param;
			}
			else
			{
				rtn += objArr[i]+param+ ",";
			}
			trace("rtn >>-- " + rtn + param);
		}
		return rtn;
	}
	if(this.fn_match(obj.text, "0123456789/")) // - 입력한 경우
	{
		var lastText = obj.text.charAt(obj.text.length-1);
		if(!this.fn_match(lastText, "0123456789")) return false;  // 마지막 값이 숫자가 아닌 경우 처리
		var objArr = obj.text.split("/");
		if( objArr.length != 2) return false; // 배열의 크기가 2이 아닌경우 처리 
		if(objArr[0] == objArr[1] ) return false; // 동일한 값을 입력한 경우 처리
		for(var i=0; i < objArr.length; i++)
		{
			if(this.gfn_isNull(objArr[i])) return false; // 배열에 값이 없는 경우 처리
		}
		if(obj.name == "edt_cron05")
		{
			objArr[0] = dayArry[objArr[0]-1];
			objArr[1] = dayArry[objArr[1]-1];
			parma ="";
		}
		if(obj.name == "edt_cron06")
		{
			parma ="년";
		}
		return objArr[0]+parma+ "부터 " + objArr[1]+parma + "마다";
	}
	
	if(this.fn_match(obj.text, "L")) // L 입력한 경우
	{
		if(obj.name == "edt_cron03")
		{
			return "마지막 일";
		}
	}
	return false;
}

/*********************************************************************
 * 함 수 명 	: fn_simpleTriggerValidCheck
 * 함수설명 	: 배치작업 등록/수정 시 SIMPLETRIGGER 정보 입력 EDIT의 변역 
 * 입    력 	: EDIT
 * 결    과 	: 번역 후 값리턴
 *********************************************************************/
pForm.fn_simpleTriggerValidCheck = function(obj)
{
	if(obj.name == "edt_batchStart")
	{
		if(obj.text == 0) return "즉시 실행";
		
		return Number(obj.text/1000)+ "후 실행 ";
	}
	else
	{
		return "매" + Number(obj.text/1000)+ "초 마다 실행";
	}
	
}