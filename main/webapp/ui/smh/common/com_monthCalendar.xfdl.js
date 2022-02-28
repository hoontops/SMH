(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("com_monthCalendar");
            this.set_titletext("월력 선택");
            this.set_border("0px solid rgba(128,128,128,1)");
            if (Form == this.constructor)
            {
                this._setFormPosition(85,20);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new MaskEdit("msk_month","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_type("string");
            obj.set_trimtype("both");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_padding("0px 18px 0px 5px");
            obj.getSetter("mask").set("####/##");
            obj.set_format("####-##");
            this.addChild(obj.name, obj);

            obj = new Button("btn_calendar",null,"1","18","18","1",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_pop_calDrop");
            obj.set_tabstop("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_calendar","0","21","192","199",null,null,null,null,null,null,this);
            obj.set_url("common::com_month.xfdl");
            obj.set_visible("false");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none");
            obj.set_cssclass("pdiv_POP");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",85,20,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_month.xfdl");
        };
        
        // User Script
        this.registerScript("com_monthCalendar.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 월력
         * 파일명 		: com_month.xfdl
         * 작성자 		: UI공통
         * 작성일 		: 2014.04.14
         *
         * 설  명		: 월선택 기능 제공
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         *
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
         ***************************************************************************/
        // include "lib::comLib.xjs";

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        this.fv_objForm;
        this.fv_sCallbackName;

        this.fv_nLeft = 0; //Left Frame size
        this.fv_nTop = 0; //Top  Frame size

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/

        /* Form Load (필수) */
        this.form_onload = function (obj, e)
        {
        	this.fn_init();
        };

        /* 초기값 셋팅 */
        this.fn_init = function ()
        {
        };


        /**************************************************************************
         * 4. TRANSACTION, CALLBACK 영역
         ***************************************************************************/


        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/

        /**
         * 월력 초기화
         * @param  {object} objForm - Form object
         * @param  {string} sDay - 년월(필수) 문자열
         * @param  {string} sCallbackName - 값 변경시 실행할 함수명 문자열
         * @param  {object} objDs - binding할 Dataset object
         * @param  {string} sColName - binding할 Dataset의 Column명
         * @return N/A
         * @example
         * @memberOf public
         */
        this.fn_initMonthCal = function (objForm, sDay, sCallbackName, objDs, sColName)
        {
        	// 호출한 Form 저장
        	fv_objForm = objForm;
        	// Binding 처리
        	if (!this.gfn_isNull(objDs) && typeof (objDs) === "object")
        	{
        		this.fn_setBind(objDs, sColName);
        	}

        	// 초기날짜 셋팅
        	this.fn_setValue(sDay);

        	// callback 셋팅
        	this.fv_sCallbackName = sCallbackName;
        };

        /**
         * 월력 초기화2  opener form에 맞게 reinit
         * @param  {object} objForm - Form object
         * @param  {string} sDay - 년월(필수) 문자열
         * @param  {string} sCallbackName - 값 변경시 실행할 함수명 문자열
         * @param  {object} objDs - binding할 Dataset object
         * @param  {string} sColName - binding할 Dataset의 Column명
         * @return N/A
         * @example
         * @memberOf public
         */
        this.fn_initMonthCal2 = function (objForm, sDay, sCallbackName, objDs, sColName)
        {
        	// 호출한 Form 저장
        	fv_objForm = objForm;
        	// Binding 처리
        	if (!this.gfn_isNull(objDs) && typeof (objDs) === "object")
        	{
        		this.fn_setBind(objDs, sColName);
        	}

        	// 초기날짜 셋팅
        	// this.fn_setValue(sDay);

        	// callback 셋팅
        	this.fv_sCallbackName = sCallbackName;
        };

        /* 월력 value 지정 */
        this.fn_setValue = function (sDay)
        {
        	if (this.gfn_isNull(sDay))
        	{
        		sDay = this.fn_getValue();
        	}
        	trace("sDay-->"+sDay);
        	this.msk_month.set_value(""+sDay);

        	if (!this.gfn_isDate6(sDay))
        	{
        		// this.gfn_Message("IMCMJC0120", sDay, "info"); // 유효하지 않은 {$0}입니다.
        		this.gfn_Message("CheckDate", null, "info", "ok");
        		this.msk_month.set_value(this.gfn_today().substr(0, 6));
        		return;
        	}

        	// Callback함수 있을때 form의 함수 실행
        	if (!this.gfn_isNull(this.fv_sCallbackName))
        	{
        		fv_objForm.lookupFunc(this.fv_sCallbackName).call(this.name);
        	}
        };

        /**
         * Parent의 데이타셋과 bind처리
         * @param  {object} objDs - bind할 데이타셋(필수)
         * @param  {string} sColName - bind할 데이타셋의 컬럼ID(필수)
         * @return N/A
         * @example
         * @memberOf public
         */
        this.fn_setBind = function (objDs, sColName)
        {
        	var obj = new BindItem("monthCalendar", "msk_month", "value", objDs.name, sColName);
        	this.addChild(obj.name, obj);
        	obj.bind();
        };

        /* 월력 value 리턴 */
        this.fn_getValue = function ()
        {
        	var sYearMonth = this.msk_month.value;

        	var arrRet = [];
        	arrRet.push(this.gfn_left(sYearMonth, 6)); //선택한 년월
        	arrRet.push(this.gfn_left(sYearMonth, 6) + "01"); //월 시작일

        	arrRet.push(this.gfn_left(sYearMonth, 6) + this.gfn_lastDateNum(arrRet[1])); //월 종료일

        	return arrRet;
        };

        /* 월력 text 리턴 */
        this.fn_getText = function ()
        {
        	return this.msk_month.text;
        };



        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        /* 월력 pdv_calendar 호출 */
        this.btn_calendar_onclick = function (obj, e)
        {
        	// Left Frame size
        	try
        	{
        		this.fv_nLeft = av_leftFrame.form.width;
        	}
        	catch (e)
        	{
        	}

        	// Top  Frame size
        	try
        	{
        		this.fv_nTop = av_topFrame.form.height;
        	}
        	catch (e)
        	{
        	}

        	// alert("fv_nLeft : " + this.fv_nLeft + " / this.fv_nTop : " + this.fv_nTop);
        	var nX = system.clientToScreenX(this.msk_month, 0);
        	var nY = system.clientToScreenY(this.msk_month, 21);

        	/** 스크린 기준 X, Y 좌표를 클라이언트 기준으로 바꾸어 위치얻기 */
        	nX = system.screenToClientX(nexacro.getApplication().mainframe, nX);
        	nY = system.screenToClientY(nexacro.getApplication().mainframe, nY);

        	nX = nX - this.fv_nLeft;
        	nY = nY - this.fv_nTop;

        	var rtn = this.pdv_calendar.trackPopup((nX + this.fv_nLeft), (nY + this.fv_nTop), null, null, "fn_monthCallback");
        	trace("rtn-->" + rtn);
        };

        /* 월력 값 변경시 호출되는 callBack 함수 */
        this.fn_monthCallback = function (svcId, retVal)
        {
        	if (svcId == "pdv_calendar")
        	{
        		if (!this.gfn_isNull(retVal))
        		{
        			this.fn_setValue(retVal[0]);
        		}
        		this.pdv_calendar.closePopup();
        		this.msk_month.setFocus();
        	}
        };

        /* 날짜 지정 */
        this.msk_month_ontextchanged = function (obj, e)
        {
        	if (this.gfn_length(this.gfn_trim(obj.value)) < 6)
        	{
        		return;
        	}
        	var arrValue = this.fn_getValue();
        	this.fn_setValue(arrValue[0]);
        };



        this.msk_month_onkillfocus = function (obj, e)
        {
        	if (!this.nfn_isNull(obj.value) && this.gfn_length(this.gfn_trim(obj.value)) < 6)
        	{
        		var curMth = (this.nfn_getCurrentSystemTime(0) + "").substring(0, 6);
        		obj.set_value(curMth);
        		obj.setFocus();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.msk_month.addEventHandler("onkillfocus",this.msk_month_onkillfocus,this);
            this.btn_calendar.addEventHandler("onclick",this.btn_calendar_onclick,this);
        };
        this.loadIncludeScript("com_monthCalendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
