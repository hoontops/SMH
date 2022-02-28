(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("MTM00100M");
            this.set_titletext("마스터품목(자재)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_materialManagementList", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMUOM\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TOPCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"MIDDLECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALCLASS\" type=\"STRING\" size=\"256\"/><Column id=\"WAERHOUSE\" type=\"STRING\" size=\"256\"/><Column id=\"CONVENDORNAME\" type=\"STRING\" size=\"256\"/><Column id=\"MAKER\" type=\"STRING\" size=\"256\"/><Column id=\"MAKEBUYTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTCONTROL\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SITE\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALID\" type=\"STRING\" size=\"256\"/><Column id=\"MATERIALNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_plantId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_innerdataset("");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label01","0","34","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02","0","59","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("자재ID");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_validState","108","34","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_codecolumn("C,ValidState,ALL,Y,Y");
            obj.set_datacolumn("data");
            obj.set_innerdataset("");
            obj.set_text("유효");
            obj.set_value("");
            obj.set_index("1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edtMaterialID","108","59",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_clear2","171","124","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","124","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"69","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","79","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"30","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"104","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","130","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_01",null,"54","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_01_00",null,"79","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edtMaterialName","108","84",null,"20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label02_00","0","84","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            obj.set_text("자재명");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","281","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div_00");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_mtmMaterialManagementList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_materialManagementList");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"87\"/><Column size=\"104\"/><Column size=\"80\"/><Column size=\"71\"/><Column size=\"77\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Site\" tooltiptext=\"PLANTID\"/><Cell col=\"1\" text=\"자재ID\" tooltiptext=\"ITEMID\"/><Cell col=\"2\" text=\"자재명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"3\" text=\"단위\" tooltiptext=\"ITEMUOM\"/><Cell col=\"4\" text=\"자재유형\" tooltiptext=\"MATERIALTYPE\"/><Cell col=\"5\" text=\"대분류\" tooltiptext=\"TOPCLASSID\"/><Cell col=\"6\" text=\"중분류\" tooltiptext=\"MIDDLECLASSID\"/><Cell col=\"7\" text=\"소분류\" tooltiptext=\"MATERIALCLASS\"/><Cell col=\"8\" text=\"입고창고\" tooltiptext=\"WAERHOUSE\"/><Cell col=\"9\" text=\"공급사\" tooltiptext=\"CONVENDORNAME\"/><Cell col=\"10\" text=\"Maker\" tooltiptext=\"MAKER\"/><Cell col=\"11\" text=\"구매유형\" tooltiptext=\"MAKEBUYTYPE\"/><Cell col=\"12\" text=\"LOT관리여부\" tooltiptext=\"LOTCONTROL\"/><Cell col=\"13\" text=\"유효상태\" tooltiptext=\"VALIDSTATE\"/><Cell col=\"14\" text=\"생성일\" tooltiptext=\"CREATEDTIME\"/><Cell col=\"15\" text=\"수정일\" tooltiptext=\"MODIFIEDTIME\"/></Band><Band id=\"body\"><Cell text=\"bind:PLANTID\"/><Cell col=\"1\" text=\"bind:ITEMID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:ITEMNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:ITEMUOM\"/><Cell col=\"4\" text=\"bind:MATERIALTYPE\"/><Cell col=\"5\" text=\"bind:TOPCLASSID\"/><Cell col=\"6\" text=\"bind:MIDDLECLASSID\"/><Cell col=\"7\" text=\"bind:MATERIALCLASS\"/><Cell col=\"8\" text=\"bind:WAERHOUSE\"/><Cell col=\"9\" text=\"bind:CONVENDORNAME\"/><Cell col=\"10\" text=\"bind:MAKER\"/><Cell col=\"11\" text=\"bind:MAKEBUYTYPE\"/><Cell col=\"12\" text=\"bind:LOTCONTROL\"/><Cell col=\"13\" text=\"bind:VALIDSTATE\"/><Cell col=\"14\" text=\"bind:CREATEDTIME\" displaytype=\"date\"/><Cell col=\"15\" text=\"bind:MODIFIEDTIME\" displaytype=\"date\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","108","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_text("마스터품목(자재)");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_materialManagementList","130","0",null,"34","698",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_mtmMaterialManagementList",null,"6","29","24","1",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrolltype("both");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,null,"0","0",null,null,null,null,this.div_header.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_titleBG");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_reset",null,"16","26","24","0",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("0");
            obj.set_cssclass("btn_com_reset");
            obj.set_tooltiptext("Toolbar_Initialization");
            obj.set_text("");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"16","26","24","31",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","62",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"16","26","24","93",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("3");
            obj.set_cssclass("btn_com_del");
            obj.set_tooltiptext("Toolbar_Delete");
            obj.set_visible("false");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"16","26","24","124",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_com_save");
            obj.set_tooltiptext("Toolbar_Save");
            obj.set_visible("false");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_new",null,"16","26","24","155",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("5");
            obj.set_cssclass("btn_com_new");
            obj.set_tooltiptext("Toolbar_New");
            obj.set_text("");
            obj.set_visible("false");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","58","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-SD-0291");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:10","16","24","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_favorite");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","0","16","30","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_searchOpen");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("Static16","47","0","60","20",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("9");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h20");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_exec",null,"55","75","21","39",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("자재Spec");
            obj.set_cssclass("btn_DR_Basic2");
            obj.set_tooltiptype("hover");
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
        this.addIncludeScript("MTM00100M.xfdl","lib::lib_mtm.xjs");
        this.registerScript("MTM00100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 마스터품목(자재)
         * 파일명 		: MTM00100M.xfdl
         * 작성자 		: 유창균
         * 작성일 		: 2021.04.30
         *
         * 설  명		: 자재관리 > 자재 기준정보 > 마스터품목(자재)
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.30	유창균   	최초작성
         * 2021.07.22	김진현		정렬및 like 조건 수정
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_mtm.xjs"); /*include "lib::lib_mtm.xjs"*/;	//기준관리 공통 라이브러리 include
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
        	this.fn_formInit();
        };

        this.fn_formInit = function ()
        {
        	this.tab_search.Tabpage1.form.cmb_plantId.set_value(this.gf_getSiteType()); //Site Session값으로 기본세팅
        	this.tab_search.Tabpage1.form.cmb_validState.set_value(NULL);
        	this.tab_search.Tabpage1.form.edtMaterialID.set_value("");			//자재ID
        	this.tab_search.Tabpage1.form.edtMaterialName.set_value("");		//자재명
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_materialManagementList.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	var sRow = this.ds_search.addRow();

        	this.ds_search.setColumn(sRow, "SITE", this.tab_search.Tabpage1.form.cmb_plantId.value);
        	this.ds_search.setColumn(sRow, "VALIDSTATE", this.tab_search.Tabpage1.form.cmb_validState.value);
        	this.ds_search.setColumn(sRow, "MATERIALID", this.tab_search.Tabpage1.form.edtMaterialID.value);
        	this.ds_search.setColumn(sRow, "MATERIALNAME", this.tab_search.Tabpage1.form.edtMaterialName.value);

        	var sSvcID 			= "selectMtmMaterialManagementList";
        	var sController 	= "/mtm00100/selectMtmMaterialManagementList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_materialManagementList=output";
        	var sArgs 			= "";
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
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            switch(sPopupId)
        	{
        		case "SCH_MTR_NM" :
        			this.mtrID = rtn[0];			// 자재 ID

        			break;

        		default :
        			break;
        	}
        };
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.btn_exec_onclick = function(obj,e)
        {
        	var popupId = "MTM_DETAIL"; //popupid
        	var oArg = {};
        	var nRow = this.ds_materialManagementList.rowposition;
        	var opts = "width=1180,height=252";

        	// 기입력된 값이 있으면
        	oArg.arg_mtrID = this.ds_materialManagementList.getColumn(nRow, "ITEMID");

        	//oArg.inspItemId            = this.ds_selfInspectionList.getColumn(nRow, "INSPITEMID");
        	//oArg.arg_mtrType = this.divSearch01.form.arg_mtrType.value;


        	//this.divSearch01.form.edt_mtrID.set_value(this.parent.arg_mtrID);
        	//this.divSearch01.form.edt_mtrType.set_value(this.parent.arg_mtrType);
        	/*this.divSearch01.form.edt_mtrLength.set_value(this.parent.arg_mtrLength);
        	this.divSearch01.form.edt_mtrWidth.set_value(this.parent.arg_mtrWidth);
        	this.divSearch01.form.edt_mrtOrderPolicy.set_value(this.parent.arg_mtrOrderPolicy);
        	this.divSearch01.form.edt_mtrHalogen.set_value(this.parent.arg_mtrHalogen);
        	this.divSearch01.form.edt_mtrConversionFactor.set_value(this.parent.arg_mtrConversionFactor);
        	this.divSearch01.form.edt_mtrPurchaseMan.set_value(this.parent.arg_mtrPurchaseMan);
        	this.divSearch01.form.edt_mtrTxtPrice.set_value(this.parent.arg_mtrTxtPrice);
        	this.divSearch01.form.edt_mtrReceiptRoute.set_value(this.parent.arg_mtrReceiptRoute);
        	this.divSearch01.form.edt_mtrReceiptLocator.set_value(this.parent.mtrReceiptLocator);
        	this.divSearch01.form.edt_mtrMaterialOutType.set_value(this.parent.arg_mtrMaterialOutType);
        	this.divSearch01.form.edt_mtrMakeReceiptType.set_value(this.parent.arg_mtrMakeReceiptType);
        	this.divSearch02.form.edt_mtrAccountGruop.set_value(this.parent.arg_mtrAccountGruop);
        	this.divSearch02.form.edt_mtrAccountCode.set_value(this.parent.arg_mtrAccountCode);
        	this.divSearch02.form.edt_mtrAccountType.set_value(this.parent.arg_mtrAccountType);
        	this.divSearch02.form.edt_mtrRecordedType.set_value(this.parent.arg_mtrRecordedType);
        	*/

        	this.gfn_openPopup(popupId,"mtm::MTM00100P.xfdl",oArg,opts);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear2.addEventHandler("onclick",this.fn_formInit,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_new.addEventHandler("onclick",this.fn_new,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.btn_exec.addEventHandler("onclick",this.btn_exec_onclick,this);
        };
        this.loadIncludeScript("MTM00100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
