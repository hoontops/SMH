/*
 * jQuery XML Extension plugin - xmlprocess
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($) {
	$.fn.extend(jQuery, {
		/*-----------------------------------------
		null 체크
		-------------------------------------------*/		
		isNullEmpty : function(ObjValue){
			var value = ObjValue;
					
			if(value == null){
				value = "&nbsp;";	
			}else{
				value = value.toString();
			}
			
			if(value == ""){
				value = "&nbsp;";
			}
			
			return value;
		}
	});

	$.fn.extend(jQuery, {
		/*-----------------------------------------
		null 체크(공백 문자 까지 체크)
		-------------------------------------------*/		
		isNullEmpty2 : function(ObjValue){
			var value = ObjValue;
	
			if(value != null){
				value = value.toString();
				value = value.replace(/\s/g,"");
			}
					
			if(value == null || value == ""){
				value = "&nbsp;";	
			}
			
			return value;
		}
	});
	
	$.fn.extend({
		/*-----------------------------------------
		블랭크 체크
		-------------------------------------------*/		
		checkBlank : function(msg){
			var ObjValue = this.val();
			jQuery.trim(ObjValue);
			if(ObjValue != ''){
				return true;
			}else{
				alert(msg);
				$(this).focus();
				return false;
			} 
		}
	});
	
	$.fn.extend({
		/*-----------------------------------------
		숫자만 입력 가능
		-------------------------------------------*/		
		keypressOnlyNum : function(){
			this.attr('style', this.attr('style')+';ime-mode:disabled');
			this.bind('keydown', function(pressKey){
				var currKey = pressKey.keyCode;	
				if((currKey > 64 && currKey < 91) || (currKey > 105 && currKey < 112) ||  
					 (currKey > 185 && currKey < 223) || (currKey == 59)){
					return false;
				}
				else{
					return true;
				}
					
			});	
		}
	});	
	
	$.fn.extend({
		/*-----------------------------------------
		영어 숫자만 입력 가능
		-------------------------------------------*/		
		keypressOnlyEngNum : function(){
			this.attr('style', this.attr('style')+';ime-mode:disabled');
			this.bind('keydown', function(pressKey){
				var currKey = pressKey.keyCode;
				var currKeyVal = pressKey.key	;
				if((currKey > 105 && currKey < 112) || (currKey > 57 && currKey < 65) ||
					 (currKey > 185 && currKey < 223) || (currKey == 59)){
					return false;
				}else{
					return true;
				}					
			});	
		}
	});
	
	$.fn.extend(jQuery, {
		/*-----------------------------------------
		날짜 유효성 검사 YYYYMMDD (fromDate, toDate)
		-------------------------------------------*/		
		isValidDate1 : function(fromDate, toDate){
			if(fromDate.length < 8 || toDate.length < 8){
				alert("날짜 형식이 맞지 않습니다.");
				return false;
			}
			
			var fYear = Number(fromDate.substr(0,4));  
			var fMonth = Number(fromDate.substr(4,2));
			var fDay = Number(fromDate.substr(6,2));
			
			var tYear = Number(toDate.substr(0,4));
			var tMonth = Number(toDate.substr(4,2));
			var tDay = Number(toDate.substr(6,2));
			
			if(!$.chkDate(fYear, fMonth, fDay) || !$.chkDate(tYear, tMonth, tDay)){
				alert("날짜 형식이 맞지 않습니다.");
				return false;
			}
						
			var fDate = new Date(fYear, fMonth, fDay);
			var tDate = new Date(tYear, tMonth, tDay);
						
			if(fromDate == toDate){
				alert("시작일이 종료일과 같습니다.");
				return false;
			}
			
			if(fromDate > toDate){
				alert("종료일이 시작일보다 빠릅니다.");
				return false;
			}
			
			return true;
		},
		chkDate : function (yy, mm, dd){
			var year = Number(yy);
			var month = Number(mm);
			var day = Number(dd);
			
			if(month < 1 || month > 12){
				return false;
			}
				 
			if(day < 1 || day > 31){
				return false;
			}
		
			if((month==4 || month==6 || month==9 || month==11) && day==31){
				return false;
			}

			if(month == 2){
				var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
				if(day>29 || (day==29 && !isleap)){
					return false;	   
				}
			}
			return true;
		}
	});
	$.fn.extend(jQuery, {
		/*-----------------------------------------
		날짜 유효성 검사 YYYYMM (date)
		-------------------------------------------*/		
		isValidDate2 : function(date){
			if(date.length < 6){
				alert("날짜 형식이 맞지 않습니다.");
				return false;
			}
			
			var year = Number(date.substr(0,4));  
			var month = Number(date.substr(4,2));
			
			if(!$.chkDate(year, month)){
				alert("날짜 형식이 맞지 않습니다.");
				return false;
			}
			
			return true;
		}
	});
})(jQuery);