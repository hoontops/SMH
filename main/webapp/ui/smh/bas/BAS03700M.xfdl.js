(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAS03700M");
            this.set_titletext("BOM소요량 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_basBOMList", this);
            obj._setContents("<ColumnInfo><Column id=\"TOPASSEMBLYITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPASSEMBLYITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TOPITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"SITE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTSASSEMBLYITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTSASSEMBLYITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTSITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"ASSEMBLYITEMID\" type=\"STRING\" size=\"256\"/><Column id=\"ASSEMBLYITEMVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"ITEMNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ASSEMBLYQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ASSEMBLYCALQTY\" type=\"STRING\" size=\"256\"/><Column id=\"UOM\" type=\"STRING\" size=\"256\"/><Column id=\"PCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"CONNECTPCSPNL\" type=\"STRING\" size=\"256\"/><Column id=\"PCSMM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNM\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_param", this);
            obj._setContents("<ColumnInfo><Column id=\"P_START\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"P_END\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"P_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_allCount", this);
            obj._setContents("<ColumnInfo><Column id=\"ALLCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Button("btn_clear","171","90","102","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_SA_reset");
            obj.set_text("초기화");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btn_search","15","90","146","36",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            obj.set_tooltiptext("Toolbar_Search");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00",null,"59","15","97","0",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("2");
            obj.set_text("w\r\n15");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00","0","69","15","97",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
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

            obj = new Static("Static12_00_00_00_01_00_00",null,"54","45","20","91",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("5");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_00_00","161","96","10","27",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
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

            obj = new Static("staProductCode","0","10","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("8");
            obj.set_text("품목코드");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PRODUCTDEFID");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productDefId","108","10","143","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("9");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productDefVersion","108","35","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProductDefVersion","0","35","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("11");
            obj.set_text("Rev");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("D803F17F3C844E62AA1972AB54C4432A");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("staProcductName","0","60","103","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("12");
            obj.set_text("품목명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("ITEMNAME");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Edit("edt_productDefNM","108","60","165","20",null,null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnProductCode",null,"10","22","20","15",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_finder");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("Static12_00_00_00_01_01",null,"80","45","10","94",null,null,null,null,null,this.tab_search.Tabpage1.form);
            obj.set_taborder("15");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.tab_search.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta_searchTitle","0","47","281","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("SEARCH_CONDITION_GROUP");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","300","47",null,null,"23","0",null,null,null,null,this);
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

            obj = new Grid("grd_basBOMList","0","34",null,null,"0","0",null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_basBOMList");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"96\"/><Column size=\"78\"/><Column size=\"160\"/><Column size=\"57\"/><Column size=\"163\"/><Column size=\"86\"/><Column size=\"74\"/><Column size=\"161\"/><Column size=\"49\"/><Column size=\"94\"/><Column size=\"72\"/><Column size=\"194\"/><Column size=\"69\"/><Column size=\"69\"/><Column size=\"69\"/><Column size=\"69\"/><Column size=\"69\"/><Column size=\"69\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Site\" tooltiptext=\"Site\"/><Cell col=\"1\" text=\"최상위 품목코드\" tooltiptext=\"TOPASSEMBLYITEMID\"/><Cell col=\"2\" text=\"최상위Rev\"/><Cell col=\"3\" text=\"최상위 품목명\" tooltiptext=\"TOPITEMNAME\"/><Cell col=\"4\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"5\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"6\" text=\"상위 품목코드\" tooltiptext=\"PARENTSASSEMBLYITEMID\"/><Cell col=\"7\" text=\"상위Rev\"/><Cell col=\"8\" text=\"상위 품목명\" tooltiptext=\"PARENTSITEMNAME\"/><Cell col=\"9\" text=\"LEVEL\" tooltiptext=\"LVL\"/><Cell col=\"10\" text=\"품목코드\" tooltiptext=\"ASSEMBLYITEMID\"/><Cell col=\"11\" text=\"Rev\"/><Cell col=\"12\" text=\"품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"13\" text=\"소요량\" tooltiptext=\"ASSEMBLYQTY\"/><Cell col=\"14\" text=\"확정 소요량\" tooltiptext=\"ASSEMBLYCALQTY\"/><Cell col=\"15\" text=\"UOM\" tooltiptext=\"UOM\"/><Cell col=\"16\" text=\"합수\" tooltiptext=\"PCSPNL\"/><Cell col=\"17\" text=\"접합수\" tooltiptext=\"CONNECTPCSPNL\"/><Cell col=\"18\" text=\"산출수\" tooltiptext=\"PCSMM\"/></Band><Band id=\"body\"><Cell text=\"bind:SITE\"/><Cell col=\"1\" text=\"bind:TOPASSEMBLYITEMID\"/><Cell col=\"2\" text=\"bind:TOPASSEMBLYITEMVERSION\"/><Cell col=\"3\" text=\"bind:TOPITEMNAME\" verticalAlign=\"middle\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:USERSEQUENCE\"/><Cell col=\"5\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PARENTSASSEMBLYITEMID\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PARENTSASSEMBLYITEMVERSION\"/><Cell col=\"8\" text=\"bind:PARENTSITEMNAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:LVL\"/><Cell col=\"10\" text=\"bind:ASSEMBLYITEMID\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:ASSEMBLYITEMVERSION\"/><Cell col=\"12\" text=\"bind:ITEMNAME\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:ASSEMBLYQTY\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:ASSEMBLYCALQTY\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:UOM\"/><Cell col=\"16\" text=\"bind:PCSPNL\" textAlign=\"right\"/><Cell col=\"17\" text=\"bind:CONNECTPCSPNL\" textAlign=\"right\"/><Cell col=\"18\" text=\"bind:PCSMM\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","0","108","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("품목 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("GRIDPRODUCTLIST");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_basBOMList","sta_subTitle:17","0",null,"34","762",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_xlDn_grd_basBOMList",null,"6","29","24","0",null,null,null,null,null,this.div_work.form);
            obj.set_initvalueid("x");
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_grdExcelDown");
            obj.set_tooltiptext("GridExport");
            this.div_work.addChild(obj.name, obj);

            obj = new Div("div_header","0","0",null,"47","22",null,null,null,null,null,this);
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

            obj = new Button("btn_allSearchDown",null,"16","141","24","109",null,null,null,null,null,this.div_header.form);
            obj.set_taborder("8");
            obj.set_text("전체 Excel 다운로드");
            obj.set_cssclass("btn_com_basic");
            obj.set_fittocontents("width");
            this.div_header.addChild(obj.name, obj);

            obj = new Grid("grd_basBOMListExl","10","787",null,null,"313","-733",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_basBOMList");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_autoenter("select");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"122\"/><Column size=\"85\"/><Column size=\"209\"/><Column size=\"81\"/><Column size=\"113\"/><Column size=\"232\"/><Column size=\"148\"/><Column size=\"93\"/><Column size=\"220\"/><Column size=\"61\"/><Column size=\"148\"/><Column size=\"96\"/><Column size=\"237\"/><Column size=\"115\"/><Column size=\"115\"/><Column size=\"115\"/><Column size=\"112\"/><Column size=\"112\"/><Column size=\"112\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"최상위 품목코드\" tooltiptext=\"TOPITEMNAME\"/><Cell col=\"1\" text=\"Rev\" tooltiptext=\"PARENTSITEMNAME\"/><Cell col=\"2\" text=\"최상위 품목명\" tooltiptext=\"ITEMNAME\"/><Cell col=\"3\" text=\"Site\"/><Cell col=\"4\" text=\"공정\"/><Cell col=\"5\" text=\"공정명\"/><Cell col=\"6\" text=\"상위 품목코드\"/><Cell col=\"7\" text=\"Rev\"/><Cell col=\"8\" text=\"상위 품목명\"/><Cell col=\"9\" text=\"Level\"/><Cell col=\"10\" text=\"품목코드\"/><Cell col=\"11\" text=\"Rev\"/><Cell col=\"12\" text=\"품목명\"/><Cell col=\"13\" text=\"소요량\"/><Cell col=\"14\" text=\"확정소요량\"/><Cell col=\"15\" text=\"UOM\"/><Cell col=\"16\" text=\"합수\"/><Cell col=\"17\" text=\"접합수\"/><Cell col=\"18\" text=\"산출수\"/></Band><Band id=\"body\"><Cell text=\"bind:TOPASSEMBLYITEMID\" verticalAlign=\"middle\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:TOPASSEMBLYITEMVERSION\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:TOPITEMNAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:SITE\"/><Cell col=\"4\" text=\"bind:USERSEQUENCE\"/><Cell col=\"5\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PARENTSASSEMBLYITEMID\"/><Cell col=\"7\" text=\"bind:PARENTSASSEMBLYITEVERSION\"/><Cell col=\"8\" text=\"bind:PARENTSITEMNAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:LVL\"/><Cell col=\"10\" text=\"bind:ASSEMBLYITEMID\"/><Cell col=\"11\" text=\"bind:ASSEMBLYITEMVERSION\"/><Cell col=\"12\" text=\"bind:ITEMNAME\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:ASSEMBLYQTY\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:ASSEMBLYCALQTY\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:UOM\"/><Cell col=\"16\" text=\"bind:PCSPNL\" textAlign=\"right\"/><Cell col=\"17\" text=\"bind:CONNECTPCSPNL\" textAlign=\"right\"/><Cell col=\"18\" text=\"bind:PCSMM\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAS03700M.xfdl","lib::lib_bas.xjs");
        this.registerScript("BAS03700M.xfdl", function() {

        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: BOM 소요량 조회
         * 파일명 		: BAS03700M.xfdl
         * 작성자 		: 김기수
         * 작성일 		: 2021.03.05
         *
         * 설  명		: 기준정보 - 기준정보조회 - BOM 소요량 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.03.05	김기수   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_AllCountRow();

        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {

        	if(this.fn_searchValidate() == false) return;

        	this.ds_basBOMList.clearData();
            this.ds_search.clearData();

        	var sRow = this.ds_search.addRow();


        	this.ds_search.setColumn(sRow, "PRODUCTDEFID", this.tab_search.Tabpage1.form.edt_productDefId.value);
        	this.ds_search.setColumn(sRow, "PRODUCTDEFVERSION", this.tab_search.Tabpage1.form.edt_productDefVersion.value);
        	//this.ds_search.setColumn(sRow, "PRODUCTDEFNM", this.tab_search.Tappage1.form.edt_productDefNM.value);
        	this.ds_search.setColumn(sRow, "LANGUAGETYPE", nexacro.getApplication().gds_userInfo.getColumn(0,"gv_languageType"));

        	var sSvcID 			= "selectBasBOMList";
        	var sController 	= "/bas03700/selectBasBOMList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_basBOMList=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.fn_searchValidate = function ()
        {
        	var component = this.tab_search.Tabpage1;
        	var strColIdList = "edt_productDefId";
        	var strColNmList = "품목코드";
        	return this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        };

        /*

         * 기능 : 저장
         */



        /*
         * 기능 : 삭제
         */



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
        /*
         *	기능 : 팝업 관련
         */
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	switch(sPopupId) {
        	case "SEARCH_PRODUCTD":
        	{
        		this.tab_search.Tabpage1.form.edt_productDefId.set_value(rtn[0]);
        		this.tab_search.Tabpage1.form.edt_productDefVersion.set_value(rtn[2]);
        		this.tab_search.Tabpage1.form.edt_productDefNM.set_value(rtn[1]);
        		break;
        	}

        	default:
        	}

        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        this.fn_AllCountRow = function()
        {

        	this.ds_allCount.clearData();

        	var sSvcID 			= "selectBasAllCount";
        	var sController 	= "/bas03700/selectBasAllCount.do";
        	var sInDatasets 	= "";
        	var sOutDatasets 	= "ds_allCount=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        	//alert(this.ds_allCount.getColumn(0,"ALLCOUNT"));

        };



        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/


        this.tab_search_Tabpage1_btnProductCode_onclick = function(obj,e)
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
        	var popupId = "SEARCH_PRODUCTD";
        	var oArg = {};



        	var pPRODUCTDEFID = this.tab_search.Tabpage1.form.edt_productDefId.value;
        	var pPRODUCTDIVISION ="Product";

        	if(this.nfn_isNull(pPRODUCTDEFID)) {
        		pPRODUCTDEFID="";
        	}


        	oArg.arg_type = "BA";
        	oArg.arg_popupCd = "P00105";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "PRODUCTDEFID|PRODUCTDEFNAME|PRODUCTDEFVERSION";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues ="";
        	oArg.arg_searchStr = "TXTPRODUCTDEFNAME=" + pPRODUCTDEFID + "|PRODUCTDIVISION=" +pPRODUCTDIVISION;

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"width=830,height=700");
        };



        this.div_header_btn_AllSearchDown_onclick = function(obj,e)
        {
        	var nFistPage = 1;
        	var nLastPage = nexacro.Decimal(this.ds_allCount.getColumn(0,"ALLCOUNT").toString());
        	this.ds_param.clearData();
        	this.ds_param.addRow();
        	this.ds_param.setColumn("0", "P_START", 1);
        	this.ds_param.setColumn("0", "P_END"  , nLastPage);                                      //조회 단위 건수
        	this.ds_param.setColumn("0", "P_COUNT"  , 90000);                                      //전체 데이터 건수

        	var sSvcID 			= "selectBasBOMListExcel";
        	var sController 	= "/bas03700/selectBasBOMListExcel.do";
        	var sInDatasets 	= "INPUT=ds_param";
        	var sArgs="";
        	var sStr="grd_basBOMListExl";
        	var sStrSht="allBOMList";
        	var sFileName="allBIMList";
        	var sFileType="EXCEL";

        	this.gfn_export_bigdata_excel(sSvcID,sController,sInDatasets,sArgs,sStr,sStrSht,sFileName,sFileType);
        };

        this.tab_search_Tabpage1_edt_PRODUCTDEFID_onkeydown = function(obj,e)
        {
        	if (e.keycode != 13) return;

        	this.ds_search.setColumn(0,"PRODUCTDEFID",obj.value);
        	this.tab_search_Tabpage1_btnProductCode_onclick();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.tab_search.Tabpage1.form.edt_productDefId.addEventHandler("onkeydown",this.tab_search_Tabpage1_edt_PRODUCTDEFID_onkeydown,this);
            this.tab_search.Tabpage1.form.btnProductCode.addEventHandler("onclick",this.tab_search_Tabpage1_btnProductCode_onclick,this);
            this.div_header.form.btn_print.addEventHandler("onclick",this.fn_print,this);
            this.div_header.form.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_header.form.btn_allSearchDown.addEventHandler("onclick",this.div_header_btn_AllSearchDown_onclick,this);
        };
        this.loadIncludeScript("BAS03700M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
