(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01800P2");
            this.set_titletext("불량반출");
            this.set_cssclass("form_PopupBg");
            this.set_tooltiptext("DEFECTOUTBOUND");
            if (Form == this.constructor)
            {
                this._setFormPosition(719,470);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_search", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectOutboundList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"SEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCOMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"OUTBOUNDDATE\" type=\"STRING\" size=\"256\"/><Column id=\"OUTBOUNDQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OUTBOUNDUSER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JOINCODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OUTBOUNDQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LEFTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_confirm",null,null,"70","28","95","20",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("저장");
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

            obj = new Static("sta_titleInfo","20","20",null,"31","140",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("불량정보");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("DEFECTINFO");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_defectLotInfo","20","sta_titleInfo:0",null,"69","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_defectInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"155\"/><Column size=\"73\"/><Column size=\"73\"/><Column size=\"73\"/><Column size=\"73\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"불량 코드\" tooltiptext=\"DEFECTCODE\"/><Cell col=\"1\" text=\"불량코드 명\" tooltiptext=\"DEFECTCODENAME\"/><Cell col=\"2\" text=\"품질공정명\" tooltiptext=\"QCSEGMENTNAME\"/><Cell col=\"3\" text=\"불량 수량\" tooltiptext=\"DEFECTQTY\"/><Cell col=\"4\" text=\"반출 수량\" tooltiptext=\"OUTBOUNDQTY\"/><Cell col=\"5\" text=\"잔량\" tooltiptext=\"LEFTQTY\"/><Cell col=\"6\" text=\"UOM\" tooltiptext=\"UOM\"/></Band><Band id=\"body\"><Cell text=\"bind:JOINCODE\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:JOINNAME\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:QCSEGMENTNAME\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"left\"/><Cell col=\"3\" maskeditautoselect=\"true\" maskeditformat=\"#,###,##0\" textAlign=\"right\" text=\"bind:DEFECTQTY\" displaytype=\"mask\"/><Cell col=\"4\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###,##0\" text=\"bind:OUTBOUNDQTY\"/><Cell col=\"5\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###,##0\" text=\"bind:LEFTQTY\"/><Cell col=\"6\" text=\"bind:UNIT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_defectOutboundList","319","grd_defectLotInfo:20",null,"31","291",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_titleOutbound","20","grd_defectLotInfo:20",null,"31","sta_cnt_ds_defectOutboundList:50",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("불량반출");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("DEFECTOUTBOUND");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRowDefectOutboundList","612","grd_defectLotInfo:28",null,"24","78",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow","btn_addRowDefectOutboundList:0","grd_defectLotInfo:28",null,"24","49",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_copyRowDefectOutboundList","btn_delRow:0","grd_defectLotInfo:28",null,"24","20",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_grdCopy");
            obj.set_tooltiptext("GridCopyRow");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","20","120","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_defectOutboundList","20","sta_titleOutbound:0",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_defectOutboundList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"162\"/><Column size=\"315\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"처리일시\" tooltiptext=\"OUTBOUNDDATE\"/><Cell col=\"1\" text=\"반출사유\" tooltiptext=\"OUTBOUNDREASON\"/><Cell col=\"2\" text=\"반출 수량\" tooltiptext=\"OUTBOUNDQTY\"/><Cell col=\"3\" text=\"반출자\" tooltiptext=\"OUTBOUNDUSER\"/></Band><Band id=\"body\"><Cell text=\"bind:OUTBOUNDDATE\" displaytype=\"date\" calendareditformat=\" yyyy-MM-dd HH:mm:ss\" calendardateformat=\" yyyy-MM-dd HH:mm:ss\"/><Cell col=\"1\" text=\"bind:REASONCOMMENT\" maskeditautoselect=\"true\" maskeditformat=\"#,###\" checkboxtruevalue=\"Y\" checkboxfalsevalue=\"N\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"2\" maskeditautoselect=\"true\" maskeditformat=\"#,###,##0\" textAlign=\"right\" text=\"bind:OUTBOUNDQTY\" displaytype=\"mask\" edittype=\"mask\"/><Cell col=\"3\" text=\"bind:OUTBOUNDUSER\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_01","0","204","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00",null,"214","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",719,470,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("QAM01800P2.xfdl","lib::lib_qam.xjs");
        this.addIncludeScript("QAM01800P2.xfdl","lib::lib_bas.xjs");
        this.registerScript("QAM01800P2.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 불량반출(품질관리-불량품 원인판정)
         * 파일명 		: QAM01800P2.xfdl
         * 작성자 		: yanghee.kim
         * 작성일 		: 2021.04.12
         *
         * 설  명		: 86line
         *---------------------------------------------------------------------------------------
         * 변경일		변경자		변경내역
         *---------------------------------------------------------------------------------------
         * 2021.04.12	yanghee.kim   	최초작성
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
        	var rtnValue = this.opener.fv_rtnValue;
        	this.opener.fv_rtnValue = "";

            this.qamfn_setDataset(rtnValue, this.ds_defectInfo, "");
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
            if (!this.gfn_dsIsUpdated(this.ds_defectOutboundList))
            {
                this.gfn_Message("NoSaveData", null, "warning", "ok");
                return;
            }

        	for (var i=0; i<this.ds_defectOutboundList.getRowCount(); i++)
        	{
        		var outboundQty = this.ds_defectOutboundList.getColumn(i, "OUTBOUNDQTY");
        		if (this.nfn_isNull(outboundQty) || nexacro.toNumber(outboundQty) <= 0)
        		{
        			this.gfn_Message("OutboundValidation", null, "warning", "ok"); // 반출수량은 0보다 커야합니다.
        			return;
        		}
        		var outboundUser = this.ds_defectOutboundList.getColumn(i, "OUTBOUNDUSER");
        		if (this.nfn_isNull(outboundUser))
        		{
        			this.gfn_Message("OutboundUserValidation", null, "warning", "ok"); // 반출자가 입력되지않은 행이 있습니다.
        			return;
        		}
        	}

        	var bOK = this.gfn_Message("InfoPopupSave", null, "conf", "yesno");
        	if (!bOK) return;

            // -------------------------
            // 저장
            // ':U' 는 갱신된 내용만을 입력 데이터세트로 보내며, ':A' 는 모든 정보를 보냅니다.
            // ':N' 은 현재 Delete를 제외한 데이터를 Normal 상태로 보냅니다. 지정하지 않는 데이터세트는 Normal로 동작합니다
            // -------------------------
            var sSvcID        = "saveLotDefectOutbound";
            var sController   = "/qam01800/saveLotDefectOutbound.do";
            var sInDatasets   = "INPUT=ds_defectOutboundList:U";
            var sOutDatasets  = "";
            var sArgs         = "";

            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
            this.ds_defectOutboundList.clearData();

        	var nRow = this.ds_search.addRow();
        	this.ds_search.setColumn(nRow, "LOTID",      this.ds_defectInfo.getColumn(this.ds_defectInfo.rowposition, "LOTID"));
        	this.ds_search.setColumn(nRow, "TXNHISTKEY", this.ds_defectInfo.getColumn(this.ds_defectInfo.rowposition, "TXNHISTKEY"));

            var sSvcID        = "selectGetDefectCodeOutboundList";
            var sController   = "/qam01800/selectGetDefectCodeOutboundList.do";
            var sInDatasets   = "INPUT=ds_search";
            var sOutDatasets  = "ds_defectOutboundList=output";
            var sArgs         = "";
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
                if (trId == "saveLotDefectOutbound")
                {
                    this.gfn_Message("SuccessSave", null, "info", "ok");
                    this.fn_close();
                }
        	}
        };

        /**************************************************************************
         * 6. 팝업 시작
         **************************************************************************/



        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/
        /*
         * 기능 : 행추가
         */
        this.fn_addRow = function(obj,e)
        {
            var objDataset = this.ds_defectOutboundList;
            if (objDataset == null) return;
            var nRow = objDataset.addRow();
        	var currRow = this.ds_defectInfo.rowposition;

        	objDataset.set_enableevent(false);
            objDataset.setColumn(nRow,"LOTID",          this.ds_defectInfo.getColumn(currRow, "LOTID"));
            objDataset.setColumn(nRow,"TXNHISTKEY",     this.ds_defectInfo.getColumn(currRow, "TXNHISTKEY"));
            objDataset.setColumn(nRow,"OUTBOUNDDATE",   this.nfn_getCurrentSystemTime(0));
        	objDataset.set_enableevent(true);
        };

        /*
         * 기능 : 행삭제
         */
        this.fn_deleteRow = function(obj,e)
        {
        	if (this.ds_defectOutboundList.rowposition < 0) return;

        	this.ds_defectOutboundList.deleteRow(this.ds_defectOutboundList.rowposition);
        	//반출수량에 따른 총 반출수량과 잔량 계산
        	this.fn_calcOutbound();
        };

        /*
         * 기능 : 행복사
         */
        this.fn_copyRow = function(obj,e)
        {
        	var currow = this.ds_defectOutboundList.rowposition;
        	if(currow < 0) return;

        	this.ds_defectOutboundList.set_enableevent(false);
        	var toRow = this.ds_defectOutboundList.addRow();
        	this.ds_defectOutboundList.copyRow(toRow, this.ds_defectOutboundList, currow);
        	this.ds_defectOutboundList.setColumn(toRow,"OUTBOUNDDATE",   this.nfn_getCurrentSystemTime(0));
        	this.ds_defectOutboundList.setRowType(toRow, Dataset.ROWTYPE_INSERT);
        	this.ds_defectOutboundList.set_enableevent(true);
        	//반출수량에 따른 총 반출수량과 잔량 계산
        	this.fn_calcOutbound();
        };

        /*
         * 기능 : 닫기
         */
        this.fn_close = function(obj,e)
        {
            if (this.gfn_dsIsUpdated(this.ds_defectOutboundList))
            {
        		 var bOk = this.gfn_Message("IsChangedButContinue", null, "conf", "yesno");
        		 if (bOk)
        		 {
        			this.close();
        		 }
            }
        	else
        	{
        		this.close();
        	}
        };

        /*
         * 기능 : 반출수량에 따른 총 반출수량과 잔량 계산
         */
        this.fn_calcOutbound = function ()
        {
        	var totalOutboundQty = 0;
            var leftQty = 0;

        	// 총 반출수량 계산
        	totalOutboundQty = this.ds_defectOutboundList.getSum("OUTBOUNDQTY");

        	var defectQty = this.ds_defectInfo.getColumn(this.ds_defectInfo.rowposition, "DEFECTQTY");

        	// 잔량 계산
        	leftQty = nexacro.toNumber(defectQty) - nexacro.toNumber(totalOutboundQty);

        	if (nexacro.toNumber(totalOutboundQty) > nexacro.toNumber(defectQty))
        	{
        		this.gfn_Message("OutboundGreatThenDefectCount", null, "warning", "ok");
        		this.ds_defectOutboundList.set_enableevent(false);
        		this.ds_defectOutboundList.setColumn(this.ds_defectOutboundList.rowposition, "OUTBOUNDQTY", "");
        		this.ds_defectOutboundList.set_enableevent(true);
        		this.grd_defectOutboundList.setFocus();
        		this.grd_defectOutboundList.setCellPos(this.grd_defectOutboundList.getBindCellIndex("body", "OUTBOUNDQTY"));
        		this.grd_defectOutboundList.showEditor(true);
        		return false;
        	}
        	else
        	{
        		var nRow = this.ds_defectInfo.rowposition;
        		this.ds_defectInfo.set_enableevent(false);
        		this.ds_defectInfo.setColumn(nRow, "OUTBOUNDQTY", totalOutboundQty);
        		this.ds_defectInfo.setColumn(nRow, "LEFTQTY", leftQty);
        		this.ds_defectInfo.set_enableevent(true);
        	}

        	return true;
        };

        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 이벤트 : 불량반출 DataSet 의 Column 값이 변경될 때 발생하는 이벤트입니다.
         */
        this.ds_defectOutboundList_cancolumnchange = function(obj,e)
        {
        	if (e.columnid == "OUTBOUNDQTY")
        	{
        		if (e.newvalue == 0)
        		{
        			this.gfn_Message("OutboundValidation", null, "warning", "ok");
        			return false;
        		}
        	}
        	else if (e.columnid == "OUTBOUNDUSER")
        	{
        		if (this.nfn_isNull(e.newvalue))
        		{
        			this.gfn_Message("OutboundUserValidation", null, "warning", "ok");
        			return false;
        		}
        	}

        	return true;
        };

        /*
         * 이벤트 : 불량반출 DataSet 의 Column 값이 변경된 후 발생하는 이벤트입니다.
         */
        this.ds_defectOutboundList_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "OUTBOUNDQTY")
        	{
        		this.fn_calcOutbound();
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.fn_init,this);
            this.btn_confirm.addEventHandler("onclick",this.fn_save,this);
            this.btn_cancel.addEventHandler("onclick",this.fn_close,this);
            this.btn_close.addEventHandler("onclick",this.fn_close,this);
            this.btn_addRowDefectOutboundList.addEventHandler("onclick",this.fn_addRow,this);
            this.btn_delRow.addEventHandler("onclick",this.fn_deleteRow,this);
            this.btn_copyRowDefectOutboundList.addEventHandler("onclick",this.fn_copyRow,this);
            this.ds_defectOutboundList.addEventHandler("cancolumnchange",this.ds_defectOutboundList_cancolumnchange,this);
            this.ds_defectOutboundList.addEventHandler("oncolumnchanged",this.ds_defectOutboundList_oncolumnchanged,this);
        };
        this.loadIncludeScript("QAM01800P2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
