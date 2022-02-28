(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM08300M");
            this.set_titletext("재포장등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_main", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"REPACKINGNO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"OWNERWAREHOUSEID\" type=\"STRING\" size=\"256\"/><Column id=\"OWNERWAREHOUSENAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERIDOFORDER\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTCD\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"IFRECEIVEDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"R_REPACKINGREQUESTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ENDQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"IFRECEIVEDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"REPACKINGNO\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","31",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","112","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","0","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle1","0","0",null,"34","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("재포장 완료");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_search","0","34",null,"42","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_rePackNo","0","0","9.54%","40",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("0");
            obj.set_text("재포장번호");
            obj.set_cssclass("sta_WF_label");
            obj.set_wordWrap("english");
            obj.set_tooltiptext("RepackingNo");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_prodId","24.52%","0","9.32%","40",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("1");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_rePackNo","sta_rePackNo:5","10",null,"20","sta_prodId:-1",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("2");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"9","62","24","39",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("SEARCH");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"9","24","24","10",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_reset2");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prodId","sta_prodId:10","10","9%","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("7");
            obj.set_text("1025149H4");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Button("btn_prodId","edt_prodId:0","10","22","20",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_finder");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_dTime","61.07%","0","7.32%","40",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("8");
            obj.set_text("완료일자");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("FINISHEDTIME");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_prodIdNm","btn_prodId:10","10",null,"20","sta_dTime:10",null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.set_text("AMB638RD01 DIGITIZER(2L)-IFV직납");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Div("div_dTime","sta_dTime:10","10","135","21",null,null,null,null,null,null,this.div_work.form.div_search.form);
            obj.set_taborder("9");
            obj.set_url("common::com_calendar.xfdl");
            this.div_work.form.div_search.addChild(obj.name, obj);

            obj = new Static("sta_subTitle2","0","80",null,"34","1098",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("재포장");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_00","0","114",null,null,"0","30",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_main");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"40\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"240\"/><Column size=\"200\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"재포장번호\" tooltiptext=\"RepackingNo\"/><Cell col=\"3\" text=\"품목코드\" tooltiptext=\"ITEMID\"/><Cell col=\"4\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"5\" text=\"자원명\" tooltiptext=\"RESOURCENAME\"/><Cell col=\"6\" text=\"창고출처\" tooltiptext=\"WAREHOUSESOURCE\"/><Cell col=\"7\" text=\"등록일자\" tooltiptext=\"REGISTRATIONDATE\"/><Cell col=\"8\" text=\"발주담당\" tooltiptext=\"ORDERCHARGE\"/><Cell col=\"9\" text=\"재포장수량\" tooltiptext=\"REPACKINGQTY\"/><Cell col=\"10\" text=\"완료수량\" tooltiptext=\"ENDQTY\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:REPACKINGNO\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:OWNERWAREHOUSENAME\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:IFRECEIVEDDATE\"/><Cell col=\"8\" text=\"bind:ORDERNAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:R_REPACKINGREQUESTQTY\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:ENDQTY\" textAlign=\"right\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskeditformat=\"!#,##9\" maskeditautoselect=\"true\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_rePackSave",null,null,"150","24","12","2",null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("재포장완료 (ALT + K)");
            obj.set_tooltiptext("BTN_ALT_K");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_calendar.xfdl");
        };
        
        // User Script
        this.addIncludeScript("PCM08300M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PCM08300M.xfdl","lib::lib_mtm.xjs");
        this.registerScript("PCM08300M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 재포장등록
         * 파일명 		: PCM08300M.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.04.14
         *
         * 설  명		:  재포장을 등록 합니다.
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.14	김진현   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.searchDiv = this.div_work.form.div_search.form;


        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	// 초기화 (공통)
        	this.nfn_formInit(obj);

        	// x 버튼 이벤트 설정(품목코드)
        	this.searchDiv.btn_edt_prodId.setEventHandler( "onclick", this.fn_clickCancelProd, this );

        	// 달력 초기화
        	this.fn_initDate();

        	// 검색조건 공통 콤보 설정
        	//this.fn_initCombo();


        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색(메인 -  고객정보 그리드)
         */
        this.fn_search = function (obj, e)
        {
            var ndt = this.searchDiv.div_dTime.form.calStart.value;		// 완료일자
        	if(!this.gfn_isNull(ndt) && ndt.length >=14){
        		ndt = ndt.substring(0,14);
        	}
        	this.ds_search.clearData();
        	this.ds_main.clearData();
        	// 조회 조건 설정
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "ENTERPRISEID"	, this.gf_getEnterpriseId()); 	// ENTERPRISEID
        	this.ds_search.setColumn(0, "PLANTID"		, this.gf_getSiteType());		// 공장(ERP에서 값이 들어 올때 어떻게 들어 오는지 확인 필요)
        	this.ds_search.setColumn(0, "IFRECEIVEDDATE", ndt);							// 완료일시

        	this.ds_search.setColumn(0, "REPACKINGNO"	, this.searchDiv.edt_rePackNo.value);	// 재포장번호
        	this.ds_search.setColumn(0, "PRODUCTDEFID"	, this.searchDiv.edt_prodId.value);		// 품목코드



        	// 조회 (고객정보 MST 조회)실행
        	var sSvcID 			= "selectRePackList";
        	var sController 	= "/pcm08300/selectRePackList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_main=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
           if (!this.gfn_dsIsUpdated(this.ds_main)
        	 )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	var nChkCnt = this.ds_main.getCaseCount("CHK=='1'");
        	// 선택건 체크
        	if (nChkCnt == 0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok");		// 선택된 항목이 없습니다.
        		return;
        	}

        	// 수량 체크(재포장 수량 넘지않아야됨, 완료수량 미입력 상태 안됨.)
        	var nChkQty = this.fn_chkQty();
        	if(!nChkQty)
        	{
        		return;
        	}

        	// 수정 + 인터페이스 필요(어떻게 해야 되는지 정해 지면.. 가능.)
        	var sSvcID 			= "saveRePackList";
        	var sController 	= "/pcm08300/saveRePackList.do";
        	var sInDatasets 	= "ds_main=ds_main:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {

        };

        /*
         * 기능 : 신규
         */
        this.fn_new = function(obj,e)
        {

        };


        /*
         * 기능 : 삭제
         */
        this.fn_delete = function(obj,e)
        {

        };
        /*
         * 기능 : 도움말  => 공통 처리
         */
        this.fn_help = function(obj,e)
        {

        };

        /*
         * 기능 : 출력
         */
        this.fn_print = function(obj,e)
        {

        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD != 0)
        	{
        		if (trId == "saveRePackList")
        		{
        			var msgArray = errMsg.split(("|"));
        			if(msgArray.length==2) {
        				this.gfn_Message(msgArray[0], "\n"+msgArray[1], "error", "ok");
        				return;
        			} else {
        				this.gfn_Message("ProcessingError", "\n"+errMsg, "error", "ok");
        				return;
        			}
        		} else {

        			this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        			return;
        		}
        	}

        	switch(trId) {
        		case "selectRePackList": 			//[조회]
        			if(this.ds_main.rowcount == 0)
        			{
        				this.gfn_Message("NoSelectData", null, "warning", "ok");
        			}
        			break;
        		case "saveRePackList": 				//[저장]
        			{
        				this.gfn_Message("SuccessSave", "", "information", "ok");
        				this.fn_search();
        				break;
        			}
        			break;


        	default:

        	}

        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;
            switch(sPopupId)
        	{
        		case "SCH_PRODUCTDEFID_TOP" :
        			this.searchDiv.edt_prodId.set_value(rtn[0]);
        			this.searchDiv.edt_prodIdNm.set_value(rtn[1]);
        			break;

        		default :
        			break;
        	}
        };

         /*
         * 기능(공통팝업) : 조회
         */
        this.fn_openPop = function(svcId, popId, pArg)
        {
        	// gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
        	//-----------------
        	// arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅
        	// popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
        	// popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
        	// rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
        	// paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
        	// paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
        	// searchStr   : 팝업 조회조건 콤보값 = 조회 값

        	var popupId = svcId;
        	var oArg = {};
        	var opts = "width=650,height=500";

        	oArg.arg_type = "B";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");
        	oArg.arg_searchStr = "";
        	/*
        	if(popId=="P00138"){ //창고 명 조회
        		oArg.arg_rtnCols = "ITEMID|ITEMNAME";
        	} else if(popId=="P00139"){ //창고 명 조회
        		oArg.arg_rtnCols = "CUSTOMERID|CUSTOMERNAME";		// 김정욱 과장님 요청 사항 21.03.25 고객명으로 설정 되고 조회도 되도록
        	}
        	else if(popId=="P00225"){ // 고객사 조회(조회조건)
        		oArg.arg_rtnCols = "CUSTOMERID|CUSTOMERNM";
        	}


        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        	*/
        }



        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 품목코드 x 클릭시
         */
        this.fn_clickCancelProd = function ()
        {
        	this.searchDiv.edt_prodId.set_value("");				// 품목코드 초기화
        	this.searchDiv.edt_prodIdNm.set_value("");				// 품목명 초기화
        };

        /*
         * 초기화 함수
         */
        this.fn_searchReset = function ()
        {
        	// 오늘 날짜 설정(상단 조회 조건)
        	this.fn_initDate();
        	this.searchDiv.edt_prodId.set_value("");				// 품목코드 초기화
        	this.searchDiv.edt_prodIdNm.set_value("");				// 품목명 초기화
        };

        /*
         * 현재 시간 적용
         */
        this.fn_initDate = function ()
        {
        	var sDate 		= this.nfn_getCurrentSystemTime(0,0,'today');
        	var arrDate 	= sDate.split(",");
        	var sToDateTime = arrDate[0];
        	var sDateFrom 	= arrDate[1];
        	var sTime 		= "0830";		// 기본 시간
        	var sH			= "08";
        	var sM			= "30";
        	var nR			= "1";

        	if(!this.gfn_isNull(sToDateTime) && sToDateTime.length >=12){
        		sTime 	= sToDateTime.substring(8,12);
        		sH		= sTime.substring(0,2);
        		sM		= sTime.substring(2,4);
        		if(parseInt(sH) > 12 || parseInt(sH) == 0)
        		{
        			nR			= "2";
        			if(parseInt(sH) != 0)
        			{
        				sH = this.fn_LeadingZeros(parseInt(sH) - (12),2);
        			}
        		}
        		else
        		{
        			nR			= "1";
        		}

        		sM		= this.fn_LeadingZeros(parseInt(sM),2);
        	}
        	// 시간 설정
        	this.searchDiv.div_dTime.form.calStart.set_value(sDateFrom+sTime);
        	this.searchDiv.div_dTime.form.pdiv_data.form.Radio00.set_value(nR);		// 오전,오후 설정
        	// 달력 콤보 표시만 설정
        	this.searchDiv.div_dTime.form.pdiv_data.form.Combo04.set_value(sH);		// 시간콤보
        	this.searchDiv.div_dTime.form.pdiv_data.form.Combo05.set_value(sM);		// 분 콤보

        };

        /*
         * 숫자 앞에 0 추가 하기
         */
        this.fn_LeadingZeros = function(n, digits)
        {
          var zero = '';
          n = n.toString();

          if (n.length < digits) {
            for (var i = 0; i < digits - n.length; i++)
              zero += '0';
          }
          return zero + n;
        }


        /*
         * 완료수량 입력 되었는지 확인, 재포장 수량을 완료수량이 넘지 않았는지 확인
         */
        this.fn_chkQty = function ()
        {
        	var nCnt = this.ds_main.rowcount;
        	for(var i=0; i<nCnt; i++)
        	{
        		var nChk = this.ds_main.getColumn(i,"CHK");
        		if(nChk == 1)			// 체크된것만 확인
        		{
        			var nSum 	= this.ds_main.getColumn(i,"R_REPACKINGREQUESTQTY");	// 재포장수량 (입력가능한)
        			var nInQty 	= this.ds_main.getColumn(i,"ENDQTY");					// 완료수량(입력된값)

        			if(this.gfn_isNull(nInQty))
        			{
        				this.gfn_Message("NoCommentsMeasurement", "", "warning", "ok");		// 내용이 입력되지 않았습니다.
        				return false;
        			}
        			if(parseInt(nInQty) > parseInt(nSum))
        			{
        				this.gfn_Message("REPACKINGQTY", "", "warning", "ok");	// 입력 완료수량이 재포장수량을 초과할 수 없습니다.
        				return false;
        			}
        			// 수량이 같을 경우 fleg 무언가 적용 해야 될지도 모름..
        		}
        	}
        	return true;

        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 품목코드 (조회조건 팝업)
         */
        this.div_work_div_search_btn_itemId_onclick = function(obj,e)
        {
        	var nEnterpriseId 	= this.gf_getEnterpriseId();	//ENTERPRISEID
        	var nSite 			= this.gf_getSiteType();		//Site

        	var popupId = "SCH_PRODUCTDEFID_TOP";
        	var oArg = {};
        	var opts = "width=850,height=500";

        	// 기 입력값 있는지 확인
        	var nSearch = this.searchDiv.edt_prodId.value;

        	if(!this.gfn_isNull(nSearch))
        	{
        		// 기입력된 값이 있으면
        		oArg.arg_prodId = nSearch;
        	}

        	this.gfn_openPopup(popupId,"pcm::PCM09400P.xfdl" ,oArg ,opts);

        };

        /*
         * 검색조건 초기화
         */
        this.fn_formInit = function(obj,e)
        {
        	this.fn_searchReset();
        };

        // 단축키 부분
        this.PCM08300M_onkeydown = function(obj,e)
        {
        	if (e.altkey && e.keycode==75)		// Alt + k
        	{
        		this.fn_save();
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.addEventHandler("onkeydown",this.PCM08300M_onkeydown,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.div_search.form.btn_reset.addEventHandler("onclick",this.fn_formInit,this);
            this.div_work.form.div_search.form.edt_prodId.addEventHandler("onkeydown",this.div_work_div_search_edt_itemId_onkeydown,this);
            this.div_work.form.div_search.form.btn_prodId.addEventHandler("onclick",this.div_work_div_search_btn_itemId_onclick,this);
            this.div_work.form.btn_rePackSave.addEventHandler("onclick",this.fn_save,this);
        };
        this.loadIncludeScript("PCM08300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
