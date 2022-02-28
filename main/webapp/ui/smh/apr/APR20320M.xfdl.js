(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("APR20320M");
            this.set_titletext("역량평가-파트장 평가");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPLOYEE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_APPRAISAL_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"HJSHR_COMPETENCE_INFO_M_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REQUIRED_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_COMP_GOAL_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_abilityUserList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISER_1ST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISER_2ND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_APPRAISAL_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PARTICIPANT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"LINK\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_userInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PERSONID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEENUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_abilityTableList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"COMPETENCE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMPETENCE_DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"HJSHR_COMPETENCE_INFO_M_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REQUIRED_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"REQUIRED_LEVEL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"REQUIRED_LEVEL_STEP_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"PARTICIPANT_STEP_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"PARTICIPANT_RATING_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PARTICIPANT_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"PARTICIPANT_PROFICIENCY\" type=\"STRING\" size=\"256\"/><Column id=\"PARTICIPANT_RATING\" type=\"STRING\" size=\"256\"/><Column id=\"PARTICIPANT_SCORE\" type=\"STRING\" size=\"256\"/><Column id=\"SELF_ASSESSMENT_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_COMP_GOAL_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_COMP_GOAL_DETAIL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_APPRAISAL_MASTER_OVN\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_APPRAISAL_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"COMPETENCE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPETENCE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_requirementList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"KR_FOCUS\" type=\"STRING\" size=\"256\"/><Column id=\"KR_DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"HJSHR_COMPETENCE_INFO_D_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"HJSHR_COMPETENCE_INFO_M_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"KR_LEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ratingList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"RATING_LEVEL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"STEP_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"BEHAVIOURAL_INDICATOR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_abilityTableMaster", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HJSPFM_COMP_GOAL_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_PARTICIPANT_COMMENT1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0.00%","36",null,"67","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_search");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","21","10","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Name");
            obj.set_tooltiptext("Name");
            obj.set_usedecorate("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_name","131","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("EMPLOYEE_NUMBER");
            obj.set_font("9pt \"Dotum\"");
            obj.set_innerdataset("ds_abilityUserList");
            obj.set_datacolumn("APPRAISEE_NAME");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","275","10","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Department");
            obj.set_tooltiptext("Department");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_01","21","35","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Employee Number");
            obj.set_tooltiptext("Employee Number");
            obj.set_usedecorate("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","275","35","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Job");
            obj.set_tooltiptext("Job");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","529","10","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Grade");
            obj.set_tooltiptext("Grade");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","529","35","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Position");
            obj.set_tooltiptext("Position");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_employeeNumber","131","35","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_department","385","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_job","385","35","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_grade","639","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_position","639","35","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_cssclass("display");
            obj.set_enable("false");
            this.div_search.addChild(obj.name, obj);

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

            obj = new Button("btn_search",null,"8","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","0","108",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Div("div_subTitle01","0",null,null,"32","0","240",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
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
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","210","30",null,null,null,null,null,null,this.div_work.form.div_subTitle01.form);
            obj.set_taborder("0");
            obj.set_text("Requirement Skill of Competences");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Requirement Skill of Competences");
            obj.set_border("0px none");
            this.div_work.form.div_subTitle01.addChild(obj.name, obj);

            obj = new Div("div_subTitle00","0",null,null,"63","0","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_detail_nobg");
            obj.set_text("");
            obj.set_async("true");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","125","61",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("0");
            obj.set_text("Part Appraiser\r\nOpinion");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Part Appraiser Opinion");
            obj.set_usedecorate("true");
            obj.set_border("0px none");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new TextArea("txa_jobParticipantComment","129","5","773","51",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("1");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Button("btn_save00",null,"37","60","20","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_list",null,"37","60","20","66",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("목록");
            obj.set_tooltiptext("목록");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","60",null,null,"0","277",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_abilityTableList");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"570\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"Competences\" tooltiptext=\"Competences\" displaytype=\"normal\"/><Cell col=\"1\" text=\"Definition\" tooltiptext=\"Definition\" displaytype=\"normal\"/><Cell col=\"2\" text=\"Requirement Skill\" tooltiptext=\"Requirement Skill\" displaytype=\"normal\"/><Cell col=\"3\" text=\"Rating\" tooltiptext=\"Rating\" displaytype=\"normal\"/></Band><Band id=\"body\"><Cell text=\"bind:COMPETENCE_NAME\"/><Cell col=\"1\" text=\"bind:COMPETENCE_DESCRIPTION\" wordWrap=\"char\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:REQUIRED_LEVEL_NAME\"/><Cell col=\"3\" displaytype=\"combocontrol\" padding=\"13px 3px 13px 5px\" text=\"bind:PARTICIPANT_SCORE\" combodataset=\"ds_ratingList\" combodatacol=\"NAME\" combocodecol=\"STEP_VALUE\" edittype=\"combo\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_subTitle01_00","0","0",null,"32","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
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
            this.div_work.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","131","30",null,null,null,null,null,null,this.div_work.form.div_subTitle01_00.form);
            obj.set_taborder("0");
            obj.set_text("Competences");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Competences");
            obj.set_border("0px none");
            this.div_work.form.div_subTitle01_00.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory00","0",null,null,"157","0","78",null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_requirementList");
            obj.set_autofittype("col");
            obj.set_fillareatype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"710\"/></Columns><Rows><Row size=\"52\"/></Rows><Band id=\"body\"><Cell background=\"#f9f9fa\" text=\"bind:NAME\"/><Cell col=\"1\" background=\"#f9f9fa\" text=\"bind:KR_FOCUS\"/><Cell col=\"2\" background=\"#f9f9fa\" text=\"bind:KR_DESCRIPTION\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cbo_name","value","ds_userInfo","EMPLOYEENUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.edt_department","value","ds_userInfo","DEPARTMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.edt_grade","value","ds_userInfo","GRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.edt_employeeNumber","value","ds_userInfo","EMPLOYEENUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_search.form.edt_job","value","ds_userInfo","JOB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_search.form.edt_position","value","ds_userInfo","POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_work.form.div_subTitle00.form.txa_jobParticipantComment","value","ds_abilityTableMaster","JOB_PARTICIPANT_COMMENT1");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("APR20320M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	:
         * 업무명 		: 역량평가-파트장 평가 상세
         * 파일명 		: APR20320M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2022.2.10
         * 설  명		: 역량평가-파트장 평가 상세
         *---------------------------------------------------------------------------------------
         * 변경일		변경자			변경내역
         *---------------------------------------------------------------------------------------
         * 2022.02.10	박대호			최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /*===============================================================================
        == apr설명. (apr) 공통함수 목록
        ===============================================================================
        ● fn_initInfo                              : 초기값 세팅
        ● fn_initParam                             : 받아온정보 입력
        ● fn_cboRating                             : Rating 콤보조회
        ● fn_userInfo                              : 피평가자 개인정보 조회
        ● fn_abilityTableList                  	: 평가표 조회 조회
        ● fn_requirementList                  		: 평가표 상세
        ● fn_save                  				: 저장
        ● fn_list                  				: 목록으로 이동


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
        };
        /*******************************************************************************
         * fn_initInfo
         * 기능 : 초기값 세팅
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_initInfo = function ()
        {

        }
        /*******************************************************************************
         * fn_initParam
         * 기능 : 받아온정보 입력
         * 박대호
         * Parameter  : oArgs(부모에게 받은값)
        *******************************************************************************/
        this.fn_initParam = function(oArgs)
        {
        	this.ds_abilityUserList.copyData(oArgs.abilityUserList);
        	var mRow = oArgs.row;

        	this.ds_search.setColumn(0, "EMPLOYEE_NUMBER", this.ds_abilityUserList.getColumn(mRow, "EMPLOYEE_NUMBER"));//사원번호
         	this.ds_search.setColumn(0, "HJSPFM_APPRAISAL_MASTER_SEQ", this.ds_abilityUserList.getColumn(mRow, "HJSPFM_APPRAISAL_MASTER_SEQ"));//SEQ

        	this.fn_initInfo();
        	this.fn_cboRating();
         	this.fn_userInfo();
         	this.fn_abilityTableList();
        }
        /*******************************************************************************
         * fn_cboRating
         * 기능 : Rating 콤보조회
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_cboRating = function ()
        {
        	var sSvcID = "selectRatingList";
        	var sController = "/apr20310/selectRatingList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_ratingList=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }
        /*******************************************************************************
         * fn_userInfo
         * 기능 : 피평가자 개인정보 조회
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
         * fn_abilityTableList
         * 기능 : 평가표 조회
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_abilityTableList = function ()
        {
        	var sSvcID = "selectAbilityTableList";
        	var sController = "/apr20310/selectAbilityTableList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_abilityTableMaster=output1 ds_abilityTableList=output2";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }
        /*******************************************************************************
         * fn_requirementList
         * 기능 : 평가표 상세
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_requirementList = function (row)
        {
        	if(this.ds_abilityTableList.rowcount > 0)
        	{
        		var seq = this.ds_abilityTableList.getColumn(row, "HJSHR_COMPETENCE_INFO_M_SEQ");
        		var level = this.ds_abilityTableList.getColumn(row, "REQUIRED_LEVEL");
        		this.ds_search.setColumn(0, "HJSHR_COMPETENCE_INFO_M_SEQ", seq);
        		this.ds_search.setColumn(0, "REQUIRED_LEVEL", level);

        		var sSvcID = "selectRequirementList";
        		var sController = "/apr20310/selectRequirementList.do";
        		var sInDatasets = "INPUT=ds_search";
        		var sOutDatasets = "ds_requirementList=output";
        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        }
        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
         /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
         	this.fn_abilityTableList();
        };


        /*
        * 기능 : 검색 초기화
        */
        this.fn_searchClear = function(obj,e)
        {

        };

        /*
        * 기능 : 저장
        */
        this.fn_save = function(SvcID)
        {
        	if(this.ds_search.getColumn(0, "ASSESSMENT_STATUS") != "020") return;


        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = SvcID;
        	var sController = "/apr20310/updateAbilityTable.do";
        	var sInDatasets = "ds_abilityTableMaster=ds_abilityTableMaster:U ds_abilityTableList=ds_abilityTableList:U";
        	var sOutDatasets = "";

        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        			case "selectAppraisalUserInfo" :
        			{
        				var row = this.ds_abilityUserList.findRow("EMPLOYEE_NUMBER", this.ds_userInfo.getColumn(0, "EMPLOYEENUMBER"));
        				//평가상태코드 : 020 일경우만 입력가능
        				if(this.ds_abilityUserList.getColumn(row, "ASSESSMENT_STATUS") == "020")
        				{
        					this.div_work.form.grd_qamQcinspectorhistory.set_readonly(false);
        					this.div_work.form.div_subTitle00.form.txa_jobParticipantComment.set_readonly(false);
        				}
        				else
        				{
        					this.div_work.form.grd_qamQcinspectorhistory.set_readonly(true);
        					this.div_work.form.div_subTitle00.form.txa_jobParticipantComment.set_readonly(true);
        				}
        				this.ds_search.setColumn(0, "ASSESSMENT_STATUS", this.ds_abilityUserList.getColumn(row, "ASSESSMENT_STATUS"));
        				break;
        			}
        			case "selectAbilityTableList" :
        			{
        				this.fn_requirementList(0);
        				break;
        			}
        			case "updateAbilityTable" :
        			{
        				this.gfn_Message("SuccessSave", null, "info","ok");
        				break;
        			}
        			case "saveList" :
        			{
        				this.gfn_getMaster(this).fn_returnDetail();
        				this.gfn_detail_close(this);
        				break;
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
        /*******************************************************************************
         * fn_list
         * 기능 : 목록으로 이동
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_list = function ()
        {
        	if(this.gfn_dsIsUpdated(this.ds_abilityTableMaster) || this.gfn_dsIsUpdated(this.ds_abilityTableList))
        	{
        		//변경된 데이터가 있습니다. 계속하시겠습니까?
         		if (this.gfn_Message("IsChangedButContinue", null, "conf", "yesno"))
        		{
        			this.fn_save("saveList");
        			return;
        		}
        	}
        	this.gfn_getMaster(this).fn_returnDetail();
        	this.gfn_detail_close(this);
        };


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         *	기능 : 콤보 변경 이벤트
         */
        this.div_search_cbo_name_onitemchanged = function(obj,e)
        {
        	var row = this.ds_abilityUserList.findRow("EMPLOYEE_NUMBER", e.postvalue);

        	this.ds_search.setColumn(0, "EMPLOYEE_NUMBER", this.ds_abilityUserList.getColumn(row, "EMPLOYEE_NUMBER"));//사원번호
        	this.ds_search.setColumn(0, "HJSPFM_APPRAISAL_MASTER_SEQ", this.ds_abilityUserList.getColumn(row, "HJSPFM_APPRAISAL_MASTER_SEQ"));//SEQ

         	this.fn_userInfo();
         	this.fn_abilityTableList();
        };



        /*
         *	기능 : 저장 버튼 이벤트
         */
        this.div_work_btn_save_onclick = function(obj,e)
        {
        	this.fn_save("updateAbilityTable");
        };

        /*
         *	기능 : 점수변경 이벤트
         */
        this.div_work_grd_qamQcinspectorhistory_oncloseup = function(obj,e)
        {
        	var row = this.ds_ratingList.findRow("STEP_VALUE", e.value);//해당점수의 콤보내의 row조회
        	var partcipantRating = this.ds_ratingList.getColumn(row, "RATING_LEVEL_ID");//해당점수의 Rating조회
        	this.ds_abilityTableList.setColumn(e.row, "PARTICIPANT_RATING", partcipantRating);//선택한 row에 Rating입력
        };
        /*
         *	기능 : 평가표 그리드 클릭
         */
        this.div_work_grd_qamQcinspectorhistory_oncellclick = function(obj,e)
        {
        	if(this.ds_abilityTableList.rowcount > 0)
        	{
        		this.fn_requirementList(e.row);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.Static00.addEventHandler("onclick",this.div_search_Static00_onclick,this);
            this.div_search.form.cbo_name.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_search.form.cbo_name.addEventHandler("onitemchanged",this.div_search_cbo_name_onitemchanged,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.div_subTitle01.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_subTitle00.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.btn_save00.addEventHandler("onclick",this.div_work_btn_save_onclick,this);
            this.div_work.form.btn_list.addEventHandler("onclick",this.fn_list,this);
            this.div_work.form.grd_qamQcinspectorhistory.addEventHandler("oncloseup",this.div_work_grd_qamQcinspectorhistory_oncloseup,this);
            this.div_work.form.grd_qamQcinspectorhistory.addEventHandler("oncellclick",this.div_work_grd_qamQcinspectorhistory_oncellclick,this);
            this.div_work.form.div_subTitle01_00.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
        };
        this.loadIncludeScript("APR20320M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
