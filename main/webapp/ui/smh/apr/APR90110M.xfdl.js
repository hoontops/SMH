(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("APR90110M");
            this.set_titletext("부서인원배분");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"APPRAISAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGANIZATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORGANIZATION_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_appraisalHeadcountList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HJSPFM_APPRAISAL_HEADCOUNT_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"APPRAISAL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"BSC_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_GROUP_SIZE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"S_HEADCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"A_HEADCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"B_HEADCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"C_HEADCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"D_HEADCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SUM_HEADCOUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGANIZATION_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGANIZATION_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popParam", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEFECTCODEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"8","60","20","76",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("초기화");
            obj.set_tooltiptext("BUTTON_CLEAR");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"8","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("BUTTON_SEARCH");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0","36",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_search");
            obj.set_background("rgba(247,247,247,1)");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta_appraisalYear","21","10","90","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("<fc v=\'red\'>*</fc>Appraisal Year");
            obj.set_tooltiptext("Appraisal Year");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_appraisalYear","121","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,HJS_HR_APPRAISAL_YEAR_LOV,,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_appraisalSeq","265","10","120","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("<fc v=\'red\'>*</fc>Appraisal Sequence");
            obj.set_tooltiptext("Appraisal Sequence");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_appraisalSeq","395","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,HJS_HR_APPRAISAL_SEQ_LOV,,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","539","10","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Organization");
            obj.set_tooltiptext("Organization");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_organization","649","10","120","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_organization","769","10","22","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_organization_id","791","10","61","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_visible("false");
            obj.set_background("blueviolet");
            obj.set_tooltiptext("Organization id");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_work","0","79",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_appraisalHeadcountList","0","27",null,null,"0","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_appraisalHeadcountList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"180\"/><Column size=\"88\"/><Column size=\"88\"/><Column size=\"88\"/><Column size=\"88\"/><Column size=\"88\"/><Column size=\"88\"/><Column size=\"88\"/><Column size=\"70\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"none\"/><Cell col=\"1\" text=\"Organization\" tooltiptext=\"Organization\"/><Cell col=\"2\" text=\"Total&#13;&#10;Count\"/><Cell col=\"3\" text=\"S&#13;&#10;Head Count\" tooltiptext=\"S&#13;&#10;Head Count\"/><Cell col=\"4\" text=\"A&#13;&#10;Head Count\" tooltiptext=\"A&#13;&#10;Head Count\"/><Cell col=\"5\" text=\"B&#13;&#10;Head Count\" tooltiptext=\"B&#13;&#10;Head Count\"/><Cell col=\"6\" text=\"C&#13;&#10;Head Count\" tooltiptext=\"C&#13;&#10;Head Count\"/><Cell col=\"7\" text=\"D&#13;&#10;Head Count\" tooltiptext=\"D&#13;&#10;Head Count\"/><Cell col=\"8\" text=\"Sum&#13;&#10;Head Count\" tooltiptext=\"Sum&#13;&#10;Head Count\"/><Cell col=\"9\" text=\"Gap\" tooltiptext=\"Gap\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" autosizecol=\"none\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:ORGANIZATION_NM\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"expr:dataset.getRowType(currow)==2? &apos;maskeditcontrol&apos;:&apos;mask&apos;\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"+#,###,##0\" text=\"bind:APPRAISAL_GROUP_SIZE\" textAlign=\"right\" maskeditlimitbymask=\"decimal\" editinputfilter=\"none\"/><Cell col=\"3\" displaytype=\"expr:dataset.getRowType(currow)==2? &apos;maskeditcontrol&apos;:&apos;mask&apos;\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"+#,###,##0\" text=\"bind:S_HEADCOUNT\" textAlign=\"right\" maskeditlimitbymask=\"decimal\" editinputfilter=\"none\"/><Cell col=\"4\" displaytype=\"expr:dataset.getRowType(currow)==2? &apos;maskeditcontrol&apos;:&apos;mask&apos;\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"+#,###,##0\" text=\"bind:A_HEADCOUNT\" textAlign=\"right\" maskeditlimitbymask=\"decimal\" editinputfilter=\"none\"/><Cell col=\"5\" displaytype=\"expr:dataset.getRowType(currow)==2? &apos;maskeditcontrol&apos;:&apos;mask&apos;\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"+#,###,##0\" text=\"bind:B_HEADCOUNT\" textAlign=\"right\" maskeditlimitbymask=\"decimal\" editinputfilter=\"none\"/><Cell col=\"6\" displaytype=\"expr:dataset.getRowType(currow)==2? &apos;maskeditcontrol&apos;:&apos;mask&apos;\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"+#,###,##0\" text=\"bind:C_HEADCOUNT\" textAlign=\"right\" maskeditlimitbymask=\"decimal\" editinputfilter=\"none\"/><Cell col=\"7\" displaytype=\"expr:dataset.getRowType(currow)==2? &apos;maskeditcontrol&apos;:&apos;mask&apos;\" edittype=\"mask\" maskeditautoselect=\"true\" maskeditformat=\"+#,###,##0\" text=\"bind:D_HEADCOUNT\" textAlign=\"right\" maskeditlimitbymask=\"decimal\" editinputfilter=\"none\"/><Cell col=\"8\" displaytype=\"mask\" edittype=\"none\" maskeditautoselect=\"true\" maskeditformat=\"#,###,##0\" textAlign=\"right\" text=\"bind:SUM_HEADCOUNT\"/><Cell col=\"9\" displaytype=\"mask\" edittype=\"none\" maskeditautoselect=\"true\" maskeditformat=\"#,###,##0\" text=\"expr:nexacro.toNumber(dataset.getColumn(currow, &quot;APPRAISAL_GROUP_SIZE&quot;),0)-nexacro.toNumber(dataset.getColumn(currow, &quot;SUM_HEADCOUNT&quot;), 0)\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_addLine",null,"4","60","20","132",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("행추가");
            obj.set_tooltiptext("BUTTON_ADD_ROW");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow_ds_appraisalHeadcountList",null,"4","60","20","66",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("행삭제");
            obj.set_tooltiptext("BUTTON_DELETE_ROW");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"4","60","20","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_tooltiptext("BUTTON_SAVE");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_create",null,"8","60","20","142",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("생성");
            obj.set_tooltiptext("BUTTON_CREATE");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("appraisalYear","div_search.form.cbo_appraisalYear","value","ds_search","APPRAISAL_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("appraisalSeq","div_search.form.cbo_appraisalSeq","value","ds_search","APPRAISAL_SEQUENCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("organizationNm","div_search.form.edt_organization","value","ds_search","ORGANIZATION_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("organizationId","div_search.form.edt_organization_id","value","ds_search","ORGANIZATION_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("APR90110M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: SM 상선 myHR 고도화
         * 업무명 		: 부서인원배분
         * 파일명 		: APR90110M.xfdl
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
        this.gridTitle = "";

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.gridTitle = nexacro.getApplication().gds_menu.lookup("PGM_ID",this.name,"MENU_NM");
        	this.fn_formInit(); //초기값설정
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function(obj,e)
        {
            //조회조건 Organization를 입력만 하고 팝업창에서 선택하지 않았을 경우
        	if ( !this.gfn_isNull(this.ds_search.getColumn(0, "ORGANIZATION_NM")) && this.gfn_isNull(this.ds_search.getColumn(0, "ORGANIZATION_ID")))
        	{
        		this.gfn_Message("SelectPopupData", "Organization", "info", "ok");//{0}을 선택하여 주십시오.
        		return;
        	}

        	// F.A.Q 내역
        	var sSvcID = "selectAppraisalHeadcountList";
        	var sController = "/apr90110/selectAppraisalHeadcountList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_appraisalHeadcountList=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화(nbdfComLib.js -> nfn_clear함수에서 호출함)
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();//초기값설정
        };

        /*
         * 기능 : 신규
         */
        this.fn_addRow = function(obj,e)
        {
        	var appraisalYear = this.ds_search.getColumn(0, "APPRAISAL_YEAR");
        	var appraisalSeq = this.ds_search.getColumn(0, "APPRAISAL_SEQUENCE");

        	if (this.gfn_isNull(appraisalYear) || this.gfn_isNull(appraisalSeq))
        	{
        		this.gfn_Message("ValidateRequiredData", null, "info", "ok");//필수값중 일부가 입력되지 않았습니다. 다시 확인해주세요.
        		return;
        	}

        	var nRow = this.ds_appraisalHeadcountList.addRow();
        	this.ds_appraisalHeadcountList.set_enableevent(false);
        	this.ds_appraisalHeadcountList.setColumn(nRow, "APPRAISAL_YEAR", this.ds_search.getColumn(0, "APPRAISAL_YEAR"));
        	this.ds_appraisalHeadcountList.setColumn(nRow, "APPRAISAL_TYPE", "A140"); //종합평가
        	this.ds_appraisalHeadcountList.setColumn(nRow, "APPRAISAL_SEQUENCE", this.ds_search.getColumn(0, "APPRAISAL_SEQUENCE"));
        	this.ds_appraisalHeadcountList.set_enableevent(true);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function(obj,e)
        {
        	//변경된 데이터가 있는지 체크
        	if (!this.gfn_dsIsUpdated(this.ds_appraisalHeadcountList))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	var objDataset = "ds_appraisalHeadcountList";
        	var strColIdList = "ORGANIZATION_ID";
        	var strColNmList = "Organization"
        	var rtn = this.nfn_MandatoryCheckDs(objDataset, strColIdList, strColNmList);
        	if (rtn == false) return;

        	// ---------------------
        	// 저장
        	// ':U'는 갱싱된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N'은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 저장하지않는 데이터세트는 Normal로 동작합니다.
        	// ---------------------
            var sSvcID        = "saveAppraisalHeadcount";
            var sController   = "/apr90110/saveAppraisalHeadcount.do";
            var sInDatasets   = "INPUT=ds_appraisalHeadcountList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제-->공통기능 nfn_delRow 사용
         */
        this.fn_delete = function(obj,e)
        {
        };

        /*
         * 기능 : 생성
         */
        this.fn_create = function(obj,e)
        {
        	var oArg = {};
        	var opts = "width=417,height=227";
        	this.gfn_openPopup("CREATE_POPUP","apr::APR90110P.xfdl",oArg,opts);
        };

        /*
         * 기능 : 도움말  => 공통 처리
         */
        this.fn_help = function(obj,e)
        {
        };

        /*
         * 기능 : 출력
         */
        this.fn_print = function(obj,e)
        {
        };

        /*
         * 기능 : work영역 초기화  => 공통처리
         */
        this.fn_reset = function(obj,e)
        {
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
        		if (trId == "selectAppraisalHeadcountList") //조회
        		{
        		    this.div_work.form.grd_appraisalHeadcountList.setCellProperty("head", 0, "text", '0');//전체체크초기화
        			if (this.ds_appraisalHeadcountList.rowcount < 1){
        				this.gfn_Message("NotExistList", this.gridTitle, "info", "ok") //{0} 내역정보가 존재하지 않습니다.
        				return;
        			}
        		}
        		else if (trId == "saveAppraisalHeadcount") //조회
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search();
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
        	oArg.arg_searchStr = "";

            if(popupId == "SRCH_ORG323")/*Organization */
        	{
        		var deptNm = this.ds_search.getColumn(0, "ORGANIZATION_NM");
        		oArg.arg_searchStr = this.nfn_isNull(deptNm)? "1=1" : "ORG_NAME="+deptNm;
        		oArg.arg_rtnCols = "ORG_ID|ORG_NAME_KR";
        	}
        	else if(popupId == "GRID_ORG323")/*Organization */
        	{
        		var deptNm = this.ds_appraisalHeadcountList.getColumn(this.ds_appraisalHeadcountList.rowposition, "ORGANIZATION_NM");
        		oArg.arg_searchStr = this.nfn_isNull(deptNm)? "1=1" : "ORG_NAME="+deptNm;
        		oArg.arg_rtnCols = "ORG_ID|ORG_NAME_KR";
        	}
        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

            if(sPopupId == "SRCH_ORG323")           /*Organization */
            {
                this.ds_search.set_enableevent(false);
        		this.ds_search.setColumn(0, "ORGANIZATION_ID", rtn[0]);
        		this.ds_search.setColumn(0, "ORGANIZATION_NM", rtn[1]);
        		this.ds_search.set_enableevent(true);
            }
        	else if(sPopupId == "GRID_ORG323")           /*Organization */
            {
                this.fv_popChange = true;
        		var nRow = this.ds_appraisalHeadcountList.rowposition;
        		this.ds_appraisalHeadcountList.set_enableevent(false);
        		this.ds_appraisalHeadcountList.setColumn(nRow, "ORGANIZATION_ID", rtn[0]);
        		this.ds_appraisalHeadcountList.setColumn(nRow, "ORGANIZATION_NM", rtn[1]);
        		this.ds_appraisalHeadcountList.set_enableevent(true);
            }
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기타 함수 : 조회조건 초기값 설정
        */
        this.fn_formInit = function ()
        {
        	this.ds_search.setColumn(0, "APPRAISAL_YEAR", this.gfn_getYear()); //Sysdate 기준년도
            this.ds_search.setColumn(0, "APPRAISAL_SEQUENCE", "1"); //1st
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 이벤트 : 조회조건의 부서검색
         */
        this.div_search_btn_organization_onclick = function(obj,e)
        {
            this.fn_openPop("SRCH_ORG323","P00323"); //조직조회
        };

        /*
         * 이벤트 : Cell 에 표시된 확장버튼에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다.
         */
        this.div_work_grd_appraisalHeadcountList_onexpandup = function(obj,e)
        {
            if (e.cell == obj.getBindCellIndex("body", "ORGANIZATION_NM")) //
            {
        		this.fn_openPop("GRID_ORG323","P00323"); //Organization 공통팝업 호출
        	}
        };

        /*
         * 이벤트 : ds_search DataSet 의 Column 값이 변경된 후 발생하는 이벤트입니다.
         */
        this.ds_search_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "ORGANIZATION_NM")
        	{
        		if (this.gfn_isNull(e.newvalue))
        		{
        			obj.set_enableevent(false);
        			obj.setColumn(e.row, "ORGANIZATION_ID", "");
        			obj.set_enableevent(true);
        		}
        		else
        		{
        			//Organization를 입력만 하고 팝업창에서 선택하지 않았을 경우
        			/*if (this.gfn_isNull(obj.getColumn(e.row, "ORGANIZATION_ID")))
        			{
        				this.gfn_Message("SelectPopupData", "Organization", "info", "ok");//{0}을 선택하여 주십시오.
        				return;
        				//this.fn_openPop("SRCH_ORG323","P00323"); //Organization 공통팝업 호출
        			}*/
        		}
        	}
        };

        /*
         * 이벤트 : DataSet 의 Column 값이 변경된 후 발생하는 이벤트입니다.
         */
        this.ds_appraisalHeadcountList_oncolumnchanged = function(obj,e)
        {
        	//Headcount가 변경될때마다 SUM_HEADCOUNT 정보 변경
        	if (  e.columnid == "S_HEADCOUNT" ||e.columnid == "A_HEADCOUNT" ||e.columnid == "B_HEADCOUNT" ||e.columnid == "C_HEADCOUNT" ||e.columnid == "D_HEADCOUNT" )
            {
        		var totCnt = obj.getColumn(e.row, "APPRAISAL_GROUP_SIZE");
        		var sumCnt = nexacro.toNumber(obj.getColumn(e.row, "S_HEADCOUNT"), 0)+ nexacro.toNumber(obj.getColumn(e.row, "A_HEADCOUNT"), 0)+
        		             nexacro.toNumber(obj.getColumn(e.row, "B_HEADCOUNT"), 0)+ nexacro.toNumber(obj.getColumn(e.row, "C_HEADCOUNT"), 0)+
        		             nexacro.toNumber(obj.getColumn(e.row, "D_HEADCOUNT"), 0);

        		obj.set_enableevent(false);
        		obj.setColumn(e.row, "SUM_HEADCOUNT", sumCnt);
        		obj.set_enableevent(true);

        		if ( (nexacro.toNumber(totCnt, 0) - nexacro.toNumber(sumCnt, 0)) < 0 )
        		{
        			var totText = this.nfn_GetColNm(this.div_work.form.grd_appraisalHeadcountList, "APPRAISAL_GROUP_SIZE"),
        			    sumText = this.nfn_GetColNm(this.div_work.form.grd_appraisalHeadcountList, "SUM_HEADCOUNT");

        			this.gfn_Message("BLessThanA", [sumText, totText], "info", "ok"); //{0}는 {1}보다 클 수 없습니다.

        			var colId = this.nfn_GetColNum(this.div_work.form.grd_appraisalHeadcountList, e.columnid);
        			this.div_work.form.grd_appraisalHeadcountList.setFocus();
        			this.div_work.form.grd_appraisalHeadcountList.setCellPos(colId);
        			this.div_work.form.grd_appraisalHeadcountList.showEditor(true);

        			return;
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_search.form.cbo_appraisalYear.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_search.form.cbo_appraisalSeq.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_search.form.btn_organization.addEventHandler("onclick",this.div_search_btn_organization_onclick,this);
            this.div_work.form.grd_appraisalHeadcountList.addEventHandler("onexpandup",this.div_work_grd_appraisalHeadcountList_onexpandup,this);
            this.div_work.form.grd_appraisalHeadcountList.addEventHandler("onkeydown",this.div_work_grd_appraisalHeadcountList_onkeydown,this);
            this.div_work.form.btn_addLine.addEventHandler("onclick",this.fn_addRow,this);
            this.div_work.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.btn_create.addEventHandler("onclick",this.fn_create,this);
            this.ds_search.addEventHandler("oncolumnchanged",this.ds_search_oncolumnchanged,this);
            this.ds_appraisalHeadcountList.addEventHandler("oncolumnchanged",this.ds_appraisalHeadcountList_oncolumnchanged,this);
        };
        this.loadIncludeScript("APR90110M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
