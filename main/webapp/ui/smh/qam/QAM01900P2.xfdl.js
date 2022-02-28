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
            this.set_titletext("공정순서");
            this.set_cssclass("form_PopupBg");
            this.set_tooltiptext("PATHSEQUENCE");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,581);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LANGUAGETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CANCELLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"REQUESTNO\" type=\"STRING\" size=\"256\"/><Column id=\"VERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cancelReworkRoutingList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"AREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_productRoutingList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"PATHSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"RESOURCENAME\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"DISPLAYSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"STRING\" size=\"256\"/><Column id=\"JOBFLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_top","20","51",null,"32","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("div_WF_detail");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_reasonCancel","359","5",null,"20","529",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("2");
            obj.set_text("취소사유");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("REASONCANCEL");
            this.div_top.addChild(obj.name, obj);

            obj = new Edit("edt_repairLotNo","105","5",null,"20","sta_reasonCancel:30",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("200908F004-1-FG00-001-A01");
            this.div_top.addChild(obj.name, obj);

            obj = new Static("sta_repairLotNo","0","5",null,"20","edt_repairLotNo:5",null,null,null,null,null,this.div_top.form);
            obj.set_taborder("0");
            obj.set_text("Repair Lot No");
            obj.set_cssclass("sta_WF_label");
            obj.set_tooltiptext("Repair Lot No");
            this.div_top.addChild(obj.name, obj);

            obj = new Edit("edt_reasonCancel","434","5","135","20",null,null,null,null,null,null,this.div_top.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_enable("false");
            obj.set_text("200908F004-1-FG00-001-A01");
            this.div_top.addChild(obj.name, obj);

            obj = new Div("div_cancelReworkRouting","50.5%","div_top:20",null,null,"2.00%","58",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_background("");
            obj.set_border("1px solid darkgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_titleInfo","5","0",null,"31","60.04%",null,null,null,null,null,this.div_cancelReworkRouting.form);
            obj.set_taborder("0");
            obj.set_text("재작업 라우팅");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("REWORKROUTING");
            this.div_cancelReworkRouting.addChild(obj.name, obj);

            obj = new Grid("grd_cancelReworkRoutingList","5","96",null,null,"1.20%","5",null,null,null,null,this.div_cancelReworkRouting.form);
            obj.set_taborder("1");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_cancelReworkRoutingList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"2\" text=\"공정ID\" tooltiptext=\"PROCESSSEGMENTID\"/><Cell col=\"3\" text=\"공정 Rev.\" tooltiptext=\"PROCESSSEGMENTVERSION\"/><Cell col=\"4\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTVERSION\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_cancelReworkRouting.addChild(obj.name, obj);

            obj = new Static("label02","5","41",null,"20","360",null,null,null,null,null,this.div_cancelReworkRouting.form);
            obj.set_taborder("2");
            obj.set_text("재작업 라우팅 ID");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("REWORKROUTINGID");
            this.div_cancelReworkRouting.addChild(obj.name, obj);

            obj = new Edit("edt_reworkRoutingId",null,"41","100","20","255",null,null,null,null,null,this.div_cancelReworkRouting.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_cancelReworkRouting.addChild(obj.name, obj);

            obj = new Static("label02_00","218","41",null,"20","150",null,null,null,null,null,this.div_cancelReworkRouting.form);
            obj.set_taborder("4");
            obj.set_text("재작업 라우팅명");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("REWORKROUTINGNAME");
            this.div_cancelReworkRouting.addChild(obj.name, obj);

            obj = new Edit("edt_reworkRoutingName",null,"41","143","20","3",null,null,null,null,null,this.div_cancelReworkRouting.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_cancelReworkRouting.addChild(obj.name, obj);

            obj = new Static("sta_area","5","66",null,"20","360",null,null,null,null,null,this.div_cancelReworkRouting.form);
            obj.set_taborder("6");
            obj.set_text("대상 자원");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("TARGETRESOURCE");
            this.div_cancelReworkRouting.addChild(obj.name, obj);

            obj = new Edit("edt_reworkResource",null,"66","100","20","255",null,null,null,null,null,this.div_cancelReworkRouting.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_cancelReworkRouting.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_cancelReworkRoutingList","240","0",null,"31","85",null,null,null,null,null,this.div_cancelReworkRouting.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_cancelReworkRouting.addChild(obj.name, obj);

            obj = new Div("div_productRouting","20","div_top:20",null,null,"div_cancelReworkRouting:10","58",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_background("");
            obj.set_border("1px solid darkgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_productResource",null,"41","230","20","134",null,null,null,null,null,this.div_productRouting.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.div_productRouting.addChild(obj.name, obj);

            obj = new Static("label02","5","41",null,"20","edt_productResource:0",null,null,null,null,null,this.div_productRouting.form);
            obj.set_taborder("0");
            obj.set_text("자원명");
            obj.set_cssclass("sta_WF_label");
            obj.set_fittocontents("width");
            obj.set_tooltiptext("RESOURCENAME");
            this.div_productRouting.addChild(obj.name, obj);

            obj = new Static("sta_titleInfo","5","0",null,"31","60.04%",null,null,null,null,null,this.div_productRouting.form);
            obj.set_taborder("2");
            obj.set_text("품목 라우팅");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("PRODUCTROUTING");
            this.div_productRouting.addChild(obj.name, obj);

            obj = new Grid("grd_productRoutingList","5","71",null,null,"1.20%","5",null,null,null,null,this.div_productRouting.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_productRoutingList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"110\"/><Column size=\"70\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"공정수순\" tooltiptext=\"USERSEQUENCE\"/><Cell col=\"2\" text=\"공정ID\" tooltiptext=\"PROCESSSEGMENTID\"/><Cell col=\"3\" text=\"공정 Rev.\" tooltiptext=\"PROCESSSEGMENTVERSION\"/><Cell col=\"4\" text=\"공정명\" tooltiptext=\"PROCESSSEGMENTNAME\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:USERSEQUENCE\" textAlign=\"right\"/><Cell col=\"2\" text=\"bind:PROCESSSEGMENTID\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:PROCESSSEGMENTVERSION\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:PROCESSSEGMENTNAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_productRouting.addChild(obj.name, obj);

            obj = new Static("Static02_01","0","31","50","10",null,null,null,null,null,null,this.div_productRouting.form);
            obj.set_taborder("4");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_productRouting.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","0","61","50","10",null,null,null,null,null,null,this.div_productRouting.form);
            obj.set_taborder("5");
            obj.set_text("h10");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.div_productRouting.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_productRoutingList","240","0",null,"31","85",null,null,null,null,null,this.div_productRouting.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            this.div_productRouting.addChild(obj.name, obj);

            obj = new Button("btn_cancel","910",null,"70","28",null,"20",null,null,null,null,this);
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

            obj = new Static("Static02_01_00_01","0","204","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00",null,"214","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","20","83","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("sta_titleInfo","20","20",null,"31","20",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("공정순서");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("PATHSEQUENCE");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,581,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM01900P2.xfdl","lib::lib_qam.xjs");
        this.addIncludeScript("QAM01900P2.xfdl","lib::lib_bas.xjs");
        this.registerScript("QAM01900P2.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 공정순서(품질관리-불량품 폐기취소)
         * 파일명 		: QAM01900P2.xfdl
         * 작성자 		: yanghee.kim
         * 작성일 		: 2021.04.23
         *
         * 설  명		:
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.23	yanghee.kim   	최초작성
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
        	this.fn_formInit();
        	this.fn_search();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
         /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
            this.ds_search.clearData();
        	var nRow = this.ds_search.addRow();

        	this.ds_search.setColumn(nRow, "LANGUAGETYPE", this.gf_getLanguageType());
        	this.ds_search.setColumn(nRow, "LOTID",        this.parent.repairLotNo);
        	this.ds_search.setColumn(nRow, "CANCELLOTID",  this.parent.lotId);
        	this.ds_search.setColumn(nRow, "TXNHISTKEY",   this.parent.txnHistKey);
        	this.ds_search.setColumn(nRow, "REQUESTNO",    this.parent.requestNo);
        	this.ds_search.setColumn(nRow, "VERSION",      "10003");

        	this.ds_productRoutingList.clearData();
        	this.ds_cancelReworkRoutingList.clearData();

            var sSvcID        = "selectDefectCancelReworkRoutingList";
            var sController   = "/qam01900/selectDefectCancelReworkRoutingList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_productRoutingList=output1 ds_cancelReworkRoutingList=output2";
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
        		if (trId == "selectDefectCancelReworkRoutingList")
        		{
        			this.fn_formInit();
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
        	this.div_top.form.edt_reasonCancel.set_value(this.parent.cancelReason);
        	this.div_top.form.edt_repairLotNo.set_value(this.parent.repairLotNo);

        	// 재작업라우팅일때 바인딩
        	if (this.parent.cancelRoutingType == "Rework")
        	{
        		var defId = this.ds_cancelReworkRoutingList.getColumn(0, "PROCESSDEFID") == null ? null : this.ds_cancelReworkRoutingList.getColumn(0, "PROCESSDEFID");
        		var defName = this.ds_cancelReworkRoutingList.getColumn(0, "PROCESSDEFNAME") == null ? null : this.ds_cancelReworkRoutingList.getColumn(0, "PROCESSDEFNAME");

        		this.div_cancelReworkRouting.form.edt_reworkRoutingId.set_value(defId); // 재작업 라우팅ID
        		this.div_cancelReworkRouting.form.edt_routingName.set_value(defName); // 재작업 라우팅명
        		this.div_cancelReworkRouting.form.edt_reworkResource.set_value(this.parent.resourceName); // 재작업 공정 자원명
        		this.div_productRouting.form.edt_productResource.set_value(this.parent.returnResourceName); // 재작업 후 공정 자원명
        	}
        	// 품목라우팅일때 재작업라우팅 그리드 ReadOnly
        	else if (this.parent.cancelRoutingType == "Product")
        	{
        		this.div_productRouting.form.edt_productResource.set_value(this.parent.resourceName); // 돌아올 공정의 자원명
        		this.div_cancelReworkRouting.set_enable(false);
        	}

        	// 품목라우팅일 경우(사용자가 선택한곳을 표시)
        	if (this.parent.cancelRoutingType == "Product")
        	{
        		if (this.ds_productRoutingList.getRowCount() > 0)
        		{
        			for (var i=0; i<this.ds_productRoutingList.getRowCount(); i++)
        			{
        				// ProcessPathID로 비교시 이후 샘플라우팅 로직을 타면 기준정보가 변하기때문에 공정ID와 공정수순으로 비교
        				if (this.ds_productRoutingList.getColumn(i, "PROCESSSEGMENTID")== this.parent.inputSegmentId
        					&& this.ds_productRoutingList.getColumn(i, "USERSEQUENCE") == this.parent.inputUserSequence)
        				{
        					var objGrid = this.div_productRouting.form.grd_productRoutingList;
        					for (var i=0; i < objGridt.getCellCount(); i++)
        					{
        						objGrid.setCellProperty("body", i, "cssclass", "cell_bg_yellow");
        					}
        				}
        			}
        		}
        	}
        	// 재작업라우팅일 경우(재작업 후 사용자가 돌아올 곳을 표시)
        	else if (this.parent.cancelRoutingType == "Rework")
        	{
        		if (this.ds_productRoutingList.getRowCount() > 0)
        		{
        			// ProcessPathID로 비교시 이후 샘플라우팅 로직을 타면 기준정보가 변하기때문에 공정ID와 공정수순으로 비교
        			if (this.ds_productRoutingList.getColumn(i, "PROCESSSEGMENTID")== this.parent.returnProcessSgementId
        				&& this.ds_productRoutingList.getColumn(i, "USERSEQUENCE") == this.parent.returnUserSequence)
        			{
        				var objGrid = this.div_productRouting.form.grd_productRoutingList;
        				for (var i=0; i < objGridt.getCellCount(); i++)
        				{
        					objGrid.setCellProperty("body", i, "cssclass", "cell_bg_yellow");
        				}
        			}
        		}
        	}
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        this.fn_close = function(obj,e)
        {
          this.close();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_cancel.addEventHandler("onclick",this.fn_close,this);
            this.btn_close.addEventHandler("onclick",this.fn_close,this);
        };
        this.loadIncludeScript("QAM01900P2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
