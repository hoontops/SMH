(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01900P2");
            this.set_titletext("재작업 라우팅");
            this.set_cssclass("form_PopupBg");
            this.set_tooltiptext("REWORKROUTING");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,510);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKIDNAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILTERPLANT\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processDefList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"APPLICATIONTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSCLASSID\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKNUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REWORKNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"TOPPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"TOPPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CREATOR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_processPathList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PATHTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"VALIDSTATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_confirm",null,null,"70","28","95","20",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("확인");
            obj.set_cssclass("btn_pop_yes");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","btn_confirm:5",null,"70","28",null,"20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("취소");
            obj.set_cssclass("btn_pop_no");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","117","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","47","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"36","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"50","10","20","48",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_processDefList","319","82",null,"31","291",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_titleInfo","20","82",null,"31","sta_cnt_ds_processDefList:50",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("라우팅 목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("ROUTINGLIST");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_processDefList","20","sta_titleInfo:0",null,"150","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_processDefList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"적용구분\" tooltiptext=\"APPLICATIONTYPE\"/><Cell col=\"2\" text=\"재작업구분\" tooltiptext=\"REWORKTYPE\"/><Cell col=\"3\" text=\"대공정\" tooltiptext=\"TOPPROCESSSEGMENTID\"/><Cell col=\"4\" text=\"재작업번호\" tooltiptext=\"REWORKNUMBER\"/><Cell col=\"5\" text=\"재작업버전\" tooltiptext=\"REWORKVERSION\"/><Cell col=\"6\" text=\"재작업명\" tooltiptext=\"REWORKNAME\"/><Cell col=\"7\" text=\"설명\" tooltiptext=\"DESCRIPTION\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:APPLICATIONTYPE\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:REWORKTYPE\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:TOPPROCESSSEGMENTNAME\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"left\"/><Cell col=\"4\" maskeditautoselect=\"true\" maskeditformat=\"#,###,##0\" textAlign=\"center\" text=\"bind:REWORKNUMBER\"/><Cell col=\"5\" textAlign=\"center\" maskeditformat=\"#,###,##0\" text=\"bind:REWORKVERSION\"/><Cell col=\"6\" maskeditformat=\"#,###,##0\" text=\"bind:REWORKNAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:DESCRIPTION\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_processPathList","319","grd_processDefList:20",null,"31","291",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_titleOutbound","20","grd_processDefList:20",null,"31","sta_cnt_ds_processPathList:50",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("공정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("PROCESSCHANGETYPE");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","25","grd_processDefList:0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_processPathList","20","sta_titleOutbound:0",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_processPathList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"2\" text=\"공정ID\" tooltiptext=\"PROCESSSEGMENTID\"/><Cell col=\"3\" text=\"공정 Rev.\" tooltiptext=\"ITEMNAME\"/><Cell col=\"4\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_01","0","204","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00",null,"214","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","20","20",null,"42","20",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("div_WF_search");
            this.addChild(obj.name, obj);

            obj = new Static("sta_reworkProcessDff","33.83%","10","135","20",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("재작업 라우팅 ID / 명");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("TXTREWORKPROCESSDEF");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_processClassType","90","10",null,"20","sta_reworkProcessDff:16",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_codecolumn("C,ProcessClassType,NAN,Y,Y");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("sta_process","0","10",null,"20","cbo_processClassType:10",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("라우팅 구분");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("PROCESSDEFCLASS");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("guidetipT","66","0","50","10",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("guidetipB","70",null,"48","10",null,"0",null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_search",null,null,"47","24","20","8",null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_SA_search");
            obj.set_text("검색");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("guidetip",null,"0","18",null,"86","0",null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("w\r\n18");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_reworkRouting","sta_reworkProcessDff:10","10",null,"20","guidetip:0",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02_03","20","div_search:0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,510,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM01900P3.xfdl","lib::lib_qam.xjs");
        this.addIncludeScript("QAM01900P3.xfdl","lib::lib_bas.xjs");
        this.registerScript("QAM01900P3.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 재작업 라우팅(품질관리-불량품 폐기취소)
         * 파일명 		: QAM01900P3.xfdl
         * 작성자 		: yanghee.kim
         * 작성일 		: 2021.04.25
         *
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.25	yanghee.kim   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/


        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;	//품질관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_search();
        	this.opener.fv_rtnValue = null; //기존정보 초기화
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
         /*
         * 기능 : 확인
         */
        this.fn_apply = function (obj, e)
        {
        	var rtnArray = new Array();
        	rtnArray[0] = this.ds_processDefList.getColumn(this.ds_processDefList.rowposition, "REWORKNUMBER");
        	rtnArray[1] = this.ds_processDefList.getColumn(this.ds_processDefList.rowposition, "REWORKVERSION");
        	rtnArray[2] = this.ds_processDefList.getColumn(this.ds_processDefList.rowposition, "REWORKNAME");
        	this.opener.fv_rtnValue = rtnArray;
        	this.close();
        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
            var aa = this.div_search.form.edt_reworkRouting.value;
        	this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();

        	this.ds_search.setColumn(nRow, "PLANTID",          this.gf_getSiteType());
        	this.ds_search.setColumn(nRow, "LANGUAGETYPE",     this.gf_getLanguageType());
        	this.ds_search.setColumn(nRow, "LOTID",            this.parent.parentLotId);
        	this.ds_search.setColumn(nRow, "PROCESSCLASSTYPE", this.div_search.form.cbo_processClassType.value);
        	this.ds_search.setColumn(nRow, "REWORKIDNAME",     this.div_search.form.edt_reworkRouting.value);
        	this.ds_search.setColumn(nRow, "FILTERPLANT",      "Y");

        	this.ds_processDefList.clearData();
        	this.ds_processPathList.clearData();

            var sSvcID        = "selectReworkRoutingList";
            var sController   = "/qam01900/selectReworkRoutingList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_processDefList=output";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         *
         */
        this.fn_searchProcessPath = function (pDataset, pRow)
        {
            this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();

        	this.ds_search.setColumn(nRow, "ENTERPRISEID",      this.gf_getEnterpriseId());
        	this.ds_search.setColumn(nRow, "LANGUAGETYPE",      this.gf_getLanguageType());
        	this.ds_search.setColumn(nRow, "LOTID",             this.parent.parentLotId);
        	this.ds_search.setColumn(nRow, "PROCESSDEFID",      pDataset.getColumn(pRow, "REWORKNUMBER"));
        	this.ds_search.setColumn(nRow, "PROCESSDEFVERSION", pDataset.getColumn(pRow, "REWORKVERSION"));
        	this.ds_search.setColumn(nRow, "VERSION",           "10005");

        	this.ds_processPathList.clearData();
            var sSvcID        = "selectProcessPathList";
            var sController   = "/qam01900/selectProcessPathList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_processPathList=output";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, "", "", false);
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
        		if (trId == "selectReworkRoutingList")
        		{
        			if (this.ds_processDefList.rowcount > 0)
        			{
        				this.fn_searchProcessPath(this.ds_processDefList, 0);
        			}
        		}
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/
        this.fn_openPop = function(svcId, popId)
        {
            // gfn_openPopup(arg_type, popupCd, popupNm, rtnCols, paramCols, paramValues, searchStr);
            //-----------------
            // arg_type    : A::사용자가 선택, B:: 한건존재시 자동 셋팅, C::사용자 멀티 선택
            // popupCd     : 공통팝업 관리 화면에서 생성되는 팝업코드
            // popupNm     : 변경할팝업화면명 , 변경하지 않을 경우 팝업화면 타이틀은 관리화면의 타이틀로 지정됨
            // rtnCols     : 구분자 : "|"   : 그리드에 출력될 컬럼 지정 (않을 경우 관리화면의 그리드로 출력됨)
            // paramCols   : 구분자 : "|" : where 구문에 들어갈 컬럼
            // paramValues : 구분자 : "|"  : where 구문에 들어갈 컬럼에 대한 값
            // searchStr   : 팝업 조회조건 콤보값 = 조회 값

            var popupId = svcId;
            var oArg = {};
            var opts = "width=490,height=500";

             this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if(this.nfn_isNull(rtn)) return;
        };


        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/
        //최초 호출되는 초기화 함수
        this.fn_formInit = function ()
        {
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.fn_close = function(obj,e)
        {
          this.close();
        };

        /*
         *
         */
        this.ds_processDefList_canrowposchange = function(obj,e)
        {
        	this.fn_searchProcessPath(obj, e.newrow);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_confirm.addEventHandler("onclick",this.fn_apply,this);
            this.btn_cancel.addEventHandler("onclick",this.fn_close,this);
            this.btn_close.addEventHandler("onclick",this.fn_close,this);
            this.div_search.form.btn_search.addEventHandler("onclick",this.fn_search,this);
            this.ds_processDefList.addEventHandler("canrowposchange",this.ds_processDefList_canrowposchange,this);
        };
        this.loadIncludeScript("QAM01900P3.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
