(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PDA00100M");
            this.set_titletext("메뉴");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_result", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_CancelSelectedLotId","75.42%","134","22.50%","90",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("인계취소");
            obj.set_background("url(\'theme://images/main_3th_menu04.png\')");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_LotAccept","1.88%","33","22.50%","90",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("인수등록");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_StartWork","26.46%","33","22.5%","90",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("작업시작");
            obj.set_background("url(\'theme://images/main_first_menu01.png\') no-repeat center center");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_WorkCompletion","50.63%","33","22.50%","90",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("작업완료");
            obj.set_background("url(\'theme://images/main_first_menu02.png\')");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SelectedLotId","75.42%","33","22.50%","90",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("인계등록");
            obj.set_background("url(\'theme://images/main_first_menu04.png\')");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CancelLotAccept","1.88%","134","22.50%","90",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("인수취소");
            obj.set_background("url(\'theme://images/main_3th_menu03.png\')");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CancelStartWork","26.46%","134","22.50%","90",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("시작취소");
            obj.set_background("url(\'theme://images/main_3th_menu01.png\')");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ChangeInfo","1.88%","236","22.50%","90",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("정보변경");
            obj.set_background("url(\'theme://images/main_2nd_menu05.png\')");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ChangeResource","26.46%","236","22.50%","90",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("인수작업장 변경");
            obj.set_background("url(\'theme://images/main_3th_menu02.png\')");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","110.42%","318",null,"39","-60.42%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("설정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 17pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00","3.13%","364",null,"39","73.75%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("자원");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00","3.13%","411",null,"39","73.75%",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("작업자");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title00_00_00","3.13%","454",null,"48","73.75%",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("작업설비");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_resource","30.21%","364","54.17%","39",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_area","85.63%","364","10.63%","39",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_finder");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_area_id","351","270","41","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_worker_id","351","298","41","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_worker","30.21%","411","54.17%","39",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_worker","85.63%","411","10.63%","39",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_finder");
            obj.set_enable("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_equipment_id","351","338","41","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_equipment","30.21%","460","54.17%","39",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_equipment","85.63%","460","10.63%","39",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_WF_finder");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CancelWorkCompletion","50.63%","134","22.50%","90",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("완료취소");
            obj.set_background("url(\'theme://images/main_3th_menu01.png\')");
            obj.set_font("normal 700 16pt/normal \"Arial\"");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_resource_id","401","270","41","20",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_area","249","334","41","20",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_visible("false");
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
        this.addIncludeScript("PDA00100M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("PDA00100M.xfdl","lib::lib_pcm.xjs");
        this.addIncludeScript("PDA00100M.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("PDA00100M.xfdl","lib::lib_mtm.xjs");
        this.addIncludeScript("PDA00100M.xfdl","pcm::pcmCommon.xjs");
        this.registerScript("PDA00100M.xfdl", function() {
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

        	this.parent.parent.sta_back.set_visible(false);
        	this.fv_currDate = this.nfn_getCurrentSystemTime();

        	if(!this.gfn_isNull(this.parent.parent.areaId)){
        		this.edt_area_id.set_value(this.parent.parent.areaId);
        		this.edt_area.set_value(this.parent.parent.areaNm);
        		this.edt_resource_id.set_value(this.parent.parent.resourceId);
        		this.edt_resource.set_value(this.parent.parent.resourceNm);
        	}
        	if(!this.gfn_isNull(this.parent.parent.workerId)){
        		this.edt_worker_id.set_value(this.parent.parent.workerId);
        		this.edt_worker.set_value(this.parent.parent.workerNm);
        	}
        	if(!this.gfn_isNull(this.parent.parent.equipmentId)){
        		this.edt_equipment_id.set_value(this.parent.parent.equipmentId);
        		this.edt_equipment.set_value(this.parent.parent.equipmentNm);
        	}
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
        			if(this.edt_area_id.value != rtn[0]){
        				this.edt_worker_id.set_value("");
        				this.edt_worker.set_value("");
        				this.parent.parent.workerId = "";
        				this.parent.parent.workerNm = "";

        				this.edt_equipment_id.set_value("");
        				this.edt_equipment.set_value("");
        				this.parent.parent.equipmentId = "";
        				this.parent.parent.equipmentNm = "";
        			}
        			this.edt_area_id.set_value(rtn[0]);
        			this.edt_area.set_value(rtn[1]);
        			this.edt_resource.set_value(rtn[3]);
        			this.edt_resource_id.set_value(rtn[2]);
        			this.parent.parent.areaId = rtn[0];
        			this.parent.parent.areaNm = rtn[1];
        			this.parent.parent.resourceId = rtn[2];
        			this.parent.parent.resourceNm = rtn[3];
        			break;
         		case "SEARCH_WorkerByProcess" :

        			this.edt_worker_id.set_value(rtn[0]);
         			this.edt_worker.set_value(rtn[1]);
        			this.parent.parent.workerId = rtn[0];
        			this.parent.parent.workerNm = rtn[1];

         			break;
         		case "SEARCH_Equipment" :
        			trace(rtn[0]);
        			trace(rtn[1]);
        			this.edt_equipment_id.set_value(rtn[0]);
        			this.edt_equipment.set_value(rtn[1]);
        			this.parent.parent.equipmentId = rtn[0];
        			this.parent.parent.equipmentNm = rtn[1];

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
        	var opts = "width=450,height=500";

        	oArg.arg_type = "BA"; // C: 체크박스 B: 단일, CA : arg_searchStr 자동조회
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");

        	if(popId=="P00315"){ //창고 명 조회
        		oArg.arg_rtnCols = "AREAID|AREANAME|RESOURCEID|RESOURCENAME";
        		oArg.arg_searchStr = "1=1|TXTAREA=" + this.edt_resource.value;	// 검색 조건

        	}
        	this.gfn_openPopup(popupId,"cmd::CMSA00120P.xfdl",oArg,opts);
        }
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.btn_area_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType());
        	sArgs += this.gfn_setParam("AREATYPE", "Area");
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());
        	sArgs += this.gfn_setParam("USERID", this.gf_getUserId());
        	this.fn_openPop("AREA_ID","P00315", sArgs); //작업장/자원 조회
        };

        this.btn_worker_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.edt_resource_id.value)){
        		this.gfn_Message("InputSomeThing", "자원", "info", "ok");
        		return;
        	}
         	//GetUserList 10001
         	var txtSearch = "1=1"
         	if (!this.gfn_isNull(this.edt_worker.value))
         	{
         		txtSearch = "TXTWORKERIDNAME="+ this.edt_worker.value;
         	}

        	trace("edt_area_id-->"+this.edt_area_id.value);
         	var popupId = "SEARCH_WorkerByProcess";  // /pcmCommon/getWorkerByProcess.do
         	var oArg = {};
         	oArg.arg_type = "BA"; // C: 체크박스 B: 단일, CA : arg_searchStr 자동조회
         	oArg.arg_popupCd = "P00196";  //getWorkerByProcess.do  /pcmCommon/getWorkerByProcess.do
         	oArg.arg_popupNm = "작업자 조회";
         	oArg.arg_rtnCols = "WORKERID|WORKERNAME|EMPLOYEENO|DEPARTMENT|OWNTYPE|WORKERTYPE";
         	oArg.arg_paramCols = "USERID|ENTERPRISEID|PLANTID|AREAID";
         	oArg.arg_paramValues = this.gf_getUserId() + "|" + this.gf_getEnterpriseId() + "|" + this.gf_getSiteType() + "|" +  this.edt_area_id.value;  //this.gf_getSiteType()
         	oArg.arg_searchStr = txtSearch;

         	this.gfn_openPopup(popupId,"cmd::CMSA00120P.xfdl",oArg,"width=450,height=500");
        };

        this.btn_equipment_onclick = function(obj,e)
        {
        	if(this.gfn_isNull(this.edt_resource_id.value)){
        		this.gfn_Message("InputSomeThing", "자원", "info", "ok");
        		return;
        	}
        	var popupId = "SEARCH_Equipment";
        	var oArg = {};
        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00313";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "EQUIPMENTID|EQUIPMENTNAME";
        	oArg.arg_paramCols = "RC.RESOURCEID";
        	oArg.arg_paramValues = this.edt_resource_id.value;
        	oArg.arg_searchStr = "1=1|SEARCH_TEXT="+this.edt_equipment.value;

        	this.gfn_openPopup(popupId,"cmd::CMSA00120P.xfdl",oArg,"width=450,height=500");
        };
        this.fn_menuselect = function(obj, url)
        {
        	this.parent.parent.sta_formNm.set_text(obj.text);
        	this.parent.parent.sta_back.set_visible(true);
        	this.parent.parent.sta_logOut.set_visible(false);
        	this.parent.parent.sta_menu.set_visible(true);
        	this.parent.set_url(url);

        }
        //인수등록
        this.btn_LotAccept_onclick = function(obj,e)
        {
        	var url = "pda::PDA00200M.xfdl";
        	this.fn_menuselect(obj, url);
        };
        //작업시작
        this.btn_StartWork_onclick = function(obj,e)
        {
        	var url = "pda::PDA00300M.xfdl";
        	this.fn_menuselect(obj, url);
        };

        //작업완료
        this.btn_WorkCompletion_onclick = function(obj,e)
        {
        	var url = "pda::PDA00400M.xfdl";
        	this.fn_menuselect(obj, url);
        };

        //인계등록
        this.btn_SelectedLotId_onclick = function(obj,e)
        {
        	var url = "pda::PDA00500M.xfdl";
        	this.fn_menuselect(obj, url);
        };

        //인계취소
        this.btn_CancelSelectedLotId_onclick = function(obj,e)
        {
        	var url = "pda::PDA00600M.xfdl";
        	this.fn_menuselect(obj, url);
        };

        //인수취소
        this.btn_CancelLotAccept_onclick = function(obj,e)
        {
        	var url = "pda::PDA00700M.xfdl";
        	this.fn_menuselect(obj, url);

        };

        //시작취소
        this.btn_CancelStartWork_onclick = function(obj,e)
        {
        	var url = "pda::PDA00800M.xfdl";
        	this.fn_menuselect(obj, url);
        };

        //완료취소
        this.btn_CancelWorkCompletion_onclick = function(obj,e)
        {
        	var url = "pda::PDA00900M.xfdl";
        	this.fn_menuselect(obj, url);

        };

        //정보변경
        this.btn_ChangeInfo_onclick = function(obj,e)
        {
        	var url = "pda::PDA01000M.xfdl";
        	this.fn_menuselect(obj, url);
        };

        //자원변경
        this.btn_ChangeResource_onclick = function(obj,e)
        {
        	var url = "pda::PDA01100M.xfdl";
        	this.fn_menuselect(obj, url);

        };

        this.edt_area_onkeydown = function(obj,e)
        {
        	if(e.keycode==13) this.btn_area_onclick();
        };

        this.edt_worker_onkeydown = function(obj,e)
        {
        	if(e.keycode==13) this.btn_worker_onclick();
        };

        this.edt_equipment_onkeydown = function(obj,e)
        {
        	if(e.keycode==13) this.btn_equipment_onclick();
        };

        this.edt_resource_onchanged = function(obj,e)
        {
        	if(this.gfn_isNull(e.postvalue)){
        		this.parent.parent.areaId = "";
        		this.parent.parent.areaNm = "";
        		this.parent.parent.resourceId = "";
        		this.parent.parent.resourceNm = "";
        	}
        };

        this.edt_worker_onchanged = function(obj,e)
        {
        	if(this.gfn_isNull(e.postvalue)){
        		this.parent.parent.workerId = "";
        		this.parent.parent.workerNm = "";
        	}
        };

        this.edt_equipment_onchanged = function(obj,e)
        {
        	if(this.gfn_isNull(e.postvalue)){
        		this.parent.parent.equipmentId = "";
        		this.parent.parent.equipmentNm = "";
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_CancelSelectedLotId.addEventHandler("onclick",this.btn_CancelSelectedLotId_onclick,this);
            this.btn_LotAccept.addEventHandler("onclick",this.btn_LotAccept_onclick,this);
            this.btn_StartWork.addEventHandler("onclick",this.btn_StartWork_onclick,this);
            this.btn_WorkCompletion.addEventHandler("onclick",this.btn_WorkCompletion_onclick,this);
            this.btn_SelectedLotId.addEventHandler("onclick",this.btn_SelectedLotId_onclick,this);
            this.btn_CancelLotAccept.addEventHandler("onclick",this.btn_CancelLotAccept_onclick,this);
            this.btn_CancelStartWork.addEventHandler("onclick",this.btn_CancelStartWork_onclick,this);
            this.btn_ChangeInfo.addEventHandler("onclick",this.btn_ChangeInfo_onclick,this);
            this.btn_ChangeResource.addEventHandler("onclick",this.btn_ChangeResource_onclick,this);
            this.edt_resource.addEventHandler("onkeydown",this.edt_area_onkeydown,this);
            this.edt_resource.addEventHandler("onchanged",this.edt_resource_onchanged,this);
            this.btn_area.addEventHandler("onclick",this.btn_area_onclick,this);
            this.edt_worker.addEventHandler("onkeydown",this.edt_worker_onkeydown,this);
            this.edt_worker.addEventHandler("onchanged",this.edt_worker_onchanged,this);
            this.btn_worker.addEventHandler("onclick",this.btn_worker_onclick,this);
            this.edt_equipment.addEventHandler("onkeydown",this.edt_equipment_onkeydown,this);
            this.edt_equipment.addEventHandler("onchanged",this.edt_equipment_onchanged,this);
            this.btn_equipment.addEventHandler("onclick",this.btn_equipment_onclick,this);
            this.btn_CancelWorkCompletion.addEventHandler("onclick",this.btn_CancelWorkCompletion_onclick,this);
        };
        this.loadIncludeScript("PDA00100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
