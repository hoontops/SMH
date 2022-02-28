(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("APR20310M");
            this.set_titletext("역량평가-파트장 평가");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PARTICIPANT_ID_1\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_APPRAISAL_MASTER_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_abilityUserList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISEE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISER_1ST_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISER_2ND_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_APPRAISAL_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PARTICIPANT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"LINK\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PARTICIPANT_ID_1\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PASS_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_appraisalPeriod", this);
            obj._setContents("<ColumnInfo><Column id=\"APPRAISAL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_APPRAISAL_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_appraisalPeriodResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CHECK_RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_submit", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSPFM_APPRAISAL_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"HJSPFM_PER_OBJECT_MASTER_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ASSESSMENT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CORRECTION_CHECK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_searchOpen");
            obj.set_tabstop("false");
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

            obj = new Div("div_01","0","36",null,"111","10",null,null,null,null,null,this);
            obj.set_taborder("3");
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
            obj.set_text("Status \'Self Assessed\'일 경우 평가 가능합니다. (\'Appraisal Period\' Click)");
            this.div_01.addChild(obj.name, obj);

            obj = new Static("sta_01_02","15","35",null,"20","14",null,null,null,null,null,this.div_01.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_helpInfoTxt");
            obj.set_wordWrap("char");
            obj.set_usedecorate("true");
            obj.set_text("평가 제출은 해당 목록 Check 후 목록 오른편 상단의 \'제출(Submit)\'을 클릭합니다.");
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

            obj = new Button("btn_clear",null,"152","60","20","76",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"152","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","0.00%","175",null,"42","10",null,null,null,null,null,this);
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

            obj = new Div("div_work","0","218",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_abilityUserList","0","27",null,null,"0","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_abilityUserList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"Appraisal Period\" tooltiptext=\"Appraisal Period\"/><Cell col=\"2\" text=\"Department\" tooltiptext=\"Department\"/><Cell col=\"3\" text=\"Grade\" tooltiptext=\"Grade\"/><Cell col=\"4\" text=\"Job\" tooltiptext=\"Job\"/><Cell col=\"5\" text=\"Name\" tooltiptext=\"Name\"/><Cell col=\"6\" text=\"1st Appraiser\" tooltiptext=\"1st Appraiser\"/><Cell col=\"7\" text=\"2nd Appraiser\" tooltiptext=\"2nd Appraiser\"/><Cell col=\"8\" text=\"Status\" tooltiptext=\"Status\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:APPRAISAL_PERIOD\"/><Cell col=\"2\" text=\"bind:ORG_NAME\"/><Cell col=\"3\" text=\"bind:GRADE_NAME\"/><Cell col=\"4\" text=\"bind:JOB_NAME\"/><Cell col=\"5\" text=\"bind:APPRAISEE_NAME\"/><Cell col=\"6\" text=\"bind:APPRAISER_1ST_NAME\"/><Cell col=\"7\" text=\"bind:APPRAISER_2ND_NAME\"/><Cell col=\"8\" text=\"bind:ASSESSMENT_STATUS_NAME\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_submit",null,"4","60","20","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("제출");
            obj.set_tooltiptext("제출");
            this.div_work.addChild(obj.name, obj);
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("APR20310M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	:
         * 업무명 		: 역량평가-파트장 평가
         * 파일명 		: APR20320M.xfdl
         * 작성자 		: 박대호
         * 작성일 		: 2022.2.10
         * 설  명		: 역량평가-파트장 평가
         *---------------------------------------------------------------------------------------
         * 변경일		변경자			변경내역
         *---------------------------------------------------------------------------------------
         * 2022.02.10	박대호			최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /*===============================================================================
        == apr설명. (apr) 공통함수 목록
        ===============================================================================
        ● fn_initInfo                             	: 초기값 세팅
        ● fn_abilityUserList                      	: 역량평가 대상자 조회
        ● sendDetailData                     		: Detail에 데이터 전송
        ● fn_returnDetail                     		: 팝업 디테일 리턴
        ● fn_submit                     			: 제출

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
        };
        /*******************************************************************************
         * fn_initInfo
         * 기능 : 초기값 세팅
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_initInfo = function ()
        {
        	this.ds_search.setColumn(0, "PARTICIPANT_ID_1", this.gf_getPersonId());
        	this.ds_search.setColumn(0, "APPRAISAL_YEAR", this.gfn_getYear());
        	this.ds_search.setColumn(0, "ASSESSMENT_STATUS", "020");
        }

        /*******************************************************************************
         * fn_abilityUserList
         * 기능 : 역량평가 대상자 조회
         * 박대호
         * Parameter  :
        *******************************************************************************/
        this.fn_abilityUserList = function ()
        {
        	var sSvcID = "selectAbilityUserList";
        	var sController = "/apr20310/selectAbilityUserList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_abilityUserList=output";
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
        	var mRow = this.ds_abilityUserList.rowcount == 1 ? 0 : this.ds_abilityUserList.rowposition;
        	// arryList 타입전달
        	var oArgs = {
        		abilityUserList : this.ds_abilityUserList,
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
        	this.fn_abilityUserList();
        };
        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.ds_search.setColumn(0, "APPRAISAL_YEAR", this.gfn_getYear());
        	this.ds_search.setColumn(0, "ASSESSMENT_STATUS", "020");
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
        			case "selectAbilityUserList" :
        			{
        				this.notFoundView(this.div_work.form.grd_targetReviewList);
        				break;
        			}
        			case "selectRatingExists" :
        			{
        				if(this.ds_result.getColumn(0, "ROW_COUNT") == "0")
        				{
        					//개인역량 평가표 세부항목 Data가 없습니다.
        					this.gfn_Message("CheckCompetencyAprTempleteData", null, "info","ok");
        					break;
        				}
        				if(this.ds_result.getColumn(0, "PASS_FLAG") == "FAIL")
        				{
        					//개인역량 평가표 세부항목에 대한 파트장 등급이 없습니다.
        					this.gfn_Message("CheckCompetencyAprRatingPar", null, "info","ok");
        					break;
        				}
        				//제출 후 파트장 평가 수정이 불가능합니다. 파트장 평가를 완료하시겠습니까?
        				var bOK = this.gfn_Message("CheckPerformanceAprSubmitPar", null, "conf", "yesno");
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

        				this.ds_submit.setColumn(0, "HJSPFM_APPRAISAL_MASTER_SEQ", this.ds_search.getColumn(0, "HJSPFM_APPRAISAL_MASTER_SEQ"));
        				this.ds_submit.setColumn(0, "ASSESSMENT_STATUS", "100");

        				var sSvcID = "updateAppraisalMaster";
        				var sController = "/apr20310/updateAppraisalMaster.do";
        				var sInDatasets = "ds_submit=ds_submit:A";
        				var sOutDatasets = "";
        				var sArgs = "";
        				this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        				break;
        			}
        			case "updateAppraisalMaster" :
        			{
        				this.gfn_Message("SuccessSave", null, "info","ok");
        				this.fn_abilityUserList();
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
        	this.fn_abilityUserList();
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
        	var particpantId = "";
        	for(var i = 0; i < this.ds_abilityUserList.rowcount; i++)
        	{
        		if(this.ds_abilityUserList.getColumn(i,"CHK")=="1")
        		{
        			chk++;
        			chkStatus = this.ds_abilityUserList.getColumn(i, "ASSESSMENT_STATUS");
        			seq = this.ds_abilityUserList.getColumn(i, "HJSPFM_APPRAISAL_MASTER_SEQ")
        			type = this.ds_abilityUserList.getColumn(i, "APPRAISAL_TYPE");
        			year = this.ds_abilityUserList.getColumn(i, "APPRAISAL_YEAR");
        			particpantId = this.ds_abilityUserList.getColumn(i, "PARTICIPANT_ID_1");
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
        	if(chkStatus != "020")//체크한 평가가 제출가능한지 확인
        	{
        		//Open 상태의 평가만 제출할 수 있습니다.
        		this.gfn_Message("CheckPerformanceAprStatus", null, "info","ok");
        		return;
        	}

        	this.ds_appraisalPeriod.clearData();
        	this.ds_appraisalPeriod.addRow();
        	this.ds_appraisalPeriod.setColumn(0, "APPRAISAL_TYPE", type);
        	this.ds_appraisalPeriod.setColumn(0, "APPRAISAL_YEAR", year);
        	this.ds_appraisalPeriod.setColumn(0, "HJSPFM_APPRAISAL_MASTER_SEQ", seq);
        	this.ds_appraisalPeriod.setColumn(0, "ASSESSMENT_STATUS", chkStatus);

         	this.ds_search.setColumn(0, "HJSPFM_APPRAISAL_MASTER_SEQ", seq);

        	//Rating 입력여부 확인
        	var sSvcID = "selectRatingExists";
        	var sController = "/apr20310/selectRatingExists.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_result=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        }
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 기능 : 셀 클릭
         */
        this.div_work_grd_abilityUserList_oncellclick = function(obj,e)
        {
        	if(this.ds_abilityUserList.getRowCount() > 0 && e.cell != 0)
        	{
        		// url -> 파일url
        		// callBack -> 자식창 열고 나서 실행될 함수
        		this.gfn_showPage('apr::APR20320M.xfdl', 'sendDetailData');

        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_search.form.cbo_appraisalYear.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_appraisalYear.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_search.form.cbo_appraisalStatus.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_appraisalStatus.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_work.form.grd_abilityUserList.addEventHandler("oncellclick",this.div_work_grd_abilityUserList_oncellclick,this);
            this.div_work.form.btn_submit.addEventHandler("onclick",this.fn_submit,this);
            this.ds_result.addEventHandler("oncolumnchanged",this.ds_evaluationDetail_oncolumnchanged,this);
        };
        this.loadIncludeScript("APR20310M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
