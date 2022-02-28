(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSY03100M");
            this.set_titletext("언어사전관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,637);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmdDictionary", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"NM_K\" type=\"STRING\" size=\"256\"/><Column id=\"NM_E\" type=\"STRING\" size=\"256\"/><Column id=\"NM_C\" type=\"STRING\" size=\"256\"/><Column id=\"NM_V\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROWS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DICTIONARYCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"DICTIONARYID\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"DICTIONARYCLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"desc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">Y</Col><Col id=\"desc\">Y</Col></Row><Row><Col id=\"cd\">N</Col><Col id=\"desc\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0%","30",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dictionaryid","80","10","164","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_inputmode("normal");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","21","10","40","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_text("사전ID");
            obj.set_tooltiptext("DICTIONARYID");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_dictionaryname","316","10","173","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","249","10","63","18",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("사전명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_tooltiptext("DICTIONARYNAME");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","0%","0",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0%","-1",null,"43","97.83%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","0%",null,null,"10","76.88%","0",null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","6.81%","1",null,null,"90.99%","-1",null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","25%","0",null,"43","72.8%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static09","33.7%","-1",null,null,"65.2%","1",null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","520","10","65","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text("사전그룹");
            obj.set_cssclass("sta_WF_Label");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            obj.set_tooltiptext("DICTIONARYCLASSNAME");
            obj.set_textAlign("right");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_dictionaryclassid","595","10","110","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_codecolumn("C,DictionaryClass,ALL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_DR_GridSave");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static12","0%","73",null,"15","87.17%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0.87%","81",null,"15","86.3%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0%","109",null,"10","87.17%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cmdDictionary","0","120",null,null,"0.87%","38",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_cmdDictionary");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"104\"/><Column size=\"158\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"193\"/><Column size=\"58\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사전그룹\" tooltiptext=\"DICTIONARYCLASSID\"/><Cell col=\"1\" text=\"사전ID\" tooltiptext=\"DICTIONARYID\"/><Cell col=\"2\" text=\"사전명(한글)\" tooltiptext=\"580FD2421C4B4691BBB4566F0C626A2A\"/><Cell col=\"3\" text=\"사전명(영문)\" tooltiptext=\"CC5280D42A094CB68475ED36A8152B5D\"/><Cell col=\"4\" text=\"사전명(C)\" tooltiptext=\"36260B9F346E4A2DBD9C907CF7C50DD7\"/><Cell col=\"5\" text=\"사전명(V)\" tooltiptext=\"712A61E1C34A487DA229DFC7C7AADA6A\"/><Cell col=\"6\" text=\"설명\" tooltiptext=\"SPCRULESDISCRIPTION\"/><Cell col=\"7\" text=\"사용여부\" tooltiptext=\"VALIDSTATE\"/></Band><Band id=\"body\"><Cell text=\"bind:DICTIONARYCLASSID\" edittype=\"normal\" textAlign=\"left\" combocodecol=\"C,DictionaryClass,SEL,Y,Y\" displaytype=\"combotext\"/><Cell col=\"1\" text=\"bind:DICTIONARYID\" edittype=\"normal\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:NM_K\" edittype=\"normal\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:NM_E\" edittype=\"normal\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"4\" text=\"bind:NM_C\" edittype=\"normal\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"5\" text=\"bind:NM_V\" edittype=\"normal\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"6\" text=\"bind:DESCRIPTION\" edittype=\"normal\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"7\" text=\"bind:USE_YN\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_yn\" combocodecol=\"C,UseYn,SEL,Y,Y\" combodatacol=\"desc\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add01",null,"95","67","20","80",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("행추가");
            obj.set_cssclass("btn_DR_GridPlus");
            obj.set_tooltiptext("GridAdd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del01",null,"95","67","20","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_DR_GridMinus");
            obj.set_tooltiptext("GridDelete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"0","60","20","141",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_DR_GridSearch");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"0","60","20","76",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_DR_GridReset");
            obj.set_tooltiptext("초기화");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0%","21",null,"9","1.09%",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","80","108","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("언어사전 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("GRIDDICTIONARYLIST");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt","sta_subTitle:17","80",null,"34","703",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","285",null,"329","10",null,"30",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","285",null,"329","20",null,"10",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("페이징처리영역");
            obj.set_visible("false");
            obj.set_background("lightskyblue");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Div("div_page","27.07%",null,null,"20","27.72%","10",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_url("common::com_paging.xfdl");
            obj.set_background("transparent");
            obj.set_color("rgba(68,68,68,1)");
            obj.set_font("9pt \"Dotum\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","285",null,"329","10",null,"0",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,637,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_paging.xfdl");
        };
        
        // User Script
        this.registerScript("CMSY03100M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 사전 관리
         * 파일명 		: cmsy03100.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2017.03.18
         *
         * 설  명		: 공통코드 조회/수정/삭제/엑셀다운로드 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.01.11	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        // include "lib::comLib.xjs";
        // include "cuslib::nbdfComLib.xjs";

        // var gfnXjs = new GfnXjs();

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_currDate;

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	// 엔터키 설정 함수(조회)
        	//this.gfn_setEnterSearch(this.div_search, "nfn_search");
        	this.div_page.set_visible(true);

        	// paging
        	this.fn_paging_onload(obj);
        	// paging end
        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	if (this.isValidObject(obj))
        	{
        		this.page = 1;
        		this.div_page.form.setCurrentPage(this.page);
        	}

        	this.ds_cmdDictionary.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "DICTIONARYID", this.div_search.form.edt_dictionaryid.value);
        	this.ds_search.setColumn(0, "DICTIONARYNAME", this.div_search.form.edt_dictionaryname.value);
        	this.ds_search.setColumn(0, "DICTIONARYCLASSID", this.div_search.form.cbo_dictionaryclassid.value);
        	this.ds_search.setColumn(0, "PAGE_NUMBER", this.page);
        	this.ds_search.setColumn(0, "PAGE_SIZE", this.LIST_COUNT);

        	var sSvcID = "selectCmdDictionaryList";
        	var sController = "/cmsy03100/selectCmdDictionaryList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_cmdDictionary=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdDictionaryList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_cmdDictionary) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	var component = this.grd_cmdDictionary;

        	// 2022-02-17일 추가
        	// 필수항목 중국, 베트남 컬럼 제거
        	var strColIdList = "DICTIONARYCLASSID,DICTIONARYID,NM_K,NM_E,USE_YN";

        	var strColNmList = "";
        	var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList, strColNmList);
        	if (rtn == false) return;

        	//var bOK = nexacro.getApplication().confirm("저장하시겠습니까?");
        	var bOK = this.gfn_Message("InfoPopupSave", null, "conf", "yesno");
        	if (bOK == false) return;

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveCmdDictionary";
        	var sController = "/cmsy03100/saveCmdDictionary.do";
        	var sInDatasets = "INPUT=ds_cmdDictionary:U";
        	var sOutDatasets = "ds_result=output";

        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "saveCmdDictionary");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD < 0)
        	{
        		if (trId.substring(0, 6) == "select")
        		{
        			this.gfn_Message("ErrorOnSearch", trId + errMsg, "error", "ok");
        		}
        		else
        		{
        			this.gfn_Message("ErrorOnSave", trId + errMsg, "error", "ok");
        		}
        	}
        	else
        	{
        		if (trId == "selectCmdDictionaryList")
        		{
        			this.div_page.set_visible(true);
        			this.div_page.form.setPage(this.ds_cmdDictionary.getColumn(0, "TOTAL_ROWS"));
        			this.sta_cnt.set_text('Count : <fc v="#f31d24">'+this.nfn_numberWithCommas(this.ds_cmdDictionary.getColumn(0, "TOTAL_ROWS"))+'</fc>');

        		}
        		if (trId == "saveCmdDictionary")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search();
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/



        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/
        this.fn_paging_onload = function (obj)
        {
        	this.page = Eco.XComp.getUserProperty(obj, "pageNum"); //페이지 넘버 클릭시 페이지 값 전달위한 프로퍼티 세팅,
        	if (Eco.isEmpty(this.page))
        	{
        		this.page = 1;
        	}
        	// 값이 null 일때 1페이지
        	this.div_page.form.initPaging(this.LIST_COUNT, this.PAGE_COUNT, this.onChangePage, this); //디비전 속 페이지
        	this.div_page.form.setCurrentPage(this.page); //디비전 속 페이지
        };

        /* 조회시 항상 1페이지 호출 */
        this.fn_setPageInit = function ()
        {
        	this.page = 1;
        	this.div_page.form.initPaging(this.LIST_COUNT, this.PAGE_COUNT, this.onChangePage, this);
        };

        /* 페이지 변경 시 호출됨 */
        this.onChangePage = function (page)
        {
        	Eco.XComp.setUserProperty(this, "pageNum", page);
        	this.page = page;
        	this.div_page.form.setCurrentPage(page);
        	this.fn_search();
        };


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.btn_add_onclick = function (obj, e)
        {
        	var nRow = this.ds_cmdDictionary.addRow();
        	this.ds_cmdDictionary.setColumn(nRow,"USE_YN","Y");
        };

        this.btn_del_onclick = function (obj, e)
        {
        	if (this.ds_cmdDictionary.getRowType(this.ds_cmdDictionary.rowposition) == 2)
        	{
        		this.ds_cmdDictionary.deleteRow(this.ds_cmdDictionary.rowposition);
        	}
        	else
        	{
        		//this.alert("기등록된 사전정보는 삭제하실 수 없습니다!! 사용여부를 'N'으로 하시기 바랍니다!!");
        		this.gfn_Message("changeInvalid", null, "info", "ok");
        	}
        };


        this.grd_cmdDictionary_onselectchanged = function (obj, e)
        {
        	return;//임시 막음
        	if (this.ds_cmdDictionary.getRowType(e.row) == 2)
        	{
        		this.grd_cmdDictionary.setCellProperty("Body",0,"edittype","normal");
        	}
        	else
        	{
        		this.grd_cmdDictionary.setCellProperty("Body",0,"edittype","none");
        	}

        };



        this.div_search_btn_clear1_onclick = function (obj, e)
        {
        	this.reload();
        };



        this.ds_cmdDictionary_onvaluechanged = function(obj,e)
        {
        	if(e.columnid=="NM_K"){
        		if(this.gfn_isNull(obj.getColumn(e.row,"NM_E"))) obj.setColumn(e.row,"NM_E",e.newvalue);
        		if(this.gfn_isNull(obj.getColumn(e.row,"NM_C"))) obj.setColumn(e.row,"NM_C","(C)"+e.newvalue);
        		if(this.gfn_isNull(obj.getColumn(e.row,"NM_V"))) obj.setColumn(e.row,"NM_V","(V)"+e.newvalue);

        		// 2022-02-17일 추가
        		if(this.gfn_isNull(obj.getColumn(e.row,"DESCRIPTION"))) obj.setColumn(e.row,"DESCRIPTION",e.newvalue);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.cbo_dictionaryclassid.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_dictionaryclassid.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.grd_cmdDictionary.addEventHandler("onselectchanged",this.grd_cmdDictionary_onselectchanged,this);
            this.btn_add01.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del01.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.Static18.addEventHandler("onclick",this.Static18_onclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_cmdDictionary.addEventHandler("onvaluechanged",this.ds_cmdDictionary_onvaluechanged,this);
        };
        this.loadIncludeScript("CMSY03100M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
