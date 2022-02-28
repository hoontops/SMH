(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BEN60110M");
            this.set_titletext("단체상해보험");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PERSON_ID\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_addInsuraceList", this);
            obj._setContents("<ColumnInfo><ConstColumn id=\"HJSBEN_GROUP_INSURANCE_SEQ\" type=\"BIGDECIMAL\" size=\"30\"/><ConstColumn id=\"YYYY\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"EFFECTIVE_DATE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"STATUS\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"STATUS_NAME\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"LIFE_INSURANCE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"CANCER_INSURANCE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"ADD_INSURANCE_DATE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"ADD_SELF_LIFE_INSURANCE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"ADD_SELF_LIFE_AMOUNT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"ADD_SELF_CANCER_INSURANCE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"ADD_SELF_CANCER_AMOUNT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"ADD_WIFE_LIFE_INSURANCE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"ADD_WIFE_LIFE_AMOUNT\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"ADD_WIFE_CANCER_INSURANCE\" type=\"STRING\" size=\"30\"/><ConstColumn id=\"ADD_WIFE_CANCER_AMOUNT\" type=\"STRING\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","0","36",null,"237","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","36",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("단체상해보험 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("단체상해보험 정보");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_subTitle","0","36",null,"63","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","135","31",null,null,null,null,null,null,this.div_work.form.div_subTitle.form);
            obj.set_taborder("0");
            obj.set_text("<fc v=\'red\'>*</fc>기준년도");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("기준년도");
            obj.set_usedecorate("true");
            this.div_work.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_yyyy","140","5","160","20",null,null,null,null,null,null,this.div_work.form.div_subTitle.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("성명");
            this.div_work.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00","454","0","135","31",null,null,null,null,null,null,this.div_work.form.div_subTitle.form);
            obj.set_taborder("2");
            obj.set_text("승인상태");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("승인상태");
            this.div_work.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_statusName","594","5","160","20",null,null,null,null,null,null,this.div_work.form.div_subTitle.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("부서");
            this.div_work.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_01","0","31","135","31",null,null,null,null,null,null,this.div_work.form.div_subTitle.form);
            obj.set_taborder("4");
            obj.set_text("생명보험(기본)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("생명보험(기본)");
            obj.set_usedecorate("true");
            obj.set_visible("true");
            this.div_work.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_lifeInsurance","140","36","160","20",null,null,null,null,null,null,this.div_work.form.div_subTitle.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("성명");
            this.div_work.form.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_00","454","31","135","31",null,null,null,null,null,null,this.div_work.form.div_subTitle.form);
            obj.set_taborder("6");
            obj.set_text("암보험(기본)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("암보험(기본)");
            this.div_work.form.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_cancerInsurance","594","36","160","20",null,null,null,null,null,null,this.div_work.form.div_subTitle.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_cssclass("display");
            obj.set_enable("false");
            obj.set_text("부서");
            this.div_work.form.div_subTitle.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"9","60","20","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_tooltiptext("저장");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,"9","60","20","66",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_tooltiptext("취소");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static20_00_00_00","0","99","211","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("추가 상세보험 신청");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("추가 상세보험 신청");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_sub","0","133",null,"94","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","135","31",null,null,null,null,null,null,this.div_work.form.div_sub.form);
            obj.set_taborder("0");
            obj.set_text("신청일자");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("신청일자");
            obj.set_usedecorate("true");
            obj.set_visible("true");
            this.div_work.form.div_sub.addChild(obj.name, obj);

            obj = new Static("Static30_00","454","31","135","31",null,null,null,null,null,null,this.div_work.form.div_sub.form);
            obj.set_taborder("1");
            obj.set_text("배우자(사망/암)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("배우자(사망/암)");
            obj.set_visible("true");
            this.div_work.form.div_sub.addChild(obj.name, obj);

            obj = new Static("Static30_01","0","31","135","31",null,null,null,null,null,null,this.div_work.form.div_sub.form);
            obj.set_taborder("2");
            obj.set_text("생명보험(본인)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("생명보험(본인)");
            obj.set_usedecorate("true");
            obj.set_visible("true");
            this.div_work.form.div_sub.addChild(obj.name, obj);

            obj = new Static("Static30_00_00","454","62","135","31",null,null,null,null,null,null,this.div_work.form.div_sub.form);
            obj.set_taborder("3");
            obj.set_text("수술특약(본인)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("수술특약(본인)");
            obj.set_visible("true");
            this.div_work.form.div_sub.addChild(obj.name, obj);

            obj = new Static("Static30_01_00","0","62","135","31",null,null,null,null,null,null,this.div_work.form.div_sub.form);
            obj.set_taborder("4");
            obj.set_text("2대 질병특약(본인)");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("2대 질병특약(본인)");
            obj.set_usedecorate("true");
            obj.set_visible("true");
            this.div_work.form.div_sub.addChild(obj.name, obj);

            obj = new Calendar("cal_effectiveDate","140","5","160","20",null,null,null,null,null,null,this.div_work.form.div_sub.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_cssclass("display");
            this.div_work.form.div_sub.addChild(obj.name, obj);

            obj = new Combo("cbo_addSelfLifeInsurance","140","36","160","20",null,null,null,null,null,null,this.div_work.form.div_sub.form);
            obj.set_taborder("6");
            obj.set_codecolumn("C,HJS_HR_ADD_INSURANCE1,SEL,Y,Y");
            obj.set_index("-1");
            this.div_work.form.div_sub.addChild(obj.name, obj);

            obj = new Combo("cbo_addSelfCancerInsurance","140","67","160","20",null,null,null,null,null,null,this.div_work.form.div_sub.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,HJS_HR_ADD_INSURANCE2,SEL,Y,Y");
            obj.set_index("-1");
            this.div_work.form.div_sub.addChild(obj.name, obj);

            obj = new Combo("cbo_addWifeLifeInsurance","594","36","160","20",null,null,null,null,null,null,this.div_work.form.div_sub.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,HJS_HR_ADD_MATE_INSURANCE1,SEL,Y,Y");
            obj.set_index("-1");
            this.div_work.form.div_sub.addChild(obj.name, obj);

            obj = new Combo("cbo_addWifeCancerInsurance","594","67","160","20",null,null,null,null,null,null,this.div_work.form.div_sub.form);
            obj.set_taborder("9");
            obj.set_codecolumn("C,HJS_HR_ADD_MATE_INSURANCE1,SEL,Y,Y");
            obj.set_index("-1");
            this.div_work.form.div_sub.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","303","36","140","20",null,null,null,null,null,null,this.div_work.form.div_sub.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            this.div_work.form.div_sub.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00","303","67","140","20",null,null,null,null,null,null,this.div_work.form.div_sub.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            this.div_work.form.div_sub.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_01","757","36","140","20",null,null,null,null,null,null,this.div_work.form.div_sub.form);
            obj.set_taborder("12");
            obj.set_cssclass("display");
            this.div_work.form.div_sub.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00_00_00","757","67","140","20",null,null,null,null,null,null,this.div_work.form.div_sub.form);
            obj.set_taborder("13");
            obj.set_cssclass("display");
            this.div_work.form.div_sub.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_work.form.div_subTitle.form.edt_yyyy","value","ds_addInsuraceList","YYYY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_work.form.div_subTitle.form.edt_statusName","value","ds_addInsuraceList","STATUS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_work.form.div_subTitle.form.edt_lifeInsurance","value","ds_addInsuraceList","LIFE_INSURANCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_work.form.div_subTitle.form.edt_cancerInsurance","value","ds_addInsuraceList","CANCER_INSURANCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_work.form.div_sub.form.cal_effectiveDate","value","ds_addInsuraceList","ADD_INSURANCE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_work.form.div_sub.form.cbo_addSelfLifeInsurance","value","ds_addInsuraceList","ADD_SELF_LIFE_INSURANCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_work.form.div_sub.form.cbo_addWifeLifeInsurance","value","ds_addInsuraceList","ADD_WIFE_LIFE_INSURANCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_work.form.div_sub.form.cbo_addSelfCancerInsurance","value","ds_addInsuraceList","ADD_SELF_CANCER_INSURANCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_work.form.div_sub.form.cbo_addWifeCancerInsurance","value","ds_addInsuraceList","ADD_WIFE_CANCER_INSURANCE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BEN60110M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: SM 상선 myHR 고도화
         * 업무명 		: 단체상해보험
         * 파일명 		: BEN60110M.xfdl
         * 작성자 		: 정우영
         * 작성일 		: 2022.01.27
         * 설  명		: 임직원 본인은 단체보험을 신청하는 화면입니다.
         *                Grid의 CheckBox edittype => dataset.getColumn(currow, "APPROVE_YN")=="N"?'checkbox':'none'
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2022.01.27	정우영   	최초작성
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
        	var employee_number = this.gf_getUserAcnt();
        	var person_id       = this.gf_getPersonId();
        	var assignmentId    = this.gf_getAssignmentId();

        	trace("사번 => " + employee_number + ", 개인id => " +  person_id + ", 발령id => " +  assignmentId);

        	this.fn_search();
        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/

        /*
         * 기능 : 초기화
         */
        this.fn_searchClear = function(obj,e)
        {

        };


        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	// 매개변수 초기화
        	this.ds_search.clearData();
        	this.ds_addInsuraceList.clearData();

        	var sRow = this.ds_search.addRow();
        	var personID = this.gf_getPersonId();
        	//trace("personID => " + personID);
        	this.ds_search.setColumn(sRow, "PERSON_ID", personID);

        	// 단체상해보험 내역 조회
        	var sSvcID       = "selectAddInsuraceList";
        	var sController  = "/ben60110/selectAddInsuraceList.do";
        	var sInDatasets  = "INPUT=ds_search";
        	var sOutDatasets = "ds_addInsuraceList=output";
        	var sArgs        = "";
        	sArgs += this.gfn_setParam("method", "selectAddInsuraceList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	// 결재상태(Lookup : HJS_HR_APPROVAL_STATUS) 대기(10) 상태 체크
        	var sRow = this.ds_addInsuraceList.rowposition;
        	var statusCode = this.ds_addInsuraceList.getColumn(sRow, "STATUS");
        	//trace("statusCode => " + statusCode);

        	if (statusCode != "10")
        	{
        		this.gfn_Message("ErrorOnSave", '상해보험 가입 결재상태를 확인하시기 바랍니다. 담당자에게 문의하여 주시기 바랍니다.', "info", "ok");
        		return;
        	}

        	// 필수체크
        	var objDataset   = "ds_addInsuraceList";
        	var strColIdList = "EFFECTIVE_DATE";
        	var strColNmList = "신청일자"

        	var rtn = this.nfn_MandatoryCheckDs(objDataset, strColIdList, strColNmList);
        	if (rtn == false) return;

        	// 추가 상해보험 데이터 저장
        	var sSvcID       = "saveAddInsurace";
        	var sController  = "/ben60110/saveAddInsurace.do";
        	var sInDatasets  = "INPUT=ds_addInsuraceList:U";
        	var sOutDatasets = "";
        	var sArgs        = "";
        	sArgs += this.gfn_setParam("method", "selectCloseDateInfo");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


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
        		// 단체상해보험 조회 결과
        		if (trId == "selectAddInsuraceList")
        		{
        			if (this.ds_addInsuraceList.rowcount < 1)
        			{
        				 this.gfn_Message("NotExistList", "단체상해보험", "info", "ok") //{0} 내역정보가 존재하지 않습니다.
        				 return;
        			}
        		}
        		// 단체상해보험 데이터 저장 결과
        		else if (trId == "saveAddInsurace")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search();
        		}
        	}
        };


        /**************************************************************************
         * 6. 이벤트
         ***************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.div_subTitle.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_subTitle.form.Static30_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_work.form.div_subTitle.form.Static30_01.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_subTitle.form.Static30_00_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_work.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_work.form.div_sub.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_sub.form.Static30_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_work.form.div_sub.form.Static30_01.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_sub.form.Static30_00_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_work.form.div_sub.form.Static30_01_00.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_sub.form.cbo_addSelfLifeInsurance.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_work.form.div_sub.form.cbo_addSelfCancerInsurance.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_work.form.div_sub.form.cbo_addWifeCancerInsurance.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
        };
        this.loadIncludeScript("BEN60110M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
