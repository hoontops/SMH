(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS03800M");
            this.set_titletext("치공구 사용품목 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1258,747);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_toolList", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSUOM\" type=\"STRING\" size=\"256\"/><Column id=\"OPERATIONDESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLENAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSERLAYER1\" type=\"STRING\" size=\"256\"/><Column id=\"FILMUSERLAYER2\" type=\"STRING\" size=\"256\"/><Column id=\"BORDESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SITE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNM\" type=\"STRING\" size=\"256\"/><Column id=\"DURABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_search","0","47","290",null,null,"18",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            obj.set_cssclass("tab_search");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_search);
            obj.set_text("Tabpage1");
            this.tab_search.addChild(obj.name, obj);

            obj = new Button("btn_clear2","171","173","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","173","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"190","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","200","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("3");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01",null,"0","45","10","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_00",null,"153","45","20","96",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","179","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("6");
            obj.set_text("w\r\n10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00",null,"29","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("7");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_01",null,"54","45","5","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_01_00",null,"79","45","5","89",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_01_00_00",null,"104","45","5","89",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_00_01_00_00_00",null,"129","45","5","89",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("h5");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label00","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("Site");
            obj.set_cssclass("sta_WF_label");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_plantId","108","10","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_codecolumn("C,SiteType,ALL,Y,Y");
            obj.set_text("CCT");
            obj.set_value("");
            obj.set_index("-1");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("label01","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("THEPRODUCTTYPE");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Combo("cmb_productDefType","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_codecolumn("C,ProductDivision2,ALL,Y,Y");
            obj.set_text("전체조회");
            obj.set_value("");
            obj.set_index("0");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductCode","0","62","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("16");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productDefId","107","60","143","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("17");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnProductCode",null,"60","22","20","16",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductDefVersion","-1","85","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("19");
            obj.set_text("Rev");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFVERSION");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productDefVersion","107","85","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("20");
            obj.set_enable("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProcductName","0","110","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("21");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productDefNM","108","110","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("22");
            obj.set_enable("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staDurableId","0","136","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("23");
            obj.set_text("치공구 코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("DurableId");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_durableCode","107","134","143","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("24");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnDurableCode",null,"134","22","20","16",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("25");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","281","34",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"1","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_formscrollbarsize("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","112","-63","101","20",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_basToolList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_toolList");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"110\"/><Column size=\"64\"/><Column size=\"255\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"92\"/><Column size=\"79\"/><Column size=\"426\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Site\" tooltiptext=\"Site\"/><Cell col=\"1\" tooltiptext=\"PRDOUCTDEFID\" text=\"품목코드\"/><Cell col=\"2\" tooltiptext=\"PRODUCTDEFVERSION\" text=\"Rev\"/><Cell col=\"3\" tooltiptext=\"PRODUCTDEFNAME\" text=\"품목명\"/><Cell col=\"4\" tooltiptext=\"USERSEQUENCE\" text=\"공정 수순\"/><Cell col=\"5\" tooltiptext=\"PROCESSSEGMENTID\" text=\"공정\"/><Cell col=\"6\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"7\" tooltiptext=\"RESOURCEID\" text=\"치공구ID\"/><Cell col=\"8\" text=\"치공구Rev\" tooltiptext=\"RESOURCEVERSION\"/><Cell col=\"9\" tooltiptext=\"DURABLENAME\" text=\"치공구 명\"/></Band><Band id=\"body\"><Cell text=\"bind:PLANTID\"/><Cell col=\"1\" text=\"bind:PRODUCTDEFID\"/><Cell col=\"2\" text=\"bind:PRODUCTDEFVERSION\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" displaytype=\"normal\" edittype=\"none\" editinputtype=\"number\" editmaxlength=\"4\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:USERSEQUENCE\" displaytype=\"normal\" edittype=\"none\" editinputtype=\"number\" editmaxlength=\"4\"/><Cell col=\"5\" text=\"bind:PROCESSSEGMENTID\" displaytype=\"normal\" edittype=\"none\" editinputtype=\"number\" editmaxlength=\"4\"/><Cell col=\"6\" text=\"bind:PROCESSSEGMENTNAME\" displaytype=\"normal\" edittype=\"none\" editinputtype=\"number\" editmaxlength=\"4\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:RESOURCEID\" edittype=\"none\"/><Cell col=\"8\" text=\"bind:RESOURCEVERSION\"/><Cell col=\"9\" text=\"bind:DURABLENAME\" displaytype=\"normal\" edittype=\"none\" combocodecol=\"C,ValidState,,Y,Y\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","108","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("GRIDPRODUCTUSEDURABLE");
            obj.set_text("치공구 사용품목 조회");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_toolList","sta_subTitle:17","0",null,"34","762",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basToolList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","0",null,null,null,null,null,this);
            obj.set_taborder("3");
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

            obj = new Button("btn_print",null,"16","26","24","29",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("1");
            obj.set_cssclass("btn_com_print");
            obj.set_tooltiptext("Toolbar_Print");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_help",null,"16","26","24","55",null,null,null,null,null,this.div_header.form);
            obj.set_initvalueid("x");
            obj.set_taborder("2");
            obj.set_cssclass("btn_com_help");
            obj.set_tooltiptext("MANUAL");
            this.div_header.addChild(obj.name, obj);

            obj = new Static("sta_title","30","16","100","24",null,null,null,null,null,null,this.div_header.form);
            obj.set_taborder("4");
            obj.set_text("Enterprise 정의");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("MENU_PG-SD-0121");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.parent.parent.name,\"MENU_NM\")");
            this.div_header.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:10","16","24","24",null,null,null,null,null,null,this.div_header.form);
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
        this.addIncludeScript("BAS03800M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS03800M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 치공구 사용품목 조회
         * 파일명 		: BAS03800.xfdl
         * 작성자 		: 김기수
         * 작성일 		: 2021.03.11
         *
         * 설  명		: 기준정보 > 기준정보조회 >치공구 사용품목조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.11	김기수   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
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
        	//Site Session값으로 기본세팅
        	this.tab_search.Tabpage1.form.cmb_plantId.set_value(this.gf_getSiteType());
        	this.tab_search.Tabpage1.form.cmb_productDefType.set_value(NULL);
        	this.tab_search.Tabpage1.form.edt_productDefId.set_value("");
        	this.tab_search.Tabpage1.form.edt_productDefVersion.set_value("");
        	this.tab_search.Tabpage1.form.edt_productDefNM.set_value("");
        	this.tab_search.Tabpage1.form.edt_durableCode.set_value("");
        };
        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_toolList.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	var sRow = this.ds_search.addRow();

        	this.ds_search.setColumn(sRow, "PRODUCTDEFID", this.tab_search.Tabpage1.form.edt_productDefId.value);
        	this.ds_search.setColumn(sRow, "PRODUCTDEFVERSION", this.tab_search.Tabpage1.form.edt_productDefVersion.value);
        	//this.ds_search.setColumn(sRow, "PRODUCTDEFNM", this.tab_search.Tappage1.form.edt_productDefNM.value);
        	this.ds_search.setColumn(sRow, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));
        	this.ds_search.setColumn(sRow, "SITE" , this.tab_search.Tabpage1.form.cmb_plantId.value);
        	this.ds_search.setColumn(sRow, "PRODUCTTYPE" , this.tab_search.Tabpage1.form.cmb_productDefType.value);
        	this.ds_search.setColumn(sRow, "DURABLEDEFID" , this.tab_search.Tabpage1.form.edt_durableCode.value);



        	var sSvcID 			= "selectBasToolList";
        	var sController 	= "/bas03800/selectBasToolList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_toolList=output";
        	var sArgs 			= "";
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
        	var opts = "width=800,height=500";


        	oArg.arg_popupCd = popId;
        	oArg.arg_popupNm = "";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	//oArg.arg_searchStr = "";

        	if(svcId =="SRCH_PRODUCTCODE"){
        		var pProductdefid = this.tab_search.Tabpage1.form.edt_productDefId.value;
        		var pPRODUCTDIVISION ="Product";
        		if(this.nfn_isNull(pProductdefid)) {
        			pProductdefid="";
        		}

        		oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        		oArg.arg_type = "BA";
        		oArg.arg_searchStr = "TXTPRODUCTDEFNAME=" + pProductdefid + "|PRODUCTDIVISION=" +pPRODUCTDIVISION;
        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        	}
        	else if(svcId=="SRCH_DURABLECODE"){

        		var pDurabledefid = this.tab_search.Tabpage1.form.edt_durableCode.value;
        		var pPRODUCTDIVISION ="Product";
        		if(this.nfn_isNull(pDurabledefid)) {
        			pDurabledefid="";
        		}

        		oArg.arg_type = "CA";
        		oArg.arg_rtnCols = "DURABLEDEFID";
        		oArg.arg_searchStr = "DURABLE=" + pDurabledefid ;
        		this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        	}
        }

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SRCH_PRODUCTCODE")
        	{
        		this.tab_search.Tabpage1.form.edt_productDefId.set_value(rtn[0]);
        		this.tab_search.Tabpage1.form.edt_productDefVersion.set_value(rtn[2]);
        		this.tab_search.Tabpage1.form.edt_productDefNM.set_value(rtn[1]);

        	}
        	else if (sPopupId =="SRCH_DURABLECODE")
        	{
        		var objId = "";

        		for(var i=0; i<rtn.length; i++){
        			var colArray = rtn[i];
        			objId += ","+ colArray[0];
        		}
        		this.tab_search.Tabpage1.form.edt_durableCode.set_value(objId.substr(1));
        	}

        }
        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.tab_search_Tabpage1_btnDurableCode_onclick = function(obj,e)
        {
        	this.fn_openPop("SRCH_DURABLECODE","P00140"); //치공구 조회
        };

        this.tab_search_Tabpage1_btnProductCode_onclick = function(obj,e)
        {
        	this.fn_openPop("SRCH_PRODUCTCODE","P00105"); //제품코드 조회
        };

        this.tab_search_Tabpage1_edt_PRODUCTDEFID_onkeydown = function(obj,e)
        {
        	if (e.keycode != 13) return;

        	this.ds_search.setColumn(0,"PRODUCTDEFID",obj.value);
        	this.tab_search_Tabpage1_btnProductCode_onclick();
        };

        this.tab_search_Tabpage1_edt_durableCode_onkeydown = function(obj,e)
        {
        	if (e.keycode != 13) return;

        	this.ds_search.setColumn(0,"DURABLEID",obj.value);
        	this.tab_search_Tabpage1_btnDurableCode_onclick();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.btn_clear2.addEventHandler("onclick",this.fn_formInit,this);
            this.tab_search.Tabpage1.form.edt_productDefId.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_PRODUCTDEFID_onkeydown,this);
            this.tab_search.Tabpage1.form.btnProductCode.addEventHandler("onclick",this.tab_search_Tabpage1_btnProductCode_onclick,this);
            this.tab_search.Tabpage1.form.edt_durableCode.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_durableCode_onkeydown,this);
            this.tab_search.Tabpage1.form.btnDurableCode.addEventHandler("onclick",this.tab_search_Tabpage1_btnDurableCode_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_toolList.addEventHandler("onvaluechanged",this.ds_stayingTime_onvaluechanged,this);
        };
        this.loadIncludeScript("BAS03800M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
