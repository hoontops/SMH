(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("APR20510M");
            this.set_titletext("업적평가-목표리뷰(1st Appraiser)");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"APPRAISER_1ST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_APPRAISAL_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ORGANIZATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISEE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_targetReviewList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISER_1ST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISER_2ND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ORGANIZATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"PARTICIPANT_ID_1\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_PER_OBJECT_MASTER_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_department", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ORGANIZATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_KR_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_appraiseeName", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"APPRAISEE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISEE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_appraisalPeriod", this);
            obj._setContents("<ColumnInfo><Column id=\"APPRAISAL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_APPRAISAL_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_PER_OBJECT_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PARTICIPANT_ID_1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_appraisalPeriodResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECK_RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_submit", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSPFM_APPRAISAL_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_PER_OBJECT_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CORRECTION_CHECK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0.00%","175",null,"67","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_search");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","21","10","90","20",null,null,null,null,null,null,this.div_search.form);
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
            obj.set_codecolumn("C,HJS_HR_APPRAISAL_YEAR_LOV,SEL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","265","10","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Appraisal Status");
            obj.set_tooltiptext("Appraisal Status");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_appraisalStatus","375","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_codecolumn("C,APPRAISAL_ASSESSMENT_STATUS,SEL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_01","21","35","90","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Department");
            obj.set_tooltiptext("Department");
            obj.set_usedecorate("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_department","121","35","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_codecolumn("ORGANIZATION_ID");
            obj.set_font("9pt \"Dotum\"");
            obj.set_innerdataset("ds_department");
            obj.set_datacolumn("ORG_KR_NAME");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","265","35","100","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Appraisee Name");
            obj.set_tooltiptext("Appraisee Name");
            obj.set_usedecorate("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_appraiseeName","375","35","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_codecolumn("APPRAISEE_ID");
            obj.set_font("9pt \"Dotum\"");
            obj.set_innerdataset("ds_appraiseeName");
            obj.set_datacolumn("APPRAISEE_NAME");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"152","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"152","60","20","76",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","0","243",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_targetReviewList","0","27",null,null,"0","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_targetReviewList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"Appraisal Period\" tooltiptext=\"Appraisal Period\"/><Cell col=\"2\" text=\"Department\" tooltiptext=\"Department\"/><Cell col=\"3\" text=\"Grade\" tooltiptext=\"Grade\"/><Cell col=\"4\" text=\"Job\" tooltiptext=\"Job\"/><Cell col=\"5\" text=\"Name\" tooltiptext=\"Name\"/><Cell col=\"6\" text=\"Status\" tooltiptext=\"Status\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:APPRAISAL_PERIOD\"/><Cell col=\"2\" text=\"bind:ORG_NAME\"/><Cell col=\"3\" text=\"bind:GRADE_NAME\"/><Cell col=\"4\" text=\"bind:JOB_NAME\"/><Cell col=\"5\" text=\"bind:APPRAISEE_NAME\"/><Cell col=\"6\" text=\"bind:ASSESSMENT_STATUS_DESC\" displaytype=\"normal\" combocodecol=\"C,APPRAISAL_ASSESSMENT_STATUS,,Y,N\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"4","60","20","1",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("제출");
            obj.set_tooltiptext("제출");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_01","0","36",null,"111","10",null,null,null,null,null,this);
            obj.set_taborder("7");
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
            obj.set_text("Status \'Objective Set\' 또는 \'Objective Reviewed\'일 경우 목표 확인이 가능합니다. (\'Name\' Click)");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_02","15","35",null,"20","14",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_helpInfoTxt");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            obj.set_text("목표리뷰 제출은 해당 목록 Check 후 목록 오른편 상단의 \'제출(Submit)\' 버튼을 클릭합니다.");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_02_00","15","55",null,"20","14",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("3");
            obj.set_text("제출(Submit)후에는 수정이 불가능합니다.");
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
            obj = new BindItem("item0","div_search.form.cbo_appraisalYear","value","ds_search","APPRAISAL_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_search.form.cbo_appraisalStatus","value","ds_search","ASSESSMENT_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_search.form.cbo_department","value","ds_search","ORGANIZATION_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_search.form.cbo_appraiseeName","value","ds_search","APPRAISEE_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("APR20510M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	:
         * 업무명 		: 업적평가-목표리뷰(1st Appraiser)
         * 파일명 		: APR20510M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2022.1.24
         * 설  명		: 업적평가-목표리뷰(1st Appraiser)
         *---------------------------------------------------------------------------------------
         * 변경일		변경자			변경내역
         *---------------------------------------------------------------------------------------
         * 2022.01.24	박대호			최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /*===============================================================================
        == apr설명. (apr) 공통함수 목록
        ===============================================================================
        ● fn_initInfo                              : 초기값 세팅
        ● fn_targetReviewList                      : 업적평가-목표리뷰 리스트조회
        ● sendDetailData                     		: Detail에 데이터 전송
        ● fn_returnDetail                     		: 팝업 디테일 리턴
        ● fn_submit                     			: 제출
        ● fn_cboSelect                     		: 조회조건 콤보조회

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
        	this.fn_cboSelect();
        };
        /*******************************************************************************
         * fn_initInfo
         * 기능 : 초기값 세팅
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_initInfo = function ()
        {
        	this.ds_search.setColumn(0, "APPRAISER_1ST_ID", this.gf_getPersonId());
        	this.ds_search.setColumn(0, "APPRAISAL_YEAR", this.gfn_getYear());
        	this.ds_search.setColumn(0, "ASSESSMENT_STATUS", "040");
        }

        /*******************************************************************************
         * fn_targetReviewList
         * 기능 : 업적평가-목표리뷰 리스트조회
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_targetReviewList = function ()
        {
        	var sSvcID = "selectAppraisalTargetReviewList";
        	var sController = "/apr20110/selectAppraisalTargetReviewList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_targetReviewList=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }
        /*******************************************************************************
         * fn_cboSelect
         * 기능 : 조회조건 콤보조회
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_cboSelect = function ()
        {
        	var sSvcID = "select1stAppraiserCombo";
        	var sController = "/apr20510/select1stAppraiserCombo.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_department=output1 ds_appraiseeName=output2";
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
        	var mRow = this.ds_targetReviewList.rowcount == 1 ? 0 : this.ds_targetReviewList.rowposition;
        	// arryList 타입전달
        	var oArgs = {
        		targetReviewList : this.ds_targetReviewList,
        		row : mRow
        	};

        	// 자식한테 만들어 둔 함수나 변수 사용 가능.
        	this.gfn_getDetail().fn_initParam(oArgs);
        }
        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.fn_targetReviewList();
        };
        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.ds_search.setColumn(0, "APPRAISAL_YEAR", this.gfn_getYear());
        	this.ds_search.setColumn(0, "ASSESSMENT_STATUS", "040");
        };
        /*
        * 기능 : 저장
        */
        this.fn_save = function()
        {

        }
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
        			case "selectAppraisalTargetReviewList" :
        			{
        				this.notFoundView(this.div_work.form.grd_targetReviewList);
        				break;
        			}
        			case "select1stAppraiserCombo" :
        			{
        				this.ds_department.insertRow(0);
        				this.ds_department.setColumn(0, "ORG_KR_NAME", "전체");
        				this.ds_appraiseeName.insertRow(0);
        				this.ds_appraiseeName.setColumn(0, "APPRAISEE_NAME", "전체");
        				break;
        			}
        			case "selectCheckAppraisalPeriod" :
         			{
        				for(var i = 0; i < this.ds_appraisalPeriodResult.rowcount; i++)
        				{
        					if(this.ds_appraisalPeriodResult.getColumn(i, "CHECK_RESULT") == "NONE")
        					{
        						//평가 기간이 아닙니다
        //   						this.gfn_Message("CheckAppraisalPeriod", null, "info","ok");
        //   						return;
        					}
        				}

        				this.ds_submit.clearData();
        				for(var i = 0; i < this.ds_appraisalPeriodResult.rowcount; i++)
        				{
        					var row = this.ds_submit.addRow();
        					this.ds_submit.setColumn(row, "HJSPFM_APPRAISAL_MASTER_SEQ", this.ds_appraisalPeriod.getColumn(i, "HJSPFM_APPRAISAL_MASTER_SEQ"));
        					this.ds_submit.setColumn(row, "HJSPFM_PER_OBJECT_MASTER_SEQ", this.ds_appraisalPeriod.getColumn(i, "HJSPFM_PER_OBJECT_MASTER_SEQ"));
        					this.ds_submit.setColumn(row, "ASSESSMENT_STATUS", "050");
        					this.ds_submit.setColumn(row, "APPRAISAL_STATUS", "050");
        					this.ds_submit.setColumn(row, "CORRECTION_CHECK", "N");
        				}

        				var sSvcID = "saveSubmitMaster";
        				var sController = "/apr10110/saveSubmitMasterList.do";
        				var sInDatasets = "ds_submit=ds_submit:A";
        				var sOutDatasets = "";
        				var sArgs = "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        				break;
        			}
        			case "saveSubmitMaster" :
        			{
        				this.gfn_Message("SuccessSave", null, "info","ok");
        				this.fn_targetReviewList();
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
         * fn_returnDetail
         * 기능 : 디테일 리턴
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_returnDetail = function ()
        {
        	this.fn_targetReviewList();
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
        	this.ds_appraisalPeriod.clearData();
        	for(var i = 0; i < this.ds_targetReviewList.rowcount; i++)
        	{
        		if(this.ds_targetReviewList.getColumn(i,"CHK")=="1")
        		{
        			chk++;
        			var row = this.ds_appraisalPeriod.addRow();
        			this.ds_appraisalPeriod.setColumn(row, "ASSESSMENT_STATUS", this.ds_targetReviewList.getColumn(i, "ASSESSMENT_STATUS"));
        			this.ds_appraisalPeriod.setColumn(row, "HJSPFM_APPRAISAL_MASTER_SEQ", this.ds_targetReviewList.getColumn(i, "MASTER_SEQ"));
        			this.ds_appraisalPeriod.setColumn(row, "APPRAISAL_SEQ", 1);
        			this.ds_appraisalPeriod.setColumn(row, "APPRAISAL_TYPE", this.ds_targetReviewList.getColumn(i, "APPRAISAL_TYPE"));
        			this.ds_appraisalPeriod.setColumn(row, "APPRAISAL_YEAR", this.ds_targetReviewList.getColumn(i, "APPRAISAL_YEAR"));
        			this.ds_appraisalPeriod.setColumn(row, "HJSPFM_PER_OBJECT_MASTER_SEQ", this.ds_targetReviewList.getColumn(i, "HJSPFM_PER_OBJECT_MASTER_SEQ"));
        			this.ds_appraisalPeriod.setColumn(row, "PARTICIPANT_ID_1", this.ds_targetReviewList.getColumn(i, "PARTICIPANT_ID_1"));
        		}
        	}
        	if(chk < 1)//제출할 평가를 체크했는지 확인
        	{
        		//제출할 업적평가를 선택해주세요.
        		this.gfn_Message("CheckPerformanceApr", null, "info","ok");
        		return;
        	}
        	//체크한 평가가 제출가능한지 확인
        	for(var i = 0; i < this.ds_appraisalPeriod.rowcount; i++)
        	{
        		if(this.nfn_isNull(this.ds_appraisalPeriod.getColumn(i, "PARTICIPANT_ID_1")))
        		{
        			if(this.ds_appraisalPeriod.getColumn(i, "ASSESSMENT_STATUS") != "030")
        			{
        				//피평가자 평가상태를 확인 후 제출하시기 바랍니다.
        				this.gfn_Message("CheckPerformanceAprAppraiseeStatusPar", null, "info","ok");
        				return;
        			}
        		}
        		else
        		{
        			if(this.ds_appraisalPeriod.getColumn(i, "ASSESSMENT_STATUS") != "040")
        			{
        				//파트장 평가상태를 확인 후 제출하시기 바랍니다.
        				this.gfn_Message("CheckPerformanceAprAppraiseeStatus1st", null, "info","ok");
        				return;
        			}
        		}
        	}

        	//완료 후 종합의견 수정이 불가능합니다. 목표리뷰를 완료하시겠습니까?
        	var bOK = this.gfn_Message("CheckPerformanceAprObjectiveSubmit", null, "conf", "yesno");
        	if (bOK == false) return;

        	var sSvcID = "selectCheckAppraisalPeriod";
        	var sController = "/apr10110/selectCheckAppraisalPeriodList.do";
        	var sInDatasets = "ds_appraisalPeriod=ds_appraisalPeriod";
        	var sOutDatasets = "ds_appraisalPeriodResult=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 기능 : 셀 클릭
         */
        this.div_work_grd_targetReviewList_oncellclick = function(obj,e)
        {
        	if(this.ds_targetReviewList.getRowCount() > 0 && e.cell != 0)
        	{
        		// url -> 파일url
        		// callBack -> 자식창 열고 나서 실행될 함수
        		this.gfn_showPage('apr::APR20520M.xfdl', 'sendDetailData');

        	}
        };

        /*
         * 기능 : 콤보변경
         */
        this.div_search_cbo_appraisalYear_onitemchanged = function(obj,e)
        {
        	this.fn_cboSelect();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.Static00.addEventHandler("onclick",this.div_search_Static00_onclick,this);
            this.div_search.form.cbo_appraisalYear.addEventHandler("onitemchanged",this.div_search_cbo_appraisalYear_onitemchanged,this);
            this.div_search.form.cbo_appraisalStatus.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_appraisalStatus.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_search.form.cbo_department.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_department.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_search.form.cbo_appraiseeName.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_appraiseeName.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.grd_targetReviewList.addEventHandler("oncellclick",this.div_work_grd_targetReviewList_oncellclick,this);
            this.div_work.form.btn_save.addEventHandler("onclick",this.fn_submit,this);
        };
        this.loadIncludeScript("APR20510M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
