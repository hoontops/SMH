(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM02800D1");
            this.set_titletext("결재정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(756,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_approvalList", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGERID\" type=\"STRING\" size=\"256\"/><Column id=\"USERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CELLPHONENUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"EMAILADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"INT\" size=\"256\"/><Column id=\"REJECTCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"CHARGETYPENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALSTATE_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALTIME\" type=\"STRING\" size=\"256\"/><Column id=\"REJECTCOMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALNO\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_approval", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_approvalState", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOOKUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"LOOKUP_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_sendMail", this);
            obj._setContents("<ColumnInfo><Column id=\"EMAILADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"USERID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_groupApproval", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALSTATE_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_approvalList","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_approvalList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"절차구분\" tooltiptext=\"PROCESSTYPE\"/><Cell col=\"2\" text=\"구분\" tooltiptext=\"TYPE\"/><Cell col=\"3\" text=\"담당자명\" tooltiptext=\"OWNERNAME\"/><Cell col=\"4\" text=\"부서\" tooltiptext=\"DEPARTMENT\"/><Cell col=\"5\" text=\"결재상태\" tooltiptext=\"DCB432A154484DA290B240C5CADFC5A7\"/><Cell col=\"6\" text=\"반려사유\" tooltiptext=\"REJECTCOMMENTS\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PROCESSTYPE\" displaytype=\"combotext\" combocodecol=\"C,ProcedureType,,Y,N\"/><Cell col=\"2\" text=\"bind:CHARGETYPE\" displaytype=\"combotext\" combodataset=\"ds_approval\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"3\" text=\"bind:USERNAME\"/><Cell col=\"4\" text=\"bind:DEPARTMENTNAME\"/><Cell col=\"5\" text=\"bind:APPROVALSTATE\" displaytype=\"combotext\" edittype=\"expr:comp.parent.fn_setEnbleText(currow, &apos;combo&apos;)\" combocodecol=\"LOOKUP_CODE\" combodatacol=\"LOOKUP_NAME\" combodataset=\"ds_approvalState\"/><Cell col=\"6\" text=\"bind:REJECTCOMMENTS\" textAlign=\"left\" edittype=\"expr:comp.parent.fn_setEnbleText(currow, &apos;text&apos;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addApproval",null,"5","80","24","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("결재자추가");
            obj.set_tooltiptext("ADDAPPROVAL");
            this.addChild(obj.name, obj);

            obj = new Static("sta_approvalInfo","0","0","66","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("결재정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("APPROVALINFORMATION");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",756,350,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM02800D1.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM02800D1.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM02800D1.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 결재정보 Div
         * 파일명 		: QAM02800D1.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.05.20
         *
         * 설  명		: 변경점 신청서 등록/수정 > 결재정보 그리드 Div
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.20	권혜영   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;	//품질관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
         this.fv_userid = this.gf_getUserId();
         this.companionRowPos = -1; //반려 시에 rowposition
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_selectChargeType();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {

        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {

        };

        /*
         * 기능 : 신규
         */
        this.fn_add = function(obj,e)
        {

        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (dsClaimInfoList)
        {

        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {

        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        	}
        	else
        	{
        		if (trId == "selectChargeType") {

        		} else if (trId == "selectApprovalState") {

        		}
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	if(sPopupId == "EMAIL") {
        		this.getOwnerFrame().form.fn_popupAfter("EMAIL");
        	}
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function (objDs, type)
        {
        	this.fn_selectApprovalState("ReviewSettleState", true); //AS-IS : GetApprovalAllStateByReliabilityVerificationRequest
         	this.ds_approvalList.appendData(objDs, true);

        	if(type == "New") {
        		// 결재리스트에 값 세팅
        		this.ds_approvalList.set_enableevent(false);
        		this.ds_approvalList.setColumn(0, "CHARGETYPE","Request");
        		this.ds_approvalList.setColumn(0, "PROCESSTYPE","Draft");
        		this.ds_approvalList.setColumn(0, "SEQUENCE","1")
        		this.ds_approvalList.set_enableevent(true);

        	}
        	this.fn_setEnableApprovalBtn();
        };

        /*
         * 결재정보 그리드 > 구분 콤보 조회
         */
        this.fn_selectChargeType = function ()
        {
        	this.ds_approval.clearData();
        	var sSvcID 			= "selectChargeType";
        	var sController 	= "/basCommon/selectCustomQuery.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_approval=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("SQL_ID", "selectChargeTypeList");
        		sArgs 			+= this.gfn_setParam("CMB_TYPE", this.nfn_nvl(this.nfn_getDictionaryname("YPE_TOTAL"),"전체"));
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 결재정보 그리드 > 결재상태 콤보 조회
         */
        this.fn_selectApprovalState = function (approvalState, bAsync)
        {
        	this.ds_approvalState.clearData();
        	var sSvcID 			= "selectApprovalState";
        	var sController 	= "/qam02800/selectApprovalType.do";
        	var sInDatasets   	= "";
        	var sOutDatasets  	= "ds_approvalState=output";
        	var sArgs 		  	= "";
        		sArgs 			+= this.gfn_setParam("APPROVALTYPE", approvalState);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", true, bAsync);
        };

        /*
         * 유효성 검증 (결재정보)
         * - 결재부서 필수 체크 : 요청부서,승인부서,수신부서 등록되지 않았습니다.
         */
        this.fn_checkValidationApproval = function()
        {
        	var objDs = this.ds_approvalList;

        	if(objDs.rowcount > 0) {
        		if(objDs.getCaseCount("PROCESSTYPE == 'Draft'") == 0) {
        			this.gfn_Message("ApprovalApprobalCheck1",null , "warning","ok"); //요청부서가 등록되지 않았습니다.
        			return false;

        		} else if(objDs.getCaseCount("PROCESSTYPE == 'Approval'")  == 0) {
        			this.gfn_Message("ApprovalApprobalCheck2",null , "warning","ok");//승인부서가 등록되지 않았습니다.
        			return false;

        		} else if(objDs.getCaseCount("PROCESSTYPE == 'Receiving'")  == 0) {
        			this.gfn_Message("ApprovalApprobalCheck3",null , "warning","ok");//수신부서가 등록되지 않았습니다.
        			return false;
        		}
        	}
        	return true;
        };


        /*
         * 결재리스트 : 로그인한 유저가 해당 절차구분에서 결재를 했다면 ReadOnly set.
         */
        this.fn_setEnbleText = function(nRow, ret)
        {
        	// APPROVALSTATE 일 경우 setting
        // 	if(!this.nfn_isNull(processType) && !this.nfn_isNull(chargeType)) {
        // 		this.fn_setCombocodecol(processType, chargeType);
        // 	}
        	// -- APPROVALSTATE 일 경우 setting
        	var isEnable = true;

        	var chargerid 		= this.ds_approvalList.getColumn(nRow, "CHARGERID");
        	var processtype 	= this.ds_approvalList.getColumn(nRow, "PROCESSTYPE");
        	var chargetype 		= this.ds_approvalList.getColumn(nRow, "CHARGETYPE");
        	var approvalstate 	= this.ds_approvalList.getColumn(nRow, "APPROVALSTATE");

        	if(chargerid != this.fv_userid) {
        		isEnable = false;
        	}
        	// 절차구분이 요청이면서, 역할구분이 기안인것 && 결재상태가 회수가 아니라면 수정불가
        	if(!this.nfn_isNull(approvalstate) && processtype == "Draft" && chargetype == "Request" && approvalstate != "Reclamation") {
        		isEnable = false;
        	}
        	if(isEnable) return ret;
        };

        /*
         * 결재자추가 버튼 활성화
         */
        this.fn_setEnableApprovalBtn = function()
        {
        	//결재선에 로그인한 사람이 포함되어 있어야 결재자 버튼을 활성화 할 수 있다.
        	if(this.ds_approvalList.getCaseCount("CHARGERID == '"+this.fv_userid+"'") > 0) {
        		this.btn_addApproval.set_enable(true);
        	} else {
        		this.btn_addApproval.set_enable(false);
        	}
        };

        /*
         * 결재정보 팝업화면에서 호출할 함수
         */
        this.fn_saveApproval = function(objDs)
        {
        	this.ds_approvalList.clearData();
        	this.ds_approvalList.copyData(objDs);
        };

        /*
         * 결재자추가 버튼 활성화 (AS-IS : ApprovalMail)
         * - 결재추가버튼 팝업에서 결재라인변경했을떄 결재완성부서가 생성되면 메일 보냄.
         * - 현재 팝업에서 결재라인별 승인상태 변경했을떄 결재완성부서가 생성되면 메일 보냄
         */
        this.fn_approvalMail = function(title, objReviewDs, objSaveDs)
        {
        	// ------------------------------------------------------------
        	// APPROVALSTATE : 승인(Approval), 회수(Reclamation), 반려(Companion)
        	// PROCESSTYPE : 기안(Draft), 검토(Review), 승인(Approval), 수신(Receiving)
        	// ------------------------------------------------------------

        	var objDs = this.ds_approvalList;
        	var chargerid = "", processtype = "", approvalstate = "", approvalstateOrg = "", sequence = 0, arrGroupColumn = [];
        	var groupProcessTypeOrg = "", groupProcessType = ""; //처리 후 비교할 processtype
        	var groupApprovalAfterFilterCnt = 0;

        	// ------------------------------------------------------------
        	// 기안자 조회
        	// ------------------------------------------------------------
        	objDs.filter("PROCESSTYPE == 'Draft'");
        	chargerid = objDs.getColumn(0, "CHARGERID");
        	objDs.filter("");

        	// ------------------------------------------------------------
        	// group process
        	// ------------------------------------------------------------
        	arrGroupColumn.push("PROCESSTYPE");
        	this.qamfn_setDistinct(objDs, this.ds_groupApproval, arrGroupColumn); //processtype 으로 group
        	this.ds_groupApproval.set_keystring("S:+SEQUENCE");

        	for(var i = 0; i < this.ds_groupApproval.rowcount; i++) {
        		processtype = this.ds_groupApproval.getColumn(i, "PROCESSTYPE");
        		var filterStr = "PROCESSTYPE == '" +processtype+ "' ";

        		//변경 전 approvalstate
        		objDs.filter(filterStr + " && APPROVALSTATE_ORG != null && APPROVALSTATE_ORG != ''");
        		objDs.set_keystring("G:PROCESSTYPE,S:+APPROVALSTATE_ORG");
        		approvalstateOrg =  objDs.getColumn(0, "APPROVALSTATE_ORG");
        		objDs.set_keystring("");

        		//변경 후 approvalstate
        		objDs.filter("");
        		objDs.filter(filterStr + " && APPROVALSTATE != null && APPROVALSTATE != ''");
        		objDs.set_keystring("G:PROCESSTYPE,S:+APPROVALSTATE");
        		approvalstate =  objDs.getColumn(0, "APPROVALSTATE");
        		objDs.set_keystring("");

        		objDs.filter("");
        		sequence = objDs.getCaseMax(filterStr, "SEQUENCE");

        		this.ds_groupApproval.setColumn(i, "PROCESSTYPE", processtype);
        		this.ds_groupApproval.setColumn(i, "APPROVALSTATE", approvalstate);
        		this.ds_groupApproval.setColumn(i, "APPROVALSTATE_ORG", approvalstateOrg);
        		this.ds_groupApproval.setColumn(i, "SEQUENCE", sequence);
        		//console.log("processtype : " + processtype + " / approvalstateOrg : " + approvalstateOrg + " / approvalstate : " + approvalstate + " / sequence : " + sequence);
        	}

        	// ------------------------------------------------------------
        	// filter and sort (seq order by desc)
        	// ------------------------------------------------------------
        	//변경 전 processtype
        	this.ds_groupApproval.filter("APPROVALSTATE_ORG == 'Approval'");
        	this.ds_groupApproval.set_keystring("S:-SEQUENCE");
        	groupProcessTypeOrg = this.ds_groupApproval.getColumn(0, "PROCESSTYPE");

        	this.ds_groupApproval.filter("");
        	this.ds_groupApproval.set_keystring("");

        	//변경 후 processtype
        	this.ds_groupApproval.filter("APPROVALSTATE == 'Approval'");
        	this.ds_groupApproval.set_keystring("S:-SEQUENCE");
        	groupProcessType = this.ds_groupApproval.getColumn(0, "PROCESSTYPE");

        	groupApprovalAfterFilterCnt = this.ds_groupApproval.rowcount;
         	this.ds_groupApproval.filter("");
         	this.ds_groupApproval.set_keystring("");

        	// ------------------------------------------------------------
        	// send mail
        	// ------------------------------------------------------------
        	//메일 보낼 dataset은 group 후의 (filter를 적용하지 않은) asc로 seq 정렬
        	this.ds_groupApproval.set_keystring("S:+SEQUENCE");

        	//console.log("groupProcessTypeOrg : " + groupProcessTypeOrg + " / groupProcessType : " + groupProcessType + " / groupApprovalAfterFilterCnt : " + groupApprovalAfterFilterCnt);
        	if(groupProcessTypeOrg != groupProcessType && groupApprovalAfterFilterCnt > 0) {
        		var filterStr = " APPROVALSTATE == undefined || APPROVALSTATE == null  || APPROVALSTATE == '' || APPROVALSTATE == 'Reclamation' || APPROVALSTATE == 'Companion'";
        		this.ds_groupApproval.filter(filterStr);

        		if(this.ds_groupApproval.rowcount >  0) {
        			var sNextGroup = this.ds_groupApproval.getColumn(0, "PROCESSTYPE");

        			objDs.filter("PROCESSTYPE == '" + sNextGroup + "'");
        			for(var i = 0; i < objDs.rowcount; i++) {
        				var nRow = this.ds_sendMail.addRow();
        				//this.ds_sendMail.setColumn(nRow, "MAILTYPE", "CHANGEREVIEWANDAPPROVALREQUEST");
        				this.ds_sendMail.setColumn(nRow, "EMAILADDRESS", objDs.getColumn(i, "EMAILADDRESS"));
        				this.ds_sendMail.setColumn(nRow, "USERID", objDs.getColumn(i, "CHARGERID"));
        			}
        			this.fn_sendEmail(title, objReviewDs, objSaveDs);
        		}
        	}
        };

        /*
         * 반려할 경우 기안자에게 반려 메일 보냄
         */
        this.fn_approvalCompanionMail = function(title, objReviewDs, objSaveDs)
        {
        	var objDs = this.ds_approvalList, rowPos = this.companionRowPos;

        	var approvalstate = objDs.getColumn(rowPos, "APPROVALSTATE");
        	var processtype = objDs.getColumn(rowPos, "PROCESSTYPE");

        	console.log("반려 메일 발송 (QAM02800D1:: fn_approvalCompanionMail) =>>>> approvalstate : " + approvalstate + " / processtype : " + processtype);
        	//검토자, 승인자가 반려하면
        	if(approvalstate == "Companion" && processtype != "Draft") {
        		objDs.filter("PROCESSTYPE == 'Draft'");
        		var email = objDs.getColumn(0, "EMAILADDRESS");
        		objDs.filter("");

        		var nRow = this.ds_sendMail.addRow();
        		//this.ds_sendMail.setColumn(nRow, "MAILTYPE", "CHANGEREVIEWCOMPANION");
        		this.ds_sendMail.setColumn(nRow, "EMAILADDRESS", email);
        		this.ds_sendMail.setColumn(nRow, "USERID", objDs.getColumn(rowPos, "CHARGERID"));

        		this.fn_sendEmail(title, objReviewDs, objSaveDs);
        	} else {
        		this.getOwnerFrame().form.fn_popupAfter("EMAIL");
        	}
        };

        /*
         * 기능 : 메일 발송
         */
        this.fn_sendEmail = function (title, objReviewDs, objDs)
        {
        	var reviewContents = "", arr = [], arrAddrList = [], arrUserIdList = [], nRow = 0;

        	//수신자
        	for(var i = 0; i < this.ds_sendMail.rowcount; i++) {
        		arrAddrList.push(this.ds_sendMail.getColumn(i, "EMAILADDRESS"));
        		arrUserIdList.push(this.ds_sendMail.getColumn(i, "USERID"));
        	}
        	//검토/반려 내용
        	for(var i = 0; i < objReviewDs.rowcount; i++) {
        		reviewContents += objReviewDs.getColumn(i, "USERNAME") + ", " + objReviewDs.getColumn(i, "DEPARTMENTNAME")  + ", " +  this.qamfn_setFormatDate("YYYY-MM-DD HH:MM:SS", objReviewDs.getColumn(i, "REVIEWDATE"))
        						+ "<BR>" + objReviewDs.getColumn(i, "REVIEWCOMMENTS") + "<BR>";
        	}

        	arr.push( this.nfn_getDictionaryname('CHANGEPOINTNO',true) ); //0
        	arr.push( objDs.getColumn(nRow,"CHANGEPOINTNO") );            //1.변경점 번호
        	arr.push( this.nfn_getDictionaryname('CHANGEPOINTDATE',true) );	//2
        	arr.push( this.qamfn_setFormatDate("YYYY.MM.DD", objDs.getColumn(nRow,"REQUESTDATE").trim()) ); //3.변경점 신청일
        	arr.push( this.nfn_getDictionaryname('CHANGEPOINTTITLE',true) ); //4
        	arr.push( objDs.getColumn(nRow,"SUBJECT") ); //5.변경점 제목
        	arr.push( this.nfn_getDictionaryname('GRADE',true) ); //6.등급
        	arr.push( this.nfn_getDictionaryname('CHANGEPOINTTYPE',true) ); //7.변경점구분
        	arr.push( this.nfn_isNull(objDs.getColumn(nRow,"RATINGDECISION")) ? "" : objDs.getColumn(nRow,"RATINGDECISION") ); //8.등급
        	arr.push( objDs.getColumn(nRow,"CHANGEPOINTTYPE") ); //9.변경점구분
        	arr.push( this.nfn_getDictionaryname('CUTOMERNAME',true) ); //10.고객사명
        	arr.push( this.nfn_isNull(objDs.getColumn(nRow,"CUSTOMERNAME")) ? "" : objDs.getColumn(nRow,"CUSTOMERNAME") );
        	arr.push( this.nfn_getDictionaryname('PRODUCTNAME',true) );//12.품목명
        	arr.push( this.nfn_isNull(objDs.getColumn(nRow,"PRODUCTDEFNAME")) ? "" : objDs.getColumn(nRow,"PRODUCTDEFNAME") );
        	arr.push( this.nfn_getDictionaryname('SEGMENTTYPE',true) );//14.공정유형
        	arr.push( objDs.getColumn(nRow,"SEGMENTTYPENAME") );
        	arr.push( this.nfn_getDictionaryname('CHANGETYPE',true) );//16.변경유형
        	arr.push( objDs.getColumn(nRow,"CHANGETYPENAME") );
        	arr.push( this.nfn_getDictionaryname('APPLICATIONTYPE',true) ); //18.적용구분
        	arr.push( objDs.getColumn(nRow,"APPLICATIONTYPENAME") );
        	arr.push( this.nfn_getDictionaryname('CHANGEREASON',true) );//20.변경사유
        	arr.push( this.nfn_isNull(objDs.getColumn(nRow,"REASONCOMMENTS")) ? "" : objDs.getColumn(nRow,"REASONCOMMENTS") );
        	arr.push( this.nfn_getDictionaryname('BEFORECHANGE',true) );//22.변경전
        	arr.push( this.nfn_getDictionaryname('AFTERCHANGE',true) );//23.변경후
        	arr.push( objDs.getColumn(nRow,"BEFORECOMMENTS") ); //24.변경전
        	arr.push( objDs.getColumn(nRow,"AFTERCOMMENTS") ); // 25.변경후
        	arr.push( this.nfn_getDictionaryname('CHANGEDETAILS',true) );//26.변경세부내용
        	arr.push( this.nfn_isNull(objDs.getColumn(nRow,"CHANGEDETAILS")) ? "" : objDs.getColumn(nRow,"CHANGEDETAILS") );
        	arr.push( this.nfn_getDictionaryname('REVIEWANDAPPROVAL',true) );//28.검토/승인내용
        	arr.push( reviewContents );
        	arr.push( this.nfn_getDictionaryname('PRODUCTDEFID',true) );//30.품목코드
        	arr.push( this.nfn_isNull(objDs.getColumn(nRow,"PRODUCTDEFID")) ? "" : objDs.getColumn(nRow,"PRODUCTDEFID") );
        	arr.push( this.nfn_getDictionaryname('PRODUCTREVISION',true) ); //32.Rev.
        	arr.push( this.nfn_isNull(objDs.getColumn(nRow,"PRODUCTDEFVERSION")) ? "" : objDs.getColumn(nRow,"PRODUCTDEFVERSION") );

        	var emailContent = "○" + arr[0] + " : " + arr[1] + "<BR>"
        					 + "○" + arr[2] + " : " + arr[3] + "<BR>"
        					 + "○" + arr[4] + " : " + arr[5] + "<BR>"
        					 + "○" + arr[6] + "/" + arr[7] + " : " + arr[8] + "/" + arr[9] + "<BR>"
        					 + "○" + arr[10] + " : " + arr[11] + "<BR>"
        					 + "○" + arr[30] + " : " + arr[31] + "<BR>"
        					 + "○" + arr[32] + " : " + arr[33] + "<BR>"
        					 + "○" + arr[12] + " : " + arr[13] + "<BR>"
        					 + "○" + arr[14] + " : " + arr[15] + "<BR>"
        					 + "○" + arr[16] + " : " + arr[17] + "<BR>"
        					 + "○" + arr[18] + " : " + arr[19] + "<BR>"
        					 + "○" + arr[20] + " : " + arr[21] + "<BR>"
        					 + "○" + arr[22] + "/" + arr[23] + " : " + arr[24] + "/" + arr[25] + "<BR>"
        					 + "○" + arr[26] + " : " + arr[27] + "<BR>"
        					 + "○" + arr[28] + " : " + arr[29] + "<BR>";

        	var popupId = "EMAIL";
        	 var oArg = {
        	  subject : title,  //제목
        	  contents : emailContent, //메일내용
        	  objAddrList : arrAddrList,  //수신자 배열
        	  objUserList : [],   //수신자명 배열
        	  objUserIdList : arrUserIdList, //수신자ID 배열
        	  atchSrc : "", //"BAS_ITEMMASTER", //업무에서 올려진 파일 첨부시 (테이블)
        	  atchSrcKey : "" //"INTERFLEX|10400010A1|FA1"   //업무에서 올려진 파일 첨부시 (키값)
        	  };
        	 this.gfn_openPopup(popupId,"cmd::CMAM00100P.xfdl",oArg,"width=790,height=790");
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        // 결재자 추가 버튼
        this.btn_addApproval_onclick = function(obj,e)
        {
        	var oArg = {};
        	//var opts = "width=1000,height=800";
        	this.gfn_openPopup("SEARCH_ADD_APPROVAL","qam::QAM02800P3.xfdl",oArg,"");
        };

        // 결재선 컬럼 변경 전 체크
        this.ds_approvalList_cancolumnchange = function(obj,e)
        {
        	var maxValue = 0;
        	var nRow 			= e.row;
        	var userId 			= this.fv_userid;
        	var approvalState 	= obj.getColumn(nRow, "APPROVALSTATE"); //승인(Approval), 회수(Reclamation), 반려(Companion)
        	var approvalStateOrg= obj.getColumn(nRow, "APPROVALSTATE_ORG");
        	var chargerId 		= obj.getColumn(nRow, "CHARGERID");
        	var processType 	= obj.getColumn(nRow, "PROCESSTYPE"); //기안(Draft), 검토(Review), 승인(Approval), 수신(Receiving)
        	var chargeType 		= obj.getColumn(nRow, "CHARGETYPE");
        	var sequence		= nexacro.toNumber(obj.getColumn(nRow, "SEQUENCE"));

        	//Reclamation
        	if (chargerId != userId)
        	{
        		//"결제담당자가 아님니다
        		this.gfn_Message("ApprovalChargeInfo", null , "warning","ok");
        		return false;
        	}

        	var filterStr = "APPROVALSTATE_ORG == 'Approval'"; //승인
        	var listApprovalstateCnt = obj.getCaseCount(filterStr);

        	if(listApprovalstateCnt > 0) {
        		obj.filter(filterStr);
        		maxValue = nexacro.toNumber(obj.getMax("SEQUENCE"));
        		obj.filter("");
        	}

        	// 현재 선택된 결제 상태가 회수가 아니면 결재 순서여부 체크-회수(Reclamation)
        	if (approvalStateOrg != "Reclamation")
        	{
        		if ((maxValue + 1) != sequence)
        		{
        			//결제 순서가 올바르지 않습니다.
        			this.gfn_Message("ApprovalSequenceInfo",null , "warning","ok");
        			return false;
        		}
        	}

        	return true;
        };

        // 결재 정보 dataset 값 변경 시
        this.ds_approvalList_oncolumnchanged = function(obj,e)
        {
        	if(e.row < 0) return;
        	if(e.columnid == "APPROVALSTATE") {
        		var nRow 			= e.row;
        		var userId 			= this.fv_userid;
        		var approvalState 	= obj.getColumn(nRow, "APPROVALSTATE"); //승인(Approval), 회수(Reclamation), 반려(Companion)
        		var processType 	= obj.getColumn(nRow, "PROCESSTYPE"); //기안(Draft), 검토(Review), 승인(Approval), 수신(Receiving)
        		var chargeType 		= obj.getColumn(nRow, "CHARGETYPE");
        		var nowSequence		= nexacro.toNumber(obj.getColumn(nRow, "SEQUENCE"));

        		//rowposition set
        		if(approvalState == "Companion") {
        			this.companionRowPos = nRow;
        		}

        		//as-is process start>>
        		if (approvalState == "Companion" && chargeType == "Draft") {
        			//검토자, 승인자가 반려하면
        			//1)절차구분(검토, 승인) 반려상태로
        			//2)절차구분(요청) and 역활구분(기안) 회수상태로 변경한다
        			//3)절차구분(요청) and 역활구분(검토,승인) 반려상태로 변경한다

        			for(var i = 0; i < obj.rowcount; i++) {
        				var sequence = nexacro.toNumber(obj.getColumn(i, "SEQUENCE"));
        				if(sequence < nowSequence) { //수신(Receiving)은 반려가 없다
        					obj.set_enableevent(false);
        					if(processType == "Draft") {
        						if(processType == "Request") {
        							if(chargeType == "Draft") { //역활구분 :기안(Request), 검토(Review), 승인(Approval)
        								obj.setColumn(i, "APPROVALSTATE", "Reclamation"); //회수
        							} else {
        								obj.setColumn(i, "APPROVALSTATE", "Companion"); //반려
        							}
        						}
        					} else {
        						obj.setColumn(i, "APPROVALSTATE", "Companion"); //반려
        					}
        					obj.set_enableevent(true);
        				}
        			}
        		} else {
        			for(var i = 0; i < obj.rowcount; i++) {
        				var sequence = nexacro.toNumber(obj.getColumn(i, "SEQUENCE"));

        				obj.set_enableevent(false);
        				if(nowSequence > sequence) { // 현재 결재중인 행의 결재보다 앞순번은 모두 승인처리
        					obj.setColumn(i, "APPROVALSTATE", "Approval");

        				} else if(nowSequence != sequence) {
        					obj.setColumn(i, "APPROVALSTATE", "");
        					obj.setColumn(i, "REJECTCOMMENTS", "");
        				}
        				obj.set_enableevent(true);
        			}
        		}
        	}
        };

        // 결재 상태 조회
        this.grd_approvalList_oncellclick = function(obj,e)
        {
        	if (e.cell == obj.getBindCellIndex("body", "APPROVALSTATE")) {
        		var objDs = obj.getBindDataset();

        		var chargerid 		= objDs.getColumn(e.row, "CHARGERID");
        		if(chargerid != this.fv_userid) return;

        		var approvalState = "";
        		var processType = objDs.getColumn(e.row, "PROCESSTYPE");
        		var chargeType = objDs.getColumn(e.row, "CHARGETYPE");

        		switch (processType)
        		{
        			case "Review":
        				approvalState = "ReviewSettleState";
        				break;
        			case "Approval":
        				approvalState = "ApprovalSettleState";
        				break;
        			case "Receiving":
        				approvalState = "ReceivingSettleState";
        				break;
        			case "Draft":
        				if(chargeType == "Request") {
        					approvalState = "DraftSettleState";
        				} else {
        					approvalState = "ApprovalSettleState";
        				}
        				break;
        			default:
        				approvalState = "DraftSettleState";
        				break;
        		}
        		this.fn_selectApprovalState(approvalState, false);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.grd_approvalList.addEventHandler("oncellclick",this.grd_approvalList_oncellclick,this);
            this.btn_addApproval.addEventHandler("onclick",this.btn_addApproval_onclick,this);
            this.ds_approvalList.addEventHandler("cancolumnchange",this.ds_approvalList_cancolumnchange,this);
            this.ds_approvalList.addEventHandler("oncolumnchanged",this.ds_approvalList_oncolumnchanged,this);
            this.ds_approvalList.addEventHandler("onrowposchanged",this.ds_approvalList_onrowposchanged,this);
        };
        this.loadIncludeScript("QAM02800D1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
