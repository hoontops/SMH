var pForm = nexacro.Form.prototype;
/*
 ===============================================================================
 == Form관련 함수 목록은 여기에 작성한다. (2015.09.02)
 ===============================================================================
 ● gfn_getServiceUrl		: 업무서비스 URL 얻기
 ● gfn_openPopupHtml		: 새창 열기 함수
 ● gfn_setReturn			: 팝업 결과값 전달 함수
 ● gfn_getReturn			: 팝업 결과값 받는 함수
 ● gfn_getMenuInfo			: menuid 를 기준으로 해당 메뉴의 칼럼값을 전달
 ● gfn_getFrameAguments	: child Frame에 등록한 아규먼트를 반환한다.
 ● gfn_getSession			: gds_userInfo의 내용을 컬럼아이디로 넣어 반환한다.
 ● gfn_setFrameChange		: 프레임 화면을 변경한다.
 ● gfn_showWork			: 신규 윈도우 화면을 생성하고 open 시킴
 ● gfn_childFrame_ondeactivate			: ChildFrame deactivate 이벤트
 ● gfn_childFrame_onactivate			: ChildFrame activate 이벤트
 ● gfn_goPage				: 화면 Url을 기준으로 화면을 open하는 함수 (화면 Navigation정보는 갱신하지 않음)
 ● gfn_closeMenu			: 화면 닫기 공통 함수
 ● gfn_setEnableCtrl		: 화면안의 컨트롤을 활성화 또는 비활성화 처리
 ● gfn_setEnterKeyEvent	: gfn_setEnterSearch addEventHandler
 ● gfn_setEnterSearch		: 버튼 엔터키 설정 함수
 ● gfn_setAuth				: 버튼 권한처리
 ● _gfn_setDefault			: 화면안의 컨트롤의 default 속성을 설정한다.
 ● gfn_common_input_comp_onkeydown : 입력 콤포넌트 onkeydown 이벤트 처리
 ● _gfn_setHeight			: 폼 height 설정
 ● gfn_formOnLoad			: Form Load 시 공통 기능 처리
 ● gfn_allCallFunction		: Form에 속한 모든 컴포넌트를 함수의 인자로 넘겨주고 함수 호출처리
 ● gfn_formSetInit			: Form에 속한 컨트롤들의 초기화 처리
 ● gfn_topMenuClick		: top 프레임에서 상위 레벨을 선택했을 때의 처리
 ● gfn_checkMenuStat		: 선택된 메뉴의 상태를 확인해서 오픈할 수 없을 경우에 메시지를 표시한다.
 ● gfn_alert				: 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을 생성해서 해당 값을 보여주는 함수
 ● gfn_confirm				: 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을 생성해서 해당 값을 보여주는 함수
 ● gfn_newPopup			: 화면 새창 열림 실행 함수 - 프레임에서 사용
 ● gfn_openPopup			: 팝업 오픈 실행 함수
 ● gfn_popupClose			: 팝업 창 닫기 함수
 ● gfn_getPopupRtn			: 팝업 창 아규먼트
 ● gfn_arrangeWin			: 열려있는 윈도우 화면을 정렬
 ● gfn_setParam			:  인자를 넘겨줄 경우에 넘겨주는 규칙대로 인자/값을 설정
 ● gfn_Message				: 메세지 코드에 따른 실제 메세지값을 찾은 후 메세지를 뿌려줌
 ● gfn_GetMessTxt			: 메세지 값을 문자열 치환하여 메세지 내용을 조회한다.
 ● gfn_frameclose			: 프레임 폼 onclose event
 ● gfn_fold				: Div 접기 함수 (접기(▲)버튼 온클릭에서 호출)
 ● gfn_unFold				: Div 펴기 함수 (펴기(▼)버튼 온클릭에서 호출)
 ● gfn_searchCtrl			: Search Div의 펼침/숨김 함수 (-,+)버튼 온클릭에서 호출)
 ● gfn_accessTime			: 폼 로딩시간 보여주기
 ● gfn_getActiveMenuId		: 현재 활성화된 폼의 메뉴아이디값 반환
 ● gfn_sessionCheck		: 현재 세션상태에 따라 URL처리
 ● gfn_callFormFunc		: 페이지 URL값으로 현재 오픈여부 판별 및 해당 페이지의 지정한 함수 호출
 ● gfn_openAppPopup		: 타 업무화면을 모달리스 팝업형태로 호출
 ● _gfn_clsWaitCursor		: gfn_openAppPopup() 함수의 waitcursor 제거 처리를 위한 이벤트함수
 */


/**
* 전역변수 선언
* @public
* @type number
* @example
* @mem Lib.Validation
*/
pForm._rtnModal=null;


/**
* 업무서비스 URL 얻기
* @param  {string} sCommand 업무 아이디 
* @return {string} sUrl 서비스 URL
* @example this.gfn_getServiceUrl("IFC")
* @memberOf public
*/
pForm.gfn_getServiceUrl = function(sCommand)
{
	var sUrl = nexacro.getApplication().gds_url.lookup("RUN_MODE", nexacro.getApplication().gv_runMode, sCommand);
	return sUrl;
	
}

/**
* 새창 열기 함수
* @param  {string} sID 새창 ID
* @param  {string} sURL 새창 url
* @param  {Number} nLeft 좌측
* @param  {Number} nTop 상단
* @param  {Number} nWidth 넓이
* @param  {Number} nHeight 높이
* @return N/A
* @example
* @memberOf public
*/
pForm.gfn_openPopupHtml = function (sID, sURL, nLeft, nTop, nWidth, nHeight)
{
	if(this.gfn_isNull(nWidth))  nWidth = nexacro.getApplication().mainframe.width;
	if(this.gfn_isNull(nHeight)) nHeight = nexacro.getApplication().mainframe.height;
	if(this.gfn_isNull(nLeft))   nLeft   = 10;
	if(this.gfn_isNull(nTop))    nTop    = 10;
	
	//trace("sID : "+sID + ", nWidth : "+nWidth + ", nHeight : "+nHeight + ", nLeft : "+nLeft + ", nTop : "+nTop );  
	
	
    if (system.navigatorname == "nexacro")//nexacro.Browser != "Runtime")//browser 일 때 실행
    {
		window.open(sURL, sID, "toolbar=no,resizable=yes,menubar=no,status=no,left="+nLeft+",top="+nTop+",width="+nWidth+",height="+nHeight+",scrollbars=yes");
    }
    else //nexacro
    {
		var sXadl = nexacro.getApplication().xadl;
		var nLastIdx = sXadl.lastIndexOf("/");//서버에서는 경로가 달라진다. 확인 필요.
		sXadl = sXadl.substring(0, nLastIdx+1) + "start.json";
		system.execNexacro("-S '" +sXadl+ "' -K '"+nexacro.getApplication().id+"'");
    }
	
}

/**
* 팝업 결과값 전달 함수
* @param  {object} obj argument object
* @return {string} 
* @example
* @memberOf public
*/
pForm.gfn_setReturn = function(obj)
{
    //trace("gfn_setReturn ==");
	this._rtnModal = null;

	if(typeof(obj) === "string") {
		this._rtnModal = obj;
		return obj;
	}

	if(obj instanceof Array) {
		this._rtnModal = new Array();
	} else {
		this._rtnModal = new Object();
	}
	for(var prop in obj)
	{
		this._rtnModal[prop] = obj[prop]
	}

	return "_rtnModal";
}

/**
* 팝업 결과값 받는 함수
* @param  N/A
* @return {object} 
* @example
* @memberOf public
*/
pForm.gfn_getReturn = function()
{
	return this._rtnModal;
}


/**
* menuid 를 기준으로 해당 메뉴의 칼럼값을 전달
* @param  {string} 메뉴아이디
* @param  {string} 메뉴의 칼럼
* @return {string} 컬럼값
* @example
* @memberOf public
*/
pForm.gfn_getMenuInfo = function (menuid, menuInfo)
{
	return this.gfn_getLookupData(nexacro.getApplication().gds_menu, "MENU_ID", menuid, menuInfo);
}

/**
* child Frame에 등록한 아규먼트를 반환한다.
* @param  {string} winKey, pageUrl 등등
* @return {string}반환값
* @example
* @memberOf public
*/
pForm.gfn_getFrameAguments = function (sVal)
{
    var rtnVal = "";
    try
    {
        rtnVal = this.getOwnerFrame().arguments[sVal];
    }
    catch(e){};
    return rtnVal;
}


/**
* gds_userInfo의 내용을 컬럼아이디로 넣어 반환한다.
* @param  {string} 컬럼아이디
* @return {string} 컬럼값
* @example
* @memberOf public
*/
pForm.gfn_getSession =  function(sColId)
{
	if(nexacro.getApplication().gds_userInfo.getRowCount() > 0)
	{
		return nexacro.getApplication().gds_userInfo.getColumn(0, sColId);
	}
	else
	{
		return "";
	}
}

/**
* 프레임 화면을 변경한다.
* @param  {string} 로그인:login, 메인:main, 업무:work
* @return N/A
* @example
* @memberOf public
*/
pForm.gfn_setFrameChange = function(sView)
{

	var strSeparatesize = gv_appBodyFrameSet.separatesize;

	switch(sView)
	{
	    case "login" : strSeparatesize = "0,0,0,*,0"; break;
	    case "main" : strSeparatesize = "76,0,*,0,27"; break;
	    case "work" : strSeparatesize = "76,*,0,0,27"; break;
	}


	gv_appBodyFrameSet.set_separatesize(strSeparatesize);

	gv_viewType = sView;

}

/**
* 신규 윈도우 화면을 생성하고 open 시킴
* @param {string}  메뉴아이디
* @param {object}  넘겨줄 arguments
* @param {boolen}  Reload 여부
* @return  N/A
* @example
* @memberOf public
*/
pForm.gfn_showWork = function ( sMenuId, objArgs, bReload )
{
	var objMdiFrame = gv_appWorkTopFrame;//nexacro.getApplication().MdiFrame;
	var objWorkFrame = gv_appWorkFrameSet;//nexacro.getApplication().WorkFrame;

	var nFRow;
	var sPGMPATH;
	var sPGMID;

	var nFRowOpen;
	var sWinId;
	var sMenuNm;
	var sMenuNavi;

	//var objMenuDs = nexacro.getApplication().gdsLeftMenu;
	var objMenuDs = nexacro.getApplication().gds_menu;
	var objOpenMenuDs = nexacro.getApplication().gdsOpenMenu;
	nFRow 		= objMenuDs.findRow("MENU_ID", sMenuId);
	sPGMPATH 	= objMenuDs.getColumn(nFRow, "PAGE_URL");
	sPGMID 		= objMenuDs.getColumn(nFRow, "MENU_ID")
	sMenuNm 	= objMenuDs.getColumn(nFRow, "MENU_NM");
	sMenuAuth   = objMenuDs.getColumn(nFRow, "MENU_AUTH");

	nFRowOpen = objOpenMenuDs.findRow("MENU_ID", sMenuId);
	sWinId = objOpenMenuDs.getColumn(nFRowOpen, "WINID");
	
	if (nFRow==-1)
	{
		this.gfn_Message("MenuNotFound", null, "warning", "ok");//alert("Menu가 존재하지 않습니다.");
		return;

	}else if(this.gfn_isNull(sPGMPATH)==true)
	{
		return;
	}
	
	//열려진 화면에 대한 갱신 여부 - default 'false'
	if(this.gfn_isNull(bReload)) 
	{
		bReload = false;
	}

	if( gv_appTopFrame )
	{
		//서비스 array 초기화
		nexacro.getApplication().gv_arrServiceTime = [];
		
		//업무화면 호출 시간 setting
		var objDate = new Date();
		gv_appTopFrame.form.fv_menuAccessTime = objDate.valueOf(); 
	}
	
	if(this.gfn_isNull(sMenuId)){
		trace("MENU ID does not exist!!");
		return;
	}
	
	if(nFRowOpen>-1)
	{
		objMdiFrame.form.fn_ActiveTabPage(sWinId, objArgs, bReload);
		return;
	}
	var nMax = gv_appTopFrame.form.fv_openMaxFrame;
	if(objOpenMenuDs.rowcount >= nMax)
	{
		this.gfn_Message("CannotOpenMenuCnt", nMax, "warning", "ok");//alert("메뉴는  50개를 초과하여 오픈할 수 없습니다.");
		return;
	}

	sWinId = sMenuId + "_" + objOpenMenuDs.rowcount+ "_" + parseInt(Math.random() * 100);
	var oParam = { FORM_ID : sWinId,
				   MENU_ID : sMenuId,
			       MENU_NM : sMenuNm,
				   FORM_URL : sPGMPATH,	//sPGMPATH+"::"+sPGMID
				   MENU_AUTH : sMenuAuth
				   };

	var objChildFrame = new ChildFrame();
	objChildFrame.init(sWinId, 0, 0, null, null, 0, 0);

	objWorkFrame.addChild(objChildFrame.name, objChildFrame);
	objChildFrame.param = oParam;
	objChildFrame._namespace = sMenuId;
	objChildFrame._menuid   =  sMenuId;
	objChildFrame._menuname =  sMenuNm;
	objChildFrame._pageurl  =  sPGMPATH;
	objChildFrame._menuauth  =  sMenuAuth;
	//objChildFrame._menuauth =  smenuAuth;
	//objChildFrame._titlepath=  sTitlePath;			

	objChildFrame.set_resizable(true);
	objChildFrame.set_showtitlebar(false);
	objChildFrame.set_openstatus("maximize");
	objChildFrame.set_formurl("frame::frmWork.xfdl");
	objChildFrame.arguments = [];
	if ( objArgs && !this.gfn_isNull(objArgs) )
	{
		for ( var key in objArgs )
		{
			if ( objArgs.hasOwnProperty(key) )
			{
				objChildFrame.arguments[key] = objArgs[key];
			}
		}
	}

	objChildFrame.show();
	objChildFrame.form.setFocus();
	
	objMdiFrame.form.fn_AddTabPage(sWinId, sMenuNm);
	gv_appTopFrame.form.fn_insertJobMenuLogs(sMenuId);
	gv_appLeftFrame.form.fn_AddOpenMenu(sWinId, sMenuId, sMenuNm);
	
	
	//objMdiFrame.form.fn_AddTabPage(sWinId, sMenuNm);

	//objMdiFrame.form.fn_ActiveTabPage(sWinId);
	
//// 	//leftMenu 화면 새창 열림 check 되어 open 된 팝업에서는 opener.gfn_showWork로 열어준다.
//// 	if(opener != null)
//// 	{
//// 		if(this.getOwnerFrame().opener)
//// 		{
//// 			return this.getOwnerFrame().opener.gfn_showWork( sMenuId, objArgs, bReload );
//// 		}
//// 	}
//	//열려진 화면에 대한 갱신 여부 - default 'false'
//	if(this.gfn_isNull(bReload)) 
//	{
//		bReload = false;
//	}
//
//	if( gv_appTopFrame )
//	{
//		//서비스 array 초기화
//		nexacro.getApplication().gv_arrServiceTime = [];
//		
//		//업무화면 호출 시간 setting
//		var objDate = new Date();
//		gv_appTopFrame.form.fv_menuAccessTime = objDate.valueOf(); 
//	}
//	
//	if(this.gfn_isNull(sMenuId)){
//		trace("MENU ID does not exist!!");
//		return;
//	}
//	var sName = sMenuId.replace(/\./g, "_");		
//	var objChildFrame = gv_appWorkFrameSet.frames[sName];
//	
//	if ( objChildFrame )
//	{
//		//arguments 셋팅
//		objChildFrame.arguments = [];
//		if ( objArgs && !this.gfn_isNull(objArgs) )
//		{
//			for ( var key in objArgs )
//			{
//				if ( objArgs.hasOwnProperty(key) )
//				{
//					objChildFrame.arguments[key] = objArgs[key];
//				}
//			}
//		}
//		
//	    //work frame focus 
//		//frame.set_openstatus("maximize");
//		if(bReload){
//			objChildFrame.setFocus();
//			//childFrame 내에 form 존재시 focus 처리
//			if(objChildFrame.form) objChildFrame.form.setFocus();
//			objChildFrame.form.reload();
//		}else{
//			objChildFrame.setFocus();
//			//childFrame 내에 form 존재시 focus 처리
//			if(objChildFrame.form) objChildFrame.form.setFocus();
//		}	
//	}
//	else
//	{
//		/*신규 탭 생성 제한 처리*/
//		var nMax = gv_appTopFrame.form.fv_openMaxFrame;
//		if(objOpenMenuDs.rowcount >= nMax)
//		{
//			this.gfn_Message("CannotOpenMenuCnt", nMax, "warning", "ok");//alert("메뉴는  50개를 초과하여 오픈할 수 없습니다.");
//			return;
//		}
//		/*
//		if (nexacro.getApplication().gds_openMenu.rowcount >= nMax) 
//		{
//			//this.gfn_alert("화면은 최대 " + nMax + "개를 열 수 있습니다.");
//			//return;
//			
//			var clsSuccessIdx = false;
//			
//			for (var i=0 ; i<gv_appWorkTopFrame.form.div_title.components.length ; i++) 
//			{
//				var sCompNm = gv_appWorkTopFrame.form.div_title.components[i].name;
//				
//				if(sCompNm.indexOf("btn_close_")> -1)
//				{
//					var chkComp = this.gfn_replace(sCompNm, "btn_close_", "chk_close_");
//					var chkVal = gv_appWorkTopFrame.form.div_title.components[chkComp].value;
//					
//					if(chkVal != true)
//					{
//						gv_appWorkTopFrame.form.div_title.onCloseButtonClick(gv_appWorkTopFrame.form.div_title.components[i]);
//						clsSuccessIdx = true;
//						break;
//					}
//				}
//			}
//			if(clsSuccessIdx == false)
//			{
//				this.gfn_alert("화면은 최대 " + nMax + "개를 열 수 있습니다.\n(닫을 수 있는 업무화면이 없습니다.)");
//				return;
//			}
//			/*
//		}
//		//nexacro.getApplication().gv_lrgeMenuId = nexacro.getApplication().gds_menu.lookup("MENU_ID",sMenuId,"MENU_GRP");	//jsh 2017.11.07 추가 (회사변경관련)
//		//alert(sMenuId);
//	    objChildFrame = new nexacro.ChildFrame;
//		objChildFrame.init( sName, 0, 0, null, null, 0, 0 );		
//		gv_appWorkFrameSet.addChild(sName, objChildFrame);	
//			
//		objChildFrame.set_formurl("frame::frmWork.xfdl");
//		objChildFrame.set_showtitlebar(false);
//		objChildFrame.set_openstatus("maximize");
//							
//		var nFindRow = nexacro.getApplication().gds_menu.findRow("MENU_ID", sMenuId);
//		if (nFindRow > -1){
//		    sMenuId   = nexacro.getApplication().gds_menu.getColumn(nFindRow, "MENU_ID");
//		    var spageId   = nexacro.getApplication().gds_menu.getColumn(nFindRow, "PAGE_ID");
//		    var spageUrl  = nexacro.getApplication().gds_menu.getColumn(nFindRow, "PAGE_URL");
//			var smenuName = nexacro.getApplication().gds_menu.getColumn(nFindRow, "MENU_NM");
//			var smenuTop  = nexacro.getApplication().gds_menu.getColumn(nFindRow, "MENU_TOP");
//			var smenuGrp  = nexacro.getApplication().gds_menu.getColumn(nFindRow, "MENU_GRP");
//			var smenuAuth = nexacro.getApplication().gds_menu.getColumn(nFindRow, "MENU_AUTH");
//			var smenuParam = nexacro.getApplication().gds_menu.getColumn(nFindRow, "MENU_RM");//메뉴 param
//			var nmenuLvl  = nexacro.toNumber(nexacro.getApplication().gds_menu.getColumn(nFindRow, "MENU_LEVEL"),0);
//			
//			var aTitle = new Array();				
//			for ( var i=0, nmenuLvl ; i<nmenuLvl; i++)
//			{
//				var nRow = nexacro.getApplication().gds_menu.findRow("MENU_ID", smenuTop);
//				
//				if (nRow > -1){
//					aTitle[i] = nexacro.getApplication().gds_menu.getColumn(nRow, "MENU_NM");				        
//					smenuTop  = nexacro.getApplication().gds_menu.getColumn(nRow, "MENU_TOP");
//				}				    
//			}
//							
//			var sTitlePath = "";
//			var nCnt = aTitle.length;
//							
//			for(var j=nCnt-1; j>-1; j--) 
//			{
//				sTitlePath += aTitle[j] + " > ";					
//			}
//			
//			if (this.gfn_isNull(sTitlePath)){
//				var nFindRow = nexacro.getApplication().gds_menu.findRow("MENU_ID", smenuGrp);
//				
//				if (nFindRow > -1){
//					sTitlePath = nexacro.getApplication().gds_menu.getColumn(nFindRow, "MENU_NM");
//				}	
//			}else{
//				sTitlePath += smenuName;			 
//			} 
//
//		objChildFrame._namespace = sMenuId;
//		objChildFrame._menuid   =  sMenuId;
//		objChildFrame._pageid   =  spageId;
//		objChildFrame._menuname =  smenuName;
//		objChildFrame._pageurl  =  spageUrl;
//		objChildFrame._menuauth =  smenuAuth;
//		objChildFrame._titlepath=  sTitlePath;			
//			
//		//arguments 셋팅
//		objChildFrame.arguments = [];
//		if ( objArgs && !this.gfn_isNull(objArgs) )
//		{
//			for ( var key in objArgs )
//			{
//				if ( objArgs.hasOwnProperty(key) )
//				{
//					objChildFrame.arguments[key] = objArgs[key];
//				}
//			}
//		}
//		//MENU_RM 값이 존재하면 arguments에 넣어준다.
//		if( smenuParam )
//		{
//			objChildFrame.arguments["menuParam"] = smenuParam;
//		}
//		
//		objChildFrame.show();	
//		//alert("show");
//					
//			//신규 생성된 윈도우 화면을 gds_OpenMenu 에 등록
//			var nRow = nexacro.getApplication().gds_openMenu.addRow();
//			nexacro.getApplication().gds_openMenu.setColumn(nRow, "MENU_ID", sMenuId);
//			nexacro.getApplication().gds_openMenu.setColumn(nRow, "WIN_ID" , spageId);		
//			nexacro.getApplication().gds_openMenu.setColumn(nRow, "TITLE"  , "work");		//컬럼명 변경안하고 pop or work구분으로 활용		
//				
//			//ChildFrame onactivate, deactivate 처리
//			//objChildFrame.addEventHandler("ondeactivate", this.gfn_childFrame_ondeactivate, this);
//			//objChildFrame.addEventHandler("onactivate", this.gfn_childFrame_onactivate, this);
//			
//			//메뉴로그쌓기
//			gv_appTopFrame.form.fn_insertJobMenuLogs(sMenuId);
//			//trace("===================== 신규 처리 끝.................");
//		}					
//	}
//		
//	//탭버튼 위치이동
//	gv_appWorkTopFrame.form.setTitle(sMenuId);
//	
//	// hash를 변경하여 History 에 등록 (현재 hash 와 같을 경우 History 가 생기지 않는다.)
//	var hash = "menu:"+sMenuId;
//	var data = {"desc": sMenuId};
//	MyHistory.setLocationHash(hash, data);
	
}

/**
* 신규 윈도우 화면을 생성하고 open 시킴
* @param {string}  메뉴아이디
* @param {object}  넘겨줄 arguments
* @param {boolen}  Reload 여부
* @return  N/A
* @example
* @memberOf public
*/
pForm.gfn_showWork2 = function ( sMenuId, objArgs, bReload )
{

// 	//leftMenu 화면 새창 열림 check 되어 open 된 팝업에서는 opener.gfn_showWork로 열어준다.
// 	if(opener != null)
// 	{
// 		if(this.getOwnerFrame().opener)
// 		{
// 			return this.getOwnerFrame().opener.gfn_showWork( sMenuId, objArgs, bReload );
// 		}
// 	}
	//열려진 화면에 대한 갱신 여부 - default 'false'
	if(this.gfn_isNull(bReload)) 
	{
		bReload = false;
	}

	if( gv_appTopFrame )
	{
		//서비스 array 초기화
		nexacro.getApplication().gv_arrServiceTime = [];
		
		//업무화면 호출 시간 setting
		var objDate = new Date();
		gv_appTopFrame.form.fv_menuAccessTime = objDate.valueOf(); 
	}
	
	if(this.gfn_isNull(sMenuId)){
		trace("MENU ID does not exist!!222");
		return;
	}
	var sName = sMenuId.replace(/\./g, "_");		
	var objChildFrame = gv_appWorkFrameSet.frames[sName];
	
	if ( objChildFrame )
	{
		//arguments 셋팅
		objChildFrame.arguments = [];
		if ( objArgs && !this.gfn_isNull(objArgs) )
		{
			for ( var key in objArgs )
			{
				if ( objArgs.hasOwnProperty(key) )
				{
					objChildFrame.arguments[key] = objArgs[key];
				}
			}
		}
		
	    //work frame focus 
		//frame.set_openstatus("maximize");
		if(bReload){
			objChildFrame.setFocus();
			//childFrame 내에 form 존재시 focus 처리
			if(objChildFrame.form) objChildFrame.form.setFocus();
			objChildFrame.form.reload();
		}else{
			objChildFrame.setFocus();
			//childFrame 내에 form 존재시 focus 처리
			if(objChildFrame.form) objChildFrame.form.setFocus();
		}	
	}
	else
	{
		/*신규 탭 생성 제한 처리*/
		var nMax = gv_appTopFrame.form.fv_openMaxFrame;
		if (nexacro.getApplication().gds_openMenu.rowcount >= nMax) 
		{
			//this.gfn_alert("화면은 최대 " + nMax + "개를 열 수 있습니다.");
			//return;
			
			var clsSuccessIdx = false;
			
			for (var i=0 ; i<gv_appWorkTopFrame.form.div_title.components.length ; i++) 
			{
				var sCompNm = gv_appWorkTopFrame.form.div_title.components[i].name;
				
				if(sCompNm.indexOf("btn_close_")> -1)
				{
					var chkComp = this.gfn_replace(sCompNm, "btn_close_", "chk_close_");
					var chkVal = gv_appWorkTopFrame.form.div_title.components[chkComp].value;
					
					if(chkVal != true)
					{
						gv_appWorkTopFrame.form.div_title.onCloseButtonClick(gv_appWorkTopFrame.form.div_title.components[i]);
						clsSuccessIdx = true;
						break;
					}
				}
			}
			if(clsSuccessIdx == false)
			{
				this.gfn_alert("화면은 최대 " + nMax + "개를 열 수 있습니다.\n(닫을 수 있는 업무화면이 없습니다.)");
				return;
			}
		}
		//nexacro.getApplication().gv_lrgeMenuId = nexacro.getApplication().gds_menu.lookup("MENU_ID",sMenuId,"MENU_GRP");	//jsh 2017.11.07 추가 (회사변경관련)
		//alert(sMenuId);
	    objChildFrame = new nexacro.ChildFrame;
		objChildFrame.init( sName, "absolute", 0, 0, null, null, 0, 0 );		
		gv_appWorkFrameSet.addChild(sName, objChildFrame);	
			
		objChildFrame.set_formurl("frame::workFrame.xfdl");
		objChildFrame.set_showtitlebar(false);
		objChildFrame.set_openstatus("maximize");
							
		var nFindRow = nexacro.getApplication().gds_menu.findRow("MENU_ID", sMenuId);
		if (nFindRow > -1){
		    sMenuId   = nexacro.getApplication().gds_menu.getColumn(nFindRow, "MENU_ID");
		    var spageId   = nexacro.getApplication().gds_menu.getColumn(nFindRow, "PAGE_ID");
		    var spageUrl  = nexacro.getApplication().gds_menu.getColumn(nFindRow, "PAGE_URL");
			var smenuName = nexacro.getApplication().gds_menu.getColumn(nFindRow, "MENU_NM");
			var smenuTop  = nexacro.getApplication().gds_menu.getColumn(nFindRow, "MENU_TOP");
			var smenuGrp  = nexacro.getApplication().gds_menu.getColumn(nFindRow, "MENU_GRP");
			var smenuAuth = nexacro.getApplication().gds_menu.getColumn(nFindRow, "MENU_AUTH");
			var smenuParam = nexacro.getApplication().gds_menu.getColumn(nFindRow, "MENU_RM");//메뉴 param
			var nmenuLvl  = nexacro.toNumber(nexacro.getApplication().gds_menu.getColumn(nFindRow, "MENU_LEVEL"),0);
			
			var aTitle = new Array();				
			for ( var i=0, nmenuLvl ; i<nmenuLvl; i++)
			{
				var nRow = nexacro.getApplication().gds_menu.findRow("MENU_ID", smenuTop);
				
				if (nRow > -1){
					aTitle[i] = nexacro.getApplication().gds_menu.getColumn(nRow, "MENU_NM");				        
					smenuTop  = nexacro.getApplication().gds_menu.getColumn(nRow, "MENU_TOP");
				}				    
			}
							
			var sTitlePath = "";
			var nCnt = aTitle.length;
							
			for(var j=nCnt-1; j>-1; j--) 
			{
				sTitlePath += aTitle[j] + " > ";					
			}
			
			if (this.gfn_isNull(sTitlePath)){
				var nFindRow = nexacro.getApplication().gds_menu.findRow("MENU_ID", smenuGrp);
				
				if (nFindRow > -1){
					sTitlePath = nexacro.getApplication().gds_menu.getColumn(nFindRow, "MENU_NM");
				}	
			}else{
				sTitlePath += smenuName;			 
			} 

		objChildFrame._namespace = sMenuId;
		objChildFrame._menuid   =  sMenuId;
		objChildFrame._pageid   =  spageId;
		objChildFrame._menuname =  smenuName;
		objChildFrame._pageurl  =  spageUrl;
		objChildFrame._menuauth =  smenuAuth;
		objChildFrame._titlepath=  sTitlePath;			
			
		//arguments 셋팅
		objChildFrame.arguments = [];
		if ( objArgs && !this.gfn_isNull(objArgs) )
		{
			for ( var key in objArgs )
			{
				if ( objArgs.hasOwnProperty(key) )
				{
					objChildFrame.arguments[key] = objArgs[key];
				}
			}
		}
		//MENU_RM 값이 존재하면 arguments에 넣어준다.
		if( smenuParam )
		{
			objChildFrame.arguments["menuParam"] = smenuParam;
		}
		
		objChildFrame.show();	
		//alert("show");
					
			//신규 생성된 윈도우 화면을 gds_OpenMenu 에 등록
			var nRow = nexacro.getApplication().gds_openMenu.addRow();
			nexacro.getApplication().gds_openMenu.setColumn(nRow, "MENU_ID", sMenuId);
			nexacro.getApplication().gds_openMenu.setColumn(nRow, "WIN_ID" , spageId);		
			nexacro.getApplication().gds_openMenu.setColumn(nRow, "TITLE"  , "work");		//컬럼명 변경안하고 pop or work구분으로 활용		
				
			//ChildFrame onactivate, deactivate 처리
			//objChildFrame.addEventHandler("ondeactivate", this.gfn_childFrame_ondeactivate, this);
			//objChildFrame.addEventHandler("onactivate", this.gfn_childFrame_onactivate, this);
			
			//메뉴로그쌓기	
			gv_appTopFrame.form.fn_insertJobMenuLogsAutoLoading(sMenuId);
			//trace("===================== 신규 처리 끝.................");
		}					
	}
		
	//탭버튼 위치이동
	gv_appWorkTopFrame.form.setTitle(sMenuId);
	
	// hash를 변경하여 History 에 등록 (현재 hash 와 같을 경우 History 가 생기지 않는다.)
	var hash = "menu:"+sMenuId;
	var data = {"desc": sMenuId};
	MyHistory.setLocationHash(hash, data);
	
}
/*ChildFrame deactivate 이벤트*/
pForm.gfn_childFrame_ondeactivate = function(obj,e)
{
	//titlebar mouseover Pseudo 처리
	var objTitlebar = obj.titlebar;
	if(objTitlebar){
		objTitlebar.minbutton.setCurrentPseudo("");
		objTitlebar.maxbutton.setCurrentPseudo("");
		objTitlebar.closebutton.setCurrentPseudo("");
		
		objTitlebar.style.set_background("#ebebec");
		objTitlebar.style.set_border("1 solid #ebebec");
		objTitlebar.style.set_color("#666666");
	}
}
/*ChildFrame onactivate 이벤트*/
pForm.gfn_childFrame_onactivate = function(obj,e)
{
	//titlebar mouseover Pseudo 처리
	var objTitlebar = obj.titlebar;
	if(objTitlebar){
		objTitlebar.style.set_background("#666666");
		objTitlebar.style.set_border("1 solid #666666");
		objTitlebar.style.set_color("#ffffff");

	}
}

/**
* 페이지 이동 함수
* @param  {string} sUrl - 메뉴url
* @param  {object} oArgs - 전달인자
* @param  {boolean} bReload - reload 여부
* @return  N/A
* @example
* @memberOf public
*/
pForm.gfn_goPage = function( sUrl, oArgs, bReload )
{
	//열려진 화면에 대한 갱신 여부 - default 'false'
	if(this.gfn_isNull(bReload)) 
	{
		bReload = false;
	}
	//사용자 정의 url 로 MENU_ID 찾기
	var sMenuId = nexacro.getApplication().gds_menu.lookup("PAGE_URL", sUrl, "MENU_ID");//'MENU_ID'
	//trace("gfn_goPage..sMenuId::"+sMenuId);
	//메뉴 아이디가 존재하지 않으면,
	if( this.gfn_isNull(sMenuId) )
	{
		trace("요청한 메뉴가 gds_menu 에 존재하지 않습니다.");
		return;
	}
	else
	{
		if (gv_appLeftFrame.form.pdv_LF_menu.form.ckb_new.value == true) //화면 새창 열림 체크되어 있는 경우
		{
			this.gfn_newPopup(sMenuId, oArgs);
		}else{
			this.gfn_showWork( sMenuId, oArgs, bReload );  
		}
	}
	
}



/**
* 화면 닫기 공통 함수
* @param {object} 폼 object
* @return N/A
* @example this.gfn_closeMenu(this);
* @memberOfpublic
*/
pForm.gfn_closeMenu = function(obj)
{
	var sMenuId = obj.getOwnerFrame()._menuid;

	this.gfn_frameclose(sMenuId);
}

/**
* 화면안의 컨트롤을 활성화 또는 비활성화 처리
* @param {object} 컨트롤 객체
* @param {boolen} 활성화 여부
* @return N/A
* @example
* @memberOfpublic
*/
pForm.gfn_setEnableCtrl = function (obj, bEnable)
{
	var strType = obj.toString().toUpperCase();

	switch (strType)
	{
		case "[OBJECT TAB]":
		case "[OBJECT DIV]":
		case "[OBJECT ACTIVEX]":
			obj.set_enable(bEnable);
			break;
		case "[OBJECT TABPAGE]":
			obj.Parent.removeChild(obj.name);
			break;
		case "[OBJECT GRID]":
		case "[OBJECT LISTBOX]":
			obj.set_readonly(!(bEnable));
			obj.set_enableevent(bEnable);
			break;
		case "[OBJECT EDIT]":
		case "[OBJECT CALENDAR]":
		case "[OBJECT MASKEDIT]":
		case "[OBJECT TEXTAREA]":
			obj.set_readonly(!(bEnable));
			break;
		default:
			obj.set_enable(bEnable);
			obj.set_enableevent(bEnable);
			break;
	}
}

/**
* gfn_setEnterSearch addEventHandler
* @return N/A
* @example
* @memberOf private
*/
pForm.gfn_setEnterKeyEvent = function(obj,e)
{
	if(e.keycode == 13)
    {
		if(obj instanceof Calendar)
			{
				obj.parent.btn_search.setFocus();
			}
		var btnObj = eval("obj.parent.btn_"+obj.id.substring(4));
		if(btnObj != null && btnObj.cssclass == "btn_WF_finder"){
			btnObj.click();
		}else{
	        if(!this.gfn_isNull(obj.eventKeyFunc)) this.lookupFunc(obj.eventKeyFunc).call();
		}
    }
}

/**
* 버튼 엔터키 설정 함수
* @param {object} button
* @param {string} 엔터키 친후 화면으로 호출할 함수명
* @return N/A
* @example
* @memberOf public
*/
pForm.gfn_setEnterSearch = function(obj,sFunc)
{
    var sEnterObjectList = "typeOf == 'Edit' || typeOf == 'MaskEdit' || typeOf == 'Combo' || typeOf == 'Radio' || typeOf == 'Calendar'"
    // 2015.08.28 ExtNx -> Eco로 전환
    var oComp = Eco.XComp.query(obj.form,sEnterObjectList ,0);
    for(var i=0; i<oComp.length; i++)
    {
        oComp[i].eventKeyFunc = sFunc;
        oComp[i].addEventHandler("onkeydown",this.gfn_setEnterKeyEvent,this);
    }
}


/**
*버튼 권한처리
* @param {object} this
* @return N/A
* @example
* @memberOf public
*/
pForm.gfn_setAuth = function(obj)
{
    if(nexacro.getApplication().gv_menuAuth == "1")
    {
      // 2015.08.28 ExtNx -> Eco로 전환
       var oComp = Eco.XComp.query(obj, "typeOf == 'Button'","");

       for(var i=0; i<oComp.length; i++)
       {
           if(oComp[i].authYn == "Y")
           {
              oComp[i].set_enable(false);
           }
       }
    }
}

/**
* 화면안의 컨트롤의 default 속성을 설정한다.
* @param {object} 컨트롤 객체
* @return N/A
* @example
* @memberOf public
*/
pForm._gfn_setDefault = function (obj)
{
	var strType = obj.toString().toUpperCase();

	switch (strType)
	{
		case "[OBJECT GRID]":
// 			if (obj.autofittype == "none")
// 			{
// 				obj.set_cellsizingtype("col");
// 			}
// 
// 			obj.set_autoenter("select");
// 
// 			for (var nCell = 0; nCell < obj.getCellCount("Body"); nCell++)
// 			{
// 				obj.setCellProperty("Body", nCell, "editautoselect", true);
// 				obj.setCellProperty("Body", nCell, "combodisplayrowcount", 10);
// 
// 				obj.setCellProperty("Body", nCell, "background","EXPR(comp.parent._gfn_grid_background(comp,currow))");
// 				obj.setCellProperty("Body", nCell, "background2","EXPR(comp.parent._gfn_grid_background(comp,currow))");
// 			}
// 
// 			if(this.gfn_isNull(obj.useSort) || (!this.gfn_isNull(obj.useSort) && obj.useSort != "N"))
// 			{
// 			    obj.addEventHandler("onheadclick",this.gfn_gridSort,this);
// 			}
// 
// 			if(this.gfn_isNull(obj.useAllCheck) || (!this.gfn_isNull(obj.useAllCheck) && obj.useAllCheck != "N"))
// 			{
// 			    obj.addEventHandler("onheadclick",this.gfn_setGridCheckAll,this);
// 			}
// 
// 			if(this.gfn_isNull(obj.useCopy) || (!this.gfn_isNull(obj.useCopy) && obj.useCopy != "N"))
// 			{
// 			    obj.addEventHandler("onkeydown",this.gfn_gridOnkeydown,this);
// 			}

			obj.addEventHandler( "onkeydown", this.gfn_common_input_comp_onkeydown, this );
			break;
			
		case "[OBJECT COMBO]":
			if (obj.displayrowcount == -1)
			{
				obj.set_displayrowcount(10);
			}
			obj.addEventHandler( "onkeydown", this.gfn_common_input_comp_onkeydown, this );
			break;
			
		case "[OBJECT EDIT]":
			obj.addEventHandler( "onkeydown", this.gfn_common_input_comp_onkeydown, this );
			break;
			
		case "[OBJECT MASKEDIT]":
			obj.addEventHandler( "onkeydown", this.gfn_common_input_comp_onkeydown, this );
			break;
			
		case "[OBJECT TEXTAREA]":
			obj.set_autoselect(true);
			obj.addEventHandler( "onkeydown", this.gfn_common_input_comp_onkeydown, this );
			break;
			
		default:
			break;
	}
}

/**
* 입력 콤포넌트 onkeydown 이벤트 처리
* @param {object} obj 콤포넌트
* @param {object} e - onkeydown 이벤트
* @return N/A
* @example
* @memberOf public
*/
pForm.gfn_common_input_comp_onkeydown = function(obj, e)
{
	if( e.keycode == 116 )
	{
		e.preventDefault();
	}
	if( e.keycode == 123)
	{
		e.preventDefault();
	}
}


/**
* 폼 height 설정
* @param {object} this
* @return N/A
* @example
* @memberOf public
*/
pForm._gfn_setHeight = function(obj)
{

   var nDefault = 407;
   var nHeight = 407;
   var nTmpHeight = 407;
   var objParent = obj.getOwnerFrame().form;
   var nWorkHeight = objParent.height-30;
   // 2015.08.28 ExtNx -> Eco로 전환
   var oComp = Eco.XComp.query(obj, "prop[top] > 407 && prop[visible] == true",0);

   for(var i=0; i<oComp.length; i++)
   {
       nTmpHeight = parseInt(oComp[i].top)+parseInt(oComp[i].height);
       if(nHeight < nTmpHeight) nHeight = nTmpHeight;
   }

   nHeight = nHeight+30;

   if(nDefault != nHeight) nHeight = nHeight+30;
   obj.WORKFORM_DEFAULT_HEIGHT = nHeight;

   if(nWorkHeight > nHeight)
   {
       nHeight = nWorkHeight;
   }
   obj.set_height(nHeight);
   objParent.resetScroll();

}


/**
* Form Load 시 공통 기능 처리
* @param {object} this
* @return N/A
* @example
* @memberOf public
*/
pForm.gfn_formOnLoad = function (obj)
{

	//trace(nexacro.getApplication().popupframes[obj.getOwnerFrame().name] );
	//팝업창에서는 실행 안함.
//	if (nexacro.getApplication().popupframes[this.getOwnerFrame().name]) {		
//		return;
//	}

	//Quick View로 실행시 더 이상 진행 안함.
	if (nexacro.getApplication().gv_quickView == "quick") {
		return;
	}
	
	//접속 시간 보여주기
	this.gfn_accessTime(obj);

// F5 기능 막기 스크립트 시작

	// Form에 속한 컨트롤들의 초기화 처리
	this.gfn_allCallFunction(obj, this.gfn_formSetInit, false);
	
	//Form onkeydown(F5) 이벤트 처리
	obj.addEventHandler("onkeydown", this.gfn_form_onkeydown, this);

// F5 기능 막기 스크립트 종료

}

/**
* Form onkeydown(F5) 이벤트 처리
* @param {object} obj 콤포넌트
* @param {object} e - onkeydown 이벤트
* @return N/A
* @example
* @memberOf public
*/
pForm.gfn_form_onkeydown = function(obj, e)
{
	if( e.keycode == 116 )
	{
		obj.reload();
	}
	if( e.keycode == 123 )
	{
		return;
	}
}

/**
* Form에 속한 모든 컴포넌트를 함수의 인자로 넘겨주고 함수 호출처리
* @param {object} obj : 컨테이너(Form, Div)
* @param {object} FunctionObj : 호출함수
* @param {boolean} bObjects: Invisible object 포함여부 true/false
* @param {object} paramObj: 함수에 넘겨줄 파라메터
* @return retVal
* @example
* @memberOf public
*/
pForm.gfn_allCallFunction = function (obj, FunctionObj, bObjects, paramObj)
{
	var strType;
	var retVal;

	for (var i = 0; i < obj.components.length; i++) 
	{
		strType = obj.components[i].toString().toUpperCase();

		retVal = FunctionObj.call(this, obj.components[i], paramObj);
		 
		if (this.gfn_isNull(retVal) == false) 
		{
			return retVal;
		}

		if (obj.components[i].components) 
		{
			switch (strType) 
			{
				case "[OBJECT TAB]":
					retVal = this.gfn_allCallFunction(obj.components[i], FunctionObj, bObjects, paramObj);
					if (this.gfn_isNull(retVal) == false) 
					{
						return retVal;
					}
					break;
				case "[OBJECT TABPAGE]":
				case "[OBJECT DIV]":
						retVal = this.gfn_allCallFunction(obj.components[i], FunctionObj, bObjects, paramObj);
						if (this.gfn_isNull(retVal) == false) 
						{
							return retVal;
						}
					break;
				case "[OBJECT POPUPDIV]":
				default :
					break;
			}
		}
	}

}

/**
* Form에 속한 컨트롤들의 초기화 처리
* @param {object} this
* @return N/A
* @example
* @memberOf public
*/
pForm.gfn_formSetInit = function (obj)
{
	//화면안의 컨트롤의 default 속성을 설정
	this._gfn_setDefault(obj);
}

/**
* top 프레임에서 상위 레벨을 선택했을 때의 처리
* @param  {string} 윈도우 생성아이디
* @return  N/A
* @example
* @memberOf public
*/
pForm.gfn_topMenuClick = function (topMenuid)
{
	if (this.gfn_checkMenuStat(topMenuid) == false)
	{
		return;
	}

	gv_leftFrame.form.fn_changeMenu(topMenuid);
	
}


/**
* 선택된 메뉴의 상태를 확인해서 오픈할 수 없을 경우에 메시지를 표시한다.
* @param  {string} 메뉴아이디
* @return  N/A
* @example
* @memberOf public
*/
pForm.gfn_checkMenuStat = function (menuId)
{
 	var menuStat = this.gfn_getMenuInfo(menuId, nexacro.getApplication().gv_MenuStatCol);
 	if (menuStat == "MAKE")
 	{
// 		this.gfn_Alert("msg.menu.stat.make", "infomation");
// 		return false;
 	}
	return true;

}

/**
* 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을  생성해서 해당 값을 보여주는 함수
* @param {string} message id
* @param {string} meesage type ("error", "question", "warning", "information" (default))
* @param {array} msgArr[](메세지값으로 치환될 Parameter Array)
* @return {object} 팝업에 해당 메세지값을 표현
* @example
* @memberOf public
*/
pForm.gfn_alert = function (strMsgId, strMsgType, msgArr)
{
	var biz = false;
	if(strMsgId.substring(0,4) == "imcs")
	{
		 var strMsgIdArr = strMsgId.split(":");
		 var conStrMsgId = "";
		 for(var i=1; i < strMsgIdArr.length; i++)
		 {
			if(i >1 )
			{
				conStrMsgId += ":" + strMsgIdArr[i];
			}
			else
			{
				conStrMsgId += strMsgIdArr[i].trim();
			}
		 }
		 strMsgId = conStrMsgId;
	}
	
	if( strMsgId.substring(0,2) == "SM" || strMsgId.substring(0,2) == "EM" ) 
	{
		biz = this.gfn_bizExceptionMsg(strMsgId);
	}
	
	if(!biz)
	{
		if (this.gfn_isNull(strMsgType))
		{
			strMsgType = "information";
		}

		var strMsg = this.gfn_GetMessTxt(strMsgId, msgArr);

		this.alert(strMsg, strMsgType, strMsgType);
	}
	return;
}

pForm.gfn_bizExceptionMsg = function(bizMsg)
{
	var arrBizMsg = bizMsg.split(":");
	
	if( arrBizMsg.length == 1)
	{
		this.gfn_Message(arrBizMsg[0],"", "info");
	}
	else if ( Number(arrBizMsg.length) > 1)
	{
		var arrMsg = new Array(arrBizMsg.length-1);
		for(var i=0; i< arrBizMsg.length-1; i++)
		{
			arrMsg[i] = arrBizMsg[i+1];
		}
		
		this.gfn_Message(arrBizMsg[0], arrMsg, "info");
	}
	else
	{
		return false;
	}
	return true;
}


/**
* 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을 생성해서 해당 값을 보여주는 함수
* @param {string} message id
* @param {string} meesage type ("error", "question", "warning", "information" (default))
* @param {array} msgArr[](메세지값으로 치환될 Parameter Array)
* @return {object} 팝업에 해당 메세지값을 표현
* @example
* @memberOf public
*/
pForm.gfn_confirm = function (strMsgId, strMsgType, msgArr)
{
	// strMsgType : "error", "question", "warning", "information" (default)
	if (this.gfn_isNull(strMsgType))
	{
		strMsgType = "question";
	}

	var strMsg = this.gfn_GetMessTxt(strMsgId, msgArr);

	return this.confirm(strMsg, strMsgType, strMsgType);
}


/**
* 화면 새창 열림 실행 함수 - 프레임에서 사용
* @param  {string} sPopupId ( Popup Form의 ID )
* @param  {string} sUrl		( Popup Form  URL )
* @param  {object} oArg		( Popup Form으로 전달될 Argument )
* @param  {string} sOption 	( Popup Form Left Position )
* @example
* @memberOf public
*/
pForm.gfn_newPopup = function (menuId,objArgs)
{
	var name = menuId;//menuId.replace(/\./g, "_");
	var frame =  nexacro.getPopupFrames() ;	//nexacro.getApplication().popupframes[name];

    if (this.gfn_isNull(frame))
    {
		//메뉴로그쌓기
		gv_appTopFrame.form.fn_insertJobMenuLogs(menuId);
    }
    else
    {
        //중복실행 방지
        //frame.setFocus();
        //return;
    }
	
	var nRow = nexacro.getApplication().gds_menu.findRow("MENU_ID", menuId);
	var nWidth = 910;
	var nHeight = 460;
	var nLeft = (nexacro.getApplication().mainframe.width / 2) - Math.round(nWidth / 2);
	var nTop = (nexacro.getApplication().mainframe.height / 2) - Math.round(nHeight / 2);
	var bLayered = true;
	var nOpacity = 100;
	var bAutoSize = false;
	var bResizable = true;
    var sOpenalign = "center middle";
    var bLayered = true;
    var oArg = "";
    var sPopupCallback = "fn_popupAfter";

	var sPGMPATH 	= nexacro.getApplication().gds_menu.getColumn(nRow, "PAGE_URL");
	var sMenuNm 	= nexacro.getApplication().gds_menu.getColumn(nRow, "MENU_NM");
    var sWinId = menuId + "_" + nexacro.getApplication().gdsOpenMenu.rowcount+ "_" + parseInt(Math.random() * 100);
	
	if (nRow > -1){
	    sUrl = "frame::frmWork.xfdl";

	    var smenuId   = nexacro.getApplication().gds_menu.getColumn(nRow, "MENU_ID");
		var spageId   = nexacro.getApplication().gds_menu.getColumn(nRow, "PAGE_ID");
		var spageUrl  = nexacro.getApplication().gds_menu.getColumn(nRow, "PAGE_URL");
		var smenuName = nexacro.getApplication().gds_menu.getColumn(nRow, "MENU_NM");
		var smenuTop  = nexacro.getApplication().gds_menu.getColumn(nRow, "MENU_TOP");
		var smenuGrp  = nexacro.getApplication().gds_menu.getColumn(nRow, "MENU_GRP");
		var smenuAuth = nexacro.getApplication().gds_menu.getColumn(nRow, "MENU_AUTH");
		var nmenuLvl  = nexacro.toNumber(nexacro.getApplication().gds_menu.getColumn(nRow, "MENU_LEVEL"),0);

		if (this.gfn_isNull(spageUrl)) return;
		
		//타이틀 경로처리-----------------------------------------------
		var aTitle = new Array();
		for ( var i=0, nmenuLvl ; i<nmenuLvl; i++)
		{
			var nRow = nexacro.getApplication().gds_menu.findRow("MENU_ID", smenuTop);

			if (nRow > -1){
				aTitle[i] = nexacro.getApplication().gds_menu.getColumn(nRow, "MENU_NM");
				smenuTop  = nexacro.getApplication().gds_menu.getColumn(nRow, "MENU_TOP");
			}
		}

		var sTitlePath = "";
		var nCnt = aTitle.length;

		for(var j=nCnt-1; j>-1; j--)
		{
			sTitlePath += aTitle[j] + " > ";
		}

		if (this.gfn_isNull(sTitlePath)){
			var nFindRow = nexacro.getApplication().gds_menu.findRow("MENU_ID", smenuGrp);

			if (nFindRow > -1){
				sTitlePath = nexacro.getApplication().gds_menu.getColumn(nFindRow, "MENU_NM");
			}
		}else{
			sTitlePath += smenuName;
		}
	    //타이틀 경로처리-------------end----------------------------------
		
	    var oParam = { FORM_ID : sWinId,
				   MENU_NM : sMenuNm,
				   FORM_URL : sPGMPATH,	//sPGMPATH+"::"+sPGMID
				   MENU_AUTH : smenuAuth,
				   POP_YN : 'Y'
				   };
	    oArg = {pv_pop_pageUrl:spageUrl,
	            pv_menuId:smenuId,
	            pv_menuName:smenuName,
	            pv_titlePath:sTitlePath,
	            param:oParam,
	            objArgs:objArgs};

 		var objParentFrame = this.getOwnerFrame();
 		
 		var bSucc = nexacro.open(sWinId, sUrl, objParentFrame, oArg, "showtitlebar=true showstatusbar=false resizable=true",0,0,910,460);
// 		var bSucc = nexacro.open(sWinId, sUrl, objParentFrame, objArgs, "showtitlebar=true showstatusbar=false resizable=true",0,0,910,460);

		if (bSucc==true)
		{
		  //신규 생성된 윈도우 화면을 gds_OpenMenu 에 등록
		  /*
		  var nRow = nexacro.getApplication().gdsOpenMenu.addRow();
		  nexacro.getApplication().gdsOpenMenu.setColumn(nRow, "MENU_ID", smenuId);
		  nexacro.getApplication().gdsOpenMenu.setColumn(nRow, "WIN_ID" , spageId);
		  nexacro.getApplication().gdsOpenMenu.setColumn(nRow, "TITLE"  , "pop");		//컬럼명 변경안하고 pop or work구분으로 활용
		  */
		}

	}
}



/**
* 팝업 오픈 실행 함수
* @param {string}  Popup Form의 ID )
* @param {string}  Popup Form  URL )
* @param {object}  ( Popup Form으로 전달될 Argument )
* @param {object}  ( Popup Form으로 전달될 Argument )
* @param {boolen}  ( Popup Form Left Position )
* @param {string}  ( Popup Form Top Position )
* @return {object} 팝업에 해당 메세지값을 표현
* @example N/A
* @memberOf public
*/
pForm.gfn_openPopup = function (sPopupId, sUrl, oArg, sOption, sPopupCallback)
{
	var nLeft = -1;
	var nTop = -1;
	var nWidth = 1;
	var nHeight = 1;
	var bShowTitle = false;
	var bShowStatus = false;
	var bModeless = false;
	var bLayered = true;
	var nOpacity = 100;
	var bAutoSize = true;
	var bResizable = false;
	var bRound = false;
	var bReload = false;//열려진 화면 일 때 reload 처리 유무
	var sPopupCallback = (this.gfn_isNull(sPopupCallback)) ? "fn_popupAfter" : sPopupCallback;
	var sTitleText = "";

	//var bShowonTaskbar = true;

	var aVal = sOption.split(",");
	for (var i=0; i<aVal.length; i++)
	{
		var aVal2 = aVal[i].trim().split("=");
		switch (aVal2[0])
		{
			case "top":
				nTop = parseInt(aVal2[1]);
				break;
			case "left":
				nLeft = parseInt(aVal2[1]);
				break;
			case "width":
				nWidth = parseInt(aVal2[1]);
				break;
			case "height":
				nHeight = parseInt(aVal2[1]);
				break;
			case "title":
				bShowTitle = aVal2[1];
				break;
			case "titletext":
				sTitleText = aVal2[1];
				break;
			case "status":
				bShowStatus = aVal2[1];
				break;
			case "modeless":
				bModeless = aVal2[1];
				break;
			case "layered":
				bLayered = aVal2[1];
				break;
			case "opacity":
				nOpacity = aVal2[1];
				break;
			case "autosize":
				bAutoSize = aVal2[1];
				break;
			case "resizable":
				bResizable = aVal2[1];
				break;
			case "round":
				bRound = aVal2[1];
				break;
			case "reload":
				bReload = aVal2[1];
				break;
// 			case "showontaskbar":
// 				bShowonTaskbar = aVal2[1];
// 				break;
		}
	}


	var sOpenalign = "";

	sTitleText = (this.gfn_isNull(sTitleText)) ? this.gfn_GetMessTxt(sPopupId) : sTitleText;

	if (nLeft == -1 && nTop == -1)
	{
		sOpenalign = "center middle";
        nLeft   =  (nexacro.getApplication().mainframe.width / 2) - Math.round(nWidth / 2);
	    nTop    = (nexacro.getApplication().mainframe.height / 2) - Math.round(nHeight / 2) ;
	}

	var objParentFrame = this.getOwnerFrame();

    if(bModeless == "true")
    {
		//열린 modeless 팝업 화면이 존재하면 focus 처리 후 리턴.
		var objPopFrams = nexacro.getApplication().popupframes;
		if( objPopFrams[sPopupId] )
		{
			objPopFrams[sPopupId].setFocus();
			if(bReload == "true")
			{
				//arguments 셋팅
				if ( !this.gfn_isNull(oArg) )
				{
					for ( var key in oArg )
					{
						if ( oArg.hasOwnProperty(key) )
						{
							objPopFrams[sPopupId][key] = oArg[key];
						}
					}
				}
			
				
				objPopFrams[sPopupId].form.reload();
				
			}
			return;
		}
    
 		//modeless callback 값 setting
 		oArg._close_callback = sPopupCallback;
 		
        var sOpenStyle= "showtitlebar=true showstatusbar=false";
        
        if(bAutoSize=="false") sOpenStyle = sOpenStyle + " autosize=false";
        
        //최초 로딩시 default 사이즈 지정 800 * 600
//         nWidth = nWidth==1 ? 800 : nWidth;
//         nHeight = nHeight==1 ? 600 : nHeight;
        if(nWidth==1){
			nWidth = 800;
        }else{
			nWidth = nWidth;
        }
        if(nHeight==1){
			nHeight = 600;
        }else{
			nHeight = nHeight;
        }
        nexacro.open(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight, this);
    }
    else
    {
    	if(nWidth==1){
    		//nWidth = 800;
        }else{
    		bAutoSize = false;
			nWidth = nWidth;
        }
        if(nHeight==1){
			//nHeight = 600;
        }else{
			nHeight = nHeight;
        }
        
		newChild = new nexacro.ChildFrame;
//		newChild.init(sPopupId,"absolute",nLeft, nTop, nWidth, nHeight, null, null, sUrl);
		newChild.init(sPopupId,nLeft, nTop, nWidth, nHeight, null, null, sUrl);
		
		newChild.set_dragmovetype("all");
		newChild.set_showtitlebar(bShowTitle);
		  //autosize default true
		newChild.set_autosize(bAutoSize);
		newChild.set_resizable(bResizable);
		newChild.set_titletext(sTitleText);
		newChild.set_showstatusbar(bShowStatus);
		newChild.set_openalign(sOpenalign);
		newChild.set_layered(bLayered);
		//newChild.style.set_border("1 solid #23386a");

		if(bRound)
		{
//			  newChild.style.set_bordertype("round 10 10");
			  newChild.set_bordertype("round 10 10");
		}
//		newChild.style.set_background("transparent");
//		newChild.style.set_opacity(nOpacity);
		newChild.set_background("transparent");
		newChild.set_opacity(nOpacity);
		newChild.showModal(objParentFrame, oArg, this,sPopupCallback,true);
    }
}


/**
* 팝업창 창닫기 이벤트
* @param {string}  창닫기시 보내질 아규먼트
* @example N/A
* @memberOf public
*/
pForm.gfn_popupClose = function(val)
{
	/* modal, modeless 구분하여 팝업 close 처리 */
	
	var objFrame = this.getOwnerFrame();
	
	var windowType = objFrame._is_window;
	
	if(windowType)//modeless 일 때 처리
	{	
		var pThis = this.opener;
		pThis._rtnModal = val;
		
		var sCallback = objFrame._close_callback;
		pThis[sCallback](objFrame.id, val);
		this.close();
		
	}else//modal 일 때 처리
	{
		this.close(this.opener.gfn_setReturn(val));
	
	}
	
	
}

/**
* 팝업값 return
* @param
* @return {string} return 값
* @example
* @memberOf public
*/
pForm.gfn_getPopupRtn = function()
{
    return this.gfn_getReturn();
}

/**********************************************************************************
 * Function Name: gfn_arrangeWin
 * Description  : 열려있는 윈도우 화면을 정렬
 * Arguments    : strType: 정렬 타입
 * Return       : N/A
 **********************************************************************************/
pForm.gfn_arrangeWin = function(strType)
{
	// workFrame영역에 open된 childFrame 갯수
	var iFramesCnt = gv_appWorkFrameSet.frames.length;

	//homeFrame삭제
	for (var i=0; i<iFramesCnt; i++)
	{
	    if (gv_appWorkFrameSet.frames[i].name == "homeFrame"){
		    var objDelete = gv_appWorkFrameSet.removeChild("homeFrame");
		    //alert(objDelete);
		    iFramesCnt -= 1;
		}
	}

	switch(strType)
	{
		case "maximize" :

		var objActiveFrame  = gv_appWorkFrameSet.getActiveFrame();

		//trace("sWinId ==>"+sWinId);
		for (var i=0; i<iFramesCnt; i++)
		{
			gv_appWorkFrameSet.frames[i].set_openstatus("maximize");
			gv_appWorkFrameSet.frames[i].set_showtitlebar(false);
			gv_appWorkFrameSet.frames[i].style.set_bordertype("");
			gv_appWorkFrameSet.frames[i].style.set_border("0 solid #006666ff");
			//gv_appWorkFrameSet.frames[i].form.div_Quick_h.set_visible(true);
		    gv_appWorkFrameSet.frames[i].form.divWork.set_left(0);
			gv_appWorkFrameSet.frames[i].form.divWork.set_right(0);
			//gv_appWorkFrameSet.frames[i].form.st_title_path.set_left(0);
			gv_appWorkFrameSet.frames[i].set_resizable(false);
		}

        //if (!this.gfn_isNull(objActiveFrame)) objActiveFrame.setFocus();

	   break;

	   case "closeAll" :

	   break;

	   case "hidden" :
	   for (i=0; i<iFramesCnt; i++)
	   {
			gv_appWorkFrameSet.frames[i].set_showtitlebar(true);
			gv_appWorkFrameSet.frames[i].style.set_border("1 solid #7f7f7bff");
			gv_appWorkFrameSet.frames[i].style.set_bordertype("round 3 3");
			gv_appWorkFrameSet.frames[i].set_openstatus("minimize");
		}

		gv_appWorkFrameSet.arrange(strType);
	    break;

	    case "cascade" :

		for (i=0; i<iFramesCnt; i++)
		{
			gv_appWorkFrameSet.frames[i].set_showtitlebar(true);
			gv_appWorkFrameSet.frames[i].style.set_border("1 solid #7f7f7bff");
			gv_appWorkFrameSet.frames[i].style.set_bordertype("round 3 3");
			gv_appWorkFrameSet.frames[i].set_openstatus("normal");
			//gv_appWorkFrameSet.frames[i].form.div_Quick_h.set_visible(false);
		    gv_appWorkFrameSet.frames[i].form.div_Work.set_left(10);
			gv_appWorkFrameSet.frames[i].form.div_Work.set_right(0);
			gv_appWorkFrameSet.frames[i].form.st_title_path.set_left(10);
			gv_appWorkFrameSet.frames[i].set_resizable(true);
		}

		gv_appWorkFrameSet.arrange(strType);
	    break;

	    case "tilevertical" :

		for (i=0; i<iFramesCnt; i++)
		{
			gv_appWorkFrameSet.frames[i].set_showtitlebar(true);
			gv_appWorkFrameSet.frames[i].style.set_border("1 solid #7f7f7bff");
			gv_appWorkFrameSet.frames[i].style.set_bordertype("round 3 3");
			gv_appWorkFrameSet.frames[i].set_openstatus("normal");
			//gv_appWorkFrameSet.frames[i].form.div_Quick_h.set_visible(false);
			gv_appWorkFrameSet.frames[i].form.div_Work.set_left(10);
			gv_appWorkFrameSet.frames[i].form.div_Work.set_right(0);
			gv_appWorkFrameSet.frames[i].form.st_title_path.set_left(10);
			gv_appWorkFrameSet.frames[i].set_resizable(true);

		}

		gv_appWorkFrameSet.arrange(strType);
	    break;

	    case "tilehorizontal" :
		for (i=0; i<iFramesCnt; i++)
		{
			if (gv_appWorkFrameSet.frames[i].name == "homeFrame"){
		        gv_appWorkFrameSet.frames[i].set_visible(false);
		    }else{
				gv_appWorkFrameSet.frames[i].set_showtitlebar(false);
				gv_appWorkFrameSet.frames[i].style.set_border("1 solid #7f7f7bff");
				gv_appWorkFrameSet.frames[i].style.set_bordertype("round 3 3");
				gv_appWorkFrameSet.frames[i].set_openstatus("normal");
			}
		}

		gv_appWorkFrameSet.arrange(strType);
	    break;

	    case "vertical" :
		for (i=0; i<iFramesCnt; i++)
		{
			if (gv_appWorkFrameSet.frames[i].name == "homeFrame"){
		        gv_appWorkFrameSet.frames[i].set_visible(false);
		    }else{
				gv_appWorkFrameSet.frames[i].set_showtitlebar(false);
				gv_appWorkFrameSet.frames[i].style.set_border("1 solid #7f7f7bff");
				gv_appWorkFrameSet.frames[i].style.set_bordertype("round 3 3");
				gv_appWorkFrameSet.frames[i].set_openstatus("normal");
			}
		}

		gv_appWorkFrameSet.arrange(strType);
	    break;

	    case "horizontal" :
		for (i=0; i<iFramesCnt; i++)
		{
		    if (gv_appWorkFrameSet.frames[i].name == "homeFrame"){
		        gv_appWorkFrameSet.frames[i].set_visible(false);
		    }else{
				gv_appWorkFrameSet.frames[i].set_showtitlebar(false);
				gv_appWorkFrameSet.frames[i].style.set_border("1 solid #7f7f7bff");
				gv_appWorkFrameSet.frames[i].style.set_bordertype("round 3 3");
				gv_appWorkFrameSet.frames[i].set_openstatus("normal");
			}
		}

		gv_appWorkFrameSet.arrange(strType);
	    break;

	    default :
		for (i=0; i<iFramesCnt; i++)
		{
			if (gv_appWorkFrameSet.frames[i].name == "homeFrame"){
		        gv_appWorkFrameSet.frames[i].set_visible(false);
		    }else{
				gv_appWorkFrameSet.frames[i].set_showtitlebar(false);
				gv_appWorkFrameSet.frames[i].style.set_border("1 solid #7f7f7bff");
				gv_appWorkFrameSet.frames[i].style.set_bordertype("round 3 3");
				gv_appWorkFrameSet.frames[i].set_openstatus("normal");
			}
		}

		gv_appWorkFrameSet.arrange(strType);
	    break;

	}

}



/**
* 현재 오픈되어있는 메뉴를 닫고 다른 화면을 오픈
* @param  {string} 메뉴아이디
* @param  {object} 넘겨줄 Argument
* @return  N/A
* @example
* @memberOf public
*/
/* 20150417 주석처리
사용안함 UI공통
this.gfn_closeOpenMenu = function(menuId,oArgs)
{
    this.gfn_openMenu(menuId,false,oArgs,true);
}
*/

/**
* 인자를 넘겨줄 경우에 넘겨주는 규칙대로 인자/값을 설정
* @param {string} 설정할 파리미터명
* @param {string} p_value - 설정할 값
* @return {string] String
* @example
*     paramStr += gfn_SetParam("sql_xml", "gspl_sql_common");
* @memberOf global
*/
pForm.gfn_setParam = function (p_name, p_value)
{
	return p_name + "='" + nexacro.stripQuote(this.gfn_isEmpty(p_value)) + "' ";
}


/********************************************************************************
 * Function Name: gfn_message												
 * Description	: 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을	
 *				  생성해서 해당 값을 보여주는 함수						
 * Arguments	: strMsgId(MessageId)										
 *				  strMsgType  (메세지 종류 : error, warning, info)				
                  strMsgButton(버튼         : ok,yesno,yesnocancel
 *				  msgArr[](메세지값으로 치환될 Parameter Array)		
 * 사용법      : gfn_Message("msg.err.validator.required","info","ok","대분류")
 * Return 		: 0,1,2 로 값을 return 해준다 				
 ********************************************************************************/ 
pForm.gfn_Message = function (strMsgId, msgArr, sMsgType, sMsgButton) 
{
	
	if(this.gfn_isNull(sMsgType)) {
		sMsgType = "info";
	}
	
	if(this.gfn_isNull(sMsgButton)) {
		sMsgButton = "ok";
	}
	
	if(this.gfn_isNull(msgArr)) {
		msgArr = "";
	}
	
	//trace("strMsgId => " + strMsgId + ", msgArr => " + msgArr);	
	var strMsg = this.gfn_GetMessTxt(strMsgId, msgArr);
	if (this.gfn_isNull(strMsg)){
	    strMsg = msgArr;  
	}
		
	if (sMsgType=="conf"){
		return this.confirm( strMsg );
	}else{
		//alert(strMsg);
		
		var oArg = {message:strMsg};
		this.gfn_openPopup("msgBox","common::com_msgBox.xfdl",oArg,"");
	    return true;
	    
	}   
}

/********************************************************************
* Function Name: gfn_GetMessTxt
* Description  : 메세지 값을 문자열 치환하여 메세지 내용을 조회한다. 
* Arguments    : TextID: 메세지ID, aArgs: 토큰문자배열
* Return       : 처리 메시지
********************************************************************/
pForm.gfn_GetMessTxt = function (sId, aArgs)
{
//	trace("sId => " + sId + ", aArgs => " + aArgs);

	if (this.gfn_isNull(sId)) return "";
    if(this.gfn_isNull(aArgs)){
        sRtnMsg = this.gfn_replace(sRtnMsg, "{0}" , "");
        sRtnMsg = this.gfn_replace(sRtnMsg, "{1}" , "");
        sRtnMsg = this.gfn_replace(sRtnMsg, "{2}" , "");
    }

	var nRow = nexacro.getApplication().gds_message.findRow("MESSAGEID", sId);
	if(nRow < 0) {
	    return sId;
	}	
	
	var sRtnMsg = nexacro.replaceAll(nexacro.getApplication().gds_message.getColumn(nRow, "DESCRIPTION"),"'","´");    
          
    if (this.gfn_isNull(aArgs)) return sRtnMsg;        
    
    if(aArgs instanceof Array) {  
        var nNum =0;
        var sVal="";     
          
        for (var i=0; i<sRtnMsg.length; i++) {
            strPos = sRtnMsg.substr(i, 1);
            
            if (strPos == "{"){  
                sVal = sVal+strPos+nNum;
                nNum +=1;
            }else{
                sVal += strPos;
            }
            
            //alert("sVal : "+sVal);
         }
		
        //sRtnMsg = sVal; 
        
        for(var i = 0; i < aArgs.length; i++) {            
			sRtnMsg = this.gfn_replace(sRtnMsg, "{" + i +"}" , this.nfn_getDictionarynameUpper(""+aArgs[i]));
		}
		return sRtnMsg;
	}    
    
    sRtnMsg = this.gfn_replace(sRtnMsg, "{0}", this.nfn_getDictionarynameUpper(""+aArgs));
	return sRtnMsg;
}

/********************************************************************
* Function Name: gfn_frameclose
* Description  : 프레임 폼 onclose event
* Arguments    : 
* Return       : 
********************************************************************/
pForm.gfn_frameclose = function (menuId)
{
    //gds_openMenu 삭제
    if (this.gfn_isNull(menuId)) return;
    
    var nRow = nexacro.getApplication().gds_openMenu.findRow("MENU_ID", menuId);
       
 	if (nRow > -1){ 
 	    var stitle    = nexacro.getApplication().gds_openMenu.getColumn(nRow,"TITLE");
 	    
 	    var nFindRow  = nexacro.getApplication().gds_menu.findRow("MENU_ID", menuId);
 		var smenuName = nexacro.getApplication().gds_menu.getColumn(nFindRow, "MENU_NM"); 	    
 	    
 	    var bSucc = nexacro.getApplication().gds_openMenu.deleteRow(nRow); 
 	    if (bSucc){
			//popup으로 생성된 화면은 제외
			if(stitle != "pop"){	    
				if (!this.gfn_isNull(smenuName)) gv_appWorkTopFrame.form.titleClosed2(smenuName,menuId);  // 2015.08.26 메뉴아이디 인자추가
			}
		}	
 	} 	
}


/**************************************************************************************************************
 * Function Name: gfn_fold												
 * Description	: 특정 Div구역을 접는 효과를 주기 위한 접기(▲)버튼 구동함수
 * Arguments	: tObj	:	접었을때 비활성화 될 상단 Div의 id값
				  bObj	:	접었을때 위로 올라갈 하단 Div의 id값
				  fBtn	:	접기버튼 id값
				  uBtn	:	펴기버튼 id값
				  hBar	:	하이드바 id값
				  h		:	상단 Div의 높이값
 * 사용법      : this.gfn_fold(this.Tab00, this.Div00, this.btn_Fold, this.btn_unFold, this.hideBar, h)
 * Return 		: 없음 				
 **************************************************************************************************************/ 
/* Div 접기 함수 */
pForm.gfn_fold = function(tObj, bObj, fBtn, uBtn, hBar, h)
{
	tObj.set_visible(false); //상단부 비활성화
	hBar.set_visible(true); //하이드바 활성화
	bObj.set_top(bObj.top - h); //하단부 끌어올림
	
	fBtn.set_visible(false); //접기(▲)버튼 비활성화
	uBtn.set_visible(true); //펴기(▼)버튼 활성화
	
	this.resetScroll(); //스크롤바 초기화
}


/**************************************************************************************************************
 * Function Name: gfn_unFold												
 * Description	: 특정 Div구역을 펴는 효과를 주기 위한 펴기(▼)버튼 구동함수
 * Arguments	: tObj	:	폈을때 활성화 될 상단 Div의 id값
				  bObj	:	폈을때 아래로 내려갈 하단 Div의 id값
				  fBtn	:	접기버튼 id값
				  uBtn	:	펴기버튼 id값
				  hBar	:	하이드바 id값
				  h		:	상단 Div의 높이값
 * 사용법      : this.gfn_unFold(this.Tab00, this.Div00, this.btn_Fold, this.btn_unFold, this.hideBar, h)
 * Return 		: 없음 				
 **************************************************************************************************************/ 
/* Div 펴기 함수 */
pForm.gfn_unFold = function(tObj, bObj, fBtn, uBtn, hBar, h)
{
	tObj.set_visible(true); //상단부 활성화
	hBar.set_visible(false); //하이드바 비활성화
	bObj.set_top(bObj.top - (-h)); //하단부 끌어내림
	
	fBtn.set_visible(true); //접기(▲)버튼 활성화
	uBtn.set_visible(false); //펴기(▼)버튼 비활성화
	
	this.resetScroll(); //스크롤바 초기화
}



/**************************************************************************************************************
 * Function Name: gfn_searchCtrl												
 * Description	: Search Div를 한줄로 축소 및 2줄이상으로 확장 시 버튼에서 호출하는 함수
 * Arguments	: sDiv		:	Search Div의 id값
				  bDiv		:	Search Div 하단영역 Div의 id값
				  cBtn		:	Search창 조절버튼 id값
				  line		:	search Div의 라인 수
				  initLine	:	Search Div의 초기라인 수 (Default : 1)
 * 사용법       : this.gfn_searchCtrl(this.Div01, this.Div02, this.Div01.btn_searchContoll, 2, 1);
 * Return 		: flag		:	펴졌을 경우 - true, 접혔을 경우 - false
 **************************************************************************************************************/ 
pForm.gfn_searchCtrl = function(sDiv, bDiv, cBtn, line, initLine)
{
	var nHeight = 43; //1 단 일 때 division 높이
	var initHeight; //search Div 의 초기 높이
	var gapSize; //하단 Div 내려줄 높이
	var flag; //return시킬 접힘,펼침에 대한 상태값
	
	if(this.gfn_isNull(initLine) || initLine == 1) //초기 높이가 1단일때
	{
		initHeight = nHeight; //초기 파라미터 없을때 Default 높이 값
	}
	else //초기 높이 2단이상인 경우
	{
		initHeight = nHeight + 31*(initLine-1); //높이 값 세팅
	}
	
	gapSize = (parseInt(nHeight) + 31*(parseInt(line)-1)) - parseInt(initHeight);
	
	if(sDiv.height != initHeight)
	{
		sDiv.set_height(initHeight); //search영역 축소
		bDiv.set_top(bDiv.top - parseInt(gapSize)); //하단 Div를 search창이 숨겨진 높이만큼 끌어올림
		
		cBtn.set_cssclass("btn_search_open");
		cBtn.set_tooltiptext("검색조건 펼침");
		flag = false;
	}
	else
	{
		sDiv.set_height(nHeight + (31*(line-1))); //search영역 펼침
		bDiv.set_top(bDiv.top - (-parseInt(gapSize))); //하단 Div를 search창이 펼쳐진 높이만큼 내림
		
		cBtn.set_cssclass("btn_search_cls");
		cBtn.set_tooltiptext("검색조건 숨김");
		flag = true;
	}
	
	var comps = sDiv.components, comp;
	for(var i=0; i < comps.length; i=i+1)
	{
		comp = comps[i];
		if( (sDiv.getOffsetHeight()-3) < comp.getOffsetTop() )
		{
			comp.set_enable(false);
		}else{
			//trace("nHeight : "+(nHeight-2 )+ ", comp.name : "+comp.name+ ", comp.getOffsetTop() : "+ comp.getOffsetTop());
			comp.set_enable(true);
		}
	}
	
	return flag;
}

/**
* 폼 로딩시간 보여주기
* @param  {string} obj - Form
* @return  N/A
* @example
* @memberOf public
*/
pForm.gfn_accessTime = function(obj)
{
	if(gv_appTopFrame)
	{
	
		//공통제어 Form Event 설정	
		var objDate = new Date();
		var objEndDate = new Date();
		var nLocTime = gv_appTopFrame.form.fv_menuAccessTime;  
		objDate.setTime(nLocTime);

		var diffMilSec = objEndDate - objDate;
		var diffSec = diffMilSec / 1000;
// 		var diffMin = diffSec / 60;
// 		var diffHour = diffMin / 60;
// 		var diffDay = diffHour / 24;
		
		//trace("diffMilSec : "+diffMilSec+", diffSec : "+diffSec+", diffMin : "+diffMin+", diffHour : "+diffHour+", diffDay : "+diffDay);
		
		//var objDiv = obj.parent.div_accessTime;
		//objDiv.fn_setAccessTime(diffMilSec);
	}

}



/**************************************************************************************************************
 * Function Name: gfn_getActiveMenuId
 * Description	: 현재 활성화된 폼의 메뉴아이디값 반환
 * Arguments	: 없음
 * 사용법      : this.gfn_getActiveMenuId();
 * Return 		: 메뉴아이디(aMenuId)
 **************************************************************************************************************/ 
 pForm.gfn_getActiveMenuId = function()
{
// 	if(opener == null) //메인창에서 업무화면 띄울때
// 	{
		if(this.parent.parent.popYn=="Y"){
			this.parent.parent.parent.opener.getOwnerFrame().form.fn_addMyMenu(aMenuId, aMvmnUrl);
			var aMenuId = nexacro.getApplication().mainframe.VFrameSet.HFrameSet0.VFrameSet0.FrameSet0.getActiveFrame()._menuid;
		}else{
			var aMenuId = gv_appWorkFrameSet.getActiveFrame()._menuid;
		}
	 
		return aMenuId;
// 	}
// 	else //모달리스팝업으로 띄울때
// 	{
// 		return false;
// 	}
}



/**************************************************************************************************************
 * Function Name: gfn_sessionCheck
 * Description	: 현재 세션상태에 따라 URL처리
 * Arguments	: errorCode : 에러코드
				  errorMsg	: 에러메시지
 * 사용법      	: this.gfn_sessionCheck(errorCode, errorMsg);
 * Return 		: 없음
 **************************************************************************************************************/ 
pForm.gfn_sessionCheck = function(errorCode, errorMsg)
{	
	var runMode = nexacro.getApplication().gv_runMode; //현재 런모드
	var ifcUrl = nexacro.getApplication().gds_url.lookup("RUN_MODE", runMode, "IFC"); // URL
	var sAppId = nexacro.getApplication().id.toLowerCase(); //업무코드(소문자)
	/*live */
	if (((errorCode == 9001) || (errorCode == 9003) || (errorCode == 9005))) //'9001:최초로그인', '9003:중복로그인', '9005:장기간미사용'
	{
		if(!this.gfn_isNull(errorMsg)  && !ct_sessionChecked) //메시지가 있을때만 출력
		{
			this.alert(errorMsg);
			ct_sessionChecked = true;
		}

//		var preUrl = "/smh/login.scr?nextUri=/"; //URL Prefix
//		var sufUrl = "/index.html"; //URL Suffix
		//var sUrl = preUrl + sAppId + sufUrl; //이동할 풀URL 조합 ("/smh/login.scr?nextUri=/ifc/index.html")
//		var sUrl = preUrl + "ifc" + sufUrl; 
		var sUrl = "/smh/index.html";
			
		if(runMode != "local") //서버환경일때
		{  
			sUrl = "/smh/smh/index.html";
			//var openerSufUrl = "/smh/logout.scr"; //오프너화면 로그아웃 Suffix
			if(opener != null) //부모화면 있을때
			{
				opener.location.href = sUrl;	//ifcUrl + openerSufUrl; //부모화면 로그아웃처리
//				nexacro.getApplication().afn_logout(); //현재업무창 닫기
			}
			else //부모화면 없을때
			{
//					nexacro.getApplication().afn_logout();
					parent.location.href =  sUrl;	//ifcUrl + openerSufUrl; //현재화면을 로그아웃된 포털화면으로 이동
			}
			
		}
		else //로컬환경일때
		{
			//var openerSufUrl = "/smh/logout.scr"; //오프너화면 로그아웃 Suffix
			if(opener != null) //부모화면 있을때
			{
				opener.location.href = sUrl;	//ifcUrl + openerSufUrl; //부모화면 로그아웃처리
//				nexacro.getApplication().afn_logout(); //현재업무창 닫기
			}
			else //부모화면 없을때
			{
				//nexacro.getApplication().afn_logout();
				parent.location.href =  sUrl;	//ifcUrl + openerSufUrl; //현재화면을 로그아웃된 포털화면으로 이동
			}
		}
	}
	
	/*  */
	else if(((errorCode == 9002) || (errorCode == 9004) || (errorCode == 9006) || (errorCode == 9999))) //'9002:최초로그인', '9004:중복로그인', '9006:장기간미사용'
	{
		if(!this.gfn_isNull(errorMsg) && !ct_sessionChecked) //메시지가 있을때만 출력
		{
			this.alert(errorMsg);
			ct_sessionChecked = true;
		}
		
//		var preUrl = "/smh/login.scr?nextUri=/"; //URL Prefix
//		var sufUrl = "/index.html"; //URL Suffix
		//var sUrl = preUrl + sAppId + sufUrl; //이동할 풀URL 조합 ("/smh/login.scr?nextUri=/ifc/index.html")
//		var sUrl = preUrl + "ifc" + sufUrl; 
		var sUrl = "/smh/index.html";
			
		if(runMode != "local") //서버환경일때
		{  
			sUrl = "/smh/smh/index.html";
		}
		
		
		nexacro.getApplication().afn_logout();
		try{
		parent.location.href = sUrl; //풀URL로 이동
		//alert('j');
		}
		catch(eee){}
	}
}

pForm.gfn_sessionCheckPda = function(errorCode, errorMsg)
{	
	trace("errorCode-->"+errorCode);
	var runMode = nexacro.getApplication().gv_runMode; //현재 런모드
	var ifcUrl = nexacro.getApplication().gds_url.lookup("RUN_MODE", runMode, "IFC"); // URL
	var sAppId = nexacro.getApplication().id.toLowerCase(); //업무코드(소문자)
	/*live */
	if (((errorCode == 9001) || (errorCode == 9003) || (errorCode == 9005))) //'9001:최초로그인', '9003:중복로그인', '9005:장기간미사용'
	{
		if(!this.gfn_isNull(errorMsg)  && !ct_sessionChecked) //메시지가 있을때만 출력
		{
			this.alert(errorMsg);
			ct_sessionChecked = true;
		}

//		var preUrl = "/smh/login.scr?nextUri=/"; //URL Prefix
//		var sufUrl = "/index.html"; //URL Suffix
		//var sUrl = preUrl + sAppId + sufUrl; //이동할 풀URL 조합 ("/smh/login.scr?nextUri=/ifc/index.html")
//		var sUrl = preUrl + "ifc" + sufUrl; 
		var sUrl = "/smh/index.html";
			
		if(runMode != "local") //서버환경일때
		{  
			sUrl = "/smh/smh/index.html";
		}
		//var sUrl = "/smh/launch.html?screenid=pda";
		//sUrl = sUrl + "&sessionChecked=y";
			
		if(runMode != "local") //서버환경일때
		{
			//var openerSufUrl = "/smh/logout.scr"; //오프너화면 로그아웃 Suffix
			if(opener != null) //부모화면 있을때
			{
				opener.location.href = sUrl;	//ifcUrl + openerSufUrl; //부모화면 로그아웃처리
//				nexacro.getApplication().afn_logout(); //현재업무창 닫기
			}
			else //부모화면 없을때
			{
//					nexacro.getApplication().afn_logout();
					parent.location.href =  sUrl;	//ifcUrl + openerSufUrl; //현재화면을 로그아웃된 포털화면으로 이동
			}
			
		}
		else //로컬환경일때
		{
			//var openerSufUrl = "/smh/logout.scr"; //오프너화면 로그아웃 Suffix
			if(opener != null) //부모화면 있을때
			{
				opener.location.href = sUrl;	//ifcUrl + openerSufUrl; //부모화면 로그아웃처리
//				nexacro.getApplication().afn_logout(); //현재업무창 닫기
			}
			else //부모화면 없을때
			{
				//nexacro.getApplication().afn_logout();
				parent.location.href =  sUrl;	//ifcUrl + openerSufUrl; //현재화면을 로그아웃된 포털화면으로 이동
			}
		}
	}
	
	/*  */
	else if(((errorCode == 9002) || (errorCode == 9004) || (errorCode == 9006) || (errorCode == 9999))) //'9002:최초로그인', '9004:중복로그인', '9006:장기간미사용'
	{
		if(!this.gfn_isNull(errorMsg)) //메시지가 있을때만 출력
		{
			this.alert(errorMsg);
			ct_sessionChecked = true;
		}
		
//		var preUrl = "/smh/login.scr?nextUri=/"; //URL Prefix
//		var sufUrl = "/index.html"; //URL Suffix
		//var sUrl = preUrl + sAppId + sufUrl; //이동할 풀URL 조합 ("/smh/login.scr?nextUri=/ifc/index.html")
//		var sUrl = preUrl + "ifc" + sufUrl; 
		//var sUrl = "/smh/index.html";
		var sUrl = "/smh/index.html";
			
		if(runMode != "local") //서버환경일때
		{  
			sUrl = "/smh/smh/index.html";
		}
		
		//var sUrl = "/smh/launch.html?screenid=pda";
		//sUrl = sUrl + "&sessionChecked=y";
		//nexacro.getApplication().afn_logout();
		//parent.location.href = sUrl; //풀URL로 이동
		
	}
}

/**************************************************************************************************************
 * Function Name: gfn_callFormFunc
 * Description	: 페이지 URL값으로 현재 오픈여부 판별 및 해당 페이지의 지정한 함수 호출
 * Arguments	: pageUrl : 페이지 URL (ex> "cmcm::CMCM01100M.xfdl")
				  funcName : 호출 할 함수 명 (ex> "fn_test")
				  funcArg : 호출 할 함수의 파라미터 (배열인자)
 * 사용법      	: this.gfn_callFormFunc(pageUrl, funcName, funcArg);
 * Return 		: 화면 오픈여부 (true/false)
 **************************************************************************************************************/ 
pForm.gfn_callFormFunc = function(pageUrl, funcName, funcArg)
{	
	var menuId = nexacro.getApplication().gds_menu.lookup("PAGE_URL", pageUrl, "MENU_ID"); //PAGE_URL을 MENU_ID로 변환
	var tabLocation = 0; //페이지가 오픈되어 있는 탭 위치 값
	var openIdx = false; //페이지가 오픈되어 있는지 여부
	var argType = typeof funcArg; //함수 아규먼트 파일타입
		
	for(var i=1 ; i<gv_appWorkFrameSet.frames.length ; i++) //오픈된 페이지 수만큼 루프
	{
		if(menuId == gv_appWorkFrameSet.frames[i]._menuid) //해당 메뉴가 오픈되어 있을 경우
		{
			openIdx = true; //오픈상태 true
			tabLocation = i; //오픈된 탭위치 세팅
		}
	}
	
	if(openIdx == true) //페이지가 오픈되어있을 때
	{
		if(!this.gfn_isNull(funcName)) //호출 시킬 함수가 있을 때
		{
			if((this.gfn_isNull(funcArg)) || (argType == "object")) //함수 아규먼트가 없거나 배열로 왔을때만 실행
			{
				gv_appWorkFrameSet.frames[tabLocation].form.components[1][funcName].apply(gv_appWorkFrameSet.frames[tabLocation].form.components[1], funcArg); //해당 페이지의 함수 호출
			}
			else
			{
				trace("잘못된 함수 파라미터 지정입니다.");
			}
		}
	}
	
	return openIdx; //페이지 오픈여부 반환
}



/**************************************************************************************************************
 * Function Name: gfn_openAppPopup
 * Description	: 타 업무화면을 모달리스 팝업형태로 호출
 * Arguments	: jobId : 업무코드 (ex> "CMD")
				  pageUrl : 페이지 URL (ex> "cmcm::CMCM01100M.xfdl")
 * 사용법      	: this.gfn_openAppPopup("CMD", "cmcm::CMCM01100M.xfdl");
 * Return 		: 없음
 **************************************************************************************************************/ 
pForm.gfn_openAppPopup = function (jobId, pageUrl)
{
	var sAppId = jobId.toUpperCase();
	var runMode = nexacro.getApplication().gv_runMode;
	var contextUrl = nexacro.getApplication().gds_url.lookup("RUN_MODE", runMode, sAppId);
	
	var sUrl = "";
	
	if((sAppId == "BGT") || (sAppId == "ABM") || (sAppId == "KMC") || (sAppId == "MIS"))
	{
		sUrl = contextUrl + "/index.html?formUrl=" + pageUrl + "@new";
	}
	else
	{
		sUrl = contextUrl + "/" + jobId.toLowerCase() + "/index.html?formUrl=" + pageUrl + "@new";
	}
	
	if(!this.appWebBrowser)
	{
		var newWebBrowser = new WebBrowser();
		newWebBrowser.init("appWebBrowser", "absolute", 0, 0, 0, 0);
		this.addChild(newWebBrowser.name, newWebBrowser);
		newWebBrowser.show();
		
		newWebBrowser.addEventHandler("onloadcompleted", this._gfn_clsWaitCursor, this);
	}
	
	nexacro.getApplication().set_usewaitcursor(true);
	this.setWaitCursor(true, true);
	
	this.appWebBrowser.set_url(sUrl);
}

/**************************************************************************************************************
 * Function Name: _gfn_clsWaitCursor
 * Description	: gfn_openAppPopup() 함수의 waitcursor 제거 처리를 위한 이벤트함수
 **************************************************************************************************************/ 
pForm._gfn_clsWaitCursor = function (obj, e)
{
	nexacro.getApplication().set_usewaitcursor(false);
	this.setWaitCursor(false,true);
}

pForm.gfn_chkFormCloseChildFrame = function(sName){
	var bRtn = false;
	var objChildFrame = gv_appWorkFrameSet.frames[sName];
	var objDivWork= objChildFrame.form.div_Work;
	bRtn = this.gfn_chkFormCloseOne(objDivWork);
	return bRtn;
}

pForm.gfn_chkFormClose = function(){
	for(var i=0; i<nexacro.getApplication().gds_openMenu.rowcount; i++){
		var sName = nexacro.getApplication().gds_openMenu.getColumn(i,"MENU_ID");
		//trace("sName-->"+sName);
		var bOK = this.gfn_chkFormCloseChildFrame(sName);
		if(bOK){
			var objChildFrame = gv_appWorkFrameSet.frames[sName];
			objChildFrame.destroy();
		}else{
			return false;
		}
	}
	return true;
}

pForm.gfn_chkFormCloseOne = function(objDivWork){
	var bOK = true;
	var sDs = this.gfn_getDivDs(objDivWork);
	for(var i = 0; i < objDivWork.all.length; i++)
	{
		if(objDivWork.all[i] instanceof Dataset)
		{
			if(!this.gfn_isNull(sDs) && sDs.indexOf(objDivWork.all[i].name) > -1) continue;
			
			if( objDivWork.all[i].name != "ds_search" && objDivWork.all[i].name != "ds_param" 
			      && objDivWork.all[i].name != "ds_popParam" && objDivWork.all[i].name != "ds_printParam" && this.gfn_dsIsUpdated(objDivWork.all[i]))
			{				
				var bOK = nexacro.getApplication().confirm("변경된 정보가 존재합니다. 열린 화면이 닫힙니다.\n계속하시겠습니까?");
				break;
			}
		}
	}
	return bOK;
}

pForm.gfn_getDivDs = function(objDivWork)
{
	var sDs =  "";
	var j = 0;
	for(var i=0; i<objDivWork.components.length; i++){
		obj = objDivWork.components[i];
		if(obj instanceof Combo){
			if(this.gfn_isNull(obj.innerdataset)) continue;
			
			var sDs2 = obj.innerdataset;
			sDs += (j==0?"":",") + sDs2;
			j++;
		}else if(obj instanceof Div){
			sDs += this.gfn_getDivDs(obj);
		}else if(obj instanceof Tab){
			sDs += this.gfn_getDivDs(obj);
		}
	}
	return sDs;
}	







pForm.gfn_showPage = function( s, c ){
  this._gc_cbs = c;
  this._cFrmArg = {master:'', menuid:'', winid:'', cfrm:'', cfrmObj:''};
  this.gfn_goPage( s );
  
  var objOpenMenuDs = nexacro.getApplication().gdsOpenMenu;
  var sMenuId = nexacro.getApplication().gds_menu.lookup("PAGE_URL", s, "MENU_ID");
  nFRowOpen = objOpenMenuDs.findRow("MENU_ID", sMenuId);
  sWinId = objOpenMenuDs.getColumn(nFRowOpen, "WINID");
  this._cFrmArg.menuid = sMenuId;
  this._cFrmArg.winid = sWinId;
  this._cFrmArg.master = this;
  var cf = gv_appWorkFrameSet.frames[sWinId];
  this._cFrmArg.cfrm = cf;
  this.gc_f('gc_pc');
  return ;
}

pForm.gc_pc = function(){
  if( this._cFrmArg.cfrm.form.components.length <= 0 ) {this.gc_f('gc_pc'); return;}
  this._cFrmArg.cfrmObj = this._cFrmArg.cfrm.form.components[0].form;
  this._cFrmArg.cfrmObj._oFrmArg = this._cFrmArg;
  this.gc_f(this._gc_cbs);
}

pForm.gc_f = function( c ){
  this.gfn_transaction('1','','','','',c,0,1);
}


// 부모창에서 자식객체 리턴 
pForm.gfn_getDetail = function(  ){
  return this._cFrmArg.cfrmObj;
}

// 자식창에서 부모객체 리턴 
pForm.gfn_getMaster = function( ){
  return this._oFrmArg.master;
}

// 자식창에서 자식닫기
pForm.gfn_detail_close = function( ){
  var sWinId = this._oFrmArg.winid;  
  gv_appWorkFrameSet[sWinId].form.close();
  gv_appLeftFrame.form.fn_DelOpenMenu(sWinId);
}







// login user info -- session 
pForm.gfn_userinfoJs = function(){
	var ds = nexacro.getApplication().gds_userInfo;
	
	var result = {};
	
	for( var i = 0; i < ds.colcount; i++){
	  var colid = ds.getColID(i);
	  var colval = ds.getColumn(0, colid);
	  colid = colid.replace('gv_', '');
	  //trace( colid +' : '+colval);
	  result[colid] = colval;
	}
	
	return result;
	
}





pForm.notFoundViewClear = function( grd ){
  if( grd._origDs != null ){  
    grd.set_binddataset(grd._origDs);
    grd.set_formats(grd._origFormats);
  }
}

pForm.notFoundView = function( grd ){
  if( grd._origFormats == null ) {
    //grdFormater = this.grd_00.formats;
	grd._origFormats = grd.formats;
	grd._origDs = grd.getBindDataset();
	
	var sXml = grd.formats;	
    var objDom = new nexacro.DomParser();
    var domDoc = objDom.parseFromString(sXml);
	
	var band = domDoc.getElementsByTagName('Band')[1];
	var cArr = band.getElementsByTagName('Cell');
	var cCnt = cArr.length;
	//var firstBind = '';
	for( var i = cCnt -1; i >= 0; i--){
	  if( i == 0 ){
	    grd._firstBind = cArr[i].getAttribute('text');
	  }
	  cArr[i].parentNode.removeChild(cArr[i]);
	}
	var p = domDoc.createElement('Cell');
	p.setAttribute('colspan', cCnt);
	p.setAttribute('text', grd._firstBind);
	band.appendChild(p);
    var objXml = new nexacro.XmlSerializer();
    var strXML = objXml.serializeToString( domDoc ); 
	grd._noDataFormats = strXML;
  }
  
  var cDs = grd._origDs;
  if(cDs.rowcount > 0 ){
    grd.set_formats(grd._origFormats);
	grd.set_binddataset(grd._origDs);
  }
  else{
	  var fds = new Dataset;
	  var cellName = grd._firstBind.replace('bind:','');
	  fds.addColumn(cellName);
	  var ridx = fds.addRow();
	  fds.setColumn(ridx, cellName, 'Not Data Found');	
	  grd.set_formats(grd._noDataFormats);
	  grd.set_binddataset(fds);
  }
}




pForm.gfn_export_excelEx2 = function(objGrd, vName, file_name, ftype, appendStrs){

  var sName = objGrd.name;

  var isAppendSkip = this.gfn_isNull(appendStrs);

  var delCols = [];
  if( !isAppendSkip ){
    var appStr = appendStrs.split(',');
	  for( var i = 0; i < appStr.length; i++ ){
		var cNms = appStr[i].split(':');
		var cNm = cNms[0];
		var cCol = cNms[1];
		var nCol = objGrd.appendContentsCol('body', true);
		delCols.push(nCol);
		var bSucc = objGrd.setCellProperty( "head", nCol, "text", cNm);
		 bSucc = objGrd.setCellProperty( "body", nCol, "text", "bind:"+cCol);
		 //bSucc = this.Grid00.setCellProperty( "body", nCol, "size", "110");
	  }
  }
  //alert('aaaaaaaaaa');
  this.gfn_export_excel(sName, vName, file_name, ftype);
  
  if( !isAppendSkip ){
	  for( var i = delCols.length-1; i >= 0; i-- ){
		objGrd.deleteContentsCol('body', delCols[i]);
	  }
  }
}

















