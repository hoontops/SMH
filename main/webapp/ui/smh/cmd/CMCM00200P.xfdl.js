(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMCM00200P");
            this.set_titletext("비밀번호 변경");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(310,199);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmdUsers", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ID\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"USER_PWD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CLPS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JIKWI_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CMPN_PHN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MBPH_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PWD_CHANGE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PWD_ERR_CNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LAST_LGN_DTM\" type=\"DATE\" size=\"256\"/><Column id=\"LAST_LGN_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"DATE\" size=\"256\"/><Column id=\"PWD_ERR_DTM\" type=\"DATE\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"NICKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"HOMEADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSTATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISEESLINK\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"AREARESPONSIBILITY\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ROWS\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"HOME_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PWD_NEW\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PWD_NEW2\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PWD_CUR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_save",null,null,"60","20","73","11",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","2.26%","14",null,"31","30.65%",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("sta_WF_subTitle3");
            this.addChild(obj.name, obj);

            obj = new Div("div","2%","50",null,"93","8",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid rgba(128,128,128,1)");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_userPwd","37.63%","10",null,"20","2.37%",null,null,null,null,null,this.div.form);
            obj.set_taborder("0");
            obj.set_cssclass("essential");
            obj.set_enable("true");
            obj.set_password("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03","3.40%","10",null,"21","65.28%",null,null,null,null,null,this.div.form);
            obj.set_taborder("2");
            obj.set_text("현재 비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static16","0%","0",null,"10","-3.04%",null,null,null,null,null,this.div.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static17","0%","31",null,"5","-3.04%",null,null,null,null,null,this.div.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static10","0%","55",null,"5","-0.89%",null,null,null,null,null,this.div.form);
            obj.set_taborder("5");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static12","0%",null,null,"5","-3.04%","-15",null,null,null,null,this.div.form);
            obj.set_taborder("6");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static32","0.00%","56",null,"5","-1.70%",null,null,null,null,null,this.div.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00","3.40%","36",null,"21","64.91%",null,null,null,null,null,this.div.form);
            obj.set_taborder("7");
            obj.set_text("새 비밀번호");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_userPwdNew","37.63%","36",null,"20","2.37%",null,null,null,null,null,this.div.form);
            obj.set_taborder("8");
            obj.set_cssclass("essential");
            obj.set_enable("true");
            obj.set_password("true");
            this.div.addChild(obj.name, obj);

            obj = new Edit("edt_userPwdNew2","37.63%","61",null,"20","2.37%",null,null,null,null,null,this.div.form);
            obj.set_taborder("9");
            obj.set_cssclass("essential");
            obj.set_enable("true");
            obj.set_password("true");
            this.div.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","3.40%","61",null,"21","64.53%",null,null,null,null,null,this.div.form);
            obj.set_taborder("10");
            obj.set_text("새 비밀번호 확인");
            obj.set_cssclass("sta_WF_Label2");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
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
            obj = new Layout("default","",310,199,this,function(p){});
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

            obj = new BindItem("item16","div.form.edt_userPwd","value","ds_cmdUsers","USER_PWD_CUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div.form.edt_userPwdNew","value","ds_cmdUsers","USER_PWD_NEW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div.form.edt_userPwdNew2","value","ds_cmdUsers","USER_PWD_NEW2");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMCM00200P.xfdl", function() {
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
        	var oldPwVal = this.div.form.edt_userPwd.value;
        	var newPwVal1 = this.div.form.edt_userPwdNew.value;
        	var newPwVal2 = this.div.form.edt_userPwdNew2.value;

        	if (!this.gfn_dsIsUpdated(this.ds_cmdUsers))
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}
        	if(newPwVal1 != newPwVal2)
        	{
        		this.gfn_Message("PASSWORDNOTMATCHING", null, "warning", "ok");
        		this.div.form.edt_userPwdNew2.setFocus();
        		return;
        	}
        	if(oldPwVal == newPwVal1){
        	   this.gfn_Message("NewIsSameOldPassword", null, "warning", "ok");//alert("NewIsSameOldPassword");
        	   return;
        	}
        /*
        	if(newPwVal1.indexOf(loginId) > -1){
        	   alert("변경할 비밀번호에 사번이 포함되어 있습니다.");
        	   return;
        	}
        */
        	//PW 검증
        /*
        	if(!this.nfn_isValidPassword(newPwVal1)){
        	   this.gfn_Message("PASSWORDVALIDATEalert", null, "warning", "ok");//("비밀번호는 영어+숫자+특수문자 조합으로 8자리 이상 15자리 이어야 합니다.");
        	   this.div.form.edt_userPwd.set_value("");
        	   this.div.form.edt_userPwdNew.set_value("");
        	   this.div.form.edt_userPwdNew2.set_value("");
        	   return;
        	}
        */
        	var component = this.div;
        	var strColIdList = "edt_userPwd,edt_userPwdNew,edt_userPwdNew2";
        	var strColNmList = "현재 비밀번호,새 비밀번호,새 비밀번호 확인";
        	var rtn = this.nfn_MandatoryCheck(component, strColIdList, strColNmList);
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
        	var sSvcID = "updateChangeUserPw";
        	var sController = "/cmsy01100/updateChangeUserPw.do";
        	var sInDatasets = "INPUT=ds_cmdUsers:U";
        	var sOutDatasets = "ds_reault=output";

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
        			if(!this.gfn_isNull(errMsg)){
        				this.gfn_Message(errMsg, null, "error", "ok");
        			}else{
        				this.gfn_Message("ErrorOnSave", "", "error", "ok");
        			}
        		}
        	}
        	else
        	{
        		if (trId == "selectCmdUsers")
        		{
        		}
        		else if (trId == "updateChangeUserPw")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.close();
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/



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


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("CMCM00200P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
