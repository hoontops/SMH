(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("com_jobIcon");
            this.set_titletext("업무아이콘");
            this.set_background("rgba(225,224,222,1)");
            this.set_border("1px solid rgba(90,90,99,1)");
            this.set_borderRadius("0px");
            if (Form == this.constructor)
            {
                this._setFormPosition(232,437);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_list", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ON_IMG_URL\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"bigdecimal\" size=\"16\"/><Column id=\"OFF_IMG_URL\" type=\"string\" size=\"32\"/><Column id=\"ICON_ID\" type=\"bigdecimal\" size=\"16\"/><Column id=\"JOB_SYS_NM\" type=\"string\" size=\"32\"/><Column id=\"JOB_SYS_CD\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("rgba(230,232,236,1)");
            obj.set_border("1px solid rgba(90,90,99,1)");
            obj.set_borderRadius("0px");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",232,437,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("com_jobIcon.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 업무아이콘
         * 파일명 		: com_jobIcon.xfdl
         * 작성자 		: UI공통
         * 작성일 		: 2017.04.22
         *
         * 설  명		: 업무아이콘
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------

         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        // include "lib::comLib.xjs";
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_sFromBtnId = ""; //drag 버튼명
        this.fv_saveFlag = false;

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/
        this.form_onload = function (obj, e)
        {
        	this.ds_list.assign(gv_appTopFrame.form.ds_jobIcon);
        	this.form_init();
        };

        this.form_init = function ()
        {
        	this.ds_list.set_enableevent(false);
        	this.ds_list.addColumn("ORG_ICON_ID", "STRING", 32);
        	for (var i = 0; i < this.ds_list.rowcount; i = i + 1)
        	{
        		this.ds_list.setColumn(i, "ICON_ID", i + 1);
        		this.ds_list.setColumn(i, "ORG_ICON_ID", i + 1);
        	}
        	this.ds_list.set_enableevent(true);
        	this.fn_createIcon();
        	gv_appTopFrame.form.setMenuTitle();
        };

        /**************************************************************************
         * 4. TRANSACTION, CALLBACK 영역
         ***************************************************************************/

        this.fn_selecCdtList = function ()
        {
        	var sSvcID = "selectCdList";
        	var sController = "/penc00010/selectJobSysOrder.do";
        	var sOutDatasets = "ds_list=ds_output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("JOB_SYS_CD", nexacro.getApplication().id);
        	sArgs += this.gfn_setParam("USER_ID", this.gf_getUserId()); //행정포털,IM,SSO_ID
        	this.gfn_transaction(sSvcID, sController, "", sOutDatasets, sArgs);
        };


        this.fn_saveCdtList = function ()
        {
        	var sSvcID = "saveCdList";
        	var sController = "/penc00010/updateJobSysOrder.do";
        	var sInDatasets = "ds_input=ds_list";
        	var sOutDatasets = "";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("JOB_SYS_CD", nexacro.getApplication().id);
        	sArgs += this.gfn_setParam("USER_ID", this.gf_getUserId()); //행정포털,IM,SSO_ID
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, null, null, false);
        };


        this.fn_callBack = function (strSvcId, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode < 0)
        	{
        		return this.gfn_alert(strErrorMsg);
        	}
        	if (strSvcId == "selectCdList")
        	{
        		// 원본 ICON_ID 저장 컬럼 생성 및 저장
        		// *** ICON_ID 가 사라져버렸네.;;; 여기서 index로 넣어주자.
        		this.ds_list.set_enableevent(false);
        		this.ds_list.addColumn("ORG_ICON_ID", "STRING", 32);
        		for (var i = 0; i < this.ds_list.rowcount; i = i + 1)
        		{
        			// this.ds_list.setColumn(i, "ORG_ICON_ID", this.ds_list.getColumn(i, "ICON_ID") );
        			this.ds_list.setColumn(i, "ICON_ID", i + 1);
        			this.ds_list.setColumn(i, "ORG_ICON_ID", i + 1);
        		}
        		this.ds_list.set_enableevent(true);

        		// 업무아이콘 생성
        		this.fn_createIcon();

        		// topFrame 초기 실행 함수 호출.
        		gv_appTopFrame.form.setMenuTitle();
        	}
        	if (strSvcId == "saveCdList")
        	{
        		// 저장 후 로직 수행
        		this.fv_saveFlag = false;
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/

        /**
         * @class  업무 아이콘 생성
         * @param  N/A
         * @return N/A
         */
        this.fn_createIcon = function ()
        {
        	var objBtn,nRow = 0,nMod = 0,nCnt = 0;

        	for (var i = 0; i < this.ds_list.rowcount; i = i + 1)
        	{
        		var sId = this.ds_list.getColumn(i, "ICON_ID");
        		var imgUrl = this.ds_list.getColumn(i, "OFF_IMG_URL");
        		var sCommand = this.ds_list.getColumn(i, "JOB_SYS_CD");
        		nMod = i % 3;
        		nCnt = parseInt((i / 3), 10);

        		objBtn = this.fn_createBtn(sId, imgUrl, sCommand, nCnt, nMod);
        	}

        	// 마지막 생성된 버튼의 높이보다 20pixel 크게 폼 사이즈 조절
        	if (objBtn && objBtn instanceof Button)
        	{
        		this.set_height(objBtn.getOffsetBottom() + 35);
        	}
        };

        /**
         * @class  버튼 생성
         * @param  {String} sId - 아이디
         * @param  {String} imgUrl - 이미지 URL
         * @param  {Number} nCnt - level count
         * @param  {Number} nMod - 동일 level index
         * @return N/A
         */
        this.fn_createBtn = function (sId, imgUrl, sCommand, nCnt, nMod)
        {
        	// trace("sId : "+sId + ", imgUrl : "+imgUrl + ", nCnt : "+nCnt + ", nMod : "+nMod );

        	var nLeft = 9,nTop = 20,nWidth = 70,nHeight = 67;

        	nLeft = nLeft + (nWidth * nMod);
        	nTop = nTop + (nHeight * nCnt) + (10 * nCnt);

        	var sBtnName = "btn_" + Eco.getUniqueId();
        	var objBtn = new Button();
        	objBtn.init(sBtnName, "absolute", nLeft, nTop, nWidth, nHeight, null, null);
        	// objBtn.style.set_image( imgUrl );

        	objBtn.style.set_background("transparent URL('" + imgUrl + "')");
        	objBtn.style.set_border("0 none");
        	objBtn.style.set_bordertype("normal 0 0");
        	objBtn.s_icon_id = sId;
        	objBtn.s_system_id = sCommand;
        	this.addChild(sBtnName, objBtn);

        	objBtn.show();

        	objBtn.addEventHandler("onclick", this.jobIcon_btn_onclick, this);
        	objBtn.addEventHandler("ondrag", this.jobIcon_btn_ondrag, this);
        	objBtn.addEventHandler("onmouseenter", this.jobIcon_btn_onmouseenter, this);
        	objBtn.addEventHandler("onmouseleave", this.jobIcon_btn_onmouseleave, this);

        	return objBtn;
        };


        this.jobIcon_btn_onmouseenter = function (obj, e)
        {
        	var sOnImageUrl = this.ds_list.lookup("ORG_ICON_ID", obj.s_icon_id, "ON_IMG_URL");
        	// trace("obj.s_icon_id : "+obj.s_icon_id+", onmouseenter sOnImageUrl : "+sOnImageUrl);
        	obj.style.set_background("transparent URL('" + sOnImageUrl + "')");

        	if (this.fv_saveFlag)
        	{
        		this.fn_save();
        	}
        };

        this.jobIcon_btn_onmouseleave = function (obj, e)
        {
        	var sOnImageUrl = this.ds_list.lookup("ORG_ICON_ID", obj.s_icon_id, "OFF_IMG_URL");
        	// trace("onmouseleave sOnImageUrl : "+sOnImageUrl);
        	obj.style.set_background("transparent URL('" + sOnImageUrl + "')");
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        // 버튼 onclick 이벤트
        this.jobIcon_btn_onclick = function (obj, e)
        {
        	// 시스템 id 가져오기
        	var sCommand = obj.s_system_id.toString().toLowerCase();

        	if (nexacro.Browser == "Runtime")
        	{
        		return;
        	}

        	// 서비스 url 가져오기
        	var sRunMode = "";

        	// application 호출 => 새창 X , 현재창 reload
        	if (nexacro.getApplication().gv_runMode == "local" || nexacro.getApplication().gv_runMode == "dev")
        	{
        		sRunMode = "dev";
        	}
        	else if (nexacro.getApplication().gv_runMode == "test")
        	{
        		sRunMode = "test";
        	}
        	else if (nexacro.getApplication().gv_runMode == "prod")
        	{
        		sRunMode = "prod";
        	}

        	/*
        	 * 서비스 url 가져오기
        	 * weblogic 서버 http://fcm.krpost.go.kr:8100 형식
        	 * jeus 서버 http://fcm.krpost.go.kr:8100/cmd 형식
        	 */
        	var sUrl = nexacro.getApplication().gds_url.lookup("RUN_MODE", sRunMode, sCommand.toString().toUpperCase());
        	// 현재 업무 화면이라면 URL 이동 안함.
        	if (nexacro.getApplication().id.toString().toLowerCase() == sCommand)
        	{
        		return;
        	}

        	if (sCommand == "bgt" || sCommand == "mis" || sCommand == "kmc" || sCommand == "abm")
        	{
        		sUrl = sUrl + "/index.html";
        	}
        	else
        	{
        		sUrl = sUrl + "/" + sCommand + "/index.html";
        	}

        	if (nexacro.Browser == "Runtime")
        	{
        		// browser 일 때 실행
        	}
        	else
        	{
        		var objNewWin = window.open("", sCommand.toUpperCase());
        		if (objNewWin.location.href == "about:blank")
        		{
        			objNewWin.location.href = sUrl;
        		}
        		objNewWin.focus();
        	}
        };



        this.jobIcon_btn_ondrag = function (obj, e)
        {
        	this.fv_sFromBtnId = obj.name;
        	return true;
        };


        this.com_jobIcon_ondrop = function (obj, e)
        {
        	if (nexacro.Browser == "Runtime")
        	{
        		return false;
        	}

        	if (this.fv_sFromBtnId && this.fv_sFromBtnId != e.fromobject.name)
        	{
        		var objFromBtn = this[this.fv_sFromBtnId];
        		var objToBtn = e.fromobject;

        		if (objFromBtn instanceof Button && objToBtn instanceof Button)
        		{
        			var nFromLeft = objFromBtn.getOffsetLeft();
        			var nFromTop = objFromBtn.getOffsetTop();
        			var nToLeft = objToBtn.getOffsetLeft();
        			var nToTop = objToBtn.getOffsetTop();

        			if (nexacro.Browser == "IE")
        			{
        				if (nexacro.BrowserVersion <= 9)
        				{
        					objFromBtn.set_left(nToLeft);
        					objFromBtn.set_top(nToTop);
        					objToBtn.set_left(nFromLeft);
        					objToBtn.set_top(nFromTop);
        					this.fv_sFromBtnId = "";
        					this.exchangeRowList(objFromBtn, objToBtn);
        					return false;
        				}
        			}

        			$('div[id*="' + this.fv_sFromBtnId + '"]').animate({
        				left : nToLeft,
        				top : nToTop
        			}, 'slow', function ()
        			{
        				objFromBtn.set_left(nToLeft);
        				objFromBtn.set_top(nToTop);
        			});

        			$('div[id*="' + objToBtn.name + '"]').animate({
        				left : nFromLeft,
        				top : nFromTop
        			}, 'slow', function ()
        			{
        				objToBtn.set_left(nFromLeft);
        				objToBtn.set_top(nFromTop);
        			});

        			this.fv_sFromBtnId = "";


        			// 변경된 위치 저장
        			this.exchangeRowList(objFromBtn, objToBtn);

        			// 사용자 수정 발생시 - 저장 버튼 보여주기
        			this.fv_saveFlag = true;
        		}
        	}
        };

        this.exchangeRowList = function (obj1, obj2)
        {
        	var nFromRow = this.ds_list.findRowExpr("JOB_SYS_CD == '" + obj1.s_system_id + "'");
        	var nToRow = this.ds_list.findRowExpr("JOB_SYS_CD == '" + obj2.s_system_id + "'");

        	// trace(nFromRow + " : " + nToRow);

        	this.ds_list.set_enableevent(false);
        	this.ds_list.exchangeRow(nFromRow, nToRow);

        	// 순서변경 처리
        	this.ds_list.setColumn(nFromRow, "ICON_ID", nFromRow + 1);
        	this.ds_list.setColumn(nToRow, "ICON_ID", nToRow + 1);
        	this.ds_list.set_enableevent(true);
        };


        this.fn_save = function ()
        {
        	// 저장 서비스 호출
        	this.fn_saveCdtList();
        }

        ;

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onrbuttonup",this.com_jobIcon_onrbuttonup,this);
            this.addEventHandler("ondrop",this.com_jobIcon_ondrop,this);
            this.Static00.addEventHandler("onclick",this.Div01_Static00_onclick,this);
        };
        this.loadIncludeScript("com_jobIcon.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
