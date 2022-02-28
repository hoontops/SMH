(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSY03200M");
            this.set_titletext("메시지관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,637);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmdMessage", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MESSAGEID\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGECLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"MODIFIER\" type=\"STRING\" size=\"256\"/><Column id=\"MODIFIEDTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNID\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNUSER\" type=\"STRING\" size=\"256\"/><Column id=\"LASTTXNTIME\" type=\"DATE\" size=\"256\"/><Column id=\"LASTTXNCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"MESSAGEID\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"MESSAGECLASSID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Edit("edt_messageid","103","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_inputmode("normal");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","21","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_text("메시지ID");
            obj.set_tooltiptext("MESSAGEID");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_description","486","10","173","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","419","10","63","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("메시지명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_tooltiptext("MESSAGENAME");
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

            obj = new Static("Static06","10.24%","1",null,null,"88.66%","-1",null,null,null,null,this.div_search.form);
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

            obj = new Combo("cbo_messageclassid","755","10","110","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_codecolumn("C,MsgGroup,ALL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_index("-1");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_00","680","10","65","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("메시지유형");
            obj.set_cssclass("sta_WF_Label");
            obj.set_tooltiptext("MESSAGECLASSNAME");
            obj.set_padding("0px 0px 0px 7px");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00_01","261","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_text("제목");
            obj.set_tooltiptext("TITLE");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_messagename","303","10","94","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_inputmode("normal");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_DR_GridSave");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("Toolbar_Save");
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

            obj = new Grid("grd_cmdMessage","0","120",null,null,"0.87%","3",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_cmdMessage");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"91\"/><Column size=\"117\"/><Column size=\"83\"/><Column size=\"358\"/><Column size=\"56\"/><Column size=\"55\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"메시지 그룹\"/><Cell col=\"1\" text=\"메시지 ID\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"메시지명\"/><Cell col=\"4\" text=\"언어타입\"/><Cell col=\"5\" text=\"유효상태\"/></Band><Band id=\"body\"><Cell text=\"bind:MESSAGECLASSID\" combocodecol=\"C,MsgGroup,SEL,Y,Y\" edittype=\"none\" displaytype=\"combotext\" editautoselect=\"true\"/><Cell col=\"1\" text=\"bind:MESSAGEID\" edittype=\"expr:comp.parent.ds_cmdMessage.getRowType(currow) ==1 ? &apos;normal&apos;:&apos;normal&apos;\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:MESSAGENAME\" edittype=\"normal\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\" edittype=\"normal\" textAlign=\"left\" editautoselect=\"true\"/><Cell col=\"4\" text=\"bind:LANGUAGETYPE\" combocodecol=\"C,LanguageType,SEL,Y,Y\" edittype=\"none\" displaytype=\"combotext\" editautoselect=\"true\"/><Cell col=\"5\" text=\"bind:VALIDSTATE\" combocodecol=\"C,ValidState,SEL,Y,Y\" displaytype=\"combotext\" edittype=\"combo\" editautoselect=\"true\"/></Band></Format></Formats>");
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
            obj.set_tooltiptext("Toolbar_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"0","60","20","76",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_DR_GridReset");
            obj.set_tooltiptext("Toolbar_Initialization");
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

            obj = new Static("Static16","285",null,"329","10",null,"-20",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","285",null,"329","20",null,"-40",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("페이징처리영역");
            obj.set_visible("false");
            obj.set_background("lightskyblue");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Div("div_page","27.07%",null,null,"20","27.72%","-40",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_url("common::com_paging.xfdl");
            obj.set_background("transparent");
            obj.set_color("rgba(68,68,68,1)");
            obj.set_font("9pt \"Dotum\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","285",null,"329","10",null,"-50",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("sta_subTitle","5","80","108","34",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("메시지 리스트");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("GRIDMESSAGELIST");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_cmdMessage","sta_subTitle:20","80",null,"34","703",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
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
        this.registerScript("CMSY03200M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 메시지 관리
         * 파일명 		: cmsy03200.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.01.11
         *
         * 설  명		: 메시지 조회/수정/삭제/엑셀다운로드 기능 제공
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
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	//this.sta_cnt.set_expr(expr:'result : <fc v="#f31d24">'+comp.parent.ds_search.rowcount+'</fc>')
        	this.nfn_formInit(obj);
        	// 엔터키 설정 함수(조회)
        	//this.gfn_setEnterSearch(this.div_search, "nfn_search");
        	//this.div_page.set_visible(true);

        	// paging
        	//this.fn_paging_onload(obj);
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
        /*
        	if (this.isValidObject(obj))
        	{
        		this.page = 1;
        		this.div_page.form.setCurrentPage(this.page);
        	}
        */

        	this.ds_cmdMessage.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "MESSAGEID", this.div_search.form.edt_messageid.value);
        	this.ds_search.setColumn(0, "MESSAGENAME", this.div_search.form.edt_messagename.value);
        	this.ds_search.setColumn(0, "DESCRIPTION", this.div_search.form.edt_description.value);
        	this.ds_search.setColumn(0, "MESSAGECLASSID", this.div_search.form.cbo_messageclassid.value);

        	var sSvcID = "selectCmdMessageList";
        	var sController = "/cmsy03200/selectCmdMessageList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_cmdMessage=output";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (!this.gfn_dsIsUpdated(this.ds_cmdMessage) )
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");//this.gfn_Message("IMCMM0033", null, "warning", "ok");
        		return;
        	}

        	var component = this.grd_cmdMessage;
        	var strColIdList = "MESSAGECLASSID,MESSAGEID,MESSAGENAME,LANGUAGETYPE,VALIDSTATE";
        	var rtn = this.nfn_MandatoryCheckGrid(component, strColIdList);
        	if (rtn == false) return;

        	var bOK = this.gfn_Message("InfoPopupSave", null, "conf", "yesno");//nexacro.getApplication().confirm("저장하시겠습니까?");
        	if (bOK == false)
        	{
        		return;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveCmdMessage";
        	var sController = "/cmsy03200/saveCmdMessage.do";
        	var sInDatasets = "INPUT=ds_cmdMessage:U";
        	var sOutDatasets = "ds_result=output";

        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "saveCmdMessage");

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
        		if (trId == "saveCmdMessage")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.btn_save.set_enable(false);

        			this.fn_search();
        		}else if (trId == "selectEcmLookupValuesVList2ds_CMsgGroup")
        		{
        			this.div_search.form.cbo_messageclassid.set_index(0);
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
        	var nRow = this.ds_cmdMessage.addRow();
        	this.ds_cmdMessage.setColumn(nRow,"VALIDSTATE","Valid");
        	this.btn_save.set_enable(true);

        };

        this.btn_del_onclick = function (obj, e)
        {
        	if (this.ds_cmdMessage.getRowType(this.ds_cmdMessage.rowposition) == 2)
        	{
        		this.ds_cmdMessage.deleteRow(this.ds_cmdMessage.rowposition);
        	}
        	else
        	{
        		//this.alert("기등록된 메시지정보는 삭제하실 수 없습니다!! 유효상태를 'Invalid'으로 하시기 바랍니다!!");
        		this.gfn_Message("changeInvalid", null, "info", "ok");
        	}
        };


        this.grd_cmdMessage_onselectchanged = function (obj, e)
        {

        	if (this.ds_cmdMessage.getRowType(e.row) == 2)
        	{
        		this.grd_cmdMessage.setCellProperty("Body",1,"edittype","normal");
        	}
        	else
        	{
        		this.grd_cmdMessage.setCellProperty("Body",1,"edittype","none");
        	}

        };



        this.div_search_btn_clear1_onclick = function (obj, e)
        {
        	this.reload();
        };



        this.ds_cmdMessage_onvaluechanged = function(obj,e)
        {
        	if(e.columnid=="DESCRIPTION" || e.columnid=="MESSAGEID"){
        		if(obj.getRowType(e.row)!=2) return;

        		var messageid = obj.getColumn(e.row,"MESSAGEID");
        		var description = obj.getColumn(e.row,"DESCRIPTION");
        		var languagetype = obj.getColumn(e.row,"LANGUAGETYPE");
        		var messageclassid = obj.getColumn(e.row,"MESSAGECLASSID");
        		var messagename = this.gfn_isEmpty(obj.getColumn(e.row,"MESSAGENAME"));
        		var validstate = obj.getColumn(e.row,"VALIDSTATE");
        		if(this.gfn_isNull(languagetype)) languagetype="ko-KR";
        		if(languagetype!="ko-KR") return;
        		if(this.gfn_isNull(messageid) || this.gfn_isNull(description)) return;

        		var nRow = obj.findRowExpr("MESSAGEID=='"+messageid+"' && LANGUAGETYPE=='ko-KR'");
        		if(nRow<0)
        		{
        			if(this.gfn_isNull(obj.getColumn(e.row,"LANGUAGETYPE"))) obj.setColumn(e.row,"LANGUAGETYPE",languagetype);
        			//trace("MESSAGEID=='"+messageid+"' && LANGUAGETYPE=='en-US'");
        			nRow = obj.findRowExpr("MESSAGEID=='"+messageid+"' && LANGUAGETYPE=='en-US'");
        			if(nRow<0){
        				var aRow = obj.addRow();
        				obj.setColumn(aRow,"LANGUAGETYPE",'en-US');
        				obj.setColumn(aRow,"MESSAGEID",messageid);
        				obj.setColumn(aRow,"DESCRIPTION",description);
        				obj.setColumn(aRow,"MESSAGECLASSID",messageclassid);
        				obj.setColumn(aRow,"MESSAGENAME",messagename);
        				obj.setColumn(aRow,"VALIDSTATE",validstate);
        			}

        // 2022-02-17일 중국어 및 베트남어 자동 등록 삭제
        // 			nRow = obj.findRowExpr("MESSAGEID=='"+messageid+"' && LANGUAGETYPE=='zh-CN'");
        // 			if(nRow<0){
        // 				var aRow = obj.addRow();
        // 				obj.setColumn(aRow,"LANGUAGETYPE",'zh-CN');
        // 				obj.setColumn(aRow,"MESSAGEID",messageid);
        // 				obj.setColumn(aRow,"DESCRIPTION","(C)"+description);
        // 				obj.setColumn(aRow,"MESSAGECLASSID",messageclassid);
        // 				obj.setColumn(aRow,"MESSAGENAME","(C)"+messagename);
        // 				obj.setColumn(aRow,"VALIDSTATE",validstate);
        // 			}
        // 			nRow = obj.findRowExpr("MESSAGEID=='"+messageid+"' && LANGUAGETYPE=='vi-VN'");
        // 			if(nRow<0){
        // 				var aRow = obj.addRow();
        // 				obj.setColumn(aRow,"LANGUAGETYPE",'vi-VN');
        // 				obj.setColumn(aRow,"MESSAGEID",messageid);
        // 				obj.setColumn(aRow,"DESCRIPTION","(V)"+description);
        // 				obj.setColumn(aRow,"MESSAGECLASSID",messageclassid);
        // 				obj.setColumn(aRow,"MESSAGENAME","(V)"+messagename);
        // 				obj.setColumn(aRow,"VALIDSTATE",validstate);
        // 			}

        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.cbo_messageclassid.addEventHandler("onitemchanged",this.Combo01_onitemchanged,this);
            this.div_search.form.cbo_messageclassid.addEventHandler("onmousemove",this.fn_msgCdCboToolTip,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.grd_cmdMessage.addEventHandler("onselectchanged",this.grd_cmdDictionary_onselectchanged,this);
            this.btn_add01.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del01.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.Static18.addEventHandler("onclick",this.Static18_onclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.ds_cmdMessage.addEventHandler("onvaluechanged",this.ds_cmdMessage_onvaluechanged,this);
        };
        this.loadIncludeScript("CMSY03200M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
