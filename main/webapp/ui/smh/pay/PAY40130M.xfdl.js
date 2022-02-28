(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PAY40130M");
            this.set_titletext("출근현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ATTENDANCE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"HJSHR_COUNSELING_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATTENDANCE_DELAY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CalendarList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"HJSPAY_CALENDAR_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PERSON_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"ATTENDANCE_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"ATTENDANCE_DELAY\" type=\"STRING\" size=\"256\"/><Column id=\"LATE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CALENDAR_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"COMMENTS\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE1\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE2\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE3\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE4\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE5\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ATTRIBUTE6\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE7\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE8\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE9\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE10\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE11\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE12\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE13\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE14\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE15\" type=\"STRING\" size=\"256\"/><Column id=\"ATTRIBUTE16\" type=\"STRING\" size=\"256\"/><Column id=\"CREATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"CREATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATED_BY\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_UPDATE_LOGIN\" type=\"STRING\" size=\"256\"/><Column id=\"OBJECT_VERSION_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"CLOSING_HOUR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0.00%","36",null,"42","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_search");
            obj.set_background("rgba(247,247,247,1)");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","21","10","70","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("right");
            obj.set_verticalAlign("middle");
            obj.set_text("조회년월");
            obj.set_tooltiptext("조회년월");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static13","0.00%","0",null,"10","0.00%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","0%","-1",null,"43","97.83%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static04","0%",null,null,"10","76.88%","0",null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","10.24%","1",null,null,"88.66%","-1",null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","23.79%","0",null,"43","74.01%",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("20");
            obj.set_visible("false");
            obj.set_background("gold");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_font("8pt \"Dotum\"");
            obj.set_opacity("0.5");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("cal_monthDate","101","10","90","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_url("common::com_monthCalendar.xfdl");
            obj.set_text("____-__");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"8","60","20","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_clear",null,"8","60","20","76",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            obj.set_tooltiptext("초기화");
            this.addChild(obj.name, obj);

            obj = new Static("Static78","0.00%","27",null,"9","1.09%",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("15");
            obj.set_visible("false");
            obj.set_background("lightseagreen");
            obj.set_padding("0px 0px 3px 0px");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_opacity("0.5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_searchOpen","10","6","30","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_searchOpen");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","6","145","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("업무화면명(자동)");
            obj.set_cssclass("sta_WF_title");
            obj.set_fittocontents("width");
            obj.set_expr("nexacro.getApplication().gds_menu.lookup(\"PGM_ID\",comp.parent.name,\"MENU_NM\")");
            this.addChild(obj.name, obj);

            obj = new Button("btn_favorite","187","6","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_favorite");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","0","78",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static20_00_00","0","0","211","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("0");
            obj.set_text("출근 내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("출근 내역");
            this.div_work.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_CalendarList","219","0","140","34",null,null,null,null,null,null,this.div_work.form);
            obj.set_taborder("1");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_workRecord",null,"7","70","20","66",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("2");
            obj.set_text("출근기록");
            obj.set_tooltiptext("출근기록");
            this.div_work.addChild(obj.name, obj);

            obj = new Grid("grd_workHistory","0","34",null,null,"0","10",null,null,null,null,this.div_work.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_CalendarList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"300\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"출근일자\" tooltiptext=\"출근일자\"/><Cell col=\"2\" text=\"요일\" tooltiptext=\"요일\"/><Cell col=\"3\" text=\"출근시각\" tooltiptext=\"출근시각\"/><Cell col=\"4\" text=\"지각여부\" tooltiptext=\"지각여부\"/><Cell col=\"5\" text=\"퇴근시각\" tooltiptext=\"퇴근시각\"/><Cell col=\"6\" text=\"근태유형\" tooltiptext=\"근태유형\"/><Cell col=\"7\" text=\"비고\" tooltiptext=\"비고\"/></Band><Band id=\"body\"><Cell color=\"#333333\" background=\"expr:dataset.getRowType(CHECK_YN) ==&apos;1&apos; ? &apos;red&apos;:&apos;none&apos;\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" expr=\"expr:dataset.getColumn(currow, &quot;CHECK_YN&quot;)==&quot;1&quot;?&apos;cell_bg_red&apos;:&apos;&apos;\"/><Cell col=\"1\" cssclass=\"expr:dataset.getColumn(currow, &quot;DAYCHECK&quot;)==&quot;HOLIDAY&quot; ? &apos;cell_red&apos;:&apos;&apos;\" text=\"bind:WORK_DATE\"/><Cell col=\"2\" text=\"bind:WEEK_DAY\"/><Cell col=\"3\" text=\"bind:ATTENDANCE_TIME\"/><Cell col=\"4\" text=\"bind:ATTENDANCE_DELAY\"/><Cell col=\"5\" text=\"bind:CLOSING_HOUR\"/><Cell col=\"6\" text=\"bind:CALENDAR_TYPE_NAME\"/><Cell col=\"7\" text=\"bind:COMMENTS\" displaytype=\"editcontrol\" edittype=\"text\"/></Band></Format></Formats>");
            this.div_work.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","60","20","0",null,null,null,null,null,this.div_work.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("저장");
            this.div_work.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::com_monthCalendar.xfdl");
        };
        
        // User Script
        this.registerScript("PAY40130M.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: 출근현황
         * 업무명 		:
         * 파일명 		: PAY40130M.xfdl
         * 작성자 		: 유성연
         * 작성일 		: 2022.01.20
         *
         * 설  명		: 출근현황
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2022.01.20	유성연   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/


        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        	this.userId;
        	this.userNm;
        	this.deptNm;
        	this.deptCd;
        	this.personId;




        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	//화면 초기화
        	 this.nfn_formInit(obj);
        	 this.monthClear();
        	 this.svrTodayTime = this.gfn_svrTodayTime();
        	 this.personId = this.gf_getPersonId();
        	 this.fn_search();
        };



        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/

        // 조회 조건 초기화
        this.fn_searchClear = function(obj,e)
        {
        	 this.monthClear();
        };

        // 달력현재날짜로 초기화
        this.monthClear = function()
        {
        	this.fv_currDate = this.nfn_getCurrentSystemTime();
        	this.div_search.form.cal_monthDate.form.msk_month.set_value(this.fv_currDate.substring(0,6));
        } ;

        // 현재 시간 가져오기
        this.fn_getTime = function(){
        	var time = this.svrTodayTime.substring(10,12) + ':' + this.svrTodayTime.substring(12,14);
        	return time;
        };


        /*
         * 기능 : 조회
         */
        this.fn_search = function (obj, e)
        {

        	this.ds_CalendarList.clearData();					 //Target output Dataset clear
        	this.ds_search.clearData();
        	var row = this.ds_search.addRow();

        	this.ds_search.setColumn(row, "WORK_DATE", this.div_search.form.cal_monthDate.form.msk_month.text);
        	this.ds_search.setColumn(row, "PERSON_ID", this.personId);

        	var sSvcID 			= "selectPayCalendarList";
        	var sController 	= "/pay40130/selectPayCalendarList.do" ;
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_CalendarList=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);


        };


        /*
        * 출근기록
        */

        this.fn_workRecord = function(obj,e)
        {
        	if(this.div_search.form.cal_monthDate.form.msk_month.text != this.fv_currDate.substring(0,4) + '-' + this.fv_currDate.substring(4,6)) {
        			this.gfn_Message("CheckCalendarDaySysdate", null, "info", "ok"); //출근기록 등록할 날짜가 선택되지 않았습니다.
        	}
        	else {
        	    //데이터 미존재시 return
        		if (this.ds_CalendarList.rowcount < 1) return;
        		//변경된 데이터가 있는지 체크
        		if (!this.gfn_dsIsUpdated(this.ds_CalendarList)) {
        			this.gfn_Message("NoSaveData", null, "warning", "ok");
        			return;
        		}
        		else{
        			var okay = this.gfn_Message("IsWriteCalendarDay", null, "conf", "yesno"); //출근기록 작업을 수행할 예정입니다. 계속 진행하시겠습니까?
        			if (!okay) return;
        			else {
        				var time = this.fn_getTime();
        				var submit = this.gfn_Message("CheckWriteCalendarDaySysdatetime", time, "conf", "yesno"); //현재 시각{}을/를 출근 시각으로 등록하시겠습니까?
        				if(!submit) return;
        				else{
        					if(this.ds_CalendarList.getColumn(this.ds_CalendarList.rowposition, "ATTENDANCE_TIME")){
        						this.gfn_Message("ValidateCalendarDaySysdate", null, "warning", "ok"); //금일 출근 기록이 존재함으로 수정할 수 없습니다.
        					}
        					else{
        						//---------------------
        						// 저장
        						// ':U'는 갱싱된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        						// ':N'은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 저장하지않는 데이터세트는 Normal로 동작합니다.
        						// ---------------------

        						var nRow = this.ds_CalendarList.findRowExpr('CHECK_YN == 1');//체크된행 찾기
        						var attandanceDelay = this.ds_CalendarList.getColumn(this.ds_CalendarList.rowposition, "ATTENDANCE_DELAY");
        						this.ds_CalendarList.set_enableevent(false);
        						this.ds_CalendarList.setColumn(nRow, "ATTENDANCE_TIME",  time);
        						this.ds_CalendarList.setColumn(nRow, "ATTENDANCE_DELAY",  attandanceDelay);
        						this.ds_CalendarList.set_enableevent(true);
        						var sSvcID 			= "saveCalendarList";				// CallBack service name
        						var sController 	= "/pay40130/saveCalendarList.do";
        						var sInDatasets 	= "INPUT=ds_CalendarList:U";
        						var sOutDatasets 	= "";
        						var sArgs 			= "";
        						this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        					}
        				}
        			}
        		}
        	}
        };


         this.fn_save = function(obj,e)
        {
        	//변경된 데이터가 있는지 체크
        	if (!this.gfn_dsIsUpdated(this.ds_CalendarList)) {
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}
        	//---------------------
        	// 저장
        	// ':U'는 갱싱된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N'은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 저장하지않는 데이터세트는 Normal로 동작합니다.
        	// ---------------------
        	var sSvcID 			= "saveCalendarList";				// CallBack service name
        	var sController 	= "/pay40130/saveCalendarList.do";
        	var sInDatasets 	= "INPUT=ds_CalendarList:U";
        	var sOutDatasets 	= "";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);



        };


        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/


        this.fn_callBack = function (trId, errCD, errMsg)
        {
            if (errCD < 0)
            {
                this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
            }
            else
            {
                if (trId == "selectPayCalendarList") //조회 service name
                {
        			var curDay = this.fv_currDate.substring(0,4) + '-' + this.fv_currDate.substring(4,6) + '-' + this.fv_currDate.substring(6,8);

        			for(i=0; i<this.ds_CalendarList.rowcount;i++){
        				var DATE = this.ds_CalendarList.getColumn(i, "WORK_DATE")
        				var checkYn = this.ds_CalendarList.getColumn(i, "CHECK_YN");

        				if(DATE == curDay) {
        					this.ds_CalendarList.setColumn(i, "CHECK_YN", "1");
        				}
        			}
        			var curData = this.ds_CalendarList.findRow("WORK_DATE", curDay);
        			this.ds_CalendarList.set_rowposition(curData);
        //			trace(this.ds_CalendarList.saveXML("Dataset", "V"));
        		}
        		else if(trId == "saveCalendarList")	{ //출근기록
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_search();
        		}
            }
        };

        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/


        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_searchOpen.addEventHandler("onclick",this.nfn_searchOpen_onclick,this);
            this.div_work.form.sta_cnt_ds_CalendarList.addEventHandler("onclick",this.div_work_sta_cnt_ds_CalendarList_onclick,this);
            this.div_work.form.btn_workRecord.addEventHandler("onclick",this.fn_workRecord,this);
            this.div_work.form.btn_save.addEventHandler("onclick",this.fn_save,this);
        };
        this.loadIncludeScript("PAY40130M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
