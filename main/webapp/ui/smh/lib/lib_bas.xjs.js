//XJS=lib_bas.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 기준관리
         * 파일명 		: lib_bas.xjs
         * 작성자 		: sungmin.choe
         * 작성일 		: 2021.02.03
         *
         * 설  명		: 기준관리 업무에서 사용되는 공통함수 정의
         *---------------------------------------------------------------------------------------
         * 변경일		변경자			변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.03	sungmin.choe	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /*===============================================================================
        == 기준관리(BAS) 공통함수 목록
        ===============================================================================
        ● basfn_setCustomQueryCmb              : Custom Query를 이용한 Combo Data Binding
        ● basfn_setCustomQueryCmbDS            : Custom Query용 Combo Data Binding 동적생성 함수
        ● basfn_getPeriodData             		: 검색조건 구분별 날짜조회 동적생성 함수
        ● basfn_deleteRow             			: 그리드에 체크된 행 삭제
        ● basfn_copyDataset             		: Dataset 복사 함수
        ● basfn_checkGridDup             		: 그리드내 중복값 존재여부 체크
        ● basfn_removeEventGrid             	: 그리드 필터,정렬 기능 제거 함수
        ● Date2String							: 입력받은 날짜를 Date to String
        /*******************************************************************************
         * basfn_setCustomQueryCmb
         * 기능 : Custom Query를 이용한 Combo Data Binding
         * 최성민
         * Parameter  : obj - 콤보 Object
         *				 strCmbInfo - SQLID,콤보유형,수정가부,코드명표현식
         *			     oArgs	- 추가 파라미터
        *******************************************************************************/
        this.basfn_setCustomQueryCmb = function(obj, strCmbInfo, oArgs, bAsync)
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

        	strDs = "ds_"+sqlId+strCmbType+obj.id;
        	strDs = strDs.replace(" ","_");

        	var tmpDs ;
        	this.basfn_setCustomQueryCmbDS(strDs, sqlId, strCmbType, oArgs, pBAsync);

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
         * basfn_setCustomQueryCmbDS
         * 기능 : Custom Query용 Combo Data Binding 동적생성 함수
         * 최성민
         * Parameter  : strDs, sqlId, strCmbType, pArgs, bAsync
        *******************************************************************************/
        this.basfn_setCustomQueryCmbDS = function(strDs, sqlId, strCmbType, pArgs, bAsync)
        {
        	//DataSet 미존재시 동적생성
        	if(this.objects[strDs]==null ){
        		tmpDs = new Dataset();
        		tmpDs.set_name(strDs);
        		tmpDs.set_id(strDs);
        		this.addChild(strDs,tmpDs);
        	}

        	var strSearchDs = "ds_searchBasCode";
        	var colNm = "";

        	//다국어 및 기본옵션 선택 관련
        	if(strCmbType=="SEL"){
        		colNm = this.nfn_nvl(this.nfn_getDictionaryname("SELECT"),"선택"); //선택
        	} else if(strCmbType=="ALL"){
        		colNm = this.nfn_nvl(this.nfn_getDictionaryname("YPE_TOTAL"),"전체"); //전체
        	}

        	if(this.objects[strSearchDs]==null ){
        		var tmpDs = new Dataset();
        		tmpDs.addColumn( "SQL_ID", "string" );
        		tmpDs.addColumn( "CMB_TYPE", "string" );
        		tmpDs.set_name(strSearchDs);
        		tmpDs.set_id(strSearchDs);
        		this.addChild(strSearchDs,tmpDs );
        	}

        	this.objects[strSearchDs].clearData();
        	this.objects[strSearchDs].addRow();
        	this.objects[strSearchDs].setColumn(0,"SQL_ID",sqlId);
        	this.objects[strSearchDs].setColumn(0,"CMB_TYPE",colNm);

        	var sSvcID 			= "selectCustomQueryCmb";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "INPUT="+strSearchDs;
        	var sOutDatasets  	= strDs + "=output";
        	var sArgs 		  	= pArgs;
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "basfn_callBack", true, bAsync);
        }

        /*******************************************************************************
         * basfn_getPeriodData
         * 기능 : 검색조건 구분별 날짜조회 동적생성 함수
         * 최성민
         * Parameter  : strDs, sqlId, strCmbType, pArgs, bAsync
        *******************************************************************************/
        this.basfn_getPeriodData = function(strDs, periodType)
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

        	var sSvcID 			= "selectCustomQueryCmb";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "INPUT="+strSearchDs;
        	var sOutDatasets  	= strDs + "=output";
        	var sArgs 		  	= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "basfn_callBack", true, false);
        }

        /*******************************************************************************
         * basfn_callBack
         * 기능 : Custom Query Callback Function
         * 최성민
         * Parameter  : strDs, sqlId, strCmbType, pArgs, bAsync
        *******************************************************************************/
        this.basfn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "selectCustomQueryCmb")
        		{

        		}
        	}
        };

        /*******************************************************************************
         * basfn_deleteRow
         * 기능 : 그리드에 체크된 행 삭제
         * 최성민
         * Parameter  :
         *				dsObjFr : 소스Dataset
         *				args	: 체크박스 외에 추가 조건 (KEY==VALUE && KEY1==VALUE1)
         *				msg		: Confirm 메세지 표시여부 (msgId)
        *******************************************************************************/
        this.basfn_deleteRow = function (dsObj, args, msg)
        {
        	if(dsObj == null) return;
        	var isChkCnt = dsObj.getColIndex("CHK");
        	var chkCnt = isChkCnt==-1 ? -1 : dsObj.getCaseCount("CHK=='1'");
        	var rowCount = dsObj.rowcount;
        	var bOk = true;

        	//단일행 삭제건
        	if(chkCnt==-1){
        		var dsPosition = dsObj.rowposition;
        		if(dsPosition < 0) {
        			this.gfn_Message("NoSelections", "", "warning", "ok");
        			return;
        		} else {
        			if(!this.nfn_isNull(msg)){
        				bOk = this.gfn_Message(msg, null, "conf", "yesno");
        				if(!bOk){return}
        			}
        			dsObj.deleteRow(dsPosition);
        		}
        	} else {
        		//멀티행 삭제건
        		if (chkCnt==0)
        		{
        			this.gfn_Message("NoSelections", "", "warning", "ok");
        			return;
        		}

        		if(!this.nfn_isNull(msg)){
        			bOk = this.gfn_Message(msg, null, "conf", "yesno");
        			if(!bOk){return}
        		}

        		for(var j=rowCount+1; j>=0; j--){
        			if(dsObj.getColumn(j,"CHK")=="1"){
        				if(!this.nfn_isNull(args)){
        					var sRow 			= dsObj.findRowExpr(args);
        					if(sRow<0) continue;
        				}
        					dsObj.deleteRow(j);
        			}
        		}
        	}
        };


        /*******************************************************************************
         * basfn_copyDataset
         * 기능 : Dataset 복사 함수
         * 최성민
         * Parameter  :
         *				dsObjFr : 소스Dataset
         *				dsObjTo : 타겟Dataset
         *				args	: 복사후 초기화할 컬럼 배열 (A,B,C)
        *******************************************************************************/
        this.basfn_copyDataset = function (dsObjFr, dsObjTo, args)
        {

        	if(dsObjFr == null) return;
        	if(dsObjTo == null) dsObjTo = dsObjFr;
        	var row = -1;
        	var isChkCnt = dsObjFr.getColIndex("CHK");
        	var chkCnt = isChkCnt==-1 ? -1 : dsObjFr.getCaseCount("CHK=='1'");
        	var rowCount = dsObjFr.rowcount;
        	var exceptCol = new Array();

        	if(!this.nfn_isNull(args)){
        		exceptCol = args.split(",");
        	}

        	dsObjFr.set_enableevent(false);
        	dsObjTo.set_enableevent(false);

        	//단일행
        	if(chkCnt==-1){
        		var dsPosition = dsObjFr.rowposition;
        		if(dsPosition < 0) {
        			this.gfn_Message("NoSelections", "", "warning", "ok");
        			return;
        		} else {
        			row = dsObjTo.insertRow(dsPosition);
        			dsObjTo.copyRow(row, dsObjFr, dsPosition);
        			dsObjTo.setColumn(row,"CHK","0");
        			for(var j=0; j<exceptCol.length; j++){
        				dsObjTo.setColumn(row,exceptCol[j],"");
        			}
        		}
        	} else {
        		if (chkCnt==0)
        		{
        			this.gfn_Message("NoSelections", "", "warning", "ok");
        			return;
        		}
        		for(var i=0; i<rowCount; i++){
        			if(dsObjFr.getColumn(i,"CHK")=="1"){
        				row = dsObjTo.insertRow(i+1);
        				i+2;
        				dsObjTo.copyRow(row, dsObjFr, i);
        				/* KEY,WHO컬럼 관련 복사제외 */
        				dsObjTo.setColumn(row,"CHK","0");
        				for(var j=0; j<exceptCol.length; j++){
        					dsObjTo.setColumn(row,exceptCol[j],"");
        				}
        			}
        		}
        	}

        	dsObjFr.set_enableevent(true);
        	dsObjTo.set_enableevent(true);
        	return row;
        };

        /*******************************************************************************
         * basfn_checkGridDup
         * 기능 : 그리드내 중복값 존재여부 체크
         * 최성민
         * Parameter  :
         *				obj 	: 체크 Dataset
         *				chkCol  : 체크 컬럼ID (COLUMN_A|COLUMN_B|COLUMN_C)
         *				msg		: 체크컬럼 오류시 메세지 ID (MSG_A|MSG_B|MSG_C)
        *******************************************************************************/
         this.basfn_checkGridDup = function (obj, chkCol, msg)
         {
        	//속도문제로 로딩바 이미지 표시
        	if(this.nfn_isNull(chkCol)) return true;
        	var chkColList = chkCol.split("|");
        	var msgList = msg.split("|");

        	for(var i=0; i <obj.rowcount; i++){
        		if(obj.getRowType(i) == 2 || obj.getRowType(i) == 4){
        			for(var j=0; j <chkColList.length; j++){
        				var chkKey = chkColList[j];
        				var chkValue = obj.getColumn(i,chkKey);
        				var chkCnt = obj.getCaseCount(chkKey+"=='" + chkValue+"'");
        				//trace("chkKey=== " + chkKey + "chkValue=== " + chkValue + "chkCnt=== " + chkCnt);
        				if(chkCnt > 1){
        					var chkText = this.nfn_getDictionarynameUpper("FIELDDATA") +"[" + chkValue +"]" ;
        					this.gfn_Message(this.nfn_nvl(msgList[j],"CannotInputDupSomething"),chkText , "warning", "ok");
        					return false;
        				}
        			}
        		}
        	}
        	return true;
         };



         /*******************************************************************************
         * basfn_removeEventGrid
         * 기능 : 그리드 필터,정렬 기능 제거 함수
         * 최성민
         * Parameter  :
         *				obj 	: 그리드
        *******************************************************************************/
         this.basfn_removeEventGrid = function (obj)
         {
        	//sort 제거
        	obj.removeEventHandler("onheadclick", this.nfn_grd_onheadclick , this);
        	 //filter 제거
        	obj.removeEventHandler("onexpandup", this.nfn_grd_onexpandup , this);
        	//filter 제거
        	obj.removeEventHandler("onmousemove", this.nfn_grd_onmousemove , this);
         };


         this.Date2String = function (date, tp)
        {
        	if (!(date instanceof nexacro.Date) && !(date instanceof Date))	return "";	// 날짜 오브젝트가 아닌경우 "" 반환

        	var sYear	= date.getFullYear().toString();		// Date 오브젝트의 년
        	var sMonth	= (date.getMonth()+1).toString();		// Date 오브젝트의 월
        	var sDate	= date.getDate().toString();			// Date 오브젝트의 일
        	var sHours	= date.getHours().toString();
        	var sMin	= date.getMinutes().toString();
        	var sSec	= date.getSeconds().toString();
        	var sMilli	= date.getMilliseconds().toString();

        	sYear	= sYear.padLeft(4,"0");						// 년 4자리 적용
        	sMonth	= sMonth.padLeft(2,"0");					// 월 2자리 적용
        	sDate	= sDate.padLeft(2,"0");						// 일 2자리 적용
        	sHours	= sHours.padLeft(2,"0");
        	sMin	= sMin.padLeft(2,"0");
        	sSec	= sSec.padLeft(2,"0");

        	if(sYear.indexOf("-")>=0)							// 년도 음수(0000년01월01일보다 과거의 일자)
        	{
        		sYear	= sYear.substr(sYear.indexOf("-")+1);	// 음수부호를 제외한 년도 적용
        		sYear	= "-"+sYear.padLeft(3,"0");				// 음수부호를 첫문자에 적용(nexacro.toNumber로 형변환 가능)
        	}


        	switch(tp) {
        	case 1:
        		return sYear + "-" + sMonth + "-" + sDate;						// 년-월-일 반환
        		break;
        	case 2:
        		return sYear + "-" + sMonth + "-" + sDate + " " + sHours + ":" + sMin + ":" + sSec;	// 년-월-일 시:분:초 반환
        		break;

        	default:
        	}

        	return "";
        };

         /*******************************************************************************
         * basfn_saveBtn
         * 기능 : 저장버튼 공통처리
         * 최성민
         * Parameter  :
         *				obj 	: 그리드
        *******************************************************************************/
         this.basfn_saveBtn = function (obj)
         {
        	obj.set_text(" "+this.nfn_getDictionaryname(obj.tooltiptext,true));
        	obj.set_width(nexacro.toNumber(obj.width) + 25);
         };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
