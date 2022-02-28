﻿var pForm = nexacro.Form.prototype;
/*
===============================================================================
== NBDF 함수 목록
===============================================================================
● nfn_cellFix                    		: 틀고정
● nfn_gridBackGroundColorChange         : 그리드배경색 변경
● nfn_cellUnFix                        	: 틀고정 취소
● nfn_getSessionVal                     : 세션값 가져오기
● nfn_setPageInit                      	:  조회시 항상 1페이지 호출
● nfn_setPageInit2          			:  조회시 항상 1페이지 호출
● nfn_setPageInit3               		: 조회시 항상 1페이지 호출
● nfn_getCurrentSystemTime              : 현재일시분초
● nfn_getYearList                       : 년도 리스트
● nfn_isEqualCol                       	: 해당 col의 컬럼이  colNm 인지 비교
● nfn_getCntOfColNm                     : 컬럼존재여부 파악
● nfn_appendComma                       :  입력받은 Number에 컴마를 추가한다.
● nfn_removeComma                       :  컴마를 제거한다.
● nfn_Rpad                        		:  오른쪽 채우기 함수
● nfn_Lpad                           	:  왼쪽 채우기 함수
● nfn_GetLengB                          :  입력받은 전체 길이를 계산 결과를 반환
● nfn_InsSelAllInDs                     : 콤보Dataset  에 선택/ 전체 삽입 후 선택/전체 display
● nfn_InsSelAllInDsForGrid              :  콤보Dataset  에 선택/ 전체 삽입 후 선택/전체 display
● nfn_FormatNull                   		:  널일경우 space null  반환
● nfn_decode                      		: decode 비교 함수
● nfn_isNull                  			: null 여부 boolean 리턴 = gfn_isNull
● nfn_MandatoryCheck           			: 그리드 필수입력값 입력여부 체크후 setfocus
● nfn_GetColNm                 			: 그리드의 Head 명 구하기
● nfn_GetColNum                    		: 그리드의 col idx 구하기 
● nfn_MandatoryCheckGrid                : 저장시 그리드 필수입력값 입력여부 체크후 setfocus
● nfn_MandatoryCheckDs                  : 저장시 dataset 필수입력값 입력여부 체크
● nfn_formInit                 			: 폼 초기화 
● nfn_getComponent                   	: Component 객체 구하기
● nfn_setComponent                      : 각각의 컴포넌트object에 대한 콤보값(공통코드), 기타 값 setting
● nfn_grd_onheadclick                   : 그리드 onheadclick 시 전체선택/해제,  정렬 
● nfn_grd_onf4keydown                   : 그리드 셀 선택후 f4 키다운시 복사창 팝업
● nfn_setGridToolTipText                :그리드 셀의 tooltiptext diplay
● nfn_grd_onmousemove                   : 그리드 셀의 tooltiptext diplay
● nfn_clearInDiv                 		: 해당 div 내 초기화 
● nfn_clearInDivExcept                  :  해당 div 내 strObjList 제외 초기화 .
● nfn_clearAllInDiv                     : 초기화 btn 클릭하였을 경우 div_search안에 있는 objects 초기화
● nfn_resetDivWork             			: 초기화 btn 클릭하였을 경우 div_work안에 있는 objects 초기화
● nfn_clearObj                			: 초기화 btn 클릭하였을 경우 div 또는 tab_search안에 있는 objects 초기화
● nfn_setFromSearch                  	:  조회시 그리드의  sort mark 지우기
● nfn_setLookupCodeCmb                  :  공통코드 set Dataset 
● nfn_setLookupCodeGridCmb              :  공통코드 set Grid combo
● nfn_getEcmLookupValuesDs              : 공통코드 dataset
● nfn_isCorporateRegistrationNumber     :  사업자등록번호 검증
● nfn_isNationalNo                      :  주민등록번호 검증
● nfn_isNumeric                       	:  구분자 (sChr) 를 제외한 문자열이 숫자 타입인지 여부
● nfn_isChangedDataset                  :  form의 dataset의 변경되었는지 여부(변경:true,미변경:false)
● nfn_fromToCheck                 		: from - to 크기 비교
● nfn_lenCheck          				: 길이체크
● nfn_nvl             					:  페이징 dataset 초기화
● nfn_gridMonthCheck                    :그리드 년월 유효성 검사
● nfn_getFrameAguments                  :파라메터 가져오기
● nfn_checkTelNo                 		: 전화번호 유효성 체크
● nfn_getMenuPath                       : Menu Path
● nfn_getDictionaryname                 : 사전명 가져오기
● nfn_getByteB                      	: 바이트 길이 가져오기
● nfn_isValidPassword                  	: 유효한 패스워드인지 체크
● nfn_numberWithCommas                  : 숫자 콤마
● nfn_decimalFits                  : 소수점 자리수가 가장많은 수 return
*/


/***************************************************************************
 * form 공통 변수 선언
****************************************************************************/
pForm.fv_rtnValue = new Array();	//팝업화면에서 반환하는 값 받는 배열

/* Paging 관련 변수 */
pForm.LIST_COUNT = 50; // [페이징] 한페이지에 보여질 목록 건수
pForm.PAGE_COUNT = 10; // [페이징] 페이지 표시 개수
pForm.page;
pForm.page2;
pForm.page3;

pForm.APPLICATION_ID;	//APPLICATION ID

var sAppName = "IFC";//nexacro.getApplication().name;
pForm.JOB_SYS_CD = sAppName.toString().toUpperCase();	//업무시스템 코드

// form init 유형
pForm.FORM_INIT_TYPE;

/*권한변수*/
pForm.MENU_AUTH;
/*권한변수끝*/

pForm.boolOnheadclick = true;

//마우스 오른쪽 클릭(그리드 메뉴) grid Object 

/*********************************************************************
 * 함 수 명 	: nfn_cellFix
 * 함수설명 	: 틀고정
 * 입    력 	: objGrid , nCell
 * 결    과 	: 틀고정
 *********************************************************************/
pForm.nfn_cellFix = function(objGrid, nCell)
{
	
	this.fGridFixed2(objGrid,nCell,"left");
/*	
	var nCol = objGrid.getCellProperty("Body", nCell, "col");
	objGrid.setFormatColProperty( nCol, "band", "left");
	objGrid.setCellProperty( "Head", nCol, "border", "1px solid #f1f1f1,1px solid black,1px solid #f1f1f1,1px solid #f1f1f1");
	objGrid.setCellProperty( "Body", nCol, "border", "1px solid #f1f1f1,1px solid black,1px solid #f1f1f1,1px solid #f1f1f1");
*/
/*
	var nCol = objGrid.getCellProperty("Body", nCell, "col");
	var nColSpan = objGrid.getCellProperty("Head", nCell, "colspan");
	var nMaxCol = 0;
	
	if(nMaxCol < (nCol+nColSpan))
	{
		nMaxCol = nCol+nColSpan;
	}
	
	trace("nCol.."+nCol);
	trace("nColSpan.."+nColSpan);
	trace("nMaxCol.."+nMaxCol);
	
	for(var i= objGrid.getFormatColCount()-1; i>=0; i--)
	{
		objGrid.setFormatColProperty(i, "band", "body");
		objGrid.setCellProperty( "Head", i, "background", "");
		objGrid.setCellProperty( "Head", i, "line", "1px solid #b1b5b9ff");//1px solid #f1f1f1
		objGrid.setCellProperty( "Body", i, "line", "1px solid #b1b5b9ff");
	}
	
	for(var i=0; i< nMaxCol; i++)
	{
		objGrid.setFormatColProperty(i, "band", "left");
		//objGrid.setCellProperty( "Head", i, "background", "#ADFF2F");
		objGrid.setCellProperty( "Head", i, "background", "");
		if(i == nMaxCol-1){
			 objGrid.setCellProperty( "Head", i, "line", "1px solid #b1b5b9ff,2px solid black");  //1px solid #b1b5b9ff,1px solid blue
			 objGrid.setCellProperty( "Body", i, "line", "1px solid #b1b5b9ff,2px solid black");  //1px solid #b1b5b9ff,1px solid blue
			 objGrid.setCellProperty( "Body", i, "selectline", "1px solid #b1b5b9ff,2px solid black");
		}
	}
*/	
	
}


/*********************************************************************
 * 함 수 명 	: nfn_gridBackGroundColorChange
 * 함수설명 	: 그리드배경색 변경
 * 입    력 	: objGrid 
 * 결    과 	: 그리드배경색 변경
 *********************************************************************/
pForm.nfn_gridBackGroundColorChange = function(objGrid, compVal, comVal2, color, color2)
{
	var expr = "EXPR("+compVal+"=="+compVal2+"?"+color+":"+color2+")";
	for (var nCell = 0; nCell < objGrid.getCellCount("Body"); nCell++)
	{
	if (nCell == 4)
		objGrid.setCellProperty("Body", nCell, "background" , expr);
		objGrid.setCellProperty("Body", nCell, "background2", expr);
	}

}


/*********************************************************************
 * 함 수 명 	: nfn_cellUnFix
 * 함수설명 	: 틀고정 취소
 * 입    력 	: objGrid 
 * 결    과 	: 틀고정 취소
 *********************************************************************/
pForm.nfn_cellUnFix = function(objGrid)
{
	var nCol;
	var nCell;
	for(var i= objGrid.getFormatColCount()-1; i>=0; i--)
	{
		objGrid.setFormatColProperty(i, "band", "body");
		//objGrid.setCellProperty( "Head", i, "background", "");
		//objGrid.setCellProperty( "Head", i, "line", "");
		//objGrid.setCellProperty( "Body", i, "line", "");
		if(objGrid.getCellProperty("head",i,"rowspan") == 1 && objGrid.getCellProperty( "Head", i, "border")=="1px solid #e0e0e0,1px solid black,1px solid #e0e0e0,1px solid #e0e0e0"){
			nCol = i;
			nCell = i;
			break;
		}
	}
//	objGrid.setCellProperty( "Head", nCol, "border", "1px solid #e0e0e0");
//	objGrid.setCellProperty( "Body", nCol, "border", "1px solid #e0e0e0");
	//objGrid.setCellProperty( "Body", nCol, "border", "1px solid #f1f1f1,0px none,1px solid #f1f1f1,1px solid #f1f1f1");
	this.fGridFixed3(objGrid,nCell,"body");
}

/*********************************************************************
 * 함 수 명 	: nfn_getSessionVal
 * 함수설명 	: 세션값 가져오기
 * 입    력 	: 세션id
 * 결    과 	: 세션값
 *********************************************************************/
pForm.nfn_getSessionVal = function(strSessionId){
	var sessionVal = nexacro.getApplication().gds_userInfo.getColumn(0,strSessionId);
	if(strSessionId=="gv_currJobSysCd") sessionVal = this.JOB_SYS_CD;
	
	return sessionVal;
}

/*********************************************************************
 * 함 수 명 	: nfn_setPageInit
 * 함수설명 	: 조회시 항상 1페이지 호출
 * 입    력 	: objDiv (page div)
 * 결    과 	: 페이지 출력
 *********************************************************************/
pForm.nfn_setPageInit = function(objDiv){
	this.page = 1;
	//this.div_page.set_url("");
	objDiv.set_url("common::com_paging.xfdl");
	objDiv.form.initPaging(this.LIST_COUNT, this.PAGE_COUNT, this.onChangePage, this);
}

/*********************************************************************
 * 함 수 명 	: nfn_setPageInit2
 * 함수설명 	: 조회시 항상 1페이지 호출
 * 입    력 	: objDiv (page div)
 * 결    과 	: 페이지 출력
 *********************************************************************/
pForm.nfn_setPageInit2 = function(objDiv){
	this.page2 = 1;
	//this.div_page.set_url("");
	objDiv.set_url("common::com_paging.xfdl");
	objDiv.form.initPaging(this.LIST_COUNT, this.PAGE_COUNT, this.onChangePage2, this);
}

/*********************************************************************
 * 함 수 명 	: nfn_setPageInit3
 * 함수설명 	: 조회시 항상 1페이지 호출
 * 입    력 	: objDiv (page div)
 * 결    과 	: 페이지 출력
 *********************************************************************/
pForm.nfn_setPageInit3 = function(objDiv){
	this.page3 = 1;
	//this.div_page.set_url("");
	objDiv.set_url("common::com_paging.xfdl");
	objDiv.form.initPaging(this.LIST_COUNT, this.PAGE_COUNT, this.onChangePage3, this);
}

/*********************************************************************
 * 함 수 명 	: 현재일시분초
 * 함수설명 	: 현재일시분초 가져오기
 * 입    력 	: 증가할 월수(현재월일 경우 0)	
 * 			  증가할 일수(현재일 경우 0)	
 * 			  code : thisweek,lastweek,thismonth,lastmonth
 * 	                (금주,전주,금월,전월)	
 * 결    과 	: 현재일시분초 YYYYMMDDHH24MISS
 *********************************************************************/
pForm.nfn_getCurrentSystemTime = function(monthToAdd,dayToAdd,code)
{
	var strDs = "ds_currentDate";

	if(this.objects[strDs]==null ){
		tmpDs = new Dataset();
		tmpDs.set_name(strDs);
		tmpDs.set_id(strDs);
		
		this.addChild(strDs,tmpDs );
	}

	var strSearchDs = "ds_searchCurrentDate";
	if(this.objects[strSearchDs]==null){
		var tmpDs = new Dataset();
		tmpDs.addColumn( "TIME_CALC_MONTH", "BIGDECIMAL" );
		tmpDs.addColumn( "TIME_CALC_DAY", "BIGDECIMAL" );
		tmpDs.addColumn( "CODE", "STRING" );
		tmpDs.set_name(strSearchDs);
		tmpDs.set_id(strSearchDs);
		
		this.addChild(strSearchDs,tmpDs );	
	}

	this.objects[strSearchDs].clearData();
	this.objects[strSearchDs].addRow();
	this.objects[strSearchDs].setColumn(0,"TIME_CALC_MONTH",monthToAdd);
	this.objects[strSearchDs].setColumn(0,"TIME_CALC_DAY",dayToAdd);
	this.objects[strSearchDs].setColumn(0,"CODE",code);
	
	var sSvcID        = "selectCurrentSystemTime";
    var sController   = "/cmsa00300/selectCurrentSystemTime.do";
	var sInDatasets   = "INPUT="+strSearchDs; 
	var sOutDatasets  = strDs+"=output";
	
	var sArgs = "";
    sArgs += this.gfn_setParam("method","selectCurrentSystemTime");
    
    this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, ""); 
	//this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs); 
	
	var sCurrDate = this.ds_currentDate.getColumn(0,"TODATE");
	if(this.gfn_isNull(sCurrDate)){
		var objDate = new Date();
		var nYear = objDate.getYear();
		var nMonth = objDate.getMonth()+1;
		var nDay = objDate.getDate();
		sMonth = "" + nMonth;
		sDay = "" + nDay;
		if(nMonth<10) sMonth = "0" + nMonth;
		if(nDay<10) sDay = "0" + nDay;
		sCurrDate = ""+	nYear + sMonth + sDay;
	}
	if(!this.gfn_isNull(this.ds_currentDate.getColumn(0,"DATE_FROM"))){
		sCurrDate += ","+this.ds_currentDate.getColumn(0,"DATE_FROM");
		sCurrDate += ","+this.ds_currentDate.getColumn(0,"DATE_TO");
	}
	return sCurrDate;
}

/*********************************************************************
 * 함 수 명 	: 년도 리스트
 * 함수설명 	: 년도 리스트 콤보 처리시 사용 (시작년도~현재년도)
 * 입    력 	: fromYear : 시작년도	
 * 결    과 	: 리스트
 *********************************************************************/
pForm.nfn_getYearList = function(fromYear)
{

	var strDs = "ds_year";
	if(this.objects[strDs]==null ){
		tmpDs = new Dataset();
		tmpDs.set_name(strDs);
		tmpDs.set_id(strDs);
		
		this.addChild(strDs,tmpDs );
	}

	var strSearchDs = "ds_searchYear";
	if(this.objects[strSearchDs]==null){
		var tmpDs = new Dataset();
		tmpDs.addColumn( "YEAR_START", "BIGDECIMAL" );
		tmpDs.set_name(strSearchDs);
		tmpDs.set_id(strSearchDs);
		
		this.addChild(strSearchDs,tmpDs );	
	}
	this.objects[strSearchDs].clearData();
	this.objects[strSearchDs].addRow();
	this.objects[strSearchDs].setColumn(0,"YEAR_START",fromYear);
	
	var sSvcID        = "selectYearList";
    var sController   = "/cmsa00300/selectYearList.do";
	var sInDatasets   = "INPUT="+strSearchDs; 
	var sOutDatasets  = strDs+"=output";
	
	var sArgs = "";
    sArgs += this.gfn_setParam("method","selectYearList");
    
	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs); 

}

/*********************************************************************
 * 함 수 명 	: nfn_isEqualCol
 * 함수설명 	: 해당 col의 컬럼이  colNm  인지 
 * 입    력 	: grdObj
				  col	
 *            	  colNm 컬럼바인드명
 * 결    과 	: true/false
 *********************************************************************/
pForm.nfn_isEqualCol = function(grdObj, cell, colNm)
{
	if(this.gfn_isNull(grdObj.getCellProperty("Body", cell, "text"))) return;
	//if(grdObj.getCellProperty("Body", cell, "text").replace("bind:","")==colNm) 
	if(this.gfn_getBindColName(grdObj,cell)==colNm)
		return true;
	else
		return false;
}

/*********************************************************************
 * 함 수 명 	: nfn_getCntOfColNm
 * 함수설명 	: 컬럼존재여부 파악
 * 입    력 	: dsObj
 *            	  colNm 컬럼바인드명
 * 결    과 	: 건수
 *********************************************************************/
//dsObj.getColIndex(colNm)
pForm.nfn_getCntOfColNm = function(dsObj, colNm)
{
	var i=0;	
	for(var i=0; i < dsObj.getColCount(); i++){
		if(dsObj.getColID(i) == colNm){
			return 1;
		}
	}
	return 0;
}


/*********************************************************************
 * 함 수 명 	: nfn_appendComma
 * 함수설명 	: 입력받은 Number에 컴마를 추가한다.
 * 입    력 	: nNumber String
 *            	  nDetail 출력시 소숫점 이하의 자릿수.(반올림함)
 * 결    과 	: String(Comma 를 포함하고 있는 숫자)
 *            	  정상 : Comma 가 포함하고 있는 Number Return
 *********************************************************************/
pForm.nfn_appendComma = function(nNumber,nDetail)
{
	if (nNumber == null)	return "";
	if (nDetail	== null)	nDetail	= 0;
	
	nNumber				= parseFloat(nNumber);
	nNumber				= Math.round(nNumber, nDetail);
	
	var strNumber		= new String(nNumber);
	var arrNumber		= strNumber.split(".");
	var strFormatNum	= "";
	var j = 0;
	
	for ( i = arrNumber[0].length - 1; i >= 0; i--)
	{
		if (i != strNumber.length && j == 3)
		{
			strFormatNum = arrNumber[0].charAt(i) + "," + strFormatNum;
			j = 0;
		} else {
			strFormatNum = arrNumber[0].charAt(i) + strFormatNum;
		}
		j++;
	}
	
	if (arrNumber.length > 1)	strFormatNum = strFormatNum + "." + arrNumber[1];
	
	return strFormatNum;
}

/**********************************************************************
 * 함 수 명 	: nfn_removeComma
 * 함수설명 	: 컴마를 제거한다.
 * 입    력 	: 컴마가 포함된 스트링
 * 결    과 	: 컴마가 제거된 스트링이 반환된다.
 *********************************************************************/
pForm.nfn_removeComma = function(strValue)
{
	return strValue.replace(",", "");
}

/*********************************************************************
 * 함 수 명 	: nfn_Rpad
 * 함수설명 	: 오른쪽 채우기 함수
 * 입    력 	: sValue 	- 대상문자열
 *			  	  nLength 	- 자리수
 *			  	  Char 		- 채울 문자
 * 결    과 	: String
 *********************************************************************/
pForm.nfn_Rpad= function(sValue, nLength, Char) 
{
    if (new String(sValue).valueOf() == "undefined") sValue = "";
    if (this.nfn_isNull(sValue)) sValue = "";

    var strRetVal  = new String(sValue);
    var nIteration = nLength - this.nfn_GetLengB(strRetVal);

    for (var i = 0; i < nIteration; i++) 
    {
        strRetVal = strRetVal + Char;
    }
    return strRetVal;
}

/*********************************************************************
 * 함 수 명 	: nfn_Lpad
 * 함수설명 	: 왼쪽 채우기 함수
 * 입    력 	: sValue 	- 대상문자열
 *			  	  nLength 	- 자리수
 *			  	  Char 		- 채울 문자
 * 결    과 	: String
 ********************************************************************/
pForm.nfn_Lpad = function(sValue, nLength, Char)
{
    if (new String(sValue).valueOf() == "undefined") sValue = "";
    if (this.nfn_isNull(sValue)) sValue = "";

    var strRetVal 	= new String(sValue);
    var strChar 	= "";

    var nIteration 	= nLength - this.nfn_GetLengB(strRetVal);
    
    for (var i = 0; i < nIteration; i++) 
    {
        strChar = Char + strChar;
    }
    return (strChar + strRetVal);
}

/*********************************************************************
 * 함 수 명 	: nfn_GetLengB
 * 함수설명 	: 입력받은 전체 길이를 계산 결과를 Number Type으로 반환
 *			  	  문자, 숫자, 특수문자 : 1 로 Count 
 * 			  	  그 외 한글/한자 : 2 로 count 
 * 입    력 	: 대상문자열
 * 결    과 	: number
 ********************************************************************/
pForm.nfn_GetLengB = function(sValue)
{
	var v_ChkStr = sValue;
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

/*******************************************************************************
 * 기능 : 콤보Dataset  에 선택/ 전체 삽입 후 선택/전체 display
 * 진성하
 * Paramether  : objCombo, SEL/ALL
 * 특이사항 :
*******************************************************************************/
pForm.nfn_InsSelAllInDs= function(objCombo, sValue)
{
	var sDs = objCombo.innerdataset;
	var sCol = objCombo.datacolumn;
	this.objects[sDs].insertRow(0);
	this.objects[sDs].setColumn(0, sCol, sValue);

	objCombo.set_text(sValue);
	//objCombo.set_index(0);
}

/*******************************************************************************
 * 기능 : 콤보Dataset  에 선택/ 전체 삽입 후 선택/전체 display
 * 폴라폴라
 * Paramether  : objCombo, SEL/ALL
 * 특이사항 :
*******************************************************************************/
pForm.nfn_InsSelAllInDsForGrid= function(objComboDataset, sValue)
{
	var sColumnName = objComboDataset.getColumnInfo(1).name;  //0:KEY, 1:VALUE (반드시 이순서가 되어야함)
	//trace("sColumnName>>>>"+sColumnName);
	objComboDataset.insertRow(0);
	objComboDataset.setColumn(0, sColumnName, sValue);
}

/*******************************************************************************
 * 기능 : 널일경우 space null  반환
 * 진성하
 * Paramether  : sValue
 * 특이사항 :
*******************************************************************************/
pForm.nfn_FormatNull= function(sValue)
{
	var bRtn = sValue;
	if( new String(sValue).valueOf() == "undefined") 
		bRtn = "";
	if( new String(sValue).valueOf() == undefined) 
		bRtn = "";
	if( sValue == null )
		bRtn = "";
	if( ("x"+sValue == "xNaN") && ( new String(sValue.length).valueOf() == "undefined" ) )
		bRtn = "";

    return bRtn;
}



/*******************************************************************************
 ★ 설명
    decode 비교 함수
 ★ Parameter 
    1. arg0   : 비교 할 변수
    2. arg1   : 비교 대상 변수
    3. arg2   : 비교 대상 변수가 같을 경우 리턴할 값
    4. 반복..
 ★ return 
    - 비교 대상 변수가 같을 경우 값 리턴
 ******************************************************************************/
pForm.nfn_decode = function()
{
	var varRtnValue = null;
	var arrArgument = this.nfn_decode.arguments;
	var varValue = arrArgument[0];
	var bIsDefault = false;
	var nCount = 0;
	if((arrArgument.length % 2) == 0) {
	  nCount = arrArgument.length - 1;
	  bIsDefault = true;
	} else {
	  nCount = arrArgument.length;
	  bIsDefault = false;
	}
	for(var i = 1; i < nCount; i+=2) {
	  if(varValue == arrArgument[i]) {
		varRtnValue = arrArgument[i+1];
		i = nCount;
	  }
	}
	if(varRtnValue == null && bIsDefault) {
	  varRtnValue = arrArgument[arrArgument.length-1];
	}
	return varRtnValue;
}

/*******************************************************************************
 * 공통 null 치환 (true/false)
 * 작성자 : pola
 * parameter sValue : String
 * 예    : var Temp = cfn_isNull(test);
 ******************************************************************************/
 pForm.nfn_isNull = function(sValue)
 {
	if( sValue != null ){
		sValue = new String(sValue);
		sValue = sValue.trim(); 
	}
	
	if( new String(sValue).valueOf() == "undefined") 
		return true;
	if( new String(sValue).valueOf() == undefined) 
		return true;
	if( sValue == null )
		 return true;
	if( ("x"+sValue == "xNaN") && ( new String(sValue.length).valueOf() == "undefined" ) )
		 return true;
	if( sValue.trim().length == 0 )
		 return true;
	return false;
}

/*
	기능 : 저장시 그리드 필수입력값 입력여부 체크후 setfocus
	인수 : strComponent - 필수입력 컬럼을 담고 있는 컴포넌트
		   strColIdList - 필수입력 컬럼ID 리스트- 구분자 : ","
		   strColNmList - 필수입력 컬럼명 리스트- 구분자 : "," : dictionary id
*/
pForm.nfn_MandatoryCheck = function(component, strColIdList, strColNmList, manadantory){
	var arrColId = strColIdList.split(",");
	var arrColNm = strColNmList.split(",");
	var obj;
	if(component instanceof Form){
		obj = component;
	}else{
		obj = component.form;
	}
	for(var j=0 ; j<arrColId.length ; j++){
		//trace(arrColId[j]);
		var index = -1;
		for(var i=0 ; i<obj.components.length ; i++){
			var compId = obj.components[i].id;
			if(arrColId[j]==compId){
				index = i;
				break; 
			}
		}
			
		//trace(compId+","+index);
		
		//POLA
		var cssStyle = "";
		if (manadantory == "N")
			cssStyle = "enabled_error";    //필수조건 CHECK 시
		else
			cssStyle = "essential_error";  //필수조건이 아닌 Logic에 의한 CHECK 시
			
		if(index >=0){
			if(!this.gfn_isNull(obj.components[index].url)){
				if(obj.components[index].url=="common::com_calendar.xfdl"){
					var compValue = obj.components[index].form.calStart.value;
				}else if(obj.components[index].url=="common::common::com_monthCalendar.xfdl"){
					var compValue = obj.components[index].form.msk_month.value;
				}
			}else{
				var compValue = obj.components[index].value;
			}
			if(this.nfn_isNull(compValue)){
				var dicId;
				var colNm;
				if(!this.gfn_isNull(strColNmList)){
					dicId = arrColNm[j];//arrColId[j].substring(4);
					colNm = this.nfn_getDictionaryname(dicId,true);
				}
				if(this.gfn_isNull(colNm)){
					dicId = arrColId[j].substring(4);
					colNm = this.nfn_getDictionaryname(dicId,true);
				}
				if(this.gfn_isNull(colNm)) colNm = arrColNm[j];

				if(obj.components[index] instanceof Combo){
					obj.components[index].set_cssclass(cssStyle);
					this.gfn_Message("SelectSomeThing", colNm, "warning","ok");
					//(arrColNm[index]+"을(를) 선택하세요!!!"  );
				}else{
					obj.components[index].set_cssclass(cssStyle);
					this.gfn_Message("InputSomeThing", colNm, "warning","ok");
					//(arrColNm[index]+"을(를) 입력하세요!!!"  );
				}
				//component.components[index].style.set_background("beige"); 
				obj.components[index].setFocus();
				return false;
			} 
			else // 추가 .. css 원복 로직
			{
				this.nfn_setEssential(obj.components[index]); // 에러처리 제거
			}
		}
	}
	return true;
}


/*
	기능 : 그리드의 Head 명 구하기
	인수 : grdObj - 필수입력 컬럼을 담고 있는 컴포넌트
		   strColId - column id
*/
pForm.nfn_GetColNm =  function(grdObj, strColId){
	var sRtn = "";
	for(var i=0; i<grdObj.getCellCount("Body"); i++){
		if(this.nfn_isEqualCol(grdObj,i,strColId)){
			if(this.gf_getLanguageType() == "ko-KR") 
				sRtn = grdObj.getCellProperty("Head",i,"text");
			else
				sRtn = this.nfn_getDictionaryname(grdObj.getCellProperty("Head",i,"tooltiptext"),true);
			break;
		}
	}
	return sRtn;
}


/*                                                  
	기능 : 그리드의 col idx 구하기                    
	인수 : grdObj - 필수입력 컬럼을 담고 있는 컴포넌트
		   strColId - column id                         
*/                                                  
pForm.nfn_GetColNum =  function(grdObj, strColId){
	var sRtn;                                         
	for(var i=0; i<grdObj.getCellCount("Body"); i++){ 
		if(this.nfn_isEqualCol(grdObj,i,strColId)){  
			sRtn = i;                                     
			break;                                        
		}                                               
	}                                                 
	return sRtn;                                      
}                     
/*
	기능 : 저장시 그리드 필수입력값 입력여부 체크후 setfocus
	인수 : strComponent - 필수입력 컬럼을 담고 있는 컴포넌트
		   strColIdList - 필수입력 컬럼ID 리스트- 구분자 : ","
		   strColNmList - 필수입력 컬럼명 리스트- 구분자 : ","
*/
pForm.nfn_MandatoryCheckGrid = function(component, strColIdList, strColNmList){
	return this.gfn_GridKeyCheck(component,strColIdList.split(","));
	/*
	var arrColId = strColIdList.split(",");
	//var arrColNm = strColNmList.split(",");
	var colNm = "";
	var dsNm = component.binddataset;
	var dsObj = this.objects[dsNm];
	for(var j=0; j<dsObj.getRowCount(); j++){
		var rowType = dsObj.getRowType(j);
		if(rowType==4 || rowType==2){
			for (var i=0 ; i<arrColId.length ; i++){
				if(this.nfn_isNull(dsObj.getColumn(j,arrColId[i]))){
					if(this.gf_getLanguageType() == "ko-KR")
						colNm = component.getCellProperty( "head", i, "text" );
					else
						colNm = this.nfn_getDictionaryname(component.getCellProperty( "head", i, "tooltiptext" ));
					
					dsObj.set_rowposition(j);
					this.gfn_Message("InputSomeThing",colNm , "warning","ok");
					//this.gfn_Message("InputSomeThing",arrColNm[i] , "warning","ok");
					//(arrColNm[i]+"을(를) 입력하세요!!!");
					component.selectCell(j,this.nfn_GetColNum(component,arrColId[i]));
					return false;
				} 
			}
		}
	}
	return true;
	*/
}

/*
	기능 : 저장시 그리드 필수입력값 입력여부 체크후 setfocus
	인수 : strComponent - 필수입력 컬럼을 담고 있는 컴포넌트
		   strColIdList - 필수입력 컬럼ID 리스트- 구분자 : ","
		   strColNmList - 필수입력 컬럼명 리스트- 구분자 : ","
*/
pForm.nfn_MandatoryCheckDs = function(dsObjNm, strColIdList, strColNmList){
	var arrColId = strColIdList.split(",");
	var arrColNm = strColNmList.split(",");
	var dsObj = this.objects[dsObjNm];
	for(var j=0; j<dsObj.getRowCount(); j++){
		var rowType = dsObj.getRowType(j);
		if(rowType==4 || rowType==2 || rowType==1){
			for (var i=0 ; i<arrColId.length ; i++){
				if(this.nfn_isNull(dsObj.getColumn(j,arrColId[i]))){
					dsObj.set_rowposition(j);
					this.gfn_Message("InputSomeThing",arrColNm[i] , "warning","ok");
					//(arrColNm[i]+"을(를) 입력하세요!!!");
					return false;
				} 
			}
		}
	}
	return true;
}
/*******************************************************************************
 * 기능 : 폼 초기화 
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_formInit = function(objForm)
{
	this.MENU_AUTH = this.parent.parent.pv_menuAuth;
	if(this.gfn_isNull(this.MENU_AUTH)){
		this.MENU_AUTH = nexacro.getApplication().gds_menu.lookup("PGM_ID",this.name,"MENU_AUTH");
	}	
	if(this.opener != null && this.gfn_isNull(this.MENU_AUTH)){
		this.MENU_AUTH = this.opener.parent.parent.pv_menuAuth;
	}
//	this.MENU_AUTH = nexacro.getApplication().gds_menu.lookup("PGM_ID",this.name,"MENU_AUTH");
trace("this.MENU_AUTH..."+this.MENU_AUTH);	//등록,조회,수정,삭제
	if(this.isValidObject(objForm)){
		this.gfn_formOnLoad(objForm);
	}
	var obj;
	for(var i=0; i<this.components.length; i++){
		obj = this.components[i];
		this.nfn_setComponent(obj);		
	}	
	this._userInfo = this.gfn_userinfoJs();
}

/*******************************************************************************
 * 기능 : get Component  
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_getComponent = function(objFormDiv, findObjName, objFindType)
{
//	trace("findObjName-->"+findObjName);
//	trace("objFormDiv-->"+objFormDiv);
//	trace("objFindType-->"+objFindType);
	var obj;
	if(objFormDiv instanceof Form){
		for(var i=0; i<this.components.length; i++){
			obj = this.components[i];
			var comp = this.nfn_getComponent(obj,findObjName,objFindType);	
			if(comp != null && findObjName == comp.name) return comp;
		}
	}else if(objFormDiv instanceof Div || obj instanceof PopupDiv){
		for(var i=0; i<objFormDiv.form.components.length; i++){
			subObj = objFormDiv.form.components[i];
			var comp = this.nfn_getComponent(subObj,findObjName,objFindType);
			if(comp != null && findObjName == comp.name) return comp;
		}	
	}else if(objFormDiv instanceof Tab){
		for(var i=0; i<objFormDiv.tabpages.length; i++){
			subObj = objFormDiv.tabpages[i];
			var comp = this.nfn_getComponent(subObj,findObjName,objFindType);
			if(comp != null && findObjName == comp.name) return comp;
		}
			
	}else{
		if(!this.gfn_isNull(objFindType) && objFormDiv instanceof objFindType ){
			if(findObjName == objFormDiv.name){
				return objFormDiv;
			}
		}else{
			if(findObjName == objFormDiv.name){
				return objFormDiv;
			}			
		}
	}	
	return obj;
}

/*******************************************************************************
 * nfn_setComponent
 * 기능 : 각각의 컴포넌트object에 대한 콤보값(공통코드), 기타 값 setting
 * 진성하
 * Paramether  : 컴포넌트Object
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_setComponent = function(obj)
{
	var subObj;
	if(obj instanceof Combo){
//		if(!this.gfn_isNull(obj.codecolumn) && obj.codecolumn.substring(0,6) == "AD,SEL"){
//			obj.addEventHandler("onitemchanged", this.nfn_acctGubun_onitemchanged , this); 
//		}
		var nIndex = obj.addEventHandler("onmouseenter", this.nfn_setCmbToolTipText , this); 
		this.nfn_setLookupCodeCmb(obj);
//		obj.style.set_align("center middle");
	}else if(obj instanceof Grid){	
		//this.nfn_setGridToolTipText(obj);
		
		var nIndex = obj.addEventHandler("onheadclick", this.nfn_grd_onheadclick , this); 
		var nIndex = obj.addEventHandler("onkeydown", this.nfn_grd_onkeydown , this); 		
		var nIndex = obj.addEventHandler("onrbuttondown", this.nfn_grd_onrbuttondown , this); 
		var nIndex = obj.addEventHandler("onmousemove", this.nfn_grd_onmousemove , this); 
		var nIndex = obj.addEventHandler("onmouseleave", this.nfn_grd_onmouseleave , this); 
		var nIndex = obj.addEventHandler("onexpandup", this.nfn_grd_onexpandup , this); 
		
		//this.gfn_setGridCopyPaste(obj);
		//trace("nfn_grd_onheadclick-->"+nIndex);

		this.nfn_setLookupCodeGridCmb(obj);
		obj.set_cellmovingtype("col");
		obj.set_cellsizingtype("col");
	}else if(obj instanceof Button){
		var tooltiptext = obj.tooltiptext;
		var dictionaryname = this.nfn_getDictionaryname(tooltiptext,true);
		if(this.gf_getLanguageType()=="ko-KR"){
			if(!this.gfn_isNull(obj.text)){
				obj.set_tooltiptext(obj.text);
			}else{
				if(!this.gfn_isNull(dictionaryname)){
					obj.set_tooltiptext(dictionaryname);
				}		
			}
		}else{
			if(!this.gfn_isNull(dictionaryname)){
				obj.set_text(dictionaryname);
				obj.set_tooltiptext(dictionaryname);
			}		
		}		
		
//		if(this.gfn_isNull(obj.tooltiptext)) obj.set_tooltiptext(obj.text);
		if(obj.id=="btn_clear"){
			var nIndex = obj.setEventHandler("onclick", this.nfn_clear , this); 
			//trace("btn_clear addEventHandler-->"+nIndex);
		}else if(obj.id=="btn_search"){
			var nIndex = obj.setEventHandler("onclick", this.nfn_search , this); 
//			trace("obj.parent.parent.id-->"+obj.parent.parent.id);
			if(this.components["div_search"]) this.gfn_setEnterSearch(this.div_search,"nfn_search"); 
			if(this.components["tab_search"]) this.gfn_setEnterSearch(obj.parent.parent,"nfn_search"); 
			//trace("btn_search setEventHandler-->"+nIndex);
		}else if(obj.id=="btn_save" && obj.parent.parent.id == "div_header"){
			if(this.gfn_isNull(obj.text)){
				obj.set_text(" "+this.nfn_getDictionaryname(obj.tooltiptext,true));
				obj.set_width(nexacro.toNumber(obj.width) + 25);
				//obj.set_right(nexacro.toNumber(obj.right) + 5);
			}
			var nIndex = obj.setEventHandler("onclick", this.nfn_save , this); 
			//trace("btn_save setEventHandler-->"+nIndex);
		}else if(obj.id=="btn_delete" && obj.parent.parent.id == "div_header"){
			var nIndex = obj.setEventHandler("onclick", this.nfn_delete , this); 
		}else if(obj.id=="btn_help" && obj.parent.parent.id == "div_header"){
			var nIndex = obj.setEventHandler("onclick", this.nfn_help , this); 
		}else if(obj.id=="btn_reset" && obj.parent.parent.id == "div_header"){
			var nIndex = obj.setEventHandler("onclick", this.nfn_reset , this); 
		//grid 버튼	
		}else if(obj.id.substring(0,11)=="btn_addRow_"){
			var nIndex = obj.insertEventHandler("onclick", 0, this.nfn_addRow , this); 
		}else if(obj.id.substring(0,11)=="btn_delRow_"){
			var nIndex = obj.insertEventHandler("onclick", 0, this.nfn_delRow , this); 
		}else if(obj.id.substring(0,12)=="btn_copyRow_"){
			var nIndex = obj.insertEventHandler("onclick", 0, this.nfn_copyRow , this); 
		}else if(obj.id.substring(0,9)=="btn_xlDn_"){
			var nIndex = obj.insertEventHandler("onclick", 0, this.nfn_excelExport , this); 
		}else if(obj.id.substring(0,9)=="btn_xlUp_"){
			var nIndex = obj.insertEventHandler("onclick", 0, this.nfn_excelImport , this); 

		}else if(obj.id=="btn_favorite"){
			var nIndex = obj.setEventHandler("onclick", this.nfn_favorite , this); 
			if(this.components["div_header"]){
				var formId = obj.parent.parent.parent.name;
			}else{
				var formId = obj.parent.name;
			}
			if(this.parent.parent.popYn=="Y"){
				if(nexacro.getApplication().mainframe.VFrameSet.HFrameSet0.LeftFrame.form.ds_myMenu.findRow("PGM_ID",formId) <0){
					obj.set_cssclass("btn_WF_favorite");
				}else{
					obj.set_cssclass("btn_WF_favorite_S");
				}
				
			}else{	
				if(nexacro.getApplication().mainframe.VFrameSet.HFrameSet0.LeftFrame.form.ds_myMenu.findRow("PGM_ID",formId) <0){
					obj.set_cssclass("btn_WF_favorite");
				}else{
					obj.set_cssclass("btn_WF_favorite_S");
				}
			}
		}else if(obj.id=="btn_searchOpen" && obj.parent.parent.id == "div_header"){
			var nIndex = obj.setEventHandler("onclick", this.nfn_searchOpen_onclick , this); 
		}
		
		if(!this.nfn_isNull(this.MENU_AUTH)){
		
			this.INS_AUTH_YN = (this.MENU_AUTH).substring(0,1);
			this.QRY_AUTH_YN = (this.MENU_AUTH).substring(1,2);
			this.UPD_AUTH_YN = (this.MENU_AUTH).substring(2,3);
			this.DEL_AUTH_YN = (this.MENU_AUTH).substring(3,4);

			var btnId = obj.id;
			if(btnId.indexOf("btn_add") > -1){
				if(this.INS_AUTH_YN=="0") obj.set_enable(false);
			}else if(btnId.indexOf("btn_search") > -1){
				if(this.QRY_AUTH_YN=="0") obj.set_enable(false);
			}else if(btnId.indexOf("btn_save") > -1){
				if(this.UPD_AUTH_YN=="0" && this.INS_AUTH_YN=="0" && this.DEL_AUTH_YN=="0") obj.set_enable(false);
			}else if(btnId.indexOf("btn_del") > -1){
				if(this.DEL_AUTH_YN=="0") obj.set_enable(false);
			}
		}
	}else if(obj instanceof Static){
		/*if(obj.id == 'sta_title' ){// && obj.parent.parent.id=='div_header'){
			//var formId = obj.parent.parent.parent.name;
			var formId = this.name;
			var menuNm = nexacro.getApplication().gds_menu.lookup("PGM_ID",formId,"MENU_NM");
			obj.set_text(menuNm);
			//obj.set_width(this.nfn_getByteB(menuNm));
			obj.set_tooltiptext(menuNm);
		}else */if(obj.id.length >=8 && obj.id.substring(0,8) == 'sta_cnt_' ){
			var objDs = this.objects[obj.id.substring(8)];
			if(objDs==null){
				alert("sta_cnt_데이터셋id 확인!!!");
				return;
			}
			var nIndex = objDs.setEventHandler("onload", this.nfn_datasetOnload , this); 
		}else{
			if(obj.id=="sta_title"){
				obj.set_tooltiptext("");
			}else{	
				var tooltiptext = obj.tooltiptext;
				var dictionaryname = this.nfn_getDictionaryname(tooltiptext,true);
				if(this.gf_getLanguageType()=="ko-KR"){
					if(!this.gfn_isNull(obj.text)){
						obj.set_tooltiptext(obj.text);
					}else{
						if(!this.gfn_isNull(dictionaryname)){
							obj.set_tooltiptext(dictionaryname);
						}		
					}
				}else{
					if(!this.gfn_isNull(dictionaryname)){
						obj.set_text(dictionaryname);
						obj.set_tooltiptext(dictionaryname);
					}		
				}
			}
		}
	}else{
		if(obj instanceof Div || obj instanceof PopupDiv || obj instanceof Tabpage){
			if(!this.gfn_isNull(obj.url)) return;
			for(var i=0; i<obj.form.components.length; i++){
				subObj = obj.form.components[i];
				this.nfn_setComponent(subObj);
			}
		}else if(obj instanceof Tab){
			for(var i=0; i<obj.tabpages.length; i++){
				subObj = obj.tabpages[i];
				var tooltiptext = subObj.tooltiptext;
				var dictionaryname = this.nfn_getDictionaryname(tooltiptext,true);
				if(this.gf_getLanguageType()=="ko-KR"){
					if(!this.gfn_isNull(obj.text)){
						subObj.set_tooltiptext(obj.text);
					}else{
						if(!this.gfn_isNull(dictionaryname)){
							subObj.set_tooltiptext(dictionaryname);
						}		
					}
				}else{
					if(!this.gfn_isNull(dictionaryname)){
						subObj.set_text(dictionaryname);
						subObj.set_tooltiptext(dictionaryname);
					}		
				}	
				this.nfn_setComponent(subObj);
			}
		}else if(obj instanceof Edit || obj instanceof MaskEdit
				|| obj instanceof Calendar || obj instanceof TextArea){//  || obj instanceof CheckBox || obj instanceof Radio
			//if(this.gfn_isNull(obj.tooltiptex)) obj.set_tooltiptext(obj.value);
			var nIndex = obj.addEventHandler("onmouseenter", this.nfn_setEditToolTipText , this); 
			if(obj instanceof MaskEdit){
				obj.set_maskchar(" ");
//				if(!obj.enable || obj.readonly){
//					var nIndex = obj.addEventHandler("onrbuttonup", this.nfn_obj_onrbuttonup , this); 
//				}
			}else if(obj instanceof Edit){
/*20220216 Modify edit 오른쪽에 clear이미지 추가 제외
				if(obj.enable && obj.visible && this.gfn_isNull(this.gf_getPdaWorkType()) && !obj.readonly ){
					var vLeft = obj.getOffsetRight()-18;
					var vTop =	obj.getOffsetTop()+1;
					var objButton = new Button("btn_"+obj.name, vLeft, vTop, 16, 18, null, null);
					objButton.set_cssclass("btn_WF_inputDel");
					objButton.set_left(obj.name+":-18");
					obj.parent.addChild("btn_"+obj.name, objButton); 
					var nIndex = objButton.addEventHandler("onclick", this.nfn_editBtnClear , this); 
					objButton.show(); 
					if( obj.textAlign == 'right'){
						obj.set_padding('0px 20px 0px 0px');
					}
				}
*/
//				if(!obj.enable || obj.readonly){
//					var nIndex = obj.addEventHandler("onrbuttonup", this.nfn_obj_onrbuttonup , this); 
//				}
			}else if(obj instanceof TextArea){
/*20220216 Modify textarea 오른쪽에 clear이미지 추가 제외
				if(obj.enable && obj.visible){
					var vLeft = obj.getOffsetRight()-18;
					var vTop =	obj.getOffsetTop()+1;
					var objButton = new Button("btn_"+obj.name, vLeft, vTop, 16, 18, null, null);
					objButton.set_cssclass("btn_WF_inputDel");
					objButton.set_left(obj.name+":-18");
					obj.parent.addChild("btn_"+obj.name, objButton); 
					var nIndex = objButton.addEventHandler("onclick", this.nfn_textAreaBtnClear , this); 
					objButton.show(); 
				}
*/
//				if(!obj.enable || obj.readonly){
//					var nIndex = obj.addEventHandler("onrbuttonup", this.nfn_obj_onrbuttonup , this); 
//				}
				
			}else if(obj instanceof Calendar){
//				obj.style.set_align("center middle");
				var df = obj.dateformat;				
				if(!this.gfn_isNull(df) && df.substr(0,10) != "yyyy-MM-dd"){
					obj.set_dateformat("yyyy-MM-dd");
					obj.set_editformat("yyyy-MM-dd");
				}
//				if(!obj.enable || obj.readonly){
//					var nIndex = obj.addEventHandler("onrbuttonup", this.nfn_obj_onrbuttonup , this); 
//				}
			}
		}else{
			var tooltiptext = obj.tooltiptext;
			var dictionaryname = this.nfn_getDictionaryname(tooltiptext,true);
			if(this.gf_getLanguageType()=="ko-KR"){
				if(!this.gfn_isNull(obj.text)){
					obj.set_tooltiptext(obj.text);
				}else{
					if(!this.gfn_isNull(dictionaryname)){
						obj.set_tooltiptext(dictionaryname);
					}		
				}
			}else{
				if(!this.gfn_isNull(dictionaryname)){
					obj.set_text(dictionaryname);
					obj.set_tooltiptext(dictionaryname);
				}		
			}
		}
	}
	
}
/*******************************************************************************
 * 기능 : 그리드 onheadclick 시 전체선택/해제,  정렬 
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_grd_onheadclick = function(obj, e)
{	
	if(!this.boolOnheadclick) return;
	// Grid 전체선택/해제(Header에 checkbox있는 Grid에만 추가
	this.gfn_setGridCheckAll(obj, e);	
	
	// Grid 정렬
	this.gfn_ProcGrdSort(obj, e.cell);

}

/*******************************************************************************
 * nfn_grd_onrbuttondown
 * 기능 : 그리드 onrbuttondown 시 menu
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_grd_onrbuttondown = function(obj, e)
{	
	if(e.row<0) return;

	/* Form 에서 Grid Cell 기준으로 위치얻기 */
	var objRect = obj.getCellRect(e.row, e.cell);

	/* cell 기준 position으로 클라이언트 기준 X, Y 좌표를 스크린 기준 기준으로 바꾸어 위치얻기 */
	var nLeft = system.clientToScreenX(obj, objRect.left);
	var nTop = system.clientToScreenY(obj, objRect.bottom);

	/* 스크린 기준 X, Y 좌표를 클라이언트 기준으로 바꾸어 위치얻기 */
	nLeft = system.screenToClientX(nexacro.getApplication().mainframe, nLeft);
	nTop = system.screenToClientY(nexacro.getApplication().mainframe, nTop);
	
	obj.setCellProperty("Body",e.cell,"edittype","none");
	var editType = obj.getCellProperty("Body",e.cell,"edittype");
	obj.setCellProperty("Body",e.cell,"edittype","none");
	var obsDs = obj.getBindDataset();
	
	//if(this.components["pdv_grdMenu"]) this.components["pdv_grdMenu"].destroy();
	if(this.components["pdv_grdMenu"]==null){
		var objPopupDiv = new PopupDiv();
		if(this.objects["ds_grdMenu"])
			var cnt = this.ds_grdMenu.getCaseCount("GRD_NM=='"+obj.id+"'");
		else
			var cnt = 0;
		
		objPopupDiv.init("pdv_grdMenu",e.clientx, e.clienty, 123, 202 + 26 * cnt);
		objPopupDiv.form.objGrdNm = obj.id;
		objPopupDiv.form.colFixYn = obsDs.getColumn(0,"COL_FIX_YN");
		objPopupDiv.set_url("common::com_grdMenu.xfdl"); 
		this.addChild("pdv_grdMenu", objPopupDiv);
		objPopupDiv.show();
//		objPopupDiv.trackPopup(e.screenx, e.screeny-70,  objPopupDiv.width, objPopupDiv.height, "fn_Callback_pdv_grdMenu");
		objPopupDiv.trackPopup(nLeft, nTop,  objPopupDiv.width, objPopupDiv.height, "fn_Callback_pdv_grdMenu");
	}else{
		var objPopupDiv = this.components["pdv_grdMenu"];
		if(this.objects["ds_grdMenu"])
			var cnt = this.ds_grdMenu.getCaseCount("GRD_NM=='"+obj.id+"'");
		else
			var cnt = 0;
		objPopupDiv.trackPopup(nLeft, nTop, objPopupDiv.width, 202 + 26 * cnt, "fn_Callback_pdv_grdMenu");
		objPopupDiv.form.objGrdMenu = obj;
		objPopupDiv.form.objGrdNm = obj.id;
		objPopupDiv.form.objDsNm = obj.binddataset;
		objPopupDiv.form.objGrdMenuRow = e.row;
		objPopupDiv.form.objGrdMenuCell = e.cell;
		objPopupDiv.form.objGrdMenuCol = e.col;
		objPopupDiv.form.colFixYn = obsDs.getColumn(0,"COL_FIX_YN");
		objPopupDiv.form.reload();
	}
	objPopupDiv.form.objGrdMenu = obj;
	objPopupDiv.form.objDsNm = obj.binddataset;
	objPopupDiv.form.objGrdMenuRow = e.row;
	objPopupDiv.form.objGrdMenuCell = e.cell;
	objPopupDiv.form.objGrdMenuCol = e.col;
	objPopupDiv.form.colFixYn = obsDs.getColumn(0,"COL_FIX_YN");
	obj.setCellProperty("Body",e.cell,"edittype",editType);
	
	//trace("row-->"+objPopupDiv.form.objGrdMenuRow);
	//trace("col-->"+objPopupDiv.form.objGrdMenuCol);
}

/*******************************************************************************
 * nfn_grd_onexpandup
 * 기능 : 그리드 onexpandup시 
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_grd_onexpandup = function(obj, e)
{	
	/* Form 에서 Grid Cell 기준으로 위치얻기 */
	var objRect = obj.getCellRect(e.row, e.cell);

	/* cell 기준 position으로 클라이언트 기준 X, Y 좌표를 스크린 기준 기준으로 바꾸어 위치얻기 */
	var nLeft = system.clientToScreenX(obj, objRect.left);
	var nTop = system.clientToScreenY(obj, objRect.bottom);

	/* 스크린 기준 X, Y 좌표를 클라이언트 기준으로 바꾸어 위치얻기 */
	nLeft = system.screenToClientX(nexacro.getApplication().mainframe, nLeft);
	nTop = system.screenToClientY(nexacro.getApplication().mainframe, nTop);
	
	this.boolOnheadclick = true;
	if(e.row ==  -1){
		var objDs = obj.getBindDataset();//this.objects[obj.binddataset];
		var colNm = this.gfn_getBindColName(obj,e.col);//obj.getCellProperty("Body", e.cell, "text").replace("bind:","");
		var objColInfo = objDs.getColumnInfo(colNm);
		if(this.gfn_isNull(objColInfo)) return;
		obj.setCellProperty("head",e.cell,"expandimage","theme://images/grd_head_icon11_F.png");
		obj.setCellProperty("head",e.cell,"expandshow","show");
		obj.setCellProperty("head",e.cell,"expandsize","23");
		
//		trace("objColInfo-->"+objColInfo.type);
		if(this.components["pdv_filter"]==null){
			var objPopupDiv = new PopupDiv();
			objPopupDiv.init("pdv_filter", e.screenx, e.screeny, 250,300);
			if("INT,FLOAT,BIGDECIMAL".indexOf(objColInfo.type)<0)
				objPopupDiv.set_url("common::com_filter.xfdl"); 
			else
				objPopupDiv.set_url("common::com_filterNum.xfdl"); 
			
			this.addChild("pdv_filter", objPopupDiv);
			objPopupDiv.set_cssclass("pdiv_POP");
			objPopupDiv.show();
			objPopupDiv.trackPopup( nLeft, nTop,250,300, "fn_Callback_pdv_filter");
//			objPopupDiv.trackPopup( e.screenx, e.screeny-70,250,300, "fn_Callback_pdv_filter");

		}else{
			var objPopupDiv = this.components["pdv_filter"];
//			objPopupDiv.trackPopup( e.screenx, e.screeny-70, objPopupDiv.width, objPopupDiv.height, "fn_Callback_pdv_filter");
			objPopupDiv.trackPopup(  nLeft, nTop, objPopupDiv.width, objPopupDiv.height, "fn_Callback_pdv_filter");
			if("INT,FLOAT,BIGDECIMAL".indexOf(objColInfo.type)<0)
				objPopupDiv.set_url("common::com_filter.xfdl"); 
			else
				objPopupDiv.set_url("common::com_filterNum.xfdl"); 

			objPopupDiv.form.objGrd = obj;
			objPopupDiv.form.objGrdCell = e.cell;
			objPopupDiv.form.objGrdCol = e.col;
			objPopupDiv.form.objDsNm = obj.binddataset;
			objPopupDiv.form.reload();
		}
		objPopupDiv.form.objGrd = obj;
		objPopupDiv.form.objGrdCell = e.cell;
		objPopupDiv.form.objGrdCol = e.col;
		objPopupDiv.form.objDsNm = obj.binddataset;
		this.boolOnheadclick = false;
		var nIndex = objPopupDiv.setEventHandler("oncloseup", this.pdv_filter_oncloseup , this); 
		return false;
	}
}

pForm.fn_Callback_pdv_grdMenu = function ()
{
	trace("fn_Callback_pdv_grdMenu");
	//this.parent.parent.pdv_grdMenu.destroy();

};
pForm.pdv_filter_oncloseup = function(obj, e)
{
	trace("pdv_filter_oncloseup");
	trace("objGrd-->"+obj.form.objGrd);
	trace("objGrdCol-->"+obj.form.objGrdCol);
	trace("filterCols-->"+obj.form.filterCols);
	var grdObj = obj.form.objGrd;	//this.nfn_getComponent(this, obj.form.objGrd.name, Grid);
	for(var i=0; i<grdObj.getCellCount("head"); i++){
		var col = grdObj.getCellProperty("head", i, "col");
		if(this.gfn_isNull(grdObj.getCellProperty("Body", col, "text"))) continue;
		
		var colId = grdObj.getCellProperty("Body", col, "text").replace("bind:","");
		//trace("colId-->"+colId);
		if(obj.form.filterCols == colId){
			grdObj.setCellProperty("head",e.cell,"expandimage","theme://images/grd_head_icon11_N.png");
			grdObj.setCellProperty("head",i,"expandsize","24");
			grdObj.setCellProperty("head",i,"expandshow","show");
		}else{
			grdObj.setCellProperty("head",i,"expandsize","23");
			grdObj.setCellProperty("head",i,"expandshow","hide");
			
		}	
			
	} 	
};

/*******************************************************************************
 * nfn_grd_onf4keydown
 * 기능 : 그리드 셀 선택후 f4 키다운시 복사창 팝업
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_grd_onkeydown = function(obj, e)
{
	if(obj.currentrow<0) return;
	if(obj.getCurEditType()!="none") return;
	
	var dsObj = obj.getBindDataset();
	var browser = system.navigatorname;
	if(e.ctrlkey){
		if(e.keycode == 67){
			var content = obj.getCellText(obj.currentrow,obj.currentcell)
			if(browser == "IE"){
				system.clearClipboard();
				system.setClipboard("CF_TEXT",content);	
			}else{
				system.clearClipboard();
				system.setClipboard("CF_TEXT",content);	
				var oArg = {arg_content:content};
				this.gfn_openPopup("com_copy","common::com_copy.xfdl",oArg,"");	
			}
		}
		/*
		if(e.keycode == 86){
			trace("ctrl+v....");
			this.gfn_clipboardPaste(obj);
		}
		*/	
	}
	
/*
	var bPushedCtrlKey = e.ctrlKey;
	//trace("bPushedCtrlKey::"+bPushedCtrlKey);
	//trace("e.keycode::"+e.keycode);
	if(!bPushedCtrlKey) return;   //ctrl

	if(e.keycode == 81){	//q
		var content  =  obj.getCellText(obj.currentrow, obj.currentcell); 
		
		var browser = system.navigatorname;
		trace(browser);
		if(browser == "IE"){
		trace(browser);
			system.clearClipboard();
			system.setClipboard("CF_TEXT",content);	
			return;
		}

		var oArg = {arg_content:content};
		this.gfn_openPopup("com_copy","common::com_copy.xfdl",oArg,"");		
	}
*/
	/*
	if(e.ctrlKey && e.keycode == 65)
	{
		//그리드 데이터 전체선택
		this.gfn_grdAll(obj);
	}
	//복사(Ctrl + C), 붙여넣기(Ctrl + V) 키입력처리 공통함수 호출
	this.gfn_grdCopy_Paste(obj, e);	
	*/
}

/*******************************************************************************
 * nfn_obj_onrbuttonup
 * 기능 : 더블클릭시 복사창 팝업
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_obj_onrbuttonup = function(obj, e)
{
	var browser = system.navigatorname;
	
	if(obj.enable) return;
	if(this.gfn_isNull(obj.value)) return;
	var content = obj.value;
	if(browser == "IE"){
		system.clearClipboard();
		system.setClipboard("CF_TEXT",content);	
	}else{
		var oArg = {arg_content:content};
		this.gfn_openPopup("com_copy","common::com_copy.xfdl",oArg,"");	
	}
	
}

/*******************************************************************************
 * nfn_setGridToolTipText
 * 기능 : 그리드 셀의 tooltiptext diplay
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_setGridToolTipText = function(objGrid){
	for(var i=0; i<objGrid.getCellCount("Body"); i++){
		var text = objGrid.getCellProperty("Body",i,"text");
		//trace("text-->"+text);
		if(!this.gfn_isNull(text)){
			var headText = this.nfn_getDictionaryname(text.replace("bind:", ""),true);
			//trace("headText-->"+headText);
			if(!this.gfn_isNull(headText)){
				if(this.gf_getLanguageType()=="ko-KR"){
					if(this.gfn_isNull(objGrid.getCellProperty("Head", i, "tooltiptext")))
						objGrid.setCellProperty("Head", i, "tooltiptext" , headText);	
				}else{
					objGrid.setCellProperty("Head", i, "text" , headText);	
					objGrid.setCellProperty("Head", i, "tooltiptext" , headText);	
				}
			}
		}	
		var expandshow = objGrid.getCellProperty("Body",i,"expandshow");
		if(expandshow == "show" && this.gfn_isNull(objGrid.getCellProperty("Body",i,"expandimage"))){
			objGrid.setCellProperty("Body",i,"expandimage","theme://images/grd_expand.png");
			objGrid.setCellProperty("Body",i,"expandsize","24");
		}
		if("normal,text,number,date,combo".indexOf(objGrid.getCellProperty("Body",i,"displaytype"))>-1){
			if(this.gfn_isNull(objGrid.getCellProperty("Body",i,"tooltiptext"))){
			    
			    // 2018.09.27일 넥사크로 패치내용 반영
			    var expr = "expr:comp.getCellText(currow, " + i + ")";			     
				objGrid.setCellProperty("Body", i, "tooltiptext" , expr);							    
				
				//objGrid.setCellProperty("Body",i,"tooltiptext",objGrid.getCellText("Body",i,"text"));
			}
		}
		
	}

}

/*******************************************************************************
 * nfn_grd_onmousemove
 * 기능 : 그리드 셀의 tooltiptext diplay
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_grd_onmousemove = function(obj, e){
	this.boolOnheadclick = true;
	var maxRowspan = 1;
	for(var i=0; i<obj.getCellCount("head"); i++){
		if(obj.getCellProperty("head",i,"expandsize")=="23")
			obj.setCellProperty("head",i,"expandshow","hide");
		
		if(obj.getCellProperty("head",i,"rowspan") > maxRowspan) maxRowspan = obj.getCellProperty("head",i,"rowspan");
			
	} 
	if(e.row== -1){
		if(obj.getCellProperty("Head", e.cell, "displaytype")=="checkboxcontrol"){
			return;
		}
		if(maxRowspan == 1){
			obj.setCellProperty("head",e.cell,"expandimage","theme://images/grd_head_icon11_N.png");
			if(obj.getCellProperty("head",e.cell,"expandsize")!="24") obj.setCellProperty("head",e.cell,"expandsize","23");
			obj.setCellProperty("head",e.cell,"expandshow","show");
		}else if(nexacro.toNumber(obj.getCellProperty("head",e.cell,"rowspan"))>1){
			obj.setCellProperty("head",e.cell,"expandimage","theme://images/grd_head_icon11_N.png");
			if(obj.getCellProperty("head",e.cell,"expandsize")!="24") obj.setCellProperty("head",e.cell,"expandsize","23");
			obj.setCellProperty("head",e.cell,"expandshow","show");
		}else{
			if(obj.getCellProperty("head",e.cell,"row")==1){
				obj.setCellProperty("head",e.cell,"expandimage","theme://images/grd_head_icon11_N.png");
				if(obj.getCellProperty("head",e.cell,"expandsize")!="24") obj.setCellProperty("head",e.cell,"expandsize","23");
				obj.setCellProperty("head",e.cell,"expandshow","show");
			}
		}
	}else{
		if(obj.getCellProperty("head",e.cell,"expandsize")=="23")
			obj.setCellProperty("head",e.cell,"expandshow","hide");
	}	
}
pForm.nfn_grd_onmouseleave = function(obj, e){
	this.boolOnheadclick = true;
	for(var i=0; i<obj.getCellCount("head"); i++){
		if(obj.getCellProperty("head",i,"expandsize")=="23")
			obj.setCellProperty("head",i,"expandshow","hide");
	} 
}


/*******************************************************************************
 * nfn_setEditToolTipText
 * 기능 : obj의 set tooltiptext 
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_setEditToolTipText = function(obj, e){
	obj.set_tooltiptext(obj.text);
}
pForm.nfn_setCmbToolTipText = function(obj, e){
	obj.set_tooltiptext(obj.text);
}
/*******************************************************************************
 * 기능 : 초기화 btn 클릭하였을 경우 div_search안에 있는 objects 초기화
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_clear = function(obj,  e){
	var parentObj = obj.parent;
	//this.nfn_clearAllInDiv(parentObj);
	
	
	/* //20220216 Modify 초기화버튼 클릭시 조회조건 div만 초기화 되도록 수정
	for(var i=0; i<parentObj.components.length; i++){
		currObj = parentObj.components[i];
		//trace("obj-->"+obj);
		// css 초기화
		this.nfn_cssClear(currObj);
	}*/

    this.nfn_cssClear(parentObj.components["div_search"])
	
	this.fn_searchClear(obj, e);
}
/*******************************************************************************
 * nfn_clearInDiv
 * 기능 : 해당 div 내 초기화 
 * 진성하
 * Paramether  : objDiv - div
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_clearInDiv = function(objDiv,strObjList){
	for(var i=0; i<objDiv.form.components.length; i++){
		obj = objDiv.form.components[i];
		if(!this.gfn_isNull(strObjList) && strObjList.indexOf(obj.id)<0) continue;
		if(obj instanceof Edit || obj instanceof MaskEdit || obj instanceof TextArea || obj instanceof Calendar){ 
			obj.set_value(null);
		}else if(obj instanceof Combo){
			if(this.gfn_isNull(obj.innerdataset) || this.gfn_isNull(obj.datacolumn)) continue;
			var objDs = obj.getInnerDataset();
			if(objDs.findRow(obj.datacolumn,'선택')>-1) obj.set_text('선택');
			else if(objDs.findRow(obj.datacolumn,'전체')>-1) obj.set_text('전체');
			else obj.set_index(0);
		}else if(obj instanceof CheckBox){
		}else if(obj instanceof Grid){
			var objDs = obj.getInnerDataset();
			objDs.clearData();
		}else if(obj instanceof Div && obj.url=="common::com_monthCalendar.xfdl"){
			obj.msk_month.set_value(null);
		}
	}
}

/*******************************************************************************
 * nfn_clearInDivExcept
 * 기능 : 해당 div 내 strObjList 제외 초기화 
 * 진성하
 * Paramether  : objDiv - div
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_clearInDivExcept = function(objDiv,strObjList){
	for(var i=0; i<objDiv.form.components.length; i++){
		obj = objDiv.form.components[i];
		if(strObjList.indexOf(obj.id)>-1) continue;
		//trace("obj.id-->"+obj.id);
		if(obj instanceof Edit || obj instanceof MaskEdit || obj instanceof TextArea || obj instanceof Calendar){ 
			obj.set_value(null);
		}else if(obj instanceof Combo){
			if(this.gfn_isNull(obj.innerdataset) || this.gfn_isNull(obj.datacolumn)) continue;
			var objDs = obj.getInnerDataset();
			if(objDs.findRow(obj.datacolumn,'선택')>-1) obj.set_text('선택');
			else if(objDs.findRow(obj.datacolumn,'전체')>-1) obj.set_text('전체');
			else obj.set_index(0);
		}else if(obj instanceof CheckBox){
			obj.set_value("0");
		}else if(obj instanceof Div && obj.url=="common::com_monthCalendar.xfdl"){
			obj.msk_month.set_value(null);
		}
	}
}
/*******************************************************************************
 * 기능 : 초기화 btn 클릭하였을 경우 div_search안에 있는 objects 초기화
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_clearAllInDiv = function(objDiv){
	for(var i=0; i<objDiv.form.components.length; i++){
		obj = objDiv.form.components[i];
		if(obj instanceof Edit || obj instanceof TextArea || obj instanceof Calendar){ 
			obj.set_value(null);
		}else if(obj instanceof MaskEdit){
			obj.set_value(null);
		}else if(obj instanceof Combo){
			if(this.gfn_isNull(obj.innerdataset) || this.gfn_isNull(obj.datacolumn)) continue;
			obj.set_index(0);
			if(!this.gfn_isNull(obj.innerdataset)){
				var objDs = obj.getInnerDataset();
				if(objDs.findRow(obj.datacolumn,'선택')>-1) obj.set_text('선택');
				else if(objDs.findRow(obj.datacolumn,'전체')>-1) obj.set_text('전체');
				else obj.set_index(0);
			}
		}else if(obj instanceof CheckBox){
			obj.set_value("0");
		}else if(obj instanceof Div && obj.url=="common::com_monthCalendar.xfdl"){
			obj.msk_month.set_value(null);
		}
		// css 초기화
		this.nfn_cssClear(obj);
		
	}
}

/*******************************************************************************
 * nfn_resetDivWork
 * 기능 : 초기화 btn 클릭하였을 경우 div_search안에 있는 objects 초기화
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_resetDivWork = function(obj){
	//trace("reset obj-->"+obj.name);
	
	if(obj instanceof Div || obj instanceof Tabpage){
		obj = obj.form; 
		var subObj;
		for(var i=0; i<obj.components.length; i++){
			objSub = obj.components[i];
			if(objSub instanceof Grid){
				this.gfn_ClearSortMark(objSub, "" ,true);
				if(this.gfn_isNull(objSub.binddataset)) continue;
				var objDs = objSub.getBindDataset();//this.objects[objSub.binddataset];
				objDs.clearData();
			}else if(objSub instanceof Div ){
				objSub = obj.components[i];
				if(objSub.id != "div_month") objSub.setFocus();
				this.nfn_resetDivWork(objSub);
			}else if(objSub instanceof Tab ){
				this.nfn_resetDivWork(objSub);
			}else{
				//this.nfn_setEssential(objSub);
			}
		}		
	}
	else if(obj instanceof Tab)
	{
		for(var i=0; i<obj.tabpages.length; i++){
			var tabpageObj = obj.tabpages[i];
			this.nfn_resetDivWork(tabpageObj);
		}		
	}
}
/*******************************************************************************
 * nfn_clearObj
 * 기능 : 초기화 btn 클릭하였을 경우 div 또는 tab_search안에 있는 objects 초기화
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_clearObj = function(obj){
	if(obj instanceof Edit || obj instanceof TextArea || obj instanceof Calendar){ 
		obj.set_value(null);
	}else if(obj instanceof MaskEdit){
		obj.set_value(null);
	}else if(obj instanceof Combo){
		if(this.gfn_isNull(obj.innerdataset) || this.gfn_isNull(obj.datacolumn)) return;
		obj.set_index(0);
		if(!this.gfn_isNull(obj.innerdataset)){
			var objDs = obj.getInnerDataset();
			if(objDs.findRow(obj.codecolumn,'SEL')>-1) obj.set_text('선택');
			else if(objDs.findRow(obj.codecolumn,'ALL')>-1) obj.set_text('전체');
			else obj.set_index(0);
		}
	}else if(obj instanceof CheckBox){
		obj.set_value("0");
	}else if(obj instanceof Div && obj.url=="common::com_monthCalendar.xfdl"){
		obj.msk_month.set_value(null);
	}
}

/*******************************************************************************
 * nfn_search
 * 기능 : 조회시 그리드의  sort mark 지우기 &  fn_search 
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_search = function(obj,  e){
	var objBtnNm = "btn_xxxxx";
	if(this.all[objBtnNm])
	{
		var objRemove = this.removeChild(objBtnNm);
		objRemove.destroy();
		objRemove = null;
	}

	var objButton = new Button();
	objButton.set_name(objBtnNm);
	this.addChild(objBtnNm, objButton);

	this.fn_search(objButton, e);
	if(this.components["tab_work"]) this.nfn_setFromSearch(this.tab_work);
	if(this.components["div_work"]) this.nfn_setFromSearch(this.div_work);

}

/*******************************************************************************
 * nfn_setFromSearch
 * 기능 : 조회시 그리드의  sort mark 지우기
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_setFromSearch = function(obj){
	if(obj instanceof Div || obj instanceof Tabpage){
		var bReset = false;
		if(obj instanceof Tabpage){
			var tabIdx = obj.parent.tabindex;
			if(obj.parent.tabpages[tabIdx].name == obj.name) bReset = true; 
		}
		obj = obj.form; 
		var subObj;
		for(var i=0; i<obj.components.length; i++){
			objSub = obj.components[i];
			if(objSub instanceof Grid){
				this.gfn_ClearSortMark(objSub, "", bReset);
			}else if(objSub instanceof Div ){
				objSub = obj.components[i];
				//if(objSub.id != "div_month") objSub.setFocus();
				this.nfn_setFromSearch(objSub);
			}else if(objSub instanceof Tab ){
				this.nfn_setFromSearch(objSub);
			}else{
				//this.nfn_setEssential(objSub);
			}
		}		
	}
	else if(obj instanceof Tab)
	{
		for(var i=0; i<obj.tabpages.length; i++){
			var tabpageObj = obj.tabpages[i];
			this.nfn_setFromSearch(tabpageObj);
		}		
	}

	
}

/*******************************************************************************
 * nfn_save
 * 기능 : cssclass=="essential_error" -> essential로 초기화 &  fn_save
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_save = function(obj,  e){
	for(var i=0; i<this.components.length; i++){
		obj = this.components[i];
		this.nfn_setEssential(obj);
	}
	var bOK = this.gfn_Message("InfoPopupSave", null, "conf", "yesno");//nexacro.getApplication().confirm("저장하시겠습니까?");
	if (bOK == false) return;
	
	this.fn_save(obj, e);
}

/*******************************************************************************
 * nfn_delete
 * 기능 : 삭제 alert &  fn_delete
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_delete = function(obj,  e){
	var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");//nexacro.getApplication().confirm("저장하시겠습니까?");
	if (bOK == false) return;
	
	this.fn_delete(obj, e);
}

/*******************************************************************************
 * nfn_help
 * 기능 : help 버튼 공통
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_help = function(obj,  e){
	var formId = this.name;
	
	var jobSysCd = "CMD"; //업무구분코드 CMD,BAS....
    var subDir = "manual";	
    var atchSrcKey = nexacro.getApplication().gds_menu.lookup("PGM_ID",formId,"MENU_ID");
    var tableName = "MANUAL";
    var desc = "manual";
    var fileCnt = "1"; // 업로드 수
    var oArg = {arg_jobSysCd:jobSysCd,arg_atchSrcKey:atchSrcKey ,arg_tableName:tableName ,arg_desc:desc, arg_subDir:subDir, arg_fileCnt:fileCnt};
    this.gfn_openPopup("file_download","cmd::CMSA01310P.xfdl",oArg,"");	
}

/*******************************************************************************
 * nfn_reset
 * 기능 : reset 버튼 공통
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_reset = function(obj,  e){
	this.reload();
	//if(this.components["div_work"]) this.nfn_resetDivWork(this.div_work);
	//if(this.components["tab_work"]) this.nfn_resetDivWork(this.tab_work);
}


/*******************************************************************************
 * nfn_editBtnClear
 * 기능 : nfn_editBtnCleart
 * 진성하
 * Paramether  : 
 * 특이사항 : enable일 경우 clear , readonly 관계없이 clear
*******************************************************************************/
pForm.nfn_editBtnClear = function(obj,  e){
	var editName = obj.id.substring(4);
	var objEdit = eval("obj.parent."+editName);
	if(objEdit != null && objEdit.enable ){
		objEdit.set_value("");
	}
	var objEdit = eval("obj.parent."+editName+"_id");
	if(objEdit != null ){
		objEdit.set_value("");
	}
	var objEdit = eval("obj.parent."+editName+"_cd");
	if(objEdit != null ){
		objEdit.set_value("");
	}
	var objEdit = eval("obj.parent."+editName+"_nm");
	if(objEdit != null ){
		objEdit.set_value("");
	}
}

/*******************************************************************************
 * nfn_textAreaBtnClear
 * 기능 : nfn_textAreaBtnClear
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_textAreaBtnClear = function(obj,  e){
	var objName = obj.id.substring(4);
	var objTextArea = eval("obj.parent."+objName);
	if(objTextArea != null && objTextArea.enable ){
		objTextArea.set_value("");
	}
}

/*******************************************************************************
 * nfn_datasetOnload
 * 기능 : dataset count
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_datasetOnload = function(obj,  e){
	var objSta = this.nfn_getComponent(this,"sta_cnt_"+obj.id,Static);
	var cnt = this.nfn_numberWithCommas(obj.rowcount);
	//cnt = cnt.replace(',','\,');
	var strCnt = 'Count : <fc v="#f31d24">'+cnt+'</fc><fc v="#999999"></fc>'
//	trace("cnt.."+strCnt);
	if(objSta != null) objSta.set_text(strCnt);
}

/*******************************************************************************
 * nfn_favorite
 * 기능 : 즐겨찾기 추가
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_favorite = function(obj,  e){
	var aMenuId = this.gfn_getActiveMenuId();
//trace("aMenuId-->"+aMenuId);	
	var sAppId = nexacro.getApplication().id.toLowerCase(); //업무코드(소문자)
	var aPageUrl = nexacro.getApplication().gds_menu.lookup("MENU_ID", aMenuId, "PAGE_URL");
	var favoriteId = gv_appLeftFrame.form.ds_myMenu.lookup("FAVORITES_MENU_ID", aMenuId, "FAVORITES_ID");
	var addIdx = 1;
	
	if(!this.gfn_isNull(aMenuId))
	{	/*
		var myRowCount = gv_appLeftFrame.form.ds_myMenu.getRowCount();
		
		for(var i=0; i<myRowCount ; i++)
		{
			var tempId = gv_appLeftFrame.form.ds_myMenu.getColumn(i , "MENU_ID");
			
			if(tempId == aMenuId)
			{
				this.gfn_Message("HaveFavoriteMenu", aMenuId, "error", "ok");//this.alert("이미 등록된 메뉴입니다.");
				addIdx = 0;
			}
		}
		*/
		if(obj.cssclass == "btn_WF_favorite")
		{
			if(!this.gfn_isNull(favoriteId)){
				this.gfn_Message("HaveFavoriteMenu", aMenuId, "error", "ok");//this.alert("이미 등록된 메뉴입니다.");
				return;
			}

			var aMvmnUrl = "/" + sAppId + "/index.html?formUrl=" + aPageUrl;
			if(this.parent.parent.popYn=="Y"){
				nexacro.getApplication().mainframe.VFrameSet.HFrameSet0.LeftFrame.form.fn_addMyMenu(aMenuId, aMvmnUrl);
			}else{
				gv_appLeftFrame.form.fn_addMyMenu(aMenuId, aMvmnUrl);
			}
			obj.set_cssclass("btn_WF_favorite_S");
		}else{
			var bOK = this.gfn_Message("DeleteFavorite", null, "conf", "yesno");//nexacro.getApplication().confirm("즐겨찾기 삭제하시겠습니까?");
			if (bOK == false) return;

			if(this.parent.parent.popYn=="Y"){
				nexacro.getApplication().mainframe.VFrameSet.HFrameSet0.LeftFrame.form.fn_delMyMenu(favoriteId);
			}else{
				gv_appLeftFrame.form.fn_delMyMenu(favoriteId);
			}
			obj.set_cssclass("btn_WF_favorite");
		}
	}
	else
	{
//		this.alert("열려있는 화면이 없습니다.");	/메뉴를 찾을 수 없습니다. {0}
		this.gfn_Message("MenuNotFound", aMenuId, "error", "ok");
 	}
}


/*******************************************************************************
 * nfn_addRow, nfn_delRow, nfn_copyRow
 * 기능 : grid 버튼 공통
 * 진성하
 * Paramether  : 
 * 특이사항 : grid row add
*******************************************************************************/
pForm.nfn_addRow = function(obj){
	var dsObj = this.objects[obj.id.substring(11)];
	if(dsObj == null){
		alert("btn_addRow_데이터셋id 확인!!!");
		return;
	}
	var row = dsObj.addRow();
	dsObj.setColumn(row,"VALIDSTATE","Valid");
	dsObj.setColumn(row,"USE_YN","Y");
//	var objFunc = obj.getEventHandler( "onclick", 1 );
//	trace("objFunc-->"+objFunc);
//	if(!this.gfn_isNull(obj.eventKeyFunc)) this.lookupFunc(obj.eventKeyFunc).call();
}

pForm.nfn_delRow = function(obj){
	var dsObj = this.objects[obj.id.substring(11)];
	if(dsObj == null){
		alert("btn_delRow_데이터셋id 확인!!!");
		return;
	}
	var cnt = 0;
	if(this.nfn_getCntOfColNm(dsObj, "CHK")){
		for(var i=dsObj.rowcount-1; i>=0; i--){
			if(dsObj.getColumn(i,"CHK")=="1"){
				if(cnt==0){
					var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");//nexacro.getApplication().confirm("삭제하시겠습니까?");
					if (bOK == false) return;
				}
				dsObj.deleteRow(i);
				cnt++;
			}
		}
	}else{
		if(dsObj.rowposition<0) return;
		var nRowType = dsObj.getRowType(dsObj.rowposition);
		if(nRowType==1 || nRowType==4){ //초기 행의 상태, 수정된 행의 상태
			var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");//nexacro.getApplication().confirm("삭제하시겠습니까?");
			if (bOK == false) return;
		}
		dsObj.deleteRow(dsObj.rowposition);
	}
	if(!this.gfn_isNull(obj.eventKeyFunc)) this.lookupFunc(obj.eventKeyFunc).call();
}

pForm.nfn_copyRow = function(obj){
	var dsObj = this.objects[obj.id.substring(12)]
	if(dsObj == null){
		alert("btn_copyRow_데이터셋id 확인!!!");
		return;
	}
	//var row = dsObj.insertRow(dsObj.rowposition+1);
	//dsObj.copyRow(row, dsObj, dsObj.rowposition-1);
	var currow = dsObj.rowposition;
	if(currow < 0) return;
	var toRow = dsObj.addRow();
	dsObj.copyRow(toRow, dsObj, currow);
	dsObj.setRowType(toRow, Dataset.ROWTYPE_INSERT);

}


/*******************************************************************************
 * nfn_excelExport
 * 기능 : 엑셀내보내기 버튼 공통
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_excelExport = function(obj,  e){
	var sGrdName = sFileName= obj.id.substring(9);
	this.gfn_export_excel2(sGrdName, "Sheet1", sFileName, "EXCEL");
}
/*******************************************************************************
 * nfn_excelImport
 * 기능 : 엑셀가져오기 버튼 공통
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_excelImport = function(obj,  e){
	var grdName = obj.id.substring(9);
	var comp = this.nfn_getComponent(this, grdName, Grid);
	if(comp==null){
		alert("btn_xlDn_그리드id 확인!!!");
		return;
	}
	var dsObj = comp.getBindDataset();
	if(this.gfn_dsIsUpdated(dsObj)){
		var bOK = this.gfn_Message("IsChangedButContinue", null, "conf", "yesno");//변경된 데이터가 있습니다. 계속하시겠습니까?
		if (!bOK) return;
	}
	if(dsObj.rowcount>0){
		var bOK = this.gfn_Message("IsOkIntializeGrid", null, "conf", "yesno");//그리드를 초기화 하시겠습니까?
		if (bOK) dsObj.clearData();
	}
	
	
	/**
	 * @class  엑셀 import 처리
	 * @param  {Object} sDsName - dataset name
	 * @param  {String} sSuccFunc - 성공 callback
	 * @param  {String} sErrFunc -  실패 callback
	 * @param  {Number} sHead - 엑셀 head
	 * @param  {Number} sBody - 엑셀 body
	 * @param  {Number} strSheetNm - 엑셀 sheet name
	 * @param  {Number} fileType -  EXCEL (defalut), CSV, HANCELL
	 */
	 this.gfn_import_excel(dsObj.name, "nfn_excel_success", "nfn_excel_fail", "A1", "A2");
}
pForm.nfn_excel_fail = function ()
{
	alert("Error occurred during importing excel!!");
};

pForm.nfn_excel_success = function ()
{
	trace("Excel import SUCCESS");
	
};

/*******************************************************************************
 * 기능 : cssclass=="essential_error" -> essential로 초기화
 * 진성하
 * Paramether  : 
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_setEssential = function(obj)
{
	var subObj;
	if(obj instanceof Combo || obj instanceof Edit || obj instanceof Calendar || obj instanceof Spin || obj instanceof MaskEdit 
		|| obj instanceof Radio || obj instanceof CheckBox ){
		if(obj.cssclass=="essential_error") obj.set_cssclass("essential");
		if(obj.cssclass=="enabled_error") obj.set_cssclass("");  //POLA
	}
}
/*******************************************************************************
 * nfn_setLookupCodeCmb
 * 기능 : 공통코드 set Dataset 
 * 진성하
 * Paramether  : obj - 콤보 Object
 * 특이사항 : C,CMD_JOB_GUBUNCD,ALL,Y,Y
*******************************************************************************/
pForm.nfn_setLookupCodeCmb = function(obj, bAsync)
{
	//var strCmbInfo = obj.cssclass;
	var strCmbInfo = obj.codecolumn;  //20150403 POLAROID CSS (essential 사용으로 변경)

    if( strCmbInfo == undefined ){
	  trace('codecolumn is not null : '+obj.id);
      strCmbInfo = "";
    }
	if (strCmbInfo.indexOf(",") < 1)
		return;
	//(strCmbInfo);
	if(this.nfn_isNull(strCmbInfo)) return;
	
	var strDs;
	var arrCmbInfo = strCmbInfo.split(",");
	var strCodeType = arrCmbInfo[0];	
	if(strCodeType=="C" || strCodeType=="G" || strCodeType=="L"){	//C,CMD_JOB_GUBUNCD,ALL,Y,Y
		var strLookupType = arrCmbInfo[1];	//코드유형
		var strCmbType = arrCmbInfo[2];	//ALL:전체, SEL:선택
		var strEnabledFlag = arrCmbInfo[3];	//ENABLED_FLAG
		var strEditable = arrCmbInfo[4];	//Y:수정가능, N:수정불가능
		var strAB = arrCmbInfo[5];	//A:코드명만,B:코드+코드명
		strDs = "ds_"+strCodeType+strLookupType+strCmbType;
	}
	strDs = strDs.replace(" ","_");

	var tmpDs ;
	if(this.objects[strDs]==null ){
		if(strCodeType=="C" || strCodeType=="G" || strCodeType=="L"){
			if(strCmbType != "SEL" && strCmbType != "ALL") bAsync = false;
			this.nfn_getEcmLookupValuesDs(strDs, strLookupType, strEnabledFlag, strCmbType, bAsync);
		}
	}
	obj.set_innerdataset(strDs);
	obj.set_codecolumn("LOOKUP_CODE");

	obj.set_datacolumn("MEANING2");
	if(strAB=="B") obj.set_datacolumn("MEANING");
	if(strAB=="C") obj.set_datacolumn("DESCRIPTION");
	if(!this.nfn_isNull(strAB)) if(strAB.substring(0,9)=="ATTRIBUTE") obj.set_datacolumn(strAB);

	if(strCodeType=="AD"){
		if(!this.nfn_isNull(strCdClum)) obj.set_codecolumn(strCdClum);
	}
	/*
	if(strCmbType=="SEL"){
		obj.set_index(0);
		//obj.set_index(0);
		//obj.set_text("SELECT");
	}else if(strCmbType=="ALL"){
		obj.set_index(0);
		//obj.set_index(0);
		//obj.set_text("ALL");
	}
	*/	
	obj.set_index(0);
	if(strEditable=="Y"){
		obj.set_enable(true);
	}else if(strEditable=="N"){
		obj.set_enable(false);
	}
}

/*
	기능 : 공통코드 set Grid combo
	인수 : obj - Grid Object
*/
/*******************************************************************************
 * 기능 : 공통코드 set Dataset 
 * 진성하
 * Paramether  : obj - 콤보 Object
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_setLookupCodeGridCmb = function(obj)
{	
	/*
	for(var j=0; j<obj.getCellCount("Head"); j++){
		var tooltiptext = obj.getCellProperty("Head", j, "tooltiptext");
		var text = obj.getCellProperty("Head", j, "text");
		var dictionaryname = this.nfn_getDictionaryname(tooltiptext);
		obj.setCellProperty("Head",j,"tooltiptext",text);
		if(!this.gfn_isNull(dictionaryname)){
			obj.setCellProperty("Head",j,"text",dictionaryname);
			obj.setCellProperty("Head",j,"tooltiptext",dictionaryname);
		}
	}
	*/
	for(var j=0; j<obj.getCellCount("summary"); j++){
		var tooltiptext = obj.getCellProperty("summary", j, "tooltiptext");
		var text = obj.getCellProperty("summary", j, "text");
		var dictionaryname = this.nfn_getDictionaryname(tooltiptext,true);
		obj.setCellProperty("summary",j,"tooltiptext",text);
		if(!this.gfn_isNull(dictionaryname)){
			if(this.gf_getLanguageType()=="ko-KR"){
				obj.setCellProperty("summary",j,"tooltiptext",text);
			}else{
				obj.setCellProperty("summary",j,"text",dictionaryname);
				obj.setCellProperty("summary",j,"tooltiptext",dictionaryname);
			}
		}
	}
	var headCellCount = obj.getCellCount("head");
	var headRow;
	for(var i=headCellCount-1; i>=0; i--){
		if( i == headCellCount-1 ){
			headRow = nexacro.toNumber(obj.getCellProperty("head", i, "row"));
			break;
		}	
	}
	var arrHeadCol = new Array();
	
	var strColId = "";
	for(var j=0; j<obj.getCellCount("Body"); j++){
		var text = obj.getCellProperty("Body",j,"text");
		var headCol = obj.getCellProperty("Body",j,"col");
//		trace("text-->"+text);
/*
		if(!this.gfn_isNull(text)){
			var headText = this.nfn_getDictionaryname(text.replace("bind:", ""),true);
			if(headText != text.replace("bind:", "")){
				arrHeadCol[headCol] = headText;
//				trace("headText-->"+headText);
			}
		}
		if(this.gfn_isNull(arrHeadCol[headCol])){
			var tooltiptext = obj.getCellProperty("Head", headCol, "tooltiptext");
			var text = obj.getCellProperty("Head", headCol, "text");
			var dictionaryname = this.nfn_getDictionaryname(tooltiptext,true);
			//obj.setCellProperty("Head",j,"tooltiptext",text);
			if(!this.gfn_isNull(dictionaryname)){
				arrHeadCol[headCol] = dictionaryname;
			}
//			trace("headText dictionaryname-->"+dictionaryname);
		}
*/		
		var tooltiptext = obj.getCellProperty("Head", headCol, "tooltiptext");
		var text = obj.getCellProperty("Head", headCol, "text");
		if(!this.gfn_isNull(tooltiptext)){
			var dictionaryname = this.nfn_getDictionaryname(tooltiptext,true);
			//obj.setCellProperty("Head",j,"tooltiptext",text);
			if(!this.gfn_isNull(dictionaryname)){
				arrHeadCol[headCol] = dictionaryname;
			}
//			trace("headText dictionaryname-->"+dictionaryname);
		}
		if(this.gfn_isNull(arrHeadCol[headCol]) && !this.gfn_isNull(text)){
			var headText = this.nfn_getDictionaryname(text.replace("bind:", ""),true);
			if(headText != text.replace("bind:", "")){
				arrHeadCol[headCol] = headText;
//				trace("headText-->"+headText);
			}
		}
		if(!this.gfn_isNull(obj.getCellProperty("Body",j,"text")) && obj.getCellProperty("Body",j,"text").indexOf("bind:")<0){
			var bodyText = this.nfn_getDictionaryname(obj.getCellProperty("Body",j,"tooltiptext"),true);
			if(!this.gfn_isNull(bodyText)){
				if(this.gf_getLanguageType()=="ko-KR"){
					obj.setCellProperty("Body", j, "tooltiptext" , bodyText);	
				}else{
					obj.setCellProperty("Body", j, "text" , bodyText);	
					obj.setCellProperty("Body", j, "tooltiptext" , bodyText);	
				}
			}			
		}
		
		var expandshow = obj.getCellProperty("Body",j,"expandshow");
		if(expandshow == "show" && this.gfn_isNull(obj.getCellProperty("Body",j,"expandchar")) && this.gfn_isNull(obj.getCellProperty("Body",j,"expandimage"))){
			obj.setCellProperty("Body",j,"expandimage","theme://images/grd_expand.png");
			obj.setCellProperty("Body",j,"expandsize","24");
		}
		if("normal,text,number,date,combo".indexOf(obj.getCellProperty("Body",j,"displaytype"))>-1){
			if(this.gfn_isNull(obj.getCellProperty("Body",j,"tooltiptext"))){
			    
			    // 2018.09.27일 넥사크로 패치내용 반영
			    var expr = "expr:comp.getCellText(currow, " + j + ")";			     
			    obj.setCellProperty("Body", j, "tooltiptext" , expr);							    
				
				//objGrid.setCellProperty("Body",i,"tooltiptext",objGrid.getCellText("Body",i,"text"));
			}
		}

		var displayType = obj.getCellProperty("Body", j, "displaytype");
		var editType = obj.getCellProperty("Body", j, "edittype");
		var df = obj.getCellProperty( "Body", j, "calendardateformat");		
		
		//if(displayType == "normal") obj.setCellProperty( "body", j, "textAlign", "left");
		if(displayType == "date" || displayType == "calendardatacontrol"){
					
		//trace("df-->"+df);
			//if(df == "yyyy-MM-dd ddd" || this.gfn_isNull(df)){
			if(this.gfn_isNull(df)){
				obj.setCellProperty( "body", j, "calendardateformat", "yyyy-MM-dd");
			}
			obj.setCellProperty( "body", j, "textAlign", "center");
			obj.setCellProperty( "body", j, "calendardisplaynulltype", "none");
			
		}
//		if(!this.gfn_isNull(df) && displayType != "date"){
//			obj.setCellProperty( "body", j, "maskeditformat", " ");
//		}

		if(displayType == "number"){
			obj.setCellProperty( "body", j, "textAlign", "right");
			continue;
		}

		if(displayType == "combotext" || displayType == "combocontrol") obj.setCellProperty( "body", j, "textAlign", "center");
		
		var strCdnt = obj.getCellProperty("Body", j, "combocodecol");
		if (strCdnt.indexOf(",") < 1)	continue;

		var strDs = "";

		if((displayType == "combotext" || displayType == "combocontrol") && !this.nfn_isNull(strCdnt)){
			//obj.setCellProperty( "body", j, "textAlign", "center");
			var arrCmbInfo = strCdnt.split(",");
			var strCodeType = arrCmbInfo[0];	//L:FND_LOOKUP_VALUES, F:FND_FLEX_VALUES

			if(strCodeType=="C" || strCodeType=="G" || strCodeType=="L"){
				var strLookupType = arrCmbInfo[1];	//L:LOOKUP_TYPE,	
				var strCmbType = arrCmbInfo[2];	//ALL:전체, SEL:선택
				var strEnabledFlag = arrCmbInfo[3];	//ENABLED_FLAG :Y, N
				var strEditable = arrCmbInfo[4];	//Y:수정가능, N:수정불가능
				var strAB = arrCmbInfo[5];	//A:코드명만,B:코드+코드명
				strDs = "ds_"+strCodeType+strLookupType+strCmbType;
			}
			strDs = strDs.replace(" ","_");
			
			var tmpDs ;
			if(this.objects[strDs]==null ){
				//var strLanguage = "US";
				if(strCodeType=="C" || strCodeType=="G" || strCodeType=="L"){
					this.nfn_getEcmLookupValuesDs(strDs, strLookupType, strEnabledFlag, strCmbType);
				}
			}
			//if(displayType != "combocontrol" && displayType != "combotext"){
			//	obj.setCellProperty( "body", j, "displaytype", "combotext");
			//}
			obj.setCellProperty( "body", j, "combodataset", strDs);
			obj.setCellProperty( "body", j, "combocodecol", "LOOKUP_CODE");
			obj.setCellProperty( "body", j, "combodatacol", "MEANING2");
			if(strAB=="B") obj.setCellProperty( "body", j, "combodatacol", "MEANING");
			if(strAB=="C") obj.setCellProperty( "body", j, "combodatacol", "DESCRIPTION");
			if(!this.nfn_isNull(strAB)) if(strAB.substring(0,9)=="ATTRIBUTE") obj.setCellProperty( "body", j, "combodatacol", strAB);

			if(strCodeType=="AD"){
				if(!this.nfn_isNull(strCdClum)) obj.setCellProperty( "body", j, "combocodecol", strCdClum)
			}
			if(strEditable=="U") continue;
			if(editType.indexOf("expr:")<0){
				if(strEditable=="Y"){
					var strText = obj.getCellProperty("body", j, "text");
					if(!this.nfn_isNull(strText)) strColId = strText.replace("bind:", "");
					obj.setCellProperty( "body", j, "edittype", "combo");
					//if(!this.nfn_isNull(strColId)) obj.setCellProperty( "body", j, "expr", "this.nfn_isNull("+strColId+")?'undefined':"+strColId);
				}else if(strEditable=="N"){
					obj.setCellProperty( "body", j, "edittype", "none");
				}
			}
			
			//obj.setCellProperty( "body", j, "edittype", "combo");
		}
	}
	for(var i=0; i<headCellCount; i++){
		headCol = obj.getCellProperty("head", i, "col");
		if(headRow == obj.getCellProperty("head", i, "row")){
			if(!this.gfn_isNull(arrHeadCol[headCol])){
				if(this.gf_getLanguageType()=="ko-KR"){
					obj.setCellProperty("Head",i,"tooltiptext",arrHeadCol[headCol]);
				}else{
					obj.setCellProperty("Head", i,"text", arrHeadCol[headCol]);
					obj.setCellProperty("Head", i,"tooltiptext", arrHeadCol[headCol]);
				}
			}			
		}else{
			var text = obj.getCellProperty("Head", i, "text");
			if(this.gf_getLanguageType()=="ko-KR"){
				if(this.gfn_isNull(obj.getCellProperty("Head",i,"tooltiptext")))
					obj.setCellProperty("Head",i,"tooltiptext",text);
			}else{
				var tooltiptext = obj.getCellProperty("Head", i, "tooltiptext");
				var dictionaryname = this.nfn_getDictionaryname(tooltiptext,true);
				obj.setCellProperty("Head",i,"text",dictionaryname);
				obj.setCellProperty("Head",i,"tooltiptext",dictionaryname);
			}			
		}
			
	}

}

/*
	기능 : 공통코드 dataset 저장
	인수 : strDs - DataSet
		   strLookupType - 코드유형 
*/
pForm.nfn_getEcmLookupValuesDs = function(strDs, strLookupType, strEnabledFlag, strCmbType, bAsync)
{
	if(this.objects[strDs]==null ){
		tmpDs = new Dataset();
		tmpDs.set_name(strDs);
		tmpDs.set_id(strDs);
		
		this.addChild(strDs,tmpDs );
	}

	var strSearchDs = "ds_searchLookupValues";
	if(this.objects[strSearchDs]==null ){
		var tmpDs = new Dataset();
		tmpDs.addColumn( "LOOKUP_TYPE", "string" );
		tmpDs.addColumn( "ENABLED_FLAG", "string" );
		tmpDs.addColumn( "CMB_TYPE", "string" );
		tmpDs.set_name(strSearchDs);
		tmpDs.set_id(strSearchDs);
		
		this.addChild(strSearchDs,tmpDs );
	}
	this.objects[strSearchDs].clearData();
	this.objects[strSearchDs].addRow();
	this.objects[strSearchDs].setColumn(0,"LOOKUP_TYPE",strLookupType);
	this.objects[strSearchDs].setColumn(0,"ENABLED_FLAG",strEnabledFlag);
	this.objects[strSearchDs].setColumn(0,"CMB_TYPE",strCmbType);

	var sSvcID        = "selectEcmLookupValuesVList2"+strDs;
    var sController   = "/cmsa00300/selectEcmLookupValuesVList2.do";
	var sInDatasets   = "INPUT=ds_searchLookupValues"; 
	var sOutDatasets  = strDs + "=output";
	if(bAsync == false) trace("strExpr : "+sSvcID);
	var sArgs = "";
    sArgs += this.gfn_setParam("method","selectEcmLookupValuesVList2");
    
    this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", bAsync); 
   
}


/*
	기능 : 그리드 중복입력/수정 화면내 체크 (POLAPOLA)
	인수 : orginObjDs    - DataSet
		   compareObjDs  - DataSet
		   targetGrid    - grid
		   compareString - String
		    
*/
pForm.nfn_getDatasetDuplicateCheck = function(orginObjDs, compareObjDs, targetGrid, compareString)
{
	if (this.nfn_isNull(compareString))
		return;
	
// 	if(this.objects[strDs]==null ){
// 		tmpDs = new Dataset();
// 		tmpDs.set_name(strDs);
// 		tmpDs.set_id(strDs);
// 		
// 		this.addChild(strDs,tmpDs );
// 	}
// 		
//(orginObjDs.getRowCount());

	var objArr = compareString.split(",");
	var compareValue;
	var compareFlag;
	for(var i = 0; i < orginObjDs.rowcount; i++)
	{
		if(orginObjDs.getRowType(i) == 2 || orginObjDs.getRowType(i) == 4){
			if (compareFlag == "DUP")
			{
				break;
			}
					
			for (var j = 0; j < objArr.length; j++)
			{
				if (compareFlag != "DUP")
				{		
					for (var k = 0; k < compareObjDs.rowcount; k++)
					{
						if (i != k && compareFlag != "DUP")
						{			
							if (compareObjDs.getColumn(k, objArr[j])+"" == orginObjDs.getColumn(i, objArr[j])+"")
							{
								var nCell = targetGrid.getBindCellIndex("body", objArr[j]);
								compareFlag = "DUP";
								this.gfn_Message("CannotInputDupSomething", targetGrid.getCellProperty("head", nCell, "text"), "info","ok");
								//("'" + targetGrid.getCellProperty("head", nCell, "text") + "' 에 입력한 값은 기존 항목에 존재하여 등록할 수 없습니다.");;
								orginObjDs.set_rowposition(i);
								targetGrid.setFocus();
								targetGrid.setCellPos(nCell);
								break;
							} //end of if-else statment
						}//end of if-else statment
					} //end of for-loop statement
				} 
				else 
				{
					break;
				}//end of if-else statment
			}  //end of if-else statment
		} //end of for-loop statement
	} //end of for-loop statement
	
	if (compareFlag == "DUP")
		return false;
	else
		return true;
} //end of cfn_getDatasetDuplicateCheck function.


/*
	기능 : 사업자등록번호 검증
	인수 : taxReference - String
		    
*/
pForm.nfn_isCorporateRegistrationNumber = function(corporateRegistrationNumber){
	
	// '-' 제거
	corporateRegistrationNumber = corporateRegistrationNumber.replace(/-/gi,'');

	//자릿수 검증
	if(corporateRegistrationNumber.length != 10)
	{
		this.gfn_Message("IMCMM0120", "사업자번호", "warning","ok");
		return false;
	}
	
	//0000000000 입력방지
	if(corporateRegistrationNumber == "0000000000")
	{
		this.gfn_Message("IMCMM0120", "사업자번호", "warning","ok");
		return false;
	}
	
	//사업자번호 검증
	var sumMod = 0;
	sumMod += parseInt(corporateRegistrationNumber.substring(0,1));
	sumMod += parseInt(corporateRegistrationNumber.substring(1,2))*3%10;
	sumMod += parseInt(corporateRegistrationNumber.substring(2,3))*7%10;
	sumMod += parseInt(corporateRegistrationNumber.substring(3,4))*1%10;
	sumMod += parseInt(corporateRegistrationNumber.substring(4,5))*3%10;
	sumMod += parseInt(corporateRegistrationNumber.substring(5,6))*7%10;
	sumMod += parseInt(corporateRegistrationNumber.substring(6,7))*1%10;
	sumMod += parseInt(corporateRegistrationNumber.substring(7,8))*3%10;
	sumMod += Math.floor(parseInt(corporateRegistrationNumber.substring(8,9))*5/10);
	sumMod += parseInt(corporateRegistrationNumber.substring(8,9))*5%10;
	sumMod += parseInt(corporateRegistrationNumber.substring(9,10));
	
	if(sumMod % 10 != 0){
		this.gfn_Message("IMCMM0120", "사업자번호", "warning","ok");
		return false;
	}
	return true;
}


/*
	기능 : 주민등록번호 검증
	인수 : taxReference - String
		    
*/
pForm.nfn_isNationalNo = function (nationalNo)
{
	var lastid, li_mod, li_minus, li_last;
	var checkValue = 0;

	// '-' 제거
	nationalNo = nationalNo.replace(/-/gi,'');

	//자릿수 검증
	if(nationalNo.length != 13)
	{
		//"유효하지 않은 주민등록번호 입니다."
		this.gfn_Message("IMCMM0119", null, "warning","ok");
		return false;
	}

    lastid = parseFloat(nationalNo.substring(12,13));   
      
	checkValue += (parseInt(nationalNo.substring(0,1)) * 2)
                + (parseInt(nationalNo.substring(1,2)) * 3)
                + (parseInt(nationalNo.substring(2,3)) * 4)
                + (parseInt(nationalNo.substring(3,4)) * 5)
                + (parseInt(nationalNo.substring(4,5)) * 6)
                + (parseInt(nationalNo.substring(5,6)) * 7)
                + (parseInt(nationalNo.substring(6,7)) * 8)
                + (parseInt(nationalNo.substring(7,8)) * 9)
                + (parseInt(nationalNo.substring(8,9)) * 2)
                + (parseInt(nationalNo.substring(9,10)) * 3)
                + (parseInt(nationalNo.substring(10,11)) * 4)
                + (parseInt(nationalNo.substring(11,12)) * 5);

	li_mod = checkValue % 11;
	li_minus = 11 - li_mod;
	li_last = li_minus % 10;

	if(li_last != lastid)
	{
		//"유효하지 않은 주민등록번호 입니다."
		this.gfn_Message("IMCMM0119", null, "warning","ok");
		return false;
	}

    return true;
}


/*
	기능 : 외국인등록번호 검증
	인수 : taxReference - String
		    
*/
pForm.nfn_isFnationalNo = function (fNationalNo)
{
	var sum = 0; 
	var odd = 0; 
	buf = new Array(13); 

	// '-' 제거
	fNationalNo = fNationalNo.replace(/-/gi,'');

	//자릿수 검증
	if(fNationalNo.length != 13)
	{
		//"유효하지 않은 외국인등록번호 입니다."
		this.gfn_Message("IMCMM0120", "외국인등록번호", "warning","ok");
		return false;
	}

	for(i=0; i<13; i++) buf[i] = parseInt(fNationalNo.charAt(i)); 

	odd = buf[7]*10 + buf[8]; 

	if(odd%2 != 0)
	{
		//"유효하지 않은 외국인등록번호 입니다."
		this.gfn_Message("IMCMM0120", "외국인등록번호", "warning","ok");
		return false;
	}

	if((buf[11]!=6) && (buf[11]!=7) && (buf[11]!=8) && (buf[11]!=9))
	{
		//"유효하지 않은 외국인등록번호 입니다."
		this.gfn_Message("IMCMM0120", "외국인등록번호", "warning","ok");
		return false;
	}

	multipliers = [2,3,4,5,6,7,8,9,2,3,4,5]; 

	for(i=0, sum=0; i<12; i++) sum += (buf[i] *= multipliers[i]); 

	sum = 11 - (sum%11); 

	if(sum >= 10) sum -= 10; 

	sum += 2; 

	if(sum >= 10) sum -= 10; 

	if(sum != buf[12])
	{
		//"유효하지 않은 외국인등록번호 입니다."
		this.gfn_Message("IMCMM0120", "외국인등록번호", "warning","ok");
		return false;
	}
    return true;
}

/*
	기능 : 구분자 (sChr) 를 제외한 문자열이 숫자 타입인지 여부
	작성자: 진성하
*/
pForm.nfn_isNumeric = function(Str, sChr)
{
	if(this.nfn_isNull(Str)) return Str;
	return nexacro.isNumeric(nexacro.replaceAll(Str,sChr,""));
}



/*
	기능 : gv_authTotInfo에 있는 특정 key의 value 가져오기
	작성자 : 진성하
*/
pForm.nfn_getValueFromAuthInfo = function(jobSysCd, key)
{
	if(this.gfn_isNull(jobSysCd)) return null;
	if(this.gfn_isNull(key)) return null;
	var valueOfKey = null ;
	var arrAuth = this.nfn_getSessionVal("gv_authTotInfo");
	var strJson = '{"authTotInfo":'+arrAuth+'}';						
	var obj = JSON.parse(strJson);								
	for(var i =0; i<Object.keys(obj.authTotInfo).length; i++){			
		if(obj.authTotInfo[i].JOB_SYS_CD==jobSysCd) {
			valueOfKey = eval("obj.authTotInfo[i]."+key);
			break;
		}
	}
	
	return valueOfKey;
}

/*
	기능 : 화면에 해당하는 등록된 안내문 가져오기
	작성자 : 고건
*/

pForm.nfn_helpDocument = function()
{
	var strDs = "ds_helpDocumentOut";
	if(this.objects[strDs]==null ){
		tmpDs = new Dataset();
		tmpDs.addColumn( "DOC_DESCRIPTION", "STRING" );
		tmpDs.set_name(strDs);
		tmpDs.set_id(strDs);
		
		this.addChild(strDs,tmpDs );
	}

	var strSearchDs = "ds_helpDocument";
	if(this.objects[strSearchDs]==null){
		var tmpDs = new Dataset();
		tmpDs.addColumn( "JOB_MENU_ID", "BIGDECIMAL" );
		tmpDs.set_name(strSearchDs);
		tmpDs.set_id(strSearchDs);
		
		this.addChild(strSearchDs,tmpDs );	
	}

	this.objects[strSearchDs].clearData();
	this.objects[strSearchDs].addRow();
	this.objects[strSearchDs].setColumn(0,"JOB_MENU_ID",this.parent.parent.id);
	//trace(this.objects[strSearchDs].getColumn(0,"JOB_MENU_ID"));
	var sSvcID        = "selectHelpDocId";
    var sController   = "/cmsa02100/selectHelpDocId.do";
	var sInDatasets   = "INPUT="+strSearchDs; 
	var sOutDatasets  = strDs+"=output";
	var sArgs = "";
    sArgs += this.gfn_setParam("method","selectHelpDocId");
	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, ""); 
		
	if(this.gfn_isNull(this.objects[strDs].getColumn(0,"DOC_DESCRIPTION")) == true){
		//this.gfn_Message("IMCMM0221", "등록된 안내문이 없습니다.", "warning","ok");//수정해야함
		this.div_helpDocument.sta_DocDesc.set_text("등록된 안내문이 없습니다.");
	}else{
		this.div_helpDocument.sta_DocDesc.set_text(this.objects[strDs].getColumn(0,"DOC_DESCRIPTION"));
	}

}

/*******************************************************************************
 * 기능 : 그리드 copy (rowtype 포함 똑같이)
 * 진성하
 * Paramether  : objDsSource, objDsTarget
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_copyDataSet = function(objDsSource,objDsTarget){
	objDsTarget.clearData();
	objDsTarget.copyData(objDsSource);
	
	objDsTarget.set_updatecontrol(false);
	for(var i=0; i<objDsSource.rowcount; i++){
		objDsTarget.setRowType(i,objDsSource.getRowType(i));
	}
	objDsTarget.set_updatecontrol(true); 
}

/*******************************************************************************
 * 기능 : BizExceiption 일경우 데이터셋 초기화되므로 원래의 rowtype으로 복원
 * 진성하
 * Paramether  : objDsSource, objDsTarget
 * 특이사항 : 
*******************************************************************************/
pForm.nfn_setOrgRowtype = function(objDsTarget,objDsSource){
	objDsTarget.set_updatecontrol(false);
	for(var i=0; i<objDsSource.rowcount; i++){
		objDsTarget.setRowType(i,objDsSource.getRowType(i));
	}
	objDsTarget.set_updatecontrol(true); 
}

/********************************************************************************
 * Function Name: nfn_confirm												
 * Description	: 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을	
 *				  생성해서 해당 값으로 confirm 보여주고 응답값 가져오는 함수					
 * Arguments	: strMsgId(MessageId)										
 *				  strMsgType  (메세지 종류 : error, warning, info)				
                  strMsgButton(버튼         : ok,yesno,yesnocancel
 *				  msgArr[](메세지값으로 치환될 Parameter Array)		
 *				  sAfterFunc(Callback 할 Function)		
 * 사용법      : gfn_Message("msg.err.validator.required","info","ok","대분류")
 * Return 		: Y,N 로 값을 return 해준다 				
 ********************************************************************************/ 
pForm.nfn_message = function (strMsgId, msgArr, sMsgType, sMsgButton, sAfterFunc) 
{
	
	if(this.gfn_isNull(sMsgType)) {
		sMsgType = "info";
	}
	
	if(this.gfn_isNull(sMsgButton)) {
		sMsgButton = "ok";
	}
	
	if(this.gfn_isNull(msgArr)) {
		msgArr = "";
	}
		
	var strMsg = this.gfn_GetMessTxt(strMsgId, msgArr);
	if (this.gfn_isNull(strMsg)){
	    strMsg = msgArr;  
	}

	if (sMsgType=="conf"){
		var oArg = {message:strMsg,callFunc:sAfterFunc};
		this.gfn_openPopup("msgBoxC","common::com_msgBoxC.xfdl",oArg,"","nfn_msgAfter");			
		return false;	
		//return this.confirm( strMsg );
	}else{
		var oArg = {message:strMsg};
		this.gfn_openPopup("msgBox","common::com_msgBox.xfdl",oArg);
		return true;	
	}
}

/********************************************************************************
 * Function Name: nfn_msgAfter												
 * Description	: confirm 메시지 팝업창의 콜백처리					
 * Arguments	: sPopupId(MessageId)										
 *				  Variant			
 * 사용법      : nfn_msgAfter(sPopupId, Variant)
 * Return 		: 				
 ********************************************************************************/ 
pForm.nfn_msgAfter = function(sPopupId, Variant)
{
	//if(this.gfn_isNull(this.fv_rtnValue)) return;
	if(sPopupId=="msgBoxC"){
		var rtn = this.gfn_getPopupRtn();
		//trace("rtn-->"+rtn);
		if(rtn[0]=="N") return;
		var callFunc = "this."+rtn[1]+"()";
		//trace("callFunc-->"+callFunc);
		eval(callFunc);
	}
}


/********************************************************************************
 * 기능   : 지로번호 체크로직		
 * 작성자 : 이은섭
 * Paramether  : giro_no(지로번호)
 ********************************************************************************/ 
pForm.nfn_checkGiroNo = function(giro_no) {
   var numhap = 0; //가중치 곱의 합
   var weightflag = 7;  //가중치 플래그 (7 3 1 7 3 1 7 3 .......)
   for(i=giro_no.length-2; i > -1; i--) {
      var num = giro_no.substring(i,i+1);

      if(weightflag == 7) {
          numhap += num*7;
          weightflag = 3;
      } else if(weightflag == 3) {
          numhap += num*3;
          weightflag = 1;
      } else if(weightflag == 1) {
          numhap += num*1;
          weightflag = 7;
      }
   }

   division = numhap % 10 ;
   checkdigit = 10 - division; //체크디지트

   if(checkdigit == 10) checkdigit = 0;

   if(checkdigit !=  giro_no.substring(giro_no.length-1, giro_no.length) || giro_no.length < 1 || giro_no.length != 7)
   {
      this.gfn_Message("IMCMM0221", "지로번호를 정확히 입력하십시요.", "warning","ok"); // {0}		
      return false;
   }
   else {
      return true;
   }
   
}

pForm.nfn_typeCheck = function(component, strColIdList, strColNmList, strColTypeList){
    var arrColId = strColIdList.split(",");
    var arrColNm = strColNmList.split(",");
    var arrColType = strColTypeList.split(",");
    
    for(var j=0 ; j<arrColId.length ; j++){
        //trace(arrColId[j]);
        var index = -1;
        for(var i=0 ; i<component.components.length ; i++){
            var compId = component.components[i].id;
            if(arrColId[j]==compId){
                index = i;
                break;
            }
        }
            
        //trace(compId+","+index);  

        if(index >=0){
            var compValue = component.components[index].value;
            if (arrColType[j] == "digits")
            {
                if(!this.gfn_isNum(compValue)){
                    if(component.components[index] instanceof Combo){
                        this.gfn_Message("IMCMM0182", arrColNm[j], "warning","ok");
                    }else{
                        this.gfn_Message("IMCMM0182", arrColNm[j], "warning","ok");
                    }
                    
                    component.components[index].setFocus();
                    return false;
                } 
            }
        }
    }
    return true;
}

// 전화번호 포맷 설정 ( 값 , string : 데이터 포멧 완료 후 리턴 / sp : 데이터에 해당하는 특수문자 리턴)
pForm.nfn_tolNoChange = function(val,strFlg)
{
	// null check
	if(this.nfn_isNull(val)) return "";
	
	var value = nexacro.replaceAll(val,"-","");
	var len   = value.length;
	var maskVal= "";
	
	if(value.substring(0,2) == "02")
	{
		if(len <= 9) // 02-XXX-XXXX
		{
			if(strFlg == "string")
				maskVal = value.substring(0,2) + "-" + value.substring(2,5) + "-" + value.substring(5,9);
			else if(strFlg == "sp")
				maskVal = "##-###-####";
		}
		else // 02-XXXX-XXXX
		{
			if(strFlg == "string")
				maskVal = value.substring(0,2) + "-" + value.substring(2,6) + "-" + value.substring(6,10);
			else if(strFlg == "sp")
				maskVal = "##-####-####";
		}
	}
	else
	{
		if(len <= 7) // XXX-XXXX
		{
			if(strFlg == "string")
				maskVal = value.substring(0,3) + "-" + value.substring(3,7);
			else if(strFlg == "sp")
				maskVal = "###-####";
		}
		else if(len <= 8) // XXXX-XXXX
		{
			if(strFlg == "string")
				maskVal = value.substring(0,4) + "-" + value.substring(4,8);
			else if(strFlg == "sp")
				maskVal = "####-####";
		}
		else if(len <= 10) // XXX-XXX-XXXX
		{
			if(strFlg == "string")
				maskVal = value.substring(0,3) + "-" + value.substring(3,6) + "-" + value.substring(6,10);
			else if(strFlg == "sp")
				maskVal = "###-###-####";
		}
		else // XXX-XXXX-XXXX
		{
			if(strFlg == "string")
				maskVal = value.substring(0,3) + "-" + value.substring(3,7) + "-" + value.substring(7,11);
			else if(strFlg == "sp")
				maskVal = "###-####-####";
		}
	}
	return maskVal;
}

// 포커스 설정 시 ( MaskEdit , 데이터셋 바인드 전용 , 해당전화번호컬럼명 + "_SP" 를 특수문자 컬럼으로 함.)
pForm.nfn_telMaskFocus = function(obj, e)
{
	
	// 바인드되어 있는 컬럼명+ "_SP" .. 특수문자 넣을 컬럼명 ( 컬럼명+_SP ) 
	var colSp = this.nfn_getBindInfo(obj,"value","columnid")+"_SP";
	
	// 바인드 된 데이터셋명
	var dsNm  = this.nfn_getBindInfo(obj,"value","datasetid");
	
	// 바인드된 데이터셋이 있으면 특수문자 셋팅을 마스크 바인딩 컬럼(해당컬럼 + _SP)에 셋팅
	// 아니면 그냥 마스크에 셋팅
	if(this.nfn_isNull(dsNm))
	{
		var enable = obj.enable;     // true = 사용가능 / false = 사용불가
		var readonly = obj.readonly; // true = 사용불가 / false = 사용가능
		
		// 특수문자를 특수문자 컬럼에 셋팅
		if(!enable || readonly){}
		else obj.set_mask("###########");
	}
	else
	{
		// 데이터셋명으로 데이터셋 Object 선언
		var dsObj = this.objects[dsNm];
		
		var enable = obj.enable;     // true = 사용가능 / false = 사용불가
		var readonly = obj.readonly; // true = 사용불가 / false = 사용가능
		
		// 특수문자를 특수문자 컬럼에 셋팅
		if(!enable || readonly){}
		else dsObj.setColumn(dsObj.rowposition,colSp,"###########");
	}
	
}

//포커스 잃었을 시 ( MaskEdit , 데이터셋 바인드 전용 , 해당전화번호컬럼명 + "_SP" 를 특수문자 컬럼으로 함. )
pForm.nfn_telMaskFocusKill = function(obj, e)
{
	// null check
	if(this.nfn_isNull(obj.value)) return;
	
	// 전화번호 특수문자
	var valSp = this.nfn_tolNoChange(obj.value,"sp");
	
	// 바인드되어 있는 컬럼명+ "_SP" .. 특수문자 넣을 컬럼명 ( 컬럼명+_SP ) 
	var colSp = this.nfn_getBindInfo(obj,"value","columnid")+"_SP";
	
	// 바인드 된 데이터셋명
	var dsNm  = this.nfn_getBindInfo(obj,"value","datasetid");
	
	// 바인드된 데이터셋이 있으면 특수문자 셋팅을 마스크 바인딩 컬럼에 셋팅
	// 아니면 그냥 마스크에 셋팅
	if(this.nfn_isNull(dsNm))
	{
		obj.set_mask(valSp);
	}
	else
	{
		// 데이터셋명으로 데이터셋 Object 선언
		var dsObj = this.objects[dsNm];
		
		// 특수문자를 특수문자 컬럼에 셋팅
		dsObj.setColumn(dsObj.rowposition,colSp,valSp);
	}
}

/*
 *  바인드 정보 가져오기( Object , 바인드정보의 레이블명(예:value) , 가져올 id값 지정(예: columnid) )
 *  // 			trace("i = " + i + " | bd.id = " + bd.id + " | bd.compid = " + bd.compid + " | bd.propid = " + bd.propid
 * 			                     + " | bd.datasetid = " + bd.datasetid + " | bd.columnid = " + bd.columnid);
 */
pForm.nfn_getBindInfo = function(obj, label, str) 
{
	var bds = this.binds;
	var resultStr = "";
	for(var i=0;i<bds.length;i++)
	{
		var bd = bds[i];
		if((bd.compid).indexOf(obj.id) != -1 && bd.propid == label)
		{
			resultStr = eval("bd."+str);
			break;
		}
	}
	return resultStr;
} 

/*********************************************************************
 * 함 수 명 	: nfn_getDsCommonPoup
 * 함수설명 	: 등록된 공통팝업을 이용하여 dataset 생성 
 * 입    력 	: objDataset
 * 결    과 	: 등록된 공통팝업을 이용하여 dataset 생성 
 *********************************************************************/
pForm.nfn_getDsCommomPoup = function(sSvcID, popupCd, sParamDs, sRtnDs) 
{
	var sController   = "/cmsa00100/selectCmdPopupList.do";
	var sInDatasets   = "";	//조회조건 데이터셋 
	var sOutDatasets  = "gds_cmPopup=output";	//받는 데이터셋
	var sArgs = "";
    sArgs += this.gfn_setParam("POPUP_CD",popupCd);
    this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, ""); 
	//trace(nexacro.getApplication().gds_cmPopup.saveCSV());
	if(nexacro.getApplication().gds_cmPopup.getColumn(0,"QRY_TY") == "U"){
		var sController   = nexacro.getApplication().gds_cmPopup.getColumn(0,"QRY_URL") ;
		var sInDatasets   = "INPUT="+sParamDs;	//조회조건 데이터셋 
		var sOutDatasets  = sRtnDs+"=output";	//받는 데이터셋
		var sArgs = "";
		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs); 
	}else{
		var objDs = this.objects[sParamDs];
		var sAndWhere = "";
		for(var i=0; i< objDs.colcount; i++){
			if(objDs.getColID(i) == "QUERY" || objDs.getColID(i) == "CONDITION") continue;
			sAndWhere += " and "+ objDs.getColID(i) + "=" + objDs.getColumn(0,i);
		}

		objDs.addColumn( "QUERY", "STRING" );
		objDs.addColumn( "CONDITION", "STRING" );

		objDs.setColumn(0, "QUERY", nexacro.getApplication().gds_cmPopup.getColumn(0,"QRY_URL") );
		objDs.setColumn(0, "CONDITION",sAndWhere);
		
		//trace("objDs-->"+objDs.saveCSV());
		var sController   = "/cmsa00400/selectUserQryList.do";
		var sInDatasets   = "INPUT="+sParamDs;	//조회조건 데이터셋 
		var sOutDatasets  = sRtnDs+"=output";	//받는 데이터셋
		var sArgs = "";
		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs); 
		
	}
} 

/*********************************************************************
 * 함 수 명 	: nfn_getDsCommonPoup
 * 함수설명 	: 등록된 공통팝업을 이용하여 dataset 생성 
 * 입    력 	: objDataset
 * 결    과 	: 등록된 공통팝업을 이용하여 dataset 생성 
 *********************************************************************/
pForm.nfn_setCompsCommomPoup = function(sSvcID, popupCd, sParamDs, sComp, sRtnCols, sRtnComponents) 
{
	var sRtnDs = "ds_temp"
	if(this.objects[sRtnDs]==null ){
		tmpDs = new Dataset();
		tmpDs.set_name(sRtnDs);
		tmpDs.set_id(sRtnDs);
		this.addChild(sRtnDs,tmpDs );
	}

	var sController   = "/cmsa00100/selectCmdPopupList.do";
	var sInDatasets   = "";	//조회조건 데이터셋 
	var sOutDatasets  = "gds_cmPopup=output";	//받는 데이터셋
	var sArgs = "";
    sArgs += this.gfn_setParam("POPUP_CD",popupCd);
    this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, ""); 
	//trace(nexacro.getApplication().gds_cmPopup.saveCSV());
	if(nexacro.getApplication().gds_cmPopup.getColumn(0,"QRY_TY") == "U"){
	
		var objParamDs = this.objects[sParamDs];
		//trace("objParamDs-->"+objParamDs.saveXML());
		var sController   = nexacro.getApplication().gds_cmPopup.getColumn(0,"QRY_URL") ;
		var sInDatasets   = "INPUT="+sParamDs;	//조회조건 데이터셋 
		var sOutDatasets  = sRtnDs+"=output";	//받는 데이터셋
		var sArgs = "";
		//trace("sController-->"+sController);
		//trace("sInDatasets-->"+sInDatasets);
		//trace("sOutDatasets-->"+sOutDatasets);
		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, ""); 
	}else{
		var objDs = this.objects[sParamDs];
		var sAndWhere = "";
		for(var i=0; i< objDs.colcount; i++){
			if(objDs.getColID(i) == "QUERY" || objDs.getColID(i) == "CONDITION" || this.gfn_isNull(objDs.getColumn(0,i))) continue;
			sAndWhere += " and "+ objDs.getColID(i) + "='" + objDs.getColumn(0,i)+"'";
		}

		objDs.addColumn( "QUERY", "STRING" );
		objDs.addColumn( "CONDITION", "STRING" );

		objDs.setColumn(0, "QUERY", nexacro.getApplication().gds_cmPopup.getColumn(0,"QRY_URL") );
		objDs.setColumn(0, "CONDITION",sAndWhere);
		
		//trace("objDs-->"+objDs.saveCSV());
		var sController   = "/cmsa00400/selectUserQryList.do";
		var sInDatasets   = "INPUT="+sParamDs;	//조회조건 데이터셋 
		var sOutDatasets  = sRtnDs+"=output";	//받는 데이터셋
		var sArgs = "";
		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, ""); 
	}
	
	var objDs = this.objects[sRtnDs];
	if(objDs.rowcount==0){
		//alert("데이터가 존재하지 않습니다!!");
		if(!this.gfn_isNull(sRtnCols))
		{
			var arrRtnCol = sRtnCols.split("|");
			var arrRtnComponent = sRtnComponents.split("|");
			for(var i=0; i<arrRtnCol.length; i++){ 
				//trace(sComp+"."+arrRtnComponent[i]+".set_value('"+objDs.getColumn(0,arrRtnCol[i])+"')");
				//eval(sComp+"."+arrRtnComponent[i]+".set_value('"+objDs.getColumn(0,arrRtnCol[i])+"')");
				eval(sComp+"."+arrRtnComponent[i]+".set_value('')");
			}	
		}
		return;
	}else if(objDs.rowcount>1){
		//alert("다수의 건이 존재합니다. 팝업창에서 확인하세요!!");
		return;
	}
	
	if(!this.gfn_isNull(sRtnCols))
	{
		var arrRtnCol = sRtnCols.split("|");
		var arrRtnComponent = sRtnComponents.split("|");
		for(var i=0; i<arrRtnCol.length; i++){
			var objItemVal =objDs.getColumn(0, arrRtnCol[i]);
			if(objItemVal == undefined)	objItemVal = "";
			//objItemVal = nexacro.replaceAll(objItemVal,"'","`");
			trace("objItemVal-->"+objItemVal);
			
			//trace(sComp+"."+arrRtnComponent[i]+".set_value('"+objDs.getColumn(0,arrRtnCol[i])+"')");
			//eval(sComp+"."+arrRtnComponent[i]+".set_value('"+objDs.getColumn(0,arrRtnCol[i])+"')");
			eval(sComp+"."+arrRtnComponent[i]+".set_value(\""+objItemVal+"\")");
		}	
	}
} 

/*********************************************************************
 * 함 수 명 	: nfn_getCompsCommomPopupRtn
 * 함수설명 	: 등록된 공통팝업을 이용하여 dataset 생성 
 * 입    력 	: objDataset
 * 결    과 	: 등록된 공통팝업을 이용하여 dataset 생성 
 *********************************************************************/
pForm.nfn_getCompsCommomPopupRtn = function(sSvcID, popupCd, sParamDs, sComp, sRtnCols) 
{
	var sRtnDs = "ds_temp"
	if(this.objects[sRtnDs]==null ){
		tmpDs = new Dataset();
		tmpDs.set_name(sRtnDs);
		tmpDs.set_id(sRtnDs);
		this.addChild(sRtnDs,tmpDs );
	}

	var sController   = "/cmsa00100/selectCmdPopupList.do";
	var sInDatasets   = "";	//조회조건 데이터셋 
	var sOutDatasets  = "gds_cmPopup=output";	//받는 데이터셋
	var sArgs = "";
    sArgs += this.gfn_setParam("POPUP_CD",popupCd);
    this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, ""); 
	//trace(nexacro.getApplication().gds_cmPopup.saveCSV());
	if(nexacro.getApplication().gds_cmPopup.getColumn(0,"QRY_TY") == "U"){
	
		var objParamDs = this.objects[sParamDs];
		//trace("objParamDs-->"+objParamDs.saveXML());
		var sController   = nexacro.getApplication().gds_cmPopup.getColumn(0,"QRY_URL") ;
		var sInDatasets   = "INPUT="+sParamDs;	//조회조건 데이터셋 
		var sOutDatasets  = sRtnDs+"=output";	//받는 데이터셋
		var sArgs = "";
		//trace("sController-->"+sController);
		//trace("sInDatasets-->"+sInDatasets);
		//trace("sOutDatasets-->"+sOutDatasets);
		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, ""); 
	}else{
		var objDs = this.objects[sParamDs];
		var sAndWhere = "";
		for(var i=0; i< objDs.colcount; i++){
			if(objDs.getColID(i) == "QUERY" || objDs.getColID(i) == "CONDITION" || this.gfn_isNull(objDs.getColumn(0,i))) continue;
			sAndWhere += " and "+ objDs.getColID(i) + "='" + objDs.getColumn(0,i)+"'";
		}

		objDs.addColumn( "QUERY", "STRING" );
		objDs.addColumn( "CONDITION", "STRING" );

		objDs.setColumn(0, "QUERY", nexacro.getApplication().gds_cmPopup.getColumn(0,"QRY_URL") );
		objDs.setColumn(0, "CONDITION",sAndWhere);
		
		//trace("objDs-->"+objDs.saveCSV());
		var sController   = "/cmsa00400/selectUserQryList.do";
		var sInDatasets   = "INPUT="+sParamDs;	//조회조건 데이터셋 
		var sOutDatasets  = sRtnDs+"=output";	//받는 데이터셋
		var sArgs = "";
		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, ""); 
	}
	
	var objDs = this.objects[sRtnDs];
	if(objDs.rowcount==0){
		//alert("데이터가 존재하지 않습니다!!");
		return;
	}else if(objDs.rowcount>1){
		//alert("다수의 건이 존재합니다. 팝업창에서 확인하세요!!");
		return;
	}
	
	var arrRtnCol = sRtnCols.split("|");
	var rtnVal = new Array();
	for(var i=0; i<arrRtnCol.length; i++){
		var objItemVal =objDs.getColumn(0, arrRtnCol[i]);
		if(objItemVal == undefined)	objItemVal = "";		
		rtnVal[i] = objItemVal;
	}
	return rtnVal;	

}
 
/*********************************************************************
 * 함 수 명 	: nfn_setCompsCommomPoupGrid
 * 함수설명 	: 등록된 공통팝업을 이용하여 그리드 값 셑팅
 * 입    력 	: objDataset
 * 결    과 	: 등록된 공통팝업을 이용하여 그리드 값 셑팅
 *********************************************************************/
pForm.nfn_setCompsCommomPoupGrid = function(objGrid, popupCd, sParamDs, sRtnCols, sGridCols, nRow) 
{
	var objDsNm = objGrid.binddataset;
	//var objDs = this.objects[objDsNm];
	var sRtnDs = "ds_temp";
	if(this.objects[sRtnDs]==null ){
		tmpDs = new Dataset();
		tmpDs.set_name(sRtnDs);
		tmpDs.set_id(sRtnDs);
		this.addChild(sRtnDs,tmpDs );
	}

	var sSvcID = "selectCmdPopupList";
	var sController   = "/cmsa00100/selectCmdPopupList.do";
	var sInDatasets   = "";	//조회조건 데이터셋 
	var sOutDatasets  = "gds_cmPopup=output";	//받는 데이터셋
	var sArgs = "";
    sArgs += this.gfn_setParam("POPUP_CD",popupCd);
    this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, ""); 
	//trace(nexacro.getApplication().gds_cmPopup.saveCSV());
	if(nexacro.getApplication().gds_cmPopup.getColumn(0,"QRY_TY") == "U"){
	
		var objParamDs = this.objects[sParamDs];
		
		var sSvcID = "selectCommomPoupGrid";
		var sController   = nexacro.getApplication().gds_cmPopup.getColumn(0,"QRY_URL") ;
		var sInDatasets   = "INPUT="+sParamDs;	//조회조건 데이터셋 
		var sOutDatasets  = sRtnDs+"=output";	//받는 데이터셋
		var sArgs = "";
		//trace("sController-->"+sController);
		//trace("sInDatasets-->"+sInDatasets);
		//trace("sOutDatasets-->"+sOutDatasets);
		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, ""); 
		//alert(objParamDs.saveXML());
	}else{
		var objParamDs = this.objects[sParamDs];
		var sAndWhere = "";
		for(var i=0; i< objParamDs.colcount; i++){
			if(objParamDs.getColID(i) == "QUERY" || objParamDs.getColID(i) == "CONDITION" || this.gfn_isNull(objParamDs.getColumn(0,i))) continue;
			sAndWhere += " and "+ objParamDs.getColID(i) + "='" + objParamDs.getColumn(0,i)+"'";
		}

		objParamDs.addColumn( "QUERY", "STRING" );
		objParamDs.addColumn( "CONDITION", "STRING" );

		objParamDs.setColumn(0, "QUERY", nexacro.getApplication().gds_cmPopup.getColumn(0,"QRY_URL") );
		objParamDs.setColumn(0, "CONDITION",sAndWhere);
		
		var sSvcID = "selectCommomPoupGrid";
		var sController   = "/cmsa00400/selectUserQryList.do";
		var sInDatasets   = "INPUT="+sParamDs;	//조회조건 데이터셋 
		var sOutDatasets  = sRtnDs+"=output";	//받는 데이터셋
		var sArgs = "";
		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, ""); 
	}
	
	var objRtnDs = this.objects[sRtnDs];
	if(objRtnDs.rowcount==0){
		//alert("데이터가 존재하지 않습니다!!");
		
		var arrRtnCol = sRtnCols.split("|");
		var arrGridCol = sGridCols.split("|");
		for(var i=0; i<arrRtnCol.length; i++){ 
			//trace(sComp+"."+arrRtnComponent[i]+".set_value('"+objRtnDs.getColumn(0,arrRtnCol[i])+"')");
			//eval(sComp+"."+arrRtnComponent[i]+".set_value('"+objRtnDs.getColumn(0,arrRtnCol[i])+"')");
			eval("this."+objDsNm+".setColumn("+nRow +",'"+ arrGridCol[i]+"','')");
		}	
		
		return;
	}else if(objRtnDs.rowcount>1){
		//alert("다수의 건이 존재합니다. 팝업창에서 확인하세요!!");
		return;
	}
	
	//trace("objRtnDs-->"+objRtnDs.saveCSV());
	var arrRtnCol = sRtnCols.split("|");
	var arrGridCol = sGridCols.split("|");
	for(var i=0; i<arrRtnCol.length; i++){
		var objItemVal =objRtnDs.getColumn(0, arrRtnCol[i]);
		if(objItemVal == undefined)	objItemVal = "";
		//trace("arrRtnCol[i])-->"+arrRtnCol[i]);
		//trace("val-->"+objRtnDs.getColumn(0, arrRtnCol[i]));
		//trace("this."+objDsNm+".setColumn("+nRow +",'"+ arrGridCol[i]+"','"+objItemVal+"')");
		//eval(sComp+"."+arrRtnComponent[i]+".set_value('"+objRtnDs.getColumn(0,arrRtnCol[i])+"')");
		eval("this."+objDsNm+".setColumn("+nRow +",'"+ arrGridCol[i]+"',\""+objItemVal+"\")");
		//eval(sComp+"."+arrRtnComponent[i]+".set_value('"+objItemVal+"')");
	}	
	
}

/*********************************************************************
 * 함 수 명 	: nfn_isChangedDataset
 * 함수설명 	: form의 dataset의 변경되었는지 여부(변경:true,미변경:false)
 * 입    력 	: objDataset
 * 결    과 	: form의 dataset의 변경되었는지 여부(변경:true,미변경:false) 
 *********************************************************************/
pForm.nfn_isChangedDataset = function(objForm) 
{
	return this.gfn_chkFormCloseOne(objForm);
}

/*********************************************************************
 * 함 수 명 	: nfn_fromToCheck
 * 함수설명 	: from - to 크기 비교 후 
 * 입    력 	: 명칭, 시작obj , 종료obj, 필수여부(Y/N), 길이체크(0 또는 null 체크 안함 else 체크)
 * 결    과 	: 성공=true / 실패/false
 *********************************************************************/
pForm.nfn_fromToCheck = function(str, startObj, endObj, essFlg, len, bEssentia)
{
	// 필수 : Y , 미필수 : "N"
	if(this.nfn_isNull(essFlg)) essFlg = "Y";
	
	var startStr = startObj.value;
	var endStr   = endObj.value; 
	
	var cssFalse = "";
	// 에러처리 원복
	this.nfn_setEssential(startObj);
	this.nfn_setEssential(endObj);

	
	/***** 필수 체크 *****/
	
	if(essFlg == "N") // not 필수
	{
		cssFalse = "enabled_error";
		
		if(this.nfn_isNull(startStr)&&!this.nfn_isNull(endStr)) // From : null / To : not null
		{
			startObj.set_cssclass(cssFalse);
			this.gfn_Message("SelectSomeThing", str+"(From)", "warning","ok"); // {0}을(를) 선택하세요
			startObj.setFocus();
			return false; 
		}
		if(!this.nfn_isNull(startStr)&&this.nfn_isNull(endStr)) // From : not null / To : null
		{
			endObj.set_cssclass(cssFalse);
			this.gfn_Message("SelectSomeThing", str+"(To)", "warning","ok"); // {0}을(를) 선택하세요
			endObj.setFocus();
			return false; 
		}
		

		
	}
	else if(essFlg == "Y") // 필수
	{
		cssFalse = "essential_error";
		
		if(this.nfn_isNull(startStr))
		{
			startObj.set_cssclass(cssFalse);
			this.gfn_Message("SelectSomeThing", str+"(From)", "warning","ok"); // {0}을(를) 선택하세요
			startObj.setFocus();
			return false; 
		}
		if(this.nfn_isNull(endStr))
		{
			endObj.set_cssclass(cssFalse);
			this.gfn_Message("SelectSomeThing", str+"(To)", "warning","ok"); // {0}을(를) 선택하세요
			endObj.setFocus();
			return false; 
		}
	}
	
	/***** From - To 비교 *****/
	if(!this.nfn_isNull(startStr)&&!this.nfn_isNull(endStr)) // 둘다 값이 존재했을 시 Validation
	{
	
		/***** 길이 체크 *****/
		if(!this.nfn_lenCheck(str+"(From)",startObj,len)) return false;
		if(!this.nfn_lenCheck(str+"(To)",endObj,len)) return false;
		
		var startNum = Number(startStr);
		var endNum   = Number(endStr);
		
		// 비교
		if( startNum > endNum )
		{
		    this.gfn_Message("AMustAfterB",new Array(str+"(To)", str+"(From)"),"info","ok"); // {0}(은)는 {1}보다 이후이어야 합니다.
			startObj.set_cssclass(cssFalse);
			endObj.set_cssclass(cssFalse);
			endObj.setFocus();
			return false;
		}
	}
	return true;
}

/*********************************************************************
 * 함 수 명 	: nfn_lenCheck
 * 함수설명 	: 길이체크
 * 입    력 	: obj , 길이(0 또는 null 체크 안함 else 체크)
 * 결    과 	: 성공=true / 실패/false
 *********************************************************************/
pForm.nfn_lenCheck = function(str, obj, len)
{
	// 길이 변수
	if(this.nfn_isNull(len)) len = 0;
	
	// 명칭
	if(!this.nfn_isNull(str)) str = str+"의 ";
	
	// Object
	if(this.nfn_isNull(obj.value)) return true;
	
	var objVal   = obj.value;
	var lenNum   = Number(len);
	var cssStr   = obj.cssclass;
	var cssFalse = "";
	
	if(cssStr.indexOf("essential") != -1)
	{
		cssFalse = "essential_error";
	}
	else
	{
		cssFalse = "enabled_error";
	}
	
	// 에러처리 원복
	this.nfn_setEssential(obj);
	if(lenNum > 0)
	{
		if(objVal.length != lenNum)
		{
			obj.set_cssclass(cssFalse);
			this.gfn_Message("IMCMM0221", str+"길이가 맞지 않습니다.", "info","ok"); // {0}
			obj.setFocus();
			return false; 
		}
	}
	return true;
}

/*********************************************************************
  * 함 수 명 	: nfn_executeScan
 * 함수설명 	: 스캔프로그램 기동
 * 입    력 	: 
 * 결    과 	: 
 *********************************************************************/
pForm.nfn_executeScan = function(path)
{
	var ym = this.nfn_getCurrentSystemTime(0);

 	var sRtnDs = "ds_temp";
	if(this.objects[sRtnDs]==null ){
		tmpDs = new Dataset();
		tmpDs.set_name(sRtnDs);
		tmpDs.set_id(sRtnDs);
		this.addChild(sRtnDs,tmpDs );
	}
	var sSvcID = "selectAtchFileGuid";
	var sController   = "/comm/selectAtchFileGuid.do";
	var sInDatasets   = "";	//조회조건 데이터셋 
	var sOutDatasets  = sRtnDs+"=output";	//받는 데이터셋
	var sArgs = "";
	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, ""); 

	var objRtnDs = this.objects[sRtnDs];
	var filePath = path + ym.substring(0,6) + "/" + objRtnDs.getColumn(0,"FILE_ID")+".jpg";

//trace("filePath::"+filePath);
/*	
	var sSvcID        	= "executeShell";                    
    var sController   	= "/cmsa00400/executeShell.do";
    var sInDatasets   	= "";
    var sOutDatasets  	= "";
	var sArgs = "";		
		sArgs += this.gfn_setParam("EXE_PATH","C:\\scan_app\\scan_app.exe " + filePath );
	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs); 
*/
	var exePath = "C:\\scan_app\\scan_app.exe";
	gv_appTopFrame.form.WebBrowser00.callMethod("CallExe",exePath,filePath);	
	return filePath;
}

/*********************************************************************
 * 함 수 명 	: nfn_executeMask
 * 함수설명 	: 스캔프로그램 기동
 * 입    력 	: 
 * 결    과 	: 
 *********************************************************************/
pForm.nfn_saveScanFileInfo = function(filePath, tableNm, desc, archSrcKey,sSaveFileName)
{ 

	
 	var sParamDs = "ds_file00";
	if(this.objects[sParamDs]==null ){
		tmpDs = new Dataset();
		tmpDs.set_name(sParamDs);
		tmpDs.set_id(sParamDs);
		this.addChild(sParamDs,tmpDs );
	}
	
	var objParamDs = this.objects[sParamDs];
	objParamDs.addColumn("OC_FILE_NM", "string" );
	objParamDs.addColumn("TABLE_NAME","string");
	objParamDs.addColumn("DESC","string");
	objParamDs.addColumn("ATCH_SRC_KEY","string");
	objParamDs.addColumn("SVR_SAVE_COURS","string");
	objParamDs.addColumn("FULL_SAVE_COURS","string");
	objParamDs.addColumn("SCAN_FLG","string");
	objParamDs.addColumn("FILE_EXT","string");
	objParamDs.addColumn("DRM_APY_YN","string");
	objParamDs.addColumn("ATCH_FILE_GUID","string");
	objParamDs.addColumn("FILE_SIZE","string");
	objParamDs.clearData();
	objParamDs.addRow();
	
	var arSplitUrl   = filePath.split("/");    //   "/" 로 전체 url 을 나눈다
	var nArLength     = arSplitUrl.length;
	var sFileName         = arSplitUrl[nArLength-1];   // 나누어진 배열의 맨 끝이 파일명이다
	var svrSaveCours = filePath.substring(0,filePath.indexOf(sFileName));
	var arSplitFileName     = sFileName.split(".");   // 파일명을 다시 "." 로 나누면 파일이름과 확장자로 나뉜다
	var sAtchFileGuid = arSplitFileName[0];         // 파일이름
	var sFileExtension = arSplitFileName[1]     // 확장자
	var ocFileNm = sFileName;
	if(!this.gfn_isNull(sSaveFileName)) ocFileNm = sSaveFileName;
	
	objParamDs.setColumn(0,"OC_FILE_NM"     ,ocFileNm);
	objParamDs.setColumn(0,"TABLE_NAME"		,tableNm);
	objParamDs.setColumn(0,"DESC"			,desc);
	objParamDs.setColumn(0,"ATCH_SRC_KEY"	,archSrcKey);
	objParamDs.setColumn(0,"SVR_SAVE_COURS"	,"/"+svrSaveCours);
	objParamDs.setColumn(0,"FULL_SAVE_COURS",filePath);
	objParamDs.setColumn(0,"SCAN_FLG"		,"Y");
	objParamDs.setColumn(0,"FILE_EXT"		,sFileExtension);
	objParamDs.setColumn(0,"DRM_APY_YN"		,"N");
	objParamDs.setColumn(0,"ATCH_FILE_GUID"	,sFileName);
	objParamDs.setColumn(0,"FILE_SIZE"		,"0");

	objParamDs.applyChange(); // Insert를 Normal로 변경
	
	var sSvcID        = "updateAtchFiles";  
    var sController   = "/cmsa01200/updateAtchFiles.do";
	var sInDatasets   = "ds_file="+sParamDs;
	var sOutDatasets  = "";
	var sArgs = "";
    sArgs += this.gfn_setParam("method","updateAtchFiles");
    
	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, ""); 
	
	var sSvcID        = "selectAtchFileList";  
    var sController   = "/cmsa01200/selectAtchFileList.do";
	var sInDatasets   = "INPUT="+sParamDs;
	var sOutDatasets  = sParamDs+"=output";
	var sArgs = "";
    sArgs += this.gfn_setParam("method","selectAtchFileList");
    
	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, ""); 
	
	trace(" ********** 스캔파일 ATCH_FILE_ID RESULT ********** ");
	trace(" * ");
	trace(" * ATCH_FILE_ID = " + objParamDs.getColumn(0,"ATCH_FILE_ID"));
	trace(" * ");
	trace(" ********** 스캔파일 ATCH_FILE_ID RESULT ********** ");
	
	return objParamDs.getColumn(0,"ATCH_FILE_ID");
	
}

/*********************************************************************
 * 함 수 명 	: nfn_executeMask
 * 함수설명 	: 스캔프로그램 기동
 * 입    력 	: 
 * 결    과 	: 
 *********************************************************************/
pForm.nfn_executeMask = function(path)
{ 
/*
	var sSvcID        	= "executeShell";                    
    var sController   	= "/cmsa00400/executeShell.do";
    var sInDatasets   	= "";
    var sOutDatasets  	= "";
	var sArgs = "";		
		sArgs += this.gfn_setParam("EXE_PATH","C:/img_mask/img_mask.exe " + path);
	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs); 
*/
	var exePath = "C:\\img_mask\\img_mask.exe";
	gv_appTopFrame.form.WebBrowser00.callMethod("CallExe",exePath,path);	

}

/*********************************************************************
 * 함 수 명 	: fn_setDateFormat
 * 함수설명 	: 해당 날짜의 특수문자 제거 후 두번째 인자에 해당하는 포맷으로 변경
 * 입    력 	: 날짜 , 원하는 포멧(YYYYMMDD, YYYY/MM/DD, YYYY/MM/DD HH24:MI) 
 * 결    과 	: 포맷변경 된 날짜
 *********************************************************************/
pForm.nfn_setDateFormat = function(date, format)
{
	var dateNum = nexacro.replaceAll(date+"","/[^(가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9)]/gi",""); // 특수문자 제거
	format = format.toUpperCase();
	
	if(format == "YYYYMM")
		return dateNum.substring(0,4) + dateNum.substring(4,6);
	if(format == "YYYY/MM")
		return dateNum.substring(0,4) + "/" + dateNum.substring(4,6);
	if(format == "YYYYMMDD")
		return dateNum.substring(0,4) + dateNum.substring(4,6) + dateNum.substring(6,8);
	if(format == "YYYY/MM/DD")
		return dateNum.substring(0,4) + "/" + dateNum.substring(4,6) + "/" + dateNum.substring(6,8);
	if(format == "YYYY/MM/DD HH24:MI")
		return dateNum.substring(0,4) + "/" + dateNum.substring(4,6) + "/" + dateNum.substring(6,8) + " " + dateNum.substring(8,10) + ":" + dateNum.substring(10,12);
}

/*********************************************************************
 * 함 수 명 	: nfn_executeBatch
 * 함수설명 	: 배치실행
 * 입    력 	: batWkId, sKeys, sVals
 * 결    과 	: 
 *********************************************************************/
/*
pForm.nfn_executeBatch = function(batWkId, sKeys, sVals)
{
	//데이터셋 생성
	var sDsBatchWKS = "ds_batchWKS";
	if(this.objects[sDsBatchWKS]==null ){
		tmpDs = new Dataset();
		tmpDs.set_name(sDsBatchWKS);
		tmpDs.set_id(sDsBatchWKS);
		this.addChild(sDsBatchWKS,tmpDs );
	}

	var sDsBatchParam = "ds_batchParam";
	if(this.objects[sDsBatchParam]==null ){
		tmpDs = new Dataset();
		tmpDs.set_name(sDsBatchParam);
		tmpDs.set_id(sDsBatchParam);
		this.addChild(sDsBatchParam,tmpDs );
	}

	var sDsBatchResult = "ds_result1";
	if(this.objects[sDsBatchResult]==null ){
		tmpDs = new Dataset();
		tmpDs.set_name(sDsBatchResult);
		tmpDs.set_id(sDsBatchResult);
		this.addChild(sDsBatchResult,tmpDs );
	}

	var sSvcID        	= "selectBatchWKSList";                    
    var sController   	= "/cmbs01100/selectBatchWKSList.do";
    var sInDatasets   	= "";
	var sOutDatasets  	= "ds_batchWKS=ds_batchWKS";
	var sArgs           = "";		
		sArgs           += this.gfn_setParam("method","selectBatchWKSList");
		sArgs           += this.gfn_setParam("BAT_WK_ID", batWkId);
	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, ""); 

	var sSvcID        	= "selectBatchParamList";                    
	var sController   	= "/cmbs01100/selectBatchParamList.do";
    var sInDatasets   	= "";
	var sOutDatasets  	= "ds_batchParam=ds_batchParam";
	var sArgs = "";		
		sArgs += this.gfn_setParam("method","selectBatchParamList");
		sArgs += this.gfn_setParam("BAT_PGM_ID",this.ds_batchWKS.getColumn(0,"BAT_PGM_ID"));
	//this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs); 
	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, ""); 
 
 	
	//배치실행 
 	var arrKey = sKeys.split(",");
	var arrVal = sVals.split(",");
	for(var i=0; i<arrKey.length; i++){
		var nRow = this.ds_batchParam.findRow("PARAMTR",arrKey[i]);
		this.ds_batchParam.setColumn(nRow,"DEF_VAL",arrVal[i]);
	}	
		
	var sSvcID        	= "executeSampleBatch1";                    
	var sController   	= "/cmbs01100/executeSampleBatch1.do";
	var sInDatasets   	= "ds_batchWKS=ds_batchWKS ds_batchParam=ds_batchParam";
	var sOutDatasets  	= "ds_result1=output";
	var sArgs           = "";		
		sArgs           += this.gfn_setParam("method","executeSampleBatch1");
	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, ""); 
	
	if(!this.gfn_isNull(this.ds_result1.getColumn(0,"ERR_DESC"))){
		this.gfn_alert(this.ds_result1.getColumn(0,"ERR_DESC"));
		return;
	}
	
	this.gfn_Message("IMCMM0238",this.ds_batchWKS.getColumn(0,"BAT_WK_ID") + " / " + this.ds_batchWKS.getColumn(0,"BAT_PGM_ID"),"info");  // 배치 작업 ID {0} 실행 완료되었습니다.

	var sSvcID        	= "executeSampleBatch2";                    
	var sController   	= "/cmbs01100/executeSampleBatch2.do";
	var sInDatasets   	= "ds_batchWKS=ds_result1 ds_batchParam=ds_batchParam";
	var sOutDatasets  	= "";
	var sArgs           = "";		
		sArgs           += this.gfn_setParam("method","executeSampleBatch2");
	this.gfn_transaction(sSvcID, sController, sInDatasets, "", sArgs , "", false, true, ""); 
}
*/
/*********************************************************************
 * 함 수 명 	: nfn_executeBatchJob
 * 함수설명 	: 배치실행2 ( 쓰레드 방식 => Batch Job(Oracle) 방식 변경)
 * 입    력 	: pBatchCd(배치코드) : DRNP000001 / pParams(파라메터) : 201802:1:4 ( :으로 구분자)
 * 결    과 	: 
 *********************************************************************/
pForm.nfn_executeBatchJob = function(pBatchCd, pParams, flag)
{	
	// 데이터셋 생성(In 변수)
	var sDatchParamIn = "ds_batchParamIn";
	if(this.objects[sDatchParamIn]==null ){
		tmpDs = new Dataset();
		tmpDs.addColumn( "P_JOB_NAME" , "string" );
		tmpDs.addColumn( "P_BATCH_CD" , "string" );
		tmpDs.addColumn( "P_PARAMS"   , "string" );
		tmpDs.addColumn( "P_USERID"   , "string" );
		tmpDs.addColumn( "P_RETVAL"   , "string" );
		tmpDs.addColumn( "P_ERROR_MSG", "string" );
		tmpDs.set_name(sDatchParamIn);
		tmpDs.set_id(sDatchParamIn);
		this.addChild(sDatchParamIn,tmpDs );
	}
	// 데이터셋 생성(Out 변수)
	var sDatchParamOut = "ds_batchParamOut";
	if(this.objects[sDatchParamOut]==null ){
		tmpDs = new Dataset();
		tmpDs.set_name(sDatchParamOut);
		tmpDs.set_id(sDatchParamOut);
		this.addChild(sDatchParamOut,tmpDs );
	}
	
	// input 데이터 셋 초기화
	this.objects[sDatchParamIn].clearData();
	var nRow = this.objects[sDatchParamIn].addRow();
	
	trace(" ********** Batch Job Parameter ********** ");
	trace(" * ");
	trace(" * 배치코드 : " + pBatchCd);
	trace(" * 매개변수 : " + pParams);
	trace(" * ");
	trace(" ********** Batch Job Parameter ********** ");
	
    // input 데이터 셋 값 설정
	this.objects[sDatchParamIn].setColumn(nRow, "P_JOB_NAME",  "");
	this.objects[sDatchParamIn].setColumn(nRow, "P_BATCH_CD",  pBatchCd);
	this.objects[sDatchParamIn].setColumn(nRow, "P_PARAMS",    pParams);
	this.objects[sDatchParamIn].setColumn(nRow, "P_USERID",    this.gf_getUserAcnt());
	this.objects[sDatchParamIn].setColumn(nRow, "P_RETVAL",    "");
	this.objects[sDatchParamIn].setColumn(nRow, "P_ERROR_MSG", "");	
	//trace(this.objects[sDatchParamIn].saveXML());
	
	var sSvcID        = "executeBatchProcessRun";
    var sController   = "/drrc00000/executeBatchProcessRun.do";
	var sInDatasets   = "input=" + sDatchParamIn;
	var sOutDatasets  = sDatchParamOut+"=ouput";
	var sArgs         = "";
    sArgs            += this.gfn_setParam("method",sSvcID);
	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");
	
	var resultCnt = this.objects[sDatchParamOut].getColumn("RESULT_CNT");
	
	if(resultCnt == "S")
	{
		// 배치결과 조회
		var pJobName = this.objects[sDatchParamOut].getColumn(0, "P_JOB_NAME");
	
		trace(" ********** Batch Job Parameter ********** ");
		trace(" * ");
		trace(" * 배치코드 : " + pBatchCd);
		trace(" * 매개변수 : " + pParams);
		trace(" * 배치JOB  : " + pJobName);
		trace(" * ");
		trace(" ********** Batch Job Parameter ********** ");

		if(flag =='N') {
			return pJobName;
		}
		this.gfn_Message("정상적으로 처리 되었습니다.", null, "info","ok");
		
		var oArg    = { arg_pJobName:pJobName };
		this.gfn_goPage("drbm::DRBM02100M.xfdl", oArg, true);
	}
}

/*********************************************************************
 * 함 수 명 	: nfn_nvl
 * 함수설명 	: nvl
 * 입    력 	: v, def
 * 결    과 	: v가 널이면 def
 *********************************************************************/
pForm.nfn_nvl = function(v, def)
{
	return (this.gfn_isNull(v)) ? def : v;
}

/*********************************************************************
 * 함 수 명 	: nfn_cssClear
 * 함수설명 	: 에러 css 제거
 * 입    력 	: div object
 * 결    과 	: 실행 후 모든 에러css 제거
 *********************************************************************/
pForm.nfn_cssClear = function(obj) 
{
	if(obj instanceof Div) // Div Object 
	{
		for(var i=0;i<obj.form.components.length;i++)
		{
			var subObj = obj.form.components[i];
			if(subObj instanceof Div || subObj instanceof Tab) // Div Object 
				this.nfn_cssClear(subObj); // 반복
			else
			{
				this.nfn_setEssential(subObj); // css 제거
				this.nfn_clearObj(subObj);	// 초기화
			}	
		}
	}
	else if(obj instanceof Tab) // Div Object 
	{
		for(var i=0; i<obj.tabpages.length; i++){
			tabObj = obj.tabpages[i];
//			trace("tabObj-->"+tabObj.id);
			this.nfn_cssClear(tabObj); // 반복
			/*
			var objForm = tabObj.form;
			for(var i=0; i<objForm.components.length; i++){
				subObj = objForm.components[i];
				if(subObj instanceof Div || subObj instanceof Tab) // Div Object 
					this.nfn_cssClear(subObj); // 반복
				else
				{
					this.nfn_setEssential(subObj); // css 제거
					this.nfn_clearObj(subObj);	// 초기화
				}	
			}
			*/	
		}
	}
	else if(obj instanceof Tabpage) // Div Object 
	{
			var objForm = obj.form;
			for(var i=0; i<objForm.components.length; i++){
				subObj = objForm.components[i];
				if(subObj instanceof Div || subObj instanceof Tab) // Div Object 
					this.nfn_cssClear(subObj); // 반복
				else
				{
					this.nfn_setEssential(subObj); // css 제거
					this.nfn_clearObj(subObj);	// 초기화
				}	
			}	
	}
	else // 그 외
	{
		this.nfn_setEssential(obj); // css 제거
		this.nfn_clearObj(obj);	// 초기화
	}
}



/*********************************************************************
 * 함 수 명 	: nfn_gridMonthCheck
 * 함수설명 	: 그리드 년월 유효성 검사
 * 입    력 	: ds object, 체크할 column id, 필수여부
 * 결    과 	: true / false
 *********************************************************************/
pForm.nfn_gridMonthCheck = function(objGrid, colId)
{
	if(this.nfn_isNull(colId))
	{
		this.alert("컬럼정보가 없습니다.");
		return false;
	}
	
	var objData = objGrid.getBindDataset();//this.all[objGrid.binddataset];
 	for(var i=0; i < objData.getRowCount(); i++) {

		if (objData.getRowType(i) == 2 || objData.getRowType(i) == 4){
			var month = objData.getColumn(i, colId);
			if(!this.gfn_isNull(month)) 
			{
				if (!this.gfn_isDate6(month)) 
				{
					this.alert("유효하지 않은 년월입니다.");
					//objGrid.selectCell(i,this.nfn_GetColNum(objGrid,colId)); .. 
					objData.set_rowposition(i);
					objGrid.setFocus();
					objGrid.setCellPos(objGrid.getBindCellIndex("body", colId));
					objGrid.showEditor(true);
					return false;
				}
			}
		}
 	}
 	return true;
}

/*********************************************************************
 * 함 수 명 	: nfn_getFrameAguments
 * 함수설명 	: 파라메터 가져오기
 * 입    력 	: 가져올 변수
 * 결    과 	: true / false
 *********************************************************************/
pForm.nfn_getFrameAguments = function (sVal)
{
    var rtnVal = "";
    try
    {
		rtnVal = this.getOwnerFrame().arguments[sVal];
		if(this.nfn_isNull(rtnVal)) throw new Exception();
    }
    catch(e)
    {
		try
		{
			rtnVal = eval("this.parent."+sVal);
			if(this.nfn_isNull(rtnVal)) throw new Exception();
		}
		catch(e)
		{
			try
			{
				rtnVal = eval("this.parent.parent."+sVal);
				if(this.nfn_isNull(rtnVal)) throw new Exception();
			}
			catch(e)
			{
				try
				{
					rtnVal = eval("this.parent.parent.parent."+sVal);
					if(this.nfn_isNull(rtnVal)) throw new Exception();
				}
				catch(e)
				{
					trace(sVal + " : 변수 없음");
				};
			};
		};
    };
    return rtnVal;
}

/*********************************************************************
 * 함 수 명 	: nfn_checkTelNo
 * 함수설명 	: 전화번호 유효성 체크
 * 입    력 	: 전화번호, 전화(T)/핸드폰(H) 구분 
 * 결    과 	: true / false
 *********************************************************************/
pForm.nfn_checkTelNo = function (sTelNo, sGubn)
{

	if(this.gfn_isNull(sTelNo))
	{
		sTelNo = "";
		return true;
	}

	sTelNo= nexacro.trim(sTelNo);

	if(sGubn == "T")
	{	
		if(sTelNo.length < 9)
		{
			alert("전화번호(자리수) 입력 오류입니다.");
			return false;
		}
				
		if(sTelNo.substr(0, 3) == "070")
		{
			if(sTelNo.length < 10)
			{
				alert("전화번호(자리수) 입력 오류입니다.");
				return false;
			}	
			else
			{
				if(sTelNo.substr(3, 1) == "0")
				{
					alert("전화번호 입력 오류입니다.");
					return false;
				}					
				return true;
			}
		}
		
		if(sTelNo.substr(0, 2) == "02")
		{
			if(sTelNo.length < 9)
			{
				alert("전화번호(자리수) 입력 오류입니다.");
				return false;
			}
			else
			{
				if(sTelNo.substr(3, 1) == "0")
				{
					alert("전화번호 입력 오류입니다.");
					return false;				
				}
			
				return true;
			}
		}
		
		if(sTelNo.substr(0, 3) == "031")
		{
			if(sTelNo.length < 10)
			{
				alert("전화번호(자리수) 입력 오류입니다.");
				return false;
			}
			else
			{
				if(sTelNo.substr(3, 1) == "0")
				{
					alert("전화번호 입력 오류입니다.");
					return false;
				}
			
				return true;
			}
		}
	}
	else if( sGubn == "H")
	{
		if(sTelNo.length < 10)
		{
			alert("휴대전화(자리수:10이상) 입력 오류입니다.");
			return false;
		}
		else
		{
			if(sTelNo.substr(0, 2) == "01")
			{
				var firstTel="010/011/016/017/018/019";
				
				if ( firstTel.indexOf(sTelNo.substr(0, 3)) < 0)
				{
					alert("휴대전화(통신사) 입력 오류입니다.")
					return false;				
				}
				if (sTelNo.substr( 0, 3) == "010" &&  sTelNo.length == 10)
				{
					alert("휴대전화(자리수) 입력 오류입니다.");
					return false;
				}
				
				if (sTelNo.substr(3, 1) == "0")
				{
					alert("휴대전화 입력 오류입니다.")
					return false;
				}
				
				return true;
			}
			else
			{
				alert("휴대전화(통신사) 입력 오류입니다.")
				return false;
			}
		}
	}	
	return true;
}

/*********************************************************************
 * 함 수 명 	: nfn_recCall
 * 함수설명 	: cti녹취청취
 * 입    력 	: strStartTime, strEndTime, strRecordKey, strUserCode
 * 결    과 	: 녹취창 오픈
 *********************************************************************/
pForm.nfn_recCall = function (strStartTime, strEndTime, strRecordKey, strUserCode)
{
	gv_appTopFrame.form.WebBrowser01.callMethod("nexa_btnRecCall",strStartTime, strEndTime, strRecordKey, strUserCode);
}

/*********************************************************************
 * 함 수 명 	: nfn_partRecCall
 * 함수설명 	: 부분녹취청취
 * 입    력 	: strStartTime, strEndTime, strRecordKey, strUserCode
 * 결    과 	: 녹취창 오픈
 *********************************************************************/
pForm.nfn_partRecCall = function (strStartTime, strEndTime, strRecordKey, strUserCode)
{
	gv_appTopFrame.form.WebBrowser01.callMethod("nexa_btnPartRecCall",strStartTime, strEndTime, strRecordKey, strUserCode);
}

/*********************************************************************
 * 함 수 명 	: nfn_chkHHmmFromTo
 * 함수설명 	: 시분 입력값 체크 및 from - to  값 비교
 * 입    력 	: itemNm : 항목명
                  sObj  : From 시분
                  eObj  : To   시분
                  essFlg : 필수여부
                  chkFirst : sObj값만 체크(단일항목)                  
 * 결    과 	: 성공=true / 실패/false
 *********************************************************************/
pForm.nfn_chkHHmmFromTo = function(itemNm, sObj, eObj, essFlg, chkFirst, nextDayFlg)
{	
	if(this.nfn_isNull(essFlg)) essFlg = true;	
	if(this.nfn_isNull(chkFirst)) chkFirst = false;
	if(this.nfn_isNull(nextDayFlg)) nextDayFlg = true;
	
	var cssFalse = "";
	// 에러처리 원복
	this.nfn_setEssential(sObj);
	this.nfn_setEssential(eObj);

	
	var sMsgNm = "",  eMsgNm= "";
	
	if (chkFirst == true)
	{
		sMsgNm = itemNm;
	}
	else
	{
		sMsgNm = itemNm+"(From)";
		eMsgNm = itemNm+"(To)";
	}
			
	/***** 필수 체크 *****/
	
	if(essFlg == false) // not 필수
	{
		cssFalse = "enabled_error";
	}
	else if(essFlg == true) // 필수
	{
		cssFalse = "essential_error";
	}
	
	if (chkFirst == true)
	{
		if(this.nfn_isNull(sObj.value))// From : null
		{
			sObj.set_cssclass(cssFalse);
			this.gfn_Message("SelectSomeThing", sMsgNm, "warning","ok"); // {0}을(를) 선택하세요
			sObj.setFocus();
			return false; 
		}
	}
	else
	{
		if(this.nfn_isNull(sObj.value) && !this.nfn_isNull(eObj.value)) // From : null / To : not null
		{
			sObj.set_cssclass(cssFalse);
			this.gfn_Message("SelectSomeThing", sMsgNm, "warning","ok"); // {0}을(를) 선택하세요
			sObj.setFocus();
			return false; 
		}
		if(!this.nfn_isNull(sObj.value)&&this.nfn_isNull(eObj.value)) // From : not null / To : null
		{
			eObj.set_cssclass(cssFalse);
			this.gfn_Message("SelectSomeThing", eMsgNm, "warning","ok"); // {0}을(를) 선택하세요
			eObj.setFocus();
			return false; 
		}
	}	
	
	for (var i = 0; i < 2; i++)
	{
		if (chkFirst == true && i ==1) continue;
			
		var chkObj;		
		if (i == 0) chkObj = sObj;
		else		chkObj = eObj;
				
		if (chkObj.value.length != 4)
		{
			this.gfn_Message("InputCorrectSomething",sMsgNm,"info","ok"); // {0}을(를) 올바르게 입력하여 주십시오.(ex: 09:00)
			chkObj.setFocus();
			return false;
		}	
        
		if(Number(chkObj.value.substr(0,2)) > 23 || Number(chkObj.value.substr(2,4)) > 59)
		{			
			this.gfn_Message("IsNotSomething","시간 형식","info","ok"); //{0}이(가) 아닙니다.
			chkObj.setFocus();
			return;
		}
		if (nextDayFlg==false){
			if (chkObj.value <= this.gfn_dbTodayTime().substr(8,4))
			{
				this.gfn_Message("InputAfterCurrentTime",sMsgNm,"info","ok"); // {0}을(를) 현재 시간이후로 입력하여 주십시오.
				chkObj.setFocus();
				return false;
			}
		}
	}
	
						
	if (chkFirst != true)
	{
		/***** From - To 비교 *****/
		if(!this.nfn_isNull(sObj.value)&&!this.nfn_isNull(eObj.value)) // 둘다 값이 존재했을 시 Validation
		{		
			// 비교
			if( Number(sObj.value) > Number(eObj.value) )
			{
				this.gfn_Message("AMustAfterB",new Array(eMsgNm, sMsgNm),"info","ok"); // {0}(은)는 {1}보다 이후이어야 합니다.
				sObj.set_cssclass(cssFalse);
				eObj.set_cssclass(cssFalse);
				eObj.setFocus();
				return false;
			}
		}
	}	
	return true;
}

/* 메뉴로그쌓기 */
pForm.nfn_insertPiLogHistoryOfExcelDn = function(workTarget)
{
	var menuId = this.parent.parent._menuid;
		
	var menuNm = nexacro.getApplication().gds_menu.lookup("MENU_ID", menuId, "MENU_NM");
	var pageUrl = nexacro.getApplication().gds_menu.lookup("MENU_ID", menuId, "PAGE_URL");
	var formId = pageUrl.substring(pageUrl.indexOf("::")+2).replace(".xfdl","");
	
	var sSvcID        	= "insertPiLogHistoryOfExcelDn";
	var sController   	= "/drbm00100/insertPiLogHistoryOfExcelDn.do";
	var sArgs = "";
		sArgs += this.gfn_setParam("WORK_GB", "엑셀다운로드");  
		sArgs += this.gfn_setParam("PGM_NAME", menuNm+"(" + formId + ")"); // 메뉴명
		sArgs += this.gfn_setParam("PGM_GB", this.nfn_getMenuPath(menuId).replace(">"+menuNm,"")); //메뉴 경로명
		sArgs += this.gfn_setParam("WORK_TARGET", workTarget); //메뉴 경로명
	var sCallbackFunc = "fn_callBack";
	
	this.gfn_transaction(sSvcID, sController, "", "", sArgs, sCallbackFunc);
}

/* 메뉴로그쌓기 */
pForm.nfn_insertPiLogHistoryOfReport = function(workTarget)
{
	var menuId = this.parent.parent._menuid;
		
	var menuNm = nexacro.getApplication().gds_menu.lookup("MENU_ID", menuId, "MENU_NM");
	var pageUrl = nexacro.getApplication().gds_menu.lookup("MENU_ID", menuId, "PAGE_URL");
	var formId = pageUrl.substring(pageUrl.indexOf("::")+2).replace(".xfdl","");
	
	var sSvcID        	= "insertPiLogHistoryOfReport";
	var sController   	= "/drbm00100/insertPiLogHistoryOfExcelDn.do";
	var sArgs = "";
		sArgs += this.gfn_setParam("WORK_GB", "보고서");  
		sArgs += this.gfn_setParam("PGM_NAME", menuNm+"(" + formId + ")"); // 메뉴명
		sArgs += this.gfn_setParam("PGM_GB", this.nfn_getMenuPath(menuId).replace(">"+menuNm,"")); //메뉴 경로명
		sArgs += this.gfn_setParam("WORK_TARGET", workTarget); //메뉴 경로명
	var sCallbackFunc = "fn_callBack";
	
	this.gfn_transaction(sSvcID, sController, "", "", sArgs, sCallbackFunc);
}

/*********************************************************************
 * 함 수 명 	: nfn_getMenuPath
 * 함수설명 	: Menu Path
 * 입    력 	: menuId
 * 결    과 	: String
 *********************************************************************/
pForm.nfn_getMenuPath = function(menuId)
{
	var menuName = new Array();
	var arrIdx = 0;
	var currentRow = nexacro.getApplication().gds_menu.findRow("MENU_ID", menuId);
	var currentLvl = nexacro.getApplication().gds_menu.lookup("MENU_ID", menuId, "MENU_LEVEL");
	var fullPath = "";
	
	for(var i=currentRow ; i>-1 ; i--)
	{	
		var menuLvl = nexacro.getApplication().gds_menu.getColumn(i, "MENU_LEVEL");
		
		if(menuLvl == currentLvl)
		{
			menuName[arrIdx] = nexacro.getApplication().gds_menu.getColumn(i, "MENU_NM");
			arrIdx = arrIdx + 1;
			currentLvl = currentLvl - 1;
		}
		if(menuLvl == 0)
		{
			break;
		}
	}
	
	for(var j=(menuName.length-1) ; j>-1 ; j--)
	{
		fullPath = fullPath + menuName[j];
		if(j != 0)
		{
			fullPath = fullPath + ">";
		}
	}	
	return fullPath;
}

/*********************************************************************
 * 함 수 명 	: nfn_getDictionaryname
 * 함수설명 	: 사전명 가져오기
 * 입    력 	: strDictionaryid
 * 결    과 	: 사전명
 *********************************************************************/
pForm.nfn_getDictionaryname = function (strDictionaryid, bApply)
{
	if(this.gfn_isNull(bApply)) bApply = false;
	if(bApply){
		var dictionaryname = nexacro.getApplication().gds_cmdDictionary.lookup("DICTIONARYID",strDictionaryid,"DICTIONARYNAME");
		return this.nfn_nvl(dictionaryname,strDictionaryid);
	}
	else{
		if(this.gf_getLanguageType() == "ko-KR")	return "";
		var dictionaryname = nexacro.getApplication().gds_cmdDictionary.lookup("DICTIONARYID",strDictionaryid,"DICTIONARYNAME");
		return this.nfn_nvl(dictionaryname,strDictionaryid);
	}
}

pForm.nfn_getDictionarynameUpper = function (strDictionaryid)
{
	var row = nexacro.getApplication().gds_cmdDictionary.findRowExpr( "DICTIONARYID.toUpperCase() == '"+strDictionaryid.toUpperCase()+"'" );
	if(row < 0){
		return strDictionaryid;
	}
	return nexacro.getApplication().gds_cmdDictionary.getColumn(row,"DICTIONARYNAME");
}

/*********************************************************************
 * 함 수 명 	: nfn_getByteB
 * 함수설명 	: 바이트 길이 가져오기
 * 입    력 	: str
 * 결    과 	: 사전명
 *********************************************************************/
pForm.nfn_getByteB = function (str)
{
	if(this.gfn_isNull(str)) return 0;	
	var byte = 0;
	for (var i=0; i<str.length; ++i) {
		(str.charCodeAt(i) > 127) ? byte += 2 : byte++ ;
	}
	return byte;
}

/*********************************************************************
 * 함 수 명 	: nfn_isValidPassword
 * 함수설명 	: 유효한 패스워드인지 체크
 * 입    력 	: password
 * 결    과 	: boolean
 *********************************************************************/
pForm.nfn_isValidPassword = function (password){
	
	//8자 이상,15자리 이하 영어대.소, 숫자,특수문자
	var check = /^.*(?=^.{8,15}$)(?=.*[a-zA-Z])(?=.*?[#?!@$%^&*-/+<>~()_:;.,='"|\[\]\{\}\\]).*$/;
	//사용 가능한 특수문자 32자: !" # $ % & ' ( ) * + , = . / : ; < = > ? @ [ \ ] ^ _ { | } ~ 
	
	if(!check.test(password)){
		return false;
	}else{
		return true;
	}
}

/*********************************************************************
 * 함 수 명 	: nfn_searchOpen_onclick
 * 함수설명 	: 좌측 search 접혔다 펼쳤다 하게
 * 입    력 	: 
 * 결    과 	: 
 *********************************************************************/
pForm.nfn_searchOpen_onclick = function(obj,e)
{
	if(this.components["tab_search"]){
		if(this.tab_search.visible){
			this.tab_search.set_visible(false);
			this.sta_searchTitle.set_visible(false);
			if(this.components["div_work"]) this.div_work.set_left(0);
			if(this.components["tab_work"]) this.tab_work.set_left(0);
				
			obj.set_cssclass("btn_WF_searchClose");
		}else{
			this.tab_search.set_visible(true);
			this.sta_searchTitle.set_visible(true);
			if(this.components["div_work"]) this.div_work.set_left(nexacro.toNumber(this.tab_search.width)+3);
			if(this.components["tab_work"]) this.tab_work.set_left(nexacro.toNumber(this.tab_search.width)+3);
			
			obj.set_cssclass("btn_WF_searchOpen");
		}		
	}

};

/*********************************************************************
 * 함 수 명 	: nfn_numberWithCommas
 * 함수설명 	: 숫자 콤마
 * 입    력 	: 
 * 결    과 	: 
 *********************************************************************/
pForm.nfn_numberWithCommas = function(x) {
	if(this.gfn_isNull(x)) return "";
	x = ""+x;
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/*********************************************************************
 * 함 수 명 	: nfn_openComPopup
 * 함수설명 	: 공통팝업 호출
 * 입    력 	: 
 * 결    과 	: 
 *********************************************************************/
pForm.nfn_openComPopup = function(popupId, type, popupCd, rtnCols, paramCols, paramValues, searchStr,popupNm) {
	var popupId = popupId;
	var oArg = {};
	oArg.arg_type = type;
	oArg.arg_popupCd = popupCd;
	oArg.arg_popupNm = popupNm;
	oArg.arg_rtnCols = this.gfn_isEmpty(rtnCols);
	oArg.arg_paramCols = this.gfn_isEmpty(paramCols);
	oArg.arg_paramValues = this.gfn_isEmpty(paramValues);
	oArg.arg_searchStr = this.gfn_isEmpty(searchStr);
			   
	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
}

/*********************************************************************
 * 함 수 명 	: nfn_decimalFits
 * 함수설명 	: 소수점 자리수가 가장많은 수 return
 * 입    력 	: var arr = [0.1, 0.12, 0.123] decimalFits(arr); // 결과 : 3
 * 결    과 	: 
 *********************************************************************/
pForm.nfn_decimalFits = function(arr) {
	var decimalN = 0; 
	for(var j=0; j<arr.length; j++ ){ 
		var n = arr[j]; 
		if(!Number.isInteger(n)){ //소수 
			var d = String(n).split('.')[1].length; //문자열 소수점 다음 개수 
			if(decimalN < d) decimalN = d; 
		} 
	} 
	return decimalN;
}