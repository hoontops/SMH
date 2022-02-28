(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMSY03400M");
            this.set_titletext("사용자신청 승인");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,637);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmdUsers", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PWD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CLPS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMPN_PHN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MBPH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PWD_CHANGE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PWD_ERR_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LAST_LGN_DTM\" type=\"DATE\" size=\"256\"/><Column id=\"LAST_LGN_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"PWD_ERR_DTM\" type=\"DATE\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"NICKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"HOMEADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISEESLINK\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"AREARESPONSIBILITY\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_NUMBER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"PAGE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_yn", this);
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"desc\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">Y</Col><Col id=\"desc\">Y</Col></Row><Row><Col id=\"cd\">N</Col><Col id=\"desc\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0%","30",null,"43","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_SearchBg");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","0%","0",null,"10","0%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0%","-1",null,"43","97.83%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
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
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","21","10","70","18",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("사용자ID");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_tooltiptext("USERID");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_userId","103","10","124","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_inputmode("normal");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","249","10","63","18",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_tooltiptext("USERNAME");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_userNm","316","10","173","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_font("9pt \"Dotum\"");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static34","507","10","55","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("유효상태");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("SITETYPE");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_useYn","580","10","128","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_codecolumn("C,UseYn,ALL,Y,Y");
            obj.set_type("filter");
            obj.set_displayrowcount("20");
            obj.set_font("9pt \"Dotum\"");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static12","0%","73",null,"15","87.17%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0.87%","81",null,"15","86.3%",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","6","84","142","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("사용자 신청 승인");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_border("0px none rgba(51,51,51,1)");
            obj.set_textAlign("left");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("MENU_USERREQUESTAPPROVAL");
            this.addChild(obj.name, obj);

            obj = new Static("Static14","0%","109",null,"10","87.17%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_cmdUsers","0","120",null,null,"0.87%","40",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_cmdUsers");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"86\"/><Column size=\"91\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"64\"/><Column size=\"93\"/><Column size=\"80\"/><Column size=\"52\"/><Column size=\"68\"/><Column size=\"72\"/><Column size=\"64\"/><Column size=\"103\"/><Column size=\"99\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"사용자ID\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"설명\"/><Cell col=\"4\" text=\"부서\"/><Cell col=\"5\" text=\"직위\"/><Cell col=\"6\" text=\"직책\"/><Cell col=\"7\" text=\"이메일주소\"/><Cell col=\"8\" text=\"핸드폰번호\"/><Cell col=\"9\" text=\"기본언어\"/><Cell col=\"10\" text=\"유효상태\"/><Cell col=\"11\" text=\"사용자상태\"/><Cell col=\"12\" text=\"출처\"/><Cell col=\"13\" text=\"수정일\"/><Cell col=\"14\" text=\"생성일\"/></Band><Band id=\"body\"><Cell text=\"bind:CHK\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:USER_ID\"/><Cell col=\"2\" text=\"bind:USER_NM\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\"/><Cell col=\"4\" text=\"bind:DEPT_NM\"/><Cell col=\"5\" text=\"bind:JIKWI_CD\" displaytype=\"combotext\" combocodecol=\"C,HRPostCode,,Y,N\"/><Cell col=\"6\" text=\"bind:CLPS_CD\" displaytype=\"combotext\" combocodecol=\"C,HRAbilCode,,Y,N\"/><Cell col=\"7\" text=\"bind:EMAIL_ADDR\"/><Cell col=\"8\" text=\"bind:MBPH_NO\"/><Cell col=\"9\" text=\"bind:LANGUAGETYPE\" combocodecol=\"C,LanguageType,SEL,Y,N\" displaytype=\"combotext\"/><Cell col=\"10\" text=\"bind:USE_YN\" combocodecol=\"C,UseYn,SEL,Y,N\" displaytype=\"combotext\"/><Cell col=\"11\" text=\"bind:USERSTATE\" displaytype=\"combotext\" combocodecol=\"C,UserState,,Y,N\"/><Cell col=\"12\" text=\"bind:SOURCE\" displaytype=\"normal\" combocodecol=\"C,UserState,,Y,N\"/><Cell col=\"13\" text=\"bind:CREATION_DATE\" displaytype=\"normal\" combocodecol=\"C,UserState,,Y,N\"/><Cell col=\"14\" text=\"bind:LAST_UPDATE_DATE\" displaytype=\"normal\" combocodecol=\"C,UserState,,Y,N\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add01",null,"95","67","20","80",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_cssclass("btn_DR_GridPlus");
            obj.set_tooltiptext("GridAdd");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del01",null,"95","67","20","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_DR_GridMinus");
            obj.set_tooltiptext("GridDelete");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0%","21",null,"9","1.09%",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","285",null,"329","10",null,"30",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","285",null,"329","20",null,"10",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("페이징처리영역");
            obj.set_visible("false");
            obj.set_background("lightskyblue");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Div("div_page","27.17%",null,null,"20","30.00%","10",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_url("common::com_paging.xfdl");
            obj.set_background("transparent");
            obj.set_color("rgba(68,68,68,1)");
            obj.set_font("9pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","285",null,"329","10",null,"0",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("9pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"0","70","20","10",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("사용승인");
            obj.set_cssclass("btn_DR_GridSave");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("USEAPPROVAL");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pwdInit",null,"0","120","20","85",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("비밀번호 초기화");
            obj.set_cssclass("btn_DR_GridReset");
            obj.set_tooltiptext("INITPASSWORD");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"0","60","20","210",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("조회");
            obj.set_cssclass("btn_DR_GridSearch");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("Toolbar_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,"0","60","20","275",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("초기화");
            obj.set_cssclass("btn_DR_GridReset");
            obj.set_tooltiptext("Toolbar_Initialization");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_cmdUsers","Static02:-8","80",null,"34","643",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("<fc v=\"#f31d24\">0</fc><fc v=\"#999999\">건</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_expr("expr:\'Count : <fc v=\"#f31d24\">\'+comp.parent.nfn_numberWithCommas(comp.parent.ds_cmdUsers.rowcount)+\'</fc>\'");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","sta_title:2","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,637,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_search.form.edt_userNm","value","ds_EapInvoicesAll","VAT_REGISTRATION_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_paging.xfdl");
        };
        
        // User Script
        this.registerScript("CMSY03400M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 사이트-사용자 매핑 관리
         * 파일명 		: cmsy03400.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2017.03.18
         *
         * 설  명		: 사이트-사용자 매핑
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
        	this.gfn_setEnterSearch(this.div_search, "nfn_search");
        	this.div_page.form.set_visible(true);

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
        	this.ds_cmdUsers.clearData();

        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "USER_ID", this.div_search.form.edt_userId.value);
        	this.ds_search.setColumn(0, "USER_NM", this.div_search.form.edt_userNm.value);
        	this.ds_search.setColumn(0, "USE_YN", this.div_search.form.cbo_useYn.value);
        	this.ds_search.setColumn(0, "USE_REQ_YN", "Y");

        	this.ds_search.setColumn(0, "PAGE_NUMBER", this.page);
        	this.ds_search.setColumn(0, "PAGE_SIZE", this.LIST_COUNT);

        	var sSvcID = "selectCmdUsersList";
        	var sController = "/cmsy03400/selectCmdUsersList.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_cmdUsers=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdUsersList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	//nexacro.getApplication().confirm("선택한 사용자의 사용 신청을 승인하시겠습니까??");
        	var bOK = this.gfn_Message("UseApproval", null, "conf", "yesno");
        	if (bOK == false)
        	{
        		return;
        	}

        	if (this.ds_cmdUsers.rowposition < 0)
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}
        	if (!this.gfn_dsIsUpdated(this.ds_cmdUsers) )
        	{
        		this.gfn_Message("NoDataChanged", null, "warning", "ok");	//IMCMM0033 변경된 데이터가 없습니다.
        		return;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "updateCmdUsersApproval";
        	var sController = "/cmsy03400/updateCmdUsersApproval.do";
        	var sInDatasets = "INPUT=ds_cmdUsers:U";
        	var sOutDatasets = "";

        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "saveCmdUsers");

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
        		if (trId == "updateCmdUsersApproval")
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
        	var nRow = this.ds_cmdUsers.addRow();
        	this.ds_cmdUsers.setColumn(nRow,"VALIDSTATE","Valid");
        };

        this.btn_del_onclick = function (obj, e)
        {
        	if (this.ds_cmdUsers.getRowType(this.ds_cmdUsers.rowposition) == 2)
        	{
        		this.ds_cmdUsers.deleteRow(this.ds_cmdUsers.rowposition);
        	}
        	else
        	{
        		this.gfn_Message("changeInvalid", null, "info", "ok");
        		//this.alert("기등록된 메시지정보는 삭제하실 수 없습니다!! 유효상태를 'Invalid'으로 하시기 바랍니다!!");
        	}
        };


        this.grd_cmdUsers_onselectchanged = function (obj, e)
        {

        	if (this.ds_cmdUsers.getRowType(e.row) == 2)
        	{
        		this.grd_cmdUsers.setCellProperty("Body",1,"edittype","normal");
        	}
        	else
        	{
        		this.grd_cmdUsers.setCellProperty("Body",1,"edittype","none");
        	}

        };



        this.div_search_btn_clear1_onclick = function (obj, e)
        {
        	this.reload();
        };



        this.btn_pwdInit_onclick = function(obj,e)
        {
        	//var bOK = nexacro.getApplication().confirm("비밀번호를 초기화하시겠습니까?");
        	var bOK = this.gfn_Message("PASSWORDFORGOTCONFIRM", null, "conf", "yesno");
        	if (bOK == false)
        	{
        		return;
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "updateCmdUsersPwdInit";
        	var sController = "/cmsy03400/updateCmdUsersPwdInit.do";
        	var sInDatasets = "INPUT=ds_cmdUsers:U";
        	var sOutDatasets = "";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_search.form.cbo_useYn.addEventHandler("onitemchanged",this.div_cbo_deptCd_onitemchanged,this);
            this.Static02.addEventHandler("onclick",this.Static10_onclick,this);
            this.btn_add01.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del01.addEventHandler("onclick",this.btn_del_onclick,this);
            this.Static18.addEventHandler("onclick",this.Static18_onclick,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.btn_pwdInit.addEventHandler("onclick",this.btn_pwdInit_onclick,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_clear1.addEventHandler("onclick",this.div_search_btn_clear1_onclick,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
        };
        this.loadIncludeScript("CMSY03400M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
