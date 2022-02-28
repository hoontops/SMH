(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLogin");
            this.set_titletext("login 시안 02");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lang", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LANG_NM\">한국어(KOR)</Col><Col id=\"LANG_CD\">ko-KR</Col></Row><Row><Col id=\"LANG_NM\">영어(ENGLISH)</Col><Col id=\"LANG_CD\">en-US</Col></Row><Row><Col id=\"LANG_NM\">중국어(CHINESE)</Col><Col id=\"LANG_CD\">zh-CN</Col></Row><Row><Col id=\"LANG_NM\">베트남어(Vietnamese)</Col><Col id=\"LANG_CD\">vi-VN</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_site", this);
            obj._setContents("<ColumnInfo><Column id=\"SITE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SITE_CD\">CCT</Col><Col id=\"SITE_NM\">CCT</Col></Row><Row><Col id=\"SITE_CD\">SMH</Col><Col id=\"SITE_NM\">SMH</Col></Row><Row><Col id=\"SITE_CD\">IFV</Col><Col id=\"SITE_NM\">IFV</Col></Row><Row><Col id=\"SITE_CD\">SMH</Col><Col id=\"SITE_NM\">SMH</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_login", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PWD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PWD_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"kickBeforeUser\" type=\"STRING\" size=\"256\"/><Column id=\"nextUri\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SITETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rslt", this);
            obj._setContents("<ColumnInfo><Column id=\"LOGIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_PW\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SESSION_LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_login","229","30","800","640",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_login");
            obj.set_text("");
            obj.set_borderRadius("0px");
            obj.set_boxShadow("0 none");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_02","400","58",null,null,"0","40",null,null,null,null,this.div_login.form);
            obj.set_taborder("22");
            obj.set_border("1px solid #e8e8e8");
            this.div_login.addChild(obj.name, obj);

            obj = new Edit("edt_userId","455","213","290","48",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("2");
            obj.set_cssclass("edt_Login_02");
            obj.set_displaynulltext("아이디");
            this.div_login.addChild(obj.name, obj);

            obj = new Edit("edt_password","455","267","290","48",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("3");
            obj.set_cssclass("edt_Login_02");
            obj.set_password("true");
            obj.set_displaynulltext("비밀번호");
            this.div_login.addChild(obj.name, obj);

            obj = new CheckBox("ckb_saveId","455","375","86","26",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("5");
            obj.set_text("ID Save");
            obj.set_textAlign("left");
            obj.set_color("#555555");
            obj.set_padding("0px 0px 0px 6px");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btn_login","455","321","290","48",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("4");
            obj.set_text("로그인");
            obj.set_cssclass("btn_Login_02");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btn_losePwd","455","407","290","36",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("6");
            obj.set_text("비밀번호 분실");
            obj.set_cssclass("btn_Login_link_02");
            this.div_login.addChild(obj.name, obj);

            obj = new Combo("cbo_site","603","449","142","36",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("8");
            obj.set_datacolumn("SITE_NM");
            obj.set_codecolumn("SITE_CD");
            obj.set_cssclass("cmb_login_02");
            obj.set_displaynulltext("사이트 선택");
            obj.set_innerdataset("ds_site");
            obj.set_text("IFC");
            obj.set_value("IFC");
            obj.set_index("1");
            this.div_login.addChild(obj.name, obj);

            obj = new Combo("cbo_lang","455","449","142","36",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("7");
            obj.set_datacolumn("LANG_NM");
            obj.set_codecolumn("LANG_CD");
            obj.set_cssclass("cmb_login_02");
            obj.set_displaynulltext("언어선택");
            obj.set_innerdataset("ds_lang");
            obj.set_text("한국어(KOR)");
            obj.set_value("ko-KR");
            obj.set_index("0");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","400","271","55","140",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("9");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("w\r\n55");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_00",null,"271","55","140","0",null,null,null,null,null,this.div_login.form);
            obj.set_taborder("10");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("w\r\n55");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btn_del","715","228","16","18",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_inputDel");
            obj.set_visible("false");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btn_del2","715","282","16","18",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_inputDel");
            obj.set_visible("false");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("sta_01","0","58","400","542",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("12");
            obj.set_background("url(\'theme://images/bg_login_02.png\') no-repeat left top");
            obj.set_text("");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"48","0",null,null,null,null,null,this.div_login.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_Login_ci");
            obj.set_background("url(\'theme::ifc/images/ci_login_02.png\') no-repeat center top");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("sta_00_00","528","138","144","54",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_Login_systemName");
            obj.set_background("url(\'theme://images/myHR_login_title_02.png\') no-repeat left top");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("sta_copyright","0",null,null,"24","0","16",null,null,null,null,this.div_login.form);
            obj.set_taborder("15");
            obj.set_text("COPYRIGHTⓒ2017 SM LINE ALL RIGHT RESERVED.");
            obj.set_textAlign("center");
            obj.set_color("#999999");
            obj.set_background("#ffffff");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_00_00_00","0","0",null,"20","0",null,null,null,null,null,this.div_login.form);
            obj.set_taborder("16");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("w800");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_01","0","0","31",null,null,"0",null,null,null,null,this.div_login.form);
            obj.set_taborder("17");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h\r\n640");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btn_login00_02","76","109","60","35",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("18");
            obj.set_text("이혜정");
            obj.set_cssclass("btn_Login");
            obj.set_visible("false");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btn_login00","142","109","60","35",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("19");
            obj.set_text("김희준");
            obj.set_cssclass("btn_Login");
            obj.set_visible("false");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btn_login00_00","208","109","60","35",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("20");
            obj.set_text("이우성");
            obj.set_cssclass("btn_Login");
            obj.set_visible("false");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btn_login00_01","274","109","60","35",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("21");
            obj.set_text("admin");
            obj.set_cssclass("btn_Login");
            obj.set_visible("false");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_00_00",null,"58","400","80","0",null,null,null,null,null,this.div_login.form);
            obj.set_taborder("11");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h80");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_00_00",null,"255","195","140","1065",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("중앙에 정렬되게 해주세요.");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1278,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLogin_02.xfdl", function() {
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
        this.application ;
        var userDevice;
        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	//this.nfn_formInit(obj);
        	var sLoginInfo = this.gfn_getCookie("gv_loginInfo");
        	this.fn_getLoginInfo(sLoginInfo);
        	this.application =  nexacro.getApplication();
        	this.div_login.set_left(this.application.mainframe.width/2 - this.div_login.width/2);
        	this.div_login.set_top(this.application.mainframe.height/2 - this.div_login.height/2);

        	gv_appBodyFrameSet.set_separatesize("76,*,0,0,27");

        	this.div_login.form.edt_userId.set_value(nexacro.getPrivateProfile("userId"));

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
        		case "loginInfo":
        			// 사용자 정보 서비스 호출 후처리
        			if (strErrorCode != 0)
        			{
        				gv_appBodyFrameSet.set_separatesize("0,0,0,*,0");
        				return;
        			}
        			//gv_appBodyFrameSet.set_separatesize("76,*,0,0,27");
        			gv_appBodyFrameSet.set_separatesize("76,*,0,0,27");
        			var sLoginInfo = this.div_login.form.gfn_getCookie("gv_loginInfo");

        			gv_appTopFrame.form.fn_getLoginInfo(sLoginInfo);
        			break;

        		case "loginPost":
        			if(userDevice == "MOBILE"){
        				return;
        			}

        			if (strErrorCode < 0){
        				gv_appBodyFrameSet.set_separatesize("0,0,0,*,0");
        				alert(strErrorMsg);
        				return;
        			}
        			nexacro.getApplication().gv_languageType =  this.ds_login.getColumn(0,"LANGUAGETYPE");
        			nexacro.getApplication().gv_siteType =  this.ds_login.getColumn(0,"SITETYPE");

        			var sLoginInfo = this.div_login.form.gfn_getCookie("gv_loginInfo");

        			gv_appTopFrame.form.fn_getLoginInfo(sLoginInfo);
        			//gv_appBodyFrameSet.set_separatesize("76,*,0,0,27");
        			gv_appBodyFrameSet.set_separatesize("76,*,0,0,27");
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
        this.fn_getLoginInfo = function (sLoginInfo, paramEPS)
        {
        	var sAppId = nexacro.getApplication().id.toUpperCase();

        	var sSvcID = "loginInfo";
        	var sController = "/cmsy00100/getLoginInfo.do";
        	var sInDatasets = "";
        	var sOutDatasets = "ds_userInfo=ds_userInfo";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("gv_loginInfo", sLoginInfo);

        	var sCallbackFunc = "fn_callBack";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, sCallbackFunc);
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        this.btn_login_onclick = function(obj,e){
        	//this.div_login.form.edt_userId.set_value('admin');
        	//this.div_login.form.edt_password.set_value('a123456!');
        	this.fn_logins();
        };


        this.fn_logins = function(){

        	var device = "win16|win32|win64|mac|macintel";
        	userDevice = "PC";
        	try{
        		if ( navigator.platform ) {
        			if ( device.indexOf(navigator.platform.toLowerCase()) < 0 ) {
        				userDevice = "MOBILE";
        			} else {
        				userDevice = "PC";
        			}
        		}
        	}
        	catch(eeee){
        	}

        	var loginId = this.div_login.form.edt_userId.value;
            var loginPw = this.div_login.form.edt_password.value;
        	var nextUri = "/smh/index.html";
            if(loginId == "" ){
                this.gfn_Message("InputSomeThing", "아이디", "warning", "ok");//alert("아이디를 입력해주세요.");
                this.div_login.form.edt_userId.setFocus();
                return;
            }
            if(this.gfn_isNull(loginPw)){
                this.gfn_Message("InputSomeThing", "비밀번호", "warning", "ok");//alert("아이디를 입력해주세요.");
                //alert("비밀번호를 입력해주세요.");
                this.div_login.form.edt_password.setFocus();
                return;
            }

        	if(this.div_login.form.ckb_saveId.value){
        		nexacro.setPrivateProfile( "userId",this.div_login.form.edt_userId.value);
        	}
        	this.ds_login.clearData();
        	this.ds_login.addRow();
        	this.ds_login.setColumn(0,"USER_ID",loginId);
        	this.ds_login.setColumn(0,"USER_PWD",loginPw);
        	this.ds_login.setColumn(0,"LANGUAGETYPE",this.div_login.form.cbo_lang.value);
        	this.ds_login.setColumn(0,"SITETYPE",this.div_login.form.cbo_site.value);

        	var sSvcID = "loginPost";
        	var sController = "/cmsy00100/loginPost.do";
        	var sInDatasets = "INPUT=ds_login";
        	var sOutDatasets = "ds_rslt=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "loginPost");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);

        }

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

        this.btn_login_onclick2 = function(obj,e)
        {

        	this.div_login.form.edt_userId.set_value('admin');
        	this.div_login.form.edt_password.set_value('a123456!');
        	this.fn_logins();
        };

        this.btn_login_onclick3 = function(obj,e)
        {

        	this.div_login.form.edt_userId.set_value('170069');
        	this.div_login.form.edt_password.set_value('a123456!');
        	this.fn_logins();
        };

        this.btn_login_onclick4 = function(obj,e)
        {
        	this.div_login.form.edt_userId.set_value('170052');
        	this.div_login.form.edt_password.set_value('a123456!');
        	this.fn_logins();

        };

        this.btn_login_onclick5 = function(obj,e)
        {
        	this.div_login.form.edt_userId.set_value('170057');
        	this.div_login.form.edt_password.set_value('a123456!');
        	this.fn_logins();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.addEventHandler("onsize",this.frmLogin_onsize,this);
            this.div_login.form.edt_password.addEventHandler("onkeydown",this.edt_password_onkeydown,this);
            this.div_login.form.btn_login.addEventHandler("onclick",this.btn_login_onclick,this);
            this.div_login.form.btn_losePwd.addEventHandler("onclick",this.div_login_btn_losePwd_onclick,this);
            this.div_login.form.cbo_site.addEventHandler("onitemchanged",this.div_login_cbo_site_onitemchanged,this);
            this.div_login.form.btn_login00_02.addEventHandler("onclick",this.btn_login_onclick4,this);
            this.div_login.form.btn_login00.addEventHandler("onclick",this.btn_login_onclick5,this);
            this.div_login.form.btn_login00_00.addEventHandler("onclick",this.btn_login_onclick3,this);
            this.div_login.form.btn_login00_01.addEventHandler("onclick",this.btn_login_onclick2,this);
        };
        this.loadIncludeScript("frmLogin_02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
