(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("APR10120M");
            this.set_titletext("업적평가-목표설정");
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
            obj._setContents("<ColumnInfo><Column id=\"HJSPFM_PER_OBJECT_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_APPRAISAL_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENT_JOB_DETAILS\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_evaluationDetail", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"EVALUATION_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_PER_OBJECT_DETAIL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"KPI_ID\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECTIVES\" type=\"STRING\" size=\"256\"/><Column id=\"KPI_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECTIVE_DETAILS\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_STATUS_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WEIGHT\" type=\"INT\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_PER_OBJECT_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_subTitle","0","36",null,"63","10",null,null,null,null,null,this);
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

            obj = new Div("div_subTitle00","0","104",null,"63","10",null,null,null,null,null,this);
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
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","125","61",null,null,null,null,null,null,this.div_subTitle00.form);
            obj.set_taborder("0");
            obj.set_text("<fc v=\'red\'>*</fc>Current Job\r\nDetails");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Current Job Details");
            obj.set_usedecorate("true");
            obj.set_border("0px none");
            this.div_subTitle00.addChild(obj.name, obj);

            obj = new TextArea("txa_currentJobDetails","129","5","773","51",null,null,null,null,null,null,this.div_subTitle00.form);
            obj.set_taborder("1");
            this.div_subTitle00.addChild(obj.name, obj);

            obj = new Div("div_subTitle01","0","172",null,"32","10",null,null,null,null,null,this);
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
            this.addChild(obj.name, obj);

            obj = new Static("Static30","0","0","125","30",null,null,null,null,null,null,this.div_subTitle01.form);
            obj.set_taborder("0");
            obj.set_text("Objectives");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Objectives");
            obj.set_border("0px none");
            this.div_subTitle01.addChild(obj.name, obj);

            obj = new Div("div_work","0","205",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_evaluationDetail","0","27",null,null,"0","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_evaluationDetail");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"240\"/><Column size=\"240\"/><Column size=\"50\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"70\"/><Row size=\"26\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;Type\" tooltiptext=\"Type\" displaytype=\"decoratetext\"/><Cell col=\"2\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;Objectives\" tooltiptext=\"Objectives\" displaytype=\"decoratetext\"/><Cell col=\"3\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;KPIs\" tooltiptext=\"KPIs\" displaytype=\"decoratetext\"/><Cell col=\"4\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;Detail Responsibilities\" tooltiptext=\"Detail Responsibilities\" displaytype=\"decoratetext\"/><Cell col=\"5\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;Target/Planned Completion&#13;&#10;(Date)\" tooltiptext=\"Target/Planned Completion (Date)\" displaytype=\"decoratetext\"/><Cell col=\"6\" text=\"&lt;fc v=&apos;red&apos;&gt;*&lt;/fc&gt;Weight&#13;&#10;(%)\" tooltiptext=\"Weight(%)\" displaytype=\"decoratetext\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"expr:ASSESSMENT_STATUS != &apos;020&apos; ? &apos;none&apos; : &apos;checkbox&apos;\" text=\"bind:CHK\"/><Cell col=\"1\" textAlign=\"left\" displaytype=\"combocontrol\" edittype=\"expr:ASSESSMENT_STATUS != &apos;020&apos; ? &apos;none&apos; : &apos;combo&apos;\" combocodecol=\"C,EvaluationType,,Y,Y\" text=\"bind:EVALUATION_TYPE\" padding=\"25px 5px 25px 3px\"/><Cell col=\"2\" text=\"bind:OBJECTIVES\" textAlign=\"left\" displaytype=\"editcontrol\" expandshow=\"show\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandsize=\"24\" edittype=\"expr:ASSESSMENT_STATUS != &apos;020&apos; ? &apos;none&apos; : EVALUATION_TYPE ==&apos;10&apos; ? &apos;none&apos; : &apos;normal&apos;\" padding=\"25px 5px 25px 3px\"/><Cell col=\"3\" text=\"bind:KPI_NAME\" textAlign=\"left\" edittype=\"expr:ASSESSMENT_STATUS != &apos;020&apos; ? &apos;none&apos; : EVALUATION_TYPE ==&apos;10&apos; ? &apos;none&apos; : &apos;normal&apos;\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:OBJECTIVE_DETAILS\" textAlign=\"left\" displaytype=\"textareacontrol\" edittype=\"expr:ASSESSMENT_STATUS != &apos;020&apos; ? &apos;readonly&apos; : &apos;textarea&apos;\" textareaacceptsenter=\"true\"/><Cell col=\"5\" text=\"bind:TARGET_STATUS_DATE\" textAlign=\"left\" displaytype=\"textareacontrol\" textareaacceptsenter=\"true\" edittype=\"expr:ASSESSMENT_STATUS != &apos;020&apos; ? &apos;readonly&apos; : &apos;textarea&apos;\"/><Cell col=\"6\" text=\"bind:WEIGHT\" textAlign=\"right\" displaytype=\"normal\" edittype=\"expr:ASSESSMENT_STATUS != &apos;020&apos; ? &apos;none&apos; : &apos;text&apos;\" editinputtype=\"digit\"/></Band><Band id=\"summary\"><Cell textAlign=\"right\"/><Cell col=\"1\" colspan=\"5\" text=\"Sums\" tooltiptext=\"Sums\" textAlign=\"center\"/><Cell col=\"6\" expr=\"dataset.getSum(&quot;WEIGHT&quot;) \" displaytype=\"number\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"4","60","20","66",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("행삭제");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"4","60","20","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_tooltiptext("저장");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"4","60","20","132",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("행추가");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("행추가");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_list",null,"4","60","20","198",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("목록");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("목록");
            this.div_work.addChild(obj.name, obj);
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

            obj = new BindItem("item6","div_subTitle00.form.txa_currentJobDetails","value","ds_evaluationHeader","CURRENT_JOB_DETAILS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("APR10120M.xfdl", function() {
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
        ● fn_initParam                             : 받은 로그인 피평가자 개인정보 Param 입력
        ● fn_evaluationListDetail                  : 업적평가 피평가자 상세 조회
        ● fn_save                  				: 저장
        ● fn_saveValidate                  		: 저장전 validate체크
        ● fn_add                  					: 행추가
        ● fn_del                  					: 행삭제
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
        	this.ds_search.setColumn(0, "EMPLOYEE_NUMBER", this.gf_getUserId());
        }
        /*******************************************************************************
         * fn_initParam
         * 기능 : 받은 로그인 피평가자 개인정보 Param 입력
         * 박대호
         * Parameter  : oArgs(부모에게 받은값)
        *******************************************************************************/
        this.fn_initParam = function(oArgs)
        {
        	var sArgArr = oArgs.objList;
        	this.ds_userInfo.setColumn(0,"PERSONID", sArgArr[0]);
        	this.ds_userInfo.setColumn(0,"NAME", sArgArr[1]);//이름
        	this.ds_userInfo.setColumn(0,"DEPARTMENT", sArgArr[2]);//부서
        	this.ds_userInfo.setColumn(0,"GRADE", sArgArr[3]);//직급
        	this.ds_userInfo.setColumn(0,"EMPLOYEENUMBER", sArgArr[4]);//사번
        	this.ds_userInfo.setColumn(0,"JOB", sArgArr[5]);//업무
        	this.ds_userInfo.setColumn(0,"POSITION", sArgArr[6]);//position
        	this.ds_search.setColumn(0, "HJSPFM_APPRAISAL_MASTER_SEQ", sArgArr[7]);//SEQ
        	this.ds_search.setColumn(0, "APPRAISAL_YEAR", sArgArr[8]);//평가년도
        	this.ds_search.setColumn(0, "APPRAISAL_SEQUENCE", sArgArr[9]);//평가차수
        	this.ds_search.setColumn(0, "ORGANIZATION_ID", sArgArr[10]);//부서ID
        	this.ds_search.setColumn(0, "ASSESSMENT_STATUS", sArgArr[11]);//상태

        	this.fn_initInfo();
         	this.fn_evaluationListDetail();
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
        /*******************************************************************************
         * fn_save
         * 기능 : 저장
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_save = function (svcId)
        {
        	if(this.ds_search.getColumn(0, "ASSESSMENT_STATUS") == "020")
        	{
        		if(this.fn_saveValidate() == false) return;

        		//if (!this.gfn_GridKeyCheck(this.div_work.form.grd_evaluationDetail, ["OBJECTIVES", "KPI_NAME", "OBJECTIVE_DETAILS", "TARGET_STATUS_DATE", "WEIGHT"])) return;
        		//공통함수를 사용하면 head의 태그가 들어가서 따로 체크
        		var arrColId = ["OBJECTIVES", "KPI_NAME", "OBJECTIVE_DETAILS", "TARGET_STATUS_DATE", "WEIGHT"];
        		var arrColNm = ["Objectives", "KPIs", "Detail Responsibilities", "Target/Planned Completion&#13;&#10;(Date)", "Weight(%)"];
        		for(var i = 0; i < this.ds_evaluationDetail.rowcount; i++)
        		{
        			if (this.ds_evaluationDetail.getRowType(i) == 2 || this.ds_evaluationDetail.getRowType(i) == 4)
        			{
        				for(var j = 0; j < arrColId.length; j++)
        				{
        					if(this.gfn_isNull(this.ds_evaluationDetail.getColumn(i, arrColId[j])))
        					{
        						this.gfn_Message("InputSomeThing",arrColNm[j] , "warning","ok");
        						this.ds_evaluationDetail.set_rowposition(i);
        						this.div_work.form.grd_evaluationDetail.setFocus();
        						this.div_work.form.grd_evaluationDetail.setCellPos(i + 3);
        						this.div_work.form.grd_evaluationDetail.showEditor(true);
        						return;
        					}
        				}
        			}
        		}


        		// -------------------------
        		// 저장
        		// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        		// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        		// -------------------------
        	 	var sSvcID = svcId;
        	 	var sController = "/apr10110/saveEvaluationList.do";
        	 	var sInDatasets = "ds_evaluationHeader=ds_evaluationHeader:A ds_evaluationDetail=ds_evaluationDetail:U";
        	 	var sOutDatasets = "";

        	 	var sArgs = "";
        	 	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        };

        /*******************************************************************************
         * fn_saveValidate
         * 기능 : 저장전 validate체크
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_saveValidate = function ()
        {
        	var component = this.div_subTitle00;
        	var strColIdList = "txa_currentJobDetails";
        	var strColNmList = "Current Job Details";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	return rtn;
        };
        /*******************************************************************************
         * fn_add
         * 기능 : 행추가
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_add = function ()
        {
        	if(this.ds_search.getColumn(0, "ASSESSMENT_STATUS") == "020")
        	{
        		var row = this.ds_evaluationDetail.insertRow(0);
        		this.ds_evaluationDetail.setColumn(row, "CHK", "");
        		this.ds_evaluationDetail.setColumn(row, "EVALUATION_TYPE", "10");
        		this.ds_evaluationDetail.setColumn(row, "ASSESSMENT_STATUS", this.ds_search.getColumn(0, "ASSESSMENT_STATUS"));
        		this.ds_evaluationDetail.setColumn(row, "HJSPFM_PER_OBJECT_MASTER_SEQ", this.ds_evaluationHeader.getColumn(0, "HJSPFM_PER_OBJECT_MASTER_SEQ"));
        		this.ds_evaluationDetail.setColumn(row, "OBJECT_VERSION_NUMBER", 1);
        	}

        };
        /*******************************************************************************
         * fn_del
         * 기능 : 행삭제
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_del = function ()
        {
        	if(this.ds_search.getColumn(0, "ASSESSMENT_STATUS") == "020")
        	{
        		//선택한 내역에 대해 삭제 작업을 수행할 예정입니다. 계속 진행하시겠습니까?
        		var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        		if (bOK == false) return;

        		var chk = false;
        		for(var i=this.ds_evaluationDetail.rowcount - 1; i>=0; i--)
        		{
        			if(this.ds_evaluationDetail.getColumn(i,"CHK")=="1")
        			{
        				this.ds_evaluationDetail.deleteRow(i);
        				chk = true;
        			}
        		}

        		if (!chk)
        		{
        			this.gfn_Message("CHECKREMOVETOOLDATA", "", "error", "ok");
        			return;
        		};

         		this.fn_save("deleteAprDetail");
        	}
        };
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
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
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
        			case "selectEvaluationListDetail" :
        			{
        				if(this.ds_evaluationHeader.rowcount < 1)
        				{
        					this.ds_evaluationHeader.addRow();
        					this.ds_evaluationHeader.setColumn(0, "HJSPFM_APPRAISAL_MASTER_SEQ", this.ds_search.getColumn(0, "HJSPFM_APPRAISAL_MASTER_SEQ"));
        					this.ds_evaluationHeader.setColumn(0, "APPRAISAL_STATUS", "020");
        					this.ds_evaluationHeader.setColumn(0, "CURRENT_JOB_DETAILS", "");
        					this.ds_evaluationHeader.setColumn(0, "OBJECT_VERSION_NUMBER", 1);
        					this.fn_add();
        				}
        				if(this.ds_evaluationDetail.rowcount < 1)
        				{
        					this.fn_add();
        				}
        				if(this.ds_search.getColumn(0, "ASSESSMENT_STATUS") != "020")
        				{
        					this.div_subTitle00.form.txa_currentJobDetails.set_enable(false);
        					this.div_work.form.grd_evaluationDetail.set_readonly(false);
        					this.div_work.form.grd_evaluationDetail.clearSelect();
        				}
        				break;
        			}
        			case "saveEvaluationList" :
        			{
        				//this.gfn_Message("SuccessSave2",nexacro.getApplication().gds_menu.lookup("PGM_ID",this.name,"MENU_NM"), "info","ok");
        				this.gfn_Message("SuccessSave", null, "info","ok");
        				break;
        			}
        			case "deleteAprDetail" :
        			{
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
        /*
         *	기능 : 팝업 관련
         */
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "POPUP_KPI")
        	{
        		//MEANING|STRATEGIC_OBJECTIVES|KPI|TARGET|KPI_ID|WEIGHT|OBJECT_VERSION_NUMBER
        		var row = this.ds_evaluationDetail.rowposition;
        		for (let i = 0; i < rtn.length; i++)
        		{
        			if(i != 0)
        			{
        				this.fn_add();
        				row = 0;
        			}
        			this.ds_evaluationDetail.setColumn(row, "OBJECTIVES", rtn[i][1]);
        			this.ds_evaluationDetail.setColumn(row, "KPI_NAME", rtn[i][2]);
        			this.ds_evaluationDetail.setColumn(row, "KPI_ID", rtn[i][4]);
        			this.ds_evaluationDetail.setColumn(row, "TARGET_STATUS_DATE", rtn[i][3]);
        			this.ds_evaluationDetail.setColumn(row, "WEIGHT", rtn[i][5]);
        		}


        		//this.ds_evaluationDetail.setColumn(row, "OBJECT_VERSION_NUMBER", rtn[6]);

        	}
        };
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/



        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        /*
         *	그리드 Objectives 조회
         */
        this.div_work_grd_evaluationDetail_onexpandup = function(obj,e)
        {

        	if(e.row < 0 || this.ds_evaluationDetail.getColumn(this.ds_evaluationDetail.rowposition, "EVALUATION_TYPE") != "10"
        		|| this.ds_search.getColumn(0, "ASSESSMENT_STATUS") != "020") return;
        	var oArg = {};

        	var appraisalYear = this.ds_search.getColumn(0, "APPRAISAL_YEAR");//평가년도
        	var appraisalSequence = this.ds_search.getColumn(0, "APPRAISAL_SEQUENCE");//평가차수
        	var organizationId = this.ds_search.getColumn(0, "ORGANIZATION_ID");//부서ID
        	oArg.arg_type        = "CA";
        	oArg.arg_popupCd     = "P00321";
        	oArg.arg_popupNm     = "Organization Performance Indicator List";
        	oArg.arg_rtnCols     = "MEANING|STRATEGIC_OBJECTIVES|KPI|TARGET|KPI_ID|WEIGHT|OBJECT_VERSION_NUMBER";
        	oArg.arg_paramCols   = "APPRAISAL_YEAR|APPRAISAL_SEQUENCE|ORGANIZATION_ID";
        	oArg.arg_paramValues = appraisalYear + "|" + appraisalSequence + "|" + organizationId;
        	oArg.arg_searchStr   = "1=1";
        	this.gfn_openPopup( "POPUP_KPI", "cmd::CMSA00100P.xfdl", oArg, "width=970,height=800");
        };

        /*
         *	그리드 변경 이벤트
         */
        this.ds_evaluationDetail_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "EVALUATION_TYPE" && this.ds_evaluationDetail.getColumn(e.row,"EVALUATION_TYPE") == "10")//조직으로 변경 시 개인에서 입력했던 값 초기화
        	{
        		this.ds_evaluationDetail.setColumn(e.row, "OBJECTIVES", "");
        		this.ds_evaluationDetail.setColumn(e.row, "KPI_ID", "");
        		this.ds_evaluationDetail.setColumn(e.row, "KPI_NAME", "");
        	}
        };
        /*
         *	저장 버튼 이벤트
         */
        this.div_work_btn_save_onclick = function(obj,e)
        {
        	this.fn_save("saveEvaluationList");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_subTitle.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_subTitle.form.edt_name.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_subTitle.form.Static30_00.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_subTitle.form.Static30_01.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_subTitle.form.edt_employeeNumber.addEventHandler("onchanged",this.div_subTitle_edt_insepctionclassname_onchanged,this);
            this.div_subTitle.form.Static30_00_01.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_subTitle.form.Static30_00_00_00.addEventHandler("onclick",this.div_subTitle_Static30_00_00_00_onclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_subTitle00.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_subTitle01.form.Static30.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_work.form.grd_evaluationDetail.addEventHandler("onexpandup",this.div_work_grd_evaluationDetail_onexpandup,this);
            this.div_work.form.btn_del.addEventHandler("onclick",this.fn_del,this);
            this.div_work.form.btn_save.addEventHandler("onclick",this.div_work_btn_save_onclick,this);
            this.div_work.form.btn_add.addEventHandler("onclick",this.fn_add,this);
            this.div_work.form.btn_list.addEventHandler("onclick",this.fn_list,this);
            this.ds_evaluationDetail.addEventHandler("oncolumnchanged",this.ds_evaluationDetail_oncolumnchanged,this);
        };
        this.loadIncludeScript("APR10120M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
