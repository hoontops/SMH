(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PAY50110M");
            this.set_titletext("연봉정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_selectPayList", this);
            obj._setContents("<ColumnInfo><Column id=\"REVIEW_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROPOSED_SALARY_N\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAYED_PIECEWORK\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"BASE_ANNUAL_SALARY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RETIRE_ESTIMATION\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Grid("grd_salaryInfo","0","36",null,null,"0","58",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_selectPayList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"년도\"/><Cell col=\"1\" text=\"월균등지급액\"/><Cell col=\"2\" text=\"설추석지급액\"/><Cell col=\"3\" text=\"연봉\"/><Cell col=\"4\" text=\"예상퇴직금\"/></Band><Band id=\"body\"><Cell text=\"bind:REVIEW_DATE\"/><Cell col=\"1\" text=\"bind:PROPOSED_SALARY_N\" textAlign=\"right\" expr=\"expr:PROPOSED_SALARY_N==&apos;&apos;?&apos;0&apos;:PROPOSED_SALARY_N\"/><Cell col=\"2\" text=\"bind:PAYED_PIECEWORK\" textAlign=\"right\" expr=\"expr:PAYED_PIECEWORK==&apos;&apos;?&apos;0&apos;:PAYED_PIECEWORK\"/><Cell col=\"3\" text=\"bind:BASE_ANNUAL_SALARY\" textAlign=\"right\" expr=\"expr:BASE_ANNUAL_SALARY==&apos;&apos;?&apos;0&apos;:BASE_ANNUAL_SALARY\"/><Cell col=\"4\" text=\"bind:RETIRE_ESTIMATION\" textAlign=\"right\" expr=\"expr:RETIRE_ESTIMATION==&apos;&apos;?&apos;0&apos;:RETIRE_ESTIMATION\"/></Band><Band id=\"summary\"><Cell text=\"합계\" textAlign=\"center\"/><Cell col=\"1\" expr=\"dataset.getSum(&apos;parseInt(PROPOSED_SALARY_N)&apos;)\" displaytype=\"currency\"/><Cell col=\"2\" expr=\"dataset.getSum(&apos;parseInt(PAYED_PIECEWORK)&apos;)\" displaytype=\"currency\"/><Cell col=\"3\" expr=\"dataset.getSum(&apos;parseInt(BASE_ANNUAL_SALARY)&apos;)\" displaytype=\"currency\"/><Cell col=\"4\" expr=\"dataset.getSum(&apos;parseInt(RETIRE_ESTIMATION)&apos;)\" displaytype=\"currency\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_page","27.07%",null,null,"20","27.72%","-40",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_url("common::com_paging.xfdl");
            obj.set_background("transparent");
            obj.set_color("rgba(68,68,68,1)");
            obj.set_font("9pt \"Dotum\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","15",null,null,"24","10","24",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("* 개인별 연봉정보는 [인비사항]이므로 본인의 연봉정보를 타인에게 공개해서는 안됩니다.");
            obj.set_cssclass("sta_font_red");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_01","15",null,null,"24","10","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("* 예상퇴직금은 현재 시점의 예상 퇴직금이므로, 실제 퇴직금과 차이가 있을 수 있습니다.");
            obj.set_cssclass("sta_font_black");
            this.addChild(obj.name, obj);
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
            this._addPreloadList("fdl","common::com_paging.xfdl");
        };
        
        // User Script
        this.registerScript("PAY50110M.xfdl", function() {

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";

        // var gfnXjs = new GfnXjs();

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {

        	//this.sta_cnt.set_expr(expr:'result : <fc v="#f31d24">'+comp.parent.ds_search.rowcount+'</fc>')
        	this.nfn_formInit(obj);
        	// 엔터키 설정 함수(조회)
        	//this.gfn_setEnterSearch(this.div_search, "nfn_search");
        	//this.div_page.set_visible(true);

        	// paging
        	//this.fn_paging_onload(obj);
        	// paging end
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
        // 	var userInfo = this._userInfo;
        // 	var keys = Object.keys(userInfo);

        	trace("==============");
        	trace(this.gf_getPersonId());

        	//person_id 저장
        	var personId = this.gf_getPersonId();

        	this.ds_selectPayList.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PERSON_ID", personId);

        	var sSvcID = "selectPayList";
        	var sController = "/pay50110/selectPayList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_selectPayList=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        		if (trId == "selectPayList")
        		{

        			this.notFoundView(this.grd_salaryInfo);
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/



        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/



        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.Static19.addEventHandler("onclick",this.Static19_onclick,this);
        };
        this.loadIncludeScript("PAY50110M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
