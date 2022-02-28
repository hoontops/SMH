(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MFM00900P");
            this.set_titletext("시뮬레이션 팝업");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1265,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_simulationList", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTPRIORITY\" type=\"STRING\" size=\"256\"/><Column id=\"LEFTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"REMAINSEGMENT\" type=\"STRING\" size=\"256\"/><Column id=\"TOPSEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLESEGMENTCLASSNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"UOM\" type=\"STRING\" size=\"256\"/><Column id=\"PNL\" type=\"STRING\" size=\"256\"/><Column id=\"PCS\" type=\"STRING\" size=\"256\"/><Column id=\"MM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","20","20",null,"42","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","10",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","66",null,"48","10",null,"0",null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"8","89","24","20",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("Simulation");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_area","0","10","103","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("작업장");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("AREANAME");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_area","66","10","143","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn_area","edt_area:0","10","22","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_finder");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_lottype","btn_area:0","10","103","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("생산구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo_lottype","sta_lottype:5",null,"165","20",null,"10",null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,ProductionType,ALL,Y,Y");
            obj.set_text("선택");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"50","10","20","48",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel",null,null,"70","28","19","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            obj.set_tooltiptext("CANCEL");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","20","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","395","62","50","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","96","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"42","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"-2","25","25","14",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_weekLList","20","96",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_simulationList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"57\"/><Column size=\"70\"/><Column size=\"50\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"83\"/><Column size=\"69\"/><Column size=\"100\"/><Column size=\"160\"/><Column size=\"87\"/><Column size=\"60\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"품목순위\"/><Cell col=\"1\" text=\"잔여납기일\"/><Cell col=\"2\" text=\"잔여공정\"/><Cell col=\"3\" text=\"대공정\"/><Cell col=\"4\" text=\"중공정\"/><Cell col=\"5\" text=\"작업장\"/><Cell col=\"6\" text=\"품목코드\"/><Cell col=\"7\" text=\"품목명\"/><Cell col=\"8\" text=\"LOT\"/><Cell col=\"9\" text=\"작업공정\"/><Cell col=\"10\" text=\"공정수순\"/><Cell col=\"11\" text=\"UOM\"/><Cell col=\"12\" text=\"PNL\"/><Cell col=\"13\" text=\"PCS\"/><Cell col=\"14\" text=\"MM\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCTPRIORITY\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:LEFTDATE\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:REMAINSEGMENT\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:TOPSEGMENTCLASSNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MIDDLESEGMENTCLASSNAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:USERSEQUENCE\" textAlign=\"center\"/><Cell col=\"11\" text=\"bind:UOM\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:PNL\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:PCS\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:MM\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_simulationList","21","60","101","34",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_weekLList",null,"67","29","24","21",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("엑셀다운로드");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1265,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("MFM00900P.xfdl","lib::lib_tom.xjs");
        this.addIncludeScript("MFM00900P.xfdl","lib::lib_mtm.xjs");
        this.registerScript("MFM00900P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 공정 부하 기준 정보 (품목 팝업)
         * 파일명 		: MFM00200.xfdl
         * 작성자 		: 김진현
         * 작성일 		: 2021.04.19
         *
         * 설  명		: 공정부하기준정보 품목팝업
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.19	김진현   	최초작성
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
        this.searchDiv = this.divSearch.form;

        this.areaId = ''; //작업장Id(조회조건)

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.fn_initCombo();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	//작업장이 공백이면 alert
        	if(this.areaId=='' || this.searchDiv.edt_area.value=='') {
        		alert('작업장을 입력 바랍니다.');
        		this.searchDiv.edt_area.setFocus();
        		return;
        	}

        	this.ds_simulationList.clearData(); 		//Target Dataset clear

        	this.ds_search.clearData(); 		//Search Condition Dataset clear
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLANTID"				, this.nfn_nvl(this.gf_getSiteType(), ""));
        	this.ds_search.setColumn(0, "AREAID"				, this.areaId);
        	this.ds_search.setColumn(0, "LOTTYPE"				, this.searchDiv.cbo_lottype.value);
        	this.ds_search.setColumn(0, "LANGUAGETYPE" 			, this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID" 				, "selectLotListSetDispatchingItemSimulation");

        	var sSvcID 			= "selectLotListSetDispatchingItemSimulation";
        	var sController 	= "/mfm00900/selectLotListSetDispatchingItemSimulation.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_simulationList=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
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
        this.fn_delete = function (obj, e)
        {
        };

        /*
         * 기능 : 복사
         */
        this.fn_copy = function(obj,e)
        {
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD != 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	switch(trId) {
        		case "selectLotListSetDispatchingItemSimulation":
        			break;
        		default:
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        /*
         * 기능(공통팝업) : '작업장' Text 조회
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

        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = this.gfn_getExtractArgument(pArg,"name");
        	oArg.arg_paramValues = this.gfn_getExtractArgument(pArg,"value");
        	oArg.arg_searchStr = "";

        	if(popId=="P00063"){ //작업장조회 조회
        		oArg.arg_searchStr = "AREANAME="+this.searchDiv.edt_area.value;//조회조건의 작업장
        		oArg.arg_rtnCols = "AREAID|AREANAME";
        	}

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        }

        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_AREA")
        	{
        		this.searchDiv.edt_area.set_value(rtn[1]);
        		this.areaId = rtn[0];
        	}
        }

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        /*
         * X 버튼 클릭시
         */
        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        /*
         * 취소 버튼 클릭시
         */
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };

        //작업장
        this.divSearch_edt_area_onkeydown = function(obj,e)
        {
        	if(e.keycode==13){
        		this.divSearch_btn_area_onclick();
        	}
        };

        this.divSearch_btn_area_onclick = function(obj,e)
        {
        	var sArgs = {};
        	sArgs += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
        	sArgs += this.gfn_setParam("PLANTID", this.gf_getSiteType());
        	sArgs += this.gfn_setParam("CURRENTLOGINID", this.gf_getUserAcnt()); //로그인 ID
        	sArgs += this.gfn_setParam("LANGUAGETYPE", this.gf_getLanguageType());

        	this.fn_openPop("SCH_AREA","P00063", sArgs); //작업장 조회
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.divSearch.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.divSearch.form.edt_area.addEventHandler("onkeydown",this.divSearch_edt_area_onkeydown,this);
            this.divSearch.form.btn_area.addEventHandler("onclick",this.divSearch_btn_area_onclick,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_weekLList.addEventHandler("oncelldblclick",this.grd_weekLList_oncelldblclick,this);
        };
        this.loadIncludeScript("MFM00900P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
