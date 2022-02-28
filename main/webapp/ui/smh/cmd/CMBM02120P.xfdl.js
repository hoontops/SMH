(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMBM02120P");
            this.set_titletext("배치스케쥴 조정");
            this.set_cssclass("form_PopupBg");
            this.set_dragscrolltype("both");
            this.getSetter("classname").set("DRRM00310P");
            if (Form == this.constructor)
            {
                this._setFormPosition(829,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"JOB_GUBUNCD\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PROGRAM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_INTERVAL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_INTERVAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RESERVED_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_program", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"JOB_GUBUNCD\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_PGM_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_PROGRAM\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT_RUN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_INTERVAL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_INTERVAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_params", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"JOB_GUBUNCD\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM_COLUMN_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PARAM_PROMPT\" type=\"STRING\" size=\"256\"/><Column id=\"REQUIRED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEFAULT_VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"LIST_QUERY\" type=\"STRING\" size=\"256\"/><Column id=\"HIDE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_QUERY\" type=\"STRING\" size=\"256\"/><Column id=\"DIS_DEFAULT_VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmb", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"LOOKUP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOOKUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MEANING\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qry", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"QUERY\" size=\"256\" type=\"STRING\"/><Column id=\"CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"ORDERBY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_proc_out", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"ERROR_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ERROR_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_schedule", this);
            obj._setContents("<ColumnInfo><Column id=\"JOB_GUBUNCD\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_PGM_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_PROGRAM\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT_RUN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_INTERVAL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_INTERVAL\" type=\"STRING\" size=\"256\"/><Column id=\"ENABLED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","9","8",null,"30","585",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("배치스케쥴 제어");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"60","20","15","15",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_DR_GridCancel");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","15","98","305","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("배치 스케쥴");
            obj.set_cssclass("sta_WF_subTitle2");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","-19.95%","131",null,"23","119.95%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CloseImage",null,"0","23","23","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_pop_close");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_schedule","15","124",null,"275","15",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("none");
            obj.set_binddataset("ds_schedule");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"38\"/><Column size=\"80\"/><Column size=\"182\"/><Column size=\"231\"/><Column size=\"113\"/><Column size=\"71\"/><Column size=\"65\"/><Column size=\"72\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"업무구분\"/><Cell col=\"2\" text=\"배치코드\"/><Cell col=\"3\" text=\"배치명\"/><Cell col=\"4\" text=\"배치JOB\"/><Cell col=\"5\" text=\"활성화\"/><Cell col=\"6\" text=\"배치주기\"/><Cell col=\"7\" text=\"배치간격\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:JOB_GUBUNCD\" displaytype=\"combotext\" combocodecol=\"C,SystemWorkType,,Y,N\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:BATCH_CD\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:DESCRIPTION\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:JOB_NAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:ENABLED\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:BATCH_INTERVAL_TYPE\" combocodecol=\"C,CMD_BATCH_INTERVAL_TYPE,,Y,N\" displaytype=\"combotext\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:BATCH_INTERVAL\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","15","44",null,"43","15",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("scrollbars").set("none");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0",null,null,"10","0","-58",null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("10");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","12","10","61","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("업무구분");
            obj.set_cssclass("sta_WF_Label2");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","226","10","47","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("배치명");
            obj.set_cssclass("sta_WF_Label2");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_jobGubunCd","85","10","105","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_codecolumn("C,SystemWorkType,ALL,Y,Y");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"10","60","21","3",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_DR_GridSearch");
            obj.set_tooltiptype("hover");
            obj.set_tooltiptext("조회");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_programName","276","10","340","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_autoselect("true");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","15","408","305","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("실행주기");
            obj.set_cssclass("sta_WF_subTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("div_input","15","419",null,"70","15",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.getSetter("scrollbars").set("none");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","13","20","57","21",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("3");
            obj.set_text("배치주기");
            obj.set_cssclass("sta_WF_Label2");
            this.div_input.addChild(obj.name, obj);

            obj = new Static("Static01","0",null,null,"10","0","-58",null,null,null,null,this.div_input.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_visible("false");
            this.div_input.addChild(obj.name, obj);

            obj = new Static("Static06","422","20","71","20",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("4");
            obj.set_text("예약시간");
            obj.set_cssclass("sta_WF_Label2");
            this.div_input.addChild(obj.name, obj);

            obj = new Calendar("cal_reservedDate","495","20","163","20",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            obj.set_enable("true");
            this.div_input.addChild(obj.name, obj);

            obj = new Static("Static09","214","20","36","20",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("5");
            obj.set_text("간격");
            obj.set_cssclass("sta_WF_Label2");
            this.div_input.addChild(obj.name, obj);

            obj = new Edit("edt_batchInterval","260","20","101","20",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_inputtype("digit");
            obj.set_cssclass("essential");
            obj.set_maxlength("2");
            obj.set_enable("true");
            this.div_input.addChild(obj.name, obj);

            obj = new Combo("cbo_batchIntervalType","77","20","101","20",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("6");
            obj.set_autoselect("true");
            obj.set_codecolumn("C,CMD_BATCH_INTERVAL_TYPE,,Y,Y");
            obj.set_cssclass("essential");
            obj.set_enable("true");
            obj.set_index("0");
            this.div_input.addChild(obj.name, obj);

            obj = new Button("btn_disable",null,null,"80","21","332","14",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("일시중지");
            obj.set_cssclass("btn_DR_Basic2");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Button("btn_enable",null,null,"80","21","248","14",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("중지해제");
            obj.set_cssclass("btn_DR_Basic2");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Button("btn_drop",null,null,"80","21","79","14",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("스케쥴삭제");
            obj.set_cssclass("btn_DR_Basic2");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);

            obj = new Button("btn_modify",null,null,"80","21","164","14",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("스케쥴수정");
            obj.set_cssclass("btn_DR_Basic2");
            obj.set_tooltiptype("hover");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","div_input.form.edt_batchInterval","value","ds_schedule","BATCH_INTERVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_input.form.cal_reservedDate","value","ds_schedule","NEXT_RUN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_input.form.cbo_batchIntervalType","value","ds_schedule","BATCH_INTERVAL_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMBM02120P.xfdl", function() {
        /***************************************************************************************
        * 시스템명 	    : ifc mes시스템
        * 업무명 		: 배치실행 Popup
        * 파일명 		: CMBM02120P.xfdl
        * 작성자 		: built1
        * 작성일 		: 2018.04.20
        *
        * 설  명		: 배치 실행 Popup
        *---------------------------------------------------------------------------------------
        * 변경일		변경자		변경내역
        *---------------------------------------------------------------------------------------
        * 2018.04.20    built1		최초작성
        *---------------------------------------------------------------------------------------
        ***************************************************************************************/

        /**************************************************************************
         * 1. 필수 include(필수)
        *************************************************************************/
        //include "lib::comLib.xjs";
        //include "cuslib::nbdfComLib.xjs";

        /**************************************************************************
         * 2. FORM 변수 선언 영역
        ***************************************************************************/
        this.fv_currDate;
        var fv_jobGubunCd;
        var fv_parentSearchFlag = "NONE";
        var fv_programName;
        /**************************************************************************
         * 3. FORM 정의
        ***************************************************************************/
        this.fn_init = function(obj, e)
        {
        	// 폼 초기화
        	this.nfn_formInit(obj);

        	// 파라메터
        	fv_jobGubunCd = this.parent.arg_jobGubunCd;
        	fv_programName = this.parent.arg_programName;
        	this.div_search.form.cbo_jobGubunCd.set_value(fv_jobGubunCd);
        	this.div_search.form.edt_programName.set_value(fv_programName);
        	if(!this.gfn_isNull(fv_programName)) this.fn_search();

        	this.div_input.form.cal_reservedDate.set_value(this.nfn_getCurrentSystemTime(0));
        }

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
        ***************************************************************************/
        // 프로그램
        this.fn_search = function(obj,  e)
        {
        	this.ds_search.clearData();
        	this.ds_search.addRow();
        	this.ds_search.setColumn(0,"JOB_GUBUNCD"    , this.div_search.form.cbo_jobGubunCd.value);
        	this.ds_search.setColumn(0,"PROGRAM_NAME", this.div_search.form.edt_programName.value);
        	if(!this.isValidObject(obj))
        		this.ds_search.setColumn(0,"JOB_NAME", this.parent.arg_jobName);

        	// 대상 초기화
        	this.ds_schedule.clearData();

        	var sSvcID        = "selectBatchScheduleList";
            var sController   = "/cmbm02100/selectBatchScheduleList.do";
        	var sInDatasets   = "INPUT=ds_search";
        	var sOutDatasets  = "ds_schedule=output";
        	var sArgs = "";
            sArgs += this.gfn_setParam("method",sSvcID);

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        /*
        	기능 : 저장버튼 처리
        */
        this.fn_save = function(obj,  e)
        {
        }

        // 매개변수 기본값 할당 버튼
        this.fn_paramDefaultValue = function()
        {
        	// 매개변수 조건
        	//this.fn_search2(this.div_search.form.cbo_program.value);
        }


        // 매개변수 초기화 버튼
        this.fn_paramClear = function()
        {
        	for(var i = 0; i < this.ds_params.rowcount; i++)
        	{
        		this.ds_params.setColumn(i, "DIS_DEFAULT_VALUE", "");
        	}
        }


        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
        ***************************************************************************/
        this.fn_callBack = function(trId, errCD, errMsg)
        {
        	if(errCD < 0)
        	{
        		// BizException
        		if(errCD == -200)
        		{
        			this.gfn_alert(errMsg);
        			return;
        		}

        		//strMsgType  (메세지 종류 : error, warning, info)
        		//strMsgButton(버튼        : ok,yesno,yesnocancel)
        		if(trId.substring(0,6)=="select")
        		{
        			this.gfn_Message("ErrorOnSearch","\n"+trId+"\n"+errMsg, "error","ok");//("조회에 실패하였습니다."+"\n"+trId+"\n"+errMsg);
        		}else{
        			this.gfn_alert(errMsg);
        		}
        	}
        	else
        	{
        		if (trId == "selectBatchProgramList")
        		{
        			if(this.ds_program.rowcount < 1)
        			{
        				this.fn_afterSearchInit();
        				//this.gfn_Message("IMCMM0028", null, "info","ok");// 조회된 자료가 없습니다.
        			}
        			else
        			{
        				this.div_search.form.cbo_program.set_index(0);
        				//this.fn_search2(this.ds_program.getColumn(0,"BATCH_CD"));
        			}
        		}
        		else if (trId == "selectBatchScheduleList")
        		{
        			//trace(this.ds_schedule.saveXML());
        			//this.div_input.form.cal_reservedDate.set_value(this.nfn_getCurrentSystemTime(0));
        		}
        		else if (trId == "selectEcmLookupValuesVList2ds_CCMD_JOB_GUBUNCDVAL")
        		{
        			if(this.nfn_isNull(fv_jobGubunCd))
        			{
        				this.div_search.form.cbo_jobGubunCd.set_index(0);
        			}
        			else
        			{
        				this.div_search.form.cbo_jobGubunCd.set_value(fv_jobGubunCd);
        			}
        			this.fn_search();
        		}
        		else if (trId == "selectEcmLookupValuesVList2ds_CDRBM_BATCH_TYPEVAL")
        		{
        			//this.div_input.cbo_batchType.set_value("I");
        			this.fn_setBatchType("I");
        		}
        		else if (trId == "executeBatchJobRun")
        		{
        			var returnCode = this.ds_proc_out.getColumn(0,"ERROR_CODE");
        			//trace(this.ds_proc_out.saveXML());
        			if(returnCode=="S")
        			{
        				this.gfn_Message("ProcessingSuccess", "", "info","ok");// 요청처리가 성공적으로 수행되었습니다.//IMCMM0007
        				fv_parentSearchFlag = "SEARCH";
        			}
        			else
        			{
        				this.gfn_Message("ProcessingError", this.ds_proc_out.getColumn(0,"ERROR_DESC"), "warning","ok"); // {0}	//IMCMM0221
        			}
        			this.fn_windowClose();
        		}
        		else if (trId == "executeBatchDisable")
        		{
        			this.gfn_Message("ProcessingSuccess", null, "info", "ok"); //정상적으로 처리되었습니다.
        			this.fn_search();
        		}
        		else if (trId == "executeBatchEnable")
        		{
        			this.gfn_Message("ProcessingSuccess", null, "info", "ok"); //정상적으로 처리되었습니다.
        			this.fn_search();
        		}
        		else if (trId == "executeBatchDrop")
        		{
        			this.gfn_Message("ProcessingSuccess", null, "info", "ok"); //정상적으로 처리되었습니다.
        			this.fn_search();
        		}
        		else if (trId == "executeBatchModifyJob")
        		{
        			this.gfn_Message("ProcessingSuccess", null, "info", "ok"); //정상적으로 처리되었습니다.
        			this.fn_search();
        		}
        	}
        }

        /***************************************************************************
        * 6. 팝업 시작
        **************************************************************************/
        // 팝업 Callback
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        }

        /**************************************************************************
        * 7. 기타 함수 시작
        **************************************************************************/
        this.fn_windowClose = function()
        {
        	var rtnArray = new Array();
        	rtnArray[0] = fv_parentSearchFlag;

        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        }

        this.fn_afterSearchInit = function()
        {
        	this.ds_params.clearData();
        	this.div_input.form.cbo_batchType.set_value("I");
        	this.fn_setBatchType("I"); // 즉시실행
        }

        this.fn_setBatchType = function(batchType)
        {
        	this.div_input.form.cbo_batchType.set_value(batchType);
        	this.div_input.form.cbo_batchIntervalType.set_value(null);
        	this.div_input.form.edt_batchInterval.set_value(null);
        	this.div_input.form.cal_reservedDate.set_cssclass(null);
        	this.div_input.form.cal_reservedDate.set_value(this.nfn_getCurrentSystemTime(0));// 현재일

        	if(batchType=="I") // 즉시실행
        	{
        		this.div_input.form.cbo_batchIntervalType.set_enable(false);
        		this.div_input.form.edt_batchInterval.set_enable(false);
        	}
        	else if(batchType=="S") // 스케줄
        	{
        		this.div_input.form.cbo_batchIntervalType.set_enable(true);
        		this.div_input.form.edt_batchInterval.set_enable(true);
        		this.div_input.form.cal_reservedDate.set_cssclass("essential");
        	}
        }

        // 파라메터 콤보Data 설정
        this.fn_makeCmb = function()
        {
        	var strQry = this.ds_params.getColumn(0, "ALL_QUERY");
        	if(this.nfn_isNull(strQry)) return;

        	this.ds_qry.clearData();
        	this.ds_qry.addRow();
        	this.ds_qry.setColumn(0,"QUERY",strQry);
        	this.ds_qry.setColumn(0,"ORDERBY","ORDER BY 1, 2");
        	trace(this.ds_qry.saveXML());

        	this.ds_cmb.clearData();

        	var sSvcID        = "selectUserQryList";
        	var sController   = "/cmbm02100/selectUserQryList.do";
        	var sInDatasets   = "INPUT=ds_qry";
        	var sOutDatasets  = "ds_cmb=output";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method","selectUserQryList");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }


        /**************************************************************************
         * 8. 이벤트
        ***************************************************************************/
        this.btn_close_onclick = function(obj,  e)
        {
        	this.fn_windowClose();
        }


        this.btn_disable_onclick = function(obj,e)
        {
        	var nRow = this.ds_schedule.rowposition;
        	if (nRow < 0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok"); //선택된 항목이 없습니다.
        		return;
        	}

        	var batchResultType = this.ds_schedule.getColumn(nRow, "BATCH_RESULT_TYPE");
        	trace("batchResultType => " + batchResultType);

        	if (batchResultType == "성공" || batchResultType == "취소" || batchResultType == "실패")
        	{
        		this.gfn_Message("CannotCancelBatchStatus", "", "warning", "ok");//배치상태가 성공/취소/실패는 취소할 수 없습니다.
        		return;
        	}

        	var bOK = this.gfn_Message("OspDoProcessWant", "일시중지 ", "conf", "yesno");
        	if (bOK == false)
        	{
        		return;
        	}

        	// DS 초기화
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	// 조건
        	this.ds_search.setColumn(0, "JOB_NAME", this.ds_schedule.getColumn(nRow, "JOB_NAME"));
        	// trace(this.ds_search.saveXML());

        	// 대상 초기화
        	this.ds_proc_out.clearData();

        	var sSvcID = "executeBatchDisable";
        	var sController = "/cmbm02100/executeBatchDisable.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_proc_out=ouput";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", sSvcID);

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.btn_drop_onclick = function(obj,e)
        {
        	var nRow = this.ds_schedule.rowposition;
        	if (nRow < 0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok"); //선택된 항목이 없습니다.
        		return;
        	}

        	var batchResultType = this.ds_schedule.getColumn(nRow, "BATCH_RESULT_TYPE");
        	trace("batchResultType => " + batchResultType);

        	if (batchResultType == "성공" || batchResultType == "취소" || batchResultType == "실패")
        	{
        		this.gfn_Message("CannotCancelBatchStatus", "", "warning", "ok");//배치상태가 성공/취소/실패는 취소할 수 없습니다.
        		return;
        	}

        	var bOK = this.gfn_Message("OspDoProcessWant", "스케쥴삭제 ", "conf", "yesno");
        	if (bOK == false)
        	{
        		return;
        	}

        	// DS 초기화
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	// 조건
        	this.ds_search.setColumn(0, "JOB_NAME", this.ds_schedule.getColumn(nRow, "JOB_NAME"));
        	// trace(this.ds_search.saveXML());

        	// 대상 초기화
        	this.ds_proc_out.clearData();

        	var sSvcID = "executeBatchDrop";
        	var sController = "/cmbm02100/executeBatchDrop.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_proc_out=ouput";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", sSvcID);

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.btn_enable_onclick = function(obj,e)
        {
        	var nRow = this.ds_schedule.rowposition;
        	if (nRow < 0)
        	{
        		this.gfn_Message("NoSelections", "", "warning", "ok"); //선택된 항목이 없습니다.
        		return;
        	}

        	var batchResultType = this.ds_schedule.getColumn(nRow, "BATCH_RESULT_TYPE");
        	trace("batchResultType => " + batchResultType);

        	if (batchResultType == "성공" || batchResultType == "취소" || batchResultType == "실패")
        	{
        		this.gfn_Message("CannotCancelBatchStatus", "", "warning", "ok");//배치상태가 성공/취소/실패는 취소할 수 없습니다.
        		return;
        	}

        	var bOK = this.gfn_Message("OspDoProcessWant", "중지해제 ", "conf", "yesno");
        	if (bOK == false)
        	{
        		return;
        	}

        	// DS 초기화
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	// 조건
        	this.ds_search.setColumn(0, "JOB_NAME", this.ds_schedule.getColumn(nRow, "JOB_NAME"));
        	// trace(this.ds_search.saveXML());

        	// 대상 초기화
        	this.ds_proc_out.clearData();

        	var sSvcID = "executeBatchEnable";
        	var sController = "/cmbm02100/executeBatchEnable.do";
        	var sInDatasets = "INPUT=ds_search";
        	var sOutDatasets = "ds_proc_out=ouput";
        	var sArgs = "";
        	sArgs += this.gfn_setParam("method", sSvcID);

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        this.grd_schedule_onselectchanged = function(obj,e)
        {
        	if(this.ds_schedule.getColumn(e.row,"ENABLED")=="FALSE"){
        		this.btn_enable.set_enable(true);
        		this.btn_disable.set_enable(false);
        	}else{
        		this.btn_enable.set_enable(false);
        		this.btn_disable.set_enable(true);
        	}
        };

        this.btn_modify_onclick = function(obj,e)
        {
        	if(this.ds_schedule.rowcount == 0)
        	{
        		this.gfn_Message("SelectSomeThing","CB8A358C622C4541BE4DBD54C091AE6B", "info","ok");// {0}(을)를 선택하세요.
        		return;
        	}

        	var component = this.div_input;
        	var strColIdList = "cbo_batchIntervalType,edt_batchInterval,cal_reservedDate";
        	var strColNmList = "8332081DFFED4FB59D7B636B0B6D430A,INTERVAL,TIME";
        	var rtn = this.nfn_MandatoryCheck(component,strColIdList,strColNmList);
        	if(rtn==false) return;

        	var bOK = this.gfn_Message("OspDoProcessWant", "스케쥴수정 ", "conf", "yesno");
        	if(bOK==false) return;

        	// DS 초기화
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	// 조건
        	this.ds_search.setColumn(0,"JOB_NAME"           , this.ds_schedule.getColumn(this.ds_schedule.rowposition, "JOB_NAME")); // 배치JOB_ID
        	this.ds_search.setColumn(0,"BATCH_INTERVAL_TYPE", this.div_input.form.cbo_batchIntervalType.value); // 배치간격유형	//Immediate일경우 ""
        	this.ds_search.setColumn(0,"BATCH_INTERVAL"     , this.div_input.form.edt_batchInterval.value); // 배치간격	//Immediate일경우 ""
        	this.ds_search.setColumn(0,"RESERVED_DATE"      , this.div_input.form.cal_reservedDate.value); // 예약시간	//Immediate일경우 ""
        	//trace(this.ds_search.saveXML());

        	//대상 초기화
        	this.ds_proc_out.clearData();

        	var sSvcID        = "executeBatchModifyJob";
            var sController   = "/cmbm02100/executeBatchModifyJob.do";
        	var sInDatasets   = "INPUT=ds_search";
        	var sOutDatasets  = "ds_proc_out=ouput";
        	var sArgs = "";
            sArgs += this.gfn_setParam("method",sSvcID);

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_CloseImage.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_schedule.addEventHandler("onselectchanged",this.grd_schedule_onselectchanged,this);
            this.div_search.form.cbo_jobGubunCd.addEventHandler("onitemchanged",this.div_search_cbo_jobGubunCd_onitemchanged,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.btn_disable.addEventHandler("onclick",this.btn_disable_onclick,this);
            this.btn_enable.addEventHandler("onclick",this.btn_enable_onclick,this);
            this.btn_drop.addEventHandler("onclick",this.btn_drop_onclick,this);
            this.btn_modify.addEventHandler("onclick",this.btn_modify_onclick,this);
        };
        this.loadIncludeScript("CMBM02120P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
