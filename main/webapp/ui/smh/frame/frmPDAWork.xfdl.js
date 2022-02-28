(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,768);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_RM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">00200</Col><Col id=\"PAGE_ID\">PDA00200M</Col><Col id=\"MENU_NM\">인수등록</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"PAGE_URL\">pda::PDA00200M.xfdl</Col></Row><Row><Col id=\"MENU_ID\">00300</Col><Col id=\"PAGE_ID\">PDA00300M</Col><Col id=\"MENU_NM\">작업시작</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"PAGE_URL\">pda::PDA00300M.xfdl</Col></Row><Row><Col id=\"MENU_ID\">00400</Col><Col id=\"MENU_NM\">작업완료</Col><Col id=\"PAGE_ID\">PDA00400M</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"MENU_AUTH\">1111</Col><Col id=\"PAGE_URL\">pda::PDA00400M.xfdl</Col></Row><Row><Col id=\"MENU_NM\">인계등록</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"MENU_ID\">00500</Col><Col id=\"PAGE_URL\">pda::PDA00500M.xfdl</Col><Col id=\"PAGE_ID\">PDA00500M</Col></Row><Row><Col id=\"MENU_NM\">인수취소</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"MENU_ID\">00600</Col><Col id=\"PAGE_URL\">pda::PDA00700M.xfdl</Col><Col id=\"PAGE_ID\">PDA00700M</Col></Row><Row><Col id=\"MENU_NM\">시작취소</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"MENU_ID\">00700</Col><Col id=\"PAGE_URL\">pda::PDA00800M.xfdl</Col><Col id=\"PAGE_ID\">PDA00800M</Col></Row><Row><Col id=\"MENU_NM\">완료취소</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"MENU_ID\">00800</Col><Col id=\"PAGE_URL\">pda::PDA00900M.xfdl</Col><Col id=\"PAGE_ID\">PDA00900M</Col></Row><Row><Col id=\"MENU_NM\">인계취소</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"MENU_ID\">00900</Col><Col id=\"PAGE_URL\">pda::PDA00600M.xfdl</Col><Col id=\"PAGE_ID\">PDA00600M</Col></Row><Row><Col id=\"MENU_NM\">작업정보변경</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"MENU_ID\">01000</Col><Col id=\"PAGE_URL\">pda::PDA01000M.xfdl</Col><Col id=\"PAGE_ID\">PDA01000M</Col></Row><Row><Col id=\"MENU_NM\">자원변경</Col><Col id=\"MENU_LEVEL\">3</Col><Col id=\"PAGE_TYPE\">MAIN</Col><Col id=\"MENU_ID\">01100</Col><Col id=\"PAGE_URL\">pda::PDA01100M.xfdl</Col><Col id=\"PAGE_ID\">PDA01100M</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"SESSION_LANGUAGETYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_work","0","63",null,null,"0","-30",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div_00");
            obj.set_url("pda::PDALogin.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"63","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_LF_menu",null,"63","140","488","0",null,null,null,null,null,this);
            obj.set_text("pdiv_00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_LF_menu");
            this.addChild(obj.name, obj);

            obj = new Grid("grdLeft","5","36",null,null,"0","0",null,null,null,null,this.pdv_LF_menu.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_menu");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_scrollbartype("auto");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("false");
            obj.set_treeasynctoggle("false");
            obj.set_cssclass("grd_LF_menu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"230\"/></Columns><Rows><Row size=\"45\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" tooltiptext=\"bind:MENU_NM\" cssclass=\"lev0\" treestartlevel=\"1\" treelevel=\"bind:MENU_LEVEL\" font=\"normal 700 22px/normal &quot;Malgun Gothic&quot;,&quot;맑은 고딕&quot;,&quot;Arial&quot;\"/></Band></Format></Formats>");
            this.pdv_LF_menu.addChild(obj.name, obj);

            obj = new Static("sta_lfTitle","10","3",null,"30","30",null,null,null,null,null,this.pdv_LF_menu.form);
            obj.set_taborder("1");
            obj.set_text("메뉴");
            obj.set_cssclass("sta_LF_title");
            obj.set_font("normal 18pt/normal \"Arial\"");
            this.pdv_LF_menu.addChild(obj.name, obj);

            obj = new Static("sta_user",null,"17","124","23","-384",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("홍길동");
            obj.set_visible("false");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_logOut",null,"0","124","63","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("LogOut");
            obj.set_font("normal bold 20pt/normal \"Arial\"");
            obj.set_visible("false");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta_back","0","0","114","63",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text(" Back");
            obj.set_font("normal bold 20pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_formNm","129","14",null,"33","157",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_font("normal bold 16pt/normal \"Arial\"");
            obj.set_visible("true");
            obj.set_textAlign("center");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Static("sta_menu",null,"0","124","63","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("MENU");
            obj.set_font("normal bold 20pt/normal \"Arial\"");
            obj.set_visible("false");
            obj.set_textAlign("center");
            obj.set_color("white");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","pda",480,768,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","pda::PDALogin.xfdl");
        };
        
        // User Script
        this.registerScript("frmPDAWork.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 사용자정보 수정
         * 파일명 		: cmam00100.xfdl
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
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.areaId;	//
        this.resourceId;	//
        this.workerId;
        this.equipmentId;
        this.areaNm;	//
        this.resourceNm;	//
        this.workerNm;
        this.equipmentNm;

        //this.fv_viewMode = false;
        this.application;

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	//this.nfn_formInit(obj);
        	if(!this.gfn_isNull(this.gf_getUserNm())){
        		this.sta_logOut.set_visible(true);
        		////this.sta_user.set_visible(true);
        		//this.sta_user.set_text(this.gf_getUserNm());
        		this.sta_back.set_visible(true);
        	}
        	var sLoginInfo = this.gfn_getCookie("gv_loginInfo");
        	this.fn_getLoginInfo(sLoginInfo);

        	this.application =  nexacro.getApplication();

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
        // 로그인 정보  서비스 호출
        this.fn_getLoginInfo = function (sLoginInfo, paramEPS)
        {
        	var sLoginInfo = this.gfn_getCookie("gv_loginInfo");
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
        				this.gfn_sessionCheckPda(strErrorCode, strErrorMsg);
        				//this.alert("로그인이 필요한 서비스입니다.\n다시 로그인 해주시기 바랍니다.");
        				//this.div_work.set_url("pda::PDALogin.xfdl");
        				return;
        			}
        			//trace(nexacro.getApplication().gds_userInfo.saveXML());
        			// 사용자 정보 서비스 호출 후처리
        			if(!this.gfn_isNull(this.gf_getUserNm())){
        				this.sta_logOut.set_visible(true);
        				////this.sta_user.set_visible(true);
        				//this.sta_user.set_text(this.gf_getUserNm());
        				this.sta_back.set_visible(true);
        				//trace("gv_pdaWorkType-->"+this.gf_getPdaWorkType());
        				if(this.gf_getPdaWorkType()=="ERP"){
        					this.div_work.set_url("pda::EDA00100M.xfdl");
        				}else{
        					this.div_work.set_url("pda::PDA00100M.xfdl");
        				}
        			}
        			break;

        		default:
        			break;
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/

        /**************************************************************************
         * 80. 팝업
        ***************************************************************************/
        //팝업 결과 리턴

        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/
        this.fn_menuShowHide = function(viewMode)
        {
        	trace(viewMode);
        	if(viewMode){
        		this.pdv_LF_menu.trackPopup(0, 33, 251, this.pdv_LF_menu.height, "fn_CallbackPdvMenu");
        		this.sta_back.set_cssclass("btn_TF_menuShow");
        		this.sta_back.tooltiptext = "OpenLeftMenu";
        		this.fv_viewMode = true;
        	}else{
        		this.pdv_LF_menu.closePopup();
        		this.sta_back.set_cssclass("btn_TF_menuHide");
        		this.sta_back.tooltiptext = "CloseLeftMenu";
        		this.fv_viewMode = false;
        	}
        	var dictionaryname =  this.nfn_getDictionaryname(this.sta_back.tooltiptext,true);
        	this.sta_back.set_tooltiptext(dictionaryname);
        }
        this.fn_CallbackPdvMenu = function ()
        {
        	trace("fn_CallbackPdvMenu");

        }
        this.fn_callLogout = function ()
        {
        	var sSvcID = "selectLogoutCd";
        	var sController = "/smh/logout.scr";
        	var sOutDatasets = "ds_logout=ds_output";
        	var sCallbackFunc = "fn_callBack";
        	this.gfn_transaction(sSvcID, sController, "", sOutDatasets, "", sCallbackFunc,"","",false);

        	this.div_work.set_url("pda::PDALogin.xfdl");
        	this.sta_logOut.set_visible(false);
        	//this.sta_user.set_visible(false);
        	this.sta_back.set_visible(false);
        	this.bLogOut = true;
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.sta_back_onclick = function(obj,e)
        {
        	this.sta_formNm.set_text("Main Menu");
        	trace("gf_getPdaWorkType-->"+this.gf_getPdaWorkType());
        	if(this.gf_getPdaWorkType()=="ERP"){
        		this.div_work.set_url("pda::EDA00100M.xfdl");
        	}else{
        		this.div_work.set_url("pda::PDA00100M.xfdl");
        		this.sta_logOut.set_visible(true);
        		this.sta_menu.set_visible(false);
        	}
        };

        this.sta_logOut_onclick = function(obj,e)
        {
        	//if (this.gfn_confirm("로그아웃 하시겠습니까?"))
        	var bOK = this.gfn_Message("LOGOUTCONFIRM", null, "conf", "yesno");
        	if (bOK == false) return;

        	this.fn_callLogout(); //로그아웃 서비스 호출

        };

        this.pdv_LF_menu_oncloseup = function(obj,e)
        {
        	this.sta_back.set_cssclass("btn_TF_menuHide");
        	this.sta_back.tooltiptext = "CloseLeftMenu";
        	this.fv_viewMode = false;
        };

        this.pdv_LF_menu_grdLeft_oncellclick = function(obj,e)
        {
        	var url = this.ds_menu.getColumn(e.row,"PAGE_URL");
        	this.div_work.set_url(url);
        	this.sta_formNm.set_text(this.ds_menu.getColumn(e.row,"MENU_NM"));
        	this.pdv_LF_menu.closePopup();
        };

        this.sta_menu_onclick = function(obj,e)
        {
        	var left = nexacro.toNumber(this.width) - 90;
        	var top = 63;
        	this.pdv_LF_menu.trackPopup(left, top, this.pdv_LF_menu.width, this.pdv_LF_menu.height, "fn_Callback_pdv_grdMenu");
        	this.pdv_LF_menu.show();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.pdv_LF_menu.addEventHandler("oncloseup",this.pdv_LF_menu_oncloseup,this);
            this.pdv_LF_menu.form.grdLeft.addEventHandler("oncellclick",this.pdv_LF_menu_grdLeft_oncellclick,this);
            this.sta_logOut.addEventHandler("onclick",this.sta_logOut_onclick,this);
            this.sta_back.addEventHandler("onclick",this.sta_back_onclick,this);
            this.sta_menu.addEventHandler("onclick",this.sta_menu_onclick,this);
        };
        this.loadIncludeScript("frmPDAWork.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
