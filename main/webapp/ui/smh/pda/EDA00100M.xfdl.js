(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("EDA00100M");
            this.set_titletext("메뉴");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_1","10","33",null,"90","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("1. 공급자 제조LOT 입력");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_2","10","132",null,"90","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("2. 공정 출고");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_3","10","231",null,"90","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("3. 자재 조회");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_4","10","330",null,"90","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("4. 불량 처리");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,750,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_work.form.div_pfsInfo.form.edt_worker_id","value","ds_work","WORKER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("EDA00100M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("EDA00100M.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("EDA00100M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("EDA00100M.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("EDA00100M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("EDA00100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: PDA메뉴
         * 파일명 		: PDA00100M.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.01.11
         *
         * 설  명		: PDA메뉴
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.01.11	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_pcm.xjs"); /*include "lib::lib_pcm.xjs"*/;
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//MTM 공통 라이브러리 include
        this.executeIncludeScript("pcm::pcmCommon.xjs"); /*include "pcm::pcmCommon.xjs"*/;	//MTM 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	//this.div_page.set_visible(true);

        	// paging
        	//this.fn_paging_onload(obj);
        	// paging end
        	this.parent.parent.sta_back.set_visible(false);
        	this.fv_currDate = this.nfn_getCurrentSystemTime();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_basIdclass.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "VALIDSTATE", this.tab_search.Tabpage1.form.cbo_validstate.value);
        	this.ds_search.setColumn(0, "IDCLASSID", this.tab_search.Tabpage1.form.edt_idclassname_id.value);

        	if(this.tab_work.tabindex==0){

        		var sSvcID = "selectBasIdclassList";
        		var sController = "/cmd00100/selectBasIdclassList.do";
        		var sInDatasets = "INPUT=ds_search";
        		var sOutDatasets = "ds_basIdclass=ds_basIdclass";
        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}else{
        		var sSvcID = "selectBasIdclassList";
        		var sController = "/cmd00100/selectBasIdclassList.do";
        		var sInDatasets = "INPUT=ds_search";
        		var sOutDatasets = "ds_basIddefinition=ds_basIddefinition";
        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	}
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
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if(this.tab_work.tabindex==0){
        		if (!this.gfn_dsIsUpdated(this.ds_basIdclass) )
        		{
        			this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        			return;
        		}

        		var component = this.tab_work.Tabpage1.form.grd_basIdclass;
        		var strColIdList = "IDCLASSID,IDCLASSNAME,LENGTH,VALIDSTATE";
        		var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        		if (rtn == false) return;

        		// -------------------------
        		// 저장
        		// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        		// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        		// -------------------------
        		var sSvcID = "saveBasIdclass";
        		var sController = "/cmd00100/saveBasIdclass.do";
        		var sInDatasets = "INPUT=ds_basIdclass:U";
        		var sOutDatasets = "";

        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}else{
        		if (!this.gfn_dsIsUpdated(this.ds_basIddefinition) )
        		{
        			this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        			return;
        		}

        		var component = this.tab_work.Tabpage2.form.grd_basIddefinition;
        		var strColIdList = "IDCLASSNAME,IDDEFID,IDDEFNAME,IDDEFTYPE,LENGTH,IDDEFCATEGORY";
        		var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        		if (rtn == false) return;

        		// -------------------------
        		// 저장
        		// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        		// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        		// -------------------------
        		var sSvcID = "saveBasIdclass";
        		var sController = "/cmd00100/saveBasIddefinition.do";
        		var sInDatasets = "INPUT=ds_basIddefinition:U";
        		var sOutDatasets = "";

        		var sArgs = "";
        		this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	}
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delelete = function(obj,e)
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

        /*
         * 기능 : work영역 초기화  => 공통처리
         */
        this.fn_reset = function(obj,e)
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
        		if (trId == "saveBasIdclass")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search();
        		}
        		else if (trId == "selectEcmLookupValuesVList2ds_CValidState")
        		{
        			this.tab_search.Tabpage1.form.cbo_validstate.set_index(0);
        		}
        	}

        }


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;
            switch(sPopupId)
        	{
        		case "AREA_ID" :

        			this.edt_area.set_value(rtn[1]);
        			this.edt_area_id.set_value(rtn[0]);
        			this.parent.parent.areaId = rtn[0];
        			break;
         		case "SEARCH_WorkerByProcess" :

        			this.edt_worker_id.set_value(rtn[0]);
         			this.edt_worker.set_value(rtn[1]);
        			this.parent.parent.workerId = rtn[0];

         			break;
         		case "SEARCH_Equipment" :

        			this.edt_equipment_id.set_value(rtn[0]);
        			this.parent.parent.equipmentId = rtn[0];

         			break;

        		default :
        			break;
        	}
        }
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
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
        	var opts = "width=500,height=500";

        	oArg.arg_type = "BA"; // C: 체크박스 B: 단일, CA : arg_searchStr 자동조회
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");

        	if(popId=="P00148"){ //창고 명 조회
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        		oArg.arg_searchStr = "1=1|TXTAREA=" + this.edt_area.value;	// 검색 조건

        	}
        	this.gfn_openPopup(popupId,"cmd::CMSA00120P.xfdl",oArg,opts);
        }
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        //1.공급자제조lot입력
        this.btn_1_onclick = function(obj,e)
        {
        	this.parent.parent.sta_formNm.set_text(obj.text);
        	this.parent.parent.sta_back.set_visible(true);
        	this.parent.set_url("pda::EDA00200M.xfdl");
        };

        //2.공정출고
        this.btn_2_onclick = function(obj,e)
        {
        	this.parent.parent.sta_formNm.set_text(obj.text);
        	this.parent.parent.sta_back.set_visible(true);
        	this.parent.set_url("pda::EDA00300M.xfdl");
        };

        //3.자재조회
        this.btn_3_onclick = function(obj,e)
        {
        	this.parent.parent.sta_formNm.set_text(obj.text);
        	this.parent.parent.sta_back.set_visible(true);
        	this.parent.set_url("pda::EDA00400M.xfdl");
        };

        //4.불량처리
        this.btn_4_onclick = function(obj,e)
        {
        	this.parent.parent.sta_formNm.set_text(obj.text);
        	this.parent.parent.sta_back.set_visible(true);
        	this.parent.set_url("pda::EDA00500M.xfdl");
        };

        this.btn_area_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType());
        	sArgs += this.gfn_setParam("AREATYPE", "Area");
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("USERID", this.gf_getUserId());
        	this.fn_openPop("AREA_ID","P00148", sArgs); //작업장 조회
        };

        this.btn_worker_onclick = function(obj,e)
        {
         	//GetUserList 10001
         	var txtSearch = "1=1"
         	if (!this.gfn_isNull(this.edt_worker.value))
         	{
         		txtSearch = "TXTWORKERIDNAME="+ this.edt_worker.value;
         	}

         	// 자사구분
         	//workerCondition.GridColumns.AddComboBoxColumn("OWNTYPE", 100, new SqlQuery("GetCodeList", "00001", "CODECLASSID=OwnType", $"LANGUAGETYPE={UserInfo.Current.LanguageType}"));
         	// 작업자유형
         	//workerCondition.GridColumns.AddComboBoxColumn("WORKERTYPE", 120, new SqlQuery("GetCodeList", "00001", "CODECLASSID=WorkerType", $"LANGUAGETYPE={UserInfo.Current.LanguageType}"));

         	//???  ==> 디폴트 , 작업자유형 팝업
         	//this.g_areaId = this.div_work.form.div_search.form.edt_area_id.value;
         	var popupId = "SEARCH_WorkerByProcess";  // /pcmCommon/getWorkerByProcess.do
         	var oArg = {};
         	oArg.arg_type = "BA"; // C: 체크박스 B: 단일, CA : arg_searchStr 자동조회
         	oArg.arg_popupCd = "P00196";  //getWorkerByProcess.do  /pcmCommon/getWorkerByProcess.do
         	oArg.arg_popupNm = "작업자 조회";
         	oArg.arg_rtnCols = "WORKERID|WORKERNAME|EMPLOYEENO|DEPARTMENT|OWNTYPE|WORKERTYPE";
         	oArg.arg_paramCols = "USERID|ENTERPRISEID|PLANTID|AREAID";
         	oArg.arg_paramValues = this.gf_getUserId() + "|" + this.gf_getEnterpriseId() + "|" + this.gf_getSiteType() + "|" +  this.edt_area_id.value;  //this.gf_getSiteType()
         	oArg.arg_searchStr = txtSearch;

         	this.gfn_openPopup(popupId,"cmd::CMSA00120P.xfdl",oArg,"width=500,height=600");
        };

        this.btn_equipment_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType());
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("USERID", this.gf_getUserId());
        	sArgs += this.gfn_setParam("AREAIDNAME", this.edt_area.value);
        	sArgs += this.gfn_setParam("EQUIPMENTIDNAME", this.edt_equipment.value);
        	this.fn_openPop("SEARCH_Equipment","P00167", sArgs); //작업설비
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_1.addEventHandler("onclick",this.btn_1_onclick,this);
            this.btn_2.addEventHandler("onclick",this.btn_2_onclick,this);
            this.btn_3.addEventHandler("onclick",this.btn_3_onclick,this);
            this.btn_4.addEventHandler("onclick",this.btn_4_onclick,this);
        };
        this.loadIncludeScript("EDA00100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
