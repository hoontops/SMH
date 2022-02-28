(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("APR90110P");
            this.set_titletext("부서인원배분 생성");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(417,227);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_create", this);
            obj._setContents("<ColumnInfo><Column id=\"APPRAISAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGANIZATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORGANIZATION_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close",null,null,"70","28","137","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_create",null,null,"70","28","btn_close:5","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("생성");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("sta_h20_b",null,null,"50","20","117","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","47","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"36","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"50","10","20","400",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","Static02:0",null,"31","45",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("부서인원 배분");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_createInfo","20","sta_title:0",null,"94","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.div_createInfo.form);
            obj.set_taborder("0");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_createInfo.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","70",null,"48","10",null,"0",null,null,null,null,this.div_createInfo.form);
            obj.set_taborder("1");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_createInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_appraisalYear","137","10",null,"20","160",null,null,null,null,null,this.div_createInfo.form);
            obj.set_taborder("4");
            obj.set_codecolumn("C,HJS_HR_APPRAISAL_YEAR_LOV,,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_createInfo.addChild(obj.name, obj);

            obj = new Static("sta_appraisalYear","0.00%","10",null,"20","cbo_appraisalYear:10",null,null,null,null,null,this.div_createInfo.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("<fc v=\'red\'>*</fc>Appraisal Year");
            obj.set_tooltiptext("Appraisal Year");
            obj.set_usedecorate("true");
            this.div_createInfo.addChild(obj.name, obj);

            obj = new Combo("cbo_appraisalSeq","137","34",null,"20","160",null,null,null,null,null,this.div_createInfo.form);
            obj.set_taborder("5");
            obj.set_codecolumn("C,HJS_HR_APPRAISAL_SEQ_LOV,,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_createInfo.addChild(obj.name, obj);

            obj = new Static("sta_appraisalSeq","0.00%","34",null,"20","cbo_appraisalSeq:10",null,null,null,null,null,this.div_createInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("<fc v=\'red\'>*</fc>Appraisal Sequence");
            obj.set_tooltiptext("Appraisal Sequence");
            obj.set_usedecorate("true");
            this.div_createInfo.addChild(obj.name, obj);

            obj = new Edit("edt_organization","137","58",null,"20","70",null,null,null,null,null,this.div_createInfo.form);
            obj.set_taborder("7");
            this.div_createInfo.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","0.00%","58",null,"20","edt_organization:10",null,null,null,null,null,this.div_createInfo.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Organization");
            obj.set_tooltiptext("Organization");
            this.div_createInfo.addChild(obj.name, obj);

            obj = new Button("btn_organization","305","58",null,"20","48",null,null,null,null,null,this.div_createInfo.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_finder");
            this.div_createInfo.addChild(obj.name, obj);

            obj = new Edit("edt_organization_id","326","58","40","20",null,null,null,null,null,null,this.div_createInfo.form);
            obj.set_taborder("9");
            obj.set_visible("false");
            obj.set_background("blueviolet");
            obj.set_tooltiptext("Organization id");
            this.div_createInfo.addChild(obj.name, obj);

            obj = new Static("Static02_01","54.92%","145","50","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",417,227,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("appraisalYear","div_createInfo.form.cbo_appraisalYear","value","ds_create","APPRAISAL_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("appraisalSeq","div_createInfo.form.cbo_appraisalSeq","value","ds_create","APPRAISAL_SEQUENCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("organizationNm","div_createInfo.form.edt_organization","value","ds_create","ORGANIZATION_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("organizationId","div_createInfo.form.edt_organization_id","value","ds_create","ORGANIZATION_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("APR90110P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: SM 상선 myHR 고도화
         * 업무명 		: 부서인원배분 생성
         * 파일명 		: APR90110P.xfdl
         * 작성자 		: yhee.kim
         * 작성일 		: 2022.02.22
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2022.02.22	yhee.kim   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	//부서별 인원배분 화면의 조회조건 값 복사
        	//this.ds_create.copyRow(0, this.opener.ds_search, 0);

        	this.ds_create.setColumn(0, "APPRAISAL_YEAR", this.gfn_getYear()); //Sysdate 기준년도
            this.ds_create.setColumn(0, "APPRAISAL_SEQUENCE", "1"); //1st
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/

         /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		if (trId.substring(0, 6) == "select")
        		{
        			this.gfn_Message("ErrorOnSearch", trId + errMsg, "error", "ok");
        		}
        		else
        		{
        			this.gfn_Message("ErrorOnSave", trId + errMsg, "error", "ok");
        		}
        	}
        	else
        	{
        		if (trId == "createAppraisalHeadcount") //조회
        		{
        		}
        	}
        };
         /**************************************************************************
         * 6. 팝업 호출/콜백
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
        	var opts = "width=650,height=500";

        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	var deptNm = this.ds_create.getColumn(0, "ORGANIZATION_NM");
        	oArg.arg_searchStr = this.nfn_isNull(deptNm)? "1=1" : "ORG_NAME="+deptNm;

        	if(popupId == "CRESRCH_ORG323"){          /*Organization */
        		oArg.arg_rtnCols = "ORG_ID|ORG_NAME_KR";
        	}
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

            if(sPopupId == "CRESRCH_ORG323")           /*Organization */
            {
                this.ds_create.set_enableevent(false);
        		this.ds_create.setColumn(0, "ORGANIZATION_ID", rtn[0]);
        		this.ds_create.setColumn(0, "ORGANIZATION_NM", rtn[1]);
        		this.ds_create.set_enableevent(true);
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
        	this.close();
        };

        /*
        *
        */
        this.btn_create_onclick = function(obj,e)
        {
            //조회조건 Organization를 입력만 하고 팝업창에서 선택하지 않았을 경우
        	if ( !this.gfn_isNull(this.ds_create.getColumn(0, "ORGANIZATION_NM")) && this.gfn_isNull(this.ds_create.getColumn(0, "ORGANIZATION_ID")))
        	{
        		this.gfn_Message("SelectPopupData", "Organization", "info", "ok");//{0}을 선택하여 주십시오.
        		return;
        	}

        	var component = this.div_createInfo;
        	var strColIdList = "cbo_appraisalYear,cbo_appraisalSeq";
        	var strColNmList = "Appraisal Year,Appraisal Sequence";
        	if (!this.nfn_MandatoryCheck(component, strColIdList, strColNmList)) return;

        	if (!this.gfn_Message("CreateAfterDelete", this.opener.gridTitle, "conf", "yesno")) return;

            this.ds_create.setColumn(0, "APPRAISAL_TYPE", "A140"); //종합평가

        // -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "createAppraisalHeadcount";
        	var sController 	= "/apr90110/createAppraisalHeadcount.do";
        	var sInDatasets 	= "INPUT=ds_create";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 이벤트 : Organization 이미지 클릭
         */
        this.div_createInfo_btn_organization_onclick = function(obj,e)
        {
            this.fn_openPop("CRESRCH_ORG323","P00323"); //조직조회
        };

        /*
         * 이벤트 : ds_create DataSet 의 Column 값이 변경된 후 발생하는 이벤트입니다.
         */
        this.ds_create_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "ORGANIZATION_NM" && this.gfn_isNull(e.newvalue))
        	{
        		obj.set_enableevent(false);
        		obj.setColumn(e.row, "ORGANIZATION_ID", "");
        		obj.set_enableevent(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_create.addEventHandler("onclick",this.btn_create_onclick,this);
            this.div_createInfo.form.cbo_appraisalYear.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_createInfo.form.cbo_appraisalSeq.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_createInfo.form.btn_organization.addEventHandler("onclick",this.div_createInfo_btn_organization_onclick,this);
            this.ds_create.addEventHandler("oncolumnchanged",this.ds_create_oncolumnchanged,this);
        };
        this.loadIncludeScript("APR90110P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
