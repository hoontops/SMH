(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("APR10410M");
            this.set_titletext("평가이력");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PERSONID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_appraisalInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PERSONID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEENUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_appraisalList", this);
            obj._setContents("<ColumnInfo><Column id=\"AP_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"AC_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"AB_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"RATING\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISALYEAR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_appraisal","0","104",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_appraisalList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Appraisal Year\" tooltiptext=\"Appraisal Year\"/><Cell col=\"1\" text=\"Performance Appraisal\" tooltiptext=\"Performance Appraisal\"/><Cell col=\"2\" text=\"Competence Appraisal\" tooltiptext=\"Competence Appraisal\"/><Cell col=\"3\" text=\"Behavior Appraisal\" tooltiptext=\"Behavior Appraisal\"/><Cell col=\"4\" text=\"2nd Appraisal\" tooltiptext=\"2nd Appraisal\"/><Cell col=\"5\" text=\"Rating\" tooltiptext=\"Rating\"/></Band><Band id=\"body\"><Cell text=\"bind:APPRAISALYEAR\"/><Cell col=\"1\" text=\"bind:AP_GRADE\"/><Cell col=\"2\" text=\"bind:AC_GRADE\"/><Cell col=\"3\" text=\"bind:AB_GRADE\"/><Cell col=\"4\" text=\"bind:AM_GRADE\"/><Cell col=\"5\" text=\"bind:RATING\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_subTitle","0","36",null,"63","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_detail_line");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("st_name","0","0","125","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("0");
            obj.set_text("Name");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Name");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_name","128","5","162","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_value("성명");
            obj.set_enable("false");
            obj.set_cssclass("display");
            obj.set_text("성명");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Static("st_deptnm","300","0","125","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("2");
            obj.set_text("Department");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Department");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_deptNm","428","5","162","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_value("부서");
            obj.set_enable("false");
            obj.set_cssclass("display");
            obj.set_text("부서");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Static("st_grade","600","0","125","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("4");
            obj.set_text("Grade");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Grade");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_gradeNm","728","5","162","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_value("직급");
            obj.set_enable("false");
            obj.set_cssclass("display");
            obj.set_text("직급");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Static("st_employeeNo","0","31","125","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("6");
            obj.set_text("Employee Number");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Employee Number");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_employeeNo","128","36","162","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_value("사번");
            obj.set_enable("false");
            obj.set_cssclass("display");
            obj.set_text("사번");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Static("st_job","300","31","125","31",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("8");
            obj.set_text("Job");
            obj.set_cssclass("sta_WF_detailLabel");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("Job");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Edit("edt_job","428","36","162","20",null,null,null,null,null,null,this.div_subTitle.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_value("업무");
            obj.set_enable("false");
            obj.set_cssclass("display");
            obj.set_text("업무");
            this.div_subTitle.addChild(obj.name, obj);

            obj = new Static("st_position","600","31","125","31",null,null,null,null,null,null,this.div_subTitle.form);
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
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_subTitle.form.edt_name","value","ds_appraisalInfo","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_subTitle.form.edt_deptNm","value","ds_appraisalInfo","DEPARTMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_subTitle.form.edt_gradeNm","value","ds_appraisalInfo","GRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_subTitle.form.edt_employeeNo","value","ds_appraisalInfo","EMPLOYEENUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_subTitle.form.edt_job","value","ds_appraisalInfo","JOB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_subTitle.form.edt_position","value","ds_appraisalInfo","POSITION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("APR10410M.xfdl", function() {

        /***************************************************************************************
         * 시스템명 	: 평가이력조회
         * 업무명 		:
         * 파일명 		: APR10410M.xfdl
         * 작성자 		: 이정훈
         * 작성일 		: 2022.01.25
         *
         * 설  명		: 평가이력조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2022.01.25	이정훈   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/


        	this.personId;


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	//화면 초기화
        	this.nfn_formInit(obj);
        	this.personId = this.gf_getPersonId();  // 사용자계정
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

        	this.ds_appraisalInfo.clearData();					 //Target output Dataset clear
        	this.ds_search.clearData();							 //Search Condition Dataset clear

        	var nRow = this.ds_search.addRow();				//dataset에 row를 추가하고 데이터를 입력.

        	this.ds_search.setColumn(nRow, "PERSONID",  this.personId); //사용자Id DATA

        	var sSvcID 			= "selectAppraisalInfo"; 							 	// CallBack service name
        	var sController 	= "/apr10410/selectAppraisalInfo.do" ;			        // CONTROLLER VALUE
        	var sInDatasets 	= "INPUT=ds_search";						   			// DB INPUT  DATA
        	var sOutDatasets 	= "ds_appraisalInfo=output1 ds_appraisalList=output2";   // DB OUTPUT DATA (상단info 하단List)
        	var sArgs 			= "";


        	trace(this.ds_search.saveXML("Dataset", "V"));

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 링크이동
         */

        this.fn_goUrl= function(obj,e)
        {
        	if (e.col == obj.getBindCellIndex("body", "APPRAISALYEAR"))
        	{
        		alert("향후 구현");
        	}else if(e.col == obj.getBindCellIndex("body", "AP_GRADE"))
        	{

        		alert("performance appraisal  Cell clicked 향후 구현");
        	}else if(e.col == obj.getBindCellIndex("body", "AC_GRADE"))
        	{

        		alert("competence appraisal Cell clicked 향후 구현" );
        	}else if(e.col == obj.getBindCellIndex("body", "AB_GRADE"))
        	{

        		alert("behavior appraisal Cell clicked 향후 구현");
        	}else if(e.col == obj.getBindCellIndex("body", "AM_GRADE"))
        	{

        		alert("2nd appraisal Cell Cilcked 향후 구현" );
        	}else if(e.col == obj.getBindCellIndex("body", "RATING"))
        	{

        		alert(" Rating Cell clicked 향후 구현");
        	}

        };



        /*
         * 기능 : 저장
         */
         this.fn_save = function(obj,e)
        {
        };

        /*
         * 기능 : 행삭제
         */
        this.fn_delline = function(obj,e)
        {


        };


        /*
         * 기능 : 신청버튼
         */
        this.fn_apply = function(obj,e)
        {

        };

        /*
         * 기능 : 취소버튼
         */
        this.fn_cancle = function(obj,e)
        {

        };
        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/


        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
            {
                this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
            }
            else
            {
        	 if (trId == "selectAppraisalInfo") //조회 service name
                {
        			if(this.ds_appraisalInfo.rowcount < 1 )
        			{
        				 this.gfn_Message("NotExistList", NULL , "info", "ok");
        			}
        			else
        			{
        				//alert("callback");

        			}
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
        		// 글자수 체크표기
        // this.fn_textAreaMaxkey = function(obj:nexacro.TextArea,e:nexacro.KeyEventInfo)
        // {
        // 	var strCnt = '<fc v="red">*</fc>고충내용\n('+ this.div_work.Tabpage3.form.div_basicInfo.form.txa_context.text.length +'/ 1000)'
        // 	this.div_work.Tabpage3.form.div_basicInfo.form.sta_prevcareer.set_text(strCnt);
        // };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.grd_appraisal.addEventHandler("oncellclick",this.fn_goUrl,this);
            this.div_subTitle.form.st_name.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_subTitle.form.st_deptnm.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
            this.div_subTitle.form.st_employeeNo.addEventHandler("onclick",this.div_subTitle_Static30_onclick,this);
            this.div_subTitle.form.st_job.addEventHandler("onclick",this.div_subTitle_Static30_00_onclick,this);
        };
        this.loadIncludeScript("APR10410M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
