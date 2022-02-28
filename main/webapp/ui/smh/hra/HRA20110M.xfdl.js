(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRA20110M");
            this.set_titletext("부서원 인사정보(명부)");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PERSON_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PERSON_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ORGANIZATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORGANIZATION_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_staffList", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_RATING\" type=\"STRING\" size=\"256\"/><Column id=\"ANN_SAL_RATING\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROMOTION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_AGE\" type=\"STRING\" size=\"256\"/><Column id=\"ESTABLISH_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"GRADE_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ORGANIZATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ASSIGNMENT_ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0.00%","36",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_search");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","21","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("부서");
            obj.set_tooltiptext("부서");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","0%","0",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0%","-1",null,"43","97.83%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","0%",null,null,"10","76.88%","0",null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","10.24%","1",null,null,"88.66%","-1",null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","265","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("Type");
            obj.set_tooltiptext("Type");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_organization","103","10","120","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_organization","223","10","22","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_personType","345","10","120","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,HJS_HR_POSITION_GRADE_PERSON_TYPE,ALL,Y,Y");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"8","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"8","60","20","76",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0.00%","27",null,"9","1.09%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","0","78",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("부서원 인사 정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("부서원 인사 정보");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"7","60","20","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("출력");
            obj.set_tooltiptext("출력");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_staffList","0","34",null,null,"0","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_staffList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서\" tooltiptext=\"부서\"/><Cell col=\"1\" text=\"직급\" tooltiptext=\"직급\"/><Cell col=\"2\" text=\"성명\" tooltiptext=\"성명\"/><Cell col=\"3\" text=\"직책\" tooltiptext=\"직책\"/><Cell col=\"4\" text=\"직무\" tooltiptext=\"직무\"/><Cell col=\"5\" text=\"평가등급\" tooltiptext=\"평가등급\"/><Cell col=\"6\" text=\"연봉등급\" tooltiptext=\"연봉등급\"/><Cell col=\"7\" text=\"부서일\" tooltiptext=\"부서일\"/><Cell col=\"8\" text=\"직무일\" tooltiptext=\"직무일\"/><Cell col=\"9\" text=\"승격일\" tooltiptext=\"승격일\"/><Cell col=\"10\" text=\"입사일\" tooltiptext=\"입사일\"/><Cell col=\"11\" text=\"나이\" tooltiptext=\"나이\"/><Cell col=\"12\" text=\"최종학력\" tooltiptext=\"최종학력\"/><Cell col=\"13\" text=\"전공\" tooltiptext=\"전공\"/><Cell col=\"14\" text=\"어학자격\" tooltiptext=\"어학자격\"/></Band><Band id=\"body\"><Cell text=\"bind:ORG_NAME\"/><Cell col=\"1\" text=\"bind:GRADE_NAME\"/><Cell col=\"2\" text=\"bind:PERSON_NAME\"/><Cell col=\"3\" text=\"bind:POSITION_NAME\"/><Cell col=\"4\" text=\"bind:JOB_NAME\"/><Cell col=\"5\" text=\"bind:APPRAISAL_RATING\"/><Cell col=\"6\" text=\"bind:ANN_SAL_RATING\"/><Cell col=\"7\" text=\"bind:DEPT_START_DATE\"/><Cell col=\"8\" text=\"bind:JOB_START_DATE\"/><Cell col=\"9\" text=\"bind:PROMOTION_DATE\"/><Cell col=\"10\" text=\"bind:ENTER_DATE\"/><Cell col=\"11\" text=\"bind:PERSON_AGE\"/><Cell col=\"12\" text=\"bind:ESTABLISH_NAME\"/><Cell col=\"13\" text=\"bind:MAJOR\"/><Cell col=\"14\" text=\"bind:LANG_INFO\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_staffList","219","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("HRA20110M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: SM 상선 myHR 고도화
         * 업무명 		: 부서원 인사 정보
         * 파일명 		: HRA20110M.xfdl
         * 작성자 		: 정우영
         * 작성일 		: 2022.02.09
         * 설  명		: 부서원 인사정보 조회는 부서장 또는 임원이 부서원들에 대한 인사정보 사항을
         *				  조회하는 기능으로, Oracle EBS Organization 트리구조에 존재하는 소속부서 및 하위부
         *				  서에 속하는 직원들에 대한 인사정보를 조회한다.
         *				  필요시 부서장은 부서원 인사정보를 출력할 수 있다.
         *
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2022.02.09	정우영   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


         /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        var personId = this.gf_getPersonId();

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/

        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
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
        // 	if (this.ds_search.rowcount<1)
        // 	{
        // 		this.ds_search.clearData();
        // 		this.ds_search.addRow();
        // 	}
        	this.ds_search.setColumn(0, "PERSON_TYPE", this.div_search.form.cbo_personType.value);
        	this.ds_search.setColumn(0, "PERSON_ID", personId);
        	this.ds_search.setColumn(0, "ORGANIZATION_NAME", this.div_search.form.edt_organization.text);

        	var orgNm = this.div_search.form.edt_organization.value;
        	trace("orgNm= " + orgNm);

        	// 부서원 인사 정보 내역
        	var sSvcID = "selectStaffList";
        	var sController = "/hra20110/selectStaffList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_staffList=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectStaffList");
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
        		if (trId == "selectStaffList") //조회
        		{
        			if (this.ds_staffList.rowcount < 1)
        			{
        				 this.gfn_Message("NotExistList", "부서원 인사", "info", "ok") //{0} 내역정보가 존재하지 않습니다.
        				 return;
        			}
        		}
        	}
        };

        //************************************************
        // 기능 : 팝업 호출
        //************************************************

        // 부서 정보 공통 팝업
        this.div_btn_organization_popup = function(obj,e)
        {

        	var oArg = {};
        	oArg.arg_rtnCols = "ORG_TYPE_NAME|ORG_TYPE_CODE|ORG_NAME|ORG_ID";
        	oArg.arg_popupCd = "P00210";

        	this.gfn_openPopup( "SEARCH_DEPT", "cmd::CMSA00100P.xfdl",oArg, "");
        };


        //************************************************
        // 기능 : 팝업 CallBack
        //************************************************
        this.fn_popupAfter = function (sPopupId, Variant)
        {

        	if(sPopupId == "SEARCH_DEPT")
        	{
        		// 반환받은 문자열데이타 형변환(String, Array, Object) 처리
        		var rtn = this.fv_rtnValue;

        		//팝업에서 선택한 사원 데이터 넣어주기.
        		this.div_search.form.edt_organization.set_value(rtn[2]);

        // 		this.ds_search.clearData();
        // 		this.ds_search.addRow();

        		this.ds_search.setColumn(0, "ORGANIZATION_ID", rtn[3]);

        	};
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.btn_organization.addEventHandler("onclick",this.div_btn_organization_popup,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.btn_print.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
        };
        this.loadIncludeScript("HRA20110M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
