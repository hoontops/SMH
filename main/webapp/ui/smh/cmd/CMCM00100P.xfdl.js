(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMCM00100P");
            this.set_titletext("사용자정보 수정");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(477,290);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmdUsers", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PWD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CLPS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMPN_PHN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MBPH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PWD_CHANGE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PWD_ERR_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LAST_LGN_DTM\" type=\"DATE\" size=\"256\"/><Column id=\"LAST_LGN_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"PWD_ERR_DTM\" type=\"DATE\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"NICKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"HOMEADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISEESLINK\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"AREARESPONSIBILITY\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROWS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"HOME_ADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_multiSite", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ACNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_save",null,null,"60","20","73","11",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","2.52%","14",null,"31","31.03%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사용자정보 수정");
            obj.set_cssclass("sta_WF_subTitle3");
            this.addChild(obj.name, obj);

            obj = new Div("div","1.47%","50",null,"193","7",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static19","51.97%","86",null,"21","29.48%",null,null,null,null,null,this.div.form);
            obj.set_taborder("14");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("POSITION");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static07","4","60",null,"20","80.35%",null,null,null,null,null,this.div.form);
            obj.set_taborder("5");
            obj.set_text("이메일주소");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_emailAddr","21.48%","60",null,"20","0.87%",null,null,null,null,null,this.div.form);
            obj.set_taborder("2");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_userNm","21.62%","36",null,"20","28.82%",null,null,null,null,null,this.div.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            obj.set_enable("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03","0.66%","36",null,"21","80.35%",null,null,null,null,null,this.div.form);
            obj.set_taborder("6");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static05","4","10",null,"20","80.57%",null,null,null,null,null,this.div.form);
            obj.set_taborder("7");
            obj.set_text("사용자ID");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("USERID");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static16","0%","0",null,"10","-3.04%",null,null,null,null,null,this.div.form);
            obj.set_taborder("8");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static17","0%","31",null,"5","-3.04%",null,null,null,null,null,this.div.form);
            obj.set_taborder("9");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static10","0%","55",null,"5","-0.89%",null,null,null,null,null,this.div.form);
            obj.set_taborder("10");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static11","0%","81",null,"5","-0.89%",null,null,null,null,null,this.div.form);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static12","0%",null,null,"5","-3.04%","-15",null,null,null,null,this.div.form);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static13","20.09%","0",null,null,"78.17%","-15",null,null,null,null,this.div.form);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_userAcnt","21.62%","10",null,"20","49.78%",null,null,null,null,null,this.div.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01","4","86",null,"20","80.57%",null,null,null,null,null,this.div.form);
            obj.set_taborder("15");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("DUTY");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static14","0%","107",null,"5","0%",null,null,null,null,null,this.div.form);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static23","0%","133",null,"5","0%",null,null,null,null,null,this.div.form);
            obj.set_taborder("17");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static27","0%","159",null,"5","0.35%",null,null,null,null,null,this.div.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static32","0%","55",null,"5","-1.77%",null,null,null,null,null,this.div.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static34","51.75%","112",null,"20","29.48%",null,null,null,null,null,this.div.form);
            obj.set_taborder("19");
            obj.set_text("기본언어");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("DEFAULTLANGUAGETYPE");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_languagetype","71.37%","112",null,"20","0.87%",null,null,null,null,null,this.div.form);
            obj.set_taborder("3");
            obj.set_displayrowcount("20");
            obj.set_type("filter");
            obj.set_font("9pt \"Dotum\"");
            obj.set_codecolumn("C,LanguageType,SEL,Y,Y");
            obj.set_index("-1");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static37","0%","185",null,"5","0.71%",null,null,null,null,null,this.div.form);
            obj.set_taborder("20");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static18","0.65%","112",null,"21","80.48%",null,null,null,null,null,this.div.form);
            obj.set_taborder("21");
            obj.set_text("휴대전화");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("PHONENUMBER");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_mbphNo","21.62%","112",null,"20","49.78%",null,null,null,null,null,this.div.form);
            obj.set_taborder("22");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static01_00","4","138",null,"20","80.57%",null,null,null,null,null,this.div.form);
            obj.set_taborder("23");
            obj.set_text("부서코드");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_tooltiptext("F4C715B5608D4831897B68B35D5830F9");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static07_00","3","165",null,"20","80.35%",null,null,null,null,null,this.div.form);
            obj.set_taborder("24");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_HOMEADDRESS","21.62%","165",null,"20","0.66%",null,null,null,null,null,this.div.form);
            obj.set_taborder("25");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_CLPS_CD","21.48%","86",null,"20","49.67%",null,null,null,null,null,this.div.form);
            obj.set_taborder("26");
            obj.set_cssclass("essential");
            obj.set_codecolumn("C,HRAbilCode,SEL,Y,Y");
            obj.set_font("9pt \"Dotum\"");
            obj.set_type("filter");
            obj.set_index("0");
            this.div.addChild(obj.name, obj);

            obj = new Combo("cbo_JIKWI_CD","71.37%","86",null,"20","0.87%",null,null,null,null,null,this.div.form);
            obj.set_taborder("27");
            obj.set_displayrowcount("20");
            obj.set_type("filter");
            obj.set_font("9pt \"Dotum\"");
            obj.set_codecolumn("C,HRPostCode,SEL,Y,Y");
            obj.set_index("-1");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_deptCd","21.91%","138",null,"20","57.27%",null,null,null,null,null,this.div.form);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_deptCd","43.17%","138",null,"20","51.63%",null,null,null,null,null,this.div.form);
            obj.set_taborder("29");
            obj.set_cssclass("btn_WF_finder");
            obj.set_tooltiptext("Toolbar_Search");
            obj.set_text("");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_deptCd_nm","48.81%","138",null,"20","0.65%",null,null,null,null,null,this.div.form);
            obj.set_taborder("30");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.div.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"56","21","10","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00",null,"6","25","25","6",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",477,290,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_menu.edt_userId","value","ds_cmdUsers","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_menu.edt_userAcnt","value","ds_cmdUsers","USER_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_menu.edt_userPwd","value","ds_cmdUsers","USER_PWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_menu.edt_userNm","value","ds_cmdUsers","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_menu.edt_emailAddr","value","ds_cmdUsers","EMAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_menu.cbo_useYn","value","ds_cmdUsers","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_menu.edt_pwdErrCnt","value","ds_cmdUsers","PWD_ERR_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_menu.cal_pwdChangeDate","value","ds_cmdUsers","PWD_CHANGE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_menu.edt_empNo","value","ds_cmdUsers","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_menu.cbo_clpsCd","value","ds_cmdUsers","CLPS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_menu.cbo_jikwiCd","value","ds_cmdUsers","JIKWI_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_menu.cbo_hffcSttusCd","value","ds_cmdUsers","HFFC_STTUS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_menu.cbo_userGubunCd","value","ds_cmdUsers","USER_GUBUN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div.form.edt_userAcnt","value","ds_cmdUsers","USER_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div.form.edt_userNm","value","ds_cmdUsers","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div.form.edt_emailAddr","value","ds_cmdUsers","EMAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div.form.cbo_languagetype","value","ds_cmdUsers","LANGUAGETYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div.form.edt_mbphNo","value","ds_cmdUsers","MBPH_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div.form.edt_HOMEADDRESS","value","ds_cmdUsers","HOMEADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div.form.cbo_CLPS_CD","value","ds_cmdUsers","CLPS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div.form.cbo_JIKWI_CD","value","ds_cmdUsers","JIKWI_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div.form.edt_deptCd","value","ds_cmdUsers","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div.form.edt_deptCd_nm","value","ds_cmdUsers","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMCM00100P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 사용자정보 수정
         * 파일명 		: cmsy01100.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.01.20
         *
         * 설  명		: 사용자정보 수정
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.01.20	진성하   	최초작성
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

        	this.fn_search();

        };


        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "USER_ID", this.gf_getUserId());

        	var sSvcID = "selectCmdUsers";
        	var sController = "/cmsy01100/selectCmdUsers.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_cmdUsers=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "selectCmdUsers");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	var bOK = this.gfn_Message("InfoPopupSave", null, "conf", "yesno");//nexacro.getApplication().confirm("저장하시겠습니까?");
        	if (bOK == false)
        	{
        		return;
        	}

        	if (!this.gfn_dsIsUpdated(this.ds_cmdUsers))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	var component = this.div;
        	var strColIdList = "edt_userAcnt,edt_userNm";
        	var strColNmList = "사용자계정,사용자명";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
        	if (rtn == false) return;


        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID = "saveCmdUsers";
        	var sController = "/cmsy01100/saveCmdUsers.do";
        	var sInDatasets = "INPUT=ds_cmdUsers:U INPUT2=ds_multiSite:U";
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
        		if (trId == "selectCmdUsers")
        		{
        		}
        		else if (trId == "saveCmdUsers")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search();
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SEARCH_DEPT")
        	{
        		var nRow = this.ds_cmdUsers.rowposition;

        		this.ds_cmdUsers.setColumn(nRow, "DEPT_CD", rtn[0]);
        		this.ds_cmdUsers.setColumn(nRow, "DEPT_NM", rtn[1]);
        	}

        }


        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.btn_close_onclick = function (obj, e)
        {
        	var rtnArray = new Array();
        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        };


        this.div_btn_deptCd_onclick = function(obj,e)
        {
        	var popupId = "SEARCH_DEPT";
        	var oArg = {};
        	oArg.arg_type = "B";
        	oArg.arg_popupCd = "P00210";
        	oArg.arg_popupNm = "";
        	oArg.arg_rtnCols = "DEPT_CD|DEPT_NM";
        	oArg.arg_paramCols = "";
        	oArg.arg_paramValues = "";
        	oArg.arg_searchStr = "";

        	this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,"");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.div.form.cbo_languagetype.addEventHandler("onitemchanged",this.div_cbo_deptCd_onitemchanged,this);
            this.div.form.cbo_CLPS_CD.addEventHandler("onitemchanged",this.div_cbo_plantid_onitemchanged,this);
            this.div.form.cbo_JIKWI_CD.addEventHandler("onitemchanged",this.div_cbo_deptCd_onitemchanged,this);
            this.div.form.btn_deptCd.addEventHandler("onclick",this.div_btn_deptCd_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("CMCM00100P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
