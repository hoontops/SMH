(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PCM08700P2");
            this.set_titletext("공정관리-물류창고외주처배분_POPUP");
            this.set_cssclass("form_PopupBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_procSegmDistri", this);
            obj._setContents("<ColumnInfo><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ALLOCATERATE\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTYMON\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTYDAY\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTYMONRATE\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTYDAYRATE\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTYMONSUM\" type=\"STRING\" size=\"256\"/><Column id=\"SENDPANELQTYDAYSUM\" type=\"STRING\" size=\"256\"/><Column id=\"PROPANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WAITFORRECEIVEPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WAITPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"RUNPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"WAITFORSENDPNLQTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"P_PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"P_AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"P_RECEIPTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"P_PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"P_RECEIPTDATE_PERIODFR\" type=\"STRING\" size=\"256\"/><Column id=\"P_RECEIPTDATE_PERIODTO\" type=\"STRING\" size=\"256\"/><Column id=\"P_YESNO\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"P_STARTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_ENDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"P_STARTMONTH\" type=\"STRING\" size=\"256\"/><Column id=\"P_ENDMONTH\" type=\"STRING\" size=\"256\"/><Column id=\"P_YEARMONTH\" type=\"STRING\" size=\"256\"/><Column id=\"P_PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"P_LOTHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"P_RECEIPTSEQUENCE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lotList", this);
            obj._setContents("<ColumnInfo><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"LOTTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PCSQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ARRAYQTY\" type=\"STRING\" size=\"256\"/><Column id=\"PANELQTY\" type=\"STRING\" size=\"256\"/><Column id=\"OSPMM\" type=\"STRING\" size=\"256\"/><Column id=\"OWNTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTDATE\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTUSER\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKUSER\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"ALTERNATESEQUENCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCESTART\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCEEND\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_segmentList", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"RECEIPTSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVRESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"PREVRESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"PREVAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"WORKCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKDATE\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKUSERNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CHECKUSER\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_plantIdInformation", this);
            obj._setContents("<ColumnInfo><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"FAXNO\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGE\" type=\"STRING\" size=\"256\"/><Column id=\"ISOSPBUDGETCONTROL\" type=\"STRING\" size=\"256\"/><Column id=\"ISOSPETCBUDGETCONTROL\" type=\"STRING\" size=\"256\"/><Column id=\"WORKTIME\" type=\"STRING\" size=\"256\"/><Column id=\"TIMEZONE\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static02","66","0","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","374","26","50","34",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("h34");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","78","20","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"-2","25","25","14",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_pop_close");
            obj.set_visible("true");
            obj.set_tooltiptext("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("title0_00","19","26","158","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("외주처 배부Lot No목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("OUTSOURCEDWAREHOUSEWEARLIST");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_lotList","title0_00:0","26","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_lotList","20","60",null,"187","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_lotList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"188\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"136\"/><Column size=\"58\"/><Column size=\"270\"/><Column size=\"0\"/><Column size=\"161\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회사ID---HIDDEN\"/><Cell col=\"1\" text=\"공장ID---HIDDEN\"/><Cell col=\"2\" text=\"OSPRECEIPTUSER---HIDDEN\"/><Cell col=\"3\" text=\"OSPSENDER---HIDDEN\"/><Cell col=\"4\" text=\"LOTHISTKEY---HIDDEN\"/><Cell col=\"5\" text=\"RECEIPTSEQUENCE---HIDDEN\"/><Cell col=\"6\" text=\"Lot No.\"/><Cell col=\"7\" text=\"입고일\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" text=\"입고자명\"/><Cell col=\"9\" text=\"양산구분\"/><Cell col=\"10\" text=\"품목코드\"/><Cell col=\"11\" text=\"Rev\"/><Cell col=\"12\" text=\"품목명\"/><Cell col=\"13\" text=\"공정ID---HIDDEN\"/><Cell col=\"14\" text=\"공정명\"/><Cell col=\"15\" text=\"작업장AREAID---HIDDEN\"/><Cell col=\"16\" text=\"작업장\"/><Cell col=\"17\" text=\"공정순\"/><Cell col=\"18\" text=\"가능공정순\"/><Cell col=\"19\" text=\"이전공정ID---HIDDEN\"/><Cell col=\"20\" text=\"이전공정명\"/><Cell col=\"21\" text=\"이전작업장PREVAREAID---HIDDEN\"/><Cell col=\"22\" text=\"이전작업장\"/><Cell col=\"23\" text=\"수량 (PCS)\"/><Cell col=\"24\" text=\"수량 (PNL)\"/><Cell col=\"25\" text=\"panelqty---HIDDEN\"/><Cell col=\"26\" text=\"확인일\"/><Cell col=\"27\" text=\"확인자\"/><Cell col=\"28\" text=\"이전공정ID---HIDDEN\"/><Cell col=\"29\" text=\"이전공정ID---HIDDEN\"/></Band><Band id=\"body\"><Cell text=\"bind:ENTERPRISEID\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:PLANTID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:OSPRECEIPTUSER\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:OSPSENDER\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:LOTHISTKEY\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:RECEIPTSEQUENCE\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:RECEIPTDATE\" textAlign=\"left\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" text=\"bind:RECEIPTUSERNAME\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:LOTTYPE\" textAlign=\"left\" combocodecol=\"C,YieldProdType,,Y,N\" displaytype=\"combotext\"/><Cell col=\"10\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:PRODUCTDEFNAME\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:AREAID\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:AREANAME\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:USERSEQUENCENAME\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:ALTERNATESEQUENCENAME\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:PREVPROCESSSEGMENTID\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:PREVPROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:PREVAREAID\" textAlign=\"left\"/><Cell col=\"22\" text=\"bind:PREVAREANAME\" textAlign=\"left\"/><Cell col=\"23\" text=\"bind:PCSQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"24\" text=\"bind:PANELQTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"25\" text=\"bind:OSPMM\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"26\" text=\"bind:CHECKDATE\" textAlign=\"left\"/><Cell col=\"27\" text=\"bind:CHECKUSERNAME\" textAlign=\"left\"/><Cell col=\"28\" text=\"bind:PATHSEQUENCESTART\" textAlign=\"left\"/><Cell col=\"29\" text=\"bind:PATHSEQUENCEEND\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("title0_00_00","19","247","135","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Lot No별 공정 목록");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_tooltiptext("OUTSOURCEDWAREHOUSEWEARLIST");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_segmentList","title0_00_00:0","247","140","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_segmentList","20","281",null,"259","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_segmentList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"100\"/><Column size=\"126\"/><Column size=\"177\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"121\"/><Column size=\"142\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"회사ID---HIDDEN\"/><Cell col=\"1\" text=\"공장ID---HIDDEN\"/><Cell col=\"2\" text=\"LOTHISTKEY---HIDDEN\"/><Cell col=\"3\" text=\"PRODUCTDEFID---HIDDEN\"/><Cell col=\"4\" text=\"PRODUCTDEFVERSION---HIDDEN\"/><Cell col=\"5\" text=\"PROCESSDEFID---HIDDEN\"/><Cell col=\"6\" text=\"PROCESSDEFVERSION---HIDDEN\"/><Cell col=\"7\" text=\"PROCESSSEGMENTID---HIDDEN\"/><Cell col=\"8\" text=\"PROCESSSEGMENTVERSION---HIDDEN\"/><Cell col=\"9\" text=\"PATHSEQUENCE---HIDDEN\"/><Cell col=\"10\" text=\"WORKCOUNT---HIDDEN\"/><Cell col=\"11\" text=\"공정수순\"/><Cell col=\"12\" text=\"공정명\"/><Cell col=\"13\" text=\"Lot No.\"/><Cell col=\"14\" text=\"AREAID---HIDDEN\"/><Cell col=\"15\" text=\"PREVAREAID---HIDDEN\"/><Cell col=\"16\" text=\"PREVAREANAME---HIDDEN\"/><Cell col=\"17\" text=\"PREVRESOURCEID---HIDDEN\"/><Cell col=\"18\" text=\"PREVRESOURCENAME---HIDDEN\"/><Cell col=\"19\" text=\"자원 ID\" cssclass=\"cell_point\"/><Cell col=\"20\" text=\"자원명\"/><Cell col=\"21\" text=\"확인일\"/><Cell col=\"22\" text=\"확인자\"/><Cell col=\"23\" text=\"LOTHISTKEY---HIDDEN\"/></Band><Band id=\"body\"><Cell text=\"bind:ENTERPRISEID\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:PLANTID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:LOTHISTKEY\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRODUCTDEFID\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRODUCTDEFVERSION\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PROCESSDEFID\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PROCESSDEFVERSION\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:PROCESSSEGMENTVERSION\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:PATHSEQUENCE\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:WORKCOUNT\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:USERSEQUENCE\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:LOTID\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:AREAID\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:PREVAREAID\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:PREVAREANAME\" textAlign=\"left\"/><Cell col=\"17\" text=\"bind:PREVRESOURCEID\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:PREVRESOURCENAME\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:RESOURCEID\" textAlign=\"left\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"show\" expandsize=\"24\" displaytype=\"normal\"/><Cell col=\"20\" text=\"bind:RESOURCENAME\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:CHECKDATE\" textAlign=\"left\"/><Cell col=\"22\" text=\"bind:CHECKUSERNAME\" textAlign=\"left\"/><Cell col=\"23\" text=\"bind:CHECKUSER\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_confirm",null,"32","63","24","20",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("확인");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00",null,"263","20","30","0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00",null,"522","20","30","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"253","63","24","20",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_WF_grdCom");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_01",null,"88","20","30","0",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","380",null,"50","20",null,"1",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,560,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("PCM08700P.xfdl","lib::lib_tom.xjs");
        this.registerScript("PCM08700P.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 치공구 현황 조회
         * 파일명 		: TOM01100M.xfdl
         * 작성자 		: 박현우
         * 작성일 		: 2021.02.01
         *
         * 설  명		: 치공구 현황 조회
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.02.10	박현우   	최초작성
         *---------------------------------------------------------------------------------------
         ****************************************************************************************/

        /**************************************************************************
         * 1. 필수 include
         ***************************************************************************/
        this.executeIncludeScript("lib::lib_tom.xjs"); /*include "lib::lib_tom.xjs"*/;	//TOM 공통 라이브러리 include

        /**************************************************************************
         * 2. FORM 변수 선언 영역
         ***************************************************************************/
        var p_plantId = ""; //Site코드
        var p_lotId = ""; //Lot No
        var p_lotType = ""; //양산구분
        var p_areaId = ""; //작업장
        var p_processSegmentId = ""; //공정ID
        var p_receiptUser = ""; //입고자
        var p_productDefId = ""; //품목ID
        var p_productDefVersion = ""; //품목Ver
        var p_receiptDatePeriodFr = ""; //시작일자
        var p_receiptDatePeriodTo = ""; //종료일자
        var p_yesNo = "";	//확인여부

        var strLotId = ''; //저장전 위치 저장

        this.fv_rtnValue = ""; //Lot No. 선택 팝업화면 리턴값 변수

        var workTime;
        var curTime;

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
        this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	this.p_plantId 				= this.nfn_nvl(this.parent.arg_plantId, "");
        	this.p_lotId 				= this.nfn_nvl(this.parent.arg_lotId, "");
        	this.p_lotType 				= this.nfn_nvl(this.parent.arg_lotType, "");
        	this.p_areaId 				= this.nfn_nvl(this.parent.arg_areaId, "");
        	this.p_processSegmentId 	= this.nfn_nvl(this.parent.arg_processSegmentId, "");
        	this.p_receiptUser 			= this.nfn_nvl(this.parent.arg_receiptUser, "");
        	this.p_productDefId 		= this.nfn_nvl(this.parent.arg_productDefId, "");
        	this.p_productDefVersion 	= this.nfn_nvl(this.parent.arg_productDefVersion, "");
        	this.p_receiptDatePeriodFr 	= this.nfn_nvl(this.parent.arg_receiptDatePeriodFr, "");
        	this.p_receiptDatePeriodTo 	= this.nfn_nvl(this.parent.arg_receiptDatePeriodTo, "");
        	this.p_yesNo 				= this.nfn_nvl(this.parent.arg_yesNo, "");

        	this.fn_initCombo();

        	//this.gfn_Message("DATA 1:: "+this.p_plantId+'/'+this.p_lotId+'/'+this.p_lotType+'/'+this.p_areaId+'/'+this.p_processSegmentId, "", "error", "ok");
        	//this.gfn_Message("DATA 2:: "+this.p_receiptUser+'/'+this.p_productDefId+'/'+this.p_productDefVersion+'/'+this.p_receiptDatePeriodFr+'/'+this.p_receiptDatePeriodTo+'/'+this.p_yesNo, "", "error", "ok");
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
        /*
         * 기능 : 검색 (공정별 배분현황 조회 버튼 클릭시)
         */
        this.fn_search = function (obj, e)
        {
        	this.ds_procSegmDistri.clearData(); //Search Condition Dataset clear
        	this.ds_search.clearData();

        	var dateCurNow = this.tomfn_getCurrentlyDate("yyyyMMddHhMmSs");
        	var strTemp  = this.tomfn_getCurrentlyDate("yyyyMMdd")+this.tomfn_replaceAll(this.workTime,':','');
        	var dateCurNowDate = this.tomfn_getStringToDateFormat(dateCurNow,'yyyyMMddHhMmSs');
        	var strTempDate = this.tomfn_getStringToDateFormat(strTemp,'yyyyMMddHhMmSs');
        	if (dateCurNowDate < strTempDate)
        	{
        		dateCurNowDate = this.tomfn_getStringToDateFormat(dateCurNow,'yyyy-MM-dd',-1);
        		//기준일자가 현재일시 -1
        	}
        	var strStartdate = this.tomfn_getDateToStringFormat(dateCurNowDate,'yyyy-MM-dd')+' '+this.workTime;
        	var strYearMonth = this.tomfn_getDateToStringFormat(dateCurNowDate,'yyyy-MM');
        	var strEnddate = this.tomfn_getDateToStringFormat(dateCurNowDate,'yyyy-MM-dd') +' '+ this.workTime;
        	var strStartMonth = this.tomfn_getDateToStringFormat(dateCurNowDate,'yyyy-MM')+'-01 '+this.workTime;
        	var strEndMonth = this.tomfn_getDateToStringFormat(this.tomfn_addMonth(this.tomfn_getDateToStringFormat(dateCurNowDate,'yyyyMMddHhMmSs'),1),'yyyy-MM')+'-01 '+this.workTime;

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_PLANTID", this.p_plantId);
        	this.ds_search.setColumn(0, "P_PROCESSSEGMENTID", this.p_processSegmentId);
        	this.ds_search.setColumn(0, "P_STARTDATE", strStartdate);
        	this.ds_search.setColumn(0, "P_ENDDATE", strEnddate);
        	this.ds_search.setColumn(0, "P_STARTMONTH", strStartMonth);
        	this.ds_search.setColumn(0, "P_ENDMONTH", strEndMonth);
        	this.ds_search.setColumn(0, "P_YEARMONTH", strYearMonth);
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", "selectOutsourcedDistributionPopup");

        	var sSvcID 			= "selectOutsourcedDistributionPopup";
        	var sController 	= "/pcm08700/selectOutsourcedDistributionPopup.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_procSegmDistri=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 회사별 plant 정보 가져오기 (OnLoad Event)
         */
        this.fn_plantIdInformation = function ()
        {
        	this.ds_plantIdInformation.clearData(); //Search Condition Dataset clear

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_PLANTID", this.p_plantId);
        	this.ds_search.setColumn(0, "SQL_ID", "selectPlantidInformatByCsm");

        	var sSvcID 			= "selectPlantidInformatByCsm";
        	var sController 	= "/pcm08700/selectPlantidInformatByCsm.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_plantIdInformation=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : Lot No목록 조회 (OnLoad Event) -----> 1번째 GRID
         */
        this.fn_lotList = function ()
        {
        	this.ds_lotList.clearData(); //Search Condition Dataset clear
        	this.ds_search.clearData();

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_PLANTID", this.p_plantId); //Site코드
        	this.ds_search.setColumn(0, "P_LOTID", this.p_lotId);	//Lot No
        	this.ds_search.setColumn(0, "P_LOTTYPE", this.p_lotType);	//양산구분
        	this.ds_search.setColumn(0, "P_AREAID", this.p_areaId);	//작업장
        	this.ds_search.setColumn(0, "P_RECEIPTUSER", this.p_receiptUser); //입고자
        	this.ds_search.setColumn(0, "P_PRODUCTDEFID", this.p_productDefId); //품목ID
        	this.ds_search.setColumn(0, "P_PRODUCTDEFVERSION", this.p_productDefVersion); //품목Ver
        	this.ds_search.setColumn(0, "P_RECEIPTDATE_PERIODFR", this.p_receiptDatePeriodFr); //시작일자
        	this.ds_search.setColumn(0, "P_RECEIPTDATE_PERIODTO", this.p_receiptDatePeriodTo); //종료일자
        	this.ds_search.setColumn(0, "P_YESNO", this.p_yesNo);	//확인여부
        	this.ds_search.setColumn(0, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", "selectOutsourceDistributionList");

        	var sSvcID 			= "selectOutsourceDistributionList";
        	var sController 	= "/pcm08700/selectOutsourceDistributionList.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_lotList=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : Lot No별 공정 목록 조회 -----------2번째 grid
         */
        this.fn_segmentList = function ()
        {
        	this.ds_search.clearData();

        	this.ds_search.addRow();
        	this.ds_search.setColumn(0, "P_PLANTID", 			this.ds_lotList.getColumn(this.ds_lotList.rowposition, "PLANTID"));
        	this.ds_search.setColumn(0, "P_LOTHISTKEY", 		this.ds_lotList.getColumn(this.ds_lotList.rowposition, "LOTHISTKEY"));
        	this.ds_search.setColumn(0, "P_LOTID", 				this.ds_lotList.getColumn(this.ds_lotList.rowposition, "LOTID"));
        	this.ds_search.setColumn(0, "P_RECEIPTSEQUENCE", 	this.ds_lotList.getColumn(this.ds_lotList.rowposition, "RECEIPTSEQUENCE"));
        	this.ds_search.setColumn(0, "LANGUAGETYPE", 		this.gf_getLanguageType());
        	this.ds_search.setColumn(0, "SQL_ID", "selectOutsourcedDistributionLotSegmentid");

        	var sSvcID 			= "selectOutsourcedDistributionLotSegmentid";
        	var sController 	= "/pcm08700/selectOutsourcedDistributionLotSegmentid.do";
        	var sInDatasets 	= "INPUT=ds_search";
        	var sOutDatasets 	= "ds_segmentList=output";
        	var sArgs 			= "";
        	sArgs += this.gfn_setParam("", "");

        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 확인
         */
        this.fn_confirm = function (obj, e)
        {
        	if (this.ds_lotList.rowcount < 1)
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	strLotId = this.ds_lotList.getColumn(this.ds_lotList.rowposition, "LOTID");

        	//당당자 Assign
        	if (this.ds_lotList.rowcount>0)
        	{
        		for(var row = 0; row < this.ds_lotList.getRowCount(); row++)
        		{
        			this.ds_lotList.setColumn(row, "CHECKUSER", this.tomfn_getUserId() );
        		}
        	}

        	// -------------------------
        	// 확인
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "updateOutsourcedDistributionCheckSave";
        	var sController 	= "/pcm08700/updateOutsourcedDistributionCheckSave.do";
        	var sInDatasets 	= "INPUT=ds_lotList:A"; //모든 정보를 보냅니다.
        	var sOutDatasets 	= "";
        	var sArgs 			= "";
        	this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        	if (this.ds_segmentList.rowcount < 1)
        	{
        		this.gfn_Message("NoSaveData", null, "warning", "ok");
        		return;
        	}

        	this.ds_segmentList.set_keystring("S:PATHSEQUENCE"); //정렬 변경

        	//당당자 Assign
        	if (this.ds_segmentList.rowcount>0)
        	{
        		for(var row = 0; row < this.ds_segmentList.getRowCount(); row++)
        		{
        			this.ds_segmentList.setColumn(row, "CHECKUSER", this.tomfn_getUserId() );
        		}
        	}

        	// -------------------------
        	// 저장
        	// ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
        	// ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
        	// -------------------------
        	var sSvcID 			= "saveResourceidListByOsp";
        	var sController 	= "/pcm08700/saveResourceidListByOsp.do";
        	var sInDatasets 	= "INPUT=ds_segmentList:A"; //모든 정보를 보냅니다.
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

        /*
         * 기능 : 복사
         */
        this.fn_copy = function(obj,e)
        {
        };

        /**************************************************************************
         * 5. TRANSACTION, CALLBACK 영역
         ***************************************************************************/
        this.fn_callBack = function (trId, errCD, errMsg)
        {
        	if (errCD != 0)
        	{
        		this.gfn_Message("ProcessingError", trId + errMsg, "error", "ok");
        		return;
        	}

        	switch(trId) {
        		case "selectPlantidInformatByCsm":	//초기 WorkTime 구하기 callback
        			if (this.ds_plantIdInformation.rowcount==1)
                    {
        				this.workTime = this.ds_plantIdInformation.getColumn(this.ds_plantIdInformation.rowposition, "WORKTIME");
                    } else {
        				this.workTime = "";
        			}
        			this.fn_search(); //1번째 Grid 조회
        			this.fn_lotList(); //2번째 Grif 조회
        			break;
        		case "selectOutsourcedDistributionPopup":	//1st GRID : 공정별 배분현황
        			if (this.ds_procSegmDistri.rowcount>0)
        			{
        				var dblSendpanelqtymonsum = this.ds_procSegmDistri.getColumn(this.ds_procSegmDistri.rowposition, "SENDPANELQTYMONSUM");
        				var dblSendpanelqtydaysum = this.ds_procSegmDistri.getColumn(this.ds_procSegmDistri.rowposition, "SENDPANELQTYDAYSUM");
        				var dblSendpanelqtymon = this.ds_procSegmDistri.getColumn(this.ds_procSegmDistri.rowposition, "SENDPANELQTYMON");
        				var dblSendpanelqtyday = this.ds_procSegmDistri.getColumn(this.ds_procSegmDistri.rowposition, "SENDPANELQTYDAY");
        				if (dblSendpanelqtymonsum==0 || dblSendpanelqtymon==0)
        				{
        					this.ds_procSegmDistri.setColumn(this.ds_procSegmDistri.rowposition, "SENDPANELQTYMONRATE", 0);
        				}
        				else
        				{
        					var dblSendpanelqtymonRate = Math.Round(dblSendpanelqtymon / dblSendpanelqtymonsum * 100, 2);
        					this.ds_procSegmDistri.setColumn(this.ds_procSegmDistri.rowposition, "SENDPANELQTYMONRATE", dblSendpanelqtymonRate);
        				}
        				if (dblSendpanelqtydaysum==0 || dblSendpanelqtyday==0)
        				{
        					this.ds_procSegmDistri.setColumn(this.ds_procSegmDistri.rowposition, "SENDPANELQTYDAYRATE", 0);
        				}
        				else
        				{
        					var dblSendpanelqtydayRate = Math.Round(dblSendpanelqtyday / dblSendpanelqtydaysum * 100, 2);
        					this.ds_procSegmDistri.setColumn(this.ds_procSegmDistri.rowposition, "SENDPANELQTYDAYRATE", dblSendpanelqtydayRate);
        				}
        			}

        			break;
        		case "selectOutsourceDistributionList":	//2st GRID : 공정별 배분현황
        			this.ds_segmentList.clearData();
        			if (this.ds_lotList.rowcount>0)
        			{
        				this.ds_lotList.set_rowposition(0); //popup 첫 화면에서 조회 하므로 첫row에 위치 시키고 3번째 내역을 구한다.
        				this.fn_segmentList();
        			}
        			break;
        		case "updateOutsourcedDistributionCheckSave":	//2st GRID : 확인 저장 callback
        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장이 완료되었습니다.
        			//해당 위치 복원+해당건Click event
        			var sRow = this.grd_lotList.findRowExpr("LOTID == '"+strLotId+"'");
        			this.ds_lotList.set_rowposition(sRow); //해당위치 복원
        			this.fn_segmentList();
        			break;
        		case "saveResourceidListByOsp":	//3st GRID : 저장 callback
        			this.gfn_Message("SuccessSave", null, "info", "ok"); //저장이 완료되었습니다.
        			this.fn_segmentList();
        			break;
        		default:
        	}
        };


        /**************************************************************************
         * 6. 팝업 호출/콜백
         **************************************************************************/
        this.fn_popupAfter = function(sPopupId, Variant)
        {
        	var rtn = this.fv_rtnValue;
        	if(this.nfn_isNull(rtn)) return;

        	if(sPopupId == "SCH_RESOURCEID_POP")
        	{
        		var rtnArr = rtn.split('^');
        		this.ds_segmentList.setColumn(this.ds_segmentList.rowposition, "AREAID", rtnArr[0]);
        		this.ds_segmentList.setColumn(this.ds_segmentList.rowposition, "RESOURCEID", rtnArr[1]);
        		this.ds_segmentList.setColumn(this.ds_segmentList.rowposition, "RESOURCENAME", rtnArr[2]);
        	}
        }

        /*
         * 기능 : 그리드내 자원ID 버튼 클릭 : '자원정보 조회' 팝업 조회
         */
        this.fn_resourceIdSelectPop = function()
        {
        	var popupId = "SCH_RESOURCEID_POP";
        	var oArg = {};
        	var opts = "width=1000,height=750";

        	oArg.arg_productDefId = this.ds_segmentList.getColumn(this.ds_segmentList.rowposition, "PRODUCTDEFID");
        	oArg.arg_productDefVersion = this.ds_segmentList.getColumn(this.ds_segmentList.rowposition, "PRODUCTDEFVERSION");
        	oArg.arg_processDefId = this.ds_segmentList.getColumn(this.ds_segmentList.rowposition, "PROCESSDEFID");
        	oArg.arg_processDefVersion = this.ds_segmentList.getColumn(this.ds_segmentList.rowposition, "PROCESSDEFVERSION");
        	oArg.arg_processSegmentId = this.ds_segmentList.getColumn(this.ds_segmentList.rowposition, "PROCESSSEGMENTID");
        	oArg.arg_processSegmentVersion = this.ds_segmentList.getColumn(this.ds_segmentList.rowposition, "PROCESSSEGMENTVERSION");
        	oArg.arg_plantId = this.ds_segmentList.getColumn(this.ds_segmentList.rowposition, "PLANTID");

        	//this.gfn_Message("DATA 1:: "+oArg.arg_productDefId+'/'+oArg.arg_productDefVersion+'/'+oArg.arg_processDefId+'/'+oArg.arg_processDefVersion, "", "error", "ok");
        	//this.gfn_Message("DATA 2:: "+oArg.arg_processSegmentId+'/'+oArg.arg_processSegmentVersion+'/'+oArg.arg_plantId, "", "error", "ok");

        	this.gfn_openPopup(popupId,"pcm::PCM08701P.xfdl",oArg,opts);
        };

        /**************************************************************************
         * 7. 기타 함수(화면 로컬 정의)
         **************************************************************************/
        /*
         * 기능 : 조회 조건 Load
         */
        this.fn_initCombo = function ()
        {
        	this.fn_plantIdInformation();
        }

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/

        /*
         * 그리드에서 콤보값이 바뀌었을때 dataset change Event를 바로 호출해주는 함수
         */
        this.grd_segmentList_oncloseup = function(obj,e)
        {
        	this.grd_segmentList.updateToDataset();
        };

        /*
         *	그리드 LOV 조회
         */
        this.grd_segmentList_onexpandup = function(obj,e)
        {
        	if(e.row < 0) return;
        	if (this.nfn_isEqualCol(obj, e.col, "RESOURCEID")) {
        		this.fn_resourceIdSelectPop();
        	}
        };

        this.grd_lotList_oncellclick = function(obj,e)
        {
        	this.fn_segmentList();
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.grd_lotList.addEventHandler("oncellclick",this.grd_lotList_oncellclick,this);
            this.grd_segmentList.addEventHandler("oncloseup",this.grd_segmentList_oncloseup,this);
            this.grd_segmentList.addEventHandler("onexpandup",this.grd_segmentList_onexpandup,this);
            this.btn_confirm.addEventHandler("onclick",this.fn_confirm,this);
            this.btn_save.addEventHandler("onclick",this.fn_save,this);
        };
        this.loadIncludeScript("PCM08700P.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
