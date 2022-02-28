(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS04300M");
            this.set_titletext("검사정의별 유형관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_inspectionclassidList", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">약품검사</Col></Row><Row><Col id=\"code\">규격측정(계측값)</Col></Row><Row><Col id=\"code\">수입(원자재)</Col></Row><Row><Col id=\"code\">신뢰성검증</Col></Row><Row><Col id=\"code\">수입(원자재가공품)</Col></Row><Row><Col id=\"code\">수질검사</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_titleBG");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","3",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","29",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","55",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","160","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-SD-0452");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:0","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tab1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("sta_insepctionclassname","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("2");
            obj.set_text("검사 종류 명");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("INSPECTIONCLASSNAME");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_insepctionclassname","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("INSPECTIONCLASSID");
            obj.set_datacolumn("INSPECTIONCLASSNAME");
            obj.set_innerdataset("ds_inspectionclassidList");
            obj.set_displaynulltext("검사명을 선택하세요");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_validstate","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("3");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Combo("cbo_validstate","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_text("유효");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","80","15","97",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("4");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("6");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00_00","161","81","10","27",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","75","146","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","75","102","36",null,null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"55","45","20","91",null,null,null,null,null,this.tab_search.Tab1.form);
            obj.set_taborder("10");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tab1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_async("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS04300M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS04300M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 기준관리>>품질기준정보>>검사정의별 유형관리
         * 파일명         : bas04300M.xfdl
         * 작성자         : yanghee.kim
         * 작성일         : 2021.03.16
         *
         * 설  명         : 검사정의별 유형관리 메인화면
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.16   yanghee.kim   최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;    //기준관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.g_inspectclassid = ""; //조회조건 설비타입 global value

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
            this.nfn_formInit(obj);
            this.fn_SearchInspClassIdList(); //조회조건의 검사 종류 명 조회
            this.fn_formInit();              //최초 호출되는 초기화 함수
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        this.fn_save = function(obj,e)
        {
            if (this.g_inspectclassid == "ChemicalInspection"     //약품검사
                || this.g_inspectclassid == "OperationInspection" //규격측정(계측값)
                || this.g_inspectclassid == "WaterInspection")    //수질검사
            {
                this.div_work.form.fn_saveInspDefinition();
            }
            else if (this.g_inspectclassid == "RawInspection"              //수입(원자재)
                     || this.g_inspectclassid == "SubassemblyInspection")  //수입(원자재가공품)
            {
                this.div_work.form.fn_saveImportInsp();
            }
            else if (this.g_inspectclassid == "ReliabilityInspection") //신뢰성검증
            {
                this.div_work.form.fn_saveReliabilityInsp();
            }
        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
            if (this.nfn_isNull(this.tab_search.Tab1.form.cbo_insepctionclassname.value)){
                this.gfn_Message("SelectItem", this.nfn_getDictionarynameUpper("INSPECTIONCLASSNAME", true), "warning", "ok");
            }

            if (this.g_inspectclassid == "ChemicalInspection"     //약품검사
                || this.g_inspectclassid == "OperationInspection" //규격측정(계측값)
                || this.g_inspectclassid == "WaterInspection")    //수질검사
            {
                this.div_work.form.fn_searchInspDefinitionList();
            }
            else if (this.g_inspectclassid == "RawInspection"              //수입(원자재)
                     || this.g_inspectclassid == "SubassemblyInspection")  //수입(원자재가공품)
            {
                this.div_work.form.fn_searchImportInspTreeList();
                this.div_work.form.fn_searchInspClassMatList();
            }
            else if (this.g_inspectclassid == "ReliabilityInspection") //신뢰성검증
            {
                this.div_work.form.fn_searchReliabilityInspectionTreeList();
                this.div_work.form.fn_searchReliabilityClassList();
            }
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
            }
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
         this.fn_openPop = function(svcId, popId)
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
            var opts = "width=700,height=500";

            oArg.arg_type = "B";
            oArg.arg_popupCd = popId;
            oArg.arg_popupNm = "";
            oArg.arg_paramCols = "";
            oArg.arg_paramValues = "";
            oArg.arg_searchStr = "";

            this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if(this.nfn_isNull(rtn)) return;
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
            this.tab_search.Tab1.form.cbo_validstate.set_value("Valid");
        	var displayText = this.nfn_getDictionaryname("SELECTINSPECTIONCLASSID", true); //검사명을 선택하세요
        	this.tab_search.Tab1.form.cbo_insepctionclassname.set_displaynulltext(displayText);
        };


        /*
         * 기능 : 조회조건 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        };

        /*
         * 기능 : 조회조건의 검사 종류 명 조회
         */
        this.fn_SearchInspClassIdList = function ()
        {
            //조회조건의 검사 종류 명
            var sSvcID        = "selectInspClassIdList";
            var sController   = "/bas04300/selectInspClassIdList.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_inspectionclassidList=output";
            var sArgs         = "";
                sArgs        += this.gfn_setParam("ENTERPRISEID", this.gf_getEnterpriseId());
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 조건표현식을 만족하는 첫번째 Row를 선택
         */
        this.fn_findRowSetPosition = function (pDataset, pColumId, pVariable)
        {
            var findStr = eval("this.div_work.form."+pVariable);
            var nRow = pDataset.findRowExpr(pColumId + "== '" + findStr + "'") ;

            if (nRow == -1)
            {
                pDataset.set_rowposition(0);
            }
            else
            {
                pDataset.set_rowposition(nRow);
            }

            var variableInitial = "this.div_work.form."+pVariable+"="+null;
            eval(variableInitial);
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 이벤트 : 조회조건 설비타입 변경시 그리드 변경
         */
        this.tab_search_Tab1_cbo_insepctionclassname_onitemchanged = function(obj,e)
        {
        	this.div_work.set_async(false);

            if (e.postvalue == "ChemicalInspection"     //약품검사
                || e.postvalue == "OperationInspection" //규격측정(계측값)
                || e.postvalue == "WaterInspection")    //수질검사
            {
                this.div_work.set_url("bas::BAS04300D1.xfdl");

            }
            else if (e.postvalue == "RawInspection"              //수입(원자재)
                     || e.postvalue == "SubassemblyInspection")  //수입(원자재가공품)
            {
                this.div_work.set_url("bas::BAS04300D3.xfdl");
            }
            else if (e.postvalue == "ReliabilityInspection") //신뢰성검증
            {
                this.div_work.set_url("bas::BAS04300D4.xfdl");
            }

            this.g_inspectclassid = e.postvalue; //선택

        	//Link화면의 검사 종류명 표기
        	this.div_work.form.div_subTitle.form.edt_insepctionclassname.set_value(this.tab_search.Tab1.form.cbo_insepctionclassname.text);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.tab_search.Tab1.form.cbo_insepctionclassname.addEventHandler("onitemchanged",this.tab_search_Tab1_cbo_insepctionclassname_onitemchanged,this);
            this.tab_search.Tab1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.tab_search.Tab1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
        };
        this.loadIncludeScript("BAS04300M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
