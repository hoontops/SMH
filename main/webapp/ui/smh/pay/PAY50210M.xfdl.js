(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PAY50210M");
            this.set_titletext("급여명세서");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_salaryList", this);
            obj._setContents("<ColumnInfo><Column id=\"HJSPAY_RUN_RESULT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"EFFECTIVE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"PAY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TYPE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EARN_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DED_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DIFF_TOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"EFFECTIVE_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PAY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0.00%","36",null,"42","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_search");
            obj.set_background("rgba(247,247,247,1)");
            obj.set_formscrollbarbarminsize("0");
            obj.set_formscrollbarbaroutsize("0");
            obj.set_formscrollbardecbuttonsize("0");
            obj.set_formscrollbarincbuttonsize("0");
            obj.set_formscrollbarsize("0");
            obj.set_formscrollbartrackbarsize("0");
            obj.set_formscrollindicatorsize("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("지급년도");
            obj.set_tooltiptext("지급년도");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","0%","0",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0","0","20",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","0%",null,null,"10","0%","0",null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","90","0","10",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","20.59%","0",null,"43","77.02%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09","280","0","10",null,null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_paymentYear","100","10","90","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,HJS_HR_APPRAISAL_YEAR_LOV,,Y,Y");
            obj.set_text("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","210","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("급여유형");
            obj.set_tooltiptext("급여유형");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_salaryType","290","10","120","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,HJS_HR_PAY_TYPE,ALL,Y,Y");
            obj.set_text("");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static78","0.00%","27",null,"9","0%",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

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
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","0","78",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","174","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("급여명세서 내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("급여명세서 내역");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_salaryList","184","-1","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_salaryDetail","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_salaryList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"129\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"지급년월\"/><Cell col=\"1\" text=\"급여유형\"/><Cell col=\"2\" text=\"지급총액\"/><Cell col=\"3\" text=\"공제총액\"/><Cell col=\"4\" text=\"실지급액\"/></Band><Band id=\"body\"><Cell text=\"bind:EFFECTIVE_DATE\"/><Cell col=\"1\" text=\"bind:PAY_TYPE_NAME\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:EARN_TOT\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:DED_TOT\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:DIFF_TOT\" textAlign=\"right\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\" textAlign=\"center\"/><Cell col=\"2\" expr=\"dataset.getSum(&apos;parseInt(EARN_TOT)&apos;)\" displaytype=\"currency\" textAlign=\"right\"/><Cell col=\"3\" expr=\"dataset.getSum(&apos;parseInt(DED_TOT)&apos;)\" displaytype=\"currency\" textAlign=\"right\"/><Cell col=\"4\" expr=\"dataset.getSum(&apos;parseInt(DIFF_TOT)&apos;)\" displaytype=\"currency\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"8","60","20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"8","60","20","66",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
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

        };
        
        // User Script
        this.registerScript("PAY50210M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: 급여명세서
         * 업무명 		: 급여명세서 리스트
         * 파일명 		: PAY50210M.xfdl
         * 작성자 		: 권택진
         * 설  명		: 급여명세서 년도별 리스트
         *---------------------------------------------------------------------------------------
         * 변경일		변경자			변경내역
         *---------------------------------------------------------------------------------------
         * 2022.01.15	권택진			최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

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
        // this.detail_init = function(cFrm){
        //   trace("detail_init");
        //
        //   // 전달 하고자 하는 object 내맘대로정하면됨.
        //   var oArgs = {ttl:'내맘대로정하면됨', sds:rowData, msg:"" };
        //   // 자식한테 만들어 둔 함수나 변수 사용 가능.
        //   cFrm.fn_anyWhere(oArgs);
        // }


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        //****************************
        // 기능 : 검색
        //****************************
        this.fn_search = function (obj, e)
        {
        	trace("search===============================")
        	this.ds_salaryList.clearData();



        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "LANGUAGE", "US");
        	this.ds_search.setColumn(0, "PAY_TYPE", this.div_search.form.cbo_salaryType.value);
        	this.ds_search.setColumn(0, "EFFECTIVE_YEAR", this.div_search.form.cbo_paymentYear.value);
        	this.ds_search.setColumn(0, "PERSON_ID", personId);


        	var sSvcID = "salaryList";
        	var sController = "/pay50210/salaryList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_salaryList=output";
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
        		if (trId == "salaryList")
        		{
        			this.notFoundView(this.div_work.form.grd_salaryDetail);
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

        	//this.ds_search.setColumn(0, "EFFECTIVE_YEAR", this.gfn_getYear());
        	this.div_search.form.cbo_paymentYear.set_text(this.gfn_getYear());
        	this.div_search.form.cbo_salaryType.set_text("전체");

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
          rowData = this.ds_salaryList.getColumn(e.row, "HJSPAY_RUN_RESULT_SEQ");
          trace("===========rowData : " + rowData);
          this.gfn_showPage('pay::PAY50220M.xfdl','sendDetailData');
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.cbo_paymentYear.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_paymentYear.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.div_search.form.cbo_salaryType.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_salaryType.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.grd_salaryDetail.addEventHandler("oncellclick",this.fn_cellClick,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.fn_searchClear,this);
            this.ds_salaryList.addEventHandler("canrowposchange",this.ds_salaryList_canrowposchange,this);
        };
        this.loadIncludeScript("PAY50210M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
