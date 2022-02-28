(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS04600M");
            this.set_titletext("출하 검사기준정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_shipmentInspectionList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSEGVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AQLINSPECTIONLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"ISINSPECTIONREQUIRED\" type=\"STRING\" size=\"256\"/><Column id=\"ISAQL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDEFECTLEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"AQLCYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"AQLDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"ISNCR\" type=\"STRING\" size=\"256\"/><Column id=\"NCRINSPECTIONQTY\" type=\"STRING\" size=\"256\"/><Column id=\"NCRCYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRDECISIONDEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"NCRLOTSIZE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTIONDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("sta_itemId","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_itemName","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_itemId","108","10",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear","171","100","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","100","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"80","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","106","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_itemName","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cbo_validState","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_02_00_00_00",null,"55","45","5","101",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_validState","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label_point");
            obj.set_tooltiptext("VALIDSTATE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","143","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_shipmentInspectionList","250","0","150","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","0","0",null,"34","sta_cnt_ds_shipmentInspectionList:0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("출하 검사기준정보");
            obj.set_tooltiptext("MENU_PG-SD-0468");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_shipmentInspectionList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_shipmentInspectionList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"65\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"품목코드\" tooltiptext=\"ITEMID\" cssclass=\"cell_point\"/><Cell col=\"2\" text=\"Rev\" cssclass=\"cell_point\" tooltiptext=\"ITEMVERSION\"/><Cell col=\"3\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"4\" text=\"검사수준\" tooltiptext=\"AQLINSPECTIONLEVEL\"/><Cell col=\"5\" text=\"검사자등급\" tooltiptext=\"INSPECTORDEGREE\"/><Cell col=\"6\" text=\"검사필수여부\" tooltiptext=\"ISINSPECTIONREQUIRED\"/><Cell col=\"7\" text=\"AQL여부\" tooltiptext=\"checkbox\"/><Cell col=\"8\" text=\"불량수준\" tooltiptext=\"AQLDEFECTLEVEL\"/><Cell col=\"9\" text=\"AQL주기\" tooltiptext=\"AQLCYCLE\"/><Cell col=\"10\" text=\"AQL판정등급\" tooltiptext=\"AQLDECISIONDEGREE\"/><Cell col=\"11\" text=\"NCR여부\" tooltiptext=\"ISNCR\"/><Cell col=\"12\" text=\"검사수량\" tooltiptext=\"NCRINSPECTIONQTY\"/><Cell col=\"13\" text=\"NCR주기\" tooltiptext=\"NCRCYCLE\"/><Cell col=\"14\" text=\"NCR판정등급\" tooltiptext=\"NCRDECISIONDEGREE\"/><Cell col=\"15\" text=\"LOT SIZE\" tooltiptext=\"NCRLOTSIZE\"/><Cell col=\"16\" text=\"유효상태\" cssclass=\"cell_point\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"17\" text=\"생성자\" tooltiptext=\"CREATOR\"/><Cell col=\"18\" text=\"생성일\" tooltiptext=\"CREATEDTIME\"/><Cell col=\"19\" text=\"수정자\" tooltiptext=\"MODIFIER\"/><Cell col=\"20\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:ITEMID\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandsize=\"24\" cssclass=\"expr:dataset.getRowType(currow) ==2 ? &apos;point&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:ITEMVERSION\" cssclass=\"expr:dataset.getRowType(currow) ==2 ? &apos;point&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:ITEMNAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:AQLINSPECTIONLEVEL\" combocodecol=\"C,AQLSize,NAN,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"5\" text=\"bind:INSPECTORDEGREE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,InspectionGrade,NAN,Y,Y\"/><Cell col=\"6\" text=\"bind:ISINSPECTIONREQUIRED\" combocodecol=\"C,YesNo,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"7\" text=\"bind:ISAQL\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,YesNo,,Y,Y\"/><Cell col=\"8\" text=\"bind:AQLDEFECTLEVEL\" textAlign=\"right\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,AQLRate,NAN,Y,Y\"/><Cell col=\"9\" text=\"bind:AQLCYCLE\" combocodecol=\"C,InspCycle,NAN,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"10\" text=\"bind:AQLDECISIONDEGREE\" displaytype=\"combotext\" edittype=\"expr:dataset.getColumn(currow, &quot;ISAQL&quot;) == &apos;Y&apos; ? &apos;combo&apos;:&apos;none&apos;\" combocodecol=\"C,DecisionDegree,NAN,Y,Y\"/><Cell col=\"11\" text=\"bind:ISNCR\" combocodecol=\"C,YesNo,,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"12\" text=\"bind:NCRINSPECTIONQTY\" textAlign=\"right\" editinputtype=\"number\" displaytype=\"number\" edittype=\"text\"/><Cell col=\"13\" text=\"bind:NCRCYCLE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,InspCycle,NAN,Y,Y\"/><Cell col=\"14\" text=\"bind:NCRDECISIONDEGREE\" combocodecol=\"C,DecisionDegree,NAN,Y,Y\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"15\" text=\"bind:NCRLOTSIZE\" textAlign=\"right\" editinputtype=\"number\" displaytype=\"number\" edittype=\"text\"/><Cell col=\"16\" text=\"bind:VALIDSTATE\" displaytype=\"combotext\" edittype=\"combo\" combocodecol=\"C,ValidState,,Y,Y\"/><Cell col=\"17\" text=\"bind:CREATOR\"/><Cell col=\"18\" text=\"bind:CREATEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"19\" text=\"bind:MODIFIER\"/><Cell col=\"20\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_shipmentInspectionList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_delRowRowShipmentInspectionLIst",null,"6","26","24","29",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("추가");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_addRowShipmentInspectionLIst",null,"6","26","24","58",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("5");
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

            obj = new Button("btn_favorite","168","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","110","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            obj.set_tooltiptext("MENU_PG-SD-0468");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","55",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Delete");
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
        this.addIncludeScript("BAS04600M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS04600M.xfdl", function() {
        /***************************************************************************************
         * 시스템명       : IFC MES시스템
         * 업무명         : 출하 검사기준정보(기준관리 - 품질기준정보)
         * 파일명         : BAS04600M.xfdl
         * 작성자         : yanghee.kim
         * 작성일         : 2021.03.24
         *
         * 설  명         :
         *---------------------------------------------------------------------------------------
         * 변경일        변경자      변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.24   yanghee.kim   최초작성
         * 2021.05.28   yanghee.kim   신규추가시 ITEMVERSION 값변경( * => 팝업의 PRODUCTDEFVERSION)
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;    //기준관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.enterpriseId;
        this.plantId;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
            this.nfn_formInit(obj);
            this.enterpriseId = this.gf_getEnterpriseId();
        	this.plantId = this.gf_getSiteType();
        	this.fn_formInit();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 저장
         */
        this.fn_save = function(obj,e)
        {
            if (!this.gfn_dsIsUpdated(this.ds_shipmentInspectionList))
            {
                this.gfn_Message("NoSaveData", null, "warning", "ok");
                return;
            }

            //그리드 필수값 체크
            var component = this.div_work.form.grd_shipmentInspectionList;
            var strColIdList = "ITEMID,ITEMVERSION,VALIDSTATE";
            if (!this.nfn_MandatoryCheckGrid(component, strColIdList)) return;
        	if (!this.fn_gridValueCheck()) return;

            // -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveShipmentInspection";
            var sController   = "/bas04600/saveShipmentInspection.do";
            var sInDatasets   = "INPUT=ds_shipmentInspectionList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
            this.ds_shipmentInspectionList.clearData();
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow, "ENTERPRISEID",    this.enterpriseId);
        	this.ds_search.setColumn(nRow, "INSPECTIONDEFID", "ShipmentInspection");
        	this.ds_search.setColumn(nRow, "ITEMID",          this.tab_search.Tabpage1.form.edt_itemId.value);
        	this.ds_search.setColumn(nRow, "ITEMNAME",        this.tab_search.Tabpage1.form.edt_itemName.value);
        	this.ds_search.setColumn(nRow, "VALIDSTATE",      this.tab_search.Tabpage1.form.cbo_validState.value );

            var sSvcID        = "selectShipmentInspectionList";
            var sController   = "/bas04600/selectShipmentInspectionList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_shipmentInspectionList=output";
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
                if (trId == "saveShipmentInspection")
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

            if(popupId == "GRID_PRODUCTDEF185")    /*그리드-설비ID*/
            {
                oArg.arg_paramCols = "PRODUCTDEFTYPE|VALIDSTATE";
                oArg.arg_paramValues = "Product|Valid";
                oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
            }

            this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if(this.nfn_isNull(rtn)) return;

            if(sPopupId == "GRID_PRODUCTDEF185")    /*그리드-품목코드*/
            {
                var nRow = this.ds_shipmentInspectionList.rowposition;
                this.ds_shipmentInspectionList.setColumn(nRow, "ITEMID", rtn[0]);
                this.ds_shipmentInspectionList.setColumn(nRow, "ITEMNAME", rtn[1]);
        		this.ds_shipmentInspectionList.setColumn(nRow, "ITEMVERSION", rtn[2]); //2021.05.25 TOBE Modify 값변경( * => 팝업의 PRODUCTDEFVERSION)
        		this.ds_shipmentInspectionList.setColumn(nRow, "RESOURCEID", rtn[0]);
        		this.ds_shipmentInspectionList.setColumn(nRow, "RESOURCEVERSION", rtn[2]); //2021.05.25 TOBE Modify 값변경( * => 팝업의 PRODUCTDEFVERSION)
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
            this.tab_search.Tabpage1.form.cbo_validState.set_value("Valid");
        };

        /*
         * 기능 : 조회조건 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        	this.fn_formInit();
        };

        /*
         * 기능 : 삭제
         */
        this.fn_deleteShipmentInspection = function(obj,e)
        {
            var idx = this.ds_shipmentInspectionList.rowposition;
            if (this.ds_shipmentInspectionList.getRowType(idx) == "2")
            {
                this.ds_shipmentInspectionList.deleteRow(idx);
            }
        };

        /*
         * 기능 : 추가
         */
        this.fn_addShipmentInspection = function(obj,e)
        {
            var objDataset = this.ds_shipmentInspectionList;
            if (objDataset == null) return;
            var row = objDataset.addRow();

            /* KEY컬럼 기본세팅 */
        	objDataset.setColumn(row, "AQLCYCLE", "LOT");
        	objDataset.setColumn(row, "NCRCYCLE", "LOT");
        	objDataset.setColumn(row, "VALIDSTATE", "Valid");
            objDataset.setColumn(row, "PLANTID", "*");
            objDataset.setColumn(row, "PROCESSSEGID", "*");
            objDataset.setColumn(row, "INSPITEMID", "*");
            objDataset.setColumn(row, "RESOURCETYPE", "Product");
            objDataset.setColumn(row, "INSPECTIONDEFID", "ShipmentInspection");
            objDataset.setColumn(row, "INSPECTIONDEFVERSION", "*");
        	objDataset.setColumn(row, "INSPITEMVERSION", "*");
        	objDataset.setColumn(row, "PROCESSEGVERSION", "*");
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 이벤트 : 품목코드 이미지 클릭시
         */
        this.div_work_grd_shipmentInspectionList_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
            this.fn_openPop("GRID_PRODUCTDEF185","P00185"); //품목코드
        };

        /*
         * 이벤트 : 데이터 변경시
         */
        this.ds_shipmentInspectionList_onvaluechanged = function(obj,e)
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
        this.div_work_grd_shipmentInspectionList_oncloseup = function(obj,e)
        {
        	this.div_work.form.grd_shipmentInspectionList.updateToDataset();
        };

        /*
         * 기능 : 그리드 필수값 검증
         */
        this.fn_gridValueCheck = function()
        {
            var objGrid = this.div_work.form.grd_shipmentInspectionList;
            var objDataSet = this.all[objGrid.binddataset];

            for(var i=0; i < objDataSet.getRowCount(); i++)
            {
                if (objDataSet.getRowType(i) == 2)
                {
        			var itemId = this.ds_shipmentInspectionList.getColumn(i, "ITEMID");
        			var itemVersion = this.ds_shipmentInspectionList.getColumn(i, "ITEMVERSION");
        			var chkCnt = objDataSet.getCaseCount("ITEMID =='" + itemId+"' && ITEMVERSION == '" + itemVersion + "'");
        			var msg = "ITEMID: "+itemId +", ITEMVERSION: " + itemVersion;

        			if(chkCnt > 1){
        				this.gfn_Message("DuplicationItem", msg , "warning", "ok");
        				return false;
        			}
                } //end if getRowType
            } //end for

             return true;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear.addEventHandler("onclick",this.fn_searchClear,this);
            this.tab_search.Tabpage1.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.div_work.form.grd_shipmentInspectionList.addEventHandler("onexpandup",this.div_work_grd_shipmentInspectionList_onexpandup,this);
            this.div_work.form.grd_shipmentInspectionList.addEventHandler("oncloseup",this.div_work_grd_shipmentInspectionList_oncloseup,this);
            this.div_work.form.btn_delRowRowShipmentInspectionLIst.addEventHandler("onclick",this.fn_deleteShipmentInspection,this);
            this.div_work.form.btn_addRowShipmentInspectionLIst.addEventHandler("onclick",this.fn_addShipmentInspection,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.ds_shipmentInspectionList.addEventHandler("onvaluechanged",this.ds_shipmentInspectionList_onvaluechanged,this);
        };
        this.loadIncludeScript("BAS04600M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
