(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01300P1");
            this.set_titletext("NCR 발행");
            if (Form == this.constructor)
            {
                this._setFormPosition(960,740);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qamFinishIssue", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"NCRISSUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISNCRISSUE\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOINCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qamCauseProcessSegmentIssue", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"ABNOCRNO\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTRATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"NCRISSUEDATE\" type=\"STRING\" size=\"256\"/><Column id=\"ISNCRISSUE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTCLASSTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/><Column id=\"JOINCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"DEGREE\" type=\"STRING\" size=\"256\"/><Column id=\"TXNGROUPHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"ABNOCRTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_output", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"GRADE\" type=\"STRING\" size=\"256\"/><Column id=\"INSPECTORID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectReasonConsumable", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","82","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"100","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00",null,null,"50","20","97","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_02",null,null,"700","10","0","48",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,null,"70","28","20","20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_cssclass("btn_pop_no");
            this.addChild(obj.name, obj);

            obj = new Button("btn_x_close",null,"0","20","20","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("CLOSE");
            this.addChild(obj.name, obj);

            obj = new Div("div_finishIssue","20","20",null,"350","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_qamFinishIssue","0","40",null,null,"0","0",null,null,null,null,this.div_finishIssue.form);
            obj.set_taborder("0");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamFinishIssue");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"3\" text=\"차수\" tooltiptext=\"DEGREE\"/><Cell col=\"4\" text=\"불량코드\" tooltiptext=\"DEFECTCODE\"/><Cell col=\"5\" text=\"불량코드 명\" tooltiptext=\"DEFECTCODENAME\"/><Cell col=\"6\" text=\"불량 수량\" tooltiptext=\"ISCERTFINISH\"/><Cell col=\"7\" text=\"불량률\" tooltiptext=\"DEFECTRATE\"/><Cell col=\"8\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/><Cell col=\"9\" text=\"작업장\" tooltiptext=\"AREANAME\"/><Cell col=\"10\" text=\"NCR 발행여부\" tooltiptext=\"ISNCRISSUE\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:RESOURCEID\"/><Cell col=\"3\" text=\"bind:DEGREE\"/><Cell col=\"4\" text=\"bind:JOINCODE\"/><Cell col=\"5\" text=\"bind:JOINNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:DEFECTQTY\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:DEFECTRATE\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:ISNCRISSUE\"/></Band></Format></Formats>");
            this.div_finishIssue.addChild(obj.name, obj);

            obj = new Button("btnSaveFinishIssue",null,"2","70","28","0",null,null,null,null,null,this.div_finishIssue.form);
            obj.set_taborder("1");
            obj.set_text("발행");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptext("ISSUE");
            this.div_finishIssue.addChild(obj.name, obj);

            obj = new Div("div_causeProcessSegmentIssue","20","405",null,"350","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaveCauseProcessSegmentIssue",null,"2","70","28","0",null,null,null,null,null,this.div_causeProcessSegmentIssue.form);
            obj.set_taborder("0");
            obj.set_text("발행");
            obj.set_cssclass("btn_pop_yes");
            obj.set_tooltiptext("ISSUE");
            this.div_causeProcessSegmentIssue.addChild(obj.name, obj);

            obj = new Grid("grd_qamCauseProcessSegmentIssue","0","40",null,null,"0","0",null,null,null,null,this.div_causeProcessSegmentIssue.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_qamCauseProcessSegmentIssue");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"40\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"Lot No.\" tooltiptext=\"LOTID\"/><Cell col=\"3\" text=\"차수\" tooltiptext=\"DEGREE\"/><Cell col=\"4\" text=\"불량코드\" tooltiptext=\"DEFECTCODE\"/><Cell col=\"5\" text=\"불량코드 명\" tooltiptext=\"DEFECTCODENAME\"/><Cell col=\"6\" text=\"불량 수량\" tooltiptext=\"ISCERTFINISH\"/><Cell col=\"7\" text=\"불량률\" tooltiptext=\"DEFECTRATE\"/><Cell col=\"8\" text=\"원인 품목\" tooltiptext=\"REASONCONSUMABLEDEFID\"/><Cell col=\"9\" text=\"원인 LOTID\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell col=\"10\" text=\"원인 공정\" tooltiptext=\"REASONPROCESSSEGMENTID\"/><Cell col=\"11\" text=\"원인 작업장\" tooltiptext=\"REASONAREAID\"/><Cell col=\"12\" text=\"NCR 발행일시\" tooltiptext=\"AREANAME\"/><Cell col=\"13\" text=\"NCR 발행여부\" tooltiptext=\"ISNCRISSUE\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"expr:currow+1\"/><Cell col=\"2\" text=\"bind:RESOURCEID\"/><Cell col=\"3\" text=\"bind:DEGREE\"/><Cell col=\"4\" text=\"bind:JOINCODE\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:JOINNAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:DEFECTQTY\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:DEFECTRATE\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:REASONCONSUMABLEDEFNAME\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/cmb_drop_N.png&apos;)\" expandsize=\"24\" expandshow=\"show\"/><Cell col=\"9\" text=\"bind:REASONCONSUMABLELOTID\" textAlign=\"left\" displaytype=\"combotext\" edittype=\"expr:comp.parent.nfn_isNull(dataset.getColumn(currow, &quot;REASONCONSUMABLEDEFIDVERSION&quot;) ) == true ? &apos;none&apos;:&apos;combo&apos;\" combodataset=\"ds_defectReasonConsumable\" combocodecol=\"CONSUMABLELOTID\" combodatacol=\"CONSUMABLELOTID\"/><Cell col=\"10\" text=\"bind:REASONSEGMENTNAME\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/cmb_drop_N.png&apos;)\" expandshow=\"expr:comp.parent.nfn_isNull(dataset.getColumn(currow, &quot;REASONCONSUMABLELOTID&quot;) ) == true ? &apos;hide&apos;:&apos;show&apos;\" expandsize=\"24\"/><Cell col=\"11\" text=\"bind:REASONAREANAME\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:NCRISSUEDATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/><Cell col=\"13\" text=\"bind:ISNCRISSUE\"/></Band></Format></Formats>");
            this.div_causeProcessSegmentIssue.addChild(obj.name, obj);

            obj = new Static("sta_finishIssueArrow","30","31","12","12",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("▶");
            this.addChild(obj.name, obj);

            obj = new Static("sta_causeProcessSegmentIssueArrow","30","416","12","12",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("▶");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_process","-5","790","490","210",null,null,null,null,null,null,this);
            obj.set_text("pdv_00");
            obj.set_visible("false");
            obj.set_url("qam::QAM01800P7.xfdl");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_reason","546","789","500","127",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_url("qam::QAM01800P6.xfdl");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_finishIssue","50","20","620","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("최종검사");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("SHIPMENTINSPECTIONCAPTION");
            this.addChild(obj.name, obj);

            obj = new Static("sta_causeProcessSegmentIssue","50","404","620","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("원인공정");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("CAUSEPROCESS");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",960,740,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","qam::QAM01800P7.xfdl");
            this._addPreloadList("fdl","qam::QAM01800P6.xfdl");
        };
        
        // User Script
        this.addIncludeScript("QAM01300P1.xfdl","lib::lib_bas.xjs");
        this.addIncludeScript("QAM01300P1.xfdl","lib::lib_qam.xjs");
        this.registerScript("QAM01300P1.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: NCR 발행
         * 파일명 		: QAM01300P1.xfdl
         * 작성자 		: 권혜영
         * 작성일 		: 2021.05.07
         *
         * 설  명		: 품질관리 > 수입검사 > 출하검사이력조회 > NCR 발행
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.05.07	권혜영   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_bas.xjs"); /*include "lib::lib_bas.xjs"*/;	//기준관리 공통 라이브러리 include
        this.executeIncludeScript("lib::lib_qam.xjs"); /*include "lib::lib_qam.xjs"*/;	//품질관리 공통 라이브러리 include
        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
         this.fv_parentLotId = "";
        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);
        	this.fn_formInit();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        	this.fn_searchFinishIssue();
        	this.fn_searchCauseProcessSegmentIssue();
        };

        /*
         * 기능 : 검색 초기화
         */
        this.fn_searchClear = function(obj,e)
        {
        };

        /*
         * 기능 : 신규
         */
        this.fn_add = function(obj,e)
        {
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	var objDs, processsegmentClassType, strInDatasets;
        	if(obj.id == "btnSaveFinishIssue") {
        		objDs = this.ds_qamFinishIssue;
        		processsegmentClassType = "FinishInspection";
        		strInDatasets = "ds_qamFinishIssue=ds_qamFinishIssue:U";

        	} else if(obj.id == "btnSaveCauseProcessSegmentIssue") {
        		objDs = this.ds_qamCauseProcessSegmentIssue;
        		processsegmentClassType = "ShipmentInspection";
        		strInDatasets = "ds_qamCauseProcessSegmentIssue=ds_qamCauseProcessSegmentIssue:U";
        	}

        	if(objDs.findRow("CHK", "1") < 0) {
        		this.gfn_Message("MustCheckLotToNCR", null, "warning", "ok");	//NCR을 발행할 항목을 체크하세요.
        		return;
        	}

        	objDs.filter("CHK == '1'");
        	for (var i = 0; i < objDs.rowcount; i++) {
        		objDs.setColumn(i, "LOTID", this.fv_parentLotId);
        		objDs.setColumn(i, "ENTERPRISEID", this.gf_getEnterpriseId());
        		objDs.setColumn(i, "PLANTID", this.gf_getSiteType());
        		objDs.setColumn(i, "PROCESSSEGMENTCLASSTYPE", processsegmentClassType);
        	}
        	objDs.filter("");

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveShipmentInspNCRIssue";
        	var sController 	= "/qam01300/saveShipmentInspNCRIssue.do";
        	var sInDatasets 	= strInDatasets;
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 삭제
         */
        this.fn_delete = function (obj, e)
        {
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
        		if (trId == "saveShipmentInspNCRIssue")
        		{
        			this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.opener.fn_search();
        			this.close();
        		}
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 최초 호출되는 초기화 함수
         */
        this.fn_formInit = function ()
        {
        	this.fn_initAccordion();
        	this.fn_search();

        	//원인품목, 원인공정 POPUP DIV Call 및 원인 LOT ID Search
        	var objDs = this.opener.ds_qamShipmentInspHistory;
        	var nRowPos = this.opener.ds_qamShipmentInspHistory.rowposition;

        	this.fv_parentLotId = objDs.getColumn(nRowPos, "RESOURCEID");

        	this.pdv_reason.form.ds_reasonConsumable.clearData();
        	this.pdv_reason.form.fn_searchReasonConsumable(this.fv_parentLotId, "10002");

        	this.pdv_process.form.ds_defectReasonProcesssegment.clearData();
        	this.pdv_process.form.fn_searchReasonProcesssegment(this.fv_parentLotId, "10002");

        	this.fn_searchDefectReasonConsumable();
        };

        this.fn_initAccordion = function ()
        {
        	//버튼 & title 리스트
        	var arrBtnList = [this.sta_finishIssueArrow, this.sta_causeProcessSegmentIssueArrow];
        	var arrTitleList = [this.sta_finishIssue, this.sta_causeProcessSegmentIssue];
        	//DIV 리스트
        	var arrDivList = [this.div_finishIssue, this.div_causeProcessSegmentIssue];

        	var arrDivTop = [50, 84];
        	var arrDivMaxSize = [300, 300];
        	var arrDivMinSize = [0, 0];

        	var objConfig = {
        						btnlist			: arrBtnList,
        						titlelist		: arrTitleList,
        						divlist			: arrDivList,
        						divTop			: arrDivTop,
        						maxsizelist		: arrDivMaxSize,
        						minsizelist		: arrDivMinSize
        				    }

        	//아코디언메뉴 초기화 함수
        	this.fn_initAccordionmenu(objConfig);
        };

        /*
         * 기능 : 아코디언메뉴 초기화 함수
         */
        this.fn_initAccordionmenu = function (objConfig)
        {
        	var i;
        	var arrBtnList = objConfig.btnlist;
        	var arrTitleList = objConfig.titlelist;
        	var arrDivList = objConfig.divlist;
        	var arrDivMaxSize = objConfig.maxsizelist;
        	var arrDivMinSize = objConfig.minsizelist;
        	var objBtn, objTitle, objDiv, objDivPrev, nMaxSize, nMinSize;
        	var nCount = arrBtnList.length;

        	var objTarget;

        	for(i=0;i<nCount;i++)
        	{
        		objBtn = arrBtnList[i];
        		objTitle = arrTitleList[i];
        		objDiv = arrDivList[i];
        		nMaxSize = arrDivMaxSize[i];
        		nMinSize = arrDivMinSize[i];

        		if(i==0) {
        			objDiv.set_top(objBtn.name+":34px");
        		} else {
        			objDivPrev = arrDivList[i-1];
        			objBtn.set_top(objDivPrev.name+":34px");
        			objTitle.set_top(objDivPrev.name+":22px");
        			objDiv.set_top(objDivPrev.name+":34px");
        		}
        		objDiv.maxsize = nMaxSize;
        		objDiv.minsize = nMinSize;
        		objDiv.setOffsetHeight(nMinSize);

        		objBtn.targetmenu = objDiv;
        		objTitle.targetbtn = objBtn;
        		objTitle.targetmenu = objDiv;

        		objBtn.addEventHandler("onclick", this.fn_runDrillDown, this);
        		objTitle.addEventHandler("onclick", this.fn_runDrillDown, this);
        	}

        	this.fn_runDrillDown(this.sta_finishIssueArrow);
        };

        /*
         * 기능 : grid 가 속한 div 이동
         */
        this.fn_runDrillDown = function(obj)
        {
        	var objGrd = obj.targetmenu;
        	var nMaxSize = objGrd.minsize;
        	var nMinSize = objGrd.maxsize;

        	var objBtn = obj.targetbtn || obj;

        	//현재 메뉴의 크기가 최대사이즈와 같을경우
        	if(objGrd.getOffsetHeight() == nMaxSize) {
        		//최소사이즈로 변경
        		objGrd.setOffsetHeight(nMinSize);
        	}
        	else
        	{
        		//최대 사이즈로 변경
        		objGrd.setOffsetHeight(nMaxSize);
        	}

        	this.fn_changeImage(objBtn, objGrd);
        	this.resetScroll();
        };

        /*
         * 기능 : static image 변경
         */
        this.fn_changeImage = function (obj, objGrd)
        {
        	if(objGrd.getOffsetHeight() == 0) {
        		obj.set_text("▶");
        	} else {
        		obj.set_text("▼");
        	}
        };

        /*
         * 기능 : 최종검사 조회
         */
        this.fn_searchFinishIssue = function ()
        {
        	var objDs = this.opener.ds_qamShipmentInspHistory;
        	var nRowPos = this.opener.ds_qamShipmentInspHistory.rowposition;

        	this.ds_qamFinishIssue.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());//ENTERPRISEID
        	this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());//PLANTID
        	this.ds_search.setColumn(0, "RESOURCEID", objDs.getColumn(nRowPos, "RESOURCEID"));
        	this.ds_search.setColumn(0, "DEGREE", objDs.getColumn(nRowPos, "DEGREE"));
        	this.ds_search.setColumn(0, "TXNGROUPHISTKEY", objDs.getColumn(nRowPos, "TXNGROUPHISTKEY"));
        	this.ds_search.setColumn(0, "ABNOCRTYPE", "SpillShipmentInspection");

        	var sSvcID 			= "selectDefectToNCRShipmentList";
        	var sController 	= "/qam01300/selectDefectToNCRShipmentList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamFinishIssue=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, null, true, false);
        };

        /*
         * 기능 : 원인공정 조회
         */
        this.fn_searchCauseProcessSegmentIssue = function ()
        {
        	var objDs = this.opener.ds_qamShipmentInspHistory;
        	var nRowPos = this.opener.ds_qamShipmentInspHistory.rowposition;

        	this.ds_qamCauseProcessSegmentIssue.clearData();
        	this.ds_search.clearData();
        	this.ds_search.addRow();

        	this.ds_search.setColumn(0, "ENTERPRISEID", this.gf_getEnterpriseId());//ENTERPRISEID
        	this.ds_search.setColumn(0, "PLANTID", this.gf_getSiteType());//PLANTID
        	this.ds_search.setColumn(0, "RESOURCEID", objDs.getColumn(nRowPos, "RESOURCEID"));
        	this.ds_search.setColumn(0, "DEGREE", objDs.getColumn(nRowPos, "DEGREE"));
        	this.ds_search.setColumn(0, "TXNGROUPHISTKEY", objDs.getColumn(nRowPos, "TXNGROUPHISTKEY"));
        	this.ds_search.setColumn(0, "ABNOCRTYPE", "ReasonShipmentInspection");

        	var sSvcID 			= "selectDefectToNCRShipmentList";
        	var sController 	= "/qam01300/selectDefectToNCRShipmentList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_qamCauseProcessSegmentIssue=output";
        	var sArgs 			= "";

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs, null, true, false);
        };

         /*
          * 기능 : 콤보 원인 LOITID 조회
          */
        this.fn_searchDefectReasonConsumable = function ()
        {
        	this.ds_defectReasonConsumable.clearData();     //불량(폐기)처리 - 원인 LOTID

            var sSvcID        = "selectGetDefectReasonConsumableLot";
            var sController   = "/qampopup/selectGetDefectReasonConsumableLot.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_defectReasonConsumable=output";
        	var sArgs         = "";
        		sArgs        += this.gfn_setParam("LOTID",         this.fv_parentLotId);
                sArgs        += this.gfn_setParam("VERSION",       "10002");
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : Grid 에서 Body 영역의  원인품목 Cell 을 클릭했을 때 발생하는 이벤트입니다.
         *        QAM01800P6.xfdl에서 호출
         */
        this.fn_setReasonConsumbaleInfo = function (pConsumableDefId, pConsumableDefName)
        {
        	this.ds_qamCauseProcessSegmentIssue.setColumn(this.ds_qamCauseProcessSegmentIssue.rowposition, "REASONCONSUMABLEDEFID", pConsumableDefId);
        	this.ds_qamCauseProcessSegmentIssue.setColumn(this.ds_qamCauseProcessSegmentIssue.rowposition, "REASONCONSUMABLEDEFNAME", pConsumableDefName);
        };

        /*
         * 기능 : Grid 에서 Body 영역의 원인공정 Cell 을 클릭했을 때 발생하는 이벤트입니다.
         *        QAM01800P7.xfdl에서 호출
         */
        this.fn_setDefectProcesssegmentInfo = function (pProcessSegmentId, pProcessSgmentName)
        {
        	this.ds_qamCauseProcessSegmentIssue.setColumn(this.ds_qamCauseProcessSegmentIssue.rowposition, "REASONSEGMENTID", pProcessSegmentId);
        	this.ds_qamCauseProcessSegmentIssue.setColumn(this.ds_qamCauseProcessSegmentIssue.rowposition, "REASONSEGMENTNAME", pProcessSgmentName);
        };


        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 이벤트 : 닫기
         */
        this.fn_close = function(obj,e)
        {
        	this.close();
        };

        /*
         * 이벤트 : Grid 에 표시되었던 Combo 아이템 리스트 또는 팝업달력이 닫힐 때 발생하는 이벤트입니다.
         */
        this.div_causeProcessSegmentIssue_grd_qamCauseProcessSegmentIssue_oncloseup = function(obj,e)
        {
        	this.div_causeProcessSegmentIssue.form.grd_qamCauseProcessSegmentIssue.updateToDataset();
        };

        /*
         * 이벤트 : Grid 에 표시되었던 Combo 아이템 리스트 또는 팝업달력이 열릴 때 발생하는 이벤트입니다.
         */
        this.div_causeProcessSegmentIssue_grd_qamCauseProcessSegmentIssue_onexpandup = function(obj,e)
        {
        	if (e.cell == obj.getBindCellIndex("body", "REASONCONSUMABLEDEFNAME")) //원인품목
        	{
        		var arrPos = obj.getCellRect(e.row, e.cell);
        		var nx = nexacro.toNumber(arrPos.left);
        		var ny = nexacro.toNumber(arrPos.bottom);
        		this.pdv_reason.trackPopupByComponent(obj,nx,ny); // ComboBox펼치기
        	}
        	else if (e.cell == obj.getBindCellIndex("body", "REASONSEGMENTNAME")) //원인공정
        	{
        		var arrPos = obj.getCellRect(e.row, e.cell);
        		var nx = nexacro.toNumber(arrPos.left);
        		var ny = nexacro.toNumber(arrPos.bottom);
        		this.pdv_process.trackPopupByComponent(obj,nx,ny); // ComboBox펼치기
        	}
        };

        /*
         * 이벤트 : 원인공정 dataset 변경 시
         */
        this.ds_qamCauseProcessSegmentIssue_oncolumnchanged = function(obj,e)
        {
        	// 원인 품목 ID, Version 세팅
        	if (e.columnid == "REASONCONSUMABLEDEFNAME")
         	{
        		var nRow = obj.rowposition;
        		obj.set_enableevent(false);
        		obj.setColumn(nRow, "REASONCONSUMABLELOTID", "");
        		obj.setColumn(nRow, "REASONSEGMENTID", "");
        		obj.setColumn(nRow, "REASONAREAID", "");

        		var cboRow  = this.pdv_reason.form.ds_reasonConsumable.rowposition;
        		var id      = this.pdv_reason.form.ds_reasonConsumable.getColumn(cboRow, "CONSUMABLEDEFID");
        		var version = this.pdv_reason.form.ds_reasonConsumable.getColumn(cboRow, "CONSUMABLEDEFVERSION");
        		var idVersion = this.pdv_reason.form.ds_reasonConsumable.getColumn(cboRow, "CONSUMABLEDEFIDVERSION");

         		obj.setColumn(nRow, "REASONCONSUMABLEDEFID", id);
         		obj.setColumn(nRow, "REASONCONSUMABLEDEFVERSION", version);
        		obj.set_enableevent(true);

        		this.ds_defectReasonConsumable.filter("");
        		this.ds_defectReasonConsumable.filter("REASONCONSUMABLEDEFIDVERSION =='" + idVersion +"'");
        	}

        	//원인LOTID 선택시 원인공정 필터링
        	if (e.columnid == "REASONCONSUMABLELOTID")
        	{
        		var cboRow = this.ds_defectReasonConsumable.rowposition;
        		var consumableDefIdVersion = this.ds_defectReasonConsumable.getColumn(cboRow, "REASONCONSUMABLEDEFIDVERSION");
        		var consumableLotId = this.ds_defectReasonConsumable.getColumn(cboRow, "CONSUMABLELOTID");
        		this.pdv_process.form.ds_defectReasonProcesssegment.filter("");
        		//this.pdv_process.form.ds_defectReasonProcesssegment.filter("REASONCONSUMABLEDEFIDVERSION =='" + consumableDefIdVersion +"' && REASONCONSUMABLELOTID =='" + consumableLotId +"'");
        	}

        	// 원인공정 선택시 원인작업장 및 원인 Site 세팅
        	if (e.columnid == "REASONSEGMENTNAME")
        	{
        		var nRow = obj.rowposition;
        		var reasonLot = obj.getColumn(nRow, "REASONCONSUMABLELOTID");
        		var segmentId = e.newvalue
        		//var reasonLotSegment = reasonLot +"|"+ segmentId;

        		var cboRow = this.pdv_process.form.ds_defectReasonProcesssegment.rowposition;
        		var areaId = this.pdv_process.form.ds_defectReasonProcesssegment.getColumn(cboRow, "AREAID");
        		var areaName = this.pdv_process.form.ds_defectReasonProcesssegment.getColumn(cboRow, "AREANAME");
        		var plantId = this.pdv_process.form.ds_defectReasonProcesssegment.getColumn(cboRow, "PLANTID");
        		var consumableDefIdVersion = this.pdv_process.form.ds_defectReasonProcesssegment.getColumn(cboRow, "REASONCONSUMABLEDEFIDVERSION");
        		var consumableLotId = this.pdv_process.form.ds_defectReasonProcesssegment.getColumn(cboRow, "CONSUMABLELOTID");

        		obj.set_enableevent(false);
        		obj.setColumn(nRow, "REASONAREAID", areaId);
        		obj.setColumn(nRow, "REASONAREANAME", areaName);
        		obj.setColumn(nRow, "REASONPLANTID", plantId);
        		obj.set_enableevent(true);
        	}
        };

        /*
         * 이벤트 : 원인공정 dataset 변경 전 이벤트 : 원인공정 checkbox 선택 시 발행 여부가 Y인경우 체크 불가
         */
        this.ds_qamCauseProcessSegmentIssue_cancolumnchange = function(obj,e)
        {
        	// checkbox 선택
        	if (e.columnid == "CHK" && e.newvalue == "1") {
        		if(obj.getColumn(e.row, "ISNCRISSUE") == "Y") {
        			this.gfn_Message("AlreadyIssuedNCR", null, "warning", "ok"); //이미 NCR 발행된 항목입니다.
        			return false;

        		} else if(this.nfn_isNull(obj.getColumn(e.row, "REASONCONSUMABLEDEFID"))) {
        			this.gfn_Message("MustInputCauseMaterialLotId", null, "warning", "ok"); //원인 품목을 입력하세요.
        			return false;

        		} else if(this.nfn_isNull(obj.getColumn(e.row, "REASONSEGMENTID"))) {
        			this.gfn_Message("MustInputCauseProcesssegmentId", null, "warning", "ok"); //원인 공정을 입력하세요.
        			return false;

        		}
        	}
        };

        /*
         * 이벤트 : 최종검사 dataset 변경 전 이벤트 : 최종검사 checkbox 선택 시  발행 여부가 Y인경우 체크 불가
         */
        this.ds_qamFinishIssue_cancolumnchange = function(obj,e)
        {
        	// checkbox 선택
        	if (e.columnid == "CHK" && e.newvalue == "1") {
        		if(obj.getColumn(e.row, "ISNCRISSUE") == "Y") {
        			this.gfn_Message("AlreadyIssuedNCR", null, "warning", "ok"); //이미 NCR 발행된 항목입니다.
        			return false;
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_close.addEventHandler("onclick",this.fn_close,this);
            this.btn_x_close.addEventHandler("onclick",this.fn_close,this);
            this.div_finishIssue.form.btnSaveFinishIssue.addEventHandler("onclick",this.fn_save,this);
            this.div_causeProcessSegmentIssue.form.btnSaveCauseProcessSegmentIssue.addEventHandler("onclick",this.fn_save,this);
            this.div_causeProcessSegmentIssue.form.grd_qamCauseProcessSegmentIssue.addEventHandler("oncloseup",this.div_causeProcessSegmentIssue_grd_qamCauseProcessSegmentIssue_oncloseup,this);
            this.div_causeProcessSegmentIssue.form.grd_qamCauseProcessSegmentIssue.addEventHandler("onexpandup",this.div_causeProcessSegmentIssue_grd_qamCauseProcessSegmentIssue_onexpandup,this);
            this.sta_finishIssue.addEventHandler("onclick",this.fn_runDrillDown,this);
            this.ds_qamFinishIssue.addEventHandler("oncolumnchanged",this.ds_qamQcinspector_oncolumnchanged,this);
            this.ds_qamFinishIssue.addEventHandler("cancolumnchange",this.ds_qamFinishIssue_cancolumnchange,this);
            this.ds_qamCauseProcessSegmentIssue.addEventHandler("oncolumnchanged",this.ds_qamCauseProcessSegmentIssue_oncolumnchanged,this);
            this.ds_qamCauseProcessSegmentIssue.addEventHandler("cancolumnchange",this.ds_qamCauseProcessSegmentIssue_cancolumnchange,this);
        };
        this.loadIncludeScript("QAM01300P1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
