(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PDA00100M");
            this.set_titletext("Login");
            this.set_background("whitesmoke");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lang", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LANG_NM\">한국어(KOR)</Col><Col id=\"LANG_CD\">ko-KR</Col></Row><Row><Col id=\"LANG_NM\">영어(ENGLISH)</Col><Col id=\"LANG_CD\">en-US</Col></Row><Row><Col id=\"LANG_NM\">중국어(CHINESE)</Col><Col id=\"LANG_CD\">zh-CN</Col></Row><Row><Col id=\"LANG_NM\">베트남어(Vietnamese)</Col><Col id=\"LANG_CD\">vi-VN</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_site", this);
            obj._setContents("<ColumnInfo><Column id=\"SITE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SITE_CD\">CCT</Col><Col id=\"SITE_NM\">CCT</Col></Row><Row><Col id=\"SITE_CD\">IFC</Col><Col id=\"SITE_NM\">IFC</Col></Row><Row><Col id=\"SITE_CD\">IFV</Col><Col id=\"SITE_NM\">IFV</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_login", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PWD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PWD_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"kickBeforeUser\" type=\"STRING\" size=\"256\"/><Column id=\"nextUri\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SITETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rslt", this);
            obj._setContents("<ColumnInfo><Column id=\"LOGIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_PW\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SESSION_LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_login","27","65","426","369",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_login");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02","132","84","152","28",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("10");
            obj.set_text("로그인(PDA)");
            obj.set_cssclass("sta_Login_title");
            this.div_login.addChild(obj.name, obj);

            obj = new Edit("edt_userId","50","177","241","32",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("2");
            obj.set_cssclass("edt_Login");
            obj.set_displaynulltext("아이디");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            obj.set_autoselect("true");
            this.div_login.addChild(obj.name, obj);

            obj = new Edit("edt_password","50","214","241","32",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("3");
            obj.set_cssclass("edt_Login");
            obj.set_password("true");
            obj.set_displaynulltext("비밀번호");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            obj.set_autoselect("true");
            this.div_login.addChild(obj.name, obj);

            obj = new CheckBox("ckb_saveId","50","252","143","51",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("5");
            obj.set_text("ID Save");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btn_login","296","177","80","70",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("4");
            obj.set_text("로그인");
            obj.set_cssclass("btn_Login");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btn_losePwd","260","265","116","20",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("7");
            obj.set_text("비밀번호 분실");
            obj.set_cssclass("btn_Login_link");
            obj.set_visible("false");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btn_apply",null,"265","85","20","166",null,null,null,null,null,this.div_login.form);
            obj.set_taborder("6");
            obj.set_text("사용신청");
            obj.set_cssclass("btn_Login_link");
            obj.set_visible("false");
            this.div_login.addChild(obj.name, obj);

            obj = new Combo("cbo_site","207","303","169","30",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("9");
            obj.set_datacolumn("SITE_NM");
            obj.set_codecolumn("SITE_CD");
            obj.set_displaynulltext("사이트 선택");
            obj.set_innerdataset("ds_site");
            obj.set_font("normal 700 12pt/normal \"굴림\"");
            obj.set_visible("false");
            obj.set_text("IFC");
            obj.set_value("IFC");
            obj.set_index("1");
            this.div_login.addChild(obj.name, obj);

            obj = new Combo("cbo_lang","50","303","152","30",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("8");
            obj.set_datacolumn("LANG_NM");
            obj.set_codecolumn("LANG_CD");
            obj.set_displaynulltext("언어선택");
            obj.set_innerdataset("ds_lang");
            obj.set_font("normal 700 12pt/normal \"굴림\"");
            obj.set_visible("false");
            obj.set_text("한국어(KOR)");
            obj.set_value("ko-KR");
            obj.set_index("0");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","0","77","50","140",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("11");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("w\r\n50");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_00",null,"77","50","140","0",null,null,null,null,null,this.div_login.form);
            obj.set_taborder("12");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("w\r\n50");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btn_del","265","184","16","18",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_inputDel");
            obj.set_visible("false");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btn_del2","265","221","16","18",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_inputDel");
            obj.set_visible("false");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_01","50","333",null,"30","50",null,null,null,null,null,this.div_login.form);
            obj.set_taborder("13");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h\r\n30");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("sta_00_00","5","6","179","49",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_Login_ci");
            this.div_login.addChild(obj.name, obj);

            obj = new Radio("rdo_workType","103","141","183","28",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_font("normal bold 14pt/normal \"Arial\"");
            var div_login_form_rdo_workType_innerdataset = new nexacro.NormalDataset("div_login_form_rdo_workType_innerdataset", obj);
            div_login_form_rdo_workType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">MES</Col><Col id=\"datacolumn\">MES</Col></Row><Row><Col id=\"codecolumn\">ERP</Col><Col id=\"datacolumn\">ERP</Col></Row></Rows>");
            obj.set_innerdataset(div_login_form_rdo_workType_innerdataset);
            obj.set_text("MES");
            obj.set_value("MES");
            obj.set_index("0");
            this.div_login.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,750,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("PDALogin.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 로그인
         * 파일명 		: frmLogin.xfdl
         * 작성자 		: 진성하
         * 작성일 		: 2021.01.04
         *
         * 설  명		: 로그인
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.01.14	진성하   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.application;
        this.application;
        var userDevice;

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	//this.nfn_formInit(obj);
        	//var sLoginInfo = this.gfn_getCookie("gv_loginInfo");
        	//this.fn_getLoginInfo(sLoginInfo);
        	this.application =  nexacro.getApplication();
        	trace(nexacro.getPrivateProfile("workType"));
        	this.div_login.form.edt_userId.set_value(nexacro.getPrivateProfile("userId"));
        	this.div_login.form.rdo_workType.set_value(nexacro.getPrivateProfile("workType"));
        	if(this.gfn_isNull(nexacro.getPrivateProfile("workType"))) this.div_login.form.rdo_workType.set_value("MES");
        	/*
        	if(this.div_login.form.rdo_workType.value=="MES"){
        		this.div_login.form.edt_password.set_visible(false);
        	}else{
        		this.div_login.form.edt_password.set_visible(true);
        	}
        	*/
        	this.div_login.set_left(this.width/2 - this.div_login.width/2);
        	this.div_login.set_top(this.height/2 - this.div_login.height/2);

        	var sSvcID = "selectCmMsg";
        	var sController = "/penc00010/selectCmMsg.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "gds_message=gds_message";
        	var sArgs = "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/


        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (strServiceId, strErrorCode, strErrorMsg)
        {
        	if (strErrorCode < 0)
        	{
        		var sErrMsg = "";
        		sErrMsg = "★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★\n";
        		sErrMsg += "service ID ====> " + strServiceId + "\n";
        		sErrMsg += strErrorMsg + "\n";
        		sErrMsg += "★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★";
        		// trace(sErrMsg, "error");
        	}

        	switch (strServiceId)
        	{
        	/*
        		case "loginInfo":
        			// 사용자 정보 서비스 호출 후처리
        			var sLoginInfo = this.div_login.form.gfn_getCookie("gv_loginInfo");
        			this.parent.parent.sta_user.set_visible(true);
        			this.parent.parent.sta_user.set_text(this.gf_getUserNm());
        			this.parent.parent.sta_logOut.set_visible(true);
        			this.parent.parent.sta_back.set_visible(true);
        			trace("loginInfo");
        			this.parent.set_url("pda::PDA00100M.xfdl");
        			break;
        	*/
        		case "loginPost":
        			if (strErrorCode < 0){
        				alert(strErrorMsg);
        				return;
        			}
        			nexacro.getApplication().gv_languageType =  this.ds_login.getColumn(0,"LANGUAGETYPE");
        			nexacro.getApplication().gv_siteType =  this.ds_login.getColumn(0,"SITETYPE");

        			var sLoginInfo = this.gfn_getCookie("gv_loginInfo");
        			trace("sLoginInfo-->"+sLoginInfo);
        			this.parent.parent.fn_getLoginInfo(sLoginInfo);
        			nexacro.getApplication().gv_pdaWorkType = this.div_login.form.rdo_workType.value;
        			break;

        		default:
        			break;
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/
        // 로그인 정보  서비스 호출
        /*
        this.fn_getLoginInfo = function (sLoginInfo)
        {
        	var sSvcID = "loginInfo";
        	var sController = "/penc00010/selectGlovelValueInfoPda.do";
        	var sInDatasets = "";
        	var sOutDatasets = "gds_userInfo=gds_userInfo gds_message=gds_message";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("gv_loginInfo", sLoginInfo);
        	sArgs += this.gfn_setParam("gv_languageType", "ko-KR");
        	sArgs += this.gfn_setParam("gv_siteType", "IFC");

        	var sCallbackFunc = "fn_callBack";
        	this.transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, sCallbackFunc);

        };
        */
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.btn_login_onclick = function(obj,e)
        {
        	var loginId = this.div_login.form.edt_userId.value;
            var loginPw = this.div_login.form.edt_password.value;
        	//var nextUri = "/smh/launch.html?screenid=pda";
            if(loginId == "" ){
                this.gfn_Message("InputSomeThing", "아이디", "warning", "ok");//alert("아이디를 입력해주세요.");
                this.div_login.form.edt_userId.setFocus();
                return;
            }
        	if(this.div_login.form.rdo_workType.value=="ERP"){
        		if(this.gfn_isNull(loginPw)){
        			this.gfn_Message("InputSomeThing", "비밀번호", "warning", "ok");//alert("아이디를 입력해주세요.");
        			//alert("비밀번호를 입력해주세요.");
        			this.div_login.form.edt_password.setFocus();
        			return;
        		}
        	}

        	if(this.div_login.form.ckb_saveId.value){
        		nexacro.setPrivateProfile("userId",this.div_login.form.edt_userId.value);
        		nexacro.setPrivateProfile("workType",this.div_login.form.rdo_workType.value);
        		trace("workType.."+nexacro.getPrivateProfile("workType"));

        	}
        	nexacro.getApplication().gv_pdaWorkType = this.div_login.form.rdo_workType.value;

        	this.ds_login.clearData();
        	this.ds_login.addRow();
        	this.ds_login.setColumn(0,"USER_ID",loginId);
        	this.ds_login.setColumn(0,"USER_PWD",loginPw);
        	this.ds_login.setColumn(0,"LANGUAGETYPE",this.div_login.form.cbo_lang.value);
        	this.ds_login.setColumn(0,"SITETYPE",this.div_login.form.cbo_site.value);
        	this.ds_login.setColumn(0,"WORKTYPE",this.div_login.form.rdo_workType.value);

        	var sSvcID = "loginPost";
        	//if(this.div_login.form.rdo_workType.value=="MES"){
        		var sController = "/cmsy00100/loginPost.do";
        	//}else{
        	//	var sController = "/eda00100/selectLogin.do";
        	//}
        	var sInDatasets = "INPUT=ds_login";
        	var sOutDatasets = "ds_rslt=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "loginPost");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        this.edt_password_onkeydown = function(obj,e)
        {	if(e.keycode == 13){
        		this.btn_login_onclick();
        	}
        };

        this.frmLogin_onsize = function(obj,e)
        {
        	this.div_login.set_left(this.application.mainframe.width/2 - 213);
        	this.div_login.set_top(this.application.mainframe.height/2 - this.div_login.height/2);

        };

        this.div_login_cbo_site_onitemchanged = function(obj,e)
        {
        	if(e.postvalue=="IFC"){
        		this.div_login.form.cbo_lang.set_value("ko-KR");
        	}else if(e.postvalue=="CCT"){
        		this.div_login.form.cbo_lang.set_value("zh-CN");
        	}else if(e.postvalue=="IFV"){
        		this.div_login.form.cbo_lang.set_value("vi-VN");
        	}
        };

        this.div_login_btn_apply_onclick = function(obj,e)
        {
        	var popupId = "CMCM00300P";
        	var oArg = {};
        	this.gfn_openPopup(popupId,"cmd::CMCM00300P.xfdl",oArg,"width=560,height=400");

        };

        this.div_login_btn_losePwd_onclick = function(obj,e)
        {
        	var popupId = "CMCM00310P";
        	var oArg = {};
        	this.gfn_openPopup(popupId,"cmd::CMCM00310P.xfdl",oArg,"width=290,height=164");

        };

        this.div_login_rdo_workType_onitemchanged = function(obj,e)
        {
        /*
        	if(e.postvalue=="MES"){
        		this.div_login.form.edt_password.set_visible(false);
        	}else{
        		this.div_login.form.edt_password.set_visible(true);
        	}
        */
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_login.form.edt_password.addEventHandler("onkeydown",this.edt_password_onkeydown,this);
            this.div_login.form.btn_login.addEventHandler("onclick",this.btn_login_onclick,this);
            this.div_login.form.btn_losePwd.addEventHandler("onclick",this.div_login_btn_losePwd_onclick,this);
            this.div_login.form.btn_apply.addEventHandler("onclick",this.div_login_btn_apply_onclick,this);
            this.div_login.form.cbo_site.addEventHandler("onitemchanged",this.div_login_cbo_site_onitemchanged,this);
            this.div_login.form.rdo_workType.addEventHandler("onitemchanged",this.div_login_rdo_workType_onitemchanged,this);
        };
        this.loadIncludeScript("PDALogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
