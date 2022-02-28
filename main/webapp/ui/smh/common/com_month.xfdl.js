(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("com_month");
            this.set_titletext("월력");
            if (Form == this.constructor)
            {
                this._setFormPosition(190,197);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div01");
            obj.set_cssclass("pop_Calendar03");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","0","0",null,"27","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            obj.set_border("0px none,0px none,1px solid #e6e6e6");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_preYear","0","0","26","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_pop_calPrev");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_nextYear",null,"0","26","26","0",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_pop_calNext");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("sta_year","26","0",null,"26","26",null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("2021");
            obj.set_cssclass("txt_14B");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_01","5","32","60","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("1월");
            obj.set_cssclass("btn_pop_calNumber");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_02","65","32","60","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("2월");
            obj.set_cssclass("btn_pop_calNumber");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_03","125","32","60","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("3월");
            obj.set_cssclass("btn_pop_calNumber");
            obj.set_background("transparent");
            obj.set_color("rgba(102,102,102,1)");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_04","5","72","60","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("4월");
            obj.set_cssclass("btn_pop_calNumber");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_08","65","112","60","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("8월");
            obj.set_cssclass("btn_pop_calNumber");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_07","5","112","60","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("7월");
            obj.set_cssclass("btn_pop_calNumber");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_06","125","72","60","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("6월");
            obj.set_cssclass("btn_pop_calNumber");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_05","65","72","60","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("5월");
            obj.set_cssclass("btn_pop_calNumber");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_12","125","152","60","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("12월");
            obj.set_cssclass("btn_pop_calNumber");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_11","65","152","60","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("11월");
            obj.set_cssclass("btn_pop_calNumber");
            obj.set_background("transparent");
            obj.set_color("rgba(102,102,102,1)");
            obj.set_font("9pt \"Dotum\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_10","5","152","60","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("10월");
            obj.set_cssclass("btn_pop_calNumber");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_09","125","112","60","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("9월");
            obj.set_cssclass("btn_pop_calNumber");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",190,197,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("com_month.xfdl", function() {
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
        this.Div00.form.sta_year.text = this.gfn_getYear();
        /* 사용자가 년도를 지정하지 않는 경우 올해로 설정 */
        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/

        /* Form Load (필수) */
        this.form_onload = function (obj, e)
        {
        	this.fn_init();
        	this.fn_thisMonth(); //현재월 CSS처리
        };

        /* 초기값 셋팅 */
        this.fn_init = function ()
        {
        	var sDay,sCallBackNm;

        	// 그리드에서 호출되어진 popupDiv 일 때...
        	if (this.name !== "pdv_calendar")
        	{
        		sDay = this.parent._fv_yyyymm_inint_value;
        		sCallBackNm = this.parent._fv_callback_user_property;
        		this.callbackfunction = this.parent[sCallBackNm];
        	}
        	else
        	{
        		sDay = this.parent.msk_month.value;
        	}

        	if (!this.gfn_isNull(sDay))
        	{
        		this.fn_setCalendar(sDay.substr(0, 4), sDay.substr(4, 2));
        	}
        	else
        	{
        		this.fn_setCalendar("", "");
        	}
        };


        /**************************************************************************
         * 4. TRANSACTION, CALLBACK 영역
         ***************************************************************************/

        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/

        /* 월력 값 지정 */
        this.fn_setCalendar = function (sYY, sMM)
        {
        	if (this.gfn_isNull(sYY) || this.gfn_isNull(sMM))
        	{
        		return;
        	}

        	// 년도 셋팅
        	this.Div00.form.sta_year.set_text(sYY);

        	// 월 선택
        	this.fn_activeMonthBtn(sMM);
        };

        /* 월 Button Style 변경 */
        this.fn_activeMonthBtn = function (sMM)
        {
        	var objComp;
        	var sCompId;

        	for (var i = 1; i <= 12; i++)
        	{
        		sCompId = "btn_" + this.gfn_right(this.gfn_lpad(i.toString(), "0", 1), 2);
        		objComp = this.components[sCompId];
        		if (this.gfn_right(sCompId, 2) === sMM)
        		{
        			// 필요시 이 곳에서 set_cssclass 처리.
        			// objComp.setFocus();
        		}
        		else
        		{
        			// 필요시 이 곳에서 set_cssclass 처리.
        		}
        	}
        };

        /*현재 월 CSS처리 함수 */
        this.fn_thisMonth = function ()
        {
        	var yearValue = this.gfn_getYear();
        	var monValue = this.gfn_right(this.gfn_getYearMonth(), 2);
        	var btnMon = "btn_" + monValue;

        	if (this.Div00.form.sta_year.text == yearValue)
        	{
        		this.Div00.form.components[btnMon].set_cssclass("btn_pop_calNumber_S");
        	}
        	else
        	{
        		this.Div00.form.components[btnMon].set_cssclass("btn_pop_calNumber");
        	}
        };


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        /* next 년도 */
        this.btn_nextYear_onclick = function (obj, e)
        {
        	this.Div00.form.sta_year.set_text((parseInt(this.Div00.form.sta_year.text, 10) + 1).toString());

        	this.fn_setCalendar(this.Div00.form.sta_year.text, "");
        	this.fn_thisMonth(); //현재월 CSS처리
        };

        /* pre  년도 */
        this.btn_preYear_onclick = function (obj, e)
        {
        	this.Div00.form.sta_year.set_text((parseInt(this.Div00.form.sta_year.text, 10) - 1).toString());

        	this.fn_setCalendar(this.Div00.form.sta_year.text, "");
        	this.fn_thisMonth(); //현재월 CSS처리
        };

        /* 월 선택시 */
        this.btn_month_onclick = function (obj, e)
        {
        	var strDate = this.Div00.form.sta_year.text + this.gfn_replace(obj.id, "btn_", "");
        	var arrRet = [];
        	arrRet.push(this.gfn_left(strDate, 6)); //선택한 년월
        	arrRet.push(this.gfn_left(strDate, 6) + "01"); //월 시작일
        	arrRet.push(this.gfn_left(strDate, 6) + this.gfn_lastDateNum(arrRet[1])); //월 종료일
        	this.parent.closePopup(arrRet);
        };

        /* escape시 창 닫기 */
        this.month_onkeyup = function (obj, e)
        {
        	if (e.keycode === 27)
        	{
        		this.parent.closePopup();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Div00.form.btn_preYear.addEventHandler("onclick",this.btn_preYear_onclick,this);
            this.Div00.form.btn_nextYear.addEventHandler("onclick",this.btn_nextYear_onclick,this);
            this.Div00.form.sta_year.addEventHandler("onclick",this.Div00_sta_year_onclick,this);
            this.Div00.form.btn_01.addEventHandler("onclick",this.btn_month_onclick,this);
            this.Div00.form.btn_02.addEventHandler("onclick",this.btn_month_onclick,this);
            this.Div00.form.btn_03.addEventHandler("onclick",this.btn_month_onclick,this);
            this.Div00.form.btn_04.addEventHandler("onclick",this.btn_month_onclick,this);
            this.Div00.form.btn_08.addEventHandler("onclick",this.btn_month_onclick,this);
            this.Div00.form.btn_07.addEventHandler("onclick",this.btn_month_onclick,this);
            this.Div00.form.btn_06.addEventHandler("onclick",this.btn_month_onclick,this);
            this.Div00.form.btn_05.addEventHandler("onclick",this.btn_month_onclick,this);
            this.Div00.form.btn_12.addEventHandler("onclick",this.btn_month_onclick,this);
            this.Div00.form.btn_11.addEventHandler("onclick",this.btn_month_onclick,this);
            this.Div00.form.btn_10.addEventHandler("onclick",this.btn_month_onclick,this);
            this.Div00.form.btn_09.addEventHandler("onclick",this.btn_month_onclick,this);
        };
        this.loadIncludeScript("com_month.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
