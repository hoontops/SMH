(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample20");
            this.set_titletext("월선택");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_month", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"yyyymm\" type=\"STRING\" size=\"256\"/><Column id=\"yyyymm2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"yyyymm\">201502</Col><Col id=\"yyyymm2\">201401</Col></Row><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_monthFrom","40","31","85","21",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("common::com_monthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","208","36","695","194",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사용방법\r\ndiv_month을 복사 후 개발할 화면에 붙여넣기.\r\n\r\n접근가능한 콤포넌트\r\ndiv_month.msk_month : 년월\r\ndiv_month.btn_calendar : 년월선택 공통팝업 호출 버튼\r\n\r\n사용가능 함수\r\ndiv_month.getValue() : 년월,년월시작일,년월종료일 배열.\r\nthis.div_monthFrom.fn_initMonthCal(this, this.gfn_getYear()+\"01\", \"fn_monthCallback\"); : 2015년 01월로 셋팅.\r\n\r\n년월일 시분\r\n2021-02-23 08:30");
            obj.set_textAlign("left");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Div("div_monthTo","40","86","85","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_url("common::com_monthCalendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","17","271","233","259",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_month");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"104\"/><Column size=\"104\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"yyyymm\"/><Cell col=\"1\" text=\"yyyymm2\"/></Band><Band id=\"body\"><Cell edittype=\"mask\" text=\"bind:yyyymm\" mask=\"####-##\" editautoselect=\"true\" expandimage=\"url(&apos;theme://images/btn_WF_Calendar.png&apos;)\" textAlign=\"left\" cursor=\"hand\" expandshow=\"show\" maskeditformat=\"####-##\" expandsize=\"23\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"1\" edittype=\"mask\" text=\"bind:yyyymm2\" mask=\"####-##\" editautoselect=\"true\" expandimage=\"url(&apos;theme://images/btn_WF_Calendar.png&apos;)\" textAlign=\"left\" cursor=\"hand\" expandshow=\"show\" maskeditformat=\"####-##\" expandsize=\"23\" displaytype=\"mask\" maskedittype=\"string\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","320","277","583","320",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("-. 사용방법\r\n직접 Grid 속성값을 설정.\r\n\r\n-. Grid Property\r\nautoenter : select\r\n\r\n-. Grid > Cell Property\r\ndisplaytype : normal\r\nedittype : mask\r\nmask : ####-##\r\neditautoselect : true\r\nexpandimage : theme://images\\btn_WFDA_calendar_N.png\r\nexpandshow : show\r\nexpandsize : 23");
            obj.set_textAlign("left");
            obj.set_verticalAlign("top");
            this.addChild(obj.name, obj);

            obj = new Static("Static21",null,"0","9","530","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0%","21",null,"10","13.09%",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Static("Static17","0%","2",null,"14","66.21%",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("년월 입력 및 선택");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 10pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0%","242",null,"14","66.2%",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("년월 입력 및 선택 - 그리드");
            obj.set_cssclass("sta_WF_SubTitle");
            obj.set_font("bold 10pt \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0%","261",null,"10","13.04%",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Div("div_calendar","35","190","135","21",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_url("common::com_calendar.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta_00","38","161","136","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("년월일시분");
            obj.set_color("red");
            this.addChild(obj.name, obj);

            obj = new Button("btn_00","398","199","88","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("년월일시분");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,530,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_monthCalendar.xfdl");
            this._addPreloadList("fdl","common::com_calendar.xfdl");
        };
        
        // User Script
        this.registerScript("Sample20.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 월선택 sample
         * 파일명 		: Sample20.xfdl
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

        /**************************************************************************
         * 3. FORM 정의
         ***************************************************************************/

        /* Form Load (필수) */
        this.form_onload = function (obj, e)
        {
        	// 초기값 셋팅
        	this.fn_init();
        };

        /* 초기값 셋팅 */
        this.fn_init = function ()
        {
        	// 월력 초기화
        	this.div_monthFrom.form.fn_initMonthCal(this, this.gfn_getYear() + "01", "fn_monthCallback");

        	// 월력 초기화(해당Form, 값지정)
        	this.div_monthTo.form.fn_initMonthCal(this, this.gfn_getYearMonth(), "fn_monthCallback");
        };

        /**************************************************************************
         * 4. TRANSACTION, CALLBACK 영역
         ***************************************************************************/

        /* 월력 값 변경시 호출되는 callBack 함수 */
        this.fn_monthCallback = function (svcId, retVal)
        {
        	trace("from object id : " + svcId + ", return value : " + retVal);

        	if (svcId == "div_monthFrom")
        	{
        		trace(svcId + " 값 : " + this.div_monthFrom.fn_getValue());
        	}
        	else if (svcId == "div_monthTo")
        	{
        		trace(svcId + " 값 : " + this.div_monthTo.fn_getValue());
        	}
        	else if (svcId.substring(0, 15) == "pdivComCalMonth")
        	{
        		if (!this.gfn_isNull(retVal))
        		{
        			var arr = svcId.split(".");
        			trace(retVal);
        			// 리턴값
        			// [0] : 선택한 년월
        			// [1] : 월 시작일
        			// [2] : 월 종료일
        			// [3] : 변경전 년월 값
        			this.ds_month.setColumn(this.ds_month.rowposition, arr[1], retVal[0]);
        		}
        	}
        };


        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        /* Grid의 expand 영역에서 마우스 왼쪽 버튼이 UP 될때 발생 */
        this.grd_list_onexpandup = function (obj, e)
        {
        	// 기준 위치

        	/* Form 에서 Grid Cell 기준으로 위치얻기 */
        	var objRect = obj.getCellRect(e.row, e.cell);

        	/* cell 기준 position으로 클라이언트 기준 X, Y 좌표를 스크린 기준 기준으로 바꾸어 위치얻기 */
        	var nLeft = system.clientToScreenX(obj, objRect.left);
        	var nTop = system.clientToScreenY(obj, objRect.bottom);

        	/* 스크린 기준 X, Y 좌표를 클라이언트 기준으로 바꾸어 위치얻기 */
        	nLeft = system.screenToClientX(nexacro.getApplication().mainframe, nLeft);
        	nTop = system.screenToClientY(nexacro.getApplication().mainframe, nTop);

        	// 전달 값
        	var sYearMonth = this.ds_month.getColumn(e.row, e.cell);
        	var colId = obj.getCellProperty("Body", e.cell, "text");
        	colId = colId.replace("bind:", "");
        	// 일자 선택 팝업창
        	this.gfn_popupCalMonth(colId, nLeft, nTop, sYearMonth);
        }
        ;

        this.btn_00_onclick = function(obj,e)
        {
        	alert(this.div_calendar.form.calStart.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.grd_list.addEventHandler("onexpandup",this.grd_list_onexpandup,this);
            this.btn_00.addEventHandler("onclick",this.btn_00_onclick,this);
        };
        this.loadIncludeScript("Sample20.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
