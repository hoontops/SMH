(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("QAM01800P1");
            this.set_cssclass("form_PopupBg");
            this.set_tooltiptext("SHIPMENTINSPLRRDETAILLIST");
            this.set_titletext("불량내역 조정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1110,490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_defectInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"JOINCODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"OUTBOUNDQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"LEFTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"FIRSTLEFTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRMSITE\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTPNLQTY\" type=\"STRING\" size=\"256\"/><Column id=\"ISUNKNOWN\" type=\"STRING\" size=\"256\"/><Column id=\"DEFINETIME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFINEUSER\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUSCODE\" type=\"STRING\" size=\"256\"/><Column id=\"ISCLAIM\" type=\"STRING\" size=\"256\"/><Column id=\"CREATEDTIME\" type=\"STRING\" size=\"256\"/><Column id=\"OCCURREDSTEP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectLotList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("true");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"JOINCODE\" type=\"STRING\" size=\"256\"/><Column id=\"JOINNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTCODENAME\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEFECTQTY\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREAID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONAREANAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTERPRISEID\" type=\"STRING\" size=\"256\"/><Column id=\"PLANTID\" type=\"STRING\" size=\"256\"/><Column id=\"AREAID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSSEGMENTVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"TXNHISTKEY\" type=\"STRING\" size=\"256\"/><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PARENTLOTID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCTDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFID\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSDEFVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PROCESSPATHID\" type=\"STRING\" size=\"256\"/><Column id=\"USERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"QCSEGMENTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONPROCESSSEGMENTNAME\" type=\"STRING\" size=\"256\"/><Column id=\"REASONRESOURCEID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONUSERSEQUENCE\" type=\"STRING\" size=\"256\"/><Column id=\"OCCURREDSTEP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_defectReasonConsumable", this);
            obj._setContents("<ColumnInfo><Column id=\"LOTID\" type=\"STRING\" size=\"256\"/><Column id=\"CONSUMABLELOTID\" type=\"STRING\" size=\"256\"/><Column id=\"REASONCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SPLITCONSUMABLEDEFIDVERSION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_popParam", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"DEFECTCODEID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_confirm",null,null,"70","28","95","20",null,null,null,null,this);
            obj.set_taborder("16");
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

            obj = new Grid("grd_defectLotInfo","20","sta_titleInfo:0",null,null,"20","320",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_defectInfo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"72\"/><Column size=\"72\"/><Column size=\"72\"/><Column size=\"72\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"6\" text=\"불량정보\" tooltiptext=\"DEFECTINFO\"/><Cell col=\"6\" colspan=\"6\" text=\"원인공정\" tooltiptext=\"REASONSEGMENT\"/><Cell row=\"1\" text=\"불량 코드\" tooltiptext=\"DEFECTCODE\"/><Cell row=\"1\" col=\"1\" text=\"불량코드 명\" tooltiptext=\"DEFECTCODENAME\"/><Cell row=\"1\" col=\"2\" text=\"불량 수량\" tooltiptext=\"DEFECTQTY\"/><Cell row=\"1\" col=\"3\" text=\"반출 수량\" tooltiptext=\"OUTBOUNDQTY\"/><Cell row=\"1\" col=\"4\" text=\"잔량\" tooltiptext=\"LEFTQTY\"/><Cell row=\"1\" col=\"5\" text=\"UOM\" tooltiptext=\"UOM\"/><Cell row=\"1\" col=\"6\" text=\"원인품목\" tooltiptext=\"REASONPRODUCT\"/><Cell row=\"1\" col=\"7\" text=\"Rev\" tooltiptext=\"Rev\"/><Cell row=\"1\" col=\"8\" text=\"원인 LOTID\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell row=\"1\" col=\"9\" text=\"원인공정\" tooltiptext=\"REASONSEGMENT\"/><Cell row=\"1\" col=\"10\" text=\"원인작업장\" tooltiptext=\"REASONAREA\"/><Cell row=\"1\" col=\"11\" text=\"원인 Site\" tooltiptext=\"REASONPLANT\"/></Band><Band id=\"body\"><Cell text=\"bind:JOINCODE\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:JOINNAME\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"left\"/><Cell col=\"2\" maskeditautoselect=\"true\" maskeditformat=\"#,###,##0\" textAlign=\"right\" text=\"bind:DEFECTQTY\" displaytype=\"mask\"/><Cell col=\"3\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###,##0\" text=\"bind:OUTBOUNDQTY\"/><Cell col=\"4\" displaytype=\"mask\" textAlign=\"right\" maskeditformat=\"#,###,##0\" text=\"bind:LEFTQTY\"/><Cell col=\"5\" text=\"bind:UNIT\"/><Cell col=\"6\" text=\"bind:REASONCONSUMABLEDEFNAME\"/><Cell col=\"7\" text=\"bind:REASONCONSUMABLEDEFVERSION\"/><Cell col=\"8\" text=\"bind:REASONCONSUMABLELOTID\"/><Cell col=\"9\" text=\"bind:REASONSEGMENTNAME\"/><Cell col=\"10\" text=\"bind:REASONAREANAME\"/><Cell col=\"11\" text=\"bind:REASONPLANTID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_cnt_ds_defectLotList","370","grd_defectLotInfo:20",null,"31","500",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_usedecorate("true");
            obj.set_padding("5px 0px 0px");
            obj.set_text("Count : <fc v=\"#f31d24\">0</fc>");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta_titleOutbound","20","grd_defectLotInfo:20",null,"31","sta_cnt_ds_defectLotList:50",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("불량내역");
            obj.set_cssclass("sta_WF_subTitle");
            obj.set_tooltiptext("SHIPMENTINSPLRRDETAILLIST");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addRowDefectOutboundList",null,"grd_defectLotInfo:28","29","24","49",null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_grdAdd");
            obj.set_tooltiptext("GridAdd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delRow","btn_addRowDefectOutboundList:0","grd_defectLotInfo:28","29","24",null,null,null,null,null,null,this);
            obj.set_initvalueid("x");
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_grdDel");
            obj.set_tooltiptext("GridDelete");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","20","170","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("h20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_defectLotList","20","sta_titleOutbound:0",null,null,"20","58",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_autoenter("select");
            obj.set_cssclass("grd_sub");
            obj.set_binddataset("ds_defectLotList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"24\"/><Column size=\"180\"/><Column size=\"72\"/><Column size=\"200\"/><Column size=\"210\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"불량 코드\" tooltiptext=\"DEFECTCODE\"/><Cell col=\"2\" text=\"불량코드 명\" tooltiptext=\"DEFECTCODENAME\"/><Cell col=\"3\" text=\"불량 수량\" tooltiptext=\"DEFECTQTY\"/><Cell col=\"4\" text=\"원인품목\" tooltiptext=\"REASONCONSUMABLEDEFIDVERSION\"/><Cell col=\"5\" text=\"원인 LOTID\" tooltiptext=\"REASONCONSUMABLELOTID\"/><Cell col=\"6\" text=\"원인공정\" tooltiptext=\"REASONPROCESSSEGMENTID\"/><Cell col=\"7\" text=\"원인작업장\" tooltiptext=\"REASONAREAID\"/><Cell col=\"8\" text=\"원인 Site\" tooltiptext=\"REASONPLANT\"/></Band><Band id=\"body\"><Cell text=\"bind:JOINCODE\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"center\" expandimage=\"url(&apos;theme://images/grd_expand.png&apos;)\" expandshow=\"expr:dataset.getRowType(currow) ==2 ? &apos;show&apos;:&apos;hide&apos;\" expandsize=\"24\" edittype=\"text\" editmaxlength=\"6\"/><Cell col=\"1\" expandimage=\"url(&apos;theme://images/btn_eraser.png&apos;)\" expandsize=\"22\" expandshow=\"show\" text=\"bind:X_T_BTN\"/><Cell col=\"2\" text=\"bind:JOINNAME\" maskeditautoselect=\"true\" maskeditformat=\"#,###,###,##0.######\" textAlign=\"left\"/><Cell col=\"3\" maskeditautoselect=\"true\" maskeditformat=\"#,###,##0\" textAlign=\"right\" text=\"bind:DEFECTQTY\" displaytype=\"mask\" edittype=\"mask\"/><Cell col=\"4\" text=\"bind:REASONCONSUMABLEDEFNAME\" expandimage=\"url(&apos;theme://images/cmb_drop_N.png&apos;)\" expandsize=\"24\" expandshow=\"show\"/><Cell col=\"5\" text=\"bind:REASONCONSUMABLELOTID\" displaytype=\"combotext\" edittype=\"expr:comp.parent.nfn_isNull(dataset.getColumn(currow, &quot;REASONCONSUMABLEDEFNAME&quot;) ) == true ? &apos;none&apos;:&apos;combo&apos;\" combodataset=\"ds_defectReasonConsumable\" combocodecol=\"CONSUMABLELOTID\" combodatacol=\"CONSUMABLELOTID\"/><Cell col=\"6\" text=\"bind:REASONPROCESSSEGMENTNAME\" expandimage=\"url(&apos;theme://images/cmb_drop_N.png&apos;)\" expandshow=\"expr:comp.parent.nfn_isNull(dataset.getColumn(currow, &quot;REASONCONSUMABLELOTID&quot;) ) == true ? &apos;hide&apos;:&apos;show&apos;\" expandsize=\"24\"/><Cell col=\"7\" text=\"bind:REASONAREANAME\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:REASONPLANTID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_01","0","204","20","84",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00_00",null,"214","20","84","0",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("w\r\n20");
            obj.set_visible("false");
            obj.set_cssclass("guideTip");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_reason","549","481","500","127",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("aqua");
            obj.set_url("qam::QAM01800P6.xfdl");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_process","-2","482","490","210",null,null,null,null,null,null,this);
            obj.set_text("pdv_00");
            obj.set_visible("false");
            obj.set_url("qam::QAM01800P7.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1110,490,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","qam::QAM01800P6.xfdl");
            this._addPreloadList("fdl","qam::QAM01800P7.xfdl");
        };
        
        // User Script
        this.addIncludeScript("QAM01800P1.xfdl","lib::lib_qam.xjs");
        this.addIncludeScript("QAM01800P1.xfdl","lib::lib_bas.xjs");
        this.registerScript("QAM01800P1.xfdl", function() {
        /***************************************************************************************
         * 시스템명 	: IFC MES시스템
         * 업무명 		: 품질관리>>불량품 원인판정>>불량내역조정
         * 파일명 		: QAM01800P1.xfdl
         * 작성자 		: yanghee.kim
         * 작성일 		: 2021.04.12
         *
         * 설  명		:
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
        this.fv_popChange = false; //점검항목 팝업창에서 변경여부

        /**************************************************************************
         * 3. FORM LOAD
         ***************************************************************************/
         this.fn_init = function (obj, e)
        {
        	this.nfn_formInit(obj);

        	//불량 LOT별 불량코드 정보를 불량정보에 셋팅
        	var rtnValue = this.opener.fv_rtnValue;
        	this.opener.fv_rtnValue = "";
        	this.qamfn_setDataset(rtnValue, this.ds_defectInfo, "");

        	if (this.ds_defectInfo.rowcount > 0)
        	{
        		this.ds_defectInfo.set_enableevent(false);
        		this.ds_defectInfo.setColumn(0, "FIRSTLEFTQTY", this.ds_defectInfo.getColumn(0, "LEFTQTY"));
        		this.ds_defectInfo.set_enableevent(true);
        	}

        	//원인품목, 원인공정 POPUP DIV Call 및 원인 LOT ID Search
        	var parentLotId = this.ds_defectInfo.getColumn(this.ds_defectInfo.rowposition, "PARENTLOTID");

        	this.pdv_reason.form.ds_reasonConsumable.clearData();
        	this.pdv_reason.form.fn_searchReasonConsumable(parentLotId, "10003");

        	this.pdv_process.form.ds_defectReasonProcesssegment.clearData();
        	this.pdv_process.form.fn_searchReasonProcesssegment(parentLotId, "10003");

        	this.fn_searchDefectReasonConsumable();
        };

        /**************************************************************************
         * 4. 공통버튼영역 (함수 삭제금지!!!!)
         ***************************************************************************/
         /*
         * 기능 : 저장
         */
        this.fn_save = function (obj, e)
        {
            if (!this.gfn_dsIsUpdated(this.ds_defectLotList))
            {
                this.gfn_Message("NoSaveData", null, "warning", "ok");
                return;
            }

        //  checkpoint 2021.06.03
        //   //동일 Defectcode 체크
        // 	if(!this.basfn_checkGridDup(this.ds_defectLotList
        // 								, "JOINCODE"
        // 								, "SameDefectCodeError")){ return;}

        	for (var i=0; i<this.ds_defectLotList.getRowCount(); i++)
        	{

        		var joinCode = this.ds_defectLotList.getColumn(i, "JOINCODE");
        		if (this.nfn_isNull(joinCode))
        		{
        			this.gfn_Message("NoDefectCode", null, "warning", "ok");
        			return;
        		}
        		else if (joinCode.length != 6)
        		{
        			this.gfn_Message("SelectionPopupData", null, "warning", "ok");
        			return;
        		}

        		var defectCode = this.ds_defectLotList.getColumn(i, "DEFECTCODE");
        		if (this.nfn_isNull(defectCode))
        		{
        			this.gfn_Message("SelectionPopupData", null, "warning", "ok");
        			return;
        		}

        		var defectQty = this.ds_defectLotList.getColumn(i, "DEFECTQTY");
        		if (this.nfn_isNull(defectQty) || nexacro.toNumber(defectQty) <= 0)
        		{
        			this.gfn_Message("DefectQtyValidation", null, "warning", "ok");
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
            var sSvcID        = "saveLotDefectMakeup";
            var sController   = "/qam01800/saveLotDefectMakeup.do";
            var sInDatasets   = "INPUT1=ds_defectInfo:A INPUT2=ds_defectLotList:U";
            var sOutDatasets  = "";
            var sArgs         = "";
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 검색
         */
        this.fn_search = function (obj, e)
        {
        };

         /*
          * 기능 : 원인 LOITID 조회
          */
        this.fn_searchDefectReasonConsumable = function ()
        {
        	this.ds_defectReasonConsumable.clearData();     //불량(폐기)처리 - 원인 LOTID

            var sSvcID        = "selectGetDefectReasonConsumableLot";
            var sController   = "/qampopup/selectGetDefectReasonConsumableLot.do";
            var sInDatasets   = "";
            var sOutDatasets  = "ds_defectReasonConsumable=output";
        	var sArgs         = "";
        		sArgs        += this.gfn_setParam("LOTID",         this.ds_defectInfo.getColumn(this.ds_defectInfo.rowposition, "PARENTLOTID"));
                sArgs        += this.gfn_setParam("VERSION",       "10003");
            this.gfn_transaction(sSvcID, sController, sInDatasets, sOutDatasets, sArgs);
        };

        /*
         * 기능 : 불량내역 행추가
         */
        this.fn_addRow = function(obj,e)
        {
            var objDataset = this.ds_defectLotList;
            if (objDataset == null) return;
            var nRow = objDataset.addRow();
        	var currRow = this.ds_defectInfo.rowposition;
        	objDataset.set_enableevent(false);
            objDataset.setColumn(nRow,"ENTERPRISEID",          this.ds_defectInfo.getColumn(currRow, "ENTERPRISEID"));
            objDataset.setColumn(nRow,"PLANTID",               this.ds_defectInfo.getColumn(currRow, "PLANTID"));
            objDataset.setColumn(nRow,"AREAID",                this.ds_defectInfo.getColumn(currRow, "AREAID"));
            objDataset.setColumn(nRow,"PRODUCTDEFID",          this.ds_defectInfo.getColumn(currRow, "PRODUCTDEFID"));
            objDataset.setColumn(nRow,"PRODUCTDEFVERSION",     this.ds_defectInfo.getColumn(currRow, "PRODUCTDEFVERSION"));
            objDataset.setColumn(nRow,"PROCESSDEFID",          this.ds_defectInfo.getColumn(currRow, "PROCESSDEFID"));
            objDataset.setColumn(nRow,"PROCESSDEFVERSION",     this.ds_defectInfo.getColumn(currRow, "PROCESSDEFVERSION"));
            objDataset.setColumn(nRow,"PROCESSPATHID",         this.ds_defectInfo.getColumn(currRow, "PROCESSPATHID"));
            objDataset.setColumn(nRow,"USERSEQUENCE",          this.ds_defectInfo.getColumn(currRow, "USERSEQUENCE"));
            objDataset.setColumn(nRow,"PROCESSSEGMENTID",      this.ds_defectInfo.getColumn(currRow, "PROCESSSEGMENTID"));
            objDataset.setColumn(nRow,"PROCESSSEGMENTVERSION", this.ds_defectInfo.getColumn(currRow, "PROCESSSEGMENTVERSION"));
            objDataset.setColumn(nRow,"LOTID",                 this.ds_defectInfo.getColumn(currRow, "LOTID"));
            objDataset.setColumn(nRow,"PARENTLOTID",           this.ds_defectInfo.getColumn(currRow, "PARENTLOTID"));
            objDataset.setColumn(nRow,"TXNHISTKEY",            this.ds_defectInfo.getColumn(currRow, "TXNHISTKEY"));
        	objDataset.setColumn(nRow,"CREATEDTIME",           this.ds_defectInfo.getColumn(currRow, "CREATEDTIME"));
        	objDataset.setColumn(nRow,"OCCURREDSTEP",          this.ds_defectInfo.getColumn(currRow, "OCCURREDSTEP"));
        	objDataset.set_enableevent(true);
        };

        /*
         * 기능 : 불량내역 행삭제
         */
        this.fn_deleteRow = function(obj,e)
        {
        	if (this.ds_defectLotList.rowposition < 0) return;

        	this.ds_defectLotList.deleteRow(this.ds_defectLotList.rowposition);
        	this.fn_calcOutbound();
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
                if (trId == "saveLotDefectMakeup")
                {
                    this.gfn_Message("SuccessSave", null, "info", "ok");
        			this.fn_close();
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

            oArg.arg_type = "B";
            oArg.arg_popupCd = popId;
            oArg.arg_popupNm = "";
            oArg.arg_paramCols = "";
            oArg.arg_paramValues = "";
            oArg.arg_searchStr = "";

            if(popupId == "SRCH_DEFECT230")    /*그리드-불량코드*/
            {
        		oArg.arg_type        = "BA";
        		oArg.arg_paramCols   = "LANGUAGETYPE";
        		oArg.arg_paramValues = this.gf_getLanguageType();
                oArg.arg_rtnCols     = "JOINCODE|JOINNAME|DEFECTCODE|QCSEGMENTID";
        		var joinCode = this.ds_defectLotList.getColumn(this.ds_defectLotList.rowposition, "JOINCODE");
        		oArg.arg_searchStr   =  this.nfn_isNull(joinCode)? "1=1" : "DEFECTCODEID="+joinCode;
            }

             this.gfn_openPopup(popupId,"cmd::CMSA00100P.xfdl",oArg,opts);
        };

        //팝업 결과 리턴
        this.fn_popupAfter = function(sPopupId, Variant)
        {
            var rtn = this.fv_rtnValue;
            if(this.nfn_isNull(rtn)) return;

            if (sPopupId == "SRCH_DEFECT230")   /*그리드-불량코드*/
            {
                this.fv_popChange = true;
        		var nRow = this.ds_defectLotList.rowposition;
        		this.ds_defectLotList.set_enableevent(false);
        		this.ds_defectLotList.setColumn(nRow, "JOINCODE", rtn[0]);
        		this.ds_defectLotList.setColumn(nRow, "JOINNAME", rtn[1]);
        		this.ds_defectLotList.setColumn(nRow, "DEFECTCODE", rtn[2]);
        		this.ds_defectLotList.setColumn(nRow, "QCSEGMENTID", rtn[3]);
        		this.ds_defectLotList.set_enableevent(true);
            }
        };


        /**************************************************************************
         * 7. 기타 함수 시작
         **************************************************************************/
        this.fn_close = function(obj,e)
        {
            if (this.gfn_dsIsUpdated(this.ds_defectLotList))
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
         * 기능 : Grid 에서 Body 영역의  원인품목 Cell 을 클릭했을 때 발생하는 이벤트입니다.
         *        QAM01800P6.xfdl에서 호출
         */
        this.fn_setReasonConsumbaleInfo = function (pConsumableDefId, pConsumableDefName)
        {
        	this.ds_defectLotList.setColumn(this.ds_defectLotList.rowposition, "REASONCONSUMABLEDEFID", pConsumableDefId);
        	this.ds_defectLotList.setColumn(this.ds_defectLotList.rowposition, "REASONCONSUMABLEDEFNAME", pConsumableDefName);
        };

        /*
         * 기능 : Grid 에서 Body 영역의 원인공정 Cell 을 클릭했을 때 발생하는 이벤트입니다.
         *        QAM01800P7.xfdl에서 호출
         */
        this.fn_setDefectProcesssegmentInfo = function (pProcessSegmentId, pProcessSgmentName)
        {
        	this.ds_defectLotList.setColumn(this.ds_defectLotList.rowposition, "REASONPROCESSSEGMENTID", pProcessSegmentId);
        	this.ds_defectLotList.setColumn(this.ds_defectLotList.rowposition, "REASONPROCESSSEGMENTNAME", pProcessSgmentName);
        };


        /*
         * 기능 : 불량수량이 변경될 경우 재계산
         */
        this.fn_calcOutbound = function ()
        {
        	var currRow = this.ds_defectInfo.rowposition;

        	// DB에 저장되있는 잔량값
        	var leftQty = this.ds_defectInfo.getColumn(currRow, "FIRSTLEFTQTY");

        	// 새로생긴 불량수량의 Total값
        	var totalDefectCount = 0;

        	for (var i=0; i < this.ds_defectLotList.getRowCount(); i++)
        	{
        	    var defectQty = this.ds_defectLotList.getColumn(i, "DEFECTQTY");
        		if (this.nfn_isNull(defectQty))
        		{
        			return false;
        		}
        		totalDefectCount = nexacro.toNumber(totalDefectCount) + nexacro.toNumber(defectQty);
        	}

        	if (nexacro.toNumber(totalDefectCount) > nexacro.toNumber(leftQty))
            {
        	    this.gfn_Message("DefectCountGreatThenLeftQty", null, "warning", "ok");
        		this.ds_defectLotList.set_enableevent(false);
        		this.ds_defectLotList.setColumn(this.ds_defectLotList.rowposition, "DEFECTQTY", "");
        		this.ds_defectLotList.set_enableevent(true);
        		this.grd_defectLotList.setFocus();
        		this.grd_defectLotList.setCellPos(this.grd_defectLotList.getBindCellIndex("body", "DEFECTQTY"));
        		this.grd_defectLotList.showEditor(true);
        		return false;
        	}
        	else
        	{
        		var leftQty = nexacro.toNumber(leftQty) - nexacro.toNumber(totalDefectCount);
        		this.ds_defectInfo.set_enableevent(false);
        		this.ds_defectInfo.setColumn(currRow, "LEFTQTY", nexacro.toNumber(leftQty));
        		this.ds_defectInfo.set_enableevent(true);
        	}
        	return true;
        };
        /**************************************************************************
         * 8. 이벤트
         ***************************************************************************/
        /*
         * 이벤트 : 불량정보 그리드 더블클릭시 불량내역에 행추가
         */
        this.fn_gridOncelldblclick = function(obj,e)
        {
        	this.ds_defectLotList.set_enableevent(false);
        	var currRow = this.ds_defectInfo.rowposition;
        	var nRow = this.ds_defectLotList.addRow();

        	this.ds_defectLotList.copyRow(nRow, this.ds_defectInfo, currRow);
        	this.ds_defectLotList.setColumn(nRow, "DEFECTQTY", 0);
        	//this.ds_defectLotList.setColumn(nRow, "TXNHISTKEY", "");
        	this.ds_defectLotList.setColumn(nRow, "REASONAREAID", "");
        	this.ds_defectLotList.setColumn(nRow, "REASONAREANAME", "");
        	this.ds_defectLotList.setColumn(nRow, "REASONCONSUMABLEDEFID", "");
        	this.ds_defectLotList.setColumn(nRow, "REASONCONSUMABLEDEFIDVERSION", "");
        	this.ds_defectLotList.setColumn(nRow, "REASONCONSUMABLEDEFVERSION", "");
        	this.ds_defectLotList.setColumn(nRow, "REASONCONSUMABLEDEFNAME", "");
        	this.ds_defectLotList.setColumn(nRow, "REASONCONSUMABLELOTID", "");
        	this.ds_defectLotList.setColumn(nRow, "REASONPLANTID", "");
        	this.ds_defectLotList.setColumn(nRow, "REASONAREAID", "");
        	this.ds_defectLotList.setColumn(nRow, "REASONAREANAME", "");
        	this.ds_defectLotList.setColumn(nRow, "REASONPROCESSSEGMENTID", "");
        	this.ds_defectLotList.setColumn(nRow, "REASONPROCESSSEGMENTNAME", "");
        	//2021.05.24 TOBE Add
        	this.ds_defectLotList.setColumn(nRow, "REASONRESOURCEID", "");
        	this.ds_defectLotList.setColumn(nRow, "REASONUSERSEQUENCE", "");
        	this.ds_defectLotList.set_enableevent(true);
        };

        /*
         * 이벤트 : 불량내역 DataSet 의 Column 값이 변경될 때 발생하는 이벤트입니다.
         */
        this.ds_defectLotList_cancolumnchange = function(obj,e)
        {
        	// 원인LOTID 클릭시 원인품목이 선택되지 않았다면 ReadOnly
        	if (e.columnid == "REASONCONSUMABLELOTID")
        	{
        		if (this.nfn_isNull(obj.getColumn(e.row, "REASONCONSUMABLEDEFNAME")))
        		{
        			return false;
        		}
        	}

        	// 원인공정 클릭시 원인품목 또는 원인자재가 선택되지 않았다면 ReadOnly
        	if (e.columnid == "REASONPROCESSSEGMENTNAME")
        	{
        		if (   this.nfn_isNull(obj.getColumn(e.row, "REASONCONSUMABLEDEFNAME"))
        		    || this.nfn_isNull(obj.getColumn(e.row, "REASONCONSUMABLELOTID")))
        		{
        			return false;
        		}
        	}

        	// 원인작업장 클릭시 원인품목 또는 원인자재 또는 원인공정이 선택되지 않았다면 ReadOnly
        	if (e.columnid == "REASONAREAID")
        	{
        		if (   this.nfn_isNull(obj.getColumn(e.row, "REASONCONSUMABLEDEFNAME"))
        		    || this.nfn_isNull(obj.getColumn(e.row, "REASONCONSUMABLELOTID"))
        			|| this.nfn_isNull(obj.getColumn(e.row, "REASONPROCESSSEGMENTNAME")))
        		{
        			return false;
        		}
        	}
        	//불량수량은 0이상 Validation
        	if (e.columnid == "DEFECTQTY")
        	{
        		if (nexacro.toNumber(e.newvalue) == 0)
        		{
        			this.gfn_Message("", null, "warning", "ok"); //"불량수량은 0상이어야 합니다."
        			return false;
        		}
        	}

        	return true;
        };

        /*
         * 이벤트 : 불량내역 DataSet 의 Column 값이 변경된 후 발생하는 이벤트입니다.
         */
        this.ds_defectLotList_oncolumnchanged= function(obj,e)
        {
        	// 불량수량이 입력됬을땐 수량체크 및 계산
        	if (e.columnid == "DEFECTQTY")
        	{
        	    if (!this.fn_calcOutbound(e.row)) return;
        	}

        	// 원인 품목 ID, Version 세팅
        	if (e.columnid == "REASONCONSUMABLEDEFNAME")
         	{
        		var nRow = obj.rowposition;
        		obj.set_enableevent(false);
        		obj.setColumn(nRow, "REASONCONSUMABLELOTID", "");
        		obj.setColumn(nRow, "REASONSEGMENTID", "");
        		obj.setColumn(nRow, "REASONAREAID", "");
        		obj.setColumn(nRow, "REASONPROCESSSEGMENTNAME", "");

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
        		var cboRow = this.ds_defectReasonConsumable.findRow("CONSUMABLELOTID", e.newvalue);
        		var consumableDefIdVersion = this.ds_defectReasonConsumable.getColumn(cboRow, "REASONCONSUMABLEDEFIDVERSION");
        		var consumableLotId = this.ds_defectReasonConsumable.getColumn(cboRow, "CONSUMABLELOTID");
        		this.pdv_process.form.ds_defectReasonProcesssegment.filter("");
        		this.pdv_process.form.ds_defectReasonProcesssegment.filter("REASONCONSUMABLEDEFIDVERSION =='" + consumableDefIdVersion +"' && REASONCONSUMABLELOTID =='" + consumableLotId +"'");
        	}

        	// 원인공정 선택시 원인작업장 및 원인 Site 세팅
        	if (e.columnid == "REASONPROCESSSEGMENTNAME")
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
        		var resourceId = this.pdv_process.form.ds_defectReasonProcesssegment.getColumn(cboRow, "RESOURCEID");
        		var userSequence = this.pdv_process.form.ds_defectReasonProcesssegment.getColumn(cboRow, "USERSEQUENCE");

        		obj.set_enableevent(false);
        		obj.setColumn(nRow, "REASONAREAID", areaId);
        		obj.setColumn(nRow, "REASONAREANAME", areaName);
        		obj.setColumn(nRow, "REASONPLANTID", plantId);
        		obj.setColumn(nRow, "REASONRESOURCEID", resourceId);
        		obj.setColumn(nRow, "REASONUSERSEQUENCE", userSequence);
        		obj.set_enableevent(true);
        	}
        };

        /*
         * 이벤트 : Grid 에 표시되었던 Combo 아이템 리스트 또는 팝업달력이 닫힐 때 발생하는 이벤트입니다.
         */
        this.grd_defectLotList_oncloseup = function(obj,e)
        {
            this.grd_defectLotList.updateToDataset();
        };

        /*
         * 이벤트 : Cell 에 표시된 확장버튼에서 눌렸던 마우스 왼쪽버튼을 떼었을 때 발생하는 이벤트입니다.
         */
        this.grd_defectLotList_onexpandup = function(obj,e)
        {
        	if (e.cell == obj.getBindCellIndex("body", "X_T_BTN"))
        	{
        		this.ds_defectLotList.set_enableevent(false);
        		this.ds_defectLotList.setColumn(e.row, "JOINCODE", "");
        		this.ds_defectLotList.setColumn(e.row, "JOINNAME", "");
        		this.ds_defectLotList.setColumn(e.row, "DEFECTCODE", "");
        		this.ds_defectLotList.setColumn(e.row, "QCSEGMENTID", "");
        		this.ds_defectLotList.set_enableevent(true);
        	}
        	else if (e.cell == obj.getBindCellIndex("body", "JOINCODE")) //불량코드
            {
        		this.fn_openPop("SRCH_DEFECT230","P00230");
        	}
        	else if (e.cell == obj.getBindCellIndex("body", "REASONCONSUMABLEDEFNAME")) //원인품목
        	{
        		var arrPos = obj.getCellRect(e.row, e.cell);
        		var nx = nexacro.toNumber(arrPos.left);
        		var ny = nexacro.toNumber(arrPos.bottom);
        		this.pdv_reason.trackPopupByComponent(obj,nx,ny); // ComboBox펼치기
        	}
        	else if (e.cell == obj.getBindCellIndex("body", "REASONPROCESSSEGMENTNAME")) //원인공정
        	{
        		var arrPos = obj.getCellRect(e.row, e.cell);
        		var nx = nexacro.toNumber(arrPos.left);
        		var ny = nexacro.toNumber(arrPos.bottom);
        		this.pdv_process.trackPopupByComponent(obj,nx,ny); // ComboBox펼치기
        	}
        };

        /*
         * 이벤트 : 불량내역 DataSet 의 데이터가 Insert, Delete, Update 되거나 Row 의 위치, 상태 등이 변경될 때 마지막에 발생하는 이벤트입니다.
         */
        this.ds_defectLotList_onvaluechanged = function(obj,e)
        {
        	if((e.oldvalue != e.newvalue || !this.gfn_isNull(obj.getColumn(e.newvalue, "DEFECTCODE"))) && e.columnid == "JOINCODE")
        	{
        		if(this.gfn_isNull(e.newvalue) ||e.newvalue.length != 6)
        		{
        			obj.setColumn(e.row, "JOINNAME", "");
        			obj.setColumn(e.row, "DEFECTCODE", "");
        			obj.setColumn(e.row, "QCSEGMENTID", "");
        		}
        		else
        		{
        			if (this.fv_popChange){
        				this.fv_popChange = false;
        				return;
        			}

        			this.ds_popParam.clearData();
        			this.ds_popParam.addRow();
        			this.ds_popParam.setColumn(0, "DEFECTCODEID", e.newvalue);

        			var popupCd = "P00230";
        			var sParamDs = "ds_popParam";
        			var sRtnCols = "JOINCODE|JOINNAME|DEFECTCODE|QCSEGMENTID";
        			var sGridCols = "JOINCODE|JOINNAME|DEFECTCODE|QCSEGMENTID";

        			obj.set_enableevent(false);
        			this.nfn_setCompsCommomPoupGrid(this.grd_defectLotList, popupCd, sParamDs, sRtnCols, sGridCols, e.row);
        		    obj.set_enableevent(true);

        			if(this.gfn_isNull(obj.getColumn(e.row, e.columnid))){
        				this.gfn_Message("InputCorrectSomething", this.nfn_getDictionarynameUpper("DEFECTCODE"), "warning","ok");
        				obj.set_enableevent(false);
        				obj.setColumn(e.row, e.columnid, e.oldvalue);
        				obj.set_enableevent(true);
        				return;
        			}
        		}
        	}

        };

        /*
         * 이벤트 : 불량내역의 불량코드 입력 후 Enter Key 입력시 Popup Search Call
         */
        this.grd_defectLotList_onkeyup = function(obj,e)
        {
        	if (obj.currentcell == obj.getBindCellIndex("body", "JOINCODE"))
        	{
        		if (e.keycode == 13)
        		{
        			this.fn_openPop("SRCH_DEFECT230","P00230"); //불량코드
        		}
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
            this.grd_defectLotInfo.addEventHandler("oncelldblclick",this.fn_gridOncelldblclick,this);
            this.btn_addRowDefectOutboundList.addEventHandler("onclick",this.fn_addRow,this);
            this.btn_delRow.addEventHandler("onclick",this.fn_deleteRow,this);
            this.grd_defectLotList.addEventHandler("oncloseup",this.grd_defectLotList_oncloseup,this);
            this.grd_defectLotList.addEventHandler("onexpandup",this.grd_defectLotList_onexpandup,this);
            this.grd_defectLotList.addEventHandler("onkeyup",this.grd_defectLotList_onkeyup,this);
            this.ds_defectLotList.addEventHandler("cancolumnchange",this.ds_defectLotList_cancolumnchange,this);
            this.ds_defectLotList.addEventHandler("oncolumnchanged",this.ds_defectLotList_oncolumnchanged,this);
            this.ds_defectLotList.addEventHandler("onvaluechanged",this.ds_defectLotList_onvaluechanged,this);
        };
        this.loadIncludeScript("QAM01800P1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
