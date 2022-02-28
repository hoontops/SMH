(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS01700P");
            this.set_titletext("결재선 지정");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1024,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GOVERNANCENO\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"GOVERNANCENO\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNER\" type=\"STRING\" size=\"256\"/><Column id=\"SPECOWNERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALID\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REVIEWERID\" type=\"STRING\" size=\"256\"/><Column id=\"REVIEWERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REVIEWERSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVER\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVERSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"GOVERNANCESTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISREDRAFT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","20","26",null,"34","630",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("결재선 지정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("APPROVALLINEASSIGNMENT");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel",null,"160","70","28","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,"160","70","28","btnCancel:5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","117","262",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","236","26","50","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","11","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"0","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"50","10","20","310",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_basApproval","0","60",null,null,"20","50",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_list");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"결재상태\" tooltiptext=\"APPROVALSTATE\"/><Cell col=\"1\" tooltiptext=\"SPECOWNER\" text=\"사양담당자 ID\"/><Cell col=\"2\" text=\"사양담당자\" tooltiptext=\"SPECOWNERNAME\"/><Cell col=\"3\" tooltiptext=\"REVIEWERID\" text=\"검토자 ID\"/><Cell col=\"4\" tooltiptext=\"REVIEWERNAME\" text=\"검토자명\"/><Cell col=\"5\" tooltiptext=\"REVIEWERSTATE\" text=\"상태\"/><Cell col=\"6\" tooltiptext=\"APPROVER\" text=\"승인자 ID\"/><Cell col=\"7\" tooltiptext=\"APPROVERNAME\" text=\"승인자명\"/><Cell col=\"8\" tooltiptext=\"APPROVERSTATE\" text=\"상태\"/></Band><Band id=\"body\"><Cell text=\"bind:GOVERNANCESTATE\" displaytype=\"combotext\" combocodecol=\"C,GovernanceState,,Y,N\"/><Cell col=\"1\" text=\"bind:SPECOWNER\"/><Cell col=\"2\" text=\"bind:SPECOWNERNAME\"/><Cell col=\"3\" text=\"bind:REVIEWERID\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:REVIEWERNAME\"/><Cell col=\"5\" text=\"bind:REVIEWERSTATE\" displaytype=\"combotext\" combocodecol=\"C,ApprovalStatus,,Y,N\"/><Cell col=\"6\" text=\"bind:APPROVER\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:APPROVERNAME\" displaytype=\"normal\"/><Cell col=\"8\" text=\"bind:APPROVERSTATE\" combocodecol=\"C,ApprovalStatus,,Y,N\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"16","25","25","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1024,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS01700P.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS01700P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 결재선 지정
         * 파일명 		: BAS01700P.xfdl
         * 작성자 		: sungmin.choe
         * 작성일 		: 2021.3.10
         *
         * 설  명		: 결재선 지정
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.3.10	sungmin.choe   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
         var lv_rtnCols;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	v_rtnCols = this.parent.arg_rtnCols;
        	this.nfn_formInit(obj);
        	this.fn_search();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_list.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "GOVERNANCENO", this.parent.governanceNo);
        	this.ds_search.setColumn(0, "GOVERNANCETYPE", this.parent.governanceType);

        	var sSvcID 			= "selectGovernanceApprovalList";
        	var sController 	= "/bas01700/selectGovernanceApprovalList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets  	= "ds_list=output";
        	var sArgs 		  	= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


         /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	trace(errMsg);
        	if (errCD < 0)
        	{
        		if (trId == "requestGovernance")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        			} else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        			}
        		} else {
        			this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		}
        	}
        	else
        	{
        		if (trId == "requestGovernance")
        		{
        			this.gfn_Message("SuccessApprovalRequest", null, "info", "ok");
        			this.opener.fv_rtnValue = "S";
        			this.opener.fn_search();
        			this.close();
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/
        this.fn_openPop = function(svcId, popId)
        {
        	// gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
        	//-----------------
        	// arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅
        	// popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        	// popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        	// rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        	// paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        	// paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        	// searchStr   : 팝업 조회조건 콤보값 = 조회 값

        	var popupId = svcId;
        	var oArg = {};
        	var opts = "width=800,height=500";

        	oArg.arg_type = "B";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "";

        	if(svcId =="GRD_REVIEWER" || svcId =="GRD_APPROVAL"){
        		oArg.arg_rtnCols = "USER_ID|USER_NM";
        	}
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId =="GRD_REVIEWER"){
        		this.ds_list.setColumn(0, "REVIEWERID", 	rtn[0]);
        		this.ds_list.setColumn(0, "REVIEWERNAME", 	rtn[1]);
        	}

        	if(sPopupId =="GRD_APPROVAL"){
        		this.ds_list.setColumn(0, "APPROVER", 	rtn[0]);
        		this.ds_list.setColumn(0, "APPROVERNAME", 	rtn[1]);
        	}

        }
        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	this.opener.fv_rtnValue = null;
        	this.close();
        };

        this.btnCancel_onclick = function(obj,e)
        {
        	this.opener.fv_rtnValue = null;
        	this.close();
        };

        this.btnConfirm_onclick = function(obj,e)
        {
        	var dsObj 			= this.ds_list;
        	var governanceState = dsObj.getColumn(0, "GOVERNANCESTATE");
        	var approverId 		= dsObj.getColumn(0, "APPROVER");
        	var approverName 	= dsObj.getColumn(0, "APPROVERNAME");
        	var reviewerId 		= dsObj.getColumn(0, "REVIEWERID");
        	var reviewerName 	= dsObj.getColumn(0, "REVIEWERNAME");
        	var isRedraft		= "N";

        	if(dsObj.rowcount<1){
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	if(this.nfn_isNull(approverId) || this.nfn_isNull(approverName)) {
        		this.gfn_Message("SETAPPROVER2", null, "warning", "ok");
        		return;
        	}

        	if(!this.nfn_isNull(reviewerId) && this.nfn_isNull(reviewerName)) {
        		this.gfn_Message("ISEMPTYREVIEWERNAME", null, "warning", "ok");
        		return;
        	}

        	if(governanceState=="Working"){
        		this.gfn_Message("ALREADYSETTEDAPPROVAL", null, "warning", "ok");
        		return;
        	} else if(governanceState=="Reject"){
        		if(!this.gfn_Message("ISREDRAFT", null, "conf", "yesno")){
        			return;
        		}
        		this.ds_list.setColumn(0, "ISREDRAFT", "Y");
        		isRedraft = "Y";
        	} else if(governanceState=="Approved" || governanceState=="Input"){
        		this.gfn_Message("ISAPPROVED", null, "warning", "ok");
        		return;
        	} else if(reviewerId==approverId){
        		this.gfn_Message("SAMEREVIEWERANDAPPROVER", null, "warning", "ok");
        		return;
        	}

        	if(isRedraft !="Y"){
        		if(!this.gfn_Message("InfoApprovalRequest", null, "conf", "yesno")){
        				return;
        		}
        	}

        	this.fn_request();
        };


        this.fn_request = function()
        {
        	// -------------------------
        	// 승인요청
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "requestGovernance";
        	var sController 	= "/bas01700/requestGovernance.do";
        	var sInDatasets 	= "INPUT=ds_list:A";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }


        this.grd_basApproval_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.cell, "REVIEWERID")) {
        		this.fn_openPop("GRD_REVIEWER","P00161");
        	} else if (this.nfn_isEqualCol(obj, e.cell, "APPROVER")) {
        		this.fn_openPop("GRD_APPROVAL","P00161");
        	}

        };

        this.ds_list_onvaluechanged = function(obj,e)
        {
        	if(e.columnid=="REVIEWERID"){
        		obj.setColumn(e.row, "REVIEWERNAME", "");
        	}
        	if(e.columnid=="APPROVER"){
        		obj.setColumn(e.row, "APPROVERNAME", "");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.grd_basApproval.addEventHandler("onselectchanged",this.div_work_grd_basApproval_onselectchanged,this);
            this.grd_basApproval.addEventHandler("onexpandup",this.grd_basApproval_onexpandup,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.ds_list.addEventHandler("onvaluechanged",this.ds_list_onvaluechanged,this);
        };
        this.loadIncludeScript("BAS01700P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
