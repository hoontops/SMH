(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CMBM02110P");
            this.set_titletext("배치실행 Popup");
            this.set_cssclass("form_PopupBg");
            this.set_dragscrolltype("both");
            this.getSetter("classname").set("DRRM00310P");
            if (Form == this.constructor)
            {
                this._setFormPosition(715,490);
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
            obj._setContents("<ColumnInfo><Column id=\"JOB_GUBUNCD\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"JOB_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PARAMS\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_INTERVAL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_INTERVAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"RESERVED_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SRH_GET_USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"JOB_GUBUNCD\" type=\"STRING\" size=\"256\"/><Column id=\"BAT_PGM_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BATCH_PROGRAM\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            
            // UI Components Initialize
            obj = new Static("sta_title","15","10",null,"30","595",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("배치실행");
            obj.set_cssclass("sta_WF_subTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"60","20","15","15",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_cssclass("btn_DR_GridCancel");
            this.addChild(obj.name, obj);

            obj = new Static("Static13","15","108","305","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("매개변수 조건");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static16","-19.95%","131",null,"23","119.95%",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CloseImage",null,"0","23","23","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_pop_close");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_params","15","134",null,"195","15",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabstop("false");
            obj.set_binddataset("ds_params");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_nodatatext("검색 결과가 없습니다.");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"매개변수\"/><Cell col=\"2\" text=\"필수여부\"/><Cell col=\"3\" text=\"값\"/></Band><Band id=\"body\"><Cell style=\"align:center;\" text=\"bind:PARAM_SEQ\"/><Cell col=\"1\" text=\"bind:PARAM_PROMPT\"/><Cell col=\"2\" style=\"align:center;\" text=\"bind:REQUIRED_YN\"/><Cell col=\"3\" displaytype=\"expr:PARAM_COLUMN_TYPE==&apos;YMD&apos;?&apos;date&apos;:PARAM_COLUMN_TYPE==&apos;LIST&apos;?&apos;combo&apos;:PARAM_COLUMN_TYPE==&apos;YM&apos;?&apos;text&apos;:&apos;normal&apos;\" edittype=\"expr:PARAM_COLUMN_TYPE==&apos;YMD&apos;?&apos;date&apos;:PARAM_COLUMN_TYPE==&apos;LIST&apos;?&apos;combo&apos;:PARAM_COLUMN_TYPE==&apos;YM&apos;?&apos;mask&apos;:&apos;normal&apos;\" style=\"align:left;cursor:EXPR(PARAM_COLUMN_TYPE==&apos;YM&apos;?&apos;hand&apos;:&apos;&apos;);\" text=\"bind:DIS_DEFAULT_VALUE\" mask=\"expr:PARAM_COLUMN_TYPE==&apos;YMD&apos;?&apos;yyyy/MM/dd&apos;:PARAM_COLUMN_TYPE==&apos;YM&apos;?&apos;####/##&apos;:PARAM_COLUMN_TYPE==&apos;YEAR&apos;?&apos;####&apos;:&apos;&apos;\" maskchar=\" \" editautoselect=\"true\" expandshow=\"expr:PARAM_COLUMN_TYPE==&apos;YM&apos;?&apos;show&apos;:&apos;hide&apos;\" expandimage=\"expr:PARAM_COLUMN_TYPE==&apos;YM&apos;?&apos;image::cal_WF_Drop_N.png&apos;:&apos;&apos;\" combodataset=\"ds_cmb\" combocodecol=\"LOOKUP_CODE\" combodatacol=\"MEANING\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","15","55",null,"43","15",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("scrollbars").set("none");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0",null,null,"10","0","-58",null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("10");
            obj.set_visible("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static07","12","10","61","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("업무구분");
            obj.set_cssclass("sta_WF_Label2");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","203","10","57","21",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("프로그램");
            obj.set_cssclass("sta_WF_Label2");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_jobGubunCd","85","10","105","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_codecolumn("C,SystemWorkType,VAL,Y,Y");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_program","270","10","405","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_codecolumn("BATCH_CD");
            obj.set_innerdataset("ds_program");
            obj.set_datacolumn("DESCRIPTION");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_exec",null,null,"60","20","78","15",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("실행");
            obj.set_cssclass("btn_DR_Basic2");
            obj.set_tooltiptext("확인");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","15","343","305","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("실행조건");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div_input","15","369",null,"70","15",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.getSetter("scrollbars").set("none");
            obj.set_cssclass("div_WF_SearchBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","271","10","57","21",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("6");
            obj.set_text("배치주기");
            obj.set_cssclass("sta_WF_Label2");
            this.div_input.addChild(obj.name, obj);

            obj = new Static("Static01","0",null,null,"10","0","-58",null,null,null,null,this.div_input.form);
            obj.set_taborder("4");
            obj.set_text("10");
            obj.set_visible("false");
            this.div_input.addChild(obj.name, obj);

            obj = new Static("Static07","12","10","61","20",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("5");
            obj.set_text("배치유형");
            obj.set_cssclass("sta_WF_Label2");
            this.div_input.addChild(obj.name, obj);

            obj = new Combo("cbo_batchType","85","10","163","20",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_codecolumn("C,CMD_BATCH_TYPE,VAL,Y,Y");
            obj.set_index("0");
            this.div_input.addChild(obj.name, obj);

            obj = new Static("Static06","12","39","61","20",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("7");
            obj.set_text("예약시간");
            obj.set_cssclass("sta_WF_Label2");
            this.div_input.addChild(obj.name, obj);

            obj = new Calendar("cal_reservedDate","85","38","163","20",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("3");
            obj.set_autoselect("true");
            obj.set_dateformat("yyyy-MM-dd HH:mm:ss");
            obj.set_editformat("yyyy-MM-dd HH:mm:ss");
            obj.set_value("20210315111311000");
            this.div_input.addChild(obj.name, obj);

            obj = new Combo("cbo_batchIntervalType","337","10","101","20",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_codecolumn("C,CMD_BATCH_INTERVAL_TYPE,SEL,Y,Y");
            obj.set_cssclass("essential");
            obj.set_index("0");
            this.div_input.addChild(obj.name, obj);

            obj = new Static("Static09","452","10","36","20",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("8");
            obj.set_text("간격");
            obj.set_cssclass("sta_WF_Label2");
            this.div_input.addChild(obj.name, obj);

            obj = new Edit("edt_batchInterval","498","10","101","20",null,null,null,null,null,null,this.div_input.form);
            obj.set_taborder("2");
            obj.set_autoselect("true");
            obj.set_inputtype("digit");
            obj.set_cssclass("essential");
            obj.set_maxlength("2");
            this.div_input.addChild(obj.name, obj);

            obj = new Button("btn_clear1",null,null,"60","20","141","15",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("초기화");
            obj.set_cssclass("btn_DR_GridReset");
            obj.set_tooltiptext("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("btn_paramDefaultValue",null,"108","141","20","128",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("매개변수 기본값 할당");
            obj.set_cssclass("btn_DR_Basic2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_paramClear",null,"108","110","20","15",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("매개변수 초기화");
            obj.set_cssclass("btn_DR_GridReset");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CMBM02110P.xfdl", function() {
        /***************************************************************************************
        * 시스템명 	    : ifc mes시스템
        * 업무명 		: 배치실행 Popup
        * 파일명 		: CMBM02110P.xfdl
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

        /**************************************************************************
         * 3. FORM 정의
        ***************************************************************************/
        this.fn_init = function(obj, e)
        {
        	// 폼 초기화
        	this.nfn_formInit(obj);
        	this.fn_search();
        	// 그리드 소트 제외
        	this.grd_params.removeEventHandler("onheadclick", this.nfn_grd_onheadclick, this);

        	// 파라메터
        	fv_jobGubunCd = this.parent.arg_jobGubunCd;
        	this.div_input.form.cal_reservedDate.set_value(this.nfn_getCurrentSystemTime(0));
        }

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
        ***************************************************************************/
        // 프로그램
        this.fn_search = function()
        {
        	// 검색 search DS 초기화
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	// 검색조건
        	this.ds_search.setColumn(0,"JOB_GUBUNCD"    , this.div_search.form.cbo_jobGubunCd.value);
        	this.ds_search.setColumn(0,"SRH_GET_USER_ID", this.gf_getUserId());

        	//trace(this.ds_search.saveXML());

        	// 대상 초기화
        	this.ds_program.clearData();
        	this.ds_params.clearData();

        	var sSvcID        = "selectBatchProgramList";
            var sController   = "/cmbm02100/selectBatchProgramList.do";
        	var sInDatasets   = "INPUT=ds_search";
        	var sOutDatasets  = "ds_program=output";
        	var sArgs = "";
            sArgs += this.gfn_setParam("method",sSvcID);

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        // 매개변수 조건
        this.fn_search2 = function(batchCd)
        {
        	// 검색 search DS 초기화
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	// 검색조건
        	this.ds_search.setColumn(0,"BATCH_CD", batchCd);
        	//trace(this.ds_search.saveXML());

        	// 대상 초기화
        	this.ds_params.clearData();

        	var sSvcID        = "selectBatchParamsList";
            var sController   = "/cmbm02100/selectBatchParamsList.do";
        	var sInDatasets   = "INPUT=ds_search";
        	var sOutDatasets  = "ds_params=output";
        	var sArgs = "";
            sArgs += this.gfn_setParam("method",sSvcID);

        	//this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false, "");
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
        	this.fn_search2(this.div_search.form.cbo_program.value);
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
        				this.fn_search2(this.ds_program.getColumn(0,"BATCH_CD"));
        			}
        		}
        		else if (trId == "selectBatchParamsList")
        		{
        			this.fn_makeCmb(); // 파라메터 콤보Data 설정
        			this.fn_setBatchType("I"); // 즉시실행
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


        // 업무구분.. 변경시
        this.div_search_cbo_jobGubunCd_onitemchanged = function(obj, e)
        {
        	this.fn_search();
        }

        // 프로그램.. 변경시
        this.div_search_cbo_program_onitemchanged = function(obj, e)
        {
        	this.fn_search2(e.postvalue);
        }

        // 배치유형.. 변경시
        this.div_input_cbo_batchType_onitemchanged = function(obj, e)
        {
        	this.fn_setBatchType(e.postvalue);
        }


        // 그리트 클릭시
        this.grd_params_oncellclick = function(obj, e)
        {
        	if(this.nfn_isEqualCol(obj,e.cell,"DEFAULT_VALUE"))
        	{
        		if(this.ds_params.getColumn(e.row,"PARAM_COLUMN_TYPE")=="LIST")
        		{
        			//this.ds_cmb.filter("LOOKUP_TYPE=='"+this.ds_params.getColumn(e.row,"PARAM_SEQ")+"'");
        		}
        	}
        }


        this.grd_params_onselectchanged = function(obj, e)
        {
        	if(this.ds_params.getColumn(e.row,"PARAM_COLUMN_TYPE")=="LIST")
        	{
        		this.ds_cmb.filter("LOOKUP_TYPE=='"+this.ds_params.getColumn(e.row,"PARAM_SEQ")+"'");
        	}
        }


        // 실행
        this.btn_exec_onclick = function(obj,  e)
        {
        	// 프로그램
        	var batchCd = this.div_search.form.cbo_program.value;
        	//if(this.nfn_isNull(batchCd))
        	if(this.ds_program.rowcount == 0)
        	{
        		this.gfn_Message("SelectSomeThing","CB8A358C622C4541BE4DBD54C091AE6B", "info","ok");// {0}(을)를 선택하세요.
        		return;
        	}

        	// 매개변수 필수입력 조건체크
        	var params = "";
        	for(var i=0 ; i<this.ds_params.rowcount; i++)
        	{
        		var requiredYn  = this.ds_params.getColumn(i, "REQUIRED_YN");   // 필수여부
        		var paramPrompt = this.ds_params.getColumn(i, "PARAM_PROMPT"); // 파라메터명
        		var inputValue  = this.nfn_FormatNull(this.ds_params.getColumn(i, "DIS_DEFAULT_VALUE")); // 파라메터값

        		if(requiredYn=="Y" && this.nfn_isNull(inputValue))
        		{
        			this.gfn_Message("SomethingRequired",paramPrompt, "info","ok");// {0}(은)는 필수입력항목입니다.

        			var nCell = this.grd_params.getBindCellIndex("body", "DIS_DEFAULT_VALUE");
        			this.ds_params.set_rowposition(i);
        			this.grd_params.setFocus();
        			this.grd_params.setCellPos(nCell);
        			return;
        		}

        		// 매개변수 합치기
        		//params += this.nfn_isNull(params) ? inputValue : ":"+inputValue;
        		if(i==0)
        			params  = this.gfn_blankStr(inputValue);
        		else
        			params += ":" + this.gfn_blankStr(inputValue);
        	}

        	// 스케줄일때는 배치주기,간격,시작시간 필수 입력
        	var batchType = this.div_input.form.cbo_batchType.value;

        	if(batchType=="S")
        	{
        		var component = this.div_input;
        		var strColIdList = "cbo_batchIntervalType,edt_batchInterval,cal_reservedDate";
        		var strColNmList = "8332081DFFED4FB59D7B636B0B6D430A,INTERVAL,TIME";
        		var rtn = this.nfn_MandatoryCheck(component,strColIdList,strColNmList);
        		if(rtn==false) return;
        	}

        	var bOK = this.gfn_Message("ExecuteProgram", "", "conf","yesno"); // {0}하시겠습니까?
        	if(bOK==false) return;

        	// DS 초기화
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	// 조건
        	this.ds_search.setColumn(0,"JOB_NAME"           , ""); // 배치JOB_ID
        	this.ds_search.setColumn(0,"BATCH_CD"           , batchCd); // 배치코드
        	this.ds_search.setColumn(0,"PARAMS"             , params); // 매개변수리스트//  구분자:":"
        	this.ds_search.setColumn(0,"BATCH_TYPE"         , batchType); // 배치유형	//I:Immediate, S:Schedule
        	this.ds_search.setColumn(0,"BATCH_INTERVAL_TYPE", this.div_input.form.cbo_batchIntervalType.value); // 배치간격유형	//Immediate일경우 ""
        	this.ds_search.setColumn(0,"BATCH_INTERVAL"     , this.div_input.form.edt_batchInterval.value); // 배치간격	//Immediate일경우 ""
        	this.ds_search.setColumn(0,"RESERVED_DATE"      , this.div_input.form.cal_reservedDate.value); // 예약시간	//Immediate일경우 ""
        	//trace(this.ds_search.saveXML());

        	//대상 초기화
        	this.ds_proc_out.clearData();

        	var sSvcID        = "executeBatchJobRun";
            var sController   = "/cmbm02100/executeBatchJobRun.do";
        	var sInDatasets   = "INPUT=ds_search";
        	var sOutDatasets  = "ds_proc_out=ouput";
        	var sArgs = "";
            sArgs += this.gfn_setParam("method",sSvcID);

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        }

        // 초기화
        this.btn_clear_onclick = function(obj,  e)
        {
        	if(this.ds_program.rowcount == 0)
        	{
        		this.fn_afterSearchInit();
        	}
        	else
        	{
        		var batchCd = this.div_search.form.cbo_program.value;
        		this.fn_search2(batchCd);
        	}
        }


        /***************************************************************************************
        * 100. 그리드 월력표기
        ***************************************************************************************/

        //그리드 월력 팝업
        this.fn_grdCalmthOpen = function(obj, e)
        {
        	//기준 위치
        	/* Form 에서 Grid Cell 기준으로 위치얻기 */
        	var objRect = obj.getCellRect(e.row, e.cell);

        	/* cell 기준 position으로 클라이언트 기준 X, Y 좌표를 스크린 기준 기준으로 바꾸어 위치얻기 */
        	var nLeft = system.clientToScreenX(obj, objRect.left);
        	var nTop  = system.clientToScreenY(obj, objRect.bottom);

        	/* 스크린 기준 X, Y 좌표를 클라이언트 기준으로 바꾸어 위치얻기 */
        	nLeft = system.screenToClientX(nexacro.getApplication().mainframe, nLeft);
        	nTop  = system.screenToClientY(nexacro.getApplication(), nTop);

        	//전달 값
        	var sYearMonth = this.ds_params.getColumn(e.row, "DIS_DEFAULT_VALUE");
        	var colId      = obj.getCellProperty("Body", e.cell, "text").replace("bind:", ""); //column id
        	//일자 선택 팝업창
        	this.gfn_popupCalMonth(colId, nLeft, nTop, sYearMonth);
        }


        // 그리드 월력 팝업: 값 선택 후 callBack 함수
        this.fn_monthCallback = function (svcId, retVal)
        {
        	if(!this.gfn_isNull(retVal))
        	{
        		//리턴값
        		//[0] : 선택한 년월
        		//[1] : 월 시작일
        		//[2] : 월 종료일
        		//[3] : 변경전 년월 값
        		this.ds_params.setColumn(this.ds_params.rowposition, "DIS_DEFAULT_VALUE", retVal[0]);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_CloseImage.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_params.addEventHandler("oncellclick",this.grd_params_oncellclick,this);
            this.grd_params.addEventHandler("onselectchanged",this.grd_params_onselectchanged,this);
            this.grd_params.addEventHandler("onexpandup",this.fn_grdCalmthOpen,this);
            this.div_search.form.cbo_jobGubunCd.addEventHandler("onitemchanged",this.div_search_cbo_jobGubunCd_onitemchanged,this);
            this.div_search.form.cbo_program.addEventHandler("onitemchanged",this.div_search_cbo_program_onitemchanged,this);
            this.btn_exec.addEventHandler("onclick",this.btn_exec_onclick,this);
            this.div_input.form.cbo_batchType.addEventHandler("onitemchanged",this.div_input_cbo_batchType_onitemchanged,this);
            this.btn_clear1.addEventHandler("onclick",this.btn_clear_onclick,this);
            this.btn_paramDefaultValue.addEventHandler("onclick",this.fn_paramDefaultValue,this);
            this.btn_paramClear.addEventHandler("onclick",this.fn_paramClear,this);
        };
        this.loadIncludeScript("CMBM02110P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
