(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("HRA10170M");
            this.set_titletext("부서원조회(신상)");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_deptMemberList", this);
            obj._setContents("<ColumnInfo><Column id=\"KOR_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMPLOYEE_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INCUMBENCY_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"ASSIGNMENT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORGANIZATION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"POSITION_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STAFF\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_deptList", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_TYPE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_TYPE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_ORG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_ID_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"NAME_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("성명");
            obj.set_tooltiptext("성명");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_00_00","103","10","120","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("Button02","223","10","22","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_finder");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_00_00_00","345","10","120","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"8","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"8","60","20","76",null,null,null,null,null,this);
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

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","0","78",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("부서원 내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("부서원 내역");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorhistory","0","34",null,null,"0","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_deptMemberList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"성명\"/><Cell col=\"1\" text=\"사원번호\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"직급\"/><Cell col=\"4\" text=\"재직여부\"/></Band><Band id=\"body\"><Cell text=\"bind:KOR_NAME\"/><Cell col=\"1\" text=\"bind:EMPLOYEE_NUMBER\"/><Cell col=\"2\" text=\"bind:ORG_NAME\"/><Cell col=\"3\" text=\"bind:GRADE_NAME\"/><Cell col=\"4\" text=\"bind:INCUMBENCY_STATUS\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_deptMemberList","219","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
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
        this.registerScript("HRA10170M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: 부서원조회(신상)
         * 업무명 		: 부서원조회(신상)
         * 파일명 		: HRA10170M.xfdl
         * 작성자 		: 권택진
         * 설  명		: 부서원조회(신상)
         *---------------------------------------------------------------------------------------
         * 변경일		변경자			변경내역
         *---------------------------------------------------------------------------------------
         * 2022.02.14	권택진			최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;
        var rowData;
        //person_id 저장
        var personId = this.gf_getPersonId();

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {

        	//this.sta_cnt.set_expr(expr:'result : <fc v="#f31d24">'+comp.parent.ds_search.rowcount+'</fc>')
        	this.nfn_formInit(obj);
        };

        // 인자로 detail form 이 날아옴.  함수명 고정 detail_init
        this.detail_init = function(cFrm){
          trace("detail_init");

          // 전달 하고자 하는 object 내맘대로정하면됨.
          var oArgs = {ttl:'내맘대로정하면됨', sds:rowData, msg:"" };
          // 자식한테 만들어 둔 함수나 변수 사용 가능.
          cFrm.fn_anyWhere(oArgs);
        }


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        //****************************
        // 기능 : 검색
        //****************************
        this.fn_search = function (obj, e)
        {
        	trace("search===============================");

        	var rowCnt = this.ds_search.rowcount;

        	if(rowCnt < 1)
        	{
        		this.ds_search.clearData();
        		this.ds_search.addRow();
        	}

        	this.ds_search.setColumn(0, "ORG_NAME", this.div_search.form.edt_00_00.text);
        	this.ds_search.setColumn(0,'NAME',this.div_search.form.edt_00_00_00.text);


        	var sSvcID = "selectDeptMemnberList";
        	var sController = "/hra10170/selectDeptMemnberList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_deptMemberList=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };




        //************************************************
        // 기능 : 팝업호출
        //************************************************
        this.fn_pupUp = function(obj,e)
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
        	trace("!!!!!!!!!!!!!!!!!sPopupId ==> " + sPopupId + ", !!!!!!!!!!!!!!!!!Variant ==>" + Variant);

        	if(sPopupId == "SEARCH_DEPT")
        	{
        		// 반환받은 문자열데이타 형변환(String, Array, Object) 처리
        		var rtn = this.fv_rtnValue;
        		trace("                 rtn                  : "+ rtn);

        		//팝업에서 선택한 사원 데이터 넣어주기.
        		this.div_search.form.edt_00_00.set_value(rtn[2]);



        		this.ds_search.clearData();
        		this.ds_search.addRow();

        		this.ds_search.setColumn(0, "ORG_ID", rtn[3]);




        	};
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
        		if (trId == "salaryList")
        		{
        			this.notFoundView(this.div_work.form.grd_qamQcinspectorhistory);
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

        // ************************
        // 조회조건 초기화
        // ************************
        this.fn_searchClear = function(obj,e)
        {
        	this.ds_search.clearData();
         	this.div_search.form.edt_00_00.set_value('');
        	this.div_search.form.edt_00_00_00.set_value('');


         	trace("초기화 완료!")
        };



        // ************************************************
        // 해당 상세페이지 호출을 위한 파라메터 저장
        // ************************************************
        this.sendDataMaker = function(){
          // 전달 하고자 하는 object 내맘대로정하면됨. 받는곳에서 보낸곳의 정의 를 알아서 씀.
          var oArgs = {ttl:'내맘대로정하면됨', sds:rowData};
          return oArgs;
        }

        // ************************************************
        // 해당 상세페이지 호출을 위한 파라메터 전달
        // ************************************************
        this.sendDetailData = function(){
            // 전달 하고자 하는 object 내맘대로정하면됨.
            var oArgs = this.sendDataMaker();

            // 자식한테 만들어 둔 함수나 변수 사용 가능.
            this.gfn_getDetail().fn_anyWhere(oArgs); // fn_anyWhere 는 자식 안에 존재 하는 함수.
        }

        // ************************
        // 상세정보 진입
        // ************************
        this.fn_cellClick = function(obj,e)
        {
           trace("select");
           rowData = this.ds_deptMemberList.getColumn(e.row, "HJSPAY_RUN_RESULT_SEQ");
           trace("===========rowData : " + rowData);
        //   this.gfn_showPage('pay::PAY50220M.xfdl','sendDetailData');
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.Button02.addEventHandler("onclick",this.fn_pupUp,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.fn_searchClear,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("HRA10170M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
