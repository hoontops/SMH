(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("APR10110M");
            this.set_titletext("업적평가-목표설정");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPLOYEE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_APPRAISAL_MASTER_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_userInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PERSONID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEENUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_evaluation", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_APPRAISAL_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PARTICIPANT_NAME_1\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISER_1ST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISER_2ND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ORGANIZATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DISAGREEMENT_REVISE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_evaluationHeader", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HJSPFM_PER_OBJECT_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_APPRAISAL_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENT_JOB_DETAILS\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_evaluationDetail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EVALUATION_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_PER_OBJECT_DETAIL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"KPI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECTIVES\" type=\"STRING\" size=\"256\"/><Column id=\"KPI_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECTIVE_DETAILS\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_STATUS_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"INT\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_PER_OBJECT_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_appraisalPeriod", this);
            obj._setContents("<ColumnInfo><Column id=\"APPRAISAL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_appraisalPeriodResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECK_RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_submit", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSPFM_APPRAISAL_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_PER_OBJECT_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CORRECTION_CHECK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_subTitle","0","152",null,"63","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","125","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("0");
            obj.set_text("Name");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Name");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_name","128","5","162","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_cssclass("display");
            obj.set_text("성명");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00","300","0","125","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("2");
            obj.set_text("Department");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Department");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_department","428","5","162","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_cssclass("display");
            obj.set_text("부서");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_00","600","0","125","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("4");
            obj.set_text("Grade");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Grade");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_grade","728","5","162","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_cssclass("display");
            obj.set_text("직급");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_01","0","31","125","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("6");
            obj.set_text("Employee Number");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Employee Number");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_employeeNumber","128","36","162","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_cssclass("display");
            obj.set_text("사번");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_01","300","31","125","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("8");
            obj.set_text("Job");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Job");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_job","428","36","162","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_cssclass("display");
            obj.set_text("업무");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Static("Static30_00_00_00","600","31","125","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("10");
            obj.set_text("Position");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Position");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_position","728","36","162","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_cssclass("display");
            obj.set_text("직급");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Div("div_subTitle01","0","220",null,"32","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_detail_nobg");
            obj.set_text("");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            obj.set_background("#f7f7f7");
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","125","30",null,null,null,null,null,null,this.div_subTitle01.form);
            obj.set_taborder("0");
            obj.set_text("Object Setting");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Object Setting");
            obj.set_border("0px none");
            this.div_subTitle01.addChild(obj.name, obj);

            obj = new Div("div_work","0","253",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_evaluationList","0","27",null,null,"0","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_evaluation");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"Appraisal Year\" tooltiptext=\"Appraisal Year\"/><Cell col=\"2\" text=\"Appraisal Period\" tooltiptext=\"Appraisal Period\"/><Cell col=\"3\" text=\"Part Appraiser\" tooltiptext=\"Part Appraiser\"/><Cell col=\"4\" text=\"1st Appraiser\" tooltiptext=\"1st Appraiser\"/><Cell col=\"5\" text=\"2nd Appraiser\" tooltiptext=\"2nd Appraiser\"/><Cell col=\"6\" text=\"Status\" tooltiptext=\"Status\"/><Cell col=\"7\" text=\"Revision Required\" tooltiptext=\"Revision Required\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:APPRAISAL_YEAR\"/><Cell col=\"2\" text=\"bind:APPRAISAL_DATE\"/><Cell col=\"3\" text=\"bind:PARTICIPANT_NAME_1\"/><Cell col=\"4\" text=\"bind:APPRAISER_1ST_NAME\"/><Cell col=\"5\" text=\"bind:APPRAISER_2ND_NAME\"/><Cell col=\"6\" text=\"bind:ASSESSMENT_STATUS_DESC\" displaytype=\"normal\" combocodecol=\"C,APPRAISAL_ASSESSMENT_STATUS,,Y,N\"/><Cell col=\"7\" text=\"expr:DISAGREEMENT_REVISE == &apos;Y&apos; ?  &apos;theme://images/status_completed.png&apos; : &apos;&apos;\" displaytype=\"imagecontrol\" cssclass=\"cell_img\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"4","60","20","66",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("출력");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("출력");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_submit",null,"4","60","20","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("제출");
            obj.set_tooltiptext("제출");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_01","0","36",null,"111","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div_01");
            this.addChild(obj.name, obj);

            obj = new Static("sta_03","0","0",null,"111","0",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_helpInfoBg");
            obj.set_padding("15px");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_02_00","15","15",null,"20","14",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_helpInfoTxt");
            obj.set_text("Status \'Open\'일 경우 목표입력 또는 수정이 가능합니다. (\'Appraisal Period\' Click)");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_02","15","35",null,"20","14",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_helpInfoTxt");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            obj.set_text("목표수립 제출은 해당 목록 Check 후 목록 오른편 상단의 \'제출(Submit)\' 버튼을 클릭합니다.");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_02_00","15","55",null,"20","14",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_text("제출(Submit)후에는 수정이 불가능합니다. 수정이 필요한 경우에는 1차평가자(또는 파트장)에게 \'Revision\'을 요청하십시오.");
            obj.set_cssclass("sta_WF_helpInfoTxt");
            obj.set_wordWrap("char");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_00_00_00_00_00_00","-1","0","100","15",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("4");
            obj.set_text("h15");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_00_00_00_00_00_00_01","-1","96","100","15",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("5");
            obj.set_text("h15");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("Static19_01_00_00_01_00_00_00_00_00_01","0","0","15","96",null,null,null,null,null,null,this.div_01.form);
            obj.set_taborder("6");
            obj.set_text("h\r\n15");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_02_00_00","15","75",null,"20","14",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("7");
            obj.set_text("(<fc v=\'red\'>*</fc>)표시된 항목은 필수입력 항목입니다.");
            obj.set_cssclass("sta_WF_helpInfoTxt");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            this.div_01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_subTitle.form.edt_name","value","ds_userInfo","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_subTitle.form.edt_department","value","ds_userInfo","DEPARTMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_subTitle.form.edt_grade","value","ds_userInfo","GRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_subTitle.form.edt_employeeNumber","value","ds_userInfo","EMPLOYEENUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_subTitle.form.edt_job","value","ds_userInfo","JOB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_subTitle.form.edt_position","value","ds_userInfo","POSITION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("APR10110M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	:
         * 업무명 		: 업적평가-목표설정
         * 파일명 		: APR10110M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2022.1.13
         * 설  명		: 업적평가-목표설정
         *---------------------------------------------------------------------------------------
         * 변경일		변경자			변경내역
         *---------------------------------------------------------------------------------------
         * 2022.01.13	박대호			최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /*===============================================================================
        == apr설명. (apr) 공통함수 목록
        ===============================================================================
        ● fn_initInfo                              : 초기값 세팅
        ● fn_userInfo                              : 로그인 피평가자 개인정보 조회
        ● fn_evaluationList                        : 업적평가 피평가자 조회
        ● detail_init                        		: Detail에 데이터 전송
        ● sendDetailData                     		: 디테일 리턴
        ● fn_submit                     			: 제출
        ● fn_returnDetail                     		: 팝업 디테일 리턴

        */

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
        	this.fn_initInfo();
        	this.fn_userInfo();
        	this.fn_evaluationList();
        };
        /*******************************************************************************
         * fn_initInfo
         * 기능 : 초기값 세팅
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_initInfo = function ()
        {
        	this.ds_search.setColumn(0, "EMPLOYEE_NUMBER", this.gf_getUserId());
        }

        /*******************************************************************************
         * fn_userInfo
         * 기능 : 로그인 피평가자 개인정보 조회
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_userInfo = function ()
        {
        	var sSvcID = "selectAppraisalUserInfo";
        	var sController = "/apr10110/selectAppraisalUserInfo.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_userInfo=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /*******************************************************************************
         * fn_evaluationList
         * 기능 : 업적평가 피평가자 조회
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_evaluationList = function ()
        {
        	var sSvcID = "selectEvaluationList";
        	var sController = "/apr10110/selectEvaluationList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_evaluation=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }
        /*******************************************************************************
         * sendDetailData
         * 기능 : Detail에 데이터 전송
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.sendDetailData = function(cFrm)
        {
        	var mRow = this.ds_evaluation.rowcount == 1 ? 0 : this.ds_evaluation.rowposition;
        	// arryList 타입전달
        	var oArgs = {
        		objList : [
        					this.ds_userInfo.getColumn(0, "PERSONID"),
        					this.ds_userInfo.getColumn(0, "NAME"),//이름
        					this.ds_userInfo.getColumn(0, "DEPARTMENT"),//부서
        					this.ds_userInfo.getColumn(0, "GRADE"),//직급
        					this.ds_userInfo.getColumn(0, "EMPLOYEENUMBER"),//사번
        					this.ds_userInfo.getColumn(0, "JOB"),//업무
        					this.ds_userInfo.getColumn(0, "POSITION"),//position
        					this.ds_evaluation.getColumn(mRow, "HJSPFM_APPRAISAL_MASTER_SEQ"),//SEQ
        					this.ds_evaluation.getColumn(mRow, "APPRAISAL_YEAR"),//평가년도
        					this.ds_evaluation.getColumn(mRow, "APPRAISAL_SEQUENCE"),//평가차수
        					this.ds_evaluation.getColumn(mRow, "ORGANIZATION_ID"),//부서 ID
        					this.ds_evaluation.getColumn(mRow, "ASSESSMENT_STATUS"),//상태
        					]
        	};

        	// 자식한테 만들어 둔 함수나 변수 사용 가능.
        	this.gfn_getDetail().fn_initParam(oArgs);
        }

        /*******************************************************************************
         * fn_returnDetail
         * 기능 : 디테일 리턴
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_returnDetail = function ()
        {
        	this.fn_initInfo();
        	this.fn_userInfo();
        	this.fn_evaluationList();
        }

        /*******************************************************************************
         * fn_submit
         * 기능 : 제출
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_submit = function ()
        {
        	var chk = 0;
        	var chkStatus = "";
        	var seq = 0;
        	var type = "";
        	var year = "";
        	for(var i = 0; i < this.ds_evaluation.rowcount; i++)
        	{
        		if(this.ds_evaluation.getColumn(i,"CHK")=="1")
        		{
        			chk++;
        			chkStatus = this.ds_evaluation.getColumn(i, "ASSESSMENT_STATUS");
        			seq = this.ds_evaluation.getColumn(i, "HJSPFM_APPRAISAL_MASTER_SEQ");
        			type = this.ds_evaluation.getColumn(i, "APPRAISAL_TYPE");
        			year = this.ds_evaluation.getColumn(i, "APPRAISAL_YEAR");
        		}
        	}
        	if(chk < 1)//제출할 평가를 체크했는지 확인
        	{
        		//제출할 업적평가를 선택해주세요.
        		this.gfn_Message("CheckPerformanceApr", null, "info","ok");
        		return;
        	}
        	if(chk > 1)//2개이상의 평가를 체크했는지 확인
        	{
        		//1개의 업적평가만 제출이 가능합니다.
        		this.gfn_Message("CheckRowCount", null, "info","ok");
        		return;
        	}
        	if(chkStatus != "020")//체크한 평가가 Open인지 확인
        	{
        		//Open 상태의 평가만 제출할 수 있습니다.
        		this.gfn_Message("CheckPerformanceAprStatus", null, "info","ok");
        		return;
        	}
        	this.ds_appraisalPeriod.clearData();
        	this.ds_appraisalPeriod.addRow();
        	this.ds_appraisalPeriod.setColumn(0, "APPRAISAL_TYPE", type);
        	this.ds_appraisalPeriod.setColumn(0, "APPRAISAL_YEAR", year);
        	this.ds_appraisalPeriod.setColumn(0, "APPRAISAL_SEQ", 1);
        	this.ds_appraisalPeriod.setColumn(0, "ASSESSMENT_STATUS", chkStatus);

        	this.ds_search.setColumn(0, "HJSPFM_APPRAISAL_MASTER_SEQ", seq);

        	var sSvcID = "selectEvaluationListDetail";
        	var sController = "/apr10110/selectEvaluationListDetail.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_evaluationHeader=output1 ds_evaluationDetail=output2";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }
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

         /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
         trace('fn_callBack trId ?' + trId);
         	if (errCD < 0)
         	{
         		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
         	}
        	else
         	{
         		switch(trId)
         		{
        			case "selectEvaluationList" :
         			{
        				//this.notFoundView(this.div_work.form.grd_evaluationList);
        				break;
        			}
         			case "selectEvaluationListDetail" :
         			{
         				if(this.ds_evaluationDetail.rowcount > 0)
        				{
        					var weight = 0;
        					for(var i = 0; i < this.ds_evaluationDetail.rowcount; i++)
        					{
        						weight = weight + nexacro.toNumber(this.ds_evaluationDetail.getColumn(i, "WEIGHT"));
        					}
        				}
        				if(weight != 100)
        				{
        					//업적평가 목표등록 가중치 합은 100 이어야 합니다.
        					this.gfn_Message("CheckSumPerformanceAprWeight", null, "info","ok");
        					break;
        				}
        				//제출 후 목표수정이 불가능합니다. 목표합의를 요청하시겠습니까?
        				var bOK = this.gfn_Message("CheckPerformanceAprSubmit", null, "conf", "yesno");
        				if (bOK == false) break;




        				var sSvcID = "selectCheckAppraisalPeriod";
        				var sController = "/apr10110/selectCheckAppraisalPeriod.do";
        				var sInDatasets = "INPUT=ds_appraisalPeriod";
        				var sOutDatasets = "ds_appraisalPeriodResult=output";
        				var sArgs = "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        				break;
         			}
        			case "selectCheckAppraisalPeriod" :
         			{
        				if(this.ds_appraisalPeriodResult.getColumn(0, "CHECK_RESULT") == "NONE")
        				{
        					//평가 기간이 아닙니다
        					this.gfn_Message("CheckAppraisalPeriod", null, "info","ok");
        					break;
        				}
        				this.ds_submit.setColumn(0, "HJSPFM_APPRAISAL_MASTER_SEQ", this.ds_evaluationHeader.getColumn(0, "HJSPFM_APPRAISAL_MASTER_SEQ"));
        				this.ds_submit.setColumn(0, "HJSPFM_PER_OBJECT_MASTER_SEQ", this.ds_evaluationHeader.getColumn(0, "HJSPFM_PER_OBJECT_MASTER_SEQ"));
        				this.ds_submit.setColumn(0, "ASSESSMENT_STATUS", "030");
        				this.ds_submit.setColumn(0, "APPRAISAL_STATUS", "030");
        				this.ds_submit.setColumn(0, "CORRECTION_CHECK", "N");

        				var sSvcID = "saveSubmitMaster";
        				var sController = "/apr10110/saveSubmitMaster.do";
        				var sInDatasets = "ds_submit=ds_submit:A";
        				var sOutDatasets = "";
        				var sArgs = "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        				break;
        			}
        			case "saveSubmitMaster" :
         			{
        				this.gfn_Message("SuccessSave", null, "info","ok");
        				this.fn_evaluationList();
        			}
         			default:
         		}
         	}
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/



        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
         /*
         * 기능 : 셀 클릭
         */
        this.div_00_grd_evaluationList_oncellclick = function(obj,e)
        {
        	if(this.ds_evaluation.getRowCount() > 0 && e.cell != 0)
        	{
        		// url -> 파일url
        		// callBack -> 자식창 열고 나서 실행될 함수
        		this.gfn_showPage('apr::APR10120M.xfdl', 'sendDetailData');

        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_subTitle.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_subTitle.form.Static30_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_subTitle.form.Static30_01.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_subTitle.form.edt_employeeNumber.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_subTitle.form.Static30_00_01.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_subTitle.form.Static30_00_00_00.addEventHandler("onclick",this.div_subTitle_Static30_00_00_00_onclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_subTitle01.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.grd_evaluationList.addEventHandler("oncellclick",this.div_00_grd_evaluationList_oncellclick,this);
            this.div_work.form.btn_print.addEventHandler("onclick",this.fn_save,this);
            this.div_work.form.btn_submit.addEventHandler("onclick",this.fn_submit,this);
            this.ds_evaluationDetail.addEventHandler("oncolumnchanged",this.ds_evaluationDetail_oncolumnchanged,this);
        };
        this.loadIncludeScript("APR10110M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
