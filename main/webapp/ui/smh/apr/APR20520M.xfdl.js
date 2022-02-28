(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("APR20520M");
            this.set_titletext("업적평가-목표리뷰(1st Appraiser)");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"EMPLOYEE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_APPRAISAL_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGANIZATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_userInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PERSONID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEENUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_evaluationHeader", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"HJSPFM_PER_OBJECT_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_APPRAISAL_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENT_JOB_DETAILS\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"PARTICIPANT_ACHITED_COMMENT1\" type=\"STRING\" size=\"256\"/><Column id=\"CORRECTION_CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_1ST_OBJECT_CONTENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_evaluationDetail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EVALUATION_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_PER_OBJECT_DETAIL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"KPI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECTIVES\" type=\"STRING\" size=\"256\"/><Column id=\"KPI_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECTIVE_DETAILS\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_STATUS_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"INT\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_PER_OBJECT_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_targetReviewList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISER_1ST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISER_2ND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ORGANIZATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PARTICIPANT_ID_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Div("div_work","0","104",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_evaluationDetail","0","132",null,null,"0","208",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_evaluationDetail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"240\"/><Column size=\"240\"/><Column size=\"50\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"70\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"Type\" tooltiptext=\"Type\" displaytype=\"decoratetext\"/><Cell col=\"2\" text=\"Objectives\" tooltiptext=\"Objectives\" displaytype=\"decoratetext\"/><Cell col=\"3\" text=\"KPIs\" tooltiptext=\"KPIs\" displaytype=\"decoratetext\"/><Cell col=\"4\" text=\"Detail Responsibilities\" tooltiptext=\"Detail Responsibilities\" displaytype=\"decoratetext\"/><Cell col=\"5\" text=\"Target/Planned Completion&#13;&#10;(Date)\" tooltiptext=\"Target/Planned Completion (Date)\" displaytype=\"decoratetext\"/><Cell col=\"6\" text=\"Weight&#13;&#10;(%)\" tooltiptext=\"Weight (%)\" displaytype=\"decoratetext\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" displaytype=\"combotext\" combocodecol=\"C,EvaluationType,,Y,N\" text=\"bind:EVALUATION_TYPE\"/><Cell col=\"2\" text=\"bind:OBJECTIVES\"/><Cell col=\"3\" text=\"bind:KPI_NAME\"/><Cell col=\"4\" text=\"bind:OBJECTIVE_DETAILS\" displaytype=\"text\" edittype=\"readonly\"/><Cell col=\"5\" text=\"bind:TARGET_STATUS_DATE\" displaytype=\"text\" edittype=\"readonly\"/><Cell col=\"6\" text=\"bind:WEIGHT\"/></Band><Band id=\"summary\"><Cell textAlign=\"right\"/><Cell col=\"1\" colspan=\"5\" text=\"Sums\" tooltiptext=\"Sums\" textAlign=\"center\"/><Cell col=\"6\" displaytype=\"number\" expr=\"dataset.getSum(&quot;WEIGHT&quot;) \"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_subTitle01","0",null,null,"32","0","171",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
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

            obj = new Static("Static30","0","0","164","30",null,null,null,null,null,null,this.div_work.form.div_subTitle01.form);
            obj.set_taborder("0");
            obj.set_text("Objectives Set Opinion");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Objectives Set Opinion");
            obj.set_border("0px none");
            this.div_work.form.div_subTitle01.addChild(obj.name, obj);

            obj = new Div("div_subTitle00","0",null,null,"156","0","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
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

            obj = new Static("Static30","0","62","125","92",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("0");
            obj.set_text("1st Appraiser\r\nOpinion");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("1st Appraiser Opinion");
            obj.set_usedecorate("true");
            obj.set_border("0px none");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Static("Static30_00","0","2","125","59",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("1");
            obj.set_text("Part Appraiser\r\nOpinion");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Part Appraiser Opinion");
            obj.set_usedecorate("true");
            obj.set_border("0px none");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new TextArea("txa_partComment","129","5","773","51",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new TextArea("txa_1stComment","129","67","773","51",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("3");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new CheckBox("ckb_required","131","129","188","20",null,null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("4");
            obj.set_text("Objectives Revision Required");
            obj.set_tooltiptext("Objectives Revision Required");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Static("sta_00","0","61",null,"2","0",null,null,null,null,null,this.div_work.form.div_subTitle00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_detail_line");
            this.div_work.form.div_subTitle00.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"109","60","20","66",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_list",null,"109","60","20","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("목록");
            obj.set_tooltiptext("목록");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_organizationPerformance",null,"109","170","20","132",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_text("Organization Performance");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("Organization Performance");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_subTitle01_00","0","72",null,"32","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("6");
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

            obj = new Static("Static30","0","0","125","30",null,null,null,null,null,null,this.div_work.form.div_subTitle01_00.form);
            obj.set_taborder("0");
            obj.set_text("Objectives");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Objectives");
            obj.set_border("0px none");
            this.div_work.form.div_subTitle01_00.addChild(obj.name, obj);

            obj = new Div("div_subTitle00_00","0","4",null,"63","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("7");
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

            obj = new Static("Static30","0","0","125","61",null,null,null,null,null,null,this.div_work.form.div_subTitle00_00.form);
            obj.set_taborder("0");
            obj.set_text("Current Job\r\nDetails");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Current Job Details");
            obj.set_usedecorate("true");
            obj.set_border("0px none");
            this.div_work.form.div_subTitle00_00.addChild(obj.name, obj);

            obj = new TextArea("txa_00","129","5","773","51",null,null,null,null,null,null,this.div_work.form.div_subTitle00_00.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            this.div_work.form.div_subTitle00_00.addChild(obj.name, obj);

            obj = new Button("btn_search00",null,"8","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0.00%","36",null,"67","10",null,null,null,null,null,this);
            obj.set_taborder("5");
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

            obj = new Combo("cbo_messageclassid","131","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("EMPLOYEE_NUMBER");
            obj.set_font("9pt \"Dotum\"");
            obj.set_innerdataset("ds_targetReviewList");
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
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.cbo_messageclassid","value","ds_userInfo","EMPLOYEENUMBER");
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

            obj = new BindItem("item6","div_work.form.div_subTitle00_00.form.txa_00","value","ds_evaluationHeader","CURRENT_JOB_DETAILS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_work.form.div_subTitle00.form.txa_partComment","value","ds_evaluationHeader","PARTICIPANT_ACHITED_COMMENT1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_work.form.div_subTitle00.form.txa_1stComment","value","ds_evaluationHeader","APPRAISAL_1ST_OBJECT_CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("APR20520M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	:
         * 업무명 		: 업적평가-목표리뷰(1st Appraiser)
         * 파일명 		: APR20520M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2022.1.25
         * 설  명		: 업적평가-목표리뷰(1st Appraiser)
         *---------------------------------------------------------------------------------------
         * 변경일		변경자			변경내역
         *---------------------------------------------------------------------------------------
         * 2022.01.25	박대호			최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /*===============================================================================
        == apr설명. (apr) 공통함수 목록
        ===============================================================================
        ● fn_initInfo                              : 초기값 세팅
        ● fn_initParam                             : 받아온정보 입력
        ● fn_userInfo                              : 피평가자 개인정보 조회
        ● fn_evaluationListDetail                  : 업적평가 피평가자 상세 조회
        ● fn_save                  				: 저장
        ● fn_saveValidate                  		: 저장전 validate체크
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
        	this.ds_targetReviewList.copyData(oArgs.targetReviewList);
        	var mRow = oArgs.row;

         	this.ds_search.setColumn(0, "HJSPFM_APPRAISAL_MASTER_SEQ", this.ds_targetReviewList.getColumn(mRow, "MASTER_SEQ"));//SEQ
         	this.ds_search.setColumn(0, "APPRAISAL_YEAR", this.ds_targetReviewList.getColumn(mRow, "APPRAISAL_YEAR"));//평가년도
         	this.ds_search.setColumn(0, "APPRAISAL_SEQUENCE", this.ds_targetReviewList.getColumn(mRow, "APPRAISAL_SEQUENCE"));//평가차수
         	this.ds_search.setColumn(0, "ORGANIZATION_ID", this.ds_targetReviewList.getColumn(mRow, "ORGANIZATION_ID"));//부서ID
         	this.ds_search.setColumn(0, "ASSESSMENT_STATUS", this.ds_targetReviewList.getColumn(mRow, "ASSESSMENT_STATUS"));//상태
         	this.ds_search.setColumn(0, "EMPLOYEE_NUMBER", this.ds_targetReviewList.getColumn(mRow, "EMPLOYEE_NUMBER"));//사원번호

        	this.fn_initInfo();
         	this.fn_userInfo();
        	this.fn_evaluationListDetail();
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
         * fn_evaluationListDetail
         * 기능 : 업적평가 피평가자 상세 조회
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_evaluationListDetail = function ()
        {
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

        /*
        * 기능 : 저장
        */
        this.fn_save = function(SvcID)
        {
        	var row = this.ds_targetReviewList.findRow("EMPLOYEE_NUMBER", this.ds_search.getColumn(0, "EMPLOYEE_NUMBER"));
        	//파트장이 없음
        	if(this.nfn_isNull(this.ds_targetReviewList.getColumn(row, "PARTICIPANT_ID_1")))
        	{
        		if(this.ds_search.getColumn(0, "ASSESSMENT_STATUS") != "030") return;
        	}
        	else
        	{
        		if(this.ds_search.getColumn(0, "ASSESSMENT_STATUS") != "040") return;
        	}



        	if(this.div_work.form.div_subTitle00.form.ckb_required.value == true)
        	{
        		this.ds_evaluationHeader.setColumn(0, "APPRAISAL_STATUS", "020");
        		this.ds_evaluationHeader.setColumn(0, "CORRECTION_CHECK", "Y");
        		this.ds_evaluationHeader.setColumn(0, "ASSESSMENT_STATUS", "020");
        	}
        	else
        	{
        		if(this.nfn_isNull(this.ds_targetReviewList.getColumn(row, "PARTICIPANT_ID_1")))
        		{
        			this.ds_evaluationHeader.setColumn(0, "APPRAISAL_STATUS", "030");
        			this.ds_evaluationHeader.setColumn(0, "ASSESSMENT_STATUS", "030");
        		}
        		else
        		{
        			this.ds_evaluationHeader.setColumn(0, "APPRAISAL_STATUS", "040");
        			this.ds_evaluationHeader.setColumn(0, "ASSESSMENT_STATUS", "040");
        		}
        		this.ds_evaluationHeader.setColumn(0, "CORRECTION_CHECK", "N");
        	}
        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = SvcID;
        	var sController = "/apr20510/updateApr1stComment.do";
        	var sInDatasets = "ds_evaluationHeader=ds_evaluationHeader:U";
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
        			case "selectEvaluationListDetail" :
        			{
        				this.div_work.form.grd_evaluationDetail.clearSelect();
        				break;
        			}
        			case "updateApr1stComment" :
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
        	if(this.gfn_dsIsUpdated(this.ds_evaluationDetail) || this.gfn_dsIsUpdated(this.ds_evaluationHeader))
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
        this.div_search_cbo_messageclassid_onitemchanged = function(obj,e)
        {
        	var row = this.ds_targetReviewList.findRow("EMPLOYEE_NUMBER", e.postvalue);
        	this.ds_search.setColumn(0, "HJSPFM_APPRAISAL_MASTER_SEQ", this.ds_targetReviewList.getColumn(row, "MASTER_SEQ"));//SEQ
         	this.ds_search.setColumn(0, "APPRAISAL_YEAR", this.ds_targetReviewList.getColumn(row, "APPRAISAL_YEAR"));//평가년도
         	this.ds_search.setColumn(0, "APPRAISAL_SEQUENCE", this.ds_targetReviewList.getColumn(row, "APPRAISAL_SEQUENCE"));//평가차수
         	this.ds_search.setColumn(0, "ORGANIZATION_ID", this.ds_targetReviewList.getColumn(row, "ORGANIZATION_ID"));//부서ID
         	this.ds_search.setColumn(0, "ASSESSMENT_STATUS", this.ds_targetReviewList.getColumn(row, "ASSESSMENT_STATUS"));//상태
         	this.ds_search.setColumn(0, "EMPLOYEE_NUMBER", this.ds_targetReviewList.getColumn(row, "EMPLOYEE_NUMBER"));//사원번호

         	this.fn_userInfo();
        	this.fn_evaluationListDetail();
        };

        /*
         *	기능 : Organization Performance 버튼 이벤트
         */
        this.fn_popupSearch = function(obj,e)
        {
        	var oArg = {};

        	var appraisalYear = this.ds_search.getColumn(0, "APPRAISAL_YEAR");//평가년도
        	var appraisalSequence = this.ds_search.getColumn(0, "APPRAISAL_SEQUENCE");//평가차수
        	var organizationId = this.ds_search.getColumn(0, "ORGANIZATION_ID");//부서ID

        	oArg.arg_type        = "AA";
        	oArg.arg_popupCd     = "P00321";
        	oArg.arg_popupNm     = "Organization Performance Indicator List";
        	oArg.arg_rtnCols     = "MEANING";
        	oArg.arg_paramCols   = "APPRAISAL_YEAR|APPRAISAL_SEQUENCE|ORGANIZATION_ID";
        	oArg.arg_paramValues = appraisalYear + "|" + appraisalSequence + "|" + organizationId;
        	oArg.arg_searchStr   = "1=1";
        	this.gfn_openPopup( "POPUP_KPI", "cmd::CMSA00130P.xfdl", oArg, "width=970,height=800");
        };
        /*
         *	기능 : 저장버튼 이벤트
         */
        this.div_work_btn_save_onclick = function(obj,e)
        {
        	this.fn_save("updateApr1stComment");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.div_subTitle01.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_subTitle00.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_subTitle00.form.Static30_00.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.btn_save.addEventHandler("onclick",this.div_work_btn_save_onclick,this);
            this.div_work.form.btn_list.addEventHandler("onclick",this.fn_list,this);
            this.div_work.form.btn_organizationPerformance.addEventHandler("onclick",this.fn_popupSearch,this);
            this.div_work.form.div_subTitle01_00.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.div_subTitle00_00.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.btn_search00.addEventHandler("onclick",this.fn_search,this);
            this.div_search.form.Static00.addEventHandler("onclick",this.div_search_Static00_onclick,this);
            this.div_search.form.cbo_messageclassid.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_search.form.cbo_messageclassid.addEventHandler("onitemchanged",this.div_search_cbo_messageclassid_onitemchanged,this);
            this.ds_evaluationDetail.addEventHandler("oncolumnchanged",this.ds_evaluationDetail_oncolumnchanged,this);
        };
        this.loadIncludeScript("APR20520M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
