(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS04800M");
            this.set_titletext("자주검사기준정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selfInspectionList", this);
            obj._setContents("<ColumnInfo><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSEGVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"TANKSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"CALCULATIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ANALYSISCONST\" type=\"STRING\" size=\"256\"/><Column id=\"FOMULATYPE\" type=\"STRING\" size=\"256\"/><Column id=\"QTYCONST\" type=\"STRING\" size=\"256\"/><Column id=\"SPECCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"SPECSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ISINSPECTIONREQUIRED\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"ISAQL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLINSPECTIONLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDEFECTLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"AQLCYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"ISNCR\" type=\"STRING\" size=\"256\"/><Column id=\"NCRINSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NCRCYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRDEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRLOTSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"QTYUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("SITE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_plantId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_inspectionDefId","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("검사 정의 ID");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("INSPECTIONDEF_ID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_inspectionDefId","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("INSPECTIONDEFID");
            obj.set_datacolumn("INSPECTIONDEFNAME");
            obj.set_innerdataset("");
            obj.set_text("자주검사(입고)");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","75","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","75","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"55","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","81","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","143","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"34","788",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("자주검사");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_tooltiptext("SELFINSPECTION");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_selfInspectionList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_selfInspectionList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"220\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"145\"/><Column size=\"80\"/><Column size=\"145\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품질공정코드\" tooltiptext=\"PROCESSSEGID\"/><Cell col=\"2\" text=\"품질공정명\" tooltiptext=\"PROCESSSEGNAME\"/><Cell col=\"3\" text=\"검사수량\" tooltiptext=\"NCRINSPECTIONQTY\"/><Cell col=\"4\" text=\"검사주기\" tooltiptext=\"NCRCYCLE\"/><Cell col=\"5\" text=\"LOT SIZE\" tooltiptext=\"NCRLOTSIZE\"/><Cell col=\"6\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"7\" text=\"생성일\" tooltiptext=\"CREATEDTIME\"/><Cell col=\"8\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"9\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PROCESSSEGID\"/><Cell col=\"2\" text=\"bind:PROCESSSEGNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:NCRINSPECTIONQTY\" edittype=\"mask\" maskeditformat=\"###,##0\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:NCRCYCLE\" combocodecol=\"C,InspCycle,,Y,Y\" edittype=\"combo\" displaytype=\"combotext\"/><Cell col=\"5\" text=\"bind:NCRLOTSIZE\" edittype=\"mask\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:CREATOR\"/><Cell col=\"7\" text=\"bind:CREATEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"8\" text=\"bind:MODIFIER\"/><Cell col=\"9\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_selfInspectionList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_selfInspectionList","190","0",null,"34","668",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_text("");
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

            obj = new Static("sta_title","30","16","138","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            obj.set_tooltiptext("MENU_PG-SD-0466");
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

            obj = new Button("btn_qcPoint",null,"16","72","24","110",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_text("검사Point");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("Toolbar_Inspectionpoint");
            this.div_header.addChild(obj.name, obj);
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
        this.addIncludeScript("BAS04800M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS04800M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 자주 검사기준정보(기준관리 - 품질기준정보)
         * 파일명         : BAS04800M.xfdl
         * 작성자         : yanghee.kim
         * 작성일         : 2021.04.09
         *
         * 설  명         :
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.09   yanghee.kim   최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;    //기준관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.lang;
        this.plantId;
        this.enterpriseId;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
            this.nfn_formInit(obj);
        	this.lang = this.gf_getLanguageType();
        	this.plantId = this.gf_getSiteType();
        	this.enterpriseId = this.gf_getEnterpriseId();

        	/* 조회조건 조회 */
        	this.basfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cbo_plantId // Object
        						, "selectGetPlantList,,Y,A" // OPTION
        						);	  // 추가 파라미터

            var sArgs         = "";
                sArgs        += this.gfn_setParam("INSPECTIONCLASSTYPE", "SelfInspection");
        		sArgs        += this.gfn_setParam("LANGUAGETYPE",      this.lang);
                sArgs        += this.gfn_setParam("VALIDSTATE",        "Valid");

        	/* 조회조건 조회 */
        	this.basfn_setCustomQueryCmb(this.tab_search.Tabpage1.form.cbo_inspectionDefId // Object
        						, "selectGetQcInspectionDefinitionList,,Y,A" // OPTION
        						, sArgs);	  // 추가 파라미터

            this.fn_formInit();    //최초 호출되는 초기화 함수
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 저장
         */
        this.fn_save = function(obj,e)
        {
            if (!this.gfn_dsIsUpdated(this.ds_selfInspectionList))
            {
                this.gfn_Message("NoSaveData", null, "warning", "ok");
                return;
            }

            // -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveInspectionitemrel";
            var sController   = "/bas04800/saveInspectionitemrel.do";
            var sInDatasets   = "INPUT=ds_selfInspectionList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
            this.ds_selfInspectionList.clearData();
            this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow, "LANGUAGETYPE", this.lang);
        	this.ds_search.setColumn(nRow, "PLANTID", this.tab_search.Tabpage1.form.cbo_plantId.value);
        	this.ds_search.setColumn(nRow, "INSPECTIONDEFID", this.tab_search.Tabpage1.form.cbo_inspectionDefId.value)


            var sSvcID        = "selectGetSelfInspectionList";
            var sController   = "/bas04800/selectGetSelfInspectionList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_selfInspectionList=output";
            var sArgs         = "";
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

        	    if (trId == "selectGetSelfInspectionList")
        		{
        			if (this.ds_selfInspectionList.rowcount < 1)
        			{
        				this.gfn_Message("NoSelectData", null, "info", "ok");
        				return;
        			}
        		}
                else if (trId == "saveInspectionitemrel")
                {
                    this.gfn_Message("SuccessSave", null, "info", "ok");
                    this.fn_search();
                }
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
            var opts = "width=580,height=500";

            oArg.arg_type = "B";
            oArg.arg_popupCd = popId;
            oArg.arg_popupNm = "";
            oArg.arg_paramCols = "";
            oArg.arg_paramValues = "";
            oArg.arg_searchStr = "";

            if(popupId == "GRID_PRODUCTDEF")    /*그리드-설비ID*/
            {
                oArg.arg_paramCols = "PRODUCTDEFTYPE|VALIDSTATE";
                oArg.arg_paramValues = "Product|Valid";
                oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME";
            }

            this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if(this.nfn_isNull(rtn)) return;

            if(sPopupId == "GRID_PRODUCTDEF")    /*그리드-품목코드*/
            {
                var nRow = this.ds_selfInspectionList.rowposition;
                this.ds_selfInspectionList.setColumn(nRow, "ITEMID", rtn[0]);
                this.ds_selfInspectionList.setColumn(nRow, "ITEMNAME", rtn[1]);
        		this.ds_selfInspectionList.setColumn(nRow, "ITEMVERSION", "*");
        		this.ds_selfInspectionList.setColumn(nRow, "RESOURCEID", rtn[0]);
        		this.ds_selfInspectionList.setColumn(nRow, "RESOURCEVERSION", "*");
            }
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
        	 this.tab_search.Tabpage1.form.cbo_plantId.set_value(this.plantId);
        	 this.tab_search.Tabpage1.form.cbo_inspectionDefId.set_value("SelfInspectionTake");
        };

        /*
         * 기능 : 조회조건 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 이벤트 : 품목코드 이미지 클릭시
         */
        this.div_work_grd_selfInspectionList_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
            this.fn_openPop("GRID_PRODUCTDEF","P00185"); //품목코드
        };

        /*
         * 이벤트 : 데이터 변경시
         */
        this.ds_selfInspectionList_onvaluechanged = function(obj,e)
        {
            if (e.columnid == "ISAQL") //AQL여부
            {
                if (e.oldvalue == e.newvalue) return;

                if (e.newvalue == "N")
        		{
        			obj.setColumn(e.row, "AQLCYCLE", "");
        			obj.setColumn(e.row, "AQLDECISIONDEGREE", "");
        			obj.setColumn(e.row, "AQLDEFECTLEVEL", "");
        		}
        		else
        		{
        			obj.setColumn(e.row, "AQLDECISIONDEGREE", "A");
        		}
            }
        	else if (e.columnid == "ISNCR") //NCR여부
        	{
                if (e.newvalue == "N")
        		{
        			obj.setColumn(e.row, "NCRCYCLE", "");
        			obj.setColumn(e.row, "NCRDECISIONDEGREE", "");
        			obj.setColumn(e.row, "NCRINSPECTIONQTY", "");
        			obj.setColumn(e.row, "NCRLOTSIZE", "");
        		}
        	}
        };

        /*
         * 이벤트 : 데이터 변경시
         */
        this.div_work_grd_selfInspectionList_oncloseup = function(obj,e)
        {
        	this.div_work.form.grd_selfInspectionList.updateToDataset();
        };

        this.div_header_btn_qcPoint_onclick = function(obj,e)
        {
        	var popupId = "PROCESSSEGID";//
        	var oArg = {};
        	var nRow = this.ds_selfInspectionList.rowposition;
        	oArg.inspItemId            = this.ds_selfInspectionList.getColumn(nRow, "INSPITEMID");
        	oArg.inspItemVersion       = this.ds_selfInspectionList.getColumn(nRow, "INSPITEMVERSION");
        	oArg.inspectionDefId       = this.ds_selfInspectionList.getColumn(nRow, "INSPECTIONDEFID");
        	oArg.inspectionDefVersion  = this.ds_selfInspectionList.getColumn(nRow, "INSPECTIONDEFVERSION");
            oArg.processSegId          = this.ds_selfInspectionList.getColumn(nRow, "PROCESSSEGID");
        	oArg.resourceType          = this.ds_selfInspectionList.getColumn(nRow, "RESOURCETYPE");
        	oArg.resourceVersion       = this.ds_selfInspectionList.getColumn(nRow, "RESOURCEVERSION");
        	oArg.validState            = "Valid";
        	oArg.enterpriseId          = this.ds_selfInspectionList.getColumn(nRow, "ENTERPRISEID");
        	oArg.plantId               = this.ds_selfInspectionList.getColumn(nRow, "PLANTID");

        	this.gfn_openPopup(popupId,"bas::BAS04800P.xfdl",oArg,"width=520,height=460");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.div_header.form.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_qcPoint.addEventHandler("onclick",this.div_header_btn_qcPoint_onclick,this);
        };
        this.loadIncludeScript("BAS04800M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
