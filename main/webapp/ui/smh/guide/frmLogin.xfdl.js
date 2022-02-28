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
            this.set_titletext("login");
            this.set_background("#f0f0f0");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lang", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LANG_NM\">한국어(KOR)</Col><Col id=\"LANG_CD\">ko-KR</Col></Row><Row><Col id=\"LANG_NM\">영어(ENGLISH)</Col><Col id=\"LANG_CD\">en-US</Col></Row><Row><Col id=\"LANG_NM\">중국어(CHINESE)</Col><Col id=\"LANG_CD\">zh-CN</Col></Row><Row><Col id=\"LANG_NM\">베트남어(Vietnamese)</Col><Col id=\"LANG_CD\">vi-VN</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_site", this);
            obj._setContents("<ColumnInfo><Column id=\"SITE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SITE_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SITE_CD\">C</Col><Col id=\"SITE_NM\">CCT</Col></Row><Row><Col id=\"SITE_CD\">F</Col><Col id=\"SITE_NM\">IFC</Col></Row><Row><Col id=\"SITE_CD\">V</Col><Col id=\"SITE_NM\">IFV</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_login", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PWD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PWD_ORG\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"kickBeforeUser\" type=\"STRING\" size=\"256\"/><Column id=\"nextUri\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SITETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LANGUAGETYPE\">ko-KR</Col><Col id=\"SITETYPE\">C</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rslt", this);
            obj._setContents("<ColumnInfo><Column id=\"LOGIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_PW\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_00","425","115","426","463",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_login");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","27","41","120","20",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("10");
            obj.set_text("IFC-MES");
            obj.set_cssclass("sta_Login_systemName");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_01","165","90","96","96",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_Login_icon");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_02","162","204","102","28",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("12");
            obj.set_text("로그인");
            obj.set_cssclass("sta_Login_title");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_03","50","241","326","20",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("13");
            obj.set_text("로그인 후 시스템을 이용하실 수 있습니다.");
            obj.set_cssclass("sta_Login_subTitle");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_userId","50","277","241","32",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("edt_Login");
            obj.set_displaynulltext("아이디");
            this.div_00.addChild(obj.name, obj);

            obj = new Edit("edt_password","50","314","241","32",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("3");
            obj.set_cssclass("edt_Login");
            obj.set_password("true");
            obj.set_displaynulltext("비밀번호");
            this.div_00.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","50","365","73","20",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("5");
            obj.set_text("ID Save");
            obj.set_cssclass("chk_login");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_login","296","277","80","70",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("4");
            obj.set_text("로그인");
            obj.set_cssclass("btn_Login");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_losePwd","260","365","116","20",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("7");
            obj.set_text("비밀번호 분실");
            obj.set_cssclass("btn_Login_link");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_apply",null,"365","85","20","166",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("6");
            obj.set_text("사용신청");
            obj.set_cssclass("btn_Login_link");
            this.div_00.addChild(obj.name, obj);

            obj = new Combo("cmb_site","207","403","169","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_site");
            obj.set_datacolumn("SITE_NM");
            obj.set_codecolumn("SITE_CD");
            obj.set_cssclass("cmb_login");
            obj.set_displaynulltext("사이트 선택");
            obj.set_index("0");
            this.div_00.addChild(obj.name, obj);

            obj = new Combo("cmb_lang","50","403","152","30",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_lang");
            obj.set_datacolumn("LANG_NM");
            obj.set_codecolumn("LANG_CD");
            obj.set_cssclass("cmb_login");
            obj.set_displaynulltext("언어선택");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00","0","177","50","140",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("14");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("w\r\n50");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_00",null,"177","50","140","0",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("15");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("w\r\n50");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_del","265","284","16","18",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_inputDel");
            obj.set_visible("false");
            this.div_00.addChild(obj.name, obj);

            obj = new Button("btn_del2","265","321","16","18",null,null,null,null,null,null,this.div_00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_inputDel");
            obj.set_visible("false");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_01","50","433",null,"30","50",null,null,null,null,null,this.div_00.form);
            obj.set_taborder("16");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            obj.set_text("h\r\n30");
            this.div_00.addChild(obj.name, obj);

            obj = new Static("sta_00","40","20","179","49",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_Login_ci");
            this.addChild(obj.name, obj);

            obj = new Static("Static16_01_00_00_00",null,"259","195","140","182",null,null,null,null,null,this);
            obj.set_taborder("2");
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
            obj = new BindItem("item0","div_00.form.edt_userId","value","ds_login","USER_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_00.form.edt_password","value","ds_login","USER_PWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_00.form.cmb_site","value","ds_login","SITETYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_00.form.cmb_lang","value","ds_login","LANGUAGETYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLogin.xfdl", function() {
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

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	var sLoginInfo = this.gfn_getCookie("gv_loginInfo");
        	this.fn_getLoginInfo(sLoginInfo);
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
        				nexacro.getApplication().mainframe.VFSet01.set_separatesize("0,0,0,*,0")
        				return;
        			}
        			//nexacro.getApplication().mainframe.VFSet01.set_separatesize("65,*,0,30")
        			nexacro.getApplication().mainframe.VFSet01.set_separatesize("65,0,*,0,30")
        			var sLoginInfo = this.gfn_getCookie("gv_loginInfo");
        			nexacro.getApplication().mainframe.VFSet01.TopFrame.form.fn_getLoginInfo(sLoginInfo);
        			break;

        		case "loginPost":
        			if (strErrorCode < 0){
        				nexacro.getApplication().mainframe.VFSet01.set_separatesize("0,0,0,*,0")
        				alert(strErrorMsg);
        				return;
        			}
        			nexacro.getApplication().gv_languageType =  this.ds_login.getColumn(0,"LANGUAGETYPE");
        			nexacro.getApplication().gv_siteType =  this.ds_login.getColumn(0,"SITETYPE");

        			//nexacro.getApplication().mainframe.VFSet01.set_separatesize("65,*,0,30")
        			nexacro.getApplication().mainframe.VFSet01.set_separatesize("65,0,*,0,30")
        			var sLoginInfo = this.gfn_getCookie("gv_loginInfo");
        			nexacro.getApplication().mainframe.VFSet01.TopFrame.form.fn_getLoginInfo(sLoginInfo);

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

        this.btn_login_onclick = function(obj,e)
        {
        	var loginId = this.edt_userId.value;
            var loginPw = this.edt_password.value;
            var nextUri = "/smh/index.html";
            if(loginId == "" ){
                alert("아이디를 입력해주세요.");
                this.edt_userId.setFocus();
                return;
            }

            if(loginPw == "" ){
                alert("비밀번호를 입력해주세요.");
                this.edt_password.setFocus();
                return;
            }

        	var sSvcID = "loginPost";
        	var sController = "/cmsy00100/loginPost.do";
        	var sInDatasets = "INPUT=ds_login";
        	var sOutDatasets = "ds_rslt=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", "loginPost");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };


        this.edt_password_onkeydown = function(obj,e)
        {	if(e.keycode == 13){
        		//this.btn_login_onclick();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.div_00.form.edt_password.addEventHandler("onkeydown",this.edt_password_onkeydown,this);
            this.div_00.form.btn_login.addEventHandler("onclick",this.btn_login_onclick,this);
        };
        this.loadIncludeScript("frmLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
