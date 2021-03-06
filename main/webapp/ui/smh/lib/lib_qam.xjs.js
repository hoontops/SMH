//XJS=lib_qam.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 품질관리
         * 파일명 		: lib_qam.xjs
         * 작성자 		: 권혜영
         * 작성일 		: 2021.04.05
         *
         * 설  명		: 품질관리에서 사용되는 공통함수 정의
         *---------------------------------------------------------------------------------------
         * 변경일		변경자			변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.05	권혜영			최초작성 (//MES/ifc_doc/ifc_ui/ifc/nexacro17lib/component/extPrototype/comConstants.js)
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

         /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        var qamfv_rtnValue;

        var qamForm = nexacro.Form.prototype;
        qamForm.qam_rtnValue = new Array(Array(), Array(), Array());

        //품질관리 화면 조회조건 날짜 입력시 시분초 셋팅 변수,  앞 공백 제거시 포맷 오류발생함
        this.qam_jobStartTime = " 08:30:00";
        this.qam_jobEndTime = " 08:29:59"; //BETWEEN AND 사용시 08:30:00으로 보내면 포함되어서..

        this.qamSearchComp; //by 권혜영 (popup 조회 시 사용할 component 변수)
        this.qamfv_obj = {}; //by 권혜영 (함수에서 데이터 임시 저장 시 필요한 object type 변수)

        this.qam_lang;
        this.qam_userId;
        this.qam_plantId;
        this.qam_enterpriseId;

        /*******************************************************************************
         * qamfn_setCustomQueryCmb
         * 기능 : Custom Query를 이용한 Combo Data Binding
         * 권혜영
         * Parameter  : obj - 콤보 Object
         *				strCmbInfo - SQLID,콤보유형,수정가부,코드명표현식
         *			    oArgs	- 추가 파라미터
         *				oColumn : code, name 컬럼값 object
         *				objGrdInfo : 그리드 생성할 프로퍼티 담은 배열
        *******************************************************************************/
        this.qamfn_setCustomQueryCmb = function(obj, strCmbInfo, oArgs, sCallBackFunc, bAsync, oColumn, objGrdInfo)
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

        	var codeColumn = this.gfn_isNull(oColumn) ? "CODE" : oColumn.code;
        	var nameColumn = this.gfn_isNull(oColumn) ? "NAME" : oColumn.name;

        	//strDs = "ds_"+sqlId+strCmbType;

        	strDs = "ds_"+sqlId;
        	strDs = strDs.replace(" ","_");

        	var tmpDs ;
        	this.qamfn_setCustomQueryCmbDS(strDs, sqlId, strCmbType, oArgs, sCallBackFunc, pBAsync);

        	obj.set_innerdataset(strDs);
        	obj.set_codecolumn(codeColumn);
        	obj.set_datacolumn(nameColumn);

        	if(strAB=="B"){ // 코드+코드명 표시인 경우
        		obj.set_datacolumn("DESCRIPTION");
        	}

        	if(strEditable=="Y"){
        		obj.set_enable(true);
        	}else if(strEditable=="N"){
        		obj.set_enable(false);
        	}

        	obj.set_index(0);

        	//그리드 동적생성 추가 부분
        	if(!this.gfn_isNull(objGrdInfo) && typeof objGrdInfo == "object") {
        		this.qamfn_createGrd(obj, strDs, sqlId, objGrdInfo);

        	}
        };

        /*******************************************************************************
         * qamfn_createGrd
         * 기능 : 콤보 하단에 나올 동적 그리드 생성
         * 권혜영
         * Parameter  : obj - 콤보 Object
         *				strCmbInfo - SQLID,콤보유형,수정가부,코드명표현식
         *			    oArgs	- 추가 파라미터
         *				oColumn : code, name 컬럼값 object
         *				objGrdInfo : 그리드 생성할 프로퍼티 담은 배열
        *******************************************************************************/
        this.qamfn_createGrd = function (objCmb, objDs, sqlId, objGrdInfo) {
        	var objGrid = new Grid();
        	var objGridName = "grd_" + sqlId;
        	var cellCnt = nexacro.toNumber(objGrdInfo.count), objGridSize = 0;

        	//total width 계산
        	for (var r = 0; r < cellCnt; r++)  {
        		objGridSize += nexacro.toNumber(objGrdInfo.size.split("|")[r]);
        	}
        	objGrid.init(objGridName, objCmb.left, nexacro.toNumber(objCmb.top) + nexacro.toNumber(objCmb.height), objGridSize + 20, 120); //left, top, width, height
        	// Add Object to Parent Form
        	objCmb.parent.addChild(objCmb, objGrid);
        	objGrid.createFormat();
        	// Show Object
        	objGrid.show();
        	objGrid.set_binddataset(objDs);
        	objGrid.appendContentsRow("head");
        	objGrid.appendContentsRow("body");

        	// band setting by cell properties
        	for (var r = 0; r < cellCnt; r++)  {
        		if(r < cellCnt-1) {
        			objGrid.appendContentsCol();
        		}
        		// Col Size Setting
        		objGrid.setFormatColProperty(r, "size", nexacro.toNumber(objGrdInfo.size.split("|")[r]));
        		objGrid.setCellProperty("head", r, "text", objGrdInfo.text.split("|")[r]);
        		objGrid.setCellProperty("head", r, "tooltiptext", objGrdInfo.tooltiptext.split("|")[r]);
        		objGrid.setCellProperty("body", r, "text", "bind:" + objGrdInfo.bindColumn.split("|")[r]);
        		objGrid.setCellProperty("body", r, "textAlign", objGrdInfo.textAlign.split("|")[r]);
        	}

        	//event 추가
        	objGrid.addEventHandler("oncellclick", function(obj, e) {
        		var ret;
        		//objCmb.set_value(objDs.getColumn(e.row, "SPLITCONSUMABLEDEFIDVERSION"));
        		if(!this.nfn_isNull(objGrdInfo.retColumn)) {
        			var pArg = {objGrid: obj, row: e.row, colId: objGrdInfo.retColumn, type: "text"};
        			ret = this.qamfn_getCellValue(pArg);
        		} else if(!this.nfn_isNull(objGrdInfo.retColIdx)) {
        			ret = obj.getCellValue(e.row, objGrdInfo.retColIdx);
        		}

        		if(!this.nfn_isNull(ret)) {
        			if(!this.nfn_isNull(objGrdInfo.sCallBackFunc) && (typeof objGrdInfo.sCallBackFunc) == "function") {
        				//objGrdInfo.sCallBackFunc(ret); //////?????????????
        				this.fn_callBackComboGrid(sqlId, ret);
        			} else {
        				objCmb.set_value(ret);
        			}
        		}
        		obj.set_visible(false);

        	}, this);


        	objCmb.addEventHandler("ondropdown", function(obj, e) {

        		if(objGrid.visible) {
        			objGrid.set_visible(false);
        		} else {
        			objGrid.set_visible(true);
        		}

        		return false;
        	}, this);

        	objGrid.set_visible(false);

        };

        /*******************************************************************************
         * qamfn_setCustomQueryCmbDS
         * 기능 : Custom Query용 Combo Data Binding 동적생성 함수
         * 권혜영
         * Parameter  : strDs, sqlId, strCmbType, pArgs, bAsync
        *******************************************************************************/
        this.qamfn_setCustomQueryCmbDS = function(strDs, sqlId, strCmbType, pArgs, sCallBackFunc, bAsync)
        {
        	//DataSet 미존재시 동적생성
        	if(this.objects[strDs]==null ){
        		tmpDs = new Dataset();
        		tmpDs.set_name(strDs);
        		tmpDs.set_id(strDs);
        		this.addChild(strDs,tmpDs);
        	}

        	var strSearchDs = "ds_search";
        	var colNm = "";

        	//다국어 및 기본옵션 선택 관련
        	if(strCmbType=="SEL"){
        		colNm = this.nfn_nvl(this.nfn_getDictionaryname("SELECT"),"선택"); //선택
        	} else if(strCmbType=="ALL"){
        		colNm = this.nfn_nvl(this.nfn_getDictionaryname("YPE_TOTAL"),"전체"); //전체
        	}
        	//데이터 셋으로 보내지 않고 아규먼트로 보낸다.
        	pArgs += this.gfn_setParam("SQL_ID", sqlId);
        	if(!this.nfn_isNull(colNm)) {
        		pArgs += this.gfn_setParam("CMB_TYPE", colNm);
        	}

        	//콜백함수
        	if(this.gfn_isNull(sCallBackFunc)){
        		//this.gfn_Message("디폴트 콜백지정", null, "info", "ok");
        		sCallBackFunc = "qamfn_callBack";
        	}else{
        		//this.gfn_Message(sCallBackFunc+" 으로 콜백지정", null, "info", "ok");
        	}

        	var sSvcID 			= sqlId;
        	var sController 	= "/qampopup/selectQamCustomQuery.do";
        	//var sInDatasets   	= "INPUT="+strSearchDs;
        	var sInDatasets   	= "";
        	var sOutDatasets  	= strDs + "=output";
        	var sArgs 		  	= pArgs;

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, sCallBackFunc, true, bAsync);
        };

        /*******************************************************************************
         * qamfn_callBack
         * 기능 : Custom Query Callback Function
         * 권혜영
         * Parameter  : trId, errCD, errMsg
        *******************************************************************************/
        this.qamfn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "selectQamCustomQuery")
        		{
        		}
        	}
        };

        /*******************************************************************************
         * qamfn_openPop
         * 기능 : 공통 팝업 호출 함수 (main 화면의 search 에서만 쓸 수 있음)
         * 권혜영
         * Parameter  : btnName (예 : btn_area 일 경우 "area"만 넘김)
        *******************************************************************************/
        this.qamfn_openPop = function(btnName)
        {
        	var comp = this.qamSearchComp || this.tab_search.Tabpage1.form;
        	var edtName = "edt_" + btnName;

        	if(this.nfn_isNull(btnName) || typeof comp[edtName] == "undefined") return;

        	// gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
        	//-----------------
        	// arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅
        	// popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        	// popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        	// rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        	// paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        	// paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        	// searchStr   : 팝업 조회조건 콤보값 = 조회 값

        	var oArg = {};
        	var opts = "width=600,height=500";

        	oArg.arg_type = "BA";
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "SEARCH_KEY=" + comp[edtName].value || "";

        	if(btnName == "reasonarea") { // 원인작업장 조회 P00269 (by khyed) //GetAreaListByQcm
        // 		oArg.arg_popupCd 		= "P00269";
        // 		oArg.arg_rtnCols 		= "AREAID|AREANAME";
        // 		oArg.arg_paramCols  	= "P_POPTYPE|P_LANGUAGETYPE|P_USER|P_PLANTID";
        // 		oArg.arg_paramValues	= "AREALISTBYAUTHORITY|" + this.gf_getLanguageType() + "|" + this.gf_getUserAcnt() + "|" + this.tab_search.Tabpage1.form.cbo_site.value || this.gf_getSiteType();
        // 		oArg.arg_searchStr   	= "P_DICTIONARY=" +comp[edtName].value || "";

        		oArg.arg_popupCd 		= "P00269";
        		oArg.arg_rtnCols 		= "AREAID|AREANAME";
        		oArg.arg_searchStr   	= "SEARCH_KEY=" + comp[edtName].value || "";

        	} else if(btnName == "area") { // 작업장 조회 P00217 (by qam) //GetAuthorityUserUseArea
        		oArg.arg_popupCd 		= "P00217";
        		oArg.arg_rtnCols 		= "AREAID|AREANAME";
        		oArg.arg_paramCols  	= "LANGUAGETYPE|USER_ID|PLANTID";
         		oArg.arg_paramValues	= this.gf_getLanguageType() + "|" + this.gf_getUserId() + "|" + this.gf_getSiteType();
        		oArg.arg_searchStr   	= "AREAIDNAME=" + comp[edtName].value || "";

        	} else if(btnName == "customer") { // 고객사 조회 P00042
        		opts = "width=650,height=500";
        		oArg.arg_popupCd 		= "P00042";
        		oArg.arg_rtnCols 		= "CUSTOMERID|CUSTOMERNAME";

        	} else if(btnName == "equipment") { // 설비 조회 P00234 (by khyed)
        		oArg.arg_popupCd 		= "P00234";
        		oArg.arg_rtnCols 		= "EQUIPMENTID|EQUIPMENTNAME";

        	} else if(btnName == "inspitem") { // 검사 항목 조회 P00235 (by khyed)
        		oArg.arg_popupCd 		= "P00235";
        		oArg.arg_rtnCols 		= "INSPITEMID|INSPITEMNAME";

        	} else if(btnName == "productdef" || btnName == "productdef_id" || btnName == "item") { // 품목코드 조회 P00236 (by khyed) //GetProductListByQcm
        		//opts = "width=600,height=500";
        		oArg.arg_popupCd 		= "P00236";
        		oArg.arg_rtnCols 		= "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        		oArg.arg_searchStr   	= "SEARCH_KEY=" + comp[edtName].value || "";

        	} else if(btnName == "processsegment") { // 공정 조회 P00206
        		//opts = "width=550,height=500";
        		oArg.arg_popupCd 		= "P00206";
        		oArg.arg_rtnCols 		= "PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        		oArg.arg_paramCols 		= "PLANTID|VALIDSTATE";
        		oArg.arg_paramValues 	= this.gf_getSiteType()+"|Valid";
        		oArg.arg_searchStr   	= "PROCESSSEGMENTNAME=" + comp[edtName].value || "";

        	} else if(btnName == "discoveryProcesssegment" || btnName == "segment") { // 발견공정 조회 P00248 // GetSmallProcesssegmentListByQcm

        		opts = "width=450,height=500";
        		oArg.arg_popupCd 		= "P00248";
        		oArg.arg_paramCols   	= "LANGUAGETYPE|ENTERPRISEID";
                oArg.arg_paramValues 	= this.gf_getLanguageType() +'|'+ this.gf_getEnterpriseId();
                oArg.arg_rtnCols     	= "PROCESSSEGMENTID|PROCESSSEGMENTNAME|PROCESSSEGMENTVERSION";
        		oArg.arg_searchStr   	= "PROCESSSEGMENTIDNAME=" + comp[edtName].value || "";

        	} else if(btnName == "qamProcesssegment") { // 공정 조회  P00304  (by khyed) //GetProcessSegmentList
        		opts = "width=450,height=500";
        		oArg.arg_popupCd 		= "P00304";
        		oArg.arg_rtnCols 		= "PROCESSSEGMENTID|PROCESSSEGMENTNAME";
        		oArg.arg_searchStr   	= "PROCESSSEGMENT=" + comp[edtName].value || "";

        	}
        	else if(btnName == "manager" || btnName == "receiptor" || btnName == "checker" ) { // 사용자 조회 P00208
        		//opts = "width=550,height=500";
        		oArg.arg_popupCd 		= "P00208";
        		oArg.arg_rtnCols 		= "USERID|USERNAME";
        		oArg.arg_paramCols 		= "VERSION";
        		oArg.arg_paramValues 	= "10001";
        		oArg.arg_searchStr   	= "USERIDNAME=" + comp[edtName].value || "";

        	} else if(btnName == "inspector") { // 사용자 조회 P00251
        		opts = "width=650,height=500";
        		oArg.arg_popupCd 		= "P00251";
        		oArg.arg_rtnCols 		= "USERID|USERNAME|AREAID|AREANAME";
        // 		oArg.arg_paramCols 		= "USERIDNAME|AREAIDNAME";
        // 		oArg.arg_paramValues 	= "10001";
        		oArg.arg_searchStr   	= "USERIDNAME=" + comp[edtName].value || "" ;

        	} else if(btnName == "defectcode") { // 불량코드 조회 P00259 (by khyed) //GetDefectCodeList ver.10002
        		oArg.arg_popupCd 		= "P00259";
        		oArg.arg_rtnCols 		= "DEFECTCODE|DEFECTNAME";
        		oArg.arg_paramCols 		= "PLANTID";
        		oArg.arg_paramValues 	= this.gf_getSiteType();

        	} else if(btnName == "defectcodeProcess") { // 불량코드 조회 P00230 (by qam) //GetDefectCodeByProcess
        		oArg.arg_popupCd 		= "P00230";
        		oArg.arg_rtnCols 		= "DEFECTCODE|DEFECTNAME";
        		oArg.arg_paramCols  	= "LANGUAGETYPE";
        		oArg.arg_paramValues 	= this.gf_getLanguageType();
                oArg.arg_rtnCols     	= "JOINCODE|JOINNAME|DEFECTCODE|QCSEGMENTID";
        		oArg.arg_searchStr   	= "DEFECTCODENAME=" + comp[edtName].value || "";

        	}
        	else if(btnName == "reasonvendor" || btnName == "reasonvendor_id") { // 거래처 조회 P00270 (by khyed) //GetVendorListByQcm
        		oArg.arg_popupCd 		= "P00270";
        		oArg.arg_rtnCols 		= "VENDORID|VENDORNAME";
        		oArg.arg_searchStr   	= "SEARCH_KEY=" + comp[edtName].value || "";

        	}

        	if(!this.nfn_isNull(oArg.arg_popupCd)) {
        		this.gfn_openPopup("srch_"+btnName,"cmd::CMSA00100P.xfdl",oArg,opts,"qamfn_popupAfter");
        		this.qamfv_rtnValue = true;
        	}
        };

        /*******************************************************************************
         * qamfn_popupAfter
         * 기능 : 팝업 결과 리턴
         * 권혜영
        *******************************************************************************/
        this.qamfn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	var comp = this.qamSearchComp || this.tab_search.Tabpage1.form;
        	var objName = sPopupId.split("_")[1];

        	if(this.nfn_isNull(objName)) return;

        	var edtName = "edt_" + objName;
        	var edtId = "edt_" + objName + "_id";
        	var edtCd = "edt_" + objName + "_cd";

        	if(!this.nfn_isNull(comp[edtName])) {
        		comp[edtName].set_value(rtn[1]);

        		if(this.nfn_isNull(rtn[1])) {
        			comp[edtName].set_value(rtn[0]);
        		}
        	}
        	if(!this.nfn_isNull(comp[edtId])) {
        		comp[edtId].set_value(rtn[0]);
        	}
        	if(!this.nfn_isNull(comp[edtCd])) {
        		comp[edtCd].set_value(rtn[2]);
        	}


        	//예외처리
        	if(sPopupId == "srch_inspector") {
        		if(!this.nfn_isNull(comp["edt_areaname"])) {
        			comp["edt_areaname"].set_value(rtn[3]);
        		}
        		if(!this.nfn_isNull(comp["edt_area_id"])) {
        			comp["edt_area_id"].set_value(rtn[2]);
        		}
        	}
        };

        /*******************************************************************************
         * qamfn_callOpenPopButtonEvent
         * 기능 : button 클릭 시 팝업오픈 호출하는 함수
         * 권혜영
         * Parameter  : 이벤트 호출 시 넘어가는 obj, event
         * button 에는 onclick 이벤트에 호출
        *******************************************************************************/
        this.qamfn_callOpenPopButtonEvent = function (obj, e)
        {
        	if(typeof e == "object" && typeof obj == "object" && (obj instanceof Edit || obj instanceof Button)) {
        		var eventid = e.eventid, objName = obj.name;
        		if(!this.nfn_isNull(eventid) && !this.nfn_isNull(objName)) {

        			//button 클릭 시
        			if(eventid == "onclick" && objName.indexOf("btn_") > -1) {
        				var arrObjName = objName.split("btn_");
        				var btnName = arrObjName[1];

        				if(!this.nfn_isNull(btnName)) {
        					this.qamfn_openPop(btnName);
        				}
        			}
        			else {
        				trace("[debug] qamfn_openPop() function  call --> event id : " + eventid + " / object name : " + objName);
        			}

        		} else {
        			trace("[debug] qamfn_openPop() function  call --> event id is null or object name is null");
        		}
        	} else {
        		trace("[debug] qamfn_openPop() function  call --> obj or e is not object... or object component is not edit or button");
        	}
        };

        /*******************************************************************************
         * qamfn_callOpenPopEditEvent -> button 클릭 시 호출됨
         * 기능 : edit 클릭 시 팝업오픈 호출하는 함수
         * 권혜영
         * Parameter  : 이벤트 호출 시 넘어가는 obj, event
         * edit 에는 onkeydown 이벤트에 호출
        *******************************************************************************/
        this.qamfn_callOpenPopEditEvent = function (obj, e)
        {
        	if(typeof e == "object" && typeof obj == "object" && obj instanceof Edit ) {
        		var eventid = e.eventid, objName = obj.name;
        		if(!this.nfn_isNull(eventid) && !this.nfn_isNull(objName)) {

        			if(eventid == "onkeydown" && objName.indexOf("edt_") > -1) {
        				var arrObjName = objName.split("edt_");
        				var edtName = arrObjName[1];

        				if(e.keycode != 13) return;
        				this.qamfn_openPop(edtName);
        			}
        			else {
        				trace("[debug] qamfn_openPop() function  call --> event id : " + eventid + " / object name : " + objName);
        			}

        		} else {
        			trace("[debug] qamfn_openPop() function  call --> event id is null or object name is null");
        		}
        	} else {
        		trace("[debug] qamfn_openPop() function  call --> obj or e is not object... or object component is not edit");
        	}
        };

        /*******************************************************************************
         * qamfn_getCellValue
         * 기능 : column id로 grid 의 cell value 조회
         * 권혜영
         * Parameter  :
          - objGrid 	: oArg.objGrid; //grid id
        	nRow 		: oArg.row; //cell row
        	colId 		: oArg.colId; //조회할 column name (|로 여러 건 조회)
        	retName 	: oArg.retName; // return 받을 변수명 (|로 여러 건 리턴)
        	searchType 	: oArg.type; //text or value
         * Return 	:
        	조회할 column 이 	여러건일 경우 binging된 컬럼의 데이터를 object로 리턴
        						한 건일 경우 string으로 리턴
        *******************************************************************************/
        this.qamfn_getCellValue = function(oArg)
        {
        	if(this.gfn_isNull(oArg)) return;

        	var cellIdx = -1, rArg = {}, rStr = "", isArr = false;
        	var objGrid = oArg.objGrid;
        	var nRow = oArg.row;
        	var colId = oArg.colId;
        	var retName = oArg.retName || oArg.colId;
        	var searchType = oArg.type || "value";
        	var arrColId, arrRetName;

        	if(colId.indexOf("|") > -1) {
        		isArr = true;
        		arrColId = colId.split("|");
        		arrRetName = retName.split("|");

        		//colId length와 retName length가 같아야 함
        		if(arrColId.length != arrRetName.length || this.gfn_isNull(objGrid)) {
        			return;
        		}
        	}

        	if(searchType == "value") {
        		var objDs = objGrid.getBindDataset();

        		if(isArr) {
        			for(var i = 0; i < arrColId.length; i++) {
        				rArg[arrRetName[i]] = objDs.getColumn(nRow, arrColId[i]);
        			}
        		} else {
        			rStr = objDs.getColumn(nRow, colId);
        		}

        	} else {
        		var nCellCnt = objGrid.getCellCount("body");
        		for(var i = 1; i <= nCellCnt; i++) {
        			var retColId = objGrid.getCellProperty("body", i, "text");

        			if(!this.gfn_isNull(retColId)) {
        				retColId = retColId.replace("bind:", "");
        			}

        			if(isArr) {
        				for(var j = 0; j < arrColId.length; j++) {
        					if(retColId == arrColId[j]) {
        						rArg[arrRetName[j]] = objGrid.getCellText(nRow, i);
        					}
        				}
        			} else {
        				if(retColId == colId) {
        					rStr = objGrid.getCellText(nRow, i);
        				}
        			}

        		}
        	}
        	if(isArr) {
        		return rArg;
        	} else {
        		return rStr;
        	}
        };

        /*******************************************************************************
         * qamfn_setCompControl
         * 기능 : div 내의 div component 제어
         * 권혜영
         * Parameter  : - objDiv - div
         * 				- 처리할 type : 'disable' or 'enable' or 'empty' or 'show' or 'hide' or 'readonly' or 'notReadonly'
         *					show  : edit 또는 div enable , button 은 show
         *					hide  : edit 또는 div disable , button 은 hide
         *				- arrCompType :처리할 component type을 배열 형태로 넣어줌
         *				- ignoreObj : 적용하지 않을 object name 을 | 로 구분해서 넣어줌
        *******************************************************************************/
        this.qamfn_setCompControl = function (objDiv, type, arrCompType, ignoreObj) {

        	if(this.nfn_isNull(objDiv)) return;
        	//empty 일 경우에는 default : Edit
        	if(type == "empty") {
        		arrCompType = arrCompType || [Edit, MaskEdit];
        	} else {
        		arrCompType = arrCompType || [Edit, MaskEdit, Combo, Div, Button];
        	}

        	ignoreObj = ignoreObj || "";
        	var arrIgnoreObj = ignoreObj.split("|"), tmpObj, revertObj = [], revertCnt = 0;

        	var divComp = objDiv;
        	for(var i = 0; i < divComp.length; i++) {
        		tmpObj = divComp[i];

        		if(!this.nfn_isNull(arrIgnoreObj)) {
        			for(var k = 0; k < arrIgnoreObj.length; k++) {
        				if(tmpObj.id == arrIgnoreObj[k]) {
        					revertObj[revertCnt++] = {id: tmpObj.id, visible: tmpObj.visible, enable: tmpObj.enable};
        					break;
        				}

        			}
        		}
        		for(var j = 0; j < arrCompType.length; j++) {
        			if(!this.nfn_isNull(arrCompType[j]) && tmpObj instanceof arrCompType[j]) {
        				if(type == "disable") {
        					tmpObj.set_enable(false);
        				} else if(type == "enable") {
        					tmpObj.set_enable(true);
        				} else if(type == "empty") {
        					tmpObj.set_value("");
        				} else if(type == "show") {
        					tmpObj.set_visible(true);
        				} else if(type == "hide") {
        					tmpObj.set_visible(false);
        				} else if(type == "readonly") {
        					tmpObj.set_readonly(true);
        				} else if(type == "notReadonly") {
        					tmpObj.set_readonly(false);
        				}
        			}
        		}
        	}
        	if(!this.nfn_isNull(revertObj) && typeof revertObj == "object") {
        		for(var k = 0; k < revertObj.length; k++) {
        			if(typeof objDiv[revertObj[k].id] != "undefined") {
        				objDiv[revertObj[k].id].set_visible(revertObj[k].visible);
        				objDiv[revertObj[k].id].set_enable(revertObj[k].enable);
        			}
        		}
        	}
        };

        /*******************************************************************************
         * qamfn_checkEmptyField
         * 기능 : edit validation null check
         * 권혜영
         * Parameter  : objDs : bind된 dataset
         *				strColumn : 필수체크할 column 구분자 (|) 로 넘김, message를 보여주고 싶은 column 이 있으면, :로 넘김
        *******************************************************************************/
        this.qamfn_checkEmptyField = function(objDs, strColumn)
        {
        	var validation = {rtn: true, msgTxt: "", rowPos: -1, column: null};

        	if(objDs.rowcount >= 0 && !this.nfn_isNull(strColumn)) {
        	var arrColumn = strColumn.split("|");;

        		for(var i = 0; i < objDs.rowcount; i++) {
        			for(var j = 0; j < arrColumn.length; j++) {
        				var arrTmpColumn = arrColumn[j].split(":");
        				var column = arrTmpColumn[0], txt = arrTmpColumn[1] || arrTmpColumn[0];

        				if(this.nfn_isNull(objDs.getColumn(i, column))) {
        					validation.rtn = false;
        					validation.msgTxt = this.nfn_getDictionarynameUpper(txt);
        					validation.rowPos = i;
        					validation.column = column;
        					return validation;
        				}
        			}
        		}
        	}
        	return validation;
        };

        /*******************************************************************************
         * qamfn_setEditFocus
         * 기능 : edit validation null check
         * 권혜영
         * Parameter  : objComp - component obj, objDs : bind된 dataset, column : 바인딩된 column
        *******************************************************************************/
        this.qamfn_setEditFocus = function(objComp, objDs, column)
        {
        	for(var i = 0; i < objComp.form.components.length; i++) {
        		var objSub = objComp.form.components[i];
        		if(objSub instanceof Edit || objSub instanceof Calendar || objSub instanceof Combo || objSub instanceof TextArea) {

        			var retObj = this.qamfn_getBindObjInfo(objSub);
        			if(!this.nfn_isNull(retObj)) {
        				if(retObj.datasetid == objDs.id && retObj.columnid == column) {
        					objComp.form.components[objSub.id].setFocus();
        				}
        			}
        		}
        	}
        };

        /******************************************************************************
         * Function명 :  qamfn_getBindObjInfo
         * 설명       :  컴포넌트의 바인딩 정보를 알아낸다
         * Params     : objComp - component obj
         * Return     : obj
         * 사용법    : var obj = qamfn_getBindObjInfo(Combo00);
         *******************************************************************************/
        this.qamfn_getBindObjInfo = function (objComp)
        {
            var obj = {};
            var bindObj = this.binds;
            for (var i = 0; i < bindObj.length; i++)
            {
        		var compId = bindObj[i].compid;
        		compId = compId.substr(compId.lastIndexOf(".") + 1, compId.length);
                if (objComp.name != compId)
                {
                    continue;
                }

                obj.datasetid = bindObj[i].datasetid;
                obj.columnid = bindObj[i].columnid;
            }

            return obj;
        };

        /******************************************************************************
         * Function명 :  qamfm_getArrColList
         * 설명       :  dataset의 column id를 배열형태로 return
         * Params     : dataset
         * Return     : Array
         *******************************************************************************/
        this.qamfm_getArrColList = function(objDs)
        {
        	var arrColumn = [];
        	for (var i = 0; i < objDs.getColCount(); i++)
        	{
        		var objColInfo = objDs.getColumnInfo(i);
        		arrColumn.push(objColInfo.name);
        	}
        	return arrColumn;
        }

        /*******************************************************************************
         * ////////////////////// date util /////////////////////
        *******************************************************************************/

        /*******************************************************************************
         * qamfn_setFormatDate
         * 기능 : 문자열을 date format 형식으로 변환
         * 권혜영
         * Parameter  : sDate : 변경할 data 문자열
         *				strFormat : YYYY-MM-DD or YYYY-MM-DD HH:MM:SS..
        *******************************************************************************/
        this.qamfn_setFormatDate = function(strFormat, sDate)
        {
        	sDate = this.qamfn_replace(sDate, "-", "");
        	sDate = sDate || this.qamfn_replace(this.gfn_todayTime(), "-", "");
        	var sRet = "";
        	var p_strFormat = strFormat.toUpperCase();
        	if(p_strFormat == 'YYYYMMDD'){
        		sRet = sDate;
        	}else if(p_strFormat == 'YYYY-MM-DD'){
        		sRet = sDate.substr(0, 4)+'-'+sDate.substr(4, 2)+'-'+sDate.substr(6, 2);
        	}else if(p_strFormat == 'YYYYMMDDHHMMSS'){
        		sRet = this.gfn_svrTodayTime();
        	}else if(p_strFormat == 'YYYY-MM-DD HH:MM:SS'){
        		sRet = sDate.substr(0, 4)+'-'+sDate.substr(4, 2)+'-'+sDate.substr(6, 2)+' '+
        		       sDate.substr(8, 2)+':'+sDate.substr(10, 2)+':'+sDate.substr(12, 2);
        	}else if(p_strFormat == 'YYYY-MM-DD HH:MM'){
        		sRet = sDate.substr(0, 4)+'-'+sDate.substr(4, 2)+'-'+sDate.substr(6, 2)+' '+
        		       sDate.substr(8, 2)+':'+sDate.substr(10, 2);
        	}else if(p_strFormat == 'YYYY.MM.DD'){
        		sRet = sDate.substr(0, 4)+'.'+sDate.substr(4, 2)+'.'+sDate.substr(6, 2);
        	}
            return sRet;
        };

        /*******************************************************************************
         * qamfn_todayTime
         * 기능 : 현재시간 초단위까지 자름 (12자리까지)
         * 권혜영
         * Parameter  :
        *******************************************************************************/
        this.qamfn_todayTime = function()
        {
        	var datetime = this.gfn_todayTime();
        	return datetime.substr(0, 12);
        };

        /*******************************************************************************
         * qamfn_diffMonth
         * 기능 : 차이월수 계산 (YYYYMMDD 형태의 date 로 파라미터 넣음)
         * 권혜영
         * Parameter  : startDate, endDate
        *******************************************************************************/
        this.qamfn_diffMonth = function (stdDate, endDate) {
        	var stdMonth = nexacro.toNumber(stdDate.substr(4, 2));
        	var endMonth = nexacro.toNumber(endDate.substr(4, 2));

        	return stdMonth - endMonth;
        };

        /*******************************************************************************
         * qamfn_replace
         * 기능 : 입력된 문자열의 일부분을 다른 문자열로 치환하는 함수
         * 권혜영
         * Parameter  :
        *******************************************************************************/
        this.qamfn_replace = function(val, strOld, strNew)
        {
        	var ret = "";
        	if(!this.nfn_isNull(val)) {
        		ret = nexacro.replaceAll(val, strOld, strNew);
        	}
        	return ret;
        };

        /*******************************************************************************
         * qamfn_calCareer
         * 기능 : 총 경력 계산
         * 권혜영
         * Parameter  : objDs : dataset
        *******************************************************************************/
        this.qamfn_calCareer = function(objDs, prevYear, prevMonth) {
        	var yearLanguage = this.nfn_nvl(this.nfn_getDictionaryname("YEAR"),"년"), monthLanguage = this.nfn_nvl(this.nfn_getDictionaryname("MONTH"),"개월");
        	var today = this.qamfn_setFormatDate("YYYYMMDD");
        	var career, companyCareer;
        	var diffMonth = 0;
        	var diffYear = 0;

        	for(var i = 0; i < objDs.rowcount; i++) {
        		var enterDate = objDs.getColumn(i, "ENTERDATE");

        		//입사일자가 없을 경우
        		if(!this.nfn_isNull(enterDate)) {
        			enterDate = this.qamfn_setFormatDate("YYYYMMDD", enterDate);

        			var tmpYear =  12 * nexacro.toNumber(this.gfn_getYear(today) - (this.gfn_getYear(enterDate)));
        			var tmpMonth = this.qamfn_diffMonth(today, enterDate);

        			diffMonth = tmpYear + tmpMonth;

        			// 자회사 경력 계산
        			if (diffMonth >= 12) {
        				diffYear = nexacro.floor(diffMonth / 12);
        				diffMonth = diffMonth % 12;
        				companyCareer = diffYear + yearLanguage + " " + diffMonth + monthLanguage;
        			}
        			else {
        				companyCareer = diffMonth + monthLanguage;

        			}
        			objDs.setColumn(i, "COMPANYCAREER", companyCareer);
        		}
        		//총경력 계산
        		var diffPrevMonth = prevMonth || objDs.getColumn(i, "PREVCAREERMONTH") || 0;
        		var diffPrevYear = prevYear || objDs.getColumn(i, "PREVCAREERYEAR") || 0;

        		var totalCareerMonth = diffMonth + nexacro.toNumber(diffPrevMonth);
        		var totalCareerYear = diffYear + nexacro.toNumber(diffPrevYear);

        		if (totalCareerMonth >= 12) {
        			totalCareerYear += nexacro.floor(totalCareerMonth / 12);
        			totalCareerMonth = totalCareerMonth % 12;

        			if (totalCareerMonth == 0) {
        				career = totalCareerYear + yearLanguage;
        			}
        			else {
        				career = totalCareerYear + yearLanguage + " " + totalCareerMonth + monthLanguage;
        			}
        		}
        		else
        		{
        			if (totalCareerYear == 0) {
        				career = totalCareerMonth + monthLanguage;
        			}
        			else {
        				career = totalCareerYear + yearLanguage + " " + totalCareerMonth + monthLanguage;
        			}
        		}
        		if(!this.nfn_isNull(career)) {
        			objDs.setColumn(i, "CAREER", career);
        		}
        	}
        };

        /*******************************************************************************
         * qamfn_setDistinct
         * 기능 : set distinct dataset
         * 권혜영
         * Parameter  : objDs : dataset,
         *				objDs : return dataset
         *				arrList : select distinct column list
        *******************************************************************************/
        this.qamfn_setDistinct = function (objDs, objTempDs, arrList)
        {
        	//create dataset name ('dsTemp' + random 4 number)
        	//var sDatasetId = "dsTemp" + nexacro.floor(Math.random(),4) * 10000;	// 0 ~ 9999

        	//create dataset
        // 	var objTempDs = new Dataset;
        // 	objTempDs.set_name(sDatasetId);
        	//obj.addChild(sDatasetId, objTempDs);

        	var sKeyString = "S";
        	for(var i=0; i<arrList.length; i++)
        	{
        		objTempDs.addColumn(arrList[i],"string",256);
        		sKeyString += "+" + arrList[i];
        	}

        	objDs.set_enableevent(false);

        	//set_keystring = sort
        	objDs.set_keystring(sKeyString);
        	var nRow = 0;
        	for(var i=0; i<objDs.getRowCount(); i++)
        	{
        		strList = "";
        		for(var k=0; k<arrList.length; k++)
        		{
        			strList += arrList[k] + "=='" +  objDs.getColumn(i,arrList[k]) + "'";

        			if(k != arrList.length -1)
        			{
        				strList += " && " ;
        			}
        		}

        		//find row and add row
        		if(objTempDs.findRowExpr(strList) < 0)
        		{
        			nRow = objTempDs.addRow();
        			objTempDs.copyRow(nRow,objDs,i);
        		}
        	}

        	objDs.set_keystring("");
        	objDs.set_enableevent(true);
        	//return objTempDs;
        };

        /*******************************************************************************
         * qamfn_getArrayRow
         * 기능 : 행의 Column ID, Value 를 배열로 생성
         * yanghee.kim
         * Parameter  : - pDataset    : Source Dataset
         *
        *******************************************************************************/
        this.qamfn_getArrayRow = function(pDataset)
        {
        	var rtnArray = new Array(Array(), Array());

        	for (var i=0; i< pDataset.getColCount(); i++)
        	{
        		var colId = pDataset.getColID(i);
        		rtnArray[0][i] = colId;
        		rtnArray[1][i] = pDataset.getColumn(pDataset.rowposition, colId);
        	}
        	//this.qam_rtnValue = rtnArray;
        	this.fv_rtnValue = rtnArray;
        };

        /*******************************************************************************
         * qamfn_setDataset
         * 기능 : 전달받은 값을 해당 데이터셋에 Set
         * yanghee.kim
         * Parameter  : - pSource  : Source Dataset Column Name, Column value(array[][])
         * 				- pDataset : Target Dataset
         *              - pTarget  : Target Dataset Mapping Column Name, Column Name
        *******************************************************************************/
        this.qamfn_setDataset = function (pSource, pDataset, pTarget)
        {
        	pDataset.clearData();

        	if (pSource[0].length > 0)
        	{
        	    pDataset.set_enableevent(false);

        		var nRow = pDataset.addRow();

        	    for (var i=0; i <pSource[0].length; i++)
        		{
        			var sourceColId = pSource[0][i];

        			if (this.nfn_isNull(pTarget))
        			{
        				var colIdx = pDataset.getColIndex(sourceColId)
        			}
        			else
        			{
        				for (var j=0; j<pTarget[0].length; j++)
        				{
        					var mappingColId = pTarget[0][j];

        					//원천컬럼과 일치하는 매핑컬럼을 찾아 대상컬럼을 찾음
        					if (sourceColId == mappingColId)
        					{
        					    var colIdx = pDataset.getColIndex(pTarget[1][j])
        					}
        				}
        			}

        			var colVal = pSource[1][i];

        			//컬럼이 존재하고 값이 존재할 경우만 셋팅
        			if (colIdx != -1 && !this.nfn_isNull(colVal))
        			{
        				pDataset.setColumn(nRow, colIdx, colVal);
        			}
        		}

        		pDataset.set_enableevent(true);
        		//trace("==================================lib: " + pDataset.saveXML("Dataset ","A"));
        	}
        };

        /*******************************************************************************
         * qamfn_searchUserPlant
         * 기능 : 화면 조회조건의 Site 정보 조회(사용자별 권한에 따른)
         * yanghee.kim
         * Parameter  : - pDatasetName  : 데이터가 셋팅될 데이터 셋
                        - pObject       : 데이터가 셋팅될 Componet(FullPath)
        				- pDefaultVal   : 기본값으로 설정할 PlantId ==> 미지정시 0
        				- pEnterPriseId : 조회조건 EnterPriseId      ==> 미지정시 로그인정보
        				- pUserId       : 조회조건 사용자ID         ==> 미지정시 로그인정보
        *******************************************************************************/
        this.qamfn_searchUserPlant = function (pDatasetName, pObject, pDefaultVal, pEnterPriseId, pUserId)
        {
        	if (this.nfn_isNull(pObject)) return;

        	//DataSet 미존재시 동적생성
        	if(this.objects[pDatasetName]==null ){
        		tmpDs = new Dataset();
        		tmpDs.addColumn("PLANTID",           "string");
        		tmpDs.addColumn("PLANTNAME",         "string");
        		tmpDs.addColumn("STARTBUSINESSHOUR", "string");
        		tmpDs.set_name(pDatasetName);
        		tmpDs.set_id(pDatasetName);
        		this.addChild(pDatasetName,tmpDs);
        	}

        	var pSearchDataset = "ds_searchUserPlant";
        	var colNm = "";

        	if(this.objects[pSearchDataset]==null ){
        		var tmpDs = new Dataset();
        		tmpDs.addColumn( "ENTERPRISEID", "string" );
        		tmpDs.addColumn( "USERID", "string" );
        		tmpDs.set_name(pSearchDataset);
        		tmpDs.set_id(pSearchDataset);
        		this.addChild(pSearchDataset,tmpDs );
        	}

        	this.objects[pSearchDataset].clearData();
        	this.objects[pSearchDataset].addRow();
        	var sEnterPriseId = this.nfn_isNull(pEnterPriseId)? this.gf_getEnterpriseId():pEnterPriseId;
            var pUserId = this.nfn_isNull(pUserId)? this.gf_getUserId():pUserId;
        	this.objects[pSearchDataset].setColumn(0,"ENTERPRISEID", sEnterPriseId);
        	this.objects[pSearchDataset].setColumn(0,"USERID", pUserId);

        	var sSvcID 			= "selectUserAuthorityPlantList";
        	var sController 	= "/qampopup/selectUserAuthorityPlantList.do";
        	var sInDatasets   	= "INPUT=" + pSearchDataset;
        	var sOutDatasets  	= pDatasetName + "=output";
        	var sArgs 		  	= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "qamfn_callBack", true, false);

        	//화면의 Component에 셋팅
        	pObject.set_innerdataset(pDatasetName);
        	pObject.set_codecolumn("PLANTID");
        	pObject.set_datacolumn("PLANTNAME");

        	//기본값 셋팅
        	if (this.nfn_isNull(pDefaultVal))
        	{
        		pObject.set_index(0);
        	}
        	else
        	{
        		var nRow = pDatasetName.findRow("PLANTID == '" +pDefaultVal+ "'" );
        		pObject.set_index(nRow);
        	}
        	//var objDataset = eval("this."+pDatasetName);
        	//trace(objDataset.saveXML());
        };

        /*******************************************************************************
         * qamfn_searchMultiCombo
         * 기능 : 화면 조회조건의 MultiCombo 조회
         * yanghee.kim
         * Parameter  : - pDatasetName  : 데이터가 셋팅될 데이터 셋
                        - pObject       : 데이터가 셋팅될 Componet(FullPath)
        				- pSvcId        : Service Id
        				- pArgs         : 조회조건의 파라미터
        *******************************************************************************/
        this.qamfn_searchMultiCombo = function (pDatasetName, pObject, pSvcId, pArgs)
        {
        	if (this.nfn_isNull(pObject)) return;

        	//DataSet 미존재시 동적생성
        	if(this.objects[pDatasetName]==null ){
        		tmpDs = new Dataset();
        		tmpDs.addColumn("CHK",   "string", 256);
        		tmpDs.addColumn("CODE",  "string", 256);
        		tmpDs.addColumn("VALUE", "string", 256);
        		tmpDs.set_name(pDatasetName);
        		tmpDs.set_id(pDatasetName);
        		this.addChild(pDatasetName,tmpDs);
        	}

        	var sSvcID 			= pSvcId;
        	var sController 	= "/qampopup/selectMultiComboList.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= pDatasetName + "=output";
        	var sArgs 		  	= pArgs;
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");

            var objDataset = eval("this."+pDatasetName);

        	//화면의 Component에 셋팅
        	pObject.form.fn_init_multicombo_data(objDataset);
        	pObject.form.ds_initData.applyChange();
        };

        /*******************************************************************************
         * qamfn_setHeadGroupPriceYieldRateText
         * 기능 : 수율화면의 사용자 접속site별 통화표기
         * yanghee.kim
         * Parameter  : -
        *******************************************************************************/
        this.qamfn_setHeadGroupPriceYieldRateText = function (pPlantId)
        {
        	var rtn = {strColCap: "", strTolltiptext: ""};

        	var strColCap = this.nfn_getDictionaryname("GROUPPRICEYIELDRATE", true);
        	var strTolltiptext = "GROUPPRICEYIELDRATEKRW";
        	if (pPlantId == "IFC")
        	{
        		strColCap  += "(KRW)";
        		strTolltiptext = "GROUPPRICEYIELDRATEKRW";
        	}
        	else if (pPlantId == "IFV" )
        	{
        		strColCap  += "(VND)";
        		strTolltiptext = "GROUPPRICEYIELDRATEVND";
        	}
        	else if (pPlantId == "CCT")
        	{
        		strColCap  += "(CNY)";
        		strTolltiptext = "GROUPPRICEYIELDRATECNY";
        	}
        	else
        	{
        		strColCap  += "(USD)";
        		strTolltiptext = "GROUPPRICEYIELDRATEUSD";
        	}

        	rtn.strColCap = strColCap;
        	rtn.strTolltiptext = strTolltiptext;

        	return rtn;
        };

        /*******************************************************************************
         * qamfn_setGlobalValue
         * 기능 : global value setting
         * yanghee.kim
         * Parameter  : -
        *******************************************************************************/
        this.qamfn_setGlobalValue = function()
        {
        	this.qam_lang = this.gf_getLanguageType();
        	this.qam_userId = this.gf_getUserId();
        	this.qam_plantId = this.gf_getSiteType();
        	this.qam_enterpriseId = this.gf_getEnterpriseId();
        };

        /*******************************************************************************
         * qamfn_searchMultiCombo
         * 기능 : 화면 조회조건의 MultiCombo 조회
         * yanghee.kim
         * Parameter  : - pDatasetName  : 데이터가 셋팅될 데이터 셋
                        - pObject       : 데이터가 셋팅될 Componet(FullPath)
        				- pSvcId        : Service Id
        				- pArgs         : 조회조건의 파라미터
        *******************************************************************************/
        this.qamfn_searchBusinessTime = function (pPlantId)
        {
        	var pDatasetName = "ds_qamoutput";

        	//DataSet 미존재시 동적생성
        	if(this.objects[pDatasetName]==null ){
        		tmpDs = new Dataset();
        		tmpDs.addColumn("STARTBUSINESSTIME",   "string", 256);
        		tmpDs.addColumn("ENDBUSINESSTIME",   "string", 256);
        		tmpDs.set_name(pDatasetName);
        		tmpDs.set_id(pDatasetName);
        		this.addChild(pDatasetName,tmpDs);
        	}

        	this.objects[pDatasetName].clearData();

        	var sSvcID 			= "SRCH_SITEWORKTIME";
        	var sController 	= "/qampopup/selectSiteWorkTime.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= pDatasetName + "=output";
        	var sArgs 		  	= "";
        	    sArgs           += this.gfn_setParam("PLANTID", pPlantId);

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");

        	if (this.objects[pDatasetName].rowcount > 0)
        	{
        		this.qam_jobStartTime = this.objects[pDatasetName].getColumn(0,"STARTBUSINESSTIME");
        		this.qam_jobEndTime = this.objects[pDatasetName].getColumn(0,"ENDBUSINESSTIME");//BETWEEN AND 사용시 08:30:00으로 보내면 포함되어서..
        	}
        	else
        	{
                //품질관리 화면 조회조건 날짜 입력시 시분초 셋팅 변수,  앞 공백 제거시 포맷 오류발생함
        		this.qam_jobStartTime = " 08:30:00";
        		this.qam_jobEndTime = " 08:29:59"; //BETWEEN AND 사용시 08:30:00으로 보내면 포함되어서..
        	}
        };

        /*******************************************************************************
         * qamfn_ncrMenuAuth
         * 기능 : 수입검사NCR, 자주/최종NCR, 품질규격NCR, 출하검사NCR 팝업 화면 버튼권한 설정
         * yanghee.kim
         * Parameter  : - pInsAuth  : 등록권한(권한없음:0, 권한있음:1)
                        - pUpdAuth  : 수정권한
        				- pDelAuth  : 삭제권한
        *******************************************************************************/
        this.qamfn_ncrMenuAuth = function(pInsAuth, pUpdAuth, pDelAuth)
        {
        	if ( pInsAuth == "0" && pUpdAuth == "0" && pDelAuth == "0") {
        		/* QAM00700P1.xfdl, QAM00900P1. xfdl, QAM01200P1.xfdl, QAM01600P1.xfdl*/
        		this.btnSave.set_enable(false);
        		/*QAM01200D1.xfdl*/
        		this.div_ncrProcess.form.tab_ncr.Tabpage1.form.div_search.form.btn_applyStatus.set_enable(false);
        		this.div_ncrProcess.form.tab_ncr.Tabpage1.form.div_search.form.btn_applyLocking.set_enable(false);
        		this.div_ncrProcess.form.tab_ncr.Tabpage1.form.div_search.form.btn_reset.set_enable(false);
        		this.div_ncrProcess.form.tab_ncr.Tabpage1.form.div_search.form.btn_add.set_enable(false);
        		this.div_ncrProcess.form.tab_ncr.Tabpage1.form.div_search.form.btn_del.set_enable(false);
        	}
        };
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
