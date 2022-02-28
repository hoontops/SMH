(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM02900M");
            this.set_titletext("검사원등급관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qamQcinspectorgrade", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"UPPERSCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LOWERSCORE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_capacityType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_searchCapacityType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","btn_reset:0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","122","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("검사원등급관리");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-SD-0163");
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

            obj = new Button("btn_save",null,"16","31","24","btn_help:0",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            this.div_header.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle00","0","0","780","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("검사등급 관리현황");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("INSPECTIONGRADEMANAGEMENT");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_qamQcinspectorgrade","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamQcinspectorgrade");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"SiteID\"/><Cell col=\"2\" text=\"자격구분\" tooltiptext=\"CAPACITYTYPE\" cssclass=\"cell_point\"/><Cell col=\"3\" text=\"등급\" tooltiptext=\"GRADE\" cssclass=\"cell_point\"/><Cell col=\"4\" text=\"점수하한값\" tooltiptext=\"LOWERSCORE\"/><Cell col=\"5\" text=\"점수상한값\" tooltiptext=\"UPPERSCORE\"/><Cell col=\"6\" text=\"설명\" tooltiptext=\"DESCRIPTION\"/><Cell col=\"7\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"8\" text=\"생성일\" tooltiptext=\"CREATEDTIME\"/><Cell col=\"9\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"10\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:PLANTID\" edittype=\"none\" combocodecol=\"C,SiteType,,Y,Y\"/><Cell col=\"2\" text=\"bind:INSPECTIONCLASSID\" textAlign=\"left\" combocodecol=\"CODE\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;combo&apos;:&apos;none&apos;\" combodatacol=\"NAME\" combodataset=\"ds_capacityType\" displaytype=\"combotext\"/><Cell col=\"3\" text=\"bind:GRADE\" displaytype=\"combotext\" combocodecol=\"C,InspectionGrade,,Y,Y\" edittype=\"expr:dataset.getRowType(currow) ==2 ? &apos;combo&apos;:&apos;none&apos;\"/><Cell col=\"4\" text=\"bind:LOWERSCORE\" textAlign=\"right\" displaytype=\"number\" edittype=\"text\" editinputtype=\"number\"/><Cell col=\"5\" text=\"bind:UPPERSCORE\" textAlign=\"right\" displaytype=\"number\" edittype=\"text\" editinputtype=\"number\"/><Cell col=\"6\" text=\"bind:DESCRIPTION\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:CREATOR\"/><Cell col=\"8\" text=\"bind:CREATEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"expr: dataset.getRowType(currow) ==2 ? &apos;none&apos;:&apos;normal&apos;\"/><Cell col=\"9\" text=\"bind:MODIFIER\"/><Cell col=\"10\" text=\"bind:MODIFIEDTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"expr:(dataset.getRowType(currow) ==2 || MODIFIEDTIME == null) ? &apos;none&apos;:&apos;normal&apos;\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_qamQcinspectorgrade",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"6","26","24","56",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRow",null,"6","26","24","29",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            this.div_work.addChild(obj.name, obj);

            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Combo("cbo_capacityType","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_searchCapacityType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label_point");
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

            obj = new Static("guidetip02",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip04",null,"55","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("guidetip05","161","81","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("자격구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("CAPACITYTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_site","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,,Y,Y");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","290","34",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1258,747,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM02900M.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM02900M.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM02900M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 검사원 등급관리
         * 파일명 		: QAM02900M.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.04.05
         *
         * 설  명		: 품질관리 > 검사원/AUDIT > 검사원등급관리
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.05	권혜영   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;	//품질관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_isInit = true;
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	/* 자격구분 DS */
        	this.ds_capacityType.clearData();
        	var sSvcID 			= "selectCapacityTypeList";
        	var sController 	= "/qampopup/selectCapacityTypeList.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_capacityType=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	this.fn_formInit();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_qamQcinspectorgrade.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "PLANTID", this.tab_search.Tabpage1.form.cbo_site.value);
        	this.ds_search.setColumn(0, "INSPECTIONCLASSID", this.tab_search.Tabpage1.form.cbo_capacityType.value);

        	var sSvcID 			= "selectQamQcinspectorgradeList";
        	var sController 	= "/qam02900/selectQamQcinspectorgradeList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamQcinspectorgrade=output";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        	this.ds_qamQcinspectorgrade.clearData();
        };

        /*
         * 기능 : 신규
         */
        this.fn_add = function(obj,e)
        {
        	var dsObj = this.ds_qamQcinspectorgrade;
        	if(dsObj == null) return;
        	if(this.fv_isInit) return;

        	var row = dsObj.addRow();

        	dsObj.setColumn(row,"ENTERPRISEID", this.gf_getEnterpriseId());//ENTERPRISEID
        	dsObj.setColumn(row,"PLANTID", this.gf_getSiteType());//PLANTID
        	dsObj.setColumn(row,"VALIDSTATE", "Valid");			//유효여부
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_qamQcinspectorgrade) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	var component = this.div_work.form.grd_qamQcinspectorgrade;
        	var strColIdList = "INSPECTIONCLASSID,GRADE";
        	var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        	if (rtn == false) return;

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveQamQcinspectorgrade";
        	var sController 	= "/qam02900/saveQamQcinspectorgrade.do";
        	var sInDatasets 	= "INPUT=ds_qamQcinspectorgrade:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
        	var dsObj = this.ds_qamQcinspectorgrade;
        	var nRowType = dsObj.getRowType(dsObj.rowposition);

        	if(nRowType==2 ){
        		var bOK = this.gfn_Message("IsDeleted", null, "conf", "yesno");
        		if (bOK == false) return;
        		dsObj.deleteRow(dsObj.rowposition);
        	} else {
        		this.gfn_Message("CantdelSaveData", null, "info", "ok");
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
        		if (trId == "saveQamQcinspectorgrade")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search();
        		}else if (trId == "selectQamQcinspectorgradeList")
        		{
        			this.fv_isInit = false;
        		}else if (trId == "selectCapacityTypeList")
        		{
        			/* 자격구분 검색용 DS */
        			this.ds_searchCapacityType.clearData();
        			this.ds_searchCapacityType.copyData(this.ds_capacityType);

        			this.ds_searchCapacityType.insertRow(0);
        			this.ds_searchCapacityType.setColumn(0, "CODE", "");
        			this.ds_searchCapacityType.setColumn(0, "NAME", this.nfn_nvl(this.nfn_getDictionaryname("YPE_TOTAL"),"전체"));
        			this.tab_search.Tabpage1.form.cbo_capacityType.set_index(0);
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
        	this.ds_CSiteType.filter("LOOKUP_CODE == '"+this.gf_getSiteType()+"'");
        	this.tab_search.Tabpage1.form.cbo_site.set_index(0);
        };

        /*
         * 유효성 체크 (점수)
         */
        this.fn_checkValidationScore = function (p_planId, p_inspectionClassId, p_score, p_rowPos)
        {
        	var ret = true;
        	p_score = p_score || '';

        	if(!this.nfn_isNull(p_planId) && !this.nfn_isNull(p_inspectionClassId)) {
        		var objDs = this.ds_qamQcinspectorgrade, curPosLowerScore, curPosUpperScore;

        		curPosLowerScore = objDs.getColumn(p_rowPos, "LOWERSCORE");
        		curPosUpperScore = objDs.getColumn(p_rowPos, "UPPERSCORE");

        		for(var i = 0; i < objDs.getRowCount(); i++) {
        			var planId = objDs.getColumn(i, "PLANTID");
        			var inspectionClassId = objDs.getColumn(i, "INSPECTIONCLASSID");

        			var lowerScore = this.nfn_isNull(objDs.getColumn(i, "LOWERSCORE")) ? 0 : objDs.getColumn(i, "LOWERSCORE");
        			var upperScore = this.nfn_isNull(objDs.getColumn(i, "UPPERSCORE")) ? 999999999 : objDs.getColumn(i, "UPPERSCORE");

        			if(i != p_rowPos && planId == p_planId && inspectionClassId == p_inspectionClassId) {
        				if(this.nfn_isNull(p_score)) {
        					if(!this.nfn_isNull(curPosLowerScore) || !this.nfn_isNull(curPosUpperScore)) {
        						curPosLowerScore = this.nfn_isNull(curPosLowerScore) ? 0 : curPosLowerScore;
        						curPosUpperScore = this.nfn_isNull(curPosUpperScore) ? 999999999 : curPosUpperScore;

        						if( (lowerScore <= curPosLowerScore && curPosLowerScore <= upperScore) || (lowerScore <= curPosUpperScore && curPosUpperScore <= upperScore)) {
        							this.gfn_Message("ScoreIsAlready", null, "warning", "ok");
        							ret = false;
        							return;
        						}
        					}
        				} else {
        					if(lowerScore <= p_score && p_score <= upperScore) {
        						this.gfn_Message("ScoreIsAlready", null, "warning", "ok");
        						ret = false;
        						return;
        					}
        				}
        			}
        		}
        	}
        	return ret;
        };

        /*
         * 유효성 체크 (중복체크)
         */
        this.fn_checkValidationDup = function (planId, inspectionClassId, grade)
        {
        	var ret = true;
        	if(!this.nfn_isNull(planId) && !this.nfn_isNull(inspectionClassId) && !this.nfn_isNull(grade)) {
        		var objDs = this.ds_qamQcinspectorgrade;
        		var filterStr = "PLANTID == '"+planId+"' && INSPECTIONCLASSID =='"+inspectionClassId+"' && GRADE =='"+grade+"'";

        		if(objDs.getCaseCount(filterStr) >= 1) {
        			var inspectionClassIdText = this.nfn_getDictionarynameUpper("INSPECTIONCLASSID");
        			var gradeText = this.nfn_getDictionarynameUpper("GRADE");
        			var msgText = "Site ID, "+inspectionClassIdText+", "+gradeText;

        			this.gfn_Message("DuplicationItem", msgText, "warning", "ok");
        			ret =  false;
        		}
        	}
        	return ret;
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        // dataset 변경 시 check
        this.ds_qamQcinspectorgrade_cancolumnchange = function(obj,e)
        {
        	var columnId = e.columnid, val = e.newvalue, rowPos = e.row;
        	if(columnId == "INSPECTIONCLASSID" || columnId == "LOWERSCORE" || columnId == "UPPERSCORE" || columnId == "GRADE") {
        		var planId = obj.getColumn(rowPos, "PLANTID");
        		var inspectionClassId = obj.getColumn(rowPos, "INSPECTIONCLASSID");
        		var grade = obj.getColumn(rowPos, "GRADE");

        		switch(columnId) {
        			case "INSPECTIONCLASSID":
        				inspectionClassId = e.newvalue;
        				if(!this.fn_checkValidationDup(planId, inspectionClassId, grade)) return false;
        				if(!this.fn_checkValidationScore(planId, inspectionClassId, "", rowPos)) return false;
        				break;

        			case "GRADE":
        				grade = e.newvalue;

        				if(!this.fn_checkValidationDup(planId, inspectionClassId, grade)) return false;
        				break;

        			case "LOWERSCORE":
        				score = e.newvalue;
        				if(this.nfn_isNull(inspectionClassId)) {
        					this.gfn_Message("EnteredFirstInspection", null, "warning", "ok");
        					return false;

        				}
        				if(!this.fn_checkValidationScore(planId, inspectionClassId, score, rowPos)) return false;
        				break;

        			case "UPPERSCORE":
        				score = e.newvalue;
        				if(this.nfn_isNull(inspectionClassId)) {
        					this.gfn_Message("EnteredFirstInspection", null, "warning", "ok");
        					return false;

        				}
        				if(!this.fn_checkValidationScore(planId, inspectionClassId, score, rowPos)) return false;
        				break;
        		}
        	}
        };

        // 그리드 더블클릭 시 상세 팝업 화면
        this.div_work_grd_qamQcinspectorgrade_oncelldblclick = function(obj,e)
        {
        	var nRowType = this.ds_qamQcinspectorgrade.getRowType(e.row);
        	if(nRowType == 2) return;

        	var pArg = {
        					objGrid: obj,
        					row: e.row,
        					colId: "PLANTID|INSPECTIONCLASSID|GRADE|LOWERSCORE|UPPERSCORE",
        					retName: "planId|inspectionClassId|grade|lowerScore|upperScore"
        				};

        	var oArg = this.qamfn_getCellValue(pArg);

        	pArg = {objGrid: obj, row: e.row, colId: "INSPECTIONCLASSID", type: "text"};
        	oArg.inspectionClassName = this.qamfn_getCellValue(pArg);

        	this.gfn_openPopup("SEARCH_INSPECTOR_GRADE_HISTORY","qam::QAM02900P1.xfdl",oArg,"");
        };

        //dataset 이 삭제되었을 경우 (초기화 여부 판단)
        this.ds_qamQcinspectorgrade_onrowsetchanged = function(obj,e)
        {
        	if( e.reason == "23") { //Dataset의 모든 Row가 완전 삭제되었을 때
        		this.fv_isInit = true;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.grd_qamQcinspectorgrade.addEventHandler("oncelldblclick",this.div_work_grd_qamQcinspectorgrade_oncelldblclick,this);
            this.div_work.form.btn_addRow.addEventHandler("onclick",this.fn_add,this);
            this.div_work.form.btn_delRow.addEventHandler("onclick",this.fn_delete,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.ds_qamQcinspectorgrade.addEventHandler("cancolumnchange",this.ds_qamQcinspectorgrade_cancolumnchange,this);
            this.ds_qamQcinspectorgrade.addEventHandler("onrowsetchanged",this.ds_qamQcinspectorgrade_onrowsetchanged,this);
        };
        this.loadIncludeScript("QAM02900M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
